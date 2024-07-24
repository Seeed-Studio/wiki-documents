---
title: 绘图函数 
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio-Terminal-LCD-Graphics/
slug: /cn/Wio-Terminal-LCD-Graphics
last_update:
  date: 3/10/2024
  author: 金菊
---

# 基本绘图函数

这个存储库描述了Wio Terminal上TFT LCD库的一些基本绘图函数。您可以使用这些函数来创建自己的绘图函数！

## 绘制像素点

要在LCD屏幕上绘制一个像素点：

```cpp
drawPixel(int32_t x, int32_t y, uint32_t color);
```

其中 `(x, y)` 是像素点的坐标 `color` 是像素点的颜色。

### 示例代码

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
    tft.begin();
    tft.setRotation(3);

    tft.fillScreen(TFT_RED); //Red background
    tft.drawPixel(4,7,TFT_BLACK); //drawing a black pixel at (4,7)
}

void loop() {}
```

## 绘制线段

要在LCD屏幕上绘制两点之间的线段：

```cpp
drawLine(int32_t x0, int32_t y0, int32_t x1, int32_t y1, uint32_t color);
```

其中线段从 `(x0, y0)` 开始绘制，到 `(x1, y1)` 结束，使用 `color` 进行绘制。

### 示例代码

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
    tft.begin();
    tft.setRotation(3);

    tft.fillScreen(TFT_RED); //Red background
    tft.drawLine(0,0,160,120,TFT_BLACK); //drawing a black line from (0,0) to (160,120)
}

void loop() {}
```

此外，该库还提供了优化的函数用于绘制水平线和垂直线：

### 绘制水平线和垂直线：

```cpp
drawFastHLine(int32_t x, int32_t y, int32_t w, uint32_t color); //Horizontal line
drawFastVLine(int32_t x, int32_t y, int32_t h, uint32_t color); //Verical line

```

其中 `(x, y)` 是起始坐标， `w` 是水平线的宽度， `h` 是垂直线的高度， `color` 为线的颜色。

### 示例代码

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
    tft.begin();
    tft.setRotation(3);

    tft.fillScreen(TFT_RED); //Red background
    tft.drawFastHLine(0,120,320,TFT_BLACK); //A black horizontal line starting from (0, 120)
    tft.drawFastVLine(160,0,240,TFT_BLACK); // A black vertical line starting from (160, 0)
}

void loop() {}
```

## 绘制矩形

要在LCD屏幕上绘制或填充一个矩形：

```cpp
drawRect(int32_t x, int32_t y, int32_t w, int32_t h, uint32_t color);
fillRect(int32_t x, int32_t y, int32_t w, int32_t h, uint32_t color);
```

其中 `(x, y)` 是起始坐标， `w` 是矩形的宽度， `h` 是矩形的高度， `color` 为矩形的颜色。

### 示例代码

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
    tft.begin();
    tft.setRotation(3);

    tft.fillScreen(TFT_RED); //Red background
    tft.drawRect(110,70,100,100,TFT_BLACK); //A 100x100 black rectangle starting from (110, 70)
}

void loop() {}
```

## 绘制圆形

要在LCD屏幕上绘制或填充一个圆形：

```cpp
drawCircle(int32_t x0, int32_t y0, int32_t r, uint32_t color);
fillCircle(int32_t x0, int32_t y0, int32_t r, uint32_t color);
```

其中 `(x0, y0)` 为圆心坐标， `r` 为圆的半径， `color` 为圆的颜色。 

### 示例代码

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
    tft.begin();
    tft.setRotation(3);

    tft.fillScreen(TFT_RED); //Red background
    tft.drawCircle(160,120,50,TFT_BLACK); //A black circle origin at (160, 120)
}

void loop() {}
```

该库还提供了绘制或填充椭圆的函数：

```cpp
drawEllipse(int16_t x0, int16_t y0, int32_t rx, int32_t ry, uint16_t color);
fillEllipse(int16_t x0, int16_t y0, int32_t rx, int32_t ry, uint16_t color);
```

其中 `(x0, y0)` 是椭圆的中心坐标， `rx` 是水平半径， `ry` 是垂直半径， `color` 为椭圆的颜色。

### 示例代码

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
    tft.begin();
    tft.setRotation(3);

    tft.fillScreen(TFT_RED); //Red background
    tft.drawEllipse(160,120,50,100,TFT_BLACK); 
    //A black ellipse origin at (160, 120) with horizontal radius of 50, and vertical radius of 100
}

void loop() {}
```

## 绘制三角形

要在LCD屏幕上绘制或填充一个三角形：

```cpp
drawTriangle(int32_t x0, int32_t y0, int32_t x1, int32_t y1, int32_t x2, int32_t y2, uint32_t color);
fillTriangle(int32_t x0, int32_t y0, int32_t x1, int32_t y1, int32_t x2, int32_t y2, uint32_t color);
```

其中 `(x0, y0)` 是第一个坐标， `(x1, y1)` 是第二个坐标， `(x2, y2)` 是第三个坐标， `color` 为三角形的颜色。

### 示例代码

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
    tft.begin();
    tft.setRotation(3);

    tft.fillScreen(TFT_RED); //Red background
    tft.drawTriangle(160,70,60,170,260,170,TFT_BLACK);
    //A triangle with points at (160, 70), (60, 170) and (260, 170)
}

void loop() {}
```

## 绘制圆角矩形

要在LCD屏幕上绘制或填充一个圆角矩形：

```cpp
drawRoundRect(int32_t x, int32_t y, int32_t w, int32_t h, int32_t r, uint32_t color);
fillRoundRect(int32_t x, int32_t y, int32_t w, int32_t h, int32_t r, uint32_t color);
```

其中 `(x, y)` 是起始坐标，`w` 和 `h` 分别为矩形的宽度和高度， `r` 为圆角半径， `color` 为矩形的颜色。

### 示例代码

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
    tft.begin();
    tft.setRotation(3);

    tft.fillScreen(TFT_RED); //Red background
    tft.drawRoundRect(110,70,100,100,10,TFT_BLACK);
    //A 100x100 black roudned rectangle starting from (110, 70)
}

void loop() {}
```

## 绘制字符

要在LCD屏幕上绘制单个字符：

```cpp
drawChar(int32_t x, int32_t y, uint16_t c, uint32_t color, uint32_t bg, uint8_t size)
```

其中 `(x, y)` 是起始位置， `c` 是字符， `color` 为字符的颜色， `bg` 为字符的背景颜色， `size` 为字符的大小比例。

### 示例代码

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
    tft.begin();
    tft.setRotation(3);

    tft.fillScreen(TFT_RED); //Red background
    tft.drawChar(140,120,'A',TFT_BLACK, TFT_RED,2); //Draw a black character A from (140,120)
    tft.drawChar(155,120,'B',TFT_BLACK, TFT_RED,2); //Draw a black character B from (155,120)
    tft.drawChar(170,120,'C',TFT_BLACK, TFT_RED,2); //Draw a black character C from (170,120)
}

void loop() {}
```

## 绘制文本字符串

要在LCD屏幕上绘制文本字符串：

```cpp
drawString(const String& string, int32_t poX, int32_t poY);
```

其中 `string` 是文本字符串， `(poX, poY)` 是起始坐标。

### 示例代码

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
  tft.begin();
  tft.setRotation(3);

  tft.fillScreen(TFT_RED); //Red background

  tft.setTextColor(TFT_BLACK);          //sets the text colour to black
  tft.setTextSize(1);                   //sets the size of text
  tft.drawString("Hello world!", 0, 0); //prints strings from (0, 0)
  tft.setTextSize(2);
  tft.drawString("Hello world!", 0, 10);
}

void loop() {}
```

## 填充屏幕

要填充或着色整个屏幕：

```cpp
fillScreen(uint32_t color);
```

### 示例代码

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
  tft.begin();
  tft.setRotation(3);
}

void loop() {
    //Looping through color R-G-B
    tft.fillScreen(TFT_RED);
    delay(1000);
    tft.fillScreen(TFT_GREEN);
    delay(1000);
    tft.fillScreen(TFT_BLUE);
    delay(1000);
}

void loop() {}
```

## 技术支持 & 产品讨论

感谢您选择我们的产品！我们将为您提供不同的支持，以确保您对我们的产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
