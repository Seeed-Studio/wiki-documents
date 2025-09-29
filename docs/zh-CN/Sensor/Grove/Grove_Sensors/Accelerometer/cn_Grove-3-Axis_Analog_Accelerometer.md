---
description: Grove - 三轴模拟加速度计
title: Grove - 三轴模拟加速度计
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-3-Axis_Analog_Accelerometer
last_update:
  date: 1/5/2023
  author: shuxu hu
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/img/Grove-3-axis_Analog_Accelerometer_photo.JPG" alt="pir" width={600} height="auto" /></p>

ADXL335 是一款小型、薄型、低功耗的完整三轴加速度计，具有信号调节电压输出。该产品测量加速度，最小满量程范围为 ±3 g。由于 ADXL335 的信号是模拟信号（需要更多端口），该模块设计为分线板。但其板轮廓是 Grove 模块，您可以像其他 Grove 模块一样方便地固定它。传感器结合了 3.3V 和 5V 电源，可以用于标准 Arduino 设备和 Seeeduino Stalker。以下程序代码包含一阶滤波器，如果传感器用于机器人或玩具车，可以使输出更加平滑。

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-p-1086.html)

功能
--------

-   宽电源范围 DC3V 至 5V
-   Grove 外形
-   三轴感应
-   小型、低剖面封装：4×4×1.45mm LFCSP
-   低功耗 350µA 在 3V（典型值）
-   高灵敏度
-   10,000 g 冲击生存能力
-   每轴使用单个电容器进行带宽调整
-   符合 RoHS/WEEE 无铅标准

:::tip
    有关 Grove 模块的更多详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

应用场景
-----------------

-   运动传感器
-   冲击检测器
-   振动传感器
-   玩具车
-   机器人

支持的平台
-------------------

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    上述提到的支持平台是模块软件或理论兼容性的指示。我们通常仅为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库/演示代码。因此，用户需要自行编写软件库。
:::

使用前
------------

我们建议您在使用气体传感器之前阅读以下知识，这将帮助您更好地了解 Arduino 和我们的产品，同时也能让您更轻松地使用开源硬件。

-  Arduino 入门指南
-  什么是 Grove 系统
-  为什么需要 Base shield？

阅读完这些内容后，您将了解如何使用 Base shield 与 Grove 产品配合 Arduino 工作。让我们开始吧！

入门指南
-----

传感器的外形是分线板，您可以在板上焊接线或使用跳线连接传感器。

-   VCC 连接到电源（DC5V 或 DC3.3V），GND 连接到地，X 连接到 Arduino 模拟端口 A0，Y 连接到 A1，Z 连接到 A2。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/img/Grove-3-axis_analog_accelerometer_V1.0_hardware.jpg" alt="pir" width={600} height="auto" /></p> 

-   下载 [3-Axis Analog Accelerometer Library](https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/res/AnalogAccelerometer.zip) 并将其解压到 Arduino IDE 的库文件路径：..\\arduino-1.0.1\\libraries。
-   校准传感器

传感器是模拟设备，在将其与您的系统结合之前需要进行校准。

**步骤 1:** 打开示例代码：Calibration 并上传到 Arduino。

**步骤 2:** 打开串口监视器，确保传感器已连接。按照传感器板上打印的轴说明操作。首先，确保 Z 轴方向垂直向上，准备好后请键入任意字符。改变传感器位置，重复上述操作以确保 X 轴和 Y 轴方向垂直向上。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/img/3-Axis_Analog_Accelerometer.jpg" alt="pir" width={600} height="auto" /></p>

**步骤 3：** 您可以按照上述方法获取数值。请将这些结果修改为 ADXL335.h 文件中的宏定义。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/img/Analog_Accelerometer_Code.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/img/Analog_Accelerometer_Code.jpg" alt="pir" width={600} height="auto" /></p>

现在校准已经完成。

-   下载示例代码：测量加速度，然后打开串口监视器，随意旋转传感器，您可以看到加速度计发送到监视器的数字角度值。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/img/3-Axis_Analog_Accelerometer1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/img/3-Axis_Analog_Accelerometer1.jpg" alt="pir" width={600} height="auto" /></p>

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/res/Grove-3-Axis_Analog_Accelerometer_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

资源
---------

-   [Grove - 3轴模拟加速度计 Eagle 文件](https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/res/Grove-3-Axis_Analog_Accelerometer_Eagle_File.zip)

-   [3轴模拟加速度计库](https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/res/AnalogAccelerometer.zip)

-   [3轴模拟加速度计的 GitHub 仓库](https://github.com/Seeed-Studio/Grove_3Axis_Analog_Accelerometer)

-   [ADXL335 数据手册.pdf](https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/res/ADXL335_datasheet.pdf)

## 项目

**Grove - 3轴数字加速度计简介** 如何使用3轴数字加速度计。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ingo-lohs/grove-introduction-in-3-axis-digital-accelerometer-ea05c3/embed' width='350'></iframe>

<!-- 此 Markdown 文件来源于 https://www.seeedstudio.com/wiki/Grove_-_3-Axis_Analog_Accelerometer -->

**太阳能板双重管理系统 (SP DMS)** 此物联网原型执行两个功能：1) 防盗和 2) 使用 LinkIt ONE 和传感器进行太阳能板维护指示。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/skyline/solar-panel-dual-management-system-sp-dms-3a87ca/embed' width='350'></iframe>

## 技术支持与产品讨论
感谢您选择我们的产品！我们提供多种支持渠道，确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>