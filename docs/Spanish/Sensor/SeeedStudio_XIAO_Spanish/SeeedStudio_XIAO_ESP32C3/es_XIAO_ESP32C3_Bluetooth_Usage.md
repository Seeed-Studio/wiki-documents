---
description: Bluetooth Usage on Seeed Studio XIAO ESP32C3
title: Uso de Bluetooth
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/XIAO_ESP32C3_Bluetooth_Usage
last_update:
  date: 02/03/2025
  author: Guillermo
---

# Uso de Bluetooth 

La XIAO ESP32C3 de Seeed Studio es compatible con Bluetooth 5 (LE). Esta guía introduce los conceptos básicos del uso de Bluetooth en esta placa.  

## Configuración del Hardware

- **Paso 1.** Conectar la **antena WiFi/Bluetooth** incluida al **conector IPEX** en la placa.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/wifi-6.png" alt="pir" width={130} height="auto" /></div>


- **Paso 2.** Conecta la **XIAO ESP32C3** a tu computadora mediante un cable **USB Tipo-C**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/cable-connect.png" alt="pir" width={120} height="auto" /></div>



## **Escanear dispositivos Bluetooth**  

En este ejemplo, utilizaremos la **XIAO ESP32C3** para escanear los dispositivos Bluetooth disponibles a su alrededor.  

- **Paso 1.** Copia y pega el siguiente código en la **IDE de Arduino**.

```cpp
#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLEScan.h>
#include <BLEAdvertisedDevice.h>

int scanTime = 5; //En segundos
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
  pBLEScan = BLEDevice::getScan(); //crea un nuevo escaneo
  pBLEScan->setAdvertisedDeviceCallbacks(new MyAdvertisedDeviceCallbacks());
  pBLEScan->setActiveScan(true); //ActiveScan usa más energía, pero consígue resultados más rápido
  pBLEScan->setInterval(100);
  pBLEScan->setWindow(99);  // Menor o igual al valor de setInterval
}

void loop() {
  // Pon tu código principal aquí, para correrlo continuamente:
  BLEScanResults foundDevices = pBLEScan->start(scanTime, false);
  Serial.print("Devices found: ");
  Serial.println(foundDevices.getCount());
  Serial.println("Scan done!");
  pBLEScan->clearResults();   // Borra los resultados del bufer de BLEScan para liberar memoria
  delay(2000);
}
```

:::tip
Si ya has actualizado tu placa de desarrollo **ESP32** a la versión **3.0.0 o superior**, debes modificar el código para que sea compatible:  

1. Cambia:  
   ```
   BLEScanResults foundDevices = pBLEScan->start(scanTime, false);
   ```  
   Por:  
   ```
   BLEScanResults* foundDevices = pBLEScan->start(scanTime, false);
   ```  

2. Cambia:  
   ```
   Serial.println(foundDevices.getCount());
   ```  
   Por:  
   ```
   Serial.println(foundDevices->getCount());
   ```  
:::




**Paso 2.** Carga el código y abre el Monitor Serial para comenzar a escanear dispositivos Bluetooth.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/ble-1.jpg" alt="pir" width={1000} height="auto" /></div>


## **XIAO ESP32C3 como servidor Bluetooth**  

En este ejemplo, usaremos la **XIAO ESP32C3** como un servidor Bluetooth. Buscaremos la placa desde un smartphone y enviaremos cadenas de texto para mostrarlas en el Monitor Serial.  

- **Paso 1.** Copia y pega el siguiente código en el **Arduino IDE**.

```cpp
#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLEServer.h>

// Entra en la siguiente página para generar UUIDs:
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
  // Pon tu código principal aquí, para correrlo continuamente:
  delay(2000);
}
```

:::tip
Si ya has actualizado tu placa de desarrollo **ESP32** a la versión **3.0.0 o superior**, debes modificar el código para que sea compatible:  

1. Cambia:  
   ```cpp
   std::string value = pCharacteristic->getValue();
   ```  
   Por:  
   ```cpp
   String value = pCharacteristic->getValue();
   ```
:::

- **Paso 2.** Carga el código y abre el Monitor Serial.  

- **Paso 3.** Descarga e instala la aplicación LightBlue en tu smartphone.


  - [LightBlue App (Android)](https://play.google.com/store/apps/details?id=com.punchthrough.lightblueexplorer&hl=en_US&gl=US)
  - [LightBlue App (Apple)](https://apps.apple.com/us/app/lightblue/id557428110)


- **Paso 4.** Activa **Bluetooth** en tu teléfono, acércalo a la **XIAO ESP32C3**, busca dispositivos y conéctate a **MyESP32**.  

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/ble-2.jpg" alt="pir" width="300" height="auto" /></div>  

- **Paso 5.** Abre la aplicación **LightBlue** y selecciona la pestaña **Bonded**.  

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/ble-3.jpg" alt="pir" width="350" height="auto" /></div>  

- **Paso 6.** Pulsa **CONNECT** junto a **MyESP32**.  

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/ble-4.jpg" alt="pir" width="350" height="auto" /></div>  

- **Paso 7.** Pulsa la sección en la parte inferior que dice **Readable, Writable**.  

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/ble-5.jpg" alt="pir" width="300" height="auto" /></div>  

- **Paso 8.** En el menú desplegable **Data format**, selecciona **UTF-8 String**.  

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/ble-6.jpg" alt="pir" width="300" height="auto" /></div>  

- **Paso 9.** Escribe **"Hello"** en **WRITTEN VALUES** y pulsa **WRITE**.  

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/ble-7.jpg" alt="pir" width="300" height="auto" /></div>


Verás la cadena de texto **"Hello"** mostrada en el **Monitor Serial** de la **IDE de Arduino**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/ble-9.jpg" alt="pir" width={500} height="auto" /></div>


## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>