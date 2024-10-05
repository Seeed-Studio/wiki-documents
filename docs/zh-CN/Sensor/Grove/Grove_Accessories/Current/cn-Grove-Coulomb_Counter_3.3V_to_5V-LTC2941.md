---
description: Grove - 库仑计数器（3.3V至5V）（LTC2941）
title: Grove - 库仑计数器（3.3V至5V）（LTC2941）
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941
last_update:
  date: 03/21/2024
  author: WuFeifei
---


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/img/main.jpg" /></div>

库仑（符号：C）是国际单位制（SI）中电量的单位。它是恒定电流在一秒内传输的电荷量（符号：Q或q）：1C=1A•1s。库仑计数器是一种用来测量你的设备或传感器所使用的电流量的设备。

Grove - 库仑计数器 3.3V 至 5V（LTC2941）基于LTC2941，其工作范围非常适合单节锂离子电池。精密库仑计数器通过电池正极和负载或充电器之间的感应电阻来积分电流。这个模块测量已使用的安培小时数，如果你使用充满电的电池，你可以测试你使用了多少电量，剩余的百分比，就像你手机上显示的剩余电量一样。反之，如果你正在充电，你可以使用这个模块来监控充电过程。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Coulomb-Counter-3.3V-to-5V-(LTC2941)-p-3215.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特点

- 显示电池累积的充电和放电
- 高精度模拟积分
- 1% 充电精度
- SMBus/I2C 接口

## 规格

|项目|值|
|---|---|
|工作电压|2.7V 至 5.5V|
|工作温度|0℃ 至 +70℃|
|精度|±2ppm from 0°C 至 +40°C|
|接口|I2C|
|I2C 地址|0x64|

## 典型应用

- 低功耗手持产品
- 手机
- MP3播放器
- 照相机
- GPS

## 硬件概述

### 引脚说明

**概述**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/img/pin-out/pin-out_0.jpg" /></div>

:::警示危险
3和4都是电源输入接口，请选择一个作为电源输入，不要同时使用两个，且电压不能超过5V，否则模块可能会损坏。
:::

___
**Grove 接口**

此模块通过I2C接口与控制板进行通信：

>GND：电源引脚，连接到系统的GND。
>VCC：电源引脚，连接到5V或3.3V，为该模块提供电源。
>SDA：信号引脚，I2C串行数据。
>SCL：信号引脚，I2C串行时钟。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/img/pin-out/pin-out1.jpg" /></div>

___
**OUT**

电源输出，连接到负载或充电器。

>+: Power output Positive electrode  
>-: Power output negative electrode

:::警示危险
请勿直接连接到感性负载，如电机或伺服机构，否则由于感性负载引起的波纹可能导致芯片损坏。
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/img/pin-out/pin-out2.jpg" /></div>

___
**IN**

电源输入，为 **OUT** 提供电源

>+: 电源输入正极 
>-: 电源输入负极

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/img/pin-out/pin-out3.jpg" /></div>

:::**警告**
如果您使用[I2C Scanner](https://playground.arduino.cc/Main/I2cScanner/)扫描设备的I2C ID，您必须向IN端子提供3.3v/5v电源。
:::

___
**电池输入**

电池输入，支持3.7-4.2v的Li-PO电池，Jst2.0（2针-2.0mm），为 **OUT** 提供电源

>+: 电池输入正极  
>-: 电池输入负极

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/img/pin-out/pin-out4.jpg" /></div>

___
**报警引脚**

连接到LTC2941的AL/CC引脚，作为警报输出或充电完成输入。LTC2941支持警报功能，并且我们已经为您保留了相关的硬件引脚。但是，我们提供的软件并不支持这一功能。因此，如果您需要这部分功能，您需要自己处理软件部分。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/img/pin-out/pin-out5.jpg" /></div>

## 支持的平台

| Arduino                                                      | 树莓派                                                       |                                                              |                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div> |

:::**警告**
上述提到的支持平台是模块软件或理论兼容性的指示。在大多数情况下，我们只提供针对Arduino平台的软件库或代码示例。由于不可能为所有可能的MCU平台提供软件库/示例代码，因此用户需要编写自己的软件库。
:::

## 入门指南

### 与Arduino配合使用

#### 硬件

**所需材料**

| Seeeduino V4.2 | Base Shield | Grove - 库仑计数器 3.3V至  5V (LTC2941) |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/img/thumbnail.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即获取</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即获取</a>|<a href="https://www.seeedstudio.com/Grove-Coulomb-Counter-3.3V-to-5V-(LTC2941)-p-3215.html" target="_blank">立即获取</a>|

:::注意
**1** 请轻轻插入USB线，否则可能会损坏端口。请使用内部有4根线的USB线，2根线的USB线无法传输数据。如果您不确定自己手上的线是否符合要求，可以点击[此处](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)购买。

**2** 您购买每个Grove模块时，都会随附一根Grove电缆。如果您丢失了Grove电缆，可以点击[此处](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-(5-PCs-pack)-p-936.html)购买。
:::

- **步骤 1.** 将负载或充电器插入**OUT**端口。

- **步骤 2.** 将电池插入**JST**端口，或将其他电源插入**IN**端口。

- **步骤 3.** 将Grove - 库仑计数器 3.3V 至 5V（LTC2941）插入Grove-Base Shield的**I2C**端口。

- **步骤 4.** 将Grove - Base Shield插入Seeeduino。

- **步骤 5.** 通过USB线将Seeeduino连接到电脑。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/img/connect.jpg" /></div>

:::注意
如果没有Grove Base Shield，我们也可以直接按照以下方式将此模块连接到Seeeduino。
:::

| Seeeduino  | Grove 线缆 | Grove - 库仑计数器 3.3V 至 5V (LTC2941) |
| ---------- | ---------- | --------------------------------------- |
| GND        | 黑色       | GND                                     |
| 5V or 3.3V | 红色       | VCC                                     |
| SDA        | 白色       | SDA                                     |
| SCL        | 黄色       | SCL                                     |

#### 软件

:::警告
如果您是第一次使用Arduino，我们强烈建议您在开始之前先阅读[Arduino入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 从Github下载[Seeed_LTC2941](https://github.com/Seeed-Studio/Seeed_LTC2941)库。

- **步骤 2.** 参考[如何安装库](https://wiki.seeedstudio.com/How_to_install_Arduino_Library)来安装Arduino的库。

- **步骤 3.** 重启Arduino IDE。打开示例，您可以通过以下三种方式打开它：

    1. 在Arduino IDE中通过路径直接打开：**文件 --> 示例 --> Grove - 3.3V至5V库仑计数器(LTC2941) --> battery_power**。
    >**battery_power:** 这个示例将显示以单位**C**和**mAh**表示的电量数据，其中1mAh=3.6C，并显示剩余电池的百分比。
    >**current_expend:** 这个示例将显示您正在消耗多少电量。

    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/img/path_1.jpg" /></div>

    2. 在计算机上打开它，点击位于**XXXX\Arduino\libraries\Seeed_LTC2941-master\examples\battery_power**文件夹中的**battery_power.ino**文件，其中**XXXX**是您安装Arduino IDE的位置。
    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/img/path_2.jpg" /></div>

    3. 或者，您可以直接点击代码块右上角的![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg)图标，将以下代码复制到Arduino IDE中的新草图中。

```cpp

#include "LTC2941.h"

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define SERIAL SerialUSB
#else
  #define SERIAL Serial
#endif

float coulomb = 0, mAh = 0, percent = 0;

void setup(void)
{
    Wire.begin();
    
    SERIAL.begin(115200);
    while(!SERIAL.available());
    
    SERIAL.println("LTC2941 Raw Data");
    
    ltc2941.initialize();
    ltc2941.setBatteryFullMAh(400);
}

void loop(void)
{
    coulomb = ltc2941.getCoulombs();
    mAh = ltc2941.getmAh();
    percent = ltc2941.getPercent();
    
    SERIAL.print(coulomb);
    SERIAL.print("C,");
    SERIAL.print(mAh);
    SERIAL.print("mAh,");
    SERIAL.print(percent);
    SERIAL.print("%");
    
    SERIAL.println();
    
    delay(1000);
}
```

:::警告
库文件可能会更新。此代码可能不适用于更新的库文件，因此我们建议您使用前两种方法。
:::

- **步骤 4.** 上传示例。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/Upload_Code/)。

- **步骤 5.** 点击**工具->串口监视器**打开Arduino IDE的**串口监视器**。或者同时按下`ctrl`+`shift`+`m`键。将波特率设置为**115200**。

:::成功提示
如果一切顺利，当您打开串口监视器并按下任意键后点击发送按钮时，它可能会显示如下内容：
:::

```cpp
LTC2941 Raw Data
1439.96C,399.99mAh,100.00%
1439.96C,399.99mAh,100.00%
1439.96C,399.99mAh,100.00%
1439.96C,399.99mAh,100.00%
1439.92C,399.98mAh,99.99%
```

#### 功能描述

在示例中，我们使用了一个400mAh的电池，因此您可以看到结果`1439.96mC,399.99mAh,100.00%`。剩余电池的百分比只有在您设置了电池容量之后才有效。您可以在代码的第21行更改电池容量，

```cpp
ltc2941.setBatteryFullMAh(400); // set the battery capacity here
```

此外，每次您重新打开串口或重新为控制板供电时，数据都会重置为`100.00%`。因此，如果您想在手机中使用它，还有很多工作要做呢 :D

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/res/Grove%20-%20Coulomb%20Counter%203.3V%20to%205V%20(LTC2941).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>
## 资源

- **[Zip]** [Grove - 3.3V至 5V 库伦计算器(LTC2941) Eagle 文件](https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/res/Grove%20-%20Coulomb%20Counter%203.3V%20to%205V%20(LTC2941).zip)

- **[Zip]** [Seeed LTC2941 库](https://github.com/Seeed-Studio/Seeed_LTC2941/archive/master.zip)

- **[PDF]** [LTC2941数据手册](https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/res/datasheet.pdf)

## 项目

这是该产品的介绍视频，包括一些简单的演示，您可以尝试看看。

<iframe width="560" height="315" src="https://www.youtube.com/embed/SKJ9iXhx0mc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供各种支持，以确保您在使用我们的产品时能够获得尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
