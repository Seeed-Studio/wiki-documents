---
description: エッジ組立検査の構築、機器、出力契約と実測データ
title: 'エッジ組立検査：欠品、寸法、Modbus、MQTT'
sidebar_label: 'エッジ組立検査'
keywords:
  - assembly inspection
  - missing part detection
  - dimension measurement machine vision
  - ArUco calibration
  - Modbus TCP inspection
  - MQTT MES inspection event
  - edge AI inspection
  - reComputer
  - Jetson Orin
  - Hailo-8
  - YOLOX
  - TensorRT
image: https://files.seeedstudio.com/wiki/reference-design/edge_inspection_assembly/overlay-defect-1-13424b53.jpg
slug: /solutions/edge-assembly-inspection
sidebar_position: 3
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-10-30'
url: https://wiki.seeedstudio.com/ja/solutions/edge-assembly-inspection/
generated_from: sensecraft-solutions@edge_inspection_assembly
---

:::caution[利用上の注意]
寸法の結果は校正基準で画素を換算した値で、受入試験の校正済みゲージの代わりにはなりません。同梱の検出器は裸基板の欠陥データセット DeepPCB で学習しており、その 6 クラスは組立欠品ではありません。自社製品に使う前に、期待項目リストを自社のものに置き換え、自社データで測定してください。
:::

## このソリューションでできること

固定カメラ 1 台で 1 つの検査ステーションを監視します。各フレームを検出器に通し、欠品比較と寸法測定を行い、1 つの OK/NG 判定にまとめてラインのタクトで出力します。

- **欠品比較** — テンプレートの期待項目リスト（`class` + ROI + 一致距離）を検出結果と照合します。リストにありフレームにない項目は `missing`、リスト外で見つかった項目は任意で `extra` として報告します。
- **寸法測定** — 測定面と同じ平面に置いた校正基準から `mm_per_pixel` を求め、測定 ROI 内の対象の最小面積矩形をミリメートルに換算し、基準値 ± 許容差と比較します。
- **判定統合** — `defect`、`missing`、`extra`、`dimension_out_of_tolerance` のいずれか 1 つでフレームは NG になります。4 つは個別に無効化できます。

判定は 2 か所へ書き込みます。PLC 向けの Modbus TCP holding register と coil、MES または履歴システム向けのフレームごとの MQTT JSON イベントです。register は coil より先に書き込むため、coil で動作する PLC は同じ判定の register データを読み取ります。

- パッケージのソースと導入ガイド： [sensecraft-solutions / solutions/edge_inspection_assembly](https://github.com/suharvest/sensecraft-solutions/tree/main/solutions/edge_inspection_assembly)
- 構成の選択と導入： [reference design page](https://www.seeed.co.jp/solutions/reference-designs/edge_inspection_assembly)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <div class="info-content">
                <h3>機器はすぐに使えます</h3>
                <p>reComputer J30 / J40 シリーズまたは R2000 シリーズにアプリケーションパッケージを入れれば動作します。初回導入は約 60 分です。J40 シリーズでの実測はキャプチャから coil まで P50 10.92 ms です。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>コードはオープンソース</h3>
                <p>ランタイムコードは Apache-2.0 です。検出器は YOLOX-Tiny（Apache-2.0）で、Ultralytics のコードや重みを含まず、AGPL の義務はありません。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" /></svg>
            </div>
            <div class="info-content">
                <h3>自社のカメラ、PLC、MES をそのまま接続</h3>
                <p>RTSP / ONVIF / USB カメラを使えます。判定は Modbus TCP と MQTT で出力します。HR 0–7 は表面検査ソリューションと同じ register 配置のため、既存の PLC プログラムは変更不要です。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>すべて現場で動作</h3>
                <p>取得、推論、判定、出力はすべて検査ホスト上で完結し、主処理チェーンにインターネット接続は不要です。</p>
            </div>
        </li>
    </ul>
</div>

### デモが実際に示すもの

以下の画像はパイプラインの実際の出力です：

- DeepPCB 検証画像（`12300060_test.jpg`）1 枚に対する検出器の出力です。各ボックスは ONNX モデルの検出結果です。同梱サンプル構成の 6 項目の期待リストは、このフレームの ground-truth ボックスから生成しています。
- 基準寸法の合成 ArUco シーン：左のマーカーから mm/px を求め、右のブロックを換算します（60 × 40 mm、判定 OK）。
- 大きすぎる部品を置いた同じシーン：基準 60 mm、許容差 1 mm に対して 62.25 mm を測定し、判定 NG、Modbus HR 10 = 6225、HR 11 = 2 です。

DeepPCB 検証画像に対する検出器の出力：

<div align="center">
  <img class='img-responsive' width={520} src="https://files.seeedstudio.com/wiki/reference-design/edge_inspection_assembly/overlay-defect-1-13424b53.jpg" alt="DeepPCB 検証画像 12300060_test.jpg に対する検出器の出力。ボックスはモデルの実検出"/>
</div>

<div align="center">
  <img class='img-responsive' width={520} src="https://files.seeedstudio.com/wiki/reference-design/edge_inspection_assembly/overlay-defect-2-13779bda.jpg" alt="2 枚目の DeepPCB 検証画像に対する同じモデル"/>
</div>

寸法処理：左のマーカーから mm/px を求め、右のブロックを換算します。基準寸法では判定 OK です：

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_inspection_assembly/dimension-nominal-be46361b.png" alt="基準寸法の合成校正シーン：マーカーが mm/px を与え、ブロックは 60 × 40 mm、判定 OK"/>
</div>

同じシーンに大きすぎる部品を置くと 62.25 mm、判定 NG、Modbus HR 10 = 6225、HR 11 = 2 です：

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_inspection_assembly/dimension-oversize-384a1faf.png" alt="大きすぎる部品：基準 60 mm、許容差 1 mm に対して 62.25 mm、判定 NG"/>
</div>

部品を 25° 回転させても、最小面積矩形から同じ寸法が得られます：

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_inspection_assembly/dimension-rotated-1ad0cd88.png" alt="部品を 25° 回転させても、最小面積矩形から得られる寸法は変わらない"/>
</div>

寸法シーンは `evaluation/make_dimension_fixture.py` が既知の mm/px で生成した合成画像で、ground truth は生成パラメータです。実際のステーションの写真ではありません。

## 必要な機器

各ステーションに必要なのは、カメラ、検査ホスト、判定を受け取るシステムの 3 つです。

**① カメラ** — 任意の RTSP または ONVIF カメラ。USB カメラや録画ファイルも使えます。型式は問いませんが、基板または組立品全体をフレームに収め、テンプレート作成後は画角を変えないでください。

**② 検査ホスト** — 1 台で何ステーションを処理できるかを決めます。

| | 検査ホスト | アクセラレータ | 配備時の検出器 | 実測ストリーム数 | 選択する場面 |
|---|---|---|---|---:|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-114110311-recomputer-super-j3010-nano-8g.jpg" alt="reComputer Super J3011" width="110" /> | [reComputer Super J3011 (Jetson Orin Nano 8GB)](https://www.seeedstudio.com/reComputer-Super-J3011-p-6444.html)<br/>単一ステーションホスト | Orin GPU | YOLOX-Tiny 640², TensorRT FP16 | 1 ストリーム、67 h 連続稼働 | 1 ステーション |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-114110311-recomputer-super-j3010_1.jpg" alt="reComputer Super J4012" width="110" /> | [reComputer Super J4012 (Jetson Orin NX 16GB)](https://www.seeedstudio.com/reComputer-Super-J4012-p-6443.html)<br/>複数ステーション集約ホスト | Orin GPU | YOLOX-Tiny 640², TensorRT FP16 | 8 安定 / 12 劣化 / 24 失敗 | 1 台で複数ステーションを処理する場合。精度と速度のデータはこのモジュールで実測 |

ストリーム容量：各ストリーム 640²、10 fps、各段階 5 分、全掃引を 2 回実行し、試験中は MQTT と Modbus を無効化しました。両方の出力を有効にすると処理できるストリーム数は 8 を下回ります。

両 reComputer モデルには、同じモジュールとランタイムのファンレス産業用筐体（reComputer Industrial J3011 / J4012）があり、盤内に取り付けられます。

**③ その他** — 寸法検査を行う場合は測定面と同じ平面に置く校正基準（既定は ArUco マーカー `DICT_4X4_50`、または幅が既知の物体）、カメラとホスト間の Ethernet、Modbus TCP マスター（PLC）および／または MQTT コンシューマが必要です。主処理チェーンにインターネット接続は不要です。

### 選定における制約・非推奨条件

- **単一工程 vs 複数工程**：J3011 は 1 工程 1 カメラ向けです。1 台で複数工程（2 系統超）や高速撮影を監視する場合は J4012 を推奨します。
- **動的モデル更新の制約**：Hailo-8 は事前オフラインコンパイルが必要です。現場で直接モデルを微調整・動的更新する場合は Jetson シリーズを選定してください。

## 現場での導入方法

先にカメラと光学系を固定し、その後ソフトウェアを導入します。

### 一、ハードウェアの設置：最初にカメラを固定する

:::tip[設置後はカメラを動かさない]
期待項目の ROI は画像座標で保存されます。カメラを動かす、取り付け直す、ピントを合わせ直すと、`assembly.expected[]` テンプレート全体を作り直す必要があります。ラインでカメラに手を入れたら、そのステーションのテンプレートを作り直してください。
:::

基板または組立品全体をフレームに収めてください。寸法検査では、校正基準を測定面と同じ平面に置きます。作動距離が異なるとそのまま測定誤差になり、エラーは出ません。校正基準がない場合、寸法セクションは `uncalibrated`、Modbus HR 11 = 4 を報告し、数値は出力しません。

### 二、ソフトウェアを導入する

デバイスごとの手順は reference design ページにあります。現場に合わせて構成を選ぶと、対応するアプリケーションパッケージをダウンロードできます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.co.jp/solutions/reference-designs/edge_inspection_assembly" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>構成を選択してダウンロード 🖱️</font></span></strong>
    </a>
</div><br />

どちらの経路も手順は同じです：

1. **プリセットとホストを選びます。** `Camera + reComputer J30 / J40 (Orin)` または `Camera + reComputer R2000 series (Hailo-8)`。難易度は **advanced** で、初回導入には約 **60 分** を見込んでください。
2. **検査ランタイムを配備します**（必須）。Orin では初回配備時にデバイス上で TensorRT engine を構築し（約 5 分）、engine はそのデバイスと TensorRT バージョンに紐づきます。Hailo では INT8 HEF をデバイス外でコンパイルし、配備時にダウンロードするためボード上の構築は不要ですが、前提条件が 3 つあります。Python のマイナーバージョンが一致すること、HailoRT 4.21.x のドライバ、ユーザーライブラリ、Python バインディングの 3 つが同じバージョンであること、カーネルパラメータ `hailo_pci force_desc_page_size=4096` です。
3. **寸法校正を設定します**（任意）。設定しなくても欠品チェーンは動作し、寸法セクションは `enabled: false` または `uncalibrated` を報告します。
4. **判定を確認します**（任意）。ポート 8080 のローカル Web パネルにヘルスカウンタ、最近のイベント、検出ボックスと組立 ROI を描いた MJPEG プレビューが表示されます。PLC を配線する前に、カメラが必要な範囲を写していることをここで確認してください。
5. **SAM2 アノテーションツールで期待リストを生成します**（任意）。ツールはエッジデバイスではなくオフラインのワークステーションで動作し、フレームループには入りません。人が枠を描き、SAM 2.1 Hiera-Small がピクセルマスクを生成し、それを組立 ROI に拡張します。GPU 不要の numpy Otsu-flood バックエンドも同梱しています。

本番前に `assembly.expected[]` を自社の組立位置に置き換えてください。同梱リストは DeepPCB 画像 1 枚から生成したもので、チェーンの動作確認用です。

## 利用できるインターフェース

データは検査ホストの 3 つのインターフェースから出力され、すべてホスト自身がローカルで提供します。

- **OK/NG coil ですでに動作している PLC** — ポート 502、unit 1 で Modbus TCP を読みます。HR 0–7 は表面検査 contract v1 と同じ配置なので、既存プログラムはそのまま動作します。新しい情報は HR 8–11 にあります。
- **MES または履歴システム** — ポート 1883 の `<device-name>/inspection/<stream-id>/results` を購読します。処理したフレームごとに 1 件の JSON イベント、schema `2.0.0` で、publish 前に契約検証を行います。
- **オペレーターまたは立ち上げ担当エンジニア** — ポート 8080 の HTTP パネル。

`<device-name>` は配備時に設定するトピックの先頭セグメントです。ライン、セル、ステーション単位で命名すれば、1 つの broker 上の複数ホストを区別できます。stream id は payload 内にも書き込まれるため、下流はトピックを解析せずに送信元を判別できます。

### インターフェース全体の表

| 種類 | 場所 | 内容 | 備考 |
|---|---|---|---|
| `mqtt` | 1883、`<device-name>/inspection/<stream-id>/results` | `verdict`、`verdict_reasons`、`defect_count`、`detections[]`、`assembly`（`enabled`、`expected_count`、`matched_count`、`missing_count`、`extra_count`、各欠品項目のラベルと ROI）、`dimension`（`enabled`、`calibrated`、`mm_per_pixel`、`out_of_tolerance_count`、測定ごとの状態付き `measurements[]`） | schema `2.0.0`。2 つのセクションは常に存在し、そのソースでモジュールが無効なら `enabled: false` |
| `modbus_tcp` | 502、unit 1、Coil 0/1 + HR 0–11 | Coil 0 = NG、Coil 1 = OK（排他）。HR 0–7 は contract v1 と同じ：主クラス、欠陥数、bbox ×10000、ハートビート。HR 8 = 欠品数、HR 9 = 余剰数、HR 10 = 測定 mm ×100、HR 11 = 許容差コード | 1 つのロック内で coil より先に register を書き込む |
| `http` | 8080、`/healthz` `/events` `/preview.mjpg` | fps、推論時間、欠品と寸法失敗のカウンタ、最近のイベント、ボックスと ROI 付き MJPEG プレビュー | ローカルパネル、認証なし |

**HR 11 許容差コード**：`0` ok、`1` undersize、`2` oversize、`3` not_found、`4` uncalibrated。

`verdict_reasons` はリストで、4 つの理由（`defect`、`missing`、`extra`、`dimension_out_of_tolerance`）が同時に出ることがあります。ROI はストリームごとに設定します（`sources[].assembly` と `sources[].dimension`）。アノテーションツールで生成した `assembly` セクションには `roi_profile_sha256` が付き、現場で動いている ROI profile を特定できます。手書きの ROI では省略するか `null` です。

```json
{
  "schema": "2.0.0",
  "device": "assembly-station-01",
  "stream": "cam_pcb_top",
  "timestamp": 1729000000.456,
  "verdict": "NG",
  "verdict_reasons": ["missing"],
  "defect_count": 0,
  "detections": [],
  "assembly": {
    "enabled": true,
    "expected_count": 6,
    "matched_count": 5,
    "missing_count": 1,
    "extra_count": 0,
    "missing_items": [
      {"label": "capacitor_c12", "roi": [120, 240, 160, 280]}
    ]
  },
  "dimension": {
    "enabled": true,
    "calibrated": true,
    "mm_per_pixel": 0.125,
    "out_of_tolerance_count": 0,
    "measurements": [
      {"name": "pcb_width", "value_mm": 60.05, "status": "ok"}
    ]
  }
}
```

フィールドを読むときの注意点 3 つ：

- **`HR 10 = 0` のときは先に HR 11 を読んでください。** `3` と `4` は測定値がないことを示し、0 mm という測定結果ではありません。
- **v2 では `verdict = NG` でも `defect_count` が 0 の場合があります。** 欠品や寸法の許容差外れでも NG になります。
- **coil と register が同じサンプルなのは書き込み側だけです。** coil と register を 2 つの Modbus リクエストで読むと、判定レートが高いときに 2 回の判定にまたがることがあります。約 20 判定/秒で実測されています。気になる場合は register を先にポーリングし、coil をトリガーとして使ってください。

1 台のホストで複数ストリームを扱う場合、Modbus register にはいずれかのストリームの最新判定が入ります。ストリームごとの結果は MQTT から取得してください。同梱の MQTT broker はローカルの匿名 broker です。本番では認証付きの broker を指定してください。

## 性能と実測データ {#measured-data}

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/suharvest/sensecraft-solutions/tree/main/solutions/edge_inspection_assembly" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>sensecraft-solutions / edge_inspection_assembly</font></span></strong>
    </a>
</div><br />

### 速度と遅延

「検出器スループット」は検出呼び出しのみです。「全パイプライン」は判定統合、Modbus、MQTT、契約検証を含み、スロットルなしです。「エンドツーエンド」は 10 fps のラインレートにスロットルした状態で、キャプチャから Modbus coil 書き込みまでです。

| デバイス | モデル / 精度 | 検出器スループット | 全パイプライン | エンドツーエンド capture → Modbus coil |
|---|---|---:|---:|---|
| reComputer J40 シリーズ（J4012、Orin NX 16GB） | YOLOX-Tiny 640²、TensorRT FP16 | 95.06 FPS（`detect()` P50 10.52 ms） | 89 FPS（P50 42.9 ms） | P50 10.92 ms / P99 11.18 ms、3000 サンプル、ドロップ 0。ゼロから配備（engine はデバイス上で構築）した後：P50 9.81 ms / P95 10.18 ms、n=300 |
| reComputer R2000 シリーズ + Hailo-8 | YOLOX-Tiny 640²、HailoRT INT8 HEF | ハードウェア 106.75 FPS（`hailortcli run`）、アプリケーション層 94.02 FPS（P50 10.64 ms） | 43.92 FPS | P50 11.89 ms / P99 16.08 ms |

条件：Orin の検出器の数値は、デコード済み 60 フレームで 500 回計測したものです。そのうち engine execute が約 6.3 ms、残りは letterbox と CPU NMS です。ストリーム容量は reComputer J40 シリーズ（J4012）で実測し、8 安定 / 12 低下 / 24 失敗です。1 ストリームあたり 640² / 10 fps、各段 5 分、全体を 2 回実行し、MQTT と Modbus は無効です。reComputer J30 シリーズ（J3011）は 10 fps の 1 ストリームを 67 時間連続稼働し、エンドツーエンド P50 11.45 ms でした。

再現：`solutions/edge_inspection_assembly/evaluation/`（Hailo-8：`evaluation/runs/2026-09-06-rpi-hailo/results.md`）

### 検出精度

| 指標 | 値 | 条件 |
|---|---:|---|
| mAP50、reComputer J40 シリーズ、TensorRT FP16 | **0.9876** | DeepPCB6 val、205 枚 / 1158 ボックス / 6 クラス。しきい値 0.35 で P 0.9284 / R 0.9741、FP 87 / FN 30、フレーム全体の見逃し 0 |
| mAP50-95、reComputer J40 シリーズ（ゼロから配備） | 0.8207 | 同じ val set。CPU 参照値 0.8213 |
| mAP50、reComputer R2000 シリーズ + Hailo-8、INT8 HEF | **0.9858** | 同じ val set。CPU 参照値との差 −0.0018 |
| mAP50、Hailo Dataflow Compiler エミュレータ、INT8 | 0.9924 | val 画像 20 枚 / 118 ボックスで、205 枚の 2 行とは直接比較しません。CPU、native、quantized の mAP50 / P / R は同一、ボックス単位で CPU ↔ quantized 119/120 一致 |

データセット：[DeepPCB](https://github.com/tangsanli5201/DeepPCB)（MIT）、6 クラス（open / short / mousebite / spur / copper / pin-hole）。パッケージには同梱していません。

再現：`solutions/edge_inspection_assembly/evaluation/`（エミュレータ：`evaluation/runs/2026-09-05-m3-hef/`）

### 欠品と寸法

| 項目 | 結果 | 条件 |
|---|---|---|
| 欠品の正解閉ループ | テンプレートフレームで 6 / 6 一致、基板を替えると 6 / 6 が欠品 | 期待リストは val 画像 1 枚の正解ボックスから生成（ROI = GT ボックス × 1.6、6 件）。基板を替えると `verdict_reasons` に `missing` と `defect` が並んで出ます |
| 寸法誤差（ArUco 校正） | 最悪相対誤差 **0.65%**、予算 1% | 合成 ArUco シーンで、レンズと照明の誤差は含みません。長辺 60 → 60.241 mm（+0.40%）、短辺 40 → 40.261 mm（+0.65%）、許容差 ±1.0 mm で `ok`。無圧縮 PNG と mp4v エンコード後で値は同じ |
| 単一ストリーム連続稼働 | 67 時間連続稼働、ドロップ 0 | reComputer J30 シリーズ（J3011）、単一ストリーム 10 fps。開始時ベースライン RSS 256–259 MiB、接合部温度 61–62 °C、再起動 0 |

再現：`evaluation/make_dimension_fixture.py`、`evaluation/smoke_cpu_dimension.py`。連続稼働の段階は `boundary.soak.yaml`

### ランタイムと主要パラメータ

| デバイス | モデル | 精度 | ランタイム | モデルをデバイスに届ける方法 |
|---|---|---|---|---|
| reComputer J30 / J40 シリーズ | YOLOX-Tiny 640² | FP16 | TensorRT | 初回配備時にデバイス上で engine を構築（約 5 分）。そのデバイスと TensorRT バージョンに紐づきます |
| reComputer R2000 シリーズ + Hailo-8 | YOLOX-Tiny 640² | INT8 | HailoRT 4.21.x | HEF はデバイス外で Hailo Dataflow Compiler によりコンパイル（optimization level 1 + Bias Correction）し、配備時にダウンロードします |

- 検出しきい値：`0.35`（評価設定）
- 校正基準：ArUco `DICT_4X4_50`（デフォルト）、または幅が既知の任意の基準物
- 判定理由：`defect` / `missing` / `extra` / `dimension_out_of_tolerance` は個別に無効化できます。`extra` は余剰部品の報告を有効にしたときだけ出ます

### 既知の劣化

- カメラの移動、再取り付け、再フォーカスの後は ROI テンプレートが使えなくなります。期待リストを作り直してください。
- 校正基準と被測定面の作動距離の違い、部品の傾き、低コントラストのエッジは、寸法誤差、`not_found`、`uncalibrated` を生じます。エラーは出ません。
- 精度は DeepPCB の裸基板欠陥での値です。人工欠陥は境界が明瞭で、6 クラスは組立の欠品でもありません。実際の組立シーンはより難しくなります。
- reComputer R2000 シリーズのボトルネックはホスト CPU です。全パイプラインは 43.92 FPS で、検出器スループットからの落ち幅は Orin より大きくなります。
- ストリーム容量は MQTT と Modbus を無効にして測定しました。両方を有効にすると 8 ストリームを下回ります。

## データと素材の出典

- **DeepPCB** — [github.com/tangsanli5201/DeepPCB](https://github.com/tangsanli5201/DeepPCB)、MIT ライセンス。同梱検出器の学習と、上記すべての精度数値の val set に使用しています。MIT ライセンスは再配布と商用利用を許可し、コピーや派生物に著作権表示を残すことを求めます。帰属表示はパッケージの画像とともに `gallery/ATTRIBUTION.md` で配布しています。画像は裸 PCB 銅層の二値化グレースケールスキャンで、人物や顧客を識別できる内容は含みません。**データセットはパッケージに含めていません。**
- **YOLOX** — [github.com/Megvii-BaseDetection/YOLOX](https://github.com/Megvii-BaseDetection/YOLOX)、Apache-2.0。検出器の backbone です。Ultralytics のコードや重みは使っていないため、AGPL の義務はありません。
- **SAM 2.1 Hiera-Small** — [github.com/facebookresearch/sam2](https://github.com/facebookresearch/sam2)、コードと checkpoint は Apache-2.0。オフラインアノテーションツールだけが使用します。
- **寸法サンプル画像** — 本プロジェクトの `evaluation/make_dimension_fixture.py` で生成した合成画像です。第三者の素材は含まず、帰属表示は不要です。
- **アーキテクチャ図** — パッケージのデバイスカタログと出力インターフェースから作成しました。

ランタイムコードは Apache-2.0 です。同梱モデルは DeepPCB で学習しており、適用範囲はページ冒頭の注意を参照してください。
