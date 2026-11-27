---
description: Uso de XIAO RP2350 en MicroBlocks.
title: XIAO RP2350 con MicroBlocks
image: https://files.seeedstudio.com/wiki/microblocks/microblocks.png
slug: /xiao_rp2350_microblocks
last_update:
  date: 09/09/2025
  author: MicroBlocks
createdAt: '2025-09-09'
updatedAt: '2025-09-25'
url: https://wiki.seeedstudio.com/es/xiao_rp2350_microblocks/
---

## XIAO RP2350 con MicroBlocks

### MicroBlocks

MicroBlocks es un lenguaje basado en bloques que facilita a los principiantes (de 9 años a adultos) programar microcontroladores. A pesar de su aparente simplicidad, MicroBlocks es un potente lenguaje de programación con mejor rendimiento que MicroPython; capacidad para controlar pines GPIO e interconectarse con periféricos mediante I2C, SPI y serie; y casi 200 bibliotecas de extensión. De hecho, algunos diseñadores de hardware prefieren MicroBlocks para la creación rápida de prototipos y pruebas debido a su rápido ciclo de desarrollo interactivo.

### Distribución de pines y características de hardware de XIAO RP2350

<div className="interactive_pinout_container">
  <a className="interactive_pinout_btn" href="https://www.seeedstudio.com/xiao-series-page/playground/pinout/?board=rp2350" target="_blank" rel="noopener noreferrer">Explora la distribución de pines interactiva</a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-rp2350-pinout.png" style={{width:600, height:'auto'}}/></div><br />

Los pines 0..18 son pines GPIO. (**Nota: los GPIO 11-18 son pads en la parte posterior de la placa.**)
Los pines 0..2 pueden ser entradas analógicas. Esta placa tiene un LED de usuario amarillo en el pin 19 (invertido)
y un único LED RGB (NeoPixel) en el pin 20.

### Instalación del firmware de MicroBlocks

Para entrar en modo bootloader, mantén pulsado el pequeño botón B (boot) mientras haces clic en el botón R (reset). Aparecerá una unidad USB virtual llamada **RP2350**.

Descarga el [archivo de firmware](https://microblocks.fun/downloads/latest/vm/vm_xiao_rp2350.uf2),
desde la [carpeta vm](https://microblocks.fun/downloads/latest/vm)
y luego arrastra el archivo a la unidad USB virtual.

El firmware se instalará y, tras unos segundos, la unidad USB virtual desaparecerá.
Puedes ignorar cualquier advertencia de que el disco no se expulsó correctamente.

### Conectar la placa a MicroBlocks

Conecta la placa a tu ordenador con un cable USB de datos (**no** un cable solo de alimentación).

Ejecuta el [editor MicroBlocks](https://microblocks.fun/run/microblocks.html) en un navegador Chrome o Edge.
Haz clic en el botón **connect** (icono de enchufe):

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-button.png" style={{width:200, height:'auto'}}/></div>

Selecciona **connect (USB)** en el menú:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-menu.png" style={{width:200, height:'auto'}}/></div>

Selecciona tu placa en el cuadro de diálogo y haz clic en el botón **connect**:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-dialog-rp2350.png" style={{width:200, height:'auto'}}/></div>

Aparecerán un círculo verde y el nombre de la placa cuando la placa esté conectada:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connected-rp2350.png" style={{width:200, height:'auto'}}/></div>

### Programar en MicroBlocks

MicroBlocks es un entorno de programación **en vivo**, por lo que puedes probar mientras programas.
Haz clic en bloques y scripts para ejecutarlos.
Arrastra bloques al panel de scripts y ensámblalos para crear scripts.

Tu código se almacena en memoria flash persistente y puede ejecutarse incluso cuando la placa
no está conectada al editor MicroBlocks.
Los scripts bajo un bloque **when started** se ejecutan cuando la placa se alimenta.

MicroBlocks admite concurrencia. Hasta diez scripts pueden ejecutarse al mismo tiempo.

Además de sus numerosos bloques integrados, MicroBlocks tiene casi 200 bibliotecas
que admiten funciones y periféricos adicionales.
Haz clic en el botón **Add Library** para añadir bibliotecas.

### Ejemplos

Este script hará parpadear el LED de usuario amarillo:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-blink.png" style={{width:200, height:'auto'}}/></div>

Este script hará que el NeoPixel RGB cambie de color:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-rp2350-neopixel.png" style={{width:200, height:'auto'}}/></div>

La [referencia de bloques](https://wiki.microblocks.fun/en/reference_manual)
incluye muchos ejemplos adicionales.

## Agradecimientos especiales

Agradecimientos especiales a John de MicroBlocks por escribir el artículo.

### Recursos de MicroBlocks

- [Sitio web](https://microblocks.fun)

- [Guía del usuario](https://wiki.microblocks.fun/en/ide)

- [Referencia de bloques](https://wiki.microblocks.fun/en/reference_manual)

- [Referencia de bibliotecas](https://wiki.microblocks.fun/en/libraries)

- [Guías de aprendizaje](https://learn.microblocks.fun)
