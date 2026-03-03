---
description: 通过 Web USB 或拖放方式在 T1000-E 上烧录 MeshCore 固件的指南，以及在应用中配置 LoRa 区域、GPS 和发送消息的步骤。
title: Meshcore 入门指南
keywords:
- Tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /sensecap_t1000_e_meshcore
sku: 114993369
sidebar_position: 3
last_update:
  date: 3/2/2026
  author: Michelle Huang
---  


## 固件烧录

### 方法 1：通过 Web Flasher

使用 USB 线将设备连接到电脑。 

:::warning
在数据传输过程中请保持 USB 线连接，否则设备可能会损坏。
:::

前往 [Meshcore Web Flasher](https://flasher.meshcore.co.uk/)。 

在 `Community Firmware` 分组中选择 `Seeed Studio SenseCAP T1000-E`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/DeviceSelection.png" alt="pir" width={800} height="auto" /></p>

选择 `Companion Bluetooth`。烧录了 Bluetooth companion 固件的设备可以连接到 APP。如果你想烧录其他固件，请[点击这里](https://github.com/meshcore-dev/MeshCore/blob/main/docs/faq.md)查看教程。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/BluetoothCompanion.png" alt="pir" width={800} height="auto" /></p>

#### 擦除 Flash

点击 `Enter DFU Mode`，选择名为 "nRF xxx" 或 "TinyUSB" 的串口。然后点击 `Erase Flash` 并选择串口。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/SerialSelection.png" alt="pir" width={800} height="auto" /></p>

如果你点击了 `Erase Flash` 但没有任何响应，请再次点击 `Enter DFU`，然后再点击 `Erase Flash`，以确保已经成功进入 DFU 模式。

如果你看到 "Flashing erase firmware:100%"，说明设备已经成功擦除。

<p style={{textAlign: 'center'}}><img src=" https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSuccess.png" alt="pir" width={800} height="auto" /></p>

#### 烧录固件

点击 `Enter DFU Mode`，选择名为 "nRF xxx" 或 "TinyUSB" 的串口。然后点击 `Flash` 并选择串口。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/SerialSelection.png" alt="pir" width={800} height="auto" /></p>

如果你点击了 `Flash` 但没有任何响应，请再次点击 `Enter DFU`，然后再点击 `Flash`，以确保已经成功进入 DFU 模式。

当进度条完全填满时，表示 Flash 已完成。然后设备会自动重启。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/FlashProgress.png" alt="pir" width={800} height="auto" /></p>

### 方法 2：拖放方式

使用 USB 线将设备连接到电脑。

:::warning
在数据传输过程中请保持 USB 线连接，否则设备可能会损坏。
:::

前往 [Meshcore Web Flasher](https://flasher.meshcore.co.uk/)。 

在 `Community Firmware` 分组中选择 `Seeed Studio Wio Tracker T1000-E`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/DeviceSelection.png" alt="pir" width={800} height="auto" /></p>

选择 `Companion Bluetooth`。烧录了 Bluetooth companion 固件的设备可以连接到 APP。如果你想烧录其他固件，请[点击这里](https://github.com/meshcore-dev/MeshCore/blob/main/docs/faq.md)查看教程。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/BluetoothCompanion.png" alt="pir" width={800} height="auto" /></p>

#### 擦除 Flash

下载 UF2 文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/EraseUF2.png" alt="pir" width={800} height="auto" /></p>

手动进入 DFU 模式：按住设备按键，然后**快速**连接充电线两次，绿色 LED 会常亮。

:::warning
要成功进入 DFU 模式，你需要快速完成这个操作。可能需要多次尝试。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu-mode2.gif" alt="pir" width={600} height="auto" /></p>

大约 10~15 秒后，你会看到一个名为 `T1000-E` 的磁盘弹出。 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/T1000-EDriver.png" alt="pir" width={800} height="auto" /></p>

将下载好的 UF2 文件拖到弹出的磁盘中。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/EraseDrag.png" alt="pir" width={800} height="auto" /></p>

固件成功烧录后，该磁盘会消失。此时设备中没有固件，所以设备`不会`自动重启。

#### 烧录固件

选择最新的固件版本。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/VersionSelection.png" alt="pir" width={800} height="auto" /></p>

下载 UF2 文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/FirmwareUF2.png" alt="pir" width={800} height="auto" /></p>

尝试手动进入 DFU 模式：按住设备按键，然后**快速**连接充电线两次，绿色 LED 会常亮。

:::warning
要成功进入 DFU 模式，你需要快速完成这个操作。可能需要多次尝试。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu-mode2.gif" alt="pir" width={600} height="auto" /></p>

大约 10~15 秒后，你会看到一个名为 `T1000-E` 的磁盘弹出。 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/T1000-EDriver.png" alt="pir" width={800} height="auto" /></p>

将下载好的 UF2 文件拖到弹出的磁盘中。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/FirmwareDr.png" alt="pir" width={800} height="auto" /></p>

固件成功烧录后，该磁盘会消失。此时设备中已经有固件，所以设备会自动重启。

## 配置

### 启动设备

按下按键开机。LED 会点亮，并播放上升的提示音。

:::tip
如果按下按键设备没有响应，请先为其充电。不要使用快充充电器。
:::

### 获取 APP

从 Google Store 或 Apple Store 下载。或者[点击这里](https://meshcore.co.uk/apps.html)获取 Meshcore APP。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/MeshcoreAPP.png" alt="pir" width={300} height="auto" /></p>

### 通过 App 连接

点击 `Connect` 并选择目标设备。默认设备 ID 为 `Meshcore-MAC Address`。MAC 地址可以在设备背面看到。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/DeviceConnectAn.png" alt="pir" width={600} height="auto" /></p>

输入默认 PIN 码 `123456`，然后点击 `Pair` 连接设备。

:::tip
如果连接失败，请打开手机的 Bluetooth 列表并 `forget` 或 `Unpair` 该设备，然后再尝试重新连接。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/Unpair.jpg" alt="pir" width={300} height="auto" /></p>
:::

### 配置 LoRa

为了开始在 mesh 网络中通信，你必须设置所在区域。该设置控制设备使用的频率范围，应根据你所在的地区进行设置。


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/SetRegion.png" alt="pir" width={600} height="auto" /></p>

然后重启设备，否则配置不会生效。

**区域列表**

|**Region Code**|**Description**|**Frequency Range (MHz)**|**Duty Cycle (%)**|**Power Limit (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|Unset|N/A|N/A|N/A|
|US|United States|902.0 - 928.0|100|30|
|EU_868|European Union 868 MHz|869.4 - 869.65|10|27|

现在你已经在设备上设置了 LoRa 区域，可以继续配置任意[LoRa 参数](https://github.com/meshcore-dev/MeshCore/blob/main/docs/faq.md#5-general)以满足你的需求。

### 配置 GPS

如果你想使用 GPS，请将其设置为启用。 

你可以在 APP 的 `Position Settings` 中启用 GPS。 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/GPSConfig.png" alt="pir" width={300} height="auto" /></p>

## 消息传输

如果你有两台受支持的设备，并且你附近没有太多 MeshCore 用户，可以将两台设备都烧录为 BLE Companion 固件，这样你就可以使用这些设备与附近的朋友和家人进行通信。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/MeshcoreFramework.png" alt="pir" width={900} height="auto" /></p>

### Advert

MeshCore 允许你手动广播你的名称、位置和公共加密密钥，这些信息也会被签名以防止伪造。当你点击 advert 按钮时，它会通过 LoRa 广播这些数据。MeshCore 将此称为 Advert。有两种 advert 方式："zero hop" 和 "flood"。

- **Zero hop** 表示你的 advert 只会广播给能听到它的设备，仅此而已。
- **Flooded** 表示它会被广播出去，然后由所有听到它的中继器重复转发。

你可以在 APP 中发送 advert，也可以在设备的 advert 页面上直接发送。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/Advert.png" alt="pir" width={300} height="auto" /></p>

### 公共消息

在你配置好 LoRa 之后，可以在主通道中发送消息。同一频段内附近的所有人都能收到。


### 私密消息

只有当两台设备都接收到对方的 advert 时，它们之间才会建立连接。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 常见问题

### 如何重启设备

 按住按钮不放，然后连接充电线。

## 故障排查

### 设备无法开机

- 给设备充电 1~2 小时

- 更换充电线

 - 如果仍然无效，请按住设备按钮不放，然后连接充电线，查看电脑中是否弹出一个磁盘。如果有，请重新安装 bootloader。教程可在下方找到。

### 设备卡在启动循环中

**描述：**

设备会不断重启，串口会反复连接和断开。

**解决方案：**

- 步骤 1：尝试手动进入 DFU 模式：按住设备按钮不放，然后**快速**连接充电线两次，绿色 LED 将常亮。

:::note
要成功进入 DFU 模式，需要快速完成此操作。你可能需要尝试多次。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu-mode2.gif" alt="pir" width={600} height="auto" /></p>

- 步骤 2：擦除 Flash

- 步骤 3：烧录固件

### 设备变砖

#### 描述

设备无响应，没有 LED 指示灯，无法与 App 配对。

**1) 设备仍然可以进入 DFU 模式，则尝试烧录 bootloader。**

#### 烧录 Bootloader

- [Bootloader 下载](https://files.seeedstudio.com/wiki/SenseCAP/lorahub/t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip)

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash%20bootloader.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::danger note
在烧录 bootloader 时，请确保线缆连接稳定，并且在烧录过程中**不要**断开连接。
:::

**步骤 1：安装 Adafruit-nrfutil**

**前置条件**

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

如果你在通过 PyPi 安装时遇到问题，或者想要修改该工具，请使用此方法。首先克隆此仓库并进入其文件夹。

```
git clone https://github.com/adafruit/Adafruit_nRF52_nrfutil.git
cd Adafruit_nRF52_nrfutil
```

注意：以下命令使用 `python3`，但是如果你在 Windows 上，可能需要将其改为 `python`，因为 Windows 上的 python 3.x 安装仍然使用 python.exe 这个名称

要在你的主目录用户空间中安装：

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

你将在 `Adafruit_nRF52_nrfutil\nordicsemi\dist\adafruit-nrfutil` 中找到 .exe（如果你在 Windows 上，则带有 `.exe`）。
为了方便使用，可以将其复制或移动到其他位置，例如你的 %PATH% 中的某个目录。

</TabItem>
</Tabs>

**步骤 2：检查你的端口号**

将设备连接到电脑，并检查端口号。

示例：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

**步骤 3：烧录 bootloader**

在终端或命令提示符中，进入你下载 bootloader 压缩包的目录，并执行以下命令，将端口替换为你设备的正确端口：

- **For Windows**:

```
adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p COMxx -b 115200 --singlebank --touch 1200
```

- **For others**:

```
adafruit-nrfutil --verbose dfu serial --package t1000_e_bootloader-0.9.1-5-g488711a_s140_7.3.0.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-success.png" alt="pir" width={800} height="auto" /></p>

完成以上步骤后，你就可以开始烧录应用固件了。

**2) 设备无法进入 DFU 模式，但可以检测到串口**

- 打开串口工具

- 将波特率设置为 `1200`。

- 连接设备。
   连接时指示灯会短暂闪烁。持续尝试，直到指示灯保持常亮，这表示设备已回到 DFU 模式，然后烧录 bootloader -> 擦除 flash -> 烧录固件

**3) 设备无法进入 DFU 模式且没有串口显示**

- 按住设备按钮不放，然后连接充电线。电脑中弹出磁盘后，你可能会看到串口。

- 如果仍然无效，请断开充电线，将设备放置几天直至电池完全耗尽，然后重新连接充电线并再次尝试配对。

**4) 如果以上步骤都无效，请联系技术支持：support@sensecapmx.com**

### 固件烧录失败

- **串口无数据接收**

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/no-dfu-device.png" alt="pir" width={500} height="auto" /></p>

 检查设备是否处于 DFU 模式，当设备处于 DFU 模式时，绿色指示灯会常亮。

- **无法打开串口**

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wrong-port.png" alt="pir" width={500} height="auto" /></p>

 检查端口是否正确，或者尝试其他端口。

 ### 设备自动关机

 #### 描述

 - 设备开机后，过一段时间会自动关机或重启。
 - 串口日志运行一段时间后停止。

 这可能是由于在设备处于以下状态时，手动强制重启或关机导致的：未完成消息传输过程、正在配置中......

 #### 故障排查

执行 flash 擦除操作。

 ### 恢复出厂设置
如果你想恢复默认设置，可以执行恢复出厂设置。你可以通过以下两种方式进行恢复出厂设置。

- 对设备执行 flash 擦除，然后重新烧录最新固件。

- 在 App 中点击 `Factory Reset` 按钮。设备将自动以出厂配置重启。
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/Reset.png" alt="pir" width={400} height="auto" /></p>

### 信号质量

  - **SNR** 反映通信链路的质量。正常设备通常在 -7 dB 以上工作。SNR 低于 -10 dB 的设备表示性能较差。

  - **RSSI** 由设备及其周围环境共同决定。正常设备通常在 -110 dBm 以上工作。RSSI 低于 -115 dBm 的设备被认为性能较差。

      为获得最佳信号效果，请在开阔、无遮挡且干扰较少的环境中使用设备。

## 资源

- [SenseCAP T1000 Tracker 规格书](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_Tracker_T1000_Datasheet.pdf)
- [T1000-E for Meshtastic 功耗测试与电池寿命计算](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/T1000-E%20for%20Meshtastic%20Consumption%20Test%20and%20Battery%20Life%20Calculation.xlsx)


## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
