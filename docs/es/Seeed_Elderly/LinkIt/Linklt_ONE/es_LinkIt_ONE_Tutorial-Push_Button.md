---
description: Tutorial de LinkIt ONE - Botón Pulsador
title: Tutorial de LinkIt ONE - Botón Pulsador
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/LinkIt_ONE_Tutorial-Push_Button
last_update:
  date: 1/13/2023
  author: shuxu hu
---
**Lo que estamos haciendo**

Ahora tenemos una comprensión de cómo funcionan el software y el hardware del capítulo anterior. En este capítulo aprenderemos cómo integrar tanto el software como el hardware para el control del LED. Realiza las conexiones en la protoboard como se muestra en la Fig 3.2 y sube el código. Ahora este circuito opera como un interruptor de dos vías: cuando presionas el botón pulsador del lado izquierdo, el LED se enciende y cuando se presiona el botón pulsador del lado derecho, el LED se apaga.

**Cosas que necesitas**

*   LinkIt One x 1

*   Protoboard x 1

*   Resistencias 330Ω,1kΩ x 1

*   Resistencia 10kΩ x 2

*   LED de 5mm x 1

*   Transistor(2N3904) x 1

*   Interruptores de botón pulsador x 2

**Esquemático**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Push_Button/img/LinkItONE_Kit_3_1.jpg)

**Conexión**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Push_Button/img/LinkItONE_Kit_3_2.jpg)

**Código**

Por favor haz clic en el botón de abajo para descargar el código del kit:

[![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Push_Button/img/Code_sidekick_linkit.png)](https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt)

Puedes descomprimir el archivo en la carpeta **Examples** de tu Arduino IDE.

Para acceder al código de demostración abre:

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Basic -&gt; L3_Control_LED_Button_
```
const int pinLED = 3;                      // LED connect to D13

const int btnOn  = 5;                       // button on
const int btnOff = 6;                       // button off

void setup()
{
    pinMode(pinLED, OUTPUT);                // set direction of D13-OUTPUT
    pinMode(btnOff, INPUT);                 // set direction of D2-INPUT
    pinMode(btnOn, INPUT);
}

void loop()
{
    if(0 == digitalRead(btnOn))            // button on pressed
    {
        digitalWrite(pinLED, HIGH);
    }

    if(0 == digitalRead(btnOff))
    {
        digitalWrite(pinLED, LOW);
    }
}
```

**Mejorándolo**

Manteniendo la misma conexión de hardware, sube el siguiente código. La luminosidad se intensifica cuando se presiona el interruptor de botón pulsador izquierdo y se desvanece cuando se presiona el interruptor de botón pulsador derecho.

Para acceder al código de demostración abre:

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Extend_Lesson –&gt; L3_Brightness_

**Más ideas**

¿Cómo modificarías el código para que cambie la frecuencia de parpadeo del LED?

**Referencia**

<!-- *   [The Basics](/es/LinkIt_ONE_Tutorial-The_Basics)

*   [Hello World](/es/LinkIt_ONE_Tutorial-Hello_World)

*   [Push Button](/es/LinkIt_ONE_Tutorial-Push_Button)

*   [Marquee](/es/LinkIt_ONE_Tutorial-Marquee)

*   [Colorful World](/es/LinkIt_ONE_Tutorial-Colorful_World)

*   [Analog Interface](/es/LinkIt_ONE_Tutorial-Analog_Interface)

*   [Mini Servo](/es/LinkIt-ONE-Tutorial---Mini-Servo)

*   [Light Sensor](/es/LinkIt_ONE_Tutorial-Light-Sensor)

*   [SMS Control the LED](/es/LinkIt_ONE_Tutorial-SMS_control_the_LED)

*   [Get Temperature with Webpage](/es/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage) -->

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