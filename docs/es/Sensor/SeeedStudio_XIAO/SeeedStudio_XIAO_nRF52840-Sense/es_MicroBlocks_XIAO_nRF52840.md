---
description: Usando XIAO nRF52840 en MicroBlocks.
title: MicroBlocks
image: https://files.seeedstudio.com/wiki/microblocks/microblocks.png
slug: /es/xiao_ble_microblocks
last_update:
  date: 09/09/2025
  author: MicroBlocks
---

# XIAO nRF52840 con MicroBlocks

## MicroBlocks

MicroBlocks es un lenguaje de bloques que facilita a los principiantes (de 9 años a adultos) programar microcontroladores. Sin embargo, a pesar de su aparente simplicidad, MicroBlocks es un lenguaje de programación potente con mejor rendimiento que MicroPython; la capacidad de controlar pines GPIO e interfaz con periféricos a través de I2C, SPI y serie; y casi 200 librerías de extensión. De hecho, algunos diseñadores de hardware prefieren MicroBlocks para prototipado rápido y pruebas debido a su ciclo de desarrollo rápido e interactivo.

## Pinout y Características de Hardware del XIAO nRF52840

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-nrf52-sense.png" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-nrf52-sense-pinout.png" style={{width:650, height:'auto'}}/></div>

Una gran ventaja de esta placa es su radio Nordic de bajo consumo, que permite a MicroBlocks programar la placa de forma inalámbrica a través de Bluetooth Low Energy (BLE).

Los pines 0..10 son pines GPIO. Los pines 0..5 pueden ser entradas analógicas.
Esta placa también tiene tres LEDs diminutos: rojo (pin 11, el LED del usuario), azul (pin 12) y verde (pin 13).
Todos los LEDs están invertidos: establece el pin asociado en LOW para encender el LED.

La versión Sense también incluye un micrófono PDM integrado, sensor de temperatura e IMU LSM6DS3TR-C de 6 ejes, que son compatibles con las librerías "Microphone", "Basic Sensors" y "Motion" de MicroBlocks.

## Instalando el Firmware de MicroBlocks

Para entrar en modo bootloader, haz clic rápidamente en el botón de reset dos veces.
(El botón de reset es diminuto, ubicado a la izquierda del puerto USB cuando el puerto está orientado hacia arriba.)

Aparecerá una unidad USB virtual llamada **XIAO-SENSE**.

Descarga el [archivo de firmware](https://microblocks.fun/downloads/latest/vm/vm_xiao_nrf52840.uf2), de la [carpeta de firmware](https://microblocks.fun/downloads/latest/vm) de MicroBlocks y luego arrastra el archivo a la unidad USB virtual.

El firmware se instalará y, después de unos segundos, la unidad USB virtual desaparecerá.
Puedes ignorar cualquier advertencia de que el disco no se expulsó correctamente.

## Conectando la placa a MicroBlocks

Conecta la placa a tu computadora con un cable USB de datos (**no** un cable solo de alimentación).

Ejecuta el [editor de MicroBlocks](https://microblocks.fun/run/microblocks.html) en un navegador Chrome o Edge.
Haz clic en el botón **conectar** (icono de enchufe):

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-button.png" style={{width:200, height:'auto'}}/></div>

Selecciona **conectar (USB)** del menú:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-menu.png" style={{width:200, height:'auto'}}/></div>

**Nota:** También puedes conectarte de forma inalámbrica seleccionando **conectar (BLE)** en el menú de conexión.

Selecciona tu placa del diálogo y haz clic en el botón **conectar**:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-dialog-nrf.png" style={{width:400, height:'auto'}}/></div>

Un círculo verde y el nombre de la placa aparecerán cuando la placa esté conectada:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connected-nrf.png" style={{width:200, height:'auto'}}/></div>

Si tu Xiao nRF52840 tiene su propia fuente de alimentación, también puedes conectarte a él sin un cable USB seleccionando "conectar (BLE)" en el menú de conexión.

## Programando en MicroBlocks

MicroBlocks es un entorno de codificación **en vivo** por lo que puedes probar mientras programas.
Haz clic en bloques y scripts para ejecutarlos.
Arrastra bloques al panel de scripting y ensámblalos para crear scripts.

Tu código se almacena en memoria flash persistente y puede ejecutarse incluso cuando la placa no está conectada al editor de MicroBlocks.
Los scripts bajo un bloque **when started** se ejecutan cuando la placa se enciende.

MicroBlocks soporta concurrencia. Hasta diez scripts pueden ejecutarse al mismo tiempo.

Además de sus muchos bloques integrados, MicroBlocks tiene casi 200 librerías que soportan características adicionales y periféricos.
Haz clic en el botón **Add Library** para agregar librerías.

## Ejemplos

Este script hará parpadear el LED rojo del usuario:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-blink.png" style={{width:200, height:'auto'}}/></div>

Este script alternará entre los LEDs rojo, azul y verde:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-three-led-blink.png" style={{width:300, height:'auto'}}/></div>

La [Referencia de Bloques](https://wiki.microblocks.fun/en/reference_manual) incluye muchos ejemplos adicionales.

## Agradecimientos Especiales

Agradecimientos especiales a John de MicroBlocks por escribir el artículo.

## Recursos de MicroBlocks

- [Sitio Web](https://microblocks.fun)

- [Guía del Usuario](https://wiki.microblocks.fun/en/ide)

- [Referencia de Bloques](https://wiki.microblocks.fun/en/reference_manual)

- [Referencia de Librerías](https://wiki.microblocks.fun/en/libraries)

- [Guías de Aprendizaje](https://learn.microblocks.fun)
