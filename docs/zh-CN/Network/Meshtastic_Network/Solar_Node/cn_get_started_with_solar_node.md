---
description: SenseCAP Solar Node for Meshtastic & LoRa 入门指南
title:  SenseCAP Solar Node 入门指南
keywords:
- Meshtastic
- Solar
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.webp
slug: /cn/get_started_with_meshtastic_solar_node
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
## 入门指南

在正式部署之前，请先测试和配置节点。

### 刷写固件

:::caution note
请`不要使用 NRF-OTA` 更新固件，这可能会导致设备完全损坏。
在刷写固件之前，请先刷写擦除固件！
:::

访问 [Meshtastic Web Flasher](https://flasher.meshtastic.org/)。选择目标设备为 `Seeed SenseCAP Solar Node`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/select-solar.png" alt="pir" width={800} height="auto" /></p>

#### 刷写擦除

点击 `trash` 符号。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/FlashEraseIcon.png" alt="pir" width={800} height="auto" /></p>

下载并复制擦除固件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/EraseUF2.png" alt="pir" width={800} height="auto" /></p>

点击 `Enter DFU Mode`，会出现一个名为 `XIAO-xxx` 的串口，点击并连接它，应该会显示一个名为 `XIAO-xxx` 的驱动器。将擦除固件粘贴到磁盘中。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/52840-connect.png" alt="pir" width={800} height="auto" /></p>

此过程可能需要一些时间。请等待 "XIAO-XXX" 磁盘消失。

#### 刷写应用固件

选择您想要的固件版本。点击 `flash`。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/3-steps.png" alt="pir" width={800} height="auto" /></p>

下载 UF2 文件并进入 DFU。将 UF2 文件拖拽到 DFU 驱动器。文件下载完成并设备重启后，固件应该已刷写完成。

### 安装电池和 GPS 模块（可选）

:::tip
当您需要安装或更换电池时，请使用 `Button-top` 18650（3.6V）电池。
<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-battery.png" alt="pir" width={500} height="auto" /></p>
P1-Pro 版本内置电池和 GPS 模块，对于 P1 版本，如果需要，用户需要手动安装电池和 GPS 模块。
:::



- 步骤 1：拆下所有螺丝和盖子。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.png" alt="pir" width={800} height="auto" /></p>

- 步骤 2：安装电池和 GPS 模块。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/install-bat-gps.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/gps_install.png" alt="pir" width={800} height="auto" /></p>

- 步骤 3：组装外壳。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.png" alt="pir" width={800} height="auto" /></p>

:::caution note
确保外壳正确安装，螺丝牢固拧紧，以保持设备的防水完整性。
:::

### 开启设备

设备首次使用时需要通过连接 USB 线缆来激活。如果蓝色 Mesh 指示灯闪烁，说明设备已成功开启。如下方视频所示：

<div class="table-center">
<iframe width="700" height="250" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solarnodeturnon.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::tip
如果按下按钮时设备没有响应，请先充电。请勿使用快充充电器。
:::

### 通过应用连接

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="IOS 应用">

- 在蓝牙面板上选择目标设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- 输入代码（默认代码是 `123456`），然后点击 `OK` 连接设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android 应用">

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
|US|美国|902.0 - 928.0|100|30|
|EU_868|欧盟 868MHz|869.4 - 869.65|10|27|

参考 [LoRa Region by Country](https://meshtastic.org/docs/configuration/region-by-country/) 获取更全面的列表。

:::info
**EU_868** 必须遵守每小时 10% 的占空比限制，基于滚动 1 小时计算，每分钟计算一次。如果达到限制，您的设备将停止传输，直到再次被允许。
:::

现在您已经在设备上设置了 LoRa 区域，您可以继续配置任何 [LoRa Configs](https://meshtastic.org/docs/configuration/radio/lora/) 以满足您的需求。

### 配置 GPS

请设置启用 GPS。您可以调整更新间隔和广播间隔以获得更及时的位置信息。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshGPS.png" alt="pir" width={500} height="auto" /></p>

对于 IOS，请开启 `Accurate Location`。否则，定位可能会有偏差。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSAccurateLocation.jpg" alt="pir" width={200} height="auto" /></p>

### 按钮

|按钮操作|描述|
|--|--|
|按住 PWR 3 秒|开机|
|按 PWR 两次|更新节点/位置信息|
|按 PWR 三次|开启/关闭 GPS|
|按住 PWR 5 秒|关机|
|按 RST 两次|手动进入 DFU|

## 安装

:::danger note
由于设备将在户外长期使用，请避免将面板水平安装。建议倾斜或对角安装以防止积水。此外，确保所有螺丝牢固拧紧，盖子正确安装。为了增强防水保护，您还可以考虑采用额外的密封措施。
:::

- **零件清单**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/part-list.png" alt="pir" width={800} height="auto" /></p>



### 分步安装指导

- 步骤 1：使用垫圈和螺丝将零件 1 连接到设备底部。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Universal-Joint.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- 步骤 2：用螺丝连接万向节（部件 2）和支架（部件 3）。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/joint.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- 步骤 3：连接射频电缆（部件 4）和天线（部件 5）。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-antenna.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- 步骤 4：在适当位置安装环形圈。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/hoop-ring.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- 步骤 5：连接万向节支架。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connector.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- 步骤 6：松开螺丝，将万向节调整到适当位置，然后拧紧螺丝。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- 步骤 7：将天线连接到设备。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-antenna2.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### 完整安装指导

- 您可以通过视频完成整个安装和初始化过程。

<div class="video-container">
<iframe width="730" height="500" src="https://www.youtube.com/embed/smQe7G0Bbsk?si=kcB8BdoxiwpZqB4g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### 为太阳能节点添加传感器（可选）

- 您可以通过此视频安装传感器。

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
    <td>压力</td>
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
    <td>温度、湿度和压力</td>
    <td>[BME280](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html)</td>
  </tr>
  <tr>
    <td rowspan="2">其他</td>
    <td>心率和血氧</td>
    <td>[MAX30102](https://www.seeedstudio.com/MAXREFDES117-HEART-RATE-AND-PULSE-OXIMETRY-MONITOR-p-2762.html)</td>
  </tr>
  <tr>
    <td>I2C 键盘</td>
    <td>CardKB</td>
  </tr>
</table>

### 升级天线（可选）

- 您可以通过观看此视频将天线更换为玻璃纤维天线。

如果您需要更高增益的天线，我们推荐 [860-930MHz 3dBi 玻璃纤维](https://www.seeedstudio.com/LoRa-Fiberglass-Antenna-Kit-with-base-860-930MHz-3dBi-360mm-p-5315.html)天线和 [902-928MHz 5.8dBi 玻璃纤维](https://www.seeedstudio.com/RF-Explorer-LoRa-Fiberglass-Antenna-Kit-902-930MHz-5-8dBi-800mm-p-5275.html)天线。

<div class="video-container">
<iframe width="730" height="500" src="https://www.youtube.com/embed/uCUq7VrNkzc?si=9uiAAZY45B-Sg-wD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 常见问题

### 启动循环

- 原因

这通常是由固件刷写失败引起的。刷写固件时，请保持稳定的连接。

- 故障排除

[点击此处](https://wiki.seeedstudio.com/cn/get_started_with_meshtastic_solar_node/#flash-firmware)重新刷写固件。

### 设备变砖

#### 描述

设备无响应，无 LED 指示，无法与您的应用配对。

**1) 设备仍可进入 DFU 模式，则尝试刷写引导程序**。

#### 刷写引导程序

- [引导程序下载](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/xiao_nrf52840_ble_bootloader.zip)

:::danger note
刷写引导程序时，请确保电缆连接稳定，在刷写过程中**请勿**断开连接。
:::

**步骤 1：Adafruit-nrfutil 安装**

**前提条件**

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

注意：以下命令使用 `python3`，但如果您在 Windows 上，可能需要将其更改为 `python`，因为 Windows 的 python 3.x 安装仍使用 python.exe 名称。

在您的主目录中安装到用户空间：

```
pip3 install -r requirements.txt
python3 setup.py install
```

如果运行 `pip3 install` 时出现权限错误，您的 `pip3` 版本较旧或设置为尝试安装到系统目录。在这种情况下使用 `--user` 标志：

```
pip3 install -r --user requirements.txt
python3 setup.py install
```

如果您想安装到系统目录（通常不推荐）：

```
sudo pip3 install -r requirements.txt
sudo python3 setup.py install
```

要生成工具的独立可执行二进制文件（Windows 和 MacOS），运行这些命令：

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

将您的设备连接到 PC，并检查端口号。

示例：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

**步骤 3：刷写引导程序**

在终端或命令提示符中，导航到您下载引导程序压缩包的目录，并执行以下命令，将端口替换为您设备的正确端口：

- **对于 Windows**：

```
adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p COMXX -b 115200 --singlebank --touch 1200
```

- **对于其他系统**：

```
adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/BootloaderSolar.png" alt="pir" width={800} height="auto" /></p>

完成上述步骤后，您可以按照此[步骤](https://wiki.seeedstudio.com/cn/get_started_with_meshtastic_solar_node/#flash-firmware)刷写应用固件。

 ### 设备自动关机

 #### 描述

 - 设备开机后，会在一段时间后自动关机或重启。
 - 串口日志运行一段时间后停止。

 这可能是由于在设备处于以下状态时手动强制重启或关闭设备造成的：未完成消息传输过程、正在配置......

 #### 故障排除

[点击此处](https://wiki.seeedstudio.com/cn/get_started_with_meshtastic_solar_node/#flash-erase)执行闪存擦除。然后重新刷写最新固件。


### 恢复出厂设置

如果您想恢复到默认设置，可以执行恢复出厂设置。有两种方法可以执行恢复出厂设置。

- [点击此处](https://wiki.seeedstudio.com/cn/get_started_with_meshtastic_solar_node/#flash-erase)执行闪存擦除。然后重新刷写最新固件。

- 在应用中点击 `Factory Reset` 按钮。设备将自动使用出厂配置重启。
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Factory.png" alt="pir" width={400} height="auto" /></p>

### 功耗

功耗主要取决于数据传输频率和 GPS 更新速率等因素。
以下数据仅供参考；实际功耗可能因实际使用条件而异。

- **关机睡眠模式功耗**

|描述|功耗|
|---|---|
|GPS_LED 工作电流|1.02 mA|
|已供电但未激活|56.195 μA|
|已供电且已激活|611 μA|

**示例：**

|电池容量|电池寿命|
|---|---|
|3350|136.8|
|12000|490.2|

- **活动模式功耗**

|模式|电流|
|---|---|
|静态电流|10.65 mA|
|EU868 传输电流|157.74 mA|
|US915 传输电流|205.22 mA|
|GPS 工作电流|50 mA|
|GPS_LED 工作电流|1.02 mA|

### 信号质量

- **SNR** 反映通信链路的质量。正常设备通常在 -7 dB 以上工作。SNR 低于 -10 dB 的设备表示性能较差。

- **RSSI** 由设备及其周围环境共同决定。正常设备通常在 -110 dBm 以上工作。RSSI 低于 -115 dBm 的设备被认为性能较差。

      为了获得最佳信号效果，请在开阔、无遮挡且干扰最小的区域使用设备。

## 资源
- [太阳能节点电池寿命计算表](https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Solar%20Node%20Consumption%20Test%20and%20Battery%20Life%20Calculation.xlsx)
