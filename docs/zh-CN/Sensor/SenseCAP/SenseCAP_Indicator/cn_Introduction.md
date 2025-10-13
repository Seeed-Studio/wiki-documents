---
description: SenseCAP Indicator 入门指南
title: SenseCAP Indicator 入门指南
keywords:
- Get Started SenseCAP Indicator
image: https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_1.png
slug: /cn/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator
sidebar_position: 1
last_update:
  date: 10/13/2025
  author: Twelve
---

## 概述

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/IOdI5_MGbCw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div class="button-container">
  <a class="button-style" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1-p-5643.html">立即购买 🖱️</a>
</div>

SenseCAP Indicator 是一款由 ESP32-S3 和 RP2040 双 MCU 驱动的 4 英寸触摸屏，支持 Wi-Fi/蓝牙/LoRa 通信。

该设备配备两个 Grove 接口，支持 ADC 和 I2C 传输协议，以及两个内置 GPIO 扩展引脚的 USB Type-C 端口，用户可以通过 USB 端口轻松扩展外部配件。

SenseCAP Indicator 是一个面向开发者的完全开源的强大物联网开发平台。还提供一站式 ODM 融合服务，用于定制和快速扩展。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_1.png"/>
</div>

:::caution note
请不要在不支持 Meshtastic 的指示器上刷入 Meshtastic 固件。这可能会造成硬件损坏。如果您想购买用于 Meshtastic 的设备，请购买这款 [Sensecap Indicator for Meshtastic](https://wiki.seeedstudio.com/cn/sensecap_indicator_meshtastic)。
:::

## 特性

- **双 MCU 和丰富的 GPIO**
配备强大的 ESP32S3 和 RP2040 双 MCU，以及超过 400 个 Grove 兼容的 GPIO，提供灵活的扩展选项。
- **实时空气质量监测**
内置 tVOC 和 CO2 传感器，以及外部 Grove AHT20 温湿度传感器，提供更精确的温度和湿度读数。
- **本地 LoRa 集线器用于物联网连接**
集成 Semtech SX1262 LoRa 芯片（可选），用于通过 Wi-Fi 将 LoRa 设备连接到流行的物联网平台（如 Matter），无需额外的兼容设备。
- **完全开源平台**
利用广泛的 ESP32 和 Raspberry Pi 开源生态系统，提供无限的应用可能性。
- **提供融合 ODM 服务**
Seeed Studio 还提供一站式 ODM 服务，用于快速定制和扩展以满足各种需求。（请联系 iot@seeed.cc）

## 硬件概述

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_2.png"/></div>
<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_3.png"/></div>

### 系统图

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_6.png"/></div>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_7.png"/></div>

### 按钮功能

- **短按：** 关闭/唤醒屏幕。
- **长按 3 秒：** 开启/关闭设备。
- **长按 10 秒：** 恢复出厂固件。

### Grove

有两个 Grove 接口用于连接 Grove 模块，为开发者提供更多可能性。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/new-grove.png"/></div>

Grove 是一个模块化、标准化的连接器原型系统和强大的开源硬件生态系统。点击[**这里**](https://www.seeedstudio.com/category/Grove-c-1003.html)了解更多

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_4.png"/></div>

### LoRa®

嵌入式 Semtech SX1262 LoRa® 模块使您能够构建 LoRa® 应用程序，并通过 Wi-Fi 将本地 LoRa 传感器连接到云端。例如，您可以构建一个 LoRa 集线器设备，将 LoRa 传感器连接到智能家居生态系统，通过 Wi-Fi 实现 Matter。这样，LoRa 设备可以通过 Wi-Fi 连接到 Matter 生态系统，无需购买新的 Matter 兼容设备。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_55.png"/></div>

## 规格参数

|屏幕|3.95 英寸，电容式 RGB 触摸屏|
| :- | :- |
|**屏幕分辨率**|480 x 480 像素|
|**电源供应**|5V-DC，1A|
|**电池**|无电池，仅通过 USB 端口供电|
|**处理器**|<p>**ESP32-S3：** Xtensa® 双核 32 位，最高 240 MHz</p><p>**RP2040：** 双 ARM Cortex-M0+，最高 133MHz</p>|
|**闪存**|<p>**ESP32-S3：** 8MB</p><p>**RP2040：** 2MB</p>|
|**外部存储**|支持最大 32GB Micro SD 卡（不包含）|
|**Wi-Fi**|802.11b/g/n，2.4GHz|
|**蓝牙**|蓝牙 5.0 LE|
|**LoRa(SX1262**)|<p>LoRa 和 FSK 调制解调器</p><p>+21dBm 最大发射功率</p> <p>-136dBm@SF12 BW=125KHz 接收灵敏度</p><p>最远 5km 通信距离</p>|
|**传感器**（可选）|<p>**CO2(Sensirion SCD41)**</p><p>范围：0-40000ppm</p><p>精度：400ppm-5000ppm ±(50ppm+5% 读数)</p><p>**TVOC (SGP40)**</p><p>范围：1-500 VOC 指数点</p>**Grove 温湿度传感器(AHT20)**<p>温度范围：-40 ~ + 85 ℃/± 0.3 ℃；0 ~ 100% RH/± 2% RH (25 ℃)</p>|

## 资源

- [**PDF**]: [RP2040 数据手册](https://datasheets.raspberrypi.com/rp2040/rp2040-datasheet.pdf)
- [**PDF**]: [ESP32-S3 数据手册](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf)

## 技术支持

**需要 SenseCAP Indicator 的帮助？我们在这里为您提供支持！**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
