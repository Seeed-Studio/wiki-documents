---
description: Grove - 四位数码显示屏
title: Grove - 四位数码显示屏
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-4-Digit_Display
last_update:
  date: 03/22/2024
  author: WuFeifei
---

[<p><img src="https://files.seeedstudio.com/wiki/Grove-4-Digit_Display/img/Grove-4_digit_display.jpg" alt="pir" width={600} height="auto" /></p>
](https://www.seeedstudio.com/depot/grove-4digital-display-p-1198.html)

Grove - 4位数字显示模块是一个12针的模块。在此模块中，我们使用了TM1637来减少控制引脚的数量到2个。也就是说，它仅通过Arduino或Seeeduino的两个数字引脚来控制显示内容和亮度。对于需要字母数字显示的项目来说，这是一个不错的选择。

<!-- <p style=":center"><a href="https://www.seeedstudio.com/grove-4digital-display-p-1198.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border=0 /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/grove-4digital-display-p-1198.html)

## 版本

| 产品版本                 | 变更内容 | 发布日期  |
| ------------------------ | -------- | --------- |
| Grove - 4位数字显示 V1.0 | 初始版本 | 2012年5月 |

## 特点

-   4位红色字母数字显示屏
-   Grove兼容接口（3.3V/5V）
-   8级可调亮度

:::提示
    更多关于Grove模块的信息，请参见[Grove系统](https://wiki.seeedstudio.com/Grove_System/)
:::

## 规格

<table border="2" cellspacing="0" width="58.2%">
<tr>
<th scope="col">
项目
</th>
<th scope="col">
最小值
</th>
<th scope="col">
典型值
</th>
<th scope="col">
最大值
</th>
<th scope="col">
单位
</th>
</tr>
<tr align="center">
<th scope="row">
电压
</th>
<td>
3.3
</td>
<td>
5.0
</td>
<td>
5.5
</td>
<td>
VDC
</td>
</tr>
<tr align="center">
<th scope="row">
电流
</th>
<td>
0.2
</td>
<td>
27
</td>
<td>
80
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<th scope="row">
尺寸
</th>
<td colspan="3">
42x24x14
</td>
<td>
mm
</td>
</tr>
<tr align="center">
<th scope="row">
净重
</th>
<td colspan="3">
7±1
</td>
<td>
g
</td>
</tr>
</table>

## 应用创意

-   时间显示
-   秒表
-   传感器输入显示

## 支持的平台

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|树莓派|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|
|:::警告||
    上述提到的支持平台是指模块在软件或理论上的兼容性。在大多数情况下，我们只提供适用于Arduino平台的软件库或代码示例。由于无法为所有可能的MCU平台提供软件库/示例代码，因此用户需要编写自己的软件库。
:::

## 入门指南

:::注意
    如果您是第一次使用Arduino，我们强烈建议您在开始之前先阅读[Arduino入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。
:::

### 使用Arduino操作

**硬件**

- **步骤 1.** 准备以下物品：

| Seeeduino V4.2 | 基础扩展板 | Grove-4位数字显示屏 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/image/500px-Grove_-_4_digit_display_s.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即获取](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即获取](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即获取](https://www.seeedstudio.com/grove-4digital-display-p-1198.html)|

- **步骤 2.** 将Grove-4位数字显示屏连接到Grove基础扩展板的**D2**端口。
- **步骤 3.** 将Grove基础扩展板插入Seeeduino。
- **步骤 4.** 通过USB线将Seeeduino连接到电脑。

<!-- ![](https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/image/seeeduino_digital_led.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/image/seeeduino_digital_led.jpg" alt="pir" width={600} height="auto" /></p>

:::注意
	如果没有Grove基础扩展板，我们也可以直接将Grove-4位数字显示屏连接到Seeeduino，如下所示。我们也可以将Grove-4位数字显示屏插入其他Grove数字端口。
:::

| Seeeduino |  Grove-4-Digit Display |
|-----------|-----------------|
| 5V        | 红色           |
| GND       | 黑色         |
| D3        | 白色 (DIO)   |
| D2        | 黄色(CLK)   |

:::警告
    Grove-4位数字显示屏包含4个引脚，分别是GND、VCC、DIO、CLK。我们可以将DIO和CLK连接到任何数字引脚。这并不是I2C协议。  
:::
****软件****

- **步骤 1.** 下载[Grove-4位数字显示屏库](https://github.com/Seeed-Studio/Grove_4Digital_Display/archive/master.zip)和[TimerOne库](https://code.google.com/p/arduino-timerone/downloads/detail?name=TimerOne-v9.zip&can=2&q=)。
- **步骤 2.** 参考[如何安装库](https://wiki.seeedstudio.com/How_to_install_Arduino_Library)的指南为Arduino安装库。
- **步骤 3.**  按照以下说明将代码选择到Arduino IDE并上传。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/Upload_Code/)的指南。下面有三个示例：
    - 时钟显示
    - 数字流动
    - 秒表

<!-- ![](https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/image/arduino_example.jpg) -->

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/image/arduino_example.jpg" alt="pir" width={600} height="auto" /></p>

- **步骤 4.** 我们会看到Grove-4位数字显示屏已经开启。

### 使用Codecraft进行编程

#### 硬件

**步骤 1.** 将Grove-4位数字显示屏连接到基础扩展板的D2端口。

**步骤 2.** 将基础扩展板插入您的Seeeduino/Arduino。

**步骤 3.**  通过USB线将Seeeduino/Arduino连接到您的电脑。

#### 软件

**步骤 1.** 打开[Codecraft](https://ide.chmakered.com/)，添加Arduino支持，并拖动一个主程序到工作区。

:::注意
    如果您是第一次使用Codecraft，也请查看[Codecraft使用Arduino指南](https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/)。
:::
**步骤 2.** 按照下面的图片拖动代码块，或者打开可以在本页面底部下载的cdc文件。
<!-- 
![](https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/image/4-Digit_Display.png) -->

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/image/4-Digit_Display.png" alt="pir" width={600} height="auto" /></p>

将程序上传到您的Arduino/Seeeduino。

:::成功后
    当代码上传完成后，您会看到数字从0流动到9。
:::

### 使用Raspberry Pi（配合Grove Base Hat for Raspberry Pi）

#### 硬件

- **步骤 1**.本项目所需物品：

| 树莓派 | Grove Base Hat for RasPi| Grove - 4 位数字显示屏 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/image/500px-Grove_-_4_digit_display_s.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即获取](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即获取](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[立即获取](https://www.seeedstudio.com/grove-4digital-display-p-1198.html)|

- **步骤 2**. 将Grove Base Hat插入Raspberry Pi。
- **步骤 3**. 将4位数字显示屏连接到Base Hat的 12号端口。
- **步骤 4**. 通过USB线将Raspberry Pi连接到电脑。

<!-- ![](https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/image/Digit_Hat.jpg) -->

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/image/Digit_Hat.jpg" alt="pir" width={600} height="auto" /></p>

:::注意
    在第三步中，您可以将显示屏连接到**任何GPIO端口**，但请确保将命令中的端口号改为相应的端口号。
:::

#### 软件

- **步骤 1**. 按照[设置软件](https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation)的指南配置开发环境。
- **步骤 2**. 通过克隆grove.py库来下载源文件。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **步骤 3**. 执行以下命令来运行代码。

```
cd grove.py/grove
python grove_4_digit_display.py 12 13

```

以下是grove_4_digit_display.py的代码。

```python

import sys
import time
from grove.gpio import GPIO


charmap = {
    '0': 0x3f,
    '1': 0x06,
    '2': 0x5b,
    '3': 0x4f,
    '4': 0x66,
    '5': 0x6d,
    '6': 0x7d,
    '7': 0x07,
    '8': 0x7f,
    '9': 0x6f,
    'A': 0x77,
    'B': 0x7f,
    'b': 0x7C,
    'C': 0x39,
    'c': 0x58,
    'D': 0x3f,
    'd': 0x5E,
    'E': 0x79,
    'F': 0x71,
    'G': 0x7d,
    'H': 0x76,
    'h': 0x74,
    'I': 0x06,
    'J': 0x1f,
    'K': 0x76,
    'L': 0x38,
    'l': 0x06,
    'n': 0x54,
    'O': 0x3f,
    'o': 0x5c,
    'P': 0x73,
    'r': 0x50,
    'S': 0x6d,
    'U': 0x3e,
    'V': 0x3e,
    'Y': 0x66,
    'Z': 0x5b,
    '-': 0x40,
    '_': 0x08,
    ' ': 0x00
}

ADDR_AUTO = 0x40
ADDR_FIXED = 0x44
STARTADDR = 0xC0
BRIGHT_DARKEST = 0
BRIGHT_DEFAULT = 2
BRIGHT_HIGHEST = 7


class Grove4DigitDisplay(object):
    colon_index = 1

    def __init__(self, clk, dio, brightness=BRIGHT_DEFAULT):
        self.brightness = brightness

        self.clk = GPIO(clk, direction=GPIO.OUT)
        self.dio = GPIO(dio, direction=GPIO.OUT)
        self.data = [0] * 4
        self.show_colon = False

    def clear(self):
        self.show_colon = False
        self.data = [0] * 4
        self._show()

    def show(self, data):
        if type(data) is str:
            for i, c in enumerate(data):
                if c in charmap:
                    self.data[i] = charmap[c]
                else:
                    self.data[i] = 0
                if i == self.colon_index and self.show_colon:
                    self.data[i] |= 0x80
                if i == 3:
                    break
        elif type(data) is int:
            self.data = [0, 0, 0, charmap['0']]
            if data < 0:
                negative = True
                data = -data
            else:
                negative = False
            index = 3
            while data != 0:
                self.data[index] = charmap[str(data % 10)]
                index -= 1
                if index < 0:
                    break
                data = int(data / 10)

            if negative:
                if index >= 0:
                    self.data[index] = charmap['-']
                else:
                    self.data = charmap['_'] + [charmap['9']] * 3
        else:
            raise ValueError('Not support {}'.format(type(data)))
        self._show()

    def _show(self):
        with self:
            self._transfer(ADDR_AUTO)

        with self:
            self._transfer(STARTADDR)
            for i in range(4):
                self._transfer(self.data[i])

        with self:
            self._transfer(0x88 + self.brightness)

    def update(self, index, value):
        if index < 0 or index > 4:
            return

        if value in charmap:
            self.data[index] = charmap[value]
        else:
            self.data[index] = 0

        if index == self.colon_index and self.show_colon:
            self.data[index] |= 0x80

        with self:
            self._transfer(ADDR_FIXED)

        with self:
            self._transfer(STARTADDR | index)
            self._transfer(self.data[index])

        with self:
            self._transfer(0x88 + self.brightness)


    def set_brightness(self, brightness):
        if brightness > 7:
            brightness = 7

        self.brightness = brightness
        self._show()

    def set_colon(self, enable):
        self.show_colon = enable
        if self.show_colon:
            self.data[self.colon_index] |= 0x80
        else:
            self.data[self.colon_index] &= 0x7F
        self._show()

    def _transfer(self, data):
        for _ in range(8):
            self.clk.write(0)
            if data & 0x01:
                self.dio.write(1)
            else:
                self.dio.write(0)
            data >>= 1
            time.sleep(0.000001)
            self.clk.write(1)
            time.sleep(0.000001)

        self.clk.write(0)
        self.dio.write(1)
        self.clk.write(1)
        self.dio.dir(GPIO.IN)

        while self.dio.read():
            time.sleep(0.001)
            if self.dio.read():
                self.dio.dir(GPIO.OUT)
                self.dio.write(0)
                self.dio.dir(GPIO.IN)
        self.dio.dir(GPIO.OUT)

    def _start(self):
        self.clk.write(1)
        self.dio.write(1)
        self.dio.write(0)
        self.clk.write(0)

    def _stop(self):
        self.clk.write(0)
        self.dio.write(0)
        self.clk.write(1)
        self.dio.write(1)

    def __enter__(self):
        self._start()

    def __exit__(self, exc_type, exc_val, exc_tb):
        self._stop()


Grove = Grove4DigitDisplay


def main():
    if len(sys.argv) < 3:
        print('Usage: {} clk dio'.format(sys.argv[0]))
        sys.exit(1)

    display = Grove4DigitDisplay(int(sys.argv[1]), int(sys.argv[2]))

    count = 0
    while True:
        t = time.strftime("%H%M", time.localtime(time.time()))
        display.show(t)
        display.set_colon(count & 1)
        count += 1
        time.sleep(1)


if __name__ == '__main__':
    main()

```

:::成功后
    如果一切顺利，4位数字显示屏将显示当前时间。
:::

您可以通过按 ++ctrl+c++ 来退出此程序。

### 使用Raspberry Pi（配合GrovePi_Plus）

**硬件**

- **步骤 1.** 准备以下物品：

| 树莓派 | GrovePi_Plus | Grove-4位数字显示屏 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/image/500px-Grove_-_4_digit_display_s.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即获取](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即获取](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[立即获取](https://www.seeedstudio.com/grove-4digital-display-p-1198.html)|


- **步骤 2.**  将GrovePi_Plus插入Raspberry Pi。
- **步骤 3.** 将Grove-4位数字显示屏连接到GrovePi_Plus的**D5**端口。
- **步骤 4.** 通过USB线将Raspberry Pi连接到电脑。

<!-- ![](https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/image/rpi_digital_led.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/image/rpi_digital_led.jpg" alt="pir" width={600} height="auto" /></p>

**软件**

- **步骤 1.** 按照[设置软件](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/)的指南配置开发环境。
- **步骤 2.** 在Github上克隆仓库。

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **步骤 3.** 执行以下命令来监测音量大小。


```python
cd ~/GrovePi/Software/Python
python grove_4_digit_display.py
```

下面是grove_4_digit_display.py的代码。

```python
# NOTE: 4x red 7 segment display with colon and 8 luminance levels, but no decimal points

import time
import grovepi

# Connect the Grove 4 Digit Display to digital port D5
# CLK,DIO,VCC,GND
display = 5
grovepi.pinMode(display,"OUTPUT")

# If you have an analog sensor connect it to A0 so you can monitor it below
sensor = 0
grovepi.pinMode(sensor,"INPUT")

time.sleep(.5)

# 4 Digit Display methods
# grovepi.fourDigit_init(pin)
# grovepi.fourDigit_number(pin,value,leading_zero)
# grovepi.fourDigit_brightness(pin,brightness)
# grovepi.fourDigit_digit(pin,segment,value)
# grovepi.fourDigit_segment(pin,segment,leds)
# grovepi.fourDigit_score(pin,left,right)
# grovepi.fourDigit_monitor(pin,analog,duration)
# grovepi.fourDigit_on(pin)
# grovepi.fourDigit_off(pin)

while True:
    try:
        print ("Test 1) Initialise")
        grovepi.fourDigit_init(display)
        time.sleep(.5)

        print ("Test 2) Set brightness")
        for i in range(0,8):
            grovepi.fourDigit_brightness(display,i)
            time.sleep(.2)
        time.sleep(.3)

        # set to lowest brightness level
        grovepi.fourDigit_brightness(display,0)
        time.sleep(.5)

        print ("Test 3) Set number without leading zeros")
        leading_zero = 0
        grovepi.fourDigit_number(display,1,leading_zero)
        time.sleep(.5)
        grovepi.fourDigit_number(display,12,leading_zero)
        time.sleep(.5)
        grovepi.fourDigit_number(display,123,leading_zero)
        time.sleep(.5)
        grovepi.fourDigit_number(display,1234,leading_zero)
        time.sleep(.5)

        print ("Test 4) Set number with leading zeros")
        leading_zero = 1
        grovepi.fourDigit_number(display,5,leading_zero)
        time.sleep(.5)
        grovepi.fourDigit_number(display,56,leading_zero)
        time.sleep(.5)
        grovepi.fourDigit_number(display,567,leading_zero)
        time.sleep(.5)
        grovepi.fourDigit_number(display,5678,leading_zero)
        time.sleep(.5)

        print ("Test 5) Set individual digit")
        grovepi.fourDigit_digit(display,0,2)
        grovepi.fourDigit_digit(display,1,6)
        grovepi.fourDigit_digit(display,2,9)
        grovepi.fourDigit_digit(display,3,15) # 15 = F
        time.sleep(.5)

        print ("Test 6) Set individual segment")
        grovepi.fourDigit_segment(display,0,118) # 118 = H
        grovepi.fourDigit_segment(display,1,121) # 121 = E
        grovepi.fourDigit_segment(display,2,118) # 118 = H
        grovepi.fourDigit_segment(display,3,121) # 121 = E
        time.sleep(.5)

        grovepi.fourDigit_segment(display,0,57) # 57 = C
        grovepi.fourDigit_segment(display,1,63) # 63 = O
        grovepi.fourDigit_segment(display,2,63) # 63 = O
        grovepi.fourDigit_segment(display,3,56) # 56 = L
        time.sleep(.5)

        print ("Test 7) Set score")
        grovepi.fourDigit_score(display,0,0)
        time.sleep(.2)
        grovepi.fourDigit_score(display,1,0)
        time.sleep(.2)
        grovepi.fourDigit_score(display,1,1)
        time.sleep(.2)
        grovepi.fourDigit_score(display,1,2)
        time.sleep(.2)
        grovepi.fourDigit_score(display,1,3)
        time.sleep(.2)
        grovepi.fourDigit_score(display,1,4)
        time.sleep(.2)
        grovepi.fourDigit_score(display,1,5)
        time.sleep(.5)

        print ("Test 8) Set time")
        grovepi.fourDigit_score(display,12,59)
        time.sleep(.5)

        print ("Test 9) Monitor analog pin")
        seconds = 10
        grovepi.fourDigit_monitor(display,sensor,seconds)
        time.sleep(.5)

        print ("Test 10) Switch all on")
        grovepi.fourDigit_on(display)
        time.sleep(.5)

        print ("Test 11) Switch all off")
        grovepi.fourDigit_off(display)
        time.sleep(.5)

    except KeyboardInterrupt:
        grovepi.fourDigit_off(display)
        break
    except IOError:
        print ("Error")

```

- **步骤 4.** 我们会看到Grove-4位数字显示屏如下所示。

```python
pi@raspberrypi:~/GrovePi/Software/Python $ python grove_4_digit_display.py 
Test 1) Initialise
Test 2) Set brightness
Test 3) Set number without leading zeros
Test 4) Set number with leading zeros
Test 5) Set individual digit
Test 6) Set individual segment
Test 7) Set score
Test 8) Set time
Test 9) Monitor analog pin
Test 10) Switch all on
Test 11) Switch all off
```

### 与TI LaunchPad配合使用

显示数字（4位数字显示屏）

此示例演示了如何使用Grove-4位数字显示屏来显示一些数字。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-4-Digit_Display/img/4_digital_display.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-4-Digit_Display/img/4_digital_display.jpg" alt="pir" width={600} height="auto" /></p>

```
/*
 * TM1637.cpp
 * A library for the 4 digit display
 */
#include "TM1637.h"
#define CLK 39 //pins definitions for TM1637 and can be changed to other ports
#define DIO 38
TM1637 tm1637(CLK,DIO);
void setup()
{
    tm1637.init();
    tm1637.set(BRIGHT_TYPICAL);//BRIGHT_TYPICAL = 2,BRIGHT_DARKEST = 0,BRIGHTEST = 7;
}
void loop()
{
    int8_t NumTab[] = {0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15};//0~9,A,b,C,d,E,F
    int8_t ListDisp[4];
    unsigned char i = 0;
    unsigned char count = 0;
    delay(150);
    while(1)
    {
        i = count;
        count ++;
        if(count == sizeof(NumTab)) count = 0;
        for(unsigned char BitSelect = 0;BitSelect < 4;BitSelect ++)
        {
            ListDisp[BitSelect] = NumTab[i];
            i ++;
            if(i == sizeof(NumTab)) i = 0;
        }
        tm1637.display(0,ListDisp[0]);
        tm1637.display(1,ListDisp[1]);
        tm1637.display(2,ListDisp[2]);
        tm1637.display(3,ListDisp[3]);
        delay(300);
    }
}
```


## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/resource/Grove%20-%204-Digit%20Display%20V1.0%20eagle%20files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## 资源

- **[Eagle&PDF]** [Grove-4位数字显示屏 V1.0 原理图](https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/resource/Grove%20-%204-Digit%20Display%20V1.0%20eagle%20files.zip)
- **[库]** [4位数字显示屏](https://github.com/Seeed-Studio/Grove_4Digital_Display)
- **[库]** [TimerOne 库](https://code.google.com/p/arduino-timerone/downloads/detail?name=TimerOne-v9.zip&can=2&q=)
- **[库]** [四位数字显示屏Suli库](https://github.com/Seeed-Studio/Four_Digit_Display_Suli)
- **[库]** [CodeCraft 代码](https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/resource/4-Digit%20Display.zip)
- **[数据手册]** [TM1637 数据手册](https://files.seeedstudio.com/wiki/Grove-4-Digit_Display/res/TM1637_datasheet.pdf)
- **[更多阅读]** [木制激光枪](https://www.instructables.com/id/DIY-a-Wooden-Laser-Gun-As-a-Xmas-Present-for-Your-/)

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/gun.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/gun.jpg" alt="pir" width={600} height="auto" /></p>

受《守望先锋》的启发，我们制作了一款非常酷的木制激光枪玩具，为这些天增添乐趣！

这款木制激光枪和枪靶都是基于一款名为Seeeduino Lotus的Arduino主板制作的。激光枪上的激光发射器被控制以发射激光脉冲来“激活”枪靶。枪靶上有3个光传感器来检测激光脉冲。看起来很简单对吧？如果你对我们的项目感兴趣，请为自己或你的孩子制作一个吧！花一天时间DIY它作为圣诞礼物，绝对值得。

## 项目

**带有Grove模块的MSP430闹钟**：使用MSP430F5529 LaunchPad和SeeedStudio Grove模块，打造属于你自己的闹钟。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/carlosventura/alarm-clock-with-grove-modules-e4e9f1/embed' width='350'></iframe>

**基于Photon的Grove 4位数字显示屏时钟**：这是你的第一个由四个组件组成的时钟，基于Grove和TM1637制作。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ingo-lohs/clock-grove-4-digit-display-using-photon-7c4369/embed' width='350'></iframe>

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们的产品尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
