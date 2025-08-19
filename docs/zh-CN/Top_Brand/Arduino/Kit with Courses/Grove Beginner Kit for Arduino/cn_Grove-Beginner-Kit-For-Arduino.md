---
description: Grove Arduino 初学者套件
title: Grove Arduino 初学者套件
keywords:
- Kit with Courses
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Beginner-Kit-For-Arduino
last_update:
  date: 2/14/2023
  author: hushuxu
---
# Grove Arduino 初学者套件

Grove Arduino 初学者套件是最适合初学者的 Arduino 初学者套件之一。它包含一个 Arduino 兼容板和 10 个额外的 Arduino 传感器，全部采用一体化 PCB 设计。**所有模块都通过 PCB 邮票孔连接到 Seeeduino，因此无需 Grove 线缆连接**。当然，您也可以将模块取出并使用 Grove 线缆连接模块。您可以使用这个 Grove Arduino 初学者套件构建任何您喜欢的 Arduino 项目。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Beginner-Kit-for-Arduino-p-4549.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 硬件概述

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Parts.jpg)

**注意：** 尺寸 - 17.69 *11.64* 1.88cm

1. **[Grove - LED](https://wiki.seeedstudio.com/cn/Grove-Red_LED/)：** 简单 LED 模块
2. **[Grove - 蜂鸣器](https://wiki.seeedstudio.com/cn/Grove-Buzzer/)：** 压电蜂鸣器
3. **[Grove - OLED 显示屏 0.96"](https://wiki.seeedstudio.com/cn/Grove-OLED-Display-0.96-SSD1315/)：** 128×64 点分辨率，高亮度，自发光和高对比度，紧凑设计的大屏幕，低功耗。
4. **[Grove - 按钮](https://wiki.seeedstudio.com/cn/Grove-Button/)：** 瞬时按钮
5. **[Grove - 旋转电位器](https://wiki.seeedstudio.com/cn/Grove-Rotary_Angle_Sensor/)：** 可调电位器
6. **[Grove - 光线传感器](https://wiki.seeedstudio.com/cn/Grove-Light_Sensor/)：** 检测周围光线强度
7. **[Grove - 声音传感器](https://wiki.seeedstudio.com/cn/Grove-Sound_Sensor/)：** 检测周围声音强度
8. **[Grove - 温湿度传感器](https://wiki.seeedstudio.com/cn/Grove-TemperatureAndHumidity_Sensor/)：** 检测周围温度和湿度值
9. **[Grove - 气压传感器](https://wiki.seeedstudio.com/cn/Grove-Barometer_Sensor-BMP280/)：** 检测周围大气压力
10. **[Grove - 三轴加速度计](https://wiki.seeedstudio.com/cn/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR)：** 检测物体加速度
11. **[Seeeduino Lotus](https://wiki.seeedstudio.com/cn/Seeeduino_Lotus/)：** 带 Grove 接口的 Arduino 兼容板

**注意：**
        默认情况下，Grove 模块通过 PCB 邮票孔连接到 Seeeduino。这意味着如果没有断开，您无需使用 Grove 线缆连接。默认引脚如下：

|模块|接口|引脚/地址|
|---|---|---|
|LED|数字|D4|
|蜂鸣器|数字|D5|
|OLED 显示屏 0.96"|I2C|I2C, 0x78(默认)|
|按钮|数字|D6|
|旋转电位器|模拟|A0|
|光线传感器|模拟|A6|
|声音传感器|模拟|A2|
|温湿度传感器|数字|D3|
|气压传感器|I2C|I2C, 0x77(默认) / 0x76(可选)|
|三轴加速度计|I2C|I2C, 0x19(默认)|

### 断开说明

**注意：**
    使用刀具时请小心不要割伤手部

如果您希望在其他地方使用这些模块，那么您可以简单地按照以下步骤将模块断开！

**步骤 1**

使用刀具或尖锐物体在连接传感器的邮票孔处切割

**步骤 2**

上下摇动模块，它应该很容易就能取出来！

## 零件清单

|模块|数量|
|---|---|
|**传感器**||
|温湿度传感器|x1|
|3轴加速度计|x1|
|气压传感器|x1|
|光传感器|x1|
|声音传感器|x1|
|**输入模块**||
|旋转电位器|x1|
|按钮|x1|
|**输出模块**||
|LED|x1|
|蜂鸣器|x1|
|**显示模块**||
|OLED显示屏|x1|
|**Grove 连接线**|x6|
|**Micro USB 数据线**|x1|

## 学习目标

- 开源硬件系统基础知识。
- Arduino 基础编程。
- 传感器通信原理和方法。
- 开源硬件项目的实际实现。

### 即插即用开箱演示

Grove 初学者套件具有即插即用的开箱演示功能，当您首次给板子通电时，您可以一次性体验所有传感器！使用按钮和旋转电位器来体验每个传感器演示！

![](https://s3-us-west-2.amazonaws.com/files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Firmware.jpg)

- **滚动** -> 旋转旋转电位器
- **选择** -> 短按按钮
- **退出当前演示** -> 长按按钮

蜂鸣器和LED模块用于按键提示。

## 如何开始使用Arduino

### 安装Arduino IDE

- **Arduino IDE** 是Arduino的集成开发环境，用于单片机软件编程、下载、测试等。
- 在此处下载并安装适用于您所需操作系统的[Arduino IDE](https://www.arduino.cc/en/Main/Software)。

![](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)

### 安装USB驱动程序

- Arduino通过USB数据线连接到PC。USB驱动程序取决于您在Arduino上使用的USB芯片类型。*注意：USB芯片通常印在开发板的背面。*

  - 下载[CP2102 USB驱动程序](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)。**注意：** 根据您的操作系统下载。
  - 驱动程序安装完成后，用USB数据线将Arduino连接到PC的USB端口。
    - **对于Windows用户：** 您可以在`我的电脑` -> `属性` -> `硬件` -> `设备管理器`中看到它。将出现一个`COM`端口。
    - **对于Mac OS用户：** 您可以导航到左上角的``，选择`关于本机` -> `系统报告...` -> `USB`。应该会出现CP2102 USB驱动程序。
  - 如果驱动程序未安装，或者驱动程序安装不正确（与芯片型号不匹配），它将在设备管理器中显示为"未知设备"。此时，应重新安装驱动程序。

### 启动Arduino IDE

1.在您的PC上打开**Arduino IDE**。
2.点击`工具` -> `开发板`-> `Arduino AVR开发板`-> `Arduino Uno`来选择正确的开发板型号。选择**Arduino Uno**作为开发板。

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/uno_board.jpg)

3.点击`工具` -> `端口`来选择正确的端口（在前面步骤中设备管理器显示的串行端口）。在这种情况下，选择`COM11`。**对于Mac OS用户**，应该是`/dev/cu.SLAB_USBtoUART`。

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/port.jpg)

4.创建一个新的Arduino文件并将其命名为`Hello.ino`，然后将以下代码复制到其中：

```Cpp
void setup() {
  Serial.begin(9600); // initializes the serial port with a baud rate of 9600
}
void loop() {
  Serial.println("hello, world"); // prints a string to a serial port
  delay(1000); //delay of 1 second
}
```

5.在Arduino IDE的左上角，有两个按钮，**验证和上传**。首先，按验证按钮(✓)进行编译。编译成功后，按上传按钮(→)。

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/func.png)

6.导航到`工具` -> `串口监视器`，或点击右上角的**串口监视器**(放大镜符号)，您可以看到程序运行结果：

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/print.png)

**注意：** 如果您从我们的USB驱动器安装了便携式Arduino IDE，您可以在**文件** -> **示例库**中找到所有模块演示，以及所有模块库，都已预装在Arduino IDE中！

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Sketchbook.png)

**注意：**
        所有模块都预先连接在单个电路板上，因此不需要电缆和焊接。但是，如果您拆分模块并想要用Grove电缆连接它们，请查看拆分指南。

## 课程指南

### 课程1：LED闪烁

我们已经完成了输出"Hello world"程序。现在让我们学习如何点亮LED模块。我们知道控制系统的三个基本组件：输入、控制和输出。但点亮LED只使用输出，不使用输入。Seeeduino是控制单元，LED模块是输出单元，输出信号是数字信号。

背景信息：

- **什么是数字信号**

**数字信号：** 数字信号是指幅度值是离散的，幅度限制在有限数量的值。在我们的控制器中，数字信号有两种状态：LOW(0V)为0；HIGH(5V)为1。因此向LED发送HIGH信号可以点亮它。

![Alt text](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/digital.png)

涉及的组件
    1. Seeeduino Lotus
    2. Grove LED
    3. Grove 电缆(如果拆分)

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/LED.png)

硬件连接
    - **模块连接**
        - 通过PCB邮票孔默认连接。
    - 通过USB电缆将Seeeduino连接到计算机。

-软件代码

    - 打开Arduino IDE。
    - 复制以下代码，点击验证检查语法错误。验证没有错误后，您可以上传代码。

```Cpp
//LED Blink
//The LED will turn on for one second and then turn off for one second
int ledPin = 4;
void setup() {
    pinMode(ledPin, OUTPUT);
}
void loop() {
    digitalWrite(ledPin, HIGH);
    delay(1000);
    digitalWrite(ledPin, LOW);
    delay(1000);
}
```

代码分析

```cpp
setup(){
}
```

`setup()` 函数在程序开始时被调用。使用它来初始化变量、引脚模式、开始使用库等。`setup()` 函数只会运行一次，在 Arduino 板每次上电或复位后执行。

```cpp
loop(){
}
```

创建了初始化并设置初始值的 `setup()` 函数后，`loop()` 函数正如其名称所示，连续循环执行，让您的程序能够变化和响应。使用它来主动控制 Arduino 开发板。

```cpp
int ledPin = 4;
```

**描述：**

将一个值转换为 int 数据类型。

**语法：**

int(**x**) 或 (int)**x** (C 风格类型转换)

**参数：**

**x**：一个值。允许的数据类型：任何类型。

将 `int` 类型的 4 赋值给名为 ledPin 的变量。

```cpp
pinMode(ledPin, OUTPUT);
```

**描述：**

配置指定引脚的行为，使其作为输入或输出。有关引脚功能的详细信息，请参阅数字引脚页面。

从 Arduino 1.0.1 开始，可以使用 `INPUT_PULLUP` 模式启用内部上拉电阻。此外，`INPUT` 模式会明确禁用内部上拉电阻。

**语法：**

pinMode(**pin, mode**)

**参数：**

**pin**：要设置模式的 Arduino 引脚编号。

**mode**：`INPUT`、`OUTPUT` 或 `INPUT_PULLUP`。

将 ledPin 设置为输出模式。

```cpp
digitalWrite(ledPin, HIGH);
```

**描述：**

向数字引脚写入 `HIGH` 或 `LOW` 值。

如果引脚已通过 pinMode() 配置为 OUTPUT，其电压将被设置为相应的值：`HIGH` 对应 5V（在 3.3V 开发板上为 3.3V），`LOW` 对应 0V（接地）。

如果引脚配置为 INPUT，digitalWrite() 将启用（HIGH）或禁用（LOW）输入引脚上的内部上拉电阻。建议将 pinMode() 设置为 `INPUT_PULLUP` 以启用内部上拉电阻。更多信息请参见数字引脚教程。

如果您没有将 pinMode() 设置为 OUTPUT，并将 LED 连接到引脚，当调用 digitalWrite(HIGH) 时，LED 可能显得暗淡。在没有明确设置 pinMode() 的情况下，digitalWrite() 将启用内部上拉电阻，这相当于一个大的限流电阻。

**语法：**

digitalWrite(**pin, value**)

**参数：**

**pin**：Arduino 引脚编号。

**value**：`HIGH` 或 `LOW`。

当我们将 ledPin 设置为输出时，HIGH 意味着向引脚发送高电平，LED 点亮。

```cpp
digitalWrite(ledPin, LOW);
```

当我们将LED设置为输出时，低电平表示向引脚发送低电平，LED熄灭。

```cpp
delay(1000);
```

**描述：**

暂停程序指定的时间（以毫秒为单位）。（1秒等于1000毫秒。）

**语法：**

delay(**ms**)

**参数：**

**ms**：暂停的毫秒数。允许的数据类型：unsigned long。

将程序延迟1000ms（1秒）。

**演示效果和串口打印结果：**

LED模块将1秒亮起，1秒熄灭。

**LED亮度调节：**

<div>
  <div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/LED-res.jpeg" /></div>
  <br />
</div>

在Grove LED模块上，有一个**可以用螺丝刀调节的可变电阻器。** 转动它可以让LED灯更亮！

分离指南

如果模块从板子上分离出来。使用Grove线缆将**Grove LED**连接到Seeeduino Lotus的数字接口**D4**。  

### 课程2：按下按钮点亮LED

我们需要知道的第一件事是按钮的输入是数字信号，只有两种状态，0或1，所以我们可以基于这两种状态来控制输出。

- **练习：** 使用按钮来打开和关闭LED模块

涉及的组件

    1. Seeeduino Lotus
    2. Grove LED
    3. Grove 按钮
    4. Grove 线缆（如果分离）

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Button.png)

硬件连接

    - **模块连接：**
        - 通过PCB邮票孔默认连接。
    - 然后通过USB线缆将Seeeduino连接到计算机。

- **硬件分析**：
  - 输入：按钮
  - 控制：Seeeduino
  - 输出：LED模块

传感器和LED都使用数字信号，所以它们应该连接到数字接口。

- **软件代码**：
  - 打开Arduino IDE。
  - 复制以下代码，点击验证检查语法错误。验证没有错误后，您可以上传代码。

```Cpp
//Button to turn ON/OFF LED
//Constants won't change. They're used here to set pin numbers:
const int buttonPin = 6;     // the number of the pushbutton pin
const int ledPin =  4;      // the number of the LED pin

// variables will change:
int buttonState = 0;         // variable for reading the pushbutton status

void setup() {
  // initialize the LED pin as an output:
  pinMode(ledPin, OUTPUT);
  // initialize the pushbutton pin as an input:
  pinMode(buttonPin, INPUT);
}

void loop() {
  // read the state of the pushbutton value:
  buttonState = digitalRead(buttonPin);

  // check if the pushbutton is pressed. If it is, the buttonState is HIGH:
  if (buttonState == HIGH) {
    // turn LED on:
    digitalWrite(ledPin, HIGH);
  } else {
    // turn LED off:
    digitalWrite(ledPin, LOW);
  }
}
```

代码分析

```cpp
pinMode(ledPin, OUTPUT);
```

将LED定义为输出单元。

```cpp
pinMode(buttonPin, INPUT);
```

将按钮定义为输入单元。

```cpp
buttonState = digitalRead(buttonPin);
```

**描述：**

从指定的数字引脚读取值，可能是 `HIGH` 或 `LOW`。

**语法：**

digitalRead(**pin**)

**参数：**

**pin**：你想要读取的 Arduino `引脚` 编号

此函数用于读取数字引脚的状态，可能是 HIGH 或 LOW。当按钮被按下时，状态是 HIGH，否则是 LOW。

```cpp
  if (buttonState == HIGH) {
    digitalWrite(ledPin, HIGH);
  } else {
    digitalWrite(ledPin, LOW);
  }
}
```

**描述：**

if…​else 语句通过允许多个测试分组，比基本的 if 语句提供了对代码流程的更大控制。如果 if 语句中的条件结果为 false，则会执行 else 子句（如果存在的话）。else 可以接另一个 if 测试，这样多个互斥的测试可以同时运行。

每个测试将继续到下一个，直到遇到一个为 true 的测试。当找到一个为 true 的测试时，其关联的代码块将运行，然后程序跳到整个 if/else 结构后面的行。如果没有测试被证明为 true，则执行默认的 else 块（如果存在），并设置默认行为。

注意，else if 块可以与终止的 else 块一起使用或不使用，反之亦然。允许无限数量的此类 else if 分支。

**语法：**

```cpp
if (condition1) {
  // do Thing A
}
else if (condition2) {
  // do Thing B
}
else {
  // do Thing C
}
```

该语句的用法是：如果括号中的逻辑表达式为真，则执行 **if** 后面大括号中的语句，如果不是，则执行 **else** 后面大括号中的语句。如果按钮的状态为高电平，LED 引脚输出高电平并点亮 LED，否则关闭 LED。

**演示效果和串口打印结果：**

按下按钮将点亮 LED 模块。

分离指南

使用 Grove 线缆将 Grove LED 连接到 Seeeduino Lotus 的数字接口 **D4**。将 Grove 按钮连接到数字接口 **D6**。

### 第3课：控制闪烁频率

在上一节中，我们学习了按钮只有两种状态，开/关状态对应 0V 和 5V，但在实际应用中，我们经常需要多种状态，而不仅仅是 0V 和 5V。这时你需要使用模拟信号！旋转电位器是使用模拟信号的经典例子。

背景信息：

- **什么是模拟信号**

**模拟信号：** 信号在时间和数值上连续变化，信号的幅度、频率或相位在任何时候都连续变化，例如当前的广播声音信号或图像信号等。模拟信号有正弦波和三角波等。你的微控制器的模拟引脚可以在 0V 和 5V 之间映射到 0 到 1023 的范围，其中 1023 映射为 5V，512 映射为 2.5V 等等。

![Alt text](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/analog.png)

涉及的组件
    1. Seeeduino Lotus
    2. Grove LED
    3. Grove 旋转开关
    4. Grove 线缆（如果分离）

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/rotary.png)

硬件连接
    - **模块连接：**
        - 通过 PCB 邮票孔默认连接。
    - 然后通过 USB 线缆将 Seeeduino 连接到计算机。

- **硬件分析：**

  - 输入：旋转电位器
  - 控制：Seeeduino Lotus
  - 输出：LED 模块

输入是模拟信号，所以连接到模拟信号接口，LED 模块连接到数字信号接口。

软件

    - 打开 Arduino IDE。
    - 复制以下代码，点击验证检查语法错误。验证没有错误后，你可以上传代码。

```Cpp
//旋转控制LED
int rotaryPin = A0;    // 选择旋转器的输入引脚
int ledPin = 4;      // 选择LED的引脚
int rotaryValue = 0;  // 存储来自旋转器的值的变量

void setup() {
  // 将ledPin声明为输出：
  pinMode(ledPin, OUTPUT);
  pinMode(rotaryPin, INPUT);
}

void loop() {
  // 从传感器读取值：
  rotaryValue = analogRead(rotaryPin);
  // 点亮ledPin
  digitalWrite(ledPin, HIGH);
  // 程序停止<sensorValue>毫秒：
  delay(rotaryValue);
  // 关闭ledPin：
  digitalWrite(ledPin, LOW);
  // 程序停止<sensorValue>毫秒：
  delay(rotaryValue);
}
```

代码分析

```cpp
int rotaryPin = A0;    // 选择旋转编码器的输入引脚
int ledPin = 4;      // 选择LED的引脚
```

**描述：**

您可能会发现我们以不同的方式定义 rotatePin 和 ledPin。这是因为旋转电位器产生模拟信号，而 LED 由数字信号控制。

要**定义模拟引脚**，使用 A + 引脚编号（例如这里的 `A0`）。

要**定义数字引脚**，只使用引脚编号（例如这里的 `4`）。

```cpp
rotaryValue = analogRead(rotaryPin);
```

**描述：**

从指定的模拟引脚读取数值。Arduino 开发板包含一个多通道、10位模数转换器。这意味着它将把 0 和工作电压（5V 或 3.3V）之间的输入电压映射为 0 到 1023 之间的整数值。例如，在 Arduino UNO 上，这产生的读数分辨率为：5 伏特 / 1024 单位，或每单位 0.0049 伏特（4.9 mV）。

**语法：**

analogRead(**pin**)

**参数：**

**pin**：要读取的模拟输入引脚的名称（大多数开发板上为 A0 到 A5）。

**返回值：** 引脚上的模拟读数。尽管它受限于模数转换器的分辨率（10位为 0-1023 或 12位为 0-4095）。数据类型：int。

此函数用于读取模拟引脚的值（旋转传感器位置），值的范围是：0 ~ 1023。

```cpp
delay(rotaryValue);
```

延迟函数，延迟的毫秒持续时间是括号中的值。因为该值是正在读取的旋钮引脚模拟信号的值，所以延迟时间可以通过旋钮来控制。

**演示效果和串口打印结果：**

转动电位器将改变LED闪烁的频率。

分线指南

使用一根Grove线缆将LED连接到Seeeduino Lotus的数字接口**D4**，使用一根Grove线缆将Grove旋转开关连接到模拟信号接口**A0**。

### 第4课：让蜂鸣器发出BEEP声

就像LED模块一样，蜂鸣器也是一个输出模块，它不是点亮而是产生蜂鸣声。这可以用于许多指示目的的情况。让我们学习如何使用蜂鸣器产生声音！

背景信息：

- **有源蜂鸣器和无源蜂鸣器的区别是什么**

 蜂鸣器有两种类型，一种是**有源**的，另一种是**无源**的。有源和无源蜂鸣器都用于为电子设备发声。

  **有源蜂鸣器**具有内部振荡源，只要施加电源就会使蜂鸣器发声。有源蜂鸣器广泛用于计算机、打印机、复印机、报警器、电子玩具、汽车电子设备、电话、定时器和其他电子产品的发声设备。

  **无源蜂鸣器**没有内部振荡源，需要由**方波**和**不同频率**驱动。它的作用类似于电磁扬声器，变化的输入信号产生声音，而不是自动产生音调。

 <div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/buzzer-ap.jpg" /></div>

在这个套件中，**Grove-蜂鸣器是无源蜂鸣器**，因此需要交流信号来控制它。这就引出了下一个问题，如何用Arduino产生方波（交流信号）！好吧，一个简单的方法是使用PWM。

- **什么是PWM**

**脉宽调制，或PWM**，是一种通过数字方式获得模拟结果的技术。数字控制用于创建方波，即在开和关之间切换的信号。这种开关模式可以通过改变信号开启时间与信号关闭时间的比例来模拟完全开启（5伏）和关闭（0伏）之间的电压。"开启时间"的持续时间称为脉宽。要获得变化的模拟值，您需要改变或调制该脉宽。如果您足够快地重复这种开关模式，结果就像信号是0到5v之间的稳定电压作为交流信号。*参考：[Arduino](https://www.arduino.cc/en/tutorial/PWM)*。然后可以使用此PWM信号轻松控制无源蜂鸣器。

要在Arduino中生成PWM信号，您可以使用**`analogWrite()`**，与使用`digitalWrite()`生成直流信号相对。

您的Seeeduino上有六个标有符号"~"的数字引脚，这意味着它们可以发出PWM信号：3,5,6,9,10,11。它们被称为PWM引脚。

涉及的组件

    1. Seeeduino Lotus
    2. Grove蜂鸣器
    3. Grove线缆（如果分线）

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Buzzer.png)

硬件连接

    - **模块连接**
        - 通过PCB邮票孔默认连接。
    - 通过USB线缆将Seeeduino连接到计算机。

软件代码

    - 打开Arduino IDE。
    - 复制以下代码，点击验证检查语法错误。验证没有错误后，您可以上传代码。

```Cpp
int BuzzerPin = 5;

void setup() {
  pinMode(BuzzerPin, OUTPUT);
}

void loop() {
  analogWrite(BuzzerPin, 128);
  delay(1000);
  analogWrite(BuzzerPin, 0);
  delay(0);
}
```

代码分析

```cpp
analogWrite(BuzzerPin, 128);
```

**描述：**

向引脚写入模拟值（PWM波）。可用于以不同亮度点亮LED或以不同速度驱动电机。调用analogWrite()后，引脚将生成指定占空比的稳定矩形波，直到下次调用analogWrite()（或在同一引脚上调用digitalRead()或digitalWrite()）。

**语法：**

analogWrite(**pin, value**)

**参数：**

**pin**：要写入的Arduino `引脚`。允许的数据类型：int。

**value**：占空比：介于 `0`（始终关闭）和 `255`（始终开启）之间。允许的数据类型：int。

向蜂鸣器写入模拟值（PWM波）。

**演示效果和串口打印结果：**

蜂鸣器发出蜂鸣声。

分线指南

使用Grove线缆将Grove蜂鸣器连接到Seeeduino Lotus的数字接口**D5**。

-----

PWM使用

现在我们已经学会了PWM的使用，除了使用PWM控制无源蜂鸣器外，我们还可以使用PWM控制电机的速度和**LED灯的亮度**等。

如下图所示，使用 `analogWrite()` 生成PWM波，占空比百分比越高，LED越亮。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/PWM-LED.png" /></div>

但是，Grove初学者套件上的LED模块无法直接通过PWM控制，因为LED模块连接到D4，如上所述，PWM引脚是3、5、6、9、10、11，而引脚4不是PWM引脚。如果要用PWM控制LED，需要将其拔下并使用Grove线缆连接到具有PWM功能的Grove端口。

例如，让我们**使用Grove线缆将Grove-LED连接到D3**：

!!!Note
    D3也与Grove-温湿度传感器相互连接，因此此示例不能与Grove-温湿度传感器一起使用。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/pwmled-connect.png" /></div>

```cpp
int LED = 3; // LED通过线缆连接到D3
int Potentiometer = A0;

void setup() {
  pinMode(LED, OUTPUT);
  pinMode(Potentiometer, INPUT);
}

void loop() {
  int potentioValue, Value;
  potentioValue = analogRead(Potentiometer);
  Value = map(potentioValue, 0, 1023, 0, 255); //将电位器值映射到PWM信号值
  analogWrite(LED, Value);
}
```

**编译并上传**代码后，你应该能够使用PWM信号来旋转和调节LED亮度！

代码分析

```cpp
Value = map(potentioValue, 0, 1023, 0, 255);
```

**描述：**

将一个数字从一个范围重新映射到另一个范围。也就是说，**fromLow** 的值会被映射到 **toLow**，**fromHigh** 的值会被映射到 **toHigh**，中间的值会被映射到中间的值，等等。

不会将值限制在范围内，因为超出范围的值有时是有意的和有用的。如果需要限制范围，可以在此函数之前或之后使用 `constrain()` 函数。

请注意，任一范围的"下界"可能大于或小于"上界"，因此 `map()` 函数可用于反转数字范围，例如

**y = map(x, 1, 50, 50, 1);**

该函数也能很好地处理负数，所以这个例子

**y = map(x, 1, 50, 50, -100);**

也是有效的并且工作良好。

map() 函数使用整数运算，因此当数学运算可能表明应该产生分数时，它不会产生分数。小数余数会被截断，不会被四舍五入或平均。

**语法：**

map(**value, fromLow, fromHigh, toLow, toHigh**)

**参数：**

**value**：要映射的数字。

**fromLow**：值当前范围的下界。

**fromHigh**：值当前范围的上界。

**toLow**：值目标范围的下界。

**toHigh**：值目标范围的上界。

将电位器传感器模拟信号（0 到 1023）映射到 LED 亮度（0 到 255）。

**演示效果和串口打印结果：**

调节电位器来调节 LED 亮度。

总之，当你想要使用 PWM 功能时，确保选择那些名称前面带有"~"符号的引脚。

### 第5课：制作光感应 LED

光传感器包含一个光敏电阻来测量光强度。光敏电阻的阻值随着光强度的增加而减小。如果周围环境较暗，LED 会点亮，如果周围环境较亮，LED 会保持熄灭。

在以下章节中，我们将使用串口监视器来观察传感器的结果，所以这里先简要介绍一下！

背景信息：

- **什么是串口监视器**

串口监视器是在 Arduino 上观察结果的有用工具，它在打印传感器结果或一般调试方面非常有用。你也可以通过串口监视器向控制器发送数据来执行某些任务！注意：确保串口数据传输与代码匹配。

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Serial.jpg)

你可以通过点击 **工具** -> **串口监视器** 来打开串口监视器。

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/20200217144001.jpg)

涉及的组件

    1. Seeeduino Lotus
    2. Grove LED
    3. Grove 光传感器
    4. Grove 连接线（如果分离使用）

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Light.png)

硬件连接

    - **模块连接：**
        - 通过 PCB 邮票孔默认连接。
    - 然后通过 USB 线将 Seeeduino 连接到计算机。

- **硬件分析：**

  - 输入：光传感器
  - 控制：Seeeduino Lotus
  - 输出：LED 模块

软件代码

    - 打开 Arduino IDE。
    - 复制以下代码，点击验证检查语法错误。验证没有错误后，你可以上传代码。

```Cpp
// Light Switch
int sensorpin = A6; // Analog input pin that the sensor is attached to
int ledPin = 4;    // LED port
int sensorValue = 0;        // value read from the port
int outputValue = 0;        // value output to the PWM (analog out)

void setup() {
  pinMode(ledPin,OUTPUT);
  pinMode(sensorpin, INPUT);
  Serial.begin(9600);
}

void loop() {
  // read the analog in value:
  sensorValue = analogRead(sensorpin);

  Serial.println(sensorValue);

  if (sensorValue < 200) {
    digitalWrite(ledPin, HIGH);
  }
  else {
    digitalWrite(ledPin, LOW);
  }

  delay(200);
}
```

您还可以从**串口监视器**中查看光强度读数，导航到**工具** -> **串口监视器**。

代码分析

```cpp
Serial.begin(9600);
```

**描述：**

设置串行数据传输的数据速率，单位为每秒比特数（波特率）。与串行监视器通信时，请确保使用其屏幕右下角菜单中列出的波特率之一。不过，您也可以指定其他速率 - 例如，通过引脚 0 和 1 与需要特定波特率的组件进行通信。

可选的第二个参数配置数据位、奇偶校验位和停止位。默认值为 8 个数据位、无奇偶校验、一个停止位。

运行在计算机上的软件与开发板通信，波特率为 9600。

**语法：**

Serial.begin(**speed**)

**参数：**

**speed**：串行通信速度。例如 `9600`、`115200` 等。

将串行波特率设置为 9600。

```cpp
Serial.println(sensorValue);
```

**描述：**

将数据以人类可读的ASCII文本形式打印到串口，后跟回车符（ASCII 13，或 '\r'）和换行符（ASCII 10，或 '\n'）。此命令采用与Serial.print()相同的形式。

**语法：**

Serial.println(**val**) 或 Serial.println(**val**, **format**)

**参数：**

**val**：要打印的值。允许的数据类型：任何数据类型。

**format**：指定数字基数（对于整数数据类型）或小数位数（对于浮点类型）。

串口打印光传感器的值。因此您在IDE界面上打开**串口监视器**，就可以看到输出传感器的值。

**演示效果和串口打印结果：**

如果环境较暗，LED模块将点亮，如果环境较亮则保持熄灭。

分线指南

使用Grove线缆将Grove LED连接到Seeeduino Lotus的数字信号接口**D4**，将Grove光传感器连接到Seeeduino Lotus的模拟信号接口**A6**。

### 第6课：声控LED灯

声音传感器可以检测环境的声音强度，其输出也是模拟的。我相信大家都接触过声控灯，现在我们可以自己制作一个，有了基础知识，这个实验对你来说会很容易。这里使用串口绘图器来可视化结果。

背景信息：

- **什么是串口绘图器**

串口绘图器类似于串口监视器，允许您将Arduino的串口数据实时绘制到计算机上。当需要可视化数据时，这非常有用。

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/SerialPlotter.png)

您可以通过点击**工具** -> **串口绘图器**来打开串口绘图器。

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/serialplot.jpg)

- **练习：** 当发出声音时LED灯点亮。当没有声音且非常安静时，LED灯熄灭。

涉及的组件

    1. Seeeduino Lotus
    2. Grove LED
    3. Grove 声音传感器
    4. Grove 线缆（如果分线）

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Sound.png)

硬件连接

    - **模块连接：**
        - 通过PCB邮票孔默认连接。
    - 然后通过USB线缆将Seeeduino连接到计算机。

软件代码

    - 打开Arduino IDE。
    - 复制以下代码，点击验证检查语法错误。验证没有错误后，您可以上传代码。

```Cpp
//Sound Control Light
int soundPin = A2; // Analog sound sensor is to be attached to analog
int ledPin = 4; // Digital LED is to be attached to digital
void setup() {
  pinMode(ledPin, OUTPUT);
  pinMode(soundPin, INPUT);
  Serial.begin(9600);
}
void loop(){
  int soundState = analogRead(soundPin); // Read sound sensor's value
  Serial.println(soundState);
  // if the sound sensor's value is greater than 400, the light will be on.
  //Otherwise, the light will be turned off
  if (soundState > 400) {
    digitalWrite(ledPin, HIGH);
    delay(100);
  }else{
    digitalWrite(ledPin, LOW);
  }
}
```

您还可以从**串口绘图器**查看光强度读数，导航到**工具** -> **串口绘图器**。

**注意：您也可以根据周围的光强度调整数值。**

代码分析

```cpp
Serial.begin(9600);
```

运行在计算机上的软件与开发板通信，波特率为9600。

```cpp
Serial.print(" ");
```

此函数用于从串口输出数据，输出的是双引号中包含的内容。

```cpp
Serial.println( );
```

这个语句与上面的语句类似，除了 **serial.println** 有换行符返回。

```cpp
Serial.println(soundState);
```

串口打印声音传感器的值。所以你在IDE界面上打开**串口监视器**，就可以看到输出传感器的值。

**演示效果和串口打印结果：**

如果周围环境足够吵闹，LED模块将会亮起。

分离指南

使用Grove线缆将Grove LED连接到Seeeduino Lotus的数字信号接口**D4**，将Grove声音传感器连接到Seeeduino Lotus的模拟信号接口**A2**。

### 第7课：在OLED上显示数据

OLED显示屏可以用于许多情况，你可以用它来可视化传感器读数！

背景信息：

- **什么是Arduino库**

Arduino环境可以通过使用库来扩展，就像大多数其他编程平台一样。库为草图中的使用提供额外的功能，即与特定硬件工作或操作数据。要在草图中使用库，请从**Sketch** ->**Include Library**中选择它。

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/zip.jpg)

更多信息，请访问[如何安装Arduino库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library/)。

涉及的组件

    1. Seeeduino Lotus
    2. Grove OLED
    3. Grove线缆（如果分离）

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/OLED.png)

硬件连接

    - **模块连接：**
        - 通过PCB邮票孔默认连接。
    - 然后通过USB线缆将Seeeduino连接到计算机。

软件代码

    - 打开Arduino IDE。
    - 安装**U8g2库**：导航到**Sketch** -> **Include Library** -> **Manage Libraries...**，在**Library Manager**中搜索关键词"**U8g2**"。这是**oliver的u8g2库**，点击然后安装。

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/U8g2-lib.png)

- 复制以下代码，点击Verify检查语法错误。验证没有错误后，你可以上传代码。

```cpp
#include <Arduino.h>
#include <U8x8lib.h>

 U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);

// U8X8_SSD1306_128X64_NONAME_SW_I2C u8x8(/* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);   // OLEDs without Reset of the Display

void setup(void) {
  //u8x8.setBusClock(100000);  // If you breakout other modules, please enable this line
  u8x8.begin();
  u8x8.setFlipMode(1);
}

void loop(void) {
  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 0);
  u8x8.print("Hello World!");
}
```

!!!注意
  如果您拆分所有模块并单独使用 Grove OLED，您可能会发现它无法与此代码一起工作。如果您遇到此类问题，请参考本节末尾：拆分指南。

- **代码分析**

```cpp
#include <>
```

**描述：**

`#include` 用于在你的程序中包含外部库。这使程序员能够访问大量标准 C 库（预制函数组），以及专门为 Arduino 编写的库。

注意 `#include` 与 `#define` 类似，没有分号终止符，如果你添加分号，编译器会产生难以理解的错误消息。

```cpp
#include <U8x8lib.h>
```

**#include** 是一个引入头文件的指令。这里我们使用 U8x8lib.h 库。

```cpp
U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);  
```

**注意**
  
如果您拆分了其他模块并仅使用 OLED，您必须使用软件 I2C：

```cpp
// U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);  

U8X8_SSD1306_128X64_NONAME_SW_I2C u8x8(/* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE); 
```

**描述：**

一旦对象被声明，您就可以使用库中的函数。

```cpp
u8x8.begin();
```

**描述：**

Arduino环境下显示器的简化设置程序。请参阅设置指南来选择合适的U8g2构造函数。

**语法：**

u8x8.begin()

初始化u8g2库

```cpp
u8x8.setFlipMode(1);
```

**描述：**

某些显示器支持内部帧缓冲区的180度旋转。这个硬件功能可以通过此过程进行控制。重要提示：更改翻转模式后重新绘制完整的显示器。最好先清除显示器，然后更改翻转模式，最后重新绘制内容。屏幕上任何现有内容的结果都将是未定义的。

**语法：**

u8x8.setFlipMode(**mode**)

**参数：**

**mode**：`0` 或 `1`

将显示器翻转180度。

```cpp
u8x8.setCursor();
```

**描述：**

定义打印函数的光标位置。打印函数的任何输出都将从此位置开始。

**语法：**

u8x8.setCursor(**x, y**)

**参数：**

**x, y**：打印函数光标的列/行位置。

设置绘制光标位置。

```cpp
u8x8.setFont()
```

**描述：**

为字形和字符串绘制函数定义一个 u8x8 字体。

**语法：**

u8x8.setFont(**font_8x8**)

设置显示字体。

```cpp
u8x8.print();
```

在OLED上绘制内容。

**演示效果和串口打印结果：**

在OLED显示屏上打印Hello World。

**U8g2库参考**

如果您想了解更多关于U8g2库的信息，请参考[这里](https://github.com/olikraus/u8g2/wiki/u8g2reference)。

分线指南

使用Grove线缆将OLED连接到Seeeduino Lotus的**I2C**接口（注意：I2C的默认地址是0x78）。

!!!Note
    - 如果您分线其他模块来使用OLED但无法工作，或者您想使用最快的OLED I2C（默认：40KHZ），请按照以下说明操作：

  点击"此电脑" -> 文档 -> Arduino -> libraries -> U8g2 -> src -> U8x8lib.cpp -> 滑动到第1334行 -> 删除或禁用此行 -> 保存文件。

  ```CPP
  Wire.setClock(u8x8->bus_clock);   // just delete or disable this line
  ```
  
 或者您可以将总线锁设置为100000，然后在setup()中添加。

```cpp
void setup(void) {
  u8x8.setBusClock(100000); //  用于限制I2C总线时钟
  u8x8.begin();
  u8x8.setFlipMode(1);
}
```

### 第8课：检测周围温度和湿度

你是否曾经好奇过周围环境的温度和湿度？想知道确切的数值吗？想根据温度决定今天穿裙子还是外套吗？让我们制作一个温度计吧！

背景信息：

- **什么是协议信号（I2C）**

**协议信号：** 我们使用的协议信号是I2C，所以这里简要介绍一下I2C。I2C总线在设备之间传输信息连接时只需要两根线：SDA（串行数据线）和SCL（串行时钟线）。

这两条线是双向I/O线，主要组件用于启动总线传输数据，并生成时钟以打开传输设备，此时任何被寻址的设备都被视为从设备。

总线上主从设备（发送器和接收器）之间的关系不是恒定的，而是取决于数据传输的方向。如果主机要向从设备发送数据，主机首先寻址从设备，然后主动向从设备发送数据，最后由主机终止数据传输。如果主机要从从设备接收数据，从设备首先被主机寻址。

然后主机接收从设备发送的数据，主机终止接收过程。在这种情况下，主机负责生成时序时钟和终止数据传输。

- **实践：** 让你的OLED显示屏显示当前环境温度和湿度。

涉及的组件

    1. Seeeduino Lotus
    2. Grove OLED
    3. Grove 温度和湿度传感器
    4. Grove 连接线（如果分离）

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Temp.png)

硬件连接

    - **模块连接：**
        - 通过PCB邮票孔默认连接。
    - 然后通过USB线将Seeeduino连接到计算机。

**注意**

一些升级版套件已配备DHT20。如果你套件上的湿度和温度检测器是黑色的，那么检测器就是DHT20，其示例代码在DHT11之后。

软件代码（DHT11）

    - 打开Arduino IDE。
    - 下载并安装所需的[库](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor)。
    - 复制以下代码，点击验证检查语法错误。验证没有错误后，你可以上传代码。

```Cpp
//温湿度传感器
#include "DHT.h"
#include <Arduino.h>
#include <U8x8lib.h>

#define DHTPIN 3     // 连接的引脚
#define DHTTYPE DHT11   // DHT 11 
DHT dht(DHTPIN, DHTTYPE);

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);

void setup(void) {
  Serial.begin(9600); 
  Serial.println("DHTxx test!");
  dht.begin();
  u8x8.begin();
  u8x8.setPowerSave(0);  
  u8x8.setFlipMode(1);
}

void loop(void) {

  float temp, humi;
  temp = dht.readTemperature();
  humi = dht.readHumidity();
  
  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 33);
  u8x8.print("Temp:");
  u8x8.print(temp);
  u8x8.print("C");
  u8x8.setCursor(0,50);
  u8x8.print("Humidity:");
  u8x8.print(humi);
  u8x8.print("%");
  u8x8.refreshDisplay();
  delay(200);
}
```

软件代码(DHT20)

    - 打开 Arduino IDE。
    - 下载并安装所需的[库](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor)。
    - 复制以下代码，点击验证以检查语法错误。确认没有错误后，您可以上传代码。

```cpp
//温湿度传感器
#include "DHT.h"
#include <Arduino.h>
#include <U8x8lib.h>
#include "Wire.h"

#define DHTTYPE DHT20   // DHT 20

DHT dht(DHTTYPE);  
#if defined(ARDUINO_ARCH_AVR)
    #define debug  Serial
 
#elif defined(ARDUINO_ARCH_SAMD) ||  defined(ARDUINO_ARCH_SAM)
    #define debug  SerialUSB
#else
    #define debug  Serial
#endif
 
U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);
 
void setup(void) {
    debug.begin(115200);
    debug.println("DHTxx test!");
    Wire.begin();
 
    /*如果使用WIO link，必须拉高电源引脚。*/
    // pinMode(PIN_GROVE_POWER, OUTPUT);
    // digitalWrite(PIN_GROVE_POWER, 1);
 
    dht.begin();
  dht.begin();
  u8x8.begin();
  u8x8.setPowerSave(0);  
  u8x8.setFlipMode(1);
}
 
void loop(void) {
 
  float temp, humi;
  temp = dht.readTemperature();
  humi = dht.readHumidity();
 
  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 33);
  u8x8.print("Temp:");
  u8x8.print(temp);
  u8x8.print("C");
  u8x8.setCursor(0,50);
  u8x8.print("Humidity:");
  u8x8.print(humi);
  u8x8.print("%");
  u8x8.refreshDisplay();
  delay(200);
}
```

点击右上角的"Monitor"并查看结果。

代码分析

```cpp
float temp, humi;
```

定义变量来存储读数。

```cpp
temp = dht.readTemperature();
humi = dht.readHumidity();
```

**描述：**

用于从传感器读取温度和湿度值的函数。

**语法：**

**dht.readTemperature()** 和 **dht.readHumidity()**。返回类型：float。

调用这些函数来读取温度和湿度并将它们存储在定义的变量中。

**演示效果和串口打印结果：**

周围的温度和湿度显示在OLED屏幕上。

分线指南

使用Grove线缆将OLED连接到Seeeduino Lotus的**I2C**接口（注意：I2C的默认地址是0x78）。将Grove温湿度传感器连接到Seeeduino Lotus的数字信号接口**D3**。

### 第9课：测量周围气压

Grove气压传感器(BMP280)是博世BMP280高精度低功耗数字气压计的分线板。该模块可用于精确测量温度和大气压力。由于大气压力随海拔高度变化，它还可以测量某个地方的大致海拔高度。

涉及的组件
    1. Seeeduino Lotus
    2. Grove气压传感器
    3. Grove线缆（如果分线）

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/AirPressure.png)

硬件连接
    - **模块连接：**
        - 通过PCB邮票孔默认连接。
    - 然后通过USB线缆将Seeeduino连接到计算机。

软件代码

    - 打开Arduino IDE。
    - 安装**Grove气压传感器库**：导航到**Sketch** -> **Include Library** -> **Manage Libraries...**，在**Library Manager**中搜索关键词"**Grove BMP280**"，然后安装。

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/BMP-lib.png)

- 复制以下代码，点击Verify检查语法错误。验证没有错误后，您可以上传代码。
- 在此程序中，气压传感器信息通过I2C总线从传感器发送到Seeeduino，然后Seeeduino将它们打印到串口监视器上。打开**串口监视器**查看结果。

```cpp
//气压检测
#include "Seeed_BMP280.h"
#include <Wire.h>

BMP280 bmp280;

void setup() {
    Serial.begin(9600);
    if (!bmp280.init()) {
        Serial.println("Device not connected or broken!");
    }
}

void loop() {

    float pressure;

    //获取并打印温度
    Serial.print("Temp: ");
    Serial.print(bmp280.getTemperature());
    Serial.println("C"); // 摄氏度单位，因为原始arduino不支持特殊符号

    //获取并打印大气压力数据
    Serial.print("Pressure: ");
    Serial.print(pressure = bmp280.getPressure());
    Serial.println("Pa");

    //获取并打印海拔数据
    Serial.print("Altitude: ");
    Serial.print(bmp280.calcAltitude(pressure));
    Serial.println("m");

    Serial.println("\n");//在不同时间的输出之间添加一行。

    delay(1000);
}
```

代码分析

```cpp
#include <Wire.h>
```

**#include** 是一个引入头文件的指令。这里我们使用 Wire.h 库，这个库包含在 Arduino IDE 中。

```cpp
#include "Seeed_BMP280.h"
```

表示引入当前路径的 Seeed_BMP280.h 头文件。

```cpp
if (!bmp280.init()) {
    Serial.println("Device not connected or broken!");
}
```

**描述：**

使用 bmp280.init() 初始化气压传感器。进一步使用 if 条件检查是否正确启动，如果正确启动则跳过消息。如果初始化有问题，则打印消息，其中 ! 在编程中表示"非"。

**语法：**

**bmp280.init()**

如果气压传感器没有正确启动，则向串行监视器输出错误信息。

```cpp
Serial.print(bmp280.getTemperature());
```

**描述：**

用于从传感器读取温度值的函数。

**语法：**

**bmp280.getTemperature()**。返回类型：float

将温度数据打印到串口监视器。

```cpp
Serial.print(pressure = bmp280.getPressure());
```

**描述：**

用于从传感器读取气压值的函数。

**语法：**

**bmp280.getPressure()**。返回类型：float

打印当前气压。

```cpp
Serial.print(bmp280.calcAltitude(pressure));
```

**描述：**

获取压力值并将其转换为海拔高度。

**语法：**

bmp280.calcAltitude(**float**)。返回类型：float

**参数：**

**float**：压力值。

打印幅度。

**演示效果和串口打印结果：**

气压读数显示在串口监视器上。

分线指南

使用Grove线缆将Grove气压传感器连接到Seeeduino Lotus的**I2C**接口（注意：I2C默认地址为0x77或0x76）。

### 第10课：感知运动

这是最后一个传感器，三轴加速度计，使用这个模块，您可以轻松地为您的设计添加运动监测功能。因此我们可以在运动的基础上做很多有趣的小实验。

- **练习：** 当检测到运动时，蜂鸣器发出警报，表示物体正在运动。

涉及的组件

    1. Seeeduino Lotus
    2. Grove 3轴加速度计
    3. Grove线缆（如果分线使用）

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Gyro.png)

硬件连接

    - **模块连接：**
        - 通过PCB邮票孔默认连接。
    - 然后通过USB线缆将Seeeduino连接到计算机。

软件代码

    - 打开Arduino IDE。
    - 从Github下载[3轴数字加速度计（±2g到16g）](https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR)。点击**Sketch** > **Include library** > **Add .ZIP library**，将库导入到IDE中。
    - 复制以下代码，点击验证检查语法错误。确认没有错误后，您可以上传代码。
    - 在这个程序中，加速度信息通过I2C总线从传感器发送到Seeeduino，然后Seeeduino将它们打印到串口监视器上。打开**串口监视器**查看结果。

```Cpp
//重力加速度
#include "LIS3DHTR.h"
#ifdef SOFTWAREWIRE
    #include <SoftwareWire.h>
    SoftwareWire myWire(3, 2);
    LIS3DHTR<SoftwareWire> LIS;       //软件I2C
    #define WIRE myWire
#else
    #include <Wire.h>
    LIS3DHTR<TwoWire> LIS;           //硬件I2C
    #define WIRE Wire
#endif

void setup() {
    Serial.begin(9600);
    while (!Serial) {};
    LIS.begin(WIRE, 0x19); //IIC初始化
    delay(100);
    LIS.setOutputDataRate(LIS3DHTR_DATARATE_50HZ);
}
void loop() {
    if (!LIS) {
        Serial.println("LIS3DHTR didn't connect.");
        while (1);
        return;
    }
    //3轴
    Serial.print("x:"); Serial.print(LIS.getAccelerationX()); Serial.print("  ");
    Serial.print("y:"); Serial.print(LIS.getAccelerationY()); Serial.print("  ");
    Serial.print("z:"); Serial.println(LIS.getAccelerationZ());

    delay(500);
}
```

代码分析

```cpp
#include "LIS3DHTR.h"
#ifdef SOFTWAREWIRE
    #include <SoftwareWire.h>
    SoftwareWire myWire(3, 2);
    LIS3DHTR<SoftwareWire> LIS;   //软件I2C
    #define WIRE myWire
#else
    #include <Wire.h>
    LIS3DHTR<TwoWire> LIS;        //硬件I2C
    #define WIRE Wire
#endif
```

使用软件I2C或硬件I2C初始化模块。

```cpp
while (!Serial) {};
```

如果不打开串口监视器，代码会在这里停止，所以请打开串口监视器。

```cpp
LIS.begin(WIRE, 0x19);
LIS.setOutputDataRate(LIS3DHTR_DATARATE_50HZ);
```

**描述：** 初始化加速度计。

**语法：** `LIS.begin(Wire, address)`。

**描述：** 设置加速度计的输出数据速率。

**语法：** `LIS.setOutputDataRate(odr_type_t odr)`。

初始化加速度计并将输出速率设置为50Hz。

```cpp
Serial.print("x:"); Serial.print(LIS.getAccelerationX()); Serial.print("  ");
Serial.print("y:"); Serial.print(LIS.getAccelerationY()); Serial.print("  ");
Serial.print("z:"); Serial.println(LIS.getAccelerationZ());
```

**描述：**

用于从传感器读取X轴值的函数。

**语法：**

**LIS.getAccelerationX()**。返回类型：float。

**描述：**

用于从传感器读取Y轴值的函数。

**语法：**

**LIS.getAccelerationY()**。返回类型：float。

**描述：**

用于从传感器读取Z轴值的函数。

**语法：**

**LIS.getAccelerationZ()**。返回类型：float。

将3轴数据打印到串口监视器。

**演示效果和串口打印结果：**

3轴加速度计读数显示在串口监视器上。

分线指南

使用Grove线缆将Grove3轴加速度计连接到Seeeduino Lotus的**I2C**接口（注意：I2C默认地址为0x19）。

## 奖励项目

### 项目1：音乐动态节拍灯

- **项目描述：** 在这个实验中，我们将让蜂鸣器播放悦耳的音乐，并让LED灯根据音乐频率和节拍闪烁。

涉及的组件

    1. Seeeduino Lotus
    2. Grove LED
    3. 蜂鸣器
    4. Grove线缆（如果分线使用）

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/project1.png)

硬件连接

    - **模块连接：**
        - 通过PCB邮票孔默认连接。
    - 然后通过USB线缆将Seeeduino连接到计算机。

软件代码

    - 打开Arduino IDE。
    - 复制以下代码，点击验证检查语法错误。确认没有错误后，您可以上传代码。

```cpp
//音乐动态节拍灯
#define NTD0 -1
#define NTD1 294
#define NTD2 330
#define NTD3 350
#define NTD4 393
#define NTD5 441
#define NTD6 495
#define NTD7 556

#define NTDL1 147
#define NTDL2 165
#define NTDL3 175
#define NTDL4 196
#define NTDL5 221
#define NTDL6 248
#define NTDL7 278

#define NTDH1 589
#define NTDH2 661
#define NTDH3 700
#define NTDH4 786
#define NTDH5 882
#define NTDH6 990
#define NTDH7 112

#define WHOLE 1
#define HALF 0.5
#define QUARTER 0.25
#define EIGHTH 0.25
#define SIXTEENTH 0.625

int tune[]=
{
NTD3,NTD3,NTD4,NTD5,
NTD5,NTD4,NTD3,NTD2,
NTD1,NTD1,NTD2,NTD3,
NTD3,NTD2,NTD2,
NTD3,NTD3,NTD4,NTD5,
NTD5,NTD4,NTD3,NTD2,
NTD1,NTD1,NTD2,NTD3,
NTD2,NTD1,NTD1,
NTD2,NTD2,NTD3,NTD1,
NTD2,NTD3,NTD4,NTD3,NTD1,
NTD2,NTD3,NTD4,NTD3,NTD2,
NTD1,NTD2,NTDL5,NTD0,
NTD3,NTD3,NTD4,NTD5,
NTD5,NTD4,NTD3,NTD4,NTD2,
NTD1,NTD1,NTD2,NTD3,
NTD2,NTD1,NTD1
};

float durt[]=
{
1,1,1,1,
1,1,1,1,
1,1,1,1,
1+0.5,0.5,1+1,
1,1,1,1,
1,1,1,1,
1,1,1,1,
1+0.5,0.5,1+1,
1,1,1,1,
1,0.5,0.5,1,1,
1,0.5,0.5,1,1,
1,1,1,1,
1,1,1,1,
1,1,1,0.5,0.5,
1,1,1,1,
1+0.5,0.5,1+1,
};

int length;
int tonepin=5;
int ledp=4;

void setup()
{
  pinMode(tonepin,OUTPUT);
  pinMode(ledp,OUTPUT);
  length=sizeof(tune)/sizeof(tune[0]);
}

void loop()
{
  for(int x=0;x<length;x++)
  {
    tone(tonepin,tune[x]);
    digitalWrite(ledp, HIGH); 
    delay(400*durt[x]);
    digitalWrite(ledp, LOW);
    delay(100*durt[x]);
    noTone(tonepin);

  }
  delay(4000);
}
```

代码分析
  
```cpp
#define NTD
```

这里是D调频率的定义，分为低音、中音和高音。

```cpp
#define WHOLE 1
#define HALF 0.5
#define QUARTER 0.25
#define EIGHTH 0.25
#define SIXTEENTH 0.625
```

注意：节拍分为一拍、半拍、1/4拍、1/8拍，我们规定一拍音符时间为1；半拍为0.5；1/4拍为0.25；1/8拍为0.125。

```cpp
int tune[]=...
```

根据频谱列出频率。

```cpp
float durt[]=...
```

根据频谱列出节拍。

```cpp
delay(100*durt[x]);
```

分别控制LED灯的开关。

**演示效果和串口打印结果：**

蜂鸣器将播放一段旋律，同时LED模块将以相同频率闪烁。

分线指南

将Grove LED连接到Seeeduino Lotus的数字信号接口**D4**，将蜂鸣器连接到Seeeduino Lotus的数字信号接口**D5**。

### 项目2：制作智能声光感应台灯

- **项目描述：** 顾名思义，这个项目是制作一个由声音和光线控制的小灯。我们需要使用LED模块作为输出。光传感器和声音传感器用作输入信号。这样，您可以实现智能台灯的功能：如果周围的声音级别超过某个预设值，则LED点亮，或者如果周围的光强度低于某个值，LED模块也会点亮。

涉及的组件

    1. Seeeduino Lotus
    2. Grove LED
    3. 光传感器
    4. 声音传感器
    5. Grove 线缆（如果分线使用）

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/project2.png)

硬件连接

    - **模块连接：**
        - 通过PCB邮票孔默认连接。
    - 然后通过USB线缆将Seeeduino连接到计算机。

软件代码

    - 打开Arduino IDE。
    - 复制以下代码，点击验证以检查语法错误。验证没有错误后，您可以上传代码。

```Cpp
//光感应台灯
int soundPin = A2; // 模拟声音传感器连接到模拟引脚
int lightPin = A6; //模拟光传感器连接到模拟引脚
int ledPin = 4; // 数字LED连接到数字引脚

void setup() {
  pinMode(ledPin, OUTPUT);
  pinMode(lightPin, INPUT);
  pinMode(soundPin, INPUT);
}

void loop(){
  int soundState = analogRead(soundPin); // 读取声音传感器的值
  int lightState = analogRead(lightPin); // 读取光传感器的值
  // 如果声音传感器的值大于500或声音传感器的值小于200，灯将点亮。
  //否则，灯将关闭
if (soundState > 500 || lightState < 200) {
  digitalWrite(ledPin, HIGH);
  delay(500); //您可以添加"//"来移除延迟
}else{
  digitalWrite(ledPin, LOW);
}
}
```

代码分析

```cpp
if (soundState > 500 || lightState < 200) {
  ...
}
```

括号中是一个逻辑表达式。**&&** 和 **||** 都是逻辑表达式中常用的运算符。常见用法是 **if (表达式1 || 表达式2)** 和 **if (表达式1 && 表达式2)**。

**||** 表示"**或**"，满足其中一个条件，整个表达式就为真，满足if判断的条件。

**&&** 表示"**与**"，只有当括号中的所有表达式都为真时，才会执行if{}中的语句。

**演示效果和串口打印结果：**

如果周围声音足够大或光照强度较低，LED模块将以更高的强度点亮。

分离指南

使用Grove线缆将Grove LED连接到Seeeduino Lotus的数字信号接口**D4**，将光线传感器连接到Seeeduino Lotus的模拟信号接口**A1**。将声音传感器连接到Seeeduino Lotus的模拟信号接口**A2**。

## 制作您自己的模块和开发板

经过这段时间的学习，您已经对Arduino和开源硬件有了系统的了解，那么为什么不更进一步，尝试制作自己的模块或开发板呢？

### EDA

要设计自己的开发板，您需要设计自己模块的原理图，这需要EDA工具来完成。这里推荐一个开源的EDA软件。

- **KiCAD**

[KiCad](https://www.kicad-pcb.org/) 是一个免费的电子设计自动化软件套件。它便于设计电子电路的原理图并将其转换为PCB设计。它具有原理图捕获和PCB布局设计的集成环境。该程序处理原理图捕获和PCB布局设计，并输出Gerber文件。该套件可在Windows、Linux和macOS上运行，并在GNU GPL v3许可证下授权。

- **Upverter**

如果您不想自己进行原理图或布局工作，但想将基于Seeed模块的原型转换为集成产品，我们强烈建议您尝试Upverter。

请访问[**Grove初学者套件Arduino Upverter指南**](https://wiki.seeedstudio.com/cn/Grove-Beginner-Kit-for-Arduino-Upverter-Guide/)了解更多信息。

### PCB服务

完成设计后，请查看[Seeed Fusion PCBA服务](https://www.seeedstudio.com/fusion_pcb.html)，它可以帮助将您的设计转化为实际运行的设备。

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Fusion.png)

Seeed Studio拥有自己的[开放零件库(OPL)](https://www.seeedstudio.com/opl.html)，这是一个包含超过10,000个常用元件的集合，专门为Seeed Fusion PCBA服务采购。为了加快PCB设计过程，Seeed正在为KiCad和Eagle构建元件库。当所有元件都来自Seeed的PCBA OPL并与[Seeed Fusion PCB组装(PCBA)服务](https://www.seeedstudio.com/fusion_pcb.html)一起使用时，整个PCBA生产时间可以从20个工作日缩短到仅7天。

## 常见问题

### 1. 如何拆下单个电子模块使用？

![image.png](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/remove1.jpg)

仔细观察Grove初学者套件Arduino，您会看到每个单独模块和背板之间有3个小孔。您只需要使用一对斜口钳从小孔处切割模块周围的PCB背板。

![image.png](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/remove2.jpg)

---

**注意：请仔细沿着小孔外围切割，不要切到小孔（防止内部走线短路从而损坏模块）；如果意外切到小孔，请用刀片清理小孔以防止短路**

---

​![image.png](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/remove3.jpg)

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/res/Grove-Beginner-Kit-for-Arduino-SCH-PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

1. [**Grove初学者套件Arduino Wiki [PDF]**](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/res/Grove-Beginner-Kit-For-ArduinoPDF.pdf)

2. [**Grove初学者套件Arduino原理图设计文件**](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/res/Grove-Beginner-Kit-for-Arduino-SCH-PCB.zip)

3. **Github上的模块库：**
      - [OLED显示屏](https://github.com/olikraus/U8g2_Arduino)
      - [温湿度传感器](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor)
      - [气压传感器](https://github.com/Seeed-Studio/Grove_BMP280)
      - [3轴加速度计](https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR)

4. [**传感器数据手册**](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/res/Grove-beginner-kit-for-arduino-datasheet.zip)

5. [**初始Arduino固件演示**](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/res/GroveBeginnerKitFirmwareFINAL.zip)

6. [**Grove初学者套件Arduino资源合集 [20200401] (7z)**](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/res/Grove-Beginner-Kit-For-Arduino-Resources-in-one(20200401).7z)

7. [**Grove初学者套件Arduino FCC + SDOC证书**](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/res/FCC-SDOC-Certificates.zip)

8. [**Grove初学者套件Arduino Codecraft图形化编程课程web v7**](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/res/Grove-Beginner-Kit-For-Arduino-Codecraft-Graphical-Programming-Course-web-v7.pdf)

## 更多学习资源

- [用于实时物联网数据预测的LSTM](https://github.com/256ericpan/LSTM_IoT)

- [生物学初学者无代码编程指南](https://www.biomaker.org/nocode-programming-for-biology-handbook)

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
