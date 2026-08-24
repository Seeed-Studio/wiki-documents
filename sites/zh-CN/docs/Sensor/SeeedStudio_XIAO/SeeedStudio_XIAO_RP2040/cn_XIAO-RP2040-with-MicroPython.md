---
description: Seeed Studio XIAO RP2040 搭配 MicroPython
title: MicroPython
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-RP2040-with-MicroPython
last_update:
  date: 1/11/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-08-06'
url: https://wiki.seeedstudio.com/cn/XIAO-RP2040-with-MicroPython/
---

# Seeed Studio XIAO RP2040 搭配 MicroPython

## MicroPython 简介

[MicroPython](https://github.com/micropython/micropython/wiki) 是一个带有部分本地代码编译功能的 Python 解释器。它提供了 Python 3.5 功能的一个子集，专为嵌入式处理器和受限系统实现。它与 CPython 不同，你可以在[这里](https://github.com/micropython/micropython/wiki/Differences)阅读更多差异说明。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/MicroPython-Logo.png" /></div>

## 入门

首先，我们将 Seeed Studio XIAO RP2040 连接到电脑，并从 MicroPython 上传一段简单代码，以检查开发板是否工作正常。

### 硬件准备

- [Seeed Studio XIAO RP2040](https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html) x1
- Type-C 线 x1
- 电脑 x1

### 软件准备

- **步骤 1**. 根据你的操作系统下载并安装最新版本的 [Thonny editor](https://thonny.org/)

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_6.png" /></div>

- **步骤 2**. 启动 Thonny

- **步骤 3**. 点击 **Tools-->Options** 打开设置。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_8.png" /></div>

- **步骤 4**. 选择 **Interpreter** 界面，将设备选择为 **MicroPython(Raspberry Pi Pico)**，端口选择为 **Try to detect port automatically**

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_9.png" /></div>

### 将 Seeed Studio XIAO RP2040 连接到电脑

- **步骤 1**. 按住 **BOOT** 按钮，然后通过 Type-C 线将 Seeed Studio XIAO RP2040 连接到电脑。如果一切正常，电脑上会出现名为 "RPI-RP2" 的磁盘。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk.png" /></div>

- **步骤 2**. 点击 **Install or update MicroPython**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/installandupdate.png" /></div>

随后它会自动搜索设备，并在 Target Volume 中显示出来。在下面 Micropython 的版本选择中，我们保持默认即可。

<div align="center"><img width={750} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython_1.png" /></div>

点击 Install 按钮，当安装状态显示 Done 时关闭此页面。固件烧录完成后，界面上会显示如下信息。

<div align="center"><img width={750} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython_2.png" /></div>

- **步骤 3**. 将以下代码复制到 Thonny 中。

```cpp
from machine import Pin, Timer

led = Pin(25, Pin.OUT)
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

- **步骤 4**. 点击 **Run current script** 按钮上传代码。第一次运行时，Thonny 会询问你要将代码文件保存到哪里。**This Computer** 和 **Raspberry Pi Pico** 都可以。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk7.png" /></div>

如果一切正常，你会看到 LED 灯以一秒一次的频率亮灭。同时，递增的数字输出也会显示在 Shell 中。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_13.png" /></div>

连接完成，现在我们可以继续进行其他项目。

### 连接 Seeed XIAO Studio XIAO RP2040 Plus

**步骤 1.** 烧录固件。下载 [XIAO RP2040 Plus Firmware](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/xiao_rp2040_plus_micropython.zip)。解压 ZIP 包后，按住 XIAO RP2040 Plus 上的 BOOT 按钮并将其连接到电脑。会弹出一个名为 **RPI-RP2** 的驱动器。将 **firmware.uf2** 文件复制到该驱动器中。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/mpy_1.png" /></div><br/>

**步骤 2.** 打开 Thonny IDE → Tools → Options，并按图示进行选择。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/mpy_2.png" /></div>

**步骤 3.** 版本信息会显示在 Shell 中。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/mpy_2_1.png" /></div><br/>

**步骤 4.** 进入 Files -> New，粘贴下面的代码并运行脚本。

```py
from machine import Pin, Timer

led = Pin(25, Pin.OUT)
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

- LED 将以 1 秒的间隔闪烁。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/mpy_1.jpg" /></div><br/>

:::tip

- [Additional Resources](#Additional-Resources) 部分包含适用于 XIAO RP2040 Plus 的 MicroPython 固件和相关示例。你可以按照 XIAO RP2040 教程使用这些示例，但请务必替换并修改相应的引脚。
- 如需查看 XIAO RP2040 系列之间的差异，请参考 [XIAO RP2040 Series Pin Overview](https://wiki.seeedstudio.com/cn/XIAO-RP2040/#硬件概述)

:::

## 点亮 Seeed Studio XIAO RP2040 上的 RGB LED

Seeed Studio XIAO RP2040 上配备了一个 RGB LED，我们将通过 MicroPython 将其点亮。由于需要第三方库，因此我们首先需要添加一个额外的库。

- **步骤 1**. 下载 [ws2812.py](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/ws2812.py) 库，并用 Thonny 打开。

- **步骤 2**. 点击 **File-->Save as** 并保存该库。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk4.png" /></div>

选择 **Raspberry Pi Pico** 作为保存位置。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk5.png" /></div>

确保保存的文件名为 **ws2812.py**，否则将无法工作。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk6.png" /></div>

- **步骤 3**. 将以下代码复制到 Thonny 中。

```cpp
from ws2812 import WS2812
import utime
import machine
power = machine.Pin(11,machine.Pin.OUT)
power.value(1)
BLACK = (0, 0, 0)
RED = (255, 0, 0)
YELLOW = (255, 150, 0)
GREEN = (0, 255, 0)
CYAN = (0, 255, 255)
BLUE = (0, 0, 255)
PURPLE = (180, 0, 255)
WHITE = (255, 255, 255)
COLORS = (BLACK, RED, YELLOW, GREEN, CYAN, BLUE, PURPLE, WHITE)

led = WS2812(12,1)#WS2812(pin_num,led_count)

while True:
    print("Beautiful color")
    for color in COLORS: 
        led.pixels_fill(color)
        led.pixels_show()
        utime.sleep(0.2)
```

- **步骤 4**. 点击 "Run current script" 按钮上传代码。第一次运行时，Thonny 会询问你要将代码文件保存到哪里。**This Computer** 和 **Raspberry Pi Pico** 都可以。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk7.png" /></div>

如果一切正常，你会看到 RGB LED 变换并闪烁灯光。同时，文本 "Beautiful Color" 的输出也会显示在 Shell 中。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_14.png" /></div>

## 通过 IIC 将 Seeed Studio XIAO RP2040 与显示屏连接

在本项目中，我们将通过 IIC 接口连接 [Grove - OLED Display 0.96" (SSD1315)](https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html)，以演示 Seeed Studio XIAO RP2040 上的 IIC 功能。

**硬件连接**

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_15.png" /></div>

- **步骤 1**. 下载 [ssd1306.py](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/ssd1306.py) 库，并用 Thonny 打开。

- **步骤 2**. 点击 "File-->Save as" 并将该库保存到 "Raspberry Pi Pico" 中

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk4.png" /></div>

选择 "Raspberry Pi Pico" 作为保存位置。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk5.png" /></div>

确保保存的文件名为 "ssd1306.py"，否则将无法工作。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk8.png" /></div>

- **步骤 3**. 将以下代码复制到 Thonny 中。

```cpp
from ssd1306 import SSD1306_I2C
from machine import Pin, I2C
from time import sleep

i2c = I2C(1, scl=Pin(7), sda=Pin(6), freq=200000)#Grove - OLED Display 0.96" (SSD1315)
oled = SSD1306_I2C(128, 64, i2c)

while True:  
    oled.fill(0)#clear
    oled.text("Hello,World!",0,0)
    oled.show()
    #sleep(0.5)
```

- **步骤 4**. 点击 "Run current script" 按钮上传代码。第一次运行时，Thonny 会询问你要将代码文件保存到哪里。**This Computer** 和 **Raspberry Pi Pico** 都可以。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk7.png" /></div>

如果一切正常，你会看到屏幕上显示文本 "Hello,World!"。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_16.png" /></div>

## MicroPython 设备控制台

我们的合作伙伴 **Neil** 使用 MicroPython 为 XIAO 编写了一个命令行控制台程序。通过这个程序，你可以轻松上传、下载和删除文件。我们感谢他对 XIAO 的贡献！

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://gitlab.cba.mit.edu/pub/upy/-/blob/main/upy.py" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div>

## 其他资源

这里提供了一些额外的库和示例代码：

- **[ZIP]** [XIAO-RP2040-MicroPython-Grove.zip](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/XIAO-RP2040-MicroPython-Grove.zip)

- **[ZIP]** [XIAO-RP2040-Plus-Firmware-And-Examples](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/xiao_rp2040_plus_micropython.zip)

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
