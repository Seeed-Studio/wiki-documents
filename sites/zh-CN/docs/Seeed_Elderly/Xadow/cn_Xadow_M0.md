---
description: Xadow - M0
title: Xadow - M0
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Xadow_M0
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Xadow_M0/img/Xadowm0.jpg)

<!-- Xadow - M0 是一款支持 mbed 的开发板，采用 [Xadow]() 外形规格。[Xadow]() 是一系列灵活的电子模块，包括传感器、显示器等。多个 Xadow 模块可以级联以创建交互式对象。 -->

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-M0-mbed-enabled-ARM-Cortex-M0-board-for-Rapid-Prototyping-p-1880.html)

## 特性
---
- 支持 mbed
 - 在线开发工具
 - 易于使用的 C/C++ SDK
 - 大量已发布的库和项目
- Xadow 外形规格
 - 极小且灵活
 - 级联连接
- 拖放式编程
- NXP LPC11U35 MCU
 - 低功耗 ARM Cortex-M0 内核
 - 48MHz，64KB Flash，10KB RAM，4KB EEPROM
 - USB 设备，2xSPI，UART，I2C
- 集成加速度计：ADXL345

## 规格
---
- 工作电压：3.3V
- 每个 IO 引脚的直流电流：20mA
- 数字 I/O 引脚：16
- 模拟输入通道：2
- 工作温度：-20~70 ℃
- 尺寸：25.43mm x 20.35mm

## 引脚图
---
![](https://files.seeedstudio.com/wiki/Xadow_M0/img/Xadow_M0_Pinout.png)

## 入门指南
---
1. 点击此链接注册或登录 mbed，然后将 xadow_m0_blinky 程序导入 mbed 在线编译器。

![](https://files.seeedstudio.com/wiki/Xadow_M0/img/Import_xadow_m0_blinky.png)

2. 在 mbed 在线 IDE 中，点击“Compile”（或使用 CTRL + D）编译代码并下载二进制文件。

![](https://files.seeedstudio.com/wiki/Xadow_M0/img/Compile_mbed_program.png)

3. 将开发板连接到电脑并**长按按钮**，一个名为 **CRP DISABLD** 的 USB 驱动器将会显示。

4. 删除 CRP DISABLD 驱动器中的 **firmware.bin** 文件，然后将下载的文件复制到该驱动器。

5. **快速按下按钮**，程序将运行，LED 将开始闪烁。

您可以打开 **main.cpp** 修改代码。例如，使用以下代码让 LED 每 0.1 秒闪烁一次。
```
#include "mbed.h"

DigitalOut blue(P0_20);

int main() {
    while(1) {
        blue = 1;         // 打开 LED。
        wait(0.1);        // 等待 0.1 秒。
        blue = 0;         // 关闭 LED。
        wait(0.1);        // 等待 0.1 秒。
    }
}
```

## 板载按钮的多功能性
---
默认情况下，板载按钮有两个功能：快速按下重置，长按进入 ISP 模式。我们可以添加更多功能！

例如，使用 [multifunction_for_reset_button](https://developer.mbed.org/users/yihui/code/multifunction_for_reset_button/) 可以实现：
- 单击 - 打开 LED1
- 双击 - 打开 LED2
- 长按 - 重置
- 按下按钮然后上电 - 进入 ISP 模式

## 在 Windows、Linux 或 Mac 上的编程架构
---
Arch 没有 mbed 接口。它使用 USB 内部系统编程（ISP）来升级固件。

要进入 USB ISP 模式，将 Arch 连接到您的电脑并长按其按钮，然后会出现一个名为 "CRP DISABLD" 的磁盘。
- 在 Windows 上
  1. 删除 "CRP DISABLD" 磁盘中的 firmware.bin 文件。
  2. 将新的固件复制到磁盘中。
- 在 Linux 上
  1. 如果磁盘未挂载，请将磁盘挂载到 \{mnt_dir\}。
  2. **dd if=\{new_firmware.bin\} of=\{mnt_dir\}/firmware.bin conv=notrunc**
- 在 Mac 上，您需要使用终端运行以下脚本，将 .bin 文件复制到 Arch：
  1. **dd if=\{new_firmare.bin\} of=/Volumes/CRP\ DISABLD/firmware.bin conv=notrunc**

如果您愿意，还可以创建一个 **Automator** 应用程序以支持将文件拖放到您的开发板。只需创建一个“运行 Shell 脚本”，使用以下命令：
dd if=$* of=/Volumes/CRP\ DISABLD/firmware.bin conv=notrunc

您还需要将“传递输入”选项从“到 stdin”更改为“作为参数”——否则您会在日志中看到错误 "The action 'Run Shell Script' encountered an error" 或 "dd: no value specified for if (1)"。

此外，改进版脚本如下：
- **dd if="${1}" of=/Volumes/CRP\ DISABLD/firmware.bin conv=notrunc**

该脚本可以处理文件路径中的空格，并且仅使用提供的第一个文件。

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_M0/res/Xadow_M0_Schematic.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源
---
- [文件:Xadow M0 Schematic.zip](https://files.seeedstudio.com/wiki/Xadow_M0/res/Xadow_M0_Schematic.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>