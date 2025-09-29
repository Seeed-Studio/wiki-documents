---
description: Grove - 4位数码显示模块
title: Grove - 4位数码显示模块
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-4-Digit_Display
last_update:
  date: 1/7/2023
  author: shuxu hu
---

[<p><img src="https://files.seeedstudio.com/wiki/Grove-4-Digit_Display/img/Grove-4_digit_display.jpg" alt="pir" width={600} height="auto" /></p>
](https://www.seeedstudio.com/depot/grove-4digital-display-p-1198.html)

Grove - 4位数码显示模块是一个12针模块。在该模块中，我们使用了TM1637芯片，将控制引脚的数量缩减至2个。也就是说，它仅通过Arduino或Seeeduino的2个数字引脚即可控制显示内容和亮度。对于需要字母数字显示的项目来说，这是一个不错的选择。

<!-- <p style=":center"><a href="https://www.seeedstudio.com/grove-4digital-display-p-1198.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border=0 /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/grove-4digital-display-p-1198.html)

## 版本

| 产品版本                     | 变更内容                                 | 发布日期       |
|------------------------------|-------------------------------------------|---------------|
|Grove - 4位数码显示 V1.0  | 初始版本                                 | 2012年5月     |     

## 特性

-   4位红色字母数字显示
-   Grove兼容接口（3.3V/5V）
-   8级可调亮度

:::tip
    更多关于Grove模块的详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::
## 规格参数

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

## 应用场景

-   时间显示
-   秒表
-   传感器输入显示

## 支持的平台

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|
:::caution
    上述提到的支持平台仅表示模块的软件或理论兼容性。我们通常仅为Arduino平台提供软件库或代码示例。不可能为所有可能的MCU平台提供软件库或演示代码。因此，用户需要自行编写软件库。
:::

## 入门指南

:::note
    如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

### 使用 Arduino

**硬件**

- **步骤 1.** 准备以下物品：

| Seeeduino V4.2 | Base Shield | Grove-4-Digit Display |
|----------------|-------------|---------------------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/image/500px-Grove_-_4_digit_display_s.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/grove-4digital-display-p-1198.html)|

- **步骤 2.** 将 Grove-4-Digit Display 连接到 Grove-Base Shield 的 **D2** 端口。
- **步骤 3.** 将 Grove-Base Shield 插入 Seeeduino。
- **步骤 4.** 使用 USB 数据线将 Seeeduino 连接到电脑。

<!-- ![](https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/image/seeeduino_digital_led.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/image/seeeduino_digital_led.jpg" alt="pir" width={600} height="auto" /></p>

:::note
    如果没有 Grove Base Shield，我们也可以直接将 Grove-4-Digit Display 连接到 Seeeduino，如下所示。此外，我们还可以将 Grove-4-Digit Display 插入其他 Grove 数字端口。
:::

| Seeeduino | Grove-4-Digit Display |
|-----------|---------------------------|
| 5V        | 红色                     |
| GND       | 黑色                     |
| D3        | 白色 (DIO)               |
| D2        | 黄色 (CLK)               |

:::warning
    Grove-4-Digit Display 包含 4 个引脚：GND、VCC、DIO、CLK。我们可以将 DIO 和 CLK 连接到任意数字引脚。它不是 I2C 协议。
:::

**软件**

- **步骤 1.** 下载 [Grove-4-Digit Display 库](https://github.com/Seeed-Studio/Grove_4Digital_Display/archive/master.zip) 和 [TimerOne 库](https://code.google.com/p/arduino-timerone/downloads/detail?name=TimerOne-v9.zip&can=2&q=)。
- **步骤 2.** 参考 [如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库。
- **步骤 3.** 按以下说明选择代码并上传到 Arduino IDE。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。以下是 3 个示例：
    - 时钟显示
    - 数字流动
    - 秒表

<!-- ![](https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/image/arduino_example.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/image/arduino_example.jpg" alt="pir" width={600} height="auto" /></p>

- **步骤 4.** 您将看到 Grove-4-Digit Display 被点亮。

### 使用 Codecraft

#### 硬件

**步骤 1.** 将 Grove-4-Digit Display 连接到 Base Shield 的 D2 端口。

**步骤 2.** 将 Base Shield 插入您的 Seeeduino/Arduino。

**步骤 3.** 使用 USB 数据线将 Seeeduino/Arduino 连接到电脑。

#### 软件

**步骤 1.** 打开 [Codecraft](https://ide.chmakered.com/)，添加 Arduino 支持，并将主程序拖到工作区。

:::note
    如果这是您第一次使用 Codecraft，请参阅 [Codecraft 使用 Arduino 指南](https://wiki.seeedstudio.com/cn/Guide_for_Codecraft_using_Arduino/)。
:::

**步骤 2.** 按下图拖动模块或打开页面底部提供的 cdc 文件。

<!-- 
![](https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/image/4-Digit_Display.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/image/4-Digit_Display.png" alt="pir" width={600} height="auto" /></p>

将程序上传到您的 Arduino/Seeeduino。

:::success
    当代码上传完成后，您将看到数字从 0 到 9 流动。
:::

### 使用 Raspberry Pi (配合 Grove Base Hat for Raspberry Pi)

#### 硬件

- **步骤 1.** 项目所需物品：

| Raspberry Pi | Grove Base Hat for RasPi | Grove-4-Digit Display |
|--------------|-------------------------------|---------------------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/image/500px-Grove_-_4_digit_display_s.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即购买](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[立即购买](https://www.seeedstudio.com/grove-4digital-display-p-1198.html)|

- **步骤 2.** 将 Grove Base Hat 插入 Raspberry Pi。
- **步骤 3.** 将 4-Digit Display 连接到 Base Hat 的端口 12。
- **步骤 4.** 使用 USB 数据线将 Raspberry Pi 连接到电脑。

<!-- ![](https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/image/Digit_Hat.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/image/Digit_Hat.jpg" alt="pir" width={600} height="auto" /></p>

:::note
    在步骤 3 中，您可以将显示器连接到 **任何 GPIO 端口**，但请确保更改命令以匹配对应的端口号。
:::

#### 软件

- **步骤 1.** 按照 [软件设置](https://wiki.seeedstudio.com/cn/Grove_Base_Hat_for_Raspberry_Pi/#installation) 配置开发环境。
- **步骤 2.** 通过克隆 grove.py 库下载源文件。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **步骤 3.** 执行以下命令运行代码。

```
cd grove.py/grove
python grove_4_digit_display.py 12 13

```

以下是 grove_4_digit_display.py 的代码。

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

:::success
    如果一切正常，4位数码管将显示当前时间。
:::

您可以通过按下 ++ctrl+c++ 来退出此程序。


### 使用树莓派（配合 GrovePi_Plus）

**硬件**

- **步骤 1.** 准备以下物品：

| 树莓派 | GrovePi_Plus | Grove-4位数码管 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/image/500px-Grove_-_4_digit_display_s.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即购买](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[立即购买](https://www.seeedstudio.com/grove-4digital-display-p-1198.html)|


- **步骤 2.** 将 GrovePi_Plus 插入树莓派。
- **步骤 3.** 将 Grove-4位数码管连接到 GrovePi_Plus 的 **D5** 端口。
- **步骤 4.** 通过 USB 数据线将树莓派连接到电脑。

<!-- ![](https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/image/rpi_digital_led.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/image/rpi_digital_led.jpg" alt="pir" width={600} height="auto" /></p>

**软件**

- **步骤 1.** 按照 [设置软件](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) 的说明配置开发环境。
- **步骤 2.** Git 克隆 Github 仓库。

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **步骤 3.** 执行以下命令以监控响度。

```python
cd ~/GrovePi/Software/Python
python grove_4_digit_display.py
```

以下是 grove_4_digit_display.py 的代码。

```python
# 注意: 4位红色7段显示器，带冒号和8级亮度，但没有小数点

import time
import grovepi

# 将 Grove 4位数字显示器连接到数字端口 D5
# CLK,DIO,VCC,GND
display = 5
grovepi.pinMode(display,"OUTPUT")

# 如果您有一个模拟传感器，可以将其连接到 A0，以便在下面进行监控
sensor = 0
grovepi.pinMode(sensor,"INPUT")

time.sleep(.5)

# 4位数字显示器方法
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
        print ("测试 1) 初始化")
        grovepi.fourDigit_init(display)
        time.sleep(.5)

        print ("测试 2) 设置亮度")
        for i in range(0,8):
            grovepi.fourDigit_brightness(display,i)
            time.sleep(.2)
        time.sleep(.3)

        # 设置为最低亮度级别
        grovepi.fourDigit_brightness(display,0)
        time.sleep(.5)

        print ("测试 3) 设置数字，无前导零")
        leading_zero = 0
        grovepi.fourDigit_number(display,1,leading_zero)
        time.sleep(.5)
        grovepi.fourDigit_number(display,12,leading_zero)
        time.sleep(.5)
        grovepi.fourDigit_number(display,123,leading_zero)
        time.sleep(.5)
        grovepi.fourDigit_number(display,1234,leading_zero)
        time.sleep(.5)

        print ("测试 4) 设置数字，带前导零")
        leading_zero = 1
        grovepi.fourDigit_number(display,5,leading_zero)
        time.sleep(.5)
        grovepi.fourDigit_number(display,56,leading_zero)
        time.sleep(.5)
        grovepi.fourDigit_number(display,567,leading_zero)
        time.sleep(.5)
        grovepi.fourDigit_number(display,5678,leading_zero)
        time.sleep(.5)

        print ("测试 5) 设置单个数字")
        grovepi.fourDigit_digit(display,0,2)
        grovepi.fourDigit_digit(display,1,6)
        grovepi.fourDigit_digit(display,2,9)
        grovepi.fourDigit_digit(display,3,15) # 15 = F
        time.sleep(.5)

        print ("测试 6) 设置单个段")
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

        print ("测试 7) 设置分数")
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

        print ("测试 8) 设置时间")
        grovepi.fourDigit_score(display,12,59)
        time.sleep(.5)

        print ("测试 9) 监控模拟引脚")
        seconds = 10
        grovepi.fourDigit_monitor(display,sensor,seconds)
        time.sleep(.5)

        print ("测试 10) 全部打开")
        grovepi.fourDigit_on(display)
        time.sleep(.5)

        print ("测试 11) 全部关闭")
        grovepi.fourDigit_off(display)
        time.sleep(.5)

    except KeyboardInterrupt:
        grovepi.fourDigit_off(display)
        break
    except IOError:
        print ("错误")

```

- **步骤 4.** 我们将看到 Grove-4-Digit Display 如下所示。

```python
pi@raspberrypi:~/GrovePi/Software/Python $ python grove_4_digit_display.py 
测试 1) 初始化
测试 2) 设置亮度
测试 3) 设置数字，无前导零
测试 4) 设置数字，带前导零
测试 5) 设置单个数字
测试 6) 设置单个段
测试 7) 设置分数
测试 8) 设置时间
测试 9) 监控模拟引脚
测试 10) 全部打开
测试 11) 全部关闭
```

### 使用 TI LaunchPad

显示数字（4位数字显示器）

此示例演示如何使用 Grove-4-Digit Display 显示一些数字。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-4-Digit_Display/img/4_digital_display.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-4-Digit_Display/img/4_digital_display.jpg" alt="pir" width={600} height="auto" /></p>

```
/*
 * TM1637.cpp
 * 一个用于4位数字显示器的库
 */
#include "TM1637.h"
#define CLK 39 // TM1637的引脚定义，可以更改为其他端口
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

- **[Eagle&PDF]** [Grove-4位数码管显示 V1.0 原理图](https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/resource/Grove%20-%204-Digit%20Display%20V1.0%20eagle%20files.zip)
- **[Library]** [4位数码管显示库](https://github.com/Seeed-Studio/Grove_4Digital_Display)
- **[Library]** [TimerOne库](https://code.google.com/p/arduino-timerone/downloads/detail?name=TimerOne-v9.zip&can=2&q=)
- **[Library]** [四位数码管显示 Suli 库](https://github.com/Seeed-Studio/Four_Digit_Display_Suli)
- **[Library]** [CodeCraft代码](https://files.seeedstudio.com/wiki/Grove_4_Digit_Display/resource/4-Digit%20Display.zip)
- **[Datasheet]** [TM1637 数据手册](https://files.seeedstudio.com/wiki/Grove-4-Digit_Display/res/TM1637_datasheet.pdf)
- **[More Reading]** [木质激光枪](https://www.instructables.com/id/DIY-a-Wooden-Laser-Gun-As-a-Xmas-Present-for-Your-/)

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/gun.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/gun.jpg" alt="pir" width={600} height="auto" /></p>

受到《守望先锋》的启发，我们最近制作了一款非常酷的木质激光枪玩具来娱乐！

木质激光枪和枪靶都基于一个名为 Seeeduino Lotus 的 Arduino 开发板。激光枪上的激光发射器被控制以发射激光脉冲来“激活”枪靶。而枪靶上有3个光传感器来检测激光脉冲。看起来很简单，对吧？如果您对我们的项目感兴趣，请为自己或您的孩子制作一个！作为圣诞礼物，花一天时间 DIY 是非常值得的。

## 项目

**使用 Grove 模块的 MSP430 闹钟**：使用 MSP430F5529 LaunchPad 和 SeeedStudio Grove 模块创建您自己的闹钟。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/carlosventura/alarm-clock-with-grove-modules-e4e9f1/embed' width='350'></iframe>

**时钟 - 使用 Photon 的 Grove 四位数码管显示**：基于 Grove 和 TM1637 的四个组件，制作您的第一个时钟。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ingo-lohs/clock-grove-4-digit-display-using-photon-7c4369/embed' width='350'></iframe>

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>