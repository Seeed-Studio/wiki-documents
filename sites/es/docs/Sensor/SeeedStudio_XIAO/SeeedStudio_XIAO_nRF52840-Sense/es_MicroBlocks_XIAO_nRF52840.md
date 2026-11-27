---
description: Uso de XIAO nRF52840 en MicroBlocks.
title: MicroBlocks
image: https://files.seeedstudio.com/wiki/microblocks/microblocks.png
slug: /xiao_ble_microblocks
last_update:
  date: 09/09/2025
  author: MicroBlocks
createdAt: '2025-09-09'
updatedAt: '2025-09-25'
url: https://wiki.seeedstudio.com/es/xiao_ble_microblocks/
---

# XIAO nRF52840 con MicroBlocks

## MicroBlocks

MicroBlocks es un lenguaje basado en bloques que facilita a los principiantes (de 9 años hasta adultos) la programación de microcontroladores. A pesar de su aparente simplicidad, MicroBlocks es un potente lenguaje de programación con mejor rendimiento que MicroPython; capacidad para controlar pines GPIO e interconectarse con periféricos mediante I2C, SPI y serie; y casi 200 bibliotecas de extensión. De hecho, algunos diseñadores de hardware prefieren MicroBlocks para la creación rápida de prototipos y pruebas debido a su rápido ciclo de desarrollo interactivo.

## Distribución de pines y características de hardware de XIAO nRF52840

<div className="interactive_pinout_container">
  <a className="interactive_pinout_btn" href="https://www.seeedstudio.com/xiao-series-page/playground/pinout/?board=nrf52840sense" target="_blank" rel="noopener noreferrer">Explora el pinout interactivo</a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-nrf52-sense.png" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-nrf52-sense-pinout.png" style={{width:650, height:'auto'}}/></div>

Una gran ventaja de esta placa es su radio Nordic de bajo consumo, que permite a MicroBlocks programar la placa de forma inalámbrica mediante Bluetooth Low Energy (BLE).

Los pines 0..10 son pines GPIO. Los pines 0..5 pueden ser entradas analógicas.
Esta placa también tiene tres pequeños LED: rojo (pin 11, el LED de usuario), azul (pin 12) y verde (pin 13).
Todos los LED están invertidos: establece el pin asociado en LOW para encender el LED.

La versión Sense también incluye un micrófono PDM integrado, un sensor de temperatura y una IMU LSM6DS3TR-C de 6 ejes, que son compatibles con las bibliotecas de MicroBlocks "Microphone", "Basic Sensors" y "Motion".

## Instalación del firmware de MicroBlocks

Para entrar en modo bootloader, pulsa rápidamente el botón de reinicio dos veces.
(El botón de reinicio es diminuto y está situado a la izquierda del puerto USB cuando el puerto está orientado hacia arriba).

Aparecerá una unidad USB virtual llamada **XIAO-SENSE**.

Descarga el [archivo de firmware](https://microblocks.fun/downloads/latest/vm/vm_xiao_nrf52840.uf2) desde la [carpeta de firmware](https://microblocks.fun/downloads/latest/vm) de MicroBlocks y luego arrastra el archivo a la unidad USB virtual.

El firmware se instalará y, tras unos segundos, la unidad USB virtual desaparecerá.
Puedes ignorar cualquier advertencia de que el disco no se expulsó correctamente.

## Conexión de la placa a MicroBlocks

Conecta la placa a tu ordenador con un cable USB de datos (**no** un cable solo de alimentación).

Ejecuta el [editor MicroBlocks](https://microblocks.fun/run/microblocks.html) en un navegador Chrome o Edge.
Haz clic en el botón **connect** (icono de enchufe):

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-button.png" style={{width:200, height:'auto'}}/></div>

Selecciona **connect (USB)** en el menú:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-menu.png" style={{width:200, height:'auto'}}/></div>

**Nota:** También puedes conectarte de forma inalámbrica seleccionando **connect (BLE)** en el menú de conexión.

Selecciona tu placa en el cuadro de diálogo y haz clic en el botón **connect**:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-dialog-nrf.png" style={{width:400, height:'auto'}}/></div>

Aparecerán un círculo verde y el nombre de la placa cuando la placa esté conectada:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connected-nrf.png" style={{width:200, height:'auto'}}/></div>

Si tu Xiao nRF52840 tiene su propia fuente de alimentación, también puedes conectarte a él sin un cable USB seleccionando "connect (BLE)" en el menú de conexión.

## Programación en MicroBlocks

MicroBlocks es un entorno de programación **en vivo**, por lo que puedes probar mientras programas.
Haz clic en bloques y scripts para ejecutarlos.
Arrastra bloques al panel de scripts y ensámblalos para crear scripts.

Tu código se almacena en memoria flash persistente y puede ejecutarse incluso cuando la placa no está conectada al editor MicroBlocks.
Los scripts bajo un bloque **when started** se ejecutan cuando la placa se alimenta.

MicroBlocks admite concurrencia. Hasta diez scripts pueden ejecutarse al mismo tiempo.

Además de sus numerosos bloques integrados, MicroBlocks tiene casi 200 bibliotecas que admiten funciones y periféricos adicionales.
Haz clic en el botón **Add Library** para añadir bibliotecas.

## Ejemplos

Este script hará parpadear el LED rojo de usuario:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-blink.png" style={{width:200, height:'auto'}}/></div>

Este script recorrerá los LED rojo, azul y verde:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-three-led-blink.png" style={{width:300, height:'auto'}}/></div>

La [Blocks Reference](https://wiki.microblocks.fun/en/reference_manual) incluye muchos ejemplos adicionales.

## Agradecimientos especiales

Agradecimientos especiales a John de MicroBlocks por escribir el artículo.

## Recursos de MicroBlocks

- [Sitio web](https://microblocks.fun)

- [Guía del usuario](https://wiki.microblocks.fun/en/ide)

- [Blocks Reference](https://wiki.microblocks.fun/en/reference_manual)

- [Libraries Reference](https://wiki.microblocks.fun/en/libraries)

- [Guías de aprendizaje](https://learn.microblocks.fun)
