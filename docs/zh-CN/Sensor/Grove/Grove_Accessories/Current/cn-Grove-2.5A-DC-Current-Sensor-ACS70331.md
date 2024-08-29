---
description: Grove - 2.5A 直流电流传感器(ACS70331)
title: Grove - 2.5A 直流电流传感器(ACS70331)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-2.5A-DC-Current-Sensor-ACS70331
last_update:
  date: 03/21/2024
  author: WuFeifei
---


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/preview.png" /></div>

Grove - 2.5A DC 电流传感器（ACS70331）是一款基于 ACS70331 的高精度直流电流传感器。ACS70331 是一个芯片系列，本模块使用的是 ACS70331EESATR-2P5U3，它是 Allegro 公司针对 <2.5A 电流感应应用的高灵敏度电流传感器 IC。它集成了巨磁阻（GMR）技术，这种技术比传统的霍尔效应传感器对通过低电阻集成初级导体的电流产生的磁场感应更加敏感，灵敏度是传统霍尔效应传感器的 25 倍。

Grove - 2.5A DC 电流传感器（ACS70331）可以测量高达 2.5A 的直流电流，基础灵敏度为 800mV/A。该传感器不支持交流电流测量，如果您想测量交流负载，请查看：

[Grove - 2.5A DC 电流传感器 (ACS725)](https://www.seeedstudio.com/Grove-5A-DC-AC-Current-Sensor-ACS70331-p-2928.html)

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-2-5A-DC-Current-Sensor-ACS70331-p-2929.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特点

- 带宽为 1 MHz，响应时间 <550 ns
- 低噪声：在 1 MHz 下为 8 mA（rms）
- 初级导体电阻为 1.1 mΩ，导致功率损耗低
- 高直流电源抑制比（PSRR），适用于低精度电源或电池（3 至 4.5 V 工作电压）
- 模拟输出

## **规格**

|参数|值|
|---|---|
|工作电压|3.3V / 5V|
|工作环境温度| -40 – 85℃|
|存储温度|- 65°C – 125°C|
|工作电压范围|<100V|
|电流感应范围|0 – 2.5A|
|灵敏度|800mV/A(典型)|
|输出接口|模拟信号|
|输入接口|螺丝端子|

## 工作原理

电流感应有两种类型：直接感应和间接感应。这种分类主要基于测量电流所使用的技术。

**直接感应：**

- 欧姆定律

**间接感应：**

- 法拉第电磁感应定律
- 磁场传感器
- 法拉第效应

Grove - 2.5A DC 电流传感器（ACS70331）使用的是磁场传感器技术。磁场传感器技术主要有三种：

- 霍尔效应
- 磁通门传感器
- 磁阻电流传感器

Grove - 2.5A DC 电流传感器（ACS70331）基于磁阻电流传感器原理，也被称为巨磁阻（GMR）。磁阻器（MR）是一个两端设备，其电阻会随着施加的磁场呈抛物线变化。这种由于磁场导致的 MR 电阻变化被称为磁阻效应。

ACS70331 QFN 封装的内部结构如图 2 所示。芯片位于初级电流路径上方，这样产生的磁场就会与芯片上的 GMR 元件在同一平面内。对于正向 IP 电流流动，GMR 元件 1 和 2 感应 +X 方向的磁场，而 GMR 元件 3 和 4 感应 -X 方向的磁场。这使得能够差分测量电流并抑制外部杂散磁场。

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/principle1.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/principle1.jpg" /></a></p>
  <figcaption><b>图 1</b>. <i>ACS70331 内部结构图</i></figcaption>
</figure>
</div>


如图 2 所示，四个 GMR 元件以惠斯通电桥配置排列，使得电桥的输出与四个元件感应到的差分磁场成正比，从而抑制公共磁场。

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/principle2.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/principle2.jpg" /></a></p>
  <figcaption><b>图 2</b>. <i>惠斯通电桥配置图</i></figcaption>
</figure>
</div>


## **硬件概述**

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/pinout.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/pinout.jpg" /></a></p>
  <figcaption><b>图 3</b>. <i>引脚图</i></figcaption>
</figure>
</div>


## 支持的平台

| Arduino                                                      | 树莓派                                                       |                                                              |                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div> |

## 入门指南

:::危险警告
在测试过程中，禁止人体接触模块，否则有触电危险。
:::

### 与Arduino配合使用

**所需材料**

| Seeeduino V4.2 | **基础盾板** | 2.5A **直流电流传感器**(ACS70331) |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/thumbnail.jpg" /></div>|
|[立即获取](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即获取](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即获取](https://www.seeedstudio.com/Grove-2-5A-DC-Current-Sensor-ACS70331-p-2929.html)|

>此外，您还可以考虑我们新推出的[Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)，其功能相当于Seeeduino V4.2和基础盾板的组合。

:::注意
**1** 请轻轻插入USB线，否则可能会损坏端口。请使用内部有四根线的USB线，两根线的USB线无法传输数据。如果您不确定手中的线是否符合要求，可以点击[这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)购买。

**2** 您购买每个Grove模块时，都会随附一根Grove电缆。如果您遗失了Grove电缆，可以点击[这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-(5-PCs-pack)-p-936.html)购买。
:::

#### 硬件连接

- **步骤1.** 将Grove - 2.5A直流电流传感器（ACS70331）连接到基础盾板的**A0**端口。

- **步骤2.** 将待测试电路的正极和负极分别连接到螺丝接线柱的对应正负极。

:::提示
如果正负极接反，读数会相反。这个传感器在使用前需要进行校准，因此请不要先给电路通电。
:::

- **步骤3.** 将Grove - 基础盾板插入Seeeduino。

- **步骤4.** 通过USB线将Seeeduino连接到电脑。

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/103020193-connect.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/103020193-connect.png" /></a></p>
  <figcaption><b>图 4</b>. <i>我们在本次演示中使用直流电源，请将电流设置为0A或先不要给其通电。</i></figcaption>
</figure>
</div>

#### 软件

:::警告
如果您是第一次使用Arduino，我们强烈建议您在开始之前先阅读[Arduino入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。
:::

- **步骤1.** 从Github下载[Grove电流传感器](https://github.com/Seeed-Studio/Grove_Current_Sensor)库。

- **步骤2.** 在/example/文件夹中，您可以找到演示代码。这里我们以[Grove_2_5A_Current_Sensor.ino](https://github.com/Seeed-Studio/Grove_Current_Sensor/tree/master/examples/Grove_2_5A_Current_Sensor)为例。只需点击Grove_2_5A_Current_Sensor.ino即可打开演示代码。或者您也可以复制以下代码：

```cpp
#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define RefVal 3.3
  #define SERIAL SerialUSB
#else
  #define RefVal 5.0
  #define SERIAL Serial
#endif
//An OLED Display is required here
//use pin A0
#define Pin A0

// Take the average of 10 times

const int averageValue = 10;

int sensorValue = 0;

float sensitivity = 1000.0 / 800.0; //1000mA per 800mV 


float Vref = 265;  //Firstly,change this!!!

void setup() 
{
  SERIAL.begin(9600);
}

void loop() 
{
  // Read the value 10 times:
  for (int i = 0; i < averageValue; i++)
  {
    sensorValue += analogRead(Pin);

    // wait 2 milliseconds before the next loop
    delay(2);

  }

  sensorValue = sensorValue / averageValue;
 

  // The on-board ADC is 10-bits 
  // Different power supply will lead to different reference sources
  // example: 2^10 = 1024 -> 5V / 1024 ~= 4.88mV
  //          unitValue= 5.0 / 1024.0*1000 ;
  float unitValue= RefVal / 1024.0*1000 ;
  float voltage = unitValue * sensorValue; 
  
  //When no load,Vref=initialValue
  SERIAL.print("initialValue: ");
  SERIAL.print(voltage);
  SERIAL.println("mV"); 

  // Calculate the corresponding current
  float current = (voltage - Vref) * sensitivity;

  // Print display voltage (mV)
  // This voltage is the pin voltage corresponding to the current
  /*
  voltage = unitValue * sensorValue-Vref;
  SERIAL.print(voltage);
  SERIAL.println("mV");
  */

  // Print display current (mA)
  SERIAL.print(current);
  SERIAL.println("mA");
   
  SERIAL.print("\n");

  // Reset the sensorValue for the next reading
  sensorValue = 0;
  // Read it once per second
  delay(1000);
}
```

- **步骤3.** 上传演示代码。如果您不知道如何上传代码，请查阅[如何上传代码](https://wiki.seeedstudio.com/Upload_Code/)。

- **步骤4.** 在Arduino IDE中，通过点击**工具->串行监视器**来打开**串行监视器**。或者同时按下++ctrl+shift+m++键。将波特率设置为**9600**。
- **步骤5. 校准**
    当没有电流流过时，传感器仍然会有一个小的输出值。我们称这个值为**零点偏移**。

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/ca.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/ca.jpg" /></a></p>
  <figcaption><b>图 5</b>. <i>这块板的零点偏移是283.20mV，转换为电流为22.75mA。</i></figcaption>
</figure>
</div>

由于存在零点偏移，即使没有电流，传感器也会有读数。因此，我们设置了一个参数**Vref**来修正它，你可以在上面的代码块中找到它。

第21行：

```cpp
float Vref = 265;  
//Vref is zero drift value, you need to change this value to the value you actually measured before using it.
```

在演示代码中，我们将Vref设置为265，但是，零点偏移值因板而异。正如您所知，我们在这个演示中使用的板的零点偏移值是288.09。所以，让我们修改第21行：

```cpp
float Vref = 283.20;
```

然后保存代码并再次上传代码，按照步骤2和步骤3操作。现在让我们看看：

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/afca.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/afca.jpg" /></a></p>
  <figcaption><b>Figure 6</b>. <i>Now the current zero offset turns to 0mA</i></figcaption>
</figure>
</div>

当电流输出变为0mA或一个很小的值时，您就完成了校准。

- **步骤5.** 现在轮到你了，你可以通电了。请随意使用，记住这是一个2.5A直流电流传感器，电流不能超过2.5A！

如果您想知道结果的计算公式，请参考[常见问题Q1](https://yiyan.baidu.com/#faq)

### 使用树莓派操作

**所需材料**

| 树莓派 | Grove 树莓派底座板 | 2.5A 直流电流传感器 |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/thumbnail.jpg" /></div>|
|[立即获取](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即获取](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[立即获取](https://www.seeedstudio.com/Grove-2-5A-DC-Current-Sensor-ACS70331-p-2929.html)|

#### 硬件连接

- **步骤1**. 将Grove树莓派底座板插入树莓派。

- **步骤2**. 将Grove - 2.5A直流电流传感器（ACS70331）连接到底座板的**A0**端口。
- **步骤3**. 将待测试电路的正极和负极分别连接到螺丝接线柱的对应正负极。

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/103020193-connect_pi.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/103020193-connect_pi.png" /></a></p>
  <figcaption><b>图 7</b>. <i>我们在本次演示中使用直流电源，请将电流设置为0A或先不要给其通电。</i></figcaption>
</figure>
</div>

:::提示
如果您将正极和负极接反，读数将会反向。这个传感器在使用前需要进行校准，所以请不要先给电路通电。
:::

- **步骤4**. 通过Micro-USB线为树莓派供电。

:::警告
您可以通过电脑的USB端口或直流适配器为树莓派供电，但是，如果您使用的是树莓派3B+，我们强烈建议您使用直流适配器供电。如果使用电脑的USB端口，可能会损坏树莓派3B+。
:::

#### 软件

- **步骤1**. 按照[设置软件](https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation)来配置开发环境。

- **步骤2**. 通过克隆[grove.py](https://github.com/Seeed-Studio/grove.py)库来下载源文件。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **步骤3**. 执行以下命令来运行代码。

```python
cd grove.py/grove   # to enter the demo file folder
python grove_current_sensor.py 0 2.5A   # to run the demo program 
```

然后终端将输出以下内容：

```python

pi@raspberrypi:~/grove.py/grove $ python grove_current_sensor.py 0 2.5A
pin_voltage(mV):
270
current(mA):
13.0
()
pin_voltage(mV):
270
current(mA):
13.0
()
pin_voltage(mV):
270
current(mA):
13.0
()
pin_voltage(mV):
269
current(mA):
11.0
()
pin_voltage(mV):
270
current(mA):
13.0
()
^CTraceback (most recent call last):
  File "grove_current_sensor.py", line 200, in <module>
    main()
  File "grove_current_sensor.py", line 185, in main
    time.sleep(1)
KeyboardInterrupt
```

按`ctrl`+`c`退出。

:::注意
请注意第二个命令，文件名后面有两个参数：

- <font style={{fontWeight: 'bold', color: '#AE0000'}}>0</font> 表示传感器连接到A0端口。如果您将传感器连接到A2端口，则需要将此参数更改为2。此参数的取值范围为0-7，但如果您使用Grove底座板，由于接口的物理限制，您只能使用0/2/4/6。

- <font style={{fontWeight: 'bold', color: '#AE0000'}}>2.5A</font> 表示电流传感器类型为2.5A直流:::

传感器                                     |电流类型|参数值
-------------------------------------------|------------|----
Grove - 2.5A直流电流传感器(ACS70331)   |直流          |2.5A
Grove - 2.5A直流电流传感器 (ACS725)|直流          |5A_DC
                                           |AC          |5A_AC
Grove - 10A 直流电流传感器 (ACS725) | DC | 10A

<div align="center"><i>本系列有三种电流传感器，参数列表如上所示</i></div>

:::注意
请注意，2.5A的直流电流传感器在测量小范围时会有较大的误差，因此建议您提供大于200mA的电流进行测试。此外，测量环境也会影响精度，比如供电电压的纹波应尽可能小。
:::

- **步骤4 校准**。

    当没有电流流过时，传感器仍然会有一个小的输出值。我们称这个值为零偏移。正如你在步骤3中所看到的，这个板的零偏移是270mV，转换成电流是13mA。

    由于零偏移的存在，即使没有电流，传感器也会有读数。因此，我们设置了一个参数**Vref**来修正它，你可以在**python grove_current_sensor.py**中找到它。对于Grove - 2.5A直流电流传感器(ACS70331)，我们默认将**Vref**设置为260，但每块板的零偏移可能不同。这就是为什么我们需要先进行校准的原因。

    查看下面的Python代码：

```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
# The MIT License (MIT)
# Copyright (C) 2018  Seeed Technology Co.,Ltd.
#
# This is the library for Grove Base Hat
# which used to connect grove sensors for Raspberry Pi.
'''
This is the code for
    - `Grove - 2.5A DC current sensor  <https://www.seeedstudio.com/Grove-2-5A-DC-Current-Sensor-ACS70331-p-2929.html>`_
    - `Grove - 5A AC/DC current sensor <https://www.seeedstudio.com/Grove-5A-DC-AC-Current-Sensor-ACS70331-p-2928.html>`_
    - `Grove - 10A current sensor      <https://www.seeedstudio.com/Grove-10A-DC-Current-Sensor-ACS725-p-2927.html>`_
Examples:
    .. code-block:: python
        import time
        from grove_current_sensor import Current
        pin = 0
        sensor_type = "2.5A"
        #if use 10A current sensor input: pin = 0 , sensor_type = "10A"
        if (sensor_type == "2.5A"):
            sensitivity = 1000.0 / 800.0
            Vref = 260
        if (sensor_type == "5A_DC"):
            sensitivity = 1000.0 / 200.0
            Vref = 1498
        if (sensor_type == "5A_AC"):
            sensitivity = 1000.0 / 200.0
            Vref = 1498
        if (sensor_type == "10A"):
            sensitivity = 1000.0 / 264.0
            Vref = 322
        averageValue = 500
        ADC = Current()
        while True:
            if(sensor_type == "5A_AC"):
                pin_voltage = ADC.get_nchan_vol_milli_data(pin,averageValue)
                current = ADC.get_nchan_AC_current_data(pin,sensitivity,Vref,averageValue)
            else:
                temp = ADC.get_nchan_current_data(pin,sensitivity,Vref,averageValue)
                current = temp[0]
                pin_voltage = temp[1]
        
            current = round(current)
            print("pin_voltage(mV):")
            print(pin_voltage)
            print("current(mA):")
            print(current)
            print()
            time.sleep(1)
    
'''

import sys
import time
from grove.i2c import Bus

ADC_DEFAULT_IIC_ADDR = 0X04

ADC_CHAN_NUM = 8

REG_RAW_DATA_START = 0X10
REG_VOL_START = 0X20
REG_RTO_START = 0X30

REG_SET_ADDR = 0XC0

__all__ = ['Current','Bus']

class Current():
    '''
    Grove Current Sensor class
    '''

    def __init__(self,bus_num=1,addr=ADC_DEFAULT_IIC_ADDR):
        '''
        Init iic.
        Args: 
            bus_num(int): the bus number;
            addr(int): iic address;
        '''
        self.bus = Bus(bus_num)
        self.addr = addr
  
    def get_nchan_vol_milli_data(self,n,averageValue):
        '''
        Get n chanel data with unit mV.
        :param int n: the adc pin.
        :param int averageValue: Average acquisition frequency.
        Returns: 
            int: voltage value
        '''
        val = 0
        for i in range(averageValue):
            data = self.bus.read_i2c_block_data(self.addr,REG_VOL_START+n,2)
            val += data[1]<<8|data[0]
        val = val / averageValue
        return val

    def get_nchan_current_data(self,n,sensitivity,Vref,averageValue):
        '''
        2.5A/5A DC/10A cunrrent sensor get n chanel data with unit mA.
        :param int n: the adc pin.
        :param float sensitivity: The coefficient by which voltage is converted into current.
        :param int Vref: Initial voltage at no load.
        :param int averageValue: Average acquisition frequency.
        Returns: 
            int: current value
        '''
        val = 0
        for i in range(averageValue):
            data = self.bus.read_i2c_block_data(self.addr,REG_VOL_START+n,2)
            val += data[1]<<8|data[0]
        val = val / averageValue
        currentVal = (val - Vref) * sensitivity
        return currentVal,val

    def get_nchan_AC_current_data(self,n,sensitivity,Vref,averageValue):
        '''
        5A current sensor AC output and get n chanel data with unit mA.
        :param int n: the adc pin.
        :param float sensitivity: The coefficient by which voltage is converted into current.
        :param int Vref: Initial voltage at no load.
        :param int averageValue: Average acquisition frequency.
        Returns: 
            int: current value
        '''
        sensorValue = 0
        for i in range(averageValue):
            data=self.bus.read_i2c_block_data(self.addr,REG_VOL_START+n,2)
            val=data[1]<<8|data[0]
            if(val > sensorValue):
                sensorValue=val
            time.sleep(0.00004)
        currentVal = ((sensorValue - Vref) * sensitivity)*0.707
        return currentVal   

ADC = Current()
def main():
    if(len(sys.argv) == 3):

        pin = int(sys.argv[1])
        sensor_type = sys.argv[2]
        if (pin < 8 and (sensor_type == "2.5A" or sensor_type == "5A_DC" or sensor_type == "5A_AC" or sensor_type == "10A") ):
            if (sensor_type == "2.5A"):
                sensitivity = 1000.0 / 800.0
                Vref = 260
            if (sensor_type == "5A_DC"):
                sensitivity = 1000.0 / 200.0
                Vref = 1498
            if (sensor_type == "5A_AC"):
                sensitivity = 1000.0 / 200.0
                Vref = 1498
            if (sensor_type == "10A"):
                sensitivity = 1000.0 / 264.0
                Vref = 322
            averageValue = 500

            while True:

                if(sensor_type == "5A_AC"):
                    pin_voltage = ADC.get_nchan_vol_milli_data(pin,averageValue)
                    current = ADC.get_nchan_AC_current_data(pin,sensitivity,Vref,averageValue)
                else:
                    temp = ADC.get_nchan_current_data(pin,sensitivity,Vref,averageValue)
                    current = temp[0]
                    pin_voltage = temp[1]

                current = round(current)
                print("pin_voltage(mV):")
                print(pin_voltage)
                print("current(mA):")
                print(current)
                print()
                time.sleep(1)
            
        else:
            print("parameter input error!")
            print("Please enter parameters for example: python grove_current_sensor 0 2.5A")
            print("parameter1: 0-7")
            print("parameter2: 2.5A/5A_DC/5A_AC/10A")
    
    else:
        print("Please enter parameters for example: python grove_current_sensor 0 2.5A")
        print("parameter1: 0-7")
        print("parameter2: 2.5A/5A_DC/5A_AC/10A")
    
    
if __name__ == '__main__':
    main()

```

您可以在上述代码块的第147行修改**Vref**的值：

```python

        if (pin < 8 and (sensor_type == "2.5A" or sensor_type == "5A_DC" or sensor_type == "5A_AC" or sensor_type == "10A") ):
            if (sensor_type == "2.5A"):
                sensitivity = 1000.0 / 800.0
                Vref = 260
            if (sensor_type == "5A_DC"):
                sensitivity = 1000.0 / 200.0
                Vref = 1498
            if (sensor_type == "5A_AC"):
                sensitivity = 1000.0 / 200.0
                Vref = 1498
            if (sensor_type == "10A"):
                sensitivity = 1000.0 / 264.0
                Vref = 322
            averageValue = 500

```

正如你所看到的，对于2.5A电流传感器，默认的**Vref**是260，而在**步骤3**中，我们可以发现当没有电流时，零偏移值是270mV。因此，让我们将其更改为270。

```python
            if (sensor_type == "2.5A"):
                sensitivity = 1000.0 / 800.0
                Vref = 270
```

现在，让我们再次运行这个演示程序：

```python

pi@raspberrypi:~/grove.py/grove $ python grove_current_sensor.py 0 2.5A
pin_voltage(mV):
269
current(mA):
-1.0
()
pin_voltage(mV):
270
current(mA):
0.0
()
pin_voltage(mV):
270
current(mA):
0.0
()
pin_voltage(mV):
270
current(mA):
0.0
()
pin_voltage(mV):
270
current(mA):
0.0
()
^CTraceback (most recent call last):
  File "grove_current_sensor.py", line 200, in <module>
    main()
  File "grove_current_sensor.py", line 185, in main
    time.sleep(1)
KeyboardInterrupt
```

嗯，现在比之前好多了，你现在可以更准确地测量电流了 😄

## 常见问题解答

**Q1#** 电流的计算公式是什么？

**A1:** 如果你觉得[工作原理部分](https://yiyan.baidu.com/#working-principle)很复杂，那么让我们用简单的方式解释。待测电路中的电流会激发磁场，这会导致GMR元件的电阻值发生变化。而桥接电路中电阻的变化又会导致芯片输出电压的变化。我们称这个输出电压为**V<sub>IOUT</sub>**。

<div><p style={{textAlign: 'center'}}>
  V<sub>IOUT</sub> = Sens × I<sub>p</sub> + V<sub>IOUT(Q)</sub>
</p></div>

> **Sens**: Sens is the coefficient that converts the current into an output voltage. For this module it is 800mA/V.  
> **I<sub>p</sub>**: I<sub>p</sub> is the current value in the circuit to be tested, Unit mA.  
> **V<sub>IOUT(Q)</sub>**: V<sub>IOUT(Q)</sub> is the voltage output when the I<sub>p</sub> is 0mA(which means there is no current in the circuit to be tested), Unit mV.

Here comes the current value:  

<div><p style={{textAlign: 'center'}}>
  I<sub>p</sub> = (V<sub>IOUT</sub> - V<sub>IOUT(Q)</sub>) / Sens
</p></div>
现在，让我们回顾一下图5，我们将解释为什么待测电路中的实际电流值为0时，输出的电流值不是0。如图5所示，**initialValue**是283.20mV，这就是**V<sub>IOUT</sub>**；电流是22.75mA，这就是**I<sub>p</sub>**。至于**V<sub>IOUT(Q)</sub>**，它是我们在代码中设置的**Vref**。

在图5中，**V<sub>IOUT(Q)</sub>\**的值是265。而\**Sens**是800mA/V，也就是800mA/1000mV。现在，让我们来计算一下：

<div><p style={{textAlign: 'center'}}>
  {'{'}(283.20mV-265mV) / (800mA/1000mV){'}'} = 22.75mA
</p></div>

因此，在图6中，当我们将**Vref**设置为283.20时**，Ip**变为0mA。

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/res/Grove%20-%202.5A%20DC%20Current%20Sensor(ACS70331).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[ZIP]** [Grove - 2.5A 直流电流传感器(ACS70331) 原理图文件](https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/res/Grove%20-%202.5A%20DC%20Current%20Sensor(ACS70331).zip)
- **[PDF]** [ACS70331 数据手册](https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/res/Current_Sensor_ACS70331.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您在使用我们的产品时获得尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
