---
description: FST-01
title: FST-01
keywords:
- grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/FST-01
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/FST-01/img/FST-01_board.jpg)

FST-01 es una pequeña computadora USB de 32 bits. De hecho, FST-01 es una abreviación y su nombre completo es "Flying Stone Tiny ZERO-ONE".

Está diseñado por Flying Stone Technology, una empresa en Maebashi, Gunma, Japón.

El concepto es "Diseño Minimalista". Es un diseño de hardware libre (como en libertad). Las aplicaciones previstas son Gnuk (El Token Criptográfico para GnuPG) y NeuG (Generador de Números Verdaderamente Aleatorios basado en ruido ADC). Esas aplicaciones son Software Libre.

Flying Stone Technology es un fabricante de segunda fuente de "Gnuk", que tiene derechos de autor de la organización sin fines de lucro, Free Software Initiative of Japan.

Para aquellos que desean características más ricas, por favor consideren [Maple Mini](https://www.seeedstudio.com/depot/maple-mini-p-861.html), en su lugar.

```
                        SWD port
                        (GND, SWD-CLK, SWD-IO)
    Power port +---------------------+
           Vdd |[]           []()() -------+
           GND |[]                  |      |
               |()() I/O port       | USB  |
               |      (PA2, PA3)    |      |
               |                    -------+
               +---------------------+
```

Por favor, utiliza el [sitio de preguntas y respuestas de FST-01](http://no-passwd.net/askbot/questions/) para tus consultas.

|FST-01 sin carcasa|FST-01 con tubo termorretráctil|FST-01 con carcasa (P1A-120704U)|
|---|---|---|
|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/depot/fst01-without-enclosure-p-1276.html)|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/depot/fst01-with-heat-shrink-tube-p-1277.html)|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/depot/fst01-with-white-enclosure-p-1279.html)|

También está disponible en Flying Stone Technology (飛石技術), de persona a persona. Consulta la página [¡Compra FST-01!](http://www.gniibe.org/shop/buy-fst-01) en gniibe.org (en japonés).

##   Aplicaciones
---
Como se explica en la sección anterior, pretendemos ejecutar [Gnuk](http://www.fsij.org/gnuk/) en FST-01. Es software con derechos de autor distribuido bajo licencia **GPLv3**.

![](https://files.seeedstudio.com/wiki/FST-01/img/Gnuk-sticker.png)

Gnuk es una implementación de Token Criptográfico para GnuPG, y se ejecuta en STM32F103. El código fuente está disponible en http://www.gniibe.org/ (https://git.gniibe.org/cgit/chopstx/ttxs.git/)

Para más información sobre Gnuk, por favor visita: [Documentación Oficial de Gnuk](http://www.fsij.org/doc-gnuk/).

También, pretendemos ejecutar NeuG en FST-01.

![](https://files.seeedstudio.com/wiki/FST-01/img/NeuG.png)

[NeuG](http://www.gniibe.org/memo/development/gnuk/rng/neug) es una implementación de Generador de Números Verdaderamente Aleatorios basado en el error de cuantización del ADC.

Ten en cuenta que solo se puede instalar una aplicación en FST-01 (ya sea Gnuk o NeuG).

###   Entorno de Desarrollo

Para Gnuk 1.0.1, utilizamos [GCC ARM Embedded 4.6-2012-q2](https://launchpad.net/gcc-arm-embedded/+milestone/4.6-2012-q2-update).

###   Para el primer lote de FST-01

En este producto, contiene software con derechos de autor, Gnuk versión 1.0.1, que está licenciado bajo **GPLv3**. Una copia de esa licencia está incluida en este WiKi, ver **GPLv3**.
Puedes obtener el código fuente correspondiente completo durante un período de tres años después del último envío de este producto, que no será antes del 2016-01-01, en el sitio web del fabricante en http://git.gniibe.org/gitweb/?p=gnuk/gnuk.git y ponemos la etiqueta "release/1.0.1" para la versión del producto.

Ten en cuenta que el binario de Gnuk en el primer lote de FST-01 fue compilado con la opción "-O3 -Os" por GCC ARM Embedded 4.6-2012-q2.

###   Lista de correo para Gnuk/NeuG

Tenemos una lista de correo para Gnuk/NeuG: [https://lists.alioth.debian.org/mailman/listinfo/gnuk-users](https://lists.alioth.debian.org/mailman/listinfo/gnuk-users)

Así como git.gniibe.org, los repositorios de código fuente están disponibles en: [https://anonscm.debian.org/cgit/gnuk/](https://anonscm.debian.org/cgit/gnuk/)

##   Escribiendo la ROM flash del MCU
---
Utilizamos el puerto SWD para escribir la ROM flash del MCU. Dado que SWD es algo nuevo, aún no hay buenas experiencias de hardware y software.

Seleccionamos ST-Link/V2 como depurador SWD económico y escribimos nuestra propia herramienta stlinkv2.py en Python. La herramienta stlinkv2.py se distribuye dentro de Gnuk. Ver [este artículo](http://www.gniibe.org/memo/development/fst-01/dongle/fst-01-swd-connection) para la conexión de ST-Link/V2 y FST-01.

El próximo OpenOCD 0.6.0 soportará ST-Link/V2 y SWD. También podrás usar eso.


###   Descripción

FST-01 es una placa STM32F103 mínima, que es adecuada para ejecutar aplicaciones orientadas a computación como Gnuk.
- Dimensiones: 1.62 x 0.52 pulgadas (incluyendo conector USB)
- Alimentado por Bus USB
- MCU: ARM Cortex M3 de 32 bits a 72MHz (STM32F103TBU6), ROM flash: 128KB, - RAM: 20KB
- SPI Memoria Flash: 4MB
- Puerto SWD, Dos pines de E/S
- Contenido de la ROM Flash del MCU: Como efecto secundario del plan de pruebas, FST-01 viene con Gnuk versión 1.0.1 instalado en la ROM flash del MCU y está protegido. Necesitas deshabilitar la protección antes de escribir la ROM flash.

Por favor visita esta página para más detalles.

**FST-01 sin carcasa**

Esta es una placa desnuda para evaluación, desarrollo o para aquellos que quieren sus propias carcasas.

Puedes acceder al puerto SWD y cambiar el contenido de la ROM flash.

**FST-01 con tubo termorretráctil**

La placa está cubierta por un tubo termorretráctil transparente. Por lo tanto, no es posible acceder al puerto SWD.
Esto puede ser para uso diario como Token Gnuk.

**FST-01 con carcasa (P1A-120704U)**

La placa viene con la carcasa. Ten en cuenta que son los usuarios quienes ponen la placa en la carcasa.
Esto sería mejor si el tubo transparente no coincide con tu gusto o quieres cambiar el contenido de la ROM flash del MCU.
Aunque el PCB FST-01 está diseñado siguiendo la recomendación de la especificación P1A-120704U, la carcasa podría ser un poco más grande y necesitarás un poco de pegamento para ajustar la placa y la carcasa. De lo contrario, la placa podrá moverse un poco (< 1mm aproximadamente).

##   Historial
---
*   2011-08-06: [Idea](http://www.gniibe.org/memo/development/fst-01/fst-01-idea)

*   2011-08-08: Commit inicial al [repositorio Git de FST-01](http://www.gniibe.org/gitweb?p=fst-01.git)

*   2011-08-23: Pedido de Fusion PCB para PCB prototipo: #33163

*   2011-08-26: [Deseo para FST-01](https://www.seeedstudio.com/wish/?p=783)

*   2011-09-06: Pedido de Fusion PCB para PCB prototipo: #34012

*   2011-09-13: Pedido de Fusion PCB para PCB prototipo: #34217

*   2011-09-30: Pedido de Fusion PCB para PCB prototipo: #35421

*   2011-10-27: Pedido de Fusion PCB para PCB prototipo: #37126

*   2011-11-14: Versión 1.0 del Diseño de PCB FST-01 lanzada

*   2012-07-10: Enviado a Propagete

*   2012-08-??: Realizado el pedido para producción

*   2012-09-27: Producción terminada para el primer lote

    *   Para el primer lote, XTAL se cambió a uno con capacitancia de carga de 20pF. (Debido a la disponibilidad de la pieza.)

        *   Para el primer lote, el contenido de la memoria flash ROM del MCU es Gnuk 1.0.1 y está protegido.

*   2012-10-08: Inicio de ventas en Seeed Bazaar

*   2015-04-01: Inicio de ventas en FSF Shop, con NeuG instalado: [http://shop.fsf.org/product/usb/](http://shop.fsf.org/product/usb/)

##   Diseño de Placa Libre (como en libertad)

![](https://files.seeedstudio.com/wiki/FST-01/img/Fst-01-schematic.png)

Fst-01-schematic.png

El diseño de la placa está disponible en formato [KiCAD](http://www.kicad-pcb.org/). Por favor visite http://git.gniibe.org/gitweb?p=gnuk/fst-01.git.

El diseño esquemático se distribuye bajo la Licencia Creative Commons Atribución 3.0 Unported (CC BY 3.0).

El diseño de PCB se distribuye bajo la Licencia Creative Commons Atribución-CompartirIgual 3.0 Unported (CC BY-SA 3.0).

##   BOM de FST-01
---
<table cellspacing="0">
<caption>BoM de FST-01</caption>
<tr>
<th>Parte #</th>
<th>Nombre</th>
<th>Detalle</th>
<th>Paquete</th>
<th>Fabricante</th>
<th>Distribuidor</th>
<th>referencia del distribuidor</th>
</tr>
<tr>
<td>C1</td>
<td>Capacitor</td>
<td>27pF</td>
<td>C0402</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>C2</td>
<td>Capacitor</td>
<td>27pF</td>
<td>C0402</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>C3</td>
<td>Capacitor</td>
<td>0.1uF</td>
<td>C0402</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>C4</td>
<td>Capacitor</td>
<td>0.1uF</td>
<td>C0402</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>C5</td>
<td>Capacitor</td>
<td>0.1uF</td>
<td>C0402</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>C6</td>
<td>Capacitor</td>
<td>0.1uF</td>
<td>C0402</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>C7</td>
<td>Capacitor</td>
<td>0.1uF</td>
<td>C0402</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>C8</td>
<td>Capacitor</td>
<td>4.7uF</td>
<td>C0603</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>C9</td>
<td>Capacitor</td>
<td>0.01uF</td>
<td>C0402</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>C10</td>
<td>Capacitor</td>
<td>4.7uF</td>
<td>C0603</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>C11</td>
<td>Capacitor</td>
<td>0.1uF</td>
<td>C0402</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>R1</td>
<td>Resistor</td>
<td>510R</td>
<td>R0402</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>D1</td>
<td>LED</td>
<td>Azul</td>
<td>LED0603</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>J1</td>
<td>Conector</td>
<td>USB 2.0, 1002-015-01001</td>
<td>USB Plug A Male</td>
<td>CNC Tech</td>
<td>Digikey</td>
<td>1175-1020-ND</td>
</tr>
<tr>
<td>U1</td>
<td>MCU</td>
<td>STM32F103TBU6</td>
<td>QFN36</td>
<td>STMicroelectronics</td>
<td>AVNET</td>
<td>STM32F103TBU6</td>
</tr>
<tr>
<td>U2</td>
<td>Regulador de Voltaje LDO</td>
<td>CAT6217-330TDGT3 +3.3V</td>
<td>TSOT23-5</td>
<td>ON Semiconductor</td>
<td>Mouser</td>
<td>698-CAT6217330TD-G</td>
</tr>
<tr>
<td>U3</td>
<td>Terminador USB</td>
<td>NUF2221W1</td>
<td>SOT363</td>
<td>ON Semiconductor</td>
<td>Digikey</td>
<td>NUF2221W1T2GOSTR-ND</td>
</tr>
<tr>
<td>U4</td>
<td>Memoria Flash SPI</td>
<td>SST25VF032B-80-4I-QAE-T</td>
<td>WSON8</td>
<td>Silicon Storage Technology</td>
<td>Digikey</td>
<td>SST25VF032B-80-4I-QAE-T-ND</td>
</tr>
<tr>
<td>X1</td>
<td>Cristal</td>
<td>ABM8G-12.000MHZ-18-D2Y-T</td>
<td>3.2mmx2.5mm</td>
<td>Abracon Corporation</td>
<td>Digikey</td>
<td>535-10261-2-ND</td>
</tr>
<tr>
<td></td>
<td>Carcasa</td>
<td>P1A-120704U  Blanco</td>
<td>1.2 x .71 x .40 pulgada</td>
<td>New Age Enclosures</td>
<td></td>
<td></td>
</tr>
</table>

##   Componentes del FST-01
---
*   STM32F103TB
*   Memoria Flash SPI (32Mbit)
*   Terminador USB
*   Regulador LDO (3.3V)
*   XTAL 12MHz C<sub>L</sub>=18pF

*   LED
*   Puerto SWD de GND/SWDIO/SWDCLK
*   Puerto de extensión de VDD/GND/Port0/Port1
*   Conector USB A

**<big>STM32F103TB </big>**

El MCU es un ARM basado en Cortex-M3 de STMicroelectronics. Funciona a 72MHz, tiene 128KB de ROM flash y 20KB de RAM.

**<big>Memoria Flash SPI</big>**

Los datos secretos deben estar en la flash del MCU, pero los datos no confidenciales (como respaldo del llavero público) pueden estar en la memoria flash SPI.

Usamos SST25VF032B (32Mbit = 4MB).

**<big>Terminador USB</big>**

Usamos el Terminador USB Upstream NUF2221W1.

Esto es porque tiene la característica de protección contra descarga electrostática. También es mejor para una huella más pequeña que dos capacitores y dos resistores.

**<big>Regulador LDO</big>**

Usamos CAT6217-330 para el Regulador de 3.3V (desde 5V). Una corriente de 150mA es suficiente.

**<big>XTAL 12MHz C<sub>L</sub>=18pF</big>**

Usamos XTAL 12MHz C<sub>L</sub>=18pF.

Esto es porque podemos encontrar XTAL de huella más pequeña para 12MHz (que para 8MHz).

**<big>LED</big>**

Usamos un LED para mostrar el estado.

**<big>Puerto SWD</big>**

El puerto SWD es para instalar firmware en la ROM flash del MCU.

**<big>Puerto de extensión de VDD/GND/Port0/Port1</big>**

Decidimos tener dos pines de E/S. (Un pin de E/S no es suficiente ni siquiera para un minimalista.)

Con dos pines de E/S, puede ser:

*   TX y RX de comunicación serial
*   Activación y entrada de sensor táctil
*   Control del puerto SWD de otro MCU

**<big>Conector USB A</big>**

El uso del FST-01 es simplemente conectarlo al puerto USB, como una unidad USB.

##   Posibles Cambios al circuito y componentes
---
**<big>Regulador LDO</big>**

MCP1700T-330 sería una alternativa (las características eléctricas parecen peores, pero para el caso de más corriente). En este caso, necesitamos cambiar el circuito un poco.

**<big>XTAL</big>**

Es posible simplemente reemplazar el XTAL con XTAL 12MHz C<sub>L</sub>=20pF.
Este cambio está dentro del margen del diseño.

Sería mejor también reemplazar C1 y C2 a 33pF juntos en ese caso, si lo harás desde el principio.

Ver [explicación sobre capacitancia de carga en Wikipedia](https://en.wikipedia.org/wiki/Pierce_oscillator#Load_capacitance).

**<big>GND de Blindaje a GND de Señal</big>**

El FST-01 está destinado a ser insertado directamente al puerto USB.
Si el uso no es directo sino conectado por cable de extensión, es mejor conectar el GND de Blindaje y el GND de Señal por resistor (y capacitor si gustas).

Referencia:
[http://electronics.stackexchange.com/questions/4515/how-to-connect-usb-connector-shield](http://electronics.stackexchange.com/questions/4515/how-to-connect-usb-connector-shield)

**<big>USB_EN</big>**

USB_EN no es necesario, pero el pin 5 del NUF2221W1 puede ser conectado a 3.3V (Vdd) directamente.

En muchos diseños de placas con STM32F103, vemos algo así, pero porque es posible controlar USB D+ para que sea 0V por software, USB_EN no es necesario.

**<big>Sin memoria flash SPI por defecto</big>**

El tamaño es algo demasiado pequeño para ser útil, por lo que podría ser una opción de usuarios especiales y no tener chip estaría bien por defecto.

##   Imágenes de PCB
---
Las imágenes de PCB son generadas por [prettygerbv](http://projects.qi-hardware.com/index.php/p/eda-tools/source/tree/master/fab/prettygerbv).

![](https://files.seeedstudio.com/wiki/FST-01/img/Fst-01-front.png)

![](https://files.seeedstudio.com/wiki/FST-01/img/Fst-01-back.png)

![](https://files.seeedstudio.com/wiki/FST-01/img/Fst-01-conn.png)

##   Prototipo de Ingeniería del FST-01
---

![](https://files.seeedstudio.com/wiki/FST-01/img/FST-01-Prototype-PCB.jpg)

FST-01-Prototype-PCB.jpg

Gracias al servicio Fusion PCB, fabricamos la PCB del Prototipo de Ingeniería FST-01.

![](https://files.seeedstudio.com/wiki/FST-01/img/FST-01-prototype.jpg)

El ensamblaje de la PCB fue realizado por **User:Gniibe** a mano. Ver [mi artículo](http://www.gniibe.org/memo/development/fst-01/qfn-diy-soldering) para más detalles.

##   Esquema del plan de pruebas
---
1.  Verificar ID del MCU
2.  Escribir en la ROM flash del MCU
3.  Verificar parpadeo del LED
4.  Verificar acceso a la ROM Flash SPI
5.  Ejecutar una aplicación que use USB y ver si funciona (Hub asignando dirección)
    1.  Al encender (o reiniciar), el LED emite luz.
    2.  La aplicación FST-01 espera la asignación de dirección USB por el Hub USB. (Toma unos segundos para que el Hub detecte y asigne dirección al dispositivo.)
    3.  Después de la asignación de dirección USB, la aplicación FST-01 entra en el bucle
            * esperando 5 segundos
            * parpadear LED (emite luz por 25ms, apagado 200ms).

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
