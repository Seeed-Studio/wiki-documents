---
description: Grove - 旋转角度传感器
title: Grove - 旋转角度传感器
keywords:
- Grove Grove_Sensors Touch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Rotary_Angle_Sensor
last_update:
  date: 1/19/2023
  author: jianjing Huang
---



![](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/rotary.jpg)

旋转角度传感器在其D1连接器上产生0到Vcc（使用Seeeduino时为5V DC）之间的模拟输出。D2连接器未使用。角度范围为300度，值呈线性变化。电阻值为10k欧姆，非常适合Arduino使用。这也可能被称为"电位器"。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor-p-770.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border="0" /></a></p>

还有另一个产品，Grove - 旋转角度传感器(P)。"P"是什么意思？在这个产品中，"P"代表"面板安装"。它是Grove - 旋转角度传感器的姊妹版本。除了Grove连接器移到背面以便您可以轻松将其用作整洁且无线的人机界面设备外，它们是相同的。

<table>
  <tbody><tr>
      <td>
        <img src="https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/Grove-Rotary_Angle_Sensor-P-.jpg" />
      </td>
      <td>
        <img src="https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/GroveRotaryP_02.jpg" />
      </td>
    </tr>
  </tbody></table>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/depot/grove-rotary-angle-sensorp-p-1242.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border="0" /></a></p>

## 版本

| 产品版本                   | 变更                              | 发布日期 |
|-----------------------------------|--------------------------------------|---------------|
|Grove-旋转角度传感器(P) V1.1  | 初始版本                              | 2013年1月    |
|Grove-旋转角度传感器 V1.2     | 初始版本                              | 2014年5月    |

## 特性

- Grove接口
- 易于使用
- Grove基础模块

:::tip
有关Grove模块的更多详细信息，请参考[Grove系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

## 规格参数

|项目|最小值|典型值|最大值|单位|
|----|----|----|----|----|
|电压|4.75|5.0|5.25|VDC|
|旋转角度|0|/|300|度|
|尺寸|/|19x19x30.1|/|mm|

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
上述提到的支持平台是/是该模块软件或理论兼容性的指示。在大多数情况下，我们只为Arduino平台提供软件库或代码示例。不可能为所有可能的MCU平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

## 开始使用

:::note
如果这是您第一次使用Arduino，我们强烈建议您在开始之前先查看[Arduino入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

### 与Arduino一起使用

**硬件**

- **步骤1.** 准备以下物品：

| Seeeduino V4.2 | Base Shield|  Grove-旋转角度传感器 |Grove-LED|
|--------------|-------------|-----------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/rorary_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/grove_led.jpg)|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor-p-770.html)|[立即购买](https://www.seeedstudio.com/Grove-LED-p-767.html)|

- **步骤2.** 将Grove-旋转角度传感器连接到Grove-Base Shield的**A0**端口。
- **步骤3.** 将Grove-LED连接到Grove-Base Shield的**D3**端口。
- **步骤4.** 将Grove - Base Shield插入Seeeduino。
- **步骤5.** 通过USB线将Seeeduino连接到PC。

![](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/seeeduino_rotary.jpg)

:::note
如果我们没有Grove Base Shield，我们也可以直接将Grove-旋转角度传感器和Grove-Led连接到Seeeduino，如下所示。Grove-Led必须连接到PWM端口。对于Seeeduino，它们是D3,5,6,9,10,11。
:::

| Seeeduino | Grove-旋转角度传感器 | Seeeduino | Grove-LED |
|-----------|---------------------------|-----------|-----------|
| 5V        | Red                       | 5V        | Red       |
| GND       | Black                     | GND       | Black     |
| NC        | White                     | NC        | White     |
| A0        | Yellow                    | D3        | Yellow    |

**软件**

- **步骤1.** 请将下面的代码复制到Arduino IDE并上传到arduino。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

```cpp
/*macro definitions of Rotary angle sensor and LED pin*/

#define ROTARY_ANGLE_SENSOR A0
#define LED 3  //the Grove - LED is connected to PWM pin D3 of Arduino
#define ADC_REF 5 //reference voltage of ADC is 5v.If the Vcc switch on the seeeduino
                    //board switches to 3V3, the ADC_REF should be 3.3
#define GROVE_VCC 5 //VCC of the grove interface is normally 5v
#define FULL_ANGLE 300 //full value of the rotary angle is 300 degrees

void setup()
{
    Serial.begin(9600);
    pinMode(ROTARY_ANGLE_SENSOR, INPUT);
    pinMode(LED,OUTPUT);   
}

void loop()
{   
    float voltage;
    int sensor_value = analogRead(ROTARY_ANGLE_SENSOR);
    voltage = (float)sensor_value*ADC_REF/1023;
    float degrees = (voltage*FULL_ANGLE)/GROVE_VCC;
    Serial.println("The angle between the mark and the starting position:");
    Serial.println(degrees);

    int brightness;
    brightness = map(degrees, 0, FULL_ANGLE, 0, 255);
    analogWrite(LED,brightness);
    delay(500);
}

```

- **步骤2.** 调整Grove-旋转角度传感器，我们将看到Grove-LED改变亮度。

### 与Codecraft一起使用

#### 硬件

**步骤1.** 将Grove - 旋转角度传感器连接到Base Shield的A0端口，并将Grove - 红色LED连接到D3端口。

**步骤2.** 将Base Shield插入您的Seeeduino/Arduino。

**步骤3.** 通过USB线将Seeeduino/Arduino连接到您的PC。

#### 软件

**步骤1.** 打开[Codecraft](https://ide.chmakered.com/)，添加Arduino支持，并将主程序拖到工作区域。

:::note
如果这是您第一次使用Codecraft，请参阅[使用Arduino的Codecraft指南](https://wiki.seeedstudio.com/cn/Guide_for_Codecraft_using_Arduino/)。
:::

**步骤2.** 按照下图拖拽代码块或打开可在本页面末尾下载的cdc文件。

![cc](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/cc_Rotary_Angle_Sensor.png)

将程序上传到您的Arduino/Seeeduino。

:::tip
当代码上传完成后，LED的亮度将根据传感器的角度而变化，角度值显示在串口监视器中。
:::

### 与Raspberry Pi一起使用（使用Grove Base Hat for Raspberry Pi）

#### 硬件

- **步骤1**. 本项目中使用的物品：

| Raspberry pi | Grove Base Hat for RasPi| Grove - 旋转角度传感器 |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/rorary_s.jpg)|
|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即购买](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[立即购买](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor--p-1242.html)|

- **步骤2**. 将Grove Base Hat插入Raspberry。
- **步骤3**. 将旋转传感器连接到Base Hat的A0端口。
- **步骤4**. 通过USB线将Raspberry Pi连接到PC。

![](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/Rotary_Hat.jpg)

:::note
对于步骤3，您可以将旋转角度传感器连接到**任何模拟端口**，但请确保您使用相应的端口号更改命令。
:::

#### 软件

:::caution
如果您使用的是**Raspberry Pi with Raspberrypi OS >= Bullseye**，您必须**仅使用Python3**运行此命令行。
:::

- **步骤1**. 按照[软件设置](https://wiki.seeedstudio.com/cn/Grove_Base_Hat_for_Raspberry_Pi/#installation)配置开发环境。
- **步骤2**. 通过克隆grove.py库下载源文件。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **步骤 3**. 执行以下命令来运行代码。

```
cd grove.py/grove
python3 grove_rotary_angle_sensor.py 0

```

以下是 grove_rotary_angle_sensor.py 代码。

```python

import math
import sys
import time
from grove.adc import ADC


class GroveRotaryAngleSensor(ADC):
    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()
    
    @property
    def value(self):
        return self.adc.read(self.channel)


Grove = GroveRotaryAngleSensor


def main():
    if len(sys.argv) < 2:
        print('Usage: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)

    sensor = GroveRotaryAngleSensor(int(sys.argv[1]))

    while True:
        print('Rotary Value: {}'.format(sensor.value))
        time.sleep(.2)


if __name__ == '__main__':
    main()

```

:::tip
    如果一切顺利，您将能够看到以下结果
:::

```python

pi@raspberrypi:~/grove.py/grove $ python3 grove_rotary_angle_sensor.py 0
Rotary Value: 932
Rotary Value: 931
Rotary Value: 931
Rotary Value: 931
Rotary Value: 933
Rotary Value: 931
Rotary Value: 742
Rotary Value: 666
Rotary Value: 666
Rotary Value: 549
Rotary Value: 520
Rotary Value: 499
Rotary Value: 430
Rotary Value: 430
Rotary Value: 321
Rotary Value: 286
Rotary Value: 205
Rotary Value: 127
Rotary Value: 88
Rotary Value: 0
Rotary Value: 0
Rotary Value: 0
Rotary Value: 0
Rotary Value: 0
Rotary Value: 0
Rotary Value: 0
^CTraceback (most recent call last):
  File "grove_rotary_angle_sensor.py", line 66, in <module>
    main()
  File "grove_rotary_angle_sensor.py", line 62, in main
    time.sleep(.2)
KeyboardInterrupt


```

您可以通过简单地按 ++ctrl+c++ 来退出此程序。

:::note
您可能已经注意到，对于模拟端口，丝印引脚编号类似于 **A0, A1**，但在命令中我们使用参数 **0** 和 **1**，就像数字端口一样。因此请确保您将模块插入正确的端口，否则可能会出现引脚冲突。
:::

### 与 Raspberry Pi 配合使用（使用 GrovePi_Plus）

**硬件**

- **步骤 1.** 准备以下物品：

| Raspberry pi | GrovePi_Plus |  Grove-旋转角度传感器 |Grove-LED|
|--------------|-------------|-----------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/rorary_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/grove_led.jpg)|
|[立即获取](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即获取](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[立即获取](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor-p-770.html)|[立即获取](https://www.seeedstudio.com/Grove-LED-p-767.html)|

- **步骤 2.** 将 GrovePi_Plus 插入 Raspberry。
- **步骤 3.** 将 Grove-旋转角度传感器连接到 GrovePi_Plus 的 **A0** 端口。
- **步骤 4.** 将 Grove-LED 连接到 GrovePi_Plus 的 **D5** 端口。
- **步骤 5.** 通过 USB 线将 Raspberry 连接到 PC。

![](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/rpi_rotary.jpg)

**软件**

:::caution
如果您使用的是 **Raspberry Pi with Raspberrypi OS >= Bullseye**，您必须 **仅使用 Python3** 来使用此命令行。
:::

- **步骤 1.** 按照 [设置软件](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) 来配置开发环境。
- **步骤 2.** Git 克隆 Github 仓库。

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **步骤 3.** 执行以下命令来监控响度。

```python
cd ~/GrovePi/Software/Python
python3 grove_rotary_angle_sensor.py
```

这里是 grove_rotary_angle_sensor.py 代码。

```python
import time
import grovepi

# 将 Grove 旋转角度传感器连接到模拟端口 A0
# SIG,NC,VCC,GND
potentiometer = 0

# 将 LED 连接到数字端口 D5
# SIG,NC,VCC,GND
led = 5

grovepi.pinMode(potentiometer,"INPUT")
grovepi.pinMode(led,"OUTPUT")
time.sleep(1)

# ADC 的参考电压是 5v
adc_ref = 5

# grove 接口的 Vcc 通常是 5v
grove_vcc = 5

# 旋转角度的全值是 300 度，根据其规格（0 到 300）
full_angle = 300

while True:
    try:
        # 从电位器读取传感器值
        sensor_value = grovepi.analogRead(potentiometer)

        # 计算电压
        voltage = round((float)(sensor_value) * adc_ref / 1023, 2)

        # 计算旋转角度（0 到 300）
        degrees = round((voltage * full_angle) / grove_vcc, 2)

        # 从角度（0 到 300）计算 LED 亮度（0 到 255）
        brightness = int(degrees / full_angle * 255)

        # 给 LED 提供 PWM 输出
        grovepi.analogWrite(led,brightness)

        print("sensor_value = %d voltage = %.2f degrees = %.1f brightness = %d" %(sensor_value, voltage, degrees, brightness))
    except KeyboardInterrupt:
        grovepi.analogWrite(led,0)
        break
    except IOError:
        print ("Error")

```

- **步骤 4.** 调整 Grove-旋转角度传感器，我们将看到 Grove-LED 改变亮度。

### 与 TI LaunchPad 配合使用

**读取电位器（旋转角度传感器）**

此示例展示如何读取来自 Grove 电位器模块的模拟输出。我们将在此示例中组合几个 Grove 模块！通过转动电位器旋钮，我们将在 Grove 4 位数字显示器上显示模拟读数值。

![](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/Angle_sensor.jpg)

```
/*
    旋转角度传感器
    通过读取 Grove Base BoosterPack 的 J16 上的模拟传感器来演示模拟输入。LaunchPad 上红色 LED 的速度将根据电位器旋钮的位置而改变。此示例还将在 Grove 4 位数字显示器上显示模拟读数值。

    电路：
    * 电位器连接到引脚 24（Grove Base BoosterPack 上的 J6）
    * 电位器的中心引脚连接到模拟引脚
    * 一侧引脚（任意一个）连接到地
    * 另一侧引脚连接到 VCC (3.3V)

    * 注意：由于电压不稳定，旋转角度传感器的值
            即使您不触摸它，每次运行时也会略有变化。

    由 Oliver Wang 创建

    此示例代码属于公共领域。

    https://www.seeedstudio.com/wiki/GROVE_-_Starter_Kit_v1.1b#Grove_-_Rotary_Angle_Sensor
    */

#include "TM1637.h"

/* 宏定义 */
#define CLK               39                  /* 4 位数字显示器时钟引脚 */
#define DIO               38                /* 4 位数字显示器数据引脚 */
#define ROTARY_ANGLE_P    24               /* 旋转角度传感器引脚 */

/* 全局变量 */
TM1637 tm1637(CLK, DIO);                  /* 4 位数字显示器对象 */
int analog_value = 0;                     /* 存储来自旋转角度传感器值的变量 */

int8_t bits[4] = {0};                     /* 存储值的单个位的数组 */

/* setup() 方法在草图开始时运行一次 */
void setup() {

    /* 初始化 4 位数字显示器 */
    tm1637.init();
    tm1637.set(BRIGHT_TYPICAL);

}

/* loop() 方法反复运行 */
void loop() {   

    analog_value = analogRead(ROTARY_ANGLE_P);      /* 从传感器读取值 */
    memset(bits, 0, 4);                             /* 使用时重置数组 */
    for(int i = 3; i >= 0; i--) {
        /* 获取模拟值的单个位 */
        bits[i] = analog_value % 10;
        analog_value = analog_value / 10;  
        tm1637.display(i, bits[i]);                 /* 通过 4 位数字显示器显示 */
    }
    delay(100);
}
```

# Grove - 旋转角度传感器(P) v1.1 原理图文件

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/res/Grove%20%20-%20Rotary%20Angle%20Sensor(P)%20v1.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Grove-旋转角度传感器 v1.2 原理图文件

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/res/Grove%20-%20Rotary%20Angle%20Sensor%20v1.2.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Eagle&PDF]** [Grove-旋转角度传感器 v1.2 原理图文件](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/res/Grove%20-%20Rotary%20Angle%20Sensor%20v1.2.zip)
- **[Eagle&PDF]** [Grove - 旋转角度传感器(P) v1.1 原理图文件](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/res/Grove%20%20-%20Rotary%20Angle%20Sensor(P)%20v1.1.zip)
- **[库文件]** [旋转角度传感器的Github仓库](https://github.com/Seeed-Studio/Grove_Rotary_Angle_Sensor)
- **[Codecraft]** [CDC文件](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/res/Grove_Rotary_Angle_Sensor_CDC_File.zip)

## 项目

**使用Grove-旋转角度传感器(P)控制Grove LED**：使用Arduino/Genuino 101通过Grove-旋转角度传感器(P)控制LED的亮度。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/user50338573/using-grove-rotary-angle-sensor-p-to-control-grove-led-725e32/embed' width='350'></iframe>

**旋转角度Grove模块**：

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/31RaX7JGv5s" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/xx7hMoFQohY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
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