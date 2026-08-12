---
description: 搭配 MicroPython 的 Seeed Studio XIAO SAMD21
title: MicroPython
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-SAMD21-MicroPython
last_update:
  date: 1/11/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2025-12-04'
url: https://wiki.seeedstudio.com/cn/XIAO-SAMD21-MicroPython/
---

# **Seeed Studio XIAO SAMD21 与 MicroPython**

## **MicroPython 简介**

[MicroPython](https://github.com/micropython/micropython/wiki) 是一个带有部分原生代码编译特性的 Python 解释器。它为嵌入式处理器和受限系统实现了 Python 3.5 功能的一个子集。它与 CPython 不同，你可以在[这里](https://github.com/micropython/micropython/wiki/Differences)阅读更多差异说明。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/MicroPython-Logo.png" /></div>

## 入门

首先，我们将 Seeed Studio XIAO SAMD21 连接到电脑，并从 MicroPython 上传一段简单代码，以检查开发板是否工作正常。

### 硬件准备

- [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) x1
- Type-C 线 x1
- 电脑 x1

### 烧录固件

#### 适用于 XIAO SAMD21

- **步骤 1**. 按住 **BOOT** 按钮不放，然后通过 Type-C 线将 Seeed Studio XIAO SAMD21 连接到电脑。如果一切正常，电脑上会出现一个名为 **Arduino** 的磁盘。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/2.jpg" /></div>

- **步骤 2**. 烧录固件

只需前往官方的 [XIAO SAMD21 MicroPython Firmware](https://micropython.org/download/SEEED_XIAO_SAMD21/) 页面并下载最新固件即可。

你也可以[自行编译固件](https://wiki.seeedstudio.com/cn/Compiling_MicroPython_for_embedded_devices/)，以确保安全性并支持最新特性，但这不是必需的。
<br/>
#### 适用于 XIAO SAMD21 Plus

- **步骤 1**. 使用 Type‑C 线将 XIAO SAMD21 Plus 连接到电脑，然后连续按下 Reset 按钮两次。如果一切正常，电脑上会出现一个 **Arduino** 磁盘。

<div align="center"><img width="300" src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/2.jpg" /></div>

- **步骤 2**. 点击下方链接下载固件，然后将 `.uf2` 文件拖放到 **Arduino** 磁盘中，即可完成固件烧录。
[XIAO SAMD21 Plus MicroPython Firmware](https://files.seeedstudio.com/wiki/XIAO_SAMD/img/xiao-samd21-plus-micropython.zip)

### 软件准备

- **步骤 1**. 根据你的操作系统下载并安装最新版本的 [Thonny editor](https://thonny.org/)

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_6.png" /></div>

- **步骤 2**. 启动 Thonny

- **步骤 3**. 点击 **Tools-->Options** 打开设置。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_8.png" /></div>

- **步骤 4**. 选择 **Interpreter** 选项卡，将设备设置为 **MicroPython(generic)**，端口设置为 **Board CDC @ Port**

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/mpy_1.png" /></div>

## 软件开发

### SEEED XIAO SAMD21 系列引脚分配表

| MicroPython 引脚名 | XIAO SAMD21 GPIO (ID) | XIAO SAMD21 Plus GPIO (ID) | IRQ<br />SAMD21 / Plus | ADC | 功能 |
| :--- | :---: | :---: | :---: | :---: | :--- |
| D0 / A0 / A0_D0 | PA02 (2) | PA02 (2) | 2 / 2 | 0 | GPIO、ADC、DAC |
| D1 / A1 / A1_D1 | PA04 (4) | PA04 (4) | 4 / 4 | 4 | GPIO、ADC |
| D2 / A2 / A2_D2 | PA10 (10) | PA10 (10) | 10 / 10 | 18 | GPIO、ADC |
| D3 / A3 / A3_D3 | PA11 (11) | PA11 (11) | 11 / 11 | 19 | GPIO、ADC |
| D4 / A4 / A4_D4 / SDA | PA08 (8) | PA08 (8) | NMI / NMI | 16 | GPIO、ADC、I2C SDA |
| D5 / A5 / A5_D5 / SCL | PA09 (9) | PA09 (9) | 9 / 9 | 17 | GPIO、ADC、I2C SCL |
| D6 / A6 / A6_D6 / TX | PB08 (40) | PB08 (40) | 8 / 8 | 2 | GPIO、ADC、UART TX |
| D7 / A7 / A7_D7 / RX | PB09 (41) | PB09 (41) | 9 / 9 | 3 | GPIO、ADC、UART RX |
| D8 / A8 / A8_D8 / SCK | PA07 (7) | PA07 (7) | 7 / 7 | 7 | GPIO、ADC、SPI SCK |
| D9 / A9 / A9_D9 / MISO | PA05 (5) | PA05 (5) | 5 / 5 | 5 | GPIO、ADC、SPI MISO |
| D10 / A10 / A10_D10 / MOSI | PA06 (6) | PA06 (6) | 6 / 6 | 6 | GPIO、ADC、SPI MOSI |
| D11 / TX_LED | PA19 (19) | — | 3 / — | — | 原始板载 TX LED |
| D12 / RX_LED | PA18 (18) | PA28 (28) | 2 / 8 | — | 原始 RX LED；Plus 扩展 GPIO |
| D13 / USER_LED / SCL1 | PA17 (17) | PA17 (17) | 1 / 1 | — | 原始用户 LED；Plus I2C1 SCL |
| D14 / SDA1 | — | PA16 (16) | — / 0 | — | Plus I2C1 SDA |
| D15 | — | PA15 (15) | — / 15 | — | Plus 扩展 GPIO |
| D16 | — | PA14 (14) | — / 14 | — | Plus 扩展 GPIO |
| D17 | — | PA13 (13) | — / 13 | — | Plus 扩展 GPIO |
| D18 | — | PA12 (12) | — / 12 | — | Plus 扩展 GPIO |
| D19 / I2S_SD | — | PA19 (19) | — / 3 | — | Plus GPIO 和 I2S 数据 |
| D20 / I2S_SCK | — | PA20 (20) | — / 4 | — | Plus GPIO 和 I2S 时钟 |
| D21 / I2S_WS | — | PA21 (21) | — / 5 | — | Plus GPIO 和 I2S 字选择 |
| D22 | — | PB10 (42) | — / 10 | — | Plus 扩展 GPIO |
| D23 | — | PB11 (43) | — / 11 | — | Plus 扩展 GPIO |
| D24 | — | PB23 (55) | — / 7 | — | Plus 扩展 GPIO |
| D25 | — | PA23 (23) | — / 7 | — | Plus 扩展 GPIO |
| D26 | — | PA22 (22) | — / 6 | — | Plus 扩展 GPIO |
| D27 | — | PA18 (18) | — / 2 | — | Plus 扩展 GPIO |
| RGB_LED | — | PA27 (27) | — / 15 | — | 可寻址 RGB LED 数据 |
| BUTTON | — | PB22 (54) | — / 6 | — | Plus 用户按键 |
| SWCLK | PA30 (30) | PA30 (30) | 10 / 10 | — | SWD 时钟 |
| SWDIO | PA31 (31) | PA31 (31) | 11 / 11 | — | SWD 数据 |

:::note
GPIO (ID) 中括号内的数字指的是 MicroPython SAMD 引脚 ID，而不是 MCU 封装的物理引脚编号。
:::

### 上传你的代码

点击 “Run current script” 按钮上传代码。第一次运行时，Thonny 会询问你要将代码文件保存到哪里。选择 **This Computer** 或 **MicroPython device** 都可以。

如果你想离线运行程序，应将程序保存到 XIAO SAMD21 上。

同时按住 Ctrl + Shift + S，然后选择保存到 **MicroPython device**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO_SAMD/img/6.jpg" /></div>

### GPIO 测试（LED）

我们需要准备：

- [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

将以下代码复制到 Thonny 中。

我们可以看到蓝色的 RX_LED 被点亮，并以每秒一次的频率闪烁。

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

### 使用 GPIO 控制继电器

我们需要准备：

- [Seeeduino-XIAO-Expansion-Board](https://wiki.seeedstudio.com/cn/Seeeduino-XIAO-Expansion-Board/)
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

### 基于人体检测的自动控制

我们需要准备：

- [用于人体检测的多普勒雷达](https://www.seeedstudio.com/24GHz-mmWave-Radar-Sensor-Sleep-Breathing-Monitoring-Module-p-5304.html?queryID=32e8107bce436db9b886cf1b8c698667&objectID=5304&indexName=bazaar_retailer_products)
- [Seeeduino-XIAO-Expansion-Board](https://wiki.seeedstudio.com/cn/Seeeduino-XIAO-Expansion-Board/)
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

### I2C 支持

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

熟悉 micropython 能让你做到更多，我们也期待为你创造更多价值。也欢迎随时与我们分享你的项目！

### DAC 支持

感谢 Aleksei Tertychnyi 提交代码，所有相关功能均由他开发并贡献。

```python
from machine import Pin, Timer, DAC

led = Pin(18, Pin.OUT)
counter = 0

dac = DAC(0) #DAC on A0 output

def loop(tim):
    global counter
    led.value(counter%2)
    print('DAC value: ', end =" ")
    print(counter)
    dac.write(counter%1024)
    counter = counter + 1

tim = Timer(-1)
tim.init(period=1000, mode=Timer.PERIODIC, callback=loop)
```

**A0 引脚**上的电压将开始逐渐升高，在大约 *3.3V* 达到最大值后，会降至 *0V*，然后循环重复。

### ADC 支持
ADC 示例 MicroPython 代码：

```python
from machine import Pin, Timer, ADC
led = Pin(18, Pin.OUT)  # digital output for blinking
counter = 0             # simple counter for LED toggle

ADC_CONVERT_V = 1.0 / 65535.0  # conversion factor: raw ADC (16-bit) → voltage (vref=1.0V)

adc = ADC(4, vref=0)   # ADC reads on pin A4, using internal 1.0V reference
adcVoltage = 0.0       # variable to store measured voltage

def fun(tim):
    global counter, adcVoltage  # make sure we update the global variables
    counter += 1                # increment counter
    adcVoltage = adc.read_u16() * ADC_CONVERT_V  # read ADC and convert to voltage
    print(adcVoltage)           # print voltage to REPL
    led.value(counter % 2)      # toggle LED every callback (blink)

tim = Timer(-1)                    # create a virtual timer
tim.init(period=1000,              # callback period in milliseconds (1000 ms = 1 s)
         mode=Timer.PERIODIC,      # periodic callback
         callback=fun)             # function to call
```

## MicroPython 设备控制台

我们的合作伙伴 **Neil** 使用 MicroPython 为 XIAO 编写了一个命令行控制台程序。通过这个程序，你可以轻松上传、下载和删除文件。我们感谢他对 XIAO 的贡献！

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://gitlab.cba.mit.edu/pub/upy/-/blob/main/upy.py" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div>

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
