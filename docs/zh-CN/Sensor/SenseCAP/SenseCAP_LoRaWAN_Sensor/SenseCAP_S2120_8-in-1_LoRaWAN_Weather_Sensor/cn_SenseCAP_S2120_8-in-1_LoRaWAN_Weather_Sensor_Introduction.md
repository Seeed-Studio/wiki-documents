---
description: SenseCAP S2120 8合1 LoRaWAN 气象传感器介绍
title: SenseCAP S2120 8合1 LoRaWAN 气象传感器介绍
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S2120_8-in-1_LoRaWAN_Weather_Sensor/SenseCAP_S2120_8-in-1_LoRaWAN_Weather_Sensor_Introduction
last_update:
  date: 12/25/2025
  author: Janet
---

# SenseCAP S2120 8合1 LoRaWAN 气象传感器

[![](https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Introduction.files/Introduction146.png)](https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html)

SenseCAP S2120 电池供电的8合1 LoRaWAN 气象传感器可测量空气温度、湿度、风速、风向、降雨量、光照强度、紫外线指数和大气压力。它具有超低功耗、可靠性能、内置蓝牙和应用程序服务，支持OTA配置和远程设备管理，从而实现低维护成本。它支持多种应用场景，如后院、花园、智慧农业、气象学、智慧城市等。
SenseCAP S21XX 兼容 LoRaWAN® V1.0.3 协议，可与 [LoRaWAN® 网关](https://www.seeedstudio.com/LoRaWAN-Gateway-c-1936.html)配合使用。

![](https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Introduction.files/Introduction914.png)

LoRaWAN® 网关可以提供使用此类传感器所需的 LoRaWAN® 网络覆盖。S210X 可以连接到不同的 LoRaWAN® 网关，而 Seeed 提供的产品为您提供无缝的用户体验。

Helium 网络：传感器在 Helium 网络覆盖的区域内工作（在 [Helium Explorer](https://explorer.helium.com/) 上查看）。您可以查看 [SenseCAP M1](https://www.seeedstudio.com/SenseCAP-M1-LoRaWAN-Indoor-Gateway-US915-p-5023.html) 和 [SenseCAP M2](https://www.seeedstudio.com/SenseCAP-M2-Data-Only-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5342.html)。

LoRaWAN 网络：传感器在 LoRaWAN® 网络中工作，如 The Things Network、Loriot、Chirpstack 等。您可以查看 [SenseCAP 户外网关](https://www.seeedstudio.com/LoRaWAN-Gateway-US915-p-4306.html) 和 [SenseCAP M2 多平台网关](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html)。

:::tip **注意**
最新的固件版本为 `v2.1`，我们强烈建议您在 SenseCraft 应用中将设备升级到最新固件，因为该版本可显著提升数据上报的稳定性。
:::

# 应用

- 后院和花园：测量后院和花园的空气温度和湿度、降雨量、紫外线指数等，保护您的家人。

- 智慧农业：使农民能够及时获得气候数据和信息，在生产中采取科学管理措施，提高农业生产能力和水平。

- 气象学：支持专业气象领域的应用，例如，及时反映交通运输领域各种异常气象条件的变化，为交通管理部门提供实时科学依据数据。

- 城市天气：为城市广场、公园、景点、高尔夫球场和其他城市区域提供实时数据。

# ![](https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Introduction.files/Introduction3232.png)

# **现场部署**

![](https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Introduction.files/Introduction3252.png)

图片来源：Ted Urbaniak, Mapping Network, Nibiaa

# 规格

![](https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Introduction.files/Introduction3325.png)

# LoRaWAN 频率

*注意：无频率限制。气象站可以随时切换到其他频率计划。*

*S2120 制造时支持从 863MHz 到 928MHz 的通用频率计划，在一个 SKU 中实现。也就是说，它可以支持以下频率计划：*

|频率计划|通用名称|子频段|
| :- | :- | :- |
|EU863-870|EU868|___|
|US902-928|US915|子频段从 1 到 8|
|AU915-928|AU915|子频段从 1 到 8|
|AS923|AS923|AS923_1, AS923_2, AS923_3, AS923_4|
|IN865-867|IN865|___|
|KR920-923|KR920|___|
|RU864-867|RU864|___|

频率计划设置默认为无，在首次上电时通过应用程序通过蓝牙设置之前，它不会传输射频信号。并且可以随时更改为其他频率计划。

# 零件清单

![](https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Introduction.files/Introduction3841.png)

ECCN/HTS

|HSCODE|9031809090|
| :- | :- |
|USHSCODE|9026104000|
|UPC||
|EUHSCODE|8517180000|
|COO|CHINA|

|CE|1|
| :- | :- |
|EU DoC|1|
|FCC|1|
|ROHS|1|
|UK DoC|1|
