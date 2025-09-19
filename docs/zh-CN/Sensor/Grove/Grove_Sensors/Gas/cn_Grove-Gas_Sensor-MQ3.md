---
description: Grove - 气体传感器(MQ3)
title: Grove - 气体传感器(MQ3) 
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Gas_Sensor-MQ3
last_update:
  date: 1/3/2023
  author: shuxu hu
---

<!-- <div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/img/wiki.jpg" /></div> -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/img/wiki.jpg" alt="pir" width={600} height="auto" /></p>


Grove - 气体传感器(MQ3)模块对于气体泄漏检测（家庭和工业）非常有用。它适用于检测<font color="Blue">酒精、苯、CH4、己烷、液化石油气、一氧化碳</font>。由于其高灵敏度和快速响应时间，可以尽快进行测量。传感器的灵敏度可以通过电位器进行调节。

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

- 对酒精高敏感度，对苯的敏感度较小
- 稳定且使用寿命长
- 响应快速且高敏感度

:::tip
    更多关于Grove模块的详细信息请参考[Grove系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::
## 规格参数

| 项目  | 参数               | 最小值  | 典型值    | 最大值 | 单位 |
|-------|-------------------------|------|------------|-----|------|
| VCC   | 工作电压         | 4.9  | 5          | 5.1 | V    |
| PH    | 加热功耗     | 0.5  | -          | 750 | mW   |
| RL    | 负载电阻         |      | 可调 |     |      |
| RH    | 加热器电阻       | -    | 33         | -   | Ω    |
| Rs    | 传感电阻      | 1    | -          | 8   | MΩ   |
| Scope | 检测浓度范围 | 0.05 | -          | 10  | mg/L |

## 应用

- 酒精检测器。
- 酒精测试仪。
- 玩具。

## 硬件概述

这是一个模拟输出传感器。需要连接到Grove底板的任意一个模拟接口。本教程中使用的示例使用A0模拟引脚。将此模块连接到底板的A0端口。

也可以通过跳线直接将Grove模块连接到Arduino，连接方式如下表所示：

| Arduino   | 气体传感器 |
|-----------|------------|
| 5V        | VCC        |
| GND       | GND        |
| NC        | NC         |
| Analog A0 | SIG        |

当气体浓度增加时，气体传感器的输出电压会增加。可以通过调节电位器来调整灵敏度。<font color="Red">请注意传感器的最佳预热时间为24小时以上</font>。有关MQ-3传感器的详细信息，请参考**资源**部分提供的数据手册。


## 支持的平台

|Arduino|Raspberry|ArduPy|
|---|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={500} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={500} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/ArduPy-Logo.png" alt="pir" width={500} height="auto" /></p>| 

:::caution
    上述提到的支持平台是/是该模块软件或理论兼容性的指示。在大多数情况下，我们只为Arduino平台提供软件库或代码示例。不可能为所有可能的MCU平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

## 入门指南

### 与Arduino一起使用

| Seeeduino V4.2 | Base Shield | Grove - 气体传感器(MQ3) |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-1418.html" target="_blank">立即购买</a>|

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/img/Read_Gas_Sensor_data.jpg) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/img/Read_Gas_Sensor_data.jpg" alt="pir" width={600} height="auto" /></p>


如上图所示，将Grove - 气体传感器(MQ3)连接到A0端口。

#### 气体检测：基础示例

在这个示例中，传感器连接到A0引脚。显示从传感器读取的电压值。这个值可以用作阈值来检测气体浓度的任何增加/减少。

```cpp
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

这个示例演示了一种了解气体近似浓度的方法。根据MQ3传感器的数据手册，这些方程式是在标准条件下测试的，并未经过校准。它可能会因温度或湿度的变化而有所不同。

1. 将气体传感器置于清洁空气环境中。上传下面的程序。

```cpp
void setup()
{
    Serial.begin(9600);
}

void loop()
{
    float sensor_volt;
    float RS_air; //  在清洁空气中获取RS的值
    float R0;  // 在酒精中获取R0的值
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
    R0 = RS_air/60.0; // 从图表中得出清洁空气中RS/R0的比值为60（使用WebPlotDigitizer找到）

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

```cpp
void setup() {
    Serial.begin(9600);
}

void loop() {

    float sensor_volt;
    float RS_gas; // 在气体中获取RS的值
    float ratio; // 获取RS_GAS/RS_air的比值
    int sensorValue = analogRead(A0);
    sensor_volt=(float)sensorValue/1024*5.0;
    RS_gas = (5.0-sensor_volt)/sensor_volt; // 省略 *RL

    /*-将名称"R0"替换为第一次测试演示中R0的值-*/
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

现在，我们可以从下图中获取气体浓度。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/img/GAS_Sensor_3.png) -->

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/img/GAS_Sensor_3.png" alt="pir" width={600} height="auto" /></p>


根据图表，我们可以看到我们能够测试的最小浓度是0.1mg/L，最大浓度是10mg/L。但是，我们无法提供公式，因为比率和浓度之间的关系是非线性的。不过，我们也可以将mg/L转换为ppm，这样可能更方便我们观察数值。

### 与树莓派一起使用（配合Grove树莓派扩展板）

#### 硬件

- **步骤1**. 本项目中使用的物品：

| 树莓派 | Grove树莓派扩展板| Grove - 气体传感器(MQ3)|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即购买](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[立即购买](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-1418.html)|

- **步骤2**. 将Grove扩展板插入树莓派。
- **步骤3**. 将Grove - 气体传感器(MQ3)连接到扩展板的A0端口。
- **步骤4**. 通过USB线将树莓派连接到PC。


<!-- ![](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/img/With_Hat.jpg) -->

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/img/With_Hat.jpg" alt="pir" width={600} height="auto" /></p>

:::note
    对于步骤3，您可以将Grove - 气体传感器(MQ3)连接到**任何模拟端口**，但请确保您在命令中使用相应的端口号。
:::

#### 软件

- **步骤1**. 按照[设置软件](https://wiki.seeedstudio.com/cn/Grove_Base_Hat_for_Raspberry_Pi/#installation)配置开发环境。
- **步骤2**. 通过克隆grove.py库下载源文件。

```sh
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **步骤3**. 执行以下命令编写代码。

```sh
cd grove.py/grove
nano grove_gas_sensor_mq3.py
```
然后您应该在此文件中复制以下代码，并按++ctrl+x++退出并保存。


```python
import math
import sys
import time
from grove.adc import ADC


class GroveGasSensorMQ3:

    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()

    @property
    def MQ3(self):
        value = self.adc.read(self.channel)
        return value

Grove = GroveGasSensorMQ3


def main():
    if len(sys.argv) < 2:
        print('Usage: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)

    sensor = GroveGasSensorMQ3(int(sys.argv[1]))

    print('Detecting...')
    while True:
        print('Gas value: {0}'.format(sensor.MQ3))
        time.sleep(.3)

if __name__ == '__main__':
    main()

```

- **步骤4**. 执行以下命令运行代码。

```python 
python grove_gas_sensor_mq3.py  0
```


:::success
    如果一切顺利，您将能够看到以下结果
:::
```python
pi@raspberrypi:~/grove.py/grove $ python grove_gas_sensor_mq3.py 0
Detecting...
Gas value: 564
Gas value: 564
Gas value: 564
Gas value: 565
Gas value: 565
Gas value: 565
Gas value: 566
Gas value: 566
Gas value: 566
Gas value: 566
Gas value: 566
^CTraceback (most recent call last):
  File "grove_gas_sensor_mq3.py", line 69, in <module>
    main()
  File "grove_gas_sensor_mq3.py", line 66, in main
    time.sleep(.3)
KeyboardInterrupt
```

您可以通过简单地按++ctrl+c++退出此程序。

:::note
        您可能已经注意到，对于模拟端口，丝印引脚号类似于**A0, A1**，但在命令中我们使用参数**0**和**1**，就像数字端口一样。所以请确保您将模块插入正确的端口，否则可能会出现引脚冲突。
:::
### 与Wio Terminal一起使用（ArduPy）

#### 硬件

- **步骤1.** 准备以下物品：

| Wio Terminal | Grove - 气体传感器(MQ3) |
|--------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即购买](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[立即购买](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ3.html)|

- **步骤2.** 将Grove - 气体传感器(MQ3)连接到Wio Terminal的**A0**端口。

- **步骤3.** 通过USB Type-C线将Wio Terminal连接到PC。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/img/WT-MQ3.png) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/img/WT-MQ3.png" alt="pir" width={600} height="auto" /></p>


#### 软件

- **步骤1.** 按照[**ArduPy入门指南**](https://wiki.seeedstudio.com/cn/ArduPy/)在Wio Terminal上配置ArduPy开发环境。

- **步骤2.** 确保ArduPy固件已刷入Wio Terminal。更多信息，请参考[**这里**](https://wiki.seeedstudio.com/cn/ArduPy/#ardupy-aip-cli-getting-started)。

```sh
aip build
aip flash
```

- **步骤3.** 复制以下代码并保存为`ArduPy-mq3.py`：

```python
from machine import Pin, ADC
from machine import LCD
from machine import Sprite
import time

mq3 = ADC(Pin(13))
lcd = LCD()
spr = Sprite(lcd) # Create a buff

def main():
    spr.createSprite(320, 240)
    while True:
        spr.setTextSize(2)
        spr.fillSprite(spr.color.BLACK)
        spr.setTextColor(lcd.color.BLUE)
        spr.drawString("MQ3 Reading", 90, 10)
        spr.drawFastHLine(40, 35, 240, lcd.color.DARKGREY)
        spr.setTextColor(lcd.color.WHITE)
        spr.drawString("- Current Level: ", 20, 50)
        spr.drawNumber(mq3.read(), 220,50)
        spr.pushSprite(0,0)
        time.sleep_ms(500)

        print("MQ3 Gas Sensor Reading is: ", mq3.read())

if __name__ == "__main__":
    main()
```

- **步骤 4.** 将 `ArduPy-mq3.py` 保存到您知道的位置。运行以下命令并将 `<YourPythonFilePath>` **替换**为您的 `ArduPy-mq3.py` 位置。

```sh
aip shell -n -c "runfile <YourPythonFilePath>"
# 示例:
# aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-mq3.py"
```

- **步骤 5.** 我们将看到气体值显示在终端上，如下所示，并显示在 Wio Terminal LCD 屏幕上。

```python
ansonhe@Ansons-Macbook-Pro ~:aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-mq3.py"
Positional argument (/dev/cu.usbmodem1413101) takes precedence over --open.
Connected to ardupy
MQ3 Gas Sensor Reading is:  609
MQ3 Gas Sensor Reading is:  611
MQ3 Gas Sensor Reading is:  614
MQ3 Gas Sensor Reading is:  616
MQ3 Gas Sensor Reading is:  618
MQ3 Gas Sensor Reading is:  621
MQ3 Gas Sensor Reading is:  623
MQ3 Gas Sensor Reading is:  625
MQ3 Gas Sensor Reading is:  627
MQ3 Gas Sensor Reading is:  628
MQ3 Gas Sensor Reading is:  629
MQ3 Gas Sensor Reading is:  632
```

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/img/Ardupy-MQ3.png) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/img/Ardupy-MQ3.png" alt="pir" width={600} height="auto" /></p>


## 原理图在线查看器
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/res/Gas_Sensor_Eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



资源
---------

**推荐阅读 / 参考资料**

-   如何选择气体传感器
-   [什么是 LEL](https://en.wikipedia.org/wiki/Flammability_limit)

**原理图**

-   [Grove 气体传感器 - EAGLE（原理图和电路板）文件](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/res/Gas_Sensor_Eagle_files.zip)
-   [Grove 气体传感器 - PDF 原理图](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/res/Gas_Sensor_Schematic.pdf)

**数据手册**

-   [MQ-3 数据手册](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/res/MQ-3.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Gas_Sensor(MQ3) -->

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

使用 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)和 [S2100 数据记录器](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 转换为 LoRaWAN® 传感器。Seeed 不仅帮助您进行原型设计，还为您提供了使用 SenseCAP 系列坚固的[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

IP66 外壳、蓝牙配置、与全球 LoRaWAN® 网络的兼容性、内置 19 Ah 电池以及来自 APP 的强大支持使 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) 成为工业应用的最佳选择。该系列包括土壤湿度、空气温湿度、光照强度、CO2、EC 和 8 合 1 气象站传感器。为您下一个成功的工业项目尝试最新的 SenseCAP S210x。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width="{800}" src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>