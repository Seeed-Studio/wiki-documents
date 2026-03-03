---
description: Inicio Rápido con Blynk
title: Uso de Blynk
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Quick-Start-to-using-Blynk
last_update:
  date: 1/13/2023
  author: shuxu hu
---
# Inicio Rápido para Usar Blynk

En este tutorial, proporcionaremos una guía rápida sobre cómo configurar el módulo Grove Vision AI con Wio Terminal para cargar los datos de detección como conteo de cabezas y valor de confianza de detección vía Wifi, y luego utilizar el panel de control de la aplicación móvil Blynk para visualizar la salida de detección del módulo Grove Vision AI.

## Materiales Requeridos

<table align="center">
  <tbody><tr>
      <td align="center"><div align="center"><img width={210} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WT-GROVE.jpeg" /></div></td>
      <td align="center"><div align="center"><img width={170} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/camera.jpg" /></div></td>
    </tr>
    <tr>
      <td align="center">Wio Terminal</td>
      <td align="center">Módulo Grove Vision AI</td>
    </tr>
  </tbody></table>

## Preparación Preliminar

### Conexión

En esta rutina, necesitamos conectar el Módulo Vision AI en el lado izquierdo según el diagrama a continuación.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/K1100/vi.jpg" /></div>

### Preparación del software

**Paso 1.** Necesitas instalar un Software de Arduino.

<div>
  <p style={{}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank" /></p><div align="center"><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></a></div><p />
</div>

**Paso 2.** Inicia la aplicación Arduino.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" /></div>

**Paso 3.** Añade Wio Terminal al IDE de Arduino.

Abre tu IDE de Arduino, haz clic en `File > Preferences`, y copia la siguiente url en Additional Boards Manager URLs:

```
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png" /></div>

Haz clic en `Tools > Board > Board Manager` y busca **Wio Terminal** en el Administrador de Placas.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/addBoard.png" /></div>

**Paso 4.** Selecciona tu placa y puerto

Necesitarás seleccionar la entrada en el menú `Tools > Board` que corresponda a tu Arduino. Selecciona el **Wio Terminal**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/selectBoard.png" /></div>

Selecciona el dispositivo serie de la placa Wio Terminal desde el menú `Tools -> Port`. Es probable que sea COM3 o superior (COM1 y COM2 generalmente están reservados para puertos serie de hardware). Para averiguarlo, puedes desconectar tu placa Wio Terminal y volver a abrir el menú; la entrada que desaparezca debería ser la placa Arduino. Vuelve a conectar la placa y selecciona ese puerto serie.

:::tip
Para usuarios de Mac, será algo como `/dev/cu.usbmodem141401`.

Si no puedes subir el sketch, principalmente es porque Arduino IDE no pudo poner el Wio Terminal en modo bootloader. (Porque el MCU se detuvo o tu programa está manejando USB) La solución es poner tu Wio Terminal en modo bootloader manualmente.
:::
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" /></div>

## Guía Paso a Paso

### Paso 1. Crear cuenta

Por favor ve al [Sitio Web oficial de Blynk](https://blynk.io/)，y crea una cuenta. Se te pedirá tu cuenta de correo electrónico para registrarte, y por favor revisa tu correo para verificar y confirmar para completar el registro de tu cuenta.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/18.png" /></div>

### Paso 2. Agregar Nueva Plantilla

Una vez que inicies sesión en la consola de Blynk, por favor cancela y omite la ventana emergente del asistente de inicio y haz clic en el botón **New Template** para crear una nueva plantilla.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/1.png" /></div>

Sigue el asistente de configuración, en la ventana emergente, nombra tu plantilla y elige **Seeed Wio Terminal** como **HARDWARE**, **WiFi** para **CONNECTION TYPE**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/K1101/2.png" /></div>

Después de hacer clic en done, deberías ver la página de la plantilla y para confirmar toda la información sobre la nueva plantilla por favor haz clic en save en la esquina superior derecha.

### Paso 3. Agregar Nuevo Dispositivo

Después de agregar la plantilla del panel de control, haz clic en la pestaña My devices, seguido de hacer clic en el botón **New Device**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/4.png" /></div>

Luego por favor elige **From termplate**.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1101/5.png" /></div>

Por favor selecciona el nombre de la plantilla creada desde el **Paso 2** para la lista desplegable TEMPLATE, en este caso se llama **wio terminal vision ai**, y escribe un nombre de dispositivo en el cuadro de diálogo DEVICE NAME.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/K1101/6.png" /></div>

Después de esto la información del nuevo dispositivo debería aparecer en un panel emergente, deberías ver Template ID, Device Name y Auth Token, por favor haz clic en **Copy to clipboard** para copiar y guardar la información del encabezado para uso posterior.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/7.png" /></div>

### Paso 4. Agregar la biblioteca de Arduino necesaria  

Necesitamos agregar la biblioteca de Arduino necesaria para utilizar el módulo Grove Vision AI con Wio Terminal, por favor haz clic en el icono de abajo y descarga la biblioteca de Arduino Grove Vision AI.

<div>
  <p style={{}}><a href="https://files.seeedstudio.com/wiki/K1101/libraries.zip" target="_blank" /></p><div align="center"><a href="https://files.seeedstudio.com/wiki/K1101/libraries.zip" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

Después de descargar exitosamente el archivo zip de la biblioteca, por favor descomprime los archivos en la siguiente ruta:

- En Windows：`C:\Users\{User Name}\Documents\Arduino\libraries`

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/36.png" /></div>

- En Mac：`/Users/{User Name}/Documents/Arduino/libraries`

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/37.png" /></div>

### Paso 5. Preparar el código del firmware

Podemos generar el código de plantilla base para conectar Wio Terminal al servidor Blynk desde [aquí](https://examples.blynk.cc/?board=Wio%20Terminal&shield=rpcWiFi&example=GettingStarted%2FPushData&auth=an8FkwZgCjShpV5NGCW-Lxl1qohRigeZ&dev=Quickstart%20Device&tmpl=TMPLx3C44oO0).

También hemos preparado el código de muestra completo para esta guía de inicio rápido, como se muestra a continuación:

```c
// Template ID, Device Name and Auth Token are provided by the Blynk.Cloud
// See the Device Info tab, or Template settings
#define BLYNK_TEMPLATE_ID ""
#define BLYNK_DEVICE_NAME ""
#define BLYNK_AUTH_TOKEN ""

// Your WiFi credentials.
// Set password to "" for open networks.
char ssid[] = "";
char pass[] = "";

// Comment this out to disable prints and save space
#define BLYNK_PRINT Serial

#include <rpcWiFi.h>
#include <WiFiClient.h>
#include <BlynkSimpleWioTerminal.h>
#include "Seeed_Arduino_GroveAI.h"
#include <Wire.h>

GroveAI ai(Wire);
uint8_t state = 0;

char auth[] = BLYNK_AUTH_TOKEN;

BlynkTimer timer;

// This function sends Arduino's up time every second to Virtual Pin (5).
// In the app, Widget's reading frequency should be set to PUSH. This means
// that you define how often to send data to Blynk App.
void myTimerEvent()
{
  // You can send any value at any time.
  // Please don't send more that 10 values per second.
  if (state == 1)
  {
    if (ai.invoke()) // begin invoke
    {
      while (1) // wait for invoking finished
      {
        CMD_STATE_T ret = ai.state(); 
        if (ret == CMD_STATE_IDLE)
        {
          break;
        }
        delay(20);
      }
     uint8_t len = ai.get_result_len(); // receive how many people detect
     if(len)
     {
       Serial.print("Number of people: ");
       Serial.println(len);
       object_detection_t data;       //get data

       for (int i = 0; i < len; i++)
       {
          Serial.println("result:detected");
          Serial.print("Detecting and calculating: ");
          Serial.println(i+1);
          ai.get_result(i, (uint8_t*)&data, sizeof(object_detection_t)); //get result
          Serial.print("confidence:");
          Serial.print(data.confidence);
          Serial.println();
          Blynk.virtualWrite(V5, data.confidence);
          Blynk.virtualWrite(V4, len);
        }
     }
     else
     {
       Serial.println("No identification");
       Blynk.virtualWrite(V4, 0);
       Blynk.virtualWrite(V5, 0);
     }
    }
    else
    {
      delay(1000);
      Serial.println("Invoke Failed.");
    }
  }
  else
  {
    state == 0;
  }
}

void setup()
{
  // Debug console
  Serial.begin(115200);

  Wire.begin();
  
  Serial.println("begin");
  if (ai.begin(ALGO_OBJECT_DETECTION, MODEL_EXT_INDEX_1)) // Object detection and pre-trained model 1
  {
    Serial.print("Version: ");
    Serial.println(ai.version());
    Serial.print("ID: ");
    Serial.println( ai.id());
    Serial.print("Algo: ");
    Serial.println( ai.algo());
    Serial.print("Model: ");
    Serial.println(ai.model());
    Serial.print("Confidence: ");
    Serial.println(ai.confidence());
    state = 1;
  }
  else
  {
    Serial.println("Algo begin failed.");
  }

  Blynk.begin(auth, ssid, pass);
  // You can also specify server:
  //Blynk.begin(auth, ssid, pass, "blynk.cloud", 80);
  //Blynk.begin(auth, ssid, pass, IPAddress(192,168,1,100), 8080);

  // Setup a function to be called every second
  timer.setInterval(1000L, myTimerEvent);
}

void loop()
{
  Blynk.run();
  timer.run(); // Initiates BlynkTimer
}
```

Necesitas completar los encabezados necesarios al comienzo del código de ejemplo anterior para poder conectar tu Wio Terminal a tu Wifi y luego enviar datos al servidor de Blynk.

```c
#define BLYNK_TEMPLATE_ID ""
#define BLYNK_DEVICE_NAME ""
#define BLYNK_AUTH_TOKEN ""

char ssid[] = "";
char pass[] = "";
```

Las primeras 3 líneas de definición son la información del dispositivo Blynk que se genera automáticamente desde el proceso del **Paso 3**, simplemente copia y reemplaza las primeras 3 líneas.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/7.png" /></div>

Seguido por las variables **ssid[]** y **pass[]**, por favor completa tu ssid de Wifi y contraseña a la que tu Wio Terminal se va a conectar respectivamente. ej:

```c
#define BLYNK_TEMPLATE_ID           "TMPLx3C44oO0"
#define BLYNK_DEVICE_NAME           "Quickstart Device"
#define BLYNK_AUTH_TOKEN            "an8FkwZgCjShpV5NGCW-Lxl1qohRigeZ"

char ssid[] = "SeeedStudio";
char pass[] = "yyds2022";
```

:::note
Recomendamos usar tu Punto de Acceso Personal para probar esta guía de inicio rápido, ya que es más estable comparado con la red pública desconocida y compleja.
:::

### Paso 6. Configurar el Panel Web de Blynk

Por favor regresa a la consola de Blynk, podemos configurar algunos widgets del panel según el código del firmware anterior. Primero, necesitamos seleccionar la plantilla que hemos recreado, y luego hacer clic en el botón **Edit** ubicado en la esquina superior derecha.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/19.png" /></div>

Luego haz clic en la pestaña **Datastreams** para configurar el flujo de datos, después haz clic en **New Datastream** seguido de seleccionar **Virtual Pin** para configurar la fuente de datos entrantes.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/11.png" /></div>

En el **Paso 5**, usamos el pin virtual 4 y el pin virtual 5 para enviar los datos de detección del módulo Grove Vision AI como el conteo de cabezas y los datos del porcentaje de confianza de inferencia respectivamente.

```c
Blynk.virtualWrite(V5, data.confidence); #confidence
Blynk.virtualWrite(V4, len); #head count
```

Por lo tanto, necesitamos configurar dos **Pin Virtual** en la pestaña Datastreams de Blynk Console V5 y V4 respectivamente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/20.png" /></div>

En la configuración del **Panel Web**, podríamos definir el diseño de información, en este caso agregamos 3 widgets de visualización más comunes, como **Label**, **Gauge** y **Chart**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/21.png" /></div>

Puedes configurar los datos de visualización haciendo clic en el botón de engranaje en la parte superior de cada widget que aparecerá al pasar el cursor sobre el widget.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/22.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/23.png" /></div>

Después de configurar el diseño de información de datos, haz clic en el botón **Save And Apply** en la esquina superior derecha.

### Paso 7. Subir el código y observar los datos

Finalmente, por favor usa el cable grove para conectar el Módulo Grove Vision AI y el puerto Grove del lado izquierdo de Wio Terminal, luego sube el firmware actualizado después del paso 7, después regresa a la consola del dispositivo Blynk.
Deberías ver el valor de conteo de cabezas y el valor de confianza de detección actualizarse cuando el módulo Grove Vision AI tenga una detección válida.
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/17.png" /></div>

## Usar la aplicación móvil Blynk para observar datos en vivo

Blynk no solo soporta el panel de la consola web para mostrar los datos del sensor en vivo, sino que también soporta ver los datos del sensor en su aplicación móvil, sin embargo necesitas completar los pasos anteriores para poder ver los datos desde la aplicación móvil.

### Paso 1. Descargar la APP Blynk

- Si estás usando dispositivos IOS, por favor descarga [Blynk IoT](https://play.google.com/store/apps/details?id=cloud.blynk).

- Si estás usando dispositivos Android, por favor descarga [Blynk IoT NEW](https://apps.apple.com/cn/app/blynk-iot-new/id1559317868).

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1101/25.png" /></div>

### Paso 2. Iniciar sesión en tu cuenta con la APP Blynk

Una vez que hayas descargado e instalado la App Blynk, por favor abre la APP y usa la misma cuenta que has creado para la consola web para iniciar sesión, así las plantillas que has creado a través de los pasos anteriores se sincronizarán con la aplicación móvil.

<div align="center"><img width={250} src="https://files.seeedstudio.com/wiki/K1101/26.png" /></div>

### Paso 3. Configurar el panel de datos en la aplicación móvil Blynk

Una vez que hayas iniciado sesión en la APP, por favor desliza hacia la derecha y toca **My Profile** para ir a la vista de configuración del perfil, luego asegúrate de que el **Developer Mode** esté habilitado.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1101/29.png" /></div>

Luego regresa a la página principal, y toca el ícono de llave inglesa en la esquina superior derecha para entrar a la vista de configuración de plantilla.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/K1101/30.png" /></div>

Aquí podrías ver las plantillas que has creado antes y también la plantilla de muestra de la APP Blynk.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/K1101/31.png" /></div>

Ahora por favor toca la plantilla Seeed Wio Terminal para entrar a la configuración para configurar la visualización del widget móvil, una vez que estés en la vista de configuración de plantilla, por favor toca el botón **+** en la esquina superior derecha, deberías ver la ventana de caja de widget para agregar el widget.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/K1101/32.png" /></div>

El paso de configuración aquí debería ser similar a la configuración para la consola web, elegimos un widget **Value Display** y un widget **Labeled Value**, luego los renombramos y elegimos el flujo de datos correcto (pin virtual V4 y V5) en consecuencia, así los datos de detección recolectados por Wio Terminal del módulo Grove Vision AI deberían sincronizarse y actualizarse tanto en la consola web como en la aplicación móvil continuamente.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/K1101/33.png" /></div>

### Paso 4. Subir el nuevo código y observar el resultado

Dado que hemos subido el nuevo código al Wio Terminal, después de que el Wio Terminal se conecte a WIFI, el dispositivo Wio Terminal conectado debería aparecer en la aplicación móvil Blynk, como se muestra a continuación.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/K1101/34.png" /></div>

Deberías observar los datos del sensor simplemente tocando en el dispositivo mostrado en la aplicación móvil Blynk.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/42.jpg" /></div>

## Declaración

- La Marca LoRa® es una marca comercial de Semtech Corporation o sus subsidiarias.
- LoRaWAN® es una marca usada bajo licencia de LoRa Alliance®.
