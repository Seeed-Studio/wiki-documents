---
description: Seeed Studio XIAO SAMD21 con CircuitPython
title: CircuitPython
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Seeeduino-XIAO-CircuitPython
last_update:
  date: 1/11/2023
  author: shuxu hu
---

# CircuitPython en Seeed Studio XIAO SAMD21

<!-- ![](https://files.seeedstudio.com/wiki/Circuitpython-XIAO/XIAO-CP.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Circuitpython-XIAO/XIAO-CP.png" alt="pir" width={600} height="auto" /></p>

¡Esta wiki introduce cómo instalar y ejecutar el [CircuitPython](https://circuitpython.org/) oficial de Adafruit Industries en la [placa de desarrollo Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)!

CircuitPython es un lenguaje de programación diseñado para simplificar la experimentación y el aprendizaje de programación en placas de microcontroladores de bajo costo. Hace que comenzar sea más fácil que nunca sin necesidad de descargas previas en el escritorio. Una vez que configures tu placa, abre cualquier editor de texto y comienza a editar código. Para más información, consulta [aquí](https://learn.adafruit.com/welcome-to-circuitpython/what-is-circuitpython).

## Instalando CircuitPython

1. Descarga el [**Bootloader de CircuitPython oficial para Seeed Studio XIAO SAMD21**](https://circuitpython.org/board/seeeduino_xiao/). Se debería descargar un archivo `.uf2`.

2. Conecta el Seeed Studio XIAO SAMD21 a tu PC mediante USB Type-C.

3. Entra al modo bootloader DFU usando un jumper para conectar brevemente los pines RST dos veces rápidamente. Para más referencia, consulta también [aquí](https://wiki.seeedstudio.com/es/Seeeduino-XIAO/#reset).

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-reset.gif" /></div>


4. Una unidad externa llamada `Arduino` debería aparecer en tu PC. Arrastra los archivos uf2 de CircuitPython descargados a la unidad `Arduino`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Circuitpython-XIAO/df2.png" /></div>


5. Una vez cargado el bootloader de CircuitPython, desconecta el USB Type-C y vuelve a conectar. Una nueva unidad externa llamada `CIRCUITPY` debería aparecer.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Circuitpython-XIAO/df2-2.png" /></div>

6. ¡Ahora, CircuitPython está cargado en Seeed Studio XIAO SAMD21! Todo lo que necesitas hacer es escribir tu programa python y nombrarlo `main.py` y arrastrarlo a la unidad `CIRCUITPY`.

## Fundamentos de CircuitPyhton

Ejecutando `Blink` usando CircuitPython:

**Nota:** simplemente copia y guarda el siguiente código y nómbralo `main.py`, y arrástralo a la unidad `CIRCUITPY`.

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

### Jugando con Módulos Grove

Puedes usar módulos Grove con interfaces Analógicas/Digitales simples en CircuitPython. Por ejemplo, conecta Grove - Light Sensor al puerto `A0` del Seeeduino XIAO y ejecuta lo siguiente:

```py
import time
import board
from analogio import AnalogIn

analog_in = AnalogIn(board.A0) # Pin analógico en Seeedino XIAO

def get_voltage(pin):
    return (pin.value * 3.3) / 65536
 
while True:
    print("Voltage: ", get_voltage(analog_in))
    time.sleep(0.1)
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Circuitpython-XIAO/CP.png" /></div>


Para más referencia de la API de CircuitPython, visita [**CircuitPython Essentials**](https://learn.adafruit.com/circuitpython-essentials/circuitpython-essentials).

## Recursos

- [**CircuitPython Essentials**](https://learn.adafruit.com/circuitpython-essentials/circuitpython-essentials)

- [**Installing Circuit Python on Seeed Studio Xiao SAMD21**](https://makeandymake.github.io/2020/05/02/installing-circuitpython-on-seeeduino-xiao.html)

## Soporte Técnico y Discusión de Productos


¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>