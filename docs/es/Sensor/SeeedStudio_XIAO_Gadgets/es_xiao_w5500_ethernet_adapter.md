---
description: Introducción al Adaptador Ethernet XIAO W5500
title: Introducción al Adaptador Ethernet XIAO W5500
keywords:
  - ethernet
  - w5500
image: https://files.seeedstudio.com/wiki/xiao_w5500_poe/0.webp
sidebar_position: 9
slug: /es/xiao_w5500_ethernet_adapter
last_update:
  date: 06/04/2025
  author: Citric
---

## Introducción

Una placa de desarrollo PoE compacta que incluye el XIAO ESP32S3 Plus, con un módulo PoE integrado y aislado y conversión de energía basada en TPS563201 que proporciona una alimentación limpia de 5V para alimentar el microcontrolador. Ideal para proyectos IoT, dispositivos domóticos inteligentes y automatización industrial, donde una combinación versátil de conectividad Ethernet confiable y procesamiento inalámbrico de bajo consumo simplifica la instalación y mejora el rendimiento del sistema.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/0.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-W5500-Ethernet-Adapter-p-6472.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
</a></div>

### Características

- **Microcontrolador de Alto Rendimiento**: Construido sobre la plataforma XIAO ESP32S3 Plus, nuestra placa ofrece potencia de procesamiento robusta y conectividad inalámbrica eficiente, haciéndola ideal para aplicaciones IoT y embebidas complejas.

- **PoE Integrado con Aislamiento y Conversión de Energía**: Con un módulo PoE robusto con aislamiento incorporado, la placa acepta de forma segura una entrada de energía Ethernet de 12V. Un convertidor buck TPS563201 de alta eficiencia luego reduce los 12V a un riel estable de 5V, proporcionando energía óptima al XIAO ESP32S3 Plus.

- **Conectividad Ethernet Confiable**: Equipada con un chip Ethernet W5500 integrado y un conector RJ45 estándar, la placa asegura acceso estable a la red cableada para transmisión de datos sin interrupciones y gestión remota.

- **Opciones de E/S Versátiles**: Con salidas de E/S de doble cara, puedes expandir fácilmente la funcionalidad e interfaz con una gama de sensores y periféricos para personalizar tu aplicación según especificaciones exactas.

- **Diseño Compacto y Listo para Implementar**: Combinando PoE integrado, circuitos de aislamiento y conectividad Ethernet en un factor de forma pequeño, esta placa simplifica la creación de prototipos y permite un despliegue eficiente en proyectos de hogar inteligente, automatización industrial o dispositivos de red.

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
   <td>Antena de Varilla 2.4GHz (2.81dBi)</td>
  </tr>
  <tr>
   <td>USB Type-C</td>
   <td>Voltaje de entrada (Type-C): 5V</td>
  </tr>
  <tr>
   <td>Chip PoE</td>
   <td>MQ7813T120</td>
  </tr>
  <tr>
   <td>Fuente de Alimentación PoE</td>
   <td>PoE IEEE802.3af<br />Corriente de Salida: 12V/1.1A<br />Alta Eficiencia 86% (Entrada 48V, Carga 12V@1.1A)</td>
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
   <td>Interfaz E/S</td>
   <td></td>
  </tr>
  <tr>
   <td>Tamaño del Producto</td>
   <td>83 x 118 x 26 mm</td>
  </tr>
  <tr>
   <td>Peso del Producto</td>
   <td>75g</td>
  </tr>
  <tr>
   <td>Carcasa</td>
   <td>Impresión 3D en Blanco</td>
  </tr>
 </table>
</div>

## Descripción General del Hardware

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Product Appearance" label="Apariencia del Producto">

Las imágenes a continuación muestran el diseño externo del Adaptador Ethernet XIAO W5500. Puedes ver el factor de forma compacto, el puerto Ethernet y la interfaz para conectar al microcontrolador de la serie XIAO. Este diseño permite una fácil integración en varios proyectos donde el espacio y la confiabilidad son importantes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/2.jpg" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/3.jpg" style={{width:800, height:'auto'}}/></div>

</TabItem>

<TabItem value="Inside the Product" label="Interior del Producto">

La siguiente imagen proporciona una vista del interior del Adaptador Ethernet XIAO W5500. Aquí puedes observar el diseño interno de la PCB, el chip controlador Ethernet W5500 y los circuitos de soporte que permiten la comunicación Ethernet estable y la funcionalidad opcional de Power over Ethernet (PoE).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/1.jpg" style={{width:800, height:'auto'}}/></div>

</TabItem>
</Tabs>

## Introducción

### Instrucciones de Cableado

Hay dos formas recomendadas de conectar tu Adaptador Ethernet XIAO W5500 a tu red:

1. **Usando un Switch o Router con PoE habilitado:**
   - Conecta el dispositivo directamente a un switch o router con capacidad PoE usando un cable Ethernet RJ45 estándar. Esta configuración permite que tanto los datos como la energía se entreguen por el mismo cable, por lo que no necesitas proporcionar energía separada a la placa XIAO.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/4.jpg" style={{width:600, height:'auto'}}/></div>

2. **Usando un Cable Ethernet Estándar:**
   - Si estás usando un cable Ethernet regular (sin PoE), conecta un extremo a tu red y el otro al Adaptador Ethernet XIAO W5500. En este caso, también debes alimentar la placa XIAO a través de su puerto USB-C con una fuente estable de 5V, ya que el cable Ethernet solo proporcionará conectividad de datos.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/6.jpg" style={{width:600, height:'auto'}}/></div>

> **Consejo:** Asegúrate de que tu cable Ethernet sea lo suficientemente largo para tu configuración y esté en buenas condiciones para garantizar una comunicación confiable.

### Botón de Reset

El Adaptador Ethernet XIAO W5500 está equipado con un botón de Reset. Si el programa de tu dispositivo no se está ejecutando como se esperaba o necesitas reiniciar el sistema, simplemente presiona el botón de Reset una vez. Esto reiniciará el dispositivo y reinicializará el programa, ayudando a recuperarse de estados inesperados o errores.

## Biblioteca Ethernet Arduino ESP32

El Adaptador Ethernet XIAO W5500 utiliza la biblioteca Ethernet Arduino ESP32 para la conectividad de red. Esta biblioteca proporciona un conjunto de APIs y ejemplos para gestionar conexiones Ethernet, manejar eventos y construir aplicaciones en red en placas basadas en ESP32.

Para más detalles, uso avanzado y las últimas actualizaciones, consulta la documentación oficial de Espressif: [Documentación de la Biblioteca Ethernet Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/api/ethernet.html)

## Ejemplo XIAO

Ahora que has instalado las bibliotecas requeridas y entiendes las funciones básicas, exploremos algunos ejemplos prácticos para el Adaptador Ethernet XIAO W5500. Estas demostraciones te ayudarán a comenzar y mostrarán cómo adaptar el código para tus propios proyectos.

**Paso 1.** Inicia la aplicación Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Descargar Arduino IDE</font></span></strong></a>
</div><br />

**Paso 2.** Selecciona tu modelo de placa de desarrollo y agrégalo al Arduino IDE.

- Para usar **Seeed Studio XIAO ESP32-S3 Plus** para las rutinas posteriores, consulta **[este tutorial](https://wiki.seeedstudio.com/es/xiao_esp32s3_getting_started#software-preparation)** para completar la adición.

**Paso 3.** Materiales Requeridos

Para completar los siguientes ejemplos, necesitarás el hardware listado a continuación. Además del Adaptador Ethernet XIAO W5500, asegúrate de tener un cable Ethernet de longitud suficiente para tu configuración. Puedes usar un cable con capacidad Power over Ethernet (PoE), o un cable Ethernet estándar. Si usas un cable Ethernet estándar (sin PoE), asegúrate de que tu placa XIAO esté alimentada por separado con una fuente estable de 5V.

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
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### Demo 1: Registrador de Eventos Ethernet

**Propósito:**
Esta demo registra eventos Ethernet en la consola serie, incluyendo la dirección MAC y la dirección IP actual (asignada por DHCP). Demuestra cómo inicializar la interfaz Ethernet W5500 y monitorear su estado.

**Caso de Uso Típico:**
Usa esto como punto de partida para verificar tu configuración de hardware y conectividad de red. Es útil para depuración y para proyectos donde necesitas monitorear el estado Ethernet o registrar eventos de red.

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

Abre el Monitor Serie a 115200 baudios para ver los eventos de Ethernet e información de IP. El código intentará conectarse a "baidu.com" cada 20 segundos como prueba de conectividad.

**Personalización:**

- Cambia el servidor de prueba en `testClient("baidu.com", 80);` por tu propio servidor o dispositivo de red local.
- Usa el manejador de eventos para activar acciones personalizadas en eventos de red.

### Demo 2: Servidor Web Ethernet Simple

**Propósito:**
Esta demo configura un servidor web HTTP básico en el XIAO ESP32-S3 usando el Adaptador Ethernet W5500. Responde a solicitudes en la URL raíz y proporciona un manejador 404 simple para rutas desconocidas.

**Caso de Uso Típico:**
Ideal para proyectos IoT donde quieres servir páginas web o APIs REST directamente desde tu dispositivo a través de una conexión Ethernet cableada.

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
const int led_pin = 21;

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

Una vez que el dispositivo obtenga una dirección IP (mostrada en el Monitor Serie), abre un navegador y navega a `http://<tu_ip_del_dispositivo>/`. El endpoint raíz responderá con "hello from esp32!" y hará parpadear un LED. Intenta acceder a `/inline` o cualquier otra ruta para ver diferentes respuestas.

**Personalización:**

- Agrega más endpoints usando `server.on("/yourpath", handlerFunction);`.
- Integra lecturas de sensores o controles de dispositivos en las respuestas de tu servidor web.

### Demo 3: Servidor de Streaming de Cámara Ethernet

> **Recordatorio:**
> Esta demo requiere el módulo de cámara de la placa [XIAO ESP32-S3 Sense](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32S3-Sense-Pre-Soldered-p-6335.html). El Adaptador Ethernet XIAO W5500 en sí mismo no incluye una cámara, y el socket de la cámara no se vende por separado actualmente. Si has comprado previamente la placa XIAO ESP32-S3 Sense, puedes usar su cámara con esta demo. Para una instalación ordenada, consulta la sección [Recursos](#recursos) para una carcasa imprimible en 3D con un agujero para cámara que es compatible con esta configuración.

**Propósito:**
Esta demo avanzada combina el módulo de cámara XIAO ESP32-S3 con el Adaptador Ethernet W5500 para transmitir imágenes de cámara a través de Ethernet. Demuestra cómo inicializar la cámara, configurar la interfaz Ethernet e iniciar un servidor web para streaming de video.

**Caso de Uso Típico:**
Perfecto para vigilancia, monitoreo remoto o cualquier proyecto que requiera streaming de imágenes en tiempo real a través de una conexión cableada confiable.

:::tip
El siguiente programa es solo para archivos .ino, se necesitan algunos archivos de cabecera para compilar este programa. Puedes obtener el código fuente completo del proyecto en el enlace de abajo.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/XIAO_W5500_Ehernet_Adapter_Example/tree/main/XIAO_PoE_CameraWebServer" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Descargar el Código</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
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

Abre el Monitor Serie para encontrar la dirección IP del dispositivo después de que se conecte a la red. Ingresa la dirección IP en tu navegador para acceder al stream de la cámara.

**Personalización:**

- Ajusta la configuración de la cámara (resolución, calidad, tamaño de frame) en la estructura `camera_config_t`.
- Modifica el código del servidor web para agregar autenticación o endpoints adicionales.
- Adapta las definiciones de pines Ethernet para que coincidan con tu hardware personalizado.

## FAQ

### P1: ¿Por qué el Adaptador W5500 tiene una señal de red deficiente? ¿Hay alguna solución?

Es posible agregar un segmento de código para ajustar la potencia dentro de todos los códigos que usan WiFi, y al ajustar la potencia de transmisión, la intensidad de la señal puede mejorarse significativamente.

Como el siguiente fragmento de código, se agrega para ajustar la potencia de la función dentro del `Setup()`.

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

Se ha verificado que configurar la potencia con el código anterior da los mejores resultados.

## Recursos

- **[PDF]** [Hoja de Datos W5500](https://files.seeedstudio.com/wiki/xiao_w5500_poe/res/W5500_ds_datasheet.pdf)
- **[PDF]** [Esquemático del Adaptador Ethernet XIAO W5500](https://files.seeedstudio.com/wiki/xiao_w5500_poe/res/XIAO_POE_RJ45_V20_SCH_20250422B.pdf)
- **[STEP]** [STEP 3D del Adaptador Ethernet XIAO W5500](https://files.seeedstudio.com/wiki/xiao_w5500_poe/res/XIAO_POE_RJ45_V20.step)
- **[STEP]** [STEP 3D de la Carcasa del Adaptador Ethernet XIAO W5500 (Sin agujeros preperforados para cámara)](https://files.seeedstudio.com/wiki/xiao_w5500_poe/res/xiao_w5500_eth_adapter_shell.stp)
- **[STEP]** [STEP 3D de las Cubiertas del Adaptador Ethernet XIAO W5500](https://files.seeedstudio.com/wiki/xiao_w5500_poe/res/xiao_w5500_eth_adapter_covers.stp)
- **[KICAD]** [PCB del Adaptador Ethernet XIAO W5500](https://files.seeedstudio.com/wiki/xiao_w5500_poe/res/XIAO_POE_RJ45_V20.kicad_pcb)
- **[GITHUB]** [Repositorio del Adaptador Ethernet XIAO W5500](https://github.com/Seeed-Projects/XIAO_W5500_Ehernet_Adapter_Example)

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
