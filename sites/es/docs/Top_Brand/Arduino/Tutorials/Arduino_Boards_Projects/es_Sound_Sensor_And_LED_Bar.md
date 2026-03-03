---
description: Sensor de Sonido y Barra LED
title: Sensor de Sonido y Barra LED
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Sound_Sensor_And_LED_Bar
last_update:
  date: 2/15/2023
  author: jianjing Huang
---

<!-- ---
name: Sound Sensor And LED Bar
category: Tutorial
oldwikiname:  Sound Sensor And LED Bar
prodimagename:
surveyurl: https://www.research.net/r/Relay_Control_LED
--- -->
Esta demostración te mostrará cómo usar el Sensor de Sonido. Para indicar la intensidad del sonido, necesitamos una Barra LED.

**Hardware Requerido:**

* Arduino

* Sensor de Sonido

* Barra LED

**Circuito:**

La salida del sensor de sonido es una señal analógica, la conectamos al pin A0 del Seeeduino.

La Barra LED necesita 10 pines de E/S. Para la conexión, consulta [Barra LED](https://arduino.cc/en/Tutorial/BarGraph).

![](https://files.seeedstudio.com/wiki/Sound_Sensor_And_LED_Bar/img/Sidekick_35_1.png)

**Código:**

Abre Arduino IDE, haz clic en File -> Sketchbook -> sound_sensor.

Podemos usar analogRead() para leer el valor del sensor de luz. Este valor indicará la intensidad de la luz. Cuando la luz es más fuerte, el valor es mayor.

Para hacer que los datos sean más suaves, necesitamos un filtrado simple. Leemos el valor 32 veces y tomamos el valor promedio.

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