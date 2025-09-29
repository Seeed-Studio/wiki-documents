---
description: 适用于Arduino支持开发板的MicroPython
title: 适用于Arduino支持开发板的MicroPython
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Compiling_MicroPython_for_embedded_devices
last_update:
  date: 1/16/2023
  author: jianjing Huang
---


# 为嵌入式设备编译MicroPython

## 什么是MicroPython

MicroPython是一个用C语言编写的编程语言软件实现，与Python 3基本兼容，经过优化可在微控制器上运行。

MicroPython包含一个Python编译器（将代码编译为字节码）和该字节码的运行时解释器。用户可以通过交互式提示符（REPL）立即执行支持的命令。它包含了一系列核心Python库；MicroPython包含的模块让程序员能够访问底层硬件。

## 如何构建固件（以Xiao SAMD为例）

[Seeeduino XIAO SAMD](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)已经支持micropython开发。

### 第一步：准备相关软件

"arm-none-linux-gnueabi"是可以在基于Debian的系统中使用包管理器（如apt）安装的工具链（该包名为gcc-arm-linux-gnueabi）。在Ubuntu中，arm-none-linux-gnueabi包含在ubertooth-firmware-source中，我们还需要通过安装必要的工具（如gcc python和git make）来准备环境。因此我们执行以下命令

```bash
sudo apt update
sudo apt install cmake make gcc ubertooth-firmware-source python3 git 
```

### 第二步：切换工作空间 克隆源代码

克隆源代码并下载必要子模块的代码

依次执行以下语句

```bash
cd ~
git clone https://github.com/micropython/micropython
cd ~/micropython
git submodule update --init --recursive
```

我们将要下载的信息在这个文件中，其中包含下载路径和代码仓库地址

```bash
cat ~/micropython/.gitmodules 
```

### 第三步：构建mpy-cross，MicroPython交叉编译器

大多数移植版本都需要首先构建MicroPython交叉编译器。这个名为mpy-cross的程序用于将Python脚本预编译为.mpy文件，然后可以将这些文件包含（冻结）到移植版本的固件/可执行文件中。要构建mpy-cross，请使用：

```bash
cd ~/micropython/mpy-cross
make
```

### 接下来：构建外部依赖项

我们使用的[Seeeduino XIAO SAMD](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)已经支持micropython开发。它是一个基于arm架构samd芯片的控制器。
因此我们指定版本号并进入相应目录进行编译：

```bash
cd ~/micropython/ports/samd
BOARD=SEEED_XIAO make V=1
```

### 最后：烧录固件

我们可以在这里看到生成的固件，将固件复制到设备上，XIAO SAMD就可以使用micro python了

```bash
ls ~/micropython/ports/samd/build-SEEED_XIAO/ |grep firmware.uf2
```

```bash
sudo cp ~/micropython/ports/samd/build-SEEED_XIAO/firmware.uf2 /media/$USER/Arduino/
```

## 测试我们的固件

复制下面的代码，你将看到蓝色LED闪烁

```python3
from machine import Pin, Timer

led = Pin(19, Pin.OUT)
Counter = 0    
def fun(tim):
    global Counter
    Counter = Counter + 1
    state  =  Counter%2
    led.value(state)
 
tim = Timer(-1)
tim.init(period=1000, mode=Timer.PERIODIC, callback=fun)
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/XIAO_SAMD_MICROPYTHON_LED.gif" border="0" /></p>

如你所见，[Seeeduino XIAO SAMD](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)已经支持micropython开发。

你也可以参考这个过程为其他设备编译micropython固件。

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