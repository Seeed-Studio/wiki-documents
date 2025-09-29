---
description: Grove - 水传感器
title: Grove - 水传感器
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Water_Sensor
last_update:
  date: 1/6/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/Grove-Water_Sensor_1.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/Grove-Water_Sensor_1.png" alt="pir" width={600} height="auto" /></p>


水传感器模块是 Grove 系统的一部分。它通过测量导电性来指示传感器是干燥、潮湿还是完全浸没在水中。传感器走线具有 1 MΩ 的弱上拉电阻。该电阻会将传感器走线值拉高，直到一滴水将传感器走线与接地走线短路。信不信由你，这个电路可以与您的 Arduino 的数字 I/O 引脚配合使用，或者您可以将其与模拟引脚一起使用来检测接地走线和传感器走线之间由水引起的接触量。


<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Water-Sensor-p-748.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border=0 /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Water-Sensor-p-748.html)

## 版本

| 产品版本              | 变更                                                                                                                                                                                    | 发布日期 |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| Grove-水传感器 V1.1 | 初始版本                                                                                                                                                                                    | 2014年7月      |


## 特性


- Grove 兼容接口
- 低功耗
- 2.0cm x 2.0cm Grove 模块
- 高灵敏度

## 应用想法

- 降雨检测
- 液体泄漏
- 水箱溢出检测器

## 规格参数

<table border="1" cellspacing="0" width="80%">
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
工作电压
</th>
<td>
4.75
</td>
<td>
5.0
</td>
<td>
5.25
</td>
<td>
V
</td>
</tr>
<tr align="center">
<th scope="row">
电流
</th>
<td colspan="3">
&lt;20
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<th scope="row">
工作温度
</th>
<td>
10
</td>
<td>
-
</td>
<td>
30
</td>
<td>
℃
</td>
</tr>
<tr align="center">
<th scope="row">
工作湿度（无冷凝）
</th>
<td>
10
</td>
<td>
-
</td>
<td>
90
</td>
<td>
 %
</td>
</tr>
</table>

:::tip
    有关 Grove 模块的更多详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

## 支持的平台


<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|
:::caution
    上面提到的支持平台表示该模块的软件或理论兼容性。在大多数情况下，我们只为Arduino平台提供软件库或代码示例。我们无法为所有可能的MCU平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

## 入门指南

:::note
    如果这是您第一次使用Arduino，我们强烈建议您在开始之前先查看Arduino入门指南。
:::
### 与Arduino一起使用

#### 硬件

使用任何数字引脚将模块连接到基础板。您可以获取信号引脚的值。当裸露的导线上有水时，值为LOW。否则，它将为HIGH。

- **步骤1.** 准备以下物品：

| Seeeduino V4.2 | Base Shield|  Grove - 水传感器 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/Grove-Water_Sensor_small.png" alt="pir" width={600} height="auto" /></p>|
|[立即获取](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即获取](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即获取](https://www.seeedstudio.com/Grove-Water-Sensor-p-748.html)|

- **步骤2.** 将水传感器连接到Grove基础扩展板的D2端口。
- **步骤3.** 将Grove基础扩展板插入Seeeduino。
- **步骤4.** 通过USB线将Seeeduino连接到PC。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/3.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/3.jpg" alt="pir" width={600} height="auto" /></p>

:::note
	如果我们没有Grove基础扩展板，我们也可以直接将Grove水传感器连接到Seeeduino，如下所示。
:::
| Seeeduino       | Grove - 水传感器 |
|---------------|-------------------------|
| 5V           | 红色                     |
| GND           | 黑色                   |
| 未连接 | 白色                   |
| D2            | 黄色                  |

#### 软件
- **步骤1.** 将代码复制到Arduino IDE中并上传。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

```c
#define WATER_SENSOR 2

void setup()
{
  Serial.begin (9600);
  pinMode(WATER_SENSOR, INPUT);
}
void loop()
{
  Serial.println(digitalRead(WATER_SENSOR));
  delay(500);
}

```
- **步骤2.** 我们将在终端上看到如下输出显示。

```c
1
1
0
0
1
1
```

### 与Codecraft一起使用

#### 硬件

**步骤1.** 将Grove - 水传感器连接到基础扩展板的D2端口。

**步骤2.** 将基础扩展板插入您的Seeeduino/Arduino。

**步骤3.** 通过USB线将Seeeduino/Arduino连接到您的PC。

#### 软件

**步骤1.** 打开[Codecraft](https://ide.chmakered.com/)，添加Arduino支持，并将主程序拖到工作区域。

:::note
    如果这是您第一次使用Codecraft，请参阅[使用Arduino的Codecraft指南](https://wiki.seeedstudio.com/cn/Guide_for_Codecraft_using_Arduino/)。
:::
**步骤2.** 按照下图拖拽积木块，或打开可在本页面末尾下载的cdc文件。

<!-- ![cc](https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/cc_Water_Sensor.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/cc_Water_Sensor.png" alt="pir" width={600} height="auto" /></p>

将程序上传到您的Arduino/Seeeduino。

:::success
    当代码上传完成后，您将在串口监视器中看到是否有水。
:::
### 与Raspberry Pi一起使用（配合Raspberry Pi的Grove基础帽）

#### 硬件

- **步骤1**. 本项目中使用的物品：

| Raspberry pi | Raspberry Pi的Grove基础帽| Grove - 水传感器 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/Grove-Water_Sensor_small.png" alt="pir" width={600} height="auto" /></p>|
|[立即获取](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即获取](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[立即获取](https://www.seeedstudio.com/Grove-Water-Sensor-p-748.html)

- **步骤 2**. 将 Grove Base Hat 插入树莓派。
- **步骤 3**. 将 Grove - 水位传感器连接到 Base Hat 的 A0 端口。
- **步骤 4**. 通过 USB 线缆将树莓派连接到 PC。
<!-- ![](https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/with_rpi_basehat.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/with_rpi_basehat.jpg" alt="pir" width={600} height="auto" /></p>

#### 软件

- **步骤 1**. 按照 [设置软件](https://wiki.seeedstudio.com/cn/Grove_Base_Hat_for_Raspberry_Pi/#installation) 配置开发环境。
- **步骤 2**. 通过克隆 grove.py 库下载源文件。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **步骤 3.** 执行以下命令运行代码。

```
cd grove.py/grove
python grove_water_sensor.py 0
```


以下是 grove_water_sensor.py 代码。

```python

import math
import sys
import time
from grove.adc import ADC


class GroveWaterSensor:

    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()

    @property
    def value(self):
        return self.adc.read(self.channel)

Grove = GroveWaterSensor


def main():
    if len(sys.argv) < 2:
        print('Usage: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)

    sensor = GroveWaterSensor(int(sys.argv[1]))

    print('Detecting ...') 
    while True:
        value = sensor.value        
        if sensor.value > 800:
            print("{}, Detected Water.".format(value))
        else:
            print("{}, Dry.".format(value))

        time.sleep(.1)

if __name__ == '__main__':
    main()


```


:::success
    如果一切正常，您将能够看到以下结果
:::
```python

pi@raspberrypi:~/grove.py/grove $ python grove_water_sensor.py 0
Detecting ...
612, Dry.
749, Detected Water.
829, Dry.
357, Dry.
98, Dry.
352, Dry.
517, Dry.
718, Detected Water.
868, Detected Water.
581, Dry.
90, Dry.
326, Dry.
451, Dry.
666, Dry.
867, Detected Water.
684, Dry.
100, Dry.
^CTraceback (most recent call last):
  File "grove_water_sensor.py", line 71, in <module>
    main()
  File "grove_water_sensor.py", line 62, in main
    value = sensor.value        
  File "grove_water_sensor.py", line 48, in value
    return self.adc.read(self.channel)
  File "/usr/local/lib/python2.7/dist-packages/grove/adc.py", line 66, in read
    return self.read_register(addr)
  File "/usr/local/lib/python2.7/dist-packages/grove/adc.py", line 84, in read_register
    return self.bus.read_word_data(self.address, n)
  File "/home/pi/.local/lib/python2.7/site-packages/smbus2/smbus2.py", line 396, in read_word_data
    ioctl(self.fd, I2C_SMBUS, msg)
KeyboardInterrupt


```

您可以使用此传感器检测水位。按 ++ctrl+c++ 退出。


:::note
        您可能已经注意到，对于模拟端口，丝印引脚编号类似于 **A1, A0**，但在命令中我们使用参数 **0** 和 **1**，与数字端口相同。因此请确保将模块插入正确的端口，否则可能会出现引脚冲突。
:::

### 与树莓派配合使用（使用 GrovePi_Plus）

#### 硬件

- **步骤 1.** 准备以下物品：

| 树莓派 | GrovePi_Plus | Grove - 水位传感器 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/Grove-Water_Sensor_small.png" alt="pir" width={600} height="auto" /></p>|
|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即购买](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[立即购买](https://www.seeedstudio.com/Grove-Water-Sensor-p-748.html)|


- **步骤 2.** 将 GrovePi_Plus 插入树莓派。
- **步骤 3.** 将 Grove-水位传感器连接到 GrovePi_Plus 的 **D2** 端口。
- **步骤 4.** 通过 USB 线缆将树莓派连接到 PC。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/7.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/7.jpg" alt="pir" width={600} height="auto" /></p>


#### 软件

- **步骤 1.** 按照 [设置软件](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) 配置开发环境。
- **步骤 2.** 导航到演示目录：

```
cd yourpath/GrovePi/Software/Python/
```

-	**步骤 3.** 查看代码

```
nano grove_water_sensor.py
```

```python
import time
import grovepi

# Connect the Grove Water Sensor to digital port D2
# SIG,NC,VCC,GND
water_sensor = 2

grovepi.pinMode(water_sensor,"INPUT")

while True:
    try:
        print grovepi.digitalRead(water_sensor)
        time.sleep(.5)

    except IOError:
        print "Error"
```

-	**步骤 4.** 运行演示。

```
sudo python grove_water_sensor.py
```

- **步骤 5.** 我们将在终端上看到如下输出显示。

```
1
1
0
0
1
```

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Water_Sensor/res/Water_sensor.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## 资源

- **[Eagle]** [Grove 水传感器原理图](https://files.seeedstudio.com/wiki/Grove-Water_Sensor/res/Water_sensor.zip)
- **[库文件]** [Grove 水传感器演示代码](https://github.com/Seeed-Studio/Grove_Water_Sensor)
- **[Codecraft]** [CDC 文件](https://files.seeedstudio.com/wiki/Grove-Water_Sensor/res/Grove_Water_Sensor_CDC_File.zip)

<!-- This Markdown file was created from https://wiki.seeedstudio.com/cn/Grove-Water_Sensor/ -->

## 项目 

**智能作物：在传统农业中实施物联网！**：我们与自然的使命是保护自然，通过 Helium 借助物联网设计和实施技术和监测方法。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/gabogiraldo/smart-crops-implementing-iot-in-conventional-agriculture-3674a6/embed' width='350'></iframe>

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