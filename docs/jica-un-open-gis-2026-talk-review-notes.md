# トークのマークダウンの照合メモ（2026-11-21、Claude）

照合先: dwg7/guide（2026-11-11 時点の記録）、dwg7/cafebabe（DWG7-CONTEXT、2026-09-02 時点）、UNopenGIS/roadmap の README、unopengis.org、UNopenGIS/jica-2411（2024年の同じ枠）。
凡例: ✔ 確認できた / △ 一部、または食い違いの可能性 / ？ 確認できていない（hfu の申告のまま）

## 第2ブロック（Initiative）

| 項目 | 結果 | 根拠・メモ |
|---|---|---|
| Initiative は2016年から、平和維持活動を支える目的 | ✔（hfu 自身の2024年資料と一致） | jica-2411: 「2016、Partnership for Technology in Peacekeeping initiative。運用支援局（DOS）と ICT 局（OICT）が主催」。UNopenGIS の公式ページのリポジトリ作成: 2016-08-30 |
| Hidenori が国連地理空間情報部に 2017–2019 | △ | jica-2411 には「国連地理空間情報部（2年）」とある。年は書かれていない |
| UNVT（UN Vector Tile Toolkit）2018– | ？ | `unvt` 組織の作成は 2019-10-16。2018年の根拠は、公開の記録から確認できていない |
| 地理院地図で、オープンソースは2013年からの調達戦略 | ？ | 公開の記録から確認できていない（hfu の申告） |
| 共同議長: Ariel Anthieni、Hidenori Fujimura、Josep Parareda | ✔（氏名） | UNopenGIS/roadmap の README: 「Ariel、Hidenori、Josep が、UN Open GIS Initiative の共同議長」。所属（OSGeo Foundation、国土地理院、国連地理空間情報部）は未確認 |
| DWG の一覧（DWG1、2、5、6、7、8、inactive の表記） | △ | UNopenGIS に、DWG6、DWG7（`7`）、DWG8 のリポジトリがある。DWG1、2、5 のリポジトリは見つからなかった。jica-2411 の一覧には、DWG1、2、5、6、7 があり、DWG8 はない（DWG8 の作成は 2025-11-17）。inactive の状態は未確認 |
| How it works（新規の草稿） | ✔ | dwg7/guide: 公開の issue が一次の記録、方法の流れ、週次の時間。roadmap: 月次の予定 |

## 第3ブロック（dwg7）

| 項目 | 結果 | 根拠・メモ |
|---|---|---|
| DWG7 は個人開発者の集まり | ✔ | guide: 「one-person developers の集団、と返信が述べている」（個人の言い方、と guide 自身が断っている）。cafebabe: 個人単位の多中心的協調 |
| vision: keep web maps open / mission: test new technologies | ✔ | unopengis.org/DWG7.html（"keep web maps open"、"test new technologies for future geospatial operations"） |
| Rule: gh:unopengis か gh:dwg7 に共有 | △ | guide: 一次の記録は UNopenGIS/7 の issue。cafebabe: 実装のリポジトリは dwg7 組織に置く。「どちらに書くか」の使い分けは、スライドで簡単に言えるが、現状の運用は、issue（UNopenGIS/7）に記録、実装は dwg7 |
| 共同議長の人数（dwg7 側） | △ | cafebabe の文脈資料（2026-09-02）は、dwg7 の共同議長制として「hfu、Ariel、Josep、Timur」と書く。roadmap は、Initiative の共同議長を3人としている。スライドは、roadmap の3人にしている |
| AI（新規の草稿） | ✔ | unopengis.org/DWG7.html に "large language model (LLM) users, and even LLMs"。#141（2023-05-03 yuiseki）、#208（2023-07-08） |

## 第1ブロック（実習）

| 項目 | 結果 | 根拠・メモ |
|---|---|---|
| Raspberry Pi 4B は「$100 ほど」 | △ | jica-2411 は「From 35 US$」。今回は「$100」。周辺機器を含めた値か、確認 |
| 「この部屋の戸棚にある」 | ？ | 運用記録: フリートは研修会場の LAN に常設。部屋の中の位置は未確認 |
| Wi-Fi は 5GHz のみ | ✔（運用調査 2026-11-20） | 5GHz に対応しない PC があると、接続できない。スライドの注に入れておく |
| 研修機のポート | ✔（2026-11-21 に確認） | 全11台: 22 と 80 が開いている。80 は Caddy が 404 を返す |
| IP とホスト名の表 | ✔ | 運用調査（2026-11-20）と一致 |
| curl の例（maps.gsi.go.jp） | ✔ | 2026-11-21 の出力の貼り付け。研修機から実行して通るかは未確認（踏み台からは、OSM の同種の例が通った） |
| 共有 SSH パスワード | — | リポジトリに書かない決まり。スライドでは「教室で伝える」とした |

## 気づいたこと

- cafebabe の作法（「高密度・低圧」、「確からしさを散文に溶かさない」）は、このマークダウンの書き方と合っている。
- 2024年の資料にあった、「開発途上国には、まだあまり届いていない」という正直な記述は、今回のマークダウンにはない。使うかは hfu の判断。
