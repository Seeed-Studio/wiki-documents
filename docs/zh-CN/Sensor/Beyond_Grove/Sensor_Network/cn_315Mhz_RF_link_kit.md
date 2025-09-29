---
title: 315Mhz RF链接套件
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/315Mhz_RF_link_kit/
slug: /cn/315Mhz_RF_link_kit
last_update:
  date: 02/03/2022
  author: gunengyu
---
![](http://bz.seeedstudio.com/depot/images/product/3151.jpg)

该套件由发射器和接收器组成，广泛用于远程控制。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/315mhz-rf-link-kit-p-76.html)

##   规格
---
*   频率：315Mhz

*   调制方式：ASK

*   接收器数据输出：高电平 - 1/2 Vcc，低电平 - 0.7v

*   发射器输入电压：3-12V（高电压 = 更强的发射功率）

##   使用方法
---
常见的连接方式如下：MCU -&gt; 编码器 -&gt; 发射器 ------ 接收器 -&gt; 解码器 -&gt; MCU。

PT2262（编码器）和PT2272（解码器）是可选的，它们的作用是：1）避免多个RF链接在范围内时的混淆；2）隔离干扰。您可以将编码和解码工作集成到两端的MCU中。如果周围没有其他315Mhz设备，您可以将其用作直接电缆连接。

对于文档的不足，我们会努力改进。在此之前，请随时咨询我们任何细节，我们很乐意为您找到答案^^ 我们使用Sparkfun的指南进行了测试，它是兼容的。唯一的区别在于某些额外的GND引脚的封装。

此外，我们将自行制作更多不同频率和容量的RF模块。计划中的下一个模块基于cc1100。请告诉我们您的需求 :)

![](https://files.seeedstudio.com/wiki/315Mhz_RF_link_kit/img/315433RF.jpg)

##   资源
---
*   [演示方案](https://www.seeedstudio.com/depot/datasheet/315MRFlink.pdf)

*   [文件:VirtualWire.zip](https://files.seeedstudio.com/wiki/315Mhz_RF_link_kit/res/VirtualWire.zip "File:VirtualWire.zip")

*   [1.3版文档](https://www.seeedstudio.com/depot/images/product/VirtualWire.pdf)

*   [来自Sparkfun的示例](http://www.sparkfun.com/datasheets/RF/KLP_Walkthrough.pdf)

*   [运行RF模块的示例](http://winavr.scienceprog.com/example-avr-projects/running-tx433-and-rx433-rf-modules-with-avr-microcontrollers.html)

## 技术支持与产品讨论
如果您有任何技术问题，请将问题提交到我们的[论坛](http://forum.seeedstudio.com/)。  
感谢您选择我们的产品！我们致力于为您提供不同的支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>