---
description: 本指南说明如何在 Meshtastic 节点地图上显示 Meshtastic 设备的位置。
title: Meshtastic 节点地图
keywords:
  - Meshtastic
  - MeshMap
  - Meshtastic Node Map
  - T1000-E
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshMap/MeshMap.png
slug: /meshtastic_node_map_t1000_e
sku: 114993369,114993649
sidebar_position: 2
last_update:
  date: 3/19/2026
  author: Michelle Huang
createdAt: '2026-03-19'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/cn/meshtastic_node_map_t1000_e/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


本指南说明如何使用 [Wio Tracker L1 Pro](https://www.seeedstudio.com/Wio-Tracker-L1-Pro-p-6454.html) 和 [T1000-E](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html) 设备，在 Meshtastic 节点地图上显示 [Meshtastic](https://meshtastic.org/docs/introduction/) 设备的位置，前提是这些设备已经刷入 Meshtastic 固件。

## Meshtastic 网络监控简介

Meshtastic 节点地图是一个在线界面，用于在地图上可视化 Meshtastic 设备的位置。它帮助用户监控网状网络中设备的实时位置，从而了解网络覆盖范围和连接情况。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshMap/MeshMap.png" style={{width:900, height:'auto'}}/></div>

Meshtastic 设备会通过 MQTT 定期向 Meshtastic 服务器上报其位置。节点地图会获取这些报告，并显示每个节点的位置、路径和信号范围。设备可以通过以下方式上报位置：

- **直接通过 MapReport：** 设备直接向服务器发送位置信息。
- **通过其他节点间接上报：** 位置通过邻近节点中继。

**适用场景**

Meshtastic 节点地图非常适合：

- 户外活动，如徒步、骑行或探险。
- 远程监控分布式 IoT 设备。
- 在不依赖蜂窝网络的情况下跟踪资产或团队成员。

### 常见 Meshtastic 节点地图

| 节点地图 | 功能 | 适用人群 | 备注 |
|----------|----------|-----------|-------|
| [MeshMap](https://meshmap.net/) | 实时节点跟踪、Mesh 路由显示、信号范围显示 | 普通用户、初学者 | 界面简单，默认 Meshtastic 服务器 |
| [Liam Cottle 的 Meshtastic 地图](https://meshtastic.liamcottle.net/) | 实时跟踪、历史路径查看、信号范围显示 | 高级用户、数据分析 | 使用自定义 MQTT 服务器 |

## 开始使用 MeshMap

### 配置

**LoRa 设置**
   - 将设备配置为适合你所在地区的 LoRa 频段。
   - 启用 **OK to MQTT** 以允许上报。

**MQTT 设置**
   - 在设备上启用 MQTT。
   - 使用默认的 Meshtastic 服务器、用户名和密码。
   - 启用 **MapReport** 并勾选 **I agree**。根据你的需求选择上报间隔。

### 查看设备位置

在浏览器中打开 **MeshMap**： [MeshMap Link](https://meshmap.net/)。 

你将在地图上看到所有节点。通过 **MapReport** 上报的节点是设备的直接更新。通过 **其他节点** 上报的节点是中继更新。

点击任意节点即可查看详细信息（设备 ID、电池电量等）、Mesh 路由和信号覆盖范围。

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

点击任意节点即可查看：设备的详细信息、信号范围、历史路径以及之前的位置更新。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshMap/LiamPosition.png" style={{width:600, height:'auto'}}/></div>
