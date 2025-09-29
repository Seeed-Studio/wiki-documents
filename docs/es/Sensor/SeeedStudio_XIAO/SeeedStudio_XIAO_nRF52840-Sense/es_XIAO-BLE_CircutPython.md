---
description: Seeed Studio XIAO nRF52840 con CircuitPython
title: CircuitPython
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/XIAO-BLE_CircutPython
last_update:
  date: 1/11/2023
  author: shuxu hu
---
# **Seeed Studio XIAO nRF52840 con CircuitPython**

CircuitPython es un lenguaje de programación diseñado para simplificar la experimentación y el aprendizaje de programación en placas de microcontroladores de bajo costo. Hace que comenzar sea más fácil que nunca sin necesidad de descargas previas en el escritorio. Una vez que configures tu placa, abre cualquier editor de texto y comienza a editar código. Es así de simple.

## **Primeros Pasos**

### Instalación

**Paso 1** Entrar al Modo Bootloader

Antes de instalar CircuitPython en el Seeed Studio XIAO nRF52840, se requiere el modo bootloader. Podemos entrar al modo bootloader haciendo clic en el Botón Reset dos veces:

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-BLE/functional2b.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/functional2b.jpg" alt="pir" width={600} height="auto" /></p>

Entonces aparecerá el disco:

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu1.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu1.png" alt="pir" width={600} height="auto" /></p>

**Paso 2** Descargar el [firmware](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-Circuitpython.uf2) para Seeed Studio XIAO nRF52840

**Paso 3** Arrastrar el archivo .urf al controlador de disco ("XIAO-SENSE")

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu3.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu3.png" alt="pir" width={600} height="auto" /></p>

**Paso 4** Verificar el controlador de disco si el nombre ha cambiado a "CIRCUITPY".

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu2.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu2.png" alt="pir" width={600} height="auto" /></p>

Ahora has instalado exitosamente CircuitPython en la placa Seeed Studio XIAO nRF52840.

### Aplicación

**Paso 1** Descargar el editor de CircuitPython - [Mu Editor](https://codewith.mu/en/download) y abrirlo

**Paso 2** Hacer clic en "Mode" y elegir el modo como "CircuitPython"

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu4.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu4.png" alt="pir" width={600} height="auto" /></p>

**Paso 3** Copiar y subir los siguientes códigos:

```cpp
"""Example for Seeed Studio XIAO nRF52840. Blinks the built-in LED."""
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

Hacer clic en "Serial" para abrir REPL, guardar los códigos en REPL como 'code.py' o 'main.py'

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu5.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu5.png" alt="pir" width={600} height="auto" /></p>

El LED de usuario en el Seeed Studio XIAO nRF52840 entonces parpadeará.

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>