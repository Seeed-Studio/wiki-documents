---
description: Uso de Bluetooth (Biblioteca Seeed nrf52 habilitada para mbed)
title: Uso de Bluetooth (Biblioteca Seeed nrf52 habilitada para mbed)
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/XIAO-BLE-Sense-Bluetooth-Usage
last_update:
  date: 02/16/2025
  author: Guillermo
---

# Uso de Bluetooth (Biblioteca Seeed nrf52 habilitada para mbed)

**Seeed Studio XIAO nRF52840** y **Seeed Studio XIAO nRF52840 Sense** ambos soportan conectividad Bluetooth. Este wiki presentará las funciones básicas de Bluetooth y proporcionará una demostración con el Módulo de Detección de Sueño Respiratorio de 24 GHz, utilizado por la "Seeed nrf52 mbed-enabled Boards Library".

## Empezando

### Hardware Requerido

- 1 x [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html) o [Seeed Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- 1 x Smartphone/PC con conectividad Bluetooth
- 1 x Cable USB Tipo-C

### Software Requerido

- [nRF Connect for Mobile (Android)](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp)
- [LightBlue App (Apple)](https://apps.apple.com/us/app/lightblue/id557428110)

## Resumen de la Biblioteca de Arduino

:::tip
Si es la primera vez que usas Arduino, te recomendamos encarecidamente que consultes [Empezando con Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/).
:::
Para utilizar la funcionalidad de Bluetooth de Seeed Studio XIAO nRF52840, necesitamos usar la biblioteca oficial de Arduino BLE.

<div>
  <p style={{}}><a href="https://github.com/arduino-libraries/ArduinoBLE" target="_blank" /></p><div align="center"><a href="https://github.com/arduino-libraries/ArduinoBLE" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

Si deseas aplicar la demostración con el Radar de Respiración de Sueño de 24 GHz, también es posible que necesites descargar la biblioteca compatible.

<div>
  <p style={{}}><a href="https://github.com/limengdu/Seeed_24GHz_SleepBreathingRadar_BLE" target="_blank" /></p><div align="center"><a href="https://github.com/limengdu/Seeed_24GHz_SleepBreathingRadar_BLE" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

### Función

Para una introducción a las funciones y uso de la biblioteca de código ArduinoBLE, consulta el [sitio web de Arduino](https://www.arduino.cc/reference/en/libraries/arduinoble/).

Para una introducción a las funciones y uso de la biblioteca de código Seeed 24GHz Sleep Breathing Radar BLE, consulta el [Wiki](https://wiki.seeedstudio.com/Radar_MR24BSD1/#function).

### Instalación

- **Método Uno** (Este método está disponible para ambas bibliotecas de código mencionadas.)

Una vez que hayas descargado la biblioteca en formato ZIP, abre tu IDE de Arduino, haz clic en **Sketch > Incluir Biblioteca > Añadir Biblioteca .ZIP**. Selecciona el archivo ZIP que acabas de descargar, y si la biblioteca se instala correctamente, verás **Biblioteca añadida a tus bibliotecas** en la ventana de notificación. Esto significa que la biblioteca se ha instalado con éxito.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" /></div>

- **Método Dos** (Solo se puede instalar la biblioteca ArduinoBLE.)

El administrador de bibliotecas se agregó a partir de las versiones 1.5 y superiores del IDE de Arduino (1.6.x). Se encuentra en el menú 'Sketch' bajo 'Incluir Biblioteca', 'Gestionar Bibliotecas...'.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/seeed_logo/Library.jpg" /></div>

Cuando abras el Administrador de Bibliotecas, encontrarás una larga lista de bibliotecas listas para instalar con un solo clic. Para encontrar una biblioteca para tu producto, busca el nombre del producto o una palabra clave como 'k type' o 'digitizer', y la biblioteca que necesitas debería aparecer. Haz clic en la biblioteca deseada, y aparecerá el botón 'Instalar'. Haz clic en ese botón y la biblioteca se instalará automáticamente. Cuando la instalación termine, cierra el Administrador de Bibliotecas.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/SeeednRFmbed.png" /></div>

## Ejemplos de aplicaciones

Ahora que tenemos nuestra biblioteca instalada y entendemos las funciones básicas, vamos a ejecutar algunos ejemplos para nuestra Seeed Studio XIAO nRF52840 y ver cómo se comporta.

**Paso 1.** Inicia la aplicación de Arduino.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" /></div>

**Paso 2.** Selecciona el modelo de tu placa de desarrollo y agrégala al IDE de Arduino. Aquí estamos utilizando la "Seeed nrf52 mbed-enabled Boards Library".

> Para la instalación de las bibliotecas de las placas, por favor consulta [este tutorial](https://wiki.seeedstudio.com/XIAO_BLE/#software-setup) para completar la instalación.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nrf528404.png" /></div>

### Demo 1 Controlar el LED integrado usando un teléfono inteligente

En este ejemplo, vamos a conectar la Seeed Studio XIAO nRF52840 (Sense) y un teléfono inteligente usando Bluetooth y enviar mensajes desde el teléfono para encender/apagar el LED rojo integrado en la Seeed Studio XIAO nRF52840 (Sense).

Por favor, pega este código a continuación en el IDE de Arduino y súbelo a la Seeed Studio XIAO nRF52840.

```cpp
#include <ArduinoBLE.h>

BLEService ledService("19B10000-E8F2-537E-4F6C-D104768A1214"); // Servicio LED de Bluetooth® Low Energy

// Característica de interruptor de LED de Bluetooth® Low Energy - UUID personalizado de 128 bits, legible y escribible por el central
BLEByteCharacteristic switchCharacteristic("19B10001-E8F2-537E-4F6C-D104768A1214", BLERead | BLEWrite);

const int ledPin = LED_BUILTIN; // pin para usar con el LED

void setup() {
  Serial.begin(9600);
  while (!Serial);

  // configurar el pin del LED como modo de salida
  pinMode(ledPin, OUTPUT);

  // inicialización
  if (!BLE.begin()) {
    Serial.println("¡Error al iniciar el módulo Bluetooth® Low Energy!");

    while (1);
  }

  // configurar el nombre local y el UUID del servicio anunciado:
  BLE.setLocalName("LED");
  BLE.setAdvertisedService(ledService);

  // agregar la característica al servicio
  ledService.addCharacteristic(switchCharacteristic);

  // agregar servicio
  BLE.addService(ledService);

  // configurar el valor inicial para la característica:
  switchCharacteristic.writeValue(0);

  // comenzar a anunciar
  BLE.advertise();

  Serial.println("Periférico BLE LED");
}

void loop() {
  // escuchar conexiones de periféricos Bluetooth® Low Energy:
  BLEDevice central = BLE.central();

  // si un central está conectado al periférico:
  if (central) {
    Serial.print("Conectado al central: ");
    // imprimir la dirección MAC del central:
    Serial.println(central.address());

    // mientras el central esté conectado al periférico:
  while (central.connected()) {
        if (switchCharacteristic.written()) {
          if (switchCharacteristic.value()) {   
            Serial.println("LED encendido");
            digitalWrite(ledPin, LOW); // cambiado de HIGH a LOW       
          } else {                              
            Serial.println(F("LED apagado"));
            digitalWrite(ledPin, HIGH); // cambiado de LOW a HIGH     
          }
        }
      }

    // cuando el central se desconecta, imprimirlo:
    Serial.print(F("Desconectado del central: "));
    Serial.println(central.address());
  }
}
```

The key to the implementation of this example is the following paragraph.

```cpp
  while (central.connected()) {
        if (switchCharacteristic.written()) {
          if (switchCharacteristic.value()) {   
            Serial.println("LED on");
            digitalWrite(ledPin, LOW); // cambia de HIGH a LOW       
          } else {                              
            Serial.println(F("LED off"));
            digitalWrite(ledPin, HIGH); // cambia de LOW a HIGH     
          }
        }
      }
```

El propósito de este código es realizar un juicio cuando la Seeed Studio XIAO nRF52840 esté conectada a un dispositivo Bluetooth `central.connected()` y reciba contenido del dispositivo Bluetooth `switchCharacteristic.written()`. Si el valor del juicio es diferente de cero `switchCharacteristic.value()`, la luz estará encendida; si el valor del juicio es 0, la luz estará apagada.

Abre tu monitor serial a una velocidad de baudios de 9600 y el LED debería encenderse o apagarse. La salida debería ser algo similar a la imagen a continuación.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO-BLE/2.png" /></div>

En este punto, el control de la luz de la Seeed Studio XIAO nRF52840 se puede completar utilizando la aplicación móvil a través de Bluetooth, como se describe a continuación.

<table align="center">
 <tr>
     <th align="center">iPhone</th>
     <th align="center">Android</th>  
      <th align="center">Descripción</th>
 </tr>
 <tr>
     <td><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/IPhone1.jpg"/></td>
     <td><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/and1.jpeg"/></td>
      <td align="center">Abra el software, busca un dispositivo Bluetooth llamada <strong>LED</strong> y haga clic en Connect.Algunos dispositivos pueden aparecer como <strong>Arduino</strong>.</td>
 </tr>
 <tr>
     <td><img width ={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/IPhone2.jpg"/></td>
     <td><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/and2.jpeg"/></td>
      <td align="center">Ve a la interfaz Bluetooth Seeed Studio Xiao NRF52840 y haga click en el dispositivo para mostrar los detalles del dispositivo.</td>
 </tr>
 <tr>
     <td><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/IPhone4.jpg"/></td>
     <td><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/and3.jpeg"/></td>
      <td align="center">Rellena los datos que se enviarán a la Seeed Studio XIAO nRF52840: envía 1 para encender la luz, envía 0 para apagar la luz.</td>
 </tr>
 <tr>
     <td><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/iPhone5.jpg"/></td>
     <td><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/and4.jpeg"/></td>
      <td align="center">De vuelta en la interfaz de control Bluetooth, puedes ver que el valor ha cambiado y la luz roja de la Seeed Studio XIAO nRF52840 está encendida (o apagada).</td>
 </tr>
 <tr>
      <td colspan="3"><img width = {800} src="https://files.seeedstudio.com/wiki/XIAO-BLE/3.png"/></td>
 </tr>
</table>

### Demo 2 Usar XIAO BLE para obtener datos del módulo de detección de sueño de 24 GHz a través de BLE

En este ejemplo, describiremos cómo obtener los valores de los sensores y enviar la información sobre los datos detectados por los sensores al dispositivo móvil a través de Bluetooth con Seeed Studio XIAO nRF52840.

Sigue la imagen a continuación para conectar la placa Seeed Studio XIAO nRF52840 y el Módulo de Detección de Sueño Respiratorio de 24 GHz. Para más información, puedes hacer clic [aquí](https://wiki.seeedstudio.com/Radar_MR24BSD1).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/60GHzradar/20.png" /></div>

Por favor, abre el código de ejemplo en la biblioteca y súbelo a la Seeed Studio XIAO nRF52840.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO-BLE/6.png" /></div>

```cpp
//Radar_with_XIAOBLE_example

#include <ArduinoBLE.h>
#include <sleepbreathingradarBLE.h>

SleepBreathingRadarBLE radar;
BLEService radarService("19B10000-E8F2-537E-4F6C-D104768A1214"); // Servicio Bluetooth® de baja energía LED

// Característica del interruptor de LED Bluetooth® de baja energía - UUID personalizado de 128 bits, solo lectura y escritura por el central
BLEStringCharacteristic switchCharacteristic("19B10001-E8F2-537E-4F6C-D104768A1214", BLERead | BLENotify, 20);

int last_val = 0;

void setup() {
  Serial.begin(9600);
  radar.SerialInit();
  while (!Serial);

  // iniciar la inicialización
  if (!BLE.begin()) {
    Serial.println("¡Falló el inicio del demo con el sensor radar de 60GHz en Seeed Studio XIAO nRF52840!");
    while (1);
  }

  // establecer el nombre local publicitado y el UUID del servicio:
  BLE.setLocalName("Seeed Studio XIAO nRF52840");
  BLE.setAdvertisedService(radarService);

  // agregar la característica al servicio
  radarService.addCharacteristic(switchCharacteristic);

  // agregar el servicio
  BLE.addService(radarService);

  // comenzar la publicidad
  BLE.advertise();

  Serial.println("Seeed Studio XIAO nRF52840 activo, esperando conexiones...");
}

void loop() {
  // escuchar por periféricos Bluetooth® de baja energía para conectar:
  BLEDevice central = BLE.central();

  // si un central está conectado al periférico:
  if (central) {
    Serial.print("Conectado al central: ");
    // imprimir la dirección MAC del central:
    Serial.println(central.address());

    // mientras el central siga conectado al periférico:
    while (central.connected()){
       radar.recvRadarBytes();                       //Recibir los datos del radar y comenzar el procesamiento
       if (radar.newData == true) {                  //Los datos fueron recibidos y transferidos a la nueva lista dataMsg[]
          byte dataMsg[radar.dataLen+3] = {0x00};
          dataMsg[0] = 0x53;                         //Agregar el encabezado del cuadro como el primer elemento del array
          for (byte n = 0; n < radar.dataLen; n++)dataMsg[n+1] = radar.Msg[n];  //Transferencia cuadro por cuadro
          dataMsg[radar.dataLen+1] = 0x54;
          dataMsg[radar.dataLen+2] = 0x43;
          radar.newData = false;                     //Un conjunto completo de cuadros de datos está guardado
          int new_val = radar.Sleep_inf(dataMsg);    //Usar el algoritmo incorporado del radar para determinar el estado del movimiento humano
          if(new_val != last_val){
            radar.OutputAssignment(new_val);
            switchCharacteristic.setValue(radar.str);
            last_val = new_val;
          }
        }
    }

    // cuando el central se desconecte, imprimirlo:
      Serial.print(F("Desconectado del central: "));
      Serial.println(central.address());
    }
}
```

En este ejemplo, la función que envía datos al dispositivo móvil es `setValue()`. Si deseas obtener una visualización en tiempo real de los datos, necesitas agregar `BLENotify` a este código a continuación. El último parámetro, 20, indica la longitud máxima de los datos que puedes enviar.

```cpp
BLEStringCharacteristic switchCharacteristic("19B10001-E8F2-537E-4F6C-D104768A1214", BLERead | BLENotify, 20);
```

Abrir el monitor serie a una velocidad de baudios de 9600 debería mostrar la distancia entre el sensor y el objeto al que está apuntando tanto en milímetros como en pies. La salida debería verse algo como la imagen a continuación.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO-BLE/4.png" /></div>

A continuación, podemos obtener los datos en vivo enviados por Bluetooth siguiendo los pasos a continuación.

<table align="center">
 <tr>
     <th align="center">iPhone</th>
     <th align="center">Android</th>  
      <th align="center">Descripción</th>
 </tr>
 <tr>
     <td><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/IPhone1.jpg"/></td>
     <td><img width ={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/and5.jpeg"/></td>
      <td align="center">Abra el software, busque un dispositivo Bluetooth llamado <strong>Seeed Studio XIAO nRF52840</strong> y haga clic en Connect.Algunos dispositivos pueden aparecer como <strong>Arduino</strong>.</td>
 </tr>
 <tr>
     <td>=<img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/IPhone2.jpg"/></td>
     <td><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/and2.jpeg"/></td>
      <td align="center">Ve a la interfaz Bluetooth de Seeed Studio XIAO nRF52840 y haz clic en el dispositivo para mostrar los detalles del dispositivo.</td>
 </tr>
 <tr>
     <td><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/iPhone8.jpg"/></td>
     <td><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/and6.jpeg"/></td>
      <td align="center">Abra los datos de actualización en vivo del software.</td>
 </tr>
 <tr>
     <td><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/iPhone7.jpg"/></td>
     <td><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/and7.jpeg"/></td>
      <td align="center">A continuación, cada vez que el radar detecte un mensaje de sueño, se enviará al teléfono a través del Bluetooth del Seeed Studio XIAO nRF52840.</td>
 </tr>
 <tr>
      <td colspan="3"><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/5.png"/></td>
 </tr>
</table>

### Demo 3: Control de LED con dos XIAO nRF52840 a través de comunicación Bluetooth

En este ejemplo, utilizaremos dos XIAO nRF52840, aprovechando sus capacidades Bluetooth para comunicarse entre sí. Uno de los XIAOs actúa como host y está conectado a la placa de expansión XIAO, enviando comandos de control a través de los botones de la placa de expansión. El otro XIAO actúa como esclavo.

Antes de comenzar, por favor prepárate para hacer lo siguiente.

|              |              |
|:--------------:|:--------------:|
|<img width = {210} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg"/>|<img width ={210} src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg"/>|
|[**Placa de expansión Seeed Studio XIAO**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)| 2 x [**Seeed XIAO BLE nRF52840 Sense**](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html?queryID=4bbd8c09f20216aa26f6b5a9040504d0&objectID=5253&indexName=bazaar_retailer_products)|

Por favor, selecciona uno de los XIAO nRF52840 que no requiera que ningún dispositivo esté conectado, y sube el programa a continuación directamente.

```cpp
#include <ArduinoBLE.h>

BLEService ledService("19B10000-E8F2-537E-4F6C-D104768A1214"); // Servicio Bluetooth® de baja energía para LED

// Característica de interruptor de LED Bluetooth® de baja energía - UUID personalizado de 128 bits, solo lectura y escritura por el central
BLEByteCharacteristic switchCharacteristic("19B10001-E8F2-537E-4F6C-D104768A1214", BLERead | BLEWrite);

const int ledPin = LED_BUILTIN; // pin para usar el LED

void setup() {
  Serial.begin(9600);
  while (!Serial);

  // configurar el pin del LED en modo salida
  pinMode(ledPin, OUTPUT);

  // iniciar la inicialización
  if (!BLE.begin()) {
    Serial.println("¡Falló el inicio del módulo Bluetooth® de baja energía!");

    while (1);
  }

  // establecer el nombre local publicitado y el UUID del servicio:
  BLE.setLocalName("XIAO");
  BLE.setAdvertisedService(ledService);

  // agregar la característica al servicio
  ledService.addCharacteristic(switchCharacteristic);

  // agregar el servicio
  BLE.addService(ledService);

  // establecer el valor inicial para la característica:
  switchCharacteristic.writeValue(0);

  // comenzar la publicidad
  BLE.advertise();

  // imprimir la dirección
  Serial.print("Dirección: ");
  Serial.println(BLE.address());

  Serial.println("XIAO nRF52840 Periférico");
}

void loop() {
  // escuchar por periféricos Bluetooth® de baja energía para conectar:
  BLEDevice central = BLE.central();

  // si un central está conectado al periférico:
  if (central) {
    Serial.print("Conectado al central: ");
    // imprimir la dirección MAC del central:
    Serial.println(central.address());

    // mientras el central siga conectado al periférico:
    while (central.connected()) {
      // si el dispositivo remoto escribió en la característica,
      // usar el valor para controlar el LED:
      if (switchCharacteristic.written()) {
        if (switchCharacteristic.value()) {   // cualquier valor diferente de 0
          Serial.println("LED encendido");
          digitalWrite(ledPin, HIGH);         // encenderá el LED
        } else {                              // valor 0
          Serial.println(F("LED apagado"));
          digitalWrite(ledPin, LOW);          // apagará el LED
        }
      }
    }

    // cuando el central se desconecte, imprimirlo:
    Serial.print(F("Desconectado del central: "));
    Serial.println(central.address());
  }
}
```

El propósito principal de este programa es hacer que el XIAO sea un dispositivo Bluetooth llamado "XIAO", que pueda ser buscado y conectado por otros dispositivos Bluetooth. Una vez conectado, puedes controlar los LEDs en el XIAO enviando un 0 o un 1 para apagarlos o encenderlos respectivamente.

Coloca la Seeed Studio XIAO nRF52840 en la placa de expansión.
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/XIAO-to-board.png" /></div>

Y para este propósito, el XIAO con la placa de expansión conectada sube el siguiente procedimiento.

```cpp
#include <ArduinoBLE.h>
#include <U8x8lib.h>
#include <Wire.h>

// variables para el botón
const int buttonPin = D1;
int oldButtonState = LOW;

void setup() {
  Serial.begin(9600);
  while (!Serial);

  // configurar el pin del botón como entrada con resistencia pull-up
  pinMode(buttonPin, INPUT_PULLUP);

  // inicializar el hardware Bluetooth® de baja energía
  BLE.begin();

  Serial.println("Central Bluetooth® de baja energía - Control de LED");

  // comenzar a escanear para periféricos
  BLE.scanForName("XIAO");
}

void loop() {
  // verificar si se ha descubierto un periférico
  BLEDevice peripheral = BLE.available();
  if (peripheral) {
    // se ha descubierto un periférico, imprimir dirección, nombre local y servicio publicitado
    Serial.print("Encontrado ");
    Serial.print(peripheral.address());
    Serial.print(" '");
    Serial.print(peripheral.localName());
    Serial.print("' ");
    Serial.print(peripheral.advertisedServiceUuid());
    Serial.println();

    if (peripheral.localName() != "XIAO") {
      return;
    }

    // detener el escaneo
    BLE.stopScan();

    system_control(peripheral);

    // el periférico se desconectó, comenzar a escanear nuevamente
    BLE.scanForName("XIAO");
  }
  delay(100);
}

void system_control(BLEDevice peripheral) {
  // conectar al periférico
  Serial.println("Conectando ...");

  if (peripheral.connect()) {
    Serial.println("Conectado");
  } else {
    Serial.println("¡Falló la conexión!");
    return;
  }

  // descubrir los atributos del periférico
  Serial.println("Descubriendo atributos ...");
  if (peripheral.discoverAttributes()) {
    Serial.println("Atributos descubiertos");
  } else {
    Serial.println("¡Falló el descubrimiento de atributos!");
    peripheral.disconnect();
    return;
  }

  // obtener la característica del LED
  BLECharacteristic ledCharacteristic = peripheral.characteristic("19b10001-e8f2-537e-4f6c-d104768a1214");

  if (!ledCharacteristic) {
    Serial.println("¡El periférico no tiene la característica LED!");
    peripheral.disconnect();
    return;
  } else if (!ledCharacteristic.canWrite()) {
    Serial.println("¡El periférico no tiene la característica LED escribible!");
    peripheral.disconnect();
    return;
  }

  while (peripheral.connected()) {
    // mientras el periférico esté conectado
    // leer el pin del botón
    int buttonState = digitalRead(buttonPin);

    if (oldButtonState != buttonState) {
      // el botón cambió
      oldButtonState = buttonState;

      if (buttonState) {
        Serial.println("botón presionado");

        // el botón está presionado, escribir 0x01 para encender el LED
        ledCharacteristic.writeValue((byte)0x01);
      } else {
        Serial.println("botón liberado");

        // el botón está liberado, escribir 0x00 para apagar el LED
        ledCharacteristic.writeValue((byte)0x00);
      }
    }
  }

  Serial.println("Periférico desconectado");
}
```

Una vez que hayas subido el programa, enciende el monitor serial y el programa comenzará a buscar un dispositivo Bluetooth cercano con el nombre local "XIAO" y se conectará a él (tendrás que esperar entre 1 y 3 minutos).

Una vez que aparezca el mensaje de conexión exitosa en el monitor serial, podrás controlar el encendido y apagado del otro LED de la XIAO nRF52840 a través de la tecla D1 de la placa de expansión.

Por supuesto, si no tienes una placa de expansión, también puedes usar tus propios botones u otros dispositivos.

## ¿Qué más?

Si deseas probar más ejemplos, puedes navegar a `Archivo > Ejemplos > INCOMPATIBLE > ArduinoBLE` y revisar todos los ejemplos en **ArduinoBLE**.

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
