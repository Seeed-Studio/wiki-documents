---
description: XIAO ESP32-C3 with MicroBlocks
title: XIAO ESP32-C3 with MicroBlocks
image: https://files.seeedstudio.com/wiki/microblocks/microblocks.png
slug: /xiao_esp32c3_microblocks
last_update:
  date: 09/09/2025
  author: MicroBlocks
---

# XIAO ESP32-C3 with MicroBlocks

## MicroBlocks

MicroBlocks is a blocks-language that makes it easy for beginners (9 years to adults) to program microcontrollers. Yet in spite of its apparent simplicity, MicroBlocks is a powerful programming language with better performance than MicroPython; the ability to control GPIO pins and interface to peripherals via I2C, SPI, and serial; and nearly 200 extension libraries. In fact, some hardware designers prefer MicroBlocks for rapid prototyping and testing because of its fast, interactive development cycle.

### XIAO ESP32C3 Pinout and Hardware Features

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-esp32c3-overview.png" style={{width:500, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-esp32c3-pinout.png" style={{width:800, height:'auto'}}/></div>

This board offers both Wi-Fi and BLE connectivity via an external antenna (provided).

The board has 11 GPIO pins (pins 0..10). Pins 0..3 can be analog inputs.

This board **not** have a built-in user LED;
connect an external LED between pin 10 and ground to use the MicroBlocks "set user LED" block.

### Installing the MicroBlocks Firmware

The MicroBlocks firmware for this board can be installed directly from the MicroBlocks editor.

Connect the board to your computer with a data USB cable (**not** a power-only cable).

Run the [MicroBlocks editor](https://microblocks.fun/run/microblocks.html) in a Chrome or Edge browser.

Enable "advanced mode" in the gear menu:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/set-advanced-mode.png" style={{width:400, height:'auto'}}/></div>

Select **install ESP firmware from microblocks.fun** from the expanded gear menu:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/install-esp-firmware.png" style={{width:400, height:'auto'}}/></div>

Select **xiao_esp32_c3**:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/install-c3.png" style={{width:200, height:'auto'}}/></div>

When prompted, use the "Connect" button (plug icon) to open a USB connection to the board. When the firmware installation process begins, a progress indicator will appear:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/download-progress.png" style={{width:200, height:'auto'}}/></div>

Firmware installation takes 30 to 60 seconds. Do not switch browser tabs until it is complete.

Once the firmware is installed, you can connect to the board to MicroBlocks and start coding!

## Bootloader Mode

It is usually not necessary to manually enter bootloader mode when installing MicroBlocks firmware on ESP32 boards.

To enter bootloader mode, if needed, hold down the B (boot) button
while pressing and releasing the R (reset) button.
You can also connect the board to your computer while holding down the B button.

## Connecting the board to MicroBlocks

Connect the board to your computer with a data USB cable (**not** a power-only cable).

Run the [MicroBlocks editor](https://microblocks.fun/run/microblocks.html) in a Chrome or Edge browser.
Click the **connect** (plug icon) button:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-button.png" style={{width:200, height:'auto'}}/></div>

Select **connect (USB)** from the menu:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-menu.png" style={{width:200, height:'auto'}}/></div>

**Note:** You can also connect wirelessly by selecting **connect (BLE)** in the connect menu.

Select your board from the dialog and click the **connect** button:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-dialog-esp.png" style={{width:400, height:'auto'}}/></div>

A green circle and the board name will appear when the board is connected:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connected-esp32c3.png" style={{width:200, height:'auto'}}/></div>

## Coding in MicroBlocks

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

## Example

Although this board does not have a built-in user LED,
if you connect an LED between pin 10 and ground, this script will blink it:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-blink.png" style={{width:200, height:'auto'}}/></div>

The [Blocks Reference](https://wiki.microblocks.fun/en/reference_manual)
includes many additional examples.

## Special Thanks

Special thanks to John at MicroBlocks for writing the article.

## MicroBlocks Resources

- [Website](https://microblocks.fun)

- [User Guide](https://wiki.microblocks.fun/en/ide)

- [Blocks Reference](https://wiki.microblocks.fun/en/reference_manual)

- [Libraries Reference](https://wiki.microblocks.fun/en/libraries)

- [Learning Guides](https://learn.microblocks.fun)
