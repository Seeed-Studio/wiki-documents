---
description: 为 Meshcore 快速上手 SenseCAP Card Tracker T1000-E。指导完成设备安装、固件烧录和设备连接。
title: 在 SenseCAP T1000-E 上快速上手 MeshCore
keywords:
  - Tracker
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/DeviceSelection.webp
slug: /sensecap_t1000_e_meshcore
sku: 114993369
sidebar_position: 3
last_update:
  date: 3/11/2026
  author: Michelle Huang
createdAt: '2026-02-28'
updatedAt: '2026-04-03'
url: https://wiki.seeedstudio.com/cn/sensecap_t1000_e_meshcore/
---

## 固件烧录

### 方法一 通过 Web Flasher

使用 USB 线将设备连接到电脑。

:::warning
请在数据传输过程中保持 USB 线连接，否则可能会损坏设备。
:::

前往 [Meshcore Web Flasher](https://meshcore.io/flasher)。

在 `Community Firmware` 分组中选择 `Seeed Studio SenseCAP T1000-E`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/DeviceSelection.png" alt="pir" width={800} height="auto" /></p>

选择 `Companion Bluetooth`。烧录了蓝牙伴侣固件的设备可以连接到 APP。如果你想烧录其他固件，请[点击此处](https://docs.meshcore.io/)查看教程。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/BluetoothCompanion.png" alt="pir" width={800} height="auto" /></p>

#### 擦除 Flash

点击 `Enter DFU Mode`，选择名为 "nRF xxx" 或 "TinyUSB" 的串口。然后点击 `Erase Flash` 并选择串口。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/SerialSelection.png" alt="pir" width={800} height="auto" /></p>

如果你点击了 `Erase Flash` 但没有反应，请再次点击 `Enter DFU`，然后再点击 `Erase Flash`，以确保已成功进入 DFU 模式。

如果你看到 "Flashing erase firmware:100%"，说明设备已成功擦除。

<p style={{textAlign: 'center'}}><img src=" https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSuccess.png" alt="pir" width={800} height="auto" /></p>

#### 烧录固件

点击 `Enter DFU Mode`，选择名为 "nRF xxx" 或 "TinyUSB" 的串口。然后点击 `Flash` 并选择串口。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/SerialSelection.png" alt="pir" width={800} height="auto" /></p>

如果你点击了 `Flash` 但没有反应，请再次点击 `Enter DFU`，然后再点击 `Flash`，以确保已成功进入 DFU 模式。

当进度条完全填满时，表示 Flash 已完成。然后设备会自动重启。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/FlashProgress.png" alt="pir" width={800} height="auto" /></p>

### 方法二 拖拽烧录

使用 USB 线将设备连接到电脑。

:::warning
请在数据传输过程中保持 USB 线连接，否则可能会损坏设备。
:::

前往 [Meshcore Web Flasher](https://meshcore.io/flasher)。

在 `Community Firmware` 分组中选择 `Seeed Studio Wio Tracker T1000-E`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/DeviceSelection.png" alt="pir" width={800} height="auto" /></p>

选择 `Companion Bluetooth`。烧录了蓝牙伴侣固件的设备可以连接到 APP。如果你想烧录其他固件，请[点击此处](https://docs.meshcore.io/)查看教程。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/BluetoothCompanion.png" alt="pir" width={800} height="auto" /></p>

#### 擦除 Flash

下载 UF2 文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/EraseUF2.png" alt="pir" width={800} height="auto" /></p>

手动进入 DFU 模式：按住设备按键不放，然后**快速**连接充电线两次，绿色 LED 会常亮。

:::warning
要成功进入 DFU 模式，你需要快速完成这一操作。可能需要多尝试几次。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu-mode2.gif" alt="pir" width={600} height="auto" /></p>

大约 10~15 秒后，你会看到一个名为 `T1000-E` 的磁盘弹出。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/T1000-EDriver.png" alt="pir" width={800} height="auto" /></p>

将下载好的 UF2 文件拖拽到弹出的磁盘中。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/EraseDrag.png" alt="pir" width={800} height="auto" /></p>

固件成功烧录后，该磁盘会消失。此时设备中没有固件，所以设备`不会`自动重启。

#### 烧录固件

选择最新的固件版本。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/VersionSelection.png" alt="pir" width={800} height="auto" /></p>

下载 UF2 文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/FirmwareUF2.png" alt="pir" width={800} height="auto" /></p>

尝试手动进入 DFU 模式：按住设备按键不放，然后**快速**连接充电线两次，绿色 LED 会常亮。

:::warning
要成功进入 DFU 模式，你需要快速完成这一操作。可能需要多尝试几次。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu-mode2.gif" alt="pir" width={600} height="auto" /></p>

大约 10~15 秒后，你会看到一个名为 `T1000-E` 的磁盘弹出。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/T1000-EDriver.png" alt="pir" width={800} height="auto" /></p>

将下载好的 UF2 文件拖拽到弹出的磁盘中。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/FirmwareDr.png" alt="pir" width={800} height="auto" /></p>

固件成功烧录后，该磁盘会消失。此时设备中已经有固件，所以设备会自动重启。

## 配置

### 打开设备电源

按下按键开机。LED 会点亮，并播放一段下降的提示音。

### 关闭设备电源

长按按键 3 秒关机。LED 会熄灭，并播放一段下降的提示音。

:::tip
如果按下按键设备没有响应，请先给设备充电。不要使用快充充电器。
:::

### 获取 APP

可从 Google Store 或 Apple Store 下载。也可以[点击此处](https://meshcore.co.uk/apps.html)获取 Meshcore APP。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/MeshcoreAPP.png" alt="pir" width={300} height="auto" /></p>

### 通过 App 连接

点击 `Connect` 并选择目标设备。默认设备 ID 为 `Meshcore-MAC Address`。MAC 地址可以在设备背面看到。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/DeviceConnectAn.png" alt="pir" width={600} height="auto" /></p>

输入默认 PIN 码 `123456`，然后点击 `Pair` 以连接设备。

:::tip
如果连接失败，请打开手机的蓝牙列表并对设备执行 `forget` 或 `Unpair` 操作。然后再尝试重新连接。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/Unpair.jpg" alt="pir" width={300} height="auto" /></p>
:::

### 通过 Web 界面连接（BLE）

1. 打开 [MeshCore Web App](https://app.meshcore.nz/) 并点击 **Settings** 图标。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/meshcorewebblue1.png" alt="pir" width={600} height="auto" /></p>

2. 选择 **BLE** 选项卡，然后点击 **Scan Now**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/meshcorewebblue2.png" alt="pir" width={600} height="auto" /></p>

3. 在系统的蓝牙弹窗中，选择你的设备（例如 Meshcore-xxxxxx），然后点击 **Pair**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/meshcorewebblue3.png" alt="pir" width={600} height="auto" /></p>

4. 按提示输入默认蓝牙密码 `123456`，然后点击 **OK**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/meshcorewebblue4.png" alt="pir" width={600} height="auto" /></p>

5. 等待状态变为已连接，并在 MeshCore 界面中看到你的节点出现。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/meshcorewebblue5.png" alt="pir" width={600} height="auto" /></p>

### 配置 LoRa

为了开始在 Mesh 网络中通信，你必须设置所在的区域。此设置控制设备使用的频率范围，应根据你所在的地区进行设置。


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/SetRegion.png" alt="pir" width={600} height="auto" /></p>

然后重启设备，否则配置不会生效。

**区域列表**

|**区域代码**|**描述**|**频率范围 (MHz)**|**占空比 (%)**|**功率限制 (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|未设置|N/A|N/A|N/A|
|US|美国|902.0 - 928.0|100|30|
|EU_868|欧盟 868 MHz|869.4 - 869.65|10|27|

现在你已经在设备上设置好了 LoRa 区域，可以继续配置任意[LoRa 参数](https://github.com/meshcore-dev/MeshCore/blob/main/docs/faq.md#5-general)以满足你的需求。

### 配置 GPS

如果你想使用 GPS，请将其设置为启用。

你可以在 APP 的 `Position Settings` 中启用 GPS。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/GPSConfig.png" alt="pir" width={300} height="auto" /></p>

### 按钮

|按键操作|说明|
|--|--|
|按下 3 秒|开机/关机|
|双击|广播广告|
|三击|蜂鸣器开关|
|四击|GPS 开关|

## 消息传输

如果你有两台受支持的设备，并且你附近的 MeshCore 用户不多，可以把这两台设备都刷成 BLE Companion 固件，这样你就可以使用这些设备与附近的朋友和家人进行通信。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/MeshcoreFramework.png" alt="pir" width={900} height="auto" /></p>

### 广播（Advert）

MeshCore 允许你手动广播你的名称、位置和公共加密密钥，这些信息也会被签名以防止伪造。当你点击广播按钮时，它会通过 LoRa 广播这些数据。MeshCore 将其称为 Advert。有两种广播方式，“零跳数（zero hop）”和“泛洪（flood）”。

- **Zero hop** 意味着你的广播被发出给任何能听到的人，仅此而已。
- **Flooded** 意味着它被广播出去后，还会被所有听到它的中继节点重复转发。

你可以在 APP 上发送广播。同时你也可以直接在设备的广播页面发送广播。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/Advert.png" alt="pir" width={300} height="auto" /></p>

### 公开消息

在你配置好 LoRa 之后，你可以在主信道中发送消息。同一频段内的所有附近用户都能接收到。


### 私密消息

只有当两个设备都接收到对方的广播后，它们才会建立连接。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 常见问题（FAQ）

### 如何重启设备

 长按按钮，然后连接充电线。

## 故障排查

### 设备无法开机

- 为设备充电 1~2 小时

- 更换充电线

 - 如果仍然无效，长按设备按钮，然后连接充电线，查看电脑中是否会弹出一个磁盘。如果是，请[点击这里](https://wiki.seeedstudio.com/cn/sensecap_t1000_e_meshcore/#flash-the-bootloader)重新安装引导程序（bootloader）。

### 设备卡在启动循环中

**问题描述：**

设备会反复重启，串口也会反复连接和断开。

**解决方法：**

- 步骤 1：尝试手动进入 DFU 模式：长按设备按钮，然后**快速**连接充电线两次，绿色 LED 将常亮。

:::note
要成功进入 DFU 模式，你需要快速完成这个操作。你可能需要多试几次。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu-mode2.gif" alt="pir" width={600} height="auto" /></p>

- 步骤 2：擦除 Flash

- 步骤 3：烧录固件

### 设备变砖

#### 问题描述

设备无响应，没有指示灯，无法与 App 配对。

**1) 设备仍然可以进入 DFU 模式，则尝试烧录引导程序（bootloader）。**

#### 烧录引导程序（Bootloader）

- [Bootloader 下载](https://files.seeedstudio.com/wiki/SenseCAP/lorahub/t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip)

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash%20bootloader.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::danger note
在烧录引导程序时，请确保线缆连接稳定，并且在烧录过程中**不要**断开连接。
:::

**步骤 1：安装 Adafruit-nrfutil**

对于 Windows 用户，同时按下 "Win" 键和 "r" 键，然后在弹出的窗口中输入 "cmd"，按下 "Enter"。这样可以打开命令行。

对于 Mac 用户，同时按下 "Command" 键和 "Space" 键，即可打开 Spotlight。然后输入 "termial"，按下 "Return" 键。这样可以打开命令行。

**前提条件**

- [Python3](https://www.python.org/downloads/)
- [pip3](https://pip.pypa.io/en/stable/installation/)

在命令行中检查 python 和 pip 是否已成功安装。

```
python --version
```

```
python -m pip --version
```

然后应该会显示 "Python xxx" 和 "pip xxx"。如果没有，请尝试重新安装 Python。

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

对于 Windows 用户，你可能需要手动添加该路径。复制上一步显示的安装位置，然后按如下方式添加：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/AddPath.png" alt="pir" width={1000} height="auto" /></p>


</TabItem>

<TabItem value="sou" label="通过源码安装">

如果你在使用 PyPi 安装时遇到问题，或者想要修改该工具，使用此方法。首先克隆此仓库并进入其文件夹。

```
git clone https://github.com/adafruit/Adafruit_nRF52_nrfutil.git
cd Adafruit_nRF52_nrfutil
```

注意：下面的命令使用 `python3`，但是如果你使用的是 Windows，可能需要将其更改为 `python`，因为 Windows 上安装的 python 3.x 仍然使用 python.exe 这个名称。

要在你主目录的用户空间中安装：

```
pip3 install -r requirements.txt
python3 setup.py install
```

如果在运行 `pip3 install` 时出现权限错误，说明你的 `pip3` 版本较旧或被设置为尝试安装到系统目录。在这种情况下请使用 `--user` 参数：

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

你可以在 `Adafruit_nRF52_nrfutil\nordicsemi\dist\adafruit-nrfutil` 中找到 .exe 文件（如果你使用的是 Windows，则带有 `.exe`）。
为了方便使用，可以将其复制或移动到其他位置，例如在你的 %PATH% 中的某个目录。

</TabItem>
</Tabs>

**步骤 2：检查你的端口号**

将设备连接到电脑，并检查端口号。

以 Windows 用户为例：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Port.png" alt="pir" width={400} height="auto" /></p>

以 Mac 用户为例：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

**步骤 3：烧录引导程序**

在终端或命令提示符中，进入你下载引导程序压缩包的目录，并执行以下命令，将其中的端口替换为你设备的正确端口：

- **对于 Windows**：

```
adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p COMxx -b 115200 --singlebank --touch 1200
```
请将 COMXX 更改为你的端口号。例如，如果你的设备在 com6 上，请将命令更改为：

`adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p **COM6** -b 115200 --singlebank --touch 1200`

 部分设备在你输入此命令后会改变它们的端口号。所以如果安装失败，请再次检查端口号。

- **对于其他系统**：

```
adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-success.png" alt="pir" width={800} height="auto" /></p>

完成上述步骤后，请[点击这里](https://wiki.seeedstudio.com/cn/sensecap_t1000_e_meshcore/#firmware-flashing)烧录应用固件。

**2) 设备无法进入 DFU 模式，但可以检测到串口**

- 打开串口工具

- 将波特率设置为 `1200`。

- 连接设备。
   连接时指示灯会短暂闪烁。持续尝试，直到指示灯保持常亮，表示设备已回到 DFU 模式，然后依次烧录 [bootloader](https://wiki.seeedstudio.com/cn/sensecap_t1000_e_meshcore/#flash-the-bootloader)-> [擦除 flash](https://wiki.seeedstudio.com/cn/sensecap_t1000_e_meshcore/#flash-erase) -> [烧录固件](https://wiki.seeedstudio.com/cn/sensecap_t1000_e_meshcore/#flash-firmware)

**3) 设备无法进入 DFU 模式且没有串口显示**

- 长按设备按钮，然后连接充电线。电脑中弹出磁盘后，你可能会看到串口。

- 如果仍然无效，请断开充电线，将设备放置几天直到电池完全耗尽，然后再连接充电线并尝试重新配对。

**4) 如果以上步骤都无法解决，请联系技术支持：support@sensecapmx.com**

### 固件烧录失败

- **串口未收到数据**

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/no-dfu-device.png" alt="pir" width={500} height="auto" /></p>

 检查设备是否处于 DFU 模式，当设备处于 DFU 模式时，绿色指示灯会常亮。

- **无法打开串口**

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wrong-port.png" alt="pir" width={500} height="auto" /></p>

 检查端口号是否正确，或尝试其他端口。

 ### 设备自动关机

 #### 问题描述

 - 设备开机后，运行一段时间会自动关机或重启。 
 - 串口日志运行一段时间后停止。

 这可能是因为在设备处于以下状态时，手动强制重启或关机所导致的：尚未完成消息传输过程、正在配置中......

 #### 故障排查

执行一次 [flash-erase](https://wiki.seeedstudio.com/cn/sensecap_t1000_e_meshcore/#flash-erase)。 

 ### 恢复出厂设置
如果你想恢复到默认设置，可以执行出厂重置。你可以通过以下两种方法进行出厂重置。

- 对设备进行[Flash erase](https://wiki.seeedstudio.com/cn/sensecap_t1000_e_meshcore/#flash-erase)。然后重新烧录最新固件。

- 在 App 上点击 `Factory Reset` 按钮。设备会自动以出厂配置重启。 
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/Reset.png" alt="pir" width={400} height="auto" /></p>

### 信号质量

  - **SNR** 反映通信链路的质量。正常设备通常在 -7 dB 以上工作。SNR 低于 -10 dB 的设备表示性能较差。

  - **RSSI** 由设备及其周围环境共同决定。正常设备通常在 -110 dBm 以上工作。RSSI 低于 -115 dBm 的设备被认为性能较差。 

      为获得最佳信号效果，请在开阔、无遮挡且干扰最少的区域中使用设备。

### Pogo Pin 定义

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/PogoPin4.png" alt="pir" width={900} height="auto" /></p>

## 资源

- [SenseCAP T1000 Tracker 规格书](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_Tracker_T1000_Datasheet.pdf)
- [T1000-E for Meshtastic 功耗测试与电池寿命计算](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/T1000-E%20for%20Meshtastic%20Consumption%20Test%20and%20Battery%20Life%20Calculation.xlsx)
- [UN38.3](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/UN38.3.zip)

## 技术支持与产品讨论

感谢你选择我们的产品！我们致力于为你提供多种支持，确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
