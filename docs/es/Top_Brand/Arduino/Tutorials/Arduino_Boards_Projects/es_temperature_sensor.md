---
description: Sensor de Temperatura
title: Sensor de Temperatura
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/temperature_sensor
last_update:
  date: 2/15/2023
  author: jianjing Huang
---

<!-- ---
name: Temperature Sensor
category: Tutorial
oldwikiname:  Temperature Sensor
prodimagename:
surveyurl: https://www.research.net/r/Temperature_Sensor
--- -->
Puedes usar el Sensor de Temp y Humedad para obtener la temperatura y humedad de tu casa.

Esta demostración te mostrará cómo obtener el valor y mostrarlo en el LCD.

**Hardware Requerido:**

* Arduino

* Sensor de Temp y Humedad

* LCD

**Circuito：**

El Sensor de Temp y Humedad se conecta a A0.

Sobre la conexión del LCD, por favor consulta [LCD](https://arduino.cc/en/Tutorial/LiquidCrystal)

![](https://github.com/Jeremyym/Temperature_Sensor/raw/master/img/Sidekick_34_1.png)

**Código:**

Abre Arduino IDE, haz clic en File -&gt; Shetchbook -&gt; TempHumiSensor.

Puedes obtener la humedad con readHumidity() y la temperatura con readTemperature(). Estas 2 funciones devolverán un valor float.

Sobre LCD, por favor consulta [LCD](https://arduino.cc/en/Tutorial/LiquidCrystal).

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>