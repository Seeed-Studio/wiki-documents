---
description: How to Debug Arduino Boards using SWD Interface
title: How to Debug Arduino Boards using SWD Interface
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Software-SWD
last_update:
  date: 1/16/2023
  author: jianjing Huang
---
# How to Debug Arduino Boards using SWD Interface

In this wiki, you will learn how to use **SWD Interface to debug your Arduino boards via the J-Link Debug Programmer**. For reference, Wio Terminal is used as the hardware to demonstrate the debugging process.

<div align="center"><img src="https://files.seeedstudio.com/wiki/SWD/SWD-Interface.png"/></div>

### What is SWD Debugging

**SWD**, also known as [Serial Wire Debug](https://developer.arm.com/architectures/cpu-architecture/debug-visibility-and-trace/coresight-architecture/serial-wire-debug) is a 2-pin interface (SWDIO/SWCLK) of which it's also an alternative JTAG interface that has the same JTAG protocol. SWD uses an ARM CPU standard bi-directional wire protocol, defined in the ARM Debug programmer.

## Hardware Connection

Before you start, you will need the following materials:

1. [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) (or Other Arduino Boards with SWD Interface)

2. [**J-Link Debug Programmer**](https://www.segger.com/products/debug-probes/j-link/)

### Wio Terminal SWD Interface

<div align="center"><img src="https://files.seeedstudio.com/wiki/SWD/SWD-connection.png"/></div>

For Wio Terminal, the SWD interface pads are on the bottom of the front side of Wio Terminal (Bare PCBA without casing). There are three jumper wires that need to be led out:

- **SWCLK**
- **SWDIO**
- **GND**

Once the jumper wires are soldered on, we can connect them to the J-Link Debug programmer following the SWD Pin Map:

<div align="center"><img src="https://files.seeedstudio.com/wiki/SWD/pinout.png"/></div>

Connect as followed:

- **`SWCLK`** (Wio Terminal) -> **`SWCLK`** (J-Link Debug Programmer Pin 7)
- **`SWDIO`** (Wio Terminal) -> **`SWDIO`** (J-Link Debug Programmer Pin 9)
- **`GND`** (Wio Terminal) -> **`GND`** (J-Link Debug Programmer Pin 4)

## Installing J-Link GDB Server for Debugging

To debug with J-Link Debug programmer, you will need to download the [**J-Link GDB Server**](https://www.segger.com/products/debug-probes/j-link/tools/j-link-gdb-server/about-j-link-gdb-server/). Download and install according to your OS.

## Arduino Set-up

Before launching J-Link GDB Server, you will also need to open `Arduino` IDE for later configurations.

### 1. Obtaining the Arduino Sketch ELF File Path

In the settings of Arduino IDE, make sure that the **Show verbose output during compilation and upload** are both ticked.

Under the Arduino sketch you want to debug, click **Compile** (select Wio Termianl as board), and check the log information to get the path of the `.elf` file location. Let's take `Blink`
 as example:

<div align="center"><img src="https://files.seeedstudio.com/wiki/SWD/elf.png"/></div>

Copy this path and it will be used later for GDB.

For example, in my case:

```sh
/var/folders/7g/10kskmw90bg08j_g_r7flwq40000gn/T/arduino_build_633418/Blink.ino.elf
```

### 2. Obtain the GCC Path

Under the same sketch compile log information, you can also find the GCC path used by Arduino of which also can be used for J-Link Debug Programmer later.

<div align="center"><img src="https://files.seeedstudio.com/wiki/SWD/GCC.png"/></div>

For example, in my case:

```sh
/Users/ansonhe/Library/Arduino15/packages/Seeeduino/tools/arm-none-eabi-gcc/7-2017q4/bin
```

## Getting Started with J-Link GDB Server

Connect the J-Link Debug Programmer to the PC and also power Wio Terminal from the USB port. Launch the **J-Link GDB Server**, select the following settings:

- Connection to J-Link: **USB**
- Target Device: **Cortex-M4**
- Target Interface: **SWD**

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/SWD/GDB-launch.png"/></div>

Select **OK** and if everything goes well you should see the following screen:

<div align="center"><img src="https://files.seeedstudio.com/wiki/SWD/GDB-ready.png"/></div>

You should see that the listening port will appear and the J-Link GDB server is up and ready!

## Launching a GDB Client

Now you can launch the GDB Client by using the path we've saved earlier from the GCC path in Arduino. Open Terminal and paste the copied path + `/arm-none-eabi-gdb`:

For Example: `/Users/ansonhe/Library/Arduino15/packages/Seeeduino/tools/arm-none-eabi-gcc/7-2017q4/bin/arm-none-eabi-gdb`

Run the following commands under gdb:

1. `target remote localhost:2331`
2. `monitor device Cortex-M4`
3. `monitor speed auto`
4. `file` + Arduino Sketch ELF File Path, i.e. `file /var/folders/7g/10kskmw90bg08j_g_r7flwq40000gn/T/arduino_build_633418/Blink.ino.elf`
5. `load`
6. `monitor reset`

Now you can use GDB to debug your Arduino Sketch!

<div align="center"><img src="https://files.seeedstudio.com/wiki/SWD/GDB-connected.png"/></div>

### `.gdbinit` Method

You can also create a `.gdbinit` file, copy the following and save it in the `~/` location to avoid keep repeating setting process for gbd.

```
target remote localhost:2331
monitor device Cortex-M4
monitor speed auto
file /var/folders/7g/10kskmw90bg08j_g_r7flwq40000gn/T/arduino_build_633418/Blink.ino.elf
load
monitor reset
```

Now if you just launch the GDB client and you can start debugging straight away!

## Debugging

Some useful commands for GDB:

- `continue/cont`
- `ctrl`+`c`
- `next`
- `break`
- `info break`
- `clear`
- `delete`
- `list`

## Resources

- [Official GNU GDB Documentation](https://www.gnu.org/software/gdb/documentation/)

- [GNU GDB Debugger Command Cheat Sheet](http://www.yolinux.com/TUTORIALS/GDB-Commands.html)

## FAQ

**Q1. How to take off the enclosure of Wio Terminal?**

**A1.** First, take out the 4 rubber pads of 4 corner, and you will see 2 screws that holds the Wio Terminal enclosure together. Simply unscrew them and you can take it apart.

<div align="center"><img width ="{450}" src="https://files.seeedstudio.com/wiki/SWD/WT.png"/></div>
