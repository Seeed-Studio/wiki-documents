---
title: Seguimiento de Ruta L76K en Ubidots
description: Conectando el Módulo GNSS L76K y SeeedStudio XIAO a Ubidots para Seguimiento de Ruta de Ubicación en un Mapa
keywords: 
  - XIAO
  - Expansion Boards for XIAO
  - GPS Module for XIAO
  - L76K Path Tracking on Ubidots
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/L76K_Path_Tracking_on_Ubidots
last_update: 
  date: 03/07/2024
  author: Harrison Xu
---


# Conectando el Módulo GNSS L76K y SeeedStudio XIAO a Ubidots para Seguimiento de Ruta de Ubicación en un Mapa

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic00_Track.png" alt="pir" width={600} height="auto"/>
</p>

## Introducción
Después de [Comenzar con el Módulo GNSS L76K para SeeedStudio XIAO](https://wiki.seeedstudio.com/es/get_start_l76k_gnss/), es posible que desees usar el módulo GNSS L76K para localizar un objeto y mostrar la ruta en un mapa. Para este propósito, podemos lograrlo combinando la placa de desarrollo SeeedStudio XIAO y la plataforma de datos IoT Ubidots.

[Ubidots](https://ubidots.com/) es una plataforma de desarrollo IoT de código bajo para ingenieros y desarrolladores sin el tiempo o la energía para construir una aplicación IoT completa y lista para producción por sí mismos. Desde APIs amigables para dispositivos hasta una interfaz de usuario limpia para usuarios finales, Ubidots proporciona los bloques de construcción esenciales para llevarte más rápido al mercado, sin tener que contratar un equipo costoso de ingenieros para desarrollar y mantener una solución personalizada.

### Características
- Cargar datos de ubicación en tiempo real (latitud y longitud) cuando está conectado a Wi-Fi
- Mostrar la ruta conectada por puntos de posición en un mapa

## Comenzando
### Paso 1: Obtener Token de Ubidots
Primero, abre https://ubidots.com en tu navegador, luego regístrate para obtener una cuenta. Confirma tu correo electrónico e inicia sesión en la consola de Ubidots.

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic02_SignUp.png" alt="pir" width={600} height="auto"/>
</p>

Haz clic en tu avatar en la esquina - "My Profile", desplázate hacia abajo y cambia los "Decimal places" de 2 a 6 para la precisión de latitud y longitud.

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic04_Setting.png" alt="pir" width={600} height="auto"/>
</p>

Luego ve a "API Credentials" en la izquierda, copia el token (**NO la API Key**) para uso posterior.

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic05_Token.png" alt="pir" width={600} height="auto"/>
</p>

### Paso 2: Cargar Código a XIAO
Conecta la placa de desarrollo SeeedStudio XIAO (Aquí usamos SeeedStudio XIAO ESP32S3 como ejemplo), el módulo GNSS L76K, la antena GNSS, la antena Wi-Fi todos juntos y conéctalos a tu computadora.

:::danger **Advertencia**
Por favor presta especial atención a la dirección de instalación del módulo, no lo conectes al revés, de lo contrario es probable que quemes el módulo o XIAO.
:::

A continuación, iniciemos el IDE de Arduino. Recuerda agregar las librerías `EspSoftwareSerial` y `TinyGPSPlus` en el administrador de librerías, descarga la [Librería Ubidots ESP32](https://github.com/ubidots/ubidots-esp32) y agrégala también.

Selecciona la placa y puerto correspondientes, luego pega el siguiente código: 

```cpp
#include <SoftwareSerial.h>
#include <TinyGPSPlus.h>
#include <WiFi.h>
#include <Ubidots.h>

static const int RXPin = D7, TXPin = D6;
static const uint32_t GPSBaud = 9600;
const char WIFI_SSID[]     = "INPUT YOUR WIFI NAME HERE";
const char WIFI_PASS[]     = "INPUT YOUR WIFI PASSWORD HERE";
const char UBIDOTS_TOKEN[] = "INPUT YOUR UBIDOTS TOKEN HERE";

SoftwareSerial MySerial(RXPin, TXPin);
TinyGPSPlus gps;
Ubidots ubidots(UBIDOTS_TOKEN, UBI_UDP);
double lat;
double lng;

void setup() {
  Serial.begin(115200);
  MySerial.begin(GPSBaud);
  ubidots.setDebug(true);    // For observing Ubidots uploading log. You can also change it to "false" for a more simplified serial monitor.
  Serial.println("\nTinyGPSPlus library version: " + String(TinyGPSPlus::libraryVersion()));

  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  while (WiFi.status() != 3) {
    WiFi.begin(WIFI_SSID, WIFI_PASS);
    Serial.println(WiFi.status());
    delay(5000);
  }

  /*
    WL_NO_SHIELD        = 255,    // For compatibility with WiFi Shield library
    WL_IDLE_STATUS      = 0,
    WL_NO_SSID_AVAIL    = 1,
    WL_SCAN_COMPLETED   = 2,
    WL_CONNECTED        = 3,
    WL_CONNECT_FAILED   = 4,
    WL_CONNECTION_LOST  = 5,
    WL_DISCONNECTED     = 6
  */

  Serial.println("WiFi is connected!");
}

void loop() {
  while (MySerial.available() > 0) {
    if (gps.encode(MySerial.read())) {
      getLocation();
      sendToUbidots();
      delay(10 * 1000);  // Change the parameter here to modify the interval of getting and uploading location.
    }
  }

  if (millis() > 5000 && gps.charsProcessed() < 10) {
    Serial.println("No GPS detected, please check wiring.");
  }
}

void getLocation() {
  if (gps.location.isValid()) {
    lat = gps.location.lat();
    lng = gps.location.lng();

    Serial.print("Location: ");
    Serial.print(gps.location.lat(), 6);
    Serial.print(", ");
    Serial.print(gps.location.lng(), 6);
    Serial.println();
  } else {
    Serial.println("Unable to get location currently");
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
      Serial.println("Values sent");
    } else {
      Serial.println("Values not sent");
    }
    free(context);
  }
}
```

Sube el código a la placa, y pronto verás alguna salida en el monitor serie como esta:

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic06_SerialMonitor.png" alt="pir" width={600} height="auto"/>
</p>

<!--硬件连接正常工作与屏幕截图放一起-->

Es normal esperar algo de tiempo para conectarse a la red Wi-Fi y obtener información de ubicación de los satélites, tal como muestra la imagen anterior. Si esas salidas de error duran varios minutos, intenta reiniciar la placa XIAO con el pequeño botón "R" al lado del puerto USB-C.

:::tip
El Módulo GNSS L76K se usa en exteriores, así que por favor colócalo en un lugar abierto sin obstrucciones, de lo contrario la información de ubicación podría no obtenerse.
:::

### Paso 3: Mostrar Datos en el Mapa
Ahora el Módulo GNSS L76K y SeeedStudio XIAO están obteniendo ubicación del GNSS y enviando información de latitud y longitud a Ubidots. Regresemos a Ubidots y revisémoslo. Ve a https://industrial.ubidots.com/app/devices, y hay un nuevo "dispositivo" que ha sido creado automáticamente por Ubidots desde que enviamos nuevos datos a través del token. Haz clic en el nombre del dispositivo, puedes ver que la ubicación de este dispositivo se establece automáticamente como los datos que subimos.

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic08_DeviceInfo.png" alt="pir" width={600} height="auto"/>
</p>

A continuación, creemos un mapa para mostrar la trayectoria. Ve a "Data" - "Dashboards" en la parte superior, presiona el botón de menú hamburguesa al lado de "Demo Dashboard", luego "CREATE" un nuevo dashboard. Puedes modificar la configuración como esta, o personalizar según tu propia necesidad. Recuerda "SAVE" el nuevo dashboard.

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic10_NewDashboard.png" alt="pir" width={600} height="auto"/>
</p>

En el nuevo dashboard, presiona "Add new widget" y desplázate hacia abajo para encontrar "Map". "ADD MARKER GROUP", establece el dispositivo que revisamos hace un momento, y el mapa aparecerá. Mueve tu cursor a la esquina inferior derecha del mapa para redimensionarlo más grande.

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic11_NewWidget.png" alt="pir" width={600} height="auto"/>
</p>

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic12_MapSetting.png" alt="pir" width={600} height="auto"/>
</p>

¡Hurra! ¡La ruta conectada por puntos de posición se está mostrando justo frente a nosotros!

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic00_Track.png" alt="pir" width={600} height="auto"/>
</p>

:::tip
Si el Módulo GNSS L76K permanece en una posición fija sin moverse, el mapa solo mostrará un punto en lugar de una ruta, obviamente.
:::

## Enlaces de Referencia
- [GPS Location | Ubidots API Reference](https://docs.ubidots.com/reference/gps-location)

- [Create Map Widgets in Ubidots | Ubidots Help Center](https://help.ubidots.com/en/articles/1712418-create-map-widgets-in-ubidots)

- [How to create a real-time map? | Ubidots Help Center](https://help.ubidots.com/en/articles/693652-how-to-create-a-real-time-map)

- [Ubidots ESP32 Library on GitHub](https://github.com/ubidots/ubidots-esp32)

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
