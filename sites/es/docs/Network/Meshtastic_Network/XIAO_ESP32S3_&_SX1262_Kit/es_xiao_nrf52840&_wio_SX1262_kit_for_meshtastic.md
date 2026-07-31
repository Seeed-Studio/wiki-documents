---
description: Meshtastic basado en XIAO nRF52840 y kit Wio-SX1262
title: Comienza con el kit XIAO nRF52840 y Wio-SX1262
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/52840-kit.webp
slug: /xiao_nrf52840&_wio_SX1262_kit_for_meshtastic
sidebar_position: 2
sku: 102010710
last_update:
  date: 12/11/2025
  author: Michelle Huang
createdAt: '2025-03-13'
updatedAt: '2026-06-09'
url: https://wiki.seeedstudio.com/es/xiao_nrf52840&_wio_SX1262_kit_for_meshtastic/
---


<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3-102010710-nrf52840_wio-sx1262-kit_1.jpg" alt="pir" width={800} height="auto" /></p>

Este kit combina el XIAO nRF52840 y el Wio-SX1262, es compatible con BLE5.0, Thread, Zigbee y LoRa (862-930MHz), y funciona con bajo consumo de energía. Puede aplicarse en diversos campos como [Meshtastic®](https://meshtastic.org/), redes de sensores, monitoreo ambiental, rastreo de activos, educación e innovación.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF52840-Wio-SX1262-Kit-for-Meshtastic-p-6400.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

<br></br>

## Descripción general

### Características

- **Microcontrolador versátil**: Incorpora el chip Nordic nRF52840 con FPU, que funciona hasta 64 MHz, monta múltiples puertos de desarrollo y es compatible con Arduino / CircuitPython / Micropython
- **Potente rendimiento LoRa**: LoRa de largo alcance en Semtech SX1262, compatible con las bandas de 868/915 MHz.
- **Comunicación de doble núcleo**: Es compatible con ambos modos duales Bluetooth y LoRa, lo que permite la interconexión entre dominios.
- Con unas dimensiones de solo **8mm × 22mm × 23mm**, presenta un diseño de antena integrada.

### Especificación

| **Producto** | **Especificaciones** |  
| :- | :- |  
| [XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html) | **MCU:** Nordic nRF52840  <br /> **Núcleo:** ARM® Cortex®-M4 con FPU, hasta 64 MHz |  
| [Wio-SX1262](https://www.seeedstudio.com/Wio-SX1262-for-XIAO-p-6379.html) | **Módulo LoRa:** Semtech SX1262  <br /> **Frecuencia:** 862&#126;930MHz |  
| **Inalámbrico** | Bluetooth 5.0 / NFC |  
| **Interfaz** | **XIAO nRF52840:**  <br /> - 1x UART, 1x I²C, 1x SPI (conectado al SX1262)  <br /> - 1x NFC, 1x SWD, 11x GPIO (PWM)  <br /> - 6x ADC  <br /> **Wio-SX1262:**  <br />  - 1x SPI (conectado al XIAO nRF52840) |  
| **Alimentación** | **Voltaje de entrada:**  <br /> - Type-C: 5V  <br /> - Batería (BAT): 4.2V  <br /> **Corriente de carga de la batería:** 50mA / 100mA  <br /> **Consumo de energía en espera:** &lt;5µA |  
| **Temperatura de funcionamiento** | -40°C &#126; 65°C |  
| **Dimensiones** | 21 x 17.8mm |  

### Distribución de pines

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/imageXIAO_nRF52840-2.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image_Wio-SX1262_-1.png" alt="pir" width={800} height="auto" /></p>

## Primeros pasos

El kit XIAO nRF52840 y Wio-SX1262 viene pregrabado con el firmware Meshtastic, lo que te permite comenzar rápidamente.

### Grabar firmware

:::caution note
Por favor, `don't use NRF-OTA` para actualizar el firmware, ya que puede hacer que el dispositivo quede completamente inservible.
:::

**Instrucciones en video:**

<div class="video-container">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/li6DTOeXK3M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Visita [Meshtastic Web Flasher](https://flasher.meshtastic.org/).

Conecta el kit a tu PC, selecciona el dispositivo `Seeed` → `Seeed XIAO nRF52840 Kit`, y elige el firmware más reciente, luego haz clic en `Flash`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/select-device.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/filw-flash.png" alt="pir" width={800} height="auto" /></p>

Haz clic en `Enter DFU Mode`, aparecerá un puerto serie llamado `XIAO-xxx`, haz clic y conéctalo, y debería mostrarse una unidad llamada `XIAO-xxx`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/52840-connect.png" alt="pir" width={800} height="auto" /></p>

Arrastra el archivo UF2 a la unidad DFU. El firmware debería grabarse después de que el archivo se copie y el dispositivo se reinicie.

### Comprobar el nombre del nodo

Visita [Meshtastic Flasher](https://flasher.meshtastic.org/) y abre el `Serial Monitor`, busca `nodenum` para encontrar el ID de nodo correspondiente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/device-name3.png" alt="pir" width={800} height="auto" /></p>

### Conectar mediante la app

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="App de IOS">

- Selecciona el dispositivo de destino en el panel de Bluetooth.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- Introduce el código (el código predeterminado es `123456`) y luego haz clic en `OK` para conectar el dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="App de Android">

- Haz clic en `+` y elige el dispositivo de destino.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>

- Introduce el código (el código predeterminado es `123456`) y luego haz clic en `OK` para conectar el dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

### Configurar los parámetros

Para empezar a comunicarte a través de la malla, debes establecer tu región. Esta configuración controla qué rango de frecuencias utiliza tu dispositivo y debe ajustarse de acuerdo con tu ubicación regional.

<Tabs>
<TabItem value="ios" label="App de IOS">

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

Ahora que has configurado la región LoRa en tu dispositivo, puedes continuar configurando cualquier [LoRa Configs](https://meshtastic.org/docs/configuration/radio/lora/) para adaptarlas a tus necesidades.

#### Configuración del sensor GNSS

Conecta un [Módulo GNSS L76K](https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html) para crear un rastreador.

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image_102010710.gif" alt="pir" width={600} height="auto" /></p>


### El SX-1262 compatible
[Click here](https://www.seeedstudio.com/Wio-SX1262-Wireless-Module-p-5981.html) para obtener el SX1262 que se vende por separado.

## Recursos
### Recursos de archivos

- **[PDF]** [Diseño de referencia de Xiao](https://files.seeedstudio.com/wiki/XIAO/XIAO-Reference-Design.pdf)
- **[PDF]** [Informe de prueba de distancia de comunicación BLE del Seeed Studio XIAO nRF52840](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed_XIAO_BLE_nRF52840_BLE_Communication_Distance_Test_Report.pdf)
- **[ZIP]** [Seeed Studio XlAO nRF52840 CE |FCC|MIC](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-CE-FCC-MIC.zip)
- **[PDF]** [Hoja de datos nRF52840](https://files.seeedstudio.com/wiki/XIAO-BLE/nRF52840_PS_v1.5.pdf)
- **[PDF]** [Esquemático del Seeed Studio XIAO nRF52840](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-Sense-v1.1.pdf)
- **[ZIP]** [Archivo KiCAD del Seeed Studio XIAO nRF52840](https://files.seeedstudio.com/wiki/XIAO-BLE/SeeedStudio_XIAO_nRF52840_v1.1_SCH&PCB.zip)
- **[ZIP]** [Archivo Eagle del Seeed Studio XIAO nRF52840](https://files.seeedstudio.com/wiki/XIAO-BLE/SeeedStudio_XIAO_nRF52840_v1.1_KiCAD.zip)
- **[DXF]** [Dimensiones en DXF del Seeed Studio XIAO nRF52840](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-DXF.zip)
- **[LBR]** [Huella Eagle del Seeed Studio XIAO nRF52840](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-footprint-eagle.lbr)
- **[XLSX]** [Hoja de distribución de pines del Seeed Studio XIAO nRF52840](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-pinout_sheet.xlsx)
- 🔗 **[Kicad]** [Huella del Seeed Studio XIAO nRF52840](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)
- **[PDF]** [Diagrama esquemático del SX1262 compatible con Xiao nRF52840](https://files.seeedstudio.com/products/113010003/Wio-SX1262%20for%20XIAO%20V1.0.pdf)
- **[PDF]** [Hoja de datos del módulo Wio SX-1262](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_Module_Datasheet.pdf
)

### Recursos de cursos

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[Ebook]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

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