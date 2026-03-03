---
description: Seeed Studio XIAO SAMD21 与 CircuitPython
title: CircuitPython
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Seeeduino-XIAO-CircuitPython
last_update:
  date: 1/11/2023
  author: shuxu hu
---

# Seeed Studio XIAO SAMD21 上的 CircuitPython

<!-- ![](https://files.seeedstudio.com/wiki/Circuitpython-XIAO/XIAO-CP.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Circuitpython-XIAO/XIAO-CP.png" alt="pir" width={600} height="auto" /></p>

本教程介绍如何在 [Seeed Studio XIAO SAMD21 开发板](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)上安装和运行由 Adafruit Industries 开发的官方 [CircuitPython](https://circuitpython.org/)！

CircuitPython 是一种编程语言，旨在简化在低成本微控制器板上进行实验和学习编程的过程。它让入门变得前所未有的简单，无需预先下载桌面软件。一旦设置好开发板，打开任何文本编辑器，就可以开始编辑代码。更多信息请参考[这里](https://learn.adafruit.com/welcome-to-circuitpython/what-is-circuitpython)。

## 安装 CircuitPython

1. 下载官方的 [**Seeed Studio XIAO SAMD21 的 CircuitPython 引导程序**](https://circuitpython.org/board/seeeduino_xiao/)。将下载一个 `.uf2` 文件。

2. 通过 USB Type-C 将 Seeed Studio XIAO SAMD21 连接到您的电脑。

3. 使用跳线快速短接 RST 引脚两次，进入 DFU 引导程序模式。更多参考信息，请参见[这里](https://wiki.seeedstudio.com/cn/Seeeduino-XIAO/#reset)。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-reset.gif" /></div>


4. 您的电脑中应该出现一个名为 `Arduino` 的外部驱动器。将下载的 CircuitPython uf2 文件拖拽到 `Arduino` 驱动器中。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Circuitpython-XIAO/df2.png" /></div>


5. 加载 CircuitPython 引导程序后，拔掉 USB Type-C 并重新连接。应该会出现一个名为 `CIRCUITPY` 的新外部驱动器。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Circuitpython-XIAO/df2-2.png" /></div>

6. 现在，CircuitPython 已经加载到 Seeed Studio XIAO SAMD21 上！您只需要编写 Python 程序并将其命名为 `main.py`，然后将其拖拽到 `CIRCUITPY` 驱动器中。

## CircuitPyhton 基础

使用 CircuitPython 运行 `Blink` 程序：

**注意：** 只需复制并保存以下代码，将其命名为 `main.py`，然后拖拽到 `CIRCUITPY` 驱动器中。

```py
import time
import board
from digitalio import DigitalInOut, Direction

led = DigitalInOut(board.LED_INVERTED)
led.direction = Direction.OUTPUT

while True:
    led.value = True
    time.sleep(1)
    led.value = False
    time.sleep(1)
```

您应该会看到内置 LED 开始闪烁！

### 使用 Grove 模块

您可以在 CircuitPython 上使用具有简单模拟/数字接口的 Grove 模块。例如，将 Grove - 光传感器连接到 Seeeduino XIAO 的 `A0` 端口并运行以下代码：

```py
import time
import board
from analogio import AnalogIn

analog_in = AnalogIn(board.A0) # Analog pin on Seeedino XIAO

def get_voltage(pin):
    return (pin.value * 3.3) / 65536
 
while True:
    print("Voltage: ", get_voltage(analog_in))
    time.sleep(0.1)
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Circuitpython-XIAO/CP.png" /></div>


更多 CircuitPython API 参考，请访问 [**CircuitPython 基础教程**](https://learn.adafruit.com/circuitpython-essentials/circuitpython-essentials)。

## 资源

- [**CircuitPython 基础教程**](https://learn.adafruit.com/circuitpython-essentials/circuitpython-essentials)

- [**在 Seeed Studio Xiao SAMD21 上安装 Circuit Python**](https://makeandymake.github.io/2020/05/02/installing-circuitpython-on-seeeduino-xiao.html)

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