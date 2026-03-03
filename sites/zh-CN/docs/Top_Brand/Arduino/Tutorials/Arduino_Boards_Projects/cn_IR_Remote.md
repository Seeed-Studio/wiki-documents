---
description: 红外遥控器
title: 红外遥控器
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/IR_Remote
last_update:
  date: 2/15/2023
  author: jianjing Huang
---
<!-- ---
name: IR Remote
category: Tutorial
oldwikiname:  IR Remote
prodimagename:  
surveyurl: https://www.research.net/r/IR_Remote
--- -->
红外线是一种非常常见的通信方式。本演示将向您展示如何使用红外发送和接收模块。

大量的家用电器都是通过红外遥控器控制的，如电视、空调等。

我们也可以使用红外模块来控制这些电器。

**所需硬件：**

* Arduino

* 红外发射器

* 红外接收器

* 按钮

**电路：**

红外发射器连接到D3，红外接收器连接到A4。

![](https://files.seeedstudio.com/wiki/IR_Remote/img/Sidekick_36_1.png)

**代码：**

代码分为两部分：获取遥控器的值和发送命令。

获取遥控器的值：

打开IRSendRev库的revTest，打开串口监视器。拿起您的遥控器，按下一个按钮，然后您可以看到一系列数字被打印出来。

![](https://files.seeedstudio.com/wiki/IR_Remote/img/Sidekick_36_2.png)

这一系列数字就是我们需要的，记录下来，我们稍后会用到。

发送命令

打开Arduino IDE，点击文件->示例->infrared。

如果您已经获得了电视开关键的值，那么将红外发射器对准您的电视，然后按下按钮。

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