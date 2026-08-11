---
description: Grove - GSR 传感器
title: Grove - GSR 传感器
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-GSR_Sensor
sku: 101020052
last_update:
  date: 1/6/2023
  author: Seraphina
createdAt: '2023-01-06'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/cn/Grove-GSR_Sensor/
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/img/GSR.jpg" /></div>

GSR 是 galvanic skin response（皮肤电反应）的缩写，是一种测量皮肤电导率的方法。强烈的情绪会刺激你的交感神经系统，导致汗腺分泌更多的汗液。Grove - GSR 允许你通过将两个电极简单地连接到一只手的两根手指上来检测这种强烈的情绪。它非常适合用来制作与情绪相关的项目，比如睡眠质量监测器。

:::caution
Grove-GSR 传感器测量的是人体电阻，而不是电导率！
:::

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-GSR-sensor-p-1614.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" /></a></p>

## 版本

| 产品版本                  |  变更 | 发布日期                                |
|------------------------|----------------|--------------------------------------------|
| Grove - GSR_Sensor V1.0      | 初始版本     |  2013 年 6 月 19 日     |
| Grove - GSR_Sensor V1.2  |在 M324PW-TSSOP14 和 GND 之间增加 C3 100nf  | 2014 年 7 月 31 日 |

## 规格

| 参数               | 数值/范围                    |
|-------------------------|--------------------------------|
| 工作电压       | 3.3V/5V                        |
| 灵敏度             | 通过电位器可调 |
| 输入信号            | 电阻，而非电导率   |
| 输出信号           | 电压，模拟读数        |
| 手指接触材料 | 镍                         |

:::tip
关于 Grove 模块的更多细节请参考 [Grove System](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上面提到的支持平台仅表示该模块在软件或理论上的兼容性。在大多数情况下，我们只为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库或演示代码，因此用户需要自行编写软件库。
:::

## 入门指南

### 搭配 Arduino 使用

#### 硬件

- 步骤 1. 我们需要准备以下物品：

| Seeeduino V4.2 | Base Shield |  Grove - GSR|
|--------------|----------------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/img/Grove-GSR_s.jpg" /></div>|
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-GSR-sensor-p-1614.html)|

- 步骤 2. 将 Grove-GSR 连接到 Base Shield 上的 **A0**。
- 步骤 3. 将 Base Shield 插到 Seeeduino-V4.2 上。
- 步骤 4. 使用 USB 线将 Seeeduino-V4.2 连接到电脑。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/img/Hardware_connection.jpg" /></div>

:::note
如果我们没有 Base Shield，也不用担心，传感器可以直接连接到 Arduino。请按照下表将其连接到 Arduino。
:::

| Seeeduino |Grove-GSR 传感器 |
|------------------|---------|
| GND              | 黑色  |
| 5V               |  红色   |
| NC               | 白色  |
| A0               | 黄色 |

#### 软件

- 步骤 1. 将代码复制到 Arduino IDE 中并上传。

```
const int GSR=A0;
int sensorValue=0;
int gsr_average=0;

void setup(){
  Serial.begin(9600);
}

void loop(){
  long sum=0;
  for(int i=0;i<10;i++)           //Average the 10 measurements to remove the glitch
      {
      sensorValue=analogRead(GSR);
      sum += sensorValue;
      delay(5);
      }
   gsr_average = sum/10;
   Serial.println(gsr_average);
}

```

- 步骤 2. 不要佩戴 GSR 传感器。
- 步骤 3. 在 Arduino IDE 中点击 Tools-> Serial Plotter。
- 步骤 4. 使用螺丝刀调节电阻，直到串口输出最小。此时的串口数据记为 Serial_calibration。
- 步骤 5. 佩戴 GSR 传感器。
- 步骤 6. 我们将看到如下图所示的曲线。请深呼吸并观察趋势。  

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/img/Grove-GSR_Result.png" /></div><br />



**人体电阻** = ((1024 + 2 x Serial_Port_Reading) x 10000)/(Serial_calibration - Serial_Port_Reading)

- 单位为欧姆； 
- Serial_Port_Reading 是串口上显示的数值（0~1023 之间）； 
- Serial_calibration 来自步骤 4（使用螺丝刀调节电阻，直到串口输出最小。此时的串口数据记为 Serial_calibration）。


### 搭配 Raspberry Pi 使用（配合 Grove Base Hat for Raspberry Pi）

#### 硬件

- **步骤 1**. 本项目中使用的物品：

| Raspberry pi | Grove Base Hat for RasPi| Grove - GSR 传感器|
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/img/Grove-GSR_s.jpg" /></div>|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-GSR-sensor-p-1614.html)|

- **步骤 2**. 将 Grove Base Hat 插到 Raspberry Pi 上。
- **步骤 3**. 将 Grove - GSR 传感器连接到 Base Hat 的 A0 端口。
- **步骤 4**. 使用 USB 线将 Raspberry Pi 连接到电脑。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/img/With_Hat.jpg" /></div>

:::note
对于步骤 3，你也可以将 Grove - GSR 传感器连接到**任意模拟端口**，但请确保在命令中将端口号修改为对应的端口。
:::

#### 软件

- **步骤 1**. 按照 [Setting Software](https://wiki.seeedstudio.com/cn/Grove_Base_Hat_for_Raspberry_Pi/#安装) 配置开发环境。
- **步骤 2**. 通过克隆 grove.py 库来下载源文件。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **步骤 3**. 执行以下命令来运行代码。

```
cd grove.py/grove
nano grove_gsr_sensor.py

```

然后你需要将以下代码复制到该文件中，并按 ++ctrl+x++ 退出并保存。

```python

import math
import sys
import time
from grove.adc import ADC


class GroveGSRSensor:

    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()

    @property
    def GSR(self):
        value = self.adc.read(self.channel)
        return value

Grove = GroveGSRSensor


def main():
    if len(sys.argv) < 2:
        print('Usage: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)

    sensor = GroveGSRSensor(int(sys.argv[1]))

    print('Detecting...')
    while True:
        print('GSR value: {0}'.format(sensor.GSR))
        time.sleep(.3)

if __name__ == '__main__':
    main()


```

- **步骤 4**. 执行以下命令来运行代码

```

python grove_gsr_sensor.py 0

```

:::tip
如果一切顺利，你将能够看到如下结果
:::

```python

pi@raspberrypi:~/grove.py/grove $ python grove_gsr_sensor.py 0
Detecting...
GSR value: 503
GSR value: 503
GSR value: 503
GSR value: 503
GSR value: 503
GSR value: 383
GSR value: 256
GSR value: 314
GSR value: 348
GSR value: 361
GSR value: 368
GSR value: 371
^CTraceback (most recent call last):
  File "grove_gsr_sensor.py", line 69, in <module>
    main()
  File "grove_gsr_sensor.py", line 66, in main
    time.sleep(.3)
KeyboardInterrupt
```

你可以通过按下 `ctrl`+`c` 来退出该程序。

:::note
你可能已经注意到，对于模拟端口，丝印引脚编号类似于 **A1、A0**，然而在命令中我们使用的参数是 **0** 和 **1**，与数字端口相同。因此请务必将模块插入正确的端口，否则可能会出现引脚冲突。
:::

## 常见问题

**Q1：输出的单位是什么？**

A1：我们通过电压来测量信号，并以 (0~1023) 的形式打印到串口。

# Grove - GSR v1.0

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/res/Grove-GSR_Eagle_File_V1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Grove - GSR v1.2

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/res/Grove-GSR_Eagle_File_V1.2.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[PDF]** [下载 Wiki PDF](https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/res/Grove-GSR_Sensor_WiKi.pdf)
- **[Eagle]** [Grove - GSR v1.0 Eagle 文件](https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/res/Grove-GSR_Eagle_File_V1.0.zip)
- **[Eagle]** [Grove - GSR v1.2 Eagle 文件](https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/res/Grove-GSR_Eagle_File_V1.2.zip)
- **[Datasheet]** [LM324 数据手册](https://files.seeedstudio.com/wiki/Grove-GSR_Sensor/res/Lm324.pdf)

## 项目

**eMotion - Towards a Better Future**：我们相信可以利用生物识别传感器、Helium 平台的安全性以及 Google Cloud 的强大能力来呈现可能的焦虑状态。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/factoryeight/emotion-towards-a-better-future-a01489/embed' width='350'></iframe>

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，以确保您在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>