---
sidebar_position: 3
title: AI 顾问
description: 了解如何在 SenseCraft 数据平台和应用程序上部署 AI 顾问，进行高级传感器数据分析。通过 AI 驱动的解决方案自动化监控、优化操作并获得可操作的洞察。
keywords:
  - SenseCraft
  - AI Advisor
  - Smart Sensors
  - Sensor Data Analysis
  - Environmental Monitoring
  - Precision Agriculture
  - Smart Farming
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/sensecraft-data-platform/applications/ai-advisor
aliases:
  - /cn/how_to_use_sensecap_data_platform_ai_advisor_on_the_web_and_sensecraft_app
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
---

# 如何在网页端和 SenseCraft 应用程序中使用 AI 顾问

## 概述

**SenseCraft AI 顾问**是一个 AI 驱动的功能，帮助您充分利用传感器数据并获得可操作的洞察。通过将您的 SenseCraft 传感器连接到 SenseCraft 平台，您可以轻松收集和分析温度、湿度、光照和空气质量等环境因素的数据。我们的 AI 顾问利用这些数据提供建议和推荐，帮助您优化操作、降低成本并提高效率。

无论您是想监控空气质量、优化作物生长还是改善农场管理，SenseCraft AI 顾问都旨在协助您的决策制定。AI 顾问可在 [SenseCraft 数据平台](https://sensecap.seeed.cc/portal/#/login) 和 [SenseCAP Mate 应用程序](http://sensecap-mate-download.seeed.cc/) 上使用，让用户能够随时随地访问洞察。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/1.png"/></div>

## 测量参数

SenseCraft AI 顾问目前分析以下测量参数和设备类型。用户可以选择包含以下测量参数的设备。

| 测量项目             | 设备类型                                        |
|-------------------------|-----------------------------------------------------|
| 空气温度         | [SenseCAP S2103 LoRaWAN® CO2、温度和湿度传感器](https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html) |
|                         | [SenseCAP S2101 LoRaWAN® 空气温度和湿度传感器](https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html) |
|                         | [S-H2S-01 工业级 MODBUS RS485 H2S 传感器（H2S、温度和湿度）](https://www.seeedstudio.com/RS485-H2S-Sensor-Connector-p-5114.html) |
|                         | [S-NH3-01 工业级 MODBUS RS485 NH3 传感器（NH3、温度和湿度）](https://www.seeedstudio.com/RS485-NH3-Sensor-Connector-p-5113.html) |
|                         | [SenseCAP S500 紧凑型气象站](https://www.seeedstudio.com/SenseCAP-S500-5-in-1-Compact-Weather-Station-p-5652.html) |
|                         | SenseCAP S300 紧凑型气象站 |
|                         | SenseCAP S400 紧凑型气象站 |
|                         | [SenseCAP S700 紧凑型气象站](https://www.seeedstudio.com/SenseCAP-S700-7-in-1-Compact-Weather-Station-p-5651.html) |
|                         | [SenseCAP S900 紧凑型气象站](https://www.seeedstudio.com/SenseCAPONE-S900-9in1-Compact-Weather-Sensor-p-4881.html) |
|                         | [SenseCAP S2120 LoRaWAN 8合1紧凑型气象站](https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html) |
|                         | [SenseCAP S800 紧凑型气象站](https://www.seeedstudio.com/SenseCAP-S800-8-in-1-Compact-Weather-Station-p-5653.html) |
|                         | [SenseCAP S1000 紧凑型气象站 10合1](https://www.seeedstudio.com/SenseCAP-S1000-10-in-1-Compact-Weather-Station-p-5654.html) |
| 空气湿度            | 设备类型与空气温度相同          |
| 光照强度         | [SenseCAP S2102 LoRaWAN 光照强度传感器](https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html) |
|                         | SenseCAP S400 紧凑型气象站 |
|                         | [SenseCAP S700 紧凑型气象站](https://www.seeedstudio.com/SenseCAP-S700-7-in-1-Compact-Weather-Station-p-5651.html) |
|                         | [SenseCAP S900 紧凑型气象站](https://www.seeedstudio.com/SenseCAPONE-S900-9in1-Compact-Weather-Sensor-p-4881.html) |
|                         | [SenseCAP S2120 LoRaWAN 8合1紧凑型气象站](https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html) |
|                         | [SenseCAP S1000 紧凑型气象站 10合1](https://www.seeedstudio.com/SenseCAP-S1000-10-in-1-Compact-Weather-Station-p-5654.html) |
| CO2                     | [SenseCAP S2103 LoRaWAN® CO2、温度和湿度传感器](https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html) |
|                         | [SenseCAP S1000 紧凑型气象站 10合1](https://www.seeedstudio.com/SenseCAP-S1000-10-in-1-Compact-Weather-Station-p-5654.html) |
| 土壤温度        | [SenseCAP 无线土壤温度、VWC 和 EC 传感器](https://www.seeedstudio.com/SenseCAP-Wireless-Soil-Temperature-VWC-EC-Sensor-LoRaWAN-AS923-MT20-p-4996.html) |
|                         | [SenseCAP S2105 LoRaWAN® 土壤湿度、温度和 EC 传感器](https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html) |
| 土壤湿度           | 设备类型与土壤温度相同          |
| 电导率 | [SenseCAP 无线土壤温度、VWC 和 EC 传感器](https://www.seeedstudio.com/SenseCAP-Wireless-Soil-Temperature-VWC-EC-Sensor-LoRaWAN-AS923-MT20-p-4996.html) |
|                         | [SenseCAP S2105 LoRaWAN® 土壤湿度、温度和 EC 传感器](https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html) |
| NH3                     | [S-NH3-01 工业级 MODBUS RS485 NH3 传感器（NH3、温度和湿度）](https://www.seeedstudio.com/RS485-NH3-Sensor-Connector-p-5113.html) |
| H2S                     | [S-H2S-01 工业级 MODBUS RS485 H2S 传感器（H2S、温度和湿度）](https://www.seeedstudio.com/RS485-H2S-Sensor-Connector-p-5114.html) |
| 光合有效辐射 (PAR) | [工业级 PAR 传感器 S-PAR](https://www.seeedstudio.com/RS485-S-PAR-02B-p-4830.html) |

## SenseCAP Mate APP

1. 下载并登录 [SenseCAP Mate APP](https://app.sensecapmx.com/)
2. 访问设备页面，点击 **+** 图标，通过扫描设备二维码绑定您的 SenseCraft 传感器
3. 确保您的传感器向 SenseCraft 平台发送数据；AI 顾问需要传感器的数据
4. 在设备页面，点击 **AI Advisor** 开始 AI 驱动的传感器数据分析

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/2.png"/></div>

5. 输入您正在种植的作物或饲养的动物以及您的位置
6. 选择传感器数据时间：
   - 月：最近一个月的传感器数据
   - 6 个月：最近 6 个月的传感器数据
   - 年：最近一年的传感器数据

7. 选择测量值（最多 5 个）：点击 **+** 图标
   - 选择设备，然后选择测量值

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/3.png"/></div>

8. 将信息提交给 `AI Advisor`，它将回复建议

> **注意：** AI 建议仅供参考。请谨慎使用，因为 SenseCraft 不对基于 AI Advisor 建议做出的任何决定承担责任。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/4.png"/></div>

## SenseCraft Data Platform

1. 登录 [SenseCraft Data Platform (Global)](https://sensecap.seeed.cc/portal/#/login) 或 [SenseCraft Data Platform (China)](http://sensecap.seeed.cn/portal/#/login)
2. 通过输入传感器的 SN 和代码绑定您的 SenseCraft 传感器

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/5.png"/></div>

3. 确保您的传感器向 `SenseCraft Data Platform` 发送数据；`AI Advisor` 功能需要传感器的数据
4. 访问 `AI Advisor` 启动 AI 驱动的传感器数据分析
5. 输入您正在种植的作物或饲养的动物以及您的位置
6. 选择传感器数据时间：
   - 月：最近一个月的传感器数据
   - 6 个月：最近 6 个月的传感器数据
   - 年：最近一年的传感器数据

7. 选择测量值（最多 5 个）：点击 **+** 图标
   - 选择设备，然后选择测量值

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/6.png"/></div>

8. 将信息提交给 `AI Advisor`，它将回复建议

> **注意：** AI 建议仅供参考。请谨慎使用，因为 SenseCraft 不对基于 AI Advisor 建议做出的任何决定承担责任。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/7.png"/></div>
