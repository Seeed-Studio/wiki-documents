---
description: Tutorial de LinkIt ONE - Mini Servo
title: Tutorial de LinkIt ONE - Mini Servo
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/LinkIt-ONE-Tutorial---Mini-Servo
last_update:
  date: 1/13/2023
  author: shuxu hu
---
**Lo que estamos haciendo**

El motor servo (servo) se usa comúnmente en robots pequeños y otras máquinas para controlar la posición angular. Está envuelto por una pequeña caja de engranajes y se posiciona mediante pulsos de control de temporización. En esta sección controlamos la posición angular del mini servo con la ayuda de un potenciómetro.

**Cosas que necesitas**

*   LinkIt One x 1

*   Placa de conexiones x 1
*   Potenciómetro deslizante 10kΩ x 1

*   Servo x 1

**Esquemático**

![](https://files.seeedstudio.com/wiki/LinkIt-ONE-Tutorial---Mini-Servo/img/LinkItONE_Kit_7_1.jpg)

**Conexión**

![](https://files.seeedstudio.com/wiki/LinkIt-ONE-Tutorial---Mini-Servo/img/LinkItONE_Kit_7_2.jpg)

**Código**

Por favor haz clic en el botón de abajo para descargar el código del kit:

[![](https://files.seeedstudio.com/wiki/LinkIt-ONE-Tutorial---Mini-Servo/img/Code_sidekick_linkit.png)](https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt)

Puedes descomprimir el archivo en la carpeta **Examples** de tu Arduino IDE.

Para acceder al código de demostración abre:

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Basic -&gt; L7_Servo_
```
#include <Servo.h>

Servo myservo;              // create servo object to control a servo
int potpin = A0;             // analog pin used to connect the potentiometer
int val;                    // variable to read the value from the analog pin

void setup()
{
    myservo.attach(9);                  // attaches the servo on pin 9 to the servo object
}

void loop() {
    val = analogRead(potpin);          // reads the value of the potentiometer (value between 0 and 1023)
    val = map(val, 0, 1023, 0, 179);   // scale it to use it with the servo (value between 0 and 180)
    myservo.write(val);                // sets the servo position according to the scaled value
    delay(15);                         // waits for the servo to get there
}
```

**Solución de problemas**

*   Hay tres pines en los servos y están codificados por colores según su funcionalidad: amarillo - puerto analógico, rojo - positivo, marrón oscuro - tierra. Por favor haz las conexiones de acuerdo a su funcionalidad.

*   Asegúrate de que la fuente de alimentación de 5v esté conectada a la placa.

**Mejorándolo**

Si el mini servo funcionó, podemos ajustar la velocidad de rotación usando un potenciómetro. Sube el siguiente código para producir una funcionalidad diferente.

Para acceder al código de demostración abre:

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Extend_Lesson –&gt; L7_Servo_Speed_

**Más ideas**

¿Cómo controlas dos motores servo simultáneamente para que puedas hacer un robot?

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