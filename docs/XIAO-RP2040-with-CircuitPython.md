---
name: XIAO RP2040
category: Development Board
bzurl: 
prodimagename:
surveyurl: 
sku: 102010328
tags:
---

# **XIAO RP2040 with CircuitPython**

"[CircuitPython](https://github.com/adafruit/circuitpython) is a derivative of [MicroPython](https://micropython.org/) designed to simplify experimentation and education on low-cost microcontrollers. It makes it easier than ever to get prototyping by requiring no upfront desktop software downloads. Simply copy and edit files on the **CIRCUITPY** drive to iterate." —— The Adafruit

## **Installing CircuitPython**

Because the XIAO RP2040 uses the same chip as the Raspberry Pi Pico (RP2040), you can refer to the"
[Getting Started with Raspberry Pi Pico and CircuitPython](https://learn.adafruit.com/getting-started-with-raspberry-pi-pico-circuitpython/circuitpython) "to install CircuitPython

## **Installing Mu Editor**

Mu is a simple code editor that works with the Adafruit CircuitPython boards. It's written in Python and works on Windows, MacOS, Linux and Raspberry Pi. The serial console is built right in so you get immediate feedback from your board's serial output!  You can [check out Adafruit's tutorial here](https://learn.adafruit.com/getting-started-with-raspberry-pi-pico-circuitpython/installing-mu-editor).

## **CircuitPython Programming Basics**

You can [jump to Adafruit to learn the basics of CircuitPython](https://learn.adafruit.com/getting-started-with-raspberry-pi-pico-circuitpython/circuitpython-programming-basics)

## **CircuitPython Pins**

![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/circuitpython/XIAO-RP2040-Pin.jpg)

```c++
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

For more information, see Adafruit's official documentation: https://learn.adafruit.com/getting-started-with-raspberry-pi-pico-circuitpython/circuitpython-pins-and-modules






































































































