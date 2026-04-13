---
description: XIAO ePaper Display Board(ESP32-S3) - EE05 入门指南
sku: TBD
title: XIAO ePaper Display Board(ESP32-S3) - EE05 入门指南
sidebar_position: 1
slug: /epaper_ee05
last_update:
  date: 04/07/2026
  author: Jackson.Li
createdAt: '2026-04-07'
url: https://wiki.seeedstudio.com/cn/epaper_ee05/
updatedAt: '2026-04-07'
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
    <td><div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Epaper/EE05/4.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/catalogsearch/result/?q=EE05" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

## 简介

由 **XIAO ESP32-S3 Plus** 驱动，显示板 EE05 是一款紧凑型电子纸驱动板，支持 24 针电子纸显示屏。它配备带电源开关的 JST 2.0 mm 电池接口、内置电池电量检测电路，并提供一个复位按键和三个用户可编程按键。非常适合用于低功耗电子纸项目，例如数字标牌、电子标签和便携式信息板。

### 特性

- **由 XIAO ESP32-S3 Plus 驱动：** 连接兼容的电子纸显示屏后即可立即工作。
- **多种显示支持：** 兼容多种电子纸屏幕，原生支持 24 针 SPI 接口。
- **带开关的电池接口：** 提供简便的电池连接，并集成硬件滑动开关，实现高效的电源管理和节能。额外增加了用于 XIAO ESP32 电池电量检测的电路。
- **用户友好按键：** 包含 1 个侧面安装的复位键和 3 个用户可编程按键，便于实现自定义功能（例如唤醒 / 上一页 / 下一页）。
- **低功耗设计：** 在 MCU 休眠期间可有效控制或关闭外设的功耗。

### 规格参数

| 参数 | 描述 |
|---|---|
| **处理器** | XIAO ESP32-S3 Plus |
| **电子纸接口** | SPI FPC 24 针 0.5mm |
| **电池接口** | JST 2.0mm |
| **开关** | 硬件电源滑动开关 |
| **电源** | 3.7V 锂电池 / USB Type-C |
| 按键 | 1x 复位按键（侧面安装） <br/> 3x 用户按键（侧面安装） |

## 硬件概览

### 支持的电子纸显示屏

EE05 支持多种 24 针 SPI 电子纸显示屏，包括但不限于：

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
该库与 TFT 库具有相同的功能，但二者不兼容。如果你已经安装了 TFT 库或其他类似的显示库，请先卸载它们。
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

选择你的设备类型，它将生成一些代码。复制这些代码，我们稍后会用到它们。

:::tip
如果选择错误，屏幕将不会显示任何内容。

所以请务必确保选择正确的设备或组件类型。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/1.jpg" style={{width:800, height:'auto'}}/></div>

下载库之后，依次点击 **Sketch** -> **Include Library** -> **Add .ZIP Library**，然后选择下载好的库文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/51.png" style={{width:800, height:'auto'}}/></div>

## 快速上手

这里我们以 7.5 英寸黑白屏为例。对于其他受支持的屏幕，步骤完全相同；你只需在驱动中选择相应的屏幕尺寸标识符即可。

### 配置并烧录程序
选择图中所示的示例

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/a_1.jpg" style={{width:800, height:'auto'}}/></div>

新建一个 "driver.h" 文件，并将这些代码粘贴进去。代码应如下所示：

```cpp
#define BOARD_SCREEN_COMBO 502 // 7.5 inch monochrome ePaper Screen (UC8179)
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE05
```

之后，依次点击 **Tools** -> **Board** -> **XIAO ESP32S3** 和 **Tools** -> **Port** -> **选择连接你开发板的端口**。


请注意必须启用 PSRAM。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/6.jpg" style={{width:1000, height:'auto'}}/></div>

然后点击 **Upload** 上传代码。
现在你就可以在电子纸屏幕上看到反馈了！下面是 Bitmap 示例的显示效果。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/a_3.jpg" style={{width:500, height:'auto'}}/></div>

## 资源

- **[PDF]** [XIAO ePaper Display Board Ex05 原理图](https://files.seeedstudio.com/wiki/Epaper/EE05/XIAO_ePaper_Display_Board_Ex05_V1.0.pdf)

## 故障排除

**Q1：上传代码后屏幕没有任何显示。**
- **检查 FPC 排线：** 确保电子纸的 FPC 排线插入方向正确，并且已经牢固锁紧在连接器中。
- **确认驱动配置：** 再次检查 `driver.h`，确保为你的具体屏幕尺寸选择了正确的 `BOARD_SCREEN_COMBO`。

**Q2：颜色反转或显示图案异常。**
- **选择准确的型号：** 不同的屏幕尺寸或 IC 版本需要特定的驱动配置。请确保组合编号与屏幕型号完全匹配。
- **检查电源：** 对于较大的屏幕（如 7.5 英寸），请确保电源在屏幕刷新时能够提供足够的电流。

**Q3：连接电池后板子无法上电。**
- **硬件开关：** 确认板载的硬件滑动开关已拨到 ON 位置。
- **电池连接：** 检查 JST 2.0mm 接口的极性，确保与电路板设计相匹配。

## 技术支持与产品讨论

感谢你选择我们的产品！我们致力于为你提供多种支持，确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
