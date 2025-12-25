---
description: 开始使用 SenseCAP Card Tracker T1000-E for Meshtastic
title: T1000-E 追踪器入门指南
keywords:
- Tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/sensecap_t1000_e
sidebar_position: 2
last_update:
  date: 12/24/2025
  author: Michelle Huang
---
:::danger note
当设备处于以下状态时，请不要手动重启或关闭设备。否则设备可能会损坏。
1. 未完成消息传输过程
2. 正在配置中
:::
## 视频教程

### 第一部分：开箱设置

<div class="video-container">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/9sCHpWPSPcw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### 第二部分：状态指示器

<div class="video-container">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/8p34S_9DDEQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### 第三部分：刷写新固件

:::caution note
在刷写固件之前，请确保您购买的是 `T1000-E for Meshtastic`。请不要将固件刷写到其他不支持 Meshtastic 的追踪器型号上。请 `不要使用 NRF-OTA` 更新固件，这可能导致设备完全损坏。
:::

<div class="video-container">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/li6DTOeXK3M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### 第四部分：故障排除说明

<div class="video-container">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/iWahTuXwYnU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## 入门指南

下载 `Meshtastic` 应用：

- [IOS App](https://meshtastic.org/docs/category/apple-apps/)
- [Android App](https://meshtastic.org/docs/category/android-app/)

### 开启设备

按一次按钮开启设备，会有上升的旋律声，LED 灯会保持亮起约 1 秒。

:::tip
如果按下按钮时设备没有响应，请先充电。不要使用快充充电器。
:::

### 通过应用连接

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="IOS App">

- 在蓝牙面板上选择目标设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- 输入代码（默认代码是 `123456`），然后点击 `OK` 连接设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

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

参考 [LoRa Region by Country](https://meshtastic.org/docs/configuration/region-by-country/) 获取更全面的列表。

:::info
**EU_868** 必须遵守每小时 10% 的占空比限制，每分钟在滚动 1 小时基础上计算。如果达到限制，您的设备将停止传输，直到再次被允许。
:::

现在您已经在设备上设置了 LoRa 区域，您可以继续配置任何 [LoRa Configs](https://meshtastic.org/docs/configuration/radio/lora/) 以满足您的需求。

### 配置传感器

|传感器|描述|
|-|-|
|温度|✅|
|光线|应用目前不支持|
|加速度计|待续|

**温度传感器配置**

<Tabs>
<TabItem value="ios" label="IOS App">

导航到 `Settings` -> `Telemetry(Sensors)` -> 启用传感器。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/temp-ios.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

导航到 `Settings` -> `Telemetry(Sensors)` -> 启用传感器。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/temp-an.png" alt="pir" width={500} height="auto" /></p>

</TabItem>
</Tabs>

**蜂鸣器和 LED 配置**

||类型|输出引脚|
|-|-|-|
|蜂鸣器|PWM 蜂鸣器|25|
|LED|-|24|

<Tabs>
<TabItem value="ios" label="IOS App">

导航到 `Settings` -> `External Notification` -> 启用 `GPIO` -> 设置 `Output Pin GPIO`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/buzzer-en.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

导航到 `Settings` -> `External Notification` -> 启用 `GPIO` -> 设置 `Output Pin GPIO`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/buzzer-an.png" alt="pir" width={500} height="auto" /></p>

</TabItem>
</Tabs>

查看 [External Notification Config](https://meshtastic.org/docs/configuration/module/external-notification/) 了解更多详情。

:::tip
更新设备配置后，设备将重启，这可能需要一些时间。
:::

### 配置 GPS

请设置启用 GPS。您可以调整更新间隔和广播间隔以获得更及时的位置信息。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshGPS.png" alt="pir" width={500} height="auto" /></p>

对于 IOS，请开启 `Accurate Location`。否则，定位可能会有偏差。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSAccurateLocation.jpg" alt="pir" width={200} height="auto" /></p>

## 刷写固件

### 检查固件版本

导航到 `Settings` -> `Firmware Updates`，检查当前固件版本。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/check-version.png" alt="pir" width={400} height="auto" /></p>

### <div class="danger">⚠️请勿刷写以下固件</div>

:::danger
请勿刷写除 T1000-E 固件以外的其他固件，这可能导致设备冻结。
:::

以下固件会损坏您的设备：

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
在刷写固件之前，请确保您购买的是 `T1000-E for Meshtastic`。请不要将固件刷写到其他不支持 Meshtastic 的追踪器型号上。请 `不要使用 NRF-OTA` 更新固件，这可能导致设备完全损坏。
:::
#### 步骤 1：进入 DFU 模式

<Tabs>
<TabItem value="method1" label="方法 1">

访问 [Meshtastic Web Flasher](https://flasher.meshtastic.org/)。

将设备连接到您的电脑，选择设备为 `Seeed Card Tracker T1000-E` 并选择最新固件，然后点击 `Flash`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-2.png" alt="pir" width={800} height="auto" /></p>

点击 `Enter DFU Mode`，将显示一个名为 `T1000-E xxx` 的串口，点击并连接它，绿色 LED 将常亮，并且应该显示一个名为 `T1000-E` 的驱动器。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-serial.png" alt="pir" width={800} height="auto" /></p>

</TabItem>

<TabItem value="method2" label="方法 2">

将 USB 线缆连接到您的电脑，按住设备按钮，然后**快速**连接充电线缆两次，绿色 LED 将常亮，并且应该显示一个名为 `T1000-E` 的驱动器。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu-mode2.gif" alt="pir" width={600} height="auto" /></p>

</TabItem>
</Tabs>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/e-driver.png" alt="pir" width={800} height="auto" /></p>

#### 步骤 2：擦除闪存

:::caution note
在刷写固件之前，请先刷写擦除固件！
:::

点击 `trash` 符号。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/erase1.png" alt="pir" width={800} height="auto" /></p>

下载擦除固件并复制到驱动器。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/erase-uf2.png" alt="pir" width={800} height="auto" /></p>

此过程可能需要一些时间，等待驱动器消失，然后打开串口监视器完成擦除过程。

#### 步骤 3：刷写固件

选择最新固件，并下载 `UF2` 文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/down-uf2.png" alt="pir" width={800} height="auto" /></p>

将 UF2 文件复制到 DFU 驱动器。文件下载完成后固件应该被刷写，设备将重启。

## 常见问题

### 如何检查设备名称

 访问 [Meshtastic Web Flasher](https://flasher.meshtastic.org/)。<br/>

 点击 `Open Serial Monitor`，将设备连接到您的电脑，检查串口日志，关键词 `using nodenum`。

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/monitor2.png" alt="pir" width={800} height="auto" /></p>

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/device-name3.png" alt="pir" width={800} height="auto" /></p>

### 如何重启设备

 按住按钮，然后连接充电线缆。

## 故障排除

### 设备无法开机

- 为设备充电 1~2 小时

- 更换充电线缆

- 有时看起来像是关机了，但实际上是因为 LED 和蜂鸣器没有被激活。检查以下参数：

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/LEDLightEnable.png" alt="pir" width={800} height="auto" /></p>

 - 如果仍然无效，按住设备按钮，然后连接充电线缆，查看您的电脑中是否弹出磁盘。如果是，[点击这里](https://wiki.seeedstudio.com/cn/sensecap_t1000_e/#device-bricked) 重新安装引导加载程序

### 设备陷入启动循环

**描述：**

设备将反复重启，串口反复连接和断开。

**解决方案：**

- 步骤 1：尝试手动进入 DFU 模式：按住设备按钮，然后**快速**连接充电线缆两次，绿色 LED 将常亮。

:::note
要成功进入 DFU 模式，您需要快速执行此操作。您可能需要尝试多次。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu-mode2.gif" alt="pir" width={600} height="auto" /></p>

- 步骤 2：[擦除闪存](https://wiki.seeedstudio.com/cn/sensecap_t1000_e/#step-2-flash-erase)。

- 步骤 3：[刷写固件](https://wiki.seeedstudio.com/cn/sensecap_t1000_e/#step-3-flash-firmware)。

### 设备变砖

#### 描述

设备无响应，无 LED，无法与您的应用配对。

**1) 设备仍可进入 DFU 模式，则尝试刷写引导加载程序**。

#### 刷写引导加载程序

- [引导加载程序下载](https://files.seeedstudio.com/wiki/SenseCAP/lorahub/t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip)

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash%20bootloader.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::danger note
当您刷写引导加载程序时，请确保线缆连接稳定，在刷写过程中**不要**断开连接。
:::

**步骤 1：Adafruit-nrfutil 安装**

**先决条件**

- [Python3](https://www.python.org/downloads/)
- [pip3](https://pip.pypa.io/en/stable/installation/)

<Tabs>
<TabItem value="pypi" label="从 PyPI 安装">

这是推荐的方法，安装最新版本：

```
pip3 install --user adafruit-nrfutil
```

</TabItem>

<TabItem value="sou" label="从源码安装">

如果您在使用 PyPi 安装时遇到问题或想要修改工具，请使用此方法。首先克隆此仓库并进入其文件夹。

```
git clone https://github.com/adafruit/Adafruit_nRF52_nrfutil.git
cd Adafruit_nRF52_nrfutil
```

注意：以下命令使用 `python3`，但如果您在 Windows 上，可能需要将其更改为 `python`，因为 Windows 的 python 3.x 安装仍然使用名称 python.exe。

在您的主目录中安装到用户空间：

```
pip3 install -r requirements.txt
python3 setup.py install
```

如果在运行 `pip3 install` 时遇到权限错误，您的 `pip3` 版本较旧或设置为尝试安装到系统目录。在这种情况下使用 `--user` 标志：

```
pip3 install -r --user requirements.txt
python3 setup.py install
```

如果您想安装到系统目录（通常不推荐）：

```
sudo pip3 install -r requirements.txt
sudo python3 setup.py install
```

要生成实用程序的独立可执行二进制文件（Windows 和 MacOS），运行这些命令：

```
pip3 install pyinstaller
cd Adafruit_nRF52_nrfutil
pip3 install -r requirements.txt
cd Adafruit_nRF52_nrfutil\nordicsemi
pyinstaller __main__.py --onefile --clean --name adafruit-nrfutil
```

您将在 `Adafruit_nRF52_nrfutil\nordicsemi\dist\adafruit-nrfutil` 中找到 .exe 文件（如果您在 Windows 上则带有 `.exe`）。
为了方便起见，将其复制或移动到其他地方，例如您的 %PATH% 中的目录。

</TabItem>
</Tabs>

**步骤 2：检查您的端口号**

将您的设备连接到电脑，并检查端口号。

示例：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

**步骤 3：刷写引导加载程序**

在终端或命令提示符中，导航到您下载引导加载程序 zip 包的目录并执行以下命令，替换为您设备的正确端口：

- **对于 Windows**：

```
adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p COMxx -b 115200 --singlebank --touch 1200
```

- **对于其他系统**：

```
adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-success.png" alt="pir" width={800} height="auto" /></p>

当您完成上述步骤后，您可以按照此[步骤](https://wiki.seeedstudio.com/cn/sensecap_t1000_e/#flash-the-application-firmware)刷写应用固件。

**2) 设备无法进入 DFU 模式，但可以检测到串口**。

- 打开串口工具

- 将波特率设置为 `1200`。

- 连接设备。
   连接时灯会短暂闪烁。继续尝试直到灯保持常亮，意味着设备可以回到 DFU 模式，然后[刷写引导加载程序](https://wiki.seeedstudio.com/cn/sensecap_t1000_e/#flash-the-bootloader) -> [擦除闪存](https://wiki.seeedstudio.com/cn/sensecap_t1000_e/#step-2-flash-erase) -> [刷写固件](https://wiki.seeedstudio.com/cn/sensecap_t1000_e/#step-3-flash-firmware)。

<div class="video-container">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/reset%20via%20serial%20tool.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

**3) 设备无法进入 DFU 模式且无串口显示**

- 按住设备按钮，然后连接充电线缆。在您的电脑中弹出磁盘后，您可能会看到串口。

- 如果仍然无效，请断开充电线缆并将设备放置几天直到电池完全耗尽，然后连接充电线缆并尝试再次配对。

**4) 如果以上步骤都无效，请联系技术支持：support@sensecapmx.com**

### 固件刷写失败

- **串口无数据接收**

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/no-dfu-device.png" alt="pir" width={500} height="auto" /></p>

 检查设备是否处于 DFU 模式，当设备处于 DFU 模式时绿灯将常亮。

- **无法打开串口**

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wrong-port.png" alt="pir" width={500} height="auto" /></p>

 检查端口是否正确，或尝试其他端口。

 ### 设备自动关机

 #### 描述

 - 设备开机后，会在一段时间后自动关机或重启。
 - 串口日志运行一段时间后停止。

 这可能是由于在设备处于以下状态时手动强制重启或关闭设备导致的：未完成消息传输过程、正在配置......

 #### 故障排除

 [点击这里](https://wiki.seeedstudio.com/cn/sensecap_t1000_e/#step-2-flash-erase)执行闪存擦除。

 ### 恢复出厂设置
如果您想恢复到默认设置，可以进行恢复出厂设置。有两种方法可以进行恢复出厂设置。

- [点击这里](https://wiki.seeedstudio.com/cn/sensecap_t1000_e/#step-2-flash-erase)对设备进行闪存擦除。然后重新刷入最新固件。

- 在应用中点击 `Factory Reset` 按钮。设备将自动使用出厂配置重启。
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Factory.png" alt="pir" width={400} height="auto" /></p>

### 信号质量

  - **SNR** 反映通信链路的质量。正常设备通常在 -7 dB 以上运行。SNR 低于 -10 dB 的设备表示性能较差。

  - **RSSI** 由设备及其周围环境共同决定。正常设备通常在 -110 dBm 以上运行。RSSI 低于 -115 dBm 的设备被认为性能较差。

      为了获得最佳信号效果，请在开阔、无遮挡、干扰最小的区域使用设备。

## 资源

- [Meshtastic 文档](https://meshtastic.org/docs/introduction/)
- [SenseCAP T1000 追踪器数据手册](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_Tracker_T1000_Datasheet.pdf)


## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
