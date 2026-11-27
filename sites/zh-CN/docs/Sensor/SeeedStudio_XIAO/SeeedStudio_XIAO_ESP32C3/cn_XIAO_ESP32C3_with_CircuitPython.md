---
description: 使用 CircuitPython 的 Seeed Studio XIAO ESP32C3
title: 使用 CircuitPython 的 XIAO ESP32C3
keywords:
  - xiao
  - esp32c3
  - circuitpython
image: https://files.seeedstudio.com/wiki/esp32c3_circuitpython/title.png
slug: /xiao_esp32c3_with_circuitpython
last_update:
  date: 08/14/2024
  author: Evelyn Chen
createdAt: '2024-08-14'
updatedAt: '2025-09-15'
url: https://wiki.seeedstudio.com/cn/xiao_esp32c3_with_circuitpython/
---

# **Seeed Studio XIAO ESP32C3 与 CircuitPython**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/title.png" /></div>

本教程介绍如何在 Seeed Studio XIAO ESP32C3 开发板上安装并运行 Adafruit Industries 官方的 CircuitPython！
CircuitPython 是一种编程语言，旨在简化在低成本微控制器开发板上进行实验和学习编程的过程。它让入门变得前所未有的简单，无需预先在桌面端下载任何软件。完成开发板的设置后，只需打开任意文本编辑器，就可以开始编辑代码。更多信息请参考[这里](https://learn.adafruit.com/welcome-to-circuitpython/what-is-circuitpython)。

## 安装 CircuitPython

### 方法一：命令行 esptool

#### 安装 Esptool

如果你尚未安装 esptool.py，可以在电脑上通过 pip 进行安装：

``` linux
pip install esptool
```

#### 下载 XIAO ESP32C3 CircuitPython 固件

你需要从 [circirtpython.org](https://circuitpython.org/board/seeed_xiao_esp32c3/) 下载固件二进制文件
下载正确的 bin 文件后，进入该文件所在的文件夹，并在此处打开一个 cmd 终端。
在最终定稿时，最新版本的 bin 文件为：

```
adafruit-circuitpython-seeed_xiao_esp32c3-en_GB-9.1.1.bin
```

#### 将 XIAO ESP32C3 连接到电脑

你需要在将 XIAO ESP32C3 板通过 Type-C USB 线插入电脑时，按住并保持 BOOT 按钮，以进入“bootloader”模式。

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

- Windows

在 Windows 上，你可以通过设备管理器检查串口。在“端口 (COM 和 LPT)”部分查看可用的串口。你也可以在命令提示符中使用 mode 命令列出串口：

```
mode
```

- macOS

在 macOS 上，你可以使用 *ls* 命令列出可用的串口：

```
ls /dev/cu*
```

这将显示所有串口设备。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/1.png" /></div>

:::tip
如果端口正被占用，你可以使用以下命令查找并杀死占用该端口的进程（在 macOS 上）：
识别正在使用该端口的进程：

```
lsof | grep port
```

该命令会列出打开的文件，并搜索任何使用指定端口的进程。
从输出中找到进程 ID（PID），并结束该进程：

```
kill -9 <PID>
```

将 *PID* 替换为实际找到的进程 ID。
:::

#### 擦除 Flash

```linux
esptool.py --chip esp32c3 --port /dev/cu.usbmodem11301 erase_flash
```

将 '/dev/cu.usbmodem11301' 替换为你系统中的正确端口名（例如 Windows 上的 `COM3`，Linux 上的 `/dev/ttyUSB0`）。

#### 写入 Flash

将固件烧录到 XIAO ESP32C3 上：

```linux
esptool.py --chip esp32c3 --port /dev/cu.usbmodem11301 --baud 460800 write_flash -z 0x0 adafruit-circuitpython-seeed_xiao_esp32c3-en_GB-9.1.1.bin
```

同样，将 '/dev/cu.usbmodem11301' 替换为正确的端口名，并将 'adafruit-circuitpython-seeed_xiao_esp32c3-en_GB-9.1.1.bin' 替换为你的固件文件路径。
通过 RTS 引脚进行硬复位...

### 方法二：Web Serial esptool

WebSerial ESPTool 被设计为一种可通过网页使用的选项，用于给带有基于串口 ROM 引导加载程序的 Espressif ESP 系列微控制器开发板烧录程序。它允许你擦除微控制器的内容，并在不同偏移地址处烧录最多 4 个文件。请参考 [Web Serial ESPtool](https://learn.adafruit.com/circuitpython-with-esp32-quick-start/web-serial-esptool)。

然后你就可以开始使用你喜欢的工具为 XIAO ESP32C3 编写并编译脚本了！

## CircuitPython 推荐编辑器

通常，当 CircuitPython 安装完成，或者你将已安装 CircuitPython 的开发板插入电脑时，该开发板会在电脑上显示为名为 CIRCUITPY 的 USB 驱动器。
然而，不支持原生 USB 的 ESP32 或 ESP32-C3 微控制器无法呈现 CIRCUITPY 驱动器。
在这些开发板上，有其他方式可以传输和编辑文件。你可以使用 [Thonny](https://thonny.org/)，它通过向 REPL 发送隐藏命令来读写文件。或者你可以使用在 Circuitpython 8 中引入的 [CircuitPython web workflow](https://code.circuitpython.org/)。Web workflow 提供了基于浏览器的 WiFi 访问 CircuitPython 文件系统的方式，请参考[使用代码编辑器开始 Web workflow](https://learn.adafruit.com/getting-started-with-web-workflow-using-the-code-editor/overview.)

### 1. Thonny

安装并打开 Thonny，然后按照说明配置 Thonny：

```
pip install thonny
#open thonny after installation
thonny
```

进入 Run-->Configure Interpreter，并确保 Thonny 选项中的 Interpreter 选项卡如下图所示，选择“CircuitPython (generic)”以及端口：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/2.png" /></div>

在对话框中点击“OK”，你应该会在 Thonny 窗口底部看到 Micropython shell，如下图所示。
然后你就可以使用 **R**ead-**E**valuate-**P**rint-**L**oop（读取-求值-打印-循环），即 REPL 进行串口连接，它允许你输入单独的代码行并立即在 shell 中运行。若你在某个程序上遇到问题且无法找出原因，它会非常有用。它是交互式的，因此非常适合测试新想法。更多信息请参考 [REPL](https://learn.adafruit.com/welcome-to-circuitpython/the-repl)。

使用 *help()* 与 REPL 交互，它会告诉你从哪里开始探索 REPL。要在 REPL 中运行代码，只需在 REPL 提示符后输入代码。
要列出内置模块，请输入 *help("modules")*，会显示所有内置在 CircuitPython 中的核心模块列表，包括“*board*”。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/3.png" /></div>

然后可以在 REPL 中输入 *"import board"* 并按回车。接着，在 REPL 中输入 *"dir(board)"*，即可获得开发板上所有引脚的列表。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/4.png" /></div>

### 2. CircuitPython Web Workflow

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/5.png" /></div>

[The CircuitPython Code Editor](https://code.circuitpython.org/) 在编辑运行最新 CircuitPython 版本的 ESP32 系列设备上的文件时，提供了更完整、更丰富的体验。
该编辑器允许你通过 Web Bluetooth、USB 和基于 WiFi 的 Web Workflow 来编辑文件。

## 引脚/端口信息

<div className="interactive_pinout_container">
  <a className="interactive_pinout_btn" href="https://www.seeedstudio.com/xiao-series-page/playground/pinout/?board=c3" target="_blank" rel="noopener noreferrer">探索交互式引脚图</a>
</div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/6.png" /></div>

- 更多信息请参考[硬件概述](https://wiki.seeedstudio.com/cn/XIAO_ESP32C3_Getting_Started/#硬件概述)
- [Seeed Studio XIAO ESP32C3 原理图](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/Seeeduino-XIAO-ESP32C3-SCH.pdf)

## 在 XIAO ESP32C3 上开始使用 CircuitPython

### 网络-WLAN

对于没有原生 USB 的开发板（如 ESP32-C3 或 ESP32），你需要使用 REPL 来连接 Wi-Fi。当在 CircuitPython 文件系统的根目录下添加名为 *settings.toml* 的文件时，Wi-Fi 功能会被启用。
通过 REPL 创建 *settings.toml* 文件：

```r
f = open('settings.toml', 'w')
f.write('CIRCUITPY_WIFI_SSID = "wifissid"\n')
f.write('CIRCUITPY_WIFI_PASSWORD = "wifipassword"\n')
f.write('CIRCUITPY_WEB_API_PASSWORD = "webpassword"\n')
f.close()
```

- 将 *wifissid* 替换为你本地 WiFi 网络的名称
- 将 *password* 替换为你本地 WiFi 的密码
- 另一个密码用于通过网页浏览器访问开发板。将 *webpassword* 设置为你想要的任意值

连接成功后，你可以按下 **Reset** 按钮以重启固件，然后多次回车进入 REPL 提示符。接着重新在 Thonny 中连接设备，此时会显示你的 XIAO ESP32C3 的 IP 地址。

:::note
别忘了，ESP32 不支持 5 GHz 网络，因此如果你有两个网络，请使用 2.4 GHz 的 SSID。
:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/7.png" /></div>

### 延时与计时

*time* 模块：

```python
import time
time.sleep(1)           # sleep for 1 second
time.sleep_ms(500)      # sleep for 500 milliseconds
time.sleep_us(10)       # sleep for 10 microseconds
start = time.ticks_ms() # get millisecond counter
delta = time.ticks_diff(time.ticks_ms(), start) # compute time difference
```

### 引脚和 GPIO

可以使用“*board*”和“*microcontroller*”模块来控制 GPIO，并使用以下代码将一个 LED 连接到 D5：
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/14.png" /></div>

```python
# using board module
import board
import digitalio
import time

led = digitalio.DigitalInOut(board.D5)
led.direction = digitalio.Direction.OUTPUT

while True:
    led.value = True  # turn on LED
    time.sleep(1)
    led.value = False  # turn off LED
    time.sleep(1)

# using microcontroller module
import microcontroller
import digitalio
import time

led = digitalio.DigitalInOut(microcontroller.pin.GPIO7)
led.direction = digitalio.Direction.OUTPUT

while True:
    led.value = True  # turn on LED
    time.sleep(1)
    led.value = False  # turn off LED
    time.sleep(1)
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/8.png" /></div>

### UART（串行总线）

使用 *busio* 模块：

```python
import board
import busio

# initialise UART
uart = busio.UART(board.TX, board.RX, baudrate=9600)

# send data
uart.write(b"Hello UART\n")

# receive data
while True:
    if uart.in_waiting > 0:
        data = uart.read()
        print("Received:", data)

```

XIAO ESP32C3 有一个硬件 UART。引脚如下所示：

| UART | 引脚 |
|------|-----|
| TX   | D6  |
| RX   | D7  |

### PWM（脉宽调制）

使用 *pwmio* 模块：

```python
import board
import pwmio
from digitalio import DigitalInOut
import time

# initialise PWM
pwm = pwmio.PWMOut(board.D5, frequency=5000, duty_cycle=0)

# a dimming led
while True:
    for duty_cycle in range(0, 65535, 1000):
        pwm.duty_cycle = duty_cycle
        time.sleep(0.1)

```

### ADC（模数转换）

使用 *analogio* 模块：

```python
import board
import analogio
import time

# initialise ADC
adc = analogio.AnalogIn(board.A0)

while True:
    value = adc.value
    print("ADC Value:", value)
    time.sleep(1)

```

### SPI

```python
import board
import busio
import digitalio

# initialize SPI
spi = busio.SPI(board.SCK, board.MOSI, board.MISO)

# choose a chip
cs = digitalio.DigitalInOut(board.D5)
cs.direction = digitalio.Direction.OUTPUT
cs.value = True 

# send and receive data
data_out = bytearray([0x01, 0x02, 0x03])
data_in = bytearray(3)
spi.write_readinto(data_out, data_in)
print("Received:", data_in)
```

| SPI  | 引脚 |
|------|-----|
| SCK  | D8  |
| MOSI | D10 |
| MISO | D9  |

### I2C

```python
import board
import busio

# Initialize I2C
i2c = busio.I2C(board.SCL, board.SDA, frequency=400000)
```

### XIAO 扩展板底板

*前置条件*：

<table align="center">
  <tbody><tr>
      <th>已焊接排针的 XIAO ESP32C3<br /> </th>
      <th>XIAO 扩展板底板</th>
      <th>Grove 光线传感器</th>
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

#### 读取光线传感器数据

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/9.png" /></div>

```python
import time
import board
import analogio

# Initialize the analog input on A0
analog_in = analogio.AnalogIn(board.A0)

def get_voltage(pin):
    return (pin.value * 3.3) / 65536

while True:
    # Read the raw analog value
    raw_value = analog_in.value
    # Convert the raw value to voltage
    voltage = get_voltage(analog_in)

    # Print the raw value and voltage to the serial console
    print("[Light] Raw value: {:5d} Voltage: {:.2f}V".format(raw_value, voltage))

    # Delay for a short period of time before reading again
    time.sleep(1)
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/10.png" /></div>

#### 点亮 OLED 屏幕

**下载并解压库包**：

- 前往 [library](https://circuitpython.org/libraries) 并下载适用于 CircuitPython 的库包。要进行安装，请下载与你的 CircuitPython 版本相匹配的库包。

**将库复制到 CIRCUITPY**：

- 解压库包 ZIP 文件。你会发现一个名为 lib 的文件夹，其中包含多个 *.mpy* 文件。
- 打开 Thonny-->View-->Files，然后将所需的 .mpy 文件和 lib 文件夹复制到 CircuitPython 设备的 lib 目录中。
你需要从库包中手动安装以下必要库：
  - adafruit_ssd1306
  - adafruit_bus_device
  - adafruit_register
  - adafruit_framebuf.mpy

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/11.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/12.png" /></div>

**创建你的 CircuitPython 代码**：

- 创建一个 code.py 文件（或 main.py）。该文件应包含你的 CircuitPython 代码。

```python
import board
import busio
import displayio
import adafruit_ssd1306
import terminalio

# Initialize I2C
i2c = busio.I2C(board.SCL, board.SDA)

# Define the display parameters
oled_width = 128
oled_height = 64

# Initialize the OLED display
oled = adafruit_ssd1306.SSD1306_I2C(oled_width, oled_height, i2c)

# Fill the display with the color 0
oled.fill(0)
# Set the first pixel white
oled.pixel(0, 0, 1)
oled.show()
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/13.png" /></div>

## “卸载” CircuitPython

我们的许多开发板都可以使用多种编程语言。例如，Circuit Playground Express 可以搭配 MakeCode、Code.org CS Discoveries、CircuitPython 和 Arduino 使用。你可能想要切换回 Arduino 或 MakeCode。实际上并没有什么需要卸载的。CircuitPython 只是“另一个程序”，被烧录到你的开发板中。因此，你只需烧录另一个程序（Arduino 或 MakeCode），它就会覆盖掉 CircuitPython。

### 备份你的代码

在替换 CircuitPython 之前，别忘了备份 CIRCUITPY 盘上的代码。这包括你的 *code.py* 以及其他任何文件、lib 文件夹等。当你移除 CircuitPython 时，这些文件可能会丢失，因此备份非常关键！只需像使用任何 USB 驱动器那样，将这些文件拖拽到你的笔记本或台式电脑上的某个文件夹即可。

### 切换到 Arduino

如果你想改用 Arduino，只需使用 Arduino IDE 烧录一个 Arduino 程序即可。下面是上传一个简单 “Blink” Arduino 程序的示例，但你不一定要使用这个特定的程序。
首先插入你的开发板，然后双击复位按钮，直到板载 LED 亮起。

感谢你阅读这篇文章！欢迎在评论区分享你的想法。

## 资源

- 适用于搭载 CircuitPython 的 XIAO ESP32C3 的[固件二进制文件](https://circuitpython.org/board/seeed_xiao_esp32c3/)
- [CircuitPython 的库包](https://circuitpython.org/libraries)

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
