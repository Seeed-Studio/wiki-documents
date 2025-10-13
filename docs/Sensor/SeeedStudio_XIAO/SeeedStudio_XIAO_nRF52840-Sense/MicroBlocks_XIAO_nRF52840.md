---
description: Using XIAO nRF52840 on MicroBlocks.
title: MicroBlocks
image: https://files.seeedstudio.com/wiki/microblocks/microblocks.png
slug: /xiao_ble_microblocks
last_update:
  date: 09/09/2025
  author: MicroBlocks
---

# XIAO nRF52840 with MicroBlocks

## MicroBlocks

MicroBlocks is a blocks-language that makes it easy for beginners (9 years to adults) to program microcontrollers. Yet in spite of its apparent simplicity, MicroBlocks is a powerful programming language with better performance than MicroPython; the ability to control GPIO pins and interface to peripherals via I2C, SPI, and serial; and nearly 200 extension libraries. In fact, some hardware designers prefer MicroBlocks for rapid prototyping and testing because of its fast, interactive development cycle.

## XIAO nRF52840 Pinout and Hardware Features

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-nrf52-sense.png" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-nrf52-sense-pinout.png" style={{width:650, height:'auto'}}/></div>

A big advantage of this board is its low-power Nordic radio, which allows MicroBlocks to progran the board wirelessly via Bluetooth Low Energy (BLE).

Pins 0..10 are GPIO pins. Pins 0..5 can be analog inputs.
This board also has three tiny LEDs: red (pin 11, the user LED), blue (pin 12), and green (pin 13).
All LEDs are inverted: set the associated pin LOW to turn the LED on.

The Sense version also includes an onboard PDM microphone, temperature sensor, and 6-axis LSM6DS3TR-C IMU, which are supported by the MicroBlocks "Microphone", "Basic Sensors", and "Motion" libraries.

## Installing the MicroBlocks Firmware

To enter bootloader mode, rapidly click the reset button twice.
(The reset button is teeny-tiny, located to the left of the USB port when the port is facing upward.)

A virtual USB drive named **XIAO-SENSE** will appear.

Download the [firmware file](https://microblocks.fun/downloads/latest/vm/vm_xiao_nrf52840.uf2), from the MicroBlocks [firmware folder](https://microblocks.fun/downloads/latest/vm) then drag the file onto the virtual USB drive.

The firmware will install and, after a few seconds, the virtual USB drive will disappear.
You can ignore any warning that the disk was not ejected properly.

## Connecting the board to MicroBlocks

Connect the board to your computer with a data USB cable (**not** a power-only cable).

Run the [MicroBlocks editor](https://microblocks.fun/run/microblocks.html) in a Chrome or Edge browser.
Click the **connect** (plug icon) button:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-button.png" style={{width:200, height:'auto'}}/></div>

Select **connect (USB)** from the menu:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-menu.png" style={{width:200, height:'auto'}}/></div>

**Note:** You can also connect wirelessly by selecting **connect (BLE)** in the connect menu.

Select your board from the dialog and click the **connect** button:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-dialog-nrf.png" style={{width:400, height:'auto'}}/></div>

A green circle and the board name will appear when the board is connected:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connected-nrf.png" style={{width:200, height:'auto'}}/></div>

If your Xiao nRF52840 has its own power source, you can also connect to it without a USB cable by selecting "connect (BLE)" in the connect menu.

## Coding in MicroBlocks

MicroBlocks is a **live** coding environment so you can test as you code.
Click on blocks and scripts to run them.
Drag blocks into the scripting pane and assemble them to create scripts.

Your code is stored in persistent flash memory and can run even when the board is not connected to the MicroBlocks editor.
Scripts under a **when started** block run when the board is powered.

MicroBlocks supports concurrency. Up to ten scripts can run at the same time.

In addition to its many built-in blocks, MicroBlocks has nearly 200 libraries that support additional features and peripherals.
Click the **Add Library** button to add libraries.

## Examples

This script will blink the red user LED:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-blink.png" style={{width:200, height:'auto'}}/></div>

This script will cycle through the red, blue, and green LEDs:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-three-led-blink.png" style={{width:300, height:'auto'}}/></div>

The [Blocks Reference](https://wiki.microblocks.fun/en/reference_manual) includes many additional examples.

## Special Thanks

Special thanks to John at MicroBlocks for writing the article.

## MicroBlocks Resources

- [Website](https://microblocks.fun)

- [User Guide](https://wiki.microblocks.fun/en/ide)

- [Blocks Reference](https://wiki.microblocks.fun/en/reference_manual)

- [Libraries Reference](https://wiki.microblocks.fun/en/libraries)

- [Learning Guides](https://learn.microblocks.fun)
