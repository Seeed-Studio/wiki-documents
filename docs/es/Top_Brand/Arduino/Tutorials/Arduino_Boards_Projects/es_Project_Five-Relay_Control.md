---
description: Proyecto Cinco – Control de Relé
title: Proyecto Cinco – Control de Relé
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Project_Five-Relay_Control
last_update:
  date: 2/15/2023
  author: jianjing Huang
---
<!-- ---
name: Proyecto Cinco – Control de Relé
category: Tutorial
oldwikiname:  Project Five – Relay Control
prodimagename:
surveyurl: https://www.research.net/r/Project_Five-Relay_Control
--- -->

En este proyecto demostraremos el uso del relé. Usando el botón, el botón uno encenderá el relé, y el botón dos lo apagará. Como se mencionó anteriormente, el relé puede manejar una capacidad de voltaje pico de 250V a 10 amperios.

Aunque puedas ser competente con voltajes bajos y microelectrónica, si no estás calificado para trabajar con voltajes de red eléctrica, consulta a un electricista licenciado para completar el trabajo.

Conecta el Botón Doble al conector de entrada D1/D2.

El botón rojo del Botón Doble Grove usa el conector D1 para enviar una señal a la entrada digital D1 del Arduino, y el botón verde usa el conector D2 para enviar una señal a la entrada digital D2 del Arduino.

Conecta el Relé al conector de entrada D6/D7.

El pin D6 del Arduino envía una señal al Relé en el conector D1. La luz roja del Relé Grove indica si el relé está encendido o apagado, y el relé hace un sonido de clic cuando cambia.

![](https://files.seeedstudio.com/wiki/Project_Five-Relay_Control/img/Conn-five.jpg)

_**Ahora sube el siguiente sketch de Arduino:**_

```cpp
// Project Five - Relay Control
//

void setup()
{
  pinMode(1, INPUT);
  pinMode(2, INPUT);
  pinMode(6, OUTPUT);
}

void loop()
{
  if (digitalRead(1)==HIGH)
  {
    digitalWrite(6, HIGH);
    delay(100);
  }
  if (digitalRead(2)==HIGH)
  {
    digitalWrite(6, LOW);
  }
}
```

<font color="magenta">
Cuando uses esto con un XBee Carrier, ten en cuenta que debes establecer la salida 16 en bajo para asegurar que el mosfet en el XBee carrier proporcione suficiente energía para activar el relé de manera confiable
</font>

La razón de la función delay después de establecer el relé en alto o bajo es permitir que el sketch haga una pausa – al hacerlo ignora los botones por una décima de segundo. Esto es más comúnmente conocido como 'anti-rebote por software'. Aunque hacerlo puede no parecer necesario en este ejemplo particular, hacerlo es un buen hábito para comenzar.

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