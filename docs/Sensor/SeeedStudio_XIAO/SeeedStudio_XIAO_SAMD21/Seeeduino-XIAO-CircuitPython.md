---
description: Seeed Studio XIAO SAMD21 with CircuitPython
title: Seeed Studio XIAO SAMD21 with CircuitPython
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Seeeduino-XIAO-CircuitPython
last_update:
  date: 1/11/2023
  author: shuxu hu
---

# CircuitPython on Seeed Studio XIAO SAMD21

<!-- ![](https://files.seeedstudio.com/wiki/Circuitpython-XIAO/XIAO-CP.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Circuitpython-XIAO/XIAO-CP.png" alt="pir" width={600} height="auto" /></p>

This wiki introduce how to install and run the official [CircuitPython](https://circuitpython.org/) by Adafruit Industries on the [Seeed Studio XIAO SAMD21 development board](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)!

CircuitPython is a programming language designed to simplify experimenting and learning to program on low-cost microcontroller boards. It makes getting started easier than ever with no upfront desktop downloads needed. Once you get your board set up, open any text editor, and get started editing code. For more info, please refer to [here](https://learn.adafruit.com/welcome-to-circuitpython/what-is-circuitpython).

## Installing CircuitPython

1. Download the official [**CircuitPython Bootloader for Seeed Studio XIAO SAMD21**](https://circuitpython.org/board/seeeduino_xiao/). A `.uf2` should be downloaded.

2. Plug-in the Seeed Studio XIAO SAMD21 to your PC via USB Type-C.

3. Entering the DFU bootloader mode by using a jumper to short connect RST Pins twice quickly. For more reference, please also see [here](https://wiki.seeedstudio.com/Seeeduino-XIAO/#reset).

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-reset.gif" /></div>


4. An external drive named `Arduino` should appear in your PC. Drag the the downloaded CircuitPython uf2 files to the `Arduino` drive.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Circuitpython-XIAO/df2.png" /></div>


5. Once loaded the CircuitPython bootloader, unplug the USB Type-C and re-connect. A new external drive called `CIRCUITPY` should appear.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Circuitpython-XIAO/df2-2.png" /></div>

6. Now, CircuitPython is loaded on Seeed Studio XIAO SAMD21! All you need to do it's to write you python program and name it `main.py` and drag it onto the `CIRCUITPY` drive.

## CircuitPyhton Basics

Running `Blink` using CircuitPython:

**Note:** simply copy and save the following code and name it `main.py`, and drag it to `CIRCUITPY` drive.

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

You should see the built-in LED starts to blink!

### Playing with Grove Modules

You can use Grove modules with simple Analog/Digital Interfaces on CircuitPython. For example, connect Grove - Light Sensor to Seeeduino XIAO's `A0` port and run the following:

```py
import time
import board
from analogio import AnalogIn

analog_in = AnalogIn(board.A0) # Analog pin on Seeedino XIAO

def get_voltage(pin):
    return (pin.value * 3.3) / 65536
 
while True:
    print("Voltage: ", get_voltage(analog_in))
    time.sleep(0.1)
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Circuitpython-XIAO/CP.png" /></div>


For more CircuitPython API reference, please visit [**CircuitPython Essentials**](https://learn.adafruit.com/circuitpython-essentials/circuitpython-essentials).

## Resourses

- [**CircuitPython Essentials**](https://learn.adafruit.com/circuitpython-essentials/circuitpython-essentials)

- [**Installing Circuit Python on Seeed Studio Xiao SAMD21**](https://makeandymake.github.io/2020/05/02/installing-circuitpython-on-seeeduino-xiao.html)

## Tech Support


Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>