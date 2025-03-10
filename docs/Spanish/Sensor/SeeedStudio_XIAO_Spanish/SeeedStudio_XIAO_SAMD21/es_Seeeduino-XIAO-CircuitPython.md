---
description: Seeed Studio XIAO SAMD21 con CircuitPython
title: CircuitPython en XIAO SAMD21
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Seeeduino-XIAO-CircuitPython
last_update:
  date: 02/19/2025
  author: Guillermo
---

# CircuitPython en XIAO SAMD21 de Seeed Studio 

<!-- ![](https://files.seeedstudio.com/wiki/Circuitpython-XIAO/XIAO-CP.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Circuitpython-XIAO/XIAO-CP.png" alt="pir" width={600} height="auto" /></p>

Este wiki introduce cómo instalar y ejecutar el [CircuitPython](https://circuitpython.org/) oficial de Adafruit Industries en la [placa de desarrollo Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html).

CircuitPython es un lenguaje de programación diseñado para simplificar la experimentación y el aprendizaje en placas de microcontroladores de bajo costo. Facilita el inicio sin necesidad de descargar software en la computadora. Una vez configurada la placa, solo necesitas abrir cualquier editor de texto y comenzar a escribir código. Para más información, consulta [aquí](https://learn.adafruit.com/welcome-to-circuitpython/what-is-circuitpython).

## Instalación de CircuitPython

1. Descarga el [**Bootloader oficial de CircuitPython para Seeed Studio XIAO SAMD21**](https://circuitpython.org/board/seeeduino_xiao/). Se descargará un archivo `.uf2`.

2. Conecta la Seeed Studio XIAO SAMD21 a tu PC mediante un cable USB tipo C.

3. Entra en el modo DFU bootloader usando un puente para conectar a tierra los pines RST dos veces rápidamente. Para más referencias, consulta también [aquí](https://wiki.seeedstudio.com/Seeeduino-XIAO_spanish/).

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-reset.gif" /></div>


4. Debería aparecer una unidad externa llamada `Arduino` en tu PC. Arrastra el archivo `.uf2` de CircuitPython descargado a la unidad `Arduino`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Circuitpython-XIAO/df2.png" /></div>


5. Una vez cargado el bootloader de CircuitPython, desconecta el cable USB tipo C y vuelve a conectarlo. Debería aparecer una nueva unidad externa llamada `CIRCUITPY`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Circuitpython-XIAO/df2-2.png" /></div>

6. ¡Ahora, CircuitPython está cargado en Seeed Studio XIAO SAMD21! Todo lo que necesitas hacer es escribir tu programa en Python, nombrarlo `main.py` y arrastrarlo a la unidad `CIRCUITPY`.

## Conceptos básicos de CircuitPython

Ejecutando `Blink` con CircuitPython:

**Nota:** simplemente copia y guarda el siguiente código con el nombre `main.py`, y arrástralo a la unidad `CIRCUITPY`.

```py
import time
import board
from digitalio import DigitalInOut, Direction

led = DigitalInOut(board.LED_INVERTED)
led.direction = Direction.OUTPUT

while True:
    led.value = True
    time.sleep(1)
    led.value = False
    time.sleep(1)
```

¡Deberías ver que el LED integrado comienza a parpadear!  

### Usando Módulos Grove  

Puedes utilizar módulos Grove con interfaces analógicas/digitales simples en CircuitPython. Por ejemplo, conecta el **Grove - Light Sensor** al puerto `A0` de Seeeduino XIAO y ejecuta el siguiente código:

```py
import time
import board
from analogio import AnalogIn

analog_in = AnalogIn(board.A0) # Pin analógico en Seeeduino XIAO

def get_voltage(pin):
    return (pin.value * 3.3) / 65536
 
while True:
    print("Voltaje: ", get_voltage(analog_in))
    time.sleep(0.1)
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Circuitpython-XIAO/CP.png" /></div>


Para más información sobre la API de CircuitPython, visita [**CircuitPython Essentials**](https://learn.adafruit.com/circuitpython-essentials/circuitpython-essentials).  

## Recursos

- [**CircuitPython Essentials**](https://learn.adafruit.com/circuitpython-essentials/circuitpython-essentials)

- [**Instalando Circuit Python en XIAO SAMD21 de Seeed Studio**](https://makeandymake.github.io/2020/05/02/installing-circuitpython-on-seeeduino-xiao.html)

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