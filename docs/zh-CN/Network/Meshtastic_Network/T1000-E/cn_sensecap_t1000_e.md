---
description: 使用 SenseCAP Card Tracker T1000-E 开始 Meshtastic
title: T1000-E 追踪器入门指南
keywords:
- 追踪器
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/sensecap_t1000_e
sidebar_position: 2
last_update:
  date: 2024/7/1
  author: Jessie
---

## 视频教程

### 第1部分：开箱设置

<iframe width="100%" height="500" src="https://www.youtube.com/embed/9sCHpWPSPcw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### 第2部分：状态指示灯

<iframe width="100%" height="500" src="https://www.youtube.com/embed/8p34S_9DDEQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### 第3部分：刷写新固件

<iframe width="100%" height="500" src="https://www.youtube.com/embed/li6DTOeXK3M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### 第4部分：故障排除说明

<iframe width="100%" height="500" src="https://www.youtube.com/embed/iWahTuXwYnU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 入门指南

下载 `Meshtastic` 应用：

- [IOS 应用](https://meshtastic.org/docs/category/apple-apps/)
- [Android 应用](https://meshtastic.org/docs/category/android-app/)

### 启动设备

按下按钮一次以启动设备，会听到上升的旋律，LED 灯会亮约1秒。

:::tip
如果按下按钮后设备没有响应，请先为设备充电。
:::

### 通过应用连接

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="IOS 应用">

- 在蓝牙面板中选择目标设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- 输入代码（默认代码为 `123456`），然后点击 `OK` 连接设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android 应用">

- 点击 `+` 并选择目标设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>

- 输入代码（默认代码为 `123456`），然后点击 `OK` 连接设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

### 配置参数

为了开始通过网状网络通信，您必须设置您的区域。此设置控制设备使用的频率范围，应根据您的区域位置进行设置。

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
|US|美国|902\.0 - 928.0|100|30|
|EU\_868|欧盟 868MHz|869\.4 - 869.65|10|27|

有关更全面的列表，请参考 [按国家划分的 LoRa 区域](https://meshtastic.org/docs/configuration/region-by-country/)。

:::info
**EU_868** 必须遵守每小时10%的占空比限制，该限制按滚动1小时的基础每分钟计算。如果达到限制，设备将停止传输，直到允许再次传输。
:::

现在您已在设备上设置了 LoRa 区域，可以继续配置任何适合您需求的 [LoRa 配置](https://meshtastic.org/docs/configuration/radio/lora/)。

### 传感器配置

|传感器|描述|
|-|-|
|温度|✅|
|光线|当前应用不支持|
|加速度计|待续|

**温度传感器配置**

<Tabs>
<TabItem value="ios" label="IOS 应用">

导航到 `Settings` -> `Telemetry(Sensors)` -> 启用传感器。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/temp-ios.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android 应用">

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
<TabItem value="ios" label="IOS 应用">

导航到 `Settings` -> `External Notification` -> 启用 `GPIO` -> 设置 `Output Pin GPIO`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/buzzer-en.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android 应用">

导航到 `Settings` -> `External Notification` -> 启用 `GPIO` -> 设置 `Output Pin GPIO`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/buzzer-an.png" alt="pir" width={500} height="auto" /></p>

</TabItem>
</Tabs>

有关更多详细信息，请查看 [外部通知配置](https://meshtastic.org/docs/configuration/module/external-notification/)。

:::tip
更新设备配置后，设备将重新启动，这可能需要一些时间。
:::

## 刷写固件

### 检查固件版本

进入 `设置` -> `固件更新`，检查当前固件版本。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/check-version.png" alt="pir" width={400} height="auto" /></p>

### <div class="danger">⚠️请勿刷写以下固件</div>

:::danger
请勿刷写除 T1000-E 固件以外的其他固件，否则可能导致设备冻结。
:::

以下固件会导致设备变砖：

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

#### 步骤 1：进入 DFU 模式

<Tabs>
<TabItem value="method1" label="方法 1">

访问 [Meshtastic Web Flasher](https://flasher.meshtastic.org/)。

将设备连接到电脑，选择设备为 `Seeed Card Tracker T1000-E` 并选择最新固件，然后点击 `Flash`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-2.png" alt="pir" width={800} height="auto" /></p>

点击 `Enter DFU Mode`，会显示一个名为 `T1000-E xxx` 的串口，点击并连接，绿色 LED 会保持常亮，并且会显示一个名为 `T1000-E` 的驱动。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-serial.png" alt="pir" width={800} height="auto" /></p>

</TabItem>

<TabItem value="method2" label="方法 2">

将 USB 数据线连接到电脑，按住设备按钮，然后**快速**连接充电线两次，绿色 LED 会保持常亮，并且会显示一个名为 `T1000-E` 的驱动。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu-mode2.gif" alt="pir" width={600} height="auto" /></p>

</TabItem>
</Tabs>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/e-driver.png" alt="pir" width={800} height="auto" /></p>

#### 步骤 2：擦除固件

:::caution note
在刷写固件之前，请先刷写擦除固件！
:::

点击 `垃圾桶` 图标。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/erase1.png" alt="pir" width={800} height="auto" /></p>

下载擦除固件并复制到驱动器中。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/erase-uf2.png" alt="pir" width={800} height="auto" /></p>

此过程可能需要一些时间，等待驱动器消失，然后打开串口监视器完成擦除过程。

#### 步骤 3：刷写固件

选择最新固件，并下载 `UF2` 文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/down-uf2.png" alt="pir" width={800} height="auto" /></p>

将 UF2 文件复制到 DFU 驱动器中。文件下载完成并设备重启后，固件应已刷写成功。

## 常见问题解答

- **如何检查设备名称**

访问 [Meshtastic Web Flasher](https://flasher.meshtastic.org/)。<br/>

点击 `Open Serial Monitor`，将设备连接到您的电脑，检查串口日志，查找关键字 `using nodenum`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/monitor2.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/device-name3.png" alt="pir" width={800} height="auto" /></p>

- **如何重启设备？**

按住按钮，然后连接充电线。

## 故障排除

### 设备无法启动

- 给设备充电 1~2 小时

- 更换充电线

### 设备卡在启动循环中

**描述：**

设备会反复重启，串口反复连接和断开。

**解决方案：**

- 步骤 1：尝试手动进入 DFU 模式：按住设备按钮，然后**快速**两次连接充电线，绿色 LED 将保持常亮。

:::note
要成功进入 DFU 模式，您需要快速执行此操作。可能需要多次尝试。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu-mode2.gif" alt="pir" width={600} height="auto" /></p>

- 步骤 2：[擦除 Flash](https://wiki.seeedstudio.com/cn/sensecap_t1000_e/#step-2-flash-erase)。

- 步骤 3：[烧录固件](https://wiki.seeedstudio.com/cn/sensecap_t1000_e/#step-3-flash-firmware)。

### 设备变砖

**描述：**

设备无响应，无 LED 指示灯，无法与您的应用程序配对。

**1) 设备仍然可以进入 DFU 模式，请尝试烧录引导程序**。

#### 烧录引导程序

- [引导程序下载](https://files.seeedstudio.com/wiki/SenseCAP/lorahub/t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip)

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash%20bootloader.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::danger note
在烧录引导程序时，请确保线缆连接稳定，并且在烧录过程中**不要**断开连接。
:::

**步骤 1：安装 Adafruit-nrfutil**

**先决条件**

- [Python3](https://www.python.org/downloads/)
- [pip3](https://pip.pypa.io/en/stable/installation/)

<Tabs>
<TabItem value="pypi" label="通过 PyPI 安装">

这是推荐的方法，用于安装最新版本：

```
pip3 install --user adafruit-nrfutil
```

</TabItem>

<TabItem value="sou" label="通过源码安装">

如果通过 PyPI 安装遇到问题或需要修改工具，请使用此方法。首先克隆此仓库并进入其文件夹。

```
git clone https://github.com/adafruit/Adafruit_nRF52_nrfutil.git
cd Adafruit_nRF52_nrfutil
```

注意：以下命令使用 `python3`，但如果您使用的是 Windows，可能需要将其更改为 `python`，因为 Windows 上的 Python 3.x 安装仍然使用 python.exe 作为名称。

要在用户空间（您的主目录）中安装：

```
pip3 install -r requirements.txt
python3 setup.py install
```

如果运行 `pip3 install` 时出现权限错误，可能是您的 `pip3` 版本较旧或设置为尝试安装到系统目录。在这种情况下，请使用 `--user` 标志：

```
pip3 install -r --user requirements.txt
python3 setup.py install
```

如果您想安装到系统目录（通常不推荐）：

```
sudo pip3 install -r requirements.txt
sudo python3 setup.py install
```

要生成工具的自包含可执行二进制文件（适用于 Windows 和 MacOS），运行以下命令：

```
pip3 install pyinstaller
cd Adafruit_nRF52_nrfutil
pip3 install -r requirements.txt
cd Adafruit_nRF52_nrfutil\nordicsemi
pyinstaller __main__.py --onefile --clean --name adafruit-nrfutil
```

您将在 `Adafruit_nRF52_nrfutil\nordicsemi\dist\adafruit-nrfutil` 中找到 .exe 文件（如果您使用的是 Windows，则带有 `.exe` 后缀）。
将其复制或移动到其他位置以方便使用，例如放置在您的 %PATH% 目录中。

</TabItem>
</Tabs>

**步骤 2：检查您的端口号**

将设备连接到您的电脑，并检查端口号。

示例：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

**步骤 3：烧录引导程序**

在终端或命令提示符中，导航到您下载引导程序 zip 包的目录，并执行以下命令，替换为您的设备对应的正确端口：

- **对于 Windows**:

```
adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p COMxx -b 115200 --singlebank --touch 1200
```

- **对于其他系统**:

```
adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-success.png" alt="pir" width={800} height="auto" /></p>

完成上述步骤后，您可以按照此[步骤](https://wiki.seeedstudio.com/cn/sensecap_t1000_e/#flash-the-application-firmware)烧录应用程序固件。

**2) 设备无法进入 DFU 模式，但串口可以被检测到**。

- 打开串口工具

- 将波特率设置为 `1200`。

- 连接设备。
   连接时指示灯会短暂闪烁。继续尝试，直到指示灯保持常亮，表示设备可以返回 DFU 模式，然后[烧录引导程序](https://wiki.seeedstudio.com/cn/sensecap_t1000_e/#flash-the-bootloader) -> [擦除 Flash](https://wiki.seeedstudio.com/cn/sensecap_t1000_e/#step-2-flash-erase) -> [烧录固件](https://wiki.seeedstudio.com/cn/sensecap_t1000_e/#step-3-flash-firmware)。

<div class="video-container">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/reset%20via%20serial%20tool.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

**3) 设备无法进入 DFU 模式且没有串口显示**

- 请断开充电线，将设备静置几天直到电池完全耗尽，然后重新连接充电线并尝试再次配对。

**4) 如果以上步骤都无效，请联系技术支持：support@sensecapmx.com**

### 固件烧录失败

- **串口未接收到数据**

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/no-dfu-device.png" alt="pir" width={500} height="auto" /></p>

 检查设备是否处于 DFU 模式，当设备处于 DFU 模式时，绿色指示灯会保持常亮。

- **无法打开串口**

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wrong-port.png" alt="pir" width={500} height="auto" /></p>

 检查端口是否正确，或者尝试使用其他端口。

## 资源

[Meshtastic 文档](https://meshtastic.org/docs/introduction/)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
