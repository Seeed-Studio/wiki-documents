---
description: Seeed Studio XIAO ESP32S3 搭配 MicroPython
title: XIAO ESP32S3 搭配 MicroPython
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/esp32s3_micropython/title.png
slug: /xiao_esp32s3_with_micropython
last_update:
  date: 11/05/2026
  author: Evelyn Chen
createdAt: '2024-08-14'
updatedAt: '2026-11-05'
url: https://wiki.seeedstudio.com/cn/xiao_esp32s3_with_micropython/
---

# **Seeed Studio XIAO ESP32S3 搭配 MicroPython**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/esp32s3_micropython/title.png" /></div>

[MicroPython](https://github.com/micropython/micropython/wiki) 是一个带有部分原生代码编译特性的 Python 解释器。它提供了 Python 3.5 功能的一个子集，专为嵌入式处理器和受限系统实现。它与 CPython 不同，你可以在[这里](https://github.com/micropython/micropython/wiki/Differences)阅读更多差异说明。

## 安装 MicroPython

#### 安装 Esptool

如果你尚未安装 esptool.py，可以在电脑上使用 pip 进行安装：

``` linux
pip install esptool
```

#### 下载 XIAO ESP32S3 的 MicroPython 固件

你需要从 [micropython.org](https://micropython.org/download/SEEED_XIAO_ESP32S3/) 下载固件二进制文件。
下载正确的 bin 文件后，进入该文件所在的文件夹，并在此处打开一个 cmd 终端。
在最终定稿时，最新版本的 bin 文件为：

```
SEEED_XIAO_ESP32S3-20260824-v1.29.0.bin
```

#### 将 XIAO ESP32S3 连接到电脑

你需要在将 type C USB 线插入电脑的同时，按住并保持 XIAO ESP32S3 板上的 BOOT 按钮，以进入“bootloader”模式。

#### 检查端口

在电脑上查找所有串口设备。

- Linux

在 Linux 上，你可以使用 *dmesg* 命令查看已连接的设备：

```Linux
dmesg | grep tty
```

或者，你可以使用 *ls* 列出串口设备：

```
ls /dev/ttyS* /dev/ttyUSB*
```

- Window

在 Windows 上，你可以通过打开设备管理器来找到 USB 转串口的地址。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/2.png" /></div>

- macOS

在 macOS 上，你可以使用 *ls* 命令列出可用的串口：

```
ls /dev/cu*
```

这将显示所有串口设备。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/1.png" /></div>

:::tip
如果端口正被占用，你可以使用以下命令查找并杀死占用该端口的进程（在 macOS 上）：
识别使用该端口的进程：

```
lsof | grep port
```

该命令会列出打开的文件，并搜索任何使用指定端口的进程。
从输出中找到进程 ID（PID），并杀死该进程：

```
kill -9 <PID>
```

将 *PID* 替换为实际找到的进程 ID。
:::

#### 擦除 flash

```linux
esptool.py --chip esp32s3 --port /dev/cu.usbmodem11301 erase_flash
```

将 '/dev/cu.usbmodem11301' 替换为你系统中的正确端口名（例如在 Windows 上为 `COM3`，在 Linux 上为 `/dev/ttyUSB0`）。

#### 写入 flash

将固件烧录到 XIAO ESP32S3 上：

```linux
esptool.py --chip esp32s3 --port /dev/cu.usbmodem11301 --baud 460800 write_flash -z 0x0 SEEED_XIAO_ESP32S3-20260824-v1.29.0.bin
```

同样，将 '/dev/cu.usbmodem11301' 替换为正确的端口名，将 'SEEED_XIAO_ESP32S3-20260824-v1.29.0.bin' 替换为你的固件文件路径。
别忘了通过 RTS 引脚进行硬复位。
然后就可以开始使用你喜欢的工具向 ESP32 编写并编译脚本了！

## 推荐的 MicroPython 编辑器

下面列出了一些常用工具。

- [Thonny IDE](https://randomnerdtutorials.com/getting-started-thonny-micropython-python-ide-esp32-esp8266/)
- [Arduino for micropython](https://docs.arduino.cc/micropython/)
- [Visual Studio Code pymakr](https://randomnerdtutorials.com/micropython-esp32-esp8266-vs-code-pymakr/)
- [uPyCraft IDE](https://randomnerdtutorials.com/install-upycraft-ide-windows-pc-instructions/)

### 1. Thonny

安装并打开 Thonny，然后按照说明配置 Thonny：

```
pip install thonny
#open thonny after installation
thonny
```

进入 Run-->Configure Interpreter，确保 Thonny 选项中的 Interpreter 选项卡如下图所示，选择 "CircuitPython (generic)" 和端口：
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/4.png" /></div>

在对话框中点击 "OK"，你应该会在 Thonny 窗口底部看到 Micropython shell，如下图所示。
逐行在 Shell 中输入脚本，以获取 flash 和 sram 的大小：

```python
import esp
esp.flash_size()
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32s3_micropython/4.png" /></div>

恭喜你已成功在 XIAO ESP32S3 上通过 Thonny 配置好 MicroPython！

### 2. Arduino Lab for MicroPython

下载 Arduino Lab for MicroPython，并将设备连接到电脑。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/7.png" /></div>

像这样编写代码：

```python
from machine import Pin
import time

# Define the LED pin
led = Pin(6, Pin.OUT)  # Use correct gpio

# Blink the LED in a loop
while True:
    led.value(1)   # Turn the LED on
    time.sleep(1)  # Wait for a second
    led.value(0)   # Turn the LED off
    time.sleep(1)  # Wait for a second
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32s3_micropython/7.png" /></div>

### 3. 在 Visual Studio Code 上使用 Pymakr

- 安装 Pymakr
按照[安装说明](https://randomnerdtutorials.com/micropython-esp32-esp8266-vs-code-pymakr/)安装 Pymakr。
- 将 XIAO ESP32S3 连接到电脑。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32s3_micropython/8.png" /></div>

- 创建一个新项目
打开 VS Code，并为你的微控制器创建一个新项目。
- 新建一个 Python 文件
在项目中创建一个新的 Python 文件。
- 将脚本上传到 MCU 并编译脚本

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/10.png" /></div>

### 4. uPtCraft IDE

- [macOS](https://randomnerdtutorials.com/install-upycraft-ide-mac-os-x-instructions/)

- [Windows](PChttps://randomnerdtutorials.com/install-upycraft-ide-windows-pc-instructions/)
- [Linux](https://randomnerdtutorials.com/install-upycraft-ide-linux-ubuntu-instructions/)

## 引脚/端口信息

<div className="interactive_pinout_container">
  <a className="interactive_pinout_btn" href="https://www.seeedstudio.com/xiao-series-page/playground/pinout/?board=s3" target="_blank" rel="noopener noreferrer">探索交互式引脚图</a>
</div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32s3_micropython/10.png" /></div>

- 更多信息请参考[硬件概述](https://wiki.seeedstudio.com/cn/xiao_esp32s3_getting_started/#硬件概述)
- [Seeed Studio XIAO ESP32S3 原理图](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_SCH_v1.2.pdf)

## 在 XIAO ESP32S3 上开始使用 MicroPython

这里有一份[基于 MicroPython 的 ESP32 操作快速参考](https://docs.micropython.org/en/latest/esp32/quickref.html#installing-micropython)。
关于 [micropython 库](https://docs.micropython.org/en/latest/library/index.html#python-standard-libraries-and-micro-libraries) 的更多知识。

### 通用板级控制

MicroPython REPL（*R*ead-*E*val-*P*rint-*L*oop）位于 UART0（GPIO1=TX，GPIO3=RX），波特率为 115200。Tab 补全对于查找对象有哪些方法非常有用。粘贴模式（ctrl-E）在向 REPL 粘贴大段 Python 代码时非常实用。
可以在 MicroPython 中使用 *dir()* 函数（与 Python 中类似）列出对象的属性和方法。
例如，在 shell 中输入 *dir(machine)*：
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32s3_micropython/11.png" /></div>

*machine* 模块：

```python
import machine
machine.freq()          # get the current frequency of the CPU, for esp32s3 is 240000000
machine.freq(160000000) # set the CPU frequency to 160 MHz
#frequency must be 20MHz, 40MHz, 80Mhz, 160MHz or 240MHz
```

*esp* 模块：

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
ESP32C3、ESP32S2 和 ESP32S3 具有可用的内部温度传感器，并以摄氏度返回温度：

```python
import esp32
esp32.mcu_temperature() # read the internal temperature of the MCU, in Celsius
```

### 网络 - WLAN

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

一个用于连接本地 WiFi 网络的实用函数如下：

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

### 延时与定时

*time* 模块：

```python
import time

time.sleep(1)           # sleep for 1 second
time.sleep_ms(500)      # sleep for 500 milliseconds
time.sleep_us(10)       # sleep for 10 microseconds
start = time.ticks_ms() # get millisecond counter
delta = time.ticks_diff(time.ticks_ms(), start) # compute time difference
```

### 定时器

ESP32 端口有四个硬件定时器。使用带有 0 到 3（包含）之间定时器 ID 的[class](https://docs.micropython.org/en/latest/library/machine.Timer.html#machine-timer)：

```python
from machine import Timer

tim0 = Timer(0)
tim0.init(period=5000, mode=Timer.ONE_SHOT, callback=lambda t:print(0))

tim1 = Timer(1)
tim1.init(period=2000, mode=Timer.PERIODIC, callback=lambda t:print(1))
```

周期单位为毫秒。
当前此端口不支持虚拟定时器。

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

可用引脚范围（包含）为：1,2,3,4,5,6,7,8,9,43,44。它们对应 ESP32S3 芯片的实际 GPIO 引脚编号。

### UART（串行总线）

*machine.UART* 类：

```python
from machine import UART

uart1 = UART(1, baudrate=9600, tx=43, rx=44)
uart1.write('hello')  # write 5 bytes
uart1.read(5)         # read up to 5 bytes
```

ESP32C3 具有一个硬件 UART。其引脚如下所示：

| UART | Pin |
|------|-----|
| TX   | 43  |
| RX   | 44  |

### PWM（脉宽调制）

PWM 可以在所有支持输出的引脚上启用。基准频率范围可以从 1Hz 到 40MHz，但存在权衡：基准频率越高，占空比分辨率越低。
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

### ADC（模数转换）

在 XIAO ESP32S3 上，ADC 功能可用于引脚 1,2,3,4,5,6,7,8,9。
*machine.ADC* 类：

```python
from machine import ADC

adc = ADC(pin)        # create an ADC object acting on a pin
val = adc.read_u16()  # read a raw analog value in the range 0-65535
val = adc.read_uv()   # read an analog value in microvolts
```

### SPI

#### 软件 SPI 总线

软件 SPI（使用位翻转）可在所有引脚上工作，并通过 *machine.SoftSPI* 类进行访问：

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

硬件 SPI 通过 machine.SPI 类进行访问，并具有与上述软件 SPI 相同的方法：

```python
from machine import Pin, SPI

hspi = SPI(1, 10000000)
hspi = SPI(1, 10000000, sck=Pin(7), mosi=Pin(9), miso=Pin(8))
```

| SPI  | Pin |
|------|-----|
| SCK  | D7  |
| MOSI | D9 |
| MISO | D8  |

### I2C

#### 软件 I2C 总线

软件 I2C（使用位翻转）可在所有具备输出能力的引脚上工作，并通过 *machine.SoftI2C* 类进行访问：

```python
from machine import Pin, SoftI2C

i2c = SoftI2C(scl=Pin(6), sda=Pin(5), freq=100000)

i2c.scan()              # scan for devices

i2c.readfrom(0x3a, 4)   # read 4 bytes from device with address 0x3a
i2c.writeto(0x3a, '12') # write '12' to device with address 0x3a

buf = bytearray(10)     # create a buffer with 10 bytes
i2c.writeto(0x3a, buf)  # write the given buffer to the peripheral
```

#### 硬件 I2C 总线

驱动通过 *machine.I2C* 类进行访问，并具有与上述软件 I2C 相同的方法：

```python
from machine import Pin, I2C
i2c = I2C(0, scl=Pin(6), sda=Pin(5), freq=400000)
```

### XIAO 扩展板底板

*前提条件*：

<table align="center">
  <tbody><tr>
      <th>已焊接排针的 XIAO ESP32S3<br /> </th>
      <th>XIAO 扩展板底板</th>
      <th>Grove 光线传感器</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/15.png" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/16.png" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
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

#### 读取光线传感器数据

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/9.png" /></div>

```python
import time
from machine import Pin, ADC

# Initialize the analog input on pin 2 (corresponds to A0)
analog_in = ADC(Pin(1))
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

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32s3_micropython/13.png" /></div>

#### 点亮 OLED 屏幕

插入你的 XIAO ESP32S3，打开 Thonny，点击右下角来配置解释器
选择解释器 Micropython (ESP32) 和 **Port >>> 点击 OK**
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32s3_micropython/14.png" /></div>

如果一切顺利，你会在 Shell 中看到输出
从 MicroPython 安装 ssd1306 库。
点击 "Tools" >>> 点击 "Management Packages" >>> 输入库名称 >>> 点击 "Search micropython-lib and PyPl"

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32s3_micropython/15.png" /></div>

运行脚本并将其烧录到开发板。
完成编码后，点击绿色按钮运行脚本。

```python
import time
from machine import Pin, SoftI2C
import ssd1306
import math

# ESP8266 Pin assignment
i2c = SoftI2C(scl=Pin(6), sda=Pin(5))  # Adjust the Pin numbers based on your connections
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

#### 摄像头串流测试

针对 ESP32S3 sense（带摄像头）也提供了摄像头串流测试，请参考[这里](https://wiki.seeedstudio.com/cn/XIAO_ESP32S3_Micropython/#step-3-testing-the-streaming-example)。

感谢你阅读本文！欢迎在评论区分享你的想法。

## 资源

- 适用于 XIAO ESP32S3 的 MicroPython[固件二进制文件](https://micropython.org/download/ESP32_GENERIC_S3/)

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
