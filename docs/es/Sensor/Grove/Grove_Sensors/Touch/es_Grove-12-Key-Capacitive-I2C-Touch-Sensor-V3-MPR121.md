---
description: Grove - Sensor Táctil Capacitivo I2C de 12 Teclas V3 (MPR121)
title: Grove - Sensor Táctil Capacitivo I2C de 12 Teclas V3 (MPR121)
keywords:
- Grove Grove_Sensors Touch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-12-Key-Capacitive-I2C-Touch-Sensor-V3-MPR121
last_update:
  date: 1/19/2023
  author: jianjing Huang
---


<div align="center"><img width ="{400}" src="https://files.seeedstudio.com/wiki/Grove%20-%2012%20Key%20Capacitive%20I2C%20Touch%20Sensor%20V3%20(MPR121)/touch_sensor_V3.png"/></div>

Este sensor es una versión mejorada del Grove - Sensor Táctil Capacitivo I2C de 12 Teclas V2 (MPR121), añade dos puertos GND adicionales en la cabecera para ser más estable, mientras tanto, los pines frontales están espaciados más ampliamente para evitar un cortocircuito causado por las líneas que accidentalmente se toquen.

El **Grove - Sensor Táctil Capacitivo I2C de 12 Teclas V3 (MPR121)** es un sensor táctil capacitivo de proximidad multicanal. Es un módulo 3 en 1 con las siguientes características: Detección de Capacitancia, Detección Táctil y Detección de Proximidad.

**Detección de Capacitancia**: Este módulo utiliza un esquema de detección de capacitancia de corriente DC constante. Puede medir capacitancias que van desde 10 pF hasta más de 2000 pF con una resolución de hasta 0.01 pF.

**Detección Táctil**: Una vez que se adquieren los datos de capacitancia del electrodo, el estado de toque/liberación del electrodo se determina comparándolo con el valor de línea base de capacitancia.

**Detección de Proximidad**: Una nueva característica del MPR121 es el sistema de detección de proximidad cercana. Esto significa que todos los electrodos del sistema pueden ser
sumados juntos para crear un solo electrodo grande.

Basado en el Freescale MPR121, este sensor tiene 12 electrodos completamente independientes con autoconfiguración incorporada. Gracias a la interfaz I2C, puedes detectar todas las señales de los 12 electrodos con solo un puerto Grove, y la dirección I2C es configurable por hardware, desde 0X5B hasta 0X5D. Esto también hace posible que múltiples
**Grove - Sensor Táctil Capacitivo I2C de 12 Teclas V3 (MPR121)** se usen juntos para expansiones de canales en un solo sistema, puedes construir un sistema táctil que contenga máx. 36 electrodos.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/CPq4VSAXBgI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-12-Key-Capacitive-I2C-Touch-Sensor-V3-MPR121-p-4694.html
" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Cambio de Versión

|Elemento| Grove - Sensor Táctil Capacitivo I2C de 12 Teclas V2 | Grove - Sensor Táctil I2C |
|---|---|---|
|Chip Principal|MPR121|MPR121|
|Dirección I2C|cambiable(0X5B ~ 0X5D)|no modificable(0X5A)|
|Sensor Táctil|x|√|
|Interfaz de Entrada|interfaz de cocodrilo|Cabecera Hembra DIP 2Pin|
|Rendimiento de Costo|Alto|Bajo|
|Fecha de Lanzamiento|11 de Septiembre-2018|31 de Octubre-2015|

## Características

- ADC interno de 10 bits
- Autocalibración independiente integrada para cada entrada de electrodo
- Electrodos completamente independientes con autoconfiguración incorporada
- Interfaz I2C, con IRQ, salida de interrupción para avisar cambios de estado del electrodo
- Dirección I2C configurable por hardware
- 12 electrodos/entradas de detección de capacitancia en las cuales 8 son multifuncionales para manejo de LED y GPIO
- Autoconfiguración de corriente de carga y tiempo de carga para cada entrada de electrodo
- Umbrales de activación y liberación de toque separados para cada electrodo, proporcionando histéresis e independencia del electrodo
- Añadir dos pines GND más y expandir la separación de pines para manejo seguro

## Aplicaciones

- Periféricos de PC
- Reproductores MP3
- Controles Remotos
- Teléfonos Móviles
- Controles de Iluminación

## Descripción General del Hardware

### Mapa de Pines

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Grove%20-%2012%20Key%20Capacitive%20I2C%20Touch%20Sensor%20V3%20(MPR121)/Touch-sensor-V3-with-GND.png"/></div>

<div align="center"><img width ="{700}" src="https://files.seeedstudio.com/wiki/Grove%20-%2012%20Key%20Capacitive%20I2C%20Touch%20Sensor%20V3%20(MPR121)/V3-data.png"/></div>

:::tip
Para los CH0 ~ CH11, una vez que se adquieren los datos de capacitancia del electrodo, el estado de toque/liberación del electrodo se determina comparándolo con el valor de línea base de capacitancia. Y puedes establecer el valor de línea base para cada canal por separado. Los Pin12 ~ Pin19 son multifuncionales, lo que significa que puedes configurarlos como GPIO o controlador de LED, para más detalles, por favor consulta la nota de aplicación de freescale [AN3894](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/res/AN3894.pdf).

:::

## Plataformas Soportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg)  |

:::caution
Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Proyecto

Este es el video de introducción de este producto, demostraciones simples, puedes intentarlo.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Ds7kBVdeY4U?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

**Piano de Hojas**: Hicimos un piano usando un sensor táctil, así como hojas para las teclas del piano.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/leaf-piano-5261a6/embed' width='350'></iframe>

**Jugar con Scratch**: ¿Cómo jugar un juego de scratch con un Sensor Táctil?

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/play-mario-using-new-grove-touch-sensor-b3f9fc/embed' width='350'></iframe>

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
