---
description: Wio_Tracker_Introduction
title: Wio Tracker 1110 介绍
keywords:
- Tracker
- Wio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Tracker_Introduction
sidebar_position: 1
last_update:
  date: 11/3/2023
  author: Jessie
---


[Wio Tracker 1110 开发板](https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html)基于[Wio-WM1110 无线模块](https://www.seeedstudio.com/Wio-WM1110-Module-LR1110-and-nRF52840-p-5676.html)，集成了[Semtech的LR1110](https://www.semtech.com/products/wireless-rf/lora-edge/lr1110) LoRa® 收发器和用于地理定位的多用途射频前端，是一个用户友好的、基于LoRa的追踪开发平台。

凭借其紧凑的尺寸和丰富的接口，Wio Tracker 1110 开发板配备了板载天线，便于部署。它支持Arduino开发环境和LoRaWAN协议栈，非常适合追踪相关的物联网项目。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/wio-tracker.png" alt="pir" width={700} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 </font></span></strong>
    </a>
</div>

## 特性

- **由Nordic nRF52840和Semtech LR1110驱动**<br/>
- **多协议支持**: LoRa®、GNSS(GPS/北斗)、蓝牙、Wi-Fi嗅探<br/>
- **支持超过300种Seeed Grove传感器**: 使其能够高度适应不同的追踪和传感需求<br/>
- **板载温度传感器、湿度传感器和3轴加速度计**: 捕获广泛的环境和运动数据<br/>
- **完全开源平台**: 利用广泛的LR1110和nRF52840开源生态系统，实现无限的应用可能性<br/>
- **Arduino IDE兼容性**: 允许轻松编程，为开发者提供熟悉的环境。

## 描述

### 低功耗LoRa® 收发器

得益于Semtech的LR1110，Wio Tracker 1110 开发板提供长距离、低功耗的LoRa® 通信。要了解Long Range及其网络架构和应用等特性，您可以查看LoRa® 和LoRaWAN® 技术介绍，它解释了Long Range是什么、如何工作以及其优缺点。

### 多种定位技术

Wio Tracker 1110 开发板集成了针对地理定位目的的多用途射频前端。它配备了专用于户外定位的GNSS，以及用于室内定位的Wi-Fi和蓝牙扫描。它能够在户外和室内活动之间自动切换，无需为室内或户外使用构建不同的追踪器，这提供了全方位的位置覆盖，同时降低了复杂性和成本。

### 丰富的外设

除了板载温湿度传感器和3轴加速度计外，它还具有一系列外设接口，支持ADC/UART和IIC传输协议，可连接400多种Grove模块，轻松升级到更智能的解决方案。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WM1110-A-Grove.jpg" alt="pir" width={800} height="auto" /></p>

### 开发用户应用

Wio Tracker 1110 开发板是一个完全开源的强大物联网开发平台，兼容Arduino IDE，它配有一套示例应用程序和代码样本，帮助您顺利快速地开始使用。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/arduino-1.png" alt="pir" width={800} height="auto" /></p>

### 快速入门演示

我们提供即插即用的演示，用户只需扫描二维码，连接电源，在5分钟内就可以在SenseCAP Mate APP上查看位置和传感器数据。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/grove.png" alt="pir" width={800} height="auto" /></p>

### 硬件概览

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/hard-overview.png" alt="pir" width={800} height="auto" /></p>

### 规格参数

|LoRa® 和定位 (Semtech LR1110)||
|----|----|
|LoRaWAN® 协议|V1.0.3|
|频率计划|863~928MHz|
|灵敏度| -125dBm @125K/SF7<br/>-141dBm @125K/SF12|
|输出功率|20dBm max @LoRa®|
|定位技术|GNSS(GPS/北斗), WiFi嗅探|
|范围|2~10km(取决于天线和环境)|

|蓝牙(Nordic nRF52840)||
|----|----|
|蓝牙|蓝牙 5.3|
|闪存|1MB|
|内存|256KB|
|协议|蓝牙LE、蓝牙mesh、Thread、Zigbee、<br/>802.15.4、ANT和2.4 GHz专有协议栈|
|输出功率|6dBm max @蓝牙|

|通用||
|----|----|
|供电电压|5V (USB 2.0 Type-C)<br/>电池连接器-4.5V|
|射频接口 |GNSS天线连接器 x 1<br/>LoRa天线连接器 x 1|
|USB type-C| x 1|
|Grove接口|ADC x 1<br/>I2C x 1<br/>UART x 1<br/>数字 x 3|
|按钮|USER-用户可配置按钮<br/>RESET-复位|

|板载传感器||
|----|----|
|温湿度传感器 (SHT41)||
|范围|精度|
|温度|-40~125°C<br/>0.2°C|
|湿度|0~100%RH<br/>±1.8%RH|
|3轴加速度计(LIS3DHTR)||
|范围|±2g, 4g, 8g, 16g|
|带宽|0.5Hz ~ 625Hz|
|灵敏度 (LSB/g)|1000 (±2g) ~ 83 (±16g)|
