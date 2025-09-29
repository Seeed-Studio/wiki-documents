---
description: 如何选择合适的线缆
title: 如何选择合适的线缆
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/How_To_Choose_The_Right_Cable
last_update:
  date: 02/01/2023
  author: w0x7ce

no_comments: false # for Disqus

---
<!-- ---
name: 如何选择合适的线缆
category: 教程
title:  如何选择合适的线缆
prodimagename:
surveyurl: https://www.research.net/r/How_To_Choose_The_Right_Cable
--- -->

## 一个糟糕的例子

在这里我们将介绍 Seeed 提供的各种线缆。当你制作演示时，很难避免跳线。说实话，我讨厌跳线，这真的很乱。但有时你不得不跳线，你不能为一个简单的应用制作 PCB。

我们不得不承认跳线是必要的，那么为什么不选择一些合适的线缆，让我们的演示更加整洁呢。
下图显示了一个糟糕的跳线例子。

![](https://files.seeedstudio.com/wiki/How_To_Choose_The_Right_Cable/img/How_to_choose_cable_1.jpg)

你是否觉得很乱？

那么，让我们开始线缆之旅吧！

## Grove 线缆

Grove 线缆是 Grove 系统中最常见的线缆。它们用于连接 [Base Shield](https://www.seeedstudio.com/depot/base-shield-v13-p-1378.html?cPath=98_16) 到 Grove 传感器、执行器或设备。由于 Grove 扩展板支持同时连接多个设备，项目可能需要多根 Grove 线缆。

Grove 线缆有几种不同的长度可选，从 5cm（约 2"）到 50cm（约 20"）。根据你的原型制作或项目区域中可用的自由空间，或者你需要多紧密地打包你的 Grove 设备或嵌入式系统来选择长度。以下是各种长度 Grove 线缆产品页面的一些直接链接。Grove 线缆适用于点对点连接，例如连接 Grove 扩展板到 Grove 设备。还有其他类型的 Grove 线缆用于其他应用。

Grove 线缆具有四根颜色编码的导线和两个公型模块化连接器。通常，一端插入 Grove 扩展板，另一端插入 Grove 设备。模块化连接器是有键控的，意味着它们的形状是独特的，只能以唯一的方式插入扩展板或设备上的配对连接器中。当将 Grove 线缆连接器插入扩展板或设备时，请确保施加足够的压力将两者锁定到位。

Grove 线缆是直通连接的。也就是说，连接器 A 的引脚 1 连接到连接器 B 的引脚 1，引脚 2 连接到引脚 2，依此类推。导线也有颜色编码。引脚 1 是黄色，引脚 2 是白色，引脚 3 是红色，引脚 4 是黑色。通常，引脚 1 和 2 是信号，例如 A1/A2 或 D1/D2，而引脚 3 和 4 是电源和地。

- [5cm](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack.html)

- [20cm](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-5-PCs-pack.html)

- [30cm](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-30cm-Cable-5-PCs-Pack.html)

- [40cm](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-40cm-Cable-5-PCs-Pack.html)

- [50cm](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-50cm-Cable-5-PCs-Pack.html)

## Grove - 分支线缆

[[链接](https://www.seeedstudio.com/Grove-Branch-Cable-5PCs-pack.html)]

Grove 分支线缆是 Grove 系统中使用的一种线缆。它由三个公型锁扣连接器和四根彩色编码线组成。Grove 分支线缆可用于支持将多个 Grove 设备菊花链连接到 Grove 扩展板。通常，一端连接到 Grove 扩展板，第二和第三个连接器连接到两个 Grove 设备。

与 Grove 线缆系列的其他成员一样，公型连接器具有防呆设计。这意味着它们具有独特的形状，只能以一种方式插入扩展板和设备上的匹配连接器。此外，在将连接器连接到扩展板或设备时，请务必用力按压，使 Grove 分支线缆上的公型连接器与 Grove 扩展板或 Grove 设备上的母型插座配合。由于 Grove 分支线缆具有锁扣（有时称为"扣具"或"带扣线缆"），当锁扣闭合时，您会听到轻微的声音，并应该看到锁扣闭合在其对应部分上。

这些锁扣（或扣具）改善了连接，在高振动或生产环境中特别方便，因为断开线缆时必须使用一定的力。当移动您的 Grove 设备或更换它时，您还必须施加少量压力来释放 Grove 分支线缆连接器上的锁扣，然后拉动将其从插座或接口中取出。

使用 Grove 分支线缆连接多个设备时要格外小心。请注意，Grove 扩展板上的模拟或数字引脚将由两个 Grove 设备共享。这种配置可能不适合两个模拟设备。使用 Grove 分支线缆连接一个模拟和一个数字 Grove 设备可能根本无法工作。

![](https://files.seeedstudio.com/wiki/How_To_Choose_The_Right_Cable/img/Grove-Branch_Cable-5PCs_pack-.jpg)

示例应用包括：

- 连接或菊花链连接两个或更多 I2C 设备。可以使用多个分支线缆来扩展 I2C 总线。

- 连接需要同时工作的两个设备。例如，可以使用单个 Grove 分支线缆将 [LED](https://www.seeedstudio.com/Grove-LED-Pack-p-4364.html) 和 [继电器](https://www.seeedstudio.com/Grove-Relay.html) 连接到 Grove 扩展板。然后可以同时打开或关闭 LED 和继电器，因为这两个设备将由单个数字引脚控制。

## Grove - 舵机分支线缆

[[链接](https://www.seeedstudio.com/Grove-Branch-Cable-for-Servo-5PCs-pack.html)]

Grove 舵机分支线缆是另一种类型的 Grove 线缆，主要用于将一个或两个舵机连接到您的项目中。它们由三个连接器组成：一个适合连接到 Grove 扩展板的防呆四针公型连接器，以及两个三针公型插针连接器。在这种配置中，电源和地线（来自四针公型连接器的引脚 3 和 4）被传输到两个三针公型连接器。四针连接器的引脚 1（黄色）连接到 Arduino 上能够进行 PWM 的引脚之一，并传输到其中一个三针公型插针连接器。四针连接器的引脚 2（白线）也连接到 Arduino 的第二个支持 PWM 的引脚，并传输到第二个三针公型插针连接器。

Grove 舵机分支线缆的四针防呆连接器通常连接到 Grove 扩展板的数字接口，如 D2-D9。连接舵机时，请记录数字 PWM 线缆的线色（黄色或白色），以了解哪个数字引脚对应舵机输入。

请注意，Arduino UNO 在引脚 3、5、6、9、10 和 11 上支持 PWM。在 Arduino Mega 上，它在引脚 2 - 13 和 44 - 46 上工作。使用 ATmega8 的较旧 Arduino 板仅在引脚 9、10 和 11 上支持 analogWrite()。

这里是我们一些 [舵机](https://www.seeedstudio.com/catalogsearch/result/?q=servos) 的链接。

![](https://files.seeedstudio.com/wiki/How_To_Choose_The_Right_Cable/img/4pinto2x3pin500.jpg)

## Grove 转 4 针母头跳线

您可以将其用于：

- 将 Grove 设备连接到其他 MCU，例如您想要将 [Grove - 光传感器](https://www.seeedstudio.com/Grove-Light-Sensor-p-746.html) 连接到 [Raspberry Pi](http://www.raspberrypi.org/)。

- 使用底板扩展板来控制一些非 Grove 设备

![](https://files.seeedstudio.com/wiki/How_To_Choose_The_Right_Cable/img/4p254.jpg)

## 其他一些线缆

还有一些其他用途的线缆，点击[这里](https://www.seeedstudio.com/catalogsearch/result/?q=Cables)查找更多信息。

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