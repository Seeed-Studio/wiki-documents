---
description: Grove - 滑动电位器
title: Grove - 滑动电位器
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Slide_Potentiometer
last_update:
  date: 1/6/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Sliding1.JPG) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Sliding1.JPG" alt="pir" width={600} height="auto" /></p>

Grove - 滑动电位器模块集成了一个线性可变电阻器，最大阻值为10KΩ。当您将滑块从一侧移动到另一侧时，其输出电压将从0V变化到您所施加的Vcc电压。它通过标准的4针**Grove连接线**连接到其他Grove模块。其中三个引脚分别连接到OUT（引脚1）、Vcc（引脚3）和GND（引脚4），而第四个引脚（引脚2）连接到板载绿色指示LED。该LED用于直观地表示电位器上的电阻变化。


[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Slide-Potentiometer-p-1196.html)
特性
--------

-   30毫米长的滑动长度
-   线性电阻锥度
-   Grove兼容

:::tip
    有关Grove模块的更多详细信息，请参考[Grove系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::
应用创意
-----------------

以下是一些供您参考的项目。

| **Arduino音响**                                                  | **Arduino节拍盒**                                                    |
|----------------------------------------------------------------------|------------------------------------------------------------------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Recipe-Arduino_BoomBox.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Recipe-Arduino_BeatBox.jpg" alt="pir" width={600} height="auto" /></p>  |
| [立即制作！](https://community.seeedstudio.com/project_detail.html?id=171)       | [立即制作！](https://community.seeedstudio.com/project_detail.html?id=187)         |



规格参数
--------------

<table border="2" cellspacing="0" width="60%">
<tr>
<th scope="col">
项目
</th>
<th>
最小值
</th>
<th>
典型值
</th>
<th>
最大值
</th>
</tr>
<tr align="center">
<th scope="row">
电压（直流）
</th>
<td>
3.3V
</td>
<td>
5.0V
</td>
<td>
30V
</td>
</tr>
<tr align="center">
<th scope="row">
电流
</th>
<td>
-
</td>
<td>
-
</td>
<td>
30mA
</td>
</tr>
<tr align="center">
<th scope="row">
尺寸
</th>
<td colspan="3">
24mm x60mm
</td>
</tr>
<tr align="center">
<th height="22" scope="row">
净重
</th>
<td colspan="3">
8.6g
</td>
</tr>
<tr align="center">
<th height="22" scope="row">
旋转寿命
</th>
<td colspan="3">
&gt;15,000次循环
</td>
</tr>
<tr align="center">
<th height="22" scope="row">
总电阻
</th>
<td colspan="3">
10KΩ
</td>
</tr>
<tr align="center">
<th height="22" scope="row">
行程长度
</th>
<td colspan="3">
30mm
</td>
</tr>
<tr align="center">
<th height="22" scope="row">
总电阻公差
</th>
<td colspan="3">
+/- 20%
</td>
</tr>
</table>


支持的平台
-------------------

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|
:::caution
    上述提到的支持平台是/是该模块软件或理论兼容性的指示。在大多数情况下，我们只为Arduino平台提供软件库或代码示例。不可能为所有可能的MCU平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

入门指南
---------------

#### 作为可调电阻器

如下所示，Grove - 滑动电位器可以在任何MCU控制或独立项目中用作简单的滑动电位器。
<!-- ![](https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Sliding_justr.JPG) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Sliding_justr.JPG" alt="pir" width={600} height="auto" /></p>

### 独立使用

按照以下步骤使用此模块构建一个示例Grove电路，但不使用任何微控制器板：

1.  将滑动电位器模块连接到电路的输入端（电源模块的左侧）。在电路的输出端，您可以使用一系列用户界面模块（Grove - 红色LED、Grove - LED灯串、Grove - 迷你风扇、Grove - 蜂鸣器、Grove - 录音器等）
2.  电路完成后接通电源。
3.  现在可以使用滑动电位器模块来触发输出。例如：

    -   当与Grove - 红色LED输出模块配合使用时，观察到当您将滑块从GND移动到Vcc时，LED的亮度会增加。在Vcc位置，电位器的电阻最小，LED最亮。当滑动电位器与Grove - LED灯串模块一起使用时也可以看到相同的行为 - 通过将滑块向Vcc标记移动来施加更多电压，LED灯会变得更亮。
    -   同样，您可以使用滑动电位器来改变Grove - 迷你风扇的速度或Grove - 蜂鸣器模块发声的频率
    -   滑动电位器也可以用作任何电路的开/关开关。将滑块移动到Vcc位置来开启电路，向下移动到GND来关闭电路。

在选择电源模块方面，您可以使用Grove - USB电源模块或Grove - DC插孔电源模块来构建独立的Grove电路。

<!-- 链接有问题### With [Arduino](/cn/Arduino "Arduino") -->

#### 作为分压器

按照以下简单步骤使滑动电位器模块作为分压器工作：

<!-- 链接有问题1.When using the module in conjunction with an [Arduino](/cn/Arduino "Arduino") or a [Seeeduino](/cn/Seeeduino_v4.2 "Seeeduino"), use the Grove - Base Shield and connect the Grove - Slide Potentiometer module to the shield using a designated Grove Interface (e.g. Analog Port 0 as shown below). -->

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Sliding2.JPG) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Sliding2.JPG" alt="pir" width={600} height="auto" /></p>

2.使用USB线将开发板连接到PC。

3.上传以下示例代码。

```
int adcPin = A0; // select the input pin for the potentiometer
int ledPin = A1; // select the pin for the LED
int adcIn = 0;   // variable to store the value coming from the sensor
void setup()
{
    Serial.begin(9600); // init serial to 9600b/s
    pinMode(ledPin, OUTPUT); // set ledPin to OUTPUT
    Serial.println("Sliding Potentiometer Test Code!!");
}
void loop()
{
    // read the value from the sensor:
    adcIn = analogRead(adcPin);
    if(adcIn >= 500) digitalWrite(ledPin,HIGH);  // if adc in > 500, led light
    else digitalWrite(ledPin, LOW);
    Serial.println(adcIn);
    delay(100);
}
```

4.打开串口监视器。您应该看到来自ADC的一些数据。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Sliding_com.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Sliding_com.jpg" alt="pir" width={600} height="auto" /></p>

5.来回移动滑杆。串口数据会相应地改变。当输出电阻超过某个预设值时，板载指示LED也会点亮。

#### 作为HID设备

滑动电位器可以是一个有效的人机界面设备（HID），例如可以用于遥控玩具车的无线电控制器中。下图显示了控制面板上的两个滑动电位器 - 一个控制左轮的速度，另一个分别控制玩具车右轮的速度。现在您可以改变两个电机的速度并观察行为。您会看到如果您让右轮比左轮转得更快，汽车会向右转，如果您让左轮比右轮转得更快，汽车会向左转。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Car.JPG) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Car.JPG" alt="pir" width={600} height="auto" /></p>

### 使用Codecraft

#### 硬件

**步骤1.** 将Grove - 滑动电位器连接到Base Shield的A0端口。

**步骤2.** 将Base Shield插入您的Seeeduino/Arduino。

**步骤3.** 通过USB线将Seeeduino/Arduino连接到您的PC。

#### 软件

**步骤1.** 打开[Codecraft](https://ide.chmakered.com/)，添加Arduino支持，并将主程序拖到工作区域。

:::note
    如果这是您第一次使用Codecraft，请参阅[使用Arduino的Codecraft指南](https://wiki.seeedstudio.com/cn/Guide_for_Codecraft_using_Arduino/)。
:::
**步骤2.** 按照下图拖拽代码块或打开可在本页面末尾下载的cdc文件。

<!-- ![cc](https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/cc_Slide_Potentiometer.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/cc_Slide_Potentiometer.png" alt="pir" width={600} height="auto" /></p>

将程序上传到您的Arduino/Seeeduino。

:::success
    代码上传完成后，滑动滑动电位器，您将在串口监视器中看到传感器值显示。如果您滑动超过电位器的一半，其上的LED会点亮。
:::
### 使用树莓派（配合Grove Base Hat for Raspberry Pi）

#### 硬件

- **步骤1**. 本项目使用的物品：

| Raspberry pi | Grove Base Hat for RasPi| Grove - 滑动电位器 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Slide_small.JPG" alt="pir" width={600} height="auto" /></p>|
|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即购买](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[立即购买](https://www.seeedstudio.com/Grove-Slide-Potentiometer-p-1196.html)|

- **步骤 2**. 将 Grove Base Hat 插入树莓派。
- **步骤 3**. 将滑动电位器连接到 Base Hat 的 A0 端口。
- **步骤 4**. 通过 USB 线缆将树莓派连接到 PC。


<!-- ![](https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Slide_Hat.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Slide_Hat.jpg" alt="pir" width={600} height="auto" /></p>


:::note
    对于步骤 3，您可以将滑动电位器连接到**任何模拟端口**，但请确保您使用相应的端口号更改命令。
:::

#### 软件

:::note
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
python3 grove_slide_potentiometer.py 0
```

以下是 grove_slide_potentiometer.py 代码。

```python

import math
import sys
import time
from grove.adc import ADC


class GroveSlidePotentiometer(ADC):
    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()
    
    @property
    def value(self):
        return self.adc.read(self.channel)


Grove = GroveSlidePotentiometer


def main():
    if len(sys.argv) < 2:
        print('Usage: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)

    sensor = GroveSlidePotentiometer(int(sys.argv[1]))

    while True:
        print('Slide potentiometer value: {}'.format(sensor.value))
        time.sleep(.2)


if __name__ == '__main__':
    main()

```

:::success
    如果一切正常，您将能够看到以下结果
:::   
```python

pi@raspberrypi:~/grove.py/grove $ python3 grove_slide_potentiometer.py 0
Slide potentiometer value: 987
Slide potentiometer value: 988
Slide potentiometer value: 986
Slide potentiometer value: 8
Slide potentiometer value: 2
Slide potentiometer value: 0
Slide potentiometer value: 1
Slide potentiometer value: 0
Slide potentiometer value: 24
Slide potentiometer value: 0
Slide potentiometer value: 0
Slide potentiometer value: 11
Slide potentiometer value: 995
Slide potentiometer value: 999
Slide potentiometer value: 999
^CTraceback (most recent call last):
  File "grove_slide_potentiometer.py", line 66, in <module>
    main()
  File "grove_slide_potentiometer.py", line 62, in main
    time.sleep(.2)
KeyboardInterrupt

```


您可以通过简单地按 ++ctrl+c++ 退出此程序。

:::note
        您可能已经注意到，对于模拟端口，丝印引脚号类似于 **A0, A1**，但在命令中我们使用参数 **0** 和 **1**，就像数字端口一样。因此请确保您将模块插入正确的端口，否则可能会出现引脚冲突。
:::


### 与树莓派一起使用（使用 GrovePi_Plus）
:::note
     如果您使用的是 **Raspberry Pi with Raspberrypi OS >= Bullseye**，您必须**仅使用 Python3** 运行此命令行。
:::

1.您应该有一个树莓派和一个 grovepi 或 grovepi+。

<!-- 链接有问题2.You should have completed configuring the development enviroment, otherwise follow [here](/cn/GrovePi_Plus). -->

3.连接

-   使用 grove 线缆将传感器插入 grovepi 的 A0 插座。

4.导航到演示目录：

```
    cd yourpath/GrovePi/Software/Python/
```

-   查看代码

```
    nano grove_slide_potentiometer.py   # "Ctrl+x" to exit #
```

```py
import time
import grovepi

# Connect the Grove Slide Potentiometer to analog port A0
# OUT,LED,VCC,GND
slide = 0   # pin 1 (yellow wire)

# The device has an onboard LED accessible as pin 2 on port A0
# OUT,LED,VCC,GND
led = 1     # pin 2 (white wire)

grovepi.pinMode(slide,"INPUT")
grovepi.pinMode(led,"OUTPUT")
time.sleep(1)

while True:
    try:
        # Read sensor value from potentiometer
        sensor_value = grovepi.analogRead(slide)

        # Illuminate onboard LED
        if sensor_value > 500:
            grovepi.digitalWrite(led,1)
        else:
            grovepi.digitalWrite(led,0)

        print "sensor_value =", sensor_value

    except IOError:
        print "Error"
```

5.运行演示。
```
sudo python3 grove_slide_potentiometer.py
```

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/res/Sliding_Potentiometer.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



资源
---------

-   [滑动电位器 Eagle 文件](https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/res/Sliding_Potentiometer.rar)
-   [滑动电位器 PDF 文件](https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/res/Sliding_protentiometer_sch.pdf)
-   [滑动电位器数据手册](https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/res/Sliding_potentiometer_datasheet.pdf)
-   [Codecraft CDC 文件](https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/res/Grove_Slide_Potentiometer_CDC_File.zip)


<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Slide_Potentiometer -->

## 项目

**树莓派音乐服务器**：树莓派项目的第一步

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/kishima7/raspberry-pi-music-server-f5a0ae/embed' width='350'></iframe>

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