---
description: Grove - 气体传感器(MQ2)
title: Grove - 气体传感器(MQ2) 
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Gas_Sensor-MQ2
last_update:
  date: 1/3/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/Twig-Gas_Sensor.bmp) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/Twig-Gas_Sensor.bmp" alt="pir" width={600} height="auto" /></p>



Grove - 气体传感器(MQ2)模块适用于气体泄漏检测（家庭和工业）。它适合检测H2、LPG、CH4、CO、酒精、烟雾或丙烷。由于其高灵敏度和快速响应时间，可以尽快进行测量。传感器的灵敏度可以通过电位器进行调节。

<!-- |Sensor|Gas Type|立即获取|
|:---:|---|---|
|[MQ2](https://wiki.seeedstudio.com/cn/Grove-Gas_Sensor-MQ2/)|Combustible Gas, Smoke|<a href="https://www.seeedstudio.com/Grove-Gas-Sensor(MQ2)-p-937.html">![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)</a>|
|[MQ3](https://wiki.seeedstudio.com/cn/Grove-Gas_Sensor-MQ3/)|Alcohol Vapor|<a href="https://www.seeedstudio.com/Grove-Gas-Sensor%28MQ3%29-p-1418.html">![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)</a>|
|[MQ5](https://wiki.seeedstudio.com/cn/Grove-Gas_Sensor-MQ5/)|LPG, Natural Gas, Town Gas|<a href="https://www.seeedstudio.com/Grove-Gas-Sensor%28MQ5%29-p-938.html">![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)</a>|
|[MQ9](https://wiki.seeedstudio.com/cn/Grove-Gas_Sensor-MQ9/)|Carbon Monoxide, Coal Gas, Liquefied Gas|<a href="https://www.seeedstudio.com/Grove-Gas-Sensor%28MQ9%29-p-1419.html">![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)</a>| -->

<table align="center">
  <tbody>
    <tr>
    <td><h4>传感器</h4></td>
    <td><h4>气体类型</h4></td>
    <td><h4>立即购买</h4></td>
    </tr>
    <tr>
    <td><a href="https://wiki.seeedstudio.com/cn/Grove-Gas_Sensor-MQ2/" target="_blank"><span>MQ2</span></a></td>
    <td>可燃气体，烟雾</td>
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
    <td>液化石油气，天然气，城市煤气</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Gas-Sensor%28MQ5%29-p-938.html" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" alt="" width={200} height="auto"/></a>
</div></td>
    </tr>
    <tr>
    <td><a href="https://wiki.seeedstudio.com/cn/Grove-Gas_Sensor-MQ9/" target="_blank"><span>MQ9</span></a></td>
    <td>一氧化碳，煤气，液化气</td>
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

:::tip
    有关 Grove 模块的更多详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

## 规格参数

| 项目 | 参数           | 最小值 | 典型值    | 最大值 | 单位 |
|------|---------------------|-----|------------|-----|------|
| VCC  | 工作电压     | 4.9 | 5          | 5.1 | V    |
| PH   | 加热功耗 | 0.5 | -          | 800 | mW   |
| RL   | 负载电阻     |     | 可调节 |     |      |
| RH   | 加热器电阻   | -   | 33         | -   | Ω    |
| Rs   | 传感电阻  | 3   | -          | 30  | kΩ   |

## 支持的平台

|Arduino|Raspberry|ArduPy|
|---|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={500} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={500} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/ArduPy-Logo.png" alt="pir" width={500} height="auto" /></p>| 

:::caution          
    上述提到的支持平台表示该模块的软件或理论兼容性。在大多数情况下，我们只为 Arduino 平台提供软件库或代码示例。无法为所有可能的 MCU 平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

## 应用创意

- 气体泄漏检测
- 玩具
- 物联网应用
- 智能检测

## 入门指南

当气体浓度增加时，气体传感器的输出电压会增加。可以通过旋转电位器来调节灵敏度。有关 MQ-2 传感器的详细信息，请参考**资源**部分提供的数据手册。

:::warning
    请注意，传感器的最佳预热时间为 24 小时以上。
:::

### 与 Arduino 配合使用

#### 硬件

- **步骤 1.** 准备以下物品：

| Seeeduino V4.2 | Base Shield| Grove-气体传感器-MQ2 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-Gas-Sensor(MQ2)-p-937.html)|

- **步骤 2.** 将 Grove-气体传感器-MQ2 连接到 Grove-Base Shield 的 A0 端口。
- **步骤 3.** 将 Grove - Base Shield 插入 Seeeduino。
- **步骤 4.** 通过 USB 线将 Seeeduino 连接到 PC。

<!--connected with arduino-->
<!-- ![](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/with_ardu.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/with_ardu.jpg" alt="pir" width={600} height="auto" /></p>

如上图所示，将 Grove - 气体传感器(MQ2) 连接到 A0 端口。

:::note
	如果我们没有 Grove Base Shield，我们也可以直接将 Grove-气体传感器-MQ2 连接到 Seeeduino，如下所示。
:::

| Seeeduino       | Grove-气体传感器-MQ2 |
|---------------|-------------------------|
| 5V            | 红色                     |
| GND           | 黑色                   |
| 未连接 | 白色                   |
| A0            | 黄色                  |

#### 软件

这里有一些示例，请将下面的代码复制并粘贴到新的 Arduino 草图中，并分别上传它们。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

**基础示例：气体检测**

在这个示例中，传感器连接到 A0 引脚。显示从传感器读取的电压值。这个值可以用作阈值来检测气体浓度的任何增加/减少。

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

**测量：近似值**

这些示例演示了了解气体近似浓度的方法。根据 MQx 传感器的数据手册，这些方程式是在标准条件下测试的，并未经过校准。它可能会因温度或湿度的变化而有所不同。

:::note
    请将气体传感器保持在清洁的空气环境中。
:::

```c
void setup() {
    Serial.begin(9600);
}

void loop() {
    float sensor_volt;
    float RS_air; //  在清洁空气中获取 RS 的值
    float R0;  // 在 H2 中获取 R0 的值
    float sensorValue;

  // 通过测试 100 次获取平均数据
    for(int x = 0 ; x < 100 ; x++)
    {
        sensorValue = sensorValue + analogRead(A0);
    }
    sensorValue = sensorValue/100.0;


    sensor_volt = sensorValue/1024*5.0;
    RS_air = (5.0-sensor_volt)/sensor_volt; // 省略 * RL
    R0 = RS_air/9.8; // 从图表中得出，在清洁空气中 RS/R0 的比值为 9.8（使用 WebPlotDigitizer 找到）

    Serial.print("sensor_volt = ");
    Serial.print(sensor_volt);
    Serial.println("V");

    Serial.print("R0 = ");
    Serial.println(R0);
    delay(1000);

}
```

然后，打开 Arduino IDE 的串口监视器。记下 R0 的值，这将在下一个程序中使用。请在读数稳定后记下 R0。

:::warning
    将下面的 R0 替换为上面测试的 R0 值。
:::

将传感器暴露在上面列出的任何一种气体中。

```c
void setup() {
    Serial.begin(9600);
}

void loop() {

    float sensor_volt;
    float RS_gas; // 在气体中获取 RS 的值
    float ratio; // 获取 RS_GAS/RS_air 的比值
    int sensorValue = analogRead(A0);
    sensor_volt=(float)sensorValue/1024*5.0;
    RS_gas = (5.0-sensor_volt)/sensor_volt; // 省略 * RL

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

现在，我们可以从下图中获取气体浓度。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/Gas_sensor_1.png) -->

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/Gas_sensor_1.png" alt="pir" width={600} height="auto" /></p>

根据图表，我们可以看到我们能够测试的最小浓度是100ppm，最大浓度是10000ppm，换句话说，我们可以获得0.01%到1%之间的气体浓度。但是，我们无法提供公式，因为比率和浓度之间的关系是非线性的。




### 与树莓派一起使用（配合Grove树莓派底板）
#### 硬件

- **步骤1**. 本项目中使用的物品：

| 树莓派 | Grove树莓派底板| Grove-气体传感器-MQ2 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即购买](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[立即购买](https://www.seeedstudio.com/Grove-Gas-Sensor(MQ2)-p-937.html)|

- **步骤2**. 将Grove底板插入树莓派。
- **步骤3**. 将Grove-气体传感器MQ2连接到底板的A0端口。
- **步骤4**. 通过USB线将树莓派连接到PC。


<!-- ![](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_MQ2/image/With_Hat.jpg) -->

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_MQ2/image/With_Hat.jpg" alt="pir" width={600} height="auto" /></p>

:::note
    对于步骤3，您可以将Grove-气体传感器MQ2连接到**任何模拟端口**，但请确保您使用相应的端口号更改命令。
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
nano grove_gas_sensor_mq2.py
```

然后您应该在此文件中复制以下代码，并按++ctrl+x++退出并保存。

```python
import math
import sys
import time
from grove.adc import ADC

class GroveGasSensorMQ2:

    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()

    @property
    def MQ2(self):
        value = self.adc.read(self.channel)
        return value

Grove = GroveGasSensorMQ2


def main():
    if len(sys.argv) < 2:
        print('Usage: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)

    sensor = GroveGasSensorMQ2(int(sys.argv[1]))

    print('Detecting...')
    while True:
        print('Gas value: {0}'.format(sensor.MQ2))
        time.sleep(.3)

if __name__ == '__main__':
    main()
```

- **步骤4**. 执行以下命令运行代码

```sh
python grove_gas_sensor_mq2.py 0
```

:::success
    如果一切顺利，您将能够看到以下结果
:::

```sh
pi@raspberrypi:~/grove.py/grove $ python grove_gas_sensor_mq2.py 0
Detecting...
Gas value: 760
Gas value: 714
Gas value: 675
Gas value: 637
Gas value: 603
Gas value: 568
Gas value: 535
Gas value: 506
Gas value: 481
Gas value: 464
Gas value: 449
Gas value: 429
Gas value: 413
Gas value: 456
Gas value: 470
Gas value: 440
Gas value: 404
Gas value: 373
Gas value: 352
Gas value: 339
Gas value: 330
^CTraceback (most recent call last):
  File "grove_gas_sensor_mq2.py", line 69, in <module>
    main()
  File "grove_gas_sensor_mq2.py", line 66, in main
    time.sleep(.3)
KeyboardInterrupt
```


您可以通过简单地按++ctrl+c++退出此程序。

:::note
        您可能已经注意到，对于模拟端口，丝印引脚号类似于**A1, A0**，但是在命令中我们使用参数**0**和**1**，就像数字端口一样。所以请确保您将模块插入正确的端口，否则可能会出现引脚冲突。
:::


### 与树莓派一起使用（配合GrovePi_Plus）

#### 硬件

- **步骤1.** 准备以下物品：

| 树莓派 | GrovePi_Plus | Grove-气体传感器-MQ2 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即购买](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[立即购买](https://www.seeedstudio.com/Grove-Gas-Sensor(MQ2)-p-937.html)|


- **步骤2.** 将GrovePi_Plus插入树莓派。
- **步骤3.** 将Grove-气体传感器-MQ2连接到GrovePi_Plus的**A0**端口。
- **步骤4.** 通过USB线将树莓派连接到PC。
<!--wrong link-->
<!-- ![with_rpi](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/with_rpi.jpg) -->

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/with_rpi.jpg" alt="pir" width={600} height="auto" /></p>

#### 软件

- **步骤1.** 按照[设置软件](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/)配置开发环境。
- **步骤2.** Git克隆Github仓库。

```sh
cd ~
git clone https://github.com/DexterInd/GrovePi.git
```

- **步骤3.** 执行以下命令使用此传感器

```sh
cd ~/GrovePi/Software/Python
python grove_gas_sensor.py
```

以下是 grove_gas_sensor.py 的代码：

```python
#!/usr/bin/env python
#
# GrovePi 使用 Grove 气体传感器的示例
#
# GrovePi 连接 Raspberry Pi 和 Grove 传感器。您可以在这里了解更多关于 GrovePi 的信息：http://www.dexterindustries.com/GrovePi
#
# 对这个示例有疑问？请在这里的论坛上提问：http://forum.dexterindustries.com/c/grovepi
#
'''
## 许可证
MIT 许可证 (MIT)
GrovePi for the Raspberry Pi：一个用于将 Grove 传感器连接到 Raspberry Pi 的开源平台。
版权所有 (C) 2017  Dexter Industries
特此免费授予任何获得本软件及相关文档文件（"软件"）副本的人
不受限制地处理软件的权利，包括但不限于使用、复制、修改、合并、
发布、分发、再许可和/或销售软件副本的权利，并允许向其提供软件的
人员这样做，但须符合以下条件：
上述版权声明和本许可声明应包含在软件的所有副本或重要部分中。
本软件按"原样"提供，不提供任何形式的明示或暗示保证，包括但不限于
适销性、特定用途适用性和非侵权性的保证。在任何情况下，作者或版权
持有人均不对任何索赔、损害或其他责任负责，无论是在合同诉讼、侵权
诉讼或其他诉讼中，还是由软件或软件的使用或其他交易引起的、由软件
引起的或与软件相关的。
'''

# 注意：
# 有 5 种气体传感器
# MQ2 - 可燃气体、烟雾
# MQ3 - 酒精蒸汽
# MQ5 - 液化石油气、天然气、城市煤气
# MQ9 - 一氧化碳、煤气、液化气
# 02 - 氧气
# 灵敏度可以通过板载电位器调节
#
# https://www.seeedstudio.com/wiki/Grove_-_Gas_Sensor
# https://www.seeedstudio.com/wiki/Grove_-_Gas_Sensor(MQ5)
# https://www.seeedstudio.com/wiki/Grove_-_Gas_Sensor(O%E2%82%82)

import time
import grovepi

# 将 Grove 气体传感器连接到模拟端口 A0
# SIG,NC,VCC,GND
gas_sensor = 0

grovepi.pinMode(gas_sensor,"INPUT")

while True:
    try:
        # 获取传感器值
        sensor_value = grovepi.analogRead(gas_sensor)

        # 计算气体密度 - 数值越大表示气体密度越高
        density = (float)(sensor_value / 1024.0)

        print("sensor_value =", sensor_value, " density =", density)
        time.sleep(.5)

    except IOError:
        print ("Error")
```

### 与 Wio Terminal (ArduPy) 一起使用

#### 硬件

- **步骤 1.** 准备以下物品：

| Raspberry pi | GrovePi_Plus | Grove-Gas_Sensor-MQ2 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即获取](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即获取](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[立即获取](https://www.seeedstudio.com/Grove-Gas-Sensor(MQ2)-p-937.html)|


- **步骤 2.** 将 GrovePi_Plus 插入 Raspberry。
- **步骤 3.** 将 Grove-Gas_Sensor-MQ2 连接到 GrovePi_Plus 的 **A0** 端口。
- **步骤 4.** 通过 USB 线缆将 Raspberry 连接到 PC。
<!--wrong link-->
<!-- ![with_rpi](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/with_rpi.jpg) -->

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/with_rpi.jpg" alt="pir" width={600} height="auto" /></p>

#### 软件

- **步骤 1.** 按照 [设置软件](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) 配置开发环境。
- **步骤 2.** Git 克隆 Github 仓库。

```sh
cd ~
git clone https://github.com/DexterInd/GrovePi.git
```

- **步骤 3.** 执行以下命令来使用此传感器

```sh
cd ~/GrovePi/Software/Python
python grove_gas_sensor.py
```

以下是 grove_gas_sensor.py 的代码：
```python
#!/usr/bin/env python
#
# GrovePi 使用 Grove 气体传感器的示例
#
# GrovePi 连接 Raspberry Pi 和 Grove 传感器。您可以在这里了解更多关于 GrovePi 的信息：http://www.dexterindustries.com/GrovePi
#
# 对这个示例有疑问？请在这里的论坛上提问：http://forum.dexterindustries.com/c/grovepi
#
'''
## 许可证
MIT 许可证 (MIT)
GrovePi for the Raspberry Pi：一个用于将 Grove 传感器连接到 Raspberry Pi 的开源平台。
版权所有 (C) 2017  Dexter Industries
特此免费授予任何获得本软件及相关文档文件（"软件"）副本的人
不受限制地处理软件的权利，包括但不限于使用、复制、修改、合并、
发布、分发、再许可和/或销售软件副本的权利，并允许向其提供软件的
人员这样做，但须符合以下条件：
上述版权声明和本许可声明应包含在软件的所有副本或重要部分中。
本软件按"原样"提供，不提供任何形式的明示或暗示保证，包括但不限于
适销性、特定用途适用性和非侵权性的保证。在任何情况下，作者或版权
持有人均不对任何索赔、损害或其他责任负责，无论是在合同诉讼、侵权
诉讼或其他诉讼中，还是由软件或软件的使用或其他交易引起的、由软件
引起的或与软件相关的。
'''
# 注意：
# 有 5 种气体传感器
# MQ2 - 可燃气体、烟雾
# MQ3 - 酒精蒸汽
# MQ5 - 液化石油气、天然气、城市煤气
# MQ9 - 一氧化碳、煤气、液化气
# 02 - 氧气
# 灵敏度可以通过板载电位器调节
#
# https://www.seeedstudio.com/wiki/Grove_-_Gas_Sensor
# https://www.seeedstudio.com/wiki/Grove_-_Gas_Sensor(MQ5)
# https://www.seeedstudio.com/wiki/Grove_-_Gas_Sensor(O%E2%82%82)

import time
import grovepi

# 将 Grove 气体传感器连接到模拟端口 A0
# SIG,NC,VCC,GND
gas_sensor = 0

grovepi.pinMode(gas_sensor,"INPUT")

while True:
    try:
        # 获取传感器值
        sensor_value = grovepi.analogRead(gas_sensor)

        # 计算气体密度 - 数值越大表示气体密度越高
        density = (float)(sensor_value / 1024.0)

        print("sensor_value =", sensor_value, " density =", density)
        time.sleep(.5)

    except IOError:
        print ("Error")
```

### 使用 Wio Terminal (ArduPy)
#### 硬件
- **步骤 1.** 准备以下物品：

| Wio Terminal | Grove - 气体传感器(MQ2) |
|--------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即获取](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[立即获取](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ2.html)|

- **步骤 2.** 将 Grove - 气体传感器(MQ2) 连接到 Wio Terminal 的 **A0** Grove 端口。

- **步骤 3.** 通过 USB Type-C 线缆将 Wio Terminal 连接到 PC。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/WT-MQ2.png) -->

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/WT-MQ2.png" alt="pir" width={600} height="auto" /></p>


#### 软件

- **步骤 1.** 按照 [**ArduPy 入门指南**](https://wiki.seeedstudio.com/cn/ArduPy/) 在 Wio Terminal 上配置 ArduPy 开发环境。

- **步骤 2.** 确保 ArduPy 固件已刷入 Wio Terminal。更多信息请参考 [**这里**](https://wiki.seeedstudio.com/cn/ArduPy/#ardupy-aip-cli-getting-started)。
```sh
aip build
aip flash
```

- **步骤 3.** 复制以下代码并保存为 `ArduPy-mq2.py`：

```python
from machine import Pin, ADC
from machine import LCD
from machine import Sprite
import time

mq2 = ADC(Pin(13))
lcd = LCD()
spr = Sprite(lcd) # Create a buff

def main():
    spr.createSprite(320, 240)
    while True:
        spr.setTextSize(2)
        spr.fillSprite(spr.color.BLACK)
        spr.setTextColor(lcd.color.ORANGE)
        spr.drawString("MQ2 Reading", 90, 10)
        spr.drawFastHLine(40, 35, 240, lcd.color.DARKGREY)
        spr.setTextColor(lcd.color.WHITE)
        spr.drawString("- Current Level: ", 20, 50)
        spr.drawNumber(mq2.read(), 220,50)
        spr.pushSprite(0,0)
        time.sleep_ms(500)

        print("MQ2 Gas Sensor Reading is: ", mq2.read())

if __name__ == "__main__":
    main()
```

- **步骤 4.** 将 `ArduPy-mq2.py` 保存到您知道的位置。运行以下命令并将 `<YourPythonFilePath>` **替换**为您的 `ArduPy-mq2.py` 位置。

```sh
aip shell -n -c "runfile <YourPythonFilePath>"
# 示例：
# aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-mq2.py"
```
- **步骤 5.** 我们将在终端中看到如下显示的气体值，同时在 Wio Terminal LCD 屏幕上显示。

```python
ansonhe@Ansons-Macbook-Pro ~:aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-mq2.py"
Positional argument (/dev/cu.usbmodem1414301) takes precedence over --open.
Connected to ardupy
MQ2 Gas Sensor Reading is:  60
MQ2 Gas Sensor Reading is:  61
MQ2 Gas Sensor Reading is:  62
MQ2 Gas Sensor Reading is:  62
MQ2 Gas Sensor Reading is:  64
MQ2 Gas Sensor Reading is:  63
MQ2 Gas Sensor Reading is:  66
MQ2 Gas Sensor Reading is:  64
MQ2 Gas Sensor Reading is:  65
MQ2 Gas Sensor Reading is:  65
MQ2 Gas Sensor Reading is:  65
MQ2 Gas Sensor Reading is:  64
```

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/Ardupy-MQ2.png) -->

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/img/Ardupy-MQ2.png" alt="pir" width={600} height="auto" /></p>

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/res/Gas_Sensor_Eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## 资源


<!-- -  **[建议阅读]** [如何选择气体传感器](#/How_to_Chose_A_Gas_Sensor) -->
-  **[参考资料]** [什么是LEL](https://en.wikipedia.org/wiki/Flammability_limit)
-  **[原理图]** [Grove 气体传感器 - EAGLE（原理图和电路板）文件](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/res/Gas_Sensor_Eagle_files.zip)
-  **[原理图]** [Grove 气体传感器 - PDF 原理图](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/res/Gas_Sensor_Schematic.pdf)
-  **[数据手册]** [MQ-2 数据手册](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/res/MQ-2.pdf)


## 项目

**Arduino 和 MQ2 气体传感器**：Grove 气体传感器（MQ2）模块适用于气体泄漏检测（家庭和工业）。它适合检测 H2、LPG、CH4 和 CO。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/karimmufte/arduino-and-mq2-gas-sensor-57f98c/embed' width='350'></iframe>

[**检测水果成熟度的电子鼻**](https://hackaday.io/project/16809-electronic-nose-to-detect-fruit-ripening)

[**ED-E：家庭自动化和监控系统**](https://hackaday.io/project/8011-ed-e-home-automation-and-monitoring-system)

**可扩展智能空气质量监测和响应** 使用 Intel Edison 计算模块、Amazon AWS、通过 Kibana 可视化和无人机的空气质量监测！

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/iot-warriors/scalable-intelligent-air-quality-monitoring-and-response-b72732/embed' width='350'></iframe>

**Octopod：智能物联网家庭自动化项目** Octopod，一个独特形状的全屋自动化系统，让您可以监控家庭并通过 AI 和智能 RFID 锁保持安全。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/sakshambhutani2001/octopod-smart-iot-home-automation-project-fa939b/embed' width='350'></iframe>

## 技术支持和产品讨论

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 可升级为工业传感器
使用 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)和 [S2100 数据记录器](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 转换为 LoRaWAN® 传感器。Seeed 不仅帮助您进行原型设计，还为您提供了使用 SenseCAP 系列坚固[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

IP66 外壳、蓝牙配置、与全球 LoRaWAN® 网络的兼容性、内置 19 Ah 电池以及来自 APP 的强大支持使 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) 成为工业应用的最佳选择。该系列包括土壤湿度、空气温湿度、光照强度、CO2、EC 和 8 合 1 气象站传感器。为您下一个成功的工业项目尝试最新的 SenseCAP S210x。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width="{800}" src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>