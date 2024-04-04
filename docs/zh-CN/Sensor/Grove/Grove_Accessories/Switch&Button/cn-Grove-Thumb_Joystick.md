---
description: Grove - Thumb Joystick
title: Grove - Thumb Joystick
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Thumb_Joystick
last_update:
  date: 03/23/2024
  author: WuFeifei
---
<!-- ---
name: Grove - Thumb Joystick
category: Sensor
bzurl: https://seeedstudio.com/Grove-Thumb-Joystick-p-935.html
oldwikiname: Grove_-_Thumb_Joystick
prodimagename: Bgjoy1.jpg
bzprodimageurl: https://statics3.seeedstudio.com/images/product/bgjoy1.jpg
surveyurl: https://www.research.net/r/Grove-Thumb_Joystick
sku: 101020028
tags: grove_analog, io_3v3, io_5v, plat_duino,plat_pi
--- -->

![](https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/img/Bgjoy1.jpg)

Grove - Thumb Joystick 是一个 Grove 兼容的模块，它与 PS2（PlayStation 2）控制器上的“模拟”操纵杆非常相似。X 轴和 Y 轴是两个约为 10k 的电位器，通过产生模拟信号来控制二维移动。操纵杆还有一个按钮，可以用于特殊应用。当模块处于工作状态时，它会输出两个模拟值，代表两个方向。与普通的操纵杆相比，它的输出值被限制在一个较小的范围内（即 200~800），只有在被按下时，X 值才会被设置为 1023，而微控制器（MCU）可以检测到按下的动作。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Thumb-Joystick-p-935.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border={0} /></a></p>

## 版本

| 产品版本                    | 变更内容 | 发布日期   |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| Grove - Thumb Joystick V1.1 | 初始版   | 2016年10月 |

## 规格

| 项目                | 最小值 | 典型值 | 最大值 | 单位 |
|-------------------------------------|------|---------|------|------|
| 工作电压            | 4.75   | 5.0    | 5.25   | V    |
| 输出模拟值（X坐标） | 206    | 516    | 798    | \    |
| 输出模拟值（Y坐标） | 203    | 507    | 797    | \    |

:::提示
更多关于 Grove 模块的信息，请参见[Grove 系统](https://wiki.seeedstudio.com/Grove_System/)
:::

## 支持的平台

| Arduino                                                      | 树莓派                                                       |                                                              |                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::警告
上述提到的支持平台只是模块软件或理论兼容性的一个指示。在大多数情况下，我们只提供针对Arduino平台的软件库或代码示例。由于无法为所有可能的MCU平台提供软件库/示例代码，因此用户需要自己编写软件库。
:::

## 开始使用

:::提示
如果您是第一次使用Arduino，我们强烈建议您在开始之前查看[Arduino入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。
:::

### 与Arduino一起使用

#### 演示

Grove - Thumb Joystick 是一个模拟设备，输出的模拟信号范围在 0 到 1023 之间。这要求我们使用 Arduino 的模拟端口来读取数据。

#### 硬件

- **步骤1.** 准备以下材料：

| Seeeduino V4.2 | Base Shield|  Grove - Thumb Joystick |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/img/Bgjoy1_small.jpg)|
|[立即获取](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即获取](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即获取](https://www.seeedstudio.com/Grove-Thumb-Joystick-p-935.html)|

- **步骤 2.** 使用 4 针 Grove 线缆将模块连接到 Grove - Base Shield 的 **A0/A1** 端口。
- **步骤 3.** 将 Grove - Base Shield 插入 Seeeduino。
- **步骤 4.** 通过 USB 线缆将 Seeeduino 连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/img/Grove-Thumb_Joystick.jpg)

:::提示
如果我们没有 Grove Base Shield，我们也可以直接将 Grove-Thumb Joystick 连接到 Seeeduino，如下所示。
:::

| Seeeduino | Grove - Thumb Joystick |
|-----------------|-------------------------|
| 5V        | 红色线                 |
| GND       | 黑色线                 |
| A1        | 白色线                 |
| A0        | 黄色线                 |

#### 软件

- **步骤 1.** 将下面的代码复制并粘贴到一个新的 Arduino 草图中。

```c
/*
  Thumb Joystick demo v1.0
  by:https://www.seeedstudio.com
  connect the module to A0&A1 for using;
*/

void setup()
{
    Serial.begin(9600);
}

void loop()
{
    int sensorValue1 = analogRead(A0);
    int sensorValue2 = analogRead(A1);

    Serial.print("The X and Y coordinate is:");
    Serial.print(sensorValue1, DEC);
    Serial.print(",");
    Serial.println(sensorValue2, DEC);
    Serial.println(" ");
    delay(200);
}
```

- **步骤 2.** 你可以通过打开串行监视器来检查输出模拟信号的值。

![](https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/img/Grove-Thumd_Joystick_Result.jpg)

Arduino 的模拟端口输出的值可以通过以下公式转换为对应的电阻值：R=(float)(1023-sensorValue)*10/sensorValue。

### 使用 Codecraft 编程

#### 硬件

**步骤 1.** 将 Grove - Thumb Joystick 连接到 Base Shield 的 A0 端口。

**步骤 2.** 将 Base Shield 插入你的 Seeeduino/Arduino。

**步骤 3.** 通过 USB 线缆将 Seeeduino/Arduino 连接到你的电脑。

#### 软件

**步骤 1.** 打开 [Codecraft](https://ide.chmakered.com/)，添加 Arduino 支持，并将一个主程序拖入工作区。

:::提示
如果你是第一次使用 Codecraft，请也查看 [使用 Arduino 的 Codecraft 指南](https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/)。

:::

**步骤 2.** 按照下面的图片拖拽相应的代码块，或者打开本页面底部可下载的 cdc 文件。

![cc](https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/img/cc_Thumb_Joystick.png)

将程序上传到你的 Arduino/Seeeduino。

:::成功提示
当代码上传完成后，你会在串行监视器中看到 X 和 Y 的坐标显示。
:::

### 使用树莓派（配合树莓派 Grove Base Hat）

#### 硬件

- **步骤 1**. 本项目所需物品：

| 树莓派 | 树莓派 Grove Base Hat | Grove - Thumb Joystick |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/img/Bgjoy1_small.jpg)|
|[立即获取](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即获取](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[立即获取](https://www.seeedstudio.com/Grove-Thumb-Joystick-p-935.html)|

- **步骤 2**. 将 Grove Base Hat 插入树莓派。
- **步骤 3**. 将 Thumb Joystick 连接到 Base Hat 的 A0 端口。
- **步骤 4**. 通过 USB 线缆将树莓派连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/img/Thumb_Hat.jpg)

::::提示
在步骤 3 中，你可以将拇指摇杆连接到 **任何模拟端口**，但请确保你根据相应的端口号更改命令。
:::

#### 软件

:::警告
如果你使用的是 **带有 Raspberrypi OS >= Bullseye 的树莓派**，你必须 **仅使用 Python3** 执行这条命令。
:::

- **步骤 1**. 按照 [设置软件](https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation) 指南配置开发环境。
- **步骤 2**. 通过克隆 grove.py 库来下载源文件。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **步骤 3**. 执行以下命令来运行代码。

```
cd grove.py/grove
python3 grove_thumb_joystick.py 0

```

:::注意
你可以使用命令 ++python grove_thumb_joystick.py 引脚++ 来执行程序，其中引脚可以是 ADC 组中的 {0, 2, 4, 6} 之一，并将设备连接到对应的插槽 {A0, A2, A4, A6}。
:::

以下是 grove_thumb_joystick.py 代码的示例。

```python

import math
import sys
import time
from grove.adc import ADC


class GroveThumbJoystick:

    def __init__(self, channelX, channelY):
        self.channelX = channelX
        self.channelY = channelY
        self.adc = ADC()

    @property
    def value(self):
        return self.adc.read(self.channelX), self.adc.read(self.channelY)

Grove = GroveThumbJoystick


def main():
    from grove.helper import SlotHelper
    sh = SlotHelper(SlotHelper.ADC)
    pin = sh.argv2pin()

    sensor = GroveThumbJoystick(int(pin), int(pin + 1))

    while True:
        x, y = sensor.value
        if x > 900:
            print('Joystick Pressed')
        print("X, Y = {0} {1}".format(x, y))
        time.sleep(.2)

if __name__ == '__main__':
    main()


```

:::成功提示
如果一切顺利，你将能够看到以下结果：
:::

```python

pi@raspberrypi:~/grove.py/grove $ python3 grove_thumb_joystick.py 0
Hat Name = 'Grove Base Hat RPi'
X, Y = 506 484
X, Y = 484 484
X, Y = 506 484
X, Y = 506 487
Joystick Pressed
X, Y = 999 485
X, Y = 310 736
X, Y = 681 484
Joystick Pressed
X, Y = 999 277
Joystick Pressed
X, Y = 999 487
X, Y = 506 484
X, Y = 501 486
X, Y = 509 484
X, Y = 511 486
X, Y = 510 485
^CTraceback (most recent call last):
  File "grove_thumb_joystick.py", line 69, in <module>
    main()
  File "grove_thumb_joystick.py", line 66, in main
    time.sleep(.2)
KeyboardInterrupt

```

你可以通过简单地按下 ++ctrl+c++ 来退出此程序。

:::提示
你可能已经注意到，对于模拟端口，丝印引脚编号类似于 **A1, A0**，但在命令中我们使用的参数是 **0** 和 **1**，与数字端口相同。因此，请确保你将模块插入正确的端口，否则可能会出现引脚冲突。
:::

### 使用树莓派（配合 GrovePi_Plus）

#### 硬件

- **步骤 1.** 准备以下物品：

| 树莓派 | GrovePi_Plus | Grove - Thumb Joystick |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/img/Bgjoy1_small.jpg)|
|[立即获取](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即获取](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即获取](https://www.seeedstudio.com/Grove-Thumb-Joystick-p-935.html)|

- **步骤 2.** 将 GrovePi_Plus 插入树莓派。
- **步骤 3.** 将 Grove-Thumb Joystick 连接到 GrovePi_Plus 的 **A0** 端口。
- **步骤 4.** 通过 USB 线缆将树莓派连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/img/Pi_Joystick%20connection.jpg)

#### 软件

:::警告
如果你使用的是 **带有 Raspberrypi OS >= Bullseye 的树莓派**，你必须 **仅使用 Python3** 执行命令行。
:::

- **步骤 1.** 导航到示例目录。

```
cd yourpath/GrovePi/Software/Python/

```

- **步骤 2.** 查看代码

```
nano grove_thumb_joystick.py   # "Ctrl+x" to exit #
```

```python
import time
import grovepi

# Connect the Grove Thumb Joystick to analog port A0

# GrovePi Port A0 uses Arduino pins 0 and 1
# GrovePi Port A1 uses Arduino pins 1 and 2
# Don't plug anything into port A1 that uses pin 1
# Most Grove sensors only use 3 of their 4 pins, which is why the GrovePi shares Arduino pins between adjacent ports
# If the sensor has a pin definition SIG,NC,VCC,GND, the second (white) pin is not connected to anything

# If you wish to connect two joysticks, use ports A0 and A2 (skip A1)

# Uses two pins - one for the X axis and one for the Y axis
# This configuration means you are using port A0
xPin = 0
yPin = 1
grovepi.pinMode(xPin,"INPUT")
grovepi.pinMode(yPin,"INPUT")

# The Grove Thumb Joystick is an analog device that outputs analog signal ranging from 0 to 1023
# The X and Y axes are two ~10k potentiometers and a momentary push button which shorts the x axis

# My joystick produces slightly different results to the specifications found on the url above
# I've listed both here:

# Specifications
#     Min  Typ  Max  Click
#  X  206  516  798  1023
#  Y  203  507  797

# My Joystick
#     Min  Typ  Max  Click
#  X  253  513  766  1020-1023
#  Y  250  505  769
while True:
    try:
        # Get X/Y coordinates
        x = grovepi.analogRead(xPin)
        y = grovepi.analogRead(yPin)

        # Calculate X/Y resistance
        Rx = (float)(1023 - x) * 10 / x
        Ry = (float)(1023 - y) * 10 / y

        # Was a click detected on the X axis?
        click = 1 if x >= 1020 else 0

        print "x =", x, " y =", y, " Rx =", Rx, " Ry =", Ry, " click =", click
        time.sleep(.5)

    except IOError:
        print "Error"
```

- **步骤 3.** 运行示例程序。

```
sudo python3 grove_thumb_joystick.py
```

- **步骤 4.** 我们将在终端看到如下输出显示。

![enter image description here](https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/img/pi_result.png)|

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/res/Eagle_Design_Files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>
## 资源

---------

- **[Eagle]** [Grove-Thumb Joystick 原理图](https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/res/Eagle_Design_Files.zip)
- **[Datasheet]** [模拟摇杆数据手册](https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/res/Analog_Joystick_Datasheet.jpg)
- **[PDF]** [摇杆原理图 PDF 文件](https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/res/Joystick.pdf)
- **[Codecraft]** [CDC 文件](https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/res/Grove_Thumb_Joystick_CDC_File.zip)

## 项目

**树莓派音乐服务器**：树莓派项目的第一步。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/kishima7/raspberry-pi-music-server-f5a0ae/embed' width='350'></iframe>

**构建自定义的Minecraft控制器**：使用GrovePi构建自定义的Minecraft控制器。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/dexterindustries/build-a-custom-minecraft-controller-d55d9c/embed' width='350'></iframe>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您在使用我们的产品时能够拥有最顺畅的体验。我们提供多种沟通渠道，以满足不同用户的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
