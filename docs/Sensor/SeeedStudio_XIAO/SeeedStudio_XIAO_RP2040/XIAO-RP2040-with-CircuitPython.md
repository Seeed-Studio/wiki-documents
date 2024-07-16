---
description: Seeed Studio XIAO RP2040 with CircuitPython
title: CircuitPython
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-RP2040-with-CircuitPython
last_update:
  date: 1/11/2023
  author: shuxu hu
---
# **Seeed Studio XIAO RP2040 with CircuitPython**

CircuitPython is a programming language designed to simplify experimenting and learning to program on low-cost microcontroller boards. It makes getting started easier than ever with no upfront desktop downloads needed. Once you get your board set up, open any text editor, and get started editing code. It's that simple.

## **Getting Started**

### Installation

**Step 1** Enter Bootloader Mode

Before we install CircuitPython to Seeed Studio XIAO RP2040, it requires bootloader mode. We can enter the bootloader mode by the following operation:

- Long press the "BOOT" button. (The "B" is written on the board shown to the right)
- Connect the Seeed Studio XIAO PR2040 to your computer while you still pressing the button.
- The computer then will appear a disk driver(RP1-RP2)

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg" alt="pir" width={600} height="auto" /></p>

The disk shows up(RP1-RP2):

<div align="center"><img width={150} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu.png" /></div>


**Step 2** Downloard the [firmware](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-CircuitPython.uf2) for Seeed Studio XIAO RP2040

**Step 3** Drag the .urf file to the disk driver("RP1-RP2")

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu9.png" /></div>


**Step 4** Check the disk drive if the name has changed to "CIRCUITPY".

<div align="center"><img width={150} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu2.png" /></div>


Now you have successfully installed the CircuitPython to the Seeed Studio XIAO RP2040 board.

### LED Flash Tutorial

**Step 1** Download CircuitPython editor - [Mu Editor](https://codewith.mu/en/download)

**Step 2** Open and chose the mode as "CircuitPython"

<div align="center"><img width={750} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu7.png" /></div>


**Step 3** Copy and upload the following codes:

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

Click "Serial" to open REPL, save the codes to REPL as 'code.py' or 'main.py'

<div align="center"><img width={750} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu6.png" /></div>


The user LED on Seeed Studio XIAO RP2040 then will flash.

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