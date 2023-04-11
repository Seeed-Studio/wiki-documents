---
description: Seeed Studio XIAO nRF52840 with CircuitPython
title: Seeed Studio XIAO nRF52840 with CircuitPython
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-BLE_CircutPython
last_update:
  date: 1/11/2023
  author: shuxu hu
---
# **Seeed Studio XIAO nRF52840 with CircuitPython**

CircuitPython is a programming language designed to simplify experimenting and learning to program on low-cost microcontroller boards. It makes getting started easier than ever with no upfront desktop downloads needed. Once you get your board set up, open any text editor, and get started editing code. It's that simple.

## **Getting Started**

### Installation

**Step 1** Enter Bootloader Mode

Before we install CircuitPython to Seeed Studio XIAO nRF52840, it requires bootloader mode. We can enter the bootloadrer mode by the clicking Reset Button twice :

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-BLE/functional2b.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/functional2b.jpg" alt="pir" width={600} height="auto" /></p>

Then the disk will show up:

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu1.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu1.png" alt="pir" width={600} height="auto" /></p>

**Step 2** Downloard the [firmware](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-Circuitpython.uf2) for Seeed Studio XIAO nRF52840

**Step 3** Drag the .urf file to the disk driver("XIAO-SENSE")

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu3.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu3.png" alt="pir" width={600} height="auto" /></p>

**Step 4** Check the disk driver if the name has changed to "CIRCUITPY".

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu2.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu2.png" alt="pir" width={600} height="auto" /></p>

Now you have successfully install the CircuitPython to the Seeed Studio XIAO nRF52840 board.

### Application

**Step 1** Download CircuitPython editor - [Mu Editor](https://codewith.mu/en/download) and open it

**Step 2** Click "Mode" and chose the mode as "CircuitPython"

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu4.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu4.png" alt="pir" width={600} height="auto" /></p>

**Step 3** Copy and upload the following codes:

```c++
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

Click "Serial" to open REPL, move the codes to REPL

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu5.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu5.png" alt="pir" width={600} height="auto" /></p>

The user LED on Seeed Studio XIAO nRF52840 then will flash.
















































































