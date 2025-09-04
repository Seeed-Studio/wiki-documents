---
title: Kit de enlace RF de 315Mhz
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/315Mhz_RF_link_kit/
slug: /es/315Mhz_RF_link_kit
last_update:
  date: 02/03/2022
  author: gunengyu
---
![](http://bz.seeedstudio.com/depot/images/product/3151.jpg)

El kit está compuesto por transmisor y receptor, comúnmente utilizado para control remoto.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/315mhz-rf-link-kit-p-76.html)

##   Especificaciones
---
*   Frecuencia: 315Mhz.

*   Modulación: ASK

*   Salida de Datos del Receptor: Alto - 1/2 Vcc, Bajo - 0.7v

*   Voltaje de Entrada del Transmisor: 3-12V (mayor voltaje = mayor potencia de transmisión)

##   Uso
---
El enlace popular es así: MCU -&gt; Codificador -&gt; Transmisor ------ Receptor -&gt; Decodificador -&gt; MCU,

PT2262(Codificador) y PT2272(Decodificador) son opcionales, su existencia es para 1)evitar confusión cuando múltiples enlaces RF están en rango 2) aislar interferencias. Puedes integrar el trabajo de codificación y decodificación a los MCUs en ambos lados. Siempre que no haya dispositivos de 315Mhz alrededor, puedes usarlo como conexión directa por cable.

Disculpas por la documentación, trabajaremos en ella. Antes de eso, por favor consúltanos para cualquier detalle, estaremos felices de encontrar la respuesta para ti ^^ Los probamos usando la guía de Sparkfun, es compatible. La única diferencia está en el empaque, de algunos pines GND adicionales.

Además, haremos más módulos RF nosotros mismos con diferente frecuencia y capacidad. El siguiente en el plan está basado en cc1100 Por favor sugiérenos sobre tu necesidad :)

![](https://files.seeedstudio.com/wiki/315Mhz_RF_link_kit/img/315433RF.jpg)

##   Recursos
---
*   [Esquema de Demostración](https://www.seeedstudio.com/depot/datasheet/315MRFlink.pdf)

*   [File:VirtualWire.zip](https://files.seeedstudio.com/wiki/315Mhz_RF_link_kit/res/VirtualWire.zip "File:VirtualWire.zip")

*   [Documentación Para 1.3](https://www.seeedstudio.com/depot/images/product/VirtualWire.pdf)

*   [Ejemplo de sparkfun](http://www.sparkfun.com/datasheets/RF/KLP_Walkthrough.pdf)

*   [Ejemplo ejecutando módulos rf](http://winavr.scienceprog.com/example-avr-projects/running-tx433-and-rx433-rf-modules-with-avr-microcontrollers.html)

## Soporte Técnico y Discusión del Producto
 si tienes algún problema técnico. envía el problema a nuestro [foro](http://forum.seeedstudio.com/). 
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>