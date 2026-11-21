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
  
### UN Open GIS Initiative
> 8分

- UN Open GIS Initiative has been initiated to support UN peacekeeping missions since 2016
- Hidenori joined UN Geospatial Information Section from 2017 to 2019. 
  - UN Open GIS Initiative + UN Maps = UN Vector Tile Toolkit (2018-)
  
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

## 3. Smart Maps (dwg7) activities
> **ブロック3: 14:45–15:15（30分）、休憩、15:30–16:30（60分）**
> dwg7 の紹介 8分（以下4項目）

- DWG7: Smart Maps
  - A group for individual developers
  - Web maps for smart decisions
  - Vision: keep web maps open.
  - Mission: test new technologies. 
- Rule: share projects or topics under gh:unopengis or gh:dwg7. 

### Recent projects
> 1件 約11分。前半（休憩前）は2件、後半は4件。

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

#### dwg7/bvmap-koicha
> 11分（14:45 + 8 = 14:53–15:04）

- GSI publishes vector tiles of Japan (bvmap).
- At a wider view, they hold few buildings. The tile size is limited.
- bvmap-koicha uses the same GSI data and shows the buildings of a closer view at a wider view.
  - Tokyo, zoom 15: about 20 times more buildings than the original.
  - It uses a new tile format, MapLibre Tile (MLT).
- It is a dwg7 activity. It is not an official GSI product.
- Not yet known: a nationwide version. Now only Tokyo and Hokkaido.

> 確認（Claude）: README の数字（約4,800棟→約95,000棟、約20倍）は、README の記述のまま。独立に検証していない。「koicha」は濃茶（抹茶を少ない湯で濃く点てる）の由来。https://dwg7.unopengis.org/bvmap-koicha/

#### dwg7/snow-hokkaido
> 11分（15:04–15:15）。ここで休憩。

- Question: how is snow covering Hokkaido, every day?
- We read free satellite images (Sentinel-2) and keep a daily record of snow, cloud and green, by municipality.
- Clouds hide the ground. So each cell keeps its last known state, and how many days ago it was seen.
  - A photo is taken about once a day. A usable one comes about every 2.4 days on average.
- It is a prototype. Records start in August 2024.
- Not yet known: how to publish it automatically (now manual).

> 確認（Claude）: 数字（約24時間、平均2.4日、2024年8月から）は README のまま。README 内に、市町村数が 168 と 179 で食い違う箇所がある。スライドでは数えない。https://dwg7.unopengis.org/snow-hokkaido/

#### dwg7/waterloo
> 11分（15:30–15:41）

- Waterloo, Sierra Leone: a drone image with about 5 cm pixels.
- It is shared by HOT on OpenAerialMap, under an open license (CC BY-SA 4.0).
- We opened it as PMTiles in a web map, with Overture Maps buildings.
- We also wrote down what happened when we tried the new OpenAerialMap PMTiles feature. The notes are facts from someone who tried, not criticism.
- It is a dwg7 activity. It is not an OpenAerialMap or HOT project.
- Not yet known: whether this works the same for the images of your country.

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

> 確認（Claude）: 作者は yuiseki さん。ツールの README は「実機 RC 2 での読み書きは未確認」と書き、#1021 では別実装で成功したと報告している。スライドでは、手順と責任の分担だけにとどめ、成功の数字は使わない（#1021 の 382枚、7,700円などは、話すなら hfu の言葉で）。 https://github.com/yuiseki/dji-waypoints-hitl

#### dwg7/dorayaki
> 11分（15:52–16:03）

- A map tile holds one height per place. It cannot hold a bridge and the road under it.
- Dorayaki keeps the usual tile address (z/x/y) and puts 3D points (Gaussian splats) inside each tile.
- A real example: the Kawazu loop bridge and the valley below it, from about 476 million points, became one 83 MB file. You can see it from above and from below in a browser.
- I started by following a method that Kenji Yoshida showed me (#1030).
- It is an experiment, not a standard.
- Not yet known: how it works on a wide area and on small PCs.

> 確認（Claude）: 数字（476 million points、83 MB）は README のまま。「Kenji Yoshida さんの方法の模倣から始めた」は #1031 の hfu のコメントの内容。https://dwg7.unopengis.org/dorayaki/

#### kenjiyoshidahome2026-bit/ortho-earth
> 11分（16:03–16:14）

- A 3D globe map engine that runs in the browser. No server, no account.
- The flat world map is Equal Earth: countries are shown at their true relative size.
- Code written for MapLibre also runs on it.
- One use: choose an area, load it first, then use it without a network.
- It is the work of Kenji Yoshida. He also presents it in the dwg7 weekly meeting.
- Not yet known: how it runs on older laptops (it uses the GPU).

> 確認（Claude）: README の記述のまま（GPL-3.0）。「先に読み込めば通信なしで使える」は #1031 の吉田さんのコメント。紹介の許可を本人に取ること。 https://www.ortho-earth.com/

### Closing

> 8分（16:14–16:22）。**未記入。** 次の材料がある: 実習のつなぎ戻し（「皆さんは、誰かが用意した機械に、自分で入った」）、References（unopengis.org、dwg7.unopengis.org、dwg7.unopengis.org/guide）、*Imperfection is the natural state. That is why we combine efforts.* の置き場所。

### Questions and discussion

> 8分（16:22–16:30）。**未記入。**
