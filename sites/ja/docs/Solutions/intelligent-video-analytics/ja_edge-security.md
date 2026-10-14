---
description: エッジ映像による立入・越線・滞留アラート：必要な機器、構築手順、利用できるインターフェース、3台のホストでの判定時間とスループットの実測データ
title: 'エッジセキュリティアラート：立入、越線、滞留検知'
keywords:
  - エッジセキュリティ
  - 侵入検知
  - 周辺警戒
  - 越線検知
  - 滞留検知
  - 人物検知
  - エッジAI
  - reComputer
  - Jetson
  - RK3588
  - Hailo-8
  - MQTT
  - RTSP
image: https://files.seeedstudio.com/wiki/reference-design/edge_security/wall-4up-en-25c00317.png
slug: /solutions/edge-security
sidebar_position: 3
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/ja/solutions/edge-security/
generated_from: sensecraft-solutions@edge_security
---

:::caution[利用上の注意]
補助的なアラートであり、セキュリティ製品としての認証は受けていません。巡回や入退室管理システムの代わりにはなりません。
:::

## このソリューションでできること

カメラ映像上で立入禁止区域または越線を描き、侵入や線の通過でアラートを発生させます。区域内に長く留まると滞留アラートも追加されます。検知、判定、証拠データ、通知はすべて現場のエッジホストで処理され、映像は外部へ送信されず、インターネット接続なしでも動作します。ルールエディタとウォールの映像もオンサイトのデバイスから取得し、ブラウザはローカルホストと直接通信します。

![廊下の先にある赤い立入禁止区域内に3人が立ち、4人目が琥珀色の線を越えている。矢印はルールが数える方向を示す](https://files.seeedstudio.com/wiki/reference-design/edge_security/corridor-overlay-63abe979.jpg)

3つのルール:

| ルール | 発火条件 |
|---|---|
| 立入禁止区域 | 追跡中の人物の重心が、描画したポリゴンに入ったとき |
| 滞留 | 設定した滞留時間を超えて区域内に留まったとき。侵入アラートに**追加**され、置き換えにはならない |
| 越線 | 人物の追跡軌跡が描画した線を越えたとき。線は一方向だけを数えられるため、逆方向の通過は発火しない |

ルールは正規化座標で保存されるため、解像度を変えても描き直す必要はありません。ただしカメラを動かした場合は、その映像に合わせて描き直してください。

システムは2つのプロセスで構成されます。**検出器**が人物検出と人物ごとの追跡を行い、公開されたメッセージ形式で MQTT に送信します。**ハブ**は購読したデータからルールを判定し、アラートを保存して操作画面を提供します。新しいボードでは検出器だけを追加すればよく、判定側を変更する必要はありません。

対象範囲：検出対象は人物のみで、車両、荷物、工具には別の検出モデルと新たな検証が必要です。各アラートに保存されるのは動画クリップではなく1フレームで、証拠用の録画は行いません。

- オープンソース実装: [github.com/suharvest/edge-security-kit](https://github.com/suharvest/edge-security-kit)
- ハードウェア選定とデプロイ: [参考設計ページ](https://www.seeed.co.jp/solutions/reference-designs/edge_security)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>現場端末でリアルタイム判定、映像は外部へ出さない</h3>
                <p>人物検知、トラッキング、ルール判定はすべて現場ホストで完結。オフラインでも動作し、ネットワークを流れるのはアラート情報のみです。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>既存の RTSP カメラをそのまま活用</h3>
                <p>標準 RTSP ストリームと H.264 デコードに対応。既設の防犯カメラの交換や再配線は不要です。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>サーバー不要、単体で完結</h3>
                <p>ブローカー、ルールエンジン、Webワークベンチがすべて内蔵。ブラウザから直接アクセスでき、クラウドアカウントも不要です。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
            </div>
            <div class="info-content">
                <h3>マルチプラットフォーム対応とオープンソース</h3>
                <p>Jetson（TensorRT）、RK3588（RKNN）、Hailo-8（HailoRT）をサポート。Docker 構成とモデルコードは完全公開されています。</p>
            </div>
        </li>
    </ul>
</div>

### 操作画面

**ビデオウォール**：各ストリームのライブ映像をグリッドに並べ、検出ボックス（track id とスコア）、区域ポリゴン、方向付きの線を重ねて表示します。下部にはオンラインストリーム数、保留中・確認済みのアラート数が表示されます。

![4分割ウォール：各タイルのオーバーレイボックスとルール形状、ストリームごとの信頼度スライダー、ベール表示されたオフラインタイル](https://files.seeedstudio.com/wiki/reference-design/edge_security/wall-4up-en-25c00317.png)

*デモ画像。映像ソースはリポジトリ同梱のカラーバーテストソースで、画面構成、オーバーレイ、数値を示すためのものです。*

ストリーム数に応じてグリッドは変わり、4ストリームを超えると 3x3 になります。

![9分割ウォール](https://files.seeedstudio.com/wiki/reference-design/edge_security/wall-9up-zh-0b724776.png)

*デモ画像。*

`F` キーで全画面表示になり、上部バーが折りたたまれてタイルが画面全体に広がります。制御室の HDMI モニター向けです。

![全画面モード：上部バーが消え、9タイルが画面いっぱいに表示される](https://files.seeedstudio.com/wiki/reference-design/edge_security/wall-fullscreen-zh-2509b6e9.png)

*デモ画像。*

**ルールを描く**：ルールページの背景は、ハブが検出器のプレビューエンドポイントからプロキシしたカメラ映像です。描画した境界と検出器が判定するフレームは同じ座標系になります。複数回クリックしてポリゴン（立入禁止区域）を閉じるか、2回クリックして線を引きます。線の方向は双方向、正方向のみ、逆方向のみから選べます。滞留は区域に設定した滞留時間です。「シミュレート」ボタンでアラートをチェーン全体（保存と配信）に1件流して確認できます。シミュレーションアラートには印が付き、クールダウンを回避します。

![ルールエディタ：ライブ映像上で立入禁止区域ポリゴンを閉じ、方向付きの線を引く](https://files.seeedstudio.com/wiki/reference-design/edge_security/rules-editor-4c1e3847.jpg)

**信頼度の調整**：各ストリームのしきい値は、設定ファイルの編集や再起動なしでウォール上で変更できます。200 は検出器がすでにその値を使用していること、409 は明示的な拒否、504 は時間内に ack がなかったことを示し、504 のとき画面は成功扱いで更新しません。

![信頼度スライダーを変更中の状態。4ストリームがそれぞれ異なる値を表示している](https://files.seeedstudio.com/wiki/reference-design/edge_security/wall-confidence-en-1f517542.png)

*デモ画像。*

**カメラの追加**：「カメラ追加」ダイアログで、再デプロイなしで新しいストリームを実行時に追加できます。同じストリーム ID は下流へ送る前にハブが拒否します。単一ストリームの検出器は `ok:false` を返し、画面は理由とともに409を表示します。ack が届かない場合、ダイアログは開いたまま結果不明と表示します。

![RTSP パスワードをエコー行でマスクしたカメラ追加ダイアログ](https://files.seeedstudio.com/wiki/reference-design/edge_security/wall-add-camera-en-aff6fa40.png)

*デモ画像。*

![カメラ追加のタイムアウト：検出器が応答しないため、ダイアログが開いたまま結果不明と表示される](https://files.seeedstudio.com/wiki/reference-design/edge_security/wall-add-camera-timeout-zh-99ae7cc2.png)

*デモ画像。*

**アラートの処理**：アラート一覧は新しい順で、各行に発火時に保存したフレーム、デバイス、ストリーム、ルール名、track id、スコアが含まれます。確認すると担当者と時刻が記録されます。一覧はデバイス、ストリーム、ルール名、時間範囲で絞り込め、絞り込んだ行を CSV に出力できます。

![アラート操作画面：処置コントロールと取り消しバーを備えたアラート一覧](https://files.seeedstudio.com/wiki/reference-design/edge_security/workbench-alerts-9a0d30e9.jpg)

![アラート詳細：保存フレームの拡大表示と、その行に含まれる全フィールド](https://files.seeedstudio.com/wiki/reference-design/edge_security/alert-detail-bd474e60.jpg)

## 必要な機器

### カメラ

ストリームごとに固定設置の IP カメラを1台用意します。すべてのデコード経路が H.264 用に構成されているため、**H.264 を出力できることが必須**です。標準 RTSP を使うため、既存のカメラもそのまま利用できます。

### ホスト

検出、判定、操作画面は1台のマシンで実行できます。

| | ホスト | アクセラレータ | 映像デコード | 使用ポート | 空き容量 |
|---|---|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/110110147.jpg" alt="reComputer J3011" width="110" /> | [reComputer J3011 / J4012](https://www.seeedstudio.com/reComputer-J3011-p-5590.html)<br/>Jetson Orin モジュール | Jetson GPU (TensorRT) | NVDEC ハードウェアデコード | 8090 / 1883 / 8099 | 約10 GB、エンジン構築を含む |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26__1.png" alt="reComputer RK3588" width="110" /> | [reComputer RK3588 シリーズ](https://www.seeedstudio.com/reComputer-RK3588-30-p-6817.html)<br/>Rockchip NPU | Rockchip NPU (RKNN) | オンボード MPP ハードウェアデコード | 8090 / 1883 / 8099 | 約6 GB |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-recomputer-industrail-r2000.jpg" alt="reComputer Industrial R2035-12" width="110" /> | [reComputer Industrial R2035-12](https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html)<br/>ファンレス産業用筐体 | Hailo-8 (HailoRT) | CPU ソフトウェアデコード | 8090 / 1883 / 8099 | 約6 GB |

経路ごとの前提条件:

- **Jetson**: 検出器は対象デバイス上で構築した TensorRT エンジンを読み込みます。初回デプロイ時に対象デバイス上で構築し、実測値は361秒でした。デコードには NVDEC を使い、Jetson 以外のホストは事前チェックで失敗し、ソフトウェアデコードには切り替わりません。
- **RK3588**: `/usr/lib/librknnrt.so`、`python3` からの `rknn_toolkit_lite2` import、ハードウェアデコードノード `/dev/mpp_service` が必要です。どれか1つでも欠けるとデプロイは早期に失敗します。
- **Hailo-8**: HailoRT とドライバのバージョンを一致させます（4.21.0 で実測）。アクセラレータコンテキストは排他的で、他のプロセスが `/dev/hailo0` を保持していてはいけません。

**複数拠点のアラートを1つの一覧にまとめる**：共有ハブプリセットをデプロイします。検出器を持たない常時稼働マシンにブローカー、ルールエンジン、操作画面を置き、各検出器の `mqtt_host` をそのマシンに向けます。検出器の種類は統一する必要がありません。

ハブに専用サーバーは不要です。検出器も動かしている RK3588 ボード上で、ハブは1コアの3.7%、RSS 52.8 MBでした。

### 選定における制約・非推奨条件

- **チャンネル数と処理負荷**：1080p で 8 系統超、または 720p で 16 系統超の追跡を 1 台で行う場合は、J3011 を避け、J4012 またはハードウェアデコーダー搭載の RK3588 を選定してください。
- **無線ネットワークの制限**：多チャンネル RTSP はパケット損失に敏感なため、単一周波数 Wi-Fi での運用は非推奨です。有線ギガビット LAN を確保してください。

## 現場での構築手順

設置条件：監視対象のドア、通路、区域全体がフレーム内に入り、通行する人物が棚、キャビネット、柱などに長時間隠れないようにします。設置後はカメラを動かさないでください。

4つのプリセット（Jetson 単体、RK3588 単体、Hailo 単体、共有ハブ）は、スタックのデプロイと操作画面の起動の2段階です。構成の詳細とパッケージは参考設計ページにあります：

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.co.jp/solutions/reference-designs/edge_security" target="_blank">
        <strong>参考設計ページで機器選定と構築手順を確認する</strong>
    </a>
</div>

### ステップ1: スタックをデプロイする

ホストアドレスとカメラの RTSP URL を入力します。`mosquitto`（ブローカー）、`hub`（ルールエンジンと操作画面）、`detector`（検出器）の3コンテナが起動します。

このステップではハブのヘルスレスポンスと、初回起動時に生成された管理者パスワードを表示します。**固定の既定パスワードはありません**。生成されたパスワードはハブコンテナ内の `/data/initial-password.txt` にも保存されます。続いて、検出器が実際にネゴシエートしたデコード経路を表示します。RK3588 では `mppvideodec`、Jetson では `nvv4l2decoder` と表示されるハードウェアデコードが期待される状態です。

### ステップ2: 操作画面を開く

`http://<host>:8090` を開き、表示されたパスワードで `admin` としてログインします。求められたら新しいパスワードを設定してください。

![検出器ごとに可用性、実際に使われているデコード経路、モデルバージョンを表示するデバイス一覧](https://files.seeedstudio.com/wiki/reference-design/edge_security/devices-table-a04ae23a.jpg)

**デバイス** ページでホストがオンラインで、デコード欄が `hw` になっていることを確認します。この値は検出器が稼働中のパイプラインでネゴシエートされた GStreamer caps から取得したもので、設定ファイルの値ではありません。

## 利用できるインターフェース

接続方法は3通りです。

- **操作画面をそのまま使う** — 制御室でウォールを監視し、アラートを処置します。絞り込んだアラート一覧は CSV に出力できます（`/api/alerts/export.csv`）。
- **業務システムにアラートを取り込む** — ハブの REST エンドポイント `GET /api/alerts` を呼び、状態、デバイス、ストリーム、ルール名、時間範囲で絞り込みます。`after_id` で差分を取得できます。
- **独自の検出器を接続する、または検出結果を購読する** — 検出器は MQTT で `sensecraft.detection/1` を発行し、実行時制御は `cmd/control` / `cmd/ack` を使います。

単体プリセットのブローカーは loopback にバインドされています。外部から購読するにはポート開放とパスワードファイルの追加が必要で、両方とも行います。

### 検出器からのアップリンク

すべての検出器は `sensecraft.detection/1` を発行します。座標は `frame_norm`（元のフレームに対する正規化）です。`track_id` は1から始まり、滞留と越線はトラックごとの状態を使うため、追跡機能のない検出器はハブ側ルールに接続できません。`session_id` はプロセス起動ごとに変わり、ハブはこれで再起動したデバイスを区别してルール状態をリセットします。

```json
{
  "version": "1.0",
  "device_id": "edge-sec-j4012-01",
  "stream_id": "camera_gate_north",
  "session_id": "sess_8f2a9c10",
  "timestamp": 1729000000.123,
  "detections": [
    {
      "track_id": 14,
      "class": "person",
      "confidence": 0.92,
      "bbox_norm": [0.42, 0.35, 0.58, 0.82]
    }
  ]
}
```

### 実行時制御のダウンリンク

ストリームの信頼度と検出器が監視するカメラは、再起動なしで実行中に変更できます。`sensecraft.command/1` を `cmd/control` に送り、`sensecraft.ack/1` を `cmd/ack` で返します。

| `command` | 必須 `params` | 効果 |
|---|---|---|
| `set_conf_threshold` | `stream_id`, `conf_threshold` (0-1) | 次のフレームから新しいしきい値で検出 |
| `add_stream` | `stream_id`, `source`; 任意 `name`, `rtsp_transport` | 新しいストリームを開始し、次のステータスメッセージに表示 |
| `remove_stream` | `stream_id` | ストリームを停止し、ステータスメッセージから削除 |

応答の意味:

- **`ok: true` は変更が反映済みであることを示します**。再起動後にしか効かない変更は `ok: false` と理由を返します。
- **要求と応答は `request_id` で対応付けます**。同じ `request_id` は1回だけ適用して2回 ack するため、QoS 1 の再配信でストリームが二重に追加されることはありません。
- **`applied` の値を正とします**。検出器は実際に適用した内容を報告し、`persisted` は変更が設定に書き戻され、再起動後も残るかを示します。
- **応答がなければ失敗として扱います**。ハブの REST 層は504を返します。`cmd/control` は任意のため、制御チャネルのない検出器も接続できます。一部のコマンドだけを実装した検出器は、それ以外に `ok: false` と未対応の能力を返します。

### ハブ REST API

| メソッド | パス | 説明 |
|---|---|---|
| GET | `/api/alerts` | `state`、`device_id`、`stream_id`、`event_type`、`rule_name`、日付範囲で絞り込み。既定50件、新しい順。`after_id` を指定すると高いIDを昇順で返し、WebSocket再接続時に追いつける |
| GET | `/api/alerts/export.csv` | 同じパラメータ解析で UTF-8 BOM CSV を出力 |
| PUT | `/api/rules/{device_id}/{stream_id}` | ルールを保存し、rev を増加 |
| POST | `/api/rules/{device_id}/{stream_id}/simulate` | クールダウンを回避し、スナップショット要求なしでシミュレーションアラートを処理 |
| PUT | `/api/devices/{device_id}/streams/{stream_id}/conf` | 200 / 409 / 504 の意味に従ってしきい値を変更 |
| POST | `/api/devices/{device_id}/streams` | 実行時にストリームを追加。成功時201 |
| DELETE | `/api/devices/{device_id}/streams/{stream_id}` | ストリームを切り離す |
| GET | `/api/devices/{device_id}/streams/{stream_id}/preview.jpg` | 1.5秒キャッシュの単一フレームプレビュー。到達不能または JPEG 以外は502で、灰色の代替画像は返さない |

`/api/health` とログインルート以外はすべて Cookie セッションが必要です。セッションテーブルは永続化されるため、有効期限内のセッションはハブ再起動後も残ります。

## 性能と実測データ

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/suharvest/edge-security-kit" target="_blank">
        <strong>GitHub でソースコードと Compose 設定を確認する</strong>
    </a>
</div>

### ルール判定時間

| 検出ホスト | 越線誤差 | 立入禁止区域誤差 | 滞留誤差 | 方向 | スナップショット |
|---|---|---|---|---|---|
| reComputer J40 シリーズ (J4012, Orin NX 16GB) | 0.109-0.268 s | 0.090 s | 0.090-0.290 s | 8/8 正解 | 8/8 デコード可能 |
| reComputer RK3588 シリーズ | 0.085-0.248 s | 0.056-0.057 s | 0.080-0.233 s | 8/8 正解 | 8/8 デコード可能 |
| reComputer R2000 シリーズ (R2135-12, Hailo-8) | 0.006-0.189 s | 0.001 s | 0.004-0.200 s | 8/8 正解 | 8/8 デコード可能 |

条件：3台のホストとも同じ 1280x720 H.264 真値ソース、5 fps、130秒の観測時間です。誤差はアラートと真値時刻の差で、許容値は +/-0.5 s です。誤方向で発火したホストはありません。

再現：[edge-security-kit](https://github.com/suharvest/edge-security-kit)。

| 指標 | 値 | 条件 |
|---|---|---|
| 判定フレームから保存アラートまで | p50 **23.8 ms** / p95 206.2 ms | reComputer R2000 シリーズ |
| 判定フレームから保存アラートまで | p50 **117.4 ms** / p95 297.0 ms | reComputer J40 シリーズ |
| 軌跡の整合（正規化ボックスと真値軌跡の差） | 平均 0.00115、最大 0.00298 | reComputer J40 シリーズ |
| 軌跡の整合（正規化ボックスと真値軌跡の差） | 平均 0.00204、p95 0.00322、最大 0.00463 | reComputer RK3588 シリーズ |

### 単一ストリームのスループット

| 検出ホスト | 推論 p50 | p95 | 全パイプライン p50 | 検出器 CPU | RSS | デコード |
|---|---:|---:|---:|---:|---:|---|
| reComputer J40 シリーズ (J4012, Orin NX 16GB) | 4.16 ms | 4.19 ms | 6.99 ms | 1コアの5.5% | 310 MB | NVDEC、カーネル内で確認 |
| reComputer RK3588 シリーズ | 36.2-44.5 ms | 55.8-56.2 ms | 38.1-46.3 ms | 1コアの16.4-17.9% | 214 MB | Rockchip MPP、カーネル内で確認 |
| reComputer R2000 シリーズ (R2135-12, Hailo-8) | 7.7 ms | 8.4 ms | 9.5 ms | 1コアの8.7-13.0% | 127-131 MB | CPU ソフトウェアデコード |

条件：30秒のウォームアップ後に120秒をサンプリングし、`inference_time_ms` と `pipeline_ms` はメッセージのフィールドを読み取るため、全プラットフォームで同じ定義です。CPU は5秒間隔で1コアに対する割合として計算しています。reComputer R2000 シリーズには H.264 ハードウェアデコーダがなく、全パイプラインと CPU の値にはソフトウェアデコードが含まれます。推論列は他の2機種と比較できますが、全パイプライン列は比較できず、解像度が上がるほど差が広がります。連続実行ループで測ったレイテンシは楽観的な値になり、実際のパイプラインより Jetson で8%、RK3588 で6-66%速く出ます。

再現：[edge-security-kit](https://github.com/suharvest/edge-security-kit)。

### マルチストリーム

reComputer RK3588 シリーズは32ストリームまで測定しました。

| ストリーム数（720p @ 5 fps） | 結果 |
|---|---|
| 16 | **ソースレートを維持**。最悪 p95 46.9 ms、NPU は3コア容量の41%、CPU は8コアのうち1.4コア、空き RAM 7.3 GB |
| 24 | 119.9推論/s、4ストリームが1-3フレームを欠落。3つの NPU コアの使用率は79.5 / 61.3 / 42.6% |
| 32 | 要求160に対し157を処理、14ストリームでフレーム欠落、推論 p50 は33 msから99 msに増加 |

- **RGA が NPU より先に限界になります**。32ストリームのフレーム欠落はデコード時スケーラーの `RGA_BLIT fail` によるもので、ストリームごとの失敗数とフレーム欠落したストリームが一致しました。ハードウェアデコードはフォールバックせず、32ストリームすべてが `mppvideodec` で動作しました。
- **マルチストリーム構成はメモリで制限されます**。新しいプロセスは173-226 MBですが、rknnlite の参照サイクルでプロセスが大きくなり、2日間動いた検出器は1839 MBでした。この大きさのプロセス16個は16 GBに収まりません。マルチストリームでは ctypes バックエンドまたは定期的な `gc.collect()` を使います。
- 1台の共有ハブで測定した最大構成は2検出器の同時接続です。

### ランタイムと主要パラメータ

各ホストのランタイムとデコード経路は「必要な機器」のホスト表を参照してください。デプロイ結果に影響するパラメータ:

- `require_hw_decode`（既定で有効）— 検出器は CPU デコードを拒否します。デバイスページのデコードが `sw` の場合は無効になっています。
- ストリームごとの `conf_threshold`（0-1、ウォール上で実行時に変更可能）— int8 モデルが低信頼度のボックスを余分に出す場合は、まずしきい値を上げ、それでも足りなければ fp16 に戻します。
- `preview_advertise_host` — ホストの LAN アドレスを設定します。設定しないとハブがポート8099からフレームをプロキシできず、ルールページの背景が灰色になります。

### 既知の劣化

- reComputer RK3588 シリーズの推論 p50 は実行ごとに約8 ms変動します。p95 は再現性があります。
- 検出器がストリームに追いつかないと、トラッカーが新しい track id を発行し続け、静止した人物でもアラートが繰り返されます。デバイスページの検出率とカメラのフレームレートを比較してください。

## データと素材の出典

- ルール判定時間の真値クリップは、秒単位で定義した軌跡からスクリプトで生成しており、実際の越線・侵入時刻は実行前に分かっています。
- 操作画面のスクリーンショットの映像ソースは、リポジトリ同梱のカラーバーテストソースです。
- ランタイムコードは商用製品に組み込めますが、人物検出モデルにはそれぞれの条件があります。使用する検出重みのライセンスが製品に適合することを確認するか、互換性のあるライセンスのモデルに置き換えてください。
