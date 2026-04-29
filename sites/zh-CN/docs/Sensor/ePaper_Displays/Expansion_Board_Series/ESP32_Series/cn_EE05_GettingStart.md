---
description: XIAO ePaper Display Board(ESP32-S3) - EE05 入门指南
sku: 100057220
title: XIAO ePaper Display Board(ESP32-S3) - EE05 入门指南
sidebar_position: 1
image: https://files.seeedstudio.com/wiki/Epaper/EE05/22_2.webp
slug: /epaper_ee05
last_update:
  date: 04/27/2026
  author: dimo
createdAt: '2026-04-07'
url: https://wiki.seeedstudio.com/cn/epaper_ee05/
updatedAt: '2026-04-27'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

# XIAO ePaper Display EE05 入门指南

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board EE05</th>
    </tr>
    <tr>
    <td><div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Epaper/EE05/22_2.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-EE05-p-6755.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

## 介绍

由 **XIAO ESP32-S3 Plus** 提供算力，显示板 EE05 支持多种 24 针 ePaper 显示屏，并可通过 SenseCraft HMI 实现零代码 UI 设计与部署。借助扩展 IO 和带电源开关的电池接口，它非常适合低功耗智能显示应用。

### 特性

- **由 XIAO ESP32-S3 Plus 驱动：** 连接兼容的 ePaper 显示屏即可立即工作。
- **多样化显示支持：** 兼容多种 24 针 ePaper 显示屏，以满足不同项目需求。
- **扩展 IO 端口：** 可连接额外传感器，例如温湿度传感器，以增强功能。
- **带开关的电池接口：** 提供简单的电池连接并集成开关，实现高效电源管理和节能。
- **基于 SenseCraft HMI 的零代码 UI 设计与部署：** 借助我们全新的 AI 驱动零代码平台 SenseCraft HMI，轻松设计并部署个性化仪表盘。通过简单的拖拽元素创建 UI，从丰富模板中进行选择，或让 AI 帮助你完成设计。可连接来自 Web API 的实时数据，然后只需几次点击即可将完成的仪表盘部署到 ePaper 显示屏。从设计到数据配置再到部署，全流程都在同一平台上无缝完成。

### 规格参数

| 参数 | 描述 |
|---|---|
| **处理器** | XIAO ESP32-S3 Plus |
| **ePaper 接口** | SPI FPC 24-Pin 0.5mm |
| **电池接口** | JST 2.0mm |
| **开关** | 硬件电源拨动开关 |
| **电源供给** | 3.7V 锂电池 / USB Type-C |
| 按钮 | 1x 复位按钮（侧边安装） <br/> 3x 用户按钮（侧边安装） |

## 硬件概览

### 支持的 ePaper 显示屏

EE05 支持多种 24 针 SPI ePaper 显示屏，包括但不限于：

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
该库与 TFT 库功能相同，但二者不兼容。如果你已经安装了 TFT 库或其他类似的显示库，请先卸载它们。
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

因此请务必确认你选择了正确的设备或元件类型。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/1.jpg" style={{width:800, height:'auto'}}/></div>

下载库之后，依次进入 **Sketch** -> **Include Library** -> **Add .ZIP Library**，然后选择下载好的库文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/51.png" style={{width:800, height:'auto'}}/></div>

## 入门

这里我们以 7.5 英寸黑白显示屏为例。其他受支持的屏幕步骤完全相同，你只需在驱动中选择对应的屏幕尺寸标识即可。

### 配置并烧录程序
选择图中所示的示例

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/a_1.jpg" style={{width:800, height:'auto'}}/></div>

新建一个名为 "driver.h" 的文件，并将这些代码粘贴进去。代码应类似如下：

```cpp
#define BOARD_SCREEN_COMBO 502 // 7.5 inch monochrome ePaper Screen (UC8179)
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE05
```

之后，依次进入 **Tools** -> **Board** -> **XIAO ESP32S3** 和 **Tools** -> **Port** -> **选择你的开发板所连接的端口**。


请注意必须启用 PSRAM。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/6.jpg" style={{width:1000, height:'auto'}}/></div>

然后点击 **Upload** 上传代码。
现在你就能在 ePaper 屏幕上看到反馈了！下面是 Bitmap 示例的显示效果。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/a_3.jpg" style={{width:500, height:'auto'}}/></div>

## 资源

- **[PDF]** [XIAO ePaper Display Board Ex05 原理图](https://files.seeedstudio.com/wiki/Epaper/EE05/XIAO_ePaper_Display_Board_Ex05_V1.0.pdf)
- **[ZIP]** [Seeed Studio XIAO ePaper Display EE05 原理图与 PCB](https://files.seeedstudio.com/wiki/Epaper/EE05/XIAO_ePaper_Display_Board_EE05_V1.11_SCH&PCB_260420.zip)

## 故障排查

**Q1：上传代码后屏幕没有任何显示。**
- **检查 FPC 线缆：** 确保 ePaper 的 FPC 线缆插入方向正确，并且已经牢固锁紧在连接器中。
- **确认驱动配置：** 再次检查 `driver.h`，确保为你的具体屏幕尺寸选择了正确的 `BOARD_SCREEN_COMBO`。

**Q2：颜色反转或显示异常图案。**
- **选择完全匹配的型号：** 不同屏幕尺寸或 IC 版本需要特定的驱动配置。请确保组合编号与屏幕型号完全匹配。
- **检查电源供给：** 对于较大尺寸的屏幕（如 7.5 英寸），请确保电源在屏幕刷新期间能够提供足够电流。

**Q3：连接电池后开发板无法上电。**
- **硬件开关：** 确认板载硬件拨动开关已切换到 ON 位置。
- **电池连接：** 检查 JST 2.0mm 接口的极性，确保与开发板设计相匹配。

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
