---
description: Wio-WM1110 Dev Kit Introduction
title: Introduction
keywords:
- Wio-WM1110 Dev Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-WM1110_Dev_Kit/Introduction
sidebar_position: 1
last_update:
  date: 6/26/2023
  author: Jessie
---


# Wio-WM1110 Dev Kit

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993082-wio-wm1110-dev-kit-45font.jpg" alt="pir" width={500} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM1110-Dev-Kit-p-5677.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

The WM1110 Dev Kit is based on Wio-WM1110 Wireless Module, integrates Semtech's LoRa® transceiver and a multi-purpose radio front-end for geolocation.
The LoRa® transceiver provides low-power, high-sensitivity network coverage, while GNSS (GPS/Beidou) and Wi-Fi scanning offer all-round location coverage.
while also providing connectivity options for a variety of peripherals.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/schematic4.png" alt="pir" width={800} height="auto" /></p>

## Features

- **Low-Power High-Sensitivity LoRa/(G)FSK Half-Duplex RF Transceiver**: Frequency bands support in the range 863- 928MHz

- **Multi-Purpose Radio Front-End for Geolocation**: GNSS (GPS/ BeiDou),Wi-Fi,Bluetooth
- **Rich GPIOs**: Over 400 Grove-compatible GPIOs for flexible expansion options.
- **Open Source Platform**: Leverage the extensive LR1110 and nRF52840 open source ecosystem for infinite application possibilities.

### Low Power LoRa® Transceiver

Benefit from Semtech‘s LoRa Edge™ LR1110, the Wio-WM1110 Dev Kit provides long-distance, low-power LoRa® communication. To learn about Long Range and its features such as network architecture and applications, you can check out  An introduction of LoRa® and LoRa®WAN® technology, It explains what Long Range is, how it works, and its pros and cons.

### Location Service

The Wio-WM1110 Dev Kit integrates Multi-Purpose Radio Front-End Targeting Geolocation Purposes. It's equipped with GNSS dedicated for outdoor positioning, as well as WI-FI and Bluetooth low-power scanning for indoor positioning.
It's able to automatically transition between outdoor and indoor activities, replacing the need to build different trackers for indoor or outdoor use, this provides all-around location coverage while reducing complexity and cost.

**Outdoor Positioning(GNSS)**

The Wio-WM1110 Dev Kit integrates GNSS (GPS/ BeiDou) low-power scanning,
getting data from satellites and sending it encrypted to the LoRa® Cloud, reducing power consumption and improving security.

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTI1MQ_47857_JbH8r_MU_X1uz1V7_1687329215?w=1265&h=592&type=image/jpeg" alt="pir" width={800} height="auto" /></p>

**IPS(Wi-Fi+Bluetooth)**
Complementary to outdoor GNSS, WM1110 Dev Kit also supports Wi-Fi ultra-low-power passive scanning and Bluetooth scanning suitible for indoor positioning, it scans the MAC address and RSSI of nearby Bluetooth beacons/Wi-Fi, upload the data to the cloud services to get the accurate location.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/Schematic02.png" alt="pir" width={800} height="auto" /></p>

### Rich peripherals

In addition to the built-in TH sensor and 3-axis Accelerometer, this kit also includes a series of peripheral interfaces,supports ADC/UART and IIC transmission protocols, which can be connected to 400+ Grove modules, allowing for easy upgrades to smarter solutions. It's also compatible with Arduino, providing developers with unlimited possibilities.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_4.png" alt="pir" width={800} height="auto" /></p>

### Develop User Applications

Wio-WM1110 Dev Kit is a fully open source powerful IoT development platform for developers, also includes a set of example applications and code samples, as well as a software development kit (SDK) to help you get started.

## Schematic Diagram

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/schematic_1.png" alt="pir" width={800} height="auto" /></p>

## Specifications

**LoRa® and Positioning (Semtech LR1110)**

|LoRa®WAN Protocol|V1.0.4|
| :- | :- |
|Frequency|863~928MHz|
|Sensitivity|<p>-125dBm @125K/SF7</p><p>-141dBm @125K/SF12</p>|
|Output Power|20dBm max @LoRa®|
|Positioning Technology|GNSS(GPS,BeiDou),WiFi|
|Range|2~10km (Depends on antenna and environment)|

**Bluetooth(Nordic nRF52840)**

|Bluetooth|Bluetooth 5.3|
| :- | :- |
|Flash|1MB|
|RAM|256KB|
|Protocol|Bluetooth LE,Bluetooth mesh,Thread,Zigbee,802.15.4, ANT and 2.4 GHz proprietary stacks|
|Output Power|6dBm max @Bluetooth|

**Built-in Sensors**

**TH Sensor (SHT41)**

|  | Range | Accuracy |
| -------- | -------- | -------- |
|Temperature  | -40~125°C |0.2°C|
| Humidity | 0~100%RH |1.8%RH|

**3-axis Accelerometer(LIS3DHTR)**

| Range | Bandwidth | Sensitivity(LSB/g) |
| -------- | -------- | -------- |
| ±2g, 4g, 8g, 16g | 0.5Hz ~ 625Hz |1000 (±2g) ~ 83 (±16g)

**General**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/spec.png" alt="pir" width={800} height="auto" /></p>

## Tech Support

**Need help with your Wio-WM1110 Dev Kit? We're here to assist you!**

<div class="button_tech_support_container">
<a href="https://discord.gg/sensecap" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions" class="button_discussion"></a>
</div>
