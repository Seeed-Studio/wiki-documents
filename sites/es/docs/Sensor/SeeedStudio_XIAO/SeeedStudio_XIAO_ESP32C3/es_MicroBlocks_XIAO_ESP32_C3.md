---
description: XIAO ESP32-C3 con MicroBlocks
title: XIAO ESP32-C3 con MicroBlocks
image: https://files.seeedstudio.com/wiki/microblocks/microblocks.png
slug: /es/xiao_esp32c3_microblocks
last_update:
  date: 09/09/2025
  author: MicroBlocks
---

# XIAO ESP32-C3 con MicroBlocks

## MicroBlocks

MicroBlocks es un lenguaje de bloques que facilita a los principiantes (de 9 años a adultos) programar microcontroladores. A pesar de su aparente simplicidad, MicroBlocks es un lenguaje de programación potente con mejor rendimiento que MicroPython; la capacidad de controlar pines GPIO e interfaz con periféricos a través de I2C, SPI y serial; y casi 200 librerías de extensión. De hecho, algunos diseñadores de hardware prefieren MicroBlocks para prototipado rápido y pruebas debido a su ciclo de desarrollo rápido e interactivo.

### Pinout y Características de Hardware del XIAO ESP32C3

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-esp32c3-overview.png" style={{width:500, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-esp32c3-pinout.png" style={{width:800, height:'auto'}}/></div>

Esta placa ofrece conectividad Wi-Fi y BLE a través de una antena externa (incluida).

La placa tiene 11 pines GPIO (pines 0..10). Los pines 0..3 pueden ser entradas analógicas.

Esta placa **no** tiene un LED de usuario integrado;
conecta un LED externo entre el pin 10 y tierra para usar el bloque "set user LED" de MicroBlocks.

### Instalación del Firmware de MicroBlocks

El firmware de MicroBlocks para esta placa se puede instalar directamente desde el editor de MicroBlocks.

Conecta la placa a tu computadora con un cable USB de datos (**no** un cable solo de alimentación).

Ejecuta el [editor de MicroBlocks](https://microblocks.fun/run/microblocks.html) en un navegador Chrome o Edge.

Habilita el "modo avanzado" en el menú de configuración:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/set-advanced-mode.png" style={{width:400, height:'auto'}}/></div>

Selecciona **install ESP firmware from microblocks.fun** del menú de configuración expandido:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/install-esp-firmware.png" style={{width:400, height:'auto'}}/></div>

Selecciona **xiao_esp32_c3**:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/install-c3.png" style={{width:200, height:'auto'}}/></div>

Cuando se te solicite, usa el botón "Connect" (icono de enchufe) para abrir una conexión USB a la placa. Cuando comience el proceso de instalación del firmware, aparecerá un indicador de progreso:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/download-progress.png" style={{width:200, height:'auto'}}/></div>

La instalación del firmware toma de 30 a 60 segundos. No cambies de pestaña del navegador hasta que esté completa.

Una vez que el firmware esté instalado, ¡puedes conectar la placa a MicroBlocks y comenzar a programar!

## Modo Bootloader

Generalmente no es necesario entrar manualmente al modo bootloader al instalar el firmware de MicroBlocks en placas ESP32.

Para entrar al modo bootloader, si es necesario, mantén presionado el botón B (boot)
mientras presionas y sueltas el botón R (reset).
También puedes conectar la placa a tu computadora mientras mantienes presionado el botón B.

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

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connected-esp32c3.png" style={{width:200, height:'auto'}}/></div>

## Programando en MicroBlocks

MicroBlocks es un entorno de programación **en vivo** por lo que puedes probar mientras programas.
Haz clic en bloques y scripts para ejecutarlos.
Arrastra bloques al panel de scripts y ensámblalos para crear scripts.

Tu código se almacena en memoria flash persistente y puede ejecutarse incluso cuando la placa
no está conectada al editor de MicroBlocks.
Los scripts bajo un bloque **when started** se ejecutan cuando la placa se enciende.

MicroBlocks soporta concurrencia. Hasta diez scripts pueden ejecutarse al mismo tiempo.

Además de sus muchos bloques integrados, MicroBlocks tiene casi 200 librerías
que soportan características adicionales y periféricos.
Haz clic en el botón **Add Library** para agregar librerías.

## Ejemplo

Aunque esta placa no tiene un LED de usuario integrado,
si conectas un LED entre el pin 10 y tierra, este script lo hará parpadear:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-blink.png" style={{width:200, height:'auto'}}/></div>

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
