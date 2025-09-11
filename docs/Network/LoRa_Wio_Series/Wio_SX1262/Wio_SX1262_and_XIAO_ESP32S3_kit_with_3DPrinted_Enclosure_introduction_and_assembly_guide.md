---
description: The introduction and assembly guide of Wio-SX1262 and XIAO ESP32S3 kit with 3D-printed enclosure
title: XIAO ESP32S3 & Wio-SX1262 Kit with 3D case
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/113110064/12.jpg
slug: /wio_sx1262_and_xiao_esp32s3_kit_with_3dprinted_enclosure_introduction_and_assembly_guide
sidebar_position: 3
last_update:
  date: 11/21/2024
  author: Evelyn Chen
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/113110064/7.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-for-Meshtastic-LoRa-with-3D-Printed-Enclosure-p-6314.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Introduction

This device is based on XIAO ESP32S3 and Wio-SX1262 LoRa module. Coupled with an exquisite 3D - printed casing, it is equipped with an 868 - 915MHZ wide frequency range and  2dBi gain external antenna. It can support 2.5km single channel lorawan gateway and meshtastic communication. Through the GPIO port, it can be paired with GNSS modules and other additional modules.

## Features

- **High RF performance**: Supports LoRa (862 - 930MHz), 2.4GHz Wi - Fi, and BLE 5.0 dual - wireless communication. When connected to an external antenna, it enables remote communication over a distance of 2.5km (LoRa) and 100m + (Wi - Fi / BLE).
- **LoRaWAN Hub**: Pre-flashed with Single channel LoRaWAN firmware, it is ready to work once powered on.
- **3D casing Design**: Measuring 22x23x57mm, this device features a black ABS material with an extensive temperature range (- 40℃ ~ 100℃), making it ideal for outdoor and space - constrained projects.
- **Powerful MCU Board**: Incorporate the ESP32S3 32-bit, dual-core, Xtensa processor running at up to 240MHz, mounted multiple development ports, Arduino / MicroPython supported.
- **Elaborate Power Design**: Includes a Type-C USB interface, multiple GPIO/I2C/UART interface and lithium battery charge management.
- **Versatile Hardware for Multiple Applications**: Can be developed into a node or router for [Meshtastic](https://meshtastic.org/), a device for [Single Channel LoRaWAN Gateway](https://github.com/Lora-net/one_channel_hub), or a LoRa & LoRaWAN sensor.

## Specification

| Feature | Details |
| ---- | ---- |
| Processor | ESP32-S3R8, Xtensa LX7 dual-core, 32-bit processor running up to 240 MHz |
| Memory | On-chip 8M PSRAM & 8MB Flash |
| Wireless | Complete 2.4GHz Wi-Fi subsystem<br/>BLE: Bluetooth 5.0, Bluetooth mesh,<br/>LoRa: Single Channel Gateway |
| Interface | 1x UART, 1x IIC, 1x IIS, 1x SPI, 11x GPIOs (PWM), 9x ADC, 1x User LED, 1x Charge LED<br/>1x Reset button, 1x Boot button |
| Power | Input voltage (Type-C): 5V<br/>Input voltage (BAT): 4.2V<br/>Charging battery current: 100mA |
| Operating Temperature | -40 ~ 65°C |
| **Antenna** |
| Type | SMA to I-PEX External Antenna |
| Max Gain | 2 dBi |
| Dimension | 13.0x195mm |
| Installation | Install on the outside of the enclosure |
| Distance | 2.5km in open environment |
| Application | Suitable for most scenarios, designed for indoor and outdoor |
| **Mechanical** |
| Dimension | 22x23x57mm |
| Material | ABS |
| Weight | 37.1g |

## Hardware Overview

<table align="center">
  <tr>
     <th>Wio-SX1262 extension board diagram</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/10.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
 <tr>
     <th>XIAO ESP32S3 front indication diagram</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/front-indication.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>XIAO ESP32S3 back indication diagram</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/back-indication.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>XIAO ESP32S3 Pin List</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/13.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
</table>

### Part List

| Item | Quantity |
| ---- | ---- |
| XIAO ESP32S3 & Wio-SX1262 Kit with 3D case | x1 |
| 20cm USB type C cable | x1 |

### Recommended accessories

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/113110064/10.jpg" style={{width:700, height:'auto'}}/></div>

<div class="table-center">
  <table align="center">
    <tr>
      <th>L76K GNSS Module for XIAO</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/1-L76K-GNSS-Module-for-Seeed-Studio-XIAO-45font.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## Application

2 applications provided for this kit.

- Configuring as LoRaWAN gateway(pre-flashed), please follow [LoRaWAN Gateway Configuration](https://wiki.seeedstudio.com/wio_sx1262_xiao_esp32s3_for_single_channel_gateway/) and [the instruction for LNS connection](https://wiki.seeedstudio.com/wio_sx1262_xiao_esp32s3_LNS_TTN/)
- Using Meshtastic for network communication, please follow [the meshtastic instruction](https://wiki.seeedstudio.com/wio_sx1262_xiao_esp32s3_for_meshtastic/)

## Resource

- [Wio-SX1262 for XIAO 3D file](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_for_XIAO_3D_file.rar)
- [Schematic Diagram Wio-SX1262 for XIAO](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Schematic_Diagram_Wio-SX1262_for_XIAO.pdf)
- [Wio-SX1262 Module Datasheet](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_Module_Datasheet.pdf)
- [Github One-Channel Hub project](https://github.com/Lora-net/one_channel_hub)
- [casing 3D file](https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/XIAO_ESP32S3_Meshtastic%26LoRa_24.11.20.zip)
