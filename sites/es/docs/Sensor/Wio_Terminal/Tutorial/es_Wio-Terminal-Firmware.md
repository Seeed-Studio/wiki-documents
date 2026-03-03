---
description: Firmware de Juegos Retro para Wio Terminal
title: Firmware de Juegos Retro para Wio Terminal
keywords:
- Wio_terminal Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-Firmware
last_update:
  date: 1/31/2023
  author: jianjing Huang
---

# Firmware de Juegos Retro para Wio Terminal

<div align="center"><img src="https://static-cdn.seeedstudio.site/media/wysiwyg/wtretro.gif" /></div>

¡Aquí hemos lanzado el firmware inicial de fábrica del Wio Terminal, que es un juego simple que puedes jugar con Wio Terminal!

## Descargar el Código Fuente Completo

Puedes descargar el código fuente completo del Firmware Inicial de Wio Terminal desde [**este repositorio**](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/jumper) aquí.

- Descarga todo el repositorio

- En la ubicación `examples/jumper`

## Librerías Dependientes

### Instalando las Librerías Adafruit ZeroTimer

1. Visita los repositorios de [Adafruit_ZeroTimer](https://github.com/adafruit/Adafruit_ZeroTimer) y descarga todo el repositorio a tu unidad local.

2. Ahora, la librería Adafruit ZeroTimer puede ser instalada en el Arduino IDE. Abre el Arduino IDE, y haz clic en `sketch` -> `Include Library` -> `Add .ZIP Library`, y elige el archivo `Adafruit_ZeroTimer` que acabas de descargar.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

:::note
También depende de **1. Seeed_Arduino_LCD 2. Seeed_Arduino_FS 3. Seeed_Arduino_SFUD 4. Adafruit_ZeroDMA**, pero estas librerías están incluidas en la librería de la placa Wio Terminal. Si tienes problemas, por favor actualiza a la última versión de la librería de la placa.
:::

## Instrucciones de Arduino

Hay **2 formas** de cargar imágenes de los elementos del juego:

1. **Usando Flash:**

      - Este es el método predeterminado y carga las imágenes en la flash.

      - Sube el código.

2. **Cargando imágenes usando tarjeta SD:**

      - Copia y pega el archivo `rgb332` (con todas las imágenes) en la tarjeta SD.

      - Si cargas imágenes desde la tarjeta SD, necesitas descomentar la macro `LOAD_IMAGE_SD`.

      - Sube el código.

¡Ahora, puedes disfrutar jugando juegos retro usando Wio Terminal otra vez!

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