---
description: SenseCAP Solar Node for Meshtastic & LoRa
title:  SenseCAP Solar Node
keywords:
- Meshtastic
- Solar
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.webp
slug: /meshtastic_solar_node
sidebar_position: 1
last_update:
  date: 12/16/2025
  author: Michelle Huang
---



<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.png" alt="pir" width={800} height="auto" /></p>

It is an economical solar-powered comms node or repeater based on [Meshtastic®](https://meshtastic.org/), integrates the XIAO nRF52840 Plus main controller, the Wio-SX1262 LoRa module. It is specifically designed for areas without network coverage. It supports long-distance communication, precise positioning, and low-power operation. It's suitable for expanding network coverage in outdoor areas.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Solar-Node-P1-Pro-for-Meshtastic-LoRa-p-6412.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now </font></span></strong>
    </a>
</div>

## Version Comparison

The Solar Node is available in two variants: [SenseCAP Solar Node P1](https://www.seeedstudio.com/SenseCAP-Solar-Node-P1-for-Meshtastic-LoRa-p-6425.html) and [SenseCAP Solar Node P1-Pro](https://www.seeedstudio.com/SenseCAP-Solar-Node-P1-Pro-for-Meshtastic-LoRa-p-6412.html).

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-114993633-1_1.jpeg" alt="pir" width={800} height="auto" /></p>

## Overview

### Features

- Integrated with a 5W solar panel, and supports external batteries (which need to be provided by users themselves).
- The device comes pre-installed with Meshtastic firmware at the factory. It can be seamlessly integrated into the Meshtastic ecosystem.
- Compatible with the Grove ecosystem, and supports plug-and-play of sensors such as temperature and humidity sensors, light sensors, etc.
- It is suitable for long-term outdoor use.
- Supports 8 to 9KM Transmission in open areas. It can be used as an outdoor node or repeater, easily expanding the Mesh network and enhancing network coverage.

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-114993633-3.png" alt="pir" width={800} height="auto" /></p>

### Specification

<table>
  <tr>
    <th><b>Main controller</b></th>
    <th>
      <a href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Plus-p-6359.html" target="_blank">XIAO nRF52840 Plus</a><br />
      (Nordic nRF52840, ARM® Cortex®-M4 32-bit processor with FPU, 64 MHz, 256KB RAM, 1MB Flash, 2MB onboard Flash)
    </th>
  </tr>
  <tr>
    <td><b>LoRa Module</b></td>
    <td>
      <a href="https://www.seeedstudio.com/Wio-SX1262-Wireless-Module-p-5981.html" target="_blank">Wio-SX1262 Module</a><br />
      (Semtech SX1262, TXOP=22dBm@862-930MHz)
    </td>
  </tr>
  <tr>
    <td><b>GPS Module(for P1-Pro version)</b></td>
    <td>
      <a href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank">XIAO L76K</a><br />
      (Support GPS/GLONASS/Galileo)
    </td>
  </tr>
  <tr>
    <td rowSpan="3"><b>Antenna</b></td>
    <td>
      <p>LoRa:</p>
      <p>Type: Rod-shaped rubber antenna</p>
      <p>Frequency range: 868-915MHz</p>
      <p>Gain: 2dBi</p>
    </td>
  </tr>
  <tr>
    <td>
      <p>GNSS:</p>
      <p>GPS L1 C/A: 1575.42MHz</p>
      <p>GLONASS L1: 1602MHz</p>
      <p>BeiDou B1: 1561.098MHz</p>
    </td>
  </tr>
  <tr>
    <td>Bluetooth 5.0</td>
  </tr>
  <tr>
    <td><b>Solar Panel</b></td>
    <td>5W</td>
  </tr>
  <tr>
    <td rowSpan="2"><b>Interface</b></td>
    <td>Grove *1: IIC/GPIO/UART</td>
  </tr>
  <tr>
    <td>USB-C debugging</td>
  </tr>
  <tr>
    <td rowSpan="3"><b>Button</b></td>
    <td>Power on/off</td>
  </tr>
  <tr>
    <td>Reset</td>
  </tr>
  <tr>
    <td>User-defined</td>
  </tr>
  <tr>
    <td rowSpan="4"><b>LED</b></td>
    <td>Charging status indicator lights *2</td>
  </tr>
  <tr>
    <td>Solar panel status indicator light *1</td>
  </tr>
  <tr>
    <td>Mesh heartbeat light *1</td>
  </tr>
  <tr>
    <td>User-defined *1</td>
  </tr>
  <tr>
    <td><b>Power supply</b></td>
    <td>Type-C: 5V 1A</td>
  </tr>
  <tr>
    <td></td>
    <td>Solar power supply: 5V 1A</td>
  </tr>
  <tr>
    <td><b>Waterproof rating</b></td>
    <td>IPX5</td>
  </tr>
  <tr>
    <td><b>Battery(for P1-Pro version)</b></td>
    <td>
      <p>- 4 x 18650 lithium batteries (3350mAh each)</p>
      <p>- Supporting Type-C and solar charging.</p>
      <p>- Discharge environment: -40～60°C</p>
      <p>- Charging environment: 0-50°C</p>
    </td>
  </tr>
  <tr>
    <td><b>Certification</b></td>
    <td>FCC、CE</td>
  </tr>
  <tr>
    <td><b>Dimension</b></td>
    <td>191.2 x 201.2 x 42.1 mm</td>
  </tr>
</table>



### Hardware Overview

**Interactive items**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/interactive.png" alt="pir" width={800} height="auto" /></p>

**Accessories**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/accessory.png" alt="pir" width={800} height="auto" /></p>

**Diagram**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar_node_diagram.png" alt="pir" width={800} height="auto" /></p>
