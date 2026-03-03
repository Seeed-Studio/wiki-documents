---
description: ArduPy 的描述
title:  ArduPy 与 Wio Terminal
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ArduPy
last_update:
  date: 8/7/2023
  author: cessarr
---

# ArduPy 入门指南

要开始使用 ArduPy，首先需要安装 **`aip` - ArduPy 集成平台**，这是一个用于开发 ArduPy 并与 ArduPy 开发板交互的实用工具。它使用户能够快速开始使用 ardupy。`aip` 是一个简单的命令行工具。您可以通过它自定义自己的 ardupy 固件，而无需了解更多关于 ArduPy 的详细信息。

## 支持的开发板

- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- [**Seeeduino XIAO**](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

## ArduPy 快速入门

以下方法用于以最简单的方式体验 ArduPy 软件。按照以下步骤立即开始！

- **步骤 1 进入引导加载程序模式**

通过 USB 连接将您的设备连接到 PC。通过快速重置设备进入引导加载程序模式。

  1. 对于 **Wio Terminal**，请参考[这里](https://wiki.seeedstudio.com/cn/Wio-Terminal-Getting-Started/#faq)。
  2. 对于 **Seeeduino XIAO**，请参考[这里](https://wiki.seeedstudio.com/cn/Seeeduino-XIAO/#reset)。

您的 PC 中应该会出现一个名为 **`Arduino`** 的 USB 驱动器。进入 Arduino USB 驱动器位置。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/USBdrive.png"/></div>

- **步骤 2 下载 ArduPy UF2 固件**

以 UF2 文件形式下载 ArduPy 固件。

  1. 对于 [Wio Terminal](https://files.seeedstudio.com/wiki/Wio-Terminal/res/ArduPy_wio_terminal_lastest.uf2)
  2. 对于 [Seeeduino XIAO](https://files.seeedstudio.com/wiki/Wio-Terminal/res/ArduPy_xiao_lastest.uf2)

并将其保存到您的驱动器中。

- **步骤 3 将 ArduPy 固件刷写到设备**

下载适用于您设备的固件后。将 `.UF2` 文件拖到 `ARDUINO` USB 驱动器。现在，您的开发板将从 PC 中消失。重置开发板，它已将 ArduPy 固件加载到其中！

- **步骤 4 让设备闪烁**

现在，您的 PC 中将出现一个名为 **`ARDUPY`** 的 USB 驱动器。打开 `ARDUPY`，您将看到一个 `main.py` python 文件。使用您喜欢的编辑器（如 [Microsoft Visual Studio Code](https://code.visualstudio.com/)、[Atom](https://atom.io/)、[Sublime Text](https://www.sublimetext.com/) 等）打开 `main.py`。复制以下代码并保存 `main.py`。

```py
from machine import Pin, Map
import time

LED = Pin(Map.LED_BUILTIN, Pin.OUT)

while True:
    LED.on()
    time.sleep(1)
    LED.off()
    time.sleep(1)
```

现在您应该看到设备的内置 LED 开始闪烁！查看以下部分了解更多关于 ArduPy 的信息！您将了解 `ArduPy-aip` 工具以及如何使用 `aip` 构建并将您自己的固件刷写到设备！

## 在 macOS 上安装 `aip`

对于 macOS 用户，您可以在终端中简单运行以下命令来安装 ArduPy-aip：

```sh
pip3 install ardupy-aip
```

**注意：** 请确保您已在 macOS 上安装了 **Python 3**。要安装 Python 3，您可以使用 [**Homebrew**](https://brew.sh/)，这是 macOS 的软件包管理器。安装 Homebrew 后，运行以下命令安装 python 3：**`brew install python3`**。您也可以从[官方 Python 网站下载并安装 Python 3](https://www.python.org/downloads/mac-osx/)。

## 在 Windows 上安装 `aip`

您可以在下面的部分下载适用于 Windows 的最新版本 ArduPy。下载后，将二进制文件 `aip` 解压到您的 `PATH` 中的目录。

- [**适用于 Windows 64 位**](https://files.seeedstudio.com/ardupy/tools/aip-0.5.0/aip.exe)

或者如果您有 **Python 3** 环境，您也可以使用 `pip3` 安装：

```sh
pip3 install ardupy-aip
```

## 在 Linux 上安装 `aip`

对于 Linux 用户，您可以在终端中运行以下命令来安装 ArduPy-aip：

```sh
pip3 install ardupy-aip
```

**注意：** 请确保您已安装 **Python 3** 并且 `pip3` 是最新版本。

## ArduPy-aip CLI

`aip` 是 ArduPy 的命令行界面，您可以使用 aip 来安装 ArduPy 库、构建 ArduPy 固件并轻松地将其刷写到硬件中。只需使用 `help` 来获取更多信息：

```sh
aip help
```

<div align="center"><img src="https://s3-us-west-2.amazonaws.com/files.seeedstudio.com/wiki/Wio-Terminal/img/aip-help.png"/></div>

- 获取开发板信息（固件信息）：

```sh
aip board
```

- 安装与 ArduPy 绑定的 Arduino 库：

请在此处查看可用的 [**ArduPy 库**](https://github.com/Seeed-Studio?q=seeed-ardupy&type=&language=)。

```sh
aip install <ArduPy Library Path> 
# 使用示例： 
# aip install Seeed-Studio/seeed-ardupy-ultrasonic-sensor
```

- 卸载 ArduPy 库：

```sh
aip uninstall <ArduPy Library Path> 
# 使用示例： 
# aip uninstall Seeed-Studio/seeed-ardupy-ultrasonic-sensor
```

- 列出已安装的 ArduPy 库

```sh
aip list
```

- 构建包含您安装的库和基本 ArduPy 功能的 ArduPy 固件。请注意，您现在可以选择为 [Seeeduino XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) 或 [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) 构建！

```sh
aip build --board=<board>
# 对于 Seeeduino XIAO：
# aip build --board=xiao
# 对于 Wio Terminal：
# aip build --board=wio_terminal
```


- 将 ArduPy 固件刷写到硬件：

```sh
aip flash
```

!!!Note
        在命令后，您可以使用 `-h` 标志来查看该命令的更多用法。例如，`aip flash -h`。

- 与开发板交互（基于 shell 的文件浏览器）：

```sh
aip shell
```

**注意：** 一旦进入 ardupy-mpfshell，您可以使用 `help` 获取更多信息和命令。

- 进入 **REPL** 模式：

```sh
aip shell -c "repl"
```

<div align="center"><img src="https://s3-us-west-2.amazonaws.com/files.seeedstudio.com/wiki/Wio-Terminal/img/aip-shell.png"/></div>

- 运行 Python 文件：

```sh
aip shell -n -c "runfile <YourPythonFilePath> [Path]"
# 使用示例：
# aip shell -n -c "runfile /Users/ansonhe/Desktop/ur.py"
```

- 使用 shell 将文件加载到开发板：

```sh
aip shell -n -c "put <YourPythonFilePath> [Path]"
# 使用示例：
# aip shell -n -c "put /Users/ansonhe/Desktop/ur.py"
```

### 运行您的第一个脚本

一旦刷写了 ArduPy 固件，您的 PC 中应该会出现一个名为 **`ARDUPY`** 的 USB 驱动器。您可以创建以下 Python 文件来开始使用。

- **`boot.py`**

要从启动时运行 MicroPython 脚本，只需将您的项目命名为 **`boot.py`** 并放在开发板的根目录位置。**此脚本在设备启动时执行。**

- **`main.py`**

这是默认的 python 脚本，但它不会在启动时运行。当 `main.py` 保存更改时，`main.py` 会运行。即它可以自动重新加载。

### 在 ardupy-mpfshell 下的使用

一旦进入 ardupy-mpfshell，使用 `help` 检查命令用法。这里列出了一些有用的命令：

- 列出设备上的文件：

```sh
ls
```

- 删除设备上的文件（或目录）：

```sh
rm <File/Directory>
```

- 将本地文件（例如 `boot.py`）上传到设备：

```sh
put <YourPythonFilePath> [Path]
```

- 执行设备上的文件，例如 `test.py`：

```sh
execfile test.py
```

<div align="center"><img src="https://s3-us-west-2.amazonaws.com/files.seeedstudio.com/wiki/Wio-Terminal/img/aip-mpfshell.png"/></div>

## 使用 aip 包含其他 ArduPy 库的示例

`aip` 是 ArduPy 的关键特性之一，可用于将 Arduino 库转换为 Python 接口以供 ArduPy 使用。这里我们提供一个示例，展示如何使用 Wio Terminal 将 ArduPy 库包含到 ArduPy 固件中：

1.打开终端/Powershell，运行以下命令安装 ardupy 库。

```sh
aip install Seeed-Studio/seeed-ardupy-ultrasonic-sensor
```

2.构建固件：

```sh
aip build --board=wio_terminal
```

**注意：** 烧录固件的用法将出现在构建的底部。

3.通过**复制构建结束时的用法**将"**新**"固件烧录到开发板中。这里 aip 将自动查找连接到 PC 的开发板并上传固件。如果开发板未连接，将出现错误。

```sh
aip flash
```

<div align="center"><img src="https://s3-us-west-2.amazonaws.com/files.seeedstudio.com/wiki/Wio-Terminal/img/aip-install-new.gif"/></div>

#### 库示例用法

一旦库被包含在 ArduPy 固件中并烧录到设备中，您可以按如下方式导入和使用模块：

```sh
aip shell -n -c "put /Users/ansonhe/Desktop/ur.py"
```

>将 `/Users/ansonhe/Desktop` 替换为您的路径。

其中 `ur.py` 是：

```py
from arduino import grove_ultra_ranger
import time

ur = grove_ultra_ranger(0)

while True:
    print ("The distance to obstacles in front is:", ur.cm, 'centimeter')
    time.sleep(1)
```

更多参考，请查看 [seeed-ardupy-ultrasonic-sensor](https://github.com/Seeed-Studio/seeed-ardupy-ultrasonic-sensor)。

### 常见问题

更多 aip 参考，请访问 [ardupy-aip](https://github.com/Seeed-Studio/ardupy-aip) 了解更多。

---

## 时间和延时

- 导入时间模块和延时：

```py
import time

time.sleep(1)           # 延时 1 秒
time.sleep_ms(500)      # 延时 500 毫秒
time.sleep_us(500)      # 延时 500 微秒
```

- 使用时间计数器：

```py
import time

time.ticks_ms()          # 毫秒计数器
start = time.ticks_us()  # 微秒计数器
time.ticks_diff(time.tick_us(), start) # 测量计数器之间的差值
```

**注意：** 您可以使用 **`TAB`** 键进行自动建议并查看所有可用的函数。例如，在输入 `time.` 后，按 **`TAB`** 键查看时间模块中的所有函数。

更多参考，请访问 [MicroPython 时间相关函数](https://docs.micropython.org/en/latest/library/utime.html)。

## 引脚和 GPIO

### Seeeduino XIAO 引脚图

![](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-pinout.jpg)

### Wio Terminal 引脚图

![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/WioT-Pinout.jpg)

要在 ArduPy 中引用 GPIO，只需使用您正在使用的设备的物理引脚映射。例如，对于 Wio Terminal，引脚 1 是 3.3V，引脚 2 是 5V。

- 导入 Pin 并配置 GPIO：

```py
from machine import Pin
p3 = Pin(3, Pin.OUT)    # 将引脚 3 设置为输出引脚
p3.on()                 # 将引脚 3 设置为高电平
p3.off()                # 将引脚 3 设置为低电平

p3.value(1)             # 使用 value 方法将引脚 3 设置为高电平


p5 = Pin(5, Pin.IN)     # 将引脚 5 设置为输入引脚
p5.value()              # 打印输入引脚的值

p3 = Pin(3, Pin.OUT, value=1) # 在一行中将引脚 3 设置为输出引脚并设为高电平
p5 = Pin(5, Pin.IN, Pin.PULL_UP) # 将引脚 5 设置为带上拉电阻的输入
```

## 映射

为了更容易访问开发板外设，ArduPy 映射了与 Arduino 相同的调用方法：

```py
from machine import Pin, Map
import time

LED = Pin(Map.LED_BUILTIN, Pin.OUT) # 将内置LED设置为输出

while True:
    LED.on()
    time.sleep(1)
    LED.on()
    time.sleep(1)
```

## PWM（脉宽调制）

要使用 PWM，您必须使用设备上的 PWM 通道。请参考设备引脚图，查看 PWM 通道的位置。

- 使用 PWM：

```py
from machine import Pin, PWM

pwm0 = PWM(Pin(13))     # 在引脚13上创建PWM通道
pwm0.freq()             # 当前频率
pwm0.freq(1000)         # 将频率设置为1000Hz
pwm0.duty()             # 当前占空比
pwm0.duty(200)          # 将占空比设置为200
pwm0.deinit()           # 关闭引脚上的PWM

pwm1 = PWM(Pin(16), freq=1000, duty=200) # 一行代码设置PWM
```

## ADC

要在设备上使用 ADC，您必须使用模拟引脚。例如，Wio Terminal 上的引脚 13(A0)。

**注意：Wio Terminal 上的 ADC 通道是 10 位(0-1023)。**

- 使用 ADC

```py
from machine import ADC, Pin

adc = ADC(Pin(13))      # 在引脚13上创建ADC
adc.read()              # 读取ADC值，0 ~ 1023
```

## DAC

要在设备上使用 DAC，您必须使用开发板上的 DAC 引脚或 PWM 引脚。例如，Wio Terminal 上的引脚 11(DAC0)。

**注意：Wio Terminal 上的 DAC 通道是 12 位(0-4095)。**

- 使用 DAC：

```py
from machine import DAC, Pin

dac0 = DAC(Pin(11))      # 在引脚11上创建DAC
dac0.write(512)          # 向DAC写入值，512/4096*3.3 = 0.4125 V

dac1 = DAC(Pin(26), resolution=10)  # 在引脚26上创建DAC并使用10位分辨率
dac1.write(1023)                    # 向DAC写入最大输出值，3.3V
```

**注意：** 在 PWM 引脚上使用 DAC 时，通道的分辨率将只有 8 位。

```py
# 在PWM引脚上使用DAC
from machine import DAC, Pin

dac2 = DAC(Pin(16))     # 在引脚16上创建DAC
dac2.write(128)         # 向DAC写入值，128/255*3.3 = 1.65V
```

## LCD

对于 Wio Terminal，TFT LCD 显示屏可以按如下方式使用。更多 LCD 参考，请访问 [**ArduPy LCD API 参考**](https://wiki.seeedstudio.com/cn/ArduPy-LCD/)。


- 使用 LCD 模块：

```py
from machine import LCD

lcd = LCD()                            # 初始化LCD并打开背光
lcd.fillScreen(lcd.color.BLACK)        # 用黑色填充LCD屏幕
lcd.setTextSize(2)                     # 将字体大小设置为2
lcd.setTextColor(lcd.color.GREEN)      # 将文本颜色设置为绿色
lcd.drawString("Hello World!", 0, 0)   # 在(0, 0)位置打印Hello World
```

注意：使用 **`tab`** 键查看可用函数。

---

## IDE 入门

如前所述，您可以使用您喜欢的编辑器来编写 Python 程序。为了轻松运行和测试程序，您可以简单地编辑 `ARDUPY` USB 位置中的 `main.py` 文件（自动重新加载功能）。这里将使用 **Wio Terminal** 演示另一个快速示例：

>确保您在下一节之前已经遵循了上述步骤。

1.在 `ARDUPY` USB 位置打开 `main.py`。

2.将以下代码复制到 `main.py` 并保存文件。

```py
from machine import LCD
import time, math

DEG2RAD = 0.0174532925
lcd = LCD()
lcd.fillScreen(lcd.color.BLACK)

# 绘制圆形扇形
# x,y == 圆心坐标
# start_angle = 0 - 359
# sub_angle   = 0 - 360 = 圆心角
# r = 半径
# colour = 16位颜色值

def fillSegment(x, y, startAngle, subAngle, r, color):
    # 计算扇形起始的第一对坐标
    sx = math.cos((startAngle - 90) * DEG2RAD)
    sy = math.sin((startAngle - 90) * DEG2RAD)
    x1 = sx * r + x
    y1 = sy * r + y

    # 每inc度绘制颜色块
    for i in range(startAngle, startAngle+subAngle, 1):
        # 计算扇形结束的坐标对
        x2 = math.cos((i + 1 - 90) * DEG2RAD) * r + x
        y2 = math.sin((i + 1 - 90) * DEG2RAD) * r + y

        lcd.fillTriangle(int(x1), int(y1), int(x2), int(y2), x, y, color)

        # 将扇形结束点复制为下一个扇形的起始点
        x1 = x2
        y1 = y2

def main():
    # 绘制4个饼图扇形
    fillSegment(160, 120, 0, 60, 100, lcd.color.RED)
    fillSegment(160, 120, 60, 30, 100, lcd.color.GREEN)
    fillSegment(160, 120, 60 + 30, 120, 100, lcd.color.BLUE)
    fillSegment(160, 120, 60 + 30 + 120, 150, 100, lcd.color.YELLOW)
    time.sleep(1)
    fillSegment(160, 120, 0, 360, 100, lcd.color.BLACK)

if __name__ == "__main__":
    while True:
        main()
```

3.您应该看到 Wio Terminal 立即开始在屏幕上绘制饼图！

自动重新加载在测试小程序时非常有用。

## 技术支持

请将任何技术问题提交到我们的[论坛](https://forum.seeedstudio.com/)<br /><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a>