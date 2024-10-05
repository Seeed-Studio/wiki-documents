---
description: how to use MicroPython for RP2350
title: Seeed Studio XIAO RP2350 with MicroPython
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /xiao-rp2350-micropython
sidebar_position: 1
last_update:
  date: 2024-08-08T07:21:33.838Z
  author: Spencer
draft: true
---

## Introduction

Micropython is known for ..., RP2 Family all support Micropyhon and CircuitPython
Welcome to the guide on using MicroPython with the Seeed Studio XIAO RP2350! This guide will help you get started with setting up MicroPython, writing and running your first script, and exploring the capabilities of the XIAO RP2350 using the Thonny IDE.

## What You'll Need

- Seeed Studio XIAO RP2350
- USB-C cable
- Computer with internet access
- Thonny IDE (recommended for beginners)

## Setting Up MicroPython on the XIAO RP2350

1. **Download and Install Thonny IDE**

   Thonny IDE is a beginner-friendly Python IDE that is perfect for writing and running MicroPython scripts. You can download it from [here](https://thonny.org/).

2. **Install MicroPython Firmware**

   To use MicroPython on the XIAO RP2350, you need to flash the MicroPython firmware onto the board.

   - Download the latest MicroPython firmware for RP2040 from the [official site](https://micropython.org/download/rp2-pico/).
   - Connect the XIAO RP2350 to your computer while holding the BOOTSEL button to enter the bootloader mode.
   - Drag and drop the downloaded `.uf2` file onto the RP2040 storage device that appears.

3. **Configure Thonny IDE**

   - Open Thonny IDE.
   - Go to `Tools` > `Options` > `Interpreter`.
   - Select `MicroPython (Raspberry RP2350)` as the interpreter and select the corresponding COM port.

## Writing Your First MicroPython Script

1. **Hello, World!**

   Let's start with a simple script to print "Hello, World!" to the console.

   ```python
   print("Hello, World!")
   ```

2. **Running the Script**

   - Type the script in the Thonny editor.
   - Click the `Run` button or press `F5`.
   - You should see "Hello, World!" printed in the console.

## Exploring GPIO Control

Let's explore how to control the GPIO pins on the XIAO RP2350 with MicroPython.

1. **Blinking an LED**

   Connect an LED to a GPIO pin (e.g., GP25) with a suitable resistor.

   ```python
   import machine
   import time

   led = machine.Pin(25, machine.Pin.OUT)

   while True:
       led.value(1)  # Turn LED on
       time.sleep(1)
       led.value(0)  # Turn LED off
       time.sleep(1)
   ```

2. **Running the LED Blinking Script**

   - Type the script in the Thonny editor.
   - Click the `Run` button or press `F5`.
   - The LED should start blinking on and off.

## Additional Resources

- [Thonny IDE Setup Guide](https://raspberrytips.com/thonny-ide-raspberry-pi/)
- [Raspberry Pi Documentation](https://www.raspberrypi.com/documentation/microcontrollers/micropython.html)
- [Raspberry Pi Pico-series Python SDK](https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-python-sdk.pdf)

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>