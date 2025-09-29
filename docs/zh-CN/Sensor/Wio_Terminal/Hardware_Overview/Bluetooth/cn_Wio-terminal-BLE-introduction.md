---
description: 客户端和服务器介绍
title: 客户端和服务器介绍
keywords:
- Wio_terminal Bluetooth
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-terminal-BLE-introduction
last_update:
  date: 1/16/2023
  author: jianjing Huang
---

# **客户端和服务器介绍**

本wiki介绍了使用Wio terminal通过BLE进行客户端和服务器通信功能。

<div align="center"><img width ="{400}" src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/Wio-connect.png"/></div>

## **所需硬件**

- [**Wio terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

:::note
如果您有Wio terminal，请访问[**蓝牙概述**](https://wiki.seeedstudio.com/cn/Wio-Terminal-Bluetooth-Overview/)来更新RTL8720上的最新BLE固件并下载相关的Arduino库。
:::

## **概述**

### **什么是客户端和服务器**

- 客户端向服务器发出数据通信请求，这允许设备与其他蓝牙设备无线交换数据。
- 服务器向客户端提供数据服务，它通过特征值封装数据。多个特征值组成一个服务，因此服务是基本的BLE应用。
- 客户端和服务器是通信关系，它们都可以作为主设备或从设备。

### **什么是UUID**

- UUID通常用于识别在系统或其网络内需要唯一的信息。
- 所有BLE设备都有服务UUID、特征值UUID和描述符UUID，所有产品的UUID都应该是唯一的，重复概率低使它们在数据库中作为关联键和组织内物理硬件的标识符非常有用。

### **Wio terminal上的BLE服务器**

具有低功耗蓝牙的Wio terminal可以充当服务器和客户端。服务器广播其存在。它可以被其他设备发现，并包含客户端可以读取的数据。BLE支持两种类型的模式，如广播模式和网状网络模式。在广播模式下，服务器向连接的多个客户端传输数据，在网状网络模式下，所有设备都连接在一起。

服务器和客户端都有一个"SERVICE UUID"来建立服务器和客户端之间的连接。在此服务内，可以有几个由特征值UUID定义的"特征值"。我们使用两个特征值TX和RX来向客户端发送数据和从客户端接收数据。Wio terminal（充当服务器）通过TX特征值UUID"通知"客户端，数据被发送到Wio terminal并通过RX特征值UUID接收。但是，由于存在发送和接收，Wio terminal上的TX实际上是Android应用程序上的RX。

### **nRF Connect APP使用方法**

nRF connect APP用于搜索BLE设备的UUID和MAC地址，当您不知道设备的UUID和MAC地址时，它也能够与BLE设备通信。

- 在您的智能手机上下载[**nRF Connect APP**](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en)。
- 扫描BLE设备。
- 找到BLE设备并连接它，然后您将看到UUID和MAC地址。
- 您可以在特征值上发送或接收数据。

这些是nRF Connect APP扫描到的BLE设备。

<div align="center"><img width ="{400}" src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/nRF-device-scan.png"/></div>

在特征值上，有向上箭头表示向服务器发送数据，向下箭头表示从服务器接收数据。

<div align="center"><img width ="{400}" src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/interface.png"/></div>

界面选项根据设备功能而定，例如，我连接到一个具有简单功能的Wio terminal（服务器），所以只有一个服务UUID具有不同功能的特征值，这取决于设备的复杂性。

## **BLE客户端使用方法**

此示例将Wio terminal作为客户端搜索周围所有BLE设备，然后通过BLE显示BLE设备名称和MAC地址。

- 您需要一个具有[**最新BLE固件**](https://files.seeedstudio.com/wiki/Wio-Terminal-BLE/20200914-seeed-ambd-firmware-rpc-v1.0.0.zip)的Wio terminal。
- 在代码中设置服务器UUID和MAC地址。
- 在Wio terminal上上传[**客户端代码**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcBLE/blob/master/examples/BLE_client/BLE_client.ino)。

### 客户端代码片段

在代码中，我们需要放入您想要连接的服务器的UUID和特征值UUID服务。

:::note
如果您不知道设备的MAC地址和UUID，请转到**nRF Connect APP**页面。
:::

```cpp
// The remote service we wish to connect to.
static BLEUUID serviceUUID(0x180F);
// The characteristic of the remote service we are interested in.
static BLEUUID    charUUID(0x2A19);
```

:::note
代码中的 UUID 是我们定义的，仅用于测试，通常商业产品的 UUID 格式与此不同，例如：xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx。
:::

在代码中更新您要连接的设备的 MAC 地址。

```cpp
uint8_t bd_addr[6] = {0x7d, 0x18, 0x1b, 0xf1, 0xf7, 0x2c}; // MAC address: 2c:f7:f1:1b:18:7d
```

:::note
蓝牙 MAC 地址被设计为唯一的，并且可以追溯到芯片制造商，此外，您需要将 MAC 地址以相反的顺序放置。
:::

连接到远程 BLE 服务器。

```cpp
pClient->connect(myDevice);
```

在远程BLE服务器中获取我们所需服务的引用。

```cpp
BLERemoteService* pRemoteService = pClient->getService(serviceUUID);
```

获取远程BLE服务器服务中特征的引用。

```cpp
pRemoteCharacteristic = pRemoteService->getCharacteristic(charUUID);
```

### **客户端代码**

```cpp
/**
 * 一个功能丰富的BLE客户端示例。
 * 实现了许多新功能。
 * 作者未知
 * 由chegewara更新
 */

#include "rpcBLEDevice.h"
#include <BLEScan.h>
#include <BLEAdvertisedDevice.h>

// 我们希望连接的远程服务。
static BLEUUID serviceUUID(0xFEE0);
// 我们感兴趣的远程服务的特征。
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
    Serial.print("特征的通知回调 ");
    Serial.print(pBLERemoteCharacteristic->getUUID().toString().c_str());
    Serial.print(" 数据长度 ");
    Serial.println(length);
    Serial.print("数据: ");
    Serial.print(*(uint8_t *)pData);
}


class MyClientCallback : public BLEClientCallbacks {
  void onConnect(BLEClient* pclient) {
  }

  void onDisconnect(BLEClient* pclient) {
    connected = false;
    Serial.println("断开连接");
  }
};


bool connectToServer() {
    Serial.print("正在建立连接到 ");
    Serial.println(myDevice->getAddress().toString().c_str());
    
    BLEClient*  pClient  = BLEDevice::createClient();
    Serial.println(" - 已创建客户端");

    pClient->setClientCallbacks(new MyClientCallback());
 

    // 连接到远程BLE服务器。
    pClient->connect(myDevice);  // 如果你传递BLEAdvertisedDevice而不是地址，它将识别对等设备地址的类型（公共或私有）
    Serial.println(" - 已连接到服务器");

    // 获取远程BLE服务器中我们需要的服务的引用。
    BLERemoteService* pRemoteService = pClient->getService(serviceUUID);
    Serial.println(serviceUUID.toString().c_str());
    if (pRemoteService == nullptr) {
      Serial.print("未能找到我们的服务UUID: ");
      Serial.println(serviceUUID.toString().c_str());
      pClient->disconnect();
      return false;
    }
    Serial.println(" - 找到了我们的服务");


    // 获取远程BLE服务器服务中特征的引用。
    pRemoteCharacteristic = pRemoteService->getCharacteristic(charUUID);
    if (pRemoteCharacteristic == nullptr) {
      Serial.print("未能找到我们的特征UUID: ");
      Serial.println(charUUID.toString().c_str());
      pClient->disconnect();
      return false;
    }
    Serial.println(" - 找到了我们的特征");


    // 读取特征的值。
    if(pRemoteCharacteristic->canRead()) {
      Serial.println(" -  可以读取  开始");
      std::string value = pRemoteCharacteristic->readValue();
      Serial.print("特征值为: ");
      Serial.println(value.c_str());
    }
    
    if(pRemoteCharacteristic->canNotify())
      pRemoteCharacteristic->registerForNotify(notifyCallback);

    connected = true;
    return true;
}
/**
 * 扫描BLE服务器并找到第一个广播我们正在寻找的服务的服务器。
 */
class MyAdvertisedDeviceCallbacks: public BLEAdvertisedDeviceCallbacks {
 /**
   * 为每个广播的BLE服务器调用。
   */
  void onResult(BLEAdvertisedDevice advertisedDevice) {
    Serial.print("发现BLE广播设备: ");
    Serial.println(advertisedDevice.toString().c_str());
   
    // 我们找到了一个设备，现在让我们看看它是否包含我们正在寻找的服务。
    if (memcmp(advertisedDevice.getAddress().getNative(),BattServer.getNative(), 6) == 0) {
      Serial.print("找到BATT设备: ");
      Serial.println(advertisedDevice.toString().c_str());
      BLEDevice::getScan()->stop();
      Serial.println("新建BLEAdvertisedDevice");
      myDevice = new BLEAdvertisedDevice(advertisedDevice);
      Serial.println("新建BLEAdvertisedDevice完成");
      doConnect = true;
      doScan = true; 
  } // onResult
  }
}; // MyAdvertisedDeviceCallbacks


void setup() {
  Serial.begin(115200);
  while(!Serial){};
  delay(2000);
  Serial.println("启动Arduino BLE客户端应用程序...");
  BLEDevice::init("");

  // 获取扫描器并设置我们想要使用的回调，以便在检测到新设备时得到通知。
  // 指定我们想要主动扫描并开始扫描运行5秒。
  BLEScan* pBLEScan = BLEDevice::getScan();
  pBLEScan->setAdvertisedDeviceCallbacks(new MyAdvertisedDeviceCallbacks());
  pBLEScan->setInterval(1349);
  pBLEScan->setWindow(449);
  pBLEScan->setActiveScan(true);
  pBLEScan->start(5, false);
} // setup结束。


// 这是Arduino主循环函数。
void loop() {
 
  // 如果标志"doConnect"为真，那么我们已经扫描并找到了我们希望连接的所需BLE服务器。
  // 现在我们连接到它。一旦我们连接，我们将connected标志设置为真。
  if (doConnect == true) {
    if (connectToServer()) {
      Serial.println("我们现在已连接到BLE服务器。");
    } else {
      Serial.println("我们连接服务器失败；我们不会再做任何事情。");
    }
    doConnect = false;
  }
  Serial.printf(".");
  delay(1000);
} // loop结束
```

### **代码运行结果**

这是一个简单的客户端代码演示，没有连接任何设备，Wio terminal 扫描周围的 BLE 设备并显示这些设备。

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/BLE-device-print.png"/></div>

## **BLE 服务器使用方法**

此示例将 Wio terminal 作为服务器连接到另一个 Wio terminal（客户端），然后通过 BLE 接收客户端请求。

### **服务器代码片段**

您可以按如下方式定义 BLE 设备名称：

```cpp
BLEDevice::init("UART Service");
```

您需要在 Wio 终端上为服务器设备定义 UUID。

```cpp
#define SERVICE_UUID        "180f"
#define CHARACTERISTIC_UUID "2a19"
#define DESCRIPTOR_UUID     "4545"
```

创建 BLE 服务器

```cpp
BLEServer *pServer = BLEDevice::createServer();
```

使用服务器 UUID 创建 BLE 服务。

```cpp
BLEService *pService = pServer->createService(SERVICE_UUID);
```

添加一个特征。

```cpp
  BLECharacteristic *pCharacteristic = pService->createCharacteristic(
                                         CHARACTERISTIC_UUID,
                                         BLECharacteristic::PROPERTY_READ |
                                         BLECharacteristic::PROPERTY_WRITE
                                       );
pCharacteristic->setValue("Hello World says Neil");
```

读写功能。

```cpp
  pCharacteristic->setAccessPermissions(GATT_PERM_READ | GATT_PERM_WRITE);
  BLEDescriptor *pDescriptor = pCharacteristic->createDescriptor(
                                         DESCRIPTOR_UUID,
                                          ATTRIB_FLAG_VOID | ATTRIB_FLAG_ASCII_Z,
                                         GATT_PERM_READ | GATT_PERM_WRITE,2
                                         );
```

启动 BLE 服务

```cpp
pService->start();
```

广告允许设备广播定义其意图的信息。这意味着当移动设备接收到蓝牙消息时，接收者可以选择接受或拒绝该消息。接收者需要明确表示他们希望接收营销消息。

```cpp
BLEAdvertising *pAdvertising = BLEDevice::getAdvertising();
```

### **客户端和服务器通信**

我们在这个示例中进行了一个简单的测试，Wio terminal 客户端连接到 Wio terminal 服务器，当客户端找到服务器时，它们将连接，同时服务器将向客户端发送一条消息。

- 您需要两个 Wio terminal。
- 您需要创建 UUID 以供客户端连接使用。
- 请在此 **github** 中下载 [**客户端**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcBLE/tree/master/examples/BLE_client) 和 [**服务器**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcBLE/tree/master/examples/BLE_server) 代码。
- 将客户端代码上传到 Wio terminal。
- 将服务器代码上传到另一个 Wio terminal。

当上传并运行**服务器代码**时，在连接客户端之前，您将看到它在 Arduino IDE 监视器上持续打印"unpaired"。

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/Server_side3.png"/></div>

连接到客户端后，它将停止打印消息，客户端将打印来自服务器的消息。

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/Client_side7.png"/></div>

### 服务器代码

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
        Serial.print("接收到的值: ");
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
  Serial.println("开始BLE工作!");

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

  // BLEAdvertising *pAdvertising = pServer->getAdvertising();  // 这仍然适用于向后兼容性
  BLEAdvertising *pAdvertising = BLEDevice::getAdvertising();
  pAdvertising->addServiceUUID(SERVICE_UUID);
  pAdvertising->setScanResponse(true);
  pAdvertising->setMinPreferred(0x06);  // 有助于解决iPhone连接问题的函数
  pAdvertising->setMinPreferred(0x12);
  BLEDevice::startAdvertising();
  Serial.println("特征已定义! 现在你可以在手机上读取它!");
}

void loop() { 
  // 在这里放置你的主要代码，重复运行:
  Serial.println("1");
  delay(2000);
}
```

## 服务器连接到智能手机客户端

<div align="center"><img src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/vidoeh-GIF.gif"/></div>

此示例使用智能手机作为客户端连接到 Wio terminal（服务器），Wio terminal 能够接收来自客户端的消息。

- 在手机上下载 nRF connect 应用程序。
- 将代码上传到 Wio terminal。
- 打开 nRF connect 应用程序搜索 Wio terminal 并连接它。

:::note
检查代码中的设备名称，这将帮助您搜索它。
:::

### **代码**

```cpp
#include "rpcBLEDevice.h"
#include <BLE2902.h>
#include <TFT_eSPI.h> // 硬件特定库
#include <SPI.h>
TFT_eSPI tft = TFT_eSPI();       // 调用自定义库
TFT_eSprite spr = TFT_eSprite(&tft);  // 精灵图 
 
BLEServer *pServer = NULL;
BLECharacteristic * pTxCharacteristic;
bool deviceConnected = false;
bool oldDeviceConnected = false;
String Value11;
 
#define SERVICE_UUID           "6E400001-B5A3-F393-E0A9-E50E24DCCA9E" // UART 服务 UUID
#define CHARACTERISTIC_UUID_RX "6E400002-B5A3-F393-E0A9-E50E24DCCA9E"
#define CHARACTERISTIC_UUID_TX "6E400003-B5A3-F393-E0A9-E50E24DCCA9E"
 
class MyServerCallbacks: public BLEServerCallbacks {
    void onConnect(BLEServer* pServer) {
      deviceConnected = true;
      spr.fillSprite(TFT_BLACK);
      spr.createSprite(240, 100);
      spr.setTextColor(TFT_WHITE, TFT_BLACK);
      spr.setFreeFont(&FreeSansBoldOblique12pt7b);
      spr.drawString("消息: ", 20, 70);
      spr.setTextColor(TFT_GREEN, TFT_BLACK);
      spr.drawString("状态: 已连接",10 ,5); 
      spr.pushSprite(0, 0);
    };
 
    void onDisconnect(BLEServer* pServer) {
      deviceConnected = false;
      Serial.print("123123");
      spr.fillSprite(TFT_BLACK);
      spr.createSprite(240, 100);
      spr.setTextColor(TFT_WHITE, TFT_BLACK);
      spr.setFreeFont(&FreeSansBoldOblique12pt7b);
      spr.drawString("消息: ", 20, 70);
      spr.setTextColor(TFT_RED, TFT_BLACK);
      spr.drawString("状态: 已断开",10 ,5); 
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
 
  BLEDevice::init("UART Servicess");  //设备名称定义
 
  // 创建 BLE 服务器
  pServer = BLEDevice::createServer();
  pServer->setCallbacks(new MyServerCallbacks());
 
  // 创建 BLE 服务
  BLEService *pService = pServer->createService(SERVICE_UUID);
 
  // 创建 BLE 特征
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
 
  // 启动服务
  pService->start();
 
  // 开始广播
  pServer->getAdvertising()->start();
      spr.fillSprite(TFT_BLACK);
      spr.createSprite(240, 100);
      spr.setTextColor(TFT_WHITE, TFT_BLACK);
      spr.setFreeFont(&FreeSansBoldOblique12pt7b);
      spr.drawString("状态: 已断开",10 ,5); 
      spr.drawString("消息: ", 20, 70);
      spr.pushSprite(0, 0);
}
 
void loop() {
 
    // 断开连接
    if (!deviceConnected && oldDeviceConnected) {
        delay(500); // 给蓝牙协议栈准备的时间
        pServer->startAdvertising(); // 重新开始广播
        oldDeviceConnected = deviceConnected;
    }
    // 连接中
    if (deviceConnected && !oldDeviceConnected) {
    // 在连接时在此处执行操作
        oldDeviceConnected = deviceConnected;
    }
}
```