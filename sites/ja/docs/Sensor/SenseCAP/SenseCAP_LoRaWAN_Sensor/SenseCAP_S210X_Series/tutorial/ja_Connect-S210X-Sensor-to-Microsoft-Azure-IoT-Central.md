---
description: Node-REDを介してS210XセンサーをMicrosoft Azure IoT Centralに接続する
title: Node-REDを介してS210XセンサーをMicrosoft Azure IoT Centralに接続する
keywords:
- SenseCAP LoRaWAN Sensor& Microsoft Azure IoT Central
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/Connect-S210X-Sensor-to-Microsoft-Azure-IoT-Central
last_update:
  date: 7/26/2023
  author: Jessie
---


SenseCAP S210Xは、ワイヤレスLoRaWAN®センサーのシリーズです。都市部では2km、見通しの良い環境では10kmの伝送範囲をカバーしながら、伝送プロセス中の消費電力を低く抑えることができます。最大10年間の使用をサポートする交換可能なバッテリーと、産業用IP66エンクロージャーを備えています。-40 ~ 85℃の動作温度をサポートし、過酷な環境での展開が可能です。SenseCAP S210XはLoRaWAN® V1.0.3プロトコルに対応し、LoRaWAN®ゲートウェイと連携できます。ユーザーはデバイスを設置し、QRコードを使用してバインドし、ネットワークを設定することで、HTTPやMQTTなどの人気のあるIoTプロトコルをサポートするSenseCAPポータルからデータを確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/001.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/catalogsearch/result/?q=S210x" target="_blank"><img src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%202.png" border="0" /></a></p>

このチュートリアルでは、Node-REDを介してS210XシリーズセンサーをMicrosoft Azure IoT Centralに接続する方法を紹介します。

## SenseCAP & Node-RED

この章は、シリーズの最初の章として、Node-redのインストールと使用方法、およびSenseCAP APIを呼び出してNode-REDに接続する方法について説明します。

この章は、ユーザーがSenseCAPプラットフォームからのデータを他の様々なPaaSプラットフォームに接続し、より詳細なデータ処理を行うことを容易にするためのものです。

**Node-RED**

Node-REDは、ハードウェアデバイス、API、オンラインサービスを新しく興味深い方法で結び付けるためのプログラミングツールです。パレット内の幅広いノードを使用してフローを簡単に結び付けることができるブラウザベースのエディターを提供し、ワンクリックでランタイムにデプロイできます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/002.png" alt="pir" width={600} height="auto" /></p>

### Node.Jsのインストール

Node-REDをローカルにインストールするには、サポートされているバージョンのNode.jsが必要です。

Node-REDは現在[Node 14.x LTS](https://nodejs.org/en/)を推奨しています。

### npmを使用したNode-REDのインストール

Node-REDをインストールするには、node.jsに付属するnpmコマンドを使用できます：

```cpp
sudo npm install -g --unsafe-perm node-red
```

:::info Note
Windowsを使用している場合は、コマンドを「sudo」で開始しないでください。
:::

このコマンドは、Node-REDを依存関係と共にグローバルモジュールとしてインストールします。
グローバルモジュールとしてインストールされると、このコマンドを使用してターミナルでNode-REDを開始できます。

```cpp
node-red
```

![IMG_258](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/003.png)

その後、ブラウザで [http://localhost:1880](http://localhost:1880/) にアクセスすることで、Node-REDエディタにアクセスできます。

### SenseCAP APIの取得

このセクションに進む前に、SenseCAP コンソールでS210xデバイスをバインドしていることを確認してください。

[**SenseCAP コンソール**](https://sensecap.seeed.cc/portal/#/dashboard)にログインします。ダッシュボード上部のユーザー名の右側にあるドロップダウンバーで、**Organization Information**を見つけることができます。これを選択して**Organization ID**を取得してください。

![IMG_259](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/004.png)

次に、SenseCAP用のAPIキーも取得する必要があります。ダッシュボードの左側にある**Security -> Access API keys**をクリックしてください。その後、Access Keyを作成します。

![IMG_260](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/005.png)

作成した**API ID**をクリックすると、**Access API keys**が取得できます。これと**Organization ID**をコピーしてください。後の手順で使用します。

![IMG_261](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/006.png)

### Node-RED設定

![IMG_262](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/007.png)

- **ステップ 1.** 新しいmqtt-brokerノードを追加

**mqtt in**ノードをドラッグし、ダブルクリックして設定ページに入り、**Add new mqtt-broker**の後にある編集ボタンをクリックします。

![IMG_263](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/008.png)

mqtt-brokerの設定は以下のように入力する必要があります：

サーバー：openstream.api.sensecap.seeed.cc

Port：1883

Protocol: MQTT V3.1.1

クライアント ID フォーマット：**org-"組織 ID" "ランダム ID"**

**Organization ID:** あなたの**Organization information**から取得

**Random ID:** 自分で生成したランダムな数字と小文字を使用。

例：org-43243\*\*\*23-test

![IMG_264](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/009.png)

次に、**Security**オプションフィールドにUsernameとPasswordを入力します：

Username: **org-"Organization ID"**

**Organization ID:** あなたの組織ID。これは以前に取得しました

Password: 以前に取得した**Access API keys**を入力します。
` `![IMG_265](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/010.png)

**Topic**を追加

Topic: 特定の形式でトピックを設定することで、受信するデバイスの種類とデータタイプが決まります。

トピック形式:
**/device_sensor_data/"OrgID"/"DeviceEUI"/"Channel"/"Reserved"/"MeasurementID"**

|OrgID|組織情報でIDを確認できます|
| :-: | :- |
|DeviceEUI|デバイスの基本プロパティまたはデバイスラベルでEUIを確認できます|
|Channel|センサーに接続するデバイス上の物理インターフェース、デフォルト：1|
|Reserved|予約フィールド|
|MeasurementID|[measurement_list](https://sensecap-docs.seeed.cc/measurement_list.html)|

:::info Note
"+"は、このフィールドにフィルター条件がなく、すべてにマッチできることを示します。"/+/+/+/+"は、すべての"DeviceEUI"、"Channel"、"Reserved"、"MeasurementID"をリッスンすることを意味します
:::

例：/device_sensor_data/424988\*\*\*\*44/2CF7F\*\*\*0002/+/+/+

このトピックは、現在のデバイスのすべてのリモートセンシングデータを受信することを意味します。

![IMG_266](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/011.png)

- **ステップ2.** デバッグノードを追加

**debug**ノードをドラッグし、**mqtt-in**ノードに接続してから、**Deploy**をクリックします

デプロイが成功すると、**mqtt in**ビルディングブロックの下に"**Connected**"が表示されます。データレポート間隔は接続したセンサーによって決まります。データを受信すると、右側のデバッグウィンドウに生データが表示されます。![IMG_267](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/012.png)

## **SenseCAP & Node-RED & Azure IoT Central**

[**Microsoft Azure IoT Central**](https://azure.microsoft.com/en-us/services/iot-central)は、IoTアセットを大規模に接続、監視、管理することを容易にする、完全に管理されたグローバルIoT SaaS（サービスとしてのソフトウェア）ソリューションです。高度にセキュアで、ビジネスの成長に合わせてスケールし、投資の再現性を確保し、既存のビジネスアプリケーションと統合します。また、ビジネスアプリケーションとIoTデータの間のギャップを埋めます。最後に、デバイスの再構成と更新のための集中管理を提供します。

この章の内容では、前述のNode-REDを引き続き使用し、Node-REDの使用を通じてMicrosoft Azure IoT CentralでS210Xセンサースイートの管理を促進します。

### Microsoft Azure IoT Central設定

- **ステップ1.** Azure IoT Centralにログイン。

[**Azure IoT Central**](https://apps.azureiotcentral.com/home)ウェブサイトにアクセスし、左側のナビゲーションメニューから**Build**をクリックし、**Custom apps**をクリックします。![IMG_268](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/013.png)

- **ステップ2.** **Application name**を入力し、**Pricing plan**を選択します。アプリケーション名を入力すると、Application URLが自動的に作成されます。

![IMG_269](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/014.png)

注意：Azure IoT Centralの新規ユーザーの場合、料金が発生しないため、Freeを選択することをお勧めします。

![IMG_270](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/015.png)

- **ステップ3.** **Create**をクリックして新しいアプリケーションを作成します。これでAzure IoT Centralのセットアップが正常に完了しました！

![IMG_271](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/016.png)

- **ステップ4.** デバイステンプレートを作成

左側のメニューバーの**Device templates**をクリックして、新しいデバイステンプレートを作成してください。

![IMG_272](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/017.png)

デバイステンプレートに名前を付けて、**create**をクリックします

![IMG_273](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/018.png)

![IMG_274](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/019.png)

- **ステップ5.** デバイスを作成

左側のメニューバーの**Devices -> S2103**をクリックします。![IMG_275](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/020.png)

![IMG_276](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/021.png)

デバイスを作成すると、**Device**の下に作成したばかりのデバイスが表示されます。デバイスをタップして、左上の**Connect**ボタンをクリックしてください。

この情報をメモしてください。次のステップで使用します。

![IMG_277](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/022.png)

### **Node-RED設定**

- **ステップ1.** Azure IoT Palettsをインストール

右上のメニューバーをクリックし、Settingsを選択します![IMG_278](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/023.png)

**Paletts - Install**で"node-red-contrib-azure-iot-central"を検索してインストールします![IMG_279](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/024.png)

- **ステップ2.** Azure IoT Centralノードを設定

左側の**function**バーから**Azure IoT Central**ノードをドラッグし、ダブルクリックして設定ページに入り、編集ボタンをクリックして**Azure IoT Central**ノードを編集します

![IMG_280](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/025.png)

設定は以下のように入力する必要があります：

Transport: MQTT

Authentication: SAS

Scope ID/Device ID/Primary Key: 以前に取得しました

![IMG_281](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/026.png)

- **ステップ3.** functionノードを設定

Azure IoT Centralへのデータレポートは特定のデータ形式に従う必要があるため、データ形式を処理するためのfunctionビルディングブロックを追加する必要があります。

左側のfunctionバーから**function**ノードをドラッグし、ダブルクリックして編集ページに入り、**On Message**にコードをコピーします。

![IMG_282](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/027.png)

**Code**:

```cpp
{
    var payload = msg.payload;
    var topic = msg.topic;
    var strs = topic.split("/");
    var length = strs.length
    if (length >= 2) {
        var measurementId = strs[length - 1]
        var body = {}
        var value = payload.value
        if (measurementId == 4097) {
            body.AirTemperature = value
        } else if (measurementId == 4098) {
            body.AirHumidity = value
        } else if (measurementId == 4100) {
            body.CO2 = value
        }
        msg.payload = body;
    }
    return msg;
}
```

データのログ情報を確認したい場合は、functionノードの後にdebugノードを追加できます。

![IMG_283](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/028.png)

S210Xセンサーが電源を入れて動作を開始し、SenseCAP PaaSサーバーにデータを送信し始めると、Azure IoT Centralでデータを確認できます。

### **データ表示**

**Raw data**列に表示されるデータは**Unmodeled data**に配置されているため、上記のコードに従ってデータを解析する必要があります。

必要な機能を追加し、**save**をクリックして**publish**します

![IMG_284](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/029.png)

![IMG_285](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/030.png)

これで、センサーによってアップロードされた生データを明確に確認できます。![IMG_286](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/031.png)

データダッシュボードページを充実させたい場合は、Overviewに表示されるように設定することもできます。

左側のナビゲーションメニューで**Overview**をクリックします。

![IMG_287](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/032.png)

**starts with devices**ドロップダウンメニューを展開し、視覚化したいテレメトリを選択します。

![IMG_288](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/033.png)

**Add tile**をクリックすると、Azure IoT Central Dashboardにタイルが追加されます。

![IMG_289](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/034.png)

それでは次に、お好みに合わせてセンサーデータ監視ダッシュボードをカスタマイズしましょう！

変更を完了したら、**save**をクリックして**publish**します

![IMG_290](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/035.png)

![IMG_291](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/036.png)

カスタムダッシュボードを通じてセンサーデータを表示できるようになりました！![IMG_292](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/037.png)
