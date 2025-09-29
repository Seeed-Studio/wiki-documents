---
description: Grove - 10A DC电流传感器 (ACS725)
title: Grove - 10A DC电流传感器 (ACS725)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-10A_DC_Current_Sensor-ACS725
last_update:
  date: 1/9/2023
  author: jianjing Huang
---

<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/img/preview.png" /></div>

Grove - 10A DC电流传感器 (ACS725) 是基于ACS725的高精度直流电流传感器。Allegro™ ACS725电流传感器IC是工业、汽车、商业和通信系统中直流电流检测的经济且精确的解决方案。

Grove - 10A DC电流传感器 (ACS725) 可测量高达10A的直流电流，具有264mV/A的基本灵敏度。该传感器不支持交流电流，如果您需要测量交流负载，请查看：

[Grove - ±5A DC/AC电流传感器 (ACS70331)](https://www.seeedstudio.com/Grove-5A-DC-AC-Current-Sensor-ACS70331-p-2928.html)

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-10A-DC-Current-Sensor-ACS725-p-2927.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特性

- 高带宽120 kHz模拟输出，用于控制应用中的更快响应时间
- 通过专有的放大器和滤波器设计技术显著改善带宽，行业领先的噪声性能
- 1.2 mΩ主导体电阻，具有低功耗损耗和高浪涌电流耐受能力
- 差分霍尔传感器可消除共模场
- 模拟输出

## 规格

|参数|值|
|---|---|
|供电电压|3.3V / 5V|
|工作环境温度| -40 – 150℃|
|存储温度|- 65°C – 165°C|
|工作电压|&lt;400V|
|电流检测范围|0 – 10A|
|灵敏度|264mV/A(典型值)|
|输出接口|模拟|
|输入接口|螺丝端子|

## 工作原理

电流检测有两种类型：直接检测和间接检测。分类主要基于用于测量电流的技术。

**直接检测：**

- 欧姆定律

**间接检测：**

- 法拉第电磁感应定律
- 磁场传感器
- 法拉第效应

Grove - 10A DC电流传感器 (ACS725) 使用磁场传感器技术。磁场传感器技术有三种类型：

- 霍尔效应
- 磁通门传感器
- 磁阻电流传感器

Grove - 10A DC电流传感器 (ACS725) 基于霍尔原理，差分霍尔传感器可消除共模。

## 硬件概览

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/img/pinout.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/img/pinout.jpg" /></a></p>
  <figcaption><b>图3</b>. <i>引脚分布</i></figcaption>
</figure>
</div>

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

## 入门指南

:::caution
测试过程中禁止人体接触模块，否则可能有触电危险。
:::

### 使用 Arduino

**所需材料**

| Seeeduino V4.2 | Base Shield | 10A DC 电流传感器 (ACS725) |
|----------------|-------------|-----------------------------|
|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" /></div>|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" /></div>|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/img/thumbnail.jpg" /></div>|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-10A-DC-Current-Sensor-ACS725-p-2927.html)|

>此外，您可以考虑我们的新产品 [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)，它相当于 Seeeduino V4.2 和 Base Shield 的组合。

:::note
**1** 请轻轻插入 USB 数据线，否则可能损坏接口。请使用内部有 4 根线的 USB 数据线，只有 2 根线的 USB 数据线无法传输数据。如果您不确定手头的数据线，可以点击 [这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) 购买。

**2** 每个 Grove 模块在购买时都会附带一根 Grove 数据线。如果您丢失了 Grove 数据线，可以点击 [这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) 购买。
:::

#### 硬件连接

- **步骤 1.** 将 Grove - 10A DC 电流传感器 (ACS725) 连接到 Base Shield 的 **A0** 端口。

- **步骤 2.** 将待测电路的正负极连接到螺丝端子的对应正负极。

:::tip
如果正负极接反，读数将会反转。此传感器在使用前需要校准，因此请不要先给电路通电。
:::

- **步骤 3.** 将 Grove - Base Shield 插入 Seeeduino。

- **步骤 4.** 使用 USB 数据线将 Seeeduino 连接到电脑。

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/img/101020616-connect.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/img/101020616-connect.png" /></a></p>
  <figcaption><b>图 4</b>. <i>在此演示中我们使用了直流电源，请将电流设置为 0A 或不要先通电</i></figcaption>
</figure>
</div>

#### 软件

:::caution
如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 从 Github 下载 [Grove 电流传感器](https://github.com/Seeed-Studio/Grove_Current_Sensor) 库。

- **步骤 2.** 在 /example/ 文件夹中，您可以找到示例代码。这里我们以 **Grove_10A_Current_Sensor** 为例。直接点击 [Grove_10A_Current_Sensor.ino](https://github.com/Seeed-Studio/Grove_Current_Sensor/blob/master/examples/Grove_10A_Current_Sensor/Grove_10A_Current_Sensor.ino) 打开示例代码，或者您可以复制以下代码：

```cpp
#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define RefVal 3.3
  #define SERIAL SerialUSB
#else
  #define RefVal 5.0
  #define SERIAL Serial
#endif
//需要一个 OLED 显示屏
//使用 A0 引脚
#define Pin A0

// 取 500 次平均值
const int averageValue = 500;

long int sensorValue = 0;
float sensitivity = 1000.0 / 264.0; //1000mA 每 264mV 

float Vref = 322;   //Vref 是零漂值，使用前需要将此值更改为实际测量值。
void setup() 
{
  SERIAL.begin(9600);
}

void loop() 
{
  // 读取值 10 次：
  for (int i = 0; i < averageValue; i++)
  {
    sensorValue += analogRead(Pin);

    // 在下一次循环前等待 2 毫秒
    delay(2);
  }

  sensorValue = sensorValue / averageValue;

  // 板载 ADC 是 10 位
  // 不同的电源会导致不同的参考源
  // 示例：2^10 = 1024 -> 5V / 1024 ~= 4.88mV
  //          unitValue= 5.0 / 1024.0*1000 ;
  float unitValue= RefVal / 1024.0*1000 ;
  float voltage = unitValue * sensorValue; 

  // 无负载时，Vref=初始值
  SERIAL.print("initialValue: ");
  SERIAL.print(voltage);
  SERIAL.println("mV"); 
  
  // 计算对应的电流
  float current = (voltage - Vref) * sensitivity;

  // 打印显示电压 (mV)
  // 此电压是对应电流的引脚电压
  /*
  voltage = unitValue * sensorValue-Vref;
  SERIAL.print(voltage);
  SERIAL.println("mV");
  */

  // 打印显示电流 (mA)
  SERIAL.print(current);
  SERIAL.println("mA");
   
  SERIAL.print("\n");

  // 重置 sensorValue 以便下一次读取
  sensorValue = 0;
  // 每秒读取一次
  delay(1000);
}
```

- **步骤 3.** 上传示例代码。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

- **步骤 4.** 打开 Arduino IDE 的 **串口监视器**，点击 **工具->串口监视器**，或者同时按下 `ctrl`+`shift`+`m` 键。将波特率设置为 **9600**。

- **步骤 5. 校准**  
        当没有电流流动时，传感器仍会有一个小的输出值。我们称这个值为 **零偏移**。

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/img/ca1.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/img/ca1.jpg" /></a></p>
  <figcaption><b>图 5</b>. <i>此板的零偏移为 346.68mV，转换为电流为 93.48mA</i></figcaption>
</figure>
</div>

由于存在零偏移，当没有电流时传感器仍会有读数。因此我们设置了一个参数 **Vref** 来修正它，你可以在上面的代码块中找到。

第19行：

```cpp
float Vref = 322;  
// Vref 是零漂移值，在使用之前需要将此值更改为您实际测量的值。
```

在示例代码中，我们将 Vref 设置为 322，然而零偏移值因板子而异。如您所知，我们在此示例中使用的板子的值为 346.68。因此我们需要修改第21行：

```cpp
float Vref = 346.68;
```

然后保存代码并重新上传代码，按照步骤2和步骤3操作。现在让我们看看：

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/img/ca2.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/img/ca2.jpg" /></a></p>
  <figcaption><b>图6</b>. <i>现在电流零偏移变为 0mA</i></figcaption>
</figure>
</div>

当电流输出变为 0mA 或一个较小的值时，您已经完成了校准。

- **步骤6.** 现在一切准备就绪，您可以开始供电了。请随意使用它，记住这是一个 10A 的直流电流传感器，电流不能超过 10A！

如果您想了解结果的计算公式，请参考 [FAQ Q1](#faq)

### 使用 Raspberry Pi

**所需材料**

| Raspberry Pi | Grove Base Hat for RasPi | 10A DC Current Sensor |
|--------------|-------------------------------|-----------------------|
|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div>|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/Grove-2.5A_DC_Current_Sensor-ACS70331/img/thumbnail.jpg" /></div>|
|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即购买](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[立即购买](https://www.seeedstudio.com/Grove-10A-DC-Current-Sensor-ACS725-p-2927.html)|

#### 硬件连接

- **步骤1**. 将 Grove Base Hat 插入 Raspberry Pi。

- **步骤2**. 将 Grove - 10A DC Current Sensor(ACS70331) 连接到 Base Hat 的 **A0** 端口。

- **步骤3**. 将待测电路的正负极连接到螺丝端子的对应正负极。

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/img/101020616-connect2.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/img/101020616-connect2.png" /></a></p>
  <figcaption><b>图7</b>. <i>我们在此示例中使用直流电源，请将电流设置为 0A 或初始状态不要通电</i></figcaption>
</figure>
</div>

:::提示
如果您反接了正负极，读数将会反转。此传感器在使用前需要校准，因此请不要先给电路通电。
:::

- **步骤4**. 通过 Micro-USB 电缆为 Raspberry Pi 供电。

:::注意
您可以通过电脑 USB 端口或直流适配器为 Raspberry Pi 供电。然而，如果您使用的是 Raspberry Pi 3B+，我们强烈建议您使用直流适配器供电。如果使用电脑的 USB 端口，可能会损坏 Raspberry Pi 3B+。
:::

#### 软件

- **步骤1**. 按照 [设置软件](https://wiki.seeedstudio.com/cn/Grove_Base_Hat_for_Raspberry_Pi/#installation) 配置开发环境。

- **步骤2**. 通过克隆 [grove.py](https://github.com/Seeed-Studio/grove.py) 库下载源文件。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **步骤3**. 执行以下命令运行代码。

```python
cd grove.py/grove   # 进入示例文件夹
python grove_current_sensor.py 0 10A   # 运行示例程序
```

然后终端将输出如下内容：

```python
pi@raspberrypi:~/grove.py/grove $ python grove_current_sensor.py 0 10A
pin_voltage(mV):
324
current(mA):
8.0
()
pin_voltage(mV):
324
current(mA):
8.0
()
pin_voltage(mV):
323
current(mA):
4.0
()
pin_voltage(mV):
324
current(mA):
8.0
()
pin_voltage(mV):
324
current(mA):
8.0
()
pin_voltage(mV):
324
current(mA):
8.0
()
^CTraceback (most recent call last):
  File "grove_current_sensor.py", line 200, in <module>
    main()
  File "grove_current_sensor.py", line 185, in main
    time.sleep(1)
KeyboardInterrupt
```

按 `ctrl`+`c` 退出。

:::注意
请注意第二条命令，文件名后有两个参数：

- <font style={{fontWeight: 'bold', color: '#AE0000'}}>0</font> 表示传感器连接到 A0 端口。如果您将传感器连接到 A2 端口，则需要将此参数更改为 2。此参数范围为 0-7，但如果您使用 Grove Base Hat，由于接口的物理限制，您只能使用 0/2/4/6。

- <font style={{fontWeight: 'bold', color: '#AE0000'}}>10A</font> 表示电流传感器类型为 10A DC。
:::

传感器                                     |电流类型|参数值
-------------------------------------------|--------|----
Grove - 2.5A DC Current Sensor(ACS70331)   |DC      |2.5A
Grove - ±5A DC/AC Current Sensor (ACS70331)|DC      |5A_DC
                                           |AC      |5A_AC
Grove - 10A DC Current Sensor (ACS725)     |DC      |10A

<div align="center"><i>此系列有三个电流传感器，参数列表如上</i></div>

:::注意
请注意，10A 的直流电流传感器在测量小范围时会有较大的误差，因此建议提供超过 200mA 的电流进行测试。此外，测量环境会影响精度，例如电源电压的纹波应尽可能小。
:::

- **步骤4 校准**.  


当没有电流流动时，传感器仍然会有一个小的输出值。我们称这个值为零偏移。如您所见，在步骤 3 中，该板的零偏移为 324mV，转换为电流为 8mA。

由于存在零偏移，即使没有电流，传感器也会有读数。因此，我们设置了一个参数 **Vref** 来修正它，您可以在 **python grove_current_sensor.py** 中找到它。对于 Grove - 10A 直流电流传感器 (ACS725)，我们默认将 **Vref** 设置为 322，但零偏移因板而异。这就是为什么我们需要先进行校准。

请查看以下 Python 代码。

```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
# The MIT License (MIT)
# Copyright (C) 2018  Seeed Technology Co.,Ltd.
#
# 这是用于 Grove Base Hat 的库
# 用于连接树莓派的 Grove 传感器。
'''
这是以下传感器的代码：
    - `Grove - 2.5A 直流电流传感器  <https://www.seeedstudio.com/Grove-2-5A-DC-Current-Sensor-ACS70331-p-2929.html>`_
    - `Grove - 5A 交流/直流电流传感器 <https://www.seeedstudio.com/Grove-5A-DC-AC-Current-Sensor-ACS70331-p-2928.html>`_
    - `Grove - 10A 电流传感器      <https://www.seeedstudio.com/Grove-10A-DC-Current-Sensor-ACS725-p-2927.html>`_
示例：
    .. code-block:: python
        import time
        from grove_current_sensor import Current
        pin = 0
        sensor_type = "2.5A"
        # 如果使用 10A 电流传感器，输入：pin = 0 , sensor_type = "10A"
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
    Grove 电流传感器类
    '''

    def __init__(self,bus_num=1,addr=ADC_DEFAULT_IIC_ADDR):
        '''
        初始化 IIC。
        参数: 
            bus_num(int): 总线编号；
            addr(int): IIC 地址；
        '''
        self.bus = Bus(bus_num)
        self.addr = addr
  
    def get_nchan_vol_milli_data(self,n,averageValue):
        '''
        获取 n 通道的电压数据，单位为 mV。
        :param int n: ADC 引脚。
        :param int averageValue: 平均采集频率。
        返回: 
            int: 电压值
        '''
        val = 0
        for i in range(averageValue):
            data = self.bus.read_i2c_block_data(self.addr,REG_VOL_START+n,2)
            val += data[1]<<8|data[0]
        val = val / averageValue
        return val

    def get_nchan_current_data(self,n,sensitivity,Vref,averageValue):
        '''
        2.5A/5A 直流/10A 电流传感器获取 n 通道数据，单位为 mA。
        :param int n: ADC 引脚。
        :param float sensitivity: 将电压转换为电流的系数。
        :param int Vref: 空载时的初始电压。
        :param int averageValue: 平均采集频率。
        返回: 
            int: 电流值
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
        5A 电流传感器交流输出，获取 n 通道数据，单位为 mA。
        :param int n: ADC 引脚。
        :param float sensitivity: 将电压转换为电流的系数。
        :param int Vref: 空载时的初始电压。
        :param int averageValue: 平均采集频率。
        返回: 
            int: 电流值
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
            print("参数输入错误！")
            print("请输入参数，例如：python grove_current_sensor 0 2.5A")
            print("参数1: 0-7")
            print("参数2: 2.5A/5A_DC/5A_AC/10A")
    
    else:
        print("请输入参数，例如：python grove_current_sensor 0 2.5A")
        print("参数1: 0-7")
        print("参数2: 2.5A/5A_DC/5A_AC/10A")
    
    
if __name__ == '__main__':
    main()

```

您可以在上面代码块的第 156 行修改 **Vref**：

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

如您所见，对于 10A 电流传感器，默认的 **Vref** 是 322，而在 **步骤 3** 中，我们可以发现当没有电流时零偏移值为 324mV。因此我们将其改为 324。

```python
            if (sensor_type == "10A"):
                sensitivity = 1000.0 / 264.0
                Vref = 324
```

现在，让我们再次运行这个示例。

```python

pi@raspberrypi:~/grove.py/grove $ python grove_current_sensor.py 0 10A
pin_voltage(mV):
324
current(mA):
0.0
()
pin_voltage(mV):
325
current(mA):
4.0
()
pin_voltage(mV):
324
current(mA):
0.0
()
pin_voltage(mV):
323
current(mA):
-4.0
()
pin_voltage(mV):
324
current(mA):
0.0

```

嗯，比之前更好了，现在您可以更准确地测量电流了 😄

## 常见问题解答

**Q1#** 电流计算公式是什么？

**A1:** 如果您觉得[原理部分](#working-principle)非常复杂，我们可以用一种简单的方式来解释。被测电路中的电流激发磁场，从而导致 GMR 元件的电阻值发生变化。而桥路中的电阻变化会导致芯片输出电压发生变化。我们将输出电压称为 **V<sub>IOUT</sub>**。

<div><p style={{textAlign: 'center'}}>
   V<sub>IOUT</sub> = Sens × I<sub>p</sub> +  V<sub>IOUT(Q)</sub>
</p></div>

> **Sens**: Sens 是将电流转换为输出电压的系数。对于此模块，它是 264mA/V。  
> **I<sub>p</sub>**: I<sub>p</sub> 是被测电路中的电流值，单位为 mA。  
> **V<sub>IOUT(Q)</sub>**: V<sub>IOUT(Q)</sub> 是当 I<sub>p</sub> 为 0mA（即被测电路中没有电流）时的输出电压，单位为 mV。

以下是电流值的计算公式：  

<div><p style={{textAlign: 'center'}}>
  I<sub>p</sub> = (V<sub>IOUT</sub> - V<sub>IOUT(Q)</sub>) / Sens
</p></div>

现在，让我们回顾图 5，我们将解释为什么当被测电路中的实际电流值为 0 时，输出的电流值不是 0。如您在图 5 中所见，**initialValue** 是 346.68mV，即 **V<sub>IOUT</sub>**；电流是 93.48mA，即 **I<sub>p</sub>**。至于 **V<sub>IOUT(Q)</sub>**，它是我们在代码中设置的 **Vref**。
在图 5 中，它是 265。而 **Sens** 是 264mA/V，即 264mA/1000mV。现在，做一些数学计算：

<div><p style={{textAlign: 'center'}}>
  {'{'}(346.68mV-322mV) / (264mA/1000mV){'}'} = 93.48mA
</p></div>

因此，在图 6 中，当我们将 **Vref** 设置为 346.68 时，**Ip** 变为 0mA。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/res/10A%20Current%20Sensor%20(ACS725).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[ZIP]** [Grove - 10A DC电流传感器 (ACS725) 原理图文件](https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/res/10A%20Current%20Sensor%20(ACS725).zip)
- **[PDF]** [ACS725 数据手册](https://files.seeedstudio.com/wiki/Grove-10A_Current_Sensor-ACS725/res/ACS725.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时拥有顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>