---
description: Seeed Studio XIAO RP2040 与 CircuitPython
title: CircuitPython
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO-RP2040-with-CircuitPython
last_update:
  date: 1/11/2023
  author: shuxu hu
---
# **Seeed Studio XIAO RP2040 与 CircuitPython**

CircuitPython 是一种编程语言，旨在简化在低成本微控制器板上进行实验和学习编程。它让入门变得前所未有的简单，无需预先下载桌面软件。一旦设置好开发板，打开任何文本编辑器，就可以开始编辑代码。就是这么简单。

## **入门指南**

### 安装

**步骤 1** 进入引导加载程序模式

在将 CircuitPython 安装到 Seeed Studio XIAO RP2040 之前，需要进入引导加载程序模式。我们可以通过以下操作进入引导加载程序模式：

- 长按"BOOT"按钮。（板子上写着"B"，如右图所示）
- 在仍然按住按钮的同时，将 Seeed Studio XIAO PR2040 连接到计算机。
- 计算机将出现一个磁盘驱动器（RP1-RP2）

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg" alt="pir" width={600} height="auto" /></p>

磁盘显示（RP1-RP2）：

<div align="center"><img width={150} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu.png" /></div>


**步骤 2** 下载适用于 Seeed Studio XIAO RP2040 的[固件](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-CircuitPython.uf2)

**步骤 3** 将 .urf 文件拖拽到磁盘驱动器（"RP1-RP2"）

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu9.png" /></div>


**步骤 4** 检查磁盘驱动器名称是否已更改为"CIRCUITPY"。

<div align="center"><img width={150} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu2.png" /></div>


现在您已成功将 CircuitPython 安装到 Seeed Studio XIAO RP2040 开发板上。

### LED 闪烁教程

**步骤 1** 下载 CircuitPython 编辑器 - [Mu Editor](https://codewith.mu/en/download)

**步骤 2** 打开并选择模式为"CircuitPython"

<div align="center"><img width={750} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu7.png" /></div>


**步骤 3** 复制并上传以下代码：

```cpp
"""Example for Pico. Blinks the built-in LED."""
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

点击"Serial"打开 REPL，将代码保存到 REPL 中，命名为 'code.py' 或 'main.py'

<div align="center"><img width={750} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu6.png" /></div>


Seeed Studio XIAO RP2040 上的用户 LED 将开始闪烁。

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