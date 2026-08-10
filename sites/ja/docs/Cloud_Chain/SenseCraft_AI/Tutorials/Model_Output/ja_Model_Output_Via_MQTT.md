---
sidebar_position: 9
description: この記事では、モデルの認識結果を MQTT 経由で送信する方法について説明します。
title: MQTT 経由でのモデル出力
image: https://files.seeedstudio.com/wiki/watcher_getting_started/headimage.webp
slug: /sensecraft-ai/tutorials/sensecraft-ai-output-mqtt-xiao
aliases:
  - /sensecraft_ai_output_mqtt_xiao
last_update:
  date: 12/04/2024
  author: Citric
createdAt: '2024-11-27'
updatedAt: '2026-05-07'
url: https://wiki.seeedstudio.com/ja/sensecraft-ai/tutorials/sensecraft-ai-output-mqtt-xiao/
---

# XIAO ESP32S3 Sense 用 SenseCraft AI で MQTT によるモデル出力を設定する

この wiki 記事では、SenseCraft AI プラットフォーム上で XIAO ESP32S3 Sense ボード向けに MQTT（Message Queuing Telemetry Transport）を使用してモデル出力を設定する手順をステップバイステップで説明します。MQTT は、デバイス間の効率的な通信を可能にする軽量メッセージングプロトコルです。本記事の手順に従うことで、MQTT 通信を設定し、XIAO ESP32S3 Sense からモデル推論結果を取得する方法を学ぶことができます。

## 事前準備

始める前に、以下を用意してください：

1. XIAO ESP32S3 Sense ボード
2. XIAO ボードをコンピュータに接続するための USB-C データケーブル
3. MQTTX などのサードパーティ製 MQTT クライアント（コンピュータにインストールされていること）

<div class="table-center">
  <table align="center">
    <tr>
      <th>XIAO ESP32S3 Sense</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## ステップ 1. XIAO ESP32S3 Sense ワークスペースへアクセスしデバイスを接続する

**[`SenseCraft AI`](https://sensecraft.seeed.cc/ai/home?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_ai_home)** > **`Models`** > **`Workspace`** > **`XIAO ESP32S3 Sense`** の順にクリックして XIAO ESP32S3 Sense のワークスペースにアクセスするか、[ワークスペースへの直接リンク](https://sensecraft.seeed.cc/ai/device/local/32)を使用します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/xiao_esp32s3_sense_workspace.png" style={{width:1000, height:'auto'}}/></div>

USB-C ケーブルを使用して、XIAO ESP32S3 Sense ボードをコンピュータに接続します。接続後、ワークスペースページ左上にある **Connect** ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/44.png" style={{width:800, height:'auto'}}/></div>

## ステップ 2. XIAO ESP32S3 Sense にモデルがロードされていることを確認する

次に進む前に、XIAO ESP32S3 Sense ボードに学習済みモデルがロードされていることを確認してください。まだモデルをロードしていない場合は、SenseCraft AI のドキュメントを参照して、デバイスにモデルを学習・デプロイする方法を確認してください。

- [XIAO ESP32S3 Sense 用モデルの使用](https://wiki.seeedstudio.com/ja/sensecraft_ai_pretrained_models_for_xiao/)

自分で学習させたモデルを使用したい場合は、以下の 2 つの Wiki を参照してください。

- [トレーニングの種類 - 分類](https://wiki.seeedstudio.com/ja/sensecraft_ai_training_classification/)
- [トレーニングの種類 - 物体検出](https://wiki.seeedstudio.com/ja/sensecraft_ai_training_object_detection/)

## ステップ 3. MQTT 出力を設定する

ワークスペースページの左サイドバーで **Output** オプションをクリックします。利用可能な出力オプションの中から **MQTT** を選択し、MQTT 設定画面にアクセスします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/56.png" style={{width:1000, height:'auto'}}/></div>

## ステップ 4. MQTT 設定を行う

MQTT 出力セクションの下部にある **Configuration** ボタンをクリックします。設定ウィンドウが表示され、次の情報の入力を求められます：

- **SSID**: 使用する Wi-Fi ネットワーク名を入力します。
- **Password**: Wi-Fi ネットワークのパスワードを入力します。
- **Encryption**: Wi-Fi ネットワークの暗号化方式を選択します（例：AUTO）。
- **MQTT**: MQTT 通信を有効にするには "Yes" を選択します。

続いて、MQTT 設定項目を入力します：

- **Host**: MQTT ブローカーのホスト名または IP アドレスを入力します（例：broker.emqx.io）。
- **Port**: MQTT 通信に使用するポート番号を指定します（例：1883）。
- **Client ID**: XIAO ESP32S3 Sense 用の一意なクライアント ID を入力します（例：xiao_esp32s3）。
- **User Name**: MQTT ブローカーで必要な場合は、MQTT ユーザー名を入力します。
- **Password**: MQTT ブローカーで必要な場合は、MQTT パスワードを入力します。
- **SSL**: SSL 暗号化を有効にするかどうかを選択します。MQTT ブローカーが SSL をサポートしている場合は、通信のセキュリティを高めるために "Yes" を選択できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/57.png" style={{width:700, height:'auto'}}/></div>

**Apply** ボタンをクリックして設定を保存します。

:::caution
このステップではネットワーク接続が必要になるため、XIAO ESP32S3 Sense にアンテナを接続してください。
:::

すべてが問題なく設定されていれば、ウェブサイト上に次のような情報が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/60.png" style={{width:1000, height:'auto'}}/></div>

## ステップ 5. MQTT クライアント（MQTTX）を設定する

コンピュータで [MQTTX アプリケーション](https://mqttx.app/) を起動します。

次の設定で新しい接続を作成します：

- Host: SenseCraft AI プラットフォームで使用したものと同じホスト名または IP アドレスを入力します（例：broker.emqx.io）。
- Port: MQTT 通信に使用するポート番号を指定します（例：1883）。
- Client ID: MQTTX インスタンス用の一意なクライアント ID を入力します（例：seeed_computer）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/58.png" style={{width:1000, height:'auto'}}/></div>

**Connect** ボタンをクリックして、MQTT ブローカーへの接続を確立します。

## ステップ 6. MQTT トピックを購読する

MQTTX アプリケーションで **New Subscribe** ボタンをクリックして新しいサブスクリプションを作成します。トピック `sscma/v0/#` を入力し、**Subscribe** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/59.png" style={{width:1000, height:'auto'}}/></div>

このトピックは、XIAO ESP32S3 Sense からのモデル推論情報を受信するために使用されます。

## ステップ 7. モデル推論結果を取得するコマンドを送信する

MQTTX アプリケーションで、デバイストピックのチャンネルに移動します。SenseCraft AI の MQTT ページで **Query device's topic** ボタンをクリックすることで取得できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/61.png" style={{width:1000, height:'auto'}}/></div>

コマンド `AT+INVOKE=-1,0` を送信して、XIAO ESP32S3 Sense 上でモデル推論をトリガーします。

:::tip
正しいトピックに送信していることを確認してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/62.png" style={{width:1000, height:'auto'}}/></div>

モデル認識に関連するデータがまだ報告されない場合は、コマンドを HEX 形式で送信してみてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/65.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/66.png" style={{width:1000, height:'auto'}}/></div>
:::

XIAO ESP32S3 Sense はコマンドを処理し、モデル推論結果を購読中のトピックにパブリッシュします。MQTTX アプリケーションでは、`sscma/v0/#` トピックの下で推論結果を受信できます。

**例**:

たとえば、学習済みモデルが画像内の物体を検出するように設計されているとします。'AT+INVOKE=-1,0' コマンドを送信すると、XIAO ESP32S3 Sense は画像を取得し、モデル推論を実行して、その結果を MQTT 経由でパブリッシュします。推論結果には、検出された物体、そのバウンディングボックス、および信頼度スコアなどの情報が含まれる場合があります。たとえば、MQTT メッセージのペイロードは次のようになります：

```json
{"type":1,"name":"INVOKE","code":0,"data":{"count":989,"image":"/9j/4AAQSkZJRgABAQEAAAAAAAD...CUxBQAYoAPpQAc0AA/9X/2Q==","boxes":[[208.46,215.41,69.49,48.64,80.60,0]],"perf":[70,470,0],"rotation":0,"width":240,"height":240}}
```

JSON 形式の詳細な説明については、ドキュメントを **[こちら](https://github.com/Seeed-Studio/SSCMA-Micro/blob/main/docs/protocol/at-protocol-en_US.md#box-type)** から参照してください。

:::tip
デバイスのファームウェアには、モデル結果の出力形式や、ユーザーがモデルを使って何ができるかを規定する一連の通信プロトコルがあらかじめ定義されています。紙面の都合上、この wiki ではこれらのプロトコルの詳細には踏み込みませんが、このセクションについては Github 上のドキュメントで詳しく説明します。より高度な開発に興味がある場合は、**[こちら](https://github.com/Seeed-Studio/SSCMA-Micro/blob/dev/docs/protocol/at_protocol.md)** を参照してください。
:::

base64 エンコードされた画像をデコードするには：

1. JSON オブジェクト内の "image" フィールドから base64 エンコードされた文字列をコピーします。

2. ウェブブラウザで `https://base64.guru/converter/decode/image` にアクセスします。

3. コピーした base64 エンコード文字列を、サイト上の "Base64 string" テキストエリアに貼り付けます。

4. **Decode Base64 to Image** ボタンをクリックします。

5. デコードされた画像がボタンの下に表示され、閲覧またはダウンロードできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/64.png" style={{width:1000, height:'auto'}}/></div>

## まとめ

このステップバイステップガイドに従うことで、SenseCraft AI プラットフォーム上で XIAO ESP32S3 Sense ボード向けに MQTT を使用したモデル出力の設定方法を学びました。これで、MQTT を介してモデル推論結果を取得し、自身のアプリケーションやシステムに統合できるようになりました。安定した Wi-Fi 接続を確保し、MQTT ブローカーおよびクライアントの設定を正しく行うことで、シームレスな通信を実現できます。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに応じてお選びいただけるよう、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
