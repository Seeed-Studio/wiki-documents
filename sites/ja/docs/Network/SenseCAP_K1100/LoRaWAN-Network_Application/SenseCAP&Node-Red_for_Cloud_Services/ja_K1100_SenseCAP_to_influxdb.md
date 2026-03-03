---
description: SenseCAP & Node-RED を使用して InfluxDB に接続
title: SenseCAP & Node-RED を使用して InfluxDB に接続
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/K1100_SenseCAP_to_influxdb
last_update:
  date: 05/15/2025
  author: shuxu hu
---


# Node-RED を介して SenseCAP を InfluxDB に接続する

**SenseCAP K1100 - センサープロトタイプキット** は、Seeed Studio が LoRa® 通信技術とエッジインテリジェンス製品のエッセンスを凝縮し、LoRa® および IoT アプリケーションを最も簡単に展開し、習得できるように設計されています。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/banner.png" /></div>

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products)

## 産業用センサーへのアップグレード可能

SenseCAP [S2110 コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) と [S2100 データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) を使用することで、Grove を簡単に LoRaWAN® センサーに変えることができます。Seeed はプロトタイピングを支援するだけでなく、SenseCAP シリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) を使用してプロジェクトを拡張する可能性も提供します。

IP66 ハウジング、Bluetooth 設定、グローバル LoRaWAN® ネットワークとの互換性、内蔵 19 Ah バッテリー、そしてアプリからの強力なサポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) は産業用途に最適な選択肢となります。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして 8-in-1 気象ステーション用のセンサーが含まれています。次の成功する産業プロジェクトには、最新の SenseCAP S210x をお試しください。

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

## InfluxDBについて

**InfluxDB**はオープンソースの時系列データベースであり、高性能な読み取り、高性能な書き込み、効率的なストレージ、大量の時系列データのリアルタイム分析に焦点を当てています。HTTPやUDPなどのネイティブプロトコルに加え、CollectD、Graphite、OpenTSDB、Prometheusなどのコンポーネントの通信プロトコルとも互換性があります。DevOpsモニタリング、IoTモニタリング、リアルタイム分析などのシナリオで広く使用されています。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/1.png" /></div>

この章の内容では、前述のNode-REDを引き続き使用し、Node-REDを通じてK1100キットをInfluxDBで管理する方法を説明します。

Node-REDをインストールしていない、またはNode-REDが何であるか分からない場合は、[Node-RED & SenseCAP チュートリアル](https://wiki.seeedstudio.com/ja/K1100_sensecap_node-red/)を参照してください。

## MQTTノードの作成

**ステップ1.** Node-REDを起動する

ターミナルでコマンド`node-red`を入力してNode-REDを起動し、ブラウザを開いてアドレスバーに`http://localhost:1880`を入力してNode-REDのエディタにアクセスします。

**ステップ2.** MQTTノードを作成する

**Network -> mqtt in**ノードを使用し、[前回のチュートリアル](https://wiki.seeedstudio.com/ja/K1100_sensecap_node-red/#mqtt-node)で説明したSenseCAP APIの形式に従ってMQTTを設定します。

- サーバー: openstream.api.sensecap.seeed.cc
- ポート: 1883
- プロトコル: MQTT V3.1.1
- クライアントID: フォーマットは`org-<Organization ID>-<Random ID>`
  - `<Organization ID>` あなたの組織ID。これは[SenseCAP APIを取得する](/ja/K1100_sensecap_node-red#get-the-sensecap-api)で取得済みです。
  - `<Random ID>` 自分でランダムに生成した数字または小文字の英字を使用します。

- トピック形式: `/device_sensor_data/<OrgID>/<DeviceEUI>/<Channel>/<Reserved>/<MeasurementID>`

<table align="center">
  <tbody><tr>
      <td align="center">OrgID</td>
      <td align="center">あなたの組織ID。これはSenseCAP APIを取得する際に取得済みです。</td>
    </tr>
    <tr>
      <td align="center">DevEUI</td>
      <td align="center">センサー機器のユニークな識別子。この情報はGrove - Wio E5の背面のステッカーやSenseCAPコンソールデバイスで確認できます。</td>
    </tr>
    <tr>
      <td align="center">Channel</td>
      <td align="center">センサーが接続されているデバイス上の物理インターフェース。K1100キットの場合、ここでのデフォルト値は1です。</td>
    </tr>
    <tr>
      <td align="center">Reserved</td>
      <td align="center">予約フィールド。</td>
    </tr>
    <tr>
      <td align="center">MeasurementID</td>
      <td align="center">測定値ID。このIDは<a href="https://sensecap-docs.seeed.cc/sensor_types_list.html" target="_blank">SenseCAP ドキュメント</a>のMeasurement IDsセクションで確認できます。</td>
    </tr>
  </tbody></table>

**ステップ3.** MQTTノードを検証する

設定が完了したら、右上の**Deploy**ボタンをクリックして設定が成功したか確認してください。正しく入力されていれば、**Connected**という単語が表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/1.png" /></div>

## InfluxDB の設定

**ステップ 1.** InfluxDB に登録またはログイン

すでに InfluxDB に登録済みの場合は、[InfluxDB のウェブサイト](https://www.influxdata.com/)でログインしてください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/2.png" /></div>

まだ InfluxDB を使用していない、または登録していない場合は、[こちら](https://cloud2.influxdata.com/signup)から登録を完了し、ログインしてください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/3.png" /></div>

:::tip
登録時にプロバイダーを選択するページが表示される場合があります。お好みに応じて選択するか、任意のものを選んでください。
:::
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/4.png" /></div>

**ステップ 2.** API トークンを取得

以下のように、**Bucket** をクリックしてください。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_influxdb/5.png" /></div>

次に、CREATE BUCKET をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/6.png" /></div>

新しいポップアップウィンドウで名前を入力し、無料のデータ保持期間（30 日間）を選択します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_influxdb/7.png" /></div>

次に、以下のように **API Tokens** をクリックしてください。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/k1100_influxdb/8.png" /></div>

その後、**Custom API Token** を作成するオプションを選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/9.png" /></div>

作成した Bucket に対して **read** と **write** の権限を付与し、下部の Create ボタンをクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/10.png" /></div>

作成が完了したら、API トークンをクリップボードにコピーして保存してください。このトークンは後のステップで使用しますので、安全な場所に保存してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/11.png" /></div>

:::note
ここでウィンドウを閉じると、この API トークンを再取得することはできません。
:::

## Node-RED の設定

**ステップ 1.** InfluxDB パレットをダウンロード

右上のメニューバーをクリックし、設定を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/13.png" /></div>

**Paletts -> Install** で **node-red-contrib-influxdb** を検索してインストールします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/12.png" /></div>

左側のストレージバーから **influx.batch** を追加し、ダブルクリックして設定ページに入り、**influx.batch** ノードを編集するために編集ボタンをクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/13.png" /></div>

**ステップ 2.** **influx.batch** ノードを編集:

- **Version**: 2.0
- **URL**: **Settings** -> **Orgnization Profile** から取得します。
    <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/k1100_influxdb/14.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/15.png" /></div>

- **TOKEN**: **API トークンを取得**セクションで生成したものを使用します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/16.png" /></div>

設定が完了したら、右上の **Add** ボタンをクリックして influx.batch のプロパティページに戻ります。この時点で、Orgnization（デフォルトでは InfluxDB に登録したメールアドレス）と Bucket 名を入力してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/20.png" /></div>

**ステップ 3.** 関数ノードを設定

InfluxDB にデータを送信するには特定のデータ形式に従う必要があるため、データ形式を処理するための関数ノードを追加する必要があります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/18.png" /></div>

左側の関数バーから関数ノードをドラッグし、ダブルクリックして編集ページに入り、コードを On Message にコピーします。

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

## InfluxDB の視覚的ダッシュボードを設定する

センサーデータをより視覚的に表示するために、折れ線グラフを描画することができます。

InfluxDB Cloud に戻り、**CREATE DASHBOARD** をクリックして **ADD CELL** を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/19.png" /></div>

SenseCAP が InfluxDB にデータメッセージを送信し始めている場合、このページでセンサーのラベルを確認することができます。表示したいデータの内容については、チェックボックスをオンにするだけです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/22.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/23.png" /></div>

## トラブルシューティング

> Q1: Node-RED でパレットが見つからないのはなぜですか？

A: 設定でパレットが見つからない場合、Node-RED を起動した際にターミナルでエラーメッセージを確認してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/11.png" /></div>

最も一般的な原因は、npm のバージョンが古すぎてパレットエディタを起動できないことです。

上記の状況に該当する場合は、**管理者権限で Powershell を実行**し、以下のコマンドを入力して npm をアップグレードしてください。

```sh
npm install -g npm
```

その後、Node-RED を再起動してください。

## 技術サポートと製品に関するディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>