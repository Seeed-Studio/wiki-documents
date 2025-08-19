---
description: Wio_Tracker_Introduction
title: Wio Tracker 1110 简介
keywords:
- Tracker
- Wio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Tracker_Introduction
sidebar_position: 1
last_update:
  date: 2023/11/3
  author: Jessie
---

[Wio Tracker 1110 开发板](https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html) 基于 [Wio-WM1110 无线模块](https://www.seeedstudio.com/Wio-WM1110-Module-LR1110-and-nRF52840-p-5676.html)，集成了 [Semtech 的 LR1110](https://www.semtech.com/products/wireless-rf/lora-edge/lr1110) LoRa® 收发器和多功能射频前端，用于地理定位。这是一个用户友好的、基于 LoRa 的追踪开发平台。

凭借其紧凑的尺寸和丰富的接口，Wio Tracker 1110 开发板配备了板载天线，便于部署。它支持 Arduino 开发环境和 LoRaWAN 协议栈，非常适合与追踪相关的物联网项目。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/wio-tracker.png" alt="pir" width={700} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 </font></span></strong>
    </a>
</div>

## 特性

* **由 Nordic nRF52840 和 Semtech LR1110 提供支持**<br/>
* **多协议支持**: LoRa®、GNSS(GPS/北斗)、蓝牙、Wi-Fi 嗅探<br/>
* **支持 300+ Seeed Grove 传感器**: 高度适应不同的追踪和感知需求<br/>
* **板载温度传感器、湿度传感器和三轴加速度计**: 捕获广泛的环境和运动数据<br/>
* **完全开源平台**: 利用丰富的 LR1110 和 nRF52840 开源生态系统，实现无限的应用可能性<br/>
* **兼容 Arduino IDE**: 为开发者提供易于编程和熟悉的开发环境。

## 描述

### 低功耗 LoRa® 收发器

得益于 Semtech 的 LR1110，Wio Tracker 1110 开发板提供了远距离、低功耗的 LoRa® 通信。想了解 LoRa 的网络架构和应用等特性，可以查看 LoRa® 和 LoRaWAN® 技术简介，它解释了 LoRa 的工作原理及其优缺点。

### 多种定位技术

Wio Tracker 1110 开发板集成了多功能射频前端，专为地理定位设计。它配备了用于室外定位的 GNSS，以及用于室内定位的 Wi-Fi 和蓝牙扫描。它能够在室外和室内活动之间自动切换，无需为室内或室外使用构建不同的追踪器，从而提供全面的定位覆盖，同时降低复杂性和成本。

### 丰富的外设

除了板载的温湿度传感器和三轴加速度计外，它还具有一系列外设接口，支持 ADC/UART 和 IIC 传输协议，可连接 400+ Grove 模块，轻松升级为更智能的解决方案。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WM1110-A-Grove.jpg" alt="pir" width={800} height="auto" /></p>

### 开发用户应用

Wio Tracker 1110 开发板是一个完全开源的强大物联网开发平台，兼容 Arduino IDE，提供了一套示例应用和代码样本，帮助您快速顺利地入门。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/arduino-1.png" alt="pir" width={800} height="auto" /></p>

### 快速入门演示

我们提供了即插即用的演示，用户只需扫描二维码，连接电源，在 5 分钟内即可在 SenseCAP Mate APP 上查看位置和传感器数据。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/grove.png" alt="pir" width={800} height="auto" /></p>

### 硬件概览

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/hard-overview.png" alt="pir" width={800} height="auto" /></p>

### 规格

|LoRa® 和定位 (Semtech LR1110)||
|----|----|
|LoRaWAN® 协议|V1.0.3|
|频率范围|863~928MHz|
|灵敏度|	-125dBm @125K/SF7<br/>-141dBm @125K/SF12|
|输出功率|最大 20dBm @LoRa®|
|定位技术|GNSS(GPS/北斗)、WiFi 嗅探|
|范围|2~10km(取决于天线和环境)|

|蓝牙 (Nordic nRF52840)||
|----|----|
|蓝牙|蓝牙 5.3|
|闪存|1MB|
|RAM|256KB|
|协议|蓝牙 LE、蓝牙 Mesh、Thread、Zigbee、<br/>802.15.4、ANT 和 2.4 GHz 专有协议栈|
|输出功率|最大 6dBm @蓝牙|

|通用||
|----|----|
|电压 - 供电|5V (USB 2.0 Type-C)<br/>电池接口-4.5V|
|RFIO|GNSS 天线接口 x 1<br/>LoRa 天线接口 x 1|
|USB Type-C|x 1|
|Grove 接口|ADC x 1<br/>I2C x 1<br/>UART x 1<br/>数字 x 3|
|按钮|用户可配置按钮<br/>复位按钮|

|板载传感器||
|----|----|
|温湿度传感器 (SHT41)||
|范围|精度|
|温度|-40~125°C<br/>0.2°C|
|湿度|0~100%RH<br/>±1.8%RH|
|三轴加速度计 (LIS3DHTR)||
|范围|±2g, 4g, 8g, 16g|
|带宽|0.5Hz ~ 625Hz|
|灵敏度 (LSB/g)|1000 (±2g) ~ 83 (±16g)|