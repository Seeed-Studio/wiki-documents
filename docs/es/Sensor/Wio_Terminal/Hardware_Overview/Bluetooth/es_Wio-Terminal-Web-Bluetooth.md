---
description: APIs de Web Bluetooth
title: APIs de Web Bluetooth
keywords:
- Wio_terminal Bluetooth
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-Web-Bluetooth
last_update:
  date: 1/16/2023
  author: jianjing Huang
---

# Usando APIs de Web Bluetooth con Wio Terminal

Este es el wiki para interactuar con la función Bluetooth de Wio Terminal usando las [**APIs de Web Bluetooth**](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API). Las APIs de Web Bluetooth te proporcionan la capacidad de interactuar con dispositivos Bluetooth en navegadores web.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/exmaple.gif"/></div>

## ¿Qué es la API de Web Bluetooth?

Hasta ahora, la capacidad de interactuar con dispositivos bluetooth solo ha sido posible para aplicaciones nativas. La [**API de Web Bluetooth**](https://developers.google.com/web/updates/2015/07/interact-with-ble-devices-on-the-web) tiene como objetivo cambiar esto y llevarlo también a los navegadores web. Junto con esfuerzos como [Physical Web](https://google.github.io/physical-web/), las personas pueden acercarse e interactuar con dispositivos directamente desde la web. Echa un vistazo a [este video de un dron controlado desde una aplicación web](https://www.youtube.com/watch?v=yILD_ZdXJW4) para tener una idea de cómo funcionaría eso.

## Ejemplo Simple de Web Bluetooth

El siguiente ejemplo demuestra cómo configurar Wio Terminal y usar un sitio HTML simple para interactuar con la API de Web Bluetooth con el Bluetooth de Wio Terminal.

<div align="center"><video width="{560}" height={315} controls>
    <source src="https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/simple.mp4" type="video/mp4" />
  </video></div>

### Configuración de Arduino

- Por favor sigue la [**Descripción General de Bluetooth de Wio Terminal**](https://wiki.seeedstudio.com/es/Wio-Terminal-Bluetooth-Overview/) para flashear el firmware de Bluetooth a Wio Terminal y descargar las librerías dependientes antes de lo siguiente.

- Copia el siguiente código y súbelo a Wio Terminal:

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

El código anterior configura Wio Terminal con el nombre Bluetooth descubrible **`BLE Battery`** y como Servidor Bluetooth y establece un Servicio BLE de Batería. Esto es importante y necesita coincidir con el sitio HTML de las APIs de Web Bluetooth más adelante.

### Sitio Web HTML de la API Web Bluetooth

Ahora que Wio Terminal está completamente configurado, necesitamos escribir un sitio HTML con las APIs de Web Bluetooth para que puedan interactuar. Consulta lo siguiente como referencia:

- Descarga el [**`webbluetooth.html`**](https://github.com/ansonhe97/WioTerminal-WebBluetooth/blob/main/webbluetooth.html) desde aquí.

- Abre el `webbluetooth.html` usando **Google Chrome o Microsoft Edge más recientes** (que soportan las APIs de Web Bluetooth).

- **Haz clic derecho** en el sitio y selecciona **Inspeccionar** (CMD+OPT+I para macOS y Ctrl+Shift+I para Windows), selecciona **Consola de Control**:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/1.png"/></div>

- Haz clic en el botón **Connect with BLE device** en el sitio. Deberías ver que el `BLE Battery`(Wio Terminal) apareció en la ventana de conexión. Haz clic en **Connect**.

>Nota: Las APIs de Web Bluetooth en realidad descubrirán todos los dispositivos BLE cercanos, pero aquí se usó un filtro para limitarlo solo al dispositivo BLE llamado BLE Battery.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/2.png"/></div>

- Haz clic en el botón **Start** en el sitio y comenzará a recibir información de datos de batería transmitida desde Wio Terminal!

Consola del Sitio de la API Web Bluetooth:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/3.png"/></div>

Consola de Control del Monitor Serie de Arduino:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/4.png"/></div>

- ¡Ahora Wio Terminal está interactuando con el sitio usando las APIs de Web Bluetooth! Esto hace que la característica BLE sea mucho más interesante ya que puedes tener información transmitida a través de Navegadores Web!

## Visualizando Datos del Acelerómetro en un Sitio Web usando APIs de Web Bluetooth

El siguiente es un buen ejemplo de usar las APIs de Web Bluetooth en un Sitio. Este sitio de ejemplo conecta Wio Terminal usando Web Bluetooth y visualiza los datos del acelerómetro integrado.

<div align="center"><video width={560} height={315} controls>
    <source src="https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/example.mp4" type="video/mp4" />
  </video></div>

### Configuración de Arduino

- Por favor asegúrate de haber seguido la [**Descripción General del Acelerómetro de Wio Terminal**](https://wiki.seeedstudio.com/es/Wio-Terminal-IMU-Overview/) antes de lo siguiente.

- Descarga el **[`WebBluetooth-Accelerator.ino`](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/blob/master/examples/WioTerminal_WebBluetooth/WioTerminal_WebBluetooth.ino) Ejemplo** o Copia el siguiente código en Arduino IDE.

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

- Sube el ejemplo a Wio Terminal.

### Sitio Web HTML con Web Bluetooth API

- Abre el sitio web **[Web Bluetooth Accelerometer Plotter For Wio Terminal](https://seeed-studio.github.io/Seeed_Arduino_Sketchbook/)**.

> También puedes leer el [**código fuente HTML**](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/blob/web-bluetooth/docs/index.html) aquí, para más referencia.

- Conecta tu dispositivo llamado `Accelerator` (Wio Terminal), ¡y deberías poder ver los datos del acelerómetro en el sitio web!

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/web-acc.gif"/></div>

¡Esto significa que puedes escribir un sitio web de interacción Web Bluetooth con Wio Terminal!

## Recursos

- [**Especificaciones de APIs Web Bluetooth**](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API)
- [**Ejemplos de APIs Web Bluetooth**](https://googlechrome.github.io/samples/web-bluetooth/index.html)
- [**Errores de implementación**](https://crbug.com/?q=component:Blink>Bluetooth)
- [**Especificación Web Bluetooth**](https://webbluetoothcg.github.io/web-bluetooth)

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

