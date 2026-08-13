---
description: Arduino V2 侧边助手基础套件
title: Arduino V2 侧边助手基础套件
keywords:
  - Kit with Courses
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Sidekick_Basic_Kit_for_Arduino_V2
sku: 110060025
last_update:
  date: 2/17/2023
  author: jianjing Huang
createdAt: '2023-02-17'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/cn/Sidekick_Basic_Kit_for_Arduino_V2/
---

<!-- ---
name: Sidekick Basic Kit for Arduino V2
category: Arduino
bzurl: https://www.seeedstudio.com/Sidekick-Basic-Kit-for-Arduino-V2-p-1858.html
oldwikiname:   Sidekick Basic Kit for Arduino V2
prodimagename:  BasicKit.jpg
surveyurl: https://www.research.net/r/Sidekick_Basic_Kit_for_Arduino_V2
sku:  110060025
--- -->
![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/BasicKit.jpg)

Arduino Sidekick 基础套件专为搭配你的 Arduino / Seeeduino / Seeeduino ADK / Maple Lilypad 或任意 MCU 开发板使用而设计。它包含了让初学者把电脑连接到 Arduino 所需的一切。套件中包括许多 DIY 项目中最常用的配件：如面包板、跳线、彩色 LED、电阻、蜂鸣器等。
所有这些元件都配有一个便携收纳盒，方便携带并能最大限度减少杂乱。

<p style={{textAlign:'center'}}><a href="https://www.seeedstudio.com/Sidekick-Basic-Kit-for-Arduino-V2-p-1858.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border={0} /></a></p>

## 套件内容

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_Basic_Kit_for_Arduino_Photo_11.jpg)

| 项目                    | 数量                           |
|-------------------------|--------------------------------|
| 面包板                  | 1                              |
| 绿色 LED                | 5                              |
| 红色 LED                | 5                              |
| 共阳极 RGB LED          | 1                              |
| 陶瓷电容                | 10nF x 10 + 100nF x 10         |
| 铝电解电容              | 100uF x 5                      |
| 电阻                    | 330R x 10 + 1k x 10 + 10k x 10 |
| 倾斜开关                | 1                              |
| 热敏电阻                | 1                              |
| 环境光传感器            | 1                              |
| 二极管                  | 1                              |
| 蜂鸣器                  | 1                              |
| 按钮                    | 1                              |
| 开关                    | 5                              |
| 迷你舵机                | 1                              |
| 带旋钮电位器            | 1                              |
| 面包板跳线              | 5 根长线，20 根短线            |
| 盒子                    | 4                              |

## 基础电子知识回顾

**电流和电压**

电流是导体中电荷流动的速率。电压是加在两点之间、用来驱动电流的电势差（电动势）。电流的单位是安培（A），电压的单位是伏特（V）。

**电阻**

电阻是导体中对电流流动的阻碍。它们用于限制流向某个电子器件（如灯泡）的电流。对电流流动的阻碍大小用欧姆（Ω）表示。电阻分为**固定电阻**和**可变电阻（POT）**。

- **电阻的连接方式**

    电阻可以有两种连接方式：彼此并联或串联。

- **串联电阻**

    当电阻串联连接时，总等效电阻等于所有串联电阻阻值之和。

- **并联电阻**

    并联时，总等效电阻的倒数等于各个电阻倒数之和。

**欧姆定律**

电流、电压和电阻之间的关系由欧姆定律决定——它表述为：“在导体两端的电流（I 安培）与两点间的电势差或电压（V 伏特）成正比，与它们之间的电阻（R 欧姆）成反比。”
即 I = V / R。因此 V = IR 或 R = V / I。下面的欧姆定律三角形可以用来帮助记忆 V、I 和 R 之间的关系。竖线表示乘法运算，横线表示除法运算。

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Ohm-s_law_triange.jpg)

例如：要知道电流 I，就用 V 除以 R。

**面包板**

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Breadboard_.jpg)

**面包板**是一种用于电子电路的原型制作工具。它非常适合在不焊接的情况下连接电子元件并搭建电路。面包板由带有金属接触点的行和列孔组成，用于插入元件。本套 Arduino Sidekick 基础套件中提供的面包板由 **2 X 30 个五孔**列和 **4 X 25 孔**行组成。这些孔在内部的连接方式如下图所示。

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Arduino_Sidekick_Breadboard_Internal_Connections.jpg)

**固定电阻**

基础套件中提供的电阻为碳膜固定电阻。电阻值通过色环标记。你可以通过电阻色环对照表来获取电阻值。

- _第一道色环_ 表示电阻值的**第一位数字**。

- _第二道色环_ 表示**第二位数字**。

- _第三道色环_ 表示电阻的**倍率**。

- _第四道色环_ 表示**误差值**。

**电位器（POT）**

POT 是一种可变电阻，其阻值可以通过旋转旋钮来改变。它有三个引脚——电阻两端的两个引脚连接到由电阻材料制成的导体两端，中间引脚连接到在电阻材料上移动的滑片。电阻值会随着旋钮位置成比例变化。

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_POT.png)

**热敏电阻**

热敏电阻是一种特殊电阻，其阻值会随周围温度变化而改变。它们为检测温度差提供了一种非常实用、方便的方式。

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_Thermistor.JPG)

**光传感器**

光传感器用于检测环境光强度，并根据接收到的光量输出相应变化的信号。它可用于光线检测和与亮度相关的项目。
与传统光敏电阻不同，该传感器是一种有极性的半导体器件。在搭建电路时，请确保传感器按正确极性连接。

**发光二极管**

LED 在正向偏置时会发光。它们封装在透明外壳中，具有红、绿、蓝等多种颜色。LED 由砷化镓磷材料制成，通过改变砷和磷的比例可以得到不同颜色。单色 LED 有两个引脚：阳极（+）和阴极（-）。三色 LED 有 4 个引脚——一个阳极和分别对应三种颜色的 3 个阴极。LED 可用于显示板等场合。

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_RGB_LED_.JPG)

**开关**

开关用于接通或断开电路。本基础套件中提供了两种类型的开关——按键开关和滑动开关。

- **按键开关**

    只要你按下按键开关，电路就会保持接通。

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_Push_Button_Switch_.JPG)

- **滑动开关**

    滑动开关是一个具有两个位置的简单开关。通过将其拨到合适的位置，可以用来接通或断开电路。

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_Slide_Switch_.JPG)

- **倾斜开关**

    倾斜开关有两个端子，与电路相连，当它_水平倾斜_时_闭合_电路，而当_垂直倾斜_时_断开_电路。

**电容**

电容用于存储电荷。它们分为两种不同类型：电解电容和陶瓷电容。电容的单位是微法（uF）。

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_Capacitor.JPG)

- **电容的连接方式**

    电容在电路中可以按如下两种方式连接。

- **串联电容**

    当两个或多个电容串联连接时，总等效电容的倒数等于各个电容值倒数之和。

- **并联电容**

    当两个或多个电容并联连接时，总等效电容等于各个电容值之和。

- **电解电容**

    电解电容通常体积较小而电容量较大。它们分为有极性和无极性电解电容。
    铝、钽、钒和铋等金属被用来制作阳极和阴极箔片。

- **陶瓷电容**

    陶瓷电容使用陶瓷作为介质，两侧贴附薄金属膜作为电极。在圆片型电容中，银层固定在陶瓷两面以形成导电极板。圆片电容只用于较小电容量的场合。

**蜂鸣器**

蜂鸣器是一种音频信号装置，可以是机械式、电机式或压电式。它通过内部材料的振荡产生各种音频信号，常用于报警器和定时器。

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_Buzzer.png)

将长引脚连接到正电源，将短引脚连接到地。

蜂鸣器可以连接到数字输出，当输出为高电平时会发出声音。或者，它也可以连接到模拟脉宽调制输出，以产生各种音调和效果。

**二极管**

二极管是一种只在一个方向导电的半导体材料。只有当电源电压大于_势垒电位_时才开始导通。在正向偏置条件下，它表现为闭合开关，而在反向偏置时则表现为断开开关。二极管根据半导体材料进行分类，并可用于制造诸如 PN 结二极管、齐纳二极管、发光二极管等器件。

- **二极管的偏置**

    对二极管施加电压称为对二极管进行偏置。当在端子两端施加**正电源**电压时，二极管**正向偏置**，并在_硅二极管为 0.7v_、_锗二极管为 0.3v_以上开始导通。当在二极管端子两端施加**负电压**时，称其为**_反向偏置_**。当反向偏置电压超过击穿电压时，二极管会损坏_。_

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_Diode.JPG)

**迷你舵机**

舵机是带有齿轮和反馈系统的直流电机。它们用于机器人的驱动机构。

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Mini_Servo_Photo.jpg)

## 课程

**1. Hello World!：闪烁的 LED**

- **硬件**
  - 按如下所示将一个 LED 连接到数字引脚 8。330 欧姆电阻用于限制流向 LED 的电流。
![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Arduino_Sidekick_1LED_Blink.jpg)

- **软件**

  - 编译并上传以下示例程序：

```cpp
//Blink a LED connected to Digital Pin 8 via a 330 Ohm resitors.

void setup()   {
    pinMode(8, OUTPUT);       // Initialize Arduino Digital Pin 8 as output
}


void loop()
{
    digitalWrite(8, HIGH);   // Switch On LED
    delay(500);              // Wait for half a second
    digitalWrite(8, LOW);    // Switch Off LED
    delay(500);              // Wait for half a second
}
```

**2. 跑马灯显示**

- **硬件**

  - 将 3 个 LED 分别通过一个 330 欧姆电阻连接到数字引脚 9、10 和 11。
![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Arduino_Sidekick_3LEDs_Display.jpg)

- **软件**

  - 编译并上传以下示例程序：

```cpp
//Running LED display: Three LEDs connected to Digital Pin 9, 10 and 11.

void setup()
{
    pinMode(9, OUTPUT);        // Initialize Arduino Digital Pins 9 as output
    pinMode(10, OUTPUT);       // Initialize Arduino Digital Pins 10 as output
    pinMode(11, OUTPUT);       // Initialize Arduino Digital Pins 11 as output
}


void loop()
{

    digitalWrite(9, LOW);
    digitalWrite(10, LOW);
    digitalWrite(11, HIGH);
    delay(250);              // Wait for quarter of a second
    digitalWrite(9, LOW);
    digitalWrite(10, HIGH);
    digitalWrite(11, LOW);
    delay(250);              // Wait for quarter of a second
    digitalWrite(9, HIGH);
    digitalWrite(10, LOW);
    digitalWrite(11, LOW);
    delay(250);              // Wait for quarter of a second

}
```

**3. 与 Arduino 对话：连接按键开关**

- **硬件**

  - 按如下所示将一个 LED 连接到数字引脚 8。330 欧姆电阻用于限制流向 LED 的电流。

  - 将一个按键开关连接到数字引脚 12，另一个端子通过一个 10K 电阻连接到 GND。

  - 将按键的另一端连接到 +5V。

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Arduino_Sidekick_Pushbutton_LED.jpg)

- **软件**

- 编译并上传以下示例程序：

```cpp
//Pushbutton switch demo: LED is connected to digital pin 8 and Pushbutton is connected to digital pin 12.
//The LED glows when the button is pressed.

char inputButtonState;

void setup()
{
    pinMode(8, OUTPUT);        // Initialize Arduino Digital Pins 8 as output for connecting LED
    pinMode(12,INPUT);         // Initialize Arduino Digital Pins 12 as input for connecting Pushbutton
}


void loop()
{
    inputButtonState = digitalRead(12); //Read the Pushbutton state.

    if (inputButtonState == HIGH)
    {
        digitalWrite(8, HIGH);  //Switch on LED
    }
    else
    {
        digitalWrite(8, LOW);   //Switch off LED
    }

}
```

- 上面的示例确实演示了如何向 Arduino 发送信号。实际上，你可以在没有 Arduino 的情况下实现同样的目的。只需按下按钮闭合电路，然后，我们按如下方式翻转 HIGH/LOW 的取值：

```cpp
void loop()
{
    inputButtonState = digitalRead(12); //Read the Pushbutton state.

    if (inputButtonState == HIGH)
    {
        digitalWrite(8, LOW);  //Switch on LED
    }
    else
    {
        digitalWrite(8, HIGH);   //Switch off LED
    }
```

- 现在 LED 在电路断开时点亮，在电路闭合时熄灭。

**4 模拟：电位器（POT）**

- **硬件**

  - 通过一个 220 欧姆电阻将 LED 的阳极连接到 **PWM** 引脚。

  - 将 LED 的阴极连接到 GND 引脚。

  - 将电位器安装在面包板上。

  - 将电位器右脚连接到 +5v。

  - 将电位器中间脚连接到任意一个模拟输入引脚（0-5）。

  - 将电位器左脚连接到地端子。
![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Arduino_Sidekick_potled1.jpg)

- **软件**

  - 将 LED 阳极连接到数字引脚 5（而不是 5V）。
  - 编译并上传以下示例程序：

```cpp
//Varying the brightness of the LED using a Pot
int value=0;
int mval;
void setup()
{
    pinMode(5, OUTPUT);
}
void loop()
{
    value=analogRead(A1); //read analog value from input A1
    // PWM output given to the LED
    mval = map(value, 0, 1023, 0, 100);
    analogWrite(5,mval);

}
```

**5. 桌上的彩虹：三色 LED**

- **硬件**

    基本套件中提供的 RGB LED 是共阳极类型。最长的引脚是阳极。其余三个引脚分别是红、绿和蓝的阴极。

  - 将 RGB LED 的三个阴极分别通过一个 330 欧姆电阻连接到数字引脚 9、10 和 11。
  - 将阳极连接到 +5v
![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Arduino_Sidekick_RGB_LED_Display.jpg)

**软件**

- 编译并上传以下示例程序：

```cpp
void setup()  {

}

void loop()  {


    for(int b = 0 ; b <= 255; b=b+5)
    {
        for(int g = 0 ; g <= 255; g=g+5)
        {
            for(int r= 0 ; r <= 255; r=r+5)
            {
                analogWrite(9, b);
                analogWrite(10, g);
                analogWrite(11, r);
                delay(10);

            }
        }
    }

}
```

**6. 音乐**

- **硬件**

  - 将蜂鸣器阳极连接到数字引脚 11。

  - 将蜂鸣器负极连接到 GND
![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Arduino_Sidekick_Music.jpg)

- **软件**

  - 编译并上传以下示例程序：

```cpp
#define NOTE_D0 98
#define NOTE_D1 294
#define NOTE_D2 330
#define NOTE_D3 350
#define NOTE_D4 393
#define NOTE_D5 441
#define NOTE_D6 495
#define NOTE_D7 556
#define NOTE_DL1 147
#define NOTE_DL2 165
#define NOTE_DL3 175
#define NOTE_DL4 196
#define NOTE_DL5 221
#define NOTE_DL6 248
#define NOTE_DL7 278
#define NOTE_DH1 589
#define NOTE_DH2 661
#define NOTE_DH3 700
#define NOTE_DH4 786
#define NOTE_DH5 882
#define NOTE_DH6 990
#define NOTE_DH7 112

#define WHOLE 1
#define HALF 0.5
#define QUARTER 0.25
#define EIGHTH 0.125
#define SIXTEENTH 0.625

// notes in the melody:
int tune[] =
{
    NOTE_D0,NOTE_D1,NOTE_D2,NOTE_D3,NOTE_D4,NOTE_D5,NOTE_D6,NOTE_D7,
    NOTE_DL1,NOTE_DL2,NOTE_DL3,NOTE_DL4,NOTE_DL5,NOTE_DL6,NOTE_DL7,
    NOTE_DH1,NOTE_DH2,NOTE_DH3,NOTE_DH4,NOTE_DH5,NOTE_DH6,NOTE_DH7,
};
/* note durations: 1 = one note*/

float duration[]=
{1,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,1,1,1,1,1,1,1,};
int length;
int tonePin=11;                // buzzer pin
void setup()
{ Serial.begin(9600);
    pinMode(tonePin,OUTPUT);   //  initialize the digital pin as an output
    length = sizeof(tune)/sizeof(tune[0]);
}
void loop()
{
    for(int x=1;x<length;x++)
    {tone(tonePin,tune[x]);
        delay(400*duration[(x%100)]);    // to distinguish the notes, set a minimum time between them.

        noTone(tonePin); // stop the tone playing:
    }
}
```

**7. 迷你舵机**

- **硬件**

  - 将舵机电机的红色导线连接到 +5v 电源。
  - 将舵机的黑色导线连接到地。

  - 将舵机的黄色导线连接到 Arduino 中任意一个 PWM 引脚。

  - 将电位器右脚连接到 +5v。

  - 将电位器中间脚连接到任意一个模拟输入引脚（0-5）。

  - 将电位器左脚连接到地端子。
![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Arduino_Sidekick_Mini_Servo.jpg)

- **软件**

  - 编译并上传以下示例程序：

```
// Controlling a servo position using a potentiometer (variable resistor)
// by Michal Rinott <http://people.interaction-ivrea.it/m.rinott>

#include <Servo.h>

Servo myservo;  // create servo object to control a servo

int potpin = 1;  // analog pin used to connect the potentiometer
int val;    // variable to read the value from the analog pin

void setup()
{
    myservo.attach(5);  // attaches the servo on pin 5 to the servo object
    Serial.begin(19200); // some servos doesn't work without Serial
}

void loop()
{
    val = analogRead(potpin);            // reads the value of the potentiometer (value between 0 and 1023)
    val = map(val, 0, 1023, 0, 179);     // scale it to use it with the servo (value between 0 and 180)
    myservo.write(val);                  // sets the servo position according to the scaled value
    delay(15);                           // waits for the servo to get there
}
```

## 功能

- 这里配有免焊面包板，因此无需购买电烙铁或学习如何焊接。

- 有大量长而柔软、两端带有硬质接头的跳线。这些跳线比过去那种固定长度的实心导线跳线要好得多。

- 有足够多的 LED 和电阻可用于你的第一个项目，其中包括一个 RGB LED，它是一个封装内含三种原色 LED 的单颗 LED。通过调节不同原色 LED 的亮度，颜色会混合在一起，产生彩虹中的所有颜色。
- 甚至还有一张教学用的操作卡片，用来学习如何读取电阻值。
- 倾斜开关是一个非常简单的器件，内部有一个小金属球。如果器件向一侧倾斜，金属球就会接触到电接点。这个传感器适用于各种项目，比如 DIY 防盗报警器。
- 热敏电阻在你想要检测温度的项目中非常有用。
- 光敏电阻可以检测光线，并且可以配合灯泡和阳光使用。光敏电阻通常用于检测何时变暗，并在夜间打开灯光。
- 套件中的蜂鸣器特别适合用来播放马里奥兄弟主题曲。
- 套件中有一个迷你舵机。你可以用它来打开和关闭门闩、灯光开关或阀门。你甚至可以用它制作一个迷你投石机。
- 电位器是一个非常好的输入设备。你可以用它来控制舵机臂的角度或 LED 的亮度。

## 资源

- [Jeremy Blum 的 Arduino 视频教程系列](https://www.youtube.com/playlist?list=PLA567CE235D39FA84)

## 项目

**佐治亚理工 TI LaunchPad 入门工作坊 2015**：使用 TI 微控制器尝试一些基础的面包板电路

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/launchpad/gtech2015-aa131c/embed' width='350'></iframe>

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，以确保您在使用我们产品时的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
