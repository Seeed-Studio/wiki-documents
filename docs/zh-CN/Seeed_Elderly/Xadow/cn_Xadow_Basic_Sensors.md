---
description: Xadow - 基础传感器
title: Xadow - 基础传感器
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Xadow_Basic_Sensors
last_update:
  date: 1/13/2023
  author: shuxu hu
---

---
![](https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/images/Xadow_Basic_Sensors.JPG)

Xadow 基础传感器在一个单板上集成了三种不同的传感器：
- 用于运动检测、活动监测和速度跟踪的三轴加速度计
- 双二极管数字光传感器，可分别测量红外光、全光谱或人眼可见光
- 用于温度监测的温度传感器

[![](https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/images/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/Xadow-Basic-Sensors-p-2555.html)

## 特性
---
- 三合一传感器板
- 与 RePhone Kit Create 连接后即插即用
- 开源和模块化设计
- 纤薄小巧
- 内置 11 PIN Xadow 连接器，可与其他 Xadow 模块灵活连接
- 可堆叠、可链式连接、可缝合到其他 Xadow 模块

## 规格
---
**概览**

|项目|值|
|---|---|
|微控制器|STM32F030F4|
|核心|ARM® 32位 Cortex® -M0 CPU|
|电源|3.3 ~ 6 V（通过断路引脚）|
|闪存|16 KB|
|SRAM|4 KB|
|时钟速度|48 MHz|
|工作温度范围|-30°C 至 70°C|
|接口|通过 I2C（7位地址 0x03）与 Xadow GSM+BLE 接口|
|尺寸|25.37mm × 20.30mm / 1” × 0.8”|

**三轴加速度计 (ADXL345)**

|项目|值|
|---|---|
|测试 g 范围|±2g（默认），±4g，±8g 或 ±16g|
|分辨率|随 g 范围增加，最高可达 ±16g 时的 13 位分辨率|

**数字光传感器 (TSL2561) -- 模拟人眼响应**

|项目|值|
|---|---|
|动态范围 (Lux)|0.1 至 40,000 Lux|
|双光电二极管|红外和全光谱|

**温度传感器 (LM75ADP)**

|项目|值|
|---|---|
|温度范围|-55°C 至 125°C|
|精度|-25°C 至 100°C 范围内为 ±2°C / -55°C 至 25°C 和 100°C 至 125°C 范围内为 ±3°C|

## 硬件概览
---
![](https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/images/Xadow_Basic_Sensors.png)

## 与 RePhone Kit Create 一起使用
---
**获取传感器数据**

无需任何编程，您可以将其连接到您的 “RePhone Kit Create” 的核心模块（Xadow GSM+BLE），以读取传感器的所有数据。
![](https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/images/Xadow_Basic_Sensors_Sensor_Value.png)

**设置“如果这样则那样”**

您还可以将传感器数据设置为条件，以触发一系列执行器，例如音频、LED 矩阵和 LED 灯条，或触发动作，例如拨打电话和发送消息。
![](https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/images/Xadow_Basic_Sensors_Set_Sensor_Condition.png)

## RePhone 社区
---
[![](https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/images/300px-RePhone_Community-2.png)](https://community.seeedstudio.com/discover.html?t=RePhone)

我们一直在寻找一个更好的地方，让我们的支持者（RePhone 用户）可以聚在一起，温暖舒适地交流关于 RePhone 的话题，讨论技术问题，分享想法/项目，并对模块未来的开发提出反馈。于是，我们创建了 [RePhone 社区](https://community.seeedstudio.com/discover.html?t=RePhone)。

现在加入 [RePhone 社区](https://community.seeedstudio.com/discover.html?t=RePhone)！我们一起寻找答案，制作有趣的东西，关心彼此，分享我们的经验。

**常见问题**

一些在 [RePhone 社区](https://community.seeedstudio.com/discover.html?t=RePhone) 中常见的问题已被收集并回答在主题“RePhone 常见问题解答 (FAQ)”中，该主题会在有新的常见问题出现时持续更新。

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/resources/202000745_PCBA%3BXadow%20Basic%20Sensors%20v1.0_schemic%20file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## 资源
---
我们会持续在我们的 GitHub 页面更新源代码：
- [Xadow Basic Sensors 源代码](https://github.com/WayenWeng/Xadow_Basic_Sensors/)

以下链接提供了 Xadow Basic Sensors 的原理图文件：
- [Xadow Duino 原理图文件](https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/resources/202000745_PCBA%3BXadow%20Basic%20Sensors%20v1.0_schemic%20file.zip)

查看每个传感器的详细数据手册：
- [ADXL345 - 三轴加速度计](https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/res/ADXL345-3_Axis_Acceserometer.pdf)
- [LM75A NXP - 温度传感器](https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/res/LM75A_NXP-Temperature_Sensor_.pdf)
- [TSL2561 - 光传感器](https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/res/TSL2561-Light_Sensor_.pdf)

以及 MCU STM32F030F4：
- [STM32F030F4](https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/res/STM32F030F4.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>