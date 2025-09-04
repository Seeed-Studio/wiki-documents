---
description: Kit de Correa RePhone para Pebble
title: Kit de Correa RePhone para Pebble
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/RePhone_Strap_Kit_for_Pebble
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/RePhone_Strap_Kit_for_Pebble/img/Pebble3-04.png)

La introducción de los módulos RePhone (Xadow) hace que tu reloj inteligente sea aún más inteligente. Basado en el [nuevo puerto de accesorios inteligentes en la parte posterior del Pebble Time](http://developer.getpebble.com/guides/hardware/), integramos los módulos RePhone delgados y pequeños – Xadow GPS v2 y Xadow NFC v2, en el ecosistema existente de Pebble, para ayudar a mejorar su capacidad desde la perspectiva de la electrónica integrada. El Adaptador Xadow Pebble Time permite que los módulos RePhone(Xadow) se comuniquen con el Pebble Time a través de la interfaz Smartstrap usando el protocolo serie de un cable.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/RePhone-Strap-Kit-for-Pebble-Time-p-2633.html)

##  Especificaciones
---
###   Base del Adaptador Xadow para Pebble

Los 'GND' y 'PWR' en el marco posterior significan que puedes cargar tu Pebble Time sin quitar la carcasa.

![](https://files.seeedstudio.com/wiki/RePhone_Strap_Kit_for_Pebble/img/Pebble_base_2.png)

###   Xadow GPS v2
---
<!-- Para más información sobre este módulo, consulta la [**Página Wiki de Xadow GPS V2**](/es/Xadow_GPS_V2). -->

<table>
<tr>
<td> Microcontrolador </td>
<td> Kinetis KL02 </td>
</tr>
<tr>
<td> Núcleo </td>
<td> ARM® 32-bit Cortex® -M0+CPU </td>
</tr>
<tr>
<td> Fuente de Alimentación </td>
<td> 3.3 ~ 6 V (a través de pines de conexión) </td>
</tr>
<tr>
<td> Flash </td>
<td> 32 KB </td>
</tr>
<tr>
<td> SRAM </td>
<td> 4 KB </td>
</tr>
<tr>
<td> Velocidad de Reloj </td>
<td> 48 MHz </td>
</tr>
<tr>
<td> Consumo de Energía </td>
<td> 18mA@Seguimiento, 21mA@Adquisición </td>
</tr>
<tr>
<td> Ahorro de Energía </td>
<td> Típ. 3mA@AlwaysLocateTM, 7uA@Modo de Respaldo, 180uA@Modo de Espera </td>
</tr>
<tr>
<td> Canal </td>
<td> 22(Seguimiento) / 66 (Adquisición) </td>
</tr>
<tr>
<td> Tasa de Actualización </td>
<td> 1Hz(Por defecto), hasta 10Hz </td>
</tr>
<tr>
<td> Precisión de Posición Horizontal </td>
<td> &lt;2.5m CEP </td>
</tr>
<tr>
<td> Precisión de Velocidad </td>
<td> &lt;0.1m/s </td>
</tr>
<tr>
<td> Velocidad Máxima </td>
<td> Máx.515m/s </td>
</tr>
<tr>
<td> Inicio en frío/caliente con EASYTM </td>
<td> 215s/5s </td>
</tr>
<tr>
<td> Sensibilidad de Adquisición </td>
<td> -145dBm </td>
</tr>
<tr>
<td> Sensibilidad de Seguimiento </td>
<td> -163dBm </td>
</tr>
<tr>
<td> Temperatura de Operación </td>
<td> -40℃ a 85℃ </td>
</tr>
<tr>
<td> Protocolos </td>
<td> NMEA 0183/PMTK </td>
</tr>
<tr>
<td> Tipo de Antena </td>
<td> Antena de chip </td>
</tr>
<tr>
<td> Interfaz </td>
<td> Interfaz con Xadow GSM+BLE a través de I2C (dirección de 7 bits 0x05) </td>
</tr>
<tr>
<td> Dimensiones </td>
<td> 25.37mm X 20.30mm / 1" × 0.8" </td>
</tr>
</table>

###   Xadow NFC v2

<!-- For more info about this module please check on [**Xadow NFC v2 Wiki Page**](/es/Xadow_NFC_v2). -->

<table>
<tr>
<td> Microcontrolador </td>
<td> Kinetis KL02 </td>
</tr>
<tr>
<td> Núcleo </td>
<td> ARM® 32-bit Cortex® -M0+CPU </td>
</tr>
<tr>
<td> Fuente de Alimentación </td>
<td> 3.3 ~ 6V (a través de pines de conexión) </td>
</tr>
<tr>
<td> Flash </td>
<td> 32 KB </td>
</tr>
<tr>
<td> SRAM </td>
<td> 4 KB </td>
</tr>
<tr>
<td> Corriente de Trabajo </td>
<td> 5mA en espera; 55mA cuando lee/escribe </td>
</tr>
<tr>
<td> Radiofrecuencia </td>
<td> 13.56 MHz </td>
</tr>
<tr>
<td> Protocolos Soportados </td>
<td> ISO/IEC 14443 Tipo A e ISO/IEC 14443 Tipo B </td>
</tr>
<tr>
<td> Distancia Máxima de Operación </td>
<td> ~28mm dependiendo del tamaño actual de la antena </td>
</tr>
<tr>
<td> Dimensiones </td>
<td> 25.37mm × 20.30mm / 1" × 0.8" </td>
</tr>
</table>

###   Batería Xadow 100mAh

<table>
<tr>
<td> Voltaje </td>
<td> 3.3 V </td>
</tr>
<tr>
<td> Dimensiones </td>
<td> 25.37mm × 20.30mm / 1" × 0.8" </td>
</tr>
</table>


##  Proceso de ensamblaje
---
En el uso diario, los módulos se colocan uniformemente a cada lado del reloj y se interconectan con cables FPC. Las conexiones entre el módulo y el adaptador están especialmente diseñadas para ser de forma extensible, de modo que se pueda evitar una desconexión inesperada. Los puertos de carga del Pebble Time siguen siendo accesibles en la parte posterior del adaptador para las cargas diarias del reloj.

A continuación se proporciona un diagrama esquemático del proceso de ensamblaje del RePhone Strap Kit para Pebble Time

![](https://files.seeedstudio.com/wiki/RePhone_Strap_Kit_for_Pebble/img/Xadow_Pebble_Time_Adapter_assembly3.png)

##  Descargar la APP Xadow para Pebble Time
---
Puedes seguir las instrucciones para descargar la APP Xadow para Pebble Time, acceder a la información GPS y al Tag ID en tu Pebble Time.

La App Demo se puede descargar desde [https://github.com/Seeed-Studio/Xadow_Strap/raw/master/build/pebbleapp_jack.pbw](https://github.com/Seeed-Studio/Xadow_Strap/raw/master/build/pebbleapp_jack.pbw). Puedes descargarla desde tu teléfono inteligente o enviarla desde tu PC al teléfono inteligente. Luego selecciona abrirla con la App "Pebble Time" en tu teléfono. Tendrás la opción de instalar la App demo en tu Pebble Time.

![](https://files.seeedstudio.com/wiki/RePhone_Strap_Kit_for_Pebble/img/Xadow_Pebble_Time_Adapter_APP_UI.png)

##  Guía de programación
---
###   Comunicándose con el adaptador

El firmware del adaptador implementa el protocolo descrito en la documentación oficial de pebble: [http://developer.getpebble.com/guides/hardware/smartstrap-protocol/](http://developer.getpebble.com/guides/hardware/smartstrap-protocol/)

Por lo tanto, los recursos que se pueden llamar desde el lado de la watchapp son los siguientes:

<table>
<tr>
<th> Servicio </th>
<th> Atributo </th>
<th> L/E </th>
<th> Tipo de Datos </th>
<th> Datos </th>
</tr>
<tr>
<td> 0x0 Datos en Bruto </td>
<td> 0x0 Datos en Bruto </td>
<td> LE </td>
<td> uint8 *buffer </td>
<td> Sin manejador en el lado del adaptador, deja la expandibilidad para el programador del firmware del adaptador </td>
</tr>
<tr>
<td> 0x2003 Servicio de Batería </td>
<td> 0x1001 Obtener voltaje de la batería </td>
<td> L </td>
<td> uint16 </td>
<td> El voltaje de la batería para la correa en Voltios con una precisión de 1/100. Por ejemplo, el voltaje es 3.70V, que se especificaría como 370. </td>
</tr>
<tr>
<td> 0x2003 Servicio de Batería </td>
<td> 0x1002 Habilitar o deshabilitar la carga del pebble con la batería de la correa </td>
<td> LE </td>
<td> uint8 </td>
<td> 0: No cargar pebble. 1: Cargar pebble. </td>
</tr>
<tr>
<td> 0x2001 Servicio de Ubicación y Navegación  </td>
<td> 0x0001 Ubicación </td>
<td> L </td>
<td> sint32[2] </td>
<td> La longitud y latitud actuales en grados con una precisión de 1/10^7. La latitud viene antes que la longitud en los datos. Por ejemplo, Pebble HQ está en (37.4400662, -122.1583808), que se especificaría como {374400662, -1221583808}. </td>
</tr>
<tr>
<td> 0x2001 Servicio de Ubicación y Navegación </td>
<td> 0x0003 Velocidad </td>
<td> L </td>
<td> uint16 </td>
<td> La velocidad actual en metros por segundo con una precisión de 1/100. Por ejemplo, 1.5 m/s se especificaría como 150. </td>
</tr>
<tr>
<td> 0x2001 Servicio de Ubicación y Navegación </td>
<td> 0x1001 Altitud </td>
<td> L </td>
<td> uint16 </td>
<td> La altitud actual en metros con una precisión de 1/100. Por ejemplo, 100m se especificaría como 10000. </td>
</tr>
<tr>
<td> 0x2001 Servicio de Ubicación y Navegación </td>
<td> 0x0101 Satélites GPS </td>
<td> L </td>
<td> uint8 </td>
<td> El número de satélites GPS (típicamente reportado vía NMEA. Nota que este número es para satélites a la vista. </td>
</tr>
<tr>
<td> 0x2001 Servicio de Ubicación y Navegación </td>
<td> 0x0102 Calidad de Fijación GPS </td>
<td> L </td>
<td> uint8 </td>
<td> La calidad de la fijación GPS (reportada vía NMEA). Los valores posibles están listados en la [especificación NMEA](http://www.gpsinformation.org/dale/nmea.htm#GGA). </td>
</tr>
<tr>
<td> 0x1E01 Servicio NFC </td>
<td> 0x1001 Obtener UID de una etiqueta NFC </td>
<td> L </td>
<td> uint8 * </td>
<td> El UID será devuelto con longitud variable que puede ser indicada en el SmartstrapReadHandler con el parámetro length.
 **Este atributo puede ser notificado en SmartstrapNotifyHandler.** </td>
</tr>
<tr>
<td> 0x1E01 Servicio NFC </td>
<td> 0x1002 Leer Datos NDEF </td>
<td> L </td>
<td> uint8 * </td>
<td> Los datos NDEF serán devueltos con longitud variable que puede ser indicada en el SmartstrapReadHandler con el parámetro length. </td>
</tr>
<tr>
<td> 0x1E01 Servicio NFC </td>
<td> 0x1003 Escribir Datos NDEF </td>
<td> E </td>
<td> uint8 * </td>
<td> Escribir un buffer uint8 en la etiqueta NFC </td>
</tr>
<tr>
<td> 0x1E01 Servicio NFC </td>
<td> 0x1004 Borrar Datos NDEF </td>
<td> E </td>
<td> cualquier tipo </td>
<td> Escribir cualquier contenido o vacío para activar el borrado. </td>
</tr>
</table>

El código fuente de la aplicación de demostración para pebble se puede descargar en github: [https://github.com/Seeed-Studio/Xadow_Strap](https://github.com/Seeed-Studio/Xadow_Strap)

Esta aplicación es solo para demostración de llamadas de atributos parciales, siéntete libre de imaginar tu propia aplicación fantástica para pebble basada en la capacidad de GPS, NFC y más.

###   Programando el Adaptador

El adaptador está construido con LPC11U35 y ejecuta software mbed en su interior. El firmware inicial se encuentra en mbed.org. Por favor echa un vistazo a [https://developer.mbed.org/teams/Seeed/code/xadow_smartstrap_for_pebble/](https://developer.mbed.org/teams/Seeed/code/xadow_smartstrap_for_pebble/)

El esquemático eagle del adaptador se puede descargar aquí: [https://www.seeedstudio.com/wiki/images/f/f8/Xadow_Pebble_Time_Adapter.rar](https://files.seeedstudio.com//wiki/RePhone_Strap_Kit_for_Pebble/res/Xadow_Pebble_Time_Adapter.rar)

Después de construir el binario del firmware, puedes seguir los pasos a continuación para flashear el binario en el adaptador.

1) Hackea un Cable USB y suelda los cables a las almohadillas de soldadura correspondientes

![](https://files.seeedstudio.com/wiki/RePhone_Strap_Kit_for_Pebble/img/Hack_USB_cable-03.png)

2) Asegúrate de que la batería esté desconectada y conecta el USB a la PC.

3) Cortocircuita los pines "ISP" y "GND".

![](https://files.seeedstudio.com/wiki/RePhone_Strap_Kit_for_Pebble/img/ShortISP_GND.PNG)

4) Conecta la batería para encender el adaptador

5) Habrá una unidad usb en tu PC, ábrela y elimina todo lo que esté dentro del disco, luego copia el binario del firmware al disco.

6) Apaga y luego enciende, el firmware está actualizado.

##  Comunidad RePhone
---
[![](https://files.seeedstudio.com/wiki/RePhone_Strap_Kit_for_Pebble/img/RePhone_Community-2.png)](https://forum.seeedstudio.com/viewforum.php?f=71&amp;sid=b70f8138c89becf7701260bb41faf9f4)

Hemos estado buscando un mejor lugar donde nuestros patrocinadores (Usuarios de RePhone) puedan sentarse juntos, cálida y cómodamente, tener conversaciones sobre RePhone, discutir problemas técnicos, compartir ideas/proyectos, y dar retroalimentación sobre el desarrollo de los módulos en el futuro. Y entonces aquí vamos, la Comunidad RePhone.

¡Ahora únete a nosotros en la [Comunidad RePhone](https://forum.seeedstudio.com/viewforum.php?f=71&amp;sid=b70f8138c89becf7701260bb41faf9f4)! Juntos buscamos respuestas, hacemos cosas interesantes, nos cuidamos unos a otros, y compartimos nuestras experiencias.

###   Preguntas Frecuentes

Algunas preguntas frecuentes en la Comunidad RePhone son recopiladas y respondidas en el tema **["Preguntas Frecuentes de RePhone (FAQ)"](https://forum.seeedstudio.com/viewtopic.php?f=71&amp;t=6664&amp;p=23753#p23753)** , el tema se mantendrá actualizándose cada vez que surja una nueva FAQ.


## Visor de Esquemáticos en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com//wiki/RePhone_Strap_Kit_for_Pebble/res/Xadow_Pebble_Time_Adapter.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

##  Recursos
---
El diagrama esquemático del Adaptador Xadow Pebble Time se proporciona en el siguiente enlace:

*   [_Archivos eagle del Adaptador Xadow Pebble Time_](https://files.seeedstudio.com//wiki/RePhone_Strap_Kit_for_Pebble/res/Xadow_Pebble_Time_Adapter.rar)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
