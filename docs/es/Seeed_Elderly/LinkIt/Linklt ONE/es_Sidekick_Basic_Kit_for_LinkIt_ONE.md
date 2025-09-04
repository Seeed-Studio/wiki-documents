---
description: Kit Básico Sidekick para LinkIt ONE
title: Kit Básico Sidekick para LinkIt ONE
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Sidekick_Basic_Kit_for_LinkIt_ONE
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_LinkIt_ONE/img/SKP-0.jpg)


##   Inicio Rápido con LinkIt ONE

Aquí hablaremos sobre cómo usar LinkIt ONE

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Sidekick-Basic-Kit-for-LinkIt-ONE-p-2027.html)

##   Los Fundamentos

Construyamos un circuito simple usando un transistor, LED y un interruptor de palanca. El Diodo Emisor de Luz (LED) transforma la energía eléctrica en luz visible. El transistor es un componente fundamental en electrónica que actúa como un interruptor o un amplificador de corriente. Aquí, usamos un interruptor para ENCENDER y APAGAR el LED indirectamente usando el transistor.

<!-- Click [here](/es/LinkIt_ONE_Tutorial-The_Basics) to see the full tutorial. -->

##   Lección 2: Hola Mundo

En la sección anterior obtuvimos una perspectiva sobre cómo controlar un LED con componentes electrónicos, pero hagamos algunos trucos con software para el control automático del LED. Solo tienes que subir el código que está disponible en esta sección. El código escrito inicialmente enciende el LED, después de un retraso de 3 segundos lo apaga. Comencemos a usar la placa LinkIt.

<!-- Click [here](/es/LinkIt_ONE_Tutorial-Hello_World) to see the full tutorial. -->

##   Lección 3: Botón Pulsador

Ahora obtuvimos una perspectiva de cómo funcionan el software y hardware del capítulo anterior. En este capítulo aprenderemos cómo integrar tanto software como hardware para el control del LED. Haz las conexiones en la protoboard como se muestra en la Fig 3.2 y sube el código. Ahora este circuito opera como un interruptor de dos vías cuando presionas el botón pulsador del lado izquierdo el LED se enciende y cuando se presiona el botón pulsador del lado derecho el LED se APAGA.

<!-- Click [here](/es/LinkIt_ONE_Tutorial-Push_Button) to see the full tutorial. -->

##   Lección 4: Marquesina

Los experimentos en las secciones anteriores usaron solo un LED pero para mostrar efectos de luz deslumbrantes usemos tres LEDs. Haz las conexiones como se muestra en la Fig 4.2 y sube el código dado a continuación y observa los cambios que ocurren.

<!-- Click [here](/es/LinkIt_ONE_Tutorial-Marquee) to see the full tutorial. -->

##   Lección 5: Mundo Colorido

Ahora sabemos cómo controlar los LEDs, combinémoslo con la idea básica sobre combinar colores. Los R-Rojo G-Verde B-Azul son los colores primarios, estos colores cuando se mezclan en diferentes proporciones dan diferentes colores. Un LED RGB consiste en cuatro pines, el cable largo es el terminal positivo y los otros tres cables son para controlar los colores RGB. Haz las conexiones como se muestra en la Fig5.2 y sube el código.

<!-- Click [here](/es/LinkIt_ONE_Tutorial-Colorful_World) to see the full tutorial. -->

##   Lección 6: Interfaz Analógica

En las secciones anteriores, aprendimos cómo controlar la entrada y salida del circuito usando interfaz digital. En esta sección, aprenderemos cómo variar la salida usando un dispositivo analógico llamado potenciómetro (también conocido como resistor variable). Un potenciómetro se usa para variar el voltaje en el rango de 0 ~ 5V. La MPU lee el valor de voltaje en el rango de 0-1023. Esto puede usarse para controlar el brillo del LED (interfaz de salida de simulación PWM). Si el potenciómetro se gira en sentido horario, el LED se ilumina gradualmente. Si se rota en sentido antihorario, la luminosidad se desvanece.

<!-- Click [here](/es/LinkIt_ONE_Tutorial-Analog_Interface) to see the full tutorial. -->

##   Lección 7: Mini Servo

El motor servo (servo) se usa comúnmente en pequeños robots y otras máquinas para controlar la posición angular. Está envuelto por una pequeña caja de engranajes, y se posiciona mediante pulsos de control de temporización. En esta sección controlamos la posición angular del mini servo con la ayuda de un potenciómetro.

<!-- Click [here](/es/LinkIt-ONE-Tutorial---Mini-Servo) to see the full tutorial. -->

##   Lección 8: Sensor de Luz

Es hora de conocer nuevos sensores que podrían hacer nuestros proyectos aún más interesantes. Una fotorresistencia (resistor dependiente de la luz o fotocelda) es un sensor de luz que varía su valor de resistencia basado en la intensidad de la luz ambiental. Un zumbador es un dispositivo electroacústico usado para generar un tono estándar cuando se conecta a la fuente de alimentación. Usemos ambos componentes en nuestros experimentos.

<!-- Click [here](/es/LinkIt_ONE_Tutorial-Light-Sensor) to see the full tutorial. -->

##   Lección 9: Control del LED por SMS

En esta sección, logramos una función genial. La característica destacada del LinkIt One es que está integrado con el módulo de comunicación. Estamos siguiendo a través del módulo de comunicación GSM para transmitir mensajes, el estado del interruptor para pasar a cambiar el LED. Esto será emocionante. Primero conecta con la antena, y luego inserta una SIMCARD en la ranura del LinkIt One, luego según el esquemático conecta el circuito. Usa un teléfono móvil con GSM, edita el contenido del mensaje ON u OFF, envía al número especificado (el número SIM), ahora puedes controlar el estado del interruptor LED, y sincronización global.

<!-- Click [here](/es/LinkIt_ONE_Tutorial-SMS_control_the_LED) to see the full tutorial. -->

##   Lección 10: Obtener temperatura con página web

LinkIt One con función de comunicación Wi-Fi. Hemos recolectado algunos datos a través del LinkIt One. Como el AP de Internet para soportar acceso a datos proporcionando Servidor Web. El acceso a la dirección IP correspondiente puede obtener los datos con el navegador. El siguiente paso necesitas conectar el circuito, adquisición de datos del sensor de temperatura. Luego bien equipado con antenas Wi-Fi tú y conectado a la red, por favor ten una elección con la red llena los tres parámetros, el nombre de la red (WiFi_AP), contraseña de acceso (WIFI_PASSWORD), y modo de transmisión del router (opciones LWIFI_OPEN, LWIFI_WPA, LWIFI_WEP). Finalmente, el código se sube al LinkIt One. Uso del dispositivo terminal con red, abre el navegador e ingresa la dirección IP obtendrá los datos de temperatura. (Visita la asignación de dirección IP vía acceso del router DHCP)

<!-- Click [here](/es/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage) to see the full tutorial. -->

##   Recursos

*   [Repositorio Github para Sickkick Basic Kit para LinkIt ONE](https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para proporcionarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
