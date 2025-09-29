---
description: Grove - Bee Socket
title: Grove - Bee Socket
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Bee_Socket
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Grove-Bee_Socket/img/Bee_Socket_01.jpg)

Grove - Bee Socket 是一个 Xbee 系列的适配器，可以将无线模块与 Arduino 连接，例如 WIFI Bee、RF Bee、Bluetooth Bee 等。它与 Arduino 兼容，并且更有效地执行由无线模块运行的点对点和网状网络操作。稳压器 CJT1117 保证 Xbee 稳定的 3.3V 电压。LED 可以清晰地显示 Grove 的工作模式。
<!-- Grove-Bee Socket 的功能与 [XBee Shield](/cn/XBee_Shield_V2.0) 相同。Grove-Bee Socket 和 Arduino 通过电缆连接，而 XB Shield 是一个可以插入 Arduino 的标准适配器。 -->

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Bee-Socket-p-1449.html)


## 特性
---
* 标准 Bee Socket 和 Grove 接口

* 板载 3.3V 稳压器，为 XBee 提供电源

* 电平转换电路

* Bee 模块的复位按钮

* Bee 操作的 LED 指示灯

## 接口功能
---
![](https://files.seeedstudio.com/wiki/Grove-Bee_Socket/img/Bee_Socket_Interface.jpg)

**J1:** Grove 接口，用于连接 Arduino/Seeeduino 的 UART 接口。

**J2, J3:** Xbee 每个引脚的分线连接。

**J4, J5:** Bee 插座。

**U1:** CJT1117 IC，低压差线性稳压器。用于为 XBee 模块提供 3.3V 电源。

**U2, U3:** SN74LVC1G125 IC，保护 XBee 免受 5V 信号影响，将其转换为 3.3V。

**RSSI 指示灯:** XBee RX 信号强度指示灯。

**PWR LED:** 电源指示灯。

**ASSOC 指示灯:** Xbee 关联指示灯。

**ON/SLEEP LED:** XBee 模块状态指示灯。

## 使用方法
---
使用 Grove - Bee Socket，可以轻松通过 Arduino/Seeeduino 控制 Bee 模块。以下以 RF Bee 为例，介绍如何使用它。

* 将 XBee 模块插入 Bee Socket。

* 然后使用 Grove 电缆将 Grove - Bee Socket 连接到 Arduino/Seeeduino 的 UART 接口。通过 USB 电缆将 Arduino/Seeeduino 连接到计算机以打开电源。

![](https://files.seeedstudio.com/wiki/Grove-Bee_Socket/img/Grove-Bee_Socket.jpg)

* 现在，您可以发送一些简单的 AT 命令来对 RF Bee 进行基本配置并发送/接收数据。当然，您可以在不更改硬件连接的情况下更新固件。

如果需要进一步了解如何通信，请参考相关 Bee 模块的 WIKI 页面。


## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Bee_Socket/res/Bee_Socket_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## 资源
---
[Bee Socket Eagle 文件](https://files.seeedstudio.com/wiki/Grove-Bee_Socket/res/Bee_Socket_Eagle_File.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>