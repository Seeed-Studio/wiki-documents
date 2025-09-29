---
description: XIAO RP2350 与 NuttX(RTOS)
title: XIAO RP2350 与 NuttX(RTOS)
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/XIAO-nRF52840-NuttX/nuttx.webp
slug: /cn/xiao_rp2350_nuttx
sidebar_position: 3
last_update:
    date: 03/11/2025
    author: rcsim
---

# Seeed Studio XIAO RP2350 与 NuttX(RTOS)

:::note

由于软件版本的变化，本文档中的某些步骤可能不再准确或过时。

:::

## 介绍

[NuttX](https://nuttx.apache.org/) 是一个成熟的实时操作系统（RTOS），因其标准合规性和小占用空间而广受认可。NuttX 的主要特性之一是其可扩展性，这使得它可以在从 8 位微控制器到 64 位系统的各种环境中使用。这种灵活性是通过遵循 POSIX 和 ANSI 标准实现的，使您能够在来自不同架构、系列和半导体供应商的各种芯片上体验类似的 NuttX 功能。

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/NuttX/nuttx.svg"/></div>

此外，NuttX 提供了许多先进且有用的功能，如 USB、以太网、音频和图形子系统。这些特性使 NuttX 成为寻求多功能、强大的 RTOS 且能够在各种类型硬件上运行的开发者的有吸引力的选择。

NuttX 支持大量且不断扩展的开发板。[官方文档](https://nuttx.apache.org/docs/latest/platforms/) 提供了支持的开发板的完整列表，按架构和片上系统（SoC）系列组织。

例如，NuttX 文档中的 [Seeed Studio XIAO RP2350](https://nuttx.apache.org/docs/latest/platforms/arm/rp23xx/boards/xiao-rp2350/index.html) 页面提供了每个支持功能的详细描述和如何使用它们的说明。此外，NuttX 文档中还有一个专门针对 [Raspberry Pi RP2350](https://nuttx.apache.org/docs/latest/platforms/arm/rp23xx/index.html) 系列芯片的页面。

## 安装

Nuttx 文档提供了针对不同平台的[指南](https://nuttx.apache.org/docs/latest/quickstart/install.html)。对于 Seeed Studio XIAO RP2350，请按照以下步骤操作：

1. 下载 picotool 工具（可选）：

    ```bash
    git clone https://github.com/raspberrypi/picotool.git picotool
    cd picotool
    mkdir build
    cd build
    cmake ..
    make
    cp picotool ~/local/bin # somewhere in your PATH
    ```

2. 创建工作空间

    ```bash
    mkdir nuttxspace
    ```

3. 克隆仓库

    ```bash
    cd nuttxspace
    git clone https://github.com/apache/nuttx.git nuttx
    git clone https://github.com/apache/nuttx-apps apps
    ```

Apache Nuttx 分为两个项目：

- Nuttx：包含已实现的内核、驱动程序和子系统。
- Apps：包含工具、shell、网络实用程序、库和解释器的集合。

## 应用程序

要启动应用程序，需要在 NuttX 上加载配置，调用命令：

```bash
./tools/configure.sh board_name:your_application
```

还可以通过运行以下命令来检查支持的板卡列表:

```bash
./tools/configure.sh -L
```

4. 构建 NuttX（构建过程将生成固件二进制文件，包括 nuttx.uf2）：

    ```bash
    cd nuttx
    make distclean
    ./tools/configure.sh xiao-rp2350:nsh
    make V=1
    ```

5. 使用 picotool 加载固件：

    ```bash
    picotool load nuttx -t elf
    ```

6. 可以使用 RESET 和 BOOT 按钮进入引导加载程序模式，方法是按住 BOOT 按钮，然后按下并释放 RESET 按钮。然后，开发板将作为存储设备枚举到通过 USB 连接的计算机。将 .UF2 文件保存到此设备将替换 RP2350 上的 Flash ROM 内容。

## 实践操作

现在是实际探索 NuttX 的时候了。在本节中，提供了三个应用程序：NSH、USBNSH 和 COMBO。

### NSH

NuttShell(NSH) 是在 NuttX 中使用的 shell 系统，类似于 bash 和其他类似选项。它支持丰富的内置命令集、脚本编写以及将您自己的应用程序作为"内置"（同一个 NuttX 二进制文件的一部分）运行的能力。NSH 配置在 UART0 上启用控制台，使用 115200 bps。

我们可以通过清除之前的配置来开始构建过程

```bash
cd ~/nuttxspace/nuttx
make distclean
```

现在我们将 NSH 配置选择到 xiao-rp2350 开发板上：

```bash
./tools/configure.sh xiao-rp2350:nsh
```

Compile the source code.

```bash
make -j
```

将固件加载到您的开发板中，并将USB转串口连接到TX和RX引脚，然后运行串口通信程序，如minicon或picocom：

```bash
picocom -b 115200 /dev/ttyUSB0
```

Access the NuttShell console:

```bash
NuttShell (NSH) NuttX-12.8.0
nsh> 
```

输入 `?`，您将访问可用的命令和内置应用程序选项。

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

让我们向 NuttX 问好，输入 `hello`，然后它执行命令：

```bash
nsh> hello
Hello, World!!
```

恭喜，您与 NuttX 的第一次交互已完成。

### USBNSH

类似于 NSH 配置，但使用 CDC/ACM 串口（控制台在 USB 端口启用，波特率为 115200 bps）。

我们可以通过清除之前的配置来开始构建过程

```bash
cd ~/nuttxspace/nuttx
make distclean
```

现在我们将 NSH 配置选择到 xiao-rp2350 开发板上：

```bash
./tools/configure.sh xiao-rp2350:usbnsh
```

Compile the source code.

```bash
make -j
```

将固件加载到您的开发板中，运行串行通信程序，如 minicon 或 picocom：

```bash
picocom -b 115200 /dev/ttyACM0
```

你必须按 Enter 键 3 次，然后这条消息将显示在终端中。

```bash
NuttShell (NSH) NuttX-12.8.0
nsh> 
```

### COMBO

此配置启用了三个示例应用程序：gpio、leds 和 ws2812。通用输入/输出（GPIO）是微控制器最基本的部分，允许它连接到外部世界。这样我们将使用 NSH 来访问和配置这些引脚。但首先，让我们清除之前的配置。

```bash
cd ~/nuttxspace/nuttx
make distclean
```

选择组合配置到 xiao-rp2350 板。

```bash
./tools/configure.sh xiao-rp2350:combo
```

编译 translation 代码。

```bash
make -j
```

将固件加载到您的开发板中，运行串行通信程序，如 minicon 或 picocom：

```bash
picocom -b 115200 /dev/ttyUSB0
```

```bash
NuttShell (NSH) NuttX-12.8.0
nsh>
```

要查看与此应用程序交互时接受哪些选项，请输入 `gpio -h`，它将返回参数列表。

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

要确认 GPIO 设备文件已创建，请输入 `ls/dev`。输入后，您可以看到一些 gpio 已在 boards/arm/rp23xx/xiao-rp2350/include/board.h 中声明定义，它们代表：

- 板载 LED：
  - 黄色            -> GPIO25

- GPIO：
  - 1 个输入           -> GPIO27
  - 1 个中断输入 -> GPIO26
  - 1 个输出          -> GPIO28

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

按照以下命令读取 gpio27 和 gpio26（带中断）并在 gpio28 处写入。

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

USERLEDS 是一个子系统，允许通过单个操作来控制 LED。此外，您可以使用类似 printf 的命令行。在这个演示中，我们将每隔 1 秒钟打开和关闭板载的黄色 LED。

输入 `leds`，您会观察到 LED 同时闪烁。

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

Seeed Studio XIAO RP2350 还有一个可寻址的 LED，可以使用 ws2812 应用程序进行测试：

```bash
NuttShell (NSH) NuttX-12.8.0
nsh> ws2812
```

查看下面的视频演示，包含 gpio、leds 和 ws2812 示例：

<div style={{ maxWidth: '100%', textAlign: 'center' }}>
  <video style={{ width: '100%', height: 'auto' }} controls>
    <source src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/Nuttx/xiao-rp2350-nuttx-demo.mp4" type="video/mp4" />
  </video>
</div>

有关 NuttX RTOS 的更多信息，请访问 [NuttX 文档](https://nuttx.apache.org/docs/latest/index.html)

## ✨ 贡献者项目

- 此项目由 Seeed Studio [贡献者项目](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) 支持。
- 特别感谢 [Rodrigo](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=92947609) 的专注努力。您的工作将被[展示](https://wiki.seeedstudio.com/contributors/)。

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
