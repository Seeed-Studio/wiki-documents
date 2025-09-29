---
description: XBee Shield V2.0
title: XBee Shield V2.0
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XBee_Shield_V2.0
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/img/Xbeeshield_01.jpg)

新版 XBee Shield 是一种标准化且可堆叠的 Arduino 兼容扩展板。您可以轻松地将 Bee 系列的任何模块堆叠到其上，并为您的项目构建无线网络。除此之外，它还配备了电平转换功能，能够实现高低 IO 电平之间的双向转换。预留的数字引脚使用户可以通过跳线帽选择 TX/RX 端口。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/XBee-Shield-V2.0-p-1375.html)

## 特性
---
- 标准化外形设计
- 可通过连接 UartSBee 模块到 USB 进行配置
- DIN 和 DOUT 引脚可同时连接 UART 和其他数字引脚（D2~D12）
- 扩展空间供用户自行开发
- LED 指示灯

## 硬件概览
---
![](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/img/XBee_Shield_Interface%202.jpg)

- U2：[CJT1117 IC](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/res/CJT1117_datasheet.pdf)，为 XBee 模块提供 3.3V 电压。
- U3：[SN74LVC1G125 IC](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/res/SN74LVC1G125DCKR.pdf)，实现逻辑电平转换功能。

## 入门指南
---

这里我们将展示如何使用 XBee Shield V2.0 与 RF Bee 配合工作。当然，您也可以使用 Bluetooth Bee 或其他模块。

| XBee Shield V2.0 | RF Bee |
|----------------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/img/XBee%20Shield%20V2.0_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/img/rfbee1_s.jpg)|
|[立即购买](https://www.seeedstudio.com/XBee-Shield-V2.0-p-1375.html)|[立即购买](https://www.seeedstudio.com/RFbee-V1.1-Wireless-arduino-compatible-node-p-614.html)|

- 将 RF Bee 插入 XBee Shield V2.0。

 ![](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/img/XBee_Shield_connect_RF_XBee.jpg)

- 使用跳线帽连接 **XB_TX 和数字 4**。同时，使用跳线帽连接 **XB_RX 和数字 5**。当然，您可以根据需要更改数字端口，但请不要忘记同时更改示例代码中的端口定义。

:::note
以下是已知的限制：
1. 如果您使用多个软件串口，则一次只能接收一个数据。
2. 并非所有 Mega 和 Mega 2560 的引脚都支持变化中断，因此 RX 只能使用以下引脚：10, 11, 12, 13, 50, 51, 52, 53, 62, 63, 64, 65, 66, 67, 68, 69。
3. 并非所有 Leonardo 的引脚都支持变化中断，因此 RX 只能使用以下引脚：8, 9, 10, 11, 14 (MISO), 15 (SCK), 16 (MOSI)。
:::
如果您需要更多关于如何通信的信息，请参考相关模块的 WIKI 页面。

## 在线原理图查看器

<!-- <div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/res/XBee_Shield_Eagle_file.zip" style={borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}
</div> -->

## 资源
---
- **[Eagle]** [XBee Shield V2.0 Eagle 文件](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/res/XBee_Shield_Eagle_file.zip)
- **[PDF]** [XBee Shield V2.0b 原理图文件](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/res/XBee_Shield_v2.0b.pdf)
- **[PDF]** [XBee Shield V2.0b PCB 文件](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/res/XBee%20Shield%20v2.0b%20PCB.pdf)
- **[Datasheet]** [CJT1117 数据手册](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/res/CJT1117_datasheet.pdf)
- **[Datasheet]** [SN74LVC1G125 数据手册](https://files.seeedstudio.com/wiki/XBee_Shield_V2.0/res/SN74LVC1G125DCKR.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>