---
description: 本指南说明如何在 MeshCore 节点地图上显示 MeshCore 设备的位置。
title: MeshCore 节点地图
keywords:
  - MeshCore
  - MeshMap
  - MeshCore Node Map
  - SenseCAP T1000-E
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MAPPP.jpg
slug: /meshcore_node_map_t1000e
sku: 114993369,114993649
sidebar_position: 2
last_update:
  date: 3/19/2026
  author: Michelle Huang
createdAt: 2026-04-3
updatedAt: '2026-04-07'
url: https://wiki.seeedstudio.com/cn/meshcore_node_map_t1000e/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 为什么要使用 MeshCore 节点地图

节点地图可以通过绘制节点位置，为 [MeshCore](https://meshcore.io/#hardware) 网络提供实时可视化，使用户了解网络拓扑和节点分布。 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreMAPFirst.png" style={{width:900, height:'auto'}}/></div>

MeshCore 节点地图依赖节点定期向网络上报其地理位置。它特别适用于：

- **发现附近的中继器**：识别可用的中继器以扩展连接范围
- **监控自己的网络**：跟踪节点状态和位置
- **调试与优化**：优化中继器和网关的放置位置


## MeshCore 官方地图教程

最常用的 MeshCore 节点地图是官方的 `MeshCore Node Map`。 [点击这里](https://map.meshcore.io/) 进入网站。

### Companion 配置

要让一个 companion 节点出现在 MeshCore 节点地图上，设备必须正确配置以上报其位置。按如下步骤配置：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreMap.png" style={{width:1000, height:'auto'}}/></div>

### 中继器或 Room Server 配置

要让中继器或 room server 出现在 MeshCore 节点地图上，设备必须正确配置以上报其位置。 

首先登录中继器。中继器的默认管理员密码是 `password`。 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/AAdmin.png" alt="pir" width={900} height="auto" /></p>

启用 GPS 并获取位置（部分中继器固件不支持实时位置更新，可能需要你手动选择位置）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreGPSSnciny.png" alt="pir" width={900} height="auto" /></p>

### 搜索你的节点

配置完成后，等待几分钟，你就可以在地图上看到你的节点。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MAPPP.jpg" style={{width:1000, height:'auto'}}/></div>

你可以查看设备名称、角色和配置信息。因此，通过使用该地图，你可以轻松找到这些在线节点所在的位置。

## （进阶）构建你自己的节点地图前端

对于高级用户，可以构建自定义的节点地图前端。建议采用以下工作流程： 

[Normal MeshCore Node] → [Mesh Nodes set with MQTT] → [Backend API / Database] → [Frontend Map UI]