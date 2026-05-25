---
description: XIAO ePaper Display Board(nRF52840) - EN05 入门指南
sku: 100085486
title: EN05 入门指南
sidebar_position: 1
image: https://files.seeedstudio.com/wiki/Epaper/EN05/3_26_1.webp
slug: /epaper_en05
last_update:
  date: 04/27/2026
  author: dimo
createdAt: '2026-04-08'
url: https://wiki.seeedstudio.com/cn/epaper_en05/
updatedAt: '2026-04-27'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

# XIAO ePaper Display Board - EN05 入门指南

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board EN05</th>
    </tr>
    <tr>
    <td><div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Epaper/EN05/3_26_1.jpg"/></div>

    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-nRF52840-EN05-p-6756.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

## 介绍

由 **XIAO nRF52840 Plus** 提供算力，显示板 EN05 支持多种 24-pin ePaper 显示屏。它配备用于连接额外传感器的扩展 IO 端口、带电源开关的 JST 2.0 mm 电池连接器、内置充电 IC，并带有三个用户按键。非常适合超低功耗 ePaper 项目，例如智能姓名牌、电子价签、会议室标牌和便携式信息板等。

### 特性

- **由 XIAO nRF52840 Plus 供电：** 当连接到兼容的 ePaper 显示屏时即可立即工作，板载 NFC 接口可用于轻触配置、配对或触发内容更新。
- **多功能显示支持：** 兼容多种 24-pin ePaper 显示屏，支持 24-Pin ePaper 显示屏以满足不同项目需求。
- **扩展 IO 端口：** 可连接额外的传感器，例如温湿度传感器，以增强功能。
- **带开关的电池连接器：** 提供简单的电池连接并集成开关，实现高效的电源管理和节能。
- **兼容多种软件平台：** 无论你更喜欢使用 Arduino、Platform IO、ESPHome 等进行编程，此驱动板都支持这些方式，为你的项目提供最大灵活性。

### 规格参数

| 参数 | 描述 |
|---|---|
| **处理器** | XIAO nRF52840 Plus |
| **无线** | Bluetooth 5.0 |
| **ePaper 接口** | SPI FPC 24-Pin 0.5mm |
| **电池接口** | JST 2.0mm（3.7V 锂电池） |
| **开关** | 硬件电源滑动开关 |
| **按键** | 1x 复位按键（侧边安装） <br/> 3x 用户按键（侧边安装） |
| **PCB 厚度** | 1.2mm |

## 硬件概览

### 支持的 ePaper 显示屏

EN05 支持多种 24-Pin SPI ePaper 显示屏，包括但不限于：

- [1.54-inch E-paper - Dotmatix 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
- [2.13-inch E-Paper -Flexible Monochrome 212x104](https://www.seeedstudio.com/2-13-Flexible-Monochrome-ePaper-Display-with-212x104-Pixels-p-5781.html)
- [2.13-inch E-Paper - Quadruple 212x104](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
- [2.9 inch E-paper - Monocolor 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
- [4.2-inch E-Paper - Monocolor 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
- [4.26-inch E-Paper - Monocolor 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
- [5.83-inch E-paper - Monocolor 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
- [7.5-inch Monochrome ePaper Display with 800x480 Pixels](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)



## 软件概览

### 安装 Seeed GFX 库

:::tip
该库与 TFT 库功能相同，但与其不兼容。如果你已经安装了 TFT 库或其他类似的显示库，请先卸载它们。
:::

从 GitHub 下载并安装 Seeed GFX 库。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix1.jpg" style={{width:800, height:'auto'}}/></div>

<div align="center">
<a href="https://github.com/Seeed-Studio/Seeed_Arduino_LCD" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>点击此处下载</button></p>
</a>
</div>

向下滚动并打开此链接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix2.jpg" style={{width:800, height:'auto'}}/></div>

选择你的设备类型，它会生成一些代码。复制这些代码，我们稍后会用到。

:::tip
如果你做出了错误的选择，屏幕将不会显示任何内容。

所以请确保你选择了正确的设备或元件类型。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN05/1.jpg" style={{width:800, height:'auto'}}/></div>

下载库之后，依次进入 **Sketch** -> **Include Library** -> **Add .ZIP Library**，然后选择下载好的库。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/51.png" style={{width:800, height:'auto'}}/></div>

## 入门

这里我们以 7.5 英寸黑白显示屏为例。其他受支持的屏幕步骤相同；你只需在驱动中选择合适的屏幕尺寸标识符即可。

### 配置并烧录程序
选择图中所示的示例

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/a_1.jpg" style={{width:800, height:'auto'}}/></div>

新建一个名为 "driver.h" 的文件，并将这些代码粘贴进去。代码应类似于：

```cpp
#define BOARD_SCREEN_COMBO 502 // 7.5 inch monochrome ePaper Screen (UC8179)
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EN05
```

之后，依次进入 **Tools** -> **Board** -> **Seeed nRF52 Boards** -> **Seeed XIAO nRF52840 Sense**，以及 **Tools** -> **Port** -> **选择你的开发板所连接的端口**。

然后点击 **Upload** 上传代码。
现在你就能在 ePaper 屏幕上看到反馈了！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN05/2.jpg" style={{width:500, height:'auto'}}/></div>

## 资源

- **[PDF]** [XIAO ePaper Display Board Ex05 原理图](https://files.seeedstudio.com/wiki/Epaper/EE05/XIAO_ePaper_Display_Board_Ex05_V1.0.pdf)
- **[ZIP]** [Seeed Studio XIAO ePaper Display EN05 SCH&PCB](https://files.seeedstudio.com/wiki/Epaper/EN05/XIAO_ePaper_Display_Board_EN05_V1.11_SCH&PCB_260420.zip)


## 故障排查

**Q1：上传代码后屏幕没有任何显示。**
- **检查 FPC 线缆：** 确保 ePaper FPC 线缆插入方向正确，并且已经牢固锁紧在连接器中。
- **确认驱动配置：** 再次检查 `driver.h`，确保为你的具体屏幕尺寸选择了正确的 `BOARD_SCREEN_COMBO`。

**Q2：连接电池后开发板无法上电。**
- **硬件开关：** 确认板上的硬件滑动开关已拨到 ON 位置。
- **电池连接：** 检查 JST 2.0mm 接插件的极性。

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供支持，以确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
