const pptxgen = require("pptxgenjs");
const path = require("path");
const fs = require("fs");
const S = require("./data.js");
const { applyTheme } = require("../tools/apply_theme.js");

const ROOT = path.join(__dirname, "..");
const OUT = process.env.DECK_OUT_DIR || path.join(ROOT, "deck");
const FILE = path.join(OUT, "jica-un-open-gis-2026-structure.pptx");

const THEME = {
  name: "OpenGIS Structure",
  headFontFace: "Cambria",
  bodyFontFace: "Calibri",
  colors: {
    dk1: "1B1F23", lt1: "FFFFFF", dk2: "0F3D3E", lt2: "E6F0EF",
    accent1: "0F6E6E", accent2: "E8A33D", accent3: "B5472F",
    accent4: "5B7C99", accent5: "7A9E7E", accent6: "5F6B6B",
    hlink: "0F6E6E", folHlink: "5B7C99",
  },
};

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.33 x 7.5
pres.theme = { headFontFace: THEME.headFontFace, bodyFontFace: THEME.bodyFontFace };
pres.title = "UN Open GIS Initiative - structural draft";
pres.author = "hfu";
const C = pres.SchemeColor;
const W = 13.33, H = 7.5, MX = 0.6, CW = W - 2 * MX;

const FOOT = "UN Open GIS Initiative · structural draft, not the final delivery deck";
const footObj = { text: { text: FOOT, options: { x: MX, y: 7.05, w: 9, h: 0.3, fontSize: 10, color: C.accent6, margin: 0 } } };

pres.defineSlideMaster({
  title: "TITLE", background: { color: "FFFFFF" },
  objects: [
    { rect: { x: 0, y: 0, w: W, h: H, fill: { color: C.text2 } } },
    { placeholder: { options: { name: "title", type: "title", x: MX, y: 2.0, w: 7.2, h: 1.9, fontSize: 48, bold: true, color: C.background1, valign: "bottom", align: "left" }, text: "" } },
    { placeholder: { options: { name: "sub", type: "body", x: MX, y: 4.1, w: 7.6, h: 1.3, fontSize: 22, color: C.background2, valign: "top" }, text: "" } },
  ],
});
pres.defineSlideMaster({
  title: "DIVIDER", background: { color: "FFFFFF" },
  objects: [
    { rect: { x: 0, y: 0, w: W, h: H, fill: { color: C.text2 } } },
    { placeholder: { options: { name: "title", type: "title", x: MX, y: 2.6, w: 8.6, h: 1.3, fontSize: 56, bold: true, color: C.background1, valign: "middle", align: "left" }, text: "" } },
    { placeholder: { options: { name: "sub", type: "body", x: MX, y: 4.1, w: 8.6, h: 1.0, fontSize: 24, italic: true, color: C.background2, valign: "top" }, text: "" } },
  ],
});
pres.defineSlideMaster({
  title: "DARK", background: { color: "FFFFFF" },
  objects: [
    { rect: { x: 0, y: 0, w: W, h: H, fill: { color: C.text2 } } },
    { placeholder: { options: { name: "title", type: "title", x: MX, y: 0.7, w: CW, h: 1.0, fontSize: 34, bold: true, color: C.accent2, valign: "middle", align: "left" }, text: "" } },
  ],
});
pres.defineSlideMaster({
  title: "CONTENT", background: { color: "FFFFFF" },
  objects: [
    { placeholder: { options: { name: "title", type: "title", x: MX, y: 0.55, w: CW, h: 1.0, fontSize: 32, bold: true, color: C.text2, valign: "middle", align: "left" }, text: "" } },
    footObj,
  ],
  slideNumber: { x: 12.1, y: 7.05, w: 0.6, h: 0.3, fontSize: 10, color: C.accent6 },
});

const sessionName = { 0: "Opening", 1: "Session 1 · Your expertise", 2: "Session 2 · Connect", 3: "Session 3 · Test", 4: "Appendix · draft only" };
const sections = {};
for (const k of [0, 1, 2, 3, 4]) { pres.addSection({ title: sessionName[k] }); sections[k] = sessionName[k]; }

const MONO = "Courier New";
let objN = 0;
const on = (p) => `${p}-${++objN}`;
const T = (s, text, o) => s.addText(text, Object.assign({ isTextBox: true, margin: 0, color: C.text1, valign: "top", objectName: on("text") }, o));
const R = (s, type, o) => s.addShape(type, Object.assign({ objectName: on("shape") }, o));
const ST = pres.ShapeType;

function tag(s, text, color) {
  R(s, ST.roundRect, { x: W - MX - 2.9, y: 0.18, w: 2.9, h: 0.34, rectRadius: 0.08, fill: { color: color || C.accent2 }, line: { color: color || C.accent2, width: 0.5 } });
  T(s, text, { x: W - MX - 2.9, y: 0.18, w: 2.9, h: 0.34, fontSize: 12, bold: true, color: C.text1, align: "center", valign: "middle" });
}
function dashedBox(s, x, y, w, h) {
  R(s, ST.rect, { x, y, w, h, fill: { color: C.accent2, transparency: 85 }, line: { color: C.accent3, width: 2, dashType: "dash" } });
}
function foot(s, text, y) {
  if (!text) return;
  T(s, text, { x: MX, y: y || 6.3, w: CW, h: 0.55, fontSize: 20, italic: true, color: C.accent1, valign: "middle" });
}
function arrow(s, x, y, w) {
  s.addShape(ST.line, { x, y, w, h: 0, line: { color: C.accent1, width: 2.5, endArrowType: "triangle" }, objectName: on("arrow") });
}

const R_ = {
  title(s, d) {
    s.addText("UN Open GIS Initiative", { placeholder: "title" });
    s.addText(d.sub, { placeholder: "sub" });
    T(s, "JICA Training Course: National Survey Planning and Management\n25 November 2026  ·  Lecturer: hfu", { x: MX, y: 5.7, w: 7.2, h: 0.9, fontSize: 16, color: C.background2 });
    R(s, ST.roundRect, { x: MX, y: 0.7, w: 3.4, h: 0.42, rectRadius: 0.1, fill: { color: C.accent2 }, line: { color: C.accent2, width: 0.5 } });
    T(s, "STRUCTURAL DRAFT", { x: MX, y: 0.7, w: 3.4, h: 0.42, fontSize: 14, bold: true, align: "center", valign: "middle" });
    R(s, ST.ellipse, { x: 8.4, y: 2.0, w: 3.2, h: 3.2, fill: { color: C.accent1, transparency: 25 }, line: { color: C.accent2, width: 2 } });
    R(s, ST.ellipse, { x: 9.8, y: 2.0, w: 3.2, h: 3.2, fill: { color: C.accent2, transparency: 35 }, line: { color: C.accent2, width: 2 } });
    T(s, "connect", { x: 8.5, y: 3.25, w: 1.7, h: 0.6, fontSize: 22, bold: true, color: C.background1, align: "center", valign: "middle" });
    T(s, "test", { x: 11.3, y: 3.25, w: 1.6, h: 0.6, fontSize: 22, bold: true, color: C.text1, align: "center", valign: "middle" });
  },
  divider(s, d, o) {
    s.addText(o.title, { placeholder: "title" });
    s.addText(d.feeling, { placeholder: "sub" });
    T(s, d.label, { x: MX, y: 2.0, w: 8, h: 0.5, fontSize: 18, bold: true, color: C.accent2, charSpacing: 2 });
    R(s, ST.ellipse, { x: 9.9, y: 2.2, w: 2.8, h: 2.8, fill: { color: C.accent2 }, line: { color: C.accent2, width: 1 } });
    T(s, String(o.session), { x: 9.9, y: 2.2, w: 2.8, h: 2.8, fontSize: 96, bold: true, color: C.text1, align: "center", valign: "middle", fontFace: "Cambria" });
  },
  chips(s, d) {
    const cw = 2.4, ch = 1.0, gx = 0.25, gy = 0.35, x0 = MX, y0 = 2.1;
    d.chips.forEach((c, i) => {
      const x = x0 + (i % 3) * (cw + gx), y = y0 + Math.floor(i / 3) * (ch + gy);
      R(s, ST.roundRect, { x, y, w: cw, h: ch, rectRadius: 0.12, fill: { color: C.background2 }, line: { color: C.accent1, width: 1 } });
      T(s, c, { x, y, w: cw, h: ch, fontSize: 20, bold: true, color: C.text2, align: "center", valign: "middle" });
    });
    T(s, d.side, { x: 8.9, y: 2.1, w: 3.83, h: 3.7, fontSize: 26, bold: true, fontFace: "Cambria", color: C.accent1, valign: "middle" });
  },
  cards(s, d) {
    const n = d.cards.length, gap = 0.4, w = (CW - gap * (n - 1)) / n;
    d.cards.forEach((c, i) => {
      const x = MX + i * (w + gap), y = 1.9;
      R(s, ST.roundRect, { x, y, w, h: 3.9, rectRadius: 0.12, fill: { color: C.background2 }, line: { color: C.background2, width: 0.5 } });
      R(s, ST.ellipse, { x: x + 0.3, y: y + 0.3, w: 0.75, h: 0.75, fill: { color: C.accent1 }, line: { color: C.accent1, width: 0.5 } });
      T(s, String(i + 1), { x: x + 0.3, y: y + 0.3, w: 0.75, h: 0.75, fontSize: 24, bold: true, color: C.background1, align: "center", valign: "middle" });
      T(s, c.h, { x: x + 0.3, y: y + 1.25, w: w - 0.6, h: 0.85, fontSize: 22, bold: true, color: C.text2, fontFace: "Cambria" });
      T(s, c.t, { x: x + 0.3, y: y + 2.25, w: w - 0.6, h: 1.5, fontSize: 18 });
    });
    foot(s, d.foot, 6.1);
  },
  cards5(s, d) {
    const n = d.cards.length, gap = 0.25, w = (CW - gap * (n - 1)) / n;
    d.cards.forEach((c, i) => {
      const x = MX + i * (w + gap), y = 1.95;
      R(s, ST.roundRect, { x, y, w, h: 4.2, rectRadius: 0.12, fill: { color: C.background2 }, line: { color: C.background2, width: 0.5 } });
      R(s, ST.ellipse, { x: x + 0.25, y: y + 0.25, w: 0.65, h: 0.65, fill: { color: C.accent2 }, line: { color: C.accent2, width: 0.5 } });
      T(s, String(i + 1), { x: x + 0.25, y: y + 0.25, w: 0.65, h: 0.65, fontSize: 22, bold: true, align: "center", valign: "middle" });
      T(s, c.h, { x: x + 0.25, y: y + 1.1, w: w - 0.5, h: 0.6, fontSize: 22, bold: true, color: C.text2, fontFace: "Cambria" });
      T(s, c.t, { x: x + 0.25, y: y + 1.8, w: w - 0.5, h: 2.2, fontSize: 16 });
    });
  },
  chain(s, d) {
    const n = d.nodes.length, gap = 0.5, w = (CW - gap * (n - 1)) / n, y = 2.1, h = 3.2;
    d.nodes.forEach((c, i) => {
      const x = MX + i * (w + gap);
      R(s, ST.roundRect, { x, y, w, h, rectRadius: 0.1, fill: { color: i % 2 ? C.background2 : C.background2 }, line: { color: C.accent1, width: 1.5 } });
      T(s, c.h, { x: x + 0.15, y: y + 0.2, w: w - 0.3, h: 1.0, fontSize: n >= 5 ? 16 : 20, bold: true, color: C.text2, fontFace: "Cambria" });
      T(s, c.t, { x: x + 0.15, y: y + 1.3, w: w - 0.3, h: 1.5, fontSize: 16 });
      if (i < n - 1) arrow(s, x + w + 0.05, y + h / 2, gap - 0.1);
    });
    foot(s, d.foot, 5.75);
  },
  cycle(s, d) {
    const n = d.nodes.length, w = 2.4, gap = (CW - n * w) / (n - 1), y = 2.0, h = 1.3;
    d.nodes.forEach((c, i) => {
      const x = MX + i * (w + gap);
      R(s, ST.roundRect, { x, y, w, h, rectRadius: 0.15, fill: { color: i === 1 || i === 2 ? C.accent2 : C.accent1 }, line: { color: C.accent1, width: 1 } });
      T(s, c, { x, y, w, h, fontSize: 26, bold: true, color: i === 1 || i === 2 ? C.text1 : C.background1, align: "center", valign: "middle", fontFace: "Cambria" });
      if (i < n - 1) arrow(s, x + w + 0.05, y + h / 2, gap - 0.1);
    });
    const cx0 = MX + (w + gap) + w / 2, cx1 = MX + (n - 1) * (w + gap) + w / 2, yb = y + h, yr = 4.3;
    const L = { color: C.accent1, width: 2.5 };
    s.addShape(ST.line, { x: cx1, y: yb, w: 0, h: yr - yb, line: L, objectName: on("loop") });
    s.addShape(ST.line, { x: cx0, y: yr, w: cx1 - cx0, h: 0, line: L, objectName: on("loop") });
    s.addShape(ST.line, { x: cx0, y: yb + 0.05, w: 0, h: yr - yb - 0.05, flipV: true, line: { color: C.accent1, width: 2.5, endArrowType: "triangle" }, objectName: on("loop") });
    T(s, d.back, { x: cx0, y: yr + 0.1, w: cx1 - cx0, h: 0.5, fontSize: 18, italic: true, color: C.accent6, align: "center" });
    foot(s, d.foot, 5.6);
  },
  devices(s, d) {
    const hdr = d.head.map((t) => ({ text: t, options: { bold: true, color: "FFFFFF", fill: { color: "0F3D3E" }, align: "left" } }));
    const body = d.devices.map((id) => [
      { text: id, options: { bold: true, fontFace: MONO, color: "0F3D3E", fill: { color: "E6F0EF" } } },
      { text: (d.countries && d.countries[id]) || "", options: { fill: { color: "FFFFFF" } } },
      { text: (d.ips && d.ips[id]) || "", options: { fontFace: MONO, fill: { color: "FFFFFF" } } },
    ]);
    s.addTable([hdr, ...body], { x: MX, y: 1.8, w: 7.2, colW: [1.8, 3.0, 2.4], fontSize: 14, rowH: 0.34, border: { type: "solid", pt: 1, color: "0F6E6E" }, valign: "middle", objectName: on("table") });
    const x = 8.3, w = W - MX - x;
    T(s, d.factsHead, { x, y: 1.8, w, h: 0.5, fontSize: 22, bold: true, color: C.accent1, fontFace: "Cambria" });
    const runs = d.facts.map((f, i) => ({ text: f, options: { bullet: true, breakLine: i < d.facts.length - 1, paraSpaceAfter: 10 } }));
    T(s, runs, { x, y: 2.45, w, h: 2.2, fontSize: 18 });
    T(s, [{ text: "Status dashboard", options: { bold: true, breakLine: true } }, { text: d.url }], { x, y: 4.8, w, h: 0.8, fontSize: 14, color: C.accent6 });
    T(s, d.foot, { x: MX, y: 6.15, w: CW, h: 0.5, fontSize: 14, italic: true, color: C.accent6 });
  },
  netflow(s, d) {
    const bw = 3.0, y = 1.95, h = 3.5, xr = W - MX - bw, xa = MX + bw, wa = xr - xa;
    const box = (x, head, lines, mono) => {
      R(s, ST.roundRect, { x, y, w: bw, h, rectRadius: 0.12, fill: { color: C.background2 }, line: { color: C.accent1, width: 1.5 } });
      T(s, head, { x: x + 0.25, y: y + 0.25, w: bw - 0.5, h: 0.9, fontSize: 22, bold: true, color: C.text2, fontFace: "Cambria" });
      T(s, lines, { x: x + 0.25, y: y + 1.25, w: bw - 0.5, h: 1.2, fontSize: 18 });
      if (mono) {
        R(s, ST.roundRect, { x: x + 0.25, y: y + 2.6, w: bw - 0.5, h: 0.54, rectRadius: 0.08, fill: { color: "FFFFFF" }, line: { color: C.accent1, width: 1 } });
        T(s, mono, { x: x + 0.25, y: y + 2.6, w: bw - 0.5, h: 0.54, fontSize: 18, bold: true, fontFace: MONO, color: C.text2, align: "center", valign: "middle" });
      }
    };
    box(MX, "Your PC", "PowerShell\nWeb browser");
    box(xr, "Your Raspberry Pi", [{ text: "IP address", options: { bold: true, breakLine: true } }, { text: "its address on the network" }], "<your-ip>");
    const lab = (term, rest, yy) => T(s, [{ text: term, options: { bold: true, color: C.accent1 } }, { text: rest }], { x: xa + 0.2, y: yy, w: wa - 0.4, h: 0.45, fontSize: 18, align: "center", valign: "middle" });
    R(s, ST.roundRect, { x: xa + 0.3, y, w: wa - 0.6, h: 0.6, rectRadius: 0.1, fill: { color: C.accent2, transparency: 70 }, line: { color: C.accent2, width: 1 } });
    lab("SSID", ": the name of the Wi-Fi network", y + 0.075);
    lab("SSH", ": a secure way to type commands on the Pi", 3.0);
    arrow(s, xa + 0.1, 3.55, wa - 0.2);
    lab("URL", ": the web address you type in the browser", 4.0);
    arrow(s, xa + 0.1, 4.55, wa - 0.2);
    lab("Port", ": the door number on the Pi, such as 80 or 8000", 4.65);
    T(s, d.foot, { x: MX, y: 5.85, w: CW, h: 0.5, fontSize: 14, italic: true, color: C.accent6 });
  },
  stats(s, d) {
    const n = d.stats.length, gap = 0.4, w = (CW - gap * (n - 1)) / n;
    d.stats.forEach((c, i) => {
      const x = MX + i * (w + gap), y = 2.0;
      R(s, ST.roundRect, { x, y, w, h: 3.2, rectRadius: 0.12, fill: { color: C.background2 }, line: { color: C.background2, width: 0.5 } });
      T(s, c.n, { x, y: y + 0.5, w, h: 1.4, fontSize: c.n.length > 6 ? 44 : 66, bold: true, color: C.accent1, align: "center", valign: "middle", fontFace: "Cambria" });
      T(s, c.l, { x: x + 0.3, y: y + 2.0, w: w - 0.6, h: 0.9, fontSize: 20, align: "center" });
    });
    T(s, d.foot, { x: MX, y: 5.6, w: CW, h: 0.6, fontSize: 14, color: C.accent6 });
  },
  placeholder(s, d) {
    dashedBox(s, MX, 1.9, 7.4, 4.7);
    T(s, "PLACEHOLDER", { x: MX + 0.3, y: 2.1, w: 6.8, h: 0.4, fontSize: 14, bold: true, color: C.accent3 });
    T(s, d.label, { x: MX + 0.3, y: 2.9, w: 6.8, h: 1.2, fontSize: 28, bold: true, color: C.text2, fontFace: "Cambria", align: "center", valign: "middle" });
    T(s, d.need, { x: MX + 0.3, y: 4.5, w: 6.8, h: 1.9, fontSize: 14, color: C.accent3, italic: true });
    const x = 8.4, w = W - MX - x;
    T(s, d.factsHead, { x, y: 1.95, w, h: 0.5, fontSize: 22, bold: true, color: C.accent1, fontFace: "Cambria" });
    const runs = d.facts.map((f, i) => ({ text: f, options: { bullet: true, breakLine: i < d.facts.length - 1, paraSpaceAfter: 10 } }));
    T(s, runs, { x, y: 2.6, w, h: 4.0, fontSize: 18 });
  },
  placeholder3(s, d) {
    const n = d.cols.length, gap = 0.35, evenW = (CW - gap * (n - 1)) / n;
    const hasImg = d.cols.some((c) => c.imgs), bh = hasImg ? 4.0 : 3.4, ny = hasImg ? 6.05 : 5.6;
    let x = MX;
    d.cols.forEach((c) => {
      const w = c.w || evenW, y = 1.9;
      dashedBox(s, x, y, w, bh);
      T(s, c.h, { x: x + 0.25, y: y + 0.25, w: w - 0.5, h: hasImg ? 0.5 : 0.9, fontSize: 22, bold: true, color: C.text2, fontFace: "Cambria" });
      if (c.imgs) {
        let ix = x + 0.25;
        c.imgs.forEach((im) => {
          s.addImage({ path: path.join(ROOT, im.src), x: ix, y: y + 0.8, w: im.w, h: im.h, altText: im.alt, objectName: on("photo") });
          ix += im.w + 0.15;
        });
        T(s, c.cap, { x: x + 0.25, y: y + 3.65, w: w - 0.5, h: 0.3, fontSize: 12, italic: true, color: C.accent6 });
      } else {
        T(s, c.t, { x: x + 0.25, y: y + (hasImg ? 0.9 : 1.3), w: w - 0.5, h: hasImg ? 2.9 : 1.9, fontSize: 16, italic: !c.plain, color: c.plain ? C.text1 : C.accent3 });
      }
      x += w + gap;
    });
    T(s, d.need, { x: MX, y: ny, w: CW, h: 0.8, fontSize: 16, bold: true, color: C.accent3 });
  },
  steps(s, d) {
    const rows = d.rows, n = rows.length, y0 = 1.85, rh = Math.min(0.85, 4.3 / n);
    const th = rh - 0.1, fs = n <= 5 ? 22 : 20, bh = Math.min(0.54, rh - 0.12);
    rows.forEach((r, i) => {
      const y = y0 + i * rh, cy = y + (th - 0.5) / 2, by = y + (th - bh) / 2;
      R(s, ST.ellipse, { x: MX, y: cy, w: 0.5, h: 0.5, fill: { color: C.accent1 }, line: { color: C.accent1, width: 0.5 } });
      T(s, String(i + 1), { x: MX, y: cy, w: 0.5, h: 0.5, fontSize: 18, bold: true, color: C.background1, align: "center", valign: "middle" });
      const hasM = !!r.m;
      T(s, r.t, { x: MX + 0.75, y, w: hasM ? 5.6 : 11, h: th, fontSize: fs, valign: "middle" });
      if (hasM) {
        R(s, ST.roundRect, { x: 7.1, y: by, w: 5.6, h: bh, rectRadius: 0.08, fill: { color: C.background2 }, line: { color: C.accent1, width: 1 } });
        T(s, r.m, { x: 7.3, y: by, w: 5.3, h: bh, fontSize: 18, fontFace: MONO, bold: true, color: C.text2, valign: "middle" });
      }
    });
    foot(s, d.foot, y0 + n * rh + 0.2);
  },
  compare(s, d) {
    const w = (CW - 1.2) / 2, y = 1.9, h = 3.6;
    [d.left, d.right].forEach((c, i) => {
      const x = MX + i * (w + 1.2);
      R(s, ST.roundRect, { x, y, w, h, rectRadius: 0.12, fill: { color: i ? C.background2 : C.accent1 }, line: { color: C.accent1, width: 1 } });
      T(s, c.h, { x: x + 0.3, y: y + 0.25, w: w - 0.6, h: 0.7, fontSize: 24, bold: true, fontFace: "Cambria", color: i ? C.text2 : C.background1 });
      const runs = c.items.map((t, k) => ({ text: t, options: { bullet: true, breakLine: k < c.items.length - 1, paraSpaceAfter: 8 } }));
      T(s, runs, { x: x + 0.3, y: y + 1.1, w: w - 0.6, h: 2.3, fontSize: 18, color: i ? C.text1 : C.background1 });
    });
    arrow(s, MX + w + 0.15, y + h / 2, 0.9);
    T(s, d.note, { x: MX, y: 5.85, w: CW, h: 0.6, fontSize: 20, italic: true, color: C.accent1 });
  },
  reflect(s, d) {
    R(s, ST.roundRect, { x: MX, y: 1.85, w: CW, h: 2.3, rectRadius: 0.12, fill: { color: C.background2 }, line: { color: C.background2, width: 0.5 } });
    T(s, d.q, { x: MX + 0.5, y: 1.85, w: CW - 1.0, h: 2.3, fontSize: 34, bold: true, fontFace: "Cambria", color: C.text2, valign: "middle" });
    d.prompts.forEach((p, i) => {
      const x = MX + i * (CW / 2 + 0.1);
      R(s, ST.ellipse, { x, y: 4.55, w: 0.5, h: 0.5, fill: { color: C.accent2 }, line: { color: C.accent2, width: 0.5 } });
      T(s, String(i + 1), { x, y: 4.55, w: 0.5, h: 0.5, fontSize: 18, bold: true, align: "center", valign: "middle" });
      T(s, p, { x: x + 0.7, y: 4.5, w: CW / 2 - 1, h: 0.9, fontSize: 20, valign: "middle" });
    });
    foot(s, d.foot, 5.9);
  },
  bridge(s, d) {
    const w = 4.6, y = 2.1, h = 2.9;
    [d.a, d.b].forEach((c, i) => {
      const x = i ? W - MX - w : MX;
      R(s, ST.roundRect, { x, y, w, h, rectRadius: 0.15, fill: { color: i ? C.accent2 : C.accent1 }, line: { color: C.accent1, width: 1 } });
      T(s, c.h, { x, y: y + 0.6, w, h: 0.9, fontSize: 38, bold: true, fontFace: "Cambria", color: i ? C.text1 : C.background1, align: "center", valign: "middle" });
      T(s, c.t, { x, y: y + 1.65, w, h: 0.6, fontSize: 20, color: i ? C.text1 : C.background1, align: "center" });
    });
    arrow(s, MX + w + 0.2, y + h / 2, W - 2 * MX - 2 * w - 0.4);
    foot(s, d.foot, 5.6);
  },
  stoptable(s, d) {
    const n = d.stops.length, gap = 0.4, w = (CW - gap * (n - 1)) / n, y = 1.85, h = 0.8;
    d.stops.forEach((c, i) => {
      const x = MX + i * (w + gap);
      R(s, ST.roundRect, { x, y, w, h, rectRadius: 0.1, fill: { color: C.accent1 }, line: { color: C.accent1, width: 1 } });
      T(s, c, { x, y, w, h, fontSize: 20, bold: true, color: C.background1, align: "center", valign: "middle" });
      if (i < n - 1) arrow(s, x + w + 0.03, y + h / 2, gap - 0.06);
    });
    const hdr = d.head.map((t) => ({ text: t, options: { bold: true, color: "FFFFFF", fill: { color: "0F3D3E" }, align: "center" } }));
    const body = d.rows.map((r) => r.map((t, i) => ({ text: t, options: { align: "center", color: "1B1F23", fill: { color: i === 0 ? "E6F0EF" : "FFFFFF" } } })));
    s.addTable([hdr, ...body], { x: MX, y: 3.05, w: CW, colW: [2.4, 1.5, 1.5, 1.5, 1.5, 1.8, 1.93], fontSize: 16, rowH: 0.5, border: { type: "solid", pt: 1, color: "0F6E6E" }, valign: "middle", objectName: on("table") });
    T(s, d.foot, { x: MX, y: 5.85, w: CW, h: 0.5, fontSize: 16, italic: true, color: C.accent6 });
  },
  fill3(s, d) {
    d.rows.forEach((r, i) => {
      const y = 1.95 + i * 1.3;
      R(s, ST.ellipse, { x: MX, y: y + 0.15, w: 0.7, h: 0.7, fill: { color: C.accent1 }, line: { color: C.accent1, width: 0.5 } });
      T(s, String(i + 1), { x: MX, y: y + 0.15, w: 0.7, h: 0.7, fontSize: 24, bold: true, color: C.background1, align: "center", valign: "middle" });
      T(s, r, { x: MX + 1.0, y, w: 4.6, h: 1.0, fontSize: 22, bold: true, color: C.text2, valign: "middle", fontFace: "Cambria" });
      R(s, ST.roundRect, { x: 6.5, y: y + 0.1, w: 6.2, h: 0.8, rectRadius: 0.08, fill: { color: "FFFFFF" }, line: { color: C.accent1, width: 1.5, dashType: "dash" } });
    });
    foot(s, d.foot, 5.95);
  },
  refs(s, d) {
    d.rows.forEach((r, i) => {
      const y = 2.0 + i * 1.3;
      T(s, r.t, { x: MX, y, w: CW, h: 0.55, fontSize: 26, bold: true, color: C.text2, fontFace: "Cambria", valign: "middle" });
      T(s, r.u, { x: MX, y: y + 0.55, w: CW, h: 0.45, fontSize: 22, color: C.accent1, fontFace: MONO, valign: "middle" });
    });
  },
  close(s, d) {
    s.addText("Three things to take home", { placeholder: "title" });
    d.lines.forEach((l, i) => {
      const y = 2.2 + i * 1.5;
      R(s, ST.ellipse, { x: MX, y: y + 0.15, w: 0.9, h: 0.9, fill: { color: C.accent2 }, line: { color: C.accent2, width: 0.5 } });
      T(s, String(i + 1), { x: MX, y: y + 0.15, w: 0.9, h: 0.9, fontSize: 32, bold: true, align: "center", valign: "middle", fontFace: "Cambria" });
      T(s, l, { x: MX + 1.3, y, w: 10.5, h: 1.2, fontSize: 44, bold: true, fontFace: "Cambria", color: C.background1, valign: "middle" });
    });
  },
};

const tagFor = { placeholder: "PLACEHOLDER", open: "OPEN ITEM" };

S.forEach((o, idx) => {
  const master = o.kind === "title" ? "TITLE" : o.kind === "divider" ? "DIVIDER" : o.kind === "close" ? "DARK" : "CONTENT";
  const s = pres.addSlide({ masterName: master, sectionTitle: sessionName[o.session] });
  if (master === "CONTENT") {
    s.addText(o.title, { placeholder: "title" });
    const t = o.tag || tagFor[o.status];
    if (t) tag(s, t, o.status === "ready" ? C.accent2 : C.accent2);
  }
  R_[o.kind](s, o.data, o);
  const dd = o.data || {};
  const visual = o.visual ? o.visual : o.kind === "placeholder" || o.kind === "placeholder3" ? `SOURCE NEEDED. ${dd.need}`
    : o.kind === "stats" ? "Text only. Figures from https://drone.hotosm.org/ (checked 2026-11-02)."
    : "Original diagram made for this deck. No external image.";
  const notes = [
    `SAY: ${o.say}`,
    `PURPOSE: ${o.purpose}`,
    `TRANSITION: ${o.transition}`,
    `SOURCE / STATUS: ${o.evidence} [slide status: ${o.status}]`,
    `VISUAL: ${visual}`,
    `CAUTION: ${o.caution}`,
    `TIME: about ${o.time} min`,
  ].join("\n\n");
  s.addNotes(notes);
  o.n = idx + 1;
});

(async () => {
  await pres.writeFile({ fileName: FILE });
  await applyTheme(FILE, THEME);
  console.log("written", FILE, S.length);
})();
