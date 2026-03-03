---
title: 315Mhz远程继电器开关套件 - 2通道
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/315Mhz_remote_relay_switch_kits-2_channels/
slug: /cn/315Mhz_remote_relay_switch_kits-2_channels
last_update:
  date: 02/03/2022
  author: gunengyu
---

![](http://bz.seeedstudio.com/depot/images/P2130781.jpg)

此远程开关允许您远程控制任何12伏直流设备。非常适合控制任何12V设备，例如灯光、风扇、景观照明等。此易于接线的套件非常适合具有基本电气接线知识的用户，并且可以轻松连接到许多12V应用。对于PC改装者来说，使用远程控制12VDC套件的最终效果非常令人印象深刻，肯定会让观众惊叹不已。对于DIY爱好者来说，该套件将为您的项目增添一些神奇的效果。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Skeleton-Box-p-1407.html)

##   规格
---
*   频率：315Mhz

*   调制方式：ASK

*   工作电压：12VDC

*   接收灵敏度：-105dbm

*   发射距离：空旷地面100米

*   尺寸：68mm*47mm*12mm

*   *默认使用315Mhz接收器，可更换为433Mhz接收器。

##   引脚定义和额定值
---
每个继电器拥有一组3个引脚：

*   **A** - 常闭，继电器激活时打开

*   **B** - 公共节点

*   **C** - 常开，继电器激活时关闭

##   使用方法
---

###   编码与解码

常见的连接方式如下：MCU -&gt; 编码器 -&gt; 发射器 ------ 接收器 -&gt; 解码器 -&gt; MCU，

PT2262（编码器）和PT2272（解码器）是可选的，它们的存在是为了：

1) 避免在多个RF链接范围内发生混淆

2) 隔离干扰。您可以将编码和解码工作集成到两端的MCU中。如果周围没有315Mhz设备，您可以将其用作直接电缆连接。

要设置PT2272和PT2262链接，您需要通过一些焊接来设置PT2262：

![](http://bz.seeedstudio.com/depot/images/product/RFReceiverDec.jpg)

并设置PT2272上的对应引脚：

![](http://bz.seeedstudio.com/depot/images/product/RFTransmitEnc.jpg)

###  继电器操作模式

接收器有三种模式，用于控制继电器输出的功能。这些模式可以通过接收器上的3针跳线选择。

**瞬时模式：**
将开关位置移动到“M”，以将选定的继电器设置为瞬时模式。在瞬时模式下，选定的继电器将改变其状态并在接收到的传输持续期间保持该状态。一旦传输终止，继电器将恢复到其原始状态。

**翻转模式：**
移除跳线以将选定的继电器设置为翻转模式。在翻转模式下，选定的继电器将改变其状态并保持，直到接收到匹配的传输。每次接收到传输时，继电器将改变其状态并保持，直到接收到另一次传输。

**锁定模式：**
将开关位置移动到“L”，以将选定的继电器设置为锁定模式。在锁定模式下，当选定的继电器被发射器激活时，该继电器将改变其状态并保持，直到接收器的电源被移除或中断。

请参考315Mhz RF链接的简单图示。在发射器端，您需要向“+12V”引脚提供3-5VDC电压，（**注意**：PCB上的“12V”丝印是错误的，切勿提供超过5V的电压），并将“TE”设置为高电平（5V）以启用传输。在接收器端，您可以使用+5VDC（即VCC）供电，并从D0~D3读取输出。“TV”将指示数据输入发生变化。

![](http://bz.seeedstudio.com/depot/images/product/315MhzTransmitter.gif)


##   资源
---
*   [使用手册](https://www.seeedstudio.com/depot/datasheet/How%20to%20Use%20315MHz%20Remote%20Relay%20Kits.pdf)

## 技术支持与产品讨论
如果您有任何技术问题，请将问题提交到我们的[论坛](http://forum.seeedstudio.com/)。  
感谢您选择我们的产品！我们提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>