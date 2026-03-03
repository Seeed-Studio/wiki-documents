---
description: Tutorial de LinkIt ONE - Sensor de Luz
title: Tutorial de LinkIt ONE - Sensor de Luz
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/LinkIt_ONE_Tutorial-Light-Sensor
last_update:
  date: 1/13/2023
  author: shuxu hu
---

**Lo que estamos haciendo**

Es hora de conocer nuevos sensores que podrían hacer nuestros proyectos aún más interesantes. Un fotorresistor (resistor dependiente de la luz o fotocelda) es un sensor de luz que varía su valor de resistencia basado en la intensidad de la luz ambiental. Un zumbador es un dispositivo electroacústico usado para generar un tono estándar cuando se conecta a la fuente de alimentación. Usemos ambos componentes en nuestros experimentos.

**Cosas que necesitas**

*   LinkIt One x 1

*   Protoboard x 1

*   Resistores 10kΩ,1kΩ,330Ω x 1

*   Zumbador x 1

*   Fotorresistor x 1

*   Transistor（2N3904）x 1

**Esquemático**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Light-Sensor/img/LinkItONE_Kit_8_1.jpg)

**Conexión**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Light-Sensor/img/LinkItONE_Kit_8_2.jpg)

**Código**

Por favor haz clic en el botón de abajo para descargar el código para el kit:

[![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Light-Sensor/img/Code_sidekick_linkit.png)](https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt)

Puedes descomprimir el archivo en la carpeta **Examples** de tu Arduino IDE.

Para acceder al código de demostración abre:

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Basic -&gt; L8_Light_Control_Buzzer_
```
const int pinBuz   = 3;                        // pin define of LED
const int pinLight = A0;                        // pin define of Light Sensor

void setup()
{
    pinMode(pinBuz, OUTPUT);
    pinMode(pinLight, INPUT);
}

void loop()
{
    int value = analogRead(pinLight);
    value = map(value, 0, 1023, 255, 0);
    analogWrite(pinBuz, value);
    delay(100);
}
```
**Solución de problemas**

*   ¿El fotosensible no funciona?

    *   El espaciado de los cables del fotorresistor no es estándar. Es fácil hacer cortocircuito con los cables. Revisa cuidadosamente.

*   ¿Sin sonido?

    *   Los cables del zumbador son muy cortos. Revisa cuidadosamente si están insertados correctamente en la protoboard.

**Mejorándolo**

Controlemos el tono del zumbador aún más usando el fotorresistor. Se pueden generar diferentes tonos si varías la intensidad de luz que cae sobre el fotorresistor. Sube el siguiente código y observa la diferencia.

Para acceder al código de demostración abre:

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Extend_Lesson –&gt; L8_Buzzer_Music_

**Más ideas**

Podemos hacer aplicaciones más interesantes usando la fotocelda. Intenta hacer un regalo navideño sensible a la luz.

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