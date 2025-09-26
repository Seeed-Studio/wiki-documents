---
description: LinkIt ONE 教程 - 使用短信控制 LED
title: LinkIt ONE 教程 - 使用短信控制 LED
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/LinkIt_ONE_Tutorial-SMS_control_the_LED
last_update:
  date: 1/13/2023
  author: shuxu hu
---

**我们正在做什么**

在本节中，我们将实现一些很酷的功能。LinkIt ONE 的突出特点是集成了通信模块。我们将通过 GSM 通信模块传输消息，将开关状态传递以改变 LED 的状态。这将非常令人兴奋。首先连接天线，然后将 SIM 卡插入 LinkIt ONE 的插槽中，然后根据原理图连接电路。使用支持 GSM 的手机，编辑消息内容为 ON 或 OFF，发送到指定号码（SIM 卡号码），现在您可以控制 LED 的开关状态，并实现全球同步。

**所需物品**

*   LinkIt ONE x 1

*   扩展板 x 1

*   电阻 1kΩ, 330Ω x 1

*   晶体管（2N3904） x 1

*   GIS 天线 x 1

**原理图**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-SMS_control_the_LED/img/LinkItONE_Kit_1_1.jpg)

**连接**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-SMS_control_the_LED/img/LinkItONE_Kit_1_2.png)

**代码**

请点击下面的按钮下载套件代码：

[![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-SMS_control_the_LED/img/Code_sidekick_linkit.png)](https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt)

您可以将文件解压到 Arduino IDE 的 **Examples** 文件夹中。

要访问示例代码，请打开：

_File -> Examples -> Starter Kit for LinkIt -> Basic -> L9_SMS_Light_

*   天线无法工作？

    *   请注意检查天线连接是否稳定。（天线插座在背面，标记为 GSM-ANT）

*   发送消息没有响应？

    *   SIM 卡需要解锁为自由版本。（即不受任何手机限制的 SIM 卡）

**让它更好**

完善 GSM 模块的通信功能。如果我们想设置一个短时间，如何修改代码？设置一个 60 秒的时间（发送格式为 ON60）。发送消息后，设置灯光在到达后自动在一分钟内熄灭。

要访问示例代码，请打开：

_File -> Examples -> Starter Kit for LinkIt -> Extend_Lesson -> L10_SMS_Light_Advanced_

**更多想法**

结合蓝牙、GPS、Wi-Fi 功能模块。看看是否有新的玩法？

**参考**

<!-- *   [基础知识](/cn/LinkIt_ONE_Tutorial-The_Basics)

*   [Hello World](/cn/LinkIt_ONE_Tutorial-Hello_World)

*   [按钮开关](/cn/LinkIt_ONE_Tutorial-Push_Button)

*   [跑马灯](/cn/LinkIt_ONE_Tutorial-Marquee)

*   [多彩世界](/cn/LinkIt_ONE_Tutorial-Colorful_World)

*   [模拟接口](/cn/LinkIt_ONE_Tutorial-Analog_Interface)

*   [迷你舵机](/cn/LinkIt-ONE-Tutorial---Mini-Servo)

*   [光传感器](/cn/LinkIt_ONE_Tutorial-Light-Sensor)

*   [短信控制 LED](/cn/LinkIt_ONE_Tutorial-SMS_control_the_LED)

*   [通过网页获取温度](/cn/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage) -->

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