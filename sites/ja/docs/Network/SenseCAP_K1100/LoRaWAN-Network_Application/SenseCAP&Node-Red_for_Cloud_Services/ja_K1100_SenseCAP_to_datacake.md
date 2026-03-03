---
description: SenseCAP & Node-RED を使用して Datacake に接続する方法
title: SenseCAP & Node-RED を使用して Datacake に接続する方法
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/K1100_SenseCAP_to_datacake
last_update:
  date: 05/15/2025
  author: shuxu hu
---


# Node-RED を介して SenseCAP を Datacake に接続する

**SenseCAP K1100 - センサープロトタイプキット**は、Seeed Studio が LoRa® 通信技術とエッジインテリジェンス製品のエッセンスを凝縮し、LoRa® および IoT アプリケーションを最も簡単に展開および習得できるように設計されたものです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/banner.png" /></div>

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products)

## 産業用センサーへのアップグレード可能

SenseCAP [S2110 コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) と [S2100 データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) を使用することで、Grove を簡単に LoRaWAN® センサーに変えることができます。Seeed はプロトタイピングを支援するだけでなく、SenseCAP シリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

IP66 ハウジング、Bluetooth 設定、グローバル LoRaWAN® ネットワークとの互換性、内蔵 19 Ah バッテリー、そして強力な APP サポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) は産業用途に最適な選択肢となります。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして 8-in-1 気象ステーション用のセンサーが含まれています。次の成功する産業プロジェクトには最新の SenseCAP S210x を試してみてください。

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

## Datacake

Datacakeは、プログラミングスキルを必要とせず、最小限の時間でカスタムIoTアプリケーションを作成できる多目的なローコードIoTプラットフォームです。

この章の内容では、前述のNode-REDを引き続き使用し、Node-REDを通じてK1100キットをDatacakeで管理する方法を説明します。

もしNode-REDをインストールしていない、またはNode-REDが何かわからない場合は、[Node-RED & SenseCAP チュートリアル](https://wiki.seeedstudio.com/ja/K1100_sensecap_node-red/)を参照してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/1.png" alt="pir" width={600} height="auto" /></p>

## MQTTノードの作成

**ステップ1.** Node-REDを起動する

ターミナルで`node-red`コマンドを入力してNode-REDを起動し、ブラウザを開いてアドレスバーに`http://localhost:1880`を入力してNode-REDのエディタにアクセスします。

**ステップ2.** MQTTノードを作成する

**Network -> mqtt in**ノードを使用し、[前のチュートリアル](https://wiki.seeedstudio.com/ja/K1100_sensecap_node-red/#mqtt-node)で説明したSenseCAP APIの形式に従ってmqttを設定します。

- サーバー: openstream.api.sensecap.seeed.cc
- ポート: 1883
- プロトコル: MQTT V3.1.1
- クライアントID: フォーマットは`org-<Organization ID>-<Random ID>`
  - `<Organization ID>` あなたの組織ID。これは[SenseCAP APIを取得する](/ja/K1100_sensecap_node-red#get-the-sensecap-api)で取得済みです。
  - `<Random ID>` 自分でランダムに生成した数字または小文字の英字を使用します。

- トピック形式: `/device_sensor_data/<OrgID>/<DeviceEUI>/<Channel>/<Reserved>/<MeasurementID>`

<table align="center">
  <tbody>
    <tr>
      <td align="center">OrgID</td>
      <td align="center">あなたの組織ID。これはSenseCAP APIを取得する際に取得済みです。</td>
    </tr>
    <tr>
      <td align="center">DevEUI</td>
      <td align="center">センサー機器のユニークな識別子。この情報はGrove - Wio E5の背面のステッカーやSenseCAPコンソールデバイスで確認できます。</td>
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
      <td align="center">測定値ID。このIDは<a href="https://sensecap-docs.seeed.cc/sensor_types_list.html" target="_blank">SenseCAP ドキュメント</a>のMeasurement IDsセクションで確認できます。</td>
    </tr>
  </tbody></table>

**ステップ3.** MQTTノードを検証する

設定が完了したら、右上の**Deploy**ボタンをクリックして設定が成功したか確認してください。正しく入力されていれば、**Connected**という言葉が表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/1.png" /></div>

## Datacakeの設定

**ステップ1.** Datacakeに登録またはログインする

すでにDatacakeに登録している場合は、[Datacakeのウェブサイト](https://datacake.co/)でログインしてください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/3.png" /></div>

Datacakeを使用していない、または登録していない場合は、[こちら](https://app.datacake.de/signup)で登録とログインを完了してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/2.png" /></div>

**ステップ2.** 新しいワークスペースを作成する

Datacakeにログインしたら、左上のアカウント名をクリックして**Add Workspace**を選択します。そしてワークスペースの名前を考えます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/8.png" /></div>

**ステップ3.** 新しいデバイスを作成する

新しく作成したワークスペースに入ったら、新しいデバイスを作成します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/9.png" /></div>

**API**を選択します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/4.png" /></div>

**New Product**を選択します。そして製品に名前を付けます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/5.png" /></div>

このセクションでは、無料オプションを選択して完了します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/7.png" /></div>

**ステップ4.** デバイスを設定する

作成した新しいデバイスをクリックして**Configuration**を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/10.png" /></div>

「Fields」を見つけて**Add Field**をクリックします。そしてDatacakeで管理したいデータの名前を入力します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/11.png" /></div>

:::note
IDENTIFIERフィールドはすべて大文字であることに注意してください。また、後で設定するNode-REDの関数ノードでも、渡される内容は大文字である必要があります。
:::

**ステップ5.** APIトークンを取得する

左上のアカウント名をクリックして**Edit Profile**を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/12.png" /></div>

その後、APIで**APIトークン**を保存します。このトークンは後ほどNode-REDで使用します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/13.png" /></div>

## Node-RED の設定

**ステップ 1.** Datacake パレットをダウンロード

右上のメニューバーをクリックし、設定を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/13.png" /></div>

**Paletts -> Install** で **node-red-contrib-datacake** を検索してインストールします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/14.png" /></div>

左側のストレージバーから **datacake - out** を追加し、それをダブルクリックして設定ページに入り、編集ボタンをクリックして **datacake - out** ノードを編集します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/15.png" /></div>

**ステップ 2.** **datacake - out** ノードを編集

**API Token** には、Datacake の前回の設定で取得した API トークンを入力してください。その後、右上の追加ボタンをクリックします。

次に、以前作成したワークスペースの名前を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/16.png" /></div>

デバイスは自動的に新しく作成されたデバイスに更新され、フィールドのドロップダウンボックスには新しく作成されたフィールドが表示されます。ここでフィールドを設定したくない場合は、ペイロードの fieldName を変更してコードでフィールドを設定することもできます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/17.png" /></div>

**ステップ 3.** 関数ノードを設定

Datacake にデータを報告するには特定のデータ形式に従う必要があるため、データ形式を処理する関数ノードを追加する必要があります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/18.png" /></div>

左側の関数バーから関数ノードをドラッグして、ダブルクリックして編集ページに入り、コードを On Message にコピーします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/17.png" /></div>

```javascript
{
    var payload = msg.payload;
    var topic = msg.topic;
    var strs = topic.split("/");
    var length = strs.length
    if (length >= 2) {
        var measurementId = strs[length - 1]
        msg.payload = payload.value
        if (measurementId == 4150) {
            msg.fieldName = "ACCELX"
        } else if (measurementId == 4151) {
            msg.fieldName = "ACCELY"
        } else if (measurementId == 4152) {
            msg.fieldName = "ACCELZ"
        } else if (measurementId == 4192) {
            msg.fieldName = "VOLUME"
        } else if (measurementId == 4193) {
            msg.fieldName = "LIGHTINTENSITY"
        } else if (measurementId == 4103) {
            msg.fieldName = "SOILMOISTURE"
        } else if (measurementId == 4195) {
            msg.fieldName = "TVOC"
        } else if (measurementId == 4100) {
            msg.fieldName = "CO2"
        } else if (measurementId == 4097) {
            msg.fieldName = "AIRTEMPERATURE"
        } else if (measurementId == 4098) {
            msg.fieldName = "AIRHUMIDITY"
        } else if (measurementId == 4175) {
            msg.fieldName = "AIDETECTION1"
        } else if (measurementId == 4176) {
            msg.fieldName = "AIDETECTION2"
        } else if (measurementId == 4177) {
            msg.fieldName = "AIDETECTION3"
        } else if (measurementId == 4178) {
            msg.fieldName = "AIDETECTION4"
        } else if (measurementId == 4179) {
            msg.fieldName = "AIDETECTION5"
        } else if (measurementId == 4180) {
            msg.fieldName = "AIDETECTION6"
        } else if (measurementId == 4181) {
            msg.fieldName = "AIDETECTION7"
        } else if (measurementId == 4182) {
            msg.fieldName = "AIDETECTION8"
        } else if (measurementId == 4183) {
            msg.fieldName = "AIDETECTION9"
        } else if (measurementId == 4184) {
            msg.fieldName = "AIDETECTION10"
        }
    }
    return msg;
}
```

**ステップ 4.** デプロイ

次に、すべてのノードを接続し、**Deploy** ボタンをクリックします。すべてが正しく設定されていれば、mqtt in ノードが接続されていることを確認できます。

データのログ情報を確認したい場合は、関数ノードの後にデバッグノードを追加することができます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/18.png" /></div>

Wio Terminal が電源を入れて動作を開始し、SenseCAP PaaS サーバーにデータを送信し始めると、Node-RED のデバッグログでデータを確認できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/19.png" /></div>

Datacake ダッシュボードに戻ると、このデバイスの **History** セクションですべてのデータ情報を確認できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/20.png" /></div>

## トラブルシューティング

> Q1: Node-REDでパレットが見つからないのはなぜですか？

A: 設定でパレットが見つからない場合、Node-REDを起動した際にターミナルにエラーメッセージが表示されていないか確認してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/11.png" /></div>

最も一般的な原因は、npmのバージョンが古すぎてパレットエディタを起動できないことです。

上記の状況に該当する場合は、**管理者としてPowershellを実行**し、以下のコマンドを入力してnpmをアップグレードしてください。

```sh
npm install -g npm
```

その後、Node-REDを再起動するだけです。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際の体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>