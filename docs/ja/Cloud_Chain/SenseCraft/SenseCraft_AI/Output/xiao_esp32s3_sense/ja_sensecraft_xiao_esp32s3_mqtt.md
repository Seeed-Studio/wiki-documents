---
description: この記事では、モデルの認識結果をMQTTを介して送信する方法について説明します。
title: MQTT出力を介して
image: https://files.seeedstudio.com/wiki/watcher_getting_started/headimage.webp
slug: /ja/sensecraft_ai_output_mqtt_xiao
sidebar_position: 2
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# SenseCraft AIでXIAO ESP32S3 SenseのMQTTを介したモデル出力の設定

この記事では、SenseCraft AIプラットフォーム上でXIAO ESP32S3 Senseボードを使用して、MQTT（Message Queuing Telemetry Transport）を介してモデル出力を設定する方法をステップバイステップで説明します。MQTTは、デバイス間の効率的な通信を可能にする軽量なメッセージングプロトコルです。この手順に従うことで、MQTT通信を設定し、XIAO ESP32S3 Senseからモデル推論結果を取得する方法を学ぶことができます。

## 前提条件

始める前に、以下のものを用意してください：

1. XIAO ESP32S3 Senseボード
2. XIAOボードをコンピュータに接続するためのUSB-Cデータケーブル
3. MQTTXなどのサードパーティ製MQTTクライアントがコンピュータにインストールされていること

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
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## ステップ1. SenseCraft AI Vision Workspaceにアクセスし、XIAO ESP32S3 Senseを接続する

ウェブブラウザを開き、SenseCraft AI Vision Workspaceページにアクセスします。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/device/local?time=1733300644024" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>ワンクリックでアクセス 🖱️</font></span></strong>
    </a>
</div><br />

利用可能なデバイスからXIAO ESP32S3 Senseボードを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/43.png" style={{width:1000, height:'auto'}}/></div>

USB-Cケーブルを使用して、XIAO ESP32S3 Senseボードをコンピュータに接続します。接続後、SenseCraft AI Vision Workspaceページの左上にある**Connect**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/44.png" style={{width:800, height:'auto'}}/></div>

## ステップ2. XIAO ESP32S3 Senseにモデルがロードされていることを確認する

次に進む前に、XIAO ESP32S3 Senseボードにトレーニング済みのモデルがロードされていることを確認してください。まだモデルをロードしていない場合は、SenseCraft AIのドキュメントを参照して、デバイスにモデルをトレーニングおよびデプロイする方法を確認してください。

- [XIAO ESP32S3 Sense用のモデルを使用する](https://wiki.seeedstudio.com/ja/sensecraft_ai_pretrained_models_for_xiao/)

独自にトレーニングしたモデルを使用したい場合は、以下の2つのWikiを参照してください。

- [トレーニングの種類 - 分類](https://wiki.seeedstudio.com/ja/sensecraft_ai_training_classification/)
- [トレーニングの種類 - オブジェクト検出](https://wiki.seeedstudio.com/ja/sensecraft_ai_training_object_detection/)

## Step 3. MQTT 出力の設定

Vision Workspace ページの左サイドバーで、**Output** オプションをクリックします。利用可能な出力オプションから **MQTT** を選択し、MQTT 設定画面にアクセスします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/56.png" style={{width:1000, height:'auto'}}/></div>

## Step 4. MQTT 設定のセットアップ

MQTT 出力セクションの下部にある **Configuration** ボタンをクリックします。設定ウィンドウが表示され、以下の情報を入力するよう求められます：

  - **SSID**: Wi-Fi ネットワークの名前を入力します。
  - **Password**: Wi-Fi ネットワークのパスワードを入力します。
  - **Encryption**: Wi-Fi ネットワークの暗号化タイプを選択します（例: AUTO）。
  - **MQTT**: MQTT 通信を有効にするために「Yes」を選択します。

MQTT 設定フィールドに以下を入力します：

  - **Host**: MQTT ブローカーのホスト名または IP アドレスを入力します（例: broker.emqx.io）。
  - **Port**: MQTT 通信のポート番号を指定します（例: 1883）。
  - **Client ID**: XIAO ESP32S3 Sense 用のユニークなクライアント ID を入力します（例: xiao_esp32s3）。
  - **User Name**: MQTT ブローカーが必要とする場合、MQTT ユーザー名を入力します。
  - **Password**: MQTT ブローカーが必要とする場合、MQTT パスワードを入力します。
  - **SSL**: SSL 暗号化を有効にするかどうかを選択します。MQTT ブローカーが SSL をサポートしている場合、「Yes」を選択して通信のセキュリティを向上させることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/57.png" style={{width:700, height:'auto'}}/></div>

**Apply** ボタンをクリックして設定を保存します。

:::caution
このステップではネットワーク接続が必要です。XIAO ESP32S3 Sense にアンテナを接続してください。
:::

すべてが正常に設定されていれば、ウェブサイト上で以下の情報が表示されるはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/60.png" style={{width:1000, height:'auto'}}/></div>

## Step 5. MQTT クライアント (MQTTX) のセットアップ

コンピュータで [MQTTX アプリケーション](https://mqttx.app/) を起動します。

以下の設定で新しい接続を作成します：

  - Host: SenseCraft AI プラットフォームで使用したのと同じホスト名または IP アドレスを入力します（例: broker.emqx.io）。
  - Port: MQTT 通信のポート番号を指定します（例: 1883）。
  - Client ID: MQTTX インスタンス用のユニークなクライアント ID を入力します（例: seeed_computer）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/58.png" style={{width:1000, height:'auto'}}/></div>

**Connect** ボタンをクリックして、MQTT ブローカーとの接続を確立します。

## Step 6. MQTT トピックの購読

MQTTX アプリケーションで、**New Subscribe** ボタンをクリックして新しい購読を作成します。トピック `sscma/v0/#` を入力し、**Subscribe** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/59.png" style={{width:1000, height:'auto'}}/></div>

このトピックは、XIAO ESP32S3 Sense からのモデル推論情報を受信するために使用されます。

## ステップ 7. モデル推論結果を取得するコマンドを送信

MQTTXアプリケーションで、デバイストピックチャンネルに移動します。SenseCraft AIのMQTTページで**デバイスのトピックを照会**ボタンをクリックすることで取得できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/61.png" style={{width:1000, height:'auto'}}/></div>

コマンド `AT+INVOKE=-1,0` を送信して、XIAO ESP32S3 Sense上でモデル推論をトリガーします。

:::tip
正しいトピックを送信していることを確認してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/62.png" style={{width:1000, height:'auto'}}/></div>

もしモデル認識に関連するデータが報告されない場合は、HEX形式でコマンドを送信してみてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/65.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/66.png" style={{width:1000, height:'auto'}}/></div>
:::

XIAO ESP32S3 Senseはコマンドを処理し、モデル推論結果を購読しているトピックに公開します。MQTTXアプリケーションでは、`sscma/v0/#` トピックで推論結果を受信します。

**例**:

例えば、トレーニングされたモデルが画像内のオブジェクトを検出するように設計されている場合、'AT+INVOKE=-1,0' コマンドを送信すると、XIAO ESP32S3 Senseは画像をキャプチャし、モデル推論を実行し、結果をMQTT経由で公開します。推論結果には、検出されたオブジェクト、そのバウンディングボックス、信頼度スコアなどの情報が含まれる場合があります。例えば、MQTTメッセージのペイロードは以下のようになることがあります：

```json
{"type":1,"name":"INVOKE","code":0,"data":{"count":989,"image":"/9j/4AAQSkZJRgABAQEAAAAAAAD...CUxBQAYoAPpQAc0AA/9X/2Q==","boxes":[[208.46,215.41,69.49,48.64,80.60,0]],"perf":[70,470,0],"rotation":0,"width":240,"height":240}}
```

JSON形式の詳細な説明については、ドキュメントを**[こちら](https://github.com/Seeed-Studio/SSCMA-Micro/blob/main/docs/protocol/at-protocol-en_US.md#box-type)**で確認してください。

:::tip
デバイスのファームウェアには、モデル結果の出力形式やユーザーがモデルでできることを指定する一連の通信プロトコルが確立されています。スペースの都合上、このプロトコルの詳細についてはこのWikiでは拡張しませんが、Githubのドキュメントで詳細を説明します。より深い開発に興味がある場合は、**[こちら](https://github.com/Seeed-Studio/SSCMA-Micro/blob/dev/docs/protocol/at_protocol.md)**をご覧ください。
:::

Base64でエンコードされた画像をデコードする方法：

1. JSONオブジェクトの "image" フィールドからBase64エンコードされた文字列をコピーします。

2. Webブラウザで `https://base64.guru/converter/decode/image` のウェブサイトにアクセスします。

3. コピーしたBase64エンコードされた文字列をウェブサイトの "Base64 string" テキストエリアに貼り付けます。

4. **Decode Base64 to Image** ボタンをクリックします。

5. ボタンの下にデコードされた画像が表示され、閲覧またはダウンロードすることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/64.png" style={{width:1000, height:'auto'}}/></div>

## 結論

このステップバイステップガイドに従うことで、XIAO ESP32S3 Senseボードを使用してSenseCraft AIプラットフォーム上でMQTTを利用したモデル出力の設定方法を学びました。これで、MQTTを介してモデル推論結果を取得し、それらをアプリケーションやシステムに統合することができます。安定したWi-Fi接続を確保し、MQTTブローカーとクライアント設定を正しく構成して、シームレスな通信を実現することを忘れないでください。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！製品をご利用いただく際に、できる限りスムーズな体験を提供するため、さまざまなサポートをご用意しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>