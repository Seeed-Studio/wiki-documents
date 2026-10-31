---
description: 既存のゲートカメラとエッジホスト 1 台でナンバー認識とホワイトリスト自動開閉を構成する方法：必要な機器、導入、インターフェース、Jetson と RK ホストでの実測データ
title: エッジ ナンバープレート認識：選定・導入・実測データ
sidebar_label: 'エッジナンバープレート認識'
keywords:
  - ナンバープレート認識
  - ANPR
  - 駐車場 ゲート ホワイトリスト
  - 自動開閉
  - Jetson Orin Nano
  - Jetson Orin NX
  - RK3588
  - RK3576
  - YOLOX
  - MQTT
image: https://files.seeedstudio.com/wiki/reference-design/edge_plate_recognition/panel-plate-1-jetson-blue-oblique-20261009-2e5b3792.jpg
slug: /solutions/edge-license-plate-recognition
sidebar_position: 20
last_update:
  date: 10/09/2026
  author: seeed-solutions-hub
createdAt: '2026-10-09'
updatedAt: '2026-10-30'
url: https://wiki.seeedstudio.com/ja/solutions/edge-license-plate-recognition/
generated_from: sensecraft-solutions@76f6c0f
---

:::caution[ご利用にあたって]
中国本土の 1 段式青ナンバー（7 桁）と新エネルギー車用グリーンナンバー（8 桁）に対応します。2 段ナンバー、特殊車両、海外のナンバーには対応していません。検出・認識モデルの重みのライセンスは未確定のため、商用配布の前に確認が必要です。
:::

## このソリューションでできること

出入口に設置済みのネットワークカメラをそのまま使い、現場に認識ホストを 1 台追加してナンバーを読み取ります。ホワイトリストの車両が来ると、ゲートコントローラーがゲートに開信号を 1 回送り、車両ごとにナンバー・信頼度・スナップショットの記録が残ります。マンション、構内、従業員駐車場の出入口向けで、ゲートに接続せず入出庫の記録だけに使うこともできます。

- デプロイパッケージ（Docker Compose と設定）：[github.com/suharvest/sensecraft-solutions](https://github.com/suharvest/sensecraft-solutions/tree/main/solutions/edge_plate_recognition)
- 選定と導入：[リファレンス設計ページ](https://www.seeed.co.jp/solutions/reference-designs/edge-anpr-plate-recognition)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>ナンバーと映像は現場に</h3>
                <p>認識は現場のホストで完結。スナップショットはホストに既定で 7 日間保存され、リンクで取得したときだけ外に出ます。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>1080p で毎秒 30 フレーム</h3>
                <p>reComputer J30 シリーズと RK3576 シリーズはいずれも 1080p を毎秒 29–30 フレームで処理（「性能と実測データ」参照）。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>カメラはそのまま</h3>
                <p>既存の 1080p ネットワークカメラを RTSP で接続し、ホストが LAN 経由で映像を取得します。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
            </div>
            <div class="info-content">
                <h3>車両ごとに 1 件の記録</h3>
                <p>1 台につき 1 回だけ、ナンバー・種別・信頼度・スナップショットのリンクを送信。駐車場システムは MQTT トピックを 1 つ購読するだけです。</p>
            </div>
        </li>
    </ul>
</div>

### 実機の画面

認識ホスト内蔵のブラウザープレビュー画面です。ナンバーを枠で囲んで番号と信頼度を表示し、右側に直近 5 件の認識結果を並べます。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_plate_recognition/panel-plate-1-jetson-blue-oblique-20261009-2e5b3792.jpg" alt="reComputer J30 シリーズの認識プレビュー：青ナンバー 皖A62599 を信頼度 0.98 で認識"/>
</div>

入力映像は公開データセット CCPD のテスト用静止画（MIT ライセンス）を RTSP でループ再生したもので、現場映像ではありません。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/edge_plate_recognition/panel-plate-2-jetson-green-front-20261009-a3ab0b16.jpg" alt="reComputer J30 シリーズがグリーンナンバー 皖AF10528 を信頼度 0.87 で認識"/>
</div>

## 必要なハードウェア

現場に必要なのは、出入口カメラ、認識ホスト 1 台、自動開閉する場合はゲートコントローラーと中間リレーです。

**① 出入口カメラ**：既存のネットワークカメラ。1080p 以上、RTSP 出力に対応したもの。

**② 認識ホスト**：4 機種から 1 台。出入口カメラ 1 台につき 1 台です。

| | 認識ホスト | 実測（1080p 入力） | 選ぶ場面 |
|---|---|---:|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-114110311-recomputer-super-j3010-nano-8g.jpg" alt="reComputer Super J3011" width="110" /> | [reComputer Super J3011](https://www.seeedstudio.com/reComputer-Super-J3011-p-6444.html)<br/>Jetson Orin Nano、JetPack 6.2 | 毎秒 30 フレーム | 標準の選択 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-114110311-recomputer-super-j3010_1.jpg" alt="reComputer Super J4012" width="110" /> | [reComputer Super J4012](https://www.seeedstudio.com/reComputer-Super-J4012-p-6443.html)<br/>Jetson Orin NX、JetPack 6.2 | J30 と同じパッケージ | 同じホストで他のモデルも動かす |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26__1.png" alt="reComputer RK3588" width="110" /> | [reComputer RK3588 シリーズ](https://www.seeedstudio.com/reComputer-RK3588-30-p-6817.html)<br/>オンボード NPU | 導入と出力を実測 | 現場を Rockchip で統一する |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/3/5/3576_gif_26__3_1.gif" alt="reComputer RK3576" width="110" /> | [reComputer RK3576 シリーズ](https://www.seeedstudio.com/reComputer-RK3576-30-p-6815.html)<br/>オンボード NPU | 毎秒 29–30 フレーム | コスト優先 |

**③ ゲートコントローラー（オプション）**：[reComputer R1100 シリーズ（R1124-10）](https://www.seeedstudio.com/reComputer-R1124-10-p-6257.html)。MQTT ブローカーとホワイトリストを持ち、デジタル出力から DIN レール型の中間リレー経由でゲートに開信号を送ります。閉じる動作はゲート自身のループコイルやレーダーが担います。

カメラ、認識ホスト、ゲートコントローラーは同じ LAN に置き、有線接続を推奨します。

## 現場への導入

### 1. カメラの設置

:::tip[ナンバーが映像ではっきり読めること]
カメラは車線から 3–8 m の位置に固定し、ナンバーが通過する位置に向けます。認識は映像内の設定領域（既定は画面の中央下部）だけで行うため、カメラを動かしたら領域を確認し直してください。
:::

### 2. ソフトウェアの導入：3 ステップ

機器ごとの手順はリファレンス設計ページにあります。ここでは流れだけを示します。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.co.jp/solutions/reference-designs/edge-anpr-plate-recognition" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>構成を選んで導入 🖱️</font></span></strong>
    </a>
</div><br />

1. **ゲートコントローラー（オプション）**：R1124-10 に MQTT ブローカーと開閉サービスを入れ、ホワイトリスト CSV をアップロードし、テスト開閉でゲートが動くことを確認します。
2. **認識ホスト**：カメラの RTSP アドレスと MQTT ブローカーのアドレスを入力してデプロイします。初回はランタイムとモデルのダウンロードにネット接続が必要で、その後はオフラインで動作します。
3. **確認**：ホストの 8080 番ポートのプレビュー画面を開き、通過車両のナンバーが枠で囲まれること、ナンバートピックに車両ごとに 1 件届くことを確認します。

運用開始前に、自分の出入口の昼間と夜間の映像で、実際のナンバーと認識結果を照合してください。

## インターフェース

結果は導入時に指定した MQTT ブローカー（通常は R1124-10）に送られ、スナップショットと状態は HTTP で取得します。

- **駐車場・課金システム**：ナンバートピックを購読。1 台につき 1 件で、`plate_normalized` で照合します。
- **ゲート**：R1124-10 がナンバー記録をホワイトリストと照合し、結果を開閉トピックに送ります。同じナンバーがクールダウン内に再到着した場合は `suppressed` として記録し、再度は開きません。
- **自社システム**：記録内のリンクからスナップショットを取得し、ヘルスチェックでサービスを監視します。

| トピック / ポート | 内容 |
|---|---|
| MQTT `<site>/parking/<camera>/plate` | ナンバー、種別（`cn_blue` / `cn_green`）、信頼度、投票フレーム数、画面内の位置、スナップショットのリンク |
| MQTT `<site>/parking/<camera>/gate` | 開閉記録：`open_pulse`（開放）または `suppressed`。対応するナンバー記録とホワイトリストのラベル付き |
| MQTT `<root>/status` | サービスの状態を定期送信。ホストがオフラインになると最後の 1 件がブローカーに残ります |
| HTTP 8080 `/snapshots/{seq}.jpg` | ナンバー記録からリンクされるスナップショット。既定で 7 日間保存 |
| HTTP 8081 `/whitelist`（R1124-10） | GET で現在のホワイトリスト CSV、PUT で全体を置換（形式エラーは 400 と行番号）。`POST /gate/test` でテスト開閉 |
| HTTP 8099 `/healthz` | 処理速度を含むサービス状態 |

スナップショットは記録に埋め込まず、記録にはリンクとスナップショットの sha256 だけが入ります。

## 性能と実測データ

### 処理速度

| 機器 | 処理速度 | 1 フレームのナンバー検出 | 条件 |
|---|---:|---:|---|
| reComputer J30 シリーズ（Orin Nano） | 29.9 fps（実測） | p50 5.6 ms（実測） | 1080p RTSP、30 fps 入力 |
| reComputer RK3576 シリーズ | 29–30 fps（実測） | p50 23.1 ms、認識 1.8 ms（実測） | 同上 |

再現：`sensecraft-solutions/solutions/edge_plate_recognition`（デプロイパッケージ）と入力映像 `plate-labeled40-1080p-120s.mp4`

### 認識結果

入力は CCPD テストセットのナンバー静止画で、1 枚ずつ数秒表示し、1080p の RTSP で配信しました。正解は CCPD のファイル名から取得しています。

| 機器 | 入力 | 結果 |
|---|---|---|
| reComputer J30 シリーズ | 静止画 40 枚 | ナンバー記録 56 件のうち 50 件が正解と一致（実測） |
| reComputer RK3576 シリーズ | 静止画 40 枚 | ナンバー記録 57 件のうち 51 件が正解と一致（実測） |
| reComputer J30 シリーズ | 静止画 8 枚 | 5 枚正読、3 枚は記録なし、誤ったナンバー 0（実測） |
| reComputer RK3588 シリーズ | 静止画 8 枚 | 5 枚正読、3 枚は記録なし、誤ったナンバー 0（実測） |

1 枚の静止画が表示されている間に複数の記録が出ることがあるため、記録数は静止画の枚数より多くなります。読み取れない場合は送信しません。8 枚の静止画ではどちらの機器も誤ったナンバーを送信していません。

再現：`sensecraft-solutions/solutions/edge_plate_recognition/gallery/ATTRIBUTION.md`（8 枚のファイル名と正解）

### モデルとランタイム

| 機器 | 検出 | 認識 | ランタイム |
|---|---|---|---|
| reComputer J30 / J40 シリーズ | YOLOX-Tiny、640×640、FP16 | PlateRecNet（自社開発）、96×32、FP16 | TensorRT、ハードウェアデコード |
| reComputer RK3588 / RK3576 シリーズ | YOLOX-Tiny、640×640、INT8 | PlateRecNet、96×32、INT8（出力層は FP16） | RKNN ランタイム 2.3.2、MPP ハードウェアデコード |

結果に影響するパラメーター（デプロイパッケージの `config/plate.json`）：

- `plate.roi`：認識領域。既定は画面の中央下部。カメラを動かしたら描き直します。
- `plate.vote`：1 台につき最大 7 フレームで投票し、3 フレーム以上が一致し信頼度 0.6 以上なら記録を送信。
- `plate.dedup_s`：同じナンバーは 30 秒に 1 回だけ送信。

### 既知の制限

- **非対応プレート**：中国本土の 1 段青ナンバー（7 桁）および新エネルギー車用グリーンナンバー（8 桁）に対応。2 段黄ナンバー、トレーラー、特殊車両、海外ナンバーは非対応です。
- **カメラアングルと車速**：進入角度 ≤ 30°、画面内のプレート幅が 96 ピクセル以上必要です。極端な斜め進入（> 45°）や時速 30 km を超える場合は認識率が低下します。
- **逆光とヘッドライトの反射**：直射日光の反射や夜間のハイビームによる白飛びは文字欠落の原因となります。夜間は 5000K の均一な補助照明を推奨します。

## データと素材の出典

- CCPD（Xu, Z. et al., ECCV 2018）：[github.com/detectRecog/CCPD](https://github.com/detectRecog/CCPD)、MIT License、Copyright (c) 2017 CCPD。本ページのスクリーンショットはそのテストセット画像を使用しており、写っているのは公開データセット内の実在のナンバーです。
- 検出モデルのコード YOLOX：Apache-2.0。認識モデルの構造は自社コードです。いずれも学習済み重みのライセンスは未確定のため、商用配布の前に確認が必要です。
