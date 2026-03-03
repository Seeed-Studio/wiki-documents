---
description: MicroPython for Arduino-supported Boards
title: MicroPython for Arduino-supported Boards
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Compiling_MicroPython_for_embedded_devices
last_update:
  date: 1/16/2023
  author: jianjing Huang
---


# Compiling MicroPython for embedded devices

## What is MicroPython

MicroPython is a software implementation of a programming language largely compatible with Python 3, written in C, that is optimized to run on a microcontroller.

MicroPython consists of a Python compiler to bytecode and a runtime interpreter of that bytecode. The user is presented with an interactive prompt (the REPL) to execute supported commands immediately. Included are a selection of core Python libraries; MicroPython includes modules which give the programmer access to low-level hardware.

## How to build firmware (Let's use Xiao SAMD as an example)

[Seeeduino XIAO SAMD](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) already supports micropython development.

### First: Prepare the relevant software

"arm-none-linux-gnueabi" is the toolchain that can be installed in Debian-based systems using a package manager like apt (the package is called gcc-arm-linux-gnueabi). On Ubuntu the arm-none-linux-gnueabi is included in ubertooth-firmware-source , We also need to prepare the environment by installing the necessary tools such as gcc python and git make. So we execute this command

```bash
sudo apt update
sudo apt install cmake make gcc ubertooth-firmware-source python3 git 
```

### Second: Switching workspaces Cloning source code

Clone the source code and download the code for the necessary sub-modules

Execute the following statements in sequence

```bash
cd ~
git clone https://github.com/micropython/micropython
cd ~/micropython
git submodule update --init --recursive
```

The information we will download is in this file, which contains the path to the download and the address of the code repository

```bash
cat ~/micropython/.gitmodules 
```

### Third: Build the mpy-cross  , MicroPython cross-compiler

Most ports require the MicroPython cross-compiler to be built first. This program, called mpy-cross, is used to pre-compile Python scripts to .mpy files which can then be included (frozen) into the firmware/executable for a port. To build mpy-cross use:

```bash
cd ~/micropython/mpy-cross
make
```

### Next : Build external dependencies

We use the [Seeeduino XIAO SAMD](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) already supports micropython development.. It is a controller based on the arm architecture samd chip.
So we specify the version number and go to the corresponding directory and compile:

```bash
cd ~/micropython/ports/samd
BOARD=SEEED_XIAO make V=1
```

### Finally :Burning firmware

we can see the generated firmware here, we copy the firmware to the device and the micro python is available on the XIAO SAMD

```bash
ls ~/micropython/ports/samd/build-SEEED_XIAO/ |grep firmware.uf2
```

```bash
sudo cp ~/micropython/ports/samd/build-SEEED_XIAO/firmware.uf2 /media/$USER/Arduino/
```

## Test our firmware

Copy the code below and you will see the blue led flashing

```python3
from machine import Pin, Timer

led = Pin(19, Pin.OUT)
Counter = 0    
def fun(tim):
    global Counter
    Counter = Counter + 1
    state  =  Counter%2
    led.value(state)
 
tim = Timer(-1)
tim.init(period=1000, mode=Timer.PERIODIC, callback=fun)
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/XIAO_SAMD_MICROPYTHON_LED.gif" border="0" /></p>

As you can see [Seeeduino XIAO SAMD](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) already supports micropython development.

You can also refer to this process to compile micropython firmware for other devices.

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
