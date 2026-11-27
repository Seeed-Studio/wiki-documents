---
description: Uso de XIAO SAMD21 en MicroBlocks.
title: MicroBlocks
image: https://files.seeedstudio.com/wiki/microblocks/microblocks.png
slug: /xiao_samd21_microblocks
last_update:
  date: 09/09/2025
  author: MicroBlocks
createdAt: '2025-09-09'
updatedAt: '2025-10-31'
url: https://wiki.seeedstudio.com/es/xiao_samd21_microblocks/
---

# XIAO SAMD21 con MicroBlocks

## MicroBlocks

MicroBlocks es un lenguaje basado en bloques que facilita a los principiantes (de 9 años hasta adultos) la programación de microcontroladores. Sin embargo, a pesar de su aparente simplicidad, MicroBlocks es un potente lenguaje de programación con mejor rendimiento que MicroPython; la capacidad de controlar pines GPIO e interactuar con periféricos mediante I2C, SPI y serie; y casi 200 bibliotecas de extensión. De hecho, algunos diseñadores de hardware prefieren MicroBlocks para la creación rápida de prototipos y pruebas debido a su rápido ciclo de desarrollo interactivo.

### Distribución de pines y características de hardware de XIAO SAMD21

<div className="interactive_pinout_container">
  <a className="interactive_pinout_btn" href="https://www.seeedstudio.com/xiao-series-page/playground/pinout/?board=samd21" target="_blank" rel="noopener noreferrer">Explora el pinout interactivo</a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-pinout-samd21.jpg" style={{width:600, height:'auto'}}/></div>

Como todas las placas XIAO, esta placa tiene 11 pines GPIO, pines 0..10. Todos los pines se pueden usar para entrada analógica y salida digital y analógica.
Los pines 1..10 admiten salida de modulación por ancho de pulso (PWM), como en otras placas Xiao.

A diferencia de otras placas, el pin 0 de esta placa es un **convertidor digital‑analógico de 10 bits** (DAC). Ajustar el pin 0 a un número entre 0 y 1023 hace que el pin emita un voltaje constante entre 0 y 3,3 voltios. (En contraste, PWM emite una serie de pulsos digitales donde el número determina el ancho del pulso). El pin DAC se puede usar para generar audio u otras señales analógicas.

Esta placa tiene un LED de usuario amarillo (pin 13) y LEDs RX/TX azules (pines 11 y 12).
Todos los LEDs están invertidos: ajusta el pin asociado a LOW para encender el LED.

Los LEDs RX/TX pueden ser usados por MicroBlocks, con una salvedad.
MicroBlocks está intercambiando datos constantemente con la placa,
por lo que los LEDs RX/TX parpadearían intensamente al usar el editor MicroBlocks.
Como ese parpadeo es molesto, los LEDs RX/TX están desactivados por defecto
y solo se activan cuando un script ajusta el pin asociado.
Teniendo esto en cuenta, los LEDs RX/TX pueden ser útiles cuando el IDE no está conectado.

## Instalación del firmware de MicroBlocks

Entrar en modo bootloader en esta placa es complicado ya que no hay botón de arranque. Usa un cable para hacer un corto dos veces, rápidamente, entre los dos contactos del pin RST a la izquierda del puerto USB:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-reset.gif" style={{width:400, height:'auto'}}/></div>

Cuando tenga éxito, el LED de usuario amarillo se encenderá y apagará lentamente,
y aparecerá una unidad USB virtual llamada **Arduino**.

Descarga el [archivo de firmware](https://microblocks.fun/downloads/latest/vm/vm_xiao_samd21.uf2),
de la [carpeta de firmware](https://microblocks.fun/downloads/latest/vm) de MicroBlocks
y luego arrastra el archivo a la unidad USB virtual.

El firmware se instalará y, tras unos segundos, la unidad USB virtual desaparecerá.
Puedes ignorar cualquier advertencia de que el disco no se expulsó correctamente.

## Conectar la placa a MicroBlocks

Conecta la placa a tu ordenador con un cable USB de datos (**no** un cable solo de alimentación).

Ejecuta el [editor MicroBlocks](https://microblocks.fun/run/microblocks.html) en un navegador Chrome o Edge.
Haz clic en el botón **connect** (icono de enchufe):

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-button.png" style={{width:300, height:'auto'}}/></div>

Selecciona **connect (USB)** en el menú:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-menu.png" style={{width:300, height:'auto'}}/></div>

Selecciona tu placa en el cuadro de diálogo y haz clic en el botón **connect**:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-dialog-samd21.png" style={{width:400, height:'auto'}}/></div>

Aparecerán un círculo verde y el nombre de la placa cuando la placa esté conectada:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connected-samd21.png" style={{width:300, height:'auto'}}/></div>

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

Este script hará parpadear el LED de usuario amarillo:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-blink.png" style={{width:200, height:'auto'}}/></div>

La [referencia de bloques](https://wiki.microblocks.fun/en/reference_manual)
incluye muchos ejemplos adicionales.

## Demostración de proyecto

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/main.png" style={{width:600, height:'auto'}}/></div>

Para una demostración de proyecto más completa, el maker [Luis](https://www.hackster.io/luis_a_la_m) ha construido un dispositivo Neo-pixel LED 8x8 usando XIAO SAMD21, Grove Shield para XIAO y una matriz LED, con el que puedes usar MicroBlocks para pintar impresionantes patrones de píxeles sin escribir código complejo. Se puede encontrar un tutorial paso a paso en [Hackster](https://www.hackster.io/luis_a_la_m/paint-with-pixels-8f3a15).


## Agradecimientos especiales

Agradecimientos especiales a John de MicroBlocks por escribir el artículo.

## Recursos de MicroBlocks

- [Sitio web](https://microblocks.fun)

- [Guía del usuario](https://wiki.microblocks.fun/en/ide)

- [Referencia de bloques](https://wiki.microblocks.fun/en/reference_manual)

- [Referencia de bibliotecas](https://wiki.microblocks.fun/en/libraries)

- [Guías de aprendizaje](https://learn.microblocks.fun)
