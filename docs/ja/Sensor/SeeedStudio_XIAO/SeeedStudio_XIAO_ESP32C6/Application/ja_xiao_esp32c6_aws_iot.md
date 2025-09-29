---
description: XIAO ESP32C6 とセンサーを AWS IoT Core と組み合わせて、異常検知が可能な AI デバイスを実装します。
title: XIAO ESP32C6 のための AWS IoT Core による AI の活用
keywords:
- xiao esp32c6
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/xiao_esp32c6_aws_iot
last_update:
  date: 03/29/2024
  author: Citric
---

# XIAO ESP32C6 のための AWS IoT Core による AI の活用

この Wiki は、AWS サービスと XIAO ESP32C6 マイクロコントローラーの力を活用して環境データを監視・分析する高度な IoT システムの展開に関する包括的なガイドとして機能します。センサーデータのシームレスな収集から始まり、この文書では AWS IoT Core と AWS Analytics にそれぞれこの情報を送信・保存する複雑さを案内します。通常の環境パターンに対する機械学習モデルを訓練するための AWS Sagemaker の活用について詳しく説明し、効率向上のために運用コンテキストに学習・適応するシステムの能力を強調します。

さらに、この Wiki では XIAO ESP32C6 を使用したリアルタイム異常検知の実装について概説します。これは正常値からの逸脱を積極的にスキャンし、迅速にアラートをトリガーする重要なコンポーネントです。異常な状況について関係者に通知し、迅速な注意と行動を確保するアラート機構の設定のエンドツーエンドプロセスを包含しています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/0.jpg" style={{width:1000, height:'auto'}}/></div>

- [**AWS IoT Core へのセンサーデータの取得**](#capture-sensor-data-to-aws-iot-core)
- [**AWS Analytics を使用したデータの保存**](#store-the-data-using-aws-analytics)
- [**AWS Sagemaker を使用した正常環境でのデータ訓練**](#use-aws-sagemaker-to-train-data-in-normal-environments)
- [**異常環境検知のための XIAO ESP32C6**](#xiao-esp32c6-for-abnormal-environment-detection)
- [**異常状態メッセージ通知**](#abnormal-status-message-notification)

この Wiki を探索することで、ユーザーはスマートで応答性があり堅牢な環境監視システムの作成における各コンポーネントの役割について詳細な理解を得ることができ、設定とメンテナンスに関する実用的な洞察も含まれています。

## 必要な材料

この例では、XIAO ESP32C6 と Grove DHT20 温湿度センサーを使用して AWS IoT Core の SageMaker タスクを完了する方法を紹介します。以下は、このルーチンを完了するために必要なすべてのハードウェアデバイスです。

<div class="table-center">
 <table align="center">
  <tr>
   <th>XIAO ESP32C6</th>
   <th>DHT20</th>
   <th>拡張ボード</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Tem-humidity-sensor1.jpg" style={{width:250, height:'auto'}}/></div></td><td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/extensionboard.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## センサーデータをAWS IoT Coreに取得する

XIAO ESP32C6ボードに接続された多数のセンサーを活用して、環境データをリアルタイムで収集し、AWS IoT Coreにアップロードします。これにより、様々なセンサーから生成される大量のデータストリームを処理するための信頼性が高く安全な方法を提供します。

AWS IoT Coreに登録し、「XIAO_ESP32C6」という名前のThingを作成するには、以下の手順に従ってください。このプロセスは、すでにAmazon Web Servicesアカウントをお持ちであることを前提としています。お持ちでない場合は、続行する前に[アカウントを作成](https://aws.amazon.com/)する必要があります。

### ステップ1. Thingを作成する

Webブラウザを開き、[AWS管理コンソール](https://aws.amazon.com/console/)に移動します。AWSアカウントの認証情報を使用してサインインします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/1.png" style={{width:1000, height:'auto'}}/></div>

AWS管理コンソールに入ったら、ページ上部の**サービス**ドロップダウンメニューを見つけます。**サービス**メニューで、**IoT Core**をクリックします。見つからない場合は、上部の検索バーを使用して**IoT Core**を検索してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/2.png" style={{width:1000, height:'auto'}}/></div>

AWS IoT Coreダッシュボードで、左側のナビゲーションペインの**すべてのデバイス**をクリックしてオプションを展開します。**Things**をクリックします。「Things」ページの角にある**Create things**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/3.png" style={{width:1000, height:'auto'}}/></div>

**Create a single thing**を選択して、1つのThingの登録を続行します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/5.png" style={{width:800, height:'auto'}}/></div>

**Create a thing**ページで、Thingの名前として**XIAO_ESP32C6**を入力します。（オプション）必要に応じて、Thingにタイプ、グループ、または属性を追加することもできます。シンプルなセットアップの場合、これらのオプションをスキップできます。「Next」をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/6.png" style={{width:900, height:'auto'}}/></div>

**Configure device certificate**ページが表示されます。AWS IoT Coreでは、デバイスが安全な通信のために証明書を使用する必要があります。**Auto-generate a new certificate (recommended)**を選択してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/7.png" style={{width:1000, height:'auto'}}/></div>

**Attach policies to certificate**ページで、ポリシーがない場合は、**Create policy**をクリックして作成する必要があります。新しいページに移動し、Thingの権限を定義するポリシーを作成できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/8.png" style={{width:1000, height:'auto'}}/></div>

ポリシーを作成して名前を付けたら、ポリシー名の横のボックスにチェックを入れて**Create**をクリックし、新しく作成した証明書にアタッチします。

以下の権限が必要です：

- **iot:Publish**
- **iot:Connect**
- **iot:Receive**
- **iot:Subscribe**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/9.png" style={{width:1000, height:'auto'}}/></div>

Thingが登録されると、Thing詳細ページにリダイレクトされ、Thingの情報を表示できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/10.png" style={{width:1000, height:'auto'}}/></div>

デバイス（この場合はXIAO_ESP32C6）を設定して、Thingを作成する際にダウンロードした証明書と秘密鍵を使用します。特定のデバイスの指示に従ってAWS IoT SDKをセットアップし、AWS IoT Coreへの安全な接続を確立する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/11.png" style={{width:600, height:'auto'}}/></div>

ThingがセットアップされてAWS IoT Coreに接続されると、トピックの購読、メッセージの公開、AWS IoT Coreルールエンジンを使用したIoTデータの処理によってThingと対話できます。

証明書とキーを機密に保ち、セキュリティのベストプラクティスに従うことを忘れないでください。AWS IoT Coreドキュメントでは、IoTデバイスのセットアップと管理に関する詳細なガイドとチュートリアルを提供しています。

### ステップ2. 証明書に基づくヘッダーの準備

**secrets.h**という新しいヘッダーファイルを作成し、以下のコードテンプレートをヘッダーファイルに貼り付けます。

```cpp
#include <pgmspace.h>

#define SECRET
#define THINGNAME "DHTsensor"

const char WIFI_SSID[] = "YOUR_SSID";              //change this
const char WIFI_PASSWORD[] = "YOUR_PASSWORD";           //change this
const char AWS_IOT_ENDPOINT[] = "YOUR_AWS_IOT_ENDPOINT";       //change this

// Amazon Root CA 1
static const char AWS_CERT_CA[] PROGMEM = R"EOF(
-----BEGIN CERTIFICATE-----

-----END CERTIFICATE-----
)EOF";

// Device Certificate                                               //change this
static const char AWS_CERT_CRT[] PROGMEM = R"KEY(
-----BEGIN CERTIFICATE-----

-----END CERTIFICATE-----


)KEY";

// Device Private Key                                               //change this
static const char AWS_CERT_PRIVATE[] PROGMEM = R"KEY(
-----BEGIN RSA PRIVATE KEY-----

-----END RSA PRIVATE KEY-----


)KEY";
```

このC++コードテンプレートは、Wi-Fiネットワークに接続し、AWS IoTサービスと通信するIoTデバイス用に設計されています。このテンプレートには、実際の認証情報と証明書に置き換える必要がある様々な文字列のプレースホルダーが含まれています。各部分の記入方法は以下の通りです：

1. **Wi-Fi認証情報**：
   - `WIFI_SSID`: `"YOUR_SSID"`をあなたのWi-FiネットワークのSSID（名前）に置き換えてください。
   - `WIFI_PASSWORD`: `"YOUR_PASSWORD"`をあなたのWi-Fiネットワークのパスワードに置き換えてください。

2. **AWS IoTエンドポイント**：
   - `AWS_IOT_ENDPOINT`: `"YOUR_AWS_IOT_ENDPOINT"`をあなた固有のAWS IoTエンドポイントに置き換えてください。このエンドポイントは、あなたのAWS IoTアカウントとリージョンに固有のものです。AWS IoTコンソールの設定で確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/12.png" style={{width:1000, height:'auto'}}/></div>

3. **Amazon Root CA 1（認証局）**：
   - `AWS_CERT_CA`: `-----BEGIN CERTIFICATE-----`と`-----END CERTIFICATE-----`マーカーの間に、AWSが提供するAmazon Root CA 1証明書全体を貼り付けてください。この証明書により、あなたのデバイスがサーバーの身元を信頼できるようになります。

4. **デバイス証明書**：
   - `AWS_CERT_CRT`: `-----BEGIN CERTIFICATE-----`と`-----END CERTIFICATE-----`の間のプレースホルダーを、PEM形式のあなたのデバイスの証明書に置き換えてください。この証明書はあなたのデバイスに固有のもので、AWS IoTでデバイスを認証するために使用されます。

5. **デバイス秘密鍵**：
   - `AWS_CERT_PRIVATE`: `-----BEGIN RSA PRIVATE KEY-----`と`-----END RSA PRIVATE KEY-----`マーカーの間に、PEM形式のあなたのデバイスの秘密鍵を貼り付けてください。この鍵は秘密に保つ必要があり、AWS IoTとの通信時にデバイスの身元を証明するために使用されるため、決して共有してはいけません。

:::caution
**Amazon Root CA 1**は**RSA 2048 bit key:Amazon Root CA 1**ダウンロードファイル情報に対応します。
**Device Certificate**は**Device certificate**ダウンロードファイル情報に対応します。
**Device Private Key**は**Private key file**ダウンロードファイル情報に対応します。

このコードにはWi-Fi認証情報や秘密鍵などの機密情報が含まれているため、安全に保管することが重要です。変更されたコードを公開したり、パブリックリポジトリにコミットしたりしないでください。
:::

### ステップ3. XIAO ESP32C6用データ取得プログラムのアップロード

Grove DHT20センサーをXIAO ESP32C6のIICインターフェースに接続してください。便利さを求める場合は、[Grove Base for XIAO](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html)の購入をお勧めします。

次に、Arduinoで新しいプロジェクトを作成し、ローカルに保存してください。**ステップ2**で作成した**secrets.h**ファイルを取り、.inoファイルと同じディレクトリにコピーしてください。その後、以下のコードをXIAO ESP32C6にアップロードしてください。データは、あなたが提供したAWS認証情報に基づいてMQTT経由で指定されたトピックに送信されます。

<details>
<summary>完全なコードをプレビューするにはここをクリック</summary>

```cpp
#include "secrets.h"
#include <WiFiClientSecure.h>
#include <PubSubClient.h>
#include <ArduinoJson.h>
#include "WiFi.h"
#include "Wire.h"

//DHT setup
#include "DHT.h"
#define DHTTYPE DHT20   // DHT 20
/*Notice: The DHT10 and DHT20 is different from other DHT* sensor ,it uses i2c interface rather than one wire*/
/*So it doesn't require a pin.*/
DHT dht(DHTTYPE);         //   DHT10 DHT20 don't need to define Pin

//MQTT setup
#define AWS_IOT_PUBLISH_TOPIC   "xiao_esp32c6/pub"
#define AWS_IOT_SUBSCRIBE_TOPIC "xiao_esp32c6/sub"

//store temp and humi data
float h;
float t;

//network setup
WiFiClientSecure net = WiFiClientSecure();
PubSubClient client(net);

#if defined(ARDUINO_ARCH_AVR)
    #define debug  Serial

#elif defined(ARDUINO_ARCH_SAMD) ||  defined(ARDUINO_ARCH_SAM)
    #define debug  SerialUSB
#else
    #define debug  Serial
#endif

void connectAWS()
{
  WiFi.mode(WIFI_STA);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
 
  Serial.println("Connecting to Wi-Fi");
 
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(500);
    Serial.print(".");
  }
 
  // Configure WiFiClientSecure to use the AWS IoT device credentials
  net.setCACert(AWS_CERT_CA);
  net.setCertificate(AWS_CERT_CRT);
  net.setPrivateKey(AWS_CERT_PRIVATE);
 
  // Connect to the MQTT broker on the AWS endpoint we defined earlier
  client.setServer(AWS_IOT_ENDPOINT, 8883);
 
  // Create a message handler
  client.setCallback(messageHandler);
 
  Serial.println("Connecting to AWS IOT");
 
  while (!client.connect(THINGNAME))
  {
    Serial.print(".");
    delay(100);
  }
 
  if (!client.connected())
  {
    Serial.println("AWS IoT Timeout!");
    return;
  }
 
  // Subscribe to a topic
  client.subscribe(AWS_IOT_SUBSCRIBE_TOPIC);
 
  Serial.println("AWS IoT Connected!");
}

void publishMessage()
{
  StaticJsonDocument<200> doc;
  doc["humidity"] = h;
  doc["temperature"] = t;
  char jsonBuffer[512];
  serializeJson(doc, jsonBuffer); // print to client
 
  client.publish(AWS_IOT_PUBLISH_TOPIC, jsonBuffer);
}
 
void messageHandler(char* topic, byte* payload, unsigned int length)
{
  Serial.print("incoming: ");
  Serial.println(topic);
 
  StaticJsonDocument<200> doc;
  deserializeJson(doc, payload);
  const char* message = doc["message"];
  Serial.println(message);
}

void setup() {

    debug.begin(115200);
    debug.println("DHTxx test!");
    Wire.begin();

    connectAWS();
    dht.begin();
}

void loop() {
    h = dht.readHumidity();
    t = dht.readTemperature();

    if (isnan(h) || isnan(t) )  // Check if any reads failed and exit early (to try again).
    {
      Serial.println(F("Failed to read from DHT sensor!"));
      return;
    }
  
    Serial.print(F("Humidity: "));
    Serial.print(h);
    Serial.print(F("%  Temperature: "));
    Serial.print(t);
    Serial.println(F("°C "));
  
    publishMessage();
    client.loop();
    delay(1000);
}
```

</details>

### ステップ 4. MQTT テストクライアント

AWS IoT Core では、センサーのデータが対象の AWS アカウントに正常にアップロードされているかを確認するために、MQTT テストクライアントで XIAO ESP32C6 が公開するトピックを購読する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/13.png" style={{width:1000, height:'auto'}}/></div>

プログラムが正常に動作している場合、1秒ごとに温度と湿度のデータメッセージのセットが表示されるはずです。

```json
{
    "humidity": 58,
    "temperature": 23.6
}
```

## AWS Analyticsを使用してデータを保存する

収集されたデータはAWS Analyticsサービスに転送され、生データを保存するだけでなく、強力なデータ処理と分析ツールも提供されます。これらのツールは、収集されたデータから価値のある洞察を抽出するのに役立ちます。

### ステップ5. AWS IoT Analyticsを設定する

AWSコンソールでAWS IoT Analyticsに移動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/14.png" style={{width:1000, height:'auto'}}/></div>

**AWS IoT Analyticsを開始する**で、新しく作成するリソースの名前を入力し、サブスクリプションサブジェクトを入力します（例：`xiao_esp32c6/pub`）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/15.png" style={{width:1000, height:'auto'}}/></div>

すべてのリソースが作成されるまでしばらく（10分程度）お待ちください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/16.png" style={{width:1000, height:'auto'}}/></div>

### ステップ6. ルールを作成する

AWS IoT Coreに戻り、左側のメニューバーの**メッセージルーティング**の下にある**ルール**をクリックします。**ルールを作成**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/17.png" style={{width:1000, height:'auto'}}/></div>

ルールの名前と、その目的を識別するのに役立つオプションの説明を入力します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/18.png" style={{width:1000, height:'auto'}}/></div>

AWS IoT SQL構文を使用してルールクエリステートメントを定義します。このステートメントは、受信するMQTTメッセージをフィルタリングおよび処理するための基準を指定します。ワイルドカード、関数、演算子を使用して特定のトピックにマッチし、メッセージペイロードからデータを抽出し、変換を適用できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/19.png" style={{width:1000, height:'auto'}}/></div>

作成したIoT Analyticsチャネルをルールアクションのターゲットとして選択します。**ロールを作成**ボタンをクリックします。コンソールで、**XIAO_ESP32C6_Role**などのロール名を入力します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/20.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/21.png" style={{width:1000, height:'auto'}}/></div>

ルール設定を確認し、「ルールを作成」ボタンをクリックしてルールを保存し、アクティブ化します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/22.png" style={{width:1000, height:'auto'}}/></div>

ルールが作成されると、定義されたルールクエリステートメントにマッチする受信MQTTメッセージの処理が開始されます。ルールがトリガーされるたびにルールアクションが実行され、特定の要件に応じてデータをルーティングおよび処理できます。

AWS IoTで複数のルールを作成して、さまざまなシナリオとデータ処理のニーズに対応できます。ルールは、IoTデバイスをさまざまなAWSサービスと統合し、強力なIoTアプリケーションを構築するための柔軟でスケーラブルな方法を提供します。

### ステップ7. センサーデータストリームを保存する

AWS IoT Analyticsサービスに移動します。AWS IoT Analyticsダッシュボードで、左側のサイドバーの**データセット**オプションをクリックします。ダウンロードしたいデータを含むデータセットを見つけ、その名前をクリックしてデータセットの詳細ページを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/25.png" style={{width:1000, height:'auto'}}/></div>

データセットコンテンツをダウンロードする前に、データセット生成を手動でトリガーする必要があります。**今すぐ実行**を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/26.png" style={{width:1000, height:'auto'}}/></div>

AWS IoT Analyticsがデータを処理し、指定された時間範囲に基づいてデータセットコンテンツを準備します。1秒に1回のセンサーデータレポートに基づいて、通常の環境では少なくとも1時間以上のデータ収集時間を推奨します。これによりデータの精度が確保されます。

データセット生成の完了を待ちます。データセットの詳細ページで進行状況を監視できます。ステータスが「SUCCEEDED」に変わると、データセットコンテンツのダウンロード準備が完了します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/28.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/23.png" style={{width:1000, height:'auto'}}/></div>

:::tip
XIAOのプログラムが正常に動作しているにもかかわらず、Datasetにデータ情報が表示されない場合は、Datasetのタブを右クリックして新しいブラウザページで開くことで、この問題が解決される可能性があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/27.png" style={{width:500, height:'auto'}}/></div>

データセットの詳細ページでは、名前、ステータス、最終更新時刻など、データセットに関する情報が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/24.png" style={{width:1000, height:'auto'}}/></div>
:::

## AWS Sagemakerを使用して通常環境でデータを訓練する

AWS Sagemakerを使用して、通常環境を示すパターンを認識する機械学習モデルを訓練します。Sagemakerは、機械学習モデルの開発、訓練、デプロイメントを促進する包括的なプラットフォームを提供し、環境データのインテリジェントな処理を可能にします。

### ステップ8. 新しいノートブックインスタンスを作成する

AWS管理コンソールでAmazon SageMakerサービスに移動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/29.png" style={{width:1000, height:'auto'}}/></div>

SageMakerダッシュボードで**Notebook instances**をクリックします。**Create notebook instance**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/30.png" style={{width:1000, height:'auto'}}/></div>

インスタンスタイプやIAMロールなどの必要な情報を入力します。IAMロールがデータが保存されている**S3バケットにアクセスするための必要な権限**を持っていることを確認してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/34.png" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/31.png" style={{width:1000, height:'auto'}}/></div>

インスタンスのステータスが**InService**になったら、**Open Jupyter**リンクをクリックしてJupyterノートブックインターフェースを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/32.png" style={{width:1000, height:'auto'}}/></div>

開いたら、コード環境として**conda_python3**を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/45.png" style={{width:1000, height:'auto'}}/></div>

次に、収集したデータセットをアップロードする必要があります。このデータセットは**ステップ7**でローカルコンピューターにダウンロードしたものです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/46.png" style={{width:1000, height:'auto'}}/></div>

その後、Jupyter Notebook内に準備したプログラムを入力できます。または、提供したプログラムを直接アップロードすることもできます。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/XIAO_ESP32C6_AWS_DHT20_Project/blob/main/TrainingModel/Jupyter_Notebook.ipynb" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>コードをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

プログラムの最初のセクションを実行して、インポートした収集データが正常であることを確認します。コード内のファイル名をあなたのファイル名に変更する必要があるかもしれません。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/47.png" style={{width:600, height:'auto'}}/></div>

### ステップ9: すべてのJupyter Notebookを実行する

S3は訓練データセット、テストデータセット、モデルアーティファクトなどを保存するために使用されます。SageMakerでは、データソースは通常S3バケットから取得されます。
モデル保存：訓練されたモデルも後続のデプロイメントと推論のためにS3に保存されます。

次に、2番目のコードブロックをコピーして、**bucket_name**フィールドに名前を付けてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/48.png" style={{width:600, height:'auto'}}/></div>

その後、Jupyter Notebookのブロックを1つずつ実行してください。

:::note
Jupyter Notebookには実行前に以下のように修正が必要なパスや名前があります。

1. **In[22]**コードブロックの**ENDPOINT_NAME**の値は、**In[19]**コードブロックを実行した後の結果です。
2. **In[3]**と**In[10]**コードブロックの**bucket_name**を同じ名前に設定してください。
3. 最後のコードブロックの**API_ENDPOINT**には、あなた自身の値を使用してください。

:::

### ステップ10. AWS Lambdaを設定する

LambdaはSageMakerワークフローのトリガーとして使用できます。例えば、データがS3にアップロードされると、Lambda関数をトリガーしてSageMakerの訓練や処理ジョブを開始できます。

AWS管理コンソールにサインインし、AWS Lambdaサービスに移動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/37.png" style={{width:1000, height:'auto'}}/></div>

**Create function**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/38.png" style={{width:1000, height:'auto'}}/></div>

**Author from scratch**オプションを選択します。Lambda関数の名前を入力します（例：**XIAO-ESP32C6-FUNCTION**）。
希望するランタイム**Python3.9**を選択します。Lambda関数の実行ロールを選択します。新しいロールを作成するか、既存のロールを使用できます。新しいロールを作成する場合は、**Create a new role with basic Lambda permissions**を選択します。**Create function**ボタンをクリックしてLambda関数を作成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/39.png" style={{width:1000, height:'auto'}}/></div>

IAM（Identity and Access Management）コンソールに移動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/40.png" style={{width:1000, height:'auto'}}/></div>

次に、先ほど作成したLambda関数の名前を見つけて、それをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/41.png" style={{width:1000, height:'auto'}}/></div>

IAMロールページで、**Attach policies**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/42.png" style={{width:1000, height:'auto'}}/></div>

ポリシーに名前を付けます（例：**AmazonSageMakerFullAccess**）。**Add perminassions**ボタンをクリックして権限を追加します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/43.png" style={{width:1000, height:'auto'}}/></div>

Lambda関数の設定ページに戻ります。新しいテストイベントを作成するか、既存のものを使用します。テストイベントでLambda関数を呼び出して、正常に実行されることを確認します。Lambda関数の実行ログと出力を監視して、その動作を検証します。

```
{"data": [62.93016434, 24.31583405]}
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/44.png" style={{width:1000, height:'auto'}}/></div>

[以下のスニペット](https://github.com/Seeed-Projects/XIAO_ESP32C6_AWS_DHT20_Project/blob/main/TrainingModel/Lambda.ipynb)を**Code**にコピーします。

```python
#lambda function with sns
import boto3
import json

ENDPOINT_NAME = 'randomcutforest-2024-03-18-10-47-37-165'# your endpoint past here
runtime = boto3.client('runtime.sagemaker')
email_client = boto3.client('sns')

def lambda_handler(event, context):
    input = event['data']
    
    serialized_input = ','.join(map(str, input))

    response = runtime.invoke_endpoint(EndpointName=ENDPOINT_NAME, 
                                       ContentType='text/csv', 
                                       Body=serialized_input)

    result_str = response['Body'].read().decode()
    result_json = json.loads(result_str)
    inference = result_json['scores'][0]['score']
    
    try:
        if(inference>3):
            response_sns = email_client.publish(
                TopicArn='arn:aws:sns:us-east-1:381491976713:dhco2Topic2',# your sns topic past here
                Message='Enviroment data is abnormal',
                Subject='Enviroment Status'
            )
    except Exception as e:
        print(f"error: {e}")

    return inference
```

:::caution
コード内のコンテンツを自分のものに変更するよう注意してください。
:::

次に**Deploy**ボタンをクリックします。

### 追加の考慮事項

- SageMakerがS3内のデータにアクセスするための正しいIAMロールとポリシーが設定されていることを確認してください。
- SageMakerの自動モデル調整を使用して、モデルの最適なバージョンを見つけることを検討してください。
- 使用するコンピューティングリソースによっては、SageMakerでのモデルトレーニングとエンドポイントのデプロイに大きな料金が発生する可能性があるため、コストを把握しておいてください。

AWSサービスのインターフェースと機能は頻繁に更新されるため、詳細な手順とベストプラクティスについては、常に最新のAWSドキュメントを参照してください。

## 異常状態メッセージ通知

異常状態を検出すると、システムは直ちにメッセージ通知メカニズムを通じて保守担当者にアラートを送信し、タイムリーな介入と必要な対応を確実にします。

### ステップ11. Amazon SNSの設定

Amazon SNSサービスに移動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/49.png" style={{width:1000, height:'auto'}}/></div>

**Create topic**ボタンをクリックします。トピックの名前を入力します（例：「XIAO_ESP32C6_Topic」）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/50.png" style={{width:1000, height:'auto'}}/></div>

SNSトピックダッシュボードで、新しく作成したトピックをクリックします。**Create subscription**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/51.png" style={{width:1000, height:'auto'}}/></div>

サブスクリプションのプロトコルを選択します（「Email」、「SMS」、「HTTP/HTTPS」、「AWS Lambda」、「Amazon SQS」など）。

選択したプロトコルに基づいてエンドポイントの詳細を入力します。例：

- メールサブスクリプションの場合、メールアドレスを入力します。
- SMSサブスクリプションの場合、電話番号を入力します。
- HTTP/HTTPSサブスクリプションの場合、URLエンドポイントを入力します。
- AWS Lambdaサブスクリプションの場合、Lambda関数を選択します。
- Amazon SQSサブスクリプションの場合、SQSキューを選択します。

**Create subscription**ボタンをクリックしてサブスクリプションを作成します。必要に応じて、ステップ2-5を繰り返してトピックにさらにサブスクリプションを追加します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/52.png" style={{width:1000, height:'auto'}}/></div>

次に、Lambdaのコードに戻り、コード内の**TopicArn**フィールドを**SNSのARNフィールド**に置き換えます。

### ステップ12. LambdaにSNS権限を付与

IAM（Identity and Access Management）コンソールに移動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/40.png" style={{width:1000, height:'auto'}}/></div>

次に、先ほど作成したLambda Functionの名前を見つけてクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/41.png" style={{width:1000, height:'auto'}}/></div>

IAMロールページで、**Attach policies**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/42.png" style={{width:1000, height:'auto'}}/></div>

ポリシーの名前を入力します（例：**AmazonSNSFullAccess**）。**Add permissions**ボタンをクリックして権限を追加します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/53.png" style={{width:1000, height:'auto'}}/></div>

### ステップ13. API Gatewayの設定

AWS管理コンソールでAmazon API Gatewayサービスに移動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/54.png" style={{width:1000, height:'auto'}}/></div>

**Create API**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/55.png" style={{width:1000, height:'auto'}}/></div>

APIタイプとして**REST API**を選択し、**Build**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/56.png" style={{width:1000, height:'auto'}}/></div>

APIの名前を入力します（例：「XIAO_ESP32C6_API」）。APIのエンドポイントタイプとして**Regional**を選択します。**Create API**ボタンをクリックしてREST APIを作成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/57.png" style={{width:1000, height:'auto'}}/></div>

API Gatewayダッシュボードで、新しく作成したAPIを選択します。**Create Resource**を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/58.png" style={{width:1000, height:'auto'}}/></div>

リソースの名前を入力します（例：「XIAO_ESP32C6_Resource」）。**Create Resource**ボタンをクリックしてリソースを作成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/59.png" style={{width:1000, height:'auto'}}/></div>

新しく作成したリソースを選択した状態で、**Create Method**を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/60.png" style={{width:1000, height:'auto'}}/></div>

ドロップダウンリストからHTTPメソッドとして**POST**を選択します。統合タイプとして**Lambda Function**を選択します。Lambda関数が配置されているリージョンを選択します。Lambda関数の名前を入力します（例：「XIAO_ESP32C6_Function」）。
**Create method**ボタンをクリックして統合設定を保存します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/61.png" style={{width:1000, height:'auto'}}/></div>

**Deploy API**をクリックします。デプロイステージを選択するか（例：「prod」、「dev」）、新しいものを作成します。必要に応じてデプロイの説明を入力します。「Deploy」ボタンをクリックしてAPIをデプロイします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/63.png" style={{width:500, height:'auto'}}/></div>

API Gateway ダッシュボードで、あなたの API を選択し、「Stages」セクションに移動します。デプロイメントステージを展開し、リソースの POST メソッドをクリックします。**Invoke URL** セクションで、提供された URL をコピーします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/64.png" style={{width:1000, height:'auto'}}/></div>

最後に、[api_gateway code](https://github.com/Seeed-Projects/XIAO_ESP32C6_AWS_DHT20_Project/blob/main/TrainingModel/api_gateway.ipynb) をコピーして SageMaker Jupyter Notebook の最後に貼り付け（新しいスニペットを作成）、コード内の **API_ENDPOINT** フィールドを **Invoke URL** に置き換えます。

## 異常環境検出のための XIAO ESP32C6

正常環境のデータモデルが確立されると、XIAO ESP32C6 はセンサーデータを継続的に監視して、潜在的な異常を検出します。強力なマイクロコントローラーとして、データが異常な状況を示すときに迅速に応答することができます。

### ステップ 14. XIAO ESP32C6 のリアルタイムデータレポートプログラムをアップロード

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/XIAO_ESP32C6_AWS_DHT20_Project/blob/main/GetResult/GetResult.ino" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Download the Code</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

以下からプログラムを取得し、コード内の api フィールドをあなたのものに置き換えます。その後、コンパイルして XIAO ESP32C6 にアップロードします。おめでとうございます、ここまでステップを実行すれば、プロジェクト全体のステップを正常に完了したことになります。環境に異常が発生するとすぐに、AWS SNS サービスから送信される警告メール通知を受け取ることができます。

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちの製品での体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
