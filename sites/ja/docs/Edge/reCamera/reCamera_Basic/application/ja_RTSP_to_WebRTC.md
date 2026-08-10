---
title: reCamera を用いた RTSP から WebRTC へのリアルタイム動画配信
description: このドキュメントでは、reCamera を使用して RTSP プロトコル経由で PC に動画を配信し、PC 側で RTSP ストリームを WebRTC 形式に変換することで、ブラウザ上で低遅延のリアルタイム動画再生を実現する方法を紹介します。
keywords:
  - reCamera
  - RTSP
  - WebRTC
slug: /rtsp_to_webrtc_with_recamera
sku: 102991897, 100029708, 108990120
image: https://files.seeedstudio.com/wiki/reCamera/Applications/RTSP_to_WebRTC/test.gif
sidebar_position: 15
last_update:
  date: 06/10/2026
  author: Xuanjun Zhu
createdAt: '2026-06-10'
updatedAt: '2026-06-15'
url: https://wiki.seeedstudio.com/ja/reCamera/reCamera_Basic/application/rtsp_to_webrtc_with_recamera/
---

# reCamera を用いた RTSP から WebRTC へのリアルタイム動画配信

## はじめに

**reCamera の映像ストリームを自分の Web アプリケーションに統合したい場合**や、ブラウザを通して**リモートで**低遅延にカメラ映像を閲覧したい場合は、このデモを参考にしてください。
このプロジェクトでは、reCamera の映像を **RTSP プロトコル**で配信し、推論結果を **mqtt out** ノードを介して PC に送信します。その後、PC 側で RTSP ストリームと推論結果を合成し、**WebRTC** 形式に変換することで、どのブラウザからでもプラグインなしでリアルタイムに推論付き映像ストリームを再生できるようにします。これは、**reCamera の映像ストリームを「解放」する**ための方法を提供するものであり、一度 RTSP 経由で映像ストリームを出力できるようになれば、次のようなことが容易に行えます：

- **自分の Web アプリケーションや管理プラットフォームへの統合**：既存のダッシュボード、監視システム、IoT プラットフォームなどにライブ映像を埋め込むことができます。

- **複数デバイスの映像集約**：同一の Web ページ上で複数の reCamera 映像を同時に表示し、多チャンネルのビデオ監視ウォールを構築できます。

- **リモートアクセスおよびネットワーク越え通信**：WebRTC の NAT トラバーサル機能により、異なるネットワーク環境下でも reCamera のライブ映像を低遅延で閲覧できます。

- **AI 推論結果可視化の伝送チャネルの提供**：reCamera がエッジ AI 推論を実行した後、映像とともに推論結果を出力し、PC 側でブラウザ上に AI 解析結果をリアルタイム表示できます。遠隔点検、スマートセキュリティなどのアプリケーション構築に適しています。

このデモでは、**reCamera を単体のビジュアルデバイスから、あらゆる Web システムに統合可能な映像ソースへと変換するアプローチ**を示します。本プロジェクトが、reCamera と Web 技術を組み合わせたさらなる可能性を探求するきっかけとなれば幸いです。
<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/RTSP_to_WebRTC/test.gif" />
</div>
### システムアーキテクチャ

システム全体は、**reCamera 側**と**PC サーバー側**の 2 つの部分が連携して動作します。アーキテクチャは次のとおりです：

| ステージ | 実行場所 | 使用技術 / プロトコル | 説明 |
|------|----------|-----------------|------|
| 映像取得 & エンコード | reCamera | カメラ + H.264 エンコード | 映像を取得しエンコードします |
| AI 推論 | reCamera | YOLO11n モデル | 映像フレームに対して AI 物体検出推論を実行します |
| RTSP ストリーミング | reCamera | RTSP プロトコル（ポート 554） | RTSP プロトコルを介してネットワークへ映像を配信します |
| MQTT 推論結果送信 | reCamera → PC サーバー | MQTT プロトコル（ポート 1883） | 推論結果（バウンディングボックス、ラベル）を MQTT で PC に送信します |
| 映像受信 & デコード | PC サーバー | OpenCV + FFmpeg | RTSP ストリームを受信し、生フレームにデコードします |
| 推論結果と映像の合成 | PC サーバー | detection_store + OpenCV | 映像フレーム上に AI 検出ボックスとラベルを重ね描画します |
| WebRTC エンコード & 送信 | PC サーバー | aiortc | 合成済み映像フレームを WebRTC 形式にエンコードして送信します |
| リアルタイム再生 | PC ブラウザ | WebRTC | 推論結果付き映像をブラウザで低遅延再生します |

## ハードウェアの準備

このデモを実行するには、以下のハードウェアが必要です：

- **reCamera デバイス 1 台**（すべての reCamera バリアントに対応）
- **PC 1 台**（WebRTC ブリッジサービスを実行するため、reCamera と同一 LAN 上にある必要があります）

導入ニーズに応じて、**任意のバージョンの reCamera** を選択できます：

- reCamera 2002 シリーズ（Wi-Fi）
- reCamera Gimbal
- reCamera HQ PoE（Ethernet + PoE）

> **注意：**
> PoE バージョンは Wi-Fi をサポートしておらず、PoE 対応スイッチを介して同一ローカルネットワークに接続する必要があります。

<table align="center">
 <tr>
  <th>reCamera 2002 シリーズ</th>
  <th>reCamera Gimbal</th>
  <th>reCamera HQ PoE</th>
 </tr>
 <tr>
  <td>
    <div style={{textAlign:'center'}}>
      <img src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" style={{width:300, height:'auto'}}/>
    </div>
  </td>
  <td>
    <div style={{textAlign:'center'}}>
      <img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:300, height:'auto'}}/>
    </div>
  </td>
  <td>
    <div style={{textAlign:'center'}}>
      <img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:300, height:'auto'}}/>
    </div>
  </td>
 </tr>
 <tr>
  <td>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 </font></span></strong>
      </a>
    </div>
  </td>
  <td>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 </font></span></strong>
      </a>
    </div>
  </td>
  <td>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 </font></span></strong>
      </a>
    </div>
  </td>
 </tr>
</table>

## デモのセットアップ

### ステップ 1: reCamera の設定

まず、公式の入門ガイドに従って reCamera の基本設定を完了してください：[reCamera Getting Started](https://wiki.seeedstudio.com/ja/recamera_getting_started/)

初期セットアップが完了したら、デバイスの電源が入っており、ネットワークに正しく接続されていることを確認します。
次に、ブラウザからアドレス 192.168.42.1 にアクセスして reCamera にログインし、**Node-RED** ワークスペースに入ります。

下図のように Node-RED のフロー画面に正常にアクセスできれば、設定は完了です。

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload5.png" />
</div>

### ステップ 2: RTSP ストリーミングの設定

reCamera には RTSP ストリーミング機能が内蔵されており、Node-RED のフローを通じて簡単に設定できます。フロー内に 2 つのノードを配置するだけで済みます。SenseCraft AI のチュートリアルについては、[Access SenseCraft AI reCamera Dashboard](https://wiki.seeedstudio.com/ja/recamera_getting_started/#access-recamera-preview-dashboard) のリンクを参照してください。


#### 2.1 カメラノードのインポートと設定

左側から **Camera Node** をワークスペースにドラッグし、ダブルクリックして設定画面に入ります。必要に応じて解像度やフレームレートなどのパラメータを設定できます。下図のフローに従ってカメラノードをインポートおよび設定してください。
<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/RTSP_to_WebRTC/nodeimport1sum1.png" />
</div>
<p align="center">カメラパラメータ設定</p>

#### 2.2 ストリームノードのインポートと設定

左側から **Stream Node** をワークスペースにドラッグし、RTSP プロトコルを選択してストリームアドレスとポートを設定します。reCamera のデフォルトの RTSP ストリームアドレスは次のとおりです：

```
rtsp://admin:admin@192.168.42.1:554/live
```

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/RTSP_to_WebRTC/streamset.png" />
</div>
<p align="center">RTSP ストリーミングパラメータ設定</p>

#### 2.3 モデルノードのインポート

左側から **Model Node** をワークスペースにドラッグし、Device をクリックして YOLO11n Detection モデルを選択します。

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/RTSP_to_WebRTC/modelimport.png" />
</div>
#### 2.4 MQTT Out ノードのインポート

左側から **MQTT Out Node** をワークスペースにドラッグし、下図に従って MQTT ブローカーアドレスとサーバーとの通信に使用するトピックを設定します。

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/RTSP_to_WebRTC/mqttimportsum.png" />
</div>



設定が完了したら、右上の **Deploy** をクリックしてフローをデプロイします。これで reCamera は RTSP プロトコル経由でストリーミングを開始します。

### ステップ 3: PC 上に WebRTC 変換サービスをデプロイ

WebRTC ブリッジサービスは PC 上で動作し、RTSP ストリームと MQTT メッセージを受信し、推論結果と映像ストリームを合成して WebRTC 形式に変換し、ブラウザでのリアルタイム再生を実現します。

#### 3.1 前提条件

PC に以下の環境がインストールされていることを確認してください：

- **Python 3.8+**
- **pip** パッケージマネージャ

> **注意：** Windows で `aiortc` をインストールする場合、事前に Microsoft C++ Build Tools のインストールが必要になることがあります。[Visual Studio Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/) からダウンロードしてインストールできます。

#### 3.2 コードの取得と依存関係のインストール

[repository](https://github.com/hunter5299/Node-Red-project/tree/main/rtsp_to_webrtc) から RTSP から WebRTC への Python プロジェクトコードを取得します。プロジェクトコードを PC にダウンロードしたら、プロジェクトディレクトリに移動して Python の依存関係をインストールします：

```bash
cd rtsp_to_webrtc
pip install -r requirements.txt
```

#### 3.3 プロジェクトファイルの説明

プロジェクトには、次のコアファイルが含まれています：

| ファイル | 説明 |
|------|------|
| `server.py` | WebRTC シグナリングサーバー。組み込み MQTT Broker を起動し、ブラウザからの接続要求を処理して WebRTC セッションを確立します |
| `mqtt_broker.py` | 組み込み MQTT 3.1.1 Broker（純粋な asyncio 実装）および購読クライアント。reCamera の Node-RED からプッシュされる YOLO 推論結果を受信します |
| `detection_store.py` | 推論結果の保存モジュール。映像フレームへのオーバーレイ描画用に最新の検出ボックスとラベルデータをキャッシュします |
| `video_sources.py` | 映像プロトコル抽象化レイヤー |
| `index.html` | フロントエンドプレーヤーページ。プロトコル選択と WebRTC 映像再生機能を提供します |
| `requirements.txt` | Python 依存関係リスト |

#### 3.4 サービスの起動

デフォルト設定でサービスを起動します：

```bash
python server.py
```

サービスが起動すると、次のようなログ出力が表示されます：

```
INFO:webrtc-server:Starting server on http://0.0.0.0:8080
INFO:webrtc-server:Default source: rtsp://admin:admin@192.168.42.1:554/live
INFO:webrtc-server:Supported protocols: rtsp, onvif, gb28181, rtmp, hls
INFO:webrtc-server:MQTT Broker: 0.0.0.0:1883, topic: yolo11n_result
INFO:webrtc-server:Open http://localhost:8080 in your browser
```

コマンドライン引数を使用して設定をカスタマイズすることもできます：

```bash
# Specify the default video source address
python server.py --source rtsp://admin:admin@192.168.42.1:554/live

# Specify the service port
python server.py --port 9090

# Specify both address and port
python server.py --source rtsp://admin:admin@192.168.42.1:554/live --port 8080
```

**コマンドライン引数の説明：**

| 引数 | デフォルト値 | 説明 |
|------|--------|------|
| `--host` | `0.0.0.0` | サーバーのバインドアドレス |
| `--port` | `8080` | サーバーの待ち受けポート |
| `--source` | `rtsp://admin:admin@192.168.42.1:554/live` | デフォルトのビデオソースアドレス |

> **注意：** PC のファイアウォールでポート 8080（または指定したポート）への受信接続が許可されていること、また PC と reCamera が同一 LAN 上にあることを確認してください。

### Step 4: デモを実行する

1. reCamera が RTSP ストリーミング用に設定され、ワークフローがデプロイされていることを確認します
2. PC 上で `server.py` が起動して実行中であることを確認します
3. PC のブラウザで `http://localhost:8080` にアクセスします
4. ページ上でプロトコル（RTSP）を選択し、reCamera の RTSP ストリームアドレスを入力します（デフォルトで入力済み）
5. **"Start Playing"** ボタンをクリックします

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/RTSP_to_WebRTC/test.png" />
</div>
<p align="center">ブラウザでの reCamera 映像のリアルタイム再生</p>

接続に成功すると、ページには次の情報が表示されます：

- **ビデオフィード**：reCamera の映像をリアルタイム表示
- **接続ステータス**：ページ左上の緑色の接続ステータスインジケータ
- **ストリーム情報**：ビデオストリームアドレス、接続状態、ICE 接続状態、ビデオ解像度を表示
- **操作ログ**：ページ下部に詳細な接続ログを表示

## 動作原理

システム全体の高レベルなワークフローは次のとおりです：

1. **ビデオキャプチャと AI 推論**
   reCamera はカメラを通じて継続的にビデオを取得し、YOLO11n モデルを使用して物体検出推論を行い、バウンディングボックスとラベルの結果を取得します。

2. **RTSP ストリーミングと MQTT 結果送信**
   reCamera はエンコードされたビデオを RTSP プロトコルでネットワークにストリーミングすると同時に、推論結果を MQTT プロトコル（トピック：`yolo11n_result`）で PC 上の組み込み MQTT Broker にパブリッシュします。

3. **ビデオ受信と推論結果の融合**
   PC サービスは OpenCV + FFmpeg のバックグラウンドスレッドを使用して RTSP ストリームから最新のビデオフレームを継続的に読み取り、detection_store から最新の推論結果を取得し、バウンディングボックスとラベルをビデオフレームにオーバーレイします。

4. **WebRTC エンコードと送信**
   ブラウザが接続要求を開始すると、PC は aiortc ライブラリを通じて融合されたビデオフレームを WebRTC 形式にエンコードし、送信用の WebRTC PeerConnection を確立します。

5. **ブラウザでのリアルタイム再生**
   ブラウザは WebRTC 経由でビデオストリームを受信し、プラグインをインストールすることなく、AI 推論の注釈付きビデオをリアルタイムで再生します。

## 注意事項

- reCamera の RTSP ストリームは、デフォルトでは **1～2 接続の同時接続** のみをサポートします。ほかのプログラム（VLC など）がすでに RTSP 接続を占有している場合、WebRTC サービスはビデオストリームを受信できないことがあります。使用前に、RTSP ストリームに接続しているほかのプログラムを閉じてください。
- `aiortc` のインストールに失敗する場合は、**Microsoft C++ Build Tools**（Windows）または `gcc` / `make` ツール（Linux）がインストールされていることを確認してください。
- サーバーログに `non-existing PPS` エラーが表示される場合、これはキーフレームがまだ受信されていないことが原因であり、正常な挙動です。キーフレームが到着すると（約 1 秒後）自動的に復旧します。
- サービスのポートを変更するには、`python server.py --port <port_number>` を使用して別のポートを指定します。
- ビデオの遅延が大きい場合は、ネットワーク帯域幅が十分かどうかを確認し、PC と reCamera 間のネットワーク接続が安定していることを確認してください。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。特定のカスタマイズ目標に関するガイダンスが必要な場合や、ワークフローをさらに拡張したい場合は、いつでもお気軽にお問い合わせください。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなレベルのサポートを提供しています。お好みやニーズに応じて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
