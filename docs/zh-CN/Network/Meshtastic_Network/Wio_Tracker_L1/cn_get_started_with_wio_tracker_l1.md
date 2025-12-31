---
description: Wio Tracker L1 系列入门指南
title:  Wio Tracker L1 入门指南
keywords:
- Meshtastic
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-l1.webp
slug: /cn/get_started_with_meshtastic_wio_tracker_l1
sidebar_position: 2
last_update:
  date: 12/24/2025
  author: Michelle Huang
---

:::tip
Wio Tracker L1 系列共享相同的硬件框架。虽然视频指南是针对 L1 Pro 的，但它适用于 L1 系列中的所有其他产品。
:::
## 视频教程

### 第一部分 开箱

首次使用 L1、L1 Lite 或 L1 E-Ink 型号时，连接 USB 电源后，向上拨动电源开关以开机。

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/Wi_YmE76YcY?si=Ad-pUhle5X9QppPR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### 第二部分 固件刷写

:::caution note
请`不要使用 NRF-OTA` 来更新固件，这可能会导致设备完全损坏。
:::

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/hcjai4J1894?si=S_jaEfXVThWXscVJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### 第三部分 设备使用

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/Q97w2ompPtI?si=yLbAgE4cBbT6NbHS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

#### 四向摇杆
L1 E-Ink 固件目前不支持四向摇杆。如果您想使用摇杆，请购买其他型号。

#### 菜单栏
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/Menu.jpeg" alt="pir" width={600} height="auto" /></p>
只有 2.7 固件支持菜单栏。如果您想使用菜单栏，请按照[刷写固件教程](http://localhost:3000/get_started_with_meshtastic_wio_tracker_l1/#flash-firmware)来更新固件。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/version.png" alt="pir" width={600} height="auto" /></p>

#### 蜂鸣器

如果您想开启或关闭蜂鸣器，请先`将固件更新`到 `2.7` 版本。因为只有 2.7 版本固件才有菜单栏。
- 开启蜂鸣器
Setting（齿轮形状的图标）-> Notification -> Buzzer Action -> Disable
- 关闭蜂鸣器
Setting（齿轮形状的图标）-> Notification -> Buzzer Action -> All enabled

<div class="table-center">
<iframe width="350" height="450" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/buzzer%20_turnonturnoff.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### 第四部分 手机连接

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/OFtUwN3z0tI?si=9zr3j-hLuoj0-CXi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### 第五部分 不同状态

<div class="video-container">
<iframe width="700" height="395" src="https://www.youtube.com/embed/eZa8kfUD2e4?si=3Fe_30obcercIXXO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 入门指南

:::danger note
当设备处于以下状态时，请不要手动重启或关闭设备。否则设备可能会损坏。
1. 未完成消息传输过程
2. 正在配置中
:::

### 刷写固件

:::caution note
请`不要使用 NRF-OTA` 来更新固件，这可能会导致设备完全损坏。
:::

访问 [Meshtastic Web Flasher](https://flasher.meshtastic.org/)。

对于 L1、L1 Lite 和 L1 Pro，选择目标设备为 `Seeed Wio Tracker L1` 并选择最新固件，然后点击 `Flash`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/select-wio-tracker.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-wio-tracker.png" alt="pir" width={800} height="auto" /></p>

对于 L1 E-Ink，选择目标设备为 `Seeed Wio Tracker L1 E-Ink` 并选择最新固件，然后点击 `Flash`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/img/E-Ink%20Flash%201.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src=" https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/img/E-Ink%20Flash%202.png" alt="pir" width={800} height="auto" /></p>


打开设备，点击 `Enter DFU Mode`，会出现一个名为 `Tracker L1` 的串口，点击并连接它，应该会显示一个名为 `Tracker L1` 的驱动器。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/52840-connect.png" alt="pir" width={800} height="auto" /></p>

将 UF2 文件拖拽到 DFU 驱动器。文件下载完成后固件应该会被刷写，设备会重启。

### 开启设备

连接 USB 线缆激活设备。向上拨动电源开关以开机。

:::tip
如果按下按钮时设备没有响应，请先充电。不要使用快充充电器。
:::

### 通过应用连接

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="IOS 应用">

- 在蓝牙面板上选择目标设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- 输入显示屏上的代码，然后点击 `OK` 连接设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android 应用">

- 点击 `+` 并选择目标设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>

- 输入代码（默认代码是 `123456`），然后点击 `OK` 连接设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

### 通过网站连接

如果您想在网站上发送文本消息并与其他节点通信，您现在可以将设备连接到 [Meshtastic Website](https://client.meshtastic.org/messages/broadcast/0)。

  步骤 1：打开网站

[点击这里](https://client.meshtastic.org/messages/broadcast/0) 前往网站。
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshtasticWeb.png" alt="pir" width={1000} height="auto" /></p>

  步骤 2：添加新设备

    点击 "+ New Connection"。

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteAddNewConnection.png" alt="pir" width={600} height="auto" /></p>

    有两种连接方式。您可以选择您喜欢的方法。

 方法 1：通过蓝牙

    选择蓝牙方法。在弹出窗口中选择设备 ID。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshWebBluetooth.png" alt="pir" width={1000} height="auto" /></p>

 方法 2：通过串口

    选择串口方法。打开设备管理器查看设备连接到哪个端口。在弹出窗口中选择该端口。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteSerialConnection.png" alt="pir" width={1000} height="auto" /></p>

    您的设备将显示在列表中。点击连接。如果连接成功，您可以直接在网站上看到设备状态。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteConnectionSuccess.png" alt="pir" width={300} height="auto" /></p>


### 配置 LoRa

为了开始通过网格进行通信，您必须设置您的区域。此设置控制您的设备使用的频率范围，应根据您的地理位置进行设置。

<Tabs>
<TabItem value="ios" label="IOS 应用">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android 应用">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-region.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

**区域列表**

|**区域代码**|**描述**|**频率范围 (MHz)**|**占空比 (%)**|**功率限制 (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|未设置|N/A|N/A|N/A|
|US|美国|902.0 - 928.0|100|30|
|EU_868|欧盟 868MHz|869.4 - 869.65|10|27|

参考 [按国家划分的 LoRa 区域](https://meshtastic.org/docs/configuration/region-by-country/) 获取更全面的列表。

:::info
**EU_868** 必须遵守每小时 10% 的占空比限制，基于滚动 1 小时计算每分钟。如果达到限制，您的设备将停止传输，直到再次被允许。
:::

现在您已经在设备上设置了 LoRa 区域，您可以继续配置任何 [LoRa Configs](https://meshtastic.org/docs/configuration/radio/lora/) 以满足您的需求。

### 配置 GPS

请设置启用 GPS。您可以调整更新间隔和广播间隔以获得更及时的位置信息。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshGPS.png" alt="pir" width={500} height="auto" /></p>

对于 iOS，请开启 `Accurate Location`。否则，定位可能会出现偏差。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSAccurateLocation.jpg" alt="pir" width={200} height="auto" /></p>


### 传感器连接

您可以通过 Grove 接口向设备添加传感器。以下传感器已验证与设备上的 Grove 接口兼容。

<table>
  <tr>
    <th colspan="2">传感器类型</th>
    <th colspan="1">传感器型号</th>
  </tr>
  <tr>
    <td rowspan="4">环境传感器</td>
    <td>压力</td>
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
    <td>温度、湿度和压力</td>
    <td>[BME280](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html)</td>
  </tr>
  <tr>
    <td rowspan="2">其他</td>
    <td>心率和血氧</td>
    <td>[MAX30102](https://www.seeedstudio.com/MAXREFDES117-HEART-RATE-AND-PULSE-OXIMETRY-MONITOR-p-2762.html)</td>
  </tr>
  <tr>
    <td>I2C 键盘</td>
    <td>CardKB</td>
  </tr>
</table>

### 屏幕连接
 - E-Ink 屏幕
  [点击这里](https://www.seeedstudio.com/2-13-Monochrome-ePaper-Display-with-122x250-Pixels-p-5778.html) 获取兼容的 E-Ink 屏幕。
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/E-Ink_Screen_Connection.jpg" alt="pir" width={300} height="auto" /></p>

- OLED 屏幕
[点击这里](https://www.seeedstudio.com/1-3inch-OLED-128-64-White-FPC-p-6614.html) 获取兼容的 OLED 屏幕。当前的 OLED 驱动器是 SSD1306。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/OLED_Screen_Connection.jpg" alt="pir" width={300} height="auto" /></p>


### 虚拟键盘
<p style={{textAlign: 'center'}}><img src="https://www.seeedstudio.com/1-3inch-OLED-128-64-White-FPC-p-6614.html" alt="pir" width={600} height="auto" /></p>
2.7 版本固件现在支持虚拟键盘！您可以直接在设备上输入消息与其他设备通信。按照 [刷写固件教程](http://localhost:3000/get_started_with_meshtastic_wio_tracker_l1/#flash-firmware) 更新固件。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/version.png" alt="pir" width={600} height="auto" /></p>

## 常见问题

### 设备变砖和引导程序安装

**描述：**

设备无响应，没有 LED，无法与您的应用配对。如果您发现设备在刷写自己的固件后完全死机，您也可以尝试重新安装引导程序。

:::danger note
当您刷写引导程序时，请确保电缆连接稳定，在刷写过程中**不要**断开连接。
:::

- 步骤 1：[点击这里下载引导程序](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/wio_tracker_l1_bootloader.uf2)

- 步骤 2：进入 DFU 模式

  双击 RST 按钮进入 DFU 模式。磁盘名称 "Tracker L1" 将弹出。

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1RstButton.png" alt="pir" width={300} height="auto" /></p>

- 步骤 3：粘贴引导程序文件

  用下载的引导程序文件覆盖磁盘中的所有文件。

- 步骤 4：刷写固件

  当您完成上述步骤后，您可以按照这个 [步骤](https://wiki.seeedstudio.com/cn/get_started_with_meshtastic_wio_tracker_l1/#flash-firmware) 刷写应用固件。您可能需要 [手动进入 DFU 模式](https://wiki.seeedstudio.com/cn/get_started_with_meshtastic_wio_tracker_l1/#unable-to-enter-dfu--entering-dfu-mode-manually)


### 无法进入 DFU 和手动进入 DFU 模式

将设备连接到您的 PC，双击 `Reset` 按钮。黄色 LED 将保持常亮，您的 PC 上将出现一个名为 `Tracker L1` 的新 USB 驱动器。

### 退出 DFU 模式

按一次 `Reset` 按钮退出 DFU 模式。

 ### 设备自动关机

 #### 描述

 - 设备开机后，会在一段时间后自动关机或重启。
 - 串口日志运行一段时间后停止。

 这可能是由于在设备处于以下状态时手动强制重启或关闭设备造成的：未完成消息传输过程、正在配置......

 #### 故障排除

[点击这里](https://wiki.seeedstudio.com/cn/get_started_with_meshtastic_wio_tracker_l1/#part-2-firmware-flashing) 查看视频。您需要执行闪存擦除，然后重新刷写最新固件。

### 恢复出厂设置
如果您想恢复到默认设置，您可以进行恢复出厂设置。有两种方法可以进行恢复出厂设置。

- [点击这里](https://wiki.seeedstudio.com/cn/get_started_with_meshtastic_wio_tracker_l1/#part-2-firmware-flashing) 查看视频。您需要执行闪存擦除，然后重新刷写最新固件。

- 在应用中点击 `Factory Reset` 按钮。设备将自动使用出厂配置重启。
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Factory.png" alt="pir" width={400} height="auto" /></p>


### 信号质量

- **SNR** 反映通信链路的质量。正常设备通常在 -7 dB 以上运行。SNR 低于 -10 dB 的设备表示性能较差。

- **RSSI** 由设备及其周围环境共同决定。正常设备通常在 -110 dBm 以上运行。RSSI 低于 -115 dBm 的设备被认为性能较差。

      为了获得最佳信号效果，请在开阔、无遮挡、干扰最小的区域使用设备。

### 兼容天线

如果您需要为 L1 Pro 更换天线，[点击这里](https://www.seeedstudio.com/LoRa-Antenna-Kit-for-reTerminal-DM-p-5714.html) 获取一个。

## 资源
- [引导程序](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/wio_tracker_l1_bootloader.uf2)
- [(V1) 3D 打印参考文件](https://www.printables.com/model/1355571-wio-tracker-l1-pro-for-meshtastic-enclosure-casing) 
- [(V2 新四向摇杆) 3D 打印参考文件](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1pro%203D%20Enclosure.zip) 
- [L1 外壳设计挑战赛](https://www.hackster.io/contests/SeeedMeshtasticDeviceDesign2025/hardware_applications#challengeNav)
- [轮廓文件](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Wio%20Tracker%20L1%20outline.dxf)
- [TELEC 认证](https://files.seeedstudio.com/Seeed_Certificate/documents_certificate/WioL1series-TELEC.pdf)
- [FCC 认证](https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20FCC%20Certification.pdf)
- [CE 认证](http://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20CE%20Certification.pdf)
- [功耗测试和电池寿命计算](http://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20Power%20Consumption%20Test%20and%20Battery%20Life%20Calculation.xlsx)