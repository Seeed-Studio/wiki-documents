---
description: Grove - 圆形力传感器 FSR402
title: Grove - 圆形力传感器 FSR402
keywords:
- Grove Grove_Sensors Touch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Round_Force_Sensor_FSR402
last_update:
  date: 1/19/2023
  author: jianjing Huang
---




![](https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/img/main.jpg)

Grove-圆形力传感器(FSR402)是一个力敏感模块。在传感器的末端有一个圆形力敏电阻，其阻值取决于施加在该电阻上的压力。
简单来说，压力越大，阻值越小。但是，该传感器的输出并非严格线性，因此我们不建议将其用于精确测量。有关压力-阻值图的更多详细信息，请查看
[FSR402 数据手册](https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/res/FSR402.pdf)

如您所见，该模块基于FSR402，Interlink Electronics FSR® 400系列是单区域力敏电阻®系列的一部分。力敏电阻，或FSR，是坚固的聚合物厚膜(PTF)器件，当施加在传感器表面的力增加时，其阻值会减小。这种力敏感性针对人机界面设备的使用进行了优化，包括汽车电子、医疗系统、工业控制和机器人技术。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Round-Force-Sensor-%28FSR402%29-p-3110.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 版本

| 产品版本  | 变更                                                                                               | 发布日期 |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove-圆形力传感器(FSR402) | 初始版本                                                                                               | 2018年6月      |

## 特性

- 模拟输出
- 可靠的机械结构  
- 高耐用性：

    经过1000万次激活测试，1kg，4Hz / -10%平均阻值变化

## 规格

|项目|值|
|---|---|
|工作电压|3.3V/5V|
|力敏感范围|0.2N--20N|
|力分辨率|连续(模拟)|
|模拟输出|0-650|
|非激活阻值|>10 MΩ|
|最小阻值|1 KΩ|
|器件上升时间|&lt;3 微秒|
|尺寸|长: 75mm 宽: 20mm 高: 11mm|
|重量|2.5g|
|包装尺寸|长: 140mm 宽: 90mm 高: 10mm|
|毛重|10g|

:::tip
如果您想测量非激活阻值，请从传感器上移除这个东西
:::

## 应用

- 汽车电子
- 医疗系统
- 工业控制
- 机器人技术

## 硬件概述

### 引脚图

![](https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/img/pin_map.jpg)

### 原理图

![](https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/img/hardware.png)

该模块使用DC-DC芯片XC6206P332MR提供稳定的3.3V，如您所见，我们称之为3V3。您可以将力传感器**J1**视为可变电阻，我们称之为**R<sub>f<sub></sub></sub>**。压力越大，**R<sub>f<sub></sub></sub>**值越小。

上图中有两个部分，对于左侧部分：

<div style={{color:'#EE9A00',fontWeight:'bold',textAlign:'center',padding:'10px',backgroundColor:'var(--ifm-color-emphasis-100)',border:'1px solid var(--ifm-color-emphasis-300)',borderRadius:'5px',margin:'15px 0'}}>V<sub>IN</sub> = (3.3 × 30K) / (30K + R<sub>f</sub>)</div>

对于右侧部分，这是一个射极跟随器，我们使用放大器U1来隔离前级和后级电路。

<div style={{color:'#EE9A00',fontWeight:'bold',textAlign:'center',padding:'10px',backgroundColor:'var(--ifm-color-emphasis-100)',border:'1px solid var(--ifm-color-emphasis-300)',borderRadius:'5px',margin:'15px 0'}}>V<sub>out</sub> = V<sub>IN</sub></div>

因此，输出为：

<div style={{color:'#EE9A00',fontWeight:'bold',textAlign:'center',padding:'10px',backgroundColor:'var(--ifm-color-emphasis-100)',border:'1px solid var(--ifm-color-emphasis-300)',borderRadius:'5px',margin:'15px 0'}}>V<sub>out</sub> = (3.3 × 30K) / (30K + R<sub>f</sub>)</div>

:::tip
在本节中，我们只向您展示了部分原理图，完整文档请参考[资源](#resources)
:::

### 机械图纸

![](https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/img/Mechanical_A.jpg)
![](https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/img/Mechanical_B.jpg)
![](https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/img/Exploded_View.jpg)

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
上面提到的支持平台表示该模块的软件或理论兼容性。在大多数情况下，我们只为Arduino平台提供软件库或代码示例。我们无法为所有可能的MCU平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

## 入门指南

### 与Arduino一起使用

#### 硬件

**所需材料**

| Seeeduino V4.2 | Base Shield| Grove-圆形力传感器(FSR402) |Grove-LED|
|--------------|-------------|-----------------|--------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/img/thumbnail.jpg)|![](https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/img/Red%20LED.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Grove-Round-Force-Sensor-%28FSR402%29-p-3110.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Grove---Red-LED-p-1142.html" target="_blank">立即购买</a>|

:::note
 **1** 请轻轻插入USB线，否则可能会损坏端口。请使用内部有4根线的USB线，2根线的线缆无法传输数据。如果您不确定您的线缆，可以点击[这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)购买

**2** 每个Grove模块在购买时都会附带一根Grove线缆。如果您丢失了Grove线缆，可以点击[这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)购买。
:::

- **步骤1.** 将Grove-圆形力传感器(FSR402)连接到Grove-Base Shield的**A0**端口。

- **步骤2.** 将Grove-LED插入Grove-Base Shield的**D3**端口。

- **步骤3.** 将Grove - Base Shield插入Seeeduino。

- **步骤4.** 通过USB线将Seeeduino连接到PC。

![](https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/img/connect.jpg)

:::note
如果我们没有Grove Base Shield，我们也可以直接将此模块连接到Seeeduino，如下所示。
:::

| Seeeduino     | Grove-圆形力传感器(FSR402)|
|---------------|-------------------------|
| 5V            | 红色                     |
| GND           | 黑色                   |
| 未连接 | 白色                   |
| A0           | 黄色                  |

| Seeeduino     | Grove-LED|
|---------------|-------------------------|
| 5V            | 红色                     |
| GND           | 黑色                   |
| 未连接 | 白色                   |
| D3            | 黄色                  |

#### 软件

:::note
如果这是您第一次使用Arduino，我们强烈建议您在开始之前先查看[Arduino入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤1.** 打开Arduino IDE并创建一个新文件，然后将以下代码复制到新文件中。

```cpp
/* How to use a Force sensitive resistor to fade an LED with Arduino
   More info: http://www.ardumotive.com/how-to-use-a-force-sensitive-resistor-en.html
   Dev: Michalis Vasilakis // Date: 22/9/2015 // www.ardumotive.com  */

//Constants:
const int ledPin = 3;     //pin 3 has PWM funtion
const int sensorPin = A0; //pin A0 to read analog input

//Variables:
int value; //save analog value


void setup(){
    
  pinMode(ledPin, OUTPUT);  //Set pin 3 as 'output'
  Serial.begin(9600);       //Begin serial communication

}

void loop(){
  
  value = analogRead(sensorPin);       //Read and save analog value from potentiometer
  Serial.println(value);               //Print value
  value = map(value, 0, 1023, 0, 255); //Map value 0-1023 to 0-255 (PWM)
  analogWrite(ledPin,255-value);          //Send PWM value to led
  delay(100);                          //Small delay
  
}

```

- **步骤2.** 上传演示程序。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

- **步骤3.** 通过点击**工具-> 串口监视器**打开Arduino IDE的**串口监视器**。或者同时按下++ctrl+shift+m++键。如果一切正常，您将看到A0的输出。同时，当您更用力地按压圆形力传感器时，您会看到LED变得更亮。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/res/Grove-Round_Force_Sensor_FSR402.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]** [Grove-圆形力传感器(FSR402) eagle文件](https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/res/Grove-Round_Force_Sensor_FSR402.zip)
- **[Zip]** [Adafruit_NeoPixel-master](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/res/Adafruit_NeoPixel-master.zip)
- **[PDF]** [FSR402数据手册](https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/res/FSR402.pdf)

## 项目

这是本产品的介绍视频，包含简单的演示，您可以尝试一下。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/55WQ3ia52JM?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

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