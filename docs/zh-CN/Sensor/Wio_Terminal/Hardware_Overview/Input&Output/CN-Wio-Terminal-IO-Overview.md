---
title: 概述
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio_RP2040_Module_Build-in_Wireless_2.4G/
slug: /vn/Wio-Terminal-IO-Overview
last_update:
  date: 3/10/2024
  author: 金菊
---

# 概述

这个仓库介绍了如何在Wio Terminal上使用Grove IO。这使您可以享受Grove生态系统的即插即用功能，并使用40针的兼容树莓派的GPIO接口！

## Hardware 原理图

### Wio Terminal RPI 引脚定义

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WioT-Pinout.jpg" /></div>

Wio Terminal有40个引脚的GPIO接口，与SAMD51兼容，与树莓派具有相同的引脚定义！

要使用它们，只需使用上述定义的引脚名称即可！有些引脚具有多功能，可以使用不同的方式引用。

#### *更多信息，请查看 `variant.h` 文件*

### Wio Terminal 端口引脚定义

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2020-03-03_12-28-29.jpg" /></div>

正如您所见，Wio Terminal上有两个可用的Grove端口。一个是默认的 **I2C 端口** 另一个是 **可配置的数字/模拟引脚**, 它也可以用作PWM输出。两个Grove端口都可以用作数字端口。

## 技术支持 & 产品讨论

感谢您选择我们的产品！我们致力于为您提供不同的支持，以确保您对我们的产品拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
