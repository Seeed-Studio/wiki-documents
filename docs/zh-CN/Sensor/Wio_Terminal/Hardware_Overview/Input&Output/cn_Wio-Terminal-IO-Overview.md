---
title: 概述
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Wio_RP2040_Module_Build-in_Wireless_2.4G/
slug: /cn/Wio-Terminal-IO-Overview
last_update:
  date: 01/11/2022
  author: gunengyu
---
# 概述

本仓库介绍如何使用 Wio Terminal 上的 Grove IO 接口。这让您可以享受 Grove 生态系统的即插即用功能，以及使用 40 针树莓派兼容的 GPIO！

## 硬件原理图

### Wio Terminal RPI 引脚图

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WioT-Pinout.jpg" /></div>

Wio Terminal 有 40 针 GPIO 从 SAMD51 引出，与树莓派的引脚布局相同！

要使用它们，只需使用上面定义的引脚名称！一些引脚具有多种功能，因此可以通过不同的方式引用。

#### *更多信息，请查看 `variant.h` 获取更多详细信息*

### Wio Terminal Grove 端口引脚图

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2020-03-03_12-28-29.jpg" /></div>

如您所见，Wio Terminal 上有两个 Grove 端口可用。一个是默认的 **I2C 端口**，另一个是**可配置的数字/模拟引脚**，它也可以用于 PWM 输出。两个 Grove 端口都可以用作数字端口。

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