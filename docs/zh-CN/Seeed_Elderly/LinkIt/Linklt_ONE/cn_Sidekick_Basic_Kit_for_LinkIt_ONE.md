---
description: LinkIt ONE 的 Sidekick 基础套件
title: LinkIt ONE 的 Sidekick 基础套件
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Sidekick_Basic_Kit_for_LinkIt_ONE
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_LinkIt_ONE/img/SKP-0.jpg)


##   LinkIt ONE 快速入门

在这里我们将讨论如何使用 LinkIt ONE。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Sidekick-Basic-Kit-for-LinkIt-ONE-p-2027.html)

##   基础知识

让我们使用一个晶体管、LED 和一个拨动开关来构建一个简单的电路。发光二极管（LED）将电能转化为可见光。晶体管是电子学中的基本组件，可以充当开关或电流放大器。在这里，我们使用开关通过晶体管间接控制 LED 的开关。

<!-- 点击 [这里](/cn/LinkIt_ONE_Tutorial-The_Basics) 查看完整教程。 -->

##   第2课：Hello World

在上一节中，我们了解了如何使用电子元件控制 LED，但现在让我们通过软件进行一些自动控制 LED 的操作。您只需上传本节提供的代码即可。代码最初会打开 LED，延迟3秒后关闭 LED。让我们开始使用 LinkIt 开发板吧。

<!-- 点击 [这里](/cn/LinkIt_ONE_Tutorial-Hello_World) 查看完整教程。 -->

##   第3课：按钮开关

在上一章中，我们已经了解了软件和硬件的工作原理。在本章中，我们将学习如何将软件和硬件结合起来控制 LED。按照图 3.2 所示进行面包板连接并上传代码。现在这个电路可以作为一个双向开关，当按下左侧按钮开关时，LED 会亮起；当按下右侧按钮开关时，LED 会熄灭。

<!-- 点击 [这里](/cn/LinkIt_ONE_Tutorial-Push_Button) 查看完整教程。 -->

##   第4课：跑马灯

前几节实验中我们只使用了一个 LED，为了展示炫目的灯光效果，让我们使用三个 LED。按照图 4.2 所示进行连接并上传下面的代码，观察发生的变化。

<!-- 点击 [这里](/cn/LinkIt_ONE_Tutorial-Marquee) 查看完整教程。 -->

##   第5课：彩色世界

我们现在已经知道如何控制 LED，让我们结合一些关于颜色混合的基本知识。红色 (R)、绿色 (G)、蓝色 (B) 是三原色，这些颜色以不同比例混合可以产生不同的颜色。一个 RGB LED 包含四个引脚，长引脚是正极，其他三个引脚用于控制 RGB 颜色。按照图 5.2 所示进行连接并上传代码。

<!-- 点击 [这里](/cn/LinkIt_ONE_Tutorial-Colorful_World) 查看完整教程。 -->

##   第6课：模拟接口

在前几节中，我们学习了如何使用数字接口控制电路的输入和输出。在本节中，我们将学习如何使用一个称为电位器（也称为可变电阻）的模拟设备来改变输出。电位器用于将电压范围调整为 0 ~ 5V。MPU 会读取电压值范围为 0-1023。这可以用来控制 LED 的亮度（PWM 模拟输出接口）。如果顺时针旋转电位器，LED 会逐渐变亮；如果逆时针旋转，亮度会逐渐减弱。

<!-- 点击 [这里](/cn/LinkIt_ONE_Tutorial-Analog_Interface) 查看完整教程。 -->

## 第7课：迷你舵机

舵机（Servo motor）通常用于小型机器人和其他机器中，以控制角度位置。它由一个小型齿轮箱包裹，并通过定时控制脉冲进行定位。在本节中，我们将借助电位器来控制迷你舵机的角度位置。

<!-- 点击[这里](/cn/LinkIt-ONE-Tutorial---Mini-Servo)查看完整教程。 -->

## 第8课：光传感器

现在是时候了解一些新的传感器了，这些传感器可以让我们的项目更加有趣。光敏电阻（光依赖电阻或光电池）是一种光传感器，其电阻值会根据环境光的强度变化。蜂鸣器是一种电声设备，当连接到电源时可以产生标准音调。让我们在实验中使用这两个组件。

<!-- 点击[这里](/cn/LinkIt_ONE_Tutorial-Light-Sensor)查看完整教程。 -->

## 第9课：通过短信控制LED

在本节中，我们将实现一些很酷的功能。LinkIt One的一个突出特点是集成了通信模块。我们将通过GSM通信模块传输消息，将开关状态传递以改变LED状态。这将非常令人兴奋。首先连接天线，然后将SIM卡插入LinkIt One的插槽中，然后根据原理图连接电路。使用支持GSM的手机，编辑消息内容为ON或OFF，发送到指定号码（SIM卡号码），现在您可以控制LED的开关状态，并实现全球同步。

<!-- 点击[这里](/cn/LinkIt_ONE_Tutorial-SMS_control_the_LED)查看完整教程。 -->

## 第10课：通过网页获取温度

LinkIt One具有Wi-Fi通信功能。我们通过LinkIt One收集了一些数据。作为互联网AP，它通过提供Web服务器支持数据访问。通过浏览器访问对应的IP地址即可获取数据。下一步需要连接电路，从温度传感器采集数据。然后配备Wi-Fi天线并连接到网络，请选择网络并填写三个参数：网络名称（WiFi_AP）、访问密码（WIFI_PASSWORD）以及路由器的传输模式（选项LWIFI_OPEN、LWIFI_WPA、LWIFI_WEP）。最后，将代码上传到LinkIt One。使用带网络的终端设备，打开浏览器并输入IP地址即可获取温度数据。（通过DHCP路由器访问分配的IP地址）

<!-- 点击[这里](/cn/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage)查看完整教程。 -->

## 资源

*   [LinkIt ONE的Sidekick基础套件Github仓库](https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt)

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