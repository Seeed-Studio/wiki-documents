---
description: SenseCAP Combo 5 合 1 传感器（带 4G）简介
title: 简介
keywords:
  - SenseCAP Combo
  - 数据记录仪
image: https://files.seeedstudio.com/wiki/SenseCAP/Combo/SenseCAP_Combo_5in1_4G.webp
slug: /sensecap_combo_introduction
sku: 100035616
last_update:
  date: 8/23/2026
  author: Janet
createdAt: '2026-08-23'
updatedAt: '2026-08-23'
url: https://wiki.seeedstudio.com/cn/sensecap_combo_introduction/
---

# SenseCAP Combo 5 合 1 传感器（带 4G）简介

## 概述

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/combo-intro.png" alt="SenseCAP Combo 5-in-1 Sensor with 4G" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Combo-5-in-1-Sensor-with-4G-p-6906.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 </font></span></strong>
    </a>
</div>

<br />

[**SenseCAP Combo 5-in-1 Sensor with 4G**](https://www.seeedstudio.com/SenseCAP-Combo-5-in-1-Sensor-with-4G-p-6906.html) 是一款易于使用、稳定且低功耗的多参数环境监测设备。它可测量空气温度、湿度、大气压、光照强度和 CO₂。 

此外，它还可以通过一个 [Splitter](https://www.seeedstudio.com/RS485-p-4880.html) 连接多达 10 个外部 Modbus-RTU RS485 传感器，对市面上大多数传感器具有很高的兼容性。 

在数据传输方面，设备采用 4G Cat.1 连接和 MQTT 协议，将数据上传到用户服务器。它配备太阳能板和 5200mAh 可充电锂离子电池，即使在停电或阴雨天气下也能确保超过 2 周的连续运行。同时也支持直流电源供电。 

为防止数据丢失，当信号较弱或中断时，设备可在本地缓存多达 500,000 条数据记录。一旦通信恢复，数据将自动上传。用户也可以通过本地连接直接导出历史数据。 

该设备采用即插即用设计，支持吊装和抱杆安装，即使是初学者也能轻松部署。外壳采用防水和抗紫外线材料制造，符合严格的耐久性标准，非常适合温室等恶劣环境。 

## 特性

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/combo.jpg" alt="Software Platform" width={800} height="auto" /></p>

- **多传感器一体化：** 设备内置空气温度、湿度、大气压、光照强度和 CO₂ 等传感器（可选项因定制而异）。

- **高扩展性：** 提供 RS485 接口，可通过 [Splitter](https://www.seeedstudio.com/RS485-p-4880.html) 连接多达 10 个外部传感器。支持标准 Modbus-RTU RS485 传感器，并提供 5V 和 12V 电源输出以为外部设备供电。

- **可靠的数据缓存：** 当 4G 信号较弱或不可用时，记录仪可在本地存储多达 500,000 条数据记录。连接恢复后数据自动上传，历史文件可导出为 Excel。

- **灵活的供电方式：** 设备主要由集成太阳能板和内置电池供电，同时也支持外部直流电源供电。

- **低功耗：** 内置 5200mAh 电池，即使在无太阳能充电或停电情况下，设备也可连续运行超过两周。

- **易于维护：** 支持 OTA（空中升级）远程固件更新，减少现场维护需求。

- **温室运行：** 专为温室和室内农业环境设计，可在 0°C 至 40°C 范围内可靠运行。

- **防风雨设计：** 具备 IPX5 防护等级和抗紫外线材料，可防雨水和老化，适用于多种环境。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/appearance.png" alt="Software Platform" width={800} height="auto" /></p>

## 系统架构

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/System Architecture.png" alt="SenseCAP Combo 5-in-1 Sensor with 4G" width={800} height="auto" /></p>

SenseCAP Combo 5-in-1 Sensor with 4G 通过 4G Cat.1 网络将数据上传至 SenseCAP Cloud Platform。用户可以通过 [SenseCAP Portal](https://sensecap.seeed.cc/portal/#/login) 或 SenseCraft APP 查看实时数据、管理设备并获取历史数据。平台还提供 HTTP API、MQTT API 和 WebSocket API，便于进一步开发与集成。

## 一体化软件平台管理

与 [SenseCAP Cloud Platform](https://sensecap.seeed.cc/portal/#/login) 和 SenseCraft APP 无缝集成，从二维码设备绑定、实时数据监测到远程参数配置、数据缓存以及面向第三方集成的 API 访问，提供端到端解决方案。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/system.png" alt="Software Platform" width={800} height="auto" /></p>

## 安装方式

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/Installation Methods.png" alt="Software Platform" width={800} height="auto" /></p>

SenseCAP Combo 支持两种安装方式，以适应不同的部署场景。

### 吊装安装

设备可通过顶部安装孔穿线悬挂。此方式适用于温室等具备上方结构的室内环境。

### 抱杆安装

设备可通过支架（包装中不包含）安装在立杆上。此方式非常适合户外开阔场景的部署。

## 应用场景

SenseCAP Combo 5-in-1 Sensor with 4G 是多参数环境监测的理想解决方案，适用于多种场景。广泛应用于：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/Applications.png" alt="Software Platform" width={800} height="auto" /></p>

- **智慧温室**：实时监测温度、湿度、CO₂、光照强度和大气压，以优化作物生长条件；通过 RS485 连接外部土壤传感器，实现全面的环境数据采集。
- **智慧农业**：用于大田种植、果园和葡萄园等户外环境监测；跟踪小气候变化，为精准农业决策提供支持。
- **环境监测**：用于科研站点、工业场所和城市环境的空气质量及气象参数监测；在蜂窝网络覆盖较弱区域，通过可靠的数据缓存实现长期数据记录。

## 规格参数

### 通用参数

| 参数 | 规格 |
|-----------|---------------|
| 供电类型 | Type-C 接口，5V / 2A 输入 |
| 扩展接口 | 1x RS485（Modbus-RTU） |
| 可连接传感器数量 | 通过 Splitter 支持最多 10 个外部传感器 |
| 外部传感器电源输出 | 12V / 0.35A，5V / 0.35A |
| 协议 | MQTT 协议；支持通过 Sensor Hub Configuration Tool NG 配置用户服务器 |
| 4G Cat.1 | 全球频段 / APN 可配置；Micro SIM 卡 / 3FF<br />LTE-FDD: B1/B2/B3/B4/B5/B7/B8/B12/B13/B14/B17/B18/B19/B20/B25/B26/B28<br />LTE-TDD: B34/B38/B39/B40/B41/B66/B71 |
| 数据缓存 | 本地最多缓存 500,000 条记录 / 支持本地导出 |
| 天线 | 内置天线 |
| 开关 / LED 指示灯 | 1x 电源开关，2x LED 指示灯 |
| 防护等级 | IPX5，PCBA 防水处理 |
| 抗紫外线等级 | F1 |
| 外壳材料 | PC/ASA |
| 工作温度 | 0°C ~ 40°C <br />**注意：** 设备的工作温度受所配电源适配器限制，电源适配器支持的工作温度范围为 0°C 至 40°C。<br />电源适配器仅适用于室内使用，请勿将电源适配器直接暴露在室外环境中。电源适配器必须安装在防水机箱或电气柜内以确保适当防护。|
| 充电温度 | 0°C ~ 40°C |
| 工作湿度 | 0 ~ 100 % RH（无冷凝） |
| 电池 | 5200mAh，3.7V 可充电锂离子电池 |
| 太阳能板 | 最大功率 1W |
| 安装方式 | 吊装或抱杆安装（吊装需自备钢丝；抱杆安装需自备支架，包装中不包含） |
| 尺寸 | 202 * 202 * 175 mm |
| 净重 | 0.8 kg |

### 传感器参数

| 参数 | 量程 | 精度 | 分辨率 |
|-----------|-------|----------|------------|
| 空气温度 | -40°C ~ +85°C | ±0.2°C | 0.01°C |
| 空气湿度 | 0 ~ 100% RH（无冷凝） | ±2% RH | 0.01% RH |
| 露点（由温湿度算法计算） | -100°C ~ 80°C | ±2°C | 0.01°C |
| 气压 | 300 ~ 1200 hPa | 1 hPa | 10 Pa |
| 光照强度 | 0 ~ 200,000 Lux | ±5% | 5 Lux |
| CO₂ | 0 - 10,000 ppm | ±50 ppm ±3% \* 读数（0 - 5,000 ppm）；<br /> ±5%（5,000 - 10,000 ppm） | 1 ppm |

:::note
对于需要更多环境参数的项目，我们也提供扩展传感器选项的定制配置服务。如需定制，请联系 techsupport@seeed.io。
:::

## 硬件概览

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/appearance-2.png" alt="Software Platform" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/appearance-3.png" alt="Software Platform" width={800} height="auto" /></p>

## 清单

|  名称 | 数量 |
|------|----------|
| SenseCAP Combo 5-in-1 Sensor with 4G | 1 |
| USB Type-C 线缆 | 1 |
| 电源适配器 | 1 |

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
