---
description: 开始使用适用于 Meshcore 和 LoRa 的 SenseCAP 太阳能节点。指导设备安装、固件烧录和设备连接。
title:  Meshcore 入门指南
keywords:
- Meshcore
- Solar
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.webp
slug: /get_started_with_meshcore_solar_node
sku: 114993633,114993643
sidebar_position: 1
last_update:
  date: 3/4/2026
  author: Michelle Huang
---

:::danger note
当设备处于以下状态时，请不要手动重启或关闭设备。否则设备可能会损坏。
1. 尚未完成消息传输过程
2. 正在被配置
:::

## 固件烧录

### 方法 1：通过 Web Flasher

使用 USB 线将设备连接到电脑。请确保数据线支持数据传输。

:::warning
在数据传输过程中请保持 USB 线连接，否则设备可能会损坏。
:::

前往 [Meshcore Web Flasher](https://flasher.meshcore.co.uk/)。

在 `Community Firmware` 分组中选择 `Seeed Studio SenseCAP Solar`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/DeviceSelection.png" alt="pir" width={800} height="auto" /></p>

选择 `Repeater`。如果你想烧录其他固件，请[点击这里](https://github.com/meshcore-dev/MeshCore/blob/main/docs/faq.md)查看教程。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/Repeater.png" alt="pir" width={800} height="auto" /></p>

#### 擦除 Flash

点击 `Enter DFU Mode`，选择名为 "Solar Node" 或 "TinyUSB serial" 的串口。然后点击 `Erase Flash` 并选择串口。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/EraseSelect.png" alt="pir" width={800} height="auto" /></p>

如果你已经点击了 `Erase Flash` 但没有任何响应，请再次点击 `Enter DFU`，然后再点击 `Erase Flash`，以确保已成功进入 DFU 模式。

如果你看到 "Flashing erase firmware:100%"，说明设备已成功完成擦除。

<p style={{textAlign: 'center'}}><img src=" https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSuccess.png" alt="pir" width={800} height="auto" /></p>

#### 烧录固件

选择固件版本。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/FirmwareVersion.png" alt="pir" width={800} height="auto" /></p>

点击 `Enter DFU Mode`，选择名为 "P1 Pro" 或 "TinyUSB" 的串口。然后点击 `Flash` 并选择串口。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSe.png" alt="pir" width={800} height="auto" /></p>

如果你已经点击了 `Flash` 但没有任何响应，请再次点击 `Enter DFU`，然后再点击 `Flash`，以确保已成功进入 DFU 模式。

当进度条完全填满时，表示 Flash 已完成。随后设备会自动重启。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashProgress.png" alt="pir" width={800} height="auto" /></p>

### 方法 2：拖拽烧录

使用 USB 线将设备连接到电脑。请确保数据线支持数据传输。

:::warning
在数据传输过程中请保持 USB 线连接，否则设备可能会损坏。
:::

前往 [Meshcore Web Flasher](https://flasher.meshcore.co.uk/)。

在 `Community Firmware` 分组中选择 `Seeed Studio SenseCAP Solar`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/DeviceSelection.png" alt="pir" width={800} height="auto" /></p>

选择 `Repeater`。如果你想烧录其他固件，请[点击这里](https://github.com/meshcore-dev/MeshCore/blob/main/docs/faq.md)查看教程。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/Repeater.png" alt="pir" width={800} height="auto" /></p>

#### 擦除 Flash

下载 UF2 文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/EraseFirmware.png" alt="pir" width={800} height="auto" /></p>

双击 RST 按钮手动进入 DFU 模式。10~15 秒后，你会看到一个名为 `Xiao-Boot` 或 `Solar Node` 的磁盘弹出。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/DFUMode.png" alt="pir" width={800} height="auto" /></p>

将下载好的 UF2 文件拖拽到弹出的磁盘中。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/EraseDr.png" alt="pir" width={800} height="auto" /></p>

固件烧录成功后，该磁盘会自动消失。此时设备中没有固件，因此设备 `NOT` 会自动重启。

#### 烧录固件

选择最新的固件版本。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/FirmwareVersion.png" alt="pir" width={800} height="auto" /></p>

下载 UF2 文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/FlashFirmware.png" alt="pir" width={800} height="auto" /></p>

双击 RST 按钮手动进入 DFU 模式。10~15 秒后，你会看到一个名为 `Xiao-Boot` 或 `Solar Node` 的磁盘弹出。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/DFUMode.png" alt="pir" width={800} height="auto" /></p>

将下载好的 UF2 文件拖拽到弹出的磁盘中。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/FirmwareDr.png" alt="pir" width={800} height="auto" /></p>

固件烧录成功后，该磁盘会自动消失。此时设备中没有固件，因此设备不会自动重启。

## 入门

在正式部署前，请先对节点进行测试和配置。

### 安装

#### 设备组装

:::danger note
由于设备将长期在户外使用，请避免将面板水平安装。建议采用倾斜或斜向安装，以防止积水。此外，请确保所有螺丝都已牢固拧紧，并正确安装上盖。为了增强防水性能，你也可以考虑额外进行密封处理。
:::

- **部件清单**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/part-list.png" alt="pir" width={800} height="auto" /></p>


- 步骤 1：使用垫圈和螺丝将部件 1 固定在设备底部。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Universal-Joint.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- 步骤 2：使用螺丝连接万向节（部件 2）和支架（部件 3）。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/joint.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- 步骤 3：连接 RF 线缆（部件 4）和天线（部件 5）。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-antenna.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- 步骤 4：在合适的位置安装抱箍环。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/hoop-ring.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- 步骤 5：连接万向节支架。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connector.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- 步骤 6：松开螺丝，调整万向节到合适位置后，再拧紧螺丝。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- 步骤 7：将天线连接到设备。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-antenna2.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>



#### 安装电池和 GPS 模块（可选）

:::tip
当你需要安装或更换电池时，请使用 `Button-top` 18650（3.6V）电池。
<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-battery.png" alt="pir" width={500} height="auto" /></p>
P1-Pro 版本内置电池和 GPS 模块；对于 P1 版本，如有需要，用户需要手动安装电池和 GPS 模块。
:::



- 步骤 1：卸下所有螺丝并取下上盖。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.png" alt="pir" width={800} height="auto" /></p>

- 步骤 2：安装电池和 GPS 模块。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/install-bat-gps.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/gps_install.png" alt="pir" width={800} height="auto" /></p>

- 步骤 3：装回外壳。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.png" alt="pir" width={800} height="auto" /></p>

:::caution note
请确保外壳正确安装且螺丝拧紧，以保持设备的防水性能。
:::

#### （可选）升级天线

- 你可以通过观看此视频，将天线更换为玻璃纤维天线。

如果你需要更高增益的天线，我们推荐 [860-930MHz 3dBi fiberglass](https://www.seeedstudio.com/LoRa-Fiberglass-Antenna-Kit-with-base-860-930MHz-3dBi-360mm-p-5315.html) 天线和 [902-928MHz 5.8dBi fiberglass](https://www.seeedstudio.com/RF-Explorer-LoRa-Fiberglass-Antenna-Kit-902-930MHz-5-8dBi-800mm-p-5275.html) 天线。

### 启动设备

设备需要通过连接 USB 线来激活。蓝色 Mesh LED 将点亮约 3 秒，这意味着设备已成功开启。 

蓝色 Mesh LED 灯在发送广播前不会点亮。

:::tip
如果插入 USB 线后设备没有响应，请先为其充电。不要使用快充充电器。
:::


### 配置

[点击这里](https://config.meshcore.dev/) 来配置中继器。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

为了开始通过 Mesh 进行通信，你必须设置所在区域。该设置控制设备使用的频率范围，应根据你所在的地区进行设置。

更改 LoRa 区域并保存设置。然后 `**Reboot**` 设备，否则设置不会生效。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/LoRaSettingg.png" alt="pir" width={600} height="auto" /></p>


**区域列表**

|**Region Code**|**Description**|**Frequency Range (MHz)**|**Duty Cycle (%)**|**Power Limit (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|未设置|N/A|N/A|N/A|
|US|美国|902.0 - 928.0|100|30|
|EU_868|欧盟 868MHz|869.4 - 869.65|10|27|

更完整的列表请参考 [LoRa Region by Country](https://meshtastic.org/docs/configuration/region-by-country/)。

:::info
**EU_868** 必须遵守每小时 10% 的占空比限制，以滚动 1 小时为周期，每分钟计算一次。当达到该限制时，你的设备将停止发射，直到再次被允许。
:::

现在你已经在设备上设置了 LoRa 区域，可以继续配置任意 [LoRa Configs](https://meshtastic.org/docs/configuration/radio/lora/) 以满足你的需求。


### 设置路由

在将中继器添加到你的路由之前，你可能需要先使用中继器发送广播。中继器会以固定间隔自动发送广播。该间隔可能是数小时（默认 3 小时）。因此你需要手动发送广播，否则就需要等待。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/SendAdvert.png" alt="pir" width={600} height="auto" /></p>

你可以手动设置消息发送路径。将你的蓝牙配套设备连接到手机 App。打开一个私信窗口。然后你可以选择已发现的中继器来形成你的路径。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/SetPath1.png" alt="pir" width={600} height="auto" /></p>

设置路径后，传输方式将变为 “n hop”。例如，如果你在路由中添加 1 个中继器，它将变为 1 hop。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/1Hop.png" alt="pir" width={300} height="auto" /></p>

## 常见问题

### 启动循环

- 原因 

这通常是由固件烧录失败引起的。烧录固件时，请保持连接稳定。 

- 故障排查

重新烧录固件。

### 设备变砖

#### 描述

设备无响应，没有 LED，无法与你的 App 配对。

**1) 设备仍然可以进入 DFU 模式，则尝试烧录 Bootloader。**

#### 烧录 Bootloader

- [Bootloader 下载](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/xiao_nrf52840_ble_bootloader.zip)

:::danger note
在烧录 Bootloader 时，请确保线缆连接稳定，并且在烧录过程中 **不要** 断开连接。
:::

**步骤 1：安装 Adafruit-nrfutil**

**前置条件**

- [Python3](https://www.python.org/downloads/)
- [pip3](https://pip.pypa.io/en/stable/installation/)

<Tabs>
<TabItem value="pypi" label="从 PyPI 安装">

这是推荐的方法，用于安装最新版本：

```
pip3 install --user adafruit-nrfutil
```

</TabItem>

<TabItem value="sou" label="从源码安装">

如果你在通过 PyPi 安装时遇到问题，或者想修改该工具，请使用此方法。首先克隆此仓库并进入其文件夹。

```
git clone https://github.com/adafruit/Adafruit_nRF52_nrfutil.git
cd Adafruit_nRF52_nrfutil
```

注意：以下命令使用 `python3`，但是如果你在 Windows 上，可能需要将其改为 `python`，因为 Windows 上的 Python 3.x 安装仍然使用 python.exe 这个名称。

要在你的主目录用户空间中安装：

```
pip3 install -r requirements.txt
python3 setup.py install
```

如果在运行 `pip3 install` 时遇到权限错误，说明你的 `pip3` 版本较旧或被设置为尝试安装到系统目录。在这种情况下请使用 `--user` 标志：

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
为了方便使用，请将其复制或移动到其他位置，例如你的 %PATH% 中的某个目录。

</TabItem>
</Tabs>

**步骤 2：检查你的端口号**

将设备连接到电脑，并检查端口号。

示例：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

**步骤 3：烧录 Bootloader**

在终端或命令提示符中，导航到你下载 Bootloader 压缩包的目录，并执行以下命令，将端口替换为你设备的正确端口：

- **对于 Windows**：

```
adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p COMXX -b 115200 --singlebank --touch 1200
```

- **对于其他系统**：

```
adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/BootloaderSolar.png" alt="pir" width={800} height="auto" /></p>

完成以上步骤后，你就可以烧录应用固件了。

### 信号质量

- **SNR** 反映通信链路的质量。正常设备通常在 -7 dB 以上工作。SNR 低于 -10 dB 的设备表示性能较差。

- **RSSI** 由设备及其周围环境共同决定。正常设备通常在 -110 dBm 以上工作。RSSI 低于 -115 dBm 的设备被认为性能较差。

      为获得最佳信号效果，请在开阔、无遮挡且干扰最小的区域使用设备。

## 资源
- [Solar Node 电池寿命计算表](https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Solar%20Node%20Consumption%20Test%20and%20Battery%20Life%20Calculation.xlsx)
