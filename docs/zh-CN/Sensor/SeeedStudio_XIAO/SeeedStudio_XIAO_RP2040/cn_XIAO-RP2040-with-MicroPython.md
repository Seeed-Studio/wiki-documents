---
description: Seeed Studio XIAO RP2040搭配MicroPython使用
title: MicroPython
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO-RP2040-with-MicroPython
last_update:
  date: 11/1/2023
  author: 金 菊
---

# 学习使用 MicroPython 对 XIAO RP2040 进行编程

## ** MicroPython介绍**

[MicroPython](https://github.com/micropython/micropython/wiki) MicroPython是一个带有部分本地代码编译功能的Python解释器。它提供了Python 3.5功能的子集，专为嵌入式处理器和受限系统实现。它与CPython不同，您可以在 [此处](https://github.com/micropython/micropython/wiki/Differences)了解更多差异。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/MicroPython-Logo.png" /></div>

## **入门指南**

首先，我们将连接Seeed Studio XIAO RP2040开发板到计算机，并上传一个简单的MicroPython代码来检查开发板是否正常运行。

### **硬件设置**

- [Seeed Studio XIAO RP2040](https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html) x1
- Type-C cable x1
- PC x1

### **软件设置**

- **步骤一**. 根据您的操作系统，下载并安装最新版本的 [Thonny编辑器](https://thonny.org/) 。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_6.png" /></div>

- **步骤二**. 启动 Thonny

- **步骤三**. 点击 **"Tools-->Options"** 打开设置

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_8.png" /></div>

- **步骤四**. 选择"Interpreter"界面，并选择设备为 **"MicroPython(Raspberry Pi Pico)"** ，端口选择 **"Try to detect prot automatically"**

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_9.png" /></div>

### **将Seeed Studio XIAO RP2040开发板连接到电脑并点亮。**

- **步骤一**. 按住"BOOT"按钮，然后通过Type-C电缆将Seeed Studio XIAO RP2040开发板连接到电脑。如果一切正常，电脑上会显示一个名为"RPI-RP2"的磁盘。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk.png" /></div>

- **步骤二**. 点击 **安装或更新 MicroPython**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/installandupdate.png" /></div>

它将自动搜索设备并在目标卷上显示。在下面的MicroPython版本选择中，我们只需保留默认设置。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/chooseversion.png" /></div>

点击安装按钮，并在安装状态显示完成后关闭该页面。一旦固件安装完成，界面上将显示以下信息。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk3.png" /></div>

- **步骤三**. 将以下代码复制到Thonny中。

```c++
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

- **步骤四**. 通过点击"运行当前脚本"按钮上传代码。第一次使用Thonny时，它会询问您要将代码文件保存在哪里。选择 **This Computer** 和 **Raspberry Pi Pico** 都可以。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk7.png" /></div>

如果一切正常，您将看到LED灯每秒闪烁一次。同时，递增数值的输出也将显示在Shell中。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_13.png" /></div>

连接完成，现在我们可以进行其他项目。

## **点亮Seeed Studio XIAO RP2040上的RGB LED**

Seeed Studio XIAO RP2040上配备了一个RGB LED，我们将使用MicroPython点亮它。这需要一个第三方库，因此我们需要先添加一个额外的库。

- **步骤一**. 下载 [ws2812.py](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/ws2812.py) 库并用 Thonny打开。

- **步骤二**. 点击 "文件-->另存为" 并保存库。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk4.png" /></div>

选择"Raspberry Pi Pico"作为保存位置。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk5.png" /></div>

确保保存的文件名为"ws2812.py"，否则可能无法正常工作。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk6.png" /></div>

- **步骤三**. 将以下代码复制到Thonny中。

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

- **步骤四**.通过点击"运行当前脚本"按钮上传代码。第一次使用Thonny时，它会询问您想将代码文件保存在哪里。选择 **This Computer** 和 **Raspberry Pi Pico** 都可以。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk7.png" /></div>

如果一切正常，您将看到RGB LED灯转换并闪烁。同时，"Beautiful Color"文本的输出也将显示在Shell中。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_14.png" /></div>

## **通过IIC接口连接Seeed Studio XIAO RP2040与显示器**

在这个项目中，我们将通过IIC接口连接 [Grove - OLED Display 0.96" (SSD1315)](https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html) 来演示Seeed Studio XIAO RP2040上的IIC功能

**硬件连接**

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_15.png" /></div>

- **步骤一**. 下载 [ssd1306.py](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/ssd1306.py) 库，并使用Thonny打开它。

- **步骤二**. 点击 "文件-->另存为" 将库保存在"Raspberry Pi Pico"中

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk4.png" /></div>

选择"Raspberry Pi Pico"作为保存位置。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk5.png" /></div>

确保保存的文件名为"ssd1306.py"，否则可能无法正常工作。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk8.png" /></div>

- **步骤三**. 将以下代码复制到Thonny中。

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

- **步骤四**. 通过点击"运行当前脚本"按钮上传代码。 第一次使用Thonny时，它会询问您想将代码文件保存在哪里。选择 **This Computer** 和 **Raspberry Pi Pico** 都可以。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk7.png" /></div>

如果一切正常，您将在屏幕上看到"Hello, World!"的文本显示。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_16.png" /></div>

## MicroPython设备控制台

我们的合作伙伴 **Neil** 使用MicroPython为XIAO编写了一个命令行控制台程序。通过这个程序，您可以轻松上传、下载和删除文件。我们感谢他对XIAO的贡献！

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://gitlab.cba.mit.edu/pub/upy/-/blob/main/upy.py"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div>

## 其他资源

这里还有一些额外的库和示例代码：

- **[ZIP]** [XIAO-RP2040-MicroPython-Grove.zip](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/XIAO-RP2040-MicroPython-Grove.zip)

## 技术支持和产品讨论

感谢您选择我们的产品！我们致力于为您提供不同的支持，以确保您对我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>





