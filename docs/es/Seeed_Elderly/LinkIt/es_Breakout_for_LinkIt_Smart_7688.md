---
description: Breakout para LinkIt Smart 7688
title:  Breakout para LinkIt Smart 7688
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Breakout_for_LinkIt_Smart_7688
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688/img/Breakout_for_LinkIt_Smart_7688_product_view_1200.jpg)

:::danger
Debido al cierre de MediaTek Labs, todos los enlaces relacionados se han vuelto inválidos. Si necesitas descargar archivos relevantes, por favor búscalos en el siguiente enlace: [https://github.com/MediaTek-Labs](https://github.com/MediaTek-Labs).
:::

**Breakout para LinkIt Smart 7688** es una placa de expansión integrada con puerto Grove para la placa de desarrollo LinkItTM Smart 7688. Esta placa breakout ahorrará mucho trabajo y hace que la creación de prototipos sea más fácil a través del cableado simplificado. Ayudará a un principiante a comenzar rápidamente. Soporta buses serie como I2C, UART. Viene con puertos USB, Ethernet y Audio de 3.5mm.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Breakout-for-LinkIt-Smart-7688-p-2590.html)

##  Características
---
*   La interfaz Grove hace el cableado más fácil y permite expansiones con módulos Grove.

*   Host USB

*   Salida de Audio

*   Puerto Ethernet

*   Costo-efectivo.

##  Ideas de aplicación
---
*   Dispositivo IoT/Gateway.

*   Robótica

*   Dispositivos multimedia inteligentes

*   Enseñanza y aprendizaje

##  Especificación
---
<table>
  <tr>
    <td> Voltaje de entrada </td>
    <td> 5.0V(Con puerto de alimentación USB)</td>
  </tr>
  <tr>
    <td> Voltaje de operación </td>
    <td> 3.3V</td>
  </tr>
  <tr>
    <td colspan="2"> Los pines de depuración, pines Ethernet y pines host USB tipo-A se conectan con MT7688, otros pines se conectan con ATmega32U4.</td>
  </tr>
</table>

##  Descripción del Hardware
---
![](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688/img/Breakout_for_LinkIt_Smart_7688_components_1200_s.jpg)

**Interfaz Grove**

<!-- Connect rich [Grove](/es/Grove_System) interfaced functional modules. With this kind of ports, you never need jumper wire or soldering work, and you can make more powerful applications with those functional modules. -->

:::note
    **Nota** que añadiremos la función de grabación de audio para esta placa en la próxima versión de este producto.
:::

Esta sección mostrará a esos clientes avanzados cómo añadir la función de grabación a esta placa.

1.Descarga el archivo esquemático en la parte inferior de esta página. Abre el archivo llamado **Breakout for LinkIt Smart7688 v1.0 brd.pdf**, y encuentra la sección **MIC Input**. Remueve los siguientes componentes: inductor L6 y capacitor C21. Esto añadirá la función de grabación a esta placa. **Nota** esta forma solo funciona si usas el firmware LinkIt Smart 7688 versión 0.9.3 y superior.


![](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688/img/To_use_recording_function_on_version_1.0.png)


2.Para principiantes, recomendamos que compres Breakout para LinkIt Smart 7688 v2.0 en [bazaar](https://www.seeedstudio.com/depot/Breakout-for-LinkIt-Smart-7688-v20-p-2641.html?cPath=122_142).


###  **Lista de partes**

<table>
  <tr>
    <th>Nombre de partes</th>
    <th>Cantidad</th>
  </tr>
  <tr>
    <td> Breakout para LinkIt Smart 7688 </td>
    <td> 1PCS </td>
  </tr>
</table>

##  Comenzar

###  Material requerido

*   LinkIt Smart 7688 × 1

*   Cable USB(tipo A a micro tipo-B) × 2

*   Adaptador USB a Serial × 1

*   Cables jumper × 3

*   Estéreo(con cable de audio de 3.5 mm) × 1

*   Unidad flash USB(con archivo de audio en formato MP3 adentro) × 1

###  Reproducir música

<!-- 1.Refer [here](/es/LinkIt_Smart_7688#Getting_Started) to connect your LinkIt Smart 7688 to internet.
 -->

:::note
    - Puedes conectar cables jumper al puerto MT7688 UART2 en lugar de soldarlos al Pin 8, Pin 9 y Pin GND.
    - En casos raros, podrías no conectarte a internet exitosamente, reinicia el SO embebido.
:::
2.Abre una consola con el adaptador USB a Serial.

3.Conecta todas las partes como sigue:


![](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688/img/Breakout_for_LinkIt_Smart_7688_demo_connection_1200.jpg)

4.Entra a la carpeta de USB escribiendo **cd /Media/USB-A1** en la consola.

5.Reproduce música con la utilidad **Madplay**(instalada en OpenWRT) escribiendo **madplay filename.mp3** en la consola.

6.Ahora escucharás la música.


## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688/res/Breakout_for_LinkIt_Smart_7688_v2.0_schematic_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


##  Recursos

*   [Archivos esquemáticos](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688/res/Breakout_for_LinkIt_Smart_7688_v2.0_schematic_files.zip)

<!-- *   [LinkIt smart 7688](/es/LinkIt_Smart_7688) -->

*   [OpenWrt](http://wiki.openwrt.org/doc/howto/user.beginner)

*   [Enlace](https://www.seeedstudio.com/depot/LinkIt-Smart-7688-p-2573.html?cPath=122_142) para comprar un LinkIt Smart 7688.

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>