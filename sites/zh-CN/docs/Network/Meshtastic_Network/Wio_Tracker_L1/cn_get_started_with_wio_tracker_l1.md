---
description: Wio Tracker L1 系列快速上手
title: Wio Tracker L1 快速上手
keywords:
  - Meshtastic
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-l1.webp
slug: /get_started_with_meshtastic_wio_tracker_l1
sku: 114993648,114993649,114993653,114993654
sidebar_position: 2
last_update:
  date: 3/13/2026
  author: Michelle Huang
createdAt: '2025-06-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/cn/get_started_with_meshtastic_wio_tracker_l1/
---

:::tip
Wio Tracker L1 系列共享相同的硬件框架。虽然视频指南是针对 L1 Pro 的，但同样适用于 L1 系列中的所有其他产品。
:::
## 视频教程

### 第 1 部分 开箱

首次使用 L1、L1 Lite 或 L1 E-Ink 型号时，在连接 USB 电源后，将电源开关向上拨动以开机。

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/Wi_YmE76YcY?si=Ad-pUhle5X9QppPR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### 第 2 部分 固件烧录

:::caution note
请 `don't use NRF-OTA` 来更新固件，否则可能导致设备完全损坏。
:::

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/hcjai4J1894?si=S_jaEfXVThWXscVJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### 第 3 部分 设备使用

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/Q97w2ompPtI?si=yLbAgE4cBbT6NbHS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

#### 四向摇杆
L1 E-Ink 固件目前不支持四向摇杆。如果你想使用摇杆，请购买其他型号。

#### 菜单栏
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/Menu.jpeg" alt="pir" width={600} height="auto" /></p>
只有 2.7 固件支持菜单栏。如果你想使用菜单栏，请按照 [固件烧录教程](https://wiki.seeedstudio.com/cn/get_started_with_meshtastic_wio_tracker_l1/#第-2-部分-固件烧录) 更新固件。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/version.png" alt="pir" width={600} height="auto" /></p>

#### 蜂鸣器

如果你想打开或关闭蜂鸣器，请先将 `update the firmware` 到 `2.7` 版本。因为只有 2.7 版本固件才有菜单栏。
- 打开蜂鸣器
Setting（齿轮形状图标）-> Notification -> Buzzer Action -> Disable
- 关闭蜂鸣器
Setting（齿轮形状图标）-> Notification -> Buzzer Action -> All enabled

<div class="table-center">
<iframe width="350" height="450" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/buzzer%20_turnonturnoff.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### 第 4 部分 手机连接

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/OFtUwN3z0tI?si=9zr3j-hLuoj0-CXi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### 第 5 部分 不同状态

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/eZa8kfUD2e4?si=3Fe_30obcercIXXO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 开始使用

:::danger note
当设备处于以下状态时，请不要手动重启或关闭电源。否则设备可能会损坏。
1. 尚未完成消息传输过程
2. 正在配置中
:::

### 烧录固件

:::caution note
请 `don't use NRF-OTA` 来更新固件，否则可能导致设备完全损坏。
:::

访问 [Meshtastic Web Flasher](https://flasher.meshtastic.org/)。

对于 L1、L1 Lite 和 L1 Pro，将目标设备选择为 `Seeed Wio Tracker L1` 并选择最新固件，然后点击 `Flash`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/select-wio-tracker.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-wio-tracker.png" alt="pir" width={800} height="auto" /></p>

对于 L1 E-Ink，将目标设备选择为 `Seeed Wio Tracker L1 E-Ink` 并选择最新固件，然后点击 `Flash`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/img/E-Ink%20Flash%201.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src=" https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/img/E-Ink%20Flash%202.png" alt="pir" width={800} height="auto" /></p>


打开设备，点击 `Enter DFU Mode`，会出现一个名为 `Tracker L1` 的串口，点击并连接它，此时应显示一个名为 `Tracker L1` 的驱动器。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/52840-connect.png" alt="pir" width={800} height="auto" /></p>

将 UF2 文件拖入 DFU 驱动器。文件下载完成并且设备重启后，固件就会被烧录。

### 打开设备电源

连接 USB 线以激活设备。将电源开关向上拨动以开机。

:::tip
如果按下按键时设备没有响应，请先为其充电。不要使用快充充电器。
:::

### 通过 App 连接

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="IOS App">

- 在蓝牙面板中选择目标设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- 在显示屏上输入代码，然后点击 `OK` 连接设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

- 点击 `+` 并选择目标设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>

- 输入代码（默认代码为 `123456`），然后点击 `OK` 连接设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

### 通过网站连接

如果你想在网站上发送消息并与其他节点通信，现在可以将设备连接到 [Meshtastic 网站](https://client.meshtastic.org/messages/broadcast/0)。

  步骤 1：打开网站

[Click here](https://client.meshtastic.org/messages/broadcast/0) 进入网站。
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshtasticWeb.png" alt="pir" width={1000} height="auto" /></p>

  步骤 2：添加新设备

    点击 "+ New Connection"。

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteAddNewConnection.png" alt="pir" width={600} height="auto" /></p>

    有两种连接方式。你可以选择自己偏好的方式。

 方法 1：通过蓝牙

    选择蓝牙方式。在弹出窗口中选择设备 ID。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshWebBluetooth.png" alt="pir" width={1000} height="auto" /></p>

 方法 2：通过串口

    选择串口方式。打开设备管理器查看设备连接到哪个端口。在弹出窗口中选择该端口。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteSerialConnection.png" alt="pir" width={1000} height="auto" /></p>

    你的设备会显示在列表中。点击进行连接。如果连接成功，你可以在网站上直接看到设备状态。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteConnectionSuccess.png" alt="pir" width={300} height="auto" /></p>


### 配置 LoRa

为了开始在 Mesh 网络中通信，你必须设置所在区域。该设置控制设备使用的频率范围，应根据你所在的地区进行设置。

<Tabs>
<TabItem value="ios" label="IOS App">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-region.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

**区域列表**

|**区域代码**|**描述**|**频率范围 (MHz)**|**占空比 (%)**|**功率限制 (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|未设置|N/A|N/A|N/A|
|US|美国|902.0 - 928.0|100|30|
|EU_868|欧盟 868MHz|869.4 - 869.65|10|27|

更完整的列表请参考 [按国家划分的 LoRa 区域](https://meshtastic.org/docs/configuration/region-by-country/)。

:::info
**EU_868** 必须遵守每小时 10% 的占空比限制，以滚动 1 小时为周期，每分钟计算一次。如果达到限制，你的设备将停止发射，直到再次被允许。
:::

现在你已经在设备上设置了 LoRa 区域，可以继续配置任意[LoRa 配置](https://meshtastic.org/docs/configuration/radio/lora/)以满足你的需求。

### 配置 GPS

请将 GPS 设置为启用。你可以调整更新间隔和广播间隔，以获取更加实时的位置数据。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshGPS.png" alt="pir" width={500} height="auto" /></p>

对于 IOS，请打开 `Accurate Location`。否则，定位可能会出现偏差。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSAccurateLocation.jpg" alt="pir" width={200} height="auto" /></p>


### 传感器连接

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/SensorConnection.jpg" alt="pir" width={700} height="auto" /></p>

你可以通过 Grove 接口将传感器添加到设备上。以下传感器已验证与设备上的 Grove 接口兼容。

<table>
  <tr>
    <th colspan="2">传感器类型</th>
    <th colspan="1">传感器型号</th>
  </tr>
  <tr>
    <td rowspan="4">环境传感器</td>
    <td>气压</td>
    <td>BMP085</td>
  </tr>
  <tr>
    <td>温度</td>
    <td>[MCP9808](https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temperature-Sensor-MCP9808.html) 、PCT2075</td>
  </tr>
  <tr>
    <td>温度和湿度</td>
    <td>[SHT31](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html)/SHTC3/[SHT4X](https://www.seeedstudio.com/Grove-Temp-Humi-Sensor-SHT40-p-5384.html)、AHT10</td>
  </tr>
  <tr>
    <td>温度、湿度和气压</td>
    <td>[BME280](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html)</td>
  </tr>
  <tr>
    <td rowspan="2">其他</td>
    <td>心率和血氧饱和度（SpO₂）</td>
    <td>[MAX30102](https://www.seeedstudio.com/MAXREFDES117-HEART-RATE-AND-PULSE-OXIMETRY-MONITOR-p-2762.html)</td>
  </tr>
  <tr>
    <td>I2C 键盘</td>
    <td>CardKB</td>
  </tr>
</table>


<Tabs>

<TabItem value="ios" label="IOS">

- 启用 Telemetry 以获取传感器数据。如果你想在 OLED 屏幕上显示传感器数据，请启用 `on screen`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/TelemetryIOS.png" alt="pir" width={900} height="auto" /></p>

</TabItem>

<TabItem value="Android" label="Android">

- 启用 Telemetry 以获取传感器数据。如果你想在 OLED 屏幕上显示传感器数据，请启用 `on screen`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/TelemetryAndroid.png" alt="pir" width={900} height="auto" /></p>

</TabItem>
</Tabs>

如果你启用了 `on screen`，OLED 将显示传感器数据。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Telemetryscreen.jpg" alt="pir" width={800} height="auto" /></p>

### 屏幕连接
 - 电子墨水屏
  [点击这里](https://www.seeedstudio.com/2-13-Monochrome-ePaper-Display-with-122x250-Pixels-p-5778.html)获取兼容的电子墨水屏。
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/E-Ink_Screen_Connection.jpg" alt="pir" width={300} height="auto" /></p>

- OLED 屏幕
[点击这里](https://www.seeedstudio.com/1-3inch-OLED-128-64-White-FPC-p-6614.html)获取兼容的 OLED 屏幕。目前使用的 OLED 驱动为 SSD1306。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/OLED_Screen_Connection.jpg" alt="pir" width={300} height="auto" /></p>


### 虚拟键盘
<p style={{textAlign: 'center'}}><img src="https://www.seeedstudio.com/1-3inch-OLED-128-64-White-FPC-p-6614.html" alt="pir" width={600} height="auto" /></p>
2.7 版本固件现在支持虚拟键盘！你可以在设备上直接输入消息，与其他设备进行通信。请按照[固件烧录教程](https://wiki.seeedstudio.com/cn/get_started_with_meshtastic_wio_tracker_l1/#part-2-firmware-flashing)更新固件。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/version.png" alt="pir" width={600} height="auto" /></p>

## 常见问题（FAQ）

### 设备变砖与 Bootloader 安装

**问题描述：**

设备没有响应，没有 LED 指示灯，无法与 App 配对。如果你在烧录自定义固件后发现设备完全无法启动，你也可以尝试重新安装 bootloader。

:::danger note
在烧录 bootloader 时，请确保线缆连接稳定，并且在烧录过程中**不要**断开连接。
:::

- 步骤 1：[点击这里下载 Bootloader](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/wio_tracker_l1_bootloader.uf2)

- 步骤 2：进入 DFU 模式

  双击 RST 按钮进入 DFU 模式。名为 "Tracker L1" 的磁盘会弹出。

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1RstButton.png" alt="pir" width={300} height="auto" /></p>

- 步骤 3：拷贝 bootloader 文件

  使用下载的 bootloader 文件覆盖磁盘中的所有文件。

- 步骤 4：烧录固件

  完成以上步骤后，你可以按照此[步骤](https://wiki.seeedstudio.com/cn/get_started_with_meshtastic_wio_tracker_l1/#flash-firmware)烧录应用固件。你可能需要[手动进入 DFU 模式](https://wiki.seeedstudio.com/cn/get_started_with_meshtastic_wio_tracker_l1/#unable-to-enter-dfu--entering-dfu-mode-manually)


### 无法进入 DFU 与手动进入 DFU 模式

将设备连接到电脑，双击按下 `Reset` 按钮。黄色 LED 将保持常亮，并且电脑上会出现一个名为 `Tracker L1` 的新 USB 驱动器。

### 退出 DFU 模式

按一次 `Reset` 按钮即可退出 DFU 模式。

 ### 设备自动关机

 #### 问题描述

 - 设备开机后，过一段时间会自动关机或重启。
 - 串口日志运行一段时间后停止。

 这可能是由于在以下状态下手动强制重启或关闭设备导致的：尚未完成消息传输过程、正在配置中等……

 #### 故障排查

[点击这里](https://wiki.seeedstudio.com/cn/get_started_with_meshtastic_wio_tracker_l1/#part-2-firmware-flashing)查看视频。你需要执行一次 flash 擦除，然后重新烧录最新固件。

### 恢复出厂设置
如果你想恢复默认设置，可以执行出厂重置。你可以通过以下两种方式进行出厂重置。

- [点击这里](https://wiki.seeedstudio.com/cn/get_started_with_meshtastic_wio_tracker_l1/#part-2-firmware-flashing)查看视频。你需要执行一次 flash 擦除，然后重新烧录最新固件。

- 在 App 上点击 `Factory Reset` 按钮。设备将自动以出厂配置重启。
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Factory.png" alt="pir" width={400} height="auto" /></p>

### NodeDB 重置

NodeDB 是一个本地数据库，用于存储当前 Mesh 网络中已发现节点的信息，包括：

- **节点 ID**
- **用户名**
- **位置信息**
- **信号信息（SNR）**
- **最后一次看到的时间**

**何时需要重置**

在以下情况下重置 NodeDB：

- 节点列表中包含过期、重复或无效的条目。
- 你移动到了不同的 Mesh 环境，并希望重新发现附近的节点。
- App 中显示的节点信息看起来不正确或不完整。

:::danger
重置 NodeDB 只会清除存储在设备上的节点数据库。它**不会执行出厂重置**，也**不会移除设备的基础配置**。
:::

**方法一：在设备上重置**

1. 打开设备上的菜单。
2. 进入 **Node Actions / Settings**。
3. 选择 **Reset NodeDB**。
4. 确认重置。

**示例界面**

步骤 1：按下设备按键进入菜单。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1nodeDB1.png" alt="Device button to enter the menu" width={300} height="auto" /></p>

步骤 2：在菜单中找到 `Reset NodeDB`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1nodeDB2.png" alt="Reset NodeDB option in the device menu" width={300} height="auto" /></p>

**方法二：在 App 中重置**

1. 打开 App 并连接到目标设备。
2. 进入 **Settings**。
3. 点击 **Device**。
4. 在 **Device Config** 页面滑动到最底部，找到 **Reset NodeDB**。
5. 点击并确认操作。

**App 路径**

`Settings > Device > Reset NodeDB`

**示例界面**

步骤 1：在 **Settings** 页面中打开 **Device**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1nodeDB3.png" alt="Device entry in Settings" width={300} height="auto" /></p>

步骤 2：在 **Device Config** 页面点击 `Reset NodeDB`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1nodeDB4.png" alt="Reset NodeDB button in Device Config" width={300} height="auto" /></p>

:::tip
请注意以下选项之间的区别：

- **Reset NodeDB**：仅清除节点数据库。
- **Factory Reset**：将设备恢复到出厂设置，并移除更多配置数据。
:::

**重置后会发生什么**

执行 **Reset NodeDB** 后，设备会清除当前存储的节点列表。随着设备继续运行，它会再次发现并记录附近的节点。

你可能会观察到以下现象：

- 节点列表可能会暂时变为空或变少。
- 随着设备持续运行，节点会逐渐重新出现。
- 之前存储的历史节点记录将不再可用。

**注意事项**

- 在重置之前，请确保问题确实与节点列表异常有关。
- 如果问题只是节点显示延迟，请先等待一段时间，观察是否会自动恢复。
- 如果在重置 NodeDB 后问题仍然存在，请继续排查设备配置或其他可能原因。
- 请谨慎使用 **Factory Reset**，以避免误删设备配置。

### 信号质量

- **SNR** 反映通信链路的质量。正常设备通常在 -7 dB 以上工作。SNR 低于 -10 dB 的设备表示性能较差。

- **RSSI** 由设备及其周围环境共同决定。正常设备通常在 -110 dBm 以上工作。RSSI 低于 -115 dBm 的设备被认为性能较差。

      为获得最佳信号效果，请在开阔、无遮挡且干扰较少的环境中使用设备。

### 兼容天线

如果你需要为 L1 Pro 更换天线，[点击这里](https://www.seeedstudio.com/LoRa-Antenna-Kit-for-reTerminal-DM-p-5714.html)获取一个。

## 资源
- [Bootloader](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/wio_tracker_l1_bootloader.uf2)
- [(V1) 3D 打印参考文件](https://www.printables.com/model/1355571-wio-tracker-l1-pro-for-meshtastic-enclosure-casing) 
- [(V2 新四向摇杆) 3D 打印参考文件](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1pro%203D%20Enclosure.zip) 
- [L1 外壳设计挑战赛](https://www.hackster.io/contests/SeeedMeshtasticDeviceDesign2025/hardware_applications#challengeNav)
- [外形轮廓文件](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Wio%20Tracker%20L1%20outline.dxf)
- [TELEC 认证](https://files.seeedstudio.com/Seeed_Certificate/documents_certificate/WioL1series-TELEC.pdf)
- [FCC 认证](https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20FCC%20Certification.pdf)
- [CE 认证](http://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20CE%20Certification.pdf)
- [功耗测试与电池寿命计算](http://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20Power%20Consumption%20Test%20and%20Battery%20Life%20Calculation.xlsx)
