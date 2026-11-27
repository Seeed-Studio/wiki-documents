---
description: XIAO ESP32-C3 con MicroBlocks
title: XIAO ESP32-C3 con MicroBlocks
image: https://files.seeedstudio.com/wiki/microblocks/microblocks.png
slug: /xiao_esp32c3_microblocks
last_update:
  date: 09/09/2025
  author: MicroBlocks
createdAt: '2025-09-09'
updatedAt: '2025-09-25'
url: https://wiki.seeedstudio.com/es/xiao_esp32c3_microblocks/
---

# XIAO ESP32-C3 con MicroBlocks

## MicroBlocks

MicroBlocks es un lenguaje basado en bloques que facilita a los principiantes (de 9 años a adultos) programar microcontroladores. Sin embargo, a pesar de su aparente simplicidad, MicroBlocks es un potente lenguaje de programación con mejor rendimiento que MicroPython; la capacidad de controlar pines GPIO e interconectarse con periféricos mediante I2C, SPI y serie; y casi 200 bibliotecas de extensión. De hecho, algunos diseñadores de hardware prefieren MicroBlocks para la creación rápida de prototipos y pruebas debido a su rápido ciclo de desarrollo interactivo.

### Distribución de pines y características de hardware de XIAO ESP32C3

<div className="interactive_pinout_container">
  <a className="interactive_pinout_btn" href="https://www.seeedstudio.com/xiao-series-page/playground/pinout/?board=c3" target="_blank" rel="noopener noreferrer">Explora la distribución de pines interactiva</a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-esp32c3-overview.png" style={{width:500, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-esp32c3-pinout.png" style={{width:800, height:'auto'}}/></div>

Esta placa ofrece conectividad Wi‑Fi y BLE mediante una antena externa (incluida).

La placa tiene 11 pines GPIO (pines 0..10). Los pines 0..3 pueden ser entradas analógicas.

Esta placa **no** tiene un LED de usuario integrado;
conecta un LED externo entre el pin 10 y tierra para usar el bloque de MicroBlocks "set user LED".

### Instalación del firmware de MicroBlocks

El firmware de MicroBlocks para esta placa se puede instalar directamente desde el editor MicroBlocks.

Conecta la placa a tu ordenador con un cable USB de datos (**no** un cable solo de alimentación).

Ejecuta el [editor MicroBlocks](https://microblocks.fun/run/microblocks.html) en un navegador Chrome o Edge.

Activa el "advanced mode" en el menú del engranaje:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/set-advanced-mode.png" style={{width:400, height:'auto'}}/></div>

Selecciona **install ESP firmware from microblocks.fun** en el menú ampliado del engranaje:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/install-esp-firmware.png" style={{width:400, height:'auto'}}/></div>

Selecciona **xiao_esp32_c3**:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/install-c3.png" style={{width:200, height:'auto'}}/></div>

Cuando se te pida, usa el botón "Connect" (icono de enchufe) para abrir una conexión USB con la placa. Cuando comience el proceso de instalación del firmware, aparecerá un indicador de progreso:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/download-progress.png" style={{width:200, height:'auto'}}/></div>

La instalación del firmware tarda entre 30 y 60 segundos. No cambies de pestaña del navegador hasta que se complete.

Una vez instalado el firmware, ¡puedes conectar la placa a MicroBlocks y empezar a programar!

## Modo bootloader

Normalmente no es necesario entrar manualmente en modo bootloader al instalar el firmware de MicroBlocks en placas ESP32.

Para entrar en modo bootloader, si es necesario, mantén pulsado el botón B (boot)
mientras presionas y sueltas el botón R (reset).
También puedes conectar la placa a tu ordenador mientras mantienes pulsado el botón B.

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

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connected-esp32c3.png" style={{width:200, height:'auto'}}/></div>

## Programar en MicroBlocks

MicroBlocks es un entorno de programación **en vivo**, por lo que puedes probar mientras programas.
Haz clic en bloques y scripts para ejecutarlos.
Arrastra bloques al panel de scripts y ensámblalos para crear scripts.

Tu código se almacena en memoria flash persistente y puede ejecutarse incluso cuando la placa
no está conectada al editor MicroBlocks.
Los scripts bajo un bloque **when started** se ejecutan cuando la placa se alimenta.

MicroBlocks admite concurrencia. Hasta diez scripts pueden ejecutarse al mismo tiempo.

Además de sus muchos bloques integrados, MicroBlocks tiene casi 200 bibliotecas
que admiten funciones y periféricos adicionales.
Haz clic en el botón **Add Library** para añadir bibliotecas.

## Ejemplo

Aunque esta placa no tiene un LED de usuario integrado,
si conectas un LED entre el pin 10 y tierra, este script lo hará parpadear:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-blink.png" style={{width:200, height:'auto'}}/></div>

La [Blocks Reference](https://wiki.microblocks.fun/en/reference_manual)
incluye muchos ejemplos adicionales.

## Agradecimientos especiales

Agradecimientos especiales a John de MicroBlocks por escribir el artículo.

## Recursos de MicroBlocks

- [Website](https://microblocks.fun)

- [User Guide](https://wiki.microblocks.fun/en/ide)

- [Blocks Reference](https://wiki.microblocks.fun/en/reference_manual)

- [Libraries Reference](https://wiki.microblocks.fun/en/libraries)

- [Learning Guides](https://learn.microblocks.fun)
