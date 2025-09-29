---
description: XIAO ESP32C6 With NuttX(RTOS)
title: XIAO ESP32C6 With NuttX(RTOS)
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/XIAO-ESP32C6-NuttX/nuttx.webp
slug: /xiao_esp32c6_nuttx
last_update:
    date: 05/08/2025
    author: rcsim
---

# Seeed Studio XIAO ESP32C6 with NuttX(RTOS)

## Introduction

[NuttX](https://nuttx.apache.org/) is a mature real-time operating system (RTOS) widely recognized for its standards compliance and small footprint. One of NuttX's main features is its scalability, which allows it to be used in environments ranging from 8-bit microcontrollers to 64-bit systems. This flexibility is achieved through adherence to POSIX and ANSI standards, enabling you to experiment with similar NuttX features across a wide range of chips from different architectures, families, and semiconductor vendors.

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO-ESP32C6-NuttX/nuttx.svg"/></div>

Additionally, NuttX offers many advanced and useful features, such as USB, Ethernet, Audio, and Graphics subsystems. These characteristics make NuttX an attractive choice for developers seeking a versatile, robust RTOS capable of operating on various types of hardware.

NuttX supports a vast and continually expanding number of boards. [The official documentation](https://nuttx.apache.org/docs/latest/platforms/) provides a comprehensive list of supported boards, organized by architecture and System-on-Chip (SoC) series.

For instance, the [Seeed Studio XIAO ESP32C6](https://nuttx.apache.org/docs/latest/platforms/risc-v/esp32c6/boards/esp32c6-xiao/index.html) page in the NuttX documentation offers detailed descriptions of each supported feature and instructions on how to utilize them. Also there is a specific page in the NuttX documentation for [Espressif ESP32C6](https://nuttx.apache.org/docs/latest/platforms/risc-v/esp32c6/index.html) series chips, where you can find the list of MCUs and peripherals supported.

## Installation

The Nuttx documentation provides a [guide](https://nuttx.apache.org/docs/latest/quickstart/install.html) to different platforms. For Seeed Studio XIAO ESP32C6 please follow these steps:

1. Download Espressif esptool(https://docs.espressif.com/projects/esptool/en/latest/esp32/):

    ```bash
    ~/nuttxspace/nuttx$ esptool.py version
    esptool.py v4.8.1
    4.8.1
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

4. Build NuttX (build process will generate the firmware binaries, including nuttx.bin):

    ```bash
    cd nuttx
    make distclean
    ./tools/configure.sh esp32c6-xiao:usbnsh
    make V=1
    ```

5. The RESET and BOOT buttons can be used to enter “Bootloader” mode by press and hold the BOOT key while powering up and then press the RESET key once.

6. Load the firmware using esptool.py:

    ```bash
    make flash ESPTOOL_PORT=/dev/ttyACM0 ESPTOOL_BINDIR=./
    ```

## Hands-on

It's time to explore NuttX practically. In this session, four applications are available: USBNSH, GPIO and WIFI.

### USBNSH

The NuttShell(NSH) is a shell system to be used in NuttX, similar to bash and other similar options. It supports a rich set of included commands, scripting and the ability to run your own applications as “builtin” (part of the same NuttX binary). The NSH configuration enables console at USB using 115200 bps.

We can start the build process clearing the previous configuration

```bash
cd ~/nuttxspace/nuttx
make distclean
```

Now we select the NSH configuration to the esp32c6-xiao board:

```bash
./tools/configurate.sh esp32c6-xiao:usbnsh
```

Compile the source code.

```bash
make -j
```

Load the firmware into you board, reboot the board and connect NuttShell (NSH) console over USB using the CDC/ACM serial interface:

```bash
picocom -b 115200 /dev/ttyACM0
```

Access the NuttShell console:

```bash
NuttShell (NSH) NuttX-12.9.0
nsh> uname -a
NuttX  12.9.0 ebf883ba72 May  8 2025 17:15:47 risc-v esp32c6-xiao
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

### GPIO

This configuration enables gpio example applications. The General Purpose Input/Output (GPIO) is a microcontroller's most fundamental part, allowing it to connect to the external world. This way we will use the NSH to access and configure those pins as we wish. But first, let's clear the previous configuration.

```bash
cd ~/nuttxspace/nuttx
make distclean
```

Select the gpio configuration to the xiao-esp32c6 board.

```bash
./tools/configurate.sh esp32c6-xiao:gpio
```

Compile de the source code.

```bash
make -j
```

Load the firmware into you board, run a serial communication program such as minicon or picocom:

```bash
picocom -b 115200 /dev/ttyACM0
```

```bash
NuttShell (NSH) NuttX-12.9.0
nsh>
```

To check which options are accepted to interact with this application, type `gpio -h`, and it will return a list of parameters.

```bash
NuttShell (NSH) NuttX-12.9.0
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

To confirm the GPIO device files were created, type `ls/dev`. After typing, you can see some gpios were declared define on boards/risc-v/esp32c6/esp32c6-xiao/src/esp32c6_gpio.c, which represent :

- GPIOs
  - 1 Input w/ IRQ -> GPIO2 -> /dev/gpio1
  - 1 Output       -> GPIO1 -> /dev/gpio0

```bash
nsh> ls /dev
/dev:
 console
 gpio0
 gpio1
 null
 ttyACM0
 ttyS0
 zero
nsh> 
```

Following these commands to read GPIO1(/dev/gpio1) (with interruption)
and write at GPIO2(/dev/gpio0).

```bash
NuttShell (NSH) NuttX-12.9.0
nsh> gpio -o 1 /dev/gpio0
Driver: /dev/gpio0
  Output pin:    Value=1
  Writing:       Value=1
  Verify:        Value=1
nsh> 
nsh> gpio -o 0 /dev/gpio0
Driver: /dev/gpio0
  Output pin:    Value=1
  Writing:       Value=0
  Verify:        Value=0
nsh> gpio -w 1 /dev/gpio1
Driver: /dev/gpio1
  Interrupt pin: Value=0
  Verify:        Value=1
```

### WIFI

This configuration enables a wlan network interface that can be configured and initialized using below commands:

```bash
nsh> ifup wlan0
nsh> wapi psk wlan0 mypasswd 3
nsh> wapi essid wlan0 myssid 1
nsh> renew wlan0
```

In this case a connection to AP with SSID myssid is done, using mypasswd as password. IP address is obtained via DHCP using renew command. You can check the result by running ifconfig afterwards.

Let's start by cleaning previous configuration:

```bash
cd ~/nuttxspace/nuttx
make distclean
```

Select the wifi configuration to the xiao-esp32c6 board.

```bash
./tools/configurate.sh esp32c6-xiao:wifi
```

Compile de the source code.

```bash
make -j
```

Load the firmware into you board, run a serial communication program such as minicon or picocom:

```bash
picocom -b 115200 /dev/ttyACM0
```

```bash
NuttShell (NSH) NuttX-12.9.0
nsh>
```

We can now use WAPI commands as documented at [WAPI NuttX documentation](https://nuttx.apache.org/docs/latest/applications/wireless/wapi/index.html) ,

```bash
NuttShell (NSH) NuttX-12.9.0
nsh> wapi psk wlan0 nuttxpwd 3
nsh> wapi essid wlan0 nuttxnw 1
nsh> renew wlan0
nsh> ifconfig
wlan0   Link encap:Ethernet HWaddr a0:85:e3:0e:4a:30 at RUNNING mtu 576
        inet addr:192.168.59.144 DRaddr:192.168.59.134 Mask:255.255.255.0

nsh> ping 8.8.8.8
PING 8.8.8.8 56 bytes of data
56 bytes from 8.8.8.8: icmp_seq=0 time=50.0 ms
56 bytes from 8.8.8.8: icmp_seq=1 time=40.0 ms
56 bytes from 8.8.8.8: icmp_seq=2 time=30.0 ms
56 bytes from 8.8.8.8: icmp_seq=3 time=60.0 ms
56 bytes from 8.8.8.8: icmp_seq=4 time=100.0 ms
56 bytes from 8.8.8.8: icmp_seq=5 time=100.0 ms
56 bytes from 8.8.8.8: icmp_seq=6 time=140.0 ms
56 bytes from 8.8.8.8: icmp_seq=7 time=40.0 ms
56 bytes from 8.8.8.8: icmp_seq=8 time=50.0 ms
56 bytes from 8.8.8.8: icmp_seq=9 time=30.0 ms
10 packets transmitted, 10 received, 0% packet loss, time 10100 ms
rtt min/avg/max/mdev = 30.000/64.000/140.000/34.985 ms
nsh> nslookup google.com
Host: google.com Addr: 142.251.128.238
nsh> nslookup nuttx.apache.org
Host: nuttx.apache.org Addr: 151.101.2.132
```

Check the video below with the demo for wifi:

<div style={{ maxWidth: '100%', textAlign: 'center' }}>
  <video style={{ width: '100%', height: 'auto' }} controls>
    <source src="https://files.seeedstudio.com/wiki/XIAO-ESP32C6-NuttX/xiao-esp32c6-nuttx-wifi.mp4" type="video/mp4" />
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
