---
description: Wio Terminal with CircuitPython
title: Wio Terminal上的CircuitPython
keywords:
- Wio_terminal
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-CircuitPython
last_update:
  date: 3/06/2024
  author: jianjing Huang
---

# Wio Terminal上的CircuitPython

![](https://files.seeedstudio.com/wiki/Wio-Terminal-CircuitPython/cp-wt.png)

本文介绍如何在 [Seeeduino Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) 上安装和运行Adafruit Industries的官方 [CircuitPython](https://circuitpython.org/) 。

CircuitPython是一种旨在简化在低成本微控制器板上进行实验和学习编程的编程语言。它使得入门变得更加容易，无需事先下载桌面工具。一旦设置好开发板，您只需打开任何文本编辑器，就可以开始编写代码。更多信息，请参阅 [此处](https://learn.adafruit.com/welcome-to-circuitpython/what-is-circuitpython)。

## 安装 CircuitPython

- 下载 [**Wio Terminal的官方CircuitPython引导加载程序**](https://circuitpython.org/board/seeeduino_wio_terminal/)。应下载一个 `.uf2` 文件。

- 通过USB Type-C将Seeeduino Wio Terminal连接到计算机。

- 快速两次滑动电源开关进入引导加载程序模式。更多参考信息，请参阅 [此处](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/#faq)。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-CircuitPython/dfu.gif" /></div>

- 你的计算机上会出现一个名为 `Arduino` 将下载的CircuitPython uf2文件拖放到 `Arduino` 驱动器中。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Circuitpython-XIAO/df2.png" /></div>

- 一旦加载了CircuitPython引导加载程序，请拔掉USB Type-C并重新连接。你应该看到一个名为 `CIRCUITPY` 的新外部驱动器。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Circuitpython-XIAO/df2-2.png" /></div>

- 现在，CircuitPython已加载到Seeeduino Wio Terminal上！你只需要编写你的Python程序并将其命名为 `main.py` ，然后将其拖放到 `CIRCUITPY` 驱动器上。

你还应该看到Wio Terminal上的LCD显示屏亮起，CircuitPython还支持原生的LCD显示！

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-CircuitPython/LCD.gif" /></div>

## CircuitPython基础知识

使用CircuitPython运行 `Blink` ：

**注:** 只需复制并保存以下代码，并将其命名为 `main.py` ，然后将其拖放到 `CIRCUITPY` 驱动器上。

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

你应该看到内置LED开始闪烁！

### 内置光传感器

运行以下代码以获取内置光传感器的值：

```py
import time
import board
from analogio import AnalogIn

analog_in = AnalogIn(board.LIGHT) # Light Sensor pin on Wio Terminal

def get_voltage(pin):
    return (pin.value * 3.3) / 65536
 
while True:
    print("Light Sensor Voltage: ", get_voltage(analog_in))
    time.sleep(0.1)
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-CircuitPython/light.png" /></div>

有关更多CircuitPython API的参考，请访问 [**CircuitPython Essentials**](https://learn.adafruit.com/circuitpython-essentials/circuitpython-essentials).

## 参考资料

- [**CircuitPython Essentials**](https://learn.adafruit.com/circuitpython-essentials/circuitpython-essentials)

## 技术支持 & 产品讨论


谢谢您选择我们的产品！我们将为您提供不同的支持，以确保您对我们的产品有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
