// Talk deck v3 (2026-11-21): the full talk in the dwg7 logo template.
// Output: deck/jica-un-open-gis-2026-talk-v3.pptx  (override the directory with DECK_OUT_DIR)
const pptxgen = require("pptxgenjs");
const path = require("path");
const { applyTheme } = require("../tools/apply_theme.js");

const ROOT = path.join(__dirname, "..");
const OUT = process.env.DECK_OUT_DIR || path.join(ROOT, "deck");
const FILE = path.join(OUT, "jica-un-open-gis-2026-talk-v3.pptx");
const LOGO = (n) => path.join(ROOT, "assets/logo", n);
const SHOT = (n) => path.join(ROOT, "assets/screens", n);
const ASSET = (n) => path.join(ROOT, "assets", n);

// AX attribution. "named": hfu's instruction in this session (Q12). "anonymous": the AX session's later message.
// Switch with AX_ATTR=anonymous.
const AX_ATTR = process.env.AX_ATTR === "anonymous" ? "anonymous" : "named";
const AX_FOOT = AX_ATTR === "named"
  ? "An experiment by Hidenori Fujimura (hfu), carried out within the dwg7 framework. Not an official project of GSI or the City of Asahikawa. Does not imply participation or endorsement by any organization."
  : "An experiment by an individual. Not an official project of GSI or the City of Asahikawa. No participation or endorsement implied.";
const AX_WHO = AX_ATTR === "named" ? "hfu" : "the presenter";
const AX_IMG = AX_ATTR === "named" ? "ax-asahikawa-snow-routes-en.jpg" : "ax-asahikawa-snow-routes-en-v2.jpg";
const AX_BASE = AX_ATTR === "named" ? "a dwg7 activity, not an official GSI product" : "not an official GSI product";

// dwg7 logo palette (dwg7/logo v0.6) and neutrals
const BLUE = "1E5AA0", INK = "13233A", LBLUE = "6FA8E8", PALE = "E6EDF3", MIST = "EEF3F9", WHITE = "FFFFFF", DEEP = "0B1726", GREY = "5B6B7D";
const HEAD = "Arial", BODY = "Arial", MONO = "Courier New"; // system fonts; switch here after Sora / IBM Plex Mono are installed
const W = 13.333, H = 7.5, MX = 0.7;

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE";
pres.title = "UN Open GIS Initiative / Smart Maps (dwg7) activities";
pres.author = "Hidenori Fujimura";
pres.theme = { headFontFace: HEAD, bodyFontFace: BODY };

const S = [];
const add = (o) => S.push(o);

// ============ BLOCK 1: hands-on (13:00-14:00) ============
add({ k: "title", time: "13:00" });
add({ k: "bullets", title: "What we do this afternoon", time: "13:00–13:05 (5 min, with the next two slides)",
  items: [{ t: "A part of the web mapping series: this morning to tomorrow", sub: true }, "1. Hands-on practice with the Raspberry Pi 4B server", "2. UN Open GIS Initiative", "3. Smart Maps (dwg7) activities"] });
add({ k: "statement", lines: ["In national geospatial information authorities, we produce geospatial information.", "We also need to know how it is best used."] });
add({ k: "statement", dark: true, lines: ["I use my ICT background to promote the use of geospatial information, inside and outside the government."], small: true });

add({ k: "section", n: "1", title: "Hands-on practice", sub: "Raspberry Pi 4B server", time: "13:00–14:00" });
add({ k: "bullets", title: "I prepared a server for each of you", time: "13:05",
  items: ["Each server is as small as a credit card, and costs about $100.", "It is called Raspberry Pi 4B.", "They are in the cabinet in this room.", "We will use them more tomorrow.", "So, let us test that they work for you."] });
add({ k: "steps", title: "First: join the server Wi-Fi", time: "5 min (–13:10)", vt: true,
  steps: [{ t: "Open the Wi-Fi list on your laptop." }, { t: "Choose the server Wi-Fi.", chips: ["SSID: vectortiles", "Password: vectortiles"] }, { t: "Check that you are connected to the vectortiles Wi-Fi." }],
  foot: "The Wi-Fi is 5 GHz only. If you cannot see it, raise your hand." });
add({ k: "table", title: "Second: know the IP address of your Raspberry Pi 4B", time: "5 min (–13:15)", ip: true,
  head: ["Host name", "Country", "IP address"],
  rows: [["m327", "Fiji", "192.168.86.27"], ["m328", "Gabon", "192.168.86.28"], ["m332", "Laos", "192.168.86.32"], ["m334", "Nigeria", "192.168.86.34"], ["m336", "Papua New Guinea", "192.168.86.36"], ["m347", "Rwanda", "192.168.86.47"], ["m348", "Sierra Leone", "192.168.86.48"], ["m349", "Timor-Leste", "192.168.86.49"], ["m355", "Togo", "192.168.86.55"]],
  foot: "Take note of your IP address. The host name is optional." });
add({ k: "terminal", title: "Third: connect from your laptop", time: "15 min (–13:30). Those who get stuck work with a helper; the others go on.",
  lines: [["# Open PowerShell from the Windows Start menu", "dim"], ["", ""], ["$ ssh niroku@192.168.86.xx", "cmd"], ["Password: ********    # told in class", "dim"], ["", ""], ["$ man ls        # press q to quit", "cmd"], ["$ exit", "cmd"]] });
add({ k: "bullets", title: "You are now logged in. You are now a Unix user.", time: "2 min", items: ["What is Unix?", { t: "Unix began in the 1970s.", sub: true }, { t: "Linux, macOS, Android and iOS are its relatives.", sub: true }, { t: "Most of the servers of the Internet run Unix-like systems.", sub: true }, { t: "The Raspberry Pi in front of you runs Linux.", sub: true }] });
add({ k: "bullets", title: "Power of the command line interface (CLI)", time: "5 min (–13:35)",
  items: ["Command Line Interface (CLI)", { t: "The opposite: Graphical User Interface (GUI)", sub: true }, "CLI works well with Artificial Intelligence (AI)", { t: "Large Language Models (LLMs), to be specific", sub: true }] });
add({ k: "terminal", title: "The Internet seen from CLI", time: "15 min (–13:50), with the next three slides", note: "-I asks for the headers only: the information about the file, not the file itself.",
  lines: [["$ curl -I https://maps.gsi.go.jp/xyz/std/0/0/0.png", "cmd"], ["HTTP/2 200", ""], ["content-type: image/png", ""], ["content-length: 77992", ""], ["server: AmazonS3", ""], ["last-modified: Sat, 01 Mar 2025 16:29:15 GMT", ""], ["x-cache: Hit from cloudfront", ""], ["age: 18522", ""]] });
add({ k: "bullets", title: "Reading the headers (1/3)", items: ["HTTP/2 200: the server answered, and all is well.", "content-type: image/png", { t: "A map tile is just an image file.", sub: true }, "The address 0/0/0 is the whole world in one tile: zoom / x / y."] });
add({ k: "bullets", title: "Reading the headers (2/3)", items: ["content-length: 77992", { t: "About 78 KB. A map of the whole world is that small.", sub: true }, "last-modified: 1 March 2025", { t: "Information has an age. We can ask for it.", sub: true }] });
add({ k: "bullets", title: "Reading the headers (3/3)", items: ["server: AmazonS3, x-cache: Hit from cloudfront", { t: "You did not reach the original server. You reached a copy near you.", sub: true }, "age: 18522", { t: "That copy is about five hours old.", sub: true }] });
add({ k: "statement", lines: ["Questions on the Raspberry Pi?"], time: "10 min (–14:00). Break: help those who are still stuck." });

// ============ BLOCK 2: the Initiative (14:15-14:45) ============
add({ k: "section", n: "2", title: "UN Open GIS Initiative", sub: "", time: "14:15–14:35" });
add({ k: "bullets", title: "Open source and GSI Maps", time: "4 min",
  items: ["Since 2013, GSI Maps has used open source as its procurement strategy.", "Why? Two things came at the same time:", { t: "We had to make GSI Maps work outside the Denshi Kokudo Web System.", sub: true }, { t: "We could no longer maintain that system ourselves.", sub: true }, "What we kept: options (optionality) and the ability to connect (interoperability)."] });
add({ k: "bullets", title: "Open with Official", time: "3 min",
  items: ["From “Open or Official” to “Open with Official”.", "GSI Maps: a geoportal built with 100% open source software. The code is on GitHub.", "Nothing is perfect. So complementing each other is normal."] });
add({ k: "bullets", title: "UN Open GIS Initiative", time: "4 min",
  items: ["Started in 2016 to support UN peacekeeping missions.", "I joined the UN Geospatial Information Section, 2017–2019.", { t: "UN Open GIS Initiative + UN Maps = UN Vector Tile Toolkit (2018–)", sub: true }, "What I learned there:", { t: "Handing over to the host country is quite hard with proprietary software.", sub: true }, { t: "Open source works well when the number of people involved grows.", sub: true }] });
add({ k: "bullets", title: "UN Open GIS Initiative: current co-chairs", time: "2 min",
  items: ["Ariel Anthieni, OSGeo Foundation", "Hidenori Fujimura, Geospatial Information Authority of Japan", "Josep Parareda, United Nations Geospatial Information Section"] });
add({ k: "bullets", title: "Domain Working Groups (DWGs)", time: "3 min",
  items: ["DWG1: Hybrid GIS Infrastructure (inactive)", "DWG2: Capacity Building (inactive)", "DWG5: Geo-AI", "DWG6: OpenDroneMap", "DWG7: Smart Maps", "DWG8: IGIF implementation"] });

// ============ BLOCK 3: dwg7 (14:45-15:15, 15:30-16:30) ============
add({ k: "section", n: "3", title: "Smart Maps (dwg7) activities", sub: "", time: "14:35–15:15, break, 15:30–16:30" });
add({ k: "bullets", title: "DWG7: Smart Maps", time: "3 min",
  items: ["A group for individual developers", "Web maps for smart decisions", "Vision: keep web maps open.", "Mission: test new technologies.", "Rule: share projects or topics under gh:unopengis or gh:dwg7."] });
add({ k: "flow", title: "How it works", time: "4 min",
  boxes: ["Question", "Experiment", "Result with conditions", "Review and correction", "Reuse"],
  labels: ["", "", "", "", ""],
  caption: "Everything happens in public issues: github.com/UNopenGIS/7. Weekly meetup: Tuesday 12:30–12:55 JST, online. Anyone can read, comment, and repeat an experiment." });
add({ k: "bullets", title: "UNVT Portable", time: "2 min",
  items: ["UN Vector Tile Toolkit has a portable form: a small server for web maps, first made on a Raspberry Pi.", "Smart Maps Portable (2024): a Raspberry Pi 4B, a battery, a 2 TB SSD and a GNSS antenna.", { t: "It ran 18 hours without external power, and served more than 25 clients over Wi-Fi.", sub: true }, "The Raspberry Pi in this room is a descendant. “niroku” is a new implementation of UNVT Portable, for this JICA course.", "Tomorrow, you will use it to make tiled maps."] });
add({ k: "bullets", title: "OpenStreetMap and official data", time: "2 min (draft)",
  items: ["OpenStreetMap: map data that anyone can edit and use.", "Official data and OpenStreetMap, together, in private-sector web maps.", { t: "For example, maps of Japan in MapTiler.", sub: true }, "Each has gaps. Together, they complement each other."] });
add({ k: "bullets", title: "JICA and the Initiative: Quick Mapping Project", time: "4 min",
  items: ["The Quick Mapping Project (QMP) is a JICA co-creation, innovation and circulation initiative, powered by UN Smart Maps.", "Quick Mapping: make maps quickly, and make them usable at once, for the needs of the users. It builds on OpenStreetMap.", "Its idea: “It’s easy to be brave enough to map.”", "July 2025, “Q Day” at JICA headquarters: one topic every 30 minutes, and free mapping and discussion in between.", "The Laos work you will see next is part of QMP."] });
add({ k: "bullets", title: "dwg7 and AI", time: "3 min",
  items: ["Since 2023, dwg7 has treated AI as one of the members.", { t: "The dwg7 web page invites “LLM users, and even LLMs”.", sub: true }, { t: "The JICA Quick Mapping Project took it as a first principle: “We co-create with generative AI.”", sub: true }, "Today, AI writes part of our code and records.", { t: "Many of the projects you will see were made with AI.", sub: true }, "People decide. AI cannot see the site."] });
add({ k: "bullets", title: "Recent projects", time: "1 min",
  items: ["Starting from a need: Laos (Vientiane), FERSPAS (FAO)", "Data: bvmap-koicha, snow-hokkaido, waterloo", "Flying and seeing: dji-waypoints-hitl, dorayaki, ortho-earth", "My next challenge: AX (Asahikawa)", { t: "These are dwg7 activities. They are not official products of any organization.", sub: true }] });

// --- Laos (14 min)
add({ k: "bullets", kicker: "Vientiane · JICA Quick Mapping Project", title: "Laos: a need came first", time: "Laos: 14 min (10 slides)",
  items: ["The need: a detailed map for the Chanthabury district detailed plan, around the Chao Anouvong Stadium.", { t: "It supports pedestrian-first planning, universal design and better public space.", sub: true }, "In March 2026, we opened a HOT Tasking Manager project (44787) for the area.", "The first question: which buildings have a height, or a number of floors?"] });
add({ k: "bigfact", big: "12 of 3,654", text: "buildings in this view have a height or a number of floors in OpenStreetMap.", small: "height-coverage, central Vientiane, seen on 21 November 2026" });
add({ k: "image", file: "height-coverage-vientiane.jpg", title: "height-coverage: yellow buildings are waiting for a number of floors", credit: "© OpenMapTiles © OpenStreetMap contributors. Buildings via Overture Maps. dwg7.github.io/height-coverage" });
add({ k: "bigfact", big: "Imagery has a date.", text: "Bing is newer, but coarser. Esri World Imagery is older, but sharper. In one place, a building was finished in Bing and still under construction in Esri.", small: "Which imagery do we trace on?", bigSize: 60 });
add({ k: "photos", title: "20 November, in the field", text: ["About thirty people from the urban planning department and a national university walked for about an hour.", "We counted the floors of buildings by eye, and entered them into OpenStreetMap."], a: "laos-field-1.jpg", b: "laos-field-2.jpg" });
add({ k: "bullets", title: "Field notes", items: ["A few minutes of lecture was enough. You do not need to be an expert.", "Counting floors was a compromise.", "The hardest part: deciding which data items the project really needs.", "Next time: work more closely with NGOs that do open mapping."] });
add({ k: "bullets", title: "I tried it myself", items: ["I know the needs and the costs. So I build part of the software myself.", "Vientiane: the published zoning data (Virgo), made into vector tiles.", "Papua New Guinea: the published data of NLUIMS, made into vector tiles."] });
add({ k: "image", file: "vientiane-planning-map.jpg", title: "Vientiane zoning (Virgo) on a base map: vientiane-planning-map", credit: "Zoning: Virgo, Ministry of Public Works and Transport, Lao PDR. Base map: © OpenMapTiles, © OpenStreetMap contributors. A dwg7 activity." });

// --- FERSPAS (9 min)
add({ k: "bullets", kicker: "dwg7/ferspas-html-demo, with FAO", title: "Notebooks that only experts can run", time: "FERSPAS: 9 min (3 slides)",
  items: ["FAO publishes remote sensing data and analysis notebooks (FERSPAS).", "Public officials who cannot set up a programming environment cannot use them.", "Our first try: fit our own architecture onto FERSPAS. We paused it on 18 September 2026.", { t: "I saw that we were fitting our design onto FERSPAS, instead of starting from how FERSPAS is used.", sub: true }] });
add({ k: "flow", title: "Move what is stable to the web", boxes: ["The expert’s notebook", "A task that is stable", "A web page in a browser"], labels: ["explore in the expert’s environment", "repeatable", "anyone can run it and see"], caption: "Explore in the experts’ environment. Share stable tasks on the web." });
add({ k: "bullets", title: "Three examples", items: ["An agricultural stress index (Italy).", "Drained cropland over 31 years (Bangladesh).", "A water balance over 47 years.", { t: "Not yet known: whether other tasks and other users follow. It is closed for now, and may reopen.", sub: true }] });

// --- bvmap-koicha (8 min)
add({ k: "bullets", kicker: "dwg7/bvmap-koicha", title: "GSI vector tiles, brewed thicker", time: "bvmap-koicha: 8 min (3 slides)",
  items: ["GSI publishes vector tiles of Japan (bvmap).", "At a wider view, they show few buildings. The size of a tile is limited.", "bvmap-koicha uses the same data. It shows the buildings of a closer view at a wider view.", { t: "Tokyo, zoom 15: about 20 times more buildings.", sub: true }] });
add({ k: "image", file: "bvmap-koicha-tokyo.jpg", title: "bvmap-koicha: left is the original, right is koicha", credit: "Based on GSI optimized vector tiles (bvmap). A dwg7 activity, not an official GSI product. dwg7.unopengis.org/bvmap-koicha" });
add({ k: "bullets", kicker: "dwg7/bvmap-koicha", title: "Not yet known", items: ["A nationwide version. Today: Tokyo and Hokkaido only.", "A new tile format, MapLibre Tile (MLT), makes it possible."] });

// --- snow-hokkaido (8 min)
add({ k: "bullets", kicker: "dwg7/snow-hokkaido", title: "How is snow covering Hokkaido, every day?", time: "snow-hokkaido: 8 min (3 slides)",
  items: ["We read free satellite images (Sentinel-2).", "We keep a daily record of snow, cloud and green, by municipality.", "Clouds hide the ground. So each cell keeps its last known state, and how many days ago it was seen.", "A prototype. The records start in August 2024."] });
add({ k: "image", file: "snow-hokkaido-map.jpg", title: "snow-hokkaido: snow cover of Hokkaido", credit: "Contains modified Copernicus Sentinel data 2026. Administrative boundaries: National Land Numerical Information (MLIT). Data: CC BY 4.0. dwg7.unopengis.org/snow-hokkaido" });
add({ k: "image", file: "snow-hokkaido-freshness.jpg", title: "How old is each observation? (municipalities as equal squares)", credit: "Contains modified Copernicus Sentinel data 2026. Data: CC BY 4.0. dwg7.unopengis.org/snow-hokkaido" });

// --- waterloo (6 min)
add({ k: "bullets", kicker: "dwg7/waterloo", title: "Waterloo, Sierra Leone: about 5 cm per pixel", time: "waterloo: 6 min (3 slides)",
  items: ["A drone image, shared by HOT (Humanitarian OpenStreetMap Team) on OpenAerialMap under an open license (CC BY-SA 4.0).", "We opened it as PMTiles (a whole map in one file) in a web map, with Overture Maps buildings (open building data).", "We also wrote down what happened when we tried the new OpenAerialMap PMTiles feature.", { t: "Facts from someone who tried. Not criticism.", sub: true }] });
add({ k: "image", file: "waterloo-overview.jpg", title: "Waterloo: drone imagery and buildings", credit: "Imagery: HOT via OpenAerialMap (CC BY-SA 4.0). Buildings: © Overture Maps Foundation, © OpenStreetMap contributors (ODbL). A dwg7 activity. dwg7.github.io/waterloo" });
add({ k: "image", file: "waterloo-close.jpg", title: "Closer: the buildings, one by one", credit: "Imagery: HOT via OpenAerialMap (CC BY-SA 4.0). Buildings: © Overture Maps Foundation, © OpenStreetMap contributors (ODbL)." });

// --- dji-waypoints-hitl (7 min)
add({ k: "cards", kicker: "yuiseki/dji-waypoints-hitl", title: "A drone, an AI agent, and a human", time: "dji-waypoints-hitl: 7 min (2 slides)",
  cards: [["The human", "walks the site, flies by hand, and saves the safe area."], ["The AI agent", "makes a zigzag flight plan inside the safe area."], ["The human, again", "watches the drone, and flies the plan semi-automatically."]] });
add({ k: "bullets", kicker: "yuiseki/dji-waypoints-hitl", title: "Who decides?", items: ["The human decides whether to fly.", "The human checks the laws and the procedures.", "The human stops the flight.", "The AI agent cannot see the site.", { t: "Not yet known: other places, other rules. They differ by place.", sub: true }] });

// --- dorayaki (8 min)
add({ k: "bullets", kicker: "dwg7/dorayaki", title: "A bridge, and the road under it", time: "dorayaki: 8 min (3 slides)",
  items: ["A map tile holds one height per place. It cannot hold a bridge and the road under it.", "Dorayaki keeps the usual tile address (zoom / x / y) and puts 3D points inside each tile.", { t: "The 3D points are Gaussian splats: points drawn as soft dots.", sub: true }, "It is an experiment, not a standard."] });
add({ k: "image", file: "dorayaki-kawazu.jpg", title: "The Kawazu loop bridge and the valley below", credit: "Point cloud: Shizuoka Prefecture, VIRTUAL SHIZUOKA (CC BY), processed. GSI vector tiles. Processed with Mapterhorn. dwg7.unopengis.org/dorayaki" });
add({ k: "bullets", kicker: "dwg7/dorayaki", title: "From points to tiles", items: ["About 476 million points became one 83 MB file.", "You can see it from above and from below, in a browser.", "I started by following a method that Kenji Yoshida showed me.", { t: "Not yet known: wide areas, and small PCs.", sub: true }] });

// --- ortho-earth (7 min)
add({ k: "image", file: "ortho-earth-top.jpg", title: "ortho-earth: Equal to all, fair to the Earth", credit: "ortho-earth © 2026 Kenji Yoshida. www.ortho-earth.com", time: "ortho-earth: 7 min (3 slides)" });
add({ k: "image", file: "ortho-earth-equal.jpg", title: "Equal Earth: every country has its true relative size", credit: "ortho-earth © 2026 Kenji Yoshida. www.ortho-earth.com" });
add({ k: "bullets", kicker: "kenjiyoshidahome2026-bit/ortho-earth", title: "A globe in your browser", items: ["A 3D globe map engine. No server, no account.", "Code written for MapLibre also runs on it.", "One use: choose an area, load it first, then use it without a network.", { t: "Not yet known: how it runs on older laptops. It uses the GPU.", sub: true }] });

// --- AX (4 min)
add({ k: "bullets", kicker: "AX · Asahikawa eXperiment", title: "My next challenge", time: "AX: 4 min (3 slides). If time is short, close with one slide.", foot: AX_FOOT,
  items: ["The question: how can wide-area observation and open data reach the problems of one local community, at a scale people can use?", "The method: start from what already exists locally. Build a prototype strong enough to show. Take it there. Record every response: support, correction, objection, silence.", "Time-boxed: the external effort stops at the end of the fiscal year. Whatever is useful can be reused or imitated by anyone.", "Principle: “Absence is information.” We do not fill gaps with invented data."] });
add({ k: "flow", title: "From wide-area observation to a local problem", boxes: ["Wide-area observation, open data", "A local, large-scale map", "Whose problem? (to be learned on site)"], labels: ["built from what exists", "shown, then broken by local people", "stop, hand over, or disappear: all are results"], caption: "Make it strong enough to reach. Strike it and see whether it resonates." });
add({ k: "imgtext", kicker: "AX · Asahikawa eXperiment", title: "First step: where are the snow-removal routes?", file: AX_IMG, foot: AX_FOOT,
  items: ["Input: the urban snow-removal route network, published as open data by the City of Asahikawa.", "Done: source, terms of use and coordinate system recorded; displayed at the correct position; terrain added.", "Evidence boundary: this is a route network, not the actual plowing status. A rendering is not an observation.", "Not yet known: do people use maps at all? If so, in what situations?"],
  credit: `This image modifies the following work: Urban snow-removal routes, City of Asahikawa, Creative Commons Attribution 2.1 Japan (CC BY 2.1 JP, http://creativecommons.org/licenses/by/2.1/jp/). Modified and displayed by ${AX_WHO}. Hillshade: GSI elevation tiles. Basemap: bvmap-koicha-starlight (derived from GSI optimized vector tiles; ${AX_BASE}). Not an official project of GSI or the City of Asahikawa. The data is a route network, not actual plowing status.` });

// ============ Closing ============
add({ k: "bullets", title: "Closing", time: "5 min", items: ["Today, you connected to a server in this room.", "dwg7 tests new technologies in the same way: small, in public, with the conditions written down."] });
add({ k: "statement", dark: true, lines: ["Imperfection is natural.", "So let us connect."] });
add({ k: "refs", title: "References" });
add({ k: "statement", dark: true, lines: ["Questions and discussion"], time: "7 min (–16:30)" });

// ============ rendering ============
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
const kick = (s, o) => { if (o.kicker) T(s, o.kicker, { x: MX, y: 0.3, w: 11, h: 0.3, fontSize: 14, color: BLUE, fontFace: MONO, bold: true }); return o.kicker ? { y: 0.65 } : {}; };
function bulletRuns(items, fs) {
  const n = items.length, numbered = items.some((x) => typeof x === "string" && /^\d\. /.test(x));
  return items.map((it, i) => {
    const sub = typeof it === "object" && it.sub, txt = typeof it === "string" ? it : it.t;
    return { text: txt, options: { bullet: sub ? { indent: 22 } : (numbered ? false : { indent: 22 }), indentLevel: sub ? 1 : 0, fontSize: sub ? fs - 4 : fs, color: sub ? GREY : INK, breakLine: i < n - 1, paraSpaceAfter: sub ? 8 : 12 } };
  });
}

const draw = {
  title(s) {
    s.background = { color: INK };
    s.addImage({ path: LOGO("dwg7-primary-dark-1200w.png"), x: MX, y: 0.7, w: 3.4, h: 3.4 * 793 / 1200, objectName: on("logo"), altText: "dwg7: test new technologies." });
    T(s, "UN Open GIS Initiative", { x: MX, y: 3.45, w: 11.5, h: 1.1, fontSize: 50, bold: true, color: WHITE, valign: "middle" });
    T(s, "Smart Maps (dwg7) activities", { x: MX, y: 4.6, w: 11.5, h: 0.6, fontSize: 26, color: LBLUE });
    T(s, "JICA course: National Survey Planning and Management\n25 November 2026 · Hidenori Fujimura", { x: MX, y: 5.5, w: 9, h: 0.9, fontSize: 16, color: PALE });
    T(s, "dwg7 is a working group of the UN Open GIS Initiative.", { x: MX, y: 6.85, w: 9, h: 0.3, fontSize: 12, color: LBLUE });
  },
  section(s, o) {
    s.background = { color: INK };
    T(s, o.n, { x: MX, y: 1.6, w: 3, h: 2.2, fontSize: 130, bold: true, color: LBLUE });
    T(s, o.title, { x: MX, y: 3.9, w: W - 2 * MX, h: 1.0, fontSize: 44, bold: true, color: WHITE, valign: "middle" });
    if (o.sub) T(s, o.sub, { x: MX, y: 4.95, w: W - 2 * MX, h: 0.6, fontSize: 24, color: PALE });
    T(s, o.time, { x: MX, y: 5.75, w: 9, h: 0.4, fontSize: 16, color: LBLUE, fontFace: MONO });
  },
  statement(s, o) {
    s.background = { color: o.dark ? INK : MIST };
    const fs = o.small ? 30 : (o.lines.length > 1 ? 38 : 50);
    o.lines.forEach((l, i) => T(s, l, { x: MX + 0.3, y: 1.9 + i * 1.6, w: W - 2 * MX - 0.6, h: 1.5, fontSize: fs, bold: true, color: o.dark ? WHITE : INK, valign: "middle" }));
  },
  bullets(s, o) {
    s.background = { color: WHITE };
    const k = kick(s, o);
    titleOf(s, o.title, k);
    const n = o.items.length, longest = Math.max(...o.items.map((x) => (typeof x === "string" ? x : x.t).length));
    const fs = n >= 6 ? 22 : (longest > 120 || n >= 5 ? 24 : 28);
    T(s, bulletRuns(o.items, fs), { x: MX + 0.1, y: 2.0, w: W - 2 * MX - 0.2, h: o.foot ? 4.0 : 4.7, valign: "top" });
    if (o.foot) T(s, o.foot, { x: MX, y: 6.2, w: W - 2 * MX, h: 0.6, fontSize: 12, italic: true, color: GREY });
  },
  steps(s, o) {
    s.background = { color: WHITE };
    titleOf(s, o.title);
    o.steps.forEach((st, i) => {
      const y = 1.95 + i * 1.6;
      R(s, ST.ellipse, { x: MX, y: y + 0.1, w: 0.6, h: 0.6, fill: { color: BLUE }, line: { color: BLUE, width: 0 } });
      T(s, String(i + 1), { x: MX, y: y + 0.1, w: 0.6, h: 0.6, fontSize: 24, bold: true, color: WHITE, align: "center", valign: "middle" });
      T(s, st.t, { x: MX + 0.9, y: y + 0.1, w: 9.5, h: 0.6, fontSize: 24, valign: "middle" });
      (st.chips || []).forEach((c, j) => {
        R(s, ST.roundRect, { x: MX + 0.9 + j * 4.6, y: y + 0.8, w: 4.4, h: 0.5, rectRadius: 0.08, fill: { color: INK }, line: { color: INK, width: 0 } });
        T(s, c, { x: MX + 1.05 + j * 4.6, y: y + 0.8, w: 4.2, h: 0.5, fontSize: 20, fontFace: MONO, color: PALE, valign: "middle", bold: true });
      });
    });
    if (o.foot) T(s, o.foot, { x: MX, y: 6.45, w: W - 2 * MX, h: 0.4, fontSize: 16, italic: true, color: GREY });
  },
  table(s, o) {
    s.background = { color: WHITE };
    titleOf(s, o.title, { fontSize: 28 });
    const hdr = o.head.map((t) => ({ text: t, options: { bold: true, color: WHITE, fill: { color: INK } } }));
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
    if (o.note) T(s, o.note, { x: MX, y: 6.68, w: W - 2 * MX, h: 0.3, fontSize: 16, color: LBLUE, italic: true });
  },
  image(s, o) {
    s.background = { color: INK };
    s.addImage({ path: SHOT(o.file), x: 0, y: 0, w: W, h: H, objectName: on("screen"), altText: o.title });
    R(s, ST.rect, { x: 0, y: 6.45, w: W, h: 1.05, fill: { color: INK, transparency: 8 }, line: { color: INK, width: 0 } });
    T(s, o.title, { x: MX, y: 6.5, w: W - 2 * MX, h: 0.5, fontSize: 22, bold: true, color: WHITE, valign: "middle" });
    T(s, o.credit, { x: MX, y: 7.0, w: W - 2 * MX - 0.2, h: 0.4, fontSize: 10, color: "B8C7D6" });
  },
  imgtext(s, o) {
    s.background = { color: WHITE };
    const k = kick(s, o);
    titleOf(s, o.title, Object.assign({ fontSize: 28 }, k));
    T(s, bulletRuns(o.items, 20), { x: MX + 0.1, y: 1.95, w: 5.9, h: 4.2, valign: "top" });
    s.addImage({ path: SHOT(o.file), x: 6.95, y: 1.9, w: 5.7, h: 4.275, objectName: on("screen"), altText: o.title });
    T(s, o.credit, { x: 6.95, y: 6.22, w: 5.7, h: 0.75, fontSize: 7.5, color: GREY });
    if (o.foot) T(s, o.foot, { x: MX, y: 6.3, w: 6.0, h: 0.6, fontSize: 10, italic: true, color: GREY });
  },
  photos(s, o) {
    s.background = { color: WHITE };
    titleOf(s, o.title);
    s.addImage({ path: ASSET(o.a), x: MX, y: 1.9, w: 5.33, h: 4.0, objectName: on("photo"), altText: "People checking buildings on a street in Vientiane. Faces are not shown." });
    s.addImage({ path: ASSET(o.b), x: MX + 5.63, y: 1.9, w: 3.0, h: 4.0, objectName: on("photo"), altText: "A hand marks a printed map with a pencil. Faces are not shown." });
    T(s, bulletRuns(o.text, 20).map((r) => Object.assign(r, { options: Object.assign(r.options, { bullet: false }) })), { x: MX + 8.95, y: 1.95, w: 3.0, h: 4.0, valign: "top" });
  },
  bigfact(s, o) {
    s.background = { color: MIST };
    T(s, o.big, { x: MX + 0.3, y: 1.2, w: W - 2 * MX - 0.6, h: 2.4, fontSize: o.bigSize || 110, bold: true, color: BLUE, valign: "middle" });
    T(s, o.text, { x: MX + 0.3, y: 3.8, w: W - 2 * MX - 0.6, h: 1.8, fontSize: 28, color: INK, valign: "top" });
    if (o.small) T(s, o.small, { x: MX + 0.3, y: 5.9, w: W - 2 * MX - 0.6, h: 0.5, fontSize: 16, italic: true, color: GREY });
  },
  flow(s, o) {
    s.background = { color: WHITE };
    titleOf(s, o.title);
    const n = o.boxes.length, gap = 0.45, w = (W - 2 * MX - gap * (n - 1)) / n, y = 2.3, h = 1.7;
    o.boxes.forEach((b, i) => {
      const x = MX + i * (w + gap);
      R(s, ST.roundRect, { x, y, w, h, rectRadius: 0.12, fill: { color: i === n - 1 ? BLUE : MIST }, line: { color: BLUE, width: 1.5 } });
      T(s, b, { x: x + 0.15, y, w: w - 0.3, h, fontSize: n > 3 ? 20 : 24, bold: true, color: i === n - 1 ? WHITE : INK, align: "center", valign: "middle" });
      if (i < n - 1) s.addShape(ST.line, { x: x + w + 0.03, y: y + h / 2, w: gap - 0.06, h: 0, line: { color: BLUE, width: 2.5, endArrowType: "triangle" }, objectName: on("arrow") });
      if (o.labels && o.labels[i]) T(s, o.labels[i], { x: x, y: y + h + 0.2, w, h: 0.9, fontSize: 16, italic: true, color: GREY, align: "center" });
    });
    T(s, o.caption, { x: MX, y: 5.4, w: W - 2 * MX, h: 1.2, fontSize: 22, italic: true, color: BLUE, valign: "top" });
  },
  cards(s, o) {
    s.background = { color: WHITE };
    const k = kick(s, o);
    titleOf(s, o.title, k);
    const n = o.cards.length, gap = 0.35, w = (W - 2 * MX - gap * (n - 1)) / n;
    o.cards.forEach((c, i) => {
      const x = MX + i * (w + gap);
      R(s, ST.roundRect, { x, y: 2.1, w, h: 3.9, rectRadius: 0.12, fill: { color: i === 1 ? PALE : MIST }, line: { color: BLUE, width: 1.5 } });
      R(s, ST.ellipse, { x: x + 0.3, y: 2.4, w: 0.7, h: 0.7, fill: { color: BLUE }, line: { color: BLUE, width: 0 } });
      T(s, String(i + 1), { x: x + 0.3, y: 2.4, w: 0.7, h: 0.7, fontSize: 24, bold: true, color: WHITE, align: "center", valign: "middle" });
      T(s, c[0], { x: x + 0.3, y: 3.3, w: w - 0.6, h: 0.7, fontSize: 24, bold: true, color: INK, valign: "middle" });
      T(s, c[1], { x: x + 0.3, y: 4.1, w: w - 0.6, h: 1.8, fontSize: 22, color: INK });
    });
  },
  refs(s) {
    s.background = { color: WHITE };
    titleOf(s, "References");
    [["UN Open GIS Initiative", "https://unopengis.org"], ["dwg7", "https://dwg7.unopengis.org"], ["dwg7 guide", "https://dwg7.unopengis.org/guide"]].forEach(([a, b], i) => {
      T(s, a, { x: MX, y: 2.1 + i * 1.4, w: W - 2 * MX, h: 0.55, fontSize: 28, bold: true, valign: "middle" });
      T(s, b, { x: MX, y: 2.7 + i * 1.4, w: W - 2 * MX, h: 0.5, fontSize: 24, fontFace: MONO, color: BLUE, valign: "middle" });
    });
  },
};

const marks = { vt: [], ip: [] };
S.forEach((o, i) => {
  const s = pres.addSlide();
  draw[o.k](s, o);
  const dark = ["title", "section", "terminal", "image"].includes(o.k) || (o.k === "statement" && o.dark);
  if (o.k !== "title" && o.k !== "image") footer(s, dark, i + 1);
  if (o.vt) marks.vt.push(i + 1);
  if (o.ip) marks.ip.push(i + 1);
  const notes = [`TIME: ${o.time || "-"}`, o.credit ? `CREDIT: ${o.credit}` : null, "SOURCE: docs/jica-un-open-gis-2026-talk.md"].filter(Boolean).join("\n\n");
  s.addNotes(notes);
});

(async () => {
  await pres.writeFile({ fileName: FILE });
  await applyTheme(FILE, { name: "dwg7", headFontFace: HEAD, bodyFontFace: BODY, colors: { dk1: INK, lt1: WHITE, dk2: BLUE, lt2: PALE, accent1: BLUE, accent2: LBLUE, accent3: GREY, accent4: "3A7BC8", accent5: "8FA3B8", accent6: DEEP, hlink: BLUE, folHlink: GREY } });
  console.log("written", FILE, S.length, JSON.stringify(marks));
})();
