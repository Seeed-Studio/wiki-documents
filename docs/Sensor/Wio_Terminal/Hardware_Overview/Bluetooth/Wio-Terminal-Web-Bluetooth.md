---
description: Web Bluetooth APIs
title: Web Bluetooth APIs
keywords:
- Wio_terminal Bluetooth
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-Web-Bluetooth
last_update:
  date: 1/16/2023
  author: jianjing Huang
---

# Using Web Bluetooth APIs with Wio Terminal

This is the wiki of interacting Wio Terminal's Bluetooth Feature with the [**Web Bluetooth APIs**](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API). The Web Bluetooth APIs provides you the ability of interacting Bluetooth devices on web browsers.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/exmaple.gif"/></div>

## What is Web Bluetooth API

Until now, the ability to interact with bluetooth devices has been possible only for native apps. The [**Web Bluetooth API**](https://developers.google.com/web/updates/2015/07/interact-with-ble-devices-on-the-web) aims to change this and brings it to web browsers as well. Alongside efforts like [Physical Web](https://google.github.io/physical-web/), people can walk up to and interact with devices straight from the web. Check out [this drone controlled from a web app](https://www.youtube.com/watch?v=yILD_ZdXJW4) video to get a sense of how that would work.

## Web Bluetooth Simple Example

The following example demonstrate how to set up Wio Terminal and use a simple HTML site to interact the Web Bluetooth API with Wio Terminal's Bluetooth.

<div align="center"><video width="{560}" height={315} controls>
    <source src="https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/simple.mp4" type="video/mp4" />
  </video></div>

### Arduino Set-Up

- Please follow the [**Wio Terminal Bluetooth Overview**](https://wiki.seeedstudio.com/Wio-Terminal-Bluetooth-Overview/) to flash Bluetooth firmware to Wio Terminal and download dependent libraries before the followings.

- Copy the following code and upload to Wio Terminal:

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

The above code configures Wio Terminal with the Bluetooth discoverable name **`BLE Battery`** and as Bluetooth Server and establish a Battery BLE Service. This is important and needs to match with Web Bluetooth APIs HTML Site later.

### Web Bluetooth API HTML Website

Now Wio Terminal is all set-up, we need to write a HTML site with the Web Bluetooth APIs so that they can interact. Check the following for reference:

- Download the [**`webbluetooth.html`**](https://github.com/ansonhe97/WioTerminal-WebBluetooth/blob/main/webbluetooth.html) from here.

- Open the `webbluetooth.html` using the **Latest Google Chrome or Microsoft Edge**(which supports Web Bluetooth APIs).

- **Right click** on the site and select **Inspect** (CMD+OPT+I for macOS and Ctrl+Shift+I for Windows), select **Control Console**:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/1.png"/></div>

- Click on the **Connect with BLE device** button on the site. You should see that the `BLE Battery`(Wio Terminal) appeared in the connecting window. Click on **Connect**.

>Note: The Web Bluetooth APIs actually will discover all the BLE devices nearby, but here used filter to only limited to the BLE device named BLE Battery.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/2.png"/></div>

- Click on **Start** button on the site and it will start receiving data battery information transmitted from Wio Terminal!

Web Bluetooth API Site Console:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/3.png"/></div>

Arduino Serial Monitor Control Console:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/4.png"/></div>

- Now the Wio Terminal is interacting with the site using Web Bluetooth APIs! This makes the BLE feature more much interesting that you can have information transmitted though Web Browsers!

## Visualizing Accelerator Data on Web Site using Web Bluetooth APIs

The following is a good example of using Web Bluetooth APIs on a Site. This example site connects the Wio Terminal using Web Bluetooth and visualize the onboard accelerator data.

<div align="center"><video width={560} height={315} controls>
    <source src="https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/example.mp4" type="video/mp4" />
  </video></div>

### Arduino Set-up

- Please make sure you have followed the [**Wio Terminal's Accelerator Overview**](https://wiki.seeedstudio.com/Wio-Terminal-IMU-Overview/) before the followings.

- Download the **[`WebBluetooth-Accelerator.ino`](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/blob/master/examples/WioTerminal_WebBluetooth/WioTerminal_WebBluetooth.ino) Example** or Copy the following code in Arduino IDE.

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

- Upload the example to Wio Terminal.

### Web Bluetooth API HTML Website

- Open the **[Web Bluetooth Accelerometer Plotter For Wio Terminal](https://seeed-studio.github.io/Seeed_Arduino_Sketchbook/)** Website.

> You can also read the [**HTML source code**](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/blob/web-bluetooth/docs/index.html) here, for more reference.

- Connect your device named `Accelerator` (Wio Terminal), and you should be able to see the Accelerator data on the Web Site!

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/web-acc.gif"/></div>

This means you can write a Web Bluetooth Interact Website with Wio Terminal!

## Resources

- [**Web Bluetooth APIs Specs**](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API)
- [**Web Bluetooth APIs Examples**](https://googlechrome.github.io/samples/web-bluetooth/index.html)
- [**Implementation Bugs**](https://crbug.com/?q=component:Blink>Bluetooth)
- [**Web Bluetooth Spec**](https://webbluetoothcg.github.io/web-bluetooth)

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
