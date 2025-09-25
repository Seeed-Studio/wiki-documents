---
description: Introducción a Cliente y Servidor
title: Introducción a Cliente y Servidor
keywords:
- Wio_terminal Bluetooth
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-terminal-BLE-introduction
last_update:
  date: 1/16/2023
  author: jianjing Huang
---

# **Introducción a Cliente y Servidor**

Este wiki introduce la función de comunicación entre Cliente y servidor vía BLE usando el Wio terminal.

<div align="center"><img width ="{400}" src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/Wio-connect.png"/></div>

## **Hardware requerido**

- [**Wio terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

:::note
Si tienes el Wio terminal, por favor visita la [**Descripción General de Bluetooth**](https://wiki.seeedstudio.com/es/Wio-Terminal-Bluetooth-Overview/) para actualizar el firmware BLE más reciente en RTL8720 y descargar las librerías de Arduino dependientes.
:::

## **Descripción General**

### **qué es cliente y servidor**

- El cliente hace una solicitud al Servidor para comunicación de datos que permite a un dispositivo intercambiar datos de forma inalámbrica con otros dispositivos Bluetooth.
- El servidor proporciona servicios de datos al Cliente, encapsula datos a través de características. Múltiples características forman un Servicio, por lo tanto el servicio es una aplicación BLE básica.
- Cliente y Servidor son relaciones de comunicación, ambos pueden ser maestro o esclavo.

### **Qué es UUID**

- UUID se usa generalmente para identificar información que necesita ser única dentro de un sistema o red del mismo.
- Todos los dispositivos BLE tienen UUID de Servicio, UUID de característica y UUID de descriptor, todos los UUID de productos deben ser únicos y la baja probabilidad de repetirse los hace útiles para ser claves asociativas en bases de datos e identificadores para hardware físico dentro de una organización.

### **Servidor BLE en Wio terminal**

El Wio terminal con Bluetooth Low Energy puede actuar como servidor y cliente. El servidor anuncia su existencia. Y puede ser encontrado por otros dispositivos y contiene los datos que el cliente puede leer. El BLE soporta dos tipos de modos como modo Broadcast y modo de red Mesh. En modo broadcast, el servidor transmite datos a muchos clientes que están conectados y en modo de red mesh, todos los dispositivos están conectados.

Tanto servidor como cliente tienen un "SERVICE UUID" para hacer una conexión entre servidor y cliente. Dentro de este servicio, puede haber varias "características" que están definidas por UUID's de características. Usamos dos características TX y RX para enviar datos a y recibir datos del cliente. El Wio terminal (actuando como servidor) "notifica" al cliente vía el UUID de característica TX y los datos son enviados al Wio terminal y recibidos vía el UUID de característica RX. Sin embargo, dado que hay envío y recepción, TX en el Wio terminal es en realidad RX en la aplicación Android.

### **uso de la APP nRF Connect**

La APP nRF connect se usa para buscar el dispositivo BLE de UUID y dirección MAC cuando no tienes idea de cuál es el UUID y dirección MAC del dispositivo, también es capaz de comunicarse con el dispositivo BLE.

- Descarga la [**APP nRF Connect**](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en) en tu smartphone.
- Escanea el dispositivo BLE.
- Encuentra el dispositivo BLE y conéctalo, entonces verás el UUID y dirección MAC.
- Puedes enviar o recibir los datos en la Característica.

Hay dispositivos BLE escaneados por la APP nRF Connect.

<div align="center"><img width ="{400}" src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/nRF-device-scan.png"/></div>

En la característica, que tiene flecha hacia arriba que significa enviar datos al servidor, y flecha hacia abajo significa recibir los datos del servidor.

<div align="center"><img width ="{400}" src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/interface.png"/></div>

La opción de interfaz es según la función del dispositivo, por ejemplo, estaba conectado a un Wio terminal(servidor) con una función simple, así que solo hay un UUID de Servicio con característica de función diferente, depende de la complejidad del equipo.

## **Uso del Cliente BLE**

Este ejemplo utiliza la terminal Wio como Cliente para buscar todos los dispositivos BLE alrededor, y luego mostrar el nombre de los dispositivos BLE y la dirección MAC a través de BLE.

- Necesitas una terminal Wio con el [**firmware BLE más reciente**](https://files.seeedstudio.com/wiki/Wio-Terminal-BLE/20200914-seeed-ambd-firmware-rpc-v1.0.0.zip).
- Configura el UUID del Servidor y la dirección MAC en el código.
- Sube el [**código del Cliente**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcBLE/blob/master/examples/BLE_client/BLE_client.ino) en la terminal Wio.

### Fragmento de código del Cliente

En el código, necesitamos poner el UUID y el UUID característico del servicio del servidor al cual quieres conectar ese dispositivo.

:::note
Si no conoces la dirección MAC y el UUID del dispositivo, por favor ve a la página de la **aplicación nRF Connect**.
:::

```cpp
// The remote service we wish to connect to.
static BLEUUID serviceUUID(0x180F);
// The characteristic of the remote service we are interested in.
static BLEUUID    charUUID(0x2A19);
```

:::note
El UUID del código fue definido por nosotros y es solo para la prueba. Normalmente, el formato UUID para productos comerciales es diferente al presente, por ejemplo, xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.
:::

Actualiza la dirección MAC del dispositivo que quieres conectar a ese dispositivo en el código.

```cpp
uint8_t bd_addr[6] = {0x7d, 0x18, 0x1b, 0xf1, 0xf7, 0x2c}; // MAC address: 2c:f7:f1:1b:18:7d
```

:::note
Una dirección MAC de Bluetooth está diseñada para ser única y es rastreable hasta el fabricante del chip, además, necesitas poner la dirección MAC en orden inverso.
:::

Conectar al servidor BLE remoto.

```cpp
pClient->connect(myDevice);
```

Obtener una referencia al servicio que buscamos en el servidor BLE remoto.

```cpp
BLERemoteService* pRemoteService = pClient->getService(serviceUUID);
```

Obtener una referencia a la característica en el servicio del servidor BLE remoto.

```cpp
pRemoteCharacteristic = pRemoteService->getCharacteristic(charUUID);
```

### **Código del cliente**

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

### **Resultado de ejecución del código**

Esta es una demostración de código Cliente simple sin conectar ningún dispositivo, el terminal Wio escanea alrededor de dispositivos BLE y muestra los dispositivos.

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/BLE-device-print.png"/></div>

## **Uso del Servidor BLE**

Este ejemplo usa el terminal Wio como Servidor para conectar el otro terminal Wio(Cliente), y luego recibir la solicitud del Cliente vía BLE.

### **Fragmento de código del Servidor**

Puedes definir el nombre del dispositivo BLE como se muestra a continuación:

```cpp
BLEDevice::init("UART Service");
```

Necesitas definir el UUID para el dispositivo servidor en el terminal Wio.

```cpp
#define SERVICE_UUID        "180f"
#define CHARACTERISTIC_UUID "2a19"
#define DESCRIPTOR_UUID     "4545"
```

Crear servidor BLE

```cpp
BLEServer *pServer = BLEDevice::createServer();
```

Crear el servicio BLE usando el servidor UUID.

```cpp
BLEService *pService = pServer->createService(SERVICE_UUID);
```

Añadir una característica.

```cpp
  BLECharacteristic *pCharacteristic = pService->createCharacteristic(
                                         CHARACTERISTIC_UUID,
                                         BLECharacteristic::PROPERTY_READ |
                                         BLECharacteristic::PROPERTY_WRITE
                                       );
pCharacteristic->setValue("Hello World says Neil");
```

Función de lectura y escritura.

```cpp
  pCharacteristic->setAccessPermissions(GATT_PERM_READ | GATT_PERM_WRITE);
  BLEDescriptor *pDescriptor = pCharacteristic->createDescriptor(
                                         DESCRIPTOR_UUID,
                                          ATTRIB_FLAG_VOID | ATTRIB_FLAG_ASCII_Z,
                                         GATT_PERM_READ | GATT_PERM_WRITE,2
                                         );
```

Iniciar servicio BLE

```cpp
pService->start();
```

La publicidad permite a los dispositivos difundir información que define sus intenciones. Esto significa que cuando un dispositivo móvil ha recibido un mensaje Bluetooth, el destinatario tiene la opción de aceptar o rechazar el mensaje. El destinatario necesita indicar positivamente que desea recibir mensajes de marketing.

```cpp
BLEAdvertising *pAdvertising = BLEDevice::getAdvertising();
```

### **Comunicación entre cliente y servidor**

Realizamos una prueba simple en este ejemplo, el Cliente de terminal Wio se conecta con el Servidor de terminal Wio, cuando el Cliente encuentra el servidor entonces se conectarán mientras tanto el servidor enviará un mensaje de texto al Cliente.

- Necesitas dos terminales Wio.
- Necesitas crear el UUID para proporcionar al Cliente para conectarse.
- Por favor descarga el código del [**Cliente**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcBLE/tree/master/examples/BLE_client) y [**Servidor**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcBLE/tree/master/examples/BLE_server) en este **github**.
- Sube el código del Cliente en la terminal Wio.
- Sube el código del Servidor en la otra terminal Wio.

 Cuando subas y ejecutes **El código del servidor**, verás que sigue imprimiendo "unpaired" en el monitor del IDE de Arduino antes de conectar el Cliente.

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/Server_side3.png"/></div>

Después de conectarse al Cliente, dejará de imprimir mensajes y el Cliente imprimirá mensajes del servidor.

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/Client_side7.png"/></div>

### Código del servidor

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

## Servidor conecta a Cliente de Smartphone

<div align="center"><img src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/vidoeh-GIF.gif"/></div>

Este ejemplo utiliza un smartphone como Cliente para conectar el Wio terminal(servidor), y el Wio terminal es capaz de recibir el mensaje del Cliente.

- Descarga la aplicación nRF connect en el teléfono.
- Sube el código al Wio terminal.
- Abre la aplicación nRF connect para buscar el Wio terminal y luego conéctalo.

:::note
Verifica el nombre del dispositivo en el código, eso te ayudará a buscarlo.
:::

### **Código**

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
