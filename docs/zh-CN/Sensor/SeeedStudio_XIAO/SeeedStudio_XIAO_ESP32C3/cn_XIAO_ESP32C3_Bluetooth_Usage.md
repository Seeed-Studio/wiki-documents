---
description: Seeed Studio XIAO ESP32C3 上的蓝牙使用
title: 蓝牙使用
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO_ESP32C3_Bluetooth_Usage
last_update:
  date: 1/11/2023
  author: shuxu hu
---

# 蓝牙使用

Seeed Studio XIAO ESP32C3 支持蓝牙 5 (LE) 连接。本教程将介绍在此开发板上使用蓝牙的基础知识。

## 硬件设置

- **步骤 1.** 将随附的 **WiFi/ 蓝牙天线** 连接到开发板上的 **IPEX 连接器**

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/wifi-6.png" alt="pir" width={130} height="auto" /></div>

- **步骤 2.** 通过 USB Type-C 数据线将 XIAO ESP32C3 连接到您的计算机

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/cable-connect.png" alt="pir" width={120} height="auto" /></div>

## 扫描蓝牙设备

在此示例中，我们将使用 XIAO ESP32C3 扫描周围可用的蓝牙设备。

- **步骤 1.** 将下面的代码复制并粘贴到 Arduino IDE 中

```cpp
#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLEScan.h>
#include <BLEAdvertisedDevice.h>

int scanTime = 5; //In seconds
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
  pBLEScan = BLEDevice::getScan(); //create new scan
  pBLEScan->setAdvertisedDeviceCallbacks(new MyAdvertisedDeviceCallbacks());
  pBLEScan->setActiveScan(true); //active scan uses more power, but get results faster
  pBLEScan->setInterval(100);
  pBLEScan->setWindow(99);  // less or equal setInterval value
}

void loop() {
  // put your main code here, to run repeatedly:
  BLEScanResults foundDevices = pBLEScan->start(scanTime, false);
  Serial.print("Devices found: ");
  Serial.println(foundDevices.getCount());
  Serial.println("Scan done!");
  pBLEScan->clearResults();   // delete results fromBLEScan buffer to release memory
  delay(2000);
}
```

:::tip
如果您已经将ESP32开发板升级到3.0.0版本以上，您需要修改一些代码以使其兼容。

1. ```BLEScanResults foundDevices = pBLEScan->start(scanTime, false);``` 改为 ```BLEScanResults* foundDevices = pBLEScan->start(scanTime, false);```
2. ```Serial.println(foundDevices.getCount());``` 改为 ```Serial.println(foundDevices->getCount());```

:::

**步骤 2.** 上传代码并打开串口监视器开始扫描蓝牙设备

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/ble-1.jpg" alt="pir" width={1000} height="auto" /></div>

## XIAO ESP32C3 作为蓝牙服务器

在这个示例中，我们将使用XIAO ESP32C3作为蓝牙服务器。在这里我们将使用智能手机搜索XIAO ESP32C3开发板，并发送字符串在串口监视器上显示

- **步骤 1.** 复制并粘贴以下代码到Arduino IDE中

```cpp
#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLEServer.h>

// See the following for generating UUIDs:
// https://www.uuidgenerator.net/

#define SERVICE_UUID        "4fafc201-1fb5-459e-8fcc-c5c9c331914b"
#define CHARACTERISTIC_UUID "beb5483e-36e1-4688-b7f5-ea07361b26a8"


class MyCallbacks: public BLECharacteristicCallbacks {
    void onWrite(BLECharacteristic *pCharacteristic) {
      std::string value = pCharacteristic->getValue();

      if (value.length() > 0) {
        Serial.println("*********");
        Serial.print("New value: ");
        for (int i = 0; i < value.length(); i++)
          Serial.print(value[i]);

        Serial.println();
        Serial.println("*********");
      }
    }
};

void setup() {
  Serial.begin(115200);

  BLEDevice::init("MyESP32");
  BLEServer *pServer = BLEDevice::createServer();

  BLEService *pService = pServer->createService(SERVICE_UUID);

  BLECharacteristic *pCharacteristic = pService->createCharacteristic(
                                         CHARACTERISTIC_UUID,
                                         BLECharacteristic::PROPERTY_READ |
                                         BLECharacteristic::PROPERTY_WRITE
                                       );

  pCharacteristic->setCallbacks(new MyCallbacks());

  pCharacteristic->setValue("Hello World");
  pService->start();

  BLEAdvertising *pAdvertising = pServer->getAdvertising();
  pAdvertising->start();
}

void loop() {
  // put your main code here, to run repeatedly:
  delay(2000);
}
```

:::tip
如果您已经将ESP32开发板升级到3.0.0版本以上，您需要更改一些代码以使其兼容。

1. ```std::string value = pCharacteristic->getValue();``` 更改为 ```String value = pCharacteristic->getValue();```

:::

- **步骤 2.** 上传代码并打开串口监视器

- **步骤 3.** 在您的智能手机上下载并安装LightBlue应用

  - [LightBlue应用 (Android)](https://play.google.com/store/apps/details?id=com.punchthrough.lightblueexplorer&hl=en_US&gl=US)
  - [LightBlue应用 (Apple)](https://apps.apple.com/us/app/lightblue/id557428110)

- **步骤 4.** 打开手机蓝牙，将手机靠近XIAO ESP32C3，扫描设备并连接**MyESP32**设备

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/ble-2.jpg" alt="pir" width={300} height="auto" /></div>

- **步骤 5.** 打开LightBlue应用并点击**Bonded**选项卡

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/ble-3.jpg" alt="pir" width={350} height="auto" /></div>

- **步骤 6.** 点击**MyESP32**旁边的**CONNECT**

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/ble-4.jpg" alt="pir" width={350} height="auto" /></div>

- **步骤 7.** 点击最底部显示**Readable, Writable**的部分

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/ble-5.jpg" alt="pir" width={300} height="auto" /></div>

- **步骤 8.** 在**Data format**下拉菜单中，选择**UTF-8 String**

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/ble-6.jpg" alt="pir" width={300} height="auto" /></div>

- **步骤 9.** 在**WRITTEN VALUES**下输入"Hello"并点击**WRITE**

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/ble-7.jpg" alt="pir" width={300} height="auto" /></div>

您将在Arduino IDE的串口监视器上看到文本字符串"Hello"的输出

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/ble-9.jpg" alt="pir" width={500} height="auto" /></div>

## NimBLE-Arduino

### 介绍

与基于bluedroid的库相比，该库显著减少了ESP32 BLE应用程序的资源使用并提高了性能。目标是在合理范围内尽可能保持与原始库的兼容性，但使用NimBLE堆栈。此外，该库将得到更积极的开发和维护，以提供比原始库更好的功能和稳定性。

更多信息请访问作者的Github[链接](https://github.com/h2zero/NimBLE-Arduino/tree/master)。

### 步骤 1.添加库

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/NimBLE.jpg" alt="pir" width={500} height="auto" /></div>

### 步骤 2.示例

**代码**

```cpp
#include <Arduino.h>
#include <NimBLEDevice.h>
#include <NimBLEAdvertisedDevice.h>
#include "NimBLEEddystoneTLM.h"
#include "NimBLEBeacon.h"

#define ENDIAN_CHANGE_U16(x) ((((x) & 0xFF00) >> 8) + (((x) & 0xFF) << 8))

int         scanTime = 5 * 1000; // In milliseconds
NimBLEScan* pBLEScan;

class ScanCallbacks : public NimBLEScanCallbacks {
    void onResult(const NimBLEAdvertisedDevice* advertisedDevice) override {
        if (advertisedDevice->haveName()) {
            Serial.print("Device name: ");
            Serial.println(advertisedDevice->getName().c_str());
            Serial.println("");
        }

        if (advertisedDevice->haveServiceUUID()) {
            NimBLEUUID devUUID = advertisedDevice->getServiceUUID();
            Serial.print("Found ServiceUUID: ");
            Serial.println(devUUID.toString().c_str());
            Serial.println("");
        } else if (advertisedDevice->haveManufacturerData() == true) {
            std::string strManufacturerData = advertisedDevice->getManufacturerData();
            if (strManufacturerData.length() == 25 && strManufacturerData[0] == 0x4C && strManufacturerData[1] == 0x00) {
                Serial.println("Found an iBeacon!");
                NimBLEBeacon oBeacon = NimBLEBeacon();
                oBeacon.setData(reinterpret_cast<const uint8_t*>(strManufacturerData.data()), strManufacturerData.length());
                Serial.printf("iBeacon Frame\n");
                Serial.printf("ID: %04X Major: %d Minor: %d UUID: %s Power: %d\n",
                              oBeacon.getManufacturerId(),
                              ENDIAN_CHANGE_U16(oBeacon.getMajor()),
                              ENDIAN_CHANGE_U16(oBeacon.getMinor()),
                              oBeacon.getProximityUUID().toString().c_str(),
                              oBeacon.getSignalPower());
            } else {
                Serial.println("Found another manufacturers beacon!");
                Serial.printf("strManufacturerData: %d ", strManufacturerData.length());
                for (int i = 0; i < strManufacturerData.length(); i++) {
                    Serial.printf("[%X]", strManufacturerData[i]);
                }
                Serial.printf("\n");
            }
            return;
        }

        NimBLEUUID eddyUUID = (uint16_t)0xfeaa;

        if (advertisedDevice->getServiceUUID().equals(eddyUUID)) {
            std::string serviceData = advertisedDevice->getServiceData(eddyUUID);
            if (serviceData[0] == 0x20) {
                Serial.println("Found an EddystoneTLM beacon!");
                NimBLEEddystoneTLM foundEddyTLM = NimBLEEddystoneTLM();
                foundEddyTLM.setData(reinterpret_cast<const uint8_t*>(serviceData.data()), serviceData.length());

                Serial.printf("Reported battery voltage: %dmV\n", foundEddyTLM.getVolt());
                Serial.printf("Reported temperature from TLM class: %.2fC\n", (double)foundEddyTLM.getTemp());
                int   temp     = (int)serviceData[5] + (int)(serviceData[4] << 8);
                float calcTemp = temp / 256.0f;
                Serial.printf("Reported temperature from data: %.2fC\n", calcTemp);
                Serial.printf("Reported advertise count: %d\n", foundEddyTLM.getCount());
                Serial.printf("Reported time since last reboot: %ds\n", foundEddyTLM.getTime());
                Serial.println("\n");
                Serial.print(foundEddyTLM.toString().c_str());
                Serial.println("\n");
            }
        }
    }
} scanCallbacks;

void setup() {
    Serial.begin(115200);
    Serial.println("Scanning...");

    NimBLEDevice::init("Beacon-scanner");
    pBLEScan = BLEDevice::getScan();
    pBLEScan->setScanCallbacks(&scanCallbacks);
    pBLEScan->setActiveScan(true);
    pBLEScan->setInterval(100);
    pBLEScan->setWindow(100);
}

void loop() {
    NimBLEScanResults foundDevices = pBLEScan->getResults(scanTime, false);
    Serial.print("Devices found: ");
    Serial.println(foundDevices.getCount());
    Serial.println("Scan done!");
    pBLEScan->clearResults(); // delete results scan buffer to release memory
    delay(2000);
}
```

**结果**

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/NimBLE2.jpg" alt="pir" width={700} height="auto" /></div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
