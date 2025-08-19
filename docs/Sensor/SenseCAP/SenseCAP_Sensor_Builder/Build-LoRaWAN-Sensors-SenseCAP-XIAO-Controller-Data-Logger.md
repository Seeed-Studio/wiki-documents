---
description: Overview of SenseCAP S2110 Sensor Builder
title: SenseCAP S2110 Sensor Builder
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Build-LoRaWAN-Sensors-SenseCAP-XIAO-Controller-Data-Logger
last_update:
  date: 11/20/2023
  author: Matthew
---

<!-- This wiki has been devided into 3 parts. -->

# SenseCAP S2110 Sensor Builder

SenseCAP S2110 Sensor Builder a groundbreaking solution that enables the fusion of industrial-grade modules and maker-level modules. It is an open-source tool which has the ability to build RS485 functional modules with 500+ Grove modules.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP_S2110_builder/SenseCAP-S2110-Sensor-Builder-105.jpg"/></div>

## Overview

### Small object, Industrial functionality

It has Seeed Studio XIAO RP2040 as the dual-core ARM Cortex M0+ processor, and has one Grove and one RS485 connector, enabling developers to connect with 500+ Grove sensors and various MODBUS RS485 sensors to develop custom industrial-grade MODBUS RS485 sensors for various IoT applications.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/107.jpg"/></div>

### With further LoRaWAN® the long range wireless data transmission

For the long ranger wireless application(LoRaWAN®), developers could easily connect it with a [SenseCAP LoRaWAN Data Logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) to transfer the data to SenseCAP Cloud, which only takes a 5-minute simple BLE configuration in SenseCAP Mate App. Clear data results and further analysis could be easily obtained from SenseCAP Dashboard and SenseCAP Mate App. IoT platforms such as Helium, TTN, LORIOT, etc. are also supported.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP_S2110_builder/SenseCAP-S2110-Sensor-Builder-106.jpg"/></div>

## Features

- **Easily build Modbus RS485 Industrial-grade Sensors:** With open-source source code and IP66 enclosure, easily convert over 500+ existing Grove sensors to Modbus RS485 industrial-grade sensors. 6 of the most popular environmental Grove sensors are already fully compatible with native firmware with more to come
- **SenseCAP Data Logger and IoT Platform Compatible:** Convert to a SenseCAP LoRaWAN® sensor with SenseCAP Data Logger and take advantage of quick and easy set-up in just 5-minutes with SenseCAP Mate APP
- **Supports Third-party Data Loggers and IoT Platforms:** Besides SenseCAP Data Logger, developers could connect to other data loggers that support Modbus RS485 protocol and third-party IoT platforms
- **Ready-to-deploy Industrial-grade Outdoor Enclosure:** IP66 waterproof rate outdoor enclosure with window and waterproof ventilation hole reserved for light and gas sensors, also comes with a customized mounting panel, suitable for pole and wall installation
- **Powered by Seeed Studio XIAO RP2040:** Take advantage of the powerful Seeed Studio XIAO RP2040 dual-core ARM M0+ processor and vast open-source resources to customize your own sensor. Easily upload code via USB-C port

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/108.png"/></div>

The product comes with an IP66 industrial-grade enclosure and also the mounting pads and screws set, which enables you to deploy the sensor outdoors easily and safely.

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong></a> <a class="get_one_now_item" href="https://www.seeedstudio.com/sensecap-outdoor-lorawan-sensor-kit-based-on-grove-p-5503.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Get LoRaWAN Kit 🖱️</font></span></strong></a> </div>

## Getting Started with the Builder with different ways

Being a groundbreaking solution that enables the fusion of industrial-grade modules and maker-level modules. There are multiple ways to enable the Builder.

### Enable the Builder to build LoRaWAN Sensors with SenseCAP Data Logger

<div align="center"><img width={500} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-e22011019-sensecap-s2110-lorawan-sensor-kit-first_1_.jpg"/></div>

You can build a custom, cost-effective, industrial-grade LoRaWAN sensor using Grove sensors, to connect to SenseCAP Cloud with SenseCAP Data Logger, enabling long range wireless data transmission.

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ Get One Now </font></span></strong></a> </div>

### Add more industrial-level LoRaWAN Grove Sensor

We are looking for more Grove modules to be added up to the Builder. And we are honered if you can join us! Check the information below and contribute your works to us(This is under the [Seeed Studio Contributor Program](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=34120904))!

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="/list_of_supported_grove_n_adding_more" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 Getting Started </font></span></strong></a> <a class="get_one_now_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_S2110" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 Source Code </font></span></strong></a> <a class="get_one_now_item" href="https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=34120904" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 🙋 Contributor </font></span></strong></a> </div>


### Develop with XIAO RP2040 board using RS485

Since it is powered by Seeed Studio XIAO RP2040 and there is a Grove connector on board. You can directly use it as a normal development device. Along with RS485 connectivity, you can add more RS485-enabled sensors to XIAO and expand your project ideas.

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 Ardunio </font></span></strong></a> <a class="get_one_now_item" href="https://wiki.seeedstudio.com/XIAO-RP2040-with-MicroPython/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 MicroPython </font></span></strong></a> <a class="get_one_now_item" href="https://wiki.seeedstudio.com/XIAO-RP2040-with-CircuitPython/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 CircuitPython </font></span></strong></a></div>

## Factory Firmware Flash

Now we will go through the steps of flashing firmware into SenseCAP S2110 Sensor Builder. Here we will flash the initial factory firmware, download [the latest uf2 firmware](https://github.com/Seeed-Studio/Seeed_Arduino_S2110/releases) before starting.

- **Step 1:** Unscrew the four screws on the SenseCAP S2110 Sensor Builder lid to open the lid and unscrew the PG connector (with a coin)

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/92.jpg"/></div>

- **Step 2:** If you have already made the connection between the SenseCAP S2110 Sensor Builder and the Data Logger with the 4 wires, it is recommended to remove the red wire which connects to the 5V pin of the SenseCAP S2110 Sensor Builder

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/97.jpg"/></div>

- **Step 3:** Connect one end of a USB Type-C cable to the SenseCAP S2110 Sensor Builder. While holding down the **B** button, connect the other end of the USB cable to the PC to enter mass storage mode.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/98.jpg"/></div>

- **Step 4:** If the **RPI-RP2** disk is shown on the PC and the Power LED on the XIAO is on, the connection is complete.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/91.png"/></div>

- **Step 5:** Copy sensorBuilder.ino.uf2 firmware file into the **RPI-RP2** disk.

The **RPI-RP2** disk will disappear once the firmware flashing is complete.

## Resources

- **[GitHub]** [SenseCAP S2110 Sensor Builder source code](https://github.com/Seeed-Studio/Seeed_Arduino_S2110)

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
