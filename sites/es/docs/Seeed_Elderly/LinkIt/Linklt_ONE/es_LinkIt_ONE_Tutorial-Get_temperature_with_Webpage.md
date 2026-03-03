---
description: Tutorial de LinkIt ONE - Obtener temperatura con página web
title: Tutorial de LinkIt ONE - Obtener temperatura con página web
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage
last_update:
  date: 1/13/2023
  author: shuxu hu
---
**Lo que estamos haciendo**

LinkIt One con función de comunicación Wi-Fi. Hemos recopilado algunos datos a través del LinkIt One. Como el AP de Internet para soportar el acceso a datos proporcionando un servidor web. El acceso a la dirección IP correspondiente puede obtener los datos con el navegador. El siguiente paso es conectar el circuito, adquisición de datos del sensor de temperatura. Luego bien equipado con antenas Wi-Fi y conectado a la red, por favor elija la red y complete los tres parámetros, el nombre de la red (WiFi_AP), contraseña de acceso (WIFI_PASSWORD), y modo de transmisión del router (opciones LWIFI_OPEN, LWIFI_WPA, LWIFI_WEP). Finalmente, el código se carga al LinkIt One. Uso del dispositivo terminal con red, abrir el navegador e ingresar la dirección IP obtendrá los datos de temperatura. (Visitar la asignación de dirección IP a través del acceso del router DHCP)

**Cosas que necesitas**

*   LinkIt One x 1

*   Placa de conexiones x 1

*   Resistencias 330Ω x 1
*   Antena Wi-Fi x 1

**Esquemático**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage/img/LinkItONE_Kit_10_1.jpg)

**Conexión**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage/img/LinkItONE_Kit_10_2.jpg)

**Código**

Por favor haz clic en el botón de abajo para descargar el código para el kit:

[![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage/img/Code_sidekick_linkit.png)](https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt)

Puedes descomprimir el archivo en la carpeta **Examples** de tu Arduino IDE.

Para acceder al código de demostración abre:

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Basic -&gt; L10_Web_Temp_

**Nota** que debes abrir el monitor serie para ingresar cualquier cosa para iniciar el programa.

**Solución de problemas**

*   ¿La antena no funciona?

    *   Atención para verificar que la conexión de la antena sea una conexión estable. (El conector de antena en la parte posterior, marcado como Wi-Fi/BT ANT)

*   ¿Dónde está la dirección IP?

    *   Primero ajusta el modo serie (DEBUG - &gt;MOLDE), puedes consultar a través del puerto serie. Haz clic en la esquina superior derecha del compilador, gráfico de lupa. Consulta estándar la dirección IP asignada. (Por favor haz clic en este paso para cambiar Tools - &gt;Port - &gt;COMX)

**Mejorándolo**

¿Quieres cambiar los datos en tiempo real? Nosotros a través del puerto web para monitorear una variación del valor de sensibilidad a la luz.

Para acceder al código de demostración abre:

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Extend_Lesson –&gt; L10_Web_Temp_Advanced_

**Más ideas**

Si quieres controlar el LinkIt One con web. ¿Cómo puede ser el control del trabajo del hardware?

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

¡Gracias por elegir nuestros productos! Estamos aquí para proporcionarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>