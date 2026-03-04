---
title: SPI
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio-Terminal-IO-SPI/
slug: /Wio-Terminal-IO-SPI
last_update:
  date: 01/11/2022
  author: gunengyu
---
# Using SPI on Wio Terminal

This Repo will demonstrate how to use SPI on Wio Terminal. You can use this to control other devices!

## Port Configurations

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2020-03-03_12-28-09.jpg" /></div>

As you can see, the physical SPI Pins are as follow:

- **MOSI** -> `GPIO 19`

- **MISO** -> `GPIO 21`

- **SCK** -> `GPIO 23`

- **SS** -> `GPIO 24`

## Software Configurations

In Arduino, all SPI pins are pre-defined and you can access the pins as follow:

- **MOSI** -> `PIN_SPI_MOSI`

- **MISO** -> `PIN_SPI_MISO`

- **SCK** -> `PIN_SPI_SCK`

- **SS** -> `PIN_SPI_SS`

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
