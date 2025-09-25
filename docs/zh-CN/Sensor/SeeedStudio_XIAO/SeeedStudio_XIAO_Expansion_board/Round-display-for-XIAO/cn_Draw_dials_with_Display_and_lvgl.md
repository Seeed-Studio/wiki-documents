---
description: 在 Seeed Studio Round Display for XIAO 上使用 LVGL 和 TFT
title: 为所有 XIAO 系列使用 LVGL 和 TFT
keywords:
- XIAO
- Round Dislay
- lvgl
- draw dials
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/using_lvgl_and_tft_on_round_display
last_update:
  date: 09/12/2024
  author: Citric
---

# 在 Seeed Studio Round Display for 所有 XIAO 系列上使用 LVGL 和 TFT

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/000.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

<br></br>


感谢您购买 Seeed Studio Round Display 产品。在本教程的这一部分中，我们将重点介绍如何使用 `Seeed_GFX` 库和 `LVGL` 库在 Round Display 上绘制各种丰富有趣的表盘图案，并从简单到深入地介绍这两个有用但复杂的库的一些常用函数的用法。通过本教程的内容，我希望您能够使用这个产品绘制出您理想的表盘图案。祝您学习愉快！

## 入门指南

在您开始学习之前，我们希望您为以下内容做好准备。

### 硬件准备

为了演示目的，本教程将使用 **XIAO ESP32S3** 作为主控制器。

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

如果您想使用其他 XIAO 产品，本文中的教程和方法同样适用。

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

在安装带有圆形显示屏的 XIAO 时，请让 XIAO 的 Type-C 连接器朝向圆形显示屏的外侧，然后将每个引脚对准双 7 针排针进行连接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/50.jpg" style={{width:500, height:'auto'}}/></div>

### 软件准备

这部分已在[基础 Wiki](https://wiki.seeedstudio.com/cn/get_start_round_display#software-preparation) 中详细描述，因此您可以直接跳转阅读。

## 使用 Seeed_GFX 库绘制简单表盘

[Seeed_GFX](https://github.com/Seeed-Studio/Seeed_GFX)（基于对 TFT_eSPI 库的修改，深度支持 Seeed 的显示产品）是一个功能丰富的 Arduino IDE 兼容图形和字体库，适用于 32 位处理器。XIAO 圆形显示屏提供的 TFT 库基于与 XIAO 和 XIAO 圆形显示屏兼容后的库，支持使用整个 XIAO 系列。

### TFT 库的常用接口

#### 1. 创建 TFT 对象

```c
TFT_eSPI tft = TFT_eSPI()
TFT_eSPI tft = TFT_eSPI(240,240)        // Set the screen size at the time of object creation
```

#### 2. Initialization

```c
void init(uint8_t tc = TAB_COLOUR)
void begin(uint8_t tc = TAB_COLOUR)
```
`tft.begin()` 和 `tft.init()` 是两个功能相同的函数。

#### 3. Clear screen

```c
void fillScreen(uint32_t color) // Fill the screen with a certain color
```

#### 4. 设置屏幕方向

```c
void setRotation(uint8_t r);      // Set the display image rotation direction, r optional parameters for 0, 1, 2, 3
uint8_t getRotation(void)         // Read the current rotation angle
```

0、1、2、3 分别代表 0°、90°、180°、270°，4 是镜像。

#### 5. 颜色转换

```c
uint16_t color565(uint8_t red, uint8_t green, uint8_t blue)    // Convert 8-bit red, green and blue to 16-bit
uint16_t color8to16(uint8_t color332)                          // Convert 8-bit color to 16-bit
uint8_t  color16to8(uint16_t color565)                         // Convert 16-bit color to 8-bit
uint32_t color16to24(uint16_t color565)                        // Convert 16-bit color to 24-bit
uint32_t color24to16(uint32_t color888)                        // Convert 24-bit color to 16-bit
```

#### 6. Color reversal

```c
void invertDisplay(bool i)      //i = true to invert all display colors, i = false to display normally
```

#### 7. Text-related settings

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

从上述函数可以看出，如果您想要打印显示的文本，可以简单地使用 `tft.print()` 函数。

#### 8. 简单形状的绘制

您可以使用以下函数绘制一些简单的形状，包括像素点、直线段、矩形、圆形等。

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

#### 9. 绘制复杂形状

TFT库还为我们提供了绘制复杂形状的方法，如圆角矩形、圆弧、丝滑形状等。

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

#### 10. 变量和文本

除了简单地显示特定字符串外，有时我们需要在屏幕上显示一些变量，如时间和传感器值等。然后，根据变量的类型，您可以选择使用以下不同的函数。

```c
drawChar(int32_t x, int32_t y, uint16_t c, uint32_t color, uint32_t bg, uint8_t size)
drawNumber(long intNumber, int32_t x, int32_t y, uint8_t font) // Draw integer using specified font number. If no font is set (the last parameter, the default font)
drawFloat(float floatNumber, uint8_t decimal, int32_t x, int32_t y, uint8_t font), // Draw float using specified font number. If no font is set (the last parameter, the default font)
drawString(const char *string, int32_t x, int32_t y, uint8_t font),  // Draw string using specified font number. If no font is set (the last parameter, the default font)
```

#### 11. 图像处理

要使用 `pushImage()` 函数通过 TFT 库在屏幕上显示图像，您可以按照以下步骤操作：

- 将图像文件转换为 Arduino 可以识别的 C/C++ 数组格式。您可以使用在线工具如 **Image2CPP** 将位图图像转换为数组格式。

- 在您的 Arduino 程序中包含生成的图像数组文件。

- 初始化 TFT 库和屏幕，设置屏幕分辨率和颜色模式。

- 使用 `tft.pushImage(x, y, width, height, data)` 函数将图像数据推送到屏幕，其中 x 和 y 是图像左上角的坐标，width 和 height 是图像的宽度和高度，data 是图像数组。

```c
// Image data array
const unsigned char image_data[] PROGMEM = {
  // Insert the converted C/C++ array data of the image here
};

tft.pushImage(x, y, image_width, image_height, image_data);
```

#### 12. TFT_eSprite 类

`TFT_eSprite` 和 `TFT_eSPI` 都是用于 TFT LCD 显示屏的 Arduino 库，但它们具有不同的功能和设计目的。

TFT_eSPI 是一个功能强大的库，具有许多高级功能和配置选项，可以实现各种显示效果。它支持多种显示驱动芯片和控制器，并且可以在多个 Arduino 硬件平台上使用。它使用 SPI 接口和高度优化的代码来实现快速刷新率和小的代码占用空间。TFT_eSPI 库可用于各种应用，包括游戏、图形和 GUI。

TFT_eSprite 是 TFT_eSPI 库的补充，主要用于在显示屏上绘制小精灵，如游戏角色、图标、文本等。TFT_eSprite 可以实现更快的绘制速度，因为它将图像缓存在内存中并执行部分刷新。这允许在更新小精灵时获得更快的刷新率，并且可以节省处理器时间和内存空间。

因此，TFT_eSPI 是一个功能强大的通用库，适用于多种应用，而 TFT_eSprite 是一个专注于绘制小精灵的库，可以提供更高的绘制效率。

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

TFT_eSprite 库的一般使用格式如下。

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
在上述示例代码中，当程序退出 `loop()` 函数时，会调用 `spr.deleteSprite();` 来删除 TFT_eSprite 对象并释放内存空间。这样，在下一次循环中创建 TFT_eSprite 对象时，可以使用之前释放的内存空间，避免浪费内存资源。
:::

有关 TFT 库函数及其使用的更多信息，我们建议阅读库中的 **TFT_eSPI.h** 和 **TFT_eSPI.cpp** 文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/1.png" style={{width:300, height:'auto'}}/></div>

### 关于 TFT 库自定义选项

有时我们需要使用一些自定义字体库或一些为了节省空间而未启用的功能。此时我们需要修改 **Setup66_Seeed_XIAO_Round.h** 文件的内容。

- 在 **Windows** 系统上，此文件的默认路径是：

`C:\Users\{UserName}\Documents\Arduino\libraries\Seeed_GFX\User_Setups\Setup66_Seeed_XIAO_Round.h`

- 在 **MacOS** 系统上，此文件的默认路径是：

`\Users\{UserName}\Documents\Arduino\libraries\Seeed_GFX\User_Setups\Setup66_Seeed_XIAO_Round.h`

请根据实际使用情况开启或关闭一些不必要的功能。
例如，如果您想使用自定义字体，那么您应该取消注释 `#define SMOOTH_FONT`，否则，运行时可能会出现错误。

当然，您的自定义字体的头文件应该保存在与 ino 文件相同的目录中，这是避免错误的必要步骤。

### 基于 TFT 的表盘示例程序

我们为圆形显示屏编写了一个可以直接使用的表盘程序。由于某些 XIAO 型号的内存空间限制，此程序仅执行基本的指针移动功能，没有设计其他功能。用户可以使用此程序学习 TFT 库的使用和指针移动功能，并根据实际情况完成更复杂表盘的开发。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/tree/main/tft_espi-base-dial" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载代码</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

## 使用 LVGL 库绘制简单表盘

LVGL 库是一个通用的嵌入式图形库，提供了丰富的图形用户界面控件，如按钮、标签、列表等，可用于构建各种用户界面。与 TFT 库不同，LVGL 库提供了抽象的、面向对象的图形接口，更易于使用和维护，但可能会带来一些性能和可靠性的权衡。

在构建复杂用户界面时，LVGL 库是一个非常有用的工具，可以减少编写和维护代码的工作量。而 TFT 库则更适合一些需要高性能图形的应用，如实时图像处理、视频渲染等。

### LVGL 库的常用接口

LVGL 库的 API 非常丰富和复杂，我们希望每个使用 LVGL 的人都能花时间阅读官方的 LVGL 介绍文档。

- [入门指南](https://docs.lvgl.io/latest/en/html/get-started/index.html)
- [显示接口](https://docs.lvgl.io/latest/en/html/porting/display.html)
- [输入设备接口](https://docs.lvgl.io/latest/en/html/porting/indev.html)
- [时钟接口](https://docs.lvgl.io/latest/en/html/porting/tick.html)
- [操作系统和中断](https://docs.lvgl.io/latest/en/html/porting/os.html)

### 使用 SquareLine Studio 绘制复杂 UI 界面

除了阅读大量的 LVGL 官方文档并编写我们自己的 LVGL 图形程序外，我们还可以使用官方的 LVGL SquareLine Studio 工具来提高开发效率。

接下来，我们将为您简要介绍该软件在圆形屏幕上的使用方法和配置方法，帮助您快速上手使用该软件设计一些界面。

:::caution
我们建议您使用 SquareLine Studio 的 **v1.5.1** 版本。这也是编写本 Wiki 时的最新软件版本。

准备本教程时使用的环境：

1. **[Seeed_GFX 库](https://github.com/Seeed-Studio/Seeed_GFX)**，由 Bodmer 开发，Seeed Studio 修改。

2. **[SeeedStudio_lvgl 库](https://github.com/Seeed-Projects/SeeedStudio_lvgl)**，由 kisvegabor、embeddedt、pete-pjb 开发，Seeed Studio 修改。
:::

#### 步骤1. 下载 SuqareLine Studio

您可以点击[这里](https://squareline.io/)访问 SquareLine Studio 的官方网站，然后点击 **TRY IT FOR FREE** 将软件下载到您的计算机。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/3.png" style={{width:1000, height:'auto'}}/></div>

如果您的计算机是第一次使用此软件，那么您将获得免费的 30 天试用期，如果不是，免费版本也能够绘制多达 5 个页面，使用 50 个小部件。

:::caution
如果您是首次用户，请不要注册登录没有余额的账户，这可能会消耗您完整的 30 天试用期！
:::

#### 步骤2. 配置屏幕界面信息

接下来，我们可以打开软件并开始创建一个空白显示页面。

由于我们使用的是 Arduino 编程，那么我们创建的也需要是 Arduino 文件。

我们的圆形屏幕分辨率为 **240*240**，仅支持 **16bit** 色深。除此之外，项目的名称和主题需要由您定义，这里我将使用深色风格作为主题。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/4.png" style={{width:1000, height:'auto'}}/></div>

如果您像我一样操作太快，忘记设置表盘形状就创建了项目怎么办？没问题，在主界面的左上角，您也可以找到项目设置选项卡来修改刚才的设置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/5.png" style={{width:1000, height:'auto'}}/></div>

:::caution
请注意，请在正式开始绘制之前完成项目设置，并确保它符合我们的屏幕规格，否则您绘制的所有内容可能无法在屏幕上正确显示。

项目创建后并非所有内容都可以修改，比如项目名称。请不要在项目名称中使用英语以外的任何语言或特殊字符，请不要使用 **"-"** 符号，请用 **"_"** 替换 **"-"** 符号。否则，导出的程序在编译时可能会出现错误！
:::

#### 步骤3. 了解软件的功能布局

根据我的使用习惯，我将软件的主界面大致分为以下几个部分。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/6.png" style={{width:1000, height:'auto'}}/></div>

- **层次结构和动画面板**：这个区域允许您设置不同的表盘页面、显示层和动画。

- **小部件**：在这里您可以选择要添加到显示页面上的组件。这些组件与软件集成，可以直接使用。这里没有的组件需要稍后在您自己的编程软件中添加。

- **工作区域**：在工作区中，您可以通过拖放来改变某些组件的位置。更方便的是，最终显示将与工作区中显示的内容一致，所见即所得。

- **资源和控制台**：资源显示您添加的图像片段，这些添加的图像片段可以在支持插入图像的组件中使用。控制台将显示设置过程中发生的一些错误消息（如果有的话）。

- **设置区域**：这里的主要目的是配置组件的属性。

我们将首先对软件界面有一个总体了解，然后我们将带您通过实践来理解每个部分的使用。

#### 步骤4. 使用软件实现您的想法

假设我现在想要绘制一个音乐界面。当然，我太喜欢听音乐了，所以我想绘制一个音乐显示界面作为示例。

我希望在这个音乐显示屏幕中包含以下组件。

- 我最喜欢的音乐的专辑封面作为背景。
- 有一个播放进度条
- 有一个音量控制条
- 有一个播放和暂停按钮

整理好我们的需求后，我们接下来需要自下而上地设计显示组件，就像建造建筑物一样。

第一步是创建一个音乐背景图像。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/7.png" style={{width:1000, height:'auto'}}/></div>

在小部件中选择 **Panel**，您可以点击它，它将自动放置在表盘的中心，或者您可以将其拖动到您想要放置的表盘位置。

我们将把显示的图像放在 Panel 中，而不是直接放在表盘背景上，因为我不喜欢整个表盘都是这个图像，而且 Panel 可以自由调整大小。

此时，您可以看到设置区域中已经有一系列我们可以设置的属性。每个组件的设置通常都很相似，可能有一两个选项会稍有不同。

> **Name**：您应该为小部件命名。名称的开头不能有数字、下划线或特殊字符。导出代码后，您可以通过该名称找到小部件。

> **Layout**：您可以使用布局来自动排列小部件的子元素。如果启用了布局，子元素的 X 和 Y 值无法手动调整，除非在子元素上启用了 `IGNORE_LAYOUT` 或 `FLOATING` 标志。

> **Main Flags**
>
> - **Hidden** - 使对象隐藏。（就像它根本不存在一样。）
> - **Clickable** - 使对象可被输入设备点击
> - **Click focusable** - 点击时为对象添加聚焦状态
> - **Checkable** - 点击对象时切换选中状态
> - **Snappable** - 如果在父级上启用了滚动捕捉，它可以捕捉到此对象
> - **Press lock** - 即使按压从对象上滑开，也保持对象被按压
> - **Event bubble** - 将事件也传播到父级
> - **Gesture bubble** - 将事件也传播到父级
> - **Adv hittest** - 允许执行更准确的命中（点击）测试。例如考虑圆角
> - **Ignore layout** - 使对象可被布局定位
> - **Floating** - 当父级滚动时不滚动对象并忽略布局

> **Scroll Flags**
>
> - **Scrollable** - 使对象可滚动
> - **Scroll elastic** - 允许在内部滚动但速度较慢
> - **Scroll momentum** - 使对象在"抛掷"时滚动得更远
> - **Scroll one** - 只允许滚动一个可捕捉的子元素
> - **Scroll chain** - 允许将滚动传播到父级
> - **Scroll on focus** - 聚焦时自动滚动对象使其可见

>**Scroll Settings**
>
> - **Scroll direction** - 根据配置显示滚动条
> - **Scrollbar mode** - 根据配置的模式显示滚动条。存在以下模式：
>   - **Off** - 从不显示滚动条
>   - **On** - 始终显示滚动条
>   - **Active** - 在对象被滚动时显示滚动条
>   - **Auto** - 当内容足够大需要滚动时显示滚动条

> **States**：对象可以处于以下状态的组合中：
>
> - **Clickable** - 切换或选中状态
> - **Disable** - 禁用状态
> - **Focusable** - 通过键盘或编码器聚焦或通过触摸板/鼠标点击聚焦
> - **Pressed** - 正在被按压

> **Style settings**：样式可用于为小部件或其部分添加效果。您可以添加自定义背景颜色、边框、阴影等。在样式设置中，您可以添加或修改这些参数的值。
>
> **State**：您可以为每个状态创建自定义样式。
>
> **Style Properties**：样式属性是要为样式设置的参数。
>
> - **Arc**：弧形样式可用于具有弧形组件的小部件。
>   - **Line color** - 线条的颜色
>   - **Arc width** - 弧形的宽度
>   - **Arc rounded** - 弧形线条的端点是圆形的
>   - **Arc image** - 弧形线条的背景图像
> - **Background**：背景样式是小部件的背景。您可以创建渐变或使背景的角变圆。
>   - **Color and alpha** - 设置对象的背景颜色和透明度。
>   - **Gradient color** - 设置背景的渐变颜色。
>   - **Bg main stop** - 设置渐变背景颜色应该开始的点。
>   - **Bg gradinet stop** - 设置背景渐变颜色应该开始的点
>   - **Bg radius** - 用于使背景角变圆的半径
>   - **Gradient direction** - 渐变的方向。可以是水平或垂直。
>   - **Clip corner** - 启用以在圆角上裁剪溢出的内容。
> - **Background Image**：您可以设置图像作为背景图像。
>   - **Bg image** - 用作背景图像的图像
>   - **Bg image opa** - 背景图像的不透明度
>   - **Recolor** - 使用重新着色功能，您可以在背景图像上使用颜色。通过更改透明度参数来设置颜色深度。
>   - **Bg image tiled** - 如果启用，背景图像将平铺
> - **Blend**：通过使用混合样式，您可以将当前小部件部分的像素颜色与后面对象的颜色混合。
>   - **Blend mode** - 从四个选项中选择。
>     - **Normal** - 默认状态
>     - **Additive** - 像素相加
>     - **Subtractive** - 像素相减
>     - **Multiply** - 像素相乘
>   - **Blend opacity** - 在这里您可以设置小部件部分的不透明度
> - **Border**：使用边框，您可以在选定对象的内线周围绘制边框。
>   - **Border color** - 边框的颜色
>   - **Border width** - 边框的宽度
>   - **Border side** - 边框的方向
> - **Line**：线条样式可用于具有线条组件的小部件。
>   - **Color** - 线条的颜色
>   - **Width** - 线条的宽度
>   - **Line rounded** - 线条的端点将是圆形的
> - **Outline**：轮廓样式类似于边框样式，但在这里您在选定的小部件部分周围绘制边框。
>   - **Outline color** - 轮廓的颜色
>   - **Outline width** - 轮廓的宽度
>   - **Outline pad** - 距离小部件边缘的像素距离
> - **Paddings**：内边距样式为小部件部分添加内边距。这意味着层次结构中位于其下方的部分将按内边距中定义的像素值距离移动。
>   - **Pad** - 内边距的范围
> - **Shadow**：使用阴影样式，您可以为选定的小部件部分绘制阴影或发光。
>   - **Shadow color** - 阴影的颜色
>   - **Shadow width** - 阴影的宽度
>   - **Shadow spread** - 阴影的深度
>   - **Shadow OX** - 在 X 轴上移动阴影
>   - **Shadow OY** - 在 Y 轴上移动阴影
> - **Text**：文本样式定义小部件上可以找到的文本参数。
>   - **Text color** - 文本的颜色
>   - **Letter spacing** - 字母之间的间距
>   - **Line spacing** - 行之间的间距
>   - **Text align** - 文本对齐的方向
>   - **Text decor** - 您可以为文本添加上划线或下划线
>     - **None** - 普通文本
>     - **Understand** - 下划线文本
>     - **Strikethrough** - 删除线文本
>     - **Text font** - 文本的字体
>
> **Event Properties**：添加事件，您可以为小部件创建不同的交互，例如通过按下按钮来更改屏幕、播放动画等。
>
> - **Add Event**：在检查器面板的底部，您可以找到 ADD EVENT 按钮。首先，您应该为事件命名，然后选择一个触发器来启动它。
>   - **Event name** - 事件的名称
>   - **Event Trigger** - 事件开始的交互
>     - **Pressed** - 对象已被按下
>     - **Clicked** - 对象被按下一小段时间，然后释放。如果滚动则不调用
>     - **Long pressed** - 对象被按下较长时间
>     - **Long pressed repeat** - 在 `long_press_time` 后每 `long_press_repeat_time` 毫秒调用。如果滚动则不调用
>     - **Focused** - 对象被聚焦
>     - **Defocused** - 对象失去聚焦
>     - **Value changed** - 对象的值已更改。
>     - **Ready** - 进程已完成
>     - **Cancel** - 进程已取消
>     - **Screen loaded** - 屏幕已加载，在所有动画完成时调用
>     - **Screen unloaded** - 屏幕已卸载，在所有动画完成时调用
>     - **Screen load start** - 屏幕加载开始，在屏幕更改延迟到期时触发
>     - **Screen unload start** - 屏幕卸载开始，在调用 lv_scr_load/lv_scr_load_anim 时立即触发
>       - **Checked** - 小部件被选中
>       - **Unchecked** - 小部件未被选中
>       - **Gesture** - 手指触摸滑动方向
> - **Add Event**
>   - **Actions**：动作是事件的那些元素，当触发器发生时启动。
>     - **Call function**：使用调用函数动作，您可以添加事件可以引用的函数名称。此函数将在导出过程中创建到 ui__events.c 或 ui_events.py 文件中。
>     - **Change Screen**：您可以使用此动作在屏幕之间切换。
>       - **Screen to** - 您想要切换到的屏幕
>       - **Fade mode** - 切换屏幕时的动画
>       - **Speed** - 切换屏幕的速度
>       - **Delay** - 切换屏幕的延迟
>     - **Increment Arc**：您可以修改弧形小部件的值。
>     - **Increment Bar**：您可以修改条形小部件的值。
>     - **Increment Slider**：您可以修改滑块小部件的值。
>     - **Modify Flag**：您可以修改小部件的标志状态。
>     - **Play Animation**：您可以播放在动画面板中创建的动画。
>       - **Animation** - 选定的动画
>       - **Target** - 您想要在其上使用动画的目标小部件
>       - **Delay** - 动画的延迟时间
>     - **Set Opacity**：选定小部件的不透明度。
>     - **Set Flag**：设置小部件标志状态的值。
>     - **Set Property**：更改小部件的属性值。
>     - **Set text value from arc**：使用此动作在标签小部件上显示弧形小部件的值。
>     - **Set text value from slider**：使用此动作在标签小部件上显示滑块小部件的值。
>     - **Set text value when checked**：根据目标对象的选中或未选中状态更改标签小部件的文本。

##### Panel 使用方法

总结一下，如果我需要在表盘的上半部分显示专辑图片，那么我需要调整 Panel 的坐标和大小，并设置背景图片。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/8.png" style={{width:1000, height:'auto'}}/></div>

:::note
为了在主板上尽可能少地占用内存，请尽可能将图片压缩到表盘的分辨率，不要放置大图片！
:::

然后我们可以在 **Bg Image opa** 中设置图片的透明度。我不希望它完全不透明，因为完全不透明的图片会影响后续文本的显示。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/9.png" style={{width:1000, height:'auto'}}/></div>

这里值得注意的是，所有组件默认都有边框线，所以为了不影响美观，我们需要去除边框线。方法是将 Border color 的透明度设置为 0。

因此，**如果你想去除任何颜色或任何线段，都可以通过将透明度设置为 0 来实现**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/12.png" style={{width:600, height:'auto'}}/></div>

##### Label 使用方法

然后，我们在中间添加文本（使用 **Label** 小部件），显示艺术家和歌曲名称。在样式中，我们可以更改字体大小、颜色和其他内容。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/10.png" style={{width:1000, height:'auto'}}/></div>

##### Imgbutton 使用方法

在文本下方，我们添加一些播放组件（使用 **Imgbutton** 小部件），如播放/暂停按钮和上/下切换曲目按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/11.png" style={{width:1000, height:'auto'}}/></div>

Imgbutton 是一种特殊的按钮，它与普通 Button 的最大区别是 Imgbutton 可以分别配置按下按钮前、按下时和释放后三种状态的样式。这个过程非常类似于我们按下切换播放状态的场景。如果你认为上/下按钮不需要如此复杂的功能，也可以直接使用 Button。

然后我们现在将 Press 和 Release 按钮图片设置为播放样式，只有在 Disable 状态下才是暂停样式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/13.png" style={{width:400, height:'auto'}}/></div>

然后我们添加一个事件，这个事件的功能是，当用户按下按钮时，状态切换到 Disable，这样就实现了图片切换的效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/14.png" style={{width:500, height:'auto'}}/></div>

如果你想验证效果，可以点击工作区右上角的播放按钮，然后你可以点击播放按钮来查看切换效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/15.png" style={{width:600, height:'auto'}}/></div>

##### Arc 使用方法

然后我们添加最后一个组件，即音量条和播放进度条。我们将通过使用 Arc 来实现这一点。

对于 Arc，我们主要需要调整的是环的颜色和大小。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/16.png" style={{width:1000, height:'auto'}}/></div>

- MAIN：这是指整个 Arc 后面矩形背景的样式设计。在 MAIN 样式中配置的 **Arc** 并不表示弧形区域的样式。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/17.png" style={{width:1000, height:'auto'}}/></div>

- INDICATOR：指起始指示区域弧形的样式设置。通常使用 INDICATOR 下的 **Arc** 设置。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/18.png" style={{width:1000, height:'auto'}}/></div>

- KNOB：这是指图像上这个圆圈的配置。如果你不需要这个圆圈，可以将其透明度设置为 0。这个圆圈的大小，你需要在 INDICATOR 中的 Arc 内设置。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/19.png" style={{width:1000, height:'auto'}}/></div>

这是我想要实现的效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/20.png" style={{width:1000, height:'auto'}}/></div>

如果你已经勾选了可点击，那么你可以点击运行按钮并拖动弧形，然后你可以实现改变音量条的效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/21.png" style={{width:1000, height:'auto'}}/></div>

##### 屏幕切换

音乐界面设计得差不多了，我们不妨接下来添加一个新的主界面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/22.png" style={{width:400, height:'auto'}}/></div>

然后设计一个将主屏幕切换到音乐屏幕的事件。例如，我在这里设计通过在主界面下向右滑动手指来切换到音乐播放界面。

由于主界面是主角，这个事件应该添加到 Screen 下的主界面中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/23.png" style={{width:500, height:'auto'}}/></div>

如果您希望在幻灯片后有一个缓慢切换的动画效果，那么速度可以保持在 500，如果您希望立即切换，那么速度应该设置为 0。

##### 指针动画

回到主界面的设计，我们想要添加表盘指针旋转的动画效果。

首先需要做的是您需要绘制自己的秒针、分针和时针。然后以**图像**的样式将其添加到主表盘中。

指针位置调整需要耐心，因为我们需要确保指针围绕图片上的固定点旋转。

Transform 用于设置图像位置。下方图像选项卡中的 Pivot 设置旋转点的坐标。设置的一般方法是首先调整 Transform 以确保指针的固定点位于表盘中心，然后稍微调整 Pivot 的坐标。当所有角度都能使指针固定点不移动时，这些参数就是最合适的。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/24.png" style={{width:1000, height:'auto'}}/></div>

一旦确定了所有指针位置，您就可以开始添加新的动画效果。不同指针的动画效果设置可以在下图中找到。

<table align="center">
 <tr>
     <th>秒针</th>
     <th>分针</th>
        <th>时针</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/25.png" style={{width:300, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/26.png" style={{width:300, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/27.png" style={{width:300, height:'auto'}}/></div></td>
 </tr>
</table>

最后，我们只需设置指针移动的动画在主屏幕加载时播放。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/28.png" style={{width:400, height:'auto'}}/></div>

:::tip
上述教程基本涵盖了80%的软件使用场景，其他许多组件都非常相似。最后，这里为您提供一些使用软件时的技巧和提示。

1. 您需要将所有具有触摸功能的组件放在顶层，否则会干扰组件触摸功能的实现。

    默认情况下，软件最后放置的组件位于顶层。这意味着在层次结构选项卡中，相邻排列的组件往往位于顶层。在您刚刚设计的音乐界面中，顶层是用于调节音量大小的弧形组件，这会造成问题，因为弧形组件是一个占据整个表盘的矩形，会影响播放按钮的触摸，所以通常您需要将播放按钮的层级调整到弧形组件层级的顶部，这样就不会影响触摸。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/29.png" style={{width:400, height:'auto'}}/></div>

2. 尽可能关闭不需要的功能以节省更多内存。

    每个组件默认都会勾选一些标志，但并非所有标志都是必需的。虽然默认设置不会有问题，但关闭不需要的标志会让您的表盘UI运行更流畅。

    比如音乐界面中的背景专辑图片，不需要点击也没有动画，关闭标志中的选项是很好的。但关闭也需要考虑实际情况，例如在滑动切换表盘页面的场景中，关闭某些标志的功能会使滑动失效，所以仍需要根据效果的实际运行情况酌情关闭。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/30.png" style={{width:1000, height:'auto'}}/></div>

3. 务必为所有组件、动画、事件等提供唯一的名称。

    软件只能为您节省绘制一些图案和动画的时间，但更复杂的效果可能需要您稍后编程来实现。那么能够在代码中快速找到组件的位置就很重要了。为组件、事件和动画命名是关键！

:::

#### 步骤5. 程序的导出和应用

一旦您的表盘UI绘制完成，您可以考虑将UI导出为程序并通过Arduino上传到XIAO。点击软件左上角，然后点击**Export** -> **Create Template Project**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/31.png" style={{width:400, height:'auto'}}/></div>

然后选择保存路径，代码将自动导出。导出的项目模板将包含以下文件。

- **libraries**：此文件夹目录提供了您在项目中需要使用的所有库。对于我们的教程，此目录中的*lvgl*和*TFT_eSPI*库是**不需要的**，但*ui*和*lv_conf.h*对我们是**有用的**。
- **ui**：内部是Arduino的项目程序，即.ino文件。
- REANME.md

那么我们需要做的是，首先将所需的库和配置文件放入Arduino的libraries文件夹中。然后修改.ino文件以确保功能正常工作。

请将SquareLine Studio导出的libraries文件夹目录中的**ui**文件夹和**lv_conf.h**文件复制到您的Arduino库的根目录。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/101.png" style={{width:1000, height:'auto'}}/></div>

然后，我们可以直接打开ui文件夹下的.ino文件。接下来，我们需要对以下文件进行更改以确保程序能够顺利编译。

- **ui.ino**：

<table align="center">
 <tr>
  <th>描述</th>
     <th>截图</th>
     <th>代码段</th>
 </tr>
 <tr>
  <th>定义要使用的TFT库并导入圆形屏幕库</th>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/102.png" style={{width:600, height:'auto'}}/></div></td>
  <td><a href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/blob/f286996e967549de94891a63b58327e488bd46a3/ui/ui.ino#L1" target="_blank"><b>查看示例代码</b></a></td>
 </tr>
    <tr>
  <th>注释掉tft类的重复定义</th>
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

然后您可以选择您使用的 XIAO 来编译和上传。

### 关于 LVGL 库自定义选项

如果您在编译后遇到某些组件未定义的错误消息，那么您很可能没有将 Arduino 库根目录中的 **lv_conf.h** 文件替换为 SquareLine Studio 导出的 **lv_conf.h** 文件。

为了节省主板上的内存，lv_conf.h 文件默认禁用了一些 lvgl 功能。但是如果您在表盘绘制中使用了这些功能，您需要手动启用它们。

- **Windows** 系统上 `lv_conf.h` 的默认路径是：

`C:\Users\{UserName}\Documents\Arduino\libraries`

- **MacOS** 系统上 `lv_conf.h` 的默认路径是：

`\Users\{UserName}\Documents\Arduino\libraries`

作为一个简单的例子，在上面的示例中，我们使用了 `MONTSERRAT 8` 字体，但默认情况下这个字体是关闭的，所以在编译过程中可能会出现错误。

那么我们需要做的就是在 lv_conf.h 文件中将这个字体后面的 0 改为 1，这意味着启用了该字体。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/38.png" style={{width:600, height:'auto'}}/></div>

如果您遇到类似的错误，您可以再次检查自定义功能是否已启用。

### 基于 LVGL 的表盘程序

我们为圆形屏幕创建了两种表盘样式供用户参考。由于复杂的 UI 逻辑，这将需要 XIAO 主板上一定的性能和内存。如果您的 XIAO 在编译以下表盘程序时出现内存不足错误，那么您可能需要升级您的 XIAO 或减少表盘的功能。

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

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
