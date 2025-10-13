---
description: Grove - 光传感器
title: Grove - 光传感器
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Light_Sensor
last_update:
  date: 1/5/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/cover.jpg" /></div>

Grove - 光传感器集成了一个光敏电阻（光依赖电阻）来检测光强度。当光强度增加时，光敏电阻的阻值会减小。板载的双运放芯片 LM358 产生与光强度相对应的电压（即基于阻值）。输出信号是模拟值，光线越亮，数值越大。

该模块可用于构建光控开关，即在白天关闭灯光，在夜间开启灯光。

:::caution
光传感器的数值仅反映光强度的大致趋势，它不代表精确的流明值。
:::

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Light-Sensor-v1.2-p-2727.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border="0" /></a></p>

## 可升级为工业传感器

通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)和 [S2100 数据记录器](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 转换为 LoRaWAN® 传感器。Seeed 不仅帮助您进行原型设计，还为您提供了使用 SenseCAP 系列坚固[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

SenseCAP S210x 系列工业传感器为环境感知提供开箱即用的体验。请参考具有更高性能和稳定性的 S2102 无线光强度传感器进行光强度检测。该系列包括土壤湿度、空气温湿度、光强度、CO2、EC 和 8 合 1 气象站传感器。尝试最新的 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) 用于您下一个成功的工业项目。

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td align="center"><font size={4}><strong>SenseCAP 工业传感器</strong></font></td>
    </tr>
    <tr>
      <td>
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank">
            <img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S2102-.png" />
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 光传感器</strong></a>
      </td>
    </tr>
  </tbody>
</table>

## 版本

| 产品版本                          | 变更                                                               | 发布日期      |
|----------------------------------|--------------------------------------------------------------------|---------------|
| Grove - 光传感器 1.0              | 初始版本                                                           | 2013年4月28日 |
| Grove - 光传感器(P)               | 将 Grove 连接器移至背面                                            | 2014年5月15日 |
| Grove - 光传感器(P) V1.1          | 相比 Grove - 光传感器(P)，将光敏电阻-5528替换为LS06-S              | 2015年12月31日|
| Grove - 光传感器 1.2              | 相比 Grove - 光传感器 1.0，将光敏电阻-5528替换为LS06-S             | 2016年1月20日 |

## 特性

* 模拟值输出
* 高可靠性和灵敏度
* 小尺寸封装

* 识别更宽的光谱

:::tip
有关 Grove 模块的更多详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

### 平台支持

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上述提到的支持平台是/是该模块软件或理论兼容性的指示。在大多数情况下，我们只为Arduino平台提供软件库或代码示例。不可能为所有可能的MCU平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

## 规格

|项目|值|
|-----|--------|
|工作电压|3~5V|
|工作电流| 0.5~3 mA|
|响应时间|20-30 毫秒|
|峰值波长|540 nm|
|重量|4 g|

## 入门指南

### 与Arduino一起使用

#### 硬件

* 步骤1. 准备以下物品：

| Seeeduino V4 | Base Shield |Grove - 光传感器 | Grove - LED Bar |
|--------------|----------------------|-----------------|---------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/img/light_sensor_s.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_3.jpg" /></div>|
|[立即获取](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即获取](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即获取](https://www.seeedstudio.com/Grove-Light-Sensor-v1.2-p-2727.html)|[立即获取](https://www.seeedstudio.com/Grove-LED-Bar-v2.0-p-2474.html)|

* 步骤2. 将Grove-光传感器连接到Grove-Base Shield的A0端口。
* 步骤3. 将Grove-Led Bar连接到Grove-Base Shield的D2端口。
* 步骤4. 将Grove - Base Shield插入Seeeduino。
* 步骤5. 通过USB线将Seeeduino连接到PC。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/img/seeeduino_light.jpg" /></div>

:::note
如果我们没有Grove Base Shield，我们也可以直接将Grove-光传感器连接到Seeeduino，如下所示。
:::

| Seeeduino       | Grove-光传感器 |
|---------------|-------------------------|
| 5V           | 红色                     |
| GND           | 黑色                   |
| 未连接 | 白色                   |
| A0            | 黄色                  |

| Seeeduino       | Grove-Led Bar |
|---------------|-------------------------|
| 5V            | 红色                     |
| GND           | 黑色                   |
| D3            | 白色                   |
| D2            | 黄色                  |

#### 软件

* 步骤1. 从Github下载[Grove-LED Bar库](https://github.com/Seeed-Studio/Grove_LED_Bar/archive/master.zip)。
* 步骤2. 参考[如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library)为Seeeduino安装库。
* 步骤3. 将代码复制到Seeeduino IDE中并上传。

```c

#include <Grove_LED_Bar.h>

Grove_LED_Bar bar(3, 2, 0);  // Clock pin, Data pin, Orientation

void setup()
{
  // nothing to initialize
  bar.begin();
  bar.setGreenToRed(true);
}

void loop()
{

  int value = analogRead(A0);
  value = map(value, 0, 800, 0, 10);

  bar.setLevel(value);
  delay(100);
}
```

* 步骤2. LED条将根据光线变化。

### 与Codecraft一起使用

#### 硬件

**步骤1.** 将Grove - 光传感器连接到Base Shield的A0端口。

**步骤2.** 将Base Shield插入您的Seeeduino/Arduino。

**步骤3.** 通过USB线将Seeeduino/Arduino连接到您的PC。

#### 软件

**步骤1.** 打开[Codecraft](https://ide.chmakered.com/)，添加Arduino支持，并将主程序拖到工作区。

:::note
如果这是您第一次使用Codecraft，请参阅[使用Arduino的Codecraft指南](https://wiki.seeedstudio.com/cn/Guide_for_Codecraft_using_Arduino/)。
:::

**步骤2.** 按照下图拖拽积木块，或打开可在本页面末尾下载的cdc文件。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/img/cc_Light_Sensor.png" /></div>

将程序上传到您的Arduino/Seeeduino。

:::tip
当代码上传完成后，您将在串口监视器中看到显示的亮度值。
:::

### 与Raspberry Pi一起使用（使用Grove Base Hat for Raspberry Pi）

#### 硬件

* **步骤1**. 本项目中使用的物品：

| Raspberry pi | Grove Base Hat for RasPi| Grove - 光传感器|
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/img/light_sensor_s.jpg" /></div>|
|[立即获取](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即获取](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[立即获取](https://www.seeedstudio.com/Grove-Light-Sensor-v1.2-p-2727.html)|

* **步骤2**. 将Grove Base Hat插入Raspberry。
* **步骤3**. 将光传感器连接到Base Hat的A0端口。
* **步骤4**. 通过USB线将Raspberry Pi连接到PC。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/img/Light_Hat.jpg" /></div>

:::note
对于步骤3，您可以将光传感器连接到**任何模拟端口**，但请确保您使用相应的端口号更改命令。
:::

#### 软件

:::caution
如果您使用的是**Raspberry Pi with Raspberrypi OS >= Bullseye**，您必须**仅使用Python3**运行此命令行。
:::

* **步骤1**. 按照[设置软件](https://wiki.seeedstudio.com/cn/Grove_Base_Hat_for_Raspberry_Pi/#installation)配置开发环境。
* **步骤2**. 通过克隆grove.py库下载源文件。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

* **步骤3**. 执行以下命令运行代码。

```
cd grove.py/grove
python3 grove_light_sensor_v1_2.py 0

```

以下是grove_light_sensor_v1_2.py代码。

```python

import math
import sys
import time
from grove.adc import ADC


class GroveLightSensor:

    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()

    @property
    def light(self):
        value = self.adc.read(self.channel)
        return value

Grove = GroveLightSensor


def main():
    if len(sys.argv) < 2:
        print('Usage: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)

    sensor = GroveLightSensor(int(sys.argv[1]))

    print('Detecting light...')
    while True:
        print('Light value: {0}'.format(sensor.light))
        time.sleep(1)

if __name__ == '__main__':
    main()

```

```

:::tip
如果一切顺利，您将能够看到与周围光线对应的以下结果
:::

```python

pi@raspberrypi:~/grove.py/grove $ python3 grove_light_sensor_v1_2.py 0
Detecting light...
Light value: 600
Light value: 448
Light value: 267
Light value: 311
Light value: 102
Light value: 82
Light value: 63
Light value: 54
Light value: 49
Light value: 45
Light value: 545
^CTraceback (most recent call last):
  File "grove_light_sensor_v1_2.py", line 67, in <module>
    main()
  File "grove_light_sensor_v1_2.py", line 64, in main
    time.sleep(1)
KeyboardInterrupt

```

您可以通过简单地按 ++ctrl+c++ 来退出此程序。

:::note
您可能已经注意到，对于模拟端口，丝印引脚编号类似于 **A1, A0**，但在命令中我们使用参数 **0** 和 **1**，与数字端口相同。因此请确保您将模块插入正确的端口，否则可能会出现引脚冲突。
:::

### 与树莓派一起使用（配合 GrovePi_Plus）

#### 硬件

* 步骤 1. 准备以下物品：

| 树莓派 | GrovePi_Plus | Grove - 光传感器 | Grove - 红色 LED |
|--------------|-------------|-----------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/img/light_sensor_s.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Red_LED/img/Red%20LED_s.jpg" /></div>|
|[立即获取](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即获取](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[立即获取](https://www.seeedstudio.com/Grove-Light-Sensor-v1.2-p-2727.html)|[立即获取](https://www.seeedstudio.com/s/Grove-Red-LED-p-1142.html)|

* 步骤 2. 将 GrovePi_Plus 插入树莓派。
* 步骤 3. 将 Grove 光传感器连接到 GrovePi_Plus 的 A0 端口。
* 步骤 4. 将 Grove 红色 LED 连接到 GrovePi_Plus 的 D4 端口。
* 步骤 5. 通过 USB 线缆将树莓派连接到 PC。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/img/rasp_light.jpg" /></div>

#### 软件

:::caution
如果您使用的是 **Raspberry Pi with Raspberrypi OS >= Bullseye**，您必须**仅使用 Python3** 运行此命令行。
:::

* 步骤 1. 按照 [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) 配置开发环境。
* 步骤 2. Git 克隆 Github 仓库。

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

* 步骤 3. 执行以下命令。

```
cd ~/GrovePi/Software/Python
python3 grove_light_sensor.py
```

这是 grove_light_sensor.py 代码。

```python
import time
import grovepi

# Connect the Grove Light Sensor to analog port A0
# SIG,NC,VCC,GND
light_sensor = 0

# Connect the LED to digital port D4
# SIG,NC,VCC,GND
led = 4

# Turn on LED once sensor exceeds threshold resistance
threshold = 10

grovepi.pinMode(light_sensor,"INPUT")
grovepi.pinMode(led,"OUTPUT")

while True:
    try:
        # Get sensor value
        sensor_value = grovepi.analogRead(light_sensor)

        # Calculate resistance of sensor in K
        resistance = (float)(1023 - sensor_value) * 10 / sensor_value

        if resistance > threshold:
            # Send HIGH to switch on LED
            grovepi.digitalWrite(led,1)
        else:
            # Send LOW to switch off LED
            grovepi.digitalWrite(led,0)

        print("sensor_value = %d resistance = %.2f" %(sensor_value,  resistance))
        time.sleep(.5)

    except IOError:
        print ("Error")
```

* 步骤 4. 当光传感器被遮挡时，LED 将点亮。

```
pi@raspberrypi:~/GrovePi/Software/Python $ python3 grove_light_sensor.py
sensor_value = 754 resistance = 3.57
sensor_value = 754 resistance = 3.57
sensor_value = 752 resistance = 3.60
sensor_value = 752 resistance = 3.60
sensor_value = 752 resistance = 3.60
sensor_value = 313 resistance = 22.68
sensor_value = 155 resistance = 56.00
sensor_value = 753 resistance = 3.59
```

# Grove - 光传感器 V1.0 的 Eagle 文件

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/resources/Grove%20-%20Light%20Sensor.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Grove - 光传感器(P) V1.0 的 Eagle 文件

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/resources/Grove%20-%20Light%20Sensor%28P%29.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Grove - 光传感器(P) V1.1 的 Eagle 文件

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/resources/Grove%20-%20Light%20Sensor%28P%29%20v1.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

* **[Codecraft]** [CDC 文件](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/res/Grove_Light_Sensor_CDC_File.zip)
* **[Eagle&PDF]** [Grove - 光传感器 V1.0 的 Eagle 文件](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/resources/Grove%20-%20Light%20Sensor.zip)
* **[Eagle&PDF]**  [Grove - 光传感器(P) V1.0 的 Eagle 文件](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/resources/Grove%20-%20Light%20Sensor%28P%29.zip)
* **[Eagle&PDF]**  [Grove - 光传感器(P) V1.1 的 Eagle 文件](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/resources/Grove%20-%20Light%20Sensor%28P%29%20v1.1.zip)
* **[数据手册]** [LS06-MΦ5 参考信息](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/res/LS06-M%CE%A65_datasheet.pdf)
* **[数据手册]**  [LM358.PDF](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/res/LM358.pdf)
* **[延伸阅读]** 秘密盒子

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/secret_box.png" /></div>

这里我们将向您展示一个使用 Grove - 光传感器制作的项目 - 秘密盒子。首先您需要一个盒子，纸盒、木盒，任何盒子都可以。在盒子里放一些东西，因为我们称它为秘密盒子，这意味着我们不希望任何人打开它，否则会有警报通知您。

这里我们使用 LinkIt ONE 作为控制器，它是一个兼容 Arduino 的开发板，具有丰富的功能。您需要以下物品：

* [LinkIt ONE](https://www.seeedstudio.com/LinkIt-ONE-p-2017.html)
* Grove - 光传感器
* Grove - 底板
* 一张 SIM 卡

让我们将 Grove - 光传感器连接到底板的 A0 端口，然后打开 Arduino IDE，复制下面的代码并将示例上传到 LinkIt ONE。然后当有人打开盒子时，光线会被检测到，并向您发送短信。

```c
// demo of Grove Starter kit for LinkIt ONE
// Secret box

#include <LGSM.h>

char num[20] = "13425171053";           // your number write here
char text[100] = "Warning: Your box had been opened!!";    // what do you want to send


const int pinLight = A0;                // light sensor connect to A0

bool isLightInBox()
{
    return (analogRead(pinLight)<50);   // when get data less than 50, means light sensor was in box
}

void setup()
{
    Serial.begin(115200);

    while(!isLightInBox());             // until put in box
    delay(2000);
}


void loop()
{
    if(!isLightInBox())                 // box is open
    {
        Serial.println("box had been opened");

        while(!LSMS.ready())
        {
            delay(1000);
        }

        Serial.println("SIM ready for work!");
        LSMS.beginSMS(num);
        LSMS.print(text);

        if(LSMS.endSMS())
        {
            Serial.println("SMS is sent");
        }
        else
        {
            Serial.println("SMS send fail");
        }

        while(!isLightInBox());             // until put in box
        delay(2000);
    }

    delay(10);
}
```

祝您玩得愉快。

## 项目

**Grove - 光传感器介绍**：

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ingo-lohs/grove-introduction-in-a-light-sensor-a55efd/embed' width='350'></iframe>

**环境立方体！使用 Sigfox 了解您脚下的土地**：一个配备所有必要传感器的立方体，适用于农业、监测等广泛应用。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/dhairya-parikh/the-environment-cube-know-the-land-beneath-you-using-sigfox-952f29/embed' width='350'></iframe>

**光传感器 Grove 模块**：

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/ZvFswNYY2mU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/GOROc2f5Xkg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
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