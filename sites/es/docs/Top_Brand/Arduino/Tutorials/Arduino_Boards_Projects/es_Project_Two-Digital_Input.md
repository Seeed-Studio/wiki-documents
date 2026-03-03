---
description: Proyecto Dos – Entrada Digital
title: Proyecto Dos – Entrada Digital
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Project_Two-Digital_Input
last_update:
  date: 2/15/2023
  author: jianjing Huang
---
<!-- ---
name: Project Two – Digital Input
category: Tutorial
oldwikiname:  Project Two – Digital Input
prodimagename:
surveyurl: https://www.research.net/r/LinkIt_ONE_Tutorial-The_Basics
--- -->

El propósito de este proyecto es demostrar dos formas de entrada digital – usando el botón y el interruptor de inclinación. Presionar cualquiera de los botones encenderá el LED respectivo, y activar el interruptor de inclinación encenderá ambos LEDs.

1. Conecta el LED al conector D1/D2 Digital I/O, como estaba en los Proyectos 1 y

2. El Pin D1 de Arduino alimenta el LED Rojo en el conector D1 del Grove, y el Pin D2 de Arduino alimenta el LED Verde en el conector D2 del Grove.

3. Conecta el Interruptor de Inclinación al conector D5/D6 Digital I/O.

4. El conector D1 del Grove del Interruptor de Inclinación envía una señal alta o baja a la entrada digital D5 del Arduino.
5. Conecta el Grove de Botón Doble al conector de entrada D7/D8 (en la segunda fila.)

6. El botón rojo del Grove de Botón Doble usa el conector D1 para enviar una señal a la entrada digital D7 del Arduino, y el botón verde usa el conector D2 para enviar una señal a la entrada digital D8 del Arduino.
7.

![](https://files.seeedstudio.com/wiki/Project_Two-Digital_Input/img/Conn-two.jpg)

_**Ahora sube el siguiente sketch de Arduino:**_

```cpp
// Project Two - Digital Inputs
//

void setup()
{
    pinMode(1, OUTPUT);
    pinMode(2, OUTPUT);
    pinMode(5, INPUT);
    pinMode(7, INPUT);
    pinMode(8, INPUT);
}

void loop()
{

    if (digitalRead(5)==HIGH)
    {
        digitalWrite(1, HIGH);
        digitalWrite(2, HIGH);
        delay(100);
        digitalWrite(1, LOW);
        digitalWrite(2, LOW);
    }

    if (digitalRead(7)==HIGH)
    {
        digitalWrite(1, HIGH);
        delay(200);
        digitalWrite(1, LOW);
    }
    if (digitalRead(8)==HIGH)
    {
        digitalWrite(2, HIGH);
        delay(200);
        digitalWrite(2, LOW);
    }
}
```

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