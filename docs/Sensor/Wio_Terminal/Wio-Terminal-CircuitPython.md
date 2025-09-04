---
description: Wio Terminal with CircuitPython
title: Wio Terminal with CircuitPython
keywords:
- Wio_terminal
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-CircuitPython
last_update:
  date: 1/31/2023
  author: jianjing Huang
---
# CircuitPython on Wio Terminal

![](https://files.seeedstudio.com/wiki/Wio-Terminal-CircuitPython/cp-wt.png)

This wiki introduce how to install and run the official [CircuitPython](https://circuitpython.org/) by Adafruit Industries on the [Seeeduino Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)!

CircuitPython is a programming language designed to simplify experimenting and learning to program on low-cost microcontroller boards. It makes getting started easier than ever with no upfront desktop downloads needed. Once you get your board set up, open any text editor, and get started editing code. For more info, please refer to [here](https://learn.adafruit.com/welcome-to-circuitpython/what-is-circuitpython).

## Installing CircuitPython

- Download the official [**CircuitPython Bootloader for Seeeduino Wio Terminal**](https://circuitpython.org/board/seeeduino_wio_terminal/). A `.uf2` should be downloaded.

- Plug-in the Seeeduino Wio Terminal to your PC via USB Type-C.

- Entering the bootloader mode by sliding the power switch twice quickly. For more reference, please also see [here](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/#faq).

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-CircuitPython/dfu.gif" /></div>

- An external drive named `Arduino` should appear in your PC. Drag the the downloaded CircuitPython uf2 files to the `Arduino` drive.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Circuitpython-XIAO/df2.png" /></div>

- Once loaded the CircuitPython bootloader, unplug the USB Type-C and re-connect. A new external drive called `CIRCUITPY` should appear.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Circuitpython-XIAO/df2-2.png" /></div>

- Now, CircuitPython is loaded on Seeeduino Wio Terminal! All you need to do it's to write you python program and name it `main.py` and drag it onto the `CIRCUITPY` drive.

You should also see the LCD on the Wio Terminal lights up, the CircuitPython also supports the native LCD display!

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-CircuitPython/LCD.gif" /></div>

## CircuitPython Basics

Running `Blink` using CircuitPython:

**Note:** simply copy and save the following code and name it `main.py`, and drag it to `CIRCUITPY` drive.

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

You should see the built-in LED starts to blink!

### Built-in Light Sensor

Run the following to obtain the built-in light sensor value:

```py
import time
import board
from analogio import AnalogIn

analog_in = AnalogIn(board.LIGHT) # Light Sensor pin on Wio Terminal

def get_voltage(pin):
    return (pin.value * 3.3) / 65536
 
while True:
    print("Light Sensor Voltage: ", get_voltage(analog_in))
    time.sleep(0.1)
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-CircuitPython/light.png" /></div>

For more CircuitPython API reference, please visit [**CircuitPython Essentials**](https://learn.adafruit.com/circuitpython-essentials/circuitpython-essentials).

## Resourses

- [**CircuitPython Essentials**](https://learn.adafruit.com/circuitpython-essentials/circuitpython-essentials)

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
