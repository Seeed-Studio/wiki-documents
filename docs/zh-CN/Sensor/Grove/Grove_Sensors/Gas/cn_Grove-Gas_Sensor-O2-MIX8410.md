---
description: Grove - 氧气传感器(MIX8410)
title: Grove - 氧气传感器(MIX8410)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Gas_Sensor-O2-MIX8410
last_update:
  date: 1/3/2023
  author: shuxu hu
---
<!-- tags: io_3v3, io_5v, grove_i2c, grove_analog, grove_digital, grove_uart, plat_duino, plat_bbg, plat_pi, plat_wio, plat_linkit -->

<!-- ![enter image description here](https://files.seeedstudio.com/products/101990680/101990680_preview-34.png) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/101990680/101990680_preview-34.png" alt="pir" width={600} height="auto" /></p>

Grove - 氧气传感器(MIX8410)是一种用于测试空气中氧气浓度的传感器，基于电化学电池的原理工作。当输出与氧气浓度成正比的电压值时，您可以参考氧气浓度线性特性图清楚地了解当前的氧气浓度。它非常适合在环境保护中检测氧气浓度。Grove - 氧气传感器(MIX8410)是一个有机反应模块，当将其置于空气中时可以提供少量电流，我们不需要为其提供外部电源，输出电压会随着时间电流的变化而变化。

Grove - 氧气传感器(MIX8410)相比旧版本Grove - 氧气传感器(ME2-O2-Ф20)是一个新发布的版本。那么我们在哪些方面进行了更新呢？新版本采用了先进的防泄漏处理，大大降低了泄漏概率，解决了旧版本的泄漏问题。新版本的输出电流更低，因此电解液消耗更慢，传感器寿命更长。此外，新旧版本的底部引脚、物理尺寸、顶部驱动板和使用方法都是相同的。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/4df5kaaKa6I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Oxygen-Sensor-MIX8410-p-4697.html"><img src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Wireless/images/get_one_now.png" alt="pir" width={600} height="auto" /></a></p> 


:::tip
    我们已经发布了[Seeed气体传感器选择指南](https://wiki.seeedstudio.com/cn/Seeed_Gas_Sensor_Selection_Guide/)，它将帮助您选择最适合您需求的气体传感器。
:::

## 特性

* 高灵敏度(0.1±0.03 mA)，线性输出
* 高稳定性，响应时间&lt;10秒
* 环保设计
* 先进的防泄漏技术，大大降低泄漏概率
* 低输出电流，传感器寿命更长

:::tip
    有关Grove模块的更多详细信息，请参考[Grove系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::


## 规格参数

|项目	| 参数 |
|-------|---------------|
|测量范围	| 0-25% |
|过载浓度| 30%|
|灵敏度	| 0.05~0.15 mA(在空气中) |
|重复性  | ±2% |
|响应时间(t90) | ＜ 10s |
|稳定性| ＜ 2% / 月 |
|推荐负载| 100Ω |
|长期漂移|  ＜ 5% / 年|
|温度范围 |	-20 °C~50 °C |
|预热时间	| 20分钟|
|存储温度| 0-25 °C|
|输入电压|3.3V / 5V|
|检测寿命	| 两年(空气中) |

:::note
    安装时可以焊接引线，禁止焊接接触传感器；
    通电老化时间不少于30分钟；
    避免长期接触有机挥发性溶剂；
    使用或存储环境不能是酸碱环境。
:::

## 硬件

**电压转换器**

<!-- ![](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/Converter.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/Converter.png" alt="pir" width={600} height="auto" /></p>


XC6206332MR 将 3.3v/5v 输入转换为 3.3v。

**电流源**

<!-- ![](https://files.seeedstudio.com/products/101990680/currentsource.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/101990680/currentsource.png" alt="pir" width={600} height="auto" /></p>


MIX8410-O2 是电流源。标签 #3 点的电压为 R7 * 电流(MIX8410-O2)。

**放大器**

<!-- ![](https://files.seeedstudio.com/products/101990680/MIX8410Amplifer.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/101990680/MIX8410Amplifer.png" alt="pir" width={600} height="auto" /></p>


放大器的增益为 241，SIGA 电压是标签 #3 点电压的 241 倍。

<!-- ![](https://files.seeedstudio.com/products/101990680/outputcurrent.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/101990680/outputcurrent.png" alt="pir" width={600} height="auto" /></p>


这里是 MIX8410 输出电流与 O2 浓度之间的相关性。20% 浓度 O2 的电流约为 96uA。因此 Grove SIGA 电压 @ 20% 浓度 = R7 * 电流(MIX8410) * 241 = 100 * 96uA * 241 = 2.314V。

:::warning
    由于个体差异，MIX8410 的电流范围为 8uA~100uA。因此传感器输出电压也会有所不同。请在开始时将传感器暴露在新鲜空气中，并获取输出电压的读数作为参考。您可以参考[此示例](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/resources/Read_O2_value.zip)在开始时进行校准，然后读取传感器值。
:::

## 支持的平台

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    上述提到的支持平台表示该模块的软件或理论兼容性。在大多数情况下，我们只为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

## 入门指南

:::note
    本章节基于 Win10 和 Arduino IDE 1.7.9
:::

这个新的 Grove 气体传感器 O2(MIX8410) 的使用方法与旧版 [ME2-O2-Ф20](https://wiki.seeedstudio.com/cn/Grove-Gas_Sensor-O2/) 完全相同。

这是一个易于使用的模块，您需要做的就是将信号引脚（Grove 线缆的黄色引脚）连接到控制器的 ADC 输入端。如果您的控制器没有内置 ADC，建议使用 [Grove - I2C ADC](https://www.seeedstudio.com/Grove-I2C-ADC-p-1580.html)。

这里我们将通过一个简单的演示来展示 Grove - 氧气传感器(MIX8410) 的工作原理。首先，您需要准备以下物品：

| Seeeduino V4 | Grove - 氧气传感器(MIX8410) | Base Shield |
|--------------|----------------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/products/101990680/101990680overview.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即获取](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即获取](https://www.seeedstudio.com/grove-gas-sensoro2-p-1541.html)|[立即获取](https://www.seeedstudio.com/Grove-Universal-4-Pin-20cm-Unbuckled-Cable-%285-PCs-Pack%29-p-749.html)|



### 连接 

得益于 Grove 系列模块的优势，您无需焊接或使用面包板，只需将模块连接到 Base Shield 的正确端口即可。在这个演示中，我们只有一个 Grove 模块。

* Grove - 氧气传感器(MIX8410) 是一个模拟输入模块，在此演示中我们将其连接到 **A0**

<!-- ![enter image description here](https://files.seeedstudio.com/products/101990680/hardwareconnection1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/101990680/hardwareconnection1.jpg" alt="pir" width={600} height="auto" /></p>



###将代码上传到 Arduino

将以下代码复制到 Arduino IDE。


```
// Grove - 气体传感器(O2) 测试代码
// 注意:
// 1. 传感器需要大约 5-10 分钟的预热时间
// 2. 如需要请修改 VRefer

const float VRefer = 3.3;       // adc 参考电压

const int pinAdc   = A0;

void setup() 
{
    // 在这里放置您的设置代码，只运行一次:
    Serial.begin(9600);
    Serial.println("Grove - 氧气传感器(MIX8410) 测试代码...");
}

void loop() 
{
    // 在这里放置您的主要代码，重复运行:
    float Vout =0;
    Serial.print("Vout =");

    Vout = readO2Vout();
    Serial.print(Vout);
    Serial.print(" V, O2 浓度为 ");
    Serial.println(readConcentration());
    delay(500);
}

float readO2Vout()
{
    long sum = 0;
    for(int i=0; i<32; i++)
    {
        sum += analogRead(pinAdc);
    }
    
    sum >>= 5;
    
    float MeasuredVout = sum * (VRefer / 1023.0);
    return MeasuredVout;
}

float readConcentration()
{
    // Vout 采样参考 3.3V
    float MeasuredVout = readO2Vout();
    
    //float Concentration = FmultiMap(MeasuredVout, VoutArray,O2ConArray, 6);
    //当输出电压为 2.0V 时,
    float Concentration = MeasuredVout * 0.21 / 2.0;
    float Concentration_Percentage=Concentration*100;
    return Concentration_Percentage;
}

```

然后选择正确的开发板和 COM 端口，接着点击上传按钮，这个过程需要几秒钟。

###获取数据

打开 Arduino IDE 的串口监视器，您现在就可以获取数据了。

:::warning
    传感器需要大约 20~30 分钟的预热时间，否则您会得到较大的数值。
:::
    
<!-- ![enter image description here](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/data.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/data.png" alt="pir" width={600} height="auto" /></p>

## 开始使用树莓派（配合Grove树莓派底板）

#### 硬件

- **步骤 1**. 本项目使用的物品：

| 树莓派 | Grove树莓派底板| Grove - 气体传感器 O₂(MIX8410)|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/products/101990680/MIX8410py.png" alt="pir" width={600} height="auto" /></p>|
|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即购买](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[立即购买](https://www.seeedstudio.com/Grove-Oxygen-Sensor-MIX8410-p-4697.html)|


- **步骤 2**. 将Grove底板插入树莓派。
- **步骤 3**. 将Grove - 气体传感器 O₂(MIX8410)连接到底板的模拟端口A0。
- **步骤 4**. 通过USB线将树莓派连接到PC。


<!-- ![](https://files.seeedstudio.com/products/101990680/MIX8410hardwareconnection1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/101990680/MIX8410hardwareconnection1.jpg" alt="pir" width={600} height="auto" /></p>




#### 软件

- **步骤 1**. 按照[设置软件](https://wiki.seeedstudio.com/cn/Grove_Base_Hat_for_Raspberry_Pi/#installation)配置开发环境。
- **步骤 2**. 通过克隆grove.py库下载源文件。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **步骤 3**. 执行以下命令创建python代码。

```
cd grove.py/grove/
nano MIX8410.py


```
- **步骤 4**. 将以下代码复制到文件中：


```python
import time , sys, math
from adc import ADC

__all__ = ["GroveMix8410Sensor"]

VRefer = 3.3
total = 0
Measuredvout = 0

class GroveMix8410:



    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()
    
    @property
    def Mix8410(self):
        value = self.adc.read(self.channel)
        if value != 0:
            voltage = value*3.3/1024.0
            Mix8410Value = voltage* 0.21 *100/ 2.0
            return Mix8410Value
        else:
            return 0

Grove = GroveMix8410

def main():
    if len(sys.argv) < 2:
        print('Usage: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)
 
    sensor = GroveMix8410(int(sys.argv[1]))
    print('Detecting 02 value...')
 
    while True:
        print('Mix8410 Value: {0}'.format(sensor.Mix8410))
        time.sleep(1)
 
if __name__ == '__main__':
    main()  

```

- **步骤 5**. 使用Ctrl+O保存，Ctrl+X退出。
- **步骤 6**. 运行以下命令执行：
```
python MIX8410.py 0
```

:::success
    如果一切顺利，您将能够看到以下结果。
:::   
```python

pi@raspberrypi:~/grove.py/grove$ python MIX8410.py 0

Detecting 02 value...
Mix8410 Value: 23.6419354839
Mix8410 Value: 23.9129032258
Mix8410 Value: 23.9467741935
Mix8410 Value: 23.9467741935
Mix8410 Value: 23.8451612903
Mix8410 Value: 23.9467741935
Mix8410 Value: 23.9467741935
Mix8410 Value: 23.9467741935
Mix8410 Value: 23.9806451613
Mix8410 Value: 23.9467741935
Mix8410 Value: 23.9467741935
Mix8410 Value: 23.9806451613
Mix8410 Value: 23.9467741935
Mix8410 Value: 23.9129032258
Mix8410 Value: 23.9129032258
Mix8410 Value: 23.9129032258
Mix8410 Value: 23.9467741935
Mix8410 Value: 23.9129032258


```

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="http://files.seeedstudio.com/products/101990680/MIX8410v1.0_SCH&PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>




## 资源

* [MIX8410 数据手册](https://files.seeedstudio.com/products/101990680/MIX841datasheetV1.6.pdf)
* [Eagle 文件格式原理图](http://files.seeedstudio.com/products/101990680/MIX8410v1.0_SCH&PCB.zip)
* [本文档的 Github 仓库](https://github.com/SeeedDocument/Grove_Gas_Sensor_O2)
* [PDF 原理图](https://files.seeedstudio.com/products/101990680/MIX841v1.0_SCH_200811.pdf)

## 项目

**LoRa IoTea**：应用于茶园的自动信息采集系统。它是智能农业信息采集的一部分。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/seeed-lora-iotea-solution-b5ee95/embed' width='350'></iframe>

**带照明和降雨功能的植物盒子** 您从未见过这样的植物浇水方式。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/team-seeed-ae/a-plant-box-with-lighting-and-raining-bfc59b/embed' width='350'></iframe>

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
通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)和 [S2100 数据记录器](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 传感器转换为 LoRaWAN® 传感器。Seeed 不仅帮助您进行原型设计，还为您提供了使用 SenseCAP 系列坚固的[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

IP66 外壳、蓝牙配置、与全球 LoRaWAN® 网络的兼容性、内置 19 Ah 电池以及来自 APP 的强大支持，使 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) 成为工业应用的最佳选择。该系列包括土壤湿度、空气温湿度、光照强度、CO2、EC 传感器以及 8 合 1 气象站。为您下一个成功的工业项目尝试最新的 SenseCAP S210x。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>