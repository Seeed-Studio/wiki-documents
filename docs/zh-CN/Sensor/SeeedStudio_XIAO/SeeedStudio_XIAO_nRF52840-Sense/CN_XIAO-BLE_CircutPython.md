---
description: Seeed Studio XIAO nRF52840 with CircuitPython
title: CircuitPython
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO-BLE_CircutPython
last_update:
  date: 10/30/2023
  author: 吴飞飞
---

# 学习使用 CircuitPython 对 XIAO nRF52840 进行编程

CircuitPython 是一种编程语言，旨在简化在低成本微控制器板上编程的实验和学习。它使入门比以往任何时候都更容易，无需预先进行桌面下载。设置好看板后，打开任何文本编辑器，然后开始编辑代码。就是这么简单。

## **开始**

### 安装

**步骤 1** 进入引导加载程序模式

在将 CircuitPython 安装到 Seeed Studio XIAO nRF52840 之前，它需要引导加载程序模式。我们可以通过单击两次重置按钮进入bootloadrer模式：

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-BLE/functional2b.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/functional2b.jpg" alt="pir" width={600} height="auto" /></p>

然后磁盘将显示：

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu1.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu1.png" alt="pir" width={600} height="auto" /></p>

**步骤 2** 下载Seeed Studio XIAO nRF52840 的[固件](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-Circuitpython.uf2) 

**步骤 3** 将 .urf 文件拖拽到磁盘驱动程序("XIAO-SENSE")

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu3.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu3.png" alt="pir" width={600} height="auto" /></p>

**步骤 4** 检查磁盘驱动程序的名称是否已更改为 "CIRCUITPY".

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu2.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu2.png" alt="pir" width={600} height="auto" /></p>

现在，您已成功将 CircuitPython 安装到 Seeed Studio XIAO nRF52840 板上。

### 应用

**步骤 1** 下载 CircuitPython 编辑器 - [Mu Editor](https://codewith.mu/en/download) 并打开它

**步骤 2** 单击 "Mode" 并选择模式为"CircuitPython"

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu4.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu4.png" alt="pir" width={600} height="auto" /></p>

**步骤 3** 复制并上传以下代码：

```c++
"""Example for Seeed Studio XIAO nRF52840. Blinks the built-in LED."""
import time
import board
import digitalio

led = digitalio.DigitalInOut(board.LED)
led.direction = digitalio.Direction.OUTPUT

while True:
    led.value = True
    time.sleep(0.5)
    led.value = False
    time.sleep(0.5)
```

单击 "串行" 打开 REPL, 将代码保存为 'code.py' 或 'main.py'

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu5.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/BLEtu5.png" alt="pir" width={600} height="auto" /></p>

Seeed Studio XIAO nRF52840上的用户LED将闪烁。

## 技术支持和产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您对我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
