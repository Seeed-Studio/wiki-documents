---
description: SenseCAP_T1000_tracker_and_InfluxDB_Integrated
title: InfluxDB 統合 (via TTS)
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_T1000_tracker_InfluxDB_TTS
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

[InfluxDB](https://docs.influxdata.com/influxdb/v2.0/get-started/) はオープンソースの時系列データベースであり、高性能な読み取り、高性能な書き込み、効率的なストレージ、大量の時系列データのリアルタイム分析に重点を置いています。HTTPやUDPなどのネイティブプロトコルに加え、CollectD、Graphite、OpenTSDB、Prometheusなどのコンポーネントの通信プロトコルとも互換性があります。DevOpsモニタリング、IoTモニタリング、リアルタイム分析などのシナリオで広く使用されています。

この章では、[SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) をTTNを介してInfluxDBに接続する方法をユーザーに案内します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/influx_sense.png" alt="pir" width={800} height="auto" /></p>

セットアップを開始する前に、まず [Connect SenseCAP T1000 to TTS](https://wiki.seeedstudio.com/ja/SenseCAP_T1000_tracker_TTN) を確認して、SenseCAP T1000 TrackerをTTSに接続してください。

## 準備

InfluxDBをセットアップする前に、Telegrafエージェント（バージョン1.9.2以上）をインストールする必要があります。

[Telegraf Configuration](https://docs.influxdata.com/influxdb/v2.0/telegraf-configs)

## InfluxDB Cloud のセットアップ

[InfluxDB Cloud](https://us-east-1-1.aws.cloud2.influxdata.com/) にログインします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/buckets.png" alt="pir" width={800} height="auto" /></p>

### バケットの作成

**Buckets** タブで操作します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/buckets.png" alt="pir" width={800} height="auto" /></p>

**Create Bucket** ボタンをクリックして新しいバケットを作成します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/createbucket.png" alt="pir" width={800} height="auto" /></p>

バケットに名前を付け、データがデータベースに保持される期間を選択してから **Create** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_done.png" alt="pir" width={800} height="auto" /></p>

### トークンの生成

**API TOKENS** タブに移動し、**GENERATE API TOKEN** ボタンをクリックしてトークンを作成します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/get_token.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_done.png" alt="pir" width={800} height="auto" /></p>

## Telegraf の設定

### MQTT 統合

このセクションでは、TTS MQTTサーバーに接続するために使用されるMQTT Consumerプラグインを使用してTelegrafエージェントを設定する方法を説明します。

**TELEGRAF** タブに移動し、**CREATE CONFIGURATION** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/telegraf.png" alt="pir" width={800} height="auto" /></p>

作成したバケットを選択し、システムを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_telegraf.png" alt="pir" width={800} height="auto" /></p>

設定に名前を付け、**Create and Verify** を選択してから **Finish** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/download_config.png" alt="pir" width={800} height="auto" /></p>

InfluxDB Cloud 2.0 Setupで説明されているようにTelegraf設定ファイルをダウンロードした後、以下の行を追加し、MQTTサーバー情報に応じて修正します：

```cpp
[[inputs.mqtt_consumer]]
#
# 使用するMQTTブローカーURL。形式は scheme://host:port で、スキーマは tcp、ssl、または ws を指定できます。
  servers = ["tcp://localhost:1883"]
#
# 購読するトピック
  topics = ["#"]
#
# ユーザー名とパスワード
  username = "example"
  password = "NNSXS.JNSBLIV34VXYXS7D4ZWV2IKPTGJM3DFRGO.........."
#
# ペイロードタイプが文字列の場合に必要。Telegrafはデフォルトでこのタイプのデータを転送しません。
  json_string_fields = ["uplink_message_frm_payload"]
#
# メッセージ形式を定義
  data_format = "json"
```

:::info
以下のタブでTTS情報を確認できます。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/TTS_info.png" alt="pir" width={800} height="auto" /></p>

次に、Tokensタブで以前生成したトークンをコピーし、環境変数としてエクスポートしてInfluxDB出力プラグインで使用するか、設定ファイル内で直接トークン値として渡すことができます。以下のコマンドをターミナルで使用して環境変数を設定します：

```cpp
INFLUX_TOKEN="ここにトークンを貼り付けてください"
```

以下のコマンドを使用してターミナルでTelegrafエージェントを実行します：

```cpp
telegraf --config /path/to/custom/telegraf.conf
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/connected_MQTT.png" alt="pir" width={800} height="auto" /></p>

### HTTP 統合

このセクションでは、HTTP Listener v2プラグインを使用してTelegrafエージェントを設定し、The Things Stackで関連するWebhook統合を作成する方法を説明します。

InfluxDB Cloud 2.0 Setupで説明されているように、以前ダウンロードしたTelegraf設定を更新し、以下の行を追加してセットアップに応じて修正します：

```cpp
[[inputs.http_listener_v2]]
#
# HTTPリスナーをホストするアドレスとポート
  service_address = ":8080"
#
# リスナーのパス
  path = "/telegraf"
#
# 受け入れるHTTPメソッド
  methods = ["POST"]
#
# ペイロードタイプが文字列の場合に必要。Telegrafはデフォルトでこのタイプのデータを転送しません。
  json_string_fields = ["uplink_message_frm_payload"]
#
# メッセージ形式を定義
  data_format = "json"
```

生成されたトークンを「Tokens」タブからコピーし、それを Telegraf 設定ファイルの出力プラグインのトークン値として使用するか、以下のコマンドをターミナルで実行して環境変数にエクスポートしてください：

```cpp
INFLUX_TOKEN="ここにトークンを貼り付けてください"
```

次に、以下のコマンドをターミナルで実行して Telegraf エージェントを起動します：

```cpp
telegraf --config /path/to/custom/telegraf.conf
```

## データエクスプローラー

エクスプローラーの種類を選択し、フィルタウィンドウのドロップダウンメニューから **_measurement** を選択して、**mqtt_consumer** ボックスにチェックを入れます。その後、監視したいトピックとパラメータを選択できます。

**位置データ**

FROM: あなたのバケット <br />
MEASUREMENT: matt_consumer <br />
_field: uplink_message_decoded_payload <br />
topic: v3/...

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/map-done.png" alt="pir" width={800} height="auto" /></p>

また、右上の **SAVE AS** をクリックして、このエクスプローラーを Dashboard セルとして保存することもできます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/saveas.png" alt="pir" width={800} height="auto" /></p>

## ダッシュボード（オプション）

ダッシュボードは、リアルタイムでデータを視覚化し、操作する場所です。必要に応じてダッシュボードをカスタマイズできます。

**Dashboard** タブに移動し、**Create Dashboard** をクリックします。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_dashboard.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/influx_dashbaord.png" alt="pir" width={800} height="auto" /></p>