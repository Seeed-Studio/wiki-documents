---
description: クライアントとサーバーの紹介
title: クライアントとサーバーの紹介
keywords:
- Wio_terminal Bluetooth
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio-terminal-BLE-introduction
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# **クライアントとサーバーの紹介**

この Wiki では、Wio Terminal を使用して BLE を介してクライアントとサーバーが通信する機能について紹介します。

<div align="center"><img width ="{400}" src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/Wio-connect.png"/></div>

## **必要なハードウェア**

- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

:::note
Wio Terminal をお持ちの場合は、[**Bluetooth 概要**](https://wiki.seeedstudio.com/ja/Wio-Terminal-Bluetooth-Overview/)を訪問し、RTL8720 上の最新の BLE ファームウェアを更新し、依存する Arduino ライブラリをダウンロードしてください。
:::

## **概要**

### **クライアントとサーバーとは**

- クライアントはデータ通信のためにサーバーにリクエストを送信し、これによりデバイスが他の Bluetooth デバイスとワイヤレスでデータを交換できるようになります。
- サーバーはクライアントにデータサービスを提供し、特性を通じてデータをカプセル化します。複数の特性がサービスを形成し、サービスは基本的な BLE アプリケーションとなります。
- クライアントとサーバーは通信関係にあり、どちらもマスターまたはスレーブとして機能することができます。

### **UUID とは**

- UUID は、システムまたはネットワーク内で一意である必要がある情報を識別するために一般的に使用されます。
- すべての BLE デバイスにはサービス UUID、特性 UUID、および記述子 UUID があり、製品のすべての UUID は一意である必要があります。繰り返される可能性が低いため、データベース内の関連キーや組織内の物理的なハードウェアの識別子として有用です。

### **Wio Terminal 上の BLE サーバー**

Bluetooth Low Energy を搭載した Wio Terminal は、サーバーまたはクライアントのいずれかとして機能できます。サーバーはその存在を広告し、他のデバイスによって検出されることができ、クライアントが読み取ることができるデータを含んでいます。BLE は、ブロードキャストモードとメッシュネットワークモードの 2 種類のモードをサポートしています。ブロードキャストモードでは、サーバーは接続された複数のクライアントにデータを送信し、メッシュネットワークモードではすべてのデバイスが接続されます。

サーバーとクライアントの両方が「SERVICE UUID」を持ち、サーバーとクライアント間の接続を確立します。このサービス内には、特性 UUID によって定義される複数の「特性」が存在する可能性があります。データを送信するために TX 特性 UUID を使用し、クライアントからデータを受信するために RX 特性 UUID を使用します。Wio Terminal（サーバーとして機能）は、TX 特性 UUID を介してクライアントに「通知」し、データが Wio Terminal に送信され、RX 特性 UUID を介して受信されます。ただし、送信と受信があるため、Wio Terminal 上の TX は実際には Android アプリ上の RX となります。

### **nRF Connect APP の使用方法**

nRF Connect APP は、デバイスの UUID や MAC アドレスが不明な場合に BLE デバイスを検索するために使用されます。また、BLE デバイスと通信することも可能です。

- スマートフォンに [**nRF Connect APP**](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en) をダウンロードしてください。
- BLE デバイスをスキャンします。
- BLE デバイスを見つけて接続すると、UUID と MAC アドレスが表示されます。
- 特性上でデータを送信または受信することができます。

以下は nRF Connect APP によってスキャンされた BLE デバイスです。

<div align="center"><img width ="{400}" src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/nRF-device-scan.png"/></div>

特性上では、上矢印がサーバーにデータを送信することを意味し、下矢印がサーバーからデータを受信することを意味します。

<div align="center"><img width ="{400}" src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/interface.png"/></div>

インターフェースオプションはデバイスの機能に応じています。例えば、私は単純な機能を持つ Wio Terminal（サーバー）に接続しているため、1 つのサービス UUID と異なる機能特性しかありません。これは機器の複雑さによります。

## **BLE クライアントの使用**

この例では、Wio Terminal をクライアントとして使用し、周囲のすべての BLE デバイスを検索し、BLE デバイスの名前と MAC アドレスを BLE 経由で表示します。

- [**最新の BLE ファームウェア**](https://files.seeedstudio.com/wiki/Wio-Terminal-BLE/20200914-seeed-ambd-firmware-rpc-v1.0.0.zip)を搭載した Wio Terminal が必要です。
- コード内でサーバーの UUID と MAC アドレスを設定します。
- [**クライアントコード**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcBLE/blob/master/examples/BLE_client/BLE_client.ino)を Wio Terminal にアップロードします。

### クライアントコードのスニペット

コード内では、接続したいデバイスのサーバー UUID と特性 UUID サービスを設定する必要があります。

:::note
デバイスの MAC アドレスと UUID がわからない場合は、**nRF Connect APP** ページをご覧ください。
:::

```cpp
// 接続したいリモートサービス。
static BLEUUID serviceUUID(0x180F);
// 関心のあるリモートサービスの特性。
static BLEUUID    charUUID(0x2A19);
```

:::note
コード内の UUID はテスト用に定義されたものであり、通常商用製品の UUID フォーマットは異なります。例えば、xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx の形式です。
:::

接続したいデバイスの MAC アドレスをコード内で更新します。

```cpp
uint8_t bd_addr[6] = {0x7d, 0x18, 0x1b, 0xf1, 0xf7, 0x2c}; // MAC アドレス: 2c:f7:f1:1b:18:7d
```

:::note
Bluetooth の MAC アドレスは一意に設計されており、チップメーカーに追跡可能です。さらに、MAC アドレスは逆順で入力する必要があります。
:::

リモート BLE サーバーに接続します。

```cpp
pClient->connect(myDevice);
```

リモート BLE サーバー内で目的のサービスへの参照を取得します。

```cpp
BLERemoteService* pRemoteService = pClient->getService(serviceUUID);
```

リモート BLE サーバーのサービス内で特性への参照を取得します。

```cpp
pRemoteCharacteristic = pRemoteService->getCharacteristic(charUUID);
```

### **クライアントコード**

```cpp
/**
 * 機能が豊富な BLE クライアントの例。
 * 多くの新しい機能が実装されています。
 * 作者不明
 * chegewara によって更新
 */

#include "rpcBLEDevice.h"
#include <BLEScan.h>
#include <BLEAdvertisedDevice.h>

// 接続したいリモートサービス。
static BLEUUID serviceUUID(0xFEE0);
// 関心のあるリモートサービスの特性。
static BLEUUID    charUUID(0x2A2B);

static boolean doConnect = false;
static boolean connected = false;
static boolean doScan = false;
static BLERemoteCharacteristic* pRemoteCharacteristic;
static BLEAdvertisedDevice* myDevice;
uint8_t bd_addr[6] = {0xD7, 0x1D, 0x12, 0xDC, 0x64, 0xF0};
BLEAddress BattServer(bd_addr);

static void notifyCallback(
  BLERemoteCharacteristic* pBLERemoteCharacteristic,
  uint8_t* pData,
  size_t length,
  bool isNotify) {
    Serial.print("特性の通知コールバック: ");
    Serial.print(pBLERemoteCharacteristic->getUUID().toString().c_str());
    Serial.print(" データ長: ");
    Serial.println(length);
    Serial.print("データ: ");
    Serial.print(*(uint8_t *)pData);
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
    Serial.print("接続を形成中: ");
    Serial.println(myDevice->getAddress().toString().c_str());
    
    BLEClient*  pClient  = BLEDevice::createClient();
    Serial.println(" - クライアントを作成しました");

    pClient->setClientCallbacks(new MyClientCallback());
 

    // リモート BLE サーバーに接続します。
    pClient->connect(myDevice);  // BLEAdvertisedDevice をアドレスの代わりに渡すと、ピアデバイスアドレスのタイプ (公開または非公開) が認識されます。
    Serial.println(" - サーバーに接続しました");

    // リモート BLE サーバー内で目的のサービスへの参照を取得します。
    BLERemoteService* pRemoteService = pClient->getService(serviceUUID);
    Serial.println(serviceUUID.toString().c_str());
    if (pRemoteService == nullptr) {
      Serial.print("サービス UUID を見つけられませんでした: ");
      Serial.println(serviceUUID.toString().c_str());
      pClient->disconnect();
      return false;
    }
    Serial.println(" - サービスを見つけました");


    // リモート BLE サーバーのサービス内で特性への参照を取得します。
    pRemoteCharacteristic = pRemoteService->getCharacteristic(charUUID);
    if (pRemoteCharacteristic == nullptr) {
      Serial.print("特性 UUID を見つけられませんでした: ");
      Serial.println(charUUID.toString().c_str());
      pClient->disconnect();
      return false;
    }
    Serial.println(" - 特性を見つけました");


    // 特性の値を読み取ります。
    if(pRemoteCharacteristic->canRead()) {
      Serial.println(" - 読み取り可能です");
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
 * BLE サーバーをスキャンし、探しているサービスを広告している最初のサーバーを見つけます。
 */
class MyAdvertisedDeviceCallbacks: public BLEAdvertisedDeviceCallbacks {
 /**
   * 広告している BLE サーバーごとに呼び出されます。
   */
  void onResult(BLEAdvertisedDevice advertisedDevice) {
    Serial.print("BLE 広告デバイスが見つかりました: ");
    Serial.println(advertisedDevice.toString().c_str());
   
    // デバイスが見つかったので、探しているサービスを含んでいるか確認します。
    if (memcmp(advertisedDevice.getAddress().getNative(),BattServer.getNative(), 6) == 0) {
      Serial.print("BATT デバイスが見つかりました: ");
      Serial.println(advertisedDevice.toString().c_str());
      BLEDevice::getScan()->stop();
      Serial.println("新しい BLEAdvertisedDevice");
      myDevice = new BLEAdvertisedDevice(advertisedDevice);
      Serial.println("新しい BLEAdvertisedDevice 完了");
      doConnect = true;
      doScan = true; 
  } // onResult
  }
}; // MyAdvertisedDeviceCallbacks


void setup() {
  Serial.begin(115200);
  while(!Serial){};
  delay(2000);
  Serial.println("Arduino BLE クライアントアプリケーションを開始しています...");
  BLEDevice::init("");

  // スキャナーを取得し、新しいデバイスを検出したときに通知するコールバックを設定します。
  // アクティブスキャンを指定し、スキャンを 5 秒間実行します。
  BLEScan* pBLEScan = BLEDevice::getScan();
  pBLEScan->setAdvertisedDeviceCallbacks(new MyAdvertisedDeviceCallbacks());
  pBLEScan->setInterval(1349);
  pBLEScan->setWindow(449);
  pBLEScan->setActiveScan(true);
  pBLEScan->start(5, false);
} // setup の終了。


// これは Arduino のメインループ関数です。
void loop() {
 
  // フラグ "doConnect" が true の場合、スキャンして目的の BLE サーバーを見つけたことを意味します。
  // 今度はそれに接続します。接続が完了すると、接続フラグを true に設定します。
  if (doConnect == true) {
    if (connectToServer()) {
      Serial.println("BLE サーバーに接続しました。");
    } else {
      Serial.println("サーバーへの接続に失敗しました。これ以上何もできません。");
    }
    doConnect = false;
  }
  Serial.printf(".");
  delay(1000);
} // loop の終了
```

### **コード実行結果**

これはデバイスを接続せずに動作する簡単なクライアントコードのデモです。Wio Terminalは周囲のBLEデバイスをスキャンし、それらのデバイスを表示します。

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/BLE-device-print.png"/></div>

## **BLEサーバーの使用方法**

この例では、Wio Terminalをサーバーとして使用し、他のWio Terminal（クライアント）と接続して、BLEを介してクライアントの要求を受信します。

### **サーバーコードスニペット**

以下のようにBLEデバイス名を定義できます：

```cpp
BLEDevice::init("UART Service");
```

Wio Terminal上でサーバーデバイスのUUIDを定義する必要があります。

```cpp
#define SERVICE_UUID        "180f"
#define CHARACTERISTIC_UUID "2a19"
#define DESCRIPTOR_UUID     "4545"
```

BLEサーバーを作成します。

```cpp
BLEServer *pServer = BLEDevice::createServer();
```

サーバーUUIDを使用してBLEサービスを作成します。

```cpp
BLEService *pService = pServer->createService(SERVICE_UUID);
```

特性を追加します。

```cpp
  BLECharacteristic *pCharacteristic = pService->createCharacteristic(
                                         CHARACTERISTIC_UUID,
                                         BLECharacteristic::PROPERTY_READ |
                                         BLECharacteristic::PROPERTY_WRITE
                                       );
pCharacteristic->setValue("Hello World says Neil");
```

読み取りおよび書き込み機能。

```cpp
  pCharacteristic->setAccessPermissions(GATT_PERM_READ | GATT_PERM_WRITE);
  BLEDescriptor *pDescriptor = pCharacteristic->createDescriptor(
                                         DESCRIPTOR_UUID,
                                          ATTRIB_FLAG_VOID | ATTRIB_FLAG_ASCII_Z,
                                         GATT_PERM_READ | GATT_PERM_WRITE,2
                                         );
```

BLEサービスを開始します。

```cpp
pService->start();
```

アドバタイジングは、デバイスが意図を定義する情報をブロードキャストすることを可能にします。つまり、モバイルデバイスがBluetoothメッセージを受信した場合、受信者はそのメッセージを受け入れるか拒否するかを選択できます。受信者はマーケティングメッセージを受信したいことを積極的に示す必要があります。

```cpp
BLEAdvertising *pAdvertising = BLEDevice::getAdvertising();
```

### **クライアントとサーバーの通信**

この例では簡単なテストを行いました。Wio TerminalクライアントがWio Terminalサーバーに接続し、クライアントがサーバーを見つけると接続し、同時にサーバーがクライアントにメッセージを送信します。

- Wio Terminalが2台必要です。
- クライアントが接続するためのUUIDを作成する必要があります。
- [**クライアントコード**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcBLE/tree/master/examples/BLE_client)と[**サーバーコード**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcBLE/tree/master/examples/BLE_server)を**GitHub**からダウンロードしてください。
- クライアントコードをWio Terminalにアップロードしてください。
- サーバーコードをもう1台のWio Terminalにアップロードしてください。

**サーバーコード**をアップロードして実行すると、クライアントに接続する前はArduino IDEモニターに「unpaired」と繰り返し表示されます。

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/Server_side3.png"/></div>

クライアントに接続すると、メッセージの表示が停止し、クライアントがサーバーからのメッセージを表示します。

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/Client_side7.png"/></div>

### サーバーコード

```cpp
#include <rpcBLEDevice.h>
#include <BLEServer.h>

#define SERVICE_UUID        "180f"
#define CHARACTERISTIC_UUID "2a19"
#define DESCRIPTOR_UUID     "4545"

class MyCallbacks: public BLECharacteristicCallbacks {
    void onWrite(BLECharacteristic *pCharacteristic) {
      std::string rxValue = pCharacteristic->getValue();

      if (rxValue.length() > 0) {
        Serial.println("*********");
        Serial.print("Received Value: ");
        for (int i = 0; i < rxValue.length(); i++)
          Serial.print(rxValue[i]);

        Serial.println();
        Serial.println("*********");
      }
    }
};

void setup() {
  Serial.begin(115200);
  while(!Serial){};
  Serial.println("Starting BLE work!");

  BLEDevice::init("Long name 11");
  BLEServer *pServer = BLEDevice::createServer();
  BLEService *pService = pServer->createService(SERVICE_UUID);
  BLECharacteristic *pCharacteristic = pService->createCharacteristic(
                                         CHARACTERISTIC_UUID,
                                         BLECharacteristic::PROPERTY_READ |
                                         BLECharacteristic::PROPERTY_WRITE
                                       );
  pCharacteristic->setAccessPermissions(GATT_PERM_READ | GATT_PERM_WRITE);
  BLEDescriptor *pDescriptor = pCharacteristic->createDescriptor(
                                         DESCRIPTOR_UUID,
                                          ATTRIB_FLAG_VOID | ATTRIB_FLAG_ASCII_Z,
                                         GATT_PERM_READ | GATT_PERM_WRITE,
                                         2
                                         );
  pCharacteristic->setValue("Hello World says Neil");
  pCharacteristic->setCallbacks(new MyCallbacks());
  pService->start();

  // BLEAdvertising *pAdvertising = pServer->getAdvertising();  // this still is working for backward compatibility
  BLEAdvertising *pAdvertising = BLEDevice::getAdvertising();
  pAdvertising->addServiceUUID(SERVICE_UUID);
  pAdvertising->setScanResponse(true);
  pAdvertising->setMinPreferred(0x06);  // functions that help with iPhone connections issue
  pAdvertising->setMinPreferred(0x12);
  BLEDevice::startAdvertising();
  Serial.println("Characteristic defined! Now you can read it in your phone!");
}

void loop() { 
  // put your main code here, to run repeatedly:
  Serial.println("1");
  delay(2000);
}
```

## サーバーがスマートフォンのクライアントに接続する

<div align="center"><img src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/vidoeh-GIF.gif"/></div>

この例では、スマートフォンをクライアントとして使用し、Wio Terminal（サーバー）に接続します。Wio Terminalはクライアントからのメッセージを受信することができます。

- スマートフォンに nRF Connect アプリをダウンロードしてください。
- Wio Terminal にコードをアップロードしてください。
- nRF Connect アプリを開き、Wio Terminal を検索して接続してください。

:::note
コード内のデバイス名を確認してください。それが検索を助けます。
:::

### **コード**

```cpp
#include "rpcBLEDevice.h"
#include <BLE2902.h>
#include <TFT_eSPI.h> // ハードウェア固有のライブラリ
#include <SPI.h>
TFT_eSPI tft = TFT_eSPI();       // カスタムライブラリを呼び出す
TFT_eSprite spr = TFT_eSprite(&tft);  // スプライト
 
BLEServer *pServer = NULL;
BLECharacteristic * pTxCharacteristic;
bool deviceConnected = false;
bool oldDeviceConnected = false;
String Value11;
 
#define SERVICE_UUID           "6E400001-B5A3-F393-E0A9-E50E24DCCA9E" // UARTサービスUUID
#define CHARACTERISTIC_UUID_RX "6E400002-B5A3-F393-E0A9-E50E24DCCA9E"
#define CHARACTERISTIC_UUID_TX "6E400003-B5A3-F393-E0A9-E50E24DCCA9E"
 
class MyServerCallbacks: public BLEServerCallbacks {
    void onConnect(BLEServer* pServer) {
      deviceConnected = true;
      spr.fillSprite(TFT_BLACK);
      spr.createSprite(240, 100);
      spr.setTextColor(TFT_WHITE, TFT_BLACK);
      spr.setFreeFont(&FreeSansBoldOblique12pt7b);
      spr.drawString("Message: ", 20, 70);
      spr.setTextColor(TFT_GREEN, TFT_BLACK);
      spr.drawString("status: connected",10 ,5); 
      spr.pushSprite(0, 0);
    };
 
    void onDisconnect(BLEServer* pServer) {
      deviceConnected = false;
      Serial.print("123123");
      spr.fillSprite(TFT_BLACK);
      spr.createSprite(240, 100);
      spr.setTextColor(TFT_WHITE, TFT_BLACK);
      spr.setFreeFont(&FreeSansBoldOblique12pt7b);
      spr.drawString("Message: ", 20, 70);
      spr.setTextColor(TFT_RED, TFT_BLACK);
      spr.drawString("status: disconnect",10 ,5); 
      spr.pushSprite(0, 0);
    }
};
 
class MyCallbacks: public BLECharacteristicCallbacks {
    void onWrite(BLECharacteristic *pCharacteristic) {
      std::string rxValue = pCharacteristic->getValue();
 
        if (rxValue.length() > 0) {
        spr.fillSprite(TFT_BLACK);
        spr.setTextColor(TFT_WHITE, TFT_BLACK);
        spr.setFreeFont(&FreeSansBoldOblique9pt7b);
        for (int i = 0; i < rxValue.length(); i++){
//           Serial.print(rxValue[i]);
           spr.drawString((String)rxValue[i],10 + i*15,0);
        spr.pushSprite(10, 100);
        }
       }
    }
};
 
void setup() {
  tft.begin();
  tft.init();
  tft.setRotation(3);
  tft.fillScreen(TFT_BLACK);
 
  BLEDevice::init("UART Servicess");  // デバイス名の定義
 
  // BLEサーバーを作成
  pServer = BLEDevice::createServer();
  pServer->setCallbacks(new MyServerCallbacks());
 
  // BLEサービスを作成
  BLEService *pService = pServer->createService(SERVICE_UUID);
 
  // BLEキャラクタリスティックを作成
  pTxCharacteristic = pService->createCharacteristic(
                    CHARACTERISTIC_UUID_TX,
                    BLECharacteristic::PROPERTY_NOTIFY | BLECharacteristic::PROPERTY_READ
                  );
  pTxCharacteristic->setAccessPermissions(GATT_PERM_READ);      
  pTxCharacteristic->addDescriptor(new BLE2902());
 
  BLECharacteristic * pRxCharacteristic = pService->createCharacteristic(
                       CHARACTERISTIC_UUID_RX,
                      BLECharacteristic::PROPERTY_WRITE
 
                    );
  pRxCharacteristic->setAccessPermissions(GATT_PERM_READ | GATT_PERM_WRITE);           
 
  pRxCharacteristic->setCallbacks(new MyCallbacks());
 
  // サービスを開始
  pService->start();
 
  // アドバタイズを開始
  pServer->getAdvertising()->start();
      spr.fillSprite(TFT_BLACK);
      spr.createSprite(240, 100);
      spr.setTextColor(TFT_WHITE, TFT_BLACK);
      spr.setFreeFont(&FreeSansBoldOblique12pt7b);
      spr.drawString("status: disconnect",10 ,5); 
      spr.drawString("Message: ", 20, 70);
      spr.pushSprite(0, 0);
}
 
void loop() {
 
    // 切断処理
    if (!deviceConnected && oldDeviceConnected) {
        delay(500); // Bluetoothスタックに準備の時間を与える
        pServer->startAdvertising(); // アドバタイズを再開
        oldDeviceConnected = deviceConnected;
    }
    // 接続処理
    if (deviceConnected && !oldDeviceConnected) {
    // 接続時に実行する処理
        oldDeviceConnected = deviceConnected;
    }
}
```