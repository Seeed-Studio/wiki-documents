---
description: 继电器扩展板 V2.0
title: 继电器扩展板 V2.0
keywords:
- Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Relay_Shield_V2
last_update:
  date: 2/16/2023
  author: jianjing Huang
---

<!-- ---
name: 继电器扩展板 V2.0
category: Discontinued
bzurl:
oldwikiname: Relay_Shield_V2.0
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/Relay-Shield_V2-0
sku: 103030003
tags:
--- -->

![](https://files.seeedstudio.com/wiki/Relay-Shield_V2.0/img/Relayshield_01.jpg)

继电器扩展板为控制大电流设备提供了解决方案，这些设备由于电流和电压限制无法通过Arduino的数字I/O引脚直接控制。

继电器扩展板具有四个高质量继电器，提供NO/NC接口，四个动态LED指示灯显示每个继电器的开/关状态，以及标准化的扩展板外形设计，可与Arduino/Seeeduino板或其他Arduino兼容板顺畅连接。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)
](https://www.seeedstudio.com/depot/relay-shield-v20-p-1376.html)

## 特性 ##

- 兼容Arduino Uno/Leonardo/Seeeduino；其他板子或微控制器可通过跳线连接

- 通过数字I/O引脚4、5、6和7进行接口连接

- 继电器螺丝端子

- 标准化扩展板形状和设计

- 每个继电器的LED工作状态指示灯

- 高质量继电器

- 每个继电器都有COM、NO（常开）和NC（常闭）继电器引脚

## 规格参数 ##

|  项目|最小值|典型值|最大值|单位 |
|---|---|---|---|---|
|   供电电压|4.75| 5|5.25|VDC |  
| 工作电流|8|/|250|mA  |
| 开关电压|/|/|35|VDC  |
|   开关电流|/|/| 8| A|
|  频率|/|1|/|HZ |
| 开关功率|/|/|70|W  |
|  继电器寿命|100,000|/|/|次 |
| ESD接触放电|±4|||KV  |
| ESD空气放电|±8|||KV  |  
| 尺寸|68.7X53.5X30.8|||mm  |  
| 净重|55±2|||g|

:::note

- 在[Arduino的]USB连接器顶部放置2层电工胶带。这将防止继电器扩展板与其接触。
- 请勿操作超过35V DC的电压。
:::

## 扩展板接口说明 ##

![](https://files.seeedstudio.com/wiki/Relay-Shield_V2.0/img/Relays-Shield-PCB-Explained-real.png)

继电器扩展板V2.0端子连接说明

- 数字引脚4 – 控制RELAY4的COM4引脚（位于J4）

- 数字引脚5 – 控制RELAY3的COM3引脚（位于J3）

- 数字引脚6 – 控制RELAY2的COM2引脚（位于J2）

- 数字引脚7 – 控制RELAY1的COM1引脚（位于J1）

J1接口/端子引脚说明：

- **COM1（公共引脚）：** 由数字引脚控制的继电器引脚。

- **NC1（常闭）：** 当RELAY1控制引脚（数字7 I/O引脚）设置为低电平时，此端子将连接到COM1，当RELAY1控制引脚设置为高电平时断开连接。

- **NO1（常开）：** 当RELAY1控制引脚（数字7 I/O引脚）设置为高电平时，此端子将连接到COM1，当RELAY1控制引脚设置为低电平时断开连接。

**端子J2-4与J1类似，只是它们分别控制RELAY2-RELAY4。**

**注意：** 只需要四个Arduino数字I/O引脚（引脚4-7）来控制四个不同的继电器。此外，还需要5V和两个GND Arduino引脚来为继电器扩展板供电。

## 继电器工作原理 ##

继电器基本上是电磁开关：当控制电路给继电器通电时（即对线圈施加电压和电流），电流和线圈产生磁场，能够将COM端子吸引到NO端子，当控制电路移除施加的电压和电流时，COM端子由于机械力（通常是弹簧）的作用返回接触NC端子。

一些实际的继电器应用包括：用低电压控制高电压、电机控制、远程控制、防听报警、自动温度报警、孵化器等等。

下面显示了一个使用一个继电器和一个电机的电机控制应用：

![](https://files.seeedstudio.com/wiki/Relay-Shield_V2.0/img/Low_Level_Control4.jpg)
电机目前没有运行，因为从电源到电机没有连接。控制电路没有给继电器通电，所以COM端子没有被吸引到NO端子

![](https://files.seeedstudio.com/wiki/Relay-Shield_V2.0/img/High_Level_Control3.jpg)
电机正在运行，因为它与电源的+和-端子接触。控制电路正在给继电器通电，其磁力已将COM端子吸引到NO端子。

在继电器扩展板的情况下，四个继电器中每个继电器的两个"控制电路"端子仅由一个Arduino数字I/O引脚控制。引脚4、5、6和7分别控制继电器4、3、2和1。

## 入门指南 ##

现在您知道了继电器的内部工作原理，让我们向您展示如何使用继电器扩展板。

### 示例 #1：直流电机控制 ###

1.将继电器扩展板堆叠到Arduino开发板上。

2.使用USB电缆将Arduino连接到PC。

3.我们将使用RELAY3来控制直流电机。按照下面的原理图和图示连接直流电机和继电器扩展板：

![](https://files.seeedstudio.com/wiki/Relay-Shield_V2.0/img/Motor-shield-schematic-drawing.png)
电机和继电器扩展板原理图

![](https://files.seeedstudio.com/wiki/Relay-Shield_V2.0/img/Relay_Shield_Connector.jpg)
带有继电器扩展板的Arduino板，以及连接到继电器扩展板的电机

**注意：** 上图中的外部电源可以是电池或电源。外部电源必须能够提供足够的电流并设置为电机的正确电压。在我们的测试中，我们使用锂电池作为电机的外部电源。

4.启动Arduino IDE并将以下代码上传到Arduino板：

```cpp
int MotorControl = 5;    // Digital Arduino Pin used to control the motor

// the setup routine runs once when you press reset:
void setup()  {
    // declare pin 5 to be an output:
    pinMode(MotorControl, OUTPUT);
}

// the loop routine runs over and over again forever:
void loop()  {
    digitalWrite(MotorControl,HIGH);// NO3 and COM3 Connected (the motor is running)
    delay(1000); // wait 1000 milliseconds (1 second)
    digitalWrite(MotorControl,LOW);// NO3 and COM3 Disconnected (the motor is not running)
    delay(1000); // wait 1000 milliseconds (1 second)
}
```

当您将代码上传到Arduino/Seeeduino板后，电机应该运行一秒钟，停止一秒钟，然后无限重复这个过程。当电机运行时（NO3和COM3连接），NO3 LED指示灯将点亮。

### 示例 #2：如何在一个Arduino/Seeeduino板上使用多个继电器扩展板 ###

由于继电器扩展板使用Arduino上的数字引脚来控制每个继电器，因此可以在同一个Arduino板上使用多个继电器扩展板，只需按照以下步骤操作：

1.将其中一个继电器扩展板（我们称之为继电器扩展板#1）堆叠到Arduino开发板上

2.使用跳线/导线将另一个继电器扩展板（我们称之为继电器扩展板#2）连接到继电器扩展板#1，如下图所示：

![](https://files.seeedstudio.com/wiki/Relay-Shield_V2.0/img/Two-relay-shields-one-arduino.png)
双继电器扩展板配一个Arduino板原理图。

- 继电器扩展板#1的GND引脚连接到继电器扩展板#2的GND引脚

- 继电器扩展板#1的5V引脚连接到继电器扩展板#2的5V引脚

- 继电器扩展板#1的数字引脚8、9、10和11分别连接到继电器扩展板#2的数字引脚7、6、5和4。

3. 现在您可以使用Arduino的8、9、10和11数字I/O引脚控制继电器扩展板#2中的继电器1、2、3和4。请参阅下面的示例代码来控制继电器扩展板#2中的RELAY1：

```
int relay1inShield2 =8;// Digital Arduino Pin 8 is used to control relay 1 in Relay Shield #2

//the setup routine runs once when you press reset:
voidsetup(){
pinMode(relay1inShield2, OUTPUT);// declare pin 8 to be an output:
}

// the loop routine runs over and over again forever:
voidloop(){
digitalWrite(relay1inShield2,HIGH); // relay is energized (NO is connected to COM)
delay(1000);// wait 1000 milliseconds (1 second)
digitalWrite(relay1inShield2,LOW); // NO is disconnected from COM
delay(1000); // wait 1000 milliseconds (1 second)}
```

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Relay-Shield_V2.0/res/Relay_Shield_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源 ##

- **[EAGLE]**[继电器扩展板 EagleCAD 文件](https://files.seeedstudio.com/wiki/Relay-Shield_V2.0/res/Relay_Shield_eagle.zip)
- **[PDF]**[继电器扩展板 PCB](https://files.seeedstudio.com/wiki/Relay-Shield_V2.0/res/Relay%20shield%20PCB.pdf)
- **[PDF]**[继电器扩展板原理图](https://files.seeedstudio.com/wiki/Relay-Shield_V2.0/res/Relay%20shield%20sch.pdf)

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