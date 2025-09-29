---
title: FSM-55
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/FSM-55/
slug: /es/FSM-55
last_update:
  date: 02/03/2022
  author: gunengyu
---
![](https://files.seeedstudio.com/wiki/FSM-55/img/FSM-55_board.jpg)

FSM-55 (Flying Stone Mini 55) es una pequeña placa para jugar con una pantalla de matriz LED de 5x5. Fue nombrada así por su matriz LED.

###   Pronunciación

Por favor di, F-S-M "Go" "Go", ya que "Go" es la pronunciación de 5 en japonés.

##   Tu Libertad Informática con Producto Reproducible

###   Diseño de Hardware

El diseño de hardware está disponible como diseño de hardware libre. Está diseñado con KiCAD.
La licencia es CC-BY 3.0 Unported para su diseño esquemático, y CC-BY-SA 3.0 Unported para su diseño de PCB.
(Esto debería estar descrito en su README, voy a añadirlo pronto.)

Cuando uses el diseño de PCB para ti mismo, por favor modifícalo para tu propio propósito. Por favor no incluyas el logo de Flying Stone Technology en tu PCB.

*   http://git.gniibe.org/gitweb/?p=fsm-55.git

###   Firmware

El firmware está disponible como Software Libre bajo GPLv3+.

*   http://git.gniibe.org/gitweb/?p=chopstx/chopstx.git;h=refs/heads/cortex-m0-support
<pre>$ git clone --branch cortex-m0-support git://git.gniibe.org/chopstx/chopstx.git</pre>

El programa principal está bajo: directorio example-fsm-55.

Ah, sí. Uso mi propia biblioteca de hilos para el firmware y la porté a Cortex-M0.

###   Herramienta

Si estás usando Windows en tu PC, la herramienta del proveedor funciona bien con CLI. Recibí un reporte de que la versión GUI no funciona bien.

En sistemas operativos libres, quizás, una versión más nueva de OpenOCD funcionaría, pero no funcionó para mí (a partir de 0.8 en Debian).

Uso mi propia herramienta, que originalmente fue escrita para el Proyecto Gnuk (para FST-01).

Necesité modificar la herramienta (stlinkv2.py) para que pueda funcionar con MCU Cortex-M0.

*   http://git.gniibe.org/gitweb/?p=gnuk/gnuk.git;h=refs/heads/stlink-m0-support
<pre>$ git clone --branch stlink-m0-support git://git.gniibe.org/gnuk/gnuk.git</pre>

Fue desarrollada originalmente para FST-01. Y hay algo específico para FST-01 como la verificación de flash SPI. Necesitas invocarla con la opción -i (inhibir verificación de flash SPI) para FSM-55.

`
`

<pre>$ stlinkv2.py -i ...</pre>

##   Razones: ¡Las Herramientas Libres son muy importantes para nosotros!

Una de las principales razones para esta placa (a ser desarrollada) fue el cierre de FreeRouting.Net.
Aunque yo (gniibe) no usé el servicio, es un incidente triste. Quería avisar a muchas personas sobre el diseño de PCB con herramientas Libres (como en libertad) y la situación actual.

*   FreeRouting.Net: [http://freerouting.net/](http://freerouting.net/)

Otra razón para esta placa fue que yo (gniibe) encontré que el soporte SWD de OpenOCD está mejorando, aunque aún no es perfecto. Quería tener más oportunidades para mejorar la situación alrededor de OpenOCD y la herramienta SWD, por mí mismo.

*   OpenOCD próximo 0.9.0: [http://openocd.sourceforge.net/](http://openocd.sourceforge.net/)

##   Productos disponibles en Seeed Bazaar

*   [FSM-55 LED Matrix Display Kit](https://www.seeedstudio.com/depot/FSM55-LED-Matrix-Display-p-2121.html) (Octubre 2014)

*   <s>[SWD Programmer (ST-Link/V2 clone)](https://www.seeedstudio.com/depot/STLink-V2-for-STM8-STM32-interface-programmer-p-2297.html)</s>(Marzo 2015)

*   **NOTA**: No estoy seguro si el clon ST-Link/V2 funciona para FSM-55. FSM-55 requiere que el pin NRST esté conectado al programador. Si el pin #9 del clon funciona como NRST, estará bien. Pero parece que el pin NRST y SWIM_RST son diferentes en el ST-Link/V2 original.

*   **NOTA**: Obtuve el clon ST-Link/V2, pero no puedo encontrar la manera de usarlo. Necesitamos averiguar cómo activar el pin 9 de SWIM_RST para el NRST de FSM-55. 2015-05-28

*   **NOTA**: El firmware del ST-Link/V2 en sí es software propietario. Idealmente, también debería ser software libre. Pero, la situación del desarrollo de hardware es así, actualmente. BusPirate o Versaloon podrían usarse, en su lugar, pero esos aún no son lo suficientemente estables para SWD.

##   Enlaces

###   Videos del prototipo FSM-55

*   [https://www.youtube.com/watch?v=7L2qUNF0v2U](https://www.youtube.com/watch?v=7L2qUNF0v2U)

*   [https://plus.google.com/111933309665296903652/posts/AMm9zEScpWK](https://plus.google.com/111933309665296903652/posts/AMm9zEScpWK)

*   [https://plus.google.com/109927329313008001365/posts/3z5w9XwkhSr](https://plus.google.com/109927329313008001365/posts/3z5w9XwkhSr)

###   Artículos del desarrollador de FSM-55

*   Artículos sobre FSM-55 por su desarrollador: [http://www.gniibe.org/tag/fsm-55.html](http://www.gniibe.org/tag/fsm-55.html)

###   Filosofía

*   Graham Seaman, Mayo 2001, "Diseño de Hardware Libre - Pasado, Presente, Futuro": [https://web.archive.org/web/20140407174608/http://www.opencollector.org/Whyfree/freedesign.html](https://web.archive.org/web/20140407174608/http://www.opencollector.org/Whyfree/freedesign.html)

*   Software Libre y Diseños de Hardware Libre: [https://web.archive.org/web/20140407212334/http://www.opencollector.org/Whyfree/whyfree.html](https://web.archive.org/web/20140407212334/http://www.opencollector.org/Whyfree/whyfree.html)

*   Definición de Hardware Abierto en 1998: [https://web.archive.org/web/20140407171518/http://www.opencollector.org/Whyfree/open_hardware.html](https://web.archive.org/web/20140407171518/http://www.opencollector.org/Whyfree/open_hardware.html)

*   Definiciones: [https://web.archive.org/web/20140407194913/http://www.opencollector.org/Whyfree/definitions.html](https://web.archive.org/web/20140407194913/http://www.opencollector.org/Whyfree/definitions.html)

*   Benjamin Mako Hill, Junio 2010, "El Software Libre Necesita Herramientas Libres": [http://mako.cc/writing/hill-free_tools.html](http://mako.cc/writing/hill-free_tools.html)

###   OSHW (que no es suficiente para el desarrollador de FSM-55)

*   Hardware de Código Abierto: [http://freedomdefined.org/OSHW](http://freedomdefined.org/OSHW)

*   [http://www.oshwa.org/research/brief-history-of-open-source-hardware-organizations-and-definitions](http://www.oshwa.org/research/brief-history-of-open-source-hardware-organizations-and-definitions)

###   Diseño Abierto

*   Diseño Abierto: [https://en.wikipedia.org/wiki/Open_design](https://en.wikipedia.org/wiki/Open_design)

###   GCC

*   GCC ARM Embedded: [https://launchpad.net/gcc-arm-embedded](https://launchpad.net/gcc-arm-embedded)

## Soporte Técnico y Discusión de Productos
 si tienes algún problema técnico.  envía el problema a nuestro [foro](http://forum.seeedstudio.com/). 
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>