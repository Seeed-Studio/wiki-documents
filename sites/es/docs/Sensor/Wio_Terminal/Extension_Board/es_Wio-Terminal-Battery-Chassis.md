---
description: Chasis de Batería para Wio Terminal
title: Chasis de Batería para Wio Terminal
keywords:
- Wio_terminal Extension_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-Battery-Chassis
last_update:
  date: 1/30/2023
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/45.png)

:::note
1. Esta versión del chasis de batería para Wio Terminal no puede apagar la energía completamente (sin influencia en el uso).
2. La corriente de carga puede llegar hasta 1.5A, lo que puede reducir la vida útil de la batería o causar otros problemas.
Estamos optimizando el diseño de la nueva versión (la fecha estimada de lanzamiento aún no está disponible), y recomendamos la nueva versión si eres principiante.
*Por favor contáctanos (techsupport@seeed.cc) para soporte técnico o intercambio si encuentras algún problema durante el uso de esta versión.
*Por favor NO dejes que los pines toquen otros objetos cuando la energía esté encendida.
:::

El Chasis de Batería para Wio Terminal es una placa de extensión imprescindible para la [Placa de Desarrollo Wio-Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) ya que proporciona una fuente de energía externa para Wio Terminal para mejorar su portabilidad y compacidad. Tiene **una batería de polímero de litio recargable de 650mAH, 4 Puertos Grove Analógicos/Digitales, 1 Puerto Grove I2C, y 1 Puerto Grove UART, así como la carcasa ABS para estética y protección.** ¡También hay el mismo GPIO compatible con 40 pines de Raspberry Pi en la parte posterior del Chasis de Batería para Wio Terminal para más complementos!

Con [Placa de Desarrollo Wio-Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) + Chasis de Batería para Wio Terminal, puedes construir los proyectos IoT más potentes y compactos con facilidad. ¡Con los Puertos Grove extendidos, puedes disfrutar las características plug and play del [Ecosistema Grove](https://www.seeedstudio.com/category/Grove-c-1003.html)!

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-650mAh-p-4756.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong></a>
</div>

## Características

- Batería de Polímero de Litio Recargable Integrada de 650mAh
- Carga USB Tipo-C
- Protección contra sobrecorriente
- Modo hiccup/Protección Hiccup
- 4 x Puerto Grove Analógico/Digital
- 1 x Puerto Grove I2C
- 1 x Puerto Grove UART
- ¡Los imanes están ocultos dentro de la carcasa para que pueda pegarse en la Pizarra!

## Especificaciones

- El Chasis de Batería para Wio Terminal se alimenta ya sea por la interfaz USB Tipo-C o la batería interna. La corriente máxima de entrada del USB Tipo-C es 2A, y el rango de voltaje de entrada es **4.75V ~ 5.25V.**

- La batería integrada es una batería de polímero de litio recargable, con una capacidad de 650mAh. El voltaje de salida de la batería es 3.7V, con un voltaje de carga de batería de 4.2V.
La batería solo puede cargarse a través de la interfaz USB Tipo-C, y no puede cargarse a través del conector hembra o la interfaz Grove.

- La corriente en espera del Chasis de Batería para Wio Terminal es menor a 300uA.

- El Chasis de Batería para Wio Terminal tiene protección contra sobrecorriente cuando se alimenta a través de la interfaz USB Tipo-C, y el umbral de corriente de la protección contra sobrecorriente es 2.5A.

- Cuando el Chasis de Batería para Wio Terminal está en cortocircuito en modo alimentado por batería, entrará en modo hiccup. Después de que se elimine el cortocircuito, automáticamente regresará al modo normal de suministro de energía.

## Descripción General del Hardware

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/WT-battery-front.jpg" /></div>

## Precauciones

- El Chasis de Batería para Wio Terminal no puede generar voltaje de 3.3V por sí mismo, solo puede generar voltaje de 5V. Para generar 3.3V debe usarse con Wio Terminal.
- Cuando el Chasis de Batería para Wio Terminal cambia del modo de carga de batería al modo de energía de batería, habrá un tiempo de caída de voltaje de 1.2s.
- Por defecto, el Chasis de Batería para Wio Terminal se alimenta por la batería cuando no está conectado al USB Tipo-C. Después de conectar el USB Tipo-C, automáticamente cambia al USB Tipo-C para el suministro de energía.
- Cuando el Chasis de Batería para Wio Terminal está conectado al USB Tipo-C, suministrará energía tanto a la batería como al pin RPI_5V en el conector. En este momento, la batería no suministrará energía. Si la batería de litio no está completamente cargada, dejará de cargar después de cargar al 100%.

## FAQ

Corriente de Carga:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/sch.png" /></div>

- Esta resistencia se cambia a **680kΩ/1%** para limitar la corriente de carga a **450mA**.

## Visor de Esquemáticos en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/res/Wio%20Terminal%20Chassis%20-%20Battery_SCH.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Archivo de Diseño de Esquemáticos del Chasis de Batería para Wio Terminal](https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/res/Wio%20Terminal%20Chassis%20-%20Battery_SCH.zip)

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