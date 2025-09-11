---
description: SenseCAP Sensor Hub Data Logger
title: SenseCAP Sensor Hub Data Logger
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Sensor/SenseCAP/SenseCAP_Data_Logger/SenseCAP-Sensor-Hub-Data-Logger
last_update:
  date: 4/11/2023
  author: Yvonne
---

# SenseCAP Sensor Hub Data Logger

## 产品介绍

SenseCAP Sensor Hub 是一个用于远程环境监测的紧凑型解决方案。它由一个强大的数据记录器组成，最多可连接 40 个 RS-485 传感器，并提供广泛的传感器选择，您可以将其用于气象站、空气质量监测等应用。凭借 IP66 防护等级和太阳能供电，您可以依靠它提供可靠且非易失性的数据收集服务。SenseCAP Sensor Hub Data Logger 有两个版本：2G 和 4G，均可提供。

![HUB](https://files.seeedstudio.com/products/102991154/wiki%20images/Sensor-Hub-2-1030x736.png)
<p style={{textAlign: 'center' }}><a href="https://www.seeedstudio.com/SenseCAP-Sensor-Hub-4G-Data-Logger-with-builtin-battery-p-4852.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>

[SesneCAP 移动应用](https://solution.seeedstudio.com/product/software-cloud-sensecap-app/)、[SenseCAP 网页门户](https://solution.seeedstudio.com/product/software-cloud-sensecap-portal/)、[SenseCAP API](https://sensecap-docs.seeed.cc/introduction.html) 和 [SenseCAP Dashboard](https://solution.seeedstudio.com/product/software-cloud-sensecap-dashboard/) 也可用于快速配置和设备 + 数据管理。

# 特性

- 适用于需要下行命令进行远程控制的应用
- 板载存储器可在网络中断时存储数据
- GSM900/1800MHz，LTE 版本即将推出
- 快速安装和部署，高可靠性和稳定性
- 最多可连接 40 个传感器和执行器
- 工业级防护：IP66 外壳，工作温度 -40℃~70℃，适用于户外应用和恶劣环境
- 应用程序、网页门户、开放 API 可用于快速配置和数据管理
- 易于维护，OTA 升级

# 规格

请参考此文档：https://files.seeedstudio.com/products/114992170/SenseCAP%20SensorHub%20Catalog-v3.1%2020210702.pdf

# 架构

![architecture](https://files.seeedstudio.com/products/102991154/wiki%20images/sensor%20hub%20architecture%20.png)

Sensor Hub Data logger 是一个易于部署的蜂窝基站，提供 2 种电源选项：带可充电电池的太阳能供电和电源适配器供电。

它由 4 个 RS485 数据通道和各种传感器组成。通过扩展集线器，一次最多可连接 40 个传感器。数据通过 2G 或 4G 收集并发送到云端。配备 10MB 板载存储器，在连接不良的情况下可在本地存储超过 700,000 次测量数据。工业级和 IP66 设计，适用于户外和恶劣环境，如紫外线、雨水、灰尘。嵌入 GNSS 用于位置跟踪。

与 SenseCAP LoRa 相比，此数据记录器适用于功耗更高的传感器，如氨气传感器。传感器数据将由 Sensor Hub 收集并通过 2G 或 4G 发送到 SenseCAP 服务器或指定服务器。

设计为易于部署，外壳适用于杆式和壁挂式安装。

# 应用

<div align="center"><img width="{800}" src="https://www.sensecapmx.com/wp-content/uploads/2023/02/Pasted-into-1-1.png"/></div>
