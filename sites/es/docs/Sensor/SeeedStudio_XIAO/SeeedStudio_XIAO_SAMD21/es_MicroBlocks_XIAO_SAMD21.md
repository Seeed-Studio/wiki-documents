---
description: Usando XIAO SAMD21 en MicroBlocks.
title: MicroBlocks
image: https://files.seeedstudio.com/wiki/microblocks/microblocks.png
slug: /es/xiao_samd21_microblocks
last_update:
  date: 09/09/2025
  author: MicroBlocks
---

# XIAO SAMD21 con MicroBlocks

## MicroBlocks

MicroBlocks es un lenguaje de bloques que facilita a los principiantes (de 9 años a adultos) programar microcontroladores. Sin embargo, a pesar de su aparente simplicidad, MicroBlocks es un lenguaje de programación potente con mejor rendimiento que MicroPython; la capacidad de controlar pines GPIO e interfaz con periféricos a través de I2C, SPI y serial; y casi 200 librerías de extensión. De hecho, algunos diseñadores de hardware prefieren MicroBlocks para prototipado rápido y pruebas debido a su ciclo de desarrollo rápido e interactivo.

### Pinout y Características de Hardware del XIAO SAMD21

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-pinout-samd21.jpg" style={{width:600, height:'auto'}}/></div>

Como todas las placas XIAO, esta placa tiene 11 pines GPIO, pines 0..10. Todos los pines pueden usarse para entrada analógica y salida digital y analógica.
Los pines 1..10 soportan salida de modulación por ancho de pulso (PWM), como en otras placas Xiao.

A diferencia de otras placas, el pin 0 en esta placa es un **convertidor digital-analógico de 10 bits** (DAC). Configurar el pin 0 a un número entre 0 y 1023 hace que el pin produzca un voltaje constante entre 0 y 3.3 voltios. (En contraste, PWM produce una serie de pulsos digitales donde el número determina el ancho del pulso.) El pin DAC puede usarse para generar audio u otras señales analógicas.

Esta placa tiene un LED de usuario amarillo (pin 13) y LEDs RX/TX azules (pines 11 y 12).
Todos los LEDs están invertidos: configura el pin asociado en LOW para encender el LED.

Los LEDs RX/TX pueden ser usados por MicroBlocks, con una advertencia.
MicroBlocks está constantemente intercambiando datos con la placa,
por lo que los LEDs RX/TX parpadearían intensamente al usar el editor de MicroBlocks.
Dado que ese parpadeo es molesto, los LEDs RX/TX están deshabilitados por defecto
y solo se habilitan cuando un script configura el pin asociado.
Con eso en mente, los LEDs RX/TX pueden ser útiles cuando el IDE no está conectado.

## Instalando el Firmware de MicroBlocks

Entrar en modo bootloader en esta placa es complicado ya que no hay botón de arranque. Usa un cable para hacer un cortocircuito en los dos contactos del pin RST a la izquierda del puerto USB dos veces, rápidamente:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-reset.gif" style={{width:400, height:'auto'}}/></div>

Cuando sea exitoso, la luz LED amarilla del usuario se desvanecerá encendiéndose y apagándose lentamente,
y aparecerá una unidad USB virtual llamada **Arduino**.

Descarga el [archivo de firmware](https://microblocks.fun/downloads/latest/vm/vm_xiao_samd21.uf2),
de la [carpeta de firmware](https://microblocks.fun/downloads/latest/vm) de MicroBlocks
luego arrastra el archivo a la unidad USB virtual.

El firmware se instalará y, después de unos segundos, la unidad USB virtual desaparecerá.
Puedes ignorar cualquier advertencia de que el disco no fue expulsado correctamente.

## Conectando la placa a MicroBlocks

Conecta la placa a tu computadora con un cable USB de datos (**no** un cable solo de alimentación).

Ejecuta el [editor de MicroBlocks](https://microblocks.fun/run/microblocks.html) en un navegador Chrome o Edge.
Haz clic en el botón **connect** (ícono de enchufe):

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-button.png" style={{width:300, height:'auto'}}/></div>

Selecciona **connect (USB)** del menú:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-menu.png" style={{width:300, height:'auto'}}/></div>

Selecciona tu placa del diálogo y haz clic en el botón **connect**:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-dialog-samd21.png" style={{width:400, height:'auto'}}/></div>

Un círculo verde y el nombre de la placa aparecerán cuando la placa esté conectada:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connected-samd21.png" style={{width:300, height:'auto'}}/></div>

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

## Ejemplo

Este script hará parpadear el LED amarillo del usuario:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-blink.png" style={{width:200, height:'auto'}}/></div>

La [Referencia de Bloques](https://wiki.microblocks.fun/en/reference_manual)
incluye muchos ejemplos adicionales.

## Demo del Proyecto

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/main.png" style={{width:600, height:'auto'}}/></div>

Para una demostración de proyecto más completa, el maker [Luis](https://www.hackster.io/luis_a_la_m) ha construido un dispositivo LED Neo-pixel de 8x8 usando XIAO SAMD21, Grove Shield para XIAO y una Matriz LED, que puedes usar con MicroBlocks para pintar patrones de píxeles impresionantes sin escribir código complejo. Un tutorial paso a paso se puede encontrar en [Hackster](https://www.hackster.io/luis_a_la_m/paint-with-pixels-8f3a15).


## Agradecimientos Especiales

Agradecimientos especiales a John en MicroBlocks por escribir el artículo.

## Recursos de MicroBlocks

- [Sitio Web](https://microblocks.fun)

- [Guía del Usuario](https://wiki.microblocks.fun/en/ide)

- [Referencia de Bloques](https://wiki.microblocks.fun/en/reference_manual)

- [Referencia de Librerías](https://wiki.microblocks.fun/en/libraries)

- [Guías de Aprendizaje](https://learn.microblocks.fun)
