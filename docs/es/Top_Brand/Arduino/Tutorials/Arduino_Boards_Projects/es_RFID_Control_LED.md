---
description: Control LED con RFID
title: Control LED con RFID
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/RFID_Control_LED
last_update:
  date: 2/15/2023
  author: jianjing Huang
---

<!-- ---
name: RFID Control LED
category: Tutorial
oldwikiname:  RFID Control LED
prodimagename:
surveyurl: https://www.research.net/r/RFID_Control_LED
--- -->

El Lector RFID de 125KHz puede leer datos de etiquetas RFID. Se puede usar para algunos sistemas IoT o de Control Inteligente.

Esta demostración te mostrará cómo leer datos de una etiqueta RFID y controlar un LED.

**Hardware Requerido：**

* Arduino

* Lector RFID de 125KHz

* Etiqueta RFID

**Circuito：**

El Lector RFID se conecta a D2, D3.

![](https://files.seeedstudio.com/wiki/RFID_Control_LED/img/Sidekick_39_1.png)

**Código:**

El módulo Lector RFID tiene un IC de control interno que lo hace fácil de controlar. Cuando hay una etiqueta RFID cerca del Lector, entonces enviará el ID de la etiqueta vía UART.

Puedes hacer algún procesamiento en el código para diferentes IDs.

El siguiente código no juzga el ID, cualquier etiqueta que se acerque al Lector puede cambiar el estado del led.

Abre Arduino IDE, haz clic en File -> Sketchbook -> RFID Reader.

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