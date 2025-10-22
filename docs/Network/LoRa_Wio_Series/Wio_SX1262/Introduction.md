---
description: The introduction of Wio-SX1262
title: Wio-SX1262 Introduction
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/34.png
slug: /wio_sx1262
sidebar_position: 1
last_update:
  date: 10/12/2024
  author: Evelyn Chen
---

<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/33.png" style={{width:900, height:'auto'}}/></div></td>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-Wireless-Module-p-5981.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Introduction

The Wio-SX1262 is a low-cost, ultra-low-power, and ultra-compact LoRa® Pure RF module based on the high-performance Semtech SX1262 LoRa® wireless communication IC, supporting LoRa & LoRaWAN frequency from 868 to 915 MHz and up tp +22 dBm highly efficient transmitted power. Equipped with an onboard IPEX antenna connector and high-quality oscillator of the TCXO(Temperature Compensate Crystal Oscillator), it ensures stable operation at the high and low temperature environment of industry. It is designed for wireless  sensor networks and other IoT devices, especially those requiring battery-powered, low-power  consumption, and long-range connectivity. Ideal for applications such as wireless meter reading,  agriculture sensor, LoRaWAN single channel gateway etc.

## Features

- Wio SX1262 is based on SX1262 which is sub-GHz radio transceivers designed by Semtech Corporation
- Wio SX1262 can transmit up to +22 dBm with highly efficient integrated power amplifiers
- Wio SX1262 support LoRa® modulation for LPWAN use cases and (G)FSK modulation for legacy use cases.
- Frequency coverage from 868 MHz to 960 MHz.
- With SPI interface.
- Wio SX1272-N has SMT-packaged RF pins for easy PCB design, which is means it does not contain IPEX connector.

### Comparison with other modules

<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/69.png" style={{width:500, height:'auto'}}/></div></td>

## Hardware Overview

The Wio-SX1262 module is based on SX1262, making it ideal for designing various IoT nodes. It supports  both (G)FSK and LoRa® modulations, with a bandwidth range of 7.8 to 500 kHz in LoRa® mode. The  module provides the SPI interface for communication with an external MCU. Its power distribution scheme  supports two hardware options: DC-DC or a linear regulator LDO, and the Wio-SX1262 module utilizes  the DC-DC design. Additionally, it features a high-precision active TCXO as its internal RF reference  frequency, with DIO3 serving as the TCXO voltage power supply.

### Schematic Diagram

<td>
<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/31.png" style={{width:500, height:'auto'}}/>
</div>
</td>

### Pinout

<td>
<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/30.png" style={{width:500, height:'auto'}}/>
<img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/68.jpg" style={{width:700, height:'auto'}}/>
</div>
</td>

## Reference Design Based on Wio-SX1262 module

The following is typical reference design using the Wio-SX1262 module, just connect the module to the host MCU according to the reference design.

Antenna design considerations: The antenna interface is designed with a 50Ω impedance, and it is recommended that users reserve a π-type matching network for the antenna.

**The reference design:**

<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/35.png" style={{width:700, height:'auto'}}/></div></td>

## Resource

- [Wio SX1262 Module Datasheet](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262-N_Module_Datasheet.pdf)
- [Wio SX1262 Schemetic Diagram](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Schematic_Diagram_Wio-SX1262_for_XIAO.pdf)
- [Wio SX1262 symbol and package file](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_symbol_and_package_file.zip)

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
