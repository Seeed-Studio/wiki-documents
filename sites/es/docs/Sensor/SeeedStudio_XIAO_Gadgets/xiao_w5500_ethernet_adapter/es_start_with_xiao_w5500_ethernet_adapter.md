---
description: Primeros pasos con el Adaptador Ethernet XIAO W5500
title: Primeros pasos con el Adaptador Ethernet XIAO W5500
keywords:
  - ethernet
  - w5500
image: https://files.seeedstudio.com/wiki/xiao_w5500_poe/0.webp
sidebar_position: 9
slug: /xiao_w5500_ethernet_adapter
sku: 113100042
last_update:
  date: 10/13/2026
  author: Citric
createdAt: '2025-06-10'
updatedAt: '2026-08-03'
url: https://wiki.seeedstudio.com/es/xiao_w5500_ethernet_adapter/
---

## Introducción

Una compacta placa de desarrollo PoE que incorpora el XIAO ESP32S3 Plus, con un módulo PoE integrado y aislado y una conversión de potencia basada en TPS563201 que proporciona una alimentación limpia de 5V para alimentar el microcontrolador. Ideal para proyectos de IoT, dispositivos de hogar inteligente y automatización industrial, donde una combinación versátil de conectividad Ethernet fiable y procesamiento inalámbrico de bajo consumo simplifica la instalación y mejora el rendimiento del sistema.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/0.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-W5500-Ethernet-Adapter-p-6472.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
</a></div>

### Características

- **Microcontrolador de alto rendimiento**: Basada en la plataforma XIAO ESP32S3 Plus, nuestra placa ofrece una potente capacidad de procesamiento y conectividad inalámbrica eficiente, lo que la hace ideal para aplicaciones IoT y embebidas complejas.

- **PoE integrado con aislamiento y conversión de potencia**: Con un robusto módulo PoE con aislamiento integrado, la placa acepta de forma segura una entrada de alimentación Ethernet de 12V. Un convertidor reductor de alta eficiencia TPS563201 reduce después los 12V a un carril estable de 5V, proporcionando una alimentación óptima al XIAO ESP32S3 Plus.

- **Conectividad Ethernet fiable**: Equipada con un chip Ethernet W5500 integrado y un conector RJ45 estándar, la placa garantiza un acceso de red por cable estable para una transmisión de datos fluida y gestión remota.

- **Opciones de E/S versátiles**: Con salidas de E/S a doble cara, puedes ampliar fácilmente la funcionalidad e interconectar una variedad de sensores y periféricos para personalizar tu aplicación según especificaciones exactas.

- **Diseño compacto y listo para desplegar**: Al combinar PoE integrado, circuitería de aislamiento y conectividad Ethernet en un factor de forma reducido, esta placa simplifica la creación de prototipos y permite un despliegue eficiente en proyectos de hogar inteligente, automatización industrial o dispositivos de red.

### Especificaciones

<div class="table-center">
 <table align="center">
  <tr>
   <th>Parámetro</th>
   <th>Descripción</th>
  </tr>
  <tr>
   <td>MCU</td>
   <td>XIAO ESP32-S3 Plus</td>
  </tr>
  <tr>
   <td>Antena</td>
   <td>Antena de varilla de 2,4GHz (2,81dBi)</td>
  </tr>
  <tr>
   <td>USB Type-C</td>
   <td>Tensión de entrada (Type-C): 5V</td>
  </tr>
  <tr>
   <td>Chip PoE</td>
   <td>MQ7813T120</td>
  </tr>
  <tr>
   <td>Fuente de alimentación PoE</td>
   <td>PoE IEEE802.3af<br />Corriente de salida: 12V/1,1A<br />Alta eficiencia 86% (Entrada 48V, Carga 12V@1,1A)</td>
  </tr>
  <tr>
   <td>Chip Ethernet</td>
   <td>WIZnet W5500</td>
  </tr>
  <tr>
   <td>Interfaz Ethernet</td>
   <td>RJ45<br />Ethernet de 10 o 100Mbps</td>
  </tr>
  <tr>
   <td>Protocolos TCP/IP</td>
   <td>TCP, UDP, ICMP, IPv4, ARP, IGMP, PPPoE</td>
  </tr>
  <tr>
   <td>Indicador LED</td>
   <td>Alimentación x 1<br />Usuario x 1</td>
  </tr>
  <tr>
   <td>Botón</td>
   <td>Reset</td>
  </tr>
  <tr>
   <td>Interfaz de E/S</td>
   <td></td>
  </tr>
  <tr>
   <td>Tamaño del producto</td>
   <td>83 x 118 x 26 mm</td>
  </tr>
  <tr>
   <td>Peso del producto</td>
   <td>75g</td>
  </tr>
  <tr>
   <td>Carcasa</td>
   <td>Impresión 3D en blanco</td>
  </tr>
 </table>
</div>

## Descripción general del hardware

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Product Appearance" label="Apariencia del producto">

Las siguientes imágenes muestran el diseño externo del Adaptador Ethernet XIAO W5500. Puedes ver el factor de forma compacto, el puerto Ethernet y la interfaz para conectar a la serie de microcontroladores XIAO. Este diseño permite una integración sencilla en diversos proyectos donde el espacio y la fiabilidad son importantes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/2.jpg" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/3.jpg" style={{width:800, height:'auto'}}/></div>

</TabItem>

<TabItem value="Inside the Product" label="Interior del producto">

La siguiente imagen ofrece una vista del interior del Adaptador Ethernet XIAO W5500. Aquí puedes observar el diseño interno de la PCB, el chip controlador Ethernet W5500 y la circuitería de soporte que permite una comunicación Ethernet estable y la funcionalidad opcional de Power over Ethernet (PoE).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/1.jpg" style={{width:800, height:'auto'}}/></div>

</TabItem>
</Tabs>

## Primeros pasos

### Instrucciones de cableado

Hay dos formas recomendadas de conectar tu Adaptador Ethernet XIAO W5500 a tu red:

1. **Usar un switch o router con PoE:**
   - Conecta el dispositivo directamente a un switch o router compatible con PoE utilizando un cable Ethernet RJ45 estándar. Esta configuración permite que tanto los datos como la alimentación se suministren a través del mismo cable, por lo que no necesitas proporcionar alimentación separada a la placa XIAO.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/4.jpg" style={{width:600, height:'auto'}}/></div>

2. **Usar un cable Ethernet estándar:**
   - Si utilizas un cable Ethernet normal (sin PoE), conecta un extremo a tu red y el otro al Adaptador Ethernet XIAO W5500. En este caso, también debes alimentar la placa XIAO a través de su puerto USB-C con una fuente estable de 5V, ya que el cable Ethernet solo proporcionará conectividad de datos.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/6.jpg" style={{width:600, height:'auto'}}/></div>

> **Consejo:** Asegúrate de que tu cable Ethernet sea lo suficientemente largo para tu configuración y esté en buen estado para garantizar una comunicación fiable.

### Botón de reinicio

El Adaptador Ethernet XIAO W5500 está equipado con un botón de Reset. Si el programa de tu dispositivo no se ejecuta como se espera o necesitas reiniciar el sistema, simplemente pulsa una vez el botón Reset. Esto reiniciará el dispositivo y volverá a inicializar el programa, ayudando a recuperarse de estados o errores inesperados.

## Biblioteca Ethernet de ESP32 para Arduino

El Adaptador Ethernet XIAO W5500 utiliza la biblioteca Ethernet de ESP32 para Arduino para la conectividad de red. Esta biblioteca proporciona un conjunto de APIs y ejemplos para gestionar conexiones Ethernet, manejar eventos y crear aplicaciones en red en placas basadas en ESP32.

Para más detalles, uso avanzado y las últimas actualizaciones, consulta la documentación oficial de Espressif: [Documentación de la biblioteca Ethernet de ESP32 para Arduino](https://docs.espressif.com/projects/arduino-esp32/en/latest/api/ethernet.html)

## Ejemplo con XIAO

Ahora que has instalado las bibliotecas necesarias y entiendes las funciones básicas, exploremos algunos ejemplos prácticos para el Adaptador Ethernet XIAO W5500. Estas demostraciones te ayudarán a comenzar y mostrarán cómo adaptar el código a tus propios proyectos.

**Paso 1.** Inicia la aplicación Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
</div><br />

**Paso 2.** Selecciona el modelo de tu placa de desarrollo y añádelo al Arduino IDE.

- Para usar **Seeed Studio XIAO ESP32-S3 Plus** en las rutinas posteriores, consulta **[este tutorial](https://wiki.seeedstudio.com/es/xiao_esp32s3_getting_started#software-preparation)** para completar la adición.

**Paso 3.** Materiales necesarios

Para completar los siguientes ejemplos, necesitarás el hardware que se indica a continuación. Además del Adaptador Ethernet XIAO W5500, asegúrate de disponer de un cable Ethernet de longitud suficiente para tu configuración. Puedes utilizar un cable con capacidad de Power over Ethernet (PoE) o un cable Ethernet estándar. Si utilizas un cable Ethernet estándar (sin PoE), asegúrate de que tu placa XIAO esté alimentada por separado con una fuente estable de 5V.

<div class="table-center">
 <table align="center">
  <tr>
   <th>Adaptador Ethernet XIAO W5500</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/5.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/es/xiao_w5500_ethernet_adapter" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### Demo 1: Registrador de eventos Ethernet

**Propósito:**
Esta demostración registra eventos de Ethernet en la consola serie, incluida la dirección MAC y la dirección IP actual (asignada por DHCP). Muestra cómo inicializar la interfaz Ethernet W5500 y supervisar su estado.

**Caso de uso típico:**
Úsalo como punto de partida para verificar tu configuración de hardware y la conectividad de red. Es útil para depuración y para proyectos en los que necesitas supervisar el estado de Ethernet o registrar eventos de red.

```cpp
#include <SPI.h>
#include <ETH.h>
#include <WiFi.h>

static bool eth_connected = false;

#ifndef ETH_PHY_CS
#define ETH_PHY_TYPE ETH_PHY_W5500
#define ETH_PHY_ADDR 1
#define ETH_PHY_CS   D1
#define ETH_PHY_IRQ  -1
#define ETH_PHY_RST  -1
#endif

// SPI pins
#define ETH_SPI_SCK  D8
#define ETH_SPI_MISO D9
#define ETH_SPI_MOSI D10


// React to Ethernet events:
void onEvent(arduino_event_id_t event, arduino_event_info_t info)
{
  switch (event) {

    case ARDUINO_EVENT_ETH_START:
      // This will happen during setup, when the Ethernet service starts
      Serial.println("ETH Started");
      //set eth hostname here
      ETH.setHostname("esp32-ethernet");
      break;

    case ARDUINO_EVENT_ETH_CONNECTED:
      // This will happen when the Ethernet cable is plugged 
      Serial.println("ETH Connected");
      break;

    case ARDUINO_EVENT_ETH_GOT_IP:
    // This will happen when we obtain an IP address through DHCP:
      Serial.print("Got an IP Address for ETH MAC: ");
      Serial.print(ETH.macAddress());
      Serial.print(", IPv4: ");
      Serial.print(ETH.localIP());
      if (ETH.fullDuplex()) {
        Serial.print(", FULL_DUPLEX");
      }
      Serial.print(", ");
      Serial.print(ETH.linkSpeed());
      Serial.println("Mbps");
      eth_connected = true;

      // Uncomment to automatically make a test connection to a server:
      // testClient( "192.168.0.1", 80 );

      break;

    case ARDUINO_EVENT_ETH_DISCONNECTED:
      // This will happen when the Ethernet cable is unplugged 
      Serial.println("ETH Disconnected");
      eth_connected = false;
      break;

    case ARDUINO_EVENT_ETH_STOP:
      // This will happen when the ETH interface is stopped but this never happens
      Serial.println("ETH Stopped");
      eth_connected = false;
      break;

    default:
      break;
  }
}

// Try to read something from a webserver:
void testClient(const char * host, uint16_t port)
{
  Serial.print("\nConnecting to ");
  Serial.print(host);
  Serial.print(":");
  Serial.println(port);

  NetworkClient client;
  if (!client.connect(host, port)) {
    Serial.println("connection failed");
    return;
  }
  client.printf("GET / HTTP/1.1\r\nHost: %s\r\n\r\n", host);
  while (client.connected() && !client.available());
  while (client.available()) {
    Serial.write(client.read());
  }

  Serial.println("closing connection\n");
  client.stop();
}

// Initializing everything at start up / after reset:
void setup()
{
  // Wait for the hardware to initialize:
  delay(500);

  // This sketch will log some information to the serial console:
  Serial.begin(115200); // Assuming computer will be connected to serial port at 115200 bauds
  Serial.println("Setup...");

  Serial.println("Registering event handler for ETH events...");
  Network.onEvent(onEvent);

  // Starth Ethernet (this does NOT start WiFi at the same time)
  Serial.println("Starting ETH interface...");
  SPI.begin(ETH_SPI_SCK, ETH_SPI_MISO, ETH_SPI_MOSI);
  ETH.begin(ETH_PHY_TYPE, ETH_PHY_ADDR, ETH_PHY_CS, ETH_PHY_IRQ, ETH_PHY_RST, SPI);

  Serial.println("Waiting for Ethernet connection");
  while (!eth_connected) {
    delay(500);
    Serial.print(".");
  }
}

void loop()
{
  if (eth_connected) {
    testClient("baidu.com", 80);
  }
  delay(20000);
}
```

Abre el Monitor Serie a 115200 baudios para ver los eventos de Ethernet y la información de IP. El código intentará conectarse a "baidu.com" cada 20 segundos como prueba de conectividad.

**Personalización:**

- Cambia el servidor de prueba en `testClient("baidu.com", 80);` por tu propio servidor o dispositivo de red local.
- Usa el manejador de eventos para activar acciones personalizadas en eventos de red.

### Demo 2: Servidor Web Ethernet Sencillo

**Propósito:**
Esta demo configura un servidor web HTTP básico en el XIAO ESP32-S3 usando el Adaptador Ethernet W5500. Responde a las solicitudes en la URL raíz y proporciona un manejador 404 sencillo para rutas desconocidas.

**Caso de uso típico:**
Ideal para proyectos de IoT donde quieras servir páginas web o APIs REST directamente desde tu dispositivo a través de una conexión Ethernet por cable.

```cpp
#include <ETH.h>
#include <WebServer.h>
#include <ESPmDNS.h>


#ifndef ETH_PHY_CS
#define ETH_PHY_TYPE ETH_PHY_W5500
#define ETH_PHY_ADDR 1
#define ETH_PHY_CS   D1
#define ETH_PHY_IRQ  -1
#define ETH_PHY_RST  -1
#endif

// SPI pins
#define ETH_SPI_SCK  D8
#define ETH_SPI_MISO D9
#define ETH_SPI_MOSI D10

static bool eth_connected = false;
WebServer server(80);

// ESP32-POE doesn't have an onboard LED so if you want to use a LED you have to attach one to the extended pins on either UEXT or one of the 10 pin extentions.
// in this example the default value is 13 which is UEXT pin 6, or Extention 2 pin 1. If you want to attach the LED to another pin you need to change this value accordingly.
const int led_pin = D0;

// Web Server: handle a request to / (root of the server)
void handleRoot() {
  digitalWrite(led_pin, 1);
  server.send(200, "text/plain", "hello from esp32!");
  delay(100);    // Wait x ms so we have time to see the Led blinking
  digitalWrite(led_pin, 0);
}

// Web Server: handle a request to an unknown URI (unknown "File")
void handleNotFound() {
  digitalWrite(led_pin, 1);
  String message = "File Not Found\n\n";
  message += "URI: ";
  message += server.uri();
  message += "\nMethod: ";
  message += (server.method() == HTTP_GET) ? "GET" : "POST";
  message += "\nArguments: ";
  message += server.args();
  message += "\n";
  for (uint8_t i = 0; i < server.args(); i++) {
    message += " " + server.argName(i) + ": " + server.arg(i) + "\n";
  }
  server.send(404, "text/plain", message);
  // digitalWrite(led_pin, 0);  // If this is commented out, the LED will stay on in case of 404 error
}

// Handle Ethernet Events:
void onEvent(arduino_event_id_t event, arduino_event_info_t info)
{
  switch (event) {

    case ARDUINO_EVENT_ETH_START:
      // This will happen during setup, when the Ethernet service starts
      Serial.println("ETH Started");
      //set eth hostname here
      ETH.setHostname("esp32-ethernet");
      break;

    case ARDUINO_EVENT_ETH_CONNECTED:
      // This will happen when the Ethernet cable is plugged 
      Serial.println("ETH Connected");
      break;

    case ARDUINO_EVENT_ETH_GOT_IP:
    // This will happen when we obtain an IP address through DHCP:
      Serial.print("Got an IP Address for ETH MAC: ");
      Serial.print(ETH.macAddress());
      Serial.print(", IPv4: ");
      Serial.print(ETH.localIP());
      if (ETH.fullDuplex()) {
        Serial.print(", FULL_DUPLEX");
      }
      Serial.print(", ");
      Serial.print(ETH.linkSpeed());
      Serial.println("Mbps");
      eth_connected = true;

      // Uncomment to automatically make a test connection to a server:
      // testClient( "192.168.0.1", 80 );

      break;

    case ARDUINO_EVENT_ETH_DISCONNECTED:
      // This will happen when the Ethernet cable is unplugged 
      Serial.println("ETH Disconnected");
      eth_connected = false;
      break;

    case ARDUINO_EVENT_ETH_STOP:
      // This will happen when the ETH interface is stopped but this never happens
      Serial.println("ETH Stopped");
      eth_connected = false;
      break;

    default:
      break;
  }
}

// Try to read something from a webserver:
void testClient(const char * host, uint16_t port)
{
  Serial.print("\nConnecting to ");
  Serial.print(host);
  Serial.print(":");
  Serial.println(port);

  NetworkClient client;
  if (!client.connect(host, port)) {
    Serial.println("connection failed");
    return;
  }
  client.printf("GET / HTTP/1.1\r\nHost: %s\r\n\r\n", host);
  while (client.connected() && !client.available());
  while (client.available()) {
    Serial.write(client.read());
  }

  Serial.println("closing connection\n");
  client.stop();
}

// Initializing everything at start up / after reset:
void setup()
{
  // Wait for the hardware to initialize:
  delay(500);

  // This sketch will log some information to the serial console:


  Serial.begin(115200); // Assuming computer will be connected to serial port at 115200 bauds
  Serial.print("Setup...");


  Serial.print("Registering event handler for ETH events...");
  Network.onEvent(onEvent);

  // Starth Ethernet (this does NOT start WiFi at the same time)
  Serial.print("Starting ETH interface...");
  SPI.begin(ETH_SPI_SCK, ETH_SPI_MISO, ETH_SPI_MOSI, ETH_PHY_CS);
  ETH.begin(ETH_PHY_TYPE, ETH_PHY_ADDR, ETH_PHY_CS, ETH_PHY_IRQ, ETH_PHY_RST, SPI);


  // multicast DNS (mDNS) allows to resolve hostnames to IP addresses without a DNS server
  if (MDNS.begin("esp32")) {  // using mDNS name "esp32"
    Serial.println("MDNS responder started");
  }

  // Web Server handlers: 
  // Handle a request to / (root of the server)
  server.on("/", handleRoot);
  // Minimalistic handling of another URI (LED will not flash on this one):
  server.on("/inline", []() {
    server.send(200, "text/plain", "this works as well");
  });
  // Handle all other URIs:
  server.onNotFound(handleNotFound);

  server.begin();
  Serial.println("HTTP server started");

  pinMode( led_pin, OUTPUT);  // Initialize the LED pin as a digital output (on/off)
}

void loop ()
{
  server.handleClient();
  delay(2);//allow the cpu to switch to other tasks
}
```

Una vez que el dispositivo obtenga una dirección IP (mostrada en el Monitor Serie), abre un navegador y navega a `http://<your_device_ip>/`. El endpoint raíz responderá con "hello from esp32!" y hará parpadear un LED. Prueba a acceder a `/inline` o cualquier otra ruta para ver diferentes respuestas.

**Personalización:**

- Añade más endpoints usando `server.on("/yourpath", handlerFunction);`.
- Integra lecturas de sensores o controles del dispositivo en las respuestas de tu servidor web.

### Demo 3: Servidor de Streaming de Cámara por Ethernet

> **Recordatorio:**
> Esta demo requiere el módulo de cámara de la placa [XIAO ESP32-S3 Sense](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32S3-Sense-Pre-Soldered-p-6335.html). El propio Adaptador Ethernet XIAO W5500 no incluye una cámara, y el zócalo de la cámara no se vende actualmente por separado. Si has comprado previamente la placa XIAO ESP32-S3 Sense, puedes usar su cámara con esta demo. Para una instalación ordenada, consulta la sección [Resources](#resources) para obtener una carcasa imprimible en 3D con un orificio para cámara que sea compatible con esta configuración.

**Propósito:**
Esta demo avanzada combina el módulo de cámara XIAO ESP32-S3 con el Adaptador Ethernet W5500 para transmitir imágenes de la cámara a través de Ethernet. Demuestra cómo inicializar la cámara, configurar la interfaz Ethernet y arrancar un servidor web para streaming de vídeo.

**Caso de uso típico:**
Perfecto para vigilancia, monitorización remota o cualquier proyecto que requiera transmisión de imágenes en tiempo real a través de una conexión por cable fiable.

:::tip
El siguiente programa es solo para archivos .ino, se necesitan algunos archivos de cabecera para compilar este programa. Puedes obtener el código fuente completo del proyecto en el siguiente enlace.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/XIAO_W5500_Ehernet_Adapter_Example/tree/main/XIAO_PoE_CameraWebServer" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Download the Code</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />
:::

```cpp
#include "esp_camera.h"
#include <ETH.h>
#include <WiFi.h>  // For event handling

// Define the camera model being used
#define CAMERA_MODEL_XIAO_ESP32S3  // Has PSRAM

// Include camera pin definitions
#include "camera_pins.h"

#define USE_TWO_ETH_PORTS 0

// Ethernet PHY and SPI pin definitions (adjust according to your hardware)
#ifndef ETH_PHY_CS
#define ETH_PHY_TYPE ETH_PHY_W5500
#define ETH_PHY_ADDR 1
#define ETH_PHY_CS D1
#define ETH_PHY_IRQ -1
#define ETH_PHY_RST -1
#endif

#define ETH_SPI_SCK D8
#define ETH_SPI_MISO D9
#define ETH_SPI_MOSI D10

// Global variable to track Ethernet connection status
static bool eth_connected = false;

// Function declarations
void startCameraServer();
void setupLedFlash(int pin);
void onEvent(arduino_event_id_t event, arduino_event_info_t info);

void setup() {
  Serial.begin(115200);
  delay(2000);
  // Register Ethernet event handler
  Network.onEvent(onEvent);

  // Initialize SPI and Ethernet
  SPI.begin(ETH_SPI_SCK, ETH_SPI_MISO, ETH_SPI_MOSI, ETH_PHY_CS);
  ETH.begin(ETH_PHY_TYPE, ETH_PHY_ADDR, ETH_PHY_CS, ETH_PHY_IRQ, ETH_PHY_RST, SPI);

  // Wait for Ethernet connection
  Serial.print("Waiting for Ethernet connection");
  while (!eth_connected) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("Ethernet connected");

  Serial.setDebugOutput(true);
  Serial.println();

  // Camera configuration structure
  camera_config_t config;
  config.ledc_channel = LEDC_CHANNEL_0;
  config.ledc_timer = LEDC_TIMER_0;
  config.pin_d0 = Y2_GPIO_NUM;
  config.pin_d1 = Y3_GPIO_NUM;
  config.pin_d2 = Y4_GPIO_NUM;
  config.pin_d3 = Y5_GPIO_NUM;
  config.pin_d4 = Y6_GPIO_NUM;
  config.pin_d5 = Y7_GPIO_NUM;
  config.pin_d6 = Y8_GPIO_NUM;
  config.pin_d7 = Y9_GPIO_NUM;
  config.pin_xclk = XCLK_GPIO_NUM;
  config.pin_pclk = PCLK_GPIO_NUM;
  config.pin_vsync = VSYNC_GPIO_NUM;
  config.pin_href = HREF_GPIO_NUM;
  config.pin_sccb_sda = SIOD_GPIO_NUM;
  config.pin_sccb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn = PWDN_GPIO_NUM;
  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 20000000;
  config.frame_size = FRAMESIZE_UXGA;
  config.pixel_format = PIXFORMAT_JPEG;  // Use JPEG for streaming
  config.grab_mode = CAMERA_GRAB_WHEN_EMPTY;
  config.fb_location = CAMERA_FB_IN_PSRAM;
  config.jpeg_quality = 12;
  config.fb_count = 1;

  // Adjust configuration based on PSRAM availability
  if (config.pixel_format == PIXFORMAT_JPEG) {
    if (psramFound()) {
      config.jpeg_quality = 10;
      config.fb_count = 2;
      config.grab_mode = CAMERA_GRAB_LATEST;
    } else {
      config.frame_size = FRAMESIZE_SVGA;
      config.fb_location = CAMERA_FB_IN_DRAM;
    }
  } else {
    config.frame_size = FRAMESIZE_240X240;
#if CONFIG_IDF_TARGET_ESP32S3
    config.fb_count = 2;
#endif
  }

#if defined(CAMERA_MODEL_ESP_EYE)
  // Special pin setup for ESP-EYE
  pinMode(13, INPUT_PULLUP);
  pinMode(14, INPUT_PULLUP);
#endif

  // Initialize the camera
  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("Camera init failed with error 0x%x", err);
    return;
  }

  // Adjust sensor settings for specific camera modules
  sensor_t *s = esp_camera_sensor_get();
  if (s->id.PID == OV3660_PID) {
    s->set_vflip(s, 1);        // Vertical flip
    s->set_brightness(s, 1);   // Increase brightness
    s->set_saturation(s, -2);  // Decrease saturation
  }
  if (config.pixel_format == PIXFORMAT_JPEG) {
    s->set_framesize(s, FRAMESIZE_QVGA);  // Lower initial frame size
  }

#if defined(CAMERA_MODEL_M5STACK_WIDE) || defined(CAMERA_MODEL_M5STACK_ESP32CAM)
  s->set_vflip(s, 1);
  s->set_hmirror(s, 1);
#endif

#if defined(CAMERA_MODEL_ESP32S3_EYE)
  s->set_vflip(s, 1);
#endif

  // Setup LED flash if the pin is defined
#if defined(LED_GPIO_NUM)
  setupLedFlash(LED_GPIO_NUM);
#endif

  // Start the camera web server
  startCameraServer();

  // Print the access URL to the serial monitor
  Serial.print("Camera Ready! Use 'http://");
  Serial.print(ETH.localIP());
  Serial.println("' to connect");
}

void loop() {
  // No additional processing needed; camera server runs in another task
  delay(10000);
}

// Ethernet event handler
void onEvent(arduino_event_id_t event, arduino_event_info_t info) {
  switch (event) {
    case ARDUINO_EVENT_ETH_START:
      Serial.println("ETH Started");
      // Set Ethernet hostname here
      ETH.setHostname("esp32-eth0");
      break;
    case ARDUINO_EVENT_ETH_CONNECTED:
      Serial.println("ETH Connected");
      break;
    case ARDUINO_EVENT_ETH_GOT_IP:
      Serial.printf("ETH Got IP: '%s'\n", esp_netif_get_desc(info.got_ip.esp_netif));
      Serial.println(ETH);
      eth_connected = true;
      break;
    case ARDUINO_EVENT_ETH_LOST_IP:
      Serial.println("ETH Lost IP");
      eth_connected = false;
      break;
    case ARDUINO_EVENT_ETH_DISCONNECTED:
      Serial.println("ETH Disconnected");
      eth_connected = false;
      break;
    case ARDUINO_EVENT_ETH_STOP:
      Serial.println("ETH Stopped");
      eth_connected = false;
      break;
    default:
      break;
  }
}
```

Abre el Monitor Serie para encontrar la dirección IP del dispositivo después de que se conecte a la red. Introduce la dirección IP en tu navegador para acceder al flujo de la cámara.

**Personalización:**

- Ajusta la configuración de la cámara (resolución, calidad, tamaño de fotograma) en la estructura `camera_config_t`.
- Modifica el código del servidor web para añadir autenticación o endpoints adicionales.
- Adapta las definiciones de pines Ethernet para que coincidan con tu hardware personalizado.

## Preguntas frecuentes (FAQ)

### P1: ¿Por qué el Adaptador W5500 tiene una señal de red deficiente? ¿Hay alguna solución?

Es posible añadir un segmento de código para ajustar la potencia dentro de todos los códigos que usan WiFi y, ajustando la potencia de transmisión, la intensidad de la señal puede mejorar significativamente.

Por ejemplo, el siguiente fragmento de código se añade para ajustar la potencia de la función dentro de `Setup()`.

```cpp
    // 1. Set WiFi to Station mode
    WiFi.mode(WIFI_STA);

    // 2. Adjust WiFi transmit power (Key correction)
    int8_t power_dbm = 15;
    int8_t power_param = (int8_t)(power_dbm / 0.25);
    esp_err_t err = esp_wifi_set_max_tx_power(power_param);

    if (err == ESP_OK) {
        Serial.print("Successfully set WiFi TX Power to: ");
        Serial.print(power_dbm);
        Serial.println(" dBm");
    } else {
        Serial.println("Failed to set WiFi TX Power.");
    }

    // 3. Start connecting to WiFi
    WiFi.begin(ssid, password);

    Serial.print("Connecting to WiFi network: ");
    Serial.println(ssid);
```

Se ha verificado que establecer la potencia según el código anterior ofrece los mejores resultados.

## Recursos

- **[PDF]** [Hoja de datos W5500](https://files.seeedstudio.com/wiki/xiao_w5500_poe/res/W5500_ds_datasheet.pdf)
- **[PDF]** [XIAO W5500 Ethernet Adapter SCH V30](https://files.seeedstudio.com/wiki/xiao_w5500_poe/res/XIAO_POE_RJ45_V30_20260803.pdf)
- **[STEP]** [XIAO W5500 Ethernet Adapter 3D STEP](https://files.seeedstudio.com/wiki/xiao_w5500_poe/res/XIAO_POE_RJ45_V20.step)
- **[STEP]** [XIAO W5500 Ethernet Adapter Shell 3D STEP (No pre-drilled camera holes)](https://files.seeedstudio.com/wiki/xiao_w5500_poe/res/xiao_w5500_eth_adapter_shell.stp)
- **[STEP]** [XIAO W5500 Ethernet Adapter Covers 3D STEP](https://files.seeedstudio.com/wiki/xiao_w5500_poe/res/xiao_w5500_eth_adapter_covers.stp)
- **[KICAD]** [PCB del Adaptador Ethernet XIAO W5500](https://files.seeedstudio.com/wiki/xiao_w5500_poe/res/XIAO_POE_RJ45_V20.kicad_pcb)
- **[GITHUB]** [Repositorio del Adaptador Ethernet XIAO W5500](https://github.com/Seeed-Projects/XIAO_W5500_Ehernet_Adapter_Example)

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
