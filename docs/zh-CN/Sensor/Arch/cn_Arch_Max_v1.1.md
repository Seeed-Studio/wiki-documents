---
description: Arch Max v1.1
title: Arch Max v1.1
keywords:
- Arch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Arch_Max_v1.1
last_update:
  date: 2/1/2023
  author: hushuxu
---

![](https://files.seeedstudio.com/wiki/Arch_Max_v1.1/img/Arch_Max_v1.1_product_view.jpg)

Arch Max 是一个支持 mbed 的开发板，用于快速原型开发。它基于 STM32F407VET6 微控制器，配备 ARM Cortex-M4F 内核，运行频率为 168MHz。它提供 [Serial Wire Debug](https://en.wikipedia.org/wiki/Joint_Test_Action_Group#Serial_Wire_Debug)(SWD) 调试、拖放式编程和 USB 串行通信。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/Arch-Max-v11-p-2632.html)

版本追踪
-------

| 名称                        | 版本   | 备注                                                                            |
|-----------------------------|--------|---------------------------------------------------------------------------------|
| Arch Max v1.0               | v1.0   | 5V 无法通过 USB 供电，用户需连接外部电源                                         |
| Arch Max v1.1               | v1.1   | 5V 无法通过 USB 供电                                                             |

功能特点
--------

-   支持 mbed
    -   在线开发工具（包括 IDE）
    -   完整且简单的 C/C++ SDK
    -   大量示例和教程
-   高性能 STM32F407VET6
    -   ARM Cortex-M4 MCU，带有 168MHz 的 FPU
    -   512 KB Flash 内存，192 KB RAM
-   板载编程和调试
    -   拖放式编程
    -   USB 串行通信
    -   使用 GDB+ pyOCD/OpenOCD、Keil 或 IAR 的 SWD 调试
-   Arduino 兼容外形，支持大量扩展板
-   内置以太网端口、USB 和 SD 卡插槽，用于互联网连接和数据交换

规格参数
--------------

| 参数/项目                   | 值             |
|-----------------------------|----------------|
| 工作电压                   | 5V             |
| 微控制器                   | STM32F407VET6  |
| Flash 内存                 | 512KB          |
| RAM                        | 192KB          |
| UART                       | 4              |
| I2C                        | 3              |
| SPI                        | 3              |
| CAN                        | 2              |
| SDIO                       | 1              |
| 摄像头接口                 | 1              |
| 以太网                     | 1              |
| ADC 通道                   | 8              |
| I/O 引脚                   | 40             |
| 数字 I/O 最大输入电压      | 5.0V           |
| 尺寸                       | 90mm x 44mm    |

硬件概览
--------------

![](https://files.seeedstudio.com/wiki/Arch_Max_v1.1/img/Arch_Max_Pinout.png)

使用方法
-----

![](https://files.seeedstudio.com/wiki/Arch_Max_v1.1/img/Get_started_with_mbed.png)

1.  点击 [这里](<https://developer.mbed.org/compiler/#import:/teams/mbed/code/mbed_blinky/;platform:Seeed-Arch-MAX>) 登录或注册 mbed。
2.  导入 mbed_blinky 程序。
3.  点击顶部工具栏的 **Compile** 图标编译程序，然后下载编译后的 hex 文件。
4.  将下载的 bin 文件拖放到 mbed 磁盘中。

您可以打开 **main.cpp** 来更改程序。例如，使用以下代码让 LED 每 0.1 秒闪烁一次：

```cpp
#include "mbed.h"

DigitalOut led(LED1);          // 板载 LED 连接到 D13

int main()
{
    while (true) {
        led = !led;
        wait(0.1);
    }
}
```

<div class="admonition note">
<p class="admonition-title">注意</p>
<p>如果您遇到编译错误提示 'device.h' 未找到，请尝试在您的程序中将 mbed 库更新到最新版本。</p>
</div>

## 在线原理图查看器

<div class="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Arch_Max_v1.1/res/Arch_Max_v1.1_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

资源
---------

-   [Arch Max v1.1 mbed 开发平台页面](https://developer.mbed.org/platforms/Seeed-Arch-Max/)
-   [PDF 格式的原理图](https://files.seeedstudio.com/wiki/Arch_Max_v1.1/res/Arch_Max_v1.1_pdf.pdf)
-   [EAGLE 格式的原理图和板文件](https://files.seeedstudio.com/wiki/Arch_Max_v1.1/res/Arch_Max_v1.1_Eagle.zip)
-   [LPC11U35 固件](https://files.seeedstudio.com/wiki/Arch_Max_v1.1/res/Lpc11u35_stm32f4xx_if_mbed.bin.zip)

<!-- 此 Markdown 文件来源于 https://www.seeedstudio.com/wiki/Arch_Max_v1.1 -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>