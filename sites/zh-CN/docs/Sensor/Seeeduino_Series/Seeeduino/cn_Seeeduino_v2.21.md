---
description: Seeeduino V2.21
title: Seeeduino V2.21 
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Seeeduino_v2.21
last_update:
  date: 1/11/2023
  author: shuxu hu
---

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_v2.21/img/Seeeduino-168p.jpg) ![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_v2.21/img/Seeeduino_fritzing.png)

这里是 Seeeduino V2.21 Atmega 168P 和 Seeeduino V2.21 Atmega 328P 的 wiki 页面。

Seeeduino 是 Arduino 兼容板。其设计基于 Diecimila 方案，100% 兼容现有程序、扩展板和 IDE。在硬件方面，进行了显著改进以提高灵活性和用户体验。


##   特性  ##

-  继承了 Arduino Diecimila 的所有特性。

-  兼容 Diecimila 的引脚布局、螺丝孔和尺寸。

-  采用 SMD 元件进行改进

-  在扩展性和便利性方面得到改善

##   常见问题   ##

这里是 Seeeduino 常见问题，当前版本是 v2.21，用户可以在这里列出常见问题，示例如下：

###   什么是 Seeeduino  ###

**答案：** Seeeduino 是一个...

###   如何在 Arduino IDE 中使用 Seeduino 328？  ###

答案：在 Arduino IDE 中选择"Arduino Dueminalove 328"，并确保复位开关设置为 AUTO 进行编程。

###   我可以通过 JST 电源连接器输入什么电压  ###

**答案：** 这是一个非权威（用户提交）的回答。JST 连接器连接到 L1117-50 电压调节器，该调节器将输入电压降至 5.0 VDC。L1117 是一个 LDO（低压差）调节器，因此需要在调节电压基础上至少高出 +1.2 伏特才能工作。总之，您需要至少 6.2 VDC 的最低电压，但更高的电压更好。调节器的最大电压是 15 伏特 DC，但这假设调节器处于最佳情况。为了在两端都有足够的安全裕度，您应该将电压保持在 7 VDC 和 13 VDC 之间。

###  M_RST_A 开关的用途是什么？ ###

""答案：""M_RST_A 开关，打开 'M' 表示当您下载程序时板子会自动重启，打开 'A' 则不会自动重启，默认打开 'M'

##   支持   ##

如果您有问题或其他更好的设计想法，可以到我们的[论坛](https://www.seeedstudio.com/forum)或**wish**进行讨论。

##   版本跟踪   ##

|版本|描述|发布日期|
|---|---|---|
 |Seeeduino V0.9|初始公开发布||
 |Seeeduino v1.1|**1.** 修复错误 - Pin4 线路上不必要的过孔。**2.** 修复错误 - 标签被开关错误覆盖。**3.** 添加了 I2C 和传感器端口。**4.** 为 vcc 开关添加了 100uF 电容。**5.** 分组了新的 100mil 网格引脚。**6.** 将复位按钮替换为金属按钮。**7.** 重新排列文本和标签以获得更清晰的指示。||
 |Seeeduino v2.12|**1.** 关闭时零外部功耗 **2.** 更强的开关**3.** 5V 直接输入的第二电源。[注意] 仅使用 5V！**4.** 3.3V 下 150mA 驱动能力**5.** 1.0mm 薄 PCB 重量更轻**6.** 为引脚排针预留额外行||
 |Seeeduino v2.2|**1.** USB/EXT 电源自动选择**2.** 升级电源电容**3.** 清理布局**4.** 更容易复位**5.** 真正的石英晶体**6.** 外部电源二极管更改为 1N4004（Vin 引脚上更多功率）|2010年12月16日|
 |Seeeduino v2.21|1.升级到更强的 mini USB 连接器。|2011年1月12日|
 |Seeeduino v3.0|1.将 JST 连接器更改为 DC 插孔连接器|2012年1月1日|

##   错误跟踪   ##

错误跟踪是您可以发布在使用过程中认为可能发现的任何错误的地方。请写下您要说的话，您的答案将帮助我们改进产品。

-  如果在连接 mini-USB 电缆时施加侧向力，mini-USB 连接器很容易从板上断裂。考虑使用 USB 延长线，并避免频繁地将 mini-USB 电缆插入/拔出 Seeduino 板。

##   其他想法   ##

其他想法是您写下关于此产品的项目想法或您发现的其他用途的地方。或者您可以在项目页面上写下它们。

##   如何购买   ##

在这里购买 Seeeduino v2.21 [(Atmega 168P)](https://www.seeedstudio.com/depot/seeeduino-v221-atmega-168p-p-690.html) 和 Seeeduino v3.0 [(Atmega 328P)](https://www.seeedstudio.com/depot/seeeduino-v30-atmega-328p-p-669.html?cPath=132_133) 在 SEEED **Bazaar**


##   许可证   ##

本文档采用知识共享[署名-相同方式共享许可证 3.0](http://creativecommons.org/licenses/by-sa/3.0/) 授权。源代码和库采用 [GPL/LGPL](http://www.gnu.org/licenses/gpl.html) 授权，详情请参见源代码文件。

##   资源   ##

- **[PDF]** [PDF 格式原理图](https://files.seeedstudio.com/wiki/Seeeduino_v2.21/res/Seeeduino_v2.21.pdf)

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