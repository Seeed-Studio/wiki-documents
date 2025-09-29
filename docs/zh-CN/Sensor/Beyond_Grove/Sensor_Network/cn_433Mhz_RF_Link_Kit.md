---
title: 433Mhz RF 链路套件
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/433Mhz_RF_Link_Kit/
slug: /cn/433Mhz_RF_Link_Kit
last_update:
  date: 02/03/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/433Mhz_RF_Link_Kit/img/113990010%201.jpg)

该套件由发射器和接收器组成，广泛用于远程控制。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/depot/433mhz-rf-link-kit-p-127.html?cPath=139_140)

## 规格
---
- 频率：433Mhz
- 调制方式：ASK
- 接收器数据输出：高 - 1/2 Vcc，低 - 0.7v
- 发射器输入电压：3-12V（电压越高，发射功率越大）
- 接收器输入电压：3.3-6V（电压越高，接收功率越大）

## 使用方法
---
常见的链路如下：MCU -> 编码器 -> 发射器 ------ 接收器 -> 解码器 -> MCU

PT2262（编码器）和 PT2272（解码器）是可选的，它们的存在可以：1）避免多个 RF 链路在范围内时的混淆；2）隔离干扰。您可以将编码和解码工作集成到两端的 MCU 中。如果周围没有 315Mhz 设备，您可以将其用作直接电缆连接。

对于文档的不足，我们会努力改进。在此之前，请随时咨询我们任何细节，我们很乐意为您找到答案 ^^ 我们使用 Sparkfun 的指南进行了测试，它是兼容的。唯一的区别在于某些额外的 GND 引脚的封装。

此外，我们将开发更多不同频率和容量的 RF 模块。下一个计划基于 cc1100。请告诉我们您的需求 :)

## 支持

如果您有任何问题或更好的设计想法，可以前往我们的 [论坛](https://community.seeedstudio.com/) 讨论。

## 资源

- [演示方案](https://files.seeedstudio.com/wiki/433Mhz_RF_Link_Kit/res/315MRFlink.pdf)
- [VirtualWire 1.3](https://files.seeedstudio.com/wiki/433Mhz_RF_Link_Kit/res/VirtualWire.rar)
- [1.3 文档](https://files.seeedstudio.com/wiki/433Mhz_RF_Link_Kit/res/VirtualWire.pdf)
- [Sparkfun 示例](https://files.seeedstudio.com/wiki/433Mhz_RF_Link_Kit/res/KLP_Walkthrough.pdf)
- [运行 RF 模块示例](http://winavr.scienceprog.com/example-avr-projects/running-tx433-and-rx433-rf-modules-with-avr-microcontrollers.html)

## 许可

本文档根据 Creative Commons [Attribution-ShareAlike License 3.0](https://creativecommons.org/licenses/by-sa/3.0/) 许可。源代码和库根据 [GPL/LGPL](http://www.gnu.org/licenses/gpl.html) 许可，详情请参阅源代码文件。

外部链接

链接到提供更多应用创意、文档/数据表或软件库的外部网页：
- [RCSwitch - Arduino 库，用于控制 433Mhz 遥控电源插座](http://code.google.com/p/rc-switch)

## 技术支持与产品讨论

如果您有任何技术问题，请将问题提交到我们的 [论坛](http://forum.seeedstudio.com/)。  
感谢您选择我们的产品！我们致力于为您提供不同的支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>