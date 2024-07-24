---
description: 蓝牙iBeacon
title: 蓝牙iBeacon
keywords:
- Wio_terminal Bluetooth
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/BLE-ibeacon-using-Wio-terminal
last_update:
  date: 3/08/2024
  author: 金菊
---

##  基于 BLE ibeacon 的 Wio terminal

<div align="center"><img width ="{400}" src="https://files.seeedstudio.com/wiki/Wio-terminal-BLE-Ibeacon/PIC-ibeacon.png"/></div>

## 概述

Wio terminal 是一款功能强大的物联网设备，内置支持经典蓝牙和低功耗蓝牙（BLE），经典蓝牙用于蓝牙音频模块、文件或大型代码流数据传输，低功耗蓝牙用于优化电池的应用，如蓝牙信标、健身手环、近距离广告等。因此，我们可以根据用户需求连接到一些特定的功能模块，然后将其作为信标在特定场合使用。



在之前的 Wio terminal 教程中，我们介绍了客户端模式和服务器模式在 Wio terminal 上的使用，如果有任何疑问，请参阅 [**Wio terminal 入门指南**](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/).

## 所需硬件

- [**Wio terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- **Type-C 数据线**

- **Wio terminal 电池底座**
<!-- (https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-p-4516.html) -->

## 所需软件

- 在电脑上下载 [**Arduino IDE**](https://www.arduino.cc/en/main/software) 。

- 在智能手机上下载下载 [**nRF Connect APP**](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en_US) 。

:::注
如果您不熟悉如何使用nRF Connect APP，请查看此 [**教程**](https://wiki.seeedstudio.com/Wio-terminal-BLE-introduction/#nrf-connect-app-usage).
:::

## 操作指南

### **Wio terminal iBeacon测试**

这是一个简单的测试，用于扫描 Wio terminal 的iBeacon设备并显示信息，确保 Wio terminal iBeacon设备可以被检测到，您将看到iBeacon的特定图标。

### **the nRF connect APP**

1. 下载 **nRF Connect APP** 然后打开该应用，在右上方找到 **SCAN** 选项，您将在列表中看到 Wio terminal 的iBeacon设备，其中包括MAC地址、RSSI(dBm)和连接延迟时间。

<div align="center"><img width ="{400}" src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/nRF_interface.jpg"/></div>

:::注
    在此测试中，设备没有命名，所以显示为N/A。
:::

**测试代码**

```CPP

#include "sys/time.h"
#include "rpcBLEDevice.h"
#include "BLEBeacon.h"

BLEAdvertising *pAdvertising;
//struct timeval now;

#define BEACON_UUID           "8ec76ea3-6668-48da-9866-75be8bc86f4d" // UUID 1 

void setBeacon() {

  BLEBeacon oBeacon = BLEBeacon();
  oBeacon.setManufacturerId(0x4C00); // fake Apple 0x004C LSB (ENDIAN_CHANGE_U16!)
  oBeacon.setProximityUUID(BLEUUID(BEACON_UUID));
  oBeacon.setMajor(0x007B);
  oBeacon.setMinor(0x01C8);
  BLEAdvertisementData oAdvertisementData = BLEAdvertisementData();
  BLEAdvertisementData oScanResponseData = BLEAdvertisementData();
  
  oAdvertisementData.setFlags(0x04); // BR_EDR_NOT_SUPPORTED 0x04
  
  std::string strServiceData = "";
  
  strServiceData += (char)26;     // Len
  strServiceData += (char)0xFF;   // Type
  strServiceData += oBeacon.getData(); 
  oAdvertisementData.addData(strServiceData);
  
  pAdvertising->setAdvertisementData(oAdvertisementData);
  pAdvertising->setScanResponseData(oScanResponseData);
  pAdvertising->setAdvertisementType(GAP_ADTYPE_ADV_NONCONN_IND);

}

void setup() {

    
  Serial.begin(115200);
  while(!Serial){};
  
  // Create the BLE Device
  BLEDevice::init("");

  // Create the BLE Server
  // BLEServer *pServer = BLEDevice::createServer(); // <-- no longer required to instantiate BLEServer, less flash and ram usage

  pAdvertising = BLEDevice::getAdvertising();
  
  setBeacon();
   // Start advertising
  pAdvertising->start();
  Serial.println("Advertizing started...");
  delay(100);
  Serial.printf("in deep sleep\n");
}

void loop() {
 delay(1000);
}
```

### iBeacon简单展示

这个演示介绍了如何在特定场合使用 Wio terminal ，例如， Wio terminal 的iBeacon可以广播网关信息，引导人们，如下图所示，有门-1、门-2等，门-1内有产品A和说明。我们可以在每个门上安装 Wio terminal 来广播信息，并在屏幕上显示介绍信息。

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Wio-terminal-BLE-Ibeacon/Ibeacon_demo_pic.png"/></div>

打开nRF Connect APP，我们将在列表中看到"Wio"的iBeacon设备，然后点击设备，将显示设备的UUID、RSSI和制造商数据。

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Wio-terminal-BLE-Ibeacon/ibecon_formatttttt.png"/></div>

点击制造商数据，将显示3个选项，分别是制造商数据（蓝牙核心4.1）、制造商数据和文本（UTF-8）。然后点击文本（UTF-8），制造商数据将转换为普通数据。

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Wio-terminal-BLE-Ibeacon/ibeacon_data_format.png"/></div>

文本（UTF-8）显示网关信息，门-1中有A，门-2中有B，因此人们会知道A和B在哪里。  

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Wio-terminal-BLE-Ibeacon/Ibeacon_device_info.png"/></div>

我们可以看到，人们进入门后，他们将看到关于A或B的更多详细信息，例如历史或其他文本介绍，这取决于使用场合。

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Wio-terminal-BLE-Ibeacon/Ibeacon_product_new.png"/></div>

## 代码

```CPP
#include "sys/time.h"
#include "BLEDevice.h"
#include "BLEBeacon.h"

#include <TFT_eSPI.h> // Hardware-specific library
#include <SPI.h>
TFT_eSPI tft = TFT_eSPI();       // Invoke custom library
TFT_eSprite spr = TFT_eSprite(&tft);  // Sprite
LIS3DHTR<TwoWire> lis;
BLEAdvertising *pAdvertising;

#define BEACON_UUID           "8ec76ea3-6668-48da-9866-75be8bc86f4d" // UUID 1 128-Bit 
#define SERVICE_UUID           0x1801
#define SERVICE_UUID1          0x1802
#define SERVICE_UUID2          0x1803

void setBeacon() {
  BLEBeacon oBeacon = BLEBeacon();
  oBeacon.setManufacturerId(0x4C00); // fake Apple 0x004C LSB (ENDIAN_CHANGE_U16!)
  oBeacon.setProximityUUID(BLEUUID(BEACON_UUID));
  oBeacon.setMajor(0x007B);
  oBeacon.setMinor(0x01C8);
  BLEAdvertisementData oAdvertisementData = BLEAdvertisementData();
  BLEAdvertisementData oScanResponseData = BLEAdvertisementData();

  oAdvertisementData.setFlags(0x04); // BR_EDR_NOT_SUPPORTED 0x04
  std::string strServiceData = "";
  strServiceData += (char)26;     // Len
  strServiceData += (char)0xFF;   // Type
  strServiceData += oBeacon.getData();
  oAdvertisementData.addData(strServiceData);

  union cracked_float_t {
    float f;
    uint32_t l;
    word w[sizeof(float) / sizeof(word)];
    byte b[sizeof(float)];
  };

  oScanResponseData.setName("wio");

  oScanResponseData.setManufacturerData("oxA-door-1");   // Ibeacon information(MAX:31 byte) 
  oScanResponseData.setManufacturerData("oxB-door-2");
 
  pAdvertising->setAdvertisementData(oAdvertisementData);
  pAdvertising->setScanResponseData(oScanResponseData);
  pAdvertising->setAdvertisementType(GAP_ADTYPE_ADV_SCAN_IND);


  spr.fillSprite(TFT_BLACK);
  spr.createSprite(240, 160);
  spr.fillSprite(TFT_BLACK);
  spr.setTextColor(TFT_WHITE, TFT_BLACK);
  spr.setFreeFont(&FreeSansBoldOblique12pt7b);

  spr.drawString("what is A", 20 , 10);                // product introduction
  spr.drawString("The A history: .....", 20 , 35);      

  spr.drawString("what is B", 20 , 110);
  spr.drawString("The B history: .....", 20 , 135);


  spr.pushSprite(0, 0);
}

  void setup() {

    tft.begin();
    tft.init();
    tft.setRotation(3);
    tft.fillScreen(TFT_BLACK);
    Serial.begin(115200);

    // Create the BLE Device
    BLEDevice::init("");
    lis.begin(Wire1);
    if (!lis) {
      Serial.println("ERROR");
      while (1);
    }
    lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); //Data output rate
    lis.setFullScaleRange(LIS3DHTR_RANGE_2G); //Scale range set to 2g


    pAdvertising = BLEDevice::getAdvertising();



    Serial.println("Advertizing started...");
    delay(100);
  }

  void loop() {
    setBeacon();
    // Start advertising
    pAdvertising->start();
    delay(5000);
    pAdvertising->stop();
    delay(1000);
  }
```
