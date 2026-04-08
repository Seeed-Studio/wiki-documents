---
description: 本指南解释如何在 MeshCore 节点地图上显示 MeshCore 设备的位置。
title: MeshCore 节点地图
keywords:
  - MeshCore
  - MeshMap
  - MeshCore Node Map
  - SenseCAP Solar Node
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MAPPP.jpg
slug: /meshcore_node_map_solar_node
sku: 114993643,114993633
sidebar_position: 2
last_update:
  date: 3/19/2026
  author: Michelle Huang
createdAt: 2026-04-3
updatedAt: '2026-04-03'
url: https://wiki.seeedstudio.com/cn/meshcore_node_map_solar_node/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 为什么要使用 MeshCore 节点地图

节点地图可以通过绘制节点位置，为 [MeshCore](https://meshcore.io/#hardware) 网络提供实时可视化，帮助用户了解网络拓扑结构和节点分布。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreMAPFirst.png" style={{width:900, height:'auto'}}/></div>

MeshCore 节点地图依赖节点定期向网络上报其地理位置。它尤其适用于：

- **发现附近的中继器**：识别可用的中继器以扩展连接范围
- **监控自己的网络**：跟踪节点状态和位置
- **调试与优化**：优化中继器和网关的放置位置

## MeshCore 官方地图教程

最常用的 MeshCore 节点地图是官方的 `MeshCore Node Map`。 [点击这里](https://map.meshcore.io/) 进入网站。

### 伴侣节点配置

要让伴侣节点出现在 MeshCore 节点地图上，设备必须正确配置以上报其位置。请按以下步骤配置：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreMap.png" style={{width:1000, height:'auto'}}/></div>

### 中继器或房间服务器配置

要让中继器或房间服务器出现在 MeshCore 节点地图上，设备必须正确配置以上报其位置。

首先登录到中继器。中继器的默认管理员密码是 `password`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/AAdmin.png" alt="pir" width={900} height="auto" /></p>

启用 GPS 并获取位置信息（某些中继器固件不支持更新实时位置，此时你可能需要手动选择你的位置）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreGPSSnciny.png" alt="pir" width={900} height="auto" /></p>

### 搜索你的节点

完成配置后，等待几分钟，然后你就可以在地图上看到你的节点。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MAPPP.jpg" style={{width:1000, height:'auto'}}/></div>

你可以看到设备名称、角色和配置信息。通过使用这张地图，你可以轻松找出这些在线节点所在的位置。

## （进阶）构建你自己的节点地图前端

对于高级用户，可以构建自定义的节点地图前端。推荐使用以下工作流程：

[普通 MeshCore 节点] → [设置了 MQTT 的 Mesh 节点] → [后端 API / 数据库] → [前端地图界面]
