---
description: SenseCAP Combo 5-in-1 Sensor with 4G Introduction
title: Introduction
keywords:
  - SenseCAP Combo
  - Data Logger
image: https://files.seeedstudio.com/wiki/SenseCAP/Combo/SenseCAP_Combo_5in1_4G.webp
slug: /sensecap_combo_introduction
sku: 100035616
last_update:
  date: 8/23/2026
  author: Janet
createdAt: '2026-08-23'
updatedAt: '2026-08-23'
url: https://wiki.seeedstudio.com/sensecap_combo_introduction/
---

# SenseCAP Combo 5-in-1 Sensor with 4G Introduction

## Overview

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/combo-intro.png" alt="SenseCAP Combo 5-in-1 Sensor with 4G" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Combo-5-in-1-Sensor-with-4G-p-6906.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now </font></span></strong>
    </a>
</div>

<br />

[**SenseCAP Combo 5-in-1 Sensor with 4G**](https://www.seeedstudio.com/SenseCAP-Combo-5-in-1-Sensor-with-4G-p-6906.html) is an easy-to-use, stable, and low-power device designed for multi-parameter environmental monitoring. It measures air temperature, humidity, atmospheric pressure, light intensity, and CO₂. 

Additionally, it can connect up to 10 external Modbus-RTU RS485 sensors with a [Splitter](https://www.seeedstudio.com/RS485-p-4880.html), offering high compatibility with most sensors on the market. 

For data transmission, the device uses 4G Cat.1 connectivity and the MQTT protocol to upload data to your user server. It is equipped with a solar panel and a 5200mAh rechargeable Li-ion battery, ensuring over 2 weeks of continuous operation during power outages or rainy weather. It also supports direct DC power supply. 

To prevent data loss, the device can cache up to 500,000 data records locally when the signal is weak or interrupted. Once communication is restored, the data is automatically uploaded. Users can also export historical data directly via a local connection. 

Designed for plug-and-play deployment, the device supports both hanging and pole-mount installation, making deployment simple even for beginners. Built with waterproof and UV-resistant materials, it meets strict durability standards and is ideal for harsh environments like greenhouses.

## Features

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/combo.jpg" alt="Software Platform" width={800} height="auto" /></p>

- **Integrated Multi-Sensors:** The device includes built-in sensors for air temperature, humidity, atmospheric pressure, light intensity, and CO₂ etc. (available options vary by customization).

- **High Scalability:** It provides an RS485 interface that can connect up to 10 external sensors via [Splitter](https://www.seeedstudio.com/RS485-p-4880.html). And it supports standard Modbus-RTU RS485 sensors and provides both 5V and 12V power outputs to power external devices.

- **Reliable Data Caching:** When 4G signals are weak or unavailable, the logger can store up to 500,000 data records locally. Data auto-uploads once connectivity restores, and historical files can be exported to Excel.

- **Flexible Power Options:** The device is primarily powered by an integrated solar panel and built-in battery, but also supports an external DC power supply.

- **Low Power Consumption:** With a built-in 5200mAh battery, the device can operate for over two weeks without solar charging or during power outages.

- **Easy Maintenance:** It supports OTA (Over-the-Air) remote firmware updates, reducing the need for on-site maintenance.

- **Greenhouse Operation:** Designed for greenhouse and indoor agricultural environments, it operates reliably from 0°C to 40°C.

- **Weatherproof Design:** Featuring an IPX5 rating and UV-resistant materials, the device is protected against rain and aging, making it suitable for various environments.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/appearance.png" alt="Software Platform" width={800} height="auto" /></p>

## System Architecture

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/System Architecture.png" alt="SenseCAP Combo 5-in-1 Sensor with 4G" width={800} height="auto" /></p>

SenseCAP Combo 5-in-1 Sensor with 4G uploads data to the SenseCAP Cloud Platform via 4G Cat.1 network. Users can view real-time data, manage devices, and retrieve historical data through the [SenseCAP Portal](https://sensecap.seeed.cc/portal/#/login) or the SenseCraft APP. The platform also provides HTTP API, MQTT API, and WebSocket API for further development and integration.

## All-in-One Software Platform Management

Seamlessly integrated with the [SenseCAP Cloud Platform](https://sensecap.seeed.cc/portal/#/login) and SenseCraft APP, providing an end-to-end solution from QR code device binding and real-time data monitoring to remote parameter configuration, data caching, and API access for third-party integration.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/system.png" alt="Software Platform" width={800} height="auto" /></p>

## Installation Methods

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/Installation Methods.png" alt="Software Platform" width={800} height="auto" /></p>

SenseCAP Combo supports two installation methods to suit different deployment scenarios.

### Hanging Installation

The device can be hung using a wire through the mounting hole on the top. This method is suitable for indoor environments such as greenhouses where overhead structures are available.

### Pole-Mount Installation

The device can be mounted on a pole using brackets (not included in the package). This method is ideal for outdoor open-field deployments.

## Applications

SenseCAP Combo 5-in-1 Sensor with 4G is the ideal solution for multi-parameter environmental monitoring in various scenarios. It is widely used in:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/Applications.png" alt="Software Platform" width={800} height="auto" /></p>

- **Smart Greenhouse**: Monitoring temperature, humidity, CO₂, light intensity, and atmospheric pressure in real time to optimize crop growth conditions; connecting external soil sensors via RS485 for comprehensive environmental data collection.
- **Smart Agriculture**: Outdoor environmental monitoring for open-field farming, orchards, and vineyards; tracking microclimate changes to support precision agriculture decisions.
- **Environmental Monitoring**: Air quality and weather parameter monitoring for research stations, industrial sites, and urban environments; long-term data logging with reliable data caching for areas with weak cellular coverage.

## Specification

### General Parameters

| Parameter | Specification |
|-----------|---------------|
| Power Supply Type | Type-C interface, 5V / 2A input |
| Expansion Interface | 1x RS485 (Modbus-RTU) |
| Number of Connectable Sensors | Supports up to 10 external sensors using a Splitter |
| External Sensor Power Output | 12V / 0.35A, 5V / 0.35A |
| Protocol | MQTT protocol; supports user-configured servers via Sensor Hub Configuration Tool NG |
| 4G Cat.1 | Global frequency bands / APN configurable; Micro SIM card / 3FF<br />LTE-FDD: B1/B2/B3/B4/B5/B7/B8/B12/B13/B14/B17/B18/B19/B20/B25/B26/B28<br />LTE-TDD: B34/B38/B39/B40/B41/B66/B71 |
| Data Caching | Local storage for up to 500,000 cached records / Supports local export |
| Antenna | Built-in antenna |
| Switch / LED Indicators | 1x Power Switch, 2x LED Indicators |
| IP Rating | IPX5, PCBA Waterproof Treatment |
| UV Resistance Rating | F1 |
| Enclosure Material | PC/ASA |
| Operating Temperature | 0°C ~ 40°C <br />**Note:** The operating temperature of the device is limited by the included power adapter, which supports an operating temperature range of 0°C to 40°C. <br />The power adapter is designed for indoor use only. Do not expose the power adapter directly to outdoor environments. The power adapter must be installed inside a waterproof enclosure or electrical cabinet to ensure proper protection.|
| Charging Temperature | 0°C ~ 40°C |
| Operating Humidity | 0 ~ 100 % RH (non-condensing) |
| Battery | 5200mAh, 3.7V rechargeable Li-ion battery |
| Solar Panel | Maximum power 1W |
| Installation | Hanging or Pole-mount (Requires wire for hanging; brackets for pole-mount. Not included in package) |
| Dimensions | 202 * 202 * 175 mm |
| Net Weight | 0.8 kg |

### Sensor Specifications

| Parameter | Range | Accuracy | Resolution |
|-----------|-------|----------|------------|
| Air Temperature | -40°C ~ +85°C | ±0.2°C | 0.01°C |
| Air Humidity | 0 ~ 100% RH (non-condensing) | ±2% RH | 0.01% RH |
| Dew Point (calculated by T/H algorithm) | -100°C ~ 80°C | ±2°C | 0.01°C |
| Barometric Pressure | 300 ~ 1200 hPa | 1 hPa | 10 Pa |
| Light Intensity | 0 ~ 200,000 Lux | ±5% | 5 Lux |
| CO₂ | 0 - 10,000 ppm | ±50 ppm ±3% \* reading (0 - 5,000 ppm); <br /> ±5% (5,000 - 10,000 ppm) | 1 ppm |

:::note
For projects requiring additional environmental parameters, customized configurations with extended sensor options are also available. For customization inquiries, please contact techsupport@seeed.io.
:::

## Hardware Overview

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/appearance-2.png" alt="Software Platform" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/appearance-3.png" alt="Software Platform" width={800} height="auto" /></p>

## Part List

|  Name | Quantity |
|------|----------|
| SenseCAP Combo 5-in-1 Sensor with 4G | 1 |
| USB Type-C Cable | 1 |
| Power Adapter | 1 |

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
