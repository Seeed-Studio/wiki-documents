---
title: Shield MaTrix V0.9
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Shield-MaTrix-V0.9b/
slug: /cn/Shield-MaTrix-V0.9b
last_update:
  date: 02/03/2022
  author: gunengyu
---
![](https://files.seeedstudio.com/wiki/Shield-MaTrix-V0.9b/img/Shield_matrix.jpg)

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/depot/Shield-Matrix-p-1773.html)

Shield MaTrix 是一个用于 Arduino 的可堆叠扩展板，它使得使用板载最简单的传感器学习编程成为可能。

##   版本追踪

|版本|描述|发布日期|
|------|------|--------|
| 0.9 | 原型 |2013年4月11日|
|0.9b|公开版本|2013年10月27日|

##   特性

*   兼容 Arduino Mega（推荐使用 Freaduino Mega V1.4 (ATMega 2560)）

*   支持 Arduino 扩展板

*   支持基于 nRF24L01+ 和 xBee 的无线设备

*   支持 60mm 8X8 矩阵 LED（亮红色、亮绿色、黄色）

*   红外控制（遥控器）

*   RGB LED（用于指示各种参数）

*   时钟按钮（开/关各种设置）

*   蜂鸣器（报警或按下遥控器按钮时）

*   光传感器（自动调节矩阵亮度）

*   RTC（实时时钟）

*   I2C 接口（可选输入/输出）

*   电压 9-24V 或 USB 控制器（推荐 12V 2A）

##   应用创意

*   数字时钟（同步 NTP）带报警功能
*   气象站（室内、室外、地下室的温度，气压，湿度）
*   跑马灯（读取电子邮件、社交网络等）
*   数据传输（到类似设备）

##   数据显示原理

在 LED 矩阵显示屏上显示不同信息时使用动态显示。
同时，信息仅显示在一行上（对应的 LED 点亮（红色和/或绿色）），所有其他行熄灭。下一步是熄灭上一行并点亮下一行（对应的 LED）。行切换速度非常快，眼睛会将这种切换感知为一个完整的图像。

为了最小化所需引脚的数量，使用了两种不同类型的芯片：移位寄存器（用于控制列）和解复用器（用于控制行）。

移位寄存器串联连接并通过 SPI 接口连接（所需引脚如下所述）。

解复用器有三个地址输入（DA0、DA1、DA2）——输入端的“0”和“1”组合明确指向 8 个输出中的一个，该输出将处于活动状态。此外，解复用器还有控制输入（E1、E2、E3）——通过前两个输入（E1 和 E2，它们在我们的电路中连接）实现矩阵的完全熄灭，通过输入 E3 实现亮度调节（使用 PWM）。

##   接口

*   4 个双色 LED 矩阵的接口

    *   设置移位寄存器（74HC595 - 8 个）以控制 LED 的列

    *   解复用器 74HC138 用于控制 LED 的行及其亮度（通过 PWM）

*   内置时钟（RTC）——基于 DS1307，带有备用电池（CR1220 或 CR1226）

*   RF 模块 nRF24L01+ 的接口

*   时钟按钮（例如，用于关闭报警声音）

*   38kHz 红外接收器（用于遥控器）

*   用于连接 RGB LED 的布线（公共阴极或阳极，通过跳线选择）

*   光传感器（例如，用于自动调节亮度）

*   压电换能器“蜂鸣器”

*   I2C 接口

*   xBee 接口

*   Arduino 扩展板接口

*   Arduino Mega 上的板载引脚

    *   D5 - 红外接收器

    *   D24 - 时钟按钮

*   xBee

    *   D16 - DIN

    *   D17 - DOUT

*   I2C (DS1307)

    *   D20 - SDA

    *   D21 - SCL

*   RGB LED（检查）

    *   D34 - 红色

    *   D35 - 绿色

    *   D36 - 蓝色

*   nRF24L01+

    *   D19 - RF_IRQ

    *   D37 - RF_SCK

    *   D38 - RF_MISO

    *   D39 - RF_MOSI

    *   D40 - RF_NSS

    *   D41 - RF_CE

    *   D45 - 蜂鸣器

    *   A7 - 光传感器

*   移位寄存器

    *   D42 - SS

    *   D51 - MOSI

    *   D52 - SCK

*   解复用器

    *   D49 - DA0

    *   D48 - DA1

    *   D47 - DA2

    *   D44 - E3（亮度）

    *   D43 - E1, E2（熄灭）

## 必需的库

要使用 Shield MaTrix 的各种组件，需要以下库：

显示矩阵上的信息 - MaTrix - [MaTrix](https://github.com/stepanovalex/MaTrix/archive/master.zip)（包括一个简单的显示测试和两个实时显示示例）。

*   实时时钟 (RTC) - RTClib - [RTClib](https://github.com/adafruit/RTClib/archive/master.zip)

*   红外接收器 - IRremote [IRremote](https://github.com/shirriff/Arduino-IRremote/archive/master.zip)（使用此库可以通过红外遥控器控制显示）

*   nRF24L01+ - iBoardRF24 - [iBoardRF24](https://github.com/andykarpov/iBoardRF24/archive/master.zip)（[DevDuino Sensor Node 2.4G nRF24L01+](https://www.seeedstudio.com/depot/DevDuino-Sensor-Node-V13-ATmega-328-RC2032-battery-holder-p-1774.html?cPath=19_22) 遥控库）

![](https://files.seeedstudio.com/wiki/Shield-MaTrix-V0.9b/img/Shield-matrix_nRF24L01Plus.jpg)

此外，以下库在操作过程中也需要：

*   Wire

*   SPI

*   [digitalWriteFast](https://code.google.com/p/digitalwritefast/downloads/detail?name=digitalWriteFast.zip&amp;can=2&amp;q=)

## 使用库的功能

只有两个库需要对其使用进行简单说明：

### 红外接收器

由于红外接收器连接到数字引脚 5，因此必须修改文件 /IRremote/IRremoteInt.h 的代码如下：

```
 // Arduino Mega
#if defined(__AVR_ATmega1280__) || defined(__AVR_ATmega2560__)
  //#define IR_USE_TIMER1   // tx = pin 11
  //#define IR_USE_TIMER2     // tx = pin 9
  #define IR_USE_TIMER3   // tx = pin 5
  //#define IR_USE_TIMER4   // tx = pin 6
  //#define IR_USE_TIMER5   // tx = pin 46
```

### nRF24L01+

初始化模块如下：

```
 //iBoardRF24 radio(CE,CSN,MOSI,MISO,SCK,IRQ);
iBoardRF24 radio(41,40,39,38,37,19);
```

## MaTrix 库函数

要在您的代码中使用 MaTrix 库，需要在 `void setup()` 函数中声明以下代码行：

```
#include <SPI.h>
#include <MaTrix.h>	//连接 MaTrix 库

MaTrix mymatrix;       //创建对象 mymatrix
```

## 变量

**byte array[8][8]** - 主数组。  
此数组中的数据决定当前 LED 矩阵上显示的内容。

```
 byte array[8][8] = { // 一个包含 64 字节的数组
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // 行 7
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // 行 6
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // 行 5
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // 行 4
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // 行 3
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // 行 2
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // 行 1
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000}   // 行 0
   // red3      green3      red2      green2      red1      green1       red0      green0
 };
```

每个位对应矩阵中的一个 LED。0 表示 LED "熄灭"，1 表示 LED "点亮"。

**byte shadow[8][8]** - 附加的（“影子”）数组。  
库函数用于组织各种效果和滚动文本（影子数组中的数据根据特定效果规则重写到主数组中）。

```
 byte shadow[8][8] = { // 一个包含 64 字节的数组
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // 行 7
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // 行 6
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // 行 5
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // 行 4
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // 行 3
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // 行 2
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // 行 1
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000}   // 行 0
   // red3      green3      red2      green2      red1      green1       red0      green0
 };
```

## 定义

`
`

```
 // 颜色
 #define RED    0
 #define GREEN  1
 #define YELLOW 2
```


```
 // 在“绘制”效果中的延迟迭代（毫秒）
 #define VSLOW  500
 #define SLOW   150
 #define MID    100
 #define FAST   50
 #define VFAST  25
```


```
 // 效果
 #define FADE   4
 #define LEFT   3
 #define UP     1
 #define DOWN   2
 #define NONE   0
```


```
 // 硬件数据
 #define BRIGHT 44    // 亮度（引脚 44 - PWM）
 #define LightSENS A7 // 光传感器
```



## 主函数

<u> **mymatrix.init();**</u>

<dl><dd>_描述_：初始化模块。</dd></dl>

<u> **mymatrix.clearLed();**</u>

<dl><dd>_描述_：清除显示屏。</dd></dl>

<u> **mymatrix.brightness(byte brightLevel);**</u>

<dl><dd>_描述_：设置显示屏亮度。</dd><dd>_brightLevel_：亮度级别（字节），值为 255 时设置为最大亮度。</dd></dl>

使用示例：

`
`

```
 mymatrix.brightness(177);
```



<u> **mymatrix.getBrightness();**</u>

<dl><dd>_描述_：返回当前显示屏亮度。</dd></dl>

使用示例：

`
`

```
 Serial.println(mymatrix.getBrightness());
```



<u> **printString(String s, byte pos, byte color, unsigned char *Font, char effect, int speed);**</u>

<dl><dd>_描述_：显示指定字符串。</dd><dd>_pos_：第一个字符的起始位置（字节）。从矩阵的右边缘开始计数，从 0 开始。</dd><dd>_color_：颜色（字节）。三个预定义值 - RED, GREEN, YELLOW</dd><dd>_*Font_：字体指针（无符号字符）。库中可用的字体：字符 - font5x8（拉丁），font6x8（拉丁和西里尔）；数字 - digit6x8bold, digit6x8future。有关字体的详细信息，请参阅库归档 MaTrix 的文件 fonts.c。</dd><dd>_effect_：文字效果（字符）。可用的预定义值：LEFT, UP, DOWN（向相应方向移动），FADE（显现），NONE（无效果 - 即时）。默认值 - NONE。</dd><dd>_speed_：播放效果速度（整数）。可用的预定义值：VSLOW, SLOW, MID, FAST, VFAST（从“非常慢”到“非常快”），默认值 - MID。</dd></dl>

使用示例：

`
`

```
 mymatrix.printString("123", 3, GREEN, font6x8, UP, SLOW);
```



<u> **printRunningString(String s, byte color, unsigned char *Font, int speed);**</u>

<dl><dd>_描述_：显示定义的“跑动”行。</dd><dd>_color_：颜色（字节）。三个预定义值 - RED, GREEN, YELLOW</dd><dd>_*Font_：字体指针（无符号字符）。库中可用的字体：字符 - font5x8（拉丁），font6x8（拉丁和西里尔）；数字 - digit6x8bold, digit6x8future。有关字体的详细信息，请参阅库归档 MaTrix 的文件 fonts.c。</dd><dd>_speed_：播放效果速度（整数）。可用的预定义值：VSLOW, SLOW, MID, FAST, VFAST（从“非常慢”到“非常快”），默认值 - MID。</dd></dl>

使用示例：

`
`

```
 mymatrix.printRunningString("MaTrix test!", RED, font6x8, FAST);
```



## 辅助函数

<u> **printArray();**</u>

<dl><dd>_描述_：在串口上显示主数组（array）的当前状态。</dd></dl>

<u> **printShadow();**</u>

<dl><dd>_描述_：在串口上显示“影子”数组（shadow）的当前状态。</dd></dl>

<u> **printChar(unsigned char sym, byte pos, byte color);**</u>

<dl><dd>_描述_：函数修改主数组（array），以便在矩阵中显示时，在预定位置输出所需颜色的所需符号。</dd><dd>_pos_：起始字符位置（字节）。从矩阵的右边缘开始计数，从 0 开始。</dd><dd>_color_：颜色（字节）。三个预定义值 - RED, GREEN, YELLOW</dd></dl>

注意！调用函数时使用的字体必须通过 setFont 定义。

<u> **printCharShadow(unsigned char sym, byte pos, byte color);**</u>

<dl><dd>_描述_：与 printChar 类似的函数，但修改的是“影子”数组（shadow）。</dd></dl>

<u> **printStr(unsigned char *s, byte pos, byte color);**</u>

<dl><dd>_描述_：函数修改主数组（array），以便在矩阵中显示时，在预定位置显示字符数组的所需颜色。</dd><dd>_*s_：字符数组指针（无符号字符）。</dd><dd>_pos_：第一个字符的起始位置（字节）。从矩阵的右边缘开始计数，从 0 开始。</dd><dd>_color_：颜色（字节）。三个预定义值 - RED, GREEN, YELLOW</dd></dl>

注意！调用函数时使用的字体必须通过 setFont 定义。

<u> **printStrShadow(unsigned char *s, byte pos, byte color);**</u>

<dl><dd>_描述_：与 printChar 类似的函数，但修改的是“影子”数组（shadow）。</dd></dl>

## 参考资料

[ **ZIP** ] 库的当前版本 [MaTrix](https://github.com/stepanovalex/MaTrix/archive/master.zip)。

## 原理图

![](https://files.seeedstudio.com/wiki/Shield-MaTrix-V0.9b/img/MFull.JPG)

从矩阵视角看，板子的右侧包括：

*   时钟按钮

*   nRF24l01 + 接口

*   RGB-LED 安装位置

*   选择 LED 类型跳线（共阳极或共阴极）

*   红外接收器

*   I2C 接口

![](https://files.seeedstudio.com/wiki/Shield-MaTrix-V0.9b/img/MRight.JPG)

板子的左侧包括：

*   光传感器

*   压电蜂鸣器（蜂鸣器）

![](https://files.seeedstudio.com/wiki/Shield-MaTrix-V0.9b/img/MLeft.JPG)

[设备原理图](https://files.seeedstudio.com/wiki/Shield-MaTrix-V0.9b/res/SM09b_scheme.jpg)

## 技术支持与产品讨论

如果您有任何技术问题，请将问题提交到我们的 [论坛](http://forum.seeedstudio.com/)。  
感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时获得顺畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>