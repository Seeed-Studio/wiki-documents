---
description: Wio Tracker L1 Meshtastic Node Introduction
title: Wio Tracker L1 Meshtastic Node
keywords:
- Meshtastic
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-L1.webp
slug: /wio_tracker_l1_node
sidebar_position: 1
last_update:
  date: 5/19/2025
  author: Jessie
---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-l1.jpg" alt="pir" width={600} height="auto" /></p>

The Wio Tracker L1 Series is a low-power, highly extensible Meshtastic node featuring LoRa (862–930 MHz), the nRF52840 for efficient processing, and an L76K GPS module for accurate location tracking. Designed for flexibility, it supports OLED and E-Ink displays, as well as solar panels and battery power, making it ideal for a wide range of IoT and off-grid applications.

## Version Comparison

:::tip
The Wio Tracker L1 Series is available in 4 versions—choose the one that best fits your needs.
:::

|Product Name|Wio Tracker L1 Lite|Wio Tracker L1|Wio Tracker L1 Pro|Wio Tracker L1 E-Ink|
|------------------|------------------|--------------------------|-----------------------|-----------------------|
|Image|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993653-wio-tracker-l1-lite.jpg" alt="pir" width={300} height="auto" />|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993648-wio-tracker-l1.jpg" alt="pir" width={300} height="auto" />|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993649-wio-tracker-l1-pro.jpg" alt="pir" width={300} height="auto" />|<img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/L1-e-ink.png" alt="pir" width={300} height="auto" />|
|Purchase Link|<p style={{textAlign: 'center'}}>[Get One Now!](https://www.seeedstudio.com/Wio-Tracker-L1-Lite-p-6455.html)</p>|<p style={{textAlign: 'center'}}>[Get One Now!](https://www.seeedstudio.com/Wio-Tracker-L1-p-6453.html)</p>|<p style={{textAlign: 'center'}}>[Get One Now!](https://www.seeedstudio.com/Wio-Tracker-L1-Pro-p-6454.html)</p>|<p style={{textAlign: 'center'}}>[Get One Now!](https://www.seeedstudio.com/Wio-Tracker-L1-E-ink-p-6456.html)</p>|
|LoRa|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|
|GPS|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|
|Screen|<p style={{textAlign: 'center'}}>-</p>|<p style={{textAlign: 'center'}}>1.3-inch OLED</p><br/><p style={{textAlign: 'center'}}>Resolution: 128 × 64 pixels</p>|<p style={{textAlign: 'center'}}>1.3-inch OLED</p><br/><p style={{textAlign: 'center'}}>Resolution: 128 × 64 pixels</p>|<p style={{textAlign: 'center'}}>2.13-inch E-ink</p><br/><p style={{textAlign: 'center'}}>Resolution: 122 × 250 pixels</p>|
|Solar+Battery Connector|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>Built-in 2000mAh battery</p>|<p style={{textAlign: 'center'}}>✅</p>|
|Shell|<p style={{textAlign: 'center'}}>-</p>|<p style={{textAlign: 'center'}}>-</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>-</p>|

## Overview

### Features

- **Pre-flashed with Meshtastic firmware**
Ready to use out of the box with pre-installed Meshtastic firmware for seamless setup.

- **Triple Power Supply Options**
Supports Type-C fast charging, solar input, and Li-ion battery power for flexible deployment in various environments—ideal for outdoor and mobile applications.

- **Flexible Display Support**
Optional 1.3-inch OLED and 2.13-inch E-Ink screens, offering versatile display options for different power consumption and visual feedback needs.

- **High Expandability**
Fully compatible with the Grove ecosystem, and includes PTH headers and an SWD debugging interface for custom hardware expansion and advanced development.

### Specification

<table>
  <tr>
    <th colspan="1">Processor</th>
    <th colspan="1">
      Nordic nRF52840<br />ARM® Cortex®-M4 with FPU runs up to 64 MHz
    </th>
  </tr>
  <tr>
    <td colspan="1">On-chip Memory</td>
    <td colspan="1">1 MB flash and 256 kB RAM</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="2">Wireless</td>
    <td colspan="1">
      LoRa: Based on <a href="https://www.seeedstudio.com/Wio-SX1262-Wireless-Module-p-5981.html">Wio-SX1262</a>, supports 862-930MHz
    </td>
  </tr>
  <tr>
    <td colspan="1">Bluetooth 5.0</td>
  </tr>
  <tr>
    <td colspan="1">GPS</td>
    <td colspan="1">L76K (GPS, BeiDou, GLONASS, QZSS)</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="3">Interface</td>
    <td colspan="1">Grove *1: UART/IIC/GPIO</td>
  </tr>
  <tr>
    <td colspan="1">Plated Through Hole（PTH）: UART/IIC/GPIO/Analog</td>
  </tr>
  <tr>
    <td colspan="1">Soldering pads reserved for SWD</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="3">Power Input</td>
    <td colspan="1">USB Type-C: 5V — 1A</td>
  </tr>
  <tr>
    <td colspan="1">Solar Panel: 5V — 1A</td>
  </tr>
  <tr>
    <td colspan="1">Lithium Battery: 3.7V — 1A</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="3">OLED Screen</td>
    <td colspan="1">Size: 1.3 inch</td>
  </tr>
  <tr>
    <td colspan="1">Resolution: 128 × 64 pixels</td>
  </tr>
  <tr>
    <td colspan="1">Active Area (mm): 34.5 × 23.0</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="3">E-Ink Screen</td>
    <td colspan="1">Size: 2.13 inch</td>
  </tr>
  <tr>
    <td colspan="1">Resolution: 122 × 250 pixels</td>
  </tr>
  <tr>
    <td colspan="1">Active Area (mm): 48.55 × 23.7046</td>
  </tr>
  <tr>
    <td colspan="1">Certification</td>
    <td colspan="1">FCC, CE, RoHS</td>
  </tr>
</table>

### Hardware Overview

**Wio Tracker L1**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio_tracker-l1.png" alt="pir" width={800} height="auto" /></p>

**Wio Tracker L1 Lite**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio_tracker_l1_lite.png" alt="pir" width={800} height="auto" /></p>

**Wio Tracker L1 Pro**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio_tracker_l1-pro.png" alt="pir" width={800} height="auto" /></p>

**Diagram**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/l1-diagram.png" alt="pir" width={800} height="auto" /></p>
