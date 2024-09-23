---
description: Grove - 电能传感器
title: Grove - 电能传感器
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Electricity_Sensor
last_update:
  date: 03/21/2024
  author: WuFeifei
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Electricity_Sensor/img/Twig-Electricity-Sensor.jpg" /></div>

电力传感器模块是Grove系列的一员。它基于TA12-200电流互感器，能够将大电流交流电转换为小幅度信号。您可以使用它来测试高达5A的大电流交流电。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Electricity-Sensor-p-777.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" /></a></p>

## 特点

- Grove兼容接口
- 最大5A输入
- 高精度
- 小巧的尺寸

:::提示
关于Grove模块的更多详细信息，请参见 [Grove 系统](https://wiki.seeedstudio.com/Grove_System/)
:::

## 应用场景

- 交流电测量
- 设备状态监测

## 规格参数

### 关键规格参数

| **项目** | **最小值**         |
| -------- | ------------------ |
| PCB尺寸  | 2.0cm\*4.0cm       |
| 接口     | 2.0mm 间距的引脚头 |
| IO结构   | SIG,NC,NC,GND      |
| RoHS     | 是                 |

### 电子特性

| **项目** | **最小值** | **标准值** | **最大值** | **单位**  |
| -------- | ---------- | ---------- | ---------- | --------- |
| 变换比   | -          | 2000:1     | -          | -         |
| 输入电流 | 0          | -          | 5          | A         |
| 输出电流 | 0          | -          | 2.5        | mA        |
| 采样电阻 | -          | 800        | -          | Ω         |
| 采样电压 | 0          | -          | 2          | V         |
| 工作频率 | 20         | -          | 20K        | HZ        |
| 非线性度 | -          | -          | 0.2%       | -         |
| 相移     | -          | -          | 5'         | -         |
| 工作温度 | -55        | -          | 85         | ℃         |
| 绝缘强度 | -          | 6          | -          | KVAC/1min |

## 硬件概述

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Electricity_Sensor/img/dimensions.jpg" /></div>

## 支持的平台

| Arduino                                                      | 树莓派                                                       |                                                              |                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div> |

:::警告
上述提到的支持平台只是表明该模块的软件或理论上的兼容性。在大多数情况下，我们只提供针对Arduino平台的软件库或代码示例。由于无法为所有可能的MCU平台提供软件库/演示代码，因此用户需要自行编写软件库。
:::

## 入门指南

### 使用Arduino进行操作

以下代码示例展示了测量交流电压幅度的一个简单应用。SIG引脚将基于所测量的交流电流输出一个交流电压。您可以使用ADC（模数转换器）来测量该值。

#### 硬件

- **步骤1.** 准备以下物品：

| Seeeduino V4.2 | 基础盾板 | Grove-电力传感器 |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Electricity_Sensor/img/45d_small.jpg" /></div>|
|[立即获取](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即获取](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即获取](https://www.seeedstudio.com/Grove-Electricity-Sensor-p-777.html)|

- **步骤2.** 将Grove-Electricity_Sensor连接到Grove-Base Shield的**A0**端口。
- **步骤3.** 将Grove-Base Shield插入到Seeeduino中。
- **步骤4.** 通过USB线将Seeeduino连接到电脑。

<!--link-->
![with_ardu](https://files.seeedstudio.com/wiki/Grove-Electricity_Sensor/img/with_ardu.jpg)

:::注意
如果没有Grove Base Shield，我们也可以直接将这个模块连接到Seeeduino，如下所示。
:::

| Seeeduino       | Grove-Electricity_Sensor |
|---------------|-------------------------|
| 5V            | 红色                   |
| GND           | 黑色                 |
| Not Conencted | 白色                 |
| A0            | 黄色                |

#### 软件

**步骤1.** 复制代码并将其烧录到控制器板上，然后上传代码。

```c
    /****************************************************************************/  
    //  Function: Measure the amplitude current of the alternating current and
    //            the effective current of the sinusoidal alternating current.
    //  Hardware: Grove - Electricity Sensor        
    //  Date:    Jan 19,2013
    //  by www.seeedstudio.com
    #define ELECTRICITY_SENSOR A0 // Analog input pin that sensor is attached to

    float amplitude_current;               //amplitude current
    float effective_value;       //effective current

    void setup()
    {
        Serial.begin(9600);
        pins_init();
    }
    void loop()
    {
        int sensor_max;
        sensor_max = getMaxValue();
        Serial.print("sensor_max = ");
        Serial.println(sensor_max);
        //the VCC on the Grove interface of the sensor is 5v
        amplitude_current=(float)sensor_max/1024*5/800*2000000;
        effective_value=amplitude_current/1.414;//minimum_current=1/1024*5/800*2000000/1.414=8.6(mA)
                            //Only for sinusoidal alternating current
        Serial.println("The amplitude of the current is(in mA)");
        Serial.println(amplitude_current,1);//Only one number after the decimal point
        Serial.println("The effective value of the current is(in mA)");
        Serial.println(effective_value,1);
    }
    void pins_init()
    {
        pinMode(ELECTRICITY_SENSOR, INPUT);
    }
    /*Function: Sample for 1000ms and get the maximum value from the SIG pin*/
    int getMaxValue()
    {
        int sensorValue;             //value read from the sensor
        int sensorMax = 0;
        uint32_t start_time = millis();
        while((millis()-start_time) < 1000)//sample for 1000ms
        {
            sensorValue = analogRead(ELECTRICITY_SENSOR);
            if (sensorValue > sensorMax)
            {
                /*record the maximum sensor value*/
                sensorMax = sensorValue;
            }
        }
        return sensorMax;
    }
```

:::注意
代码能够感应到的最小有效电流可以通过以下公式计算得出：最小电流 = 1/1024 * 5/800 * 2000000/1.414 = 8.6(mA)。
:::

- **步骤2.** 打开串口监视器，结果如下：

![](https://files.seeedstudio.com/wiki/Grove-Electricity_Sensor/img/ardu_result.jpg)

### 使用树莓派

#### 硬件

- **步骤1.** 准备以下物品：

| 树莓派 | GrovePi_Plus | Grove-电力传感器 |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Electricity_Sensor/img/45d_small.jpg" /></div>|
|[立即获取](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即获取](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[立即获取](https://www.seeedstudio.com/Grove-Electricity-Sensor-p-777.html)|

- **步骤2.** 将GrovePi_Plus插入树莓派。
- **步骤3.** 将Grove-Electricity_Sensor连接到GrovePi_Plus的**A0**端口。
- **步骤4.** 通过USB线将树莓派连接到电脑。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Electricity_Sensor/img/with_rpi.jpg" /></div>

#### 软件

- **步骤1.** 按照[设置软件](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/)的指引来配置开发环境。
- **步骤2.** 从Github仓库克隆代码。

```bash
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **步骤3.** 执行以下命令来使用此传感器

```bash
cd ~/GrovePi/Software/Python
python grove_electricity_sensor.py
```

以下是示例代码：

```python
#!/usr/bin/env python
#
# GrovePi Example for using the Grove Electricity Sensor (https://www.seeedstudio.com/wiki/Grove_-_Electricity_Sensor)
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

# Connect the Grove Electricity Sensor to analog port A0
# SIG,NC,NC,GND
sensor = 0

grovepi.pinMode(sensor,"INPUT")

# Vcc of the grove interface is normally 5v
grove_vcc = 5

while True:
  try:
      # Get sensor value
      sensor_value = grovepi.analogRead(sensor)

      # Calculate amplitude current (mA)
      amplitude_current = (float)(sensor_value / 1024 * grove_vcc / 800 * 2000000)

      # Calculate effective value (mA)
      effective_value = amplitude_current / 1.414

      # minimum_current = 1 / 1024 * grove_vcc / 800 * 2000000 / 1.414 = 8.6(mA)
      # Only for sinusoidal alternating current

      print("sensor_value", sensor_value)
      print("The amplitude of the current is", amplitude_current, "mA")
      print("The effective value of the current is", effective_value, "mA")
      time.sleep(1)

  except IOError:
      print ("Error")
```

以下是结果：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Electricity_Sensor/img/rpi_result.jpg" /></div>

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Electricity_Sensor/res/Electricity_sensor_v1.0_eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>
## 资源

- **[Eagle]** [Grove -电力传感器 Eagle 文件](https://files.seeedstudio.com/wiki/Grove-Electricity_Sensor/res/Electricity_sensor_v1.0_eagle_files.zip)
- **[PDF]** [PDF格式的电路图](https://files.seeedstudio.com/wiki/Grove-Electricity_Sensor/res/Electricity_sensor_sch.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在此为您提供不同的支持，以确保您在使用我们的产品时能够尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
