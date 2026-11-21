// Slide data for the structural draft. Single source for PPTX, slide plan and notes.
// status: ready / placeholder / open
const S = [];
const add = (o) => S.push(o);

add({
  session: 0, kind: "title", status: "ready", time: 1,
  title: "UN Open GIS Initiative",
  data: { sub: "Your expertise, your connections, and one small test" },
  say: "Good afternoon, everyone. Welcome. I am Hidenori Fujimura, but please call me hfu. For the next three hours, we will talk about three things: your expertise, your connections, and one small test.",
  purpose: "Open the lecture and state the three-part promise.",
  transition: "First, a short word about who is in this room.",
  evidence: "Official title and subtitle: working decision, stable until challenged.",
  caution: "Do not praise the lecturer or evaluate any country.",
  ja: { purpose: "公式タイトルと副題で講義全体の約束を示す。", key: "Your expertise, your connections, and one small test.", visual: "ダーク背景。connectとtestの2円が重なる概念図。「構造版」タグ。", note: "名前の名乗りと、3コマの予告を一息で。" },
  evidenceJa: "KCAIM /decision-support/current-decisions（working decision）",
});

// ---------- Session 1 ----------
add({
  session: 1, kind: "divider", status: "ready", time: 0,
  title: "Your expertise",
  data: { label: "SESSION 1 · 13:00–14:00", feeling: "I already have something valuable to contribute." },
  say: "Session one is about your expertise. I want you to leave this hour with one feeling: I already have something valuable to contribute.",
  purpose: "Set the target feeling of Session 1.",
  transition: "Let us begin with the people in this room.",
  evidence: "Session design: working decision.",
  caution: "Keep the divider short.",
  ja: { purpose: "第1コマの狙う感情を示す。", key: "I already have something valuable to contribute.", visual: "セクション区切り（大きな数字1）。", note: "30秒以内。" },
  evidenceJa: "KCAIM /scenarios/00-overall-lecture",
});

add({
  session: 1, kind: "chips", status: "ready", time: 5,
  title: "Welcome, colleagues",
  data: {
    chips: ["Fiji", "Gabon", "Laos", "Nigeria", "Papua New Guinea", "Rwanda", "Sierra Leone", "Timor-Leste", "Togo"],
    side: "Nine countries.\nNine professionals.\nOne shared field.",
  },
  say: "You are not students from developing countries. You are the geospatial professionals of your own countries. I am here to share some experience, and also to learn from you. Please treat today as a conversation between colleagues.",
  purpose: "Frame participants as peer professionals.",
  transition: "So, what do geospatial professionals actually contribute?",
  evidence: "Participant list: verified (schedule file). Peer framing: normative rule.",
  caution: "Countries listed in alphabetical order, with equal weight. Do not single out any country.",
  ja: { purpose: "研修員を対等な専門職として迎える。", key: "You are the geospatial professionals of your own countries.", visual: "9か国のチップ（アルファベット順・同じ重み）と3行のメッセージ。", note: "どの国も特別扱いしない。" },
  evidenceJa: "研修員9か国: verified / 対等な専門職の枠組み: normative",
});

add({
  session: 1, kind: "cards", status: "ready", time: 10,
  title: "What a geospatial professional contributes",
  data: {
    cards: [
      { h: "Judgement", t: "Knowing what is reliable enough to use, and what is not yet." },
      { h: "Standards", t: "Making information comparable, so that others can reuse it." },
      { h: "Continuity", t: "Keeping information alive after the project ends." },
    ],
    foot: "More than making maps.",
  },
  say: "A map is not the only thing we produce. First, judgement: we know what is reliable enough to use. Second, standards: we make information comparable, so other people can reuse it. Third, continuity: we keep information alive after a project ends. Please think about which of these you do every day.",
  purpose: "Name the contribution of the profession beyond map production.",
  transition: "Let me show one place where these three came together: Hill Cot in Sierra Leone.",
  evidence: "Derived (design interpretation). Not an external fact.",
  caution: "Present as a way of looking, not as a definition of the profession.",
  ja: { purpose: "専門性を「地図づくり以上」の三つで言語化する。", key: "Judgement, standards, continuity.", visual: "3カード（番号付き円）。", note: "derived。定義として語らず、見方として提示。" },
  evidenceJa: "KCAIM /scenarios/01-your-expertise ムーブメント2（derived）",
});

add({
  session: 1, kind: "placeholder", status: "placeholder", time: 4,
  title: "Hill Cot: from 5 cm imagery to footprints",
  data: {
    label: "Orthophoto and footprint overlay",
    need: "SOURCE NEEDED: 5 cm orthophoto excerpt, traced footprints, image/vector overlay. Confirm publication conditions.",
    factsHead: "What happened",
    facts: [
      "5 cm GSD drone orthophoto",
      "Building footprints traced",
      "Entered into OpenStreetMap",
      "Validated on the OSM Sierra Leone side",
    ],
  },
  say: "This is Hill Cot, in Sierra Leone. We started from drone orthophotos with a resolution of five centimetres. We traced building footprints from the images. The data went into OpenStreetMap, and a validator on the OSM Sierra Leone side checked it.",
  purpose: "Show actual production, not a demonstration.",
  transition: "Let us look at how large and how continuous the result was.",
  evidence: "Production, destination and validator: verified (hfu-provided). Not externally confirmed. Place-name spelling (Hill Cot / Hill Court Road): open.",
  caution: "One case does not prove a universal quality model. Do not claim positional accuracy or completeness.",
  ja: { purpose: "5 cmオルソから建物外周線を作り、OSMへ入れた実作業を示す。", key: "Footprints traced from 5 cm imagery and added to OSM, validated locally.", visual: "オルソ＋外周線のオーバーレイ画像（未入手→プレースホルダー）。", note: "品質の一般化をしない。表記ゆれ（Hill Cot / Hill Court Road）は未確定。" },
  evidenceJa: "/assets/case-sierra-leone-hill-cot-detail（verified, hfu提供）",
});

add({
  session: 1, kind: "placeholder", status: "placeholder", time: 4,
  title: "Hill Cot: a continuous mapped area",
  data: {
    label: "Hill Cot mapped-area screenshot",
    need: "SOURCE NEEDED: image supplied by hfu in the design conversation. Confirm renderer, screenshot date, attribution and licence.",
    factsHead: "Caption draft",
    facts: [
      "Building footprints traced from 5 cm drone orthophotos and added to OpenStreetMap, with validation by OSM Sierra Leone.",
      "© OpenStreetMap contributors (ODbL)",
    ],
  },
  say: "Please look at the whole area. I do not need to explain every symbol. Look at the number of buildings, and look at how continuous the mapped area is. This was not one demonstration feature. It was a real, shared dataset.",
  purpose: "Let the scale and continuity of the result speak.",
  transition: "Who made this possible? Not one person. A workflow.",
  evidence: "Image: candidate asset, file not attached to this build. OSM attribution and ODbL notice required.",
  caution: "Insert a clearly labelled placeholder if the file is unavailable. Do not re-create the map.",
  ja: { purpose: "広がりと連続性を全画面で見せる。", key: "A substantial, coherent mapped area, not an isolated demonstration.", visual: "Hill Cotマップ画像（候補資産。ファイル未添付のためプレースホルダー）。", note: "全シンボルを説明しない。帰属表示とODbL明記が必要。" },
  evidenceJa: "/assets/visual-hill-cot-mapped-area（verified, 画像のライセンス確認が必要）",
});

add({
  session: 1, kind: "chain", status: "ready", time: 4,
  title: "One workflow, several kinds of expertise",
  data: {
    nodes: [
      { h: "5 cm drone orthophoto", t: "The source imagery" },
      { h: "Tracing contributors", t: "OSM Sierra Leone community, a Japanese aerial survey company, and hfu" },
      { h: "OSM Sierra Leone validator", t: "Quality control stayed local" },
      { h: "OpenStreetMap", t: "A shared, reusable public dataset" },
    ],
    foot: "Open collaboration does not remove professional responsibility. It redistributes it.",
  },
  say: "Look at the chain. Five-centimetre drone orthophotos. Tracing by several contributors: the OpenStreetMap community in Sierra Leone, a Japanese aerial survey company, and me. Validation by OSM Sierra Leone. And a shared dataset at the end. Each link needs a different expertise. Open collaboration does not remove professional responsibility. It redistributes it across a connected workflow.",
  purpose: "Show that quality can come from a connected workflow, and that responsibility stays visible.",
  transition: "My own path in this field also looks like a chain like this.",
  evidence: "Contributors, destination and validator: verified (hfu-provided), not externally confirmed. Who produced the orthophoto, and the exact division of the tracing work: open. Last sentence is a design interpretation, not an external fact.",
  caution: "Do not say that all OSM data follow this model. Keep local actors visible. Do not present hfu as the sole actor.",
  ja: { purpose: "品質は接続されたワークフローから生まれ、責任は再配分されることを示す。", key: "Responsibility is redistributed across a connected workflow.", visual: "4ノードの連鎖図（オルソ→図化の担い手→validator→OSM）。", note: "最後の一文は設計上の解釈。OSM全般に一般化しない。藤村は主役にしない。オルソの作成者と図化の分担は未確認。" },
  evidenceJa: "/assets/case-sierra-leone-hill-cot-detail（verified）/ 一文は derived",
});

add({
  session: 1, kind: "placeholder", status: "open", time: 12,
  title: "A path made of connections",
  data: {
    label: "One short episode from hfu's own path",
    need: "STORY NEEDED: select one verified episode (about three sentences and one image). Not a biography.",
    factsHead: "Working message",
    facts: [
      "My path was not planned.",
      "It was built from connections, one at a time.",
    ],
  },
  say: "My own path was not planned. It was built from connections, one at a time. [Insert one short, verified episode here.] I tell this not because my path is special, but because yours is also a chain of connections.",
  purpose: "Show that a career is an accumulation of connections.",
  transition: "Now, one question for you.",
  evidence: "Working message: derived. The episode itself is open and must not be invented.",
  caution: "Keep to about twelve minutes. Do not turn Session 1 into a biography of the lecturer.",
  ja: { purpose: "経路は計画ではなく接続の累積だったことを、実話1件で示す。", key: "My path was built from connections, one at a time.", visual: "実話1件の画像（未選定）。", note: "実話の選定が未了のためopen。創作で埋めない。" },
  evidenceJa: "/scenarios/01-your-expertise ムーブメント4（derived）/ 実話はopen",
});

add({
  session: 1, kind: "reflect", status: "ready", time: 11,
  title: "What do you already know?",
  data: {
    q: "What do you know that someone in another field needs?",
    prompts: ["Talk with your neighbour for two minutes.", "Name one person or office who could use it."],
    foot: "Trust your expertise.",
  },
  say: "Here is my question. What do you know that someone in another field needs? Please talk with your neighbour for two minutes. Name one person or one office who could use your knowledge. [Pause. Take two or three answers.] Trust your expertise.",
  purpose: "Let participants name their own expertise, and close Session 1.",
  transition: "After a short break, we will ask: what becomes possible when you connect it with others?",
  evidence: "Interaction design: working decision.",
  caution: "Do not invite a participant to speak for their country. Voluntary answers only.",
  ja: { purpose: "各自の専門性を言語化し、第1コマを締める。", key: "Trust your expertise.", visual: "大きな問い＋2つの促し。", note: "発言は任意。質疑バッファ約10分をこの後に確保。" },
  evidenceJa: "/scenarios/01-your-expertise ムーブメント5-6",
});

// ---------- Session 2 ----------
add({
  session: 2, kind: "divider", status: "ready", time: 0,
  title: "Connect",
  data: { label: "SESSION 2 · 14:15–15:15", feeling: "I do not have to solve everything alone." },
  say: "Welcome back. Session two is about connection. The feeling I hope for is this: I do not have to solve everything alone.",
  purpose: "Set the target feeling of Session 2.",
  transition: "First, why connection matters.",
  evidence: "Session design: working decision.",
  caution: "Keep it short.",
  ja: { purpose: "第2コマの狙う感情を示す。", key: "I do not have to solve everything alone.", visual: "セクション区切り（大きな数字2）。", note: "30秒以内。" },
  evidenceJa: "/scenarios/00-overall-lecture",
});

add({
  session: 2, kind: "cycle", status: "ready", time: 8,
  title: "Connect and test: one loop",
  data: {
    nodes: ["Expertise", "Connect", "Test", "Learn"],
    back: "the next connection",
    foot: "Connect creates the possibility. A small test turns it into learning.",
  },
  say: "Here is the idea of the whole lecture. You start from expertise. You connect it with others. You test something small. You learn from it. And the learning creates the next connection. Connection alone ends with a nice introduction. Testing alone ends with a technical demo. Together, they make a loop.",
  purpose: "Explain the backbone: connect and test as one loop.",
  transition: "Where does this idea come from in our community? Let me introduce the UN Open GIS Initiative.",
  evidence: "Backbone: working decision (derived and normative).",
  caution: "Do not turn this into a theory lecture. Keep it to about eight minutes.",
  ja: { purpose: "connectとtestの循環を、講義全体の背骨として説明する。", key: "Connect creates the possibility; a small test turns it into learning.", visual: "4ノードの循環図（戻り矢印は次の接続）。", note: "理論の講義にしない。" },
  evidenceJa: "/decision-support/connect-test-backbone",
});

add({
  session: 2, kind: "cards", status: "ready", time: 10,
  title: "UN Open GIS Initiative and DWG7",
  data: {
    cards: [
      { h: "A community of practice", t: "DWG7 is the UN Smart Maps Group, an open community." },
      { h: "Vision", t: "Keep web maps open." },
      { h: "Mission", t: "Test new technologies for future geospatial operations." },
    ],
    foot: "Source: unopengis.org/DWG7.html",
  },
  say: "The UN Open GIS Initiative has a working group called DWG7, the UN Smart Maps Group. It is an open community of practice. Its vision is to keep web maps open. Its mission is to test new technologies for future geospatial operations. Notice the word test. It is the same word we use today.",
  purpose: "Give the minimum explanation of the Initiative and DWG7, and link its mission to the word test.",
  transition: "Now let me show how connection worked in one country: Sierra Leone.",
  evidence: "Checked on 2026-11-02 against https://unopengis.org/DWG7.html and https://unopengis.org/ (externally verified).",
  caution: "Not an organizational history. Not a software catalogue. A community does not replace the responsibilities of national institutions.",
  ja: { purpose: "Initiative/DWG7を最小限で説明し、missionのtestと本講義を結ぶ。", key: "Open community; keep web maps open; test new technologies.", visual: "3カード。", note: "組織史にしない。公式制度とコミュニティを混同しない。" },
  evidenceJa: "/sources/fact-check-2026-11-02（外部確認済）",
});

add({
  session: 2, kind: "stats", status: "open", time: 3,
  visual: "Text only. Figures from https://drone.hotosm.org/ (checked 2026-11-02).",
  title: "Freetown: start with what already exists",
  data: {
    stats: [
      { n: "30", l: "people flying low-cost drones" },
      { n: "80 km²", l: "mapped" },
      { n: "5 cm", l: "resolution" },
    ],
    foot: "Community-led drone mapping, Freetown. Source: HOT Drone Tasking Manager (drone.hotosm.org).",
  },
  say: "In Freetown, a community-led crew had already produced high-resolution imagery. The first connection is not always a new project. Sometimes it is simply finding and using what already exists. [Say here exactly what was reused, once confirmed.]",
  purpose: "Show the first mode of connection: reuse.",
  transition: "Reuse needs a trusted relationship. A small contract helped to build one.",
  evidence: "Figures: externally checked on HOT public pages (2026-11-02). What hfu reused in Freetown: open.",
  caution: "Do not imply hfu produced these figures. Do not invent the reuse details.",
  ja: { purpose: "接続の第一形態「既存資産の利用」を示す。", key: "Sometimes connecting means using what already exists.", visual: "3つの大きな数値（HOT公開ページ由来）。", note: "藤村が具体的に何を再利用したかはopen。" },
  evidenceJa: "HOT公開ページ（外部確認済）/ 再利用の具体はopen",
});

add({
  session: 2, kind: "chain", status: "ready", time: 3,
  title: "A small contract as a connector",
  data: {
    nodes: [
      { h: "JICA Quick Mapping Project", t: "A small-value contract" },
      { h: "HOT", t: "Asked to provide coordination" },
      { h: "OSM Sierra Leone", t: "Activities supported" },
      { h: "Waterloo", t: "Drone mapping observed" },
    ],
    foot: "A small contract can create a large connection.",
  },
  say: "The contract was small. It did not simply buy a map. It asked HOT for coordination. Pete Masters of HOT made our contact with OSM Sierra Leone smoother. The contract supported the activities of OSM Sierra Leone, and it allowed us to observe drone mapping in Waterloo. Sometimes the most valuable deliverable is not a dataset. It is a working connection.",
  purpose: "Show procurement as connective infrastructure.",
  transition: "And what did we see in Waterloo?",
  evidence: "Contract arrangement: verified (hfu-provided). Pete Masters (HOT) is named in the spoken notes only, not on the slide.",
  caution: "Do not state the contract value. Do not imply HOT alone delivered the local activity. Keep OSM Sierra Leone's agency visible.",
  ja: { purpose: "少額契約が調整能力を購入し、接続を作ったことを示す。", key: "A small contract can create a large connection.", visual: "4ノードの連鎖図。", note: "契約額は出さない。OSM Sierra Leoneの主体性を保つ。" },
  evidenceJa: "/assets/case-sierra-leone-hot-contract-detail（verified, hfu提供）",
});

add({
  session: 2, kind: "placeholder", status: "placeholder", time: 3,
  title: "Waterloo: peer-to-peer drone mapping",
  data: {
    label: "Waterloo photograph or project visual",
    need: "SOURCE NEEDED: photograph or project visual with permission. Check HOT page for reuse conditions.",
    factsHead: "What we observed",
    facts: [
      "Drone flights, image capture and digitising shared peer to peer",
      "Open-source tools",
      "Agencies needed building, road and infrastructure data",
    ],
  },
  say: "In Waterloo, we observed local people sharing the whole drone workflow with each other: flying, capturing images, and digitising with open-source tools. We were observers. The activity belonged to the local crew.",
  purpose: "Show the second mode: observe and learn from a live production setting.",
  transition: "Put these together, and you can see a chain of expertise.",
  evidence: "Public description checked on https://www.hotosm.org/en/projects/waterloo-drone-mapping/ (2026-11-02). What was learned and what did not continue: open.",
  caution: "Do not overstate hfu's role. Do not fabricate photographs.",
  ja: { purpose: "第二形態「新しい実践の観察」を示す。", key: "We observed; the activity belonged to the local crew.", visual: "Waterlooの写真（未入手→プレースホルダー）。", note: "観察者の立場。得られた学びと継続しなかった点はopen。" },
  evidenceJa: "HOT公開ページ（外部確認済）/ 学び・非継続点はopen",
});

add({
  session: 2, kind: "chain", status: "ready", time: 3,
  title: "A chain of expertise",
  data: {
    nodes: [
      { h: "Capture", t: "Drone pilots" },
      { h: "Process", t: "Photogrammetry" },
      { h: "Map", t: "Tracing and tagging" },
      { h: "Use", t: "Planning and response" },
      { h: "Maintain", t: "Validators and updates" },
    ],
    foot: "No single person holds every link.",
  },
  say: "Capture, process, map, use, maintain. Each link needs different expertise, and no single person holds every link. This is why connection matters. It lets you contribute your link, and trust others with theirs.",
  purpose: "Generalise the Sierra Leone story as a chain, without a standard solution.",
  transition: "Now a more recent and smaller case: a planned workshop in Laos.",
  evidence: "Derived (design interpretation).",
  caution: "Do not recommend 5 cm GSD as a standard. Do not evaluate any country or institution.",
  ja: { purpose: "シエラレオネ事例を「専門性の鎖」として一般化する。", key: "No single person holds every link.", visual: "5ノードの連鎖図。", note: "5 cm GSDを標準解として薦めない。" },
  evidenceJa: "/decision-support/case-use（derived）",
});

add({
  session: 2, kind: "steps", status: "placeholder", time: 8,
  tag: "PLAN, NOT RESULT",
  title: "Laos: one place, one fact, one vocabulary",
  data: {
    rows: [
      { t: "Observe the same place together" },
      { t: "Record one attribute: building:levels" },
      { t: "Write “unsure” rather than guess" },
      { t: "Leave verified facts as shared data" },
    ],
    foot: "One verified building is more valuable than many guessed buildings.",
  },
  say: "On twenty November, five days before this lecture, a mapping workshop is planned at the JICA Laos Office. The design is simple. Observe the same place together. Record one attribute: the number of building levels. If you are unsure, write unsure. This slide describes a plan. I will say what actually happened only if I can verify it.",
  purpose: "Show a bounded test design as a connection case, labelled as a plan.",
  transition: "Not every connection works. Let me tell you about one that did not.",
  evidence: "Workshop outline: source file November_Mapping_Workshop_Updated.docx (working draft), volatile. Outcome unknown before 2026-11-20.",
  caution: "Do not invent outcomes, reactions, OSM edits or photographs. Do not ask the Lao participant to validate or comment. Update after the post-workshop review.",
  ja: { purpose: "ラオスのワークショップ設計を「計画」として提示する。", key: "One verified building is more valuable than many guessed buildings.", visual: "4行の手順＋「PLAN, NOT RESULT」タグ。", note: "結果は11/20後に更新。ラオスの研修員に同意・講評を求めない。" },
  evidenceJa: "/assets/case-laos-building-levels-workshop（verified, volatile）",
});

add({
  session: 2, kind: "placeholder3", status: "open", time: 12,
  title: "What did not connect, and what remained",
  data: {
    cols: [
      { h: "What we tried", t: "[To be selected]" },
      { h: "What did not connect", t: "[To be selected]" },
      { h: "What remained", t: "Who we met, what we learned, what stayed available" },
    ],
    need: "STORY NEEDED: one or two bounded failure stories from UN Open GIS Initiative or DWG7 work.",
  },
  say: "[Insert the selected failure story.] I want to tell it in three parts. What we tried. What did not connect. And what remained: the people we met, the lesson we kept, the thing that stayed useful. A failure is not a story about a loss. It is a story about what we kept.",
  purpose: "Use failure to expose boundaries and retained value, not negativity.",
  transition: "So, what do we do with what we learned? We test.",
  evidence: "Story selection: open. Do not invent a failure story.",
  caution: "No self-display and no self-deprecation. Land on what was learned, who connected, and what remained.",
  ja: { purpose: "失敗談を、境界と残ったものに着地させる。", key: "A failure is a story about what we kept.", visual: "3列の枠（試したこと／つながらなかったこと／残ったこと）。", note: "失敗談の選定が未了のためopen。自己顕示・自己卑下にしない。" },
  evidenceJa: "/open-questions/30-minute-interview（open）",
});

add({
  session: 2, kind: "bridge", status: "ready", time: 5,
  title: "From connect to test",
  data: {
    a: { h: "Connect", t: "Create the possibility" },
    b: { h: "Test", t: "Turn it into learning" },
    foot: "Next: a connection test, here in this room.",
  },
  say: "Connection creates the possibility. But a possibility is not yet learning. To learn, we need a small test. And we will do one now, in this room. It will also prepare tomorrow's session.",
  purpose: "Hand over from Session 2 to Session 3.",
  transition: "After the break, we begin Session 3.",
  evidence: "Working decision.",
  caution: "Do not open the technical content early.",
  ja: { purpose: "第2コマから第3コマへ橋渡しする。", key: "Connection creates the possibility; a test turns it into learning.", visual: "Connect→Testの2ブロック。", note: "休憩前の締め。" },
  evidenceJa: "/scenarios/02-connect ムーブメント6",
});

// ---------- Session 3 ----------
add({
  session: 3, kind: "divider", status: "ready", time: 0,
  title: "Test",
  data: { label: "SESSION 3 · 15:30–16:30", feeling: "I can begin something." },
  say: "Welcome back. Session three is about testing. The feeling I hope for is: I can begin something.",
  purpose: "Set the target feeling of Session 3.",
  transition: "First, what is a small test?",
  evidence: "Session design: working decision.",
  caution: "Keep it short.",
  ja: { purpose: "第3コマの狙う感情を示す。", key: "I can begin something.", visual: "セクション区切り（大きな数字3）。", note: "30秒以内。" },
  evidenceJa: "/scenarios/00-overall-lecture",
});

add({
  session: 3, kind: "steps", status: "ready", time: 4,
  title: "First: join the seminar Wi-Fi",
  data: {
    rows: [
      { t: "Open the Wi-Fi list on your PC" },
      { t: "Choose the seminar network", m: "vectortiles" },
      { t: "Enter the password", m: "vectortiles" },
      { t: "Check that you are connected" },
    ],
    foot: "Your PC leaves its current Wi-Fi. Please do this together, now.",
  },
  say: "Before we start, one practical step. Please switch your PC to the seminar Wi-Fi. This is the network where your Raspberry Pi lives. Open the Wi-Fi list, choose the network name shown here, and enter the password. Your PC will leave its current network, so please do this now. If your PC cannot see the network, or you need help, please raise your hand. We will use this connection in about forty minutes.",
  purpose: "Move every participant PC to the Wi-Fi network that the Raspberry Pis are on, at the start of Session 3.",
  transition: "Now, what is a small test?",
  evidence: "SSID: verified on all 11 devices by the ops survey of 2026-11-20 (same SSID on every device). Passphrase: stated by hfu on 2026-11-20, and consistent with the key saved on the devices (checked by derivation, only the match result is recorded). Network: 5 GHz channel 36, WPA2, internet access works, no client isolation (tested from a LAN host on the same SSID, 2026-11-20). Permission to show SSID and password on the slide for review: hfu, 2026-11-19.",
  caution: "Decide at review whether the Wi-Fi password stays on the slide, or moves to the classroom screen or the session card. Do not describe the network as secure or private. Do not show the management route. All devices use 5 GHz only: a PC without 5 GHz support will not see the network, so ask for hands early. Guest SSIDs and wired LANs were not tested. Do not copy the 64-digit saved key anywhere.",
  ja: { purpose: "第3コマの冒頭で、研修員のPCをRPiのあるWi-Fiに切り替えてもらう。", key: "Join the seminar Wi-Fi first.", visual: "番号付きの4手順。SSIDとパスワードは等幅の枠（現状はプレースホルダー）。", note: "SSIDは全11台で確認済み。パスワードはhfuの申告で、機体の保存値と整合（計算で確認）。5GHz（ch36）のみなので、5GHz非対応のPCは接続できない。パスワードを資料に残すかはレビューで判断。" },
  evidenceJa: "運用調査（2026-11-20）: SSID・5GHz・インターネット・クライアント分離なし / パスワード: hfu申告＋計算で整合 / 資料に残すか: レビューで判断",
});

add({
  session: 3, kind: "cards", status: "ready", time: 5,
  title: "What is a small test?",
  data: {
    cards: [
      { h: "Small", t: "One place, one attribute, one person." },
      { h: "Safe and cheap", t: "We can break it, observe it, and rebuild it." },
      { h: "Observed", t: "What works, what does not, and who is needed." },
    ],
    foot: "A test is not a miniature national system.",
  },
  say: "A small test is small. One place, one attribute, one person. It is safe and cheap, so we can break it and rebuild it. And we observe: what works, what does not, and who is needed. A test is not a miniature national system. It is a way to get the next piece of information.",
  purpose: "Define the test as a small, observable experiment.",
  transition: "One recent example of a small test: Laos.",
  evidence: "Normative definition (KCAIM /decision-support/connect-test-backbone).",
  caution: "Do not frame the test as failure avoidance. Do not promise a result.",
  ja: { purpose: "testを「小さく・安全に・観察する実験」と定義する。", key: "A test is not a miniature national system.", visual: "3カード。", note: "失敗回避の話にしない。" },
  evidenceJa: "/decision-support/connect-test-backbone（normative）",
});

add({
  session: 3, kind: "placeholder3", status: "placeholder", time: 2,
  tag: "REPLACE AFTER 20 NOV",
  title: "Laos: a small test in practice",
  data: {
    cols: [
      { h: "Planned", w: 2.9, t: "Need: a detailed map for the Chanthabury district detailed plan.\n\nTest: check the number of floors of buildings by eye, and enter it into OpenStreetMap.", plain: true },
      { h: "Observed", w: 5.9, imgs: [
        { src: "assets/laos-field-1.jpg", w: 2.9, h: 2.175, alt: "Two people on a street in Laos; one points up at a tall building." },
        { src: "assets/laos-field-2.jpg", w: 2.25, h: 3.0, alt: "A hand marks a printed map with a pencil; faces are not shown." },
      ], cap: "Field work: checking floors by eye." },
      { h: "Learned", w: 2.9, t: "[Lessons, and what not to generalise]" },
    ],
    need: "STILL NEEDED after the review of 2026-11-20: verified observations and lessons. Photos show field work, with no faces.",
  },
  visual: "Two photographs supplied by hfu: field work in Laos, floors of buildings checked by eye; no faces shown. Photographer, permission and licence: hfu to confirm. The group photograph is NOT used (decision 2026-11-21: Wi-Fi password on screen, many faces).",
  say: "[If verified results exist:] Here is what we planned, what we observed, and what we learned. [If not:] This was a small test, and I can tell you what we planned and what is still unknown. One verified building is more valuable than many guessed buildings.",
  purpose: "Show a recent, bounded test, with plan, observation and lesson kept separate.",
  transition: "Today we will run a small test of our own. It also prepares tomorrow.",
  evidence: "Workshop outcome: unknown at the time of this draft (volatile).",
  caution: "Never narrate success before it is verified. Do not invent outcomes, reactions, edits or photographs. Do not pressure the Lao participant.",
  ja: { purpose: "ラオスの小さな実験を、計画・観察・学びに分けて示す。", key: "Plan, observation and lesson are kept separate.", visual: "3列。Plannedは hfu 提供のストーリー、Observedに現地作業写真2枚（顔なし）、Learnedは枠のまま。", note: "結果が未成熟なら「計画」として提示。成功を先取りしない。" },
  evidenceJa: "/decision-support/laos-recency, /open-questions/laos-post-workshop-review",
});

add({
  session: 3, kind: "compare", status: "ready", time: 3,
  tag: "REPLACEABLE",
  title: "Tomorrow: tiled maps with Mr. Matsuzawa",
  data: {
    left: { h: "Today · hfu", items: ["Connect and check", "SSH and the browser, then stop"] },
    right: { h: "Tomorrow · Matsuzawa", items: ["Create, design and distribute tiled maps", "On the same Raspberry Pi"] },
    note: "Today we stop at SSH and the browser. Tomorrow starts from there.",
  },
  say: "Tomorrow, Mr. Taro Matsuzawa of Geolonia will teach how to create, design and distribute tiled maps, on the same Raspberry Pi. Today, I will not teach that. Today we only connect and check: SSH and the browser. Then we stop. Tomorrow starts from there.",
  purpose: "Set the boundary between today and tomorrow.",
  transition: "First, a word about the machines you will use.",
  evidence: "Stop boundary (SSH and browser check only): confirmed by hfu on 2026-11-12. Tomorrow's content: stated in Matsuzawa's material (https://github.com/smellman/jica_2026/blob/main/jica-seminar-2026.md). Whether niroku is installed in class tomorrow is not confirmed, and it is not shown on this slide.",
  caution: "Do not say that niroku will definitely be used. Do not pre-empt tomorrow's explanations. Replace the right-hand list if Mr. Matsuzawa changes the plan.",
  ja: { purpose: "本日と翌日の境界を示す。", key: "Today: connect and check (SSH and browser). Tomorrow: build and make.", visual: "左右比較（本日／翌日）＋「REPLACEABLE」タグ。", note: "前日はSSHとブラウザ接続の確認まで（2026-11-12、hfu確認）。niroku採用は断定しない。" },
  evidenceJa: "境界: hfu確認（2026-11-12）/ 翌日の内容: /assets/matsuzawa-2026-material（stated）",
});

add({
  session: 3, kind: "devices", status: "placeholder", time: 2,
  tag: "CONFIRM ASSIGNMENT",
  title: "Your temporary laboratory",
  data: {
    devices: ["m326", "m327", "m328", "m332", "m334", "m336", "m347", "m348", "m349", "m353", "m355"],
    head: ["Device ID", "Country", "IP address"],
    factsHead: "The fleet",
    facts: ["11 training Raspberry Pis", "Debian 13 on arm64, updated regularly", "Status checked about every 2 hours"],
    url: "https://dwg7.github.io/m3xx-fleet/",
    ips: { m326: "192.168.86.26", m327: "192.168.86.27", m328: "192.168.86.28", m332: "192.168.86.32", m334: "192.168.86.34", m336: "192.168.86.36", m347: "192.168.86.47", m348: "192.168.86.48", m349: "192.168.86.49", m353: "192.168.86.53", m355: "192.168.86.55" },
    countries: { m326: "Spare", m327: "Fiji", m328: "Gabon", m332: "Laos", m334: "Nigeria", m336: "Papua New Guinea", m347: "Rwanda", m348: "Sierra Leone", m349: "Timor-Leste", m353: "Spare", m355: "Togo" },
    foot: "Find your country name. That row is your device. Spare: not assigned.",
  },
  visual: "Table and text only. Optional later: a screenshot of the public dashboard https://dwg7.github.io/m3xx-fleet/ (SOURCE NEEDED: not captured; the page was not reachable from the build environment).",
  say: "These Raspberry Pis are a temporary laboratory. Their value is not ownership. Their value is that everyone can connect, test, break, observe and rebuild in the same environment. There are eleven training devices. Each one has a name, such as m326. Please find your name on this list. That is your device for today and tomorrow. The devices run Debian 13. Their status is checked about every two hours, and you can see it on a public dashboard.",
  purpose: "Frame the Raspberry Pi as a shared temporary laboratory, and give each participant a device ID.",
  transition: "To connect to your device, you need five small words.",
  evidence: "Fleet guide provided by hfu on 2026-11-12 (volatile): 11 training devices and their host names, Debian GNU/Linux 13 (trixie) on arm64, regular updates, status collected about every two hours. Host names as device IDs on slides: approved by hfu on 2026-11-12. Participant-to-device assignment: working proposal by Claude on 2026-11-20 (the 9 countries from UNopenGIS/7 issue 976, in English alphabetical order, onto the 9 non-spare devices); not yet confirmed by hfu. m326 and m353 are spares (decided by hfu on 2026-11-20). IP addresses: confirmed on the live devices by the ops survey of 2026-11-20 (unchanged since 2026-08-20, also after the 2026-11-08 reboot). They are likely DHCP reservations on the router; not confirmed. m326 and m353 have no ~/jica_scripts (same as 2026-08-20). Numbers not rechecked against the dashboard from the build environment. Temporary-laboratory framing: KCAIM /decision-support/rpi-use-model (derived).",
  caution: "List only the training devices. Do not list the lecturer and management devices, or devices that are not ready. Do not show MAC addresses, the management route, or the password. hfu asked on 2026-11-19 for a list of device ID, country flag and IP address. The KCAIM security rule keeps live IP addresses out of a public deck, so decide at review whether the IP column stays in the shared file or only in the classroom copy. Recheck the IP addresses once more on the day. Guest SSIDs and wired LANs were not tested.",
  ja: { purpose: "RPiを「一時的な共有実験室」と位置づけ、各研修員にdevice ID（ホスト名）を示す。", key: "A Raspberry Pi is a temporary laboratory. Find your device.", visual: "研修機11台の表（Device ID、Participant、IP address）とフリートの要点、公開ダッシュボードのURL。", note: "列はDevice ID・Country（国名のみ、国旗なし）・IP。Countryは仮割当（Issue #976の9か国をアルファベット順に配置、hfu未確認）。m326・m353は予備機。IP列は、運用調査（2026-11-20）で実機の値を確認済み（8月から変化なし）。m326とm353は教材（~/jica_scripts）が未投入。IPをこの資料に残すかはレビューで判断（2026-11-19）。講師専用機・未参加機は載せない。" },
  evidenceJa: "m3xxフリートの案内（hfu提供、2026-11-12、volatile）/ ホスト名の掲載: hfu承認（2026-11-12）/ 割当: open",
});

add({
  session: 3, kind: "netflow", status: "ready", time: 8,
  title: "Five small words",
  data: {
    foot: "Conceptual diagram. The real connection flow will be confirmed in the Raspberry Pi test.",
  },
  say: "Five small words, in one picture. Your PC and your Raspberry Pi join the same Wi-Fi network. SSID is the name of that network. An IP address is the address of a device on the network. SSH is a secure way to type commands on another computer. A URL is the address you type in the browser. A port is a door number on a device. That is all you need for now.",
  purpose: "Give the minimum vocabulary for the connection test, as one connection picture.",
  transition: "Now, let us use them.",
  evidence: "Concept list: KCAIM /scenarios/03-test. One-line definitions: design interpretation. Port numbers 80 and 8000: stated in Matsuzawa's material. Diagram is conceptual; the real flow is open until the Raspberry Pi end-to-end test.",
  caution: "Keep to minimum depth. Leave Linux and tile concepts to tomorrow. The morning session does not cover URL or port (hfu, 2026-11-12), so this is their first introduction today.",
  ja: { purpose: "接続試験に必要な最小語彙を、1枚の接続図で渡す。", key: "SSID, IP address, SSH, URL, port.", visual: "PC—Wi-Fi—RPiの概念図に5語をラベルとして配置（RPi接続フローの図版を兼ねる）。", note: "最小限の深さ。Linuxとタイルは翌日へ。午前はURL・ポートを扱わない（2026-11-12、hfu確認）ので重複しない。実際の接続フローは実機試験後に確定。" },
  evidenceJa: "/scenarios/03-test（概念の一覧）/ 定義文と図は derived",
});

add({
  session: 3, kind: "steps", status: "ready", time: 21,
  title: "Your connection test",
  data: {
    rows: [
      { t: "Check that you are on the seminar Wi-Fi", m: "vectortiles" },
      { t: "Find your device ID and IP on the list", m: "<your-ip>" },
      { t: "Open PowerShell" },
      { t: "Connect to your Raspberry Pi", m: "ssh niroku@<your-ip>" },
      { t: "Type the password shown in class", m: "<password shown in class>" },
      { t: "Success: you see the Raspberry Pi shell" },
      { t: "Open the browser (a 404 page is OK)", m: "http://<your-ip>/" },
    ],
    foot: "Work on your own. Help each other.",
  },
  say: "Let us start. Please follow the seven steps. Find your row on the list and use your IP address. Copy and paste the commands, and replace the address with your own. The password is shown on the classroom screen, not on this slide. If you stop, do not worry. Ask your neighbour first, and then ask me. Peer help is part of the test.",
  purpose: "Run the individual connection test with peer assistance (about 25 minutes).",
  transition: "Whatever happened, we want to see where it stopped.",
  evidence: "Command pattern, the niroku account and password login for participants: verified (training environment; fleet guide from hfu, 2026-11-12). IP-first connection (decided 2026-11-19): name resolution by mDNS has failed from Windows PowerShell in a past case, so the device name (<device>.local) is not used on this slide. mDNS was not tested on this network. What the browser shows at the device address: the ops survey got HTTP 404 at the root of port 80 (the server answers, but no page is placed there); a real browser was not tested. The SSID is real; the IP and the SSH password remain placeholders.",
  caution: "NEVER put the real password, the live IP list, host names or network details on this deck. Use the separate session card. Replace the SSID placeholder only if the SSID is judged non-sensitive.",
  ja: { purpose: "研修員が各自で接続試験を行う（約25分）。", key: "SSID→device ID→PowerShell→SSH（IPで接続）→ブラウザ。", visual: "番号付きの7手順＋等幅コマンド。", note: "IPで接続する（過去にWindows PowerShellでmDNSが解決しなかった事例があるため、`.local` は使わない）。パスワードは載せず、教室の画面で示す。" },
  evidenceJa: "/scenarios/03-test, /decision-support/security-aware-sharing",
});

add({
  session: 3, kind: "stoptable", status: "ready", time: 5,
  title: "Where did it stop? Record readiness",
  data: {
    stops: ["Power", "SSID", "IP", "SSH", "Browser"],
    head: ["Device", "Power", "SSID", "IP", "SSH", "Browser", "Owner"],
    rows: [["m326", "–", "–", "–", "–", "–", "–"], ["m327", "–", "–", "–", "–", "–", "–"], ["…", "–", "–", "–", "–", "–", "–"]],
    foot: "Template only. 11 training devices. Real results go on the controlled readiness roster.",
  },
  say: "If something did not work, please tell us where it stopped: power, Wi-Fi, IP address, SSH, or browser. We will record it in a simple table. This is not a score. It is information, so that tomorrow morning we can start on time.",
  purpose: "Make problems visible and assign owners before 09:30 tomorrow.",
  transition: "Now it is your turn: a small test that is yours.",
  evidence: "Readiness matrix: working design. Rows show the first device IDs as examples; no real results are recorded here. Device count: fleet guide from hfu, 2026-11-12 (volatile).",
  caution: "Do not publish per-device fault details that reveal internal configuration.",
  ja: { purpose: "止まった地点を記録し、翌朝までの担当を決める。", key: "Not a score. It is information.", visual: "停止地点の5段階＋準備状況マトリクス（テンプレート）。", note: "実データは管理された名簿へ。公開デッキにはひな型のみ。" },
  evidenceJa: "/decision-support/security-aware-sharing",
});

add({
  session: 3, kind: "fill3", status: "ready", time: 5,
  title: "One person, one real need, one small test",
  data: {
    rows: ["One person I will connect with", "One real need in my work", "One small test I will start"],
    foot: "Small enough to begin next month.",
  },
  say: "Please write three lines. One person you will connect with. One real need in your work. And one small test you can start. Keep it small: one place, one attribute, one person. You do not need to share it. It is yours.",
  purpose: "Turn the day into a personal first step.",
  transition: "Let me close with three sentences.",
  evidence: "Working design.",
  caution: "Do not require participants to share. Do not turn this into a country-level commitment.",
  ja: { purpose: "帰国後に始める「人・ニーズ・小さな実験」を各自に書かせる。", key: "One person, one need, one small test.", visual: "3つの記入欄。", note: "共有は任意。国単位の約束にしない。" },
  evidenceJa: "/scenarios/03-test ムーブメント6",
});

add({
  session: 3, kind: "close", status: "ready", time: 2,
  title: "Three things to take home",
  data: { lines: ["Trust your expertise.", "Connect it with others.", "Start with one small test."] },
  say: "Trust your expertise. Connect it with others. Start with one small test. Thank you very much. See you tomorrow morning, with a connected Raspberry Pi.",
  purpose: "Close with the three-line final message.",
  transition: "Tomorrow at 09:30: Mr. Matsuzawa's session.",
  evidence: "Final message: working decision, stable until challenged.",
  caution: "No motivational clichés. End on time.",
  ja: { purpose: "最終メッセージ3行で閉じる。", key: "Trust your expertise. Connect it with others. Start with one small test.", visual: "ダーク背景に3行。", note: "時間通りに終える。" },
  evidenceJa: "/scenarios/00-overall-lecture（最終メッセージ）",
});

add({
  session: 3, kind: "refs", status: "ready", time: 0,
  title: "References",
  data: {
    rows: [
      { t: "UN Open GIS Initiative", u: "https://unopengis.org" },
      { t: "DWG7", u: "https://dwg7.unopengis.org" },
      { t: "DWG7 guide", u: "https://dwg7.unopengis.org/guide" },
    ],
  },
  say: "These are three pages to continue from: the initiative, DWG7, and the DWG7 guide.",
  purpose: "Give participants the starting links after the lecture.",
  transition: "None. Tomorrow at 09:30: Mr. Matsuzawa's session.",
  evidence: "URLs supplied by hfu (2026-11-21). Not opened or checked from the build environment.",
  caution: "Add no link that is not confirmed. No Wi-Fi or device details on this slide.",
  ja: { purpose: "講義後に辿れる出発点のリンクを渡す。", key: "Three links to continue from.", visual: "3行（名前とURL）。", note: "締めの後に残して質疑に使える。" },
  evidenceJa: "hfu指定（2026-11-21）。URLは未確認。",
});

// ---------- Appendix (draft only) ----------
add({
  session: 4, kind: "steps", status: "open", time: 0, tag: "DRAFT ONLY",
  title: "Before finalization: five gates",
  data: {
    rows: [
      { t: "Kamimura exchange: no overlap on URL and port (12 Nov)" },
      { t: "Matsuzawa: stop at SSH and browser (12 Nov); niroku in class still open" },
      { t: "Raspberry Pi end-to-end test" },
      { t: "Laos workshop review, after 20 November" },
      { t: "Visual sources and licences" },
    ],
    foot: "Remove this slide before delivery.",
  },
  say: "(Not for delivery.) This deck is a structural draft. These five gates must be passed before it becomes the delivery deck.",
  purpose: "Identify the gates before finalization, as required by the generation procedure.",
  transition: "None. End of the structural draft.",
  evidence: "KCAIM /procedures/claude-code-pptx-generation, completion rule (normative).",
  caution: "Do not present this deck as the final delivery version.",
  ja: { purpose: "最終化前に通す5つのゲートをデッキ内に明示する（手順書の完了規則）。", key: "構造版であり、5つのゲートを通すまで最終版ではない。", visual: "番号付きの5行。「DRAFT ONLY」タグ。", note: "当日は使わない。最終版では削除。" },
  evidenceJa: "/procedures/claude-code-pptx-generation（Completion rule）",
});

module.exports = S;
