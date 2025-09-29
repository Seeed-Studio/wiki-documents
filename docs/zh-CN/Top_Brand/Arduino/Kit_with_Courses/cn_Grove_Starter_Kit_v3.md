---
description: Grove - Starter Kit v3
title: Grove - Starter Kit v3
keywords:
- grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove_Starter_Kit_v3
last_update:
  date: 1/13/2023
  author: shuxu hu
---

Grove 是一个模块化电子平台，用于便捷快速的原型制作。许多配置可以在无需焊接或面包板的情况下组装完成。只需将 Grove 模块连接到 Grove 扩展板，并利用为每个 Grove 模块提供的示例代码。Grove 入门套件包含大量传感器和执行器，包括对音频、光线、运动、触觉和其他交互模式的支持。因此，您可以立即开始使用各种各样的项目进行实验。

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-Starter_Kit_v2_Photo.jpg)

##  前言

###  关于 Grove

Grove 是一个模块化的、即用型工具集。就像乐高一样，它采用积木式方法来组装电子设备。与使用面包板和各种电子元件组装项目的传统复杂学习方法相比，Grove 显著简化和浓缩了学习过程。Grove 系统由一个基础扩展板和各种带有标准化连接器的模块组成。

基础扩展板允许轻松连接任何来自 Grove 模块的微处理器输入或输出。每个 Grove 模块都处理单一功能，例如简单的按钮或更复杂的心率传感器。每个模块都配有清晰的文档和演示代码，帮助您快速入门。

###  了解 Arduino

如果这是您第一次使用 Arduino，您需要完成以下步骤：

<!-- *   [Arduino 入门指南](/cn/Getting_Started_with_Arduino)

*   [安装您的微控制器](/cn/Getting_Started_with_Seeeduino)

*   [下载并导入 Grove - 入门套件 Sketchbook](/cn/How_To_Use_Sketchbook) -->

Grove - Starter Kit Sketchbook 的下载地址在[这里](https://github.com/Seeed-Studio/Sketchbook_Starter_Kit_V2.0)。

现在您已经准备好探索 Grove 生态系统了。

###  零件清单

*   1*基础扩展板
*   1*Grove - LCD RGB 背光
*   1*Grove - 智能继电器
*   1*Grove - 蜂鸣器
*   1*Grove - 声音传感器
*   1*Grove - 触摸传感器
*   1*Grove - 旋转角度传感器
*   1*Grove - 温度传感器
*   1*Grove - LED
*   1*Grove - 光线传感器
*   1*Grove – 按钮
*   1*DIP LED 蓝-蓝
*   1*DIP LED 绿-绿
*   1*DIP LED 红-红
*   1*迷你舵机
*   10*Grove 连接线
*   1*9V 转桶形插头适配器
*   1*Grove 入门套件手册
*   1*绿色塑料盒


###  模块详情

#### Grove - 基础扩展板

让我们从 Grove 基础扩展板开始。"Grove - Base Shield" 是 "Electronic Brick Shield" 的新版本。基础扩展板兼容 Seeeduino v3.0（168p 和 328p），以及 Arduino UNO 和 Duemilanove。基础扩展板上有 16 个 Grove 端口，分为四个功能区域：模拟(4)、数字(7)、I2C(4) 和 UART(1)。

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Base_Shield_IO.jpg)

*   数字端口

如图所示，有七个数字端口，标记为 D2-D8。每个端口处理 Arduino Uno 上的一对数字引脚（2/3 ... 8/9）。它们可用于读取数字传感器（例如按钮）或控制数字（或通过 PWM 控制模拟）执行器。在任何情况下，每个端口只能处理两种逻辑状态：0 或 1。

*   模拟端口

左侧有四个用于进行模拟读取的 Grove 端口。模拟传感器可以返回 0 到 1023 范围内的读数。与只返回 0 或 1 的数字传感器相比，模拟读数更详细和精确。

*   I2C 端口

数字端口下方是四个 I2C Grove 端口。I2C 是一种低速总线协议，通过两根线传输数据：SCL 和 SDA。SCL 是用于同步 I2C 总线上数据传输的时钟线；SDA 是数据线。

<!-- For detailed information on how to use your Grove – Base Shield, go to [Base Shield V2](/cn/Base_Shield_V2). -->

####  Grove - LCD RGB 背光

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Serial_LEC_RGB_Backlight_Lcd.jpg)

Grove - LCD RGB 背光支持文本显示，使用用户定义的字符。它使您能够使用简单明了的 Grove 接口设置背光颜色。它使用 I2C 作为与 Arduino 的通信方法。因此，数据交换和背光控制所需的引脚数量从约 10 个缩减到 2 个，为其他具有挑战性的任务留出更多 I/O 能力。

Grove_LCD_RGB_Backlight 现在也支持 MBED。非常感谢社区的热情贡献。更多详情，您可以查看[这里](https://github.com/DavidElmoRoss/Grove_LCD_RGB_Backlight_V5)。

**示例**

该示例向您展示如何在屏幕上打印文本并更改背光颜色。通过以下路径找到它：

File -&gt; Sketchbook -&gt; Grove_RGB_Backlight_LCD -&gt; HelloWorld

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/RGBbacklight.jpg)

**提示**

这是一个 16x2 LCD 屏幕。它能够显示两行十六字符文本，支持英语和日语等语言。您还可以通过定义显示模式来创建和使用自定义字符。您可以在这里找到制作自定义字符的示例：

[https://github.com/Seeed-Studio/Grove_LCD_RGB_Backlight/archive/master.zip](https://github.com/Seeed-Studio/Grove_LCD_RGB_Backlight/archive/master.zip)

####  Grove – 继电器

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Twig-Relay.jpg)

继电器是放大 Arduino 控制能力的有用工具！通过 Grove 接口馈送控制信号，继电器打开或关闭连接到螺丝端子的外部电路。外部电路的电压可以高达 220V！所以拿起这个继电器，开始一些真正具有挑战性的项目吧！

**示例**

该示例向您展示如何通过按钮控制继电器：File -&gt; Sketchbook -&gt; Grove_Relay。

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-Relay_Ex.jpg)

**提示**

继电器是一个电子控制的机械开关。继电器的尺寸根据其载流能力而变化。继电器（本质上就是塑料盒部分）越大，它能承载的电流就越大。

<font color="red">
在处理市电电压时请格外小心——如有疑问，请联系专业人员，如持证电工寻求帮助。
</font>

<!-- For detailed information on how to use your Grove – Relay, you can go to [Grove – Relay page](/cn/Grove-Relay). -->

####  Grove – 蜂鸣器

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Buzzer1.jpg)

蜂鸣器是一个简单而有趣的Grove模块。它是一个压电扬声器，配有简单的控制电路。如果连接到数字输出，当输出为高电平时它会发出音调。或者，它可以连接到模拟（实际上是脉宽调制数字）输出来产生各种音调和效果。

**示例**

您可以使用Grove – 按钮的代码来让蜂鸣器在您按下按钮时发出蜂鸣声。然而，Grove – 蜂鸣器可以更有趣——它可以播放歌曲！这是来自Oomlout.com的一个简短示例，播放一首家喻户晓的童谣——"一闪一闪小星星"。

通过以下路径找到示例：File -&gt; Sketchbook -&gt; Grove_Buzzer

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-Buzzer_Ex.jpg)

**提示**

压电蜂鸣器实际上是如何工作的？通常，每个压电蜂鸣器中有两个陶瓷片。当给它们施加不同的电压时，它们会相互吸引或排斥。这些陶瓷片的运动引起空气振动（即声音）。当振动频率改变时，声音频率也会相应改变。

<!-- For detailed information on how to use your Grove - Buzzer, go to [Grove - Buzzer page](/cn/Grove-Buzzer) -->

####   Grove - 声音传感器

声音传感器模块是一个简单的麦克风。基于LM358放大器和驻极体麦克风，它可以用来检测环境中的声音级别。

**示例**

Grove – 声音传感器的代码可以用来控制LED灯，其亮度反映环境声音的强度。

File -&gt; Sketchbook -&gt; Grove_Sound_Sensor

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-Sound_Sensor_Ex.jpg)

**提示**

驻极体麦克风收集所有频率的声音强度，但电位器可以充当门卫。例如，当您将轴完全顺时针旋转时，电位器可以让一切通过。当您将其完全逆时针旋转时，什么都不会通过。

<!-- For a detailed information on how to use your Grove - Sound Sensor, go to [Grove - Sound Sensor page](/cn/Grove-Sound_Sensor) -->

####   Grove - 触摸传感器

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-touch_sensor_Photo.jpg)

Grove - 触摸传感器使您能够用接触检测表面来替代按压按钮。它可以检测手指靠近时电容的变化。因此，无论您的手指直接触摸触摸板还是只是靠近它，Grove - 触摸传感器都会输出高电平。

**示例**

Grove – 按钮的代码适用于此模块。通过以下路径找到示例：File -&gt; Sketchbook -&gt; Grove_Buzzer

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-Touch_Sensor_Ex.jpg)

**提示**

这是瞬时接触按钮的替代方案。Grove – 触摸传感器检测底部圆形（未涂漆）区域的电容变化；您的手指越靠近这个区域，电容变化就越大。即使您的手指和传感器之间有纸张，它仍然能可靠地工作。

<!-- For detailed information on how to use your Grove - Touch Sensor, go to [Grove - Touch Sensor page](/cn/Grove-Touch_Sensor). -->

####   Grove - 旋转角度传感器

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Potentiometer1.jpg)

Grove电位器产生0到VCC（3.3或5 VDC）之间的模拟输出。角度范围是300度，值呈线性变化。电阻值为10k欧姆，非常适合Arduino使用。这也可能被称为"旋转角度传感器"。

**示例**

该示例向您展示如何读取旋转角度传感器的值：

File -&gt; Sketchbook -&gt; Grove_Rotary_Angle_Sensor

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-Rotary_Angle_Sensor_Ex.jpg)

**提示**

旋转电位器看起来与旋转编码器非常相似，但它们不是同一个东西。旋转电位器本质上是一个滑动电位器，构造成圆形形状。它以模拟方式报告滑动触点正在使用的电阻元件的比例。

<!-- For a detailed information on how to use your Grove - Rotary Angle Sensor,you can go to [Grove - Rotary Angle Sensor page](/cn/Grove-Rotary_Angle_Sensor) -->

####   Grove – 温度传感器

![400px](https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor/img/Tempreture_Sensor_Connector.jpg)

Grove - 温度传感器使用热敏电阻来返回环境温度。我们的板子然后将模拟输入引脚测量的电压值转换为温度。工作范围是-40到125摄氏度。

**示例**

该示例向您展示如何将传感器的原始输出转换为温度。您可以在串行监视器中看到摄氏度数据。

File -&gt; Sketchbook -&gt; Grove_Temperature_Sensor.

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-Temperature_Sensor_Ex.jpg)

**提示**

Grove – 温度传感器用于检测环境温度。

<!-- For a detailed information on how to use your Grove - Temperature Sensor,you can go to [Grove - Temperature Sensor](/cn/Grove-Temperature_Sensor) -->

####   Grove - LED

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-LED_Photo.jpg)

Grove - LED 专为 Arduino/Seeeduino 初学者设计，用于监控数字端口的控制。它可以轻松安装到您的盒子或桌面表面，用作电源或信号的指示灯。

**示例**

这个示例我们制作一个具有呼吸效果的 LED 灯：

File -&gt; Sketchbook -&gt; Grove_LED

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-LED_Ex.jpg)

**提示**

我们为您准备了三种颜色的 LED 灯泡，您可以通过更换小型 Grove – LED 插座上的 LED 来获得您想要的颜色。LED 在灯泡的平面侧有一个阴极，在灯泡的圆形侧有一个阳极。阳极需要安装在对应插座上的 '+' 标志处，LED 才能正常工作。

<!-- For a detailed information on how to use your Grove - LED,you can go to [Grove - Red LED](/cn/Grove-Red_LED) -->

####   Grove - 光传感器

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-Light_Sensor_photo.jpg)

光传感器，也称为光敏电阻器 (LDR)。通常，当环境光强度增加时，光传感器的电阻会降低。

**示例**

这个示例将在光强度低于预设阈值时点亮 LED：

File -&gt; Sketchbook -&gt; Grove_Light_Sensor

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-Light_Sensor_Ex.jpg)

**提示**

模拟光传感器的输出范围从 0 到 1023，但输出与环境光强度不是线性关系。

<!-- For a detailed information on how to use your Grove - Light Sensor,you can go to [Grove - Light Sensor](/cn/Grove-Light_Sensor) -->

####   Grove – 按钮

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Button1.jpg)

这个新版本的按钮 Grove 模块包含一个独立的按钮，配置了下拉电阻器 – 可直接与我们的微控制器作为数字输入使用。按钮信号连接到 SIG 线，NC 在此 Grove 模块中未使用。

**示例**

这个示例展示如何通过此按钮打开或关闭 LED。

File -&gt; Sketchbook -&gt; Grove_Button

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-Button_Ex.jpg)

**提示**

"瞬时"意味着按钮在按下后会弹回。此按钮在按下时输出 HIGH，释放时输出 LOW。

####  Grove -  舵机

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-Servo_Photo.jpg)

这是一个可以精确控制位置的执行器。

**示例**

我们准备了一个如何使用电位器控制舵机位置的示例：

File --&gt; Sktechbook --&gt; Servo

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-Starter_Kit_Servo.jpg)

**提示**

Grove – 舵机具有适用于不同用途的安装硬件选项：您可以使用它们驱动小风扇、举起物体或模拟时钟指针。

##  演示项目
---
###  1. 一杯花朵

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/A_Cup_of_Flower.jpg)

**描述**

您想要一杯花朵来缓解疲惫的心情吗？这个项目由 Grove – LED 和一个 Grove – 触摸传感器组成。当触摸传感器被触摸时，那些可爱的 LED 将为您照亮温暖舒适的光效。

**材料清单**

<dl>
  <dd>1. Arduino x 1;</dd>
  <dd>2. Grove – Base Shield x 1;</dd>
  <dd>3. Grove – LED x 6;</dd>
  <dd>4. Grove – 触摸传感器 x 1;</dd>
  <dd>5. 6 x 6cm 彩纸 x 6;</dd>
  <dd>6. 9V 电池 &amp; 9V 电池夹 x 1。</dd>
</dl>

:::note
    LED 的数量是任意的。基础套件中包含三个。但您可以根据杯子的容量增加或减少。我这里有一个大杯子，所以我从我们的网站上又添加了三个。
:::
**步骤**

**1. 折叠花蕾 **

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Fold_the_buds.jpg)

选择一个您喜欢的花朵图案并按照其步骤创建一些。Google 搜索可能会在寻找图案方面有很大帮助。互联网上有很多折纸爱好者和艺术家愿意分享他们的手工作品。

我在这里选择了郁金香，但向日葵、玫瑰和百合也很不错！

折叠花蕾时，您需要在底部留一个小孔，让 Grove 线缆穿过。

**2. 设置 **


![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Set_up.jpg)


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
**3. 通电 &amp; 安置**


![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Battery.jpg)


使用便携式 9V 电池为花朵供电，并将其安置在杯子中。完成！享受您的花朵杯吧！

###   2. 你好吗！

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/How_you_doing.jpg)

(下载自 think.bigchief.it)

**描述**

您如何向朋友打招呼？Big Chief 会说"还有什么比握手更好的呢？"当这些 Big Chief 纸玩具中的一个靠在另一个的背上时，它们会摇动来打招呼！
**材料清单**

<dl>
  <dd>1. Arduini x 1;</dd>
  <dd>2. Grove – Base Shield x 1;</dd>
  <dd>3. Grove – 磁性开关 x 1;</dd>
  <dd>4. Grove – 振动器 x 1;</dd>
  <dd>5. 纸玩具 x 2;</dd>
  <dd>6. 磁铁 x 1;</dd>
  <dd>7. 9V 电池 &amp; 9V 电池夹 x 1。</dd>
</dl>

**注意：** LED的数量是任意的。基础套件中包含三个LED。但你可以根据杯子的容量增加或减少LED数量。我这里有一个大杯子，所以我从我们的网站上又添加了三个。

**步骤**

**1. 打印出来！**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Print_it_out.jpg)

从网上选择一个你喜欢的图案。确保有足够的空间放置磁铁或磁性开关以及振动器。与上面的折纸花一样，你可以在网上找到大量的图案。

**2. 填充器官**

切割纸质玩具时要专注。只有这样你才能得到一个整洁的作品。之后，是时候给它们填充一些器官了。
我在大酋长A（我们就这样称呼它！）的背面贴了一个磁铁。我用双面胶带把它粘在那里。

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Stuck1.jpg)

对于大酋长B，我在它的背面贴了一个磁性开关，位置与A相同，并在它的脚部贴了一个振动器。

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Stuck2.jpg)

**3. 粘合它们**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Stuck3.jpg)

仔细按照打印纸上的说明操作。将Grove线缆插入我们在大酋长B中使用的两个Grove模块。然后你将得到两个如上所示的可爱纸质玩具。

**4. 上传程序**

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Stuck4.jpg)

将下面的代码上传到你的Arduino。通过这样做，你给它们带来了生命。
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

##   特性
---
*   **标准化** – 可扩展的拼图形状，统一的4针连接器，螺丝孔网格，边缘焊盘，减少重复开发，在不同项目中重复使用以减少环境影响

*   **紧凑** – 尺寸从2cm*2cm开始，无缝组合，表面贴装元件，2.0mm间距线缆

*   **友好** – 易于扣合连接，防呆设计，多种扩展模式，开放DIY，提供库和演示代码

*   **丰富** – 从基础（按钮、LED）到专业传感器（陀螺仪、指南针）的大量常用电路选择，根据需求持续添加，第三方贡献，可重复使用

*   **基于社区** – 通过投票满足需求，民主化设计，项目和配方分享，利润分享商业模式，租赁和重复使用


## 常见问题

**Q1: 这个套件能与Intel Galileo Gen 1开发板一起使用吗？**
     
A1: 是的，你可以在Intel Galileo Gen1/Gen2开发板和Edison for Arduino上使用这个套件。

**Q2: Grove - RGB LCD背光没有显示任何内容，但背景颜色工作正常。**

A2: 请检查电源开关（3.3V/5V）是否在5V一侧。


##   资源
---
*   [原理图pdf](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/res/Grove-Starter_Kit_v3_sch_pdf.zip)

*   [原理图Eagle](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/res/Grove-Starter_Kit_Eagle.zip)

*   [Grove - 按钮源文件](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/res/Grove-Button_v1.0_Source_File.zip)

*   [Grove - LED源文件](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/res/Grove-LED_v1.0_Source_File.zip)

*   [Grove - 蜂鸣器源文件](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/res/Grove-Buzzer_v1.0_Source_File.zip)

*   [Grove - 旋转角度传感器源文件](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/res/Grove-Rotary_Angle_Sensor_v1.2.zip)

*   [Grove - 继电器源文件](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/res/Grove-Relay_v1.2_Eagle.zip)

*   [底板扩展板源文件](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/res/Base_Shield_v2.zip)

*   [Grove - 声音传感器源文件](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/res/Grove-Sound_Sensor_v1.3_eagle.zip)

*   [Grove - 蜂鸣器源文件](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/res/Grove-Buzzer_V1.1_eagle.zip)

我们在[geppetto](https://geppetto.seeedstudio.com/)中提供了这个部件，通过Seeed和Geppeto轻松进行模块化电子设计。立即构建。[geppetto.seeedstudio.com](https://geppetto.seeedstudio.com/)

##   致谢
我们要感谢 Rich Morin，他用更合适的语法和词汇修改了这份文档。

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