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
  date: 09/02/2026
  author: Advent Jiang
createdAt: '2025-06-17'
updatedAt: '2026-08-06'
url: https://wiki.seeedstudio.com/cn/get_started_with_meshtastic_wio_tracker_l1/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

:::tip
Wio Tracker L1 系列共享相同的硬件框架。尽管视频指南是针对 L1 Pro 的，但同样适用于 L1 系列中的所有其他产品。
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

L1 E-Ink 固件的 `latest Alpha firmware` 目前支持四向摇杆。如果你想使用摇杆，请[点击此处](https://wiki.seeedstudio.com/cn/get_started_with_meshtastic_wio_tracker_l1/#part-2-firmware-flashing)升级固件。

#### 菜单栏

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/Menu.jpeg" alt="pir" width={600} height="auto" /></p>
只有 2.7 固件支持菜单栏。如果你想使用菜单栏，请按照[固件烧录教程](https://wiki.seeedstudio.com/cn/get_started_with_meshtastic_wio_tracker_l1/#part-2-firmware-flashing)更新固件。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/version.png" alt="pir" width={600} height="auto" /></p>

#### 蜂鸣器

如果你想打开或关闭蜂鸣器，请先将 `update the firmware` 到 `2.7` 版本。因为只有 2.7 版本固件才有菜单栏。

- 打开蜂鸣器
Setting (icon shaped like the gear) -> Notification -> Buzzer Action -> Disable
- 关闭蜂鸣器
Setting (icon shaped like the gear) -> Notification -> Buzzer Action -> All enabled

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

打开设备电源，点击 `Enter DFU Mode`，会出现一个名为 `Tracker L1` 的串口，点击并连接它，此时应显示一个名为 `Tracker L1` 的驱动器。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/52840-connect.png" alt="pir" width={800} height="auto" /></p>

将 UF2 文件拖入 DFU 驱动器。文件下载完成并且设备重启后，固件就会被烧录完成。

### 打开设备电源

连接 USB 线以激活设备。将电源开关向上拨动以开机。

:::tip
如果按下按键设备没有响应，请先为其充电。不要使用快充充电器。
:::

### 通过 App 连接

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="IOS App">

- 在蓝牙面板中选择目标设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/device_select123.jpeg" alt="pir" width={300} height="auto" /></p>

- 在显示屏上输入验证码，然后点击 `OK` 连接设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/pairing_code123.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

- 点击 `+` 并选择目标设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/an-choose-new.png" alt="pir" width={600} height="auto" /></p>

- 输入验证码（默认验证码为 `123456`），然后点击 `OK` 连接设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/an-click-ok-new.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

### 配置 LoRa

为了开始在 Mesh 网络中通信，你必须设置所在区域。该设置会控制设备使用的频率范围，应根据你所在的地区进行设置。

<Tabs>
<TabItem value="ios" label="IOS App">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/configure_LoRa123.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/an-region-new.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

**区域列表**

|**区域代码**|**描述**|**频率范围 (MHz)**|**占空比 (%)**|**功率限制 (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|未设置|N/A|N/A|N/A|
|US|美国|902.0 - 928.0|100|30|
|EU_868|欧盟 868MHz|869.4 - 869.65|10|27|

更多完整列表请参考 [LoRa Region by Country](https://meshtastic.org/docs/configuration/region-by-country/)。

:::info
**EU_868** 必须遵守每小时 10% 的占空比限制，以滚动 1 小时为周期、每分钟计算一次。当达到限制时，你的设备将停止发射，直到再次被允许。
:::

现在你已经在设备上设置好了 LoRa 区域，可以继续配置任意适合你需求的 [LoRa Configs](https://meshtastic.org/docs/configuration/radio/lora/)。

## 高级配置

### 通过网站连接

如果你想在网站中发送文本消息并与其他节点通信，现在可以将设备连接到 [Meshtastic Website](https://client.meshtastic.org/messages/broadcast/0)。

  步骤 1：打开网站

[Click here](https://client.meshtastic.org/messages/broadcast/0) 进入网站。
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshtasticWeb.png" alt="pir" width={1000} height="auto" /></p>

  步骤 2：添加新设备

    点击 "+ New Connection"。

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteAddNewConnection.png" alt="pir" width={600} height="auto" /></p>

    有两种连接方式，你可以选择自己偏好的方式。

 方法 1：通过蓝牙

    选择蓝牙方式。在弹出的窗口中选择设备 ID。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshWebBluetooth.png" alt="pir" width={1000} height="auto" /></p>

 方法 2：通过串口

    选择串口方式。打开设备管理器查看设备连接的是哪个端口，然后在弹出的窗口中选择该端口。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteSerialConnection.png" alt="pir" width={1000} height="auto" /></p>

    你的设备会显示在列表中。点击进行连接。如果连接成功，你可以直接在网页上看到设备状态。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteConnectionSuccess.png" alt="pir" width={300} height="auto" /></p>

### 配置 GPS

请将 GPS 设置为启用。你可以调整更新间隔和广播间隔，以获取更加实时的位置数据。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshGPS.png" alt="pir" width={500} height="auto" /></p>

对于 IOS，请打开 `Accurate Location`。否则，定位可能会出现偏差。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSAccurateLocation.jpg" alt="pir" width={200} height="auto" /></p>

### 传感器连接

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/SensorConnection.jpg" alt="pir" width={700} height="auto" /></p>

你可以通过 Grove 接口为设备添加传感器。以下传感器已验证与设备上的 Grove 接口兼容。

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

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/temp_sensor123.png" alt="pir" width={900} height="auto" /></p>

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
  [Click here](https://www.seeedstudio.com/2-13-Monochrome-ePaper-Display-with-122x250-Pixels-p-5778.html) 获取兼容的电子墨水屏。

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/E-Ink_Screen_Connection.jpg" alt="pir" width={300} height="auto" /></p>

- OLED 屏幕
[Click here](https://www.seeedstudio.com/1-3inch-OLED-128-64-White-FPC-p-6614.html) 获取兼容的 OLED 屏幕。目前使用的 OLED 驱动为 SSD1306。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/OLED_Screen_Connection.jpg" alt="pir" width={300} height="auto" /></p>

### 虚拟键盘

<p style={{textAlign: 'center'}}><img src="https://www.seeedstudio.com/1-3inch-OLED-128-64-White-FPC-p-6614.html" alt="pir" width={600} height="auto" /></p>
2.7 版本固件现在支持虚拟键盘！你可以直接在设备上输入消息，与其他设备进行通信。请按照 [Flash Firmware Tutorial](https://wiki.seeedstudio.com/cn/get_started_with_meshtastic_wio_tracker_l1/#part-2-firmware-flashing) 更新固件。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/version.png" alt="pir" width={600} height="auto" /></p>

### 配置铃声

进入 `Settings` -> `Ringtone Config`，然后输入你想用于外部通知的 RTTTL 铃声字符串。

<Tabs>
<TabItem value="ios" label="IOS App">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/configure_ringtone123.png" alt="pir" width={500} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/ringtonex1.png" alt="pir" width={900} height="auto" /></p>

</TabItem>
</Tabs>

<Tabs>
<TabItem value="13" label="塞尔达传说：获得道具">

```plain
24:d=16,o=5,b=120:g,c6,d6,2g6
```
</TabItem>

<TabItem value="14" label="超级马里奥主题（短版）">

```plain
24:d=4,o=5,b=100:16e6,16e6,32p,8e6,16c6,8e6,8g6,8p,8g
```
</TabItem>

<TabItem value="15" label="马里奥金币">

```plain
24:d=8,o=6,b=200:b,e7
```
</TabItem>

<TabItem value="16" label="诺基亚铃声">

```plain
24:d=4,o=5,b=180:8e6,8d6,f#,g#,8c#6,8b,d,e,8b,8a,c#,e,2a
```
</TabItem>

<TabItem value="17" label="马里奥能量提升">

```plain
powerup:d=16,o=5,b=200:g,a,b,c6,d6,e6,f#6,g6,a6,b6,2c7
```
</TabItem>

<TabItem value="18" label="莫尔斯电码 CQ">

```plain
24:d=16,o=6,b=120:8c,p,c,p,8c,p,c,4p,8c,p,8c,p,c,p,8c,8p
```
</TabItem>

</Tabs>

## 常见问题

### 设备变砖与 Bootloader 恢复 {#device-bricked--bootloader-installation}

**说明：**

设备没有响应，没有 LED 指示灯，无法与你的 App 配对。如果你在烧录自己的固件后发现设备完全无法启动，你也可以尝试重新安装 bootloader。

bootloader 通过 USB 串口（Serial DFU）使用 `adafruit-nrfutil` 进行恢复。

:::danger note
在烧录过程中，请保持线缆连接稳定，并且**不要**断开连接——即使串口号发生变化也不要断开。
:::

**步骤 1：准备工作**

- 一台 Wio Tracker L1 系列设备（L1 / L1 Pro）
- 一根已知良好的 USB 数据线（不是仅充电线）
- 一台安装了 Python 3 和 pip 的 Windows、macOS 或 Linux 电脑
- bootloader 压缩包：[Click here to download Bootloader](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip) — 不要解压 ZIP；`adafruit-nrfutil` 会直接使用该文件

**步骤 2：安装 adafruit-nrfutil**

<Tabs>
<TabItem value="windows" label="Windows">

检查 Python 3 和 pip 是否可用（如果缺少 pip，请先运行 `python -m ensurepip --upgrade`）：

```
python --version
python -m pip --version
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/00_python_pip_check.png" alt="Check Python and pip on Windows" width={600} height="auto" /></p>

然后进行安装并验证（本指南测试使用的版本为 `0.5.3.post16`）：

```
python -m pip install --user adafruit-nrfutil
adafruit-nrfutil version
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/01_nrfutil_version.png" alt="adafruit-nrfutil version output on Windows" width={600} height="auto" /></p>

</TabItem>

<TabItem value="macos" label="macOS">

```
python3 --version
python3 -m pip install --user adafruit-nrfutil
adafruit-nrfutil version
```

如果缺少 pip，请先运行 `python3 -m ensurepip --upgrade`。

</TabItem>

<TabItem value="linux" label="Linux">

```
python3 --version
python3 -m pip install --user adafruit-nrfutil
adafruit-nrfutil version
```

如果缺少 pip，请先运行 `python3 -m ensurepip --upgrade`。

</TabItem>
</Tabs>

:::note
请始终使用 `adafruit-nrfutil version` 检查版本。不要使用 `adafruit-nrfutil --version`。
:::

**步骤 3：检查串口**

记下设备的串口号——下面的示例会因电脑不同而有所差异：

<Tabs>
<TabItem value="windows" label="Windows">

打开 **设备管理器 → 端口 (COM 和 LPT)**，例如：

```
USB Serial Device (COM43)
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/02_normal_com_port.png" alt="Wio Tracker L1 serial port in Windows Device Manager" width={600} height="auto" /></p>

</TabItem>

<TabItem value="macos" label="macOS">

```
ls /dev/cu.*
```

设备会显示为 `/dev/cu.usbmodemXXXX`。

</TabItem>

<TabItem value="linux" label="Linux">

```
ls /dev/ttyACM*
```

设备通常显示为 `/dev/ttyACM0`；如果没有列出任何设备，也可以尝试 `ls /dev/ttyUSB*`。

</TabItem>
</Tabs>

**步骤 4：烧录 bootloader**

将端口替换为你在步骤 3 中找到的端口：

<Tabs>
<TabItem value="windows" label="Windows">

```
adafruit-nrfutil --verbose dfu serial --package "wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip" -p COM43 -b 115200 --singlebank --touch 1200
```

如果 ZIP 文件不在终端当前文件夹中，请将其完整路径传给 `--package`，例如 `"C:\path\to\wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip"`。

</TabItem>

<TabItem value="macos" label="macOS">

```
adafruit-nrfutil --verbose dfu serial --package "wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip" -p /dev/cu.usbmodemXXXX -b 115200 --singlebank --touch 1200
```

</TabItem>

<TabItem value="linux" label="Linux">

```
adafruit-nrfutil --verbose dfu serial --package "wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip" -p /dev/ttyACM0 -b 115200 --singlebank --touch 1200
```

</TabItem>
</Tabs>

**步骤 5：处理串口变更**

`--touch 1200` 会将设备重新启动到 DFU 模式，因此串口通常会发生变化，第一个命令可能会以类似下面这样的回溯结束：

```
Touched serial port COM43
...
FileNotFoundError: could not open port 'COM43'
```

这并不是失败 —— 设备已经在一个新的端口上进入 DFU 模式。例如，在测试的 Windows 电脑上，它从 `COM43` 变成了 `COM45`：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/03_dfu_com_port.png" alt="Windows 设备管理器重新枚举后 DFU 串口" width={600} height="auto" /></p>

**保持 USB 线缆连接。** 找到新的端口（刷新 **设备管理器 → 端口 (COM 和 LPT)**，或重新运行 `ls /dev/cu.*` / `ls /dev/ttyACM*`），然后在新端口上再次烧录，这一次不要使用 `--touch 1200`：

<Tabs>
<TabItem value="windows" label="Windows">

```
adafruit-nrfutil --verbose dfu serial --package "wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip" -p COM45 -b 115200 --singlebank
```

</TabItem>

<TabItem value="macos" label="macOS">

```
adafruit-nrfutil --verbose dfu serial --package "wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip" -p /dev/cu.usbmodemXXXX -b 115200 --singlebank
```

</TabItem>

<TabItem value="linux" label="Linux">

```
adafruit-nrfutil --verbose dfu serial --package "wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip" -p /dev/ttyACM0 -b 115200 --singlebank
```

</TabItem>
</Tabs>

**步骤 6：确认结果**

当输出以 `Device programmed.` 结尾时，说明烧录成功：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/04_flash_success.png" alt="adafruit-nrfutil 输出以 Device programmed 结尾" width={600} height="auto" /></p>

之后，你的电脑上会出现一个 UF2 盘（截图来自测试的 Windows 电脑）。它的卷标会随 bootloader 构建版本而变化 —— 测试设备上显示为 `XIAO-BOOT` —— 这并不是通过/失败的判断标准；不要根据驱动器名称或 `INFO_UF2.TXT` 来判断结果：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/05_uf2_drive.png" alt="bootloader 烧录后出现 UF2 盘" width={600} height="auto" /></p>

**步骤 7：重新安装应用固件**

:::warning
恢复 bootloader 并不会重新安装应用固件 —— 在你再次烧录之前，设备仍然没有可正常工作的固件。
:::

完成上述步骤后，按照 [Flash Firmware](https://wiki.seeedstudio.com/cn/get_started_with_meshtastic_wio_tracker_l1/#flash-firmware) 来烧录应用固件。

**故障排查**

- 安装后无法识别 `adafruit-nrfutil`：Python 用户脚本目录没有加入 PATH（Windows 上为 `Scripts`，macOS/Linux 上为你主目录下的 `bin`）—— 将其加入 PATH，或在安装时不要使用 `--user`。
- 端口忙 / 访问被拒绝：关闭串口监视器、网页烧录器标签页、Arduino IDE 或其他占用该端口的程序。
- 在 `Touched serial port ...` 之后出现 `FileNotFoundError: could not open port ...`：设备已经在新的端口上进入 DFU 模式 —— 请参考步骤 5。
- 无法进入 DFU 模式：参见 [Unable to enter DFU & Entering DFU Mode Manually](https://wiki.seeedstudio.com/cn/get_started_with_meshtastic_wio_tracker_l1/#unable-to-enter-dfu--entering-dfu-mode-manually)。

**手动 DFU 恢复**

如果 `--touch 1200` 无法让设备进入 DFU 模式（例如固件完全无响应），请手动进入：连接设备，双击按下 `Reset`（黄色 LED 常亮），像步骤 3 那样找到 DFU 串口，然后在该端口上运行步骤 5 的命令，但不要加 `--touch 1200`。成功的表现与步骤 6 相同。

### 无法进入 DFU & 手动进入 DFU 模式

将设备连接到电脑并双击 `Reset` 按钮 —— 黄色 LED 常亮，你的电脑上会出现一个 DFU 串口。

要在此模式下烧录 bootloader，请按照 [Device Bricked & Bootloader Recovery](https://wiki.seeedstudio.com/cn/get_started_with_meshtastic_wio_tracker_l1/#device-bricked--bootloader-installation) 操作，但跳过 `--touch 1200` —— 设备已经处于 DFU 模式。

### 退出 DFU 模式

按一次 `Reset` 按钮即可退出 DFU 模式。

### 无法在主信道上通信

如果设备无法与附近节点通信或发送消息，首先检查 LoRa 区域和调制解调器预设是否与周围节点一致。你还应检查默认 **PSK** 是否被更改。主信道上使用不同的 PSK 会导致设备无法与该信道上的其他节点通信。

发现此问题的最简单方法是通过手机 App。打开 App，连接到目标设备，然后进入 `Settings` -> `Channels`。选择主信道并检查 **PSK** 值。如果它与周围节点不同，请将其更新为相同的 PSK，并保存信道设置。

<Tabs>
<TabItem value="ios" label="IOS App">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/communicate_problems_ios.png" alt="在 iOS App 中检查主信道 PSK" width={500} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/communicate_problem_and.png" alt="在 Android App 中检查主信道 PSK" width={900} height="auto" /></p>

</TabItem>
</Tabs>

**解决方案**

如果你不确定修改了哪些设置，可以按照 [Factory Reset](https://wiki.seeedstudio.com/cn/get_started_with_meshtastic_wio_tracker_l1/#factory-reset) 指南将设备恢复为默认设置。如果只更改了 PSK，请将其改回 `AQ==`。

### 设备自动关机

#### 描述

- 设备开机后，过一段时间会自动关机或重启。
- 串口日志运行一段时间后停止。

 这可能是因为在设备处于以下状态时，手动强制重启或关机导致的：尚未完成消息发送过程、正在配置中……

#### 故障排查

[click here](https://wiki.seeedstudio.com/cn/get_started_with_meshtastic_wio_tracker_l1/#part-2-firmware-flashing) 查看视频。你需要执行一次 flash 擦除，然后重新烧录最新固件。

### 恢复出厂设置

如果你想恢复为默认设置，可以执行出厂重置。你有两种方式可以进行出厂重置。

- [click here](https://wiki.seeedstudio.com/cn/get_started_with_meshtastic_wio_tracker_l1/#part-2-firmware-flashing) 查看视频。你需要执行一次 flash 擦除，然后重新烧录最新固件。

- 在 App 中点击 `Factory Reset` 按钮。设备会自动以出厂配置重启。
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Factory.png" alt="pir" width={400} height="auto" /></p>

### 私信发送失败

#### NodeDB 重置

NodeDB 是本地数据库，用于存储当前 Mesh 网络中已发现节点的信息。如果你遇到无法与某个节点通信的情况，可能是因为你的 NodeDB 中保存了该节点的过期信息，你需要对其进行更新。

打开 App 并连接到目标设备。进入 **Settings**->**Device**->**Device Config**->**Reset NodeDB**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/sending_failed123.png" alt="App 中的设备设置和 Reset NodeDB 按钮" width={600} height="auto" /></p>

#### 交换用户信息

每个节点都会定期发送自己的节点信息，使 Mesh 中的其他节点能够“看到”和“识别”它。两个节点需要互相交换各自的节点信息，才能彼此通信。如果你无法与列表中的某个节点收发私信，可以在 App 中手动触发它们交换信息。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/USERINFO.png" alt="设置中的设备条目" width={300} height="auto" /></p>

#### 重新生成私钥

两个节点需要彼此知道对方的私钥，才能相互通信。如果某个节点在私信发送中持续失败，尝试为它重新生成私钥。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/RenerateKey.png" alt="设置中的设备条目" width={600} height="auto" /></p>

重启故障设备以使配置生效。

:::note
重新生成密钥后，其他设备需要重新与该节点连接。因此，最好在其他设备的节点列表中删除该节点。
:::

### 信号质量

- **SNR** 反映通信链路的质量。正常设备通常在 -7 dB 以上工作。SNR 低于 -10 dB 的设备表示性能较差。

- **RSSI** 由设备及其周围环境共同决定。正常设备通常在 -110 dBm 以上工作。RSSI 低于 -115 dBm 的设备被认为性能较差。

      为获得最佳信号效果，请在开阔、无遮挡且干扰最小的环境中使用设备。

### 兼容天线

如果你需要为 L1 Pro 更换天线，[click here](https://www.seeedstudio.com/LoRa-Antenna-Kit-for-reTerminal-DM-p-5714.html) 获取一个。

## 资源

- [Bootloader（串口 DFU 包）](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip)
- [(V1) 3D 打印参考文件](https://www.printables.com/model/1355571-wio-tracker-l1-pro-for-meshtastic-enclosure-casing)
- [(V2 新四向摇杆) 3D 打印参考文件](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1pro%203D%20Enclosure.zip)
- [L1 外壳设计挑战赛](https://www.hackster.io/contests/SeeedMeshtasticDeviceDesign2025/hardware_applications#challengeNav)
- [外形轮廓文件](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Wio%20Tracker%20L1%20outline.dxf)
- [TELEC 认证](https://files.seeedstudio.com/Seeed_Certificate/documents_certificate/WioL1series-TELEC.pdf)
- [FCC 认证](https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20FCC%20Certification.pdf)
- [CE 认证](http://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20CE%20Certification.pdf)
- [功耗测试与电池寿命计算](http://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20Power%20Consumption%20Test%20and%20Battery%20Life%20Calculation.xlsx)


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