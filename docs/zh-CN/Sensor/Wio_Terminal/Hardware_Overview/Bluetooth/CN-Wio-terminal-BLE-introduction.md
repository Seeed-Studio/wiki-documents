---
description: 客户端和服务器介绍
title: 客户端和服务器介绍
keywords:
- Wio_terminal Bluetooth
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-terminal-BLE-introduction
last_update:
  date: 3/08/2024
  author: 金菊
---

# **客户端和服务器介绍**

本Wiki介绍了使用Wio终端通过BLE进行客户端和服务器通信的功能。

<div align="center"><img width ="{400}" src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/Wio-connect.png"/></div>

## **所需硬件**

- [**Wio terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

:::note
如果您拥有Wio终端，请访问 [**Bluetooth 概述**](https://wiki.seeedstudio.com/Wio-Terminal-Bluetooth-Overview/) 以获取最新的RTL8720 BLE固件并下载所需的Arduino库。
:::

## **概述**

### **什么是客户端和服务器**

- 客户端向服务器发出数据通信请求，允许设备与其他蓝牙设备进行无线数据交换。
- 服务器向客户端提供数据服务，它通过特征将数据封装起来。多个特征组成一个服务，因此服务是基本的BLE应用程序。
- 客户端和服务器是通信关系，它们都可以作为主设备或从设备。

### **什么是 UUID**

- UUID通常用于标识需要在系统或网络中保持唯一性的信息。
- 所有BLE设备都具有服务UUID、特征UUID和描述符UUID，产品的所有UUID都应具有唯一性，并且重复的概率很低，因此它们在数据库中作为关联键和组织内物理硬件的标识符中非常有用。

### **Wio terminal上的BLE服务器**

具有蓝牙低功耗功能的Wio终端可以作为服务器和客户端。服务器会广告自己的存在，并且可以被其他设备发现，它包含客户端可以读取的数据。BLE支持两种模式，即广播模式和网状网络模式。在广播模式下，服务器向连接的多个客户端发送数据，在网状网络模式下，所有设备都互相连接。

服务器和客户端都有一个“服务UUID”用于建立服务器和客户端之间的连接。在此服务内部，可以有多个由特征UUID定义的“特征”。我们使用两个特征TX和RX来向客户端发送数据和接收来自客户端的数据。Wio终端（作为服务器）通过TX特征UUID“通知”客户端，数据被发送到Wio终端并通过RX特征UUID接收。然而，由于存在发送和接收，Wio终端上的TX实际上是Android应用程序上的RX。

### **nRF Connect APP 的使用**

nRF Connect APP用于搜索UUID和MAC地址的BLE设备，当您不知道设备的UUID和MAC地址时，它可以帮助您搜索并与BLE设备通信。

- 在您的智能手机上下载 [**nRF Connect APP**](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en) 。
- 扫描BLE设备
- 找到所需的BLE设备并连接，然后您将看到UUID和MAC地址。
- 您可以在特征上发送或接收数据。

nRF Connect APP扫描到的BLE设备如下所示。

<div align="center"><img width ="{400}" src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/nRF-device-scan.png"/></div>

在特征上，向上箭头表示向服务器发送数据，向下箭头表示从服务器接收数据。

<div align="center"><img width ="{400}" src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/interface.png"/></div>

界面选项根据设备功能而定，例如，我连接到一个具有简单功能的Wio terminal（服务器），因此只有一个具有不同功能特征的服务UUID，这取决于设备的复杂性。

## **BLE 客户端的使用**

此示例将Wio terminal作为客户端，搜索周围所有的BLE设备，然后通过BLE显示BLE设备的名称和MAC地址。

- 您需要具有 [**最新BLE固件**](https://files.seeedstudio.com/wiki/Wio-Terminal-BLE/20200914-seeed-ambd-firmware-rpc-v1.0.0.zip)的Wio terminal。
- 在代码中设置服务器UUID和MAC地址。
- 将 [**客户端代码**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcBLE/blob/master/examples/BLE_client/BLE_client.ino) 上传到 Wio terminal.

### 客户端代码片段

在代码中，我们需要放置您要连接的设备的UUID和特征UUID服务。

:::注
如果您不知道设备的MAC地址和UUID，请前往 **nRF Connect APP** 页面。
:::

```cpp
// The remote service we wish to connect to.
static BLEUUID serviceUUID(0x180F);
// The characteristic of the remote service we are interested in.
static BLEUUID    charUUID(0x2A19);
```

:::注
代码中的UUID由我们定义，仅用于测试，商业产品的UUID格式通常不同，例如，xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx。
:::

更新代码中要连接的设备的MAC地址。

```cpp
uint8_t bd_addr[6] = {0x7d, 0x18, 0x1b, 0xf1, 0xf7, 0x2c}; // MAC address: 2c:f7:f1:1b:18:7d
```

:::注
蓝牙MAC地址设计为唯一的，并且可以追溯到芯片制造商，此外，您需要将MAC地址按照相反的顺序放置。
:::

连接到远程BLE服务器。

```cpp
pClient->connect(myDevice);
```

获取对远程BLE服务器中我们所需服务的引用。

```cpp
BLERemoteService* pRemoteService = pClient->getService(serviceUUID);
```

获取对远程BLE服务器服务中的特征的引用。

```cpp
pRemoteCharacteristic = pRemoteService->getCharacteristic(charUUID);
```

### **客户端代码**

```cpp
/**
 * A BLE client example that is rich in capabilities.
 * There is a lot new capabilities implemented.
 * author unknown
 * updated by chegewara
 */

#include "rpcBLEDevice.h"
#include <BLEScan.h>
#include <BLEAdvertisedDevice.h>

// The remote service we wish to connect to.
static BLEUUID serviceUUID(0xFEE0);
// The characteristic of the remote service we are interested in.
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
    Serial.print("Notify callback for characteristic ");
    Serial.print(pBLERemoteCharacteristic->getUUID().toString().c_str());
    Serial.print(" of data length ");
    Serial.println(length);
    Serial.print("data: ");
    Serial.print(*(uint8_t *)pData);
}


class MyClientCallback : public BLEClientCallbacks {
  void onConnect(BLEClient* pclient) {
  }

  void onDisconnect(BLEClient* pclient) {
    connected = false;
    Serial.println("onDisconnect");
  }
};


bool connectToServer() {
    Serial.print("Forming a connection to ");
    Serial.println(myDevice->getAddress().toString().c_str());
    
    BLEClient*  pClient  = BLEDevice::createClient();
    Serial.println(" - Created client");

    pClient->setClientCallbacks(new MyClientCallback());
 

    // Connect to the remove BLE Server.
    pClient->connect(myDevice);  // if you pass BLEAdvertisedDevice instead of address, it will be recognized type of peer device address (public or private)
    Serial.println(" - Connected to server");

    // Obtain a reference to the service we are after in the remote BLE server.
    BLERemoteService* pRemoteService = pClient->getService(serviceUUID);
    Serial.println(serviceUUID.toString().c_str());
    if (pRemoteService == nullptr) {
      Serial.print("Failed to find our service UUID: ");
      Serial.println(serviceUUID.toString().c_str());
      pClient->disconnect();
      return false;
    }
    Serial.println(" - Found our service");


    // Obtain a reference to the characteristic in the service of the remote BLE server.
    pRemoteCharacteristic = pRemoteService->getCharacteristic(charUUID);
    if (pRemoteCharacteristic == nullptr) {
      Serial.print("Failed to find our characteristic UUID: ");
      Serial.println(charUUID.toString().c_str());
      pClient->disconnect();
      return false;
    }
    Serial.println(" - Found our characteristic");


    // Read the value of the characteristic.
    if(pRemoteCharacteristic->canRead()) {
      Serial.println(" -  can  read  start");
      std::string value = pRemoteCharacteristic->readValue();
      Serial.print("The characteristic value was: ");
      Serial.println(value.c_str());
    }
    
    if(pRemoteCharacteristic->canNotify())
      pRemoteCharacteristic->registerForNotify(notifyCallback);

    connected = true;
    return true;
}
/**
 * Scan for BLE servers and find the first one that advertises the service we are looking for.
 */
class MyAdvertisedDeviceCallbacks: public BLEAdvertisedDeviceCallbacks {
 /**
   * Called for each advertising BLE server.
   */
  void onResult(BLEAdvertisedDevice advertisedDevice) {
    Serial.print("BLE Advertised Device found: ");
    Serial.println(advertisedDevice.toString().c_str());
   
    // We have found a device, let us now see if it contains the service we are looking for.
    if (memcmp(advertisedDevice.getAddress().getNative(),BattServer.getNative(), 6) == 0) {
      Serial.print("BATT Device found: ");
      Serial.println(advertisedDevice.toString().c_str());
      BLEDevice::getScan()->stop();
      Serial.println("new BLEAdvertisedDevice");
      myDevice = new BLEAdvertisedDevice(advertisedDevice);
      Serial.println("new BLEAdvertisedDevice done");
      doConnect = true;
      doScan = true; 
  } // onResult
  }
}; // MyAdvertisedDeviceCallbacks


void setup() {
  Serial.begin(115200);
  while(!Serial){};
  delay(2000);
  Serial.println("Starting Arduino BLE Client application...");
  BLEDevice::init("");

  // Retrieve a Scanner and set the callback we want to use to be informed when we
  // have detected a new device.  Specify that we want active scanning and start the
  // scan to run for 5 seconds.
  BLEScan* pBLEScan = BLEDevice::getScan();
  pBLEScan->setAdvertisedDeviceCallbacks(new MyAdvertisedDeviceCallbacks());
  pBLEScan->setInterval(1349);
  pBLEScan->setWindow(449);
  pBLEScan->setActiveScan(true);
  pBLEScan->start(5, false);
} // End of setup.


// This is the Arduino main loop function.
void loop() {
 
  // If the flag "doConnect" is true then we have scanned for and found the desired
  // BLE Server with which we wish to connect.  Now we connect to it.  Once we are 
  // connected we set the connected flag to be true.
  if (doConnect == true) {
    if (connectToServer()) {
      Serial.println("We are now connected to the BLE Server.");
    } else {
      Serial.println("We have failed to connect to the server; there is nothin more we will do.");
    }
    doConnect = false;
  }
  Serial.printf(".");
  delay(1000);
} // End of loop
```

### **代码运行结果**

这是一个简单的客户端代码示例，没有连接任何设备，Wio终端扫描周围的BLE设备并显示这些设备。

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/BLE-device-print.png"/></div>

## **BLE 服务器的使用**

此示例将Wio终端作为服务器，连接其他Wio终端（客户端），然后通过BLE接收来自客户端的请求。

### **服务器代码片段**

您可以按照以下方式定义BLE设备名称：

```cpp
BLEDevice::init("UART Service");
```

您需要在 Wio terminal上定义服务器设备的UUID。

```cpp
#define SERVICE_UUID        "180f"
#define CHARACTERISTIC_UUID "2a19"
#define DESCRIPTOR_UUID     "4545"
```

创建BLE服务器。

```cpp
BLEServer *pServer = BLEDevice::createServer();
```

使用服务器UUID创建BLE服务。

```cpp
BLEService *pService = pServer->createService(SERVICE_UUID);
```

添加特征。

```cpp
  BLECharacteristic *pCharacteristic = pService->createCharacteristic(
                                         CHARACTERISTIC_UUID,
                                         BLECharacteristic::PROPERTY_READ |
                                         BLECharacteristic::PROPERTY_WRITE
                                       );
pCharacteristic->setValue("Hello World says Neil");
```

读取和写入功能。

```cpp
  pCharacteristic->setAccessPermissions(GATT_PERM_READ | GATT_PERM_WRITE);
  BLEDescriptor *pDescriptor = pCharacteristic->createDescriptor(
                                         DESCRIPTOR_UUID,
                                          ATTRIB_FLAG_VOID | ATTRIB_FLAG_ASCII_Z,
                                         GATT_PERM_READ | GATT_PERM_WRITE,2
                                         );
```

启动BLE服务。

```cpp
pService->start();
```

广告允许设备广播定义其意图的信息。这意味着当移动设备接收到蓝牙消息时，接收者可以选择接受或拒绝该消息。接收者需要积极表示他们希望接收营销信息。

```cpp
BLEAdvertising *pAdvertising = BLEDevice::getAdvertising();
```

### **客户端和服务器通信**

我们在这个示例中进行了简单的测试，Wio终端客户端连接到Wio终端服务器，当客户端发现服务器时，它们将建立连接，同时服务器将向客户端发送一条消息。

- 您需要两个Wio终端。
- 您需要创建用于客户端连接的UUID。
- 请在此 **github** 下载[**客户端**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcBLE/tree/master/examples/BLE_client) 和 [**服务器**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcBLE/tree/master/examples/BLE_server) 代码。
- 将客户端代码上传到 Wio terminal。
- 将服务器代码上传到另一个 Wio terminal。

 在上传和运行 **服务器代码**时，在Arduino IDE监视器上将持续打印"unpaired"，直到连接客户端。

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/Server_side3.png"/></div>

连接到客户端后，它将停止打印消息，并且客户端将打印来自服务器的消息。

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

## 服务器连接到智能手机的客户端

<div align="center"><img src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/vidoeh-GIF.gif"/></div>

该示例使用智能手机作为客户端连接到Wio终端（服务器），Wio终端能够接收来自客户端的消息。

- 在手机上下载nRF Connect APP。
- 将代码上传到 Wio terminal.
- 打开nRF Connect APP搜索 Wio terminal 并连接。

:::注
打开nRF Connect APP搜索。
:::

### **代码**

```cpp
#include "rpcBLEDevice.h"
#include <BLE2902.h>
#include <TFT_eSPI.h> // Hardware-specific library
#include <SPI.h>
TFT_eSPI tft = TFT_eSPI();       // Invoke custom library
TFT_eSprite spr = TFT_eSprite(&tft);  // Sprite 
 
BLEServer *pServer = NULL;
BLECharacteristic * pTxCharacteristic;
bool deviceConnected = false;
bool oldDeviceConnected = false;
String Value11;
 
#define SERVICE_UUID           "6E400001-B5A3-F393-E0A9-E50E24DCCA9E" // UART service UUID
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
 
  BLEDevice::init("UART Servicess");  //device name define
 
  // Create the BLE Server
  pServer = BLEDevice::createServer();
  pServer->setCallbacks(new MyServerCallbacks());
 
  // Create the BLE Service
  BLEService *pService = pServer->createService(SERVICE_UUID);
 
  // Create a BLE Characteristic
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
 
  // Start the service
  pService->start();
 
  // Start advertising
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
 
    // disconnecting
    if (!deviceConnected && oldDeviceConnected) {
        delay(500); // give the bluetooth stack the chance to get things ready
        pServer->startAdvertising(); // restart advertising
        oldDeviceConnected = deviceConnected;
    }
    // connecting
    if (deviceConnected && !oldDeviceConnected) {
    // do stuff here on connecting
        oldDeviceConnected = deviceConnected;
    }
}
```
