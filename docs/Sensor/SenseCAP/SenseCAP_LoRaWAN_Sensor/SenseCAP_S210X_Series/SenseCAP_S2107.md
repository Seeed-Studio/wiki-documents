---
description: SenseCAP S2107
title: SenseCAP S2107
keywords:
- SenseCAP Sensor_Probe&Accessories
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_S2107
last_update:
  date: 9/25/2023
  author: KeweiLee
---

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/0.jpg" /></div>

# Product Description

SenseCAP LoRaWAN® S2107 temperature Sensor measures temperature at the range of -50°C~300°C. A highly accurate temperature sensor PT1000 that can support temperature detection in wide temperature ranges and industrial scenarios. 
Pt1000 sensors (1000 ohm temperature sensors) are the most common type of platinum resistance thermometer. The S2107 supports a three-wire circuit for PT1000 sensors and allows for the connection of up to three sensors simultaneously.
Direct contact temperature is an important indicator in many scenarios, especially in liquid detection, food monitoring, storage cold chain, industrial boilers, aquaculture solutions. The S2107 is specifically optimized for OTA with built-in Bluetooth, which enables quick setup and update. Benefiting from LoRa and IP66 design, this sensor features stability and reliability and can cover a long transmission range while keeping lower power consumption. Unlike wireline devices, it is battery-powered, reducing the workload and complexity of the deployment, and can be disassembled and installed in a few minutes.


[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html)

# Features

- Compatible with Worldwide LoRaWAN® Networks: Compatible with different types of LoRaWAN® gateways to enable fast connection with LoRaWAN® networks (support the universal frequency plan from 863MHz ~928MHz).
- Long Range & Battery powered: Ultra-wide-transmission range of 2km in urban scenes and 10km in line of sight scenes. Powered by easily replaceable standard Li-SOCl2 battery (type: ER34615) with Max.10 years of battery life.
- Designed to Use in Harsh Environments: -40℃ ~ 85℃ operating temperature and IP66-rated enclosure, suitable for outdoor use, high UV exposure, heavy rain, dusty conditions, etc.
- Simple Configuration and Calibration: SenseCAP provides a no-code experience that enables users to finish configuration and calibration through SenseCAP Mate APP.
- **Local storage：When LoRaWAN network is disconnected, the device can locally store up to 2000 uplinking records**.

# Applications

- Liquid detection
- Food monitoring
- Storage cold chain
- Aquaculture solutions

# Specifications

|**Temperature**||
| :- | :- |
|Range|<p>-50 to 300 ℃ </p><p>(Other range customization contact sales)</p>|
|Accuracy|±0.5℃|
|Resolution|0.1℃|
|**General Parameters**||
|Product Model|S2107|
|Microcontroller|Wio-E5|
|Support Protocol|LoRaWAN v1.0.3 Class A|
|Built-in Bluetooth|App Tool to change parameters|
|LoRaWAN Channel Plan|IN865/EU868/US915/AU915/ AS923/KR920/RU864 \*|
|Max Transmitted Power|19dBm|
|Sensitivity|-136dBm@SF12 BW=125KHz|
|Communication  Distance|2 to 10 km (depending on gateway  antenna and environments|
|IP Rating|IP66|
|Operating Temperature|-40 to +85 °C (LoRa DTU);-50 to 200℃(Cable); -50 to 300℃ (Probe)|
|Operating Humidity|0 to 100 %RH (non-condensing)|
|Device Weight|360g|
|Cable Length|3 meters|
|Certiﬁcation|CE / FCC / RoHS / TELEC|
|**Battery (Contained in equipment)**||
|Battery Life|Up to 10 years\*\*|
|Battery Capacity|19Ah (non-rechargeable)|
|Battery Type|Standard D-size SOCl2 Battery|

# How to add 3 PT1000 sensors to S2107

## Hardware preparation

Wire 3 PT1000 sensors as shown in the diagram
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/1.jpg" /></div>

## Software Preparation

Use SenseCAP Mate App to configure the PT1000 sensors.
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/2.png" /></div>

# Payload Decoder

## Decoder Code

Please direct you to SenseCAP [S210X Decoder](https://github.com/Seeed-Solution/SenseCAP-Decoder/tree/main/S210X)

## Data Parsing Example

Temperature Sensor measurement packet:
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/3.png" /></div>

Packets sent when recovering from offline:
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/4.png" /></div>

Battery Information for S2107:
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/5.png" /></div>

# SenseCAP Tech Support

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://discord.gg/sensecap" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
