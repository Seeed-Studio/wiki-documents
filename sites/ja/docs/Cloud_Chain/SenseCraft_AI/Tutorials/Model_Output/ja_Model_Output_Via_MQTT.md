---
sidebar_position: 9
description: この記事では、モデルの認識結果をMQTTで送信する方法について説明します。
title: MQTTによるモデル出力
image: https://files.seeedstudio.com/wiki/watcher_getting_started/headimage.webp
slug: /ja/sensecraft-ai/tutorials/sensecraft-ai-output-mqtt-xiao
aliases:
  - /ja/sensecraft_ai_output_mqtt_xiao
last_update:
  date: 12/04/2024
  author: Citric
---

# XIAO ESP32S3 Sense用SenseCraft AIでのMQTTによるモデル出力の設定

このwiki記事では、SenseCraft AIプラットフォーム上でXIAO ESP32S3 Senseボード用にMQTT（Message Queuing Telemetry Transport）を使用してモデル出力を設定する方法について、ステップバイステップのガイドを提供します。MQTTは、デバイス間の効率的な通信を可能にする軽量メッセージングプロトコルです。これらの手順に従うことで、MQTT通信の設定方法と、XIAO ESP32S3 Senseからモデル推論結果を取得する方法を学ぶことができます。

## 前提条件

開始する前に、以下のものが揃っていることを確認してください：

1. XIAO ESP32S3 Senseボード
2. XIAOボードをコンピュータに接続するためのUSB-Cデータケーブル
3. MQTTXなどのサードパーティMQTTクライアントがコンピュータにインストールされていること

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
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>

</div>

## ステップ1. SenseCraft AI Vision Workspaceにアクセスし、XIAO ESP32S3 Senseを接続する

Webブラウザを開き、SenseCraft AI Vision Workspaceページに移動します。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/device/local?time=1733300644024" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>ワンクリック直接アクセス 🖱️</font></span></strong>
    </a>
</div><br />

利用可能なデバイスからXIAO ESP32S3 Senseボードを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/43.png" style={{width:1000, height:'auto'}}/></div>

USB-Cケーブルを使用して、XIAO ESP32S3 Senseボードをコンピュータに接続します。接続したら、SenseCraft AI Vision Workspaceページの左上にある**Connect**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/44.png" style={{width:800, height:'auto'}}/></div>

## ステップ2. XIAO ESP32S3 Senseにモデルがロードされていることを確認する

続行する前に、XIAO ESP32S3 Senseボードに訓練済みモデルがロードされていることを確認してください。まだモデルをロードしていない場合は、デバイスにモデルを訓練・デプロイする方法についてSenseCraft AIドキュメントを参照してください。

- [XIAO ESP32S3 Sense用モデルの使用](https://wiki.seeedstudio.com/ja/sensecraft_ai_pretrained_models_for_xiao/)

独自の訓練済みモデルを使用したい場合は、以下の2つのWikiを参照してください。

- [訓練の種類 - 分類](https://wiki.seeedstudio.com/ja/sensecraft_ai_training_classification/)
- [訓練の種類 - 物体検出](https://wiki.seeedstudio.com/ja/sensecraft_ai_training_object_detection/)

## ステップ3. MQTT出力を設定する

Vision Workspaceページの左サイドバーで、**Output**オプションをクリックします。利用可能な出力オプションから**MQTT**を選択して、MQTT設定にアクセスします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/56.png" style={{width:1000, height:'auto'}}/></div>

## ステップ4. MQTT設定をセットアップする

MQTT出力セクションの下部にある**Configuration**ボタンをクリックします。設定ウィンドウが表示され、以下の情報の入力を求められます：

- **SSID**: Wi-Fiネットワークの名前を入力します。
- **Password**: Wi-Fiネットワークのパスワードを入力します。
- **Encryption**: Wi-Fiネットワークの暗号化タイプを選択します（例：AUTO）。
- **MQTT**: MQTT通信を有効にするために「Yes」を選択します。

MQTT設定フィールドを入力します：

- **Host**: MQTTブローカーのホスト名またはIPアドレスを入力します（例：broker.emqx.io）。
- **Port**: MQTT通信のポート番号を指定します（例：1883）。
- **Client ID**: XIAO ESP32S3 Senseの一意のクライアントIDを入力します（例：xiao_esp32s3）。
- **User Name**: MQTTブローカーで必要な場合は、MQTTユーザー名を入力します。
- **Password**: MQTTブローカーで必要な場合は、MQTTパスワードを入力します。
- **SSL**: SSL暗号化を有効にするかどうかを選択します。MQTTブローカーがSSLをサポートしている場合は、「Yes」を選択して通信セキュリティを向上させることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/57.png" style={{width:700, height:'auto'}}/></div>

**Apply**ボタンをクリックして設定を保存します。

:::caution
このステップではネットワーク接続が必要です。XIAO ESP32S3 Senseにアンテナを接続してください。
:::

すべてが正常に設定されている場合、Webサイトで以下の情報を確認できるはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/60.png" style={{width:1000, height:'auto'}}/></div>

## ステップ 5. MQTT クライアント（MQTTX）のセットアップ

コンピューターで [MQTTX アプリケーション](https://mqttx.app/) を起動します。

以下の設定で新しい接続を作成します：

- Host: SenseCraft AI プラットフォームで使用したのと同じホスト名または IP アドレスを入力します（例：broker.emqx.io）。
- Port: MQTT 通信のポート番号を指定します（例：1883）。
- Client ID: MQTTX インスタンスの一意のクライアント ID を提供します（例：seeed_computer）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/58.png" style={{width:1000, height:'auto'}}/></div>

**Connect** ボタンをクリックして、MQTT ブローカーとの接続を確立します。

## ステップ 6. MQTT トピックの購読

MQTTX アプリケーションで、**New Subscribe** ボタンをクリックして新しい購読を作成します。トピック `sscma/v0/#` を入力し、**Subscribe** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/59.png" style={{width:1000, height:'auto'}}/></div>

このトピックは、XIAO ESP32S3 Sense からモデル推論情報を受信するために使用されます。

## ステップ 7. モデル推論結果を取得するためのコマンド送信

MQTTX アプリケーションで、デバイストピックチャンネルに移動します。これは、SenseCraft AI の MQTT ページで **Query device's topic** ボタンをクリックすることで取得できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/61.png" style={{width:1000, height:'auto'}}/></div>

コマンド `AT+INVOKE=-1,0` を送信して、XIAO ESP32S3 Sense でモデル推論をトリガーします。

:::tip
正しいトピックを送信していることを確認してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/62.png" style={{width:1000, height:'auto'}}/></div>

モデル認識関連のデータが報告されない場合は、HEX 形式でコマンドを送信してみてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/65.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/66.png" style={{width:1000, height:'auto'}}/></div>
:::

XIAO ESP32S3 Sense はコマンドを処理し、購読されたトピックにモデル推論結果を公開します。MQTTX アプリケーションでは、`sscma/v0/#` トピックの下で推論結果を受信します。

**例**：

訓練されたモデルが画像内のオブジェクトを検出するように設計されているとします。'AT+INVOKE=-1,0' コマンドを送信すると、XIAO ESP32S3 Sense は画像をキャプチャし、モデル推論を実行し、MQTT 経由で結果を公開します。推論結果には、検出されたオブジェクト、それらのバウンディングボックス、信頼度スコアなどの情報が含まれる場合があります。例えば、MQTT メッセージペイロードは次のようになります：

```json
{"type":1,"name":"INVOKE","code":0,"data":{"count":989,"image":"/9j/4AAQSkZJRgABAQEAAAAAAAD...CUxBQAYoAPpQAc0AA/9X/2Q==","boxes":[[208.46,215.41,69.49,48.64,80.60,0]],"perf":[70,470,0],"rotation":0,"width":240,"height":240}}
```

JSON形式の詳細な説明については、**[こちら](https://github.com/Seeed-Studio/SSCMA-Micro/blob/main/docs/protocol/at-protocol-en_US.md#box-type)**のドキュメントをお読みください。

:::tip
デバイスのファームウェアには、モデル結果出力の形式とユーザーがモデルで実行できる操作を指定する確立された通信プロトコルのセットがあります。スペースの問題により、このwikiではこれらのプロトコルの詳細については展開しませんが、Githubのドキュメントを通じてこのセクションを詳しく説明します。より詳細な開発に興味がある場合は、**[こちら](https://github.com/Seeed-Studio/SSCMA-Micro/blob/dev/docs/protocol/at_protocol.md)**をご覧ください。
:::

base64エンコードされた画像をデコードするには：

1. JSONオブジェクトの「image」フィールドからbase64エンコードされた文字列をコピーします。

2. Webブラウザで`https://base64.guru/converter/decode/image`のウェブサイトにアクセスします。

3. コピーしたbase64エンコードされた文字列をウェブサイトの「Base64 string」テキストエリアに貼り付けます。

4. **Decode Base64 to Image**ボタンをクリックします。

5. デコードされた画像がボタンの下に表示され、表示またはダウンロードできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/64.png" style={{width:1000, height:'auto'}}/></div>

## まとめ

このステップバイステップガイドに従うことで、XIAO ESP32S3 SenseボードのSenseCraft AIプラットフォームでMQTTを使用してモデル出力を設定する方法を学びました。これでMQTT経由でモデル推論結果を取得し、アプリケーションやシステムに統合できます。シームレスな通信のために、安定したWi-Fi接続を確保し、MQTTブローカーとクライアント設定を正しく構成することを忘れないでください。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
