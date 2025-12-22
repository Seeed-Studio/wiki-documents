---
description: ePaper 分线板入门指南
title: ePaper 分线板
keywords:
- XIAO eInk Expansion
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/XIAO-eInk-Expansion-Board
sidebar_position: 1
last_update:
  date: 05/23/2023
  author: Carla
---

# ePaper 分线板入门指南

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/4/-/4-105990172-epaper-breakout-board-45back.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ePaper-Breakout-Board-p-5804.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div><br />

认识 XIAO eInk 扩展板，这是您轻松驱动 eInk 显示屏与 XIAO 系列的首选解决方案。该板采用 24 针 FPC 连接器设计，为我们的 eInk 产品系列提供无缝连接，如果您希望扩展选择，8 针 2.54 排针允许您轻松集成任何您选择的微控制器。将这块板视为您 eInk 的"永远最好的朋友"，增强其功能并让您的生活更轻松。

:::note
此分线板不包含 eInk 显示屏；显示屏必须单独购买。
:::

## 简介

### 特性

- 24 针 FPC 连接器：为 eInk 显示屏提供稳固可靠的连接。
- XIAO 插座：允许您使用 XIAO 作为处理器，提供紧凑而强大的控制解决方案。
- 8 针 2.54 排针：通过让您连接到任何微控制器来提供灵活性，开启无限可能的世界。
- 即插即用：专为易用性设计，非常适合初学者和专家。
- 多功能应用：适用于各种尺寸的 eInk 显示屏，从小到大。

### 应用

- 数字标牌：使用 eInk 分线板创建动态且节能的数字标牌。
- 电子阅读器：构建您自己的定制电子阅读器，具有根据您需求定制的功能。
- 智能家居控制面板：将该板集成到智能家居系统中，打造时尚现代的控制面板。
- 零售价格标签：创建电子价格标签，实现更高效、更环保的零售体验。
- 教育工具：开发可轻松更新且节能的交互式教育材料。

## 硬件概述

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/xiao-expansion.png" style={{width:700, height:'auto'}}/></div>

1. 24 针 FPC 连接器：用于 2.13 英寸 ePaper。
2. XIAO 插座：用于连接 Seeed Studio XIAO 开发板。
3. IO 分线：用于连接其他控制器，如 Arduino UNO 或 Raspberry Pi。

### 引脚定义

<div class="table-center">

|  eInk SPI 引脚 |  XIAO  |
|       ---      |  ---   |
|      RST       |   D0   |
|      CS        |   D1   |
|      DC        |   D3   |
|      BUSY      |   D5   |
|      SCK       |   D8   |
|      MOSI      |   D10  |

</div>

### 支持的 eInk

1. [1.54 英寸 E-paper - 点阵 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
2. [2.13 英寸 E-Paper - 柔性单色 212x104](https://www.seeedstudio.com/2-13-Flexible-Monochrome-ePaper-Display-with-212x104-Pixels-p-5781.html)
3. [2.13 英寸 E-Paper - 四色 212x104](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
4. [2.9 英寸 E-paper - 单色 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
5. [2.9 英寸 e-paper - 四色 128x296](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
6. [4.2 英寸 E-Paper - 单色 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
7. [4.26 英寸 E-Paper - 单色 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
8. [5.65 英寸 E-paper - 七色 600x480](https://www.seeedstudio.com/5-65-Seven-Color-ePaper-Display-with-600x480-Pixels-p-5786.html)
9. [5.83 英寸 E-paper - 单色 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
10. [7.5 英寸 E-paper - 单色 800x480](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)
11. [7.5 英寸 E-paper - 三色 800x480](https://www.seeedstudio.com/7-5-3-Color-SPI-ePaper-Display-p-6399.html)

### 硬件准备

**步骤 1.** 材料准备

<table align="center">
 <tr>
  <th>Seeed Studio XIAO SAMD21</th>
  <th>Seeed Studio XIAO RP2040</th>
  <th>Seeed Studio XIAO nRF52840 (Sense)</th>
  <th>Seeed Studio XIAO ESP32C3</th>
     <th>Seeed Studio XIAO ESP32S3 (Sense)</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg" style={{width:400, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoblesense.jpg" style={{width:500, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoesp32c3.jpg" style={{width:450, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

**步骤 2.** 将 XIAO 插入 XIAO 插座：对齐引脚并轻轻将您的 XIAO 插入板上的 XIAO 插座。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/connect_xiao.gif" style={{width:700, height:'auto'}}/></div>

**步骤 3.** 将 eInk 插入 FPC 连接器：小心地将您的 E-paper 滑入 ePaper 分线板上的 24 针 FPC 连接器。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/connect_eink.gif" style={{width:700, height:'auto'}}/></div>

### 软件准备

 推荐的编程工具是 Arduino IDE，您需要为 XIAO 配置 Arduino 环境并添加板载包。
:::tip
如果这是您第一次使用 Arduino，我们强烈建议您参考 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

**步骤 1.** 启动 Arduino 应用程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
        <strong><span><font color={'FFFFFF'} size={"4"}>下载 Arduino IDE</font></span></strong>
    </a>
</div>

**步骤 2.** 选择您的开发板型号并将其添加到 Arduino IDE。

- 如果您想在后续教程中使用 **Seeed Studio XIAO SAMD21**，请参考 **[此教程](https://wiki.seeedstudio.com/cn/Seeeduino-XIAO/#software)** 完成添加。

- 如果您想在后续教程中使用 **Seeed Studio XIAO RP2040**，请参考 **[此教程](https://wiki.seeedstudio.com/cn/XIAO-RP2040-with-Arduino/#software-setup)** 完成添加。

- 如果您想在后续教程中使用 **Seeed Studio XIAO nRF52840**，请参考 **[此教程](https://wiki.seeedstudio.com/cn/XIAO_BLE/#software-setup)** 完成添加。

- 如果您想在后续教程中使用 **Seeed Studio XIAO ESP32C3**，请参考 **[此教程](https://wiki.seeedstudio.com/cn/XIAO_ESP32C3_Getting_Started#software-setup)** 完成添加。

- 如果您想在后续教程中使用 **Seeed Studio XIAO ESP32S3**，请参考 **[此教程](https://wiki.seeedstudio.com/cn/xiao_esp32s3_getting_started#software-preparation)** 完成添加。

## 安装 Seeed GFX 库

**步骤 3.** 安装 Seeed GFX 库

:::tip
此库具有与 TFT 库相同的功能，但与其不兼容。如果您已安装 TFT 库或其他类似的显示库，请先卸载它们。
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

选择您的设备类型，它将生成一些代码。复制这些代码，我们稍后会使用它们。

:::tip
如果您选择错误，屏幕将不显示任何内容。

所以请确保您的设备或组件类型。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/epaper_display.jpg" style={{width:600, height:'auto'}}/></div>

下载库后，转到 **Sketch** -> **Include Library** -> **Add .ZIP Library** 并选择下载的库。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/51.png" style={{width:800, height:'auto'}}/></div>

有 4 个基本示例，打开您喜欢的基本示例：

1. Bitmap：显示位图图像。
2. Clock：显示时钟。
3. Clock_digital：显示数字时钟。
4. Shape：随机显示不同大小的文字和形状。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix5.jpg" style={{width:800, height:'auto'}}/></div>

### 上传代码

创建一个**新的 "driver.h" 文件**并将这些代码粘贴到其中。代码应该如下所示：

```cpp
#define BOARD_SCREEN_COMBO 504 // 2.9 inch monochrome ePaper Screen （SSD1680）
#define USE_XIAO_EPAPER_BREAKOUT_BOARD
```

之后，转到 **Tools** -> **Board** -> **XIAO ESP32C6** 和 **Tools** -> **Port** -> **选择您的开发板连接的端口**。然后点击 **Upload** 上传代码。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/table.jpg" style={{width:1000, height:'auto'}}/></div>

现在您将在电子纸屏幕上看到反馈！以下是 Helloworld 示例的结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/153.jpg" style={{width:600, height:'auto'}}/></div>

:::caution
如果您使用的是 1.54 英寸或 2.9 英寸电子墨水屏，由于其驱动芯片的特性，在使用时钟等动态效果时可能会出现闪烁。请放心，这不是程序问题。但是，不建议长时间运行动态效果示例，以免缩短屏幕的使用寿命。

如果您使用的是 5.83 和 7.5 英寸屏幕，它们有不同的芯片，所以不会有闪烁现象。
:::

## 图像提取软件

### 网站的使用（推荐）

这里我使用 7.5 英寸电子墨水屏进行测试

#### 如何制作图片

这个 [URL](https://jlamch.net/MXChipWelcome/) 提供了非常便捷的图像提取操作，可以轻松帮助我们实现在电子墨水屏上显示各种图像，让我们开始吧！
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/9191.jpg" style={{width:700, height:'auto'}}/></div>

**步骤 1**. 选择图像

首先选择您想要的图像，尽量不要超过 800*480 的尺寸。

**步骤 2**. 图像设置

- Canvas Size(s)
  - Canvas Size：设置画布的尺寸。例如，800 x 480 像素意味着画布宽度为 800 像素，高度为 480 像素。

- Background Color
  - Background Color：选择画布的背景颜色。选项包括：

  - White：白色背景
  - Black：黑色背景

- Transparent：透明背景
  - Invert Image Color
  - Invert Image Color：此选项用于反转图像的颜色。选中时，图像的颜色将被反转。

- Brightness / Alpha Threshold
  - Brightness / Alpha Threshold：设置像素的亮度值，范围从 0 到 255。较高的值使像素更亮；低于此值的像素将变为黑色。

- Scaling
  - Scaling：选择图像的缩放方法。选项包括：

- Original size：保持原始尺寸
  - 其他缩放选项（具体选项可能需要进一步说明）
- Center
  - Center：选择是否将图像在画布上居中。注意：此选项仅在图像大于原始尺寸时有效。

**步骤 3**. 预览

设置完成后，您可以在这里看到图像显示效果的预览

**步骤 4**. 输出

- 复制转换后的代码

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/9090.jpg" style={{width:700, height:'auto'}}/></div>
- 在此头文件中替换图像代码
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/image_h.jpg" style={{width:700, height:'auto'}}/></div>

#### 显示效果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/epaper_display.jpg" style={{width:700, height:'auto'}}/></div>

### Image2lcd 软件的使用

#### 如何制作图片

使用 Windows 内置软件 **Paint** 创建一张与您使用的屏幕**分辨率相同**的图片，并将其保存为 `BMP` 或 `JPG` 文件；

:::note
您的图片分辨率必须与您使用的屏幕相同，例如，4.2 英寸电子纸是 400 x 300 像素，那么您不能使用 300 x 400 的尺寸，这会导致 image2lcd 输出的 `.h` 文件多出 200 字节。
:::

图片的颜色应与 Windows 自带画板的标准颜色一致。画板的颜色如下：

<div class="table-center">

|      电子纸      | 颜色 |
|       ---      |  ---   |
|1.54 英寸电子纸 - 点阵 200x200           | 纯黑白          |
|2.13 英寸电子纸 - 柔性单色 212x104 | 纯黑白          |
|2.13 英寸电子纸 - 四色 212x104          | 黑、白、红、黄 |
|2.9 英寸电子纸 - 单色 128x296           | 纯黑白          |
|2.9 英寸电子纸 - 四色 128x296     | 黑、白、红、黄 |
|4.2 英寸电子纸 - 单色 400x300           | 纯黑白          |
|4.26 英寸电子纸 - 单色 800x480          | 纯黑白          |
|5.65 英寸电子纸 - 七色 600x480        | 黑、白、红、黄、蓝、绿、橙|
|5.83 英寸电子纸 - 单色 648x480          | 纯黑白          |
|7.5 英寸电子纸 - 单色 800x480           | 纯黑白          |
|7.5 英寸电子纸 - 三色 800x480           | 纯黑白          |

</div>

#### 位图转换

**步骤 1.** 打开 [Image2lcd.7z](https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image2Lcd.7z)，解压并打开应用程序。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/1.png" style={{width:700, height:'auto'}}/></div>

**步骤 2.** 打开图片，选择 "Output file type" 为 "C array (*.c)"，选择 "Scan mode" 为 "Horizon Scan"，其他参数设置如下所示：

<div class="table-center">
  <table align="center">
    <tr>
        <th>电子纸</th>
        <th>BitPixl</th>
        <th>最大宽度和高度</th>
        <th>反转颜色</th>
        <th>显示模式</th>
    </tr>
    <tr>
        <th>1.54 英寸电子纸 - 点阵 200x200</th>
        <td align="center">Monochrome</td>
        <td align="center">200x200</td>
        <td align="center">✅</td>
        <td align="center">Mirror left-right</td>
    </tr>
    <tr>
        <th>2.13 英寸电子纸 - 柔性单色 212x104</th>
        <td align="center">Monochrome</td>
        <td align="center">104x212</td>
        <td align="center">✅</td>
        <td align="center">Normal</td>
    </tr>
    <tr>
        <th>2.13 英寸电子纸 - 四色 212x104 </th>
        <td align="center">4 Gray</td>
        <td align="center">104x212</td>
        <td align="center">/</td>
        <td align="center">Normal</td>
    </tr>
    <tr>
        <th>2.9 英寸电子纸 - 单色 128x296</th>
         <td align="center">Monochrome</td>
        <td align="center">128x296</td>
        <td align="center">✅</td>
        <td align="center">Normal</td>
    </tr>
    <tr>
        <th>2.9 英寸电子纸 - 四色 128x296 </th>
        <td align="center">4 Gray</td>
        <td align="center">128x296</td>
        <td align="center">/</td>
        <td align="center">Normal</td>
    </tr>
    <tr>
        <th>4.2 英寸电子纸 - 单色 400x300</th>
        <td align="center">Monochrome</td>
        <td align="center">400x300</td>
        <td align="center">✅</td>
        <td align="center">Mirror left-right</td>
    </tr>
    <tr>
        <th>4.26 英寸电子纸 - 单色 800x480</th>
        <td align="center">Monochrome</td>
        <td align="center">800x480</td>
        <td align="center">/</td>
        <td align="center">Mirror left-right</td>
    </tr>
    <tr>
        <th>5.65 英寸电子纸 - 七色 600x480</th>
        <td align="center">256 colors</td>
        <td align="center">600x448</td>
        <td align="center">/</td>
        <td align="center">Normal</td>
    </tr>
    <tr>
        <th>5.83 英寸电子纸 - 单色 648x480</th>
        <td align="center">单色</td>
        <td align="center">600x480</td>
        <td align="center">✅</td>
        <td align="center">左右镜像</td>
    </tr>
    <tr>
        <th>7.5 英寸电子纸 - 单色 800x480</th>
        <td align="center">单色</td>
        <td align="center">800x480</td>
        <td align="center">✅</td>
        <td align="center">左右镜像</td>
    </tr>
    <tr>
        <th>7.5 英寸电子纸 - 三色 800x480</th>
        <td align="center">单色</td>
        <td align="center">800x480</td>
        <td align="center">/</td>
        <td align="center">正常</td>
    </tr>
  </table>
</div>

:::tip

- 设置最大宽度和高度后，需要点击箭头确认。
- 不要包含头数据。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/2.png" style={{width:700, height:'auto'}}/></div>
:::

**步骤 3.** 点击 "Save" 将 lcd 输出数组保存为 `.h` 文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/7.png" style={{width:500, height:'auto'}}/></div>

## 资源

- **[ZIP]** [PCB&SCH Eagle 文件](https://files.seeedstudio.com/wiki/eInk/xiao-expansion/epaperIO.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
