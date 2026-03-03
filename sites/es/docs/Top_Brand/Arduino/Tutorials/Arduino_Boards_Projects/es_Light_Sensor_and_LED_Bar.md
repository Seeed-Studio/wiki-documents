---
description: Sensor de Luz y Barra LED
title: Sensor de Luz y Barra LED
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Light_Sensor_and_LED_Bar
last_update:
  date: 2/15/2023
  author: jianjing Huang
---

<!-- ---
name: Light Sensor and LED Bar
category: Tutorial
oldwikiname:  Light Sensor and LED Bar
prodimagename:
surveyurl: https://www.research.net/r/Light_Sensor_and_LED_Bar
--- -->
Esta demostración te mostrará cómo usar un sensor de luz. Para indicar la intensidad de la luz, necesitamos una Barra LED.

**Hardware Requerido：**

* Arduino

* Sensor de Luz

* Barra LED

**Circuito：**

La salida del Sensor de Luz es una señal analógica, por lo que la conectamos al pin A0 del Seeeduino.

La Barra LED necesita 10 pines de E/S, sobre la conexión, por favor consulta [Barra LED](https://arduino.cc/en/Tutorial/BarGraph).

![](https://files.seeedstudio.com/wiki/Light_Sensor_and_LED_Bar/img/Sidekick_33_1.png)

**Código:**

Abre Arduino IDE, haz clic en Archivo -&gt; Sketchbook -&gt; light_sensor.

Podemos usar analogRead() para leer el valor del sensor de luz, este valor indicará la intensidad de la luz. Cuando la luz es más fuerte, el valor es mayor.

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