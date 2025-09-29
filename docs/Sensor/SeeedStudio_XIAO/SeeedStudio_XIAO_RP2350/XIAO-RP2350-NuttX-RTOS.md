---
description: XIAO RP2350 With NuttX(RTOS)
title: XIAO RP2350 With NuttX(RTOS)
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/XIAO-nRF52840-NuttX/nuttx.webp
slug: /xiao_rp2350_nuttx
sidebar_position: 3
last_update:
    date: 03/11/2025
    author: rcsim
---

# Seeed Studio XIAO RP2350 with NuttX(RTOS)

:::note

Due to changes in software versions, some steps in this documentation may no longer be accurate or up-to-date.

:::

## Introduction

[NuttX](https://nuttx.apache.org/) is a mature real-time operating system (RTOS) widely recognized for its standards compliance and small footprint. One of NuttX's main features is its scalability, which allows it to be used in environments ranging from 8-bit microcontrollers to 64-bit systems. This flexibility is achieved through adherence to POSIX and ANSI standards, enabling you to experiment with similar NuttX features across a wide range of chips from different architectures, families, and semiconductor vendors.

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/NuttX/nuttx.svg"/></div>

Additionally, NuttX offers many advanced and useful features, such as USB, Ethernet, Audio, and Graphics subsystems. These characteristics make NuttX an attractive choice for developers seeking a versatile, robust RTOS capable of operating on various types of hardware.

NuttX supports a vast and continually expanding number of boards. [The official documentation](https://nuttx.apache.org/docs/latest/platforms/) provides a comprehensive list of supported boards, organized by architecture and System-on-Chip (SoC) series.

For instance, the [Seeed Studio XIAO RP2350](https://nuttx.apache.org/docs/latest/platforms/arm/rp23xx/boards/xiao-rp2350/index.html) page in the NuttX documentation offers detailed descriptions of each supported feature and instructions on how to utilize them. Also there is a specific page in the NuttX documentation for [Raspberry Pi RP2350](https://nuttx.apache.org/docs/latest/platforms/arm/rp23xx/index.html) series chips.

## Installation

The Nuttx documentation provides a [guide](https://nuttx.apache.org/docs/latest/quickstart/install.html) to different platforms.For Seeed Studio XIAO RP2350 please follow these steps:

1. Download picotool tools (optional):

    ```bash
    git clone https://github.com/raspberrypi/picotool.git picotool
    cd picotool
    mkdir build
    cd build
    cmake ..
    make
    cp picotool ~/local/bin # somewhere in your PATH
    ```

2. Create a workspace

    ```bash
    mkdir nuttxspace
    ```

3. Clone the repositories

    ```bash
    cd nuttxspace
    git clone https://github.com/apache/nuttx.git nuttx
    git clone https://github.com/apache/nuttx-apps apps
    ```

The Apache Nuttx it's divided into two project:

- Nuttx: contains implemented the kernel, driver and subsystems.
- Apps: contains a collection of tools, shells, network utilities, libraries and interpreters.

## Applications

To start an application it's necessary to load a configuration on NuttX, calling the command:

```bash
./tools/configure.sh board_name:your_application
```

Also it's possible to check the list of board-supported a running the command:

```bash
./tools/configure.sh -L
```

4. Build NuttX (build process will generate the firmware binaries, including nuttx.uf2):

    ```bash
    cd nuttx
    make distclean
    ./tools/configure.sh xiao-rp2350:nsh
    make V=1
    ```

5. Load the firmware using picotool:

    ```bash
    picotool load nuttx -t elf
    ```

6. The RESET and BOOT buttons can be used to enter bootloader mode by press and hold BOOT buttons and then press and release RESET button. Then, the board will enumerate as a storage device to a computer connected via USB. Saving a .UF2 file to this device will replace the Flash ROM contents on the RP2350.

## Hands-on

It's time to explore NuttX practically. In this session, three applications are available: NSH, USBNSH, and COMBO.

### NSH

The NuttShell(NSH) is a shell system to be used in NuttX, similar to bash and other similar options. It supports a rich set of included commands, scripting and the ability to run your own applications as “builtin” (part of the same NuttX binary). The NSH configuration enables console at UART0 using 115200 bps.

We can start the build process clearing the previous configuration

```bash
cd ~/nuttxspace/nuttx
make distclean
```

Now we select the NSH configuration to the xiao-rp2350 board:

```bash
./tools/configure.sh xiao-rp2350:nsh
```

Compile the source code.

```bash
make -j
```

Load the firmware into you board and connect the USB-to-Serial to TX and RX pins, then run a serial communication program such as minicon or picocom:

```bash
picocom -b 115200 /dev/ttyUSB0
```

Access the NuttShell console:

```bash
NuttShell (NSH) NuttX-12.8.0
nsh> 
```

Typing `?`, you will access the available options for commands and built-in applications.

```bash
nsh> ?
help usage: [-v] [<cmd>]

    .           cp          exec        ls          reboot      truncate    
    [           cmp         exit        mkdir       rm          uname       
    ?           dirname     expr        mkrd        rmdir       umount      
    alias       date        false       mount       set         unset       
    unalias     dd          fdinfo      mv          sleep       uptime      
    basename    df          free        pidof       source      usleep      
    break       dmesg       help        printf      test        xd          
    cat         echo        hexdump     ps          time        
    cd          env         kill        pwd         true        

Builtin Apps:
    getprime    hello       nsh         ostest      sh 
```

Let's say hello to NuttX, type `hello` and then it executes the command:

```bash
nsh> hello
Hello, World!!
```

Congratulations, your first interation with NuttX was completed.

### USBNSH

Similar to NSH configuration, but using CDC/ACM serial (console enabled in USB Port, at 115200 bps).

We can start the build process clearing the previous configuration

```bash
cd ~/nuttxspace/nuttx
make distclean
```

Now we select the NSH configuration to the xiao-rp2350 board:

```bash
./tools/configure.sh xiao-rp2350:usbnsh
```

Compile the source code.

```bash
make -j
```

Load the firmware into you board, run a serial communication program such as minicon or picocom:

```bash
picocom -b 115200 /dev/ttyACM0
```

You must to press Enter 3 times, and then this message will show in the terminal.

```bash
NuttShell (NSH) NuttX-12.8.0
nsh> 
```

### COMBO

This configuration enables three example applications, gpio, leds and ws2812. The General Purpose Input/Output (GPIO) is a microcontroller's most fundamental part, allowing it to connect to the external world. This way we will use the NSH to access and configure those pins as we wish. But first, let's clear the previous configuration.

```bash
cd ~/nuttxspace/nuttx
make distclean
```

Select the combo configuration to the xiao-rp2350 board.

```bash
./tools/configure.sh xiao-rp2350:combo
```

Compile de the source code.

```bash
make -j
```

Load the firmware into you board, run a serial communication program such as minicon or picocom:

```bash
picocom -b 115200 /dev/ttyUSB0
```

```bash
NuttShell (NSH) NuttX-12.8.0
nsh>
```

To check which options are accepted to interact with this application, type `gpio -h`, and it will return a list of parameters.

```bash
NuttShell (NSH) NuttX-12.8.0
nsh> gpio -h
USAGE: gpio [-t <pintype>] [-w <signo>] [-o <value>] <driver-path>
       gpio -h
Where:
 <driver-path>: The full path to the GPIO pin driver.
 -t <pintype>:  Change the pin to this pintype (0-10):
 -w <signo>:    Wait for a signal if this is an interrupt pin.
 -o <value>:    Write this value (0 or 1) if this is an output pin.
mation and exit.
Pintypes:
  0: GPIO_INPUT_PIN
  1: GPIO_INPUT_PIN_PULLUP
IO_INPUT_PIN_PULLDOWN
  3: GPIO_OUTPUT_PIN
  4: GPIO_OUTPUT_PIN_OPENDRAIN
  5: GPIO_INTERRUPT_PIN
  6: GPIO_INTERRUPT_HIGH_PIN
  7: GPIO_INTERRUPT_LOW_PIN
  8: GPIO_INTERRUPT_RISING_PIN
  9: GPIO_INTERRUPT_FALLING_PIN
 10: GPIO_INTERRUPT_BOTH_PIN
```

To confirm the GPIO device files were created, type `ls/dev`. After typing, you can see some gpios were declared define on boards/arm/rp23xx/xiao-rp2350/include/board.h, which represent :

- On board LED:
  - Yellow            -> GPIO25
 
- GPIOs
  - 1 Input           -> GPIO27
  - 1 Interrupt Input -> GPIO26
  - 1 Output          -> GPIO28

```bash
nsh> ls /dev
/dev:
 console
 gpio26
 gpio27
 gpio28
 leds0
 null
 ttyS0
 userleds
 zero
nsh> 
```

Following these commands to read gpio27 and gpio26 (with interruption) and write at gpio28.

```bash
nsh> gpio -w 1 /dev/gpio26
Driver: /dev/gpio26
  Interrupt pin: Value=0
  Verify:        Value=0
nsh> gpio /dev/gpio27
Driver: /dev/gpio27
  Input pin:     Value=0
nsh> gpio /dev/gpio27
Driver: /dev/gpio27
  Input pin:     Value=1
nsh> gpio -o 1 /dev/gpio28
Driver: /dev/gpio28
  Output pin:    Value=0
  Writing:       Value=1
  Verify:        Value=1
nsh> gpio -o 0 /dev/gpio28
Driver: /dev/gpio28
  Output pin:    Value=1
  Writing:       Value=0
  Verify:        Value=0
```

The USERLEDS is a subsystem that allows to control of the LEDs with single operation. Also, you can use commands-line like the printf. In this demo we will turn on and turn off the Yellow LED on-board each 1 seconds.

Typing `leds`, you observe the LEDs blinky same time.

```bash
NuttShell (NSH) NuttX-12.8.0
nsh> leds
leds_main: Starting the led_daemon
leds_main: led_daemon started

led_daemon (pid# 3): Running
led_daemon: Opening /dev/userleds
led_daemon: Supported LEDs 0x01
led_daemon: LED set 0x01
nsh> led_daemon: LED set 0x00
led_daemon: LED set 0x01
led_daemon: LED set 0x00
led_daemon: LED set 0x01
led_daemon: LED set 0x00
```

The Seeed Studio XIAO RP2350 also has a WS2812 addressable LED that can be tested using ws2812 application:
```bash
NuttShell (NSH) NuttX-12.8.0
nsh> ws2812
```


Check the video below with the demo for gpio, leds and ws2812 example:

<div style={{ maxWidth: '100%', textAlign: 'center' }}>
  <video style={{ width: '100%', height: 'auto' }} controls>
    <source src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/Nuttx/xiao-rp2350-nuttx-demo.mp4" type="video/mp4" />
  </video>
</div>


For more information about NuttX RTOS, please visit [NuttX Documentation](https://nuttx.apache.org/docs/latest/index.html)

## ✨ Contributor Project

- This project is supported by the Seeed Studio [Contributor Project](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479).
- A special thanks to [Rodrigo](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=92947609) for his dedicated efforts. Your work will be [exhibited](https://wiki.seeedstudio.com/contributors/).

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
