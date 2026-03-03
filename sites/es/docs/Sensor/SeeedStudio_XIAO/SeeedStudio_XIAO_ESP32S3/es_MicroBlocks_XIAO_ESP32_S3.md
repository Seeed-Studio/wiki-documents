---
description: Usando XIAO ESP32-S3 en MicroBlocks.
title: MicroBlocks
image: https://files.seeedstudio.com/wiki/microblocks/microblocks.webp
slug: /es/xiao_esp32s3_microblocks
last_update:
  date: 09/09/2025
  author: MicroBlocks
---

# XIAO ESP32-S3 con MicroBlocks

## MicroBlocks

MicroBlocks es un lenguaje de bloques que facilita a los principiantes (de 9 años a adultos) programar microcontroladores. Sin embargo, a pesar de su aparente simplicidad, MicroBlocks es un lenguaje de programación potente con mejor rendimiento que MicroPython; la capacidad de controlar pines GPIO e interfaz con periféricos a través de I2C, SPI y serial; y casi 200 librerías de extensión. De hecho, algunos diseñadores de hardware prefieren MicroBlocks para prototipado rápido y pruebas debido a su ciclo de desarrollo rápido e interactivo.

## Pinout y Características de Hardware del XIAO ESP32S3

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-esp32-s3-sense-overview.png" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-esp32s3-sense-pinout.jpg" style={{width:600, height:'auto'}}/></div>

Esta placa ofrece conectividad Wi-Fi y BLE a través de una antena externa (incluida).

La placa tiene 11 pines GPIO (pines 0..10).
La versión Sense tiene dos pines GPIO adicionales en la placa de la cámara (pines 11..12).
Los pines 0..5 y 8..10 pueden ser entradas analógicas.

El pin 13 es el LED de usuario amarillo (invertido).

La versión Sense incluye una placa de extensión con una cámara (ya sea una cámara OV2640 con resolución de 1600x1200 o una OV3660 con 2048x1536) y un micrófono digital.

**Nota: El soporte para cámara aún no ha sido implementado en MicroBlocks pero puede ser añadido en el futuro.**

## Instalando el Firmware de MicroBlocks

El firmware de MicroBlocks para esta placa puede ser instalado directamente desde el editor de MicroBlocks.

Conecta la placa a tu computadora con un cable USB de datos (**no** un cable solo de alimentación).

Ejecuta el [editor de MicroBlocks](https://microblocks.fun/run/microblocks.html) en un navegador Chrome o Edge.

Habilita el "modo avanzado" en el menú de configuración:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/set-advanced-mode.png" style={{width:400, height:'auto'}}/></div>

Selecciona **install ESP firmware from microblocks.fun** del menú de configuración expandido:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/install-esp-firmware.png" style={{width:400, height:'auto'}}/></div>

Selecciona **xiao esp32 s3**:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/install-s3.png" style={{width:200, height:'auto'}}/></div>

Cuando se te solicite, usa el botón "Connect" (icono de enchufe) para abrir una conexión USB a la placa. Cuando comience el proceso de instalación del firmware, aparecerá un indicador de progreso:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/download-progress.png" style={{width:200, height:'auto'}}/></div>

La instalación del firmware toma de 30 a 60 segundos. No cambies de pestaña del navegador hasta que esté completa.

Una vez que el firmware esté instalado, puedes conectar la placa a MicroBlocks y comenzar a programar!

## Modo Bootloader

Usualmente no es necesario entrar manualmente al modo bootloader cuando se instala el firmware de MicroBlocks en placas ESP32.

Para entrar al modo bootloader, si es necesario, mantén presionado el botón B (boot) mientras presionas y sueltas el botón R (reset).
También puedes conectar la placa a tu computadora mientras mantienes presionado el botón B.

**Los pequeños botones B y R a cada lado del conector USB son complicados;
puede que necesites usar tu uña o una herramienta pequeña para presionarlos.**

## Conectando la placa a MicroBlocks

Conecta la placa a tu computadora con un cable USB de datos (**no** un cable solo de alimentación).

Ejecuta el [editor de MicroBlocks](https://microblocks.fun/run/microblocks.html) en un navegador Chrome o Edge.
Haz clic en el botón **connect** (icono de enchufe):

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-button.png" style={{width:200, height:'auto'}}/></div>

Selecciona **connect (USB)** del menú:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-menu.png" style={{width:200, height:'auto'}}/></div>

**Nota:** También puedes conectarte de forma inalámbrica seleccionando **connect (BLE)** en el menú de conexión.

Selecciona tu placa del diálogo y haz clic en el botón **connect**:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-dialog-esp.png" style={{width:400, height:'auto'}}/></div>

Un círculo verde y el nombre de la placa aparecerán cuando la placa esté conectada:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connected-esp32s3.png" style={{width:200, height:'auto'}}/></div>

## Programando en MicroBlocks

MicroBlocks es un entorno de programación **en vivo** por lo que puedes probar mientras programas.
Haz clic en bloques y scripts para ejecutarlos.
Arrastra bloques al panel de scripting y ensámblalos para crear scripts.

Tu código se almacena en memoria flash persistente y puede ejecutarse incluso cuando la placa no está conectada al editor de MicroBlocks.
Los scripts bajo un bloque **when started** se ejecutan cuando la placa se enciende.

MicroBlocks soporta concurrencia. Hasta diez scripts pueden ejecutarse al mismo tiempo.

Además de sus muchos bloques integrados, MicroBlocks tiene casi 200 librerías
que soportan características adicionales y periféricos.
Haz clic en el botón **Add Library** para añadir librerías.

## Ejemplo

Este script hará parpadear el LED de usuario amarillo:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-blink.png" style={{width:200, height:'auto'}}/></div>

La [Referencia de Bloques](https://wiki.microblocks.fun/en/reference_manual) incluye muchos ejemplos adicionales.

## Demostración del Proyecto

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Vjjg3Hfl_UA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div><br/>
Para una demostración más completa, el maker [Zeller](https://www.hackster.io/Zeller) ha creado un Reproductor de Estados de Ánimo usando el XIAO ESP32S3, la Placa de Expansión XIAO, junto con accesorios Grove Speaker y Grove Button. Con MicroBlocks, puedes crear tus patrones y música favoritos sin escribir código complejo. Un tutorial paso a paso con instrucciones detalladas se puede encontrar en [Hackster](https://www.hackster.io/Zeller/mood-player-2426ef).

## Agradecimientos Especiales

Agradecimientos especiales a John de MicroBlocks por escribir el artículo.

## Recursos de MicroBlocks

- [Sitio Web](https://microblocks.fun)

- [Guía del Usuario](https://wiki.microblocks.fun/en/ide)

- [Referencia de Bloques](https://wiki.microblocks.fun/en/reference_manual)

- [Referencia de Librerías](https://wiki.microblocks.fun/en/libraries)

- [Guías de Aprendizaje](https://learn.microblocks.fun)
