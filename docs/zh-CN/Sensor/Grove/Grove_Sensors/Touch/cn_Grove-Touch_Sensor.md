---
description: Grove - 触摸传感器
title: Grove - 触摸传感器
keywords:
- Grove Grove_Sensors Touch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Touch_Sensor
last_update:
  date: 1/19/2023
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/Grove-Touch_Sensor/img/surface.jpg)

Grove - 触摸传感器让您可以用触摸来替代按压。它可以检测手指靠近时电容的变化。这意味着无论您的手指直接触摸触摸板还是只是靠近触摸板，Grove - 触摸传感器都会输出高电平。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Touch-Sensor-p-747.html)

## 规格参数

- 工作电压：2.0 - 5.5V
- 工作电流(Vcc=3V)：1.5 - 3.0μA
- 工作电流(VDD=3V)：3.5 - 7.0μA
- 输出响应时间：60 - 220mS
- 使用芯片：TTP223-BA6

:::tip
有关Grove模块的更多详细信息，请参考[Grove系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
上述提到的支持平台是/是该模块软件或理论兼容性的指示。在大多数情况下，我们只为Arduino平台提供软件库或代码示例。不可能为所有可能的MCU平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

**可选功能**

| AHLB                     | TOG         | LPMB       | MOTB         | SLRFTB          | RST       | Q           | OPDO            |
|--------------------------|-------------|------------|--------------|-----------------|-----------|-------------|-----------------|
| 输出高电平有效/低电平有效 | 切换模式 | 功耗模式 | 最大开启时间 | 采样长度 | 复位引脚 | CMOS输出 | 开漏模式 |
| V                        | V           | 0          | 1            | 1               | X         | V           | X               |
| 高电平有效              | 禁用    | 低功耗        | 无限     | 1.6 毫秒        | 不适用       | 存在     | 不适用             |

## 开始使用

### 与 Arduino 一起使用

这个演示将向您展示如何开启/关闭一个LED。

#### 硬件

- **步骤 1.** 准备以下物品：

| Seeeduino V4.2 | Base Shield|  Grove-Touch_Sensor |Grove-LED|
|--------------|-------------|-----------------|-----|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Touch_Sensor/img/45d_small.jpg)|![enter image description](https://files.seeedstudio.com/wiki/Grove-Red_LED/img/45d_small.jpg)|
|[立即获取](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即获取](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即获取](https://www.seeedstudio.com/Grove-Touch-Sensor-p-747.html)|[立即获取](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html)|

- **步骤 2.** 将 Grove-Touch_Sensor 连接到 Grove-Base Shield 的 **D2** 端口。
- **步骤 3.** 将 Grove-LED 连接到 Grove-Base Shield 的 **D3** 端口。
- **步骤 4.** 将 Grove - Base Shield 插入 Seeeduino。
- **步骤 5.** 通过 USB 线缆将 Seeeduino 连接到 PC。

![with_ardu](https://files.seeedstudio.com/wiki/Grove-Touch_Sensor/img/with_ardu.jpg)

#### 软件

- **步骤 1.** 请复制并粘贴以下代码到新的 Arduino 草图中。

```c
const int TouchPin=2;
const int ledPin=3;

void setup() {
    pinMode(TouchPin, INPUT);
    pinMode(ledPin,OUTPUT);
}

void loop() {
    int sensorValue = digitalRead(TouchPin);
    if(sensorValue==1)
    {
        digitalWrite(ledPin,HIGH);
    }
    else
    {
        digitalWrite(ledPin,LOW);
    }
}
```

**步骤 2.** 观察 LED 的开启和关闭。

### 与 Codecraft 一起使用

#### 硬件

**步骤 1.** 将 Grove - Touch Sensor 连接到 Base Shield 的 D2 端口，并将 Grove - Red LED 连接到 D3 端口。

**步骤 2.** 将 Base Shield 插入您的 Seeeduino/Arduino。

**步骤 3.** 通过 USB 线缆将 Seeeduino/Arduino 连接到您的 PC。

#### 软件

**步骤 1.** 打开 [Codecraft](https://ide.chmakered.com/)，添加 Arduino 支持，并拖拽一个主程序到工作区域。

:::note
如果这是您第一次使用 Codecraft，请参阅 [使用 Arduino 的 Codecraft 指南](https://wiki.seeedstudio.com/cn/Guide_for_Codecraft_using_Arduino/)。
:::

**步骤 2.** 按照下图拖拽代码块或打开可在本页面末尾下载的 cdc 文件。

![cc](https://files.seeedstudio.com/wiki/Grove_Touch_Sensor/image/cc_Touch_Sensor.png)

将程序上传到您的 Arduino/Seeeduino。

:::tip
当代码上传完成后，当您触摸触摸传感器时 LED 将会点亮。
:::

### 与 Raspberry Pi 一起使用（使用 Grove Base Hat for Raspberry Pi）

#### 硬件

- **步骤 1**. 本项目中使用的物品：

| Raspberry pi | Grove Base Hat for RasPi| Grove - Touch Sensor|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Touch_Sensor/img/45d_small.jpg)|
|[立即获取](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即获取](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[立即获取](https://www.seeedstudio.com/Grove-Touch-Sensor-p-747.html)|

- **步骤 2**. 将 Grove Base Hat 插入 Raspberry。
- **步骤 3**. 将触摸传感器连接到 Base Hat 的端口 12。
- **步骤 4**. 通过 USB 线缆将 Raspberry Pi 连接到 PC。

![](https://files.seeedstudio.com/wiki/Grove-Touch_Sensor/img/Touch_Hat.jpg)

:::note
对于步骤 3，您可以将触摸传感器连接到**任何 GPIO 端口**，但请确保您使用相应的端口号更改命令。
:::

#### 软件

:::caution
如果您使用的是 **Raspberry Pi with Raspberrypi OS >= Bullseye**，您必须**仅使用 Python3** 运行此命令行。
:::

- **步骤 1**. 按照 [设置软件](https://wiki.seeedstudio.com/cn/Grove_Base_Hat_for_Raspberry_Pi/#installation) 配置开发环境。
- **步骤 2**. 通过克隆 grove.py 库下载源文件。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **步骤 3**. 执行以下命令运行代码。

```
cd grove.py/grove
python3 grove_touch_sensor.py 12

```

以下是 grove_touch_sensor.py 代码。

```python

import time
from grove.gpio import GPIO


class GroveTouchSensor(GPIO):
    def __init__(self, pin):
        super(GroveTouchSensor, self).__init__(pin, GPIO.IN)
        self._last_time = time.time()

        self._on_press = None
        self._on_release = None

    @property
    def on_press(self):
        return self._on_press

    @on_press.setter
    def on_press(self, callback):
        if not callable(callback):
            return

        if self.on_event is None:
            self.on_event = self._handle_event

        self._on_press = callback

    @property
    def on_release(self):
        return self._on_release

    @on_release.setter
    def on_release(self, callback):
        if not callable(callback):
            return

        if self.on_event is None:
            self.on_event = self._handle_event

        self._on_release = callback

    def _handle_event(self, pin, value):
        t = time.time()
        dt, self._last_time = t - self._last_time, t

        if value:
            if callable(self._on_press):
                self._on_press(dt)
        else:
            if callable(self._on_release):
                self._on_release(dt)

Grove = GroveTouchSensor


def main():
    import sys

    if len(sys.argv) < 2:
        print('Usage: {} pin'.format(sys.argv[0]))
        sys.exit(1)

    touch = GroveTouchSensor(int(sys.argv[1]))

    def on_press(t):
        print('Pressed')
    def on_release(t):
        print("Released.")

    touch.on_press = on_press
    touch.on_release = on_release

    while True:
        time.sleep(1)


if __name__ == '__main__':
    main()


```

:::tip
    如果一切顺利，您将能够看到以下结果
:::

```python

pi@raspberrypi:~/grove.py/grove $ python3 grove_touch_sensor.py 12
Pressed
Released.
Pressed
Released.
Pressed
Released.
Pressed
Released.
^CTraceback (most recent call last):
  File "grove_touch_sensor.py", line 110, in <module>
    main()
  File "grove_touch_sensor.py", line 106, in main
    time.sleep(1)
KeyboardInterrupt

```

您可以通过简单地按下 `ctrl`+`c` 来退出此程序。

### 与 Raspberry Pi 一起使用（配合 GrovePi_Plus）

#### 硬件

- **步骤 1.** 准备以下物品：

<!--false link-->
| Raspberry pi | GrovePi_Plus | Grove-触摸传感器 |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Touch_Sensor/img/45d_small.jpg)|
|[立即获取](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即获取](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[立即获取](https://www.seeedstudio.com/Grove-Touch-Sensor-p-747.html)|

- **步骤 2.** 将 GrovePi_Plus 插入 Raspberry。
- **步骤 3.** 将 Grove-触摸传感器连接到 GrovePi_Plus 的 **D2** 端口。
- **步骤 4.** 通过 USB 线缆将 Raspberry 连接到 PC。

![with_rpi](https://files.seeedstudio.com/wiki/Grove-Touch_Sensor/img/with_rpi.jpg)

#### 软件

:::caution
如果您使用的是 **Raspberry Pi with Raspberrypi OS >= Bullseye**，您必须**仅使用 Python3** 运行此命令行。
:::

- **步骤 1.** 按照 [设置软件](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) 来配置开发环境。
- **步骤 2.** Git 克隆 Github 仓库。

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **步骤 3.** 执行以下命令来使用此传感器，请将端口从 D4 更改为 D2。

```bash
python3 grove_touch_sensor.py
```

```python
#!/usr/bin/env python
#
# GrovePi Example for using the Grove Touch Sensor (https://www.seeedstudio.com/wiki/Grove_-_Touch_Sensor)
#
# The GrovePi connects the Raspberry Pi and Grove sensors.  You can learn more about GrovePi here:  http://www.dexterindustries.com/GrovePi
#
# Have a question about this example?  Ask on the forums here:  http://forum.dexterindustries.com/c/grovepi
#
'''
## License
The MIT License (MIT)
GrovePi for the Raspberry Pi: an open source platform for connecting Grove Sensors to the Raspberry Pi.
Copyright (C) 2017  Dexter Industries
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
'''
import time
import grovepi

# Connect the Grove Touch Sensor to digital port D2
# SIG,NC,VCC,GND
touch_sensor = 2

grovepi.pinMode(touch_sensor,"INPUT")

while True:
    try:
        print(grovepi.digitalRead(touch_sensor))
        time.sleep(.5)

    except IOError:
        print ("Error")

```

结果如下：

![](https://files.seeedstudio.com/wiki/Grove-Touch_Sensor/img/rpi_result.jpg)

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Touch_Sensor/res/Touch_sensor_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Eagle]** [Grove-Touch_Sensor 原理图](https://files.seeedstudio.com/wiki/Grove-Touch_Sensor/res/Touch_sensor_Eagle_File.zip)
- **[PDF]** [TTP223](https://files.seeedstudio.com/wiki/Grove-Touch_Sensor/res/TTP223.pdf)
- **[Codecraft]** [CDC 文件](https://files.seeedstudio.com/wiki/Grove_Touch_Sensor/resource/Grove_Touch_Sensor_CDC_File.zip)

## 项目

**使用 Grove 触摸传感器控制 Grove LED**：如何连接和使用 Grove 触摸传感器来控制 Grove LED 套件。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/user50338573/using-grove-touch-sensor-to-control-grove-led-56a5ed/embed' width='350'></iframe>

**触摸传感器 Grove 模块**：

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/VFKYYG_hNUE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/vPkf4czFQsY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

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