---
title: Kits de interruptor de relé remoto de 315Mhz - 2 canales
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/315Mhz_remote_relay_switch_kits-2_channels/
slug: /es/315Mhz_remote_relay_switch_kits-2_channels
last_update:
  date: 02/03/2022
  author: gunengyu
---

![](http://bz.seeedstudio.com/depot/images/P2130781.jpg)

Este interruptor remoto te permite controlar remotamente cualquier dispositivo de 12 Voltios DC. Perfecto para controlar cualquier dispositivo de 12V como Luces, Ventiladores, Iluminación de Paisajismo y más. Este kit fácil de cablear es perfecto para cualquier persona con conocimientos básicos de cableado eléctrico, y puede ser fácilmente cableado a muchas aplicaciones de 12V. Para los Modders de PC, el resultado final del kit de Control Remoto 12VDC es verdaderamente impresionante y seguramente causará admiración en las multitudes. Para los aficionados al bricolaje, el kit dará algún efecto mágico a tus proyectos.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Skeleton-Box-p-1407.html)

##   Especificaciones
---
*   Frecuencia: 315Mhz.

*   Modulación: ASK

*   Voltaje de Trabajo: 12VDC

*   Sensibilidad del Receptor: -105dbm

*   Distancia de Emisión: 100m en terreno abierto

*   Tamaño: 68mm*47mm*12mm

*   *Por defecto receptor de 315Mhz, intercambiable con receptor de 433Mhz.

##   Definición de pines y especificaciones
---
Cada Relé posee un grupo de 3 pines:

*   **A** - Normalmente Cerrado, Abierto Cuando el Relé se activa

*   **B** -  Nodo Común

*   **C** - Normalmente Abierto, Cerrado Cuando el Relé se activa

##   Uso
---

###   Codificación y Decodificación

El enlace popular es así: MCU -> Codificador -> Transmisor ------ Receptor -> Decodificador -> MCU,

PT2262(Codificador) y PT2272(Decodificador) son opcionales, su existencia es para

1)evitar confusión cuando múltiples enlaces RF están en rango

2) aislar perturbaciones. Puedes integrar el trabajo de codificación y decodificación a los MCUs en ambos lados. Siempre que no haya dispositivos de 315Mhz alrededor, puedes usarlo como conexión directa por cable.

Para configurar un enlace PT2272 y PT2262, necesitarías configurar PT2262 con un poco de soldadura:

![](http://bz.seeedstudio.com/depot/images/product/RFReceiverDec.jpg)

Y configurar los pines correspondientes en PT2272:

![](http://bz.seeedstudio.com/depot/images/product/RFTransmitEnc.jpg)

###  Modos de Operación del Relé

El receptor tiene tres modos que controlan cómo funcionan las salidas del relé. Estos modos son seleccionables por el usuario usando el jumper de 3 pines en el receptor.

**Momentáneo:**
Mueve la posición del interruptor a "M" para configurar el relé(s) seleccionado en modo momentáneo. En modo momentáneo, el relé(s) seleccionado cambiará su estado y lo mantendrá durante la duración de la transmisión recibida. Una vez que la transmisión termine, el relé cambiará de vuelta a su estado original.

**Flip-Flop:**
Remueve el shunt para configurar el relé(s) seleccionado en modo Flip-Flop. En modo Flip-Flop, el relé(s) seleccionado cambiará su estado y lo mantendrá hasta que se reciba una transmisión coincidente. Cada vez que se reciba una transmisión el relé cambiará su estado y lo mantendrá hasta que se reciba otra transmisión.

**Enganche:**
Mueve la posición del interruptor a "L" para configurar el relé(s) seleccionado en modo de Enganche. En modo de enganche, cuando el relé seleccionado es activado por el transmisor, ese relé cambiará su estado y lo mantendrá hasta que la alimentación al receptor sea removida o interrumpida.

Por favor consulta el dibujo simple para el enlace RF de 315Mhz. En el lado del transmisor, necesitarías suministrar 3-5VDC al pin "+12V", (**Precaución**: los 12v son un error de serigrafía en el PCB, nunca le des más de 5V), y configurar "TE" en alto(5V) para habilitar la transmisión. En el lado del receptor, puedes usar +5VDC(también conocido como VCC) para alimentación y leer la salida desde D0~D3. "TV" indicará cuando haya datos cambiados entrantes.

![](http://bz.seeedstudio.com/depot/images/product/315MhzTransmitter.gif)


##   Recursos
---
*   [Manual de Cómo usar](https://www.seeedstudio.com/depot/datasheet/How%20to%20Use%20315MHz%20Remote%20Relay%20Kits.pdf)

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