---
description: Grove - 库仑计 3.3V 至 5V (LTC2941)
title: Grove - 库仑计 3.3V 至 5V (LTC2941)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941
last_update:
  date: 1/9/2023
  author: jianjing Huang
---

<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/img/main.jpg" /></div>

库仑（符号：C）是国际单位制（SI）中电荷的单位。它是由一个安培的恒定电流在一秒内传输的电荷（符号：Q 或 q）：1C=1A•1s。库仑计是一种用于测量设备或传感器使用电流的装置。

Grove - 库仑计 3.3V 至 5V (LTC2941) 基于 LTC2941，其工作范围非常适合单节锂离子电池。一个精密库仑计通过电池正极端与负载或充电器之间的检测电阻来集成电流。该模块测量使用的安时量。如果使用完全充电的电池，可以测试已使用的电量和剩余百分比，就像手机显示的剩余电量一样。反之，如果正在给电池充电，可以使用该模块监控充电过程。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Coulomb-Counter-3.3V-to-5V-(LTC2941)-p-3215.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特性

- 显示累计电池充电和放电量
- 高精度模拟集成
- 1% 充电精度
- SMBus/I2C 接口

## 规格

|项目|值|
|---|---|
|工作电压|2.7V 至 5.5V|
|工作温度|0℃ 至 +70℃|
|精度|±2ppm（0°C 至 +40°C）|
|接口|I2C|
|I2C 地址|0x64|

## 典型应用

- 低功耗手持设备
- 手机
- MP3 播放器
- 相机
- GPS

## 硬件概览

### 引脚定义

**概览**

<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/img/pin-out/pin-out_0.jpg" /></div>

:::caution
3 和 4 都是电源输入接口，请选择一个作为电源输入，不要同时使用两个，且电压不能超过 5V，否则模块可能会损坏。
:::
___
**Grove 接口**

该模块通过 I2C 接口与控制板通信：

>GND：电源引脚，连接到系统 GND  
>VCC：电源引脚，连接到 5V 或 3.3V，为该模块供电  
>SDA：信号引脚，I2C 串行数据  
>SCL：信号引脚，I2C 串行时钟

<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/img/pin-out/pin-out1.jpg" /></div>

___
**OUT**

电源输出，连接到负载或充电器。

>+: 电源输出正极  
>-: 电源输出负极

:::caution
不要直接连接到感性负载，例如电机或舵机，否则由于感性负载引起的纹波可能会损坏芯片。
:::

<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/img/pin-out/pin-out2.jpg" /></div>

___
**IN**

电源输入，为 **OUT** 提供电源。

>+: 电源输入正极  
>-: 电源输入负极

<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/img/pin-out/pin-out3.jpg" /></div>

:::caution
如果使用 [I2C 扫描器](https://playground.arduino.cc/Main/I2cScanner/) 扫描设备的 I2C ID，必须向 IN 端子提供 3.3V/5V 电源。
:::

___
**电池输入**

电池输入，支持 3.7-4.2V 锂聚合物电池，Jst2.0（2 引脚-2.0mm），为 **OUT** 提供电源。

>+: 电池输入正极  
>-: 电池输入负极

<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/img/pin-out/pin-out4.jpg" /></div>

___
**报警引脚**

连接到 LTC2941 的 AL/CC 引脚，用于警报输出或充电完成输入。LTC2941 支持警报功能，我们为您保留了相关硬件引脚，但我们提供的软件不支持此功能。因此，如果需要此功能，您需要自行开发软件部分。

<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/img/pin-out/pin-out5.jpg" /></div>

## 支持的平台

| Arduino                                                                                             | 树莓派                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上述提到的支持平台仅表示模块的软件或理论兼容性。我们通常仅为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库或演示代码。因此，用户需要自行编写软件库。
:::

## 入门指南

### 使用 Arduino

#### 硬件

**所需材料**

| Seeeduino V4.2 | Base Shield | Grove - Coulomb Counter 3.3V to 5V (LTC2941) |
|--------------|-------------|-----------------|
|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" /></div>|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" /></div>|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/img/thumbnail.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Grove-Coulomb-Counter-3.3V-to-5V-(LTC2941)-p-3215.html" target="_blank">立即购买</a>|

:::note
**1** 请轻轻插入 USB 数据线，否则可能会损坏端口。请使用内部有 4 根线的 USB 数据线，只有 2 根线的 USB 数据线无法传输数据。如果您不确定手头的数据线，可以点击 [这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) 购买。

**2** 每个 Grove 模块在购买时都会附带一根 Grove 数据线。如果您丢失了 Grove 数据线，可以点击 [这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) 购买。
:::

- **步骤 1.** 将负载或充电器插入 **OUT** 端口。

- **步骤 2.** 将电池插入 **JST** 端口，或将其他电源插入 **IN** 端口。

- **步骤 3.** 将 Grove - Coulomb Counter 3.3V to 5V (LTC2941) 插入 Grove-Base Shield 的 **I2C** 端口。

- **步骤 4.** 将 Grove - Base Shield 插入 Seeeduino。

- **步骤 5.** 使用 USB 数据线将 Seeeduino 连接到电脑。

<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/img/connect.jpg" /></div>

:::note
如果没有 Grove Base Shield，我们也可以直接将此模块连接到 Seeeduino，如下所示。
:::

| Seeeduino      |  Grove 数据线       | Grove - Coulomb Counter 3.3V to 5V (LTC2941) |
|--------------- |--------------------|-----|
| GND            | 黑色              | GND |
| 5V 或 3.3V     | 红色              | VCC |
| SDA            | 白色              | SDA |
| SCL            | 黄色              | SCL |

#### 软件

:::caution
如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 从 Github 下载 [Seeed_LTC2941](https://github.com/Seeed-Studio/Seeed_LTC2941) 库。

- **步骤 2.** 参考 [如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库。

- **步骤 3.** 重启 Arduino IDE。打开示例代码，可以通过以下三种方式打开：
    1. 在 Arduino IDE 中直接通过路径打开：**File --> Examples --> Grove - Coulomb Counter for 3.3V to 5V(LTC2941) --> battery_power**。  
    >**battery_power:** 此示例将以单位 **C** 和 **mAh** 显示电荷数据，1mAh=3.6C，同时显示剩余电池百分比。  
    >**current_expend:** 此示例将显示您消耗了多少电量。

    <div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/img/path_1.jpg" /></div>

    2. 在您的电脑中打开，点击 **battery_power.ino** 文件，该文件位于 **XXXX\Arduino\libraries\Seeed_LTC2941-master\examples\battery_power** 文件夹中，**XXXX** 是您安装 Arduino IDE 的位置。
    <div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/img/path_2.jpg" /></div>

3. 或者，您可以直接点击代码块右上角的图标 ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg)，将以下代码复制到 Arduino IDE 的新草图中。

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
    
    SERIAL.println("LTC2941 原始数据");
    
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

:::caution
库文件可能会更新。此代码可能不适用于更新后的库文件，因此我们建议您使用前两种方法。
:::

- **步骤 4.** 上传示例代码。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

- **步骤 5.** 打开 Arduino IDE 的 **串口监视器**，点击 **工具->串口监视器**。或者同时按下 `ctrl`+`shift`+`m` 键。将波特率设置为 **115200**。

:::tip
如果一切正常，当您打开串口监视器并按任意键后点击发送按钮，可能会显示如下内容：
:::

```cpp
LTC2941 原始数据
1439.96C,399.99mAh,100.00%
1439.96C,399.99mAh,100.00%
1439.96C,399.99mAh,100.00%
```

#### 功能描述

在示例代码中，我们使用了一块 400mAh 的电池，因此您可以看到结果 `1439.96mC,399.99mAh,100.00%`。剩余电池百分比仅在您设置电池容量后有效。您可以在代码第 21 行更改电池容量：

```cpp
ltc2941.setBatteryFullMAh(400); // 在这里设置电池容量
```

此外，每次重新打开串口或重新给控制板供电时，数据都会重置为 `100.00%`。因此，如果您想在手机中使用它，还有很多工作需要完成 :D

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/res/Grove%20-%20Coulomb%20Counter%203.3V%20to%205V%20(LTC2941).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]** [Grove - Coulomb Counter 3.3V to 5V (LTC2941) Eagle 文件](https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/res/Grove%20-%20Coulomb%20Counter%203.3V%20to%205V%20(LTC2941).zip)

- **[Zip]** [Seeed LTC2941 库](https://github.com/Seeed-Studio/Seeed_LTC2941/archive/master.zip)

- **[PDF]** [LTC2941 数据手册](https://files.seeedstudio.com/wiki/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941/res/datasheet.pdf)

## 项目

这是该产品的介绍视频，包含简单的演示，您可以尝试一下。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/SKJ9iXhx0mc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>