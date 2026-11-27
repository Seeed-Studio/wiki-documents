---
description: Uso de XIAO ESP32-S3 en MicroBlocks.
title: MicroBlocks
image: https://files.seeedstudio.com/wiki/microblocks/microblocks.webp
slug: /xiao_esp32s3_microblocks
last_update:
  date: 09/09/2025
  author: MicroBlocks
createdAt: '2025-09-09'
updatedAt: '2025-11-28'
url: https://wiki.seeedstudio.com/es/xiao_esp32s3_microblocks/
---

# XIAO ESP32-S3 con MicroBlocks

## MicroBlocks

MicroBlocks es un lenguaje basado en bloques que facilita a los principiantes (de 9 años hasta adultos) programar microcontroladores. Sin embargo, a pesar de su aparente simplicidad, MicroBlocks es un potente lenguaje de programación con mejor rendimiento que MicroPython; la capacidad de controlar pines GPIO e interconectarse con periféricos mediante I2C, SPI y serie; y casi 200 bibliotecas de extensión. De hecho, algunos diseñadores de hardware prefieren MicroBlocks para la creación rápida de prototipos y pruebas debido a su rápido ciclo de desarrollo interactivo.

## Distribución de pines y características de hardware de XIAO ESP32S3

<div className="interactive_pinout_container">
  <a className="interactive_pinout_btn" href="https://www.seeedstudio.com/xiao-series-page/playground/pinout/?board=s3sense" target="_blank" rel="noopener noreferrer">Explora la distribución de pines interactiva</a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-esp32-s3-sense-overview.png" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-esp32s3-sense-pinout.jpg" style={{width:600, height:'auto'}}/></div>

Esta placa ofrece conectividad Wi-Fi y BLE mediante una antena externa (incluida).

La placa tiene 11 pines GPIO (pines 0..10).
La versión Sense tiene dos pines GPIO adicionales en la placa de la cámara (pines 11..12).
Los pines 0..5 y 8..10 pueden ser entradas analógicas.

El pin 13 es el LED amarillo de usuario (invertido).

La versión Sense incluye una placa de extensión con una cámara (ya sea una cámara OV2640 con resolución de 1600x1200 o una OV3660 con resolución de 2048x1536) y un micrófono digital.

**Nota: El soporte para la cámara aún no se ha implementado en MicroBlocks, pero podría añadirse en el futuro.**

## Instalación del firmware de MicroBlocks

El firmware de MicroBlocks para esta placa se puede instalar directamente desde el editor de MicroBlocks.

Conecta la placa a tu ordenador con un cable USB de datos (**no** un cable solo de alimentación).

Ejecuta el [editor MicroBlocks](https://microblocks.fun/run/microblocks.html) en un navegador Chrome o Edge.

Activa el "advanced mode" en el menú del engranaje:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/set-advanced-mode.png" style={{width:400, height:'auto'}}/></div>

Selecciona **install ESP firmware from microblocks.fun** en el menú ampliado del engranaje:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/install-esp-firmware.png" style={{width:400, height:'auto'}}/></div>

Selecciona **xiao esp32 s3**:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/install-s3.png" style={{width:200, height:'auto'}}/></div>

Cuando se te pida, usa el botón "Connect" (icono de enchufe) para abrir una conexión USB con la placa. Cuando comience el proceso de instalación del firmware, aparecerá un indicador de progreso:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/download-progress.png" style={{width:200, height:'auto'}}/></div>

La instalación del firmware tarda entre 30 y 60 segundos. No cambies de pestaña del navegador hasta que se complete.

Una vez instalado el firmware, ¡puedes conectar la placa a MicroBlocks y empezar a programar!

## Modo bootloader

Normalmente no es necesario entrar manualmente en el modo bootloader al instalar el firmware de MicroBlocks en placas ESP32.

Para entrar en modo bootloader, si es necesario, mantén pulsado el botón B (boot) mientras presionas y sueltas el botón R (reset).
También puedes conectar la placa a tu ordenador mientras mantienes pulsado el botón B.

**Los diminutos botones B y R a ambos lados del conector USB son difíciles de pulsar;
puede que necesites usar la uña o una pequeña herramienta para presionarlos.**

## Conectar la placa a MicroBlocks

Conecta la placa a tu ordenador con un cable USB de datos (**no** un cable solo de alimentación).

Ejecuta el [editor MicroBlocks](https://microblocks.fun/run/microblocks.html) en un navegador Chrome o Edge.
Haz clic en el botón **connect** (icono de enchufe):

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-button.png" style={{width:200, height:'auto'}}/></div>

Selecciona **connect (USB)** en el menú:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-menu.png" style={{width:200, height:'auto'}}/></div>

**Nota:** También puedes conectar de forma inalámbrica seleccionando **connect (BLE)** en el menú de conexión.

Selecciona tu placa en el cuadro de diálogo y haz clic en el botón **connect**:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-dialog-esp.png" style={{width:400, height:'auto'}}/></div>

Aparecerá un círculo verde y el nombre de la placa cuando la placa esté conectada:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connected-esp32s3.png" style={{width:200, height:'auto'}}/></div>

## Programar en MicroBlocks

MicroBlocks es un entorno de programación **en vivo**, por lo que puedes probar mientras programas.
Haz clic en bloques y scripts para ejecutarlos.
Arrastra bloques al panel de scripts y ensámblalos para crear scripts.

Tu código se almacena en la memoria flash persistente y puede ejecutarse incluso cuando la placa no está conectada al editor MicroBlocks.
Los scripts bajo un bloque **when started** se ejecutan cuando la placa se alimenta.

MicroBlocks admite concurrencia. Hasta diez scripts pueden ejecutarse al mismo tiempo.

Además de sus numerosos bloques integrados, MicroBlocks tiene casi 200 bibliotecas
que admiten funciones y periféricos adicionales.
Haz clic en el botón **Add Library** para añadir bibliotecas.

## Ejemplo

Este script hará parpadear el LED amarillo de usuario:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-blink.png" style={{width:200, height:'auto'}}/></div>

La [Blocks Reference](https://wiki.microblocks.fun/en/reference_manual) incluye muchos ejemplos adicionales.

## Demostración de proyecto

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Vjjg3Hfl_UA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div><br/>
Para una demostración más completa, el maker [Zeller](https://www.hackster.io/Zeller) ha creado un Mood Player usando la XIAO ESP32S3, la XIAO Expansion Board, junto con los accesorios Grove Speaker y Grove Button. Con MicroBlocks, puedes crear tus patrones y música favoritos sin escribir código complejo. Puedes encontrar un tutorial paso a paso con instrucciones detalladas en [Hackster](https://www.hackster.io/Zeller/mood-player-2426ef).

## Agradecimientos especiales

Agradecimientos especiales a John de MicroBlocks por escribir el artículo.

## Recursos de MicroBlocks

- [Website](https://microblocks.fun)

- [User Guide](https://wiki.microblocks.fun/en/ide)

- [Blocks Reference](https://wiki.microblocks.fun/en/reference_manual)

- [Libraries Reference](https://wiki.microblocks.fun/en/libraries)

- [Learning Guides](https://learn.microblocks.fun)
