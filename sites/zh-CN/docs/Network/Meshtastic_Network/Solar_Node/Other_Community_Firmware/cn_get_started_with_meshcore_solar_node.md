---
description: 开始使用适用于 Meshcore 和 LoRa 的 SenseCAP Solar 节点。指导设备安装、固件烧录和设备连接。
title: 在 SenseCAP Solar Node 上开始使用 MeshCore
keywords:
  - Meshcore
  - Solar
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.webp
slug: /get_started_with_meshcore_solar_node
sku: 114993633,114993643
sidebar_position: 1
last_update:
  date: 3/6/2026
  author: Michelle Huang
createdAt: '2025-05-13'
url: https://wiki.seeedstudio.com/cn/get_started_with_meshcore_solar_node/
updatedAt: '2026-04-03'
---

:::danger note
当设备处于以下状态时，请不要手动重启或关闭设备。否则设备可能会损坏。
1. 消息发送过程尚未完成
2. 正在配置中
:::

## 固件烧录

### 方法一：通过 Web Flasher

使用 USB 线将设备连接到电脑。请确保数据线支持数据传输。

:::warning
在数据传输过程中请保持 USB 线连接，否则设备可能会损坏。
:::

前往 [Meshcore Web Flasher](https://meshcore.io/flasher)。

在 `Community Firmware` 分组中选择 `Seeed Studio SenseCAP Solar`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/DeviceSelection.png" alt="pir" width={800} height="auto" /></p>

选择 `Repeater`。如果你想烧录其他固件，请[点击这里](https://docs.meshcore.io/)查看教程。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/Repeater.png" alt="pir" width={800} height="auto" /></p>

#### 擦除 Flash

点击 `Enter DFU Mode`，选择名为 "Solar Node" 或 "TinyUSB serial" 的串口。然后点击 `Erase Flash` 并选择串口。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/EraseSelect.png" alt="pir" width={800} height="auto" /></p>

如果你已经点击了 `Erase Flash` 但没有反应，请再次点击 `Enter DFU`，然后再点击 `Erase Flash`，以确保已成功进入 DFU 模式。

如果你看到 "Flashing erase firmware:100%"，说明设备已成功擦除。

<p style={{textAlign: 'center'}}><img src=" https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSuccess.png" alt="pir" width={800} height="auto" /></p>

#### 烧录固件

选择固件版本。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/FirmwareVersion.png" alt="pir" width={800} height="auto" /></p>

点击 `Enter DFU Mode`，选择名为 "P1 Pro" 或 "TinyUSB" 的串口。然后点击 `Flash` 并选择串口。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSe.png" alt="pir" width={800} height="auto" /></p>

如果你已经点击了 `Flash` 但没有反应，请再次点击 `Enter DFU`，然后再点击 `Flash`，以确保已成功进入 DFU 模式。

当进度条完全填满时，表示 Flash 已完成。随后设备会自动重启。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashProgress.png" alt="pir" width={800} height="auto" /></p>

### 方法二：拖拽复制

使用 USB 线将设备连接到电脑。请确保数据线支持数据传输。

:::warning
在数据传输过程中请保持 USB 线连接，否则设备可能会损坏。
:::

前往 [Meshcore Web Flasher](https://meshcore.io/flasher)。

在 `Community Firmware` 分组中选择 `Seeed Studio SenseCAP Solar`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/DeviceSelection.png" alt="pir" width={800} height="auto" /></p>

选择 `Repeater`。如果你想烧录其他固件，请[点击这里](https://docs.meshcore.io/)查看教程。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/Repeater.png" alt="pir" width={800} height="auto" /></p>

#### 擦除 Flash

下载 UF2 文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/EraseFirmware.png" alt="pir" width={800} height="auto" /></p>

双击 RST 按钮手动进入 DFU 模式。大约 10~15 秒后，你会看到一个名为 `Xiao-Boot` 或 `Solar Node` 的磁盘弹出。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/DFUMode.png" alt="pir" width={800} height="auto" /></p>

将下载好的 UF2 文件拖拽到弹出的磁盘中。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/EraseDr.png" alt="pir" width={800} height="auto" /></p>

固件烧录成功后，该磁盘会消失。此时设备中没有固件，因此设备 `不会` 自动重启。

#### 烧录固件

选择最新的固件版本。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/FirmwareVersion.png" alt="pir" width={800} height="auto" /></p>

下载 UF2 文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/FlashFirmware.png" alt="pir" width={800} height="auto" /></p>

双击 RST 按钮手动进入 DFU 模式。大约 10~15 秒后，你会看到一个名为 `Xiao-Boot` 或 `Solar Node` 的磁盘弹出。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/DFUMode.png" alt="pir" width={800} height="auto" /></p>

将下载好的 UF2 文件拖拽到弹出的磁盘中。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/FirmwareDr.png" alt="pir" width={800} height="auto" /></p>

固件烧录成功后，该磁盘会消失。此时设备中没有固件，因此设备将不会自动重启。

## 入门

正式部署之前，请先对节点进行测试和配置。

### 安装

#### 设备组装

:::danger note
由于设备将长期在户外使用，请避免将面板水平安装。建议采用倾斜或斜向安装，以防止积水。此外，请确保所有螺丝已牢固拧紧且上盖安装到位。为了增强防水效果，你也可以考虑额外的密封措施。
:::

- **部件清单**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/part-list.png" alt="pir" width={800} height="auto" /></p>


- 步骤 1：使用垫圈和螺丝将部件 1 连接到设备底部。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Universal-Joint.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- 步骤 2：使用螺丝连接万向节（部件 2）和支架（部件 3）。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/joint.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- 步骤 3：连接射频线（部件 4）和天线（部件 5）。

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

- 步骤 6：松开螺丝，调整万向节到合适的位置，然后拧紧螺丝。

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
P1-Pro 版本内置电池和 GPS 模块，而 P1 版本若需要使用，则需要用户手动安装电池和 GPS 模块。
:::



- 步骤 1：卸下所有螺丝并取下上盖。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.png" alt="pir" width={800} height="auto" /></p>

- 步骤 2：安装电池和 GPS 模块。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/install-bat-gps.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/gps_install.png" alt="pir" width={800} height="auto" /></p>

- 步骤 3：装回外壳。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.png" alt="pir" width={800} height="auto" /></p>

:::caution note
请确保外壳安装到位且螺丝已经牢固拧紧，以保证设备的防水性能。
:::

#### （可选）升级天线

- 你可以通过观看此视频，将天线更换为玻璃纤维天线。

如果你需要更高增益的天线，我们推荐使用 [860-930MHz 3dBi 玻璃纤维](https://www.seeedstudio.com/LoRa-Fiberglass-Antenna-Kit-with-base-860-930MHz-3dBi-360mm-p-5315.html)天线和 [902-928MHz 5.8dBi 玻璃纤维](https://www.seeedstudio.com/RF-Explorer-LoRa-Fiberglass-Antenna-Kit-902-930MHz-5-8dBi-800mm-p-5275.html)天线。

### 启动设备

需要通过连接 USB 线来激活设备。蓝色 Mesh LED 会点亮约 3 秒，这意味着设备已成功开机。

蓝色 mesh LED 指示灯在发送 advert 之前不会点亮。

:::tip
直到 1.14.1 版本发布后电源按钮才被启用。长按设备 `3s` 可开机/关机。你会看到白灯短暂闪烁，这表示设备正在成功开机。
<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/blinkingonetime.mp4" scrolling="yes" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>
:::


### 配置

- **步骤 1 初始配置**

当 MeshCore 第一次烧录到 LoRa 设备上时，需要设置服务器设备的频率，使其使用在你所在国家或地区合法的频率。

[Click here](https://config.meshcore.io/) 来配置中继器。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

更改 LoRa 区域并保存设置。然后 `Reboot` 设备，否则设置不会生效。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/LoRaSettingg.png" alt="pir" width={600} height="auto" /></p>

**区域列表**

|**Region Code**|**Description**|**Frequency Range (MHz)**|**Duty Cycle (%)**|**Power Limit (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|未设置|N/A|N/A|N/A|
|US|美国|902.0 - 928.0|100|30|
|EU_868|欧盟 868MHz|869.4 - 869.65|10|27|

:::info
**EU_868** 必须遵守每小时 10% 的占空比限制，该限制按滚动 1 小时时间窗口每分钟计算。如果达到该限制，你的设备将停止发射，直到再次被允许。
:::


- **步骤 2 发送 Advert**

点击 "send advert" 以便其他 Meshcore 设备可以看到该中继器。然后该中继器就可以在设备列表中看到。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/AdvertSending.png" alt="pir" width={600} height="auto" /></p>

完成初始化设置后，点击

- **步骤 3（可选）管理员登录**

中继器的默认管理员密码为 `password`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/AAdmin.png" alt="pir" width={600} height="auto" /></p>

登录后，你可以看到配置页面。现在你可以调整该中继器的配置。

如果你希望显示中继器的位置，可以启用 GPS。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/GPSS.jpg" alt="pir" width={300} height="auto" /></p>

此外，你可以调整 advert 广播间隔。`auto zero hop advert` 的间隔范围为 60-240 分钟。`auto flood advert` 的间隔范围为 3-168 小时。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/AdvertInterval.jpg" alt="pir" width={300} height="auto" /></p>

### 设置路径

在将中继器添加到你的路由之前，你可能需要先使用中继器发送 advert。中继器会自动按固定间隔自动发送。该间隔可能是数小时（默认 3 小时）。因此你需要手动发送 advert，否则就需要等待。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/SendAdvert.png" alt="pir" width={600} height="auto" /></p>

你可以手动设置消息发送路径。将 Bluetooth 配套设备连接到你的手机 APP，打开一个私信窗口。然后你可以选择已发现的中继器来组成你的路径。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/SetPath1.png" alt="pir" width={600} height="auto" /></p>

设置路径后，传输方式会变为 “n hop”。例如，如果你在路径中添加了 1 个中继器，它就会变为 1 hop。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/1Hop.png" alt="pir" width={300} height="auto" /></p>

## 常见问题

### 启动循环

- 原因

这通常是由固件烧录失败导致的。烧录固件时，请保持连接稳定。

- 故障排查

[Click here](https://wiki.seeedstudio.com/cn/get_started_with_meshcore_solar_node/#flash-erase) 重新烧录固件。

### 设备变砖

#### 描述

设备无响应，没有 LED 指示灯，无法与 App 配对。

**1）设备仍然可以进入 DFU 模式，则尝试烧录 bootloader。**

#### 烧录 Bootloader

- [Bootloader download](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/xiao_nrf52840_ble_bootloader.zip)

:::danger note
在烧录 bootloader 时，请确保线缆连接稳定，在烧录过程中 **不要** 断开连接。
:::

**步骤 1：安装 Adafruit-nrfutil**

对于 Windows 用户，同时按下 "Win" 键和 "r" 键，然后在弹出的窗口中输入 "cmd"，按下 "Enter"。这样可以打开命令行。

对于 Mac 用户，同时按下 "Command" 键和 "Space" 键，即可打开 Spotlight。然后输入 "termial"，按下 "Return"。这样可以打开命令行。

**前提条件**

- [Python3](https://www.python.org/downloads/)
- [pip3](https://pip.pypa.io/en/stable/installation/)

在命令行中检查 python 和 pip 是否安装成功。

```
python --version
```

```
python -m pip --version
```

然后应当出现 "Python xxx" 和 "pip xxx"。如果没有，请尝试重新安装 python。

<Tabs>
<TabItem value="pypi" label="通过 PyPI 安装">

推荐使用这种方法来安装最新版本：

```
pip3 install --user adafruit-nrfutil
```

检查安装路径：

```
python -m pip show adafruit-nrfutil
```

这是安装位置：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/location.png" alt="pir" width={600} height="auto" /></p>

对于 Windows 用户，你可能需要手动添加该路径。复制上一步中显示的安装位置，然后按如下方式添加：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/AddPath.png" alt="pir" width={1000} height="auto" /></p>

</TabItem>

<TabItem value="sou" label="通过源码安装">

如果你在通过 PyPi 安装时遇到问题，或者想要修改该工具，请使用此方法。首先克隆该仓库并进入其文件夹。

```
git clone https://github.com/adafruit/Adafruit_nRF52_nrfutil.git
cd Adafruit_nRF52_nrfutil
```

注意：下面的命令使用 `python3`，然而如果你在 Windows 上，可能需要把它改为 `python`，因为 Windows 上的 python 3.x 安装仍然使用 python.exe 这个名称。

要在你的 home 目录下的用户空间中安装：

```
pip3 install -r requirements.txt
python3 setup.py install
```

如果在运行 `pip3 install` 时遇到权限错误，说明你的 `pip3` 版本较旧或被设置为尝试安装到系统目录。这种情况下请使用 `--user` 参数：

```
pip3 install -r --user requirements.txt
python3 setup.py install
```

如果你想安装到系统目录中（通常不推荐）：

```
sudo pip3 install -r requirements.txt
sudo python3 setup.py install
```

要生成一个该工具的自包含可执行二进制文件（Windows 和 MacOS），请运行以下命令：

```
pip3 install pyinstaller
cd Adafruit_nRF52_nrfutil
pip3 install -r requirements.txt
cd Adafruit_nRF52_nrfutil\nordicsemi
pyinstaller __main__.py --onefile --clean --name adafruit-nrfutil
```

你会在 `Adafruit_nRF52_nrfutil\nordicsemi\dist\adafruit-nrfutil` 中找到 .exe 文件（如果你在 Windows 上，则带有 `.exe`）。
为了方便使用，可以将其复制或移动到其他位置，例如在你的 %PATH% 中的某个目录。

</TabItem>
</Tabs>

**步骤 2：检查你的端口号**

将设备连接到电脑，并检查端口号。

对于 Windows 用户，例如：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Port.png" alt="pir" width={400} height="auto" /></p>

对于 Mac 用户，例如：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

**步骤 3：烧录 bootloader**

在终端或命令提示符中，进入你下载 bootloader 压缩包的目录，并执行以下命令，将端口替换为你设备的正确端口：

- **适用于 Windows**：

```
adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p COMXX -b 115200 --singlebank --touch 1200
```
请将 COMXX 改为你的 COM 号。例如，如果你的设备在 com6 上，请将命令修改为：

`adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p COM6 -b 115200 --singlebank --touch 1200`

 部分设备在你输入该命令后会更改端口号。因此如果安装失败，请再次检查端口号。


- **适用于其他系统**：

```
adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/BootloaderSolar.png" alt="pir" width={800} height="auto" /></p>

完成以上步骤后，你就可以[烧录应用固件](https://wiki.seeedstudio.com/cn/get_started_with_meshcore_solar_node/#flash-erase)。

### 信号质量

- **SNR** 反映通信链路的质量。正常设备通常在 -7 dB 以上工作。SNR 低于 -10 dB 的设备表示性能较差。

- **RSSI** 由设备及其周围环境共同决定。正常设备通常在 -110 dBm 以上工作。RSSI 低于 -115 dBm 的设备被认为性能较差。

      为了获得最佳信号效果，请在开阔、无遮挡且干扰最小的区域中使用该设备。

### 充电电流

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar_node_diagram.png" alt="pir" width={800} height="auto" /></p>

Xiao nRF-52840 Plus 的最大充电电流为 200 mA。充电管理芯片 CN3165 为 0.99A。因此最大充电电流为 1A。

## 资源
- [Solar Node 电池寿命计算表](https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/mesh_repeater_power_table_en1.xlsx)
