---
description: 蓝牙 Ibeacon
title: 蓝牙 Ibeacon
keywords:
- Wio_terminal Bluetooth
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/BLE-ibeacon-using-Wio-terminal
last_update:
  date: 1/16/2023
  author: jianjing Huang
---

## 基于 Wio terminal 的 BLE ibeacon

<div align="center"><img width ="{400}" src="https://files.seeedstudio.com/wiki/Wio-terminal-BLE-Ibeacon/PIC-ibeacon.png"/></div>

## 概述

Wio terminal 是一款功能强大的物联网设备，内置支持经典蓝牙和低功耗蓝牙（BLE），经典蓝牙用于蓝牙音频模块、文件或大码流数据传输，BLE 用于电池优化应用，如蓝牙信标、健身手环、邻近广告等。因此我们能够根据用户需求连接一些特定功能模块，然后在特定场合作为信标使用。

在之前的 Wio terminal 教程中，我们已经介绍了在 wio terminal 上使用的客户端模式和服务器模式，如有疑问请回顾 [**客户端和服务器介绍**](https://wiki.seeedstudio.com/cn/Wio-terminal-BLE-introduction/)

在本教程中，我们将使用 Wio terminal 构建一个 BLE Ibeacon，此外，我们将使用智能手机来显示 iBeacon 信息。我假设您已经知道如何在 Arduino IDE 中使用 Wio terminal，如果不知道请回到 [**Wio terminal 入门**](https://wiki.seeedstudio.com/cn/Wio-Terminal-Getting-Started/)。

## 所需硬件

- [**Wio terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- **Type-C 数据线**

- **Wio terminal 底盘电池**
<!-- (https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-p-4516.html) -->

## 所需软件

- 在 PC 上下载 [**Arduino IDE**](https://www.arduino.cc/en/main/software)

- 在智能手机上下载 [**nRF Connect APP**](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en_US)

:::note
如果您不熟悉如何使用 nRF connect APP，请查看此 [**教程**](https://wiki.seeedstudio.com/cn/Wio-terminal-BLE-introduction/#nrf-connect-app-usage)。
:::

## 说明

### **Wio terminal iBeacon 测试**

这是一个简单的测试，用于扫描 Wio terminal iBeacon 设备并显示信息，确保可以检测到 Wio terminal Ibeacon 设备，您将看到 Ibeacon 特定图标。

### **nRF connect APP**

1. 下载 **nRF Connect APP** 然后打开该 APP，在右上角找到 **SCAN** 选项，您将在列表中看到 Wio terminal iBeacon 设备，其中包含 MAC 地址、RSSI(dBm) 和连接延迟时间。

<div align="center"><img width ="{400}" src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/nRF_interface.jpg"/></div>

:::note
    在此测试中设备未命名，因此将显示 N/A。
:::

**测试代码**

```cpp

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

### Ibeacon 简单展示

此演示介绍了如何在特定场合使用 Wio terminal，例如，Wio terminal Ibeacon 可以广播网关信息来引导人们，如下图所示，有门-1、门-2...等，门-1 内有产品 A 和说明。我们可以在每个门安装 Wio terminal 来广播信息并在屏幕上显示介绍信息。

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Wio-terminal-BLE-Ibeacon/Ibeacon_demo_pic.png"/></div>

打开 nRF connect APP，我们将在列表中看到"Wio" Ibeacon 设备，然后点击设备，将显示设备 UUID、RSSI 和制造商数据。

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Wio-terminal-BLE-Ibeacon/ibecon_formatttttt.png"/></div>

点击制造商数据，将显示 3 个选项：制造商数据(Bluetooth Core 4.1)、制造商数据和文本(UTF-8)。然后点击文本(UTF-8)，制造商数据将转换为正常数据。

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Wio-terminal-BLE-Ibeacon/ibeacon_data_format.png"/></div>

文本(UTF-8) 显示网关信息，A 在门-1，B 在门-2，这样人们就知道 A 和 B 在哪里。

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Wio-terminal-BLE-Ibeacon/Ibeacon_device_info.png"/></div>

我们可以看到，人们进入门后，他们将看到关于 A 或 B 的更多详细信息，如历史或其他文本介绍，这取决于使用场合。

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Wio-terminal-BLE-Ibeacon/Ibeacon_product_new.png"/></div>

## 代码

```cpp
#include "sys/time.h"
#include "BLEDevice.h"
#include "BLEBeacon.h"

#include <TFT_eSPI.h> // 硬件特定库
#include <SPI.h>
TFT_eSPI tft = TFT_eSPI();       // 调用自定义库
TFT_eSprite spr = TFT_eSprite(&tft);  // 精灵图
LIS3DHTR<TwoWire> lis;
BLEAdvertising *pAdvertising;

#define BEACON_UUID           "8ec76ea3-6668-48da-9866-75be8bc86f4d" // UUID 1 128位
#define SERVICE_UUID           0x1801
#define SERVICE_UUID1          0x1802
#define SERVICE_UUID2          0x1803

void setBeacon() {
  BLEBeacon oBeacon = BLEBeacon();
  oBeacon.setManufacturerId(0x4C00); // 伪造苹果 0x004C LSB (ENDIAN_CHANGE_U16!)
  oBeacon.setProximityUUID(BLEUUID(BEACON_UUID));
  oBeacon.setMajor(0x007B);
  oBeacon.setMinor(0x01C8);
  BLEAdvertisementData oAdvertisementData = BLEAdvertisementData();
  BLEAdvertisementData oScanResponseData = BLEAdvertisementData();

  oAdvertisementData.setFlags(0x04); // BR_EDR_NOT_SUPPORTED 0x04
  std::string strServiceData = "";
  strServiceData += (char)26;     // 长度
  strServiceData += (char)0xFF;   // 类型
  strServiceData += oBeacon.getData();
  oAdvertisementData.addData(strServiceData);

  union cracked_float_t {
    float f;
    uint32_t l;
    word w[sizeof(float) / sizeof(word)];
    byte b[sizeof(float)];
  };

  oScanResponseData.setName("wio");

  oScanResponseData.setManufacturerData("oxA-door-1");   // Ibeacon信息(最大:31字节)
  oScanResponseData.setManufacturerData("oxB-door-2");
 
  pAdvertising->setAdvertisementData(oAdvertisementData);
  pAdvertising->setScanResponseData(oScanResponseData);
  pAdvertising->setAdvertisementType(GAP_ADTYPE_ADV_SCAN_IND);


  spr.fillSprite(TFT_BLACK);
  spr.createSprite(240, 160);
  spr.fillSprite(TFT_BLACK);
  spr.setTextColor(TFT_WHITE, TFT_BLACK);
  spr.setFreeFont(&FreeSansBoldOblique12pt7b);

  spr.drawString("什么是A", 20 , 10);                // 产品介绍
  spr.drawString("A的历史: .....", 20 , 35);      

  spr.drawString("什么是B", 20 , 110);
  spr.drawString("B的历史: .....", 20 , 135);


  spr.pushSprite(0, 0);
}

  void setup() {

    tft.begin();
    tft.init();
    tft.setRotation(3);
    tft.fillScreen(TFT_BLACK);
    Serial.begin(115200);

    // 创建BLE设备
    BLEDevice::init("");
    lis.begin(Wire1);
    if (!lis) {
      Serial.println("错误");
      while (1);
    }
    lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); //数据输出速率
    lis.setFullScaleRange(LIS3DHTR_RANGE_2G); //量程范围设置为2g


    pAdvertising = BLEDevice::getAdvertising();


    Serial.println("广播已开始...");
    delay(100);
  }

  void loop() {
    setBeacon();
    // 开始广播
    pAdvertising->start();
    delay(5000);
    pAdvertising->stop();
    delay(1000);
  }
```