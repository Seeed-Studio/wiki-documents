---
description: Módulo de pantalla digital LightView 201k
title: Módulo de pantalla digital LightView 201k
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/LightView_201k_Digital_display_module
last_update:
  date: 2/15/2023
  author: jianjing Huang
---
<!-- ---
name: LightView 201k Digital display module
category: Tutorial
bzurl:
oldwikiname: LightView 201k Digital display module
prodimagename:
surveyurl: https://www.research.net/r/LightView_201k_Digital_display_module
sku:
--- -->

Guía de inicio para la pantalla digital LightView 201k
Esta guía te mostrará cómo conectar la pantalla digital LightView 201k con el shield de cámara para comenzar fácilmente.

1. Materiales

- Seeeduino V3.0
- Shield de cámara
- Pantalla digital LightView 201k

2. Conexión

![](https://files.seeedstudio.com/wiki/LightView_201k_Digital_display_module/img/Lightviewdisplay.png)

1. – Brillo+
2. – Brillo-
3. – GND
4. – AV-
5. – AV+
6. – GND
7. – VCC (3.9~5V)

Solo necesitas conectar 4 líneas.

1. 4 AV- =&gt; V_OUT- del Shield de cámara (necesita soldar un conector de 2 pines)

2. 5 AV+ =&gt;V_OUT+ del Shield de cámara (necesita soldar un conector de 2 pines)

3. 6 GND =&gt; GND de Arduino

4. 7 VCC =&gt; 5V de Arduino

El ensamblaje final se ve así:

![](https://files.seeedstudio.com/wiki/LightView_201k_Digital_display_module/img/图片2.jpg)

3. Cómo funciona
La pantalla solo necesita una entrada AV. El shield de cámara se usa para generar la señal AV. No necesitas cargar ningún código en el Seeeduino. El Seeeduino solo hace una cosa: alimentar el shield de cámara. La salida de señal AV es la funcionalidad integrada del chipset VC0706 usado en el Shield de cámara. En otras palabras, puede que no necesites el Seeeduino+Shield de cámara. Lo que necesitas es una señal AV. Puedes conectar la pantalla a cualquier tipo de caja de TV que pueda generar la señal AV. También puedes conectar la pantalla a la salida AV de GoPro. Eso es todo.

## Soporte técnico y discusión de productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>