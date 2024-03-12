---
description: Covers the device's construction and operation, detailing how each component contributes to the SenseCAP Indicator's overall functionality.
title: Dive into the Hardware
keywords:
- Indicator Development Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: //cn/SenseCAP_Indicator_Dive_into_the_Hardware
sidebar_position: 1
last_update:
  date: 3/3/2024
  author: DuKaiyin
---
# **概念**


SenseCAP Indicator是一款由ESP32和RP2040双MCU提供动力的4英寸触摸屏设备。ESP32和RP2040都是功能强大的微控制器，提供了一系列的功能和功能。

本章将提供有关SenseCAP Indicator的ESP32和RP2040的详细信息，包括它们的功能和用途。内容涵盖了编程、与传感器接口、与其他设备通信等方面


# **深入了解硬件**

## **硬件图解**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_6.png"/></div>

如图所示，SenseCAP Indicator主要由ESP32和RP2040 MCU驱动，它们连接到LoRa收发器、液晶显示屏和其他外围电路。
在接下来的章节中，我们将概述ESP32和RP2040的开发以及它们各自的功能。
## **ESP32-S3**

ESP32-S3是一款高度集成的系统级芯片（SoC），集成了强大的CPU、2.4 GHz Wi-Fi和蓝牙5.0功能，还包括一系列的输入/输出引脚和接口，如UART、SPI、I2C和PWM，使其能够与其他设备和传感器进行接口连接。



## **RP2040**

SenseCAP Indicator搭载了 [RP2040](https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html?), RP2040具有双核ARM Cortex-M0+处理器，时钟速度高达133 MHz，264KB的RAM，以及一系列外设，如USB、UART、SPI和I2C。它还包括一项称为可编程I/O（PIO）的独特功能，允许用户实现定制的数字接口，无需专门的硬件支持




<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/rppinout.png"/></div>


## **ESP32-S3和RP2040 Communication**
 
ESP32和RP2040使用串口通信，采用[COBS](http://www.stuartcheshire.org/papers/COBSforToN.pdf) 通信协议。


ESP32使用的库:  https://github.com/cmcqueen/cobs-c
RP2040使用Arduino库:  https://github.com/bakercp/PacketSerial


在终端演示中，以下数据帧用于传输：

| Byte0    | Byte1-4          |
| -------- | ---------------- |
| PKT_TYPE | PKT_PARA (Little Endia)  |


**PKT_TYPE列表**


**注意**: 以下命令仅供参考，当然您也可以定义自己的命令.


| PKT_TYPE  | DIR	 | Notes  |
|:----------|:----------|:----------|
| 0x00    | ESP32<->RP2040    |   ACK, string, value:'ACK'  |
| 0xA0    | ESP32->RP2040    |  Collect Interval CMD, PKT_PARA is uint32_t |
| 0xA1    | ESP32->RP2040    |  Beep on CMD, PKT_PARA is uint32_t   |
| 0xA2    | ESP32->RP2040    |  Beep off CMD, PKT_PARA is uint32_t  |
| 0xA3    | ESP32->RP2040    |  Shutdown CMD, PKT_PARA is uint32_t  |
| 0xA4    | ESP32->RP2040    |  Power On CMD, PKT_PARA is uint32_t  |
| 0xA0~0xAF  | ESP32->RP2040    |  Other data or cmd   |
| 0xB0    | RP2040->ESP32    | SCD41 Temperature data, PKT_PARA is float    |
| 0xB1    | RP2040->ESP32    | SCD41 Humidity data, PKT_PARA is float    |
| 0xB2    | RP2040->ESP32    | SCD41 CO2 data, PKT_PARA is float    |
| 0xB3    | RP2040->ESP32    | ATH20 Temperature data, PKT_PARA is float    |
| 0xB4    | RP2040->ESP32    | ATH20 Humidity data, PKT_PARA is float    |
| 0xB5    | RP2040->ESP32    | SGP40 tVOC data, PKT_PARA is float. 0~500 index   |
| 0xB6~0xBF    | RP2040->ESP32    | Other data or cmd, PKT_PARA is float    |




# **技术支持**

**需要帮助您的SenseCAP Indicator？ 我们在这里为您提供帮助！**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
