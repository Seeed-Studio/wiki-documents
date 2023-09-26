---
description: Grove Beginner Kit For Arduino
title: Grove Beginner Kit For Arduino
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Beginner-Kit-For-Arduino
last_update:
  date: 2/1/2023
  author: Matthew
---

英文版 wiki ：

# Grove 极简套件 - 适用于Arduino入门

Grove 极简入门套件对于初次接触 Arduino 的用户而言是最好的入门学习套件之一，它不需要特别困难的焊接操作和复杂的电路，用户可以专心地学习Arduino的使用。这个套件是由一个 Arduino 兼容主板 (Seeeduino Lotus) 和十个 Grove 模块集合而成的一体PCB板。**所有模块都已通过PCB压印孔连接到Seeeduino，因此不需要额外的Grove数据线进行连接**。当然，您也可以将模块取出并使用Grove数据线连接模块。您可以使用此套件来构建自己喜欢的任何Arduino/Seeeduino项目。如果您之前从未接触过Seeeduino Lotus与Grove模块，请不用担心，我们有详细教程手把手带您入门。


## 硬件描述

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Parts.jpg)

**注意:** 尺寸 - 17.69 * 11.64 * 1.88 厘米

1. **[Grove - LED](http://wiki.seeedstudio.com/Grove-Red_LED/):** 简易的LED模块
2. **[Grove - Buzzer](http://wiki.seeedstudio.com/Grove-Buzzer/):** 压电式蜂鸣器
3. **[Grove - OLED Display 0.96"](http://wiki.seeedstudio.com/Grove-OLED-Display-0.96-SSD1315/):** 128×64 点分辨率/ 高亮度/ 自发光和高对比度/ 紧凑设计的低功耗大屏幕
4. **[Grove - Button](http://wiki.seeedstudio.com/Grove-Button/):** 按钮开关
5. **[Grove - Rotary Potentiometer](http://wiki.seeedstudio.com/Grove-Rotary_Angle_Sensor/):** 可调电位器
6. **[Grove - Light](http://wiki.seeedstudio.com/Grove-Light_Sensor/):** 检测环境的光强度
7. **[Grove - Sound](http://wiki.seeedstudio.com/Grove-Sound_Sensor/):** 检测环境的声音强度
8. **[Grove - Temperature & Humidity Sensor](http://wiki.seeedstudio.com/Grove-TemperatureAndHumidity_Sensor/):** 检测周围的温度和湿度值
9. **[Grove - Air Pressure Sensor](http://wiki.seeedstudio.com/Grove-Barometer_Sensor-BMP280/):** 检测周围的大气压
10. **[Grove - 3-Axis Accelerator](http://wiki.seeedstudio.com/Grove-3-Axis_Digital_Accelerometer-1.5g/):** 检测物体加速度
11. **[Seeeduino Lotus](http://wiki.seeedstudio.com/Seeeduino_Lotus/):** 具有Grove端口的Arduino兼容板






**注意：** 在默认情况下，Grove模块均通过PCB压印孔连接到Seeeduino。这意味着如果没有断开连接，则无需使用额外的Grove数据线进行连接。默认引脚如下：
        
|模块|端口|引脚/地址|
|---|---|---|
|LED|数字|D4|
|蜂鸣器|数字|D5|
|OLED Display 0.96"|I2C|I2C, 0x78(默认)|
|按钮|数字|D6|
|旋转式电位器|模拟|A0|
|光传感器|模拟|A6|
|声音传感器|模拟|A2|
|温度&湿度传感器|数字|D3|
|气压传感器|I2C|I2C, 0x77(默认) / 0x76(可选)|
|3轴数字加速度计|I2C|I2C, 0x19(默认)|
 


### 拆分指南

**注意：** 使用刀时请小心不要割伤手指


如果您更更倾向于在其他地方使用这些模块，则可以按照以下步骤将这些模块拆分出来。

**第一步**

用小刀或锋利的物体切割压印孔，使其有明显的割痕。

**第二步**

上下摇动模型部件，它将很容易与主体分离。







## 产品清单

|模块|数量|
|---|---|
|**传感器**||
|温度&湿度传感器|x1|
|3轴数字加速度计|x1|
|气压传感器|x1|
|光传感器|x1|
|声音传感器|x1|
|**输入模块**||
|旋转式电位器|x1|
|按钮|x1|
|**输出模块**||
|LED|x1|
|蜂鸣器|x1|
|**显示模块**||
|OLED 显示器|x1|
|**Grove 数据线**|x6|
|**Micro USB数据线**|x1|



## 学习目标

- 开源硬件系统的基础。
- 基础Arduino编程
- 传感器的通信原理和方法。
- 动手实施开源硬件项目。

### 即插即用拆箱演示

Grove极简入门套件有即插即用拆箱演示，你只需要把板插上电源就可以一次性体验所有的传感器！让我们通过控制按钮和旋转式电位器体验每个传感器的演示吧！


![](https://s3-us-west-2.amazonaws.com/files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Firmware.jpg)

- **Scroll(滚动)** -> 旋转旋转式电位器
- **Select(选择)** -> 短按按钮
- **Exit Current Demo(退出当前示范)** -> 长按按钮

蜂鸣器和LED模块用于按键提示。






## Arduino入门教程

### 安装Arduino IDE

- **Arduino IDE** 是Arduino的集成开发环境，用于单片机软件的编程、下载、测试等。
- 根据操作系统下载并安装相应的[Arduino IDE](https://www.arduino.cc/en/Main/Software)。

![](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)



### 安装USB驱动

- Arduino通过USB数据线连接到电脑。USB驱动程序取决于Arduino上使用的USB芯片的类型。*注意：USB芯片类型通常印在开发板的背面。*

  - 下载[CP2102USB驱动](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers). **注意:** 请根据操作系统安装驱动程序。
  - 驱动程序安装完成后，使用USB连接线将Arduino连接到电脑的USB端口。 
    - **Windows 用户:** 你可以从`我的电脑` -> `属性` -> `硬件` -> `设备管理器`路径下找到`COM`串口信息。
    - **Mac OS 用户:** 你可以点击左上角的``标志，然后点击`关于本机` -> `系统报告...` -> `USB`。这时候你应该可以发现一个CP2102 USB驱动。
  - 如果未安装驱动程序，或者驱动程序安装不正确(与芯片型号不匹配)，它将在设备管理器中显示为“未知设备”。 如果出现这个情况，则需要重新安装驱动程序。



### 启动Arduino IDE

1.在电脑上打开 **Arduino IDE**。

2.打开目录菜单`Tools(工具)` -> `Board(开发板)`并选择相应的开发板， 这里我们应选择 **Arduino/Genuino Uno**。

![](http://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/board.png)

3.点击 `Tools(工具)` -> `Port(端口)`菜单， 为您的开发板选择对应的端口(这个端口为上一步在设备管理器中显示的串行端口)。在这个示例中我们选择`COM6`。 **Mac OS 用户**，应当选择 `/dev/cu.SLAB_USBtoUART`.

![](http://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/port.png)

4.创建一个新的Arduino文件并命名为`Hello.ino`，并复制以下代码:

```Cpp
void setup() {
  Serial.begin(9600); // initializes the serial port with a baud rate of 9600
}
void loop() {
  Serial.println("hello, world"); // prints a string to a serial port
  delay(1000); //delay of 1 second
}
```

5.在Arduino IDE的左上角有两个按钮 **Verify(编译)和Upload(上传)**. 首先点击编译按钮(✓)来对程序进行编译。 编译成功后，点击上传按钮(→)。

![](http://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/func.png)

6.导航到`Tools(工具)` -> `Serial Monitor(串口监视器)`或单击右上角的 **串口监视器**(放大镜图标)，您可以在串口监视器中看到程序的运行结果：

![](http://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/print.png)

**注意:** 如果您从我们的USB驱动安装了便携式的Arduino IDE，您可以在 **File(菜单)** -> **Sketch Book** 中找到所有的模块演示以及和Arduino IDE一起预安装的模块库。 

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Sketchbook.png)

!!!Note
        所有模块都预先布线在同一个电路板上，因此不需要额外的数据传输线和焊接。 但是，如果您要拆开模块并想用Grove数据线连接它们，请查看《拆分指南》。





## 模块示例

### 1. LED

我们已经学习了如何输出“ Hello world”。 现在让我们学习如何点亮LED模块。 正如我们所知，控制系统由三个基本部分组成：输入，控制和输出。 点亮LED仅需使用输出，而不使用输入。 Seeeduino是控制单元，LED模块是输出单元，输出信号是数字信号。


<font size="5;font" color="#314B9F">背景知识</font>

- **什么是数字信号？**

**数字信号:** 数字信号是指幅度的值是离散的，幅度被限制为有限数量的值。在我们的控制器中，数字信号具有两个状态：LOW(0V)为0； HIGH(5V)为1。因此向LED发送‘HIGH’信号可以使其点亮。

![Alt text](http://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/digital.png)



- <font size="5;font" color="#314B9F">涉及组件</font>


  1. Seeeduino Lotus
  2. Grove LED
  3. Grove 数据线(仅适用于模块被拆分开的情况)

![](http://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/LED.png)



- **硬件连接：**
  - **模块连接**
    	- 默认通过PCB压印孔连接。
  		- 通过USB数据线将Seeeduino连接到计算机。
  


- <font size="5;font" color="#314B9F">程序代码</font>

  - 打开 Arduino IDE.
  - 复制以下代码，单击“编译(✓)”以检查语法错误。确保没有错误后“上传(→)”代码。

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



- <font size="5;font" color="#314B9F">代码分析</font>


```cpp
setup(){
}
```

项目开始时将调用`setup()`函数来初始化变量、引脚模式和开始使用库等。`setup()`函数仅在每次Arduino开发板通电或复位后运行一次。

```cpp
loop(){
}
```

在创建一个用于初始化和设置初始值的`setup()`函数之后，`loop()` 函数将按照其名称的含义精确执行并连续循环，从而允许您的程序进行更改与响应。`loop()` 函数被用来主动控制Arduino开发板。

```cpp
int ledPin = 4;
```

**描述:**

将值转换为int数据类型。

**语法:**

int(**x**) or (int)**x** (C样式类型转换)

**参数:**

**x**: 一个值。 允许的数据类型：任何类型。

为名为ledPin的变量分配一个`int` 类型的4。

```cpp
pinMode(ledPin, OUTPUT);
```

**描述:**

将指定的引脚配置为输入或输出。有关引脚功能的详细信息，请参见“数字引脚”页面。

从Arduino 1.0.1开始，可以使用INPUT_PULLUP模式启用内部上拉电阻。 此外，“ INPUT”模式明确禁用了内部上拉电阻。

**语法:**

pinMode(**pin, mode**)

**参数:**

**pin(引脚)**: 设置模式的Arduino引脚号。

**mode(模式)**: `INPUT`, `OUTPUT`, or `INPUT_PULLUP`.

将ledPin设置为输出模式。

```cpp
digitalWrite(ledPin, HIGH);
```

**描述:**

向数字引脚写一个`HIGH`或`LOW`值

如果使用pinMode()将引脚配置为OUTPUT(输出)，则其电压应该被设置为相应的值：`HIGH`为5V(或3.3V，如果是3.3V的板)，`LOW`为0V。

如果该引脚配置为INPUT，则digitalWrite()函数将启用(HIGH)或禁用(LOW)输入引脚上的内部上拉。建议将pinMode()设置为`INPUT_PULLUP`以启用内部上拉电阻。相关的更多信息，请参见“数字引脚”教程。

如果不将pinMode()设置为OUTPUT，而是将LED连接到引脚，则在调用digitalWrite(HIGH)时，LED可能会变暗。如果未明确设置pinMode()，digitalWrite()将启用内部上拉电阻，该电阻用作大限流电阻。


**语法:**

digitalWrite(**pin, value**)

**参数:**

**pin(引脚)**: Arduino的引脚。

**value(值)**: `HIGH` 或 `LOW`.

当ledPin被设置为输出时，HIGH表示向该引脚发送高电平，LED点亮。

```cpp
digitalWrite(ledPin, LOW);
```

当我们将LED设置为输出时，LOW代表向引脚发送低电平，LED熄灭。

```cpp
delay(1000);
```

**描述:**

暂停程序一段指定的时间(以毫秒为单位)。(每秒有1000毫秒。)

**语法:**

delay(**ms**)

**参数:** 

**ms**: 暂停的毫秒数。 
允许的数据类型：unsigned long

将程序延迟1000ms(1s)。

**演示效果和串行输出结果：**

LED模块将1秒亮，1秒灭。

**LED模块亮度调整:**

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/LED-res.jpeg" /></div>


LED模块上有可变电阻，可以用螺丝刀拧动它，使灯光更亮。

- <font size="5;font" color="#314B9F">拆分指南</font>

如果模块从主板上被分离，则需要使用Grove数据线来连接 **Grove LED** 和Seeeduino Lotus 的数字接口 **D4**.






### 2. 按钮

关于按钮我们需要了解按钮的输入是数字信号，并且它只有两个状态，即0或1，因此我们可以基于这两个状态来控制输出。

- **练习:** 使用按钮来控制LED模块的亮与灭



-<font size="5;font" color="#314B9F">涉及组件</font>

    1. Seeeduino Lotus
    2. Grove LED
    3. Grove 按钮
    4. Grove 数据线(仅适用于模块被拆分开的情况)

![](http://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Button.png)



- **硬件连接：**
  - **模块连接**
    	- 默认通过PCB压印孔连接。
  		- 通过USB数据线将Seeeduino连接到计算机。
 
- **硬件分析**:
  - 输入: 按钮
  - 控制: Seeeduino
  - 输出: LED 模块

按钮和LED均使用数字信号，因此应将它们连接到数字接口。



- <font size="5;font" color="#314B9F">程序代码</font>

  - 打开 Arduino IDE.
  - 复制以下代码，单击“编译(✓)”以检查语法错误。如果编译没有报错则可以“上传(→)”代码。

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



-<font size="5;font" color="#314B9F">代码分析</font>


```cpp
pinMode(ledPin, OUTPUT);
```

将LED定义为输出单位。

```cpp
pinMode(buttonPin, INPUT);
```
  
将按钮定义为输入单位。



```cpp
buttonState = digitalRead(buttonPin);
```

**描述:**

从指定的数字引脚读取数值，`HIGH`或`LOW`.

**语法:**

digitalRead(**pin**)

**变量:**

**pin(引脚)**: 你想要读取的Arduino的 `pin`(引脚)。

该功能用于读取数字引脚的状态，即高电平(HIGH)还是低电平(LOW)。 按下按钮时，状态为高电平，否则为低电平。

```cpp
  if (buttonState == HIGH) {
    digitalWrite(ledPin, HIGH);
  } else {
    digitalWrite(ledPin, LOW);
  }
}
```

**描述:**

与最简单的if语句相比，if ... else语句通过允许对多个测试进行分组可以更好地控制代码流。如果if语句中的条件为false，则将执行else子句(如果存在)。else内可以进行另一个if测试，以便可以同时运行多个互斥的测试。

每个测试将继续进行下一个测试，直到遇到结果为true的测试为止。当遇到测试结果为true后，将运行其关联的代码块，然后程序跳至整个if/else构造之后的行。 如果没有测试证明是正确的，则执行默认的else块(如果存在)，并设置默认行为。

注意，else if语法块可以与终止else块一起使用或不一起使用，反之亦然。 一个if ... else函数内允许不限数量的此类else if分支。




**语法:**

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

该语句的用法是：如果括号中的逻辑表达式为true， 执行 **if** 后大括号内的语句，否则，执行 **else** 后大括号内的语句. 如果按钮的状态为高电平，则LED引脚输出高电平并打开LED，否则将关闭LED。

**演示效果和串行输出结果：**

按压按钮会点亮LED模块。

- <font size="5;font" color="#314B9F">拆分指南</font>


如果模块从主板上被分离，则需要使用Grove数据线来连接Grove LED和Seeeduino Lotus的数字接口 **D4**，并将Grove 按钮连接到Seeeduino Lotus的数字接口 **D6**。






### 3. 旋转式电位器

在上一节中我们学习到了按钮只有两种状态，分别对应于0V和5V的ON / OFF状态，但是在实践中，我们经常有满足多种不同状态的需求，而不仅仅是0V和5V。所以，您可以选择使用模拟信号来满足不同的需求！旋转式电位器是使用模拟信号的一个经典示例。

<font size="5;font" color="#314B9F">背景知识</font>


- **什么是模拟信号？**

**模拟信号：** 信号的时间和数值连续变化，并且信号的幅度、频率或相位在任何时候都连续变化，例如当前广播的声音信号或图像信号等。常见的模拟信号有正弦波和三角波等。微控制器的模拟引脚可以将0V至5V映射到0至1023之间的范围，其中1023映射为5V，而512映射为2.5v等。

![Alt text](http://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/analog.png)



- <font size="5;font" color="#314B9F">涉及组件</font>

  1. Seeeduino Lotus
  2. Grove LED
  3. Grove 旋转式电位器
  4. Grove 数据线(仅适用于模块被拆分开的情况)

![](http://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/rotary.png)



- **硬件连接：**
  - **模块连接**
    	- 默认通过PCB压印孔连接。
  		- 通过USB数据线将Seeeduino连接到计算机。

- **硬件分析**:

  - 输入: 旋转式电位器
  - 控制: Seeeduino Lotus
  - 输出: LED 模块

输入是模拟信号，因此连接到模拟信号接口，LED模块连接到数字信号接口。





- <font size="5;font" color="#314B9F">程序代码</font>

  - 打开 Arduino IDE.
  - 复制以下代码，单击“编译(✓)”以检查语法错误。如果编译没有报错则可以“上传(→)”代码。

```Cpp
//Rotary controls LED
int rotaryPin = A0;    // select the input pin for the rotary
int ledPin = 4;      // select the pin for the LED
int rotaryValue = 0;  // variable to store the value coming from the rotary

void setup() {
  // declare the ledPin as an OUTPUT:
  pinMode(ledPin, OUTPUT);
  pinMode(rotaryPin, INPUT);
}

void loop() {
  // read the value from the sensor:
  rotaryValue = analogRead(rotaryPin);
  // turn the ledPin on
  digitalWrite(ledPin, HIGH);
  // stop the program for <sensorValue> milliseconds:
  delay(rotaryValue);
  // turn the ledPin off:
  digitalWrite(ledPin, LOW);
  // stop the program for for <sensorValue> milliseconds:
  delay(rotaryValue);
}
```



- <font size="5;font" color="#314B9F">代码分析</font>


```cpp
int rotaryPin = A0;    // select the input pin for the rotary
int ledPin = 4;      // select the pin for the LED
```
**Description:**

你可能会发现，我们定义旋转引脚和led引脚的方式不同，这是因为旋转电位计产生模拟信号，而LED模块是由数字信号控制的

**定义模拟接口**, 用A + 数字引脚号 (这里的 `A0`).

**定义数字接口**, 用数字引脚号 (这里的 `4`).


```cpp
rotaryValue = analogRead(rotaryPin);
```

**描述:**

从指定的模拟引脚读取数值。Arduino开发板包含一个多通道的10位模数转换器。这意味着它将映射介于0到工作电压(5V或3.3V)之间的输入电压到介于0和1023之间的整数值上。例如，在Arduino UNO上，其读数之间的分辨率为：5伏/1024单位，或每单位0.0049伏(4.9 mV)。


**语法:**

analogRead(**pin**)

**参数:**

**pin(引脚)：** 模拟输入引脚的名字(大多数板上为A0至A5)。

**Returns(返回值)：** 引脚上的模拟读数。尽管它受限于模数转换器的分辨率(10位为0-1023或12位为0-4095)。数据类型：int。

该函数用于读取模拟引脚的值(旋转传感器位置)，取值范围为：0〜1023。

```cpp
delay(rotaryValue);
```

延迟函数，延迟的毫秒数是括号中的值。因为该值是正在读取的旋钮引脚的模拟信号的值，所以延迟时长由旋钮控制。

**演示效果和串行输出结果：**

转动电位计将改变LED闪烁的频率。

- <font size="5;font" color="#314B9F">拆分指南</font>


如果模块从主板上被分离，则需要使用Grove数据线来连接Grove LED和Seeeduino Lotus的数字接口 **D4** ，并将旋转式电位器连接到Seeeduino Lotus的模拟接口 **A0** 。






### 4. 蜂鸣器


<font size="5;font" color="#314B9F">背景知识</font>


- **什么是主动式蜂鸣器和被动式蜂鸣器？**

蜂鸣器有两种类型，一种是主动式，另一种是被动式。有源蜂鸣器和无源蜂鸣器都是用来给电子产品发声的。

**主动式蜂鸣器** 内部有一个振荡源，只要接通电源，蜂鸣器就会发出声音。主动式蜂鸣器广泛应用于电脑、打印机、复印机、报警器、电子玩具、汽车电子、电话、定时器等电子产品的发声装置。

**无源蜂鸣器** 内部没有振荡源，需要用方波和不同的频率来驱动。它的作用就像一个电磁扬声器，变化的输入信号会自动产生声音，而不是音调。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/buzzer-ap.jpg" /></div>

在本套件中，**Grove-Buzzer是一个无源蜂鸣器**，所以需要一个交流信号(AC)来控制它。这就引出了下一个知识点，如何用Arduino产生方波(交流信号)! 一个简单的方法就是使用PWM。

Seeeduino上有六个数字引脚，上面标有“〜”符号，表示它们可以发送PWM信号：3、5、6、9、10、11。 它们被称为PWM引脚。

- **什么是PWM?**

**脉冲宽度调制(PWM)** 是一种通过数字方式获得模拟结果的技术。数字控制用于创建方波，即在开(ON)和关(OFF)之间切换的信号。通过改变信号“ON”和信号“OFF”时间长度的比例，此开关模式可以模拟全开(5伏)和关(0伏)之间的电压。 “接通时间(on time)”的持续时间称为脉冲宽度。要获得变化的模拟值，您可以更改或调制该脉冲宽度。例如，如果用LED足够快地重复这种开关模式，结果就像信号是控制LED亮度的0至5v之间的稳定电压一样。*引用: [Arduino](https://www.arduino.cc/en/tutorial/PWM)*

要在Arduino中产生PWM信号，可以使用`analogWrite()`，与使用`digitalWrite()`产生直流信号不同。

Seeeduino上有六个数字引脚，上面标有“〜”符号，表示它们可以发送PWM信号：3、5、6、9、10、11。 它们被称为PWM引脚。

- <font size="5;font" color="#314B9F">涉及组件</font>

    1. Seeeduino Lotus
    2. Grove 蜂鸣器
    3. Grove 数据线(仅适用于模块被拆分开的情况)

![](http://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Buzzer.png)



- **硬件连接：**
  - **模块连接**
    	- 默认通过PCB压印孔连接。
  		- 通过USB数据线将Seeeduino连接到计算机。




- <font size="5;font" color="#314B9F">程序代码</font>

  - 打开 Arduino IDE.
  - 复制以下代码，单击“编译(✓)”以检查语法错误。如果编译没有报错则可以“上传(→)”代码。

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



- <font size="5;font" color="#314B9F">代码分析</font>


```cpp
analogWrite(BuzzerPin, Value);
```

**描述：**

将模拟值(PWM波)写入引脚。 可用于以不同的亮度点亮LED或以各种速度驱动电动机。在调用analogWrite()函数后,该引脚将生成指定占空比的稳定矩形波，直到同一引脚上下一次对analogWrite()的调用(或对digitalRead() 或digitalWrite()) 为止。

**语法：**

analogWrite(**pin, value**)

**参数：**

**pin(引脚)**: 要写入的Arduino`引脚(pin)`。 允许的数据类型：int。

**数值**: 占空比：介于`0`(始终关闭)和`255`(始终开启)之间。 允许的数据类型：int。

将模拟值(PWM波)写入蜂鸣器。

**演示效果和串行输出结果：**

蜂鸣器会响。

- <font size="5;font" color="#314B9F">拆分指南</font>


如果模块从主板上被分离，则需要使用Grove数据线来连接蜂鸣器和Seeeduino Lotus的数字接口 **D5** 。



-<font size="5;font" color="#314B9F">PWM用法</font>


现在我们已经学会了PWM的使用，除了用PWM控制无源蜂鸣器外，我们还可以用PWM来控制电机的转速和LED灯的亮度等。

如下图所示，使用analogWrite()产生PWM波，占空比越高，LED灯越亮。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/PWM-LED.png"/></div>

然而，Grove Beginner Kit上的LED灯无法直接使用PWM控制，因为LED连接的是D4，而如上文中所述PWM pins 为3,5,6,9,10,11，pin 4并不是PWM引脚。如果您想用PWM来控制LED，则需要将它掰下来，使用Grove线连到带PWM功能的Grove口。

例如，让我们用Grove线将**Grove-LED与D3连接起来**。

!!!Note
      D3也与Grove温湿度传感器相互连接，因此本**例不能与Grove温湿度传感器一起使用**。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/pwmled-connect.png"/></div>

```cpp
int LED = 3; // Cable connection from LED to D3
int Potentiometer = A0;

void setup() {
  pinMode(LED, OUTPUT);
  pinMode(Potentiometer, INPUT);
}

void loop() {
  int potentioValue, Value;
  potentioValue = analogRead(Potentiometer);
  Value = map(potentioValue, 0, 1023, 0, 255); //Mapping potentiometer value to PWM signal value
  analogWrite(LED, Value);
}
```

**编译并上传** 代码，你应该可以使用PWM信号来扭转和调整LED的亮度!

- <font size="5;font" color="#314B9F">代码分析</font>


```cpp
outputValue = map(sensorValue, 0, 1023, 0, 255);
```

**描述:**

将数字从一个范围重新映射到另一个范围。也就是说 **fromLow** 的值将被映射到 **toLow** , **fromHigh** 的值将被映射到 **toHigh** , 中间的值映射到中间的值等。

请勿将值限制在该范围内，因为有时超出范围的值是有意使用的。如果需要限制范围，可以在该函数之前或之后使用“ constrain()”函数。

请注意，任一范围的“下限”可能大于或小于“上限”，因此可以使用`map()`函数来反转数字范围，例如

**y = map(x, 1, 50, 50, 1);**

该函数还可以很好地处理负数，因此对于如下示例也有效，并效果很好。

**y = map(x, 1, 50, 50, -100);**


map()函数使用整数计算，即使数学运算的结果是分数，它也不会生成分数。小数余数将被截断，并且不会四舍五入或取平均值。

**语法:**

map(**value, fromLow, fromHigh, toLow, toHigh**)

**参数:**

**value**: 要映射的数值。

**fromLow**: 该值当前范围的下限。

**fromHigh**: 该值当前范围的上限。

**toLow**: 该值目标范围的下限。

**toHigh**: 该值目标范围的上限。

将光传感器模拟信号(0到1023)映射到LED的亮度值(0到255)。

映射时间值后，保持电位器相等。 Map有五个参数，依次为：映射原始值，原始值的最小值，原始值的最大值，映射后的最小值，映射的最大值。这样，传感器返回的数据可以从其原始值0-1023映射到0-255。

**演示效果和串行输出结果：**

调节电位器来调节LED的亮度。

总而言之，当你要使用PWM功能时，需要选择那些名字前面有"~"符号的引脚。


### 5. 光传感器

光传感器包含一个用于测量光强度的光敏电阻。这个光敏电阻的电阻值随着光强度的增加而减小。输出信号为模拟值，光源越亮，模拟值越大。基于此属性，您可以使用它来控制电灯开关。

在以下各节中，我们将使用串行监视器来观察传感器的结果，因此在此章节将会进行简要介绍！



<font size="5;font" color="#314B9F">背景知识</font>


- **什么是串口监视器(Serial Monitor)？**

串口监视器是在Arduino上观察结果的有用工具，常用于对从传感器结果的打印或进行一般调试。您也可以通过串口监视器将数据发送回控制器以执行某些任务！注意：请确保串口数据传输与代码匹配。

![](http://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Serial.jpg)

您可以通过单击打开串口监视器： **Tools(工具)** -> **Serial Monitor(串口监视器)** .

![](http://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/20200217144001.jpg)



- <font size="5;font" color="#314B9F">涉及组件</font>

  1. Seeeduino Lotus
  2. Grove LED
  3. Grove 光传感器
  4. Grove 数据线(仅适用于模块被拆分开的情况)

![](http://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Light.png)

- **硬件连接：**
  - **模块连接**
    	- 默认通过PCB压印孔连接。
  		- 通过USB数据线将Seeeduino连接到计算机。.


- **硬件分析**:

  - 输入: 光传感器
  - 控制: Seeeduino Lotus
  - 输出: LED 模块





- <font size="5;font" color="#314B9F">程序代码</font>

  - 打开 Arduino IDE.
  - 复制以下代码，单击“编译(✓)”以检查语法错误。如果编译没有报错则可以“上传(→)”代码。


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

您还可以从 **串口监视器** 中查看光强度读数，导航至 **工具** -> **串口监视器** .



- <font size="5;font" color="#314B9F">代码分析</font>


```cpp
Serial.begin(9600);
```

**描述:**

设置以每秒比特数(波特)为单位的串口数据传输的速率。要与串口监视器通信，请确保使用其屏幕右下角菜单中列出的波特率之一。但是，您可以指定其他速率。例如，通过引脚0和1与需要特定波特率的组件进行通信。

可选的第二个参数用于配置数据、奇偶校验和停止位。默认值为8个数据位，无奇偶校验，一个停止位。

计算机上运行的软件与开发板通信，波特率为9600。


**语法:**

Serial.begin(**speed**)

**参数:**

**speed**: 串口通信速度， 例如：`9600`, `115200` 等。

设置串行波特率为9600。

```cpp
Serial.println(sensorValue);
```

**描述:**

将数据作为人类可读的ASCII文本打印到串行端口，后跟回车符 (ASCII 13, or '\r') 和换行符 (ASCII 10, or '\n')。此命令的格式和Serial.print()相同。

**语法:**

Serial.println(**val**) or Serial.println(**val**, **format**)

**参数:** 

**val**: 要打印的值。允许的数据类型:任何数据类型。

**format**: 指定基(对于整数数据类型)或小数位数(对于浮点类型)。

串口打印光传感器的值，在IDE接口中打开 **serial monitor(串口监视器)** ，你就能看到输出传感器的值。


**演示效果和串行输出结果：**

如果光感检测环境为暗的，LED模块将点亮。

- <font size="5;font" color="#314B9F">拆分指南</font>


使用Grove数据线将Grove LED连接到 Seeeduino Lotus的数字信号接口 **D4**,并将Grove光传感器连接到Seeeduino Lotus的模拟信号接口 **A6**.





### 6. 声音传感器

声音传感器可以检测环境的声音强度，并对其输出信号进行仿真。我敢肯定你们所有人都已经接触到声控灯，在进行了前几个章节的学习后，我们已经具备了基本的知识，现在我们可以运用已学知识做出属于我们自己的声控灯。这个实验中我们将运用串行绘图仪将结果可视化。

<font size="5;font" color="#314B9F">背景资料</font>


- **什么是串行绘图仪**

与串口监视器相类似，串行绘图仪允许您将Arduino实时数据传输到计算机并以图形化的形式展现出来。当需要可视化数据时，串行绘图仪非常有用。

![](http://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/SerialPlotter.png)

我们可以通过点击 **Tools(工具)** -> **Serial Plotter(串行绘图仪)** 打开串行绘图仪。

![](http://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/serialplot.jpg)



- **实践:** 发出声音时，LED灯点亮。当没有声音、非常安静时，LED灯会熄灭。

- <font size="5;font" color="#314B9F">涉及组件</font>

  1. Seeeduino Lotus
  2. Grove LED
  3. Grove 声音传感器
  4. Grove 数据线(仅适用于模块被拆分开的情况)


![](http://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Sound.png)



- **硬件连接：**
  - **模块连接**
    	- 默认通过PCB压印孔连接。
  		- 通过USB数据线将Seeeduino连接到计算机。



- <font size="5;font" color="#314B9F">程序代码</font>

  - 打开 Arduino IDE.
  - 复制以下代码，单击“编译(✓)”以检查语法错误。如果编译没有报错则可以“上传(→)”代码。

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
  int soundState = analogRead(soundPin); // Read sound sensor’s value
  Serial.println(soundState);
  // if the sound sensor’s value is greater than 200, the light will be on for 5 seconds.
  //Otherwise, the light will be turned off
  if (soundState > 400) {
    digitalWrite(ledPin, HIGH);
    delay(100);
  }else{
    digitalWrite(ledPin, LOW);
  }
}
```

你也可以从 **串行绘图仪** 看到光强度读数, 导航到 **工具** -> **串行绘图仪** .

**注意:** 你也可以根据周围的光强来调整数值。



- <font size="5;font" color="#314B9F">代码分析</font>


```cpp
Serial.begin(9600);
```

计算机上运行的软件与开发板通信，波特率为9600。

```cpp
Serial.print(" ");
```

此函数用于从串行端口输出数据，输出是双引号中包含的内容。

```cpp
Serial.println( );
```

此声明与上面的声明相似, 除了 **serial.println** 有换行符返回。


```cpp
Serial.println(soundState);
```

串行端口打印声音传感器的值。在IDE接口中打开 **串行监视器** , 你就会看到输出传感器的值。

**演示效果和串行输出结果：**

如果周围的声音足够大，LED模块将点亮。

-<font size="5;font" color="#314B9F">拆分指南</font>


使用Grove数据线将Grove LED连接到Seeeduino Lotus的数字信号接口 **D4** , 将Grove声音传感器连接到Seeeduino Lotus的模拟信号接口 **A2** .





### 7. OLED显示屏

OLED显示屏可用于许多情况，您可以使用它来可视化传感器读数！

<font size="5;font" color="#314B9F">背景资料</font>


- **什么是Arduino库**

就像大多数其他编程平台一样，可以通过使用库来扩展Arduino环境。库提供了用于项目的额外功能，即使用特定的硬件或处理数据。要在项目中使用库，请选择 **Sketch** ->**Include Library**.

![](http://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/zip.jpg)

想要了解更多信息，请访问[如何安装Arduino库](http://wiki.seeedstudio.com/How_to_install_Arduino_Library/).



- <font size="5;font" color="#314B9F">涉及组件</font>

  1. Seeeduino Lotus
  2. OLED显示
  3. Grove 数据线(仅适用于模块被拆分开的情况)


![](http://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/OLED.png)



- **硬件连接：**
  - **模块连接**
    	- 默认通过PCB压印孔连接。
  		- 通过USB数据线将Seeeduino连接到计算机。





- <font size="5;font" color="#314B9F">程序代码</font>

  - 打开 Arduino IDE.
  - 安装 **U8g2 library**: 导航到 **Sketch** -> **Include Library** -> **Manage Libraries...** 在 **Library Manager** 中搜索关键字" **U8g2**" ，确认是 **U8g2 by oliver** , 然后安装。

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/U8g2-lib.png)

  - 拷贝以下代码，单击“编译(✓)”以检查语法错误。如果编译没有报错则可以“上传(→)”代码。

```cpp
#include <U8x8lib.h>

U8X8_SSD1306_128X64_ALT0_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);

void setup(void) {
  u8x8.begin();
  u8x8.setFlipMode(1);
}

void loop(void) {
  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 0);
  u8x8.print("Hello World!");
}
```



- <font size="5;font" color="#314B9F">程序代码</font>

```cpp
#include <>
```

**描述:**

```cpp
#include <U8x8lib.h>
```

`#include` 用于在项目中包含外部库。这使程序员可以访问大量标准C语言库(一组预制函数)，也可以访问专门为Arduino编写的库。

注意 `#include`和 `#define`相似, 没有分号终止符。如果您添加了分号，则编译器将产生错误消息。

```cpp
U8X8_SSD1306_128X64_ALT0_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);
```

声明对象后，即可使用库中的函数。

```cpp
u8x8.begin();
```

**描述:**

Arduino环境的显示器的简化设置过程。有关选择合适的U8g2构造函数的信息，请参见安装指南。

**语法:**

u8x8.begin()

初始化u8g2库。

```cpp
u8x8.setFlipMode(1);
```

**描述:**

某些显示器支持内部帧缓冲区的180度旋转。可以使用此过程控制此硬件功能。重要：更改翻转模式后，请重新绘制完整的显示。最好是先清除显示，然后更改翻转模式，最后重新绘制内容。屏幕上任何现有内容的结果都将不确定。

**语法:**

u8x8.setFlipMode(**mode**)

**参数:**

**mode**: `0` 或 `1`

将显示屏翻转180度。

```cpp
u8x8.setCursor();
```

**描述:**

定义打印函数的光标。打印函数的任何输出都将从该位置开始。

**语法:**

u8x8.setCursor(**x, y**)

**参数:**

**x, y**: 打印函数光标的列/行位置。

设置绘图光标位置。

```cpp
u8x8.setFont()
```

**描述:** 

为字形和字符串绘图功能定义u8x8字体。

**语法:**

u8x8.setFont(**font_8x8**)

设置显示字体。

```cpp
u8x8.print();
```

在OLED上绘制内容。

**演示效果和串行输出结果:**

打印Hello World到OLED显示屏。

**U8g2库使用参考**

如果你想查询更多关于U8g2库的信息，请参考[这里](https://github.com/olikraus/u8g2/wiki/u8g2reference)。

-<font size="5;font" color="#314B9F">拆分指南</font>


使用Grove数据线将OLED连接到Seeeduino Lotus的 **I2C** 接口 (注意: I2C默认地址是 0x78)。






### 8. 温度和湿度传感器

您是否想过周围的温度和湿度？想知道确切的数值吗？是否想根据温度来决定今天穿裙子或外套？让我们自己动手制作一个电子温度计吧！

<font size="5;font" color="#314B9F">背景资料</font>

- **什么是协议信号 (I2C)**

**协议信号:** 我们使用的协议信号是I2C, 这里是I2C的简要介绍。 I2C总线只需要两条线就可以在设备之间传输信息: SDA(串行数据线)和SCL(串行时钟线)。这两条线是双向的I/O线，主要用于启动总线传输数据，并生成时钟来打开传输设备，此时正在寻址的任何设备都将被考虑来源于该设备。总线上的主从、发送方和接收方之间的关系不是恒定的，而是取决于数据传输的方向。如果主机要向从设备发送数据，主机首先寻址从设备，然后主动向从设备发送数据，最后主机终止数据传输。 如果主机要从从设备接收数据，从设备首先由主机寻址。然后主机接收来自从设备的数据，主机终止接收过程。 在这种情况下。主机负责生成定时时钟并终止数据传输。



- **实践:** 让您的OLED显示器显示当前的环境温度和湿度。

- <font size="5;font" color="#314B9F">涉及组件</font>
  1. Seeeduino Lotus
  2. Grove OLED
  3. 温度&湿度传感器
  4. Grove 数据线(仅适用于模块被拆分开的情况)


![](http://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Temp.png)



- **硬件连接：**
  - **模块连接**
    	- 默认通过PCB压印孔连接。
  		- 通过USB数据线将Seeeduino连接到计算机。



- <font size="5;font" color="#314B9F">程序代码</font>
  - 打开 Arduino IDE.
  - 安装 **温度&湿度传感器(DHT11)库文件**: 导航到 **Sketch** -> **Include Library** -> **Manage Libraries...** 在 **Library Manager** 中搜索关键字" **Grove Temperature and Humidity Sensor(DHT11)** " ，然后安装。

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Temp-lib.png)

  - 复制以下代码，单击“编译(✓)”以检查语法错误。如果编译没有报错则可以“上传(→)”代码。

```Cpp
//Temperature and Humidity Sensor
#include "DHT.h"
#include <U8x8lib.h>

#define DHTPIN 3     // what pin we're connected to
#define DHTTYPE DHT11   // DHT 11 
DHT dht(DHTPIN, DHTTYPE);

U8X8_SSD1306_128X64_ALT0_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);

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



- <font size="5;font" color="#314B9F">程序代码</font>

```cpp
float temp, humi;
```

定义变量来存放读数。

```cpp
temp = dht.readTemperature();
humi = dht.readHumidity();
```

**描述:**

用来从传感器中读取温度和湿度的函数。

**语法:**

**dht.readTemperature()** 和 **dht.readHumidity()** 。返回类型: float。

调用这些函数来读取温度和湿度并将他们存放在定义好的变量中。

**演示效果和串行输出结果：**

周围环境的温度和湿度出现在OLED屏幕上。

- <font size="5;font" color="#314B9F">拆分指南</font>

使用Grove数据线将OLED连接到Seeeduino Lotus的 **I2C** 接口 (注意: I2C的默认地址是0x78). 连接Grove温度和湿度传感器到 Seeeduino Lotus的数字信号接口 **D3** 。





### 9. 气压传感器

Grove气压传感器(BMP280)是Bosch BMP280的高精度低功耗数字气压计的分线板。该模块可用于精确测量温度和大气压。当大气压力随高度变化时，它也可以测量某个地方的近似高度。



- <font size="5;font" color="#314B9F">涉及组件</font>
  1. Seeeduino Lotus
  2. 气压传感器
  3. Grove 数据线(仅适用于模块被拆分开的情况)


![](http://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/AirPressure.png)



- **硬件连接：**
  - **模块连接**
    	- 默认通过PCB压印孔连接。
  		- 通过USB数据线将Seeeduino连接到计算机。





- <font size="5;font" color="#314B9F">程序代码</font>
  - 打开 Arduino IDE.
  - 安装 **Grove 气压计传感器库文件**: 导航到 **Sketch** -> **Include Library** -> **Manage Libraries...** 在 **Library Manager** 中搜索关键字 "**Grove BMP280**", 然后安装。
  - 复制以下代码，单击“编译(✓)”以检查语法错误。如果编译没有报错则可以“上传(→)”代码。

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/BMP-lib.png)

  - 在这个程序中，加速度信息通过I2C总线发送到Seeeduino，然后Seeeduino将他们打印到串口监视器。打开  **串口监视器** 来查看结果。

```Cpp5
//Air pressure detection
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

    //get and print temperatures
    Serial.print("Temp: ");
    Serial.print(bmp280.getTemperature());
    Serial.println("C"); // The unit for  Celsius because original arduino don't support speical symbols

    //get and print atmospheric pressure data
    Serial.print("Pressure: ");
    Serial.print(pressure = bmp280.getPressure());
    Serial.println("Pa");

    //get and print altitude data
    Serial.print("Altitude: ");
    Serial.print(bmp280.calcAltitude(pressure));
    Serial.println("m");

    Serial.println("\n");//add a line between output of different times.

    delay(1000);
}
```



- <font size="5;font" color="#314B9F">程序代码</font>

```cpp
#include <Wire.h>
```

**#include** 是一个引入头文件的指令。这里我们使用 `Wire.h` 库, 这个库包含在Arduino IDE中。

```cpp
#include "Seeed_BMP280.h"
```

表示引入当前路径的Seeed_BMP280.h头文件。

```cpp
if (!bmp280.init()) {
    Serial.println("Device not connected or broken!");
}
```

**描述:**

初始化气压传感器。若无法初始化则打印错误。

**语法:**

**bmp280.init()**

如果气压传感器无法正常启动，则将错误输出到串行监视器。

```cpp
Serial.print(bmp280.getTemperature());
```

**描述:**

用来从传感器读取压力读数的函数。

**语法:**

**bmp280.getTemperature()**，返回类型: float

将温度数据打印到串行监视器上。

```cpp
Serial.print(pressure = bmp280.getPressure());
```

**描述:**

用来从传感器读取气压值的函数。

**语法:**

**bmp280.getPressure()**，返回类型: float

打印当前气压值。

```cpp
Serial.print(bmp280.calcAltitude(pressure));
```

**描述:**

取压力值转化为高度。

**语法:**

bmp280.calcAltitude(**float**)，返回类型: float

**参数:**

**float**: 压力值。

打印振幅。

**演示效果和串行输出结果：**

气压读数显示在串口监视器上。

- <font size="5;font" color="#314B9F">拆分指南</font>

使用Grove数据线将气压传感器连接到Seeeduino Lotus的 **I2C** 接口(注意:I2C默认地址是0x77或0x76)。






### 10. 3轴加速度计

这是最后一个传感器，即三轴加速度计。使用此模块，您可以轻松地将运动监控功能添加到设计中。因此，我们可以在运动的基础上进行很多有趣的小实验。



- **实践:** 当检测到运动时，蜂鸣器会发出警报，指示物体正在运动。

- <font size="5;font" color="#314B9F">涉及组件</font>
  1. Seeeduino Lotus
  2. 3轴加速度计 
  3. Grove 数据线(仅适用于模块被拆分开的情况)


![](http://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Gyro.png)



- **硬件连接：**
  - **模块连接**
    	- 默认通过PCB压印孔连接。
  		- 通过USB数据线将Seeeduino连接到计算机。





- <font size="5;font" color="#314B9F">程序代码</font>
  - 打开 Arduino IDE.
  - 从Github下载 [3轴数字加速度计( ±2g to 16g)](https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR)。点击 **Sketch** > **Include library** > **Add .ZIP library**, 将库导入IDE。
  - 复制以下代码，单击“编译(✓)”以检查语法错误。如果编译没有报错则可以“上传(→)”代码。
  - 在此程序中，加速度信息通过I2C总线从传感器发送到Seeeduino，然后Seeeduino将它们打印到串口监视器上。打开 **串口监视器** 来检查结果。

```Cpp
//Gravity Acceleration
#include "LIS3DHTR.h"
#ifdef SOFTWAREWIRE
    #include <SoftwareWire.h>
    SoftwareWire myWire(3, 2);
    LIS3DHTR<SoftwareWire> LIS;       //Software I2C
    #define WIRE myWire
#else
    #include <Wire.h>
    LIS3DHTR<TwoWire> LIS;           //Hardware I2C
    #define WIRE Wire
#endif

void setup() {
    Serial.begin(9600);
    while (!Serial) {};
    LIS.begin(WIRE, 0x19); //IIC init
    delay(100);
    LIS.setOutputDataRate(LIS3DHTR_DATARATE_50HZ);
}
void loop() {
    if (!LIS) {
        Serial.println("LIS3DHTR didn't connect.");
        while (1);
        return;
    }
    //3 axis
    Serial.print("x:"); Serial.print(LIS.getAccelerationX()); Serial.print("  ");
    Serial.print("y:"); Serial.print(LIS.getAccelerationY()); Serial.print("  ");
    Serial.print("z:"); Serial.println(LIS.getAccelerationZ());

    delay(500);
}
```



- <font size="5;font" color="#314B9F">程序代码</font>

```cpp
#include "LIS3DHTR.h"
#ifdef SOFTWAREWIRE
    #include <SoftwareWire.h>
    SoftwareWire myWire(3, 2);
    LIS3DHTR<SoftwareWire> LIS;       //Software I2C
    #define WIRE myWire
#else
    #include <Wire.h>
    LIS3DHTR<TwoWire> LIS;           //Hardware I2C
    #define WIRE Wire
#endif
```

使用软件I2C或硬件I2C来初始化模块。

```cpp
while (!Serial) {};
```

如果不打开串行监视器，代码将在此处停止，因此请打开串行监视器。

```cpp
LIS.begin(WIRE, 0x19);
LIS.setOutputDataRate(LIS3DHTR_DATARATE_50HZ);
```

**描述:** 初始化加速度计。

**语法:** `LIS.begin(Wire, address)`.

**描述:** 设置加速度计输出数据的频率。

**语法:** `LIS.setOutputDataRate(odr_type_t odr)`.

初始化加速度计并将输出频率设置为50Hz。

```cpp
Serial.print("x:"); Serial.print(LIS.getAccelerationX()); Serial.print("  ");
Serial.print("y:"); Serial.print(LIS.getAccelerationY()); Serial.print("  ");
Serial.print("z:"); Serial.println(LIS.getAccelerationZ());
```

**描述:** 

用来从传感器读取x轴数据的函数。

**语法:**

**LIS.getAccelerationX()**. 返回类型: float.

**描述:** 

用来从传感器读取y轴数据的函数。

**语法:**

**LIS.getAccelerationY()**. 返回类型: float.

**描述:** 

用来从传感器读取z轴数据的函数。

**语法:**

**LIS.getAccelerationZ()**. 返回类型: float.

将3轴数据打印到串行监视器上。

- **演示效果和串行输出结果:**

3轴加速器读数显示在串行监视器上。

- <font size="5;font" color="#314B9F">拆分指南</font>

使用Grove数据线将Grove 3轴加速度计连接到Seeeduino Lotus's **I2C** 接口 (注意: I2C 默认地址是 0x19)。






## 项目

### 1. 音乐动态节奏灯

- **项目简介:** 在本实验中，我们将使蜂鸣器播放悦耳的音乐，并且led灯根据音乐的频率和节拍闪烁。



- <font size="5;font" color="#314B9F">涉及组件</font>
  1. Seeeduino Lotus
  2. Grove LED
  3. 蜂鸣器
  4. Grove 数据线(仅适用于模块被拆分开的情况)


![](http://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/project1.png)



- **硬件连接：**
  - **模块连接**
    	- 默认通过PCB压印孔连接。
  		- 通过USB数据线将Seeeduino连接到计算机。






- <font size="5;font" color="#314B9F">程序代码</font>
  - 打开 Arduino IDE.
  - 复制以下代码，单击“编译(✓)”以检查语法错误。如果编译没有报错则可以“上传(→)”代码。

```cpp
//Music Dynamic Rhythm Lamp
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



- <font size="5;font" color="#314B9F">程序代码</font>
  
```cpp
#define NTD
```

D键频率的定义，该频率分为低音，中音和高音。

```cpp
#define WHOLE 1
#define HALF 0.5
#define QUARTER 0.25
#define EIGHTH 0.25
#define SIXTEENTH 0.625
```

注意：节奏分为一拍, 半拍, 1/4 拍, 1/8 拍, 我们指定一拍音符时间为1；半拍为0.5； 1/4拍为0.25； 1/8拍为0.125。


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

分别控制LED点亮和熄灭。

- **演示效果和穿行输出结果:**

蜂鸣器将发出蜂鸣声，而LED模块将以相同的频率闪烁。

- <font size="5;font" color="#314B9F">拆分指南</font>

将Grove LED连接到Seeeduino Lotus的数字信号接口 **D4** , 将蜂鸣器连接到Seeeduino Lotus'的数字信号接口 **D5** .






### 2. 智能声光感应台灯

- **项目简介:** 正如名字所说，这个项目是要制作一个声光控制的智能台灯。我们需要使用LED模块。当然，声音传感器和光传感器也是不可或缺的。通过这个方式，我们就可以实现智能台灯的功能: 当发出声音时，灯会亮起；如果环境变暗，灯泡将自动变亮。



- <font size="5;font" color="#314B9F">涉及组件</font>
  1. Seeeduino Lotus
  2. Grove LED
  3. 光传感器
  4. 声音传感器
  5. Grove数据线(仅适用于模块被拆分开的情况)

![](http://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/project2.png)



- **硬件连接：**
  - **模块连接**
    	- 默认通过PCB压印孔连接。
  		- 通过USB数据线将Seeeduino连接到计算机。





- <font size="5;font" color="#314B9F">程序代码</font>
  - 打开 Arduino IDE.
  - 复制以下代码，单击“编译(✓)”以检查语法错误。如果编译没有报错则可以“上传(→)”代码。

```Cpp
//light Induction Desk Lamp
int soundPin = A2; // Analog sound sensor is to be attached to analog
int lightPin = A6; //Analog light sensor is to be attached to analog
int ledPin = 4; // Digital LED is to be attached to digital

void setup() {
  pinMode(ledPin, OUTPUT);
  pinMode(lightPin, INPUT);
  pinMode(soundPin, INPUT);
}

void loop(){
  int soundState = analogRead(soundPin); // Read sound sensor’s value
  int lightState = analogRead(lightPin); // Read light sensor’s value
  // if the sound sensor's value is greater than 500 or the sound sensor's is less than 200, the light will be on.
  //Otherwise, the light will be turned off
if (soundState > 500 || lightState < 200) {
  digitalWrite(ledPin, HIGH);
  delay(500); //You can add the "//" to remove the delay
}else{
  digitalWrite(ledPin, LOW);
}
}
```



- <font size="5;font" color="#314B9F">程序代码</font>

```cpp
if (soundState > 500 || lightState < 200) {
  ...
}
```

括号里是一个逻辑表达式. **&&** 和 **||** 广泛的用于逻辑表达式中. 通常的用法是 **if (expression 1 || expression 2)** and **if (expression 1 && expression 2)**.

**||** 代表 "**or**", 满足其中一个条件 并且满足if判断的条件则整个表达式就为true。

**&&** 表示 "**and**", 仅当括号中的所有表达式都为true时才执行if{}中的语句。



- **演示效果和串行打印结果：**

如果周围声音足够响亮或光强度较低，则LED模块将会更亮。

- <font size="5;font" color="#314B9F">拆分指南</font>

如果模块从主板上被分离，则需要使用Grove数据线来连接Grove LED和Seeeduino Lotus的数字接口 **D4** ，并将光传感器连接到Seeeduino Lotus的模拟信号接口 **A1** 。最后将声音传感器连接到Seeeduino Lotus的模拟信号接口 **A2** 。






## 制作自己的模块和开发板
在这段学习之后，您已经对Arduino和开源硬件有了系统的了解，那么为什么不继续尝试制作自己的模块或开发板呢？

### EDA

要设计自己的电路板，您将需要设计自己的模块原理图，这需要使用EDA工具。这里推荐一个开源的EDA软件。

- **KiCAD**

[KiCad](https://www.kicad-pcb.org/)是用于电子设计自动化的免费软件套件. 它促进了电子电路原理图的设计及其到PCB设计的转换。它拥有用于原理图捕获和PCB布局设计的集成环境。程序通过输出Gerber格式来处理原理图捕获和PCB布局。 该套件可在Windows、Linux和macOS上运行，且获得了GNU GPL v3的许可。

- **Geppetto**

如果您不想自己设计原理图或布局，但是想将基于Seeed模块的原型转换为集成产品，我们强烈建议您尝试使用Geppetto。

[Geppetto](https://www.seeedstudio.com/geppetto)是目前生产高质量电子产品最简单最划算的方法。 您无需了解电阻器、电容器、电感器、路由路径或任何电子工程的相关知识即可设计自己的模块。 Geppetto简单易用，任何人都可以创建专业的IoT设备。为了使您更方便，Geppeto拥有一个Seeed库，因此您可以轻松设计自己的Grove模块！


### PCB服务

在完成你的设计后，访问[Seeed Fusion PCB Assembly (PCBA) Service](https://www.seeedstudio.com/fusion_pcb.html)来将你的设计转化为有实际功能的设备吧！

![](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/img/Fusion.png)

Seeed Studio拥有自己的[Open Parts Library (OPL)](https://www.seeedstudio.com/opl.html)，这个库是专门为Seeed Fusion PCBA service采购的10,000多个常用组件的集合。 为了加快PCB设计过程，Seeed正在为KiCad和Eagle建立组件库。当所有组件均来自Seeed的PCBA OPL并搭配[Seeed Fusion PCBA service](https://www.seeedstudio.com/fusion_pcb.html) ，整个PCBA的生产时间可以从20个工作日减少到7天。


## 在线原理图


<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/res/Grove-Beginner-Kit-for-Arduino-SCH-PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>




## 相关资料

1. [**Grove极简入门套件Wiki [PDF]**](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/res/Grove-Beginner-Kit-For-Arduino(CN).pdf)

2. [**Grove极简入门套件原理图设计文件**](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/res/Grove-Beginner-Kit-for-Arduino-SCH-PCB.zip)

3. **Github模块库:**
      - [OLED显示](https://github.com/olikraus/U8g2_Arduino)
      - [温度&湿度传感器](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor)
      - [气压传感器](https://github.com/Seeed-Studio/Grove_BMP280)
      - [3轴加速度计](https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR)

4. [**传感器数据手册**](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/res/Grove-beginner-kit-for-arduino-datasheet.zip)

5. [**初始Arduino固件**](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/res/GroveBeginnerKitFirmwareFINAL.zip)

6. [**Grove极简入门套件USB资料(20200401)[7z]**](https://files.seeedstudio.com/wiki/Grove-Beginner-Kit-For-Arduino/res/Grove-Beginner-Kit-For-Arduino-Resources-in-one(20200401).7z)



## 其他学习资料

- [LSTM用于实时物联网数据预测](https://github.com/256ericpan/LSTM_IoT)
- [Grove Beginner Kit 在 Mlxly 平台上使用](https://wiki.seeedstudio.com/cn/Mixly-Grove-Beginner-Kit)

## 技术支持

请您不要犹豫，来我们的[论坛](http://forum.seeedstudio.com/)提出问题吧！