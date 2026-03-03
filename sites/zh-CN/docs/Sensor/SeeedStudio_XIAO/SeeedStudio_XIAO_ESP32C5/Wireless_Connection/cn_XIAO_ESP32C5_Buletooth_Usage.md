---
title: 蓝牙使用
description: Seeed Studio XIAO ESP32-C5 的蓝牙使用
keywords:
  - xiao
  - esp32c5
  - buletooth
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_1.webp
slug: /xiao_esp32c5_buletooth_usage
sidebar_class_name: hidden
last_update:
  date: 01/06/2026
  author: Zeller
---

# Seeed Studio XIAO ESP32-C5 的蓝牙使用

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO ESP32-C5</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

Seeed Studio XIAO ESP32-C5 是一款功能强大的开发板，支持蓝牙 5、BLE 和 Mesh 网络，是需要无线连接的各种物联网应用的理想选择。凭借其出色的射频性能，XIAO ESP32-C5 可以在各种距离上提供可靠和高速的无线通信，使其成为短距离和长距离无线应用的多功能解决方案。在本教程中，我们将重点介绍 XIAO ESP32-C5 蓝牙功能的基本特性，例如如何扫描附近的蓝牙设备、如何建立蓝牙连接以及如何通过蓝牙连接传输和接收数据。

## 入门指南

### 天线安装

在 Seeed Studio XIAO ESP32-C5 的包装内，有一个专用的 **Wi-Fi/BT 天线连接器**。为了获得最佳的 WiFi/蓝牙信号强度，您需要取出包装中包含的天线并将其连接到连接器上。<br/>
:::tip
如果您想获得更强的信号增益效果，可以购买并安装 **2.4G/5G External Antenna with RP-SMA Male Connector** — 它比包装中包含的内置 FPC 天线提供更高的增益！
:::
<div class="table-center">
 <table>
  <tr>
   <th>2.4G/5G External Antenna with RP-SMA Male Connector</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-2.4g5g-external-antenna-with-rp-sma-male-connector-45font_1.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/2-4G-5G-External-Antenna-with-RP-SMA-Male-Connector-and-1-13-Coaxial-Cable-130mm-Set-p-6316.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## 低功耗蓝牙（BLE）使用

低功耗蓝牙，简称 BLE，是蓝牙的一种节能变体。BLE 的主要应用是短距离传输少量数据（低带宽）。与始终开启的蓝牙不同，BLE 除了在启动连接时外，始终保持在睡眠模式。

:::tip
ESP32-C5 仅支持 BLE，不支持经典蓝牙
:::

由于其特性，BLE 适用于需要定期交换少量数据并在纽扣电池上运行的应用。例如，BLE 在医疗保健、健身、跟踪、信标、安全和家庭自动化行业中非常有用。

这使其功耗非常低。BLE 的功耗大约比蓝牙低 100 倍（取决于使用情况）。

关于 XIAO ESP32-C5 的 BLE 部分，我们将在以下三个部分介绍其使用方法。

- [一些基本概念](#一些基本概念) -- 我们将首先了解一些在 BLE 中可能经常使用的概念，以帮助我们理解 BLE 程序的执行过程和思路。
- [BLE 扫描器](#BLE-扫描器) -- 本节将解释如何搜索附近的蓝牙设备并在串行监视器中打印它们。
- [BLE 服务器/客户端](#BLE-服务器客户端) -- 本节将解释如何使用 XIAO ESP32-C5 作为服务器和客户端来发送和接收指定的数据消息。它还将用于从手机接收或向 XIAO 发送消息。

### 一些基本概念

#### 服务器和客户端

在低功耗蓝牙中，有两种类型的设备：服务器和客户端。XIAO ESP32-C5 可以充当客户端或服务器。

服务器广播其存在，以便其他设备可以找到它，并包含客户端可以读取的数据。客户端扫描附近的设备，当它找到正在寻找的服务器时，它建立连接并监听传入的数据。这称为点对点通信。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/49.png" style={{width:800, height:'auto'}}/></div>

#### 属性

属性实际上是一段数据。每个蓝牙设备都用于提供服务，服务是数据的集合，该集合可以称为数据库，数据库中的每个条目都是一个属性，所以这里我将属性翻译为数据条目。您可以将蓝牙设备想象为一个表格，表格内的每一行都是一个属性。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/52.png" style={{width:600, height:'auto'}}/></div>

#### GATT

当两个蓝牙设备建立连接时，它们需要一个协议来确定如何通信。GATT（通用属性配置文件）就是这样一个协议，它定义了蓝牙设备之间如何传输数据。

在 GATT 协议中，设备的功能和属性被组织成称为服务、特征和描述符的结构。服务表示设备提供的一组相关功能和特性。每个服务可以包含多个特征，这些特征定义了服务的某种属性或行为，例如传感器数据或控制命令。每个特征都有一个唯一标识符和一个值，可以读取或写入以进行通信。描述符用于描述特征的元数据，例如特征值的格式和访问权限。

通过使用 GATT 协议，蓝牙设备可以在不同的应用场景中进行通信，例如传输传感器数据或控制远程设备。

#### BLE 特征

ATT 代表属性协议。它是 BLE 中数据交换的底层机制。ATT 依赖于一组命令，例如请求、响应、通知和指示。在蓝牙协议栈中，ATT 是负责传输数据的层，使其成为分析蓝牙数据包时的主要关注点。

ATT 命令，正式称为 ATT PDU（协议数据单元）。它包括 4 个类别：读取、写入、通知和指示。这些命令可以分为两种类型：像 **Write Request** 和 **Indication** 这样的操作需要对等方的确认，而 **Write Command** 和 **Notification** 则不需要。

服务和特征在 GATT 层中定义。服务端提供服务，服务就是数据，数据就是属性，服务和特征是数据的逻辑表示，或者说用户可以看到的数据最终转换为服务和特征。

让我们从移动设备的角度看看服务和特征是什么样的。nRF Connect 是一个应用程序，它非常直观地向我们展示了每个数据包应该是什么样子。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/ble_usage_4.jpg" style={{width:400, height:'auto'}}/></div>

如您所见，在蓝牙规范中，每个特定的蓝牙应用都由多个服务组成，每个服务由多个特征组成。特征由 UUID、属性和值组成。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/50.png" style={{width:300, height:'auto'}}/></div>

属性用于描述对特征的操作类型和权限，例如是否支持读取、写入、通知等。这类似于 ATT PDU 中包含的四个类别。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/51.png" style={{width:800, height:'auto'}}/></div>

#### UUID

每个服务、特征和描述符都有一个 UUID（通用唯一标识符）。UUID 是一个唯一的 128 位（16 字节）数字。例如：

```
ea094cbd-3695-4205-b32d-70c1dea93c35
```

对于 [SIG（蓝牙特殊兴趣小组）](https://www.bluetooth.com/specifications/gatt/services) 中指定的所有类型、服务和配置文件，都有缩短的 UUID。但如果您的应用程序需要自己的 UUID，您可以使用这个 [UUID 生成器网站](https://www.uuidgenerator.net/) 来生成它。

### BLE 使用示例

接下来，我们将通过几个实际示例介绍如何在 XIAO ESP32-C5 上使用 **低功耗蓝牙（BLE）**。<br/>

以下示例基于 **Arduino IDE** 实现。如果您之前没有使用过 Arduino IDE，请访问：[Seeed Studio XIAO ESP32-C5 入门指南](https://wiki.seeedstudio.com/cn/xiao_esp32c5_getting_started/)

#### BLE 扫描器

在 **BLE 扫描器模式**下，XIAO ESP32-C5 充当 **中央设备**或 **观察者**。它不建立连接，而是**监听**周围区域其他设备广播的广告数据包。

##### 程序

- 以下是演示如何在 XIAO ESP32-C5 上使用 BLE 扫描器模式的参考代码片段。

```cpp
#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLEScan.h>
#include <BLEAdvertisedDevice.h>

int scanTime = 5; // Scanning duration (seconds)
BLEScan* pBLEScan;

class MyAdvertisedDeviceCallbacks: public BLEAdvertisedDeviceCallbacks {
    void onResult(BLEAdvertisedDevice advertisedDevice) {
      // Callback function when a device is discovered
      Serial.printf("Device found: %s \n", advertisedDevice.toString().c_str());
    }
};

void setup() {
  Serial.begin(115200);
  Serial.println("Initializing BLE Scanner...");

  BLEDevice::init("");
  pBLEScan = BLEDevice::getScan(); // Create scan object
  pBLEScan->setAdvertisedDeviceCallbacks(new MyAdvertisedDeviceCallbacks());
  pBLEScan->setActiveScan(true); // Active scan (consumes more power but gets more complete information)
  pBLEScan->setInterval(100);
  pBLEScan->setWindow(99);
}

void loop() {
  Serial.println("Starting scan...");
  // false here means do not keep duplicate device results, true to keep
  BLEScanResults* foundDevices = pBLEScan->start(scanTime, false);

  Serial.print("Scan finished, number of devices found: ");
  Serial.println(foundDevices->getCount());
  Serial.println("Scan completed, clearing results...");

  pBLEScan->clearResults();   // Clear cache to release memory
  delay(2000);
}
```

##### 效果展示

- 上传代码并打开串口监视器；XIAO ESP32-C5 将扫描周围环境中的蓝牙设备并打印相关信息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/ble_usage_1.png" style={{width:800, height:'auto'}}/></div>

#### BLE 服务器/客户端

在 BLE 服务器模式下，创建一个服务和特征，广播其存在，并等待其他设备连接以读写数据。<br/>
在 BLE 客户端模式下，客户端扫描特定的服务 UUID，找到服务器后发起连接，并读取或写入服务器的特征值。

##### BLE 服务器程序

接下来，将使用一个代码示例来演示如何在 XIAO ESP32-C5 上设置 BLE 服务器。

- 参考代码

```cpp
#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLEServer.h>

// Website for generating UUID: uuidgenerator.net
#define SERVICE_UUID        "4fafc201-1fb5-459e-8fcc-c5c9c331914b"
#define CHARACTERISTIC_UUID "beb5483e-36e1-4688-b7f5-ea07361b26a8"

class MyCallbacks: public BLECharacteristicCallbacks {
    void onWrite(BLECharacteristic *pCharacteristic) {
      String value = pCharacteristic->getValue();
      if (value.length() > 0) {
        Serial.print("Data received from Client: ");
        for (int i = 0; i < value.length(); i++)
          Serial.print(value[i]);
        Serial.println();
      }
    }
};

void setup() {
  Serial.begin(115200);

  // 1. Initialize BLE
  BLEDevice::init("XIAO_ESP32C5_Server");

  // 2. Create Server
  BLEServer *pServer = BLEDevice::createServer();

  // 3. Create Service
  BLEService *pService = pServer->createService(SERVICE_UUID);

  // 4. Create Characteristic (set read/write permissions)
  BLECharacteristic *pCharacteristic = pService->createCharacteristic(
                                         CHARACTERISTIC_UUID,
                                         BLECharacteristic::PROPERTY_READ |
                                         BLECharacteristic::PROPERTY_WRITE
                                       );

  pCharacteristic->setCallbacks(new MyCallbacks()); // Set write callback function
  pCharacteristic->setValue("Hello World from XIAO"); // Set initial value

  // 5. Start Service
  pService->start();

  // 6. Start Advertising
  BLEAdvertising *pAdvertising = BLEDevice::getAdvertising();
  pAdvertising->addServiceUUID(SERVICE_UUID);
  pAdvertising->setScanResponse(true);
  pAdvertising->setMinPreferred(0x06); 
  BLEDevice::startAdvertising();
}

void loop() {
  delay(2000);
}
```

##### 效果展示

- 上传代码，然后下载 nRF Connect 应用，扫描并发现 BLE 设备（如上所述，名为 **XIAO_ESP32C5_Server**），选择它以建立连接。

同时，您可以在主要的移动应用商店中搜索并下载 **nRF Connect** 应用，该应用允许您的手机搜索并连接蓝牙设备。

- Android: [nRF Connect](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en)
- IOS: [nRF Connect](https://apps.apple.com/us/app/nrf-connect-for-mobile/id1054362403)

下载软件后，按照下面显示的步骤搜索并连接 XIAO ESP32-C5，您将看到广播的 **Hello World from XIAO**。

<table align="center">
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/ble_usage_1.jpg" style={{width:200, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/ble_usage_2.jpg" style={{width:200, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/ble_usage_3.jpg" style={{width:200, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/ble_usage_4.jpg" style={{width:200, height:'auto'}}/></div></td>
 </tr>
</table>

##### BLE 客户端程序

接下来，将使用一个代码示例来演示如何在 XIAO ESP32-C5 上设置 BLE 客户端。要使用客户端功能，您需要至少两个支持蓝牙的 XIAO 设备：一个作为服务器发送数据，另一个作为客户端接收数据。

<details>
<summary>参考代码</summary>

```cpp
#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLEScan.h>
#include <BLEAdvertisedDevice.h>
#include <BLEClient.h>

// UUID of the Server (must be exactly the same as the Server)
static BLEUUID serviceUUID("4fafc201-1fb5-459e-8fcc-c5c9c331914b");
static BLEUUID charUUID("beb5483e-36e1-4688-b7f5-ea07361b26a8");

// Scanning parameters
const int scanTime = 10; // Scanning duration (seconds)

// Global variables
static BLEAddress serverAddress;        // Address of the found Server
static bool deviceFound = false;        // Whether the target device is found
static BLERemoteCharacteristic* pRemoteCharacteristic = nullptr;
static BLEClient* pClient = nullptr;

// Scan callback: called when a device is discovered
class MyAdvertisedDeviceCallbacks : public BLEAdvertisedDeviceCallbacks {
  void onResult(BLEAdvertisedDevice advertisedDevice) {
    // Check if it contains the service UUID we need
    if (advertisedDevice.haveServiceUUID() && advertisedDevice.isAdvertisingService(serviceUUID)) {
      Serial.print("Found target Server! Name: ");
      Serial.print(advertisedDevice.getName().c_str());
      Serial.print(", Address: ");
      Serial.println(advertisedDevice.getAddress().toString().c_str());

      serverAddress = advertisedDevice.getAddress();
      deviceFound = true;

      // Stop scanning (stop once found)
      BLEDevice::getScan()->stop();
    }
  }
};

// Client connection callback (optional, used to monitor connection status)
class MyClientCallbacks : public BLEClientCallbacks {
  void onConnect(BLEClient* pclient) {
    Serial.println("Connected to Server successfully!");
  }

  void onDisconnect(BLEClient* pclient) {
    Serial.println("Disconnected from Server.");
    deviceFound = false;  // Rescan next time
  }
};

void setup() {
  Serial.begin(115200);
  while (!Serial); // Wait for serial port to open (optional)

  Serial.println("Starting BLE Client...");

  BLEDevice::init("XIAO_Client");  // Client device name

  // Start the first scan
  scanAndConnect();
}

void loop() {
  // If connected successfully, read/write data every 5 seconds
  if (pClient && pClient->isConnected() && pRemoteCharacteristic) {
    // Read characteristic value
    String value = pRemoteCharacteristic->readValue();
    Serial.print("Read value from Server: ");
    Serial.println(value.c_str());

    // Write new data (with response)
    String sendMsg = "Hello from Client @ " + String(millis() / 1000) + "s";
    pRemoteCharacteristic->writeValue(sendMsg.c_str(), true);  // true = require response
    Serial.println("Sent: " + sendMsg);

    delay(5000);
  } 
  else {
    // Not connected or disconnected → rescan
    if (!deviceFound || (pClient && !pClient->isConnected())) {
      Serial.println("Server not connected, rescanning...");
      scanAndConnect();
    }
    delay(1000);
  }
}

// Encapsulate scan + connect logic
void scanAndConnect() {
  BLEScan* pBLEScan = BLEDevice::getScan();
  pBLEScan->setAdvertisedDeviceCallbacks(new MyAdvertisedDeviceCallbacks());
  pBLEScan->setActiveScan(true);  // Active scan to get more information
  pBLEScan->setInterval(100);
  pBLEScan->setWindow(99);

  Serial.println("Scanning for Server...");
  deviceFound = false;
  pBLEScan->start(scanTime, false);  // Scan for scanTime seconds

  if (!deviceFound) {
    Serial.println("Target Server not found, will retry later.");
    return;
  }

  // Create client and connect after finding the device
  pClient = BLEDevice::createClient();
  pClient->setClientCallbacks(new MyClientCallbacks());

  Serial.print("Connecting to ");
  Serial.println(serverAddress.toString().c_str());

  if (!pClient->connect(serverAddress)) {
    Serial.println("Connection failed!");
    return;
  }

  // Get remote service
  BLERemoteService* pRemoteService = pClient->getService(serviceUUID);
  if (pRemoteService == nullptr) {
    Serial.println("Failed to find service UUID");
    pClient->disconnect();
    return;
  }
  Serial.println("Service found.");

  // Get remote characteristic
  pRemoteCharacteristic = pRemoteService->getCharacteristic(charUUID);
  if (pRemoteCharacteristic == nullptr) {
    Serial.println("Failed to find characteristic UUID");
    pClient->disconnect();
    return;
  }
  Serial.println("Characteristic found. Ready to communicate!");
}
```

</details>

##### 效果展示

- 上传代码，然后打开串口监视器观察——您将接收到服务器发送的蓝牙数据。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/ble_usage_2.png" style={{width:800, height:'auto'}}/></div>

:::tip
验证客户端功能时，您需要提前将服务器程序烧录到另一个 XIAO 设备上；否则验证将失败。
:::

#### NimBLE-Arduino

原生的 Arduino BLEDevice 库基于 Bluedroid 协议栈；它提供完整功能但消耗大量的 Flash 和 RAM。NimBLE 是一个完全重写的 BLE 协议栈（源自 Apache Mynewt），具有以下优势：

1. 极低的内存占用（RAM 使用量减少超过 50%）。

2. 更快的连接速度。

3. API 兼容性：它被设计为与原生 Arduino BLE 库的语法几乎完全兼容，只需要修改头文件和少量类型调整。

您可以访问作者的 GitHub 仓库：[NimBLE-Arduino](https://github.com/h2zero/NimBLE-Arduino/tree/master) 了解更多详情。<br/>

接下来，我们将基于 NimBLE-Arduino 库实现蓝牙扫描功能。

##### 程序

- 安装 NimBLE-Arduino 库。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/ble_usage_libaray_1.png" style={{width:800, height:'auto'}}/></div><br/>

<details>

<summary>参考代码</summary>

```CPP
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

</details>

##### 效果展示

- 上传代码并打开串口监视器观察。它同样实现了蓝牙扫描功能，但扫描速度更快。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/ble_usage_3.png" style={{width:800, height:'auto'}}/></div>

#### 示例：连接到 Home Assistant

到此为止，您应该已经对 XIAO ESP32-C5 的 BLE 模式有了基本的了解。
接下来，我们可以动手做一个更实用的项目：让 XIAO ESP32-C5 模拟一个温湿度传感器（或简单的按钮开关），通过 BLE 定期广播传感器数据或状态。Home Assistant 将自动发现这个 BLE 设备，并直接在界面上显示当前的温湿度值（或按钮状态），无需额外的复杂集成配置。<br/>
这个简单的示例充分展示了 ESP32-C5 在物联网（IoT）和智能家居领域的巨大潜力：其低功耗、易于开发以及对被动 BLE 设备的开箱即用支持，使任何人都能快速构建自己的智能传感器网络。<br/>

:::tip
如果您从未使用过 Home Assistant，可以访问：[连接 XIAO ESP32-C5 到 Home Assistant](https://wiki.seeedstudio.com/cn/xiao_esp32c5_homeassistant/)
:::

- 参考代码

```cpp
#include <NimBLEDevice.h>

// Simulated temperature value
float temp = 20.0;

void setup() {
  Serial.begin(115200);

  // 1. Initialize NimBLE
  NimBLEDevice::init("XIAO_BTHome_Sensor");

  // 2. Create advertising object
  NimBLEAdvertising *pAdvertising = NimBLEDevice::getAdvertising();

  // ==========================================
  // Construct BTHome data packet (This is the most critical part)
  // ==========================================
  // Reference: https://bthome.io/format/

  std::string serviceData = "";

  // A. BTHome device information byte (Required)
  // bit 0: Encryption (0=No)
  // bit 1-2: Version (2=v2)
  // Result: 0100 0000 -> 0x40
  serviceData += (char)0x40; 

  // B. Temperature data (16-bit, 0.01 factor)
  // ID: 0x02 (Temperature)
  serviceData += (char)0x02; 

  // Value: Assume 25.50°C -> 2550 (0x09F6) -> Little-endian: F6 09
  int16_t tempInt = (int16_t)(temp * 100); 
  serviceData += (char)(tempInt & 0xFF);        // Low byte
  serviceData += (char)((tempInt >> 8) & 0xFF); // High byte

  // C. Battery level (8-bit, %) - Optional
  // ID: 0x01 (Battery)
  serviceData += (char)0x01;
  serviceData += (char)85; // 85%

  // ==========================================

  // 3. Put the constructed data into Service Data
  // BTHome UUID is 0xFCD2
  NimBLEAdvertisementData oAdvertisementData = NimBLEAdvertisementData();
  oAdvertisementData.setFlags(0x06); // General Discovery Mode
  oAdvertisementData.setServiceData(NimBLEUUID((uint16_t)0xFCD2), serviceData);

  // 4. Set advertising parameters
  pAdvertising->setAdvertisementData(oAdvertisementData);

  // 5. Start advertising (Advertise every 3 seconds, can be set longer to save power in practice)
  pAdvertising->start();

  Serial.println("BTHome advertising started...");
}

void loop() {
  // To update data dynamically: stop advertising -> update data -> restart advertising
  // For simple demonstration, only static advertising logic is used here
  // In actual projects, you will read sensors here, update oAdvertisementData, then enter sleep mode
  delay(10000);
}
```

- 上传代码并打开 Home Assistant 平台。您可以在 **Settings** -> **Devices & Services** 下找到 BTHome 设备并将其添加到仪表板。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/ble_usage_4.png" style={{width:800, height:'auto'}}/></div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>