---
description: 本指南介绍如何在 MeshCore 节点地图上显示 MeshCore 设备的位置。
title: MeshCore 节点地图
keywords:
  - MeshCore
  - MeshMap
  - MeshCore Node Map
  - SenseCAP MeshTracker X1
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MAPPP.jpg
slug: /meshcore_node_map_meshtracker_x1
sku: 100087698
sidebar_position: 2
last_update:
  date: 3/19/2026
  author: Michelle Huang
createdAt: 2026-04-3
updatedAt: '2026-07-31'
url: https://wiki.seeedstudio.com/cn/meshcore_node_map_meshtracker_x1/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 为什么要使用 MeshCore 节点地图

节点地图可以通过绘制节点位置，为 [MeshCore](https://meshcore.io/#hardware) 网络提供实时可视化，使用户能够了解网络拓扑和节点分布。 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreMAPFirst.png" style={{width:900, height:'auto'}}/></div>

MeshCore 节点地图依赖节点定期向网络上报其地理位置。它特别适用于：

- **发现附近的中继器**：识别可用中继器以扩展连接范围
- **监控自己的网络**：跟踪节点状态和位置
- **调试与优化**：优化中继器和网关的部署位置


## MeshCore 官方地图使用教程

最常用的 MeshCore 节点地图是官方的 `MeshCore Node Map`。 [点击这里](https://map.meshcore.io/) 进入网站。

### Companion 配置

要让 companion 节点出现在 MeshCore 节点地图上，设备必须正确配置以上报其位置。请按如下步骤配置：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreMap.png" style={{width:1000, height:'auto'}}/></div>

### 中继器或房间服务器配置

要让中继器或房间服务器出现在 MeshCore 节点地图上，设备必须正确配置以上报其位置。 

首先登录中继器。中继器的默认管理员密码是 `password`。 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/AAdmin.png" alt="pir" width={900} height="auto" /></p>

启用 GPS 并获取位置（部分中继器固件不支持更新实时位置，此时你可能需要手动选择你的位置）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshCoreGPSSnciny.png" alt="pir" width={900} height="auto" /></p>

### 搜索你的节点

完成配置后，等待几分钟，你就可以在地图上看到你的节点。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MAPPP.jpg" style={{width:1000, height:'auto'}}/></div>

你可以看到设备名称、角色和配置信息。因此，通过使用这张地图，你可以轻松找出那些在线节点所在的位置。

## （进阶）构建你自己的节点地图前端

对于高级用户，可以构建自定义的节点地图前端。推荐使用以下工作流程： 

[普通 MeshCore 节点] → [设置了 MQTT 的 Mesh 节点] → [后端 API / 数据库] → [前端地图界面]

## 技术支持与产品讨论

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

<div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
        <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
    </div>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
        <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
    </div>
</div>