---
description: Seeed Studio XIAO RP2040 with NuttX
title: NuttX
keywords:
- xiao
last_update:
    date: 7/12/2024
    author: halyssonJr
---

# Seed Studio XIAO RP2040 with NuttX(RTOS)
## Introduction

[NuttX](https://nuttx.apache.org/) NuttX is a mature real-time operating system (RTOS) widely recognized for its standards compliance and small footprint. One of NuttX's main features is its scalability, which allows it to be used in environments ranging from 8-bit microcontrollers to 64-bit systems. This flexibility is achieved through adherence to POSIX and ANSI standards, enabling you to experiment with similar NuttX features across a wide range of chips from different architectures, families, and semiconductor vendors.

Additionally, NuttX offers many advanced and useful features, such as USB, Ethernet, Audio, and Graphics subsystems. These characteristics make NuttX an attractive choice for developers seeking a versatile, robust RTOS capable of operating on various types of hardware.

NuttX supports a vast and continually expanding number of boards. [The official documentation](https://nuttx.apache.org/docs/latest/platforms/) provides a comprehensive list of supported boards, organized by architecture and System-on-Chip (SoC) series.

For instance, the [Seeed Studio Xiao RP2040](https://nuttx.apache.org/docs/latest/platforms/arm/rp2040/boards/seeed-xiao-rp2040/index.html) page in the NuttX documentation offers detailed descriptions of each supported feature and instructions on how to utilize them.

## Tools Setup

The first step to get started with NuttX is to install a series of required tools, a toolchain for the architecture you will be working with and, finally, download NuttX source code itself.The Nuttx provides a [guide](https://nuttx.apache.org/docs/latest/quickstart/install.html) to different platforms.

After installing and setting up the environment, follow these steps:

1. Download Raspberry Pi Pico SDK:

```
git clone -b 1.1.2 https://github.com/raspberrypi/pico-sdk.git

```

3. Set PICO_SDK_PATH enviroment variable:

```
export PICO_SDK_PATH=<absolute_path_to_pico-sdk_directory>
```
2. Create a workspace

```
mkdir nuttxspace

```

3. Clone the repositories

```
cd nuttxspace
git clone https://github.com/apache/nuttx.git nuttx
git clone https://github.com/apache/nuttx-apps apps
```

- Nuttx: contains implemented the kernel, driver and subsystems.
- Apps: contains a collection of tools, shells, network utilities, libraries and interpreters.

## Applications

To start an application it's necessary to load a configuration on NuttX, calling the command: 

```
./tools/configurate.sh seeed-xiao-rp2040:your_application
```

The command it's composed two parameters:
- Board name
- Application

Once the script is run, the NuttX must be compiled. There are two possibilities to do that: [Make](https://nuttx.apache.org/docs/latest/quickstart/compiling_make.html) or [CMake](https://nuttx.apache.org/docs/latest/quickstart/compiling_cmake.html).

Successful compilation is guaranteed, the next goal it's programming using BOOTSEL.

**Step 1**: Connect the Seed Stduio XIAO RP2040 to USB port while pressing button `B` (boot). The board will be detected as USB Mass Storage Device.

**Step 2**: Copy “nuttx.uf2” into the Seed Stduio. XIAO RP2040.

**Step 3**: Search for a new usb device.

**Step 4**: Open a serial communication with Seed Stduio XIAO RP2040.

```
picocom -b 115200 /dev/ttyACM0
```

### USBNSH

The NuttXShell(NSH) is a shell system to be used in NuttX, similar to bash and other similar options. It supports a rich set of included commands, scripting and the ability to run your own applications as “builtin” (part of the same NuttX binary).

```
NuttShell (NSH) NuttX-12.5.1
nsh> uname -a
NuttX 12.5.1 e89a38f7b9 Jul 16 2024 23:05:35 arm seeed-xiao-rp2040
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
nsh> hello
Hello, World!!
```

### GPIO Driver


### Userleds Subsytem


## WS2812 LED
