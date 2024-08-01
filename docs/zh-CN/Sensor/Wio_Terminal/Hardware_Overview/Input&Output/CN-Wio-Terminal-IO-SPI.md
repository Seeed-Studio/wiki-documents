---
title: SPI
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio-Terminal-IO-SPI/
slug: /cn/Wio-Terminal-IO-SPI
last_update:
  date: 3/10/2024
  author: jessie
---

# 在Wio Terminal上使用SPI

这个仓库将演示如何在Wio Terminal上使用SPI。您可以使用它来控制其他设备!

## 端口配置

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2020-03-03_12-28-09.jpg" /></div>

正如您所见，物理SPI引脚如下：

- **MOSI** -> `GPIO 19`

- **MISO** -> `GPIO 21`

- **SCK** -> `GPIO 23`

- **SS** -> `GPIO 24`

## 软件配置

在Arduino中，所有SPI引脚都是预定义的，您可以按以下方式访问这些引脚：

- **MOSI** -> `PIN_SPI_MOSI`

- **MISO** -> `PIN_SPI_MISO`

- **SCK** -> `PIN_SPI_SCK`

- **SS** -> `PIN_SPI_SS`

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
