---
description: Introducción a la Serie Wio Tracker L2. Incluye características, funciones, parámetros y comparación de la serie.
title: Introducción a Wio Tracker L2
keywords:
  - Meshtastic
  - Wio Tracker L2
image: https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/L2First.png
slug: /meshtastic_wio_tracker_l2_intro
sku: 100029766
sidebar_position: 0
last_update:
  date: 3/13/2026
  author: Michelle Huang
createdAt: '2025-06-17'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/es/meshtastic_wio_tracker_l2_intro/
---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/L2First.png" alt="pir" width={900} height="auto" /></p>

La Serie Wio Tracker L2 es un nodo [Meshtastic®](https://meshtastic.org/) altamente extensible que incorpora LoRa (862–930 MHz), el ESP32S3 para un procesamiento eficiente y un módulo GPS L76K para un seguimiento de ubicación preciso. Diseñado para ofrecer flexibilidad, es compatible con pantalla táctil QSPI, pantallas E-Ink, tarjeta TF, así como paneles solares y alimentación por batería, lo que lo hace ideal para una amplia gama de aplicaciones IoT y fuera de la red.

## Características

- **Pantalla táctil de alta calidad de 3,2''**: Con una pantalla de 320×240 de alta claridad y conmutación entre MUI y Base UI, ofrece una interacción fluida en el dispositivo para mensajería, mapas y control, sin necesidad de un teléfono móvil.

- **Impulsado por ESP32S3, listo para desarrollar**: Impulsado por el ESP32-S3 de doble núcleo con Wi-Fi y Bluetooth LE, L2 Pro proporciona una plataforma flexible para la personalización de la interfaz, el desarrollo de funciones y aplicaciones de código abierto.

- **Mapas sin conexión con posicionamiento GNSS**: Descarga previamente mapas sin conexión en una tarjeta MicroSD y visualiza tu ubicación GNSS en tiempo real directamente en el dispositivo, incluso sin cobertura celular ni acceso a Internet.

- **Batería de larga duración de 3000 mAh**: Admite un uso diario prolongado con menor frecuencia de carga; funciona en condiciones de -10°C a 55°C.

- **Fácil de transportar, colocación flexible**: Una antena plegable mejora la portabilidad y la interfaz de montaje de 1/4" permite una colocación flexible con accesorios compatibles.

## Especificación

<table>
  <tr>
    <th colspan="1">**Elemento**</th>
    <th colspan="1">**Parámetro**</th>
  </tr>
  <tr>
    <td colspan="1">**Procesador**</td>
    <td colspan="1">Wio-S3 (ESP32S3 + Módulo SX1262)</td>
  </tr>
    <tr>
    <td colspan="1">**LoRa**</td>
    <td colspan="1">863-928 MHz<br/>Potencia TX MÁX: 20dBm@US915,14dBm@EU868</td>
  </tr>
    <tr>
    <td colspan="1">**GNSS**</td>
    <td colspan="1">L76K (GPS, BeiDou, GLONASS, QZSS)</td>
  </tr>
  <tr>
    <td colspan="1">**Memoria integrada**</td>
    <td colspan="1">16MB Flash / 8MB PSRAM</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="3">**Antena**</td>
    <td colspan="1">LoRa: </td>
  </tr>
   <tr>
    <td colspan="1">Wifi/BLE 5.0: antena FPC</td>
  </tr>
  <tr>
    <td colspan="1">GPS: antena cerámica</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="3">**Interfaz**</td>
    <td colspan="1">Grove *1: </td>
  </tr>
  <tr>
    <td colspan="1">Ranura para tarjeta MicroSD</td>
  </tr>
  <tr>
    <td colspan="1">Orificio roscado de un cuarto de pulgada</td>
  </tr>
   <tr>
    <td colspan="1">**Interfaz QSPI**</td>
    <td colspan="1">Compatible con pantalla IPS y pantalla E-INK</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="3">**Entrada de alimentación**</td>
    <td colspan="1">USB Type-C: 5V — 1A</td>
  </tr>
  <tr>
    <td colspan="1">Solar:JST-PH 2P-2.0mm, 5V ~ 13V</td>
  </tr>
  <tr>
    <td colspan="1">Batería de iones de litio (2P-1.25mm): 3.7V</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="2">**Pantalla táctil IPS**</td>
    <td colspan="1">Tamaño: 3.2 pulgadas</td>
  </tr>
  <tr>
    <td colspan="1">Resolución: 240 × 320 píxeles</td>
  </tr>
    <tr>
    <td colspan="1">**LED**</td>
    <td colspan="1">Mesh LED * 1<br/>LED de carga * 1</td>
  </tr>
  <tr>
    <td colspan="1">**Botón**</td>
    <td colspan="1">WAKE-UP * 1<br/>Usuario/Boot * 1<br/>RST * 1<br/>Interruptor de encendido * 1</td>
  </tr>
    <tr>
    <td colspan="1" rowspan="3">**Audio**</td>
    <td colspan="1">Códec I2S: ES8311</td>
  </tr>
  <tr>
    <td colspan="1">MIC: pin reservado</td>
  </tr>
    <tr>
    <td colspan="1">Altavoz: 6Ω 0.8W</td>
  </tr>
    <tr>
    <td colspan="1">**Distancia de comunicación**</td>
    <td colspan="1">Hasta 5.8 km</td>
  </tr>
    <tr>
    <td colspan="1">**Dimensiones**</td>
    <td colspan="1"></td>
  </tr>
  <tr>
    <td colspan="1">**Peso del dispositivo**</td>
    <td colspan="1"></td>
  </tr>
    <tr>
    <td colspan="1">**Temperatura de funcionamiento**</td>
    <td colspan="1">-10℃ a +55℃</td>
  </tr>
  <tr>
    <td colspan="1">**Certificación**</td>
    <td colspan="1">FCC,CE,RoHS,Telec</td>
  </tr>
</table>

**Batería**

|Elemento|Parámetro|
| :- | :- |
|**Capacidad de la batería**|Batería recargable de iones de litio, 3000mAh|
|**Supervisión de la vida de la batería**|Nivel de batería en enlace ascendente periódico|
|**Protocolo de carga**|USB Type-C|
|**Entrada de alimentación del dispositivo**|5V, 1A|
|**Voltaje de corte completamente cargado**|4.2V|
|**Límite de temperatura de carga**|0 a +45℃|

## Lista de pines

<table>
  <tr>
    <th>Componente</th>
    <th>Pin</th>
    <th>N.º de pin</th>
    <th>Protocolo</th>
  </tr>
  <tr>
    <td rowspan="9">Pantalla</td>
    <td>QSPI_CLK</td>
    <td>GPIO42</td>
    <td rowspan="6">QSPI</td>
  </tr>
  <tr>
    <td>QSPI_DAT0</td>
    <td>GPIO41</td>
  </tr>
  <tr>
    <td>QSPI_DAT1</td>
    <td>GPIO40</td>
  </tr>
  <tr>
    <td>QSPI_DAT2</td>
    <td>GPIO39</td>
  </tr>
  <tr>
    <td>QSPI_DAT3</td>
    <td>GPIO38</td>
  </tr>
  <tr>
    <td>QSPI_CS</td>
    <td>GPIO46</td>
  </tr>
  <tr>
    <td>LCD_EN</td>
    <td>EXP_P05</td>
    <td rowspan="2">GPIO</td>
  </tr>
  <tr>
    <td>QSPLRST</td>
    <td>EXP_P06</td>
  </tr>
  <tr>
    <td>QSPLTE</td>
    <td>NC</td>
    <td>NC</td>
  </tr>
  <tr>
    <td rowspan="5">E-INK</td>
    <td>E_INK_SCK</td>
    <td>GPIO42</td>
    <td rowspan="3">SPI</td>
  </tr>
  <tr>
    <td>E_INK_MOSI</td>
    <td>GPIO41</td>
  </tr>
  <tr>
    <td>E_INK_CS</td>
    <td>GPIO40</td>
  </tr>
  <tr>
    <td>E_INK_DC</td>
    <td>GPIO39</td>
    <td rowspan="2">GPIO</td>
  </tr>
  <tr>
    <td>E_INK_BUSY</td>
    <td>GPIO38</td>
  </tr>
  <tr>
    <td rowspan="2">IIC</td>
    <td>IIC0_SCL</td>
    <td>GPIO48</td>
    <td rowspan="2">IIC</td>
  </tr>
  <tr>
    <td>IIC0_SDA</td>
    <td>GPIO47</td>
  </tr>
  <tr>
    <td rowspan="7">LoRa</td>
    <td>LoRa_CS</td>
    <td>GPIO21</td>
    <td rowspan="4">SPI</td>
  </tr>
  <tr>
    <td>LoRa_SCK</td>
    <td>GPIO4</td>
  </tr>
  <tr>
    <td>LoRa_MISO</td>
    <td>GPIO5</td>
  </tr>
  <tr>
    <td>LoRa_MOSI</td>
    <td>GPIO6</td>
  </tr>
  <tr>
    <td>LoRa_RST</td>
    <td>GPIO7</td>
    <td rowspan="3">GPIO</td>
  </tr>
  <tr>
    <td>LoRa_BUSY</td>
    <td>GPIO8</td>
  </tr>
  <tr>
    <td>LoRa_DIO1</td>
    <td>GPIO9</td>
  </tr>
  <tr>
    <td rowspan="3">Grove</td>
    <td>GROVE_DAT_1</td>
    <td>GPIO14</td>
    <td rowspan="3">GPIO</td>
  </tr>
  <tr>
    <td>GROVE_DAT_2</td>
    <td>GPIO13</td>
  </tr>
  <tr>
    <td>GROVE_EN</td>
    <td>EXP_P07</td>
  </tr>
  <tr>
    <td rowspan="4">GNSS</td>
    <td>GNSS_RX</td>
    <td>GPIO18</td>
    <td rowspan="2">UART</td>
  </tr>
  <tr>
    <td>GNSS_TX</td>
    <td>GPIO17</td>
  </tr>
  <tr>
    <td>GNSS_EN</td>
    <td>EXP_P15</td>
    <td rowspan="2">GPIO</td>
  </tr>
  <tr>
    <td>GNSS_RST</td>
    <td>EXP_P11</td>
  </tr>
  <tr>
    <td rowspan="5">I2S</td>
    <td>CODEC_I2S0_MCLK</td>
    <td>GPIO10</td>
    <td rowspan="5">I2S</td>
  </tr>
  <tr>
    <td>CODEC_I2S0_LRCK</td>
    <td>GPIO12</td>
  </tr>
  <tr>
    <td>CODEC_I2S0_SCLK</td>
    <td>GPIO11</td>
  </tr>
  <tr>
    <td>CODEC_I2S0_DSDIN</td>
    <td>GPIO16</td>
  </tr>
  <tr>
    <td>CODEC_I2S0_SDOUT</td>
    <td>GPIO15</td>
  </tr>
  <tr>
    <td rowspan="4">SD</td>
    <td>SD_CMD</td>
    <td>GPIO03</td>
    <td rowspan="3">SD</td>
  </tr>
  <tr>
    <td>SD_CLK</td>
    <td>GPIO02</td>
  </tr>
  <tr>
    <td>SD_DAT0</td>
    <td>GPIO01</td>
  </tr>
  <tr>
    <td>SD_DET</td>
    <td>EXP_P02</td>
    <td>GPIO</td>
  </tr>
  <tr>
    <td rowspan="2">USB</td>
    <td>USB_N</td>
    <td>GPIO19</td>
    <td rowspan="2">USB</td>
  </tr>
  <tr>
    <td>USB_P</td>
    <td>GPIO20</td>
  </tr>
  <tr>
    <td rowspan="2">LED</td>
    <td>MESH LED</td>
    <td>GPIO43</td>
    <td rowspan="2">GPIO</td>
  </tr>
  <tr>
    <td>USER_LED</td>
    <td>EXP_P12</td>
  </tr>
  <tr>
    <td>Botón</td>
    <td>WAKEUP_BUTTON</td>
    <td>EXP_P00</td>
    <td>GPIO</td>
  </tr>
</table>


## Descripción general del hardware

**Wio Tracker L2 Pro**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/L2DeviceComponent9.7(1).png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/L2DeviceComponent29.7(2).png" alt="pir" width={800} height="auto" /></p>

**Diagrama esquemático**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/SchematicDiagram9.7(1).png" alt="pir" width={800} height="auto" /></p>
