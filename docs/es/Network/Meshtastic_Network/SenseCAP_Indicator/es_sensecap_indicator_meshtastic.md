---
description: Comenzar con SenseCAP Indicator para Meshtastic
title: Comenzar con Indicator para Meshtastic
keywords:
- Meshtastic
- Indicator
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/indicator-page_1.webp
slug: /es/sensecap_indicator_meshtastic
last_update:
  date: 12/3/2024
  author: Michelle Huang
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

- **Soporta Meshtastic:** Pre-flasheado con firmware de Meshtastic, está listo para funcionar una vez encendido. También puedes actualizar el firmware usando Meshtastic Flasher.<br/>
- **MCUs Duales y GPIOs Abundantes:** Equipado con potentes MCUs duales ESP32S3 y RP2040 y más de 400 GPIOs compatibles con Grove para opciones de expansión flexibles.<br/>
- **Hub LoRa® Local para Conectividad IoT:** Integrado con el chip LoRa® Semtech SX1262, el dispositivo puede convertirse en un Gateway LoRaWAN® de Canal Único mediante tutorial. Alternativamente, conecta dispositivos LoRa® a plataformas IoT populares como Matter vía Wi-Fi.<br/>
- **Plataforma Completamente de Código Abierto:** Aprovecha el extenso ecosistema de código abierto de ESP32 y Raspberry Pi para infinitas posibilidades de aplicación.<br/>
- **Adecuado para Múltiples Escenarios de Aplicación:** Puede usarse como un nodo de escritorio Meshtastic o un nodo de coche, así como un Gateway LoRaWAN® de Canal Único.

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
|**Buzzer(Aún no desarrollado)**|MLT-8530, Frecuencia de Resonancia：2700Hz|
|**Certificación**|CE/FCC|

### Descripción General del Hardware

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/HO-114993532.png" alt="pir" width={800} height="auto" /></p>

## Comenzar
:::danger nota
Cuando el dispositivo esté en los estados siguientes, por favor no lo reinicies manualmente ni lo apagues. De lo contrario, el dispositivo puede quedar inutilizado.
1. No terminar el proceso de transmisión de mensajes
2. Estar siendo configurado
:::

### Flashear Firmware de Aplicación

:::caution nota
Antes de flashear el firmware, por favor asegúrate de que el indicator que compraste es la versión para Meshtastic. No flashees el firmware de Meshtastic en un indicator que no sea compatible con Meshtastic. Esto puede causar daño al hardware. Por favor `no uses NRF-OTA` para actualizar el firmware, puede causar que el dispositivo quede completamente inutilizado.
:::

**Instrucciones en Video**

<div class="video-container">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/55Sz8kHSyV4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Visita [Meshtastic Web Flasher](https://flasher.meshtastic.org/).

Selecciona el dispositivo objetivo como `Seeed SenseCAP Indicator` y elige el firmware más reciente, luego haz clic en `Flash`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/indicator-flash.png" alt="pir" width={800} height="auto" /></p>

Mantén presionado el botón mientras conectas el cable USB.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/press-button.png" alt="pir" width={400} height="auto" /></p>

Habilita `Full Erase and Install`, y haz clic en `Erase Flash and Install`.

Se mostrarán 2 puertos, selecciona el `USB serial port` y haz clic en `Connect`.

:::caution nota
Por favor selecciona el `USB Serial`, no el INDICATOR RP2040.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect11.png" alt="pir" width={800} height="auto" /></p>

### Flashear Firmware GPS(opcional)

El SenseCAP Indicator no tiene GPS integrado, para obtener la ubicación GPS, se requiere un [Módulo GPS Grove](https://www.seeedstudio.com/Grove-GPS-Air530-p-4584.html).<br/>
Conecta el Módulo GPS al puerto Grove y luego flashea el firmware GPS.

- **[Descarga de Firmware GPS](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/meshtastic_gps.ino.uf2)**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/gps-connect.png" alt="pir" width={800} height="auto" /></p>

Mantén presionado este botón interno usando una aguja, luego conecta el dispositivo a tu PC con el cable USB tipo-C proporcionado, suelta el botón una vez conectado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_56.png" alt="pir" width={600} height="auto" /></p>

Descarga el archivo `UF2` y cópialo a la unidad `RPI-RP2`. El firmware debería flashearse después de que el archivo se descargue y el dispositivo se reinicie.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/disk.png" alt="pir" width={600} height="auto" /></p>

Descarga la App `Meshtastic`:

- [App IOS](https://meshtastic.org/docs/category/apple-apps/)
- [App Android](https://meshtastic.org/docs/category/android-app/)

### Conectar vía App

- Enciende el dispositivo, la página del dispositivo mostrará la dirección mac del dispositivo actual.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/device-name4.png" alt="pir" width={700} height="auto" /></p>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="App IOS">

- Selecciona el dispositivo objetivo en el panel de Bluetooth.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- Ingresa el código y luego haz clic en `Pair` para conectar el dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair111.png" alt="pir" width={800} height="auto" /></p>

</TabItem>

<TabItem value="android" label="App Android">

- Haz clic en `+` y elige el dispositivo objetivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>

- Ingresa el código(el código por defecto es `123456`) y luego haz clic en `OK` para conectar el dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

### Configurar los Parámetros

Para comenzar a comunicarse a través de la malla, debes establecer tu región. Esta configuración controla qué rango de frecuencia usa tu dispositivo y debe establecerse según tu ubicación regional.

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

Consulta [Región LoRa por País](https://meshtastic.org/docs/configuration/region-by-country/) para una lista más completa.

:::info
**EU_868** debe adherirse a una limitación de ciclo de trabajo por hora del 10%, calculada cada minuto en una base móvil de 1 hora. Tu dispositivo dejará de transmitir si lo alcanzas, hasta que se permita nuevamente.
:::

Ahora que has establecido la región LoRa en tu dispositivo, puedes continuar configurando cualquier [Configuración LoRa](https://meshtastic.org/docs/configuration/radio/lora/) para satisfacer tus necesidades.

### Teclado

:::tip nota
El uso del teclado de la versión 2.5.xx(El firmware de fábrica es v2.5.11.) y la versión más nueva que 2.6.xx es diferente. Por favor verifica lo siguiente según tu versión actual de firmware.
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

RP2040 aún no ha sido desarrollado, por lo que las funciones de `buzzer`/`tarjeta SD`/`mapa` no están disponibles aún. Estamos trabajando con Meshtastic para optimizarlo.

#### Selección de Rol

:::caution
NO selecciones el rol `Repeater`, lo cual causará que el dispositivo se reinicie repetidamente.
:::

#### Módulo GPS

Si no conectaste el módulo GPS, por favor deshabilita la función GPS en la App `Meshtastic`, de lo contrario el dispositivo seguirá tratando de encontrar el módulo GPS, lo cual causará que el dispositivo tome mucho tiempo en arrancar la pantalla.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/gps-module.png" alt="pir" width={600} height="auto" /></p>
