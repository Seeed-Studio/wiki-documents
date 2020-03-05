# Overview

This repo introduce how to use the Grove IOs on the Wio Terminal. This allows you to enjoy the plug and play functionality of the Grove Ecosystem!

## Hardware Schematics

### Wio Terminal RPI Pinout

<div align=center><img width = 600 src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2020-03-03_12-28-09.jpg"/></div>

Wio Terminal has 40 GPIOs breaking out from the SAMD51, which has the same breakout as the Raspberry Pi!

#### *To reference defined pinout names, please check `variant.h`*

### Wio Terminal Grove Port Pinout

<div align=center><img width=400 src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2020-03-03_12-28-29.jpg"/></div>

As you can see, There are two Grove Ports available on Wio Terminal. One is the default **I2C Port** and other one is **configurable Digital/Analog Pin**, it can also be used for PWM outputs. Both Grove ports can be used as Digital.
