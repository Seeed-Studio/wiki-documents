---
description: 本指南解释如何使用 Meshtastic Node Map 显示 Meshtastic 设备在地图上的位置。
title: Meshtastic 节点地图
keywords:
  - Meshtastic
  - MeshMap
  - Meshtastic Node Map
  - Wio Tracker L1
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshMap/MeshMap.png
slug: /meshtastic_node_map_l1
sku: 114993648,114993649,114993653,114993654
sidebar_position: 1
last_update:
  date: 3/19/2026
  author: Michelle Huang
createdAt: '2026-03-19'
updatedAt: '2026-04-07'
url: https://wiki.seeedstudio.com/cn/meshtastic_node_map_l1/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

本指南将介绍如何在 Meshtastic Node Map 上显示 [Meshtastic](https://meshtastic.org/docs/introduction/) 设备的位置，使用 [Wio Tracker L1 Pro](https://www.seeedstudio.com/Wio-Tracker-L1-Pro-p-6454.html) 和 [T1000-E](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html) 设备，并假设这些设备已经刷入 Meshtastic 固件。

## Meshtastic 网络监视器简介

Meshtastic Node Map 是一个在线界面，可以在地图上可视化 Meshtastic 设备的位置。它帮助用户监控网状网络中设备的实时位置，从而了解网络覆盖范围和连接状况。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshMap/MeshMap.png" style={{width:900, height:'auto'}}/></div>

Meshtastic 设备会通过 MQTT 定期向 Meshtastic 服务器上报自己的位置。Node Map 会获取这些上报，并显示每个节点的位置、路径和信号范围。设备可以通过以下方式上报位置：

- **直接通过 MapReport：** 设备将位置信息直接发送到服务器。
- **通过其他节点间接上报：** 位置通过邻近节点进行中继转发。

**适用场景**

Meshtastic Node Map 非常适合：

- 徒步、骑行或探险等户外活动。
- 对分布式 IoT 设备进行远程监控。
- 在不依赖蜂窝网络的情况下跟踪资产或团队成员。

### 常见的 Meshtastic Node Map

| Node Map | 特性 | 适用人群 | 备注 |
|----------|----------|-----------|-------|
| [MeshMap](https://meshmap.net/) | 实时节点跟踪、Mesh 路由显示、信号范围显示 | 普通用户、初学者 | 界面简单，默认 Meshtastic 服务器 |
| [Liam Cottle 的 Meshtastic 地图](https://meshtastic.liamcottle.net/) | 实时跟踪、历史路径查看、信号范围显示 | 高级用户、数据分析 | 使用自定义 MQTT 服务器 |

## 开始使用 MeshMap

### 配置

**LoRa 设置**
   - 将设备配置为与你所在地区相匹配的 LoRa 频段。
   - 启用 **OK to MQTT** 以允许上报。

**MQTT 设置**
   - 在设备上启用 MQTT。
   - 使用默认的 Meshtastic 服务器、用户名和密码。
   - 启用 **MapReport** 并勾选 **I agree**。根据需要选择上报间隔。

### 查看设备位置

在浏览器中打开 **MeshMap**： [MeshMap Link](https://meshmap.net/)。 

你会在地图上看到所有节点。通过 **MapReport** 上报的节点是来自设备的直接更新。通过 **其他节点** 上报的节点则是中继转发的更新。

单击任意节点即可查看详细信息（设备 ID、电池电量等）、Mesh 路由和信号覆盖范围。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshMap/MeshMapPositionDisplay.png" style={{width:900, height:'auto'}}/></div>

## 开始使用 Liam Cottle 的 Meshtastic 地图

### 配置

**LoRa 设置**
   - 将设备配置为正确的 LoRa 频段。
   - 启用 **OK to MQTT**。

**MQTT 设置**
   - 启用 MQTT
   - 配置以下参数：
     - Address: `mqtt.meshtastic.liamcottle.net`
     - Username: `uplink`
     - Password: `uplink`
     - Encryption Enabled: Yes
     - JSON Output: No
     - TLS Enabled: No
   - 启用 `MapReport` 并勾选 `I agree`。选择你偏好的上报间隔。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshMap/LiamMQTT.png" style={{width:600, height:'auto'}}/></div>

### 查看设备位置

在浏览器中打开 **Liam Cottle 的 Meshtastic 地图**： [Liam Cottle's Map Link](https://meshtastic.liamcottle.net/)。你将在地图上看到所有节点。

单击任意节点即可查看：设备的详细信息、信号范围、历史路径以及之前的位置更新。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshMap/LiamPosition.png" style={{width:600, height:'auto'}}/></div>
