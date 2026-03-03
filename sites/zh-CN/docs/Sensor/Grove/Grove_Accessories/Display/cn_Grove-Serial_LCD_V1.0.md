---
description: Grove 串口 LCD V1.0
title: Grove 串口 LCD V1.0
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Serial_LCD_V1.0
last_update:
  date: 1/29/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/img/Lcdnew1.jpg)

Grove - 串口 LCD V1.0 是我们串口 LCD 的新版本。在单个板子上集成了一个 16x2 的 LCD 和一个基于 PIC HD44780 的嵌入式电路。板载 PIC 接收 TTL 串口输入，并将接收到的字符打印到 LCD 上。库还提供了一些特殊命令，您可以清屏、调整背光亮度、打开/关闭显示等。

这个 LCD 是一个很棒的礼物，因为它可以用于许多不同的项目！

## 特性 ##

- 非常易于使用。

- 波特率：9600

- 4 针连接（2 个 I/O 和 2 个电源引脚）。

- 类似于 Arduino LiquidCrystal 库的 API 设计。

- 模块自动返回监听模式。

- 提供丰富的演示应用程序。

- 背光控制以节省电力。

## 应用创意 ##

- 用于 Seeeduino / Arduino / 任何微控制器板的 LCD 显示。

- 使用 RTC 和温度传感器的时间和温度显示。

- 使用加速度计的加速度显示。

- 使用指南针的航向角显示。

- 您的想象力是极限。

- PC CPU 状态显示：可以通过合适的 UART 转换器与 PC 接口。

## 规格 ##

 |项目| 最小值| 典型值| 最大值|单位|
 |--|--|--|--|--|
 |工作电压| 4.7| 5| 5.5| V|
 |通信协议| UART||| -|
 |背光控制|是|||-|
 |工作电流：背光开启|70|75| 80|mA|
 |工作电流：背光关闭|15|20| 25| mA|

## 使用方法 ##

### 硬件安装 ###

- 确保 [Seeeduino](https://seeeddoc.github.io/Seeeduino_V2.2/) 的工作电压设置为 5V。

- 通过 **Grove 基板** 端口使用 4 针连接器将串口 LCD 连接到 [Seeeduino](https://seeeddoc.github.io/Seeeduino_V2.2/)（title=undefined）软件 UART（引脚 11 和引脚 12）。

- 在将固件上传到 Seeeduino 后按下复位开关。

![](https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/img/SerialLCD010.jpg)

### 编程 ###

串口 LCD 库提供了一组丰富的 API 用于与串口 LCD 模块交互。通过串行发送命令和数据，可以实现普通 LCD 的所有操作。API 的设计类似于 Arduino 的 LiquidCrystal 库，便于快速迁移到串口 LCD 驱动程序。与串口 LCD 模块的交互从初始化开始，在初始化过程中，串口 LCD 模块向 MCU 发送指令以开始通信。初始化后，LCD 进入工作模式，开始接受用于显示的命令和数据。交互中涉及的命令和响应总结在 [1]。

### 演示应用 ###

下载 [SerialLCD 库](https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/res/SerialLCD_Library.zip) 并将其解压到 Arduino IDE 的库文件夹中，路径为：..\arduino-1.0.1\libraries，然后您可以开始构建自己的显示系统。

如果您使用的是 Arduino 1.0 或更高版本，NewSoftSerial 已包含在 Arduino 核心中（命名为 SoftwareSerial）。  
注意：当您将串口 LCD 连接到 Grove 并将示例下载到 Seeeduino/Arduino 时，请确保先重置 Seeeduino/Arduino。

Demo 1: Hello World

```
此示例在第一行打印 "hello, world!"，在第二行打印自复位以来经过的秒数。使用了 begin()、setCursor(row,col) 和 print() 函数。
```

```cpp
// 包含库代码：
#include <SerialLCD.h>
#include <NewSoftSerial.h> //这是必须的

// 初始化库
SerialLCD slcd(11,12);//这是必须的，分配软串口引脚

void setup() {
  // 设置
  slcd.begin();
  // 打印一条消息到 LCD。
  slcd.print("hello, world!");
}

void loop() {
  // 将光标设置到第 0 列，第 1 行
  // （注意：第 1 行是第二行，因为计数从 0 开始）：
  slcd.setCursor(0, 1);
  // 打印自复位以来的秒数：
  slcd.print(millis()/1000,DEC);
}
```

输出：

![](https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/img/SerialLCD_twig_helloworld_example.gif)

Demo 2: 间歇显示

```
此示例在 LCD 上打印 "hello World!"，并使用 display() 和 noDisplay() 函数切换显示的开关。
```

```cpp
// 包含库代码：
#include <SerialLCD.h>
#include <NewSoftSerial.h> //这是必须的

// 初始化库
SerialLCD slcd(11,12);//这是必须的，分配软串口引脚

void setup() {
  // 设置
  slcd.begin();
  // 打印一条消息到 LCD。
  slcd.print("hello, world!");
}

void loop() {
  // 关闭显示：
  slcd.noDisplay();
  delay(1000);
   // 打开显示：
  slcd.display();
  delay(1000);
}
```

输出：
![](https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/img/SerialLCD_twig_display_example.gif)

Demo 3: 闪烁

```
此示例在 LCD 上打印 "hello World!"，并使用 Blink() 和 noBlink() 函数使光标块闪烁。
```

```cpp
// 包含库代码：
#include <SerialLCD.h>
#include <NewSoftSerial.h> //这是必须的

// 初始化库
SerialLCD slcd(11,12);//这是必须的，分配软串口引脚

void setup() {
  // 设置：
  slcd.begin();
  // 打印一条消息到 LCD。
  slcd.print("hello, world!");
}

void loop() {
  // 关闭闪烁光标：
  slcd.noBlink();
  delay(1000);
   // 打开闪烁光标：
  slcd.blink();
  delay(1000);
}
```

输出：
![](https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/img/SerialLCD_twig_blink_example.gif)

Demo 4: 光标显示

```
此示例在 LCD 上打印 "hello World!"，并使用 cursor() 和 noCursor() 方法切换光标的开关。
```

```cpp
// 包含库代码：
#include <SerialLCD.h>
#include <NewSoftSerial.h> //这是必须的

// 初始化库
SerialLCD slcd(11,12);//这是必须的，分配软串口引脚

void setup() {
  // 设置
  slcd.begin();
  // 打印一条消息到 LCD。
  slcd.print("hello, world!");
}

void loop() {
  // 关闭光标：
  slcd.noCursor();
  delay(1000);
   // 打开光标：
  slcd.cursor();
  delay(1000);
}
```

输出：
![](https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/img/SerialLCD_twig_cursor_example.gif)

演示 5：显示文本流方向和光标位置

```
此代码示例在 LCD 上打印两次 "Seeeduino"。此代码使用 setCursor(col,row)、leftToRight() 和 rightToLeft() 方法来演示光标位置和文本流方向（从左到右和从右到左）。
```

```
// 引入库代码：
#include <SerialLCD.h>
#include <NewSoftSerial.h> //这是必须的

// 初始化库
SerialLCD slcd(11,12);//这是必须的，分配软串口引脚

void setup() {
  slcd.begin();
  // 打开背光
  slcd.backlight();
  // 打开光标：
  slcd.cursor();
}

void loop() {
    //将光标设置在第 0 行，第 0 列（LCD 的左上角）
    slcd.setCursor(0,0);
    //设置文本流方向为从左到右
    slcd.leftToRight();
    slcd.print("Seeeduino");

    //将光标设置在第 1 行，第 15 列（LCD 的右下角）
    slcd.setCursor(15,1);
    //设置文本流方向为从右到左
    slcd.rightToLeft();
    slcd.print("Seeeduino");

}
```

输出：
![](https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/img/SerialLCD_twig_textflow_setcursor_example.jpg)

## 参考 ##

**Serial LCD 库** 提供了一整套指令来操作 **LCD1602** 的功能。SerialLCD 驱动程序使用 **NewSoftSerial** 库来实现 UART 逻辑。通过首先创建 **SerialLCD** 类的对象并提供软件串口（Rx 和 Tx）来访问 API：

```
SerialLCD slcd(11,12);// 将 11 和 12 分配为软件串口的 RxD 和 TxD 线。
```

**函数描述：**
1. begin()

此函数用于初始化 Serial LCD 模块。

示例：

```
slcd.begin(); // 初始化 LCD
```

2. print()

将文本打印到 LCD。它有两种形式：

示例：

```
slcd.print(data);  // data 可以是任何文本
slcd.print(data,BASE); // BASE 可以是 BIN, DEC, OCT 或 HEX
slcd.print(float_data,2);//显示浮点数据，小数位数(1-3)
```

3. clear()

清除显示内容。

示例：

```
slcd.clear();  // 清屏
```

4. home()

将光标设置到左上角。

示例：

```
slcd.home();  // 返回到首页
```

5. noDisplay()

关闭显示但不清除 RAM。

示例：

```
slcd.noDisplay();  // 隐藏显示内容
```

6. display()

在调用 noDisplay() 后重新打开显示。RAM 中现有的文本会被恢复。

示例：

```
slcd.display();  // 显示 RAM 中的文本
```

7. noBlink()

关闭 LCD 光标的闪烁。

示例：

```
slcd.noBlink();  // 禁用光标闪烁
```

8. blink()

显示闪烁的 LCD 光标。如果与 SLCD_CURSOR_ON 一起使用，不同显示屏上的效果会有所不同。

示例：

```
slcd.blink();  // 启用光标闪烁
```

9. noCursor()

隐藏 LCD 光标。

示例：

```
slcd.noCursor();  // 禁用光标显示
```

10. cursor()

显示 LCD 光标。

示例：

```
slcd.cursor();  // 启用光标显示
```

11. scrollDisplayLeft()

将显示内容（文本和光标）向左滚动一个位置。

示例：

```
slcd.scrollDisplayLeft();  // 向左滚动
```

12. scrollDisplayRight()

将显示内容（文本和光标）向右滚动一个位置。

示例：

```
slcd.scrollDisplayRight();  // 向右滚动
```

13. leftToRight()

设置写入 LCD 的文本方向为“从左到右”，这是默认设置。这表示后续写入显示屏的字符将从左到右，但不会影响之前输出的文本。

示例：

```
slcd.leftToRight();  // 设置文本流方向为从左到右
```

14. rightToLeft()

设置写入 LCD 的文本方向为“从右到左”。这表示后续写入显示屏的字符将从右到左，但不会影响之前输出的文本。

示例：

```
slcd.rightToLeft();  // 设置文本流方向为从右到左
```

15. autoscroll()

打开 LCD 文本的自动滚动功能。这会使显示屏上的每个字符将之前的字符向一个位置推移。如果当前文本方向是从左到右（默认），显示屏会向左滚动。

示例：

```
slcd.autoscroll();  // 启用自动滚动
```

16. noAutoscroll()

关闭 LCD 文本的自动滚动功能。

示例：

```
slcd.noAutoscroll();  // 禁用自动滚动
```

17. setCursor()

将光标设置到（列，行）位置。

示例：

```
slcd.setCursor(Col,Row);  // 滚动到 X,Y 位置
```

18. noPower()

关闭 LCD 电源和背光，但 MCU 电源仍然开启。

示例：

```
slcd.noPower();  // 关闭 LCD 电源和背光
```

19. power()

打开 LCD 电源但不打开背光。

示例：

```
slcd.power();  // 打开 LCD 电源
```

20. noBacklight()

关闭背光。

示例：

```
slcd.noBacklight();  // 关闭背光
```

21. backlight()

打开背光。

示例：

```
slcd.backlight();  // 打开背光
```

22. noPower()（新）

关闭 LCD 电源和背光，但 MCU 电源仍然开启。

示例：

```
slcd.noPower();  // 关闭 LCD 电源和背光
```

23. power()（新）

打开 LCD 电源但不打开背光。

示例：

```
slcd.power();  // 打开 LCD 电源
```

24. noBacklight()（新）

关闭背光。

示例：

```
slcd.noBacklight();  // 关闭背光
```

25. backlight()（新）

打开背光。

示例：

```
slcd.backlight();  // 打开背光
```

## 版本追踪 ##

 |修订版|描述|发布日期|
 |--|--|--|
 |v1.0b|第二版|2011年3月20日|

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/res/202000309_PCBA-Grove-Serial%20LCD_%E5%8E%9F%E7%90%86%E5%9B%BE.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源 ##

- **[Eagle]** [原理图和板文件](https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/res/202000309_PCBA-Grove-Serial%20LCD_%E5%8E%9F%E7%90%86%E5%9B%BE.zip)
- **[库]** [适用于 v1.0b 和 v1.1b 的 SerialLCD 库](https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/res/New_SerialLCD_Library_.zip)
- **[代码库]** [SerialLCD 的 GitHub 仓库](https://github.com/Seeed-Studio/Grove_SerialLCD)
- **[库]** [NewSoftLibrary](http://arduiniana.org/NewSoftSerial/NewSoftSerial10c.zip)
- **[库]** [对 v1.0b 库的小修复](https://github.com/ydirson/Wiring/commit/60e58003e8c1dc9be81d0f58b1d0f3ef9fad1446)，修复了 begin() 未遵循正确协议的问题

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时获得最佳体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>