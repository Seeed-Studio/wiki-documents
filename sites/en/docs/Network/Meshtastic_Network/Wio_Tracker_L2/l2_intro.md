---
description: Introduction for Wio Tracker L2 Series. Including features, functions, parameters and series comparision.
title: Wio Tracker L2 Introduction
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
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/meshtastic_wio_tracker_l2_intro/
---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/L2First.png" alt="pir" width={900} height="auto" /></p>

The Wio Tracker L2 Series is a highly extensible [Meshtastic®](https://meshtastic.org/) node featuring LoRa (862–930 MHz), the ESP32S3 for efficient processing, and an L76K GPS module for accurate location tracking. Designed for flexibility, it supports QSPI touch screen, E-Ink displays, TF Card, as well as solar panels and battery power, making it ideal for a wide range of IoT and off-grid applications.

## Features

- **3.2'' High-Quality Touchscreen**: Featuring a 320×240 high-clarity display with switchable MUI and Base UI, it delivers smooth on-device interaction for messaging, mapping, and control—without a mobile phone.

- **ESP32S3 Powered, Ready to Build On**: Powered by the dual-core ESP32-S3 with Wi-Fi and Bluetooth LE, L2 Pro provides a flexible platform for UI customization, feature development, and open-source applications.

- **Offline Maps with GNSS Positioning**: Pre-download offline maps to a MicroSD card and view your real-time GNSS location directly on the device, even without cellular coverage or internet access.

- **3000mAh Long-Lasting Battery**: Supports extended daily use with reduced charging frequency; operates within -10°C to 55°C conditions.

- **Easy to Carry, Flexible Placement**: A foldable antenna improves portability, and the 1/4" mounting interface supports flexible placement with compatible accessories.

## Specification

<table>
  <tr>
    <th colspan="1">**Item**</th>
    <th colspan="1">**Parameter**</th>
  </tr>
  <tr>
    <td colspan="1">**Processor**</td>
    <td colspan="1">Wio-S3 (ESP32S3 + SX1262 Module)</td>
  </tr>
    <tr>
    <td colspan="1">**LoRa**</td>
    <td colspan="1">863-928 MHz<br/>MAX TX Power: 20dBm@US915,14dBm@EU868</td>
  </tr>
    <tr>
    <td colspan="1">**GNSS**</td>
    <td colspan="1">L76K (GPS, BeiDou, GLONASS, QZSS)</td>
  </tr>
  <tr>
    <td colspan="1">**On-chip Memory**</td>
    <td colspan="1">16MB Flash / 8MB PSRAM</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="3">**Antenna**</td>
    <td colspan="1">LoRa: </td>
  </tr>
   <tr>
    <td colspan="1">Wifi/BLE 5.0: FPC antenna</td>
  </tr>
  <tr>
    <td colspan="1">GPS: ceramic antenna</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="3">**Interface**</td>
    <td colspan="1">Grove *1: </td>
  </tr>
  <tr>
    <td colspan="1">MicroSD Card Slot</td>
  </tr>
  <tr>
    <td colspan="1">Quarter-inch threaded hole</td>
  </tr>
   <tr>
    <td colspan="1">**QSPI Interface**</td>
    <td colspan="1">Compatible for IPS Screen & E-INK Screen</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="3">**Power Input**</td>
    <td colspan="1">USB Type-C: 5V — 1A</td>
  </tr>
  <tr>
    <td colspan="1">Solar:JST-PH 2P-2.0mm, 5V ~ 13V</td>
  </tr>
  <tr>
    <td colspan="1">Li-ion Battery (2P-1.25mm): 3.7V</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="2">**IPS Touch Screen**</td>
    <td colspan="1">Size: 3.2 inch</td>
  </tr>
  <tr>
    <td colspan="1">Resolution: 240 × 320 pixels</td>
  </tr>
    <tr>
    <td colspan="1">**LED**</td>
    <td colspan="1">Mesh LED * 1<br/>Charging LED * 1</td>
  </tr>
  <tr>
    <td colspan="1">**Button**</td>
    <td colspan="1">WAKE-UP * 1<br/>User/Boot * 1<br/>RST * 1<br/>Power Switch * 1</td>
  </tr>
    <tr>
    <td colspan="1" rowspan="3">**Audio**</td>
    <td colspan="1">I2S Codec: ES8311</td>
  </tr>
  <tr>
    <td colspan="1">MIC: Pin Reserved</td>
  </tr>
    <tr>
    <td colspan="1">Speaker: 6Ω 0.8W</td>
  </tr>
    <tr>
    <td colspan="1">**Communication Distance**</td>
    <td colspan="1">Up to 5.8 km</td>
  </tr>
    <tr>
    <td colspan="1">**Dimension**</td>
    <td colspan="1"></td>
  </tr>
  <tr>
    <td colspan="1">**Device Weight**</td>
    <td colspan="1"></td>
  </tr>
    <tr>
    <td colspan="1">**Operation Temperature**</td>
    <td colspan="1">-10℃ to +55℃</td>
  </tr>
  <tr>
    <td colspan="1">**Certification**</td>
    <td colspan="1">FCC,CE,RoHS,Telec</td>
  </tr>
</table>

**Battery**

|Item|Parameter|
| :- | :- |
|**Battery Capacity**|Rechargeable Li-ion battery, 3000mAh|
|**Battery Life Monitoring**|Periodic uplink battery level|
|**Charging Protocol**|USB Type-C|
|**Device Power Input**|5V, 1A|
|**Fully-charged cut-off voltage**|4.2V|
|**Charging Temperature Limit**|0 to +45℃|

## Pin List

<table>
  <tr>
    <th>Component</th>
    <th>Pin</th>
    <th>Pin No.</th>
    <th>Protocol</th>
  </tr>
  <tr>
    <td rowspan="9">Display</td>
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
    <td>Button</td>
    <td>WAKEUP_BUTTON</td>
    <td>EXP_P00</td>
    <td>GPIO</td>
  </tr>
</table>


## Hardware Overview

**Wio Tracker L2 Pro**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/L2DeviceComponent9.7(1).png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/L2DeviceComponent29.7(2).png" alt="pir" width={800} height="auto" /></p>

**Schematic Diagram**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/SchematicDiagram9.7(1).png" alt="pir" width={800} height="auto" /></p>
