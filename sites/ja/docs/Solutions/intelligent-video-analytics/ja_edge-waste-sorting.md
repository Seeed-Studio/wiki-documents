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
updatedAt: '2026-09-23'
url: https://wiki.seeedstudio.com/ja/solutions/edge-waste-sorting/
generated_from: sensecraft-solutions@cbbfa60
---

:::caution[利用上の注意]
中国の 4 分類マッピングは本プロジェクトが管理する対応表で、行政機関の認定ではなく、都市ごとに基準も異なります。出力を料金、罰則、コンプライアンス判定の唯一の根拠にしないでください。
:::

## このソリューションでできること

1 回のトリガー（ボタン、HTTP 呼び出し、画面内の動き）でデバイスが**画像を 1 枚**撮影し、写っている物を **8 つの素材クラス**のいずれかに分類し、そのクラスから表を引いて**中国の生活ごみ 4 分類**を求め、MQTT メッセージを 1 件送ります。同時に非同期コールバックが 4 分類の結果を受け取り、フタ、リレー、仕分け表示灯を動かせます。

- **1 つのヘッドで 2 段階の答え。** モデルは paper、cardboard、glass、metal、plastic、textile、organic、residual の 8 クラスを予測します。4 分類（資源ごみ / 厨芥ごみ / 有害ごみ / その他のごみ）は 8 クラスの argmax から表を引いて求めるため、地域の基準に合わせるときは表を変えるだけで再学習は不要です。
- **トリガーごとに 1 回撮影。** ボタン、HTTP、動体検知に 800 ms のデバウンスをかけます。前回の処理中に届いたトリガーはキューに積まず 1 回にまとめます。連続モードもあり、レート制限付きで動作し、3 フレーム連続で top-1 が一致したときだけ publish します。
- **publish 前に payload を検証します。** すべての payload はイベント schema の検証を受け、さらに JSON Schema では表現できない 2 つの条件を確認します：`category` は `top3[0]` と等しく、`confidence` は `top3[0].confidence` と等しいこと。不合格のものはカウントして破棄します。
- **任意のオープン語彙トラック。** SigLIP 2 の視覚タワーで固定のテキストプロトタイプに対してスコアを付けます。導入時に `model.track: open_vocab` で選択します。再学習なしでクラスを追加でき、同じ画像埋め込みから中国語でも英語でも答えられ、「語彙にない」ことを示すスコアも出せます。
- **アクチュエータのインターフェースはピンに固定されていません。** ランタイムはクラスを渡してコールバックし、どのピンを動かすかは統合コードで決めます。そのため同じビルドをピン配置の異なるボードで動かせます。

画像データはデバイスの外に出ません。payload にはパスかオブジェクトストレージの URI だけが入ります。

- パッケージのソースと導入ガイド：[sensecraft-solutions / solutions/edge_waste_sorting](https://github.com/suharvest/sensecraft-solutions/tree/main/solutions/edge_waste_sorting)
- 構成を選んで導入する：[すぐに導入できるソリューションページ](https://www.seeed.co.jp/solutions/reference-designs/edge_waste_sorting)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <div class="info-content">
                <h3>機器はすぐに使えます</h3>
                <p>アプリケーションパッケージを入れれば動作し、初回導入は約 35 分です。8 クラス top-1 0.8877、4 分類 top-1 0.9500（検証画像 7417 枚、CPU onnxruntime でのオフライン基準値。性能と実測データを参照）。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" /></svg>
            </div>
            <div class="info-content">
                <h3>コードはオープンソース</h3>
                <p>ランタイムコードは Apache-2.0 です。学習データの TrashNet（MIT）と GC3（CC BY 4.0）はどちらも再配布が認められています。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>
            </div>
            <div class="info-content">
                <h3>自社のカメラ、システム、アクチュエータをそのまま接続</h3>
                <p>USB / RTSP カメラまたはファイル入力を使えます。結果は MQTT で出力し、`POST /trigger` は端末や PLC ゲートウェイから呼び出せます。GPIO コールバックでフタや表示灯を動かします。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>すべて現場で動作</h3>
                <p>撮影、分類、表引き、MQTT broker はすべてホスト上で動作します。画像はデバイスの外に出ず、主処理チェーンにインターネット接続は不要です。</p>
            </div>
        </li>
    </ul>
</div>

### デバイス上での実行画面

以下は reCamera PoE に `waste-sorting` アプリケーションパッケージを入れた後、カメラが写した投入エリアの画角です。画像ではカメラの前に物を置いておらず、画角の参考用です。

<div align="center">
  <img class='img-responsive' width={520} src="https://files.seeedstudio.com/wiki/reference-design/edge_waste_sorting/scene-snapshot-ea198c2e.jpg" alt="reCamera PoE framing of the drop area, with nothing placed in front of it"/>
</div>

分類結果は画面ではなく MQTT に直接出力されます。以下は `waste/recamera-cvi/results` を購読して取得した連続イベントです：

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_waste_sorting/mqtt-events-terminal-b19bfb30.png" alt="Consecutive classification events on waste/recamera-cvi/results, each carrying the eight-class result, the four-way mapping and inference time"/>
</div>

<!-- TODO image: the drop point as installed (camera mounted above the bin) — needs a field shoot -->
<!-- TODO image: the local panel on 8080, MJPEG preview and top-3 list — needs a screenshot from a deployed device -->

## 必要な機器

投入口に必要なのは、トリガー、カメラ、ホストの 3 つです。

**① トリガー** — ホストにつないだボタン、ポート 8080 の `POST /trigger`、または画面内の動き。3 つとも同じ 800 ms のデバウンスを共有し、同じイベントを生成します。区別は payload の `trigger` フィールドで行います。

**② カメラ** — 投入エリアを見下ろす USB、RTSP、またはファイル入力で、型式は問いません。1 つの物が画面内で十分な割合を占め、画面には 1 つだけが写るようにしてください。物が小さすぎると分類性能が下がり、性能と実測データの数値はそのような画角では測定していません。

**③ 分類ホスト** — 使えるモデル経路を決めます。

| 分類ホスト | アクセラレータ | 配備時の分類器 | オープン語彙トラック | 選択する場面 |
|---|---|---|---|---|
| reComputer J3011 (Jetson Orin Nano 8GB) | Orin GPU | EfficientNet-Lite0 224²、TensorRT FP16 | 提供なし | 投入口 1 か所、ベースライン分類器のみ |
| reComputer J4012 (Jetson Orin NX 16GB) | Orin GPU | EfficientNet-Lite0 224²、TensorRT FP16 | 提供（提供する唯一のデバイスクラス） | 再学習なしで後から品目クラスを追加したい場合 |
| reComputer R2000 シリーズ (Hailo-8) | Hailo-8 | EfficientNet-Lite0 224²、INT8 HEF | なし | Hailo-8 ハードウェアを使う場合。HEF はデバイス外でコンパイルし、導入時にダウンロード |

両 reComputer モデルには、同じモジュールとランタイムのファンレス産業用筐体（reComputer Industrial J3011 / J4012）があり、制御盤や屋外筐体に取り付けられます。

オープン語彙の列はデバイスカタログのリソース説明によるものです。SigLIP 2 視覚タワーは 371 MB の ONNX で、CPU onnxruntime のオフライン基準値で画像 1 枚あたり p50 66.93 ms かかり、アクセラレータが必要です。

**④ その他** — MQTT コンシューマ（パッケージは 1883 で待ち受けるローカル broker を同梱）。フタや仕分け表示灯を使う場合は、駆動ハードウェアと GPIO コールバックの統合コードが必要です。出荷時はどのピンにも割り当てていません。主処理チェーンにインターネット接続は不要です。

## 現場での導入方法

先に画角とトリガー方式を決め、その後ソフトウェアを導入します。難易度は **intermediate** で、初回導入は約 **35 分** です。

### 一、ハードウェアの設置：画角とトリガーを決める

:::tip[1 枚に 1 つ、十分な大きさで]
このチェーンに検出器はありません。1 フレームに 2 つの物が写っていても答えは 1 つで、どちらを指すかは定まりません。画面内で物が小さすぎると分類性能が下がります。カメラは投入エリアを見下ろす位置に取り付けて 1 つの物が十分な割合を占めるようにし、導入前にトリガー方式をボタン、HTTP、動体検知のどれにするか決めてください。
:::

### 二、ソフトウェアを導入する

デバイスごとの手順はソリューションページにあります。現場に合わせて構成を選ぶと、対応するアプリケーションパッケージをダウンロードできます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.co.jp/solutions/reference-designs/edge_waste_sorting" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>構成を選択してダウンロード 🖱️</font></span></strong>
    </a>
</div><br />

どちらのプリセットも手順は同じです：

1. **プリセットとホストを選びます。** `Camera + reComputer J30 / J40 (Orin)` または `Camera + reComputer R2000 series (Hailo-8)`。
2. **ごみ分別ランタイムを配備します**（必須）。Orin では配備中にデバイス上で TensorRT engine を構築します。engine は GPU アーキテクチャと TensorRT バージョンに紐づくため、事前にコンパイルして配布することはできません。Hailo では配備手順が 3 つの Hailo ABI チェックを行った後、HEF をダウンロードします。
3. **リアルタイムの分類を確認します**（任意）。ポート 8080 のローカルパネルに MJPEG プレビュー、ヘルスカウンタ、最近の結果の top3 が表示されます。何かを接続する前に、ここで画角を確認してください。
4. **トリガーを接続し、分類を 1 回確認します**（必須）。ボタン、HTTP 呼び出し、動体イベントのいずれか 1 回で、`waste/<stream-id>/results` にちょうど 1 件の MQTT メッセージが出て、`category` と `confidence` が `top3[0]` と一致することを確認します。
5. **オープン語彙トラックに切り替えます**（任意、Orin のみ）。配備時に `model.track: open_vocab` を設定します。

## 利用できるインターフェース

分類ホストは 2 つのインターフェースと 1 つのプロセス内コールバックを提供し、すべてホスト自身が処理します。

- **運用・記録システム** — ポート 1883 の `waste/<stream-id>/results` を購読します。分類 1 回につき JSON 1 件です。
- **セルフ端末の画面、PLC ゲートウェイ、テストスクリプト** — ポート 8080 の `POST /trigger` で撮影と分類を 1 回実行します。`/events` は最近の結果とその top3 を返します。
- **フタ、リレー、仕分け表示灯** — 非同期の GPIO コールバックが 4 分類の結果を渡します。ピンには割り当てておらず、割り当てのコードは統合作業です。

### インターフェース全体の表

| 種類 | 場所 | 内容 | 備考 |
|---|---|---|---|
| `mqtt` | 1883、`waste/<stream-id>/results` | `type`、`version`、`taxonomy_version`、`device`、`stream_id`、`frame_id`、`timestamp`、`trigger`、`inference_time_ms`、`pipeline_ms`、`category`（`class_id`、`class_name`、`china_category`、`china_category_zh`）、`confidence`、`top3[]`、`image_ref`、`model`（名前、backbone、入力、`onnx_sha256`、アクセラレータ） | 分類 1 回につき 1 件。publish 前にイベント schema で検証 |
| `http` | 8080、`/trigger` `/preview.mjpg` `/healthz` `/events` | `POST /trigger` で撮影と分類を 1 回実行（トリガー元は `http` と記録）。ライブ MJPEG。推論時間、トリガーとデバウンスの回数、MQTT の回数を含むヘルス情報。最近の結果と top3 | ローカルパネル、認証なし |
| GPIO コールバック | プロセス内 | 4 分類の結果を非同期に渡す | `actuator.enabled` の既定は false。ピン割り当てなし |

フィールドを読むときの注意点 2 つ：

- **画像は payload に入りません。** `image_ref.kind` は `none`、`local`、`object_store` のいずれかです。payload に base64 の画像データが入っていれば契約違反で、publish 前に拒否されます。
- **`category` は常に `top3[0]`、`confidence` は常に `top3[0].confidence` と等しくなります。** どちらも publish 前に確認し、不合格の payload はカウントして破棄するため、受信側で突き合わせる必要はありません。

同梱の MQTT broker は匿名接続を許可しています。ローカルでの立ち上げ用で、本番では認証付きの broker に切り替えてください。

## 性能と実測データ {#measured-data}

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/suharvest/sensecraft-solutions/tree/main/solutions/edge_waste_sorting" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>sensecraft-solutions / edge_waste_sorting</font></span></strong>
    </a>
</div><br />

### デバイス実測：reComputer RK3588 シリーズ

| モデル / 精度 | 遅延 p50 / p95（mean） | CPU 参照値との一致率 | 正解に対する精度 | 条件 |
|---|---|---|---|---|
| **EfficientNet-Lite0（m1c）、fp16** | 7.906 ms / 8.129 ms（7.041 ms） | 1.00 | 0.78 | val 画像 50 枚 |
| EfficientNet-Lite0（m1c）、int8 calib64+normal | 3.780 ms / 3.984 ms（3.807 ms） | 0.90 | 0.72 | 校正 63 枚、`normal` アルゴリズム |
| EfficientNet-Lite0（m1c）、int8 calib64+mmse | 3.785 ms / 3.981 ms（3.808 ms） | 0.98 | 0.78 | 校正 63 枚、`mmse` アルゴリズム |
| EfficientNet-Lite0（m1c）、int8 calib256+normal | 3.766 ms / 3.920 ms（3.500 ms） | 0.90 | 0.72 | 校正 252 枚、`normal` アルゴリズム |
| **EfficientNet-Lite0（m1c）、int8 calib256+mmse** — 推奨 | 3.803 ms / 4.003 ms（3.834 ms） | **1.00** | **0.78** | 校正 252 枚、`mmse`。一致率と精度は fp16 と同等で、**52% 高速** |
| SigLIP 2 視覚タワー、fp16 | 169.4 ms / 170.5 ms | 埋め込みコサイン mean **0.999617**、min 0.998841 | — | 191 MB の `.rknn` |

条件：rknn-toolkit2 2.3.2 で変換、librknnrt 2.3.2、`core_mask=AUTO`、per-channel 量子化。`mmse` の変換時間は `normal` の 40–90 倍（校正 256 枚で 17.3 分対 11.5 秒）ですが、変換時に一度かかるだけで実行時には影響しません。

再現：`solutions/edge_waste_sorting/evaluation/runs/2026-09-06-m1c-rk3588-radxa`

reComputer RK3576 シリーズでは SigLIP 2 視覚タワーと置き換え済みの MobileNetV3-Small だけを実行しました。SigLIP 2 視覚タワー fp16 は p50 152.51 ms / p95 176.59 ms、埋め込みコサイン mean **0.99965**、min 0.99900 です。

再現：`evaluation/runs/2026-09-06-rk3576-cat`

### ベースライン分類器の精度：EfficientNet-Lite0（m1c、出荷版）

| 指標 | 値 | 条件 |
|---|---:|---|
| 素材 top-1（8 クラス） | **0.8877** | val 7417 枚。onnxruntime 1.25.1 CPU。ONNX `e9f9e847…`、13,477,056 B |
| 素材 top-5 | 0.9833 | 同上 |
| 中国 4 分類 top-1 | **0.9500** | 同上。8 クラスの argmax から表で対応付け |
| macro-F1（サンプルのある 7 クラス） | 0.8511 | `textile` を除外 — サンプル 0 |
| 素材 top-1、保留 test | 0.8802 | test 7290 枚 |
| 画像 1 枚あたりの推論遅延、CPU | mean 16.796 ms / p50 14.724 ms / p95 28.718 ms | `session.run` のみ、CPU のオフライン基準値、batch 1。デバイスの指標ではありません |
| 確信度 0.5 未満の画像 | 318 枚（4.3%） | val |
| ORT PTQ INT8 と fp32 の一致率 | 0.965 | val 画像 200 枚、per-channel + MinMax、崩壊なし |
| Hailo DFC エミュレータ INT8 と CPU の top-1 一致率 | 0.890 | val 画像 200 枚。正解に対する精度 0.755（同じ画像で CPU 0.795）。出荷 HEF より前のビルドで、ボード上の遅延は含みません |

4 分類 top-1（0.9500）が素材 top-1（0.8877）より高いのは、glass、metal、plastic 間の混同がすべて資源ごみに入るためです。4 分類だけを見ると素材の判別力を過大に評価します。

再現：`evaluation/runs/2026-09-06-m1c-cpu`、`evaluation/runs/2026-09-06-m1c-hef`

### オープン語彙トラック：SigLIP 2 ViT-B/16

| 指標 | 値 | 条件 |
|---|---:|---|
| 素材 top-1（8 クラス） | 0.8501 | val 7417 枚。英語プロンプトセット `waste8-en/v1`、テンプレート `t02`、16-shot α=0.8、temperature 0.0075 |
| 素材 top-5 | 0.9987 | 同上 |
| 中国 4 分類 top-1 | 0.9393 | 同上。階層経路（8 クラスを予測してから対応付け） |
| macro-F1（7 クラス） | 0.7460 | 同上 |
| ECE（15 bins） | 0.0221 | 同上 |
| オープンセット AUROC | 0.7538 | サンプルのある 7 クラスの平均、1 クラス除外法、score = `1 - max softmax` |
| 中英一致率（同じ画像） | 素材 0.8698 / 4 分類 0.9143 | 1 つの視覚埋め込み、3 つのプロトタイプ集 |
| 素材 top-1、保留 test | 0.8620 | test 7290 枚 |
| 画像 1 枚あたりの推論遅延 | p50 66.93 ms / p95 91.62 ms | CPU のオフライン基準値、batch 1、視覚タワーのみ。デバイスの指標ではありません |

ベースラインとの比較（同じ split）：

| 指標 | ベースライン（MobileNetV3-Small） | オープン語彙（SigLIP2-B/16） |
|---|---:|---:|
| 素材 top-1、val | **0.8792** | 0.8501 |
| 素材 top-1、test | **0.8807** | 0.8620 |
| 中国 4 分類 top-1、val | **0.9519** | 0.9393 |
| macro-F1、val | **0.8292** | 0.7460 |
| ECE（15 bins）、val | 0.0308 | **0.0221** |
| オープンセット AUROC | なし（閉集合ヘッドは再学習なしにクラスを外せません） | **0.7538** |
| 中英一致率 | テキスト側なし | **0.8698 / 0.9143** |
| ゼロショットの新クラス | 再学習が必要 | **プロンプトを変更** |
| CPU p50 遅延 | **1.57 ms** | 66.93 ms |

この比較のベースラインは置き換え済みの MobileNetV3-Small です。出荷版の EfficientNet-Lite0 はこの split で val top-1 0.8877、CPU p50 約 14.7 ms で、遅延の倍率は 40 倍から 4–5 倍に縮まります。

再現：`evaluation/runs/2026-09-05-w1-cpu`

### 配備サイズ

| 項目 | サイズ |
|---|---|
| ベースライン ONNX（`efficientnet_lite0_waste8.onnx`） | 13,477,056 B |
| SigLIP 2 視覚タワー ONNX（`siglip2_vision_224.onnx`） | 371,695,898 B |
| プロトタイプ集 + 校正レポート | 合計約 155 KB |

### ランタイムと主要パラメータ

| デバイス | モデル | 精度 | ランタイム | モデルをデバイスに届ける方法 |
|---|---|---|---|---|
| reComputer J30 / J40 シリーズ | EfficientNet-Lite0 224² | FP16 | TensorRT | 配備時にデバイス上で engine を構築します。GPU アーキテクチャと TensorRT バージョンに紐づくため、事前コンパイルして配布できません |
| reComputer J40 シリーズ（任意のオープン語彙トラック） | SigLIP 2 ViT-B/16 視覚タワー + 固定テキストプロトタイプ | — | — | `model.track: open_vocab` |
| reComputer R2000 シリーズ + Hailo-8 | EfficientNet-Lite0 224² | INT8（uint8 HEF、`optimization_level=2`） | HailoRT 4.21.0 | HEF はデバイス外で DFC 3.31.0 によりコンパイルし、配備時にダウンロードします |
| reComputer RK3588 シリーズ | EfficientNet-Lite0 224² | INT8（calib256+mmse） | librknnrt 2.3.2 | デバイス外で rknn-toolkit2 2.3.2 により変換します |

- トリガーのデバウンス：**800 ms**。前回の処理中に届いたトリガーは統合され、キューには入りません
- 連続モード：top-1 が **3 フレーム**連続で同じときだけ送信します。トリガーモードは 1 回の撮影で 1 つの答えです
- `actuator.enabled`：デフォルト `false`。GPIO コールバックはどのピンにも割り当てていません

### 既知の劣化

- `textile` は学習と評価のサンプルが 0 です。どちらの元データセットにも布のクラスがありません。8 番目の logit は残しています（ONNX 出力は `1×8` のまま）が、モデルがこのクラスを予測したことはなく、すべての表でこのクラスは `n/a` です。
- `hazardous`（有害ごみ）に対応する素材クラスはありません。schema の安定のため列挙に残していますが、現在のビルドは出力しません。
- `organic` は学習セットの 48.9%、val の 47.1% を占め、再現率 0.9791 はほかのクラス（0.70–0.88）より大幅に高くなります。モデルは判断に迷う物をこのクラスに寄せます。
- `residual` の val サンプルは 20 枚だけです。オープン語彙トラックでの適合率は 0.2754、1 クラス除外法の AUROC は 0.5795 で、ランダムに近い値です。
- オープン語彙トラックで中国語プロンプトから 4 分類を直接予測すると 0.8478 にとどまり、階層経路（8 クラスを予測してから対応付け）は 0.9393 です。
- 置き換え済みの MobileNetV3-Small は 3 つのエッジ経路すべてで INT8 が崩壊しました。Hailo DFC エミュレータの一致率 0.115、reComputer RK3576 シリーズ 0.10、reComputer RK3588 シリーズ 0.22（fp16 は 0.98–1.00）で、そのためベースラインを EfficientNet-Lite0 に変更しました。RK3588 の INT8 の結果は RK3576 にはそのまま当てはまりません。
- SigLIP 2 視覚タワーは Hailo-8 向けの INT8 量子化に失敗し（`hailo optimize` が `ne_activation_mul_and_add78` 層でエラー）、HEF はありません。オープン語彙トラックは reComputer R2000 シリーズでは動きません。
- どちらのデータセットも単品の写真（TrashNet は白い背景板、GC3 は物体が中心からずれ、よく隠れています）で、濡れた、潰れた、積み重なった、逆光の、一部が袋に入ったごみは含みません。実際の投入口での精度は表の数値より下がります。

### 次のステップ

- reComputer R2000 シリーズ（R2035-12、Hailo-8）での検証画像 7417 枚全体のマテリアル判定と 4 分類の実測、および reComputer J40 シリーズ（J4012）でのトリガーから結果までの遅延と engine 構築時間を「性能と実測データ」に追加します。

## データと素材の出典

- **TrashNet** — [github.com/garythung/trashnet](https://github.com/garythung/trashnet)、**MIT License, Copyright (c) 2017 Gary Thung**。2 つの一次情報に基づきます：リポジトリの commit `6fa2b87` にある `LICENSE` ファイルと、公式 HuggingFace データセットカードの `license` フィールドです。MIT は著作権表示とライセンス表示の保持を求め、継承条項はありません。
- **Garbage Classification 3 — Material Identification（Roboflow Universe）** — **CC BY 4.0**。エクスポートに付属する `README.dataset.txt` に明記されています。Roboflow Universe 上のプロジェクトパスは `material-identification/garbage-classification-3` です。
- **SigLIP 2** — [google/siglip2-base-patch16-224](https://huggingface.co/google/siglip2-base-patch16-224)、revision `75de2d55…`、Apache-2.0。任意のオープン語彙トラックだけで使用します。
- **MobileNetV3-Small の ImageNet 初期重み**（torchvision）— BSD-3-Clause。
- **上流のランタイムコード** — Apache-2.0。
- **アーキテクチャ図** — パッケージのデバイスカタログと出力インターフェースから作成しました。データセットの画像は含みません。

これらのデータセットから派生した対外資料では、次の帰属表示をそのまま使用してください：

```
TrashNet — Gary Thung and Mindy Yang, https://github.com/garythung/trashnet,
MIT License, Copyright (c) 2017 Gary Thung.
Garbage Classification 3 — Material Identification / Roboflow Universe,
https://universe.roboflow.com/material-identification/garbage-classification-3,
licensed CC BY 4.0.
```

**データセット由来の画像はこのパッケージにコミットしていません。** どちらのライセンスも再配布を認めています。
