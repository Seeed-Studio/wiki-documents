---
title: Kit de Enlace RF 433Mhz
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/433Mhz_RF_Link_Kit/
slug: /es/433Mhz_RF_Link_Kit
last_update:
  date: 02/03/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/433Mhz_RF_Link_Kit/img/113990010%201.jpg)

El kit está compuesto por transmisor y receptor, comúnmente utilizado para control remoto.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/depot/433mhz-rf-link-kit-p-127.html?cPath=139_140)

## Especificaciones
---
- Frecuencia: 433Mhz.
- Modulación: ASK
- Salida de Datos del Receptor: Alto - 1/2 Vcc, Bajo - 0.7v
- Voltaje de Entrada del Transmisor: 3-12V (mayor voltaje = mayor potencia de transmisión)
- Voltaje de Entrada del Receptor: 3.3-6V (mayor voltaje = mayor potencia de recepción)

## Uso
---
El enlace popular es así: MCU -> Codificador -> Transmisor ------ Receptor -> Decodificador -> MCU

PT2262(Codificador) y PT2272(Decodificador) son opcionales, su existencia es para 1)evitar confusión cuando múltiples enlaces RF están en rango 2) aislar interferencias. Puedes integrar el trabajo de codificación y decodificación a los MCUs en ambos lados. Siempre que no haya dispositivos de 315Mhz alrededor, puedes usarlo como conexión directa por cable.

Disculpas por la documentación, trabajaremos en ella. Antes de eso, por favor consúltanos para cualquier detalle, estaremos felices de encontrar la respuesta para ti ^^ Los probamos usando la guía de Sparkfun, es compatible. La única diferencia está en el empaque, de algunos pines GND adicionales.

Además, haremos más módulos RF nosotros mismos con diferente frecuencia y capacidad. El siguiente en el plan está basado en cc1100. Por favor sugiérenos sobre tu necesidad :)

## Soporte

Si tienes preguntas u otras mejores ideas de diseño, puedes ir a nuestro [foro](https://community.seeedstudio.com/) para discutir.

## Recursos

- [Esquema de Demostración](https://files.seeedstudio.com/wiki/433Mhz_RF_Link_Kit/res/315MRFlink.pdf)
- [VirtualWire 1.3](https://files.seeedstudio.com/wiki/433Mhz_RF_Link_Kit/res/VirtualWire.rar)
- [Documentación Para 1.3](https://files.seeedstudio.com/wiki/433Mhz_RF_Link_Kit/res/VirtualWire.pdf)
- [ejemplo de sparkfun](https://files.seeedstudio.com/wiki/433Mhz_RF_Link_Kit/res/KLP_Walkthrough.pdf)
- [ejemplo ejecutando módulos rf](http://winavr.scienceprog.com/example-avr-projects/running-tx433-and-rx433-rf-modules-with-avr-microcontrollers.html)


## Licencias

Esta documentación está licenciada bajo Creative Commons [Attribution-ShareAlike License 3.0](https://creativecommons.org/licenses/by-sa/3.0/) El código fuente y las librerías están licenciadas bajo [GPL/LGPL](http://www.gnu.org/licenses/gpl.html), ver archivos de código fuente para detalles.
Enlaces Externos

Enlaces a páginas web externas que proporcionan más ideas de aplicación, documentos/hojas de datos o librerías de software
- [RCSwitch - Librería de Arduino para controlar enchufes de alimentación remotos de 433Mhz](http://code.google.com/p/rc-switch)

## Soporte Técnico y Discusión de Productos
si tienes algún problema técnico. envía el problema a nuestro [foro](http://forum.seeedstudio.com/). 
¡Gracias por elegir nuestros productos! Estamos aquí para proporcionarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>