---
title: Wio RP2040 mini 开发板入门指南
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/
slug: /cn/Wio_RP2040_mini_Dev_Board-Onboard_Wifi
last_update:
  date: 01/11/2022
  author: gunengyu
---
![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_1.jpg)

Wio RP2040 mini 开发板是一款基于 Wio RP2040 模块的开发板，具有无线功能，支持 MicroPython 编程。它搭载双核 133MHz RP2040 芯片，这是一款具有无线功能的低功耗微控制器。凭借强大的性能和小巧的尺寸，它是各种物联网项目开发的完美选择。


该开发板具有丰富的接口，包括 28 个 GPIO 引脚（19 个引脚支持 PIO 和 PWM）、2 个 UART、4 个 ADC、2 个 SPI、2 个 I2C。一些引脚可以复用，例如 GP12 和 GP13 具有 I2C、SPI、UART 功能。这就是为什么 28 个 GPIO 引脚可以实现更多 I/O 引脚和接口的原因。Wio RP2040 mini 无线开发板支持 USB Type-C 接口，可以供电和下载代码。除了板载电源 LED 指示灯外，我们还添加了一个用户可控制的 LED（连接到 GP13 引脚）。一个复位按钮（板上丝印为"RUN"）和一个启动按钮（可用于重新上传固件）。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/Wio-RP2040-mini-Dev-Board-p-4933.html)
## 主要特性


- **强大的 CPU：** 
   - 双核 133MHz RP2040 处理器和 264KB SRAM，2MB Flash
- **可靠的无线连接：** 
   - 使用强大的 wifi 芯片，支持 2.4~2.4835 GHz 频率和 Ap&Station 模式
- **灵活性：**
   - 兼容 Thonny 编辑器
- **简单的项目操作：** 
   - 面包板友好
- **多项认证：** 
   - FCC 和 CE 认证
- **支持编程语言：**
   - MicroPython


## 规格参数
| 名称 | 详细信息 |
| --- | --- |
| 处理器 | 双核 Cortex M0+ 处理器，最高 133 MHz |
| SRAM | 264KB |
| Flash | 2MB |
| 无线连接 | 2.4〜2.4835 GHz；IEEE802.11 b/g/n；Ap & Station |
| GPIO、PIO 和 PWM 引脚 | 20 |
| I2C  | 2 |
| SPI | 2 |
| UART | 2 |
| ADC | 4 |
| 电源/下载  | Type-C |
| 电源供应 | 5V DC |
| 尺寸 | 25.8 x 45.5mm |

## 硬件概览
![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_3.png)
## 引脚图
![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_4.png)

:::note
		I/O 引脚：MCU 运行在 3.3V。如果连接到通用 I/O 引脚的输入电压高于 3.3V，可能会对芯片造成损坏。请注意使用，不要掀起屏蔽罩。
:::
## 入门指南
主控板内置了 MicroPython 固件，因此用户可以直接连接到 Thonny 代码编辑器。如果您的固件损坏或想要替换为其他固件，您可以将 [firmware-v1.15.1.uf2](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/firmware-v1.15.1.uf2) 下载到计算机。按住 RP2040 主控板的 BOOT 按钮，然后用 USB 线缆连接。此时计算机会多出一个可移动磁盘，然后将您下载的固件拖拽到可移动磁盘中即可完成固件更新。

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_5.png)
### 硬件要求

- Wio RP2040 mini 开发板 x 1
- 计算机 x 1
- USB Type-C 线缆 x 1

通过 USB 线缆将 Wio RP2040 mini 开发板连接到计算机，板上的红色 LED 电源指示灯应该点亮。

| 固件版本            | 更新日志  | 下载|
|-----------------------|--------------|---------|
|V1.15.1|第一个正式版本|[firmware-v1.15.1.uf2](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/firmware-v1.15.1.uf2)|
|V1.15.2|修复 Socket 的稳定性并添加连接失败的错误消息|[firmware-v1.15.2.uf2](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/v1.15.2.uf2)|
|V1.15.3|将原来的函数 'wait_msg()' 重命名为 'check_msg()' 函数，并添加新的 'wait_msg()' 函数。它们之间的主要区别是原来的 'wait_msg' 函数在没有'等待'到数据时会阻塞程序执行。而 'check_msg()' 函数只会检测是否接收到数据。当接收到时，它会执行回调，如果没有，程序仍会继续执行。|[firmware-v1.15.3.uf2](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/1.15.3.uf2)|


:::note
       wiki 教程中使用的固件版本是 V1.15.1。
       如果您使用新版本的固件，请参考固件更新日志来修改示例代码。
:::

## 软件
#### 1. 安装 Thonny 
易于上手。Thonny 内置了 Python 3.7，因此只需要一个简单的安装程序，您就可以开始学习编程了。首先，点击 [Thonny.org](https://thonny.org/) 进入下载页面。在页面右上角，根据您的操作系统选择相应的 Thonny 安装包进行下载。双击您下载的安装包打开它，并按照步骤进行安装。

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_6.png)

现在您已经安装了 Thonny，打开应用程序。您应该会看到 Thonny 的主界面：

![1.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_7.png)
Thonny 的主界面非常简单，分为以下四个部分：

1.工具栏：基本常用工具，如新建、打开、保存、运行当前脚本、停止等。

2.代码编辑器：Thonny 的核心区域，我们将在这里编写 Python/MicroPython 代码。

3.Shell：我们可以在这里运行命令，命令的结果将立即显示在 Shell 中。我们也可以在 Shell 窗口中看到代码的输出。

4.解释器：在这里您可以选择解释器类型来编译程序。点击 Python 3.7.9，在弹出菜单中找到 MicroPython (Raspberry pi Pico)，然后点击确定将解释器切换到 Pico 解释器。您也可以点击"工具>>>选项>>>解释器"来选择。

![2.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_8.png)
![3.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_9.png)
#### 2.连接 Wio RP2040 mini 开发板
使用数据线将开发板连接到计算机，然后点击工具栏上的"重启后端"按钮。如果 Wio RP2040 成功连接到计算机，您将在 Shell 中看到 MicroPython 版本信息和设备名称。
![4.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_10.png)
#### 3.点亮板载 LED 灯。
因为开发板的 PIN13 连接了一个 LED 灯，我们可以通过拉高 PIN13 引脚来点亮 LED 灯。接下来，点击"文件"并选择"新建文件"来创建一个新的程序文件，然后编写以下代码：
```python
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
​

**按下工具栏中的播放图标来运行您的代码。**
![5.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_11.png)
如果运行正常，您将看到 LED 灯每秒钟开关一次。递增数字的输出将显示在 Shell 中。
![6.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_12.png)


## FAQ


#### 1.我需要代码在启动后自动运行。
您需要将代码重命名为"main.py"并保存到主控板上。当主控板下次重启时，它将自动运行 main.py 程序。


#### 2.运行带有网络功能的代码后，如果我运行其他程序会报错或崩溃。
您可以点击主控板的 RESET 按钮重启板子，然后重新连接到 Thonny 编辑器再运行其他程序。

## 资源

- **[BRD]** [Wio_RP2040 mini v1.1](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wio_RP2040_mini_v1.1.brd)

- **[PDF]** [Wio_RP2040 mini v1.1.pdf](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wio_RP2040_mini_v1.1.pdf)

- **[SCH]** [Wio_RP2040 mini v1.1.sch](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wio_RP2040_mini_v1.1.sch)


## 技术支持与产品讨论
如果您有任何技术问题，请将问题提交到我们的[论坛](http://forum.seeedstudio.com/)。
感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>