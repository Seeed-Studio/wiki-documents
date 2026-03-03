---
description: Manual de Programación de Firmware Air602
title: Manual de Programación de Firmware Air602
keywords:
- Air602_WiFi_Development_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Air602_Firmware_Programming_Manual
last_update:
  date: 01/20/2023
  author: Matthew
---


![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/main.jpg)

El módulo Air602 está basado en W600 que incorpora ARM-Cortex M3, en este tutorial te mostraremos cómo grabar el firmware.

## Descarga de Herramienta de Firmware e Imagen

Puedes descargar la Herramienta de Programación de Firmware aquí

[Herramienta de Firmware](https://v2.fangcloud.com/share/f348cba5a0e3899fd97c57b9f2)

Te proporcionamos el firmware oficial.

[Firmware Oficial](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/res/Air602_img.zip)

Encontrarás 4 versiones en este paquete zip, te recomendamos usar **AirM2M_Luat_V0011_W600T_USER**

### registro de cambios

|versión|Descripción|
|--|--|
|AirM2M_Luat_V0008_W600T_USER|Inicial|
|AirM2M_Luat_V0009_W600T_USER|Añade soporte mqtt|
|AirM2M_Luat_V0010_W600T_USER|Corregido el problema de que cuando el módulo se establece en modo AP y la función DHCP está deshabilitada, el dispositivo(estaciones) aún puede usar la función DHCP para obtener la dirección IP. Al mismo tiempo, también resuelve el problema de que algunos teléfonos móviles se conectan exitosamente pero se desconectan inmediatamente.|
|AirM2M_Luat_V0011_W600T_USER|Optimizado el consumo de energía del chip, reduciendo el calor generado durante la operación del chip|

Puedes saltar a [Grabar el firmware](#Burn the firmware) si no quieres usar el SDK.

## Descarga del SDK

También puedes descargar el SDK y reprogramarlo tú mismo.

[AirM2M_W600_SDK](https://github.com/openLuat/Luat_WiFi_WM_W600)

Te recomendamos compilarlo con **Keil MDK5**. Por favor usa Keil para abrir el **WM_W600.uvprojx**, puedes encontrarlo en **XXXXX\WM_SDK\Tools\Keil\Project**, donde XXXXX es la ubicación donde descomprimiste el SDK.

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/KEIL_path.jpg)

Cuando la compilación esté terminada, puedes encontrar el archivo **.img** en **XXXXX\WM_SDK\Bin**, donde XXXXX también es la ubicación donde descomprimiste el SDK.

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/KEIL_path_1.jpg)

Ahora puedes grabar tu propio firmware al Air602, entonces la pregunta es ¿cómo?

## Grabar el firmware

Desafortunadamente, la herramienta de firmware solo soporta idioma chino, para resolver este problema, te mostraremos las capturas de pantalla paso a paso.

**Paso 1.** Descomprime la Herramienta de Firmware, encuentra y haz doble clic en **LuaTool.exe** en **XXXX/LuaTools 1.5.7**, donde XXXX es la ruta donde descomprimiste la herramienta de firmware (LuaTools1.5.7).

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/Luat_path_1.jpg)

**Paso 2.** Cuando hayas abierto la herramienta, puede aparecer una ventana para permitirte actualizar, puedes simplemente hacer clic en "取消升级" para pasar este paso.

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/Tool_1.jpg)

**Paso 3.** Cambiar al modo wifi. El modo predeterminado es Luat para 4G, para grabar el firmware del Air602 debemos hacer clic en **切换模式 ->切换至WiFi**.

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/Tool_2.jpg)

Entonces el software se reiniciará, y verás una nueva ventana como esta:

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/Tool_3.jpg)

**Paso 4.** Elige el firmware que acabas de descargar o compilar con el SDK. Haz clic en **浏览文件**, elige el firmware (tanto *.img* como *.FLS* funcionarán), luego haz clic en **Open**.

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/Tool_4.jpg)

**Paso 5.** Elige el puerto COM correspondiente y comienza a grabar el firmware. En realidad la herramienta detectará el puerto COM del Air602 automáticamente, solo necesitas marcar la casilla de verificación, luego hacer clic en **开始** para comenzar a programar el firmware.

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/Tool_5.jpg)

Entonces verás un aviso **开始握手，请重启WiFi模块**, cuando aparezca este mensaje, por favor presiona el botón de reset en la placa de desarrollo Air602 a tiempo.

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/Tool_6.jpg)

Ten cuidado cuando presiones el botón de reset para prevenir la expulsión falsa del dispositivo USB. Segundos después aparecerá en la misma área **握手成功，开始下载**, lo que significa handshake exitoso y la programación comienza. También puedes ver la barra de progreso.

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/Tool_7.jpg)

:::note
Si falla, puede mostrar **握手超时**, lo que significa timeout de handshake, por favor repite el paso 5 varias veces, entonces funcionará.
:::

:::tip
Si todo va bien, verás la siguiente imagen, lo que significa que has grabado exitosamente el firmware en la placa de desarrollo Air602. ¡Disfruta! :D
:::

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/Tool_8.jpg)

## FAQ

### P1: Problemas después de grabar el FW AirM2M_Luat_V0011_W600T_USER (Por tarp.andreas)

**Cita"**
parece que si uno graba el firmware AirM2M_Luat_V0011_W600T_USER.FLS como se describe en la Wiki, es imposible usar el LuaTool
para ese módulo nuevamente.

**"**

R1: Eso es porque la Ver 11 ha cambiado la estructura de arranque del SDK, necesitas reescribir la flash antes de grabarlo de vuelta a ver08/09/10. Para más detalles por favor revisa
nuestro foro.

[Problemas después de grabar el FW AirM2M_Luat_V0011_W600T_USER](https://forum.seeedstudio.com/viewtopic.php?f=106&t=8498&p=28790#p28790)

___

### P2: Cómo programar desde Linux

**Cita"**
Ahora descubro que el archivo zip de "herramientas de firmware" no contiene ningún código fuente, sino solo unos pocos binarios de windows. Entonces, ¿cómo procedo a programar esta cosa desde mi estación de trabajo Linux?

**"**

R2: Desafortunadamente, no tenemos la herramienta de firmware para linux. Sin embargo puedes usar la herramienta de puerto serie con función de envío xmodem.

>Paso 1. Envía 1B (HEX), Cíclicamente.  
>Paso 2. Ofrecido por **tarp.andreas**. "Intenta presionar el botón RESET (o tirar hacia abajo LOW el pin Res en el módulo independiente) mientras envías "\x1b" entonces obtendrás la respuesta deseada."  
>Paso 3. Cuando responda "secboot running" y luego con "CCCCCC...." puedes elegir el archivo de firmware, y enviarlos bajo protocolo xmodem

Para más detalles por favor revisa nuestro foro.  

[Programando desde Linux.](https://forum.seeedstudio.com/viewtopic.php?f=106&t=8393&sid=acb3a9a37671cf031800ea6073adb854)

___

### P3: Problema de controlador de Mac os

Encontramos que algunas versiones del sistema mac no pueden reconocer esta placa.

R3 : En ese caso puede que necesites instalar el controlador CH340 manualmente, esta placa usa CH330N, que comparte el mismo controlador con CH340.

Para más detalles por favor revisa nuestro foro.  

[Problema de controlador de Mac os](https://forum.seeedstudio.com/viewtopic.php?f=106&t=8299&sid=acb3a9a37671cf031800ea6073adb854)

___

## Recursos

- **[Zip]** [Herramienta de Firmware](https://v2.fangcloud.com/share/f348cba5a0e3899fd97c57b9f2)

- **[Zip]** [Firmware Oficial](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/res/Air602_img.zip)

- **[Página de Github]** [AirM2M_W600_SDK](https://github.com/openLuat/Luat_WiFi_WM_W600)

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
