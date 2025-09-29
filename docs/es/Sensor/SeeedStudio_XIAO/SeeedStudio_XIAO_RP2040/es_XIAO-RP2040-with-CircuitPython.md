---
description: Seeed Studio XIAO RP2040 con CircuitPython
title: CircuitPython
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/XIAO-RP2040-with-CircuitPython
last_update:
  date: 1/11/2023
  author: shuxu hu
---
# **Seeed Studio XIAO RP2040 con CircuitPython**

CircuitPython es un lenguaje de programación diseñado para simplificar la experimentación y el aprendizaje de programación en placas de microcontrolador de bajo costo. Hace que comenzar sea más fácil que nunca sin necesidad de descargas previas en el escritorio. Una vez que configures tu placa, abre cualquier editor de texto y comienza a editar código. Es así de simple.

## **Primeros Pasos**

### Instalación

**Paso 1** Entrar al Modo Bootloader

Antes de instalar CircuitPython en el Seeed Studio XIAO RP2040, se requiere el modo bootloader. Podemos entrar al modo bootloader mediante la siguiente operación:

- Mantén presionado el botón "BOOT". (La "B" está escrita en la placa mostrada a la derecha)
- Conecta el Seeed Studio XIAO PR2040 a tu computadora mientras sigues presionando el botón.
- La computadora entonces mostrará un controlador de disco (RP1-RP2)

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg" alt="pir" width={600} height="auto" /></p>

El disco aparece (RP1-RP2):

<div align="center"><img width={150} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu.png" /></div>


**Paso 2** Descarga el [firmware](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-CircuitPython.uf2) para Seeed Studio XIAO RP2040

**Paso 3** Arrastra el archivo .urf al controlador de disco ("RP1-RP2")

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu9.png" /></div>


**Paso 4** Verifica la unidad de disco si el nombre ha cambiado a "CIRCUITPY".

<div align="center"><img width={150} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu2.png" /></div>


Ahora has instalado exitosamente CircuitPython en la placa Seeed Studio XIAO RP2040.

### Tutorial de Parpadeo de LED

**Paso 1** Descarga el editor de CircuitPython - [Mu Editor](https://codewith.mu/en/download)

**Paso 2** Abre y elige el modo como "CircuitPython"

<div align="center"><img width={750} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu7.png" /></div>


**Paso 3** Copia y sube los siguientes códigos:

```cpp
"""Example for Pico. Blinks the built-in LED."""
import time
import board
import digitalio

led = digitalio.DigitalInOut(board.LED)
led.direction = digitalio.Direction.OUTPUT

while True:
    led.value = True
    time.sleep(0.5)
    led.value = False
    time.sleep(0.5)
```

Haz clic en "Serial" para abrir REPL, guarda los códigos en REPL como 'code.py' o 'main.py'

<div align="center"><img width={750} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu6.png" /></div>


El LED de usuario en Seeed Studio XIAO RP2040 entonces parpadeará.

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>