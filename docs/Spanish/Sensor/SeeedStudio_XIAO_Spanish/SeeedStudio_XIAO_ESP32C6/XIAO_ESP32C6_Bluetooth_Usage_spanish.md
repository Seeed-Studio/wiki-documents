---
description: Bluetooth usage with Seeed Studio XIAO ESP32C6.
title: Uso de Bluetooth en ESP32C6
keywords:
- esp32c6
- xiao
- ble
- bluetooth
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/xiao_esp32c6_bluetooth
last_update:
  date: 02/08/2025
  author: Guillermo
---

# Uso de Bluetooth con XIAO ESP32C6 de Seeed Studio

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32C6</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

La placa de desarrollo XIAO ESP32C6 de Seeed Studio es una potente opción que soporta Bluetooth 5, BLE y redes Mesh, lo que la convierte en una opción ideal para una amplia variedad de aplicaciones de IoT que requieren conectividad inalámbrica. Con su destacada rendimiento en RF, el XIAO ESP32C6 puede proporcionar comunicación inalámbrica confiable y de alta velocidad en diversas distancias, lo que lo convierte en una solución versátil tanto para aplicaciones de corto como de largo alcance. En este tutorial, nos enfocaremos en las características básicas de las capacidades de Bluetooth del XIAO ESP32C6, como cómo escanear dispositivos Bluetooth cercanos, cómo establecer una conexión Bluetooth y cómo transmitir y recibir datos a través de una conexión Bluetooth.

## Uso de Bluetooth Low Energy (BLE)

Bluetooth Low Energy, conocido como BLE, es una variante de Bluetooth que ahorra energía. La aplicación principal de BLE es la transmisión a corta distancia de pequeñas cantidades de datos (bajo ancho de banda). A diferencia de Bluetooth, que está siempre activo, BLE permanece en modo de suspensión constantemente, excepto cuando se inicia una conexión.

Debido a sus características, BLE es adecuado para aplicaciones que necesitan intercambiar pequeñas cantidades de datos de forma periódica y que funcionan con una batería de celda de botón. Por ejemplo, BLE es muy útil en las industrias de salud, fitness, rastreo, balizas, seguridad y automatización del hogar.

Esto hace que consuma muy poca energía. BLE consume aproximadamente 100 veces menos energía que Bluetooth (dependiendo del caso de uso).

En cuanto a la parte de BLE del XIAO ESP32C6, introduciremos su uso en las siguientes tres secciones.

- [Algunos conceptos fundamentales](#some-fundamental-concepts) -- Primero conoceremos algunos conceptos que pueden usarse con frecuencia en BLE para ayudarnos a entender el proceso de ejecución y el pensamiento detrás de los programas BLE.
- [Escáner BLE](#ble-scanner) -- Esta sección explicará cómo buscar dispositivos Bluetooth cercanos y mostrarlos en el monitor serie.
- [Servidor/cliente BLE](#ble-serverclient) -- Esta sección explicará cómo usar el XIAO ESP32C6 como Servidor y Cliente para enviar y recibir mensajes de datos específicos. También se usará para recibir o enviar mensajes desde el teléfono al XIAO.
- [Intercambio de datos de sensores BLE](#ble-sensor-data-exchange) -- Esta es la última sección del tutorial completo donde recorreremos un ejemplo de sensor para explicar cómo enviar los datos del sensor a través de BLE.

### Algunos conceptos fundamentales

#### Servidor y Cliente

Con Bluetooth Low Energy, existen dos tipos de dispositivos: el servidor y el cliente. El XIAO ESP32C6 puede actuar tanto como cliente como servidor.

El servidor anuncia su existencia, por lo que puede ser encontrado por otros dispositivos, y contiene los datos que el cliente puede leer. El cliente escanea los dispositivos cercanos, y cuando encuentra el servidor que está buscando, establece una conexión y escucha los datos entrantes. Esto se llama comunicación punto a punto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/ble.png" style={{width:800, height:'auto'}}/></div>

#### Atributo

Un Atributo es en realidad una pieza de datos. Cada dispositivo Bluetooth se utiliza para proporcionar un servicio, y el servicio es una colección de datos; esta colección puede llamarse base de datos, y cada entrada en la base de datos es un Atributo, por lo que aquí traduzco Atributo como entradas de datos. Puedes imaginar un dispositivo Bluetooth como una tabla, donde cada fila dentro de la tabla es un Atributo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/52.png" style={{width:600, height:'auto'}}/></div>

#### GATT

Cuando dos dispositivos Bluetooth establecen una conexión, necesitan un protocolo para determinar cómo comunicarse. GATT (Perfil de Atributos Genéricos) es ese protocolo que define cómo se transmiten los datos entre dispositivos Bluetooth.

En el protocolo GATT, las funciones y propiedades de un dispositivo se organizan en estructuras llamadas servicios, características y descriptores. Un servicio representa un conjunto de funciones y características relacionadas proporcionadas por un dispositivo. Cada servicio puede incluir múltiples características, que definen una propiedad o comportamiento específico del servicio, como datos de un sensor o comandos de control. Cada característica tiene un identificador único y un valor, que puede leerse o escribirse para la comunicación. Los descriptores se utilizan para describir los metadatos de las características, como el formato y los permisos de acceso a los valores de las características.

Al usar el protocolo GATT, los dispositivos Bluetooth pueden comunicarse en diferentes escenarios de aplicación, como transmitir datos de sensores o controlar dispositivos remotos.

#### Característica BLE

ATT, cuyo nombre completo es protocolo de atributos. Al final, ATT se compone de un grupo de comandos ATT, es decir, comandos de solicitud y respuesta, ATT también es la capa más alta del paquete nulo de Bluetooth, es decir, ATT es donde analizamos más el paquete de Bluetooth.

El comando ATT, formalmente conocido como PDU ATT (Unidad de Datos del Protocolo). Incluye 4 categorías: leer, escribir, notificar e indicar. Estos comandos se pueden dividir en dos tipos: si requiere una respuesta, entonces irá seguido de una solicitud; por el contrario, si solo requiere un ACK pero no una respuesta, entonces no irá seguido de una solicitud.

El Servicio y la Característica se definen en la capa GATT. El lado del Servicio proporciona el Servicio, el Servicio es los datos, y los datos son los atributos, y el Servicio y la Característica son la presentación lógica de los datos, o los datos que el usuario puede ver finalmente se transforman en el Servicio y la Característica.

Echemos un vistazo a cómo se ven el servicio y la característica desde la perspectiva de un móvil. nRF Connect es una aplicación que nos muestra de manera visual cómo debe verse cada paquete.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/62.png" style={{width:400, height:'auto'}}/></div>

Como puedes ver, en la especificación de Bluetooth, cada aplicación específica de Bluetooth está compuesta por múltiples Servicios, y cada Servicio está compuesto por múltiples Características. Una Característica consta de un UUID, Propiedades y un Valor.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/50.png" style={{width:300, height:'auto'}}/></div>

Las Propiedades se utilizan para describir los tipos y permisos de las operaciones sobre una característica, como si soporta leer, escribir, notificar, entre otros. Esto es similar a las cuatro categorías que se incluyen en un PDU ATT.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/51.png" style={{width:800, height:'auto'}}/></div>

#### UUID

Cada servicio, característica y descriptor tiene un UUID (Identificador Único Universal). Un UUID es un número único de 128 bits (16 bytes). Por ejemplo:

```
ea094cbd-3695-4205-b32d-70c1dea93c35
```

Existen UUIDs abreviados para todos los tipos, servicios y perfiles especificados en el [SIG (Grupo Especial de Interés de Bluetooth)](https://www.bluetooth.com/specifications/gatt/services). Pero si tu aplicación necesita su propio UUID, puedes generarlo usando este [sitio web generador de UUID](https://www.uuidgenerator.net/).

### Escáner BLE

Crear un escáner BLE para el XIAO ESP32C6 es sencillo. A continuación se muestra un programa de ejemplo para crear un escáner.


```cpp
#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLEScan.h>
#include <BLEAdvertisedDevice.h>

int scanTime = 5; // En segundos
BLEScan* pBLEScan;

class MyAdvertisedDeviceCallbacks: public BLEAdvertisedDeviceCallbacks {
    void onResult(BLEAdvertisedDevice advertisedDevice) {
      Serial.printf("Dispositivo anunciado: %s \n", advertisedDevice.toString().c_str());
    }
};

void setup() {
  Serial.begin(115200);
  Serial.println("Escaneando...");

  BLEDevice::init("");
  pBLEScan = BLEDevice::getScan(); // crear nuevo escaneo
  pBLEScan->setAdvertisedDeviceCallbacks(new MyAdvertisedDeviceCallbacks());
  pBLEScan->setActiveScan(true); // el escaneo activo consume más energía, pero obtiene resultados más rápido
  pBLEScan->setInterval(100);
  pBLEScan->setWindow(99);  // valor igual o menor que el de setInterval
}

void loop() {
  // pon tu código principal aquí, para que se ejecute repetidamente:
  BLEScanResults foundDevices = pBLEScan->start(scanTime, false);
  Serial.print("Dispositivos encontrados: ");
  Serial.println(foundDevices.getCount());
  Serial.println("¡Escaneo terminado!");
  pBLEScan->clearResults();   // eliminar resultados del buffer de BLEScan para liberar memoria
  delay(10000);
}
```

:::tip
Si ya has actualizado tu placa de desarrollo ESP32 a la versión 3.0.0 o superior, debes modificar algunas partes del código para que sea compatible:
1. ```BLEScanResults foundDevices = pBLEScan->start(scanTime, false);``` cambia a ```BLEScanResults* foundDevices = pBLEScan->start(scanTime, false);```
2. ```Serial.println(foundDevices.getCount());``` cambia a ```Serial.println(foundDevices->getCount());```
:::

Ahora puedes seleccionar la placa XIAO ESP32C6 y cargar el programa. Si el programa se ejecuta correctamente, abre el monitor serial y ajusta la tasa de baudios a 115200, podrás ver el siguiente resultado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/54.png" style={{width:700, height:'auto'}}/></div>

Este programa imprime el nombre, la dirección MAC, los datos del fabricante y la señal del dispositivo Bluetooth escaneado.

#### Anotación del programa

Comienza importando las bibliotecas necesarias para las capacidades BLE.

Luego, define una clase llamada `MyAdvertisedDeviceCallbacks` que hereda de la clase `BLEAdvertisedDeviceCallbacks`. Tiene una función llamada `onResult` que se llama cuando se encuentra un dispositivo Bluetooth anunciado durante el escaneo. La función imprime la información del dispositivo en el puerto serial utilizando la función `Serial.printf`. Esta clase se puede usar para manejar la información de los dispositivos Bluetooth durante el escaneo.

```c
class MyAdvertisedDeviceCallbacks: public BLEAdvertisedDeviceCallbacks {
    void onResult(BLEAdvertisedDevice advertisedDevice) {
      Serial.printf("Advertised Device: %s \n", advertisedDevice.toString().c_str());
    }
};
```

En la función `setup`, configuramos un escaneo BLE con los parámetros especificados, incluidos los valores de intervalo y ventana de escaneo. También se inicializa el dispositivo BLE y se configura una función de callback para manejar los dispositivos anunciados encontrados durante el escaneo.

```c
BLEDevice::init("");
pBLEScan = BLEDevice::getScan();
pBLEScan->setAdvertisedDeviceCallbacks(new MyAdvertisedDeviceCallbacks());
pBLEScan->setActiveScan(true);
pBLEScan->setInterval(100);
pBLEScan->setWindow(99);
```

Finalmente, la función `loop` inicia el escaneo BLE con el tiempo de escaneo y la bandera de bloqueo especificados. Luego, imprime el número de dispositivos encontrados en el puerto serial y limpia el búfer de resultados para liberar memoria.

```c
BLEScanResults foundDevices = pBLEScan->start(scanTime, false);
Serial.print("Dispositivos encontrados: ");
Serial.println(foundDevices.getCount());
Serial.println("Escanéo realizado!");
pBLEScan->clearResults();
```

### Servidor/cliente BLE

Como se mencionó anteriormente, XIAO ESP32C6 puede funcionar tanto como servidor como cliente. Veamos el programa en el que actúa como servidor y cómo usarlo. Después de cargar el siguiente programa en XIAO, funcionará como servidor y enviará un mensaje de "Hola Mundo" a todos los dispositivos Bluetooth conectados a XIAO.

```cpp
// Código del Servidor
#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLEServer.h>

#define SERVICE_UUID        "4fafc201-1fb5-459e-8fcc-c5c9c331914b"
#define CHARACTERISTIC_UUID "beb5483e-36e1-4688-b7f5-ea07361b26a8"

void setup() {
  Serial.begin(115200);
  Serial.println("¡Iniciando el trabajo BLE!");

  BLEDevice::init("XIAO_ESP32C6");
  BLEServer *pServer = BLEDevice::createServer();
  BLEService *pService = pServer->createService(SERVICE_UUID);
  BLECharacteristic *pCharacteristic = pService->createCharacteristic(
                                         CHARACTERISTIC_UUID,
                                         BLECharacteristic::PROPERTY_READ |
                                         BLECharacteristic::PROPERTY_WRITE
                                       );

  pCharacteristic->setValue("Hola Mundo");
  pService->start();
  // BLEAdvertising *pAdvertising = pServer->getAdvertising();  // esto aún funciona por compatibilidad hacia atrás
  BLEAdvertising *pAdvertising = BLEDevice::getAdvertising();
  pAdvertising->addServiceUUID(SERVICE_UUID);
  pAdvertising->setScanResponse(true);
  pAdvertising->setMinPreferred(0x06);  // funciones que ayudan con problemas de conexión en iPhone
  pAdvertising->setMinPreferred(0x12);
  BLEDevice::startAdvertising();
  Serial.println("¡Característica definida! Ahora puedes leerla en tu teléfono.");
}

void loop() {
  // pon tu código principal aquí, para que se ejecute repetidamente:
  delay(2000);
}
```

Mientras tanto, puedes buscar y descargar la aplicación **nRF Connect** en las principales tiendas de aplicaciones móviles, que permite que tu teléfono busque y se conecte a dispositivos Bluetooth.

- Android: [nRF Connect](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=es)
- IOS: [nRF Connect](https://apps.apple.com/us/app/nrf-connect-for-mobile/id1054362403)

Después de descargar el software, sigue los pasos que se muestran a continuación para buscar y conectar XIAO ESP32C6, y verás el mensaje anunciado "Hola Mundo".

<table align="center">
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/55.jpg" style={{width:200, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/ble_app.png" style={{width:200, height:'auto'}}/></div></td>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/58.jpg" style={{width:200, height:'auto'}}/></div></td>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/59.jpg" style={{width:200, height:'auto'}}/></div></td>
	</tr>
</table>

Si deseas usar otro XIAO ESP32C6 como cliente para recibir mensajes del servidor, puedes seguir el siguiente procedimiento para el XIAO cliente.

```cpp
// Código del Cliente
#include "BLEDevice.h"
//#include "BLEScan.h"

// El servicio remoto al que deseamos conectarnos.
static BLEUUID serviceUUID("4fafc201-1fb5-459e-8fcc-c5c9c331914b");
// La característica del servicio remoto que nos interesa.
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
    Serial.print("Callback de notificación para la característica ");
    Serial.print(pBLERemoteCharacteristic->getUUID().toString().c_str());
    Serial.print(" con longitud de datos ");
    Serial.println(length);
    Serial.print("datos: ");
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
    Serial.print("Formando una conexión con ");
    Serial.println(myDevice->getAddress().toString().c_str());
    
    BLEClient*  pClient  = BLEDevice::createClient();
    Serial.println(" - Cliente creado");

    pClient->setClientCallbacks(new MyClientCallback());

    // Conectar con el servidor BLE remoto.
    pClient->connect(myDevice);  // si pasas BLEAdvertisedDevice en lugar de la dirección, se reconocerá el tipo de dirección del dispositivo par (pública o privada)
    Serial.println(" - Conectado al servidor");
    pClient->setMTU(517); // Establece el cliente para solicitar el MTU máximo del servidor (el valor por defecto es 23 si no se especifica)
  
    // Obtener una referencia al servicio que buscamos en el servidor BLE remoto.
    BLERemoteService* pRemoteService = pClient->getService(serviceUUID);
    if (pRemoteService == nullptr) {
      Serial.print("No se pudo encontrar nuestro servicio UUID: ");
      Serial.println(serviceUUID.toString().c_str());
      pClient->disconnect();
      return false;
    }
    Serial.println(" - Servicio encontrado");

    // Obtener una referencia a la característica dentro del servicio del servidor BLE remoto.
    pRemoteCharacteristic = pRemoteService->getCharacteristic(charUUID);
    if (pRemoteCharacteristic == nullptr) {
      Serial.print("No se pudo encontrar nuestra característica UUID: ");
      Serial.println(charUUID.toString().c_str());
      pClient->disconnect();
      return false;
    }
    Serial.println(" - Característica encontrada");

    // Leer el valor de la característica.
    if(pRemoteCharacteristic->canRead()) {
      String value = pRemoteCharacteristic->readValue();
      Serial.print("El valor de la característica es: ");
      Serial.println(value);
    }

    if(pRemoteCharacteristic->canNotify())
      pRemoteCharacteristic->registerForNotify(notifyCallback);

    connected = true;
    return true;
}
/**
 * Escanear servidores BLE y encontrar el primero que publicite el servicio que estamos buscando.
 */
class MyAdvertisedDeviceCallbacks: public BLEAdvertisedDeviceCallbacks {
 /**
   * Se llama para cada servidor BLE que publicite.
   */
  void onResult(BLEAdvertisedDevice advertisedDevice) {
    Serial.print("Dispositivo BLE publicitado encontrado: ");
    Serial.println(advertisedDevice.toString().c_str());

    // Hemos encontrado un dispositivo, ahora vamos a ver si contiene el servicio que estamos buscando.
    if (advertisedDevice.haveServiceUUID() && advertisedDevice.isAdvertisingService(serviceUUID)) {

      BLEDevice::getScan()->stop();
      myDevice = new BLEAdvertisedDevice(advertisedDevice);
      doConnect = true;
      doScan = true;

    } // Servidor encontrado
  } // onResult
}; // MyAdvertisedDeviceCallbacks

void setup() {
  Serial.begin(115200);
  Serial.println("Iniciando la aplicación Cliente BLE de Arduino...");
  BLEDevice::init("");

  // Obtener un escáner y establecer el callback que queremos usar para ser informados cuando
  // detectemos un nuevo dispositivo. Especificar que queremos escaneo activo y comenzar el
  // escaneo para que dure 5 segundos.
  BLEScan* pBLEScan = BLEDevice::getScan();
  pBLEScan->setAdvertisedDeviceCallbacks(new MyAdvertisedDeviceCallbacks());
  pBLEScan->setInterval(1349);
  pBLEScan->setWindow(449);
  pBLEScan->setActiveScan(true);
  pBLEScan->start(5, false);
} // Fin de setup.

// Esta es la función principal del bucle de Arduino.
void loop() {
  // Si la bandera "doConnect" es verdadera, significa que hemos escaneado y encontrado el
  // servidor BLE deseado con el que deseamos conectar. Ahora nos conectamos a él. Una vez que estamos 
  // conectados, establecemos la bandera de conexión en verdadera.
  if (doConnect == true) {
    if (connectToServer()) {
      Serial.println("Ahora estamos conectados al servidor BLE.");
    } else {
      Serial.println("No hemos podido conectar al servidor; no haremos nada más.");
    }
    doConnect = false;
  }

  // Si estamos conectados a un servidor BLE remoto, actualizamos la característica cada vez que
  // se alcanza con el tiempo actual desde el arranque.
  if (connected) {
    String newValue = "Tiempo desde el arranque: " + String(millis()/1000);
    Serial.println("Estableciendo nuevo valor de la característica a \"" + newValue + "\"");
    
    // Establecer el valor de la característica como el array de bytes que en realidad es una cadena.
    pRemoteCharacteristic->writeValue(newValue.c_str(), newValue.length());
  }else if(doScan){
    BLEDevice::getScan()->start(0);  // Este es solo un ejemplo para iniciar el escaneo después de la desconexión, lo más probable es que haya una mejor forma de hacerlo en Arduino
  }
  
  delay(1000); // Retraso de un segundo entre los bucles.
} // Fin del loop
```

:::tip
Si ya has actualizado tu placa de desarrollo ESP32 a la versión 3.0.0 o superior, debes modificar algunas partes del código para que sea compatible:
1.  ```std::string value = pRemoteCharacteristic->readValue();``` cambia a ```String value = pRemoteCharacteristic->readValue();```
:::


El programa anterior convertirá a la XIAO en un cliente y buscará dispositivos Bluetooth cercanos. Cuando el UUID del dispositivo Bluetooth coincida con el UUID que proporcionaste, se conectará al dispositivo y obtendrá el valor de su característica.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/60.png" style={{width:800, height:'auto'}}/></div>

#### Anotación del programa

Echemos un vistazo rápido a cómo funciona el código de ejemplo para el servidor BLE. Comienza importando las bibliotecas necesarias para las capacidades BLE. Luego, es necesario definir un UUID para el Servicio y la Característica.

```c
#define SERVICE_UUID "4fafc201-1fb5-459e-8fcc-c5c9c331914b"
#define CHARACTERISTIC_UUID "beb5483e-36e1-4688-b7f5-ea07361b26a8"
```

Puedes dejar los UUIDs predeterminados o puedes ir a [uuidgenerator.net](https://www.uuidgenerator.net/) para crear UUIDs aleatorios para tus servicios y características.

Luego, creas un dispositivo BLE llamado “XIAO_ESP32C6”. Puedes cambiar este nombre por el que prefieras. En la siguiente línea, configuras el dispositivo BLE como un servidor. Después, creas un servicio para el servidor BLE con el UUID definido previamente.

```c
BLEServer *pServer = BLEDevice::createServer();
BLEService *pService = pServer->createService(SERVICE_UUID);
```

Luego, configuras la característica para ese servicio. Como puedes ver, también usas el UUID definido previamente, y necesitas pasar como argumentos las propiedades de la característica. En este caso, son: READ (lectura) y WRITE (escritura).

```c
BLECharacteristic *pCharacteristic = pService->createCharacteristic(
                                     CHARACTERISTIC_UUID,
                                     BLECharacteristic::PROPERTY_READ |
                                     BLECharacteristic::PROPERTY_WRITE
                                     );
```

Después de crear la característica, puedes establecer su valor con el método `setValue()`. En este caso, estamos estableciendo el valor como el texto "Hello World". Puedes cambiar este texto por lo que desees. En proyectos futuros, este texto puede ser una lectura de un sensor o el estado de una lámpara, por ejemplo.

Finalmente, puedes iniciar el servicio y la publicidad, para que otros dispositivos BLE puedan escanear y encontrar este dispositivo BLE.

```c
BLEAdvertising *pAdvertising = pServer->getAdvertising();
pAdvertising->start();
```

Este es solo un ejemplo simple de cómo crear un servidor BLE. En este código, no se realiza nada en el `loop()`, pero puedes agregar lo que sucede cuando un nuevo cliente se conecta (revisa el ejemplo de `BLE_notify` para más detalles).

### Intercambio de datos de sensores BLE

A continuación, abordaremos un caso real. En este caso, conectaremos el XIAO ESP32C6 a un sensor de intensidad de luz y luego, a través de Bluetooth, enviaremos el valor del sensor de luz a otro XIAO ESP32C6 para mostrarlo en la pantalla de la placa de expansión.

Para comodidad de cableado, utilizaremos dos placas de expansión XIAO. El programa de muestra es solo para referencia; puedes elegir el producto según las necesidades reales del proyecto.

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO ESP32C6</th>
      <th>Seeed Studio Base de Expansióm para XIAO con Grove OLED</th>
      <th>Grove - Sensor Digital de Luz - TSL2561</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/img/hardware%20overview.jpg" style={{width:180, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Digital-Light-Sensor-TSL2561.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

Además de la preparación de hardware mencionada anteriormente, necesitarás preparar las siguientes bibliotecas, descargarlas y agregarlas al entorno de Arduino IDE.

- **Biblioteca para pantallas OLED u8g2**:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/olikraus/U8g2_Arduino">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descarga las librerías</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br></br>

- **Librería de Grove - Sensor Digital de Luz - TSL2561**:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Grove_Digital_Light_Sensor">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descarga las librerías</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br></br>

Necesitamos preparar dos XIAO, uno como servidor y otro como cliente. Aquí está el programa de muestra para el servidor. XIAO como servidor tiene las siguientes tareas principales:

- Primero, obtener los valores en tiempo real del sensor de luz.
- Segundo, crear el servidor Bluetooth.
- Tercero, anunciar los valores de intensidad de luz a través de Bluetooth.
- Cuarto, mostrar la intensidad de luz en tiempo real y el envío en la pantalla.

```c
// servidor
#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLE2902.h>
#include <BLEServer.h>
#include <Wire.h>
#include <Digital_Light_TSL2561.h>
#include <Arduino.h>
#include <U8x8lib.h>
#include <Wire.h>

// Pantallas OLED sin reinicio del display
U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* reloj=*/ SCL, /* datos=*/ SDA, /* reset=*/ U8X8_PIN_NONE);

// Nombre del servidor BLE (el otro ESP32 que ejecuta el sketch del servidor)
#define bleServerName "XIAOESP32C6_BLE"

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
  
  // Configuración de la pantalla OLED
  u8x8.begin();
  u8x8.setFlipMode(1);

  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.drawString(0, 3, "Iniciando...");

  Wire.begin();
  TSL2561.init();
  
  BLEDevice::init(bleServerName);
  BLEServer *pServer = BLEDevice::createServer();
  pServer->setCallbacks(new MyServerCallbacks());
  
  BLEService *pService = pServer->createService(BLEUUID((uint16_t)0x181A)); // Sensado ambiental
  pCharacteristic = pService->createCharacteristic(
    BLEUUID((uint16_t)0x2A59), // Salida analógica
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
    u8x8.print("Valor de luz:");
    u8x8.clearLine(2);
    u8x8.setCursor(0, 2);
    u8x8.print(light_val);
    u8x8.drawString(0, 4, "Enviando...");
    delay(10); // El stack de bluetooth entrará en congestión si se envían demasiados paquetes
  }
}
```

Después de cargar el programa en uno de los XIAO, si todo funciona correctamente, puedes sacar tu teléfono y usar la aplicación nRF Connect para buscar el dispositivo Bluetooth llamado **XIAOESP32C6_BLE**, conectarlo, y hacer clic en el botón mostrado a continuación. Recibirás la información de los datos del sensor.
<!--
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/63.jpg" style={{width:300, height:'auto'}}/></div>
-->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/63.jpg" style={{width:300, height:'auto'}}/></div>

Aquí encontrarás que la manera en que operamos el software no será exactamente la misma que en el ejemplo anterior, porque, generalmente, cuando enviamos un mensaje de tipo sensor, elegimos usar la propiedad **notify** para garantizar que el mensaje sea eficiente.

A continuación, debemos tomar nuestro otro XIAO, que actuará como cliente para recolectar y mostrar nuestros datos.

```c
//cliente
#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLEClient.h>
#include <BLEServer.h>
#include <Arduino.h>
#include <U8x8lib.h>
#include <Wire.h>

// OLEDs sin Reset de la Pantalla
U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);

BLEClient*  pClient;
bool doconnect = false;

//Nombre del servidor BLE (el nombre del otro ESP32 que ejecuta el sketch del servidor)
#define bleServerName "XIAOESP32C6_BLE"

//Dirección del dispositivo periférico. La dirección se encontrará durante el escaneo...
static BLEAddress *pServerAddress;

BLEUUID serviceUUID("181A"); // Sensores Ambientales
BLEUUID charUUID("2A59");    // Salida Analógica

char light_val[1024];

//Función de retorno que se llama cuando se recibe el anuncio de otro dispositivo
class MyAdvertisedDeviceCallbacks: public BLEAdvertisedDeviceCallbacks {
  void onResult(BLEAdvertisedDevice advertisedDevice) {
    if (advertisedDevice.getName() == bleServerName) { //Verificar si el nombre del dispositivo coincide
      advertisedDevice.getScan()->stop(); //El escaneo se puede detener, hemos encontrado lo que buscábamos
      pServerAddress = new BLEAddress(advertisedDevice.getAddress()); //La dirección del anunciante es la que necesitamos
      Serial.println("Dispositivo encontrado. Conectando!");
    }
  }
};

//función que imprime las últimas lecturas del sensor en la pantalla OLED
void printReadings(){
  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 0);
  u8x8.print("Valor de Luz:");
  u8x8.drawString(0, 2, light_val);
}

void setup() {
  Serial.begin(115200);
  //Configuración de la pantalla OLED
  u8x8.begin();
  u8x8.setFlipMode(1);

  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.drawString(0, 3, "Iniciando...");
  
  Serial.println("Iniciando cliente BLE...");

  BLEDevice::init("XIAOESP32C6_Client");

  // Obtener un escáner y establecer la función de retorno que queremos usar para ser informados cuando
  // detectemos un nuevo dispositivo. Especificar que queremos escaneo activo y comenzar el
  // escaneo para que se ejecute durante 30 segundos.
  BLEScan* pBLEScan = BLEDevice::getScan();
  pBLEScan->setAdvertisedDeviceCallbacks(new MyAdvertisedDeviceCallbacks());
  pBLEScan->setActiveScan(true);
  pBLEScan->start(30);

  pClient = BLEDevice::createClient();
  // Conectar al servidor BLE remoto.
  pClient->connect(*pServerAddress);
  Serial.println(" - Conectado al servidor");

  // Obtener una referencia al servicio que buscamos en el servidor BLE remoto.
  BLERemoteService* pRemoteService = pClient->getService(serviceUUID);
  if (pRemoteService == nullptr) {
    u8x8.clearDisplay();
    u8x8.drawString(0, 3, "UUID Incorrecto");
    Serial.print("Error al encontrar nuestro UUID de servicio: ");
    Serial.println(serviceUUID.toString().c_str());
    return;
  }

  // Obtener una referencia a las características en el servicio del servidor BLE remoto.
  BLERemoteCharacteristic* pCharacteristic = pRemoteService->getCharacteristic(charUUID);
  if (pCharacteristic == nullptr) {
    u8x8.clearDisplay();
    u8x8.drawString(0, 3, "UUID Incorrecto");
    Serial.print("Error al encontrar nuestro UUID de característica");
    return;
  }
  Serial.println(" - Característica de valor de luz encontrada");
  u8x8.clearDisplay();
  u8x8.drawString(0, 3, "¡Conectado!");
  
  pCharacteristic->registerForNotify([](BLERemoteCharacteristic* pBLERemoteCharacteristic, uint8_t* pData, size_t length, bool isNotify) {
    Serial.println("Notificación recibida");
    Serial.print("Valor: ");
    Serial.println(*pData);
    snprintf(light_val, sizeof(light_val), "%d", *pData);
  });

  doconnect = true;
  u8x8.clearDisplay();
  u8x8.drawString(0, 4, "Recibiendo...");
}

void loop() {
  if (doconnect) {
    BLERemoteService* pRemoteService = pClient->getService(serviceUUID);
    BLERemoteCharacteristic* pCharacteristic = pRemoteService->getCharacteristic(charUUID);
    pCharacteristic->registerForNotify([](BLERemoteCharacteristic* pBLERemoteCharacteristic, uint8_t* pData, size_t length, bool isNotify) {
      Serial.println("Notificación recibida");
      Serial.print("Valor: ");
      Serial.println(*pData);
      snprintf(light_val, sizeof(light_val), "%d", *pData);
    });
  }
  printReadings();
  delay(1000);
  u8x8.clearLine(2);
}
```

Cuando uses el ejemplo anterior, te recomendamos cargar el programa del servidor y asegurarte de que se haya ejecutado correctamente antes de usar el programa del cliente. Si el programa funciona sin problemas, verás los siguientes resultados.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/65.gif" style={{width:700, height:'auto'}}/></div>

#### Anotación del programa

Para los programas anteriores, seleccionaremos las partes más importantes para explicar. Comenzaremos con el programa del servidor.

Al principio del programa, definimos el nombre del servidor Bluetooth, este nombre puede ser el que configures, pero debes recordarlo porque necesitarás este nombre para buscar este dispositivo Bluetooth.

```c
#define bleServerName "XIAOESP32C6_BLE"
```

En las secciones anteriores del tutorial, hemos hablado de que bajo el servidor habrá Características, y bajo Característica estarán los valores y el resto del contenido. Así que necesitamos seguir este principio al crear anuncios.

```c
BLEService *pService = pServer->createService(BLEUUID((uint16_t)0x181A)); // Censeo ambiental
  pCharacteristic = pService->createCharacteristic(
    BLEUUID((uint16_t)0x2A59), // Salida analógica
    BLECharacteristic::PROPERTY_NOTIFY
  );
  pCharacteristic->addDescriptor(new BLE2902());
```

En el programa anterior, puedes ver que se utiliza `createService()` para crear un servidor. El parámetro es un UUID específico: **0x181A**. En las reglas de GATT, **0x181A** indica datos del tipo de monitoreo ambiental, y el UUID de la misma Característica: **0x2A59** también tiene un significado especial. En GATT, indica la salida analógica. Esto se ajusta al caso de los valores de nuestro sensor de luz, por lo que aquí lo defino de esta manera. Puedes leer [aquí](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/GATT.pdf) lo que significan algunos de los UUIDs específicos que GATT ha preparado para nosotros.

Por supuesto, también puedes configurar los UUIDs sin seguir el estándar GATT, solo necesitas asegurarte de que estos dos valores sean únicos y no interfieran con la capacidad de tu cliente para encontrar los valores reconociendo estos UUIDs. Puedes ir a [uuidgenerator.net](https://www.uuidgenerator.net/) para crear UUIDs aleatorios para tus servicios y características.

El segundo parámetro de la función `createCharacteristic()` es para configurar las propiedades. Ten en cuenta que aquí debemos configurarlo como **PROPERTY_NOTIFY** para asegurar que los datos se envíen de manera continua.

```c
pCharacteristic->setValue(light_val);
pCharacteristic->notify();
```

Finalmente, en el `loop`, simplemente anunciamos el valor del sensor de luz leído cada 10ms.

El siguiente paso es el programa del Cliente, que parecerá mucho más complicado.

Al principio del programa, sigue siendo contenido muy familiar. Necesitas asegurarte de que este contenido sea consistente con lo que has configurado en el lado del servidor.

```c
// Nombre del servidor BLE (el otro ESP32 que ejecuta el programa del servidor)
#define bleServerName "XIAOESP32C6_BLE"

BLEUUID serviceUUID("181A"); // Censeo ambiental
BLEUUID charUUID("2A59");    // Salida analógica
```

A continuación, escribimos una función de callback. La función principal de esta es buscar un dispositivo Bluetooth cercano, luego compararlo con el nombre del dispositivo Bluetooth que proporcionaste, capturarlo y obtener su dirección MAC.

```c
class MyAdvertisedDeviceCallbacks: public BLEAdvertisedDeviceCallbacks {
  void onResult(BLEAdvertisedDevice advertisedDevice) {
    if (advertisedDevice.getName() == bleServerName) { // Comprobar si el nombre del dispositivo que anuncia coincide
      advertisedDevice.getScan()->stop(); // El escaneo puede detenerse, encontramos lo que buscábamos
      pServerAddress = new BLEAddress(advertisedDevice.getAddress()); // La dirección del dispositivo anunciador es la que necesitamos
      Serial.println("Dispositivo encontrado. ¡Conectando!");
    }
  }
};
```

El siguiente procedimiento es clave para encontrar el valor de la intensidad de luz en el servidor. Primero, necesitamos encontrar el UUID de nuestro servidor, luego buscar el UUID de la Característica dentro del servidor, y finalmente encontrar el valor de la luz. Este método de análisis tiene una correspondencia uno a uno con la estructura de datos de Bluetooth.

```c
// Obtener una referencia al servicio que estamos buscando en el servidor BLE remoto.
BLERemoteService* pRemoteService = pClient->getService(serviceUUID);
if (pRemoteService == nullptr) {
  Serial.print("No se pudo encontrar nuestro servicio UUID: ");
  Serial.println(serviceUUID.toString().c_str());
  return;
}

// Obtener una referencia a las características en el servicio del servidor BLE remoto.
BLERemoteCharacteristic* pCharacteristic = pRemoteService->getCharacteristic(charUUID);
if (pCharacteristic == nullptr) {
  Serial.print("No se pudo encontrar nuestro UUID de característica");
  return;
}
Serial.println(" - Características del valor de la luz encontradas");

pCharacteristic->registerForNotify([](BLERemoteCharacteristic* pBLERemoteCharacteristic, uint8_t* pData, size_t length, bool isNotify) {
    Serial.println("Notificación recibida");
    Serial.print("Valor: ");
    Serial.println(*pData);
  });
```

Finalmente, el valor de la luz se coloca en el apuntador pData

:::tip
El ejemplo anterior ofrece el caso más simple de un solo valor para un solo sensor. Si deseas anunciar múltiples sensores o múltiples valores de sensores a través de Bluetooth, te recomendamos leer los ejemplos del tutorial aquí.

- [ESP32 BLE Server and Client (Bluetooth Low Energy)](https://randomnerdtutorials.com/esp32-ble-server-client/)
:::



## Soporte técnico y discusión de productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


