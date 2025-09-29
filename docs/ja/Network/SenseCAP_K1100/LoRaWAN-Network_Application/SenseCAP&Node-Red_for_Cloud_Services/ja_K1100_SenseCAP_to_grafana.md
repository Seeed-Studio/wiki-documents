---
description: SenseCAP & Node-RED を使用して Grafana に接続
title: SenseCAP & Node-RED を使用して Grafana に接続
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/K1100_SenseCAP_to_grafana
last_update:
  date: 05/15/2025
  author: shuxu hu
---


# Node-RED を介して SenseCAP を Grafana に接続

**SenseCAP K1100 - センサープロトタイプキット** は、Seeed Studio が LoRa® 通信技術とエッジインテリジェンス製品のエッセンスを凝縮し、LoRa® および IoT アプリケーションを最も簡単に展開し習得できるように設計されています。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/banner.png" /></div>

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products)

## 産業用センサーへのアップグレードが可能

SenseCAP [S2110 コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) と [S2100 データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) を使用することで、Grove を簡単に LoRaWAN® センサーに変えることができます。Seeed はプロトタイピングを支援するだけでなく、堅牢な [産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) を備えた SenseCAP シリーズを使用してプロジェクトを拡張する可能性も提供します。

IP66 ハウジング、Bluetooth 設定、グローバル LoRaWAN® ネットワークとの互換性、内蔵 19 Ah バッテリー、そしてアプリからの強力なサポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) は産業用途に最適な選択肢となります。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして 8-in-1 気象ステーション用のセンサーが含まれています。次の成功する産業プロジェクトに最新の SenseCAP S210x をお試しください。

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr><td colSpan={4} bgcolor="#0e3c49" align="center"><font color="white" size={4}><strong>SenseCAP 産業用センサー</strong></font></td></tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><strong>S2100 <br /> データロガー</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> 空気温度 &amp; 湿度</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> 光強度</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> 空気温度 &amp; 湿度 &amp; CO2</strong></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><strong>S2104 <br /> 土壌水分 &amp; 温度</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> 土壌水分 &amp; 温度 &amp; EC</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> LoRaWAN® コントローラー</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> 8-in-1 気象ステーション</strong></a></td>
    </tr>
  </tbody></table>

## Grafana

Grafanaは、データ分析を実行し、大量のデータを理解するためのメトリクスを引き出し、カスタマイズ可能なダッシュボードを使用してアプリケーションを監視するためのオープンソースソリューションです。Grafanaは、Graphite、Prometheus、Influx DB、ElasticSearch、MySQL、PostgreSQLなど、一般的にデータベースと呼ばれるあらゆるデータソースに接続できます。オープンソースソリューションであるGrafanaは、さまざまなデータソースとの統合のためにゼロからプラグインを作成することも可能です。このツールは、時間の経過に伴うデータを研究、分析、監視するのに役立ち、技術的には時系列分析と呼ばれます。

これにより、ユーザーの行動、アプリケーションの動作、プロダクションまたはプレプロダクション環境で発生するエラーの頻度、発生するエラーの種類、および関連するシナリオを相対的なデータを提供することで追跡できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/1.png" alt="pir" width={800} height="auto" /></p>

この章の内容では、前述のNode-REDを引き続き使用し、InfluxDB 2.4インスタンスからのデータをGrafanaで可視化します。

その前に、以下を準備してください。

1. Node-REDをインストールしていない、またはNode-REDが何か分からない場合は、[Node-RED & SenseCAP チュートリアル](https://wiki.seeedstudio.com/ja/K1100_sensecap_node-red/)を参照してください。

2. Node-REDを使用してSenseCAPをInfluxDBにデプロイすることから始めてください。その詳細は、wikiの[Node-REDを介してSenseCAPをInfluxDBに接続する](https://wiki.seeedstudio.com/ja/K1100_SenseCAP_to_influxdb/)で確認できます。

## MQTTノードの作成

**ステップ1.** Node-REDを起動する

ターミナルでコマンド`node-red`を入力してNode-REDを起動し、ブラウザを開いてアドレスバーに`http://localhost:1880`を入力してNode-REDのエディタにアクセスします。

**ステップ2.** MQTTノードを作成する

**Network -> mqtt in**ノードを使用し、[前回のチュートリアル](https://wiki.seeedstudio.com/ja/K1100_sensecap_node-red/#mqtt-node)で説明したSenseCAP APIの形式に従ってmqttを設定します。

- サーバー: openstream.api.sensecap.seeed.cc
- ポート: 1883
- プロトコル: MQTT V3.1.1
- クライアントID: フォーマットは`org-<Organization ID>-<Random ID>`
  - `<Organization ID>`: 組織ID。これは[SenseCAP APIを取得する](/ja/K1100_sensecap_node-red#get-the-sensecap-api)で取得済みです。
  - `<Random ID>`: ランダムに生成された数字または小文字の文字列を使用します。

- トピックフォーマット: `/device_sensor_data/<OrgID>/<DeviceEUI>/<Channel>/<Reserved>/<MeasurementID>`

<table align="center">
  <tbody><tr>
      <td align="center">OrgID</td>
      <td align="center">組織ID。これはSenseCAP APIを取得する際に取得済みです。</td>
    </tr>
    <tr>
      <td align="center">DevEUI</td>
      <td align="center">センサー機器の一意の識別子。この情報はGrove - Wio E5の背面のステッカーやSenseCAPコンソールデバイスで確認できます。</td>
    </tr>
    <tr>
      <td align="center">Channel</td>
      <td align="center">センサーが接続されているデバイスの物理インターフェース。K1100キットの場合、ここでのデフォルト値は1です。</td>
    </tr>
    <tr>
      <td align="center">Reserved</td>
      <td align="center">予約フィールド。</td>
    </tr>
    <tr>
      <td align="center">MeasurementID</td>
      <td align="center">測定値ID。このIDは<a href="https://sensecap-docs.seeed.cc/sensor_types_list.html" target="_blank">SenseCAP ドキュメント</a>の測定値IDセクションで確認できます。</td>
    </tr>
  </tbody></table>

**ステップ3.** MQTTノードを検証する

設定が完了したら、右上の**Deploy**ボタンをクリックして設定が成功したか確認してください。正しく入力されていれば、**Connected**という単語が表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/1.png" /></div>

## InfluxDB OSS を開始する

:::tip
InfluxDB が提供する詳細な [チュートリアル](https://docs.influxdata.com/influxdb/v2.4/install/?t=Windows#start-influxdb) を参照して、InfluxDB のインストールとデプロイを完了することができます。このチュートリアルは異なるシステムに対応しています。以下では、Windows 11 システムを例にインストール手順を説明します。
:::

**ステップ 1.** InfluxDB v2.4 をダウンロードする

[こちら](https://dl.influxdata.com/influxdb/releases/influxdb2-2.4.0-windows-amd64.zip) をクリックして、InfluxDB v2.4 の zip ファイルをダウンロードしてください。

ダウンロードしたアーカイブを `C:\Program Files\InfluxData\` に展開し、必要に応じてファイル名を変更してください。

**ステップ 2.** InfluxDB を開始する

Powershell で `C:\Program Files\InfluxData\influxdb` に移動し、influxd デーモンを実行して InfluxDB を開始します。

```shell
cd -Path 'C:\Program Files\InfluxData\influxdb'
.\influxd
```

:::tip
Powershell または WSL を使用して influx および influxd コマンドを実行してください。このドキュメントのコマンドライン例では、システム `PATH` にインストールされているかのように influx および influxd を使用しています。これらのバイナリが `PATH` にインストールされていない場合は、提供された例の influx および influxd を `.\influx` および `.\influxd` に置き換えてください。
:::

デフォルトでは、InfluxDB は [InfluxDB HTTP API](https://docs.influxdata.com/influxdb/v2.4/reference/api/) を介したクライアント-サーバー通信に TCP ポート `8086` を使用します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/3.png" /></div>

## InfluxDB を設定する

**ステップ 1.** InfluxDB アカウントを登録する

上記の手順を続け、開いたページでアカウントを登録してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/11.png" /></div>

ここで設定した **Organisation Name** をメモしてください。この名前は後で Node RED の設定で使用します。

**ステップ 2.** URL を取得する

デフォルトでは、InfluxDB は InfluxDB HTTP API を介したクライアント-サーバー通信に TCP ポート `8086` を使用します。

```
http://localhost:8086/
```

このセクションでは、InfluxDB の URL は以下の通りです。これをメモしてください。後で Node RED の設定で使用します。

**ステップ 3.** API トークンを取得する

以下に示すように API トークンページに移動し、Node RED 用の新しい API インターフェースを作成してトークンをメモしてください。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/12.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/13.png" /></div>

## Node-RED を設定する

**ステップ 1.** InfluxDB パレットをダウンロードする

右上のメニューバーをクリックし、設定を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/13.png" /></div>

**Paletts -> Install** で **node-red-contrib-influxdb** を検索してインストールします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/12.png" /></div>

左側のストレージバーから **influx.batch** を追加し、ダブルクリックして設定ページに入り、**influx.batch** ノードを編集するために編集ボタンをクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/13.png" /></div>

**ステップ 2.** **influx.batch** ノードを編集する:

- **Version**: 2.0
- **URL**: `http://localhost:8086/`
- **TOKEN**: **API トークンを取得する** セクションで生成したトークン

完了したら、右上の **Add** ボタンをクリックして influx.batch のプロパティページに戻ります。この時点で、組織名とバケット名を入力してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/20.png" /></div>

**ステップ 3.** 関数ノードを設定する

InfluxDB にデータを報告するには特定のデータ形式に従う必要があるため、データ形式を処理するための関数ノードを追加する必要があります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/18.png" /></div>

左側の関数バーから関数ノードをドラッグし、ダブルクリックして編集ページに入り、以下のコードを On Message にコピーしてください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/17.png" /></div>

```javascript
{
    var payload = msg.payload;
    var topic = msg.topic;
    var strs = topic.split("/");
    var length = strs.length
    if (length >= 2) {
        var measurementId = strs[length - 1]
        var body = {}
        var value = payload.value
        if (measurementId == 4100) {
            body.co2 = value
            measurement = "co2"
        } else if (measurementId == 4103) {
            body.soilmoisture = value
            measurement = "soilmoisture"
        } else if (measurementId == 4150) {
            body.accelX = value
            measurement = "accelX"
        } else if (measurementId == 4151) {
            body.accelY = value
            measurement = "accelY"
        } else if (measurementId == 4152) {
            body.accelZ = value
            measurement = "accelZ"
        } else if (measurementId == 4192) {
            body.soundintensity = value
            measurement = "soundintensity"
        } else if (measurementId == 4193) {
            body.lightIntensity = value
            measurement = "lightIntensity"
        } else if (measurementId == 4195) {
            body.tvoc = value
            measurement = "tvoc"
        } else if (measurementId == 4097) {
            body.airtemperature = value
            measurement = "airtemperature"
        } else if (measurementId == 4098) {
            body.airhumidity = value
            measurement = "airhumidity"
        } else if (measurementId == 4175) {
            body.AIdetection_1 = value
            measurement = "AIdetection_1"
        } else if (measurementId == 4176) {
            body.AIdetection_2 = value
            measurement = "AIdetection_2"
        } else if (measurementId == 4177) {
            body.AIdetection_3 = value
            measurement = "AIdetection_3"
        } else if (measurementId == 4178) {
            body.AIdetection_4 = value
            measurement = "AIdetection_4"
        } else if (measurementId == 4179) {
            body.AIdetection_5 = value
            measurement = "AIdetection_5"
        } else if (measurementId == 4180) {
            body.AIdetection_6 = value
            measurement = "AIdetection_6"
        } else if (measurementId == 4181) {
            body.AIdetection_7 = value
            measurement = "AIdetection_7"
        } else if (measurementId == 4182) {
            body.AIdetection_8 = value
            measurement = "AIdetection_8"
        } else if (measurementId == 4183) {
            body.AIdetection_9 = value
            measurement = "AIdetection_9"
        } else if (measurementId == 4184) {
            body.AIdetection_10 = value
            measurement = "AIdetection_10"
        }
        msg.payload = [{
            measurement: measurement,
            fields: body,
            tags: {
                device: "SenseCAP K1100"
            },
            timestamp: new Date()
        }];
    }
    return msg;
}
```

次に、すべてのノードを接続し、**Deploy** ボタンをクリックします。すべてが正しく設定されていれば、mqtt in ノードが「connected」と表示されるはずです。

データのログ情報を確認したい場合は、function ノードの後に debug ノードを追加することができます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/17.png" /></div>

Wio Terminal が起動して動作を開始し、SenseCAP PaaS サーバーにデータを送信し始めると、Node-RED のデバッグログでデータを確認することができます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/21.png" /></div>

## Grafana の設定

**ステップ 1.** Grafana のインストール

Grafana はさまざまなオペレーティングシステムにインストールできます。最小限のハードウェアおよびソフトウェア要件のリストや、Grafana のインストール手順については、[Grafana のインストール](https://grafana.com/docs/grafana/v9.0/setup-grafana/installation/)を参照してください。

Windows 11 を例にとると、[Grafana のウェブサイト](https://grafana.com/grafana/download?platform=windows)からインストールパッケージをダウンロードし、ダブルクリックしてインストールを開始します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/16.png" /></div>

**ステップ 2.** Grafana にサインイン

ウェブブラウザを開き、`http://localhost:3000/` にアクセスします。Grafana がリッスンするデフォルトの HTTP ポートは `3000` ですが、異なるポートを設定している場合はそのポートを使用してください。

サインインページで、ユーザー名とパスワードに `admin` を入力します。

**Sign in** をクリックします。成功すると、パスワード変更のプロンプトが表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/17.png" /></div>

**ステップ 3.** データソースの追加

メインページで左下の歯車アイコンをクリックし、**Add data source** を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/18.png" /></div>

利用可能なデータソースのリストから InfluxDB を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/7.png" /></div>

**ステップ 4.** InfluxDB データソースの設定

データソース設定ページで、InfluxDB データソースの名前を入力します。

次に、以下を選択または入力します：

- **Query Language**: Flux
- HTTP の設定：
  - **URL**: `http://localhost:8086/`
- Auth の設定：
  - **Basic auth** を無効にします。
- InfluxDB Details の設定：
  - **Organization**: 組織 ID。組織 ID は InfluxDB の **About** ページで確認できます。
  - **Token**: InfluxDB API トークン。
  - **Default Bucket**: Flux クエリで使用するデフォルトバケット。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/14.png" /></div>

**Save & Test** をクリックします。Grafana は InfluxDB 2.4 データソースへの接続を試み、テスト結果を返します。すべてが正常に動作している場合、以下の出力メッセージが表示されます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/15.png" /></div>

## データのクエリと可視化

InfluxDB の接続が設定されたら、Grafana と Flux を使用して、InfluxDB インスタンスに保存されている時系列データをクエリし、可視化することができます。

Grafana の使用方法について詳しくは、[Grafana ドキュメント](https://grafana.com/docs/)をご覧ください。Flux を初めて学ぶ場合は、[Flux の始め方](https://docs.influxdata.com/flux/v0.x/get-started/)をご参照ください。

また、皆様のデータダッシュボードのご提出を歓迎しております。皆様の作品を楽しみにしています！

## 技術サポートと製品に関するディスカッション

弊社製品をお選びいただき、ありがとうございます！製品をご利用いただく際の体験がスムーズになるよう、さまざまなサポートをご提供しております。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>