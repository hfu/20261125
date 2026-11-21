// Talk deck v1 (2026-11-21): slides for docs/jica-un-open-gis-2026-talk.md, in the dwg7 logo template.
// Output: deck/jica-un-open-gis-2026-talk-v1.pptx  (override with DECK_OUT_DIR)
const pptxgen = require("pptxgenjs");
const path = require("path");
const { applyTheme } = require("../tools/apply_theme.js");

const ROOT = path.join(__dirname, "..");
const OUT = process.env.DECK_OUT_DIR || path.join(ROOT, "deck");
const FILE = path.join(OUT, "jica-un-open-gis-2026-talk-v1.pptx");
const LOGO = (n) => path.join(ROOT, "assets/logo", n);
const SHOT = (n) => path.join(ROOT, "assets/screens", n);

// dwg7 logo palette (dwg7/logo v0.6) + neutrals
const BLUE = "1E5AA0", INK = "13233A", LBLUE = "6FA8E8", PALE = "E6EDF3", MIST = "EEF3F9", WHITE = "FFFFFF", DEEP = "0B1726", GREY = "5B6B7D";
// Fonts: system fonts for v1 (Sora / IBM Plex Mono are not installed everywhere). Change here after the fonts are installed.
const HEAD = "Arial", BODY = "Arial", MONO = "Courier New";
const W = 13.333, H = 7.5, MX = 0.7;

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE";
pres.title = "UN Open GIS Initiative / Smart Maps (dwg7) activities";
pres.author = "Hidenori Fujimura";
pres.theme = { headFontFace: HEAD, bodyFontFace: BODY };

const S = []; // slide specs
const add = (o) => S.push(o);

// ---------------- content ----------------
add({ k: "title", time: "13:00", src: "talk.md 冒頭" });
add({ k: "bullets", title: "What we do this afternoon", time: "13:00–13:05 (5 min)",
  items: [{ t: "A part of the web mapping series (this morning – tomorrow)", sub: true },
    "1. Hands-on practice of Raspberry Pi 4B server", "2. UN Open GIS Initiative", "3. Smart Maps (dwg7) activities"] });
add({ k: "statement", dark: false, lines: ["In national geospatial information authorities, we produce geospatial information.", "We also need to know how it is used."], time: "(Background)" });
add({ k: "bullets", title: "Background", time: "(Background)", big: true,
  items: ["I make use of my ICT (information and communications technologies) background to promote the use of geospatial information, both inside and outside the government."] });

add({ k: "section", n: "1", title: "Hands-on practice", sub: "Raspberry Pi 4B server", time: "13:00–14:00" });
add({ k: "bullets", title: "I prepared a server for each of you", time: "13:05 (5 min total with Wi-Fi)",
  items: ["Each server is as small as a credit card, and costs about $100.", "It is called Raspberry Pi 4B.", "They are in the cabinet in this room.", "We will use them tomorrow.", "So, let us test if they work for you."] });
add({ k: "steps", title: "First: join the server Wi-Fi", time: "5 min (–13:10)", vt: true,
  steps: [{ t: "Open the Wi-Fi list on your laptop." }, { t: "Choose the server Wi-Fi.", chips: ["SSID: vectortiles", "Password: vectortiles"] }, { t: "Check that you are connected to the vectortiles Wi-Fi." }],
  foot: "The Wi-Fi is 5 GHz only. If you cannot see it, raise your hand." });
add({ k: "table", title: "Second: know the IP address of your Raspberry Pi 4B", time: "5 min (–13:15)",
  head: ["Host name", "Country", "IP address"],
  rows: [["m327", "Fiji", "192.168.86.27"], ["m328", "Gabon", "192.168.86.28"], ["m332", "Laos", "192.168.86.32"], ["m334", "Nigeria", "192.168.86.34"], ["m336", "Papua New Guinea", "192.168.86.36"], ["m347", "Rwanda", "192.168.86.47"], ["m348", "Sierra Leone", "192.168.86.48"], ["m349", "Timor-Leste", "192.168.86.49"], ["m355", "Togo", "192.168.86.55"]],
  foot: "Take note of your IP address. The host name is optional." });
add({ k: "terminal", title: "Third: connect from your laptop", time: "15 min (–13:30). Those who get stuck: work with a helper; the others go on.",
  lines: [["# 1. Open PowerShell from the Windows Start menu", "dim"], ["", ""], ["$ ssh niroku@192.168.86.xx", "cmd"], ["Password: ********    # told in class", "dim"], ["", ""], ["$ man ls        # press q to quit", "cmd"], ["$ exit", "cmd"]] });
add({ k: "statement", dark: true, lines: ["You are now logged in to the server.", "You are now a Unix user."], time: "(–13:30)" });
add({ k: "bullets", title: "Power of the command line interface (CLI)", time: "5 min (–13:35)",
  items: ["Command Line Interface (CLI)", { t: "Opposite: Graphical User Interface (GUI)", sub: true }, "CLI works well with Artificial Intelligence (AI)", { t: "Large Language Model (LLM), to be specific", sub: true }] });
add({ k: "terminal", title: "The Internet seen from CLI", time: "15 min (–13:50) with the next three slides",
  lines: [["$ curl -I https://maps.gsi.go.jp/xyz/std/0/0/0.png", "cmd"], ["HTTP/2 200", ""], ["content-type: image/png", ""], ["content-length: 77992", ""], ["server: AmazonS3", ""], ["last-modified: Sat, 01 Mar 2025 16:29:15 GMT", ""], ["x-cache: Hit from cloudfront", ""], ["age: 18522", ""]] });
add({ k: "bullets", title: "Reading the headers (1/3)", time: "draft by Claude", items: ["HTTP/2 200: the server answered, and all is well.", "content-type: image/png", { t: "A map tile is just an image file.", sub: true }, "The address 0/0/0 is the whole world, in one tile (zoom / x / y)."] });
add({ k: "bullets", title: "Reading the headers (2/3)", time: "draft by Claude", items: ["content-length: 77992", { t: "About 78 KB. A whole-world map is that small.", sub: true }, "last-modified: 1 March 2025", { t: "Information has an age. We can ask for it.", sub: true }] });
add({ k: "bullets", title: "Reading the headers (3/3)", time: "draft by Claude", items: ["server: AmazonS3", "x-cache: Hit from cloudfront", { t: "You did not reach the original server in Japan. You reached a nearby copy.", sub: true }, "age: 18522", { t: "The copy is about 5 hours old.", sub: true }] });
add({ k: "statement", dark: false, lines: ["Questions on Raspberry Pi?"], time: "10 min (–14:00). Break: help those who are still stuck." });

add({ k: "section", n: "2", title: "UN Open GIS Initiative", sub: "", time: "14:15–14:45" });
add({ k: "bullets", title: "Open source software and GSI Maps", time: "5 min", items: ["Open source has been the procurement strategy of GSI Maps since 2013.", { t: "Optionality and interoperability", sub: true }] });
add({ k: "bullets", title: "UN Open GIS Initiative", time: "8 min",
  items: ["Initiated to support UN peacekeeping missions, since 2016.", "Hidenori joined the UN Geospatial Information Section, 2017–2019.", { t: "UN Open GIS Initiative + UN Maps = UN Vector Tile Toolkit (2018–)", sub: true }] });
add({ k: "bullets", title: "Current co-chairs", time: "3 min",
  items: ["Ariel Anthieni, OSGeo Foundation", "Hidenori Fujimura, Geospatial Information Authority of Japan", "Josep Parareda, United Nations Geospatial Information Section"] });
add({ k: "bullets", title: "Domain Working Groups (DWGs)", time: "5 min",
  items: ["DWG1: Hybrid GIS Infrastructure (inactive)", "DWG2: Capacity Building (inactive)", "DWG5: Geo-AI", "DWG6: OpenDroneMap", "DWG7: Smart Maps", "DWG8: IGIF implementation"] });
add({ k: "bullets", title: "How it works", time: "5 min (draft by Claude, from the dwg7 guide)",
  items: ["Everything happens in public issues: github.com/UNopenGIS/7", "A thread follows one pattern:", { t: "question → experiment → result with conditions → review and correction → reuse", sub: true }, "Weekly meetup: Tuesday 12:30–12:55 JST, online", { t: "Presenters post a written update before the meeting.", sub: true }, "Anyone can read, comment, and repeat an experiment."] });

add({ k: "section", n: "3", title: "Smart Maps (dwg7) activities", sub: "", time: "14:45–15:15, break, 15:30–16:30" });
add({ k: "bullets", title: "DWG7: Smart Maps", time: "(dwg7 intro, 8 min)",
  items: ["A group for individual developers", "Web maps for smart decisions", "Vision: keep web maps open.", "Mission: test new technologies.", "Rule: share projects or topics under gh:unopengis or gh:dwg7."] });
add({ k: "bullets", title: "dwg7 and AI", time: "3 min",
  items: ["Since 2023, dwg7 has treated AI as one of the members.", { t: "The dwg7 web page invites “LLM users, and even LLMs”.", sub: true }, "Today, AI writes part of our code and records.", { t: "Many projects you will see were made with AI.", sub: true }, "People decide. AI cannot see the site."] });
add({ k: "bullets", title: "Recent projects", time: "1 min",
  items: ["bvmap-koicha: GSI vector tiles, brewed thicker", "snow-hokkaido: a daily record of snow from satellites", "waterloo: 5 cm drone imagery of Sierra Leone", "dji-waypoints-hitl: a drone, an AI agent, and a human", "dorayaki: 3D points inside ordinary map tiles", "ortho-earth: a globe where every country has its true size"] });

// bvmap-koicha
add({ k: "bullets", kicker: "dwg7/bvmap-koicha", title: "A thicker brew of GSI’s vector tiles", time: "11 min (3 slides)",
  items: ["GSI publishes vector tiles of Japan (bvmap).", "At a wider view, they hold few buildings. Tile size is limited.", "bvmap-koicha uses the same data, and shows the buildings of a closer view at a wider view.", { t: "Tokyo, zoom 15: about 20 times more buildings.", sub: true }, "It is a dwg7 activity. It is not an official GSI product."] });
add({ k: "image", file: "bvmap-koicha-tokyo.jpg", title: "bvmap-koicha: left is the original, right is koicha", credit: "Based on GSI optimized vector tiles (bvmap). A dwg7 activity, not an official GSI product. dwg7.unopengis.org/bvmap-koicha", time: "" });
add({ k: "bullets", kicker: "dwg7/bvmap-koicha", title: "Not yet known", time: "", items: ["A nationwide version. Today: Tokyo and Hokkaido only.", "It uses a new tile format, MapLibre Tile (MLT)."] });

// snow-hokkaido
add({ k: "bullets", kicker: "dwg7/snow-hokkaido", title: "How is snow covering Hokkaido, every day?", time: "11 min (3 slides)",
  items: ["We read free satellite images (Sentinel-2).", "We keep a daily record of snow, cloud and green, by municipality.", "Clouds hide the ground. So each cell keeps its last known state, and how many days ago it was seen.", "A prototype. Records start in August 2024."] });
add({ k: "image", file: "snow-hokkaido-map.jpg", title: "snow-hokkaido: snow cover of Hokkaido", credit: "Contains modified Copernicus Sentinel data 2026. Administrative boundaries: National Land Numerical Information (MLIT). Data: CC BY 4.0. dwg7.unopengis.org/snow-hokkaido", time: "" });
add({ k: "image", file: "snow-hokkaido-freshness.jpg", title: "How old is each observation? (municipalities as equal squares)", credit: "Contains modified Copernicus Sentinel data 2026. Data: CC BY 4.0. dwg7.unopengis.org/snow-hokkaido", time: "" });

// waterloo
add({ k: "bullets", kicker: "dwg7/waterloo", title: "Waterloo, Sierra Leone: about 5 cm per pixel", time: "11 min (3 slides)",
  items: ["A drone image, shared by HOT on OpenAerialMap under an open license (CC BY-SA 4.0).", "We opened it as PMTiles in a web map, with Overture Maps buildings.", "We also wrote down what happened when we tried the new OpenAerialMap PMTiles feature.", { t: "Facts from someone who tried. Not criticism.", sub: true }] });
add({ k: "image", file: "waterloo-overview.jpg", title: "Waterloo: drone imagery and buildings", credit: "Imagery: HOT via OpenAerialMap (CC BY-SA 4.0). Buildings: © Overture Maps Foundation, © OpenStreetMap contributors (ODbL). A dwg7 activity. dwg7.github.io/waterloo", time: "" });
add({ k: "image", file: "waterloo-close.jpg", title: "Closer: the buildings, one by one", credit: "Imagery: HOT via OpenAerialMap (CC BY-SA 4.0). Buildings: © Overture Maps Foundation, © OpenStreetMap contributors (ODbL).", time: "" });

// dji-waypoints-hitl
add({ k: "bullets", kicker: "yuiseki/dji-waypoints-hitl", title: "A drone, an AI agent, and a human", time: "11 min (2 slides)",
  items: ["1. The human walks the site, flies by hand, and saves the safe area.", "2. The AI agent makes a zigzag flight plan inside the safe area.", "3. The human watches the drone and flies the plan semi-automatically."] });
add({ k: "bullets", kicker: "yuiseki/dji-waypoints-hitl", title: "Who decides?", time: "",
  items: ["The human decides whether to fly.", "The human checks the laws and the procedures.", "The human stops the flight.", "The AI agent cannot see the site.", { t: "Not yet known: other places, other rules. They differ by place.", sub: true }] });

// dorayaki
add({ k: "bullets", kicker: "dwg7/dorayaki", title: "A bridge, and the road under it", time: "11 min (3 slides)",
  items: ["A map tile holds one height per place. It cannot hold a bridge and the road under it.", "Dorayaki keeps the usual tile address (z/x/y) and puts 3D points inside each tile.", "It is an experiment, not a standard."] });
add({ k: "image", file: "dorayaki-kawazu.jpg", title: "The Kawazu loop bridge and the valley below", credit: "Point cloud: Shizuoka Prefecture, VIRTUAL SHIZUOKA (CC BY), processed. GSI vector tiles. Processed with Mapterhorn. dwg7.unopengis.org/dorayaki", time: "" });
add({ k: "bullets", kicker: "dwg7/dorayaki", title: "From points to tiles", time: "",
  items: ["About 476 million points became one 83 MB file.", "You can see it from above and from below, in a browser.", "I started by following a method that Kenji Yoshida showed me.", { t: "Not yet known: wide areas, and small PCs.", sub: true }] });

// ortho-earth
add({ k: "image", file: "ortho-earth-top.jpg", title: "ortho-earth: Equal to all, fair to the Earth", credit: "ortho-earth © 2026 Kenji Yoshida. www.ortho-earth.com (shown with the author’s permission: to be confirmed)", time: "11 min (3 slides)" });
add({ k: "image", file: "ortho-earth-equal.jpg", title: "Equal Earth: every country has its true relative size", credit: "ortho-earth © 2026 Kenji Yoshida. www.ortho-earth.com", time: "" });
add({ k: "bullets", kicker: "kenjiyoshidahome2026-bit/ortho-earth", title: "A globe in your browser", time: "",
  items: ["A 3D globe map engine. No server, no account.", "Code written for MapLibre also runs on it.", "One use: choose an area, load it first, then use it without a network.", { t: "Not yet known: how it runs on older laptops (it uses the GPU).", sub: true }] });

add({ k: "bullets", title: "Closing", time: "8 min (draft: not yet in the markdown)",
  items: ["Today, you connected to a server in this room.", "dwg7 tests new technologies in the same way: small, in public, with conditions written down.", "Imperfection is the natural state. That is why we combine efforts."] });
add({ k: "refs", title: "References", time: "" });
add({ k: "statement", dark: true, lines: ["Questions and discussion"], time: "8 min (–16:30)" });

// ---------------- rendering ----------------
let objN = 0;
const on = (p) => `${p}-${++objN}`;
const T = (s, text, o) => s.addText(text, Object.assign({ margin: 0, color: INK, fontFace: BODY, valign: "top", objectName: on("text") }, o));
const R = (s, type, o) => s.addShape(type, Object.assign({ objectName: on("shape") }, o));
const ST = pres.ShapeType;

function footer(s, dark, n) {
  s.addImage({ path: LOGO(dark ? "dwg7-wordmark-dark-1200w.png" : "dwg7-wordmark-1200w.png"), x: MX, y: 6.98, w: 0.6, h: 0.6 * 649 / 1200, objectName: on("logo"), altText: "dwg7" });
  T(s, String(n), { x: W - MX - 0.6, y: 7.08, w: 0.6, h: 0.3, fontSize: 11, color: dark ? LBLUE : GREY, align: "right" });
}
function titleOf(s, text, o = {}) {
  T(s, text, Object.assign({ x: MX, y: 0.55, w: W - 2 * MX, h: 0.95, fontSize: 32, bold: true, fontFace: HEAD, color: INK, valign: "middle" }, o));
  R(s, ST.rect, { x: MX, y: 1.55, w: 1.1, h: 0.07, fill: { color: BLUE }, line: { color: BLUE, width: 0 } });
}

const draw = {
  title(s) {
    s.background = { color: INK };
    s.addImage({ path: LOGO("dwg7-primary-dark-1200w.png"), x: MX, y: 0.7, w: 3.4, h: 3.4 * 793 / 1200, objectName: on("logo"), altText: "dwg7 — test new technologies." });
    T(s, "UN Open GIS Initiative", { x: MX, y: 3.45, w: 11.5, h: 1.1, fontSize: 50, bold: true, color: WHITE, fontFace: HEAD, valign: "middle" });
    T(s, "Smart Maps (dwg7) activities", { x: MX, y: 4.6, w: 11.5, h: 0.6, fontSize: 26, color: LBLUE });
    T(s, "JICA course: National Survey Planning and Management\n25 November 2026 · Hidenori Fujimura", { x: MX, y: 5.5, w: 9, h: 0.9, fontSize: 16, color: PALE });
    T(s, "dwg7 is a working group of the UN Open GIS Initiative.", { x: MX, y: 6.85, w: 9, h: 0.3, fontSize: 12, color: LBLUE });
  },
  section(s, o) {
    s.background = { color: INK };
    T(s, o.n, { x: MX, y: 1.6, w: 3, h: 2.2, fontSize: 130, bold: true, color: LBLUE, fontFace: HEAD });
    T(s, o.title, { x: MX, y: 3.9, w: W - 2 * MX, h: 1.0, fontSize: 44, bold: true, color: WHITE, valign: "middle" });
    if (o.sub) T(s, o.sub, { x: MX, y: 4.95, w: W - 2 * MX, h: 0.6, fontSize: 24, color: PALE });
    T(s, o.time, { x: MX, y: 5.75, w: 8, h: 0.4, fontSize: 16, color: LBLUE, fontFace: MONO });
  },
  statement(s, o) {
    s.background = { color: o.dark ? INK : MIST };
    o.lines.forEach((l, i) => T(s, l, { x: MX + 0.3, y: 2.0 + i * 1.5, w: W - 2 * MX - 0.6, h: 1.4, fontSize: o.lines.length > 1 ? 36 : 48, bold: true, color: o.dark ? WHITE : INK, valign: "middle" }));
  },
  bullets(s, o) {
    s.background = { color: WHITE };
    if (o.kicker) T(s, o.kicker, { x: MX, y: 0.3, w: 9, h: 0.3, fontSize: 14, color: BLUE, fontFace: MONO, bold: true });
    titleOf(s, o.title, o.kicker ? { y: 0.65 } : {});
    const n = o.items.length, fs = o.big ? 30 : (n >= 6 ? 22 : 26);
    const runs = o.items.map((it, i) => {
      const sub = typeof it === "object" && it.sub, txt = typeof it === "string" ? it : it.t;
      return { text: txt, options: { bullet: sub ? { indent: 22 } : (o.items.some((x) => typeof x === "string" && /^\d\. /.test(x)) ? false : { indent: 22 }), indentLevel: sub ? 1 : 0, fontSize: sub ? fs - 4 : fs, color: sub ? GREY : INK, breakLine: i < n - 1, paraSpaceAfter: sub ? 8 : 12 } };
    });
    T(s, runs, { x: MX + 0.1, y: 2.0, w: W - 2 * MX - 0.2, h: 4.7, valign: "top" });
  },
  steps(s, o) {
    s.background = { color: WHITE };
    titleOf(s, o.title);
    o.steps.forEach((st, i) => {
      const y = 1.95 + i * 1.6;
      R(s, ST.ellipse, { x: MX, y: y + 0.1, w: 0.6, h: 0.6, fill: { color: BLUE }, line: { color: BLUE, width: 0 } });
      T(s, String(i + 1), { x: MX, y: y + 0.1, w: 0.6, h: 0.6, fontSize: 24, bold: true, color: WHITE, align: "center", valign: "middle" });
      T(s, st.t, { x: MX + 0.9, y: y + 0.1, w: 7.0, h: 0.6, fontSize: 24, valign: "middle" });
      (st.chips || []).forEach((c, j) => {
        R(s, ST.roundRect, { x: MX + 0.9 + j * 4.6, y: y + 0.8, w: 4.4, h: 0.5, rectRadius: 0.08, fill: { color: INK }, line: { color: INK, width: 0 } });
        T(s, c, { x: MX + 1.05 + j * 4.6, y: y + 0.8, w: 4.2, h: 0.5, fontSize: 20, fontFace: MONO, color: PALE, valign: "middle", bold: true });
      });
    });
    if (o.foot) T(s, o.foot, { x: MX, y: 6.3, w: W - 2 * MX, h: 0.4, fontSize: 16, italic: true, color: GREY });
  },
  table(s, o) {
    s.background = { color: WHITE };
    titleOf(s, o.title, { fontSize: 28 });
    const hdr = o.head.map((t) => ({ text: t, options: { bold: true, color: WHITE, fill: { color: INK }, fontFace: BODY } }));
    const body = o.rows.map((r) => r.map((c, i) => ({ text: c, options: { fontFace: i === 0 || i === 2 ? MONO : BODY, bold: i === 0, color: INK, fill: { color: i === 0 ? MIST : WHITE } } })));
    s.addTable([hdr, ...body], { x: MX, y: 1.9, w: 8.4, colW: [1.9, 3.5, 3.0], fontSize: 18, rowH: 0.45, border: { type: "solid", pt: 1, color: BLUE }, valign: "middle", objectName: on("table") });
    T(s, o.foot, { x: MX, y: 6.55, w: W - 2 * MX, h: 0.4, fontSize: 16, italic: true, color: GREY });
  },
  terminal(s, o) {
    s.background = { color: INK };
    T(s, o.title, { x: MX, y: 0.5, w: W - 2 * MX, h: 0.8, fontSize: 30, bold: true, color: WHITE, valign: "middle" });
    R(s, ST.roundRect, { x: MX, y: 1.6, w: W - 2 * MX, h: 5.0, rectRadius: 0.12, fill: { color: DEEP }, line: { color: LBLUE, width: 1 } });
    const runs = o.lines.map((l, i) => ({ text: l[0] || " ", options: { color: l[1] === "cmd" ? LBLUE : (l[1] === "dim" ? "8FA3B8" : PALE), bold: l[1] === "cmd", breakLine: i < o.lines.length - 1, paraSpaceAfter: 6 } }));
    T(s, runs, { x: MX + 0.4, y: 1.85, w: W - 2 * MX - 0.8, h: 4.6, fontSize: 24, fontFace: MONO, color: PALE });
  },
  image(s, o) {
    s.background = { color: INK };
    s.addImage({ path: SHOT(o.file), x: 0, y: 0, w: W, h: H, objectName: on("screen"), altText: o.title });
    R(s, ST.rect, { x: 0, y: 6.45, w: W, h: 1.05, fill: { color: INK, transparency: 8 }, line: { color: INK, width: 0 } });
    T(s, o.title, { x: MX, y: 6.5, w: W - 2 * MX, h: 0.5, fontSize: 22, bold: true, color: WHITE, valign: "middle" });
    T(s, o.credit, { x: MX, y: 7.0, w: W - 2 * MX - 0.2, h: 0.4, fontSize: 10, color: "B8C7D6", valign: "top" });
  },
  refs(s) {
    s.background = { color: WHITE };
    titleOf(s, "References");
    [["UN Open GIS Initiative", "https://unopengis.org"], ["dwg7", "https://dwg7.unopengis.org"], ["dwg7 guide", "https://dwg7.unopengis.org/guide"]].forEach(([a, b], i) => {
      T(s, a, { x: MX, y: 2.1 + i * 1.4, w: W - 2 * MX, h: 0.55, fontSize: 28, bold: true, color: INK, valign: "middle" });
      T(s, b, { x: MX, y: 2.7 + i * 1.4, w: W - 2 * MX, h: 0.5, fontSize: 24, fontFace: MONO, color: BLUE, valign: "middle" });
    });
  },
};

S.forEach((o, i) => {
  const s = pres.addSlide();
  draw[o.k](s, o);
  const dark = o.k === "title" || o.k === "section" || o.k === "terminal" || o.k === "image" || (o.k === "statement" && o.dark);
  if (o.k !== "title" && o.k !== "image") footer(s, dark, i + 1);
  const notes = [`TIME: ${o.time || "-"}`, o.credit ? `CREDIT: ${o.credit}` : null, "SOURCE: docs/jica-un-open-gis-2026-talk.md"].filter(Boolean).join("\n\n");
  s.addNotes(notes);
});

(async () => {
  await pres.writeFile({ fileName: FILE });
  await applyTheme(FILE, { name: "dwg7", headFontFace: HEAD, bodyFontFace: BODY, colors: { dk1: INK, lt1: WHITE, dk2: BLUE, lt2: PALE, accent1: BLUE, accent2: LBLUE, accent3: GREY, accent4: "3A7BC8", accent5: "8FA3B8", accent6: DEEP, hlink: BLUE, folHlink: GREY } });
  console.log("written", FILE, S.length);
})();
