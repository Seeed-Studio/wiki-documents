---
description: Arch Max
title: Arch Max
keywords:
- Arch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Arch_Max
last_update:
  date: 2/1/2023
  author: hushuxu
---



Arch Max 是一个支持 mbed 的开发板，用于快速原型设计。
它基于 STM32F407VET6 微控制器，配备 ARM Cortex-M4F 内核，运行频率为 168MHz。它包括一个开放链接，提供 SWD 调试、拖放编程和 USB 串行通信功能。

##   特性  

*   支持 mbed

    *   在线开发工具

        *   易于使用的 C/C++ SDK

        *   大量已发布的库和项目

*   高性能 STM32F407VET6

    *   ARM Cortex-M4 MCU，带 FPU，运行频率为 168MHz

        *   512 KB Flash，192 KB RAM

*   板载开放链接用于调试和编程

    *   拖放编程

        *   USB 串行通信

        *   使用 GDB+ pyOCD/OpenOCD、Keil 或 IAR 进行 SWD 调试

*   Arduino 兼容外形，支持大量扩展板

*   内置以太网、USB 和 SD 卡插槽，用于连接和数据交换

##   规格  

<table cellspacing="0" width="80%">
<tr>
<th scope="col">项目</th>
<th scope="col">典型值</th>
</tr>
<tr>
<th scope="row">工作电压</th>
<td>5V</td>
</tr>
<tr>
<th scope="row">微控制器</th>
<td>STM32F407VET6</td>
</tr>
<tr>
<th scope="row">Flash 存储</th>
<td>512kB</td>
</tr>
<tr>
<th scope="row">RAM</th>
<td>192kB</td>
</tr>
<tr>
<th scope="row">UART</th>
<td>4</td>
</tr>
<tr>
<th scope="row">I2C</th>
<td>3</td>
</tr>
<tr>
<th scope="row">SPI</th>
<td>3</td>
</tr>
<tr>
<th scope="row">CAN</th>
<td>2</td>
</tr>
<tr>
<th scope="row">SDIO</th>
<td>1</td>
</tr>
<tr>
<th scope="row">摄像头接口</th>
<td>1</td>
</tr>
<tr>
<th scope="row">以太网</th>
<td>1</td>
</tr>
<tr>
<th scope="row">ADC 通道</th>
<td>8</td>
</tr>
<tr>
<th scope="row">I/O 引脚</th>
<td>40</td>
</tr>
<tr>
<th scope="row">数字 I/O 最大输入电压</th>
<td>5.0V</td>
</tr>
<tr>
<th scope="row">尺寸</th>
<td>90mm x 44mm</td>
</tr>
</table>

##   引脚定义

![](https://files.seeedstudio.com/wiki/Arch_Max/img/Arch_Max_Pinout.png)

##   使用方法

![](https://files.seeedstudio.com/wiki/Arch_Max/img/Get_started_with_mbed.png)

1.  点击 [此链接](https://developer.mbed.org/compiler/#import:/teams/mbed/code/mbed_blinky/;platform:Seeed-Arch-MAX) **登录或注册 mbed**

2.  导入 mbed_blinky 程序

3.  点击顶部工具栏的 **Compile** 图标编译程序，然后下载编译后的 hex 文件。

4.  将下载的 bin 文件拖放到 MBED 磁盘中

您可以打开 **main.cpp** 修改程序。例如，使用以下代码每 0.1 秒闪烁一次 LED：

```c
#include "mbed.h"

DigitalOut led(LED1);           // 板载 LED 连接到 D13

int main()
{
    while (true) {
        led = !led;
        wait(0.1);
    }
}
```

##   调试

要启用 SWD 调试或通过 USB 虚拟串口获取调试信息，请安装 [mbed 提供的驱动程序](https://developer.mbed.org/handbook/Windows-serial-configuration)。

##   更新或恢复固件

Arch Max 的最新固件版本为 v0203，构建日期为 2014 年 10 月 8 日。要检查您的固件版本和构建日期，请在文本编辑器中打开 MBED 磁盘中的 MBED.HTM 文件。

[Arch Max 的固件 v0203 2014-10-08](https://developer.mbed.org/media/uploads/yihui/lpc11u35_nrf51822_if_mbed_v203_20141008.bin)

*   按住 Arch Max 的按钮并通电

*   将显示一个 CRP DISABLD 磁盘

    *   在 Windows 上，用上述固件替换 firmware.bin

        *   在 Linux/Mac 上，使用命令：**dd if=new_firmware.bin of=firmware.bin conv=notrunc**

##   版本

<table>
<tr>
<th>名称</th>
<th>版本</th>
<th>备注</th>
</tr>
<tr>
<td>Arch Max v1.0</td>
<td>v1.0</td>
<td>5V 电源未连接到 USB 电源，用户需连接外部电源</td>
</tr>
<tr>
<td>Arch Max v1.1</td>
<td>v1.1</td>
<td>5V 电源可连接到 USB 电源</td>
</tr>
</table>


## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Arch_Max/res/ARCH_Max.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



##   资源

- **[Eagle]**  [ARCH Max 原理图 Eagle 文件](https://files.seeedstudio.com/wiki/Arch_Max/res/ARCH_Max.zip)
- **[PDF]**[Arch Max PCB](https://files.seeedstudio.com/wiki/Arch_Max/res/Arch%20Max.pdf)
- **[EAGLE]**[Arch Max 原理图](https://files.seeedstudio.com/wiki/Arch_Max/res/Arch%20Max.sch)
- **[Eagle]**  [ARCH Max 板文件](https://files.seeedstudio.com/wiki/Arch_Max/res/Arch%20Max.brd)
- **[Datasheet]**  [STM32F407 数据手册](https://files.seeedstudio.com/wiki/Arch_Max/res/STM32F407.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，确保您使用我们的产品时体验顺畅。我们提供多种沟通方式以满足不同的需求和偏好。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>