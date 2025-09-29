---
title: Wio Terminal を Google Cloud IoT Core に接続する
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/Connect-Wio-Terminal-to-Google-Cloud-IoT-Core/
slug: /ja/Connect-Wio-Terminal-to-Google-Cloud-IoT-Core
last_update:
  date: 05/15/2025
  author: gunengyu
---


# Wio Terminal を Google Cloud IoT Core に接続する

![](https://files.seeedstudio.com/wiki/Google_Cloud_IoT/thumb.png)

## はじめに

このチュートリアルでは、Wio Terminal を Google Cloud IoT Core に接続し、Wio Terminal から Google Cloud IoT Core にテレメトリデータを送信するプロセスを説明します。このチュートリアルは2つのセクションに分かれており、最初のセクションでは、既存のライブラリを使用してコード内で事前設定されたテレメトリデータを送信する方法について説明します。次のセクションでは、独自のセンサーを Wio Terminal に追加して Google Cloud IoT Core にテレメトリデータを送信する方法について説明します。Google Cloud IoT Core は通信に HTTP と MQTT の両方のプロトコルをサポートしていますが、このチュートリアルでは MQTT プロトコルを使用します。

### Google Cloud とは？

[Google Cloud](https://cloud.google.com/) は、コンピュータやハードディスクドライブなどの物理的な資産と、仮想マシン (VM) などの仮想リソースで構成されており、これらは世界中の Google のデータセンターに含まれています。このリソースの分散により、障害時の冗長性や、クライアントに近い場所にリソースを配置することで遅延を減らすなど、いくつかの利点が提供されます。

クラウドコンピューティングでは、従来ソフトウェアやハードウェア製品として考えられていたものがサービスに変わります。これらのサービスは基盤となるリソースへのアクセスを提供します。[利用可能な Google Cloud サービスの一覧](https://cloud.google.com/products) は非常に多く、さらに増え続けています。Google Cloud 上でウェブサイトやアプリケーションを開発する際には、これらのサービスを組み合わせて必要なインフラを提供し、さらにコードを追加して構築したいシナリオを実現します。

### Google Cloud Platform とは？

[Google Cloud Platform (GCP)](https://console.cloud.google.com/) は、クラウドコンピューティングサービスの集合体です。一連の管理ツールを備え、コンピューティング、データストレージ、データ分析、機械学習を含むモジュール型のクラウドサービスを提供します。GCP は、インフラストラクチャー・アズ・ア・サービス (IaaS)、プラットフォーム・アズ・ア・サービス (PaaS)、およびサーバーレスコンピューティング環境を提供します。

### Google Cloud IoT Core とは？

[Google Cloud Internet of Things (IoT) Core](https://cloud.google.com/iot/docs) は、IoT デバイスを安全に接続し管理するための完全管理型サービスです。数台から数百万台までのデバイスからデータを取り込み、Google Cloud Platform の他のビッグデータサービスと統合されたリッチなアプリケーションを構築します。

### Google Cloud Console とは？

[Google Cloud Console](https://console.cloud.google.com/) は、Google Cloud Platform のリソースを管理するためのウェブベースのグラフィカルユーザーインターフェースを提供します。Cloud Console を使用すると、新しいプロジェクトを作成するか、既存のプロジェクトを選択し、そのプロジェクトのコンテキストで作成したリソースを使用できます。複数のプロジェクトを作成できるため、プロジェクトを使用して作業を適切に分離することができます。例えば、特定のチームメンバーだけがそのプロジェクト内のリソースにアクセスできるようにしたい場合は新しいプロジェクトを開始し、他のプロジェクトではすべてのチームメンバーがリソースにアクセスできるようにすることができます。

## Wio Terminal を Google Cloud IoT Core に MQTT を介して接続する

前述の通り、Wio Terminal と Google Cloud IoT Core の間の通信には、利用可能な MQTT ブリッジを使用します。ただし、必要に応じて HTTP ブリッジを使用することも可能です。

![](https://files.seeedstudio.com/wiki/Google_Cloud_IoT/5555555.png)

### Google Cloud Console のセットアップ

まず、Google Cloud Console にアクセスし、Cloud IoT Core デバイスレジストリを作成してデバイスを登録します。

#### 初期セットアップ

- **ステップ 1:** [こちら](https://console.cloud.google.com/)にアクセスして新しいプロジェクトを作成します。

**注意:** ログインを求められた場合は、Google アカウントにログインしてください。

- **ステップ 2:** **プロジェクトを選択**メニューをクリックします。

- **ステップ 3:** **新しいプロジェクト**をクリックし、**プロジェクト名**を入力します。

- **ステップ 4:** **作成**をクリックします。

- **ステップ 5:** Cloud プロジェクトの課金を有効にします。これは、ロボットではないことを確認するために必要であり、課金されることはありません。ナビゲーションメニューで「課金」を選択し、セットアップを進めてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/1111111.png" alt="pir" width={500} height="auto" /></p>

- **ステップ 6:** [こちら](https://console.cloud.google.com/flows/enableapi?apiid=cloudiot.googleapis.com%2Cpubsub&authuser=3&_ga=2.254170561.853675115.1607885458-878786893.1606048800)にアクセスして、Cloud IoT Core と Cloud Pub/Sub API を有効にします。

**注意:** ドロップダウンメニューから、先ほど作成したプロジェクトを選択してください。

#### デバイスレジストリを作成する

- **ステップ 1:** Cloud Console の [Google Cloud IoT Core ページ](https://console.cloud.google.com/iot/registries)にアクセスします。

- **ステップ 2:** **レジストリを作成**をクリックします。

- **ステップ 3:** **レジストリ ID** を入力します。

**注意:** これはレジストリの名前です。

- **ステップ 4:** **リージョン**を選択します。

**注意:** 米国にいる場合は、リージョンとして us-central1 を選択します。米国外の場合は、希望するリージョンを選択してください。

- **ステップ 5:** **Cloud Pub/Sub トピックを選択**ドロップダウンリストで、**トピックを作成**を選択し、希望する**トピック ID**を入力します。

- **ステップ 6:** **トピックを作成**をクリックします。

- **ステップ 7:** **詳細オプションを表示**をクリックします。

- **ステップ 8:** **デバイス状態トピック**と**証明書値**フィールドはオプションなので、空白のままにします。

- **ステップ 9:** **プロトコル**として **MQTT** を選択します。

- **ステップ 10:** Cloud IoT Core ページで **作成**をクリックします。

これで、デバイスのテレメトリイベントを公開するための Cloud Pub/Sub トピックを持つデバイスレジストリが作成されました。

#### デバイスキーのペアを生成する (EC キー)

Cloud IoT Core は公開鍵 (または非対称) 認証を使用します。

- デバイスは秘密鍵を使用して [JSON Web Token (JWT)](https://cloud.google.com/iot/docs/how-tos/credentials/jwts) を署名します。このトークンはデバイスのアイデンティティの証明として Cloud IoT Core に渡されます。
- サービスは、JWT が送信される前にアップロードされたデバイス公開鍵を使用してデバイスのアイデンティティを検証します。

Cloud IoT Core は RSA と楕円曲線アルゴリズムをサポートしており、このチュートリアルでは楕円曲線キーを使用します。

- **ステップ 1:** PC 上に新しいフォルダを作成します。

- **ステップ 2:** ターミナルウィンドウからフォルダに移動し、以下のコマンドを入力して P-256 楕円曲線キーのペアを生成します。

```sh
openssl ecparam -genkey -name prime256v1 -noout -out ec_private.pem
openssl ec -in ec_private.pem -pubout -out ec_public.pem
```

**注意:** [このリンク](https://slproweb.com/products/Win32OpenSSL.html)に従って **openssl** をインストールし、ディレクトリの場所を PATH に追加してください。

上記のコマンドは以下の公開/秘密鍵ペアを作成します：

- **ec_private.pem**: デバイス上で安全に保存され、認証 JWT を署名するために使用される秘密鍵。
- **ec_public.pem**: Cloud IoT Core に保存され、認証 JWT の署名を検証するために使用される公開鍵。

#### 秘密鍵を抽出する

秘密鍵のバイトを抽出し、後で作成する Arduino プロジェクトの秘密鍵文字列にコピーする必要があります。これらの鍵を保存して後で使用します。

- **ステップ 1:** ターミナルウィンドウを開き、前に生成した楕円曲線キーのペアを含むフォルダに移動します。

- **ステップ 2:** 以下のコマンドを入力します。

```sh
openssl ec -in ec_private.pem -noout -text
```

- **ステップ 3:** 生成された秘密鍵バイトを **priv:** の下からコピーし、メモ帳に貼り付けて後で使用するために保存します。

#### レジストリにデバイスを追加する

- **ステップ 1:** [レジストリページ](https://console.cloud.google.com/iot/registries)にアクセスし、前に作成したレジストリを選択します。

- **ステップ 2:** **デバイス**タブを選択し、**デバイスを作成**をクリックします。

- **ステップ 3:** **デバイス ID** を入力します。

- **ステップ 4:** **デバイスメタデータ**フィールドはオプションなので、空白のままにします。

- **ステップ 5:** **通信、クラウドログ、認証**ドロップダウンメニューをクリックします。

- **ステップ 6:** **デバイス通信**で **許可**を選択します。

- **ステップ 7:** **認証**フィールド内で、**入力方法**の下にある **アップロード**を選択します。

- **ステップ 8:** **公開鍵形式**ドロップダウンメニューから **ES256** を選択します。

- **ステップ 9:** **公開鍵値**の下で **参照**ボタンを押し、前に作成した楕円曲線キーのペアフォルダに移動して **ec_public.pem** を選択します。

- **ステップ 10:** **作成**をクリックします。

これで、レジストリにデバイスを追加しました。ES256 キーはデバイスの詳細ページに表示されます。

#### サブスクライバーを設定する

デバイスレジストリを作成し、トピックを作成し、そのレジストリにデバイスを追加したので、次に進んでトピックを購読するサブスクライバーを作成し、Wio Terminal からテレメトリデータを取得します。

- **ステップ 1:** Google Cloud Console の検索バーに **Pub** と入力し、結果から **Pub/Sub** を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/333333.png" alt="pir" width={700} height="auto" /></p>

- **ステップ 2:** ナビゲーションメニューで **サブスクリプション** をクリックします。

- **ステップ 3:** **サブスクリプションを作成**をクリックします。

- **ステップ 4:** 任意の **サブスクリプション ID** を入力します。

- **ステップ 5:** 以前作成した **Pub/Sub topic** を **Select a Cloud Pub/Sub topic** ドロップダウンメニューから選択します。

- **ステップ 6:** 配信タイプとして **Pull** を選択します。

- **ステップ 7:** **Create** をクリックします。

これで Google Cloud IoT Core の設定が完了しました。次に、Wio Terminal と Arduino IDE の設定に進みます。

### Arduino と Wio Terminal のセットアップ

#### 必要なライブラリ

このチュートリアルでは以下の2つのライブラリが必要です。

1. lwMQTT MQTT Arduino ライブラリ
2. Google Cloud IoT Arduino ライブラリ

これらのライブラリをダウンロードする手順：

- **ステップ 1:** Arduino IDE を開きます。
- **ステップ 2:** `Sketch > Include Library > Manage Libraries` に移動します。
- **ステップ 3:** 検索ボックスに **lwMQTT** と **Google Cloud IoT** を入力し、ライブラリをインストールします。

#### 認証情報とアカウント情報の設定

次に、Wi-Fi の認証情報と Google Cloud IoT Core の情報を **ciotc_config.h** ファイルに設定します。

- **ステップ 1:** Arduino IDE 内で `File > Examples > Google Cloud IoT JWT > Esp32-lwmqtt` に移動します。

- **ステップ 2:** **ciotc_config.h** を開きます。

- **ステップ 3:** **Wi-Fi ネットワークの詳細**を変更します。

```cpp
const char *ssid = "Enter_SSID";
const char *password = "Enter_Password";
```

- **ステップ 4:** **Google Cloud IoT の詳細**を変更します。

```cpp
const char *project_id = "Enter_Project_ID";
const char *location = "Enter_location";
const char *registry_id = "Enter_Registry_ID";
const char *device_id = "Enter_Device_ID";
```

- **ステップ 5:** **ec_private.pem** から取得したプライベートキーのバイトをコピーし、以前に保存した内容を入力します。

```cpp
const char *private_key_str =
    "6e:b8:17:35:c7:fc:6b:d7:a9:cb:cb:49:7f:a0:67:"
    "63:38:b0:90:57:57:e0:c0:9a:e8:6f:06:0c:d9:ee:"
    "31:41";
```

**注意:** キーの長さは32ペアの16進数である必要があります。

#### NTP 時間取得方法の変更

**esp32-mqtt.h** を開き、以下のコードでファイル全体を置き換えます。ここでは、UDP を使用して NTP 時間を取得する実装に configTime 関数を置き換えています。

```cpp
#include <Client.h>
#include <rpcWiFi.h>
#include <WiFiClientSecure.h>

#include <MQTT.h>

#include <CloudIoTCore.h>
#include <CloudIoTCoreMqtt.h>
#include "ciotc_config.h" // このファイルを設定内容で更新してください

// !!REPLACEME!!
// コマンドと設定更新のための MQTT コールバック関数
// メッセージハンドラーコードをここに記述してください。
void messageReceived(String &topic, String &payload){
  Serial.println("incoming: " + topic + " - " + payload);
}
///////////////////////////////

// このボード用の WiFi と MQTT の初期化
//Client *netClient;
CloudIoTCoreDevice *device;
CloudIoTCoreMqtt *mqtt;
MQTTClient *mqttClient;
unsigned long iat = 0;
String jwt;
WiFiUDP udp;

unsigned int localPort = 2390;
unsigned long devicetime;
const int NTP_PACKET_SIZE = 48; // NTP タイムスタンプはメッセージの最初の48バイトに含まれます
byte packetBuffer[NTP_PACKET_SIZE]; // 受信および送信パケットを保持するバッファ

// 指定されたアドレスのタイムサーバーに NTP リクエストを送信
unsigned long sendNTPpacket(const char* address) {
    // バッファ内のすべてのバイトを 0 に設定
    for (int i = 0; i < NTP_PACKET_SIZE; ++i) {
        packetBuffer[i] = 0;
    }
    // NTP リクエストを形成するために必要な値を初期化
    packetBuffer[0] = 0b11100011;   // LI, Version, Mode
    packetBuffer[1] = 0;     // Stratum, or type of clock
    packetBuffer[2] = 6;     // Polling Interval
    packetBuffer[3] = 0xEC;  // Peer Clock Precision
    // Root Delay & Root Dispersion のためのゼロの8バイト
    packetBuffer[12] = 49;
    packetBuffer[13] = 0x4E;
    packetBuffer[14] = 49;
    packetBuffer[15] = 52;

    // すべての NTP フィールドに値が設定されたので、
    // タイムスタンプを要求するパケットを送信できます：
    udp.beginPacket(address, 123); // NTP リクエストはポート123に送信されます
    udp.write(packetBuffer, NTP_PACKET_SIZE);
    udp.endPacket();
}

unsigned long getNTPtime() {

    // モジュールは1970年1月1日以降の秒数として unsigned long 型の時間値を返します
    // 問題が発生した場合は 0 を返します

    // 接続されている場合のみデータを送信
    if (WiFi.status() == WL_CONNECTED) {
        // UDP 状態を初期化
        udp.begin(WiFi.localIP(), localPort);
        sendNTPpacket(ntp_primary); // タイムサーバーに NTP パケットを送信
        // 応答が利用可能かどうかを確認するために待機
        delay(1000);
        if (udp.parsePacket()) {
            udp.read(packetBuffer, NTP_PACKET_SIZE); // パケットをバッファに読み込む

            unsigned long highWord = word(packetBuffer[40], packetBuffer[41]);
            unsigned long lowWord = word(packetBuffer[42], packetBuffer[43]);
            unsigned long secsSince1900 = highWord << 16 | lowWord;
            const unsigned long seventyYears = 2208988800UL;
            unsigned long epoch = secsSince1900 - seventyYears;

            long tzOffset = 0UL;
            unsigned long adjustedTime;
            return adjustedTime = epoch + tzOffset;
        }
        else {
            udp.stop();
            return 0; // 失敗を示すゼロを返す
        }
        udp.stop();
    }
    else {
        return 0;
    }
}

///////////////////////////////
// このボードに特有のヘルパー
///////////////////////////////
String getDefaultSensor(){
  return "Wifi: " + String(WiFi.RSSI()) + "db";
}

String getJwt(){
  Serial.println("Refreshing JWT");
  iat = getNTPtime();
  Serial.println(iat);
  jwt = device->createJWT(iat, jwt_exp_secs);

  Serial.println(jwt);
  return jwt;
}

void setupWifi(){
  Serial.println("Starting wifi");

  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  Serial.println("Connecting to WiFi");
  while (WiFi.status() != WL_CONNECTED){
    delay(100);
  }

  Serial.println("Waiting on time sync...");
  while (getNTPtime() < 1510644967){
    delay(10);
  }
}

void connectWifi(){
  Serial.print("checking wifi...");
  while (WiFi.status() != WL_CONNECTED){
    Serial.print(".");
    delay(1000);
  }
}

///////////////////////////////
// さまざまなメソッドを調整
///////////////////////////////
bool publishTelemetry(String data){
  return mqtt->publishTelemetry(data);
}

bool publishTelemetry(const char *data, int length){
  return mqtt->publishTelemetry(data, length);
}

bool publishTelemetry(String subfolder, String data){
  return mqtt->publishTelemetry(subfolder, data);
}

bool publishTelemetry(String subfolder, const char *data, int length){
  return mqtt->publishTelemetry(subfolder, data, length);
}

void connect(){
  connectWifi();
  mqtt->mqttConnect();
}

WiFiClientSecure netClient;
void setupCloudIoT(){
  device = new CloudIoTCoreDevice(
      project_id, location, registry_id, device_id,
      private_key_str);

  setupWifi();
  mqttClient = new MQTTClient(512);
  mqttClient->setOptions(180, true, 1000); // keepAlive, cleanSession, timeout
  mqtt = new CloudIoTCoreMqtt(mqttClient, &netClient, device);
  mqtt->setUseLts(true);
  mqtt->startMQTT();
}
```

#### Esp32-lwmqtt.ino にマクロ定義を追加

**Esp32-lwmqtt.ino** 内に Wio Terminal ボードをマクロ定義に追加します。

```cpp
#if defined(ESP32) || defined(WIO_TERMINAL)
#define __ESP32_MQTT_H__
#endif
```

これで Arduino IDE の設定が完了しました。最後に、このコードを Wio Terminal にアップロードする必要があります。シリアルモニターを開くと、以下の内容が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/4444444.png" alt="pir" width={700} height="auto" /></p>

### テレメトリデータの表示

次に、Wio Terminal から送信されるテレメトリデータを表示する必要があります。この例では、Wi-Fi 信号強度がテレメトリデータとして送信されます。

- **ステップ 1:** Google Cloud Console の **Pub/Sub** にアクセスします

**注意:** Google Cloud Console の検索バーで **Pub** を検索できます

- **ステップ 2:** ナビゲーションメニュー内の **Subscriptions** に移動します

- **ステップ 3:** 以前に作成したサブスクリプション ID を選択します

- **ステップ 4:** **VIEW MESSAGES** をクリックします

- **ステップ 5:** **PULL** をクリックすると、以下のように受信したテレメトリデータが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/6666666.png" alt="pir" width={950} height="auto" /></p>

### 他のセンサーを追加する方法

Wio Terminal に任意のセンサーを追加して、Google Cloud IoT Core にテレメトリデータを送信することができます。簡単にするために、Wio Terminal に内蔵されている光センサーを使用して、光の強度レベルを Google Cloud IoT Core に送信します。

#### Google Cloud IoT の設定

- **ステップ 1:** Google Cloud Console の **IoT Core** にアクセスします

**注意:** Google Cloud Console の検索バーで **IoT Core** を検索できます

- **ステップ 2:** 以前に作成したレジストリを選択します

- **ステップ 3:** Cloud **Pub/Sub topics** の下で **Add or edit topics** を選択します

- **ステップ 4:** **ADD ADDITIONAL TOPIC** をクリックします

- **ステップ 5:** **Select a Cloud Pub/Sub topic** のドロップダウンメニューから **CREATE A TOPIC** をクリックします

- **ステップ 6:** **Topic ID** を入力して **CREATE TOPIC** をクリックします

- **ステップ 7:** **Subfolder** 列内に **Subfolder name** を入力します

**注意:** サブフォルダ名は Arduino コード内でトピックに関連付けるために使用されます

- **ステップ 8:** **UPDATE** をクリックします

- **ステップ 9:** 以前説明したように **新しいサブスクリプション** を作成します

#### Arduino の設定

**Esp32-lwmqtt.ino** に移動して、以下を追加します。

- **ステップ 1:** ループの後に、内蔵光センサー用の以下を追加します

```cpp
void loop() {
  int light = analogRead(WIO_LIGHT); // 光センサー値を格納する変数を割り当てる
  light = map(light,0,1023,0,100); // センサー値をマッピングする
```

- **ステップ 2:** サブフォルダ名を含むトピックを追加します

```cpp
    publishTelemetry(getDefaultSensor());
    publishTelemetry("/light",String(light));
```

**注意:** サブフォルダ名が追加されていない場合、テレメトリデータはデフォルトトピックに送信されます。この場合、以前説明した Wi-Fi 信号強度のテレメトリデータは、最初に作成したデフォルトトピックに送信されます。

コードを Wio Terminal にアップロードした後、新しく作成したトピックからサブスクライバーとしてプルすると、以下の結果が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/222222.png" alt="pir" width={950} height="auto" /></p>

### 他のセンサーを追加してダッシュボードでデータを可視化する方法

Google Cloud IoT Core はセンサーからのデータを可視化するための既製のダッシュボードを提供していませんが、InfluxDB と Grafana を使用してこれを実現する方法を説明します。

[InfluxDB](https://www.influxdata.com/) は時系列データベースであり、InfluxDB の各データは特定のタイムスタンプに関連付けられています。これにより、特定のデータに関連する日付と時刻が表示されます。一方、[Grafana](https://grafana.com/) はオープンソースのソリューションであり、大量のデータを分析し、アプリケーションを監視するためのカスタマイズ可能なダッシュボードを提供します。

基本的には、温度/湿度センサーを Wio Terminal に接続し、Google Cloud Function を使用して Pub/Sub から GKE (Google Kubernetes Engine) クラスター内の InfluxDB にデータを送信し、Grafana のインタラクティブなダッシュボードを使用して InfluxDB からデータを表示します。

![](https://files.seeedstudio.com/wiki/Google_Cloud_IoT/thumb.png)

#### Arduino のハードウェア設定

Grove - 温度と湿度センサー (DHT11) を Wio Terminal の Grove - Digital/Analog Port (D0) に接続します。

#### Arduino のソフトウェア設定

- **ステップ 1:** [Grove - Temperature and Humidity Sensor repo](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor) にアクセスして、ZIP ファイルとしてダウンロードします

- **ステップ 2:** Arduino を開き、`Sketch > Include Library > Add .ZIP Library` に移動して、ダウンロードしたライブラリを選択してインストールします

以前使用した **Esp32-lwmqtt.ino** に移動して、以下を追加します。

- **ステップ 1:** **#include "esp32-mqtt.h"** の後に以下を追加します

```cpp
#include "DHT.h" //DHT ライブラリ

#define DHTPIN 0 //DHT の信号ピンを定義
#define DHTTYPE DHT11 //DHT センサータイプを定義
DHT dht(DHTPIN, DHTTYPE); //DHT センサーを初期化
```

- **ステップ 2:** **setup** 内に以下を追加して DHT センサーを開始します

```cpp
dht.begin(); 
```

- **ステップ 3:** **void loop()** 内の **if ループ** に以下を追加します

```cpp
int temperature = dht.readTemperature(); // 温度を格納する変数を割り当てる
int humidity = dht.readHumidity(); // 湿度を格納する変数を割り当てる

String payload = String("{\"timestamp\":") + getNTPtime() +
                  String(",\"temperature\":") + temperature +
                  String(",\"humidity\":") + humidity +
                  String("}");
publishTelemetry(payload); 
```

**注意:** ここでは、すべてのデータを文字列として InfluxDB に解析します。InfluxDB は時系列データベースであるため、**time** を解析することが重要です。また、**pushTelemetry** 関数は、チュートリアルの最初に作成したデフォルトトピックにデータを送信します。

- **ステップ 4:** コードを Wio Terminal にアップロードします

#### Google Cloud IoT の設定

- **ステップ 1:** [こちら](https://github.com/lakshanthad/esp32-cloud-iot-core-k8s)のリポジトリにアクセスし、ZIPファイルとしてダウンロードしてください。

- **ステップ 2:** ダウンロードしたZIPファイルを解凍してください。

- **ステップ 3:** Google Cloud Consoleを開き、[Google Kubernetes Engine](https://console.cloud.google.com/kubernetes/list)に移動して、システムの初期化を待ちます。

- **ステップ 4:** 右上のボタンを押してCloud Shellを開始してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/cloud_shell_1.png" alt="pir" width={700} height="auto" /></p>

- **ステップ 5:** 以下のコマンドを入力して、gcloudコマンドラインツールのデフォルト設定を行います。

```sh
export ZONE=<enter_zone> # 例: us-central1-a、詳細は https://cloud.google.com/compute/docs/regions-zones/#available を参照
export PROJECT_ID=<enter_project-id> # プロジェクトID名
gcloud config set project $PROJECT_ID
gcloud config set compute/zone $ZONE
```

- **ステップ 6:** 以下のコマンドを入力して、n1-standard-1ノードを1つ持つGKEクラスターを作成します。

```sh
gcloud container clusters create influxdb-grafana \
                --num-nodes 1 \
                --machine-type n1-standard-1 \
                --zone $ZONE
```

- **ステップ 7:** 以下のコマンドを入力して、InfluxDBとGrafanaの認証情報を保存するシークレットを作成します。

```sh
kubectl create secret generic influxdb-grafana \
  --from-literal=influxdb-user=admin \
  --from-literal=influxdb-password=passw0rd \
  --from-literal=grafana-user=admin \
  --from-literal=grafana-password=passw0rd
```

**注意:** InfluxDBやGrafanaのユーザー名とパスワードはお好みに応じて変更できます。

- **ステップ 8:** Google Shell内で**Open Editor**をクリックしてください。

- **ステップ 9:** 先ほどダウンロードして解凍したフォルダを**Cloud Shell Editor**にドラッグ＆ドロップしてください。

- **ステップ 10:** **Open Terminal**をクリックしてターミナルに戻ります。以下のコマンドを入力して**05-influxdb_grafana_k8s**ディレクトリに移動してください。

```sh
cd esp32-cloud-iot-core-k8s-master/05-influxdb_grafana_k8s
```

- **ステップ 11:** 以下のコマンドを入力して、InfluxDBとGrafanaをKubernetesにデプロイしてください。

```sh
kubectl create -f k8s/
```

#### Grafanaのセットアップ

- **ステップ 1:** 以下のコマンドを入力して、サービスの外部IPとポートを確認してください。

```sh
kubectl get services
```

- **ステップ 2:** Grafanaの外部IPをコピーしてください。

- **ステップ 3:** `http://<grafana service external ip>:3000`にアクセスしてください。

**注意:** コピーしたGrafanaの外部IPを`<grafana service external ip>`に貼り付けてください。

- **ステップ 4:** 先ほど設定した認証情報でGrafanaにログインしてください。

- **ステップ 5:** 歯車アイコンをクリックし、`Configuration > Data Sources`に移動してください。

- **ステップ 6:** **Add data source**をクリックし、**influxDB**を選択してください。

- **ステップ 7:** **URL**フィールドに以下を入力してください。

```sh
http://influxdb:8086
```

- **ステップ 8:** **Database**フィールドに以下を入力し、**Save & Test**をクリックしてください。

```sh
iot
```

**注意:** **InfluxDB**データソースがGrafanaで正常に設定されている場合、**Data source is working**というメッセージが表示されます。

#### Google Cloud Functionの作成

次に、Pub/SubのトピックからInfluxDBにデータを送信し、Grafanaでインタラクティブなダッシュボードを使用してInfluxDBのデータを表示するGoogle Cloud Functionを作成します。

- **ステップ 1:** **Google Cloud Console**に戻り、**Cloud Shell**を開いてください。

- **ステップ 2:** 以下のコマンドを入力して**Cloud Functions API**を有効にしてください。

```sh
gcloud services enable cloudfunctions.googleapis.com
```

- **ステップ 3:** 以下のコマンドを入力して**06-cloud_function**ディレクトリに移動してください。

```sh
cd esp32-cloud-iot-core-k8s-master/06-cloud_function
```

- **ステップ 4:** **vimテキストエディタ**で**main.py**を開いてください。

```sh
cd esp32-cloud-iot-core-k8s-master/06-cloud_function
```

- **ステップ 5:** キーボードで**i**を押して**編集モード**に入ります。

- **ステップ 6:** **_get_influxdb_client関数**内の**InfluxDB変数**（ホスト、ポート、ユーザー名、パスワード）を変更してください。

**注意:** 以下のコマンドをCloud Shellで入力して外部IPをコピーし、InfluxDBホストを取得してください。

```sh
kubectl get services
```

- **ステップ 7:** **:wq**を入力してファイルを保存してください。

- **ステップ 8:** 以下のコマンドを入力して**Cloud Function**をデプロイしてください。

```sh
export PUBSUB_TOPIC="enter_topic-name>"
export REGION="enter_region" # https://cloud.google.com/functions/docs/locations
gcloud functions deploy iotcore_pubsub_to_influxdb --runtime python37 --trigger-topic $PUBSUB_TOPIC --region $REGION
```

#### Grafanaセットアップに戻る

- **ステップ 1:** Grafanaを開き、`Dashboards > Manage`に移動してください。

- **ステップ 2:** **New Dashboard**をクリックし、**Add new panel**をクリックしてください。

- **ステップ 3:** **Visualization**に移動し、**Graph**をクリックしてください。

- **ステップ 4:** **Query**の**FROM**タブで**select measurement**をクリックし、ドロップダウンメニューから**temperature**を選択してください。

- **ステップ 5:** **+ Query**をクリックし、**humidity**についても**ステップ 12**と同じ手順を繰り返してください。

- **ステップ 6:** 他の設定をお好みに応じて変更してください。

- **ステップ 7:** **Apply**をクリックしてください。

- **ステップ 8:** **Add panel**をクリックし、**Add new panel**をクリックしてください。

- **ステップ 9:** **Visualization**に移動し、**Gauge**をクリックしてください。

- **ステップ 10:** **Query**の**FROM**タブで**select measurement**をクリックし、ドロップダウンメニューから**temperature**を選択してください。

- **ステップ 11:** **Field**タブの**Unit**で、ドロップダウンメニューから`Temperature > Celcius`を選択してください。

- **ステップ 12:** ゲージの最小値と最大値を**Min**と**Max**に入力してください。

- **ステップ 13:** **Display name**に`Temperature`と入力してください。

- **ステップ 14:** **humidity**についても**ステップ 15**から同じ手順を繰り返してください。

- **ステップ 15:** **Apply**をクリックしてください。

これでGrafanaにダッシュボードが作成されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/grafana_dash_1.png" alt="pir" width={900} height="auto" /></p>

## 技術サポートと製品ディスカッション

技術的な問題がある場合は、[フォーラム](http://forum.seeedstudio.com/)に問題を投稿してください。  
弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しております。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
