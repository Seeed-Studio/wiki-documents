---
description: Using LVGL and TFT on the Seeed Studio Round Display for XIAO
title: 显示软件应用（LVGL 和 TFT）教程
keywords:
- XIAO
- Round Dislay
- lvgl
- draw dials
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/using_lvgl_and_tft_on_round_display
last_update:
  date: 11/09/2023
  author: Chen Lei
---

# 在 基于 XIAO 的圆形显示器上使用 LVGL 和 TFT 软件显示库

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/000.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html">
            <strong><span><font color={'FFFFFF'} size={"4"}>点击购买🖱️</font></span></strong>
    </a>
</div>
传感器/SeeedStudio_XIAO/SeeedStudio XIAO 扩展板/适用于 XIAO 的圆形显示屏/使用Display和lvgl绘制刻度盘
<br></br>


感谢您购买Seeed Studio圆形显示产品。在本教程的这一部分中，我们将重点介绍如何使用“TFT\u eSPI”库和“LVGL”库在圆形显示器上绘制各种丰富有趣的拨号图案，并从简单到深入介绍这两个有用但复杂的库的一些常用函数的用法。通过本教程的内容，我希望您可以使用此产品绘制理想的拨号模式。有一个伟大的学习经验！

## 快速入门

在您进入研究之前，我们希望您做好以下准备。

### 硬件准备

为了便于演示，本教程将使用**XIAO ESP32S3**作为主控件。
<table align="center">
	<tr>
	    <th>Seeed Studio适用于XIAO圆形显示屏</th>
	    <th>Seeed Studio XIAO ESP32S3</th>
	</tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/rounddisplay.jpg" style={{width:210, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
	<tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html"> 
            <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>
如果您想使用其他XIAO产品，本文中的教程和方法也适用。

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
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

安装带有圆形显示屏的XIAO时，请使XIAO的C型连接器朝向圆形显示屏的外侧，然后将每个引脚连接到双7引脚头上。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/50.jpg" style={{width:500, height:'auto'}}/></div>

### 软件准备

此部分在 [基础知识库](https://wiki.seeedstudio.com/get_start_round_display#software-preparation), 因此您可以直接跳转阅读。

## 使用TFT eSPI库绘制简单拨号盘

`TFT\ueSPI`是一个功能丰富的Arduino IDE兼容图形和字体库，适用于32位处理器。XIAO-Round Display提供的TFT库基于XIAO与XIAO-Round Display兼容后的库，支持整个XIAO系列的使用。

### TFT库通用接口

#### 1.创建TFT对象

```c
TFT_eSPI tft = TFT_eSPI()
TFT_eSPI tft = TFT_eSPI(240,240)        // Set the screen size at the time of object creation
```

#### 2.初始化

```c
void init(uint8_t tc = TAB_COLOUR)
void begin(uint8_t tc = TAB_COLOUR)
```

`tft.begin()` 和 `tft.init()` 是两个具有相同功能的函数。

#### 3. 清空屏幕

```c
void fillScreen(uint32_t color) // Fill the screen with a certain color
```

#### 4. 设置屏幕方向

```c
void setRotation(uint8_t r);      // Set the display image rotation direction, r optional parameters for 0, 1, 2, 3
uint8_t getRotation(void)         // Read the current rotation angle
```

0、1、2、3表示0°、90°、180°、270°。分别为，4为镜像。

#### 5. 颜色转换

```c
uint16_t color565(uint8_t red, uint8_t green, uint8_t blue)    // Convert 8-bit red, green and blue to 16-bit
uint16_t color8to16(uint8_t color332)                          // Convert 8-bit color to 16-bit
uint8_t  color16to8(uint16_t color565)                         // Convert 16-bit color to 8-bit
uint32_t color16to24(uint16_t color565)                        // Convert 16-bit color to 24-bit
uint32_t color24to16(uint32_t color888)                        // Convert 24-bit color to 16-bit
```

#### 6. 彩色反转

```c
void invertDisplay(bool i)      //i = true to invert all display colors, i = false to display normally
```

#### 7. 与文本相关的设置

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

从上面的函数可以看出，如果要打印显示的文本，只需使用'tft.print（）'函数即可。

#### 8. 简单形状的绘制

您可以使用以下功能绘制一些简单的形状，包括像素点、直线段、矩形、圆等。

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

#### 9. 复杂形状的绘制

TFT库还为我们提供了绘制复杂形状的方法，例如圆形矩形、圆形圆弧、丝般光滑的形状等。

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
除了简单地显示特定的字符串外，有时还需要在屏幕上显示一些变量，如时间和传感器值等。然后，根据变量的类型，可以选择使用以下不同的函数。

```c
drawChar(int32_t x, int32_t y, uint16_t c, uint32_t color, uint32_t bg, uint8_t size)
drawNumber(long intNumber, int32_t x, int32_t y, uint8_t font) // Draw integer using specified font number. If no font is set (the last parameter, the default font)
drawFloat(float floatNumber, uint8_t decimal, int32_t x, int32_t y, uint8_t font), // Draw float using specified font number. If no font is set (the last parameter, the default font)
drawString(const char *string, int32_t x, int32_t y, uint8_t font),  // Draw string using specified font number. If no font is set (the last parameter, the default font)
```

#### 11、图像处理
要使用“pushImage（）”函数在TFT库的屏幕上显示图像，可以执行以下步骤：

- 将图像文件转换为Arduino可以识别的C/C++数组格式。您可以使用联机工具（如**Image2CPP**）将位图图像转换为数组格式。
- 在Arduino程序中包含生成的图像数组文件。
- 初始化TFT库和屏幕，设置屏幕分辨率和颜色模式。
- 使用“tft.pushImage（x，y，width，height，data）”功能将图像数据推送到屏幕上，其中x和y是图像左上角的坐标，width和height是图像的宽度和高度，data是图像数组。

```c
// Image data array
const unsigned char image_data[] PROGMEM = {
  // Insert the converted C/C++ array data of the image here
};

tft.pushImage(x, y, image_width, image_height, image_data);
```

#### 12、 `TFTe Sprite` 类

`TFT\u eSprite`和`TFT\u eSPI`都是用于TFT-LCD显示器的Arduino库，但它们具有不同的功能和设计目的。

TFT\u eSPI是一个功能强大的库，具有许多高级功能和配置选项，可以实现各种显示效果。它支持多种显示驱动芯片和控制器，可用于多种Arduino硬件平台。它使用SPI接口和高度优化的代码来实现快速的刷新率和较小的代码占用。TFT\U eSPI库可用于各种应用程序，包括游戏、图形和GUI。

TFT\u eSprite是TFT\u eSPI库的补充，主要用于在显示器上绘制小精灵，如游戏角色、图标、文本等。TFT\u eSprite可以实现更快的绘制速度，因为它将图像缓存在内存中并执行部分刷新。这使得更新小精灵时刷新速度更快，并且可以节省处理器时间和内存空间。

因此，TFT\u eSPI是一个功能强大的通用库，适用于多种应用程序，而TFT\u eSprite是一个专注于绘制小精灵的库，可以提供更高的绘制效率。

使用TFT\U eSPI库的一般格式如下所示。

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

使用`TFT\u eSprite`库的一般格式如下所示。

```c
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

:::笔记
在上面的示例代码中，当程序退出'loop（）'函数时，'spr.deleteSprite（）；`调用以删除TFT\u eSprite对象并释放内存空间。这样，在下一个循环中创建TFT\u eSprite对象时，可以使用先前释放的内存空间来避免浪费内存资源。:::

有关TFT库函数及其使用的详细信息，建议阅读库中的**TFT\u eSPI.h**和**TFT\u eSPI.cpp**文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/1.png" style={{width:400, height:'auto'}}/></div>

### 关于TFT库自定义选项
有时我们需要使用一些自定义字体库或一些未启用的功能来节省空间。此时，我们需要修改**Setup66\u Seeed\u XIAO\u RoundDisplay.h**文件的内容。

- 此文件在**Windows**系统上的默认路径为：

`C： \Users \{UserName}\Documents\Arduino\libraries\TFT\u eSPI\User\u Setups\Setup66\u Seeed\u XIAO\u RoundDisplay.h`
- 此文件在**MacOS**系统上的默认路径为：
`\用户\{UserName}\Documents\Arduino\libraries\TFT\u eSPI\User\u Setups\Setup66\u Seeed\u XIAO\u RoundDisplay.h`

请根据实际使用情况开启或关闭一些不必要的功能。
例如，如果要使用自定义字体，则应取消注释“\define SMOOTH\u FONT”，否则在运行时可能会出错。

当然，自定义字体的头文件应该保存在与ino文件相同的目录中，这是避免错误的必要步骤。

### 基于TFT的拨号采样程序

我们编写了一个圆形显示的拨号程序，可以直接使用。由于部分肖氏模型的内存空间有限，本程序只执行基本的手部运动功能，不适用于其他功能。用户可以使用本程序学习TFT库的使用和指针移动的功能，并根据实际情况完成更复杂的表盘的开发。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/tree/main/tft_espi-base-dial">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载代码</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

## 使用LVGL库绘制简单拨号盘

LVGL库是一个通用嵌入式图形库，它提供了一组丰富的图形用户界面控件，如按钮、标签、列表等，可用于构建各种用户界面。与TFT库不同，LVGL库提供了一个抽象的、面向对象的图形界面，该界面更易于使用和维护，但可能需要在性能和可靠性方面进行权衡。

在构建复杂的用户界面时，LVGL库是非常有用的工具，可以减少编写和维护代码的工作量。另一方面，TFT库更适合于实时图像处理、视频渲染等需要高性能图形的应用。

### LVGL库通用接口
LVGL库API非常丰富和复杂，我们希望每个使用LVGL的人都能花时间阅读正式的LVGL介绍文档。
- [快速入门](https://docs.lvgl.io/latest/en/html/get-started/index.html)
- [显示界面](https://docs.lvgl.io/latest/en/html/porting/display.html)
- [输入设备接口](https://docs.lvgl.io/latest/en/html/porting/indev.html)
- [勾选界面](https://docs.lvgl.io/latest/en/html/porting/tick.html)
- [操作系统和中断](https://docs.lvgl.io/latest/en/html/porting/os.html)

### 使用SquareLine Studio绘制复杂UI界面

除了阅读大量的LVGL官方文档和编写我们自己的LVGL图形程序之外，我们还可以使用官方的LVGL SquareLine Studio工具来提高开发效率。

接下来，我们将给您简要介绍一下圆屏软件的使用、配置方法，帮助您快速入门，使用该软件设计一些界面。

：：：注意
我们建议您使用**v1.2.3**版本的SquareLine Studio。测试后，v1.3.0版本可能与tft\U eSPI库存在兼容性问题。

编写本教程时使用的环境：
1.*[TFT\U eSPI库](https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/blob/main/libraries/TFT_eSPI.zip)**Bodmer，版本：**2.5.22**
2.*[LVGL库](https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/tree/main/libraries/lvgl)**作者：kisvegabor，embeddedt，pete pjb，版本：**8.2.0**
：：：

#### 步骤1。下载SuqareLine Studio

点击【此处】可进入SquareLine Studio官网(https://squareline.io/)，然后单击**免费试用**将软件下载到您的计算机。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/3.png" style={{width:1000, height:'auto'}}/></div>

如果你的电脑是第一次使用这个软件，那么你将得到一个30天的免费试用，如果没有，免费版本也可以起草多达5页，使用50个小部件。

：：：注意
如果您是第一次使用，请不要注册登录到您的帐户，没有余额，它可能会花费您整个30天的试用期！：：：

#### 步骤2。配置屏幕界面信息
接下来，我们可以打开软件，并通过创建一个空白的显示页面开始。

因为我们使用的是Arduino编程，所以我们创建的也是Arduino文件。
我们的圆形屏幕的屏幕分辨率为**240*240**，仅支持**16位**色深。除此之外，项目的名称和主题需要由您定义，这里我将使用黑色样式作为主题。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/4.png" style={{width:1000, height:'auto'}}/></div>

如果你太快了，像我一样，忘了设置表盘的形状和创建项目呢？没问题，在主界面的左上角，您还可以找到“项目设置”选项卡，对您刚才所做的设置进行更改。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/5.png" style={{width:1000, height:'auto'}}/></div>

：：：注意
请注意，请完成您的项目设置之前，您正式开始绘图，并确保它符合我们的屏幕规格，否则您所画的一切可能无法正确显示在屏幕上。
创建项目后，并非所有内容都可以修改，例如项目名称。请不要在项目名称中使用英语以外的任何语言或特殊字符，请不要使用***“-”**符号，请将***“-”**符号替换为***“\u”***。否则，导出的程序在编译过程中可能会出错！
：：：

#### 步骤3.了解软件的功能布局

根据我的使用习惯，我将软件的主界面大致分为以下几个部分。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/6.png" style={{width:1000, height:'auto'}}/></div>

- **层次结构和动画窗格**：此区域允许您设置不同的拨号页、显示层和动画。

- **小部件**：这里您可以选择要在显示页面上添加的组件。这些组件与软件集成，可以直接使用。此处不可用的组件需要稍后添加到您自己的编程软件中。

- **工作区**：在工作区中，您可以通过拖放某些组件来更改它们的位置。更方便的是，最终显示将与工作区中显示的内容一致，因此您看到的就是您得到的。

-**资源和控制台**：资源显示您添加的图像剪辑，这些添加的图像剪辑可以在支持插入图像的组件中使用。控制台将显示设置时出现的一些错误消息（如果有）。

-**设置区域**：此处的主要目的是配置组件的属性。

我们将首先对软件界面有一个基本的了解，然后我们将带您通过实践了解每个部分的使用。

#### 步骤4。使用软件实现您的想法

假设我现在想画一个音乐界面。当然，我太喜欢听音乐了，所以我想画一个音乐显示界面作为例子。

我想在这个音乐显示屏上有以下组件。
- 专辑封面艺术以我最喜欢的音乐为背景。
- 有播放进度条
- 要使用音量控制栏
- 使用播放和暂停按钮
在整理了需求之后，我们需要自下而上地设计显示组件，就像构建一个建筑一样。

第一步是创建音乐背景图像。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/7.png" style={{width:1000, height:'auto'}}/></div>

在窗口小部件中选择**面板**，点击该面板将自动放置在表盘的中心位置，也可以将其拖动到要放置表盘的位置。

我们将把显示的图像在面板中，而不是直接在拨号背景上，因为我不喜欢整个拨号盘是这个图像，面板可以自由调整大小。

此时，您可以看到在设置区域中已经有一系列可以设置的属性。每个组件的设置通常相似，有一个或两个选项可能略有不同。
>**名称**：您应该为小部件命名。名称开头不能有数字、下划线或特殊字符。导出代码后，您可以通过该名称找到小部件。

>**布局**：您可以使用布局自动排列小部件的子级。如果启用布局，则无法手动调整子级的X和Y值，除非在子级上启用了“忽略布局”或“浮动”标志。

>**主标志**

>- **隐藏**-隐藏对象。（好像根本就没有。）
>- **可点击**-通过输入设备使对象可点击
>- **单击可聚焦**-单击时将聚焦状态添加到对象
>- **可检查**-单击对象时切换已检查状态
>- **可捕捉**-如果在父对象上启用滚动捕捉，则可以捕捉到此对象
>- **压锁**-即使压具从物体上滑下，也要保持物体处于按下状态
>- **事件气泡**-也将事件传播到父级
>- **手势气泡**-也将事件传播到父级
>- **高级命中测试**-允许执行更精确的命中（单击）测试。E、 g.圆角会计
>- **忽略布局**-使对象可通过布局定位
>- **浮动**-父对象滚动时不滚动对象，忽略布局

>**滚动标志**
>-**可滚动**-使对象可滚动
>- **滚动弹性**-允许内部滚动，但速度较慢
>- **滚动动量**-当“抛出”时，使对象进一步滚动
>- **滚动一个**-仅允许滚动一个可捕捉的子级
>-**滚动链**-允许将滚动传播到父级
>- **聚焦时滚动**-聚焦时自动滚动对象使其可见

>**滚动设置**

>- **滚动方向**-根据配置的
> - **滚动条模式**-滚动条根据配置的模式显示。存在以下模式：
>   - **关闭**-从不显示滚动条
>
>   - **打开** - 始终显示滚动条
>   - **活动**-滚动对象时显示滚动条
>   - **自动**-当内容足够大可以滚动时显示滚动条

>**状态**：对象可以是以下状态的组合：

>- **可点击**-切换或选中状态
>- **禁用**-禁用状态
>- **可聚焦**-通过键盘或编码器聚焦，或
通过触摸板/鼠标单击
>- **按下**-正在按下

>**样式设置**：样式可用于向小部件或其部件添加效果。可以添加自定义背景色、边框、阴影等。在“样式设置”中，可以添加或修改这些参数的值。
>

>**状态**：您可以为每个状态创建自定义样式。
>
>**样式属性**：样式属性是要为样式设置的参数。
>- **Arc**：Arc样式可用于具有Arc组件的小部件。
>   - **线条颜色**-线条的颜色
>   - **弧宽**-弧的宽度
>    - **圆弧圆角**-圆弧线末端为圆角
>    - **圆弧图像**-圆弧线的背景图像
>- **背景**：背景样式是小部件的背景。可以创建渐变或使背景角变圆。
>    - **颜色和alpha**-设置对象的背景颜色和alpha。
>    - **渐变色**-设置背景的渐变色。
>    - **Bg主停止**-设置渐变背景色的起始点。
>    - **Bg gradinet停止**-设置背景渐变颜色的起始点
>- **背景半径**-用于使背景角变圆的半径
>    - **渐变方向**-渐变方向。它可以是水平的，也可以是垂直的。
>- **剪裁角点**-启用剪裁圆角上溢出的内容。
>    - **背景图像**：可以将图像设置为背景图像。
>	- **Bg图像**-用作背景图像的图像
>	- **背景图像opa**-背景图像的不透明度
>	- **Recolor**-使用Recolor功能，可以在背景图像上使用颜色。通过更改alpha参数来设置颜色深度。
>	- **Bg图像平铺**-如果启用，背景图像将平铺
>- **混合**：通过使用混合样式，您可以将当前小部件部分的像素颜色与后跟的对象的颜色混合。
>	- **混合模式**-从四个选项中选择。
>		- **正常**-默认状态
>		- **加法**-相加像素
>		- **减法**-减去像素
>		- **倍增**-倍增像素
>	- **混合不透明度**-您可以在此处设置小部件部分的不透明度
>- **边框**：使用边框，可以围绕选定对象在内线上绘制边框。
>	- **边框颜色**-边框颜色
>	- **边框宽度**-边框宽度
>	- **边界侧**-边界方向
>- **行**：可以在具有行组件的小部件中使用行样式。
>	- **颜色**-线条的颜色
>	- **宽度**-线条的宽度
>	- **线条圆角**-线条末端将圆角
>- **大纲**：大纲样式类似于边框样式，但在这里您可以围绕选定的小部件部件绘制边框。
>	- **轮廓颜色**-轮廓颜色
>	- **轮廓宽度**-轮廓宽度
>	- **外框垫**-与小部件侧面的距离（像素）
>- **填充物**：填充物样式将填充物放置到小部件部件上。这意味着层次结构中位于其下的部分将按填充中使用像素值定义的距离移动。
>	- **衬垫**-衬垫的范围
>- **阴影**：使用阴影样式，可以为选定的小部件部件绘制阴影或光晕。
>	- **阴影颜色**-阴影的颜色
>	- **阴影宽度**-阴影的宽度
>	- **阴影扩展**-阴影深度
>	- **阴影框**-移动X轴上的阴影
>	- **阴影OY**-移动Y轴上的阴影
>- **文本**：文本样式定义可在小部件上找到的文本参数。
>	- **文本颜色**-文本的颜色
>	- **字母间距**-字母之间的间距
行距-行之间的间距
>	- **文本对齐**-文本对齐的方向
>	- **文本装饰**-您可以在文本上划线或下划线
>		- **无**-普通文本
>		- **理解**-带下划线的文本
>		- **删除线**-上划线文本
>		- **文本字体**-文本的字体
>
>**事件属性**：添加事件，您可以通过按下按钮创建不同的控件交互，例如更改屏幕、播放动画等。
>- **添加事件**：在Inspector面板的底部，您可以找到添加事件按钮。首先，您应该命名事件，然后选择一个触发器来启动它。
>	- **事件名称**-事件名称
>	- **事件触发器**-事件开始的交互
>		- **按下**-已按下对象
>		- **单击**-对象被短时间按下，然后释放。滚动时不调用
>		- **长按**-对象已按较长时间
>		- **长按重复**-在每个'Long\u press\u repeat\u time'毫秒中的'Long\u press\u time'后调用。如果滚动，则不调用
>		- **聚焦**-聚焦对象
>		- **离焦**-物体未聚焦
>		- **值已更改**-对象的值已更改。
>		- **就绪**-流程已完成
>		- **取消**-流程已取消
>		- **已加载屏幕**-已加载屏幕，在所有动画完成时调用
>		- **屏幕已卸载**-屏幕已卸载，在所有动画完成时调用
>		- **屏幕加载启动**-屏幕加载启动，在屏幕更改延迟过期时触发
>		- **屏幕卸载启动**-屏幕卸载启动，在调用lv\U scr\U load/lv\U scr\U load\U anim时立即触发
>			- **已检查**-小部件已检查
>			- **未选中**-未选中的小部件
>			- **手势**-手指触摸滑动方向
>- **添加事件**
>	- **操作**：操作是事件的那些元素，在触发器发生时开始。
>		- **调用函数**：通过调用函数动作，可以添加一个事件可以引用的函数名，导出过程中会将该函数创建到ui\u events.c或ui\u events.py文件中。
>		- **更改屏幕**：您可以通过此操作在屏幕之间进行更改。
>			- **屏幕到**-要更改到的屏幕
>			- **淡入淡出模式**-更改屏幕时的动画
>			- **速度**-更改屏幕的速度
>			- **延迟**-更改屏幕的延迟
>	- **增量Arc**：您可以修改Arc小部件的值。
>	- **增量条**：可以修改条控件的值。
>	- **增量滑块**：您可以修改滑块小部件的值。
>	- **修改标志**：可以修改小部件的标志状态。
>	- **播放动画**：可以播放在“动画”面板中创建的动画。
>		- **动画**-所选动画
>		- **目标**-要在其上使用动画的目标小部件
>		- **延迟**-动画的延迟时间
>	- **设置不透明度**：所选小部件的不透明度。
>	- **设置标志**：设置小部件标志状态的值。
>	- **设置属性**：更改小部件的属性值。
>	- **从arc设置文本值**：使用此操作在标签小部件上显示arc小部件值。
>	- **从滑块设置文本值**：使用此操作在标签小部件上显示滑块小部件值。
>	- **选中时设置文本值**：根据目标对象的选中或未选中状态更改标签小部件的文本。

##### 面板使用情况

总之，如果我需要在表盘的上半部分显示相册图像，那么我需要调整面板的坐标和大小，并设置背景图像。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/8.png" style={{width:1000, height:'auto'}}/></div>

：：：注意
为了在主板上占用尽可能少的内存，请尽可能多地插入图片，以刻度盘的分辨率进行压缩，不要放开大图片！
：：：

然后我们可以在**Bg image opa**中设置图像的透明度。我不希望它是完全不透明的，因为一个完全不透明的图像会影响我的文本显示后。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/9.png" style={{width:1000, height:'auto'}}/></div>

这里值得注意的是，默认情况下，所有组件都有框架线，因此为了不影响美观，我们需要删除框架线。方法是将边框颜色的透明度设置为0。

因此，**如果要删除任何颜色或线段，可以将透明度设置为0**。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/12.png" style={{width:600, height:'auto'}}/></div>

##### 标签使用
然后，我们在中间添加文本（使用**标签**小部件），显示艺术家和歌曲名称。在样式上，我们可以改变字体大小、颜色等内容。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/10.png" style={{width:1000, height:'auto'}}/></div>

##### img按钮用法
在文本下，我们添加了一些播放组件（使用**Imgbutton**小部件），如播放/暂停按钮和切换上/下音轨按钮。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/11.png" style={{width:1000, height:'auto'}}/></div>

Imgbutton是一种特殊的按钮，它与普通按钮最大的区别在于，Imgbbutton可以分别配置为按下按钮前、按下按钮时和释放按钮后的三种样式状态。这个过程与我们按下切换播放状态的场景非常相似。如果你认为向上/向下按钮不需要这么复杂的功能，你也可以直接使用按钮。
然后，我们现在将按下和释放按钮图像设置为播放样式，只有在禁用状态下才是暂停样式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/13.png" style={{width:400, height:'auto'}}/></div>

然后我们添加一个事件，这个事件的功能是，当用户按下按钮时，状态切换到Disable，这样就达到了图像切换的效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/14.png" style={{width:500, height:'auto'}}/></div>

如果您想验证效果，可以单击工作区右上角的播放按钮，然后单击播放按钮查看切换的效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/15.png" style={{width:600, height:'auto'}}/></div>

##### 弧形使用

然后我们添加最后一个组件，即音量栏和播放进度栏。我们将使用Arc来完成此操作。

对于Arc，我们需要调整的主要内容是戒指的颜色和大小。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/16.png" style={{width:1000, height:'auto'}}/></div>

-MAIN：这是指整个圆弧后面的矩形背景的样式设计。MAIN样式中配置的**圆弧**并不表示圆弧区域的样式。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/17.png" style={{width:1000, height:'auto'}}/></div>

-INDICATOR：指起始指示区域圆弧的样式设置。通常使用INDICATOR下的**Arc**设置。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/18.png" style={{width:1000, height:'auto'}}/></div>

-旋钮：这是指图像上这个圆圈的配置。如果不需要此圆，可以将其透明度设置为0。这个圆的大小，需要在INDICATOR中设置圆弧内部。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/19.png" style={{width:1000, height:'auto'}}/></div>

这就是我想要达到的效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/20.png" style={{width:1000, height:'auto'}}/></div>

如果你已经检查了它是可点击的，那么你可以点击Run按钮并拖动弧形，然后你就可以达到改变音量条的效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/21.png" style={{width:1000, height:'auto'}}/></div>

##### 屏幕开关
音乐界面几乎已经设计好了，接下来我们不妨添加一个新的主界面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/22.png" style={{width:400, height:'auto'}}/></div>

然后设计一个将主屏幕切换到音乐屏幕的事件。例如，我在这里设计它，通过在主界面下滑动手指切换到音乐播放界面。
由于主界面是主角，因此应将此事件添加到Screen下的主界面中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/23.png" style={{width:500, height:'auto'}}/></div>

如果希望动画效果在幻灯片后缓慢切换，则“速度”可以保持在500，如果希望立即切换，则应将“速度”设置为0。

##### 指针动画

回到主界面的设计，我们想添加表盘指针旋转的动画效果。
首先要做的是，你需要画自己的秒针、分针和时针。然后以**图像**的样式将其添加到主表盘中。

指针位置的调整需要耐心，因为我们需要确保指针围绕图片上的一个固定点旋转。

为图像放置设置了“变换”。下面“图像”选项卡中的“轴”设置旋转点的坐标。设置此项的一般方法是首先调整“Transform”以确保指针的固定点位于表盘的中心，然后稍微调整“Pivot”的坐标。当所有的角度都能使指针定点不动时，那么这些参数是最合适的。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/24.png" style={{width:1000, height:'auto'}}/></div>

一旦确定了所有指针位置，就可以开始添加新的动画效果。不同指针的动画效果设置可以在下图中找到。

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
最后，我们只需将指针移动的动画设置为在主屏幕加载时播放。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/28.png" style={{width:400, height:'auto'}}/></div>

：：提示
上述教程基本上涵盖了80%的软件使用场景，许多其他组件也非常相似。最后，在使用该软件时，这里有一些提示和提示。

1.您需要将所有具有触摸功能的组件放在顶部，否则会干扰组件触摸功能的实现。

默认情况下，软件放置的最后一个零部件位于顶部。这意味着在“层次”选项卡中，相邻排列的组件往往位于顶部。在您刚刚设计的音乐界面中，最顶层是用于调整声音大小的弧形，这会产生问题，因为弧形是一个占据整个表盘的矩形，会影响播放按钮的触摸，所以通常您需要将播放按钮的层调整到弧形层的顶部，这样就不会影响触摸。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/29.png" style={{width:400, height:'auto'}}/></div>

2.尽可能多地关闭不需要的功能，以节省更多内存。

默认情况下，每个组件都会选中一些标志，但并非所有标志都是必需的。虽然默认的标志不会有问题，但关闭不需要的标志会使您的拨号UI运行得更流畅。

就像音乐界面中的背景相册一样，不需要点击，也不需要动画，最好关闭Flags中的选项。但关闭也需要考虑实际情况，例如，在滑动开关拨页面的场景中，关闭某些标志的功能会使滑动禁用，因此仍需要根据效果酌情关闭。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/30.png" style={{width:1000, height:'auto'}}/></div>

3.一定要给你的所有组件、动画、事件等起一个唯一的名字。

该软件只能为您节省绘制某些图案和动画的时间，但更复杂的效果可能需要您稍后对其进行编程才能实现。然后，能够快速找到组件在代码中的位置是很重要的。命名组件、事件和动画是关键！

：：：
####步骤5。程序的导出和应用
一旦你的拨号用户界面绘制完成，你可以考虑将用户界面导出到一个程序中，并通过Arduino上传到XIAO。单击软件的左上角，然后单击**导出**->**创建模板项目**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/31.png" style={{width:400, height:'auto'}}/></div>

然后选择要保存的路径，代码将自动导出。导出的项目模板中将包含以下文件。
-库
-ui
-REANME.md

我们需要的是ui文件夹下的文件。我们可以直接在ui文件夹下打开ino文件。然后，我们需要对以下文件进行更改，以确保程序能够顺利编译。

-**ui.h**：包含库的部分，只保留`#include“lvgl.h”`。

<table align="center">
	<tr>
	    <th>Before modification</th>
	    <th>After Modification</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/32.png" style={{width:600, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/33.png" style={{width:600, height:'auto'}}/></div></td>
	</tr>
</table>

-**ui.ino**：打开触摸屏功能并设置表盘旋转方向。

<table align="center">
	<tr>
	    <th>Before modification</th>
	    <th>After Modification</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/34.png" style={{width:600, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/35.png" style={{width:600, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/36.png" style={{width:600, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/37.png" style={{width:600, height:'auto'}}/></div></td>
	</tr>
</table>
然后您可以选择使用哪个XIAO进行编译和上传。

### 关于LVGL库自定义选项

如果您按照上面的步骤进行操作，但在编译过程中仍然收到一些“未定义”的错误消息，那么您可能没有为自定义配置“lvconf.h”。

为了节省主板上的内存，我们提供的lvconf.h文件禁用了一些lvgl功能。但是，如果您在表盘绘图中使用这些功能，则需要手动打开它们。

- **Windows**系统上“lvconf.h”的默认路径为：
`C： \Users\｛UserName｝\Documents\Arduino\libraries`

- **MacOS**系统上“lvconf.h”的默认路径为：
`\Users\｛UserName｝\Documents\Arduino\libraries`

作为一个简单的例子，在上面的例子中，我们使用“MONTSERRAT 8”字体，但默认情况下该字体已关闭，因此在编译过程中可能会出现错误。

然后，我们所需要做的就是将lv_conf.h文件中该字体后面的0更改为1，这意味着该字体已启用。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/38.png" style={{width:600, height:'auto'}}/></div>

如果遇到类似错误，可以仔细检查自定义功能是否已启用。

### 基于LVGL的拨号程序

我们为圆形屏幕创建了两种表盘样式供用户参考。由于UI逻辑复杂，这将需要XIAO主板上一定的性能和内存。如果您的XIAO在编译以下拨号程序时出现内存不足错误，则您可能需要升级XIAO或减少拨号的功能。

-表盘样式I：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/tree/main/ui">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载代码</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<!-- - Dial Style II:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/tree/main/tft_espi-base-dial">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Code</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div> -->

## 技术支持和产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>



