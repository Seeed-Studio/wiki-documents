---
description: Seeed Studio XIAO RP2040搭配CircuitPython使用
title: CircuitPython
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO-RP2040-with-CircuitPython
last_update:
  date: 11/1/2023
  author: 金 菊
---
# 学习使用 CircuitPython 对 XIAO RP2040 进行编程

CircuitPython是一种专为低成本微控制器板实验和学习编程而设计的编程语言。它使得入门变得比以往更加简单，无需预先下载桌面工具。一旦你设置好了开发板，打开任何文本编辑器，就可以开始编辑代码。就是这么简单。
## **入门指南**

### 安装

**步骤一** 进入引导程序模式

在将CircuitPython安装到Seeed Studio XIAO RP2040之前，需要进入引导程序模式。可以通过以下操作进入引导程序模式：

- 长按"BOOT"按钮（在板上写着"B"）
- 在保持按下按钮的同时将Seeed Studio XIAO RP2040连接到计算机上
- 计算机上将出现一个磁盘驱动器（RP1-RP2）

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg" alt="pir" width={600} height="auto" /></p>

磁盘显示出现（RP1-RP2）：

<div align="center"><img width={150} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu.png" /></div>


**步骤二** 下载Seeed Studio XIAO RP2040的 [固件](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-CircuitPython.uf2)

**步骤三** 将.uf2文件拖到磁盘驱动器（"RP1-RP2"）中

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu9.png" /></div>


**步骤四** 检查磁盘驱动器的名称是否已更改为"CIRCUITPY"。

<div align="center"><img width={150} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu2.png" /></div>


现在，您已成功将CircuitPython安装到Seeed Studio XIAO RP2040开发板上。

### LED闪烁教程

**步骤一** 下载CircuitPython编辑器 - [Mu编辑器](https://codewith.mu/en/download)

**步骤二** 打开编辑器并选择"CircuitPython"模式

<div align="center"><img width={750} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu7.png" /></div>


**步骤三** 复制并上传以下代码：

```c++
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

点击"Serial"以打开REPL，将代码保存为'code.py'或'main.py'

<div align="center"><img width={750} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040tu6.png" /></div>


Seeed Studio XIAO RP2040上的用户LED将开始闪烁。

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