---
description: 入门指南：1.69英寸LCD SPI 显示屏
title: 1.69英寸LCD SPI 显示屏
keywords:
- oled display
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/1-69inch_lcd_spi_display
last_update:
  date: 08/17/2023
  author: Citric
---

# 1.69英寸LCD SPI 显示屏

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/lcd_spi_display/6.jpg" style={{width:400, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/1-69inch-240-280-Resolution-IPS-LCD-Display-Module-p-5755.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div><br />

## 简介

这款1.69英寸LCD显示屏是一款1.69英寸的串行液晶圆角显示屏。它提供了240×280的高分辨率和262K RGB显示色彩，能够呈现清晰、色彩丰富的图像效果。设计这款显示屏的初衷是提供一个简单、高质量的显示解决方案，以满足各种DIY或物联网（IoT）项目的需求。

它采用8针接口，其中4针用于背光电源供应，另外4针通过SPI与ST7789V2驱动IC进行通信。我们已经为您准备了驱动库和示例代码，方便您快速开始项目开发。

### 规格参数

<div class="table-center">
	<table align="center">
        <tbody>
            <tr>
                <th>工作电压</th>
                <td>3.3V / 5V</td>
                <th>分辨率</th>
                <td>240 × 280 像素</td>
            </tr>
            <tr>
                <th>通信接口</th>
                <td>4线 SPI</td>
                <th>显示尺寸</th>
                <td>27.97 × 32.63mm</td>
            </tr>
            <tr>
                <th>显示面板</th>
                <td>IPS</td>
                <th>像素间距</th>
                <td>0.11655 × 0.11655mm</td>
            </tr>
            <tr>
                <th>驱动芯片</th>
                <td>ST7789V2</td>
                <th>外形尺寸</th>
                <td>31.50 × 39.00mm</td>
            </tr>
        </tbody>
    </table>
</div>

### 外形尺寸

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/lcd_spi_display/7.jpg" style={{width:400, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/lcd_spi_display/8.jpg" style={{width:450, height:'auto'}}/></div>

### 特性

- 240×280分辨率，262K RGB色彩，显示效果清晰且色彩丰富
- SPI接口，减少所需IO引脚，支持控制板如XIAO/Raspberry Pi/Arduino/STM32
- 提供开发资源（包括XIAO/Raspberry Pi/Arduino/STM32的示例代码）

### 应用场景

- **手环或手表**：该显示屏可以与XIAO微控制器组装，制作手环或手表设备。凭借其高分辨率和色彩丰富的显示效果，它可以展示日期和时间信息。其小巧的尺寸使其成为快速创建原型的理想组件。

- **PC信息显示屏**：您可以使用此LCD显示屏连接转换板，用于显示PC运行信息，例如温度和风扇转速。其螺栓设计可以帮助您轻松将其固定在PC机箱上。

## 硬件概述

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/lcd_spi_display/9.png" style={{width:800, height:'auto'}}/></div>

## 入门指南

### 硬件准备

现在我们将向您展示如何使用我们的 XIAO nRF52840 开发板，该板包含 6 自由度 IMU、蓝牙和 PDM 麦克风。您可能会意识到，这块开发板与显示屏是构建数字手表所需的关键组件。

<div class="table-center">
	<table align="center">
		<tr>
			<th>XIAO nRF52840</th>
			<th>1.69 英寸 LCD SPI 显示屏</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/lcd_spi_display/6.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/1-69inch-240-280-Resolution-IPS-LCD-Display-Module-p-5755.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

接下来，您需要将显示屏的引脚连接到 XIAO nRF52840 开发板，请按照下图进行连接：

| 1.69 英寸 LCD SPI 显示屏 | XIAO nRF52840 |
| ---------------------------- | ----------------- |
| VCC                          | 3V3              |
| GND                          | GND              |
| DIN                          | D10              |
| CLK                          | D8               |
| CS                           | D1               |
| DC                           | D3               |
| RST                          | D0               |
| BL                           | D6               |

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/lcd_spi_display/10.png" style={{width:700, height:'auto'}}/></div>

## Arduino 库概述

:::tip
如果这是您第一次使用 Arduino，我们强烈建议您参考 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

基于 **Waveshare** 提供的 Arduino 示例程序，我们编写了一个适用于整个 XIAO 系列的 Arduino 库，您可以通过以下按钮直接访问该库的 Github 页面。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/XIAO_ST7789V2_LCD_Display/tree/main" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 功能

在开始开发代码之前，让我们先了解一下库中可用的功能。

- `void Init(uint8_t cs = CS_PIN, uint8_t dc = DC_PIN, uint8_t rst = RST_PIN, uint8_t bl = BL_PIN)` —— 通用寄存器初始化。

    **输入参数**
    - `cs`: 设置芯片选择引脚，默认值为 XIAO 的 **D1** 引脚。
    - `dc`: 设置 DC 引脚，默认值为 XIAO 的 **D3** 引脚。
    - `rst`: 设置复位引脚，默认值为 XIAO 的 **D0** 引脚。
    - `bl`: 设置背光控制引脚，默认值为 XIAO 的 **D6** 引脚。

- `void SetBacklight(uint16_t Value)` —— 设置背光。

    **输入参数**
    - `Value`: 背光强度，范围为 0 到 255。

- `void Reset(void)` —— 硬件复位。

- `void SetCursor(uint16_t Xstart, uint16_t Ystart, uint16_t Xend, uint16_t Yend)` —— 设置光标位置。

    **输入参数**
    - `Xstart`: 起始 uint16_t x 坐标。
    - `Ystart`: 起始 uint16_t y 坐标。
    - `Xend`: 结束 uint16_t x 坐标。
    - `Yend`: 结束 uint16_t y 坐标。

- `void Clear(uint16_t Color)` —— 清屏功能，将屏幕刷新为指定颜色。

    **输入参数**
    - `Color`: 您希望清屏的颜色。

- `void ClearWindow(uint16_t Xstart, uint16_t Ystart, uint16_t Xend, uint16_t Yend, uint16_t color)` —— 将某一区域刷新为相同颜色。

    **输入参数**
    - `Xstart`: 起始 uint16_t x 坐标。
    - `Ystart`: 起始 uint16_t y 坐标。
    - `Xend`: 结束 uint16_t x 坐标。
    - `Yend`: 结束 uint16_t y 坐标。
    - `color`: 设置颜色。

- `void SetWindowColor(uint16_t Xstart, uint16_t Ystart, uint16_t Xend, uint16_t Yend, uint16_t Color)` —— 设置某一区域的颜色。

    **输入参数**
    - `Xstart`: 起始 uint16_t x 坐标。
    - `Ystart`: 起始 uint16_t y 坐标。
    - `Xend`: 结束 uint16_t x 坐标。
    - `Yend`: 结束 uint16_t y 坐标。
    - `color`: 设置颜色。

- `void SetUWORD(uint16_t x, uint16_t y, uint16_t Color)` —— 绘制一个 uint16_t。

    **输入参数**
    - `x`: 设置 X 坐标。
    - `y`: 设置 Y 坐标。
    - `Color`: 设置颜色。

- `void SetRotate(uint16_t Rotate)` —— 选择图像旋转。

    **输入参数**
    - `Rotate`: ROTATE_0, ROTATE_90, ROTATE_180, ROTATE_270。

- `void SetMirroring(uint8_t mirror)` —— 选择图像镜像。

    **输入参数**
    - `mirror`: MIRROR_NONE, MIRROR_HORIZONTAL, MIRROR_VERTICAL, MIRROR_ORIGIN。

- `void SetPixel(uint16_t Xpoint, uint16_t Ypoint, uint16_t Color)` —— 绘制像素。

    **输入参数**
    - `Xpoint`：X坐标点。
    - `Ypoint`：Y坐标点。
    - `Color`：绘制的颜色。

- `void DrawPoint(uint16_t Xpoint, uint16_t Ypoint, uint16_t Color, DOT_PIXEL Dot_Pixel, DOT_STYLE Dot_FillWay)` —— 绘制点 (Xpoint, Ypoint)，填充颜色。

    **输入参数**
    - `Xpoint`：点的X坐标。
    - `Ypoint`：点的Y坐标。
    - `Color`：设置颜色。
    - `Dot_Pixel`：点的大小。

- `void DrawLine(uint16_t Xstart, uint16_t Ystart, uint16_t Xend, uint16_t Yend, uint16_t Color, DOT_PIXEL Line_width, LINE_STYLE Line_Style)` —— 绘制任意斜率的线段。

    **输入参数**
    - `Xstart`：起始点的X坐标。
    - `Ystart`：起始点的Y坐标。
    - `Xend`：终点的X坐标。
    - `Yend`：终点的Y坐标。
    - `Color`：线段的颜色。

- `void DrawRectangle(uint16_t Xstart, uint16_t Ystart, uint16_t Xend, uint16_t Yend, uint16_t Color, DOT_PIXEL Line_width, DRAW_FILL Filled)` —— 绘制矩形。

    **输入参数**
    - `Xstart`：起始点的X坐标。
    - `Ystart`：起始点的Y坐标。
    - `Xend`：终点的X坐标。
    - `Yend`：终点的Y坐标。
    - `Color`：线段的颜色。
    - `Filled`：是否填充--- 1：实心，0：空心。

- `void DrawCircle(uint16_t X_Center, uint16_t Y_Center, uint16_t Radius, uint16_t Color, DOT_PIXEL Line_width, DRAW_FILL Draw_Fill)` —— 使用8点法绘制指定位置和大小的圆。

    **输入参数**
    - `X_Center`：圆心的X坐标。
    - `Y_Center`：圆心的Y坐标。
    - `Radius`：圆的半径。
    - `Color`：圆的颜色。
    - `Filled`：是否填充：1：填充，0：不填充。

- `void DrawString_EN(int16_t Xstart, int16_t Ystart, const char * pString, sFONT* Font, int16_t Color_Background, int16_t Color_Foreground)` —— 显示字符串。

    **输入参数**
    - `Xstart`：X坐标。
    - `Ystart`：Y坐标。
    - `pString`：要显示的英文字符串的首地址。
    - `Font`：显示字符大小的结构体指针。
    - `Color_Background`：选择英文字符的背景颜色。
    - `Color_Foreground`：选择英文字符的前景颜色。

- `void DrawNum(int16_t Xpoint, int16_t Ypoint, int32_t Nummber, sFONT* Font, int16_t Color_Background, int16_t Color_Foreground)` —— 显示数字。

    **输入参数**
    - `Xstart`：X坐标。
    - `Ystart`：Y坐标。
    - `Nummber`：显示的数字。
    - `Font`：显示字符大小的结构体指针。
    - `Color_Background`：选择英文字符的背景颜色。
    - `Color_Foreground`：选择英文字符的前景颜色。

- `void DrawFloatNum(int16_t Xpoint, int16_t Ypoint, double Nummber, int8_t Decimal_Point, sFONT* Font, int16_t Color_Background, int16_t Color_Foreground)` —— 显示浮点数。

    **输入参数**
    - `Xstart`：X坐标。
    - `Ystart`：Y坐标。
    - `Nummber`：要显示的浮点数据。
    - `Decimal_Point`：显示的小数位数。
    - `Font`：显示字符大小的结构体指针。
    - `Color_Background`：选择英文字符的背景颜色。
    - `Color_Foreground`：选择英文字符的前景颜色。

- `void DrawImage(const unsigned char *image, int16_t xStart, int16_t yStart, int16_t W_Image, int16_t H_Image)` —— 显示图像。

    **输入参数**
    - `image`：图像起始地址。
    - `xStart`：X起始坐标。
    - `yStart`：Y起始坐标。
    - `xEnd`：图像宽度。
    - `yEnd`：图像高度。

### 默认变量

```cpp
#define RST_PIN D0
#define DC_PIN  D3
#define BL_PIN  D6
#define CS_PIN  D1

#define LCD_WIDTH   240 //LCD宽度
#define LCD_HEIGHT  280 //LCD高度

/**
 * 图像颜色
**/
#define WHITE         0xFFFF
#define BLACK         0x0000    
#define BLUE          0x001F  
#define BRED          0XF81F
#define GRED          0XFFE0
#define GBLUE         0X07FF
#define RED           0xF800
#define MAGENTA       0xF81F
#define GREEN         0x07E0
#define CYAN          0x7FFF
#define YELLOW        0xFFE0
#define BROWN         0XBC40 
#define BRRED         0XFC07 
#define GRAY          0X8430 
#define DARKBLUE      0X01CF  
#define LIGHTBLUE     0X7D7C   
#define GRAYBLUE      0X5458 
#define LIGHTGREEN    0X841F 
#define LGRAY         0XC618 
#define LGRAYBLUE     0XA651
#define LBBLUE        0X2B12

/**
 * 显示旋转
**/
#define ROTATE_0            0
#define ROTATE_90           90
#define ROTATE_180          180
#define ROTATE_270          270

#define MIRROR_NONE        0x00
#define MIRROR_HORIZONTAL  0x01
#define MIRROR_VERTICAL    0x02
#define MIRROR_ORIGIN      0x03
```

### 安装

由于您已经下载了ZIP库，请打开您的Arduino IDE，点击 **Sketch > Include Library > Add .ZIP Library**。选择您刚刚下载的ZIP文件，如果库安装正确，您将在通知窗口中看到 **Library added to your libraries**。这表示库已成功安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

## XIAO 示例

在正确下载并安装库后，您可以在示例文件夹中找到两个示例程序，分别是 **helloworld.ino** 和 **bgcolor.ino**。bgcolor.ino 是一个展示背景颜色的示例，我们将红色设置为默认颜色。而 helloworld.ino 是一个展示我们公司 logo 动画的示例，该示例包含 bgcolor 示例中的效果。

```cpp
#include <st7789v2.h>
#include "SPI.h"
#include "seeed.h"

st7789v2 Display;

void setup() {
  // 在此处放置您的初始化代码，仅运行一次：
  Display.SetRotate(270);
  Display.Init();
  Display.SetBacklight(100);
  Display.Clear(WHITE);
}

void loop() {
  // 在此处放置您的主代码，循环运行：
//  Display.SetPixel(100, 100, RED);
//  Display.DrawPoint(50, 50, YELLOW, DOT_PIXEL_8X8, DOT_FILL_AROUND);

  Display.DrawImage(gImage_seeed, 20, 90, 240, 47);

  Display.DrawLine(15, 65, 65, 65, MAGENTA, DOT_PIXEL_2X2, LINE_STYLE_SOLID);
  Display.DrawLine(15, 70, 80, 70, MAGENTA, DOT_PIXEL_2X2, LINE_STYLE_SOLID);
  
  Display.DrawRectangle(15, 80, 265, 150, GRAY, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  
  Display.DrawCircle(10, 10, 25, BLUE, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(10, 10, 20, BLACK, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(10, 10, 15, RED, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(10, 10, 10, GREEN, DOT_PIXEL_2X2, DRAW_FILL_FULL);

  Display.DrawCircle(270, 10, 25, BLUE, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(270, 10, 20, BLACK, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(270, 10, 15, RED, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(270, 10, 10, GREEN, DOT_PIXEL_2X2, DRAW_FILL_FULL);

  Display.DrawCircle(10, 230, 25, BLUE, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(10, 230, 20, BLACK, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(10, 230, 15, RED, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(10, 230, 10, GREEN, DOT_PIXEL_2X2, DRAW_FILL_FULL);

  Display.DrawCircle(270, 230, 25, BLUE, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(270, 230, 20, BLACK, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(270, 230, 15, RED, DOT_PIXEL_2X2, DRAW_FILL_EMPTY);
  Display.DrawCircle(270, 230, 10, GREEN, DOT_PIXEL_2X2, DRAW_FILL_FULL);

  Display.DrawLine(200, 160, 265, 160, GRAYBLUE, DOT_PIXEL_2X2, LINE_STYLE_SOLID);
  Display.DrawLine(215, 165, 265, 165, GRAYBLUE, DOT_PIXEL_2X2, LINE_STYLE_SOLID);
  
  Display.DrawString_EN(20, 180, "By: Citric", &Font20, WHITE, BLACK);
//  Display.DrawNum(100, 220, 123456, &Font24, RED, BRED);
  Display.DrawFloatNum(100, 210, 1.00, 2, &Font16, WHITE, BLACK);
}
```

您会发现 Seeed Studio 的 logo 动态显示在屏幕上。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/lcd_spi_display/11.jpg" style={{width:700, height:'auto'}}/></div>


## 故障排除

### 1. 当屏幕连接时，我重新编程后屏幕无法工作？

答：如果您的程序正在不断与屏幕通信，重新编程可能会中断此过程，导致屏幕出现故障。您可以尝试关闭电源以恢复屏幕的正常运行。

### 2. 我应该为显示屏使用什么样的电源？

答：电路板可以接受 3.3V 或 5V 的输入电压，因此您可以使用该范围内的电源。

### 3. 我的显示屏颜色看起来不正确。可能是什么问题？

答：请确保您的代码中正确初始化了显示屏，并且您使用了正确的颜色值。如果问题仍然存在，可能是显示屏或连接线出现问题。请检查连接，或者尝试使用另一块显示屏（如果有）。

## 资源

- **[PDF]** [原理图](https://www.waveshare.com/w/upload/2/2b/1.69inch_LCD_Module.pdf)
- **[PDF]** [数据手册](https://www.waveshare.com/w/upload/c/c9/ST7789V2.pdf)
- **[PDF]** [二维图纸](https://www.waveshare.com/w/upload/4/41/1.69inch_LCD_Module_2Ddrawing.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时拥有顺畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>