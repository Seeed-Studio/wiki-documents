---
description: Grove - 计步器(BMA456)
title: Grove - 计步器(BMA456)
keywords:
- grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Step_Counter-BMA456
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/img/main.jpg)

Grove - 计步器(BMA456) 基于 BMA456，这是一个极其小巧的三轴低重力高性能加速度模块。借助博世的特殊算法，我们将此模块制作成了便携式计步器。

可靠、经济实惠，最重要的是，它非常易于使用，您可以轻松地将这个即插即用模块添加到您的可穿戴设备中。

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Step-Counter-(BMA456)-p-3189.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Step-Counter-(BMA456)-p-3189.html)

## 版本

| 产品版本  | 变更                                                                                               | 发布日期 |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - 计步器(BMA456) | 初始版本                                                                                               | 2018年10月      |

## 特性

- 片上 FIFO
- 超低功耗
- 片上中断
- 可编程功能

## 规格参数

|项目|值|
|---|---|
|工作电压|3.3V / 5V|
|加速度范围|±2g, ±4g, ±8g, ±16g|
|灵敏度|16384 @±2g / 8192 @±4g / 4096 @±8g / 2048 @±16g|
|接口|I^2^C|
|I^2^C 地址|0x19(默认) / 0x18(可选)|
|尺寸|长: 40mm 宽: 20mm 高: 10mm| 
|重量|3.2g|
|包装尺寸|长: 140mm 宽: 90mm 高: 10mm|
|毛重|9g|

## 典型应用

- 有高度限制的应用
- 具有水印功能的即插即用计步器解决方案
- 健身应用 / 活动跟踪
- 可穿戴应用的电源管理
- 显示屏开/关和配置文件切换
- 无硬件按钮的用户界面
- 电子罗盘倾斜补偿和数据同步
- 高性能角度测量

## 硬件概述

### 引脚定义

![](https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/img/pin_out.jpg)

![](https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/img/pin_out_back.jpg)

### 原理图

**电源**

![](https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/img/schematic_1.jpg)

BMA456 的典型电压为 1.8V，因此我们使用 [XC6206P182MR](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/XC6206.pdf) 芯片来提供稳定的 1.8V。XC6206P33 的输入范围为 1.8V 到 6.0V，因此您可以在 3.3V 和 5V 下与您的 Arduino 一起使用此模块。

**双向电平转换电路**

![](https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/img/schematic_2.jpg)

这是一个典型的双向电平转换电路，用于连接 I^2^C 总线的两个不同电压部分。该传感器的 I<sup>2</sup>C 总线使用 3.3V，如果 Arduino 的 I<sup>2</sup>C 总线使用 5V，则需要此电路。在上面的原理图中，**Q6** 和 **Q5** 是 N 沟道 MOSFET [2N7002A](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf)，充当双向开关。为了更好地理解这部分，您可以参考 [AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |


:::caution
    上面提到的支持平台表示该模块的软件或理论兼容性。我们在大多数情况下只为Arduino平台提供软件库或代码示例。不可能为所有可能的MCU平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

## 入门指南


### 与Arduino一起使用


#### 硬件

**所需材料**

| Seeeduino V4.2 | Base Shield | Grove - 计步器(BMA456) |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Grove-Step-Counter-(BMA456)-p-3189.html" target="_blank">立即购买</a>|


:::note
    **1** 请轻轻插入USB线，否则可能会损坏端口。请使用内部有4根线的USB线，2根线的线缆无法传输数据。如果您不确定您的线缆，可以点击[这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)购买
    
    **2** 每个Grove模块在购买时都会附带一根Grove线缆。如果您丢失了Grove线缆，可以点击[这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)购买。
:::

- **步骤 1.** 将Grove - 计步器(BMA456)连接到Grove-Base Shield的**I^2^C**端口。

- **步骤 2.** 将Grove - Base Shield插入Seeeduino。

- **步骤 3.** 通过USB线将Seeeduino连接到PC。


![](https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/img/connect.jpg)

:::note
        如果我们没有Grove Base Shield，我们也可以直接将此模块连接到Seeeduino，如下所示。
:::

| Seeeduino      |  Grove线缆       | Grove - 计步器(BMA456) |
|--------------- |--------------------|-----|
| GND            | 黑色              | GND |
| 5V or 3.3V     | 红色                | VCC |
| SDA            | 白色              | SDA |
| SCL            | 黄色             | SCL |



#### 软件

:::note
        如果这是您第一次使用Arduino，我们强烈建议您在开始之前先查看[Arduino入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 从Github下载[Seeed_BMA456](https://github.com/Seeed-Studio/Seeed_BMA456)库。

- **步骤 2.** 参考[如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library)来为Arduino安装库。

- **步骤 3.** 重启Arduino IDE。打开示例，您可以通过以下三种方式打开：
    1. 在Arduino IDE中通过路径直接打开：**文件 --> 示例 --> Grove -计步器(BMA456) --> step_counter**。 
    ![](https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/img/path_1.jpg)
    
    2. 在您的计算机中点击**step_counter.ino**打开，您可以在文件夹**XXXX\Arduino\libraries\Seeed_BMA456-master\examples\step_counter**中找到它，**XXXX**是您安装Arduino IDE的位置。
    ![](https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/img/path_2.jpg)
    
    3. 或者，您可以直接点击代码块右上角的图标![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg)将以下代码复制到Arduino IDE的新草图中。


```cpp
#include "arduino_bma456.h"

uint32_t step = 0;

void setup(void)
{    
    Serial.begin(115200);
    Serial.println("BMA456 Step Counter");
    
    bma456.initialize(RANGE_4G, ODR_1600_HZ, NORMAL_AVG4, CONTINUOUS);
    bma456.stepCounterEnable();
}

void loop(void)
{	
    step = bma456.getStepCounterOutput();

    Serial.print("Step: ");
    Serial.println(step);
    
    delay(1000);
}
```

:::note
        库文件可能会更新。此代码可能不适用于更新的库文件，因此我们建议您使用前两种方法。
:::

- **步骤 4.** 上传演示程序。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

- **步骤 5.** 点击 **工具-> 串口监视器** 打开 Arduino IDE 的 **串口监视器**。或者同时按下 ++ctrl+shift+m++ 键。将波特率设置为 **115200**。


:::success
     如果一切正常，当您打开串口监视器并携带此传感器行走或将其移动到模拟行走姿势时，可能会显示如下内容：
:::

```cpp
BM
Step: 0
BMA456 Step Counter
Step: 0
Step: 0
...
...
Step: 18
Step: 20
Step: 22
Step: 24
Step: 26
Step: 28
Step: 30
Step: 32
Step: 34
Step: 36
Step: 38
```


## 原理图在线查看器


<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/res/Grove%20-%20Step%20Counter(BMA456).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## 资源

- **[Zip]** [Grove - Step Counter(BMA456) Eagle 文件](https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/res/Grove%20-%20Step%20Counter(BMA456).zip)

- **[Zip]** [Seeed BMA456 库](https://github.com/Seeed-Studio/Seeed_BMA456/archive/master.zip)

- **[PDF]** [BMA456 数据手册](https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/res/BMA456.pdf)

- **[PDF]** [XC6206 数据手册](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/XC6206.pdf)



## 项目

这是本产品的介绍视频，包含简单的演示，您可以尝试一下。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/gPi4EWuAGtg?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
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