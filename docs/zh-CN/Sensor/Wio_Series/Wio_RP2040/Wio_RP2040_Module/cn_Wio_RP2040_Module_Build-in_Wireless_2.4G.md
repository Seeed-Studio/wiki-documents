---
title: Wio RP2040 模块
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Wio_RP2040_Module_Build-in_Wireless_2.4G/
slug: /cn/Wio_RP2040_Module_Build-in_Wireless_2.4G
last_update:
  date: 01/11/2022
  author: gunengyu
---

![enter image description here](https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/module_1.jpg)

Wio RP2040 模块是 Seeed 自主开发的使用 RP2040+WiFi 芯片的模块，支持 MicroPython 编程。它具有 Cortex M0+ 双核，灵活时钟运行频率高达 133MHz。该模块是一个具有无线功能的低功耗微控制器。凭借强大的性能和小巧的尺寸，它是各种物联网项目开发的完美选择。该模块可以轻松焊接在各种 PCB 背板上。

该模块具有丰富的接口，包括 28 个 GPIO 引脚（19 个引脚支持 PIO 和 PWM）、2 个 UART、4 个 ADC、2 个 SPI、2 个 I2C。一些引脚可以复用，例如 GP12 和 GP13 具有 I2C、SPI、UART 功能。这就是为什么 28 个 GPIO 引脚可以实现更多 I/O 引脚和接口的原因。Wio RP2040 模块还有一个 USB 引脚，可以设计为支持 USB Type-C 接口。
[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/Wio-RP2040-Module-p-4932.html)  

## 主要特性

- **强大的 CPU**：双核 133MHz Cortex M0+ 处理器和 264KB SRAM，2MB Flash
- **可靠的无线连接**：使用强大的 WiFi 芯片，支持 2.4~2.4835 GHz 频率和 AP&Station 模式
- **灵活性**：兼容 Thonny 编辑器
- **小尺寸**：18.0x 28.2x 1.0mm 32 引脚 SMT
- **多项认证**：FCC 和 CE 认证
- **支持编程语言**：MicroPython

## 规格参数

| 名称             | 详细信息  |
|-----------------------|--------------|
| 处理器     | 双 Cortex M0+ 处理器，最高 133 MHz       |
| SRAM | 264KB |
| Flash          | 2MB            |
| 无线连接         | 2.4〜2.4835 GHz；IEEE802.11 b/g/n；AP & Station            |
| GPIO，PIO 和 PWM 引脚            | 20            |
| I2C             | 2            |
| SPI                  | 2   |
| UART                  | 2   |
| ADC                  | 4   |
| VIN                  | 5V-3.6V DC   |
| 尺寸                  | 18.0 x 28.2 x 1.0mm   |

## 硬件概述

![enter image description here](https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/module_3.png)

:::note
		I/O 引脚：MCU 运行在 3.3V。如果连接到通用 I/O 引脚的电压输入高于 3.3V，可能会对芯片造成损坏。请注意使用，不要掀起屏蔽罩。
:::
## 入门指南
如果您想为此模块上传 MicroPython 固件，您可以将 [firmware-v1.15.1.uf2](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/firmware-v1.15.1.uf2) 下载到计算机，然后将 BOOT 引脚拉低并根据以下接线图连接 MicroUSB 母座，最后，您可以通过数据线连接到计算机。此时计算机将有一个额外的可移动磁盘，然后将您下载的固件移动到可移动磁盘以完成固件更新。
![enter image description here](https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/image1.png)


| 固件版本          | 更新日志  | 下载|
|-----------------------|--------------|---------|
|V1.15.1|第一个正式版本|[firmware-v1.15.1.uf2](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/firmware-v1.15.1.uf2)|
|V1.15.2|修复 Socket 的稳定性并添加连接失败的错误消息|[firmware-v1.15.2.uf2](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/v1.15.2.uf2)|
|V1.15.3|将原始函数 'wait_msg()' 重命名为 'check_msg()' 函数，并添加新的 'wait_msg()' 函数。它们之间的主要区别是原始的 'wait_msg' 函数在没有"等待"到数据时会阻塞程序执行。而 'check_msg()' 函数只会检测是否接收到数据。当接收到时，它会执行回调，如果没有，程序仍会继续执行。|[firmware-v1.15.3.uf2](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/1.15.3.uf2)|


:::note
    wiki 教程中使用的固件版本是 V1.15.1。
    如果您使用新版本的固件，请参考固件更新日志修改示例代码。
:::

### 软件

#### 1. 安装 Thonny
易于入门。Thonny 内置 Python 3.7，因此只需要一个简单的安装程序，您就可以开始学习编程了。首先，点击 [Thonny.org](https://thonny.org/) 进入下载页面。在页面右上角，根据您的操作系统选择 Thonny 安装包进行下载。双击您下载的安装包打开它，并按照步骤进行安装。
![enter image description here](https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/module_4.png)
现在您已经安装了 Thonny，打开应用程序。您应该看到 Thonny 的主界面：
![enter image description here](https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/module_5.png)
Thonny 的主界面非常简单，分为以下四个部分：

1.工具栏：基本常用工具，如新建、打开、保存、运行当前脚本、停止等。

2.代码编辑器：Thonny 的核心区域，我们将在这里编写 Python/MicroPython 代码。

3.Shell：我们可以在这里运行命令，命令的结果将立即在 Shell 中显示。我们也可以在 Shell 窗口中看到代码的输出。

4.解释器：在这里你可以选择编译程序的解释器类型。点击 Python 3.7.9，在弹出菜单中找到 MicroPython (Raspberry pi Pico)，然后点击确定将解释器切换为 Pico 解释器。你也可以点击"工具>>>选项>>>解释器"来选择。

![enter image description here](https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/module_6.png)
![enter image description here](https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/module_7.png)

#### 2.连接 Wio RP2040 模块
要连接 Wio RP2040 模块，你需要正确引出 USB 引脚并将它们连接到数据线。使用数据线将模块连接到计算机，然后点击工具栏上的"重启后端"按钮。如果 Wio RP2040 成功连接到计算机，你将在 Shell 中看到 MicroPython 版本信息和设备名称。
![enter image description here](https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/module_8.png)

#### 3. 控制 I/O 引脚
你可以使用以下代码拉高 GP13 引脚：
```
from machine import Pin, Timer

led = Pin(13, Pin.OUT)
Counter = 0
Fun_Num = 0

def fun(tim):
    global Counter
    Counter = Counter + 1
    print(Counter)
    led.value(Counter%2)
    
tim = Timer(-1)
tim.init(period=1000, mode=Timer.PERIODIC, callback=fun)


```
按下工具栏中的播放图标来运行你的代码。
![enter image description here](https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/module_9.png)
你可以将一个 LED 灯连接到 GP13 引脚来检测引脚是否正常驱动。

## 常见问题

### 1. 我需要代码在启动后自动运行。

你需要将代码重命名为"main.py"并保存在主控板上。当主控板下次重启时，它将自动运行 main.py 程序。

### 2. 运行带有网络功能的代码后，如果我运行其他程序会报错或崩溃。

你可以点击主控板的 RESET 按钮重启板子，然后重新连接到 Thonny 编辑器来运行其他程序。

### 3. 我想看更多示例程序/项目。

你可以参考 Wio RP2040 mini 开发板 wiki，那里有更多示例项目，这些项目都是通用的。


## 技术支持与产品讨论
如果你有任何技术问题，请将问题提交到我们的[论坛](http://forum.seeedstudio.com/)。
感谢你选择我们的产品！我们在这里为你提供不同的支持，以确保你使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道来满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>