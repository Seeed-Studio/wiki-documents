---
description: Meshtastic® 网络介绍
title: Meshtastic® 网络介绍
keywords:
  - Meshtastic
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /meshtastic_introduction
sidebar_position: 1
last_update:
  date: 12/11/2025
  author: Michelle
createdAt: '2024-06-17'
updatedAt: '2026-07-31'
url: https://wiki.seeedstudio.com/cn/meshtastic_introduction/
---

[Meshtastic®](https://meshtastic.org/) 是一个开源、离网、去中心化的网状网络，构建于经济实惠、低功耗的设备之上，它使你能够在没有现有或可靠通信基础设施的区域，使用廉价的 LoRa 电台作为远距离离网通信平台。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/FrameworkMeshtasticccc.png" alt="pir" width={900} height="auto" /></p>

## 特性

- **远距离通信**（[MartinR7 和 alleg 创下的 331km 记录](https://meshtastic.org/docs/overview/range-tests/#current-ground-record-331km)）
- **去中心化通信** - 无需专用路由器
- **加密通信** 

## 工作原理

Meshtastic 使用 LoRa（一种远距离无线电协议），在大多数地区都可以广泛使用，无需额外的许可证或认证，这一点不同于业余无线电（HAM）操作。

此外，Meshtastic 电台可以与一部手机配对，使朋友和家人能够将消息直接发送到你的特定电台。需要注意的是，每台设备在同一时间只能支持一个用户的连接。"

点击[这里](https://meshtastic.org/docs/)了解更多 Meshtastic 网络信息！

## 支持的硬件

### 开发套件

<table align="center">
<tbody><tr>
<th>Xiao ESP32 套件（无外壳）</th>
<th>Xiao nRF52840 套件（无外壳）</th>
<th>Xiao ESP32 套件（带外壳）</th>
</tr>
<tr>
<td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-102010611-wio-sx1262-with-xiao-esp32s3.jpg" style={{width:300, height:'auto'}}/></div></td>
<td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3-102010710-nrf52840_wio-sx1262-kit_1.jpg" style={{width:350, height:'auto'}}/></div></td>
<td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113110064-xiao-esp32s3-for-meshtastic-_-lora-with-3d-printed-enclosure-45font.jpg" style={{width:350, height:'auto'}}/></div></td>
</tr>
<tr>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 查看更多🖱️</font></span></strong>
</a>
</div></td>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF52840-Wio-SX1262-Kit-for-Meshtastic-p-6400.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 查看更多🖱️</font></span></strong>
</a>
</div></td>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-for-Meshtastic-LoRa-with-3D-Printed-Enclosure-p-6314.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 查看更多🖱️</font></span></strong>
</a>
</div></td>
</tr>
</tbody></table>


### 开发板

<table align="center">
<tbody><tr>
<th>L1 Lite（无 OLED）</th>
<th>L1（带 OLED）</th>
<th>L1 E-Ink（带 E-Ink）</th>
</tr>
<tr>
<td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-114993653-wio-tracker-l1-lite.jpg" style={{width:300, height:'auto'}}/></div></td>
<td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-114993648-wio-tracker-l1.jpg" style={{width:350, height:'auto'}}/></div></td>
<td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-114993654-wio-tracker-l1-e-ink.jpg" style={{width:350, height:'auto'}}/></div></td>
</tr>
<tr>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Tracker-L1-Lite-p-6455.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 查看更多🖱️</font></span></strong>
</a>
</div></td>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Tracker-L1-p-6453.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 查看更多🖱️</font></span></strong>
</a>
</div></td>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Tracker-L1-E-ink-p-6456.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 查看更多🖱️</font></span></strong>
</a>
</div></td>
</tr>
</tbody></table>

### GNSS 追踪器

<table align="center">
<tbody><tr>
<th>SenseCAP MeshTracker X1</th>
<th>SenseCAP Card Tracker T1000-E</th>
<th>SenseCAP Wio Tracker L1 Pro</th>
</tr>
<tr>
<td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100093876._._.png" style={{width:300, height:'auto'}}/></div></td>
<td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993369-sensecap-card-tracker-t1000-e-for-meshtastic.jpg" style={{width:350, height:'auto'}}/></div></td>
<td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/0/20260408-135305.jpg" style={{width:350, height:'auto'}}/></div></td>
</tr>
<tr>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/sensecap-meshtracker-x1-meshtastic-gps-tracker-p-6935.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 查看更多🖱️</font></span></strong>
</a>
</div></td>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 查看更多🖱️</font></span></strong>
</a>
</div></td>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/sensecap-meshtracker-x1-meshtastic-gps-tracker-p-6935.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 查看更多🖱️</font></span></strong>
</a>
</div></td>
</tr>
</tbody></table>

### 太阳能节点

<table align="center">
<tbody><tr>
<th>SenseCAP 太阳能节点（无电池和 GNSS）</th>
<th>SenseCAP 太阳能节点（带电池和 GNSS）</th>
</tr>
<tr>
<td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993643-sensecap-solar-node-p1-for-meshtastic-1_1.jpg" style={{width:300, height:'auto'}}/></div></td>
<td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993643-sensecap-solar-node-p1-for-meshtastic-1_1.jpg" style={{width:350, height:'auto'}}/></div></td>
</tr>
<tr>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Solar-Node-P1-for-Meshtastic-LoRa-p-6425.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 查看更多🖱️</font></span></strong>
</a>
</div></td>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Solar-Node-P1-Pro-for-Meshtastic-LoRa-p-6412.html" target="_blank" rel="noopener noreferrer">
<strong><span><font color={'FFFFFF'} size={"4"}> 查看更多🖱️</font></span></strong>
</a>
</div></td>
</tr>
</tbody></table>

## 应用

### 外壳设计

[点击这里](https://wiki.seeedstudio.com/cn/xiao_esp32s3_&_wio_sx1262_kit_mqtt/)阅读详细教程。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki%20images/3d%20Enclosure/6.23dimage1.png" alt="Magnetic Wireless Charger" width={800} height="auto" /></p>

### Meshtastic 节点地图

Meshtastic 节点地图是一个在线界面，用于在地图上可视化 Meshtastic 设备的位置。它帮助用户监控网状网络中设备的实时位置，从而了解网络覆盖范围和连接情况。

[点击这里](https://wiki.seeedstudio.com/cn/meshtastic_node_map_t1000_e/)阅读详细教程。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshMap/MeshMap.png" style={{width:600, height:'auto'}}/></div>

### Meshtastic 节点监控器

[Meshtastic](https://meshtastic.org/docs/introduction/) 网络监控器是一款工具，可让你在 Meshtastic 网状网络中对节点进行可视化、管理和监控。它提供关于设备状态、路由和通信的实时信息。该监控器是 Meshtastic 分析器，通过连接的网关或 MQTT 服务器收集数据，可视化网络拓扑，并显示电池状态、信号强度和 GPS 位置等节点信息。它也可以作为 Meshtastic 节点地图使用。

[点击这里](https://wiki.seeedstudio.com/cn/xiao_esp32s3_&_wio_sx1262_kit_meshmonitor/)阅读详细教程。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Meshmonitor/MeshsenseScreenshot.png" style={{width:600, height:'auto'}}/></div>

### Meshtastic MQTT 网关

将 MQTT 与 Meshtastic 集成，可以通过桥接远距离网络来扩展离网通信。这使得全球消息传递成为可能，在网状信号较弱时提供备份，并通过互联网确保更快速的消息传递，非常适合偏远地区和紧急情况。

[点击此处](https://wiki.seeedstudio.com/cn/xiao_esp32s3_&_wio_sx1262_kit_mqtt/)阅读详细教程。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MQTTFramework.png" style={{width:600, height:'auto'}}/></div>

### 其他社区固件

[点击](https://wiki.seeedstudio.com/cn/get_started_with_meshcore_solar_node/)此处，在我们的硬件上使用更多社区固件。


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