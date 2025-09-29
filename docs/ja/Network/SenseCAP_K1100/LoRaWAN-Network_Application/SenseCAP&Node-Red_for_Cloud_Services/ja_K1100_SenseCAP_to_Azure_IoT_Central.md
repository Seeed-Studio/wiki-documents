---
description: SenseCAP & Node-RED を使用して Microsoft Azure IoT Central に接続
title: SenseCAP & Node-RED を使用して Microsoft Azure IoT Central に接続
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/K1100_SenseCAP_to_Azure_IoT_Central
last_update:
  date: 05/15/2025
  author: shuxu hu
---


# Node-RED を介して SenseCAP を Azure IoT Central に接続

**SenseCAP K1100 - センサープロトタイプキット** は、Seeed Studio が LoRa® 通信技術とエッジインテリジェンス製品のエッセンスを凝縮し、LoRa® および IoT アプリケーションを最も簡単に展開し、習得できるように設計されています。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/banner.png" /></div>

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products)

## 産業用センサーへのアップグレードが可能

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

## Microsoft Azure IoT

[Microsoft Azure IoT](https://azure.microsoft.com/en-us/overview/iot) は、Microsoft が管理するクラウドサービスのコレクションであり、数十億の IoT 資産を接続、監視、制御します。これには、デバイスや機器のセキュリティおよびオペレーティングシステム、さらに IoT アプリケーションの構築、展開、管理を支援するデータと分析が含まれています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/Azure_IoT.png" alt="pir" width={1200} height="auto" /></p>

## Microsoft Azure IoT Central

[Microsoft Azure IoT Central](https://azure.microsoft.com/en-us/services/iot-central) は、完全に管理されたグローバル IoT SaaS (ソフトウェアとしてのサービス) ソリューションであり、大規模に IoT 資産を簡単に接続、監視、管理できるようにします。非常に安全で、ビジネスの成長に合わせてスケールし、投資の再利用性を確保し、既存のビジネスアプリと統合します。また、ビジネスアプリケーションと IoT データの間のギャップを埋めます。さらに、デバイスの再構成と更新を行うための集中管理を提供します。

この章の内容では、前述の Node-RED を引き続き使用し、Node-RED を利用して Microsoft Azure IoT Central で K1100 キットの管理を容易にします。

Node-RED をインストールしていない、または Node-RED が何であるか分からない場合は、[Node-RED & SenseCAP チュートリアル](https://wiki.seeedstudio.com/ja/K1100_sensecap_node-red/) を参照してください。

## SenseCraft のインストール

**SenseCraft** は、ノーコードでスマートセンサーを構築するためのオープンソースソフトウェアプラットフォームです。リアルワールドを感知し、データを処理し、クラウドにデータを送信するための完全な即時利用可能なソリューションを提供します。これにより、プログラミング経験が全くなくても、最も簡単かつ迅速に利用できます。現在、Wio Terminal に対応しています。

SenseCraft を使用することで、K1100 キットのセンサー値をプログラミングなしで SenseCAP プラットフォームに直接転送できます。これはもちろん、**LoRaWAN®** を介して実現されます。

:::note
Azure IoT Central に **WiFi (MQTT)** を介してアクセスしたい場合は、この [Wiki](https://wiki.seeedstudio.com/ja/Connect-Wio-Terminal-to-Azure-IoT-Central/) を参照してください。
:::

**ステップ 1.** ファームウェアをコンピュータにダウンロードする

**Latest release** の下で、**SenseCraft-vx.x.uf2** をクリックして .uf2 ファイルをダウンロードします。

<div>
  <p style={{}}><a href="https://github.com/Seeed-Studio/SenseCraft/releases" target="_blank" /></p><div align="center"><a href="https://github.com/Seeed-Studio/SenseCraft/releases" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

**ステップ 2.** ファームウェアを Wio Terminal にアップロードする

Wio Terminal を PC に接続し、電源を入れます。**Bootloader モード**に入るには、電源スイッチを「ON」位置からさらに下にスライドし、リリースして再度スライドし、再びリリースします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" alt="pir" width={500} height="auto" /></p>

:::note
Wio Terminal が Bootloader モードに入ると、青色 LED が点滅とは異なる方法で呼吸するようになります。
:::

PC のファイルエクスプローラーを開くと、新しい外部ドライブが表示されます。このドライブは **Arduino** と名付けられています。先ほどダウンロードした **.uf2 ファイル** をこの **Arduino ドライブ** にドラッグします。

これで SenseCraft を Wio Terminal に正常にアップロードしました。

## MQTTノードの作成

**ステップ 1.** Node-REDを起動する

ターミナルでコマンド `node-red` を入力してNode-REDを起動し、ブラウザを開いてアドレスバーに **&lt;http://localhost:1880&gt;** を入力してNode-REDのエディタにアクセスします。

**ステップ 2.** MQTTノードを作成する

**Network -> mqtt in** ノードを使用し、前回の[チュートリアル](https://wiki.seeedstudio.com/ja/K1100_sensecap_node-red/#mqtt-node)で説明したように、SenseCAP APIの形式でmqttを設定します。

- サーバー: openstream.api.sensecap.seeed.cc
- ポート: 1883
- プロトコル: MQTT V3.1.1
- クライアントID: フォーマットは `org-<Organization ID>-<Random ID>`
  - `<Organization ID>`: 組織ID。これは[SenseCAP APIを取得する](/ja/K1100_sensecap_node-red#get-the-sensecap-api)で取得済みです。
  - `<Random ID>`: ランダムに生成した数字または小文字の英字を使用します。

- トピックフォーマット: `/device_sensor_data/<OrgID>/<DeviceEUI>/<Channel>/<Reserved>/<MeasurementID>`

<table align="center">
  <tbody>
    <tr>
      <td align="center">OrgID</td>
      <td align="center">組織ID。これはSenseCAP APIを取得する際に取得済みです。</td>
    </tr>
    <tr>
      <td align="center">DevEUI</td>
      <td align="center">センサー機器の一意の識別子。この情報はGrove - Wio E5の背面のステッカーやSenseCAPコンソールデバイスで確認できます。</td>
    </tr>
    <tr>
      <td align="center">Channel</td>
      <td align="center">センサーが接続されているデバイスの物理インターフェース。K1100キットの場合、デフォルト値は1です。</td>
    </tr>
    <tr>
      <td align="center">Reserved</td>
      <td align="center">予約フィールド。</td>
    </tr>
    <tr>
      <td align="center">MeasurementID</td>
      <td align="center">測定値ID。このIDは<a href="https://sensecap-docs.seeed.cc/sensor_types_list.html" target="_blank">SenseCAPドキュメント</a>のMeasurement IDsセクションで確認できます。</td>
    </tr>
  </tbody>
</table>

**ステップ 3.** MQTTノードを検証する

設定が完了したら、右上の**Deploy**ボタンをクリックして設定が成功したか確認してください。正しく入力されていれば、**Connected**という単語が表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/1.png" /></div>

## Microsoft Azure IoT Centralの設定

**ステップ 1.** Azure IoT Centralにログインする

公式の[Azure IoT Central](https://apps.azureiotcentral.com/home)ウェブサイトにアクセスし、左側のナビゲーションメニューから**Build**をクリックし、**Custom apps**を選択します。

まだAzure IoT Centralにログインしていない場合、この時点で登録/ログインを完了する必要があります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_azure_central/1.png" /></div>

**ステップ 2.** **Application name**を入力し、**Pricing plan**で**Standard 0**を選択します。アプリケーション名を入力すると、アプリケーションURLが自動的に作成されます。この例では、最小限のコストでこのタスクを達成します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_azure_central/2.png" /></div>

:::note
Azure IoT Centralの新規ユーザーの場合、**Free**を選択することをお勧めします。これにより料金が発生しません。
:::
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_azure_central/9.png" /></div>

**ステップ 3.** **Create**をクリックして新しいアプリケーションを作成します。これでAzure IoT Centralのセットアップが完了しました！

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_azure_central/3.png" /></div>

**ステップ 4.** デバイステンプレートを作成する

左側のメニューバーで**Device templates**をクリックして新しいデバイステンプレートを作成してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/2.png" /></div>

テンプレートとして**Wio Terminal**を選択してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/3.png" /></div>

その後、**Create**をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/4.png" /></div>

これで、準備済みのテンプレートが作成されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/5.png" /></div>

**ステップ 5.** デバイスを作成する

左側のメニューバーで**Devices -> Seeed Wio Terminal**をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/6.png" /></div>

**New**をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/7.png" /></div>

**Create**ボタンをクリックしてデバイスの作成を完了します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/8.png" /></div>

デバイスを作成すると、**Device**の下に作成したデバイスが表示されます。デバイスをクリックして、左上の**Connect**ボタンをクリックしてください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/9.png" /></div>

ここで以下の情報が必要です。

```
ID scope
Device ID
Primary key
```

この情報をメモしておいてください。次のステップで使用します。

## Node-RED の設定

**ステップ 1.** Azure IoT パレットをダウンロード

右上のメニューバーをクリックし、[Settings] を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/13.png" /></div>

**[Paletts -> Install]** で **node-red-contrib-azure-iot-central** を検索してインストールします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/12.png" /></div>

**ステップ 2.** Azure IoT Central ノードを設定

左側の機能バーから Azure IoT Central ノードをドラッグして配置し、ダブルクリックして設定ページを開きます。その後、編集ボタンをクリックして Azure IoT Central ノードを編集します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/14.png" /></div>

設定は以下のように入力する必要があります：

- Transport: MQTT
- Authentication: SAS
- Scope ID
- Device ID
- Primary Key

最後の 3 つは **Microsoft Azure IoT Central の設定** で取得したものと同じです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/15.png" /></div>

**ステップ 3.** Function ノードを設定

Azure IoT Central にデータを送信するには、特定のデータ形式に従う必要があります。そのため、データ形式を処理するための Function ノードを追加する必要があります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/16.png" /></div>

左側の機能バーから Function ノードをドラッグして配置し、ダブルクリックして編集ページを開きます。その後、以下のコードを On Message にコピーします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/17.png" /></div>

```javascript
{
    var payload = msg.payload;
    var topic = msg.topic;
    var strs = topic.split("/");
    var length = strs.length
    if(length>=2){
        var measurementId = strs[length-1]
        var body = {}
        var value = payload.value
        if(measurementId==4100){
            body.co2 = value
        }else if(measurementId==4103){
            body.soilmoisture= value
        }else if(measurementId==4150){
            body.accelX= value
        }else if(measurementId==4151){
            body.accelY = value
        }else if(measurementId==4152){
            body.accelZ = value
        }else if(measurementId==4192){
            body.soundintensity = value
        }else if(measurementId==4193){
            body.lightIntensity = value
        }else if(measurementId==4195){
            body.tvoc = value
        }else if(measurementId==4097){
            body.airtemperature = value
        }else if(measurementId==4098){
            body.airhumidity = value
        }else if(measurementId==4175){
            body.AIdetection_1 = value
        }else if(measurementId==4176){
            body.AIdetection_2 = value
        }else if(measurementId==4177){
            body.AIdetection_3 = value
        }else if(measurementId==4178){
            body.AIdetection_4 = value
        }else if(measurementId==4179){
            body.AIdetection_5 = value
        }else if(measurementId==4180){
            body.AIdetection_6 = value
        }else if(measurementId==4181){
            body.AIdetection_7 = value
        }else if(measurementId==4182){
            body.AIdetection_8 = value
        }else if(measurementId==4183){
            body.AIdetection_9 = value
        }else if(measurementId==4184){
            body.AIdetection_10 = value
        }
        msg.payload = body;
    }
    return msg;
}
```

その後、すべてのノードを接続し、**[Deploy]** ボタンをクリックします。すべてが正しく設定されていれば、mqtt in ノードが接続されていることを示します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/18.png" /></div>

データのログ情報を確認したい場合は、Function ノードの後に Debug ノードを追加することができます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/19.png" /></div>

Wio Terminal が起動して動作を開始し、SenseCAP PaaS サーバーにデータを送信し始めると、Azure IoT Central 上でデータを確認することができます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/21.png" /></div>

## データ表示

しかし、センサーのタイプを設定していないため、**Raw data** 列に表示されるデータは **Unmodeled data** に配置されています。そのため、上記のコードに従ってデータを解析する必要があります。

**template** に表示されるテンプレートスタイルを変更する必要があります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/26.png" /></div>

変更を加えたら、**Save** をクリックし、その後 **Publish** をクリックしてください。**Device template** のすべての変更は、この手順に従って保存および公開される必要があり、それによって初めて有効になります。

:::tip
ここでの **Display name** は、上記で提供された JavaScript コードの名前に従って入力してください。
:::
もちろん、データダッシュボードページを充実させたい場合は、Overview に表示されるように設定することもできます。

左側のナビゲーションメニューで **Overview** をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_azure_central/16.png" /></div>

**select a telemetry** ドロップダウンメニューを展開し、可視化したいテレメトリを選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/70.png" /></div>

**Add tile** をクリックすると、Azure IoT Central の Dashboard にタイルが追加されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/23.png" /></div>

**注意:** タイルのサイズ変更や表示形式の変更は、好みに応じて行うことができます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/24.png" /></div>

次に、センサーデータ監視ダッシュボードをお好みに合わせてカスタマイズしてください！

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/25.png" /></div>

## トラブルシューティング

> Q1: Node-RED でパレットが見つからないのはなぜですか？

A: 設定でパレットが見つからない場合、Node-RED を起動した際にターミナルにエラーメッセージが表示されていないか確認してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/11.png" /></div>

最も一般的なケースは、npm のバージョンが古すぎてパレットエディタを起動できない場合です。

上記のような状況の場合、**管理者として Powershell を実行** し、以下のコマンドを入力して npm をアップグレードしてください。

```sh
npm install -g npm
```

その後、Node-RED を再起動してください。

## 技術サポート & 製品ディスカッション

弊社の製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>