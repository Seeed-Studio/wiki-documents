---
description: BLEビーコン、GNSS、LoRaWANで屋内外の人と資産を1つの地図で追跡する方法——必要な機器、現場の配置、WebSocket連携、サーバー側の実測データ
title: 'BLE＋LoRaWAN屋内外測位：構築・導入・実測結果'
keywords:
  - indoor positioning system
  - indoor outdoor positioning
  - BLE beacon positioning
  - LoRaWAN asset tracking
  - geofence alarm
  - floor plan georeferencing
  - offline basemap
  - PMTiles
  - SenseCAP T1000
  - SenseCAP BC03
  - SenseCAP M2 gateway
  - ChirpStack
  - WebSocket
image: https://files.seeedstudio.com/wiki/reference-design/indoor_positioning_ble_lorawan/map-indoor-22a6ee12.png
slug: /solutions/indoor-outdoor-positioning-ble-lorawan
sidebar_position: 3
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/ja/solutions/indoor-outdoor-positioning-ble-lorawan/
generated_from: sensecraft-solutions@indoor_positioning_ble_lorawan
---

:::caution[利用上の注意]
これは**安全認証済みシステムではありません**。LoRaWANのアップリンクは欠落することがあり、GNSSは屋内で使えず、BLE測位は金属の近くで精度が落ちるため、位置が遅れる・誤る・欠落することがあります。人の安全を守る唯一の手段としては使わないでください。
:::

## このソリューションでできること

現場には通常、建物と屋外区域の両方があり、どちらでも知りたいことは同じです。あのフォークリフト、機器、人は今どこにいるのか。屋内では電池式BLEビーコンが位置の基準となり、屋外ではトラッカー内蔵GNSSに切り替わります。両方のデータをLoRaWANで送り、Webダッシュボードに1つの地図として表示します。フロアプランを屋外地図にジオリファレンスできるため、建物から構内へ続く軌跡も1画面に収まります。

- オープンソース実装： [github.com/Seeed-Solution/Solution_IndoorPositioning_H5](https://github.com/Seeed-Solution/Solution_IndoorPositioning_H5)
- 構成の選択と導入： [参考設計ページ](https://www.seeed.co.jp/solutions/reference-designs/indoor_positioning_ble_lorawan)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>
            </div>
            <div class="info-content">
                <h3>センシング側に配線不要</h3>
                <p>ビーコンは電池式で壁面に取り付け、トラッカーは1回の充電で数か月レポートします。商用電源とネットワーク接続が必要なのはゲートウェイとホストです。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
            </div>
            <div class="info-content">
                <h3>屋内と屋外を自動切替する1つの地図</h3>
                <p>トラッカーが建物に出入りすると、サーバー側の状態機械がレイヤーを切り替えます。手動操作は不要で、窓際のトラッカーが頻繁に切り替わることもありません。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>オープンソース、データは自社ホストに</h3>
                <p>アプリケーションのソースはGitHubで公開され、自社ホスト上のDockerイメージとして動きます。インターネットに接続するのはベースマップだけで、オフラインのPMTilesアーカイブに置き換えられます。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <div class="info-content">
                <h3>サーバー容量の実測値</h3>
                <p>同時200タグでエンドツーエンドP95 828 ms・ロス0%、500タグでP95 2.35 sです。リプレイしたアップリンクで測定し、トラッカーとゲートウェイは接続していません。</p>
            </div>
        </li>
    </ul>
</div>

### ライブ出力

屋内レイヤーは登録済みフロアプラン上にトラッカーを描画します。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/indoor_positioning_ble_lorawan/map-indoor-22a6ee12.png" alt="ダッシュボード屋内レイヤー：登録済みフロアプラン上のトラッカーと左側のタグ一覧"/>
</div>

屋外レイヤーも同じページとWebSocketを使い、ベースに地図タイルを表示します。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/indoor_positioning_ble_lorawan/map-outdoor-8b31ec6e.png" alt="ダッシュボード屋外レイヤー：地図タイル上の同じトラッカー"/>
</div>

屋内外を移動する1台のトラッカー：

<div align="center">
  <img class='img-responsive' src="https://files.seeedstudio.com/wiki/reference-design/indoor_positioning_ble_lorawan/web-example-fdbff3c1.gif" alt="トラッカーの屋内外移動に合わせてダッシュボードが自動でレイヤーを切り替える様子"/>
</div>

スマートフォンのクライアントにも同じデータを表示します。

<div align="center">
  <img class='img-responsive' src="https://files.seeedstudio.com/wiki/reference-design/indoor_positioning_ble_lorawan/miniprogram-example-34c773a6.gif" alt="ミニプログラムクライアントの同じ位置データ"/>
</div>


ダッシュボードは`/web/map`の1ページで、**Indoor**と**Outdoor**を明示的に切り替えます。`/web/map?layer=outdoor`は壁面ディスプレイに適した直接リンクで、同じWebSocketを購読します。トラッカーは常に2つのビューのどちらか一方だけに描画されます。表示先は状態機械が決め、その判断はメッセージの`position.coordSystem`に含まれます。フロアプランの`{x, y}`には`metric`、`{lat, lon}`には`wgs84`を使います。

## 必要な機器

現場で使う機器は3種類です。ビーコンとトラッカーの数は導入規模に応じて変わります。

**① BLEビーコン** — 屋内測位の基準です。電池式で壁面に取り付け、配線は不要です。GNSSだけでカバーする屋外区域（構内、道路、駐車場）には必要ありません。

**② トラッカー** — 人が携帯するか、資産に取り付けます。屋内ではBLEをスキャンし、屋外では内蔵GNSSを使います。SOSボタンも備えます。

**③ LoRaWANゲートウェイ** — アップリンクを収集してネットワークサーバーへ転送します。ゲートウェイとトラッカーは地域の同じ周波数帯で購入してください。

| | 機器 | 公称容量 | 選択する条件 |
|---|---|---:|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-bc03-bluetooth-beacon.jpg" alt="SenseCAP BC03" width="110" /> | [SenseCAP BC03 Indoor Bluetooth Beacon](https://www.seeedstudio.com/Indoor-Bluetooth-Beacon-BC03-p-6732.html)<br/>屋内測位の基準、Bluetooth LE 5.0 | ゾーンあたり3台以上で2–3 m、1台では部屋レベル | 「建物内」より細かく位置を特定したい屋内区域 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-114993073-sensecap-card-tracker-t1000-a.jpg" alt="SenseCAP T1000-A" width="110" /> | [SenseCAP LoRaWAN Card Tracker T1000-A](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html)<br/>BLEスキャン、GNSS、動体検知、SOS | 追跡対象の人または資産ごとに1台 | バッジまたは資産タグ。屋内外を同じユニットでカバー |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/114992981_eu868_1.jpg" alt="SenseCAP M2 Gateway" width="110" /> | [SenseCAP M2 LoRaWAN Indoor Gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html)<br/>SX1302、地域別周波数バリエーション | 見通し2 kmまで、トラッカー100–200台 | 現場ごとに1～2台。既存のLoRaWANを使う場合は不要 |

表の容量値はすべて**公称値**で、デバイスのデータシートとこのハードウェアの導入実績に基づきます。ビーコンの精度は以下の設置方法によって変わります。

機器のほかに、アプリケーション用ホスト（Dockerを実行できる任意のマシン。サーバー側の実測ではreComputer J30シリーズを通常のarm64ホストとして使用）、ネットワークサーバー（**SenseCAP OpenStream**または独自の**ChirpStack**）が必要です。オフラインのベースマップを構築しない場合は、ホストからOpenStreetMapのラスタタイルへアクセスできる必要があります。

### 選定における制約・非推奨条件

- **サブメートル単位の高精度追跡**：BLE ビーコンの測位精度は 2〜3m です。AGV の高精度自律走行などセンチ・サブメートル級の連続制御が必要な用途には、UWB を選定してください。
- **秒単位のリアルタイム制御**：LoRaWAN は送信周期と遅延の制約があり、オフライン判定は 15 分です。秒単位の衝突防止などリアルタイムの安全制御には使用できません。

## 現場への導入

### 1. ハードウェアを設置する

:::tip[屋内精度はビーコン配置で決まります]
ビーコンは高さ**2.5–3 m**、間隔**5–10 m**（BC03の推奨間隔）で設置し、金属棚がある場所には追加します。公称2–3 mの値は**ゾーンあたり3台以上**を前提とし、ゾーンあたり1台では部屋レベルの特定になります。すべてのビーコンの**MACアドレスと位置**を記録してください。屋内位置はビーコンとゾーンの対応表から計算されます。ビーコンを移動したら対応表も更新してください。更新しないと、そのビーコンから計算される位置がすべてずれます。
:::

ゲートウェイの台数はカバレッジで決めます。公称の見通し距離は2 kmで、通常の現場は1～2台で足ります。2台目が必要かは壁と距離で決まり、タグ数には関係しません。ゲートウェイは周波数帯ごとにSKUが分かれています（US915 / EU868 / AS923など）。注文前に国の**周波数帯**を確認し、トラッカーも同じ帯域にしてください。

### 2. ソフトウェアを導入する：7ステップ

機器ごとの手順とアプリケーションパッケージは参考設計ページにあります。手順の概要：

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.co.jp/solutions/reference-designs/indoor_positioning_ble_lorawan" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>構成を選んでパッケージをダウンロード 🖱️</font></span></strong>
    </a>
</div><br />

1. **BLEビーコンを設置** — 配置・固定し、MACアドレスを記録します。
2. **LoRaWANゲートウェイを設定** — SenseCAP OpenStreamまたは独自のChirpStackに接続します。
3. **測位アプリケーションを導入** — 現在のマシンまたはSSH経由のリモートホストにDockerで導入します。
4. **トラッカーを設定して有効化** — ネットワークに参加させ、アップリンク間隔を設定します。
5. **フロアプランをジオリファレンス** — プランをアップロードし、原点・回転・縮尺を設定して屋外地図の正しい位置に合わせます。ジオリファレンスとジオフェンスはどちらも設定ページで行います。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/indoor_positioning_ble_lorawan/config-7ff6962d.png" alt="設定ページ：フロアプランのアップロード、原点と回転、ジオフェンス一覧"/>
</div>

6. **ジオフェンスアラームを設定** — WGS84で境界を描き、アラームルールを割り当てます。
7. **ダッシュボードを開く** — トラッカーが表示・移動し、設定したアラームが発生することを確認します。

難易度は**中級**、所要時間は約**60分**です。手順5と6はソフトウェア設定だけで、追加のハードウェアは不要です。

:::caution[初期ログイン]
イメージは linux/arm64 と linux/amd64 に対応しています。ダッシュボードの初期ログインは`admin` / `12345678`です。初回ログイン後に「設定 → 認証」で変更してください。
:::

## 利用できるインターフェース

アプリケーションが公開する機能は、導入先ホストのポート**5173**で提供されます。統合する側に応じて3つの方法があります。

- **壁面ディスプレイまたは2台目の画面** — `/web/map?layer=outdoor`（または`?layer=indoor`）を開きます。同じページとWebSocketを使うため、追加設定は不要です。
- **既存の警備・配車・勤怠システム** — WebSocketを購読し、次の2種類のメッセージを処理します： `tracker_sos`は緊急ボタン、`tracker_checkin` / `tracker_position_detection`に`transition: enter`または`exit`を含む`geofence`ブロックがある場合はジオフェンスイベントです。それ以外はテレメトリです。
- **自社サービス** —完全なペイロードを利用します。各更新にはフロアプラン上のmetric座標またはWGS84座標が含まれ、`coordSystem`で識別できます。RESTエンドポイントからジオフェンスの作成やジオリファレンスパラメータの読み書きをプログラムで行えます。

### インターフェースとペイロードの全体像

| インターフェース | エンドポイント | ペイロード |
|---|---|---|
| WebSocket | `ws://<host>:5173/ws` | `tracker_update`の`position` = `{x, y, coordSystem: "metric"}` または`{lat, lon, accuracy, coordSystem: "wgs84"}`; `tracker_checkin` / `tracker_position_detection` はenter/exit時に追加の`geofence`ブロックを持ち、さらに`tracker_sos`と`tracker_offline` |
| REST | `GET/PUT /api/configuration/dashboard/maps/{mapName}/registration` | `{origin_lat, origin_lon, rotation_deg, scale}`. 拒否 `\|lat\|` > 85° and `scale` ≤ 0. 管理者セッションが必要で、ゲストセッションは**403**になります |
| REST | `POST /api/geofences`, `POST /api/events` | フェンス形状（GeoJSONポリゴン、または点と`radius_m`）と、それを参照するアラームルール |
| LoRaWAN uplink in | SenseCAP OpenStream, またはChirpStack MQTTトピック | フィールドマッピングは導入ガイドに記載 |

ジオフェンスアラームは専用チャネルではなく、チェックインと同じメッセージに含まれます。

```json
{"type": "tracker_checkin", "data": {"2CF7F1C0530004AD": {
  "timestamp": 1788582647214, "map": "Plant A",
  "geofence": {"id": 1, "name": "Plant A", "transition": "enter"},
  "position": {"lat": 22.5362, "lon": 113.9432, "accuracy": null, "coordSystem": "wgs84"},
  "last_detected_beacons": []}}}
```

**扱いに注意する2つのフィールド**：屋内外は`lat`の有無ではなく`coordSystem`で判定してください。同じメッセージ型がどちらの座標形式も持ちえます。このハードウェアでは`accuracy`は**常に`null`**です（SenseCAPとChirpStackのアップリンクにはGNSS精度の測定値が含まれません）。「不明」として扱ってください。

## 性能と実測データ {#appendix}

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Solution/Solution_IndoorPositioning_H5" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Solution_IndoorPositioning_H5</font></span></strong>
    </a>
</div><br />

以下はサーバー側の実測値です。合成アップリンクをローカルMQTTブローカーへ公開し、結果をダッシュボードのWebSocketから取得しました。T1000トラッカーとゲートウェイは経路に含まれていません。アプリケーションはreComputer J30シリーズ（通常のarm64ホストとして使用、GPU未使用）で実行し、各段階2–4分です。

### 容量と遅延

| 指標 | 測定値 | 条件 |
|---|---|---|
| 安定時容量 | 同時200タグ、エンドツーエンドP95 828 ms、アップリンクロス0% | タグごとに30秒あたり1アップリンク、800アップリンク、2分 |
| 劣化時容量 | 500タグ、P95 2.35 s、ロス0% | 同じ条件、2000アップリンク、2分。2秒の遅延予算だけ未達 |
| 1000タグ時の容量 | P95 4.1 s、ロス0%、プロセスは提供継続 | 同じ条件。正常に提供を続けており、負荷をそれ以上増やしていない |
| 更新レート | アップリンク間隔2秒の50タグ、4500アップリンクでP95 220 ms、ロス0% | 3分。30 / 10 / 5秒間隔もP95 89 / 163 / 146 msで安定 |
| SOSアラーム遅延 | P50 24 ms、P95 29 ms、最大29 ms、n=20 | 単一タグ、同時負荷なし。アップリンク時刻からWebSocket配信まで |
| オフライン検出 | 903 sと950 s | 2回実施。15分しきい値と60秒ポーリングから期待される範囲は[900 s, 960 s] |

容量と更新レートはサーバーだけの値です。トラッカーの送信頻度はアップリンク間隔とLoRaWANのデューティサイクルで決まります。

再現：上流`indoor_positioning_ble_lorawan`の`runs/2026-09-05-orin-nano/boundary.capacity.yaml`、`boundary.update_frequency.yaml`、`boundary.sos_latency.yaml`、`boundary.offline_latency.yaml`（アプリケーションコード`feature/outdoor` @ `443bce6`）

### ジオフェンスとジオリファレンス

| 指標 | 測定値 | 条件 |
|---|---|---|
| ジオフェンスアラーム遅延 | P50 14 ms、最大14 ms、アラーム2件 | リプレイツールとサーバーを同一ホストのループバックで実行、単一タグ、17アップリンク |
| ジオフェンスヒステリシス | 境界上で内外を6回反転させても**アラームは0件**。enterとexitはいずれも3点連続で発生 | 同上 |
| ジオリファレンス誤差 | 原点から2 km以内の全域で≤ 0.21 m、`\|lat\|` ≤ 60° | 方位角を15°ごとに走査し、半径500 / 1000 / 2000 m、lat0 ∈ {0, 22.5, 45, 60}での最悪値。**予算は0.7 m**。投影計算のみで、実地測量なし |

再現：`runs/2026-09-05-geofence-smoke/results.md`、`runs/2026-09-05-georef/results.md`

### ランタイムと主要パラメーター

トラッカーは観測結果（検出した設定済みビーコン、またはGNSS fix）だけを送信し、位置はサーバーが算出します。屋内外の切り替えとアラームの間隔は、次の3つのサーバー側パラメーターで決まります。

- **屋内 ↔ 屋外の切り替え**：20秒以内に3回のGNSS fixがあり、かつ15秒間設定済みビーコンを検出しない場合に屋外へ切り替えます。連続2回のスキャンでそれぞれ2台以上の設定済みビーコンを検出すると屋内へ戻ります。窓際のトラッカーが屋内外を行き来することはありません。
- **ジオフェンスの遷移**：10秒以内に3点連続した場合にだけ`enter` / `exit`が発生します。geoモードではアラームルールの`time_range`フィールドは無効で、UIで設定した時間帯はこの確認に置き換えられます。
- **オフライン検出**：15分間アップリンクがなければオフラインと判定し、60秒ごとにポーリングします。**ハードコード**です。
- **オフラインベースマップ**：インターネットのない現場では`go-pmtiles extract`でローカルのPMTilesアーカイブを構築します（バウンディングボックス内のタイルだけを取得）。納品前にアーカイブを構築して一度読み込んでください。

### 既知の劣化

- **屋内精度はビーコン配置に左右されます。**2–3 mは公称値（BC03 wiki）で、ゾーンあたり3台以上、高さ2.5–3 m、間隔5–10 mを前提とします。ゾーンあたり1台では部屋レベルです。金属棚は三辺測量を劣化させるため、その場所にはビーコンを追加してください。
- **タグ数が増えると遅延が伸びます**：エンドツーエンドP95は500タグで2.35 s、1000タグで4.1 sです。
- **ジオリファレンス誤差は半径と緯度に応じて増えます**：有効範囲はおよそ2 kmで、APIは`\|lat\|`が85°を超える入力を拒否します。
- **`accuracy`と`alt`にはデータが入りません**：精度で分岐するロジックはこのハードウェアでは常にnull側を通り、ジオフェンスエンジンは`accuracy`の欠落を合格として扱います。

## データと素材の出典

- **実測データ** — 「性能と実測データ」の数値はすべて、上流`sensecraft-solutions`の`indoor_positioning_ble_lorawan`にある`description.md`と、そこからパスで参照される各実行レポートに由来します。データは実行用に生成した合成リプレイトレースで、顧客現場のデータは含みません。
- スクリーンショットとトレースに表示される**デバイスEUI**は、リプレイツールが使用した合成値です。
- 屋外スクリーンショットの**ベースマップタイル**は© OpenStreetMap contributorsで、[ODbL](https://www.openstreetmap.org/copyright). この帰属表示はページとともに保持されます。
- ジオリファレンスのスクリーンショットにある**フロアプラン**は、評価実行用に作成して後で削除した合成テスト画像です（50 m × 40 mのデモ地図上の1000×800 pxプラン）。
- **アプリケーションのソース**は [Seeed-Solution/Solution_IndoorPositioning_H5](https://github.com/Seeed-Solution/Solution_IndoorPositioning_H5); 派生製品を出荷する前に、リポジトリのライセンス条件を確認してください。
- **ダッシュボードのキャプチャとデモGIF** — アプリケーション自身のUI（`solution-indoor-positioning`内の`docs/ui/`と`assets/`）から取得しています。屋外レイヤーのベースマップはODbLに基づくOpenStreetMapタイルで、出典は上流パッケージの`gallery/ATTRIBUTION.md`に記載されています。
