---
description: Proyecto Dos - Entrada Digital v1.0b
title: Proyecto Dos - Entrada Digital v1.0b
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Project_Two-Digital_Input_v1.0b
last_update:
  date: 2/15/2023
  author: jianjing Huang
---

<!-- ---
name: Project Two - Digital Input v1.0b
category: Tutorial
oldwikiname:  Project Two - Digital Input v1.0b
prodimagename:
surveyurl: https://www.research.net/r/Project_Two-Digital_Input_v1b
--- -->

El propósito de este proyecto es demostrar dos formas de entrada digital – usando el botón Grove y el interruptor de inclinación Grove. Presionar el botón encenderá el LED, y activar el interruptor de inclinación encenderá el LED.

**Cableado:**

1. Conecta el Módulo LED al conector D1/D2 Digital I/O, como estaba en el Proyecto 1.

2. El Pin D1 de Arduino alimenta el LED en el conector SIG del Grove, y el Pin D2 de Arduino se conecta al conector NC del LED Grove.

3. Conecta el Interruptor de Inclinación Grove al conector D5/D6 Digital I/O.

4. El conector SIG del Interruptor de Inclinación Grove envía una señal alta o baja a la entrada digital D5 del Arduino.

5. Conecta el Módulo de Botón al conector de entrada D7/D8 (en la segunda fila.)

6. El Botón Grove usa el conector SIG para enviar una señal a la entrada digital D7 del Arduino.
![](https://files.seeedstudio.com/wiki/Project_Two-Digital_Input_v1.0b/img/Digitalv1.0b.jpg)

_**Ahora sube el siguiente sketch de Arduino:**_

```cpp
// Project Two - Digital Inputs
//

void setup()
{
  pinMode(1, OUTPUT);
  pinMode(5, INPUT);
  pinMode(7, INPUT);
}

void loop()
{

if (digitalRead(5)==HIGH)
  {
    digitalWrite(1, HIGH);
    delay(100);
    digitalWrite(1, LOW);
  }

  if (digitalRead(7)==HIGH)
  {
    digitalWrite(1, HIGH);
    delay(200);
    digitalWrite(1, LOW);
  }

}
```

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>