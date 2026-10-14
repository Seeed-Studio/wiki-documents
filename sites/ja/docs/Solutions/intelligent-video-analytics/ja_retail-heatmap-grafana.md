---
description: 店舗や展示スペースにローカル完結の人流ヒートマップを構築する方法——必要な機器、構築手順、利用できるインターフェース、3機種での実測フレームレート
title: '小売向け人流ヒートマップ：構築・デプロイ・実測データ'
keywords:
  - 人流ヒートマップ
  - 来店客分析
  - 滞留時間
  - 入退店カウント
  - オンデバイスAI
  - people counting
  - heatmap
  - edge AI
  - reCamera
  - reComputer
  - Hailo-8
  - RK3588
  - MQTT
  - Grafana
  - InfluxDB
image: https://files.seeedstudio.com/ReferenceDesign/landpage_asset/recamera_heatmap_grafana/grafana-dashboard-e374aff6.png
slug: /solutions/retail-heatmap-grafana
sidebar_position: 3
last_update:
  date: 09/17/2026
  author: seeed-solutions-hub
createdAt: '2026-09-17'
updatedAt: '2026-09-17'
url: https://wiki.seeedstudio.com/ja/solutions/retail-heatmap-grafana/
generated_from: sensecraft-solutions@recamera_heatmap_grafana
---

:::caution[利用上の注意]
ヒートマップが記録するのは**人がどこにいるか**だけで、個人の識別や顔照合は行いません。検出精度は未評価です（[性能と実測データ](#付録実測データ)を参照）。
:::

## このソリューションでできること

カメラで売場を俯瞰し、画面内の人物の位置を検出して追跡します。「どこで立ち止まったか」「どのくらい滞在したか」「何人が出入りしたか」をローカルのデータベースに記録し、Grafana ダッシュボードとヒートマップで確認できます。小売店舗、チェーン店のパイロット導入、展示会場など、レイアウトの判断が人の動線に依存する屋内空間が対象です。

IP カメラが既にある現場では、カメラをそのまま使い、検出を担当する AI ホストを 1 台追加します。カメラがない現場では reCamera を使い、検出はカメラ内部で完結します。映像は現場で処理され、バックエンドには数値だけが保存されます。実 RTSP ストリームでの実測は、reComputer R2000 シリーズ（Hailo-8）が 14.3 FPS（ソース 15 FPS）、reComputer RK3588 / RK3576 シリーズが 13.2 / 13.3 FPS です。

- オープンソース実装（reCamera 直結ルート）：[github.com/xr686/reCamera-with-Heatmap](https://github.com/xr686/reCamera-with-Heatmap)
- オープンソース実装（IP カメラ + Jetson ルート）：[github.com/bleaaach/yolo11-grafana-influxdb](https://github.com/bleaaach/yolo11-grafana-influxdb)
- 構成選択とデプロイ：[すぐに導入できるソリューションページ](https://www.seeed.co.jp/solutions/reference-designs/recamera_heatmap_grafana)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>現場で処理し、保存するのは数値だけ</h3>
                <p>検出はカメラまたは AI ホスト上で完結します。バックエンドに届くのは画面比率の座標、カウント、滞留時間です。ライブプレビューはローカルのビデオゲートウェイ経由で、ネットワーク外には出ません。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>既存のカメラをそのまま接続</h3>
                <p>RTSP ストリームを出せる IP カメラならメーカーを問わず使え、壁の機器を交換する必要はありません。カメラがない場合は、reCamera に小売分析アプリを入れればデータが出ます。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>5 通りの構成が 1 つのダッシュボードへ</h3>
                <p>reCamera 2002、reCamera Pro、Rockchip、Hailo-8、Jetson の 5 ルートが同一のメッセージ形式で送信します。複数店舗で機材が混在しても、集約先は 1 台のバックエンドです。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
            </div>
            <div class="info-content">
                <h3>デプロイ後はインターネット不要</h3>
                <p>broker、データベース、ダッシュボードはすべてローカルのバックエンド上で動きます。インターネットが必要なのはイメージとモデルを取得するデプロイ時だけです。</p>
            </div>
        </li>
    </ul>
</div>

### 実機の出力

各検出端の結果は 1 つの Grafana ダッシュボードに集まります。左にライブ映像、それ以外のパネルは在場人数、滞留状態、入退店カウントを時間軸で集計したものです。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/ReferenceDesign/landpage_asset/recamera_heatmap_grafana/grafana-dashboard-e374aff6.png" alt="Grafana ダッシュボード：ライブ映像と、時間・日・週で集計した人流・滞留・入退店パネル"/>
</div>

同じ位置データからヒートマップも描画されます。色が濃いのは滞留時間が長い、または通過回数が多い場所です。既定ではカメラ視点に重ねて表示され、キャリブレーション後は店舗の平面図に重ねられます。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/ReferenceDesign/landpage_asset/recamera_heatmap_grafana/heatmap-demo-c6a45c6f.png" alt="空間ヒートマップ：追跡した位置が熱量として蓄積され、カメラ視点の映像に重ねて表示される"/>
</div>

## 必要なハードウェア

必要なのは 3 つ。映像を出すカメラ、人を検出する機器、データを保存して描画するバックエンドです。バックエンドはどのルートでも共通です。

**① カメラ** — RTSP ストリームを出す IP カメラが既にあれば、メーカーを問わずそのまま使えます。壁の機材は 1 台も交換しません。カメラがない場合は reCamera 2002 / reCamera Pro を使います。カメラと演算を 1 台にまとめた機種で、検出・追跡・滞留判定・入退店カウントをカメラ内部で行います。

**② 検出ホスト** — IP カメラルートでのみ必要です。どのホストも同じ追跡・滞留判定ロジックを動かし、違いはアクセラレータだけです。

**③ ダッシュボードバックエンド** — MQTT broker、InfluxDB、Grafana、ビデオゲートウェイを動かします。常時起動の PC でも reComputer R1100 でも構いません。IP カメラルートでは検出器と同じ筐体に同居できます。

| | 機器 | 担当する処理 | 選ぶ基準 |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/2/-/2-102991894.jpg" alt="reCamera 2002" width="110" /> | [reCamera 2002](https://www.seeedstudio.com/reCamera-2002-64GB-p-6252.html)<br/>カメラ一体型、1080P | 検出 + 追跡 + カウント | 対象エリアが近く範囲も狭い。1 ストリームを最短で立ち上げたいとき |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/g/a/gallery_img_1_1.png" alt="reCamera Pro" width="110" /> | [reCamera Pro](https://www.seeedstudio.com/reCamera-Pro-2GB.html)<br/>カメラ一体型、4K | 検出 + 追跡 + カウント | 対象が遠く範囲も広い。遠方の人物も検出できる大きさを保ちたいとき |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26__1.png" alt="reComputer RK3588" width="110" /> | [reComputer RK3588 シリーズ](https://www.seeedstudio.com/reComputer-RK3588-30-p-6817.html)<br/>同じ構成で reComputer RK3576 シリーズにも対応 | 検出ホスト | 既に Rockchip ボードを運用している。映像デコードはハードウェアで動作 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-recomputer-industrial-r2000.jpg" alt="reComputer Industrial R2035-12" width="110" /> | [reComputer R2000 シリーズ（R2035-12、Hailo-8）](https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html) | 検出ホスト | 制御盤や弱電盤に収めるファンレス産業機が必要なとき |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J40 シリーズ（J4012）](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)<br/>および reComputer J50 シリーズ | 検出ホスト | 1 台のホストで複数カメラを扱うとき |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/2/-/2-113991334--recomputer-r1125-10-45font.jpg" alt="reComputer R1100" width="110" /> | [reComputer R1100 シリーズ（R1124-10）](https://www.seeedstudio.com/reComputer-R1124-10-p-6257.html) | ダッシュボードバックエンド | 現場にダッシュボード用の常時起動 PC がないとき |

その他の前提条件：バックエンド機に Docker を導入し、空き容量を 2 GB 以上確保し、1883・3000・8080・8086 の各ポートを空けておくこと。ONVIF によるカメラ自動検出を効かせるため、カメラとバックエンドは同一セグメントに置きます。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/ReferenceDesign/landpage_asset/recamera_heatmap_grafana/architecture-en-0432d229.png" alt="人流ヒートマップの機器構成：IP カメラは RTSP で reComputer AI ホストへ、ホストと reCamera 2002 / Pro は MQTT で reComputer R1100 バックエンドへ送信し、Grafana ダッシュボードは HTTP で開く"/>
</div>

機器構成：IP カメラは RTSP で AI ホストに映像を渡し、reCamera はカメラ内で検出を行います。検出端が出力するのは座標の比率とカウントだけで、画像は含みません。すべての検出端は 1 台のバックエンド（MQTT broker、InfluxDB、Grafana、go2rtc ビデオゲートウェイ）に集約され、1 つのダッシュボードで全カメラを扱えます。ライブプレビューはブラウザがローカルのビデオゲートウェイ経由でカメラから取得し、バックエンドのデータベースは経由しません。

### 選定における制約・非推奨条件

- **設置高さと画角**：reCamera 2002 は天井高 3〜4m 向けです。5m を超える吹き抜けや広場では 2002 を避け、4K 対応の reCamera Pro を選定してください。
- **個人識別の制約**：本構成は匿名の人流密度・ヒートマップ専用であり、顔認証や個人の再識別には対応していません。

## 現場での設置

2 段階に分かれます。まずカメラを正しい位置に設置し、次にソフトウェアを導入します。

### 1. カメラの設置

:::tip[設置条件]
カメラは高所に設置し、対象エリアを俯瞰させます。対象までの距離は 3〜5 m。画面内で人物が最低でも約 30 × 30 ピクセルを占める必要があり、これを下回ると検出枠が出ません。水平視点、人同士の重なりが激しい角度、人物が小さすぎる遠景では見逃しが出ます。
:::

### 2. ソフトウェアの導入——3〜4 ステップ

機器ごとの具体的な操作手順はすぐに導入できるソリューションページにあります。現場条件に合わせて構成を選ぶと、対応するアプリケーションパッケージをダウンロードできます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.co.jp/solutions/reference-designs/recamera_heatmap_grafana" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>構成を選んでパッケージを入手 🖱️</font></span></strong>
    </a>
</div><br />

1. **バックエンドを起動する** — 常時起動の機器上で broker、InfluxDB、Grafana、ビデオゲートウェイを立ち上げます。この手順で同一セグメントの ONVIF カメラが自動検出されます。別セグメントのカメラは、デプロイフォームに RTSP アドレスを直接入力します。
2. **検出端からデータを送る** — reCamera ルートではカメラに小売分析アプリをインストールし、IP カメラルートでは AI ホストに検出器をデプロイします。どちらも入力項目は 3 つ：MQTT サーバーのアドレス（手順 1 の機器）、**設置場所名**、**カメラ番号**。同一店舗では設置場所名を揃え、カメラごとに異なる番号を付けます。ダッシュボードはこれで機器を区別します。
3. **平面図のキャリブレーション（任意）** — ポート 8080 のヒートマップを開き、カメラの静止画と店舗平面図をアップロードして、それぞれ対応する 4 点を指定します。基準点には柱、出入口、壁の角など間隔の広い目標物を選びます。キャリブレーションはサーバー側に保存され、複数カメラで 1 枚の平面図を共有できます。カメラ視点だけで足りる場合はこの手順を省けます。
4. **ダッシュボードを開く** — Grafana はポート 3000、リアルタイムヒートマップは 8080、ビデオゲートウェイは 1984 です。

上流の記載では全体の所要時間は **15 分**です。Jetson ルートのみ例外で、初回デプロイ時にデバイス上で TensorRT エンジンをビルドするため 2〜5 分かかります。2 回目以降は再利用されます。

## 利用できるインターフェース

すべての検出端が同一のメッセージ形式でバックエンドの broker に送信します。手元のシステムに応じて 3 通りです。

- **付属のダッシュボードで足りる場合** — 接続作業は不要です。Grafana のパネルが時間・日・週の人流推移、滞留、入退店カウントを既にカバーしており、パネルのデータはそのままエクスポートできます。
- **既存の BI / 分析システムがある場合** — リアルタイムデータは MQTT の結果トピックを購読し、履歴データはバックエンドの InfluxDB を直接照会します。
- **自社システム / API に取り込む場合** — 同じく購読します。ペイロードにはゾーン別カウントと、追跡対象ごとの位置・滞留時間が含まれ、独自パネルの描画に足ります。ライブ映像はローカルのビデオゲートウェイ（1984）から取得します。

### トピックとペイロードの一覧

| トピック / ポート | 内容 | retained |
|---|---|---|
| `<設置場所>/retail-vision/results/<カメラ番号>` | 毎秒 1 件のバッチ JSON：ゾーン別カウント（在場、閲覧中、滞留、要対応、入店、退店、平均滞留時間）と、追跡対象ごとの `track_id`・位置・滞留時間 | 否 |
| `<設置場所>/retail-vision/status` | `online` / `offline` | 是 |
| MQTT broker 1883 | すべての検出端からの結果を受信 | — |
| Grafana 3000 | 時間・日・週単位の人流推移、滞留と入退店カウント | — |
| リアルタイムヒートマップ 8080 | カメラ映像または店舗平面図への熱量重畳。歯車アイコンからキャリブレーション | — |
| ビデオゲートウェイ 1984 | カメラの検出とライブプレビュー | — |

`<設置場所>` と `<カメラ番号>` はデプロイフォームで入力します。使用できるのは英数字、ハイフン、アンダースコアのみです。

**位置は画面比率で送信されます。** 検出端が追跡枠の中心を比率に変換してから送信するため、1 度の平面図キャリブレーションはどの解像度でも成立します。より高解像度のカメラに交換しても再キャリブレーションは不要です。

**メッセージは毎秒 1 件のバッチです。** reCamera では `--mqtt-interval-ms 1000` が制御します。この引数がないとアプリはフレームごとに送信し、カメラ 1 台あたり毎秒 10 件程度になります。AI ホストルートでは検出器設定の `publish_hz: 1.0` が該当します。1 拠点で複数カメラを運用する場合、broker が負荷に耐えるかはこのパラメータで決まります。

**reCamera Pro は平均滞留時間を出力しません。** そのルートではダッシュボードの Avg Dwell パネルが常に空のままになります。他の指標には影響しません。

## 性能と実測データ {#付録実測データ}

AI ホスト 4 ルートは同一の追跡・滞留判定ロジックを動かします。検出モデルとランタイムはアクセラレータごとに異なります。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/xr686/reCamera-with-Heatmap" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>reCamera-with-Heatmap</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

以下はスループットとメッセージレートの 2 種類のデバイス実測データで、RK ルートと Hailo ルートの単一ストリームで測定しました。

### 実測した機器

| 機器 | アクセラレータ | 配布モデル | 検証状況 |
|---|---|---|---|
| reComputer RK3588 シリーズ | RK3588 NPU | YOLO11n rawhead FP16 | ✅ 実機・実ストリーム |
| reComputer RK3576 シリーズ | RK3576 NPU | YOLO11n rawhead FP16 | ✅ 実機・実ストリーム |
| reComputer R2000 シリーズ（R2135-12、Hailo-8） | Hailo-8 | YOLOv8n INT8 | ✅ 実機・実ストリーム |
| reCamera 2002 | SG2002 NPU | YOLO11n INT8 | デプロイは確認済み |

### 性能の詳細 {#性能の詳細}

#### 実ストリームでのエンドツーエンドのフレームレート

入力は実際の RTSP 映像です。測定範囲は**カメラのフレーム出力からバックエンドへの結果到達まで**の全経路——デコード + 検出 + 追跡 + 滞留判定 + MQTT 送信で、ホスト 1 台につき 1 ストリームです。

| 検出ホスト | 検出モデル | 追跡レート | MQTT メッセージレート | 出所 |
|---|---|---:|---:|---|
| reComputer R2000 シリーズ（R2135-12、Hailo-8） | YOLOv8n INT8 | **14.3 FPS** | 0.94 件/秒 | 実測（440 フレーム / 30.7 秒） |
| reComputer RK3588 シリーズ | YOLO11n FP16 | **13.2 FPS** | 1.00 件/秒 | 実測 |
| reComputer RK3576 シリーズ | YOLO11n FP16 | **13.3 FPS** | 1.00 件/秒 | 実測 |

- **RK 2 機種**：MPP のハードウェアデコードは有効で、メッセージレートは 1.00 件/秒でした。
- **Hailo の 14.3 FPS はソースのフレームレートで頭打ちになった値です。** 同じパイプラインをレート制限なしで動かすと **234 FPS** を実測しており、15 FPS のソースの約 15 倍です。
- **0.94 件/秒と 1.00 件/秒の差は平均の取り方によるものです**。いずれも毎秒 1 件が目標で、0.94 は 30.7 秒区間の平均値です。
- **再現手順**：エンドツーエンドおよび単体推論ベンチマークスクリプトはリポジトリの `benchmarks/run_heatmap_bench.sh` に配置されています。`./run_heatmap_bench.sh --profile rk3588` を実行して検証できます。

#### 単体推論の速度

| 検出ホスト | 検出モデル | 1 回あたりの推論 | 出所 |
|---|---|---:|---|
| reComputer J40 / J50 シリーズ | YOLO11n FP16（TensorRT） | 9.7 ms | 上流が提示した単体推論の数値 |
| reCamera 2002 | YOLO11n INT8 | 約 10 FPS | 上流のアプリ説明に記載されたカメラ内の処理レート |

この 2 行は上のエンドツーエンド表と直接比較できません。9.7 ms はデコード・追跡・送信を含まず、約 10 FPS はカメラ内部の処理速度で、バックエンドへの到達速度ではありません。

#### 多ストリーム

上記の数値はすべてホスト 1 台がカメラ 1 台を見た状態のものです。「1 台のホストで複数カメラ」はプリセット間の役割分担（Jetson ルートが担当）です。プロトコル上は 1 台のバックエンドが設置場所名とカメラ番号で区別して任意台数の検出端を受け付けます。上限は AI ホスト側にあります。

### ランタイムと主要パラメータ

| 検出ホスト | 検出モデル | 精度 | ランタイム | モデルの配布方法 |
|---|---|---|---|---|
| reCamera 2002 | YOLO11n（`yolo11n_detection_cv181x_int8.cvimodel`） | INT8 | SG2002 カメラ NPU | `retail-vision_1.5.1_riscv64.deb` に同梱、sha256 で検証 |
| reCamera Pro | アプリセンターの `retail-vision` アプリに同梱 | アプリ側で決定 | カメラ NPU | **パッケージには含まれません**。先にデバイスのアプリセンターから導入が必要 |
| reComputer RK3576 / RK3588 シリーズ | `yolo11n_pose_rawhead_fp16.<ボード>.rknn` | FP16 | RKNN | ボードごとに配布し sha256 で検証。ボード種別を誤るとモデルは読み込めません |
| reComputer R2000 シリーズ（R2135-12、Hailo-8） | YOLOv8n（`yolov8n.hef`） | INT8 | HailoRT 4.21 + GStreamer | Hailo Model Zoo v2.15.0 の hailo8 ディレクトリから取得、sha256 で固定 |
| reComputer J40 / J50 シリーズ | YOLO11n（`yolo11n.engine`） | FP16 | TensorRT | エンジンは**デバイス上でビルド**（`ultralytics` で `half=True`、`imgsz=640` を指定）。初回 2〜5 分、以降は再利用 |

- **Hailo は HailoRT 4.21 に固定されています。** デプロイ時にボード上のライブラリを確認し、一致しない場合は実際のバージョンを表示して停止します。Hailo-8 は同時に 1 アプリしか実行できず、他の Hailo アプリがアクセラレータを占有していると検出器は起動しません。
- **RK ボードには NPU ドライバ（`/usr/lib/librknnrt.so`）が必要です。**
- **reCamera では分析アプリがカメラを占有します。** インストール時に Node-RED の自動起動が停止され、両者を同時に動かすことはできません。

デプロイ結果に影響するパラメータ（RK ルートと Jetson ルートの出荷時の値）：

- `dwell_min_duration`（1.5 秒）— 移動速度が `dwell_speed_threshold`（10.0）を下回った状態がこの時間続いて初めて滞留として数えます。棚の前で向きを変えただけでは数えません。
- `dwell_assistance_threshold`（20.0 秒）— 滞留時間がこれを超えると「要対応」状態になります。
- `avg_person_height_m`（1.7）— 速度閾値をピクセルから実距離に換算する値です。撮影対象の平均身長が 1.7 m と大きく異なる現場では、滞留判定が全体として緩く、あるいは厳しくなります。

### 既知の劣化

- **設置位置。** 高所から俯瞰し、対象まで 3〜5 m、画面内で人物が最低約 30 × 30 ピクセル必要です。水平視点、遠景、強い遮蔽では検出枠が出ません。検出されなかった人物はヒートマップ上で空白になり、エラーは出ません。
- **平面図のキャリブレーションは手動で指定する 4 点です。** 基準点が近接していたり一直線に並んでいたりすると位置誤差が増幅されます。カメラの向きを変えたり移動したりするとキャリブレーションは無効になり、やり直しが必要です。**キャリブレーションの誤りはエラーにならず**、熱量が別の場所に描かれるだけです。
- **reCamera Pro の Avg Dwell は常に空です。** アプリがそのフィールドを出力しないためです。
- **RK でハードウェアデコードが効かない場合はソフトデコードにフォールバックします。** フレームレートが明らかに低く CPU も占有されている状態がその兆候です。Jetson ルートはフォールバックしません（`fallback: none`）。

## 出典とライセンス

- **検出モデル** — Hailo ルートは [Hailo Model Zoo](https://github.com/hailo-ai/hailo_model_zoo) v2.15.0 の hailo8 ディレクトリにある `yolov8n.hef` を、再ホストせずダイジェスト固定で使用します。RK ルートは fall_detection が既に公開している `yolo11n_pose_rawhead_fp16.<ボード>.rknn` を流用します。Jetson ルートは `ultralytics` でデバイス上に `yolo11n.engine` をエクスポートします。
- **モデルのライセンス** — 検出端は YOLO 系モデル（YOLO11n、YOLOv8n）を使用します。Ultralytics の YOLO モデルは商用ライセンスを取得しない限り AGPL-3.0 です。製品化の前にモデルのライセンスを確認するか、ライセンス互換のモデルに差し替えてください。
- **バックエンドの構成要素** — MQTT broker、InfluxDB、Grafana、go2rtc ビデオゲートウェイはいずれも公式イメージからデプロイします。Grafana の初期認証情報は `admin` / `admin` です。稼働開始後すぐに変更してください。
- **画像** — Grafana ダッシュボードとヒートマップのスクリーンショットは上流ソリューションの素材から、アーキテクチャ図は社内で作図したものです。デモ画像に識別可能な人物は写っていません。
