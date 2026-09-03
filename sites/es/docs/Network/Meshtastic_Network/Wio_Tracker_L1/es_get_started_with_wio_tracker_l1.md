---
description: Comienza con Wio Tracker L1 Serie
title: Comienza con Wio Tracker L1
keywords:
  - Meshtastic
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-l1.webp
slug: /get_started_with_meshtastic_wio_tracker_l1
sku: 114993648,114993649,114993653,114993654
sidebar_position: 2
last_update:
  date: 09/02/2026
  author: Advent Jiang
createdAt: '2025-06-17'
updatedAt: '2026-08-06'
url: https://wiki.seeedstudio.com/es/get_started_with_meshtastic_wio_tracker_l1/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

:::tip
La Serie Wio Tracker L1 comparte la misma arquitectura de hardware. Aunque la guía en video es para el L1 Pro, es aplicable a todos los demás productos de la serie L1.
:::

## Tutorial en video

### Parte 1 Desempaquetado

Cuando uses los modelos L1, L1 Lite o L1 E-Ink por primera vez, después de conectarlos a la fuente de alimentación USB, levanta el interruptor de encendido hacia arriba para encenderlos.

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
Solo el firmware 2.7 es compatible con la barra de menú. Si quieres usar la barra de menú, sigue el [Flash Firmware Tutorial](https://wiki.seeedstudio.com/es/get_started_with_meshtastic_wio_tracker_l1/#Parte-2-Flasheo-de-firmware) para actualizar el firmware.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/version.png" alt="pir" width={600} height="auto" /></p>

#### Zumbador

Si quieres encender o apagar el zumbador, primero `update the firmware` a la versión `2.7`. Porque solo el firmware versión 2.7 tiene la barra de menú.

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

Arrastra el archivo UF2 a la unidad DFU. El firmware debería flashearse después de que el archivo se copie y el dispositivo se reinicie.

### Encender el dispositivo

Conecta el cable USB para activar el dispositivo. Levanta el interruptor de encendido hacia arriba para encenderlo.

:::tip
Si el dispositivo no responde cuando presionas el botón, por favor cárgalo primero. No uses un cargador de carga rápida.
:::

### Conectar mediante la app

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="App de IOS">

- Selecciona el dispositivo de destino en el panel de Bluetooth.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/device_select123.jpeg" alt="pir" width={300} height="auto" /></p>

- Introduce el código que aparece en la pantalla y luego haz clic en `OK` para conectar el dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/pairing_code123.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="App de Android">

- Haz clic en `+` y elige el dispositivo de destino.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/an-choose-new.png" alt="pir" width={600} height="auto" /></p>

- Introduce el código (el código predeterminado es `123456`) y luego haz clic en `OK` para conectar el dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/an-click-ok-new.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

### Configurar el LoRa

Para empezar a comunicarte a través de la malla, debes establecer tu región. Este ajuste controla qué rango de frecuencias usa tu dispositivo y debe configurarse de acuerdo con tu ubicación regional.

<Tabs>
<TabItem value="ios" label="App de IOS">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/configure_LoRa123.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="App de Android">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/an-region-new.png" alt="pir" width={300} height="auto" /></p>

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

Si quieres enviar mensajes de texto y comunicarte con otros nodos en el sitio web, ahora puedes conectar el dispositivo al [Sitio web de Meshtastic](https://client.meshtastic.org/messages/broadcast/0).

  Paso 1: Abre el sitio web

[Haz clic aquí](https://client.meshtastic.org/messages/broadcast/0) para ir al sitio web.
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshtasticWeb.png" alt="pir" width={1000} height="auto" /></p>

  Paso 2: Añadir el nuevo dispositivo

    Haz clic en "+ New Connection". 

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteAddNewConnection.png" alt="pir" width={600} height="auto" /></p>

    Hay dos formas de conectar. Puedes elegir el método que prefieras.

 Method 1: Via Bluetooth

    Elige el método Bluetooth. Elige el ID del dispositivo en la ventana emergente.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshWebBluetooth.png" alt="pir" width={1000} height="auto" /></p>

 Method 2: Via Serial

    Elige el método serie. Abre el administrador de dispositivos para ver a qué puerto está conectado el dispositivo. Elige ese puerto en la ventana emergente.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteSerialConnection.png" alt="pir" width={1000} height="auto" /></p>

    Tu dispositivo se mostrará en la lista. Haz clic para conectar. Si la conexión tiene éxito, podrás ver el estado del dispositivo directamente en el sitio web.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteConnectionSuccess.png" alt="pir" width={300} height="auto" /></p>

### Configurar GPS

Por favor, activa el GPS. Puedes ajustar el intervalo de actualización y el intervalo de difusión para obtener información de ubicación más actualizada.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshGPS.png" alt="pir" width={500} height="auto" /></p>

Para IOS, por favor activa `Accurate Location`. De lo contrario, el posicionamiento puede desviarse.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSAccurateLocation.jpg" alt="pir" width={200} height="auto" /></p>

### Conexión de sensor

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

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/temp_sensor123.png" alt="pir" width={900} height="auto" /></p>

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
  [Click here](https://www.seeedstudio.com/2-13-Monochrome-ePaper-Display-with-122x250-Pixels-p-5778.html) para obtener la pantalla E-Ink compatible.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/E-Ink_Screen_Connection.jpg" alt="pir" width={300} height="auto" /></p>

- Pantalla OLED
[Click here](https://www.seeedstudio.com/1-3inch-OLED-128-64-White-FPC-p-6614.html) para obtener la pantalla OLED compatible. El controlador OLED actual es SSD1306.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/OLED_Screen_Connection.jpg" alt="pir" width={300} height="auto" /></p>

### Teclado virtual

<p style={{textAlign: 'center'}}><img src="https://www.seeedstudio.com/1-3inch-OLED-128-64-White-FPC-p-6614.html" alt="pir" width={600} height="auto" /></p>
¡La versión de firmware 2.7 ahora admite teclado virtual! Puedes escribir mensajes directamente en el dispositivo para comunicarte con otro dispositivo. Sigue el [Flash Firmware Tutorial](https://wiki.seeedstudio.com/es/get_started_with_meshtastic_wio_tracker_l1/#part-2-firmware-flashing) para actualizar el firmware.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/version.png" alt="pir" width={600} height="auto" /></p>

### Configurar tono de llamada

Ve a `Settings` -> `Ringtone Config`, luego introduce la cadena de tono RTTTL que quieras usar para las notificaciones externas.

<Tabs>
<TabItem value="ios" label="App de IOS">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/configure_ringtone123.png" alt="pir" width={500} height="auto" /></p>

</TabItem>

<TabItem value="android" label="App de Android">
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

### Dispositivo bloqueado y recuperación del bootloader {#device-bricked--bootloader-installation}

**Descripción:**

El dispositivo no responde, no hay LED, no se puede emparejar con tu App. Si encuentras que el dispositivo está completamente muerto después de flashear tu propio firmware, también puedes intentar reinstalar el bootloader.

El bootloader se restaura a través del puerto serie USB (Serial DFU) con `adafruit-nrfutil`.

:::danger note
Durante el flasheo, mantén la conexión del cable estable y **NO** la desconectes, incluso si el número de puerto serie cambia.
:::

**Paso 1: Preparar**

- Un dispositivo de la serie Wio Tracker L1 (L1 / L1 Pro)
- Un cable de datos USB en buen estado (no solo de carga)
- Un PC con Windows, macOS o Linux con Python 3 y pip
- El paquete de bootloader: [Click here to download Bootloader](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip) — NO extraigas el ZIP; `adafruit-nrfutil` lo usa tal cual

**Paso 2: Instalar adafruit-nrfutil**

<Tabs>
<TabItem value="windows" label="Windows">

Comprueba que Python 3 y pip estén disponibles (si falta pip, ejecuta primero `python -m ensurepip --upgrade`):

```
python --version
python -m pip --version
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/00_python_pip_check.png" alt="Check Python and pip on Windows" width={600} height="auto" /></p>

Luego instala y verifica (la versión probada para esta guía es `0.5.3.post16`):

```
python -m pip install --user adafruit-nrfutil
adafruit-nrfutil version
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/01_nrfutil_version.png" alt="adafruit-nrfutil version output on Windows" width={600} height="auto" /></p>

</TabItem>

<TabItem value="macos" label="macOS">

```
python3 --version
python3 -m pip install --user adafruit-nrfutil
adafruit-nrfutil version
```

Si falta pip, ejecuta primero `python3 -m ensurepip --upgrade`.

</TabItem>

<TabItem value="linux" label="Linux">

```
python3 --version
python3 -m pip install --user adafruit-nrfutil
adafruit-nrfutil version
```

Si falta pip, ejecuta primero `python3 -m ensurepip --upgrade`.

</TabItem>
</Tabs>

:::note
Comprueba siempre la versión con `adafruit-nrfutil version`. NO uses `adafruit-nrfutil --version`.
:::

**Paso 3: Comprobar el puerto serie**

Toma nota del puerto serie del dispositivo; los ejemplos siguientes varían según el PC:

<Tabs>
<TabItem value="windows" label="Windows">

Abre **Device Manager → Ports (COM & LPT)**, por ejemplo:

```
USB Serial Device (COM43)
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/02_normal_com_port.png" alt="Wio Tracker L1 serial port in Windows Device Manager" width={600} height="auto" /></p>

</TabItem>

<TabItem value="macos" label="macOS">

```
ls /dev/cu.*
```

El dispositivo aparece como `/dev/cu.usbmodemXXXX`.

</TabItem>

<TabItem value="linux" label="Linux">

```
ls /dev/ttyACM*
```

El dispositivo normalmente aparece como `/dev/ttyACM0`; si no se lista nada, prueba también `ls /dev/ttyUSB*`.

</TabItem>
</Tabs>

**Paso 4: Flashear el bootloader**

Sustituye el puerto por el que encontraste en el Paso 3:

<Tabs>
<TabItem value="windows" label="Windows">

```
adafruit-nrfutil --verbose dfu serial --package "wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip" -p COM43 -b 115200 --singlebank --touch 1200
```

Si el ZIP no está en la carpeta actual de tu terminal, pasa su ruta completa a `--package`, por ejemplo `"C:\path\to\wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip"`.

</TabItem>

<TabItem value="macos" label="macOS">

```
adafruit-nrfutil --verbose dfu serial --package "wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip" -p /dev/cu.usbmodemXXXX -b 115200 --singlebank --touch 1200
```

</TabItem>

<TabItem value="linux" label="Linux">

```
adafruit-nrfutil --verbose dfu serial --package "wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip" -p /dev/ttyACM0 -b 115200 --singlebank --touch 1200
```

</TabItem>
</Tabs>

**Paso 5: Gestionar el cambio de puerto serie**

`--touch 1200` reinicia el dispositivo en modo DFU, por lo que el puerto serie normalmente cambia y el primer comando puede detenerse con un traceback como este:

```
Touched serial port COM43
...
FileNotFoundError: could not open port 'COM43'
```

Esto NO es un fallo: el dispositivo ya entró en modo DFU en un puerto NUEVO. En el PC con Windows probado, por ejemplo, cambió de `COM43` a `COM45`:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/03_dfu_com_port.png" alt="Puerto serie DFU tras la nueva enumeración en el Administrador de dispositivos de Windows" width={600} height="auto" /></p>

**Mantén el cable USB conectado.** Busca el nuevo puerto (actualiza **Device Manager → Ports (COM & LPT)**, o vuelve a ejecutar `ls /dev/cu.*` / `ls /dev/ttyACM*`), luego vuelve a flashear en el nuevo puerto SIN `--touch 1200`:

<Tabs>
<TabItem value="windows" label="Windows">

```
adafruit-nrfutil --verbose dfu serial --package "wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip" -p COM45 -b 115200 --singlebank
```

</TabItem>

<TabItem value="macos" label="macOS">

```
adafruit-nrfutil --verbose dfu serial --package "wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip" -p /dev/cu.usbmodemXXXX -b 115200 --singlebank
```

</TabItem>

<TabItem value="linux" label="Linux">

```
adafruit-nrfutil --verbose dfu serial --package "wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip" -p /dev/ttyACM0 -b 115200 --singlebank
```

</TabItem>
</Tabs>

**Paso 6: Confirmar el resultado**

El flasheo se ha realizado correctamente cuando la salida termina con `Device programmed.`:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/04_flash_success.png" alt="Salida de adafruit-nrfutil que termina con Device programmed" width={600} height="auto" /></p>

Después de eso, aparece una unidad UF2 en tu PC (captura de pantalla del PC con Windows probado). Su etiqueta de volumen varía según la compilación del bootloader — la unidad probada mostraba `XIAO-BOOT` — y NO es un criterio de aprobado/suspenso; no juzgues el resultado por el nombre de la unidad ni por `INFO_UF2.TXT`:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/05_uf2_drive.png" alt="La unidad UF2 aparece después de flashear el bootloader" width={600} height="auto" /></p>

**Paso 7: Reinstalar el firmware de la aplicación**

:::warning
Restaurar el bootloader NO reinstala el firmware de la aplicación: el dispositivo sigue sin firmware funcional hasta que lo vuelvas a flashear.
:::

Cuando hayas completado los pasos anteriores, sigue [Flash Firmware](https://wiki.seeedstudio.com/es/get_started_with_meshtastic_wio_tracker_l1/#flash-firmware) para flashear el firmware de la aplicación.

**Solución de problemas**

- `adafruit-nrfutil` no se reconoce después de la instalación: el directorio de scripts de usuario de Python no está en tu PATH (`Scripts` en Windows, `bin` en tu directorio de inicio en macOS/Linux); añádelo al PATH o reinstala sin `--user`.
- Puerto ocupado / acceso denegado: cierra monitores serie, pestañas del flasher web, Arduino IDE o cualquier otra cosa que esté usando el puerto.
- `FileNotFoundError: could not open port ...` después de `Touched serial port ...`: el dispositivo entró en modo DFU en un puerto nuevo; sigue el Paso 5.
- No se puede entrar en modo DFU: consulta [Unable to enter DFU & Entering DFU Mode Manually](https://wiki.seeedstudio.com/es/get_started_with_meshtastic_wio_tracker_l1/#unable-to-enter-dfu--entering-dfu-mode-manually).

**Recuperación DFU manual**

Si `--touch 1200` no puede poner el dispositivo en modo DFU (por ejemplo, el firmware no responde en absoluto), entra en él manualmente: conecta el dispositivo, pulsa dos veces `Reset` (el LED amarillo permanece fijo), encuentra el puerto serie DFU como en el Paso 3 y luego ejecuta el comando del Paso 5 en ese puerto SIN `--touch 1200`. El éxito se ve igual que en el Paso 6.

### Unable to enter DFU & Entering DFU Mode Manually

Conecta el dispositivo a tu PC y pulsa dos veces el botón `Reset`: el LED amarillo permanece fijo y aparece un puerto serie DFU en tu PC.

Para flashear el bootloader en este modo, sigue [Device Bricked & Bootloader Recovery](https://wiki.seeedstudio.com/es/get_started_with_meshtastic_wio_tracker_l1/#device-bricked--bootloader-installation), pero omite `--touch 1200`: el dispositivo ya está en modo DFU.

### Salir del modo DFU

Pulsa una vez el botón `Reset` para salir del modo DFU.

### No se puede comunicar en el canal primario

Si el dispositivo no puede comunicarse con nodos cercanos o enviar mensajes, primero comprueba que la región LoRa y el preset del módem coinciden con los nodos circundantes. También debes comprobar si la **PSK** predeterminada se ha cambiado. Una PSK diferente en el canal primario impedirá que el dispositivo se comunique con otros nodos en ese canal.

La forma más sencilla de encontrar este problema es a través de la app móvil. Abre la app, conéctate al dispositivo de destino y luego ve a `Settings` -> `Channels`. Selecciona el canal primario y comprueba el valor de **PSK**. Si es diferente al de los nodos circundantes, actualízalo a la misma PSK y guarda la configuración del canal.

<Tabs>
<TabItem value="ios" label="IOS App">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/communicate_problems_ios.png" alt="Comprobar la PSK del canal primario en la app de iOS" width={500} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/communicate_problem_and.png" alt="Comprobar la PSK del canal primario en la app de Android" width={900} height="auto" /></p>

</TabItem>
</Tabs>

**Solución**

Si no estás seguro de qué ajustes se cambiaron, restaura el dispositivo a su configuración predeterminada siguiendo la guía [Factory Reset](https://wiki.seeedstudio.com/es/get_started_with_meshtastic_wio_tracker_l1/#factory-reset). Si solo se cambió la PSK, vuelve a establecerla en `AQ==`.

### El dispositivo se apaga automáticamente

#### Descripción

- Después de encender el dispositivo, se apagará o se reiniciará automáticamente al cabo de un rato.
- El registro del puerto serie funcionó durante un tiempo y luego se detuvo.

 Esto posiblemente se deba a reiniciar o apagar el dispositivo manualmente y a la fuerza cuando el dispositivo se encuentra en los siguientes estados: sin haber terminado el proceso de transmisión de mensajes, estando en configuración......

#### Solución de problemas

[click here](https://wiki.seeedstudio.com/es/get_started_with_meshtastic_wio_tracker_l1/#part-2-firmware-flashing) para ver el vídeo. Necesitas realizar un borrado de la flash y luego volver a flashear el firmware más reciente.

### Restablecimiento de fábrica

Si quieres restaurar la configuración predeterminada, puedes hacer el restablecimiento de fábrica. Hay dos métodos para que realices el restablecimiento de fábrica.

- [click here](https://wiki.seeedstudio.com/es/get_started_with_meshtastic_wio_tracker_l1/#part-2-firmware-flashing) para ver el vídeo. Necesitas realizar un borrado de la flash y luego volver a flashear el firmware más reciente.

- Haz clic en el botón `Factory Reset` en la App. El dispositivo se reiniciará automáticamente con la configuración de fábrica.
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Factory.png" alt="pir" width={400} height="auto" /></p>

### Fallo en mensaje directo

#### Restablecer NodeDB

NodeDB es la base de datos local que almacena información sobre los nodos descubiertos en la red Mesh actual. Si te encuentras en una situación en la que no puedes comunicarte con un determinado nodo, puede deberse a que tu nodedB haya almacenado información obsoleta de ese nodo. Necesitarás actualizarla.

Abre la app y conéctate al dispositivo de destino. Ve a **Settings**->**Device**->**Device Config**->**Reset NodeDB**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/sending_failed123.png" alt="Ajustes del dispositivo y botón Reset NodeDB en la app" width={600} height="auto" /></p>

#### Intercambiar información de usuario

Cada nodo enviará periódicamente su propia información de nodo, lo que permite que otros nodos de la malla lo "vean" y lo "reconozcan". Dos nodos necesitan intercambiar su información de nodo entre sí para poder comunicarse entre ellos. Si no puedes enviar o recibir mensajes privados con otro nodo de la lista, puedes pedirles manualmente que intercambien información en la app.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/USERINFO.png" alt="Entrada de dispositivo en Settings" width={300} height="auto" /></p>

#### Regenerar clave privada

Dos nodos necesitan conocer su clave privada entre sí para poder comunicarse entre ellos. Si un nodo sigue fallando en la transmisión de mensajes privados, intenta regenerar la clave privada para él.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/RenerateKey.png" alt="Entrada de dispositivo en Settings" width={600} height="auto" /></p>

Reinicia el dispositivo defectuoso para que la configuración surta efecto.

:::note
Después de la regeneración de la clave, otro dispositivo necesita volver a conectarse con el nodo. Por lo tanto, es mejor eliminar el nodo de la lista de nodos del otro dispositivo.
:::

### Calidad de la señal

- **SNR** refleja la calidad del enlace de comunicación. Un dispositivo normal suele funcionar por encima de -7 dB. Un dispositivo con una SNR inferior a -10 dB indica un rendimiento deficiente.

- **RSSI** está determinado conjuntamente por el dispositivo y su entorno. Un dispositivo normal suele funcionar por encima de -110 dBm. Un dispositivo con un RSSI inferior a -115 dBm se considera que tiene un rendimiento deficiente.

      Para lograr el mejor efecto de señal, utiliza el dispositivo en un área abierta y sin obstáculos, con una interferencia mínima.

### Antena compatible

Si necesitas un reemplazo de antena para L1 Pro, [click here](https://www.seeedstudio.com/LoRa-Antenna-Kit-for-reTerminal-DM-p-5714.html) para conseguir una.

## Recursos

- [Bootloader (Serial DFU package)](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip)
- [(V1) Archivo de referencia para impresión 3D](https://www.printables.com/model/1355571-wio-tracker-l1-pro-for-meshtastic-enclosure-casing)
- [(V2 New Four-way Joystick) Archivo de referencia para impresión 3D](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1pro%203D%20Enclosure.zip)
- [L1 Enclosure Design Challenge](https://www.hackster.io/contests/SeeedMeshtasticDeviceDesign2025/hardware_applications#challengeNav)
- [Archivo de contorno](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Wio%20Tracker%20L1%20outline.dxf)
- [Certificación TELEC](https://files.seeedstudio.com/Seeed_Certificate/documents_certificate/WioL1series-TELEC.pdf)
- [Certificación FCC](https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20FCC%20Certification.pdf)
- [Certificación CE](http://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20CE%20Certification.pdf)
- [Prueba de consumo de energía y cálculo de la duración de la batería](http://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20Power%20Consumption%20Test%20and%20Battery%20Life%20Calculation.xlsx)


## Soporte técnico y debate sobre el producto

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

<div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
        <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
    </div>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
        <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
    </div>
</div>