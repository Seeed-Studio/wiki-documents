---
description: 开始在 Meshcore 上使用 SenseCAP MeshTracker X1。指导设备安装、固件烧录和设备连接。
title: 开始使用 MeshCore
keywords:
  - 追踪器
  - Meshtastic
  - 双频 GNSS
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100093876._._.png
slug: /sensecap_meshtracker_x1_meshcore
sku: 100087698
sidebar_position: 3
last_update:
  date: 10/30/2026
  author: Advent Jiang
createdAt: '2026-02-28'
updatedAt: '2026-10-30'
url: https://wiki.seeedstudio.com/cn/sensecap_meshtracker_x1_meshcore/
---

# 在 SenseCAP MeshTracker X1 上开始使用 MeshCore

## 固件烧录


<Tabs>
<TabItem value="111" label="通过 Web Flasher">

使用 USB 线将设备连接到电脑。

:::warning
请在数据传输过程中保持 USB 线连接，否则设备可能会损坏。
:::

前往 [Meshcore Web Flasher](https://meshcore.io/flasher)。

在 `Community Firmware` 分组中选择 `Seeed Studio SenseCAP MeshTracker X1`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/ScreenShot_2026-08-17_144406_980.png" alt="pir" width={800} height="auto" /></p>

选择 `Companion Bluetooth`。烧录了 Bluetooth companion 固件的设备可以连接到 APP。如果你想烧录其他固件，请[点击这里](https://docs.meshcore.io/)查看教程。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/X1Selection.png" alt="pir" width={800} height="auto" /></p>

**步骤 1 擦除 Flash**

点击 `Enter DFU Mode`，选择名为 "nRF xxx" 或 "TinyUSB" 的串口。然后点击 `Erase Flash` 并选择串口。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/X1Selection.png" alt="pir" width={800} height="auto" /></p>

如果你点击了 `Erase Flash` 但没有响应，请再次点击 `Enter DFU`，然后再点击 `Erase Flash`，以确保已成功进入 DFU。

如果你看到 "Flashing erase firmware:100%"，说明设备已成功擦除。

<p style={{textAlign: 'center'}}><img src=" https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSuccess.png" alt="pir" width={800} height="auto" /></p>

**步骤 2 烧录固件**

点击 `Enter DFU Mode`，选择名为 "nRF xxx" 或 "TinyUSB" 的串口。然后点击 `Flash` 并选择串口。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/X1Selection.png" alt="pir" width={800} height="auto" /></p>

如果你点击了 `Flash` 但没有响应，请再次点击 `Enter DFU`，然后再点击 `Flash`，以确保已成功进入 DFU。

当进度条完全填满时，表示 Flash 已完成。然后设备会自动重启。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/FlashProgress.png" alt="pir" width={800} height="auto" /></p>

</TabItem>

<TabItem value="222" label="拖拽烧录">
使用 USB 线将设备连接到电脑。

:::warning
请在数据传输过程中保持 USB 线连接，否则设备可能会损坏。
:::

前往 [Meshcore Web Flasher](https://meshcore.io/flasher)。

在 `Community Firmware` 分组中选择 `Seeed Studio SenseCAP MeshTracker X1`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/ScreenShot_2026-08-17_144406_980.png" alt="pir" width={800} height="auto" /></p>

选择 `Companion Bluetooth`。烧录了 Bluetooth companion 固件的设备可以连接到 APP。如果你想烧录其他固件，请[点击这里](https://docs.meshcore.io/)查看教程。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/BluetoothCompanion.png" alt="pir" width={800} height="auto" /></p>

**步骤 1 擦除 Flash**

下载 UF2 文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/EraseFirmware.png" alt="pir" width={800} height="auto" /></p>

尝试手动进入 DFU 模式：按住设备按键，然后**快速**通过 USB 线将设备连接到电脑，持续按住按键直到白色 ⚪️ LED 亮起。

:::warning
要成功进入 DFU 模式，你需要快速完成上述操作。可能需要多次尝试。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/lv_0_20260817162729.gif" alt="pir" width={300} height="auto" /></p>

大约 10~15 秒后，你会看到一个名为 `X1` 的磁盘弹出。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/X1Driver.png" alt="pir" width={800} height="auto" /></p>

将下载好的 UF2 文件拖拽到弹出的磁盘中。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/EraseDragDisk.png" alt="pir" width={800} height="auto" /></p>

固件烧录成功后，该磁盘会消失。此时设备中没有固件，所以设备`不会`自动重启。

**步骤 2 烧录固件**

选择最新的固件版本。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/VersionSelection.png" alt="pir" width={500} height="auto" /></p>

下载 UF2 文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/Firmwareuf2.png" alt="pir" width={500} height="auto" /></p>

尝试手动进入 DFU 模式：按住设备按键，然后**快速**通过 USB 线将设备连接到电脑，持续按住按键直到白色 ⚪️ LED 亮起。

:::warning
要成功进入 DFU 模式，你需要快速完成上述操作。可能需要多次尝试。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/lv_0_20260817162729.gif" alt="pir" width={300} height="auto" /></p>

大约 10~15 秒后，你会看到一个名为 `X1` 的磁盘弹出。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/X1Driver.png" alt="pir" width={800} height="auto" /></p>

将下载好的 UF2 文件拖拽到弹出的磁盘中。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/UF2FirmwareDrag.png" alt="pir" width={800} height="auto" /></p>

固件烧录成功后，该磁盘会消失。此时设备中没有固件，所以设备会自动重启。

</TabItem>

</Tabs>

## 配置

### 启动设备

按下按键开机。LED 会亮起，并播放一个上升的提示音。

### 关闭设备

长按按键 3 秒关机。LED 会熄灭，并播放一个下降的提示音。

:::tip
如果按下按键设备没有响应，请先为其充电。不要使用快充充电器。
:::

### APP 连接

可从 Google Store 或 Apple Store 下载。或者[点击这里](https://meshcore.io/#download)获取 Meshcore APP。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/MeshcoreAPP.png" alt="pir" width={300} height="auto" /></p>

#
点击 `Connect` 并选择目标设备。默认设备 ID 为 `Meshcore-MAC Address`。MAC 地址可以在设备背面看到。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/DeviceConnectAn.png" alt="pir" width={600} height="auto" /></p>

输入默认 PIN 码 `123456`，然后点击 `Pair` 以连接设备。

:::tip
如果连接失败，请打开手机的蓝牙列表并 `forget` 或 `Unpair` 该设备，然后再尝试重新连接。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/Unpair.jpg" alt="pir" width={300} height="auto" /></p>
:::

### 配置 LoRa

为了开始在 mesh 网络中通信，你必须设置所在区域。该设置控制设备使用的频率范围，应根据你所在的地区进行设置。


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/SetRegion.png" alt="pir" width={600} height="auto" /></p>

然后重启设备，否则配置不会生效。

**区域列表**

|**区域代码**|**描述**|**频率范围 (MHz)**|**占空比 (%)**|**功率限制 (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|未设置|N/A|N/A|N/A|
|US|美国|902.0 - 928.0|100|30|
|EU_868|欧盟 868 MHz|869.4 - 869.65|10|27|

现在你已经在设备上设置了 LoRa 区域，可以继续配置任意[LoRa 参数](https://github.com/meshcore-dev/MeshCore/blob/main/docs/faq.md#5-general)以满足你的需求。


## 高级配置

### 通过 Web 界面连接（BLE）

1. 打开 [MeshCore Web App](https://app.meshcore.nz/) 并点击 **Settings** 图标。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/meshcorewebblue1.png" alt="pir" width={800} height="auto" /></p>

2. 选择 **BLE** 选项卡，然后点击 **Scan Now**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/meshcorewebblue2.png" alt="pir" width={800} height="auto" /></p>

3. 在系统蓝牙弹窗中选择你的设备（例如 Meshcore-xxxxxx），然后点击 **Pair**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/meshcorewebblue3.png" alt="pir" width={800} height="auto" /></p>

4. 按提示输入默认蓝牙密码 `123456`，然后点击 **OK**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/meshcorewebblue4.png" alt="pir" width={800} height="auto" /></p>

5. 等待状态变为已连接，并在 MeshCore 界面中看到你的节点。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/meshcorewebblue5.png" alt="pir" width={800} height="auto" /></p>

### 配置 GPS

如果你想使用 GPS，请将其设置为启用。

你可以进入 APP 的 `Position Settings` 来启用 GPS。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/GPSConfig.png" alt="pir" width={300} height="auto" /></p>


## 消息传输

如果你有两台受支持的设备，并且你附近没有太多 MeshCore 用户，可以将两台设备都刷写为 BLE Companion 固件，这样你就可以使用这些设备与附近的朋友和家人进行通信。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/MeshCoreFramework.png" alt="pir" width={800} height="auto" /></p>

### 广播（Advert）

MeshCore 允许你手动广播你的姓名、位置和公钥，这些信息也会被签名以防止伪造。当你点击广播按钮时，它会通过 LoRa 广播这些数据。MeshCore 将此称为 Advert。有两种广播方式，“zero hop”和“flood”。

- **Zero hop** 意味着你的广播只会发送给能听到它的设备，仅此而已。
- **Flooded** 意味着广播发出后，会被所有听到它的中继设备重复转发。

你可以在 APP 上发送广播，也可以直接在设备的广播页面上发送广播。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/Advert.png" alt="pir" width={300} height="auto" /></p>

### 公共消息

在你配置好 LoRa 之后，你可以在主信道中发送消息。同一频段内的所有附近用户都能收到。


### 私人消息

只有当两台设备都接收到对方的广播后，它们之间才会建立连接。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 常见问题

### 按钮快捷操作

X1 Companion 固件（v1.18.0+）支持按钮多次按压的快捷操作。每次按压之间必须在 0.5 秒以内。

| 按钮操作 | 功能 | 屏幕反馈 |
| --- | --- | --- |
| 单击 | 唤醒 / 刷新显示屏 | — |
| 双击 | 发送一次 Advert | `Advert sent!` |
| 三击 | 循环切换告警模式：蜂鸣+震动 → 仅蜂鸣 → 仅震动 → 静音 | `Alerts: ...` |
| 四击 | 切换 GPS 开 / 关 | `GPS: Enabled` / `GPS: Disabled` |
| 长按 3 秒（连接充电线时） | 强制重置 / 进入 DFU 模式 | — |

:::note
- 在三击时，新告警模式会通过蜂鸣和/或震动进行确认，因此你无需看屏幕也能切换模式。
- 按钮按下 4 次或更多次时，始终被视为四击。
- 关于长按行为（重启和 DFU 模式）的详细信息，请参见 [How to reboot the device](#how-to-reboot-the-device)。
:::

### 如何查看设备 ID

MAC 地址的 `后四位` 即为设备 ID

例如，下方设备的设备 ID 为 `A0D4`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/MACAd.png" alt="pir" width={800} height="auto" /></p>


### 如何重启设备

 按住按钮不放，然后连接充电线，立即松开按钮。

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/lv_0_20260818150011.gif" alt="pir" width={300} height="auto" /></p>

 :::note
  按住按钮不放，然后连接充电线，持续按住超过 3 秒会强制设备进入 DFU 模式。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/lv_0_20260817162729.gif" alt="pir" width={300} height="auto" /></p>

   如果你想退出 DFU 模式，只需按住按钮不放，然后连接充电线，立即松开按钮。

 :::

## 故障排查

### 固件更新失败 / OTA 恢复

如果你的 SenseCAP MeshTracker X1 无法启动、无响应，或者在固件更新后白色 ⚪️ LED 一直常亮，设备可能卡在 DFU 模式。请尝试以下操作：

1. 强制重启以退出 DFU 模式：断开 USB 充电线，按住设备按钮不放，连接 USB 充电线后立即松开按钮。不要持续按住按钮——在连接线缆后继续按住超过 3 秒会再次强制设备进入 DFU 模式。
2. 检查设备是否能正常启动。如果仍然不行，用 USB 数据线将设备连接到电脑，并按照 [Firmware Flashing](#firmware-flashing) 指南进入 DFU 模式，擦除 Flash 并重新安装 MeshCore 固件。
3. 如果设备仍然无法恢复，请按照 [Bootloader Installation](#bootloader-installation) 重新烧录 bootloader，然后重新安装应用固件。

在擦除或烧录固件过程中，请不要强制重启或拔掉 USB 线。如果设备无法进入 DFU 模式或无法被电脑识别，请联系技术支持。

### 设备无法开机

- 使用一根已知正常的 USB 线持续 `为设备充电` 1–2 小时，以确保电池有足够电量唤醒系统。

- 如果设备在充电后仍无响应，请按如下方式 `执行硬重置`：拔掉 USB 线。按住按钮不放，然后插入 USB 线并立即松开按钮。这会强制系统重置。

 - 如果仍然无效，将 USB 线连接到电脑。按住设备按钮，然后将设备连接到电脑，查看电脑中是否弹出一个磁盘。如果有，请重新安装 bootloader。

### 设备卡在启动循环中

**现象说明：**

设备会不断重启，串口会反复连接和断开。

**解决方案：**

- 步骤 1：尝试手动进入 DFU 模式：按住设备按钮不放，然后**迅速**通过 USB 线将设备连接到电脑，持续按住按钮直到白色 ⚪️ LED 亮起。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/lv_0_20260817162729.gif" alt="pir" width={300} height="auto" /></p>

如果白灯常亮，则说明设备已进入 DFU 模式。

:::note
要成功进入 DFU 模式，你需要快速完成上述操作，可能需要多次尝试。
:::

- 步骤 2：擦除 Flash

- 步骤 3：烧录固件

### Bootloader 安装


- [Bootloader 下载](https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/Bootloader.zip)

:::danger note
在烧录 bootloader 时，请确保线缆连接稳定，并且在烧录过程中 **不要** 断开连接。
:::

**步骤 1：安装 Adafruit-nrfutil**

对于 Windows 用户，同时按下 "Win" 键和 "r" 键，在弹出的窗口中输入 "cmd"，然后按 "Enter"。这样可以打开命令行。

对于 MAC 用户，同时按下 "Command" 键和 "Space" 键，以打开 Spotlight。然后输入 "termial"，按 "Return"。这样可以打开命令行。

**前置条件**

- [Python3](https://www.python.org/downloads/)
- [pip3](https://pip.pypa.io/en/stable/installation/)

在命令行中检查 Python 和 pip 是否已成功安装。

```
python --version
```

```
python -m pip --version
```

然后应该会出现 "Python xxx" 和 "pip xxx"。如果没有，请尝试重新安装 Python。

这是安装最新版本的推荐方式：

```
pip3 install --user adafruit-nrfutil
```

检查安装路径：

```
python -m pip show adafruit-nrfutil
```

这是安装位置：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/location.png" alt="pir" width={600} height="auto" /></p>

对于 Windows 用户，你可能需要手动添加路径。复制上一步中显示的安装位置，然后按如下方式添加：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/AddPath.png" alt="pir" width={1000} height="auto" /></p>

**步骤 2：检查端口号**

将设备连接到电脑，并检查端口号。

对于 Windows 用户，打开设备管理器，进入 `port`，设备连接后新出现的端口号即为设备端口号。

对于 Mac 用户，例如：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

对于 Windows 用户，例如：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Port.png" alt="pir" width={400} height="auto" /></p>

**步骤 3：烧录 bootloader**

在终端或命令提示符中，进入你下载 bootloader 压缩包的目录，并执行以下命令，将端口替换为你设备的正确端口：

- **Windows 平台**：

```
adafruit-nrfutil --verbose dfu serial --package Bootloader.zip -p COMxx -b 115200 --singlebank --touch 1200
```

请将 COMXX 改为你的 COM 号。例如，如果你的设备在 com6 上，请将命令改为：

`adafruit-nrfutil --verbose dfu serial --package Bootloader.zip -p **COM6** -b 115200 --singlebank --touch 1200`

 部分设备在你输入此命令后会改变端口号。因此如果安装失败，请重新检查端口号。

- **其他平台**：

```
adafruit-nrfutil --verbose dfu serial --package Bootloader.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-success.png" alt="pir" width={800} height="auto" /></p>

当你完成以上步骤后，你可以按照这个[步骤](https://wiki.seeedstudio.com/cn/sensecap_meshtracker_x1_meshcore/#固件烧录)烧录应用固件。


**2) 设备无法进入 DFU 模式，但可以检测到串口**。

- 打开一个串口工具

- 将波特率设置为 `1200`。

- 连接设备。
   当你连接设备时，指示灯会短暂闪烁。重复尝试，直到指示灯常亮，这意味着设备可以回到 DFU 模式，然后[烧录 bootloader](https://wiki.seeedstudio.com/cn/sensecap_meshtracker_x1_meshcore/#bootloader-安装) -> [擦除 flash](https://wiki.seeedstudio.com/cn/sensecap_meshtracker_x1_meshcore/#固件烧录) -> [烧录固件](https://wiki.seeedstudio.com/cn/sensecap_meshtracker_x1_meshcore/#固件烧录)。

**3) 设备无法进入 DFU 模式，且没有串口显示**

- 按住设备按键，然后连接充电线，随后立即松开按键。当电脑上弹出一个磁盘后，你可能就能看到串口。

- 如果仍然不行，请断开充电线，将设备放置几天直到电池完全耗尽，然后再连接充电线并尝试重新配对。

**4) 如果以上步骤都无效，请联系技术支持：support@sensecapmx.com**

 ### 设备自动关机

- **现象描述**

 - 设备开机后，过一段时间会自动关机或重启。 
 - 串口日志运行一段时间后停止。

 这可能是由于在设备处于以下状态时，手动强制重启或关机导致的：尚未完成消息发送过程、正在配置中……

- **排查步骤**

 [点击这里](https://wiki.seeedstudio.com/cn/sensecap_meshtracker_x1_meshcore/#固件烧录)执行一次 flash 擦除。 


### 信号质量

  - **SNR** 反映通信链路的质量。正常设备通常在 -7 dB 以上工作。SNR 低于 -10 dB 的设备表示性能较差。

  - **RSSI** 由设备及其周围环境共同决定。正常设备通常在 -110 dBm 以上工作。RSSI 低于 -115 dBm 的设备被认为性能较差。 

      为获得最佳信号效果，请在开阔、无遮挡且干扰较少的环境中使用设备。


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
