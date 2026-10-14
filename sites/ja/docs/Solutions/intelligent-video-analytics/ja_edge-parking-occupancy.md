---
description: 駐車場の既存 IP カメラで区画ごとの使用中・空きを判定する方法：必要な機器、導入、インターフェース、Jetson と RK ホストでのマルチストリーム実測データ
title: カメラによる駐車スペース検知：選定・導入・実測データ
keywords:
  - 駐車スペース検知
  - カメラ 駐車区画
  - 駐車場 空き案内
  - 満空表示
  - Jetson Orin Nano
  - RK3588
  - RK3576
  - YOLOX
  - MQTT
image: https://files.seeedstudio.com/wiki/reference-design/edge_parking_occupancy/panel-occupancy-1-mixed-20261009-5635c9d1.jpg
slug: /solutions/edge-parking-occupancy
sidebar_position: 22
last_update:
  date: 10/09/2026
  author: seeed-solutions-hub
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/ja/solutions/edge-parking-occupancy/
generated_from: sensecraft-solutions@76f6c0f
---

:::caution[ご利用にあたって]
区画がカメラ映像に映っている必要があります。隣の車両で完全に隠れる区画や、遠くて小さく映る区画は正しく判定できません。
:::

## このソリューションでできること

区画ごとに地磁気センサーや超音波センサーを付けず、場内の既存 IP カメラをそのまま使います。1 台のカメラに映る区画はすべて同時に判定します。ブラウザーで区画ごとに枠を描いて名前を付けると、エッジホストが枠内に車があるかを判定し続け、区画ごとの「使用中 / 空き / 不明」をシステムへ送ります。空き表示板、駐車誘導、専用区画の管理に使えます。

- デプロイパッケージ（Docker Compose と設定）：[github.com/suharvest/sensecraft-solutions](https://github.com/suharvest/sensecraft-solutions/tree/main/solutions/edge_parking_occupancy)
- 選定と導入：[リファレンス設計ページ](https://www.seeed.co.jp/solutions/reference-designs/parking-space-occupancy-detection)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>映像は現場に</h3>
                <p>映像は現場のエッジホストで解析し、外に出るのは区画の状態だけです。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>1 台で複数系統</h3>
                <p>reComputer J30 シリーズで 6 系統を 620 秒同時に処理し、フレーム欠落なし（「性能と実測データ」参照）。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>区画は自分で描く</h3>
                <p>ライブ映像の上で枠を描いて名前を付け、保存するとすぐ反映。再起動後も保持されます。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
            </div>
            <div class="info-content">
                <h3>切断がわかる</h3>
                <p>カメラの映像が途切れて約 10 秒後、その区画は「不明」になり、古い状態を送り続けません。</p>
            </div>
        </li>
    </ul>
</div>

### 実機の画面

エッジホスト内蔵の区画エディターです。映像上の枠が区画で、赤が使用中、緑が空き、右側に合計と区画一覧を表示します。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_parking_occupancy/panel-occupancy-1-mixed-20261009-5635c9d1.jpg" alt="reComputer J30 シリーズの区画エディター：6 区画のうち 4 区画が使用中、2 区画が空き"/>
</div>

スクリーンショットでは P01、P02、P04、P06 が使用中、P03 と P05 が空きです。入力は平面駐車場の静止画をループ再生したもので、現場映像ではありません。

## 必要なハードウェア

現場に必要なのは、場内の IP カメラ、エッジホスト 1 台、MQTT ブローカー（既存の Mosquitto など）です。

**① IP カメラ**：既存のカメラで、H.264 の RTSP 出力があれば十分です。サブストリームで構いません。

**② エッジホスト**：4 機種から 1 台。1 台で複数のカメラを扱い、各カメラを毎秒 1 フレーム解析します。

| | エッジホスト | 実測 | 選ぶ場面 |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/110110147.jpg" alt="reComputer J3011" width="110" /> | [reComputer J30 シリーズ（J3011）](https://www.seeedstudio.com/reComputer-J3011-p-5590.html)<br/>Jetson Orin Nano、JetPack 6.2 | 6 系統でフレーム欠落なし、1 フレーム p50 6.5 ms | 1 台で複数系統、標準の選択 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J40 シリーズ（J4012）](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)<br/>Jetson Orin NX、JetPack 6.2 | J30 と同じパッケージ | 同じホストで他のモデルも動かす |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26__1.png" alt="reComputer RK3588" width="110" /> | [reComputer RK3588 シリーズ](https://www.seeedstudio.com/reComputer-RK3588-30-p-6817.html)<br/>オンボード NPU | 1 系統、1 フレーム p50 36.6 ms | 現場を Rockchip で統一する |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/3/5/3576_gif_26__3_1.gif" alt="reComputer RK3576" width="110" /> | [reComputer RK3576 シリーズ](https://www.seeedstudio.com/reComputer-RK3576-30-p-6815.html)<br/>オンボード NPU | 1 系統、毎秒 1 フレーム、欠落なし | カメラが少なく、コスト優先 |

RK ホストで系統を増やすときは 1 系統ずつ追加し、それぞれ状態が更新されていることを確認してください。

エッジホスト、カメラ、MQTT ブローカーは同じ LAN に置き、ホストからカメラの RTSP アドレス（通常 554 番ポート）にアクセスできること。導入時はランタイムとモデルのダウンロードにネット接続が必要で、その後はオフラインで動作します。

## 現場への導入

### 1. カメラの画角を確認

:::tip[高い位置から斜め下に]
各区画がはっきり映り、隣の車両で完全に隠れないこと。1 つの枠で囲むのは 1 区画だけです。車両が枠の面積の約 3 分の 1 を占めると使用中と判定し、複数区画を囲む大きな枠は使用中になりません。
:::

### 2. ソフトウェアの導入：3 ステップ

機器ごとの手順はリファレンス設計ページにあります。ここでは流れだけを示します。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.co.jp/solutions/reference-designs/parking-space-occupancy-detection" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>構成を選んで導入 🖱️</font></span></strong>
    </a>
</div><br />

1. **エッジホストのデプロイ**：各カメラの RTSP アドレスと MQTT ブローカーを入力してデプロイします。
2. **区画を描く**：8080 番ポートの区画エディターを開いてカメラを選び、空いている場所で矩形をドラッグし、角を区画に合わせ、区画 ID（例：B1-023）を入力して保存します。
3. **確認**：区画の状態が変わるとエディターの色が変わり、そのカメラの状態メッセージが MQTT に届きます。

## インターフェース

区画の状態は MQTT でブローカーへ送られ、カメラごとに 1 トピックです。

- **空き表示板・駐車誘導**：各カメラのトピックを購読し、メッセージ内の使用中・空き・不明の数を合計します。
- **専用区画の管理**：充電スタンドや来客用の区画を個別の枠にし、区画 ID で判断します。
- **Home Assistant や自社システム**：同じトピックを区画 ID で読み取ります。

| トピック / ポート | 内容 |
|---|---|
| MQTT `<site>/parking/<camera>/slots` | このカメラの各区画の状態（`occupied` / `free` / `unknown`）と 3 種類の数。いずれかの区画が変わると送信 |
| HTTP 8080 `/slots/editor` | 区画エディター：枠を描く、名前を付ける、リアルタイムの状態を見る |
| HTTP 8099 `/healthz` | サービスの状態 |

状態はフレームごとに揺れないよう保持されます。車両が停止して約 3 秒後に使用中、離れて約 5 秒後に空き、映像が途切れて約 10 秒後に不明になります。

## 性能と実測データ

### 複数系統と 1 系統

| 機器 | 入力 | 結果 |
|---|---|---|
| reComputer J30 シリーズ（Orin Nano） | 6 系統、各毎秒 1 フレーム、620 秒 | 全系統でフレーム欠落 0、各約 1.0 fps（実測） |
| reComputer J30 シリーズ（Orin Nano） | 1 系統 | 0.988 fps、1 フレーム p50 6.5 ms、区画ごとに 15 回の状態変化を送信（実測） |
| reComputer RK3588 シリーズ | 1 系統 | 1 フレーム p50 36.6 ms、17 回の状態変化を送信（実測） |
| reComputer RK3576 シリーズ | 1 系統 | 1.0 fps、区画状態メッセージ 21 件を受信、フレーム欠落 0（実測） |

1 系統の入力は、平面駐車場の静止画と暗いフレームを交互に流し、使用中と空きの切り替えを発生させたものです。

再現：`sensecraft-solutions/solutions/edge_parking_occupancy`（デプロイパッケージ）と入力映像 `slots-occ20-empty20-400s.mp4`

### カメラ映像の途切れ

| 機器 | 結果 |
|---|---|
| reComputer RK3576 シリーズ | 配信停止から 9.98 秒後、最後のフレームから約 11 秒後に区画が `unknown` に（実測） |

### モデルとランタイム

| 機器 | 車両検出 | ランタイム |
|---|---|---|
| reComputer J30 / J40 シリーズ | YOLOX、640×640、FP16 | TensorRT |
| reComputer RK3588 / RK3576 シリーズ | YOLOX、640×640、INT8（w8a8） | RKNN、MPP ハードウェアデコード |

判定に影響するパラメーター（デプロイパッケージの `config/slots*.json`）：

- `slot_coverage.occupied_ratio` / `free_ratio`：車両が枠面積の 0.3 以上で使用中、0.2 未満で空き。
- `slot_coverage.hold_s` / `free_hold_s`：状態が 3 秒 / 5 秒続いてから切り替え。
- `unknown_after_s`：映像が 10 秒途切れると不明。

### 既知の制限

- **広角レンズの歪みと隣接遮蔽**：広角カメラの画角周辺部ではパース歪みが生じ、手前の大型車（SUV やバンなど）が隣接する後方の区画を遮る場合があります。1 台のカメラでカバーする区画数は 30 区画以内を推奨します。
- **白線跨ぎと境界比率**：車両が区画線を跨いで駐車し、両側の被覆率が 0.2〜0.3 の遷移範囲に入る場合、一時的に状態が小刻みに変化することがあります。`hold_s` を長めに設定することで抑制できます。
- **水たまりの反射と動的な影**：雨後の路面の照り返しや柱・樹木の濃い影により、エッジ検出の信頼度が影響を受けることがあります。夜間は一定の環境照明（路面照度 ≥ 30 Lux）を確保してください。

## データと素材の出典

- スクリーンショットと 1 系統の結果は平面駐車場の静止画によるもので、画像の元の出典は確認中です。
- 検出モデルのコード YOLOX：Apache-2.0。
