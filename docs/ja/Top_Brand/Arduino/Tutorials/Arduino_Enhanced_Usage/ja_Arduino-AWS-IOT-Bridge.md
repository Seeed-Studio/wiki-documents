---
description: Arduinoボードを使用してMosquitto MQTTブローカーをAWS IoTにブリッジする
title: Arduinoボードを使用してMosquitto MQTTブローカーをAWS IoTにブリッジする
keywords:
- ソフトウェア
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Arduino-AWS-IOT-Bridge
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# Arduinoボードを使用してMosquitto MQTTブローカーをAWS IoTにブリッジする方法

<div align="center"><img src="https://files.seeedstudio.com/wiki/AWSIOT/AWSIOT.gif"/></div>
<br />

ゲートウェイは、[産業用IoT](https://aws.amazon.com/iot/solutions/industrial-iot/)環境やスマートホームの接続において、ほとんどのアーキテクチャの議論で登場します。本記事では、[**Mosquitto**](https://mosquitto.org/)エージェントの**ブリッジ機能**を実装し、MQTTメッセージングを通じて双方向のデータ交換を設定し、[**AWS IoT Core**](https://aws.amazon.com/iot-core/)と通信する方法を紹介します。これにより、デバイスがローカルでMosquittoエージェントと通信し、AWS IoT Coreを通じてAWSクラウドの力を活用できるようになります。

このチュートリアルでは、[**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)を例として使用し、Mosquitto MQTTブローカーをAWS IoTにブリッジする方法を説明します。

## MQTTブローカーをAWS IoTにブリッジする理由

既存のIoT展開がある場合、すでに[**Mosquitto**](https://mosquitto.org/)のようなMQTTブローカーにデバイスが接続されている可能性があります。この場合、MQTTエージェントは展開されたセンサーの近く（ローカルMQTTブローカー）にあるか、クラウドのようなリモートロケーションにある可能性があります。以下の図のように、ローカルゲートウェイをAWS IoT Coreと通信するように設定できます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/AWSIOT/AWS-bridge.png"/></div>

## はじめに

### Dockerを使用してAWS Mosquittoブローカーを構築する

#### ステップ1: AWSアカウントの設定

[AWS](https://docs.aws.amazon.com/iot/latest/developerguide/iot-console-signin.html)にアクセスしてアカウントを設定します。

`ユーザー` -> `マイセキュリティ資格情報`に移動し、**アクセスキーID**と**アクセスキー**を取得します。

#### ステップ2: リポジトリをクローンする

この[リポジトリ](https://github.com/ansonhe97/aws_mosquitto_broker)をローカルドライブにクローンします。

#### ステップ3: AWS CLIのインストールと設定

[AWS CLI](http://docs.aws.amazon.com/cli/latest/userguide/installing.html)をインストールします。

ターミナルで`aws configure`を実行し、リージョン、アクセスID、キーを入力します。以下のように入力します：

```sh
aws configure
AWS Access Key ID [None]: AKIAIOSFODNN7EXAMPLE
AWS Secret Access Key [None]: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
Default region name [None]: eu-central-1
Default output format [None]: json
```

#### ステップ4: ブリッジ用のIAMポリシーを作成する

以下のコマンドを実行してブリッジ用のポリシーを作成します：

```sh
aws iot create-policy --policy-name bridge --policy-document '{"Version": "2012-10-17","Statement": [{"Effect": "Allow","Action": "iot:*","Resource": "*"}]}'
```

#### ステップ5: 証明書の作成

`aws_mosquitto_broker/config/certs`ディレクトリに移動し、以下を実行して証明書を作成します：

```sh
cd aws_mosquitto_broker/config/certs

sudo aws iot create-keys-and-certificate --set-as-active --certificate-pem-outfile cert.crt --private-key-outfile private.key --public-key-outfile public.key --region eu-central-1
```

その後、`aws iot list-certificates`を実行して作成された証明書を確認します。`arn:aws:iot:eu-central-1:0123456789:cert/xyzxyz`の形式のARNをコピーします：

```sh
aws iot list-certificates
```

ポリシーを証明書にアタッチします。コピーしたARN `arn:aws:iot:eu-central-1:0123456789:cert/xyzxyz`を`{REPLACE_ARN_CERT}`に置き換えます：

```sh
aws iot attach-principal-policy --policy-name bridge --principal {REPLACE_ARN_CERT}
```

**プライベートキー**、**パブリックキー**、**クライアント証明書**（`certs`フォルダ内）の読み取り権限を追加します：

```sh
sudo chmod 644 private.key && sudo chmod 644 public.key && sudo chmod 644 cert.crt
```

AmazonのルートCA証明書を`certs`ディレクトリにダウンロードします：

```sh
sudo curl https://www.websecurity.digicert.com/content/dam/websitesecurity/digitalassets/desktop/pdfs/roots/VeriSign-Class%203-Public-Primary-Certification-Authority-G5.pem -o rootCA.pem
```

#### ステップ6: Mosquittoのカスタム設定ファイルを編集する

`awsbridge.conf.sample`を`awsbridge.conf`にリネームします：

```sh
mv awsbridge.conf.sample awsbridge.conf
```

`config/conf.d/awsbridge.conf`を編集し、awsbridge.confの指示に従います：

```sh
nano config/conf.d/awsbridge.conf
```

**注意:** `aws iot describe-endpoint`を実行してAWS IoTエンドポイントを取得します。

#### ステップ7: Dockerファイルをビルドする

ルートディレクトリ`aws_mosquitto_broker`に戻り、以下を実行します：

```sh
docker build -t aws_mqtt_broker .
```

**注意:** 事前にPCにDockerをインストールしておいてください。

#### ステップ8: Dockerイメージを実行する

```sh
docker run -ti -p 1883:1883 -p 9001:9001 --name mqtt aws_mqtt_broker
```

コンソール/ログ出力：

```sh
1592301141: mosquitto version 1.4.15 (build date 2018-03-04 15:19:39+0000) starting
1592301141: Config loaded from /mosquitto/config/mosquitto.conf.
1592301141: Opening ipv4 listen socket on port 1883.
1592301141: Opening ipv6 listen socket on port 1883.
1592301141: Bridge local.bridgeawsiot doing local SUBSCRIBE on topic localgateway_to_awsiot
1592301141: Bridge local.bridgeawsiot doing local SUBSCRIBE on topic both_directions
1592301141: Connecting bridge awsiot (aq53tian3vbby.iot.eu-central-1.amazonaws.com:8883)
1592301141: Bridge bridgeawsiot sending CONNECT
1592301144: Received CONNACK on connection local.bridgeawsiot.
1592301144: Bridge local.bridgeawsiot sending SUBSCRIBE (Mid: 1, Topic: awsiot_to_localgateway, QoS: 1)
1592301144: Bridge local.bridgeawsiot sending UNSUBSCRIBE (Mid: 2, Topic: localgateway_to_awsiot)
1592301144: Bridge local.bridgeawsiot sending SUBSCRIBE (Mid: 3, Topic: both_directions, QoS: 1)
1592301144: Received SUBACK from local.bridgeawsiot
1592301144: Received UNSUBACK from local.bridgeawsiot
1592301145: Received SUBACK from local.bridgeawsiot
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/AWSIOT/dockerbroker.png"/></div>

#### ステップ 8: ローカルブローカーのテスト

**AWS IoT コンソールからのパブリッシュ**

1.- AWS マネジメントコンソールから `AWS IoT サービス` -> `テスト` に移動します。

2.- 設定ファイルで指定したトピック `awsiot_to_localgateway`、`localgateway_to_awsiot`、`both_directions` を購読します。

3.- `awsiot_to_localgateway` トピックにパブリッシュします（例: hello world）。

4.- ローカルブローカーのログまたはコンソール出力で以下のような内容を確認します：

`1493564128: Received PUBLISH from local.bridgeawsiot (d0, q0, r0, m0, 'awsiot_to_localgateway', ... (45 bytes))`

**注意:** リージョンとして `eu-central-1` が選択されていることを確認してください。

**ホストからのパブリッシュ**

ワークフロー: `ローカルブローカー(ホストPC)` -> `Docker Gateway` -> `AWS IoT`

以下のコマンドをターミナルで実行して、ホストから AWS IoT にパブリッシュします：

`mosquitto_pub -h localhost -p 1883 -q 1 -d -t localgateway_to_awsiot  -i clientid1 -m "{\"key\": \"helloFromLocalGateway\"}"`

:::note
PC に [mosquitto](https://mosquitto.org/download/) がインストールされていることを確認してください。
:::

### Wio Terminal からのメッセージのパブリッシュ

これで、Wio Terminal をエンドデバイスの1つとして使用し、トピックにパブリッシュまたはサブスクライブすることができます！

#### 依存ライブラリのインストール

このデモは Wio Terminal の Wi-Fi コアに依存しています。まず [**こちら**](https://wiki.seeedstudio.com/ja/Wio-Terminal-Network-Overview/) のウィキを参照してください。

**ステップ.1 Pubsubclient ライブラリのインストール**

1. [pubsubclient](https://github.com/knolleary/pubsubclient) リポジトリにアクセスし、リポジトリ全体をローカルドライブにダウンロードします。

2. 次に、FS ライブラリを Arduino IDE にインストールします。Arduino IDE を開き、`スケッチ` -> `ライブラリをインクルード` -> `ZIP形式のライブラリを追加` をクリックし、先ほどダウンロードした `pubsubclient` ファイルを選択します。

![ライブラリのインストール](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

**ステップ.2 ArduinoJson ライブラリのインストール**

1. [ArduinoJson](https://github.com/bblanchon/ArduinoJson) リポジトリにアクセスし、リポジトリ全体をローカルドライブにダウンロードします。

2. 次に、ArduinoJson ライブラリを Arduino IDE にインストールします。Arduino IDE を開き、`スケッチ` -> `ライブラリをインクルード` -> `ZIP形式のライブラリを追加` をクリックし、先ほどダウンロードした `ArduinoJson` ファイルを選択します。

#### Arduino スケッチのアップロード

Arduino スケッチを [**こちら**](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/blob/master/examples/WioTerminal_AWSIoT_Bridge/WioTerminal_AWSIoT_Bridge.ino) からダウンロードしてください。

- Wi-Fi 設定の `ssid` と `password` を設定します。
- `mqttserver` を MQTT ブローカーの IP アドレス（PC の IP アドレス）に変更します。

コードをアップロードし、シリアルモニターを開いて確認してください！これで、Wio Terminal のボタンを押すと AWS IoT にメッセージがパブリッシュされ、AWS IoT コンソールからの受信メッセージも確認できます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/AWSIOT/result.png"/></div>

:::note
ローカルブローカーの Docker が常に稼働していることを確認してください。
:::

## リソース

- [Mosquitto MQTT ブローカーを AWS IoT にブリッジする方法](https://aws.amazon.com/cn/blogs/iot/how-to-bridge-mosquitto-mqtt-broker-to-aws-iot/)

## 技術サポートと製品ディスカッション

<br/>
弊社の製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>