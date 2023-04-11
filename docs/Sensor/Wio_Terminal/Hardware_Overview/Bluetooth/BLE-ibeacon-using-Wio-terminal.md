---
description: Bluetooth Ibeacon
title: Bluetooth Ibeacon
keywords:
- Wio_terminal Bluetooth
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /BLE-ibeacon-using-Wio-terminal
last_update:
  date: 1/16/2023
  author: jianjing Huang
---

## Wio terminal basic on BLE ibeacon

<div align="center"><img width ="{400}" src="https://files.seeedstudio.com/wiki/Wio-terminal-BLE-Ibeacon/PIC-ibeacon.png"/></div>

## Overview

Wio terminal is a powerful IoT device having inbuilt support for classic Bluetooth and Bluetooth LOW Energy (BLE), the classic Bluetooth is used to in the Bluetooth audio module, file, or large code stream data transmission, the BLE is used for battery optimized applications, such as Bluetooth beacons, fitness bands, proximity advertisements, etc. So we are able to according to users required to connecting with some specific function module, then as a beacon on the specific occasion.

The previous Wio terminal tutorials we has to introduce the Client mode and Server mode to using on the wio terminal, if there is any doubt please review  [**Client and Server introduction**](https://wiki.seeedstudio.com/Wio-terminal-BLE-introduction/)

In this tutorial we are going to build a BLE Ibeacon using Wio terminal, in addition, we will use a smartphone to present the iBeacon information. I assume that you are already know on how to use the Wio terminal with Arduino IDE, if not fall back to [**the Wio terminal get start**](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/).

## hardware required

- [**Wio terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- **Type-C cable**

- **Wio terminal chassis battery**
<!-- (https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-p-4516.html) -->

## Software required

- Downlord the [**Arduino IDE**](https://www.arduino.cc/en/main/software) on PC

- Download the [**nRF Connect APP**](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en_US) on the smartphone

:::note
If you are unfamiliar on how to use nRF connect APP, please view this [**tutorial**](https://wiki.seeedstudio.com/Wio-terminal-BLE-introduction/#nrf-connect-app-usage).
:::

## Instruction

### **Wio terminal iBeacon test**

This is a simple test for scan the Wio terminal iBeacon device and presents the information, make sure the Wio terminal Ibeacon device can be detected, you will see the Ibeacon specific icon.

### **the nRF connect APP**

1. Download the **nRF Connect APP** then open the the APP, find the **SCAN** option on the upper right, you will see the Wio terminal iBeacon devices on the list, there are MAC address, RSSI(dBm) and connection delay time.

<div align="center"><img width ="{400}" src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/nRF_interface.jpg"/></div>

:::note
    In this test the device did not named, so it will display N/A.
:::

**Test code**

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

### Ibeacon simple exhibition

This demo is introduced how to use Wio terminal on some specific occasion, for example, the Wio terminal Ibeacon can advertising the gateway information to guide the people, as below picture, there are door-1, door-2...etc, and door-1 inside have product A and the instruction. We can install the Wio terminal in each door to advertising information and display the introduction information on the screen.

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Wio-terminal-BLE-Ibeacon/Ibeacon_demo_pic.png"/></div>

Open the nRF connect APP we will see the "Wio" Ibeacon device on the list, then click the device, there will display the device UUID, RSSI, and manufacturer data.

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Wio-terminal-BLE-Ibeacon/ibecon_formatttttt.png"/></div>

Click manufacturer data, there will display 3 options which are Manufacturer data(Bluetooth Core 4.1), Manufacturer data, and Text(UTF-8). Then click the text(UTF-8), the manufacturer data will transfer to normal data.

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Wio-terminal-BLE-Ibeacon/ibeacon_data_format.png"/></div>

The Text(UTF-8) displays the gateway information, A in door-1, B in door-2, thus people will know A and B where they are.  

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Wio-terminal-BLE-Ibeacon/Ibeacon_device_info.png"/></div>

we can see, after people enter the door, they will see about A or B more detail, such as history or other text introduction that depends on the usage occasion.

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Wio-terminal-BLE-Ibeacon/Ibeacon_product_new.png"/></div>

## Code

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
