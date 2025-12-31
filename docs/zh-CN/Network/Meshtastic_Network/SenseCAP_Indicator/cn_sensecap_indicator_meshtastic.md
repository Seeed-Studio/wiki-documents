---
description: SenseCAP Indicator for Meshtastic 入门指南
title: Indicator for Meshtastic 入门指南
keywords:
- Meshtastic
- Indicator
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/indicator-page_1.webp
slug: /cn/sensecap_indicator_meshtastic
last_update:
  date: 12/3/2024
  author: Michelle Huang
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
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

SenseCAP Indicator 是一款专为 [Meshtastic®](https://meshtastic.org/) 设计的 4 英寸触摸屏设备，由双 MCU（ESP32 和 RP2040）驱动，支持 Wi-Fi、BLE 和 LoRa®。它是一个开源、强大的物联网开发平台。

## 简介

### 特性

- **支持 Meshtastic：** 预装 Meshtastic 固件，通电即可使用。您也可以使用 Meshtastic Flasher 升级固件。<br/>
- **双 MCU 和丰富的 GPIO：** 配备强大的 ESP32S3 和 RP2040 双 MCU，以及超过 400 个 Grove 兼容 GPIO，提供灵活的扩展选项。<br/>
- **本地 LoRa® 物联网连接中心：** 集成 Semtech SX1262 LoRa® 芯片，设备可通过教程转换为 LoRaWAN® 单通道网关。或者，通过 Wi-Fi 将 LoRa® 设备连接到 Matter 等流行的物联网平台。<br/>
- **完全开源平台：** 利用广泛的 ESP32 和 Raspberry Pi 开源生态系统，实现无限的应用可能性。<br/>
- **适用于多种应用场景：** 可用作 Meshtastic 桌面节点或车载节点，以及 LoRaWAN® 单通道网关。

### 规格参数

|屏幕|3.95 英寸，电容式 RGB 触摸屏|
| :- | :- |
|**屏幕分辨率**|480 x 480 像素|
|**电源供应**|5V-DC，1A|
|**电池**|无|
|**处理器**|<p>**ESP32-S3：** Xtensa® 双核 32 位，最高 240 MHz</p><p>**RP2040：** 双 ARM Cortex-M0+，最高 133MHz</p>|
|**闪存**|<p>**ESP32-S3：** 8MB</p><p>**RP2040：** 2MB</p>|
|**外部存储**|支持最大 32GB Micro SD 卡（不包含）|
|**Wi-Fi**|802.11b/g/n，2.4GHz|
|**蓝牙**|蓝牙 5.0 LE|
|**LoRa(SX1262**)|支持 862-930MHz|
|**蜂鸣器（尚未开发）**|MLT-8530，谐振频率：2700Hz|
|**认证**|CE/FCC|

### 硬件概述

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/HO-114993532.png" alt="pir" width={800} height="auto" /></p>

## 入门指南
:::danger note
当设备处于以下状态时，请不要手动重启或关闭设备。否则设备可能会损坏。
1. 未完成消息传输过程
2. 正在配置中
:::

### 刷写应用固件

:::caution note
在刷写固件之前，请确保您购买的指示器是 Meshtastic 版本。不要将 Meshtastic 固件刷写到不兼容 Meshtastic 的指示器上。这可能会导致硬件损坏。请`不要使用 NRF-OTA` 更新固件，这可能会导致设备完全损坏。
:::

**视频教程**

<div class="video-container">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/55Sz8kHSyV4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

访问 [Meshtastic Web Flasher](https://flasher.meshtastic.org/)。

选择目标设备为 `Seeed SenseCAP Indicator` 并选择最新固件，然后点击 `Flash`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/indicator-flash.png" alt="pir" width={800} height="auto" /></p>

在插入 USB 线缆的同时按住按钮。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/press-button.png" alt="pir" width={400} height="auto" /></p>

启用 `Full Erase and Install`，然后点击 `Erase Flash and Install`。

将显示 2 个端口，选择 `USB serial port` 并点击 `Connect`。

:::caution note
请选择 `USB Serial` 端口，而不是 INDICATOR RP2040。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect11.png" alt="pir" width={800} height="auto" /></p>

### 刷写 GPS 固件（可选）

SenseCAP Indicator 没有内置 GPS，要获取 GPS 位置，需要 [Grove GPS 模块](https://www.seeedstudio.com/Grove-GPS-Air530-p-4584.html)。<br/>
将 GPS 模块连接到 Grove 端口，然后刷写 GPS 固件。

- **[GPS 固件下载](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/meshtastic_gps.ino.uf2)**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/gps-connect.png" alt="pir" width={800} height="auto" /></p>

使用针长按此内部按钮，然后通过提供的 USB Type-C 线缆将设备连接到您的 PC，连接后松开按钮。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_56.png" alt="pir" width={600} height="auto" /></p>

下载 `UF2` 文件并将其复制到 `RPI-RP2` 驱动器。文件下载完成后固件将被刷写，设备将重启。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/disk.png" alt="pir" width={600} height="auto" /></p>

下载 `Meshtastic` 应用：

- [IOS 应用](https://meshtastic.org/docs/category/apple-apps/)
- [Android 应用](https://meshtastic.org/docs/category/android-app/)

### 通过应用连接

- 打开设备电源，设备页面将显示当前设备的 MAC 地址。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/device-name4.png" alt="pir" width={700} height="auto" /></p>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="IOS 应用">

- 在蓝牙面板上选择目标设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- 输入代码，然后点击 `Pair` 连接设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair111.png" alt="pir" width={800} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android 应用">

- 点击 `+` 并选择目标设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>

- 输入代码（默认代码是 `123456`），然后点击 `OK` 连接设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

### 配置参数

为了开始通过网格进行通信，您必须设置您的区域。此设置控制您的设备使用的频率范围，应根据您的区域位置进行设置。

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

参考 [按国家划分的 LoRa 区域](https://meshtastic.org/docs/configuration/region-by-country/) 获取更全面的列表。

:::info
**EU_868** 必须遵守每小时 10% 的占空比限制，基于滚动 1 小时计算每分钟。如果达到限制，您的设备将停止传输，直到再次被允许。
:::

现在您已经在设备上设置了 LoRa 区域，您可以继续配置任何 [LoRa 配置](https://meshtastic.org/docs/configuration/radio/lora/) 以满足您的需求。

### 键盘

:::tip note
版本 2.5.xx（出厂固件为 v2.5.11.）和版本 2.6.xx 以上的键盘使用方法不同。请根据您当前的固件版本查看以下内容。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/keyboard-ve.png" alt="pir" width={400} height="auto" /></p>

#### 版本 2.5.xx

<div class="table-center">
<iframe width="500" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/keyboard-usage.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

#### 版本 2.6 以上

<div class="table-center">
<iframe width="500" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/keyboard-usage2.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### 常见问题

#### RP2040 部分

RP2040 尚未开发完成，因此 `蜂鸣器`/`SD 卡`/`地图` 功能暂时不可用。我们正在与 Meshtastic 合作优化它。

#### 角色选择

:::caution
不要选择 `Repeater` 角色，这会导致设备反复重启。
:::

#### GPS 模块

如果您没有连接 GPS 模块，请在 `Meshtastic` 应用中禁用 GPS 功能，否则设备会一直尝试寻找 GPS 模块，这会导致设备启动屏幕需要很长时间。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/gps-module.png" alt="pir" width={600} height="auto" /></p>
