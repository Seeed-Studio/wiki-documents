---
description: Grove - 人体存在传感器 (AK9753)
title: Grove - 人体存在传感器 (AK9753)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Human_Presence_Sensor-AK9753
last_update:
  date: 2/22/2023
  author: jianjing Huang
---
<!-- ---
name: Grove - 人体存在传感器 (AK9753)
category: Sensor
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 101020554
tags:
--- -->

![](https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/main.jpg)

Grove - 人体存在传感器可用于检测人体或任何其他红外物体的存在。此外，它由四个量子红外传感器和一个用于特性补偿的集成电路（IC）组成，因此可用于检测红外物体的运动以及红外物体移动的相对位置。集成的模数转换器提供16位数据输出。该模块适用于几英尺范围内的人体检测。

您可以在我们的网站上找到很多红外传感器，这款将是最有趣的之一。通过一定的算法，它甚至可以实现手势识别。我们希望您喜欢它。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Human-Presence-Sensor-%28AK9753%29-p-3224.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特性

- 具有四个红外元件的量子型红外传感器
- 16位数字输出到I2C总线
- 集成温度传感器
- 中断功能
- 低电流消耗

## 规格参数

|项目|值|
|---|---|
|工作电压|3.3V / 5V|
|工作温度|-30℃ ~ 85℃|
|人体存在检测范围| < 3m|
|红外输出分辨率|16位|
|温度测量范围|-10℃ ~ 60 ℃|
|接口|I2C|
|I2C地址|0x64(默认)<br />0x65 / 0x66(可配置)|

## 典型应用

- 人体检测
- 接近传感器
- 运动检测

## 硬件概述

### 引脚定义

![](https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/pinout.jpg)

![](https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/pinout1.png)

![](https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/pinout_back.jpg)

### 原理图

**电源**

![](https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/schematic.jpg)

AK9763工作在低工作电压--1.71~3.63V，因此我们使用[XC6206P332MR](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/XC6206.pdf)芯片提供稳定的3.3V。XC6206P33的输入范围为1.8V到6.0V，因此您可以在3.3V和5V下与Arduino一起使用此模块。

**双向电平转换电路**

![](https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/schematic1.jpg)

这是一个典型的双向电平转换电路，用于连接I2C总线的两个不同电压部分。该传感器的I<sup>2</sup>C总线使用3.3V，如果Arduino的I<sup>2</sup>C总线使用5V，则需要此电路。在上面的原理图中，**Q1**和**Q2**是N沟道MOSFET [2N7002A](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf)，充当双向开关。为了更好地理解这部分，您可以参考[AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
上述支持的平台表示该模块的软件或理论兼容性。在大多数情况下，我们只为Arduino平台提供软件库或代码示例。我们无法为所有可能的MCU平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

## 入门指南

### 与Arduino一起使用

#### 硬件

**所需材料**

| Seeeduino V4.2 | Base Shield | Grove - 人体存在传感器 (AK9753) |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Grove-Human-Presence-Sensor-%28AK9753%29-p-3224.html" target="_blank">立即购买</a>|

:::note
**1** 请轻轻插入USB线，否则可能会损坏端口。请使用内部有4根线的USB线，2根线的线缆无法传输数据。如果您不确定您的线缆，可以点击[这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)购买

**2** 每个Grove模块在购买时都会附带一根Grove线缆。如果您丢失了Grove线缆，可以点击[这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)购买。
:::

- **步骤1.** 将Grove - 人体存在传感器 (AK9753) 连接到Grove-Base Shield的**I2C**端口。

- **步骤2.** 将Grove - Base Shield插入Seeeduino。

- **步骤3.** 通过USB线将Seeeduino连接到PC。

![](https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/connect.jpg)

:::note
如果我们没有Grove Base Shield，我们也可以直接将此模块连接到Seeeduino，如下所示。
:::

| Seeeduino      |  Grove线缆       | Grove - 人体存在传感器 (AK9753) |
|--------------- |--------------------|-----|
| GND            | 黑色              | GND |
| 5V or 3.3V     | 红色                | VCC |
| SDA            | 白色              | SDA |
| SCL            | 黄色             | SCL |

#### 软件

:::caution
如果这是您第一次使用Arduino，我们强烈建议您在开始之前先查看[Arduino入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤1.** 从Github下载[Grove_Human_Presence_Sensor](https://github.com/Seeed-Studio/Grove_Human_Presence_Sensor)库。

- **步骤2.** 参考[如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library)为Arduino安装库。

- **步骤3.** 现在您可以在Arduino IDE中通过点击**文件 --> 示例 --> Grove Human Presence Sensor Library**找到四个演示

![](https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/path1.jpg)

>**Example1-BasicReading**: 此示例读取四个红外传感器的原始(uint16_t)数据，并在串口中打印这些原始数据。  
>**Example2-PlotDiff**: 读取原始数据并在串口绘图器中绘制。  
>**Example3-DetectPresence**: 检测红外物体的存在。  
>**Example4-PlotMovement**: 检测运动并在串口绘图器中绘制。

或者，在您计算机的文件夹**C:XXXX\Arduino\libraries\Grove_Human_Presence_Sensor-master\examples**中找到它们，**XXXX**是您安装Arduino IDE的位置。

![](https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/path2.jpg)

- **步骤4.** 选择一个演示，上传代码。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

现在让我们看看会发生什么：

---

**Example1-BasicReading:**

当您上传example1代码时，通过点击**工具-> 串口监视器**打开Arduino IDE的**串口监视器**。或者同时按++ctrl+shift+m++键。将波特率设置为**9600**。  
您可以看到以下结果：

```cpp
Grove - Human Presence Sensor example
1:[432], 2:[288], 3[248], 4:[384], temp[20.87], millis[109]
1:[424], 2:[296], 3[232], 4:[400], temp[20.87], millis[215]
1:[448], 2:[280], 3[224], 4:[360], temp[20.87], millis[319]
1:[424], 2:[280], 3[224], 4:[368], temp[20.87], millis[424]
1:[440], 2:[256], 3[248], 4:[376], temp[20.87], millis[530]
1:[440], 2:[280], 3[224], 4:[384], temp[20.75], millis[634]
1:[464], 2:[296], 3[216], 4:[392], temp[20.75], millis[740]
1:[416], 2:[288], 3[240], 4:[376], temp[20.75], millis[844]
1:[432], 2:[288], 3[216], 4:[392], temp[20.75], millis[950]
1:[440], 2:[296], 3[208], 4:[384], temp[20.75], millis[1055]
1:[424], 2:[248], 3[192], 4:[376], temp[20.75], millis[1160]
1:[432], 2:[264], 3[200], 4:[384], temp[20.75], millis[1265]
1:[440], 2:[248], 3[208], 4:[352], temp[20.75], millis[1371]
1:[400], 2:[256], 3[192], 4:[320], temp[20.75], millis[1475]
1:[368], 2:[208], 3[152], 4:[296], temp[20.75], millis[1581]
1:[608], 2:[384], 3[368], 4:[560], temp[20.75], millis[1686]
1:[1320], 2:[912], 3[736], 4:[960], temp[20.75], millis[1790]
1:[2168], 2:[1664], 3[1336], 4:[1752], temp[20.75], millis[1896]
1:[2544], 2:[2192], 3[2112], 4:[2376], temp[20.75], millis[2001]
1:[2536], 2:[2256], 3[2280], 4:[2520], temp[20.75], millis[2007]
1:[2144], 2:[2064], 3[2168], 4:[2328], temp[20.75], millis[2212]
```

`1:[]` 表示红外传感器1的测量数据，`2:[]` 表示红外传感器2的测量数据，`3:[]` 表示红外传感器3的测量数据，`4:[]` 表示红外传感器4的测量数据。所有这些参数值的范围从 -32767 ~ 32767。此参数反映检测到的红外光强度。红外强度越强，参数值越大。

`temp[]` 表示集成温度传感器的测量数据，范围从 -10℃ 到 +60℃。

`millis[109]` 表示程序启动以来的系统时间，由 Arduino 提供。

---

**示例2-PlotDiff**

当您上传示例2代码时，通过点击 **工具-> 串口绘图器** 打开 Arduino IDE 的 **串口绘图器**。或者同时按下 ++ctrl+shift+l++ 键。将波特率设置为 **9600**。  
您可以看到以下结果：

![](https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/result1.png)

此示例读取四个红外传感器的数据并将其转换为电流 (pA)，然后将 **diff13** 和 **diff24** 绘制到 Arduino IDE 串口绘图器中。

>diff13 = IR1 - IR3  // <font color="blue">蓝线</font>  
>diff24 = IR2 - IR4  // <font color="red">红线</font>

---

**示例3-DetectPresence**

当您上传示例1代码时，通过点击 **工具-> 串口监视器** 打开 Arduino IDE 的 **串口监视器**。或者同时按下 ++ctrl+shift+m++ 键。将波特率设置为 **9600**。  
您可以看到以下结果：

```cpp
Grove - Human Presence Sensor example
o o x o  millis: 16949
o x x o  millis: 17050
x x x x  millis: 17153
x x x x  millis: 17254
x x x x  millis: 17355
x x x x  millis: 17457
```

此示例检测红外物体的存在。检测基于传感器值的导数。如果导数大于阈值，我们认为有红外物体进入了传感器的视野。每个通道的导数通过以下公式计算：

<div style={{ textAlign: 'center', padding: '15px', backgroundColor: 'var(--ifm-color-emphasis-100)', border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '5px', margin: '20px 0', fontFamily: 'monospace', fontSize: '16px' }}><strong>derivativeIR1 = ΔIR1 / Δt</strong></div>

Δt 表示时间间隔，ΔIR1 表示红外传感器1在时间间隔内的输出值变化。

在输出中，**O** 表示未检测到，**X** 表示检测到。输出的顺序对应红外传感器的物理位置。  
例如：

```
o o x o
```

表示第三个红外传感器检测到红外物体，其他传感器没有检测到（红外物体可能来自顶部）。您可以在 <a href="#pin-out" target="_self">引脚定义</a> 中找到红外传感器的物理位置

---

**示例4-PlotMovement**

当您上传示例4代码时，通过点击 **工具-> 串口绘图器** 打开 Arduino IDE 的 **串口绘图器**。或者同时按下 ++ctrl+shift+l++ 键。将波特率设置为 **9600**。  
您可以看到以下结果：

![](https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/result2.png)

检测基于 IR1_IR3 或 IR2_IR4 差值的导数。IR1_IR3 或 IR2_IR4 的导数通过以下公式计算：

<div style={{ textAlign: 'center', padding: '15px', backgroundColor: 'var(--ifm-color-emphasis-100)', border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '5px', margin: '20px 0', fontFamily: 'monospace', fontSize: '16px' }}><strong>derivativeIR1_IR3 = Δ(IR1-IR3) / Δt</strong></div>

图中每条曲线的含义是：（按顺序）

- diff13  // <font color="blue">IR1-IR3，蓝线</font>
- 1-3方向的运动  // <font color="red">derivativeIR1_IR3，红线</font>  
（一个脉冲，正脉冲表示从1到3，否则从3到1）
- diff24  // <font color="green">IR2-IR4，绿线</font>
- 2-4方向的运动  // <font color="orange">derivativeIR1_IR3，橙线</font>  
（一个脉冲，正脉冲表示从2到4，否则从4到2）

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/res/Grove%20-%20Human%20Presence%20Sensor%20(AK9753).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]** [Grove - 人体存在传感器 (AK9753) Eagle 文件](https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/res/Grove%20-%20Human%20Presence%20Sensor%20(AK9753).zip)

- **[Zip]** [Seeed 人体存在传感器库](https://github.com/Seeed-Studio/Grove_Human_Presence_Sensor/archive/master.zip)

- **[PDF]** [AK9753 数据手册](https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/res/AK9753.pdf)

- **[PDF]** [XC6206 数据手册](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/XC6206.pdf)

## 技术支持与产品讨论

 <br />
感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>