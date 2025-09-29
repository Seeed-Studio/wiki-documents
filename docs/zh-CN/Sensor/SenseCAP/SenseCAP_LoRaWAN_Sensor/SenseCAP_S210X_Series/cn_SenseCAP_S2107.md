---
description: SenseCAP S2107
title: SenseCAP S2107
keywords:
- SenseCAP Sensor_Probe&Accessories
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_S2107
last_update:
  date: 9/25/2023
  author: KeweiLee
---

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/0.jpg" /></div>

# 产品描述

SenseCAP LoRaWAN® S2107 温度传感器测量温度范围为 -50°C~300°C。这是一款高精度温度传感器 PT1000，可支持宽温度范围和工业场景中的温度检测。
Pt1000 传感器（1000 欧姆温度传感器）是最常见的铂电阻温度计类型。S2107 支持 PT1000 传感器的三线制电路，并允许同时连接多达三个传感器。
直接接触温度是许多场景中的重要指标，特别是在液体检测、食品监控、存储冷链、工业锅炉、水产养殖解决方案中。S2107 专门针对 OTA 进行了优化，内置蓝牙，可实现快速设置和更新。得益于 LoRa 和 IP66 设计，该传感器具有稳定性和可靠性，可覆盖长传输距离，同时保持较低功耗。与有线设备不同，它采用电池供电，减少了部署的工作量和复杂性，可在几分钟内拆卸和安装。


[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html)

# 特性

- 兼容全球 LoRaWAN® 网络：兼容不同类型的 LoRaWAN® 网关，可快速连接 LoRaWAN® 网络（支持 863MHz ~928MHz 通用频率计划）。
- 长距离和电池供电：在城市场景中超宽传输距离达 2km，在视距场景中达 10km。由易于更换的标准 Li-SOCl2 电池（型号：ER34615）供电，电池寿命最长 10 年。
- 专为恶劣环境设计：-40℃ ~ 85℃ 工作温度和 IP66 级外壳，适用于户外使用、高紫外线照射、大雨、多尘条件等。
- 简单配置和校准：SenseCAP 提供无代码体验，使用户能够通过 SenseCAP Mate APP 完成配置和校准。
- **本地存储：当 LoRaWAN 网络断开时，设备可本地存储多达 2000 条上行记录**。

# 应用

- 液体检测
- 食品监控
- 存储冷链
- 水产养殖解决方案

# 规格

|**温度**||
| :- | :- |
|范围|<p>-50 到 300 ℃ </p><p>（其他范围定制请联系销售）</p>|
|精度|±0.5℃|
|分辨率|0.1℃|
|**通用参数**||
|产品型号|S2107|
|微控制器|Wio-E5|
|支持协议|LoRaWAN v1.0.3 Class A|
|内置蓝牙|应用工具更改参数|
|LoRaWAN 信道计划|IN865/EU868/US915/AU915/ AS923/KR920/RU864 \*|
|最大发射功率|19dBm|
|灵敏度|-136dBm@SF12 BW=125KHz|
|通信距离|2 到 10 km（取决于网关天线和环境）|
|IP 等级|IP66|
|工作温度|-40 到 +85 °C（LoRa DTU）；-50 到 200℃（电缆）；-50 到 300℃（探头）|
|工作湿度|0 到 100 %RH（非冷凝）|
|设备重量|360g|
|电缆长度|3 米|
|认证|CE / FCC / RoHS / TELEC|
|**电池（设备内含）**||
|电池寿命|长达 10 年\*\*|
|电池容量|19Ah（不可充电）|
|电池类型|标准 D 型 SOCl2 电池|

# 如何为 S2107 添加 3 个 PT1000 传感器

## 硬件准备

按照图示连接 3 个 PT1000 传感器
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/1.jpg" /></div>

## 软件准备

使用 SenseCAP Mate App 配置 PT1000 传感器。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/2.png" /></div>

# 载荷解码器

## 解码器代码

请前往 SenseCAP [S210X 解码器](https://github.com/Seeed-Solution/SenseCAP-Decoder/tree/main/S210X)

## 数据解析示例

温度传感器测量数据包：
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/3.png" /></div>

从离线状态恢复时发送的数据包：
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/4.png" /></div>

S2107 的电池信息：
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/5.png" /></div>

# SenseCAP 技术支持

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://discord.gg/sensecap" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>