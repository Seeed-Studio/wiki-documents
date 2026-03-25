---
description: 开始使用适用于 Meshtastic 的 SenseCAP Card Tracker T1000-E
title: T1000-E Tracker 入门指南
keywords:
  - Tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /sensecap_t1000_e
sku: 114993369
sidebar_position: 2
last_update:
  date: 3/11/2026
  author: Michelle Huang
createdAt: '2024-07-24'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/cn/sensecap_t1000_e/
---
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

:::danger note
当设备处于以下状态时，请不要手动重启或关闭设备。否则设备可能会损坏。
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
在刷写固件之前，请确保你购买的是 `T1000-E for Meshtastic`。请不要将固件刷写到其他不支持 Meshtastic 的追踪器型号上。请`不要使用 NRF-OTA` 更新固件，否则可能导致设备彻底损坏。
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

- [IOS 应用](https://meshtastic.org/docs/category/apple-apps/)
- [Android 应用](https://meshtastic.org/docs/category/android-app/)

### 打开设备电源

短按一次按键即可打开设备电源，会有一个上升的提示音，并且 LED 指示灯会常亮约 1 秒。

:::tip
如果按下按键后设备没有响应，请先为其充电。不要使用快充充电器。
:::

### 通过 App 连接

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="IOS 应用">

- 在蓝牙面板中选择目标设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- 输入配对码（默认配对码为 `123456`），然后点击 `OK` 连接设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android 应用">

- 点击 `+` 并选择目标设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>

- 输入配对码（默认配对码为 `123456`），然后点击 `OK` 连接设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

### 通过网页连接

如果你希望在网页端发送消息并与其他节点通信，现在可以将设备连接到 [Meshtastic 网站](https://client.meshtastic.org/messages/broadcast/0)。

  步骤 1：打开网页

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

    你的设备会显示在列表中。点击即可连接。如果连接成功，你可以在网页上直接看到设备状态。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteConnectionSuccess.png" alt="pir" width={300} height="auto" /></p>

### 配置 LoRa

为了开始在 Mesh 网络中通信，你必须设置所在区域。该设置会控制设备使用的频率范围，应根据你所在的地区进行设置。

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

更多完整列表请参考 [按国家划分的 LoRa 区域](https://meshtastic.org/docs/configuration/region-by-country/)。

:::info
**EU_868** 必须遵守每小时 10% 的占空比限制，以滚动 1 小时为周期、每分钟计算一次。当达到限制时，你的设备将停止发射，直到再次被允许发射。
:::

现在你已经在设备上设置好了 LoRa 区域，可以继续配置任意适合你需求的 [LoRa 配置](https://meshtastic.org/docs/configuration/radio/lora/)。

### 配置传感器

|传感器|描述|
|-|-|
|温度|✅|
|光照|当前 App 不支持|
|加速度计|敬请期待|

**温度传感器配置**

<Tabs>
<TabItem value="ios" label="IOS 应用">

进入 `Settings` -> `Telemetry(Sensors)` -> 启用传感器。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/temp-ios.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android 应用">

进入 `Settings` -> `Telemetry(Sensors)` -> 启用传感器。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/temp-an.png" alt="pir" width={500} height="auto" /></p>

</TabItem>
</Tabs>

**蜂鸣器和 LED 配置**

||类型|输出引脚|
|-|-|-|
|蜂鸣器|PWM 蜂鸣器|25|
|LED|-|24|

<Tabs>
<TabItem value="ios" label="IOS 应用">

进入 `Settings` -> `External Notification` -> 启用 `GPIO` -> 设置 `Output Pin GPIO`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/buzzer-en.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android 应用">

进入 `Settings` -> `External Notification` -> 启用 `GPIO` -> 设置 `Output Pin GPIO`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/buzzer-an.png" alt="pir" width={500} height="auto" /></p>

</TabItem>
</Tabs>

更多详情请查看 [External Notification 配置](https://meshtastic.org/docs/configuration/module/external-notification/)。

:::tip
在你更新设备配置后，设备会重启，这可能需要一些时间。
:::

### 配置 GPS

请将 GPS 设置为启用状态。你可以调整更新间隔和广播间隔，以获取更加实时的位置数据。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshGPS.png" alt="pir" width={500} height="auto" /></p>

对于 IOS，请打开 `Accurate Location`。否则定位可能会有偏差。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSAccurateLocation.jpg" alt="pir" width={200} height="auto" /></p>

## 刷写固件

### 检查固件版本

进入 `Settings` -> `Firmware Updates`，查看当前固件版本。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/check-version.png" alt="pir" width={400} height="auto" /></p>

### <div class="danger">⚠️请勿刷写以下固件</div>

:::danger
请勿刷写除 T1000-E 固件以外的其他固件，否则可能导致设备死机。
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

### 刷写应用固件

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Flash%20Firmware.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>
:::caution note
在刷写固件之前，请确保你购买的是 `T1000-E for Meshtastic`。请不要将固件刷写到其他不支持 Meshtastic 的追踪器型号上。请`不要使用 NRF-OTA` 更新固件，否则可能导致设备彻底损坏。
:::
#### 步骤 1：进入 DFU 模式

<Tabs>
<TabItem value="method1" label="方法 1">

访问 [Meshtastic Web Flasher](https://flasher.meshtastic.org/)。

将设备连接到电脑，将设备选择为 `Seeed Card Tracker T1000-E` 并选择最新固件，然后点击 `Flash`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-2.png" alt="pir" width={800} height="auto" /></p>

点击 `Enter DFU Mode`，会显示一个名为 `T1000-E xxx` 的串口，点击并连接它，绿色 LED 将常亮，并且会显示一个名为 `T1000-E` 的驱动器。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-serial.png" alt="pir" width={800} height="auto" /></p>

</TabItem>

<TabItem value="method2" label="方法 2">

将 USB 线连接到电脑，按住设备按键，然后**快速**连接充电线两次，绿色 LED 将常亮，并且会显示一个名为 `T1000-E` 的驱动器。

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

将 UF2 文件复制到 DFU 驱动器中。文件复制完成并且设备重启后，固件就会被烧录。

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

- 给设备充电 1~2 小时

- 拔下 USB 线，然后按住按键不放，再在按住按键的同时重新插入 USB 线并保持按住 5 秒。

- 更换充电线

- 有时看起来像是关机了，但实际上是因为 LED 和蜂鸣器没有被激活。请检查以下参数：

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/LEDLightEnable.png" alt="pir" width={800} height="auto" /></p>

 - 如果仍然无效，按住设备按键，然后连接充电线，查看电脑中是否弹出一个磁盘。如果有，请[点击这里](https://wiki.seeedstudio.com/cn/sensecap_t1000_e/#device-bricked)重新安装引导程序

### 设备卡在启动循环中

**问题描述：**

设备会反复重启，串口会反复连接和断开。

**解决方案：**

- 步骤 1：尝试手动进入 DFU 模式：按住设备按键，然后**快速**连接充电线两次，绿色 LED 将常亮。

:::note
要成功进入 DFU 模式，需要快速完成此操作。你可能需要尝试多次。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu-mode2.gif" alt="pir" width={600} height="auto" /></p>

- 步骤 2：[擦除 Flash](https://wiki.seeedstudio.com/cn/sensecap_t1000_e/#step-2-flash-erase)。

- 步骤 3：[烧录固件](https://wiki.seeedstudio.com/cn/sensecap_t1000_e/#step-3-flash-firmware)。

### 设备变砖

#### 问题描述

设备无响应，没有 LED，无法与 App 配对。

**1）设备仍然可以进入 DFU 模式，则尝试烧录引导程序。**

#### 烧录引导程序

- [引导程序下载](https://files.seeedstudio.com/wiki/SenseCAP/lorahub/t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip)

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash%20bootloader.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::danger note
在烧录引导程序时，请确保线缆连接稳定，并且在烧录过程中**不要**断开连接。
:::

**步骤 1：安装 Adafruit-nrfutil**

对于 Windows 用户，同时按下 "Win" 键和 "r" 键，然后在弹出的窗口中输入 "cmd"，点击 "Enter"。这样可以打开命令行。

对于 Mac 用户，同时按下 "Command" 键和 "Space" 键，即可打开 Spotlight。然后输入 "termial"，点击 "Return"。这样可以打开命令行。

**前置条件**

- [Python3](https://www.python.org/downloads/)
- [pip3](https://pip.pypa.io/en/stable/installation/)

在命令行中检查 python 和 pip 是否安装成功。

```
python --version
```

```
python -m pip --version
```

然后应该会出现 "Python xxx" 和 "pip xxx"。如果没有，请尝试重新安装 python。

<Tabs>
<TabItem value="pypi" label="通过 PyPI 安装">

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

对于 Windows 用户，你可能需要手动添加路径。复制上一步显示的安装位置。然后按如下方式添加：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/AddPath.png" alt="pir" width={1000} height="auto" /></p>



</TabItem>

<TabItem value="sou" label="从源码安装">

如果你在通过 PyPi 安装时遇到问题，或者想要修改该工具，请使用此方法。首先克隆此仓库并进入其文件夹。

```
git clone https://github.com/adafruit/Adafruit_nRF52_nrfutil.git
cd Adafruit_nRF52_nrfutil
```

注意：以下命令使用 `python3`，但是如果你在 Windows 上，可能需要将其改为 `python`，因为 Windows 上的 Python 3.x 安装仍然使用 python.exe 这个名称。

要在用户空间（你的 home 目录）中安装：

```
pip3 install -r requirements.txt
python3 setup.py install
```

如果在运行 `pip3 install` 时遇到权限错误，说明你的 `pip3` 版本较旧或被设置为尝试安装到系统目录。在这种情况下请使用 `--user` 参数：

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

你会在 `Adafruit_nRF52_nrfutil\nordicsemi\dist\adafruit-nrfutil` 中找到 .exe（如果你在 Windows 上，则带有 `.exe`）。
为了方便使用，可以将其复制或移动到其他位置，例如在你的 %PATH% 中的某个目录。

</TabItem>
</Tabs>

**步骤 2：检查端口号**

将设备连接到电脑，并检查端口号。

对于 Windows 用户，打开设备管理器，进入“端口”，设备连接后新出现的端口号就是设备的端口号。

对于 Mac 用户，例如：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

对于 Windows 用户，例如：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Port.png" alt="pir" width={400} height="auto" /></p>

**步骤 3：烧录引导程序**

在终端或命令提示符中，进入你下载引导程序压缩包的目录，并执行以下命令，将端口替换为你设备的正确端口：

- **对于 Windows**：

```
adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p COMxx -b 115200 --singlebank --touch 1200
```

请将 COMXX 改为你的 COM 号。例如，如果你的设备在 com6 上，将命令改为：

`adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p **COM6** -b 115200 --singlebank --touch 1200`

 部分设备在你输入此命令后会改变端口号。因此如果安装失败，请再次检查端口号。

- **对于其他系统**：

```
adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-success.png" alt="pir" width={800} height="auto" /></p>

当你完成上述步骤后，你可以按照这个[步骤](https://wiki.seeedstudio.com/cn/sensecap_t1000_e/#flash-the-application-firmware)烧录应用固件。

**2) 设备无法进入 DFU 模式，但可以检测到串口**。

- 打开一个串口工具

- 将波特率设置为 `1200`。

- 连接设备。
   当你连接设备时，指示灯会短暂闪烁。持续尝试，直到指示灯常亮，这意味着设备可以回到 DFU 模式，然后[烧录 bootloader](https://wiki.seeedstudio.com/cn/sensecap_t1000_e/#flash-the-bootloader) -> [擦除 flash](https://wiki.seeedstudio.com/cn/sensecap_t1000_e/#step-2-flash-erase) -> [烧录固件](https://wiki.seeedstudio.com/cn/sensecap_t1000_e/#step-3-flash-firmware)。

<div class="video-container">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/reset%20via%20serial%20tool.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

**3) 设备无法进入 DFU 模式且没有串口显示**

- 按住设备按键，然后连接充电线。当电脑中弹出一个磁盘后，你可能会看到串口。

- 如果仍然不行，请断开充电线，将设备放置几天直到电池完全耗尽，然后连接充电线并再次尝试配对。

**4) 如果以上步骤都无效，请联系技术支持：support@sensecapmx.com**

### 固件烧录失败

- **串口无数据接收**

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/no-dfu-device.png" alt="pir" width={500} height="auto" /></p>

 检查设备是否处于 DFU 模式，当设备处于 DFU 模式时，绿色指示灯会常亮。

- **无法打开串口**

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wrong-port.png" alt="pir" width={500} height="auto" /></p>

 检查端口是否正确，或者尝试另一个端口。

 ### 设备自动关机

 #### 描述

 - 设备开机后，过一会儿会自动关机或重启。 
 - 串口日志运行一段时间后停止。

 这可能是由于在设备处于以下状态时，手动强制重启或关机导致的：未完成消息传输过程、正在配置中......

 #### 故障排查

 [点击这里](https://wiki.seeedstudio.com/cn/sensecap_t1000_e/#step-2-flash-erase)执行 flash 擦除。 

 ### 恢复出厂设置
如果你想恢复到默认设置，可以执行恢复出厂设置。你可以通过以下两种方式进行恢复出厂设置。

- [点击这里](https://wiki.seeedstudio.com/cn/sensecap_t1000_e/#step-2-flash-erase)对设备进行 flash 擦除。然后重新烧录最新固件。

- 在 App 上点击 `Factory Reset` 按钮。设备将自动以出厂配置重启。 
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Factory.png" alt="pir" width={400} height="auto" /></p>

### NodeDB 重置

NodeDB 是本地数据库，用于存储当前 Mesh 网络中已发现节点的信息，包括：

- **节点 ID**
- **用户名**
- **位置信息**
- **信号信息（SNR）**
- **最后一次看到的时间**

**何时重置**

在以下情况下重置 NodeDB：

- 节点列表包含过期、重复或无效的条目。
- 你移动到不同的 Mesh 环境并希望重新发现附近节点。
- App 中的节点信息显示不正确或不完整。

:::danger
重置 NodeDB 只会清除存储在设备上的节点数据库。它**不会执行恢复出厂设置**，也**不会移除设备的基础配置**。
:::

**从 App 中重置**

1. 打开 App 并连接到目标设备。
2. 进入 **Settings**。
3. 点击 **Device**。
4. 在 **Device Config** 页面滑动到最底部，找到 **Reset NodeDB**。
5. 点击并确认该操作。

**App 路径**

`Settings > Device > Reset NodeDB`

**示例界面**

步骤 1：在 **Settings** 页面中打开 **Device**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1nodeDB3.png" alt="Device entry in Settings" width={300} height="auto" /></p>

步骤 2：在 **Device Config** 页面点击 `Reset NodeDB`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1nodeDB4.png" alt="Reset NodeDB button in Device Config" width={300} height="auto" /></p>

:::tip
请注意以下选项之间的区别：

- **Reset NodeDB**：只清除节点数据库。
- **Factory Reset**：将设备恢复到出厂设置，并移除更多配置信息。
:::

**重置后会发生什么**

执行 **Reset NodeDB** 后，设备会清除当前存储的节点列表。随着设备继续运行，它会再次重新发现并记录附近的节点。

你可能会观察到以下现象：

- 节点列表可能会暂时变为空或变少。
- 随着设备持续运行，节点会逐渐重新出现。
- 之前存储的历史节点记录将不再可用。

**注意事项**

- 在重置之前，请确保问题确实与异常的节点列表有关。
- 如果问题只是节点显示延迟，请先等待一段时间，看看是否会自动恢复。
- 如果在重置 NodeDB 后问题仍然存在，请继续排查设备配置或其他可能原因。
- 谨慎使用 **Factory Reset**，以避免意外移除设备配置。

### 信号质量

  - **SNR** 反映通信链路的质量。正常设备通常在 -7 dB 以上工作。SNR 低于 -10 dB 的设备表示性能较差。

  - **RSSI** 由设备及其周围环境共同决定。正常设备通常在 -110 dBm 以上工作。RSSI 低于 -115 dBm 的设备被认为性能较差。 

      为获得最佳信号效果，请在开阔、无遮挡且干扰较小的区域使用设备。

### Pogo Pin 定义

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/PogoPin4.png" alt="pir" width={900} height="auto" /></p>

## 资源

- [Meshtastic 文档](https://meshtastic.org/docs/introduction/)
- [SenseCAP T1000 Tracker 规格书](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_Tracker_T1000_Datasheet.pdf)
- [UN38.3](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/UN38.3.zip)



## 资源

<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/Seeed_Studio_XIAO.jpg"
  imageAlt="Request Quote for XIAO"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品时尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
