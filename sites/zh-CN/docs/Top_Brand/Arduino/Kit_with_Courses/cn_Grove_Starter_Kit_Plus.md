---
description: Grove - Starter Kit Plus
title: Grove - Starter Kit Plus
keywords:
- grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove_Starter_Kit_Plus
last_update:
  date: 1/13/2023
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Grove-Starter_Kit_Plus.jpeg)

欢迎进入 Grove 的世界！Grove 是各种模块化传感器和执行器的集合，帮助您毫无障碍地深入并享受电子世界。在我们逐一讨论这些 Grove 模块之前，您需要坐下来完成一些准备工作。

**1. 什么是 Arduino？**

Arduino 是一个灵活且易于学习的开源开发平台，在创客、极客和互动艺术家中享有盛誉。它点燃了正在进行的创客运动的繁荣。围绕 Arduino 及其协作社区诞生了大量创意项目，包括我们的 Grove 系统。要开始使用 Arduino，您首先需要拥有一个。Arduino 及其克隆版本在无数网站甚至零售店都有销售。一次 Google 搜索就足以让您获得一个。

**2. Arduino IDE 安装**

Arduino 也是基于 C/C++ 的编程 IDE 的名称。获得 Arduino 后，您应该安装 IDE。根据操作系统版本，具体安装会有所不同。幸运的是，Arduino 团队为我们提供了适用于大多数操作系统的详细安装指南：

[https://arduino.cc/en/Guide/HomePage](https://arduino.cc/en/Guide/HomePage)

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Arduino_1.jpg)

**3. 语言参考**

但是如果您对编程语言一无所知怎么办？Arduino 团队还为您提供了一个良好且全面的学习网站：

[https://arduino.cc/en/Reference/HomePage](https://arduino.cc/en/Reference/HomePage)

现在您已经为 Grove 探索做好了准备。

### 1. Grove Base Shield 介绍

Grove base shield 插入 Arduino 并且是 Grove 系统的基础。Arduino 的所有 I/O 端口都被暴露并适配为 22 个 Grove 连接器，包括数字 I/O、模拟 I/O 和专用端口（I2C、SPI、UART）。

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Grove-base_shield_v1.3.jpeg)

在中心，被黄线包围的是 13 个数字 I/O 端口。这些可用于读取和控制数字 Grove 模块，如光传感器和 LED。一些数字 I/O 端口也可用作 PWM（脉宽调制）输出。通过生成 PWM 波，Arduino 可以控制步进电机的运动或使 LED 淡入淡出。在绿线内，左侧是 5 个模拟输入端口。模拟输入通常用于读取模拟传感器，如电位器或温度传感器，但这些端口也可用作数字 I/O 端口。最后，专用端口用红色轮廓标出：两个 I2C 端口、一个 SPI 端口和一个 UART 端口。您将在更复杂的 Grove 模块中使用这些特殊端口，如 3 轴加速度计和串行蓝牙模块。

此套件中包含的 Grove 兼容传感器将使用以下端口之一：数字端口、模拟端口或 I2C 端口。请参考下面每个 Grove 传感器的接线说明和示例代码。此套件包含十根 Grove 电缆。只需将 Grove 电缆插入传感器和 base shield。这实现了即插即用操作，无需焊接。

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/GroveCable.jpg)

### 2. Grove – Button(P)**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Bgpushb1.jpg)

**描述**

作为一个通用按钮，这个是懒人的基本部件。只需将其插入 base shield。然后您就有了一个无线整洁的按钮。

**示例**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/ButtonPicture.jpg)

此示例向您展示如何通过此按钮打开或关闭 LED。

```
<pre>int button = 3;   //将按钮连接到数字引脚 3
int LED = 7;      //将 LED 连接到数字引脚 7

void setup()
{
    pinMode(button, INPUT);  //将按钮定义为输入设备
    pinMode(LED, OUTPUT);    //将 LED 定义为输出设备
}

void loop()
{
    int buttonState = digitalRead(button);  //读取按钮的状态
    if(buttonState == 1)
    digitalWrite(LED,1);
    else
    digitalWrite(LED,0);
}</pre>
```

**提示**

这是一个瞬时按钮。这意味着它只在按下时输出高电平。一旦松开，它就不再输出高电平而是低电平。这是像摩斯密码器这样的项目的最爱功能，但如果你喜欢稳定的按钮，请继续看下面的Grove – Switch(P)。

###  3. Grove – Switch(P)

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/SwitchP.jpg)

**描述**

这个开关是一个迷你SPDT滑动开关。你可以通过它将信号切换到低电平或高电平。与上面的Grove – Button(P)不同，这个开关输出稳定状态。
**示例**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Switch1.jpg)

你完全可以用这个开关替换Grove – Button(P)，而无需修改示例中的任何一行代码。

**提示**

"P"代表"面板安装"。对于名称中包含"P"的Grove模块，设计目标是整洁和无线的HID。

###  4. Grove – Touch Sensor

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/TouchSensor.jpg)

**描述**

这个触摸传感器是普通按钮的另一个替代品。当你触摸这个垫子上的圆形区域时，它会输出高电平。比按钮更好的是，触摸传感器没有磨损问题。

**示例**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Touch1.jpg)

你完全可以用这个开关替换Grove – Button(P)，而无需修改示例中的任何一行代码。

**提示**

这个触摸传感器通过测量其敏感区域的电容变化来确定其输出。所以无论你触摸它的正面还是背面，结果都是一样的。如果你需要"P"版本，只需将它翻过来就可以了！

###  5. Grove – Magnetic Switch

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Magnetic_Switch.jpg)

**描述**

Grove磁性开关检测磁铁的存在。它使用CT10，一个单极单掷开关。磁性开关（也称为簧片开关）用于防盗报警系统的门窗传感器、现代笔记本电脑检测盖子是否关闭，以及自行车车轮的速度传感器。当环境磁场达到其阈值时，它会在其信号引脚上输出高电平。

**示例**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/MagneticSwitch1.jpg)

你完全可以用这个开关替换Grove – Button(P)，而无需修改示例中的任何一行代码。

**提示**

在某些应用中，磁性开关已经取代了传统的机械开关，磨损更少。

###  6. Grove – Red LED

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Grove-LED.jpg)

**描述**

LED是初学者最熟悉的部件，没有"之一"。我们用它们来指示、创建光效等等。这个套件包含3种颜色的LED，以满足你的显示和基本展示需求。

**示例**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/LEDKit.jpg)

我们已经在上面的示例中使用LED作为指示器。这里让我们制作一些超越简单开/关操作的光效，来让LED渐变。

```
<pre>/* 这是来自Arduino的示例代码，你可以通过Arduino IDE中的这个路径打开它：文件 --> 示例 --> 1.Basic --> Fade */

int brightness = 0;    // LED的亮度
int fadeAmount = 5;    // LED渐变的点数

void setup()
{
    // 声明引脚9为输出：
    pinMode(9, OUTPUT);
}

void loop()
{
    // 设置引脚9的亮度：
    analogWrite(9, brightness);
    // 为下次循环改变亮度：
    brightness = brightness + fadeAmount;
    // 在渐变的两端反转渐变方向：
    if (brightness == 0 || brightness == 255)
    {
        fadeAmount = -fadeAmount ;
    }
    // 等待30毫秒以看到调光效果
    delay(30);
}</pre>
```

**提示**

这个LED系列有6种颜色可供不同喜好选择。它们都支持"面板安装"，而此套件中未包含的其他LED有：

1. Grove – 紫色LED(3mm)；
2. Grove – 白色LED(5mm)；
3. Grove – 多色闪烁LED(5mm)。

###  7. Grove – 蜂鸣器

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Grovebuzzer.jpg)

**描述**

蜂鸣器，或压电扬声器，可能是您第一个会发声的电子元件。除了用作警报器或指示器外，蜂鸣器完全能够演奏歌曲。试试看，享受其中的乐趣吧！

**示例**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/BuzzerKit1.jpg)

这是一个来自Oomlout.com的简短示例，为您演奏一首家喻户晓的童谣——"一闪一闪小星星"。

```
<pre>/* Melody
 * (cleft) 2005 D. Cuartielles for K3
 *
 * 这个例子使用压电扬声器播放旋律。它向压电器发送适当频率的方波，
 * 产生相应的音调。
 *
 * 音调的计算遵循数学运算：
 *
 *       timeHigh = period / 2 = 1 / (2 * toneFrequency)
 *
 * 其中不同的音调如下表所述：
 *
 * note  frequency  period  timeHigh
 * c          261 Hz          3830  1915
 * d          294 Hz          3400  1700
 * e          329 Hz          3038  1519
 * f          349 Hz          2864  1432
 * g          392 Hz          2550  1275
 * a          440 Hz          2272  1136
 * b          493 Hz          2028 1014
 * C         523 Hz         1912  956
 *
 * https://arduino.cc/en/Tutorial/Melody
 */

int speakerPin = 9;

int length = 15; // 音符的数量
char notes[] = "ccggaagffeeddc "; // 空格代表休止符
int beats[] = { 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 4 };
int tempo = 300;

void playTone(int tone, int duration) {
    for (long i = 0; i < duration * 1000L; i += tone * 2) {
        digitalWrite(speakerPin, HIGH);
        delayMicroseconds(tone);
        digitalWrite(speakerPin, LOW);
        delayMicroseconds(tone);
    }
}

void playNote(char note, int duration) {
    char names[] = { 'c', 'd', 'e', 'f', 'g', 'a', 'b', 'C' };
    int tones[] = { 1915, 1700, 1519, 1432, 1275, 1136, 1014, 956 };

    // 播放与音符名称对应的音调
    for (int i = 0; i < 8; i++) {
        if (names[i] == note) {
            playTone(tones[i], duration);
        }
    }
}

void setup()
{
    pinMode(speakerPin, OUTPUT);
}

void loop() {
    for (int i = 0; i < length; i++) {
        if (notes[i] == ' ')
        {
            delay(beats[i] * tempo); // 休止符
        }
        else
        {
            playNote(notes[i], beats[i] * tempo);
        }

        // 音符之间的暂停
        delay(tempo / 2);
    }
}</pre>
```

**提示**

压电蜂鸣器是如何工作的？通常每个压电蜂鸣器中都有两个陶瓷片。当给它们施加电压时，它们会相互吸引或排斥。这些陶瓷片震动引起的空气振动会发出声音。当震动频率改变时，声音频率也会随之改变。

###  8. Grove – 振动器

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Gvib.jpg)

**描述**

这是一个适用于非声音指示器的微型振动马达。当设置为高电平时，这个马达可以产生振动效果，就像您手机的振动模式一样。

**示例**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Vibrator1.jpg)

您完全可以像使用LED一样使用它，但您也可以用它创造一些节拍。将蜂鸣器的示例上传到这个振动器，体验一下"一闪一闪小星星"的振动版本。

**提示**

单个单元的功率相当有限。想要更强的效果？振动器矩阵值得一试。

###  9. Grove – 旋转角度传感器

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Grove-Rotary_Angle_Sensor.jpg)

**描述**

这是一个10K欧姆的线性旋转电位器。它具有300度的有效范围。同时设计为HID设备，添加了"面板安装"功能。但在成为一个可爱友好的HID之前，为它DIY一个旋转帽吧！

**示例**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Rotaty1.jpg)

这个示例向您展示如何读取旋转角度传感器。

```
<pre>int potentiometer = 0;

void setup()
{
    Serial.begin(9600); //set the serial communication frequency at 9600 bits per sec
    pinMode(potentiometer, INPUT);
}

void loop()
{
    int value = analogRead(potentiometer);
    Serial.println(value); //print the value on the serial monitor screen
    delay(1000); //wait 1000ms before printing next value
}</pre>
```

**提示**

旋转电位器看起来与旋转编码器非常相似。但实际上它们完全不同。
从功能上讲，旋转电位器本质上是一个滑动电位器，只是做成了圆形。它像滑动电位器一样以模拟方式反映位置。但旋转编码器通过记录（比如一个点击）来计算它旋转的角度，然后通过板上的芯片以模拟或数字方式输出处理后的数据。

你也可以从外观上区分它们。旋转电位器有一个有效范围，比如300度。但旋转编码器可以在一个方向上一圈又一圈地转动。

###  10. Grove - 声音传感器

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Sound_Sensor.jpg)

**描述**

Grove声音传感器是一个电子麦克风，使您的项目能够响应环境声音。该板包含一个电位器来控制声音输入电平。

**示例**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Sound1.jpg)

此示例为LED设置一个阈值。当环境声音强度达到预设阈值时，LED点亮。

```
<pre>int ledPin = 9;                       //将LED连接到数字引脚12
int thresholdValue = 0;                 // 打开或关闭LED的阈值

void setup()
{
    pinMode(ledPin, OUTPUT);          //将数字引脚12上的LED设置为输出
}

void loop()
{
    int sensorValue = analogRead(A0); //读取模拟引脚0上的传感器值
    if(sensorValue>thresholdValue)
    digitalWrite(ledPin,HIGH);
    delay(200);
    digitalWrite(ledPin,LOW);
}</pre>
```

**提示**

电子麦克风收集所有频率的声音强度。电位器充当门卫的角色。当你将其完全顺时针旋转时，它让所有信号通过，当你将其完全逆时针旋转时，没有信号能够通过。

###  11. Grove – 光传感器 (P)

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Grove-Light_SensorP1.jpg)

**描述**

光传感器，也称为光敏电阻（LDR），是一种在从DIY项目到工业自动化的各种应用中广泛使用的传感器。通常，当环境光强度增加时，光传感器的电阻会减小。

**示例**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Light1.jpg)

此示例将在光强度低于预设阈值时点亮LED。光传感器连接到Arduino模拟引脚0（左下角的模拟Grove连接器），LED连接到底板上的Grove数字连接器12。

```
<pre>int ledPin=12;                  //将LED连接到数字引脚12
int thresholdvalue=400;       //打开或关闭LED的阈值

void setup()
{
    pinMode(ledPin,OUTPUT);           //将数字引脚12上的LED设置为输出
}

void loop()
{
    int sensorValue = analogRead(0); //光传感器连接到模拟引脚0
    if(sensorValue<thresholdvalue)
    {
        digitalWrite(ledPin,HIGH);
    }
    else
    {
        digitalWrite(ledPin,LOW);
    }
}</pre>
```

**提示**

模拟光传感器的输出范围从0到1023，但输出与环境光强度不是线性关系。下表帮助您理解输出的真实含义。

<table cellspacing="0" width="80%">
  <tbody>
    <tr>
      <th scope="col">传感器数值</th>
      <th scope="col">照度 (LUX)</th>
      <th scope="col">描述（改编自维基百科）</th>
    </tr>
    <tr>
      <td>100</td>
      <td>&lt;1</td>
      <td></td>
    </tr>
    <tr>
      <td>200</td>
      <td>~1</td>
      <td>热带纬度地区头顶满月</td>
    </tr>
    <tr>
      <td>300</td>
      <td>~3</td>
      <td>城市黄昏</td>
    </tr>
    <tr>
      <td>400</td>
      <td>~6</td>
      <td></td>
    </tr>
    <tr>
      <td>500</td>
      <td>~10</td>
      <td></td>
    </tr>
    <tr>
      <td>600</td>
      <td>~15</td>
      <td></td>
    </tr>
    <tr>
      <td>700</td>
      <td>~35</td>
      <td>家庭客厅</td>
    </tr>
    <tr>
      <td>800</td>
      <td>~80</td>
      <td>办公楼走廊照明</td>
    </tr>
    <tr>
      <td>900</td>
      <td>&gt;100</td>
      <td>非常阴暗的阴天</td>
    </tr>
  </tbody>
</table>

###  12. Grove – 温度传感器

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Bgtemp1.jpg)

**描述**

Grove 温度传感器使用热敏电阻来确定环境温度。该传感器的检测范围在-40到125摄氏度之间，精度为±1.5℃。但是它不会直接输出温度值。要获得具体的温度值，我们将使用下面代码中的公式。

**示例**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/TemperatureKit1.jpg)

此示例展示如何将传感器的原始输出转换为具体的温度值。您可以在串口监视器中看到以摄氏度为单位的输出数据。

```
<pre>int a;
int del=1000;                // duration between temperature readings
float temperature;
int B=3975;                  //B value of the thermistor
float resistance;

void setup()
{
    Serial.begin(9600);
}

void loop()
{
    a=analogRead(0);
    resistance=(float)(1023-a)*10000/a;
    temperature=1/(log(resistance/10000)/B+1/298.15)-273.15;
    delay(del);
    Serial.println(temperature);
}</pre>
```

**提示**

查找温度的内置函数来自哪里？它是 Steinhart-Hart 方程的一个变体，这是一个广泛使用的近似方程，它给出 T（温度）作为 R（热敏电阻阻值）的函数。原始方程是：

上述方程中的所有三个参数都可以用一个参数来描述：B。在行业内，人们通过 B 值来表征热敏电阻，如我们示例中定义的那样。所以内置函数实际上是基于 B 参数方程的一个变体。

###  13. Grove – 继电器

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Twig-Relay1.jpg)

**描述**

继电器是放大 Arduino 控制能力的有用工具！通过 Grove 接口馈送控制信号，继电器将控制连接到螺丝端子的外部电路的开/关。外部电路的电压可以高达 220V！所以拿起这个继电器，开始一些真正有挑战性的项目吧！

**示例**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/RelayKit1.jpg)

以下是使用按钮控制继电器的示例。

```
<pre>const int buttonPin = 3;     // the button is attached to digital pin 3
const int relayPin =  9;     // the relay is attached to digital pin 9
int buttonState = 0;

void setup()
{
    pinMode(relayPin, OUTPUT);
    pinMode(tiltPin, INPUT);
}

void loop()
{
    // read the state of the button:
    buttonState = digitalRead(buttonPin);
    if (buttonState == 1)   digitalWrite(relayPin, HIGH);
    else   digitalWrite(relayPin, LOW);
    delay(10);
}</pre>
```

**提示**

继电器是一个电子控制的机械开关。其尺寸根据其载流能力而变化。继电器（本质上就是塑料盒部分）越大，它能承载的电流就越大。

###  14. Grove – 螺丝端子

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Grove-screw_terminal.jpg)

**描述**

这是一个小工具，用于在需要将快速原型制作的 Grove 系统与其他原型制作电路合并时使用。将您需要的信号线拧紧到螺丝端子上。然后您就可以将外部电路作为普通的 Grove 模块使用。

###  15. Grove – 舵机

[[![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Servo.jpg)

**描述**

舵机绝对是一个有趣的运动控制设备！通过 Arduino IDE 内置的舵机库，您可以将其定位在 0 到 180 度之间的任何位置。配备 4 个不同形状的轴，这个舵机可以驱动小风扇、举起物体或模拟时钟指针。

**示例**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Servo1.jpg)

舵机是一种模拟执行器。然而 Arduino 无法输出模拟信号。为了近似模拟执行器所需的模拟信号，Arduino 采用 PWM（脉宽调制）来应对这个问题。并非所有 Grove 端口都可以用作模拟输出。可用的端口是 D3、D5、D6、D9、D10 和 D11。以下是我们如何使用电位器控制舵机位置的示例。

```
<pre>#include <Servo.h>
Servo groveServo; //创建一个对象

int potentiometer = 0;
int shaft;

void setup()
{
    groveServo.attach(3); //舵机连接到D3
    pinMode(potentiometer, INPUT);
}

void loop()
{
    shaft = analogRead(potentiometer);
    shaft = map(shaft, 0, 1023, 0, 179);
    //模拟输入数据范围从1~1023，但舵机
    groveServo.write(shaft);             //只响应1~179范围内的数据。
    delay(15);
}</pre>
```

**提示**

齿轮箱内有一组齿轮。当舵机工作时，不要粗暴地用手试图逆转其方向，因为这可能会对齿轮造成永久性损坏。

##  演示项目
---
###  1. 一杯花朵

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/A_Cup_of_Flower.jpg)

**描述**

您想要一杯花朵来缓解疲惫的心情吗？这个项目由 Grove – LED 和一个 Grove – 触摸传感器组成。当传感器被触摸时，这些可爱的 LED 将为您照亮温暖舒适的光效。

**材料清单**

<dl>
  <dd>1. Arduino x 1；</dd>
  <dd>2. Grove – Base Shield x 1；</dd>
  <dd>3. Grove – LED x 6；</dd>
  <dd>4. Grove – 触摸传感器 x 1；</dd>
  <dd>5. 6 x 6cm 彩色纸 x 6；</dd>
  <dd>6. 9V 电池和 9V 电池夹 x 1。</dd>
</dl>

!!!Note
     LED 的数量是任意的。基础套件中包含三个。但您可以根据杯子的容量增加或减少数量。我这里有一个大杯子，所以我从我们的网站上又添加了三个。

**步骤**

**1. 折叠花蕾**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Fold_the_buds.jpg)

选择一个您喜欢的花朵图案，按照其步骤制作一些。Google 搜索可能会在寻找图案方面有很大帮助。互联网上有很多折纸爱好者和艺术家愿意分享他们的手工作品。

我在这里选择了郁金香，但向日葵、玫瑰和百合也很棒！

折叠花蕾时，您需要在底部留一个小孔，让 Grove 线缆穿过。

**2. 设置**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Set_up.jpg)

使用 10cm Grove 线缆将花蕾和触摸传感器连接到 Grove – Base Shield 上。然后将代码上传到您的控制器。

```
<pre>void setup()
{
    pinMode(2, OUTPUT);
    pinMode(4, OUTPUT);
    pinMode(6, OUTPUT);
    pinMode(7, OUTPUT);
    pinMode(11, OUTPUT);
    pinMode(13, OUTPUT);
    pinMode(9, INPUT); //pin of touch sensor
}

void loop()
{
    int switchState = digitalRead(9);
    if(switchState == HIGH)
    {
        digitalWrite(2, HIGH);
        digitalWrite(4, HIGH);
        digitalWrite(6, HIGH);
        digitalWrite(7, HIGH);
        digitalWrite(11, HIGH);
        digitalWrite(13, HIGH);
    }
    else
    {
        digitalWrite(2, LOW);
        digitalWrite(4, LOW);
        digitalWrite(6, LOW);
        digitalWrite(7, LOW);
        digitalWrite(11, LOW);
        digitalWrite(13, LOW);
    }
    delay(100);
}</pre>
```

**3. 通电并安装**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Battery.jpg)

使用便携式9V电池为花朵供电，并将其安装在杯子中。完成！享受您的花朵杯子吧！

###  2. 你好吗！

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/How_you_doing.jpg)

(下载自 think.bigchief.it)

**描述**

你如何向朋友打招呼？Big Chief会说"还有什么比握手更好的呢？"当其中一个Big Chief纸玩具靠在另一个的背上时，它们会摇动来打招呼！

**材料清单**

<dl>
  <dd>1. Arduino x 1；</dd>
  <dd>2. Grove – Base Shield x 1；</dd>
  <dd>3. Grove – Magnetic Switch x 1；</dd>
  <dd>4. Grove – Vibrator x 1；</dd>
  <dd>5. 纸玩具 x 2；</dd>
  <dd>6. 磁铁 x 1；</dd>
  <dd>7. 9V电池和9V电池夹 x 1。</dd>
</dl>

:::note
    LED的数量是任意的。基础套件中包含三个。但您可以根据杯子的容量增加或减少。我这里有一个大杯子，所以我从我们的网站上又添加了三个。
:::
**步骤**

**1. 打印出来！**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Print_it_out.jpg)

在互联网上选择一个您喜欢的图案。确保有足够的空间放置磁铁或磁性开关以及振动器。与上面的折纸花一样，您可以在互联网上找到大量的图案。

**2. 填入器官**

切割纸玩具时要专注。只有这样您才能得到一个整洁的玩具。之后，是时候给它们填入一些器官了。
我在Big Chief A（我们就这样称呼它！）的背面贴了一个磁铁。我用双面胶带把它粘在那里。

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Stuck1.jpg)

对于Big Chief B，我在他的背面贴了一个磁性开关，位置与A相同，在他的脚上贴了一个振动器。

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Stuck2.jpg)

**3. 粘合它们**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Stuck3.jpg)

仔细按照打印纸上的说明进行操作。将Grove线缆插入我们在Big Chief B中使用的两个Grove模块。然后您将得到两个如上所示的可爱纸玩具。

**4. 上传程序**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Stuck4.jpg)

将下面的代码上传到您的Arduino。通过这样做，您为它们注入了生命。

```
<pre>void setup()
{
    pinMode(11, INPUT);
    pinMode(9, OUTPUT);
}

void loop()
{
    int sensorState = digitalRead(11);
    if (sensorState == 1) digitalWrite(9, HIGH);
    else digitalWrite(9, LOW);
    delay(100);
}</pre>
```

##  相关项目

如果您想使用Grove - Starter Kit Plus制作一些精彩的项目，这里有一些项目供参考。

我们在[geppetto](https://geppetto.seeedstudio.com/)中提供了这个部分，通过Seeed和Geppeto轻松进行模块化电子设计。立即构建。[geppetto.seeedstudio.com](https://geppetto.seeedstudio.com/)


###  Intel Edison实时温度显示

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_Plus/img/Intel_Edison_Live_Temperature_Display.jpg)

这是一个由Intel Edison和Grove - Starter Kit Plus制作的物联网演示。
Intel发布了一个Intel IoT开发者套件，您可以获得它来帮助开发者和技术人员掌握一套简单的套件，并开始开发在日常世界中使用的应用程序。

[<font color="#FF0000">**我想制作它。**</font>](https://www.seeedstudio.com/recipe/94-intel-edison-live-temperature-display.html)

###  与我们分享您的精彩项目

天生具有制作和分享的精神，这就是我们相信造就创客的原因。

也正因为如此，开源社区才能像今天这样繁荣。

无论您是什么身份，制作了什么，黑客、创客、艺术家和工程师，

只要您开始与他人分享您的作品，

您就成为了开源社区的一部分，您正在做出自己的贡献。

现在在[Recipe](https://www.seeedstudio.com/recipe/)上与我们分享您的精彩项目，赢得成为Seeed核心用户的机会。

*   核心用户是那些对Seeed产品表现出高度兴趣和重大贡献的人。
*   我们与核心用户在新产品开发中合作，换句话说，核心用户将有机会在我们的新产品正式发布之前体验任何Seeed新产品，作为回报，我们期望他们提供有价值的反馈，帮助我们改进产品性能和用户体验。在大多数情况下，如果我们的核心用户对制作有任何好想法，我们将提供硬件组件、PCBA服务以及技术支持。此外，与核心用户进一步的商业合作是非常可能的。

<font color="#FF0000">获取更多关于核心用户的信息，请发送邮件至：recipe@seeed.cc</font>

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