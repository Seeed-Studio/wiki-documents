---
description: Grove - 气体传感器(MQ9)
title: Grove - 气体传感器(MQ9)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Gas_Sensor-MQ9
last_update:
  date: 1/3/2023
  author: shuxu hu
---

<!-- <![](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ9/img/Grove_MQ3_Gas_Sensor.jpg)  -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ9/img/Grove_MQ3_Gas_Sensor.jpg" alt="pir" width={600} height="auto" /></p>


Grove - 气体传感器(MQ9)模块适用于气体泄漏检测（家庭和工业）。它适合检测<font color="Blue">液化石油气、一氧化碳、甲烷</font>。由于其高灵敏度和快速响应时间，可以尽快进行测量。传感器的灵敏度可以通过电位器进行调节。

<div class="admonition danger">
<p class="admonition-title">注意</p>
传感器值仅反映在允许误差范围内气体浓度的近似趋势，它不代表确切的气体浓度。检测空气中的某些成分通常需要更精确和昂贵的仪器，这不能用单个气体传感器来完成。如果您的项目旨在获得非常精确水平的气体浓度，那么我们不推荐这款气体传感器。
</div>



<!-- |Sensor|Gas Type|立即获取|
|---|---|---|
|MQ2|Combustible Gas, Smoke|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-937.html)|
|MQ3|Alcohol Vapor|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-1418.html)|
|MQ5|LPG, Natural Gas, Town Gas|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-938.html)|
|MQ9|Carbon Monoxide, Coal Gas, Liquefied Gas|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-1419.html)| -->

<table align="center">
  <tbody>
    <tr>
    <td><h4>传感器</h4></td>
    <td><h4>气体类型</h4></td>
    <td><h4>立即购买</h4></td>
    </tr>
    <tr>
    <td><a href="https://wiki.seeedstudio.com/cn/Grove-Gas_Sensor-MQ2/" target="_blank"><span>MQ2</span></a></td>
    <td>可燃气体、烟雾</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Gas-Sensor(MQ2)-p-937.html" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" alt="" width={200} height="auto"/></a>
</div></td>
    </tr>
    <tr>
    <td><a href="https://wiki.seeedstudio.com/cn/Grove-Gas_Sensor-MQ3/" target="_blank"><span>MQ3</span></a></td>
    <td>酒精蒸汽</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Gas-Sensor%28MQ3%29-p-1418.html" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" alt="" width={200} height="auto"/></a>
</div></td>
    </tr>
    <tr>
    <td><a href="https://wiki.seeedstudio.com/cn/Grove-Gas_Sensor-MQ5/" target="_blank"><span>MQ5</span></a></td>
    <td>液化石油气、天然气、城市煤气</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Gas-Sensor%28MQ5%29-p-938.html" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" alt="" width={200} height="auto"/></a>
</div></td>
    </tr>
    <tr>
    <td><a href="https://wiki.seeedstudio.com/cn/Grove-Gas_Sensor-MQ9/" target="_blank"><span>MQ9</span></a></td>
    <td>一氧化碳、煤气、液化气</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Gas-Sensor%28MQ9%29-p-1419.html" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" alt="" width={200} height="auto"/></a>
</div></td>
</tr>
</tbody></table>

:::tip
    我们已经发布了[Seeed气体传感器选择指南](https://wiki.seeedstudio.com/cn/Seeed_Gas_Sensor_Selection_Guide/)，它将帮助您选择最适合您需求的气体传感器。
:::

## 特性

-   检测范围广
-   稳定且使用寿命长
-   响应快速且灵敏度高

:::tip
    有关Grove模块的更多详细信息，请参考[Grove系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

## 规格参数


| 项目             | 参数               | 最小值 | 典型值    | 最大值              | 单位 |
|------------------|-------------------------|-----|------------|------------------|------|
| VCC              | 工作电压         | 4.9 | 5          | 5.1              | V    |
| PH               | 加热功耗     | 0.5 | -          | 340              | mW   |
| RL               | 负载电阻         |     | 可调 |                  |      |
| RH               | 加热器电阻       | -   | 33Ω±5%     | -                | Ω    |
| Rs               | 传感电阻      | 2   | -          | 20000            | Ω    |
| CO/CH4/LPG范围 | 检测浓度 | 200 | -          | 1000/10000/10000 | ppm  |



## 应用创意

-   气体泄漏检测。
-   玩具。


## 硬件概述


这是一个模拟输出传感器。需要连接到Grove底板的任意一个模拟接口。本教程中使用的示例使用A0模拟引脚。将此模块连接到底板的A0端口。

也可以使用跳线直接将Grove模块连接到Arduino，连接方式如下表所示：

| Arduino   | 气体传感器 |
|-----------|------------|
| 5V        | VCC        |
| GND       | GND        |
| NC        | NC         |
| Analog A0 | SIG        |

当气体浓度增加时，气体传感器的输出电压也会增加。可以通过调节电位器来调整灵敏度。<font color="Red">请注意，传感器的最佳预热时间为24小时以上</font>。有关MQ-9传感器的详细信息，请参考**资源**部分提供的数据手册。


## 支持的平台


<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    上面提到的支持平台表示该模块的软件或理论兼容性。在大多数情况下，我们只为Arduino平台提供软件库或代码示例。无法为所有可能的MCU平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

## 开始使用

### 与 Arduino 一起使用



| Seeeduino V4.2 | Base Shield | Grove - 气体传感器(MQ9) |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ9/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-1419.html" target="_blank">立即购买</a>|



<!-- ![](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ9/img/Read_Gas_Sensor_data.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ9/img/Read_Gas_Sensor_data.jpg" alt="pir" width={600} height="auto" /></p>



如上图所示，将 Grove - 气体传感器(MQ9) 连接到 A0 端口。

### 气体检测：基础示例

在这个示例中，传感器连接到 A0 引脚。显示从传感器读取的电压值。这个值可以用作阈值来检测气体浓度的任何增加/减少。

```
void setup() {
    Serial.begin(9600);
}

void loop() {
    float sensor_volt;
    float sensorValue;

    sensorValue = analogRead(A0);
    sensor_volt = sensorValue/1024*5.0;

    Serial.print("sensor_volt = ");
    Serial.print(sensor_volt);
    Serial.println("V");
    delay(1000);
}
```

### 测量：近似值

这个示例演示了一种了解气体近似浓度的方法。根据 MQ9 传感器的数据手册，这些方程式是在标准条件下测试的，并未经过校准。它可能会因温度或湿度的变化而有所不同。

1. 将气体传感器置于清洁空气环境中。上传以下程序。

```
void setup() {
    Serial.begin(9600);
}

void loop() {
    float sensor_volt;
    float RS_air; //  在清洁空气中获取 RS 的值
    float R0;  // 在 LPG 中获取 R0 的值
    float sensorValue;

    /*--- 通过测试 100 次获取平均数据 ---*/
    for(int x = 0 ; x < 100 ; x++)
    {
        sensorValue = sensorValue + analogRead(A0);
    }
    sensorValue = sensorValue/100.0;
    /*-----------------------------------------------*/

    sensor_volt = sensorValue/1024*5.0;
    RS_air = (5.0-sensor_volt)/sensor_volt; // 省略 *RL
    R0 = RS_air/9.9; // 从图表中得出 LPG 气体中 RS/R0 的比值为 9.9（使用 WebPlotDigitizer 找到）

    Serial.print("sensor_volt = ");
    Serial.print(sensor_volt);
    Serial.println("V");

    Serial.print("R0 = ");
    Serial.println(R0);
    delay(1000);

}
```

2. 然后，打开 Arduino IDE 的串行监视器。记下 R0 的值，这需要在下一个程序中使用。请在读数稳定后记下 R0。

<font color="Red">将下面的 R0 替换为上面测试的 R0 值</font>。将传感器暴露于上面列出的任何一种气体中。

```
void setup() {
    Serial.begin(9600);
}

void loop() {

    float sensor_volt;
    float RS_gas; // 在气体中获取 RS 的值
    float ratio; // 获取比值 RS_GAS/RS_air
    int sensorValue = analogRead(A0);
    sensor_volt=(float)sensorValue/1024*5.0;
    RS_gas = (5.0-sensor_volt)/sensor_volt; // 省略 *RL

          /*-将名称"R0"替换为第一次测试演示中的 R0 值-*/
    ratio = RS_gas/R0;  // ratio = RS/R0
          /*-----------------------------------------------------------------------*/

    Serial.print("sensor_volt = ");
    Serial.println(sensor_volt);
    Serial.print("RS_ratio = ");
    Serial.println(RS_gas);
    Serial.print("Rs/R0 = ");
    Serial.println(ratio);

    Serial.print("\n\n");

    delay(1000);

}
```

现在，我们可以从下图中获取气体的浓度。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ9/img/GAS_Sensor_7.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ9/img/GAS_Sensor_7.png" alt="pir" width={600} height="auto" /></p>


根据图表，我们可以看到我们能测试的最小浓度是 200ppm，最大是 10000ppm，换句话说，我们可以获得 0.02% 到 1% 之间的气体浓度。但是，我们无法提供公式，因为比值和浓度之间的关系是非线性的。




### 与 Raspberry Pi 一起使用（配合 Grove Base Hat for Raspberry Pi）

#### 硬件

- **步骤 1**. 本项目中使用的物品：

| Raspberry pi | Grove Base Hat for RasPi| Grove - 气体传感器(MQ9)|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即购买](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[立即购买](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-1418.html)|

- **步骤 2**. 将 Grove Base Hat 插入 Raspberry。
- **步骤 3**. 将 Grove - 气体传感器(MQ9) 连接到 Base Hat 的 A0 端口。
- **步骤 4**. 通过 USB 线缆将 Raspberry Pi 连接到 PC。

<!-- 
![](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ9/img/With_Hat.jpg) -->
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ9/img/With_Hat.jpg" alt="pir" width={600} height="auto" /></p>


:::note
    对于步骤 3，您可以将 Grove - 气体传感器(MQ9) 连接到**任何模拟端口**，但请确保您使用相应的端口号更改命令。
:::

#### 软件

- **步骤 1**. 按照[设置软件](https://wiki.seeedstudio.com/cn/Grove_Base_Hat_for_Raspberry_Pi/#installation)配置开发环境。
- **步骤 2**. 通过克隆 grove.py 库下载源文件。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **步骤 3**. 执行以下命令编写代码。

```
cd grove.py/grove
nano grove_gas_sensor_mq9.py

```
然后您应该在此文件中复制以下代码，并按 ++ctrl+x++ 退出并保存。


```python

import math
import sys
import time
from grove.adc import ADC


class GroveGasSensorMQ9:

    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()

    @property
    def MQ9(self):
        value = self.adc.read(self.channel)
        return value

Grove = GroveGasSensorMQ9


def main():
    if len(sys.argv) < 2:
        print('Usage: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)

    sensor = GroveGasSensorMQ9(int(sys.argv[1]))

    print('Detecting...')
    while True:
        print('Gas value: {0}'.format(sensor.MQ9))
        time.sleep(.3)

if __name__ == '__main__':
    main()

```

- **步骤 4**. 执行以下命令运行代码。

```python 

python grove_gas_sensor_mq9.py  0

```

:::success
    如果一切顺利，您将能够看到以下结果
:::
```python

pi@raspberrypi:~/grove.py/grove $ python grove_gas_sensor_mq9.py 0
Detecting...
Gas value: 345
Gas value: 348
Gas value: 351
Gas value: 354
Gas value: 357
Gas value: 360
Gas value: 363
Gas value: 365
Gas value: 368
Gas value: 370
^CTraceback (most recent call last):
  File "grove_gas_sensor_mq9.py", line 69, in <module>
    main()
  File "grove_gas_sensor_mq9.py", line 66, in main
    time.sleep(.3)
KeyboardInterrupt


```


您可以通过简单地按 ++ctrl+c++ 退出此程序。

:::note
        您可能已经注意到，对于模拟端口，丝印引脚编号类似于 **A0, A1**，但在命令中我们使用参数 **0** 和 **1**，就像数字端口一样。因此请确保您将模块插入正确的端口，否则可能会出现引脚冲突。
:::

<!-- <div class="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ9/res/Gas_Sensor_Eagle_files.zip" style="border-radius: 0px 0px 4px 4px; height: 500px; border-style: solid; border-width: 1px; border-color: rgb(241, 241, 241); overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;" /> -->



资源
---------

**建议阅读/参考资料**

-   如何选择气体传感器
-   [什么是 LEL](https://en.wikipedia.org/wiki/Flammability_limit)

**原理图**
---------

-   [Grove 气体传感器 - EAGLE（原理图和电路板）文件](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ9/res/Gas_Sensor_Eagle_files.zip)
-   [Grove 气体传感器 - PDF 原理图](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ9/res/Gas_Sensor_Schematic.pdf)

**数据手册**

-   [MQ-9 数据手册](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ9/res/MQ-9.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Gas_Sensor(MQ9) -->

## 技术支持与产品讨论

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 可升级为工业传感器
通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) 和 [S2100 数据记录器](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 转换为 LoRaWAN® 传感器。Seeed 不仅帮助您进行原型设计，还为您提供了使用 SenseCAP 系列坚固的[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

IP66 外壳、蓝牙配置、与全球 LoRaWAN® 网络的兼容性、内置 19 Ah 电池以及来自 APP 的强大支持，使 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) 成为工业应用的最佳选择。该系列包括土壤湿度、空气温湿度、光照强度、CO2、EC 传感器以及 8 合 1 气象站。为您下一个成功的工业项目尝试最新的 SenseCAP S210x。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>