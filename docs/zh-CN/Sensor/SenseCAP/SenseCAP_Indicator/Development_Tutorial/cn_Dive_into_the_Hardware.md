---
description: 涵盖设备的构造和操作，详细说明每个组件如何为 SenseCAP Indicator 的整体功能做出贡献。
title: 深入了解硬件
keywords:
- Indicator Development Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_Indicator_Dive_into_the_Hardware
sidebar_position: 1
last_update:
  date: 11/17/2023
  author: Spencer
---
# **概述**

SenseCAP Indicator 是一款 4 英寸触摸屏设备，由 ESP32 和 RP2040 双 MCU 供电。ESP32 和 RP2040 都是功能强大的微控制器，提供了一系列特性和功能。

本章将提供关于 SenseCAP Indicator 的 ESP32 和 RP2040 的详细信息，包括它们的功能和用法。涵盖的内容包括编程、与传感器接口以及与其他设备通信等。

# **深入了解硬件**

## **硬件图**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_6.png"/></div>

如图所示，SenseCAP Indicator 主要由 ESP32 和 RP2040 MCU 驱动，它们连接到 LoRa 收发器、LCD 和其他外围电路。
在以下章节中，我们将概述 ESP32 和 RP2040 开发及其各自的功能。

## **ESP32-S3**

ESP32-S3 是一个高度集成的片上系统（SoC），结合了强大的 CPU、2.4 GHz Wi-Fi 和蓝牙 5.0 功能，还包括一系列输入/输出引脚和接口，如 UART、SPI、I2C 和 PWM，允许它与其他设备和传感器接口。

## **RP2040**

SenseCAP Indicator 嵌入了 [RP2040](https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html?)，RP2040 具有双核 ARM Cortex-M0+ 处理器，时钟速度高达 133 MHz，264KB RAM，以及一系列外设，如 USB、UART、SPI 和 I2C。它还包括一个称为可编程 I/O（PIO）的独特功能，允许用户实现自定义数字接口，而无需专用硬件。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/rppinout.png"/></div>

## **ESP32-S3 和 RP2040 通信**

ESP32 和 RP2040 使用串口通信，采用 [COBS](http://www.stuartcheshire.org/papers/COBSforToN.pdf) 通信协议。

ESP32 中使用的库：https://github.com/cmcqueen/cobs-c
RP2040 使用的 Arduino 库：https://github.com/bakercp/PacketSerial

在终端演示中，使用以下数据帧进行传输：

| Byte0    | Byte1-4          |
| -------- | ---------------- |
| PKT_TYPE | PKT_PARA (Little Endia)  |

**PKT_TYPE 列表**

**注意**：以下命令仅供参考，当然您也可以定义自己的命令。

| PKT_TYPE  | DIR\t | Notes  |
|:----------|:----------|:----------|
| 0x00    | ESP32↔RP2040    |   ACK, string, value:'ACK'  |
| 0xA0    | ESP32→RP2040    |  Collect Interval CMD, PKT_PARA is uint32_t |
| 0xA1    | ESP32→RP2040    |  Beep on CMD, PKT_PARA is uint32_t   |
| 0xA2    | ESP32→RP2040    |  Beep off CMD, PKT_PARA is uint32_t  |
| 0xA3    | ESP32→RP2040    |  Shutdown CMD, PKT_PARA is uint32_t  |
| 0xA4    | ESP32→RP2040    |  Power On CMD, PKT_PARA is uint32_t  |
| 0xA0～0xAF  | ESP32→RP2040    |  Other data or cmd   |
| 0xB0    | RP2040→ESP32    | SCD41 Temperature data, PKT_PARA is float    |
| 0xB1    | RP2040→ESP32    | SCD41 Humidity data, PKT_PARA is float    |
| 0xB2    | RP2040→ESP32    | SCD41 CO2 data, PKT_PARA is float    |
| 0xB3    | RP2040→ESP32    | ATH20 Temperature data, PKT_PARA is float    |
| 0xB4    | RP2040→ESP32    | ATH20 Humidity data, PKT_PARA is float    |
| 0xB5    | RP2040→ESP32    | SGP40 tVOC data, PKT_PARA is float. 0～500 index   |
| 0xB6～0xBF    | RP2040→ESP32    | Other data or cmd, PKT_PARA is float    |

# **技术支持**

**需要 SenseCAP Indicator 的帮助？我们在这里为您提供协助！**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
