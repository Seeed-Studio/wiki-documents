---
description: XIAO ESP32C6とセンサーを使用してAWS IoT Coreで異常検知が可能なAIデバイスを実現します。
title: XIAO ESP32C6とAWS IoT CoreでAIを強化
keywords:
- xiao esp32c6
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/xiao_esp32c6_aws_iot
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# XIAO ESP32C6とAWS IoT CoreでAIを強化

このWikiは、AWSサービスとXIAO ESP32C6マイクロコントローラーの力を活用して環境データを監視・分析する高度なIoTシステムを展開するための包括的なガイドです。センサーからのデータ収集をスムーズに開始し、このドキュメントではAWS IoT CoreおよびAWS Analyticsに情報を送信・保存するプロセスの詳細を説明します。また、AWS Sagemakerを使用して通常の環境パターンに基づいた機械学習モデルをトレーニングする方法を掘り下げ、システムが運用環境に適応し効率を向上させる能力を強調します。

さらに、このWikiでは、XIAO ESP32C6を使用したリアルタイム異常検知の実装について説明します。この重要なコンポーネントは、通常の状態からの逸脱を積極的にスキャンし、迅速にアラートをトリガーします。異常な状態を通知するアラートメカニズムの設定プロセス全体を網羅し、関係者が迅速に対応できるようにします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/0.jpg" style={{width:1000, height:'auto'}}/></div>

- [**センサーデータをAWS IoT Coreに送信**](#capture-sensor-data-to-aws-iot-core).
- [**AWS Analyticsを使用してデータを保存**](#store-the-data-using-aws-analytics).
- [**AWS Sagemakerを使用して通常環境でデータをトレーニング**](#use-aws-sagemaker-to-train-data-in-normal-environments).
- [**異常環境検知のためのXIAO ESP32C6**](#xiao-esp32c6-for-abnormal-environment-detection).
- [**異常状態メッセージ通知**](#abnormal-status-message-notification).

このWikiを通じて、ユーザーはスマートで応答性が高く堅牢な環境モニタリングシステムを構築するための各コンポーネントの役割を詳細に理解し、設定や保守に関する実践的な洞察を得ることができます。

## 必要な材料

この例では、XIAO ESP32C6とGrove DHT20温湿度センサーを使用してAWS IoT CoreのSageMakerタスクを完了する方法を紹介します。以下は、このルーチンを完了するために必要なすべてのハードウェアデバイスです。

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
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

## AWS IoT Coreにセンサーのデータを送信する

XIAO ESP32C6ボードに接続された複数のセンサーを活用して、リアルタイムで環境データを収集し、それをAWS IoT Coreにアップロードします。これにより、さまざまなセンサーから発生する膨大なデータストリームを信頼性と安全性を持って処理する方法が提供されます。

AWS IoT Coreに登録し、「XIAO_ESP32C6」という名前のThingを作成するには、以下の手順に従ってください。このプロセスは、すでにAmazon Web Servicesアカウントを持っていることを前提としています。アカウントを持っていない場合は、[こちら](https://aws.amazon.com/)で作成してください。

### ステップ1. Thingを作成する

ウェブブラウザを開き、[AWS Management Console](https://aws.amazon.com/console/)にアクセスします。AWSアカウントの資格情報を使用してサインインしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/1.png" style={{width:1000, height:'auto'}}/></div>

AWS Management Consoleにログインしたら、ページ上部の**Services**ドロップダウンメニューを見つけます。**Services**メニューで**IoT Core**をクリックします。見つからない場合は、ページ上部の検索バーで**IoT Core**を検索してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/2.png" style={{width:1000, height:'auto'}}/></div>

AWS IoT Coreダッシュボードで、左側のナビゲーションペインにある**All devices**をクリックしてオプションを展開します。**Things**をクリックします。「Things」ページの隅にある**Create things**ボタンをクリックしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/3.png" style={{width:1000, height:'auto'}}/></div>

**Create a single thing**を選択して、1つのThingを登録する手続きを進めます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/5.png" style={{width:800, height:'auto'}}/></div>

**Create a thing**ページで、Thingの名前として**XIAO_ESP32C6**を入力します。（オプション）必要に応じて、Thingにタイプ、グループ、または属性を追加することもできます。簡単なセットアップの場合は、これらのオプションをスキップできます。「Next」をクリックしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/6.png" style={{width:900, height:'auto'}}/></div>

次に**Configure device certificate**ページに移動します。AWS IoT Coreはデバイスが安全な通信を行うために証明書を使用する必要があります。**Auto-generate a new certificate (recommended)**を選択してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/7.png" style={{width:1000, height:'auto'}}/></div>

**Attach policies to certificate**ページでは、ポリシーがない場合は**Create policy**をクリックしてポリシーを作成する必要があります。新しいページに移動し、Thingの権限を定義するポリシーを作成できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/8.png" style={{width:1000, height:'auto'}}/></div>

ポリシーを作成して名前を付けたら、ポリシー名の横にあるチェックボックスを選択し、**Create**をクリックして新しく作成した証明書にポリシーを添付します。

以下の権限が必要です：
- **iot:Publish**
- **iot:Connect**
- **iot:Receive**
- **iot:Subscribe**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/9.png" style={{width:1000, height:'auto'}}/></div>

Thingが登録されると、Thingの詳細ページにリダイレクトされ、Thingの情報を確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/10.png" style={{width:1000, height:'auto'}}/></div>

デバイス（この場合はXIAO_ESP32C6）を設定して、Thingを作成した際にダウンロードした証明書と秘密鍵を使用します。AWS IoT SDKを設定し、AWS IoT Coreへの安全な接続を確立するための具体的なデバイスの指示に従う必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/11.png" style={{width:600, height:'auto'}}/></div>

Thingが設定され、AWS IoT Coreに接続されたら、トピックの購読、メッセージの公開、AWS IoT Coreルールエンジンを使用したIoTデータの処理を行うことができます。

証明書と鍵を機密に保ち、セキュリティのベストプラクティスに従うことを忘れないでください。AWS IoT Coreのドキュメントには、IoTデバイスの設定と管理に関する詳細なガイドとチュートリアルが記載されています。

### ステップ2. 証明書に基づくヘッダーの準備

**secrets.h**という新しいヘッダーファイルを作成し、以下のコードテンプレートをヘッダーファイルに貼り付けてください。

```cpp
#include <pgmspace.h>

#define SECRET
#define THINGNAME "DHTsensor"

const char WIFI_SSID[] = "YOUR_SSID";              //変更してください
const char WIFI_PASSWORD[] = "YOUR_PASSWORD";           //変更してください
const char AWS_IOT_ENDPOINT[] = "YOUR_AWS_IOT_ENDPOINT";       //変更してください

// Amazon Root CA 1
static const char AWS_CERT_CA[] PROGMEM = R"EOF(
-----BEGIN CERTIFICATE-----

-----END CERTIFICATE-----
)EOF";

// デバイス証明書                                               //変更してください
static const char AWS_CERT_CRT[] PROGMEM = R"KEY(
-----BEGIN CERTIFICATE-----

-----END CERTIFICATE-----


)KEY";

// デバイス秘密鍵                                               //変更してください
static const char AWS_CERT_PRIVATE[] PROGMEM = R"KEY(
-----BEGIN RSA PRIVATE KEY-----

-----END RSA PRIVATE KEY-----


)KEY";
```

このC++コードテンプレートは、Wi-Fiネットワークに接続し、AWS IoTサービスと通信するIoTデバイス向けに設計されています。このテンプレートには、実際の資格情報と証明書で置き換える必要があるプレースホルダーが含まれています。以下の各部分を埋める方法を説明します：

1. **Wi-Fiの資格情報**:
   - `WIFI_SSID`: `"YOUR_SSID"`をWi-FiネットワークのSSID（名前）に置き換えてください。
   - `WIFI_PASSWORD`: `"YOUR_PASSWORD"`をWi-Fiネットワークのパスワードに置き換えてください。

2. **AWS IoTエンドポイント**:
   - `AWS_IOT_ENDPOINT`: `"YOUR_AWS_IOT_ENDPOINT"`をあなたのAWS IoTアカウントとリージョンに固有のAWS IoTエンドポイントに置き換えてください。このエンドポイントはAWS IoTコンソールの設定で確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/12.png" style={{width:1000, height:'auto'}}/></div>

3. **Amazon Root CA 1 (認証局)**:
   - `AWS_CERT_CA`: `-----BEGIN CERTIFICATE-----` と `-----END CERTIFICATE-----` の間に、AWS が提供する Amazon Root CA 1 証明書全体を貼り付けます。この証明書は、デバイスがサーバーのアイデンティティを信頼できるようにします。

4. **デバイス証明書**:
   - `AWS_CERT_CRT`: `-----BEGIN CERTIFICATE-----` と `-----END CERTIFICATE-----` の間のプレースホルダーを、デバイス固有の PEM 形式の証明書に置き換えます。この証明書はデバイス固有であり、AWS IoT との認証に使用されます。

5. **デバイス秘密鍵**:
   - `AWS_CERT_PRIVATE`: `-----BEGIN RSA PRIVATE KEY-----` と `-----END RSA PRIVATE KEY-----` の間に、デバイスの秘密鍵を PEM 形式で貼り付けます。この鍵は秘密に保つ必要があり、AWS IoT と通信する際にデバイスのアイデンティティを証明するために使用されます。

:::caution
**Amazon Root CA 1** は、**RSA 2048 ビットキー: Amazon Root CA 1** のダウンロードファイル情報に対応します。  
**デバイス証明書** は、**デバイス証明書** のダウンロードファイル情報に対応します。  
**デバイス秘密鍵** は、**秘密鍵ファイル** のダウンロードファイル情報に対応します。

このコードには、Wi-Fi の認証情報や秘密鍵などの機密情報が含まれているため、セキュリティを確保することが重要です。修正したコードを公開したり、公開リポジトリにコミットしたりしないでください。
:::

### ステップ 3. XIAO ESP32C6 用データ取得プログラムのアップロード

Grove DHT20 センサーを XIAO ESP32C6 の IIC インターフェースに接続してください。利便性を求める場合は、[Grove Base for XIAO](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html) の購入をお勧めします。

次に、Arduino で新しいプロジェクトを作成し、ローカルに保存してください。**ステップ 2** で作成した **secrets.h** ファイルを .ino ファイルと同じディレクトリにコピーします。その後、以下のコードを XIAO ESP32C6 にアップロードしてください。このコードは、提供された AWS 認証情報に基づいて MQTT を介して指定されたトピックにデータを送信します。

<details>
<summary>完全なコードをプレビューするにはここをクリック</summary>

```cpp
#include "secrets.h"
#include <WiFiClientSecure.h>
#include <PubSubClient.h>
#include <ArduinoJson.h>
#include "WiFi.h"
#include "Wire.h"

// DHT センサーの設定
#include "DHT.h"
#define DHTTYPE DHT20   // DHT 20
/*注意: DHT10 と DHT20 は他の DHT* センサーとは異なり、ワイヤー1本ではなく i2c インターフェースを使用します*/
/*そのため、ピンを定義する必要はありません。*/
DHT dht(DHTTYPE);         // DHT10 および DHT20 はピンを定義する必要がありません

// MQTT の設定
#define AWS_IOT_PUBLISH_TOPIC   "xiao_esp32c6/pub"
#define AWS_IOT_SUBSCRIBE_TOPIC "xiao_esp32c6/sub"

// 温度と湿度データの保存
float h;
float t;

// ネットワーク設定
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
 
  Serial.println("Wi-Fi に接続中");
 
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(500);
    Serial.print(".");
  }
 
  // WiFiClientSecure を AWS IoT デバイス認証情報を使用するように設定
  net.setCACert(AWS_CERT_CA);
  net.setCertificate(AWS_CERT_CRT);
  net.setPrivateKey(AWS_CERT_PRIVATE);
 
  // 以前に定義した AWS エンドポイントで MQTT ブローカーに接続
  client.setServer(AWS_IOT_ENDPOINT, 8883);
 
  // メッセージハンドラーを作成
  client.setCallback(messageHandler);
 
  Serial.println("AWS IoT に接続中");
 
  while (!client.connect(THINGNAME))
  {
    Serial.print(".");
    delay(100);
  }
 
  if (!client.connected())
  {
    Serial.println("AWS IoT タイムアウト!");
    return;
  }
 
  // トピックを購読
  client.subscribe(AWS_IOT_SUBSCRIBE_TOPIC);
 
  Serial.println("AWS IoT に接続しました!");
}

void publishMessage()
{
  StaticJsonDocument<200> doc;
  doc["humidity"] = h;
  doc["temperature"] = t;
  char jsonBuffer[512];
  serializeJson(doc, jsonBuffer); // クライアントに出力
 
  client.publish(AWS_IOT_PUBLISH_TOPIC, jsonBuffer);
}
 
void messageHandler(char* topic, byte* payload, unsigned int length)
{
  Serial.print("受信: ");
  Serial.println(topic);
 
  StaticJsonDocument<200> doc;
  deserializeJson(doc, payload);
  const char* message = doc["message"];
  Serial.println(message);
}

void setup() {

    debug.begin(115200);
    debug.println("DHTxx テスト!");
    Wire.begin();

    connectAWS();
    dht.begin();
}

void loop() {
    h = dht.readHumidity();
    t = dht.readTemperature();

    if (isnan(h) || isnan(t))  // 読み取りに失敗した場合は早期終了（再試行のため）
    {
      Serial.println(F("DHT センサーからの読み取りに失敗しました!"));
      return;
    }
  
    Serial.print(F("湿度: "));
    Serial.print(h);
    Serial.print(F("%  温度: "));
    Serial.print(t);
    Serial.println(F("°C "));
  
    publishMessage();
    client.loop();
    delay(1000);
}
```
</details>

### ステップ 4. MQTT テストクライアント

AWS IoT Core で、MQTT テストクライアントを使用して XIAO ESP32C6 が公開したトピックを購読し、センサーのデータがターゲット AWS アカウントに正常にアップロードされているか確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/13.png" style={{width:1000, height:'auto'}}/></div>

プログラムが正常に動作している場合、1 秒ごとに温度と湿度のデータメッセージが表示されるはずです。

```json
{
    "humidity": 58,
    "temperature": 23.6
}
```

## AWS Analytics を使用したデータの保存

収集されたデータは AWS Analytics サービスに転送されます。このサービスは生データを保存するだけでなく、強力なデータ処理および分析ツールを提供します。これらのツールは、収集されたデータから価値ある洞察を抽出するのに役立ちます。

### ステップ 5. AWS IoT Analytics の設定

AWS コンソールで AWS IoT Analytics に移動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/14.png" style={{width:1000, height:'auto'}}/></div>

**AWS IoT Analytics の開始**で、新しく作成したリソースの名前を入力し、サブスクリプションのトピックを入力します。（例: `xiao_esp32c6/pub`）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/15.png" style={{width:1000, height:'auto'}}/></div>

すべてのリソースが作成されるまでしばらく待ちます（約10分程度）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/16.png" style={{width:1000, height:'auto'}}/></div>

### ステップ 6. ルールの作成

AWS IoT Core に戻り、左側のメニューバーで **Message routing** の下にある **Rules** をクリックします。次に **Create rule** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/17.png" style={{width:1000, height:'auto'}}/></div>

ルールの名前を指定し、その目的を識別するためのオプションの説明を入力します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/18.png" style={{width:1000, height:'auto'}}/></div>

AWS IoT SQL 構文を使用してルールクエリステートメントを定義します。このステートメントは、受信した MQTT メッセージをフィルタリングおよび処理するための条件を指定します。ワイルドカード、関数、演算子を使用して特定のトピックに一致させたり、メッセージペイロードからデータを抽出したり、変換を適用したりできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/19.png" style={{width:1000, height:'auto'}}/></div>

ルールアクションのターゲットとして作成した IoT Analytics チャネルを選択します。**Create Role** ボタンをクリックします。コンソールでロールの名前を指定します（例: **XIAO_ESP32C6_Role**）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/20.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/21.png" style={{width:1000, height:'auto'}}/></div>

ルールの設定を確認し、**Create Rule** ボタンをクリックしてルールを保存および有効化します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/22.png" style={{width:1000, height:'auto'}}/></div>

ルールが作成されると、定義されたルールクエリステートメントに一致する受信 MQTT メッセージの処理を開始します。ルールがトリガーされるたびにルールアクションが実行され、特定の要件に従ってデータをルーティングおよび処理できます。

AWS IoT では、さまざまなシナリオやデータ処理ニーズに対応するために複数のルールを作成できます。ルールは、IoT デバイスをさまざまな AWS サービスと統合し、強力な IoT アプリケーションを構築するための柔軟でスケーラブルな方法を提供します。

### ステップ 7. センサーデータストリームの保存

AWS IoT Analytics サービスに移動します。AWS IoT Analytics ダッシュボードで、左側のサイドバーにある **Datasets** オプションをクリックします。ダウンロードしたいデータを含むデータセットを見つけ、その名前をクリックしてデータセット詳細ページを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/25.png" style={{width:1000, height:'auto'}}/></div>

データセットの内容をダウンロードする前に、データセット生成を手動でトリガーする必要があります。**Run now** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/26.png" style={{width:1000, height:'auto'}}/></div>

AWS IoT Analytics はデータを処理し、指定された時間範囲に基づいてデータセットの内容を準備します。センサーが1秒ごとにデータを報告する場合、通常の環境ではデータ収集時間を少なくとも1時間以上に設定することをお勧めします。これによりデータの精度が確保されます。

データセット生成が完了するまで待ちます。データセット詳細ページで進行状況を監視できます。ステータスが「SUCCEEDED」に変更されると、データセットの内容がダウンロード可能になります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/28.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/23.png" style={{width:1000, height:'auto'}}/></div>

:::tip
XIAO のプログラムが正常に動作しているにもかかわらず、データセットにデータ情報が表示されない場合は、データセットのタブを右クリックして新しいブラウザページで開くことで問題が解決する可能性があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/27.png" style={{width:500, height:'auto'}}/></div>

データセット詳細ページでは、データセットの名前、ステータス、最終更新時間などの情報が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/24.png" style={{width:1000, height:'auto'}}/></div>
:::

## AWS Sagemakerを使用して通常環境でデータをトレーニングする

AWS Sagemakerを使用して、通常環境を示すパターンを認識する機械学習モデルをトレーニングします。Sagemakerは、機械学習モデルの開発、トレーニング、デプロイを容易にする包括的なプラットフォームを提供し、環境データのインテリジェントな処理を可能にします。

### ステップ 8. 新しいノートブックインスタンスを作成する

AWS Management ConsoleでAmazon SageMakerサービスに移動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/29.png" style={{width:1000, height:'auto'}}/></div>

SageMakerダッシュボードで**Notebook instances**をクリックします。**Create notebook instance**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/30.png" style={{width:1000, height:'auto'}}/></div>

インスタンスタイプやIAMロールなどの必要な情報を入力します。IAMロールが**データが保存されているS3バケットにアクセスするための必要な権限**を持っていることを確認してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/34.png" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/31.png" style={{width:1000, height:'auto'}}/></div>

インスタンスのステータスが**InService**になったら、**Open Jupyter**リンクをクリックしてJupyterノートブックインターフェースを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/32.png" style={{width:1000, height:'auto'}}/></div>

開いたら、コード環境として**conda_python3**を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/45.png" style={{width:1000, height:'auto'}}/></div>

次に、収集したデータセットをアップロードする必要があります。このデータセットは**ステップ7**でローカルコンピュータにダウンロードしたものです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/46.png" style={{width:1000, height:'auto'}}/></div>

その後、Jupyter Notebook内に準備したプログラムを入力することができます。または、提供されたプログラムを直接アップロードすることもできます。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/XIAO_ESP32C6_AWS_DHT20_Project/blob/main/TrainingModel/Jupyter_Notebook.ipynb" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>コードをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

プログラムの最初のセクションを実行して、インポートした収集データが正しいか確認します。コード内のファイル名を自分のファイル名に変更する必要がある場合があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/47.png" style={{width:600, height:'auto'}}/></div>

### ステップ 9: Jupyter Notebookをすべて実行する

S3はトレーニングデータセット、テストデータセット、モデルアーティファクトなどを保存するために使用されます。SageMakerでは、データソースは通常S3バケットから提供されます。
モデル保存: トレーニングされたモデルは、後続のデプロイと推論のためにS3に保存されます。

次に、2番目のコードブロックをコピーしてフィールド名を**bucket_name**に設定してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/48.png" style={{width:600, height:'auto'}}/></div>

その後、Jupyter Notebook内のブロックを1つずつ実行してください。

:::note
Jupyter Notebook内のいくつかのパスや名前を以下のように変更する必要があります。

1. **In[22]**コードブロック内の**ENDPOINT_NAME**の値は、**In[19]**コードブロックを実行した後の結果です。
2. **In[3]**および**In[10]**コードブロックの**bucket_name**を同じ名前に設定してください。
3. 最後のコードブロックの**API_ENDPOINT**には、自分の値を使用してください。
:::

### ステップ 10. AWS Lambdaを設定する

LambdaはSageMakerワークフローのトリガーとして使用できます。例えば、データがS3にアップロードされた際に、Lambda関数をトリガーしてSageMakerのトレーニングまたは処理ジョブを開始することができます。

AWS Management Consoleにサインインし、AWS Lambdaサービスに移動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/37.png" style={{width:1000, height:'auto'}}/></div>

**Create function**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/38.png" style={{width:1000, height:'auto'}}/></div>

**Author from scratch**オプションを選択します。Lambda関数の名前を指定します（例: **XIAO-ESP32C6-FUNCTION**）。
希望するランタイム**Python3.9**を選択します。Lambda関数の実行ロールを選択します。新しいロールを作成するか、既存のロールを使用することができます。新しいロールを作成する場合は、**Create a new role with basic Lambda permissions**を選択してください。**Create function**ボタンをクリックしてLambda関数を作成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/39.png" style={{width:1000, height:'auto'}}/></div>

IAM（Identity and Access Management）コンソールに移動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/40.png" style={{width:1000, height:'auto'}}/></div>

次に、先ほど作成した Lambda 関数の名前を見つけてクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/41.png" style={{width:1000, height:'auto'}}/></div>

IAM ロールのページで、**Attach policies** ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/42.png" style={{width:1000, height:'auto'}}/></div>

ポリシーに名前を付けます（例: **AmazonSageMakerFullAccess**）。**Add permissions** ボタンをクリックして権限を追加します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/43.png" style={{width:1000, height:'auto'}}/></div>

Lambda 関数の設定ページに戻ります。新しいテストイベントを作成するか、既存のものを使用します。テストイベントを使用して Lambda 関数を呼び出し、正常に実行されることを確認します。Lambda 関数の実行ログと出力を監視して、その動作を検証します。

```
{"data": [62.93016434, 24.31583405]}
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/44.png" style={{width:1000, height:'auto'}}/></div>

[以下のスニペット](https://github.com/Seeed-Projects/XIAO_ESP32C6_AWS_DHT20_Project/blob/main/TrainingModel/Lambda.ipynb)を **Code** にコピーします。

```python
# SNS を使用した Lambda 関数
import boto3
import json

ENDPOINT_NAME = 'randomcutforest-2024-03-18-10-47-37-165'# ここにエンドポイントを入力
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
                TopicArn='arn:aws:sns:us-east-1:381491976713:dhco2Topic2',# ここに SNS トピックを入力
                Message='環境データが異常です',
                Subject='環境ステータス'
            )
    except Exception as e:
        print(f"エラー: {e}")

    return inference
```

:::caution
コード内の内容を自分の環境に合わせて修正することを忘れないでください。
:::

その後、**Deploy** ボタンをクリックします。

### 追加の考慮事項

- SageMaker が S3 内のデータにアクセスできるように、正しい IAM ロールとポリシーが設定されていることを確認してください。
- SageMaker の自動モデルチューニングを使用して、モデルの最適なバージョンを見つけることを検討してください。
- モデルのトレーニングやエンドポイントのデプロイには、使用する計算リソースに応じて多額の費用が発生する可能性があるため、コストを追跡してください。

AWS サービスのインターフェースや機能は頻繁に更新されるため、最新の AWS ドキュメントを参照して詳細な手順やベストプラクティスを確認してください。

## 異常状態メッセージ通知

異常状態が検出されると、システムは即座にメッセージ通知メカニズムを通じてメンテナンス担当者にアラートを送信し、迅速な介入と必要な対応を確保します。

### ステップ11. Amazon SNSの設定

Amazon SNSサービスに移動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/49.png" style={{width:1000, height:'auto'}}/></div>

**Create topic**ボタンをクリックします。トピックに名前を付けます（例: "XIAO_ESP32C6_Topic"）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/50.png" style={{width:1000, height:'auto'}}/></div>

SNSトピックダッシュボードで、新しく作成したトピックをクリックします。**Create subscription**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/51.png" style={{width:1000, height:'auto'}}/></div>

サブスクリプションのプロトコルを選択します（例: "Email", "SMS", "HTTP/HTTPS", "AWS Lambda", "Amazon SQS"）。

選択したプロトコルに基づいてエンドポイントの詳細を入力します。例:

- Emailサブスクリプションの場合、メールアドレスを入力します。
- SMSサブスクリプションの場合、電話番号を入力します。
- HTTP/HTTPSサブスクリプションの場合、URLエンドポイントを入力します。
- AWS Lambdaサブスクリプションの場合、Lambda関数を選択します。
- Amazon SQSサブスクリプションの場合、SQSキューを選択します。

**Create subscription**ボタンをクリックしてサブスクリプションを作成します。必要に応じて、ステップ2～5を繰り返してトピックにさらにサブスクリプションを追加します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/52.png" style={{width:1000, height:'auto'}}/></div>

その後、Lambdaのコードに戻り、コード内の**TopicArn**フィールドをSNSの**ARNフィールド**に置き換えます。

### ステップ12. LambdaにSNSの権限を付与

IAM（Identity and Access Management）コンソールに移動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/40.png" style={{width:1000, height:'auto'}}/></div>

先ほど作成したLambda関数の名前を見つけてクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/41.png" style={{width:1000, height:'auto'}}/></div>

IAMロールページで、**Attach policies**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/42.png" style={{width:1000, height:'auto'}}/></div>

ポリシーに名前を付けます（例: **AmazonSNSFullAccess**）。**Add permissions**ボタンをクリックして権限を追加します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/53.png" style={{width:1000, height:'auto'}}/></div>

### ステップ13. API Gatewayの設定

AWS Management ConsoleでAmazon API Gatewayサービスに移動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/54.png" style={{width:1000, height:'auto'}}/></div>

**Create API**ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/55.png" style={{width:1000, height:'auto'}}/></div>

APIタイプとして**REST API**を選択し、**Build**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/56.png" style={{width:1000, height:'auto'}}/></div>

APIに名前を付けます（例: "XIAO_ESP32C6_API"）。APIのエンドポイントタイプとして**Regional**を選択します。**Create API**ボタンをクリックしてREST APIを作成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/57.png" style={{width:1000, height:'auto'}}/></div>

API Gatewayダッシュボードで、新しく作成したAPIを選択します。**Create Resource**を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/58.png" style={{width:1000, height:'auto'}}/></div>

リソースに名前を付けます（例: "XIAO_ESP32C6_Resource"）。**Create Resource**ボタンをクリックしてリソースを作成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/59.png" style={{width:1000, height:'auto'}}/></div>

新しく作成したリソースを選択し、**Create Method**を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/60.png" style={{width:1000, height:'auto'}}/></div>

ドロップダウンリストからHTTPメソッドとして**POST**を選択します。統合タイプとして**Lambda Function**を選択します。Lambda関数が存在するリージョンを選択します。Lambda関数の名前を入力します（例: "XIAO_ESP32C6_Function"）。**Create method**ボタンをクリックして統合設定を保存します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/61.png" style={{width:1000, height:'auto'}}/></div>

**Deploy API**をクリックします。デプロイメントステージ（例: "prod", "dev"）を選択するか、新しいステージを作成します。必要に応じてデプロイメントの説明を入力します。**Deploy**ボタンをクリックしてAPIをデプロイします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/63.png" style={{width:500, height:'auto'}}/></div>

API GatewayダッシュボードでAPIを選択し、「Stages」セクションに移動します。デプロイメントステージを展開し、リソースのPOSTメソッドをクリックします。**Invoke URL**セクションで提供されたURLをコピーします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/64.png" style={{width:1000, height:'auto'}}/></div>

最後に、[api_gatewayコード](https://github.com/Seeed-Projects/XIAO_ESP32C6_AWS_DHT20_Project/blob/main/TrainingModel/api_gateway.ipynb)をSageMaker Jupyter Notebookの最後にコピー＆ペーストします（新しいスニペットを作成）。コード内の**API_ENDPOINT**フィールドを**Invoke URL**に置き換えます。

## XIAO ESP32C6 による異常環境検出

正常な環境のデータモデルが確立されると、XIAO ESP32C6 はセンサーデータを継続的に監視し、潜在的な異常を検出します。この強力なマイクロコントローラーは、データが異常な状況を示した場合に迅速に対応する能力を備えています。

### ステップ 14. XIAO ESP32C6 用リアルタイムデータ報告プログラムのアップロード

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/XIAO_ESP32C6_AWS_DHT20_Project/blob/main/GetResult/GetResult.ino" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>コードをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

以下からプログラムを取得し、コード内の api フィールドをあなたのものに置き換えてください。その後、コンパイルして XIAO ESP32C6 にアップロードします。これでおめでとうございます！ここまでの手順を実行し、プロジェクトの全ステップを無事に完了しました。環境に異常が発生すると、AWS SNS サービスから警告メール通知が送信されます。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>