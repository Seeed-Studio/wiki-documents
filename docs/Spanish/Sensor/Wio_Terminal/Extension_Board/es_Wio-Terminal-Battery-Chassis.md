---
description: Wio Terminal Battery Chassis
title: Chasis de Batería para Wio Terminal
keywords:
- Wio_terminal Extension_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-Battery-Chassis
last_update:
  date: 07/27/2025
  author: Guillermo
---

![](https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/45.png)

El Chasis de Batería para Wio Terminal es una placa de expansión imprescindible para la placa de desarrollo [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) ya que proporciona una fuente de energía externa para mejorar la portabilidad y compactibilidad del Wio Terminal. Cuenta con **una batería recargable de polímero de litio de 650mAh, 4 puertos Grove analógicos/digitales, 1 puerto Grove I2C, 1 puerto Grove UART, y una carcasa ABS para protección y estética.** Además, tiene un conector GPIO compatible con Raspberry Pi de 40 pines en la parte trasera para más expansiones.

Con el [Wio Terminal Dev Board](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) + el Chasis de Batería para Wio Terminal, puedes construir proyectos IoT compactos y potentes fácilmente. Gracias a los puertos Grove extendidos, podrás disfrutar de las funcionalidades plug and play del [ecosistema Grove](https://www.seeedstudio.com/category/Grove-c-1003.html).

<div class="get_one_now_container" style={{ textAlign: "center"}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-650mAh-p-4756.html" target="_blank">
    <strong><span><font color="FFFFFF" size="4">¡Consíguelo ahora!</font></span></strong>
  </a>
</div>

## Características

* Batería recargable de polímero de litio integrada de 650mAh
* Carga por USB Tipo-C
* Protección contra sobrecorriente
* Modo Hiccup / Protección Hiccup
* 4 puertos Grove analógicos/digitales
* 1 puerto Grove I2C
* 1 puerto Grove UART
* Imán oculto dentro de la carcasa para pegarlo en pizarras blancas

## Especificaciones

* El Chasis de Batería Wio Terminal se alimenta por USB Tipo-C o la batería interna. La corriente máxima de entrada por USB Tipo-C es 2A, con un rango de voltaje de entrada de **4.75V \~ 5.25V**.

* La batería interna es de polímero de litio recargable, con capacidad de 650mAh. El voltaje de salida de la batería es de 3.7V y el voltaje de carga es 4.2V.
  La batería sólo se puede cargar vía USB Tipo-C, no es posible cargarla por el conector hembra o los puertos Grove.

* La corriente en modo espera es menor a 300uA.

* El chasis cuenta con protección contra sobrecorriente en modo USB Tipo-C, con un umbral de 2.5A.

* En modo batería, si ocurre un cortocircuito, el dispositivo entra en modo hiccup. Al quitar el cortocircuito, vuelve automáticamente al modo normal.

## Vista de Hardware

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/WT-battery-front.jpg" /></div>

## Precauciones

* El Chasis de Batería no puede entregar 3.3V por sí solo, sólo entrega 5V. Para salida de 3.3V debe usarse con el Wio Terminal.
* Al cambiar de modo carga a modo batería, hay una caída de voltaje de aproximadamente 1.2 segundos.
* Por defecto, el chasis se alimenta con la batería si no está conectado a USB Tipo-C. Al conectar USB Tipo-C cambia automáticamente la alimentación a éste.
* Cuando está conectado al USB Tipo-C, alimenta tanto la batería como el pin RPI\_5V del conector, y la batería no suministra energía. La carga se detiene al 100% de carga de la batería.

## Preguntas Frecuentes (FAQ)

Corriente de carga:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/sch.png" /></div>

* La resistencia ha sido cambiada a **680kΩ/1%** para limitar la corriente de carga a **450mA**.

## Recursos

* **[ZIP]** [Archivo de diseño esquemático del Chasis de Batería Wio Terminal](https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/res/Wio%20Terminal%20Chassis%20-%20Battery_SCH.zip)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos disponibles para ofrecerte soporte y asegurar que tu experiencia sea lo más fluida posible. Contamos con varios canales de comunicación para atender distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
