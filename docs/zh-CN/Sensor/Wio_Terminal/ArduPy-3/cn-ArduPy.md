---
description: ArduPy简介
title:  ArduPy与Wio Terminal
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ArduPy
last_update:
  date: 3/04/2024
  author: 金菊
---

# ArduPy 入门指南

要开始使用ArduPy，首先需要安装 **`aip` - ArduPy Integrated Platform** ，这是一个用于开发ArduPy并与ArduPy板进行交互的工具。它使用户能够快速开始使用ArduPy。 `aip` aip是一个简单的命令行工具。您可以通过它自定义自己的ArduPy固件，而无需了解更多关于ArduPy的细节。

## 支持的开发板

- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- [**Seeeduino XIAO**](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

## ArduPy快速入门

以下方法是以最简单的方式体验ArduPy软件的方法。按照以下步骤开始！

- **步骤.1 进入引导模式**

通过USB连接将您的设备连接到电脑上。通过快速复位设备进入引导模式。

  1. 关于 **Wio Terminal**, 请参考 [此处](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/#faq).
  2. 关于 **Seeeduino XIAO**, 请参考 [此处](https://wiki.seeedstudio.com/Seeeduino-XIAO/#reset).

您的电脑上应该会出现一个名为 **`Arduino`** 的USB驱动器。进入Arduino USB驱动器的位置。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/USBdrive.png"/></div>

- **步骤.2 下载ArduPy UF2固件**

以UF2文件的形式下载ArduPy固件。

  1. 关于 [Wio Terminal](https://files.seeedstudio.com/wiki/Wio-Terminal/res/ArduPy_wio_terminal_lastest.uf2)
  2. 关于 [Seeeduino XIAO](https://files.seeedstudio.com/wiki/Wio-Terminal/res/ArduPy_xiao_lastest.uf2)

并将其保存在您的驱动器中。

- **步骤.3 刷写ArduPy固件到设备**

一旦下载了适用于您的设备的固件，请将 `.UF2` 文件拖动到 `ARDUINO` USB驱动器中。现在，您的板子将从电脑上消失。重置板子，它将加载ArduPy固件！

- **步骤.4 闪烁设备**

现在，您的电脑上会出现一个名为 **`ARDUPY`** 的USB驱动器。打开 `ARDUPY` ，您将看到一个名为 `main.py` 的Python文件。  使用您喜欢的编辑器（如 [Microsoft Visual Studio Code](https://code.visualstudio.com/), [Atom](https://atom.io/), [Sublime Text](https://www.sublimetext.com/) 等）打开`main.py`。复制以下代码并保存 `main.py`。

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

现在，您应该会看到您设备上的内置LED开始闪烁！请查看下面的章节，了解更多关于ArduPy的信息！您将学习如何使用 `ArduPy-aip` 工具以及如何使用 `aip` 构建和刷写自己的固件到设备！

## 在macOS上安装 `aip` 

对于macOS用户，您可以在终端中运行以下命令来安装ArduPy-aip：

```sh
pip3 install ardupy-aip
```

**注:** 请确保您已在macOS上安装了 **Python 3** 。要安装Python 3，您可以使用 [**Homebrew**](https://brew.sh/) ，它是macOS的软件包管理器。安装了Homebrew之后，运行以下命令安装Python 3： **`brew install python3`**。您还可以 [从官方Python网站](https://www.python.org/downloads/mac-osx/)下载并安装[Python 3](https://www.python.org/downloads/mac-osx/)。


## 在Windows上安装 `aip`

您可以在下面的部分下载Windows的最新版本ArduPy。下载完成后，将二进制文件 `aip` 解压到 `PATH`中的某个目录中

- [**For Windows 64 Bit**](https://files.seeedstudio.com/ardupy/tools/aip-0.5.0/aip.exe)

或者，如果您已经具备 **Python 3** 环境，也可以使用 `pip3`进行安装:

```sh
pip3 install ardupy-aip
```

## 在Linux上安装 `aip` 

对于Linux用户，您可以在终端中运行以下命令来安装ArduPy-aip：

```sh
pip3 install ardupy-aip
```

**注:** 请确保您已经安装了 **Python 3** 并且 `pip3` 已经更新至最新版本。

## ArduPy-aip 命令行界面

`aip` 是ArduPy的命令行界面，您可以使用aip轻松安装ArduPy库、构建和刷写ArduPy固件到硬件上。只需使用 `help` 命令获取更多信息：

```sh
aip help
```

<div align="center"><img src="https://s3-us-west-2.amazonaws.com/files.seeedstudio.com/wiki/Wio-Terminal/img/aip-help.png"/></div>

- 获取开发板信息（固件信息）:

```sh
aip board
```

- 安装与ArduPy绑定的Arduino库:

请查看这里获取可用的 [**ArduPy 库**](https://github.com/Seeed-Studio?q=seeed-ardupy&type=&language=).

```sh
aip install <ArduPy Library Path> 
# Example Usage: 
# aip install Seeed-Studio/seeed-ardupy-ultrasonic-sensor
```

- 卸载ArduPy库:

```sh
aip uninstall <ArduPy Library Path> 
# Example Usage: 
# aip uninstall Seeed-Studio/seeed-ardupy-ultrasonic-sensor
```

- 列出已安装的ArduPy库:

```sh
aip list
```

- 构建包含您安装的库和基本ArduPy功能的ArduPy固件。请注意，您现在可以选择为 [Seeeduino XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) 或 [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) 构建!

```sh
aip build --board=<board>
# For Seeeduino XIAO:
# aip build --board=xiao
# For Wio Terminal:
# aip build --board=wio_terminal
```


- 刷写ArduPy固件到硬件上:

```sh
aip flash
```

!!!注
        在命令之后，您可以使用 `-h` 标志查看该命令的更多用法。例如， `aip flash -h`。

- 与开发板进行交互（基于shell的文件浏览器）:

```sh
aip shell
```

**注:** 一旦进入ardupy-mpfshell，您可以使用 `help` 获取更多信息和命令。

- 进入 **REPL** 模式:

```sh
aip shell -c "repl"
```

<div align="center"><img src="https://s3-us-west-2.amazonaws.com/files.seeedstudio.com/wiki/Wio-Terminal/img/aip-shell.png"/></div>

- 运行Python文件:

```sh
aip shell -n -c "runfile <YourPythonFilePath> [Path]"
# Example Usage:
# aip shell -n -c "runfile /Users/ansonhe/Desktop/ur.py"
```

- 使用shell将文件加载到开发板中:

```sh
aip shell -n -c "put <YourPythonFilePath> [Path]"
# Example Usage:
# aip shell -n -c "put /Users/ansonhe/Desktop/ur.py"
```

### 运行您的第一个脚本t

一旦刷写了ArduPy固件，您的电脑上应该会出现一个名为 **`ARDUPY`** 的USB驱动器。您可以创建以下Python文件以开始使用。

- **`boot.py`**

要在启动时运行MicroPython脚本，只需将您的项目命名为根位置的 **`boot.py`** 。 **该脚本在设备启动时执行**。

- **`main.py`**

这是默认的Python脚本，但它不会在启动时运行。当 `main.py` 被更改并保存后， `main.py` 将运行。即它可以自动重新加载。

### 在 ardupy-mpfshell中使用

一旦进入ardupy-mpfshell，使用 `help` 来检查命令的使用方法。这里列出了一些有用的命令：

- 列出设备上的文件:

```sh
ls
```

- 删除设备上的文件（或目录）:

```sh
rm <File/Directory>
```

- 上传例如本地文件 `boot.py` 到设备:

```sh
put <YourPythonFilePath> [Path]
```

- 在设备上执行文件，例如 `test.py` on the device:

```sh
execfile test.py
```

<div align="center"><img src="https://s3-us-west-2.amazonaws.com/files.seeedstudio.com/wiki/Wio-Terminal/img/aip-mpfshell.png"/></div>

## 使用aip示例包含其他ArduPy库

`aip` 是ArduPy的一个关键特性，它可以将Arduino库转换为Python接口，用于ArduPy。这里提供一个示例，演示如何使用Wio Terminal将ArduPy库包含到ArduPy固件中：

1.打开终端/PowerShell，运行以下命令安装ardupy库。

```sh
aip install Seeed-Studio/seeed-ardupy-ultrasonic-sensor
```

2.构建固件:

```sh
aip build --board=wio_terminal
```

**注:** 刷写固件的使用方法将显示在构建的底部。

3.将 "**NEW**" 固件刷写到开发板上 **通过复制构建结束时的用法**。aip将自动查找连接到计算机的开发板并上传固件。如果开发板未连接，将出现错误提示。

```sh
aip flash
```

<div align="center"><img src="https://s3-us-west-2.amazonaws.com/files.seeedstudio.com/wiki/Wio-Terminal/img/aip-install-new.gif"/></div>

#### 库示例用法

一旦将库包含在ArduPy固件中并刷写到设备上，您可以按以下方式导入和使用模块:

```sh
aip shell -n -c "put /Users/ansonhe/Desktop/ur.py"
```

>将 `/Users/ansonhe/Desktop` 替换为您的路径。

 即`ur.py` 所在之处:

```py
from arduino import grove_ultra_ranger
import time

ur = grove_ultra_ranger(0)

while True:
    print ("The distance to obstacles in front is:", ur.cm, 'centimeter')
    time.sleep(1)
```

有关更多参考，请查看 [seeed-ardupy-ultrasonic-sensor](https://github.com/Seeed-Studio/seeed-ardupy-ultrasonic-sensor).

### 常见问题

有关更多aip参考，请访问 [ardupy-aip](https://github.com/Seeed-Studio/ardupy-aip) 以了解更多信息。

---

## 时间和延迟

- 导入时间模块和延迟:

```py
import time

time.sleep(1)           # Delay for 1 second
time.sleep_ms(500)      # Delay for 500 milliseconds
time.sleep_us(500)      # Delay for 500 microseconds
```

- 使用时间计数器:

```py
import time

time.ticks_ms()          # milliseconds counter
start = time.ticks_us()  # microseconds counter
time.ticks_diff(time.tick_us(), start) # Measure the difference between counters
```

**注:** 您可以使用 **`TAB`** 键进行自动建议和查看所有可用的函数。例如，在输入 `time.`后，按下 **`TAB`** 键以查看time中的所有函数。

有关更多参考，请访问 [MicroPython time related functions](https://docs.micropython.org/en/latest/library/utime.html).

## 引脚和GPIO

###  Seeeduino XIAO引脚图

![](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-pinout.jpg)

###  Wio Terminal引脚图

![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/WioT-Pinout.jpg)

要在ArduPy中引用GPIO，只需使用您使用的设备的物理引脚映射。例如，对于Wio Terminal，引脚1是3.3V，引脚2是5V。

- 导入引脚并配置GPIO:

```py
from machine import Pin
p3 = Pin(3, Pin.OUT)    # Setting Pin 3 as a output pin
p3.on()                 # Setting Pin 3 to HIGH
p3.off()                # Setting Pin 3 to LOW

p3.value(1)             # Setting Pin 3 to HIGH using value method


p5 = Pin(5, Pin.IN)     # Setting Pin 5 as input pin
p5.value()              # Prints the value of the input pin

p3 = Pin(3, Pin.OUT, value=1) # Setting Pin 3 as output pin and HIGH in one line
p5 = Pin(5, Pin.IN, Pin.PULL_UP) # Setting Pin 5 as input with pull-up resistors
```

## Map

为了更方便地访问开发板的外设，ArduPy使用了与Arduino相同的调用方法:

```py
from machine import Pin, Map
import time

LED = Pin(Map.LED_BUILTIN, Pin.OUT) # Setting builtin LED as output

while True:
    LED.on()
    time.sleep(1)
    LED.on()
    time.sleep(1)
```

## PWM (脉宽调制)

要使用PWM，您必须使用设备上的PWM通道。请参考设备引脚映射，指示PWM通道的位置。

- 使用 PWM:

```py
from machine import Pin, PWM

pwm0 = PWM(Pin(13))     # Creating PWM Channel on Pin 13
pwm0.freq()             # Current frequency
pwm0.freq(1000)         # Sets the frequency to 1000Hz
pwm0.duty()             # Current duty cycle
pwm0.duty(200)          # Sets the duty cycle to 200
pwm0.deinit()           # Switch off PWM on the pin

pwm1 = PWM(Pin(16), freq=1000, duty=200) # PWM in one line
```

## ADC

要在设备上使用ADC，您必须使用模拟引脚。例如，Wio Terminal上的引脚13（A0）。

**注: Wio Terminal上的ADC通道是10位（0-1023）.**

- 使用 ADC

```py
from machine import ADC, Pin

adc = ADC(Pin(13))      # Crating ADC on Pin 13
adc.read()              # reading ADC value, 0 ~ 1023
```

## DAC

要在设备上使用DAC，您必须使用DAC引脚或板上的PWM引脚。例如，Wio Terminal上的引脚11（DAC0）。

**注: Wio Terminal上的DAC通道是12位（0-4095）.**

- 使用 DAC:

```py
from machine import DAC, Pin

dac0 = DAC(Pin(11))      # Creating DAC on Pin 11
dac0.write(512)          # Writing value to DAC, 512/4096*3.3 = 0.4125 V

dac1 = DAC(Pin(26), resolution=10)  # Creating DAC on Pin 26 and using 10 bit resolution
dac1.write(1023)                    # Writing max output to DAC, 3.3V
```

**注:** 当在PWM引脚上使用DAC时，通道的分辨率仅为8位。

```py
# Using DAC om PWM Pins
from machine import DAC, Pin

dac2 = DAC(Pin(16))     # Creating DAC on Pin 16
dac2.write(128)         # Writing value to DAC, 128/255*3.3 = 1.65V
```

## LCD

对于Wio Terminal，TFT LCD显示屏可按如下方式使用。有关更多LCD参考，请访问 [**ArduPy LCD API 参考**](https://wiki.seeedstudio.com/ArduPy-LCD/).


- 使用 LCD 模块:

```py
from machine import LCD

lcd = LCD()                            # Initialize LCD and turn the backlight
lcd.fillScreen(lcd.color.BLACK)        # Fill the LCD screen with color black
lcd.setTextSize(2)                     # Setting font size to 2
lcd.setTextColor(lcd.color.GREEN)      # Setting test color to Green
lcd.drawString("Hello World!", 0, 0)   # Printing Hello World at (0, 0)
```

**注:** 使用 **`tab`**  键查看可用函数。

---

## IDE 入 门

如前所述，您可以使用首选的编辑器编写Python程序。为了方便运行和测试程序，您可以简单地编辑位于 `ARDUPY` 的 `main.py` 文件（自动重新加载功能）这里将使用 **Wio Terminal**演示另一个快速示例 :

>在进行下一步之前，请确保您已经按照上述步骤操作。

1.在 `ARDUPY` 位置打开`main.py`文件。

2.将以下代码复制到 `main.py` 并保存文件。

```py
from machine import LCD
import time, math

DEG2RAD = 0.0174532925
lcd = LCD()
lcd.fillScreen(lcd.color.BLACK)

# DRAW CIRCLE SEGMENTS
# x,y == coords of centre of circle
# start_angle = 0 - 359
# sub_angle   = 0 - 360 = subtended angle
# r = radius
# colour = 16 bit colour value

def fillSegment(x, y, startAngle, subAngle, r, color):
    # Calculate first pair of coordinates for segment start
    sx = math.cos((startAngle - 90) * DEG2RAD)
    sy = math.sin((startAngle - 90) * DEG2RAD)
    x1 = sx * r + x
    y1 = sy * r + y

    # Draw colour blocks every inc degrees
    for i in range(startAngle, startAngle+subAngle, 1):
        # Calculate pair of coordinates for segment end
        x2 = math.cos((i + 1 - 90) * DEG2RAD) * r + x
        y2 = math.sin((i + 1 - 90) * DEG2RAD) * r + y

        lcd.fillTriangle(int(x1), int(y1), int(x2), int(y2), x, y, color)

        # Copy segment end to segment start for next segment
        x1 = x2
        y1 = y2

def main():
    # Draw 4 pie chart segments
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

3.您应该立即看到Wio Terminal开始在屏幕上绘制饼图 !

自动重新加载功能在测试小型程序时非常有用。

## 技术支持

请将任何技术问题提交到我们的 [论坛](https://forum.seeedstudio.com/) 。<br /><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a>
