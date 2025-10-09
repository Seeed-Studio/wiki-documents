---
description: Tutorial de LinkIt ONE - Interfaz Analógica
title: Tutorial de LinkIt ONE - Interfaz Analógica
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/LinkIt_ONE_Tutorial-Analog_Interface
last_update:
  date: 1/13/2023
  author: shuxu hu
---
**Lo que estamos haciendo**

En las secciones anteriores, aprendimos cómo controlar la entrada y salida del circuito usando la interfaz digital. En esta sección, aprenderemos cómo variar la salida usando un dispositivo analógico llamado potenciómetro (también conocido como resistor variable). Un potenciómetro se usa para variar el voltaje en el rango de 0 ~ 5V. La MPU lee el valor de voltaje en el rango de 0-1023. Esto puede usarse para controlar el brillo del LED (interfaz de salida de simulación PWM). Si el potenciómetro se gira en sentido horario, el LED se ilumina gradualmente. Si se gira en sentido antihorario, la luminosidad se desvanece.

**Cosas que necesitas**

*   LinkIt One x 1

*   Placa de pruebas x 1

*   Resistores 330Ω,10kΩ,1kΩ x 1

*   LED de 5mm x 1

*   Potenciómetro deslizante 10kΩ x 1

*   Transistor（2N3904） x 1

**Esquemático**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Analog_Interface/img/LinkItONE_Kit_6_1.jpg)

**Conexión**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Analog_Interface/img/LinkItONE_Kit_6_2.jpg)

**Código**

Por favor haz clic en el botón de abajo para descargar el código del kit:

[![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Analog_Interface/img/Code_sidekick_linkit.png)](https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt)

Puedes descomprimir el archivo en la carpeta **Examples** de tu Arduino IDE.

Para acceder al código de demostración abre:

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Basic -&gt; L6_Analog_Ctrl_LED_
```
const int led = 3;
const int pot = A0;

void setup()
{
    // nothing to initialize
}

void loop()
{
    int val = analogRead(pot);              // get value from potentiometer
    val = map(val, 0, 1023, 0, 255);        // make the value to 0~255
    analogWrite(led, val);                  // set the pwm of led
    delay(10);
}
```
**Solución de problemas**

*   ¿Problema de interfaz de pines?

    *   Si has conectado la entrada al pin digital en lugar del pin analógico, el circuito podría no funcionar correctamente.

*   ¿No funciona?

    *   El potenciómetro tiene tres pines. Verifica si has conectado el pin del medio a la interfaz analógica o de lo contrario el circuito podría no funcionar correctamente.

**Mejorándolo**

Para controlar la frecuencia de parpadeo del LED con un potenciómetro sube el siguiente código
Para abrir el código de demostración:

Para abrir el código de demostración：

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Extend_Lesson –&gt; L6_Flashing_LED_

**Más ideas**

¿Qué más puedes hacer con el valor de retorno del potenciómetro?

**Referencia**
<!-- 
*   [The Basics](/es/LinkIt_ONE_Tutorial-The_Basics)

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