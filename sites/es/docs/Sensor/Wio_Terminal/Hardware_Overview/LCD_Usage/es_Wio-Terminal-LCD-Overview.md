---
title: Descripción General
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Wio-Terminal-LCD-Overview/
slug: /es/Wio-Terminal-LCD-Overview
last_update:
  date: 01/11/2022
  author: gunengyu
---

# Descripción General

Este repositorio presenta cómo instalar la biblioteca TFT LCD utilizada en Wio Terminal. ¡Proporciona funciones gráficas básicas al Wio Terminal con el mínimo esfuerzo!

## Instalación Predeterminada de la Biblioteca TFT LCD

Por defecto, la Biblioteca TFT LCD está **incluida dentro de la Biblioteca de Placa Wio Terminal**. Por lo tanto, no es necesario descargar la biblioteca TFT LCD nuevamente. ¡Sigue los siguientes tutoriales para comenzar con la pantalla!

## Instalación de la Biblioteca TFT LCD por Separado

Si deseas instalar la biblioteca TFT LCD por separado, o actualizar solo la biblioteca TFT LCD, sigue los pasos a continuación:

1. Visita el repositorio [Seeed_Arduino_LCD](https://github.com/Seeed-Studio/Seeed_Arduino_LCD) y descarga todo el repositorio a tu unidad local.

2. Ahora, la biblioteca TFT LCD puede instalarse en el IDE de Arduino. Abre el IDE de Arduino, y haz clic en `sketch` -> `Include Library` -> `Add .ZIP Library`, y elige el archivo `Seeed_Arduino_LCD` que acabas de descargar.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

### Instalación de la Biblioteca Adafruit Zero DMA

Algunas funciones de la Biblioteca TFT LCD requieren esta biblioteca.

1. Navega a `sketch` -> `Include Library` -> `Manager Library`, y aparecerá una ventana del administrador de bibliotecas.

2. Busca **Adafruit Zero DMA** y haz clic en Install.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-12-16_09-19-28.jpg" /></div>

## Soporte Técnico y Discusión de Productos
si tienes algún problema técnico. envía el problema a nuestro [foro](http://forum.seeedstudio.com/). 
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>