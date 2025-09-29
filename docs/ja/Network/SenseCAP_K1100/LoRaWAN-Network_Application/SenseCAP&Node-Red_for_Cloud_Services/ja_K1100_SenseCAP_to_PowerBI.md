---
description: SenseCAP & Node-RED を使用して Power BI に接続
title: SenseCAP & Node-RED を使用して Power BI に接続
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/K1100_SenseCAP_to_PowerBI
last_update:
  date: 05/15/2025
  author: shuxu hu
---


# Node-RED を介して SenseCAP を Power BI に接続

**SenseCAP K1100 - センサープロトタイプキット**は、Seeed Studio が LoRa® 通信技術とエッジインテリジェンス製品のエッセンスを凝縮し、LoRa® および IoT アプリケーションの最も簡単な展開と習得を可能にするものです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/banner.png" /></div>

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products)

## 産業用センサーへのアップグレード可能

SenseCAP [S2110 コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) と [S2100 データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) を使用することで、Grove を簡単に LoRaWAN® センサーに変えることができます。Seeed はプロトタイピングを支援するだけでなく、SenseCAP シリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

IP66 ハウジング、Bluetooth 設定、グローバル LoRaWAN® ネットワークとの互換性、内蔵 19 Ah バッテリー、そして強力な APP サポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) は産業用途に最適な選択肢となります。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして 8-in-1 気象ステーション用センサーが含まれています。次の成功する産業プロジェクトには最新の SenseCAP S210x をお試しください。

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

## Power BI

Power BI と Azure Synapse Analytics や Azure Data Lake Storage を含む Azure 分析サービスを組み合わせることで、データ資産全体を接続して分析できます。ペタバイト規模のデータを分析し、高度な AI 機能を活用し、追加のデータ保護を適用し、組織全体でインサイトをより簡単に共有することが可能です。

このチュートリアルでは、Node-RED を使用して **SenseCAP** のセンサーデータを **Power BI** にインポートし、より詳細なデータ処理を行う方法を案内します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_powerbi/powerbi_logo.png" /></div>

## 事前準備

このチュートリアルを完了するには、以下が必要です：

- Node-RED をインストールしていない、または Node-RED が何か分からない場合は、[Node-RED & SenseCAP チュートリアル](https://wiki.seeedstudio.com/ja/K1100_sensecap_node-red/)を参照してください。
- Power BI アカウント。Power BI アカウントをお持ちでない場合は、[無料の Power BI Pro トライアル](https://app.powerbi.com/signupredirect?pbi_source=web)にサインアップしてください。
- 以下のいずれかの Wiki を参考にして、データを SenseCAP にアップロード済みであること。
  - [LoRa® を介してセンサーデータを SenseCAP に送信する](https://wiki.seeedstudio.com/ja/K1100-quickstart/#send-sensor-data-to-sensecap-via-lora)

<!--## SenseCAP ノードの作成

**ステップ 1.** Node-RED を起動する

ターミナルで `node-red` コマンドを入力して Node-RED を起動し、ブラウザを開いてアドレスバーに **http://localhost:1880** を入力して Node-RED のエディタにアクセスします。

**ステップ 2.** SenseCAP ノードをインストールする

右上のメニューバーをクリックして「設定」を選択します。

<div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/6.png"/></div>

**Paletts -> Install** で **node-red-sensecap-paas** を検索してインストールします。

<div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/1.png"/></div>

**ステップ 3.** SenseCAP ノードを設定する

左側のストレージバーから **sensecap.OpenStream** を追加し、ダブルクリックして設定ページを開きます。その後、編集ボタンをクリックして **sensecap.OpenStream** ノードを編集します。

<div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/2.png"/></div>

アカウントを編集してください。

<div align=center><img width = 600 src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/7.png"/></div>

新しいページで以下のフィールドを入力してください。

- 名前: このアカウントの名前を設定します。
- 組織 ID: **組織情報** セクションから組織 ID をコピーします。

<div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/8.png"/></div>

- API キー: ダッシュボードの左側で **セキュリティ** -> **API キーへのアクセス** をクリックします。その後、アクセスキーを作成します。

<div align=center><img width = 700 src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/9.png"/></div>

<div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/10.png"/></div>

その後、**更新** または **保存** ボタンをクリックします。

ノード設定画面で以下のフィールドを入力してください。
- 名前: ノードの名前を設定します。
- EUI: デバイスの EUI を入力してください。これは SenseCAP コンソールで確認できます。
- 測定 ID: センサー番号。センサー番号に関する情報は [SenseCAP ドキュメントセンター](https://sensecap-docs.seeed.cc/sensor_types_list.html) で確認できます。
- 出力形式: **Power BI** を選択します。

<div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/5.png"/></div>

!!!注意
    測定 ID を入力することをお勧めします。これにより、Power BI に送信されるたびにセンサー値が 1 つになります。これを空白のままにすると、複数のセンサー値が同時に送信され、Power BI でデータが乱雑になる可能性があります。
    複数のセンサー値を同時に分析する必要がある場合は、複数の SenseCAP ノードを使用できます。-->

## MQTT ノードの作成

**ステップ 1.** Node-RED を起動する

ターミナルで `node-red` コマンドを入力して Node-RED を起動し、ブラウザを開いてアドレスバーに `http://localhost:1880` を入力して Node-RED のエディタにアクセスします。

**ステップ 2.** MQTT ノードを作成する

**Network -> mqtt in** ノードを使用し、[前回のチュートリアル](https://wiki.seeedstudio.com/ja/K1100_sensecap_node-red/#mqtt-node)で説明した SenseCAP API の形式に従って mqtt を設定します。

- サーバー: openstream.api.sensecap.seeed.cc
- ポート: 1883
- プロトコル: MQTT V3.1.1
- クライアント ID: フォーマットは `org-<Organization ID>-<Random ID>`
  - `<Organization ID>`: 組織 ID。これは [SenseCAP API を取得する](/ja/K1100_sensecap_node-red#get-the-sensecap-api) で取得済みです。
  - `<Random ID>`: ランダムに生成された数字または小文字の英字を使用します。

- トピック形式: `/device_sensor_data/<OrgID>/<DeviceEUI>/<Channel>/<Reserved>/<MeasurementID>`

<table align="center">
  <tbody>
    <tr>
      <td align="center">OrgID</td>
      <td align="center">組織 ID。これは SenseCAP API を取得する際に取得済みです。</td>
    </tr>
    <tr>
      <td align="center">DevEUI</td>
      <td align="center">センサー機器の一意の識別子。この情報は Grove - Wio E5 の背面のステッカーや SenseCAP コンソールデバイスで確認できます。</td>
    </tr>
    <tr>
      <td align="center">Channel</td>
      <td align="center">センサーが接続されているデバイスの物理インターフェース。K1100 キットの場合、デフォルト値は 1 です。</td>
    </tr>
    <tr>
      <td align="center">Reserved</td>
      <td align="center">予約フィールド。</td>
    </tr>
    <tr>
      <td align="center">MeasurementID</td>
      <td align="center">測定値 ID。この ID は <a href="https://sensecap-docs.seeed.cc/sensor_types_list.html" target="_blank">SenseCAP ドキュメント</a> の Measurement IDs セクションで確認できます。</td>
    </tr>
  </tbody>
</table>

:::note
mqtt in ノードは単一のセンサーの値のみを送信することを推奨します。複数のセンサーの値を同時に送信するとデータの混乱を引き起こす可能性があります。
:::
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/20.png" /></div>

**ステップ 3.** MQTT ノードを検証する

設定が完了したら、右上の **Deploy** ボタンをクリックして設定が成功したか確認します。正しく入力されていれば、**Connected** という単語が表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/1.png" /></div>

## 関数ノードの設定

Power BI にデータを報告するには特定のデータ形式に従う必要があるため、データ形式を処理するための関数ノードを追加する必要があります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/18.png" /></div>

左側の関数バーから関数ノードをドラッグし、ダブルクリックして編集ページに入り、次にコードを On Message にコピーします。

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
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4103) {
            body.soilmoisture = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4150) {
            body.accelX = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4151) {
            body.accelY = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4152) {
            body.accelZ = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4192) {
            body.soundintensity = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4193) {
            body.lightIntensity = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4195) {
            body.tvoc = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4097) {
            body.airtemperature = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4098) {
            body.airhumidity = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4175) {
            body.AIdetection_1 = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4176) {
            body.AIdetection_2 = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4177) {
            body.AIdetection_3 = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4178) {
            body.AIdetection_4 = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4179) {
            body.AIdetection_5 = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4180) {
            body.AIdetection_6 = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4181) {
            body.AIdetection_7 = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4182) {
            body.AIdetection_8 = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4183) {
            body.AIdetection_9 = value
            body.timestamp = msg.payload.timestamp
        } else if (measurementId == 4184) {
            body.AIdetection_10 = value
            body.timestamp = msg.payload.timestamp
        }
        msg.payload = body;
    }
    return msg;
}
```

:::tip
    上記のコードはすべてのセンサーに共通しており、すべてを関数ノードに貼り付けるか、使用しているセンサーの一部を選択して使用することができます。
    プログラム内のセンサー名は、後で Power BI で設定するデータストリーム名と一致する必要があることに注意してください。例えば、上記のプログラムでは光センサーの値の名前は **lightIntensity** です。
:::

## Power BI データセットの作成

**ステップ 1.** [Power BI アカウント](https://app.powerbi.com/)にサインインします。

**ステップ 2.** ワークスペースを作成します。

**Workspaces** を選択し、次に **Create a workspace** を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/23.png" /></div>

ワークスペース作成ページで、ワークスペース名として **In-store analytics - checkout** を入力します。**Save** を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/24.png" /></div>

**ステップ 3.** ストリーミングデータセットを作成します。

ワークスペースページで、**+ New** > **Streaming dataset** を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/25.png" /></div>

新しいストリーミングデータセットページで、API を選択し、次に **Next** を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/26.png" /></div>

データセット名として **Light-Sensor** を入力します。

以下の表に基づいてストリームからの Light 値を入力します：

| 値の名前                | 値のタイプ                   |
|-------------------------|------------------------------|
| Timestamp               | DataTime                     |
| lightIntensity          | Number                       |

:::tip
値の名前は Node RED の関数プログラムの名前と同じである必要があります。
:::
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/21.png" /></div>

これでストリーミングデータセットが作成されました。ここで取得した **Push URL** をメモしてください。次のステップで使用します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/22.png" /></div>

## HTTP リクエストノードの設定

左側のストレージバーから **http request** を追加し、ダブルクリックして設定ページに入り、**http request** ノードを編集するために編集ボタンをクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/16.png" /></div>

前のセクションで取得した URL を HTTP リクエストページの URL にコピーしてください。

メソッドを **POST** に変更し、保存します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/17.png" /></div>

## デプロイとデータの観察

**ステップ 1.** デプロイ

すべてのノードを接続し、**Deploy** ボタンをクリックします。すべてが正しく設定されている場合、mqtt in ノードが接続されていることを確認できます。

データのログ情報を確認したい場合は、関数ノードの後にデバッグノードを追加できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/18.png" /></div>

Wio Terminal が電源を入れて動作を開始し、データを SenseCAP PaaS サーバーに送信し始めると、Node-RED のデバッグログでデータを確認できます。

**ステップ 2.** Power BI ダッシュボードの設定

**Workspaces** > **In-store analytics - checkout** を選択します。

**+ New** > **Dashboard** を選択します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_powerbi/50.png" /></div>

ダッシュボード名として **Store analytics** を入力し、**Create** を選択します。

### 折れ線グラフの追加

Wio Terminal の内蔵センサーからの Light 値を表示する折れ線グラフタイルを追加します。以下の表の情報を使用してタイルを作成します。各タイルを追加するには、**Edit** > **Add a tile** を選択することから始めます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_powerbi/51.png" /></div>

**Custom Streaming Data** を選択し、次に **Next** を選択します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/k1100_powerbi/52.png" /></div>

横軸にタイムスタンプを表示し、縦軸にデータ値を表示するように設定します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/15.png" /></div>

データストリームが転送を開始すると、ダッシュボードに折れ線グラフとして表示されます。

必要に応じて、さらにグラフィックやデータ分析を追加することもできます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_to_powerbi/19.png" /></div>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。お客様のご希望やニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 声明

- LoRa® マークは、Semtech Corporation またはその子会社の商標です。
- LoRaWAN® は、LoRa Alliance® からのライセンスに基づいて使用されるマークです。