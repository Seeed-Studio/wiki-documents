---
description: 开始使用适用于 Meshtastic 的 SenseCAP Indicator
title: 开始使用适用于 Meshtastic 的 Indicator
keywords:
  - Meshtastic
  - Indicator
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/indicator-page_1.webp
slug: /sensecap_indicator_meshtastic
sku: 114993532
last_update:
  date: 12/3/2024
  author: Michelle Huang
createdAt: '2024-10-29'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/cn/sensecap_indicator_meshtastic/
---


<div className="table-center">
  <video width="730" height="500" controls autoPlay muted>
    <source
      src="https://media-cdn.seeedstudio.com/media/catalog/product/1/-/1-114993532_sensecap_indicator_for_meshtastic_lora__2.mp4"
      type="video/mp4"
    />
  </video>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1L-for-Meshtastic-p-6304.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

SenseCAP Indicator 是一款为 [Meshtastic®](https://meshtastic.org/) 设计的 4 英寸触摸屏设备，由双 MCU（ESP32 和 RP2040）驱动，支持 Wi-Fi、BLE 和 LoRa®。它是一个开源、强大的物联网开发平台。

## 介绍

### 特性

- **支持 Meshtastic：** 预装 Meshtastic 固件，上电即可使用。你也可以使用 Meshtastic Flasher 升级固件。<br/>
- **双 MCU 与丰富 GPIO：** 搭载强大的 ESP32S3 和 RP2040 双 MCU，并提供超过 400 个兼容 Grove 的 GPIO，用于灵活扩展。<br/>
- **本地 LoRa® 物联网连接枢纽：** 集成 Semtech SX1262 LoRa® 芯片，可通过教程将设备转换为 LoRaWAN® 单通道网关。或者，通过 Wi-Fi 将 LoRa® 设备连接到如 Matter 等主流物联网平台。<br/>
- **完全开源平台：** 利用庞大的 ESP32 和 Raspberry Pi 开源生态，实现无限应用可能。<br/>
- **适用于多种应用场景：** 可作为 Meshtastic 桌面节点或车载节点，也可作为 LoRaWAN® 单通道网关。

### 规格

|屏幕|3.95 英寸，电容式 RGB 触摸屏|
| :- | :- |
|**屏幕分辨率**|480 x 480 像素|
|**电源**|5V-DC，1A|
|**电池**|无|
|**处理器**|<p>**ESP32-S3：** Xtensa® 双核 32 位，最高 240 MHz</p><p>**RP2040：** 双核 ARM Cortex-M0+，最高 133MHz</p>|
|**Flash**|<p>**ESP32-S3：** 8MB</p><p>**RP2040：** 2MB</p>|
|**外部存储**|支持最高 32GB Micro SD 卡（不含）|
|**Wi-Fi**|802.11b/g/n，2.4GHz|
|**蓝牙**|Bluetooth 5.0 LE|
|**LoRa(SX1262**)|支持 862-930MHz|
|**蜂鸣器（尚未开发）**|MLT-8530，共振频率：2700Hz|
|**认证**|CE/FCC|

### 硬件概览

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/HO-114993532.png" alt="pir" width={800} height="auto" /></p>

## 入门指南
:::danger note
当设备处于以下状态时，请不要手动重启或关闭电源。否则设备可能会损坏。
1. 尚未完成消息传输过程
2. 正在配置中
:::

### 烧录应用固件

:::caution note
在烧录固件之前，请确保你购买的 Indicator 是适用于 Meshtastic 的版本。不要将 Meshtastic 固件烧录到不兼容 Meshtastic 的 Indicator 上，这可能会导致硬件损坏。请 `don't use NRF-OTA` 来更新固件，否则可能会导致设备完全损坏。
:::

**视频教程**

<div class="video-container">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/55Sz8kHSyV4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

访问 [Meshtastic Web Flasher](https://flasher.meshtastic.org/)。

将目标设备选择为 `Seeed SenseCAP Indicator`，并选择最新固件，然后点击 `Flash`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/indicator-flash.png" alt="pir" width={800} height="auto" /></p>

按住按键的同时插入 USB 线。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/press-button.png" alt="pir" width={400} height="auto" /></p>

启用 `Full Erase and Install`，然后点击 `Erase Flash and Install`。

此时会显示 2 个端口，选择 `USB serial port` 并点击 `Connect`。

:::caution note
请务必选择 `USB Serial` 这一项，而不是 INDICATOR RP2040。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect11.png" alt="pir" width={800} height="auto" /></p>

### 烧录 GPS 固件（可选）

SenseCAP Indicator 本身不带 GPS，如需获取 GPS 位置，需要一个 [Grove GPS 模块](https://www.seeedstudio.com/Grove-GPS-Air530-p-4584.html)。<br/>
将 GPS 模块连接到 Grove 接口，然后烧录 GPS 固件。

- **[GPS 固件下载](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/meshtastic_gps.ino.uf2)**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/gps-connect.png" alt="pir" width={800} height="auto" /></p>

使用针长按这个内部按键，然后通过附带的 USB Type-C 线将设备连接到电脑，连接后松开按键。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_56.png" alt="pir" width={600} height="auto" /></p>

下载 `UF2` 文件并将其复制到 `RPI-RP2` 盘中。文件复制完成并且设备重启后，固件就会被烧录。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/disk.png" alt="pir" width={600} height="auto" /></p>

下载 `Meshtastic` App：

- [IOS App](https://meshtastic.org/docs/category/apple-apps/)
- [Android App](https://meshtastic.org/docs/category/android-app/)

### 通过 App 连接

- 打开设备电源，设备页面会显示当前设备的 MAC 地址。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/device-name4.png" alt="pir" width={700} height="auto" /></p>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="IOS App">

- 在蓝牙面板中选择目标设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- 输入配对码，然后点击 `Pair` 连接设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair111.png" alt="pir" width={800} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

- 点击 `+` 并选择目标设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>

- 输入配对码（默认配对码为 `123456`），然后点击 `OK` 连接设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

### 配置参数

为了开始在 Mesh 网络中通信，你必须设置所在区域。该设置会控制设备使用的频率范围，应根据你所在的地区进行设置。

<Tabs>
<TabItem value="ios" label="IOS App">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-region.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

**区域列表**

|**区域代码**|**描述**|**频率范围 (MHz)**|**占空比 (%)**|**功率限制 (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|未设置|N/A|N/A|N/A|
|US|美国|902.0 - 928.0|100|30|
|EU_868|欧盟 868MHz|869.4 - 869.65|10|27|

更多内容请参考 [按国家划分的 LoRa 区域](https://meshtastic.org/docs/configuration/region-by-country/)。

:::info
**EU_868** 必须遵守每小时 10% 的占空比限制，以滚动 1 小时为周期、每分钟计算一次。当达到限制时，你的设备将停止发射，直到再次被允许。
:::

现在你已经在设备上设置好了 LoRa 区域，可以继续配置任意适合你需求的 [LoRa 配置](https://meshtastic.org/docs/configuration/radio/lora/)。

### 键盘

:::tip note
2.5.xx 版本（出厂固件为 v2.5.11）与高于 2.6.xx 的版本在键盘使用方式上有所不同。请根据你当前的固件版本查看以下内容。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/keyboard-ve.png" alt="pir" width={400} height="auto" /></p>

#### 适用于版本 2.5.xx

<div class="table-center">
<iframe width="500" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/keyboard-usage.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

#### 适用于版本 2.6 及以上

<div class="table-center">
<iframe width="500" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/keyboard-usage2.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### 常见问题

#### RP2040 部分

RP2040 部分尚未开发完成，因此 `buzzer`/`SD card`/`map` 功能暂不可用。我们正在与 Meshtastic 合作进行优化。

#### 角色选择

:::caution
请不要选择 `Repeater` 角色，否则会导致设备不断重启。
:::

#### GPS 模块

如果你没有连接 GPS 模块，请在 `Meshtastic` App 中关闭 GPS 功能，否则设备会一直尝试寻找 GPS 模块，从而导致屏幕启动时间过长。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/gps-module.png" alt="pir" width={600} height="auto" /></p>

## 技术支持与产品讨论

<p style={{textAlign: 'center'}}><a href="https://www.facebook.com/groups/1755190828846458" target="_blank"><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/Banner_QRCode_FB.jpg" border="0" /></a></p>

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