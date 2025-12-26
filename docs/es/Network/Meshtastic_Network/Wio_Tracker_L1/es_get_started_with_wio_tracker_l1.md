---
description: Introducción al Wio Tracker L1 Serie
title:  Introducción al Wio Tracker L1
keywords:
- Meshtastic
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-l1.webp
slug: /es/get_started_with_meshtastic_wio_tracker_l1
sidebar_position: 2
last_update:
  date: 12/24/2025
  author: Michelle Huang
---

:::tip
El Wio Tracker L1 Serie comparte el mismo marco de hardware. Aunque la guía en video fue para el L1 Pro, es aplicable a todos los demás productos de la serie L1.
:::
## Tutorial en Video

### Parte 1 Desempaquetado

Al usar los modelos L1, L1 Lite o L1 E-Ink por primera vez, después de conectar a la fuente de alimentación USB, levanta el interruptor de encendido hacia arriba para encenderlo.

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/Wi_YmE76YcY?si=Ad-pUhle5X9QppPR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### Parte 2 Flasheo de Firmware

:::caution note
Por favor `no uses NRF-OTA` para actualizar el firmware, puede causar que el dispositivo quede completamente inoperativo.
:::

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/hcjai4J1894?si=S_jaEfXVThWXscVJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### Parte 3 Uso del Dispositivo

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/Q97w2ompPtI?si=yLbAgE4cBbT6NbHS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

#### Joystick de Cuatro Direcciones
El firmware L1 E-Ink actualmente no soporta el joystick de cuatro direcciones. Si quieres usar el joystick, por favor compra otros modelos.

#### Barra de Menú
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/Menu.jpeg" alt="pir" width={600} height="auto" /></p>
Solo el firmware 2.7 soporta la barra de menú. Si quieres usar la barra de menú, sigue el [Tutorial de Flasheo de Firmware](http://localhost:3000/get_started_with_meshtastic_wio_tracker_l1/#flash-firmware) para actualizar el firmware.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/version.png" alt="pir" width={600} height="auto" /></p>

#### Zumbador

Si quieres encender o apagar el zumbador, por favor primero `actualiza el firmware` a la versión `2.7`. Porque solo el firmware versión 2.7 tiene la barra de menú.
- Encender el zumbador
Setting (icono con forma de engranaje) -> Notification -> Buzzer Action -> Disable
- Apagar el zumbador
Setting (icono con forma de engranaje) -> Notification -> Buzzer Action -> All enabled

<div class="table-center">
<iframe width="350" height="450" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/buzzer%20_turnonturnoff.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### Parte 4 Conexión del Teléfono

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/OFtUwN3z0tI?si=9zr3j-hLuoj0-CXi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### Parte 5 Diferentes Estados

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/eZa8kfUD2e4?si=3Fe_30obcercIXXO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Introducción

:::danger note
Cuando el dispositivo esté en los estados siguientes, por favor no lo reinicies manualmente o lo apagues. De lo contrario, el dispositivo puede quedar inoperativo.
1. No terminar el proceso de transmisión de mensajes
2. Estar siendo configurado
:::

### Flashear Firmware

:::caution note
Por favor `no uses NRF-OTA` para actualizar el firmware, puede causar que el dispositivo quede completamente inoperativo.
:::

Visita [Meshtastic Web Flasher](https://flasher.meshtastic.org/).

Para L1, L1 Lite y L1 Pro, selecciona el dispositivo objetivo como `Seeed Wio Tracker L1` y elige el firmware más reciente, luego haz clic en `Flash`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/select-wio-tracker.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-wio-tracker.png" alt="pir" width={800} height="auto" /></p>

Para L1 E-Ink, selecciona el dispositivo objetivo como `Seeed Wio Tracker L1 E-Ink` y elige el firmware más reciente, luego haz clic en `Flash`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/img/E-Ink%20Flash%201.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src=" https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/img/E-Ink%20Flash%202.png" alt="pir" width={800} height="auto" /></p>


Enciende el dispositivo, haz clic en `Enter DFU Mode`, habrá un puerto serie llamado `Tracker L1`, haz clic y conéctalo, y debería aparecer un controlador llamado `Tracker L1`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/52840-connect.png" alt="pir" width={800} height="auto" /></p>

Arrastra el archivo UF2 a la unidad DFU. El firmware debería ser flasheado después de que el archivo se descargue y el dispositivo se reinicie.

### Encender el dispositivo

Conecta el cable USB para activar el dispositivo. Levanta el interruptor de encendido hacia arriba para encenderlo.

:::tip
Si el dispositivo no responde cuando presionas el botón, por favor cárgalo primero. No uses el cargador de carga rápida.
:::

### Conectar vía App

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="App IOS">

- Selecciona el dispositivo objetivo en el panel de Bluetooth.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- Ingresa el código en la pantalla y luego haz clic en `OK` para conectar el dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="App Android">

- Haz clic en `+` y elige el dispositivo objetivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>

- Ingresa el código (código predeterminado es `123456`) y luego haz clic en `OK` para conectar el dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

### Conectar vía Sitio Web

Si quieres enviar mensajes de texto y comunicarte con otros nodos en el sitio web, puedes conectar el dispositivo al [Sitio Web de Meshtastic](https://client.meshtastic.org/messages/broadcast/0) ahora.

  Paso 1: Abrir el Sitio Web

[Haz clic aquí](https://client.meshtastic.org/messages/broadcast/0) para ir al sitio web.
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshtasticWeb.png" alt="pir" width={1000} height="auto" /></p>

  Paso 2: Agregar el nuevo dispositivo

    Haz clic en "+ New Connection".

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteAddNewConnection.png" alt="pir" width={600} height="auto" /></p>

    Hay dos formas de conectar. Puedes elegir tu método preferido.

 Método 1: Vía Bluetooth

    Elige el método bluetooth. Elige el ID del dispositivo en la ventana emergente.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshWebBluetooth.png" alt="pir" width={1000} height="auto" /></p>

 Método 2: Vía Serial

    Elige el método serial. Abre el administrador de dispositivos para ver a qué puerto está conectado el dispositivo. Elige ese puerto en la ventana emergente.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteSerialConnection.png" alt="pir" width={1000} height="auto" /></p>

    Tu dispositivo se mostrará en la lista. Haz clic para conectar. Si la conexión tiene éxito, puedes ver el estado del dispositivo directamente en el sitio web.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteConnectionSuccess.png" alt="pir" width={300} height="auto" /></p>


### Configurar el LoRa

Para comenzar a comunicarte a través de la malla, debes configurar tu región. Esta configuración controla qué rango de frecuencia usa tu dispositivo y debe configurarse según tu ubicación regional.

<Tabs>
<TabItem value="ios" label="App IOS">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="App Android">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-region.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

**Lista de Regiones**

|**Código de Región**|**Descripción**|**Rango de Frecuencia (MHz)**|**Ciclo de Trabajo (%)**|**Límite de Potencia (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|Sin configurar|N/A|N/A|N/A|
|US|Estados Unidos|902.0 - 928.0|100|30|
|EU_868|Unión Europea 868MHz|869.4 - 869.65|10|27|

Consulta [Región LoRa por País](https://meshtastic.org/docs/configuration/region-by-country/) para una lista más completa.

:::info
**EU_868** debe adherirse a una limitación de ciclo de trabajo por hora del 10%, calculada cada minuto en una base móvil de 1 hora. Tu dispositivo dejará de transmitir si lo alcanzas, hasta que se permita nuevamente.
:::

Ahora que has configurado la región LoRa en tu dispositivo, puedes continuar configurando cualquier [Configuración LoRa](https://meshtastic.org/docs/configuration/radio/lora/) para satisfacer tus necesidades.

### Configurar GPS

Por favor, habilita el GPS. Puedes ajustar el intervalo de actualización y el intervalo de transmisión para obtener información de ubicación más actualizada.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshGPS.png" alt="pir" width={500} height="auto" /></p>

Para iOS, por favor activa la `Accurate Location`. De lo contrario, el posicionamiento puede desviarse.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSAccurateLocation.jpg" alt="pir" width={200} height="auto" /></p>


### Conexión de sensores

Puedes agregar sensores al dispositivo a través de la interfaz Grove. Los siguientes sensores han sido verificados como compatibles con la interfaz Grove del dispositivo.

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

### Conexión de pantalla
 - Pantalla E-Ink
  [Haz clic aquí](https://www.seeedstudio.com/2-13-Monochrome-ePaper-Display-with-122x250-Pixels-p-5778.html) para obtener la pantalla E-Ink compatible.
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/E-Ink_Screen_Connection.jpg" alt="pir" width={300} height="auto" /></p>

- Pantalla OLED
[Haz clic aquí](https://www.seeedstudio.com/1-3inch-OLED-128-64-White-FPC-p-6614.html) para obtener la pantalla OLED compatible. El controlador OLED actual es SSD1306.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/OLED_Screen_Connection.jpg" alt="pir" width={300} height="auto" /></p>


### Teclado virtual
<p style={{textAlign: 'center'}}><img src="https://www.seeedstudio.com/1-3inch-OLED-128-64-White-FPC-p-6614.html" alt="pir" width={600} height="auto" /></p>
¡El firmware versión 2.7 ahora soporta teclado virtual! Puedes escribir mensajes directamente en el dispositivo para comunicarte con otros dispositivos. Sigue el [Tutorial de actualización de firmware](http://localhost:3000/get_started_with_meshtastic_wio_tracker_l1/#flash-firmware) para actualizar el firmware.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/version.png" alt="pir" width={600} height="auto" /></p>

## Preguntas frecuentes

### Dispositivo bloqueado e instalación del bootloader

**Descripción:**

El dispositivo no responde, no hay LED, no se puede emparejar con tu aplicación. Si encuentras que el dispositivo está completamente muerto después de flashear tu propio firmware, también puedes intentar reinstalar el bootloader.

:::danger note
Cuando estés flasheando el bootloader, asegúrate de que la conexión del cable sea estable y **NO** lo desconectes durante el proceso de flasheo.
:::

- Paso 1: [Haz clic aquí para descargar el Bootloader](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/wio_tracker_l1_bootloader.uf2)

- Paso 2: Entrar en modo DFU

  Haz doble clic en el botón RST para entrar en modo DFU. Aparecerá el disco con nombre "Tracker L1".

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1RstButton.png" alt="pir" width={300} height="auto" /></p>

- Paso 3: Pegar el archivo del bootloader

  Reemplaza todos los archivos en el disco con el archivo del bootloader descargado.

- Paso 4: Flashear el firmware

  Cuando hayas completado los pasos anteriores, entonces puedes seguir este [paso](https://wiki.seeedstudio.com/es/get_started_with_meshtastic_wio_tracker_l1/#flash-firmware) para flashear el firmware de la aplicación. Es posible que necesites [entrar en modo DFU manualmente](https://wiki.seeedstudio.com/es/get_started_with_meshtastic_wio_tracker_l1/#unable-to-enter-dfu--entering-dfu-mode-manually)


### No se puede entrar en DFU y entrar en modo DFU manualmente

Conecta el dispositivo a tu PC, presiona dos veces el botón `Reset`. El LED amarillo permanecerá encendido fijo, y aparecerá una nueva unidad USB llamada `Tracker L1` en tu PC.

### Salir del modo DFU

Presiona el botón `Reset` una vez para salir del modo DFU.

 ### El dispositivo se apaga automáticamente

 #### Descripción

 - Después de encender el dispositivo, se apagará o reiniciará automáticamente después de un tiempo.
 - El registro del puerto serie funcionó por un tiempo y luego se detuvo.

 Esto posiblemente es causado por reiniciar manual y forzadamente o apagar el dispositivo cuando el dispositivo está en los siguientes estados: no terminando el proceso de transmisión de mensajes, siendo configurado......

 #### Solución de problemas

[haz clic aquí](https://wiki.seeedstudio.com/es/get_started_with_meshtastic_wio_tracker_l1/#part-2-firmware-flashing) para ver el video. Necesitas realizar un borrado de flash, y luego re-flashear el firmware más reciente.

### Restablecimiento de fábrica
Si quieres restaurar la configuración predeterminada, puedes hacer el restablecimiento de fábrica. Hay dos métodos para hacer el restablecimiento de fábrica.

- [haz clic aquí](https://wiki.seeedstudio.com/es/get_started_with_meshtastic_wio_tracker_l1/#part-2-firmware-flashing) para ver el video. Necesitas realizar un borrado de flash, y luego re-flashear el firmware más reciente.

- Haz clic en el botón `Factory Reset` en la aplicación. El dispositivo se reiniciará con la configuración de fábrica automáticamente.
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Factory.png" alt="pir" width={400} height="auto" /></p>


### Calidad de señal

- **SNR** refleja la calidad del enlace de comunicación. Los dispositivos normales usualmente operan por encima de -7 dB. Un dispositivo con SNR menor a -10 dB indica un rendimiento pobre.

- **RSSI** está determinado conjuntamente por el dispositivo y su entorno circundante. Los dispositivos normales usualmente operan por encima de -110 dBm. Un dispositivo con RSSI menor a -115 dBm se considera que tiene un rendimiento pobre.

      Para lograr el mejor efecto de señal, por favor usa el dispositivo en un área abierta y sin obstrucciones con interferencia mínima.

### Antena compatible

Si necesitas un reemplazo de antena para L1 Pro, [haz clic aquí](https://www.seeedstudio.com/LoRa-Antenna-Kit-for-reTerminal-DM-p-5714.html) para obtener una.

## Recursos
- [Bootloader](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/wio_tracker_l1_bootloader.uf2)
- [(V1) Archivo de referencia para impresión 3D](https://www.printables.com/model/1355571-wio-tracker-l1-pro-for-meshtastic-enclosure-casing)
- [(V2 Nuevo joystick de cuatro direcciones) Archivo de referencia para impresión 3D](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1pro%203D%20Enclosure.zip)
- [Desafío de diseño de carcasa L1](https://www.hackster.io/contests/SeeedMeshtasticDeviceDesign2025/hardware_applications#challengeNav)
- [Archivo de contorno](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Wio%20Tracker%20L1%20outline.dxf)
- [Certificación TELEC](https://files.seeedstudio.com/Seeed_Certificate/documents_certificate/WioL1series-TELEC.pdf)
- [Certificación FCC](https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20FCC%20Certification.pdf)
- [Certificación CE](http://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20CE%20Certification.pdf)
- [Prueba de consumo de energía y cálculo de duración de batería](http://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20Power%20Consumption%20Test%20and%20Battery%20Life%20Calculation.xlsx)