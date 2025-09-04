---
description: Tutorial de LinkIt ONE - Control de LED por SMS
title: Tutorial de LinkIt ONE - Control de LED por SMS
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/LinkIt_ONE_Tutorial-SMS_control_the_LED
last_update:
  date: 1/13/2023
  author: shuxu hu
---
**Lo que estamos haciendo**

En esta sección, logramos una función genial. La característica destacada del LinkIt One es que está integrado con el módulo de comunicación. Estamos utilizando el módulo de comunicación GSM para transmitir mensajes, el estado del interruptor para cambiar el LED. Esto será emocionante. Primero conecta la antena, luego inserta una tarjeta SIM en la ranura del LinkIt One, después conecta el circuito según el esquema. Usa un teléfono móvil con GSM, edita el contenido del mensaje ON u OFF, envía al número especificado (el número de la SIM), ahora puedes controlar el estado del interruptor del LED, y sincronización global.

**Cosas que necesitas**

*   LinkIt One x 1

*   Placa de conexiones x 1

*   Resistencias 1kΩ,330Ω x 1

*   Transistor（2N3904） x 1

*   GIS ANT x 1

**Esquema**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-SMS_control_the_LED/img/LinkItONE_Kit_1_1.jpg)

**Conexión**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-SMS_control_the_LED/img/LinkItONE_Kit_1_2.png)

**Código**

Por favor haz clic en el botón de abajo para descargar el código del kit:

[![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-SMS_control_the_LED/img/Code_sidekick_linkit.png)](https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt)

Puedes descomprimir el archivo en la carpeta **Examples** de tu Arduino IDE.

Para acceder al código de demostración abre:

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Basic -&gt; L9_SMS_Light_

*   ¿La antena no funciona?

    *   Presta atención para verificar que la conexión de la antena sea estable. (El conector de la antena está en la parte posterior, marcado como GSM-ANT)

*   ¿Enviar el mensaje sin respuesta?

    *   La tarjeta SIM necesita estar desbloqueada en versión libre. (Es decir, no limitada a ninguna tarjeta SIM de teléfono móvil específico)

**Mejorándolo**

Perfecto con la función de comunicación del módulo GSM. Si queremos hacer algo por un tiempo corto, ¿cómo modificar el código? Establece un tiempo de 60 segundos (envía desde ON60). Envía un mensaje para configurar que la iluminación se apague automáticamente en un minuto después de la llegada.

Para acceder al código de demostración abre:

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Extend_Lesson –&gt; L10_SMS_Light_Advanced_

**Más ideas**

Con módulos de función Bluetooth, GPS, Wi-Fi. ¿Qué tal si vemos si hay nuevas formas de jugar?

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