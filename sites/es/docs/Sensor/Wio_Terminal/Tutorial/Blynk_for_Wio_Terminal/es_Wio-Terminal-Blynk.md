---
title: Conectando a Blynk
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Wio-Terminal-Blynk/
slug: /es/Wio-Terminal-Blynk
last_update:
  date: 01/11/2022
  author: gunengyu
---
# Conectando Wio Terminal a Blynk

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/banner.gif" /></div>

Esta wiki introduce cómo usar el Wio Terminal con el software [**Blynk**](https://blynk.io/) para interactuar con Wi-Fi o Bluetooth. ¡Esto te permite usar Wio Terminal como el núcleo de un dispositivo IoT y poder controlar hardware desde teléfonos muy fácilmente!

- **¿Qué es Blynk?**

[**Blynk**](https://blynk.io/) es una nueva plataforma que te permite construir rápidamente interfaces para controlar y monitorear tus proyectos de hardware desde tu dispositivo iOS y Android. Después de descargar la aplicación Blynk, puedes crear un panel de proyecto y organizar botones, deslizadores, gráficos y otros widgets en la pantalla

## Hardware Requerido

- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- Teléfono Móvil
  - Descargar la aplicación Blynk desde App Store

## Comenzando

### Instalando la blynk-library

1. Visita los repositorios de [**blynk-library**](https://github.com/blynkkk/blynk-library) y descarga todo el repositorio a tu unidad local.

2. Ahora, la biblioteca puede ser instalada en el Arduino IDE. Abre el Arduino IDE, y haz clic en `sketch` -> `Include Library` -> `Add .ZIP Library`, y elige el archivo `blynk-library` que acabas de descargar.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

### Dependencias de Wi-Fi

Por ahora, el Wi-Fi y Bluetooth son **dos firmware separados** para Wio Terminal y **por lo tanto NO PUEDEN ser usados al mismo tiempo**.

>Nota: El nuevo firmware de Wi-Fi y Bluetooth funcionando juntos está en desarrollo y será lanzado muy pronto.

- Por favor sigue la **[Wiki de Resumen de Wi-Fi](https://wiki.seeedstudio.com/es/Wio-Terminal-Network-Overview/)** para subir el firmware de Wi-Fi a Wio Terminal.

- Por favor también **descarga e instala todas las Bibliotecas de Wi-Fi dependientes**.

### Dependencias de Bluetooth

- Por favor sigue la [**Wiki de Resumen de Bluetooth**](https://wiki.seeedstudio.com/es/Wio-Terminal-Bluetooth-Overview/) para subir el firmware de Bluetooth a Wio Terminal.

- Por favor también **descarga e instala todas las Bibliotecas de Bluetooth dependientes**.

## Configuración de la Aplicación Móvil Blynk

Una vez que hayas descargado la Aplicación Blynk.

- Abre la Aplicación.

- Haz clic en **New Project**:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/1.jpg" /></div>

- Llena tu **Project Name**, elige **Arduino UNO** como dispositivo, y selecciona **WiFi** o **Bluetooth** como tu Tipo de Conexión. Luego haz clic en Create Project:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/1.1.png" /></div>

- Ahora, **tendrás un token enviado al email con el que te registraste en Blynk**. Esto es necesario en los Sketches de Arduino más adelante.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/3.png" /></div>

## Ejemplos de Wi-Fi

Estos ejemplos están usando Wi-Fi para comunicarse entre Wio Terminal y la Aplicación Blynk:

### Conexión Simple de Wi-Fi

Este ejemplo simplemente se conecta a un Wi-Fi específico luego se conecta al Servidor Blynk:

- Reemplaza el **token** que fue enviado a tus emails por `auth`.

- Reemplaza el `SSID` y `Password` de tu red.

- Sube el sketch a Wio Terminal.

```cpp
#define BLYNK_PRINT Serial

#include <rpcWiFi.h>
#include <WiFiClient.h>
#include <BlynkSimpleWioTerminal.h>

// You should get Auth Token in the Blynk App.
// Go to the Project Settings (nut icon).
char auth[] = "YourToken";

// Your WiFi credentials.
// Set password to "" for open networks.
char ssid[] = "SSID";
char pass[] = "Password";

void setup()
{
  // Debug console
  Serial.begin(9600);

  Blynk.begin(auth, ssid, pass);
}

void loop()
{
  Blynk.run();
}
```

Una vez cargado, abre la aplicación Blynk desde tu teléfono y haz clic en el botón `play` en la parte superior derecha para activarlo. ¡Deberías poder ver que está conectado!

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/wifi.png" /></div>

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/4.png" /></div>

## Enviando Temperatura a Blynk

Este ejemplo es una demostración de envío de datos desde Wio Terminal al servidor de Blynk, que luego puede ser visualizado en la aplicación móvil.

- Reemplaza las credenciales WiFi y el token.

- Los datos de temperatura se envían al **Pin Virtual 0** (`V0`).

- Carga al Wio Terminal.

:::note
    En este ejemplo, los valores de temperatura se generan aleatoriamente.
:::

```cpp
#define BLYNK_PRINT Serial

#include <rpcWiFi.h>
#include <WiFiClient.h>
#include <BlynkSimpleWioTerminal.h>

// Your WiFi credentials.
const char* ssid = "SSID";
const char* pass = "Password";

// You should get Auth Token in the Blynk App.
// Go to the Project Settings (nut icon).
char auth[] = "YourToken";

BlynkTimer timer;

void sendTemperature() {
  // Generate random temperature value 10.0 to 30.0 (for example)
  float t = float(random(100, 300)) / 10;
  // Format: 1 decimal place, add ℃
  String str = String(t, 1) + "℃";
  // Send it to the server
  Blynk.virtualWrite(V0, str);
}


void setup() {
  // Debug console
  Serial.begin(9600);

  Blynk.begin(auth, ssid, pass);
  timer.setInterval(1000L, sendTemperature);
}

void loop() {
  Blynk.run();
  timer.run();
}
```

Ahora abre la aplicación Blynk desde tu teléfono móvil nuevamente.

- Desliza hacia la izquierda para sacar la caja de widgets y selecciona **Value Display**:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/step-1.png" /></div>

- Haz clic en el botón y configura el botón para asignarlo al **Pin Virtual 0**:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/step-3.png" /></div>

- Guarda las configuraciones y haz clic en el botón de reproducir en la parte superior derecha para activarlo. Y puedes ver los valores de temperatura en tu teléfono.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/step-4.png" /></div>

## Ejemplos de Bluetooth

Estos ejemplos utilizan Bluetooth para comunicarse entre Wio Terminal y la aplicación Blynk:

### Conexión Bluetooth Simple

Este es el ejemplo simple de usar el Bluetooth de Wio Terminal para conectar con el Bluetooth del teléfono móvil:

- Reemplaza tu token para `auth`.

- Sube a Wio Terminal.

```cpp
#define BLYNK_PRINT Serial
#define BLYNK_USE_DIRECT_CONNECT

#include <BlynkSimpleWioTerminal_BLE.h>
#include <BLEDevice.h>
#include <BLEServer.h>

// You should get Auth Token in the Blynk App.
// Go to the Project Settings (nut icon).
char auth[] = "YourToken";

void setup()
{
  // Debug console
  Serial.begin(9600);
  Serial.println("Waiting for connections...");
  Blynk.setDeviceName("Blynk");
  Blynk.begin(auth);
}

void loop()
{
  Blynk.run();
}
```

Ahora abre la aplicación Blynk y configura como sigue:

- Desliza hacia la izquierda para tener la Caja de Widgets y desplázate hacia abajo para encontrar el widget **BLE**:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/ble-1.jpg" /></div>

- Haz clic en el **widget BLE** y selecciona conectar con un dispositivo BLE llamado `Blynk`:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/ble-3.jpg" /></div>

- Una vez que BLE esté conectado, haz clic en el botón de reproducir para activar!

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/ble-4.jpg" /></div>

Ahora, Wio Terminal está conectado con Blynk usando Bluetooth!

### Controlando Tiras RGB Usando Blynk

Este ejemplo conecta una tira RGB a Wio Terminal y usa Blynk para controlar el color a mostrar!

<div align="center"><video width={560} height={315} controls>
    <source src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/RGB.mp4" type="video/mp4" />
  </video></div>

#### Instalar la Librería Adafruit_NeoPixel

1. Visita los repositorios de [Adafruit_NeoPixel](https://github.com/adafruit/Adafruit_NeoPixel) y descarga todo el repositorio a tu unidad local.

2. Ahora, la librería puede ser instalada en el Arduino IDE. Abre el Arduino IDE, y haz clic en `sketch` -> `Include Library` -> `Add .ZIP Library`, y elige el archivo `Adafruit_NeoPixel` que acabas de descargar.

---

- Configura el `PIN` y `NUMPIXELS` según tu entorno.
- Los valores RGB se leen desde la App Blynk y se asignan al **Pin Virtual 2(V2)**.
- Sube a Wio Terminal.

```cpp
#define BLYNK_PRINT Serial
#define BLYNK_USE_DIRECT_CONNECT

#include <BlynkSimpleWioTerminal_BLE.h>
#include <BLEDevice.h>
#include <BLEServer.h>
#include <Adafruit_NeoPixel.h>

#include <TFT_eSPI.h> // Hardware-specific library
TFT_eSPI tft = TFT_eSPI();       // Invoke custom library

#define PIN 0
#define NUMPIXELS 20
#define BLYNK_PRINT Serial
Adafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

// You should get Auth Token in the Blynk App.
// Go to the Project Settings (nut icon).
char auth[] = "YourToken";

BLYNK_WRITE(V2)
{
  int R = param[0].asInt();
  int G = param[1].asInt();
  int B = param[2].asInt();
  tft.fillScreen(tft.color565(R, G, B));
  for (int i = 0; i < NUMPIXELS; i++) {
    pixels.setPixelColor(i, pixels.Color(R, G, B));
    pixels.show();
  }
}

void setup() {
  // Debug console
  Serial.begin(9600);
  Serial.println("Waiting for connections...");
  Blynk.setDeviceName("Blynk");

  Blynk.begin(auth);
  
  tft.begin();
  tft.fillScreen(TFT_BLACK);
  pixels.begin();
}

void loop() {
  Blynk.run();
}
```

Abre la aplicación Blynk y configura como sigue:

- Desliza hacia la izquierda para tener la Caja de Widgets y desplázate hacia abajo para encontrar el widget **zeRGBa**:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/rgb-1.png" /></div>

- Haz clic en el widget zeRGBa y configura como sigue. Establece en **Merge** Output y asigna al **Pin Virtual 2 (V2)** y establece que los valores vayan de **0 a 255**.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/rgb-2.png" /></div>

- Asegúrate de que el widget BLE esté conectado primero y haz clic en el botón Play para ir en vivo. Puedes simplemente cambiar el color RGB de la tira LED arrastrando el color en Blynk.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/rgb-result.png" /></div>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
