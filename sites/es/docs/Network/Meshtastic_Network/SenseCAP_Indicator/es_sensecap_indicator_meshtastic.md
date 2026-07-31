---
description: Comienza con SenseCAP Indicator para Meshtastic
title: Comienza con Indicator para Meshtastic
keywords:
  - Meshtastic
  - Indicator
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/indicator-page_1.webp
slug: /sensecap_indicator_meshtastic
sku: 114993532
last_update:
  date: 12/3/2024
  author: Michelle Huang
createdAt: '2024-10-29'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/es/sensecap_indicator_meshtastic/
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
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

SenseCAP Indicator es un dispositivo con pantalla táctil de 4 pulgadas diseñado para [Meshtastic®](https://meshtastic.org/), impulsado por dos MCU, el ESP32 y el RP2040, y es compatible con Wi-Fi, BLE y LoRa®. Es una potente plataforma de desarrollo IoT de código abierto.

## Introducción

### Características

- **Compatible con Meshtastic:** Viene pregrabado con el firmware de Meshtastic, por lo que está listo para funcionar una vez encendido. También puedes actualizar el firmware usando Meshtastic Flasher.<br/>
- **Doble MCU y GPIO abundantes:** Equipado con potentes MCU duales ESP32S3 y RP2040 y más de 400 GPIO compatibles con Grove para opciones de expansión flexibles.<br/>
- **Hub LoRa® local para conectividad IoT:** Integrado con el chip LoRa® Semtech SX1262, el dispositivo se puede convertir en una puerta de enlace LoRaWAN® de un solo canal mediante un tutorial. Alternativamente, conecta dispositivos LoRa® a plataformas IoT populares como Matter a través de Wi-Fi.<br/>
- **Plataforma totalmente de código abierto:** Aprovecha el amplio ecosistema de código abierto de ESP32 y Raspberry Pi para infinitas posibilidades de aplicación.<br/>
- **Adecuado para múltiples escenarios de aplicación:** Se puede utilizar como nodo de escritorio Meshtastic o nodo para automóvil, así como una puerta de enlace LoRaWAN® de un solo canal.

### Especificación

|Pantalla|3,95 pulgadas, pantalla táctil capacitiva RGB|
| :- | :- |
|**Resolución de pantalla**|480 x 480 píxeles|
|**Alimentación**|5V-DC, 1A|
|**Batería**|N/A|
|**Procesador**|<p>**ESP32-S3:** Xtensa® de doble núcleo de 32 bits hasta 240 MHz</p><p>**RP2040:** ARM Cortex-M0+ doble hasta 133MHz</p>|
|**Flash**|<p>**ESP32-S3:** 8MB</p><p>**RP2040:** 2MB</p>|
|**Almacenamiento externo**|Admite tarjeta Micro SD de hasta 32GB (no incluida)|
|**Wi-Fi**|802.11b/g/n, 2,4GHz|
|**Bluetooth**|Bluetooth 5.0 LE|
|**LoRa(SX1262**)|Compatible con 862-930MHz|
|**Zumbador (aún no desarrollado)**|MLT-8530, frecuencia de resonancia: 2700Hz|
|**Certificación**|CE/FCC|

### Descripción general del hardware

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/HO-114993532.png" alt="pir" width={800} height="auto" /></p>

## Primeros pasos
:::danger note
Cuando el dispositivo se encuentre en los siguientes estados, no lo reinicies ni lo apagues manualmente. De lo contrario, el dispositivo puede quedar inutilizado.
1. No ha finalizado el proceso de transmisión de mensajes
2. Está siendo configurado
:::

### Grabar firmware de la aplicación

:::caution note
Antes de grabar el firmware, asegúrate de que el Indicator que compraste es la versión para Meshtastic. No grabes el firmware de Meshtastic en un Indicator que no sea compatible con Meshtastic. Esto puede causar daños en el hardware. Por favor, `don't use NRF-OTA` para actualizar el firmware, ya que puede hacer que el dispositivo quede completamente inutilizado.
:::

**Instrucciones en video**

<div class="video-container">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/55Sz8kHSyV4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Visita [Meshtastic Web Flasher](https://flasher.meshtastic.org/).

Selecciona el dispositivo de destino como `Seeed SenseCAP Indicator` y elige el firmware más reciente, luego haz clic en `Flash`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/indicator-flash.png" alt="pir" width={800} height="auto" /></p>

Mantén presionado el botón mientras conectas el cable USB.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/press-button.png" alt="pir" width={400} height="auto" /></p>

Activa la opción `Full Erase and Install` y haz clic en `Erase Flash and Install`.

Se mostrarán 2 puertos, selecciona el `USB serial port` y haz clic en `Connect`.

:::caution note
Selecciona el `USB Serial`, no el INDICATOR RP2040.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect11.png" alt="pir" width={800} height="auto" /></p>

### Grabar firmware del GPS (opcional)

El SenseCAP Indicator no tiene GPS integrado; para obtener la ubicación GPS, se requiere un [Grove GPS Module](https://www.seeedstudio.com/Grove-GPS-Air530-p-4584.html).<br/>
Conecta el módulo GPS al puerto Grove y luego graba el firmware del GPS.

- **[Descarga del firmware GPS](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/meshtastic_gps.ino.uf2)**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/gps-connect.png" alt="pir" width={800} height="auto" /></p>

Mantén presionado este botón interno usando una aguja, luego conecta el dispositivo a tu PC con el cable USB tipo C proporcionado y suelta el botón una vez conectado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_56.png" alt="pir" width={600} height="auto" /></p>

Descarga el archivo `UF2` y cópialo a la unidad `RPI-RP2`. El firmware debería grabarse después de que se copie el archivo y el dispositivo se reinicie.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/disk.png" alt="pir" width={600} height="auto" /></p>

Descarga la App `Meshtastic`:

- [App IOS](https://meshtastic.org/docs/category/apple-apps/)
- [App Android](https://meshtastic.org/docs/category/android-app/)

### Conectar mediante la App

- Enciende el dispositivo; en la página del dispositivo se mostrará la dirección MAC del dispositivo actual.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/device-name4.png" alt="pir" width={700} height="auto" /></p>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="App IOS">

- Selecciona el dispositivo de destino en el panel de Bluetooth.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- Introduce el código y luego haz clic en `Pair` para conectar el dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair111.png" alt="pir" width={800} height="auto" /></p>

</TabItem>

<TabItem value="android" label="App Android">

- Haz clic en `+` y elige el dispositivo de destino.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>

- Introduce el código (el código predeterminado es `123456`) y luego haz clic en `OK` para conectar el dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

### Configurar los parámetros

Para empezar a comunicarte a través de la malla, debes establecer tu región. Este ajuste controla qué rango de frecuencias utiliza tu dispositivo y debe configurarse de acuerdo con tu ubicación regional.

<Tabs>
<TabItem value="ios" label="App IOS">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="App Android">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-region.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

**Lista de regiones**

|**Código de región**|**Descripción**|**Rango de frecuencias (MHz)**|**Ciclo de trabajo (%)**|**Límite de potencia (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|Sin establecer|N/A|N/A|N/A|
|US|Estados Unidos|902.0 - 928.0|100|30|
|EU_868|Unión Europea 868MHz|869.4 - 869.65|10|27|

Consulta [LoRa Region by Country](https://meshtastic.org/docs/configuration/region-by-country/) para obtener una lista más completa.

:::info
**EU_868** debe cumplir una limitación de ciclo de trabajo por hora del 10%, calculada cada minuto sobre una base móvil de 1 hora. Tu dispositivo dejará de transmitir si alcanzas este límite, hasta que se le permita de nuevo.
:::

Ahora que has configurado la región LoRa en tu dispositivo, puedes continuar configurando cualquier [LoRa Configs](https://meshtastic.org/docs/configuration/radio/lora/) según tus necesidades.

### Teclado

:::tip note
El uso del teclado en la versión 2.5.xx (el firmware de fábrica es v2.5.11) y en las versiones posteriores a la 2.6.xx es diferente. Consulta lo siguiente según la versión de firmware que tengas actualmente.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/keyboard-ve.png" alt="pir" width={400} height="auto" /></p>

#### Para la versión 2.5.xx

<div class="table-center">
<iframe width="500" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/keyboard-usage.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

#### Para la versión 2.6 +

<div class="table-center">
<iframe width="500" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/keyboard-usage2.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### Preguntas frecuentes

#### Parte RP2040

RP2040 aún no se ha desarrollado, por lo que las funciones de `buzzer`/`SD card`/`map` todavía no están disponibles. Estamos trabajando con Meshtastic para optimizarlo.

#### Selección de rol

:::caution
NO selecciones el rol `Repeater`, ya que hará que el dispositivo se reinicie repetidamente.
:::

#### Módulo GPS

Si no conectaste el módulo GPS, desactiva la función GPS en la App `Meshtastic`; de lo contrario, el dispositivo seguirá intentando encontrar el módulo GPS, lo que hará que tarde mucho en encender la pantalla.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/gps-module.png" alt="pir" width={600} height="auto" /></p>

## Soporte técnico y debate sobre el producto

<p style={{textAlign: 'center'}}><a href="https://www.facebook.com/groups/1755190828846458" target="_blank"><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/Banner_QRCode_FB.jpg" border="0" /></a></p>

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