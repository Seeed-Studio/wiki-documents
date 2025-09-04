---
title: SPI
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Wio-Terminal-IO-SPI/
slug: /es/Wio-Terminal-IO-SPI
last_update:
  date: 01/11/2022
  author: gunengyu
---
# Usando SPI en Wio Terminal

Este repositorio demostrará cómo usar SPI en Wio Terminal. ¡Puedes usar esto para controlar otros dispositivos!

## Configuraciones de Puerto

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2020-03-03_12-28-09.jpg" /></div>

Como puedes ver, los pines físicos de SPI son los siguientes:

- **MOSI** -> `GPIO 19`

- **MISO** -> `GPIO 21`

- **SCK** -> `GPIO 23`

- **SS** -> `GPIO 24`

## Configuraciones de Software

En Arduino, todos los pines SPI están predefinidos y puedes acceder a los pines de la siguiente manera:

- **MOSI** -> `PIN_SPI_MOSI`

- **MISO** -> `PIN_SPI_MISO`

- **SCK** -> `PIN_SPI_SCK`

- **SS** -> `PIN_SPI_SS`

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>