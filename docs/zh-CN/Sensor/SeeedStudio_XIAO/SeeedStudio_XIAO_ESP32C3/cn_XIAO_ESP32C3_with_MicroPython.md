---
description: Seeed Studio XIAO ESP32C3 与 MicroPython
title: XIAO ESP32C3 与 MicroPython
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/esp32c3_micropython/title.png
slug: /cn/xiao_esp32c3_with_micropython
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
您需要按住 XIAO ESP32C3 板上的 BOOT 按钮以进入"引导加载程序"模式，同时将 type C USB 线缆插入您的电脑。

#### 检查端口
找出您电脑上的所有串行设备。

* Linux 

在 Linux 上，您可以使用 *dmesg* 命令查看连接的设备：
```Linux
dmesg | grep tty
```
或者，您可以使用 *ls* 列出串行设备：
```
ls /dev/ttyS* /dev/ttyUSB*
```

* Windows

在 Windows 上，您可以通过设备管理器检查串行端口。查看"端口 (COM 和 LPT)"部分以查看可用的串行端口。您也可以在命令提示符中使用 mode 命令列出串行端口：
```
mode
```

* macOS

在 macOS 上，您可以使用 *ls* 命令列出可用的串行端口：
```
ls /dev/cu*
```
这将显示所有串行端口设备。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/1.png" /></div>

:::tip
如果端口繁忙，您可以使用以下命令查找并终止使用该端口的进程（在 macOS 上）：
识别使用端口的进程：
```
lsof | grep port
```
此命令列出打开的文件并搜索使用指定端口的任何进程。
从输出中找到进程 ID（PID）并终止进程：
```
kill -9 <PID>
```
将 *PID* 替换为找到的实际进程 ID。
:::

#### 擦除闪存
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
再次将 '/dev/cu.usbmodem11301' 替换为正确的端口名称，将 'ESP32_GENERIC_C3-20240602-v1.23.0.bin' 替换为您的空白固件文件的路径。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/3.png" /></div>
然后就可以开始使用您喜欢的工具将脚本编译到 ESP32！

## 推荐的 MicroPython 编辑器
下面列出了一些流行的工具。
* [Thonny IDE](https://randomnerdtutorials.com/getting-started-thonny-micropython-python-ide-esp32-esp8266/)
* [Arduino for micropython](https://docs.arduino.cc/micropython/)
* [Visual Studio Code pymakr](https://randomnerdtutorials.com/micropython-esp32-esp8266-vs-code-pymakr/)
* [uPyCraft IDE](https://randomnerdtutorials.com/install-upycraft-ide-windows-pc-instructions/)

### 1. Thonny
安装并打开 thonny，然后按照说明配置 Thonny：
```
pip install thonny
#安装后打开 thonny
thonny
```
转到 Run-->Configure Interpreter，确保 Thonny 选项中的 Interpreter 选项卡如下所示，选择"CircuitPython (generic)"和端口：
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/4.png" /></div>

在对话框中点击"OK"，您应该会在 thonny 窗口底部看到 Micropython shell，如下图所示。
逐行输入脚本到 Shell 中以获取闪存和 sram 大小：
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

# 定义 LED 引脚
led = Pin(7, Pin.OUT)  # 使用正确的 GPIO 编号而不是 D10

# 在循环中闪烁 LED
while True:
    led.value(1)   # 打开 LED
    time.sleep(1)  # 等待一秒
    led.value(0)   # 关闭 LED
    time.sleep(1)  # 等待一秒
```
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/9.png" /></div>

### 3. Visual Studio Code 上的 Pymakr
* 安装 Pymakr
按照[安装说明](https://randomnerdtutorials.com/micropython-esp32-esp8266-vs-code-pymakr/)安装 Pymakr。
* 将您的 XIAO ESP32C3 连接到计算机。
* 创建新项目
打开 VS Code 并为您的微控制器创建一个新项目。
* 添加新的 Python 文件
在您的项目中创建一个新的 Python 文件。
* 将脚本上传到 MCU 并编译脚本

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/10.png" /></div>

### 4. uPtCraft IDE
* [macOS](https://randomnerdtutorials.com/install-upycraft-ide-mac-os-x-instructions/)
* [Windows](PChttps://randomnerdtutorials.com/install-upycraft-ide-windows-pc-instructions/)
* [Linux](https://randomnerdtutorials.com/install-upycraft-ide-linux-ubuntu-instructions/)


## 引脚图/端口信息
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/11.png" /></div>

* 更多信息请参考[硬件概述](https://wiki.seeedstudio.com/cn/XIAO_ESP32C3_Getting_Started/#hardware-overview)
* [Seeed Studio XIAO ESP32C3 原理图](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/Seeeduino-XIAO-ESP32C3-SCH.pdf)

## 开始使用 MicroPython 在 XIAO ESP32C3 上

这里是 [ESP32 通过 micropython 操作的快速参考](https://docs.micropython.org/en/latest/esp32/quickref.html#installing-micropython)。
更多关于 [micropython 库](https://docs.micropython.org/en/latest/library/index.html#python-standard-libraries-and-micro-libraries) 的知识。

### 通用板控制
MicroPython REPL(*R*ead-*E*val-*P*rint-*L*oop) 在 UART0 (GPIO1=TX, GPIO3=RX) 上，波特率为 115200。Tab 补全功能对于查找对象的方法很有用。粘贴模式 (ctrl-E) 对于将大段 Python 代码粘贴到 REPL 中很有用。
可以在 MicroPython 中使用 *dir()* 函数（类似于 Python）来列出对象的属性和方法。
例如，在 shell 中输入 *dir(machine)*：
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/12.png" /></div>

*machine* 模块：
```python
import machine
machine.freq()          # 获取 CPU 的当前频率，对于 esp32c3 是 160000000
machine.freq(160000000) # 将 CPU 频率设置为 160 MHz
```
*esp* 模块：
```python
import esp

esp.osdebug(None)       # 关闭供应商操作系统调试消息
esp.osdebug(0)          # 将供应商操作系统调试消息重定向到 UART(0)

# 与闪存存储交互的低级方法
esp.flash_size()
esp.flash_user_start()
esp.flash_erase(sector_no)
esp.flash_write(byte_offset, buffer)
esp.flash_read(byte_offset, buffer)
```

*esp32* 模块：
ESP32C3、ESP32S2 和 ESP32S3 有一个内部温度传感器可用，返回摄氏度温度：
```python
import esp32
esp32.mcu_temperature() # 读取 MCU 的内部温度，单位为摄氏度
```


### 网络-WLAN
*Network* 模块：
更多信息请参考 [这里](https://docs.micropython.org/en/latest/library/network.WLAN.html)。
```python
import network

wlan = network.WLAN(network.STA_IF) # 创建站点接口
wlan.active(True)       # 激活接口
wlan.scan()             # 扫描接入点
wlan.isconnected()      # 检查站点是否连接到 AP
wlan.connect('ssid', 'key') # 连接到 AP
wlan.config('mac')      # 获取接口的 MAC 地址
wlan.ifconfig()  # 获取接口的 IPv4 地址

ap = network.WLAN(network.AP_IF) # 创建接入点接口
ap.config(ssid='ESP-AP') # 设置接入点的 SSID
ap.config(max_clients=10) # 设置可以连接到网络的客户端数量
ap.active(True)         # 激活接口

```
一个连接到本地 WiFi 网络的有用函数：	
```python
def do_connect():
    import network
    wlan = network.WLAN(network.STA_IF)
    wlan.active(True)
    if not wlan.isconnected():
        print('connecting to network...')
        wlan.connect('ssid', 'key') #替换 ssid 和 key
        while not wlan.isconnected():
            pass
    print('network config:', wlan.ifconfig())

```
### 延迟和定时 
*time* 模块：
```python
import time

time.sleep(1)           # 睡眠 1 秒
time.sleep_ms(500)      # 睡眠 500 毫秒
time.sleep_us(10)       # 睡眠 10 微秒
start = time.ticks_ms() # 获取毫秒计数器
delta = time.ticks_diff(time.ticks_ms(), start) # 计算时间差
```

### 定时器
ESP32 端口有四个硬件定时器。使用 [类](https://docs.micropython.org/en/latest/library/machine.Timer.html#machine-timer) 与定时器 ID 从 0 到 3（包含）：
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

p2 = Pin(2, Pin.OUT)    # 在 GPIO2 上创建输出引脚
p2.on()                 # 将引脚设置为"开"（高）电平
p2.off()                # 将引脚设置为"关"（低）电平
p2.value(1)             # 将引脚设置为开/高

p3 = Pin(3, Pin.IN)     # 在 GPIO3 上创建输入引脚
print(p3.value())       # 获取值，0 或 1

p4 = Pin(4, Pin.IN, Pin.PULL_UP) # 启用内部上拉电阻
p5 = Pin(5, Pin.OUT, value=1) # 创建时将引脚设置为高
p6 = Pin(6, Pin.OUT, drive=Pin.DRIVE_3) # 设置最大驱动强度
```
可用引脚来自以下范围（包含）：2,3,4,5,6,7,8,9,10,20,21。这些对应于 ESP32C3 芯片的实际 GPIO 引脚号。


### UART（串行总线）
*machine.UART* 类：
```python
from machine import UART

uart1 = UART(1, baudrate=9600, tx=21, rx=20)
uart1.write('hello')  # 写入 5 个字节
uart1.read(5)         # 读取最多 5 个字节
```
ESP32C3 有一个硬件 UART。引脚列表如下：

| UART | 引脚 |
|------|-----|
| TX   | 21  |
| RX   | 20  |

### PWM（脉宽调制）
PWM 可以在所有支持输出的引脚上启用。基频可以从 1Hz 到 40MHz，但存在权衡；随着基频增加，占空比分辨率降低。
*machine.PWM* 类：
```python
from machine import Pin, PWM

pwm2 = PWM(Pin(2), freq=5000, duty_u16=32768) # 从引脚创建 PWM 对象
freq = pwm2.freq()         # 获取当前频率
pwm2.freq(1000)            # 设置 PWM 频率从 1Hz 到 40MHz

duty = pwm2.duty()         # 获取当前占空比，范围 0-1023（默认 512，50%）
pwm2.duty(256)             # 设置占空比从 0 到 1023 作为比率 duty/1023，（现在 25%）

duty_u16 = pwm2.duty_u16() # 获取当前占空比，范围 0-65535
pwm2.duty_u16(2**16*3//4)  # 设置占空比从 0 到 65535 作为比率 duty_u16/65535，（现在 75%）

duty_ns = pwm2.duty_ns()   # 获取当前脉冲宽度（纳秒）
pwm2.duty_ns(250_000)      # 设置脉冲宽度（纳秒）从 0 到 1_000_000_000/freq，（现在 25%）

pwm2.deinit()              # 关闭引脚上的 PWM

pwm3 = PWM(Pin(3), freq=20000, duty=512)  # 一次性创建和配置
print(pwm3)                               # 查看 PWM 设置
```

ESP 芯片有不同的硬件外设：

| 硬件规格                         | ESP32C3 | ESP32 |
|------------------------------------------------|----------|-------|
| 组数（速度模式）                 | 1        | 2     |
| 每组定时器数                      | 4        | 4     |
| 每组通道数                    | 6        | 8     |
| 不同 PWM 频率（组 * 定时器）     | 4        | 8     |
| 总 PWM 通道（引脚，占空比）（组 * 通道） | 6        | 16    |

### ADC(模数转换)
在 XIAO ESP32C3 上，ADC 功能可在引脚 2、3、4 上使用。
:::note
A3(GP105) - 使用 ADC2，可能由于错误的采样信号而无法工作。对于模拟读取，请使用 ADC1(A0/A1/A2)。请参考 XIAO ESP32C3 数据手册。
:::
*machine.ADC* 类：
```python
from machine import ADC

adc = ADC(pin)        # 创建一个作用于引脚的 ADC 对象
val = adc.read_u16()  # 读取 0-65535 范围内的原始模拟值
val = adc.read_uv()   # 读取以微伏为单位的模拟值
```

### SPI

#### 软件 SPI 总线
软件 SPI（使用位操作）适用于所有引脚，通过 *machine.SoftSPI* 类访问：
```python
from machine import Pin, SoftSPI

# 在给定引脚上构建 SoftSPI 总线
# polarity 是 SCK 的空闲状态
# phase=0 表示在 SCK 的第一个边沿采样，phase=1 表示第二个边沿
spi = SoftSPI(baudrate=100000, polarity=1, phase=0, sck=Pin(2), mosi=Pin(4), miso=Pin(6))

spi.init(baudrate=200000) # 设置波特率

spi.read(10)            # 在 MISO 上读取 10 字节
spi.read(10, 0xff)      # 读取 10 字节，同时在 MOSI 上输出 0xff

buf = bytearray(50)     # 创建缓冲区
spi.readinto(buf)       # 读取到给定缓冲区（本例中读取 50 字节）
spi.readinto(buf, 0xff) # 读取到给定缓冲区并在 MOSI 上输出 0xff

spi.write(b'12345')     # 在 MOSI 上写入 5 字节

buf = bytearray(4)      # 创建缓冲区
spi.write_readinto(b'1234', buf) # 写入到 MOSI 并从 MISO 读取到缓冲区
spi.write_readinto(buf, buf) # 将 buf 写入到 MOSI 并将 MISO 读回到 buf
```
#### 硬件 SPI 总线
硬件 SPI 通过 machine.SPI 类访问，具有与上述软件 SPI 相同的方法：
```python
from machine import Pin, SPI

hspi = SPI(1, 10000000)
hspi = SPI(1, 10000000, sck=Pin(8), mosi=Pin(10), miso=Pin(9))
```

| SPI  | Pin |
|------|-----|
| SCK  | D8  |
| MOSI | D10 |
| MISO | D9  |

### I2C

#### 软件 I2C 总线
软件 I2C（使用位操作）适用于所有支持输出的引脚，通过 *machine.SoftI2C* 类访问：
```python
from machine import Pin, SoftI2C

i2c = SoftI2C(scl=Pin(7), sda=Pin(6), freq=100000)

i2c.scan()              # 扫描设备

i2c.readfrom(0x3a, 4)   # 从地址为 0x3a 的设备读取 4 字节
i2c.writeto(0x3a, '12') # 向地址为 0x3a 的设备写入 '12'

buf = bytearray(10)     # 创建 10 字节的缓冲区
i2c.writeto(0x3a, buf)  # 将给定缓冲区写入外设
```

#### 硬件 I2C 总线
驱动程序通过 *machine.I2C* 类访问，具有与上述软件 I2C 相同的方法：
```python
from machine import Pin, I2C
i2c = I2C(0, scl=Pin(7), sda=Pin(6), freq=400000)
```
| I2C  | GPIO | Pin |
|------|------|-----|
| SCL  | GPIO7 | D5  |
| SDA  | GPIO6 | D4  |

### XIAO 扩展板底座
*前提条件*：

<table align="center">
  <tbody><tr>
      <th>XIAO ESP32C3<br /> 已焊接排针</th>
      <th>XIAO 扩展板底座</th>
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

# 在引脚 2 上初始化模拟输入（对应 A0）
analog_in = ADC(Pin(2))
analog_in.atten(ADC.ATTN_11DB)  # 配置输入范围（0-3.6V）

def get_voltage(pin):
    # 将原始 ADC 值转换为电压
    return (pin.read() / 4095) * 3.3

while True:
    # 读取原始模拟值
    raw_value = analog_in.read()
    # 将原始值转换为电压
    voltage = get_voltage(analog_in)
    
    # 将原始值和电压打印到串行控制台
    print("[Light] Raw value: {:5d} Voltage: {:.2f}V".format(raw_value, voltage))
    
    # 在再次读取之前延迟一小段时间
    time.sleep(1)

```
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/14.png" /></div>

#### 点亮 OLED 屏幕
插入您的 XIAO ESP32C3，打开 Thonny 并点击右下角配置解释器
选择解释器 - Micropython (ESP32) 和 **端口 >>> 点击确定**
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_micropython/15.png" /></div>

如果一切顺利，您将在 shell 中看到输出
安装所需的[库](https://wiki.seeedstudio.com/cn/XIAO_ESP32C3_MicroPython/#install-required-libraries)
点击"工具" >>> 点击"管理包" >>> 输入库名称 >>> 点击"搜索 micropython-lib 和 PyPl"
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

* [固件二进制文件](https://micropython.org/download/ESP32_GENERIC_C3/)，适用于搭载 MicroPython 的 XIAO ESP32C3

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