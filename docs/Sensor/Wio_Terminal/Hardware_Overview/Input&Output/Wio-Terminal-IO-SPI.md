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

## Tech Support

 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/).
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
