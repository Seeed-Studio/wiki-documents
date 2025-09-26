---
description: Grove 初学者套件 for Arduino(EOL)
title: Grove 初学者套件 for Arduino(EOL)
keywords:
- Kit with Courses
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove_Beginner_Kit_for_Arduino
last_update:
  date: 2/14/2023
  author: hushuxu
---


## GROVE 系统

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/pack.jpg)

Grove 是一个模块化原型系统，由基础单元和各种带有标准化连接器的模块组成。基础单元通常是一个微处理器，允许与 Grove 模块进行通信、处理和控制输入或输出。每个 Grove 模块通常处理单一功能，从简单的按钮到更复杂的心率传感器。标准化的 Grove 连接器允许用户采用积木式方法组装 Grove 单元，与基于跳线或焊接的系统相比，它更容易组装或拆卸，这简化了实验、构建和原型制作的学习系统。
我们还为各种开发平台提供 Grove 转排针转换器或 Grove Base HAT，适用于那些想要在没有 Grove 系统开发板的情况下使用 Grove 传感器和执行器模块的用户。

![Grove 排针](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/grove-wire.jpg)![Grove 连接器](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/connector.png)![Grove-跳线](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/jumperwire.png)

Grove 系统用户需要至少具备一些基本的电子知识背景，否则您需要通过这个基础教程来学习 Grove 系统的一些基本操作，本教程的第一部分包含入门套件中包含的组件的基本信息列表，然后是 Seeeduino Lotus 的 Arduino IDE 基本设置。接下来，11 个教程课程提供了入门套件中每个单独组件的基本操作以及通过组合多个模块的应用，这为学习者提供了一些关于 Grove 系统连接和编程的见解和基础知识。

## Grove 初学者套件 for Arduino

Grove 初学者套件 for Arduino 包含一个 Seeeduino Lotus V1.1 开发板（Arduino 兼容）和 8 个模块。详细信息如下所列。

### 开发板

#### Seeeduino Lotus V1.1

Seeeduino Lotus 是一个带有 ATMEGA328 AVR 微控制器的开发板，它是 Seeeduino 和 Grove Base Shield 的组合。它使用 Atmel ATmege328-MU 微控制器和 CP2102N 芯片，ATmege328-MU 是一个高性能、低功耗的 AVR 8 位微控制器，CP2102N 是一个 USB 转串口转换器芯片，允许您通过 micro-USB 电缆与计算机通信 Seeeduino Lotus。Seeeduino Lotus 有 14 个数字输入/输出（6 个可用作 PWM 输出）和 7 个模拟输入/输出，一个 micro USB 连接，一个 ICSP 排针，12 个 Grove 连接器，一个复位按钮。

**特性**

- 完全兼容 Arduino UNO
- ATmega328 微控制器
- 2 个板载 Grove 连接器
- 14 个数字 I/O 引脚（6 个 PWM 输出）
- 6 个模拟输入
- ISP 排针
- Arduino UNO-R3 扩展板兼容
- Micro USB 编程和供电
- 5V 工作电压
- 支持 Windows、Mac OS 和 Linux

**硬件**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/pinout.png)

LED-D13：一个 LED 连接到板子的 D13 引脚。这可以用作程序/草图的板载 LED 指示器。

USB 输入：USB 端口用于将板子连接到您的 PC 进行编程和供电。Micro USB 是一种非常常见的 USB 端口类型，可以在大多数 Android 手机和其他设备上找到。您的家里可能有几十根这样的电缆。

复位：这个按钮方便地放置在侧面，允许您即使在顶部放置扩展板时也能复位 Seeeduino 板。而其他 Arduino 板上的按钮放置在顶部，这使得在连接扩展板时很难触及。

电源引脚、模拟引脚和数字引脚：当您想要连接其他非 Grove 连接器传感器和执行器时，这些额外的排针可用，特别是电源排针在您想要为更多传感器/设备供电时使用。

Grove 连接器：Seeed Studio 有各种传感器/设备可以利用这种模拟、数字、I2C 和 UART 连接。此外，我们销售独立的 Grove 连接器来帮助您制作自己的传感器连接。

ICSP：这是 ATmega328P 的 ICSP 连接，它位于 Arduino Uno、Due、Mega 和 Leonardo 兼容硬件的标准 ICSP/SPI 位置。此端口中的 SPI 引脚：MISO、SCK 和 MOSI，也分别连接到数字引脚 12、13 和 11，就像 Arduino Uno 的那些一样。

USB 2 Uart：USB-2-Uart 的引脚排列。通过将板载 ATmega328 置于复位模式，这些焊盘可用于与其他 UART 设备交互。这使得 Seeeduino Lotus 可以用作 USB2UART 实用板。

**Arduino UNO vs Seeeduino Lotus**

|                        | Seeeduino Lotus V1.1 | Arduino Uno R3 |
|:----------------------:|:--------------------:|:--------------:|
|      发布日期      |        2018/03       |     2016/02    |
|     微控制器    |      ATMega328P      |   ATMega328P   |
|    工作电压   |          5V          |       5V       |
|          闪存         |         32KB         |      32KB      |
|          SRAM          |          2KB         |       2KB      |
|         EEPROM         |          1KB         |       1KB      |
| 电源接口 |       Micro USB      |  USB, DC Port  |
|    Grove 连接器    |          12          |      None      |

#### 传感器

**[Grove - 蜂鸣器](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/buzzer.jpg)

该模块使用压电蜂鸣器作为主要组件，当连接到数字输出并且逻辑电平设置为高电平时，它可以产生高音调，否则它可以根据连接到它的模拟PWM输出产生的频率产生各种音调。（注意：正常人耳能够分辨的频率范围在20 Hz到20kHz之间。）

**[Grove - 倾斜开关](https://www.seeedstudio.com/Grove-Tilt-Switch-p-771.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/Tilt.jpg)

Grove-倾斜开关相当于一个按钮，用作数字输入。倾斜开关内部有一对小球，当外壳直立时与引脚接触。倾斜外壳时，小球不接触，因此不形成连接。它连接到SIG线，此Grove模块不使用NC。

**[Grove - 可链接RGB LED](https://www.seeedstudio.com/Grove-Chainable-RGB-Led-V2-0-p-2903.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/Grove-Chainable_RGB_LED_V2.0.jpg)

Grove - 可链接RGB LED基于P9813芯片，这是一个全彩LED驱动器。它提供3个恒流驱动器以及256级灰度的调制输出。它使用2线传输（数据和时钟）与MCU通信。这种2线传输可用于级联额外的Grove - 可链接RGB LED模块。内置时钟再生增强了传输距离。此Grove模块适用于任何彩色LED项目。

**[Grove - 光传感器](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-p-2727.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/lightsensor.jpg)

Grove - 光传感器集成了一个光敏电阻（光依赖电阻）来检测光强度。当光强度增加时，光敏电阻的阻值减小。板载双运放芯片LM358产生与光强度相对应的电压（即基于阻值）。输出信号是模拟值，光线越亮，值越大。

**[Grove - 循线传感器](https://www.seeedstudio.com/Grove-Line-Finder-v1-1-p-2712.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/linefinder.jpg)

Grove-循线传感器专为循线机器人设计。它有一个红外发射LED和一个红外敏感光电晶体管。它可以向微控制器输出数字信号，使机器人能够跟随白色背景上的黑线，或反之亦然。

**[Grove - LCD RGB背光](https://www.seeedstudio.com/Grove-LCD-RGB-Backlight-p-1643.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/LCD.jpg)

这个Grove - LCD RGB背光模块是一个16字符2行LCD显示器，它使用I2C总线接口与开发板通信，因此将引脚头从10个减少到2个，这对Grove系统非常方便。此LCD显示模块还支持自定义字符，您可以通过简单的编码配置在此LCD模块上创建和显示心形符号或火柴人。

**[Grove - 温湿度传感器(DHT11)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT1-p-745.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/DHT11.jpg)

这个温湿度传感器提供预校准的数字输出。独特的电容式传感器元件测量相对湿度，温度由负温度系数（NTC）热敏电阻测量。它具有出色的可靠性和长期稳定性。请注意，此传感器不适用于0度以下的温度。

**[Grove - 3轴数字加速度计](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-1-5-p-765.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/3_axis_cover.jpg)

3轴数字加速度计是方向检测、手势检测和运动检测等项目的关键部分。这个3轴数字加速度计(±1.5g)基于飞思卡尔的低功耗模块MMA7660FC。它具有高达10,000g的高冲击生存能力和可配置的每秒采样率。对于不需要太大测量范围的通用应用，这是一个很好的选择，因为它耐用、节能且成本效益高。

## 入门指南

### 最低要求

- Grove 入门套件
- micro USB 数据线
- 安装了 Arduino IDE 的计算机

### 基础教程

#### Arduino IDE 基本设置

**步骤 1.** 为 Seeeduino Lotus V1.1 安装 USB 转串口驱动

Seeeduino lotus 版本 1.1 及以上版本采用了 CP2102N USB 转串口芯片，它支持大多数操作系统，包括 Windows、MacOS 和 Linux，请下载并安装适合您操作系统的相关驱动程序。
下载链接：
官方网站：[CP210x USB to UART Bridge VCP Drivers](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/logo.jpg)

**安装驱动**

Windows：

解压下载的压缩驱动文件，打开解压后的文件，根据您操作系统的位数选择安装相关驱动，在这种情况下我们选择了 64 位，32 位操作系统用户应选择 _x86 文件，按照安装向导进行安装。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/win1.png)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/win2.png)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/win3.png)

Mac OS：

双击 "Silicon Labs VCP Driver.pkg" 文件，按照设置向导进行安装。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/mac1.png)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/mac2.png)

**步骤 2.** 下载并安装 [Arduino IDE](https://www.arduino.cc/en/Main/Software)

请根据您的操作系统下载并安装 Arduino IDE。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard.png)

<b id="step3">步骤 3.</b> 为 Seeeduino Lotus 添加库

- 打开 Arduino | Preferences，在首选项窗口的设置页面下找到 Additional Boards Manager URLS，将库 URL 复制并粘贴到文本框中，然后按确定使其生效。
库 URL： [https://raw.githubusercontent.com/Seeed-Studio/Seeed_Platform/master/package_legacy_seeeduino_boards_index.json](https://raw.githubusercontent.com/Seeed-Studio/Seeed_Platform/master/package_legacy_seeeduino_boards_index.json)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard1.png)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard2.png)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard3.png)

- 打开 Tools | Board: | Boards Manager，搜索 Seeeduino AVR 并点击安装来安装 Seeeduino AVR 库。如果您在 Boards Manager 窗口中看不到 Seeeduino AVR 列表，请重复第一步并确保您输入的 URL 是正确的。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard4.png)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard5.png)

- 打开 Tools | Board：在二级列表下您应该找到 Seeeduino AVR Boards 部分如图所示，请根据您的开发环境选择正确的开发板，在本教程中我们应该选择 Seeeduino Lotus。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard6.png)
 
**步骤 4.** 连接 Seeeduino Lotus

请通过 Micro-USB 数据线连接 Seeeduino Lotus 和计算机，Seeeduino lotus 上的绿色电源 LED 应该点亮。

![with micro-USB](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/usb.jpg)

**步骤 5.** 为 Seeeduino Lotus 配置 IDE

请按照之前显示的步骤，在 Boards Manager 下选择 "Seeeduino Lotus"。

从 Tools | Serial Port 菜单中选择 Arduino 开发板的串口设备。要找出正确的串口设备，您可以断开 Arduino 开发板的连接并重新打开菜单；消失的条目应该就是 Arduino 开发板。重新连接开发板并选择该串口。您选择的条目应该包含 "SLAB_USB"。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard07.png)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard7.png)

将 "Tools | Programmer" 设置为 "AVR ISP"。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard8.png)

### 闪烁演示

完成 Arduino IDE 的所有基本设置后，我们现在可以在 Seeeduino Lotus 开发板上测试闪烁演示代码。注意：您应该完成上述步骤才能继续以下操作。

**从菜单选择闪烁演示**

从菜单栏选择 File | Examples | 01 Basics | Blink，闪烁示例代码应该出现在新窗口中。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard9.png)

**上传代码**

请确保在工具菜单下选择了正确的开发板、端口和编程器。
现在我们可以通过按 IDE 左上角的右箭头图标将代码上传到 Lotus 开发板中。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard10.png)

代码成功上传后，IDE 的日志窗口中应该出现文本 "avrdude done. Thank you."。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard11.png)

现在您应该看到内置 LED 以一秒间隔闪烁。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/blink.jpg)

**闪烁代码说明**

void setup() 是设置函数，只在您按下复位或给开发板上电时运行一次。

```cpp

void setup() {
}

```

将数字引脚 LED_BUILTIN 初始化为输出。

```cpp

pinMode(LED_BUILTIN, OUTPUT);

```

void loop() 是循环函数，会永远反复运行。

```cpp

void loop() {
}

```

digitalWrite() 用于将 LED_BUILTIN 引脚设置为电压电平 HIGH，这意味着点亮 LED。同样，要关闭 LED，只需通过将代码中的 HIGH 改为 LOW 来将电压电平设置为 LOW。

```cpp

digitalWrite(LED_BUILTIN, HIGH);
digitalWrite(LED_BUILTIN, LOW);

```

delay() 意味着暂停程序，括号内的数字表示暂停（延迟）的时间量（以毫秒为单位）。

```cpp

delay(1000);

```

## Grove 入门套件 10 节教程

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/kit.jpg)

### 目标

本节包含 10 个教程，这些教程可以分为两个部分，前 8 节介绍此入门套件中每个单独模块的基本操作，最后 2 节使用示例案例展示如何将模块组合并应用于实际应用中。

### 先决条件

使用 Arduino IDE 操作 Seeeduino Lotus 的基础知识和编程技能对本教程至关重要。因此，请确保您已完成上述基本设置教程，并成功在您的操作系统上为 Seeeduino Lotus 安装了 USB 转串口驱动程序，完成了 Blink LED 演示并确保它与 Seeeduino Lotus 开发板完全正常工作。

### 学习成果

- 能够操作 Arduino IDE 为 Seeeduino Lotus V1.1 编写代码以驱动 Grove 入门套件中的模块。
- 能够识别此套件中包含的模块类型及其应用。
- 能够演示 Grove 入门套件的每个组件，并在本教程后将相关模块应用到您自己的项目中

### 第 1 节：Grove - 蜂鸣器

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/buzzer.jpg)

**目标** 

使用蜂鸣器产生一些噪音，并设置特定频率来产生一些音调。

**关键知识**

- 蜂鸣器模块是一个执行器。
- 使用数字信号产生蜂鸣声
- 通过相应设置频率产生特定音调
- 使用 tone(pin, frequency, duration) 函数让蜂鸣器播放音乐
- 学习如何在 Arduino IDE 中使用"for 循环"

**硬件要求**

自备

- micro-USB 线缆
- 安装了 Arduino IDE 和串口转 USB 驱动程序的计算机

套件中包含

- Seeeduino Lotus V1.1 开发板
- Grove 线缆
- Grove – 蜂鸣器模块 

**硬件连接**

**步骤 1.** 请使用 Grove 线缆将 Grove - 蜂鸣器模块连接到 Seeeduino Lotus 的 D6 端口

![D6 with seeeduino](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/buzzer_ard.jpg)

**步骤 2.** 通过 micro USB 线缆将 Seeeduino Lotus 与计算机连接。

**软件编程** 

**示例 1**：使用数字逻辑高/低电平让蜂鸣器"蜂鸣"

步骤 1：将以下代码复制并粘贴到 Arduino IDE 中

```
//将蜂鸣器分配为引脚 6
#define buzzer 6

void setup()
{
  //设置蜂鸣器为输出
  pinMode(buzzer, OUTPUT);
}

void loop()
{ //打开蜂鸣器（设置逻辑电平为高）
  digitalWrite(buzzer, HIGH);
  //等待 1 秒
  delay(1000);
  //关闭蜂鸣器（设置逻辑电平为低）
  digitalWrite(buzzer, LOW);
  //等待 1 秒
  delay(1000);
}

```

步骤 2：将代码上传到 Seeeduino Lotus

步骤 3：观察结果

:::success
 当代码上传完成后，您可以听到"嗡嗡"声，每次响声之间间隔 1 秒。
:::
**示例 2**：使用不同频率让蜂鸣器产生不同音调。

步骤 1：复制并粘贴以下代码到 Arduino IDE

```cpp

//将蜂鸣器分配为引脚 6 
#define buzzer 6                

void setup()
{
  /* tone(pin, frequency, duration) */
  //设置蜂鸣器引脚播放 264Hz 持续 300ms
  tone(buzzer, 262, 300);
  //等待 1s
  delay(1000);

  //设置蜂鸣器引脚播放 297Hz 持续 300ms
  tone(buzzer, 294, 300);
  //等待 1s
  delay(1000);

  //设置蜂鸣器引脚播放 330Hz 持续 300ms
  tone(buzzer, 330, 300);
  //等待 1s
  delay(1000);
}

void loop()
{
  // 不需要重复播放音调。
}

```

步骤 2：将代码上传到 Seeeduino Lotus

步骤 3：观察结果

:::success
 当代码上传完成后，你应该能听到蜂鸣器发出"Do、Re、Mi"的声音。
:::
**示例 3**：使用 tone(pin, frequency, duration) 函数让蜂鸣器播放音乐 

步骤 1：复制并粘贴以下代码到 Arduino IDE

```cpp

// initalise the frequency of the notes
#define NOTE_A4  440
#define NOTE_AS4 466
#define NOTE_C4  262
#define NOTE_D4  294
#define NOTE_E4  330
#define NOTE_F4  349
#define NOTE_G4  392
#define NOTE_C5  523

//assign buzzer as pin 6
#define buzzer 6

// notes in the melody:
int melody[] = {
  NOTE_C4, NOTE_C4, NOTE_D4, NOTE_C4, NOTE_F4, NOTE_E4,
  NOTE_C4, NOTE_C4, NOTE_D4, NOTE_C4, NOTE_G4, NOTE_F4,
  NOTE_C4, NOTE_C4, NOTE_C5, NOTE_A4, NOTE_F4, NOTE_E4, NOTE_D4,
  NOTE_AS4, NOTE_AS4, NOTE_A4, NOTE_F4, NOTE_G4, NOTE_F4
};

// note durations: 4 = quarter note, 8 = eighth note, etc.:
int noteDurations[] = {
  8, 8, 4, 4, 4, 2,
  8, 8, 4, 4, 4, 2,
  8, 8, 4, 4, 4, 4, 4,
  8, 8, 4, 4, 4, 2,
};

void setup() {
  // iterate over the notes of the melody:
  for (int thisNote = 0 ; thisNote < 25 ; thisNote++) {

    // to calculate the note duration, take one second divided by the note type.
    //e.g. quarter note = 1000 / 4, eighth note = 1000/8, etc.
    int noteDuration = 1000 / noteDurations[thisNote];
    tone(buzzer, melody[thisNote], noteDuration);

    // to distinguish the notes, set a minimum time between them.
    int pauseBetweenNotes = noteDuration * 1.30;
    delay(pauseBetweenNotes);
    noTone(buzzer);
  }
}

void loop() {
  // no need to repeat the melody.
}

```

步骤 2：将代码上传到 Seeeduino Lotus

步骤 3：观察结果

:::success
 当代码上传完成后，你应该能听到蜂鸣器发出的旋律，请听听这是什么歌曲。
:::

**进一步探索**

请查看 Brett Hagman 的 GitHub 仓库 "[Tone](https://github.com/bhagman/Tone)" 来创建音调和音乐。

### 第 2 节：Grove - 倾斜开关

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/Tilt.jpg)

**目标** 
使用倾斜开关模块来开启/关闭 Seeeduino Lotus 上的内置 LED，并且使用倾斜开关让前一节的蜂鸣器模块发出蜂鸣声。

**关键知识**

- 倾斜开关是一个信号输入模块
- 倾斜开关的操作
- 使用 digitalRead(pin) 函数从倾斜开关获取输入逻辑信号，开启时为 HIGH，关闭时为 LOW。
- if(condition){}else{} 函数和比较运算符，如 !=(不等于)、&lt;(小于)、&lt;=(小于或等于)、==(等于)、&gt;(大于) 和 &gt;=(大于或等于)。

**硬件要求**

自备

- micro-USB 数据线
- 安装了 Arduino IDE 和串口转 USB 驱动的计算机

套件包含

- Seeeduino Lotus V1.1 开发板
- Grove 数据线
- Grove – 倾斜开关
- Grove – 蜂鸣器
 
**硬件连接**

步骤 1：将 Grove – 倾斜开关连接到 Seeeduino Lotus 的 D5 端口。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/tilt_ard.jpg)

步骤 2：用 micro USB 数据线将 Seeeduino Lotus 与计算机连接

**软件编程** 
**示例 1**：使用串口监视器观察倾斜开关的行为

步骤 1：复制并粘贴以下代码到 Arduino IDE

```cpp

//将名称 tiltswitchPin 分配给引脚 5
#define tiltswitchPin 5
//创建一个名为 'val' 的整数变量来存储读取的值
int val;

void setup()
{
  //将 tiltswitchPin 的引脚模式设置为输入
  pinMode(tiltswitchPin, INPUT);
  // 打开串口，设置数据传输速率为 9600 bps
  Serial.begin(9600);
}

void loop()
{ //读取倾斜开关输入
  val = digitalRead(tiltswitchPin);
  //显示倾斜开关状态，1 为开启，0 为关闭。
  Serial.println(val);
}

```

步骤 2：将代码上传到 Seeeduino Lotus

步骤 3：打开串口监视器

要打开串口监视器，请从菜单栏选择 工具 | 串口监视器，或者简单地点击工具栏上的放大镜图标。注意：请等待代码上传完成后再打开串口监视器。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard12.png)

步骤 4：观察结果

请向两个方向倾斜倾斜开关，您应该在串口监视器中看到显示"1"或"0"，现在您可以找到倾斜开关开启/关闭的正确方向。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/tilt_off&on.jpg)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard13.png)

**示例 2**：使用倾斜开关开启/关闭内置 LED

步骤 1：复制并粘贴以下代码到 Arduino IDE

```cpp

//将引脚 5 设置为 tiltSwitch
#define tiltSwitch 5

void setup()
{ //将引脚 5（倾斜开关）设置为输入引脚
  pinMode(tiltSwitch, INPUT);
  //将引脚 13（内置 LED）设置为输出引脚
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop()
{ //读取倾斜开关的状态
  if (HIGH == digitalRead(tiltSwitch)) {
    /*
       如果倾斜开关的逻辑电平
       为高电平，则开启内置 LED
    */
    digitalWrite(LED_BUILTIN, HIGH);
  } else
  {
    //否则关闭内置 LED
    digitalWrite(LED_BUILTIN, LOW);
  }
}

```

步骤 2：将代码上传到 Seeeduino Lotus

步骤 3：观察结果

:::success
 现在您应该能够通过将倾斜开关倾斜到正确的方向来打开/关闭 Seeeduino Lotus 上的内置 LED。
:::
![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/tilt_off&on.jpg)

**示例 3**：使用倾斜开关暂停和播放蜂鸣器的铃声
请将 Grove – 蜂鸣器模块连接到 Seeeduino Lotus 的 D6 端口

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/buzzer_tilt.jpg)

步骤 1：复制并粘贴以下代码到 Arduino IDE

```cpp

// 初始化音符的频率
#define NOTE_A4  440
#define NOTE_AS4 466
#define NOTE_C4  262
#define NOTE_D4  294
#define NOTE_E4  330
#define NOTE_F4  349
#define NOTE_G4  392
#define NOTE_C5  523

// 旋律中的音符：
int melody[] = {
  NOTE_C4, NOTE_C4, NOTE_D4, NOTE_C4, NOTE_F4, NOTE_E4,
  NOTE_C4, NOTE_C4, NOTE_D4, NOTE_C4, NOTE_G4, NOTE_F4,
  NOTE_C4, NOTE_C4, NOTE_C5, NOTE_A4, NOTE_F4, NOTE_E4, NOTE_D4,
  NOTE_AS4, NOTE_AS4, NOTE_A4, NOTE_F4, NOTE_G4, NOTE_F4
};

// 音符持续时间：4 = 四分音符，8 = 八分音符，等等：
int noteDurations[] = {
  8, 8, 4, 4, 4, 2,
  8, 8, 4, 4, 4, 2,
  8, 8, 4, 4, 4, 4, 4,
  8, 8, 4, 4, 4, 2,
};

//将引脚5设置为tiltSwitch
#define tiltSwitch 5
//将引脚6设置为buzzer
#define buzzer 6
// 设置变量currentNote来存储最新播放的音符
int currentNote;

void setup()
{
  //将引脚5（倾斜开关）设置为输入引脚
  pinMode(tiltSwitch, INPUT);
}

void loop()
{
  /*读取倾斜开关的状态
如果倾斜开关的逻辑电平
为高，开始播放音乐 */
  if (HIGH == digitalRead(tiltSwitch)) {

for (int thisNote = currentNote ; thisNote < 25 ; thisNote++) {
  // 要计算音符持续时间，用一秒除以音符类型。
  //例如 四分音符 = 1000 / 4，八分音符 = 1000/8，等等。
  int noteDuration = 1000 / noteDurations[thisNote];
  tone(buzzer, melody[thisNote], noteDuration);

  // 为了区分音符，在它们之间设置最小时间间隔。
  int pauseBetweenNotes = noteDuration * 1.30;
  delay(pauseBetweenNotes);

  /*如果音乐播放完毕，将currentNote重置为0*/
  if (thisNote >= 24) {
currentNote = 0;
  }

  /*在播放音乐期间读取倾斜开关的状态
如果倾斜开关的逻辑电平
为低，停止播放音乐并存储之前播放的
音调并跳转到下一个音调*/
  if (LOW == digitalRead(tiltSwitch)) {

//将当前音符（thisNote）存储到currentNote
currentNote = thisNote;
//通过将currentNote增加1来设置下一个准备播放的音符
currentNote ++;
/*如果音乐播放完毕，将currentNote重置到开头*/
if (currentNote >= 25)
{
  //通过将currentNote重置为0，从头开始重新播放音乐，
  currentNote = 0;
}
//如果倾斜开关设置为逻辑低电平，停止播放音乐
break;
  }
}
  }
}

```

步骤 2：将代码上传到 Seeeduino Lotus

步骤 3：观察结果

:::success
 现在您应该能够通过将倾斜开关倾斜到关闭位置来暂停铃声，并通过将倾斜开关倾斜到开启位置来恢复音调。
:::
**进一步探索**

在本节课后，您可以将倾斜开关传感器模块连接到工具箱盖上，这样当您抬起盖子时，触发倾斜开关开启，然后您可以设置一个短时间延迟来激活蜂鸣器发出一些音调，提醒您盖子仍然开着，这样您在使用完工具箱后就不会忘记关闭盖子。

### 第 3 节：Grove – 可链接 RGB LED

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/Grove-Chainable_RGB_LED_V2.0.jpg)

**目标** 

使用代码控制可链接 RGB LED 显示不同颜色，并使用倾斜开关在颜色之间切换。

**关键知识**

- Grove – 可链接 RGB LED 是一个执行器
- 为 grove 模块导入库
- 使用 setColorHSB() 函数控制 LED 模块的色调、饱和度和亮度
- 使用 setColorRGB() 函数控制 LED 模块的颜色和亮度
- 使用 %（取模）运算求余数，例如 5%2=1，9%3=0。
- 使用 switch(val)…case…; 函数

**硬件要求** 

自备

- micro-USB 数据线
- 安装了 Arduino IDE 和串口转 USB 驱动程序的计算机

套件包含

- Seeeduino Lotus V1.1 开发板
- Grove 数据线
- Grove – 可链接 RGB LED
- Grove – 倾斜开关
- Grove – 蜂鸣器

**硬件连接**

步骤 1：将 Grove – 可链接 RGB LED 连接到 Seeeduino Lotus 的 D7 端口，注意：请按如下所示连接 LED 的 G|V|DI|CI 端口。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/rgb_ard.jpg)

步骤 2：通过 micro USB 数据线将 Seeeduino Lotus 与计算机连接。

**软件编程**

**添加库**

以下步骤显示如何为 Grove – 可链接 RGB LED 添加[库](https://github.com/pjpmarques/ChainableLED/archive/v1.2.zip)。

步骤 1：从库 URL 打开 Github 仓库，并下载 zip 数据

请从 Github 页面找到"Clone or download | Download ZIP"，您必须只选择 Download ZIP，并请记住您下载和保存 zip 文件的文件路径。

步骤 2：选择"include Library | Add .ZIP Library..

请选择打开 Sketch | Include Library | Add .ZIP Library…，在新弹出的窗口中请选择您从上一步下载的 zip 文件，然后点击选择。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard14.png)

步骤 3：测试库是否添加成功

选择并打开 File | Examples | ChainableLED-1.2 | CycleTroughColors

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard15.png)

上传代码：点击上传代码

:::success
  如果 LED 模块在不同颜色之间循环，那么您就知道您已经成功加载了库。
:::
![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/rgb_flash_8.jpg)

结论：添加库方法允许用户轻松添加由传感器模块供应商制作的第三方传感器驱动程序和库，例如，在本教程会话中，我们使用的 setColorRGB(byte led, byte red, byte green, byte blue) 函数是由 Seeed Studio 实现的函数之一，这降低了用户在适配新传感器模块时的开发成本。稍后您将需要为其他 grove 模块添加更多库。

**示例 1**：使用 setColorHSB 函数改变 LED 颜色

步骤 1：将以下代码复制并粘贴到 Arduino IDE 中

```cpp

//将 ChainableLED 库添加到此项目
#include <ChainableLED.h>

//设置链接到链条的 led 数量
#define NUM_LEDS  1

/*将 leds 指定为
  ChainableLED 的名称，设置
  ChainableLED 的引脚为
  pin7（时钟引脚）和 pin8（数据引脚）
  以及 led 的数量*/
ChainableLED leds(7, 8, NUM_LEDS);

void setup()
{
  //初始化 ChainableLED leds
  leds.init();
}
//将 hue 初始化为值为 0.0 的浮点数
float hue = 0.0;
//将 up 初始化为值为 true 的布尔值
boolean up = true;

void loop()
{
  /*for 循环用于循环遍历
    连接到链条的每个 LED
    在这种情况下只有一个 LED
  */
  for (byte i = 0; i < NUM_LEDS; i++) {

    /*setColorHSB(byte led, float hue, float saturation, float brightness);
       在这种情况下设置第一个也是唯一的 chainableLED 0 具有变化的色调
       以及完全饱和度和一半亮度
    */
    leds.setColorHSB(i, hue, 1, 0.5);
    //    每种颜色延迟 50ms
    delay(50);

    /*如果 up 为 true，则以 0.025 间隔
      增加色调
      否则以 0.025 间隔
      减少色调
    */
    if (up) {
      hue += 0.025;
    }
    else
    {
      hue -= 0.025;
    }
    /*
      如果色调大于 1.0
       且 up 为 true，则将 up 设置为 false，
       否则如果色调小于或
       等于 0.0 且 up 不为
       true（! 表示不是），则将 up
       设置为 true
    */
    if (hue >= 1.0 && up)
    {
      up = false;
    }
    else if (hue <= 0.0 && !up)
    {
      up = true;
    }
  }
}

```

步骤 2：将代码上传到 Seeeduino Lotus

步骤 3：观察结果

您应该看到 LED 的颜色根据色调值的变化而改变，色调值以 0.025 的增量递增，当色调值达到 1 时，色调值应以 0.025 的减量递减直到值变为 0，每种颜色应点亮 50 毫秒。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/rgb_flash_8.jpg)

**示例 2**：使用 setColorRGB 函数改变 LED 的颜色和亮度

步骤 1：复制并粘贴以下代码到 Arduino IDE

```cpp

/*
   使用 ChainableRGB 库控制 Grove RGB 的示例。
   此代码在 LED 灯带中淡入淡出颜色。
*/

//将 ChainableLED 库添加到此项目
#include <ChainableLED.h>

//设置链接到链条的 LED 数量
#define NUM_LEDS  1

/*将 leds 指定为
  ChainableLED 的名称，设置
  ChainableLED 的引脚为
  引脚7（时钟引脚）和引脚8（数据引脚）
  以及 LED 的数量*/
ChainableLED leds(7, 8, NUM_LEDS);

void setup()
{
  //初始化 ChainableLED leds
  leds.init();
}
//初始化 power 为值为 0 的字节
byte power = 0;

void loop()
{
  /*for 循环用于遍历
    连接到链条的每个 LED
    在这种情况下只有一个 LED
  */
  for (byte i = 0; i < NUM_LEDS; i++)
  {
    /*
      % 表示取模运算以求余数
      例如 0 % 2 = 0, 1 % 2 = 1,  2 % 2 = 0...
      setColorRGB(byte led, byte red, byte green, byte blue);
      所以在这种情况下，LED 链的偶数编号
      将淡化绿色，LED 链的奇数编号
      将淡化红色，因为我们将
      第一个 LED 计为 0。
    */
    if (i % 2 == 0)
      //从 0 到全功率的更亮红色
      leds.setColorRGB(i, power, 0, 0);
    else
      //从全功率到 0 的更暗绿色
      leds.setColorRGB(i, 0, 255 - power, 0);
  }
  //设置功率增量为 10
  power += 10;
  //每个亮度点亮 0.5 秒
  delay(500);
}

```

步骤 2：将代码上传到 Seeeduino Lotus

步骤 3：观察结果

你应该看到红色 LED 每 0.5 秒增加一次亮度，因为我们只在 setColorRGB(byte led, byte red, byte green ,byte blue) 函数中设置了红色变量的值。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/rgb_eg2.jpg)

如果我们将红色和绿色变量从这样：

```cpp
leds.setColorRGB(i, power, 0, 0);
```

改为：

```cpp
leds.setColorRGB(i, power, 255-power, 0);
```

请观察差异。

**示例 3**：使用倾斜开关控制 LED 和蜂鸣器

将 Grove – 倾斜开关连接到 Seeeduino Lotus 的 D5 端口。

将 Grove – 蜂鸣器模块连接到 Seeeduino Lotus 的 D6 端口。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/rgb_buzzer_tilt.jpg)

步骤 1：复制并粘贴以下代码到 Arduino IDE

```cpp

//将ChainableLED库添加到此项目中
#include <ChainableLED.h>

//设置链接到链条的LED数量
#define NUM_LEDS  1

// 初始化音符的频率
#define NOTE_A4  440
#define NOTE_AS4 466
#define NOTE_C4  262
#define NOTE_D4  294
#define NOTE_E4  330
#define NOTE_F4  349
#define NOTE_G4  392
#define NOTE_C5  523

// 旋律中的音符：
int melody[] = {
  NOTE_C4, NOTE_C4, NOTE_D4, NOTE_C4, NOTE_F4, NOTE_E4,
  NOTE_C4, NOTE_C4, NOTE_D4, NOTE_C4, NOTE_G4, NOTE_F4,
  NOTE_C4, NOTE_C4, NOTE_C5, NOTE_A4, NOTE_F4, NOTE_E4, NOTE_D4,
  NOTE_AS4, NOTE_AS4, NOTE_A4, NOTE_F4, NOTE_G4, NOTE_F4
};

// 音符持续时间：4 = 四分音符，8 = 八分音符，等等：
int noteDurations[] = {
  8, 8, 4, 4, 4, 2,
  8, 8, 4, 4, 4, 2,
  8, 8, 4, 4, 4, 4, 4,
  8, 8, 4, 4, 4, 2,
};

//将引脚5设置为tiltSwitch
#define tiltSwitch 5
//将引脚6设置为buzzer
#define buzzer 6

/*将leds分配为ChainableLED的名称
  将ChainableLED的引脚设置为
  引脚7（时钟引脚）和引脚8（数据引脚）
  以及LED的数量*/
ChainableLED leds(7, 8, NUM_LEDS);

// 设置变量currentNote来存储最新播放的音符
int currentNote;
//将hue初始化为值为0.0的浮点数
float hue = 0.0;
//将up初始化为值为true的布尔值
boolean up = true;
//将power初始化为值为0的字节
byte power = 0;
//将color初始化为值为0的整数
int color = 0;

void setup()
{
  //将引脚5（倾斜开关）设置为输入引脚
  pinMode(tiltSwitch, INPUT);
  //初始化ChainableLED leds
  leds.init();
}

void loop()
{
  /*读取倾斜开关的状态
    如果倾斜开关的逻辑电平
    为高，开始播放音乐 */
  if (HIGH == digitalRead(tiltSwitch)) {

    for (int thisNote = currentNote ; thisNote < 25 ; thisNote++) {
      // 要计算音符持续时间，用一秒除以音符类型。
      //例如 四分音符 = 1000 / 4，八分音符 = 1000/8，等等。
      int noteDuration = 1000 / noteDurations[thisNote];
      tone(buzzer, melody[thisNote], noteDuration);

      // 为了区分音符，在它们之间设置最小时间间隔。
      int pauseBetweenNotes = noteDuration * 1.30;
      delay(pauseBetweenNotes);

      /*如果音乐播放完毕，
        将currentNote重置为0*/
      if (thisNote >= 24) {
        currentNote = 0;
      }

      /*设置LED循环显示
        不同色调的不同颜色*/
      leds.setColorHSB(0, hue, 1, 0.5);

      /*如果up为true，以0.025的间隔
        增加hue，否则以0.025的间隔
        减少hue
      */
      if (up) {
        hue += 0.025;
      }
      else
      {
        hue -= 0.025;
      }
      /*如果hue大于1.0且up为true，
         将up设置为false，否则如果
         hue小于或等于0.0且up不为
         true（!表示不是），将up
         设置为true
      */
      if (hue >= 1.0 && up)
      {
        up = false;
      }
      else if (hue <= 0.0 && !up)
      {
        up = true;
      }

      /*在播放音乐期间读取倾斜开关
        的状态，如果倾斜开关的逻辑
        电平为LOW，停止播放音乐并
        存储之前播放的音调并跳到下一个音调*/
      if (LOW == digitalRead(tiltSwitch)) {
        /* 使用switch...case设置LED循环显示三种颜色
           当color = 0时为红色，进入case 0
           当color = 1时为绿色，进入case 1
           当color = 2时为蓝色，进入case 2
           如果color大于或等于3，将color重置为0
        */
        if (color >= 3) {
          color = 0;
        }
        switch (color) {
          case 0:
            //将LED设置为红色
            leds.setColorRGB(0, 255, 0, 0);
            break;
          case 1:
            //将LED设置为绿色
            leds.setColorRGB(0, 0, 255, 0);
            break;
          case 2:
            //将LED设置为蓝色
            leds.setColorRGB(0, 0, 0, 255);
            break;
        }
        //每次进入此条件时将color增加1
        color ++;

        //将thisNote存储到currentNote
        currentNote = thisNote;
        //通过将currentNote增加1来设置下一个准备播放的音符
        currentNote ++;
        /*如果音乐播放完毕，
          将currentNote重置到开头*/
        if (currentNote >= 25)
        {
          //通过将currentNote重置为0从头开始重新播放音乐，
          currentNote = 0;
        }
        //如果倾斜开关设置为逻辑电平低，停止播放音乐
        break;
      }
    }
  }
}

```

步骤 2：将代码上传到 Seeeduino Lotus

步骤 3：观察结果

通过倾斜倾斜开关，你应该看到当倾斜开关开启时，LED 改变颜色同时蜂鸣器的音调也会改变，当倾斜开关关闭时，LED 将循环显示红色、绿色和蓝色，蜂鸣器停止工作。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/rgb_eg3.jpg)

**进一步探索**

在这个课程之后，你现在可以结合前三个课程的模块，制作一个生日礼品盒，你可以将倾斜开关传感器放在盒盖上，当盒子打开时，倾斜开关被触发，然后蜂鸣器开始播放生日歌，LED 灯开始闪烁彩色灯光。

### 课程 4：Grove - 光传感器

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/lightsensor.jpg)

**目标** 

使用光传感器模块来开启/关闭可链接 RGB LED 模块，并根据环境光强度控制 LED 的亮度。

**关键知识**

- 光传感器模块是一个模拟信号输入模块
- 使用 map(value, fromLow, fromHigh, toLow, toHigh) 函数将模拟输出的数值从一个范围重新映射到另一个范围，使其更清晰和实用。
- 使用光传感器作为光开关
- 使用光传感器通过感知环境亮度来控制 LED 亮度

**硬件要求** 

自备

- micro-USB 数据线
- 安装了 Arduino IDE 和串口转 USB 驱动的计算机

套件包含

- Seeeduino Lotus V1.1 开发板
- Grove 数据线
- Grove – 光传感器
- Grove – 可链接 RGB LED

**硬件连接**

步骤 1：将 Grove – 光传感器模块连接到 Seeeduino Lotus 的 A0 端口

步骤 2：将 Grove – 可链接 RGB LED 连接到 Seeeduino Lotus 的 D7 端口

步骤 3：用 micro USB 数据线将 Seeeduino Lotus 与计算机连接

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/light_rgb.jpg)

**软件编程**

**示例 1**：使用光传感器根据环境光的亮度来开启/关闭 LED

步骤 1：复制并粘贴以下代码到 Arduino IDE

```cpp

//将 ChainableLED 库添加到此项目
#include <ChainableLED.h>

//设置链接到链条的 LED 数量
#define NUM_LEDS  1

/*将 leds 指定为 ChainableLED 的名称，
  将 ChainableLED 的引脚设置为
  引脚7（时钟引脚）和引脚8（数据引脚）
  以及 LED 的数量*/
ChainableLED leds(7, 8, NUM_LEDS);

//将模拟引脚 A0 命名为 LightSensor
#define LightSensor A0

void setup()
{
  //初始化 ChainableLED leds
  leds.init();
}

void loop()
{
  //读取光传感器的值并存储到 value
  int value = analogRead(LightSensor);
  //如果传感器读数小于 150 则开启 LED
  if (value < 150) {
    //开启 LED
    leds.setColorRGB(0, 10, 10, 10);
    //延迟 1 秒
    delay(1000);
  } else
  {
    //关闭 LED
    leds.setColorRGB(0, 0, 0, 0);
    //延迟 1 秒
    delay(1000);
  }
}

```

步骤 2：将代码上传到 Seeeduino Lotus

步骤 3：观察结果

注意，如果环境光线太亮，你可以用手遮住光传感器模块，然后 LED 应该会亮起。当环境光线使光传感器的读数值超过 150 时，LED 应该会熄灭。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/light_eg1.jpg)

**示例 2**：使用光传感器控制 LED 的亮度

步骤 1：复制并粘贴以下代码到 Arduino IDE

```cpp

//将 ChainableLED 库添加到此项目
#include <ChainableLED.h>

//设置链接到链条的 LED 数量
#define NUM_LEDS  1

/*将 leds 指定为
  ChainableLED 的名称，设置
  ChainableLED 的引脚为
  pin7（时钟引脚）和 pin8（数据引脚）
  以及 LED 的数量*/
ChainableLED leds(7, 8, NUM_LEDS);

#define LightSensor A0

void setup()
{
  //初始化 ChainableLED leds
  leds.init();
  Serial.begin(9400);
}

//将 hue 初始化为值为 0.0 的浮点数
float hue = 0.0;
//将 up 初始化为值为 true 的布尔值
boolean up = true;

void loop()
{
  //读取光传感器的值并存储到 value
  int value = analogRead(LightSensor);
  /*map(value, fromLow, fromHigh, toLow, toHigh)
    将一个数字从一个范围重新映射到另一个范围
    在这种情况下，将光传感器的模拟值
    从 0-800 范围映射到 100-0，所以当周围环境
    的亮度高时，传感器读数值就高，因此映射值
    应该相反，所以 LED 的亮度应该更暗。
    可链接 LED 的亮度只接受浮点数，所以
    我们将映射值除以 100。
  */
  float value_float = map(value, 0, 800, 50, 0) / 100.0;
  /*setColorHSB(byte led, float hue, float saturation, float brightness);
   * 使用映射值（value_float）作为亮度
  */
  leds.setColorHSB(0, hue, 1, value_float);
  delay(100);

  /*如果 up 为 true，以 0.025 的间隔
    增加色调，否则以 0.025 的间隔
    减少色调
  */
  if (up) {
    hue += 0.025;
  }
  else
  {
    hue -= 0.025;
  }
  /*如果色调大于 1.0 且 up 为 true，
     将 up 设置为 false，否则如果色调
     小于或等于 0.0 且 up 不为 true
     （! 表示不是），将 up 设置为 true
  */
  if (hue >= 1.0 && up)
  {
    up = false;
  }
  else if (hue <= 0.0 && !up)
  {
    up = true;
  }
}

```

步骤 2：将代码上传到 Seeeduino Lotus

步骤 3：观察结果

当环境亮度增加时，LED 的亮度应该降低。当环境亮度降低时，LED 的亮度应该增加。如图所示，当有明亮的光线照射到光传感器上时，LED 变暗，否则 LED 变亮。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/light_eg2.jpg)

**进一步探索**

现在您可以将这个光传感器模块集成到您的走廊照明系统中来控制灯光的亮度，在白天时光传感器检测到阳光，然后将走廊灯的亮度调暗，这不仅节省电力，还延长了灯泡的使用寿命。

### 第 5 节：Grove - 寻线器

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/linefinder.jpg)

**目标** 

使用寻线器检测黑线，并根据寻线器是否检测到黑线来控制 LED 的颜色。

**关键知识**

- Grove – 寻线器是一个数字信号输入模块
- 复习如何使用串口监视器
- 使用信号输入模块控制 Grove – 可链接 RGB LED

**硬件要求** 

自备

- micro-USB 数据线
- 一台安装了 Arduino IDE 和串口转 USB 驱动程序的计算机

套件包含
  
- Grove – 寻线器
- Grove – 可链接 RGB LED

**硬件连接**

步骤 1：将 Grove – 寻线器模块连接到 Seeeduino Lotus 的 D3 端口

步骤 2：用 micro USB 数据线将 Seeeduino Lotus 与计算机连接

 ![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/line_ard.jpg)

**软件编程**

**示例 1**：使用串口监视器显示和测试寻线器的输出信号

步骤 1：复制并粘贴以下代码到 Arduino IDE

```cpp

//将引脚3命名为signalPin
#define signalPin 3

void setup() {
  // 将数字引脚初始化为输入：
  pinMode(signalPin, INPUT);
  // 打开串口，设置数据速率为9600 bps
  Serial.begin(9600);
}

void loop() {
  //读取寻线器输入 
  int val = digitalRead(signalPin);
  
  //显示寻线器状态，1是黑色，0是白色。
  Serial.println(val);
}

```

步骤 2：将代码上传到 Seeeduino Lotus

步骤 3：观察结果

注意，您应该与线路检测器的检测对象保持至少 5 厘米的距离，要测试线路检测器，您应该在白纸或瓷砖上贴一条黑色胶带（或使用黑色物体）。现在将线路检测器对准黑色物体，串口监视器应该显示 0，如果您将线路检测器从黑色物体上移开，串口监视器应该显示 1。

 ![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/line_eg1_1.jpg)

**示例 2**：使用线路检测器来开启或关闭 Grove – 可链式 RGB LED 模块。

将 Grove – 可链式 RGB LED 连接到 Seeeduino Lotus 的 D7 端口

 ![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/line_rgb.jpg)

步骤 1：复制并粘贴以下代码到 Arduino IDE

```cpp

//将 ChainableLED 库添加到此项目
#include <ChainableLED.h>

//设置链接到链条的 LED 数量
#define NUM_LEDS  1

/*将 leds 指定为
  ChainableLED 的名称，设置
  ChainableLED 的引脚为
  pin7（时钟引脚）和 pin8（数据引脚）
  以及 LED 的数量*/
ChainableLED leds(7, 8, NUM_LEDS);

//将 pin3 命名为 lineFinder
#define lineFinder 3

void setup() {
  // 将数字引脚初始化为输入：
  pinMode(lineFinder, INPUT);
  //初始化 ChainableLED leds
  leds.init();
}

void loop() {
  /*读取线路检测器输入
   * 如果检测到黑色（HIGH）则开启 LED
  */
  if (HIGH == digitalRead(lineFinder))
  {
    //开启 LED
    leds.setColorRGB(0, 10, 10, 10);
  }
  
  /*读取线路检测器输入
   * 如果读取到逻辑低电平则关闭 LED
  */
  if (LOW == digitalRead(lineFinder))
  {
    //关闭 LED
    leds.setColorRGB(0, 0, 0, 0);
  }
}

```

步骤 2：将代码上传到 Seeeduino Lotus

步骤 3：观察结果

您应该看到如果线路检测器检测到黑线，LED 应该熄灭，否则如果线路检测器无法检测到黑线，LED 应该点亮。

 ![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/line_eg2.jpg)

**示例 3**：使用线路检测器控制 LED 发出红光或绿光

步骤 1：复制并粘贴以下代码到 Arduino IDE

```cpp

//将 ChainableLED 库添加到此项目
#include <ChainableLED.h>

//设置链接到链条的 LED 数量
#define NUM_LEDS  1

/*将 leds 指定为
  ChainableLED 的名称，设置
  ChainableLED 的引脚为
  pin7（时钟引脚）和 pin8（数据引脚）
  以及 LED 的数量*/
ChainableLED leds(7, 8, NUM_LEDS);

//将 pin3 命名为 lineFinder
#define lineFinder 3

void setup() {
  // 将数字引脚初始化为输入：
  pinMode(lineFinder, INPUT);
  //初始化 ChainableLED leds
  leds.init();
}

void loop() {
  /*读取线路检测器输入
   * 如果检测到黑色（HIGH）设置绿色 LED
  */
  if (HIGH == digitalRead(lineFinder))
  {
    //绿色 LED
    leds.setColorRGB(0, 0, 255, 0);
  }
  
  /*读取线路检测器输入
   * 如果读取逻辑低电平设置红色 LED
  */
  if (LOW == digitalRead(lineFinder))
  {
    //红色 LED
    leds.setColorRGB(0, 255, 0, 0);;
  }
}

```

步骤 2：将代码上传到 Seeeduino Lotus

步骤 3：观察结果

您应该注意到当寻线器检测到黑线时，LED 会发出红光，否则，如果寻线器无法发现黑线，LED 应该发出绿光。

 ![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/line_eg3.jpg)

**进一步探索**

现在您可以使用这个寻线器模块和两个电机配合电机驱动器（H桥）来构建自己的循线小车，这样当寻线器检测到黑线时，激活一侧的车轮电机，一旦寻线器偏离黑线，停止旋转侧的车轮电机，并激活另一侧的车轮电机，这样小车就会沿着黑线行驶，车头不断向左或向右转向。

### 课程 6：Grove - LCD RGB 背光

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/LCD.jpg)

**目标** 

使用 Grove - LCD RGB 背光屏幕显示"Hello World"和一些自定义字符。

**关键知识**

- 复习如何添加库
- 掌握字符定位和使用二进制代码生成自定义字符。
- 在 LCD 屏幕上滚动显示文本
- 使用 LCD 内置字符代码显示特殊字符，例如度数符号"°"

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/chartable.png)

**硬件要求** 

自备

- micro-USB 数据线
- 安装了 Arduino IDE 和串口转 USB 驱动的计算机

套件包含

- Seeeduino Lotus V1.1 开发板
- Grove 数据线
- Grove - LCD RGB 背光

**硬件连接**

步骤 1：将 Grove - LCD RGB 背光模块连接到 Seeeduino Lotus 的 I2C. 端口，注意：这是带有一个点的 I2C 端口。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/lcd_ard.jpg)

步骤 2：通过 micro USB 数据线将 Seeeduino Lotus 与计算机连接。

**软件编程**

**添加库**

为 Grove - LCD RGB 背光屏幕添加[库](https://github.com/Seeed-Studio/Grove_LCD_RGB_Backlight/archive/master.zip)

请按照教程 3 中关于如何<a href="#step3">添加库</a>的说明进行操作。

**示例 1**：显示 Hello World

步骤 1：复制并粘贴以下代码到 Arduino IDE

```cpp

//包含 rgb_lcd 库
#include "rgb_lcd.h"

//将名称 lcd 分配给 rgb_lcd
rgb_lcd lcd;

void setup() 
{
    // 设置 LCD 的列数和行数：
    lcd.begin(16, 2);
    
    // 在 LCD 上打印 Hello, World!
    lcd.print("Hello, World!");
    delay(1000);
}

void loop() 
{
    // 将光标设置到第 0 列，第 1 行
    // （注意：第 1 行是第二行，因为计数从 0 开始）：
    lcd.setCursor(0, 1);
    // 打印自复位以来的秒数：
    lcd.print(millis()/1000);
    delay(100);
}

```

步骤 2：将代码上传到 Seeeduino Lotus

步骤 3：观察结果

您应该看到第一行显示"Hello, World!"，第二行显示倒计时器。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/helloworld.jpg)

**示例 2**：显示 Seeed Studio 标志并使用内置字符代码显示文本

步骤 1：复制并粘贴以下代码到 Arduino IDE

```cpp

//添加LCD库
#include "rgb_lcd.h"

//将lcd指定为rgb_lcd屏幕的名称
rgb_lcd lcd;

/*绘制自定义字符
  在这种情况下是seeed studio标志
*/
byte top_leftleft[8] = {
  B00000,
  B00000,
  B01000,
  B01000,
  B01000,
  B01100,
  B01100,
  B01110
};
byte top_midleft[8] = {
  B00001,
  B00010,
  B00010,
  B00110,
  B00110,
  B00100,
  B01100,
  B01100
};
byte top_midright[8] = {
  B10000,
  B01000,
  B01000,
  B01100,
  B01100,
  B00100,
  B00110,
  B00110
};
byte top_rightright[8] = {
  B00000,
  B00000,
  B00010,
  B00010,
  B00010,
  B00110,
  B00110,
  B01110
};
byte bot_leftleft[8] = {
  B00110,
  B00111,
  B00011,
  B00011,
  B00001,
  B00000,
  B00000,
  B00000
};
byte bot_midleft[8] = {
  B01100,
  B01110,
  B00110,
  B00110,
  B10011,
  B11011,
  B11111,
  B01111
};
byte bot_midright[8] = {
  B00110,
  B01110,
  B01100,
  B01100,
  B11001,
  B11011,
  B11111,
  B11110
};
byte bot_rightright[8] = {
  B01100,
  B11100,
  B11000,
  B11000,
  B10000,
  B00000,
  B00000,
  B00000
};

void setup()
{
  //初始化lcd屏幕;
  // 设置lcd的列数和行数:
  lcd.begin(16, 2);

  /*创建并分配每个seeed studio标志元素的编号
  */
  lcd.createChar(0, top_leftleft);
  lcd.createChar(1, top_midleft);
  lcd.createChar(2, top_midright);
  lcd.createChar(3, top_rightright);
  lcd.createChar(4, bot_leftleft);
  lcd.createChar(5, bot_midleft);
  lcd.createChar(6, bot_midright);
  lcd.createChar(7, bot_rightright);


  /* 将光标设置到第4列，第0行
    注意：第0行是第一行，因为计数从0开始
    同样的规则也适用于列
  */
  lcd.setCursor(4, 0);
  //在第4列，第0行的LCD上打印I和一个空格
  lcd.print("I ");
  //将光标设置到第6列，第0行
  lcd.setCursor(6, 0);
  /* 通过使用LCD字符查找表打印LOVE
     注意write()方法用于发送原始字节
     print()主要用于将数据格式化为ascii。
     这是在lcd上显示文本的不同方式。
  */
  //字符76在查找表中是L
  lcd.write(76);
  //十六进制数0x4F(是79)在查找表中对应O
  lcd.write(0x4F);
  //字符86在查找表中是V
  lcd.write(86);
  //字符69在查找表中是E
  lcd.write(69);
  //将光标设置到第10列，第0行
  lcd.setCursor(10, 0);
  //向LCD打印一个空格和Grove
  lcd.write(" Grove");
  //将光标设置到第4列，第1行
  lcd.setCursor(4, 1);
  //向LCD打印文本Seeed Studio
  lcd.print("Seeed Studio");

  //显示seeed studio标志
  lcd.setCursor(0, 0);
  lcd.write((unsigned char)0);
  lcd.setCursor(1, 0);
  lcd.write(1);
  lcd.setCursor(2, 0);
  lcd.write(2);
  lcd.setCursor(3, 0);
  lcd.write(3);
  lcd.setCursor(0, 1);
  lcd.write(4);
  lcd.setCursor(1, 1);
  lcd.write(5);
  lcd.setCursor(2, 1);
  lcd.write(6);
  lcd.setCursor(3, 1);
  lcd.write(7);
}

void loop()
{

}

```

步骤 2：将代码上传到 Seeeduino Lotus

步骤 3：观察结果

您将看到 Seeed Studio Logo 显示在前 8 个块中，接着在第一行显示"I Love Grove"，在第二行显示"Seeed Studio"。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/lcd_seeed.jpg)

**示例 3**：LCD 显示屏上的滚动文本

步骤 1：复制并粘贴以下代码到 Arduino IDE

```cpp


//添加LCD库
#include "rgb_lcd.h"

//将lcd指定为rgb_lcd屏幕的名称
rgb_lcd lcd;

/*绘制自定义字符
  在这种情况下是seeed studio标志
*/
byte top_leftleft[8] = {
  B00000,
  B00000,
  B01000,
  B01000,
  B01000,
  B01100,
  B01100,
  B01110
};
byte top_midleft[8] = {
  B00001,
  B00010,
  B00010,
  B00110,
  B00110,
  B00100,
  B01100,
  B01100
};
byte top_midright[8] = {
  B10000,
  B01000,
  B01000,
  B01100,
  B01100,
  B00100,
  B00110,
  B00110
};
byte top_rightright[8] = {
  B00000,
  B00000,
  B00010,
  B00010,
  B00010,
  B00110,
  B00110,
  B01110
};
byte bot_leftleft[8] = {
  B00110,
  B00111,
  B00011,
  B00011,
  B00001,
  B00000,
  B00000,
  B00000
};
byte bot_midleft[8] = {
  B01100,
  B01110,
  B00110,
  B00110,
  B10011,
  B11011,
  B11111,
  B01111
};
byte bot_midright[8] = {
  B00110,
  B01110,
  B01100,
  B01100,
  B11001,
  B11011,
  B11111,
  B11110
};
byte bot_rightright[8] = {
  B01100,
  B11100,
  B11000,
  B11000,
  B10000,
  B00000,
  B00000,
  B00000
};

void setup()
{
  //初始化lcd屏幕;
  //设置lcd的列数和行数:
  lcd.begin(16, 2);
  //等待1秒
  delay(1000);
}

void loop()
{

  /*创建并分配
    每个seeed studio标志元素的编号
  */
  lcd.createChar(0, top_leftleft);
  lcd.createChar(1, top_midleft);
  lcd.createChar(2, top_midright);
  lcd.createChar(3, top_rightright);
  lcd.createChar(4, bot_leftleft);
  lcd.createChar(5, bot_midleft);
  lcd.createChar(6, bot_midright);
  lcd.createChar(7, bot_rightright);

  /* 将光标设置到第4列，第0行
    注意：第0行是第一行，因为计数从0开始
    同样的规则也适用于列
  */
  lcd.setCursor(4, 0);
  //在第4列，第0行的LCD上打印I和一个空格
  lcd.print("I ");
  //将光标设置到第6列，第0行
  lcd.setCursor(6, 0);
  /* 通过使用LCD字符查找表打印LOVE
     注意write()方法用于发送原始字节
     print()主要用于将数据格式化为ascii。
     这是在lcd上显示文本的不同方式。
  */
  //字符76在查找表中是L
  lcd.write(76);
  //十六进制数0x4F(是79)在查找表中对应O
  lcd.write(0x4F);
  //字符86在查找表中是V
  lcd.write(86);
  //字符69在查找表中是E
  lcd.write(69);
  //将光标设置到第10列，第0行
  lcd.setCursor(10, 0);
  //向LCD打印一个空格和Grove
  lcd.write(" Grove");
  //将光标设置到第4列，第1行
  lcd.setCursor(4, 1);
  //向LCD打印文本Seeed Studio
  lcd.print("Seeed Studio");

  //显示seeed studio标志
  lcd.setCursor(0, 0);
  lcd.write((unsigned char)0);
  lcd.setCursor(1, 0);
  lcd.write(1);
  lcd.setCursor(2, 0);
  lcd.write(2);
  lcd.setCursor(3, 0);
  lcd.write(3);
  lcd.setCursor(0, 1);
  lcd.write(4);
  lcd.setCursor(1, 1);
  lcd.write(5);
  lcd.setCursor(2, 1);
  lcd.write(6);
  lcd.setCursor(3, 1);
  lcd.write(7);
  
  // 向左滚动16个位置（字符串长度）
  // 将其移动到屏幕左侧外:
  for (int positionCounter = 0; positionCounter < 16; positionCounter++) {
    // 向左滚动一个位置:
    lcd.scrollDisplayLeft();
    // 等待一会儿:
    delay(200);
  }

  // 向右滚动32个位置（字符串长度 + 显示长度）
  // 将其移动到屏幕右侧外:
  for (int positionCounter = 0; positionCounter < 32; positionCounter++) {
    // 向右滚动一个位置:
    lcd.scrollDisplayRight();
    // 等待一会儿:
    delay(200);
  }

  // 向左滚动16个位置（显示长度 + 字符串长度）
  // 将其移回中心:
  for (int positionCounter = 0; positionCounter < 16; positionCounter++) {
    // 向左滚动一个位置:
    lcd.scrollDisplayLeft();
    // 等待一会儿:
    delay(200);
  }
}

```

步骤 2：将代码上传到 Seeeduino Lotus

步骤 3：观察结果

您应该看到显示屏滚动文本，首先从右到左滚动，直到所有文本在屏幕左侧末端消失，然后文本将从左到右滚回。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/lcd_scroll.jpg)

**进一步探索**

这个[网站](https://maxpromer.github.io/LCD-Character-Creator/)帮助您为Arduino驱动的LCD屏幕生成自定义字符。

### 第7课：Grove - 温湿度传感器 (DHT11)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/DHT11.jpg)

**目标**

使用DHT11传感器模块检测周围的温度和湿度，并将DHT11的输出数据显示到LCD屏幕上。

**关键知识**

- DHT11是一个数字传感器模块
- 复习如何操作串口监视器和LCD屏幕
- 添加DHT11库并进行DHT11的初始设置
- 使用串口监视器和LCD屏幕显示DHT11传感器的数据

**硬件要求**

自备

- micro-USB线
- 安装了Arduino IDE和串口转USB驱动的计算机

套件包含

- Seeeduino Lotus V1.1开发板
- Grove线缆
- Grove – 温湿度传感器(DHT11)

**硬件连接**

步骤 1：将Grove – 温湿度传感器(DHT11)模块连接到Seeeduino Lotus的D2端口。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/DHT11_ard.jpg)

步骤 2：用micro USB线将Seeeduino Lotus与计算机连接

**软件编程**

**添加**[库文件](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor/archive/master.zip)

**示例 1**：使用串口监视器监测周围的温度和湿度

步骤 1：复制并粘贴以下代码到Arduino IDE中

```cpp

//添加DHT传感器库
#include <DHT.h>

//设置数字引脚2为DHTPIN
#define DHTPIN 2
//设置传感器类型为DHT 11
#define DHTTYPE DHT11

/*将dht指定为DHT传感器的名称
  设置传感器引脚为DHTPIN(引脚2)，
  设置传感器类型为DHTTYPE(DHT11)
*/
DHT dht(DHTPIN, DHTTYPE);

void setup() {
  //初始化dht传感器
  dht.begin();
  // 打开串口，设置数据速率为9600 bps
  Serial.begin(9600);
  //等待2秒初始化开发板
  delay(2000);
}

void loop() {
  //将湿度值存储到h
  int h = dht.readHumidity();
  //将温度值存储到t(摄氏度)
  int t = dht.readTemperature();
  //将转换后的华氏温度值存储到f
  int f = dht.convertCtoF(t);
  //显示标题Temperature in C:
  Serial.print("Temperature in C: ");
  //显示温度值t
  Serial.print(t);
  /* 注意Serial.print()和Serial.println()的区别，
     Serial.print()在同一行打印数据
     Serial.println()在新行打印数据
     显示温度单位ºC并换行
  */
  Serial.println("ºC");
  //显示标题Temperature in F:
  Serial.print("Temperature in F: ");
  //显示温度值f
  Serial.print(f);
  //显示温度单位ºF并换行
  Serial.println("ºF");
  //显示标题Humidity:
  Serial.print("Humidity: ");
  //显示湿度值h
  Serial.print(h);
  //显示%符号
  Serial.println("%");
}

```

步骤 2：将代码上传到 Seeeduino Lotus

步骤 3：打开串口监视器

步骤 4：观察结果

您应该在串口监视器中看到类似的温度和湿度数据显示文本，如下所示。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result1.png)

**示例 2**：使用 LCD 屏幕显示来自 DHT11 传感器的数据

首先将 Grove - LCD RGB 背光模块连接到 Seeeduino Lotus 的 I2C 端口，注意：这是带有一个点的 I2C 端口。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/DHT11_lcd.png)

步骤 1：复制并粘贴以下代码到 Arduino IDE

```cpp

//添加 DHT 传感器库
#include <DHT.h>
//添加 LCD 库
#include <rgb_lcd.h>

//设置数字引脚2为 DHTPIN
#define DHTPIN 2
//设置传感器类型为 DHT 11
#define DHTTYPE DHT11

/*将 dht 指定为 DHT 传感器的名称
  设置传感器引脚为 DHTPIN(引脚2)，
  设置传感器类型为 DHTTYPE(DHT11)
*/
DHT dht(DHTPIN, DHTTYPE);

//将 lcd 指定为 rgb_lcd 屏幕的名称
rgb_lcd lcd;

void setup() {
  //初始化 dht 传感器
  dht.begin();
  //初始化 lcd 屏幕；
  //设置 lcd 的列数和行数：
  lcd.begin(16, 2);
  //等待 2 秒
  delay(2000);
}

void loop() {
  //将湿度值存储到 h
  int h = dht.readHumidity();
  //将温度值存储到 t（摄氏度）
  int t = dht.readTemperature();
  
  //设置 LCD 光标到第 0 列，第 0 行
  lcd.setCursor(0, 0);
  //在 LCD 上打印文本 temperature:
  lcd.print("Temperature:");
  //设置 LCD 光标到第 12 列，第 0 行
  lcd.setCursor(12, 0);
  //在 LCD 上打印温度值 t
  lcd.print(t);
  //设置 LCD 光标到第 14 列，第 0 行
  lcd.setCursor(14, 0);
  //打印温度符号 º 是查找表中的字符 223
  lcd.write(223);
  //在 LCD 上打印 C
  lcd.print("C");
  
  //设置 LCD 光标到第 0 列，第 1 行
  lcd.setCursor(0, 1);
  //在 LCD 上打印文本 Humidity:
  lcd.print("Humidity: ");
  //设置 LCD 光标到第 10 列，第 1 行
  lcd.setCursor(10, 1);
  //在 LCD 上打印湿度值 h
  lcd.print(h);
  //设置 LCD 光标到第 12 列，第 1 行
  lcd.setCursor(12, 1);
  //在 LCD 上打印符号 %
  lcd.print("%");
}

```

步骤 2：将代码上传到 Seeeduino Lotus

步骤 3：观察结果

你可以看到当前的室温和湿度显示在 LCD 屏幕上。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/DHT11_result.jpg)

**进一步探索**

在本节课后，你可以使用 DHT11 传感器和 Grove - LCD RGB 背光显示屏构建自己的气象站。

### 第 8 节：Grove - 3 轴数字加速度计

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/3_axis_cover.jpg)

**目标** 

学习如何通过观察 LCD 屏幕上显示的输出数据来操作 3 轴数字加速度计。

**关键知识**

- 使用串口监视器显示 3 轴加速度计的偏移量和加速度值，发现输出数据与 3 轴加速度计位置之间的关系
- 使用 3 轴加速度计的偏移数据计算俯仰角和横滚角值，并观察数据变化与 3 轴加速度计位置的关系。
- 学习如何使用倾斜开关在 LCD 屏幕的页面之间切换，以便清晰地显示来自 3 轴加速度计的大量数据。

**硬件要求**

自备

- micro-USB 数据线
- 安装了 Arduino IDE 和串口转 USB 驱动程序的计算机

套件包含

- Seeeduino Lotus V1.1 开发板
- Grove 数据线
- Grove – 3 轴数字加速度计
- Grove - LCD RGB 背光显示屏
- Grove – 倾斜开关 

**硬件连接**

步骤 1：将 Grove – 3 轴数字加速度计连接到 Seeeduino Lotus 的 I2C.. 端口，注意：这是带有两个点的 I2C 端口。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/3_axis_ard.jpg)

步骤 2：用 micro USB 数据线将 Seeeduino Lotus 与计算机连接。

**软件编程**

**添加库**

请将 [3 轴加速度计驱动库](https://github.com/Seeed-Studio/Accelerometer_MMA7660/archive/master.zip) 添加到 Arduino IDE 中

**示例 1**：使用串口监视器显示 3 轴加速度计的输出数据

步骤 1：将以下代码复制并粘贴到 Arduino IDE 中

```cpp

//添加加速度计库
#include "MMA7660.h"

//将 accelemeter 指定为 MMA7660 加速度计的名称
MMA7660 accelemeter;

void setup()
{
  //初始化加速度计
  accelemeter.init();
  // 打开串口，设置数据速率为 9600 bps
  Serial.begin(9600);
}
void loop()
{
  //将 x, y, z 初始化为 int8_t
  int8_t x;
  int8_t y;
  int8_t z;
  //将 ax, ay, az 初始化为 float
  float ax, ay, az;
  //从加速度计获取 x y z 偏移值
  accelemeter.getXYZ(&x, &y, &z);
  //显示标题 x =
  Serial.print("x = ");
  //显示 x 的值
  Serial.println(x);
  //显示标题 y =
  Serial.print("y = ");
  //显示 y 的值
  Serial.println(y);
  //显示标题 z =
  Serial.print("z = ");
  //显示 z 的值
  Serial.println(z);
  
  //从加速度计获取 ax ay az 加速度值
  accelemeter.getAcceleration(&ax, &ay, &az);
  //显示标题 accleration of X/Y/Z: 
  Serial.println("accleration of X/Y/Z: ");
  //显示 ax 的值
  Serial.print(ax);
  //显示单位 g
  Serial.println(" g");
  //显示 ay 的值
  Serial.print(ay);
  //显示单位 g
  Serial.println(" g");
  //显示 az 的值
  Serial.print(az);
  //显示单位 g
  Serial.println(" g");
  //显示 ************* 作为分隔符使显示更美观
  Serial.println("*************");
  //等待 0.5 秒
  delay(500);
}

```

步骤 2：将代码上传到 Seeeduino Lotus

步骤 3：打开串口监视器

步骤 4：观察结果

请注意根据下面的图片定位 3 轴加速度计时数据的变化。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result2.jpg)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result3.png)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result4.jpg)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result5.png)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result6.jpg)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result7.png)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result8.jpg)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result9.png)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result10.jpg)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result11.png)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result12.jpg)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result13.png)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result14.jpg)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result15.png)

**示例 2**：使用 3 轴加速度计的数据计算俯仰角和横滚角的值

背景知识：

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/aircraft.png)

如上图所示：

俯仰角（横轴）θ：它的原点位于重心，指向右侧，平行于从翼尖到翼尖的连线。围绕此轴的运动称为俯仰。正俯仰运动抬起飞机机头并降低机尾。升降舵是俯仰的主要控制装置。（Aircraft principal axes 2018）

偏航角（垂直轴）ψ：它的原点位于重心，指向飞机底部，垂直于机翼和机身参考线。围绕此轴的运动称为偏航。正偏航运动使飞机机头向右移动。方向舵是偏航的主要控制装置。（Aircraft principal axes 2018）

横滚角（纵轴）Φ：它的原点位于重心，指向前方，平行于机身参考线。围绕此轴的运动称为横滚。围绕此轴的角位移称为倾斜。[3] 正横滚运动抬起左翼并降低右翼。（Aircraft principal axes 2018）

步骤 1：复制并粘贴以下代码到 Arduino IDE

```cpp

#include <Wire.h>
//添加加速度计库
#include "MMA7660.h"

//将 accelemeter 指定为 MMA7660 加速度计的名称
MMA7660 accelemeter;

//设置 alpha 值为 0.5
const float alpha = 0.5;

//初始化 fXg、fYg、fZg 为双精度浮点型，值为 0
double fXg = 0;
double fYg = 0;
double fZg = 0;
//初始化 pitch 和 roll 为双精度浮点型
double pitch, roll;

void setup()
{
  //初始化加速度计
  accelemeter.init();
  // 打开串口，设置数据速率为 9600 bps
  Serial.begin(9600);
}
void loop()
{
  //初始化 x、y、z 为 int8_t 类型
  int8_t x;
  int8_t y;
  int8_t z;
  //从加速度计获取 x y z 偏移值
  accelemeter.getXYZ(&x, &y, &z);

  //低通滤波器以减少噪声
  fXg = x * alpha + (fXg * (1.0 - alpha));
  fYg = y * alpha + (fYg * (1.0 - alpha));
  fZg = z * alpha + (fZg * (1.0 - alpha));

  //横滚角和俯仰角方程
  roll  = (atan2(-fYg, fZg) * 180.0) / M_PI;
  pitch = (atan2(fXg, sqrt(fYg * fYg + fZg * fZg)) * 180.0) / M_PI;
  //显示标题 roll =
  Serial.print("roll = ");
  //显示横滚角值
  Serial.println(roll);
  //显示标题 pitch =
  Serial.print("pitch = ");
  //显示俯仰角值
  Serial.println(pitch);
  delay(500);
}

```

步骤 2：将代码上传到 Seeeduino Lotus

步骤 3：观察结果

请将 3 轴加速度计放置在水平表面上，如下图所示。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/3_axis.jpg)

观察横滚数据
请根据上图中的绿色箭头上下翻转 3 轴加速度计，现在横滚值应该在您向下翻转时增加，向上翻转时减少，此外，当在原点（平行于水平面放置）向下翻转时横滚值为正，向上翻转时为负。

观察俯仰数据
请根据上图中的红色箭头左右倾斜 3 轴加速度计，现在俯仰值应该在您向右倾斜时增加，向左倾斜时减少，此外，当相对于原点（平行于水平面放置）向右倾斜时俯仰值为正，向左倾斜时为负。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result2.jpg)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result16.png)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result10.jpg)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result17.png)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result8.jpg)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result18.png)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result4.jpg)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result19.png)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result6.jpg)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result20.png)

现在我们可以使用 3 轴加速度计来控制或校正飞机或汽车的方向，通过将俯仰和横滚数据转换为控制信号来控制执行器，同样的技术应用于手机的自动屏幕调整，当您将手机从纵向倾斜到横向时。

**示例 3**：使用 LCD 屏幕显示来自 3 轴加速度计的输出数据

请将 Grove – 倾斜开关连接到 Seeeduino Lotus 的 D5 端口，并将 Grove - LCD RGB 背光模块连接到 Seeeduino Lotus 的 I2C. 端口，注意：这是后面带一个点的 I2C 端口。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/3_axis_lcd_tilt.jpg)

这里我们使用倾斜开关来翻转 LCD 屏幕上的页面以显示不同的数据集，当倾斜开关为 ON 时，LCD 屏幕将显示 X、Y、Z 横滚和俯仰的数据，当倾斜开关处于 OFF 位置时，LCD 屏幕将显示各个方向的加速度数据 aX、aY、aZ。

步骤 1：复制并粘贴以下代码到 Arduino IDE

```cpp

//添加加速度计库
#include "MMA7660.h"
//添加LCD库
#include <rgb_lcd.h>


//将名称tiltswitchPin分配给引脚5
#define tiltswitchPin 5

//将accelemeter分配为MMA7660加速度计的名称
MMA7660 accelemeter;
//将lcd分配为rgb_lcd屏幕的名称
rgb_lcd lcd;

//将值0.5设置给alpha
const float alpha = 0.5;

//初始化fXg, fYg, fZg为double类型，值为0
double fXg = 0;
double fYg = 0;
double fZg = 0;
//初始化pitch和roll为double类型

void setup()
{
  //初始化加速度计
  accelemeter.init();
  //初始化lcd屏幕;
  //设置lcd的列数和行数:
  lcd.begin(16, 2);
  //将tiltswitchPin的pinMode设置为输入
  pinMode(tiltswitchPin, INPUT);
  //等待2秒
  delay(2000);

}
void loop()
{
  /*如果倾斜开关打开，显示X, Y, Z, Roll和Pitch数据
    如果倾斜开关关闭，显示X, Y, Z加速度数据
  */
  if (HIGH == digitalRead(tiltswitchPin))
  {
    //初始化x, y, z为int8_t类型，pitch和roll为double类型
    int8_t x;
    int8_t y;
    int8_t z;
    double roll;
    double pitch;
    //从加速度计获取x y z偏移值
    accelemeter.getXYZ(&x, &y, &z);

    //低通滤波器以减少噪声
    fXg = x * alpha + (fXg * (1.0 - alpha));
    fYg = y * alpha + (fYg * (1.0 - alpha));
    fZg = z * alpha + (fZg * (1.0 - alpha));

    //Roll和Pitch方程
    roll  = (atan2(-fYg, fZg) * 180.0) / M_PI;
    pitch = (atan2(fXg, sqrt(fYg * fYg + fZg * fZg)) * 180.0) / M_PI;
    //重置lcd屏幕
    lcd.clear();
    //将LCD光标设置到第0列，第0行
    lcd.setCursor(0, 0);
    //显示文本x:
    lcd.print("x:");
    //显示x的值
    lcd.print(x);
    //将LCD光标设置到第5列，第0行
    lcd.setCursor(5, 0);
    //显示文本y:
    lcd.print("y:");
    //显示y的值
    lcd.print(y);
    //将LCD光标设置到第10列，第0行
    lcd.setCursor(10, 0);
    //显示文本z:
    lcd.print("z:");
    //显示z的值
    lcd.print(z);

    //将LCD光标设置到第0列，第1行
    lcd.setCursor(0, 1);
    //显示文本R:
    lcd.print("R:");
    //显示roll的值
    lcd.print(roll);
    //将LCD光标设置到第8列，第1行
    lcd.setCursor(8, 1);
    //显示文本P:
    lcd.print("P:");
    //显示pitch的值
    lcd.print(pitch);
  } else
  {
    //初始化ax, ay, az为float类型
    float ax, ay, az;
    //从加速度计获取ax ay az加速度值
    accelemeter.getAcceleration(&ax, &ay, &az);
    //重置lcd屏幕
    lcd.clear();
    //将LCD光标设置到第0列，第0行
    lcd.setCursor(0, 0);
    //显示文本ax:
    lcd.print("ax:");
    //显示ax的值
    lcd.print(ax);
    //将LCD光标设置到第8列，第0行
    lcd.setCursor(8, 0);
    //显示文本ay:
    lcd.print("ay:");
    //显示ay的值
    lcd.print(ay);
    //将LCD光标设置到第0列，第1行
    lcd.setCursor(0, 1);
    //显示文本az:
    lcd.print("az:");
    //显示az的值
    lcd.print(az);
  }
  //等待0.5秒
  delay(500);
}

```

步骤 2：将代码上传到 Seeeduino Lotus

步骤 3：观察结果

首先，请测试倾斜开关是否能够改变 LCD 屏幕的页面。然后您可以旋转 3 轴加速度计来观察数据根据旋转而变化，让自己熟悉与 3 轴加速度计方向相关的输出数据。

当倾斜开关开启/关闭时显示速度、俯仰角和横滚角：

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/3_axis_tilt_on&off.jpg)

**进一步探索**

在使用数字加速度计模块后，您可以想象加速度计是火箭制导系统中最重要的模块之一，与 GPS 和陀螺仪等其他模块一起使用。加速度计也用于手机中检测您的手机是处于纵向模式还是横向模式，因此屏幕可以相应地倾斜和调整。

### 第 9 课：智能花园

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/smartgarden.png)

**目标**

通过结合 Grove 入门套件模块制作智能花园传感器和提醒系统

**关键知识**

- 学习如何将多个模块组合成一个应用程序
- 学习如何在 Arduino IDE 中为多个设备编程
- 采用多个模块检测和分析种植环境，提高逻辑思维能力

**用例分析**

**传感器模块**

使用 DHT11 模块监测植物周围环境，使用光传感器检测周围光强度。

**执行器模块**

使用蜂鸣器发出不同音调，使用 LCD 显示不同警告信息：

- 警告 1：周围温度高于 38°C
- 警告 2：周围湿度低于 40%
- 警告 3：光强度低于 50
- 警告 4：提醒用户给植物浇水

使用 LCD 屏幕显示：

- 状态 1：显示温度
- 状态 2：显示湿度
- 状态 3：提醒用户给植物浇水

使用倾斜开关重置警告。

**流程图**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/flowchart.png)

**硬件要求**

自备

 - micro-USB 数据线
 - 安装了 Arduino IDE 和串口转 USB 驱动程序的计算机
 - DIY 亚克力框架

套件包含

 - Seeeduino Lotus V1.1 开发板
 - Grove 数据线
 - Grove – 蜂鸣器
 - Grove – 可链接 RGB LED
 - Grove – 光传感器
 - Grove - LCD RGB 背光
 - Grove – 温湿度传感器(DHT11)
 - Grove – 倾斜开关

**硬件连接**

步骤 1：
将 Grove – 蜂鸣器模块连接到 Seeeduino Lotus 的 D6 端口

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/buzzer_ard.jpg)

将 Grove – 可链接 RGB LED 连接到 Seeeduino Lotus 的 D7 端口

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/connect1.jpg)

将 Grove – 光传感器模块连接到 Seeeduino Lotus 的 A0 端口

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/connect2.jpg)

将 Grove - LCD RGB 背光模块连接到 Seeeduino Lotus 的 I2C. 端口，注意：这是带一个点的 I2C 端口。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/connect3.jpg)

将 Grove – 温湿度传感器(DHT11) 模块连接到 Seeeduino Lotus 的 D2 端口。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/connect4.jpg)

将 Grove – 倾斜开关连接到 Seeeduino Lotus 的 D5 端口。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/connect5.jpg)

将所有组件固定在 DIY 亚克力框架上

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/smartgarden1.png)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/smartgarden2.png)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/smartgarden3.png)

步骤 2：通过 micro USB 数据线将 Seeeduino Lotus 与计算机连接。

**软件编程**

步骤 1：请将 [TimeLib 库](https://github.com/PaulStoffregen/Time/archive/master.zip) 添加到 Arduino IDE 中
更多信息请访问 [Arduino TimeLib 教程](http://playground.arduino.cc/code/time)

步骤 2：复制并粘贴以下代码到 Arduino IDE

```cpp

//添加DHT传感器库
#include <DHT.h>
//添加LCD库
#include <rgb_lcd.h>
//添加ChainableLED库到此项目
#include <ChainableLED.h>
//添加Timelib库
#include <TimeLib.h>

//分配默认时间为纪元时间1514764800，即2018年1月1日00:00:00
long DEFAULT_TIME = 1514764800;
long waterTime = DEFAULT_TIME + 86400;

//设置链接到链条的LED数量
#define NUM_LEDS  1

//分配LightSensor为A0
#define LightSensor A0
//设置数字引脚2为DHTPIN
#define DHTPIN 2
//设置引脚5的标题为tiltSwitch
#define tiltSwitch 5
//分配蜂鸣器为引脚6
#define buzzer 6

//设置传感器类型为DHT 11
#define DHTTYPE DHT11

/*分配dht作为DHT传感器的名称
  设置传感器引脚为DHTPIN(引脚2)，
  设置传感器类型为DHTTYPE(DHT11)
*/
DHT dht(DHTPIN, DHTTYPE);

/*分配leds作为
  ChainableLED的名称，设置
  ChainableLED的引脚为
  引脚7(时钟引脚)和引脚8(数据引脚)
  以及LED的数量*/
ChainableLED leds(7, 8, NUM_LEDS);

//分配lcd作为rgb_lcd屏幕的名称
rgb_lcd lcd;

void setup()
{
  //
  setTime(DEFAULT_TIME);
  //初始化dht传感器
  dht.begin();
  //初始化lcd屏幕;
  //设置lcd的列数和行数:
  lcd.begin(16, 2);
  //初始化ChainableLED leds
  leds.init();
  //设置引脚5(倾斜开关)为输入引脚
  pinMode(tiltSwitch, INPUT);
  delay(1000);
}
int mode = 0;
void loop()
{
  //-------------DHT---------------------
  //将湿度值存储到h
  int h = dht.readHumidity();

  //将温度值存储到t(摄氏度)
  int t = dht.readTemperature();

  int value = analogRead(LightSensor);
  float value_float = map(value, 0, 800, 50, 0) / 100.0;

  leds.setColorHSB(0, 0, 0, value_float);

  //初始化模式为0，然后设置为case 0;

  //温度超过38度，然后设置为case 1;
  if (t > 38) {
    mode = 1;
  }
  //湿度小于40%，然后设置为case 2;
  if (h < 40)
  {
    mode = 2;
  }
  //光传感器读取值小于50，然后设置为case 3;
  if (value < 50)
  {
    mode = 3;
  }
  //当前时间大于或等于waterTime(24小时后)，然后设置为case 4;
  if (now() >= waterTime  ) {
    mode = 4;
  }

  switch (mode) {
    case 0:
      //设置LCD光标到第0列，第0行
      lcd.clear();
      lcd.setCursor(0, 0);
      //打印文本temperature:到LCD
      lcd.print("Temperature:");
      //设置LCD光标到第12列，第0行
      lcd.setCursor(12, 0);
      //打印温度值t到LCD
      lcd.print(t);
      //设置LCD光标到第14列，第0行
      lcd.setCursor(14, 0);
      //打印温度º是查找表中的字符223
      lcd.write(223);
      //打印C到LCD
      lcd.print("C");

      //设置LCD光标到第0列，第1行
      lcd.setCursor(0, 1);
      //打印文本Humidity:到LCD
      lcd.print("Humidity: ");
      //设置LCD光标到第10列，第1行
      lcd.setCursor(10, 1);
      //打印湿度值h到LCD
      lcd.print(h);
      //设置LCD光标到第12列，第1行
      lcd.setCursor(12, 1);
      //打印符号%到LCD
      lcd.print("%");
      break;
    case 1:
      tone(buzzer, 262, 300);
      leds.setColorRGB(0, 255, 0, 0);
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("Temperature too ");
      lcd.setCursor(0, 1);
      lcd.print("High!!");
      if (HIGH == digitalRead(tiltSwitch))
      {
        leds.setColorRGB(0, 0, 0, 0);
        mode = 0;
      }
      break;
    case 2:
      tone(buzzer, 294, 300);
      leds.setColorRGB(0, 255, 0, 0);
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("Warning! Too Dry");
      if (HIGH == digitalRead(tiltSwitch))
      {
        leds.setColorRGB(0, 0, 0, 0);
        mode = 0;
      }
      break;
    case 3:
      tone(buzzer, 330, 300);
      leds.setColorRGB(0, 255, 0, 0);
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("Not Enough Light");
      lcd.setCursor(0, 1);
      lcd.print("Check the LED..");
      if (HIGH == digitalRead(tiltSwitch))
      {
        leds.setColorRGB(0, 0, 0, 0);
        mode = 0;
      }
      break;
    case 4:
      tone(buzzer, 349, 300);
      leds.setColorRGB(0, 255, 0, 0);
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("Time to water");
      lcd.setCursor(0, 1);
      lcd.print("the plants");
      if (HIGH == digitalRead(tiltSwitch))
      {
        waterTime = now() + 86400;
        mode = 0;
      }
      break;

  }
}

```

步骤 3：将代码上传到 Seeeduino Lotus

步骤 4：观察结果

在正常情况下，LED 发出白光，LCD 屏幕显示温度和湿度。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/garden.png)

4 种警告状态

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/garden1.png)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/garden2.png)
![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/garden3.png)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/garden4.png)

红色 LED 警告

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/garden5.png)

使用倾斜开关重置警告

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/garden6.png)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/garden7.png)

### 第 10 课：智能水杯

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/smartcup.png)

**目标**

使用蜂鸣器、RGB LED、3 轴加速度计和 LCD 屏幕制作智能水杯，它将在特定时间段提醒用户喝水，智能水杯还可以检测用户是否喝了一些水，LCD 屏幕将显示倒计时时间，提醒用户下次喝水的时间。

**关键知识**

- 复习 TimeLib 库在 Lotus 上设置和控制时间。
- 复习在 LCD 屏幕上显示和滚动文本
- 复习 if…else…和 switch…case…操作以及 ||（或）和 &&（与）逻辑运算符。
- 进一步研究从 3 轴加速度计读取俯仰和横滚值的应用。
- 使用 BlinkWithoutDelay 示例方法避免使用 Delay 函数，防止延迟函数干扰系统定时器。
- 学习如何制作和调用自定义函数，返回结果可以是布尔值（true/false），或使用 return X 返回变量的值。

**用例分析**

**传感器模块**

通过比较 3 轴加速度计读数中的俯仰和横滚数据来检测瓶子是否倾斜，从而识别用户是否在喝水。如果瓶子倾斜，下一步是检测瓶子是否已放回桌子上，一旦瓶子在桌子上，3 轴加速度计的俯仰和横滚数据将校准最大值和最小值进行比较。

**执行器模块**

使用蜂鸣器发出不同音调来提醒不同状态：

- 状态 1：当 30 分钟倒计时完成时，蜂鸣器将响起提醒用户喝水
- 状态 2：如果瓶子没有静止放在桌子上，蜂鸣器将响起。

使用 LCD 屏幕显示

- 状态 1：倒计时定时器
- 状态 2：提醒用户喝水
- 状态 3：祝贺用户喝水
- 状态 4：告诉用户喝完后放回水杯

**流程图**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/flowchart1.png)

**硬件要求**

自备

- micro-USB 线
- 安装了 Arduino IDE 和串口转 USB 驱动程序的计算机

套件包含

- Seeeduino Lotus V1.1 开发板
- Grove 线缆
- Grove – 蜂鸣器
- Grove – LED 可链接 RGB LED
- Grove - LCD RGB 背光
- Grove – 3 轴数字加速度计

**硬件连接**

步骤 1：
将 Grove - 蜂鸣器模块连接到 Seeeduino Lotus 的 D6 端口

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/buzzer_ard.jpg)

将 Grove – 可链接 RGB LED 连接到 Seeeduino Lotus 的 D7 端口

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/connect1.jpg)

将 Grove - LCD RGB 背光模块连接到 Seeeduino Lotus 的 I2C. 端口，注意：这是后面跟一个点的 I2C 端口。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/connect6.jpg)

将 Grove – 3 轴数字加速度计连接到 Seeeduino Lotus 的 I2C 端口，注意：这是后面跟两个点的 I2C 端口。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/connect7.jpg)

将所有组件一起固定在杯子上。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/smartcup.png)

**软件编程**

步骤 1：请将 [TimeLib 库]( https://github.com/PaulStoffregen/Time/archive/master.zip) 添加到 Arduino IDE 中

复制并粘贴以下代码到 Arduino IDE

```cpp

//添加LCD库
#include <rgb_lcd.h>
//添加加速度计库
#include "MMA7660.h"
//添加时间库
#include <TimeLib.h>
//添加ChainableLED库到此项目
#include <ChainableLED.h>

//分配默认时间为纪元时间1514764800，即2018年1月1日00:00:00
long DEFAULT_TIME = 1514764800;
//在默认时间后30分钟(1800秒)设置饮水时间
//long drinkTime = DEFAULT_TIME + 1800;
long drinkTime = DEFAULT_TIME + 10;
int lastDrink, seconds;
//将存储最新时间（毫秒）
unsigned long previousMillis = 0;

//设置链接到链条的LED数量
#define NUM_LEDS  1

//分配蜂鸣器为引脚6
#define buzzer 6

//分配加速度计为MMA7660加速度计的名称
MMA7660 accelerometer;

//分配lcd为rgb_lcd屏幕的名称
rgb_lcd lcd;

/*分配leds为ChainableLED的名称
  设置ChainableLED的引脚为
  引脚7(时钟引脚)和引脚8(数据引脚)
  以及LED的数量*/
ChainableLED leds(7, 8, NUM_LEDS);

//设置运动检查容差值
int tolerance = 50;
//初始化calibrated和moveDetected为false
boolean calibrated = false;
boolean moveDetected = false;

//为加速度计读取值x, y, z设置int8_t
int8_t x;
int8_t y;
int8_t z;

//初始化fXg, fYg, fZg为值为0的double
double fXg = 0;
double fYg = 0;
double fZg = 0;
//初始化pitch和roll为double
double p, r;

//加速度计限制
double rMin; //最小滚转值
double rMax; //最大滚转值
double rVal; //当前滚转值

double pMin; //最小俯仰值
double pMax; //最大俯仰值
double pVal; //当前俯仰值

//为低通滤波器容差设置值0.5给alpha
const float alpha = 0.5;

//初始化mode以将默认switch case设置为第一个(从0开始计数)
int mode = 0;

void setup()
{
  //将系统时间设置为2018年1月1日00:00:00
  setTime(DEFAULT_TIME);
  //初始化加速度计
  accelerometer.init();
  //初始化ChainableLED leds
  leds.init();
  //初始化lcd屏幕;
  //设置lcd的列数和行数:
  lcd.begin(16, 2);
  //在开始时校准加速度计
  calibrateAccel();
  //等待2秒
  delay(2000);
}

//设置加速度计读取函数输出映射的滚转和俯仰值
void Accel() {
  accelerometer.getXYZ(&x, &y, &z);

  //低通滤波器以减少噪声
  fXg = x * alpha + (fXg * (1.0 - alpha));
  fYg = y * alpha + (fYg * (1.0 - alpha));
  fZg = z * alpha + (fZg * (1.0 - alpha));

  r  = (atan2(-fYg, fZg) * 180.0) / M_PI;
  p = (atan2(fXg, sqrt(fYg * fYg + fZg * fZg)) * 180.0) / M_PI;
  r = map(r, -90, 90, 0, 180);
  p = map(p, -90, 90, 0, 180);
  return r;
  return p;
}

//设置校准加速度计的函数
void calibrateAccel() {
  //重置moveDetected为false
  moveDetected = false;

  //调用加速度计读取函数
  Accel();

  //分配滚转和俯仰的读数
  rVal = r;
  rMin = rVal;
  rMax = rVal;

  pVal = p;
  pMin = pVal;
  pMax = pVal;

  //校准加速度计
  for (int i = 0; i < 50; i++) {
    //调用加速度计读取函数
    Accel();
    /*--校准滚转---*/
    //将滚转读数分配给rVal
    rVal = r;
    //评估新读数是否大于存储的最大值
    if (rVal > rMax) {
      //如果新读数值更大，则将新值保存到rMax
      rMax = rVal;
      //评估新读数是否小于存储的最小值
    } else if (rVal < rMin) {
      //如果新读数值更小，则将新值保存到rMin
      rMin = rVal;
    }

    /*--校准俯仰---*/
    //将俯仰读数分配给pVal
    pVal = p;
    //评估新读数是否大于存储的最大值
    if (pVal > pMax) {
      //如果新读数值更大，则将新值保存到pMax
      pMax = pVal;
      //评估新读数是否小于存储的最小值
    } else if (pVal < pMin) {
      //如果新读数值更小，则将新值保存到pMin
      pMin = pVal;
    }
    //读数之间延迟10ms
    delay(10);
  }
  //将calibrated设置为true
  calibrated = true;
}

//饮水函数检查瓶子是否倾斜，输出true/false
boolean drinking() {
  //初始化tilting为false
  boolean tilting = false;
  //从加速度计读取
  Accel();

  rVal = r;
  pVal = p;
  /*评估新的滚转值是否大于最大值或
     小于之前保存的最小值。
     || 表示或
     如果发生滚转则将tilting设置为true
     如果发生俯仰则将tilting设置为true
  */
  if (rVal > (rMax + tolerance) || rVal < (rMin - tolerance)) {
    tilting = true;
  }

  if (pVal > (pMax + tolerance) || pVal < (pMin - tolerance)) {
    tilting = true;
  }
  //输出tilting
  return tilting;
}

//运动函数
void Motion() {
  //在重新校准之前不检查运动
  calibrated = false;
}

void loop()
{
  /*评估当前时间是否大于或等于
    drinkTime(提前30分钟)，然后切换到case 1;
    是时候喝水了
  */
  if (now() >= drinkTime  ) {
    //切换到case 1
    mode = 1;
  }
  //评估加速度计是否已校准
  if (calibrated) {
    //评估瓶子是否倾斜
    if (drinking()) {
      //切换到case 2
      mode = 2;
      //将moveDetected设置为true
      moveDetected = true;
    }
  }
  //评估moveDetected是否为true
  if (moveDetected) {
    //调用运动函数
    Motion();
  }
  //保存当前时间（毫秒）
  unsigned long currentMillis = millis();
  switch (mode) {
    /*Case 0:
      如果没有发生任何事情，显示倒计时的模式
    */
    case 0:
      //距离喝水的分钟数
      lastDrink = (drinkTime - now()) / 60;
      //距离喝水的秒数
      seconds = (drinkTime - now()) % 60;

      leds.setColorHSB(0, 0, 0, 0);

      /*在不使用delay的情况下刷新LCD 1秒，参考
         示例"BlinkWithoutDelay"，这样系统
         不会停止和等待
      */
      if (currentMillis - previousMillis >= 1000) {
        // 保存上次刷新LCD的时间
        previousMillis = currentMillis;
        lcd.clear();
        lcd.setCursor(0, 0);
        lcd.print("Countdown to dri");
        lcd.setCursor(0, 1);
        lcd.print("nk water: ");
        lcd.setCursor(10, 1);
        lcd.print(lastDrink);
        lcd.print(":");
        lcd.print(seconds);
      }
      break;
    /*Case 1:
       达到30分钟时间，是时候喝水了
       带有蜂鸣器警报和LCD显示时间
       提醒喝水
    */
    case 1:
      tone(buzzer, 262, 300);
      leds.setColorRGB(0, 255, 0, 0);
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("Time to drink");
      lcd.setCursor(0, 1);
      lcd.print("Some water");
      break;
    /*Case 2:
       检测水瓶是否倾斜
       因此用户正在喝水
       并重新校准传感器(加速度计)
       一旦瓶子被放在平坦的
       表面上，如果瓶子仍然倾斜或
       没有平放(加速度计读数
       不在90度左右)，进入case 3
       检测到瓶子静止不动，进入
       case 0并将饮水时间重置为30分钟
       后
    */
    case 2:
      //停止蜂鸣器
      noTone(buzzer);
      //更新drinkTime
      drinkTime = now() + 1800;
      leds.setColorRGB(0, 0, 255, 0);
      //显示消息
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("Well Done remind");
      lcd.setCursor(0, 1);
      lcd.print("you in 30mins");
      //等待5秒让用户喝水
      delay(5000);
      //读取加速度计值
      Accel();
      //评估瓶子是否平放
      if (r > 80 && r < 100 && p > 80 && p < 100) {
        //评估加速度计是否已校准
        if (!calibrated) {
          //校准加速度计
          calibrateAccel();
        }
        else
        { //切换到模式0
          mode = 0;
          //更新drinkTime
          drinkTime = now() + 1800;
          leds.setColorRGB(0, 0, 0, 0);
        }
      }
      else
      { //如果瓶子没有平放，切换到模式3
        mode = 3;
        leds.setColorRGB(0, 0, 0, 0);
      }
      break;
    /*case 3
       如果瓶子没有平放在平坦表面上，
       显示滚动消息"请在喝完后
       放下水瓶！"，然后检查
       瓶子是否静止，如果是，重新校准
       加速度计，一旦重新校准完成，切换回
       case 0并将饮水时间重置为30分钟后
    */
    case 3:
      //更新drinkTime
      drinkTime = now() + 1800;

      leds.setColorRGB(0, 0, 0, 255);
      //显示自动滚动消息
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("Please put down water");
      lcd.setCursor(0, 1);
      lcd.print("bottle when finished!");
      for (int positionCounter = 0; positionCounter < 5; positionCounter++) {
        // 向左滚动一个位置:
        lcd.scrollDisplayLeft();
        // 等待一会儿:
        delay(200);
      }
      for (int positionCounter = 0; positionCounter < 5; positionCounter++) {
        // 向右滚动一个位置:
        lcd.scrollDisplayRight();
        // 等待一会儿:
        delay(200);
      }
      for (int positionCounter = 0; positionCounter < 5; positionCounter++) {
        // 向左滚动一个位置:
        lcd.scrollDisplayLeft();
        // 等待一会儿:
        delay(200);
      }

      //读取加速度计值
      Accel();
      //评估瓶子是否平放
      if (r > 80 && r < 100 && p > 80 && p < 100) {
        //评估加速度计是否已校准
        if (!calibrated) {
          //校准加速度计
          calibrateAccel();
        }
        else
        { //切换到模式0
          mode = 0;
          //更新drinkTime
          drinkTime = now() + 1800;
          leds.setColorRGB(0, 0, 0, 0);
        }
      }
      break;
  }
  delay(1);
}


```

步骤 2：将代码上传到 Seeeduino Lotus

步骤 3：观察结果

智能杯子的 4 种状态

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/cup1.png)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/cup2.png)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/cup3.png)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/cup4.png)

## 参考资料

Aircraft principal axes. 访问时间：2018年11月27日。[https://en.wikipedia.org/wiki/Aircraft_principal_axes](https://en.wikipedia.org/wiki/Aircraft_principal_axes).

## 附录

本文档中的所有[代码](https://github.com/peterpanstechland/Grove_starter_kit.git)都可以在 Github 上获取。

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
