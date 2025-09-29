---
description: Xadow - NFC v2
title: Xadow - NFC v2
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Xadow_NFC_v2
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://seeeddoc.github.io/Xadow_NFC_v2/img/Xadow_NFC_v2.JPG)

Xadow NFC v2 配备了市场上最受欢迎的 NFC 芯片组——高度集成的收发模块 PN532。这款芯片组功能强大，可在大多数智能手机和 NFC 设备中找到。它可以用于读取和写入标签和卡片，充当 NFC 标签。目前，我们已经开发了 Arduino 库来支持读取和写入 MIFARE Class 和 MIFARE Ultralight 卡。该板还采用了新的 11 PIN Xadow 连接器，以提高模块连接的灵活性。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-NFC-v2-p-2562.html)

## 特性

*   开源和模块化设计
*   纤薄小巧
*   内置 11 PIN Xadow 连接器，可与其他 Xadow 模块灵活连接
*   可堆叠、可链式连接、可缝合，与其他 Xadow 模块兼容

## 规格

| 微控制器 | Kinetis KL02 |
|---|---|
| 核心 | ARM® 32-bit Cortex® -M0+CPU |
| 电源供应 | 3.3 ~ 6V（通过断路引脚） |
| 闪存 | 32 KB |
| SRAM | 4 KB |
| 工作电流 | 待机时 5mA；读写时 55mA |
| 射频 | 13.56 MHz |
| 支持的协议 | ISO/IEC 14443 Type A 和 ISO/IEC 14443 Type B |
| 最大工作距离 | ~28mm，取决于当前天线尺寸 |
| 尺寸 | 25.37mm × 20.30mm / 1” × 0.8” |

## 硬件概览

![](https://seeeddoc.github.io/Xadow_NFC_v2/img/Xadow_NFC_v2.png)

## 关于近场通信 (NFC)

近场通信 (NFC) 是一组用于电子设备之间近距离（通常为 10 厘米或更少）通信的协议。完整的 NFC 设备通常具有三种工作模式：

*   卡片仿真：通常用于门禁卡，或在智能手机中充当智能卡以执行支付或票务流程
*   读写模式：用于读取存储在 NFC 标签中的信息
*   点对点模式：用于设备之间的数据交换

## RePhone 社区

[![](https://seeeddoc.github.io/Xadow_NFC_v2/img/RePhone_Community-2.png)](https://forum.seeedstudio.com/viewforum.php?f=71&sid=b70f8138c89becf7701260bb41faf9f4)

我们一直在寻找一个更好的地方，让我们的支持者（RePhone 用户）可以聚在一起，温暖舒适地交流关于 RePhone 的话题，讨论技术问题，分享想法和项目，并对模块未来的开发提出反馈。于是，我们创建了 RePhone 社区。

现在加入 [RePhone 社区](https://forum.seeedstudio.com/viewforum.php?f=71&sid=b70f8138c89becf7701260bb41faf9f4)！我们一起寻找答案，制作有趣的东西，关心彼此，分享我们的经验。

## 常见问题解答

在 RePhone 社区中收集了一些常见问题，并在主题 **["Frequently Asked Questions of RePhone (FAQ)"](http://forum.seeedstudio.com/viewtopic.php?f=71&t=6664&p=23753#p23753)** 中进行了回答。该主题会在有新的常见问题出现时不断更新。

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_NFC/res/Xadow_NFC_v2.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

[**源代码**] [Xadow NFC v2 源代码](https://github.com/WayenWeng/Xadow_NFC_v2/)

[**ZIP 文件**] [Xadow NFC v2 原理图文件](https://files.seeedstudio.com/wiki/Xadow_NFC/res/Xadow_NFC_v2.0.zip)

[**PDF 文件**] [PN532 数据手册](https://files.seeedstudio.com/wiki/Xadow_NFC/resources/PN532.pdf)

[**PDF 文件**] [MCU Kinetis KL02 数据手册](https://files.seeedstudio.com/wiki/Xadow_NFC/res/KL02P32M48SF0.pdf)

感谢您选择我们的产品！我们提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>