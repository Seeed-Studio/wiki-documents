---
title: Grove - 声音传感器
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-Sound_Sensor/
slug: /cn/Grove-Sound_Sensor
last_update:
  date: 01/06/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/img/page_small_1.jpg)

Grove - 声音传感器可以检测环境的声音强度。该模块的主要组件是一个简单的麦克风，基于 L358 放大器和驻极体麦克风。该模块的输出是模拟信号，可以很容易地被 Seeeduino 采样和测试。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/EhZ7uDvoALE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p style={{}}><a href="https://www.seeedstudio.com/Grove-Sound-Sensor-p-752.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="{200}" height="{38}" border="{0}" /></a></p>

## 特性

* 易于使用
* 提供模拟输出信号
* 易于与 Grove 电路输入端的逻辑模块集成

:::warning
    此声音传感器用于检测周围是否有声音，请不要使用该模块来收集声音信号。例如，您可以使用它制作声控灯，但不能用作录音设备。
:::

## 规格参数

|项目|值|
|-----|------|
|工作电压范围| 5 V |
|工作电流(Vcc=5V)|4~5 mA|
|电压增益(V=6V, f=1kHz)|26 dB|
|麦克风灵敏度(1kHz)|-60~-56dBV/Pa|
|麦克风阻抗|2.2k Ohm|
|麦克风频率|16-20 kHz|
|麦克风信噪比|54 dB|

:::tip
    有关 Grove 模块的更多详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    上述提到的支持平台是/是该模块软件或理论兼容性的指示。在大多数情况下，我们只为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

## 开始使用

:::note
    如果这是您第一次使用Arduino，我们强烈建议您在开始之前先查看[Arduino入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

### 与Arduino一起使用

**硬件**

* **步骤1.** 准备以下物品：

|Seeeduino V4.2| Base Shield|Grove-声音传感器|
|--------------|------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/img/page_small_1.jpg)|
|[立即获取](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即获取](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即获取](https://www.seeedstudio.com/Grove-Sound-Sensor-p-752.html)|

* **步骤2.** 将Grove-声音传感器连接到Grove-Base Shield的**A0**端口。
* **步骤3.** 将Grove - Base Shield插入Seeeduino。
* **步骤4.** 通过USB线将Seeeduino连接到PC。

![](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/img/1_connect.jpg)

:::note
 如果我们没有Grove Base Shield，我们也可以直接将Grove-声音传感器连接到Seeeduino，如下所示。
:::

| Seeeduino     | Grove-声音传感器      |
|---------------|-------------------------|
| 5V            | Red                     |
| GND           | Black                   |
| A1            | White                   |
| A0            | Yellow                  |

**软件**

* **步骤1.** 请将下面的代码复制到Arduino IDE并上传到arduino。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

```c
// Grove - 声音传感器测试代码
// loovee @ 2016-8-30

const int pinAdc = A0;

void setup()
{
    Serial.begin(115200);
    //Serial.println("Grove - 声音传感器测试...");
}

void loop()
{
    long sum = 0;
    for(int i=0; i<32; i++)
    {
        sum += analogRead(pinAdc);
    }

    sum >>= 5;

    Serial.println(sum);
    delay(10);
}

```

* **步骤2.** 点击**串口 > 绘图器**来获取传感器的变化曲线。请制造一些噪音来查看数值的变化。

![](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/images/sound_raw.png)

### 与Codecraft一起使用

#### 硬件

**步骤1.** 将Grove - 声音传感器连接到Base Shield的A0端口。

**步骤2.** 将Base Shield插入您的Seeeduino/Arduino。

**步骤3.** 通过USB线将Seeeduino/Arduino连接到您的PC。

#### 软件

**步骤1.** 打开[Codecraft](https://ide.chmakered.com/)，添加Arduino支持，并拖拽一个主程序到工作区域。

:::note
    如果这是您第一次使用Codecraft，请同时查看[使用Arduino的Codecraft指南](https://wiki.seeedstudio.com/cn/Guide_for_Codecraft_using_Arduino/)。
:::

**步骤2.** 按照下图拖拽代码块或打开可在本页面末尾下载的cdc文件。

![cc](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/img/cc_Sound_Sensor.png)

将程序上传到您的Arduino/Seeeduino。

:::success
    当代码上传完成后，您将在串口监视器中看到显示的声音数值。
:::

### 与Raspberry Pi一起使用（使用Grove Base Hat for Raspberry Pi）

#### 硬件

* **步骤1**. 本项目中使用的物品：

| Raspberry pi | Grove Base Hat for RasPi| Grove - 声音传感器|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/img/page_small_1.jpg)|
|[立即获取](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即获取](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[立即获取](https://www.seeedstudio.com/Grove-Sound-Sensor-p-752.html)|

* **步骤2**. 将Grove Base Hat插入Raspberry。
* **步骤3**. 将Grove - 声音传感器连接到Base Hat的A0端口。
* **步骤4**. 通过USB线将Raspberry Pi连接到PC。

![](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/img/Sound_Hat.jpg)

:::note
    对于步骤3，您可以将声音传感器连接到**任何模拟端口**，但请确保您使用相应的端口号更改命令。
:::

#### 软件

:::note
     如果您使用的是**Raspberry Pi with Raspberrypi OS >= Bullseye**，您必须**仅使用Python3**运行此命令行。
:::

* **步骤1**. 按照[设置软件](https://wiki.seeedstudio.com/cn/Grove_Base_Hat_for_Raspberry_Pi/#installation)来配置开发环境。
* **步骤2**. 通过克隆grove.py库来下载源文件。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

* **步骤3**. 执行以下命令来运行代码。

```
cd grove.py/grove
python3 grove_sound_sensor.py 0

```

以下是grove_sound_sensor.py代码。

```python

import math
import sys
import time
from grove.adc import ADC


class GroveSoundSensor:

    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()

    @property
    def sound(self):
        value = self.adc.read(self.channel)
        return value

Grove = GroveSoundSensor


def main():
    if len(sys.argv) < 2:
        print('Usage: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)

    sensor = GroveSoundSensor(int(sys.argv[1]))

    print('Detecting sound...')
    while True:
        print('Sound value: {0}'.format(sensor.sound))
        time.sleep(.3)

if __name__ == '__main__':
    main()


```

:::success
    如果一切顺利，您将能够看到以下结果
:::

```python

pi@raspberrypi:~/grove.py/grove $ python3 grove_sound_sensor.py 0 
Detecting sound...
Sound value: 499
Sound value: 525
Sound value: 529
Sound value: 493
Sound value: 457
Sound value: 457
Sound value: 503
Sound value: 537
Sound value: 606
Sound value: 614
Sound value: 661
^CTraceback (most recent call last):
  File "grove_sound_sensor.py", line 67, in <module>
    main()
  File "grove_sound_sensor.py", line 64, in main
    time.sleep(.3)
KeyboardInterrupt


```

您可以通过简单地按下 ++ctrl+c++ 来退出此程序。

:::note
        您可能已经注意到，对于模拟端口，丝印引脚编号类似于 **A1, A0**，但在命令中我们使用参数 **0** 和 **1**，就像数字端口一样。所以请确保您将模块插入正确的端口，否则可能会出现引脚冲突。
:::

### 与 Raspberry Pi 一起使用（配合 GrovePi_Plus）

**硬件**

* **步骤 1.** 准备以下物品：

| Raspberry pi | GrovePi_Plus|Grove-声音传感器|Grove-蓝色LED|
|--------------|-------------|-----------------|----------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/img/groveblue%20led.jpg)|
|[立即获取](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即获取](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[立即获取](https://www.seeedstudio.com/Grove-Sound-Sensor-p-752.html)|[立即获取](https://www.seeedstudio.com/Grove---Blue-LED-p-1139.html)|

* **步骤 2.** 将 GrovePi_Plus 插入 Raspberry。

* **步骤 3.** 将 Grove-声音传感器连接到 GrovePi_Plus 的 **A0** 端口，将 Grove-蓝色LED连接到 GrovePi_Plus 的 **D5** 端口

* **步骤 4.** 通过USB线将 Raspberry 连接到PC。

![](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/img/2_connect.jpg)

**软件**

* **步骤 1.** 按照 [设置软件](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) 配置开发环境。

* **步骤 2.** 按照 [更新固件](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/) 更新 GrovePi 的最新固件。

:::note
     如果您使用的是 **Raspberry Pi with Raspberrypi OS >= Bullseye**，您必须 **仅使用 Python3** 运行此命令行。
:::

:::tip
    在本wiki中，我们使用路径 **~/GrovePi/** 而不是 **/home/pi/Desktop/GrovePi**，您需要确保步骤2和步骤3使用相同的路径。
:::

:::note
    我们强烈建议您更新固件，否则某些传感器可能会出现错误。
:::

* **步骤 3.** Git克隆Github仓库。

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

* **步骤 4.** 导航到演示目录：

```
cd yourpath/GrovePi/Software/Python/
```

这是 grove_sound_sensor.py 代码。

```python

#!/usr/bin/env python
#
# GrovePi 使用 Grove 声音传感器和 Grove LED 的示例
#
# GrovePi 连接 Raspberry Pi 和 Grove 传感器。您可以在这里了解更多关于 GrovePi 的信息：http://www.dexterindustries.com/GrovePi
#
# 模块：
#  https://www.seeedstudio.com/wiki/Grove_-_Sound_Sensor
#  https://www.seeedstudio.com/wiki/Grove_-_LED_Socket_Kit
#
# 对此示例有疑问？请在论坛上提问：http://forum.dexterindustries.com/c/grovepi
#
'''
## 许可证
MIT 许可证 (MIT)
GrovePi for the Raspberry Pi: 一个将 Grove 传感器连接到 Raspberry Pi 的开源平台。
版权所有 (C) 2017  Dexter Industries
特此免费授予任何获得本软件及相关文档文件（"软件"）副本的人
不受限制地处理软件的权利，包括但不限于使用、复制、修改、合并、
发布、分发、再许可和/或销售软件副本的权利，并允许向其提供软件的
人员这样做，但须符合以下条件：
上述版权声明和本许可声明应包含在软件的所有副本或重要部分中。
本软件按"原样"提供，不提供任何形式的明示或暗示保证，包括但不限于
对适销性、特定用途适用性和非侵权性的保证。在任何情况下，作者或
版权持有人均不对任何索赔、损害或其他责任负责，无论是在合同诉讼、
侵权行为还是其他方面，由软件或软件的使用或其他交易引起、
由此产生或与之相关。
'''

import time
import grovepi

# 将 Grove 声音传感器连接到模拟端口 A0
# SIG,NC,VCC,GND
sound_sensor = 0

# 将 Grove LED 连接到数字端口 D5
# SIG,NC,VCC,GND
led = 5

grovepi.pinMode(sound_sensor,"INPUT")
grovepi.pinMode(led,"OUTPUT")

# 点亮LED的阈值 400.00 * 5 / 1024 = 1.95v
threshold_value = 400

while True:
    try:
        # 读取声音级别
        sensor_value = grovepi.analogRead(sound_sensor)

        # 如果声音大，点亮LED，否则熄灭
        if sensor_value > threshold_value:
            grovepi.digitalWrite(led,1)
        else:
            grovepi.digitalWrite(led,0)

        print("sensor_value = %d" %sensor_value)
        time.sleep(.5)

    except IOError:
        print ("Error")
```

* **步骤 5.** 运行演示。

```
sudo python3 grove_sound_sensor.py
```

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/resources/Grove%20-%20Sound%20Sensor.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

* [**Eagle**][Eagle格式的原理图和PCB](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/resources/Grove%20-%20Sound%20Sensor.zip)
* [**PDF**][PDF格式的原理图](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/res/Grove%20-%20Sound%20Sensor%20v1.6%20Schematic.pdf)
* [**PDF**][PDF格式的PCB](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/res/Grove%20-%20Sound%20Sensor%20v1.6%20PCB.pdf)
* [**数据手册**][LM358.PDF](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/res/LM358.pdf)
* [**Codecraft**][CDC文件](https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/res/Grove_Sound_Sensor_CDC_File.zip)

## 项目

**创建多任务物联网Wi-Fi传感器**：本教程展示了如何制作一个联网传感器，同时利用Energia和TI LaunchPad的独特多任务功能。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/adrianf/create-a-multi-tasking-iot-wi-fi-sensor-9d7fdf/embed' width='350'></iframe>

**使用Wio-Link和Node-Red的LED声音计量器**：SeeedStudio Grove声音传感器和LED灯带连接到Wio-Link，由Node-Red流程驱动。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/potnik/led-sound-meter-using-wio-link-and-node-red-259e02/embed' width='350'></iframe>

**声音传感器Grove模块**：

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/N19VfMYyn60" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/NfFlz8KEFxw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## 可升级为工业传感器

使用SenseCAP [S2110控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)和[S2100数据记录器](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将Grove转换为LoRaWAN®传感器。Seeed不仅帮助您进行原型设计，还为您提供了使用SenseCAP系列坚固[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

IP66外壳、蓝牙配置、与全球LoRaWAN®网络的兼容性、内置19Ah电池以及APP的强大支持，使[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device)成为工业应用的最佳选择。该系列包括土壤湿度、空气温湿度、光照强度、CO2、EC传感器以及8合1气象站。为您下一个成功的工业项目尝试最新的SenseCAP S210x。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>

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