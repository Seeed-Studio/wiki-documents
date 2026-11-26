---
description: 在 Seeed Studio LoRa Mesh 设备上探索基于 Zephyr 的 MeshCore 固件 ZephCore。
title: Zephyr 开发
keywords:
  - ZephCore
  - Zephyr RTOS
  - MeshCore
  - LoRa mesh
image: https://files.seeedstudio.com/wiki/SenseCAP/zephcore/Zephcorephoto.png" 
slug: /zephcore_getting_started_x1
sku: 100087698
sidebar_position: 3
last_update:
  date: 11/24/2026
  author: Michelle Huang
createdAt: 2026-11-24T00:00:00.000Z
updatedAt: '2026-11-24'
url: https://wiki.seeedstudio.com/cn/zephcore_getting_started_x1/
---

## ZephCore 与 MeshCore 的关系

MeshCore 让 LoRa 设备在离网环境下交换消息。[ZephCore 项目](https://github.com/liquidraver/ZephCore) 是基于 Zephyr 操作系统的社区版 MeshCore 移植。你可以在一台设备上尝试 ZephCore，并向运行 MeshCore 的朋友发送消息。两端的射频需要匹配的设置。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/zephcore/Zephcorephoto.png" alt="ZephCore GitHub project" width={800} height="auto" /></p>

| 对你有什么变化？ | MeshCore 固件 | ZephCore 固件 |
| --- | --- | --- |
| 固件平台 | 基于 Arduino 的 MeshCore 固件 | 基于 Zephyr RTOS 的移植版本 |
| LoRa 网络 | 一个 MeshCore LoRa Mesh | 相同的 MeshCore Mesh |
| 手机 APP | 带 BLE Companion 的 MeshCore 应用 | 使用受支持 BLE Companion 构建的同一应用 |

## 什么是 Zephyr？

Zephyr 是一个面向小型设备的开源实时操作系统。在一个追踪器上，它可以在按键被按下时唤醒处理器、读取 GPS 接收机或更新显示屏。ZephCore 使用这些服务来运行一个 Mesh 节点。

## 选择你的设备

如果你想通过手机使用蓝牙发送消息，请选择 **Companion**。如果你希望设备为附近节点转发消息，请选择 **Repeater**。

| 设备 | 图片 | ZephCore 中的板卡名称 |
| --- | --- | --- |
| [Wio Tracker L1 Pro](https://www.seeedstudio.com/Wio-Tracker-L1-Pro-for-Meshcore-p-6717.html) | <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/1-100030144-wio-tracekr-l1-pro-meshcore.jpg" alt="Wio Tracker L1 Pro in the MeshCore getting started guide" width={160} height="auto" /></p> | `wio_tracker_l1` |
| [SenseCAP MeshTracker X1](https://www.seeedstudio.com/sensecap-meshtracker-x1-meshtastic-gps-tracker-p-6935.html) | <p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100093876._._.png" alt="SenseCAP MeshTracker X1 in the MeshCore getting started guide" width={160} height="auto" /></p> | `meshtracker_x1` |
| [SenseCAP T1000-E](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html) | <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/intro-e.png" alt="SenseCAP T1000-E in the MeshCore getting started guide" width={160} height="auto" /></p> | `t1000_e` |
| [SenseCAP Solar Node P1 Pro](https://www.seeedstudio.com/SenseCAP-Solar-Node-P1-Pro-for-Meshcore-p-6741.html) | <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/image1_2.jpeg" alt="SenseCAP Solar Node P1 Pro in the MeshCore getting started guide" width={160} height="auto" /></p> | `sensecap_solar` 是相关的板卡名称 |

在 [板卡列表](https://github.com/liquidraver/ZephCore/blob/master/docs/supported_boards.md) 和 [固件发布页](https://github.com/liquidraver/ZephCore/releases) 中查看你的板卡有哪些可用构建。

## 烧录 ZephCore

在切换固件之前，如果你想保留当前配置，请保存射频设置并备份节点身份。切换固件需要重新设置节点。

1. **连接。** 使用 USB 数据线将设备插入电脑。在 Chrome 或 Edge 中打开 [ZephCore Web Flasher](https://zephcore.meshcore.dev/)。
2. **选择。** 使用上表选择与你完全匹配的板卡和角色。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/zephcore/ZephcoreSeeedproduct.png" alt="Seeed Studio devices in the ZephCore Web Flasher" width={900} height="auto" /></p>

3. **烧录。** 按提示选择 USB 设备并安装固件。等待烧录工具提示完成。
4. **测试。** 选择与附近 MeshCore 节点相同的区域射频预设。对于 Companion，在 MeshCore 应用中配对、发送一条消息并请求对方回复。对于 Repeater，检查消息是否通过中继到达第二个节点。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/zephcore/Zephcorefirst.jpg" alt="ZephCore startup screen on the L1 Pro" width={550} height="auto" /></p>

## 你可以用 ZephCore 做什么？

### 测量电池使用情况

即使没有人发送消息，监听 LoRa 数据包也会消耗电量。在受支持的 SX126x 射频上，ZephCore 可以在短时间窗口内监听，以**降低平均电流**。 

### 不用拿出手机就检查 L1 Pro

在 L1 Pro 上，使用摇杆浏览 OLED 状态屏幕并在设备上查看电池电量。当追踪器在你手中而手机收起来时，这非常方便。在无屏幕的 X1 和 T1000-E 上，请使用 MeshCore 应用查看 Companion 状态。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/zephcore/ZephCore%20Menu.jpg" alt="ZephCore menu on the L1 Pro OLED" width={550} height="auto" /></p>

### 在 Zephyr 上探索游戏

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/zephcore/Zephcoregame.gif" alt="ZephCore game demonstration" width={480} height="auto" /></p>

## 构建你的第一个 ZephCore 固件

安装 Git、Zephyr 工具以及你的 ZephCore 版本所需的 SDK。[ZephCore 构建说明](https://github.com/liquidraver/ZephCore)

在一个新文件夹中，下载项目及其依赖项：

```bash
git clone https://github.com/liquidraver/ZephCore.git zephcore
west init -l zephcore
west update
```

在同一文件夹中，构建 L1 Pro 固件：

```bash
west build -b wio_tracker_l1 zephcore --pristine
```

这里，`west` 是 Zephyr 的命令行工具，`-b` 用于选择板卡。该命令会在你的电脑上编译固件。要做第一次尝试性修改，可以更改 L1 Pro 状态屏幕上的一个标签，重新构建，并按照项目说明安装你的本地构建。新的标签可以让你直观地确认正在运行的是你自己的固件。

在阅读源码时，留意 **Devicetree** 以了解硬件如何连接，以及 **Kconfig** 以了解构建启用了哪些特性。

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