---
title: Descripción General
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Wio_RP2040_Module_Build-in_Wireless_2.4G/
slug: /es/Wio-Terminal-IO-Overview
last_update:
  date: 01/11/2022
  author: gunengyu
---
# Descripción General

Este repositorio presenta cómo usar las E/S de Grove en el Wio Terminal. Esto te permite disfrutar de la funcionalidad plug and play del Ecosistema Grove así como usar los 40 pines compatibles con Raspberry Pi GPIO!

## Esquemas de Hardware

### Distribución de Pines RPI del Wio Terminal

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WioT-Pinout.jpg" /></div>

¡El Wio Terminal tiene 40 pines GPIO que salen del SAMD51, que tiene la misma distribución que la Raspberry Pi!

Para usarlos, simplemente usa los nombres de pines definidos como se muestra arriba. Algunos pines son multifuncionales por lo que pueden ser referenciados de diferentes maneras.

#### *Para más información, por favor revisa `variant.h` para más información*

### Distribución de Pines del Puerto Grove del Wio Terminal

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2020-03-03_12-28-29.jpg" /></div>

Como puedes ver, hay dos Puertos Grove disponibles en el Wio Terminal. Uno es el **Puerto I2C** predeterminado y el otro es un **Pin Digital/Analógico configurable**, también puede ser usado para salidas PWM. Ambos puertos Grove pueden ser usados como Digital.

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>