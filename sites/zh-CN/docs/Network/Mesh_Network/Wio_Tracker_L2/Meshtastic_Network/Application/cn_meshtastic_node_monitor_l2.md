---
description: Meshtastic Network Monitor 是一款工具，可用于可视化、管理和监控 Meshtastic Mesh 网络中的节点。
title: Meshtastic Network Monitor
keywords:
  - Meshtastic
  - Source Code
  - Wio Tracker L2 Pro
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/MeshsenseScreenshot.png
slug: /meshtastic_node_monitor_l2
sku: 100029766
sidebar_position: 5
last_update:
  date: 3/19/2026
  author: Michelle Huang
createdAt: '2026-03-19'
updatedAt: '2026-03-19'
url: https://wiki.seeedstudio.com/cn/meshtastic_node_monitor_l2/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Meshtastic Network Monitor 简介

[Meshtastic](https://meshtastic.org/docs/introduction/) Network Monitor 是一款工具，可用于可视化、管理和监控 Meshtastic Mesh 网络中的节点。它提供有关设备状态、路由和通信的实时信息。该监视器是 Meshtastic 分析器，通过连接的网关或 MQTT 服务器收集数据，可视化网络拓扑，并显示节点信息，例如电池状态、信号强度和 GPS 位置。它也可以作为 Meshtastic 节点地图使用。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/MeshsenseScreenshot.png" style={{width:900, height:'auto'}}/></div>

**使用场景**

* Meshtastic 节点地图。用于在偏远地区跟踪和可视化室外节点。
* Meshtastic 分析器。用于监控 Mesh 网络中的通信性能和路由情况。
* Meshtatsic 监视器。用于调试和测试 Meshtastic 设备的网络连接性。

**常见 Meshtastic 监视器**

* Meshsense：[点击这里](https://affirmatech.com/meshsense)了解更多
* Meshmonitor：[点击这里](https://meshmonitor.org/)了解更多

**如何连接到 Meshtastic 监视器**

1. 设置你的 Meshtastic 节点，并确保它们已经组成一个可正常工作的 Mesh 网络。
2. 将至少一个节点配置为网关（例如 MQTT Gateway）。
3. 将监视器应用连接到网关或 MQTT 服务器。
4. 在监视器界面中确认节点可见并且正在上报状态。

## 开始使用 Meshsense

### 配置

#### 应用准备

为你的平台下载并安装 **Meshsense** 应用程序：[Meshsense App Download](https://affirmatech.com/meshsense)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/APPDownload.png" style={{width:900, height:'auto'}}/></div>

#### 设备准备

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取🖱️</font></span></strong>
</a>
</div>

#### MQTT 网关配置

按照官方配置教程来设置 mqtt：[Wio Trcker L2 MQTT Gateway Setup](https://wiki.seeedstudio.com/cn/set_up_mqtt_gateway_l2/)

:::tip
若要显示实时 GPS 位置，请确保在节点上启用了 GPS。在配置 MQTT 时，请确保允许位置上报。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/MapDisplay.png" style={{width:500, height:'auto'}}/></div>

:::

#### 网络连接

将你的电脑连接到与 Xiao ESP32S3 套件相同的 Wi-Fi 网络。请确保是 2.4G Wi-Fi。

打开串口终端（例如 Arduino Serial Monitor 或 PuTTY）以查找 Xiao 设备的 IP 地址。你也可以使用 [Meshtastic web serial monitor](https://flasher.meshtastic.org/)。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/IPAdress.png" style={{width:500, height:'auto'}}/></div>

在 Meshsense 设备连接字段中输入该 IP 地址。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/IPInput.png" style={{width:500, height:'auto'}}/></div>

连接成功后，你的 Meshtastic 节点应会出现在 Meshsense 中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/Connected.png" style={{width:500, height:'auto'}}/></div>

### 位置显示

你需要启用 GPS 才能获取位置信息。这可以通过 `long pressing the position icon` 直接在设备上进行配置。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/GPSEnableMUI.png" alt="pir" width={900} height="auto" /></p>

你也可以在手机 APP 上进行配置。

* 在 Meshsense 应用中，确保已启用 GPS 上报。
* 连接成功后，应用会在地图上显示每个节点的实时位置。你可以在 APP 上直接查看节点位置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/APPPPosition.png" style={{width:500, height:'auto'}}/></div>

在 Meshsense 网站地图上，你同样可以看到自己的实时位置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/MapDisplay.png" style={{width:500, height:'auto'}}/></div>


通过上述配置，你可以高效管理你的私有 Meshtastic 网络，并在 Meshsense 中直观地查看节点行为。
