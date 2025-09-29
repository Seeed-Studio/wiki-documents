---
description: Grove - 光学旋转编码器(TCUT1600X01)
title: Grove - 光学旋转编码器(TCUT1600X01)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Optical_Rotary_Encoder-TCUT1600X01
last_update:
  date: 1/7/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/main.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/main.jpg" alt="pir" width={600} height="auto" /></p>

Grove - 光学旋转编码器(TCUT1600X01)是一个透射式传感器，包含一个红外发射器和两个光电晶体管检测器。通常情况下，红外发射器发射红外线，光电晶体管检测器接收红外线，然后光电晶体管导通，两个输出都为高电平，板载LED指示灯点亮。当有障碍物阻挡时，光电晶体管无法接收到红外线，因此光电晶体管将关闭，两个输出都将为低电平，板载LED指示灯熄灭。

您可以将此传感器用作旋转编码器来检测速度或旋转，并且由于有两个光电晶体管检测器，您甚至可以检测旋转方向。

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Optical-Rotary-Encoder%28TCUT1600X01%29-p-3142.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Optical-Rotary-Encoder%28TCUT1600X01%29-p-3142.html)

## 特性

+ 双光电晶体管检测器，可以确定旋转方向
+ 板载LED指示灯
+ Grove接口


## 规格参数

|项目|值|
|---|---|
|工作电压|3.3V / 5V|
|工作温度|-40°C 至 +105°C|
|存储温度范围|-40°C 至 +125°C|
|发射器波长| 950 nm|
|间隙|3 mm|
|接口|数字|


## 应用

- 汽车光学传感器
- 编码器的精确位置传感器
- 运动、速度和方向传感器
- "旋转和按压"编码传感器

## 硬件概述

### 引脚图

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/pin_map.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/pin_map.jpg" alt="pir" width={600} height="auto" /></p>


### 原理图

**电源**
<!-- ![](https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/schematic.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/schematic.jpg" alt="pir" width={600} height="auto" /></p>

TCUT1600X01的典型电压为5V，因此我们使用[MP3120](https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/res/MP3120.pdf)电流模式升压转换器来提供稳定的5V电压。MP3120的输入范围为0.8V至5V，因此您可以在3.3V和5V下与Arduino一起使用此模块。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/schematic_1.jpg)  -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/schematic_1.jpg" alt="pir" width={600} height="auto" /></p>

当光电晶体管检测器接收到红外信号时，输出应为高电平，当障碍物阻挡红外线时，OUT1和OUT2应为低电平。然而，由于漏电流的存在，它不会是0V。漏电压随输入电压而变化。

### 机械图纸
<!-- 
![](https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/Mechanical.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/Mechanical.jpg" alt="pir" width={600} height="auto" /></p>


### 方向检测

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/principle.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/principle.jpg" alt="pir" width={600} height="auto" /></p>

:::tip
    由于有两个光电晶体管检测器，我们可以检测移动方向。如果障碍物从左向右移动，输出状态变化应为**11 --> 01 --> 00 --> 10**；同样，如果障碍物从右向左移动，应为**11 --> 10 --> 00 -->01**。
:::

## 支持的平台


<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg)  | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|
:::caution
    上面提到的支持平台表示该模块的软件或理论兼容性。我们在大多数情况下只为Arduino平台提供软件库或代码示例。不可能为所有可能的MCU平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::



## 入门指南


### 与Arduino一起使用


#### 硬件

**所需材料**

| Seeeduino V4.2 | Base Shield | Grove - 光学旋转编码器|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即获取</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即获取</a>|<a href="https://www.seeedstudio.com/Grove-Optical-Rotary-Encoder%28TCUT1600X01%29-p-3142.html" target="_blank">立即获取</a>|


:::note
    **1** 请轻轻插入USB线，否则可能会损坏端口。请使用内部有4根线的USB线，2根线的线缆无法传输数据。如果您不确定您的线缆，可以点击[这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)购买
    
    **2** 每个Grove模块在购买时都会附带一根Grove线缆。如果您丢失了Grove线缆，可以点击[这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)购买。
:::


- **步骤1.** 将Grove - 光学旋转编码器连接到Base Shield的**D5**端口。

- **步骤2.** 将Grove - Base Shield插入Seeeduino。

- **步骤3.** 通过USB线将Seeeduino连接到PC。


<!-- ![](https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/connect.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/connect.jpg" alt="pir" width={600} height="auto" /></p>

:::note
        如果我们没有Grove Base Shield，我们也可以直接将此模块连接到Seeeduino，如下所示。
:::

| Seeeduino     |  Grove - 光学旋转编码器         |
|---------------|-------------------------|
| 5V            | 红色                     |
| GND           | 黑色                   |
| D6           | 白色                    |
| D5           | 黄色                   |


#### 软件

:::note
        如果这是您第一次使用Arduino，我们强烈建议您在开始之前先查看[Arduino入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤1.** 在Arduino IDE中安装**Encoder Library**。您可以通过以下路径找到此库：**Sketch-->Include Library-->Manage Libraries**

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/path.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/path.jpg" alt="pir" width={600} height="auto" /></p>

然后在弹出窗口中搜索**encoder**。找到**Encoder by Paul Stoffregen**，选择**Version1.4.1**，然后点击**Install**。
<p><img src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/path_1.jpg" alt="pir" width={600} height="auto" /></p>

<!-- When the library is installed you will see <font style="font-weight:bold;color:#00C3CE">INSTALLED</font>, click **Close** then.  -->

当库安装完成后，您将看到**INSTALLED**，然后点击**Close**。 
 
<p><img src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/path_2.jpg" alt="pir" width={600} height="auto" /></p>


>感谢Paul提供的出色库。

- **步骤2.** 重启Arduino IDE。打开示例，您可以通过以下三种方式打开：
    1. 在Arduino IDE中通过路径直接打开：**File --> Examples --> Encoder --> Basic**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/path_3.jpg" alt="pir" width={600} height="auto" /></p>

    2. 通过点击 **Basic.pde** 在您的计算机中打开它，您可以在 **xxxx\Arduino\libraries\Encoder\examples\Basic** 中找到它，**XXXX** 是您安装 Arduino IDE 的位置。
 
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/path_4.jpg" alt="pir" width={600} height="auto" /></p>

    3. 或者，您可以直接点击图标
     <!-- ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg)   -->
     <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg" alt="pir" width={50} height="auto" /></p>

      在代码块右上角将以下代码复制到 Arduino IDE 的新草图中。

```cpp
/* Encoder Library - Basic Example
 * http://www.pjrc.com/teensy/td_libs_Encoder.html
 *
 * This example code is in the public domain.
 */

#include <Encoder.h>

// Change these two numbers to the pins connected to your encoder.
//   Best Performance: both pins have interrupt capability
//   Good Performance: only the first pin has interrupt capability
//   Low Performance:  neither pin has interrupt capability
Encoder myEnc(5, 6);
//   avoid using pins with LEDs attached

void setup() {
  Serial.begin(9600);
  Serial.println("Basic Encoder Test:");
}

long oldPosition  = -999;

void loop() {
  long newPosition = myEnc.read();
  if (newPosition != oldPosition) {
    oldPosition = newPosition;
    Serial.println(newPosition);
  }
}
```

:::tip
    您可以将两个数字更改为连接到编码器的引脚，为了获得最佳性能：两个引脚都具有中断功能，因此您可以将代码第13行更改为 <mark>Encoder myEnc(2, 3);</mark>，同时，您应该将此传感器连接到底板的 **D2**。
:::


- **步骤 4.** 上传演示程序。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

- **步骤 5.** 通过点击 **工具-> 串口监视器** 打开 Arduino IDE 的 **串口监视器**。或者同时按 ++ctrl+shift+m++ 键。将波特率设置为 **9600**。


:::success
     如果一切顺利，您将得到结果。当您将障碍物从左向右移动时，计数值将增加1；当您将障碍物从右向左移动时，计数值将减少1。
:::
```cpp
Basic Encoder Test:
0
1
2
3
4
3
2
1
0
-1
-2
-3
-4
```

### 与树莓派一起使用（配合树莓派 Grove 底板）
#### 硬件

- **步骤 1.** 本项目中使用的物品：
<div class="table-center">
	<table>
		<tr>
			<th>树莓派</th>
      <th>树莓派 Grove 底板</th>
      <th>Grove - 光学旋转编码器</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/main.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
				</a>
			</div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
				</a>
			</div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Optical-Rotary-Encoder%28TCUT1600X01%29-p-3142.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

- **步骤 2.** 将 Grove 底板插入树莓派。
- **步骤 3.** 将 Grove - OLED Display 1.12'' 连接到底板的 I2C 端口。
- **步骤 4.** 通过 USB 线将树莓派连接到 PC。

#### 软件
- **步骤 1.** 按照 [设置软件](https://wiki.seeedstudio.com/cn/Grove_Base_Hat_for_Raspberry_Pi/#installation) 配置开发环境，将 grove.py 安装到您的树莓派。
- **步骤 2.** 执行以下命令运行代码。

```
# virutalenv for Python3
virtualenv -p python3 env
source env/bin/activate
#enter commmand
grove_optical_rotary_encoder
```

以下是 grove_optical_rotary_encoder.py 代码。

```python

'''
This is the code for
    - Grove - Optical Rotary Encoder(TCUT1600X01) <https://www.seeedstudio.com/Grove-Optical-Rotary-Encoder-TCUT1600X0-p-3142.html>`_

Examples:

    .. code-block:: python

        from grove.grove_button import GroveButton
        import time, sys

        # connect to pin 5 (slot D5)
        PIN = 5
        encoder = GroveOpticalRotaryEncoder(PIN)

        # Read the value every second and detect motion
        while True:
            print("\rPosition: {0}  ".format(encoder.position()), file=sys.stderr, end='')
            time.sleep(0.001)

'''
from __future__ import print_function
import time, sys, signal, atexit
from grove.gpio import GPIO

__all__ = ["GroveOpticalRotaryEncoder"]

# The UPM version rotaryencoder has bug result in segment fault.
# This pure python version could work well.
class GroveOpticalRotaryEncoder(object):
    '''
    Grove optical Rotary Encoder(TCUT1600X01) class

    Args:
        pin(int): the number of gpio/slot your grove device connected.
    '''
    def __init__(self, pin1, pin2 = None):
        pin2 = pin1 + 1 if pin2 is None else pin2
        self.__gpio  = GPIO(pin1, GPIO.IN)
        self.__gpio2 = GPIO(pin2, GPIO.IN)
        self.__gpio.on_event = self.__gpio_event
        self._pos = 0

    # called by GPIO library
    def __gpio_event(self, pin, value):
        v1 = self.__gpio.read()
        if not v1: return
        v2 = self.__gpio2.read()
        self._pos += 1 if v2 else -1

    def position(self, pos = None):
        '''
        set or get the position counter

        Args:
            pos(int):
                optinal, the position counter to be set.

                if not specified, only get the current counter

        Returns:
            (int): current position counter
        '''
        if not pos is None:
            self._pos = pos
        return self._pos

def main():
    from grove.helper import SlotHelper
    sh = SlotHelper(SlotHelper.GPIO)
    pin = sh.argv2pin()

    '''
    from upm.pyupm_rotaryencoder import RotaryEncoder as GroveOpticalRotaryEncoder
    from mraa import getGpioLookup

    mraa_pin1 = getGpioLookup("GPIO%02d" % (pin + 0))
    mraa_pin2 = getGpioLookup("GPIO%02d" % (pin + 1))

    # Instantiate a Grove Rotary Encoder, using signal pins mraa_pin1 & mraa_pin2
    myRotaryEncoder = GroveOpticalRotaryEncoder(mraa_pin1, mraa_pin2);
    '''
    myRotaryEncoder = GroveOpticalRotaryEncoder(pin)

    ## Exit handlers ##
    # This function stops python from printing a stacktrace when you hit control-C
    def SIGINTHandler(signum, frame):
        raise SystemExit

    # This function lets you run code on exit, including functions from myRotaryEncoder
    def exitHandler():
        print("Exiting")
        sys.exit(0)

    # Register exit handlers
    atexit.register(exitHandler)
    signal.signal(signal.SIGINT, SIGINTHandler)

    # Read the value every second and detect motion
    counter = 0
    while True:
        print("\rPosition: {0}  ".format(myRotaryEncoder.position()), file=sys.stderr, end='')
        counter += 1
        if counter >= 5000:
            print("")
            counter = 0
        time.sleep(0.001)

if __name__ == '__main__':
    main()
```

```python
（env）pi@raspberrypi:~ grove_optical_rotary_encoder
```

:::tip success
当命令成功运行时，它将每秒打印出数值并检测运动。
:::

```python
# Read the value every second and detect motion
        while True:
            print("\rPosition: {0}  ".format(encoder.position()), file=sys.stderr, end='')
            time.sleep(0.001)
```


您可以通过简单地按 `ctrl`+`c` 来退出此程序。

## 原理图在线查看器


<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/res/Grove-Optical_Rotary_Encoder-TCUT1600X01.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## 资源

- **[Zip]** [Grove - 光学旋转编码器 eagle 文件](https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/res/Grove-Optical_Rotary_Encoder-TCUT1600X01.zip)

- **[PDF]** [TCUT1600X01 数据手册](https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/res/Optical_Sensor.pdf)

- **[PDF]** [MP3120 数据手册](https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/res/MP3120.pdf)


## 项目

这是本产品的介绍视频，包含简单的演示，您可以尝试一下。

<iframe width={560} height={315} src="https://www.youtube.com/embed/Ds7kBVdeY4U?rel=0" frameBorder={0} allow="autoplay; encrypted-media" allowFullScreen />



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