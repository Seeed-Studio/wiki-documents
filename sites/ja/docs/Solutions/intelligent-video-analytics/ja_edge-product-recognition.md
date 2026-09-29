---
description: エッジ商品認識の構築、導入方法、実測データと実装詳細
title: 'エッジ商品認識：構築・導入・実測結果'
keywords:
  - edge product recognition
  - checkout product recognition without barcode
  - shelf audit empty slot detection
  - SKU registration without retraining
  - FAISS product gallery
  - image retrieval embedding ArcFace
  - YOLOX single class detector
  - DINOv2 embedding INT8
  - RKNN fp16 parity
  - Hailo-8 HEF
  - MQTT
  - RK3588
  - reComputer R2000 series
image: https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/shelf-ok-9b435de4.png
slug: /solutions/edge-product-recognition
sidebar_position: 6
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-09-23'
url: https://wiki.seeedstudio.com/ja/solutions/edge-product-recognition/
generated_from: sensecraft-solutions@cbbfa60
---

:::caution[最初にお読みください]
パッケージ版（cbbfa60）の上流では、検出、埋め込み、gallery 検索、MQTT 送信を 1 つのデバイス側サービスにまとめる処理がまだなく、エンドツーエンドの計数精度、棚スロット精度、連続稼働のデータはありません。認識結果は法定計量ではなく、価格計算や法的な数量の根拠には使えません。
:::

## このソリューションでできること

カメラでレジのベルトまたは棚の正面を撮影します。フレーム内の各商品を枠で囲んで切り出し、512 次元ベクトルに変換して、登録済み SKU の gallery で検索します。レジ側ではバスケット（SKU→数量。track id で集計し、カメラの前を通った商品は 1 回だけ数えます）、棚側ではスロット状態（ok、empty、wrong_sku、unknown。planogram の位置ごとに集計）を出力します。結果はフレームごとに 1 件の MQTT メッセージで送ります。

店舗で新商品を追加しても再学習は不要です。新しい SKU を 3～8 枚撮影してコンソールに送ると、gallery に新しい不変バージョンが作られます。検出器は単一クラスで「ここに商品がある」とだけ答えるため個々の商品を学習せず、埋め込みモデルも更新しません。

- 選択と導入：[参考設計ページ](https://www.seeed.co.jp/solutions/reference-designs/edge_retail_recognition)
- 上流リポジトリ：未公開です。パッケージに `intro.links.github` はなく、パッケージ作成時点でコードは社内リポジトリにあります。

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-content">
                <h3>SKU の追加は写真 3～8 枚、再学習なし</h3>
                <p>登録すると gallery の新しい不変バージョンが作られます。登録画像を 1 枚から 8 枚に増やすと top-1 が 28 ポイント上がります（性能と実測データを参照）。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-content">
                <h3>検出は NPU で実行</h3>
                <p>RK3588 の RKNN fp16 は CPU 参照とのボックス一致率 99.85%、p50 56.7 ms。Hailo-8 の INT8 HEF は p50 9.04 ms、一致率 94.77% です。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-content">
                <h3>自社のカメラと店舗システムをそのまま接続</h3>
                <p>任意の RTSP / USB カメラを使えます。POS は MQTT から SKU→数量を読み、補充システムは欠品と誤配置のスロットを読みます。HTTP API でイベント照会と gallery 管理ができます。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-content">
                <h3>データは現場の外に出ません</h3>
                <p>カメラ、認識ホスト、コンソールホストはすべてローカルにあり、broker もコンソールのコンテナで動きます。同梱の broker は匿名・平文のため、本番前にアカウントと TLS を設定してください。</p>
            </div>
        </li>
    </ul>
</div>

### コンソールの画面

上流パッケージには管理 UI のスクリーンショットが 4 枚あります：イベント一覧、イベントのボックス別詳細、商品 gallery、レジ・棚ボードです。4 枚とも上流の `web_demo` ツールで合成フィクスチャから生成したもので、SKU、類似度、イベントはテストデータです。画面構成だけを示しています。

### 3 つの棚状態

棚判定は reComputer RK3588 シリーズと reComputer R2000 シリーズ + Hailo-8 で実測しています。ボードは各スロットに 3 つの状態のいずれかを表示します：正しく陳列、欠品、誤配置。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/shelf-ok-9b435de4.png" alt="すべての slot が gallery と一致し correct と表示された棚ボード"/>
</div>

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/shelf-empty-e969556c.png" alt="同じ棚から 1 商品を取り除き、その slot が empty になった状態"/>
</div>

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/shelf-wrong-sku-27b3ca7e.png" alt="slot に属さない商品。実際に一致した SKU とともに wrong SKU と表示"/>
</div>

3 つの状態が順に切り替わる様子：

<div align="center">
  <img class='img-responsive' src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/shelf-states-c62596bb.gif" alt="同じ棚が correct、empty、wrong-SKU 状態を順に遷移"/>
</div>

レジ側のチェーンは商品ごとの軌跡を出力します：

<div align="center">
  <img class='img-responsive' src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/checkout-tracks-9c544983.gif" alt="レジ画面の商品 track と商品ごとの認識"/>
</div>

これらの画面は `edge-retail-recognition/evaluation/runs/2026-09-07-runtime-*` の 2 回の実機実行によるもので、商品はプロジェクトで購入した実物です。データセット由来の画像ではありません。

## 必要な機器

各拠点に必要なのは、カメラ、認識ホスト、コンソールホスト、x86_64 の変換用マシン（モデルごとに 1 回使用）の 4 つです。

**① カメラ** — レジの上方または棚の正面に設置する任意の RTSP / USB カメラで、カメラ上では何も動かしません。入力サイズは成果物にコンパイルされます：レジは 640²、棚は 1280² です。

**② 認識ホスト** — 3 つのプリセットの違いはここです：

| | ホスト | このハードウェアで測定した内容 | 選択する場面 |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-recomputer-industrail-r2000.jpg" alt="reComputer Industrial R2035-12" width="110" /> | [reComputer Industrial R2035-12（Hailo-8、26 TOPS）](https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html)<br/>検出器は NPU、埋め込みは 4 つの A76 コア | 両段階：検出 9.04 ms、crop あたりの埋め込み 91.95 ms | 検出と埋め込みの両方に実測データが必要な場合 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26_.png" alt="reComputer RK3588-30" width="110" /> | [reComputer RK3588-30](https://www.seeedstudio.com/reComputer-RK3588-30-p-6817.html)<br/>検出器は Rockchip NPU、埋め込みは CPU | 検出器のみ、reComputer RK3588 シリーズで測定：ボックス一致 99.85%、56.7 ms | すでに Rockchip ボードを運用している場合。RK3576 は同じツールチェーンです |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J4012 (Orin NX 16GB)](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)<br/>TensorRT 経路 | レジのリプレイ | すでに Jetson を運用している場合 |

遅延はいずれもその行のハードウェアで測定した単一段階の値です。

**③ コンソールホスト** — Docker が動く自社の amd64 または arm64 Linux マシンで、GPU は不要です。すべての認識デバイスからアクセスできる必要があります。登録・照会サービス、管理 UI、MQTT broker の 3 つのコンテナを動かします。**2 つのコンテナイメージはこのホスト上で上流リポジトリからビルドします。** レジストリからは取得しません。

**④ x86_64 の変換用マシン** — rknn-toolkit2 も Hailo Dataflow Compiler もターゲットボード上では動きません。変換はモデルごとに 1 回だけで、導入のたびに行う必要はありません。

## 現場での導入方法

先に成果物とカメラ位置を決め、その後ソフトウェアを導入します。ソフトウェアはプリセットごとに 4 ステップです。

### 1. 取り付け：成果物を決めてからカメラ位置を決める

:::tip[入力サイズは変換時に決まります]
入力サイズは成果物にコンパイルされ、実行時には変更できません。640² の成果物で棚を見ると奥の商品を取りこぼします。1280² にすると SKU-110K test の小物体 mAP50-95 が 17.49 から 26.88 に上がります。レジか棚かを先に決め、商品が画面内で適切な割合を占める位置にカメラを取り付けてください。
:::

埋め込みはボックスごとに CPU 推論を 1 回行います。reComputer R2000 シリーズで実測した crop あたり 91.95 ms で計算すると、5 商品のバスケットで約 0.5 秒、棚のフレームは実測密度 157.6 ボックスで約 14 秒かかります。**棚の導入ではフレームを間引くか、スロット単位でサンプリングしてください。**

### 2. ソフトウェア、4 ステップ

デバイスごとの手順は参考設計ページにあります。ここでは流れだけを示します。3 つのプリセットとも同じ 4 ステップです：

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.co.jp/solutions/reference-designs/edge_retail_recognition" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>構成して導入 🖱️</font></span></strong>
    </a>
</div><br />

1. **コンソールを起動する** — 登録サービス、UI、broker はコンソールホストで動き、導入時にロール別の token 表を書き込みます。既定の token も匿名の読み取りもなく、表が空ならサービスは起動を拒否します。
2. **埋め込みモデルを配置する** — DINOv2 の ONNX をコンソールがマウントする場所に置き、`RETAIL_EMBEDDER` をプレースホルダー実装から切り替えます。上流の既定値は `fake` で、画像のバイト列をハッシュしてベクトルにします。`GET /api/health` はこれを報告しないため、登録は正常でも検索のたびに誤った SKU が返ることが唯一の症状です。
3. **SKU を登録する** — 1 SKU あたり 3～8 枚、少なくとも正面、背面、側面を 2 種類の照明で撮影します。3 枚未満は拒否され、同じ sku_id は `replace=true` を明示しない限り 409 を返します。
4. **ボード上で検出器を変換・確認する** — x86_64 ホストで変換し、成果物をボードにコピーして、CPU 参照との一貫性確認を行います。

4 ステップにはプリセットごとに約 90 分を見込み、これにコンソールホストでのコンテナビルド時間が加わります。

**埋め込みモデルがつながっていることを確認する。** 1 回の認識でイベントストリームに完全な記録が残ります：スロット、一致した SKU、類似度、ボックスごとの座標です。`fake` 実装では類似度の分布が明らかに異常になります。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/event-json-198d89fa.png" alt="1 認識イベントの全フィールド：slot、matched SKU、similarity、ボックスごとの座標"/>
</div>

<!-- TODO 画像：現場に設置した棚とカメラ — 現場撮影が必要 -->

## 利用できるインターフェース

出力はすべてコンソールホストにあります：1883 の MQTT と、8089 と 8080 の 2 つの HTTP インターフェースで、いずれもローカルネットワーク内です。broker 以外は同じ token 確認を通ります。

- **レジ / POS** は `retail/v1/events` を購読して `summary.items` を読みます。フレームの SKU→数量のマップで、ボックスごとの配列を解析する必要はありません。
- **補充・棚監査システム** は同じメッセージから `summary.empty_slots` と `summary.wrong_slots` を読みます。
- **判定の根拠をたどる必要があるシステム** は `detections[]` を読みます。各ボックスに `track_id`、正規化された `bbox`、`sku_id`、`similarity`、`top2_margin`、`ocr` ブロック、`fallback` フラグが入っています。

### topic と payload の全体

| インターフェース / ポート | 内容 | 備考 |
|---|---|---|
| MQTT `retail/v1/events`、1883 | `event_id`、`scene`、`timestamp`、`gallery.{version,sha256}`、`detections[]`、`summary.{items,empty_slots,wrong_slots}`、`models.{detector_sha256,embedder_sha256}` | フレームごとに 1 件。ボックスごとには送らない |
| HTTP `/v1/gallery/skus`、8089 | sku_id、表示名、別名、ライセンス項目、画像 3～8 枚を `POST` → 新しい不変バージョンを作成 | 同じ sku_id は `replace=true` がなければ 409 |
| HTTP `/v1/gallery`、`/v1/gallery/{version}`、`/v1/gallery/current/download`、`/v1/gallery/rollback/{version}`、8089 | バージョン一覧、バージョンごとの manifest、SHA256SUMS 付き tar.gz、切り替え前に対象の SHA を再検証するロールバック | ロールバックで新しいバージョンは作られない |
| HTTP `/api/events`、`/api/events/{id}`、`/api/summary`、8080 | シーン / SKU / デバイス / 時間で絞り込むイベント一覧、ボックスごとの詳細、ボード集計 | 読み取り専用 API、同じ token 確認 |

**`similarity` は、同じメッセージの `gallery.version`、`gallery.sha256`、モデルハッシュと合わせて読んでください。** 異なる埋め込みモデルのベクトルは比較できず、混在すると何も認識できなくなります。そのため各メッセージにこの 4 項目を含めています。

認証は `Bearer <token>` で、ロールは viewer < operator < admin です。同梱の broker は匿名・平文の設定のため、ポート 1883 にアクセスできる人は誰でも偽の認識イベントを送れます。

## 性能と実測データ

### 検出、デバイス実測

| デバイス | 成果物 | p50 / p95 | CPU 参照値とのボックス一致率 |
|---|---|---:|---:|
| reComputer R2000 シリーズ + Hailo-8 | INT8 HEF、640² | 9.04 / 9.10 ms | 94.77%（200 枚）、94.68%（300 枚） |
| reComputer RK3588 シリーズ | RKNN fp16、640² | 56.7 / 89.5 ms | 99.85% |
| reComputer RK3588 シリーズ | RKNN INT8、640² | 26.0 / 33.2 ms | 98.35% |

条件：一致率は IoU ≥ 0.5 で CPU 参照値と比較しています。Hailo の単一ストリームのスループットは 110.4 fps です（`hailortcli benchmark` で 110.64 fps、純粋なハードウェア時間 8.21 ms。差の 0.8 ms は Python vstream の往復です）。**reComputer R2000 シリーズでのエンドツーエンド（letterbox、出力の結合、デコード、NMS を含む）は p50 18.74 ms / p95 24.25 ms** です。約 160 ボックスに対する純粋な numpy のクラス別 NMS が推論そのものより時間がかかります。

再現：`evaluation/runs/2026-09-06-det-hef/`、`evaluation/runs/2026-09-06-det-rk3588-radxa/`

### 埋め込み、デバイス実測

| バリアント | クロップあたり p50 / p95 | fp32 に対する検索コスト |
|---|---:|---|
| DINOv2-small、動的量子化 INT8、4 スレッド | 91.95 / 105.98 ms | 実測した 7 段階すべてで 0.65pp 以内 |
| DINOv2-small、fp32、4 スレッド | 180.75 / 233.41 ms | 基準 |

条件：reComputer R2000 シリーズの CPU。重みだけを量子化すると検索精度はほとんど落ちず、活性化も量子化すると大きく落ちます。

再現：`evaluation/runs/2026-09-06-embed-small/` §8

### 検索と検出の精度（デバイス外）

| 構成 | 結果 | データセット |
|---|---:|---|
| DINOv2-base、SKU あたり登録画像 8 枚 | top-1 84.67% / top-5 96.66% | Grocery Store Dataset、81 クラス、fp32 |
| DINOv2-small、SKU あたり登録画像 8 枚 | top-1 79.11% | 同上 |
| DINOv2-small、SKU あたり登録画像 1 枚 | top-1 51.11% | 同上 |
| DINOv2-base、SKU あたり 8 枚、保留 SKU | top-1 78.92% | Products-10K の保留セット、クラス数ははるかに多い |
| 検出器、640² | mAP50-95 52.84、mAP50 88.26 | SKU-110K test |
| 検出器、1280² | mAP50-95 56.32 | SKU-110K test |

SKU-110K の公開成績は mAP50-95 58.0（DenseDet、Cascade R-CNN + ResNeXt-101）から 58.7（arXiv 2007.11946）です。640² では mAP50 が 88.26、mAP50-95 が 52.84 で、ボックスは見つかりますが位置精度が足りません。検索に最も影響するのは登録視点の数です。同じモデル、同じデータセットで、SKU あたり 1 枚では 51.11%、8 枚では 79.11% です。

再現：`evaluation/runs/`（埋め込み評価：`evaluation/eval_embedder.py`）

### ランタイムと主要パラメータ

| デバイス | 検出器 | 埋め込み器 | モデルをデバイスに届ける方法 |
|---|---|---|---|
| reComputer RK3588 / RK3576 シリーズ | NPU 上の `.rknn`、fp16 または INT8 | CPU 上の onnxruntime、RKNN 変換なし | x86_64 ホストで rknn-toolkit2 2.3.2 により変換します。toolkit のバージョンはボード上の `librknnrt.so` と一致させる必要があります |
| reComputer R2000 シリーズ + Hailo-8 | NPU 上の INT8 `.hef` | CPU 上で動的量子化 INT8 の DINOv2-small | x86_64 ホストで Hailo Dataflow Compiler によりコンパイルし、ボードにコピーします |
| reComputer J40 シリーズ（Jetson Orin） | TensorRT fp16（GPU） | TensorRT fp16（GPU） | 検出・埋め込み・検索・通知までの一連のリプレイを J4012 と J3011 で実行済みです |

検出器は単一クラスの YOLOX-Tiny（640² または 1280²）です。埋め込み器は EC サイトの商品画像で ArcFace により微調整した DINOv2 で、base（348 MB fp32）または small（23.5 MB INT8）、クロップごとに 512 次元ベクトルを出力します。SKU の識別はバージョン管理された gallery の FAISS コサイン検索だけが持ちます。

- 入力サイズ：レジは **640²**、棚は **1280²**。成果物にコンパイルされ、実行時には変更できません
- 登録画像：SKU あたり **3–8 枚**。3 枚未満は拒否されます
- `RETAIL_EMBEDDER`：上流のデフォルトは `fake`（画像のバイト列をハッシュしてベクトルにする）です。配備時に DINOv2 ONNX へ切り替えてください

### 既知の劣化

- 埋め込みはボックスごとに 1 回の CPU 推論です。クロップあたり 91.95 ms では、5 点のかごで約 0.5 秒、棚の 1 フレーム（157.6 ボックス）で約 14 秒かかるため、棚の配備ではフレームを間引くか棚スロット単位でサンプリングしてください。
- 静的 QDQ INT8（活性化も量子化）は検索精度が 3.78–9.96 ポイント下がり、使用できません。
- rknn-toolkit2 と `librknnrt.so` のバージョンが一致しないと、正常に読み込まれたまま誤った値を返すことがあります。変換のたびに CPU 参照値との一致を確認してください。
- 640² の成果物で棚を見ると奥の商品を見逃します。SKU-110K の小物体 mAP50-95 は 640² で 17.49、1280² で 26.88 です。
- 異なる 2 つの埋め込み器のベクトルは比較できず、混在させると何も認識されなくなります。
- デバイス側で gallery のバージョンを取得し、検証し、アトミックに切り替えるランタイムは未実装で、新しく登録した SKU はデバイスに自動配信されません。
- OCR による再ランキングと VLM フォールバックは未実装です。メッセージには `top2_margin`、`ocr`、`fallback` ブロックがありますが、コードは未実装です。

### 次のステップ

- reComputer J40 シリーズ（J4012 / J3011）の TensorRT バックエンドでの検出、埋め込み、レジのリプレイの実測を「性能と実測データ」とランタイム表に追加します。
- 受け入れ指標として、レジの計数精度と棚スロット精度を測定します。
- デバイス側で gallery のバージョンを取得し、検証し、アトミックに切り替えるランタイムを実装し、新しく登録した SKU がデバイスに自動配信されるようにします。

## データと素材の出典

**パッケージにはモデルの重みもデータセットの画像も含まれていません。** 以下の制限はこれらのデータで学習したモデルにも引き継がれるため、商用導入には商用利用可能なデータで検出器と埋め込みモデルを再学習する必要があります。

| 素材 | ライセンス / 利用範囲 | 備考 |
|---|---|---|
| 検出器の重み（[SKU-110K](https://github.com/eg4000/SKU110K_CVPR19) で学習） | Trax ライセンス：学術・非商用。第 (iii) 項で派生物を禁止 | `use_scope: academic-only`、`redistributable: false` |
| 埋め込みモデルの重み（JD Products-10K で fine-tune） | 非商用の研究・教育 | `use_scope: non-commercial`、`redistributable: false` |
| `facebook/dinov2-base`、`facebook/dinov2-small` のバックボーン | Apache-2.0 | バックボーンは商用利用可能で、制限は学習データに由来 |
| [Grocery Store Dataset](https://github.com/marcusklasson/GroceryStoreDataset) | MIT | 検索評価のみ。この中で唯一商用利用可能なデータセット |
| RPC、Unitail-OCR、GroZi-120 | CC BY-NC-SA 4.0 / 学術のみ / ライセンスはデータセット提供元に要確認 | 上流の評価計画に含まれる。非商用の範囲 |
| プロジェクト自身のコード | Apache-2.0 | |

成果物ごとの項目（`license_id`、`use_scope`、`redistributable`、`source_revision`、`sha256`）は上流の model card にあり、概要はパッケージの `gallery/ATTRIBUTION.md` にあります。参考設計ページのアーキテクチャ図は、パッケージのデバイス一覧から自作したものです。
