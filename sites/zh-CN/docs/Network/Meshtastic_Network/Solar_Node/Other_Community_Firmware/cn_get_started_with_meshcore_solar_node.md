---
description: 开始使用适用于 Meshcore 和 LoRa 的 SenseCAP Solar Node。指导设备安装、固件烧录和设备连接。
title: 在 SenseCAP Solar Node 上开始使用 MeshCore
keywords:
  - Meshcore
  - Solar
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.webp
slug: /get_started_with_meshcore_solar_node
sku: 114993633,114993643
sidebar_position: 1
last_update:
  date: 8/17/2026
  author: Advent Jiang
createdAt: '2025-05-13'
url: https://wiki.seeedstudio.com/cn/get_started_with_meshcore_solar_node/
updatedAt: '2026-07-31'
---
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/image1_2.jpeg" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Solar-Node-P1-Pro-for-Meshcore-p-6741.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

<br></br>

:::danger note
当设备处于以下状态时，请不要手动重启或关闭设备。否则设备可能会损坏。
1. 尚未完成消息传输过程
2. 正在被配置
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

如果你点击了 `Erase Flash` 但没有任何响应，请再次点击 `Enter DFU`，然后再点击 `Erase Flash`，以确保已成功进入 DFU 模式。

如果你看到 "Flashing erase firmware:100%"，说明设备已成功擦除。

<p style={{textAlign: 'center'}}><img src=" https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSuccess.png" alt="pir" width={800} height="auto" /></p>

#### 烧录固件

选择固件版本。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/FirmwareVersion.png" alt="pir" width={800} height="auto" /></p>

不同版本的 MeshCore 固件在 LoRa 发射指示灯和电源按键行为上有所不同。在判断设备状态之前，请先确认你当前使用的固件版本。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/version-different.png" alt="pir" width={800} height="auto" /></p>

:::note
**固件版本差异（LoRa 发射指示灯）**

指示灯在下图中已编号，方便你根据颜色描述快速识别对应的 LED：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/interactive.png" alt="pir" width={800} height="auto" /></p>

- **12 号 - 黄色 LED**：太阳能输入 / 光照状态指示灯。
- **13 号 - 蓝色 LED**：LoRa 发射指示灯。
- **14 号 - 白色 LED**：LoRa 发射指示灯。

不同版本的 MeshCore 固件在 LoRa 发射时点亮的物理 LED 不同：

- v1.12.0 ~ v1.14.0：LoRa 发射期间蓝色 LED（13 号）闪烁。
- v1.14.1 ~ v1.15.x：LoRa 发射期间白色 LED（14 号）闪烁。
- v1.16.0 及之后版本：LoRa 发射期间又改为蓝色 LED（13 号）闪烁。
- 在不同版本中看到蓝色或白色闪烁并不代表硬件故障。

红色、绿色和黄色 LED 主要是硬件电源状态指示灯，与 MeshCore 发射指示灯版本差异无关：

- 红色：主要表示设备正在充电。
- 绿色：主要表示充电完成。
- 黄色（12 号）：主要表示太阳能输入 / 光照状态。
:::

点击 `Enter DFU Mode`，选择名为 "P1 Pro" 或 "TinyUSB" 的串口。然后点击 `Flash` 并选择串口。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSe.png" alt="pir" width={800} height="auto" /></p>

如果你点击了 `Flash` 但没有任何响应，请再次点击 `Enter DFU`，然后再点击 `Flash`，以确保已成功进入 DFU 模式。

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

双击 RST 按键手动进入 DFU 模式。10~15 秒后，你会看到一个名为 `Xiao-Boot` 或 `Solar Node` 的磁盘弹出。 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/DFUMode.png" alt="pir" width={800} height="auto" /></p>

将下载好的 UF2 文件拖拽到弹出的磁盘中。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/EraseDr.png" alt="pir" width={800} height="auto" /></p>

固件烧录成功后，该磁盘会自动消失。此时设备中没有固件，因此设备 `不会` 自动重启。

#### 烧录固件

选择最新的固件版本。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/FirmwareVersion.png" alt="pir" width={800} height="auto" /></p>

下载 UF2 文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/FlashFirmware.png" alt="pir" width={800} height="auto" /></p>

双击 RST 按键手动进入 DFU 模式。10~15 秒后，你会看到一个名为 `Xiao-Boot` 或 `Solar Node` 的磁盘弹出。 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/DFUMode.png" alt="pir" width={800} height="auto" /></p>

将下载好的 UF2 文件拖拽到弹出的磁盘中。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/FirmwareDr.png" alt="pir" width={800} height="auto" /></p>

固件烧录成功后，该磁盘会自动消失。此时设备中没有固件，因此设备不会自动重启。

## 入门

在正式部署前，请先对节点进行测试和配置。

### 安装

#### 组装设备

:::danger note
由于设备将长期在户外使用，请避免将面板水平安装。建议采用倾斜或斜向安装，以防止积水。此外，请确保所有螺丝已牢固拧紧且上盖安装到位。为了增强防水性能，你也可以考虑额外进行密封处理。
:::

- **部件清单**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/part-list.png" alt="pir" width={800} height="auto" /></p>


- 步骤 1：使用垫片和螺丝将部件 1 固定在设备底部。

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
P1-Pro 版本内置电池和 GPS 模块，对于 P1 版本，如有需要，用户需要手动安装电池和 GPS 模块。
:::



- 步骤 1：卸下所有螺丝并取下外壳。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.png" alt="pir" width={800} height="auto" /></p>

- 步骤 2：安装电池和 GPS 模块。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/install-bat-gps.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/gps_install.png" alt="pir" width={800} height="auto" /></p>

- 步骤 3：组装外壳。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.png" alt="pir" width={800} height="auto" /></p>

:::caution note
请确保外壳正确安装且螺丝拧紧，以保持设备的防水性能。
:::

#### （可选）升级天线

- 你可以通过观看此视频，将天线更换为玻璃钢天线。

如果你需要更高增益的天线，我们推荐 [860-930MHz 3dBi fiberglass](https://www.seeedstudio.com/LoRa-Fiberglass-Antenna-Kit-with-base-860-930MHz-3dBi-360mm-p-5315.html) 天线和 [902-928MHz 5.8dBi fiberglass](https://www.seeedstudio.com/RF-Explorer-LoRa-Fiberglass-Antenna-Kit-902-930MHz-5-8dBi-800mm-p-5275.html) 天线。

### 启动设备

设备需要通过连接 USB 线来激活。启动时，蓝色 LED 会亮起约 3 秒，这表示设备已成功开机。

只有当 Solar Node 自身发送 LoRa 数据时（例如发送 advert 时），TX LED 才会闪烁。接收数据不会点亮 TX LED。在 LoRa 发送（TX）期间，LED 颜色取决于固件版本——请参见上文固件版本差异说明。

:::tip
**电源按钮（开/关机）**

- MeshCore v1.14.0 及更早版本：不支持长按电源键开/关机。如果长按电源键没有反应，这是该固件版本的正常行为，而不是按键故障。
- MeshCore v1.14.1 及之后版本：长按电源键约 `3s` 可开/关机。你会看到白灯短暂闪烁，这表示设备正在成功开/关机。

**按键说明**

- **电源按钮（Power Button）**：开/关机（从 v1.14.1 开始支持）。
- **复位按钮（Reset Button）**：重启设备 / 进入 DFU 或 Bootloader 模式。

请不要将长按电源键与双击复位键混淆。
<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/blinkingonetime.mp4" scrolling="yes" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>
:::


### 配置

- **步骤 1 初始配置**

当 MeshCore 第一次被烧录到 LoRa 设备上时，需要设置服务器设备的频率，使其使用在你所在国家或地区合法的频率。

[Click here](https://config.meshcore.io/) 配置中继器。

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
**EU_868** 必须遵守每小时 10% 的占空比限制，以滚动 1 小时为周期、按每分钟计算。如果达到该限制，你的设备将停止发送，直到再次被允许发送。
:::


- **步骤 2 发送 Advert**

点击 "send advert" 以使其他 Meshcore 设备能够看到此中继器。然后该中继器就可以在设备列表中被看到。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/AdvertSending.png" alt="pir" width={600} height="auto" /></p>

点击 **Send Advert** 会让 Solar Node 主动执行一次 LoRa 发送（TX），因此对应固件版本的 TX LED 应该会短暂闪烁：

- v1.12.0 ~ v1.14.0：蓝色 LED 闪烁
- v1.14.1 ~ v1.15.x：白色 LED 闪烁
- v1.16.0 及之后版本：蓝色 LED 闪烁

TX LED 表示 Solar Node 自身正在发送 LoRa 数据（TX）。它不是接收（RX）指示灯。

- **步骤 3（可选）管理员登录**

中继器的默认管理员密码为 `password`。 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/AAdmin.png" alt="pir" width={600} height="auto" /></p>

登录后，你可以看到配置页面。现在你可以为中继器调整配置。

如果你想显示中继器的位置，可以启用 GPS。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/GPSS.jpg" alt="pir" width={300} height="auto" /></p>

此外，你可以调整 advert 广播间隔：

- **Advert interval**：本地 / 零跳 Advert 的发送间隔。间隔范围为 60-240 分钟。
- **Flood advert interval**：Flood Advert 的发送间隔。间隔范围为 3-168 小时。

实际的 advert 周期取决于当前固件版本以及保存在设备上的配置，因此请始终以配置页面上 `Advert interval` 和 `Flood advert interval` 的实际数值为准。如果某个间隔被设置为 `0`，则对应的自动 advert 会被禁用。

**注意：** 从 MeshCore v1.16.0 开始，默认的 Flood advert 间隔已从 12 小时更改为 47 小时。因此，我们不建议通过等待自动 advert 来验证设备。要验证 TX 和 LED，请点击 **Send Advert** 主动触发一次 LoRa 发送（TX）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/AdvertInterval.jpg" alt="pir" width={300} height="auto" /></p>

### 设置路径

在将中继器添加到你的路由之前，你可能需要先使用中继器发送 advert。中继器会根据保存在设备上的 `Advert interval` 和 `Flood advert interval`，以固定间隔自动发送 advert。该间隔取决于固件版本和当前设备配置，可能长达数小时。我们建议点击 **Send Advert** 立即触发，而不是等待自动 advert。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/SendAdvert.png" alt="pir" width={600} height="auto" /></p>

你可以手动设置消息发送路径。将你的蓝牙伴侣设备连接到手机 APP，打开一个私信窗口。然后你可以选择已发现的中继器来组成你的路径。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/SetPath1.png" alt="pir" width={600} height="auto" /></p>

设置路径后，传输方式会变为 “n hop”。例如，如果你在路由中添加 1 个中继器，它将变为 1 hop。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/1Hop.png" alt="pir" width={300} height="auto" /></p>

:::note
MeshCore 中继器不会转发它接收到的每一个 LoRa 数据包。

- **情况 1**：Companion 发送数据 → Solar Node 接收到数据（RX）→ 不需要回复或转发 → Solar Node 不执行 TX → TX LED 不闪烁。这是正常现象。
- **情况 2**：Solar Node 接收到数据 → 需要回复或转发 → Solar Node 执行一次 LoRa 发送（TX）→ TX LED 以对应固件版本的颜色闪烁。

Solar Node 成功接收 LoRa 数据并不意味着 TX LED 一定会闪烁。TX LED 只表示 Solar Node 自身正在发送 LoRa 数据。

例如，当网络中只有一个 Companion 和一个 Solar Node 中继器时，在 Companion 发送数据后，Solar Node 可能在不需要再次发送的情况下就成功接收到数据包。在这种情况下，看不到 TX LED 闪烁，不能直接据此判断中继器异常。
:::

## 验证设备是否正常工作

在验证之前，请先确认你是只使用一个 Solar Node 设备，还是在系统中还配有其他 MeshCore Companion 设备。

对于中继器模式，预期行为如下：

- 当设备通过 USB 连接时，它可以显示为在线并进行配置。
- 拔掉 USB 供电后，设备会切换到电池模式，并继续作为中继器工作。
- 当 Solar Node 自身发送 LoRa 数据时，TX LED 会以对应固件版本的颜色短暂闪烁。这是正常现象，表示存在 LoRa 活动。
- 除非与 Companion 设备配合使用，否则不应期望 Solar Node 中继器像独立的手机连接设备那样工作。

为了正确验证中继器是否正常工作，请按照下面两个主动验证步骤进行操作。不要依赖等待自动广播作为主要验证方法。

### 步骤 1：验证 Solar Node 发送（TX）

1. 通过 USB 连接 Solar Node。
2. 打开 MeshCore 配置页面：[https://config.meshcore.io/](https://config.meshcore.io/)。
3. 点击 **Send Advert**。
4. 观察 Solar Node 上的 TX 指示灯。

当 Solar Node 发送广播时，TX 指示灯会短暂闪烁，对应固件版本的颜色如下：

- v1.12.0 ~ v1.14.0：蓝色指示灯
- v1.14.1 ~ v1.15.x：白色指示灯
- v1.16.0 及之后版本：蓝色指示灯

Companion 应该能够接收到 Solar Node 的广播。这可以主动验证 Solar Node → Companion 方向上的 LoRa 发送（TX）。

### 步骤 2：使用 Ping 验证双向通信

1. 在 Companion 设备上，打开 Solar Node Repeater 联系人，并使用 **Ping** 功能。

如果 Ping 成功，则同时验证了通信的两个方向：

- Companion → Solar Node：接收（RX）
- Solar Node → Companion：发送（TX）回复

当 Solar Node 发送 Ping 回复时，TX 指示灯会短暂闪烁，对应固件版本的颜色。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/710-6.png" alt="通过另一台 MeshCore 设备的 Ping 验证 Solar Node 中继器" width={700} height="auto" /></p>

:::note
TX 指示灯不是接收（RX）指示灯。如果 Solar Node 只接收数据包而不需要回复或转发，指示灯可能完全不会闪烁。
:::

:::tip
我们不建议通过等待自动广播来验证设备是否工作，因为广播间隔可能非常长。请使用 **Send Advert** 主动立即触发一次发送（TX）。
:::

:::note
手机应用主要是配合 Companion 设备使用，而不是直接配合 Repeater 使用。中继器本身不会像普通的蓝牙手机配件那样工作。
:::

如果指示灯行为和 USB 连接状态与上述描述一致，通常表示中继器工作正常。

## 常见问题（FAQ）

### 启动循环（Boot Loop）

- 原因

这通常是由固件烧录失败引起的。烧录固件时，请保持连接稳定。

- 故障排查

[点击这里](https://wiki.seeedstudio.com/cn/get_started_with_meshcore_solar_node/#flash-erase) 重新烧录固件。

### 设备变砖

#### 描述

设备无响应、无指示灯，无法与 App 配对。

**1）设备仍然可以进入 DFU 模式，则尝试重新烧录 Bootloader。**

#### 烧录 Bootloader

- [Bootloader 下载](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/xiao_nrf52840_ble_bootloader.zip)

:::danger note
在烧录 Bootloader 时，请确保线缆连接稳定，并且在烧录过程中 **不要** 断开连接。
:::

**步骤 1：安装 Adafruit-nrfutil**

对于 Windows 用户，同时按下 "Win" 键和 "R" 键，然后在弹出的窗口中输入 "cmd"，按下 "Enter"。这样可以打开命令行。

对于 Mac 用户，同时按下 "Command" 键和 "Space" 键，以打开 Spotlight。然后输入 "termial"，按下 "Return"。这样可以打开命令行。

**前置条件**

- [Python3](https://www.python.org/downloads/)
- [pip3](https://pip.pypa.io/en/stable/installation/)

在命令行中检查 python 和 pip 是否已成功安装。

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

对于 Windows 用户，可能需要手动添加路径。复制上一步显示的安装位置，然后按如下方式添加：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/AddPath.png" alt="pir" width={1000} height="auto" /></p>

</TabItem>

<TabItem value="sou" label="通过源码安装">

如果你在使用 PyPI 安装时遇到问题，或者想要修改该工具，请使用此方法。首先克隆此仓库并进入其文件夹。

```
git clone https://github.com/adafruit/Adafruit_nRF52_nrfutil.git
cd Adafruit_nRF52_nrfutil
```

注意：以下命令使用 `python3`，但是如果你在 Windows 上，可能需要将其改为 `python`，因为 Windows 上的 Python 3.x 安装仍然使用 python.exe 这个名称。

要在用户空间（你的 home 目录）中安装：

```
pip3 install -r requirements.txt
python3 setup.py install
```

如果在运行 `pip3 install` 时遇到权限错误，说明你的 `pip3` 版本较旧或被设置为尝试安装到系统目录。这种情况下请使用 `--user` 参数：

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

你可以在 `Adafruit_nRF52_nrfutil\nordicsemi\dist\adafruit-nrfutil` 中找到 .exe（如果你在 Windows 上，则带有 `.exe`）。
为了方便使用，可以将其复制或移动到其他位置，例如在你的 %PATH% 中的某个目录。

</TabItem>
</Tabs>

**步骤 2：检查端口号**

将设备连接到电脑，并检查端口号。

以 Windows 用户为例：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Port.png" alt="pir" width={400} height="auto" /></p>

以 Mac 用户为例：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

**步骤 3：烧录 Bootloader**

在终端或命令提示符中，进入你下载 Bootloader 压缩包的目录，并执行以下命令，将端口替换为你设备的正确端口：

- **对于 Windows**：

```
adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p COMXX -b 115200 --singlebank --touch 1200
```
请将 COMXX 改为你的端口号。例如，如果你的设备在 com6 上，请将命令改为：

`adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p COM6 -b 115200 --singlebank --touch 1200`

 部分设备在你输入此命令后会改变端口号。因此如果安装失败，请再次检查端口号。


- **对于其他系统**：

```
adafruit-nrfutil --verbose dfu serial --package xiao_nrf52840_ble_bootloader.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/BootloaderSolar.png" alt="pir" width={800} height="auto" /></p>

完成上述步骤后，你就可以[烧录应用固件](https://wiki.seeedstudio.com/cn/get_started_with_meshcore_solar_node/#flash-erase)。

### 信号质量

- **SNR** 反映通信链路的质量。正常设备通常在 -7 dB 以上工作。SNR 低于 -10 dB 的设备表示性能较差。

- **RSSI** 由设备及其周围环境共同决定。正常设备通常在 -110 dBm 以上工作。RSSI 低于 -115 dBm 的设备被认为性能较差。

      为获得最佳信号效果，请在开阔、无遮挡且干扰较少的环境中使用设备。

### 充电电流

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar_node_diagram.png" alt="pir" width={800} height="auto" /></p>

Xiao nRF-52840 Plus 的最大充电电流为 200 mA。充电管理芯片 CN3165 的电流为 0.99 A。因此最大充电电流为 1 A。

### 为什么我的 Solar Node 在发送数据时是白灯闪烁而不是蓝灯？

这是 MeshCore 固件版本的差异，而不是硬件故障：

- v1.12.0 ~ v1.14.0：蓝色指示灯 TX
- v1.14.1 ~ v1.15.x：白色指示灯 TX
- v1.16.0 及之后版本：蓝色指示灯 TX

在 v1.14.1 ~ v1.15.x 上出现白色闪烁并不表示硬件故障。

### 为什么长按电源键无法关闭设备？

从 MeshCore v1.14.1 开始支持通过长按电源键开关机。在 v1.14.0 及更早版本中，长按电源键没有任何响应，这是该固件版本的正常行为。

### 为什么我的 Solar Node 很久都没有闪烁？

- TX 指示灯只会在 Solar Node 自身执行 LoRa 发送（TX）时闪烁。
- 接收（RX）不一定会触发 TX 指示灯。
- Repeater 不会转发它接收到的每一个数据包。
- 自动广播的间隔可能非常长。
- 从 v1.16.0 起，默认 Flood 广播间隔为 47 小时。
- 如果你需要立即验证，请使用 **Send Advert**。

## 资源
- [Solar Node 电池寿命计算表](https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/mesh_repeater_power_table_en1.xlsx)

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