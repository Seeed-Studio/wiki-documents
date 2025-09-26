---
description: Grove - Mixer Pack V2
title: Grove - Mixer Pack V2
keywords:
- grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Mixer_Pack_V2
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/U8GUZNb9TVZ14lLRW6ialXEV.jpg)

<!-- The [Grove - Mixer Pack V2](https://www.seeedstudio.com/depot/Mixer-Pack-V2Electronic-blockswithout-Arduinoplug-and-play-system-p-1867.html?cPath=14) is a stand-alone, Lego-like electronics kit that consists of 13 select Grove modules from the [ Grove System](/cn/Grove_System "GROVE System") developed by [Seeed Studio](https://www.seeedstudio.com/depot/). These mini-modules can be used as building blocks to create electronic circuits and prototypes quite rapidly without necessarily using a Microcontroller board such as a [Seeeduino](/cn/Seeeduino "Seeeduino") or an [ Arduino](/cn/Arduino "Main Page"). -->

包含的13个Grove模块是传感器模块、执行器、逻辑和电源模块的组合，使用极其简单且有趣。在几分钟内，您就可以设计新电路并组装功能原型。

通过连接不同的输入和输出模块，可以制作各种项目。例如，声音或光传感器可以用作输入来触发输出，如点亮LED或激活小型直流电机电路。逻辑门模块可以为输入触发输出的逻辑增加更多灵活性。

这些模块是小巧多彩的电子元件，对儿童和成人来说都非常有趣。

使用[Grove - Mixer Pack V2](https://www.seeedstudio.com/depot/Mixer-Pack-V2Electronic-blockswithout-Arduinoplug-and-play-system-p-1867.html?cPath=14)，您可以轻松学习电子学的基本概念，同时提高应用这些概念的实践能力。这是通过制作您自己的交互式项目进入精彩电子世界的完美方式。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Mixer-Pack-V2-(Electronic-blocks%2Cwithout-Arduino%2Cplug-and-play-system)-p-1867.html)

## 开箱

**打开这个Grove混合包，您会发现以下物品：**

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Mixer_v2_photo-2-.jpg)


- **[混合手册](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/res/Mixer_Handbook.pdf)**，帮助您快速开始项目。其中包括包装中所有Grove模块的基本信息，并向您展示如何构建一些示例项目。

- **13个Grove模块：**

<!-- 1.  1x [Grove - DC Jack Power](/cn/Grove-DC_Jack_Power "Grove - DC Jack Power")

2.  1x [Grove - Recorder](/cn/Grove_Recorder "Grove - Recorder")

3.  1x [Grove - LED 串灯](/cn/Grove-LED_String_Light "Grove - LED 串灯")

4.  1x [Grove - 迷你风扇](/cn/Grove-Mini_Fan "Grove - 迷你风扇")

5.  1x [Grove - NOT](/cn/Grove-NOT "Grove - NOT")

6.  1x [Grove - OR](/cn/Grove-OR "Grove - OR")

7.  1x [Grove - AND](/cn/Grove-AND "Grove - AND")

8.  1x [Grove - Buzzer](/cn/Grove-Buzzer "Grove - Buzzer")

9.  1x [Grove - 光线传感器](/cn/Grove-Light_Sensor "Grove - 光线传感器")

10。1x [Grove - 红色 LED](/cn/Grove-Red_LED "Grove - 红色 LED")

11。 1x [Grove - 声音传感器](/cn/Grove-Sound_Sensor "Grove - 声音传感器")

12。 1x [Grove - 滑动电位器](/cn/Grove-Slide_Potentiometer "Grove - 滑动电位器")

13.  1x [Grove - Button](/cn/Grove-Button "Grove - Button") -->

*   **Grove模块配件：**

<!-- 1.  1x DC 电机可与 [Grove - 迷你风扇](/cn/Grove-Mini_Fan "Grove - 迷你风扇")模块配合使用

2.  1x Colorful Fan that fits onto the DC Motor

3.  1x 小型音频扬声器，可与 [Grove - 录音机](/cn/Grove_Recorder "Grove - 录音机")模块配合使用

4.  1x LED 灯串以配合 [Grove - LED 灯串](/cn/Grove-LED_String_Light "Grove - LED 灯串")模块使用

5.  7x [Grove 线缆](/cn/Grove_System/#grove-cables "GROVE 系统") (3x 200mm，3x 50mm，1x 分支线缆) -->

## 使用方法

使用混合套装中的Grove模块构建Grove电路非常简单。

所有电路都是通过组合以下四种类型的模块来构建的：

1. 电源模块
 这些模块为电路提供电源。[Grove混合套装V2](https://www.seeedstudio.com/depot/Mixer-Pack-V2Electronic-blockswithout-Arduinoplug-and-play-system-p-1867.html?cPath=14)包含1个电源模块 - Grove - DC插孔电源。无论您要构建什么，您都需要使用这个模块。

2. 输入模块
 这些模块通常用于将感官输入传递到电路中。[Grove混合套装V2](https://www.seeedstudio.com/depot/Mixer-Pack-V2Electronic-blockswithout-Arduinoplug-and-play-system-p-1867.html?cPath=14)有4个输入模块 - 光传感器、声音传感器、滑动电位器和瞬时开关。基于从这些模块接收到的输入，您可以选择使用输出模块触发一个动作。

3. 输出模块
 来自输入模块的触发器可以使用输出模块转换为动作。[Grove混合套装V2](https://www.seeedstudio.com/depot/Mixer-Pack-V2Electronic-blockswithout-Arduinoplug-and-play-system-p-1867.html?cPath=14)有5个输出模块 - LED灯、LED灯串、录音器、风扇电机和蜂鸣器。

4. 逻辑门模块
 这些模块与输入模块结合使用，可以用来增强触发特定输出的逻辑。[Grove混合套装V2](https://www.seeedstudio.com/depot/Mixer-Pack-V2Electronic-blockswithout-Arduinoplug-and-play-system-p-1867.html?cPath=14)有3个逻辑门模块 - 分别用于AND、OR和NOT门功能。


### 构建您的第一个电路

您可以通过3个简单步骤使用Grove模块构建Grove电路：

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Grove-concept-3.jpg)


**按照以下步骤顺序使用Grove模块构建Grove电路：**

步骤1 - 将电源模块连接到电源
 首先，将可靠的电源连接到电源模块。您可以使用9V电池，通过套装附带的9V电池连接线连接到Grove - DC插孔电源模块。或者，您可以使用常见的墙式电源适配器，如用于手机充电的5V/1A适配器。将Grove电源模块连接到电源后，将模块上的开/关开关转到开启位置。电源模块板上的绿色LED应该亮起。如果没有发生这种情况，请仔细检查您的连接和电源。如果绿色LED亮起，这意味着您有一个可靠的工作电源。现在将开关转回关闭位置，然后进行下一步。

步骤2 - 将输入模块连接到电源模块
 使用4针Grove线缆，将您希望为电路选择的输入模块连接到电源模块。将电源模块放在您面前，将输入模块放在电源模块的左侧。然后使用4针Grove线缆，将一端插入输入模块，另一端插入电源模块的左侧Grove连接器。例如，要使用瞬时开关来开启和关闭LED，请使用4针Grove线缆将Grove - 按钮模块连接到电源模块的左侧。
输入模块可以直接连接到电源模块，也可以通过逻辑门模块连接。

步骤3 - 将输出模块连接到电源模块
使用4针Grove线缆，将您希望为电路选择的输出模块连接到电源模块。将电源模块放在您面前，输入模块已经连接到电源模块的左侧。然后使用4针Grove线缆，将一端插入输出模块，另一端插入电源模块的右侧Grove连接器。例如，要构建一个点亮LED的电路，请使用Grove线缆将Grove - 红色LED模块连接到电源模块的右侧。
输出模块总是以这种方式直接连接到电源模块。


![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Grove-step1.jpg)

- 步骤1

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Grove-step2.jpg)

- 步骤2

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Grove-step3.jpg)

- 步骤3

<!-- You now have completed building your Grove circuit. Turn back ON the ON/OFF switch on the [Grove - DC Jack Power](/cn/Grove-DC_Jack_Power "Grove - DC Jack Power") module now and watch your circuit come alive! -->

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Grove-momentarySwitch-RedLED.jpg)

按下瞬时开关点亮LED


### 使用逻辑门模块

逻辑门模块可以用来增强逻辑，基于这些逻辑，一个输入模块或一组输入模块可以用来触发所需的输出。它们通常放置在Grove电路中的输入模块和电源模块之间。

有三种类型的逻辑门模块：

#### Grove - NOT模块

这是所有逻辑门模块中最简单的，连接到一个输入模块。它简单地获取输入模块生成的信号并将其反转。来自输入模块的高电平信号被转换为低电平信号。来自输入模块的低电平信号被转换为传向输出模块的高电平信号。

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Grove-LightSensorNOT-RedLED-ON.jpg)

<!-- Using [Grove - NOT](/cn/Grove-NOT "Grove - NOT") logic gate -->

典型用法：_ 基于[LDR](https://en.wikipedia.org/wiki/Photoresistor)的光传感器模块，如Grove - 光传感器，在明亮光线下产生HIGH信号，在黑暗中产生LOW信号。因此，它可以用来在明亮光线下点亮LED，在黑暗中关闭LED。但是，您可能需要一个在黑暗中LED灯点亮，在明亮光线下保持关闭的电路。这可以通过在Grove - 光传感器输入模块和Grove - DC插孔电源模块之间添加一个Grove - NOT模块来实现。使用NOT门时，您会观察到在明亮光线下，当LDR表现出低电阻且光传感器模块产生的信号为HIGH时，NOT门将其反转为LOW信号，LED灯在明亮光线下**不再**点亮。另外，当环境黑暗且LDR表现出高电阻，光传感器模块产生的信号为LOW时，NOT门将LOW信号转换为HIGH信号，导致LED灯在黑暗中点亮。


#### Grove - OR模块

该模块可以连接两个输入模块。其目的是当连接到它的两个输入模块中至少有一个提供HIGH信号时产生HIGH信号。如果从两个输入模块接收到的信号都是LOW，OR门向输出模块提供LOW信号。

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Grove-or-usage.jpg)

<!-- Using [Grove - OR](/cn/Grove-OR "Grove - OR") logic gate -->

<!-- Typical Usage:_ Use this when you need one of two sensory inputs to trigger an output. For example, lets say you want to build a circuit that lights up some LED lights either on music OR when you manually switch them on. To build such a circuit, you will need two input modules - the [Grove - Sound Sensor](/cn/Grove-Sound_Sensor "Grove - Sound Sensor") and the [Grove - Slide Potentiometer](/cn/Grove-Slide_Potentiometer "Grove - Slide Potentiometer"). These two input modules can then be connected to the left-side of the [Grove - OR](/cn/Grove-OR "Grove - OR") gate module. The output from this logic gate module will connect to the left-side of the power module, while the right-side will be connected to the LED lights module ([Grove - Red LED](/cn/Grove-Red_LED "Grove - Red LED") or [Grove - LED String Light](/cn/Grove-LED_String_Light "Grove - LED String Light")). Now, when you switch ON the circuit, observe what happens. You will see that the LED lights turn ON either when there is some sound or music that is detected by the sound sensor OR when you manually move the slider on the [Grove - Slide Potentiometer](/cn/Grove-Slide_Potentiometer "Grove - Slide Potentiometer") from minimum voltage (GND) to maximum (VCC). This also implies that if the [Grove - Slide Potentiometer](/cn/Grove-Slide_Potentiometer "Grove - Slide Potentiometer") is supplying a HIGH signal to the LED lights, then no matter what the input from the sound sensor is, the LED lights will always stay ON. Alternatively, if the [Grove - Slide Potentiometer](/cn/Grove-Slide_Potentiometer "Grove - Slide Potentiometer") is supplying a LOW signal to the LED lights, then the LED lights will flash based on whether the output from the sound sensor is HIGH or LOW. -->


#### Grove - AND模块

该模块可以连接两个输入模块。其目的是仅当连接到它的两个输入模块都提供HIGH信号时才产生HIGH信号。如果从两个输入模块中任何一个接收到的信号是LOW，AND门向输出模块提供LOW信号。

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Grove-and-usage.jpg)

<!-- 使用 [Grove - AND](/cn/Grove-AND "Grove - AND") 逻辑门

Typical Usage:_ Use this when you need two sensory inputs to trigger an output. For example, lets say you want to build a circuit that lights up some LED lights either on music but only in the dark. To build such a circuit, you will need two input modules - the [Grove - Sound Sensor](/cn/Grove-Sound_Sensor "Grove - Sound Sensor") and the [Grove - Light Sensor](/cn/Grove-Light_Sensor "Grove - Light Sensor") (The [Grove - Light Sensor](/cn/Grove-Light_Sensor "Grove - Light Sensor") module will be used in conjunction with the [Grove - NOT](/cn/Grove-NOT "Grove - NOT") logic gate so that lights switch ON only in the dark). These input side modules can then be connected to the left-side of the [Grove - AND](/cn/Grove-AND "Grove - AND") gate module. The output from this logic gate module will connect to the left-side of the power module, while the right-side will be connected to the LED lights module ([Grove - Red LED](/cn/Grove-Red_LED "Grove - Red LED") or [Grove - LED String Light](/cn/Grove-LED_String_Light "Grove - LED String Light")). Now, when you switch ON the circuit, observe what happens. You will see that the LED lights turn ON when it is both dark AND there is some sound or music playing. This also implies that even if the [Grove - Sound Sensor](/cn/Grove-Sound_Sensor "Grove - Sound Sensor") is supplying a HIGH signal to the LED lights when it detects sound or music, then unless the [Grove - Light Sensor](/cn/Grove-Light_Sensor "Grove - Light Sensor") detects darkness, the LED lights will always stay OFF. Only when it is dark AND there is sound or music detected by the sound sensor will the LED lights will flash. -->

## Grove 模块详情

### Grove - DC 插孔电源

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Power_photo1.jpg)

Grove - DC 插孔电源模块为混音包中的所有其他模块供电。可以通过标准圆柱形 DC 插头连接电源。电源可以是 9V 电池或任何 5.5-20V 墙式适配器。该模块在宽输入电源范围内可实现 2A 连续输出电流，具有出色的负载和线路调节能力。

### Grove - 录音机

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Recoder_photo1.jpg)

Grove - 录音机模块可以录制 8-20 秒的音频并播放。默认录制时间为 10 秒。该模块使用非易失性存储，这意味着录制的声音或音频在模块关闭时不会丢失。它保持存储在内存中，当模块重新开启时，可以再次播放相同的声音或音频。该模块非常易于控制 - 只需按下板载按钮即可录制，并连接包装中包含的扬声器即可听到播放。

### Grove - LED 灯串

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/RGB_String_photo1.jpg)

Grove - LED 灯串模块本质上是混音包中包含的 LED 灯串的 LED 驱动器。模块的工作电压为 3.3V/5V，但灯串需要 12V 输入。因此，该模块使用升压 DC-DC 转换器来提供点亮 LED 灯串所需的电压。配套的 LED 灯串是一条 5 米长的 RGB LED 灯串，您可以用它来装饰圣诞树或装饰家中的一部分。

### Grove - 迷你风扇

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Mini_Fan_photo1.jpg)

Grove - 迷你风扇模块是基于 AVR Atmega168 微控制器的 DC 电机驱动器。它可以用来运行混音包中包含的 DC 电机。包装中还包含的软叶风扇可以连接到电机上，制作有趣的儿童项目。由于是软叶，风扇完全安全，没有任何受伤的可能。对于高级项目，该模块上的微控制器也可以重新编程来运行伺服电机。

### Grove - NOT

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/NOT_photo1.jpg)

Grove - NOT 模块提供逻辑非门的功能。NOT 模块左侧有一个输入，右侧有一个输出。当模块的输入信号为高电平时，输出为低电平。当模块的输入信号为低电平时，输出为高电平。

### Grove - OR

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Mixer_v2.0_OR.jpg)

Grove - OR 模块提供逻辑或门的功能。它左侧有两个输入，右侧有一个输出。当两个输入中的任何一个接收到高电平信号时，这个逻辑或门模块的输出变为高电平。

### Grove - AND

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/AND_photo1.jpg)

Grove - AND 模块提供逻辑与门的功能。它左侧有两个输入，右侧有一个输出。只有当两个输入都接收到高电平信号时，这个逻辑与门模块的输出才变为高电平。

### Grove - 蜂鸣器

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Buzzer1.jpg)

Grove - 蜂鸣器模块以压电蜂鸣器作为主要组件。压电器可以连接到数字输出，当输出为高电平时会发出音调。或者，它可以连接到模拟脉宽调制输出以产生各种音调和效果。

### Grove - 光传感器

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Grove-Light_Sensor_photo.jpg)

<!-- The [Grove - Light Sensor](/cn/Grove-Light_Sensor "Grove - Light Sensor") module incorporates a Light Dependent Resistor (LDR). Typically, the resistance of the light sensor will decrease when the ambient light intensity increases. -->

### Grove - 红色 LED

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Grove-LED_Photo.jpg)

<!-- The [Grove - Red LED](/cn/Grove-Red_LED "Grove - Red LED") module is similar to the Grove - LED module in that it houses an LED light source. In addition, it also has a potentiometer on-board to manage the input voltage to the LED and to adjust its brightness. The module also has mounting holes for the LED and the LED is not soldered onto the PCB. This means you can remove the Red LED that comes with the mixer pack and use any other LED of any other color or size as well. You can also use this module to add a pilot lamp for indicating power or signal presence for [Arduino](/cn/Arduino "Arduino") or [Seeeduino](/cn/Seeeduino "Seeeduino") based projects. -->

### Grove - 声音传感器

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Grove-Sound_Sensor_photo1.jpg)

<!-- The [Grove - Sound Sensor](/cn/Grove-Sound_Sensor "Grove - Sound Sensor") module is based on using a simple [electret microphone](https://en.wikipedia.org/wiki/Electret_microphone) microphone as a sound sensor. It can be used to detect the sound strength of the environment. -->

### Grove - 滑动电位器

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Sliding1.JPG)

Grove - 滑动电位器模块集成了一个总阻值为 10KΩ 的线性可变电阻器。当您将滑杆从一侧移动到另一侧时，其输出电压将从 0 V 变化到您施加的 Vcc。它通过标准 4 针 Grove 电缆连接到其他 Grove 模块。其中三个引脚连接到 OUT（引脚 1）、Vcc（引脚 3）和 GND（引脚 4），而第四个引脚（引脚 2）连接到绿色指示 LED。LED 用于直观地表示电位器上的电阻变化。

### Grove - 按钮

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Button1.jpg)

这个包装中包含的 Grove - Button 模块是来自 [Seeed Studio](https://www.seeedstudio.com) 的 Grove - Button 模块的新版本。它包含一个独立的"瞬时开/关"按钮。"瞬时"意味着按钮在释放后会自动回弹。按钮在按下时输出高电平信号，释放时输出低电平信号。按钮向 Grove 接口的 SIG 引脚发送信号，而 NC 引脚完全不使用。

## 示例项目

Grove Mixer Pack 模块和配件可用于构建许多有趣的项目。您随包装收到的 [Mixer Handbook](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/res/Mixer_Handbook.pdf) 中也提供了一些可以制作的项目示例。下面也列出了一些项目。

## 光敏 LED

<!-- *   Part list:

        *   1x [Grove - DC Jack Power](/cn/Grove-DC_Jack_Power "Grove - DC Jack Power")

        *   1x [Grove - 光线传感器](/cn/Grove-Light_Sensor "Grove - 光线传感器")

        *   1x [Grove - 红色 LED](/cn/Grove-Red_LED "Grove - 红色 LED") -->

**按照这些逐步图形说明来构建您的项目：**

1.排列您电路所需的模块

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Mixer_v2.0_usage1.jpg)

2.使用 4 针 Grove 电缆连接模块

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Mixer_v2.0_usage2.jpg)

3.测试电路

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Mixer_v2.0_usage3.jpg)

## 夜光串灯

**零件清单：**

<!-- - 1x [Grove - DC Jack Power](/cn/Grove-DC_Jack_Power "Grove - DC Jack Power")

- 1x [Grove - 光线传感器](/cn/Grove-Light_Sensor "Grove - 光线传感器")

- 1x [Grove - NOT](/cn/Grove-NOT "Grove - NOT")

- 1x [Grove - LED 串灯](/cn/Grove-LED_String_Light "Grove - LED 串灯")模块以及LED串灯 -->

**按照这些逐步图形说明来构建您的项目：**

1.排列您电路所需的模块

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Mixer_v2.0_usage4.jpg)

2.使用 4 针 Grove 电缆连接模块并通电

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Mixer_v2.0_usage5.jpg)

3.测试电路

![](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/img/Mixer_v2.0_usage6.jpg)

## 其他项目创意


以下是您可以尝试的其他一些项目：

1.  **随音乐闪烁的灯光**
_提示：_ 使用声音传感器和 LED 串灯的组合。您能让灯光与音乐同步闪烁吗？如果您演奏钢琴等乐器，看看您演奏时灯光如何响应。

2.  **仅在黑暗中随音乐闪烁的灯光**
_提示：_ 使用声音和光线传感器与 LED 串灯的组合。您能猜出需要与这 2 个传感器一起使用哪些逻辑门模块吗？您需要两个！

3.  **为您的自行车头盔添加 LED 灯**
_提示：_ 此电路与上面显示的光敏灯项目相同。使用 9V 电池让您的项目便携！

4.  **使用压电蜂鸣器作为自行车喇叭**
<!-- _提示：_ 按下按钮发出尖锐的喇叭声！使用 9V 电池让您的项目便携。探索当您用 [Grove - Slide Potentiometer](/cn/Grove-Slide_Potentiometer "Grove - Slide Potentiometer") 替换 [Grove - Button](/cn/Grove-Button "Grove - Button") 时会发生什么。 -->

5.  **成为间谍！**
_提示：_ 使用录音机秘密录制某人的声音并播放给他们听。
6.  **在上学前为妈妈留下爱的留言**
_提示：_ 像上面的项目一样使用录音机。这次，用您自己的声音为您爱的人（妈妈、爸爸、兄弟姐妹...任何人）录制您最喜欢的留言，让他们知道当您不在时可以自己播放！

7.  **修复旧的坏掉的玩具电动车**
_提示：_ 您有旧的电动玩具车停止工作了吗？很可能它的电机运行良好，是其他地方出了问题。看看您能否打开玩具并取出连接到车轮的电机，使用 Grove - Mini Fan 模块为其供电。尝试使用 9V 电池供电，使用滑动电位器调节速度。

8.  **可变速个人风扇**
_提示：_ 这很简单，不需要提示 ;) 用这个让自己免受炎热之苦！

## 可用性
---
可在 [SeeedStudio Bazaar](https://www.seeedstudio.com/depot/) 购买：

*   [购买 Grove 混合套装 V2](https://www.seeedstudio.com/depot/Mixer-Pack-V2Electronic-blockswithout-Arduinoplug-and-play-system-p-1867.html?cPath=14)


## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/res/Mixer_Pack_v2_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


# 资源

*   [Grove 混合套装 V2 Grove - 模块原理图 (pdfs zip)](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/res/Mixer_Pack_v2_sch_pdf.zip)

*   [Grove 混合套装 V2 Grove - 模块原理图 (Eagle 文件 zip)](https://files.seeedstudio.com/wiki/Grove-Mixer_Pack_V2/res/Mixer_Pack_v2_Eagle.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在此为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>