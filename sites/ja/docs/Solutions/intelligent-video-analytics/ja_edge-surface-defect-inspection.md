---
description: デバイス上の鋼材表面欠陥検査 — 6 つの欠陥クラス、Modbus TCP と MQTT による OK/NG 判定、Jetson Orin または Hailo-8 搭載 reComputer R2000 シリーズでの構築、導入概要、出力契約、実測データ。
title: 'エッジ表面欠陥検査：6クラス、Modbus、MQTT'
keywords:
  - surface defect inspection
  - steel strip defect detection
  - Modbus TCP inspection
  - MQTT MES inspection event
  - edge AI inspection
  - reComputer
  - Jetson Orin
  - Hailo-8
  - YOLOX
  - D-FINE
  - RT-DETRv2
  - EfficientAD anomaly detection
  - TensorRT
image: https://files.seeedstudio.com/wiki/reference-design/edge_inspection_surface/defect-overlay-pair-1cfaeb5a.jpg
slug: /solutions/edge-surface-defect-inspection
sidebar_position: 4
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/ja/solutions/edge-surface-defect-inspection/
generated_from: sensecraft-solutions@edge_inspection_surface
---

:::caution[利用上の注意]
付属の NEU-DET 重み（ONNX / HEF）は、リファレンスデザインの評価およびパイプライン検証用のベンチマークです。実際の商用運用では、現場の欠陥画像に基づいてモデルを再学習または再キャリブレーションすることを推奨します。本ソリューションは認証済みの品質・安全計測機器ではありません。
:::

## このソリューションでできること

固定カメラで鋼帯または部品を撮影します。デバイスはフレームごとに表面欠陥の有無を判定し、OK/NG 判定を 2 つの経路へ同時に送ります。PLC がラッチできる Modbus TCP coil と、そのフレームの全検出ボックスを含むフレームごと 1 件の MQTT JSON メッセージです。

- **6 つの欠陥クラス** — crazing（ひび割れ）、inclusion（介在物）、patches（斑点）、pitted surface（ピット）、rolled-in scale（押し込みスケール）、scratches（傷）。
- **検出、OK/NG ルール、2 つの出力はデバイス上で動作します。** 画像はデバイスの外に出ません。MQTT broker、Modbus TCP サーバー、読み取り専用のデバッグページも同じホスト上で動きます。
- **検出器とアクセラレータの選択肢。** Jetson では YOLOX-Tiny（既定）、D-FINE-S、RT-DETRv2-S、reComputer R2000 シリーズ（Hailo-8）では YOLOX-Tiny INT8 が動作します。

- パッケージソースと導入ガイド：[sensecraft-solutions / solutions/edge_inspection_surface](https://github.com/suharvest/sensecraft-solutions/tree/main/solutions/edge_inspection_surface)
- 構成の選択と導入：[reference design page](https://www.seeed.co.jp/solutions/reference-designs/edge_inspection_surface)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>機器はすぐに使えます</h3>
                <p>reComputer J30 / J40 シリーズにアプリケーションパッケージを入れれば動作し、初回導入は約 40 分です。Orin NX 16GB での実測はフレーム取得から coil 書き込みまで P50 9.3 ms、3000 サンプル中 20 ms を超えたものはありません。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" /></svg>
            </div>
            <div class="info-content">
                <h3>コードはオープンソース</h3>
                <p>ランタイムコードは Apache-2.0 です。既定の検出器は YOLOX（Apache-2.0）で、Ultralytics のコードや重みは一切使っていません。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <div class="info-content">
                <h3>自社のカメラ、PLC、MES をそのまま接続</h3>
                <p>任意の RTSP カメラを使えます。PLC は Modbus TCP unit 1 の coil と register を直接読み、MES は MQTT を購読します。ミドルウェアは不要です。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>すべて現場で動作</h3>
                <p>画像はデバイスの外に出ず、主処理チェーンにインターネット接続は不要です。</p>
            </div>
        </li>
    </ul>
</div>

### デモ画面

パッケージにはデータセット由来の画像を一切含めていません。含まれる素材は本ソリューション用に作成した構成図（データ経路、デバイス名、プロトコル名、ポート番号）だけで、写真や検出器の出力はありません。

検出器の出力を見るには、自社の映像で同梱のデバッグページを開いてください。ポート 8080 の `/preview.mjpg` はライブ MJPEG ストリームに検出ボックスを描画し、`/events` は最近の判定を一覧表示します。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_inspection_surface/defect-overlay-pair-1cfaeb5a.jpg" alt="鋼材表面欠陥のリアルタイム推論検出画面とアノテーション比較"/>
</div>

## 必要な機器

現場に必要なのはカメラとホストの 2 つです。

**① RTSP カメラ 1 台** — 鋼帯または部品に向けて固定し、欠陥が画面内で十分な割合を占めるようにします。実測データはすべて 640×640、10 FPS の画像で取得しました。照明は安定させてください。モデルは 1 つのデータセットの照明条件でしか学習していません。

**② 検査ホスト** — 接続できるカメラ台数と選べる検出器を決めます：

| | ホスト | 実測ストリーム | 選択する場面 |
|---|---|---:|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/110110147.jpg" alt="reComputer J3011" width="110" /> | [reComputer J3011](https://www.seeedstudio.com/reComputer-J3011-p-5590.html) (Jetson Orin Nano 8GB)<br/>単一カメラ向けのエントリーホスト | 1〜2 安定 | カメラ 1 台でコスト重視の場合。実測 capture→coil P50 10.56 ms |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) (Jetson Orin NX 16GB)<br/>実測ホスト | 8 安定 | カメラが 2 台以上の場合。以下のデータはすべてこのホストで測定 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/110110191.jpg" alt="reComputer Industrial J4012" width="110" /> | [reComputer Industrial J4012](https://www.seeedstudio.com/reComputer-Industrial-J4012-p-5684.html) (Orin NX 16GB、ファンレス) | J4012 と同じ | 制御盤内にホストを置く場合。モジュールとランタイムは同じで筐体だけが異なる |

3 つ目のホストは **Hailo-8 搭載の reComputer R2000 シリーズ**です。導入手順はありますが、構成ツールではまだ見積もりが出ません。

ストリーム容量は Orin NX 16GB で実測しました（各ストリーム 640² / 10 FPS）：**8 ストリームは安定、12 で劣化、24 で失敗**。12 ストリーム以上では総スループットが 110–112 FPS で頭打ちになります。アクセラレータのコンテキストはスレッドセーフではなく推論は直列に実行されるため、演算能力を足してもストリーム数は増えません。

このほか、デバイスと同じネットワーク上で Modbus TCP マスターとして動作する PLC またはライン制御装置（任意。register 表は unit 1 固定）と、ライン脇または盤内の商用電源が必要です。主処理チェーンにインターネット接続は不要です。

### 選定における制約・非推奨条件

- **並行処理とメモリ上限**：2 台以上の産業用カメラを接続する場合や、欠陥分類モデルを多段接続する場合は、8GB の J3011 ではなく 16GB の J4012 を選定してください（画像バッファによる OOM 回避）。
- **カスタム演算子の制約**：Hailo-8 搭載の reComputer R2000 では、Hailo コンパイラ非対応の独自演算子が含まれると CPU 実行にフォールバックし、遅延が増加します。

## 現場での導入方法

先にカメラと照明を固定し、その後ソフトウェアを導入します。

### 一、ハードウェアの設置：最初にカメラと照明を固定する

:::tip[設置後はカメラと照明を変えない]
学習データは 1 つのデータセット、1 つの照明条件から得たものです。照明、角度、表面仕上げを変えたときの精度は評価しておらず、しきい値では補えません。カメラと光源は設置した状態のまま保ってください。
:::

画角の要件：

1. **欠陥が 640×640 の画面内で十分な割合を占めること。** 広い視野では傷の幅が数画素しかなく、以下の精度データは当てはまりません。
2. **取り付け位置を固定すること。** 向きやピントを調整し直すと、測定時のスケールが変わります。
3. **ラインレートは 10 FPS で設定すること。** ランタイムはさらに速く動きますが、精度と遅延は 10 FPS で測定しています。

### 二、ソフトウェアを導入する

デバイスごとの手順は reference design ページにあります。ここでは流れだけを示します。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.co.jp/solutions/reference-designs/edge_inspection_surface" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>構成を選択してアプリパッケージをダウンロード 🖱️</font></span></strong>
    </a>
</div><br />

1. **構成を選ぶ** — 1 台のホストに何台のカメラをつなぐか、ホストをライン脇に置くか制御盤内に置くか。この 2 点でモジュールと筐体が決まります。
2. **アプリケーションパッケージを入れる** — コンテナイメージ、モデル、固定スコアしきい値（0.35）はすべてパッケージに含まれます。Jetson では初回導入時にデバイス上で TensorRT engine を構築し、Orin NX 16GB + TensorRT 10.3 で **291 s** を実測しました。engine は GPU アーキテクチャと TensorRT バージョンに紐づくため単体では配布しません。reComputer R2000 シリーズは INT8 HEF をダウンロードし、ボード上での構築は不要です。
3. **設定を入力する** — RTSP URL、`device_name` と `stream_id`（複数ラインで 1 つの broker を共有する場合や、1 台のホストで複数カメラを扱う場合に送信元を区別します）、入力フレームレート、Modbus unit id、Jetson では **Detector Track**：YOLOX-Tiny（既定、実測データあり）、D-FINE-S、RT-DETRv2-S。スコアしきい値は 0.25 / 0.35 / 0.45 の 3 段階で、0.35 が YOLOX で校正した導入値です。
4. **確認する** — ポート 8080 の `/preview.mjpg` を開いて自社の映像に検出ボックスが出ることを確認し、`/healthz` で推論時間、capture→coil 遅延、MQTT / Modbus カウンタを確認します。

初回導入には **40 分** を見込んでください。Orin では主に engine 構築に時間がかかります。Hailo 経路には前提条件が 3 つあります。Python のマイナーバージョンが一致すること、HailoRT 4.21.x のドライバ、ライブラリ、Python バインディングの 3 つが同じバージョンであること、カーネルパラメータ `hailo_pci force_desc_page_size=4096` です。導入手順で 1 つずつ確認します。

## 利用できるインターフェース

データはすべて検査ホスト自身が提供します：Modbus TCP 502、MQTT 1883、HTTP 8080。主処理チェーンにクラウドの工程はありません。

- **PLC またはライン制御装置** — Modbus TCP unit 1 を直接読みます。coil 0 が NG、coil 1 が OK で、両者は排他です。register は coil を書き込む**前に**アトミックに更新されるため、PLC が coil の切り替わりを見た時点で、HR 0–7 には同じフレームのクラス、欠陥数、主欠陥ボックス、ハートビートが入っています。register を先にポーリングし、coil をトリガーとして使ってください。
- **MES または履歴システム** — `<device-name>/inspection/<stream-id>/results` を購読します。フレームごとに 1 件の JSON で、判定、理由、欠陥数、そのフレームの全ボックスを 1 つの payload に含みます。1 台のホストで複数ストリームを扱う場合、ストリームごとの結果はここからしか取れません。Modbus には最後に書き込まれた判定だけが残ります。
- **立ち上げ用ノート PC または現場ダッシュボード** — ポート 8080 で `/preview.mjpg`（ボックス付き MJPEG）、`/healthz`（推論時間、capture→coil 遅延、MQTT と Modbus のカウンタ）、`/events`（最近の判定）を提供します。読み取り専用です。

`<device-name>` と `<stream-id>` は導入手順で設定します。`stream_id` は payload にも含まれるため、下流でトピックを解析する必要はありません。

### インターフェース全体の表

| トピック / ポート | 内容 | retained |
|---|---|---|
| Modbus TCP 502、unit 1、coil 0–1 | coil 0 = NG、coil 1 = OK、排他、register の後に書き込み | 該当なし（register 状態） |
| Modbus TCP 502、unit 1、HR 0–7 | HR 0 主欠陥クラス ID、HR 1 欠陥数、HR 2–5 主欠陥ボックス cx/cy/w/h 正規化 ×10000、HR 6–7 ハートビート（Unix 秒の uint32 上位ワードと下位ワード） | 該当なし |
| `<device-name>/inspection/<stream-id>/results` | `type`、`version`、`device`、`stream_id`、`frame_id`、`verdict`、`verdict_reason`、`defect_count`、`primary_class_id`、`coordinate_space`、`inference_time_ms`、`pipeline_ms`、`detections[]`（`slot`、`class_id`、`class_name`、`score`、`bbox`） | いいえ |
| HTTP 8080 `/preview.mjpg` `/healthz` `/events` `/snapshot.jpg` | ボックス付き MJPEG プレビュー、ヘルスカウンタ、最近の判定、単一フレームのスナップショット | 該当なし |

注意する 2 つのフィールド：**`slot` はフレーム内でスコア降順に並べた添字です。** パイプラインはトラッキングを行わないため、隣接する 2 フレームの `slot 0` が同じ欠陥とは限りません。任意の anomaly モジュールを有効にした場合、**`anomaly_score` は独立した追加フィールドで**、最上位の `verdict` には反映されません。

すべての MQTT メッセージは publish 経路で契約 schema の検証を受け、不合格のものはカウントして破棄します。同梱の broker は `allow_anonymous true` の設定です。本番ラインでは認証付きの broker を指定してください。

## 性能と実測データ {#measured-data}

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/suharvest/sensecraft-solutions/tree/main/solutions/edge_inspection_surface" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>sensecraft-solutions / edge_inspection_surface</font></span></strong>
    </a>
</div><br />

### 速度と遅延

| デバイス | モデル / 精度 | 検出器スループット | 全パイプライン | エンドツーエンド capture → Modbus coil |
|---|---|---:|---:|---|
| reComputer J40 シリーズ（J4012、Orin NX 16GB） | YOLOX-Tiny 640²、TensorRT 10.3 FP16 | 113.7 FPS（`detect()` P50 8.797 ms、P95 9.097、P99 9.223） | 10 FPS にスロットルすると 9.999 FPS、ドロップ 0。スロットルなしで 76.5–104.3 FPS | P50 9.298 / P95 9.441 / P99 9.549 ms、3000 サンプル、最大 9.926 ms |
| reComputer J30 シリーズ（J3011、Orin Nano 8GB） | YOLOX-Tiny 640²、TensorRT 10.3 FP16 | 105.2 FPS（純算力 198.5 FPS、GPU 5.03 ms） | 10 FPS スロットル時 9.999 FPS、ドロップ 0。スロットルなし 75.3 FPS | P50 10.56 / P95 10.82 / P99 11.10 ms；安定タクト、消費電力 18.2 W |
| reComputer R2000 シリーズ + Hailo-8 | YOLOX-Tiny 640²、HailoRT INT8 HEF | ハードウェア 106.75 FPS（`hailortcli run`、ハードウェア遅延 8.47 ms）、アプリケーション層 91.49 FPS（P50 10.93 ms、P95 13.19 ms） | スロットルなしで 46.14 FPS | P50 11.61 / P95 14.99 / P99 16.63 ms |

条件：入力は検証画像 290 枚を 640×640 / 10 FPS でつないだ合成動画で、フレーム間に時間的な連続性はありません。Orin の検出器の数値はデコード済み 60 フレームでの `detect()` 500 回で、letterbox、execute、CPU NMS を含み、そのうち engine 実行は約 5.0〜5.6 ms（約 178〜198 FPS）です。スロットルなしでは capture→coil の P50 が 35.90 ms（J4012）/ 41.3 ms（J3011）に上がり、増えた約 26〜30 ms は深さ 2 のキューでの待ちです。Hailo のアプリケーション層の数値はコンテナを使わずベアメタルで測定し、RSS は約 126 MB です。

| マルチストリーム段階 | ストリーム数 | ストリームあたり FPS | ドロップ | P95 遅延 |
|---|---:|---:|---:|---:|
| 安定 | 8 | 9.989 | 0.02% | 72.3 ms |
| 低下 | 12 | 9.306 | 6.83% | 104.0 ms |

マルチストリーム：reComputer J40 シリーズ、1 ストリームあたり 640² / 10 FPS、各段 5 分。24 ストリームは失敗段階で、1 ストリームあたり 4.593 FPS、ドロップ 53.95% です。プロセスは落ちませんが、入力の半分以上が黙って破棄され、そのワークは検査されません。

再現：`solutions/edge_inspection_surface/evaluation/runs/2026-09-05-m2-orin/results.md`（Orin）、`evaluation/runs/2026-09-06-rpi-hailo/results.md`（Hailo-8）

### 検出精度

| 指標 | 値 | 条件 |
|---|---:|---|
| mAP50、reComputer J40 シリーズ、TensorRT FP16 | **0.7577** | 検証画像 290 枚 / 706 ボックス、score 0.01 で 1 回推論 |
| 配備しきい値 0.35 での適合率 / 再現率 | **P 0.7652 / R 0.6969** | 同じ推論の後段フィルタ。TP 492 / FP 151 / FN 214。290 フレーム中 7 フレームは出力なし |
| しきい値 0.6 での再現率 | 0.5807 | FN 214 → 296、フレーム全体の見逃し 7 → 39（13.4%）。適合率は 0.865 に上昇 |
| しきい値 0.9 での再現率 | 0.0241 | 290 フレーム中 273 フレームが何も出力しません（94%）。crazing と rolled-in scale の再現率は 0 |
| TensorRT FP16 と CPU onnxruntime のボックス単位比較 | mAP50 差 0.0003 | 643 組が一致、平均 IoU 0.9972（最低 0.8311）、平均スコア差 0.0011。判定が変わったフレームはありません |
| mAP50、reComputer R2000 シリーズ + Hailo-8、INT8 HEF | **0.7091** | 同じ 290 枚。CPU 参照値 0.7574、差 −0.0483 |
| Hailo と CPU 参照値のボックス一致率 | 86.66% | IoU ≥ 0.5 で 684 ボックス中 523 が一致 |
| mAP50、Hailo Dataflow Compiler エミュレータ、INT8 level-1（配布版） | 0.7266 | 検証画像 20 枚 / 45 ボックス、同じサブセットで CPU 0.7228。290 枚の行とは直接比較しません |

データセット：NEU6（NEU-DET の転載コピー、ライセンスはページ末尾）。出所ごとにまとめて 70/15/15 に分割し、同じ鋼帯の隣接フレームは分割をまたぎません。しきい値の行は同じ推論の後段フィルタで、個別の試験ではありません。

同じ推論でのクラス別 AP50：

| クラス | ボックス数 | AP50 | 0.35 での再現率 |
|---|---:|---:|---:|
| scratches | 95 | 0.9685 | 0.9263 |
| pitted_surface | 70 | 0.9301 | 0.8857 |
| patches | 122 | 0.9065 | 0.8689 |
| inclusion | 184 | 0.7658 | 0.6902 |
| rolled-in_scale | 104 | 0.6149 | 0.5481 |
| crazing | 131 | 0.3603 | 0.3969 |

再現：`solutions/edge_inspection_surface/evaluation/runs/`

### 検出器トラック比較

| 検出器 | mAP50 | 固定 0.35 での P / R | フレーム全体の見逃し |
|---|---:|---|---:|
| YOLOX-Tiny（デフォルト） | 0.7574 | 0.7632 / 0.6983 | 7/290 |
| D-FINE-S | 0.7499 | 0.4956 / 0.8017 | **0/290** |
| RT-DETRv2-S | 0.7317 | 0.4575 / 0.7847 | 1/290 |

条件：CPU onnxruntime の参照値で、デバイスの指標ではありません。同じ検証画像 290 枚、640×640 静的 batch-1 入力、トラックごとに seed 1 つ。0.35 は YOLOX の `obj × cls` スコア分布で校正しており、DETR はスコア分布が異なるため P/R が偏ります。適合率をそろえると（P ≈ 0.81–0.87）、D-FINE の再現率は YOLOX より 2–7 ポイント高く、フレーム全体の見逃しは 38 から 20 に減ります。

再現：`solutions/edge_inspection_surface/evaluation/runs/`

### 任意の異常検知モジュール（EfficientAD-S）

| 指標 | 値 | 条件 |
|---|---:|---|
| ピクセル AUROC | **0.8752** | DeepPCB `pcb` の OK/異常分割：OK val 205 枚 + OK test 213 枚 + 欠陥 test 213 枚 |
| ピクセル AUPRO（FPR ≤ 0.30） | 0.6494 | 同じ実行、連結欠陥領域 1177 個 |
| 画像 AUROC | **0.5201** | 同じ実行。0.5 はランダム |
| 未知の欠陥クラスの再現率（1 クラス除外、ピクセル/領域レベル） | 0.225 – 0.955 | クラスごとの差が大きい（open 0.955、spur 0.225） |
| 2 系統の遅延オーバーヘッド（検出器 + EfficientAD、CPU 参照） | フレームあたり P95 +139 ms | queue=2、500 ms タイムアウト（同梱のデフォルト）。120/120 フレームを合流 |

ピクセル/領域レベルのスコアは使えますが、画像レベルは使えません。ヒートマップを 1 つのスコアにまとめる 12 通りの方法は、いずれも画像 AUROC 0.495–0.530 です。上表の OK セット（スキャンしたテンプレート）と欠陥セット（実物基板の写真）は出所が異なります。

再現：`solutions/edge_inspection_surface/evaluation/runs/`

### 配備フットプリント

| 項目 | 値 | 条件 |
|---|---|---|
| デバイス上での TensorRT engine 構築 | 291 s | reComputer J40 シリーズ、JetPack 6.2、TensorRT 10.3、YOLOX-Tiny 640² FP16、静的形状 |
| Jetson イメージ | 375 MB | ホストの TensorRT と CUDA はコンテナにマウントし、イメージには含めません |
| reComputer R2000 シリーズでの追加容量 | 約 452 MB | ランタイムイメージ 443 MB + HEF 8.9 MB + 設定 |

### ランタイムと主要パラメータ

| デバイス | モデル | 精度 | ランタイム | モデルをデバイスに届ける方法 |
|---|---|---|---|---|
| reComputer J30 / J40 シリーズ | YOLOX-Tiny 640²（任意で D-FINE-S、RT-DETRv2-S） | FP16 | TensorRT 10.3 | 初回配備時にデバイス上で engine を構築（実測 291 s）。GPU アーキテクチャと TensorRT バージョンに紐づき、単体では配布しません |
| reComputer R2000 シリーズ + Hailo-8 | YOLOX-Tiny 640² | INT8 | HailoRT 4.21.0 | HEF はデバイス外で Dataflow Compiler 3.31.0 により `optimization_level=1` でコンパイルし、配備時にダウンロードします |

D-FINE-S と RT-DETRv2-S は Jetson でのみ使えます。Hailo Dataflow Compiler 3.31.0 がそれらの deformable attention 演算子（`GridSample`、`GatherElements`、`TopK`）をサポートしていないためです。

- `min_score`：配備値 **0.35**。配備手順では 0.25 / 0.35 / 0.45 の 3 段階から選びます
- `min_defects`：デフォルト 1。検出数がこの値に達すると NG です
- `anomaly.enabled`：デフォルト `false`。`anomaly_score` は独立した MQTT フィールドで、最上位の `verdict` には入りません

### 既知の劣化

- 照明を変えると上記の数値は当てはまりません。モデルは 1 つのデータセットの照明条件でのみ学習・評価しています。
- crazing の AP50 は 3 つの構造すべてで 0.30–0.36（YOLOX 0.360、D-FINE 0.302、RT-DETRv2 0.310）で、しきい値や検出ヘッドを変えても変わりません。主な欠陥が crazing のラインは自社画像での再学習が必要です。
- reComputer R2000 シリーズの INT8 では mAP50 が 0.0483 下がり、損失が最も大きいのは最も弱い 2 クラスです（crazing AP50 0.3873、rolled-in_scale 0.4483）。
- ストリーム数の上限は推論ループにあります。12 ストリーム以降、総スループットは 110–112 FPS で頭打ちになります。アクセラレータのコンテキストはスレッドセーフでなく推論は直列に実行されるため、演算能力を足してもストリーム数は増えません。
- すべてのストリームが 1 つの Modbus register 領域を共有し、最後の判定が有効になります。ストリームごとの結果は MQTT から取得してください。
- 異常モジュールの画像レベルのスコアはランダムに近い値です。`anomaly.enabled` を有効にする前に、実際の検査カメラで自社の OK サンプル画像を集め、それを使って `anomaly.threshold` を校正し直してください。

### 次のステップ

- 検出器ルートの比較を各ルート 3 シードで再実行し、適合率をそろえたときの D-FINE-S の再現率の優位を確認します。

## データと素材の出典 {#data-and-asset-sources}

- **NEU-DET（東北大学表面欠陥データベース、Roboflow 転載版）** — 付属のベースライン検出器の学習および検証データであり、上記の精度数値の出典です。変換済みモデル重みはリファレンスデザイン評価およびパイプライン検証用に公式 CDN でホストされています。商用運用にあたっては、対象ワークや照明環境に合わせ、現場画像での再学習を推奨します。
- **DeepPCB** — [github.com/tangsanli5201/DeepPCB](https://github.com/tangsanli5201/DeepPCB)、MIT ライセンス。任意の教師なし anomaly トラックだけが使用し、NEU-DET とは無関係です。MIT ライセンスは再配布と商用利用を許可し、コピーや派生物に著作権表示を残すことを求めます。
- **YOLOX** — [github.com/Megvii-BaseDetection/YOLOX](https://github.com/Megvii-BaseDetection/YOLOX)、Apache-2.0。既定の検出 backbone で、AGPL の条件を避けるため Ultralytics ではなくこちらを選びました。本ソリューションのどこでも Ultralytics のコードや重みは使用していません。
- **D-FINE** — [github.com/Peterande/D-FINE](https://github.com/Peterande/D-FINE)、Apache-2.0、および **RT-DETRv2** — [github.com/lyuwenyu/RT-DETR](https://github.com/lyuwenyu/RT-DETR)、Apache-2.0。2 つの任意検出トラックで、それぞれ COCO ライセンスの checkpoint だけから fine-tune しています。上流自身が Objects365 学習重みのライセンス未確認を記載しているため、それらの重みはダウンロードも配布もしていません。ライセンスと commit の固定は `tracks/detector/PROVENANCE.md` にあります。
- **anomalib EfficientAD-S** — Apache-2.0。事前学習済み teacher 重みを含みます（`tracks/anomaly/PROVENANCE.md`、anomalib `lib/v2.6.0`）。
- **アーキテクチャ図** — パッケージのデバイスカタログと出力インターフェースから作成しました。データセットの内容は含みません。

ランタイムコードは Apache-2.0 です。付属の重みは評価・検証用であり、商用運用には実際の現場データでの学習を推奨します。
