---
title: LCD 基础知识
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Wio_RP2040_Module_Build-in_Wireless_2.4G/
slug: /cn/Wio-Terminal-LCD-Basic
last_update:
  date: 01/11/2022
  author: gunengyu
---

# TFT LCD 屏幕基础知识

## 像素坐标系统

数字 2D 图像由像素的行和列组成。图像中的像素通过指定像素所在的列和行来确定。简单来说，像素可以通过一对整数来标识，这对整数提供列号和行号。例如，坐标为 (4,7) 的像素位于第 4 列和第 7 行。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/grids.jpg" /></div>

通常，列从左上角开始从左到右编号，从零开始，但在某些情况下，也可以从其他角开始（通过设置旋转）。

## 8 位和 16 位颜色模型

像素也以颜色形式表示，因此最好也了解一些颜色模型。8 位和 16 位颜色模型适合 MCU 使用，因此这是一个很好的开始。这两种颜色模型由 3 个颜色分量组成 - **红色、绿色和蓝色**。根据颜色模型，这 3 个颜色分量将存储到 8 位或 16 位变量中。

### 8 位颜色

| 位  | 7   | 6   | 5   | 4   | 3   | 2   | 1   | 0   |
| ---  | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| **数据** | 红色   | 红色   | 红色   | 绿色   | 绿色   | 绿色   | 蓝色   | 蓝色   |

### 16 位颜色

| 位  | 15   | 14   | 13   | 12   | 11   | 10   | 9   | 8   | 7   | 6   | 5   | 4   | 3   | 2   | 1   | 0   |
| ---  | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| **数据** | 红色   | 红色   | 红色   | 红色   | 红色   | 绿色   | 绿色   | 绿色   | 绿色   | 绿色   | 绿色   | 蓝色   | 蓝色   | 蓝色   | 蓝色   | 蓝色   |

以下是 LCD 库中包含的一些基本预定义示例颜色（16 位）：

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

## TFT LCD 屏幕初始化

要在 Wio Terminal 上初始化 TFT LCD 屏幕：

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
  ...
    tft.begin();
    tft.setRotation(r);
    digitalWrite(LCD_BACKLIGHT, HIGH); // 打开背光
  ...
}
```

其中 r 是 TFT LCD 屏幕的旋转角度（从 0 到 3），表示它将从哪个角开始。

### 示例代码

此示例在 Wio Terminal 上初始化 TFT LCD 屏幕并用红色填充屏幕。

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
    tft.begin();
    tft.setRotation(3);

    tft.fillScreen(TFT_RED); // 用红色填充整个屏幕
}

void loop() {

}
```

## 关闭 LCD 背光

要关闭 Wio Terminal 的 LCD 背光，只需定义 LCD 背光控制引脚 `72Ul`，将其拉 `HIGH` 以打开，拉 `LOW` 以关闭：

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;
#define LCD_BACKLIGHT (72Ul) // LCD 控制引脚

void setup() {
  // 在这里放置您的设置代码，只运行一次：
  
    tft.begin();
    tft.setRotation(3);
    tft.fillScreen(TFT_RED);

    delay(2000);
    // 关闭 LCD 背光
    digitalWrite(LCD_BACKLIGHT, LOW);
    delay(2000);
    // 打开 LCD 背光
    digitalWrite(LCD_BACKLIGHT, HIGH);
}

void loop() {
  // 在这里放置您的主要代码，重复运行：

}
```

## 控制 LCD 背光亮度

此示例由 [**Kenta IDA**](https://github.com/ciniml) 编写，所有功劳归 Kenta IDA 所有。

**步骤 1.** **在[这里](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook)下载仓库。**

- 在 `examples/WioTerminal_BackLight` 位置下。

**步骤 2.** **上传代码。**

将 `lcd_backlight_control.ino` 上传到 Wio Terminal，您将看到 LCD 上的亮度变化。

## 技术支持和产品讨论
如果您有任何技术问题，请将问题提交到我们的[论坛](http://forum.seeedstudio.com/)。
感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>