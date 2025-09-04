---
title: Cómo usar la Biblioteca de Gráficos LvGL
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Wio-Terminal-LVGL/
slug: /es/Wio-Terminal-LVGL
last_update:
  date: 01/11/2022
  author: gunengyu
---

# Cómo usar la Biblioteca de Gráficos LvGL para Wio Terminal

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-LVGL/banner.gif" /></div>

En este tutorial, te enseñaremos cómo usar la biblioteca de gráficos [**LvGL**](https://lvgl.io/) (Light and Versatile
Graphics Library) para Wio Terminal. Este es un port del [lv_arduino](https://github.com/lvgl/lv_arduino) original a Wio Terminal.

[**LvGL**](https://lvgl.io/) es una biblioteca de gráficos de código abierto que proporciona todo lo que necesitas para crear GUI embebidas con elementos gráficos fáciles de usar, efectos visuales hermosos y bajo consumo de memoria.

## Hardware Requerido

- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

## Comenzar

- Sigue [**Wio Terminal Get Started**](https://wiki.seeedstudio.com/es/Wio-Terminal-Getting-Started/) antes de continuar.

### Instalar Seeed_Arduino_LvGL

1. Visita los repositorios de [Seeed_Arduino_LvGL](https://github.com/Seeed-Studio/Seeed_Arduino_LvGL) y descarga todo el repositorio a tu unidad local.

2. Ahora, la biblioteca FS puede instalarse en el Arduino IDE. Abre el Arduino IDE, y haz clic en `sketch` -> `Include Library` -> `Add .ZIP Library`, y elige el archivo `Seeed_Arduino_LvGL` que acabas de descargar.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

### Ejemplos

#### 1. Bench Mark

Esta es la demo de benchmark de la biblioteca de gráficos LvGL en Wio Terminal, simplemente sube el `benchmark.ino` al dispositivo usando Arduino IDE:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-LVGL/benchmark.gif" /></div>

:::note
    El port actual de los FPS bajo la demo de benchmark no se está mostrando correctamente, por favor mantente atento a más actualizaciones.
:::

#### 2. Stress Test

Esta es la demo de benchmark de la biblioteca de gráficos LvGL en Wio Terminal, simplemente sube el `lv_stresss.ino` al dispositivo usando Arduino IDE:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-LVGL/stress.gif" /></div>

Para más usos, también puedes usar la [**documentación oficial de LvGL**](https://docs.lvgl.io/latest/en/html/index.html) y [Arduino Example](https://github.com/lvgl/lvgl/tree/master/examples/arduino) para más referencia.

## Recursos

- [Documentación oficial de la Biblioteca LvGL](https://docs.lvgl.io/latest/en/html/index.html)
- [LvGL Github](https://github.com/lvgl/lvgl)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>