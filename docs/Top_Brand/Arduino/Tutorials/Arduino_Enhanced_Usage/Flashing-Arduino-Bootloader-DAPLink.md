---
description: Flashing the Arduino Bootloader using DAP Link
title: Flashing the Arduino Bootloader using DAP Link
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Flashing-Arduino-Bootloader-DAPLink
last_update:
  date: 1/16/2023
  author: jianjing Huang
---

# Flashing the Arduino Bootloader using DAP Link

This is the Wiki Tutorial of how to use DAP link (OpenOCD) to flash the Arduino Bootloader into Arduino Boards. If your Arduino Board's bootloader is interrupted, you can use this guide to re-flash the bootloader back.

## Preparations

1. First thing first, you must follow the [**How to use Arduino Borads as DAPLink Device**](https://wiki.seeedstudio.com/Arduino-DAPLink/) first to turn one of your SAMD boards to DAP-Link Device. Once you have configured and **uploaded the daplink Arduino ino program**, you can come back to this wiki tutorial.

2. Connect the Target Hardware with the DAP Link Device(SAMD Board) according to the Pin configurations.

     - SWO > SWO
     - CLK > CLK
     - GND > GND

It may look something like this where the Seeeduino XIAO is the DAP Link deivce and Seeeduino Cortex M0+ is the Target.

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPlink-example/examples.png"/></div>

## Get Started

In this example, Seeeduino XIAO is acted as a DAPLink device and used to flash the Arduino Bootloader for Seeeduino Lotus Cortex M0+.

- Navigate to the **root location of the Arduino Board Library Path** in Terminal and find the OpenOCD path within the path. It may look something like this:

```sh
cd ~/Library/Arduino15/packages/arduino/tools/openocd/
cd 0.10.0-arduino7/bin # Version might vary here
```

- Run the OpenOCD with specific scripts:

**Note:** You may need to change `ansonhe` to your username or adjust to your correct path.

```sh
./openocd -s ../share/openocd/scripts/ -f /Users/ansonhe/Library/Arduino15/packages/Seeeduino/hardware/samd/1.7.9/variants/arduino_zero/openocd_scripts/arduino_zero.cfg
```

If everything goes well, you should see something like this as followed:

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPlink-example/server.png"/></div>

Now the server it's up and running!

- Leave the previous terminal and open a new terminal. Also navigate to the root location of Arduino Board path. Then navigate to the arm-gcc path:

```sh
cd ~/Library/Arduino15/packages/Seeeduino/tools/arm-none-eabi-gcc/7-2017q4/bin
```

- Under this path, you can run the following:

```sh
./arm-none-eabi-gdb
```

- Once within the gdb, connect with target using:

```sh
target remote localhost:3333
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPlink-example/target.png"/></div>

- Load the Arduino Bootloader from the Arduino Board library root path:

> You may also find the bootloader for Seeed SAMD boards here: <https://github.com/Seeed-Studio/ArduinoCore-samd/tree/master/bootloaders>

**Note:** You may need to change `ansonhe` to your username or adjust to your correct path.

```sh
file /Users/ansonhe/Library/Arduino15/packages/Seeeduino/hardware/samd/1.7.9/bootloaders/zero/samd21_sam_ba.elf
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPlink-example/file.png"/></div>

- Flash the bootloader to the target:

```sh
load
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPlink-example/load.png"/></div>

- Reset the target device by pressing reset buttons and you should see that COM appeared. Now the Arduino Bootloader is flashed to Seeeduino Lotus Cortex M0+ using Seeeduino XIAO as DAPLink Device!

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPlink-example/ports.png"/></div>

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
