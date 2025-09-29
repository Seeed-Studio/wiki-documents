---
description: LPWAN Asset Tracker Dev Kit for Amazon Sidewalk – Wio Tracker 1110
title: 适用于 Sidewalk 的 LPWAN 开发套件
keywords:
- Tracker
- sidewalk
- Amazon
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/wio_tracker_for_sidewalk
last_update:
  date: 12/4/2023
  author: Jessie
---

LPWAN 资产追踪器开发套件基于 [Wio-WM1110 无线模块](https://www.seeedstudio.com/Wio-WM1110-Module-LR1110-and-nRF52840-p-5676.html)，通过被动 WiFi 扫描或 GNSS 收集位置数据，并使用 BLE 和/或 LoRa 无线电与 Amazon Sidewalk 网络桥接器通信。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/sidewalk-kit.png" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LPWAN-Asset-Tracker-Dev-kit-WM1110-p-5846.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>


:::tip
Amazon Sidewalk 目前仅在美国可用。请查看 [Sidewalk 网络覆盖](https://coverage.sidewalk.amazon/)。

对于其他地区，您也可以选择 [Wio Tracker 1110 开发板](https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html)，它兼容全球 LoRaWAN® 网络。
:::


## 特性

* **支持 Amazon Sidewalk 网络**

* **提供多种连接选项**，包括：LoRa®、GNSS（GPS/北斗）、蓝牙、Wi-Fi 嗅探器

* **支持超过 300+ 种 Seeed Grove 传感器**：使其高度适应不同的追踪和传感需求。

* **板载温度传感器、湿度传感器和 3 轴加速度计**：捕获广泛的环境和运动数据

* **完全开源平台**：利用广泛的 LR1110 和 nRF52840 开源生态系统，实现无限的应用可能性


## 描述

### 支持 Amazon Sidewalk

Amazon Sidewalk 是一个加密的免费连接长距离网络，为数十亿设备提供持续连接。它匿名连接智能设备，创建高度可靠的共享社区网络，您可以使用它来创建更具成本效益的连接解决方案。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/sidewalk-kit.png" alt="pir" width={800} height="auto" /></p>


### 多种定位技术

LPWAN 资产追踪器开发套件 – WM1110 集成了针对地理定位目的的多用途射频前端。它配备了专用于户外定位的 GNSS，以及用于室内定位的 Wi-Fi 嗅探器和蓝牙扫描。它能够在户外和室内活动之间自动切换，无需为室内或户外使用构建不同的追踪器，这提供了全方位的位置覆盖，同时降低了复杂性和成本。

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEwNA_234601_twY1xjCUq9Z8yoYu_1701143222?w=2032&h=1070&type=image/png" alt="pir" width={800} height="auto" /></p>


### 丰富的外设

除了板载温湿度传感器（SHT41）和 3 轴加速度计（LIS3DHTR）外，它还具有一系列外设接口，支持 ADC/UART 和 IIC 传输协议，可连接 300+ 种 Grove 模块，轻松升级到更智能的解决方案。

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEwNA_639823_3yeu0eTFcW0f2AHj_1701143279?w=1802&h=844&type=image/png" alt="pir" width={800} height="auto" /></p>

### 使用 Amazon Sidewalk 构建资产追踪器应用

了解 [Amazon Sidewalk](https://www.amazon.com/Amazon-Sidewalk/b?ie=UTF8&node=21328123011) 和 [AWS IoT Core for Amazon Sidewalk](https://docs.aws.amazon.com/iot/latest/developerguide/iot-sidewalk.html)，以及如何将 LPWAN 资产追踪器开发套件连接到覆盖广泛的 Amazon Sidewalk 网络并与 AWS IoT Core 集成。

此演示应用专为 re: Invent 2023 的 IOT202 使用 AWS IoT 构建合规、安全的连接产品研讨会而创建，旨在用于进一步的 AWS 研讨会活动。开发人员或爱好者应该能够通过研讨会很好地了解 AWS IoT 服务，包括 AWS IoT Core 和 Amazon Sidewalk，以及如何将它们集成到您的连接产品中。

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEwNA_817803_KG4rJQIohMMzPyR4_1701150525?w=1370&h=798&type=image/png" alt="pir" width={800} height="auto" /></p>

## 硬件概述

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEwNA_19830_N9NXJqFu1LJ_Rku__1700122819?w=1608&h=1060&type=image/png" alt="pir" width={800} height="auto" /></p>


## 应用


<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEwNA_419290_B_TS3XqgFv7LnMbQ_1700474791?w=1752&h=858&type=image/png" alt="pir" width={800} height="auto" /></p>


## 规格参数


**LoRa® 和定位 (Semtech LR1110)**

|频率|863~928MHz|
| :- | :- |
|灵敏度|<p>-125dBm @125K/SF7</p><p>-141dBm @125K/SF12</p>|
|输出功率|20dBm max @LoRa®|
|定位技术|GNSS(GPS,北斗),WiFi|
|范围|2~10km (取决于天线和环境)|


**蓝牙(Nordic nRF52840)**

|蓝牙|Bluetooth 5.3|
| :- | :- |
|Flash|1MB|
|RAM|256KB|
|协议|Bluetooth LE,Bluetooth mesh,Thread,Zigbee,802.15.4, ANT 和 2.4 GHz 专有协议栈|
|输出功率|6dBm max @Bluetooth|

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