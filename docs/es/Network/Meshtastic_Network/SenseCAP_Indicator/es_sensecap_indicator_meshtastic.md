---
description: Comience con SenseCAP Indicator para Meshtastic
title: Comience con Indicator para Meshtastic
keywords:
- Meshtastic
- Indicator
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/indicator-page_1.webp
slug: /es/sensecap_indicator_meshtastic
last_update:
  date: 10/29/2024
  author: Jessie
---


<div className="table-center">
  <video width="730" height="500" controls autoPlay muted>
    <source
      src="https://media-cdn.seeedstudio.com/media/catalog/product/1/-/1-114993532_sensecap_indicator_for_meshtastic_lora__2.mp4"
      type="video/mp4"
    />
  </video>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1L-for-Meshtastic-p-6304.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

SenseCAP Indicator es un dispositivo de pantalla táctil de 4 pulgadas diseñado para [Meshtastic®](https://meshtastic.org/), alimentado por MCUs duales, el ESP32 y RP2040, y soporta Wi-Fi, BLE y LoRa®. Es una plataforma de desarrollo IoT de código abierto y potente.

## Introducción

### Características

- **Soporta Meshtastic:** Pre-cargado con firmware de Meshtastic, está listo para funcionar una vez encendido. También puede actualizar el firmware usando Meshtastic Flasher.<br/>
- **MCUs Duales y GPIOs Abundantes:** Equipado con potentes MCUs duales ESP32S3 y RP2040 y más de 400 GPIOs compatibles con Grove para opciones de expansión flexibles.<br/>
- **Hub LoRa® Local para Conectividad IoT:** Integrado con el chip LoRa® Semtech SX1262, el dispositivo puede convertirse en un Gateway LoRaWAN® de Canal Único a través de tutorial. Alternativamente, conecte dispositivos LoRa® a plataformas IoT populares como Matter a través de Wi-Fi.<br/>
- **Plataforma Completamente de Código Abierto:** Aproveche el extenso ecosistema de código abierto de ESP32 y Raspberry Pi para infinitas posibilidades de aplicación.<br/>
- **Adecuado para Múltiples Escenarios de Aplicación:** Puede usarse como un nodo de escritorio Meshtastic o un nodo de automóvil, así como un Gateway LoRaWAN® de Canal Único.

### Especificaciones

|Pantalla|3.95 Pulgadas, Pantalla Táctil RGB Capacitiva|
| :- | :- |
|**Resolución de Pantalla**|480 x 480 píxeles|
|**Fuente de Alimentación**|5V-DC, 1A|
|**Batería**|N/A|
|**Procesador**|<p>**ESP32-S3:** Xtensa® dual-core 32-bit hasta 240 MHz</p><p>**RP2040:** Dual ARM Cortex-M0+ hasta 133MHz</p>|
|**Flash**|<p>**ESP32-S3:** 8MB</p><p>**RP2040:** 2MB</p>|
|**Almacenamiento Externo**|Soporta hasta 32GB Tarjeta Micro SD (no incluida)|
|**Wi-Fi**|802.11b/g/n, 2.4GHz|
|**Bluetooth**|Bluetooth 5.0 LE|
|**LoRa(SX1262**)|Soporta 862-930MHz|
|**Zumbador(Aún no desarrollado)**|MLT-8530, Frecuencia de Resonancia：2700Hz|
|**Certificación**|CE/FCC|

### Descripción General del Hardware

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/HO-114993532.png" alt="pir" width={800} height="auto" /></p>

## Flashear Firmware

### Flashear Firmware de Aplicación

**Instrucciones en Video**

<iframe width="100%" height="500" src="https://www.youtube.com/embed/55Sz8kHSyV4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Visite [Meshtastic Web Flasher](https://flasher.meshtastic.org/).

Seleccione el dispositivo objetivo a `Seeed SenseCAP Indicator` y elija el firmware más reciente, luego haga clic en `Flash`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/indicator-flash.png" alt="pir" width={800} height="auto" /></p>

Mantenga presionado el botón mientras conecta el cable USB.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/press-button.png" alt="pir" width={400} height="auto" /></p>

Habilite `Full Erase and Install`, y haga clic en `Erase Flash and Install`.

Se mostrarán 2 puertos, seleccione el `USB serial port` y haga clic en `Connect`.

:::caution note
Por favor seleccione el `USB Serial`, no el INDICATOR RP2040.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect11.png" alt="pir" width={800} height="auto" /></p>

### Flashear Firmware GPS(opcional)

El SenseCAP Indicator no tiene GPS integrado, para obtener la ubicación GPS, se requiere un [Módulo GPS Grove](https://www.seeedstudio.com/Grove-GPS-Air530-p-4584.html).<br/>
Conecte el Módulo GPS al puerto Grove y luego flashee el firmware GPS.

- **[Descarga de Firmware GPS](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/meshtastic_gps.ino.uf2)**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/gps-connect.png" alt="pir" width={800} height="auto" /></p>

Mantenga presionado este botón interno usando una aguja, luego conecte el dispositivo a su PC con el cable USB tipo-C proporcionado, suelte el botón una vez conectado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_56.png" alt="pir" width={600} height="auto" /></p>

Descargue el archivo `UF2` y cópielo a la unidad `RPI-RP2`. El firmware debería flashearse después de que el archivo se descargue y el dispositivo se reinicie.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/disk.png" alt="pir" width={600} height="auto" /></p>

## Comenzar

Descargue la App `Meshtastic`:

- [App IOS](https://meshtastic.org/docs/category/apple-apps/)
- [App Android](https://meshtastic.org/docs/category/android-app/)

### Conectar vía App

- Encienda el dispositivo, la página del dispositivo mostrará la dirección mac del dispositivo actual.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/device-name4.png" alt="pir" width={700} height="auto" /></p>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="App IOS">

- Seleccione el dispositivo objetivo en el panel de Bluetooth.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- Ingrese el código y luego haga clic en `Pair` para conectar el dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair111.png" alt="pir" width={800} height="auto" /></p>

</TabItem>

<TabItem value="android" label="App Android">

- Haga clic en `+` y elija el dispositivo objetivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>

- Ingrese el código(el código predeterminado es `123456`) y luego haga clic en `OK` para conectar el dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

### Configurar los Parámetros

Para comenzar a comunicarse a través de la malla, debe establecer su región. Esta configuración controla qué rango de frecuencia usa su dispositivo y debe establecerse según su ubicación regional.

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
|UNSET|Sin establecer|N/A|N/A|N/A|
|US|Estados Unidos|902.0 - 928.0|100|30|
|EU_868|Unión Europea 868MHz|869.4 - 869.65|10|27|

Consulte [Región LoRa por País](https://meshtastic.org/docs/configuration/region-by-country/) para una lista más completa.

:::info
**EU_868** debe adherirse a una limitación de ciclo de trabajo por hora del 10%, calculada cada minuto en una base móvil de 1 hora. Su dispositivo dejará de transmitir si lo alcanza, hasta que se permita nuevamente.
:::

Ahora que ha establecido la región LoRa en su dispositivo, puede continuar configurando cualquier [Configuración LoRa](https://meshtastic.org/docs/configuration/radio/lora/) para satisfacer sus necesidades.

### Teclado

:::tip note
El uso del teclado de la versión 2.5.xx(El firmware de fábrica es v2.5.11.) y la versión más nueva que 2.6.xx es diferente. Por favor verifique lo siguiente según su versión actual de firmware.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/keyboard-ve.png" alt="pir" width={400} height="auto" /></p>

#### Para versión2.5.xx

<div class="table-center">
<iframe width="500" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/keyboard-usage.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

#### Para versión2.6 +

<div class="table-center">
<iframe width="500" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/keyboard-usage2.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### FAQ

#### Parte RP2040

RP2040 aún no ha sido desarrollado, por lo que las funciones de `zumbador`/`tarjeta SD`/`mapa` no están disponibles aún. Estamos trabajando con Meshtastic para optimizarlo.

#### Selección de Rol

:::caution
NO seleccione el rol `Repeater`, lo cual causará que el dispositivo se reinicie repetidamente.
:::

#### Módulo GPS

Si no conectó el módulo GPS, por favor deshabilite la función GPS en la App `Meshtastic`, de lo contrario el dispositivo seguirá tratando de encontrar el módulo GPS, lo cual causará que el dispositivo tome mucho tiempo para arrancar la pantalla.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/gps-module.png" alt="pir" width={600} height="auto" /></p>
