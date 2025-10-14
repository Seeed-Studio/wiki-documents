---
description: Grove - 12 键电容式 I2C 触摸传感器 V3 (MPR121)
title: Grove - 12 键电容式 I2C 触摸传感器 V3 (MPR121)
keywords:
- Grove Grove_Sensors Touch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-12-Key-Capacitive-I2C-Touch-Sensor-V3-MPR121
last_update:
  date: 1/19/2023
  author: jianjing Huang
---


<div align="center"><img width ="{400}" src="https://files.seeedstudio.com/wiki/Grove%20-%2012%20Key%20Capacitive%20I2C%20Touch%20Sensor%20V3%20(MPR121)/touch_sensor_V3.png"/></div>

该传感器是 Grove - 12 键电容式 I2C 触摸传感器 V2 (MPR121) 的升级版本，它在头部增加了两个 GND 端口以提高稳定性，同时前端引脚间距更宽，避免了线路意外接触造成的短路。

**Grove - 12 键电容式 I2C 触摸传感器 V3 (MPR121)** 是一个多通道接近电容式触摸传感器。它是一个 3 合 1 模块，具有以下功能：电容感应、触摸感应和接近感应。

**电容感应**：该模块使用恒定直流电流电容感应方案。它可以测量 10 pF 到超过 2000 pF 的电容，分辨率高达 0.01 pF。

**触摸感应**：一旦获取电极电容数据，通过将其与电容基线值进行比较来确定电极的触摸/释放状态。

**接近感应**：MPR121 的一个新功能是近距离接近感应系统。这意味着系统的所有电极都可以汇总在一起创建一个大型电极。

基于飞思卡尔 MPR121，该传感器具有 12 个完全独立的电极，内置自动配置功能。得益于 I2C 接口，您只需一个 Grove 端口即可检测所有 12 个电极信号，I2C 地址可硬件配置，从 0X5B 到 0X5D。这也使得多个 **Grove - 12 键电容式 I2C 触摸传感器 V3 (MPR121)** 可以在单个系统中一起使用进行通道扩展，您可以构建一个包含最多 36 个电极的触摸系统。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/CPq4VSAXBgI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-12-Key-Capacitive-I2C-Touch-Sensor-V3-MPR121-p-4694.html
" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 版本变更

|项目| Grove - 12 键电容式 I2C 触摸传感器 V2 | Grove - I2C 触摸传感器 |
|---|---|---|
|主芯片|MPR121|MPR121|
|I2C 地址|可变(0X5B ~ 0X5D)|不可修改(0X5A)|
|触摸传感器触头|x|√|
|输入接口|鳄鱼夹接口|DIP 2Pin 母头|
|性价比|高|低|
|发布时间|2018年9月11日|2015年10月31日|

## 特性

- 内置 10 位 ADC
- 每个电极输入的集成独立自动校准
- 完全独立的电极，内置自动配置
- I2C 接口，带 IRQ，中断输出以通知电极状态变化
- 硬件可配置 I2C 地址
- 12 个电极/电容感应输入，其中 8 个是多功能的，可用于 LED 驱动和 GPIO
- 每个电极输入的充电电流和充电时间自动配置
- 每个电极的独立触摸和释放触发阈值，提供滞后和电极独立性
- 增加两个 GND 引脚并扩大引脚间距以便安全操作

## 应用

- PC 外设
- MP3 播放器
- 遥控器
- 移动电话
- 照明控制

## 硬件概述

### 引脚图

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Grove%20-%2012%20Key%20Capacitive%20I2C%20Touch%20Sensor%20V3%20(MPR121)/Touch-sensor-V3-with-GND.png"/></div>

<div align="center"><img width ="{700}" src="https://files.seeedstudio.com/wiki/Grove%20-%2012%20Key%20Capacitive%20I2C%20Touch%20Sensor%20V3%20(MPR121)/V3-data.png"/></div>

:::tip
对于 CH0 ~ CH11，一旦获取到电极电容数据，就会通过将其与电容基线值进行比较来确定电极的触摸/释放状态。您可以为每个通道单独设置基线值。Pin12 ~ Pin19 是多功能的，这意味着您可以将它们配置为 GPIO 或 LED 驱动器，更多详细信息，请参考飞思卡尔应用笔记 [AN3894](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/res/AN3894.pdf)。

:::

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg)  |

:::caution
上述提到的支持平台是/是该模块软件或理论兼容性的指示。在大多数情况下，我们只为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

## 项目

这是本产品的介绍视频，包含简单的演示，您可以尝试一下。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Ds7kBVdeY4U?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

**叶子钢琴**：我们使用触摸传感器制作了一架钢琴，并用叶子作为钢琴键。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/leaf-piano-5261a6/embed' width='350'></iframe>

**玩转 Scratch**：如何使用触摸传感器玩 Scratch 游戏？

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/play-mario-using-new-grove-touch-sensor-b3f9fc/embed' width='350'></iframe>

## 技术支持与产品讨论


感谢您选择我们的产品！我们在这里为您提供不同的支持，确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>