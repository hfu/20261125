#!/usr/bin/env python3
"""Build + verify the deck (CLAUDE.md "検証" 1-5) in one command.

  python3 tools/verify.py            # build, structural checks, PDF, contact sheets
  python3 tools/verify.py --no-pdf   # skip LibreOffice / pdftoppm (fast)
  python3 tools/verify.py --pptx deck/xxx.pptx   # verify an existing file, no build

Outputs go to build-tmp/ (git-ignored): the PPTX, PDF, per-slide PNGs and
contact-N.png / contact.html for visual review. Exit code 1 if any check FAILs.
Requires: node + npm install, and for the PDF step soffice + pdftoppm (+ Pillow).
"""
import argparse, json, os, re, shutil, subprocess, sys, zipfile

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TMP = os.path.join(ROOT, "build-tmp")
NAME = os.environ.get("DECK_NAME", "jica-un-open-gis-2026-structure")

# CLAUDE.md "検証" 3: where each sensitive-looking string may appear (1-based slide numbers).
ALLOW_VECTORTILES = {21, 27}
ALLOW_IP = {25}
FORBIDDEN_WORDS = ["m321", "m323", "m331", "m342", "blueorigin", "cloudflare"]  # admin / non-participating hosts, ops route
HEX64 = re.compile(r"\b[0-9a-fA-F]{64}\b")
MAC = re.compile(r"\b[0-9a-fA-F]{2}(?:[:-][0-9a-fA-F]{2}){5}\b")
IP = re.compile(r"\b192\.168\.\d{1,3}\.\d{1,3}\b")

fails, warns = [], []
SKIP_NOTES = False


def ok(msg): print("  PASS", msg)
def fail(msg): fails.append(msg); print("  FAIL", msg)
def warn(msg): warns.append(msg); print("  WARN", msg)


def run(cmd, **kw):
    return subprocess.run(cmd, check=True, capture_output=True, text=True, **kw)


def build():
    os.makedirs(TMP, exist_ok=True)
    env = dict(os.environ, DECK_OUT_DIR=TMP, PLAN_OUT_DIR=TMP)
    print("[1] build")
    r = run(["node", os.path.join(ROOT, "src", "build.js")], env=env)
    print("  " + r.stdout.strip().splitlines()[-1].replace(ROOT + "/", ""))
    r = run(["node", os.path.join(ROOT, "src", "plan.js")], env=env)
    return os.path.join(TMP, NAME + ".pptx")


def text_of(xml):
    paras = re.findall(r"<a:p>.*?</a:p>|<a:p [^>]*>.*?</a:p>", xml, flags=re.S)
    return "\n".join("".join(re.findall(r"<a:t>([^<]*)</a:t>", p)) for p in paras)


def load_deck(path):
    z = zipfile.ZipFile(path)
    names = z.namelist()
    slides = {}
    for n in names:
        m = re.fullmatch(r"ppt/slides/slide(\d+)\.xml", n)
        if m:
            slides[int(m.group(1))] = n
    notes = {}
    for k, sn in slides.items():
        rel = z.read(f"ppt/slides/_rels/slide{k}.xml.rels").decode()
        m = re.search(r'Target="\.\./notesSlides/(notesSlide\d+\.xml)"', rel)
        notes[k] = "ppt/notesSlides/" + m.group(1) if m else None
    return z, names, slides, notes


def check_structure(z, names, slides, notes):
    print("[2] notes: SAY and VISUAL on every slide")
    bad = 0
    for k in sorted(slides if not SKIP_NOTES else []):
        nt = text_of(z.read(notes[k]).decode()) if notes[k] else ""
        for label in ("SAY", "VISUAL"):
            if not re.search(rf"^{label}\b", nt, flags=re.M):
                fail(f"slide {k}: notes lack {label}"); bad += 1
    if SKIP_NOTES: print("  (skipped)")
    elif not bad:
        ok(f"all {len(slides)} slides have SAY and VISUAL")

    print("[3] sensitive strings")
    found_vt, found_ip, other = {}, {}, []
    for k in sorted(slides):
        for kind, part in (("slide", slides[k]), ("notes", notes[k])):
            if not part: continue
            t = text_of(z.read(part).decode())
            if "vectortiles" in t.lower(): found_vt.setdefault(k, []).append(kind)
            if IP.search(t): found_ip.setdefault(k, []).append(kind)
    for k in found_vt:
        if k not in ALLOW_VECTORTILES: fail(f"'vectortiles' on slide {k} {found_vt[k]} (allowed: {sorted(ALLOW_VECTORTILES)})")
    if not any(k not in ALLOW_VECTORTILES for k in found_vt): ok(f"'vectortiles' only on slides {sorted(found_vt)}")
    for k in found_ip:
        if k not in ALLOW_IP: fail(f"IP address on slide {k} {found_ip[k]} (allowed: {sorted(ALLOW_IP)})")
    if not any(k not in ALLOW_IP for k in found_ip): ok(f"192.168.x.x only on slides {sorted(found_ip)}")
    # whole-package scan (all XML incl. docProps, theme, layouts, rels)
    hits = []
    for n in names:
        if not n.endswith((".xml", ".rels")): continue
        t = z.read(n).decode("utf8", "replace")
        if HEX64.search(t): hits.append(f"{n}: 64-hex string")
        if MAC.search(t): hits.append(f"{n}: MAC-like string")
        for w in FORBIDDEN_WORDS:
            if re.search(w, t, flags=re.I): hits.append(f"{n}: forbidden word '{w}'")
        if n.startswith(("ppt/slideLayouts", "ppt/slideMasters", "docProps", "ppt/theme")) and IP.search(t):
            hits.append(f"{n}: IP address")
    for h in hits: fail(h)
    if not hits: ok("no 64-hex, MAC, admin/non-participating host or ops-route strings in any XML part")

    print("[4] hidden slides / comments")
    bad = False
    for n in names:
        if re.match(r"ppt/(comments|commentAuthors)|ppt/comments/", n): fail(f"comment part: {n}"); bad = True
    for k in slides:
        if re.search(r'<p:sld\b[^>]*\bshow="0"', z.read(slides[k]).decode()): fail(f"slide {k} is hidden"); bad = True
    if not bad: ok("no hidden slides, no comments")


def status_breakdown():
    print("[5] status breakdown")
    js = "const S=require('./src/data.js');const c={ready:0,placeholder:0,open:0};S.forEach(s=>c[s.status]++);console.log(JSON.stringify({n:S.length,c}))"
    d = json.loads(run(["node", "-e", js], cwd=ROOT).stdout)
    c = d["c"]
    print(f"  {d['n']} slides: ready {c['ready']} / placeholder {c['placeholder']} / open {c['open']}")
    return d["n"]


def render(pptx, nslides):
    print("[6] PDF + contact sheets")
    if not shutil.which("soffice") or not shutil.which("pdftoppm"):
        warn("soffice / pdftoppm not found: PDF step skipped"); return
    pdf = os.path.join(TMP, NAME + ".pdf")
    for f in os.listdir(TMP):
        if re.fullmatch(r"s-\d+\.png|contact-\d+\.png", f): os.remove(os.path.join(TMP, f))
    run(["soffice", "--headless", "--convert-to", "pdf", "--outdir", TMP, pptx])
    run(["pdftoppm", "-png", "-r", "60", pdf, os.path.join(TMP, "s")])
    pngs = sorted(f for f in os.listdir(TMP) if re.fullmatch(r"s-\d+\.png", f))
    if len(pngs) != nslides: fail(f"PDF has {len(pngs)} pages, expected {nslides}")
    else: ok(f"PDF rendered: {len(pngs)} pages")
    try:
        from PIL import Image, ImageDraw
    except ImportError:
        warn("Pillow missing: contact sheets skipped (PNGs are in build-tmp/)"); return
    cols, rows = 3, 4
    im0 = Image.open(os.path.join(TMP, pngs[0])); w, h = im0.size
    sheets = []
    for i in range(0, len(pngs), cols * rows):
        sheet = Image.new("RGB", (cols * (w + 8) + 8, rows * (h + 24) + 8), "white")
        d = ImageDraw.Draw(sheet)
        for j, f in enumerate(pngs[i:i + cols * rows]):
            x, y = 8 + (j % cols) * (w + 8), 8 + (j // cols) * (h + 24)
            d.text((x, y), f"slide {i + j + 1}", fill="black")
            sheet.paste(Image.open(os.path.join(TMP, f)), (x, y + 14))
        p = os.path.join(TMP, f"contact-{i // (cols * rows) + 1}.png"); sheet.save(p); sheets.append(p)
    ok("contact sheets: " + ", ".join(os.path.relpath(s, ROOT) for s in sheets))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--no-pdf", action="store_true")
    ap.add_argument("--pptx")
    ap.add_argument("--vt-slides", help="comma-separated slide numbers where 'vectortiles' may appear (default 21,27)")
    ap.add_argument("--ip-slides", help="comma-separated slide numbers where 192.168.x.x may appear (default 25)")
    ap.add_argument("--no-notes-check", action="store_true", help="skip the SAY/VISUAL notes check (talk deck has no SAY/VISUAL notes)")
    ap.add_argument("--no-status", action="store_true", help="skip the data.js status breakdown")
    a = ap.parse_args()
    global ALLOW_VECTORTILES, ALLOW_IP
    if a.vt_slides: ALLOW_VECTORTILES = {int(x) for x in a.vt_slides.split(",")}
    if a.ip_slides: ALLOW_IP = {int(x) for x in a.ip_slides.split(",")}
    global SKIP_NOTES
    SKIP_NOTES = a.no_notes_check
    pptx = os.path.abspath(a.pptx) if a.pptx else build()
    z, names, slides, notes = load_deck(pptx)
    check_structure(z, names, slides, notes)
    if not a.no_status:
        n = status_breakdown()
        if n != len(slides): fail(f"data.js has {n} slides but the PPTX has {len(slides)}")
    if not a.no_pdf: render(pptx, len(slides))
    print(f"\nRESULT: {'FAIL' if fails else 'PASS'} ({len(fails)} fail, {len(warns)} warn)")
    print("Visual check (overflow, overlap, small text) still needs eyes: open build-tmp/contact-*.png")
    sys.exit(1 if fails else 0)


if __name__ == "__main__":
    main()
