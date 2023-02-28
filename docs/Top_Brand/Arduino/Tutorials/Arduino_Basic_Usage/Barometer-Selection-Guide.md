---
description: Seeed Barometer Sensor Selection Guide
title: Seeed Barometer Sensor Selection Guide
tags:
  - Tutorial
keywords:
  - Tutorial
image: https://avatars.githubusercontent.com/u/10758833
slug: /Barometer-Selection-Guide
last_update:
  date: 02/01/2023
  author: w0x7ce

no_comments: false # for Disqus

---

# Seeed Barometer Selection Guide

We have released various types of barometer sensors in the recent years. You may find it difficult to make a choice between them. We feel your pain and let's take a close look at them and workout which one is best suited for you!

For all the barometer sensors in our bazaar, please click [Bazaar Barometer tag](https://www.seeedstudio.com/tag/Barometer.html) to check.

## What is Barometer

A barometer is a widely used weather instrument that measures atmospheric pressure (also known as air pressure or barometric pressure) -- the weight of the air in the atmosphere. It is one of the basic sensors included in weather stations. Barometers have evolved through the centuries and come in all shapes and sizes. It is also used in more industries than just the weather and climate sectors.

For instance, nowadays most mobile phones will have digital barometers builtin, of which are the main type of barometer in electronics field.

<div align="center"><img src="https://files.seeedstudio.com/products/101020812/img/baro%20produced.2019-12-11%2011_05_01.gif" /></div>

### How Does a Digital Barometer Work

A digital barometer uses a detection cell (i.e. a chip) to measure the air temperature/ This chip will be vital and is sensitive to atmospheric pressure which influences its capacity to conduct/relay electricity.

The changing volume affects the strength of the current flowing through it, and the air pressure is calculated by measuring the strength of the current. The small size and versatility of the test battery allows it to be integrated into a variety of devices for a variety of purposes.

Below photo shows a typical barometer sensor with a builtin chip(DPS310):

<div align="center"><img width="{400}" src="https://github.com/SeeedDocument/Grove-High-Precision-Barometer-Sensor-DPS310/raw/master/img/Grove-High-Precision-Barometer-Sensor-DPS310-pin.jpg" /><figcaption><b>Figure 1</b>. <i>Typical Barometer Sensor</i></figcaption>
</div>

## Barometer Sensors at Seeed

<div align="center">
<figure>
  <a href="https://files.seeedstudio.com/wiki/Barometer-Guide/Barometer.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Barometer-Guide/Barometer.png" alt="Seeed Barometer Selection Guide" title="Seeed Barometer Selection Guide" />
  <figcaption><b>Figure 2</b>. <i>Barometer Sensors at Seeed</i></figcaption></a>
</figure>
</div>

### Which One is Best For You

| Specifications               | [Grove - BMP280](https://www.seeedstudio.com/Grove-Barometer-Sensor-BMP280.html)   | [Grove - BME280](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html)  | [Grove - DPS310](https://www.seeedstudio.com/Grove-High-Precision-Barometer-Sensor-DPS310-p-4397.html)      | [Grove - HP206C](https://www.seeedstudio.com/Grove-Barometer-High-Accuracy.html)    |
|------------------------------|-----------------|-----------------|---------------------|-------------------|
| **Thumbnail Image**              |     ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/45d_small.jpg)            |      ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/45d_small.jpg)           |                ![](https://files.seeedstudio.com/wiki/Grove-High-Precision-Barometer-Sensor-DPS310/img/Grove-High-Precision-Barometer-Sensor-DPS310-thumbnail.jpg)     |       ![](https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/45d_small.jpg)            |
| **Pressure Range**               | 300 ~ 1100hPa   | 300 ~ 1100hPa   | 300 ~ 1200hPa       | 700 ~ 1100hPa     |
| **Temperature Range**            | -40 ～ 85°C     | -40 ～ 85°C     | -40 ～ 85°C         | -40 ～ 85°C       |
| **Pressure Precision**           | /               | /               | ± 0.002hPa (±0.02m) | /                 |
| **Pressure Accuracy (Absolute)** | ± 1hPa (or ±8m) | ± 1hPa (or ±8m) | ± 1hPa (or ±8m)     | ± 1.5hPa (or ±8m) |
| **Pressure Accuracy (Relative)** | ± 0.12 hPa      | ± 0.12 hPa      | ± 0.06 hPa          | ± 0.06 hPa        |
| **Pressure Resolution**          | 0.18Pa          | 0.18Pa          | 0.06Pa              | 0.01hPa           |
| **Humidity**                     | /               | 0 ~ 100%        | /                   | /                 |
| **Communication Interface**       | I2C / SPI       | I2C / SPI       | I2C / SPI           | I2C               |

### Quick Insight

From the above table, **Pressure Range**, **Pressure Accuracy (Relative)** and **Pressure Resolution** are the vital aspects of barometer sensors. For such reasons, you can choose the one that is most suited for your needs. Furthermore, also need to considered about the communication interface. In our case, I2C communication is available to all barometers and SPI is also available to most of them.

:::note
SPI communication can operate faster than I2C which may be an advantages in some situations.
:::

To add more, [Grove - Temp&Humi&Barometer Sensor (BME280)](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html) have added features for measuring ±1% accuracy for temperature and ±3% for humidity for certain needs.

## Application Ideas

- Indoor Navigation (Floor detection e.g. in shopping malls and parking garages)
- Health and Sports (Accurate elevation gain and vertical speed)
- Outdoor Navigation (GPS start-up time and accuracy improvement, dead-reckoning e.g. in tunnels)
- Weather Station('Micro-weather' and local forecasts)
- Drones (Flight stability and height control)

## Useful Projects

**Seeed LoRa IoTea Solution**: An automatic information collection system applied to tea plantation. It is part of intelligent agricultural information collection.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/seeed-lora-iotea-solution-b5ee95/embed' width='350'></iframe>

**Intelligent alarm system made with BBG (IoT)**

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/kevin-lee2/intelligent-alarm-system-made-with-bbg-iot-5fdccd/embed' width='350'></iframe>

**Monitoring System for Smart Crops** Design and build a system to monitor the status of your crops using the Netduino 3 WiFi.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/gabogiraldo/monitoring-system-for-smart-crops-dfa4bd/embed' width='350'></iframe>

## Resource

- Reference

  - [How a Barometer Works and Helps Forecast Weather](https://www.thoughtco.com/how-barometers-measure-air-pressure-3444416)

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>
