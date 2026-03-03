---
description: Tutorial de LinkIt ONE - Hola Mundo
title: Tutorial de LinkIt ONE - Hola Mundo
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/LinkIt_ONE_Tutorial-Hello_World
last_update:
  date: 1/13/2023
  author: shuxu hu
---

**Lo que estamos haciendo**

En la sección anterior obtuvimos una perspectiva sobre cómo controlar un LED con componentes electrónicos, pero hagamos algunos trucos con software para el control automático del LED. Solo tienes que subir el código que está disponible en esta sección. El código escrito inicialmente enciende el LED, después de un retraso de 3 segundos lo apaga. Comencemos a usar la placa LinkIt.

**Cosas que necesitas**

*   LinkIt One x 1

*   Placa de pruebas x 1

*   Resistencias 330Ω,1kΩ x 1

*   LED de 5mm x 1

*   Transistor（2N3904) x 1

**Esquemático**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Hello_World/img/LinkItONE_Kit_1_1.jpg)

**Conexión**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Hello_World/img/LinkItONE_Kit_1_2.png)

**Código**

Por favor haz clic en el botón de abajo para descargar el código del kit:

[![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Hello_World/img/Code_sidekick_linkit.png)](https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt)

Puedes descomprimir el archivo en la carpeta **Examples** de tu Arduino IDE.

Para acceder al código de demostración abre:

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Basic -&gt; L2_Control_LED_
```
const int pinLED = 3;                      // LED connect to D13

void setup()
{
    pinMode(pinLED, OUTPUT);                // set direction of D13-OUTPUT
}

void loop()
{
    digitalWrite(pinLED, HIGH);             // LED on
    delay(3000);
    digitalWrite(pinLED, LOW);              // LED off
    delay(100);
}
```

**Solución de problemas**

*   ¿Problemas para subir el código？

    *   En este caso, el posible problema debería ser debido a una selección incorrecta del puerto de transferencia. Probablemente deberías modificarlo en "Tools&gt; Serial port&gt;".

*   ¿No puedes detener el proceso？

    *   Esto ocurre cuando tu código está ejecutándose en un bucle infinito, así que para terminar el proceso desconecta la fuente de alimentación de la placa.

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Hello_World/img/LinkItONE_Kit_2_3.jpg)

**Mejorándolo**

En la sección anterior usamos un capacitor para aumentar el brillo del LED lentamente y desvanecer su luminosidad lentamente. Hagamos lo mismo sin el capacitor pero cambiando puramente el código.

Para abrir el código de demostración：

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Extend_Lesson –&gt; L2_Breath_LED_

**Más ideas**

¿Cómo cambias la frecuencia del LED modificando el código?

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