---
title: L76K Path Tracking on Ubidots
description: Conectando el Módulo GNSS L76K y XIAO de SeeedStudio a Ubidots para el Seguimiento de Rutas en un Mapa
keywords: 
  - XIAO
  - Expansion Boards for XIAO
  - GPS Module for XIAO
  - L76K Path Tracking on Ubidots
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/L76K_Path_Tracking_on_Ubidots
last_update: 
  date: 02/14/2025
  author: Guillermo
---


# Conectando el Módulo GNSS L76K y XIAO de SeeedStudio a Ubidots para el Seguimiento de Rutas en un Mapa

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic00_Track.png" alt="pir" width={600} height="auto"/>
</p>

## Introducción
Después de [Comenzar con el Módulo GNSS L76K para SeeedStudio XIAO](https://wiki.seeedstudio.com/get_start_l76k_gnss/), es posible que desees utilizar el módulo GNSS L76K para localizar un objeto y mostrar su trayectoria en un mapa. Para lograrlo, podemos combinar la placa de desarrollo SeeedStudio XIAO con la plataforma de datos IoT Ubidots.

[Ubidots](https://ubidots.com/) es una plataforma de desarrollo IoT de bajo código para ingenieros y desarrolladores que no tienen el tiempo o los recursos para construir una aplicación IoT lista para producción por sí mismos. Desde API optimizadas para dispositivos hasta una interfaz limpia para los usuarios finales, Ubidots proporciona los bloques esenciales para acelerar el desarrollo sin necesidad de contratar un costoso equipo de ingenieros para diseñar y mantener una solución personalizada.

### Características
- Carga de datos de ubicación en tiempo real (latitud y longitud) cuando está conectado a Wi-Fi
- Visualización de la ruta conectando los puntos de posición en un mapa

## Primeros Pasos
### Paso 1: Obtener el Token de Ubidots
Primero, abre [https://ubidots.com](https://ubidots.com) en tu navegador, regístrate para obtener una cuenta, confirma tu correo electrónico e inicia sesión en la consola de Ubidots.

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic02_SignUp.png" alt="pir" width={600} height="auto"/>
</p>

Haz clic en tu avatar en la esquina y selecciona **"My Profile"**. Desplázate hacia abajo y cambia **"Decimal places"** de 2 a 6 para aumentar la precisión de latitud y longitud.  

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic04_Setting.png" alt="pir" width={600} height="auto"/>
</p>

Luego, ve a **"API Credentials"** en el menú de la izquierda y copia el **token** (**NO la API Key**) para usarlo más adelante.

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic05_Token.png" alt="pir" width={600} height="auto"/>
</p>

### Paso 2: Cargar el código en XIAO  
Conecta la placa de desarrollo SeeedStudio XIAO (en este ejemplo, usamos SeeedStudio XIAO ESP32S3), el módulo L76K GNSS, la antena GNSS y la antena Wi-Fi. Luego, enlázalos a tu computadora.

:::danger **Advertencia**
Presta especial atención a la dirección de instalación del módulo. No lo conectes al revés, ya que esto podría dañar tanto el módulo como la XIAO.
:::

A continuación, inicia el Arduino IDE. Recuerda agregar las bibliotecas `EspSoftwareSerial` y `TinyGPSPlus` desde el gestor de bibliotecas, descargar la [biblioteca Ubidots ESP32](https://github.com/ubidots/ubidots-esp32) y añadirla también.  

Selecciona la placa y el puerto correspondientes, luego copia y pega el siguiente código: 

```cpp
#include <SoftwareSerial.h>
#include <TinyGPSPlus.h>
#include <WiFi.h>
#include <Ubidots.h>

static const int RXPin = D7, TXPin = D6;
static const uint32_t GPSBaud = 9600;
const char WIFI_SSID[]     = "INGRESA EL NOMBRE DE TU WIFI AQUÍ";
const char WIFI_PASS[]     = "INGRESA LA CONTRASEÑA DE TU WIFI AQUÍ";
const char UBIDOTS_TOKEN[] = "INGRESA TU TOKEN DE UBIDOTS AQUÍ";

SoftwareSerial MySerial(RXPin, TXPin);
TinyGPSPlus gps;
Ubidots ubidots(UBIDOTS_TOKEN, UBI_UDP);
double lat;
double lng;

void setup() {
  Serial.begin(115200);
  MySerial.begin(GPSBaud);
  ubidots.setDebug(true);    // Para observar el registro de carga en Ubidots. También puedes cambiarlo a "false" para una salida más simple en el monitor serie.
  Serial.println("\nVersión de la biblioteca TinyGPSPlus: " + String(TinyGPSPlus::libraryVersion()));

  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  while (WiFi.status() != WL_CONNECTED) {
    WiFi.begin(WIFI_SSID, WIFI_PASS);
    Serial.println(WiFi.status());
    delay(5000);
  }

 /*
    WL_NO_SHIELD        = 255,    // Para compatibilidad con WiFi Shield library
    WL_IDLE_STATUS      = 0,
    WL_NO_SSID_AVAIL    = 1,
    WL_SCAN_COMPLETED   = 2,
    WL_CONNECTED        = 3,
    WL_CONNECT_FAILED   = 4,
    WL_CONNECTION_LOST  = 5,
    WL_DISCONNECTED     = 6
  */

  Serial.println("¡WiFi conectado!");
}

void loop() {
  while (MySerial.available() > 0) {
    if (gps.encode(MySerial.read())) {
      getLocation();
      sendToUbidots();
      delay(10 * 1000);  // Cambia este valor para modificar el intervalo de obtención y carga de la ubicación.
    }
  }

  if (millis() > 5000 && gps.charsProcessed() < 10) {
    Serial.println("No se detectó GPS, revisa el cableado.");
  }
}

void getLocation() {
  if (gps.location.isValid()) {
    lat = gps.location.lat();
    lng = gps.location.lng();

    Serial.print("Ubicación: ");
    Serial.print(gps.location.lat(), 6);
    Serial.print(", ");
    Serial.print(gps.location.lng(), 6);
    Serial.println();
  } else {
    Serial.println("No se puede obtener la ubicación actualmente");
  }
}

void sendToUbidots() {
  if (lat != 0 && lng != 0) {
    char charLat[20];
    char charLng[20];
    sprintf(charLat, "%.6lf", lat);
    sprintf(charLng, "%.6lf", lng);

    ubidots.addContext("lat", charLat);
    ubidots.addContext("lng", charLng);
    char* context = (char*)malloc(sizeof(char) * 60);
    ubidots.getContext(context);
    ubidots.add("position", 1, context);

    if (ubidots.send()) {
      Serial.println("Valores enviados");
    } else {
      Serial.println("Valores no enviados");
    }
    free(context);
  }
}

```

Sube el código a la placa y pronto verás algunas salidas en el monitor serie como esta: 

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic06_SerialMonitor.png" alt="pir" width={600} height="auto"/>
</p>

<!--硬件连接正常工作与屏幕截图放一起-->

 
Es normal esperar un tiempo para conectarse a la red Wi-Fi y obtener información de ubicación de los satélites, tal como se muestra en la imagen anterior.  
Si esos mensajes de error persisten durante varios minutos, intenta reiniciar la placa XIAO con el pequeño botón "R" junto al puerto USB-C.

:::tip
El módulo L76K GNSS se utiliza en exteriores, por lo que debe colocarse en un lugar abierto y sin obstrucciones, de lo contrario, es posible que no se pueda obtener la información de ubicación.
:::

### Paso 3: Mostrar Datos en el Mapa  
Ahora el módulo L76K GNSS y SeeedStudio XIAO están obteniendo la ubicación del GNSS y enviando la información de latitud y longitud a Ubidots. Regresemos a Ubidots para verificarlo. Ve a [Ubidots](https://industrial.ubidots.com/app/devices), y verás un nuevo "dispositivo" que ha sido creado automáticamente por Ubidots, ya que enviamos nuevos datos a través del token. Haz clic en el nombre del dispositivo y verás que su ubicación se ha configurado automáticamente con los datos que hemos subido. 

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic08_DeviceInfo.png" alt="pir" width={600} height="auto"/>
</p>

A continuación, vamos a crear un mapa para mostrar el recorrido. Ve a "Datos" - "Tableros" en la parte superior, haz clic en el botón de menú (hamburguesa) junto a "Demo Dashboard", luego selecciona "CREAR" un nuevo tablero. Puedes modificar los ajustes de esta manera, o personalizarlos según tus necesidades. Recuerda "GUARDAR" el nuevo tablero.

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic10_NewDashboard.png" alt="pir" width={600} height="auto"/>
</p>

En el nuevo tablero, haz clic en "Añadir nuevo widget" y desplázate hacia abajo para encontrar "Mapa". Luego, selecciona "AÑADIR GRUPO DE MARCADORES", configura el dispositivo que verificamos anteriormente, y aparecerá el mapa. Mueve el cursor hacia la esquina inferior derecha del mapa para redimensionarlo y hacerlo más grande.

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic11_NewWidget.png" alt="pir" width={600} height="auto"/>
</p>

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic12_MapSetting.png" alt="pir" width={600} height="auto"/>
</p>

¡Hurra! ¡El camino conectado por los puntos de posición está mostrándose justo frente a nosotros! 

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic00_Track.png" alt="pir" width={600} height="auto"/>
</p>

:::tip
Si el módulo L76K GNSS permanece en una posición fija sin moverse, el mapa solo mostrará un punto en lugar de una trayectoria, obviamente. 
:::

## Enlaces de referencia
- [Ubicación GPS | Referencia de la API de Ubidots](https://docs.ubidots.com/reference/gps-location)

- [Crear widgets de mapas en Ubidots | Centro de ayuda de Ubidots](https://help.ubidots.com/en/articles/1712418-create-map-widgets-in-ubidots)

- [¿Cómo crear un mapa en tiempo real? | Centro de ayuda de Ubidots](https://help.ubidots.com/en/articles/693652-how-to-create-a-real-time-map)

- [Biblioteca Ubidots ESP32 en GitHub](https://github.com/ubidots/ubidots-esp32)

## Soporte técnico y discusión de productos

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>
<div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
