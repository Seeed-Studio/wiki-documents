---
description: 使用 SenseCAP MeshTracker X1 搭配 Meshcore 的入门指南。指导设备安装、固件烧录和设备连接。
title: 在 SenseCAP MeshTracker X1 上开始使用 MeshCore
keywords:
  - Tracker
  - Meshtastic
  - 双频 GNSS
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100093876._._.png
slug: /sensecap_meshtracker_x1_meshcore
sku: 100087698
sidebar_position: 3
last_update:
  date: 3/11/2026
  author: Michelle Huang
createdAt: '2026-02-28'
updatedAt: '2026-07-31'
url: https://wiki.seeedstudio.com/cn/sensecap_meshtracker_x1_meshcore/
---

## 固件烧录


<Tabs>
<TabItem value="111" label="通过 Web Flasher">

使用 USB 线将设备连接到电脑。

:::warning
在数据传输过程中请保持 USB 线连接，否则设备可能会损坏。
:::

前往 [Meshcore Web Flasher](https://meshcore.io/flasher)。

在 `Community Firmware` 分组中选择 `Seeed Studio SenseCAP MeshTracker X1`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/ScreenShot_2026-08-17_144406_980.png" alt="pir" width={800} height="auto" /></p>

选择 `Companion Bluetooth`。烧录了 Bluetooth companion 固件的设备可以连接到 APP。如果你想烧录其他固件，请[点击这里](https://docs.meshcore.io/)查看教程。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/X1Selection.png" alt="pir" width={800} height="auto" /></p>

**步骤 1 擦除 Flash**

点击 `Enter DFU Mode`，选择名为 "nRF xxx" 或 "TinyUSB" 的串口。然后点击 `Erase Flash` 并选择串口。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/X1Selection.png" alt="pir" width={800} height="auto" /></p>

如果你点击了 `Erase Flash` 但没有任何响应，请再次点击 `Enter DFU`，然后再点击 `Erase Flash`，以确保已成功进入 DFU。

如果你看到 "Flashing erase firmware:100%"，说明设备已成功擦除。

<p style={{textAlign: 'center'}}><img src=" https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSuccess.png" alt="pir" width={800} height="auto" /></p>

**步骤 2 烧录固件**

点击 `Enter DFU Mode`，选择名为 "nRF xxx" 或 "TinyUSB" 的串口。然后点击 `Flash` 并选择串口。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/X1Selection.png" alt="pir" width={800} height="auto" /></p>

如果你点击了 `Flash` 但没有任何响应，请再次点击 `Enter DFU`，然后再点击 `Flash`，以确保已成功进入 DFU。

当进度条完全填满时，表示 Flash 已完成。然后设备会自动重启。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/FlashProgress.png" alt="pir" width={800} height="auto" /></p>

</TabItem>

<TabItem value="222" label="拖拽烧录">
使用 USB 线将设备连接到电脑。

:::warning
在数据传输过程中请保持 USB 线连接，否则设备可能会损坏。
:::

前往 [Meshcore Web Flasher](https://meshcore.io/flasher)。

在 `Community Firmware` 分组中选择 `Seeed Studio SenseCAP MeshTracker X1`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/ScreenShot_2026-08-17_144406_980.png" alt="pir" width={800} height="auto" /></p>

选择 `Companion Bluetooth`。烧录了 Bluetooth companion 固件的设备可以连接到 APP。如果你想烧录其他固件，请[点击这里](https://docs.meshcore.io/)查看教程。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/BluetoothCompanion.png" alt="pir" width={800} height="auto" /></p>

**步骤 1 擦除 Flash**

下载 UF2 文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/EraseFirmware.png" alt="pir" width={800} height="auto" /></p>

尝试手动进入 DFU 模式：按住设备按键，然后**迅速**通过 USB 线将设备连接到电脑，持续按住按键直到白色 ⚪️ LED 亮起。

:::warning
要成功进入 DFU 模式，你需要快速完成这一操作。可能需要多次尝试。
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

尝试手动进入 DFU 模式：按住设备按键，然后**迅速**通过 USB 线将设备连接到电脑，持续按住按键直到白色 ⚪️ LED 亮起。

:::warning
要成功进入 DFU 模式，你需要快速完成这一操作。可能需要多次尝试。
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

从 Google Store 或 Apple Store 下载，或者[点击这里](https://meshcore.io/#download)获取 Meshcore APP。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/MeshcoreAPP.png" alt="pir" width={300} height="auto" /></p>

#
点击 `Connect` 并选择目标设备。默认设备 ID 为 `Meshcore-MAC Address`。MAC 地址可以在设备背面看到。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/DeviceConnectAn.png" alt="pir" width={600} height="auto" /></p>

输入默认 PIN 码 `123456`，然后点击 `Pair` 连接设备。

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

如果你有两台受支持的设备，并且你附近没有太多 MeshCore 用户，可以将两台设备都刷写为 BLE Companion 固件，这样你就可以使用你的设备与附近的朋友和家人进行通信。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/MeshCoreFramework.png" alt="pir" width={800} height="auto" /></p>

### 广播（Advert）

MeshCore 允许你手动广播你的姓名、位置和公有加密密钥，这些信息也会被签名以防止伪造。当你点击 advert 按钮时，它会通过 LoRa 广播这些数据。MeshCore 将此称为 Advert。有两种广播方式，“zero hop”和“flood”。

- **Zero hop** 意味着你的广播只会发送给任何能听到它的人，仅此而已。
- **Flooded** 意味着它被广播出去后，会被所有听到它的中继器重复转发。

你可以在 APP 上发送 advert，也可以直接在设备的 advert 页面上发送 advert。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/Advert.png" alt="pir" width={300} height="auto" /></p>

### 公共消息

在你配置好 LoRa 之后，你可以在主信道中发送消息。同一频段内的所有附近用户都能收到。


### 私人消息

只有当两个设备都接收到对方的 advert 时，它们才会建立连接。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 常见问题


### 如何查看设备 ID

MAC 地址的 `last four digits`（最后四位）就是设备 ID

例如，下方设备的设备 ID 为 `A0D4`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/MACAd.png" alt="pir" width={800} height="auto" /></p>


### 如何重启设备

 按住按键不放，然后连接充电线，立即松开按键。

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/lv_0_20260818150011.gif" alt="pir" width={300} height="auto" /></p>

 :::note
  按住按键不放，然后连接充电线，持续按住超过 3 秒会强制设备进入 DFU 模式。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/lv_0_20260817162729.gif" alt="pir" width={300} height="auto" /></p>

   如果你想退出 DFU 模式，只需按住按键不放，然后连接充电线，立即松开按键即可。

 :::

## 故障排查

### 设备无法开机

- 使用一根已知正常的 USB 线持续为设备 `charge the device` 充电 1–2 小时，以确保电池有足够电量唤醒系统。

- 如果设备在充电后仍然没有响应，请按如下方式 `perform a hard reset`：拔下 USB 线。按住按键不放，然后在保持按键按下的同时插入 USB 线。大约按住 3 秒后松开。这会强制系统复位。

 - 如果仍然无效，将 USB 线连接到电脑。按住设备按键，然后将设备连接到电脑，查看电脑中是否弹出一个磁盘。如果有，请重新安装 bootloader。

### 设备卡在启动循环中

**现象描述：**

设备会不断重启，串口会反复连接和断开。

**解决方案：**

- 步骤 1：尝试手动进入 DFU 模式：按住设备按键不放，然后**快速**连接充电线两次

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/lv_0_20260817162729.gif" alt="pir" width={300} height="auto" /></p>

如果白色 LED 常亮，则表示设备已进入 DFU 模式。

:::note
要成功进入 DFU 模式，你需要快速完成上述操作。可能需要多次尝试。
:::

- 步骤 2：擦除 Flash

- 步骤 3：烧录固件

### Bootloader 安装


- [Bootloader 下载](https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/MeshTrackerX1/Bootloader.zip)

:::danger note
在刷写 bootloader 时，请确保线缆连接稳定，并且在刷写过程中 **不要** 断开连接。
:::

**步骤 1：安装 Adafruit-nrfutil**

对于 Windows 用户，同时按下 "Win" 键和 "r" 键，然后在弹出的窗口中输入 "cmd"，再按 "Enter"。这样可以打开命令行。

对于 MAC 用户，同时按下 "Command" 键和 "Space" 键，即可打开 Spotlight。然后输入 "termial"，按下 "Return"。这样可以打开命令行。

**前置条件**

- [Python3](https://www.python.org/downloads/)
- [pip3](https://pip.pypa.io/en/stable/installation/)

在命令行中检查 Python 和 pip 是否安装成功。

```
python --version
```

```
python -m pip --version
```

然后应该会出现 "Python xxx" 和 "pip xxx"。如果没有，请尝试重新安装 Python。

这是安装最新版本的推荐方法：

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

对于 Windows 用户，打开设备管理器，进入 `port`，设备连接后新出现的端口号就是设备的端口号。

对于 Mac 用户，例如：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

对于 Windows 用户，例如：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Port.png" alt="pir" width={400} height="auto" /></p>

**步骤 3：刷写 bootloader**

在终端或命令提示符中，进入你下载 bootloader 压缩包的目录，并执行以下命令，将端口替换为你设备的正确端口：

- **Windows 平台**：

```
adafruit-nrfutil --verbose dfu serial --package Bootloader.zip -p COMxx -b 115200 --singlebank --touch 1200
```

请将 COMXX 改为你的 COM 号。例如，如果你的设备在 com6 上，将命令改为：

`adafruit-nrfutil --verbose dfu serial --package Bootloader.zip -p **COM6** -b 115200 --singlebank --touch 1200`

 部分设备在你输入此命令后会改变端口号。因此如果安装失败，请再次检查端口号。

- **其他平台**：

```
adafruit-nrfutil --verbose dfu serial --package Bootloader.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-success.png" alt="pir" width={800} height="auto" /></p>

完成以上步骤后，你可以按照此[步骤](https://wiki.seeedstudio.com/cn/sensecap_meshtracker_x1_meshcore/#firmware-flashing)来刷写应用固件。


**2) 设备无法进入 DFU 模式，但可以检测到串口**。

- 打开一个串口工具

- 将波特率设置为 `1200`。

- 连接设备。
   连接时指示灯会短暂闪烁。持续尝试，直到指示灯保持常亮，这表示设备可以回到 DFU 模式，然后按顺序执行 [flash bootloader](https://wiki.seeedstudio.com/cn/sensecap_meshtracker_x1_meshcore/#bootloader-installation) -> [erase flash](https://wiki.seeedstudio.sensecap_meshtracker_x1_meshcore/#firmware-flashing) -> [flash the firmware](https://wiki.seeedstudio.com/cn/sensecap_meshtracker_x1_meshcore/#firmware-flashing)。

**3) 设备无法进入 DFU 模式，且没有串口显示**

- 按住设备按键不放，然后连接充电线，立即松开按键。当电脑中弹出一个磁盘后，你就可能看到串口。

- 如果仍然无效，请断开充电线，将设备放置几天直至电池完全耗尽，然后重新连接充电线并再次尝试配对。

**4) 如果以上步骤都无效，请联系技术支持：support@sensecapmx.com**

 ### 设备自动关机

- **现象描述**

 - 设备开机后，会在一段时间后自动关机或重启。
 - 串口日志运行一段时间后停止。

 这可能是由于在以下状态下手动强制重启或关闭设备导致的：尚未完成消息传输过程、正在配置中……

- **排查步骤**

 [点击这里](https://wiki.seeedstudio.com/cn/sensecap_meshtracker_x1_meshcore/#firmware-flashing) 执行 flash-erase 操作。


### 信号质量

  - **SNR** 反映通信链路的质量。正常设备通常在 -7 dB 以上工作。SNR 低于 -10 dB 的设备表示性能较差。

  - **RSSI** 由设备及其周围环境共同决定。正常设备通常在 -110 dBm 以上工作。RSSI 低于 -115 dBm 的设备被认为性能较差。

      为了获得最佳信号效果，请在开阔、无遮挡且干扰最小的环境中使用该设备。


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
