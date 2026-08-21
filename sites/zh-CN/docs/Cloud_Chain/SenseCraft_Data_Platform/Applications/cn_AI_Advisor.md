---
sidebar_position: 3
title: AI 顾问
description: 了解如何在 SenseCraft 数据平台和 App 上部署 AI 顾问，实现高级传感器数据分析。通过 AI 驱动的解决方案自动化监测、优化运营，并挖掘可执行洞察。
keywords:
  - SenseCraft
  - AI Advisor
  - 智能传感器
  - 传感器数据分析
  - 环境监测
  - 精准农业
  - 智慧农业
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /sensecraft-data-platform/applications/ai-advisor
aliases:
  - /how_to_use_sensecap_data_platform_ai_advisor_on_the_web_and_sensecraft_app
tags:
  - SenseCraft
  - SenseCraft Data Platform
  - SenseCraft App
  - AI
  - Cloud
  - LLM
last_update:
  date: 06/06/2025
  author: Jancee
createdAt: '2023-06-19'
updatedAt: '2026-08-04'
url: https://wiki.seeedstudio.com/cn/sensecraft-data-platform/applications/ai-advisor/
---

# 如何在网页端和 SenseCraft APP 中使用 AI 顾问

## 概述

**SenseCraft AI Advisor** 是一项由 AI 驱动的功能，可帮助你充分利用传感器数据并挖掘可执行洞察。通过将 SenseCraft 传感器连接到 SenseCraft 平台，你可以轻松采集和分析温度、湿度、光照、空气质量等环境因素的数据。我们的 AI 顾问利用这些数据提供建议和推荐，帮助你优化运营、降低成本并提升效率。

无论你是希望监测空气质量、优化作物生长，还是改进农场管理，SenseCraft AI Advisor 都旨在辅助你的决策。AI 顾问可在 [SenseCraft Data Platform](https://sensecap.seeed.cc/portal/?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_data_portal#/login) 和 [SenseCAP Mate APP](http://sensecap-mate-download.seeed.cc/) 上使用，使用户能够随时随地获取洞察。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/1.png"/></div>

## 测量项

SenseCraft AI Advisor 目前会分析以下测量项和设备类型。用户可以选择包含以下测量项的设备。

| 测量项                  | 设备类型                                              |
|-------------------------|-----------------------------------------------------|
| 空气温度                | [SenseCAP S2103 LoRaWAN® CO2, Temperature, and Humidity Sensor](https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html) |
|                         | [SenseCAP S2101 LoRaWAN® Air Temperature and Humidity Sensor](https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html) |
|                         | [S-H2S-01 Industrial-grade MODBUS RS485 H2S Sensor (H2S, Temperature & Humidity)](https://www.seeedstudio.com/RS485-H2S-Sensor-Connector-p-5114.html) |
|                         | [S-NH3-01 Industrial-grade MODBUS RS485 NH3 Sensor (NH3, Temperature & Humidity)](https://www.seeedstudio.com/RS485-NH3-Sensor-Connector-p-5113.html) |
|                         | [SenseCAP S500 Compact Weather Station](https://www.seeedstudio.com/SenseCAP-S500-5-in-1-Compact-Weather-Station-p-5652.html) |
|                         | SenseCAP S300 Compact Weather Station |
|                         | SenseCAP S400 Compact Weather Station |
|                         | [SenseCAP S700 Compact Weather Station](https://www.seeedstudio.com/SenseCAP-S700-7-in-1-Compact-Weather-Station-p-5651.html) |
|                         | [SenseCAP S900 Compact Weather Station](https://www.seeedstudio.com/SenseCAPONE-S900-9in1-Compact-Weather-Sensor-p-4881.html) |
|                         | [SenseCAP S2120 LoRaWAN 8-in-1 Compact Weather Station](https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html) |
|                         | [SenseCAP S800 Compact Weather Station](https://www.seeedstudio.com/SenseCAP-S800-8-in-1-Compact-Weather-Station-p-5653.html) |
|                         | [SenseCAP S1000 Compact Weather Station 10 in 1](https://www.seeedstudio.com/SenseCAP-S1000-10-in-1-Compact-Weather-Station-p-5654.html) |
| 空气湿度                | 设备类型与空气温度相同                               |
| 光照强度                | [SenseCAP S2102 LoRaWAN Light Intensity Sensor](https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html) |
|                         | SenseCAP S400 Compact Weather Station |
|                         | [SenseCAP S700 Compact Weather Station](https://www.seeedstudio.com/SenseCAP-S700-7-in-1-Compact-Weather-Station-p-5651.html) |
|                         | [SenseCAP S900 Compact Weather Station](https://www.seeedstudio.com/SenseCAPONE-S900-9in1-Compact-Weather-Sensor-p-4881.html) |
|                         | [SenseCAP S2120 LoRaWAN 8-in-1 Compact Weather Station](https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html) |
|                         | [SenseCAP S1000 Compact Weather Station 10 in 1](https://www.seeedstudio.com/SenseCAP-S1000-10-in-1-Compact-Weather-Station-p-5654.html) |
| CO2                     | [SenseCAP S2103 LoRaWAN® CO2, Temperature, and Humidity Sensor](https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html) |
|                         | [SenseCAP S1000 Compact Weather Station 10 in 1](https://www.seeedstudio.com/SenseCAP-S1000-10-in-1-Compact-Weather-Station-p-5654.html) |
| 土壤温度                | [SenseCAP Wireless Soil Temperature, VWC & EC Sensor](https://www.seeedstudio.com/SenseCAP-Wireless-Soil-Temperature-VWC-EC-Sensor-LoRaWAN-AS923-MT20-p-4996.html) |
|                         | [SenseCAP S2105 LoRaWAN® Soil Moisture, Temperature and EC Sensor](https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html) |
| 土壤湿度                | 设备类型与土壤温度相同                               |
| 电导率                  | [SenseCAP Wireless Soil Temperature, VWC & EC Sensor](https://www.seeedstudio.com/SenseCAP-Wireless-Soil-Temperature-VWC-EC-Sensor-LoRaWAN-AS923-MT20-p-4996.html) |
|                         | [SenseCAP S2105 LoRaWAN® Soil Moisture, Temperature and EC Sensor](https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html) |
| NH3                     | [S-NH3-01 Industrial-grade MODBUS RS485 NH3 Sensor (NH3, Temperature & Humidity)](https://www.seeedstudio.com/RS485-NH3-Sensor-Connector-p-5113.html) |
| H2S                     | [S-H2S-01 Industrial-grade MODBUS RS485 H2S Sensor (H2S, Temperature & Humidity)](https://www.seeedstudio.com/RS485-H2S-Sensor-Connector-p-5114.html) |
| 光合有效辐射 (PAR)      | [Industrial PAR Sensor S-PAR](https://www.seeedstudio.com/RS485-S-PAR-02B-p-4830.html) |

## SenseCAP Mate APP

1. 下载并登录 [SenseCAP Mate APP](https://app.sensecapmx.com/)
2. 进入设备页面，点击 **+** 图标，通过扫描设备二维码绑定你的 SenseCraft 传感器
3. 确保你的传感器向 SenseCraft 平台发送数据；AI 顾问需要使用传感器数据
4. 在设备页面点击 **AI Advisor**，开始由 AI 驱动的传感器数据分析

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/2.png"/></div>

5. 输入你正在种植的作物或饲养的动物，以及你的所在地
6. 选择传感器数据时间范围：
   - Month：最近一个月的传感器数据
   - 6 Months：最近 6 个月的传感器数据
   - Year：最近一年的传感器数据

7. 选择测量项（最多 5 项）：点击 **+** 图标
   - 先选择设备，然后选择测量项

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/3.png"/></div>

8. 将信息提交给 `AI Advisor`，它会返回相应的建议

> **注意：** AI 建议仅供参考。请谨慎使用，SenseCraft 不对基于 AI 顾问建议所做的任何决策承担责任。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/4.png"/></div>

## SenseCraft 数据平台

1. 登录 [SenseCraft Data Platform (Global)](https://sensecap.seeed.cc/portal/?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_data_portal#/login) 或 [SenseCraft Data Platform (China)](http://sensecap.seeed.cn/portal/#/login)
2. 通过输入传感器的 SN 和验证码绑定你的 SenseCraft 传感器

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/5.png"/></div>

3. 确保你的传感器向 `SenseCraft Data Platform` 发送数据；`AI Advisor` 功能需要使用传感器数据
4. 访问 `AI Advisor`，启动由 AI 驱动的传感器数据分析
5. 输入你正在种植的作物或饲养的动物，以及你的所在地
6. 选择传感器数据时间范围：
   - Month：最近一个月的传感器数据
   - 6 Months：最近 6 个月的传感器数据
   - Year：最近一年的传感器数据

7. 选择测量项（最多 5 项）：点击 **+** 图标
   - 先选择设备，然后选择测量项

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/6.png"/></div>

8. 将信息提交给 `AI Advisor`，它会返回相应的建议

> **注意：** AI 建议仅供参考。请谨慎使用，SenseCraft 不对基于 AI 顾问建议所做的任何决策承担责任。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/7.png"/></div>
