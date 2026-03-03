---
description: SenseCAP_T1000_tracker_and_InfluxDB_Integrated
title: InfluxDB統合（TTS経由）
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_T1000_tracker_InfluxDB_TTS
last_update:
  date: 8/18/2023
  author: Jessie
---


[InfluxDB](https://docs.influxdata.com/influxdb/v2.0/get-started/)は、大規模な時系列データの高性能読み取り、高性能書き込み、効率的なストレージ、リアルタイム分析に焦点を当てたオープンソースの時系列データベースです。HTTPやUDPなどのネイティブプロトコルに加えて、CollectD、Graphite、OpenTSDB、Prometheusなどのコンポーネントの通信プロトコルとも互換性があります。DevOps監視、IoT監視、リアルタイム分析などのシナリオで広く使用されています。

この章の内容では、[SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html)をTTN経由でInfluxDBに接続する方法をユーザーに案内します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/influx_sense.png" alt="pir" width={800} height="auto" /></p>

セットアップを開始する前に、[SenseCAP T1000をTTSに接続](https://wiki.seeedstudio.com/ja/SenseCAP_T1000_tracker_TTN)を確認して、まずSenseCAP T1000 TrackerをTTSに接続してください。

## 準備

InfluxDBをセットアップする前に、Telegrafエージェント（バージョン1.9.2以上）をインストールする必要があります。

[Telegraf設定](https://docs.influxdata.com/influxdb/v2.0/telegraf-configs/)

## InfluxDB Cloudのセットアップ

[InfluxDB Cloud](https://us-east-1-1.aws.cloud2.influxdata.com/)にログインします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/buckets.png" alt="pir" width={800} height="auto" /></p>

### バケットの作成

**Buckets**タブで操作します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/buckets.png" alt="pir" width={800} height="auto" /></p>

**Create Bucket**ボタンをクリックして新しいバケットを作成します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/createbucket.png" alt="pir" width={800} height="auto" /></p>

バケットに名前を付け、データがデータベースに保持される期間を選択してから**Create**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_done.png" alt="pir" width={800} height="auto" /></p>

### トークンの生成

**API TOKENS**タブに移動し、**GENERATE API TOKEN**ボタンをクリックしてトークンを作成します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/get_token.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_done.png" alt="pir" width={800} height="auto" /></p>

## Telegrafの設定

### MQTT統合

このセクションでは、TTS MQTTサーバーへの接続に使用されるMQTT Consumerプラグインを使用してTelegrafエージェントを設定する方法を説明します。

**TELEGRAF**タブに移動し、**CREATE CONFIGURATION**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/telegraf.png" alt="pir" width={800} height="auto" /></p>

先ほど作成したバケットを選択し、systemを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_telegraf.png" alt="pir" width={800} height="auto" /></p>

設定に名前を付け、Create and Verifyを選択してからFinishを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/download_config.png" alt="pir" width={800} height="auto" /></p>

InfluxDB Cloud 2.0セットアップで説明されているようにTelegraf設定ファイルをダウンロードしたら、以下の行を追加し、MQTTサーバー情報に応じて変更して更新します：

```cpp
[[inputs.mqtt_consumer]]
#
#MQTT broker URLs to be used. The format is scheme://host:port, schema can be tcp, ssl, or ws.
  servers = ["tcp://localhost:1883"]
#
#Topics to subscribe to
  topics = ["#"]
#
#Username and password
  username = "example"
  password = "NNSXS.JNSBLIV34VXYXS7D4ZWV2IKPTGJM3DFRGO.........."
#
#Needed only if your payload type is string, since Telegraf does not forward data of this type by default
  json_string_fields = ["uplink_message_frm_payload"]
#
#Define the message format
  data_format = "json"
```

:::info
以下のタブでTTS情報を確認できます。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/TTS_info.png" alt="pir" width={800} height="auto" /></p>

次に、Tokensタブから以前に生成したトークンをコピーし、InfluxDB出力プラグインで使用するために環境変数にエクスポートする必要があります。または、設定ファイルでトークン値として直接渡すこともできます。ターミナルで以下のコマンドを使用して環境変数を設定できます：

```cpp
INFLUX_TOKEN="paste your token here"
```

以下のコマンドでターミナルでTelegrafエージェントを実行してください：

```cpp
telegraf --config /path/to/custom/telegraf.conf
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/connected_MQTT.png" alt="pir" width={800} height="auto" /></p>

### HTTP統合

このセクションでは、HTTP Listener v2プラグインを使用してTelegrafエージェントを設定する方法と、The Things Stack上で対応するWebhook統合を作成する方法を説明します。

以下の行を追加し、お使いの設定に応じて変更することで、InfluxDB Cloud 2.0セットアップで説明されている通り、以前にダウンロードしたTelegraf設定を更新してください：

```cpp
[[inputs.http_listener_v2]]
#
# Address and port to host HTTP listener on
  service_address = ":8080"
#
# Path to listen to
  path = "/telegraf"
#
# HTTP methods to accept
  methods = ["POST"]
#
# Needed only if your payload type is string, since Telegraf does not forward data of this type by default
  json_string_fields = ["uplink_message_frm_payload"]
#
# Define the message format
  data_format = "json"
```

生成されたトークンをTokensタブからコピーし、Telegrafの設定ファイル内のoutputプラグインのトークン値として使用するか、ターミナルで以下のコマンドを使用して環境変数にエクスポートしてください：

```cpp
INFLUX_TOKEN="paste your token here"
```

ターミナルで以下のコマンドを実行してTelegrafエージェントを開始します：

```cpp
telegraf --config /path/to/custom/telegraf.conf
```

## Data Explorer

エクスプローラータイプを選択し、Filterウィンドウのドロップダウンメニューで **_measurement** を選択し、**mqtt_consumer** ボックスにチェックを入れます。その後、監視したいトピックとパラメータを選択できます。

**位置データ**

FROM: Your bucket <br />
MEASUREMENT: matt_sonsumer <br />
_field: uplink_message_decoded_payload <br />
topic: v3/...

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/map-done.png" alt="pir" width={800} height="auto" /></p>

右上角の **SAVE AS** をクリックして、このエクスプローラーをダッシュボードセルとして保存することもできます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/saveas.png" alt="pir" width={800} height="auto" /></p>

## Dashboards（オプション）

ダッシュボードは、リアルタイムでデータを視覚化し、操作する場所です。ニーズに応じてダッシュボードをカスタマイズできます。

**Dashboard** タブに移動し、**Create Dashbaord** をクリックします。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_dashboard.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/influx_dashbaord.png" alt="pir" width={800} height="auto" /></p>
