---
description: Usando XIAO RP2040 en MicroBlocks.
title: MicroBlocks
image: https://files.seeedstudio.com/wiki/microblocks/microblocks.png
slug: /es/xiao_rp2040_microblocks
last_update:
  date: 09/09/2025
  author: MicroBlocks
---

# XIAO RP2040 con MicroBlocks

## MicroBlocks

MicroBlocks es un lenguaje de bloques que facilita a los principiantes (de 9 años a adultos) programar microcontroladores. Sin embargo, a pesar de su aparente simplicidad, MicroBlocks es un lenguaje de programación potente con mejor rendimiento que MicroPython; la capacidad de controlar pines GPIO e interfaz con periféricos a través de I2C, SPI y serial; y casi 200 librerías de extensión. De hecho, algunos diseñadores de hardware prefieren MicroBlocks para prototipado rápido y pruebas debido a su ciclo de desarrollo rápido e interactivo.

### Pinout y Características de Hardware del XIAO RP2040

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-rp2040-overview.jpg" style={{width:600, height:'auto'}}/></div><br />

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-rp2040-pinout.png" style={{width:700, height:'auto'}}/></div><br />

Esta placa tiene 11 pines GPIO (pines 0..10). Los pines 0..3 pueden ser entradas analógicas.
También tiene tres LEDs pequeños: rojo (pin 11, el LED del usuario), verde (pin 12) y azul (pin 13).
Todos los LEDs están invertidos: establece el pin asociado en LOW para encender el LED.

Esta placa también tiene un solo LED RGB (NeoPixel) en el pin 14.

## Instalando el Firmware de MicroBlocks

Para entrar en modo bootloader, mantén presionado el botón B (boot) mientras haces clic en el botón R (reset).
Los tres LEDs se encenderán y aparecerá una unidad USB virtual llamada **RPI-RP2**.

Descarga el [archivo de firmware](https://microblocks.fun/downloads/latest/vm/vm_xiao_rp2040.uf2),
desde la [carpeta vm](https://microblocks.fun/downloads/latest/vm)
luego arrastra el archivo a la unidad USB virtual.

El firmware se instalará y, después de unos segundos, la unidad USB virtual desaparecerá.
Puedes ignorar cualquier advertencia de que el disco no se expulsó correctamente.

## Conectando la placa a MicroBlocks

Conecta la placa a tu computadora con un cable USB de datos (**no** un cable solo de alimentación).

Ejecuta el [editor de MicroBlocks](https://microblocks.fun/run/microblocks.html) en un navegador Chrome o Edge.
Haz clic en el botón **conectar** (icono de enchufe):

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-button.png" style={{width:200, height:'auto'}}/></div>

Selecciona **conectar (USB)** del menú:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-menu.png" style={{width:200, height:'auto'}}/></div>

Selecciona tu placa del diálogo y haz clic en el botón **conectar**:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-dialog-rp2040.png" style={{width:400, height:'auto'}}/></div>

Un círculo verde y el nombre de la placa aparecerán cuando la placa esté conectada:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connected-rp2040.png" style={{width:200, height:'auto'}}/></div>

## Programando en MicroBlocks

MicroBlocks es un entorno de programación **en vivo** por lo que puedes probar mientras programas.
Haz clic en bloques y scripts para ejecutarlos.
Arrastra bloques al panel de scripting y ensámblalos para crear scripts.

Tu código se almacena en memoria flash persistente y puede ejecutarse incluso cuando la placa no está
conectada al editor de MicroBlocks.
Los scripts bajo un bloque **when started** se ejecutan cuando la placa se enciende.

MicroBlocks soporta concurrencia. Hasta diez scripts pueden ejecutarse al mismo tiempo.

Además de sus muchos bloques integrados, MicroBlocks tiene casi 200 librerías
que soportan características adicionales y periféricos.
Haz clic en el botón **Add Library** para agregar librerías.

## Ejemplos

Este script hará que los LEDs rojo, azul y verde parpadeen en ciclo:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-three-led-blink.png" style={{width:300, height:'auto'}}/></div>

Este script hará que el NeoPixel RGB cambie de color:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-rp2040-neopixel.png" style={{width:300, height:'auto'}}/></div>

La [Referencia de Bloques](https://wiki.microblocks.fun/en/reference_manual)
incluye muchos ejemplos adicionales.

## Agradecimientos Especiales

Agradecimientos especiales a John de MicroBlocks por escribir el artículo.

## Recursos de MicroBlocks

- [Sitio Web](https://microblocks.fun)

- [Guía del Usuario](https://wiki.microblocks.fun/en/ide)

- [Referencia de Bloques](https://wiki.microblocks.fun/en/reference_manual)

- [Referencia de Librerías](https://wiki.microblocks.fun/en/libraries)

- [Guías de Aprendizaje](https://learn.microblocks.fun)
