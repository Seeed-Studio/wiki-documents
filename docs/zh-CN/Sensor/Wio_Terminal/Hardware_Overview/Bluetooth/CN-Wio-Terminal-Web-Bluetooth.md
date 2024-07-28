---
description: Web Bluetooth APIs
title: Web Bluetooth APIs
keywords:
- Wio_terminal Bluetooth
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-Web-Bluetooth
last_update:
  date: 3/08/2024
  author: 金菊
---

# 在Wio Terminal上使用Web Bluetooth API

这是与 [**Web Bluetooth APIs**](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API) 一起使用Wio Terminal的蓝牙功能的wiki。Web Bluetooth API提供了在Web浏览器上与蓝牙设备进行交互的能力。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/exmaple.gif"/></div>

## 什么是Web Bluetooth API

到目前为止，与蓝牙设备的交互能力仅限于原生应用程序。 [**Web Bluetooth API**](https://developers.google.com/web/updates/2015/07/interact-with-ble-devices-on-the-web) 的目标是改变这一点，并将其带到Web浏览器中。除了 [Physical Web](https://google.github.io/physical-web/) 等工作，人们可以直接从Web上与设备进行交互。观看[此通过Web应用程序控制的无人机](https://www.youtube.com/watch?v=yILD_ZdXJW4) 视频，以了解其工作原理。 

## Web Bluetooth简单示例

以下示例演示了如何设置Wio Terminal并使用简单的HTML网站与Wio Terminal的蓝牙进行交互。

<div align="center"><video width="{560}" height={315} controls>
    <source src="https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/simple.mp4" type="video/mp4" />
  </video></div>

### Arduino设置

- 请按照 [**Wio Terminal 蓝牙概述**](https://wiki.seeedstudio.com/Wio-Terminal-Bluetooth-Overview/) 中的说明，在进行以下操作之前，将蓝牙固件烧录到Wio Terminal并下载相关库。

- 复制以下代码并上传到Wio Terminal：

```cpp
#include <rpcBLEDevice.h>
#include <BLEServer.h>
#include <BLE2902.h>

bool _BLEClientConnected = false;
uint8_t level = 10;

#define BatteryService BLEUUID((uint16_t)0x180F) 
BLECharacteristic BatteryLevelCharacteristic(BLEUUID((uint16_t)0x2A19), BLECharacteristic::PROPERTY_READ  | BLECharacteristic::PROPERTY_WRITE  | BLECharacteristic::PROPERTY_NOTIFY);

class MyServerCallbacks : public BLEServerCallbacks {
    void onConnect(BLEServer* pServer) {
      _BLEClientConnected = true;
    };

    void onDisconnect(BLEServer* pServer) {
      _BLEClientConnected = false;
    }
};

/* ###############################################################  CALL back to receive data from Phone */
#define CHARACTERISTIC_UUID_RX "6E400002-B5A3-F393-E0A9-E50E24DCCA9E"

class MyCallbacks: public BLECharacteristicCallbacks {

    void onWrite(BLECharacteristic *pCharacteristic) {
      std::string rxValue = pCharacteristic->getValue();
      Serial.println(rxValue[0]);
 
      if (rxValue.length() > 0) {
        Serial.println("*********");
        Serial.print("Received Value: ");
 
        for (int i = 0; i < rxValue.length(); i++) {
          Serial.print(rxValue[i]);
        }
        Serial.println();
        Serial.println("*********");
      }
 
    }
};

/* ############################################################### */
void initBLE() {
  BLEDevice::init("BLE Battery");
  // Create the BLE Server
  BLEServer *pServer = BLEDevice::createServer();
  pServer->setCallbacks(new MyServerCallbacks());

  // Create the BLE Service
  BLEService *pBattery = pServer->createService(BatteryService);

  pBattery->addCharacteristic(&BatteryLevelCharacteristic);
  BatteryLevelCharacteristic.addDescriptor(new BLE2902());


  /* ###############################################################  define callback */
  BLECharacteristic *pWriteCharacteristic = pBattery->createCharacteristic(
                                         CHARACTERISTIC_UUID_RX,
                                         BLECharacteristic::PROPERTY_WRITE
                                       );
  pWriteCharacteristic->setAccessPermissions(GATT_PERM_READ | GATT_PERM_WRITE);
 
  pWriteCharacteristic->setCallbacks(new MyCallbacks());
  /* ############################################################### */
  
  pServer->getAdvertising()->addServiceUUID(BatteryService);

  pBattery->start();
  // Start advertising
  pServer->getAdvertising()->start();
}

void setup() {
  Serial.begin(115200);
//   while(!Serial);
  Serial.println("--- Wio Terminal BLE Battery Level Indicator ---");
  initBLE();
}
  
void loop() {

  BatteryLevelCharacteristic.setValue(&level, 1);
  BatteryLevelCharacteristic.notify();
  delay(3000);

  level++;
  Serial.print("Battery Level: ");
  Serial.println(int(level));

  if (int(level)==100)
    level=0;
}
```

上述代码将Wio Terminal配置为具有蓝牙可发现名称 **`BLE Battery`** 并作为蓝牙服务器建立了一个电池BLE服务。这很重要，并且需要与后面的Web Bluetooth API HTML网站匹配。

### Web Bluetooth API HTML 网站

现在Wio Terminal已经设置好了，我们需要编写一个带有Web Bluetooth API的HTML网站，以便它们可以进行交互。参考以下内容：

- 从此处下载 [**`webbluetooth.html`**](https://github.com/ansonhe97/WioTerminal-WebBluetooth/blob/main/webbluetooth.html) 。

- 使用 **最新版的Google Chrome或Microsoft Edge**（支持Web Bluetooth API）下载 `webbluetooth.html` 。

- 在网站上**右击** 单键选择 **Inspect** （对于macOS是CMD+OPT+I，对于Windows是Ctrl+Shift+I），选择 **Control Console**:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/1.png"/></div>

- 在网站上点击 **Connect with BLE device** 按钮。您应该看到BLE Battery（Wio Terminal）出现在连接窗口中。点击 **Connect**。

>注: Web Bluetooth API实际上会发现附近的所有BLE设备，但这里使用过滤器仅限于名为BLE Battery的BLE设备。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/2.png"/></div>

- 在网站上点击 **Start** 按钮，它将开始接收从Wio Terminal传输的电池信息！

Web Bluetooth API网站控制台：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/3.png"/></div>

Arduino 串行监视器控制台：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/4.png"/></div>

- 现在Wio Terminal通过Web Bluetooth APIs与网站进行交互！这使得BLE功能更加有趣，您可以通过Web浏览器传输信息！

## 使用Web Bluetooth APIs在网站上可视化加速度计数据

以下是在网站上使用Web Bluetooth API的一个很好的示例。这个示例网站使用Web Bluetooth连接Wio Terminal并可视化板载加速度计数据。

<div align="center"><video width={560} height={315} controls>
    <source src="https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/example.mp4" type="video/mp4" />
  </video></div>

### Arduino 设置

- 在进行以下操作之前，请确保您已经按照 [**Wio Terminal的加速度计概述**](https://wiki.seeedstudio.com/Wio-Terminal-IMU-Overview/) 进行了操作。

- 下载 **[`WebBluetooth-Accelerator.ino`](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/blob/master/examples/WioTerminal_WebBluetooth/WioTerminal_WebBluetooth.ino) 示例** 或在Arduino IDE中复制以下代码。

```cpp
#include <rpcBLEDevice.h>
#include <BLEServer.h>
#include <LIS3DHTR.h>

#define accelerometerService "19b10000-e8f2-537e-4f6c-d104768a1214"
#define firstCharacteristic  "19b10010-e8f2-537e-4f6c-d104768a1214"
#define DESCRIPTOR_UUID      "19b10010"

LIS3DHTR<TwoWire> lis;

bool deviceConnected = false;
bool oldDeviceConnected = false;

BLEServer *pServer = NULL;
BLECharacteristic * pCharacteristic;

class MyServerCallbacks: public BLEServerCallbacks {
    void onConnect(BLEServer* pServer) {
      Serial.println("MyServerCallbacks onConnect ");
      deviceConnected = true;
    };

    void onDisconnect(BLEServer* pServer) {
      deviceConnected = false;
    }
};

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
//  while(!Serial){};
  
  lis.begin(Wire1);
  if (!lis) {
    Serial.println("Accelerater Error!");
    while(1);
  }
  lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); //Data output rate
  lis.setFullScaleRange(LIS3DHTR_RANGE_2G); //Scale range set to 2g
  Serial.println("Accelerater Initialised!");
  
  Serial.println("Starting BLE work!");

  BLEDevice::init("Accelerometer");
  pServer = BLEDevice::createServer();
  pServer->setCallbacks(new MyServerCallbacks());
  
  BLEService *pService = pServer->createService(accelerometerService);
  pCharacteristic = pService->createCharacteristic(
                                         firstCharacteristic,
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
  pCharacteristic->setCallbacks(new MyCallbacks());
  pService->start();

  BLEAdvertising *pAdvertising = BLEDevice::getAdvertising();
  pAdvertising->addServiceUUID(accelerometerService);
  pAdvertising->setScanResponse(true);
  pAdvertising->setMinPreferred(0x06);  // functions that help with iPhone connections issue
  pAdvertising->setMinPreferred(0x12);
  BLEDevice::startAdvertising();
  Serial.println("Characteristic defined! Now you can read it in your phone!");
}

void loop() { 
  if (deviceConnected) {
    updateAcceleration();
  }
      // disconnecting
    if (!deviceConnected && oldDeviceConnected) {
        delay(500); // give the bluetooth stack the chance to get things ready
        pServer->startAdvertising(); // restart advertising
        Serial.println("start advertising");
        oldDeviceConnected = deviceConnected;
    }
    // connecting
    if (deviceConnected && !oldDeviceConnected) {
    // do stuff here on connecting
        oldDeviceConnected = deviceConnected;
    }
}

void updateAcceleration() {
  float x_values, y_values, z_values;
  x_values = lis.getAccelerationX();
  y_values = lis.getAccelerationY();
  z_values = lis.getAccelerationZ();

  String accelerometerData = String(x_values)+"|"+String(y_values)+"|"+String(z_values);
  Serial.println(accelerometerData);
  pCharacteristic->setValue(accelerometerData.c_str());
  pCharacteristic->notify();
  delay(20);
}
```

- 将示例上传到Wio Terminal。

### Web Bluetooth API HTML 网站

- 打开 **[适用于Wio Terminal的Web Bluetooth 加速度计绘图器 ](https://seeed-studio.github.io/Seeed_Arduino_Sketchbook/)** 网站。

> 您可以在此处阅读 [**HTML 源代码**](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/blob/web-bluetooth/docs/index.html) 以获得更多参考资料。

- 连接名为 `Accelerator` (Wio Terminal)的设备，您应该可以在网站上看到加速度计数据！

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/web-acc.gif"/></div>

这意味着您可以编写一个与Wio Terminal进行Web Bluetooth交互的网站！

## 参考资料

- [**Web Bluetooth APIs Specs**](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API)
- [**Web Bluetooth APIs 示例**](https://googlechrome.github.io/samples/web-bluetooth/index.html)
- [**Implementation Bugs**](https://crbug.com/?q=component:Blink>Bluetooth)
- [**Web Bluetooth Spec**](https://webbluetoothcg.github.io/web-bluetooth)

## 技术支持 & 产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们的产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

