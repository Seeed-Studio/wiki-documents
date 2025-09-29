---
description: Grove - 三轴数字陀螺仪
title: Grove - 三轴数字陀螺仪
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-3-Axis_Digital_Gyro
last_update:
  date: 1/6/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/Grove-3-Axis_Digital_Gyro.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/Grove-3-Axis_Digital_Gyro.jpg" alt="pir" width={600} height="auto" /></p>


Grove - 三轴数字陀螺仪模块基于 ITG 3200。它是全球首款单芯片、数字输出、三轴 MEMS 运动处理陀螺仪，专为游戏、3D 鼠标以及基于运动的远程控制应用（如互联网连接的数字电视和机顶盒）优化设计。ITG-3200 配备三个 16 位模数转换器（ADC）用于数字化陀螺仪输出，支持用户选择的内部低通滤波器带宽，以及快速模式 I2C（400kHz）接口。

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-3-Axis-Digital-Gyro-p-750.html)

功能特点
--------

-   供电电压：3.3V，5V
-   工作电流：6.5mA
-   待机电流：5μA
-   灵敏度：每°/秒 14 LSBs
-   全量程范围：±2000°/秒
-   加速度：10,000g 持续 0.3ms
-   I2C 接口
-   ±2000°/秒全量程范围和每°/秒 14.375 LSBs 灵敏度
-   集成三个 16 位 ADC
-   芯片内置温度传感器
-   集成放大器和低通滤波器
-   密封设计，耐温湿
-   符合 RoHS 和绿色环保标准

:::tip
    更多关于 Grove 模块的详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::
支持平台
-------------------

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|
:::caution
    上述提到的支持平台仅表示模块的软件或理论兼容性。我们通常仅为 Arduino 平台提供软件库或代码示例。无法为所有可能的 MCU 平台提供软件库或演示代码，因此用户需要自行编写软件库。
:::
演示
-------------

此演示将向您展示如何从该数字陀螺仪获取数据，数据单位为 rad/s。

这里我们需要一个 Grove - 三轴数字陀螺仪和一个 Seeeduino V3.0。

### 硬件安装

硬件安装非常简单，因为 Seeeduino 上有一个 I2C Grove 接口，

所以我们需要做的就是通过 Grove 电缆将其连接到 I2C Grove 接口。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/Grove-3-Axis_Digital_Gyro_Hardware.JPG) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/Grove-3-Axis_Digital_Gyro_Hardware.JPG" alt="pir" width={600} height="auto" /></p>


### 下载代码并上传

您可以在 GitHub 上下载库，点击 [这里](https://github.com/Seeed-Studio/Grove_3_Axis_Digital_Gyro/)，然后将其解压到 Arduino 的 libraries 文件夹中。

然后打开 File -> examples -> Grove_3_Digital_Gyro -> ITG3200_gyro，您可以打开演示代码。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/ITG3200_gyro_ArduinoIde.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/ITG3200_gyro_ArduinoIde.jpg" alt="pir" width={600} height="auto" /></p>


<!-- 点击 Upload 上传代码，如果您对如何开始使用 Arduino 有任何问题，请点击 [这里](/cn/Getting_Started_with_Seeeduino) 获取帮助。 -->



### 检查结果

现在，您可以打开串口监视器检查结果。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/Grove-3-Axis_Digital_Gyro_SerialDta.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/Grove-3-Axis_Digital_Gyro_SerialDta.jpg" alt="pir" width={600} height="auto" /></p>

参考
---------

下图显示了三个轴的方向。您可以使用它来理解结果的物理意义。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/Gyro_Reference_1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/Gyro_Reference_1.jpg" alt="pir" width={600} height="auto" /></p>

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/res/Grove-3-Axis_Digital_Gyro_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

资源
---------

-   [ITG-3200 数据手册](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/res/ITG-3200.pdf)
-   [Grove - 3轴数字陀螺仪 Eagle 文件](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/res/Grove-3-Axis_Digital_Gyro_Eagle_File.zip)
-   [数字陀螺仪库](https://github.com/Seeed-Studio/Grove_3_Axis_Digital_Gyro)


<!-- 此 Markdown 文件来源于 https://www.seeedstudio.com/wiki/Grove_-_3-Axis_Digital_Gyro -->

## 技术支持与产品讨论
感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时获得流畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>