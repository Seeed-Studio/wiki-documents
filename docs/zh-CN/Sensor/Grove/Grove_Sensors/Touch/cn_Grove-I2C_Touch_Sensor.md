---
description: Grove - I2C 触摸传感器
title: Grove - I2C 触摸传感器
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-I2C_Touch_Sensor
last_update:
  date: 2/22/2023
  author: jianjing Huang
---
<!-- ---
name: Grove - I2C Touch Sensor
category: Sensor
bzurl: https://seeedstudio.com/Grove-I2C-Touch-Sensor-p-840.html
oldwikiname: Grove_-_I2C_Touch_Sensor
prodimagename: Grove-I2C-Touch-Sensor.jpg
bzprodimageurl: https://statics3.seeedstudio.com/images/P3202380.jpg
surveyurl: https://www.research.net/r/Grove-I2C_Touch_Sensor
sku: 101020047
tags: grove_i2c, io_3v3, io_5v, plat_duino, plat_linkit
--- -->

![](https://files.seeedstudio.com/wiki/Grove-I2C_Touch_Sensor/img/Grove-I2C-Touch-Sensor.jpg)

I2C 触摸传感器基于飞思卡尔的接近电容式触摸传感器控制器 - MPR121。它可以检测人类手指的触摸或接近。该传感器包括一个触摸传感器控制器和 4 个手指感应器。用户可以将感应器的连接器插入传感器控制器的底座，然后开始感应触摸。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/Grove-I2C-Touch-Sensor-p-840.html)

规格参数
-------------

| 参数              | 数值/范围                         |
|------------------------|-------------------------------------|
| 工作电压      | 3~5.5V                              |
| 待机模式电流   | 2μA                                 |
| 触摸通道         | 12 个（包括 4 个带触摸感应器的通道） |
| 通信协议 | I2C                                 |
| I2C 地址            | 0x5A                     |

:::tip
更多关于 Grove 模块的详细信息请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

支持的平台
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
上述提到的支持平台是/是该模块软件或理论兼容性的指示。在大多数情况下，我们只为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

硬件概述
-----------------

![](https://files.seeedstudio.com/wiki/Grove-I2C_Touch_Sensor/img/DSC_0030.png)

有 12 个电极 CH0-CH11。CH0-CH3 连接到 4 个触摸感应器。

CH4-CH11 供客户扩展功能使用。如果您需要更多，可以自己制作感应器。

感应器的导线是扭绞的，以减少环境的影响。如果需要高灵敏度，可以切断黑色（接地）导线。

如果客户想要使用 MPR121 的中断引脚，则必须引出 INT 引脚。

入门指南
---------------

### **Grove - 帮助**

以下文档帮助用户开始使用 Grove。

- [前言 - 入门指南](https://www.seeedstudio.com/document/pdf/Preface.pdf)
- [Grove 介绍](https://www.seeedstudio.com/document/pdf/Introduction%20to%20Grove.pdf)

:::note
由于每个电极都需要在上电期间由 MPR121 自动配置，而触摸传感器控制器上没有电源复位，每次插入或移除感应器时，都需要重置 Seeeduino 的电源。
:::

感应器也可以通过中间有物体的方式感应到人类手指，也就是说，您实际上不需要用手指直接触摸感应器。

![](https://files.seeedstudio.com/wiki/Grove-I2C_Touch_Sensor/img/DSC_0026.jpg)

![](https://files.seeedstudio.com/wiki/Grove-I2C_Touch_Sensor/img/DSC_0027.jpg)

通过约 3 毫米厚的纸板，感应器可以感应到手指的触摸，这使其成为许多应用的良好解决方案。

### 使用 Codecraft 进行编程

#### 硬件

**步骤 1.** 使用 Grove 线缆将 Grove - I2C 触摸传感器连接到 Seeeduino 的 I2C 端口。如果您使用的是 Arduino，请使用 Base Shield。

**步骤 2.** 通过 USB 线缆将 Seeedino/Arduino 连接到您的 PC。

#### 软件

**步骤 1.** 打开 [Codecraft](https://ide.chmakered.com/)，添加 Arduino 支持，并将主程序拖到工作区域。

:::note
如果这是您第一次使用 Codecraft，请参阅 [使用 Arduino 的 Codecraft 指南](https://wiki.seeedstudio.com/cn/Guide_for_Codecraft_using_Arduino/)。
:::

**步骤 2.** 按照下图拖拽代码块，或打开可在本页面末尾下载的 cdc 文件。

![cc](https://files.seeedstudio.com/wiki/Grove-I2C_Touch_Sensor/img/cc_I2C_Touch_Sensor.png)

将程序上传到您的 Arduino/Seeeduino。

:::tip
当代码上传完成后，您将在串口监视器中看到您触摸的是哪个通道。
:::

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-I2C_Touch_Sensor/res/I2C_Touch_Sensor_eagle_files-v1.1-.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

资源
---------

- [I2C 触摸传感器库](https://github.com/Seeed-Studio/Grove_I2C_Touch_Sensor)
- [I2C 触摸传感器 eagle 文件(v1.1).zip](https://files.seeedstudio.com/wiki/Grove-I2C_Touch_Sensor/res/I2C_Touch_Sensor_eagle_files-v1.1-.zip)
- [I2C 触摸传感器 PDF](https://files.seeedstudio.com/wiki/Grove-I2C_Touch_Sensor/res/Grove-I2C_Color_sensor_v1.2.pdf)
- [如何检测手指触摸？](/cn/How_to_detect_finger_touch)
- [I2C 触摸传感器数据手册](https://files.seeedstudio.com/wiki/Grove-I2C_Touch_Sensor/res/Freescale_Semiconductor;MPR121QR2.pdf)
- [Codecraft CDC 文件](https://files.seeedstudio.com/wiki/Grove-I2C_Touch_Sensor/res/Grove_I2C_Touch_Sensor_CDC_File.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_I2C_Touch_Sensor -->

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