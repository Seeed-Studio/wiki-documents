---
title: 图形绘制
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Wio-Terminal-LCD-Graphics/
slug: /cn/Wio-Terminal-LCD-Graphics
last_update:
  date: 01/11/2022
  author: gunengyu
---
# 基本图形绘制函数

本文档介绍了 Wio Terminal 上 TFT LCD 库的一些基本图形绘制函数。您可以使用这些函数来创建自己的绘图功能！

## 绘制像素点

在 LCD 屏幕上绘制像素点：

```cpp
drawPixel(int32_t x, int32_t y, uint32_t color);
```

其中 `(x, y)` 是像素坐标，`color` 是像素的颜色。

### 示例代码

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
    tft.begin();
    tft.setRotation(3);

    tft.fillScreen(TFT_RED); //红色背景
    tft.drawPixel(4,7,TFT_BLACK); //在 (4,7) 处绘制一个黑色像素点
}

void loop() {}
```

## 绘制直线

在 LCD 屏幕上绘制两点之间的直线：

```cpp
drawLine(int32_t x0, int32_t y0, int32_t x1, int32_t y1, uint32_t color);
```

其中直线从 `(x0, y0)` 开始绘制到 `(x1, y1)`，`color` 为颜色。

### 示例代码

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
    tft.begin();
    tft.setRotation(3);

    tft.fillScreen(TFT_RED); //红色背景
    tft.drawLine(0,0,160,120,TFT_BLACK); //从 (0,0) 到 (160,120) 绘制一条黑色直线
}

void loop() {}
```

为了绘制水平或垂直线条，该库还提供了优化的函数：

### 绘制水平线和垂直线

```cpp
drawFastHLine(int32_t x, int32_t y, int32_t w, uint32_t color); //水平线
drawFastVLine(int32_t x, int32_t y, int32_t h, uint32_t color); //垂直线

```

其中 `(x, y)` 是起始坐标，`w` 是水平线的宽度，`h` 是垂直线的高度，`color` 为颜色。

### 示例代码

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
    tft.begin();
    tft.setRotation(3);

    tft.fillScreen(TFT_RED); //红色背景
    tft.drawFastHLine(0,120,320,TFT_BLACK); //从 (0, 120) 开始的黑色水平线
    tft.drawFastVLine(160,0,240,TFT_BLACK); // 从 (160, 0) 开始的黑色垂直线
}

void loop() {}
```

## 绘制矩形

在 LCD 屏幕上绘制或填充矩形：

```cpp
drawRect(int32_t x, int32_t y, int32_t w, int32_t h, uint32_t color);
fillRect(int32_t x, int32_t y, int32_t w, int32_t h, uint32_t color);
```

其中 `(x, y)` 是起始坐标，`w` 是宽度，`h` 是矩形的高度，`color` 为颜色。

### 示例代码

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
    tft.begin();
    tft.setRotation(3);

    tft.fillScreen(TFT_RED); //红色背景
    tft.drawRect(110,70,100,100,TFT_BLACK); //从 (110, 70) 开始的 100x100 黑色矩形
}

void loop() {}
```

## 绘制圆形

在 LCD 屏幕上绘制或填充圆形：

```cpp
drawCircle(int32_t x0, int32_t y0, int32_t r, uint32_t color);
fillCircle(int32_t x0, int32_t y0, int32_t r, uint32_t color);
```

其中 `(x0, y0)` 是圆心，`r` 是圆的半径，`color` 为颜色。

### 示例代码

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
    tft.begin();
    tft.setRotation(3);

    tft.fillScreen(TFT_RED); //红色背景
    tft.drawCircle(160,120,50,TFT_BLACK); //圆心在 (160, 120) 的黑色圆形
}

void loop() {}
```

该库还提供了绘制或填充椭圆的函数：

```cpp
drawEllipse(int16_t x0, int16_t y0, int32_t rx, int32_t ry, uint16_t color);
fillEllipse(int16_t x0, int16_t y0, int32_t rx, int32_t ry, uint16_t color);
```

其中 `(x0, y0)` 是椭圆的中心，`rx` 是水平半径，`ry` 是垂直半径，`color` 为颜色。

### 示例代码

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
    tft.begin();
    tft.setRotation(3);

    tft.fillScreen(TFT_RED); //红色背景
    tft.drawEllipse(160,120,50,100,TFT_BLACK); 
    //中心在 (160, 120)，水平半径为 50，垂直半径为 100 的黑色椭圆
}

void loop() {}
```

## 绘制三角形

要在LCD屏幕上绘制或填充三角形：

```cpp
drawTriangle(int32_t x0, int32_t y0, int32_t x1, int32_t y1, int32_t x2, int32_t y2, uint32_t color);
fillTriangle(int32_t x0, int32_t y0, int32_t x1, int32_t y1, int32_t x2, int32_t y2, uint32_t color);
```

其中 `(x0, y0)` 是第一个坐标，`(x1, y1)` 是第二个坐标，`(x2, y2)` 是三角形的第三个坐标，`color` 是颜色。

### 示例代码

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
    tft.begin();
    tft.setRotation(3);

    tft.fillScreen(TFT_RED); //红色背景
    tft.drawTriangle(160,70,60,170,260,170,TFT_BLACK);
    //一个顶点在 (160, 70)、(60, 170) 和 (260, 170) 的三角形
}

void loop() {}
```

## 绘制圆角矩形

要在LCD屏幕上绘制或填充圆角矩形：

```cpp
drawRoundRect(int32_t x, int32_t y, int32_t w, int32_t h, int32_t r, uint32_t color);
fillRoundRect(int32_t x, int32_t y, int32_t w, int32_t h, int32_t r, uint32_t color);
```

其中 `(x, y)` 是起始坐标，`w` 和 `h` 是矩形的宽度和高度，`r` 是圆角半径，`color` 是颜色。

### 示例代码

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
    tft.begin();
    tft.setRotation(3);

    tft.fillScreen(TFT_RED); //红色背景
    tft.drawRoundRect(110,70,100,100,10,TFT_BLACK);
    //一个从 (110, 70) 开始的 100x100 黑色圆角矩形
}

void loop() {}
```

## 绘制字符

要在LCD屏幕上绘制单个字符：

```cpp
drawChar(int32_t x, int32_t y, uint16_t c, uint32_t color, uint32_t bg, uint8_t size)
```

其中 `(x, y)` 是起始位置，`c` 是字符，`color` 是字符的颜色，`bg` 是字符的背景颜色，`size` 是字符的大小比例。

### 示例代码

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
    tft.begin();
    tft.setRotation(3);

    tft.fillScreen(TFT_RED); //红色背景
    tft.drawChar(140,120,'A',TFT_BLACK, TFT_RED,2); //从 (140,120) 绘制一个黑色字符 A
    tft.drawChar(155,120,'B',TFT_BLACK, TFT_RED,2); //从 (155,120) 绘制一个黑色字符 B
    tft.drawChar(170,120,'C',TFT_BLACK, TFT_RED,2); //从 (170,120) 绘制一个黑色字符 C
}

void loop() {}
```

## 绘制文本字符串

要在LCD屏幕上绘制字符串：

```cpp
drawString(const String& string, int32_t poX, int32_t poY);
```

其中 `string` 是文本字符串，`(poX, poY)` 是起始坐标。

### 示例代码

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
  tft.begin();
  tft.setRotation(3);

  tft.fillScreen(TFT_RED); //红色背景

  tft.setTextColor(TFT_BLACK);          //设置文本颜色为黑色
  tft.setTextSize(1);                   //设置文本大小
  tft.drawString("Hello world!", 0, 0); //从 (0, 0) 打印字符串
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
    //循环显示颜色 红-绿-蓝
    tft.fillScreen(TFT_RED);
    delay(1000);
    tft.fillScreen(TFT_GREEN);
    delay(1000);
    tft.fillScreen(TFT_BLUE);
    delay(1000);
}

void loop() {}
```

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>