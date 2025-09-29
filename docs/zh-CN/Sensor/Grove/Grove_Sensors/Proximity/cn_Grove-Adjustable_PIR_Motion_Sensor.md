---
title: Grove - 可调节PIR运动传感器
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-Adjustable_PIR_Motion_Sensor/
slug: /cn/Grove-Adjustable_PIR_Motion_Sensor
last_update:
  date: 01/05/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-Adjustable_PIR_Motion_Sensor/img/main.jpg)

Grove - 可调节PIR运动传感器是一个易于使用的被动红外运动传感器，可以检测到3米范围内的红外物体运动。当任何红外物体在其检测范围内移动时，传感器的SIG引脚输出高电平。您可以通过电位器将SIG高电平时间调节至130秒，此外，您还可以通过另一个电位器调节检测范围。

<iframe width={800} height={450} src="https://www.youtube.com/embed/EhZ7uDvoALE" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

<p style={{}}><a href="https://www.seeedstudio.com/Grove-Adjustable-PIR-Motion-Sensor-p-3225.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 版本

| 产品版本  | 变更                                                                                               | 发布日期 |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - 可调节PIR运动传感器 | 初始版本                                                                                               | 2018年9月      |

## 特性

- 内置滤波器，对射频干扰具有高抗扰性
- 输出时间、灵敏度和检测范围可调节
- 低电压、低功耗

## 规格参数

<div>
  |项目|数值|
  |---|---|
  |工作电压|3.3V / 5V|
  |工作温度|-30℃ ~ 70℃|
  |视角|水平放置 80°<br />垂直放置 55°|
  |检测光谱响应(λ)|5nm ~ 14nm|
  |检测距离|0 ~ 3m|
  |高电平持续时间| &lt;130s|
  |接口|数字|
  |尺寸|长: 40mm 宽: 20mm 高: 15mm|
  |重量|4.5g|
  |包装尺寸|长: 140mm 宽: 90mm 高: 15mm|
  |毛重|10g|
</div>

## 典型应用

- PIR运动检测
- 入侵检测
- 占用检测
- 运动感应灯
- 安防系统
- 自动控制

## 硬件概述

### 引脚定义

![](https://files.seeedstudio.com/wiki/Grove-Adjustable_PIR_Motion_Sensor/img/pinout.jpg)

![](https://files.seeedstudio.com/wiki/Grove-Adjustable_PIR_Motion_Sensor/img/pinout_back.jpg)

:::warning
  模块配备的菲涅尔透镜是塑料制品，禁止接近高温或明火。
:::

### 原理图

**电源**

![](https://files.seeedstudio.com/wiki/Grove-Adjustable_PIR_Motion_Sensor/img/11.jpg)

L221D的典型电压为3.3V，因此我们使用[XC6206P332MR](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/XC6206.pdf)芯片来提供稳定的3.3V电压。XC6206P33的输入范围为1.8V至6.0V，因此您可以在3.3V和5V下与Arduino一起使用此模块。

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    上述提到的支持平台是/是该模块软件或理论兼容性的指示。在大多数情况下，我们只为Arduino平台提供软件库或代码示例。不可能为所有可能的MCU平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

## 入门指南

### 与Arduino一起使用

#### 硬件

**所需材料**

| Seeeduino V4.2 | Base Shield |可调节PIR运动传感器 | Grove - 蓝色LED |
|--------------|-------------|-----------------|----|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Adjustable_PIR_Motion_Sensor/img/thumbnail.jpg)|![](https://files.seeedstudio.com/wiki/Grove-Adjustable_PIR_Motion_Sensor/img/led.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Grove-Adjustable-PIR-Motion-Sensor-p-3225.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Grove-Blue-LED-p-1139.html" target="_blank">立即购买</a>

:::note
    **1** 请轻轻插入USB线，否则可能会损坏端口。请使用内部有4根线的USB线，2根线的线缆无法传输数据。如果您不确定您拥有的线缆，可以点击[这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)购买

    **2** 每个Grove模块在购买时都配有一根Grove线缆。如果您丢失了Grove线缆，可以点击[这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)购买。
:::

- **步骤1.** 将Grove - 可调节PIR运动传感器连接到Grove-Base Shield的**D2**端口，将Grove - 蓝色LED连接到Grove-Base Shield的**D4**端口。

- **步骤2.** 将Grove - Base Shield插入Seeeduino。

- **步骤3.** 通过USB线将Seeeduino连接到PC。

![](https://files.seeedstudio.com/wiki/Grove-Adjustable_PIR_Motion_Sensor/img/connect.jpg)

:::note
        如果我们没有Grove Base Shield，我们也可以直接将此模块连接到Seeeduino，如下所示。
:::

| Seeeduino      |  Grove线缆       | Grove - 可调节PIR运动传感器 |
|--------------- |--------------------|-----|
| GND            | 黑色              | GND |
| 5V或3.3V     | 红色                | VCC |
| 无连接            | 白色              | NC |
| D2           | 黄色             | SIG |

| Seeeduino      |  Grove线缆       | Grove - 蓝色LED |
|--------------- |--------------------|-----|
| GND            | 黑色              | GND |
| 5V或3.3V     | 红色                | VCC |
| 无连接            | 白色              | NC |
| D4           | 黄色             | SIG |

#### 软件

:::note
        如果这是您第一次使用Arduino，我们强烈建议您在开始之前查看[Arduino入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤1.** 只需点击代码块右上角的图标![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg)，将以下代码复制到Arduino IDE的新草图中。

```cpp
/*PIR运动传感器引脚和LED引脚的宏定义*/
#define PIR_MOTION_SENSOR 2//使用引脚2接收来自模块的信号
#define LED 4//Grove - LED连接到Arduino的D4

void setup()
{
 pinsInit();
}

void loop() 
{
 if(isPeopleDetected())//是否检测到移动的人？
  turnOnLED();
 else
  turnOffLED();
}
void pinsInit()
{
 pinMode(PIR_MOTION_SENSOR, INPUT);
 pinMode(LED,OUTPUT);
}
void turnOnLED()
{
 digitalWrite(LED,HIGH);
}
void turnOffLED()
{
 digitalWrite(LED,LOW);
}
/***************************************************************/
/*功能：检测是否有人在其检测范围内移动*/
/*返回：-布尔值，true表示检测到有人。*/
boolean isPeopleDetected()
{
 int sensorValue = digitalRead(PIR_MOTION_SENSOR);
 if(sensorValue == HIGH)//传感器值是否为HIGH？
 {
  return true;//是的，返回true
 }
 else
 {
  return false;//不是，返回false
 }
}
```

- **步骤2.** 上传演示程序。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

:::success
     如果一切顺利，当有人接近此传感器或当您用手接近此传感器时，LED将点亮。
:::

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Adjustable_PIR_Motion_Sensor/res/Grove%20-%20Adjustable%20PIR%20Motion%20Sensor.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]** [Grove - 可调节PIR运动传感器Eagle文件](https://files.seeedstudio.com/wiki/Grove-Adjustable_PIR_Motion_Sensor/res/Grove%20-%20Adjustable%20PIR%20Motion%20Sensor.zip)

- **[PDF]** [数据手册 L221D](https://files.seeedstudio.com/wiki/Grove-Adjustable_PIR_Motion_Sensor/res/Mini%20SMD%20Digital%20Pyroelectric%20Infrared%20Sensors.pdf)

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