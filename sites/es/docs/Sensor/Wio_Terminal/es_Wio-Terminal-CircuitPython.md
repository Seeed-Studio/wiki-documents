---
description: Wio Terminal con CircuitPython
title: Wio Terminal con CircuitPython
keywords:
- Wio_terminal
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-CircuitPython
last_update:
  date: 1/31/2023
  author: jianjing Huang
---
# CircuitPython en Wio Terminal

![](https://files.seeedstudio.com/wiki/Wio-Terminal-CircuitPython/cp-wt.png)

¡Esta wiki introduce cómo instalar y ejecutar el [CircuitPython](https://circuitpython.org/) oficial de Adafruit Industries en el [Seeeduino Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)!

CircuitPython es un lenguaje de programación diseñado para simplificar la experimentación y el aprendizaje de programación en placas de microcontroladores de bajo costo. Hace que comenzar sea más fácil que nunca sin necesidad de descargas previas en el escritorio. Una vez que configures tu placa, abre cualquier editor de texto y comienza a editar código. Para más información, consulta [aquí](https://learn.adafruit.com/welcome-to-circuitpython/what-is-circuitpython).

## Instalando CircuitPython

- Descarga el [**Bootloader de CircuitPython oficial para Seeeduino Wio Terminal**](https://circuitpython.org/board/seeeduino_wio_terminal/). Se debería descargar un archivo `.uf2`.

- Conecta el Seeeduino Wio Terminal a tu PC mediante USB Type-C.

- Entra al modo bootloader deslizando el interruptor de encendido dos veces rápidamente. Para más referencia, consulta también [aquí](https://wiki.seeedstudio.com/es/Wio-Terminal-Getting-Started/#faq).

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-CircuitPython/dfu.gif" /></div>

- Una unidad externa llamada `Arduino` debería aparecer en tu PC. Arrastra los archivos uf2 de CircuitPython descargados a la unidad `Arduino`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Circuitpython-XIAO/df2.png" /></div>

- Una vez cargado el bootloader de CircuitPython, desconecta el USB Type-C y vuelve a conectar. Una nueva unidad externa llamada `CIRCUITPY` debería aparecer.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Circuitpython-XIAO/df2-2.png" /></div>

- ¡Ahora, CircuitPython está cargado en el Seeeduino Wio Terminal! Todo lo que necesitas hacer es escribir tu programa de python, nombrarlo `main.py` y arrastrarlo a la unidad `CIRCUITPY`.

También deberías ver que la LCD del Wio Terminal se enciende, ¡CircuitPython también soporta la pantalla LCD nativa!

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-CircuitPython/LCD.gif" /></div>

## Fundamentos de CircuitPython

Ejecutando `Blink` usando CircuitPython:

**Nota:** simplemente copia y guarda el siguiente código, nómbralo `main.py`, y arrástralo a la unidad `CIRCUITPY`.

```py
import time
import board
from digitalio import DigitalInOut, Direction

led = DigitalInOut(board.D13)
led.direction = Direction.OUTPUT

while True:
    led.value = True
    print("LED ON")
    time.sleep(1)
    led.value = False
    print("LED OFF")
    time.sleep(1)
```

¡Deberías ver que el LED integrado comienza a parpadear!

### Sensor de Luz Integrado

Ejecuta lo siguiente para obtener el valor del sensor de luz integrado:

```py
import time
import board
from analogio import AnalogIn

analog_in = AnalogIn(board.LIGHT) # Pin del sensor de luz en Wio Terminal

def get_voltage(pin):
    return (pin.value * 3.3) / 65536
 
while True:
    print("Light Sensor Voltage: ", get_voltage(analog_in))
    time.sleep(0.1)
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-CircuitPython/light.png" /></div>

Para más referencia de la API de CircuitPython, visita [**Fundamentos de CircuitPython**](https://learn.adafruit.com/circuitpython-essentials/circuitpython-essentials).

## Recursos

- [**Fundamentos de CircuitPython**](https://learn.adafruit.com/circuitpython-essentials/circuitpython-essentials)

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
