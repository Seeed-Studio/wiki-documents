---
description: 无刷电机驱动板 TB6605FTG
title: 无刷电机驱动板 TB6605FTG
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Brushless_Motor_Shield_TB6605FTG
last_update:
  date: 01/30/2023  
  author: Eico 

no_comments: false # for Disqus

---
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/img/105030027-preview-wiki.jpg" alt="pir" width={600} height="auto" /></p>

无刷电机驱动板（TB6605FTG）是一款适用于 Arduino 兼容系统的无刷电机驱动器。它支持 9V ~ 24V 直流输入，可以持续输出大电流来驱动无刷电机。通过板载电位器，您可以轻松调节电机转速。该驱动板提供多种模式可供选择，您可以使用四个板载开关来切换功能。
  
通过板载 Grove I2C 接口，您可以轻松地将其他 Grove 模块与此驱动板配合使用，例如，您可以使用 [Grove - LCD RGB 背光显示屏](Grove - LCD RGB Backlight) 来显示电机转速。

我们还发布了 [TB6605 BLDC 电机套件（适用于 Arduino）](https://www.seeedstudio.com/TB6605-BLDC-Motor-Kit-for-Arduino-p-4024.html)，该套件基于此驱动板，包含一个 LCD 显示屏和一个高质量无刷电机来显示电机转速。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/BLDC-Motor-Shield-TB6605-p-4025.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特性

- 宽输入电压范围：9V ~ 24V
- I2C 接口
- 硬件可调速度控制（板载电位器）
- 多种模式可选：顺时针/逆时针、制动/正常、正弦波/方波

## 规格参数

<table align="center">
  <tbody>
  <tr>
    <td><h3>参数</h3></td>
    <td><h3>数值</h3></td>
  </tr>
  <tr>
    <td><h4>供电电压</h4></td>
    <td><h4>3.3V / 5V</h4></td>
  </tr>
  <tr>
    <td><h4>直流电源输入</h4></td>
    <td><h4>9V ~ 24V</h4></td>
  </tr>  
  <tr>
    <td><h4>最大输出电流</h4></td>
    <td><h4>0.02A</h4></td>
  </tr>
    <tr>
    <td><h4>驱动模式</h4></td>
    <td><h4>正弦波/方波</h4></td>
  </tr>
    <tr>
    <td><h4>电机接口</h4></td>
    <td><h4>螺丝端子</h4></td>
  </tr>
    <tr>
    <td><h4>外部 Grove 接口</h4></td>
    <td><h4>I2C</h4></td>
  </tr>
  </tbody></table>

## 硬件概述

### 引脚定义

<p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/img/pinout.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/img/pinout.jpg" /></a></p>

### 螺丝端子定义

<table align="center">
  <tbody>
  <tr>
    <td><h3>无刷电机驱动板</h3></td>
    <td><h3>无刷电机</h3></td>
    <td><h3>线缆颜色</h3></td>
  </tr>
  <tr>
    <td><h4>5V</h4></td>
    <td><h4>逻辑电源正极</h4></td>
    <td><h4>红色</h4></td>
  </tr>
  <tr>
    <td><h4>GND</h4></td>
    <td><h4>逻辑电源地</h4></td>
    <td><h4>黑色</h4></td>
  </tr>  
  <tr>
    <td><h4>HU+</h4></td>
    <td><h4>霍尔传感器 U 相</h4></td>
    <td><h4>橙色</h4></td>
  </tr>
  <tr>
    <td><h4>HV+</h4></td>
    <td><h4>霍尔传感器 V 相</h4></td>
    <td><h4>深绿色</h4></td>
  </tr>
  <tr>
    <td><h4>HW+</h4></td>
    <td><h4>霍尔传感器 W 相</h4></td>
    <td><h4>深蓝色</h4></td>
  </tr>
  <tr>
    <td><h4>U</h4></td>
    <td><h4>线圈 U 相</h4></td>
    <td><h4>黄色</h4></td>
  </tr>
  <tr>
    <td><h4>V</h4></td>
    <td><h4>线圈 V 相</h4></td>
    <td><h4>浅绿色</h4></td>
  </tr>
  <tr>
    <td><h4>W</h4></td>
    <td><h4>线圈 W 相</h4></td>
    <td><h4>浅蓝色</h4></td>
  </tr>
  </tbody></table>

<div align="center"><b>表 1.</b><i>接线对照表</i></div>

:::tip
如果您使用的不是 42BLF01 无刷电机，接线颜色可能会有所不同，请根据具体情况进行连接
:::

## 入门指南

### 所需材料

- [无刷电机扩展板 (TB6605FTG) x1](https://www.seeedstudio.com/BLDC-Motor-Shield-TB6605-p-4025.html)
- [Grove - LCD RGB 背光 x1](Grove - LCD RGB 背光)
- [Arduino 或 Seeedunio x1](https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html)
- 无刷电机 x1

或者您可以直接使用我们的 [TB6605FTG Arduino 无刷电机套件](https://www.seeedstudio.com/TB6605-BLDC-Motor-Kit-for-Arduino-p-4024.html)，该套件包含无刷电机扩展板、42BLF01 无刷电机和一个 Grove - LCD RGB 背光。

### 硬件连接

- **步骤 1.** 将无刷电机连接到无刷电机扩展板的螺丝端子，请参考**表 1**。

- **步骤 2.** 将 Grove - LCD RGB 背光连接到无刷电机扩展板上的 Grove I2C 端口。

- **步骤 3.** 将无刷电机扩展板插入您的 Arduino 或 Seeeduino。

- **步骤 4.** 通过 DC 插座为扩展板供电，并通过 USB 线缆为 Arduino 供电。

  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/img/connect.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/img/connect.png" /></a></p>

### 软件

:::caution
如果这是您第一次使用 Arduino，我们强烈建议您在开始之前先查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.**  
从 Github 下载 [BLDC 电机扩展板 (TB6605) 库](https://github.com/Seeed-Studio/BLDC_Motor_Shield_TB6605)。
从 Github 下载 [Grove-LCD RGB 背光库](https://github.com/Seeed-Studio/Grove_LCD_RGB_Backlight/archive/master.zip)。

- **步骤 2.** 参考 [如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库。

- **步骤 3.** 重启 Arduino IDE。打开示例，您可以通过以下路径打开：**文件 --> 示例 -->BLDC Motor Shield (TB6605)--> TB6605_demo**。

<p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/img/ARDUINO.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/img/ARDUINO.jpg" /></a></p>

- **步骤 4.** 上传演示程序。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

:::tip
如果一切正常，您可以看到直流电机运行，LCD 将显示速度。现在您可以旋转电位器来控制电机的速度。
:::

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/res/Brushless%20Motor%20Shield%20(TB6605FTG)%20v1.01.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]** [BLDC 电机扩展板 (TB6605) Eagle 文件](https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/res/Brushless%20Motor%20Shield%20(TB6605FTG)%20v1.01.zip)

- **[PDF]** [42BLF01 无刷电机规格书](https://files.seeedstudio.com/wiki/BLDC-Motor-Shield-TB6605/res/42BLF01-Specification.pdf)

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