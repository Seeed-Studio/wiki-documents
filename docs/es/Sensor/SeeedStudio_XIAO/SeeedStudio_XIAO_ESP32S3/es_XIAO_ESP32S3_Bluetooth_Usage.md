---
description: Uso de Bluetooth con Seeed Studio XIAO ESP32S3.
title: Bluetooth para ambas versiones
keywords:
- esp32s3
- xiao
- ble
- bluetooth
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/xiao_esp32s3_bluetooth
last_update:
  date: 04/03/2023
  author: Citric
---

# Uso de Bluetooth con Seeed Studio XIAO ESP32S3 (Sense)


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/64.jpg" style={{width:700, height:'auto'}}/></div>

El Seeed Studio XIAO ESP32S3 es una placa de desarrollo potente que soporta Bluetooth 5, BLE y redes Mesh, lo que la convierte en una opción ideal para una amplia gama de aplicaciones IoT que requieren conectividad inalámbrica. Con su rendimiento RF excepcional, el XIAO ESP32S3 puede proporcionar comunicación inalámbrica confiable y de alta velocidad a través de una variedad de distancias, convirtiéndolo en una solución versátil tanto para aplicaciones inalámbricas de corto alcance como de largo alcance. En este tutorial, nos enfocaremos en las características básicas de las capacidades Bluetooth del XIAO ESP32S3, como cómo escanear dispositivos Bluetooth cercanos, cómo establecer una conexión Bluetooth, y cómo transmitir y recibir datos a través de una conexión Bluetooth.

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3</th>
        <th>Seeed Studio XIAO ESP32S3 Sense</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## Primeros Pasos

### Instalación de la antena

En la parte inferior izquierda del frente del XIAO ESP32S3, hay un "Conector de Antena WiFi/BT" separado. Para obtener una mejor señal WiFi/Bluetooth, necesitas sacar la antena del interior del paquete e instalarla en el conector.

Hay un pequeño truco para la instalación de la antena, si presionas hacia abajo con fuerza directamente, encontrarás que es muy difícil de presionar y te dolerán los dedos. La forma correcta de instalar la antena es poner primero un lado del conector de la antena en el bloque del conector, luego presionar un poco hacia abajo en el otro lado, y la antena se instalará.

Remover la antena también es igual, no uses fuerza bruta para tirar de la antena directamente, aplica fuerza para levantar de un lado, y la antena se quitará fácilmente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/5.gif" style={{width:500, height:'auto'}}/></div>

:::note
Si no tienes una antena instalada, es posible que no puedas usar la función Bluetooth.

Si tienes las condiciones, te sugiero que uses la antena de varilla grande, que te dará una mejor experiencia.
:::


## Uso de Bluetooth Low Energy (BLE)

Bluetooth Low Energy, BLE para abreviar, es una variante de Bluetooth que conserva energía. La aplicación principal de BLE es la transmisión de corta distancia de pequeñas cantidades de datos (ancho de banda bajo). A diferencia del Bluetooth que siempre está encendido, BLE permanece en modo de suspensión constantemente excepto cuando se inicia una conexión.

Debido a sus propiedades, BLE es adecuado para aplicaciones que necesitan intercambiar pequeñas cantidades de datos periódicamente funcionando con una pila de botón. Por ejemplo, BLE es de gran utilidad en las industrias de salud, fitness, seguimiento, balizas, seguridad y automatización del hogar.

Esto hace que consuma muy poca energía. BLE consume aproximadamente 100 veces menos energía que Bluetooth (dependiendo del caso de uso).

Sobre la parte BLE del XIAO ESP32S3, introduciremos su uso en las siguientes tres secciones.

- [Algunos conceptos fundamentales](#algunos-conceptos-fundamentales) -- Primero conoceremos algunos conceptos que pueden usarse frecuentemente en BLE para ayudarnos a entender el proceso de ejecución y el pensamiento de los programas BLE.
- [Escáner BLE](#escaner-ble) -- Esta sección explicará cómo buscar dispositivos Bluetooth cercanos e imprimirlos en el monitor serie.
- [Servidor/cliente BLE](#servidor-cliente-ble) -- Esta sección explicará cómo usar XIAO ESP32S3 como Servidor y Cliente para enviar y recibir mensajes de datos especificados. También se usará para recibir o enviar mensajes desde el teléfono a XIAO.
- [Intercambio de Datos de Sensores BLE](#intercambio-de-datos-de-sensores-ble) -- Esta es la última sección del tutorial completo donde revisaremos un ejemplo de sensor para explicar cómo enviar los datos del sensor a través de BLE.

### Algunos conceptos fundamentales

#### Servidor y Cliente

Con Bluetooth Low Energy, hay dos tipos de dispositivos: el servidor y el cliente. El XIAO ESP32S3 puede actuar como cliente o como servidor.

El servidor anuncia su existencia, para que pueda ser encontrado por otros dispositivos, y contiene los datos que el cliente puede leer. El cliente escanea los dispositivos cercanos, y cuando encuentra el servidor que está buscando, establece una conexión y escucha los datos entrantes. Esto se llama comunicación punto a punto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/49.png" style={{width:800, height:'auto'}}/></div>

#### Atributo

Atributo es en realidad un fragmento de datos. Cada dispositivo Bluetooth se usa para proporcionar un servicio, y el servicio es una colección de datos, la colección puede llamarse una base de datos, cada entrada en la base de datos es un Atributo, así que aquí traduzco Atributo como entradas de datos. Puedes imaginar un dispositivo Bluetooth como una tabla, cada fila dentro de la tabla es un Atributo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/52.png" style={{width:600, height:'auto'}}/></div>

#### GATT

Cuando dos dispositivos Bluetooth establecen una conexión, necesitan un protocolo para determinar cómo comunicarse. GATT (Generic Attribute Profile) es tal protocolo que define cómo se transmiten los datos entre dispositivos Bluetooth.

En el protocolo GATT, las funciones y propiedades de un dispositivo se organizan en estructuras llamadas servicios, características y descriptores. Un servicio representa un conjunto de funciones y características relacionadas proporcionadas por un dispositivo. Cada servicio puede incluir múltiples características, que definen una cierta propiedad o comportamiento del servicio, como datos de sensores o comandos de control. Cada característica tiene un identificador único y un valor, que puede ser leído o escrito para comunicarse. Los descriptores se usan para describir metadatos de las características, como el formato y el permiso de acceso de los valores de las características.

Al usar el protocolo GATT, los dispositivos Bluetooth pueden comunicarse en diferentes escenarios de aplicación, como transmitir datos de sensores o controlar dispositivos remotos.

#### Característica BLE

ATT, nombre completo protocolo de atributos. Al final, ATT está compuesto por un grupo de comandos ATT, es decir, comandos de solicitud y respuesta, ATT también es la capa superior del paquete nulo de Bluetooth, es decir, ATT es donde analizamos más el paquete Bluetooth.

Comando ATT, formalmente conocido como ATT PDU (Protocol Data Unit). Incluye 4 categorías: leer, escribir, notificar e indicar. Estos comandos pueden dividirse en dos tipos: si requiere una respuesta, entonces será seguido por una solicitud; por el contrario, si solo requiere un ACK pero no una respuesta, entonces no será seguido por una solicitud.

Service y Characteristic se definen en la capa GATT. El lado Service proporciona el Service, el Service son los datos, y los datos son el atributo, y el Service y Characteristic son la presentación lógica de los datos, o los datos que el usuario puede ver se transforman eventualmente en Service y Characteristic.

Echemos un vistazo a cómo se ven el servicio y la característica desde una perspectiva móvil. nRF Connect es una aplicación que nos muestra de manera muy visual cómo debería verse cada paquete.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/62.png" style={{width:400, height:'auto'}}/></div>

Como puedes ver, en la especificación Bluetooth, cada aplicación Bluetooth específica está compuesta por múltiples Servicios, y cada Servicio está compuesto por múltiples Características. Una Característica consiste en un UUID, Propiedades y un Valor.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/50.png" style={{width:300, height:'auto'}}/></div>

Las Propiedades se utilizan para describir los tipos y permisos de operaciones en una característica, como si soporta lectura, escritura, notificación, y así sucesivamente. Esto es similar a las cuatro categorías incluidas en un ATT PDU.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/51.png" style={{width:800, height:'auto'}}/></div>

#### UUID

Cada servicio, característica y descriptor tienen un UUID (Identificador Único Universal). Un UUID es un número único de 128 bits (16 bytes). Por ejemplo:

```
ea094cbd-3695-4205-b32d-70c1dea93c35
```

Existen UUID abreviados para todos los tipos, servicios y perfiles especificados en el [SIG (Grupo de Interés Especial de Bluetooth)](https://www.bluetooth.com/specifications/gatt/services). Pero si tu aplicación necesita su propio UUID, puedes generarlo usando este [sitio web generador de UUID](https://www.uuidgenerator.net/).

### Escáner BLE

Crear un escáner BLE XIAO ESP32S3 es simple. El siguiente es un programa de ejemplo para crear un escáner.

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
  delay(10000);
}
```

:::tip
Si ya has actualizado tu placa de desarrollo ESP32 a la versión 3.0.0 o superior, necesitas cambiar algo de código para hacerlo compatible con ella.
1. ```BLEScanResults foundDevices = pBLEScan->start(scanTime, false);``` cambiar a ```BLEScanResults* foundDevices = pBLEScan->start(scanTime, false);```
2. ```Serial.println(foundDevices.getCount());``` cambiar a ```Serial.println(foundDevices->getCount());```
:::

Ahora puedes seleccionar la placa madre XIAO ESP32S3 y subir el programa. Si el programa funciona sin problemas, abre el monitor serie y establece la velocidad de baudios a 115200, puedes ver el siguiente resultado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/54.png" style={{width:700, height:'auto'}}/></div>

Este programa imprime el nombre, dirección MAC, datos del fabricante y señal del dispositivo Bluetooth escaneado.

#### Anotación del programa

Comienza importando las librerías necesarias para las capacidades BLE.

Luego define una clase llamada `MyAdvertisedDeviceCallbacks` que hereda de la clase `BLEAdvertisedDeviceCallbacks`. Tiene una función llamada `onResult` que se llama cuando se encuentra un dispositivo Bluetooth anunciado durante el escaneo. La función imprime la información del dispositivo al puerto serie usando la función `Serial.printf`. Esta clase puede usarse para manejar información de dispositivos Bluetooth durante el escaneo.

```c
class MyAdvertisedDeviceCallbacks: public BLEAdvertisedDeviceCallbacks {
    void onResult(BLEAdvertisedDevice advertisedDevice) {
      Serial.printf("Advertised Device: %s \n", advertisedDevice.toString().c_str());
    }
};
```

En la función `Setup`, configuramos un escaneo BLE con los parámetros especificados, incluyendo los valores de intervalo y ventana de escaneo. También inicializa el dispositivo BLE y configura una función de callback para manejar los dispositivos anunciados encontrados durante el escaneo.

```c
BLEDevice::init("");
pBLEScan = BLEDevice::getScan();
pBLEScan->setAdvertisedDeviceCallbacks(new MyAdvertisedDeviceCallbacks());
pBLEScan->setActiveScan(true);
pBLEScan->setInterval(100);
pBLEScan->setWindow(99);
```

Finalmente, la función `loop` inicia el escaneo BLE con el tiempo de escaneo especificado y la bandera de bloqueo. Luego imprime el número de dispositivos encontrados al puerto serie y limpia el búfer de resultados para liberar memoria.

```c
BLEScanResults foundDevices = pBLEScan->start(scanTime, false);
Serial.print("Devices found: ");
Serial.println(foundDevices.getCount());
Serial.println("Scan done!");
pBLEScan->clearResults();
```

### Servidor/cliente BLE

Como se mencionó anteriormente, XIAO ESP32S3 puede actuar tanto como servidor como cliente. Echemos un vistazo al programa como servidor y cómo usarlo. Después de cargar el siguiente programa a XIAO, actuará como servidor y enviará un mensaje "Hello World" a todos los dispositivos Bluetooth conectados a XIAO.

```cpp
//Server Code
#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLEServer.h>

#define SERVICE_UUID        "4fafc201-1fb5-459e-8fcc-c5c9c331914b"
#define CHARACTERISTIC_UUID "beb5483e-36e1-4688-b7f5-ea07361b26a8"

void setup() {
  Serial.begin(115200);
  Serial.println("Starting BLE work!");

  BLEDevice::init("XIAO_ESP32S3");
  BLEServer *pServer = BLEDevice::createServer();
  BLEService *pService = pServer->createService(SERVICE_UUID);
  BLECharacteristic *pCharacteristic = pService->createCharacteristic(
                                         CHARACTERISTIC_UUID,
                                         BLECharacteristic::PROPERTY_READ |
                                         BLECharacteristic::PROPERTY_WRITE
                                       );

  pCharacteristic->setValue("Hello World");
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
  delay(2000);
}
```

Mientras tanto, puedes buscar y descargar la aplicación **nRF Connect** en las principales tiendas de aplicaciones móviles, que permite a tu teléfono buscar y conectarse a dispositivos Bluetooth.

- Android: [nRF Connect](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en)
- IOS: [nRF Connect](https://apps.apple.com/us/app/nrf-connect-for-mobile/id1054362403)

Después de descargar el software, sigue los pasos que se muestran a continuación para buscar y conectar XIAO ESP32S3, y verás el anuncio "Hello World".

<table align="center">
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/55.jpg" style={{width:200, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/56.jpg" style={{width:200, height:'auto'}}/></div></td>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/58.jpg" style={{width:200, height:'auto'}}/></div></td>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/59.jpg" style={{width:200, height:'auto'}}/></div></td>
	</tr>
</table>


Si quieres usar otro XIAO ESP32S3 como cliente para recibir mensajes del servidor, entonces puedes usar el siguiente procedimiento para el XIAO cliente.

```cpp
// Client Code
#include "BLEDevice.h"
//#include "BLEScan.h"

// The remote service we wish to connect to.
static BLEUUID serviceUUID("4fafc201-1fb5-459e-8fcc-c5c9c331914b");
// The characteristic of the remote service we are interested in.
static BLEUUID    charUUID("beb5483e-36e1-4688-b7f5-ea07361b26a8");

static boolean doConnect = false;
static boolean connected = false;
static boolean doScan = false;
static BLERemoteCharacteristic* pRemoteCharacteristic;
static BLEAdvertisedDevice* myDevice;

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
    Serial.write(pData, length);
    Serial.println();
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
    pClient->setMTU(517); //set client to request maximum MTU from server (default is 23 otherwise)
  
    // Obtain a reference to the service we are after in the remote BLE server.
    BLERemoteService* pRemoteService = pClient->getService(serviceUUID);
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
    if (advertisedDevice.haveServiceUUID() && advertisedDevice.isAdvertisingService(serviceUUID)) {

      BLEDevice::getScan()->stop();
      myDevice = new BLEAdvertisedDevice(advertisedDevice);
      doConnect = true;
      doScan = true;

    } // Found our server
  } // onResult
}; // MyAdvertisedDeviceCallbacks

void setup() {
  Serial.begin(115200);
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

  // If we are connected to a peer BLE Server, update the characteristic each time we are reached
  // with the current time since boot.
  if (connected) {
    String newValue = "Time since boot: " + String(millis()/1000);
    Serial.println("Setting new characteristic value to \"" + newValue + "\"");
    
    // Set the characteristic's value to be the array of bytes that is actually a string.
    pRemoteCharacteristic->writeValue(newValue.c_str(), newValue.length());
  }else if(doScan){
    BLEDevice::getScan()->start(0);  // this is just example to start scan after disconnect, most likely there is better way to do it in arduino
  }
  
  delay(1000); // Delay a second between loops.
} // End of loop
```

:::tip
Si ya has actualizado tu placa de desarrollo ESP32 a la versión 3.0.0 o superior, necesitas cambiar algo de código para hacerlo compatible con ella.
1.  ```std::string value = pRemoteCharacteristic->readValue();``` cambiar a ```String value = pRemoteCharacteristic->readValue();```
:::

El programa anterior convertirá XIAO en un cliente y buscará dispositivos Bluetooth cercanos. Cuando el UUID del dispositivo Bluetooth coincida con el UUID que proporcionaste, se conectará al dispositivo y obtendrá su valor característico.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/60.png" style={{width:800, height:'auto'}}/></div>


#### Anotación del programa

Echemos un vistazo rápido a cómo funciona el código de ejemplo del servidor BLE. Comienza importando las librerías necesarias para las capacidades BLE. Luego, necesitas definir un UUID para el Servicio y la Característica.

```c
#define SERVICE_UUID "4fafc201-1fb5-459e-8fcc-c5c9c331914b"
#define CHARACTERISTIC_UUID "beb5483e-36e1-4688-b7f5-ea07361b26a8"
```

Puedes dejar los UUIDs por defecto, o puedes ir a [uuidgenerator.net](https://www.uuidgenerator.net/) para crear UUIDs aleatorios para tus servicios y características.

Luego, creas un dispositivo BLE llamado "XIAO_ESP32S3". Puedes cambiar este nombre por el que quieras. En la siguiente línea, estableces el dispositivo BLE como un servidor. Después de eso, creas un servicio para el servidor BLE con el UUID definido anteriormente.

```c
BLEServer *pServer = BLEDevice::createServer();
BLEService *pService = pServer->createService(SERVICE_UUID);
```

Luego, estableces la característica para ese servicio. Como puedes ver, también usas el UUID definido anteriormente, y necesitas pasar como argumentos las propiedades de la característica. En este caso, son: READ y WRITE.

```c
BLECharacteristic *pCharacteristic = pService->createCharacteristic(
                                     CHARACTERISTIC_UUID,
                                     BLECharacteristic::PROPERTY_READ |
                                     BLECharacteristic::PROPERTY_WRITE
                                     );
```

Después de crear la característica, puedes establecer su valor con el método `setValue()`. En este caso estamos estableciendo el valor al texto "Hello World". Puedes cambiar este texto por lo que quieras. En proyectos futuros, este texto puede ser una lectura de sensor, o el estado de una lámpara, por ejemplo.

Finalmente, puedes iniciar el servicio, y la publicidad, para que otros dispositivos BLE puedan escanear y encontrar este dispositivo BLE.

```c
BLEAdvertising *pAdvertising = pServer->getAdvertising();
pAdvertising->start();
```

Este es solo un ejemplo simple de cómo crear un servidor BLE. En este código no se hace nada en el `loop()`, pero puedes añadir lo que sucede cuando un nuevo cliente se conecta (consulta el ejemplo `BLE_notify` para obtener orientación).

### Intercambio de Datos de Sensores BLE

A continuación, pasaremos al mundo real para completar un caso. En este caso, haremos que el XIAO ESP32S3 se conecte a un sensor de intensidad de luz y luego, a través de Bluetooth, envíe el valor del sensor de luz a otro XIAO ESP32S3 y lo muestre en la pantalla de la placa de expansión.

Para la conveniencia del cableado, utilizaremos dos placas de expansión XIAO, el programa de muestra es solo para referencia, puedes elegir el producto según las necesidades reales del proyecto.

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO ESP32S3</th>
	    <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>Seeed Studio Expansion Base for XIAO with Grove OLED</th>
        <th>Grove - Digital Light Sensor - TSL2561</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:200, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:200, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:200, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/img/hardware%20overview.jpg" style={{width:180, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Digital-Light-Sensor-TSL2561.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

Además de la preparación de hardware mencionada anteriormente, es posible que necesites preparar las siguientes librerías, descargarlas y añadirlas al entorno del IDE de Arduino.

- **Librería de pantallas OLED u8g2**:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/olikraus/U8g2_Arduino" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar las Librerías</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br></br>

- **Librería del Grove - Sensor de Luz Digital - TSL2561**:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Grove_Digital_Light_Sensor" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar las Librerías</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br></br>

Necesitamos preparar dos XIAO, uno como servidor y otro como cliente. Aquí está el programa de ejemplo como servidor. XIAO como servidor tiene las siguientes tareas principales.
- Primero, obtener los valores en tiempo real del sensor de luz;
- Segundo, crear el servidor Bluetooth;
- Tercero, anunciar los valores de intensidad de luz a través de Bluetooth;
- Cuarto, mostrar la intensidad de luz en tiempo real y el envío en la pantalla.

```c
//server
#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLE2902.h>
#include <BLEServer.h>
#include <Wire.h>
#include <Digital_Light_TSL2561.h>
#include <Arduino.h>
#include <U8x8lib.h>
#include <Wire.h>

// OLEDs without Reset of the Display
U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);

//BLE Server name (the other ESP32 name running the server sketch)
#define bleServerName "XIAOESP32S3_BLE"

BLECharacteristic *pCharacteristic;
bool deviceConnected = false;

int light_val = 0;

class MyServerCallbacks: public BLEServerCallbacks {
  void onConnect(BLEServer* pServer) {
    deviceConnected = true;
  };
  
  void onDisconnect(BLEServer* pServer) {
    deviceConnected = false;
  }
};

void setup() {
  Serial.begin(115200);
  
  //OLED display setup
  u8x8.begin();
  u8x8.setFlipMode(1);

  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.drawString(0, 3, "Starting...");

  Wire.begin();
  TSL2561.init();
  
  BLEDevice::init(bleServerName);
  BLEServer *pServer = BLEDevice::createServer();
  pServer->setCallbacks(new MyServerCallbacks());
  
  BLEService *pService = pServer->createService(BLEUUID((uint16_t)0x181A)); // Environmental Sensing
  pCharacteristic = pService->createCharacteristic(
    BLEUUID((uint16_t)0x2A59), // Analog Output
    BLECharacteristic::PROPERTY_NOTIFY
  );
  pCharacteristic->addDescriptor(new BLE2902());
  
  pService->start();
  BLEAdvertising *pAdvertising = BLEDevice::getAdvertising();
  pAdvertising->addServiceUUID(pService->getUUID());
  pAdvertising->setScanResponse(true);
  pAdvertising->setMinPreferred(0x0);
  pAdvertising->setMinPreferred(0x1F);
  BLEDevice::startAdvertising();
  u8x8.clearDisplay();
}

void loop() {
  if (deviceConnected) {
    light_val = TSL2561.readVisibleLux();
    pCharacteristic->setValue(light_val);
    pCharacteristic->notify();
    u8x8.setFont(u8x8_font_chroma48medium8_r);
    u8x8.setCursor(0, 0);
    u8x8.print("Light Value:");
    u8x8.clearLine(2);
    u8x8.setCursor(0, 2);
    u8x8.print(light_val);
    u8x8.drawString(0, 4, "Sending...");
    delay(10); // bluetooth stack will go into congestion, if too many packets are sent
  }
}
```

Después de cargar el programa en uno de los XIAO, si el programa funciona sin problemas, entonces puedes sacar tu teléfono y usar la aplicación nRF Connect para buscar el dispositivo Bluetooth llamado **XIAOESP32S3_BLE**, conectarlo, y hacer clic en el botón que se muestra a continuación, recibirás la información de datos del sensor.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/63.jpg" style={{width:300, height:'auto'}}/></div>

Aquí encontrarás que la forma en que operamos el software no será exactamente la misma que en el ejemplo anterior, porque generalmente hablando, cuando enviamos un mensaje del tipo de sensor, elegiremos usar las propiedades de **notify** para asegurar que el mensaje sea eficiente.

A continuación, necesitamos sacar nuestro otro XIAO, que actúa como cliente para recopilar y mostrar nuestros datos.

```c
//client
#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLEClient.h>
#include <BLEServer.h>
#include <Arduino.h>
#include <U8x8lib.h>
#include <Wire.h>

// OLEDs without Reset of the Display
U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);

BLEClient*  pClient;
bool doconnect = false;

//BLE Server name (the other ESP32 name running the server sketch)
#define bleServerName "XIAOESP32S3_BLE"

//Address of the peripheral device. Address will be found during scanning...
static BLEAddress *pServerAddress;

BLEUUID serviceUUID("181A"); // Environmental Sensing
BLEUUID charUUID("2A59");    // Analog Output

char light_val[1024];

//Callback function that gets called, when another device's advertisement has been received
class MyAdvertisedDeviceCallbacks: public BLEAdvertisedDeviceCallbacks {
  void onResult(BLEAdvertisedDevice advertisedDevice) {
    if (advertisedDevice.getName() == bleServerName) { //Check if the name of the advertiser matches
      advertisedDevice.getScan()->stop(); //Scan can be stopped, we found what we are looking for
      pServerAddress = new BLEAddress(advertisedDevice.getAddress()); //Address of advertiser is the one we need
      Serial.println("Device found. Connecting!");
    }
  }
};

//function that prints the latest sensor readings in the OLED display
void printReadings(){
  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 0);
  u8x8.print("Light Value:");
  u8x8.drawString(0, 2, light_val);
}

void setup() {
  Serial.begin(115200);
  //OLED display setup
  u8x8.begin();
  u8x8.setFlipMode(1);

  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.drawString(0, 3, "Starting...");
  
  Serial.println("Starting BLE client...");

  BLEDevice::init("XIAOESP32S3_Client");

  // Retrieve a Scanner and set the callback we want to use to be informed when we
  // have detected a new device.  Specify that we want active scanning and start the
  // scan to run for 30 seconds.
  BLEScan* pBLEScan = BLEDevice::getScan();
  pBLEScan->setAdvertisedDeviceCallbacks(new MyAdvertisedDeviceCallbacks());
  pBLEScan->setActiveScan(true);
  pBLEScan->start(30);

  pClient = BLEDevice::createClient();
  // Connect to the remove BLE Server.
  pClient->connect(*pServerAddress);
  Serial.println(" - Connected to server");

  // Obtain a reference to the service we are after in the remote BLE server.
  BLERemoteService* pRemoteService = pClient->getService(serviceUUID);
  if (pRemoteService == nullptr) {
    u8x8.clearDisplay();
    u8x8.drawString(0, 3, "False UUID");
    Serial.print("Failed to find our service UUID: ");
    Serial.println(serviceUUID.toString().c_str());
    return;
  }

  // Obtain a reference to the characteristics in the service of the remote BLE server.
  BLERemoteCharacteristic* pCharacteristic = pRemoteService->getCharacteristic(charUUID);
  if (pCharacteristic == nullptr) {
    u8x8.clearDisplay();
    u8x8.drawString(0, 3, "False UUID");
    Serial.print("Failed to find our characteristic UUID");
    return;
  }
  Serial.println(" - Found light value characteristics");
  u8x8.clearDisplay();
  u8x8.drawString(0, 3, "Connected!");
  
  pCharacteristic->registerForNotify([](BLERemoteCharacteristic* pBLERemoteCharacteristic, uint8_t* pData, size_t length, bool isNotify) {
    Serial.println("Notify received");
    Serial.print("Value: ");
    Serial.println(*pData);
    snprintf(light_val, sizeof(light_val), "%d", *pData);
  });

  doconnect = true;
  u8x8.clearDisplay();
  u8x8.drawString(0, 4, "Receiving...");
}

void loop() {
  if (doconnect) {
    BLERemoteService* pRemoteService = pClient->getService(serviceUUID);
    BLERemoteCharacteristic* pCharacteristic = pRemoteService->getCharacteristic(charUUID);
    pCharacteristic->registerForNotify([](BLERemoteCharacteristic* pBLERemoteCharacteristic, uint8_t* pData, size_t length, bool isNotify) {
      Serial.println("Notify received");
      Serial.print("Value: ");
      Serial.println(*pData);
      snprintf(light_val, sizeof(light_val), "%d", *pData);
    });
  }
  printReadings();
  delay(1000);
  u8x8.clearLine(2);
}
```

Al usar el ejemplo anterior, recomendamos cargar el programa del Servidor y asegurarse de que se haya ejecutado exitosamente antes de usar el programa del Cliente. Si el programa se ejecuta sin problemas, verás los siguientes resultados.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/65.gif" style={{width:700, height:'auto'}}/></div>

#### Anotación del programa

Para los programas anteriores, seleccionaremos las partes más importantes para explicar. Comenzaremos con el programa del servidor.

Al inicio del programa, definimos el nombre del servidor Bluetooth, este nombre puede ser el nombre que establezcas, pero necesitas recordarlo porque necesitas confiar en este nombre para buscar este dispositivo Bluetooth.

```c
#define bleServerName "XIAOESP32S3_BLE"
```

En las secciones anteriores del tutorial, hemos hablado de que bajo el servidor habrá Characteristic, y bajo Characteristic estarán los valores y el resto del contenido. Por lo tanto, necesitamos seguir este principio cuando creamos anuncios.

```c
BLEService *pService = pServer->createService(BLEUUID((uint16_t)0x181A)); // Environmental Sensing
  pCharacteristic = pService->createCharacteristic(
    BLEUUID((uint16_t)0x2A59), // Analog Output
    BLECharacteristic::PROPERTY_NOTIFY
  );
  pCharacteristic->addDescriptor(new BLE2902());
```

En el programa anterior, puedes ver que `createService()` se usa para crear un servidor. El parámetro es un UUID específico: **0x181A**. En las reglas de GATT, **0x181A** indica datos de tipo monitoreo ambiental, y el UUID de la misma Característica: **0x2A59** también tiene un significado especial. En GATT, indica la salida analógica. Esto se ajusta al caso de nuestros valores del sensor de luz, por lo que aquí lo estoy definiendo como tal. Puedes leer [aquí](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/GATT.pdf) qué significan algunos de los UUIDs específicos que GATT ha preparado para nosotros.

Por supuesto, también puedes establecer los UUIDs sin seguir el estándar GATT, solo necesitas asegurarte de que estos dos valores sean únicos y no afecten la capacidad de tu cliente para encontrar los valores reconociendo estos UUIDs. Puedes ir a [uuidgenerator.net](https://www.uuidgenerator.net/) para crear UUIDs aleatorios para tus servicios y características.

El segundo parámetro de la función `createCharacteristic()` es para establecer las propiedades. Ten en cuenta que aquí necesitamos establecerlo como **PROPERTY_NOTIFY** para asegurar que los datos se envíen continuamente.

```c
pCharacteristic->setValue(light_val);
pCharacteristic->notify();
```

Finalmente, en el `loop`, simplemente anunciamos el valor del sensor de luz leído cada 10ms.

El siguiente paso es el programa Cliente, que parecerá mucho más complicado.

Al comienzo del programa, sigue siendo contenido muy familiar. Necesitas asegurarte de que este contenido sea consistente con lo que has configurado en el lado del servidor.

```c
//BLE Server name (the other ESP32 name running the server sketch)
#define bleServerName "XIAOESP32S3_BLE"

BLEUUID serviceUUID("181A"); // Environmental Sensing
BLEUUID charUUID("2A59");    // Analog Output
```

A continuación escribimos una función de callback, la función principal de esta función es buscar un dispositivo Bluetooth cercano, luego compararlo con el nombre del dispositivo Bluetooth que proporcionaste, capturarlo y obtener su dirección MAC.

```c
class MyAdvertisedDeviceCallbacks: public BLEAdvertisedDeviceCallbacks {
  void onResult(BLEAdvertisedDevice advertisedDevice) {
    if (advertisedDevice.getName() == bleServerName) { //Check if the name of the advertiser matches
      advertisedDevice.getScan()->stop(); //Scan can be stopped, we found what we are looking for
      pServerAddress = new BLEAddress(advertisedDevice.getAddress()); //Address of advertiser is the one we need
      Serial.println("Device found. Connecting!");
    }
  }
};
```

El siguiente procedimiento es la clave para encontrar el valor de intensidad de luz en el servidor. Primero, necesitamos encontrar nuestro UUID del servidor, luego buscar el UUID de la Característica bajo el servidor, y finalmente encontrar el valor de luz. Este método de análisis tiene una correspondencia uno a uno con la estructura de datos de Bluetooth.

```c
// Obtain a reference to the service we are after in the remote BLE server.
BLERemoteService* pRemoteService = pClient->getService(serviceUUID);
if (pRemoteService == nullptr) {
  Serial.print("Failed to find our service UUID: ");
  Serial.println(serviceUUID.toString().c_str());
  return;
}

// Obtain a reference to the characteristics in the service of the remote BLE server.
BLERemoteCharacteristic* pCharacteristic = pRemoteService->getCharacteristic(charUUID);
if (pCharacteristic == nullptr) {
  Serial.print("Failed to find our characteristic UUID");
  return;
}
Serial.println(" - Found light value characteristics");

pCharacteristic->registerForNotify([](BLERemoteCharacteristic* pBLERemoteCharacteristic, uint8_t* pData, size_t length, bool isNotify) {
    Serial.println("Notify received");
    Serial.print("Value: ");
    Serial.println(*pData);
  });
```

Finalmente, el valor de luz se coloca en el puntero pData.

:::tip
El ejemplo anterior proporciona el ejemplo más simple de un solo valor para un solo sensor. Si deseas anunciar múltiples sensores o múltiples valores de sensores a través de Bluetooth, te recomendamos leer los ejemplos del tutorial aquí.

- [ESP32 BLE Servidor y Cliente (Bluetooth Low Energy)](https://randomnerdtutorials.com/esp32-ble-server-client/)
:::


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

## Solución de problemas

### P1: ¿BluetoothSerial no está disponible en el ejemplo de XIAO ESP32S3?

[El ESP32-S3 no tiene hardware Bluetooth Classic en el chip](https://github.com/espressif/arduino-esp32/issues/8023). Solo el ESP32 "antiguo" puede hacerlo - ningún otro SoC de Espressif tiene BT Classic.


## Soporte técnico y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


