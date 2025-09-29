---
description: Seeed 气压计传感器选择指南
title: Seeed 气压计传感器选择指南

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Barometer-Selection-Guide
last_update:
  date: 02/01/2023
  author: w0x7ce

no_comments: false # for Disqus

---

# Seeed 气压计选择指南

我们在近年来发布了各种类型的气压计传感器。您可能会发现在它们之间做出选择很困难。我们理解您的困扰，让我们仔细看看它们，找出哪一个最适合您！

要查看我们商城中的所有气压计传感器，请点击 [商城气压计标签](https://www.seeedstudio.com/tag/Barometer.html) 进行查看。

## 什么是气压计

气压计是一种广泛使用的气象仪器，用于测量大气压力（也称为气压或气压压力）——大气中空气的重量。它是气象站中包含的基本传感器之一。气压计经过几个世纪的发展，有各种形状和尺寸。它也被用于气象和气候部门以外的更多行业。

例如，如今大多数手机都内置数字气压计，这是电子领域中气压计的主要类型。

<div align="center">
<img src="https://files.seeedstudio.com/products/101020812/img/baro%20produced.2019-12-11%2011_05_01.gif" />
</div>

### 数字气压计如何工作

数字气压计使用检测单元（即芯片）来测量空气温度。这个芯片至关重要，对大气压力敏感，大气压力会影响其导电/传递电流的能力。

体积的变化会影响流过它的电流强度，通过测量电流强度来计算气压。测试电池的小尺寸和多功能性使其能够集成到各种设备中用于各种目的。

下图显示了一个典型的内置芯片（DPS310）的气压计传感器：

<div align="center">
<img width="{400}" src="https://github.com/SeeedDocument/Grove-High-Precision-Barometer-Sensor-DPS310/raw/master/img/Grove-High-Precision-Barometer-Sensor-DPS310-pin.jpg" />
<figcaption><b>图 1</b>. <i>典型气压计传感器</i></figcaption>
</div>

## Seeed 的气压计传感器

<div align="center">
<figure>
  <a href="https://files.seeedstudio.com/wiki/Barometer-Guide/Barometer.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Barometer-Guide/Barometer.png" alt="Seeed 气压计选择指南" title="Seeed 气压计选择指南" /><figcaption><b>图 2</b>. <i>Seeed 的气压计传感器</i></figcaption></a>
</figure>
</div>

### 哪一个最适合您

| 规格参数               | [Grove - BMP280](https://www.seeedstudio.com/Grove-Barometer-Sensor-BMP280.html)   | [Grove - BME280](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html)  | [Grove - DPS310](https://www.seeedstudio.com/Grove-High-Precision-Barometer-Sensor-DPS310-p-4397.html)      | [Grove - HP206F](https://www.seeedstudio.com/Grove-Barometer-High-Accuracy.html)    |
|------------------------------|-----------------|-----------------|---------------------|-------------------|
| **缩略图**              |     ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/45d_small.jpg)            |      ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/img/45d_small.jpg)           |                ![](https://files.seeedstudio.com/wiki/Grove-High-Precision-Barometer-Sensor-DPS310/img/Grove-High-Precision-Barometer-Sensor-DPS310-thumbnail.jpg)     |       ![](https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/45d_small.jpg)            |
| **压力范围**               | 300 ~ 1100hPa   | 300 ~ 1100hPa   | 300 ~ 1200hPa       | 700 ~ 1100hPa     |
| **温度范围**            | -40 ～ 85°C     | -40 ～ 85°C     | -40 ～ 85°C         | -40 ～ 85°C       |
| **压力精度**           | /               | /               | ± 0.002hPa (±0.02m) | /                 |
| **压力准确度（绝对）** | ± 1hPa (或 ±8m) | ± 1hPa (或 ±8m) | ± 1hPa (或 ±8m)     | ± 1.5hPa (或 ±8m) |
| **压力准确度（相对）** | ± 0.12 hPa      | ± 0.12 hPa      | ± 0.06 hPa          | ± 0.06 hPa        |
| **压力分辨率**          | 0.18Pa          | 0.18Pa          | 0.06Pa              | 0.01hPa           |
| **湿度**                     | /               | 0 ~ 100%        | /                   | /                 |
| **通信接口**       | I2C / SPI       | I2C / SPI       | I2C / SPI           | I2C               |

### 快速洞察

从上表可以看出，**压力范围**、**压力准确度（相对）** 和 **压力分辨率** 是气压计传感器的重要方面。基于这些原因，您可以选择最适合您需求的产品。此外，还需要考虑通信接口。在我们的情况下，所有气压计都支持 I2C 通信，大多数也支持 SPI。

:::note
SPI 通信的运行速度比 I2C 更快，在某些情况下这可能是一个优势。
:::

此外，[Grove - 温湿度气压传感器 (BME280)](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html) 增加了测量功能，温度精度为 ±1%，湿度精度为 ±3%，可满足特定需求。

## 应用创意

- 室内导航（楼层检测，例如在购物中心和停车场）
- 健康和运动（精确的海拔增益和垂直速度）
- 户外导航（GPS启动时间和精度改进，航位推算，例如在隧道中）
- 气象站（"微气候"和本地预报）
- 无人机（飞行稳定性和高度控制）

## 实用项目

**Seeed LoRa IoTea 解决方案**：应用于茶园的自动信息收集系统。它是智能农业信息收集的一部分。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/seeed-lora-iotea-solution-b5ee95/embed' width='350'></iframe>

**使用 BBG 制作的智能报警系统（IoT）**

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/kevin-lee2/intelligent-alarm-system-made-with-bbg-iot-5fdccd/embed' width='350'></iframe>

**智能作物监控系统** 使用 Netduino 3 WiFi 设计和构建一个系统来监控您的作物状态。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/gabogiraldo/monitoring-system-for-smart-crops-dfa4bd/embed' width='350'></iframe>

## 资源

- 参考资料

  - [气压计的工作原理及其如何帮助预测天气](https://www.thoughtco.com/how-barometers-measure-air-pressure-3444416)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>