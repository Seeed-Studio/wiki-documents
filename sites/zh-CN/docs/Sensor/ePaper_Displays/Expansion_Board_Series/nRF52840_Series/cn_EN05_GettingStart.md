---
description: XIAO ePaper Display Board(nRF52840) - EN05 入门指南
sku: TBD
title: XIAO ePaper Display Board(nRF52840) - EN05 入门指南
sidebar_position: 1
slug: /epaper_en05
last_update:
  date: 04/08/2026
  author: Jackson.Li
createdAt: '2026-04-08'
url: https://wiki.seeedstudio.com/cn/epaper_en05/
updatedAt: '2026-04-08'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

# XIAO ePaper Display EN05 入门指南

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board EN05</th>
    </tr>
    <tr>
    <td><div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Epaper/EN05/3.jpg"/></div>

    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/catalogsearch/result/?q=EN05" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

## 介绍

由 **XIAO nRF52840 Plus** 提供算力支持，显示板 EN05 是一款为 24-Pin ePaper 显示屏专门设计的超低功耗电子纸驱动板。借助硬件电源开关，它非常适合用于电子价签、智能胸牌和便携式 IoT 信息板等电池供电项目。

### 特性

- **XIAO nRF52840 Plus 驱动：** 内置 Bluetooth 5.0 功能，可实现无线通信。
- **用户友好按键：** 包含 1 个侧边 Reset 按钮和 3 个用户按键（按键 3 映射到 D9），可用于自定义交互（如：唤醒 / 上一页 / 下一页）。
- **低功耗设计：** 集成 JST 2.0mm 电池连接器，带硬件滑动开关，并在 MCU 休眠时自动关闭外围电源。
- **平整背面设计：** 哑光黑色 PCB，背面平整（无长排针），便于安装固定。

### 参数规格

| 参数 | 描述 |
|---|---|
| **处理器** | XIAO nRF52840 Plus |
| **无线** | Bluetooth 5.0 |
| **ePaper 接口** | SPI FPC 24-Pin 0.5mm |
| **电池接口** | JST 2.0mm（3.7V 锂电池） |
| **开关** | 硬件电源滑动开关 |
| **按键** | 1x Reset 按钮（侧边） <br/> 3x 用户按键（侧边） |
| **PCB 厚度** | 1.2mm |

## 硬件总览

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



## 软件总览

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
如果你做出错误选择，屏幕将不会有任何显示。

所以请务必确保你选择了正确的设备或器件类型。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN05/1.jpg" style={{width:800, height:'auto'}}/></div>

下载库之后，依次进入 **Sketch** -> **Include Library** -> **Add .ZIP Library** 并选择刚刚下载的库。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/51.png" style={{width:800, height:'auto'}}/></div>

## 入门

这里我们以 7.5 英寸单色屏为例。对其他支持的屏幕来说，操作步骤完全相同；你只需要在驱动中选择合适的屏幕尺寸标识即可。

### 配置并烧录程序
选择如图所示的示例

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE05/a_1.jpg" style={{width:800, height:'auto'}}/></div>

新建一个名为 "driver.h" 的文件，并将这些代码粘贴进去。代码应如下所示：

```cpp
#define BOARD_SCREEN_COMBO 502 // 7.5 inch monochrome ePaper Screen (UC8179)
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EN05
```

完成后，依次进入 **Tools** -> **Board** -> **Seeed nRF52 Boards** -> **Seeed XIAO nRF52840 Sense**，以及 **Tools** -> **Port** -> **选择连接你开发板的端口**。

然后点击 **Upload** 上传代码。
现在你就可以在电子纸屏幕上看到反馈内容了！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN05/2.jpg" style={{width:500, height:'auto'}}/></div>

## 资源

- **[PDF]** [XIAO ePaper Display Board Ex05 原理图](https://files.seeedstudio.com/wiki/Epaper/EE05/XIAO_ePaper_Display_Board_Ex05_V1.0.pdf)

## 故障排查

**Q1：上传代码后屏幕没有任何显示。**
- **检查 FPC 排线：** 确保 ePaper 的 FPC 排线插入方向正确，并且已经牢固锁紧在连接器中。
- **确认驱动配置：** 仔细检查 `driver.h`，确保为你的具体屏幕尺寸选择了正确的 `BOARD_SCREEN_COMBO`。

**Q2：连接电池后开发板无法上电。**
- **硬件开关：** 检查板载硬件滑动开关是否拨到了 ON 位置。
- **电池连接：** 检查 JST 2.0mm 接口的极性是否正确。

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供支持，确保你在使用我们产品的过程中尽可能顺利。我们提供多种交流渠道，以满足不同偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
