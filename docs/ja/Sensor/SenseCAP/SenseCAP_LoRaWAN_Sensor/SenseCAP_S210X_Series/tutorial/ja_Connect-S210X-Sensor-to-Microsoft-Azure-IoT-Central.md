---
description: Node-REDを使用してS210XセンサーをMicrosoft Azure IoT Centralに接続する
title: Node-REDを使用してS210XセンサーをMicrosoft Azure IoT Centralに接続する
keywords:
- SenseCAP LoRaWAN センサー & Microsoft Azure IoT Central
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/Connect-S210X-Sensor-to-Microsoft-Azure-IoT-Central
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

SenseCAP S210Xは、ワイヤレスLoRaWAN®センサーのシリーズです。都市部では2km、見通しの良い環境では10kmの通信範囲をカバーし、通信プロセス中の低消費電力を維持します。交換可能なバッテリーを備え、最大10年間の使用が可能で、工業用IP66エンクロージャを採用しています。-40 ~ 85℃の動作温度をサポートし、過酷な環境でも展開可能です。SenseCAP S210XはLoRaWAN® V1.0.3プロトコルに対応しており、LoRaWAN®ゲートウェイと連携して動作します。ユーザーはデバイスを設置し、QRコードを使用してバインドし、ネットワークを構成することで、HTTPやMQTTなどの一般的なIoTプロトコルをサポートするSenseCAPポータルからデータを確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/001.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/catalogsearch/result/?q=S210x" target="_blank"><img src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%202.png" border="0" /></a></p>

このチュートリアルでは、S210XシリーズセンサーをNode-REDを介してMicrosoft Azure IoT Centralに接続する方法を紹介します。

## SenseCAP & Node-RED

この章では、Node-REDのインストールと使用方法、そしてNode-REDに接続するためのSenseCAP APIの呼び出しについて説明します。

この章の目的は、SenseCAPプラットフォームからさまざまな他のPaaSプラットフォームにデータを接続し、より深いデータ処理を行うことをユーザーにとって簡単にすることです。

**Node-RED**

Node-REDは、ハードウェアデバイス、API、オンラインサービスを新しい方法で接続するためのプログラミングツールです。ブラウザベースのエディタを提供し、パレット内の幅広いノードを使用してフローを簡単に構築できます。これらのフローはワンクリックでランタイムにデプロイ可能です。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/002.png" alt="pir" width={600} height="auto" /></p>

### Node.Jsのインストール

Node-REDをローカルにインストールするには、サポートされているバージョンのNode.jsが必要です。

Node-REDは現在、[Node 14.x LTS](https://nodejs.org/en/)を推奨しています。

### npmを使用したNode-REDのインストール

Node-REDをインストールするには、Node.jsに付属するnpmコマンドを使用します：

```cpp
sudo npm install -g --unsafe-perm node-red
```

:::info 注意
Windowsを使用している場合は、コマンドの先頭に「sudo」を付けないでください。
:::

このコマンドは、Node-REDをグローバルモジュールとして、その依存関係とともにインストールします。グローバルモジュールとしてインストールされた後、以下のコマンドを使用してターミナルでNode-REDを起動できます。

```cpp
node-red
```

![IMG\_258](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/003.png)

その後、ブラウザで[http://localhost:1880](http://localhost:1880/)にアクセスしてNode-REDエディタを開くことができます。

### SenseCAP APIの取得

このセクションに進む前に、SenseCAPコンソールでS210xデバイスをバインドしていることを確認してください。

[**SenseCAPコンソール**](https://sensecap.seeed.cc/portal/#/dashboard)にログインします。ダッシュボードの右上にあるユーザー名のドロップダウンバーで、**組織情報**を選択して**組織ID**を取得します。

![IMG\_259](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/004.png)

次に、SenseCAPのAPIキーを取得する必要があります。ダッシュボードの左側で**セキュリティ -> APIキーへのアクセス**をクリックします。その後、アクセスキーを作成します。

![IMG\_260](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/005.png)

作成した**API ID**をクリックすると、**アクセスAPIキー**が表示されます。これをコピーし、**組織ID**とともに後のステップで使用します。

![IMG\_261](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/006.png)

### Node-REDの設定
![IMG\_262](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/007.png)

* **ステップ1.** 新しいmqtt-brokerノードを追加

**mqtt in**ノードをドラッグして、設定ページを開きます。その後、**新しいmqtt-brokerを追加**の後にある編集ボタンをクリックします。

![IMG\_263](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/008.png)

mqtt-brokerの設定は以下のように入力します：

- サーバー：openstream.api.sensecap.seeed.cc
- ポート：1883
- プロトコル：MQTT V3.1.1
- クライアントID形式：**org-"組織ID" "ランダムID"**

**組織ID：** **組織情報**から取得したID  
**ランダムID：** 自分でランダムに生成した数字と小文字の組み合わせを使用します。

例：org-43243\*\*\*23-test

![IMG\_264](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/009.png)

次に、**セキュリティ**オプションフィールドにユーザー名とパスワードを入力します：

- ユーザー名：**org-"組織ID"**  
  **組織ID：** 以前に取得した組織ID
- パスワード：以前に取得した**アクセスAPIキー**を入力します。

![IMG\_265](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/010.png)

**トピックを追加**

トピック：特定の形式でトピックを設定することで、受信するデバイスとデータタイプを決定します。

トピック形式：  
**/device_sensor_data/"OrgID"/"DeviceEUI"/"Channel"/"Reserved"/"MeasurementID"**

| フィールド | 説明 |
| :-: | :- |
| OrgID | 組織情報でIDを確認できます |
| DeviceEUI | デバイスの基本プロパティまたはデバイスラベルでEUIを確認できます |
| Channel | センサーに接続するデバイスの物理インターフェース、デフォルト：1 |
| Reserved | 予約フィールド |
| MeasurementID | [measurement_list](https://sensecap-docs.seeed.cc/measurement_list.html) |

:::info 注意
"+"は、このフィールドにフィルター条件がなく、すべてに一致することを示します。"/+/+/+/+"はすべての"DeviceEUI"、"Channel"、"Reserved"、"MeasurementID"をリッスンすることを意味します。
:::

例：/device\_sensor\_data/424988\*\*\*\*44/2CF7F\*\*\*0002/+/+/+

このトピックは、現在のデバイスのすべてのリモートセンシングデータを受信することを意味します。

![IMG\_266](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/011.png)

* **ステップ 2.** デバッグノードを追加

**debug** ノードをドラッグして、**mqtt-in** ノードに接続し、**Deploy** をクリックします。

デプロイが成功すると、**mqtt in** ビルディングブロックの下に "**Connected**" と表示されます。データ報告間隔は接続したセンサーによって決定されます。データを受信すると、右側のデバッグウィンドウに生データが表示されます。 ![IMG\_267](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/012.png)

## **SenseCAP & Node-RED & Azure IoT Central**

[**Microsoft Azure IoT Central**](https://azure.microsoft.com/en-us/services/iot-central) は、IoT資産を大規模に接続、監視、管理することを容易にする完全管理型のグローバルIoT SaaS（ソフトウェアとしてのサービス）ソリューションです。非常に安全で、ビジネスの成長に合わせてスケールし、投資の再利用性を確保し、既存のビジネスアプリケーションと統合します。また、ビジネスアプリケーションとIoTデータのギャップを埋めます。最後に、デバイスの再構成と更新を集中管理する機能を提供します。

この章の内容では、前述のNode-REDを引き続き使用し、Node-REDを活用してMicrosoft Azure IoT CentralでS210Xセンサーセットを管理します。

### Microsoft Azure IoT Centralの設定

* **ステップ 1.** Azure IoT Centralにログインします。

[**Azure IoT Central**](https://apps.azureiotcentral.com/home) のウェブサイトにアクセスし、左側のナビゲーションメニューから **Build** をクリックし、**Custom apps** をクリックします。 ![IMG\_268](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/013.png)

* **ステップ 2.** **Application name** を入力し、**Pricing plan** を選択します。アプリケーション名を入力すると、アプリケーションURLが自動的に作成されます。

![IMG\_269](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/014.png)

注意：Azure IoT Centralの新規ユーザーの場合は、料金が発生しない **Free** を選択することをお勧めします。

![IMG\_270](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/015.png)

* **ステップ 3.** **Create** をクリックして新しいアプリケーションを作成します。これでAzure IoT Centralの設定が完了しました！

![IMG\_271](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/016.png)

* **ステップ 4.** デバイステンプレートを作成します。

左側のメニューバーで **Device templates** をクリックして新しいデバイステンプレートを作成してください。

![IMG\_272](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/017.png)

デバイステンプレートに名前を付けて **create** をクリックします。

![IMG\_273](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/018.png)

![IMG\_274](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/019.png)

* **ステップ 5.** デバイスを作成します。

左側のメニューバーで **Devices -> S2103** をクリックします。 ![IMG\_275](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/020.png)

![IMG\_276](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/021.png)

デバイスを作成すると、**Device** の下に作成したデバイスが表示されます。デバイスをクリックして、左上の **Connect** ボタンをクリックしてください。

この情報をメモしてください。次のステップで使用します。

![IMG\_277](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/022.png)

### **Node-REDの設定**

* **ステップ 1.** Azure IoTパレットをインストールします。

右上のメニューバーをクリックして **Settings** を選択します。 ![IMG\_278](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/023.png)

**Paletts - Install** で "node-red-contrib-azure-iot-central" を検索してインストールします。 ![IMG\_279](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/024.png)

* **ステップ 2.** Azure IoT Centralノードを設定します。

左側の **function** バーから **Azure IoT Central** ノードをドラッグして、ダブルクリックして設定ページに入り、編集ボタンをクリックして **Azure IoT Central** ノードを編集します。

![IMG\_280](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/025.png)

以下のように設定を入力してください：

Transport: MQTT

Authentication: SAS

Scope ID/Device ID/Primary Key: 以前取得した情報

![IMG\_281](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/026.png)

* **ステップ 3.** 関数ノードを設定します。

Azure IoT Centralへのデータ報告は特定のデータ形式に従う必要があるため、データ形式を処理するための関数ビルディングブロックを追加する必要があります。

左側の **function** バーから **function** ノードをドラッグして、ダブルクリックして編集ページに入り、以下のコードを **On Message** にコピーします。

![IMG\_282](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/027.png)

**コード**：

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

データのログ情報を確認したい場合は、関数ノードの後にデバッグノードを追加することができます。

![IMG\_283](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/028.png)

S210Xセンサーが電源を入れて動作を開始し、SenseCAP PaaSサーバーにデータを送信し始めると、Azure IoT Centralでデータを確認することができます。

### **データ表示**
**Raw data** 列に表示されるデータは **Unmodeled data** に配置されているため、上記のコードに従ってデータを解析する必要があります。

必要な機能を追加したら、**保存** と **公開** をクリックしてください。

![IMG\_284](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/029.png)

![IMG\_285](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/030.png)

これで、センサーによってアップロードされた生データを明確に確認することができます。  
![IMG\_286](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/031.png)

データダッシュボードページをさらに充実させたい場合は、Overview に表示されるように設定することもできます。

左側のナビゲーションメニューで **Overview** をクリックします。

![IMG\_287](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/032.png)

**starts with devices** ドロップダウンメニューを展開し、可視化したいテレメトリを選択します。

![IMG\_288](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/033.png)

**Add tile** をクリックすると、Azure IoT Central の Dashboard にタイルが追加されます。

![IMG\_289](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/034.png)

次に、センサーデータモニタリングダッシュボードをお好みに合わせてカスタマイズしてください！

変更が完了したら、**保存** と **公開** をクリックするだけです。

![IMG\_290](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/035.png)

![IMG\_291](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/036.png)

これで、カスタムダッシュボードを通じてセンサーデータを確認できるようになります！  
![IMG\_292](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/037.png)