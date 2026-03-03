---
description: Seeed Studio XIAO RP2040 与 NuttX
title: XIAO RP2040 与 NuttX(RTOS)
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/xiao-rp2040-with-nuttx
last_update:
    date: 8/18/2024
    author: halyssonJr
---

# Seeed Studio XIAO RP2040 与 NuttX(RTOS)

## 介绍

[NuttX](https://nuttx.apache.org/) 是一个成熟的实时操作系统（RTOS），因其标准合规性和小占用空间而广受认可。NuttX 的主要特性之一是其可扩展性，这使得它可以在从 8 位微控制器到 64 位系统的各种环境中使用。这种灵活性是通过遵循 POSIX 和 ANSI 标准实现的，使您能够在来自不同架构、系列和半导体供应商的各种芯片上体验类似的 NuttX 功能。

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/NuttX/nuttx.svg"/></div>

此外，NuttX 提供了许多先进且有用的功能，如 USB、以太网、音频和图形子系统。这些特性使 NuttX 成为寻求多功能、强大的 RTOS 且能够在各种类型硬件上运行的开发者的有吸引力的选择。

NuttX 支持大量且不断扩展的开发板。[官方文档](https://nuttx.apache.org/docs/latest/platforms/) 提供了支持的开发板的完整列表，按架构和片上系统（SoC）系列组织。

例如，NuttX 文档中的 [Seeed Studio Xiao RP2040](https://nuttx.apache.org/docs/latest/platforms/arm/rp2040/boards/seeed-xiao-rp2040/index.html) 页面提供了每个支持功能的详细描述以及如何使用它们的说明。

## 工具设置

开始使用 NuttX 的第一步是安装一系列必需的工具、您将要使用的架构的工具链，最后下载 NuttX 源代码本身。NuttX 为不同平台提供了一个[指南](https://nuttx.apache.org/docs/latest/quickstart/install.html)。

在安装和设置环境后，请按照以下步骤操作：

1. 下载 Raspberry Pi Pico SDK：

```
git clone -b 1.1.2 https://github.com/raspberrypi/pico-sdk.git

```

3. 设置 PICO_SDK_PATH 环境变量：

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

Apache Nuttx 分为两个项目：

- Nuttx：包含已实现的内核、驱动程序和子系统。
- Apps：包含工具、shell、网络实用程序、库和解释器的集合。

## 应用程序

要启动应用程序，需要在 NuttX 上加载配置，调用命令：

```
./tools/configurate.sh board_name:your_application
```

也可以通过运行以下命令来查看支持的开发板列表：

```
./tools/configurate.sh -L
```

一旦脚本运行完成，必须编译 NuttX。有两种方式可以实现：使用 [Make](https://nuttx.apache.org/docs/latest/quickstart/compiling_make.html) 或 [CMake](https://nuttx.apache.org/docs/latest/quickstart/compiling_cmake.html)。

## 编程

成功编译后，下一个目标是使用 BOOTSEL 进行编程。为此，您必须按照以下步骤操作：

**步骤 1**：在按住按钮 `B`（启动）的同时，将 Seed Stduio XIAO RP2040 连接到 USB 端口。开发板将被检测为 USB 大容量存储设备 `RPI-RP2`。

**步骤 2**：在工作空间中，进入 `nuttx` 目录并将 `nuttx.uf2` 复制到 Seed Stduio XIAO RP2040。

**步骤 3**：在您的计算机上搜索新的 USB 设备。

**步骤 4**：与 Seed Stduio XIAO RP2040 建立串行通信。

## 实践操作

现在是实际探索 NuttX 的时候了。在本节中，提供了四个应用程序：USB NSH、GPIO、USERLEDS 和 WS2812 驱动程序。

### USBNSH

NuttXShell(NSH) 是用于 NuttX 的 shell 系统，类似于 bash 和其他类似选项。它支持丰富的内置命令集、脚本编写以及将您自己的应用程序作为"内置"（NuttX 二进制文件的一部分）运行的能力。

我们可以通过清除之前的配置来开始构建过程

```
cd ~/nuttxspace/nuttx
make distclean
```

现在我们将USBNSH配置选择到seeed-xiao-rp2040开发板上：

```
./tools/configurate.sh seeed-xiao-rp2040:usbnsh
```

Compile the source code.

```
make -j
```

编程并打开串行通信之后

```
picocom -b 115200 /dev/ttyACM0
```

你必须按 Enter 键 3 次，然后这条消息将显示在终端中。

```
NuttShell (NSH) NuttX-12.5.1
nsh> 
```

输入 `?`，您将访问可用的命令和内置应用程序选项。

```
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

让我们向 NuttX 打招呼，输入 `hello` 然后它执行该命令：

```
nsh> hello
Hello, World!!
```

恭喜，您与 NuttX 的第一次交互已完成。

### GPIO 驱动

通用输入/输出（GPIO）是微控制器最基本的部分，允许它连接到外部世界。这样我们将使用 NSH 来访问和配置这些引脚。但首先，让我们清除之前的配置。

```
cd ~/nuttxspace/nuttx
make distclean
```

选择 gpio 配置到 seeed-xiao-rp2040 开发板。

```
./tools/configurate.sh seeed-xiao-rp2040:gpio
```

编译 translation 代码。

```
make -j
```

编程并打开串行通信之后

```
picocom -b 115200 /dev/ttyACM0
```

您必须按3次回车键，然后此消息将在终端中显示。

```
NuttShell (NSH) NuttX-12.5.1
nsh>
```

要查看与此应用程序交互时接受哪些选项，请输入 `gpio -h`，它将返回参数列表。

```
NuttShell (NSH) NuttX-12.5.1
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

要确认 GPIO 设备文件已创建，请输入 `ls/dev`。输入后，您可以看到一些 gpio 在 [seed-studio-gpio.c](https://github.com/apache/nuttx/blob/9d5b9b7c056e59c2fcc81e7029c95a995140063c/boards/arm/rp2040/seeed-xiao-rp2040/src/rp2040_gpio.c#L49-L61) 中被声明定义，它们代表：

- 3 个板载 LED（gpio 18、gpio 17 和 gpio 16）。
- 1 个输入（gpio 6）
- 1 个中断输入（gpio 7）

```
nsh> ls /dev
/dev:
 console
 gpio16
 gpio17
 gpio18
 gpio6
 gpio7
 null
 ttyACM0
```

根据 Seeed Studio RP2040 原理图，当 GPIO 电平设置为零时，板载 LED 会点亮。

要控制 GPIO 输出，您必须传递参数 —o、一个值（零或一）以及路径（/dev/gpio）。

按照这两个命令，您会看到黄色 LED 闪烁。

```
nsh> gpio -o 0 /dev/gpio17
Driver: /dev/gpio17
  Output pin:    Value=1
  Writing:       Value=0
  Verify:        Value=0

nsh> gpio -o 1 /dev/gpio17
Driver: /dev/gpio17
  Output pin:    Value=1
  Writing:       Value=1
  Verify:        Value=1
```

<div align="center"><img width ="{50}" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/NuttX/seeed-studio-rp2040-gpio-turn-on-led-green.jpg"/></div>

同样地，您将在红色 LED 上获得相同的结果。

```
nsh> gpio -o 0 /dev/gpio16
Driver: /dev/gpio16
  Output pin:    Value=1
  Writing:       Value=0
  Verify:        Value=0

nsh> gpio -o 1 /dev/gpio16
Driver: /dev/gpio16
  Output pin:    Value=1
  Writing:       Value=1
  Verify:        Value=1
```

<div align="center"><img width ="{50}" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/NuttX/seeed-studio-rp2040-gpio-turn-on-led-red.jpg"/></div>

### USERLED

USERLEDS 是一个子系统，允许通过单一操作控制 LED。此外，您可以使用类似 printf 的命令行。在这个演示中，我们将每隔 1 秒钟打开和关闭板载 LED。

首先，清除之前的配置。

```
cd ~/nuttxspace/nuttx
make distclean
```

使用以下命令配置开发板以运行 userled 应用程序：

```
./tools/configurate.sh seeed-xiao-rp2040:userleds
```

编译 translation 代码。

```
make -j
```

编程完成后，打开串口通信并按3次回车键，按照之前应用程序中显示的相同步骤操作。

如果您输入：`ls /dev/`，将显示设备列表，并观察到已创建了 `userleds` 文件。

```
nsh> ls /dev/
/dev:
 console
 userleds
 null
 ttyACM0
 ttyS0
```

输入 `leds`，你会观察到 LED 灯同时闪烁。

```
NuttShell (NSH) NuttX-12.5.1
nsh> leds
leds_main: Starting the led_daemon
leds_main: led_daemon started

led_daemon (pid # 3): Running
led_daemon: Opening /dev/userled
led_daemon: Supported LEDs 0x07
led_daemon: LED set 0x01
led_daemon: LED set 0x00
led_daemon: LED set 0x01
led_daemon: LED set 0x00
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/NuttX/seeed-studio-userleds.gif" style={{width:300, height:'auto'}}/></div>

## WS2812 LED

WS2812 驱动程序允许控制任何使用 ws2812 协议的智能像素。这个基于 NSH 的应用程序允许用户调用命令来执行示例。

清除之前的配置

```
cd ~/nuttxspace/nuttx
make distclean
```

选择 ws2812 配置到 seeed-xiao-rp2040 开发板。

```
./tools/configurate.sh seeed-xiao-rp2040:ws2812
```

编译 translation 代码。

```
make -j
```

编译完成后，开始对开发板进行编程，打开串口通信并按3次回车键，按照之前应用程序显示的相同步骤操作。输入`?`，将看到ws2812应用程序可用。

```
NuttShell (NSH) NuttX-12.5.1
nsh> ?
help usage:  help [-v] [<cmd>]

    .           cp          exit        mkdir       rm          uname       
    [           cmp         expr        mkrd        rmdir       umount      
    ?           dirname     false       mount       set         unset       
    alias       dd          fdinfo      mv          sleep       uptime      
    unalias     df          free        pidof       source      usleep      
    basename    dmesg       help        printf      test        xd          
    break       echo        hexdump     ps          time        
    cat         env         kill        pwd         true        
    cd          exec        ls          reboot      truncate    

Builtin Apps:
    getprime    hello       nsh         ostest      sh          ws2812      
nsh> 

```

在运行应用程序之前，重要的是确认文件夹 `ls /dev/` 中已创建了 `leds0` 文件，该文件将用于 ws2812 驱动。

```
nsh> ls /dev/
/dev:
 console
 leds0
 null
 ttyACM0
 ttyS0

```

输入 `ws2812 -h` 将返回此应用程序接受的参数列表。

```
nsh> ws2812 -h
Usage: ws2812 [OPTIONS]

Arguments are "sticky".  For example, once the device path is
specified, that path will be re-used until it is changed.
  [-p path] selects the ws2812 device.  Default: /dev/leds0 Current: /dev/leds0
  [-l leds] selects number of ws2812s in the chain.  Default: 1 Current: 1
  [-r repeat] selects the number change cycles.  Default: 4 Current: 4
  [-d delay] selects delay between updates.  Default: 20000 us Current: 20000 us

```

让我们启动我们的应用程序，输入`ws2812`，你会看到LED灯改变颜色。

```
nsh> ws2812
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/NuttX/seeed-studio-rp2040-rgb.gif" style={{width:400, height:'auto'}}/></div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
