---
title: ePaper 驱动板快速上手
description: 适用于 XIAO 的 eInk 扩展板是 Seeed Studio 推出的智能模块，可在电子纸屏幕上显示内容。
image: https://files.seeedstudio.com/wiki/eInk/xiao-expansion/titleimg.webp
slug: /xiao_eink_expansion_board_v2
sku: 104990861,114993558
keywords:
  - XIAO
  - epaper
  - eink
last_update:
  author: Allen
  date: 12/09/2024
createdAt: '2025-01-10'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/cn/xiao_eink_expansion_board_v2/
---

# ePaper 驱动板快速上手

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/headimage.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ePaper-breakout-Board-for-XIAO-V2-p-6374.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div><br />

ePaper 驱动板具有 24 针 FPC 连接器、内置充电 IC，可实现高效安全的电池充电，并配备 JST 2 针 BAT 连接器，方便电池连接。非常适合用于制作支持 WiFi 的数字相框。

:::note
该扩展板不包含 ePaper 显示屏；显示屏需单独购买。
:::

## 介绍

### 特性

- **内置充电 IC**：确保电池充电高效且安全。
- **带开关的 BAT 接口**：便于电池连接，并集成开关，可将电池与开关组合使用，实现更高效的节能。
- **24 针 PFC 连接器**：为各种外设提供多样化的连接选项。
- **扩展 IO 端口**：可连接额外的传感器，如温湿度传感器，以增强功能。
- **兼容 Seeed Studio XIAO 生态系统**：可与 XIAO 系列（预焊接版本）无缝集成，用于多种项目开发。

### 应用

- **智能家居仪表盘**：显示天气更新、日历事件以及来自各类智能家居设备的通知等实时信息。
- **能耗监测**：显示来自智能电表的能耗数据，帮助用户更高效地跟踪和管理能源使用。
- **安防警报**：显示安防事件的警报和通知，例如运动检测或门/窗传感器触发。
- **智能恒温器显示屏**：显示温度和湿度水平，以及智能恒温器的控制设置。
- **数字相框**：创建支持 WiFi 的数字相框，用于显示来自智能家居网络的图片。

## 硬件概览

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/overview.png" style={{width:700, height:'auto'}}/></div>

1. 24 针 FPC 连接器：用于 ePaper 接口。
2. JST BAT 接口：用于电池连接和开关。
3. XIAO 插座：用于连接 Seeed Studio XIAO 开发板。
4. IO 引出：用于连接 Grove 传感器或其他控制器，如 Arduino UNO 或 Raspberry Pi。
5. 电源开关：用于电池供电控制。

### 引脚定义

<div class="table-center">

|  ePaper SPI 引脚 |  XIAO  |
|       ---      |  ---   |
|      RST       |   D0   |
|      CS        |   D1   |
|      DC        |   D3   |
|      BUSY      |   D2   |
|      SCK       |   D8   |
|      MOSI      |   D10  |
|      3V3       |   3V3   |
|      GND      |   GND  |

</div>

### 支持的 eInk

1. [1.54-inch E-paper - Dotmatix 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
2. [2.13-inch E-Paper -Flexible Monochrome 212x104](https://www.seeedstudio.com/2-13-Flexible-Monochrome-ePaper-Display-with-212x104-Pixels-p-5781.html)
3. [2.13-inch E-Paper - Quadruple 212x104](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
4. [2.9 inch E-paper - Monocolor 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
5. [2.9-inch e-paper - Quadruple color 128x296](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
6. [4.2-inch E-Paper - Monocolor 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
7. [4.26-inch E-Paper - Monocolor 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
8. [5.65-inch E-paper -  Sevencolor 600x480](https://www.seeedstudio.com/5-65-Seven-Color-ePaper-Display-with-600x480-Pixels-p-5786.html)
9. [5.83-inch E-paper - Monocolor 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
10. [7.5-inch E-paper - Monocolor 800x480](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)
11. [7.5-inch E-paper - Tri-Color 800x480](https://www.seeedstudio.com/7-5-3-Color-SPI-ePaper-Display-p-6399.html)

## 入门指南

 要使用 **XIAO eInk 扩展板**，我们需要对 XIAO 系列进行编程。XIAO 支持的不同尺寸 E-paper 如下表所示：

<div class="table-center">

|      E-paper / XIAO     | XIAO SAMD21 | XIAO RP2040|  XIAO nRF52840 | XIAO ESP32-C3 | XIAO ESP32-S3 |
|       ---      |  ---  | --- | --- | --- | --- |
|1.54-inch E-paper - Dotmatix 200x200           | ✅ | ✅ | ✅ | ✅ | ✅ |
|2.13-inch E-Paper -Flexible Monochrome 212x104 | ✅ | ✅ | ✅ | ✅ | ✅ |
|2.13-inch E-Paper - Quadruple 212x104          | ✅ | ✅ | ✅ | ✅ | ✅ |
|2.9 inch E-paper - Monocolor 128x296           | ✅ | ✅ | ✅ | ✅ | ✅ |
|2.9-inch e-paper - Quadruple color 128x296     | ✅ | ✅ | ✅ | ✅ | ✅ |
|4.2-inch E-Paper - Monocolor 400x300           | ✅ | ✅ | ✅ | ✅ | ✅ |
|4.26-inch E-Paper - Monocolor 800x480          | RAM 溢出 | ✅ | ✅ | ✅ | ✅ |
|5.65-inch E-paper -  Sevencolor 600x480        | FLASH 溢出 | ✅ | ✅ | ✅ | ✅ |
|5.83-inch E-paper - Monocolor 648x480          | ✅ | ✅ | ✅ | ✅ | ✅ |
|7.5-inch E-paper - Monocolor 800x480           | RAM 溢出 | ✅ | ✅ | ✅ | ✅ |
|7.5-inch E-paper - Tri-Color 800x480           | RAM 溢出 | ✅ | ✅ | ✅ | ✅ |

</div>

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
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

**步骤 2.** 将 XIAO 插入 XIAO 插座：对齐引脚，轻轻将 XIAO 插入板上的 XIAO 插座。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/connect_xiao.gif" style={{width:700, height:'auto'}}/></div>

**步骤 3.** 将 eInk 插入 FPC 连接器：小心地将 E-paper 插入 ePaper 扩展板上的 24 针 FPC 连接器中。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/connect_eink.gif" style={{width:700, height:'auto'}}/></div>

### 软件准备

 推荐的编程工具是 Arduino IDE，你需要为 XIAO 配置 Arduino 环境并添加板卡包。
:::tip
如果这是你第一次使用 Arduino，我们强烈建议你参考[Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

**步骤 1.** 启动 Arduino 应用程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
        <strong><span><font color={'FFFFFF'} size={"4"}>下载 Arduino IDE</font></span></strong>
    </a>
</div>

**步骤 2.** 选择你的开发板型号并将其添加到 Arduino IDE 中。

- 如果你想在后续示例中使用 **Seeed Studio XIAO SAMD21**，请参考 **[本教程](https://wiki.seeedstudio.com/cn/Seeeduino-XIAO/#software)** 完成添加。

- 如果你想在后续示例中使用 **Seeed Studio XIAO RP2040**，请参考 **[本教程](https://wiki.seeedstudio.com/cn/XIAO-RP2040-with-Arduino/#software-setup)** 完成添加。

- 如果你想在后续示例中使用 **Seeed Studio XIAO nRF52840**，请参考 **[本教程](https://wiki.seeedstudio.com/cn/XIAO_BLE/#software-setup)** 完成添加。

- 如果你想在后续示例中使用 **Seeed Studio XIAO ESP32C3**，请参考 **[本教程](https://wiki.seeedstudio.com/cn/XIAO_ESP32C3_Getting_Started#software-setup)** 完成添加。

- 如果你想在后续示例中使用 **Seeed Studio XIAO ESP32S3**，请参考 **[本教程](https://wiki.seeedstudio.com/cn/xiao_esp32s3_getting_started#software-preparation)** 完成添加。

## 安装 Seeed GFX 库

**步骤 3.** 安装 Seeed GFX 库

:::tip
该库与 TFT 库具有相同功能，但与其不兼容。如果你已经安装了 TFT 库或其他类似的显示库，请先卸载它们。
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
如果你选择错误，屏幕将不会显示任何内容。

所以请务必确认你的设备或元件类型。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/config.jpg" style={{width:600, height:'auto'}}/></div>

下载库之后，依次点击 **Sketch** -> **Include Library** -> **Add .ZIP Library**，然后选择下载好的库。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/51.png" style={{width:800, height:'auto'}}/></div>

这里有 4 个基础示例，打开一个你喜欢的基础示例：

1. Bitmap：显示位图图像。
2. Clock：显示时钟。
3. Clock_digital：显示数字时钟。
4. Shape：随机显示不同大小的文字和图形。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix5.jpg" style={{width:800, height:'auto'}}/></div>

### 上传代码

创建一个**新的 "driver.h" 文件**，并将这些代码粘贴进去。代码应类似如下：

```cpp
#define BOARD_SCREEN_COMBO 504 // 2.9 inch monochrome ePaper Screen （SSD1680）
#define USE_XIAO_EPAPER_BREAKOUT_BOARD
```

之后，依次点击 **Tools** -> **Board** -> **XIAO ESP32C6** 和 **Tools** -> **Port** -> **选择你的开发板所连接的端口**。然后点击 **Upload** 上传代码。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/table.jpg" style={{width:1000, height:'auto'}}/></div>

现在你就能在电子纸屏幕上看到反馈了！下面是 Helloworld 示例的效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/153.jpg" style={{width:600, height:'auto'}}/></div>

:::caution
如果你使用的是 1.54 英寸或 2.9 英寸的电子墨水屏，由于其驱动芯片的原因，在使用时钟等动态效果时可能会出现闪烁现象。请放心，这不是程序问题。但不建议长时间运行动态效果示例，以免缩短屏幕寿命。

如果你使用的是 5.83 英寸和 7.5 英寸的屏幕，它们使用不同的芯片，因此不会出现闪烁现象。
:::

## 图像提取软件

### 网站用法（推荐）

这里我使用的是 7.5 英寸电子墨水屏进行测试

#### 如何制作图片

这个 [URL](https://jlamch.net/MXChipWelcome/) 提供了非常方便的图像提取操作，可以轻松帮助我们在电子墨水屏上显示各种图像，让我们开始吧！
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/9191.jpg" style={{width:700, height:'auto'}}/></div>

**步骤 1**. 选择图片

首先选择你想要的图片，尽量不要超过 800×480 的尺寸。

**步骤 2**. 图像设置

- 画布尺寸
  - 画布尺寸：设置画布的尺寸。例如，800 x 480 像素表示画布宽度为 800 像素，高度为 480 像素。

- 背景颜色
  - 背景颜色：选择画布的背景颜色。选项包括：

  - White：白色背景
  - Black：黑色背景

- Transparent：透明背景
  - 反转图像颜色
  - 反转图像颜色：该选项用于反转图像的颜色。选中后，图像的颜色将被反转。

- 亮度 / Alpha 阈值
  - 亮度 / Alpha 阈值：设置像素的亮度值，范围为 0 到 255。值越高像素越亮；低于该值的像素将变为黑色。

- 缩放
  - 缩放：选择图像的缩放方式。选项包括：

- 原始尺寸：保持原始大小
  - 其他缩放选项（具体选项可能需要进一步说明）
- 居中
  - 居中：选择是否将图像在画布上居中。注意：此选项仅在图像大于原始尺寸时有效。

**步骤 3**. 预览

设置完成后，你可以在这里看到图像的预览效果

**步骤 4**. 输出

- 复制转换后的代码

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/9090.jpg" style={{width:700, height:'auto'}}/></div>
- 替换此头文件中的图像代码
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/image_h.jpg" style={{width:700, height:'auto'}}/></div>

#### 显示效果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/epaper_display.jpg" style={{width:700, height:'auto'}}/></div>

### Image2lcd 软件的使用方法

#### 如何制作图片

在 Windows 中使用内置软件 **Paint** 创建一张与所用屏幕**分辨率相同**的图片，并将其保存为 `BMP` 或 `JPG` 文件；

:::note
你的图片分辨率必须与所使用的屏幕相同，例如，4.2 英寸电子纸的分辨率是 400 x 300 像素，那么你不能使用 300 x 400 的尺寸，否则会导致 iamge2lcd 输出的 `.h` 文件多出 200 字节。
:::

图片的颜色应与 Windows 自带画板的标准颜色保持一致。画板的颜色如下：

<div class="table-center">

|      电子纸      | 颜色 |
|       ---      |  ---   |
|1.54 英寸电子纸 - 点阵 200x200           | 纯黑白          |
|2.13 英寸电子纸 - 柔性单色 212x104 | 纯黑白          |
|2.13 英寸电子纸 - 四色 212x104          | 黑、白、红和黄 |
|2.9 英寸电子纸 - 单色 128x296           | 纯黑白          |
|2.9 英寸电子纸 - 四色 128x296     | 黑、白、红和黄 |
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

**步骤 2.** 打开图片，将 "Output file type" 选择为 "C array (*.c)"，将 "Scan mode" 选择为 "Horizon Scan"，其他参数设置如下所示：

<div class="table-center">
  <table align="center">
    <tr>
        <th>电子纸</th>
        <th>位像素</th>
        <th>最大宽度和高度</th>
        <th>反转颜色</th>
        <th>显示模式</th>
    </tr>
    <tr>
        <th>1.54 英寸电子纸 - 点阵 200x200</th>
        <td align="center">单色</td>
        <td align="center">200x200</td>
        <td align="center">✅</td>
        <td align="center">左右镜像</td>
    </tr>
    <tr>
        <th>2.13 英寸电子纸 - 柔性单色 212x104</th>
        <td align="center">单色</td>
        <td align="center">104x212</td>
        <td align="center">✅</td>
        <td align="center">正常</td>
    </tr>
    <tr>
        <th>2.13 英寸电子纸 - 四灰度 212x104 </th>
        <td align="center">4 灰度</td>
        <td align="center">104x212</td>
        <td align="center">/</td>
        <td align="center">正常</td>
    </tr>
    <tr>
        <th>2.9 英寸电子纸 - 单色 128x296</th>
         <td align="center">单色</td>
        <td align="center">128x296</td>
        <td align="center">✅</td>
        <td align="center">正常</td>
    </tr>
    <tr>
        <th>2.9 英寸电子纸 - 四灰度 128x296 </th>
        <td align="center">4 灰度</td>
        <td align="center">128x296</td>
        <td align="center">/</td>
        <td align="center">正常</td>
    </tr>
    <tr>
        <th>4.2 英寸电子纸 - 单色 400x300</th>
        <td align="center">单色</td>
        <td align="center">400x300</td>
        <td align="center">✅</td>
        <td align="center">左右镜像</td>
    </tr>
    <tr>
        <th>4.26 英寸电子纸 - 单色 800x480</th>
        <td align="center">单色</td>
        <td align="center">800x480</td>
        <td align="center">/</td>
        <td align="center">左右镜像</td>
    </tr>
    <tr>
        <th>5.65 英寸电子纸 - 七色 600x480</th>
        <td align="center">256 色</td>
        <td align="center">600x448</td>
        <td align="center">/</td>
        <td align="center">正常</td>
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

- 设置最大宽度和高度后，需要点击箭头进行确认。
- 不要包含头部数据。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/2.png" style={{width:700, height:'auto'}}/></div>
:::

**Step 3.** 点击 "Save" 将 LCD 输出数组保存为一个 `.h` 文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/7.png" style={{width:500, height:'auto'}}/></div>

## 资源

- **[PDF]**: [ePaper 驱动板原理图 PDF](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/ePaper_Driver_Board.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，以确保您在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
