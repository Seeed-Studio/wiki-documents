---
description: Web Bluetooth APIs
title: Web Bluetooth APIs
keywords:
- Wio_terminal Bluetooth
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-Web-Bluetooth
last_update:
  date: 1/16/2023
  author: jianjing Huang
---

# 在 Wio Terminal 上使用 Web Bluetooth APIs

这是关于 Wio Terminal 的蓝牙功能与 [**Web Bluetooth APIs**](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API) 交互的说明文档。Web Bluetooth APIs 为您提供了在网页浏览器中与蓝牙设备交互的能力。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/exmaple.gif"/></div>

## 什么是 Web Bluetooth API

到目前为止，与蓝牙设备交互的能力只有原生应用程序才能实现。[**Web Bluetooth API**](https://developers.google.com/web/updates/2015/07/interact-with-ble-devices-on-the-web) 旨在改变这种情况，并将这种能力带到网页浏览器中。与 [Physical Web](https://google.github.io/physical-web/) 等努力一起，人们可以直接从网页上接近并与设备交互。查看[这个从网页应用控制无人机](https://www.youtube.com/watch?v=yILD_ZdXJW4)的视频，了解这将如何工作。

## Web Bluetooth 简单示例

以下示例演示了如何设置 Wio Terminal 并使用简单的 HTML 网站通过 Web Bluetooth API 与 Wio Terminal 的蓝牙进行交互。

<div align="center"><video width="{560}" height={315} controls>
    <source src="https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/simple.mp4" type="video/mp4" />
  </video></div>

### Arduino 设置

- 请按照 [**Wio Terminal 蓝牙概述**](https://wiki.seeedstudio.com/cn/Wio-Terminal-Bluetooth-Overview/) 将蓝牙固件刷入 Wio Terminal 并下载依赖库，然后再进行以下操作。

- 复制以下代码并上传到 Wio Terminal：

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

/* ###############################################################  从手机接收数据的回调函数 */
#define CHARACTERISTIC_UUID_RX "6E400002-B5A3-F393-E0A9-E50E24DCCA9E"

class MyCallbacks: public BLECharacteristicCallbacks {

    void onWrite(BLECharacteristic *pCharacteristic) {
      std::string rxValue = pCharacteristic->getValue();
      Serial.println(rxValue[0]);
 
      if (rxValue.length() > 0) {
        Serial.println("*********");
        Serial.print("接收到的值: ");
 
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
  // 创建BLE服务器
  BLEServer *pServer = BLEDevice::createServer();
  pServer->setCallbacks(new MyServerCallbacks());

  // 创建BLE服务
  BLEService *pBattery = pServer->createService(BatteryService);

  pBattery->addCharacteristic(&BatteryLevelCharacteristic);
  BatteryLevelCharacteristic.addDescriptor(new BLE2902());


  /* ###############################################################  定义回调函数 */
  BLECharacteristic *pWriteCharacteristic = pBattery->createCharacteristic(
                                         CHARACTERISTIC_UUID_RX,
                                         BLECharacteristic::PROPERTY_WRITE
                                       );
  pWriteCharacteristic->setAccessPermissions(GATT_PERM_READ | GATT_PERM_WRITE);
 
  pWriteCharacteristic->setCallbacks(new MyCallbacks());
  /* ############################################################### */
  
  pServer->getAdvertising()->addServiceUUID(BatteryService);

  pBattery->start();
  // 开始广播
  pServer->getAdvertising()->start();
}

void setup() {
  Serial.begin(115200);
//   while(!Serial);
  Serial.println("--- Wio Terminal BLE 电池电量指示器 ---");
  initBLE();
}
  
void loop() {

  BatteryLevelCharacteristic.setValue(&level, 1);
  BatteryLevelCharacteristic.notify();
  delay(3000);

  level++;
  Serial.print("电池电量: ");
  Serial.println(int(level));

  if (int(level)==100)
    level=0;
}
```

上述代码将 Wio Terminal 配置为蓝牙可发现名称 **`BLE Battery`**，作为蓝牙服务器并建立电池 BLE 服务。这很重要，需要与后面的 Web Bluetooth APIs HTML 站点匹配。

### Web Bluetooth API HTML 网站

现在 Wio Terminal 已经设置完成，我们需要编写一个带有 Web Bluetooth APIs 的 HTML 站点，以便它们可以交互。请参考以下内容：

- 从这里下载 [**`webbluetooth.html`**](https://github.com/ansonhe97/WioTerminal-WebBluetooth/blob/main/webbluetooth.html)。

- 使用 **最新的 Google Chrome 或 Microsoft Edge**（支持 Web Bluetooth APIs）打开 `webbluetooth.html`。

- 在站点上**右键单击**并选择**检查**（macOS 为 CMD+OPT+I，Windows 为 Ctrl+Shift+I），选择**控制台**：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/1.png"/></div>

- 点击站点上的 **Connect with BLE device** 按钮。您应该看到 `BLE Battery`（Wio Terminal）出现在连接窗口中。点击 **Connect**。

>注意：Web Bluetooth APIs 实际上会发现附近的所有 BLE 设备，但这里使用过滤器仅限制为名为 BLE Battery 的 BLE 设备。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/2.png"/></div>

- 点击站点上的 **Start** 按钮，它将开始接收从 Wio Terminal 传输的电池信息数据！

Web Bluetooth API 站点控制台：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/3.png"/></div>

Arduino 串行监视器控制台：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/4.png"/></div>

- 现在 Wio Terminal 正在使用 Web Bluetooth APIs 与站点交互！这使得 BLE 功能更加有趣，您可以通过 Web 浏览器传输信息！

## 使用 Web Bluetooth APIs 在网站上可视化加速度计数据

以下是在站点上使用 Web Bluetooth APIs 的一个很好的例子。此示例站点使用 Web Bluetooth 连接 Wio Terminal 并可视化板载加速度计数据。

<div align="center"><video width={560} height={315} controls>
    <source src="https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/example.mp4" type="video/mp4" />
  </video></div>

### Arduino 设置

- 请确保您在进行以下操作之前已经遵循了 [**Wio Terminal 的加速度计概述**](https://wiki.seeedstudio.com/cn/Wio-Terminal-IMU-Overview/)。

- 下载 **[`WebBluetooth-Accelerator.ino`](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/blob/master/examples/WioTerminal_WebBluetooth/WioTerminal_WebBluetooth.ino) 示例** 或在 Arduino IDE 中复制以下代码。

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
//  while(!Serial){};
  
  lis.begin(Wire1);
  if (!lis) {
    Serial.println("加速度计错误!");
    while(1);
  }
  lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); //数据输出速率
  lis.setFullScaleRange(LIS3DHTR_RANGE_2G); //量程设置为2g
  Serial.println("加速度计初始化完成!");
  
  Serial.println("开始BLE工作!");

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
  pAdvertising->setMinPreferred(0x06);  // 帮助解决iPhone连接问题的函数
  pAdvertising->setMinPreferred(0x12);
  BLEDevice::startAdvertising();
  Serial.println("特征值已定义! 现在你可以在手机上读取它!");
}

void loop() { 
  if (deviceConnected) {
    updateAcceleration();
  }
      // 断开连接
    if (!deviceConnected && oldDeviceConnected) {
        delay(500); // 给蓝牙协议栈准备的时间
        pServer->startAdvertising(); // 重新开始广播
        Serial.println("开始广播");
        oldDeviceConnected = deviceConnected;
    }
    // 连接
    if (deviceConnected && !oldDeviceConnected) {
    // 在连接时在这里做一些事情
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

- 将示例上传到 Wio Terminal。

### Web Bluetooth API HTML 网站

- 打开 **[Web Bluetooth Accelerometer Plotter For Wio Terminal](https://seeed-studio.github.io/Seeed_Arduino_Sketchbook/)** 网站。

> 您也可以在这里阅读 [**HTML 源代码**](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/blob/web-bluetooth/docs/index.html)，以获取更多参考。

- 连接您名为 `Accelerator` 的设备（Wio Terminal），您应该能够在网站上看到加速度计数据！

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/web-acc.gif"/></div>

这意味着您可以编写一个与 Wio Terminal 交互的 Web Bluetooth 网站！

## 资源

- [**Web Bluetooth APIs 规范**](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API)
- [**Web Bluetooth APIs 示例**](https://googlechrome.github.io/samples/web-bluetooth/index.html)
- [**实现错误**](https://crbug.com/?q=component:Blink>Bluetooth)
- [**Web Bluetooth 规范**](https://webbluetoothcg.github.io/web-bluetooth)

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