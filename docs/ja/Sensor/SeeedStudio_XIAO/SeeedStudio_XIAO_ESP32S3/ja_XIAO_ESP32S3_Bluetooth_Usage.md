---
description: Seeed Studio XIAO ESP32S3 における Bluetooth の使用方法。
title: 両バージョンの Bluetooth
keywords:
- esp32s3
- xiao
- ble
- bluetooth
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/xiao_esp32s3_bluetooth
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Seeed Studio XIAO ESP32S3 (Sense) における Bluetooth の使用方法

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/64.jpg" style={{width:700, height:'auto'}}/></div>

Seeed Studio XIAO ESP32S3 は、Bluetooth 5、BLE、および Mesh ネットワークをサポートする強力な開発ボードであり、ワイヤレス接続を必要とする幅広い IoT アプリケーションに最適です。その卓越した RF 性能により、XIAO ESP32S3 はさまざまな距離で信頼性が高く高速なワイヤレス通信を提供でき、短距離および長距離のワイヤレスアプリケーションの両方に対応する汎用性の高いソリューションとなります。このチュートリアルでは、XIAO ESP32S3 の Bluetooth 機能の基本的な特徴に焦点を当て、近くの Bluetooth デバイスをスキャンする方法、Bluetooth 接続を確立する方法、Bluetooth 接続を介してデータを送受信する方法について説明します。

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3</th>
        <th>Seeed Studio XIAO ESP32S3 Sense</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## はじめに

### アンテナの取り付け

XIAO ESP32S3 の前面左下には、独立した「WiFi/BT アンテナコネクタ」があります。WiFi/Bluetooth 信号をより良くするために、パッケージ内のアンテナを取り出し、コネクタに取り付ける必要があります。

アンテナの取り付けには少しコツがあります。直接強く押し込もうとすると、非常に難しく感じ、指が痛くなるでしょう！アンテナを正しく取り付ける方法は、まずアンテナコネクタの片側をコネクタブロックに差し込み、次にもう片側を少し押し込むことで、アンテナが取り付けられます。

アンテナを取り外す場合も同様です。アンテナを直接力任せに引っ張るのではなく、片側を持ち上げるように力を加えると、簡単に取り外すことができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/5.gif" style={{width:500, height:'auto'}}/></div>

:::note
アンテナを取り付けていない場合、Bluetooth 機能を使用できない可能性があります。

条件が整っている場合は、大型の棒状アンテナを使用することをお勧めします。より良い体験が得られるでしょう。
:::

## Bluetooth Low Energy (BLE) の使用

Bluetooth Low Energy（略して BLE）は、Bluetooth の省電力バージョンです。BLE の主な用途は、少量のデータ（低帯域幅）を短距離で送信することです。常にオンの状態で動作する Bluetooth とは異なり、BLE は接続が開始される時以外は常にスリープモードにあります。

その特性から、BLE はコイン電池で動作し、定期的に少量のデータを交換する必要があるアプリケーションに適しています。例えば、BLE は医療、フィットネス、トラッキング、ビーコン、セキュリティ、ホームオートメーション業界で非常に役立ちます。

これにより、非常に低い電力消費を実現します。BLE は Bluetooth に比べて約100倍少ない電力を消費します（使用ケースによります）。

XIAO ESP32S3 の BLE 部分については、以下の3つのセクションでその使用方法を紹介します。

- [いくつかの基本概念](#some-fundamental-concepts) -- BLE プログラムの実行プロセスと考え方を理解するために、BLE で頻繁に使用される可能性のあるいくつかの概念を最初に学びます。
- [BLE スキャナー](#ble-scanner) -- このセクションでは、近くの Bluetooth デバイスを検索し、それらをシリアルモニターに出力する方法を説明します。
- [BLE サーバー/クライアント](#ble-serverclient) -- このセクションでは、XIAO ESP32S3 をサーバーおよびクライアントとして使用し、指定されたデータメッセージを送受信する方法を説明します。また、スマートフォンから XIAO にメッセージを送受信する方法も説明します。
- [BLE センサー データ交換](#ble-sensor-data-exchange) -- チュートリアルの最後のセクションでは、センサーの例を通じて BLE を使用してセンサー データを送信する方法を説明します。

### いくつかの基本概念

#### サーバーとクライアント

Bluetooth Low Energy では、サーバーとクライアントの2種類のデバイスがあります。XIAO ESP32S3 はクライアントまたはサーバーとして動作できます。

サーバーは自分の存在を広告し、他のデバイスに発見されるようにします。そして、クライアントが読み取れるデータを保持します。クライアントは近くのデバイスをスキャンし、目的のサーバーを見つけると接続を確立し、受信データを待ちます。これをポイントツーポイント通信と呼びます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/49.png" style={{width:800, height:'auto'}}/></div>

#### 属性

属性とは、実際にはデータの一部です。各 Bluetooth デバイスはサービスを提供するために使用され、サービスはデータの集合であり、この集合はデータベースと呼ぶことができます。データベース内の各エントリが属性です。ここでは属性をデータエントリと訳します。Bluetooth デバイスをテーブルとして想像すると、テーブル内の各行が属性です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/52.png" style={{width:600, height:'auto'}}/></div>

#### GATT

2つの Bluetooth デバイスが接続を確立すると、通信方法を決定するためのプロトコルが必要です。GATT（Generic Attribute Profile）は、Bluetooth デバイス間でデータがどのように送信されるかを定義するプロトコルです。

GATT プロトコルでは、デバイスの機能とプロパティがサービス、特性、ディスクリプタと呼ばれる構造に整理されます。サービスは、デバイスが提供する関連機能と特徴のセットを表します。各サービスには複数の特性が含まれることがあり、特性はサービスの特定のプロパティや動作（センサーデータや制御コマンドなど）を定義します。各特性には一意の識別子と値があり、通信のために読み取りや書き込みが可能です。ディスクリプタは、特性値の形式やアクセス許可など、特性のメタデータを記述するために使用されます。

GATT プロトコルを使用することで、Bluetooth デバイスはセンサーデータの送信やリモートデバイスの制御など、さまざまなアプリケーションシナリオで通信できます。

#### BLE 特性

ATT（Attribute Protocol）は、属性プロトコルの正式名称です。最終的に ATT は一連の ATT コマンド、つまりリクエストとレスポンスコマンドで構成されます。ATT は Bluetooth の最上位層であり、Bluetooth パケットを最も分析する部分です。

ATT コマンドは正式には ATT PDU（Protocol Data Unit）と呼ばれます。これには4つのカテゴリがあります：読み取り、書き込み、通知、インディケート。これらのコマンドは2種類に分けられます：応答が必要な場合はリクエストが続きます。逆に、ACK（確認応答）のみが必要で応答が不要な場合はリクエストが続きません。

サービスと特性は GATT 層で定義されています。サービス側はサービスを提供し、サービスはデータであり、データは属性です。サービスと特性はデータの論理的な表現であり、ユーザーが見ることができるデータは最終的にサービスと特性に変換されます。

モバイルの視点からサービスと特性がどのように見えるかを見てみましょう。nRF Connect は、各パケットがどのように見えるべきかを非常に視覚的に示してくれるアプリケーションです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/62.png" style={{width:400, height:'auto'}}/></div>

ご覧のとおり、Bluetooth 仕様では、各特定の Bluetooth アプリケーションは複数のサービスで構成され、各サービスは複数の特性で構成されています。特性は UUID、プロパティ、および値で構成されています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/50.png" style={{width:300, height:'auto'}}/></div>

プロパティは、特性に対する操作の種類と許可を記述するために使用されます。例えば、読み取り、書き込み、通知をサポートするかどうかなどです。これは ATT PDU に含まれる4つのカテゴリに似ています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/51.png" style={{width:800, height:'auto'}}/></div>

#### UUID

各サービス、特性、ディスクリプタには UUID（Universally Unique Identifier）が存在します。UUID は一意の128ビット（16バイト）の番号です。例えば：

```
ea094cbd-3695-4205-b32d-70c1dea93c35
```

すべてのタイプ、サービス、およびプロファイルに対して、[SIG (Bluetooth Special Interest Group)](https://www.bluetooth.com/specifications/gatt/services) によって指定された短縮UUIDがあります。しかし、アプリケーションが独自のUUIDを必要とする場合、この[UUID生成ウェブサイト](https://www.uuidgenerator.net/)を使用して生成することができます。

### BLEスキャナー

XIAO ESP32S3 BLEスキャナーを作成するのは簡単です。以下はスキャナーを作成するためのサンプルプログラムです。

```cpp
#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLEScan.h>
#include <BLEAdvertisedDevice.h>

int scanTime = 5; // 秒単位
BLEScan* pBLEScan;

class MyAdvertisedDeviceCallbacks: public BLEAdvertisedDeviceCallbacks {
    void onResult(BLEAdvertisedDevice advertisedDevice) {
      Serial.printf("Advertised Device: %s \n", advertisedDevice.toString().c_str());
    }
};

void setup() {
  Serial.begin(115200);
  Serial.println("Scanning...");

  BLEDevice::init("");
  pBLEScan = BLEDevice::getScan(); // 新しいスキャンを作成
  pBLEScan->setAdvertisedDeviceCallbacks(new MyAdvertisedDeviceCallbacks());
  pBLEScan->setActiveScan(true); // アクティブスキャンは電力を多く消費しますが、結果をより早く取得できます
  pBLEScan->setInterval(100);
  pBLEScan->setWindow(99);  // setInterval値以下または同等
}

void loop() {
  // メインコードをここに記述し、繰り返し実行します
  BLEScanResults foundDevices = pBLEScan->start(scanTime, false);
  Serial.print("Devices found: ");
  Serial.println(foundDevices.getCount());
  Serial.println("Scan done!");
  pBLEScan->clearResults();   // BLEScanバッファから結果を削除してメモリを解放
  delay(10000);
}
```

:::tip
ESP32開発ボードをバージョン3.0.0以上にアップグレードしている場合、互換性を保つためにコードを一部変更する必要があります。
1. ```BLEScanResults foundDevices = pBLEScan->start(scanTime, false);``` を ```BLEScanResults* foundDevices = pBLEScan->start(scanTime, false);``` に変更
2. ```Serial.println(foundDevices.getCount());``` を ```Serial.println(foundDevices->getCount());``` に変更
:::

次に、XIAO ESP32S3マザーボードを選択してプログラムをアップロードします。プログラムが正常に動作すれば、シリアルモニターを開き、ボーレートを115200に設定すると、以下のような結果が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/54.png" style={{width:700, height:'auto'}}/></div>

このプログラムは、スキャンされたBluetoothデバイスの名前、MACアドレス、製造データ、および信号を出力します。

#### プログラムの注釈

必要なBLE機能のライブラリをインポートすることから始まります。

次に、`BLEAdvertisedDeviceCallbacks`クラスを継承した`MyAdvertisedDeviceCallbacks`というクラスを定義します。このクラスには、スキャン中に広告されたBluetoothデバイスが見つかったときに呼び出される`onResult`という関数があります。この関数は、`Serial.printf`関数を使用してデバイスの情報をシリアルポートに出力します。このクラスは、スキャン中にBluetoothデバイス情報を処理するために使用できます。

```c
class MyAdvertisedDeviceCallbacks: public BLEAdvertisedDeviceCallbacks {
    void onResult(BLEAdvertisedDevice advertisedDevice) {
      Serial.printf("Advertised Device: %s \n", advertisedDevice.toString().c_str());
    }
};
```

`Setup`関数では、指定されたパラメータ（スキャン間隔やウィンドウ値を含む）でBLEスキャンを設定します。また、BLEデバイスを初期化し、スキャン中に見つかった広告デバイスを処理するためのコールバック関数を設定します。

```c
BLEDevice::init("");
pBLEScan = BLEDevice::getScan();
pBLEScan->setAdvertisedDeviceCallbacks(new MyAdvertisedDeviceCallbacks());
pBLEScan->setActiveScan(true);
pBLEScan->setInterval(100);
pBLEScan->setWindow(99);
```

最後に、`loop`関数では、指定されたスキャン時間とブロッキングフラグでBLEスキャンを開始します。その後、見つかったデバイスの数をシリアルポートに出力し、メモリを解放するために結果バッファをクリアします。

```c
BLEScanResults foundDevices = pBLEScan->start(scanTime, false);
Serial.print("Devices found: ");
Serial.println(foundDevices.getCount());
Serial.println("Scan done!");
pBLEScan->clearResults();
```

### BLEサーバー/クライアント

前述のように、XIAO ESP32S3はサーバーとしてもクライアントとしても動作できます。次に、サーバーとしてのプログラムとその使用方法を見てみましょう。以下のプログラムをXIAOにアップロードすると、サーバーとして動作し、接続されたすべてのBluetoothデバイスに「Hello World」メッセージを送信します。

```cpp
// サーバーコード
#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLEServer.h>

#define SERVICE_UUID        "4fafc201-1fb5-459e-8fcc-c5c9c331914b"
#define CHARACTERISTIC_UUID "beb5483e-36e1-4688-b7f5-ea07361b26a8"

void setup() {
  Serial.begin(115200);
  Serial.println("Starting BLE work!");

  BLEDevice::init("XIAO_ESP32S3");
  BLEServer *pServer = BLEDevice::createServer();
  BLEService *pService = pServer->createService(SERVICE_UUID);
  BLECharacteristic *pCharacteristic = pService->createCharacteristic(
                                         CHARACTERISTIC_UUID,
                                         BLECharacteristic::PROPERTY_READ |
                                         BLECharacteristic::PROPERTY_WRITE
                                       );

  pCharacteristic->setValue("Hello World");
  pService->start();
  // BLEAdvertising *pAdvertising = pServer->getAdvertising();  // 後方互換性のためにまだ動作します
  BLEAdvertising *pAdvertising = BLEDevice::getAdvertising();
  pAdvertising->addServiceUUID(SERVICE_UUID);
  pAdvertising->setScanResponse(true);
  pAdvertising->setMinPreferred(0x06);  // iPhone接続問題を解決するための関数
  pAdvertising->setMinPreferred(0x12);
  BLEDevice::startAdvertising();
  Serial.println("Characteristic defined! Now you can read it in your phone!");
}

void loop() {
  // メインコードをここに記述し、繰り返し実行します
  delay(2000);
}
```

同時に、主要なモバイルアプリストアで**nRF Connect**アプリを検索してダウンロードできます。このアプリを使用すると、スマートフォンでBluetoothデバイスを検索して接続できます。

- Android: [nRF Connect](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en)
- IOS: [nRF Connect](https://apps.apple.com/us/app/nrf-connect-for-mobile/id1054362403)

ソフトウェアをダウンロードした後、以下の手順に従って XIAO ESP32S3 を検索して接続します。すると、広告された "Hello World" を確認できます。

<table align="center">
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/55.jpg" style={{width:200, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/56.jpg" style={{width:200, height:'auto'}}/></div></td>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/58.jpg" style={{width:200, height:'auto'}}/></div></td>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/59.jpg" style={{width:200, height:'auto'}}/></div></td>
	</tr>
</table>

別の XIAO ESP32S3 をクライアントとして使用し、サーバーからのメッセージを受信したい場合は、以下の手順をクライアント XIAO に使用できます。

```cpp
// クライアントコード
#include "BLEDevice.h"
//#include "BLEScan.h"

// 接続したいリモートサービスのUUID
static BLEUUID serviceUUID("4fafc201-1fb5-459e-8fcc-c5c9c331914b");
// 関心のあるリモートサービスの特性UUID
static BLEUUID    charUUID("beb5483e-36e1-4688-b7f5-ea07361b26a8");

static boolean doConnect = false;
static boolean connected = false;
static boolean doScan = false;
static BLERemoteCharacteristic* pRemoteCharacteristic;
static BLEAdvertisedDevice* myDevice;

static void notifyCallback(
  BLERemoteCharacteristic* pBLERemoteCharacteristic,
  uint8_t* pData,
  size_t length,
  bool isNotify) {
    Serial.print("特性の通知コールバック ");
    Serial.print(pBLERemoteCharacteristic->getUUID().toString().c_str());
    Serial.print(" データ長 ");
    Serial.println(length);
    Serial.print("データ: ");
    Serial.write(pData, length);
    Serial.println();
}

class MyClientCallback : public BLEClientCallbacks {
  void onConnect(BLEClient* pclient) {
  }

  void onDisconnect(BLEClient* pclient) {
    connected = false;
    Serial.println("切断されました");
  }
};

bool connectToServer() {
    Serial.print("接続を形成中 ");
    Serial.println(myDevice->getAddress().toString().c_str());
    
    BLEClient*  pClient  = BLEDevice::createClient();
    Serial.println(" - クライアントを作成しました");

    pClient->setClientCallbacks(new MyClientCallback());

    // リモートBLEサーバーに接続
    pClient->connect(myDevice);  // BLEAdvertisedDeviceを渡すと、ピアデバイスアドレスのタイプ（パブリックまたはプライベート）が認識されます
    Serial.println(" - サーバーに接続しました");
    pClient->setMTU(517); // クライアントがサーバーから最大MTUを要求するように設定（デフォルトは23）

    // リモートBLEサーバー内のサービスへの参照を取得
    BLERemoteService* pRemoteService = pClient->getService(serviceUUID);
    if (pRemoteService == nullptr) {
      Serial.print("サービスUUIDが見つかりませんでした: ");
      Serial.println(serviceUUID.toString().c_str());
      pClient->disconnect();
      return false;
    }
    Serial.println(" - サービスが見つかりました");

    // リモートBLEサーバー内の特性への参照を取得
    pRemoteCharacteristic = pRemoteService->getCharacteristic(charUUID);
    if (pRemoteCharacteristic == nullptr) {
      Serial.print("特性UUIDが見つかりませんでした: ");
      Serial.println(charUUID.toString().c_str());
      pClient->disconnect();
      return false;
    }
    Serial.println(" - 特性が見つかりました");

    // 特性の値を読み取る
    if(pRemoteCharacteristic->canRead()) {
      std::string value = pRemoteCharacteristic->readValue();
      Serial.print("特性の値: ");
      Serial.println(value.c_str());
    }

    if(pRemoteCharacteristic->canNotify())
      pRemoteCharacteristic->registerForNotify(notifyCallback);

    connected = true;
    return true;
}
/**
 * BLEサーバーをスキャンし、目的のサービスを広告している最初のサーバーを見つけます。
 */
class MyAdvertisedDeviceCallbacks: public BLEAdvertisedDeviceCallbacks {
 /**
   * 各広告BLEサーバーに対して呼び出されます。
   */
  void onResult(BLEAdvertisedDevice advertisedDevice) {
    Serial.print("BLE広告デバイスが見つかりました: ");
    Serial.println(advertisedDevice.toString().c_str());

    // デバイスが目的のサービスを含んでいるか確認
    if (advertisedDevice.haveServiceUUID() && advertisedDevice.isAdvertisingService(serviceUUID)) {

      BLEDevice::getScan()->stop();
      myDevice = new BLEAdvertisedDevice(advertisedDevice);
      doConnect = true;
      doScan = true;

    } // サーバーが見つかりました
  } // onResult
}; // MyAdvertisedDeviceCallbacks

void setup() {
  Serial.begin(115200);
  Serial.println("Arduino BLEクライアントアプリケーションを開始...");
  BLEDevice::init("");

  // スキャナーを取得し、新しいデバイスを検出したときに使用するコールバックを設定
  // アクティブスキャンを指定し、スキャンを5秒間実行
  BLEScan* pBLEScan = BLEDevice::getScan();
  pBLEScan->setAdvertisedDeviceCallbacks(new MyAdvertisedDeviceCallbacks());
  pBLEScan->setInterval(1349);
  pBLEScan->setWindow(449);
  pBLEScan->setActiveScan(true);
  pBLEScan->start(5, false);
} // setupの終了

// Arduinoのメインループ関数
void loop() {
  // "doConnect"フラグがtrueの場合、目的のBLEサーバーをスキャンして見つけ、接続します。
  // 接続後、connectedフラグをtrueに設定します。
  if (doConnect == true) {
    if (connectToServer()) {
      Serial.println("BLEサーバーに接続しました。");
    } else {
      Serial.println("サーバーへの接続に失敗しました。これ以上行うことはありません。");
    }
    doConnect = false;
  }

  // ピアBLEサーバーに接続している場合、起動後の現在の時間で特性を更新
  if (connected) {
    String newValue = "起動後の時間: " + String(millis()/1000);
    Serial.println("新しい特性値を設定: \"" + newValue + "\"");
    
    // 特性の値を文字列のバイト配列に設定
    pRemoteCharacteristic->writeValue(newValue.c_str(), newValue.length());
  }else if(doScan){
    BLEDevice::getScan()->start(0);  // 切断後にスキャンを開始する例（Arduinoでより良い方法がある可能性があります）
  }
  
  delay(1000); // ループ間で1秒遅延
} // loopの終了
```

:::tip
もしESP32開発ボードをバージョン3.0.0以上にアップグレードした場合、一部のコードを互換性のために変更する必要があります。
1.  ```std::string value = pRemoteCharacteristic->readValue();``` を ```String value = pRemoteCharacteristic->readValue();``` に変更してください。
:::

上記のプログラムは、XIAOをクライアントとして動作させ、近くのBluetoothデバイスを検索します。BluetoothデバイスのUUIDが提供したUUIDと一致すると、そのデバイスに接続し、特性値を取得します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/60.png" style={{width:800, height:'auto'}}/></div>

#### プログラムの注釈

BLEサーバーのサンプルコードがどのように動作するかを簡単に見てみましょう。まず、BLE機能に必要なライブラリをインポートします。その後、サービスと特性のUUIDを定義する必要があります。

```c
#define SERVICE_UUID "4fafc201-1fb5-459e-8fcc-c5c9c331914b"
#define CHARACTERISTIC_UUID "beb5483e-36e1-4688-b7f5-ea07361b26a8"
```

デフォルトのUUIDをそのまま使用することもできますし、[uuidgenerator.net](https://www.uuidgenerator.net/)でランダムなUUIDを生成してサービスや特性に使用することもできます。

次に、「XIAO_ESP32S3」という名前のBLEデバイスを作成します。この名前は自由に変更可能です。その後、BLEデバイスをサーバーとして設定します。その後、先ほど定義したUUIDを使用してBLEサーバーのサービスを作成します。

```c
BLEServer *pServer = BLEDevice::createServer();
BLEService *pService = pServer->createService(SERVICE_UUID);
```

次に、そのサービスの特性を設定します。ここでも先ほど定義したUUIDを使用し、特性のプロパティを引数として渡す必要があります。この場合、プロパティはREADとWRITEです。

```c
BLECharacteristic *pCharacteristic = pService->createCharacteristic(
                                     CHARACTERISTIC_UUID,
                                     BLECharacteristic::PROPERTY_READ |
                                     BLECharacteristic::PROPERTY_WRITE
                                     );
```

特性を作成した後、`setValue()`メソッドを使用してその値を設定できます。この例では、値を「Hello World」というテキストに設定しています。このテキストは自由に変更可能です。将来のプロジェクトでは、このテキストをセンサーの読み取り値やランプの状態などに置き換えることができます。

最後に、サービスとアドバタイジングを開始します。これにより、他のBLEデバイスがこのBLEデバイスをスキャンして見つけることができます。

```c
BLEAdvertising *pAdvertising = pServer->getAdvertising();
pAdvertising->start();
```

これはBLEサーバーを作成するための簡単な例です。このコードでは`loop()`内で何も行われていませんが、新しいクライアントが接続したときに何が起こるかを追加することができます（`BLE_notify`の例を参考にしてください）。

### BLEセンサーデータ交換

次に、実際のケースを完成させます。このケースでは、XIAO ESP32S3が光強度センサーに接続し、Bluetoothを介して光センサーの値を別のXIAO ESP32S3に送信し、拡張ボードの画面に表示します。

配線の利便性のために、2つのXIAO拡張ボードを使用します。このサンプルプログラムは参考用であり、実際のプロジェクトのニーズに応じて製品を選択できます。

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO ESP32S3</th>
	    <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>Seeed Studio Expansion Base for XIAO with Grove OLED</th>
        <th>Grove - Digital Light Sensor - TSL2561</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:200, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:200, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:200, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/img/hardware%20overview.jpg" style={{width:180, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Digital-Light-Sensor-TSL2561.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

上記のハードウェア準備に加えて、以下のライブラリを準備し、Arduino IDE環境にダウンロードして追加する必要があります。

- **OLEDディスプレイ用ライブラリ u8g2**:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/olikraus/U8g2_Arduino" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br></br>

- **Grove - デジタル光センサー - TSL2561 ライブラリ**:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Grove_Digital_Light_Sensor" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br></br>

2つのXIAOを準備する必要があります。一方はサーバーとして、もう一方はクライアントとして使用します。以下はサーバーとしてのサンプルプログラムです。サーバーとしてのXIAOは以下の主要なタスクを持っています。
- まず、光センサーからリアルタイムの値を取得する。
- 次に、Bluetoothサーバーを作成する。
- その後、Bluetoothを介して光強度の値を広告する。
- 最後に、リアルタイムの光強度を表示し、送信する。

```c
// サーバー
#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLE2902.h>
#include <BLEServer.h>
#include <Wire.h>
#include <Digital_Light_TSL2561.h>
#include <Arduino.h>
#include <U8x8lib.h>
#include <Wire.h>

// リセットなしのOLEDディスプレイ
U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);

// BLEサーバー名（サーバースケッチを実行している他のESP32の名前）
#define bleServerName "XIAOESP32S3_BLE"

BLECharacteristic *pCharacteristic;
bool deviceConnected = false;

int light_val = 0;

class MyServerCallbacks: public BLEServerCallbacks {
  void onConnect(BLEServer* pServer) {
    deviceConnected = true;
  };
  
  void onDisconnect(BLEServer* pServer) {
    deviceConnected = false;
  }
};

void setup() {
  Serial.begin(115200);
  
  // OLEDディスプレイのセットアップ
  u8x8.begin();
  u8x8.setFlipMode(1);

  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.drawString(0, 3, "Starting...");

  Wire.begin();
  TSL2561.init();
  
  BLEDevice::init(bleServerName);
  BLEServer *pServer = BLEDevice::createServer();
  pServer->setCallbacks(new MyServerCallbacks());
  
  BLEService *pService = pServer->createService(BLEUUID((uint16_t)0x181A)); // 環境センサー
  pCharacteristic = pService->createCharacteristic(
    BLEUUID((uint16_t)0x2A59), // アナログ出力
    BLECharacteristic::PROPERTY_NOTIFY
  );
  pCharacteristic->addDescriptor(new BLE2902());
  
  pService->start();
  BLEAdvertising *pAdvertising = BLEDevice::getAdvertising();
  pAdvertising->addServiceUUID(pService->getUUID());
  pAdvertising->setScanResponse(true);
  pAdvertising->setMinPreferred(0x0);
  pAdvertising->setMinPreferred(0x1F);
  BLEDevice::startAdvertising();
  u8x8.clearDisplay();
}

void loop() {
  if (deviceConnected) {
    light_val = TSL2561.readVisibleLux();
    pCharacteristic->setValue(light_val);
    pCharacteristic->notify();
    u8x8.setFont(u8x8_font_chroma48medium8_r);
    u8x8.setCursor(0, 0);
    u8x8.print("Light Value:");
    u8x8.clearLine(2);
    u8x8.setCursor(0, 2);
    u8x8.print(light_val);
    u8x8.drawString(0, 4, "Sending...");
    delay(10); // Bluetoothスタックが混雑しないように、パケット送信を制限
  }
}
```

1つのXIAOにプログラムをアップロードした後、プログラムが正常に動作する場合は、スマートフォンを取り出し、nRF Connect APPを使用して**XIAOESP32S3_BLE**という名前のBluetoothデバイスを検索し、接続して以下のボタンをクリックすると、センサーのデータ情報を受信できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/63.jpg" style={{width:300, height:'auto'}}/></div>

ここで、ソフトウェアの操作方法が前の例とは少し異なることに気付くでしょう。一般的にセンサーの種類のメッセージを送信する場合、メッセージの効率を確保するために**notify**プロパティを使用することを選択します。

次に、もう1つのXIAOを取り出し、データを収集して表示するクライアントとして動作させます。

```c
// クライアント
#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLEClient.h>
#include <BLEServer.h>
#include <Arduino.h>
#include <U8x8lib.h>
#include <Wire.h>

// リセットなしのOLEDディスプレイ
U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);

BLEClient*  pClient;
bool doconnect = false;

// BLEサーバー名（サーバースケッチを実行している他のESP32の名前）
#define bleServerName "XIAOESP32S3_BLE"

// 周辺デバイスのアドレス。スキャン中に見つかります...
static BLEAddress *pServerAddress;

BLEUUID serviceUUID("181A"); // 環境センサー
BLEUUID charUUID("2A59");    // アナログ出力

char light_val[1024];

// 他のデバイスの広告が受信されたときに呼び出されるコールバック関数
class MyAdvertisedDeviceCallbacks: public BLEAdvertisedDeviceCallbacks {
  void onResult(BLEAdvertisedDevice advertisedDevice) {
    if (advertisedDevice.getName() == bleServerName) { // 広告主の名前が一致するか確認
      advertisedDevice.getScan()->stop(); // スキャンを停止、目的のデバイスを発見
      pServerAddress = new BLEAddress(advertisedDevice.getAddress()); // 広告主のアドレスを取得
      Serial.println("Device found. Connecting!");
    }
  }
};

// OLEDディスプレイに最新のセンサー読み取り値を表示する関数
void printReadings(){
  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 0);
  u8x8.print("Light Value:");
  u8x8.drawString(0, 2, light_val);
}

void setup() {
  Serial.begin(115200);
  // OLEDディスプレイのセットアップ
  u8x8.begin();
  u8x8.setFlipMode(1);

  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.drawString(0, 3, "Starting...");
  
  Serial.println("Starting BLE client...");

  BLEDevice::init("XIAOESP32S3_Client");

  // スキャナーを取得し、新しいデバイスを検出したときに通知するコールバックを設定。
  // アクティブスキャンを指定し、30秒間スキャンを開始。
  BLEScan* pBLEScan = BLEDevice::getScan();
  pBLEScan->setAdvertisedDeviceCallbacks(new MyAdvertisedDeviceCallbacks());
  pBLEScan->setActiveScan(true);
  pBLEScan->start(30);

  pClient = BLEDevice::createClient();
  // リモートBLEサーバーに接続。
  pClient->connect(*pServerAddress);
  Serial.println(" - Connected to server");

  // リモートBLEサーバー内の目的のサービスへの参照を取得。
  BLERemoteService* pRemoteService = pClient->getService(serviceUUID);
  if (pRemoteService == nullptr) {
    u8x8.clearDisplay();
    u8x8.drawString(0, 3, "False UUID");
    Serial.print("Failed to find our service UUID: ");
    Serial.println(serviceUUID.toString().c_str());
    return;
  }

  // リモートBLEサーバー内のサービスの特性への参照を取得。
  BLERemoteCharacteristic* pCharacteristic = pRemoteService->getCharacteristic(charUUID);
  if (pCharacteristic == nullptr) {
    u8x8.clearDisplay();
    u8x8.drawString(0, 3, "False UUID");
    Serial.print("Failed to find our characteristic UUID");
    return;
  }
  Serial.println(" - Found light value characteristics");
  u8x8.clearDisplay();
  u8x8.drawString(0, 3, "Connected!");
  
  pCharacteristic->registerForNotify([](BLERemoteCharacteristic* pBLERemoteCharacteristic, uint8_t* pData, size_t length, bool isNotify) {
    Serial.println("Notify received");
    Serial.print("Value: ");
    Serial.println(*pData);
    snprintf(light_val, sizeof(light_val), "%d", *pData);
  });

  doconnect = true;
  u8x8.clearDisplay();
  u8x8.drawString(0, 4, "Receiving...");
}

void loop() {
  if (doconnect) {
    BLERemoteService* pRemoteService = pClient->getService(serviceUUID);
    BLERemoteCharacteristic* pCharacteristic = pRemoteService->getCharacteristic(charUUID);
    pCharacteristic->registerForNotify([](BLERemoteCharacteristic* pBLERemoteCharacteristic, uint8_t* pData, size_t length, bool isNotify) {
      Serial.println("Notify received");
      Serial.print("Value: ");
      Serial.println(*pData);
      snprintf(light_val, sizeof(light_val), "%d", *pData);
    });
  }
  printReadings();
  delay(1000);
  u8x8.clearLine(2);
}
```

上記の例を使用する際は、まずサーバープログラムをアップロードし、正常に動作していることを確認してからクライアントプログラムを使用することをお勧めします。プログラムが正常に動作すると、以下の結果が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/65.gif" style={{width:700, height:'auto'}}/></div>

#### プログラムの注釈

上記のプログラムについて、重要な部分を選んで説明します。まずはサーバープログラムから始めます。

プログラムの冒頭で、Bluetoothサーバーの名前を定義します。この名前は任意に設定できますが、後でこの名前を使用してBluetoothデバイスを検索する必要があるため、覚えておく必要があります。

```c
#define bleServerName "XIAOESP32S3_BLE"
```

チュートリアルの前のセクションで説明したように、サーバーの下にはCharacteristicがあり、Characteristicの下には値やその他の内容があります。この原則に従って広告を作成する必要があります。

```c
BLEService *pService = pServer->createService(BLEUUID((uint16_t)0x181A)); // 環境センサー
  pCharacteristic = pService->createCharacteristic(
    BLEUUID((uint16_t)0x2A59), // アナログ出力
    BLECharacteristic::PROPERTY_NOTIFY
  );
  pCharacteristic->addDescriptor(new BLE2902());
```

上記のプログラムでは、`createService()`を使用してサーバーを作成していることがわかります。パラメータは特定のUUIDで、**0x181A**です。GATTの規則では、**0x181A**は環境モニタリングタイプのデータを示し、同じCharacteristicのUUIDである**0x2A59**にも特別な意味があります。GATTでは、これがアナログ出力を示します。これは光センサーの値に適しているため、このように定義しています。GATTが準備している特定のUUIDの意味については[こちら](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/GATT.pdf)を参照してください。

もちろん、GATT標準に従わずにUUIDを設定することもできますが、これらの値がユニークであり、クライアントがこれらのUUIDを認識して値を見つける能力に影響を与えないことを確認する必要があります。[uuidgenerator.net](https://www.uuidgenerator.net/)でサービスやCharacteristic用のランダムなUUIDを作成できます。

`createCharacteristic()`関数の2番目のパラメータはプロパティを設定するためのものです。ここではデータを継続的に送信することを保証するために、**PROPERTY_NOTIFY**に設定する必要があります。

```c
pCharacteristic->setValue(light_val);
pCharacteristic->notify();
```

最後に、`loop`内で光センサーの値を10msごとに広告します。

次はクライアントプログラムです。こちらは少し複雑に見えるかもしれません。

プログラムの冒頭では、サーバー側で設定した内容と一致していることを確認する必要があります。

```c
// BLEサーバー名（サーバースケッチを実行しているもう一方のESP32の名前）
#define bleServerName "XIAOESP32S3_BLE"

BLEUUID serviceUUID("181A"); // 環境センサー
BLEUUID charUUID("2A59");    // アナログ出力
```

次にコールバック関数を書きます。この関数の主な役割は、近くのBluetoothデバイスを検索し、提供されたBluetoothデバイス名と比較して一致するものをキャプチャし、そのMACアドレスを取得することです。

```c
class MyAdvertisedDeviceCallbacks: public BLEAdvertisedDeviceCallbacks {
  void onResult(BLEAdvertisedDevice advertisedDevice) {
    if (advertisedDevice.getName() == bleServerName) { // 広告主の名前が一致するか確認
      advertisedDevice.getScan()->stop(); // スキャンを停止、目的のデバイスを発見
      pServerAddress = new BLEAddress(advertisedDevice.getAddress()); // 広告主のアドレスを取得
      Serial.println("デバイスを発見。接続中！");
    }
  }
};
```

次の手順は、サーバー内の光強度値を見つけるためのキーとなります。まず、サーバーUUIDを見つけ、次にサーバー内のCharacteristicのUUIDを探し、最後に光の値を見つけます。この解析方法はBluetoothのデータ構造と一対一で対応しています。

```c
// リモートBLEサーバー内の目的のサービスへの参照を取得
BLERemoteService* pRemoteService = pClient->getService(serviceUUID);
if (pRemoteService == nullptr) {
  Serial.print("サービスUUIDが見つかりませんでした: ");
  Serial.println(serviceUUID.toString().c_str());
  return;
}

// リモートBLEサーバー内のサービス内のCharacteristicへの参照を取得
BLERemoteCharacteristic* pCharacteristic = pRemoteService->getCharacteristic(charUUID);
if (pCharacteristic == nullptr) {
  Serial.print("Characteristic UUIDが見つかりませんでした");
  return;
}
Serial.println(" - 光値Characteristicを発見");

pCharacteristic->registerForNotify([](BLERemoteCharacteristic* pBLERemoteCharacteristic, uint8_t* pData, size_t length, bool isNotify) {
    Serial.println("通知を受信");
    Serial.print("値: ");
    Serial.println(*pData);
  });
```

最後に、光の値はポインタpDataに格納されます。

:::tip
上記の例は、単一センサーの単一値の最も簡単な例を示しています。複数のセンサーや複数のセンサー値をBluetooth経由で広告したい場合は、以下のチュートリアル例を読むことをお勧めします。

- [ESP32 BLE Server and Client (Bluetooth Low Energy)](https://randomnerdtutorials.com/esp32-ble-server-client/)
:::

## トラブルシューティング

### Q1: XIAO ESP32S3 の例で BletoothSerial が利用できないのはなぜですか？

[ESP32-S3 チップには Bluetooth Classic ハードウェアが搭載されていません](https://github.com/espressif/arduino-esp32/issues/8023)。Bluetooth Classic をサポートしているのは「旧型」の ESP32 のみであり、他の Espressif SoC には BT Classic がありません。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。お客様のご希望やニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>