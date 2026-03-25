---
description: 开始使用 SenseCAP Solar Node 进行 Meshtastic 与 LoRa
title: 开始使用 SenseCAP Solar Node
keywords:
  - Meshtastic
  - Solar
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.webp
slug: /get_started_with_meshtastic_solar_node
sku: 114993633,114993643
sidebar_position: 2
last_update:
  date: 3/10/2026
  author: Michelle Huang
createdAt: '2025-05-13'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/cn/get_started_with_meshtastic_solar_node/
---

:::danger note
当设备处于以下状态时，请不要手动重启或关闭设备。否则设备可能会损坏。
1. 尚未完成消息传输过程
2. 正在配置中
:::
## 入门指南

在正式部署之前，请先对节点进行测试和配置。

### 烧录固件

:::caution note
请 `don't use NRF-OTA` 来更新固件，这可能会导致设备完全损坏。
在烧录固件之前，请先烧录擦除固件！
:::

访问 [Meshtastic Web Flasher](https://flasher.meshtastic.org/)。将目标设备选择为 `Seeed SenseCAP Solar Node`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/select-solar.png" alt="pir" width={800} height="auto" /></p>

#### 烧录擦除固件

点击 `trash` 图标。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/FlashEraseIcon.png" alt="pir" width={800} height="auto" /></p>

下载并复制擦除固件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/EraseUF2.png" alt="pir" width={800} height="auto" /></p>

点击 `Enter DFU Mode`，会出现一个名为 `XIAO-xxx` 的串口，点击并连接它，然后应该会显示一个名为 `XIAO-xxx` 的驱动器。将擦除固件粘贴到该磁盘中。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/52840-connect.png" alt="pir" width={800} height="auto" /></p>

此过程可能需要一些时间。请等待 "XIAO-XXX" 磁盘消失。

#### 烧录应用固件

选择你想要的固件版本，点击 `flash`。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/3-steps.png" alt="pir" width={800} height="auto" /></p>

下载 UF2 文件并进入 DFU 模式。将 UF2 文件拖入 DFU 驱动器。文件复制完成并设备重启后，固件就会被烧录。

### 安装电池和 GPS 模块（可选）

:::tip
当你需要安装或更换电池时，请使用 `Button-top` 18650（3.6V）电池。
<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-battery.png" alt="pir" width={500} height="auto" /></p>
P1-Pro 版本内置电池和 GPS 模块，而 P1 版本如有需要，用户需要手动安装电池和 GPS 模块。
:::



- 步骤 1：卸下所有螺丝并取下外壳。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.png" alt="pir" width={800} height="auto" /></p>

- 步骤 2：安装电池和 GPS 模块。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/install-bat-gps.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/gps_install.png" alt="pir" width={800} height="auto" /></p>

- 步骤 3：重新装回外壳。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.png" alt="pir" width={800} height="auto" /></p>

:::caution note
请确保外壳安装到位且螺丝拧紧，以保持设备的防水性能。
:::

### 启动设备

设备首次使用需要通过连接 USB 线来激活。如果蓝色 Mesh 指示灯闪烁，则表示设备已成功开机。如下方视频所示：

<div class="table-center">
<iframe width="700" height="250" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solarnodeturnon.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::tip
如果按下按键后设备没有响应，请先为其充电。不要使用快充充电器。
:::

### 通过 App 连接

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="IOS App">

- 在蓝牙面板中选择目标设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- 输入配对码（默认配对码为 `123456`），然后点击 `OK` 连接设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

- 点击 `+` 并选择目标设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>

- 输入配对码（默认配对码为 `123456`），然后点击 `OK` 连接设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>


### 通过网站连接

如果你希望在网页端发送消息并与其他节点通信，现在可以将设备连接到 [Meshtastic Website](https://client.meshtastic.org/messages/broadcast/0)。

  步骤 1：打开网站

[Click here](https://client.meshtastic.org/messages/broadcast/0) 进入网站。
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshtasticWeb.png" alt="pir" width={1000} height="auto" /></p>

  步骤 2：添加新设备

    点击 "+ New Connection"。

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteAddNewConnection.png" alt="pir" width={600} height="auto" /></p>

    有两种连接方式，你可以选择自己偏好的方式。

 方法 1：通过蓝牙

    选择蓝牙方式。在弹出的窗口中选择设备 ID。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshWebBluetooth.png" alt="pir" width={1000} height="auto" /></p>

 方法 2：通过串口

    选择串口方式。打开设备管理器查看设备连接到哪个端口。在弹出的窗口中选择该端口。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteSerialConnection.png" alt="pir" width={1000} height="auto" /></p>

    你的设备会显示在列表中。点击进行连接。如果连接成功，你可以在网页上直接看到设备状态。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteConnectionSuccess.png" alt="pir" width={300} height="auto" /></p>

### 配置 LoRa

为了开始在 Mesh 网络中通信，你必须设置所在区域。该设置控制设备使用的频率范围，应根据你所在的地区进行设置。

<Tabs>
<TabItem value="ios" label="IOS App">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-region.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

**区域列表**

|**Region Code**|**Description**|**Frequency Range (MHz)**|**Duty Cycle (%)**|**Power Limit (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|未设置|N/A|N/A|N/A|
|US|美国|902.0 - 928.0|100|30|
|EU_868|欧盟 868MHz|869.4 - 869.65|10|27|

更多完整列表请参考 [LoRa Region by Country](https://meshtastic.org/docs/configuration/region-by-country/)。

:::info
**EU_868** 必须遵守每小时 10% 的占空比限制，以滚动 1 小时为周期、每分钟计算一次。当达到限制时，你的设备将停止发射，直到再次被允许。
:::

现在你已经在设备上设置好了 LoRa 区域，可以继续配置任意适合你需求的 [LoRa Configs](https://meshtastic.org/docs/configuration/radio/lora/)。

### 配置 GPS

请将 GPS 设置为启用状态。你可以调整更新间隔和广播间隔，以获取更加实时的位置数据。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshGPS.png" alt="pir" width={500} height="auto" /></p>

对于 IOS，请打开 `Accurate Location`。否则定位可能会有偏差。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSAccurateLocation.jpg" alt="pir" width={200} height="auto" /></p>

### 按键

|按键操作|说明|
|--|--|
|长按 PWR 3 秒|开机|
|快速按 PWR 两次|更新节点/位置信息|
|快速按 PWR 三次|打开/关闭 GPS|
|长按 PWR 5 秒|关机|
|快速按 RST 两次|手动进入 DFU 模式|

## 安装

:::danger note
由于设备将长时间在户外使用，请避免将面板水平安装。建议采用倾斜或斜向安装，以防止积水。此外，请确保所有螺丝都已牢固拧紧且外壳安装到位。为了进一步提升防水性能，你也可以考虑额外进行密封处理。
:::

- **部件清单**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/part-list.png" alt="pir" width={800} height="auto" /></p>



### 分步安装指南

- 步骤 1：使用垫圈和螺丝将部件 1 固定在设备底部。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Universal-Joint.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- 步骤 2：使用螺丝连接万向节（部件 2）和支架（部件 3）。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/joint.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- 步骤 3：连接射频线缆（部件 4）和天线（部件 5）。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-antenna.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- 步骤 4：在合适的位置安装箍环。

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

### 完整安装指南

- 你可以通过一个视频完成整个安装和初始化过程。

<div class="video-container">
<iframe width="730" height="500" src="https://www.youtube.com/embed/smQe7G0Bbsk?si=kcB8BdoxiwpZqB4g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### 为太阳能节点添加传感器（可选）

- 你可以通过此视频安装你的传感器。

<div class="video-container">
<iframe width="730" height="500" src="https://www.youtube.com/embed/AUFAdRgOCK8?si=9P-X1B7g8unZvVqb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

- 以下传感器已验证与设备上的 Grove 接口兼容。

<table>
  <tr>
    <th colspan="2">传感器类型</th>
    <th colspan="1">传感器型号</th>
  </tr>
  <tr>
    <td rowspan="4">环境传感器</td>
    <td>气压</td>
    <td>BMP085</td>
  </tr>
  <tr>
    <td>温度</td>
    <td>[MCP9808](https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temperature-Sensor-MCP9808.html)、PCT2075</td>
  </tr>
  <tr>
    <td>温度和湿度</td>
    <td>[SHT31](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html)/SHTC3/[SHT4X](https://www.seeedstudio.com/Grove-Temp-Humi-Sensor-SHT40-p-5384.html)、AHT10</td>
  </tr>
  <tr>
    <td>温度、湿度和气压</td>
    <td>[BME280](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html)</td>
  </tr>
  <tr>
    <td rowspan="2">其他</td>
    <td>心率和血氧饱和度（SpO₂）</td>
    <td>[MAX30102](https://www.seeedstudio.com/MAXREFDES117-HEART-RATE-AND-PULSE-OXIMETRY-MONITOR-p-2762.html)</td>
  </tr>
  <tr>
    <td>I2C 键盘</td>
    <td>CardKB</td>
  </tr>
</table>

### 升级天线（可选）

- 你可以通过观看此视频，将天线更换为玻璃纤维天线。

如果你需要增益更高的天线，我们推荐 [860-930MHz 3dBi fiberglass](https://www.seeedstudio.com/LoRa-Fiberglass-Antenna-Kit-with-base-860-930MHz-3dBi-360mm-p-5315.html) 天线和 [902-928MHz 5.8dBi fiberglass](https://www.seeedstudio.com/RF-Explorer-LoRa-Fiberglass-Antenna-Kit-902-930MHz-5-8dBi-800mm-p-5275.html) 天线。

<div class="video-container">
<iframe width="730" height="500" src="https://www.youtube.com/embed/uCUq7VrNkzc?si=9uiAAZY45B-Sg-wD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 常见问题

### 启动循环

- 原因

这通常是由固件烧录失败引起的。烧录固件时，请保持连接稳定。

- 故障排查

[点击此处](https://wiki.seeedstudio.com/cn/get_started_with_meshtastic_solar_node/#flash-firmware) 重新烧录固件。

### 设备变砖

#### 描述

设备无响应、无 LED 指示灯，无法与 App 配对。

**1）设备仍然可以进入 DFU 模式，则尝试烧录引导程序（Bootloader）。**

#### 烧录引导程序（Bootloader）

- [Bootloader 下载](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/xiao_nrf52840_ble_bootloader.zip)

:::danger note
在烧录引导程序时，请确保线缆连接稳定，并且在烧录过程中**不要**断开连接。
:::

**步骤 1：安装 Adafruit-nrfutil**

对于 Windows 用户，同时按下 "Win" 键和 "r" 键，然后在弹出的窗口中输入 "cmd"，按下 "Enter"。这样可以打开命令行。

对于 Mac 用户，同时按下 "Command" 键和 "Space" 键，即可打开 Spotlight。然后输入 "termial"，按下 "Return"。这样可以打开命令行。

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

然后应该会出现 "Python xxx" 和 "pip xxx"。如果没有，请尝试重新安装 Python。

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

对于 Windows 用户，你可能需要手动添加路径。复制上一步显示的安装位置，然后按如下方式添加：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/AddPath.png" alt="pir" width={1000} height="auto" /></p>


</TabItem>

<TabItem value="sou" label="通过源码安装">

如果你在使用 PyPi 安装时遇到问题，或者想要修改该工具，请使用此方法。首先克隆此仓库并进入其文件夹。

```
git clone https://github.com/adafruit/Adafruit_nRF52_nrfutil.git
cd Adafruit_nRF52_nrfutil
```

注意：以下命令使用 `python3`，但是如果你在 Windows 上，可能需要将其改为 `python`，因为 Windows 上的 Python 3.x 安装仍然使用 python.exe 这个名称。

要在你的用户空间（主目录）中安装：

```
pip3 install -r requirements.txt
python3 setup.py install
```

如果在运行 `pip3 install` 时遇到权限错误，说明你的 `pip3` 版本较旧或被设置为尝试安装到系统目录。在这种情况下，请使用 `--user` 参数：

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
为了方便使用，请将其复制或移动到其他位置，例如在你的 %PATH% 中的某个目录。

</TabItem>
</Tabs>

**步骤 2：检查你的端口号**

将设备连接到电脑，并检查端口号。

以 Windows 用户为例：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Port.png" alt="pir" width={400} height="auto" /></p>

以 Mac 用户为例：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

**步骤 3：烧录引导程序**

在终端或命令提示符中，进入你下载引导程序压缩包的目录，并执行以下命令，将端口替换为你设备的正确端口：

- **对于 Windows**：

```
adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p COMXX -b 115200 --singlebank --touch 1200
```
请将 COMXX 更改为你的端口号。例如，如果你的设备在 com6 上，请将命令更改为：

`adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p COM6 -b 115200 --singlebank --touch 1200`

 部分设备在你输入此命令后会更改其端口号。因此，如果安装失败，请再次检查端口号。


- **对于其他系统**：

```
adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/BootloaderSolar.png" alt="pir" width={800} height="auto" /></p>

当你完成上述步骤后，你可以按照这个[步骤](https://wiki.seeedstudio.com/cn/get_started_with_meshtastic_solar_node/#flash-firmware)来烧录应用固件。

 ### 设备自动关机

 #### 描述

 - 设备开机后，过一段时间会自动关机或重启。 
 - 串口日志运行一段时间后停止。

 这可能是由于在设备处于以下状态时，手动强制重启或关机导致的：尚未完成消息传输过程、正在配置中……

 #### 故障排查

[点击这里](https://wiki.seeedstudio.com/cn/get_started_with_meshtastic_solar_node/#flash-erase)执行闪存擦除。然后重新烧录最新固件。


### 恢复出厂设置

如果你想恢复到默认设置，可以执行恢复出厂设置。你可以通过以下两种方法进行恢复出厂设置。

- [点击这里](https://wiki.seeedstudio.com/cn/get_started_with_meshtastic_solar_node/#flash-erase)执行闪存擦除。然后重新烧录最新固件。

- 在 App 上点击 `Factory Reset` 按钮。设备将自动以出厂配置重启。 
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Factory.png" alt="pir" width={400} height="auto" /></p>

### 功耗

功耗主要取决于数据传输频率和 GPS 更新速率等因素。
下列数据仅供参考；实际功耗可能会因真实使用环境而有所不同。

- **关机休眠模式功耗**

|描述|功耗|
|---|---|
|GPS_LED 工作电流|1.02 mA|
|上电但未激活|56.195 μA|
|上电且已激活|611 μA|

**示例：**

|电池容量 |电池寿命|
|---|---|
|3350|136.8|
|12000|490.2|

- **工作模式功耗**

|模式|电流|
|---|---|
|静态电流|10.65 mA|
|EU868 发射电流|157.74 mA|
|US915 发射电流|205.22 mA|
|GPS 工作电流|50 mA|
|GPS_LED 工作电流|1.02 mA|

### 信号质量

- **SNR** 反映通信链路的质量。正常设备通常在 -7 dB 以上工作。SNR 低于 -10 dB 的设备表示性能较差。

- **RSSI** 由设备及其周围环境共同决定。正常设备通常在 -110 dBm 以上工作。RSSI 低于 -115 dBm 的设备被认为性能较差。

      为获得最佳信号效果，请在开阔、无遮挡且干扰较少的区域使用设备。

### 充电电流

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar_node_diagram.png" alt="pir" width={800} height="auto" /></p>

Xiao nRF-52840 Plus 的最大充电电流为 200 mA。充电管理芯片 CN3165 为 0.99A。因此最大充电电流为 1A。

## 资源
- [Solar Node 电池寿命计算表](https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Solar%20Node%20Consumption%20Test%20and%20Battery%20Life%20Calculation.xlsx)
