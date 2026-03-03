---
description: Bluetooth Ibeacon
title: Bluetooth Ibeacon
keywords:
- Wio_terminal Bluetooth
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/BLE-ibeacon-using-Wio-terminal
last_update:
  date: 1/16/2023
  author: jianjing Huang
---

## Wio terminal básico en BLE ibeacon

<div align="center"><img width ="{400}" src="https://files.seeedstudio.com/wiki/Wio-terminal-BLE-Ibeacon/PIC-ibeacon.png"/></div>

## Descripción general

Wio terminal es un dispositivo IoT potente que tiene soporte integrado para Bluetooth clásico y Bluetooth LOW Energy (BLE), el Bluetooth clásico se utiliza en el módulo de audio Bluetooth, archivo o transmisión de datos de flujo de código grande, el BLE se utiliza para aplicaciones optimizadas para batería, como balizas Bluetooth, bandas de fitness, anuncios de proximidad, etc. Por lo tanto, podemos conectarnos según los requisitos del usuario con algún módulo de función específica, luego como una baliza en la ocasión específica.

En los tutoriales anteriores de Wio terminal hemos introducido el modo Cliente y el modo Servidor para usar en el wio terminal, si hay alguna duda por favor revise [**Introducción a Cliente y Servidor**](https://wiki.seeedstudio.com/es/Wio-terminal-BLE-introduction/)

En este tutorial vamos a construir un BLE Ibeacon usando Wio terminal, además, usaremos un smartphone para presentar la información del iBeacon. Asumo que ya sabes cómo usar el Wio terminal con Arduino IDE, si no regresa a [**el inicio de Wio terminal**](https://wiki.seeedstudio.com/es/Wio-Terminal-Getting-Started/).

## hardware requerido

- [**Wio terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- **Cable Type-C**

- **Batería del chasis Wio terminal**
<!-- (https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-p-4516.html) -->

## Software requerido

- Descargar el [**Arduino IDE**](https://www.arduino.cc/en/main/software) en PC

- Descargar la [**APP nRF Connect**](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en_US) en el smartphone

:::note
Si no estás familiarizado con cómo usar la APP nRF connect, por favor ve este [**tutorial**](https://wiki.seeedstudio.com/es/Wio-terminal-BLE-introduction/#nrf-connect-app-usage).
:::

## Instrucciones

### **Prueba de iBeacon de Wio terminal**

Esta es una prueba simple para escanear el dispositivo iBeacon de Wio terminal y presenta la información, asegúrate de que el dispositivo Ibeacon de Wio terminal pueda ser detectado, verás el icono específico de Ibeacon.

### **la APP nRF connect**

1. Descarga la **APP nRF Connect** luego abre la APP, encuentra la opción **SCAN** en la parte superior derecha, verás los dispositivos iBeacon de Wio terminal en la lista, hay dirección MAC, RSSI(dBm) y tiempo de retraso de conexión.

<div align="center"><img width ="{400}" src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/nRF_interface.jpg"/></div>

:::note
    En esta prueba el dispositivo no fue nombrado, por lo que mostrará N/A.
:::

**Código de prueba**

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

### Exhibición simple de Ibeacon

Esta demostración introduce cómo usar la terminal Wio en alguna ocasión específica, por ejemplo, el Ibeacon de la terminal Wio puede anunciar la información del gateway para guiar a las personas, como se muestra en la imagen de abajo, hay puerta-1, puerta-2...etc, y dentro de la puerta-1 hay producto A y las instrucciones. Podemos instalar la terminal Wio en cada puerta para anunciar información y mostrar la información de introducción en la pantalla.

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Wio-terminal-BLE-Ibeacon/Ibeacon_demo_pic.png"/></div>

Abre la APP nRF connect y veremos el dispositivo Ibeacon "Wio" en la lista, luego haz clic en el dispositivo, se mostrará el UUID del dispositivo, RSSI, y datos del fabricante.

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Wio-terminal-BLE-Ibeacon/ibecon_formatttttt.png"/></div>

Haz clic en datos del fabricante, se mostrarán 3 opciones que son Datos del fabricante(Bluetooth Core 4.1), Datos del fabricante, y Texto(UTF-8). Luego haz clic en texto(UTF-8), los datos del fabricante se transferirán a datos normales.

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Wio-terminal-BLE-Ibeacon/ibeacon_data_format.png"/></div>

El Texto(UTF-8) muestra la información del gateway, A en puerta-1, B en puerta-2, así las personas sabrán dónde están A y B.

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Wio-terminal-BLE-Ibeacon/Ibeacon_device_info.png"/></div>

podemos ver, después de que las personas entren por la puerta, verán más detalles sobre A o B, como historia u otra introducción de texto que depende de la ocasión de uso.

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Wio-terminal-BLE-Ibeacon/Ibeacon_product_new.png"/></div>

## Código

```cpp
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
