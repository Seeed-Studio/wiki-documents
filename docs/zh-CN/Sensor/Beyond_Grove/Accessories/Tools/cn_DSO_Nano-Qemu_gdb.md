---
title: DSO Nano/Qemu gdb
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/DSO_Nano-Qemu_gdb/
slug: /cn/DSO_Nano-Qemu_gdb
last_update:
  date: 02/03/2022
  author: gunengyu
---

## 在 qemu 模拟器上运行 STM32 代码

使用 qemu 模拟器，您可以运行和调试 ARM 代码，而无需任何 ARM 处理器！您可以将代码加载到模拟器上，连接 gdb 调试器并逐步调试代码。当然，外设、定时器和其他微控制器组件不会被模拟，但这对于验证某些代码非常有帮助。您需要运行 qemu-system-arm，它是 QEMU 项目的一部分。在 Debian/Ubuntu 系统中，它包含在 qemu-system 包中（在旧版本中为 qemu-kvm-extras）。

## 构建 qemu-system-arm（可选）

如果您的系统没有发行版包，或者打包的版本低于 0.13，建议您自行构建：

```
wget [http://download.savannah.gnu.org/releases/qemu/qemu-0.13.0.tar.gz](http://download.savannah.gnu.org/releases/qemu/qemu-0.13.0.tar.gz)
tar xzf qemu-0.13.0.tar.gz
cd qemu-0.13.0
./configure --disable-kvm --enable-debug --target-list=arm-softmmu --audio-card-list= --audio-drv-list=
make
```

您现在可以直接从 arm-softmmu 文件夹运行它，除非您希望将其安装到例如 /usr/local/bin。

## 关于 STM32 支持的说明

DSO Nano 中的 STM32 微控制器使用 ARM Cortex-M3 内核。qemu-system-arm 并不了解 STM32 的 ROM（闪存）布局。特别是，它不会从地址 0x08000000 读取堆栈和复位向量。但是，如果您的 elf 文件正确指定了复位处理程序作为入口点，它将使用此地址作为起始地址。然而，您需要手动设置堆栈指针（sp）。

## 启动模拟器

**启动 qemu 模拟器及其内部 gdb 服务器（-s 选项），并将您的 elf 文件作为“内核”加载：**
```
qemu-system-arm -cpu cortex-m3 -S -s -singlestep -nographic -m 513 -kernel dso-lib.elf
```

“-m 513”选项创建了一个内存空间，其中包括 STM32 的 0x2000000 RAM 地址。

**启动 gdb（来自您的 ARM 工具链！）并连接到 qemu 模拟器：**

```
arm-none-eabi-gdb dso-lib.elf
(gdb) target extended-remote localhost:1234
(gdb) set $sp = 0x20005000
(gdb) where
```

**您现在可以开始逐步调试程序，以下是一些示例：**

```
(gdb) display/i $pc
(gdb) stepi
(gdb) next
(gdb) break main.c:23
(gdb) x/16wx 0x20000000
(gdb) cont
(gdb) info reg
(gdb) info variables
(gdb) print *pProperty
```

## 链接

*   [http://balau82.wordpress.com/2010/08/17/debugging-arm-programs-inside-qemu/](http://balau82.wordpress.com/2010/08/17/debugging-arm-programs-inside-qemu/)

*   [http://embdev.net/topic/129757](http://embdev.net/topic/129757)

## 技术支持与产品讨论

如果您有任何技术问题，请将问题提交到我们的 [论坛](http://forum.seeedstudio.com/)。  
感谢您选择我们的产品！我们致力于为您提供不同的支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>  