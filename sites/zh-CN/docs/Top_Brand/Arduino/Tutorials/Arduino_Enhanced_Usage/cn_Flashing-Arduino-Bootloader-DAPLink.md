---
description: 使用 DAP Link 刷写 Arduino 引导程序
title: 使用 DAP Link 刷写 Arduino 引导程序
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Flashing-Arduino-Bootloader-DAPLink
last_update:
  date: 1/16/2023
  author: jianjing Huang
---

# 使用 DAP Link 刷写 Arduino 引导程序

这是关于如何使用 DAP link (OpenOCD) 将 Arduino 引导程序刷写到 Arduino 开发板的 Wiki 教程。如果您的 Arduino 开发板的引导程序损坏了，您可以使用本指南重新刷写引导程序。

## 准备工作

1. 首先，您必须先按照 [**如何将 Arduino 开发板用作 DAPLink 设备**](https://wiki.seeedstudio.com/cn/Arduino-DAPLink/) 的教程，将您的一块 SAMD 开发板转换为 DAP-Link 设备。一旦您配置并**上传了 daplink Arduino ino 程序**，您就可以回到本 wiki 教程。

2. 根据引脚配置将目标硬件与 DAP Link 设备（SAMD 开发板）连接。

     - SWO > SWO
     - CLK > CLK
     - GND > GND

它可能看起来像这样，其中 Seeeduino XIAO 是 DAP Link 设备，Seeeduino Cortex M0+ 是目标设备。

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPlink-example/examples.png"/></div>

## 开始使用

在这个例子中，Seeeduino XIAO 作为 DAPLink 设备，用于为 Seeeduino Lotus Cortex M0+ 刷写 Arduino 引导程序。

- 在终端中导航到 **Arduino 开发板库路径的根位置**，并在路径中找到 OpenOCD 路径。它可能看起来像这样：

```sh
cd ~/Library/Arduino15/packages/arduino/tools/openocd/
cd 0.10.0-arduino7/bin # 这里的版本可能会有所不同
```

- 使用特定脚本运行 OpenOCD：

**注意：** 您可能需要将 `ansonhe` 更改为您的用户名或调整为您的正确路径。

```sh
./openocd -s ../share/openocd/scripts/ -f /Users/ansonhe/Library/Arduino15/packages/Seeeduino/hardware/samd/1.7.9/variants/arduino_zero/openocd_scripts/arduino_zero.cfg
```

如果一切顺利，您应该看到如下所示的内容：

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPlink-example/server.png"/></div>

现在服务器已经启动并运行！

- 保持之前的终端运行，打开一个新的终端。同样导航到 Arduino 开发板路径的根位置。然后导航到 arm-gcc 路径：

```sh
cd ~/Library/Arduino15/packages/Seeeduino/tools/arm-none-eabi-gcc/7-2017q4/bin
```

- 在此路径下，您可以运行以下命令：

```sh
./arm-none-eabi-gdb
```

- 进入 gdb 后，使用以下命令连接目标：

```sh
target remote localhost:3333
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPlink-example/target.png"/></div>

- 从 Arduino 开发板库根路径加载 Arduino 引导程序：

> 您也可以在这里找到 Seeed SAMD 开发板的引导程序：[https://github.com/Seeed-Studio/ArduinoCore-samd/tree/master/bootloaders](https://github.com/Seeed-Studio/ArduinoCore-samd/tree/master/bootloaders)

**注意：** 您可能需要将 `ansonhe` 更改为您的用户名或调整为您的正确路径。

```sh
file /Users/ansonhe/Library/Arduino15/packages/Seeeduino/hardware/samd/1.7.9/bootloaders/zero/samd21_sam_ba.elf
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPlink-example/file.png"/></div>

- 将引导程序刷写到目标设备：

```sh
load
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPlink-example/load.png"/></div>

- 按下复位按钮重置目标设备，您应该看到 COM 端口出现。现在 Arduino 引导程序已经使用 Seeeduino XIAO 作为 DAPLink 设备成功刷写到 Seeeduino Lotus Cortex M0+！

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPlink-example/ports.png"/></div>

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