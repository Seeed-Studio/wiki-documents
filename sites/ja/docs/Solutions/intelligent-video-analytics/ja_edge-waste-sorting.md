---
description: エッジ廃棄物分別の構築、出力契約、実測境界と実装詳細
title: 'エッジ廃棄物分別：素材クラス、4分類、MQTT'
keywords:
  - waste sorting
  - waste classification edge AI
  - material classification MQTT
  - China four-way waste category
  - smart bin
  - EfficientNet-Lite0
  - SigLIP2 open vocabulary
  - reComputer
  - Jetson Orin
  - Hailo-8
  - RK3588
  - INT8 quantisation
image: https://files.seeedstudio.com/wiki/reference-design/edge_waste_sorting/scene-snapshot-ea198c2e.jpg
slug: /solutions/edge-waste-sorting
sidebar_position: 4
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/ja/solutions/edge-waste-sorting/
generated_from: sensecraft-solutions@cbbfa60
---

:::caution[利用上の注意]
これは **デモパッケージであり、法令・規制対応の分類システムではありません**。中国の 4 分類マッピングは本プロジェクトが管理する表であり、当局の認証済み判断ではありません。自治体の定義も都市ごとに異なるため、本ページの出力だけを課金、罰則、コンプライアンス判断の根拠にしないでください。**本パッケージは対象ハードウェア上で実行されていません。** 精度値はすべて Apple M4 CPU 上の onnxruntime から得ています。Hailo-8 値は Hailo-8 silicon ではなく Dataflow Compiler emulator から得ています。実デバイス測定は RK3588 開発ボードでの runtime parity だけで、ここには導入パッケージがありません。**`verified: [hardware]` を持つプリセットはありません。**
:::

## このソリューションでできること

トリガー（ボタン、HTTP 呼び出し、フレーム内の動き）により、デバイスは **1 枚の画像**を取得し、商品を **8 素材クラス**のいずれかに分類し、そのクラスから **中国 4 分類の廃棄カテゴリ**を lookup して MQTT メッセージを 1 件公開します。並行して async callback が 4 分類カテゴリを受け取り、フラップ、リレー、レーン表示器が動作できます。

- **1 つの head から 2 層の回答。** モデルは paper、cardboard、glass、metal、plastic、textile、organic、residual を予測します。4 分類（可回收物 / 厨余垃圾 / 有害垃圾 / 其他垃圾）は **8 クラス argmax 上の lookup table であり、2 つ目の head ではありません。** 地域当局の規則への適応は再学習ではなく表の編集です。
- **動画ストリームではなくオンデマンドトリガー。** ボタン、HTTP、動きに対して 800 ms debounce を行い、処理中に到着したトリガーは queue せず merge します。rate-limited な連続モードもあり、公開前に同一 top-1 予測が 3 回連続する必要があります。
- **文書化だけでなく検査される契約。** すべての payload を公開前に event schema へ照合します。JSON Schema では表せない 2 つの規則、`category` は `top3[0]` と等しいこと、`confidence` は `top3[0].confidence` と等しいことも含みます。失敗 payload はカウントして破棄します。
- **任意の open-vocabulary track。** SigLIP 2 vision tower を固定 text prototype と照合し、導入ごとに `model.track: open_vocab` で選択します。再学習なしでクラスを追加し、同じ image embedding から中国語または英語で回答し、「これは語彙にない」と採点できます。
- **pin binding のない actuator interface。** runtime はカテゴリを callback します。その出力先は integration work であり、同じ build を異なる header のボードで動かせます。

画像 byte はデバイス外へ出ず、payload には path または object-store URI だけを含めます。

- パッケージの source と導入ガイド：[sensecraft-solutions / solutions/edge_waste_sorting](https://github.com/suharvest/sensecraft-solutions/tree/main/solutions/edge_waste_sorting)
- 構成を選んで導入する：[すぐに導入できるソリューションページ](https://www.seeed.co.jp/solutions/reference-designs/edge_waste_sorting)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <div class="info-content">
                <h3>素材 top-1 0.8877、中国 4 分類 top-1 0.9500</h3>
                <p>重複除去した 7417 画像の validation split を Apple M4 CPU 上の onnxruntime で測定。詳細は付録にあります。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" /></svg>
            </div>
            <div class="info-content">
                <h3>baseline は MobileNetV3-Small ではなく EfficientNet-Lite0</h3>
                <p>元 baseline は試した 3 つの edge chain すべてで INT8 時に崩壊しました。Lite0 は崩壊せず、同じ split でわずかに高精度です。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>
            </div>
            <div class="info-content">
                <h3>1 画像 1 商品</h3>
                <p>この chain に detector はありません。1 フレームに 2 商品あると回答は 1 つだけで、どちらを説明するかは未定義です。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>Jetson または Hailo-8 silicon での測定はなし</h3>
                <p>Jetson preset だけが model file を持ちますが、Jetson 上で engine を構築したことはありません。Hailo preset は pending model badge 付きです。</p>
            </div>
        </li>
    </ul>
</div>

### デバイス上での実行画面

以下は `waste-sorting` パッケージを導入した reCamera PoE から見た投入口です。この実行ではカメラ前に何も置いていないため、分類結果ではなく画角の参照です。

<div align="center">
  <img class='img-responsive' width={520} src="https://files.seeedstudio.com/wiki/reference-design/edge_waste_sorting/scene-snapshot-ea198c2e.jpg" alt="reCamera PoE framing of the drop area, with nothing placed in front of it on this run"/>
</div>

結果は画像内ではなく MQTT に送られます。`waste/recamera-cvi/results` を購読して取得した連続イベントを示します：

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_waste_sorting/mqtt-events-terminal-b19bfb30.png" alt="Consecutive classification events on waste/recamera-cvi/results, each carrying the eight-class result, the four-way mapping and inference time"/>
</div>

<!-- TODO image: the drop point as installed (camera mounted above the bin) — needs a field shoot -->
<!-- TODO image: the local panel on 8080, MJPEG preview and top-3 list — needs a screenshot from a deployed device -->

### デモが実際に示すもの

このパッケージの gallery に含まれる唯一の素材は、ソリューション用に描いたデータ経路の模式図です。**データセット由来画像はパッケージのどこにも commit していません。** 2 つの元データセットは再配布を許可していますが、上流リポジトリはデータセット由来画像をバージョン管理外に置いており、本パッケージも同じルールです。`assets/models/` には checksum manifest だけを置き、パッケージに HEF がないため `SHA256SUMS.hef` は意図的に空です。

## 必要な機器

ごみ箱に必要なのは、トリガーを発火するもの、カメラ、ホストの 3 つです。

**① トリガー** — ホストに接続したボタン、ポート 8080 の `POST /trigger`、またはフレーム内の動き。3 つすべて同じ 800 ms debounce と同じイベントを使い、payload の `trigger` field で区別します。

**② カメラ** — 投入口を見下ろす任意の USB、RTSP、file source。この設計が制約するのはカメラ型式ではなく画角です。1 商品がフレームの意味のある範囲を占め、フレーム内は 1 商品だけにします。商品が小さくなる画角では分類が劣化し、本ページの数値はその条件で測定していません。

**③ 分別ホスト** — 利用できる model path とコストの大部分を決める機器です。

| 分別ホスト | アクセラレータ | 配備時の classifier | Open-vocabulary track | 選択する場面 |
|---|---|---|---|---|
| reComputer J3011 (Jetson Orin Nano 8GB) | Orin GPU | EfficientNet-Lite0 224²、TensorRT FP16 | このモジュール向けの規模未評価 | baseline classifier の投入口 1 か所、model file を持つ低コスト Seeed host |
| reComputer J4012 (Jetson Orin NX 16GB) | Orin GPU | EfficientNet-Lite0 224²、TensorRT FP16 | 提供。対応する唯一の device class | 再学習なしで後から商品種別を追加する場合 |
| reComputer R2000 series (Hailo-8) | Hailo-8 | EfficientNet-Lite0 224²、INT8 HEF | なし | この workload 用に Hailo-8 hardware を準備する場合。preset badge は `HEF pending` |

両 reComputer モデルには、同じ module と runtime を使うファンレス産業用筐体（reComputer Industrial J3011 / J4012）があり、盤内または屋外取り付けに対応します。

**本ページの数値はこれらのボード上で取得していません。** Jetson 行はパッケージの内容を示し、実測値ではありません。open-vocabulary 列はパッケージの device catalogue に基づくリソース記述です。SigLIP 2 vision tower は 371 MB ONNX で CPU 上の画像あたり p50 66.93 ms のためアクセラレータが必要ですが、Orin Nano 8GB module では規模を評価していません。

**④ その他** — MQTT consumer（パッケージ自身が 1883 にローカル broker を起動）、フラップやレーン表示器を対象にする場合は driver hardware と GPIO callback の integration code。pin binding は同梱しません。主処理チェーンにインターネット接続は不要です。

## 現場での導入方法

2 段階です。光学系とトリガーを固定し、その後ソフトウェアを導入します。導入難易度は **intermediate**、初回は約 **35 分**です。

### 一、投入口の画角とトリガーを決める

:::tip[1 画像 1 商品。フレーム内で大きく写す]
detector はありません。1 枚に 2 商品あると回答は 1 つだけで、どちらを説明するかは未定義です。商品がフレームの小さな範囲しか占めない場合は分類が悪化し、本ページの測定はその画角で行っていません。投入口を見下ろすようカメラを取り付け、1 商品が画像の意味のある範囲を占めるようにし、導入前にボタン、HTTP 呼び出し、動きのどれをトリガーにするか決めてください。
:::

### 二、ソフトウェアを導入する

デバイスごとの手順は参考設計ページにあります。現場についていくつか質問に答えると、対応するアプリケーションパッケージもダウンロードできます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.co.jp/solutions/reference-designs/edge_waste_sorting" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>構成を選択してダウンロード 🖱️</font></span></strong>
    </a>
</div><br />

両プリセットの流れは同じです：

1. **プリセットとホストを選択します。** `Camera + reComputer J30 / J40 (Orin)` または `Camera + reComputer R2000 series (Hailo-8)`。
2. **廃棄物分別 runtime を配備します**（必須）。Orin 経路では導入中にデバイス上で TensorRT engine を構築します。engine は正確な GPU architecture と TensorRT version に固定されるため、prebuilt では配布できません。Hailo 経路では導入ステップが 3 つの Hailo ABI gate を確認した後、**model file がないため停止します。** この preset はボードを準備しますが、現時点で動作する classifier は提供しません。
3. **ライブ分類を確認します**（任意）。ポート 8080 のローカルパネルに MJPEG プレビュー、health counter、top-3 付き最新イベントが表示されます。配線前に画角を確認する場所です。
4. **トリガーを接続し 1 回の分類を確認します**（必須）。ボタン押下、HTTP 呼び出し、動きイベント 1 回につき、`waste/<stream-id>/results` に MQTT メッセージを正確に 1 件生成し、`category` と `confidence` が `top3[0]` と一致する必要があります。
5. **open-vocabulary track に切り替えます**（任意、Orin のみ）。詳細は後述します。

## 自社システムへの接続方法

データは分別ホストから 2 つの interface と in-process callback、任意の MQTT side channel で出ます。すべてホスト自身が提供します。

- **運用または記録システム** — ポート 1883 の `waste/<stream-id>/results` を購読します。分類ごとに JSON メッセージを 1 件送信し、クラスごとには送りません。
- **キオスク UI、PLC gateway、テストスクリプト** — ポート 8080 の `POST /trigger` が 1 回の capture-and-classify を発火し、`/events` が top-3 付き最新結果を返します。
- **フラップ、リレー、レーン表示器** — async GPIO callback が 4 分類カテゴリを渡します。pin binding はなく、binding の提供は integration work です。

### インターフェース全体の表

| 種類 | 場所 | 内容 | 備考 |
|---|---|---|---|
| `mqtt` | 1883、`waste/<stream-id>/results` | `type`、`version`、`taxonomy_version`、`device`、`stream_id`、`frame_id`、`timestamp`、`trigger`、`inference_time_ms`、`pipeline_ms`、`category`（`class_id`、`class_name`、`china_category`、`china_category_zh`）、`confidence`、`top3[]`、`image_ref`、`model`（name、backbone、input、`onnx_sha256`、accelerator） | 分類ごとに 1 メッセージ。公開前に event schema へ照合 |
| `http` | 8080、`/trigger` `/preview.mjpg` `/healthz` `/events` | `POST /trigger` が 1 回の capture-and-classify を発火（trigger source `http`）。MJPEG live view、推論時間・trigger・debounce・MQTT counter を含む health、top-3 付き最新結果 | ローカルパネル、認証なし |
| GPIO callback | in-process | 4 分類カテゴリを非同期に渡す | `actuator.enabled` の既定は false。pin binding なし |

誤用しやすい 3 つのフィールドの意味：

- **画像は payload に入りません。** `image_ref.kind` は `none`、`local`、`object_store` のいずれかです。payload に Base64 画像 byte を入れると契約違反となり、公開前に拒否されます。
- **`category` は常に `top3[0]` と等しく、`confidence` は常に `top3[0].confidence` と等しくなります。** 公開前に両方を検査し、契約に失敗した payload は送信せずカウントして破棄するため、consumer が両者を突き合わせる必要はありません。

同梱 MQTT broker は匿名接続を許可しますが、これはローカル立ち上げ用です。ベンチ外へ出す導入では認証情報付き broker が必要です。

## エンジニア向け：実装の詳細

### 2 つの track、1 つの taxonomy

| Track | モデル | 入力 | サイズ | 実行場所 |
|---|---|---|---|---|
| Baseline（同梱） | EfficientNet-Lite0（`m1c`）、8 クラス head | 224² | 13,477,056 B ONNX | 両 preset。Orin は TensorRT FP16、Hailo-8 は INT8 HEF |
| Baseline（旧） | MobileNetV3-Small（`m1b`） | 224² | 6,118,606 B ONNX | INT8 崩壊との比較用に保持 |
| Open-vocabulary（任意） | SigLIP 2 ViT-B/16 vision tower + 固定 text prototype | 224² | 371,695,898 B ONNX | Orin NX 16GB のみ、`model.track: open_vocab` |

Prototype bank と calibration report は約 155 KB を追加します。8 クラス head は 4 分類カテゴリの lookup table へ入力され、拡張点は head ではなく表です。

### baseline を変更した理由と、未証明の点

MobileNetV3-Small の INT8 graph は、試した **すべて**の edge chain で崩壊しました。Hailo DFC emulator agreement 0.115、RK3576 0.10、RK3588 0.22 で、同じ chain の fp16 は約 0.98–1.00 です。ORT post-training quantisation でも同じ崩壊が再現したため、compiler 固有のバグではなく、局所 op ではない network 全体の劣化です。

training recipe には具体的な欠陥があります。`AdamW(model.parameters(), weight_decay=1e-4)` が BatchNorm gamma と bias に weight decay を適用し、m1b checkpoint の 34 `BatchNorm2d` layer 中 4 つで `running_var` / `|gamma|` が float32 denormal の大きさまで劣化しています。INT8 accuracy cliff が現れる layer と同じです。**ただし、これは証明された根因ではありません。** EfficientNet-Lite0 も同じ weight-decay 設定と同種の weight outlier（max `|w|` 35.70、m1b は 52.35、低下は 32%）を持ちますが崩壊しません。この程度の差だけでは agreement 0.115 から 0.89+ への変化を説明できません。より可能性が高いのは、SE-gating と hard-swish が構造的に INT8 感度が高く、weight-decay defect がその感度を増幅したという読みです。どちらの解釈も確認する ablation は未実行です。

置換のコストは CPU のみです。Lite0 は MobileNetV3-Small より FLOPs が多いため、平均推論時間は 1.886 ms から 16.796 ms へ約 9 倍になりました。**実際に試した NPU ではこの差は引き継がれません。** 後述の RK3588 表では Lite0 INT8 が p50 3.803 ms、m1b は 4.70 ms です。

### trigger、debounce、continuous mode

トリガー 1 回につき分類 1 回です。800 ms debounce は処理中に到着した trigger を queue せず merge するため、短いダブルプレスは 2 回ではなく 1 回の回答になります。continuous mode は rate-limited で、公開前に **同一 top-1 prediction が 3 回連続**する必要があります。trigger mode にはこの smoothing がなく、single shot は 1 回の回答です。

### Open-vocabulary track：導入方法を決める 2 つの知見

- **直接 4 分類予測ではなく hierarchical path を使います。** 英語 8 クラス予測を 4 分類へマッピングすると 0.9393、Chinese prompt で 4 分類を直接予測すると 0.8478 です。「Recyclable」は視覚概念ではありませんが、「glass bottle」は視覚概念です。
- **`residual` が最も弱い要素です。** leave-one-out AUROC は 0.5795 と chance 近傍です。語彙から「general waste」を外すと、別の素材語が高 confidence でこれらを拾います。これは fallback 定義であり、視覚概念ではありません。

### 上記の数値の範囲

- **Baseline と open-vocabulary の精度および CPU レイテンシ** — onnxruntime 1.25.1、Apple M4 CPU、batch 1。
- **Hailo-8 向け baseline INT8** — DFC 3.31.0 / HailoRT 4.21.0、`--hw-arch hailo8` で構築。付属の `efficientnet_lite0_waste8_u8.hef` は、2048 個のクラス均衡 uint8 学習 crop に対して `optimization_level=2`（量子化を意識した蒸留 fine-tune、8 epochs、bias correction 有効）で量子化しており、コンパイルには DFC コンテナ内から GPU が見える必要がある。7417 枚の val セット全体を Hailo-8 で測定した。同じグラフを `optimization_level=1` で処理すると fp32 より 2.40 points 低く、配備していない。200 枚の検証画像での emulator 比較（agreement 0.890）は、以前の `efficientnet_lite0_waste8.hef` パッケージから得た。
- **Open-vocabulary SigLIP 2 tower** — `hailo parser` は最後まで通るが、`hailo optimize`（INT8 PTQ、256 calibration images、`optimization_level=1`）が layer `ne_activation_mul_and_add78` で失敗するため、これ用の HEF はない。
- **RK3588 上の baseline fp16 と INT8** — RK3588 開発ボード、librknnrt 2.3.2、50 枚の検証画像。このボード向けの配備パッケージはない。
- **RK3576 上の baseline** — RK3576 開発ボード、m1b のみ。Lite0 は RK3576 用に変換していない。
- **Field accuracy** — 両データセットは単一物体の写真（白いポスターボード上の TrashNet、物体が中央から外れ、しばしば遮蔽される GC3）なので、自分のごみ箱から field set を集めて再測定すること。

## 付録：測定データ {#measured-data}

配備だけが必要なら、この節は読み飛ばしてよい。**ここに示す大半の数値は Apple M4 CPU 上の onnxruntime によるもの**で、各表に数値の出所を記載している。2 つの classifier は、同じ machine 上で**同じ split**、同じ画像、同じ 224² input、同じ post-processing を使って測定した。

### Baseline classifier — EfficientNet-Lite0（m1c、出荷版）

| 指標 | 値 | 条件 |
|---|---:|---|
| Material top-1 (8 classes) | **0.8877** | val、7417 images、onnxruntime 1.25.1 CPU、ONNX `e9f9e847…`、13,477,056 B |
| Material top-5 | 0.9833 | 同上 |
| Chinese four-way top-1 | **0.9500** | 同上、8-class argmax の後に lookup |
| macro-F1 (7 classes with samples) | 0.8511 | `textile` は除外 — samples 0 |
| Material top-1、held-out test | 0.8802 | test、7290 images、m1b と同じ split |
| Inference latency、single image、CPU | mean 16.796 ms / p50 14.724 ms / p95 28.718 ms | `session.run` のみ、Apple M4 CPU、batch 1 |
| Images below 0.5 confidence | 318 (4.3%) | val |
| ORT PTQ INT8 vs fp32 agreement | 0.965 | 200 val images、per-channel + MinMax — collapse ではない |

Run directories: `evaluation/runs/2026-09-06-m1c-cpu`, `evaluation/runs/2026-09-06-m1c-int8-diag-quick`.

**2 つの top-1 数値を一緒に報告すること。** four-way の値（0.9500）が material の値（0.8877）より大幅に高いのは、glass↔metal↔plastic の混同が吸収され、3 つとも 可回收物 に map されるためである。four-way の値だけを引用すると、モデルの material に関する知識を過大評価する。

### MobileNetV3-Small (m1b) — superseded、INT8 collapse との比較用に保持

同じ split、同じ画像、同じ CPU。

| 指標 | 値 | 条件 |
|---|---:|---|
| Material top-1 (8 classes) | 0.8792 | val、7417 images、ONNX `51c7c0ed…` |
| Material top-5 | 0.9854 | 同上 |
| Chinese four-way top-1 | 0.9519 | 同上 |
| macro-F1 (7 classes with samples) | 0.8292 | `textile` は除外 |
| Material top-1、held-out test | 0.8807 | test、7290 images |
| Inference latency、single image、CPU | mean 1.886 ms / p50 1.769 ms / p95 2.276 ms | `session.run` のみ、Apple M4 CPU、batch 1 |
| Images below 0.5 confidence | 335 (4.5%) | val |
| **INT8 collapse — Hailo-8 emulator** | top-1 0.15、CPU/native との agreement 0.115 | 200 val images、同じ画像での fp16 agreement は 1.000 |
| **INT8 collapse — RK3576 (real hardware)** | CPU golden との agreement 0.10 | 同じ device での fp16 agreement は 0.98 |
| **INT8 collapse — RK3588 (real hardware)** | CPU golden との agreement 0.22 | 同じ device での fp16 agreement は 0.98 |

Run directories: `evaluation/runs/2026-09-06-m1b-cpu`、`2026-09-06-m1b-hef`、`2026-09-06-rk3576-cat`、`2026-09-06-rk3588-radxa`。

### Open-vocabulary track — SigLIP 2 ViT-B/16

同じ split、同じ画像、同じ post-processing、同じ machine。

| 指標 | 値 | 条件 |
|---|---:|---|
| Material top-1 (8 classes) | 0.8501 | val、7417 images、English prompt set `waste8-en/v1`、template `t02`、16-shot α=0.8、temperature 0.0075 |
| Material top-5 | 0.9987 | 同上 |
| Chinese four-way top-1 | 0.9393 | 同上、hierarchical path（8 classes、後から map） |
| macro-F1 (7 classes) | 0.7460 | 同上 |
| ECE (15 bins) | 0.0221 | 同上 |
| Open-set AUROC | 0.7538 | samples のある 7 classes の平均、leave-one-class-out、score = `1 - max softmax` |
| Cross-lingual agreement (zh vs en、同じ画像) | 0.8698 material / 0.9143 four-way | 1 つの visual embedding、3 つの prototype banks — この値には preprocessing や sampling の noise なし |
| Material top-1、held-out test | 0.8620 | test、7290 images、templates、α、temperature はここでは検索していない |
| Inference latency、single image | p50 66.93 ms / p95 91.62 ms | Apple M4 CPU、batch 1、vision tower のみ |

Run directory: `evaluation/runs/2026-09-05-w1-cpu`.

### Baseline と open-vocabulary の比較（同じ split）

この比較の baseline 列は、現在出荷している EfficientNet-Lite0 ではなく、比較実施時に baseline だった **MobileNetV3-Small** である。この split では Lite0 の精度がわずかに高い（val で 0.8877 対 0.8792）ため精度差は縮まらないが、レイテンシ倍率は MobileNetV3-Small の CPU p50 に対する 40× から、Lite0 自身の CPU p50 約 14.7 ms に対する約 4–5× へ縮まる。**baseline の切り替え後、両 track を相互に再測定していない。**

| 指標 | Baseline (MobileNetV3-Small) | Open-vocab (SigLIP2-B/16) |
|---|---:|---:|
| Material top-1, val | **0.8792** | 0.8501 |
| Material top-1, test | **0.8807** | 0.8620 |
| Chinese four-way top-1, val | **0.9519** | 0.9393 |
| macro-F1, val | **0.8292** | 0.7460 |
| ECE (15 bins), val | 0.0308 | **0.0221** |
| Open-set AUROC | 不可能 — closed-set head は retraining なしに class を外せない | **0.7538** |
| Cross-lingual agreement | text 側なし | **0.8698 / 0.9143** |
| Zero-shot new class | retrain が必要 | **prompt edit** |
| CPU p50 latency | **1.57 ms** | 66.93 ms |

両列は同じ val/test files、同じ 224² input、同じ softmax / top-k / mapping code path から得た。比較のため baseline 列はこの split で再計算しており、val top-1 は単独の m1b report と桁まで一致する。

### Hailo-8 — DFC emulator で compile と INT8 check を実施、**Hailo-8 hardware なし**

| path | 状態 |
|---|---|
| Baseline EfficientNet-Lite0 (m1c) → HEF | **1 回で compile 成功、修正不要。** `hailo optimize` と `compiler` は初回からともに exit 0 — Lite0 には Squeeze-Excite branch がないため、m1b で model-script 修正が必要だった `avgpool` shift-range issue に当たらない。200 val images（DFC 3.31.0 / HailoRT 4.21.0 emulator）では INT8 対 CPU/native の top-1 agreement **0.890**、ground truth に対する accuracy **0.755**（同じ画像で native/CPU は 0.795）— 4 points の低下であり collapse ではない。CPU との cosine similarity は mean 0.948、min 0.441。**すべて compile host の x86 emulator によるもので、Hailo-8 PCIe card は使っていない。** `evaluation/runs/2026-09-06-m1c-hef` |
| Baseline MobileNetV3-Small (m1b) → HEF | compile 済みだが INT8 は collapse：emulator agreement 0.115、accuracy 0.150 — 1/7 random baseline 近傍。この理由で superseded |
| SigLIP 2 vision tower → HEF | `hailo parser` は unsupported op なしで最後まで通る。`hailo optimize`（INT8 PTQ、256 calibration images、optimization_level=1）は layer `ne_activation_mul_and_add78` で `NegativeSlopeExponentNonFixable` とともに **fails** — "Desired shift is 16.0, but op has only 8 data bits"。optimized HAR、compiler run、HEF はいずれもない |

**「0.89 agreement」が裏付けることと、裏付けないこと。** 同じ compile pipeline と calibration set で MobileNetV3-Small に現れた pattern collapse なしに EfficientNet-Lite0 を INT8-quantise でき、`hailo optimize` に SE-branch workaround は不要だったことを裏付ける。実 Hailo-8 で HEF がごみを正しく分類することは**裏付けない**。board-level latency、thermal behaviour、accuracy は自分の unit で測定すること。calibration set（256 images）は DFC documentation が通常推奨する約 1024-image threshold より少なく、Lite0 用に再サンプリングせず m1b run からそのまま再利用した。

parse-stage の numerical check は通過した — DFC native emulator は 20 comparison images すべてで CPU onnxruntime と cosine similarity 1.0、同一 top-1 になった — ため、ONNX→HAR translation に error はない。これは Hailo-8 なしで答えられる部分で、INT8 部分は答えられない。同様に、SigLIP 2 が Hailo-8 で動かないという主張も裏付けない。1 つの optimization level と 1 つの calibration set で 1 回試しただけで、error message が示す 3 つの可能性のうち確認して排除したのは calibration-set normalisation だけである。

### RK3588 development board — real hardware、baseline INT8 は使用可能

emulator ではなく on-device measurement である。`wsl2-local` 上の rknn-toolkit2 2.3.2 で変換し、librknnrt **2.3.2**（symlink 名は 2.3.0 だが重要なのは library 内の version）を備えた RK3588 development board、50 val images、`core_mask=AUTO`、per-channel quantisation で実行した。

| model / precision | Latency p50 / p95 (mean) | CPU golden との agreement | ground truth との accuracy | 条件 |
|---|---|---|---|---|
| **EfficientNet-Lite0 (m1c), fp16** | 7.906 ms / 8.129 ms (7.041 ms) | 1.00 | 0.78 | ONNX sha `e9f9e847…`、50 val images |
| EfficientNet-Lite0 (m1c), int8 calib64+normal | 3.780 ms / 3.984 ms (3.807 ms) | 0.90 | 0.72 | 63-image calibration、`normal` algorithm |
| EfficientNet-Lite0 (m1c), int8 calib64+mmse | 3.785 ms / 3.981 ms (3.808 ms) | 0.98 | 0.78 | 63-image calibration、`mmse` algorithm |
| EfficientNet-Lite0 (m1c), int8 calib256+normal | 3.766 ms / 3.920 ms (3.500 ms) | 0.90 | 0.72 | 252-image calibration、`normal` algorithm |
| **EfficientNet-Lite0 (m1c), int8 calib256+mmse** — 推奨 | 3.803 ms / 4.003 ms (3.834 ms) | **1.00** | **0.78** | 252-image calibration、`mmse`。agreement と accuracy の両方で fp16 と一致し、**52% 高速** |
| MobileNetV3-Small (m1b, superseded), fp16 | 4.44 ms / 6.32 ms | 0.98 | — | ONNX sha `aa181dd5…`、比較用のみ |
| MobileNetV3-Small (m1b, superseded), int8 | 4.70 ms / 11.04 ms | **0.22 — collapse** | — | 64-image calibration、比較用のみ |

**m1b の比較行は accuracy ではなく runtime parity として読むこと。** この run は sha256 `aa181dd5…` の MobileNetV3 ONNX を使っており、このページの m1b accuracy figure が参照する m1b file（`51c7c0ed…`）とは**異なる**。両者を accuracy claim に組み合わせてはならない。

**推奨 config：`calib256+mmse`。** Lite0 INT8 の 4 variant はすべて 0.90–1.00 の agreement band に入り、collapse しない。`mmse` の変換は `normal` より 40–90× 遅い（256 calibration images で 17.3 min 対 11.5 s）が、これは一度だけの変換コストで runtime cost ではない。m1b の int8 は自身の fp16 より *遅かった*（4.70 ms 対 4.44 ms）ため、INT8 fast path が実行されなかったことを示す。Run directories：`evaluation/runs/2026-09-06-m1c-rk3588-radxa`、`2026-09-06-rk3588-radxa`。

同じ device 上の SigLIP 2 vision tower は m1c の変更の影響を受けない。

| model / precision | Latency p50 / p95 | CPU golden との agreement | 条件 |
|---|---|---|---|
| SigLIP 2 vision tower、fp16 | 169.4 ms / 170.5 ms | embedding cosine mean **0.999617**、min 0.998841 | ONNX sha `6f664af0…`、191 MB `.rknn` |

### RK3576 development board — real hardware、m1b のみ

| model / precision | Latency p50 / p95 | CPU golden との agreement | 条件 |
|---|---|---|---|
| MobileNetV3-Small (m1b), fp16 | 9.49 ms / 12.49 ms | top-1 **98%** (49/50) | `evaluation/runs/2026-09-06-rk3576-cat` |
| MobileNetV3-Small (m1b), int8 | 4.62 ms / 6.68 ms | top-1 **10%** (5/50) — 使用不可、random より悪い | train からの 64-image calibration |
| SigLIP 2 vision tower、fp16 | 152.51 ms / 176.59 ms | embedding cosine mean **0.99965**、min 0.99900 | 同じ run |

**EfficientNet-Lite0 は RK3576 用に変換も実行もしていない。** RK3588 の INT8 result が引き継がれると想定してはならない。RK3576 と RK3588 は異なる NPU generations で、同じ MobileNetV3-Small graph に対して異なる挙動（agreement 10% 対 22%）を示したため、どちらの断定も推測になる。

### Platform support（対応プラットフォーム）

| platform | 状態 |
|---|---|
| Jetson Orin (TensorRT) | 配備パッケージは出荷済み、baseline は EfficientNet-Lite0 ONNX に変更済み。**Jetson 上で engine を build したことはない** |
| reComputer R2000 series | 配備パッケージは出荷済み。baseline HEF は DFC emulator のみで compile と INT8 check 済み（agreement 0.890）— **Hailo-8 hardware では未実行**。SigLIP 2 tower は INT8 quantisation に引き続き失敗 |
| RK3588 | **real hardware で fp16 と INT8（m1c）の inference parity を検証済み、配備パッケージなし** — compose file、image、preset はない。conversion と runtime は動くが packaging は存在しない |
| RK3576 | real hardware で fp16 と INT8 の inference parity を検証済み — **m1b のみで、current baseline では再テストしていない**。配備パッケージなし |
| CPU (onnxruntime) | このページのすべての accuracy figure |

### Deployment footprint（配備サイズ）

| 項目 | サイズ |
|---|---|
| Baseline ONNX（`efficientnet_lite0_waste8.onnx`、m1c、current） | 13,477,056 B |
| Baseline ONNX（`mobilenetv3s_waste8.onnx`、m1b、superseded） | 6,118,606 B |
| SigLIP 2 vision tower ONNX (`siglip2_vision_224.onnx`) | 371,695,898 B |
| Prototype banks + calibration report | 合計 ~155 KB |

### 劣化する箇所と、数値がカバーしない範囲

- **`textile` には training sample も evaluation sample も 0。** どちらの source dataset にも cloth / textile category はなく、GC3 export にもその label はない。広く繰り返される二次資料の説明とは異なる。8 番目の logit は存在し、output shape が contract の一部なので ONNX output は `1×8` のままだが、学習もテストもされておらず、各表ではその class を 0 ではなく `n/a` とし、モデルが一度も予測していない。
- **`hazardous`（有害垃圾）に map される material class はない。** schema を安定させるため enum に含めているが、この build が emit することはない。
- **Domain shift。** 両 dataset は単一物体の写真である。TrashNet は daylight または indoor light の白いポスターボード上、GC3 は物体が中央から外れ、しばしば遮蔽される detection dataset。実際のごみ箱ではなく、wet、crushed、stacked、backlit、partially bagged なごみは evaluation に含まれない。**field set は未収集なので、実際のごみ箱で accuracy がどれだけ落ちるかの数値はない。** 低下は見込まれるが、低下幅は不明である。
- **`organic` が data の大部分を占める。** training set の 48.9%、val の 47.1% である。GC3 の `BIODEGRADABLE` class だけで元の boxes 74090 件中 45407 件を占めるためである。recall（0.9791）は他の全 class（0.70–0.88）を大きく上回り、confusion matrix は不確かな item をそこへ寄せることを示す。
- **`residual` は val sample が 20 件。** この class の precision figure を単独で引用してはならない。open-vocabulary track の precision 0.2754 は、model と同程度に sample 数の影響を受けた artefact である。
- **Deduplication により、これらの数値は leakage ではなく accuracy になる。** GC3 は TrashNet の source photographs を再利用する。grouping は source batch + origin image + perceptual hash（dhash 8×8、Hamming ≤ 3）で行い、connected components に union した。near-duplicate merge は 430 件で、**そのうち 183 件は 2 dataset 間**。group は unit として split 間を移動し、同じ group または同一 dhash が 2 split にまたがらないことを split が assert する。

## データと素材の出典

- **TrashNet** — [github.com/garythung/trashnet](https://github.com/garythung/trashnet)、**MIT License, Copyright (c) 2017 Gary Thung**。repository 自身の commit `6fa2b87` の `LICENSE` file と、公式 HuggingFace dataset card の `license` field という 2 つの first-party source で確認した。**記録上の訂正：** upstream project 自身の SPEC と survey report はこの dataset を CC BY 4.0 と記載しているが、それは誤りであり、first-party source に CC BY 4.0 の記載はない。MIT はより permissive で、copyright と licence notice の保持を求めるが share-alike 条項はない。
- **Garbage Classification 3 — Material Identification (Roboflow Universe)** — **CC BY 4.0**。export package 自身の `README.dataset.txt` にそのまま記載されている。Roboflow Universe 上の project path は `material-identification/garbage-classification-3`。
- **SigLIP 2** — [google/siglip2-base-patch16-224](https://huggingface.co/google/siglip2-base-patch16-224)、revision `75de2d55…`、Apache-2.0。optional open-vocabulary track のみで使用。
- **MobileNetV3-Small ImageNet starting weights** (torchvision) — BSD-3-Clause。
- **Upstream runtime code** — Apache-2.0。
- **Architecture diagram** — package 自身の device catalogue と output interfaces からこのページ用に作図。dataset imagery はない。

これらの dataset に由来する outward-facing material で verbatim に使用する attribution string：

```
TrashNet — Gary Thung and Mindy Yang, https://github.com/garythung/trashnet,
MIT License, Copyright (c) 2017 Gary Thung.
Garbage Classification 3 — Material Identification / Roboflow Universe,
https://universe.roboflow.com/material-identification/garbage-classification-3,
licensed CC BY 4.0.
```

**dataset-derived image はこの package に commit していない。** どちらの licence も redistribution を許可するが、upstream repository はすべての dataset-derived image を version control の外に置いている — `data/raw`、`data/cls`、`data/crops`、evaluation overlays はすべて gitignored — ため、この package も同じ規則に従う。`assets/models/` には checksum manifests のみを置く。
