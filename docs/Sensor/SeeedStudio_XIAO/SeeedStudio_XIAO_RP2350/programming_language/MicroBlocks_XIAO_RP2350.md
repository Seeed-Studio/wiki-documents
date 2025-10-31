---
description: Using XIAO RP2350 on MicroBlocks.
title: XIAO RP2350 with MicroBlocks
image: https://files.seeedstudio.com/wiki/microblocks/microblocks.png
slug: /xiao_rp2350_microblocks
last_update:
  date: 09/09/2025
  author: MicroBlocks
---

## XIAO RP2350 with MicroBlocks

### MicroBlocks

MicroBlocks is a blocks-language that makes it easy for beginners (9 years to adults) to program microcontrollers. Yet in spite of its apparent simplicity, MicroBlocks is a powerful programming language with better performance than MicroPython; the ability to control GPIO pins and interface to peripherals via I2C, SPI, and serial; and nearly 200 extension libraries. In fact, some hardware designers prefer MicroBlocks for rapid prototyping and testing because of its fast, interactive development cycle.

### XIAO RP2350 Pinout and Hardware Features

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-rp2350-pinout.png" style={{width:600, height:'auto'}}/></div><br />

Pins 0..18 are GPIO pins. (**Note: GPIO 11-18 are pads on the back of the board.**)
Pins 0..2 can be analog inputs. This board has a yellow user LED on pin 19 (inverted)
and a single RGB LED (NeoPixel) on pin 20.

### Installing the MicroBlocks Firmware

To enter bootloader mode, hold down the tiny B (boot) button while clicking the R (reset) button. A virtual USB drive named **RP2350** will appear.

Download the [firmware file](https://microblocks.fun/downloads/latest/vm/vm_xiao_rp2350.uf2),
from the [vm folder](https://microblocks.fun/downloads/latest/vm)
then drag the file onto the virtual USB drive.

The firmware will install and, after a few seconds, the virtual USB drive will disappear.
You can ignore any warning that the disk was not ejected properly.

### Connecting the board to MicroBlocks

Connect the board to your computer with a data USB cable (**not** a power-only cable).

Run the [MicroBlocks editor](https://microblocks.fun/run/microblocks.html) in a Chrome or Edge browser.
Click the **connect** (plug icon) button:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-button.png" style={{width:200, height:'auto'}}/></div>

Select **connect (USB)** from the menu:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-menu.png" style={{width:200, height:'auto'}}/></div>

Select your board from the dialog and click the **connect** button:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-dialog-rp2350.png" style={{width:200, height:'auto'}}/></div>

A green circle and the board name will appear when the board is connected:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connected-rp2350.png" style={{width:200, height:'auto'}}/></div>

### Coding in MicroBlocks

MicroBlocks is a **live** coding environment so you can test as you code.
Click on blocks and scripts to run them.
Drag blocks into the scripting pane and assemble them to create scripts.

Your code is stored in persistent flash memory and can run even when the board is
not connected to the MicroBlocks editor.
Scripts under a **when started** block run when the board is powered.

MicroBlocks supports concurrency. Up to ten scripts can run at the same time.

In addition to its many built-in blocks, MicroBlocks has nearly 200 libraries
that support additional features and peripherals.
Click the **Add Library** button to add libraries.

### Examples

This script will blink the yellow user LED:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-blink.png" style={{width:200, height:'auto'}}/></div>

This script will make the RGB NeoPixel change color:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-rp2350-neopixel.png" style={{width:200, height:'auto'}}/></div>

The [Blocks Reference](https://wiki.microblocks.fun/en/reference_manual)
includes many additional examples.

## Special Thanks

Special thanks to John at MicroBlocks for writing the article.

### MicroBlocks Resources

- [Website](https://microblocks.fun)

- [User Guide](https://wiki.microblocks.fun/en/ide)

- [Blocks Reference](https://wiki.microblocks.fun/en/reference_manual)

- [Libraries Reference](https://wiki.microblocks.fun/en/libraries)

- [Learning Guides](https://learn.microblocks.fun)
