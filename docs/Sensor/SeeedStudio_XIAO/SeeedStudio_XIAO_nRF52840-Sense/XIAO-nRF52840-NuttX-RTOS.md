---
description: XIAO nRF52840(sense) With NuttX(RTOS)
title: XIAO nRF52840(sense) With NuttX(RTOS)
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/XIAO-nRF52840-NuttX/nuttx.webp
slug: /xiao_nrf52840_nuttx
last_update:
    date: 02/12/2025
    author: rcsim
---

# Seeed Studio XIAO nRF52840 with NuttX(RTOS)

## Introduction

[NuttX](https://nuttx.apache.org/) is a mature real-time operating system (RTOS) widely recognized for its standards compliance and small footprint. One of NuttX's main features is its scalability, which allows it to be used in environments ranging from 8-bit microcontrollers to 64-bit systems. This flexibility is achieved through adherence to POSIX and ANSI standards, enabling you to experiment with similar NuttX features across a wide range of chips from different architectures, families, and semiconductor vendors.

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO-nRF52840-NuttX/nuttx.svg"/></div>

Additionally, NuttX offers many advanced and useful features, such as USB, Ethernet, Audio, and Graphics subsystems. These characteristics make NuttX an attractive choice for developers seeking a versatile, robust RTOS capable of operating on various types of hardware.

NuttX supports a vast and continually expanding number of boards. [The official documentation](https://nuttx.apache.org/docs/latest/platforms/) provides a comprehensive list of supported boards, organized by architecture and System-on-Chip (SoC) series.

For instance, the [Seeed Studio Xiao nRF52840](https://nuttx.apache.org/docs/latest/platforms/arm/nrf52/boards/xiao-nrf52840/index.html) page in the NuttX documentation offers detailed descriptions of each supported feature and instructions on how to utilize them. Also there is a specific page in the NuttX documentation for [Nordic Semiconductor nRF52](https://nuttx.apache.org/docs/latest/platforms/arm/nrf52/index.html) series chips.

## Tools Setup

The first step to get started with NuttX on XIAO nRF52840 is to install UF2 Tools required to convert the hex file format to uf2, then download NuttX source code itself. The Nuttx provides a [guide](https://nuttx.apache.org/docs/latest/quickstart/install.html) to different platforms. Follow these steps:

1. Download UF2 Tools:

    ```bash
    git clone https://github.com/microsoft/uf2.git
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
./tools/configurate.sh board_name:your_application
```

Also it's possible to check the list of board-supported a running the command:

```bash
./tools/configurate.sh -L
```

4. Build NuttX

    ```bash
    cd nuttx
    make distclean
    ./tools/configure.sh xiao-nrf52840:nsh
    make V=1
    ```

5. Convert nuttx.hex to UF2 format using U2F Tools:

    ```bash
    python3 uf2/utils/uf2conv.py -c -f 0xADA52840 -i nuttx.hex -o nuttx.uf2
    ```

6. Connect the Seeed Studio XIAO nRF52840, and enter bootloader mode by rapidly clicking it twice. The board will be detected as a USB Mass Storage Device. Then copy “nuttx.uf2” into the device.

## Hands-on

It's time to explore NuttX practically. In this session, three applications are available: NSH, USBNSH, and JUMBO.

### NSH

The NuttShell(NSH) is a shell system to be used in NuttX, similar to bash and other similar options. It supports a rich set of included commands, scripting and the ability to run your own applications as “builtin” (part of the same NuttX binary). The NSH configuration enables console at UART0 using 115200 bps.

We can start the build process clearing the previous configuration

```bash
cd ~/nuttxspace/nuttx
make distclean
```

Now we select the NSH configuration to the xiao-nrf5200 board:

```bash
./tools/configurate.sh xiao-nrf52840:nsh
```

Compile the source code.

```bash
make -j
```

Convert nuttx.hex to UF2 format using U2F Tools:

```bash
python3 uf2/utils/uf2conv.py -c -f 0xADA52840 -i nuttx.hex -o nuttx.uf2
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

Now we select the NSH configuration to the xiao-nrf5200 board:

```bash
./tools/configurate.sh xiao-nrf52840:usbnsh
```

Compile the source code.

```bash
make -j
```

Convert nuttx.hex to UF2 format using U2F Tools:

```bash
python3 uf2/utils/uf2conv.py -c -f 0xADA52840 -i nuttx.hex -o nuttx.uf2
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

### JUMBO

This configuration enables two example applications, gpio and leds. The General Purpose Input/Output (GPIO) is a microcontroller's most fundamental part, allowing it to connect to the external world. This way we will use the NSH to access and configure those pins as we wish. But first, let's clear the previous configuration.

```bash
cd ~/nuttxspace/nuttx
make distclean
```

Select the jumbo configuration to the xiao-nrf52840 board.

```bash
./tools/configurate.sh xiao-nrf52840:jumbo
```

Compile de the source code.

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

To confirm the GPIO device files were created, type `ls/dev`. After typing, you can see some gpios were declared define on [xiao-nrf52840.h](https://github.com/apache/nuttx/blob/5b9d535ce6d7089a55742a748d7111f31ec74204/boards/arm/nrf52/xiao-nrf52840/src/xiao-nrf52840.h#L61), which represent :

- RGB LED On board:

  - RGB_RED   -> P0.26
  - RGB_GREEN -> P0.30
  - RGB_BLUE  -> P0.06

- GPIOs
  - 1 Intput          - P0.02(/dev/gpio0)
  - 1 Interrupt Input - P0.03(/dev/gpio2)
  - 1 Output          - P0.28(/dev/gpio1)

```bash
nsh> ls /dev
/dev:
 console
 gpio0
 gpio1
 gpio2
 null
 ttyACM0
 userleds
 zero
nsh> 
```

Following these commands to read gpio0 and gpio2 (with interruption) and write at gpio1.

```bash
nsh> gpio /dev/gpio0
Driver: /dev/gpio0
  Input pin:     Value=0
nsh> gpio /dev/gpio0
Driver: /dev/gpio0
  Input pin:     Value=1

nsh> gpio -o 0 /dev/gpio1
Driver: /dev/gpio1
  Output pin:    Value=1
  Writing:       Value=0
  Verify:        Value=0

nsh> gpio -w 1 /dev/gpio2
Driver: /dev/gpio2
  Interrupt pin: Value=0
  Verify:        Value=1
```

The USERLEDS is a subsystem that allows to control of the LEDs with single operation. Also, you can use commands-line like the printf. In this demo we will turn on and turn off the RGB LED on-board each 1 seconds.

Typing `leds`, you observe the LEDs blinky same time.

```bash
NuttShell (NSH) NuttX-12.8.0
nsh> leds
leds_main: Starting the led_daemon
leds_main: led_daemon started

led_daemon (pid# 3): Running
led_daemon: Opening /dev/userleds
led_daemon: Supported LEDs 0x07
led_daemon: LED set 0x01
nsh> led_daemon: LED set 0x02
led_daemon: LED set 0x03
led_daemon: LED set 0x04
led_daemon: LED set 0x05
led_daemon: LED set 0x06
led_daemon: LED set 0x07
```

Check the video below with the demo for gpio and leds example:

<div style={{ maxWidth: '100%', textAlign: 'center' }}>
  <video style={{ width: '100%', height: 'auto' }} controls>
    <source src="https://files.seeedstudio.com/wiki/XIAO-nRF52840-NuttX/nrf52840_nuttx_demo.mp4" type="video/mp4" />
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
