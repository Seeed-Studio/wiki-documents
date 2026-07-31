---
description: Meshtastic Network Monitor 是一款工具，可用于可视化、管理和监控 Meshtastic Mesh 网络中的节点。
title: Meshtastic Network Monitor
keywords:
  - Meshtastic
  - 源代码
  - Xiao ESP32s3
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/MeshsenseScreenshot.png
slug: /xiao_esp32s3_&_wio_sx1262_kit_meshmonitor
sku: 102010611,113110064
sidebar_position: 2
last_update:
  date: 3/19/2026
  author: Michelle Huang
createdAt: '2026-03-19'
updatedAt: '2026-03-19'
url: https://wiki.seeedstudio.com/cn/xiao_esp32s3_&_wio_sx1262_kit_meshmonitor/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Meshtastic Network Monitor 简介

[Meshtastic](https://meshtastic.org/docs/introduction/) Network Monitor 是一款工具，可用于可视化、管理和监控 Meshtastic Mesh 网络中的节点。它提供有关设备之间状态、路由和通信的实时信息。该监视器是 Meshtastic 分析器，通过连接的网关或 MQTT 服务器收集数据，可视化网络拓扑，并显示节点信息，例如电池状态、信号强度和 GPS 位置。它也可以作为 Meshtastic 节点地图使用。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/MeshsenseScreenshot.png" style={{width:900, height:'auto'}}/></div>

**使用场景**

* Meshtastic 节点地图。用于在偏远地区跟踪和可视化户外节点。
* Meshtastic 分析器。用于监控 Mesh 网络中的通信性能和路由情况。
* Meshtatsic 监视器。用于调试和测试 Meshtastic 设备的网络连接性。

**常见 Meshtastic 监视器**

* Meshsense：[点击这里](https://affirmatech.com/meshsense)了解更多
* Meshmonitor：[点击这里](https://meshmonitor.org/)了解更多

**如何连接到 Meshtastic 监视器**

1. 配置你的 Meshtastic 节点，并确保它们已经组成一个可正常工作的 Mesh 网络。
2. 将至少一个节点配置为网关（例如 MQTT 网关）。
3. 将监视器应用连接到该网关或 MQTT 服务器。
4. 在监视器界面中确认节点可见并且正在上报状态。

## 开始使用 Meshsense

### 配置

#### 应用准备

为你的平台下载并安装 **Meshsense** 应用：[Meshsense App Download](https://affirmatech.com/meshsense)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/APPDownload.png" style={{width:900, height:'auto'}}/></div>

#### 设备准备

你需要一套配置为 MQTT 网关的 **Seeed Xiao ESP32S3 & SX1262 Meshtastic Kit**。这可以在你的 Meshtastic 网络和 Meshsense 之间实现实时通信。如果你还想监控和显示位置，请添加一个 GPS 模块。

<table align="center">
<tbody><tr>
<th>XIAO ESP32S3 & Wio-SX1262 Kit for Meshtastic & LoRa</th>
<th>（可选）L76K GNSS 模块</th>
</tr>
<tr>
<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/t2.jpg" style={{width:300, height:'auto'}}/></div></td>
<td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/1-L76K-GNSS-Module-for-Seeed-Studio-XIAO-45font.jpg" style={{width:350, height:'auto'}}/></div></td>
</tr>
<tr>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取🖱️</font></span></strong>
</a>
</div></td>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank" rel="noopener noreferrer">
<strong><span><font color={'FFFFFF'} size={"4"}> 查看更多🖱️</font></span></strong>
</a>
</div></td>
</tr>
</tbody></table>

#### MQTT 网关配置

按照官方配置教程来设置 mqtt：[Xiao ESP32S3 & SX1262 MQTT Gateway Setup](https://wiki.seeedstudio.com/cn/xiao_esp32s3_&_wio_sx1262_kit_mqtt/)

:::tip
若要显示实时 GPS 位置，请确保在你的节点上启用了 GPS。在配置 MQTT 时，也要确保允许位置上报。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/MapDisplay.png" style={{width:500, height:'auto'}}/></div>

:::

#### 网络连接

将你的电脑连接到与 Xiao ESP32S3 套件相同的 Wi-Fi 网络。请确保它是 2.4G Wi-Fi。

打开串口终端（例如 Arduino Serial Monitor 或 PuTTY）以查找 Xiao 设备的 IP 地址。你也可以使用 [Meshtastic web serial monitor](https://flasher.meshtastic.org/)。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/IPAdress.png" style={{width:500, height:'auto'}}/></div>

在 Meshsense 的设备连接字段中输入该 IP 地址。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/IPInput.png" style={{width:500, height:'auto'}}/></div>

连接成功后，你的 Meshtastic 节点就会出现在 Meshsense 中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/Connected.png" style={{width:500, height:'auto'}}/></div>

### 位置显示

#### 硬件连接

若要显示节点位置，请将 **L76K GPS 模块** 连接到 Xiao ESP32S3 套件。[点击这里](https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html)立即获取。

#### 软件设置

* 在 Meshsense 应用中，确保已启用 GPS 上报。
* 连接成功后，应用会在地图上显示每个节点的实时位置。你可以在 APP 上直接看到你的节点位置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/APPPPosition.png" style={{width:500, height:'auto'}}/></div>

在 Meshsense 网站地图上，你同样可以看到自己的实时位置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/MapDisplay.png" style={{width:500, height:'auto'}}/></div>


通过上述配置，你可以高效管理你的私有 Meshtastic 网络，并在 Meshsense 中直观地查看节点行为。

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