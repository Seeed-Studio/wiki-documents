---
description: Bluetooth Ibeacon
title: Bluetooth Ibeacon
keywords:
- Wio_terminal Bluetooth
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/BLE-ibeacon-using-Wio-terminal
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


## Wio terminal 基本機能：BLE iBeacon

<div align="center"><img width ="{400}" src="https://files.seeedstudio.com/wiki/Wio-terminal-BLE-Ibeacon/PIC-ibeacon.png"/></div>

## 概要

Wio terminalは、クラシックBluetoothとBluetooth Low Energy（BLE）の両方をサポートする強力なIoTデバイスです。クラシックBluetoothはBluetoothオーディオモジュール、ファイル、または大容量コードストリームデータの送信に使用され、BLEはバッテリー最適化されたアプリケーション、例えばBluetoothビーコン、フィットネスバンド、近接広告などに使用されます。そのため、ユーザーの要求に応じて特定の機能モジュールと接続し、特定の場面でビーコンとして使用することが可能です。

以前のWio terminalチュートリアルでは、クライアントモードとサーバーモードを紹介しました。もし疑問がある場合は、[**クライアントとサーバーの紹介**](https://wiki.seeedstudio.com/ja/Wio-terminal-BLE-introduction/)をご覧ください。

このチュートリアルでは、Wio terminalを使用してBLE iBeaconを構築します。さらに、スマートフォンを使用してiBeacon情報を表示します。Arduino IDEを使用してWio terminalを操作する方法を既に知っていることを前提としています。もし知らない場合は、[**Wio terminalの始め方**](https://wiki.seeedstudio.com/ja/Wio-Terminal-Getting-Started/)に戻ってください。

## 必要なハードウェア

- [**Wio terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- **Type-Cケーブル**

- **Wio terminalシャーシバッテリー**
<!-- (https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-p-4516.html) -->

## 必要なソフトウェア

- PCに[**Arduino IDE**](https://www.arduino.cc/en/main/software)をダウンロード

- スマートフォンに[**nRF Connect APP**](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en_US)をダウンロード

:::note
nRF Connect APPの使用方法に不慣れな場合は、[**このチュートリアル**](https://wiki.seeedstudio.com/ja/Wio-terminal-BLE-introduction/#nrf-connect-app-usage)をご覧ください。
:::

## 手順

### **Wio terminal iBeaconテスト**

これは、Wio terminal iBeaconデバイスをスキャンして情報を表示する簡単なテストです。Wio terminal iBeaconデバイスが検出可能であることを確認してください。iBeaconの特定のアイコンが表示されます。

### **nRF Connect APP**

1. **nRF Connect APP**をダウンロードしてアプリを開き、右上の**SCAN**オプションを見つけます。リストにWio terminal iBeaconデバイスが表示されます。MACアドレス、RSSI(dBm)、接続遅延時間が表示されます。

<div align="center"><img width ="{400}" src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/nRF_interface.jpg"/></div>

:::note
    このテストではデバイスに名前が付けられていないため、「N/A」と表示されます。
:::

**テストコード**

```cpp

#include "sys/time.h"
#include "rpcBLEDevice.h"
#include "BLEBeacon.h"

BLEAdvertising *pAdvertising;
//struct timeval now;

#define BEACON_UUID           "8ec76ea3-6668-48da-9866-75be8bc86f4d" // UUID 1 

void setBeacon() {

  BLEBeacon oBeacon = BLEBeacon();
  oBeacon.setManufacturerId(0x4C00); // Appleの偽ID 0x004C LSB (ENDIAN_CHANGE_U16!)
  oBeacon.setProximityUUID(BLEUUID(BEACON_UUID));
  oBeacon.setMajor(0x007B);
  oBeacon.setMinor(0x01C8);
  BLEAdvertisementData oAdvertisementData = BLEAdvertisementData();
  BLEAdvertisementData oScanResponseData = BLEAdvertisementData();
  
  oAdvertisementData.setFlags(0x04); // BR_EDR_NOT_SUPPORTED 0x04
  
  std::string strServiceData = "";
  
  strServiceData += (char)26;     // 長さ
  strServiceData += (char)0xFF;   // タイプ
  strServiceData += oBeacon.getData(); 
  oAdvertisementData.addData(strServiceData);
  
  pAdvertising->setAdvertisementData(oAdvertisementData);
  pAdvertising->setScanResponseData(oScanResponseData);
  pAdvertising->setAdvertisementType(GAP_ADTYPE_ADV_NONCONN_IND);

}

void setup() {

    
  Serial.begin(115200);
  while(!Serial){};
  
  // BLEデバイスの作成
  BLEDevice::init("");

  // BLEサーバーの作成
  // BLEServer *pServer = BLEDevice::createServer(); // BLEServerのインスタンス化は不要、フラッシュとRAM使用量を削減

  pAdvertising = BLEDevice::getAdvertising();
  
  setBeacon();
   // 広告開始
  pAdvertising->start();
  Serial.println("Advertizing started...");
  delay(100);
  Serial.printf("in deep sleep\n");
}

void loop() {
 delay(1000);
}
```

### iBeaconの簡単な展示

このデモでは、特定の場面でWio terminalを使用する方法を紹介します。例えば、Wio terminal iBeaconはゲートウェイ情報を広告して人々を案内することができます。以下の画像のように、door-1、door-2などがあり、door-1の中には製品Aとその説明があります。各ドアにWio terminalを設置して情報を広告し、画面に紹介情報を表示することができます。

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Wio-terminal-BLE-Ibeacon/Ibeacon_demo_pic.png"/></div>

nRF Connect APPを開くと、リストに「Wio」iBeaconデバイスが表示されます。そのデバイスをクリックすると、デバイスUUID、RSSI、製造者データが表示されます。

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Wio-terminal-BLE-Ibeacon/ibecon_formatttttt.png"/></div>

製造者データをクリックすると、3つのオプションが表示されます。それは、Manufacturer data(Bluetooth Core 4.1)、Manufacturer data、そしてText(UTF-8)です。Text(UTF-8)をクリックすると、製造者データが通常のデータに変換されます。

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Wio-terminal-BLE-Ibeacon/ibeacon_data_format.png"/></div>

Text(UTF-8)はゲートウェイ情報を表示します。door-1にはA、door-2にはBがあり、人々はAとBがどこにあるかを知ることができます。

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Wio-terminal-BLE-Ibeacon/Ibeacon_device_info.png"/></div>

ドアを通過した後、人々はAまたはBに関する詳細情報を見ることができます。例えば、歴史やその他のテキスト紹介など、使用する場面に応じて異なります。

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Wio-terminal-BLE-Ibeacon/Ibeacon_product_new.png"/></div>

## コード

```cpp
#include "sys/time.h"
#include "BLEDevice.h"
#include "BLEBeacon.h"

#include <TFT_eSPI.h> // ハードウェア固有のライブラリ
#include <SPI.h>
TFT_eSPI tft = TFT_eSPI();       // カスタムライブラリを呼び出し
TFT_eSprite spr = TFT_eSprite(&tft);  // スプライト
LIS3DHTR<TwoWire> lis;
BLEAdvertising *pAdvertising;

#define BEACON_UUID           "8ec76ea3-6668-48da-9866-75be8bc86f4d" // UUID 1 128ビット 
#define SERVICE_UUID           0x1801
#define SERVICE_UUID1          0x1802
#define SERVICE_UUID2          0x1803

void setBeacon() {
  BLEBeacon oBeacon = BLEBeacon();
  oBeacon.setManufacturerId(0x4C00); // Appleの偽ID 0x004C LSB (ENDIAN_CHANGE_U16!)
  oBeacon.setProximityUUID(BLEUUID(BEACON_UUID));
  oBeacon.setMajor(0x007B);
  oBeacon.setMinor(0x01C8);
  BLEAdvertisementData oAdvertisementData = BLEAdvertisementData();
  BLEAdvertisementData oScanResponseData = BLEAdvertisementData();

  oAdvertisementData.setFlags(0x04); // BR_EDR_NOT_SUPPORTED 0x04
  std::string strServiceData = "";
  strServiceData += (char)26;     // 長さ
  strServiceData += (char)0xFF;   // タイプ
  strServiceData += oBeacon.getData();
  oAdvertisementData.addData(strServiceData);

  union cracked_float_t {
    float f;
    uint32_t l;
    word w[sizeof(float) / sizeof(word)];
    byte b[sizeof(float)];
  };

  oScanResponseData.setName("wio");

  oScanResponseData.setManufacturerData("oxA-door-1");   // Ibeacon情報(MAX:31バイト) 
  oScanResponseData.setManufacturerData("oxB-door-2");
 
  pAdvertising->setAdvertisementData(oAdvertisementData);
  pAdvertising->setScanResponseData(oScanResponseData);
  pAdvertising->setAdvertisementType(GAP_ADTYPE_ADV_SCAN_IND);


  spr.fillSprite(TFT_BLACK);
  spr.createSprite(240, 160);
  spr.fillSprite(TFT_BLACK);
  spr.setTextColor(TFT_WHITE, TFT_BLACK);
  spr.setFreeFont(&FreeSansBoldOblique12pt7b);

  spr.drawString("Aとは何か", 20 , 10);                // 製品紹介
  spr.drawString("Aの歴史: .....", 20 , 35);      

  spr.drawString("Bとは何か", 20 , 110);
  spr.drawString("Bの歴史: .....", 20 , 135);


  spr.pushSprite(0, 0);
}

  void setup() {

    tft.begin();
    tft.init();
    tft.setRotation(3);
    tft.fillScreen(TFT_BLACK);
    Serial.begin(115200);

    // BLEデバイスを作成
    BLEDevice::init("");
    lis.begin(Wire1);
    if (!lis) {
      Serial.println("エラー");
      while (1);
    }
    lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); //データ出力レート
    lis.setFullScaleRange(LIS3DHTR_RANGE_2G); //スケール範囲を2gに設定


    pAdvertising = BLEDevice::getAdvertising();



    Serial.println("広告開始...");
    delay(100);
  }

  void loop() {
    setBeacon();
    // 広告を開始
    pAdvertising->start();
    delay(5000);
    pAdvertising->stop();
    delay(1000);
  }
```