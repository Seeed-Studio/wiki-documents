---
description: LinkIt Smart 7688 Duo 的 Arduino 扩展板
title: LinkIt Smart 7688 Duo 的 Arduino 扩展板
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Arduino_Breakout_for_LinkIt_Smart_7688_Duo
last_update:
  date: 1/13/2023
  author: shuxu hu
---

:::danger
由于 MediaTek Labs 的关闭，所有相关链接已失效。如果您需要下载相关文件，请在以下链接中搜索：[https://github.com/MediaTek-Labs](https://github.com/MediaTek-Labs)。
:::

**LinkIt Smart 7688 Duo 的 Arduino 扩展板**是一款用于 LinkIt Smart 7688 Duo 的扩展板。与 Seeed 生产的其他扩展板类似，该板集成了多达 12 个 Grove 接口，使您可以轻松连接更多 Grove 模块。使用此扩展板，初学者可以快速入门，因为通常令人头疼的布线过程得到了简化。此外，该板与 Arduino 使用相同的 MCU，这意味着您不仅可以使用 LinkIt Smart 7688 的功能，还可以使用 Arduino Yún 的功能，从而基于各种强大的 Arduino 示例代码构建丰富的物联网应用。在板上，预留了用于轻松访问 LinkIt Smart 7688 Duo 的引脚，除此之外，它还支持 I2C、UART 等串行总线，并配备了 USB 和以太网接口。

![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/Arduino_Breakout_for_LinkIt_Smart_7688_Duo_product_view.jpg)

LinkIt Smart 7688 Duo 是一个基于 OpenWrt Linux 发行版、MT7688 和 ATmega32u4 的开放开发板。该板专为智能家居的丰富应用物联网设备原型设计而打造。如果您想了解更多关于 LinkIt Smart 7688 Duo 的信息，请点击[这里](https://www.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo)。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/Arduino-Breakout-for-LinkIt-Smart-7688-Duo-p-2576.html)

## 特性

- 兼容 Arduino Shield
- 以太网连接互联网
- USB 2.0 支持更多外设
- Grove 接口：I2C × 2，模拟 × 3，数字 × 6，UART × 1
- 4 针调试端口 × 1，ICSP × 1

## 应用场景

- 物联网/网关设备
- 机器人
- 智能多媒体设备
- 教学与学习

## 规格

- **输入电压**：5.0V（通过 USB 电源端口）
- **工作电压**：3.3V

:::note
调试引脚连接到 MT7688，其他引脚连接到 ATmega32U4。
:::

## 硬件概览

![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/Arduino_Breakout_for_LinkIt_Smart_7688_Duo_components_with_text_1200_s.jpg)

|项目|数量|项目|数量|
|---|---|---|---|
|Arduino Shield|1|USB 端口（Type-A）|1|
|MT7688 UART2|1|USB 端口（Micro Type-B）|1|
|ICSP 端口|1|以太网端口|1|
|复位按钮（ATmega32u4）|1|连接 LinkIt Smart 7688 Duo 的端口|1|

## 快速入门

在这个简单的应用中，您将制作一个蜂鸣器发出不同的声音。在开始之前，除了 LinkIt Smart 7688 Duo 的 Arduino 扩展板，请检查您是否拥有以下材料。您可以在我们的商城中获取这些材料。

|LinkIt Smart 7688 Duo|USB 数据线|UARTBee|跳线 x 3|Grove - 蜂鸣器|
|---|---|---|---|---|
|![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/102110017%206.jpg)|![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/48cmUSBc.jpg)|![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/UartSBee%20V5_01.jpg)|![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/jw100n.jpg)|![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/107020000%201.jpg)|
|[**立即购买**](https://www.seeedstudio.com/LinkIt-Smart-7688-Duo-p-2574.html)|[**立即购买**](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)|[**立即购买**](https://www.seeedstudio.com/UartSBee-V5-p-1752.html)|[**立即购买**](https://www.seeedstudio.com/1-pin-dual-female-jumper-wire-100mm-50pcs-pack-p-260.html)|[**立即购买**](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)|

- 第一步：参考此教程将您的 LinkIt Smart 7688 Duo 连接到互联网。

:::note
* 您可以在靠近连接 LinkIt Smart 7688 的端口处找到 Pin 8、Pin 9 和 Pin GND。
* 您可以将跳线插入 MT7688 UART2 端口，而不是将它们焊接到 Pin 8、Pin 9 和 Pin GND。
:::

- 第二步：连接 USB 到串口适配器到 LinkIt Smart 7688 Duo 后，打开控制台。
- 第三步：按照下图连接所有部件：

![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/Arduino_Breakout_for_LinkIt_Smart_7688_Duo_demo_connection_view_1200_s.jpg)

- 第四步：将 Grove - 蜂鸣器插入端口 D4。

- 第五步：此步骤是在主机电脑上为 LinkIt Smart 7688 Duo 平台构建 Arduino 环境。由于教程已在 LinkIt Smart 7688 的 Wiki 中编写，请参考[这里](https://www.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo#Installing_Arduino_programming_environment)。
- 第六步：下载 firmata。
- 第七步：参考[这里](https://www.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo#Installing_Arduino_programming_environment)为 LinkIt Smart 7688 平台安装 Arduino IDE，并将 firmata 文件烧录到开发板。

:::note
以下步骤应在嵌入式操作系统（OpenWRT）上执行。请确保您的系统中安装了 Python 和 pip。
:::

- 第八步：在控制台中输入 `pip install pyfirmata` 并按回车键安装 Python 库 pyfirmata。
- 第九步：在控制台中输入 `vi buzzer.py` 创建一个名为 **buzzer.py** 的文件，并将以下代码复制到其中。

```python
from pyfirmata import Arduino, util
from time import sleep
board = Arduino('/dev/ttyS0')
print "Start blinking D4"
while True:
  board.digital[4].write(1)
  sleep(0.5)
  board.digital[4].write(0)
  sleep(0.5)
```

- 第10步：保存 **buzzer.py** 文件，然后输入 **python buzzer.py** 运行示例代码。
- 第11步：现在你将听到蜂鸣声。

## 立即动手制作
你成功让蜂鸣器发出声音了吗？这里还有两个使用 LinkIt Smart 7688 Duo 的超棒项目。让我们现在就开始制作吧！

|带有 WiFi 连接可视化的智能路由器|Facebook 点赞监视器|
|:---:|:---:|
|![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/F9SCHIKIPH4SPTP.MEDIUM.jpg)|![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/F9MQJJOIHQOBV4Q.MEDIUM.jpg)|
|[![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/200px-Wiki_makeitnow_logo.png)](https://www.instructables.com/id/ReRouter-Make-an-Extensible-IoT-Router/)|[![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/200px-Wiki_makeitnow_logo.png)](https://www.instructables.com/id/Facebook-Like-Monitor/)|

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/resources/Schematic_files_for_Arduino_Breakout_for_LinkIt_Smart_7688_Duo.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- [原理图文件](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/resources/Schematic_files_for_Arduino_Breakout_for_LinkIt_Smart_7688_Duo.zip)
- [LinkIt Smart 7688 Duo 的 Wiki 链接](https://www.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo)
- [OpenWrt](http://wiki.openwrt.org/doc/howto/user.beginner)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>