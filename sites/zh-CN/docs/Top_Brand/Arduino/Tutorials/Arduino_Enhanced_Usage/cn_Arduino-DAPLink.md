---
description: 使用 Arduino 开发板作为 DAPLink 设备
title: 使用 Arduino 开发板作为 DAPLink 设备
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Arduino-DAPLink
last_update:
  date: 1/16/2023
  author: jianjing Huang
---

# 如何使用 Arduino 开发板作为 DAPLink 设备

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/eclipse-10.png"/></div>

## 什么是 DAPLink

**[Arm Mbed DAPLink](https://armmbed.github.io/DAPLink/)** 是一个开源软件项目，用于对运行在 **Arm Cortex CPU** 上的应用软件进行编程和调试。DAPLink 通常被称为接口固件，运行在连接到应用 MCU 的 SWD 或 JTAG 端口的辅助 MCU 上。这种配置在几乎所有开发板上都可用。它在您的开发计算机和 CPU 调试访问端口之间创建了一个桥梁。

>请同时访问 [DAPLink](https://github.com/ARMmbed/DAPLink) 获取更多信息。

### Arduino 开发板的 DAPLink

现在，我们已经**开发了运行在您的 Arduino 开发板**（*SAMD 系列*）上的 DAPLink 固件，如 [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) 和 [Seeeduino Xiao](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)，这样您就可以以最经济有效的方式上传和调试支持 DAPLink 的开发板！

### 特性

- 调试和烧录 Arm Cortex CPU
- 提供虚拟串口，无需 USB 转串口
- 拖拽上传固件（即将推出）

## 支持的开发板

它支持 Seeed 的所有 SAMD 开发板：

- [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
- [Seeeduino XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)
- Seeeduino Zero 系列：
  - [Seeeduino Cortex-M0+](https://www.seeedstudio.com/Seeeduino-Cortex-M0-p-4070.html)
  - [Seeeduino Lotus Cortex-M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)
  - [Wio Lite W600 - ATSAMD21 Cortex-M0 无线开发板](https://www.seeedstudio.com/Wio-Lite-W600-p-4155.html)
  - [Wio Lite MG126 - ATSAMD21 Cortex-M0 蓝牙无线开发板](https://www.seeedstudio.com/Wio-Lite-MG126-p-4189.html)
- [Seeeduino LoRaWAN](https://www.seeedstudio.com/Seeeduino-LoRaWAN-p-2780.html)

:::note
请确保您已安装了 **最新的 Seeed ArduinoSAMD 开发板库（>=1.8.1）** 以使其正常工作！
:::

## 开始使用

### 1. 安装 DAPLink Arduino 库

1. 访问 [**Seeed_Arduino_DAPLink**](https://github.com/Seeed-Studio/Seeed_Arduino_DAPLink/) 仓库，将整个仓库下载到您的本地驱动器。

2. 现在，可以将 Seeed_Arduino_DAPLink 库安装到 Arduino IDE。打开 Arduino IDE，点击 `sketch` -> `Include Library` -> `Add .ZIP Library`，选择您刚刚下载的 `Seeed_Arduino_DAPLink` 文件。

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

### 2. 安装 Adafruit_TinyUSB_Arduino 库

1. 访问 [**Adafruit_TinyUSB_Arduino**](https://github.com/adafruit/Adafruit_TinyUSB_Arduino) 仓库，将整个仓库下载到您的本地驱动器。

2. 现在，可以将 Adafruit_TinyUSB_Arduino 库安装到 Arduino IDE。打开 Arduino IDE，点击 `sketch` -> `Include Library` -> `Add .ZIP Library`，选择您刚刚下载的 `Adafruit_TinyUSB_Arduino` 文件。

### 自定义引脚定义

如果您使用的是 **Wio Terminal** 或 **Seeeduino Xiao**，您可以跳过此部分，直接使用默认定义。

- DAPLink 的引脚定义在 `Seeed_Arduino_DAPLink/src` 下的 **`DAP_config.h`** 中定义，参考以下内容：

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/pins-new.png"/></div>

### 上传到 Arduino 开发板

使用 Arduino IDE 打开 `Seeed_Arduino_DAPLink/example` 下的 `simple_daplink.ino`。在 `Tools` -> `USB Stack` 下选择 **TinyUSB**。

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/usbstack.png"/></div>

编译并上传代码！

## 硬件连接示例

在本wiki中，我们使用了[STM32F410RB开发板](https://www.st.com/en/microcontrollers-microprocessors/stm32f410rb.html)作为连接示例：

>如果您已更改引脚定义，请根据您自己的定义进行连接。

- Seeeduino Xiao 连接示例

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/daplink-xiao.jpg"/></div>

- Wio Terminal 连接示例

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/daplink-wt.jpg"/></div>

## IDE调试和烧录示例

我们的Arduino开发板现在成为了用于MCU上传的DAPLink设备！让我们看一些不同IDE的示例供参考。

### 使用OpenOCD进行调试

- 根据上述连接将Arduino DAPLink连接到目标开发板，并连接到您的PC。

- 确保您已安装OpenOCD。

- 打开终端并运行以下命令：

根据您的开发板更改为您的设备目标，您可以查看[官方文档](http://openocd.org/doc/html/CPU-Configuration.html)进行参考。

```sh
openocd -f interface/cmsis-dap.cfg -f target/stm32f4x.cfg
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/openocd-1.png"/></div>

- 在您的开发板项目构建路径下，运行gcc，看起来像下面这样：

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/openocd-2.png"/></div>

- 在gdb下，通过运行以下命令连接到本地主机：

```sh
target remote 127.0.0.1:3333
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/openocd-3.png"/></div>

- 现在开发板已连接，您可以开始调试或上传！

运行`load`上传到开发板：

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/openocd-4.png"/></div>

GDB的一些有用命令：

- `continue/cont`
- `ctrl`+`c`
- `next`
- `break`
- `info break`
- `clear`
- `delete`
- `list`

### 使用Eclipse进行调试

对于Eclipse，它与OpenOCD非常相似，因为它可以使用OpenOCD作为后端。

- 导航到**Help** -> **Eclipse Marketplace**，搜索并下载**Eclipse Embedded CDT**：

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/eclipse-2.png"/></div>

- 导航到**Window** -> **Preference** -> **MCU** -> **Global OpenOCD Path**并填入您的OpenOCD路径，如下所示：

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/eclipse-3.png"/></div>

- 构建您的项目。在**Run Last Tool**下，点击**External Tools Configurations**：

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/eclipse-5.png"/></div>

- 复制以下设置，请更改为您的路径（以及您的目标板）。

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/eclipse-6.png"/></div>

如果一切顺利，应该看起来像这样：

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/eclipse-8.png"/></div>

- 在**Debug**下，点击**Debug Configurations**，选择**Debugger**部分，并填入您的gcc路径：

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/eclipse-9.png"/></div>

现在一切就绪，可以开始调试了！

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/eclipse-10.png"/></div>

更多参考，请查看[这里](https://gnu-mcu-eclipse.github.io/debug/openocd/)。

### 使用Keil进行调试

- 根据上述连接将Arduino DAPLink连接到目标开发板并连接到您的PC。

要在Keil中使用我们的Arduino DAPLink，请检查以下内容：

- 用Keil打开您的项目，点击**Options for target**。

您应该看到如下所示的窗口。确保设备与您的设备匹配。导航到**Debug**部分并选择**CMSIS-DAP Debugger**。

- 点击**CMSIS-DAP Debugger**旁边的**settings**。

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/keil-1.png"/></div>

- 选择**Seeed CMSIS-DAP**（我们的Arduino开发板），您应该看到它已连接。

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/keil-2.png"/></div>

- 您可能还想导航到**Flash Download**部分以确保它是正确的设备，然后点击**OK**。

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/keil-3.png"/></div>

- 点击**Build**和**Flash**！

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/keil-4.png"/></div>

### 使用IAR Embedded Workbench进行调试

- 根据上述连接将Arduino DAPLink连接到目标开发板并连接到您的PC。

- 打开您的项目，导航到**Project** -> **Options**。在Options菜单中，选择**Debugger**：

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/iar-1.png"/></div>

- 在**Setup**选项卡中，从Driver下拉菜单中选择**CMSIS DAP**。

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/iar-2.png"/></div>

- 在**Download**选项卡中，勾选Verify download和Use **flash loader(s)**

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/iar-3.png"/></div>

- 从左侧菜单中选择**CMSIS DAP**，选择**Interface**选项卡并配置**SWD**协议。

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/iar-4.png"/></div>

- 点击**OK**，然后您可以点击**Download and Debug**！

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/iar-5.png"/></div>

## 串口使用

为了让使用更加便捷，我们还在 Arduino 代码中实现了 USB 转串口功能，这样您就无需额外的硬件！

- 默认情况下，它被定义为 `Serial1`，这是硬件串口引脚。例如，对于 Seeeduino XIAO，它是引脚 6 和 7。

:::note
    您可以在 Arduino 代码中定义自己的串口。
:::

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-pinout.jpg"/></div>

>参考用法，请查看[这里](https://wiki.seeedstudio.com/cn/How-to-use-Seeeduino-XIAO-to-log-in-to-your-Raspberry-PI/)。

## 资源

- [DAPLink 官方 Github](https://github.com/ARMmbed/DAPLink)
- [OpenOCD 文档](http://openocd.org/doc/html/index.html)

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