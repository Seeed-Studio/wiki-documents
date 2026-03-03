---
description: Xadow - Pebble Time Adapter
title: Xadow - Pebble Time Adapter
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Xadow_Pebble_Time_Adapter
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/img/Xadow_Pebble_Time_Adapter_wiki.png)

La introducción de los módulos RePhone (Xadow) hace que tu reloj inteligente sea aún más inteligente. Basado en el [nuevo puerto de accesorios inteligentes en la parte posterior del Pebble Time](http://developer.getpebble.com/guides/hardware/), integramos los módulos RePhone delgados y pequeños – Xadow GPS v2 y Xadow NFC v2, en el ecosistema existente de Pebble, para ayudar a mejorar su capacidad desde la perspectiva de la electrónica integrada. El Xadow Pebble Time Adapter permite que los módulos RePhone(Xadow) se comuniquen con el Pebble Time a través de la interfaz Smartstrap utilizando el protocolo serie de un cable.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/RePhone-Strap-Kit-for-Pebble-Time-p-2633.html)

Especificaciones
--------------

Los 'GND' y 'PWR' en el marco posterior significan que puedes cargar tu Pebble Time sin quitar la carcasa.

![](https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/img/Pebble_base_2.png)

Descripción del Hardware
-----------------

### Proceso de ensamblaje

En el uso diario, los módulos se colocan uniformemente a cada lado del reloj, e interconectados con cables FPC. Las conexiones entre el módulo y el adaptador están especialmente diseñadas para ser de forma extensible para que se pueda evitar la desconexión inesperada de la conexión. Los puertos de carga del Pebble Time siguen siendo accesibles en la parte posterior del adaptador para las cargas diarias del reloj.

A continuación se proporciona un dibujo esquemático del proceso de ensamblaje del RePhone Strap Kit para Pebble Time

![](https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/img/Xadow_Pebble_Time_Adapter_assembly3.png)

Descargar la APP Xadow para Pebble Time
--------------------------------------

Puedes seguir las instrucciones para descargar la APP Xadow para Pebble Time, acceder a la información GPS y Tag ID en tu Pebble Time.

La App Demo se puede descargar desde [pebbleapp_jack.pbw 下载地址](https://github.com/Seeed-Studio/Xadow_Strap/raw/master/build/pebbleapp_jack.pbw). Puedes descargarla desde tu teléfono inteligente o enviarla desde tu PC al teléfono inteligente. Luego selecciona abrirla con la App "Pebble Time" en tu teléfono. Tendrás la opción de instalar la App demo en tu Pebble Time.

![](https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/img/Xadow_Pebble_Time_Adapter_APP_UI.png)

Guía de Programación
-----------------

### Comunicándose con el Adaptador

El firmware del adaptador implementa el protocolo descrito en la documentación oficial de pebble: [Pebble Smartstrap Protocol](http://developer.getpebble.com/guides/hardware/smartstrap-protocol/)

Así que los recursos que se pueden llamar desde el lado de la watchapp son los siguientes:

<table>
<thead>
<tr class="header">
<th>Servicio</th>
<th>Atributo</th>
<th>R/W</th>
<th>Tipo de Datos</th>
<th>Datos</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>0x0 Datos en Bruto</td>
<td>0x0 Datos en Bruto</td>
<td>RW</td>
<td>uint8 *buffer</td>
<td>Sin manejador en el lado del adaptador, deja la expandibilidad para el programador del firmware del adaptador</td>
</tr>
<tr class="even">
<td>0x2003 Servicio de Batería</td>
<td>0x1001 Obtener voltaje de la batería</td>
<td>R</td>
<td>uint16</td>
<td>El voltaje de la batería para la correa en Voltios con una precisión de 1/100. Por ejemplo, el voltaje es 3.70V, que se especificaría como 370.</td>
</tr>
<tr class="odd">
<td>0x2003 Servicio de Batería</td>
<td>0x1002 Habilitar o deshabilitar la carga del pebble con la batería de la correa</td>
<td>RW</td>
<td>uint8</td>
<td>0: No cargar pebble. 1: Cargar pebble.</td>
</tr>
<tr class="even">
<td>0x2001 Servicio de Ubicación y Navegación</td>
<td>0x0001 Ubicación</td>
<td>R</td>
<td>sint32[2]</td>
<td>La longitud y latitud actuales en grados con una precisión de 1/10^7. La latitud viene antes que la longitud en los datos. Por ejemplo, la sede de Pebble está en (37.4400662, -122.1583808), que se especificaría como {374400662, -1221583808}.</td>
</tr>
<tr class="odd">
<td>0x2001 Servicio de Ubicación y Navegación</td>
<td>0x0003 Velocidad</td>
<td>R</td>
<td>uint16</td>
<td>La velocidad actual en metros por segundo con una precisión de 1/100. Por ejemplo, 1.5 m/s se especificaría como 150.</td>
</tr>
<tr class="even">
<td>0x2001 Servicio de Ubicación y Navegación</td>
<td>0x1001 Altitud</td>
<td>R</td>
<td>uint16</td>
<td>La altitud actual en metros con una precisión de 1/100. Por ejemplo, 100m se especificaría como 10000.</td>
</tr>
<tr class="odd">
<td>0x2001 Servicio de Ubicación y Navegación</td>
<td>0x0101 Satélites GPS</td>
<td>R</td>
<td>uint8</td>
<td>El número de satélites GPS (típicamente reportado vía NMEA. Nota que este número es para satélites a la vista.</td>
</tr>
<tr class="even">
<td>0x2001 Servicio de Ubicación y Navegación</td>
<td>0x0102 Calidad de Fijación GPS</td>
<td>R</td>
<td>uint8</td>
<td>La calidad de la fijación GPS (reportada vía NMEA). Los valores posibles están listados en la <a href="http://www.gpsinformation.org/dale/nmea.htm#GGA">especificación NMEA</a>.</td>
</tr>
<tr class="odd">
<td>0x1E01 Servicio NFC</td>
<td>0x1001 Obtener UID de una etiqueta NFC</td>
<td>R</td>
<td>uint8 *</td>
<td>El UID será devuelto con longitud variable que puede ser indicada en el SmartstrapReadHandler con el parámetro length.
<strong>Este atributo puede ser notificado en SmartstrapNotifyHandler.</strong></td>
</tr>
<tr class="even">
<td>0x1E01 Servicio NFC</td>
<td>0x1002 Leer Datos NDEF</td>
<td>R</td>
<td>uint8 *</td>
<td>Los datos NDEF serán devueltos con longitud variable que puede ser indicada en el SmartstrapReadHandler con el parámetro length.</td>
</tr>
<tr class="odd">
<td>0x1E01 Servicio NFC</td>
<td>0x1003 Escribir Datos NDEF</td>
<td>W</td>
<td>uint8 *</td>
<td>Escribir un buffer uint8 en la etiqueta NFC</td>
</tr>
<tr class="even">
<td>0x1E01 Servicio NFC</td>
<td>0x1004 Borrar Datos NDEF</td>
<td>W</td>
<td>cualquier tipo</td>
<td>Escribir cualquier contenido o vacío para activar el borrado.</td>
</tr>
</tbody>
</table>

El código fuente de la aplicación demo de pebble se puede descargar en github: [Repositorio Xadow_Strap](https://github.com/Seeed-Studio/Xadow_Strap)

Esta aplicación es solo para demostración de llamadas de atributos parciales, siéntete libre de imaginar tu propia aplicación fantástica de pebble basada en la capacidad de GPS, NFC y más.

### Programando el Adaptador

El adaptador está construido con LPC11U35 y ejecuta software mbed en su interior. El firmware inicial se encuentra en mbed.org. Por favor echa un vistazo a [Xadow Smartstrap para Pebble](https://developer.mbed.org/teams/Seeed/code/xadow_smartstrap_for_pebble/)

El esquemático eagle del adaptador se puede descargar [aquí:](https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/res/Xadow_Pebble_Time_Adapter.rar)

Después de construir el binario del firmware, puedes seguir los pasos a continuación para flashear el binario en el adaptador.

1) Hackea un Cable USB y suelda los cables a las almohadillas de soldadura correspondientes.

![](https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/img/Hack_USB_cable-03.png)

2) Asegúrate de que la batería esté desconectada y conecta el USB a la PC.

3) Cortocircuita los pines "ISP" y "GND".

![](https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/img/ShortISP_GND.PNG)

4) Conecta la batería para encender el adaptador

5) Habrá una unidad USB en tu PC, ábrela y elimina todo lo que esté dentro del disco, luego copia el binario del firmware al disco.

6) Apaga y luego enciende, el firmware está actualizado.

Comunidad RePhone
-----------------

[![](https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/img/RePhone_Community-2.png)](https://community.seeedstudio.com/discover.html?t=RePhone)

Hemos estado buscando un mejor lugar donde nuestros patrocinadores (Usuarios de RePhone) puedan sentarse juntos, cálida y cómodamente, tener conversaciones sobre RePhone, discutir problemas técnicos, compartir ideas/proyectos, y dar retroalimentación sobre el desarrollo de los módulos en el futuro. Y entonces aquí vamos, la Comunidad RePhone.

¡Ahora únete a nosotros en la [Comunidad RePhone](https://community.seeedstudio.com/discover.html?t=RePhone)! Juntos buscamos respuestas, hacemos cosas interesantes, nos cuidamos unos a otros, y compartimos nuestras experiencias.


## Visor de Esquemáticos en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/res/Xadow_Pebble_Time_Adapter.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


Recursos
--------

- [Archivos eagle del Adaptador Xadow Pebble Time](https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/res/Xadow_Pebble_Time_Adapter.rar)
- [Preguntas Frecuentes sobre RePhone (FAQs)](https://forum.seeedstudio.com/viewtopic.php?f=71&t=6664&p=23753)

<!-- Este archivo Markdown fue creado desde https://www.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter -->

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
