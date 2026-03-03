---
description: Seeed Studio XIAO ESP32C3 与 MicroPython
title: XIAO ESP32C3 与 MicroPython
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/esp32c3_micropython/title.png
slug: /xiao_esp32c3_with_micropython
last_update:
  date: 08/14/2024
  author: Evelyn Chen
---

# **Seeed Studio XIAO ESP32C3 与 MicroPython**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/title.png" /></div>

[MicroPython](https://github.com/micropython/micropython/wiki) 是一个具有部分原生代码编译功能的 Python 解释器。它提供了 Python 3.5 功能的子集，专为嵌入式处理器和受限系统实现。它与 CPython 不同，您可以在[这里](https://github.com/micropython/micropython/wiki/Differences)了解更多关于差异的信息。

## 安装 MicroPython

#### 安装 Esptool

如果您还没有安装 esptool.py，可以在您的电脑上使用 pip 进行安装：

``` linux
pip install esptool
```

#### 下载 XIAO ESP32C3 MicroPython 固件

您需要从 [micropython.org](https://micropython.org/download/ESP32_GENERIC_C3/) 下载固件二进制文件
下载正确的 bin 文件后，导航到该文件夹，并在那里打开一个 cmd 终端。
截至最终草稿，最新版本的 bin 文件是：

```
ESP32_GENERIC_C3-20230602-v1.23.0.bin
```

#### 将 XIAO ESP32C3 连接到您的电脑

您需要在将 type C USB 线缆插入电脑的同时，按住 XIAO ESP32C3 开发板上的 BOOT 按钮，以进入"引导加载程序"模式。

#### 检查端口

找出您电脑上的所有串行设备。

- Linux

在 Linux 上，您可以使用 *dmesg* 命令查看已连接的设备：

```Linux
dmesg | grep tty
```

或者，您可以使用 *ls* 列出串行设备：

```
ls /dev/ttyS* /dev/ttyUSB*
```

- Windows

在 Windows 上，您可以通过设备管理器检查串行端口。查看"端口 (COM 和 LPT)"部分以查看可用的串行端口。您也可以在命令提示符中使用 mode 命令来列出串行端口：

```
mode
```

- macOS

在 macOS 上，您可以使用 *ls* 命令列出可用的串行端口：

```
ls /dev/cu*
```

这将显示所有串口设备。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/1.png" /></div>

:::tip
如果端口繁忙，您可以使用以下命令查找并终止使用该端口的进程（在 macOS 上）：
识别使用端口的进程：

```
lsof | grep port
```

此命令列出打开的文件并搜索使用指定端口的任何进程。
从输出中找到进程ID(PID)并终止该进程：

```
kill -9 <PID>
```

将 *PID* 替换为找到的实际进程 ID。
:::

#### Erase flash

```linux
esptool.py --chip esp32c3 --port /dev/cu.usbmodem11301 erase_flash
```

将 '/dev/cu.usbmodem11301' 替换为您系统中正确的端口名称（例如 Windows 上的 `COM3`，Linux 上的 `/dev/ttyUSB0`）。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/2.png" /></div>

#### 写入闪存

将固件刷写到 XIAO ESP32C3：

```linux
esptool.py --chip esp32c3 --port /dev/cu.usbmodem11301 --baud 460800 write_flash -z 0x0 ESP32_GENERIC_C3-20240602-v1.23.0.bin
```

再次提醒，将 '/dev/cu.usbmodem11301' 替换为正确的端口名称，将 'ESP32_GENERIC_C3-20240602-v1.23.0.bin' 替换为您的空白固件文件路径。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/3.png" /></div>
然后就可以开始使用您喜欢的工具将脚本编译到 ESP32！

## 推荐的 MicroPython 编辑器

下面列出了一些流行的工具。

- [Thonny IDE](https://randomnerdtutorials.com/getting-started-thonny-micropython-python-ide-esp32-esp8266/)
- [Arduino 用于 MicroPython](https://docs.arduino.cc/micropython/)
- [Visual Studio Code pymakr](https://randomnerdtutorials.com/micropython-esp32-esp8266-vs-code-pymakr/)
- [uPyCraft IDE](https://randomnerdtutorials.com/install-upycraft-ide-windows-pc-instructions/)

### 1. Thonny

安装并打开 thonny，然后按照说明配置 Thonny：

```
pip install thonny
#open thonny after installation
thonny
```

转到 Run-->Configure Interpreter，确保 Thonny 选项中的 Interpreter 选项卡如下所示，选择"CircuitPython (generic)"和端口：
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/4.png" /></div>

在对话框中点击"OK"，您应该会在 thonny 窗口底部看到 Micropython shell，如下图所示。
逐行将脚本输入到 Shell 中以获取闪存和内存大小：

```python
import gc
gc.mem_free()

import esp
esp.flash_size()
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/4.png" /></div>

恭喜您成功在 XIAO ESP32C3 上使用 Thonny 设置了 MicroPython！

### 2. Arduino Lab for MicroPython

下载 Arduino lab for MicroPython 并将设备连接到您的电脑。
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/7.png" /></div>

代码如下：

```python
from machine import Pin
import time

# Define the LED pin
led = Pin(7, Pin.OUT)  # Use the correct GPIO number instead of D10

# Blink the LED in a loop
while True:
    led.value(1)   # Turn the LED on
    time.sleep(1)  # Wait for a second
    led.value(0)   # Turn the LED off
    time.sleep(1)  # Wait for a second
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/9.png" /></div>

### 3. Visual Studio Code 上的 Pymakr

- 安装 Pymakr
按照[安装说明](https://randomnerdtutorials.com/micropython-esp32-esp8266-vs-code-pymakr/)来安装 Pymakr。

- 将您的 XIAO ESP32C3 连接到计算机。
- 创建新项目
打开 VS Code 并为您的微控制器创建一个新项目。
- 添加新的 Python 文件
在您的项目中创建一个新的 Python 文件。
- 将脚本上传到 MCU 并编译脚本

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/10.png" /></div>

### 4. uPtCraft IDE

- [macOS](https://randomnerdtutorials.com/install-upycraft-ide-mac-os-x-instructions/)

- [Windows](PChttps://randomnerdtutorials.com/install-upycraft-ide-windows-pc-instructions/)
- [Linux](https://randomnerdtutorials.com/install-upycraft-ide-linux-ubuntu-instructions/)

## 引脚定义/端口信息

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/11.png" /></div>

- 更多信息请参考[硬件概述](https://wiki.seeedstudio.com/cn/XIAO_ESP32C3_Getting_Started/#hardware-overview)
- [Seeed Studio XIAO ESP32C3 原理图](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/Seeeduino-XIAO-ESP32C3-SCH.pdf)

## 在 XIAO ESP32C3 上开始使用 MicroPython

这里是[micropython 操作 ESP32 的快速参考](https://docs.micropython.org/en/latest/esp32/quickref.html#installing-micropython)。
有关[micropython 库](https://docs.micropython.org/en/latest/library/index.html#python-standard-libraries-and-micro-libraries)的更多知识。

### 通用板控制

MicroPython REPL（*读取*-*求值*-*打印*-*循环*）位于 UART0（GPIO1=TX，GPIO3=RX），波特率为 115200。Tab 补全功能有助于找出对象具有哪些方法。粘贴模式（ctrl-E）有助于将大段 Python 代码粘贴到 REPL 中。
可以在 MicroPython 中使用 *dir()* 函数（类似于 Python）来列出对象的属性和方法。
例如，在 shell 中输入 *dir(machine)*：
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/12.png" /></div>

*machine* 模块：

```python
import machine
machine.freq()          # get the current frequency of the CPU, for esp32c3 is 160000000
machine.freq(160000000) # set the CPU frequency to 160 MHz
```

The *esp* module:

```python
import esp

esp.osdebug(None)       # turn off vendor O/S debugging messages
esp.osdebug(0)          # redirect vendor O/S debugging messages to UART(0)

# low level methods to interact with flash storage
esp.flash_size()
esp.flash_user_start()
esp.flash_erase(sector_no)
esp.flash_write(byte_offset, buffer)
esp.flash_read(byte_offset, buffer)
```

*esp32* 模块：
ESP32C3、ESP32S2 和 ESP32S3 具有内置温度传感器，可返回摄氏度温度值：

```python
import esp32
esp32.mcu_temperature() # read the internal temperature of the MCU, in Celsius
```

### Network-WLAN

*Network* 模块：
更多信息请参考[这里](https://docs.micropython.org/en/latest/library/network.WLAN.html)。

```python
import network

wlan = network.WLAN(network.STA_IF) # create station interface
wlan.active(True)       # activate the interface
wlan.scan()             # scan for access points
wlan.isconnected()      # check if the station is connected to an AP
wlan.connect('ssid', 'key') # connect to an AP
wlan.config('mac')      # get the interface's MAC address
wlan.ifconfig()  # get the interface's IPv4 addresses

ap = network.WLAN(network.AP_IF) # create access-point interface
ap.config(ssid='ESP-AP') # set the SSID of the access point
ap.config(max_clients=10) # set how many clients can connect to the network
ap.active(True)         # activate the interface

```

一个用于连接到本地 WiFi 网络的有用函数是：

```python
def do_connect():
    import network
    wlan = network.WLAN(network.STA_IF)
    wlan.active(True)
    if not wlan.isconnected():
        print('connecting to network...')
        wlan.connect('ssid', 'key') #replace the ssid and key
        while not wlan.isconnected():
            pass
    print('network config:', wlan.ifconfig())

```

### Delay and timing

The *time* module:

```python
import time

time.sleep(1)           # sleep for 1 second
time.sleep_ms(500)      # sleep for 500 milliseconds
time.sleep_us(10)       # sleep for 10 microseconds
start = time.ticks_ms() # get millisecond counter
delta = time.ticks_diff(time.ticks_ms(), start) # compute time difference
```

### 定时器

ESP32 端口有四个硬件定时器。使用 [class](https://docs.micropython.org/en/latest/library/machine.Timer.html#machine-timer) 和定时器 ID（从 0 到 3，包含边界值）：

```python
from machine import Timer

tim0 = Timer(0)
tim0.init(period=5000, mode=Timer.ONE_SHOT, callback=lambda t:print(0))

tim1 = Timer(1)
tim1.init(period=2000, mode=Timer.PERIODIC, callback=lambda t:print(1))
```

周期以毫秒为单位。
此端口目前不支持虚拟定时器。

### 引脚和 GPIO

*machine.Pin* 类：

```python
from machine import Pin

p2 = Pin(2, Pin.OUT)    # create output pin on GPIO2
p2.on()                 # set pin to "on" (high) level
p2.off()                # set pin to "off" (low) level
p2.value(1)             # set pin to on/high

p3 = Pin(3, Pin.IN)     # create input pin on GPIO3
print(p3.value())       # get value, 0 or 1

p4 = Pin(4, Pin.IN, Pin.PULL_UP) # enable internal pull-up resistor
p5 = Pin(5, Pin.OUT, value=1) # set pin high on creation
p6 = Pin(6, Pin.OUT, drive=Pin.DRIVE_3) # set maximum drive strength
```

可用引脚来自以下范围（包含）：2,3,4,5,6,7,8,9,10,20,21。这些对应于 ESP32C3 芯片的实际 GPIO 引脚编号。

### UART（串行总线）

*machine.UART* 类：

```python
from machine import UART

uart1 = UART(1, baudrate=9600, tx=21, rx=20)
uart1.write('hello')  # write 5 bytes
uart1.read(5)         # read up to 5 bytes
```

ESP32C3 有一个硬件 UART。引脚列表如下：

| UART | Pin |
|------|-----|
| TX   | 21  |
| RX   | 20  |

### PWM(脉宽调制)

PWM 可以在所有支持输出的引脚上启用。基频范围可以从 1Hz 到 40MHz，但存在权衡；随着基频增加，占空比分辨率会降低。
*machine.PWM* 类：

```python
from machine import Pin, PWM

pwm2 = PWM(Pin(2), freq=5000, duty_u16=32768) # create PWM object from a pin
freq = pwm2.freq()         # get current frequency
pwm2.freq(1000)            # set PWM frequency from 1Hz to 40MHz

duty = pwm2.duty()         # get current duty cycle, range 0-1023 (default 512, 50%)
pwm2.duty(256)             # set duty cycle from 0 to 1023 as a ratio duty/1023, (now 25%)

duty_u16 = pwm2.duty_u16() # get current duty cycle, range 0-65535
pwm2.duty_u16(2**16*3//4)  # set duty cycle from 0 to 65535 as a ratio duty_u16/65535, (now 75%)

duty_ns = pwm2.duty_ns()   # get current pulse width in ns
pwm2.duty_ns(250_000)      # set pulse width in nanoseconds from 0 to 1_000_000_000/freq, (now 25%)

pwm2.deinit()              # turn off PWM on the pin

pwm3 = PWM(Pin(3), freq=20000, duty=512)  # create and configure in one go
print(pwm3)                               # view PWM settings
```

ESP芯片具有不同的硬件外设：

| 硬件规格                         | ESP32C3 | ESP32 |
|------------------------------------------------|----------|-------|
| 组数（速度模式）                 | 1        | 2     |
| 每组定时器数量                      | 4        | 4     |
| 每组通道数量                    | 6        | 8     |
| 不同PWM频率（组数 * 定时器数）     | 4        | 8     |
| PWM通道总数（引脚，占空比）（组数 * 通道数） | 6        | 16    |

### ADC（模数转换）

在XIAO ESP32C3上，ADC功能可在引脚2、3、4上使用。
:::note
A3(GP105) - 使用ADC2，可能由于错误的采样信号而无法工作。对于模拟读取，请使用ADC1(A0/A1/A2)。请参考XIAO ESP32C3数据手册。
:::
*machine.ADC*类：

```python
from machine import ADC

adc = ADC(pin)        # create an ADC object acting on a pin
val = adc.read_u16()  # read a raw analog value in the range 0-65535
val = adc.read_uv()   # read an analog value in microvolts
```

### SPI

#### 软件 SPI 总线

软件 SPI（使用位操作）可在所有引脚上工作，通过 *machine.SoftSPI* 类访问：

```python
from machine import Pin, SoftSPI

# construct a SoftSPI bus on the given pins
# polarity is the idle state of SCK
# phase=0 means sample on the first edge of SCK, phase=1 means the second
spi = SoftSPI(baudrate=100000, polarity=1, phase=0, sck=Pin(2), mosi=Pin(4), miso=Pin(6))

spi.init(baudrate=200000) # set the baudrate

spi.read(10)            # read 10 bytes on MISO
spi.read(10, 0xff)      # read 10 bytes while outputting 0xff on MOSI

buf = bytearray(50)     # create a buffer
spi.readinto(buf)       # read into the given buffer (reads 50 bytes in this case)
spi.readinto(buf, 0xff) # read into the given buffer and output 0xff on MOSI

spi.write(b'12345')     # write 5 bytes on MOSI

buf = bytearray(4)      # create a buffer
spi.write_readinto(b'1234', buf) # write to MOSI and read from MISO into the buffer
spi.write_readinto(buf, buf) # write buf to MOSI and read MISO back into buf
```

#### 硬件 SPI 总线

硬件 SPI 通过 machine.SPI 类访问，具有与上述软件 SPI 相同的方法：

```python
from machine import Pin, SPI

hspi = SPI(1, 10000000)
hspi = SPI(1, 10000000, sck=Pin(8), mosi=Pin(10), miso=Pin(9))
```

| SPI  | 引脚 |
|------|-----|
| SCK  | D8  |
| MOSI | D10 |
| MISO | D9  |

### I2C

#### 软件 I2C 总线

软件 I2C（使用位操作）可在所有具有输出功能的引脚上工作，通过 *machine.SoftI2C* 类访问：

```python
from machine import Pin, SoftI2C

i2c = SoftI2C(scl=Pin(7), sda=Pin(6), freq=100000)

i2c.scan()              # scan for devices

i2c.readfrom(0x3a, 4)   # read 4 bytes from device with address 0x3a
i2c.writeto(0x3a, '12') # write '12' to device with address 0x3a

buf = bytearray(10)     # create a buffer with 10 bytes
i2c.writeto(0x3a, buf)  # write the given buffer to the peripheral
```

#### 硬件 I2C 总线

驱动程序通过 *machine.I2C* 类访问，具有与上述软件 I2C 相同的方法：

```python
from machine import Pin, I2C
i2c = I2C(0, scl=Pin(7), sda=Pin(6), freq=400000)
```

| I2C  | GPIO | 引脚 |
|------|------|-----|
| SCL  | GPIO7 | D5  |
| SDA  | GPIO6 | D4  |

### XIAO 扩展底板

*前提条件*:

<table align="center">
  <tbody><tr>
      <th>XIAO ESP32C3<br /> 已焊接排针</th>
      <th>XIAO 扩展底板</th>
      <th>Grove 光传感器</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:100, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/15.png" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/16.png" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

#### 读取光传感器数据

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/9.png" /></div>

```python
import time
from machine import Pin, ADC

# Initialize the analog input on pin 2 (corresponds to A0)
analog_in = ADC(Pin(2))
analog_in.atten(ADC.ATTN_11DB)  # Configure the input range (0-3.6V)

def get_voltage(pin):
    # Convert the raw ADC value to voltage
    return (pin.read() / 4095) * 3.3

while True:
    # Read the raw analog value
    raw_value = analog_in.read()
    # Convert the raw value to voltage
    voltage = get_voltage(analog_in)
    
    # Print the raw value and voltage to the serial console
    print("[Light] Raw value: {:5d} Voltage: {:.2f}V".format(raw_value, voltage))
    
    # Delay for a short period of time before reading again
    time.sleep(1)

```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/14.png" /></div>

#### 点亮OLED屏幕

插入您的XIAO ESP32C3，打开Thonny并点击右下角配置解释器
选择解释器- Micropython (ESP32) 和 **端口 >>> 点击确定**
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/15.png" /></div>

如果一切顺利，您将在shell中看到输出
安装所需的[库](https://wiki.seeedstudio.com/cn/XIAO_ESP32C3_MicroPython/#install-required-libraries)
点击"工具" >>> 点击"管理包" >>> 输入库的名称 >>> 点击"搜索micropython-lib和PyPl"
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/16.png" /></div>

运行脚本并将其烧录到开发板。
完成编码后，点击绿色按钮运行脚本。

```python
import time
from machine import Pin, SoftI2C
import ssd1306
import math

# Pin assignment
i2c = SoftI2C(scl=Pin(7), sda=Pin(6))  # Adjust the Pin numbers based on your connections
oled_width = 128
oled_height = 64
oled = ssd1306.SSD1306_I2C(oled_width, oled_height, i2c)

oled.fill(0)  # Clear the screen
oled.text("Hello, Seeder!", 10, 15)
oled.text("/////", 30, 40)
oled.text("(`3`)y", 30, 55)
oled.show()  # Show the text
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/17.png" /></div>

感谢您阅读本文！欢迎在评论中分享您的想法。

## 资源

- 适用于 XIAO ESP32C3 的 MicroPython [固件二进制文件](https://micropython.org/download/ESP32_GENERIC_C3/)

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
