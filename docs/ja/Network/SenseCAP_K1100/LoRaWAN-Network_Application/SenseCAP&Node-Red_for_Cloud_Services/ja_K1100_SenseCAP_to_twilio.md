---
description: SenseCAP & Node-RED を使用して Twilio に接続
title: SenseCAP & Node-RED を使用して Twilio に接続
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/K1100_SenseCAP_to_twilio
last_update:
  date: 05/15/2025
  author: shuxu hu
---


# Node-RED を介して SenseCAP を Twilio に接続

**SenseCAP K1100 - センサープロトタイプキット** は、Seeed Studio が LoRa® 通信技術とエッジインテリジェンス製品のエッセンスを凝縮し、LoRa® および IoT アプリケーションを最も簡単に展開し習得できるように設計されています。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/banner.png" /></div>

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products)

## 産業用センサーへのアップグレードが可能

SenseCAP [S2110 コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) と [S2100 データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) を使用することで、Grove を簡単に LoRaWAN® センサーに変えることができます。Seeed はプロトタイピングを支援するだけでなく、SenseCAP シリーズの堅牢な [産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) を使用してプロジェクトを拡張する可能性も提供します。

IP66 ハウジング、Bluetooth 設定、グローバル LoRaWAN® ネットワークとの互換性、内蔵 19 Ah バッテリー、そしてアプリからの強力なサポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) は産業用途に最適な選択肢となります。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして 8-in-1 気象ステーション用のセンサーが含まれています。次の成功する産業プロジェクトに向けて、最新の SenseCAP S210x をお試しください。

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

## Twilio

Twilioは、世界中の数十万の企業と1,000万人以上の開発者が、顧客向けにユニークでパーソナライズされた体験を構築するために使用している顧客エンゲージメントプラットフォームです。

Twilioは、音声、テキスト、チャット、ビデオ、メールなどのチャネルをAPIを通じて民主化し、あらゆる組織が顧客が好むチャネルで意味のあるやり取りを簡単に構築できるようにしています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/1.jpg" alt="pir" width={700} height="auto" /></p>

このセクションでは、SenseCAP K1100キット、SenseCAPコンソール、Node-REDを使用して、特定の条件下でTwilioメッセージプッシュをトリガーするタスクを完了します。

Node-REDをインストールしていない、またはNode-REDが何か分からない場合は、[Node-RED & SenseCAP チュートリアル](https://wiki.seeedstudio.com/ja/K1100_sensecap_node-red/)を参照してください。

## MQTTノードの作成

**ステップ1.** Node-REDを起動する

ターミナルでコマンド`node-red`を入力してNode-REDを起動し、ブラウザを開いてアドレスバーに`http://localhost:1880`を入力してNode-REDのエディタにアクセスします。

**ステップ2.** MQTTノードを作成する

**Network -> mqtt in**ノードを使用し、[前のチュートリアル](https://wiki.seeedstudio.com/ja/K1100_sensecap_node-red/#mqtt-node)で説明したSenseCAP APIの形式に従ってmqttを設定します。

- サーバー: openstream.api.sensecap.seeed.cc
- ポート: 1883
- プロトコル: MQTT V3.1.1
- クライアントID: フォーマットは`org-<Organization ID>-<Random ID>`
  - `<Organization ID>`: あなたの組織ID。[SenseCAP APIを取得する](/ja/K1100_sensecap_node-red#get-the-sensecap-api)で取得済みです。
  - `<Random ID>`: 自分でランダムに生成した数字または小文字の文字列を使用します。

- トピック形式: `/device_sensor_data/<OrgID>/<DeviceEUI>/<Channel>/<Reserved>/<MeasurementID>`

<table align="center">
  <tbody><tr>
      <td align="center">OrgID</td>
      <td align="center">あなたの組織ID。[SenseCAP APIを取得する]で取得済みです。</td>
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
  </tbody></table>

**ステップ3.** MQTTノードを検証する

設定が完了したら、右上の**Deploy**ボタンをクリックして設定が成功したか確認してください。正しく入力されていれば、**Connected**という単語が表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/1.png" /></div>

## Twilioの設定

**ステップ 1.** Twilioに登録またはログイン

すでにTwilioに登録している場合は、[Twilioのウェブサイト](https://www.twilio.com/login)でログインしてください。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/3.png" /></div>

Twilioを使用していない、または登録していない場合は、[こちら](https://www.twilio.com/try-twilio)で登録を完了し、ログインしてください。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/2.png" /></div>

**ステップ 2.** 必要な情報を取得

登録時に検証した携帯電話にSMSメッセージを送信する無料サービスを試すことができます。

メイン画面で**Get a trial phone number**をクリックしてください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/4.png" /></div>

Twilioは自動的にTwilioの電話番号を生成します。

メイン画面の下部にある**Account Info**セクションで、Twilioとの接続を構築するために必要な情報を確認できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/5.png" /></div>

**Account SID**、**Auth Token**、および**My Twilio phone number**をメモしてください。これらは後でNode-REDで使用します。

## Node-REDの設定

**ステップ 1.** Twilioパレットをダウンロード

右上のメニューバーをクリックし、設定を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/13.png" /></div>

**Paletts -> Install**で**node-red-node-twilio**を検索してインストールします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/6.png" /></div>

左側のストレージバーから**twilio out**を追加し、ダブルクリックして設定ページに入り、**twilio out**ノードを編集するために編集ボタンをクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/7.png" /></div>

**ステップ 2.** **twilio out**ノードを編集

Twilioの設定で取得した情報を対応するフィールドに入力してください。その後、右上の**Add**ボタンをクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/8.png" /></div>

次に、Twilioに登録した携帯電話番号を入力してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/9.png" /></div>

:::note
ここに入力する携帯電話番号には、**「+国コード」**のプレフィックスを追加する必要があります。
:::

**ステップ 3.** 関数ノードを設定

SMSの内容は関数ブロックで定義できます。トリガー条件は、PaaSプラットフォームが報告するデータが特定のルールをトリガーする場合など、関数ブロック内でカスタマイズ可能です。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_influxdb/18.png" /></div>

左側の関数バーから関数ノードをドラッグし、ダブルクリックして編集ページに入り、コードをOn Messageにコピーします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/17.png" /></div>

例えば、このセクションでは、センサー値を受信した際にその値を携帯電話に送信するコードを以下のように記述できます。

```javascript
{
    var payload = msg.payload;
    var topic = msg.topic;
    var strs = topic.split("/");
    var length = strs.length
    if (length >= 2) {
        var measurementId = strs[length - 1]
        var value = payload.value
        if (measurementId == 4100) {
            msg.payload = "CO2:" + value
        } else if (measurementId == 4103) {
            msg.payload = "soilmoisture:" + value
        } else if (measurementId == 4150) {
            msg.payload = "accelX:" + value
        } else if (measurementId == 4151) {
            msg.payload = "accelY:" + value
        } else if (measurementId == 4152) {
            msg.payload = "accelZ:" + value
        } else if (measurementId == 4192) {
            msg.payload = "sound:" + value
        } else if (measurementId == 4193) {
            msg.payload = "light:" + value
        } else if (measurementId == 4195) {
            msg.payload = "tvoc:" + value
        } else if (measurementId == 4097) {
            msg.payload = "temperature:" + value
        } else if (measurementId == 4098) {
            msg.payload = "humidity:" + value
        } else if (measurementId == 4175) {
            msg.payload = "AIdetection_1:" + value
        } else if (measurementId == 4176) {
            msg.payload = "AIdetection_2:" + value
        } else if (measurementId == 4177) {
            msg.payload = "AIdetection_3:" + value
        } else if (measurementId == 4178) {
            msg.payload = "AIdetection_4:" + value
        } else if (measurementId == 4179) {
            msg.payload = "AIdetection_5:" + value
        } else if (measurementId == 4180) {
            msg.payload = "AIdetection_6:" + value
        } else if (measurementId == 4181) {
            msg.payload = "AIdetection_7:" + value
        } else if (measurementId == 4182) {
            msg.payload = "AIdetection_8:" + value
        } else if (measurementId == 4183) {
            msg.payload = "AIdetection_9:" + value
        } else if (measurementId == 4184) {
            msg.payload = "AIdetection_10:" + value
        }
    }
    return msg;
}
```

:::note
アカウント残高に注意してください。上記のコードは5分ごとに異なるセンサーのSMSを送信します。このコードを直接使用すると、残高が急速に減少する可能性があります！特定のセンサーに対してプログラムを作成し、すべてのセンサー値を一度に送信するのではなく、必要なセンサー値のみを送信することをお勧めします。
:::

**ステップ 4.** デプロイ

すべてのノードを接続し、**Deploy**ボタンをクリックします。すべてが正しく設定されていれば、**mqtt in**ノードが接続されていることが表示されます。

データのログ情報を確認したい場合は、関数ノードの後にデバッグノードを追加することができます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/10.png" /></div>

Wio Terminal が起動して動作を開始し、データを SenseCAP PaaS サーバーに送信し始めると、Node-RED のデバッグログでデータを確認することができます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/11.png" /></div>

すべてが正常に動作していれば、Twilio からセンサーのデータ値を含むテキストメッセージを受け取ることができます。

## トラブルシューティング

> Q1: Node-RED でパレットが見つからないのはなぜですか？

A: 設定でパレットが見つからない場合、Node-RED を起動した際にターミナルにエラーメッセージが表示されていないか確認してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/11.png" /></div>

最も一般的な原因は、npm のバージョンが古すぎてパレットエディタを起動できないことです。

上記の状況に該当する場合は、**管理者として Powershell を実行**し、以下のコマンドを入力して npm をアップグレードしてください。

```sh
npm install -g npm
```

その後、Node-RED を再起動してください。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートをご用意しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご利用いただけます。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>