---
description: Grove AI HAT 边缘计算模块
title: Grove AI HAT 边缘计算模块
keywords:
- Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove_AI_HAT_for_Edge_Computing
last_update:
  date: 1/11/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/Grove-AI-HAT-for-Edge-Computing/img/Grove%20AI%20HAT%20for-Edge-Computing-wiki-front.jpg)

Grove AI HAT 边缘计算模块（以下简称"Grove AI HAT"）基于 Sipeed MAix M1 AI 模块构建，内置 Kendryte K210 处理器。这是一款低成本但功能强大的树莓派 AI 扩展板，可协助树莓派在边缘端运行 AI，也可独立工作用于边缘计算应用。

MAix M1 是一款功能强大的 RISC-V 600MHz AI 模块，具有双核 64 位 CPU、230GMULps 16 位 KPU（神经网络处理器）、支持双精度和单精度的 FPU（浮点运算单元）以及支持 8 个麦克风的 APU（音频处理器）。

除了强大的 Kendryte K210 处理器外，Grove AI HAT 边缘计算模块还提供丰富的外设：I2C/UART/SPI/I2S/PWM/GPIO。该扩展板还提供 LCD 和摄像头接口，支持 Sipeed 2.4 英寸 QVGA LCD 和 DVP 摄像头，这将对您的 AI 视觉项目非常有帮助和便利。就像 <a href="https://www.seeedstudio.com/Sipeed-MAix-BiT-for-RISC-V-AI-IoT-1-p-2873.html" target="_blank">Sipeed MAix BiT Kit for RISC-V AI+IoT</a> 一样，我们很快会发布带有摄像头和 LCD 的套件。对于 AI 语音识别应用，我们添加了一个高质量麦克风。对于机器人或运动应用，板载了一个 3 轴加速度传感器，与外部传感器相比更准确且易于使用。

我们已经发布了多种 SIPEED AI 产品，我们相信是时候将其 Grove 化了，并将我们数百种 Grove 传感器和 Grove 执行器引入您的 AI 应用中。因此，Grove AI HAT 边缘计算模块应运而生。我们为这款扩展板添加了 6 个 Grove 连接器，包括 1 个数字 IO、2 个模拟 IO、1 个 I2C、1 个 UART 和 1 个 PWM。除此之外，基于 <a href="https://github.com/kendryte/kendryte-standalone-sdk" target="_blank">kendryte-standalone-sdk</a>，我们支持 Linux、Windows、Mac OS X 和其他开发环境。

我们希望这款开发板能够帮助您进行边缘计算、AI 视觉、语音识别和其他 AI 项目，请尽情享受吧。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/5BF3ExL1HOQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-AI-HAT-for-Edge-Computing-p-4026.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特性

- 处理器：Sipeed MAIX-I 模块（无 WiFi）（首款 RISC-V 64 AI 模块，内置 K210）
- 1 个 USB 2.0 设备接口，Type C（供电和编程）
- 6 个 Grove 接口：包括 1 个数字 IO、1 个 PWM、1 个 I2C、1 个 UART、2 个 ADC
- 1 个电源 LED、1 个启动 LED
- 1 个复位按钮、1 个启动按钮
- 1 个 LCD 接口
- 1 个摄像头接口
- 1 个数字麦克风
- 1 个加速度传感器
- 1 个 JTAG 和 ISP UART 引脚排针
- 2 个 20 引脚排针，带有 I2C、UART、SPI、I2S、PWM、GPIO

## 规格参数

|参数|值|
|---|---|
|CPU|K210 RISC-V 双核 64位，400Mhz（最大 600Mhz）|
|FPU|符合 IEEE754-2008 标准的高性能流水线 FPU|
|KPU（神经网络处理器）|• 支持主流训练框架根据特定限制规则训练的定点模型<br />• 支持 1x1 和 3x3 卷积核<br />• 支持任意形式的激活函数<br />• 实时工作支持的最大神经网络参数大小为 5MiB 到 5.9MiB|
|调试支持|高速 UART 和 JTAG 接口用于调试|
|供电电压|5V<br />不能超过 5.5V|
|IO 电压|3.3V|
|工作环境温度|-20 – 70℃|
|ADC|板载 16 位 ADC|
|三轴加速度计|ADXL345 ±2 g/±4 g/±8 g/±16 g|
|麦克风|灵敏度：-26 dB；信噪比：61 dB|
|GPIO|2x 20 针排针，兼容树莓派|
|Grove 接口|1x 数字 IO，1x PWM，1x I2C，1x UART，2x ADC|
|USB 接口|USB 2.0 设备，Type C（供电和编程）|
|LCD 接口|8位 MCU LCD 24P 0.5mm FPC 连接器|
|DVP 摄像头接口|24P 0.5mm FPC 连接器|
|按钮|1x 复位按钮，1x 启动按钮（可用作用户按钮）|
|LED|1x 电源 LED，1x 启动 LED（可用作用户 LED）|

:::caution

- 所有数字和模拟 IO 接口电平均为 3.3V。请不要输入超过 3.3V 的电压，否则可能损坏 CPU。
- 输入电源电压为 5V，不能超过 5.5V。
:::

## 应用

- 边缘计算 AI
- 智能建筑
- 医疗设备
- 自动化与过程控制
- 机器人

## 硬件概述

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Grove-AI-HAT-for-Edge-Computing/img/pinout1.jpg" alt="Grove AI HAT for Edge Computing hardware overview" title="hardware overview" />
  <figcaption><b>图 1</b>. <i>Grove AI HAT for Edge Computing 硬件概述</i></figcaption>
</figure>
</div>

## 支持的平台

|                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

#### 数字演示

**所需材料**

- [Grove AI HAT for Edge Computing](https://www.seeedstudio.com/Grove-AI-HAT-for-Edge-Computing-p-4026.html) x1
- [Grove - LED](https://www.seeedstudio.com/Grove-White-LED-p-1140.html) x1
- USB Type C 数据线 x1

##### 硬件连接

- 1. 将 Grove - LED 连接到 Grove AI HAT 的 Grove **J2** 端口（D13 引脚）
- 2. 通过 USB Type C 端口将 Grove AI HAT 连接到计算机。

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Grove-AI-HAT-for-Edge-Computing/img/Grove-AI-HAT-for-Edge-Computing-connect.png" alt="Grove AI HAT Arduino demo" title="Grove AI HAT Arduino demo" />
  <figcaption><b>图 8</b>. <i>硬件连接</i></figcaption>
</figure>
</div>

#### 模拟演示

**所需材料**

- [Grove AI HAT for Edge Computing](https://www.seeedstudio.com/Grove-AI-HAT-for-Edge-Computing-p-4026.html) x1
- [Grove - Round Force Sensor (FSR402)](https://www.seeedstudio.com/Grove-Round-Force-Sensor-FSR40-p-3110.html) x1
- USB Type C 数据线 x1

##### 硬件连接

- 1 将 Grove - Round Force Sensor (FSR402) 连接到 Grove AI HAT 的 Grove **J11** 端口（A0 引脚）
- 2 通过 USB Type C 端口将 Grove AI HAT 连接到计算机。

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Grove-AI-HAT-for-Edge-Computing/img/Grove-AI-HAT-for-Edge-Computing-connect2(1).png" alt="Grove AI HAT Arduino demo" title="Grove AI HAT Arduino demo" />
  <figcaption><b>图 9</b>. <i>硬件连接</i></figcaption>
</figure>
</div>

#### 人脸检测演示

**所需材料**

- [Grove AI HAT for Edge Computing](https://www.seeedstudio.com/Grove-AI-HAT-for-Edge-Computing-p-4026.html) x1
- [OV2640 Camera](https://www.seeedstudio.com/OV2640-Fisheye-Camera-p-4048.html) x1
- [2.4 inch TFT LCD](https://www.seeedstudio.com/2-4-TFT-LCD-p-4049.html) x1
- USB Type C 数据线 x1

##### 硬件连接

- a. 将 OV2640 摄像头连接到 Grove AI Hat 24 针 FPC 摄像头连接器
- b. 将 2.4 英寸 TFT LCD 连接到 Grove AI Hat 24 针 FPC LCD 连接器
- c. 通过 USB Type C 端口将 Grove AI HAT 连接到计算机。

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Grove-AI-HAT-for-Edge-Computing/img/wiki-connect.jpg" alt="Grove AI HAT face detect demo-1" title="" />
  <figcaption><b>图 12</b>. <i>人脸检测演示的硬件连接</i></figcaption>
</figure>
</div>

## 资源

- **[PDF]** [Grove AI HAT for Edge Computing 原理图文件](https://files.seeedstudio.com/wiki/Grove-AI-HAT-for-Edge-Computing/res/Grove%20AI%20HAT%20for%20Edge%20Computing_v1.0_SCH_190426.pdf)
- **[PDF]** [加速度计传感器数据手册](https://files.seeedstudio.com/wiki/Grove-AI-HAT-for-Edge-Computing/res/Accelerometers_Sensor_datasheet.pdf)
- **[PDF]** [ADS1115 数据手册](https://files.seeedstudio.com/wiki/Grove-AI-HAT-for-Edge-Computing/res/ADS1115.pdf)

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