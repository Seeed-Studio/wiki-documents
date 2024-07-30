---
title: LCD屏幕的基础知识
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio_RP2040_Module_Build-in_Wireless_2.4G/
slug: /cn/Wio-Terminal-LCD-Basic
last_update:
  date: 3/10/2024
  author: 金菊
---

# TFT LCD屏幕的基础知识

## 像素坐标系统

数字二维图像由像素的行和列组成。通过指定像素所在的列和行来指定图像中的像素。简单来说，像素可以通过一对整数来标识，即列号和行号。例如，具有坐标（4,7）的像素位于第4列和第7行。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/grids.jpg" /></div>


按照惯例，列从左上角向右编号，从零开始，但在某些情况下，也可以从其他角落开始（通过设置旋转）。

## 8位和16位色彩模型

像素也以颜色形式表示，因此最好涵盖一些色彩模型。 8位和16位色彩模型对于MCU来说是很好的工作方式，所以这是一个很好的起点。 这两种色彩模型由3个颜色分量 - **红, 绿, 和 蓝** 组成。根据色彩模型，这3个颜色分量将存储在8位或16位变量中。

### 8位色彩

| 位 | 7   | 6   | 5   | 4   | 3   | 2   | 1   | 0   |
| ---  | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| **数据** | 红   | 红   | 红   | 绿   | 绿   | 绿   | 蓝   | 蓝   |

### 16位色彩

| 位  | 15   | 14   | 13   | 12   | 11   | 10   | 9   | 8   | 7   | 6   | 5   | 4   | 3   | 2   | 1   | 0   |
| ---  | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| **数据** | 红   | 红   | 红   | 红   | 红   | 绿   | 绿   | 绿   | 绿   | 绿   | 绿   | 蓝   | 蓝   | 蓝   | 蓝   | 蓝   |

以下是在LCD库中包含的一些预定义的基本颜色（16位）：

```cpp
#define TFT_BLACK       0x0000      /*   0,   0,   0 */
#define TFT_NAVY        0x000F      /*   0,   0, 128 */
#define TFT_DARKGREEN   0x03E0      /*   0, 128,   0 */
#define TFT_DARKCYAN    0x03EF      /*   0, 128, 128 */
#define TFT_MAROON      0x7800      /* 128,   0,   0 */
#define TFT_PURPLE      0x780F      /* 128,   0, 128 */
#define TFT_OLIVE       0x7BE0      /* 128, 128,   0 */
#define TFT_LIGHTGREY   0xC618      /* 192, 192, 192 */
#define TFT_DARKGREY    0x7BEF      /* 128, 128, 128 */
#define TFT_BLUE        0x001F      /*   0,   0, 255 */
#define TFT_GREEN       0x07E0      /*   0, 255,   0 */
#define TFT_CYAN        0x07FF      /*   0, 255, 255 */
#define TFT_RED         0xF800      /* 255,   0,   0 */
#define TFT_MAGENTA     0xF81F      /* 255,   0, 255 */
#define TFT_YELLOW      0xFFE0      /* 255, 255,   0 */
#define TFT_WHITE       0xFFFF      /* 255, 255, 255 */
#define TFT_ORANGE      0xFDA0      /* 255, 180,   0 */
#define TFT_GREENYELLOW 0xB7E0      /* 180, 255,   0 */
```

## TFT LCD屏幕初始化

要初始化Wio终端上的TFT LCD屏幕：

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
  ...
    tft.begin();
    tft.setRotation(r);
    digitalWrite(LCD_BACKLIGHT, HIGH); // turn on the backlight
  ...
}
```

其中r是TFT LCD屏幕的旋转（从0到3），表示它将从哪个角开始。

### 示例代码

这个示例初始化Wio终端上的TFT LCD屏幕，并用红色填充屏幕。

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
    tft.begin();
    tft.setRotation(3);

    tft.fillScreen(TFT_RED); // fills entire the screen with colour red
}

void loop() {

}
```

## 关闭LCD背光

要关闭Wio终端的LCD背光，只需定义LCD背光控制引脚 `72Ul` 并将其拉 `HIGH` 以打开，将其拉 `LOW` 以关闭：

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;
#define LCD_BACKLIGHT (72Ul) // Control Pin of LCD

void setup() {
  // put your setup code here, to run once:
  
    tft.begin();
    tft.setRotation(3);
    tft.fillScreen(TFT_RED);

    delay(2000);
    // Turning off the LCD backlight
    digitalWrite(LCD_BACKLIGHT, LOW);
    delay(2000);
    // Turning on the LCD backlight
    digitalWrite(LCD_BACKLIGHT, HIGH);
}

void loop() {
  // put your main code here, to run repeatedly:

}
```

## 控制LCD背光的亮度

这个示例是由Kenta IDA编写的，所有的功劳归 [**Kenta IDA**](https://github.com/ciniml) 所有。

**步骤 1.** **在这里下载 [repo](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook) 。**

- 位于 `examples/WioTerminal_BackLight` 位置。

**步骤 2.** **上传代码。**

将 `lcd_backlight_control.ino` 上传到Wio终端，您将看到LCD上的亮度变化。

## 技术支持 & 产品讨论

 如果您遇到任何技术问题，请将问题提交到我们的 [论坛](http://forum.seeedstudio.com/) 。
感谢您选择我们的产品！我们将为您提供不同的支持，以确保您对我们的产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
