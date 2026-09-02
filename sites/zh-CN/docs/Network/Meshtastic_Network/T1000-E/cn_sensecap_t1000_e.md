---
description: 使用 SenseCAP Card Tracker T1000-E 搭配 Meshtastic 的入门指南
title: T1000-E Tracker 入门指南
keywords:
  - Tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /sensecap_t1000_e
sku: 114993369
sidebar_position: 2
last_update:
  date: 09/01/2026
  author: Advent Jiang
createdAt: '2024-07-24'
updatedAt: '2026-08-06'
url: https://wiki.seeedstudio.com/cn/sensecap_t1000_e/
---
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

:::danger note
当设备处于以下状态时，请不要手动重启或关闭电源。否则设备可能会损坏。

1. 尚未完成消息传输过程
2. 正在配置中
:::

## 视频教程

### 第 1 部分：开箱与基础设置

<div class="video-container">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/9sCHpWPSPcw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### 第 2 部分：状态指示说明

<div class="video-container">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/8p34S_9DDEQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### 第 3 部分：刷写新固件

:::caution note
在刷写固件之前，请确保你购买的是 `T1000-E for Meshtastic`。请不要将该固件刷写到其他不支持 Meshtastic 的追踪器型号上。请`不要使用 NRF-OTA` 更新固件，否则可能导致设备完全损坏。
:::

<div class="video-container">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/li6DTOeXK3M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### 第 4 部分：故障排查指南

<div class="video-container">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/iWahTuXwYnU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## 入门指南

下载 `Meshtastic` 应用：

- [IOS App](https://meshtastic.org/docs/category/apple-apps/)
- [Android App](https://meshtastic.org/docs/category/android-app/)

### 打开设备电源

短按一次按键即可打开设备电源，会有一个上升的提示音旋律，LED 指示灯会常亮约 1 秒。

:::tip
如果按下按键后设备没有响应，请先为其充电。不要使用快充充电器。
:::

### 通过 App 连接

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="IOS App">

- 在蓝牙面板中选择目标设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/device_select123.jpeg" alt="pir" width={300} height="auto" /></p>

- 输入配对码（默认配对码为 `123456`），然后点击 `OK` 连接设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/pairing_code123.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

- 点击 `+` 并选择目标设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/an-choose-new.png" alt="pir" width={600} height="auto" /></p>

- 输入配对码（默认配对码为 `123456`），然后点击 `OK` 连接设备。

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

|**Region Code**|**Description**|**Frequency Range (MHz)**|**Duty Cycle (%)**|**Power Limit (dBm)**|
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

如果你想在网页端发送文本消息并与其他节点通信，现在可以将设备连接到 [Meshtastic 网站](https://client.meshtastic.org/messages/broadcast/0)。

  步骤 1：打开网站

[点击这里](https://client.meshtastic.org/messages/broadcast/0) 进入网站。
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshtasticWeb.png" alt="pir" width={1000} height="auto" /></p>

  步骤 2：添加新设备

    点击 "+ New Connection"。

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteAddNewConnection.png" alt="pir" width={600} height="auto" /></p>

    有两种连接方式，你可以选择自己偏好的方式。

 方法 1：通过蓝牙

    选择蓝牙方式。在弹出的窗口中选择设备 ID。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshWebBluetooth.png" alt="pir" width={1000} height="auto" /></p>

 方法 2：通过串口

    选择串口方式。打开设备管理器查看设备连接到哪个端口，然后在弹出的窗口中选择该端口。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteSerialConnection.png" alt="pir" width={1000} height="auto" /></p>

    你的设备会显示在列表中。点击进行连接。如果连接成功，你可以在网页上直接看到设备状态。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteConnectionSuccess.png" alt="pir" width={300} height="auto" /></p>

### 配置传感器

|Sensor|Description|
|-|-|
|Temperature|✅|
|Light|当前 App 暂不支持|
|Accelerometer|敬请期待|

**温度传感器配置**

<Tabs>
<TabItem value="ios" label="IOS App">

进入 `Settings` -> `Telemetry(Sensors)` -> 启用传感器。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/temp_sensor123.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

进入 `Settings` -> `Telemetry(Sensors)` -> 启用传感器。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/temp-an-new.png" alt="pir" width={500} height="auto" /></p>

</TabItem>
</Tabs>

**蜂鸣器与 LED 配置**

||类型|输出引脚|
|-|-|-|
|蜂鸣器|PWM 蜂鸣器|25|
|LED|-|24|

<Tabs>
<TabItem value="ios" label="IOS App">

进入 `Settings` -> `External Notification` -> 启用 `GPIO` -> 设置 `Output Pin GPIO`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/buzzer123.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

进入 `Settings` -> `External Notification` -> 启用 `GPIO` -> 设置 `Output Pin GPIO`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/buzzer-an.png" alt="pir" width={500} height="auto" /></p>

</TabItem>
</Tabs>

更多详情请查看 [External Notification Config](https://meshtastic.org/docs/configuration/module/external-notification/)。

:::tip
在你更新设备配置后，设备会重启，这可能需要一些时间。
:::

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

<TabItem value="14" label="超级马里奥主题曲（短版）">

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

### 配置 GPS

请将 GPS 设置为启用状态。你可以调整更新间隔和广播间隔，以获取更加实时的位置数据。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshGPS.png" alt="pir" width={500} height="auto" /></p>

对于 IOS，请打开 `Accurate Location`。否则定位可能会出现偏差。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSAccurateLocation.jpg" alt="pir" width={200} height="auto" /></p>

### 配置蜂鸣器

蜂鸣器默认启用。如果你想禁用蜂鸣器，请将 `Alert Message buzzer`、`Alert bell buzzer` 和 `Use PWM bizzer` 设置为下图所示。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/buzzer.png" alt="pir" width={200} height="auto" /></p>

## 烧录固件

### 检查固件版本

进入 `Settings` -> `Firmware Updates`，检查当前固件版本。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/check_firmware123.png" alt="pir" width={400} height="auto" /></p>

### <div class="danger">⚠️请勿烧录以下固件</div>

:::danger
请勿烧录除 T1000-E 固件以外的其他固件，否则可能导致设备死机。
:::

以下固件会使你的设备变砖：

- nrf52_promicro_diy_tcxo<br/>
- nrf52_promicro_diy_xtal<br/>
- Dongle_nRF52840-pca10059-v1<br/>
- feather_diy<br/>
- TWC_mesh_v4<br/>
- wio-sdk-wm1110<br/>
- wio-tracker-wm1110<br/>
- xiao_ble

### 烧录应用固件

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Flash%20Firmware.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>
:::caution note
在烧录固件之前，请确保你购买的是 `T1000-E for Meshtastic`。请不要将固件烧录到其他不支持 Meshtastic 的追踪器型号上。请 `不要使用 NRF-OTA` 更新固件，否则可能导致设备完全损坏。
:::
#### 步骤 1：进入 DFU 模式

<Tabs>
<TabItem value="method1" label="方法 1">

访问 [Meshtastic Web Flasher](https://flasher.meshtastic.org/)。

将设备连接到电脑，在设备中选择 `Seeed Card Tracker T1000-E`，并选择最新固件，然后点击 `Flash`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-2.png" alt="pir" width={800} height="auto" /></p>

点击 `Enter DFU Mode`，会出现一个名为 `T1000-E xxx` 的串口，点击并连接它，绿色 LED 会常亮，并且会出现一个名为 `T1000-E` 的驱动器。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-serial.png" alt="pir" width={800} height="auto" /></p>

</TabItem>

<TabItem value="method2" label="方法 2">

将 USB 线连接到电脑，按住设备按键，然后**快速**插入充电线两次，绿色 LED 会常亮，并且会出现一个名为 `T1000-E` 的驱动器。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu-mode2.gif" alt="pir" width={600} height="auto" /></p>

</TabItem>
</Tabs>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/e-driver.png" alt="pir" width={800} height="auto" /></p>

#### 步骤 2：擦除 Flash

:::caution note
在烧录固件之前，请先烧录擦除固件！
:::

点击 `trash` 图标。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/erase1.png" alt="pir" width={800} height="auto" /></p>

下载擦除固件并复制到驱动器中。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/erase-uf2.png" alt="pir" width={800} height="auto" /></p>

此过程可能需要一些时间，等待驱动器消失，然后打开串口监视器以完成擦除过程。

#### 步骤 3：烧录固件

选择最新固件，并下载 `UF2` 文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/down-uf2.png" alt="pir" width={800} height="auto" /></p>

将 UF2 文件复制到 DFU 驱动器中。文件复制完成并设备重启后，固件就会被烧录。

## 常见问题

### 如何查看设备名称

 访问 [Meshtastic Web Flasher](https://flasher.meshtastic.org/)。<br/>

 点击 `Open Serial Monitor`，将设备连接到电脑，查看串口日志，关键字为 `using nodenum`。

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/monitor2.png" alt="pir" width={800} height="auto" /></p>

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/device-name3.png" alt="pir" width={800} height="auto" /></p>

### 如何重启设备

 按住按键，然后连接充电线。

## 故障排查

### 设备无法开机

- 当 LED 指示灯和蜂鸣器未激活时，设备可能看起来像是关机状态。在执行以下步骤之前，建议先 `检查以下参数`：

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/LEDLightEnable.png" alt="pir" width={600} height="auto" /></p>

- 使用已知正常的 USB 线持续 `为设备充电` 1–2 小时，以确保电池有足够电量唤醒系统。

:::note
锂电池即使在关机状态下也会缓慢自放电。长时间闲置存放的设备可能会因此深度放电，导致无法开机或在启动过程中不断重启。这是锂电池设备的常见现象，并非 T1000-E 的缺陷。
:::

- 如果设备长时间闲置且无法启动，请连续充电最长可达 24 小时，然后再尝试开机。24 小时充电仅用于恢复深度放电的电池，而不是正常充电。

- 如果在启动过程中仍然不断重启，请断开电缆，让设备闲置约 7 天，然后再次充电并尝试开机。

- 为避免深度放电，请不要在电池电量耗尽或非常低的情况下长时间存放设备；当电量低于 20% 时请及时充电，并在长期存放期间定期补电。

- 如果设备在充电后仍无响应，请按如下步骤 `执行硬重置`：拔下 USB 线。按住按键，然后在保持按键按下的同时插入 USB 线。大约按住 3 秒后松开。这将强制系统重置。

- 如果仍然无效，尝试 `重新安装引导加载程序`。将 USB 线连接到电脑。按住设备按键，然后将设备连接到电脑，查看电脑中是否弹出一个磁盘。如果有，请按照 [re-install the bootloader](https://wiki.seeedstudio.com/cn/sensecap_t1000_e/#flash-the-bootloader) 重新安装引导加载程序。

### 设备卡在启动循环中

**现象说明：**

设备会反复重启，串口会不断连接和断开。

**解决方案：**

:::note
如果设备长时间未使用，深度放电的电池也可能导致启动时反复重启。请先尝试在 [Device never turns on](https://wiki.seeedstudio.com/cn/sensecap_t1000_e/#device-never-turns-on) 中的电池恢复步骤，再进行下面的固件恢复。
:::

- 步骤 1：尝试手动进入 DFU 模式：按住设备按键，然后**快速**插入充电线两次，绿色 LED 会常亮。

:::note
要成功进入 DFU 模式，需要快速完成此操作。你可能需要尝试多次。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu-mode2.gif" alt="pir" width={600} height="auto" /></p>

- 步骤 2：[Erase Flash](https://wiki.seeedstudio.com/cn/sensecap_t1000_e/#step-2-flash-erase)。

- 步骤 3：[Flash Firmware](https://wiki.seeedstudio.com/cn/sensecap_t1000_e/#step-3-flash-firmware)。

### 设备变砖

#### 现象说明

设备无响应，没有 LED 指示灯，无法与 App 配对。

**1）设备仍然可以进入 DFU 模式，则尝试烧录引导加载程序。**

#### 烧录引导加载程序

- [Bootloader download](https://files.seeedstudio.com/wiki/SenseCAP/lorahub/t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip)

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash%20bootloader.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::danger note
在烧录引导加载程序时，请确保线缆连接稳定，并且在烧录过程中 **不要** 断开连接。
:::

**步骤 1：安装 Adafruit-nrfutil**

对于 Windows 用户，同时按下 "Win" 键和 "r" 键，然后在弹出的窗口中输入 "cmd"，按下 "Enter"。这样可以打开命令行。

对于 Mac 用户，同时按下 "Command" 键和 "Space" 键，以打开 Spotlight。然后输入 "termial"，按下 "Return"。这样可以打开命令行。

**前置条件**

- [Python3](https://www.python.org/downloads/)
- [pip3](https://pip.pypa.io/en/stable/installation/)

在命令行中检查 python 和 pip 是否已成功安装。

```
python --version
```

```
python -m pip --version
```

然后应该会出现 "Python xxx" 和 "pip xxx"。如果没有，请尝试重新安装 Python。

<Tabs>
<TabItem value="pypi" label="从 PyPI 安装">

这是推荐的方法，用于安装最新版本：

```
pip3 install --user adafruit-nrfutil
```

检查安装路径：

```
python -m pip show adafruit-nrfutil
```

这是安装位置：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/location.png" alt="pir" width={600} height="auto" /></p>

对于 Windows 用户，你可能需要手动添加该路径。复制上一步显示的安装位置。然后按如下方式添加：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/AddPath.png" alt="pir" width={1000} height="auto" /></p>

</TabItem>

<TabItem value="sou" label="从源码安装">

如果你在使用 PyPi 安装时遇到问题，或者想要修改该工具，请使用此方法。首先克隆此仓库并进入其文件夹。

```
git clone https://github.com/adafruit/Adafruit_nRF52_nrfutil.git
cd Adafruit_nRF52_nrfutil
```

注意：以下命令使用 `python3`，但是如果你在 Windows 上，可能需要将其改为 `python`，因为 Windows 上安装的 python 3.x 仍然使用 python.exe 这个名称。

要在你的主目录用户空间中安装：

```
pip3 install -r requirements.txt
python3 setup.py install
```

如果在运行 `pip3 install` 时遇到权限错误，说明你的 `pip3` 版本较旧，或者被设置为尝试安装到系统目录。在这种情况下，请使用 `--user` 标志：

```
pip3 install -r --user requirements.txt
python3 setup.py install
```

如果你想安装到系统目录（通常不推荐）：

```
sudo pip3 install -r requirements.txt
sudo python3 setup.py install
```

要生成该工具的自包含可执行二进制文件（Windows 和 MacOS），请运行以下命令：

```
pip3 install pyinstaller
cd Adafruit_nRF52_nrfutil
pip3 install -r requirements.txt
cd Adafruit_nRF52_nrfutil\nordicsemi
pyinstaller __main__.py --onefile --clean --name adafruit-nrfutil
```

你可以在 `Adafruit_nRF52_nrfutil\nordicsemi\dist\adafruit-nrfutil` 中找到 .exe（如果你在 Windows 上，则带有 `.exe`）。
为了方便使用，你可以将其复制或移动到其他位置，例如在你的 %PATH% 中的某个目录。

</TabItem>
</Tabs>

**步骤 2：检查你的端口号**

将设备连接到电脑，并检查端口号。

对于 Windows 用户，打开设备管理器，进入“端口”，设备连接后新出现的端口号就是设备的端口号。

对于 Mac 用户，例如：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

对于 Windows 用户，例如：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Port.png" alt="pir" width={400} height="auto" /></p>

**步骤 3：烧录 bootloader**

在终端或命令提示符中，进入你下载的 bootloader 压缩包所在的目录，并执行以下命令，将端口替换为你设备的正确端口：

- **对于 Windows**：

```
adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p COMxx -b 115200 --singlebank --touch 1200
```

请将 COMXX 改为你的端口号。例如，如果你的设备在 com6 上，请将命令改为：

`adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p **COM6** -b 115200 --singlebank --touch 1200`

 部分设备在你输入此命令后会改变其端口号。所以如果安装失败，请再次检查端口号。

- **对于其他系统**：

```
adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-success.png" alt="pir" width={800} height="auto" /></p>

完成以上步骤后，你可以按照这个[步骤](https://wiki.seeedstudio.com/cn/sensecap_t1000_e/#flash-the-application-firmware)来烧录应用固件。

**2）设备无法进入 DFU 模式，但可以检测到串口**

- 打开一个串口工具

- 将波特率设置为 `1200`。

- 连接设备。
   连接时指示灯会短暂闪烁。持续尝试，直到指示灯常亮，这意味着设备可以回到 DFU 模式，然后[烧录 bootloader](https://wiki.seeedstudio.com/cn/sensecap_t1000_e/#flash-the-bootloader) -> [擦除 flash](https://wiki.seeedstudio.com/cn/sensecap_t1000_e/#step-2-flash-erase) -> [烧录固件](https://wiki.seeedstudio.com/cn/sensecap_t1000_e/#step-3-flash-firmware)。

<div class="video-container">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/reset%20via%20serial%20tool.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

**3）设备无法进入 DFU 模式且没有串口显示**

- 按住设备按键不放，然后连接充电线。当电脑中弹出一个磁盘后，你可能就能看到串口。

- 如果仍然不行，请断开充电线，将设备放置几天直到电池完全耗尽，然后重新连接充电线并尝试再次配对。

**4）如果以上步骤都无效，请联系技术支持：support@sensecapmx.com**

### 固件烧录失败

- **串口未接收到数据**

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/no-dfu-device.png" alt="pir" width={500} height="auto" /></p>

 请检查设备是否处于 DFU 模式，当设备处于 DFU 模式时，绿色指示灯会常亮。

- **无法打开串口**

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wrong-port.png" alt="pir" width={500} height="auto" /></p>

 请检查端口是否正确，或者尝试另一个端口。

### 无法在主信道上通信

如果设备无法与附近节点通信或发送消息，首先检查 LoRa 区域和调制解调器预设是否与周围节点匹配。你还应检查默认的 **PSK** 是否被更改。在主信道上使用不同的 PSK 会导致设备无法与该信道上的其他节点通信。

最简单的排查方式是通过手机 App。打开 App，连接到目标设备，然后进入 `Settings` -> `Channels`。选择主信道并检查 **PSK** 值。如果它与周围节点不同，请将其更新为相同的 PSK，并保存信道设置。

<Tabs>
<TabItem value="ios" label="iOS App">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/communicate_problems_ios.png" alt="Check primary channel PSK in the iOS app" width={500} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/communicate_problem_and.png" alt="Check primary channel PSK in the Android app" width={900} height="auto" /></p>

</TabItem>
</Tabs>

**解决方案**

如果你不确定哪些设置被更改过，请按照[恢复出厂设置](https://wiki.seeedstudio.com/cn/sensecap_t1000_e/#factory-reset)指南将设备恢复为默认设置。如果只是 PSK 被更改，请将其改回 `AQ==`。

### 设备自动关机

#### 描述

- 设备开机后，过一段时间会自动关机或重启。
- 串口日志运行一段时间后停止。

 这可能是因为在设备处于以下状态时，手动强制重启或关机导致的：尚未完成消息传输过程、正在配置中等……

#### 故障排查

 [点击这里](https://wiki.seeedstudio.com/cn/sensecap_t1000_e/#step-2-flash-erase) 执行 flash 擦除。

### 恢复出厂设置

如果你想恢复到默认设置，可以进行恢复出厂设置。你可以通过两种方式进行恢复出厂设置。

- [点击这里](https://wiki.seeedstudio.com/cn/sensecap_t1000_e/#step-2-flash-erase) 擦除设备的 flash，然后重新烧录最新固件。

- 在 App 上点击 `Factory Reset` 按钮。设备会自动以出厂配置重启。
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Factory.png" alt="pir" width={400} height="auto" /></p>

### 消息通信失败

#### NodeDB 重置

NodeDB 是本地数据库，用于存储当前 Mesh 网络中已发现节点的信息。如果你遇到无法与某个节点通信的情况，可能是因为你的 NodeDB 中存储了该节点的过时信息，你需要对其进行更新。

打开 App 并连接到目标设备。进入 **Settings**->**Device**->**Device Config**->**Reset NodeDB**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/sending_failed123.png" alt="Device settings and Reset NodeDB button in the app" width={600} height="auto" /></p>

#### 交换用户信息

每个节点都会周期性地发送自己的节点信息，使 Mesh 中的其他节点能够“看到”和“识别”它。两个节点需要互相交换各自的节点信息，才能彼此通信。如果你无法与列表中的某个节点收发私信，可以在 App 中手动触发它们交换信息。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/USERINFO.png" alt="Device entry in Settings" width={300} height="auto" /></p>

#### 重新生成私钥

两个节点需要互相知道彼此的私钥，才能进行通信。如果某个节点在私信传输中一直失败，请尝试为其重新生成私钥。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/RenerateKey.png" alt="Device entry in Settings" width={600} height="auto" /></p>

重启故障设备以使配置生效。密钥重新生成后，其他设备需要重新连接该节点。因此，最好在其他设备的节点列表中删除该节点。

:::note
关于与其他 LoRa 芯片通信的更多信息，请参考：[link](https://meshtastic.org/docs/hardware/devices/seeed-studio/sensecap/card-tracker/)

:::

### 信号质量

- **SNR** 反映通信链路的质量。正常设备通常在 -7 dB 以上工作。SNR 低于 -10 dB 的设备表示性能较差。

- **RSSI** 由设备及其周围环境共同决定。正常设备通常在 -110 dBm 以上工作。RSSI 低于 -115 dBm 的设备被认为性能较差。

      为获得最佳信号效果，请在开阔、无遮挡且干扰最小的区域使用设备。

### 弹簧针定义

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/PogoPin4.png" alt="pir" width={900} height="auto" /></p>

## 资源

- [Meshtastic 文档](https://meshtastic.org/docs/introduction/)
- [SenseCAP T1000 Tracker 规格书](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_Tracker_T1000_Datasheet.pdf)
- [UN38.3](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/UN38.3.zip)

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