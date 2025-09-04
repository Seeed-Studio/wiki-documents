---
description: Proyecto Tres – Entrada Analógica v1.0b
title: Proyecto Tres – Entrada Analógica v1.0b
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Project_Three-Analog_Input_v1b
last_update:
  date: 2/15/2023
  author: jianjing Huang
---
<!-- ---
name: Proyecto Tres – Entrada Analógica v1.0b
category: Tutorial
oldwikiname:  Proyecto Tres – Entrada Analógica v1.0b
prodimagename:
surveyurl: https://www.research.net/r/Project_Three-Analog_Input_v1b
--- -->

El propósito de este sketch es demostrar una forma de entrada analógica usando el potenciómetro Grove. Usaremos esto para establecer el retardo para nuestros LEDs parpadeantes del proyecto uno.

Conecta el módulo LED al conector de E/S Digital D1/D2, como estaba en los Proyectos 1 y 2.
El Pin D1 de Arduino alimenta el conector SIG del Grove LED, y el Pin D2 de Arduino se conecta al conector NC del Grove LED.

Conecta el módulo Potenciómetro al conector de entrada analógica A0/A1.

El módulo Potenciómetro produce un voltaje analógico en su salida SIG, que está conectada a la entrada analógica A0 de Arduino en el conector de entrada A0/A1.

![](https://files.seeedstudio.com/wiki/Project_Three-Analog_Input_v1b/img/Analog_Input_v1.0b.jpg)

_**Ahora sube el siguiente sketch de Arduino:**_

```cpp
// Project Three - Analog Input
//

void setup()
{
  pinMode(1, OUTPUT);
}

void loop()
{
  digitalWrite(1, HIGH);
  delay(analogRead(0));
  digitalWrite(1, LOW);
  delay(analogRead(0));
}
```

El valor máximo de retardo es 1023, ya que este es el límite superior del valor devuelto por la función analogRead(). Podrías usar funciones matemáticas para aumentar o reducir el rango del retardo.

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