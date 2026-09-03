---
description: 通过 Web USB 或拖放方式在 Wio Tracker L1 Pro 上烧录 MeshCore 固件的指南，以及用于 LoRa 区域、GPS 和发送消息的应用配置。
title: 在 Wio Tracker L1 Pro 上开始使用 MeshCore
keywords:
  - Meshcore
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-l1.webp
slug: /get_started_with_other_mesh_firmware
sku: 114993648,114993649,114993653,114993654
sidebar_position: 3
last_update:
  date: 09/02/2026
  author: Advent Jiang
createdAt: '2026-02-28'
updatedAt: '2026-08-10'
url: https://wiki.seeedstudio.com/cn/get_started_with_other_mesh_firmware/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/1-100030144-wio-tracekr-l1-pro-meshcore.jpg" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Tracker-L1-Pro-for-Meshcore-p-6717.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

<br></br>

## 固件烧录

### 方法 1：通过 Web Flasher

使用 USB 线将设备连接到电脑。请确保数据线支持数据传输。

:::warning
请在数据传输过程中保持 USB 线连接，否则设备可能会损坏。
:::

前往 [Meshcore Web Flasher](https://meshcore.io/flasher)。

在 `Community Firmware` 分组中选择 `Seeed Studio Wio Tracker L1 Pro`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/L1ProMeshcoreSelection.png" alt="pir" width={800} height="auto" /></p>

选择 `Companion Bluetooth`。烧录了 Bluetooth companion 固件的设备可以连接到 APP。如果你想烧录其他固件，请[点击这里](https://docs.meshcore.io/)查看教程。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/BluetoothCompanion.png" alt="pir" width={800} height="auto" /></p>

#### 擦除 Flash

点击 `Enter DFU Mode`，选择名为 "L1 Pro" 或 "TinyUSB serial" 的串口。然后点击 `Erase Flash` 并选择串口。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSe.png" alt="pir" width={800} height="auto" /></p>

如果你点击了 `Erase Flash` 但没有任何响应，请再次点击 `Enter DFU`，然后再点击 `Erase Flash`，以确保已成功进入 DFU。

如果你看到 "Flashing erase firmware:100%"，说明设备已成功擦除。

<p style={{textAlign: 'center'}}><img src=" https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSuccess.png" alt="pir" width={800} height="auto" /></p>

#### 烧录固件

点击 `Enter DFU Mode`，选择名为 "L1 Pro" 或 "TinyUSB" serial 的串口。然后点击 `Flash` 并选择串口。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSe.png" alt="pir" width={800} height="auto" /></p>

如果你点击了 `Flash` 但没有任何响应，请再次点击 `Enter DFU`，然后再点击 `Flash`，以确保已成功进入 DFU。

当进度条完全填满时，表示 Flash 已完成。然后设备会自动重启。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashProgress.png" alt="pir" width={800} height="auto" /></p>

### 方法 2：拖放烧录

使用 USB 线将设备连接到电脑。请确保数据线支持数据传输。

:::warning
请在数据传输过程中保持 USB 线连接，否则设备可能会损坏。
:::

前往 [Meshcore Web Flasher](https://meshcore.io/flasher)。

在 `Community Firmware` 分组中选择 `Seeed Studio Wio Tracker L1 Pro`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/L1ProMeshcoreSelection.png" alt="pir" width={800} height="auto" /></p>

选择 `Companion Bluetooth`。烧录了 Bluetooth companion 固件的设备可以连接到 APP。如果你想烧录其他固件，请[点击这里](https://docs.meshcore.io/)查看教程。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/BluetoothCompanion.png" alt="pir" width={800} height="auto" /></p>

#### 擦除 Flash

下载 UF2 文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EraseUF2.png" alt="pir" width={800} height="auto" /></p>

双击 RST 按钮手动进入 DFU 模式。大约 10~15 秒后，你会看到一个名为 `TRACKER L1` 的磁盘弹出。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/ManualDFU.png" alt="pir" width={800} height="auto" /></p>

将下载好的 UF2 文件拖到弹出的磁盘中。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/DragDrop.png" alt="pir" width={800} height="auto" /></p>

固件成功烧录后，该磁盘会消失。此时设备中没有固件，因此设备 `NOT` 会自动重启。

#### 烧录固件

选择最新的固件版本。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/VersionSelection.png" alt="pir" width={800} height="auto" /></p>

下载 UF2 文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/CompanionUF2Download.png" alt="pir" width={800} height="auto" /></p>

双击 RST 按钮手动进入 DFU 模式。大约 10~15 秒后，你会看到一个名为 `TRACKER L1` 的磁盘弹出。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/ManualDFU.png" alt="pir" width={800} height="auto" /></p>

将下载好的 UF2 文件拖到弹出的磁盘中。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/L1FlashDragDrop.png" alt="pir" width={800} height="auto" /></p>

固件成功烧录后，该磁盘会消失。此时设备中没有固件，因此设备不会自动重启。

## 配置

### 启动设备

将电源开关向上拨动以开启设备。

:::tip
如果按下按钮时设备没有响应，请先为其充电。不要使用快充充电器。
:::

### 获取 APP

从 Google Store 或 Apple Store 下载。或者[点击这里](https://meshcore.io/#download)获取 Meshcore APP。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/MeshcoreAPP.png" alt="pir" width={300} height="auto" /></p>

### 通过 App 连接

点击 `Connect` 并选择目标设备。默认设备 ID 为 `Meshcore-MAC Address`。MAC 地址可以在设备底部的标签上看到。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/DeviceConnectAn.png" alt="pir" width={600} height="auto" /></p>

输入设备屏幕上显示的 PIN 码，然后点击 `Pair` 以连接设备。

:::tip
如果连接失败，请打开手机的蓝牙列表并 `forget` 或 `Unpair` 该设备，然后再尝试重新连接。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/Unpair.jpg" alt="pir" width={300} height="auto" /></p>
:::

### 通过 Web 界面连接（BLE）

1. 打开 [MeshCore Web App](https://app.meshcore.nz/) 并点击 **Settings** 图标。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/meshcorewebblue1.png" alt="pir" width={600} height="auto" /></p>

2. 选择 **BLE** 选项卡，然后点击 **Scan Now**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/meshcorewebblue2.png" alt="pir" width={600} height="auto" /></p>

3. 在系统蓝牙弹窗中，选择你的设备（例如 MeshCore-xxxxxx），然后点击 **Pair**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/meshcorewebblue3.png" alt="pir" width={600} height="auto" /></p>

4. 按提示输入设备屏幕上显示的蓝牙密码，然后点击 **OK**。此密码不是 `123456`。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/meshcorewebblue4.png" alt="pir" width={600} height="auto" /></p>

5. 等待状态变为已连接，并在 MeshCore 界面中看到你的节点。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/meshcorewebblue5.png" alt="pir" width={600} height="auto" /></p>

### 配置 LoRa

为了开始通过 mesh 通信，你必须设置所在区域。该设置控制设备使用的频率范围，应根据你所在的地区进行设置。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/SetRegion.png" alt="pir" width={600} height="auto" /></p>

然后重启设备，否则配置不会生效。

**区域列表**

|**Region Code**|**Description**|**Frequency Range (MHz)**|**Duty Cycle (%)**|**Power Limit (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|未设置|N/A|N/A|N/A|
|US|美国|902.0 - 928.0|100|30|
|EU_868|欧盟 868 MHz|869.4 - 869.65|10|27|

现在你已经在设备上设置了 LoRa 区域，可以继续配置任意[LoRa 参数](https://github.com/meshcore-dev/MeshCore/blob/main/docs/faq.md#5-general)以满足你的需求。

### 配置 GPS

如果你想使用 GPS，请将其设置为启用。

你可以在 APP 的 `Position Settings` 中启用 GPS。或者你也可以进入设备的 GPS 页面，通过按下四向摇杆来打开或关闭 GPS。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/GPSSetting.png" alt="pir" width={500} height="auto" /></p>

### 配置蜂鸣器

连续按下用户按钮四次来控制蜂鸣器的开启或关闭。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/User.png" alt="pir" width={500} height="auto" /></p>

### 配置传感器

Wio Tracker L1 出厂预装了 MeshCore 固件 `1.12`。通过板载 Grove 接口对 Grove 传感器的支持是在固件 `1.13` 中加入的；最新版本为 `1.16`。

:::note
Grove 传感器需要固件 `1.13` 或更高版本。如果你的设备仍然运行出厂固件 `1.12`，请按照 [Method1 via Web Flasher](#method1-via-web-flasher) 操作，并选择最新版本。
:::

从 `1.13` 版本开始，这就为环境传感器的直接集成打开了大门——温度、湿度、空气质量等——都可以通过 L1 板载的 Grove 接口实现，无需焊接或额外硬件。将兼容的 Grove 传感器插入该接口后，它会被自动识别。

## 消息传输

如果你有两台受支持的设备，并且你附近没有太多 MeshCore 用户，可以将两台设备都刷写为 BLE Companion 固件，这样你就可以使用这些设备与附近的朋友和家人进行通信。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/Frame.png" alt="pir" width={900} height="auto" /></p>

### 广播（Advert）

MeshCore 允许你手动广播你的姓名、位置和公钥，这些信息也会被签名以防止伪造。当你点击 advert 按钮时，它会通过 LoRa 广播这些数据。MeshCore 将此称为 Advert。Advert 有两种方式：“zero hop”和“flood”。

- **Zero hop** 表示你的 advert 只会广播给能听到它的设备，仅此而已。
- **Flooded** 表示它会被广播出去，然后由所有听到它的中继节点重复转发。

你可以在 APP 上发送 advert，也可以直接在设备的 advert 页面上发送 advert。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/Advert.png" alt="pir" width={500} height="auto" /></p>

### 公共消息

在你配置好 LoRa 之后，你可以在主通道中发送消息。同一频段内的所有附近用户都能收到。

### 私密消息

只有当两台设备都收到了对方的 advert 时，它们之间才会建立连接。

## 常见问题

### 设备变砖与 Bootloader 恢复 {#device-bricked--bootloader-installation}

**说明：**

设备没有响应，没有 LED 指示灯，无法与你的应用配对。如果你在刷写自定义固件后发现设备完全失效，你也可以尝试重新安装 bootloader。

bootloader 通过 USB 串口（Serial DFU）使用 `adafruit-nrfutil` 进行恢复。

:::danger note
在刷写过程中，请保持线缆连接稳定，并且**不要**断开连接——即使串口号发生变化也不要断开。
:::

**步骤 1：准备工作**

- 一台 Wio Tracker L1 系列设备（L1 / L1 Pro）
- 一根已知良好的 USB 数据线（不是仅充电线）
- 一台安装了 Python 3 和 pip 的 Windows、macOS 或 Linux 电脑
- bootloader 压缩包：[点击此处下载 Bootloader](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip) —— 不要解压 ZIP；`adafruit-nrfutil` 会直接使用该文件

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

打开 **Device Manager → Ports (COM & LPT)**，例如：

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

设备通常显示为 `/dev/ttyACM0`；如果没有列出，也可以尝试 `ls /dev/ttyUSB*`。

</TabItem>
</Tabs>

**步骤 4：刷写 bootloader**

将端口替换为你在步骤 3 中找到的端口：

<Tabs>
<TabItem value="windows" label="Windows">

```
adafruit-nrfutil --verbose dfu serial --package "wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip" -p COM43 -b 115200 --singlebank --touch 1200
```

如果 ZIP 不在终端当前文件夹中，请将其完整路径传给 `--package`，例如 `"C:\path\to\wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip"`。

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

**步骤 5：处理串口变化**

`--touch 1200` 会将设备重启到 DFU 模式，因此串口通常会发生变化，第一次命令可能会以类似下面的回溯信息结束：

```
Touched serial port COM43
...
FileNotFoundError: could not open port 'COM43'
```

这并不是失败——设备已经在新的端口上进入 DFU 模式。例如，在测试的 Windows 电脑上，它从 `COM43` 变为 `COM45`：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/03_dfu_com_port.png" alt="DFU serial port after re-enumeration in Windows Device Manager" width={600} height="auto" /></p>

**保持 USB 线缆连接。** 找到新的端口（刷新 **Device Manager → Ports (COM & LPT)**，或重新运行 `ls /dev/cu.*` / `ls /dev/ttyACM*`），然后在新端口上再次刷写，这一次不要使用 `--touch 1200`：

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

当输出以 `Device programmed.` 结束时，说明刷写成功：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/04_flash_success.png" alt="adafruit-nrfutil output ending with Device programmed" width={600} height="auto" /></p>

之后，电脑上会出现一个 UF2 盘（截图来自测试用的 Windows 电脑）。其卷标会随 bootloader 构建版本而变化——测试设备显示为 `XIAO-BOOT`——这并不是通过/失败的判断标准；请不要根据盘符名称或 `INFO_UF2.TXT` 来判断结果。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/05_uf2_drive.png" alt="UF2 drive appears after bootloader flashing" width={600} height="auto" /></p>

**步骤 7：重新安装应用固件**

:::warning
恢复 bootloader 并不会重新安装应用固件——在你再次刷写之前，设备仍然没有可用的固件。
:::

完成上述步骤后，请按照 [Firmware Flashing](https://wiki.seeedstudio.com/cn/get_started_with_other_mesh_firmware/#firmware-flashing) 重新刷写应用固件。

**故障排查**

- 安装后无法识别 `adafruit-nrfutil`：Python 用户脚本目录没有加入 PATH（Windows 上为 `Scripts`，macOS/Linux 上为用户主目录下的 `bin`）——请将其加入 PATH，或在安装时不要使用 `--user`。
- 端口忙 / 访问被拒绝：请关闭串口监视器、Web Flasher 标签页、Arduino IDE 或任何占用该端口的程序。
- 在 `Touched serial port ...` 之后出现 `FileNotFoundError: could not open port ...`：设备已经在新的端口上进入 DFU 模式——请参考步骤 5。
- 无法进入 DFU 模式：请参阅 [Unable to enter DFU & Entering DFU Mode Manually](https://wiki.seeedstudio.com/cn/get_started_with_other_mesh_firmware/#unable-to-enter-dfu--entering-dfu-mode-manually)。

**手动 DFU 恢复**

如果 `--touch 1200` 无法让设备进入 DFU 模式（例如固件完全无响应），请手动进入：连接设备，双击按下 `Reset`（黄色 LED 常亮），按照步骤 3 查找 DFU 串口，然后在该串口上运行步骤 5 的命令，但不要加 `--touch 1200`。成功效果与步骤 6 相同。

### 无法进入 DFU 与手动进入 DFU 模式

将设备连接到电脑，并双击按下 `Reset` 按钮——黄色 LED 将保持常亮，并且在电脑上会出现一个 DFU 串口。

要在此模式下烧录 bootloader，请参考[设备变砖与 Bootloader 恢复](https://wiki.seeedstudio.com/cn/get_started_with_other_mesh_firmware/#device-bricked--bootloader-installation)，但跳过 `--touch 1200`——设备已经处于 DFU 模式。

### 退出 DFU 模式

单击 `Reset` 按钮即可退出 DFU 模式。

### 设备自动关机

#### 描述

- 设备开机后，过一段时间会自动关机或重启。
- 串口日志运行一段时间后停止。

 这可能是由于在设备处于以下状态时，手动强制重启或关机导致的：尚未完成消息传输过程、正在配置中……

#### 故障排查

[Flash Erase](https://wiki.seeedstudio.com/cn/get_started_with_other_mesh_firmware/#flash-erase-1) 固件

### 恢复出厂设置

如果你想恢复到默认设置，可以执行恢复出厂设置。你可以通过两种方法进行恢复出厂设置。

- [Flash Erase](https://wiki.seeedstudio.com/cn/get_started_with_other_mesh_firmware/#flash-erase-1) 固件

- 在应用中点击 `Factory Reset` 按钮。设备将自动以出厂配置重启。
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FactoryReset.jpg" alt="pir" width={400} height="auto" /></p>

### 信号质量

- **SNR** 反映通信链路的质量。正常设备通常在 -7 dB 以上工作。SNR 低于 -10 dB 的设备表示性能较差。

- **RSSI** 由设备及其周围环境共同决定。正常设备通常在 -110 dBm 以上工作。RSSI 低于 -115 dBm 的设备被认为性能较差。

    为获得最佳信号效果，请在开阔、无遮挡且干扰最小的区域使用设备。

### 兼容天线

如果你需要为 L1 Pro 更换天线，[点击这里](https://www.seeedstudio.com/LoRa-Antenna-Kit-for-reTerminal-DM-p-5714.html)获取一个。

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