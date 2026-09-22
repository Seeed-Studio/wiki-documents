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
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/ja/solutions/edge-product-recognition/
generated_from: sensecraft-solutions@cbbfa60
---

:::caution[最初にお読みください]
これは完成品ではなく、進行中の参考設計です。コンソール（登録、gallery versioning、管理 UI、broker）は実装済みで、検出器は 2 つのボードへ変換し測定済みです。**検出、embedding、gallery lookup、MQTT 公開を 1 サービスに結合するデバイス側プロセスは、上流にまだ存在しません。** そのため本ページにはエンドツーエンドの計数精度、棚スロット精度、soak 実行結果がありません。`verified: [hardware]` を持つプリセットもありません。認証済みの小売計量器ではなく、法的拘束力のある数量や価格を主張するものでもありません。
:::

## このソリューションでできること

カメラでレジベルトまたは棚面を監視します。フレーム内の各商品をボックス化、crop、512 次元ベクトル化し、登録済み SKU の gallery で検索します。レジでは結果が basket（SKU と数量のリスト）となり、track id で集約してカメラを通過する 1 商品を 1 回だけ数えます。棚では slot state（ok、empty、wrong SKU、unknown）となり、planogram 位置ごとに集約します。1 フレームにつき 1 MQTT メッセージですべてを送信します。

店舗が商品を追加したときの動作が特徴です。**再学習はありません。** 新 SKU を 3～8 回撮影し、画像をコンソールへ送ると、gallery に新しい immutable version が追加されます。検出器は個別商品を学習しません。single-class で「ここに商品がある」とだけ判定し、embedder も更新しません。

- 選択と導入：[参考設計ページ](https://www.seeed.co.jp/solutions/reference-designs/edge_retail_recognition)
- 上流リポジトリ：未公開。パッケージに `intro.links.github` はなく、作成時点のコードは内部リポジトリにあります。

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-content">
                <h3>新 SKU に必要なのは学習実行ではなく 3～8 枚の写真</h3>
                <p>登録によって新しい immutable gallery version が作られます。登録画像を 1 枚から 8 枚に増やすと top-1 精度が 28 ポイント上がります（付録参照）。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-content">
                <h3>検出器は NPU へ正常に変換できます</h3>
                <p>RK3588 の RKNN fp16 は 56.7 ms p50 で CPU 基準と 99.85% のボックスが一致し、Hailo-8 INT8 HEF は 9.04 ms p50、94.77% の一致率です。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-content">
                <h3>Embedding は crop あたり約 92 ms の CPU コスト</h3>
                <p>reComputer R2000 シリーズ、4 スレッド、動的量子化 INT8 DINOv2-small で測定。同じ fp32 モデルとの差は 0.65 pp 以内です。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-content">
                <h3>サイト外へ出るデータはありません</h3>
                <p>カメラ、認識ホスト、コンソールホストはすべてローカルで、broker はコンソールスタック内で動作します。同梱 broker は匿名 plaintext のため、ベンチ外へ出す前にアカウントと TLS を追加してください。</p>
            </div>
        </li>
    </ul>
</div>

### コンソールの画面

上流パッケージには管理 UI のスクリーンショットが 4 枚あります。イベント一覧、ボックスごとのイベント詳細、product gallery、レジ／棚ボードです。**4 枚すべて上流の `web_demo` tool が合成 fixture に対して生成したものです。** 含まれる SKU、similarity score、イベントは試験データであり、現場結果ではありません。インターフェースの形を示すだけで、認識品質を示しません。

### 3 つの棚状態

2026-09-07 に RK3588 と Hailo-8 搭載 reComputer R2000 シリーズで 1 回ずつ、棚判定を実行しました。各 slot は correct、empty、wrong SKU の 3 状態のいずれかになります。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/shelf-ok-9b435de4.png" alt="すべての slot が gallery と一致し correct と表示された棚ボード"/>
</div>

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/shelf-empty-e969556c.png" alt="同じ棚から 1 商品を取り除き、その slot が empty になった状態"/>
</div>

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/shelf-wrong-sku-27b3ca7e.png" alt="slot に属さない商品。実際に一致した SKU とともに wrong SKU と表示"/>
</div>

3 つの状態の推移：

<div align="center">
  <img class='img-responsive' src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/shelf-states-c62596bb.gif" alt="同じ棚が correct、empty、wrong-SKU 状態を順に遷移"/>
</div>

レジチェーンは slot state ではなく、人ごと・商品ごとの track を生成します：

<div align="center">
  <img class='img-responsive' src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/checkout-tracks-9c544983.gif" alt="レジ画面の商品 track と商品ごとの認識"/>
</div>

これらのフレームは `edge-retail-recognition/evaluation/runs/2026-09-07-runtime-*` の 2 つのハードウェア実行から得ています。商品はプロジェクト用に購入した実物で、データセット画像ではありません。

## 必要な機器

各サイトに必要なのは、カメラ、認識ホスト、コンソールホスト、モデルごとの変換に一度使う x86_64 マシンの 4 つです。

**① カメラ** — レジベルト上または棚に向けた任意の RTSP／USB カメラ。カメラ上では何も実行しません。重要なのは artifact にコンパイルされたフレームサイズで、レジは 640²、棚は 1280² です。

**② 認識ホスト** — プリセットが分かれ、実測値の基準となる機器です：

| | ホスト | このハードウェアでの実測 | 選択する場面 |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-102110919-raspberry-pi-5-8gb-45font.jpg" alt="reComputer R2000 series 8GB" width="110" /> | [reComputer R2000 series 8GB](https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html) + [Raspberry Pi AI HAT+ (Hailo-8, 26 TOPS)](https://www.seeedstudio.com/Raspberry-Pi-Al-HAT-26-TOPS-p-6243.html)<br/>検出器は NPU、embedder は 4 つの A76 コア | 両段階：検出 9.04 ms、crop あたり embedding 91.95 ms | 実際に使用するボード上で両段階の実測値が必要な場合 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26_.png" alt="reComputer RK3588-30" width="110" /> | [reComputer RK3588-30](https://www.seeedstudio.com/reComputer-RK3588-30-p-6817.html)<br/>検出器は Rockchip NPU、embedder は CPU | 検出器のみ、RK3588（reComputer RK3588 series reComputer RK3588 series）：56.7 ms でボックス一致 99.85% | すでに Rockchip ボードを運用している場合。RK3576 は同じ toolchain ですが実測値はありません |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J4012 (Orin NX 16GB)](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)<br/>TensorRT path | Nothing | You already run Jetson and accept that the backend has to be written first |

遅延値は各行に記載したハードウェア上の段階ごとの値です。デバイス上で 2 段階を連続実行するプロセスがまだないため、本設計にはスループットやストリーム数の値はありません。

**③ コンソールホスト** — Docker を備え GPU のない amd64 または arm64 Linux マシンで、すべての認識デバイスから到達できるもの。登録／query サービス、管理 UI、MQTT broker の 3 コンテナを実行します。**どちらの container image も registry へ push していません。** 上流リポジトリからこのホスト上でビルドし、image が npm を実行しないため先に SPA をビルドします（`npm --prefix web/ui ci && npm --prefix web/ui run build`）。

**④ 変換用 x86_64 マシン** — rknn-toolkit2 と Hailo Dataflow Compiler は対象ボード上で動作しません。導入ごとではなくモデルごとに一度必要です。

## 現場での導入方法

2 つの部分があります。各フレームで必要な crop 数を決める物理設置と、プリセットごとに 4 ステップのソフトウェアです。

### 1. 取り付け

:::tip[取り付け前に artifact を選ぶ]
入力サイズは artifact にコンパイルされ、実行時には変更できません。640² artifact に棚画像を入力すると遠い商品を見失います。1280² にすると SKU-110K test の small-object mAP50-95 は 17.49 から 26.88 に上がります。まずレジか棚かを決め、その後商品が適切にフレームを占めるよう取り付けてください。
:::

2 つ目の制約は光学ではなく算術です。Embedding は 1 ボックスにつき CPU を 1 回通ります。reComputer R2000 シリーズで実測 91.95 ms/crop の場合、5 商品の basket は約 0.5 秒、実測密度 157.6 ボックスの棚フレームは約 14 秒です。**棚への導入には frame skipping または slot レベルの sampling が必要で、これは tuning parameter ではなく設計判断です。**

### 2. ソフトウェア、4 ステップ

デバイスごとの手順は参考設計ページにあります。概要では、すべてのプリセットが同じ 4 つを実行します：

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.co.jp/solutions/reference-designs/edge_retail_recognition" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>構成して導入 🖱️</font></span></strong>
    </a>
</div><br />

1. **コンソールスタックを起動します。** コンソールホスト上で登録サービス、UI、broker を起動し、導入時に role token table を書き込みます。既定 token や匿名 read はなく、空の table ではサービスは起動しません。
2. **embedding model を配置します。** DINOv2 ONNX をコンソールが mount する場所へ置き、`RETAIL_EMBEDDER` を placeholder から切り替えます。上流の既定値は `fake` で、画像 byte を hash して vector にします。`GET /api/health` には報告されないため、「登録は成功するが lookup がすべて誤 SKU」という症状だけが現れます。
3. **SKU を登録します。** 各 SKU 3～8 枚、最低でも 2 つの照明条件で前面、背面、側面を撮影します。3 枚未満は拒否され、同じ sku_id は `replace=true` でない限り 409 を返します。
4. **ボード上で検出器を変換・確認します。** x86_64 ホストで変換し、artifact をコピーして CPU 基準との parity check を実行します。**現時点では各プリセットはここで止まります。** その後に起動するデバイス側サービスはありません。

ステップ 1～4 はプリセットごとに約 90 分、これにコンソールホストでの container build が加わります。

**このステップの成功確認。** 1 回の認識で event stream に slot、matched SKU、similarity、ボックスごとの座標を含む完全なレコードが残ります。embedding model が実際に接続されているかを確認してください。`fake` 実装では similarity 分布が明らかに不自然です。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_retail_recognition/event-json-198d89fa.png" alt="1 認識イベントの全フィールド：slot、matched SKU、similarity、ボックスごとの座標"/>
</div>

<!-- TODO 画像：現場に設置した棚とカメラ — 現場撮影が必要 -->

## 自社システムへの接続方法

すべての出力はコンソールホストから提供されます。MQTT は 1883、HTTP は 8089 と 8080 の 2 面で、すべてローカルネットワーク上にあり、broker 以外は同じ token gate の背後です。

- **レジまたは POS** は `retail/v1/events` を購読し、`summary.items`（フレームの SKU と数量の map）を読み取ります。ボックス配列を解析する必要はありません。
- **補充または棚監査システム** は同じメッセージの `summary.empty_slots` と `summary.wrong_slots` を読み取ります。
- **判定理由を説明する必要があるシステム**は `detections[]` 配列を読み取ります。ボックスごとの `track_id`、正規化 `bbox`、`sku_id`、`similarity`、`top2_margin`、`ocr` block、`fallback` flag が含まれます。

### topic と payload の全体

| インターフェース / ポート | Payload | 備考 |
|---|---|---|
| MQTT `retail/v1/events`、1883 | `event_id`、`scene`、`timestamp`、`gallery.{version,sha256}`、`detections[]`、`summary.{items,empty_slots,wrong_slots}`、`models.{detector_sha256,embedder_sha256}` | フレームごとに 1 メッセージ。ボックスごとには送らない |
| HTTP `/v1/gallery/skus`、8089 | sku_id、display name、aliases、licence field、3～8 画像を含む `POST` → 新しい immutable version | 重複 sku_id は `replace=true` 以外では 409 |
| HTTP `/v1/gallery`、`/v1/gallery/{version}`、`/v1/gallery/current/download`、`/v1/gallery/rollback/{version}`、8089 | version 一覧、version ごとの manifest、SHA256SUMS を含む tar.gz、切替前に対象 SHA を再検証する rollback | rollback は新 version を作らない |
| HTTP `/api/events`、`/api/events/{id}`、`/api/summary`、8080 | scene、SKU、device、時刻で絞り込むイベント一覧、ボックス詳細、ボード summary | 同じ token gate の背後にある read API |

**最も誤読しやすいフィールドは `similarity` です。** 同じメッセージの `gallery.version`、`gallery.sha256`、model hash と一緒でなければ解釈できません。異なる embedder が生成した vector は比較できず、混在時の症状は「何も認識されない」です。そのためすべてのメッセージに 4 つすべてを含めます。

認証は `Bearer <token>` で、権限は viewer < operator < admin です。一方、同梱構成の broker は匿名 plaintext であり、1883 に到達できる誰でも偽の認識イベントを公開できます。

## エンジニア向け：実装の詳細

### 2 つのモデルと分離する理由

classifier なら新商品ごとに再学習が必要です。本設計では商品 identity を学習するものがないよう問題を分離します：

| 段階 | モデル | 出力 | SKU 追加時に変わるか |
|---|---|---|---|
| 検出 | YOLOX-Tiny、single class、640² または 1280² | ボックス、クラスなし | いいえ |
| Embedding | EC 商品画像で ArcFace fine-tune した DINOv2 — base（348 MB fp32）または small（23.5 MB INT8） | crop ごとの 512-d vector | いいえ |
| Identity | versioned gallery に対する FAISS cosine lookup | SKU + similarity + top-2 margin | **はい — 新しい immutable gallery version** |
| Aggregation | track id（レジ）または planogram slot（棚） | basket、または ok / empty / wrong_sku / unknown | いいえ |

### ランタイム対応表

| ホスト | 検出器 | Embedder | 配備 |
|---|---|---|---|
| RK3588 / RK3576 | NPU 上の `.rknn` fp16 または INT8 | CPU 上の onnxruntime、RKNN 変換はなし | x86_64 host で rknn-toolkit2 2.3.2 により変換、onnx は 1.16.1 に固定、setuptools は 81 未満。toolkit version はボードの `librknnrt.so` と一致必須 |
| reComputer R2000 シリーズ + Hailo-8 | NPU 上の INT8 `.hef` | CPU 上の動的量子化 INT8 DINOv2-small | x86_64 host の Hailo Dataflow Compiler でコンパイルし、Pi へコピー |
| Jetson Orin | 未実装 | 未実装 | 上流の `platforms/` にあるのは console、hailo、rknn のみ。README の Jetson 項目は donor project から引き継いだもので、コピーされていないファイルを指す |

rknn-toolkit2 と `librknnrt.so` のバージョン不一致は、**常に明示的な失敗になるとは限りません。** ロードできても誤った数値を出すことがあります。CPU 基準との parity check はまさにこのためにあり、省略できません。

### gallery version プロトコル

gallery は唯一の mutable state で、新しい version を発行することでのみ変更されます：

| プロパティ | 動作 |
|---|---|
| Version directory | Immutable：vector、SKU table、FAISS index、manifest、SHA256SUMS |
| Manifest | vector を生成した embedding model と preprocessing を記録 |
| Switch | atomic、single-writer lock |
| Rollback | 切替前に対象 version の SHA を再検証し、新 version は発行しない |
| Download | `current/download` が SHA256SUMS 入り tar.gz を提供 |

**これはコンソール側だけ実装済みで、デバイス側は未実装です。** version を取得し、checksum を検証し、atomic に切り替える runtime はまだ存在しません。そのため新規登録 SKU は現在デバイスへ届きません。

### 仕様化済みで未実装のもの

- **OCR reranking。** `top2_margin` field と `ocr` block は message schema にありますが、top-1 と top-2 の similarity が近い場合に使う reranking は未実装です。
- **VLM fallback。** 同じ理由で `fallback` block は schema にあります。
- **デバイス側 pipeline**（全 platform）。
- **TensorRT backend**（Jetson preset）。

## 付録：実測データ

数値を確認しない場合はこの節を読み飛ばせます。以下はすべて記載したハードウェアで測定しており、類似ボードから補間した値はありません。上流 evaluation tree のすべての boundary file が `reproduced_by: null` を持ちます。

### 検出、ハードウェア上

| ホスト | Artifact | p50 / p95 | CPU 基準とのボックス一致率 | 出典 |
|---|---|---:|---:|---|
| reComputer R2000 シリーズ + Hailo-8 | INT8 HEF、640² | 9.04 / 9.10 ms | 94.77%（200 images）、94.68%（300 images） | `evaluation/runs/2026-09-06-det-hef/` |
| RK3588（reComputer RK3588 series reComputer RK3588 series） | RKNN fp16、640² | 56.7 / 89.5 ms | 99.85% | `evaluation/runs/2026-09-06-det-rk3588-radxa/` |
| RK3588（reComputer RK3588 series reComputer RK3588 series） | RKNN INT8、640² | 26.0 / 33.2 ms | 98.35% | 同じ実行 |

一致率は CPU 基準に対する IoU ≥ 0.5 です。Hailo の single-stream スループットは 110.4 fps で、`hailortcli benchmark` による 110.64 fps、純粋な hardware time 8.21 ms と独立クロスチェックしました。追加の 0.8 ms は Python vstream の往復です。**Pi 上のエンドツーエンド（letterbox、出力組み立て、decode、NMS を含む）は p50 18.74 ms / p95 24.25 ms**です。約 160 ボックスに対する pure-numpy のクラス別 NMS が推論より長くかかります。実行中に thermal throttling は観測されませんでした。Hailo die 温度と電力はこの platform で読み取れず、推定せず unavailable と記録しています。

### Embedding、ハードウェア上

| variant | crop あたり p50 / p95 | fp32 との retrieval cost |
|---|---:|---|
| DINOv2-small、dynamically quantised INT8、4 threads | 91.95 / 105.98 ms | 測定した 7 構成すべてで 0.65 pp 以内 |
| DINOv2-small、fp32、4 threads | 180.75 / 233.41 ms | baseline |
| DINOv2-small、static QDQ INT8（activations も quantised） | — | **3.78〜9.96 points 低下、使用不可** |

reComputer R2000 シリーズ CPU で測定。`evaluation/runs/2026-09-06-embed-small/` §8。ここでは weight-only quantisation のコストはほぼありませんが、activation の量子化は異なります。

### Retrieval と検出精度、デバイス外

| 構成 | 結果 | データセット |
|---|---:|---|
| DINOv2-base、SKU ごとに登録画像 8 枚 | 84.67% top-1 / 96.66% top-5 | Grocery Store Dataset、81 classes、fp32 |
| DINOv2-small、SKU ごとに登録画像 8 枚 | 79.11% top-1 | 同上 |
| DINOv2-small、SKU ごとに登録画像 1 枚 | 51.11% top-1 | 同上 |
| DINOv2-base、SKU ごとに画像 8 枚、held-out SKU | 78.92% top-1 | Products-10K held-out split、さらに多い classes |
| Detector、640² preset | 52.84 mAP50-95、88.26 mAP50 | SKU-110K test |
| Detector、1280² preset | 56.32 mAP50-95 | SKU-110K test |

両検出器の境界値はプロジェクト独自の failure tier にあり、その閾値は 60 mAP50-95 です。この 60 は本プロジェクトが全 metric に一律で適用する汎用値であり、SKU-110K に合わせて設定されたものではありません。SKU-110K の公開成績は 58.0（DenseDet、Cascade R-CNN + ResNeXt-101）から 58.7（arXiv 2007.11946）です。640² の mAP50 は 88.26 で、ボックスは見つかるものの、タイトには配置されていません。small-object mAP50-95 は 640² の 17.49 から 1280² の 26.88 へ上がるため、棚 preset は別 artifact になっています。

本ページで最大の変数は SKU ごとの登録 view 数です。同じモデルとデータセットで、画像 1 枚では 51.11%、8 枚では 79.11% です。

## データと素材の出典

**モデル重みもデータセット画像も、このパッケージには同梱していません。** 以下の制約はデータセットで学習したものすべてに及ぶため、商用導入はライセンス確認だけでなく再学習の作業になります。

| 素材 | ライセンス / 範囲 | 備考 |
|---|---|---|
| 検出器重み（[SKU-110K](https://github.com/eg4000/SKU110K_CVPR19) で学習） | Trax licence：academic と non-commercial。clause (iii) は derivative works を禁止 | `use_scope: academic-only`、`redistributable: false` |
| Embedder 重み（JD Products-10K で fine-tune） | 非商用の研究・教育 | `use_scope: non-commercial`、`redistributable: false` |
| `facebook/dinov2-base`、`facebook/dinov2-small` backbone | Apache-2.0 | 制限は backbone ではなく学習データに由来 |
| [Grocery Store Dataset](https://github.com/marcusklasson/GroceryStoreDataset) | MIT | Retrieval 評価のみ。この集合で唯一商用利用可能なデータセット |
| RPC、Unitail-OCR、GroZi-120 | CC BY-NC-SA 4.0 / academic only / データセット所有者への確認が必要 | 上流 evaluation plan に登場。非商用範囲 |
| プロジェクトコード | Apache-2.0 | |

artifact ごとのフィールド（`license_id`、`use_scope`、`redistributable`、`source_revision`、`sha256`）は上流 model cards にあり、概要はパッケージの `gallery/ATTRIBUTION.md` にあります。参考設計ページのアーキテクチャ図はパッケージのデバイスカタログから描いた独自素材です。
