---
description: Using XIAO ESP32-S3 on MicroBlocks.
title: MicroBlocks
image: https://files.seeedstudio.com/wiki/microblocks/microblocks.webp
slug: /xiao_esp32s3_microblocks
last_update:
  date: 09/09/2025
  author: MicroBlocks
---

# XIAO ESP32-S3 with MicroBlocks

## MicroBlocks

MicroBlocks is a blocks-language that makes it easy for beginners (9 years to adults) to program microcontrollers. Yet in spite of its apparent simplicity, MicroBlocks is a powerful programming language with better performance than MicroPython; the ability to control GPIO pins and interface to peripherals via I2C, SPI, and serial; and nearly 200 extension libraries. In fact, some hardware designers prefer MicroBlocks for rapid prototyping and testing because of its fast, interactive development cycle.

## XIAO ESP32S3 Pinout and Hardware Features

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-esp32-s3-sense-overview.png" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-esp32s3-sense-pinout.jpg" style={{width:600, height:'auto'}}/></div>

This board offers both Wi-Fi and BLE connectivity via an external antenna (provided).

The board has 11 GPIO pins (pins 0..10).
The Sense version has two extra GPIO pins on the camera board (pins 11..12).
Pins 0..5 and 8..10 can be analog inputs.

Pin 13 is the yellow user LED (inverted).

The Sense version includes an extension board with a camera (either an OV2640 camera with 1600x1200 resolution or an OV3660 with 2048x1536 resolution) and a digital microphone.

**Note: Camera support has not yet been implemented in MicroBlocks but may be added in the future.**

## Installing the MicroBlocks Firmware

The MicroBlocks firmware for this board can be installed directly from the MicroBlocks editor.

Connect the board to your computer with a data USB cable (**not** a power-only cable).

Run the [MicroBlocks editor](https://microblocks.fun/run/microblocks.html) in a Chrome or Edge browser.

Enable "advanced mode" in the gear menu:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/set-advanced-mode.png" style={{width:400, height:'auto'}}/></div>

Select **install ESP firmware from microblocks.fun** from the expanded gear menu:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/install-esp-firmware.png" style={{width:400, height:'auto'}}/></div>

Select **xiao esp32 s3**:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/install-s3.png" style={{width:200, height:'auto'}}/></div>

When prompted, use the "Connect" button (plug icon) to open a USB connection to the board. When the firmware installation process begins, a progress indicator will appear:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/download-progress.png" style={{width:200, height:'auto'}}/></div>

Firmware installation takes 30 to 60 seconds. Do not switch browser tabs until it is complete.

Once the firmware is installed, you can connect to the board to MicroBlocks and start coding!

## Bootloader Mode

It is usually not necessary to manually enter bootloader mode when installing MicroBlocks firmware on ESP32 boards.

To enter bootloader mode, if needed, hold down the B (boot) button while pressing and releasing the R (reset) button.
You can also connect the board to your computer while holding down the B button.

**The tiny B and R buttons on either side of the USB connector are tricky;
you may need to use your fingernail or a small tool to press them.**

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

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connected-esp32s3.png" style={{width:200, height:'auto'}}/></div>

## Coding in MicroBlocks

MicroBlocks is a **live** coding environment so you can test as you code.
Click on blocks and scripts to run them.
Drag blocks into the scripting pane and assemble them to create scripts.

Your code is stored in persistent flash memory and can run even when the board is not connected to the MicroBlocks editor.
Scripts under a **when started** block run when the board is powered.

MicroBlocks supports concurrency. Up to ten scripts can run at the same time.

In addition to its many built-in blocks, MicroBlocks has nearly 200 libraries
that support additional features and peripherals.
Click the **Add Library** button to add libraries.

## Example

This script will blink the yellow user LED:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-blink.png" style={{width:200, height:'auto'}}/></div>

The [Blocks Reference](https://wiki.microblocks.fun/en/reference_manual) includes many additional examples.

## Project Demo

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Vjjg3Hfl_UA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div><br/>
For a more comprehensive demonstration, maker [Zeller](https://www.hackster.io/Zeller) has created a Mood Player using the XIAO ESP32S3, XIAO Expansion Board, along with Grove Speaker and Grove Button accessories. With MicroBlocks, you can create your favorite patterns and music without writing complex code. A step-by-step tutorial with detailed instructions can be found on [Hackster](https://www.hackster.io/Zeller/mood-player-2426ef).

## Special Thanks

Special thanks to John at MicroBlocks for writing the article.

## MicroBlocks Resources

- [Website](https://microblocks.fun)

- [User Guide](https://wiki.microblocks.fun/en/ide)

- [Blocks Reference](https://wiki.microblocks.fun/en/reference_manual)

- [Libraries Reference](https://wiki.microblocks.fun/en/libraries)

- [Learning Guides](https://learn.microblocks.fun)
