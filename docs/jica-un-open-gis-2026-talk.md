# UN Open GIS Initiative
2026-11-25（水）13:00–16:30、JICA 国家測量事業計画・管理

## 時間配分（Claude の案、書き換えてください）

3ブロックを、1 : 0.5 : 1.5 時間にする。休憩は、14:00 と 15:15（各15分）。

| 時刻 | 長さ | 内容 |
|---|---|---|
| 13:00–14:00 | 60分 | **ブロック1** ラズパイの実習（接続、CLI、curl） |
| 14:00–14:15 | 15分 | 休憩（止まった人は、補助の人と続ける） |
| 14:15–14:45 | 30分 | **ブロック2** UN Open GIS Initiative |
| 14:45–15:15 | 30分 | **ブロック3** 前半: Smart Maps（dwg7）の紹介と、最近のプロジェクト2件 |
| 15:15–15:30 | 15分 | 休憩 |
| 15:30–16:30 | 60分 | **ブロック3** 後半: 最近のプロジェクト4件、締め、質疑 |

内訳（分）:

- ブロック1（60）: 導入と Background 5 / Wi-Fi 5 / IP 5 / SSH 15（止まった人の対応を含む）/ CLI 5 / curl とヘッダー解説 15 / 質疑 10
- ブロック2（30）: OSS と GSI Maps 5 / Initiative の成り立ち 8 / 共同議長 3 / DWG 5 / 仕組み 5 / 質疑 4
- ブロック3 前半（30）: dwg7 の紹介 8 / bvmap-koicha 11 / snow-hokkaido 11
- ブロック3 後半（60）: waterloo 11 / dji-waypoints-hitl 11 / dorayaki 11 / ortho-earth 11 / 締め 8 / 質疑・議論 8

時間の再配分案（Claude、ラオス・FERSPAS・QMP を足す場合）:

- ブロック2: 「Open with Official」3分と QMP 4分を足すと、合計 7分増える。他から 7分を削る（OSS と GSI Maps 5→3、DWG 5→3、仕組み 5→3、質疑 4→2 など）。
- ブロック3（プロジェクトに使える時間は、約63分）: ラオス 12、FERSPAS 9、bvmap-koicha 8、snow-hokkaido 8、dorayaki 9、ortho-earth 8、dji-waypoints-hitl 5、waterloo 4。**waterloo か dji を、任意（時間が余ったら）にする**案もある。

枚数の見込み: ブロック1 約20枚、ブロック2 約12枚、ブロック3 約25枚。合計 約55〜60枚。
前提: 各プロジェクト 11分は、画面を見せる時間を含む。説明のスライドは、1項目あたり 2〜3枚。

## 0. What we do this afternoon
> 13:00–13:05（5分）。次の「Background」も含む。

A part of the web mapping series (this morning - tomorrow)

1. Hands-on practice of Raspberry Pi 4B server
2. UN Open GIS Initiative
3. Smart Maps (dwg7) activities

## 0. Background

In national geospatial information authorities, we produce geospatial information. We also need to know how it is used.

I make use of my ICT (information and communications technologies) background to promote the use of geospatial information in both inside and outside the government. 

## 1. Hands-on practice of Raspberry Pi 4B server
> **ブロック1: 13:00–14:00（60分）**

I prepared a server machine for each of you. 

Each server is very small as a credit card and as cheap as $100. 
It is called Raspberry Pi 4B. 

They are located in the cabinet in this room. 
We will be using the Raspberry Pi 4B tomorrow. 

So, let us test if it works for you. 

### First: join the server Wi-Fi
> 5分（13:05–13:10）

1. Open the Wi-Fi list on your laptop. 
2. Choose the server Wi-Fi. 
  - SSID: vectortiles
  - Password: vectortiles
3. Check if your are connected to the vectortiles Wi-Fi.

### Second: know the IP address of your Raspberry Pi 4B
> 5分（–13:15）

Host name Country IP address
m327 Fiji 192.168.86.27
m328 Gabon 192.168.86.28
m332 Laos 192.168.86.32
m334 Nigeria 192.168.86.34
m336 Papua New Guinea 192.168.86.36
m347 Rwanda 192.168.86.47
m348 Sierra Leone 192.168.86.48
m349 Timor-Leste 192.168.86.49
m355 Togo 192.168.86.55

Take note of your IP address. 
Host name is optional. 

### Third: connect to Raspberry Pi 4B from your laptop
> 15分（–13:30）。止まった人は、補助の人と。残りの人は先に進む。

- Open “PowerShell” from Windows Start Menu
- ssh niroku@192.168.86.xx
- password: (say it in class)  <!-- 共有SSHパスワードの値は、リポジトリに書かない決まり。貼り付け時に伏せた。元の記述に戻すかは hfu が決める。 -->

- man ls (press q to quit)
- exit

You are now logged in to the server. 
You are now a Unix user. 

### Power of command line interface (CLI)
> 5分（–13:35）

- Command Line Interface (CLI)
  - Opposite: Graphical User Interface (GUI)
- CLI works well with Artificial Intelligence (AI)
  - Large Language Model (LLM) to be specific
  
### The Internet seen from CLI
> 15分（–13:50）。ヘッダーの解説スライドを含む。

$ curl -I https://maps.gsi.go.jp/xyz/std/0/0/0.png
HTTP/2 200 
content-type: image/png
content-length: 77992
server: AmazonS3
date: Sat, 21 Nov 2026 06:37:17 GMT
last-modified: Sat, 01 Mar 2025 16:29:15 GMT
etag: "7186204bdc21218bf6d9dd0a39b17ef8"
x-amz-server-side-encryption: AES256
x-amz-meta-last-modified: 1583815819000
x-amz-meta-mtime: 1457603626
accept-ranges: bytes
vary: Origin
x-cache: Hit from cloudfront
via: 1.1 6b3df82b11020ffd9f07adedfc60be70.cloudfront.net (CloudFront)
x-amz-cf-pop: NRT57-P1
x-amz-cf-id: mqJ5brVg4xgbsgJ63ZOCZrKvGFUi7NBD5kCBkhIJxKf1ZTmi7YZ5aQ==
age: 18522
x-xss-protection: 1
x-content-type-options: nosniff
strict-transport-security: max-age=31536000
vary: Origin

### (Several slides to explain some headers)

### Questions on Raspberry Pi?
> 10分（–14:00）。休憩中も、止まった人の対応を続ける。

## 2. UN Open GIS Initiative
> **ブロック2: 14:15–14:45（30分）**

- Open Source Software and GSI Maps
- UN Open GIS Initiative
- Domain Working Groups (DWGs)
- How it works

### Open Source Software and GSI Maps
> 5分

- Open source has been the procurement strategy of GSI Maps since 2013
  - Optionality and interoperability
  
### Open with Official

> 3分（Claude の草稿。出典: hfu の資料 2025-06-26「Strategic Use of Geospatial Information」（UNopenGIS/qmp の docs/decks/2025-06-timor-leste.pdf）。東ティモールの研修員がいるので、本人に見られる前提で）

- From "Open or Official" to "Open with Official".
- GSI Maps: a geoportal built with 100% open source. The code is on GitHub.
- Official data and OpenStreetMap, together, in private-sector web maps.
- Through sharing, GIS people build partnerships among problem solvers. Trust comes from software, data and people.

> 確認（Claude）: 資料の見出しと項目のみを写した。数字は無い。「Open with Official」の説明は、hfu の言葉で。

### UN Open GIS Initiative
> 8分

- UN Open GIS Initiative has been initiated to support UN peacekeeping missions since 2016
- Hidenori joined UN Geospatial Information Section from 2017 to 2019. 
  - UN Open GIS Initiative + UN Maps = UN Vector Tile Toolkit (2018-)
  
### UNVT Portable

> 2〜3分（Claude の案。ブロック2、Initiative の成り立ちの直後。軽く入れる）。教室のラズパイが、なぜここにあるかの説明になる。明日の松澤さんの回への橋にもなる。

- UN Vector Tile Toolkit (UNVT) has a portable form: a small server for web maps, first made on a Raspberry Pi.
- Smart Maps Portable (2024): Raspberry Pi 4B, a battery, a 2 TB SSD and a GNSS antenna. It ran 18 hours without external power, and served more than 25 clients over Wi-Fi.
- The Raspberry Pi in this room is a descendant. "niroku" is a new implementation of UNVT Portable, for this JICA course.
- Tomorrow, you will use it to make tiled maps.

> 確認（Claude）: 2024年の資料（jica-2411）の記述（18時間、25台以上）は、hfu 自身の資料のまま。niroku の説明は、unvt/niroku のリポジトリの説明（"A new implementation of UNVT Portable"、2025-10-13 作成）による。「明日、タイル地図を作る」は、松澤さんの教材の記述（正本）による。UNVT Portable の最初の実装がいつか、公開の記録からは確認できていない。

### UN Open GIS Initiative: current co-chairs
> 3分

- Ariel Anthieni, OSGeo Foundation
- Hidenori Fujimura, Geospatial Information Authority of Japan
- Josep Parareda, United Nations Geospatial Information Section
  
### Domain Working Groups (DWGs)
> 5分

- DWG1: Hybrid GIS Infrastructure (inactive)
- DWG2: Capacity Building (inactive)
- DWG5: Geo-AI
- DWG6: OpenDroneMap
- DWG7: Smart Maps
- DWG8: IGIF implementation

### JICA and the Initiative: Quick Mapping Project

> 4分（Claude の草稿。ブロック2の最後、「How it works」の前。聴衆が JICA の研修員なので、外せないと思う。時間は、他の項目から割く）

- Quick Mapping Project (QMP): a JICA co-creation, innovation and circulation initiative, powered by UN Smart Maps.
- Quick Mapping: make maps quickly, and make them usable at once, for the users' needs. It builds on OpenStreetMap.
- Its idea: "It's easy to be brave enough to map."
- 2025-07-09, "Q Day" at JICA headquarters: hybrid, one topic every 30 minutes, the rest is free mapping and discussion.
- The Laos work (next block) is part of QMP.

> 確認（Claude）: UNopenGIS/qmp の docs（英語）、q20250709 の README による。Q Day の内容は「ドラフト、生成 AI が作成した情報を含む」と書かれている。QMP の成果（地図の量、参加者数）は、読んだ範囲に無い。数字は使わない。2025年6月の東ティモール向けの資料でも、QMP を最近の活動として紹介している。

### How it works

> 5分（Claude の草稿。dwg7/guide の「dwg7 in 5 Minutes」「Field Guide」による。書き換えてください）

- Everything happens in public issues: github.com/UNopenGIS/7
- A thread follows one pattern:
  - question → experiment → result with conditions → review and correction → reuse
- Weekly meetup: Tuesday 12:30–12:55 JST (25 minutes), online
  - Presenters post a written update before the meeting.
- Monthly meeting (VTC): the schedule is open (github.com/UNopenGIS/roadmap)
- Anyone can read, comment and repeat an experiment.

> 確認（Claude）: 週次の時間と「公開の記録が一次の記録」は dwg7 guide（2026-11-11 確認、guide 自身が記録）による。月次の VTC は roadmap の README による。

## 3. Smart Maps (dwg7) activities
> **ブロック3: 14:45–15:15（30分）、休憩、15:30–16:30（60分）**
> dwg7 の紹介 8分（以下4項目）

- DWG7: Smart Maps
  - A group for individual developers
  - Web maps for smart decisions
  - Vision: keep web maps open.
  - Mission: test new technologies. 
- Rule: share projects or topics under gh:unopengis or gh:dwg7. 

### dwg7 and AI

> 3分（ブロック3の dwg7 紹介の中。「Recent projects」の直前）。Claude の案。置き場所の理由: 最初の事例（bvmap-koicha）に入る前に、「道具としての AI」を軽く置いておくと、各事例の中の AI の話が自然に見える。第1ブロックの「CLI は AI とよく合う」とは、重ならないよう、こちらは「仲間として扱ってきた」歴史と、人が決めること、に絞る。

- Since 2023, dwg7 has treated AI as one of the members.
  - The dwg7 web page invites "LLM users, and even LLMs".
  - The JICA Quick Mapping Project took it as a first principle: "We co-create with generative AI."
- Today, AI writes part of our code and records.
  - Many of the projects you will see were made with AI.
- People decide. AI cannot see the site.

> 確認（Claude）: 公式サイトの記述（"large language model (LLM) users, and even LLMs"）は確認済み。2023年の例: yuiseki さんの TRIDENT（#141、2023-05-03）、「Raspberry Pi 上でも LLM は動く」（#208、2023-07-08）。yuiseki さんの2024年2月の発言「近い将来、十分に高度な AI を仲間として迎える備えが要る」（原文: *In the near future, we need to be prepared to welcome sufficiently advanced AI as our companions.*）が、UNopenGIS/qmp の docs/en/concepts.md に引用されている（確認済み）。スライドに引用するなら、この出典を明記する。

### Recent projects
> 1件 約11分。前半（休憩前）は2件、後半は4件。

> **概観のスライド（1分）。** 聴衆が、これから見る9件の全体を先に持てるように、3つに分ける。免責は、ここで1回だけ言う: 「これらは dwg7 の活動で、どの組織の公式な製品でもない」。各プロジェクトのスライドの下には、出典の表記だけを残す。

- **Starting from a need:** Laos (Vientiane), FERSPAS (FAO)
- **Data:** bvmap-koicha (GSI tiles), snow-hokkaido (satellite), waterloo (drone imagery)
- **Flying and seeing:** dji-waypoints-hitl, dorayaki, ortho-earth
- **My next challenge:** AX (Asahikawa)

> 並び: ラオス → FERSPAS（どちらも「使われ方・必要から始める」）→ bvmap-koicha → snow-hokkaido → waterloo → dji（ドローンの流れ）→ dorayaki → ortho-earth（見て分かる）→ AX。

> 順序の考え方（Claude の案、書き換えてください）:
> 聴衆の世界（国の測量成果）から始め、新しいデータ（衛星、ドローン）、集め方（人が責任を持つ）、見せ方（3D）、世界の見え方（面積が正しい地図）へ進む。
> 1. bvmap-koicha — 今朝の GSI Maps の延長。聴衆に一番近い。第1部の curl の例（maps.gsi.go.jp）とつながる。
> 2. snow-hokkaido — 無料の衛星写真で、毎日の雪を記録。「雲で見えない」不完全さを、そのまま記録に残す。
> 3. waterloo — 5 cm のドローン画像が、無料で公開されている（シエラレオネ）。試した結果を、事実として書く姿勢。
> 4. dji-waypoints-hitl — ドローン撮影。AI は計画を作るが、飛ばすか止めるかは人が決める。責任の境界。
> 5. dorayaki — 点群から作った3Dを、普通の地図タイルで配る。見て分かる。
> 6. ortho-earth — 世界地図で、国が正しい大きさに見える（Equal Earth）。最後の印象。
>
> 各項目は、必要 → 試したこと → 分かったこと → まだ分からないこと、の型。「まだ分からないこと」に *Imperfection is the natural state. That is why we combine efforts.* を置く場所がある。

#### Laos: Vientiane (QMP, height-coverage, zukaku)

> 12分（4枚）。Claude の草稿。**結果と学びは、hfu が書く。** 11/20 の現地作業の結果は、私は知らないので、空欄にしてある。ラオスの研修員に、検証やコメントを求めない。

- Need: a detailed map for the Chanthabury district detailed plan, around the Chao Anouvong Stadium in Vientiane.
  - The mapping supports pedestrian-first planning, universal design and public-space quality.
  - It goes with Japan's cooperation, including the stadium reconstruction, and the planning capacity of local government.
- We opened a HOT Tasking Manager project (44787) for the area, in March 2026, as part of the JICA Quick Mapping Challenge.
- Which imagery? Bing is newer but coarser. Esri World Imagery is older but sharper.
  - In one place, a World Bank building was finished in Bing and still under construction in Esri. Imagery has a date.
- Finding: in the area, almost no building has a height or a number of floors in OpenStreetMap (height-coverage: 12 of 3,654 buildings, seen on 2026-11-21).
- Idea: count the floors by eye, and enter them. Printed paper maps (zukaku) for the field. Zoning on a base map (vientiane-planning-map).
- 20 November, in the field: [hfu が書く: 何を、何人で、どこまで。写真2枚は `assets/laos-field-1.jpg`、`laos-field-2.jpg`]
- Not yet known: [hfu が書く]

> スライド案: ① 必要（スタジアム周辺、歩行者優先） ② 背景画像の比較（Bing と Esri。日付の違い） ③ 画面: `assets/screens/height-coverage-vientiane.jpg`（0% の画面）と、zukaku ④ 現地の写真2枚（顔なし）と、結果（hfu が書く）
>
> 確認（Claude）: UNopenGIS/7 の #873（2026-03-04 以降のコメント）、dwg7/height-coverage、dwg7/vientiane-planning-map、dwg7/zukaku による。「階数を目視で数える」仮説は、#988 の hfu の記述。Bing と Esri の比較は mapconcierge さんのコメント。建物の数（12 / 3,654）は、撮影した画面の値で、日々変わる。

#### dwg7/ferspas-html-demo (with FAO)

> 9分（3枚）。Claude の草稿。「うまくいかなかった話」と「使われ方から始める」の両方になる。

- Need: FAO publishes remote sensing data and analysis notebooks (FERSPAS). Public officials who cannot set up a programming environment cannot use them.
- First try: fit our own architecture onto FERSPAS. We paused it on 18 September 2026.
  - After reading FERSPAS's own user stories, I saw that we had fitted our architecture onto FERSPAS, instead of starting from how FERSPAS is used.
- Second try: move the tasks that are already stable in the notebooks to transparent web pages, which run in a browser.
  - Examples: an agricultural stress index (Italy), drained cropland over 31 years (Bangladesh), a water balance over 47 years.
- "Explore in the experts' environment. Share stable tasks on the web."
- Not yet known: whether other tasks and other users follow. The work is closed for now, and may reopen.

> スライド案: ① 必要と、最初の試み（中断の理由） ② 画面（`dwg7.unopengis.org/ferspas-html-demo/` のケース。**未撮影**。撮るなら私が） ③ 「専門家の環境で探る。安定したものを Web で共有する」とまだ分からないこと
>
> 確認（Claude）: UNopenGIS/7 の #1006（2026-09-18、FAO 側2名、yuiseki さん、hfu の4名の打合せ）、#1011、dwg7/ferspas57 の README による。FAO の方々の氏名は出さない。FAO のノートブックの引用は、出典（un-fao/FERSPAS_demo）を明記する。連携の名目（組織間か、作業部会間か）は、先方が柔軟だと書かれているが、スライドでは「FAO と連携」と書くか、hfu が判断する。

#### dwg7/bvmap-koicha
> 11分（14:45 + 8 = 14:53–15:04）

- GSI publishes vector tiles of Japan (bvmap).
- At a wider view, they hold few buildings. The tile size is limited.
- bvmap-koicha uses the same GSI data and shows the buildings of a closer view at a wider view.
  - Tokyo, zoom 15: about 20 times more buildings than the original.
  - It uses a new tile format, MapLibre Tile (MLT).
- It is a dwg7 activity. It is not an official GSI product.
- Not yet known: a nationwide version. Now only Tokyo and Hokkaido.

> スライド案（3枚）: ① 何か（3行） ② 画面: `assets/screens/bvmap-koicha-tokyo.jpg`（左が元、右が濃茶。建物の量の違い） ③ まだ分からないこと

> 確認（Claude）: README の数字（約4,800棟→約95,000棟、約20倍）は、README の記述のまま。独立に検証していない。「koicha」は濃茶（抹茶を少ない湯で濃く点てる）の由来。https://dwg7.unopengis.org/bvmap-koicha/

#### dwg7/snow-hokkaido
> 11分（15:04–15:15）。ここで休憩。

- Question: how is snow covering Hokkaido, every day?
- We read free satellite images (Sentinel-2) and keep a daily record of snow, cloud and green, by municipality.
- Clouds hide the ground. So each cell keeps its last known state, and how many days ago it was seen.
  - A photo is taken about once a day. A usable one comes about every 2.4 days on average.
- It is a prototype. Records start in August 2024.
- Not yet known: how to publish it automatically (now manual).

> スライド案（3枚）: ① 問い（毎日の雪を、衛星写真で） ② 画面: `snow-hokkaido-map.jpg` ③ 画面: `snow-hokkaido-freshness.jpg`（「情報の新しさ」。雲で見えない所は、最後に見えた日からの日数で記録する）

> 確認（Claude）: 数字（約24時間、平均2.4日、2024年8月から）は README のまま。README 内に、市町村数が 168 と 179 で食い違う箇所がある。スライドでは数えない。https://dwg7.unopengis.org/snow-hokkaido/

#### dwg7/waterloo
> 11分（15:30–15:41）

- Waterloo, Sierra Leone: a drone image with about 5 cm pixels.
- It is shared by HOT on OpenAerialMap, under an open license (CC BY-SA 4.0).
- We opened it as PMTiles (a whole map in one file) in a web map, with Overture Maps buildings (open building data).
- We also wrote down what happened when we tried the new OpenAerialMap PMTiles feature. The notes are facts from someone who tried, not criticism.
- It is a dwg7 activity. It is not an OpenAerialMap or HOT project.
- Not yet known: whether this works the same for the images of your country.

> スライド案（3枚）: ① 何か ② 画面: `waterloo-overview.jpg`（画像と建物） ③ 画面: `waterloo-close.jpg`（近づいた所）と、まだ分からないこと。帰属表示は画面の下に出る

> 確認（Claude）: 撮影期間 2026-02-07〜06-03、機体 DJI Mini 5 Pro、OAM 追加 2026-09-19 は README の表のまま。#1019、#1023 が背景。シエラレオネの研修員がいる。話す前に、本人への配慮を。https://dwg7.github.io/waterloo/

#### yuiseki/dji-waypoints-hitl
> 11分（15:41–15:52）

- A drone, a human and an AI agent, each with a role.
  1. A human walks the site and flies by hand, and saves the safe area.
  2. The AI agent makes a zigzag flight plan inside the safe area.
  3. The human watches the drone and flies the plan semi-automatically.
- The human decides whether to fly, checks the laws and procedures, and stops the flight. The agent cannot see the site.
- hfu's own test (#1021): a rented DJI Mini 4 Pro, one night; the river office was consulted first; 5 datasets became orthophotos.
- Not yet known: other places, other rules. The law and the procedure differ by place.

> スライド案（2枚）: ① 3つの役割（人、AI、ドローン）の図。作図 ② 誰が決めるか（人が決めること、AI ができること）。画面は `dji-waypoints-hitl-github.jpg` があるが、視覚の効果は弱い。hfu の #1021 の画像を使う案もある（本人確認が要る）

> 確認（Claude）: 作者は yuiseki さん。ツールの README は「実機 RC 2 での読み書きは未確認」と書き、#1021 では別実装で成功したと報告している。スライドでは、手順と責任の分担だけにとどめ、成功の数字は使わない（#1021 の 382枚、7,700円などは、話すなら hfu の言葉で）。 https://github.com/yuiseki/dji-waypoints-hitl

#### dwg7/dorayaki
> 11分（15:52–16:03）

- A map tile holds one height per place. It cannot hold a bridge and the road under it.
- Dorayaki keeps the usual tile address (z/x/y) and puts 3D points (Gaussian splats: points drawn as soft dots) inside each tile.
- A real example: the Kawazu loop bridge and the valley below it, from about 476 million points, became one 83 MB file. You can see it from above and from below in a browser.
- I started by following a method that Kenji Yoshida showed me (#1030).
- It is an experiment, not a standard.
- Not yet known: how it works on a wide area and on small PCs.

> スライド案（3枚）: ① 地図タイルは、1つの場所に高さ1つしか持てない。橋と下の道路は入らない（作図） ② 画面: `dorayaki-kawazu.jpg`（川津ループ橋と谷。上からも下からも見える。ライブで見せる案も） ③ 数字とまだ分からないこと

> 確認（Claude）: 数字（476 million points、83 MB）は README のまま。「Kenji Yoshida さんの方法の模倣から始めた」は #1031 の hfu のコメントの内容。https://dwg7.unopengis.org/dorayaki/

#### kenjiyoshidahome2026-bit/ortho-earth
> 11分（16:03–16:14）

- A 3D globe map engine that runs in the browser. No server, no account.
- The flat world map is Equal Earth: countries are shown at their true relative size.
- Code written for MapLibre also runs on it.
- One use: choose an area, load it first, then use it without a network.
- It is the work of Kenji Yoshida. He also presents it in the dwg7 weekly meeting.
- Not yet known: how it runs on older laptops (it uses the GPU).

> スライド案（3枚）: ① 画面: `ortho-earth-top.jpg`（Equal to all, fair to the Earth） ② 画面: `ortho-earth-equal.jpg`（国が正しい大きさに見える世界地図） ③ 先に読み込めば、通信なしで使える。まだ分からないこと。**吉田さんの了解を取ってから**

> 確認（Claude）: README の記述のまま（GPL-3.0）。「先に読み込めば通信なしで使える」は #1031 の吉田さんのコメント。紹介の許可を本人に取ること。 https://www.ortho-earth.com/

### AX: Asahikawa eXperiment (my next challenge)

> 2分（2枚＋図1枚）。**本文は、AX セッション（hfu の別セッション）が書いた英文の草稿（hfu の確認前）。** 置き場所は、締めの直前。押していれば1枚で閉じる（Slide A の問いと方法を3行にして、Slide B の画像を右に置く案）。AX の内部文書（miso）は使わない。
> hfu が確認する点: ① 1月の北海道測量技術講演会の予告編として位置づけてよいか ② "dwg7" の名を出すか（現在の文面は出していない） ③ 発起者の氏名（Hidenori Fujimura (hfu)）を出してよいか。

#### Slide A: the challenge

**AX — Asahikawa eXperiment: a challenge I am starting**

- Question: How can wide-area observation and open data reach the problems of one local community, at a scale people can use?
- Method: start from what already exists locally (public data, local skills, ongoing work). Build a prototype strong enough to show. Take it there. Record every response: support, correction, objection, silence.
- Time-boxed: the external effort stops at the end of the fiscal year. Whatever is useful can be reused or imitated by anyone. Nothing forces it to continue.
- Principle: "Absence is information." We do not fill gaps with invented data.

*Footer: An experiment by Hidenori Fujimura (hfu). Not an official project of GSI or the City of Asahikawa. Does not imply participation or endorsement by any organization.*

#### Slide B: first step

**First step: where are the snow-removal routes?**

- Input: the urban snow-removal route network, published as open data by the City of Asahikawa (source only; no partnership implied).
- Done: source, terms of use and coordinate system recorded; reprojected (JGD2011 / Plane Rectangular zone XII → WGS84); displayed at the correct position; terrain (GSI elevation) added.
- Evidence boundary: this is a route network, NOT the actual plowing status. Snow extent is not snow depth. A rendering is not an observation.
- Open question: whose problem in Asahikawa can this connect to?

*Image: `docs/snow-asahikawa/screenshot-002-terrain.jpg` in the AX repository（**未入手**。AX 側から受け取る）。Basemap: bvmap-koicha, a dwg7 activity, not an official GSI product; GSI optimized vector tiles and elevation tiles. City data: CC BY 2.1 JP, attribution required.*

#### Figure

`[Wide-area observation / open data]  →  [Local, large-scale map]  →  [Whose problem? (to be learned on site)]`
Under the arrows: "built from what exists" | "shown, then broken by local people" | "stop, hand over, or disappear: all are results"
Caption: "Make it strong enough to reach. Strike it and see whether it resonates."

> 確認（Claude）: 上の英文は、AX セッションのメッセージをそのまま写した（2026-11-21）。「成果はまだない。地域に響いたかどうかは未観測」と、AX 側が明記している。市のデータの再配布条件は、このレイヤー固有では未確認（AX 側）。hfu/ax は private で、main には未 push（作業は worktree のブランチ）。

### Closing

> 8分（16:14–16:22）。**未記入。** 次の材料がある: 実習のつなぎ戻し（「皆さんは、誰かが用意した機械に、自分で入った」）、References（unopengis.org、dwg7.unopengis.org、dwg7.unopengis.org/guide）、*Imperfection is the natural state. That is why we combine efforts.* の置き場所。

### Questions and discussion

> 8分（16:22–16:30）。**未記入。**
