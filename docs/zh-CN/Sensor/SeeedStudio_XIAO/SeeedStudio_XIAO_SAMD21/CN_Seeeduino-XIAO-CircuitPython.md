---
description: Seeed Studio XIAO SAMD21 with CircuitPython
title: CircuitPython
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Seeeduino-XIAO-CircuitPython
last_update:
  date: 1/11/2023
  author: 赵桂莹
---

# 学习使用 CircuitPython 对 XIAO SAMD21 进行编程

<!-- ![](https://files.seeedstudio.com/wiki/Circuitpython-XIAO/XIAO-CP.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Circuitpython-XIAO/XIAO-CP.png" alt="pir" width={600} height="auto" /></p>

本wiki介绍如何在  [Seeed Studio XIAO SAMD21 开发板](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)  上安装并运行Adafruit Industries的官方 [CircuitPython](https://circuitpython.org/) 

CircuitPython 是一种编程语言，旨在简化在低成本微控制器板上进行编程的实验和学习。它使入门变得比以往更容易，无需预先下载桌面。设置好开发板后，打开任何文本编辑器，然后开始编辑代码。欲了解更多信息，请参阅 [here](https://learn.adafruit.com/welcome-to-circuitpython/what-is-circuitpython).

## 安装CircuitPython 

1. 下载官方 [**CircuitPython Bootloader for Seeed Studio XIAO SAMD21**](https:// Circuitpython.org/board/seeeduino_xiao/)。应下载“.uf2”。

2. 通过 USB Type-C 将 Seeed Studio XIAO SAMD21 插入您的 PC。

3. 使用跳线快速短接 RST 引脚两次即可进入 DFU Bootloader 模式。如需更多参考，另请参阅[here](https://wiki.seeedstudio.com/Seeeduino-XIAO/#reset).

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-reset.gif" /></div>


4. 您的电脑中应该会出现一个名为“Arduino”的外部驱动器。将下载的 CircuitPython uf2 文件拖到“Arduino”驱动器中。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Circuitpython-XIAO/df2.png" /></div>


5. 加载 CircuitPython 引导加载程序后，拔下 USB Type-C 并重新连接。应该会出现一个名为“CIRCUITPY”的新外部驱动器。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Circuitpython-XIAO/df2-2.png" /></div>

6. 现在，CircuitPython 已加载到 Seeed Studio XIAO SAMD21 上！您所需要做的就是编写 python 程序并将其命名为“main.py”并将其拖到“CIRCUITPY”驱动器上。

## CircuitPyhton的基础知识

使用 CircuitPython 运行 `Blink`

**注意:** 只需复制并保存以下代码并将其命名为 `main.py`，然后将其拖动到 `CIRCUITPY` 驱动器。

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

您应该看到内置 LED 开始闪烁！

### 使用 Grove 模块

您可以在 CircuitPython 上使用具有简单模拟/数字接口的 Grove 模块。例如，将 Grove - Light Sensor 连接到 Seeeduino XIAO 的“A0”端口并运行以下命令：

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


如需更多 CircuitPython API 参考，请访问 [**CircuitPython Essentials**](https://learn.adafruit.com/circuitpython-essentials/circuitpython-essentials).

## 资源

- [**CircuitPython Essentials**](https://learn.adafruit.com/circuitpython-essentials/circuitpython-essentials)

- [**安装 Circuit Python on Seeed Studio Xiao SAMD21**](https://makeandymake.github.io/2020/05/02/installing-circuitpython-on-seeeduino-xiao.html)

## 技术支持和产品讨论


感谢您选择我们的产品！我们随时为您提供不同的支持，以确保您尽可能顺利地使用我们的产品。我们提供多种沟通渠道来满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>