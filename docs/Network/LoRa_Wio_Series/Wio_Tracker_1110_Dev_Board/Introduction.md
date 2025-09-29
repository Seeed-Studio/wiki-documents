---
description: Wio_Tracker_Introduction
title: Wio Tracker 1110 Introduction
keywords:
- Tracker
- Wio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Tracker_Introduction
sidebar_position: 1
last_update:
  date: 11/3/2023
  author: Jessie
---


The [Wio Tracker 1110 Dev Board](https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html) is based on [Wio-WM1110 Wireless Module](https://www.seeedstudio.com/Wio-WM1110-Module-LR1110-and-nRF52840-p-5676.html) and integrates [Semtech's LR1110](https://www.semtech.com/products/wireless-rf/lora-edge/lr1110) LoRa® transceiver and a multi-purpose radio front-end for geolocation, it's a user-friendly, LoRa-based tracking development platform.

With its compact size and rich interfaces, the Wio Tracker 1110 Dev Board is conveniently equipped with an onboard antenna for easy deployment. It supports the Arduino development environment and LoRaWAN protocol stack, making it ideal for tracking-related IoT projects.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/wio-tracker.png" alt="pir" width={700} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now </font></span></strong>
    </a>
</div>

## Feature

- **Powerd by Nordic nRF52840 and Semtech LR1110**<br/>
- **Multi-protocols**: LoRa®, GNSS(GPS/BeiDou), Bluetooth, Wi-Fi Sniffer<br/>
- **Supports over 300+ Seeed Grove Sensors**: Making it highly adaptable for different tracking and sensing requirements<br/>
- **Onboard temperature sensor, humidity sensor, and 3-axis accelerometer**: Capturing a wide range of environmental and motion data<br/>
- **Fully Open Source Platform**: Leverage the extensive LR1110 and nRF52840 open-source ecosystem for infinite application possibilities<br/>
- **Arduino IDE compatibility**: Allowing ease of programming and a familiar environment for developers.

## Description

### Low Power LoRa® Transceiver

Benefiting from Semtech's LR1110, the Wio Tracker 1110 Dev Board provides long-distance, low-power LoRa® communication. To learn about Long Range and its features such as network architecture and applications, you can check out An introduction of LoRa® and LoRaWAN® technology, It explains what Long Range is, how it works, and its pros and cons.

### Multiple positioning technologies

The Wio Tracker 1110 Dev Board integrates Multi-Purpose Radio Front-End Targeting Geolocation Purposes. It's equipped with GNSS dedicated to outdoor positioning, as well as Wi-Fi and Bluetooth scanning for indoor positioning. It's able to automatically transition between outdoor and indoor activities, replacing the need to build different trackers for indoor or outdoor use, this provides all-around location coverage while reducing complexity and cost.

### Rich peripherals

In addition to the onboard TH sensor and 3-axis Accelerometer, it features a series of peripheral interfaces, and supports ADC/UART and IIC transmission protocols, which can be connected to 400+ Grove modules, enabling easy upgrades to smarter solutions.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WM1110-A-Grove.jpg" alt="pir" width={800} height="auto" /></p>

### Develop User Applications

Wio Tracker 1110 Dev Board is a fully open-source powerful IoT development platform, compatible with Arduino IDE,  It comes with a set of example applications and code samples to help you get started smoothly and quickly.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/arduino-1.png" alt="pir" width={800} height="auto" /></p>

### Quick Start Demo

We provide a plug-and-play demo, where users can simply scan a QR code, connect the power, and within 5 minutes, they can view location and sensor data on the SenseCAP Mate APP.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/grove.png" alt="pir" width={800} height="auto" /></p>

### Hardware Overview

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/hard-overview.png" alt="pir" width={800} height="auto" /></p>

### Specification

|LoRa® and Positioning (Semtech LR1110)||
|----|----|
|LoRaWAN® Protocol|V1.0.3|
|Frequency Plan|863~928MHz|
|Sensitivity| -125dBm @125K/SF7<br/>-141dBm @125K/SF12|
|Output Power|20dBm max @LoRa®|
|Positioning Technology|GNSS(GPS/BeiDou), WiFi Sniffer|
|Range|2~10km(Depends on antenna and environment)|

|Bluetooth(Nordic nRF52840)||
|----|----|
|Bluetooth|Bluetooth 5.3|
|Flash|1MB|
|RAM|256KB|
|Protocol|Bluetooth LE, Bluetooth mesh, Thread, Zigbee, <br/>802.15.4, ANT and 2.4 GHz proprietary stacks|
|Output Power|6dBm max @Bluetooth|

|General||
|----|----|
|Voltage - supply|5V (USB 2.0 Type-C)<br/>Battery Connector-4.5V|
|RFIO |GNSS Antenna Connector x 1<br/>LoRa Antenna Connector x 1|
|USB type-C| x 1|
|Grove Interface|ADC x 1<br/>I2C x 1<br/>UART x 1<br/>Digital x 3|
|Button|USER-Configurable button<br/>RESET-Reset|

|Onboard Sensors||
|----|----|
|TH Sensor (SHT41)||
|Range|Accuracy|
|Temperature|-40~125°C<br/>0.2°C|
|Humidity|0~100%RH<br/>±1.8%RH|
|3-Axis Accelerometer(LIS3DHTR)||
|Range|±2g, 4g, 8g, 16g|
|Bandwidth|0.5Hz ~ 625Hz|
|Sensitivity (LSB/g)|1000 (±2g) ~ 83 (±16g)|
