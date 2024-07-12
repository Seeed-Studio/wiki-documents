---
description: Get Started with SenseCAP Indicator
title: Get Started with SenseCAP Indicator
keywords:
- Get Started SenseCAP Indicator
image: https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_1.png
slug: /Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator
sidebar_position: 1
last_update:
  date: 7/11/2024
  author: Spencer
---

## Overview

<iframe class="youtube-video-r" src="https://www.youtube.com/embed/IOdI5_MGbCw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<div class="button-container">
<a class="button-style" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1-p-5643.html">
        Get One Now 🖱️</a>
</div>

SenseCAP Indicator is a 4-inch touch screen driven by ESP32-S3 and RP2040 Dual-MCU and supports Wi-Fi/Bluetooth/LoRa communication.

The device comes two Grove interfaces, which supports ADC and I2C transmission protocols, and two USB Type-C ports with GPIO expantion pins inside, so user can easily expand external accessories via USB port.

SenseCAP Indicator is a fully open source powerful IoT development platform for developers. One-stop ODM Fusion service is also available for customization and quick scale-up.


<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_1.png"/>
</div>


## Features

- **Dual MCUs and Rich GPIOs**
Equipped with powerful ESP32S3 and RP2040 dual MCUs and over 400 Grove-compatible GPIOs for flexible expansion options.
- **Real-time Air Quality Monitoring**
Built-in tVOC and CO2 sensors, and an external Grove AHT20 TH sensor for more precise temperature and humidity readings.
- **Local LoRa Hub for IoT Connectivity**
Integrated Semtech SX1262 LoRa chip (optional) for connecting LoRa devices to popular IoT platforms such as Matter via Wi-Fi, without the need for additional compatible devices.
- **Fully Open Source Platform**
Leverage the extensive ESP32 and Raspberry Pi open source ecosystem for infinite application possibilities.
- **Fusion ODM Service Available**
Seeed Studio also provides one-stop ODM service for quick customization and scale-up to meet various needs.(please contact iot@seeed.cc)


## Hardware Overview

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_2.png"/></div>
<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_3.png"/></div>

### System Diagram

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_6.png"/></div>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_7.png"/></div>


### Button Function
- **Short Press:** Turn off /Wake up the screen.
- **Long Press for 3s:** Switch on/Wwitch off the device.
- **Long Press for 10s:** Factory firmware reset.

### Grove

There are two Grove interfaces for connecting Grove modules, providing more possibilities for developers.
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/grove.png"/></div>

Grove is a modular, standardized connector prototyping system and a strong open source hardware ecosystem. Click [**here**](https://www.seeedstudio.com/category/Grove-c-1003.html) to learn more

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_4.png"/></div>


### LoRa®
The embedded Semtech SX1262 LoRa® module enables you to build the LoRa® application and connect your local LoRa sensors to the Cloud via Wi-Fi. For example, you could build a LoRa hub device to connect your LoRa sensors to your smart home ecosystem to implement Matter over Wi-Fi. In this way, the LoRa devices could be connected to the Matter ecosystem via Wi-Fi, without the need to buy a new Matter-compatible device.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_55.png"/></div>


## Specification

|Screen|3\.95 Inch, Capacitive RGB Touch Screen|
| :- | :- |
|**Screen Resolution**|480 x 480 pixels|
|**Power Supply**|5V-DC, 1A|
|**Battery**|No battery,only powered by USB port|
|**Processor**|<p>**ESP32-S3:** Xtensa® dual-core 32-bit up to 240 MHz</p><p>**RP2040:** Dual ARM Cortex-M0+ up to 133MHz</p>|
|**Flash**|<p>**ESP32-S3:** 8MB</p><p>**RP2040:** 2MB</p>|
|**External Storage**|Support up to 32GB Micro SD Card (not included)|
|**Wi-Fi**|802\.11b/g/n, 2.4GHz|
|**Bluetooth**|Bluetooth 5.0 LE|
|**LoRa(SX1262**)|<p>LoRa and FSK Modem</p><p>+21dBm Max Transmitted Power</p> <p>-136dBm@SF12 BW=125KHz RX Sensitivity</p><p>Up to 5km communication distance</p>|
|**Sensors**(Optional)|<p>**CO2(Sensirion SCD41)**</p><p>Range: 0-40000ppm</p><p>Accuracy: 400ppm-5000ppm ±(50ppm+5% of reading)</p><p>**TVOC (SGP40)**</p><p>Range: 1-500 VOC Index Points</p>**Grove Temperature and Humidity Sensor(AHT20)**<p>Temperature Range: -40 ~ + 85 ℃/± 0.3 ℃; 0 ~ 100% RH/± 2% RH (25 ℃)</p>|

## Resources

- [**PDF**]: [RP2040 Datasheet](https://datasheets.raspberrypi.com/rp2040/rp2040-datasheet.pdf)
- [**PDF**]: [ESP32-S3 Datasheet](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf)

## Tech Support

**Need help with your SenseCAP Indicator? We're here to assist you!**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
