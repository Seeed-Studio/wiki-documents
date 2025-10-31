---
title: Conectar Wio Terminal a Google Cloud IoT Core
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Connect-Wio-Terminal-to-Google-Cloud-IoT-Core/
slug: /es/Connect-Wio-Terminal-to-Google-Cloud-IoT-Core
last_update:
  date: 01/11/2022
  author: gunengyu
---
# Conectar Wio Terminal a Google Cloud IoT Core

![](https://files.seeedstudio.com/wiki/Google_Cloud_IoT/thumb.png)

## Introducción

En este tutorial, te guiaremos a través del proceso de conectar el Wio Terminal a Google Cloud IoT Core y enviar datos de telemetría desde el Wio Terminal al núcleo de Google Cloud IoT. Esto se dividirá en dos secciones donde la primera sección hablará sobre cómo usar las bibliotecas existentes para enviar datos de telemetría preconfigurados en el código, mientras que la segunda sección hablará sobre cómo agregar tus propios sensores al Wio Terminal para enviar los datos de telemetría a Google Cloud IoT Core. Google Cloud IoT Core admite tanto protocolos HTTP como MQTT para la comunicación, pero sin embargo usaremos el protocolo MQTT en este tutorial.

### ¿Qué es Google Cloud?

[Google Cloud](https://cloud.google.com/) consiste en un conjunto de activos físicos, como computadoras y discos duros, y recursos virtuales, como máquinas virtuales (VMs), que están contenidos en los centros de datos de Google alrededor del mundo. Esta distribución de recursos proporciona varios beneficios, incluyendo redundancia en caso de falla y latencia reducida al ubicar recursos más cerca de los clientes.

En la computación en la nube, lo que podrías estar acostumbrado a pensar como productos de software y hardware, se convierten en servicios. Estos servicios proporcionan acceso a los recursos subyacentes. La [lista de servicios disponibles de Google Cloud](https://cloud.google.com/products) es larga, y sigue creciendo. Cuando desarrollas tu sitio web o aplicación en Google Cloud, mezclas y combinas estos servicios en combinaciones que proporcionan la infraestructura que necesitas, y luego agregas tu código para habilitar los escenarios que quieres construir.

### ¿Qué es Google Cloud Platform?

[Google Cloud Platform (GCP)](https://console.cloud.google.com/) es una colección de servicios de computación en la nube. Con un conjunto de herramientas de gestión, proporciona una serie de servicios modulares en la nube incluyendo computación, almacenamiento de datos, análisis de datos y aprendizaje automático. Proporciona infraestructura como servicio, plataforma como servicio, y entornos de computación sin servidor.

### ¿Qué es Google Cloud IoT Core?

[Google Cloud Internet of Things (IoT) Core](https://cloud.google.com/iot/docs) es un servicio completamente gestionado para conectar y gestionar de forma segura dispositivos IoT, desde unos pocos hasta millones. Ingiere datos de dispositivos conectados y construye aplicaciones ricas que se integran con los otros servicios de big data de Google Cloud Platform.

### ¿Qué es Google Cloud Console?

[Google Cloud Console](https://console.cloud.google.com/) proporciona una interfaz gráfica de usuario basada en web que puedes usar para gestionar recursos de Google Cloud Platform. Cuando usas Cloud Console, creas un nuevo proyecto, o eliges un proyecto existente, y usas los recursos que creas en el contexto de ese proyecto. Puedes crear múltiples proyectos, así que puedes usar proyectos para separar tu trabajo de cualquier manera que tenga sentido para ti. Por ejemplo, podrías iniciar un nuevo proyecto si quieres asegurarte de que solo ciertos miembros del equipo puedan acceder a los recursos en ese proyecto, mientras que todos los miembros del equipo pueden continuar accediendo a recursos en otro proyecto.

## Conectando Wio Terminal a Google Cloud IoT Core vía MQTT

Como se explicó anteriormente, utilizaremos el puente MQTT disponible para la comunicación entre el Wio Terminal y Google Cloud IoT Core. Sin embargo, también puedes usar el puente HTTP si ese es tu requerimiento.

![](https://files.seeedstudio.com/wiki/Google_Cloud_IoT/5555555.png)

### Configuración de Google Cloud Console

Primero necesitamos visitar Google Cloud Console, crear un registro de dispositivos de Cloud IoT Core y registrar un dispositivo.

#### Configuración Inicial

- **PASO 1:** Visita [aquí](https://console.cloud.google.com/) para crear un nuevo proyecto

**Nota:** Inicia sesión en tu cuenta de Google si se te solicita

- **PASO 2:** Haz clic en el menú **Seleccionar un proyecto**

- **PASO 3:** Haz clic en **NUEVO PROYECTO** e ingresa un **nombre de proyecto**

- **PASO 4:** Haz clic en **CREAR**

- **PASO 5:** Habilita la facturación para tu proyecto de Cloud. Esto es requerido para asegurar que no eres un robot y no se te cobrará. Elige "Facturación" bajo el menú de navegación y completa la configuración.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/1111111.png" alt="pir" width={500} height="auto" /></p>

- **PASO 6:** Visita [aquí](https://console.cloud.google.com/flows/enableapi?apiid=cloudiot.googleapis.com%2Cpubsub&authuser=3&_ga=2.254170561.853675115.1607885458-878786893.1606048800) para habilitar las APIs de Cloud IoT Core y Cloud Pub/Sub

**Nota:** Elige el proyecto que creaste anteriormente del menú desplegable

#### Crear un Registro de Dispositivos

- **PASO 1:** Visita la [página de Google Cloud IoT Core](https://console.cloud.google.com/iot/registries) en Cloud Console

- **PASO 2:** Haz clic en **Crear Registro**

- **PASO 3:** Ingresa un **ID de registro**

**Nota:** Este es el nombre de tu registro

- **PASO 4:** Selecciona una **Región**

**Nota:** Si estás en Estados Unidos, selecciona us-central1 para la Región. Si estás fuera de Estados Unidos, selecciona tu región preferida.

- **PASO 5:** En la lista desplegable **Seleccionar un tema de Cloud Pub/Sub**, selecciona **Crear un tema** y escribe tu **ID de Tema** preferido

- **PASO 6:** Haz clic en **CREAR TEMA**

- **PASO 7:** Haz clic en **MOSTRAR OPCIONES AVANZADAS**

- **PASO 8:** Los campos **Tema de estado del dispositivo** y **Valor del certificado** son opcionales, así que déjalos en blanco

- **PASO 9:** Selecciona **MQTT** para el **Protocolo**

- **PASO 10:** Haz clic en **Crear** en la página de Cloud IoT Core

Ahora hemos creado un registro de dispositivos con un tema de Cloud Pub/Sub para publicar eventos de telemetría del dispositivo

#### Generar un Par de Claves del Dispositivo (Claves EC)

Cloud IoT Core utiliza autenticación de clave pública (o asimétrica)

- El dispositivo usa una clave privada para firmar un [JSON Web Token (JWT)](https://cloud.google.com/iot/docs/how-tos/credentials/jwts). El token se pasa a Cloud IoT Core como prueba de la identidad del dispositivo.
- El servicio usa la clave pública del dispositivo (subida antes de que se envíe el JWT) para verificar la identidad del dispositivo.

Cloud IoT Core soporta los algoritmos RSA y Curva Elíptica, y utilizaremos claves de Curva Elíptica en este tutorial.

- **PASO 1:** Crea una nueva carpeta en tu PC

- **PASO 2:** Navega a la carpeta desde una ventana de terminal y escribe lo siguiente para generar un par de claves de Curva Elíptica P-256

```sh
openssl ecparam -genkey -name prime256v1 -noout -out ec_private.pem
openssl ec -in ec_private.pem -pubout -out ec_public.pem
```

**Nota:** Asegúrate de instalar **openssl** siguiendo [este enlace](https://slproweb.com/products/Win32OpenSSL.html) y añadiendo la ubicación del directorio al PATH.

Los comandos anteriores crean el siguiente par de claves pública/privada:

- **ec_private.pem**: La clave privada que debe almacenarse de forma segura en el dispositivo y usarse para firmar el JWT de autenticación.
- **ec_public.pem**: La clave pública que debe almacenarse en Cloud IoT Core y usarse para verificar la firma del JWT de autenticación.

#### Extraer la Clave Privada

Necesitamos extraer los bytes de la clave privada y copiarlos en la cadena de clave privada en el proyecto de Arduino que crearemos más adelante en este tutorial. Guarda estas claves por ahora para usarlas después.

- **PASO 1:** Abre una ventana de terminal y navega a la carpeta que contiene el par de claves de Curva Elíptica que generamos antes.

- **PASO 2:** Escribe el siguiente comando

```sh
openssl ec -in ec_private.pem -noout -text
```

- **PASO 3:** Copia y pega los bytes de la clave privada generada bajo **priv:** en un bloc de notas y guárdalos para uso posterior.

#### Agregar un Dispositivo al Registro

- **PASO 1:** Visita la [página de Registros](https://console.cloud.google.com/iot/registries) y selecciona el registro que creaste anteriormente

- **PASO 2:** Selecciona la pestaña **Devices** y haz clic en **CREATE A DEVICE**

- **PASO 3:** Ingresa un **Device ID**

- **PASO 4:** El campo **Device metadata** es opcional, así que déjalo en blanco

- **PASO 5:** Haz clic en el menú desplegable **COMMUNICATION, CLOUD LOGGING, AUTHENTICATION**

- **PASO 6:** Selecciona **Allow** para **Device communication**

- **PASO 7:** Dentro del campo **Authentication**, bajo **Input method**, selecciona **Upload**

- **PASO 8:** Selecciona **ES256** del menú desplegable **Public key format**

- **PASO 9:** Bajo **Public key value**, presiona el botón **BROWSE**, navega a la carpeta **Elliptic Curve key pair** que creamos anteriormente y selecciona **ec_public.pem**

- **PASO 10:** Haz clic en **Create**

Ahora has agregado un dispositivo a tu registro. La clave ES256 aparece en la página de detalles del dispositivo para tu dispositivo.

#### Configurar un Suscriptor

Ahora que hemos creado un registro de dispositivos, creado un tema y agregado un dispositivo a ese registro, pasemos a crear un suscriptor para suscribirse al tema que hemos creado, con el fin de obtener los datos de telemetría del Wio Terminal.

- **PASO 1:** Escribe **Pub** en la barra de búsqueda de Google Cloud Console y selecciona **Pub/Sub** de los resultados

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/333333.png" alt="pir" width={700} height="auto" /></p>

- **PASO 2:** Haz clic en **Subscriptions** en el menú de navegación

- **PASO 3:** Haz clic en **CREATE SUBSCRIPTION**

- **PASO 4:** Ingresa un **Subscription ID** de tu elección

- **PASO 5:** Selecciona el **Pub/Sub topic** que creamos previamente del menú desplegable **Select a Cloud Pub/Sub topic**

- **PASO 6:** Selecciona **Pull** como el tipo de entrega

- **PASO 7:** Haz clic en **Create**

Ahora hemos terminado de configurar Google Cloud IoT Core. A continuación, pasaremos a configurar el Wio Terminal junto con el Arduino IDE.

### Configuración de Arduino con Wio Terminal

#### Librerías Necesarias

Necesitamos dos librerías para este tutorial.

1. lwMQTT MQTT Arduino Library
2. Google Cloud IoT Arduino Library

Para descargar estas librerías:

- **PASO 1:** Abre Arduino IDE
- **PASO 2:** Navega a `Sketch > Include Library > Manage Libraries`
- **PASO 3:** Escribe **lwMQTT** y **Google Cloud IoT** en la caja de búsqueda e instala las librerías

#### Configuración de Credenciales e Información de Cuenta

Ahora necesitamos establecer las credenciales de Wi-Fi y la información de Google Cloud IoT Core en el archivo **ciotc_config.h**.

- **PASO 1:** Dentro de Arduino IDE, `File > Examples > Google Cloud IoT JWT > Esp32-lwmqtt`

- **PASO 2:** Navega a **ciotc_config.h**

- **PASO 3:** Cambia los **detalles de la red Wifi**

```cpp
const char *ssid = "Enter_SSID";
const char *password = "Enter_Password";
```

- **PASO 4:** Cambia los **detalles de Google Cloud IoT**

```cpp
const char *project_id = "Enter_Project_ID";
const char *location = "Enter_location";
const char *registry_id = "Enter_Registry_ID";
const char *device_id = "Enter_Device_ID";
```

- **PASO 5:** Copia los bytes de la clave privada que obtuvimos de **ec_private.pem** y guardamos en el bloc de notas anteriormente

```cpp
const char *private_key_str =
    "6e:b8:17:35:c7:fc:6b:d7:a9:cb:cb:49:7f:a0:67:"
    "63:38:b0:90:57:57:e0:c0:9a:e8:6f:06:0c:d9:ee:"
    "31:41";
```

**Nota:** La longitud de la clave debe ser de 32 pares de dígitos hexadecimales

#### Métodos para Cambiar la Hora NTP

Abre **esp32-mqtt.h** y reemplaza todo el archivo con los siguientes códigos. Aquí hemos reemplazado la función configTime con la implementación para obtener la hora NTP vía UDP.

```cpp
#include <Client.h>
#include <rpcWiFi.h>
#include <WiFiClientSecure.h>

#include <MQTT.h>

#include <CloudIoTCore.h>
#include <CloudIoTCoreMqtt.h>
#include "ciotc_config.h" // Update this file with your configuration

// !!REPLACEME!!
// The MQTT callback function for commands and configuration updates
// Place your message handler code here.
void messageReceived(String &topic, String &payload){
  Serial.println("incoming: " + topic + " - " + payload);
}
///////////////////////////////

// Initialize WiFi and MQTT for this board
//Client *netClient;
CloudIoTCoreDevice *device;
CloudIoTCoreMqtt *mqtt;
MQTTClient *mqttClient;
unsigned long iat = 0;
String jwt;
WiFiUDP udp;

unsigned int localPort = 2390;
unsigned long devicetime;
const int NTP_PACKET_SIZE = 48; // NTP time stamp is in the first 48 bytes of the message
byte packetBuffer[NTP_PACKET_SIZE]; //buffer to hold incoming and outgoing packets

// send an NTP request to the time server at the given address
unsigned long sendNTPpacket(const char* address) {
    // set all bytes in the buffer to 0
    for (int i = 0; i < NTP_PACKET_SIZE; ++i) {
        packetBuffer[i] = 0;
    }
    // Initialize values needed to form NTP request
    // (see URL above for details on the packets)
    packetBuffer[0] = 0b11100011;   // LI, Version, Mode
    packetBuffer[1] = 0;     // Stratum, or type of clock
    packetBuffer[2] = 6;     // Polling Interval
    packetBuffer[3] = 0xEC;  // Peer Clock Precision
    // 8 bytes of zero for Root Delay & Root Dispersion
    packetBuffer[12] = 49;
    packetBuffer[13] = 0x4E;
    packetBuffer[14] = 49;
    packetBuffer[15] = 52;

    // all NTP fields have been given values, now
    // you can send a packet requesting a timestamp:
    udp.beginPacket(address, 123); //NTP requests are to port 123
    udp.write(packetBuffer, NTP_PACKET_SIZE);
    udp.endPacket();
}

unsigned long getNTPtime() {

    // module returns a unsigned long time valus as secs since Jan 1, 1970 
    // unix time or 0 if a problem encounted

    //only send data when connected
    if (WiFi.status() == WL_CONNECTED) {
        //initializes the UDP state
        //This initializes the transfer buffer
        udp.begin(WiFi.localIP(), localPort);
        sendNTPpacket(ntp_primary); // send an NTP packet to a time server
        // wait to see if a reply is available
        delay(1000);
        if (udp.parsePacket()) {
//            Serial.println("udp packet received");
//            Serial.println("");
            // We've received a packet, read the data from it
            udp.read(packetBuffer, NTP_PACKET_SIZE); // read the packet into the buffer

            //the timestamp starts at byte 40 of the received packet and is four bytes,
            // or two words, long. First, extract the two words:

            unsigned long highWord = word(packetBuffer[40], packetBuffer[41]);
            unsigned long lowWord = word(packetBuffer[42], packetBuffer[43]);
            // combine the four bytes (two words) into a long integer
            // this is NTP time (seconds since Jan 1 1900):
            unsigned long secsSince1900 = highWord << 16 | lowWord;
            // Unix time starts on Jan 1 1970. In seconds, that's 2208988800:
            const unsigned long seventyYears = 2208988800UL;
            // subtract seventy years:
            unsigned long epoch = secsSince1900 - seventyYears;

            // adjust time for timezone offset in secs +/- from UTC
            // WA time offset from UTC is +8 hours (28,800 secs)
            // + East of GMT
            // - West of GMT
//            long tzOffset = 28800UL;
            long tzOffset = 0UL;

            // WA local time 
            unsigned long adjustedTime;
            return adjustedTime = epoch + tzOffset;
        }
        else {
            // were not able to parse the udp packet successfully
            // clear down the udp connection
            udp.stop();
            return 0; // zero indicates a failure
        }
        // not calling ntp time frequently, stop releases resources
        udp.stop();
    }
    else {
        // network not connected
        return 0;
    }

}

///////////////////////////////
// Helpers specific to this board
///////////////////////////////
String getDefaultSensor(){
  return "Wifi: " + String(WiFi.RSSI()) + "db";
}

String getJwt(){
  Serial.println("Refreshing JWT");
  iat = getNTPtime();
  Serial.println(iat);
  jwt = device->createJWT(iat, jwt_exp_secs);

  Serial.println(jwt);
  return jwt;
}

void setupWifi(){
  Serial.println("Starting wifi");

  WiFi.mode(WIFI_STA);
  // WiFi.setSleep(false); // May help with disconnect? Seems to have been removed from WiFi
  WiFi.begin(ssid, password);
  Serial.println("Connecting to WiFi");
  while (WiFi.status() != WL_CONNECTED){
    delay(100);
  }

//  configTime(0, 0, ntp_primary, ntp_secondary);
  Serial.println("Waiting on time sync...");
//  Serial.println(getNTPtime());

  while (getNTPtime() < 1510644967){
    delay(10);
  }
}

void connectWifi(){
  Serial.print("checking wifi...");
  while (WiFi.status() != WL_CONNECTED){
    Serial.print(".");
    delay(1000);
  }
}

///////////////////////////////
// Orchestrates various methods from preceeding code.
///////////////////////////////
bool publishTelemetry(String data){
  return mqtt->publishTelemetry(data);
}

bool publishTelemetry(const char *data, int length){
  return mqtt->publishTelemetry(data, length);
}

bool publishTelemetry(String subfolder, String data){
  return mqtt->publishTelemetry(subfolder, data);
}

bool publishTelemetry(String subfolder, const char *data, int length){
  return mqtt->publishTelemetry(subfolder, data, length);
}

void connect(){
  connectWifi();
  mqtt->mqttConnect();
}


WiFiClientSecure netClient;
void setupCloudIoT(){
  device = new CloudIoTCoreDevice(
      project_id, location, registry_id, device_id,
      private_key_str);

  setupWifi();
//  netClient = new WiFiClientSecure();
  mqttClient = new MQTTClient(512);
  mqttClient->setOptions(180, true, 1000); // keepAlive, cleanSession, timeout
  mqtt = new CloudIoTCoreMqtt(mqttClient, &netClient, device);
  mqtt->setUseLts(true);
  mqtt->startMQTT();
}
```

#### Agregar Definición de Macro a Esp32-lwmqtt.ino

Agregar la placa Wio Terminal a las definiciones de macro dentro de **Esp32-lwmqtt.ino**

```cpp
#if defined(ESP32) || defined(WIO_TERMINAL)
#define __ESP32_MQTT_H__
#endif
```

Ahora hemos terminado de configurar Arduino IDE. Finalmente necesitas Subir este código al Wio Terminal. Abre el Monitor Serie y verás lo siguiente mostrado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/4444444.png" alt="pir" width={700} height="auto" /></p>

### Mostrar Datos de Telemetría

Ahora necesitamos mostrar los datos de telemetría entrantes del Wio Terminal. Aquí en este código de ejemplo, la intensidad de la señal Wi-Fi será enviada como datos de telemetría.

- **PASO 1:** Visita **Pub/Sub** en Google Cloud Console

**Nota:** Puedes buscar **Pub** en la barra de búsqueda dentro de Google Cloud Console

- **PASO 2:** Navega a **Subscriptions** dentro del Menú de Navegación

- **PASO 3:** Selecciona el ID de suscripción que creamos antes

- **PASO 4:** Haz clic en **VIEW MESSAGES**

- **PASO 5:** Haz clic en **PULL** y verás los datos de telemetría entrantes como sigue.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/6666666.png" alt="pir" width={950} height="auto" /></p>

### ¿Cómo Agregar Otros Sensores?

Puedes agregar cualquier sensor al Wio Terminal y enviar datos de telemetría a Google Cloud IoT Core. Para simplificar, usaremos el sensor de luz integrado en el Wio Terminal para enviar niveles de intensidad de luz a Google Cloud IoT Core.

#### Configuración de Google Cloud IoT

- **PASO 1:** Visita **IoT Core** en Google Cloud Console

**Nota:** Puedes buscar **IoT Core** en la barra de búsqueda dentro de Google Cloud Console

- **PASO 2:** Selecciona el registro que creamos antes

- **PASO 3:** Bajo **Cloud Pub/Sub topics** selecciona **Add or edit topics**

- **PASO 4:** Haz clic en **ADD ADDITIONAL TOPIC**

- **PASO 5:** Haz clic en **CREATE A TOPIC** del menú desplegable de **Select a Cloud Pub/Sub topic**

- **PASO 6:** Ingresa un **Topic ID** y haz clic en **CREATE TOPIC**

- **PASO 7:** Ingresa un **Subfolder name** dentro de la columna **Subfolder**

**Nota:** El nombre de subcarpeta será usado para relacionarse con el tema en el código de Arduino

- **PASO 8:** Haz clic en **UPDATE**

- **PASO 9:** Crea una **nueva suscripción** como se explicó antes

#### Configuración de Arduino

Navega a **Esp32-lwmqtt.ino** y agrega lo siguiente

- **PASO 1:** Después del bucle, agrega lo siguiente para el sensor de luz integrado

```cpp
void loop() {
  int light = analogRead(WIO_LIGHT); //assign variable to store light sensor values 
  light = map(light,0,1023,0,100); //Map sensor values  
```

- **PASO 2:** Añadir el tema con el nombre de la Subcarpeta

```cpp
    publishTelemetry(getDefaultSensor());
    publishTelemetry("/light",String(light));
```

**Nota:** Si no se añade un nombre de subcarpeta, los datos de telemetría se enviarán al tema predeterminado. En este caso, los datos de telemetría para la intensidad de la señal Wi-Fi como se explicó anteriormente se enviarán al primer tema que creamos antes, que es el tema predeterminado.

Después de cargar el código al Wio Terminal, extrae del tema recién creado como suscriptor y verás el siguiente resultado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/222222.png" alt="pir" width={950} height="auto" /></p>

### ¿Cómo Añadir Otros Sensores y Visualizar Datos en Paneles de Control?

Aunque Google Cloud IoT Core no ofrece un panel de control listo para usar para visualizar los datos de los sensores, explicaremos cómo lograr esto usando InfluxDB y Grafana.

[InfluxDB](https://www.influxdata.com/) es una base de datos de series temporales, es decir, cada dato en InfluxDB está asociado con una marca de tiempo particular que muestra la fecha y hora asociada con un dato particular. Mientras que [Grafana](https://grafana.com/) es una solución de código abierto para ejecutar análisis de datos, extraer métricas que dan sentido a la cantidad masiva de datos y monitorear aplicaciones con la ayuda de paneles de control personalizables.

Básicamente, conectaremos un sensor de temperatura/humedad al Wio Terminal, usaremos una Google Cloud Function para transmitir datos desde un Pub/Sub a una InfluxDB ubicada en un clúster GKE (Google Kubernetes Engine) y mostraremos los datos de InfluxDB en Grafana usando paneles de control interactivos.

![](https://files.seeedstudio.com/wiki/Google_Cloud_IoT/thumb.png)

#### Configuración de Hardware para Arduino

Conecta el Grove - Temperature and Humudity Sensor (DHT11) al Grove - Digital/Analog Port (D0) del Wio Terminal.

#### Configuración de Software para Arduino

- **PASO 1:** Visita el [repositorio del Grove - Temperature and Humidity Sensor](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor) y descárgalo como un archivo zip

- **PASO 2:** Abre Arduino, navega a `Sketch > Include Library > Add .ZIP Library` y selecciona la biblioteca descargada para instalarla

Navega al **Esp32-lwmqtt.ino** usado anteriormente y añade lo siguiente:

- **PASO 1:** Añade lo siguiente después de **#include "esp32-mqtt.h"**

```cpp
#include "DHT.h" //DHT library

#define DHTPIN 0 //Define Signal Pin of DHT
#define DHTTYPE DHT11 //Define DHT Sensor Type
DHT dht(DHTPIN, DHTTYPE); //Initializing DHT sensor  
```

- **PASO 2:** Añade lo siguiente dentro del **setup** para iniciar el sensor DHT

```cpp
dht.begin(); 
```

- **PASO 3:** Añade lo siguiente dentro del **bucle if** dentro de **void loop()**

```cpp
int temperature = dht.readTemperature(); //Assign variable to store temperature
int humidity = dht.readHumidity(); //Assign variable to store humidity

String payload = String("{\"timestamp\":") + getNTPtime() +
                  String(",\"temperature\":") temperature +
                  String(",\"humidity\":") + humidity +
                  String("}");
publishTelemetry(payload); 
```

**Nota:** Aquí analizamos todos los datos como una cadena en influxDB. Analizar el **tiempo** es importante porque influxDB es una base de datos de series temporales. También la función **pushTelemetry** enviará los datos al tema predeterminado que hemos creado al principio de este tutorial.

- **PASO 4:** Sube el código al Wio Terminal

#### Configuración de Google Cloud IoT

- **PASO 1:** Visita [este](https://github.com/lakshanthad/esp32-cloud-iot-core-k8s) repositorio y descárgalo como un archivo zip

- **PASO 2:** Extrae el archivo zip descargado

- **PASO 3:** Abre Google Cloud Console y navega a [Google Kubernetes Engine](https://console.cloud.google.com/kubernetes/list) y espera a que el sistema se inicialice

- **PASO 4:** Inicia el Cloud shell presionando el botón en la esquina superior derecha

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/cloud_shell_1.png" alt="pir" width={700} height="auto" /></p>

- **PASO 5:** Escribe los siguientes comandos para establecer los valores predeterminados para la herramienta de línea de comandos gcloud

```sh
export ZONE=<enter_zone> # e.g. us-central1-a, see https://cloud.google.com/compute/docs/regions-zones/#available
export PROJECT_ID=<enter_project-id> # project ID name 
gcloud config set project $PROJECT_ID
gcloud config set compute/zone $ZONE
```

- **PASO 6:** Escribe los siguientes comandos para crear un clúster GKE con un nodo n1-standard-1

```sh
gcloud container clusters create influxdb-grafana \
                --num-nodes 1 \
                --machine-type n1-standard-1 \
                --zone $ZONE
```

- **PASO 7:** Escribe los siguientes comandos para crear un secreto que almacene la información de autenticación de InfluxDB y Grafana

```sh
kubectl create secret generic influxdb-grafana \
  --from-literal=influxdb-user=admin \
  --from-literal=influxdb-password=passw0rd \
  --from-literal=grafana-user=admin \
  --from-literal=grafana-password=passw0rd
```

**Nota:** Puedes cambiar los nombres de usuario y contraseñas de influxdb/grafana según tu preferencia

- **PASO 8:** Haz clic en **Open Editor** dentro de Google Shell

- **PASO 9:** Arrastra y suelta la carpeta previamente descargada y extraída en **Cloud Shell Editor**

- **PASO 10:** Haz clic en **Open Terminal** para volver a la terminal. Navega al directorio **05-influxdb_grafana_k8s** escribiendo lo siguiente

```sh
cd esp32-cloud-iot-core-k8s-master/05-influxdb_grafana_k8s
```

- **PASO 11:** Escribe los siguientes comandos para desplegar InfluxDB y Grafana en Kubernetes

```sh
kubectl create -f k8s/
```

#### Configuración de Grafana

- **PASO 1:** Escribe lo siguiente para verificar las IPs externas / puertos de los servicios

```sh
kubectl get services
```

- **PASO 2:** Copia la IP externa de Grafana

- **PASO 3:** Visita `http://<grafana service external ip>:3000`

**Nota:** Pega la IP externa de Grafana copiada previamente en `<grafana service external ip>`

- **PASO 4:** Inicia sesión en Grafana con las credenciales establecidas previamente

- **PASO 5:** Haz clic en el ícono de engranaje y navega a `Configuration > Data Sources`

- **PASO 6:** Haz clic en **Add data source** y selecciona **influxDB**

- **PASO 7:** Ingresa lo siguiente en el campo **URL**

```sh
http://influxdb:8086
```

- **PASO 8:** Ingresa lo siguiente en el campo **Base de datos** y haz clic en **Guardar y probar**

```sh
iot
```

**Nota:** Deberías ver el mensaje **Data source is working**, si has configurado exitosamente la fuente de datos de **InfluxDB** en Grafana

#### Crear una Google Cloud Function

Ahora necesitamos crear una Google Cloud Function para transmitir datos desde un tema en Pub/Sub a InfluxDB y mostrar los datos de InfluxDB en Grafana usando paneles interactivos.

- **PASO 1:** Regresa a la **Google Cloud Console** y abre el **Cloud Shell**

- **PASO 2:** Escribe lo siguiente para habilitar la **Cloud Functions API**

```sh
gcloud services enable cloudfunctions.googleapis.com
```

- **PASO 3:** Navega al directorio **06-cloud_function** escribiendo lo siguiente

```sh
cd esp32-cloud-iot-core-k8s-master/06-cloud_function
```

- **PASO 4:** Abre **main.py** en un **editor de texto vim**

```sh
cd esp32-cloud-iot-core-k8s-master/06-cloud_function
```

- **PASO 5:** Presiona **i** en el teclado para entrar al **modo de edición**

- **PASO 6:** modifica las **variables de InfluxDB** (host, puerto, nombre de usuario, contraseña) en la **función _get_influxdb_client**

**Nota:** Obtén el host de InfluxDB escribiendo lo siguiente en Cloud Shell y copiando la IP externa

```sh
kubectl get services
```

- **PASO 7:** Guarda el archivo escribiendo **:wq**

- **PASO 8:** Despliega la **Función en la Nube** escribiendo lo siguiente

```sh
export PUBSUB_TOPIC="enter_topic-name>"
export REGION="enter_region" # https://cloud.google.com/functions/docs/locations
gcloud functions deploy iotcore_pubsub_to_influxdb --runtime python37 --trigger-topic $PUBSUB_TOPIC --region $REGION
```

#### Volver a la Configuración de Grafana

- **PASO 1:** Abre Grafana y navega a `Dashboards > Manage`

- **PASO 2:** Haz clic en **New Dashboard** y haz clic en **Add new panel**

- **PASO 3:** Navega a **Visualization** y haz clic en **Graph**

- **PASO 4:** En **Query**, en la pestaña **FROM**, haz clic en **select measurement** y selecciona **temperature** del menú desplegable

- **PASO 5:** Haz clic en **+ Query** y repite el mismo paso que el **paso 12** para **humidity**

- **PASO 6:** Cambia las otras configuraciones según tu preferencia

- **PASO 7:** Haz clic en **Apply**

- **PASO 8:** Haz clic en **Add panel** y **Add new panel**

- **PASO 9:** Navega a **Visualization** y haz clic en **Gauge**

- **PASO 10:** En **Query**, en la pestaña **FROM**, haz clic en **select measurement** y selecciona **temperature** del menú desplegable

- **PASO 11:** En la pestaña **Field**, en **Unit**, selecciona `Temperature > Celcius` del menú desplegable

- **PASO 12:** Establece un valor mínimo y máximo para el medidor escribiendo en **Min** y **Max**

- **PASO 13:** En **Display name**, escribe `Temperature`

- **PASO 14:** Repite lo mismo para **humidity** siguiendo desde el **paso 15**.

- **PASO 15:** Haz clic en **Apply**

Ahora verás el panel de control creado en Grafana

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/grafana_dash_1.png" alt="pir" width={900} height="auto" /></p>

## Soporte Técnico y Discusión de Productos

 si tienes algún problema técnico. envía el problema a nuestro [foro](http://forum.seeedstudio.com/).
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
