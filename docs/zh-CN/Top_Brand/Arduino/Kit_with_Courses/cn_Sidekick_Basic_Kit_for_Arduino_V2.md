---
description: Arduino V2 Sidekick 基础套件
title: Arduino V2 Sidekick 基础套件
keywords:
- Kit with Courses
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Sidekick_Basic_Kit_for_Arduino_V2
last_update:
  date: 2/17/2023
  author: jianjing Huang
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

Arduino Sidekick 基础套件专为与您的 Arduino / Seeeduino / Seeeduino ADK / Maple Lilypad 或任何 MCU 开发板配合使用而设计。它包含了初次使用者将计算机连接到 Arduino 所需的一切。它包括许多最受欢迎的 DIY 项目配件：如面包板、跳线、彩色 LED、电阻器、蜂鸣器等。
所有这些都装在自己的便携盒子里，便于运输且整洁有序。

<p style={{textAlign:'center'}}><a href="https://www.seeedstudio.com/Sidekick-Basic-Kit-for-Arduino-V2-p-1858.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border={0} /></a></p>

## 套件内容

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_Basic_Kit_for_Arduino_Photo_11.jpg)

| 物品                    | 数量                           |
|-------------------------|--------------------------------|
| 面包板                  | 1                              |
| 绿色 LED                | 5                              |
| 红色 LED                | 5                              |
| RGB 共阳极 LED          | 1                              |
| 陶瓷电容器              | 10nF x 10 + 100nF x 10         |
| 铝电解电容器            | 100uF x 5                      |
| 电阻器                  | 330R x 10 + 1k x 10 + 10k x 10 |
| 倾斜开关                | 1                              |
| 热敏电阻                | 1                              |
| 光敏电阻                | 1                              |
| 二极管                  | 1                              |
| 蜂鸣器                  | 1                              |
| 按钮                    | 1                              |
| 开关                    | 5                              |
| 迷你舵机                | 1                              |
| 带旋钮的电位器          | 1                              |
| 面包板跳线              | 5根长线，20根短线               |
| 盒子                    | 4                              |

## 基础电子学复习

**电流和电压**

电流是导体中流动电荷的速率。电压是施加在两点之间以传导电流的电位差（电驱动力）。电流用安培（A）表示，电压用伏特（V）表示。

**电阻器**

电阻器是导体中流动电流的阻碍。它们用于限制流向电子设备（如灯泡）的电流。对流动电流的阻抗用欧姆（Ω）表示。它们分为**固定电阻器**和**可变电阻器（电位器）**。

- **连接电阻器**

    电阻器可以用两种不同的方式连接：彼此并联或串联。

- **串联电阻器**

    当电阻器串联连接时，总等效电阻将等于串联中所有电阻器值的总和。

- **并联电阻器**

    在并联中，总等效电阻的倒数等于每个电阻器倒数的总和。

**欧姆定律**

电流、电压和电阻之间的关系由欧姆定律支配 - 该定律规定"两点之间通过导体的电流（I 安培）与两点间的电位差或电压（V 伏特）成正比，与它们之间的电阻（R 欧姆）成反比"
即 I = V / R。因此 V = IR 或 R = V / I。以下欧姆定律三角形可用于记住 V、I 和 R 之间的关系。垂直线表示乘法运算，水平线表示除法运算。

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Ohm-s_law_triange.jpg)

例如：因此要知道电流 I，我们用 V 除以 R。

**面包板**

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Breadboard_.jpg)

**面包板**是电子电路的原型制作设备。它对于连接电子元件和制作电路而无需焊接非常有用。面包板由带有金属触点的行列孔组成，用于插入元件。Arduino Sidekick 基础套件提供的面包板排列为**2 X 30 个五孔**列和**4 X 二十五孔**行。这些孔在内部以如下图所示的方式连接。

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Arduino_Sidekick_Breadboard_Internal_Connections.jpg)

**固定电阻器**

基础套件提供的电阻器由碳制成，属于固定值类型。电阻值由彩色条带标记。您可以从电阻器色环代码表中获得数值。

- _第一条带_表示电阻值的**第一位数字**。

- _第二条带_表示**第二位数字**。

- _第三条带_表示电阻器的**倍数**值。

- _第四条带_表示**容差值**。

**电位器（POT）**

POT是一个可变电阻器，其电阻值可以通过旋转旋钮来改变。它有三个端子——电阻器两侧的端子连接到由电阻材料制成的导体两端。中间端子连接到一个在电阻材料上移动的滑块。电阻值的变化与旋钮位置成正比。

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_POT.png)

**热敏电阻**

热敏电阻是特殊的电阻器，其电阻值会随着周围温度的变化而改变。它们提供了非常有用和方便的方式来感测温度差异。

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_Thermistor.JPG)

**光敏电阻 (LDR)**

LDR会在照射到它们上面的光强度发生变化时改变电阻值。它们也被称为光电池。当没有光照射时，它提供最大电阻，当暴露在强光下时，它提供最小电阻。它由光敏材料如硫化镉制成，可以连接到电路中。它可以用作光感测元件。

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_LDR.JPG)

**发光二极管**

LED在正向偏置时会发光。它们被封装在透明外壳中，有各种颜色，如红色、绿色和蓝色。LED由砷化镓磷制成，通过改变砷和磷的比例，可以获得不同的颜色。单色LED有两个引脚：阳极（+）和阴极（-）。三色LED有4个引脚——一个阳极和每种颜色各有3个阴极。LED可以用于显示板。

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_RGB_LED_.JPG)

**开关**

开关用于闭合或断开电路。基础套件提供的开关有两种类型——按钮开关和滑动开关。

- **按钮开关**

    只要你按下按钮开关，电路就会闭合。

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_Push_Button_Switch_.JPG)

- **滑动开关**

    滑动开关是一个简单的两位置开关。通过将其设置到适当位置，可以用来断开或闭合电路。

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_Slide_Switch_.JPG)

- **倾斜开关**

    倾斜开关包含两个连接到电路的端子，当它水平倾斜时闭合电路，而当垂直倾斜时断开电路。

**电容器**

电容器用于储存电荷。它们分为两种不同类型：电解电容器和陶瓷片电容器。电容器以微法拉（uF）为单位表示。

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_Capacitor.JPG)

- **连接电容器**

    电容器可以在电路中以两种排列方式连接，如下所示。

- **串联电容器**

    当两个或多个电容器串联连接时，总等效电容等于各个电容值倒数的和。

- **并联电容器**

    当两个或多个电容器并联连接时，总等效电容等于各个电容的和。

- **电解电容器**

    电解电容器通常体积小而电容量大。它们分为有极性和无极性电解电容器。
    铝、钽、钒和铋等金属用于形成阳极和阴极箔。

- **陶瓷片电容器**

    陶瓷电容器使用陶瓷介电质，薄金属膜作为电极粘合到陶瓷上。在片式类型中，电容器的银固定在陶瓷的两侧形成导体板。片式电容器仅用于小电容值。

**蜂鸣器**

蜂鸣器是一种音频信号设备，可以是机械式、机电式或压电式。它根据其中使用材料的振荡产生各种音频信号。它们通常用于警报器和定时器。

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_Buzzer.png)

将长引脚连接到正电压，短引脚连接到地。

蜂鸣器可以连接到数字输出，当输出为高电平时会发出音调。或者，它可以连接到模拟脉宽调制输出以产生各种音调和效果。

**二极管**

二极管是一种只能单向导电的半导体材料。只有当供电电压大于势垒电位时，它才开始导电。在正向偏置条件下，它像闭合开关一样工作，当反向偏置时，它像开路开关一样工作。二极管根据半导体材料分类，可用于制造，如PN结二极管、齐纳二极管、发光二极管等。

- **二极管偏置**

    对二极管施加电压称为二极管偏置。当在端子两端施加正供电电压时，二极管正向偏置，硅二极管在0.7v以上开始导电，锗二极管在0.3v以上开始导电。当在二极管端子两端施加负电压时，称为反向偏置。当反向偏置电压超过击穿电压时，二极管会损坏。

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Sidekick_Diode.JPG)

**微型舵机**

舵机是带有齿轮传动和反馈系统的直流电机。它们用于机器人的驱动机构。

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Mini_Servo_Photo.jpg)

## 课程

**1. Hello World! : 闪烁LED**

- **硬件**
  - 将LED连接到数字引脚8，如下图所示。330欧姆电阻限制流向LED的电流。
![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Arduino_Sidekick_1LED_Blink.jpg)

- **软件**

  - 编译并上传以下代码：

```cpp
//通过330欧姆电阻使连接到数字引脚8的LED闪烁。

void setup()   {
    pinMode(8, OUTPUT);       // 将Arduino数字引脚8初始化为输出
}


void loop()
{
    digitalWrite(8, HIGH);   // 打开LED
    delay(500);              // 等待半秒
    digitalWrite(8, LOW);    // 关闭LED
    delay(500);              // 等待半秒
}
```

**2. 流水灯显示**

- **硬件**

  - 将3个LED分别通过330欧姆电阻连接到数字引脚9、10和11。
![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Arduino_Sidekick_3LEDs_Display.jpg)

- **软件**

  - 编译并上传以下代码：

```cpp
//流水灯显示：三个LED连接到数字引脚9、10和11。

void setup()
{
    pinMode(9, OUTPUT);        // 将Arduino数字引脚9初始化为输出
    pinMode(10, OUTPUT);       // 将Arduino数字引脚10初始化为输出
    pinMode(11, OUTPUT);       // 将Arduino数字引脚11初始化为输出
}


void loop()
{

    digitalWrite(9, LOW);
    digitalWrite(10, LOW);
    digitalWrite(11, HIGH);
    delay(250);              // 等待四分之一秒
    digitalWrite(9, LOW);
    digitalWrite(10, HIGH);
    digitalWrite(11, LOW);
    delay(250);              // 等待四分之一秒
    digitalWrite(9, HIGH);
    digitalWrite(10, LOW);
    digitalWrite(11, LOW);
    delay(250);              // 等待四分之一秒

}
```

**3. 与Arduino对话：连接按钮开关**

- **硬件**

  - 将LED连接到数字引脚8，如下图所示。330欧姆电阻限制流向LED的电流。

  - 将按钮开关的一端连接到数字引脚12，另一端通过10K电阻连接到GND。

  - 将按钮的另一端连接到+5V。

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Arduino_Sidekick_Pushbutton_LED.jpg)

- **软件**

- 编译并上传以下代码：

```cpp
//按钮开关演示：LED连接到数字引脚8，按钮连接到数字引脚12。
//按下按钮时LED点亮。

char inputButtonState;

void setup()
{
    pinMode(8, OUTPUT);        // 将Arduino数字引脚8初始化为输出，用于连接LED
    pinMode(12,INPUT);         // 将Arduino数字引脚12初始化为输入，用于连接按钮
}


void loop()
{
    inputButtonState = digitalRead(12); //读取按钮状态。

    if (inputButtonState == HIGH)
    {
        digitalWrite(8, HIGH);  //打开LED
    }
    else
    {
        digitalWrite(8, LOW);   //关闭LED
    }

}
```

- 上述代码确实演示了如何向Arduino发送信号。实际上，你可以在没有Arduino的情况下实现相同的目标。只需按下按钮闭合电路，然后，让我们翻转HIGH/LOW值，如下所示：

```cpp
void loop()
{
    inputButtonState = digitalRead(12); //读取按钮状态。

    if (inputButtonState == HIGH)
    {
        digitalWrite(8, LOW);  //打开LED
    }
    else
    {
        digitalWrite(8, HIGH);   //关闭LED
    }
```

- LED现在在电路断开时点亮，在电路闭合时关闭。

**4 模拟：电位器**

- **硬件**

  - 将LED的阳极通过220欧姆电阻连接到**PWM**引脚。

  - 将LED的阴极连接到GND引脚。

  - 将电位器安装在面包板上。

  - 将电位器的右脚连接到+5v。

  - 将电位器的中间脚连接到任意一个模拟输入引脚(0-5)。

  - 将电位器的左脚连接到接地端。
![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Arduino_Sidekick_potled1.jpg)

- **软件**

  - 将LED阳极连接到数字引脚5（而不是5V）。
  - 编译并上传以下代码：

```cpp
//使用电位器改变LED的亮度
int value=0;
int mval;
void setup()
{
    pinMode(5, OUTPUT);
}
void loop()
{
    value=analogRead(A1); //从输入A1读取模拟值
    // 给LED输出PWM信号
    mval = map(value, 0, 1023, 0, 100);
    analogWrite(5,mval);

}
```

**5. 桌面彩虹：三色LED**

- **硬件**

    基础套件提供的RGB LED是共阳极类型。最长的引脚是阳极。其他三个引脚分别是红、绿、蓝的阴极。

  - 将RGB LED的阴极分别通过330欧姆电阻连接到数字引脚9、10和11。
  - 将阳极连接到+5v
![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Arduino_Sidekick_RGB_LED_Display.jpg)

**软件**

- 编译并上传以下代码：

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

  - 将蜂鸣器阳极连接到数字引脚11。

  - 将蜂鸣器负极连接到GND
![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Arduino_Sidekick_Music.jpg)

- **软件**

  - 编译并上传以下代码：

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

// 旋律中的音符：
int tune[] =
{
    NOTE_D0,NOTE_D1,NOTE_D2,NOTE_D3,NOTE_D4,NOTE_D5,NOTE_D6,NOTE_D7,
    NOTE_DL1,NOTE_DL2,NOTE_DL3,NOTE_DL4,NOTE_DL5,NOTE_DL6,NOTE_DL7,
    NOTE_DH1,NOTE_DH2,NOTE_DH3,NOTE_DH4,NOTE_DH5,NOTE_DH6,NOTE_DH7,
};
/* 音符持续时间：1 = 一个音符*/

float duration[]=
{1,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,1,1,1,1,1,1,1,};
int length;
int tonePin=11;                // 蜂鸣器引脚
void setup()
{ Serial.begin(9600);
    pinMode(tonePin,OUTPUT);   //  将数字引脚初始化为输出
    length = sizeof(tune)/sizeof(tune[0]);
}
void loop()
{
    for(int x=1;x<length;x++)
    {tone(tonePin,tune[x]);
        delay(400*duration[(x%100)]);    // 为了区分音符，在它们之间设置最小时间间隔。

        noTone(tonePin); // 停止播放音调：
    }
}
```

**7. 迷你舵机**

- **硬件**

  - 将舵机的红色线连接到+5v电源。
  - 将舵机的黑色线连接到地线。

  - 将舵机的黄色线连接到Arduino的任意PWM引脚。

  - 将电位器的右脚连接到+5v。

  - 将电位器的中间脚连接到任意模拟输入引脚(0-5)。

  - 将电位器的左脚连接到地线端子。
![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_Arduino_V2/img/Arduino_Sidekick_Mini_Servo.jpg)

- **软件**

  - 编译并上传以下代码：

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

- 有一个免焊面包板，因此无需购买烙铁或学习如何焊接。

- 有大量的跳线，这些跳线长而灵活，具有坚硬的端头。这些跳线比过去固定长度的实心跳线要好得多。

- 有大量的LED和电阻用于您的第一个项目，包括一个RGB LED，它是一个单一的LED封装，内部有三个原色LED。通过调整不同原色LED的强度，颜色会混合在一起，产生彩虹的所有颜色。
- 甚至还有一张教育性的说明卡来读取电阻值。
- 倾斜开关是一个非常简单的设备，内部有一个小金属球。如果设备向一侧倾斜，金属球会接触电气触点。这个传感器对各种项目都很有用，比如DIY防盗报警器。
- 热敏电阻对于需要检测温度的项目很有用。
- 光敏电阻可以检测光线，它可以与灯泡和阳光一起工作。光敏电阻通常用于检测何时天黑并在夜间开灯。
- 套件中的蜂鸣器特别适合播放超级马里奥兄弟主题曲。
- 有一个迷你舵机。您可以用它来打开和关闭门栓、电灯开关或阀门。您甚至可以用它来制作一个迷你弹射器。
- 电位器是一个很好的输入设备。您可以用它来控制舵机臂的角度或LED的亮度。

## 资源

- [Jeremy Blum的Arduino视频教程系列](https://www.youtube.com/playlist?list=PLA567CE235D39FA84)

## 项目

**Georgia Tech Getting Started with TI LaunchPad Workshop 2015**：使用 TI 微控制器尝试一些基本的面包板电路

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/launchpad/gtech2015-aa131c/embed' width='350'></iframe>

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