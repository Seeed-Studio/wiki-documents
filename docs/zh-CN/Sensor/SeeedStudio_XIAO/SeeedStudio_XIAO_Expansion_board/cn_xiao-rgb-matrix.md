---
description: XIAO 6x10 RGB 矩阵入门指南
title: XIAO 6x10 RGB 矩阵入门指南
keywords:
- XIAO RGB
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/rgb_matrix_for_xiao
last_update:
  date: 08/11/2023
  author: Citric
---

# XIAO 6x10 RGB 矩阵入门指南

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-rgb-matrix/1.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/6x10-RGB-MATRIX-for-XIAO-p-5771.html#" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div><br />

介绍"XIAO 6x10 RGB 矩阵" - 这是 Seeed Studio XIAO 产品系列的一个令人眼花缭乱的新成员。现在，有了 6x10 RGB 矩阵，您拥有了用色彩光谱照亮项目的能力。该矩阵由 60 个精心排列的 WS2812 LED 组成，不仅仅是为了美观；它是将您的创意愿景变为现实的工具。无论您是在制作交互式艺术作品、设计动态通知系统，还是只是希望为您的创作增添一抹色彩，这个矩阵都是您的画布。专为与 XIAO 主控制器无缝集成而定制，其适应性通过包含 VCC、GND 和 DIN 焊接焊盘得到进一步突出，确保在众多场景中的灵活性。

## 介绍

### 特性

- 60 个 WS2812 LED：以 6x10 网格排列，这些 LED 非常适合创建生动的显示效果。
- 紧凑设计：每个 LED 仅为 1mm x 1mm，提供高密度显示而不占用太多空间。
- 多功能连接：虽然专为 XIAO 主控制器设计，我们还包含了 VCC、GND 和 DIN 焊接焊盘以适用于更广泛的应用。
- RGB 功能：每个 LED 都可以显示广泛的颜色范围，让您自由创建动态和多彩的显示效果。

### 规格

- LED 类型：WS2812
- LED 数量：60
- 排列：6 行 x 10 列
- LED 尺寸：1mm x 1mm
- XIAO 连接端口：D0
- 附加焊盘：VCC、GND、DIN、DOUT

### 应用

- 交互式显示：在您的项目中使用 LED 矩阵进行动态视觉反馈。
- 通知：为您的设备创建彩色通知或警报。
- 艺术装置：将 LED 矩阵融入艺术作品中，增添现代感。
- 可穿戴技术：集成到服装或配饰中，打造未来感外观。
- 游戏：通过生动的视觉效果增强游戏体验。
- 通用照明：用于各种环境中的环境照明或氛围营造。

## 入门指南

欢迎来到 XIAO 6x10 RGB 矩阵的快速入门指南。本指南旨在帮助您设置新的 LED 矩阵扩展板并与 XIAO RP2040 主控制器一起开始使用。

### 硬件准备

收到产品后，需要进行一些焊接工作。我们在包装中提供了两个排针。您需要将这些排针焊接到扩展板上。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-rgb-matrix/2.png" style={{width:700, height:'auto'}}/></div>

焊接完成后，您可以继续将扩展板连接到 XIAO RP2040 主控制器。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-rgb-matrix/3.jpg" style={{width:700, height:'auto'}}/></div>

:::caution
连接时请特别小心，不要在 XIAO 通电时连接，也不要连接错误的电源引脚。否则，很可能会烧坏板子。
:::

### 软件准备

本教程将使用 XIAO RP2040 作为主控，如果您是第一次使用 XIAO RP2040，请阅读其入门 Wiki。

- [Seeed Studio XIAO RP2040 with Arduino](https://wiki.seeedstudio.com/cn/XIAO-RP2040-with-Arduino/)

同时，本教程提供的所有示例程序也适用于其他 XIAO，您也可以根据您使用的 XIAO 提前配置 Arduino 开发环境。

## Arduino 库概述

:::tip

如果这是您第一次使用 Arduino，我们强烈建议您参考 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

### 功能

在我们开始开发代码之前，让我们先了解一下库的可用功能。

- `Adafruit_NeoPixel(uint16_t n, int16_t pin = 6, neoPixelType type = NEO_GRB + NEO_KHZ800);` —— 当长度、引脚和像素类型在编译时已知时的 NeoPixel 构造函数。

  **输入参数**：

  - `n`：灯带中 NeoPixel 的数量。
  - `p`：驱动 NeoPixel 数据输入的 Arduino 引脚编号。
  - `t`：像素类型 -- 将 Adafruit_NeoPixel.h 中定义的 NEO_* 常量相加，例如 `NEO_GRB+NEO_KHZ800` 用于期望 800 KHz（相对于 400 KHz）数据流的 NeoPixel，每个像素的颜色字节按绿、红、蓝顺序表示。

  **返回值**：Adafruit_NeoPixel 对象。使用前调用 `begin()` 函数。

- `void begin(void)` —— 配置 NeoPixel 引脚为输出。

- `void show(void)` —— 将 RAM 中的像素数据传输到 NeoPixel。

- `void setPin(int16_t p)` —— 设置/更改 NeoPixel 输出引脚编号。如果有的话，之前的引脚设置为 INPUT，新引脚设置为 OUTPUT。

  **输入参数**：

  - `p`：Arduino 引脚编号（-1 = 无引脚）。

- `void setPixelColor(uint16_t n, uint8_t r, uint8_t g, uint8_t b, uint8_t w)` —— 使用单独的红、绿、蓝和白色分量设置像素颜色（仅适用于 RGBW NeoPixel）。

  **输入参数**：

  - `n`：像素索引，从 0 开始。
  - `r`：红色亮度，0 = 最小（关闭），255 = 最大。
  - `g`：绿色亮度，0 = 最小（关闭），255 = 最大。
  - `b`：蓝色亮度，0 = 最小（关闭），255 = 最大。
  - `w`（可选）：白色亮度，0 = 最小（关闭），255 = 最大，使用 RGB 像素时忽略。

- `void setPixelColor(uint16_t n, uint32_t c)` —— 使用 32 位"打包"RGB 或 RGBW 值设置像素颜色。

  **输入参数**：

  - `n`：像素索引，从 0 开始。
  - `c`：32 位颜色值。最高有效字节是白色（对于 RGBW 像素）或忽略（对于 RGB 像素），接下来是红色，然后是绿色，最低有效字节是蓝色。

- `void fill(uint32_t c = 0, uint16_t first = 0, uint16_t count = 0)` —— 用颜色填充 NeoPixel 灯带的全部或部分。

  **输入参数**：

  - `c`：32 位颜色值。最高有效字节是白色（对于 RGBW 像素）或忽略（对于 RGB 像素），接下来是红色，然后是绿色，最低有效字节是蓝色。如果所有参数都未指定，这将是 0（关闭）。
  - `first`：要填充的第一个像素的索引，从 0 开始。必须在范围内，不执行裁剪。如果未指定则为 0。
  - `count`：要填充的像素数量，作为正值。传递 0 或未指定将填充到灯带末尾。

- `void setBrightness(uint8_t b)` —— 调整输出亮度。不会立即影响当前在 LED 上显示的内容。下次调用 `show()` 将以此级别刷新 LED。

  **输入参数**：

  - `b`：亮度设置，0=最小（关闭），255=最亮。

- `void clear(void)` —— 用 0 / 黑色 / 关闭填充整个 NeoPixel 灯带。

- `void updateLength(uint16_t n)` —— 更改先前声明的 Adafruit_NeoPixel 灯带对象的长度。旧数据被释放，新数据被清除。引脚编号和像素格式保持不变。

  **输入参数**：

  - `n`：灯带的新长度，以像素为单位。

- `void updateType(neoPixelType t)` —— 更改先前声明的 Adafruit_NeoPixel 灯带对象的像素格式。如果格式从 RGB 变体之一更改为 RGBW 变体（或 RGBW 更改为 RGB），旧数据将被释放，新数据被清除。否则，旧数据将保留在 RAM 中，不会重新排序为新格式，因此建议随后调用 `clear()`。

  **输入参数**：

  - `t`：像素类型 -- 将 Adafruit_NeoPixel.h 中定义的 NEO_* 常量相加，例如 `NEO_GRB+NEO_KHZ800` 用于期望 800 KHz（相对于 400 KHz）数据流的 NeoPixel，每个像素的颜色字节按绿、红、蓝顺序表示。

- `static uint32_t Color(uint8_t r, uint8_t g, uint8_t b)` —— 将单独的红、绿、蓝值转换为单个"打包"的 32 位 RGB 颜色。

  **输入参数**：

  - `r`：红色亮度，0 到 255。
  - `g`：绿色亮度，0 到 255。
  - `b`：蓝色亮度，0 到 255。

  **返回值**：32 位打包 RGB 值，然后可以分配给变量供以后使用或传递给 `setPixelColor()` 函数。打包 RGB 格式是可预测的，无论 LED 灯带颜色顺序如何。

### 安装

- **方法一**

本教程将使用 **[Adafruit NeoPixel 库](https://github.com/adafruit/Adafruit_NeoPixel)**，您可以在 Arduino 的库管理器中搜索它并下载安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-rgb-matrix/4.png" style={{width:1000, height:'auto'}}/></div>

- **方法二**

通过下面的按钮下载库。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/adafruit/Adafruit_NeoPixel" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

由于您已经下载了zip库文件，请打开您的Arduino IDE，点击**Sketch > Include Library > Add .ZIP Library**。选择您刚刚下载的zip文件，如果库安装正确，您将在通知窗口中看到**Library added to your libraries**。这意味着库已成功安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

## 演示：流水灯

以下示例程序用于实现流水灯效果，其中LED灯珠将依次逐个点亮。此程序与所有XIAO兼容。

```cpp
#include <Adafruit_NeoPixel.h>
#ifdef __AVR__
 #include <avr/power.h> // Required for 16 MHz Adafruit Trinket
#endif

// Which pin on the Arduino is connected to the NeoPixels?
#define PIN        A0 // On Trinket or Gemma, suggest changing this to 1

// How many NeoPixels are attached to the Arduino?
#define NUMPIXELS 60 // Popular NeoPixel ring size

// When setting up the NeoPixel library, we tell it how many pixels,
// and which pin to use to send signals. Note that for older NeoPixel
// strips you might need to change the third parameter -- see the
// strandtest example for more information on possible values.
Adafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

#define DELAYVAL 500 // Time (in milliseconds) to pause between pixels

void setup() {
  // These lines are specifically to support the Adafruit Trinket 5V 16 MHz.
  // Any other board, you can remove this part (but no harm leaving it):
#if defined(__AVR_ATtiny85__) && (F_CPU == 16000000)
  clock_prescale_set(clock_div_1);
#endif
  // END of Trinket-specific code.

  pixels.begin(); // INITIALIZE NeoPixel strip object (REQUIRED)
}

void loop() {
  pixels.clear(); // Set all pixel colors to 'off'

  // The first NeoPixel in a strand is #0, second is 1, all the way up
  // to the count of pixels minus one.
  for(int i=0; i<NUMPIXELS; i++) { // For each pixel...

    // pixels.Color() takes RGB values, from 0,0,0 up to 255,255,255
    // Here we're using a moderately bright green color:
    pixels.setPixelColor(i, pixels.Color(0, 10, 0));

    pixels.show();   // Send the updated pixel colors to the hardware.

    delay(DELAYVAL); // Pause before next pass through loop
  }
}
```

上传程序，如果一切顺利，你可以看到灯珠逐个点亮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-rgb-matrix/5.jpg" style={{width:600, height:'auto'}}/></div>

:::caution
此程序特意降低了灯珠的亮度，如果将亮度拉到最大，长时间直视灯珠可能会对您的眼睛造成伤害。
:::

## 多个灯板拼接

XIAO RGB MATRIX 支持在保证电源供应的情况下进行多个拼接扩展。您可以按照下图所示的说明依次拼接多个灯板。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-rgb-matrix/6.jpg" style={{width:800, height:'auto'}}/></div>

:::caution
当多个灯板拼接在一起时，它们可能会发热并出现供电不足的情况。此时，灯板可能会显示异常，这时请为灯板提供额外的电源，以确保每个灯板都能有稳定的 5V 输入。
:::

## 资源

- **[ZIP]** [PCB&SCH Eagle 文件](https://files.seeedstudio.com/wiki/xiao-rgb-matrix/EAGLE_XIAO_MATRIX.zip)
- **[PDF]** [数据手册 - WS2812B](https://files.seeedstudio.com/wiki/xiao-rgb-matrix/WS2812B-1010-DATASHEET.pdf)

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
