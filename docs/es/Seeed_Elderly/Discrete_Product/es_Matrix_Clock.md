---
description: Reloj Matrix
title: Reloj Matrix
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Matrix_Clock
last_update:
  date: 1/13/2023
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Matrix_Clock/img/MatrixClock-ProductImagePlain.jpg)

El reloj Matrix es una placa única, altamente compacta, compatible con Arduino que muestra la hora en una pantalla de matriz LED. La pantalla y la rica biblioteca de firmware permiten transiciones animadas entre minutos.

![](https://files.seeedstudio.com/wiki/Matrix_Clock/img/MatrixClockRear.jpg)![](https://files.seeedstudio.com/wiki/Matrix_Clock/img/MC-Buttons.jpg)

Basado en el Arduino Leonardo, el Reloj Matrix es totalmente compatible con el IDE de Arduino y puede ser fácilmente actualizado o personalizado con nuevos sketches, cargados a través de un cable USB Micro. Un Reloj Calendario de Tiempo Real alimentado por pila de botón mantiene el registro de la hora y fecha cuando la unidad no está alimentada. El Reloj Matrix también puede reproducir alarmas musicales que pueden ser fácilmente reprogramadas con diferentes melodías. Debido a su factor de forma compacto, el reloj Matrix podría ser instalado en cualquier número de carcasas - incluso una carcasa estilo reloj de bolsillo. Si se desea portabilidad, entonces la unidad puede ser alimentada por batería y una función de suspensión está disponible (llevando uno de los pines de expansión a tierra) para extender la vida de la batería.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Matrix-Clock-p-1824.html)


##  Características
---
*   Pantalla de matriz LED de 16x8
*   Microcontrolador ATMEGA32U4
*   Reloj Calendario de Tiempo Real alimentado por pila de botón
*   Controlador LED Texas Instruments TLC5920
*   4 Botones
*   Salida de altavoz piezoeléctrico
*   Entrada de modo de suspensión
*   2 entradas de alimentación, conector USB Micro o entrada DC de 6V - 9V. (Normalmente alimentado por Vin cambia cuando la alimentación USB está presente).

##  Instrucciones
---

![](https://files.seeedstudio.com/wiki/Matrix_Clock/img/MC-Mode.jpg)

##  Especificaciones

<table>
<tr>
<td>Microcontrolador</td>
<td>Atmel ATmega32u4 en paquete TQFP-44</td>
</tr>
<tr>
<td>Voltaje de Operación</td>
<td>5V alimentado por USB o 6V a 9V</td>
</tr>
<tr>
<td>Alimentación y comunicaciones</td>
<td>USB Micro B</td>
</tr>
<tr>
<td>Corriente</td>
<td>Aprox. 90mA promedio durante operación normal  Máx. 300mA</td>
</tr>
<tr>
<td>Matriz LED</td>
<td>2x 8x8 LEDs verdes de 3mm</td>
</tr>
<tr>
<td>Velocidad de reloj</td>
<td>Microcontrolador 16MHz, RTCC 32.7</td>
</tr>
<tr>
<td>SRAM</td>
<td>2.5 KB</td>
</tr>
<tr>
<td>EEPROM</td>
<td>1 KB</td>
</tr>
<tr>
<td>Memoria Flash</td>
<td>32 KB</td>
</tr>
<tr>
<td>Cabecera de Expansión</td>
<td>Gnd, Vin, 5V, Sleep, Piezo-, Pezo+</td>
</tr>
</table>

##  Esquemático
---
- [MatrixClock-Schematic-MC201V1-Rev1.pdf](https://wiki.seeedstudio.com/es/images/c/c3/MatrixClock-Schematic-MC201V1-Rev1.pdf)

##  PCB
---
![](https://files.seeedstudio.com/wiki/Matrix_Clock/img/MatrixClock-PCB.jpg)

##  Licencias

[http://i.creativecommons.org/l/by-sa/4.0/88x31.png](http://i.creativecommons.org/l/by-sa/4.0/88x31.png)

Matrix Clock V1 por Dan Hamer está licenciado bajo una [Licencia Creative Commons Atribución-CompartirIgual 4.0 Internacional](http://creativecommons.org/licenses/by-sa/4.0/deed.en_US)

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