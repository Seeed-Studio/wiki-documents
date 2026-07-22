---
description: Comenzar con Wio Tracker L1 Serie
title: Comenzar con Wio Tracker L1
keywords:
  - Meshtastic
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-l1.webp
slug: /get_started_with_meshtastic_wio_tracker_l1
sku: 114993648,114993649,114993653,114993654
sidebar_position: 2
last_update:
  date: 3/13/2026
  author: Michelle Huang
createdAt: '2025-06-17'
updatedAt: '2026-07-09'
url: https://wiki.seeedstudio.com/es/get_started_with_meshtastic_wio_tracker_l1/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

:::tip
La Serie Wio Tracker L1 comparte el mismo marco de hardware. Aunque la guía en video es para el L1 Pro, es aplicable a todos los demás productos de la serie L1.
:::

## Tutorial en video

### Parte 1 Unboxing

Cuando utilices los modelos L1, L1 Lite o L1 E-Ink por primera vez, después de conectarlos a la fuente de alimentación USB, levanta el interruptor de encendido hacia arriba para encenderlos.

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/Wi_YmE76YcY?si=Ad-pUhle5X9QppPR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### Parte 2 Flasheo de firmware

:::caution note
Por favor, `don't use NRF-OTA` para actualizar el firmware, puede hacer que el dispositivo quede completamente inservible.
:::

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/hcjai4J1894?si=S_jaEfXVThWXscVJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### Parte 3 Uso del dispositivo

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/Q97w2ompPtI?si=yLbAgE4cBbT6NbHS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

#### Joystick de cuatro direcciones

El `latest Alpha firmware` del firmware L1 E-Ink actualmente es compatible con el joystick de cuatro direcciones. Si quieres usar el joystick, por favor [haz clic aquí](https://wiki.seeedstudio.com/es/get_started_with_meshtastic_wio_tracker_l1/#Parte-2-Flasheo-de-firmware) para actualizar el firmware. 

#### Barra de menú

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/Menu.jpeg" alt="pir" width={600} height="auto" /></p>
Solo el firmware 2.7 es compatible con la barra de menú. Si quieres usar la barra de menú, sigue el [Tutorial de flasheo de firmware](https://wiki.seeedstudio.com/es/get_started_with_meshtastic_wio_tracker_l1/#Parte-2-Flasheo-de-firmware) para actualizar el firmware.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/version.png" alt="pir" width={600} height="auto" /></p>

#### Zumbador

Si quieres encender o apagar el zumbador, primero `update the firmware` a la versión `2.7`. Porque solo el firmware de la versión 2.7 tiene la barra de menú.

- Encender el zumbador
Setting (icon shaped like the gear) -> Notification -> Buzzer Action -> Disable
- Apagar el zumbador
Setting (icon shaped like the gear) -> Notification -> Buzzer Action -> All enabled

<div class="table-center">
<iframe width="350" height="450" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/buzzer%20_turnonturnoff.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### Parte 4 Conexión con el teléfono

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/OFtUwN3z0tI?si=9zr3j-hLuoj0-CXi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### Parte 5 Diferentes estados

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/eZa8kfUD2e4?si=3Fe_30obcercIXXO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Primeros pasos

:::danger note
Cuando el dispositivo se encuentre en los estados siguientes, por favor no lo reinicies ni lo apagues manualmente. De lo contrario, el dispositivo puede quedar inservible.

1. No ha finalizado el proceso de transmisión de mensajes
2. Está siendo configurado
:::

### Flashear firmware

:::caution note
Por favor, `don't use NRF-OTA` para actualizar el firmware, puede hacer que el dispositivo quede completamente inservible.
:::

Visita [Meshtastic Web Flasher](https://flasher.meshtastic.org/).

Para L1, L1 Lite y L1 Pro, selecciona el dispositivo de destino `Seeed Wio Tracker L1` y elige el firmware más reciente, luego haz clic en `Flash`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/select-wio-tracker.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-wio-tracker.png" alt="pir" width={800} height="auto" /></p>

Para L1 E-Ink, selecciona el dispositivo de destino `Seeed Wio Tracker L1 E-Ink` y elige el firmware más reciente, luego haz clic en `Flash`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/img/E-Ink%20Flash%201.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src=" https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/img/E-Ink%20Flash%202.png" alt="pir" width={800} height="auto" /></p>

Enciende el dispositivo, haz clic en `Enter DFU Mode`, aparecerá un puerto serie llamado `Tracker L1`, haz clic y conéctalo, y debería mostrarse una unidad llamada `Tracker L1`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/52840-connect.png" alt="pir" width={800} height="auto" /></p>

Arrastra el archivo UF2 a la unidad DFU. El firmware debería flashearse después de que el archivo se haya copiado y el dispositivo se reinicie.

### Encender el dispositivo

Conecta el cable USB para activar el dispositivo. Levanta el interruptor de encendido hacia arriba para encenderlo.

:::tip
Si el dispositivo no responde cuando presionas el botón, por favor cárgalo primero. No uses un cargador de carga rápida.
:::

### Conectar mediante la app

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="App de iOS">

- Selecciona el dispositivo de destino en el panel de Bluetooth.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- Introduce el código que aparece en la pantalla y luego haz clic en `OK` para conectar el dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="App de Android">

- Haz clic en `+` y elige el dispositivo de destino.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>

- Introduce el código (el código predeterminado es `123456`) y luego haz clic en `OK` para conectar el dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

### Configurar el LoRa

Para empezar a comunicarte a través de la malla, debes establecer tu región. Este ajuste controla qué rango de frecuencias utiliza tu dispositivo y debe configurarse de acuerdo con tu ubicación regional.

<Tabs>
<TabItem value="ios" label="App de iOS">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="App de Android">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-region.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

**Lista de regiones**

|**Código de región**|**Descripción**|**Rango de frecuencia (MHz)**|**Ciclo de trabajo (%)**|**Límite de potencia (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|Sin establecer|N/A|N/A|N/A|
|US|Estados Unidos|902.0 - 928.0|100|30|
|EU_868|Unión Europea 868MHz|869.4 - 869.65|10|27|

Consulta [LoRa Region by Country](https://meshtastic.org/docs/configuration/region-by-country/) para obtener una lista más completa.

:::info
**EU_868** debe cumplir con una limitación de ciclo de trabajo por hora del 10%, calculada cada minuto sobre una base móvil de 1 hora. Tu dispositivo dejará de transmitir si alcanzas este límite, hasta que se le permita de nuevo.
:::

Ahora que has configurado la región LoRa en tu dispositivo, puedes continuar configurando cualquier [LoRa Configs](https://meshtastic.org/docs/configuration/radio/lora/) para adaptarlo a tus necesidades.

## Configuración avanzada

### Conectar mediante el sitio web

Si quieres enviar mensajes de texto y comunicarte con otros nodos en el sitio web, ahora puedes conectar el dispositivo al [sitio web de Meshtastic](https://client.meshtastic.org/messages/broadcast/0).

  Paso 1: Abrir el sitio web

[Haz clic aquí](https://client.meshtastic.org/messages/broadcast/0) para ir al sitio web.
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshtasticWeb.png" alt="pir" width={1000} height="auto" /></p>

  Paso 2: Añadir el nuevo dispositivo

    Haz clic en "+ New Connection". 

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteAddNewConnection.png" alt="pir" width={600} height="auto" /></p>

    Hay dos formas de conectar. Puedes elegir el método que prefieras.

 Método 1: Vía Bluetooth

    Elige el método Bluetooth. Elige el ID del dispositivo en la ventana emergente.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshWebBluetooth.png" alt="pir" width={1000} height="auto" /></p>

 Método 2: Vía serie

    Elige el método serie. Abre el administrador de dispositivos para ver a qué puerto está conectado el dispositivo. Elige ese puerto en la ventana emergente.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteSerialConnection.png" alt="pir" width={1000} height="auto" /></p>

    Tu dispositivo se mostrará en la lista. Haz clic para conectar. Si la conexión tiene éxito, podrás ver el estado del dispositivo directamente en el sitio web.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteConnectionSuccess.png" alt="pir" width={300} height="auto" /></p>

### Configurar el GPS

Por favor, activa el GPS. Puedes ajustar el intervalo de actualización y el intervalo de transmisión para obtener información de ubicación más actualizada.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshGPS.png" alt="pir" width={500} height="auto" /></p>

Para IOS, por favor activa la `Accurate Location`. De lo contrario, el posicionamiento puede desviarse.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSAccurateLocation.jpg" alt="pir" width={200} height="auto" /></p>

### Conexión de sensores

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/SensorConnection.jpg" alt="pir" width={700} height="auto" /></p>

Puedes añadir sensores al dispositivo a través de la interfaz Grove. Los siguientes sensores han sido verificados como compatibles con la interfaz Grove del dispositivo.

<table>
  <tr>
    <th colspan="2">Tipo de sensor</th>
    <th colspan="1">Modelo de sensor</th>
  </tr>
  <tr>
    <td rowspan="4">Sensor ambiental</td>
    <td>Presión</td>
    <td>BMP085</td>
  </tr>
  <tr>
    <td>Temperatura</td>
    <td>[MCP9808](https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temperature-Sensor-MCP9808.html) 、PCT2075</td>
  </tr>
  <tr>
    <td>Temperatura y humedad</td>
    <td>[SHT31](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html)/SHTC3/[SHT4X](https://www.seeedstudio.com/Grove-Temp-Humi-Sensor-SHT40-p-5384.html)、AHT10</td>
  </tr>
  <tr>
    <td>Temperatura, humedad y presión</td>
    <td>[BME280](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html)</td>
  </tr>
  <tr>
    <td rowspan="2">Otros</td>
    <td>Frecuencia cardíaca y SpO₂</td>
    <td>[MAX30102](https://www.seeedstudio.com/MAXREFDES117-HEART-RATE-AND-PULSE-OXIMETRY-MONITOR-p-2762.html)</td>
  </tr>
  <tr>
    <td>Teclado I2C</td>
    <td>CardKB</td>
  </tr>
</table>

<Tabs>

<TabItem value="ios" label="IOS">

- Activa Telemetry para obtener datos del sensor. Si quieres mostrar los datos del sensor en la pantalla OLED, activa `on screen`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/TelemetryIOS.png" alt="pir" width={900} height="auto" /></p>

</TabItem>

<TabItem value="Android" label="Android">

- Activa Telemetry para obtener datos del sensor. Si quieres mostrar los datos del sensor en la pantalla OLED, activa `on screen`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/TelemetryAndroid.png" alt="pir" width={900} height="auto" /></p>

</TabItem>
</Tabs>

La pantalla OLED mostrará los datos del sensor si activas `on screen`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Telemetryscreen.jpg" alt="pir" width={800} height="auto" /></p>

### Conexión de pantalla

- Pantalla E-Ink
  [Haz clic aquí](https://www.seeedstudio.com/2-13-Monochrome-ePaper-Display-with-122x250-Pixels-p-5778.html) para obtener la pantalla E-Ink compatible.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/E-Ink_Screen_Connection.jpg" alt="pir" width={300} height="auto" /></p>

- Pantalla OLED
[Haz clic aquí](https://www.seeedstudio.com/1-3inch-OLED-128-64-White-FPC-p-6614.html) para obtener la pantalla OLED compatible. El controlador OLED actual es SSD1306.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/OLED_Screen_Connection.jpg" alt="pir" width={300} height="auto" /></p>

### Teclado virtual

<p style={{textAlign: 'center'}}><img src="https://www.seeedstudio.com/1-3inch-OLED-128-64-White-FPC-p-6614.html" alt="pir" width={600} height="auto" /></p>
¡La versión de firmware 2.7 ahora admite teclado virtual! Puedes escribir mensajes directamente en el dispositivo para comunicarte con otro dispositivo. Sigue el [tutorial de flasheo de firmware](https://wiki.seeedstudio.com/es/get_started_with_meshtastic_wio_tracker_l1/#part-2-firmware-flashing) para actualizar el firmware.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/version.png" alt="pir" width={600} height="auto" /></p>

### Configurar tono de llamada

Ve a `Settings` -> `Ringtone Config`, luego introduce la cadena de tono RTTTL que quieras usar para las notificaciones externas.

<Tabs>
<TabItem value="ios" label="IOS App">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/T1000E20260410.png" alt="pir" width={500} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/ringtonex1.png" alt="pir" width={900} height="auto" /></p>

</TabItem>
</Tabs>

<Tabs>
<TabItem value="13" label="The Legend of Zelda: Item Get">

```plain
24:d=16,o=5,b=120:g,c6,d6,2g6
```
</TabItem>

<TabItem value="14" label="Super Mario Theme (Short)">

```plain
24:d=4,o=5,b=100:16e6,16e6,32p,8e6,16c6,8e6,8g6,8p,8g
```
</TabItem>

<TabItem value="15" label="Mario Coin">

```plain
24:d=8,o=6,b=200:b,e7
```
</TabItem>

<TabItem value="16" label="Nokia Ringtone">

```plain
24:d=4,o=5,b=180:8e6,8d6,f#,g#,8c#6,8b,d,e,8b,8a,c#,e,2a
```
</TabItem>

<TabItem value="17" label="Mario Power-Up">

```plain
powerup:d=16,o=5,b=200:g,a,b,c6,d6,e6,f#6,g6,a6,b6,2c7
```
</TabItem>

<TabItem value="18" label="Morse Code CQ">

```plain
24:d=16,o=6,b=120:8c,p,c,p,8c,p,c,4p,8c,p,8c,p,c,p,8c,8p
```
</TabItem>

</Tabs>

## Preguntas frecuentes (FAQ)

### Dispositivo bloqueado e instalación del bootloader

**Descripción:**

El dispositivo no responde, no hay LED, no se puede emparejar con tu aplicación. Si encuentras que el dispositivo está completamente muerto después de flashear tu propio firmware, también puedes intentar reinstalar el bootloader.

:::danger note
Cuando estés flasheando el bootloader, asegúrate de que la conexión del cable sea estable y **NO** lo desconectes durante el proceso de flasheo.
:::

- Paso 1: [Haz clic aquí para descargar el bootloader](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/wio_tracker_l1_bootloader.uf2)

- Paso 2: Entra en modo DFU

  Haz doble clic en el botón RST para entrar en modo DFU. Aparecerá el disco con el nombre "Tracker L1".

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1RstButton.png" alt="pir" width={300} height="auto" /></p>

- Paso 3: Pega el archivo del bootloader

  Sustituye todos los archivos del disco por el archivo de bootloader descargado.

- Paso 4: Flashea el firmware

  Cuando hayas completado los pasos anteriores, puedes seguir este [paso](https://wiki.seeedstudio.com/es/get_started_with_meshtastic_wio_tracker_l1/#flash-firmware) para flashear el firmware de la aplicación. Es posible que necesites [entrar en modo DFU manualmente](https://wiki.seeedstudio.com/es/get_started_with_meshtastic_wio_tracker_l1/#unable-to-enter-dfu--entering-dfu-mode-manually)

### No se puede entrar en DFU y entrar en modo DFU manualmente

Conecta el dispositivo a tu PC, pulsa dos veces el botón `Reset`. El LED amarillo permanecerá encendido de forma fija y aparecerá en tu PC una nueva unidad USB llamada `Tracker L1`.

### Salir del modo DFU

Pulsa el botón `Reset` una vez para salir del modo DFU.

### No se puede comunicar en el canal primario

Si el dispositivo no puede comunicarse con los nodos cercanos o enviar mensajes, primero comprueba que la región LoRa y el preajuste del módem coinciden con los nodos circundantes. También debes comprobar si la **PSK** predeterminada se ha cambiado. Una PSK diferente en el canal primario impedirá que el dispositivo se comunique con otros nodos en ese canal.

La forma más sencilla de encontrar este problema es a través de la aplicación móvil. Abre la aplicación, conéctate al dispositivo de destino y luego ve a `Settings` -> `Channels`. Selecciona el canal primario y comprueba el valor de **PSK**. Si es diferente al de los nodos circundantes, actualízalo al mismo PSK y guarda la configuración del canal.

<Tabs>
<TabItem value="ios" label="IOS App">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/communicate_problems_ios.png" alt="Check primary channel PSK in the iOS app" width={500} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/communicate_problem_and.png" alt="Check primary channel PSK in the Android app" width={900} height="auto" /></p>

</TabItem>
</Tabs>

**Solución**

Si no estás seguro de qué ajustes se cambiaron, restaura el dispositivo a su configuración predeterminada siguiendo la guía de [restablecimiento de fábrica](https://wiki.seeedstudio.com/es/get_started_with_meshtastic_wio_tracker_l1/#factory-reset). Si solo se cambió la PSK, vuelve a establecerla en `AQ==`.

### El dispositivo se apaga automáticamente

#### Descripción

- Después de encender el dispositivo, se apagará o reiniciará automáticamente después de un tiempo.
- El registro del puerto serie funcionó durante un tiempo y luego se detuvo.

 Esto posiblemente sea causado por reiniciar o apagar el dispositivo de forma manual y forzada cuando el dispositivo se encuentra en los siguientes estados: sin haber terminado el proceso de transmisión de mensajes, estando en configuración......

#### Solución de problemas

[haz clic aquí](https://wiki.seeedstudio.com/es/get_started_with_meshtastic_wio_tracker_l1/#part-2-firmware-flashing) para ver el vídeo. Necesitas realizar un borrado de la memoria flash y luego volver a flashear el firmware más reciente.

### Restablecimiento de fábrica

Si quieres restaurar la configuración predeterminada, puedes hacer el restablecimiento de fábrica. Hay dos métodos para realizar el restablecimiento de fábrica.

- [haz clic aquí](https://wiki.seeedstudio.com/es/get_started_with_meshtastic_wio_tracker_l1/#part-2-firmware-flashing) para ver el vídeo. Necesitas realizar un borrado de la memoria flash y luego volver a flashear el firmware más reciente.

- Haz clic en el botón `Factory Reset` en la app. El dispositivo se reiniciará automáticamente con la configuración de fábrica.
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Factory.png" alt="pir" width={400} height="auto" /></p>

### Error en mensaje directo

#### Restablecer NodeDB

NodeDB es la base de datos local que almacena información sobre los nodos descubiertos en la red Mesh actual. Si te encuentras en una situación en la que no puedes comunicarte con cierto nodo, puede deberse a que tu NodeDB haya almacenado información desactualizada de ese nodo. Necesitarás actualizarla.

Abre la app y conéctate al dispositivo de destino. Ve a **Settings**->**Device**->**Device Config**->**Reset NodeDB**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1nodeDBmerge.png" alt="Configuración del dispositivo y botón Reset NodeDB en la app" width={600} height="auto" /></p>

#### Intercambiar información de usuario

Cada nodo enviará periódicamente su propia información de nodo, lo que permite que otros nodos en la malla lo "vean" y lo "reconozcan". Dos nodos necesitan intercambiar su información de nodo entre sí para poder comunicarse entre ellos. Si no puedes enviar o recibir mensajes privados con otro nodo de la lista, puedes pedirles manualmente que intercambien información en la app.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/USERINFO.png" alt="Entrada de dispositivo en Configuración" width={300} height="auto" /></p>

#### Regenerar clave privada

Dos nodos necesitan conocer su clave privada entre sí para poder comunicarse entre ellos. Si un nodo sigue fallando en la transmisión de mensajes privados, intenta regenerar la clave privada para él.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/RenerateKey.png" alt="Entrada de dispositivo en Configuración" width={600} height="auto" /></p>

Reinicia el dispositivo defectuoso para que la configuración surta efecto.

:::note
Después de la regeneración de la clave, el otro dispositivo necesita volver a conectarse con el nodo. Por lo tanto, es mejor eliminar el nodo de la lista de nodos del otro dispositivo.
:::

### Calidad de la señal

- **SNR** refleja la calidad del enlace de comunicación. Un dispositivo normal suele funcionar por encima de -7 dB. Un dispositivo con un SNR inferior a -10 dB indica un rendimiento deficiente.

- **RSSI** está determinado conjuntamente por el dispositivo y su entorno. Un dispositivo normal suele funcionar por encima de -110 dBm. Un dispositivo con un RSSI inferior a -115 dBm se considera que tiene un rendimiento deficiente.

      Para lograr el mejor efecto de señal, utiliza el dispositivo en un área abierta y sin obstáculos, con una interferencia mínima.

### Antena compatible

Si necesitas un reemplazo de antena para L1 Pro, [haz clic aquí](https://www.seeedstudio.com/LoRa-Antenna-Kit-for-reTerminal-DM-p-5714.html) para conseguir una.

## Recursos

- [Bootloader](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/wio_tracker_l1_bootloader.uf2)
- [Archivo de referencia de impresión 3D (V1)](https://www.printables.com/model/1355571-wio-tracker-l1-pro-for-meshtastic-enclosure-casing)
- [Archivo de referencia de impresión 3D (V2 Nuevo joystick de cuatro direcciones)](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1pro%203D%20Enclosure.zip)
- [Desafío de diseño de carcasa L1](https://www.hackster.io/contests/SeeedMeshtasticDeviceDesign2025/hardware_applications#challengeNav)
- [Archivo de contorno](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Wio%20Tracker%20L1%20outline.dxf)
- [Certificación TELEC](https://files.seeedstudio.com/Seeed_Certificate/documents_certificate/WioL1series-TELEC.pdf)
- [Certificación FCC](https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20FCC%20Certification.pdf)
- [Certificación CE](http://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20CE%20Certification.pdf)
- [Prueba de consumo de energía y cálculo de la vida útil de la batería](http://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20Power%20Consumption%20Test%20and%20Battery%20Life%20Calculation.xlsx)

<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/Seeed_Studio_XIAO.jpg"
  imageAlt="Request Quote for XIAO"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>
