---
description: FM 接收器
title: FM 接收器
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/FM_Receiver
last_update:
  date: 1/31/2023
  author: shuxu hu
---


## 硬件安装

### 零件清单

* [Seeeduino Lotus v1.0](https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html)
* [Grove - LCD RGB 背光](https://www.seeedstudio.com/Grove-LCD-RGB-Backlight-p-1643.html)
* [Grove - I2C FM 接收器](https://www.seeedstudio.com/Grove-I2C-FM-Receiver-p-1953.html)
* [Grove - 按钮](https://www.seeedstudio.com/Grove-Button-p-766.html)
* [Grove - 旋转角度传感器](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor-p-770.html)

### 硬件连接

硬件连接非常简单，Grove - LCD RGB 背光和 Grove - I2C FM 接收器通过 I2C 通信，Grove - 按钮是数字输入，Grove - 旋转角度传感器是模拟输入。因此可以按如下所示进行连接。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/Seeeduino_Lotus_usage.jpg)

## 软件部分

* 要在 github 上下载演示代码，请点击[这里](https://github.com/Seeed-Studio/Seeeduino_lotus_Usage)。
* 打开 I2C_FM_RGB_LCD 示例程序，编译并上传到您的开发板。
* 按下按钮开始搜索 FM 电台，转动旋转角度传感器调节音量。

## 技术支持与产品讨论

   <br />
感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>