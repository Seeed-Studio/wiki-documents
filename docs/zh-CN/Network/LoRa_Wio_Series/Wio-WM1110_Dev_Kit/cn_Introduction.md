---
description: Wio-WM1110 开发套件介绍
title: 介绍
keywords:
- Wio-WM1110 Dev Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-WM1110_Dev_Kit/Introduction
sidebar_position: 1
last_update:
  date: 6/26/2023
  author: Jessie
---


# Wio-WM1110 开发套件

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993082-wio-wm1110-dev-kit-45font.jpg" alt="pir" width={500} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM1110-Dev-Kit-p-5677.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

WM1110 开发套件基于 Wio-WM1110 无线模块，集成了 Semtech 的 LoRa® 收发器和用于地理定位的多用途射频前端。
LoRa® 收发器提供低功耗、高灵敏度的网络覆盖，而 GNSS（GPS/北斗）和 Wi-Fi 扫描提供全方位的位置覆盖。
同时还为各种外设提供连接选项。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/schematic4.png" alt="pir" width={800} height="auto" /></p>

## 特性

- **低功耗高灵敏度 LoRa/(G)FSK 半双工射频收发器**：支持 863-928MHz 频段

- **用于地理定位的多用途射频前端**：GNSS（GPS/北斗）、Wi-Fi、蓝牙
- **丰富的 GPIO**：超过 400 个 Grove 兼容 GPIO，提供灵活的扩展选项。
- **开源平台**：利用广泛的 LR1110 和 nRF52840 开源生态系统，实现无限的应用可能性。

### 低功耗 LoRa® 收发器

得益于 Semtech 的 LoRa Edge™ LR1110，Wio-WM1110 开发套件提供长距离、低功耗的 LoRa® 通信。要了解 Long Range 及其网络架构和应用等特性，您可以查看 LoRa® 和 LoRa®WAN® 技术介绍，它解释了 Long Range 是什么、如何工作以及其优缺点。

### 定位服务

Wio-WM1110 开发套件集成了针对地理定位目的的多用途射频前端。它配备了专用于户外定位的 GNSS，以及用于室内定位的 Wi-Fi 和蓝牙低功耗扫描。
它能够在户外和室内活动之间自动切换，无需为室内或户外使用构建不同的跟踪器，这提供了全方位的位置覆盖，同时降低了复杂性和成本。

**户外定位（GNSS）**

Wio-WM1110 开发套件集成了 GNSS（GPS/北斗）低功耗扫描，
从卫星获取数据并将其加密发送到 LoRa® 云，降低功耗并提高安全性。

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTI1MQ_47857_JbH8r_MU_X1uz1V7_1687329215?w=1265&h=592&type=image/jpeg" alt="pir" width={800} height="auto" /></p>

**IPS（Wi-Fi+蓝牙）**
作为户外 GNSS 的补充，WM1110 开发套件还支持适用于室内定位的 Wi-Fi 超低功耗被动扫描和蓝牙扫描，它扫描附近蓝牙信标/Wi-Fi 的 MAC 地址和 RSSI，将数据上传到云服务以获取准确位置。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/Schematic02.png" alt="pir" width={800} height="auto" /></p>

### 丰富的外设

除了内置的温湿度传感器和 3 轴加速度计外，该套件还包括一系列外设接口，支持 ADC/UART 和 IIC 传输协议，可连接 400+ 个 Grove 模块，便于升级到更智能的解决方案。它还兼容 Arduino，为开发者提供无限可能。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_4.png" alt="pir" width={800} height="auto" /></p>

### 开发用户应用

Wio-WM1110 开发套件是一个面向开发者的完全开源的强大物联网开发平台，还包括一套示例应用和代码样本，以及软件开发工具包（SDK）来帮助您入门。

## 原理图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/schematic_1.png" alt="pir" width={800} height="auto" /></p>

## 规格参数

**LoRa® 和定位 (Semtech LR1110)**

|LoRa®WAN 协议|V1.0.4|
| :- | :- |
|频率|863~928MHz|
|灵敏度|<p>-125dBm @125K/SF7</p><p>-141dBm @125K/SF12</p>|
|输出功率|20dBm max @LoRa®|
|定位技术|GNSS(GPS,北斗),WiFi|
|范围|2~10km (取决于天线和环境)|

**蓝牙(Nordic nRF52840)**

|蓝牙|蓝牙 5.3|
| :- | :- |
|闪存|1MB|
|内存|256KB|
|协议|蓝牙 LE,蓝牙 mesh,Thread,Zigbee,802.15.4, ANT 和 2.4 GHz 专有协议栈|
|输出功率|6dBm 最大 @蓝牙|

**内置传感器**

**温湿度传感器 (SHT41)**

|  | 范围 | 精度 |
| -------- | -------- | -------- |
|温度  | -40~125°C |0.2°C|
| 湿度 | 0~100%RH |1.8%RH|

**3轴加速度计(LIS3DHTR)**

| 范围 | 带宽 | 灵敏度(LSB/g) |
| -------- | -------- | -------- |
| ±2g, 4g, 8g, 16g | 0.5Hz ~ 625Hz |1000 (±2g) ~ 83 (±16g)

**通用规格**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/spec.png" alt="pir" width={800} height="auto" /></p>

## 技术支持

**需要 Wio-WM1110 开发套件的帮助？我们随时为您提供协助！**

<div class="button_tech_support_container">
<a href="https://discord.gg/sensecap" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions" class="button_discussion"></a>
</div>
