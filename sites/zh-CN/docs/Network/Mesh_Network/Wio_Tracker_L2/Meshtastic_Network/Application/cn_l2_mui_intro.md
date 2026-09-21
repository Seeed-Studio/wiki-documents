---
description: MUI 介绍。介绍 MUI 的定义、特性和用法。
title: MUI 介绍
keywords:
  - Meshtastic
  - Wio Tracker L2
  - MUI
image: https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/MUIMUI.png
slug: /l2_mui
sku: 100029766
sidebar_position: 0
last_update:
  date: 3/13/2026
  author: Michelle Huang
createdAt: '2025-06-17'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/cn/l2_mui/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## 什么是 MUI？

MUI（Meshtastic User Interface）是为 Meshtastic 设备设计的开源图形界面，为用户提供了一种更直观的方式与设备交互。 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/MUIMUI.png" alt="pir" width={900} height="auto" /></p>

**主要特性**

- **交互式地图**：MUI 可以在在线或离线地图上直接显示节点位置。无需打开手机或桌面 APP，即可查看附近设备及其位置。

- **便捷的设备配置**：可在设备上直接配置 Meshtastic 设置，包括射频、GPS、显示以及其他常用选项。日常配置无需外部应用。

- **直观的图形界面**：MUI 提供了针对触摸屏优化的界面，具有清晰的菜单和基于地图的导航。常见操作只需轻点几下即可完成，让新手和有经验的用户都能更轻松地使用设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/MUIIntro.gif" alt="pir" width={600} height="auto" /></p>

## 基于 Wio Tracker L2 的 MUI 入门


### 界面切换

<Tabs>

<TabItem value="1" label="MUI 切换到 BaseUI">
进入 Setting 页面 **->** 选择 `Reboot/Shutdown` **->** 长按蓝牙图标 **->** 点击 `OK`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/MUIToBaseUI.png" alt="pir" width={900} height="auto" /></p>

:::tip
当你 `long-press` 蓝牙图标时，会弹出 BaseUI 切换弹窗。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/LongPress.gif" alt="pir" width={250} height="auto" /></p>

如果你只是点击蓝牙图标，将进入蓝牙模式。如果出现这种情况，长按屏幕上显示的蓝牙图标，设备会自动重启回到 MUI。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/GoBackMUI.gif" alt="pir" width={250} height="auto" /></p>

:::

</TabItem>

<TabItem value="2" label="BaseUI 切换到 MUI">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/BasetoMui.png" alt="pir" width={900} height="auto" /></p>

</TabItem>
</Tabs>

### 手机连接
进入 `Setting` 页面，点击 `Reboot/Shutdown`，然后点击 `Bluetooth icon`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/BluetoothModeMUI.png" alt="pir" width={800} height="auto" /></p>

设备将以蓝牙模式重启。蓝牙配对码会显示在屏幕上。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/BluetoothParingMode1.png" alt="pir" width={500} height="auto" /></p>

### LoRa 配置
为了开始在 Mesh 网络中通信，你必须先设置所在区域。该设置控制设备使用的频率范围，应根据你所在的地区进行设置。

**区域列表**

|**Region Code**|**Description**|**Frequency Range (MHz)**|**Duty Cycle (%)**|**Power Limit (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|Unset|N/A|N/A|N/A|
|US|United States|902.0 - 928.0|100|30|
|EU_868|European Union 868MHz|869.4 - 869.65|10|27|

更完整的列表请参考 [LoRa Region by Country](https://meshtastic.org/docs/configuration/region-by-country/)。

:::info
**EU_868** 必须遵守每小时 10% 的占空比限制，以滚动 1 小时为周期、每分钟计算一次。当达到限制时，你的设备将停止发射，直到再次被允许。
:::

<Tabs>

<TabItem value="7" label="在 MUI 上配置">

进入 `Setting` 页面，点击 `Region`，选择区域，然后点击 `OK`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/LoRaSetting.png" alt="pir" width={900} height="auto" /></p>

</TabItem>

<TabItem value="9" label="在手机上配置">

<Tabs>
<TabItem value="ios" label="IOS App">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/AndridLorasetting.jpg" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

</TabItem>

</Tabs>

现在你已经在设备上设置好了 LoRa 区域，可以继续配置任意适合你需求的 [LoRa Configs](https://meshtastic.org/docs/configuration/radio/lora/)。


### 地图使用
<Tabs>

<TabItem value="10" label="在线地图">

**步骤 1. 启用 GPS**

你需要启用 GPS 才能获取位置信息。可以在设备上通过 `long pressing the position icon` 直接进行配置。 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/GPSEnableMUI.png" alt="pir" width={900} height="auto" /></p>

你也可以在手机 APP 上进行配置。

**步骤 2. SD 卡准备**

你需要在 SD 卡中进行格式化并安装地图。关于 SD 卡使用的详细教程，请点击此处查看。

**步骤 3. 安装 SD 卡**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/SDCardPlugin.gif" alt="pir" width={450} height="auto" /></p>

**步骤 4. 查看地图**

等待地图加载。成功连接 Wi-Fi 并获取位置信息后，设备将显示离线地图。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/OfflineMapL2.png" alt="pir" width={450} height="auto" /></p>

</TabItem>

<TabItem value="11" label="离线地图">

**步骤 1. 启用 GPS**

你需要启用 GPS 才能获取位置信息。可以在设备上通过 `long pressing the position icon` 直接进行配置。 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/GPSEnableMUI.png" alt="pir" width={900} height="auto" /></p>

你也可以在手机 APP 上进行配置。

**步骤 2. 设置并启用 Wifi**

设置 Wifi 名称和密码。可以在设备上直接操作。 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/WifiSetting.png" alt="pir" width={450} height="auto" /></p>

当 Wifi IP 为空且 Wifi 图标为灰色时，表示 Wifi 已禁用；当显示 Wifi IP 且 Wifi 图标为白色时，表示 Wifi 已启用。 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/WifiStatus.png" alt="pir" width={900} height="auto" /></p>

长按 `Wifi` 图标可切换状态。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/WifiSwitchMUI.png" alt="pir" width={450} height="auto" /></p>

:::tip

连接的 Wifi 应为 2.4G。设备无法使用 5G Wifi。

:::



**步骤 3. 查看地图**

等待地图加载。成功连接 Wi-Fi 并获取位置信息后，设备将显示在线地图。



</TabItem>
</Tabs>


## 高级交互

### 菜单栏
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/MenuBarMUII.png" alt="pir" width={600} height="auto" /></p>


### 首页

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/MUIHOme.png" alt="pir" width={900} height="auto" /></p>

### 节点页面

- **点击任意节点**：展开节点的详细参数信息

- **长按任意节点**：进入聊天

- **长按坐标**：在地图上查看节点位置

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/NodePaje.png" alt="pir" width={300} height="auto" /></p>

### 频道页面

- **点击某个频道**：进入频道聊天

- **长按某个频道**：静音/取消静音该频道

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/ChannelPage.png" alt="pir" width={300} height="auto" /></p>

:::tip

只有已配置的频道（例如下图左侧所示的已命名频道）才能进行交互。像右图中那种未配置、仅有标签的频道，无法进行交互。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/ChannelConfiguration.png" alt="pir" width={300} height="auto" /></p>

:::

### 消息页面

- **点击某个聊天**：进入聊天。

- **长按某个聊天**：显示 DEL 按钮以删除该聊天。

- **橙色高亮**：表示有新的未读消息。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/ChatInterct.png" alt="pir" width={900} height="auto" /></p>

### 设置页面

- **重启**：选择 "Reboot/Shutdown"，点击绿色的 "Reboot" 图标。

- **关机**：选择 "Reboot/Shutdown"，点击红色的 "Turn off" 图标。

- **进入蓝牙模式**：选择 "Reboot/Shutdown"，点击蓝色的 "Bluetooth" 图标。

- **切换到 BaseUI**：选择 "Reboot/Shutdown"，长按蓝色的 "Bluetooth" 图标。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/SettingMUII.png" alt="pir" width={900} height="auto" /></p>


### 工具

- **Mesh Detector**：显示检测到的活动节点
- **Signal Scanner**：显示所选节点的 RSSI 和 SNR
- **Trace Route**：显示所选节点的路由路径
- **Statistic**：显示数据包解码信息
- **Packet Log**：显示设备日志

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/TOOLMUI.png" alt="pir" width={500} height="auto" /></p>

## MUI 设备要求

MUI 旨在运行于支持 Meshtastic 且提供图形显示的硬件上。要使用所有 MUI 功能（包括离线地图），你的设备应满足以下要求。

| 组件 | 要求 |
|-----------|-------------|
| 显示屏 | 支持触控的彩色显示屏 |
| GNSS | 内置 GNSS 接收器，用于定位服务 |
| LoRa® | 兼容 Meshtastic 通信的 LoRa® 射频 |
| 存储 | 用于离线地图的 microSD 卡槽 |
| MCU | 需要高性能 MCU，能够同时支持屏幕显示和 Meshtastic 固件|


**Seeed Wio Tracker L2** 是 MUI 推荐的硬件平台。

它在单一设备中集成了所有所需组件：

- 彩色触摸屏
- 内置 GNSS
- LoRa® 通信
- Wi-Fi 和 Bluetooth® 连接
- 用于离线地图的 microSD 卡槽
- 用于编程和供电的 USB Type-C

不需要额外的扩展板。

## 常见问题
### 如何激活键盘
点击如下所示的键盘图标。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/Keyboardicon.png" alt="pir" width={500} height="auto" /></p>

然后你就可以输入数字和字母。并非每个页面都有键盘图标；它通常只出现在需要输入的页面上。

### 为什么我的 Wi-Fi 会自动关闭

当你进入 Bluetooth 配对模式时，设备的 Wi-Fi 会被自动设置为禁用。
你可以在手机 App 中，在设备处于 Bluetooth 模式时启用 Wi-Fi。

### 如何在 MUI 中发送 mqtt 消息

设备在处于 MUI 时无法发送 mqtt 消息。如果你想发送 mqtt 消息，请：

**步骤 1**. 进入 Bluetooth 配对模式

**步骤 2**. 将你的设备与手机 App 配对

**步骤 3**. 在手机 App 中配置 mqtt

**步骤 4**. 开始消息传输

