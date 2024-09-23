---
description: Seeed Studio XIAO SAMD21 with MicroPython
title: MicroPython
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO-SAMD21-MicroPython
last_update:
  date: 10/11/2023
  author: 赵桂莹
---

# 学习使用 MicroPython 对 XIAO SAMD21 进行编程

## MicroPython简介

[MicroPython](https://github.com/micropython/micropython/wiki)是一个具有部分本地代码编译功能的Python解释器。它提供了Python 3.5特性的一个子集，用于嵌入式处理器和受限系统。它与CPython不同，你可以在[这里](https://github.com/micropython/micropython/wiki/Differences)阅读更多的差异。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/MicroPython-Logo.png" /></div>


## 开始

首先，我们将Seeed Studio XIAO SAMD21连接到计算机，并从MicroPython上传一个简单的代码来检查电路板是否正常运行。

### **硬件准备**

- [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) x1
- Type-C 数据线 x1
- PC x1

### **软件准备**

- **Step 1**. 根据您的操作系统下载并安装最新版本的[Thonny editor](https://thonny.org/)

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_6.png" /></div>


- **Step 2**.启动 Thonny

- **Step 3**. 点击 **"Tools-->Options"** 来打开设置

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_8.png" /></div>


- **Step 4**. 选择“interpreter”接口并选择设备为**“MicroPython(通用)”**将端口设置为**“Try to detect prot automatically”**

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/1.jpg" /></div>


### 将Seeed Studio XIAO SAMD21连接到PC并点亮它

- **Step 1**. 按住“BOOT”按钮，然后通过Type-C电缆将Seeed Studio XIAO SAMD21连接到PC。如果运行良好，电脑上会显示一个“Arduino”

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/2.jpg" /></div>


- **Step 2**. Flash the firmware（闪存固件）

对于windows:

复制[Seeed XIAO SAMD21 firmware for MicroPython Support](https://micropython.org/resources/firmware/SEEED_XIAO-20220618-v1.19.1.uf2)并将其放在此文件夹中 

对于Linux:

```bash
wget "https://micropython.org/resources/firmware/SEEED_XIAO-20220618-v1.19.1.uf2"
cp SEEED_XIAO-20220618-v1.19.1.uf2 /media/$USER/Arduino/
```

也可以[编译自己的固件](https://wiki.seeedstudio.com/Compiling_MicroPython_for_embedded_devices/)，以确保安全性和支持最新的功能，但这不是必要的。 

## 软件开发

### 见XIAO SAMD21引脚分配表

|Pin|GPIO|Xiao Pin name|IRQ|ADC|
|-|--|---|--|---|
|2|PA02|0|2|0| * | * | * | * |
|4|PA04|1|4|4| * | * | * | * |
|10|PA10|2|10|18| * | * | * | * | 
|11|PA11|3|11|19| * | * | * | * |
|8|PA08|4|*|16| * | * | * | * |
|9|PA09|5|9|17| * | * | * | * |
|40|PB082|6|8|2| * | * | * | * |
|41|PB09|7|9|3| * | * | * | * |
|7|PA07|8|7|7| * | * | * | * |
|5|PA05|9|5|5| * | * | * | * |
|6|PA06|10|6|6| * | * | * | * |
|18|PA18|RX_LED|2|*| * | * | * | * |
|30|PA30|SWCLK|10|*| * | * | * | * |
|31|PA31|SWDIO|11|*| * | * | * | * |
|19|PA19|TX_LED|3|*| * | * | * | * |

### 上传你的代码

点击“Run current script”按钮上传代码。第一次，托尼会问你想在哪里保存你的代码文件。**这台计算机**和**MicroPython设备**都没问题。 

如果想离线使用该程序，应该将该程序保存到XIAO SAMD21 

同时按住Ctrl + Shift + S，然后选择save to **MicroPython device**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/6.jpg" /></div>


### GPIO测试(LED)

我们需要准备:
- [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

将以下代码复制给Thonny。 

我们可以看到蓝色的RX_LED被点亮并每秒闪烁一次

```python
from machine import Pin, Timer
 
led = Pin(18, Pin.OUT)
Counter = 0
Fun_Num = 0
 
def fun(tim):
    global Counter
    Counter = Counter + 1 
    print(Counter)
    led.value(Counter%2)
 
tim = Timer(-1)
tim.init(period=500, mode=Timer.PERIODIC, callback=fun)
```

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/3.gif" /></div>

### GPIO Control Relays（GPIO控制继电器）

我们需要准备:
- [Seeeduino-XIAO-Expansion-Board](https://wiki.seeedstudio.com/Seeeduino-XIAO-Expansion-Board/)
- [Grove-Relay](https://www.seeedstudio.com/Grove-Relay.html)
- [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

```python
from machine import Pin, Timer

output_4 = Pin(8, Pin.OUT)
detect_1 = Pin(4, Pin.IN, Pin.PULL_UP)
output_value = Pin(2, Pin.OUT)
Counter = 0
     
def fun(tim):
    global Counter
    Counter = Counter + 1
    output_4.value(Counter%2)
    print(Counter%2,detect_1.value())
    if detect_1.value() :
        output_value.value(1)
    else:
        output_value.value(0)
 
tim = Timer(-1)
tim.init(period=200, mode=Timer.PERIODIC, callback=fun)
```

<div align="center"><video width={600} height={240} controls>
    <source src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/4.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video></div>


### Human detection for automatic control（自动控制人体检测）

我们需要准备:

- [Doppler radar for human detection（多普勒人体探测雷达）](https://www.seeedstudio.com/24GHz-mmWave-Radar-Sensor-Sleep-Breathing-Monitoring-Module-p-5304.html?queryID=32e8107bce436db9b886cf1b8c698667&objectID=5304&indexName=bazaar_retailer_products)
- [Seeeduino-XIAO-Expansion-Board](https://wiki.seeedstudio.com/Seeeduino-XIAO-Expansion-Board/)
- [Grove-Relay](https://www.seeedstudio.com/Grove-Relay.html)
- [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

```python
from machine import Pin, Timer

led = Pin(8, Pin.OUT)

input_value_1 = Pin(4, Pin.IN, Pin.PULL_UP)
input_value_2 = Pin(10, Pin.IN, Pin.PULL_UP)
output_value = Pin(2, Pin.OUT)

Counter = 0
Fun_Num = 0
     
def fun(tim):
    global Counter
    Counter = Counter + 1
    led.value(Counter%2)
    print(input_value_1.value(),input_value_2.value())
    if input_value_1.value() :
        output_value.value(1)
    else:
        output_value.value(0)
 
tim = Timer(-1)
tim.init(period=50, mode=Timer.PERIODIC, callback=fun)
```

<div align="center"><video width={600} height={240} controls>
    <source src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/5.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video></div>


### I2C Support（12C的支持）

```python
from machine import Pin, SoftI2C

i2c = SoftI2C(scl=Pin(9), sda=Pin(8), freq=100000)
devices = i2c.scan()
for device in devices:  
    print("Decimal address: ",device," | Hexa address: ",hex(device))

i2c.writeto(0x51, 'b')
print(i2c.readfrom(0x51, 4))   # read 4 bytes from device with address 0x51
i2c.writeto(0x51, 'a') # write 'a' to device with address 0x51
print(i2c.readfrom(0x51, 4))   # read 4 bytes from device with address 0x51
i2c.writeto(0x51, 'b')
print(i2c.readfrom(0x51, 4)) 

```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/8.png" /></div>


熟悉micropython可以让您做更多，我们期待为您创造更多价值。也欢迎和我们分享你的项目!

## MicroPython设备控制台

我们的合作伙伴**Neil**使用MicroPython为XIAO编写了一个命令行控制台程序。有了这个程序，你可以轻松上传，下载和删除文件。我们感谢他对XIAO的贡献!

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://gitlab.cba.mit.edu/pub/upy/-/blob/main/upy.py"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div>

## 技术支持和产品讨论

感谢您选择我们的产品!我们在这里为您提供不同的支持，以确保您使用我们的产品的体验尽可能顺利。我们提供多种沟通渠道，以满足不同的喜好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
