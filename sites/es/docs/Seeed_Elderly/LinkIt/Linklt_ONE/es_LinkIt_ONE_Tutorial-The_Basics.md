---
description: Tutorial de LinkIt ONE - Los Fundamentos
title: Tutorial de LinkIt ONE - Los Fundamentos
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/LinkIt_ONE_Tutorial-The_Basics
last_update:
  date: 1/13/2023
  author: shuxu hu
---

**Lo que estamos haciendo**

Construyamos un circuito simple usando un transistor, LED y un interruptor de palanca. El Diodo Emisor de Luz (LED) transforma la energía eléctrica en luz visible. El transistor es un componente fundamental en electrónica que actúa como un interruptor o un amplificador de corriente. Aquí, usamos un interruptor para ENCENDER y APAGAR el LED indirectamente usando el transistor.

**Cosas que necesitas**

*   LinkIt One x 1
*   Protoboard x 1

*   Resistencias 330Ω,1kΩ x 1 cada una

*   LED de 5mm x 1

*   Interruptor x 1
*   Transistor (2N3904) x 1

**Esquemático**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-The_Basics/img/LinkItONE_Kit_0_1.jpg)

**Conexión**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-The_Basics/img/LinkItONE_Kit_0_2.jpg)

**Solución de problemas**

*   Asegúrate de la polaridad del LED (El terminal largo es positivo y el terminal corto es negativo).

*   Verifica si has cortocircuitado dos pines del interruptor.

*   Asegúrate de no haber perdido la conexión del transistor en el circuito (Se requiere un transistor para manejar un LED).

*   ¿Quemaste un LED..?
    *   Esto sucede cuando olvidas conectar la resistencia de entrada que actúa como un limitador de corriente para el LED.

**Mejorándolo**

Ahora hemos hecho un circuito de control simple. Hagámoslo fascinante simplemente agregando otro componente llamado capacitor. Un capacitor actúa como un dispositivo de almacenamiento temporal de carga. Si un capacitor se conecta en paralelo con la resistencia que está en serie con el LED, hace que el LED se desvanezca. Cuando el interruptor se ENCIENDE el capacitor se carga, cuando el interruptor se APAGA la carga almacenada en el capacitor se descarga lentamente lo que hace que el LED se APAGUE desvaneciéndose.

**Más ideas**

¿Cuál es el componente usado para aumentar la luminosidad del LED lentamente cuando se enciende?

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

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>