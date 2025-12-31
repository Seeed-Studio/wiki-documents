---
description: 如何使用 SWD 接口调试 Arduino 开发板
title: 如何使用 SWD 接口调试 Arduino 开发板
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Software-SWD
last_update:
  date: 1/16/2023
  author: jianjing Huang
---
# 如何使用 SWD 接口调试 Arduino 开发板

在本教程中，您将学习如何使用 **SWD 接口通过 J-Link 调试编程器调试您的 Arduino 开发板**。作为参考，我们使用 Wio Terminal 作为硬件来演示调试过程。

<div align="center"><img src="https://files.seeedstudio.com/wiki/SWD/SWD-Interface.png"/></div>

### 什么是 SWD 调试

**SWD**，也称为[串行线调试](https://developer.arm.com/architectures/cpu-architecture/debug-visibility-and-trace/coresight-architecture/serial-wire-debug)，是一个 2 引脚接口（SWDIO/SWCLK），它也是具有相同 JTAG 协议的替代 JTAG 接口。SWD 使用 ARM CPU 标准双向线协议，在 ARM 调试编程器中定义。

## 硬件连接

开始之前，您需要以下材料：

1. [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)（或其他带有 SWD 接口的 Arduino 开发板）

2. [**J-Link 调试编程器**](https://www.segger.com/products/debug-probes/j-link/)

### Wio Terminal SWD 接口

<div align="center"><img src="https://files.seeedstudio.com/wiki/SWD/SWD-connection.png"/></div>

对于 Wio Terminal，SWD 接口焊盘位于 Wio Terminal 正面底部（不带外壳的裸 PCBA）。需要引出三根跳线：

- **SWCLK**
- **SWDIO**
- **GND**

焊接好跳线后，我们可以按照 SWD 引脚图将它们连接到 J-Link 调试编程器：

<div align="center"><img src="https://files.seeedstudio.com/wiki/SWD/pinout.png"/></div>

按如下方式连接：

- **`SWCLK`**（Wio Terminal）-> **`SWCLK`**（J-Link 调试编程器引脚 7）
- **`SWDIO`**（Wio Terminal）-> **`SWDIO`**（J-Link 调试编程器引脚 9）
- **`GND`**（Wio Terminal）-> **`GND`**（J-Link 调试编程器引脚 4）

## 安装 J-Link GDB 服务器进行调试

要使用 J-Link 调试编程器进行调试，您需要下载 [**J-Link GDB 服务器**](https://www.segger.com/products/debug-probes/j-link/tools/j-link-gdb-server/about-j-link-gdb-server/)。根据您的操作系统下载并安装。

## Arduino 设置

在启动 J-Link GDB 服务器之前，您还需要打开 `Arduino` IDE 进行后续配置。

### 1. 获取 Arduino 草图 ELF 文件路径

在 Arduino IDE 的设置中，确保 **Show verbose output during compilation and upload** 都已勾选。

在您要调试的 Arduino 草图下，点击 **Compile**（选择 Wio Terminal 作为开发板），并检查日志信息以获取 `.elf` 文件位置的路径。让我们以 `Blink` 为例：

<div align="center"><img src="https://files.seeedstudio.com/wiki/SWD/elf.png"/></div>

复制此路径，稍后将用于 GDB。

例如，在我的情况下：

```sh
/var/folders/7g/10kskmw90bg08j_g_r7flwq40000gn/T/arduino_build_633418/Blink.ino.elf
```

### 2. 获取 GCC 路径

在同一草图编译日志信息下，您还可以找到 Arduino 使用的 GCC 路径，稍后也可用于 J-Link 调试编程器。

<div align="center"><img src="https://files.seeedstudio.com/wiki/SWD/GCC.png"/></div>

例如，在我的情况下：

```sh
/Users/ansonhe/Library/Arduino15/packages/Seeeduino/tools/arm-none-eabi-gcc/7-2017q4/bin
```

## J-Link GDB 服务器入门

将 J-Link 调试编程器连接到 PC，并通过 USB 端口为 Wio Terminal 供电。启动 **J-Link GDB 服务器**，选择以下设置：

- Connection to J-Link：**USB**
- Target Device：**Cortex-M4**
- Target Interface：**SWD**

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/SWD/GDB-launch.png"/></div>

选择 **OK**，如果一切顺利，您应该看到以下屏幕：

<div align="center"><img src="https://files.seeedstudio.com/wiki/SWD/GDB-ready.png"/></div>

您应该看到监听端口出现，J-Link GDB 服务器已启动并准备就绪！

## 启动 GDB 客户端

现在您可以使用我们之前从 Arduino 中的 GCC 路径保存的路径启动 GDB 客户端。打开终端并粘贴复制的路径 + `/arm-none-eabi-gdb`：

例如：`/Users/ansonhe/Library/Arduino15/packages/Seeeduino/tools/arm-none-eabi-gcc/7-2017q4/bin/arm-none-eabi-gdb`

在 gdb 下运行以下命令：

1. `target remote localhost:2331`
2. `monitor device Cortex-M4`
3. `monitor speed auto`
4. `file` + Arduino 草图 ELF 文件路径，即 `file /var/folders/7g/10kskmw90bg08j_g_r7flwq40000gn/T/arduino_build_633418/Blink.ino.elf`
5. `load`
6. `monitor reset`

现在您可以使用 GDB 调试您的 Arduino 草图了！

<div align="center"><img src="https://files.seeedstudio.com/wiki/SWD/GDB-connected.png"/></div>

### `.gdbinit` 方法

您还可以创建一个 `.gdbinit` 文件，复制以下内容并将其保存在 `~/` 位置，以避免为 gdb 重复设置过程。

```
target remote localhost:2331
monitor device Cortex-M4
monitor speed auto
file /var/folders/7g/10kskmw90bg08j_g_r7flwq40000gn/T/arduino_build_633418/Blink.ino.elf
load
monitor reset
```

现在如果您只是启动 GDB 客户端，您就可以直接开始调试了！

## 调试

GDB 的一些有用命令：

- `continue/cont`
- `ctrl`+`c`
- `next`
- `break`
- `info break`
- `clear`
- `delete`
- `list`

## 推荐工具：XIAO Debug Mate
为了获得更高效的开发体验，我们推荐 [XIAO Debug Mate](https://www.seeedstudio.com/Seeed-Studio-XIAO-Debug-Mate-p-6588.html)。这款一体化开发工具旨在简化调试过程，为 XIAO 生态系统提供无线解决方案，同时仍是更广泛嵌入式项目的多功能实用工具。由 ESP32-S3 驱动，它是传统笨重调试器的现代替代品。

**主要特性：**
- 3 合 1 多功能工具：在一个设备中结合了 DAPLink 调试器、串行监视器和功率计。
- 可视化反馈：配备 2.01 英寸 LCD 屏幕，可查看实时变量状态、功率曲线和串行日志，无需 PC。
- XIAO 即插即用：直接将任何 Seeed Studio XIAO 开发板插入其中即可立即调试。
- 通用 SWD 支持：可用作独立 SWD 探针（通过 2.54mm 扩展接头）来调试其他 ARM Cortex-M 微控制器。

<div align="center"><img src="https://files.seeedstudio.com/wiki/SWD/GDB_debug.png"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-Debug-Mate-p-6588.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>


## 资源

- [官方 GNU GDB 文档](https://www.gnu.org/software/gdb/documentation/)

- [GNU GDB 调试器命令速查表](http://www.yolinux.com/TUTORIALS/GDB-Commands.html)

## 常见问题

**Q1. 如何拆下 Wio Terminal 的外壳？**

**A1.** 首先，取出 4 个角的 4 个橡胶垫，您会看到固定 Wio Terminal 外壳的 2 个螺丝。只需拧下它们，您就可以将其拆开。

<div align="center"><img width ="{450}" src="https://files.seeedstudio.com/wiki/SWD/WT.png"/></div>
