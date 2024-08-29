---
description: Grove 串口液晶显示屏 V1.0
title: Grove 串口液晶显示屏 V1.0
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Serial_LCD_V1.0
last_update:
  date: 03/23/2024
  author: WuFeifei
---

![](https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/img/Lcdnew1.jpg)

Grove - Serial LCD V1.0 是我们串行 LCD 的新版本。在一块板子上，有一个 16x2 的 LCD 和一个基于 PIC HD44780 的嵌入式电路。板载 PIC 接收 TTL 串行输入，并将接收到的字符打印到 LCD 上。该库还允许执行一系列特殊命令，以便您可以清除屏幕、调整背光亮度、打开/关闭显示器等。

这款 LCD 是一款很棒的礼物，因为它可以用于许多不同的项目！

## 特点

- 非常易用。

- 波特率：9600
- 4针连接（2个I/O引脚和2个电源引脚）。
- API设计与Arduino的LiquidCrystal库相似。
- 模块自动返回监听模式。
- 附带丰富的演示应用程序。
- 背光控制以节省电力。

## 应用思路

- 为 Seeeduino / Arduino / 任何微控制器板提供 LCD 显示。

- 结合实时时钟（RTC）和温度传感器制作时间和温度显示器。
- 结合加速度计制作加速度显示器。
- 结合指南针制作航向角显示器。
- 发挥您的想象力，应用无极限。
- PC CPU 重要状态显示器：可通过合适的 UART 收发器与 PC 连接。

## 规格

| 项目               | 最小值 | 典型值 | 最大值 | 单位 |
|--|--|--|--|--|
|工作电压| 4.7| 5| 5.5| V|
|通信协议| UART||| -|
|背光控制|Yes|||-|
|工作电流：背光开启|70|75| 80|mA|
|工作电流：背光关闭|15|20| 25| mA|

## 使用方法

### 硬件安装

- 确保 [Seeeduino](https://seeeddoc.github.io/Seeeduino_V2.2/) 的工作电压设置为 5V

- 通过 **Grove Base 底板** 的终端，使用 4 针连接器将串行 LCD 连接到 [Seeeduino](https://seeeddoc.github.io/Seeeduino_V2.2/) 的软件 UART（引脚 11，引脚 12）。
- 上传固件到 Seeeduino 后，按下复位开关。

![](https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/img/SerialLCD010.jpg)

### 编程

串行 LCD 库提供了一套丰富的 API 来与串行 LCD 模块进行交互。所有可以在普通 LCD 上执行的操作都可以通过串行发送命令和数据来实现。这些 API 的设计类似于 Arduino 的 LiquidCrystal 库，以便立即迁移到串行 LCD 驱动程序。与串行 LCD 模块的交互始于初始化，此时串行 LCD 模块会向 MCU 发送指令以开始通信。初始化后，LCD 进入工作模式，开始接受用于显示的命令和数据。在交互过程中涉及的命令和响应的摘要见 [1]

### 演示应用程序

下载 [SerialLCD 库](https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/res/SerialLCD_Library.zip) 并将其解压到 Arduino IDE 的库文件中，路径为：..\arduino-1.0.1\libraries，然后您就可以使用自己的显示系统了。

如果您使用的是 Arduino 1.0 或更高版本，NewSoftSerial 已包含在 Arduino 核心中（命名为 SoftwareSerial）。

注意：当您将串行 LCD 连接到 Grove 并将示例下载到 Seeeduino/arduino 时，请确保首先重置 Seeeduino/arduino。

演示 1：Hello World

```
This sketch prints "hello, world!" on the first row and time in seconds, elapsed from RESET on second row. This uses begin(),
setCursor(row,col) and print() functions.

```

```
// include the library code:
#include <SerialLCD.h>
#include <NewSoftSerial.h> //this is a must

// initialize the library
SerialLCD slcd(11,12);//this is a must, assign soft serial pins

void setup() {
  // set up
  slcd.begin();
  // Print a message to the LCD.
  slcd.print("hello, world!");
}

void loop() {
  // set the cursor to column 0, line 1
  // (note: line 1 is the second row, since counting begins with 0):
  slcd.setCursor(0, 1);
  // print the number of seconds since reset:
  slcd.print(millis()/1000,DEC);
}
```

输出：

![](https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/img/SerialLCD_twig_helloworld_example.gif)

演示 2：间歇显示

```
这个程序将“hello World!”打印到 LCD 上，并使用 display() 和 noDisplay() 函数来开启和关闭显示。

```

```
// include the library code:
#include <SerialLCD.h>
#include <NewSoftSerial.h> //this is a must

// initialize the library
SerialLCD slcd(11,12);//this is a must, assign soft serial pins

void setup() {
  // set up
  slcd.begin();
  // Print a message to the LCD.
  slcd.print("hello, world!");
}

void loop() {
  // Turn off the display:
  slcd.noDisplay();
  delay(1000);
   // Turn on the display:
  slcd.display();
  delay(1000);
}
```

输出：
![](https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/img/SerialLCD_twig_display_example.gif)

演示 3：闪烁

```
这个程序将“hello World!”打印到 LCD 上，并使用 Blink() 和 noBlink() 函数使光标块闪烁。
```

```
// include the library code:
#include <SerialLCD.h>
#include <NewSoftSerial.h> //this is a must

// initialize the library
SerialLCD slcd(11,12);//this is a must, assign soft serial pins

void setup() {
  // set up :
  slcd.begin();
  // Print a message to the LCD.
  slcd.print("hello, world!");
}

void loop() {
  // Turn off the blinking cursor:
  slcd.noBlink();
  delay(1000);
   // Turn on the blinking cursor:
  slcd.blink();
  delay(1000);
}
```

输出：
![](https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/img/SerialLCD_twig_blink_example.gif)

演示 4：光标显示

```
这个程序将“hello World!”打印到 LCD 上，并使用 cursor() 和 noCursor() 方法来开启和关闭光标。

```

```
// include the library code:
#include <SerialLCD.h>
#include <NewSoftSerial.h> //this is a must

// initialize the library
SerialLCD slcd(11,12);//this is a must, assign soft serial pins

void setup() {
  // set up
  slcd.begin();
  // Print a message to the LCD.
  slcd.print("hello, world!");
}

void loop() {
  // Turn off the cursor:
  slcd.noCursor();
  delay(1000);
   // Turn on the cursor:
  slcd.cursor();
  delay(1000);
}
```

输出：
![](https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/img/SerialLCD_twig_cursor_example.gif)

演示 5：显示文本流动方向和光标位置

```
这个程序将“Seeeduino”两次打印到 LCD 上。这个程序使用 setCursor(col, row)、leftToRight() 和 rightToLeft() 方法来演示光标位置和文本流动方向（从左到右和从右到左）。

```

```
// include the library code:
#include <SerialLCD.h>
#include <NewSoftSerial.h> //this is a must

// initialize the library
SerialLCD slcd(11,12);//this is a must, assign soft serial pins

void setup() {
  slcd.begin();
  // Turn on the backlight
  slcd.backlight();
  // Switch on the cursor:
  slcd.cursor();
}

void loop() {
    //Set cursor at 0th Row, 0th Column (Top-Left Corner of LCD)
    slcd.setCursor(0,0);
    //Set the text flow direction left-to-right
    slcd.leftToRight();
    slcd.print("Seeeduino");

    //Set cursor at 1st Row, 15th Column (Bottom-Right Corner of LCD)
    slcd.setCursor(15,1);
    //Set the text flow direction right-to-left
    slcd.rightToLeft();
    slcd.print("Seeeduino");

}
```

输出：
![](https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/img/SerialLCD_twig_textflow_setcursor_example.jpg)

## 参考

**串行 LCD 库** 提供了一套完整的指令来利用 **LCD1602** 的功能。SerialLCD 驱动程序使用 **NewSoftSerial** 库来实现 UART 逻辑。要访问 API，首先需要创建一个 **SerialLCD** 类的对象，并提供软件串行端口（Rx 和 Tx）：

```
SerialLCD slcd(11,12); // 将 11 和 12 分配给软件串行端口的 RxD 和 TxD 引脚。
```

**功能描述：**

1.begin()

这个函数用于初始化串行 LCD 模块。

示例：

```
slcd.begin(); // Intialize LCD
```

2.print()

将文本打印到 LCD 上。这个函数有两种形式：

示例：

```
slcd.print(data);  // Data can be any text
slcd.print(data,BASE); // BASE can be BIN, DEC, OCT or HEX
slcd.print(float_data,2);//show float data,Decimal digits(1-3)
```

3.clear()

清除显示内容。

示例：

```
slcd.clear();  // Clear the Screen
```

4.home()

将光标设置到左上角。

示例：

```
slcd.home();  // go to home
```

5.noDisplay()

在不清除 RAM 的情况下关闭显示。

示例：

```
slcd.noDisplay();  // Blank the Display
```

6.display()

在 noDisplay() 之后打开显示。RAM 中已有的文本将被恢复。

示例：

```
slcd.display();  // Display the text in RAM
```

7.noBlink()

关闭闪烁的 LCD 光标。

示例：

```
slcd.noBlink();  // Disable cursor blinking
```

8.blink()

显示闪烁的 LCD 光标。如果与 SLCD_CURSOR_ON 一起使用，不同显示器上的效果可能不同。

示例：

```
slcd.blink();  // Enable cursor blinking
```

9.noCursor()

隐藏 LCD 光标。

示例：

```
slcd.noCursor();  // Disable cursor display
```

10.cursor()

显示 LCD 光标。

示例：

```
slcd.cursor();  // Enable cursor display
```

11.scrollDisplayLeft()

将显示内容（文本和光标）向左滚动一个位置。

示例：

```
slcd.scrollDisplayLeft();  // Scroll Left
```

12.scrollDisplayRight()

将显示的内容（文本和光标）向右滚动一个位置。

示例：

```
slcd.scrollDisplayRight();  // Scroll Right
```

13.leftToRight()

将写入 LCD 的文本方向设置为“从左到右”，这是默认值。这表示随后写入显示器的字符将从左到右显示，但不会影响之前输出的文本。

示例：

```
slcd.leftToRight();  // Set the text flow direction left to right
```

14.rightToLeft()

将写入 LCD 的文本方向设置为“从右到左”。这表示随后写入显示器的字符将从右到左显示，但不会影响之前输出的文本。

示例：

```
preslcd.rightToLeft();  // Set the text flow direction right to left
```

15.autoscroll()

开启 LCD 文本的自动滚动功能。这会使显示器上的每个字符将前一个字符向右推动一个位置。如果当前的文本方向是从左到右（默认值），则显示器将向左滚动。

示例：

```
slcd.autoscroll();  // Enable Auto Scroll
```

16.noAutoscroll()

关闭 LCD 文本的自动滚动功能。

示例：

```
slcd.noAutoscroll();  // Disable Auto Scroll
```

17.setCursor()

将光标设置到（列，行）位置。

示例：

```
slcd.setCursor(Col,Row);  // Scroll to X,Y position
```

18.noPower()

关闭 LCD 电源和背光灯，但 MCU（微控制器）电源仍然开启。

示例：

```
slcd.noPower();  // Turn off the LCD power and the backlight
```

19.power()

打开 LCD 电源，但不打开背光灯。

示例：

```
slcd.power();  // Turn on the LCD power
```

20.noBacklight()

关闭背光灯。

示例：

```
slcd.noBacklight();  // Turn off the backlight
```

21.backlight()

打开背光灯。

示例：

```
slcd.backlight();  // Turn on the backlight
```

22.noPower() (new)

关闭 LCD 电源和背光灯，但 MCU（微控制器）电源仍然开启。（这是新方法或新版本的函数）

示例：

```

slcd.noPower();  // Turn off the LCD power and the backlight

```

23.power() (new)

打开 LCD 电源，但不打开背光灯。（这是新方法或新版本的函数）

示例：

```

slcd.power();  // Turn on the LCD power

```

24.noBacklight() (new)

关闭背光灯。（这是新方法或新版本的函数）

示例：

```

slcd.noBacklight();  // Turn off the backlight

```

25.backlight() (new)

打开背光灯。（这是新方法或新版本的函数）

示例：

```

slcd.backlight();  // Turn on the backlight

```

## 版本追踪

| 版本号 | 描述   | 发布日期      |
|--|--|--|
|v1.0b| 第二版 | 2011年3月20日 |

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/res/202000309_PCBA-Grove-Serial%20LCD_%E5%8E%9F%E7%90%86%E5%9B%BE.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源 ##

- **[Eagle]** [原理图和电路板文件](https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/res/202000309_PCBA-Grove-Serial%20LCD_%E5%8E%9F%E7%90%86%E5%9B%BE.zip)
- **[库文件]** [适用于 v1.0b 和 v1.1b版本的SerialLCD 库](https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/res/New_SerialLCD_Library_.zip)
- **[仓库]** [SerialLCD的github仓库](https://github.com/Seeed-Studio/Grove_SerialLCD)
- **[库文件]**  [NewSoftLibrary](http://arduiniana.org/NewSoftSerial/NewSoftSerial10c.zip)
- **[库文件]** [v1.0b-Library的小修复](https://github.com/ydirson/Wiring/commit/60e58003e8c1dc9be81d0f58b1d0f3ef9fad1446) ，用于解决begin()函数没有遵循正确协议的问题

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您在使用我们的产品时能够尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
