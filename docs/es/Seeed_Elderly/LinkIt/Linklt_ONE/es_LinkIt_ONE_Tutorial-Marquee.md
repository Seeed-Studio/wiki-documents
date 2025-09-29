---
description: Tutorial de LinkIt ONE - Marquesina
title: Tutorial de LinkIt ONE - Marquesina
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/LinkIt_ONE_Tutorial-Marquee
last_update:
  date: 1/13/2023
  author: shuxu hu
---
**Lo que estamos haciendo**

Los experimentos en las secciones anteriores usaron solo un LED, pero para mostrar efectos de luz deslumbrantes usemos tres LEDs. Haz las conexiones como se muestra en la Fig 4.2 y sube el código dado a continuación y observa los cambios que ocurren.

**Cosas que necesitas**

*   LinkIt One x 1
*   Placa de pruebas x 1

*   Resistencias 330Ω,1kΩ x 3

*   LED de 5mm x 3

*   Transistor(2N3904) x 3

**Esquemático**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Marquee/img/LinkItONE_Kit_4_1.jpg)

**Conexión**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Marquee/img/LinkItONE_Kit_4_2.jpg)

**Código**

Por favor haz clic en el botón de abajo para descargar el código para el kit:

[![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Marquee/img/Code_sidekick_linkit.png)](https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt)

Puedes descomprimir el archivo en la carpeta **Examples** de tu Arduino IDE.

Para acceder al código de demostración abre:

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Basic -&gt; L4_Control_LEDs_
```
const int pinLed1    = 2;                       // pin of led1
const int pinLed2    = 3;                       // pin of led2
const int pinLed3    = 4;                       // pin of led3

void setup()
{
    pinMode(pinLed1, OUTPUT);                   // set all pin OUTPUT
    pinMode(pinLed2, OUTPUT);
    pinMode(pinLed3, OUTPUT);
}


void loop()
{
    digitalWrite(pinLed4, LOW);                 // led4 off
    digitalWrite(pinLed1, HIGH);                // led1 on
    delay(100);

    digitalWrite(pinLed1, LOW);                 // led1 off
    digitalWrite(pinLed2, HIGH);                // led2 on

    delay(100);

    digitalWrite(pinLed2, LOW);                 // led2 off
    digitalWrite(pinLed3, HIGH);                // led3 on

    delay(100);

    digitalWrite(pinLed3, LOW);                 // led3 off
    digitalWrite(pinLed4, HIGH);                // led4 on

    delay(100);
}
```

**Solución de problemas**

*   Verifica la polaridad de los LEDs.

*   Asegúrate de haber conectado los LEDs a los pines de puerto correctos.

**Mejorándolo**

Sube el siguiente código con la misma conexión en la placa de pruebas para obtener diferentes efectos de parpadeo.

Para acceder al código de demostración abre:

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Extend_Lesson –&gt; L4_Control_LEDs_Speed_

**Más ideas**

Modifica el código existente de tal manera que la frecuencia de parpadeo del LED aumente.

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

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>