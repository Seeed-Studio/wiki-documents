---
description: Seeed Studio XIAO nRF52840 with CircuitPython
title: XIAO nRF52840 con CircuitPython
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/XIAO-BLE_CircutPython
last_update:
  date: 02/17/2025
  author: Guillermo
---
# **Seeed Studio XIAO nRF52840 con CircuitPython**

CircuitPython es un lenguaje de programación diseñado para simplificar la experimentación y el aprendizaje de la programación en placas de microcontroladores de bajo costo. Hace que comenzar sea más fácil que nunca, sin necesidad de descargas previas en el escritorio. Una vez que tengas tu placa configurada, abre cualquier editor de texto y comienza a editar código. Así de simple.

## **Comenzando**

### Instalación

**Paso 1** Ingresar al Modo de Bootloader

Antes de instalar CircuitPython en la Seeed Studio XIAO nRF52840, es necesario ingresar al modo bootloader. Podemos entrar en este modo presionando el botón de reinicio dos veces:

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-BLE/functional2b.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/functional2b.jpg" alt="pir" width={600} height="auto" /></p>

Entonces aparecerá el disco:

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu1.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu1.png" alt="pir" width={600} height="auto" /></p>

**Paso 2** Descarga el [firmware](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-Circuitpython.uf2) para Seeed Studio XIAO nRF52840

**Paso 3** Arrastra el archivo .uf2 a la unidad del disco ("XIAO-SENSE")

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu3.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu3.png" alt="pir" width={600} height="auto" /></p>

**Paso 4** Verifica la unidad del disco para asegurarte de que el nombre haya cambiado a "CIRCUITPY".

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu2.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu2.png" alt="pir" width={600} height="auto" /></p>

Ahora has instalado exitosamente CircuitPython en la placa XIAO nRF52840 de Seeed Studio.

### Aplicación

**Paso 1** Descarga el editor CircuitPython - [Mu Editor](https://codewith.mu/en/download) y ábrelo.

**Paso 2** Haz clic en "Modo" y elige el modo "CircuitPython".

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu4.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu4.png" alt="pir" width={600} height="auto" /></p>

**Paso 3** Copiar y cargar los siguientes códigos:

```cpp
"""Ejemplo para XIAO nRF52840 de Seeed Studio. Parpadea el LED integrado."""
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

Haz clic en "Serial" para abrir REPL, guarda los códigos en REPL como 'code.py' o 'main.py'.

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu5.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu5.png" alt="pir" width={600} height="auto" /></p>

El LED de usuario en la Seeed Studio XIAO nRF52840 comenzará a parpadear.

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte y asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
