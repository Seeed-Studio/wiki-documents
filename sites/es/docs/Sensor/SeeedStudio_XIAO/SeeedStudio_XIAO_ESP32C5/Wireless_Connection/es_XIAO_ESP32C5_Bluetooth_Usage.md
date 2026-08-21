---
title: Uso de Bluetooth
description: Uso de Bluetooth con Seeed Studio XIAO ESP32-C5
keywords:
  - xiao
  - esp32c5
  - bluetooth
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_1.webp
slug: /xiao_esp32c5_bluetooth_usage
sidebar_class_name: hidden
last_update:
  date: 01/06/2026
  author: Zeller
createdAt: '2026-01-06'
updatedAt: '2026-01-19'
url: https://wiki.seeedstudio.com/es/xiao_esp32c5_bluetooth_usage/
---

# Uso de Bluetooth con Seeed Studio XIAO ESP32-C5

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
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

El Seeed Studio XIAO ESP32-C5 es una potente placa de desarrollo que soporta Bluetooth 5, BLE y redes Mesh, lo que la convierte en una opción ideal para una amplia gama de aplicaciones IoT que requieren conectividad inalámbrica. Con su excelente rendimiento de RF, el XIAO ESP32-C5 puede proporcionar una comunicación inalámbrica fiable y de alta velocidad a diversas distancias, lo que lo convierte en una solución versátil tanto para aplicaciones inalámbricas de corto como de largo alcance. En este tutorial, nos centraremos en las funciones básicas de las capacidades Bluetooth del XIAO ESP32-C5, como cómo escanear dispositivos Bluetooth cercanos, cómo establecer una conexión Bluetooth y cómo transmitir y recibir datos a través de una conexión Bluetooth.

## Introducción

### Instalación de la antena

Dentro del embalaje del Seeed Studio XIAO ESP32-C5, hay un **conector de antena Wi-Fi/BT** dedicado. Para obtener una intensidad de señal WiFi/Bluetooth óptima, debes sacar la antena incluida en el paquete y conectarla al conector.<br/>
<!-- :::tip
If you want to achieve a stronger signal gain effect, you can purchase and install **2.4G/5G External Antenna with RP-SMA Male Connector** — it delivers much higher gain than the built-in FPC Antenna included in the package!
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
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div> -->

## Uso de Bluetooth Low Energy (BLE)

Bluetooth Low Energy, BLE para abreviar, es una variante de Bluetooth que ahorra energía. La aplicación principal de BLE es la transmisión a corta distancia de pequeñas cantidades de datos (bajo ancho de banda). A diferencia de Bluetooth, que está siempre encendido, BLE permanece constantemente en modo de suspensión excepto cuando se inicia una conexión.

:::tip
ESP32-C5 solo soporta BLE y no soporta Bluetooth Classic
:::

Debido a sus propiedades, BLE es adecuado para aplicaciones que necesitan intercambiar pequeñas cantidades de datos periódicamente funcionando con una pila tipo moneda. Por ejemplo, BLE es de gran utilidad en las industrias de salud, fitness, rastreo, balizas, seguridad y automatización del hogar.

Esto hace que consuma muy poca energía. BLE consume aproximadamente 100 veces menos energía que Bluetooth (dependiendo del caso de uso).

En cuanto a la parte BLE del XIAO ESP32-C5, presentaremos su uso en las siguientes tres secciones.

- [Algunos conceptos fundamentales](#Algunos-conceptos-fundamentales) -- Primero conoceremos algunos conceptos que pueden usarse con frecuencia en BLE para ayudarnos a entender el proceso de ejecución y el pensamiento de los programas BLE.
- [Escáner BLE](#BLE-escáner) -- Esta sección explicará cómo buscar dispositivos Bluetooth cercanos e imprimirlos en el monitor serie.
- [Servidor/cliente BLE](#Servidorcliente-BLE) -- Esta sección explicará cómo usar el XIAO ESP32-C5 como servidor y cliente para enviar y recibir mensajes de datos específicos. También se utilizará para recibir o enviar mensajes desde el teléfono al XIAO.

### Algunos conceptos fundamentales

#### Servidor y cliente

Con Bluetooth Low Energy, hay dos tipos de dispositivos: el servidor y el cliente. El XIAO ESP32-C5 puede actuar como cliente o como servidor.

El servidor anuncia su existencia, de modo que pueda ser encontrado por otros dispositivos, y contiene los datos que el cliente puede leer. El cliente escanea los dispositivos cercanos y, cuando encuentra el servidor que busca, establece una conexión y escucha los datos entrantes. A esto se le llama comunicación punto a punto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/49.png" style={{width:800, height:'auto'}}/></div>

#### Atributo

Un atributo es en realidad un fragmento de datos. Cada dispositivo Bluetooth se utiliza para proporcionar un servicio, y el servicio es una colección de datos; a la colección se le puede llamar base de datos, y cada entrada en la base de datos es un atributo, así que aquí traduzco Attribute como entradas de datos. Puedes imaginar un dispositivo Bluetooth como una tabla, y cada fila dentro de la tabla es un atributo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/52.png" style={{width:600, height:'auto'}}/></div>

#### GATT

Cuando dos dispositivos Bluetooth establecen una conexión, necesitan un protocolo para determinar cómo comunicarse. GATT (Generic Attribute Profile) es dicho protocolo que define cómo se transmiten los datos entre dispositivos Bluetooth.

En el protocolo GATT, las funciones y propiedades de un dispositivo se organizan en estructuras llamadas servicios, características y descriptores. Un servicio representa un conjunto de funciones y características relacionadas proporcionadas por un dispositivo. Cada servicio puede incluir múltiples características, que definen cierta propiedad o comportamiento del servicio, como datos de sensores o comandos de control. Cada característica tiene un identificador único y un valor, que se pueden leer o escribir para comunicarse. Los descriptores se utilizan para describir los metadatos de las características, como el formato y el permiso de acceso de los valores de las características.

Mediante el uso del protocolo GATT, los dispositivos Bluetooth pueden comunicarse en diferentes escenarios de aplicación, como transmitir datos de sensores o controlar dispositivos remotos.

#### Característica BLE

ATT significa Attribute Protocol. Es el mecanismo subyacente para el intercambio de datos en BLE. ATT se basa en un conjunto de comandos, como Requests, Responses, Notifications e Indications. En la pila de protocolos Bluetooth, ATT es la capa responsable de transportar los datos, por lo que es el foco principal al analizar paquetes de datos Bluetooth.

El comando ATT, conocido formalmente como ATT PDU (Protocol Data Unit). Incluye 4 categorías: leer, escribir, notificar e indicar. Estos comandos se pueden dividir en dos tipos: Operaciones como **Write Request** e **Indication** requieren un acuse de recibo del par, mientras que **Write Command** y **Notification** no lo requieren.

Service y Characteristic se definen en la capa GATT. El lado del servicio proporciona el servicio, el servicio es el dato, y el dato es el atributo, y el servicio y la característica son la presentación lógica de los datos, o los datos que el usuario puede ver finalmente se transforman en servicio y característica.

Echemos un vistazo a cómo se ven el servicio y la característica desde la perspectiva de un dispositivo móvil. nRF Connect es una aplicación que nos muestra de forma muy visual cómo debería verse cada paquete.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/ble_usage_4.jpg" style={{width:400, height:'auto'}}/></div>

Como puedes ver, en la especificación Bluetooth, cada aplicación Bluetooth específica se compone de múltiples servicios, y cada servicio se compone de múltiples características. Una característica consta de un UUID, propiedades y un valor.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/50.png" style={{width:300, height:'auto'}}/></div>

Las propiedades se utilizan para describir los tipos y permisos de las operaciones sobre una característica, como si admite lectura, escritura, notificación, etc. Esto es similar a las cuatro categorías incluidas en una ATT PDU.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/51.png" style={{width:800, height:'auto'}}/></div>

#### UUID

Cada servicio, característica y descriptor tiene un UUID (Universally Unique Identifier). Un UUID es un número único de 128 bits (16 bytes). Por ejemplo:

```
ea094cbd-3695-4205-b32d-70c1dea93c35
```

Existen UUID abreviados para todos los tipos, servicios y perfiles especificados en el [SIG (Bluetooth Special Interest Group)](https://www.bluetooth.com/specifications/gatt/services). Pero si tu aplicación necesita su propio UUID, puedes generarlo usando este [sitio web generador de UUID](https://www.uuidgenerator.net/).

### Ejemplos de uso de BLE

A continuación, presentaremos cómo usar **Bluetooth Low Energy (BLE)** en el XIAO ESP32-C5 a través de varios ejemplos prácticos.<br/>

Los ejemplos siguientes se implementan basados en el **Arduino IDE**. Si no has usado Arduino IDE antes, visita: [Primeros pasos con Seeed Studio XIAO ESP32-C5](https://wiki.seeedstudio.com/es/xiao_esp32c5_getting_started/)

#### Escáner BLE

En el **modo Escáner BLE**, el XIAO ESP32-C5 actúa como **Central** o como **Observer**. En lugar de establecer una conexión, **escucha** los paquetes de Advertising emitidos por otros dispositivos en el área circundante.

##### Programa

- A continuación se muestra un fragmento de código de referencia que demuestra cómo usar el modo Escáner BLE en el XIAO ESP32-C5.

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

##### Presentación del efecto

- Sube el código y abre el Monitor Serie; el XIAO ESP32-C5 escaneará los dispositivos Bluetooth en el entorno cercano e imprimirá la información correspondiente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/ble_usage_1.png" style={{width:800, height:'auto'}}/></div>

#### Servidor/Cliente BLE

En el modo Servidor BLE, crea un Service y un Characteristic, transmite su presencia y espera a que otros dispositivos se conecten para leer y escribir datos.<br/>
En el modo Cliente BLE, el Client escanea un Service UUID específico, inicia una conexión después de encontrar el Server y lee o escribe los valores de las características del Server.

##### Programa de Servidor BLE

A continuación, se utilizará un ejemplo de código para demostrar cómo configurar un Servidor BLE en el XIAO ESP32-C5.

- Código de referencia

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

##### Presentación del efecto

- Sube el código, luego descarga la app nRF Connect, escanea y descubre el dispositivo BLE (llamado **XIAO_ESP32C5_Server** como se mencionó anteriormente) y selecciónalo para establecer una conexión.

Mientras tanto, puedes buscar y descargar la app **nRF Connect** en las principales tiendas de aplicaciones móviles, lo que permite que tu teléfono busque y se conecte a dispositivos Bluetooth.

- Android: [nRF Connect](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en)
- IOS: [nRF Connect](https://apps.apple.com/us/app/nrf-connect-for-mobile/id1054362403)

Después de descargar el software, sigue los pasos que se muestran a continuación para buscar y conectar el XIAO ESP32-C5, y verás el mensaje anunciado **Hello World from XIAO**.

<table align="center">
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/ble_usage_1.jpg" style={{width:200, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/ble_usage_2.jpg" style={{width:200, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/ble_usage_3.jpg" style={{width:200, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/ble_usage_4.jpg" style={{width:200, height:'auto'}}/></div></td>
 </tr>
</table>

##### Programa de Cliente BLE

A continuación, se utilizará un ejemplo de código para demostrar cómo configurar un Cliente BLE en el XIAO ESP32-C5. Para usar la funcionalidad de cliente, necesitas al menos dos dispositivos XIAO con Bluetooth: uno actuando como servidor para enviar datos y el otro como cliente para recibirlos.

<details>
<summary>Código de referencia</summary>

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

##### Presentación del efecto

- Sube el código y luego abre el Monitor Serie para observar: recibirás los datos Bluetooth enviados por el servidor.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/ble_usage_2.png" style={{width:800, height:'auto'}}/></div>

:::tip
Al verificar la funcionalidad del cliente, necesitas flashear previamente el programa del servidor en otro dispositivo XIAO; de lo contrario, la verificación fallará.
:::

#### NimBLE-Arduino

La biblioteca nativa Arduino BLEDevice se basa en la pila de protocolos Bluedroid; ofrece funcionalidad completa pero consume una cantidad significativa de Flash y RAM. NimBLE es una pila de protocolos BLE completamente reescrita (derivada de Apache Mynewt), que presenta las siguientes ventajas:

1. Huella de memoria extremadamente baja (uso de RAM reducido en más del 50%).

2. Mayor velocidad de conexión.

3. Compatibilidad con la API: está diseñada para ser casi totalmente compatible con la sintaxis de la biblioteca BLE nativa de Arduino, requiriendo solo modificaciones en los archivos de cabecera y pequeños ajustes de tipos.

Puedes visitar el repositorio de GitHub del autor: [NimBLE-Arduino](https://github.com/h2zero/NimBLE-Arduino/tree/master) para más detalles.<br/>

A continuación, implementaremos una función de escaneo Bluetooth basada en la biblioteca NimBLE-Arduino.

##### Programa

- Instala la biblioteca NimBLE-Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/ble_usage_libaray_1.png" style={{width:800, height:'auto'}}/></div><br/>

<details>

<summary>Código de referencia</summary>

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

##### Presentación del efecto

- Sube el código y abre el Monitor Serie para observar. También implementa la función de escaneo Bluetooth, pero con una velocidad de escaneo más rápida.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/ble_usage_3.png" style={{width:800, height:'auto'}}/></div>

#### Ejemplo: Conexión a Home Assistant

Hasta este punto, deberías haber adquirido una comprensión básica de los modos BLE del XIAO ESP32-C5.
A continuación, podemos poner manos a la obra con un proyecto más práctico: hacer que el XIAO ESP32-C5 simule un sensor de temperatura y humedad (o un simple interruptor de botón) y transmita periódicamente datos del sensor o estados a través de BLE. Home Assistant descubrirá automáticamente este dispositivo BLE y mostrará directamente en la interfaz los valores actuales de temperatura y humedad (o el estado del botón), sin necesidad de configuraciones de integración complejas adicionales.<br/>
Este sencillo ejemplo demuestra plenamente el gran potencial del ESP32-C5 en los campos del Internet de las Cosas (IoT) y los hogares inteligentes: su bajo consumo de energía, facilidad de desarrollo y compatibilidad lista para usar con dispositivos BLE pasivos permiten que cualquiera construya rápidamente su propia red de sensores inteligentes.<br/>

:::tip
Si nunca has usado Home Assistant, puedes visitar: [Conectar XIAO ESP32-C5 a Home Assistant](https://wiki.seeedstudio.com/es/xiao_esp32c5_homeassistant/)
:::

- Código de referencia

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

- Sube el código y abre la plataforma Home Assistant. Puedes encontrar el dispositivo BTHome en **Settings** -> **Devices & Services** y añadirlo al panel.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/ble_usage_4.png" style={{width:800, height:'auto'}}/></div>

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>