---
description: LoRaWAN 追踪器介绍
title: 介绍
keywords:
  - Tracker
  - LoRaWAN
image: https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/intro-e.webp
slug: /t1000e_for_lorawan_introduction
sku: 114993591
sidebar_position: 1
last_update:
  date: 2/4/2026
  author: Janet
createdAt: '2026-01-09'
updatedAt: '2026-02-04'
url: https://wiki.seeedstudio.com/cn/t1000e_for_lorawan_introduction/
---

# T1000-E for LoRaWAN 介绍

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993591-t1000-e-lorawan.jpg" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-LoRaWAN-p-6408.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>
<br />

T1000-E for LoRaWAN 配备完全开源的固件。为了提升用户体验，我们在出厂设备上预装了演示固件。用户可以探索演示固件以获得初步体验，也可以开发自己的定制固件。有关定制开发的详细信息，请参考 [LoRaWAN 开源固件](https://wiki.seeedstudio.com/cn/open_source_lorawan/)。

:::caution note
在刷写固件之前，请确保您的设备是 `T1000-E for LoRaWAN` 版本，请不要将其他 Meshtastic 固件刷写到此追踪器型号，这可能导致设备完全损坏。
:::

**T1000 系列版本对比**

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image2_20.png" alt="pir" width={800} height="auto" /></p>

## 特性
- **开源软件**：提供完整源代码，支持社区贡献和定制设备。
- **多传感器集成**：集成温度、光照、3 轴加速度计传感器。支持 GNSS、WiFi 和蓝牙进行室内/室外定位。
- **简易配置**：通过 [SenseCraft App](https://wiki.seeedstudio.com/cn/sensecraft-app/overview/)，用户可以轻松配置设备参数。
- **强大的 LoRaWAN 支持**：确保设备快速接入网络和配置。
- **用户友好的按钮**：简单的按钮选项用于开/关机、蓝牙设置、SOS 报警等。

## 规格参数

### 通用参数

| 产品型号          | T1000-E for LoRaWAN                                                  |
|--|--|
| 回传方式               | LoRaWAN® (v1.0.4 Class A)                                            |
| 蓝牙              | Bluetooth v5.1，通过 SenseCraft App 设置                           |
| LoRaWAN 信道计划   | IN865 / EU868 / US915 / AU915 / AS923 / KR920 / RU864                |
| 温度            | 范围：-20 到 60°C；Δ 精度：±1°C；分辨率：0.1°C              |
| 光照                  | 0 到 100%（0 为黑暗，100% 为最亮）                            |
| 3 轴加速度计   | 3 轴加速度计检测运动                              |
| LED 和蜂鸣器         | LED 和蜂鸣器指示状态                                    |
| 按钮                 | 1 个按钮用于操作和触发事件（SOS）                          |
| 天线                | 内置（GNSS/LoRa/Wi-Fi/BLE）                                       |
| 通信距离 | 2 到 5km（取决于网关天线、安装和环境） |
| IP 等级              | IP65                                                                 |
| 尺寸             | 85 x 55 x 6.5 mm                                                     |
| 设备重量          | 32g                                                                  |
| 工作温度  | -20°C 到 +60°C                                                       |
| 工作湿度     | 5% - 95%（无冷凝）                                           |
| 认证          | CE / FCC / RoHS                                                      |


### 定位

| 特性                         | 描述                                           |
|--|--|
| GNSS 星座     | GPS / GLONASS / Galileo / BeiDou / QZSS                        |
| GNSS 灵敏度       | -145dBm 冷启动 / -160 dBm 跟踪                         |
| GNSS 定位精度 | ~10m CEP，GPS，-130dBm                                         |
| Wi-Fi 定位      | 被动扫描，上传扫描到的 3~5 个 MAC 地址        |
| 蓝牙定位  | 上传扫描到的 3 个最佳信号 Beacon 的 MAC 地址      |


### 电池

| 特性                         | 描述                                                         |
|--|--|
| 电池容量                 | 可充电锂电池，700mAh                               |
| 电池续航估计           | 单次充电 3 个月（每小时上传一次，仅 GNSS 数据）  |
| 电池电量监控          | 定期上传电池电量                                      |
| 充电线（不含适配器） | USB 磁吸充电线，1 米                            |
| 电源输入电压              | 4.7 到 5.5V DC                                                     |
| 充电温度             | 0 ~ +45°C                                                         |



## 硬件概述

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/t1000e_for_lorawan_hardware_overview.webp" alt="pir" width={800} height="auto" /></p>


## 应用场景

- **资产追踪**：远程监控资产状态和位置。通过 LoRaWAN 将位置数据传输到云端。用户可以在移动端或 PC 管理平台上查看实时位置和轨迹。
- **环境监测**：利用内置的温度、光敏传感器和 3 轴加速度计。通过 LoRaWAN 实时收集和上传环境数据，用于远程参数监控。
- **物流管理**：安装在车辆或包裹上。实时跟踪货物运输状态（路线、停靠点、准时到达），帮助物流公司进行调度和管理。

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
