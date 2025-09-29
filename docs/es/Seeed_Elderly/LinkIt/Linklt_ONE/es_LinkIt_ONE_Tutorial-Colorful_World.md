---
description: Tutorial de LinkIt ONE - Mundo Colorido
title: Tutorial de LinkIt ONE - Mundo Colorido
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/LinkIt_ONE_Tutorial-Colorful_World
last_update:
  date: 1/13/2023
  author: shuxu hu
---
**Lo que estamos haciendo**

Ahora sabemos cómo controlar los LEDs, combinémoslo con la idea básica sobre la combinación de colores. Los colores R-Rojo G-Verde B-Azul son los colores primarios, estos colores cuando se mezclan en diferentes proporciones dan diferentes colores. Un LED RGB consiste en cuatro pines, el cable largo es el terminal positivo y los otros tres cables son para controlar los colores RGB. Haz las conexiones como se muestra en la Fig5.2 y sube el código.

**Cosas que necesitas**

*   LinkIt One x 1

*   Placa de pruebas x 1

*   Resistencias 330Ω,10kΩ,1kΩ x 3

*   LED RGB de 8mm x 1
*   Transistor（2N3904） x 3
*   Botón x 3

**Esquemático**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Colorful_World/img//LinkItONE_Kit_5_1.jpg)

**Conexión**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Colorful_World/img//LinkItONE_Kit_5_2.jpg)

**Código**

Por favor haz clic en el botón de abajo para descargar el código para el kit:

[![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Colorful_World/img//Code_sidekick_linkit.png)](https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt)

Puedes descomprimir el archivo en la carpeta **Examples** de tu Arduino IDE.

Para acceder al código de demostración abre:

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Basic -&gt; L5_Color_Pannel_
```
const int ledR = 2;
const int ledB = 3;
const int ledG = 4;

const int buttonR = 5;
const int buttonG = 6;
const int buttonB = 7;

void setup()
{
    pinMode(ledR, OUTPUT);                          // set all led pin OUTPUT
    pinMode(ledG, OUTPUT);
    pinMode(ledB, OUTPUT);

    pinMode(buttonR, INPUT);                        // set all button pin INPUT
    pinMode(buttonG, INPUT);
    pinMode(buttonB, INPUT);
}

void loop()
{
    int stateR = 1-digitalRead(buttonR);            // get state of button
    int stateG = 1-digitalRead(buttonG);
    int stateB = 1-digitalRead(buttonB);

    digitalWrite(ledR, stateR);                     // set led
    digitalWrite(ledG, stateG);
    digitalWrite(ledB, stateB);

    delay(10);
}
```
**Solución de problemas**

*   Visualización de color incorrecta

    *   Dado que hay cuatro pines en el LED, existe probabilidad de error en la conexión, asegúrate de que todos los pines de control estén conectados a los cables correctos

*   ¿Apariencia rojiza？

    *   En el LED RGB, el color rojo tiene mayor intensidad que los otros dos colores para un voltaje dado. Para hacer que el tono general del color esté en armonía, trata de reducir la intensidad del LED ROJO con un valor de resistencia mayor.

**Mejorándolo**

¿Quieres obtener más colores? Hay dos botones para ajustar los valores RGB de aumentos sucesivos. Entonces podemos encontrar más colores. Trata de construir el circuito conectando las dos interfaces de salida analógica (los valores RGB se incrementaron más alto o más bajo). El código ha sido definido para obtenerlo. (Salida analógica PWM, obtienes un valor de retorno de la salida del analógico 0-1023 para usar.)

Para abrir el código de demostración：

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Extend_Lesson –&gt; L5_Colourful_RGB_

**Más ideas**

¿Cómo expandir el código para reducir los valores RGB?

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