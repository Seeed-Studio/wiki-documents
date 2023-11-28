---
description: 使用XIAO的6x10 RGB MATRIX入门指南
title: 基于 XIAO 的 6x10 阵列 RGB 灯扩展板
keywords:
- XIAO RGB
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/rgb_matrix_for_xiao
last_update:
  date: 10/31/2023
  author: 金 菊
---

# 基于 XIAO 的 6x10 阵列 RGB 灯扩展板

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-rgb-matrix/1.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/6x10-RGB-MATRIX-for-XIAO-p-5771.html#">
            <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买 🖱️</font></span></strong>
    </a>
</div><br />

介绍"6x10 RGB-MATRIX for XIAO" - 这是Seeed Studio XIAO系列产品中令人眼花缭乱的新成员。现在，有了6x10 RGB-MATRIX，您可以用各种颜色给您的项目增添光彩。该矩阵由60颗精心排列的WS2812 LED组成，它不仅仅是美观的装饰品，更是将您的创意构想变为现实的工具。无论您是制作互动艺术品，设计动态通知系统，还是仅仅希望为您的作品增添一抹色彩，这个矩阵都是您的创作画布。它与XIAO主控器完美集成，还配备了VCC、GND和DIN焊接接点，确保在各种情况下的灵活性。

## 介绍

### 特点

- 60颗WS2812 LED：以6x10的网格排列，这些LED非常适合创建生动的显示效果。
- 紧凑设计：每个LED只有10mm x 10mm大小，提供高密度显示，不占用太多空间。
- 多功能连接：虽然它是为XIAO主控器设计的，但我们还特别加入了VCC、GND和DIN焊接接点，以适应更广泛的应用场景。
- RGB功能：每个LED都可以显示多种颜色，让您有自由创造动态且丰富多彩的显示效果的空间。

### 规格

- LED 类型: WS2812
- LED数量: 60
- 排列方式：6行x 10列
- LED 型号: 10mm x 10mm
- XIAO的连接端口: D0
- 附加接点: VCC, GND, DIN, DOUT

### 应用领域

- 交互式显示:在您的项目中使用LED矩阵进行动态视觉反馈。
- 通知:为您的设备创建彩色通知或警报。
- 艺术装置:将LED矩阵整合到艺术作品中，具有现代感。
- 可穿戴技术:融入服装或配饰中，打造未来感。
- 游戏:通过生动的视觉效果增强游戏体验。
- 一般照明:用于环境照明或各种环境的情绪设置。

## 入门指南

欢迎来到6x10 RGB-MATRIX for XIAO的快速入门指南。本指南旨在帮助您与XIAO RP2040主控制器一起设置并开始使用新的LED矩阵扩展板。

### 硬件连接

在收到您的产品后，需要进行一些焊接。我们在包装中提供了两个引脚头。你需要把这些头焊到扩展板上。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-rgb-matrix/2.png" style={{width:700, height:'auto'}}/></div>

一旦焊接完成，您可以继续将扩展板连接到XIAO RP2040主控制器。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-rgb-matrix/3.jpg" style={{width:700, height:'auto'}}/></div>

:::注意
连接时请特别小心，不要在XIAO通电时连接，也不要接错电源引脚。否则，它很可能会烧坏。
:::

### 软件准备

本教程将使用XIAO RP2040作为主教程，如果您是第一次使用XIAO RP2040，请阅读其入门Wiki。

- [使用Arduino查看Studio XIAO RP2040](https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino/)

同时，本教程中提供的所有示例程序也可以在其他XIAO上运行，您也可以根据您使用的XIAO提前配置Arduino开发环境。


## Arduino库概述

:::提示

如果这是你第一次使用Arduino，我们强烈建议你参考 [开始使用Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。
:::

### 函数

在我们开始开发草图之前，让我们看一下库的可用函数。

- `Adafruit_NeoPixel(uint16_t n, int16_t pin = 6, neoPixelType type = NEO_GRB + NEO_KHZ800);` —— 当长度、引脚和像素类型在编译时已知时，使用NeoPixel构造函数。

  **输入参数**:

  - `n`: 链中的新像素数。
  - `p`: Arduino引脚号，它将驱动NeoPixel数据。
  - `t`: 像素类型—将Adafruit_NeoPixel.h中定义的NEO_*常量相加，例如NeoPixels的 `NEO_GRB+NEO_KHZ800` 预期为800 KHz (vs 400 KHz)数据流，颜色字节以每个像素的绿色，红色，蓝色顺序表示。

  **返回值**: Adafruit_NeoPixel对象。在使用之前调用 `begin()` 函数。

- `void begin(void)` —— 配置NeoPixel引脚输出。

- `void show(void)` —— 将RAM中的像素数据传输到NeoPixels。

- `void setPin(int16_t p)` —— 设置/更改NeoPixel输出引脚编号。前一个引脚(如果有的话)设置为INPUT，新引脚设置为OUTPUT。

  **输入参数**:

  - `p`: Arduino引脚编号(-1 =无引脚)。

- `void setPixelColor(uint16_t n, uint8_t r, uint8_t g, uint8_t b, uint8_t w)` —— 使用单独的红、绿、蓝和白组件设置像素的颜色(仅适用于RGBW新像素)。

  **输入参数**:

  - `n`: 像素索引，从0开始
  - `r`: 红色亮度，0 =最小值(关闭)，255 =最大值。
  - `g`: 绿色亮度，0 =最小(关闭)，255 =最大。
  - `b`: 蓝色亮度，0 =最小值(关闭)，255 =最大值。
  - `w` (可选):白色亮度，0 =最小(关闭)，255 =最大，如果使用RGB像素则忽略。

- `void setPixelColor(uint16_t n, uint32_t c)` —— 使用32位的“打包”RGB或RGBW值设置像素的颜色。

  **输入参数**:

  - `n`: 像素索引，从0开始。
  - `c`: 32位颜色值。最重要的字节是白色(对于RGBW像素)或忽略(对于RGB像素)，其次是红色，然后是绿色，最不重要的字节是蓝色。

- `void fill(uint32_t c = 0, uint16_t first = 0, uint16_t count = 0)` —— 用一种颜色填充全部或部分NeoPixel条。

  **输入参数**:

  - `c`: 32位颜色值。最重要的字节是白色(对于RGBW像素)或忽略(对于RGB像素)，其次是红色，然后是绿色，最不重要的字节是蓝色。如果所有参数都未指定，则该值为0(关闭)。
  - `first`: 要填充的第一个像素的索引，从0开始。必须在界内，不执行裁剪。如果未指定则为0。
  - `count`: 要填充的像素数，为正值。传递0或不指定将填充到条带的末尾。

- `void setBrightness(uint8_t b)` —— 调节输出亮度。不会立即影响当前显示在led上的内容。下一次调用 `show()` 将刷新此级别的led。
  **输入参数**:

  - `b`: 亮度设置，0=最小(关闭)，255=最亮。

- `void clear(void)` ——  用0 / black / off填充整个NeoPixel条。

- `void updateLength(uint16_t n)` —— 更改先前声明的Adafruit_NeoPixel条对象的长度。旧数据被释放，新数据被清除。引脚编号和像素格式不变。

  **输入参数**:

  - `n`: 条的新长度，以像素为单位。

- `void updateType(neoPixelType t)` —— 更改先前声明的Adafruit_NeoPixel条带对象的像素格式。如果格式从RGB变体之一更改为RGBW变体（或从RGBW更改为RGB），则旧数据将被释放并清除新数据。否则，旧数据将保留在RAM中，并且不会按照新格式重新排序，因此建议随后使用 `clear()`进行清除。

  **输入参数**:

  - `t`: 像素类型 - 将Adafruit_NeoPixel.h中定义的NEO_*常量相加，例如对于期望以800 KHz（而不是400 KHz）数据流传输的NeoPixels，每个像素的颜色字节按照绿色、红色、蓝色的顺序表示，可以使用 `NEO_GRB+NEO_KHZ800` 。

- `static uint32_t Color(uint8_t r, uint8_t g, uint8_t b)` —— 将独立的红色、绿色和蓝色值转换为单个“打包”的32位RGB颜色。

  **输入参数**:

  - `r`: 红色亮度，范围从0到255。
  - `g`: 绿色亮度，范围从0到255。
  - `b`: 蓝色亮度，范围从0到255。

  **返回**: 32位打包的RGB值，可以将其分配给变量以供以后使用，或传递给 `setPixelColor()` 函数。打包的RGB格式是可预测的，不受LED串颜色顺序的影响。

### 安装

- **方法一**

在本教程中将使用 **[Adafruit NeoPixel库](https://github.com/adafruit/Adafruit_NeoPixel)** ，您可以在Arduino的库管理器中搜索并下载安装它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-rgb-matrix/4.png" style={{width:1000, height:'auto'}}/></div>

- **方法二**

通过下面按钮下载库

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/adafruit/Adafruit_NeoPixel">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

既然您已经下载了zip库文件，请打开Arduino IDE，点击 **Sketch > Include Library > Add .ZIP Library**。 选择刚刚下载的zip文件，如果库正确安装，您将在通知窗口中看到 **Library added to your libraries** 。这意味着库已成功安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

## 示例: 流动灯效

以下示例程序用于实现流动灯效果，其中灯珠将逐个顺序点亮。该程序适用于所有XIAO。

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

上传程序，如果一切顺利，您将可以看到灯珠逐个点亮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-rgb-matrix/5.jpg" style={{width:600, height:'auto'}}/></div>

:::注意
这个程序特意降低了灯珠的亮度，如果亮度拉到最大，长时间直接盯着灯珠可能会对您的眼睛造成伤害。
:::

## 多个灯板的拼接

RGB MATRIX for XIAO支持多个拼接扩展，并提供可靠的电源供应。您可以按照下图的指示顺序拼接多个灯板。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-rgb-matrix/6.jpg" style={{width:800, height:'auto'}}/></div>

:::注意
当多个灯板拼接在一起时，它们可能会变得发热且供电不足。在这种情况下，灯板可能会显示异常。请为每个灯板提供稳定的5V输入，以确保其正常工作。
:::

## 资源
- **[ZIP]** [PCB&SCH Eagle 文件](https://files.seeedstudio.com/wiki/xiao-rgb-matrix/EAGLE_XIAO_MATRIX.zip)
- **[PDF]** [ WS2812B数据手册](https://files.seeedstudio.com/wiki/xiao-rgb-matrix/WS2812B-1010-DATASHEET.pdf")

## 技术支持和产品讨论

感谢您选择我们的产品!我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以迎合不同的喜好和需求。

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>








