---
description: Introducción al Nodo Meshtastic Wio Tracker L1
title: Nodo Meshtastic Wio Tracker L1
keywords:
- Meshtastic
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-L1.webp
slug: /es/wio_tracker_l1_node
sidebar_position: 1
last_update:
  date: 12/18/2025
  author: Michelle Huang
---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-l1.jpg" alt="pir" width={600} height="auto" /></p>
<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Tracker-L1-p-6453.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora </font></span></strong>
    </a>
</div>
La Wio Tracker L1 Serie es un nodo [Meshtastic®](https://meshtastic.org/) de bajo consumo y altamente extensible que cuenta con LoRa (862–930 MHz), el nRF52840 para procesamiento eficiente, y un módulo GPS L76K para seguimiento preciso de ubicación. Diseñado para flexibilidad, soporta pantallas OLED y E-Ink, así como paneles solares y alimentación por batería, haciéndolo ideal para una amplia gama de aplicaciones IoT y fuera de la red.

## Modelo L1 Serie

:::tip
La Wio Tracker L1 Serie está disponible en 4 versiones—elige la que mejor se adapte a tus necesidades.
:::

### Introducción de la Serie

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/TTiDN3h7cNk?si=2F0PXFlQmDSefCdX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### Comparación de Versiones

|Nombre del Producto|Wio Tracker L1 Lite|Wio Tracker L1|Wio Tracker L1 Pro|Wio Tracker L1 E-Ink|
|------------------|------------------|--------------------------|-----------------------|-----------------------|
|Imagen|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993653-wio-tracker-l1-lite.jpg" alt="pir" width={300} height="auto" />|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993648-wio-tracker-l1.jpg" alt="pir" width={300} height="auto" />|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993649-wio-tracker-l1-pro.jpg" alt="pir" width={300} height="auto" />|<img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/L1-e-ink.png" alt="pir" width={300} height="auto" />|
|Enlace de Compra|<p style={{textAlign: 'center'}}>[¡Obtener Uno Ahora!](https://www.seeedstudio.com/Wio-Tracker-L1-Lite-p-6455.html)</p>|<p style={{textAlign: 'center'}}>[¡Obtener Uno Ahora!](https://www.seeedstudio.com/Wio-Tracker-L1-p-6453.html)</p>|<p style={{textAlign: 'center'}}>[¡Obtener Uno Ahora!](https://www.seeedstudio.com/Wio-Tracker-L1-Pro-p-6454.html)</p>|<p style={{textAlign: 'center'}}>[¡Obtener Uno Ahora!](https://www.seeedstudio.com/Wio-Tracker-L1-E-ink-p-6456.html)</p>|
|LoRa|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|
|GPS|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|
|Pantalla|<p style={{textAlign: 'center'}}>-</p>|<p style={{textAlign: 'center'}}>OLED de 1.3 pulgadas</p><br/><p style={{textAlign: 'center'}}>Resolución: 128 × 64 píxeles</p>|<p style={{textAlign: 'center'}}>OLED de 1.3 pulgadas</p><br/><p style={{textAlign: 'center'}}>Resolución: 128 × 64 píxeles</p>|<p style={{textAlign: 'center'}}>E-ink de 2.13 pulgadas</p><br/><p style={{textAlign: 'center'}}>Resolución: 122 × 250 píxeles</p>|
|Conector Solar+Batería|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>Batería integrada de 2000mAh</p>|<p style={{textAlign: 'center'}}>✅</p>|
|Carcasa|<p style={{textAlign: 'center'}}>-</p>|<p style={{textAlign: 'center'}}>-</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>-</p>|

## Descripción General

### Características

- **Pre-cargado con firmware Meshtastic**
Listo para usar desde el primer momento con firmware Meshtastic preinstalado para una configuración sin problemas.

- **Opciones de Triple Alimentación**
Soporta carga rápida Type-C, entrada solar y alimentación por batería Li-ion para despliegue flexible en varios entornos—ideal para aplicaciones exteriores y móviles.

- **Soporte de Pantalla Flexible**
Pantallas opcionales OLED de 1.3 pulgadas y E-Ink de 2.13 pulgadas, ofreciendo opciones de visualización versátiles para diferentes necesidades de consumo de energía y retroalimentación visual.

- **Alta Expandibilidad**
Totalmente compatible con el ecosistema Grove, e incluye cabeceras PTH y una interfaz de depuración SWD para expansión de hardware personalizada y desarrollo avanzado.

### Especificaciones

:::tip
Los últimos lotes de L1, L1 Lite y L1 E-Ink vienen todos con un cable adaptador de batería, convirtiendo la interfaz de 1mm a una interfaz de 2mm. Esto te da más opciones para baterías.
:::

<table>
  <tr>
    <th colspan="1">Procesador</th>
    <th colspan="1">
      Nordic nRF52840<br />ARM® Cortex®-M4 con FPU funciona hasta 64 MHz
    </th>
  </tr>
  <tr>
    <td colspan="1">Memoria en Chip</td>
    <td colspan="1">1 MB flash y 256 kB RAM</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="3">Inalámbrico</td>
    <td colspan="1">LoRa: Basado en <a href="https://www.seeedstudio.com/Wio-SX1262-Wireless-Module-p-5981.html">Wio-SX1262</a>, soporta 862-930MHz</td>
  </tr>
   <tr>
  <td colspan="1">Antena LoRa para L1 Pro: 3dBi</td>
  </tr>
  <tr>
    <td colspan="1">Bluetooth 5.0</td>
  </tr>
  <tr>
    <td colspan="1">GPS</td>
    <td colspan="1">L76K (GPS, BeiDou, GLONASS, QZSS)</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="3">Interfaz</td>
    <td colspan="1">Grove *1: UART/IIC/GPIO</td>
  </tr>
  <tr>
    <td colspan="1">Orificio Pasante Chapado（PTH）: UART/IIC/GPIO/Analógico</td>
  </tr>
  <tr>
    <td colspan="1">Pads de soldadura reservados para SWD</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="3">Entrada de Alimentación</td>
    <td colspan="1">USB Type-C: 5V — 1A</td>
  </tr>
  <tr>
    <td colspan="1">Panel Solar (2.0mm 2p): 5V — 1A</td>
  </tr>
  <tr>
    <td colspan="1">Batería de Litio (1mm 2p JST): 3.7V — 1A</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="3">[Pantalla OLED](https://www.seeedstudio.com/1-3inch-OLED-128-64-White-FPC-p-6614.html)</td>
    <td colspan="1">Tamaño: 1.3 pulgadas</td>
  </tr>
  <tr>
    <td colspan="1">Resolución: 128 × 64 píxeles</td>
  </tr>
  <tr>
    <td colspan="1">Área Activa (mm): 34.5 × 23.0</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="3">[Pantalla E-Ink](https://www.seeedstudio.com/2-13-Monochrome-ePaper-Display-with-122x250-Pixels-p-5778.html)</td>
    <td colspan="1">Tamaño: 2.13 pulgadas</td>
  </tr>
  <tr>
    <td colspan="1">Resolución: 122 × 250 píxeles</td>
  </tr>
  <tr>
    <td colspan="1">Área Activa (mm): 48.55 × 23.7046</td>
  </tr>
  <tr>
    <td colspan="1">Certificación</td>
    <td colspan="1">FCC, CE, RoHS</td>
  </tr>
</table>

### Descripción General del Hardware

**Wio Tracker L1**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio_tracker-l1.png" alt="pir" width={800} height="auto" /></p>

**Wio Tracker L1 Lite**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio_tracker_l1_lite.png" alt="pir" width={800} height="auto" /></p>

**Wio Tracker L1 Pro**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio_tracker_l1-pro.png" alt="pir" width={800} height="auto" /></p>

**Diagrama**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1%20Diagram.png" alt="pir" width={800} height="auto" /></p>
