---
description: Tutorial de Xadow - Agitando Agitando
title: Tutorial de Xadow - Agitando Agitando
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Xadow_Tutorial_Shaking_Shaking
last_update:
  date: 1/13/2023
  author: shuxu hu
---

Para esta demostración, necesitas usar:

*   Placa Principal Xadow

*   OLED Xadow

*   Acelerómetro Xadow

*   Barómetro Xadow.

![](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Shaking_Shaking/img/Untitled.png)

Conéctalos con Cables FFC, luego necesitas hacer algunas preparaciones que se refieren a los pasos de la primera Demostración. A diferencia de la demo1, necesitas descargar [la librería:Smile](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Shaking_Shaking/https://files.seeedstudio.com/wiki/Xadow_Tutorial_Shaking_Shaking/res/SMILE.zip) y abrir directamente el archivo SMILE INO.

Esta demostración funciona: En circunstancias normales, el OLED muestra el valor actual de presión barométrica. Cuando agitas el Acelerómetro Xadow, aparecerá una cara sonriente en la pantalla.

## Nota

Antes de subir el código：smile a la placa principal Xadow, por favor asegúrate de que están las librerías:OLED_Display12864 y [DigitalAccelerometer_ADX345](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Shaking_Shaking/res/DigitalAccelerometer_ADXL345.zip) en la Librería de Arduino. Si no, por favor descárgalas y ponlas en el archivo de librerías del IDE de Arduino por la ruta: ..\arduino-1.0.1\libraries después de descomprimir. No olvides seleccionar Seeed Xadow desde el menú Herramientas | Placa del entorno de Arduino._

![](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Shaking_Shaking/img/Demo_2_display_data.jpg)

![](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Shaking_Shaking/img/Demo_2_display_smile.jpg)

## Recursos

[Código SMILE Demo2](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Shaking_Shaking/res/SMILE.zip)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para proporcionarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>