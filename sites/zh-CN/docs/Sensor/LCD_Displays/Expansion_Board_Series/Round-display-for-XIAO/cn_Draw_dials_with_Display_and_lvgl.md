---
description: 在 Seeed Studio 圆形屏幕上为 XIAO 使用 LVGL 和 TFT
title: 为所有 XIAO 系列使用 LVGL 和 TFT
keywords:
  - XIAO
  - Round Dislay
  - lvgl
  - draw dials
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /using_lvgl_and_tft_on_round_display
sidebar_position: 3
sku: 104030087
last_update:
  date: 09/12/2024
  author: Citric
createdAt: '2023-03-17'
updatedAt: '2026-04-21'
url: https://wiki.seeedstudio.com/cn/using_lvgl_and_tft_on_round_display/
---

# 在 Seeed Studio 圆形屏幕上为所有 XIAO 系列使用 LVGL 和 TFT

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/000.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

<br></br>


感谢您购买 Seeed Studio 圆形屏幕产品。在本教程的这一部分，我们将重点介绍如何使用 `Seeed_GFX` 库和 `LVGL` 库在圆形屏幕上绘制各种丰富有趣的表盘图案，并从浅入深地介绍这两个实用但复杂的库的一些常用函数的用法。通过本教程的内容，希望您可以使用本产品绘制出理想的表盘图案。祝您学习愉快！

## 入门指南

在开始学习之前，我们希望您先准备好以下内容。

### 硬件准备

为了演示，本教程将使用 **XIAO ESP32S3** 作为主控。

<table align="center">
 <tr>
     <th>Seeed Studio Round Display for XIAO</th>
     <th>Seeed Studio XIAO ESP32S3</th>
 </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/rounddisplay.jpg" style={{width:210, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
 <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

如果你想使用其他 XIAO 产品，本文中的教程和方法同样适用。

<table align="center">
 <tr>
  <th>Seeed Studio XIAO SAMD21</th>
  <th>Seeed Studio XIAO RP2040</th>
  <th>Seeed Studio XIAO nRF52840 (Sense)</th>
  <th>Seeed Studio XIAO ESP32C3</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg" style={{width:400, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoblesense.jpg" style={{width:500, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoesp32c3.jpg" style={{width:450, height:'auto'}}/></div></td>
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
 </tr>
</table>

在安装带圆形屏幕的 XIAO 时，请让 XIAO 的 Type-C 接口朝向圆形屏幕的外侧，然后将每个引脚与双排 7 针排针一一对应连接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/50.jpg" style={{width:500, height:'auto'}}/></div>

### 软件准备

这部分内容已在 [Basic Wiki](https://wiki.seeedstudio.com/cn/get_start_round_display#software-preparation) 中进行了详细说明，因此你可以直接跳转阅读。

## 使用 Seeed_GFX 库绘制简单表盘

[Seeed_GFX](https://github.com/Seeed-Studio/Seeed_GFX)（基于对 TFT_eSPI 库的修改，对 Seeed 的显示产品提供深度支持）是一个功能丰富、兼容 Arduino IDE 的 32 位处理器图形和字体库。XIAO 圆形屏幕提供的 TFT 库是基于该库在 XIAO 与 XIAO 圆形屏幕兼容后的版本，支持整个 XIAO 系列的使用。

### TFT 库的常用接口

#### 1. 创建 TFT 对象

```c
TFT_eSPI tft = TFT_eSPI()
TFT_eSPI tft = TFT_eSPI(240,240)        // Set the screen size at the time of object creation
```

#### 2. 初始化

```c
void init(uint8_t tc = TAB_COLOUR)
void begin(uint8_t tc = TAB_COLOUR)
```

`tft.begin()` 和 `tft.init()` 是两个功能相同的函数。

#### 3. 清屏

```c
void fillScreen(uint32_t color) // Fill the screen with a certain color
```

#### 4. 设置屏幕方向

```c
void setRotation(uint8_t r);      // Set the display image rotation direction, r optional parameters for 0, 1, 2, 3
uint8_t getRotation(void)         // Read the current rotation angle
```

0、1、2、3 分别代表 0°、90°、180°、270°，4 为镜像。

#### 5. 颜色转换

```c
uint16_t color565(uint8_t red, uint8_t green, uint8_t blue)    // Convert 8-bit red, green and blue to 16-bit
uint16_t color8to16(uint8_t color332)                          // Convert 8-bit color to 16-bit
uint8_t  color16to8(uint16_t color565)                         // Convert 16-bit color to 8-bit
uint32_t color16to24(uint16_t color565)                        // Convert 16-bit color to 24-bit
uint32_t color24to16(uint32_t color888)                        // Convert 24-bit color to 16-bit
```

#### 6. 颜色反转

```c
void invertDisplay(bool i)      //i = true to invert all display colors, i = false to display normally
```

#### 7. 文本相关设置

```c
/* cursor */
void setCursor(int16_t x, int16_t y)                     // Set the cursor for tft.print()
void setCursor(int16_t x, int16_t y, uint8_t font)       // Set the cursor and font size of tft.print()
int16_t getCursorX(void)                                 // Read the current cursor x position (moves with tft.print())
int16_t getCursorY(void)                                 // Retrieve the current cursor y position

/* font color */
void setTextColor(uint16_t color)                        // Set the color of characters only
void setTextColor(uint16_t fgcolor, uint16_t bgcolor, bool bgfill = false)   // Set the character foreground and background colors

/* font size */
void setTextSize(uint8_t size)                           // Set the character size multiplier (this increases the pixel size)
void setTextWrap(bool wrapX, bool wrapY = false)         // Turn on/off line feeds for text in TFT width and/or height

/* Text reference position */
void setTextDatum(uint8_t datum)                         // Set text reference position (default is top left corner)
uint8_t getTextDatum(void)                               // Get the text reference position

/* Set the background fill, which can be used to clear the display of the specified area */
void setTextPadding(uint16_t x_width)                    // Set the text fill (background margin/rewrite) width in pixels
uint16_t getTextPadding(void)                            // Get text fill
```

从上述函数可以看出，如果你想打印显示文本，只需简单地使用 `tft.print()` 函数即可。

#### 8. 简单图形的绘制

你可以使用以下函数绘制一些简单的图形，包括像素点、直线线段、矩形、圆等。

```c
drawPixel(int32_t x, int32_t y, uint32_t color)    // Plotting individual pixel points

drawLine(int32_t xs, int32_t ys, int32_t xe, int32_t ye, uint32_t color)  // Draw a line

drawRect(int32_t x, int32_t y, int32_t w, int32_t h, uint32_t color)   // Draw a rectangle
fillRect(int32_t x, int32_t y, int32_t w, int32_t h, uint32_t color)  // Draw a rectangle with a fill color

drawCircle(int32_t x, int32_t y, int32_t r, uint32_t color)  // Draw a circle
fillCircle(int32_t x, int32_t y, int32_t r, uint32_t color)  // Draw a circle with a fill color

drawEllipse(int16_t x, int16_t y, int32_t rx, int32_t ry, uint16_t color)  // Draw a ellipse
fillEllipse(int16_t x, int16_t y, int32_t rx, int32_t ry, uint16_t color)  // Draw a ellipse with a fill color

drawTriangle(int32_t x1,int32_t y1, int32_t x2,int32_t y2, int32_t x3,int32_t y3, uint32_t color)  // Draw a triangle
fillTriangle(int32_t x1,int32_t y1, int32_t x2,int32_t y2, int32_t x3,int32_t y3, uint32_t color)  // Draw a triange with a fill color
```

#### 9. 复杂图形的绘制

TFT 库还为我们提供了绘制复杂图形的方法，例如圆角矩形、圆角弧线、丝滑平滑的形状等。

```c
/** 
    Draw a pixel blended with the background pixel colour (bg_color) specified,  return blended colour 
    If the bg_color is not specified, the background pixel colour will be read from TFT or sprite 
**/
drawPixel(int32_t x, int32_t y, uint32_t color, uint8_t alpha, uint32_t bg_color)

/** 
    Draw a small anti-aliased filled circle at ax,ay with radius r (uses drawWideLine)
    If bg_color is not included the background pixel colour will be read from TFT or sprite
**/
drawSpot(float ax, float ay, float r, uint32_t fg_color, uint32_t bg_color)


drawFastVLine(int32_t x, int32_t y, int32_t h, uint32_t color)  // Draw vertical straight lines
drawFastHLine(int32_t x, int32_t y, int32_t w, uint32_t color)  // Draw horizontal lines
drawWideLine(float ax, float ay, float bx, float by, float wd, uint32_t fg_color, uint32_t bg_color)  // Draw a thick solid line
drawWedgeLine(float ax, float ay, float bx, float by, float aw, float bw, uint32_t fg_color, uint32_t bg_color);  //Draws a tapered line. aw and bw represent the start and end width of the tapered line, respectively.


/**
    As per "drawSmoothArc" except the ends of the arc are NOT anti-aliased, this facilitates dynamic arc length changes with arc segments and ensures clean segment joints. 
    The sides of the arc are anti-aliased by default. If smoothArc is false sides will NOT be anti-aliased
**/
drawArc(int32_t x, int32_t y, int32_t r, int32_t ir, uint32_t startAngle, uint32_t endAngle, uint32_t fg_color, uint32_t bg_color, bool smoothArc);

/**
    Draw an anti-aliased (smooth) arc between start and end angles. Arc ends are anti-aliased.
    By default the arc is drawn with square ends unless the "roundEnds" parameter is included and set true
    Angle = 0 is at 6 o'clock position, 90 at 9 o'clock etc. The angles must be in range 0-360 or they will be clipped to these limits
    The start angle may be larger than the end angle. Arcs are always drawn clockwise from the start angle.
**/
drawSmoothArc(int32_t x, int32_t y, int32_t r, int32_t ir, uint32_t startAngle, uint32_t endAngle, uint32_t fg_color, uint32_t bg_color, bool roundEnds);

/**
    Draw an anti-aliased filled circle at x, y with radius r
    Note: The thickness of line is 3 pixels to reduce the visible "braiding" effect of anti-aliasing narrow lines this means the inner anti-alias zone is always at r-1 and the outer zone at r+1
**/
drawSmoothCircle(int32_t x, int32_t y, int32_t r, uint32_t fg_color, uint32_t bg_color)

/**
    Draw an anti-aliased filled circle at x, y with radius r
    If bg_color is not included the background pixel colour will be read from TFT or sprite
**/
fillSmoothCircle(int32_t x, int32_t y, int32_t r, uint32_t color, uint32_t bg_color)


/**
    Draw a rounded rectangle that has a line thickness of r-ir+1 and bounding box defined by x,y and w,h
    The outer corner radius is r, inner corner radius is ir
    The inside and outside of the border are anti-aliased
**/
drawSmoothRoundRect(int32_t x, int32_t y, int32_t r, int32_t ir, int32_t w, int32_t h, uint32_t fg_color, uint32_t bg_color, uint8_t quadrants)

/**
    Draw a filled rounded rectangle , corner radius r and bounding box defined by x,y and w,h
**/
fillSmoothRoundRect(int32_t x, int32_t y, int32_t w, int32_t h, int32_t radius, uint32_t color, uint32_t bg_color)
```

#### 10. 变量与文本

除了简单地显示某个特定字符串，有时我们还需要在屏幕上显示一些变量，例如时间和传感器数值等。然后可以根据变量的类型，选择使用下面不同的函数。

```c
drawChar(int32_t x, int32_t y, uint16_t c, uint32_t color, uint32_t bg, uint8_t size)
drawNumber(long intNumber, int32_t x, int32_t y, uint8_t font) // Draw integer using specified font number. If no font is set (the last parameter, the default font)
drawFloat(float floatNumber, uint8_t decimal, int32_t x, int32_t y, uint8_t font), // Draw float using specified font number. If no font is set (the last parameter, the default font)
drawString(const char *string, int32_t x, int32_t y, uint8_t font),  // Draw string using specified font number. If no font is set (the last parameter, the default font)
```

#### 11. 图像处理

要使用 TFT 库中的 `pushImage()` 函数在屏幕上显示图像，可以按照以下步骤进行：

- 将图像文件转换为 Arduino 可以识别的 C/C++ 数组格式。你可以使用 **Image2CPP** 等在线工具将位图图像转换为数组格式。

- 在 Arduino 程序中包含生成的图像数组文件。

- 初始化 TFT 库和屏幕，设置屏幕分辨率和颜色模式。

- 使用 `tft.pushImage(x, y, width, height, data)` 函数将图像数据推送到屏幕上，其中 x 和 y 为图像左上角的坐标，width 和 height 为图像的宽度和高度，data 为图像数组。

```c
// Image data array
const unsigned char image_data[] PROGMEM = {
  // Insert the converted C/C++ array data of the image here
};

tft.pushImage(x, y, image_width, image_height, image_data);
```

#### 12. TFT_eSprite 类

`TFT_eSprite` 和 `TFT_eSPI` 都是用于 TFT LCD 显示屏的 Arduino 库，但它们具有不同的功能和设计目的。

TFT_eSPI 是一个功能强大的库，具有许多高级特性和配置选项，可以实现各种显示效果。它支持多种显示驱动芯片和控制器，并且可以在多种 Arduino 硬件平台上使用。它使用 SPI 接口和高度优化的代码来实现快速刷新率和较小的代码体积。TFT_eSPI 库可用于包括游戏、图形和 GUI 在内的各种应用。

TFT_eSprite 是对 TFT_eSPI 库的补充，主要用于在显示屏上绘制小的精灵图像，例如游戏角色、图标、文本等。TFT_eSprite 可以实现更快的绘制速度，因为它会在内存中缓存图像并进行局部刷新。这样在更新小精灵图像时可以获得更快的刷新速度，并且可以节省处理器时间和内存空间。

因此，TFT_eSPI 是一个功能强大的通用库，适用于多种应用，而 TFT_eSprite 是一个专注于绘制小精灵图像的库，可以提供更高的绘制效率。

使用 TFT_eSPI 库的一般格式如下。

```c
#include <TFT_eSPI.h>

TFT_eSPI tft = TFT_eSPI();

void setup() {
  tft.init();
  tft.setRotation(1);
}

void loop() {
    // Write the code to draw the graph
}
```

使用 TFT_eSprite 库的一般格式如下。

```cpp
#include <TFT_eSPI.h>

TFT_eSPI tft = TFT_eSPI();
TFT_eSprite spr = TFT_eSprite(&tft);

void setup() {
  tft.init();
  tft.setRotation(1);
}

void loop() {
    spr.createSprite(128, 128);  // Create a sprite of 128*128 size

    // Write the code to draw the graph

    spr.pushSprite(0, 0);  // Placement of the drawn sprite
    spr.deleteSprite();
}
```

:::note
在上述示例代码中，当程序退出 `loop()` 函数时，会调用 `spr.deleteSprite();` 来删除 TFT_eSprite 对象并释放内存空间。这样，在下一次循环中创建 TFT_eSprite 对象时，就可以使用之前释放的内存空间，从而避免浪费内存资源。
:::

关于 TFT 库函数及其使用的更多信息，我们建议阅读库中的 **TFT_eSPI.h** 和 **TFT_eSPI.cpp** 文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/1.png" style={{width:300, height:'auto'}}/></div>

### 关于 TFT 库的自定义选项

有时我们需要使用一些自定义字体库，或者启用一些为节省空间而默认未启用的功能。这时我们就需要修改 **Setup66_Seeed_XIAO_Round.h** 文件的内容。

- 在 **Windows** 系统中，该文件的默认路径为：

`C:\Users\{UserName}\Documents\Arduino\libraries\Seeed_GFX\User_Setups\Setup66_Seeed_XIAO_Round.h`

- 在 **MacOS** 系统中，该文件的默认路径为：

`\Users\{UserName}\Documents\Arduino\libraries\Seeed_GFX\User_Setups\Setup66_Seeed_XIAO_Round.h`

请根据实际使用情况打开或关闭一些不必要的功能。
例如，如果你想使用自定义字体，那么你应该取消注释 `#define SMOOTH_FONT`，否则在运行时很可能会出现错误。

当然，你的自定义字体的头文件应保存在与 ino 文件相同的目录下，这是规避错误的必要步骤。

### 基于 TFT 的表盘示例程序

我们为 Round Display 编写了一个可以直接使用的表盘程序。由于某些 XIAO 型号的内存空间限制，该程序只实现了基本的指针运动功能，并未设计其他功能。用户可以通过该程序学习 TFT 库的使用以及指针运动的实现，并根据实际情况完成更复杂表盘的开发。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/tree/main/tft_espi-base-dial" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载代码</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

## 使用 LVGL 库绘制简单表盘

LVGL 库是一个通用的嵌入式图形库，提供了丰富的图形用户界面控件，例如按钮、标签、列表等，可用于构建各种用户界面。与 TFT 库不同，LVGL 库提供了抽象的、面向对象的图形接口，更易于使用和维护，但可能在性能和可靠性方面存在一定的权衡。

在构建复杂用户界面时，LVGL 库是一个非常有用的工具，可以减少编写和维护代码的工作量。而 TFT 库则更适合一些需要高性能图形的应用，例如实时图像处理、视频渲染等。

### LVGL 库的常用接口

LVGL 库的 API 非常丰富且复杂，我们希望每一位使用 LVGL 的用户都能花时间阅读 LVGL 官方的介绍文档。

- [Get Started](https://docs.lvgl.io/latest/en/html/get-started/index.html)
- [Display interface](https://docs.lvgl.io/latest/en/html/porting/display.html)
- [Input device interface](https://docs.lvgl.io/latest/en/html/porting/indev.html)
- [Tick interface](https://docs.lvgl.io/latest/en/html/porting/tick.html)
- [Operating system and interrupts](https://docs.lvgl.io/latest/en/html/porting/os.html)

### 使用 SquareLine Studio 绘制复杂 UI 界面

除了阅读详尽的 LVGL 官方文档并自行编写 LVGL 图形程序外，我们还可以使用 LVGL 官方的 SquareLine Studio 工具来提升开发效率。

接下来，我们将为你简单介绍该软件在圆形屏幕上的使用方法和配置方式，帮助你能够快速上手使用该软件设计一些界面。

:::caution
我们建议你使用 **v1.5.1** 版本的 SquareLine Studio。这也是撰写本 Wiki 时的最新软件版本。

本教程编写时使用的环境：

1. 由 Bodmer 编写、Seeed Studio 修改的 **[Seeed_GFX library](https://github.com/Seeed-Studio/Seeed_GFX)**。

2. 由 kisvegabor、embeddedt、pete-pjb 编写、Seeed Studio 修改的 **[SeeedStudio_lvgl library](https://github.com/Seeed-Projects/SeeedStudio_lvgl)**。
:::

#### Step1. 下载 SuqareLine Studio

你可以点击[这里](https://squareline.io/)进入 SquareLine Studio 官方网站，然后点击 **TRY IT FOR FREE** 将软件下载到你的电脑上。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/3.png" style={{width:1000, height:'auto'}}/></div>

如果你的电脑是第一次使用这款软件，那么你将获得 30 天的免费试用；如果不是，免费版本也可以绘制最多 5 个页面，并使用 50 个 widgets。

:::caution
如果你是第一次使用，请不要注册登录到一个没有余额的账号，否则可能会消耗掉你完整的 30 天试用期！
:::

#### Step2. 配置屏幕界面信息

接下来，我们可以打开软件，先创建一个空白的显示页面。

由于我们使用的是 Arduino 编程，那么我们创建的内容也需要是 Arduino 文件。

我们的圆形屏幕分辨率为 **240*240**，且只支持 **16bit** 色深。除此之外，项目的名称和主题需要由你自己定义，这里我将主题设置为暗色风格。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/4.png" style={{width:1000, height:'auto'}}/></div>

如果你像我一样操作太快，忘记设置表盘的形状就创建了项目怎么办？没关系，在主界面的左上角，你也可以找到 Project Settings 选项卡，对刚才的设置进行修改。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/5.png" style={{width:1000, height:'auto'}}/></div>

:::caution
请注意，在你正式开始绘制之前，请先完成项目的设置，并确保其与我们的屏幕规格一致，否则你绘制的所有内容可能无法在屏幕上正常显示。

项目创建后并不是所有内容都可以修改，例如项目名称。请不要在项目名称中使用英语以外的任何语言或特殊字符，并且请不要使用 **"-"** 符号，请用 **"_"** 替换 **"-"**。否则，导出的程序在编译时可能会出现错误！
:::

#### Step3. 了解软件的功能布局

根据我的使用习惯，我将软件的主界面大致划分为以下几个部分。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/6.png" style={{width:1000, height:'auto'}}/></div>

- **Hierarchy and Animation pane**：这个区域可以设置不同的表盘页面、显示图层和动画。

- **Widgets**：在这里你可以选择要添加到显示页面上的组件。这些组件已经集成在软件中，可以直接使用。这里没有的组件，则需要你在后续自己的编程软件中添加。

- **Working Area**：在工作区中，你可以通过拖拽来改变某些组件的位置。更方便的是，最终的显示效果会与工作区中显示的一致，真正实现所见即所得。

- **Assets & Console**：Assets 显示你已添加的图像素材，这些图像素材可以用于支持插入图片的组件中。Console 会显示你在设置过程中出现的一些错误信息（如果有的话）。

- **Setup Area**：这里的主要用途是配置组件的属性。

我们先对软件界面有一个整体的了解，之后会通过实际操作来帮助你理解各个部分的使用方法。

#### Step4. 使用软件实现你的创意

假设我现在想绘制一个音乐界面。当然，我非常喜欢听音乐，所以我想以绘制一个音乐显示界面作为示例。

我希望在这个音乐显示界面中包含以下组件。

- 我最喜欢的音乐专辑封面作为背景。
- 有一个播放进度条
- 有一个音量控制条
- 有播放和暂停按钮

在理清我们的需求之后，我们就需要像搭建大楼一样，从下往上设计显示组件。

第一步是创建一个音乐背景图片。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/7.png" style={{width:1000, height:'auto'}}/></div>

在 widgets 中选择 **Panel**，你可以点击它，它会自动放置在表盘的中心，或者你也可以将它拖拽到你希望放置的位置。

我们会把要显示的图片放在 Panel 中，而不是直接放在表盘背景上，因为我不希望整个表盘都是这张图片，并且 Panel 可以自由调整大小。

此时，你可以看到在 Setup Area 中已经有一系列可以设置的属性。每个组件的设置通常都比较相似，只有一两项可能会有些不同。

> **Name**：你应该为该 widget 命名。名称开头不能是数字、下划线或特殊字符。导出代码后，你可以通过该名称找到这个 widget。

> **Layout**：你可以使用布局来自动排列 widget 的子项。如果启用了布局，则子项的 X 和 Y 值不能手动调整，除非在子项上启用了 `IGNORE_LAYOUT` 或 `FLOATING` 标志。

> **Main Flags**
>
> - **Hidden** - 使对象隐藏。（就像它根本不存在一样。）
> - **Clickable** - 使对象可以被输入设备点击
> - **Click focusable** - 当对象被点击时，为其添加聚焦状态
> - **Checkable** - 当对象被点击时切换选中状态
> - **Snappable** - 如果父对象启用了滚动捕捉，则可以捕捉到该对象
> - **Press lock** - 即使按压从对象上滑开，也保持对象处于按下状态
> - **Event bubble** - 将事件同时传播给父对象
> - **Gesture bubble** - 将手势事件同时传播给父对象
> - **Adv hittest** - 允许执行更精确的命中（点击）测试，例如考虑圆角
> - **Ignore layout** - 使对象可以被布局自由定位
> - **Floating** - 当父对象滚动时不滚动该对象，并忽略布局

> **Scroll Flags**
>
> - **Scrollable** - 使对象可滚动
> - **Scroll elastic** - 允许在内部滚动，但速度较慢
> - **Scroll momentum** - 当“甩动”时让对象继续滚动一段距离
> - **Scroll one** - 只允许滚动一个可捕捉的子项
> - **Scroll chain** - 允许将滚动传递给父对象
> - **Scroll on focus** - 当对象获得焦点时自动滚动以使其可见

>**Scroll Settings**
>
> - **Scroll direction** - 根据配置的方向显示滚动条
> - **Scrollbar mode** - 根据配置的模式显示滚动条。存在以下几种模式：
>   - **Off** - 从不显示滚动条
>   - **On** - 始终显示滚动条
>   - **Active** - 当对象正在被滚动时显示滚动条
>   - **Auto** - 当内容足够大需要滚动时显示滚动条

> **States**：对象可以处于以下状态的任意组合：
>
> - **Clickable** - 切换或选中状态
> - **Disable** - 禁用状态
> - **Focusable** - 通过键盘或编码器聚焦，或通过触摸板/鼠标点击聚焦
> - **Pressed** - 正在被按下

> **样式设置（Style settings）**：样式可用于为组件或其部分添加效果。你可以添加自定义背景颜色、边框、阴影等。在样式设置中，你可以添加或修改这些参数的值。
>
> **状态（State）**：你可以为每一种状态创建一个自定义样式。
>
> **样式属性（Style Properties）**：样式属性是为样式设置的各项参数。
>
> - **Arc**：Arc 样式可用于包含 Arc 组件的那些组件中。
>   - **Line color** - 线条的颜色
>   - **Arc width** - 弧线的宽度
>   - **Arc rounded** - 弧线两端为圆角
>   - **Arc image** - 弧线的背景图像
> - **Background**：Background 样式是组件的背景。你可以创建渐变或让背景的角变成圆角。
>   - **Color and alpha** - 设置对象的背景颜色和透明度。
>   - **Gradient color** - 设置背景的渐变颜色。
>   - **Bg main stop** - 设置渐变背景颜色开始的起点。
>   - **Bg gradinet stop** - 设置背景渐变颜色开始的起点
>   - **Bg radius** - 用于将背景角变为圆角的半径
>   - **Gradient direction** - 渐变的方向，可以是水平或垂直。
>   - **Clip corner** - 启用后会裁剪圆角处溢出的内容。
> - **Background Image**：你可以将一张图片设置为背景图像。
>   - **Bg image** - 你用作背景图像的图片
>   - **Bg image opa** - 背景图像的不透明度
>   - **Recolor** - 使用 Recolor 功能，你可以在背景图像上叠加一种颜色。通过更改 alpha 参数来设置颜色深度。
>   - **Bg image tiled** - 如果启用，背景图像将被平铺
> - **Blend**：通过使用 Blend 样式，你可以将当前组件部分的像素颜色与其后对象的颜色进行混合。
>   - **Blend mode** - 从四种选项中进行选择。
>     - **Normal** - 默认状态
>     - **Additive** - 像素相加
>     - **Subtractive** - 像素相减
>     - **Multiply** - 像素相乘
>   - **Blend opacity** - 在这里你可以设置组件部分的不透明度
> - **Border**：使用 Border，你可以在选定对象的内部边缘绘制边框。
>   - **Border color** - 边框的颜色
>   - **Border width** - 边框的宽度
>   - **Border side** - 边框所在的方向
> - **Line**：Line 样式可用于包含 Line 组件的那些组件中。
>   - **Color** -  线条的颜色
>   - **Width** - 线条的宽度
>   - **Line rounded** - 线条两端将为圆角
> - **Outline**：Outline 样式与 Border 样式类似，但这里是在选定组件部分的外侧绘制边框。
>   - **Outline color** - 外轮廓的颜色
>   - **Outline width** - 外轮廓的宽度
>   - **Outline pad** - 与组件边缘的距离（像素）
> - **Paddings**：Paddings 样式会在组件部分上添加内边距。这意味着在层级中位于其下方的部分会按内边距中定义的像素距离发生位移。
>   - **Pad** - 内边距的大小
> - **Shadow**：使用 Shadow 样式，你可以为选定的组件部分绘制阴影或发光效果。
>   - **Shadow color** - 阴影的颜色
>   - **Shadow width** - 阴影的宽度
>   - **Shadow spread** - 阴影的扩散程度
>   - **Shadow OX** - 在 X 轴上平移阴影
>   - **Shadow OY** - 在 Y 轴上平移阴影
> - **Text**：Text 样式定义了组件上文本的各项参数。
>   - **Text color** - 文本的颜色
>   - **Letter spacing** - 字符之间的间距
Line spacing - 行与行之间的间距
>   - **Text align** - 文本对齐的方向
>   - **Text decor** - 你可以为文本添加上划线或下划线
>     - **None** - 普通文本
>     - **Understand** - 带下划线的文本
>     - **Strikethrough** - 带删除线的文本
>     - **Text font** - 文本的字体
>
> **事件属性（Event Properties）**：通过添加事件，你可以为组件创建不同的交互，例如按下按钮时切换屏幕、播放动画等。
>
> - **Add Event**：在检查器面板（Inspector Panel）底部，你可以找到 ADD EVENT 按钮。首先，你需要为事件命名，然后选择一个触发方式来启动它。
>   - **Event name** - 事件的名称
>   - **Event Trigger** - 事件开始时的交互方式
>     - **Pressed** - 对象被按下
>     - **Clicked** - 对象被短时间按下后松开。如果发生滚动则不会被调用
>     - **Long pressed** - 对象被长时间按下
>     - **Long pressed repeat** - 在每经过 `long_press_repeat_time` ms 后，在 `long_press_time` 之后被调用。如果发生滚动则不会被调用
>     - **Focused** - 对象被聚焦
>     - **Defocused** - 对象失去焦点
>     - **Value changed** - 对象的值已被更改。
>     - **Ready** - 某个过程已完成
>     - **Cancel** - 某个过程已被取消
>     - **Screen loaded** - 屏幕已加载，在所有动画结束时被调用
>     - **Screen unloaded** - 屏幕已卸载，在所有动画结束时被调用
>     - **Screen load start** - 屏幕加载已开始，在屏幕切换延时结束时触发
>     - **Screen unload start** - 屏幕卸载已开始，在调用 lv_scr_load/lv_scr_load_anim 时立即触发
>       - **Checked** - 组件被选中
>       - **Unchecked** - 组件未被选中
>       - **Gesture** - 手指触摸滑动方向
> - **Add Event**
>   - **Actions**：Actions 是在触发发生时开始执行的事件元素。
>     - **Call function**：使用 Call function 动作，你可以添加一个函数名供事件调用。该函数会在导出过程中被创建到 ui__events.c 或 ui_events.py 文件中。
>     - **Change Screen**：你可以使用此动作在不同屏幕之间切换。
>       - **Screen to** - 你想要切换到的屏幕
>       - **Fade mode** - 切换屏幕时的动画效果
>       - **Speed** - 切换屏幕的速度
>       - **Delay** - 切换屏幕的延时
>     - **Increment Arc**：你可以修改 Arc 组件的数值。
>     - **Increment Bar**：你可以修改 Bar 组件的数值。
>     - **Increment Slider**：你可以修改 Slider 组件的数值。
>     - **Modify Flag**：你可以修改组件的标志状态。
>     - **Play Animation**：你可以播放在 Animation Panel 中创建的动画。
>       - **Animation** - 选中的动画
>       - **Target** - 你希望应用动画的目标组件
>       - **Delay** - 动画的延时时间
>     - **Set Opacity**：设置选定组件的不透明度。
>     - **Set Flag**：为组件的标志状态设置值。
>     - **Set Property**：更改组件的属性值。
>     - **Set text value from arc**：使用此动作，在 Label 组件上显示 Arc 组件的数值。
>     - **Set text value from slider**：使用此动作，在 Label 组件上显示 Slider 组件的数值。
>     - **Set text value when checked**：根据目标对象的选中或未选中状态更改 Label 组件的文本。

##### Panel 使用方法

总结一下，如果我需要在表盘的上半部分显示专辑图片，那么我需要调整 Panel 的坐标和大小，并设置背景图片。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/8.png" style={{width:1000, height:'auto'}}/></div>

:::note
为了尽可能少占用主板上的内存，请尽量将图片压缩到接近表盘分辨率再插入，不要直接放入大图！
:::

然后我们可以在 **Bg Image opa** 中设置图片的透明度。我不希望它完全不透明，因为完全不透明的图片会影响我之后文本的显示。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/9.png" style={{width:1000, height:'auto'}}/></div>

这里需要注意的是，所有组件默认都有边框线，因此为了不影响美观，我们需要去除边框线。实现的方法是将 Border color 的透明度设置为 0。

所以，**如果你想去除任何颜色或任何线段，都可以通过将透明度设置为 0 来实现**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/12.png" style={{width:600, height:'auto'}}/></div>

##### Label 使用方法

接着，我们在中间添加文本（使用 **Label** 组件），用于显示歌手和歌曲名称。在样式中，我们可以更改字体大小、颜色等内容。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/10.png" style={{width:1000, height:'auto'}}/></div>

##### Imgbutton 使用方法

在文本下方，我们添加一些播放组件（使用 **Imgbutton** 组件），例如播放/暂停按钮和切换上一曲/下一曲的按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/11.png" style={{width:1000, height:'auto'}}/></div>

Imgbutton 是一种特殊的按钮，它与普通 Button 最大的区别在于 Imgbutton 可以分别为按下前、按下时和松开后这三种状态配置样式。这个过程与我们按下按钮切换播放状态的场景非常相似。如果你认为上下切换按钮不需要这么复杂的功能，也可以直接使用 Button。

然后我们现在将 Press 和 Release 状态下的按钮图片都设置为播放样式，而只有在 Disable 状态下才是暂停样式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/13.png" style={{width:400, height:'auto'}}/></div>

然后我们添加一个事件，这个事件的功能是，当用户按下按钮时，状态切换为 Disable，从而实现图片切换的效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/14.png" style={{width:500, height:'auto'}}/></div>

如果你想验证效果，可以点击工作区右上角的播放按钮，然后就可以点击播放按钮查看切换效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/15.png" style={{width:600, height:'auto'}}/></div>

##### Arc 使用方法

接着我们添加最后一个组件，也就是音量条和播放进度条。我们将通过使用 Arc 来实现。

对于 Arc，我们主要需要调整的是圆环的颜色和大小。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/16.png" style={{width:1000, height:'auto'}}/></div>

- MAIN：指的是整个 Arc 背后矩形背景的样式设计。MAIN 样式中配置的 **Arc** 并不代表弧形区域本身的样式。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/17.png" style={{width:1000, height:'auto'}}/></div>

- INDICATOR：指的是起始指示区域弧形的样式设置。一般使用的是 INDICATOR 下的 **Arc** 设置。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/18.png" style={{width:1000, height:'auto'}}/></div>

- KNOB：指的是图中这个小圆圈的配置。如果你不需要这个圆圈，可以将它的透明度设置为 0。这个圆圈的大小，需要在 INDICATOR 中的 Arc 里进行设置。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/19.png" style={{width:1000, height:'auto'}}/></div>

这是我想要实现的效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/20.png" style={{width:1000, height:'auto'}}/></div>

如果你已经勾选了可点击，那么你可以点击 Run 按钮并拖动 arc，就可以实现改变音量条的效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/21.png" style={{width:1000, height:'auto'}}/></div>

##### 屏幕切换

在音乐界面基本设计完成后，我们不妨再添加一个新的主界面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/22.png" style={{width:400, height:'auto'}}/></div>

然后设计一个事件，用来将主界面切换到音乐界面。例如，我在这里设计为在主界面下向右滑动手指即可切换到音乐播放界面。

由于主界面是主角，这个事件应该添加到 Screen 下的主界面中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/23.png" style={{width:500, height:'auto'}}/></div>

如果你想要在滑动后有一个缓慢切换的动画效果，那么可以将 Speed 保持在 500；如果你想要立即切换，那么 Speed 应该设置为 0。

##### 指针动画

回到主界面的设计，我们希望添加表盘指针旋转的动画效果。

首先你需要自己绘制秒针、分针和时针。然后以 **Image** 的形式添加到主表盘中。

指针位置的调整需要耐心，因为我们需要确保指针是围绕图片上的某个固定点旋转的。

Transform 用于设置图片的放置位置。下面 Image 选项卡中的 Pivot 用来设置旋转点的坐标。一般的设置方法是，先调整 Transform，确保指针的固定点位于表盘中心，然后再一点点调整 Pivot 的坐标。当所有角度下指针的固定点都不会移动时，这些参数就是最合适的。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/24.png" style={{width:1000, height:'auto'}}/></div>

当你确定好所有指针的位置后，就可以开始添加新的动画效果。不同指针的动画效果设置可以参考下图。

<table align="center">
 <tr>
     <th>Second</th>
     <th>Minute </th>
        <th>Hour</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/25.png" style={{width:300, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/26.png" style={{width:300, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/27.png" style={{width:300, height:'auto'}}/></div></td>
 </tr>
</table>

最后，我们只需要将指针运动的动画设置为在主屏加载时播放即可。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/28.png" style={{width:400, height:'auto'}}/></div>

:::tip
以上教程基本涵盖了 80% 的软件使用场景，其他很多组件也都非常相似。最后，这里给你在使用软件时提供一些小技巧和提示。

1. 你需要将所有具有触摸功能的组件放在最上层，否则会影响组件触摸功能的实现。

    默认情况下，软件最后放置的组件位于最上层。这意味着在 Hierarchy 选项卡中，排在后面的组件往往在最上层。在你刚刚设计的音乐界面中，最上层是用于调节音量大小的 Arc，这就会带来一个问题，因为 Arc 是一个占据整个表盘的矩形，会影响到播放按钮的触摸，所以通常你需要把播放按钮的图层调整到 Arc 图层的上方，这样就不会影响触摸。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/29.png" style={{width:400, height:'auto'}}/></div>

2. 尽可能关闭不需要的功能，以节省更多内存。

    每个组件默认都会勾选一些 Flags，但并不是全部都必需。虽然默认选项一般不会有问题，但关闭不需要的 Flags 会让你的表盘 UI 运行得更流畅。

    比如音乐界面中的背景专辑图，不需要点击也没有动画，把 Flags 中的相关选项关闭就可以了。但关闭时也需要结合实际情况考虑，例如在滑动切换表盘页面的场景中，关闭某些 Flags 的功能会导致滑动失效，所以仍然需要根据运行效果酌情关闭。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/30.png" style={{width:1000, height:'auto'}}/></div>

3. 一定要给所有组件、动画、事件等起一个唯一的名字。

    这个软件只能帮你节省绘制一些图形和动画的时间，更复杂的效果可能还需要你后续通过编程来实现。那么在代码中能够快速找到组件所在的位置就很重要了。给组件、事件和动画命名是关键！

:::

#### Step5. 程序的导出与应用

当你的表盘 UI 绘制完成后，就可以考虑将 UI 导出为程序，并通过 Arduino 上传到 XIAO。点击软件左上角，然后点击 **Export** -> **Create Template Project**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/31.png" style={{width:400, height:'auto'}}/></div>

然后选择保存路径，代码会自动导出。导出的项目模板中会包含以下文件。

- **libraries**：该文件夹目录中提供了你在项目中需要使用的所有库。对于本教程来说，其中的 *lvgl* 和 *TFT_eSPI* 库是**不需要**的，但 *ui* 和 *lv_conf.h* 对我们来说是**有用的**。
- **ui**：里面是 Arduino 的项目程序，即 .ino 文件。
- REANME.md

接下来我们需要做的是，先将所需的库和配置文件放入 Arduino 的 libraries 文件夹中。然后修改 .ino 文件以确保功能可以正常运行。

请将 SquareLine Studio 导出的 libraries 文件夹目录中的 **ui** 文件夹和 **lv_conf.h** 文件复制到 Arduino 库的根目录下。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/101.png" style={{width:1000, height:'auto'}}/></div>

然后，我们可以直接打开 ui 文件夹下的 .ino 文件。接着，我们需要对以下文件进行修改，以确保程序能够顺利编译。

- **ui.ino**：

<table align="center">
 <tr>
  <th>Descriptions</th>
     <th>Screenshot</th>
     <th>Code Segment</th>
 </tr>
 <tr>
  <th>定义要使用的 TFT 库并导入圆形屏幕库</th>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/102.png" style={{width:600, height:'auto'}}/></div></td>
  <td><a href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/blob/f286996e967549de94891a63b58327e488bd46a3/ui/ui.ino#L1" target="_blank"><b>查看示例代码</b></a></td>
 </tr>
    <tr>
  <th>注释掉 tft 类的重复定义</th>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/103.png" style={{width:600, height:'auto'}}/></div></td>
  <td><a href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/blob/f286996e967549de94891a63b58327e488bd46a3/ui/ui.ino#L20" target="_blank"><b>查看示例代码</b></a></td>
 </tr>
 <tr>
  <th>重写触摸函数</th>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/104.png" style={{width:600, height:'auto'}}/></div></td>
  <td><a href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/blob/f286996e967549de94891a63b58327e488bd46a3/ui/ui.ino#L46" target="_blank"><b>查看示例代码</b></a></td>
 </tr>
 <tr>
  <th>添加初始化屏幕函数和初始化触摸函数</th>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/105.png" style={{width:600, height:'auto'}}/></div></td>
  <td><a href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/blob/f286996e967549de94891a63b58327e488bd46a3/ui/ui.ino#L86" target="_blank"><b>查看示例代码</b></a></td>
 </tr>
 <tr>
  <th>屏幕旋转</th>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/106.png" style={{width:600, height:'auto'}}/></div></td>
  <td><a href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/blob/f286996e967549de94891a63b58327e488bd46a3/ui/ui.ino#L94" target="_blank"><b>查看示例代码</b></a></td>
 </tr>
</table>

Then you can choose which XIAO you use to compile and upload.

### 关于 LVGL 库的自定义选项

如果你在编译后遇到某些组件未定义的错误信息，那么很有可能是你没有将 Arduino 库根目录下的 **lv_conf.h** 文件替换为 SquareLine Studio 导出的 **lv_conf.h** 文件。

为了节省主板上的内存，默认提供的 lv_conf.h 文件会禁用部分 lvgl 功能。但如果你在表盘绘制中使用了这些功能，就需要手动将它们打开。

- **Windows** 系统中 `lv_conf.h` 的默认路径为：

`C:\Users\{UserName}\Documents\Arduino\libraries`

- **MacOS** 系统中 `lv_conf.h` 的默认路径为：

`\Users\{UserName}\Documents\Arduino\libraries`

以一个简单的例子来说，在上面的示例中，我们使用了 `MONTSERRAT 8` 字体，但默认情况下该字体是关闭的，所以在编译过程中可能会出现错误。

然后我们需要做的就是将 lv_conf.h 文件中该字体后面的 0 改为 1，这意味着启用该字体。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/38.png" style={{width:600, height:'auto'}}/></div>

如果你遇到类似的错误，可以再次确认是否启用了相应的自定义功能。

### 基于 LVGL 的表盘程序

我们为圆形屏幕制作了两种表盘样式供用户参考。由于 UI 逻辑较为复杂，这将对 XIAO 主板的性能和内存有一定要求。如果你的 XIAO 在编译以下表盘程序时出现内存不足错误，那么你可能需要升级你的 XIAO，或者减少表盘的功能。

- 表盘样式 I：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/tree/main/ui" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载代码</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<!-- - Dial Style II:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/tree/main/tft_espi-base-dial" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Code</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div> -->

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺利。我们提供了多种交流渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
