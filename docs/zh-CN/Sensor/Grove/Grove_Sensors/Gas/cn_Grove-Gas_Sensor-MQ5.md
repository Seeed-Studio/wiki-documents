---
description: Grove - 气体传感器(MQ5)
title: Grove - 气体传感器(MQ5)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Gas_Sensor-MQ5
last_update:
  date: 1/3/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ5/img/Twig-Gas_Sensor.bmp) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ5/img/Twig-Gas_Sensor.bmp" alt="pir" width={600} height="auto" /></p>


Grove - 气体传感器(MQ5)模块适用于气体泄漏检测（家庭和工业）。它适合检测<font color="Blue">H2、LPG、CH4、CO、酒精</font>。由于其高灵敏度和快速响应时间，可以尽快进行测量。传感器的灵敏度可以通过电位器进行调节。

<div class="admonition danger">
<p class="admonition-title">注意</p>
传感器值仅反映在允许误差范围内气体浓度的近似趋势，它不代表确切的气体浓度。检测空气中的某些成分通常需要更精确和昂贵的仪器，这不能用单个气体传感器来完成。如果您的项目旨在获得非常精确水平的气体浓度，那么我们不推荐这个气体传感器。
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
    <td>LPG、天然气、城市煤气</td>
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

- 检测范围广
- 稳定且使用寿命长
- 响应快速且灵敏度高

## 规格参数

| 项目  | 参数               | 最小值 | 典型值    | 最大值   | 单位 |
|-------|-------------------------|-----|------------|-------|------|
| VCC   | 工作电压         | 4.9 | 5          | 5.1   | V    |
| PH    | 加热功耗     | 0.5 | -          | 800   | mW   |
| RL    | 负载电阻         |     | 可调 |       |      |
| RH    | 加热器电阻       | -   | 31±10%     | -     | Ω    |
| Rs    | 传感电阻      | 10  | -          | 60    | kΩ   |
| Scope | 检测浓度范围 | 200 | -          | 10000 | ppm  |

## 应用

- 气体泄漏检测
- 玩具

## 硬件概述

这是一个模拟输出传感器。需要连接到 Grove Base Shield 的任意一个模拟接口。本教程中使用的示例使用 A0 模拟引脚。将此模块连接到 Base Shield 的 A0 端口。

也可以通过跳线直接将 Grove 模块连接到 Arduino，连接方式如下表所示：

| Arduino   | 气体传感器 |
|-----------|------------|
| 5V        | VCC        |
| GND       | GND        |
| NC        | NC         |
| Analog A0 | SIG        |

当气体浓度增加时，气体传感器的输出电压也会增加。可以通过调节电位器来调整灵敏度。<font color="Red">请注意，传感器的最佳预热时间为 24 小时以上</font>。有关 MQ-5 传感器的详细信息，请参考**资源**部分提供的数据手册。

## 支持的平台

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| <p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={500} height="auto" /></p>
| <p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={500} height="auto" /></p>| <p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" alt="pir" width={500} height="auto" /></p> | <p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" alt="pir" width={500} height="auto" /></p> | <p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" alt="pir" width={500} height="auto" /></p>| -->

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    上述提到的支持平台表示该模块的软件或理论兼容性。在大多数情况下，我们只为 Arduino 平台提供软件库或代码示例。无法为所有可能的 MCU 平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

##开始使用

### 与Arduino一起使用

**所需材料**

| Seeeduino V4.2 | Base Shield | Grove - 气体传感器(MQ5) |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ5/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-938.html" target="_blank">立即购买</a>|



<!-- ![](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ5/img/Read_Gas_Sensor_data_MQ2_MQ5.jpg) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ5/img/Read_Gas_Sensor_data_MQ2_MQ5.jpg" alt="pir" width={600} height="auto" /></p>


如上图所示，将Grove - 气体传感器(MQ5)连接到A0端口。

#### 气体检测：基础示例

在这个示例中，传感器连接到A0引脚。显示从传感器读取的电压值。这个值可以用作阈值来检测气体浓度的任何增加/减少。

<div class="admonition note">
<p class="admonition-title">注意</p>
您需要额外的工具来为各种空气条件找到特定的阈值。然后在代码中设置阈值。
</div>

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

#### 测量：近似值

这个示例演示了一种了解气体近似浓度的方法。根据MQ5传感器的数据手册，这些方程是在标准条件下测试的，并未经过校准。它可能会因温度或湿度的变化而有所不同。

1. 将气体传感器置于清洁空气环境中。上传下面的程序。

```
void setup() {
    Serial.begin(9600);
}

void loop() {
    float sensor_volt;
    float RS_air; //  通过清洁空气获取RS的值
    float R0;  // 通过H2获取R0的值
    float sensorValue;

        /*--- 通过测试100次获取平均数据 ---*/
    for(int x = 0 ; x < 100 ; x++)
    {
        sensorValue = sensorValue + analogRead(A0);
    }
    sensorValue = sensorValue/100.0;
        /*-----------------------------------------------*/

    sensor_volt = sensorValue/1024*5.0;
    RS_air = (5.0-sensor_volt)/sensor_volt; // 省略 *RL
    R0 = RS_air/6.5; // 从图表中可知，在清洁空气中RS/R0的比值为6.5（使用WebPlotDigitizer找到）

    Serial.print("sensor_volt = ");
    Serial.print(sensor_volt);
    Serial.println("V");

    Serial.print("R0 = ");
    Serial.println(R0);
    delay(1000);
}
```

2. 然后，打开Arduino IDE的串口监视器。记下R0的值，这需要在下一个程序中使用。请在读数稳定后记下R0值。

<font color="Red">将下面的R0替换为上面测试的R0值</font>。将传感器暴露在上面列出的任何一种气体中。

```
void setup() {
    Serial.begin(9600);
}

void loop() {

    float sensor_volt;
    float RS_gas; // 在气体中获取RS的值
    float ratio; // 获取比值 RS_GAS/RS_air
    int sensorValue = analogRead(A0);
    sensor_volt=(float)sensorValue/1024*5.0;
    RS_gas = (5.0-sensor_volt)/sensor_volt; // 省略 *RL

          /*-将名称"R0"替换为第一次测试演示中的R0值-*/
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

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ5/img/Gas_Sensor_4.png) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ5/img/Gas_Sensor_4.png" alt="pir" width={600} height="auto" /></p>


根据图表，我们可以看到我们能测试的最小浓度是200ppm，最大是10000ppm，换句话说，我们可以获得0.02%到1%之间的气体浓度。但是，我们无法提供公式，因为比值和浓度之间的关系是非线性的。



### 与Raspberry Pi一起使用（使用Grove Base Hat for Raspberry Pi）

#### 硬件

- **步骤1**. 本项目中使用的物品：

| Raspberry pi | Grove Base Hat for RasPi| Grove - 气体传感器(MQ5)|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ5/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即购买](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[立即购买](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-938.html)|

- **步骤2**. 将Grove Base Hat插入Raspberry Pi。
- **步骤3**. 将Grove - 气体传感器(MQ5)连接到Base Hat的A0端口。
- **步骤4**. 通过USB线将Raspberry Pi连接到PC。


<!-- ![](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_MQ5/image/With_Hat.jpg) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_MQ5/image/With_Hat.jpg" alt="pir" width={600} height="auto" /></p>


:::note
    对于步骤3，您可以将Grove - 气体传感器(MQ5)连接到**任何模拟端口**，但请确保您使用相应的端口号更改命令。
:::

#### 软件

- **步骤1**. 按照[设置软件](https://wiki.seeedstudio.com/cn/Grove_Base_Hat_for_Raspberry_Pi/#installation)配置开发环境。
- **步骤2**. 通过克隆grove.py库下载源文件。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **步骤3**. 执行以下命令编写代码。

```
cd grove.py/grove
nano grove_gas_sensor_mq5.py

```
然后您应该在此文件中复制以下代码，并按++ctrl+x++退出并保存。


```python

import math
import sys
import time
from grove.adc import ADC


class GroveGasSensorMQ5:

    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()

    @property
    def MQ5(self):
        value = self.adc.read(self.channel)
        return value

Grove = GroveGasSensorMQ5


def main():
    if len(sys.argv) < 2:
        print('Usage: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)

    sensor = GroveGasSensorMQ5(int(sys.argv[1]))

    print('Detecting...')
    while True:
        print('Gas value: {0}'.format(sensor.MQ5))
        time.sleep(.3)

if __name__ == '__main__':
    main()

```

- **步骤4**. 执行以下命令运行代码。

```python 

python grove_gas_sensor_mq5.py  0

```


:::success
    如果一切顺利，您将能够看到以下结果
:::
```python

pi@raspberrypi:~/grove.py/grove $ python grove_gas_sensor_mq5.py  0
Detecting...
Gas value: 28
Gas value: 28
Gas value: 27
Gas value: 26
Gas value: 26
^CTraceback (most recent call last):
  File "grove_gas_sensor_mq5.py", line 69, in <module>
    main()
  File "grove_gas_sensor_mq5.py", line 66, in main
    time.sleep(.3)
KeyboardInterrupt

```


您可以通过简单地按++ctrl+c++退出此程序。

:::note
        您可能已经注意到，对于模拟端口，丝印引脚号类似于**A0, A1**，但在命令中我们使用参数**0**和**1**，就像数字端口一样。因此请确保您将模块插入正确的端口，否则可能会出现引脚冲突。
:::

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ5/res/Gas_Sensor_Eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## 资源

**建议阅读/参考资料**

-   如何选择气体传感器
-   [什么是LEL](https://en.wikipedia.org/wiki/Flammability_limit)

**原理图**

-   [Grove气体传感器 - EAGLE（原理图和电路板）文件](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ5/res/Gas_Sensor_Eagle_files.zip)
-   [Grove气体传感器 - PDF原理图](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ5/res/Gas_Sensor_Schematic.pdf)

**数据手册**

-   [MQ-5数据手册](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ5/res/MQ-5.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Gas_Sensor(MQ5) -->

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