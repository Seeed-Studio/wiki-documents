---
description: The introduction of XIAO ESP32S3 & Wio-SX1262 Kit
title: XIAO ESP32S3 & Wio-SX1262 Kit Introduction
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png
slug: /wio_sx1262_with_xiao_esp32s3_kit
sidebar_position: 1
last_update:
  date: 09/30/2024
  author: Evelyn Chen
---


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png" style={{width:600, height:'auto'}}/></div>

<div style={{ textAlign: 'center', marginTop: '20px' }}>
  <a
    href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html"
    style={{
      display: 'inline-block',
      margin: '0 12px',
      padding: '12px 24px',
      backgroundColor: '#4ec354',
      color: '#FFFFFF',
      fontSize: '16px',
      fontWeight: 'bold',
      borderRadius: '8px',
      textDecoration: 'none',
    }}
  >
    Get One from Seeed Online Store
  </a>

  <a
    href="https://s.click.aliexpress.com/e/_o2E9vLh"
    style={{
      display: 'inline-block',
      margin: '0 12px',
      padding: '12px 24px',
      backgroundColor: '#4ec354',
      color: '#FFFFFF',
      fontSize: '16px',
      fontWeight: 'bold',
      borderRadius: '8px',
      textDecoration: 'none',
    }}
  >
    Get One from Aliexpress
  </a>
</div>

## Introduction

This thumb-sized LoRa development kit, which consists of the XIAO ESP32S3 and the Wio-SX1262 LoRa module, is an ideal starter kit for Meshtastic and LoRa/LoRaWAN projects. Supporting WiFi, BLE, and LoRa, it includes a built-in power management chip and can be extended via IIC, UART, and other GPIO interfaces, and is compatible with Arduino development.
The XIAO ESP32S3 & Wio-SX1262 Kit is a single-channel LoRaWAN LoRa module with a low price and high cost performance. It is suitable for application scenarios with long distance, low power consumption, and small data volume. It supports more than 30 node devices (depending on upload interval, data payload, etc.).

Seeed provides 3 applications for this XIAO ESP32S3 & Wio-SX1262 Kit.

- Using Meshtastic for network communication
- Configuring as LoRaWAN node
- Configuring as LoRaWAN gateway

## Features

- **Meshtactic works out of the box**: Pre-flashed with Meshtastic firmware, it is ready to work once powered on.
- **Outstanding RF performance**: Supports LoRa(862-930MHz)  2.4GHz Wi-Fi and BLE 5.0 dual wireless communication, support 2~5km(LoRa) and 100m+(Wi-Fi/BLE) remote communication when connected with U.FL antenna.
- **Thumb-sized Compact Design**: 21 x 18mm, adopting the classic form factor of XIAO, suitable for space-limited projects like wearable devices.
- **Powerful MCU Board**: Incorporate the ESP32S3 32-bit, dual-core, Xtensa processor running at up to 240MHz, mounted multiple development ports, Arduino / MicroPython supported.
- **Elaborate Power Design**: Includes a Type-C USB interface and lithium battery charge management.

## Specification

| Feature | Details |
| ---- | ---- |
| ESP32S3 | ESP32-S3R8, Xtensa LX7 dual-core, 32-bit processor running up to 240 MHz |
| LoRa | Based on Semtech SX1262, supports 862-930MHz |
| BLE | Bluetooth 5.0, Bluetooth mesh |
| Wi-Fi | Complete 2.4GHz Wi-Fi subsystem |
| Interface (ESP32S3) | 1x UART, 1x IIC, 1x IIS, 1x SPI(connect to SX1262),11x GPIO(PWM), 9x ADC, 1x User LED, 1x Charge LED, 1x Reset button, 1x Boot button |
| Interface (Wio-SX1262) | 1x User button, 1x SPI(connect to ESP32S3) |
| Power | Input voltage (Type-C): 5V <br/> Input voltage (BAT): 4.2V <br/> Charging battery current: 100mA |
| Working Temperature | -40°C ~ 65°C |
| Dimensions | 21 x 17.8mm |

## Hardware Preparation

### Part List

| Item | Quantity |
| ---- | ---- |
| XIAO ESP32S3 | x1 |
| Wio-SX1262 extension board | x1 |
| Wi-Fi antenna | x1 |
| LoRa antenna | x1 |

### Recommended accessories

Compatible with XIAO Expansion Board for adding screens and sensors, and add Grove sensors via the Grove expansion Board.

<div class="table-center">
  <table align="center">
    <tr>
      <th>XIAO Expansion Board</th>
      <th>Grove Base for XIAO</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/1.png" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/8.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

We also supply two kinds of antennas for this kit to support multifunctional applications.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/37.png" style={{width:600, height:'auto'}}/></div>

:::note
Original FPC Antenna: Only for **testing**. For reliable requirments, please purchase Antenna 2 additionally.
:::

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

## Video Instruction

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/AGPZ9xnX3gs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## Resource

- [Wio-SX1262 Module Datasheet](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_Module_Datasheet.pdf)
- [Wio-SX1262 Schemetic Diagram](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Schematic_Diagram_Wio-SX1262_for_XIAO.pdf)
- [Wio-SX1262 for XIAO 3D file](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_for_XIAO_3D_file.step)

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
