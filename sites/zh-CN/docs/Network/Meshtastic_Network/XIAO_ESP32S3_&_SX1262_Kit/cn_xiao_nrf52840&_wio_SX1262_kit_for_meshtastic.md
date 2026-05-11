---
description: 基于 XIAO nRF52840 和 Wio-SX1262 套件的 Meshtastic
title: XIAO nRF52840 & Wio-SX1262 套件快速上手
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/52840-kit.webp
slug: /xiao_nrf52840&_wio_SX1262_kit_for_meshtastic
sidebar_position: 2
sku: 102010710
last_update:
  date: 12/11/2025
  author: Michelle Huang
createdAt: '2025-03-13'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/cn/xiao_nrf52840&_wio_SX1262_kit_for_meshtastic/
---


<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3-102010710-nrf52840_wio-sx1262-kit_1.jpg" alt="pir" width={800} height="auto" /></p>

该套件将 XIAO nRF52840 与 Wio-SX1262 结合在一起，支持 BLE5.0、Thread、Zigbee 和 LoRa（862-930MHz），并具备低功耗运行特性。它可应用于 [Meshtastic®](https://meshtastic.org/)、传感器网络、环境监测、资产追踪、教育和创新等多个领域。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF52840-Wio-SX1262-Kit-for-Meshtastic-p-6400.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

<br></br>

## 概述

### 特性

- **多功能微控制器**：集成 Nordic nRF52840 芯片，带 FPU，最高运行频率 64 MHz，板载多种开发接口，支持 Arduino / CircuitPython / Micropython
- **强大的 LoRa 性能**：基于 Semtech SX1262 的远距离 LoRa，支持 868/915 MHz 频段。
- **双核通信**：同时支持 Bluetooth 和 LoRa 双模，实现跨域互联。
- 尺寸仅为 **8mm × 22mm × 23mm**，采用一体化天线设计。

### 规格参数

| **产品** | **规格** |  
| :- | :- |  
| [XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html) | **MCU：** Nordic nRF52840  <br /> **内核：** ARM® Cortex®-M4，带 FPU，最高 64 MHz |  
| [Wio-SX1262](https://www.seeedstudio.com/Wio-SX1262-for-XIAO-p-6379.html) | **LoRa 模组：** Semtech SX1262  <br /> **频率：** 862&#126;930MHz |  
| **无线** | Bluetooth 5.0 / NFC |  
| **接口** | **XIAO nRF52840：**  <br /> - 1x UART，1x I²C，1x SPI（连接至 SX1262）  <br /> - 1x NFC，1x SWD，11x GPIO（PWM）  <br /> - 6x ADC  <br /> **Wio-SX1262：**  <br />  - 1x SPI（连接至 XIAO nRF52840） |  
| **电源** | **输入电压：**  <br /> - Type-C：5V  <br /> - 电池（BAT）：4.2V  <br /> **电池充电电流：** 50mA / 100mA  <br /> **待机功耗：** &lt;5µA |  
| **工作温度** | -40°C &#126; 65°C |  
| **尺寸** | 21 x 17.8mm |  

### 引脚分布

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/imageXIAO_nRF52840-2.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image_Wio-SX1262_-1.png" alt="pir" width={800} height="auto" /></p>

## 快速上手

XIAO nRF52840 & Wio-SX1262 套件已预刷入 Meshtastic 固件，可帮助你快速开始使用。

### 刷写固件

:::caution note
请 `don't use NRF-OTA` 来更新固件，否则可能导致设备完全损坏。
:::

**视频教程：**

<div class="video-container">
<iframe width="100%" height="500" src="https://www.youtube.com/embed/li6DTOeXK3M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

访问 [Meshtastic Web Flasher](https://flasher.meshtastic.org/)。

将套件连接到电脑，在设备选项中选择 `Seeed` → `Seeed XIAO nRF52840 Kit`，并选择最新固件，然后点击 `Flash`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/select-device.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/filw-flash.png" alt="pir" width={800} height="auto" /></p>

点击 `Enter DFU Mode`，此时会出现名为 `XIAO-xxx` 的串口，点击并连接它，系统中应显示名为 `XIAO-xxx` 的驱动器。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/52840-connect.png" alt="pir" width={800} height="auto" /></p>

将 UF2 文件拖入 DFU 盘。文件拷贝完成并设备重启后，固件就会被刷写完成。

### 查看节点名称

访问 [Meshtastic Flasher](https://flasher.meshtastic.org/)，打开 `Serial Monitor`，搜索 `nodenum` 以找到对应的节点 ID。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/device-name3.png" alt="pir" width={800} height="auto" /></p>

### 通过 App 连接

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="IOS App">

- 在 Bluetooth 面板中选择目标设备。

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

### 配置参数

为了开始在 Mesh 网络中通信，你必须先设置所在区域。该设置会控制设备使用的频率范围，应根据你所在的地区进行设置。

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

更多完整列表请参考 [各国家 LoRa 区域](https://meshtastic.org/docs/configuration/region-by-country/)。

:::info
**EU_868** 必须遵守每小时 10% 的占空比限制，以滚动 1 小时为周期、每分钟计算一次。当你的设备达到该限制时，将会停止发射，直到再次被允许。
:::

现在你已经在设备上设置好了 LoRa 区域，可以继续配置任意适合你需求的 [LoRa 配置](https://meshtastic.org/docs/configuration/radio/lora/)。

#### GNSS 传感器配置

连接一个 [L76K GNSS 模块](https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html) 来制作一个追踪器。

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image_102010710.gif" alt="pir" width={600} height="auto" /></p>


### 兼容的 SX-1262
[Click here](https://www.seeedstudio.com/Wio-SX1262-Wireless-Module-p-5981.html) 获取单独销售的 SX1262。

## 资源
### 文件资源

- **[PDF]** [Xiao 参考设计](https://files.seeedstudio.com/wiki/XIAO/XIAO-Reference-Design.pdf)
- **[PDF]** [Seeed Studio XlAO nRF52840 BLE 通信距离测试报告](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed_XIAO_BLE_nRF52840_BLE_Communication_Distance_Test_Report.pdf)
- **[ZIP]** [Seeed Studio XlAO nRF52840 CE |FCC|MIC 认证文件](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-CE-FCC-MIC.zip)
- **[PDF]** [nRF52840 数据手册](https://files.seeedstudio.com/wiki/XIAO-BLE/nRF52840_PS_v1.5.pdf)
- **[PDF]** [Seeed Studio XIAO nRF52840 原理图](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-Sense-v1.1.pdf)
- **[ZIP]** [Seeed Studio XIAO nRF52840 KiCAD 文件](https://files.seeedstudio.com/wiki/XIAO-BLE/SeeedStudio_XIAO_nRF52840_v1.1_SCH&PCB.zip)
- **[ZIP]** [Seeed Studio XIAO nRF52840 Eagle 文件](https://files.seeedstudio.com/wiki/XIAO-BLE/SeeedStudio_XIAO_nRF52840_v1.1_KiCAD.zip)
- **[DXF]** [Seeed Studio XIAO nRF52840 DXF 尺寸图](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-DXF.zip)
- **[LBR]** [Seeed Studio XIAO nRF52840 Eagle 封装库](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-footprint-eagle.lbr)
- **[XLSX]** [Seeed Studio XIAO nRF52840 引脚分布表](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-pinout_sheet.xlsx)
- 🔗 **[Kicad]** [Seeed Studio XIAO nRF52840 封装库](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)
- **[RAR]** [Wio SX-1262 for XIAO 3D 文件](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_for_XIAO_3D_file.rar)
- **[PDF]** [与 Xiao nRF52840 兼容的 SX1262 原理图](https://files.seeedstudio.com/products/113010003/Wio-SX1262%20for%20XIAO%20V1.0.pdf)
- **[PDF]** [Wio SX-1262 模块数据手册](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_Module_Datasheet.pdf
)

### 课程资源

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[Ebook]** [XIAO：大能量，小板子——精通 Arduino 与 TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

