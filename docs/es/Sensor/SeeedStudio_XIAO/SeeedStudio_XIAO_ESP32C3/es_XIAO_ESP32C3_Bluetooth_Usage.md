---
description: Uso de Bluetooth en Seeed Studio XIAO ESP32C3
title: Uso de Bluetooth
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/XIAO_ESP32C3_Bluetooth_Usage
last_update:
  date: 1/11/2023
  author: shuxu hu
---

# Uso de Bluetooth

Seeed Studio XIAO ESP32C3 soporta conectividad Bluetooth 5 (LE). Este wiki introducirá los conceptos básicos del uso de Bluetooth en esta placa.

## Configuración del hardware

- **Paso 1.** Conecta la **antena WiFi/Bluetooth** incluida al **conector IPEX** en la placa

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/wifi-6.png" alt="pir" width={130} height="auto" /></div>


- **Paso 2.** Conecta XIAO ESP32C3 a tu computadora mediante un cable USB Type-C

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/cable-connect.png" alt="pir" width={120} height="auto" /></div>


## Escanear dispositivos Bluetooth

En este ejemplo, vamos a usar XIAO ESP32C3 para escanear dispositivos Bluetooth disponibles a su alrededor.

- **Paso 1.** Copia y pega el código de abajo en Arduino IDE

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
Si ya has actualizado tu placa de desarrollo ESP32 a la versión 3.0.0 o superior, necesitas cambiar algo de código para hacerlo compatible con ella.
1. ```BLEScanResults foundDevices = pBLEScan->start(scanTime, false);``` cambiar a ```BLEScanResults* foundDevices = pBLEScan->start(scanTime, false);```
2. ```Serial.println(foundDevices.getCount());``` cambiar a ```Serial.println(foundDevices->getCount());```
:::

**Paso 2.** Sube los códigos y abre el Monitor Serie para comenzar a escanear dispositivos Bluetooth

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/ble-1.jpg" alt="pir" width={1000} height="auto" /></div>


## XIAO ESP32C3 como servidor Bluetooth

En este ejemplo, vamos a usar XIAO ESP32C3 como servidor Bluetooth. Aquí buscaremos la placa XIAO ESP32C3 usando un smartphone y enviaremos cadenas para mostrar en el monitor serie

- **Paso 1.** Copia y pega el código de abajo en Arduino IDE

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
Si ya has actualizado tu placa de desarrollo ESP32 a la versión 3.0.0 o superior, necesitas cambiar algo de código para hacerlo compatible con ella.
1.  ```std::string value = pCharacteristic->getValue();``` cambiar a ```String value = pCharacteristic->getValue();```
:::

- **Paso 2.** Sube los códigos y abre el Monitor Serie

- **Paso 3.** Descarga e instala la aplicación LightBlue en tu smartphone


  - [Aplicación LightBlue (Android)](https://play.google.com/store/apps/details?id=com.punchthrough.lightblueexplorer&hl=en_US&gl=US)
  - [Aplicación LightBlue (Apple)](https://apps.apple.com/us/app/lightblue/id557428110)


- **Paso 4.** Abre Bluetooth en tu teléfono, acerca el teléfono al XIAO ESP32C3, busca dispositivos y conéctate con el dispositivo **MyESP32**

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/ble-2.jpg" alt="pir" width={300} height="auto" /></div>


- **Paso 5.** Abre la aplicación LightBlue y haz clic en la pestaña **Bonded**

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/ble-3.jpg" alt="pir" width={350} height="auto" /></div>


- **Paso 6.** Haz clic en **CONNECT** junto a **MyESP32**

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/ble-4.jpg" alt="pir" width={350} height="auto" /></div>


- **Paso 7.** Haz clic en la sección en la parte inferior que dice **Readable, Writable**

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/ble-5.jpg" alt="pir" width={300} height="auto" /></div>


- **Paso 8.** En el menú desplegable **Data format**, selecciona **UTF-8 String**

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/ble-6.jpg" alt="pir" width={300} height="auto" /></div>


- **Paso 9.** Escribe "Hello" bajo **WRITTEN VALUES** y haz clic en **WRITE**
<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/ble-7.jpg" alt="pir" width={300} height="auto" /></div>


Verás la cadena de texto "Hello" mostrada en el monitor serie del IDE de Arduino

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/ble-9.jpg" alt="pir" width={500} height="auto" /></div>


## NimBLE-Arduino

### Introducción

Esta biblioteca reduce significativamente el uso de recursos y mejora el rendimiento para aplicaciones BLE ESP32 en comparación con la biblioteca basada en bluedroid. El objetivo es mantener, tanto como sea razonable, la compatibilidad con la biblioteca original pero usando la pila NimBLE. Además, esta biblioteca será desarrollada y mantenida más activamente para proporcionar capacidades mejoradas y estabilidad sobre la original.

Para más información puedes ir al [enlace](https://github.com/h2zero/NimBLE-Arduino/tree/master) de Github de este autor.

### Paso 1. Añadir Biblioteca

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/NimBLE.jpg" alt="pir" width={500} height="auto" /></div>

### Paso 2. Ejemplo

**Código**

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

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/NimBLE2.jpg" alt="pir" width={700} height="auto" /></div>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>