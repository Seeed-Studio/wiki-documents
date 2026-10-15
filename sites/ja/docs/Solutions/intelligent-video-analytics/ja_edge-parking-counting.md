---
description: 既存の出入口カメラで駐車場の入出庫を数え、空き台数をリアルタイムに送信する方法：必要な機器、導入、インターフェース、Jetson と RK ホストでの実測データ
title: 駐車場 入出庫カウント：選定・導入・実測データ
keywords:
  - 駐車場 車両カウント
  - 入出庫カウント
  - 空き台数
  - 満空表示
  - ライン通過カウント
  - Jetson Orin Nano
  - RK3588
  - RK3576
  - YOLOX
  - MQTT
image: https://files.seeedstudio.com/wiki/reference-design/edge_parking_counting/panel-counting-2-after-20261009-fd76361b.jpg
slug: /solutions/edge-parking-counting
sidebar_position: 21
last_update:
  date: 10/09/2026
  author: seeed-solutions-hub
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/ja/solutions/edge-parking-counting/
generated_from: sensecraft-solutions@76f6c0f
---

:::caution[ご利用にあたって]
1 セットでカメラ 1 台、出入口 1 か所に対応します。カウントは映像上のカウントラインを車両が越えたときに行うため、隠れている車両やラインを越えない車両は数えません。
:::

## このソリューションでできること

各車線にループコイルを埋めたりゲートカウンターを付けたりせずに、場内の空き台数を把握します。導入後にブラウザーの映像上でカウントラインを引くと、車両が越えるたびに入庫か出庫を 1 回記録し、場内台数と空き台数を MQTT ブローカーへリアルタイムに送ります。空き表示板や駐車場システムをそのまま動かせます。商業施設・オフィスの駐車場、構内や工場の正門向けです。

- デプロイパッケージ（Docker Compose と設定）：[github.com/suharvest/sensecraft-solutions](https://github.com/suharvest/sensecraft-solutions/tree/main/solutions/edge_parking_counting)
- 選定と導入：[リファレンス設計ページ](https://www.seeed.co.jp/solutions/reference-designs/parking-entry-exit-counting)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>映像は現場に</h3>
                <p>映像は出入口横のホストで解析し、外に出るのはカウント結果だけです。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>通過と同時にカウント</h3>
                <p>reComputer J30 シリーズで 41 回の通過をすべて正しい方向で計上（「性能と実測データ」参照）。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>既存のカメラを利用</h3>
                <p>出入口の RTSP ネットワークカメラをそのまま接続。ループコイルもゲート改修も不要です。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
            </div>
            <div class="info-content">
                <h3>入出庫と車種を区別</h3>
                <p>通過記録ごとに方向と車種（乗用車・バイク・バス・トラック）が付きます。</p>
            </div>
        </li>
    </ul>
</div>

### 実機の画面

カウントホスト内蔵のブラウザープレビュー画面です。黄色の縦線がカウントラインで、車両ごとに ID と信頼度を表示し、右側に場内台数・空き台数・本日の入出庫数を表示します。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_parking_counting/panel-counting-1-before-20261009-e25d0080.jpg" alt="reComputer J30 シリーズの入出庫カウント：車両 #48 がラインを越える前。場内 1/120、本日入庫 24・出庫 23"/>
</div>

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_parking_counting/panel-counting-2-after-20261009-fd76361b.jpg" alt="同じ車両がラインを越えた後：本日の出庫が 24 に、場内 0/120"/>
</div>

2 枚のスクリーンショットは 3 秒間隔です。入力は合成テスト映像（グレーの背景上を 1 台の車両画像が往復）で、現場映像ではありません。

## 必要なハードウェア

現場に必要なのは、出入口カメラ、カウントホスト 1 台、MQTT ブローカー（既存のもの、または Mosquitto を導入）です。

**① 出入口カメラ**：既存のネットワークカメラ。H.264 または H.265 の RTSP 出力で、車線を固定で撮影するもの。

**② カウントホスト**：4 機種から 1 台。カメラ 1 台につき 1 台です。

| | カウントホスト | 実測の処理速度 | 選ぶ場面 |
|---|---|---:|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/110110147.jpg" alt="reComputer J3011" width="110" /> | [reComputer J30 シリーズ（J3011）](https://www.seeedstudio.com/reComputer-J3011-p-5590.html)<br/>Jetson Orin Nano、JetPack 6.2 | 毎秒 30 フレーム | 車両が通常の速度で通過する出入口 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J40 シリーズ（J4012）](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)<br/>Jetson Orin NX、JetPack 6.2 | J30 と同じパッケージ | 同じホストで他のモデルも動かす |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/3/5/3576_gif_26__3_1.gif" alt="reComputer RK3576" width="110" /> | [reComputer RK3576 シリーズ](https://www.seeedstudio.com/reComputer-RK3576-30-p-6815.html)<br/>オンボード NPU | 毎秒 30 フレーム | 通常速度の通過で、コスト優先 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26__1.png" alt="reComputer RK3588" width="110" /> | [reComputer RK3588 シリーズ](https://www.seeedstudio.com/reComputer-RK3588-30-p-6817.html)<br/>オンボード NPU | 毎秒約 3 フレーム | 車両が減速・停止してから通過するゲート出入口 |

J30 と RK3576 の速度は 640×360・30 fps 入力、RK3588 は 1280×720・5 fps 入力で測定しました。

カウントホスト、カメラ、MQTT ブローカーは同じ LAN にあるか、互いに到達可能であること。初回はアプリ（約 0.5–0.7 GB）とモデルのダウンロードにネット接続が必要で、その後はオフラインで動作します。

## 現場への導入

### 1. カメラの設置

:::tip[車両がラインを完全に通過すること]
カメラは車線に固定し、車両が画面の一方から入って反対側へ出るようにします。RK3588 ホストでは、車両がライン付近で約 1 秒以上映っていないと安定して計上できないため、ゲート付きの出入口に向いています。
:::

### 2. ソフトウェアの導入：3 ステップ

機器ごとの手順はリファレンス設計ページにあります。ここでは流れだけを示します。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.co.jp/solutions/reference-designs/parking-entry-exit-counting" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>構成を選んで導入 🖱️</font></span></strong>
    </a>
</div><br />

1. **カウントホストのデプロイ**：カメラの RTSP アドレス、MQTT ブローカー、総区画数を入力。デプロイ時にボードのランタイムライブラリを自動で確認します。
2. **カウントラインを引く**：プレビュー画面でラインをドラッグし、どちら側を「入庫」とするかを選んで保存します。
3. **確認**：車両がラインを越えると、プレビュー画面の入庫数か出庫数が 1 増え、MQTT に通過記録が届きます。

## インターフェース

カウント結果は MQTT でブローカーへ、状態は HTTP で取得します。

- **空き表示板・駐車場システム**：場内状況トピックを購読して空き台数を読み、0 台で「満車」に切り替えます。
- **交通量の集計**：通過記録トピックを購読し、方向と車種で集計します。
- **複数の出入口**：出入口ごとに 1 セットを設置し、上位システムが駐車場 ID ごとに合計します。

| トピック / ポート | 内容 |
|---|---|
| MQTT `<site>/parking/<entrance>/crossing` | 通過ごとに 1 件：方向（入庫 / 出庫）、車種、信頼度、通過後の場内台数と空き台数 |
| MQTT `<site>/parking/<entrance>/occupancy` | 場内台数、総区画数、空き台数、本日の入庫数・出庫数。通過のたびに送信 |
| HTTP 8080 `/preview` | ブラウザープレビュー：映像、カウントライン、場内台数と空き台数 |
| HTTP 8099 `/healthz` | 映像を受信しているか、毎秒何フレーム処理しているか |

## 性能と実測データ

### カウント結果と処理速度

| 機器 | 入力 | 処理速度 | カウント結果 |
|---|---|---|---|
| reComputer J30 シリーズ（Orin Nano） | 640×360、30 fps | 29.98 fps、1 フレームの解析 p50 3.6 ms（実測） | 41 回の通過をすべて計上、方向もすべて正しい（実測） |
| reComputer RK3576 シリーズ | 640×360、30 fps | 30.0 fps、コンテナ CPU 14.9%・メモリ 95 MiB（実測） | 通過イベント 19 件：入庫 9、出庫 10（実測） |
| reComputer RK3588 シリーズ | 1280×720、5 fps | 3.0 fps、1 フレームの解析 p50 17.8 ms（実測） | 通過イベント 107 件（実測） |

入力はすべて合成テスト映像（グレーの背景上を 1 台の車両画像がラインをまたいで往復）です。RK3588 は 5 fps の入力に対して毎秒約 3 フレームの処理のため、車両がライン付近に約 1 秒以上とどまる必要があります。

再現：`sensecraft-solutions/solutions/edge_parking_counting`（デプロイパッケージ）と合成映像 `count-synthetic-120s.mp4`

### モデルとランタイム

| 機器 | 車両検出 | ランタイム |
|---|---|---|
| reComputer J30 / J40 シリーズ | YOLOX、416×416、FP16 | TensorRT |
| reComputer RK3588 / RK3576 シリーズ | YOLOX、416×416、INT8（w8a8） | RKNN、MPP ハードウェアデコード |

カウント結果に影響するパラメーター（デプロイパッケージの `config/counting*.json`）：

- `counting.line` / `in_side`：ラインの位置とどちら側を入庫とするか。導入後にプレビュー画面で変更します。
- `counting.min_track_frames`：車両を連続 3 フレーム以上追跡してから計上します。フレームレートが低いほど、車両が長く映っている必要があります。
- `counting.capacity`：総区画数。空き台数 = 総区画数 − 場内台数。

### 既知の制限

- **車間距離と並走による遮蔽**：車間距離が 1m 未満の場合や並走車両が同時に通過した場合、追跡枠の重なりにより未カウントや方向誤認が生じる場合があります。物理的な車線分離の設置を推奨します。
- **歩行者・二輪車の影響**：四輪車の検出に最適化されているため、歩行者の密集横断や車両脇をすり抜けるバイクは追跡枠の一時的な乱れの原因となります。
- **車速と追跡フレーム**：カウントには最低 3 フレームの追跡が必要です。ゲート通過時の推奨速度は ≤ 15 km/h であり、高速通過時は未カウントとなる可能性があります。

## データと素材の出典

- スクリーンショットとカウント結果は合成テスト映像によるもので、車両画像の元の出典は確認中です。
- 検出モデルのコード YOLOX：Apache-2.0。
