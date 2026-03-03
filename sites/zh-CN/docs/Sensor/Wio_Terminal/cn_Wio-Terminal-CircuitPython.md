---
description: Wio Terminal 与 CircuitPython
title: Wio Terminal 与 CircuitPython
keywords:
- Wio_terminal
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-CircuitPython
last_update:
  date: 1/31/2023
  author: jianjing Huang
---
# Wio Terminal 上的 CircuitPython

![](https://files.seeedstudio.com/wiki/Wio-Terminal-CircuitPython/cp-wt.png)

本教程介绍如何在 [Seeeduino Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) 上安装和运行由 Adafruit Industries 开发的官方 [CircuitPython](https://circuitpython.org/)！

CircuitPython 是一种编程语言，旨在简化在低成本微控制器板上进行实验和学习编程的过程。它让入门变得前所未有的简单，无需预先下载桌面软件。一旦设置好开发板，打开任何文本编辑器，就可以开始编辑代码。更多信息请参考[这里](https://learn.adafruit.com/welcome-to-circuitpython/what-is-circuitpython)。

## 安装 CircuitPython

- 下载官方的 [**Seeeduino Wio Terminal 的 CircuitPython 引导程序**](https://circuitpython.org/board/seeeduino_wio_terminal/)。将下载一个 `.uf2` 文件。

- 通过 USB Type-C 将 Seeeduino Wio Terminal 连接到您的电脑。

- 通过快速滑动电源开关两次进入引导程序模式。更多参考信息，请参见[这里](https://wiki.seeedstudio.com/cn/Wio-Terminal-Getting-Started/#faq)。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-CircuitPython/dfu.gif" /></div>

- 您的电脑中应该会出现一个名为 `Arduino` 的外部驱动器。将下载的 CircuitPython uf2 文件拖拽到 `Arduino` 驱动器中。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Circuitpython-XIAO/df2.png" /></div>

- 加载 CircuitPython 引导程序后，拔掉 USB Type-C 并重新连接。应该会出现一个名为 `CIRCUITPY` 的新外部驱动器。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Circuitpython-XIAO/df2-2.png" /></div>

- 现在，CircuitPython 已经加载到 Seeeduino Wio Terminal 上了！您只需要编写 Python 程序并将其命名为 `main.py`，然后将其拖拽到 `CIRCUITPY` 驱动器上。

您还应该看到 Wio Terminal 上的 LCD 屏幕亮起，CircuitPython 也支持原生 LCD 显示！

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-CircuitPython/LCD.gif" /></div>

## CircuitPython 基础

使用 CircuitPython 运行 `Blink` 程序：

**注意：** 只需复制并保存以下代码，将其命名为 `main.py`，然后将其拖拽到 `CIRCUITPY` 驱动器。

```py
import time
import board
from digitalio import DigitalInOut, Direction

led = DigitalInOut(board.D13)
led.direction = Direction.OUTPUT

while True:
    led.value = True
    print("LED ON")
    time.sleep(1)
    led.value = False
    print("LED OFF")
    time.sleep(1)
```

您应该看到内置 LED 开始闪烁！

### 内置光传感器

运行以下代码来获取内置光传感器的值：

```py
import time
import board
from analogio import AnalogIn

analog_in = AnalogIn(board.LIGHT) # Wio Terminal 上的光传感器引脚

def get_voltage(pin):
    return (pin.value * 3.3) / 65536
 
while True:
    print("Light Sensor Voltage: ", get_voltage(analog_in))
    time.sleep(0.1)
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-CircuitPython/light.png" /></div>

更多 CircuitPython API 参考，请访问 [**CircuitPython 基础教程**](https://learn.adafruit.com/circuitpython-essentials/circuitpython-essentials)。

## 资源

- [**CircuitPython 基础教程**](https://learn.adafruit.com/circuitpython-essentials/circuitpython-essentials)

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