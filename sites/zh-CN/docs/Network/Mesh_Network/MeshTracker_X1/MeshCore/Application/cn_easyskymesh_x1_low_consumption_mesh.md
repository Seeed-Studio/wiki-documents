---
description: 本指南介绍如何将 EasySkyMesh 与 MeshTracker X1 结合使用，在 MeshCore 的基础上构建低功耗 IoT 传感器网络。
title: 省电
keywords:
  - EasySkyMesh
  - MeshCore
  - MeshTracker X1
  - LoRa Mesh
  - MeshCore Sensor
  - PowerSaving
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/easyskymeshx1.png
slug: /easyskymesh_x1
sku: 114993369
sidebar_position: 1
last_update:
  date: 11/13/2026
  author: Michelle Huang
createdAt: 2026-11-13T00:00:00.000Z
updatedAt: '2026-11-13'
url: https://wiki.seeedstudio.com/cn/easyskymesh_x1/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# MeshTracker X1 的 EasySkyMesh IoT 固件

[EasySkyMesh](https://github.com/IoTThinks/EasySkyMesh) 是一个基于 [MeshCore](https://meshcore.io/) 的社区项目，专注于构建低功耗固件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/easyskymeshx1.png" style={{width:600, height:'auto'}}/></div>

EasySkyMesh 增加了**省电和传感器数据采集**功能。传感器数据可以由 MeshCore 节点采集，并通过现有的 MeshCore 网络进行传输。它特别适用于：

* 低功耗传感器网络
* 远程监控
* 太阳能供电部署
* 环境监测
* 基础设施监测
* IoT 原型开发

## 固件烧录

### 硬件准备

在烧录固件之前，请准备：

* MeshTracker X1。[点击此处](https://www.seeedstudio.com/sensecap-meshtracker-x1-meshtastic-gps-tracker-p-6935.html)获取。
* USB 线缆
* 电脑

通过 USB Type-C 接口将 X1 连接到电脑。

### 下载 EasySkyMesh 固件

前往 [EasySkyMesh Releases](https://github.com/IoTThinks/EasySkyMesh/releases) 页面。选择一个支持你开发板的版本。


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/easyskymeshx1firmware.png"style={{width:600, height:'auto'}}/></div>


EasySkyMesh 的发布版本可能会针对不同硬件和不同升级场景提供不同的固件文件。对于全新安装，项目通常会提供全新安装的固件镜像。对于已有安装，当你希望保留现有配置时，请使用升级固件。


### 烧录固件

EasySkyMesh 项目建议在受支持的设备上使用 MeshCore Web Flasher。

**步骤 1：** 打开 [MeshCore Web Flasher](https://meshcore.io/flasher)

**步骤 2：** 选择 **Custom Firmware**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EasySkyMesh/Choose_Custom_Firmware_MeshCore_EasySkyMesh.png" style={{width:600, height:'auto'}}/></div>

**步骤 3：** 选择 EasySkyMesh 固件文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/x1folder.png" style={{width:600, height:'auto'}}/></div>

**步骤 4：** 如有需要，进入 DFU 模式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/X1Enter.png" style={{width:900, height:'auto'}}/></div>

**步骤 5：** 开始烧录。等待烧录过程完成。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/X1Flash.png" style={{width:900, height:'auto'}}/></div>

**步骤 6：** 重启设备。

## 省电

该项目提供针对不同 MeshCore 开发板进行优化的 PowerSaving 固件发布版本。EasySkyMesh 发布版本已经为基于 ESP32 和 nRF52 的设备引入了省电特性，并为不同的 MeshCore 角色增加了额外的电源管理功能。

### Companion 固件

所有 PowerSaving 功能默认启用。RX PowerSaving 被设置为“balanced”。

### 中继与房间服务器固件

Powersaving 默认关闭。你可以通过 MeshCore CLI 启用 PowerSaving。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EasySkyMesh/EasySkyMesh_Powersaving_On.png" style={{width:900, height:'auto'}}/></div>

通过以下方式启用 powersaving：

```text
powersaving on
```

要检查当前 PowerSaving 状态：

```text
powersaving
```

[点击此处](https://github.com/IoTThinks/EasySkyMesh/wiki/PowerSaving#11-repeaters-and-room-servers)以使用更多命令。

## 故障排查

### 设备未在 Flasher 中显示

1. 确保 USB 线缆支持数据传输。
2. 重新连接 X1。
3. 再次进入 DFU 模式。
4. 刷新 Web Flasher。
5. 尝试更换 USB 接口或线缆。


如果问题仍然存在，请查看 [EasySkyMesh GitHub 仓库](https://github.com/IoTThinks/EasySkyMesh)以获取最新文档和问题反馈。

## 资源

* [EasySkyMesh GitHub 仓库](https://github.com/IoTThinks/EasySkyMesh)
* [EasySkyMesh 固件烧录说明](https://github.com/IoTThinks/EasySkyMesh/blob/main/firmware/Instruction-to-flash-firmware.md)
* [EasySkyMesh 传感器使用说明](https://github.com/IoTThinks/EasySkyMesh/blob/main/firmware/Add-sensors-to-repeaters.md)

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

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>