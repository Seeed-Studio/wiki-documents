---
description: Grove - 灰尘传感器
title: Grove - 灰尘传感器
keywords:
- Grove Grove_Sensors Air_Quality
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Dust_Sensor
last_update:
  date: 1/20/2023
  author: jianjing huang
---

![](https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/img/Dust1.JPG)

此灰尘传感器通过测量灰尘浓度，可以很好地指示环境中的空气质量。空气中的颗粒物浓度（PM浓度）通过计算单位时间内的低脉冲占空时间（LPO时间）来测量。LPO时间与PM浓度成正比。此传感器可以为空气净化系统提供可靠数据；它对直径为1μm的颗粒物具有良好的响应能力。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/4df5kaaKa6I" title="YouTube视频播放器" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

:::caution

- 此传感器使用计数方法测量灰尘浓度，而非称重方法，单位为 pcs/L 或 pcs/0.01cf。
- 请注意以下警告：
  - 请保持传感器直立。
  - 第一次使用时需要3分钟预热时间。
  - 随意操作可能会导致意外损坏。
  - 以下部件（红色矩形标记）仅用于工厂设置，请**不要**更改默认配置。
:::

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Dust-Sensor-p-1050.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border="0" /></a></p>

## 版本

| 产品版本                  | 更改内容                                   | 发布日期       |
|---------------------------|-------------------------------------------|---------------|
|Grove-Dust Sensor V1.0 | 初始版本                                   | 2012年11月    |

## 特性

- 稳定且灵敏地检测不仅是香烟烟雾，还有室内哮喘诱因的家居灰尘。
- 内置加热器的空气生成机制使空气自吸。
- 易于维护，高灵敏度可长期保持。
- 对颗粒尺寸超过1微米和2.5微米（约）的双输出。
- 更紧凑、更轻便，易于安装。

:::tip
有关Grove模块的更多详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

## 规格

|项目| 标准值| 单位 |
|----|-------|-------|
|VCC | 4.75~5.75| V    |
|待机电流| 90| mA|
|可检测浓度范围| 0~28,000 / 0 ~ 8000 | pcs/升 / pcs/0.01cf|
|工作温度范围| 0~45| °C|
|输出方式| 负逻辑，数字输出，高：超过4.0V(Rev.2)，低：低于0.7V|-|
|检测颗粒直径| >1 |μm|
|尺寸| 59(宽) × 45(高) × 22(深) |mm|
|湿度范围| 95% rh 或以下|-|

:::note
    在最新版本中，输出高电压从4.0V更改为4.5V。
:::

## 支持的平台

| Arduino                                                                                             | 树莓派                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
上述提到的支持平台仅表示模块的软件或理论兼容性。我们通常仅为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库或演示代码。因此，用户需要自行编写软件库。
:::

## 应用场景

- 空气净化器
- 空气质量监测仪
- 空调
- 通风设备

## 入门指南

:::note
如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

### 使用 Arduino

**硬件**

- **步骤 1.** 准备以下物品：

| Seeeduino V4.2 | Base Shield| Grove-Dust Sensor |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/img/Dust_sensor%20-_s.JPG)|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-Dust-Sensor-p-1050.html)|

- **步骤 2.** 将 Grove-Dust Sensor 连接到 Grove-Base Shield 的 **D8** 端口。
- **步骤 3.** 将 Grove-Base Shield 插入 Seeeduino。
- **步骤 4.** 使用 USB 数据线将 Seeeduino 连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/img/seeeduino_dust.jpg)

:::note
如果没有 Grove Base Shield，我们也可以直接将 Grove-Dust Sensor 连接到 Seeeduino，如下所示。
:::

| Seeeduino |  Grove-Loudness Sensor |
|-----------|-----------------|
| 5V        | 红色             |
| GND       | 黑色             |
| NC        | 白色             |
| D8        | 黄色             |

**软件**

- **步骤 1.** 请将以下代码复制到 Arduino IDE 并上传到 Arduino。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

```
int pin = 8;
unsigned long duration;
unsigned long starttime;
unsigned long sampletime_ms = 30000;//采样时间为30秒；
unsigned long lowpulseoccupancy = 0;
float ratio = 0;
float concentration = 0;

void setup() 
{
    Serial.begin(9600);
    pinMode(pin,INPUT);
    starttime = millis();//获取当前时间；
}

void loop() 
{
    duration = pulseIn(pin, LOW);
    lowpulseoccupancy = lowpulseoccupancy+duration;

    if ((millis()-starttime) > sampletime_ms)//如果采样时间达到30秒
    {
        ratio = lowpulseoccupancy/(sampletime_ms*10.0);  // 整数百分比 0=>100
        concentration = 1.1*pow(ratio,3)-3.8*pow(ratio,2)+520*ratio+0.62; // 使用规格表曲线
        Serial.print(lowpulseoccupancy);
        Serial.print(",");
        Serial.print(ratio);
        Serial.print(",");
        Serial.println(concentration);
        lowpulseoccupancy = 0;
        starttime = millis();
    }
}

```

- **步骤 2.** 在此程序中，Seeeduino 在30秒内采样“逻辑低”的总持续时间，该持续时间反映了环境中的灰尘密度。打开串口监视器，我们可以通过电脑的串口获取传感器检测到的空气质量值。

![](https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/img/Serial.png)

**术语：**

- **"Lowpulseoccupancy"** 表示在给定的30秒内检测到的低脉冲占用时间（LPO时间）。单位是微秒。

- **"Ratio"** 反映了 LPO 时间在整个采样时间中所占的比例。

- **"Concentration"** 是一个具有物理意义的数值。它通过使用 LPO 时间从下图的特性曲线计算得出。
![](https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/image/600px-Characteristics.jpg)

- 以下是办公室中测量的灰尘浓度图：

![](https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/image/600px-Dust_sensor_4.jpg)

我们可以看到晚上灰尘浓度非常低，但下午浓度较高。当浓度超过某个值时，可以设置一个阈值。此外，如果您希望传感器更敏感，可以在传感器上添加一个风扇，并在 Pin5 和地之间添加一个 10kΩ 电阻。更多信息请访问 [A.J 的博客](https://indiaairquality.com/2014/12/14/measuring-the-pickle-jr-a-modified-ppd42-with-an-attached-fan/)。

### 使用树莓派

**硬件**

- **步骤 1.** 准备以下物品：

| 树莓派 | GrovePi_Plus | Grove-粉尘传感器 |
|--------------|-------------|-----------------|
|![点击查看图片](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![点击查看图片](https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg)|![点击查看图片](https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/img/Dust_sensor%20-_s.JPG)|
|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即购买](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[立即购买](https://www.seeedstudio.com/Grove-Dust-Sensor-p-1050.html)|

- **步骤 2.** 将 GrovePi_Plus 插入树莓派。
- **步骤 3.** 将 Grove-粉尘传感器连接到 GrovePi_Plus 的 **D2** 端口。
- **步骤 4.** 使用 USB 数据线将树莓派连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/img/rpi_dust.jpg)

**软件**

- **步骤 1.** 按照 [设置软件](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) 配置开发环境。
- **步骤 2.** 克隆 Github 仓库。

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git
```

- **步骤 3.** 执行以下命令以监测粉尘。

```python
cd ~/GrovePi/Software/Python
python grove_dust_sensor.py
```

以下是 grove_dust_sensor.py 的代码。

```python
import time
import grovepi
import atexit

atexit.register(grovepi.dust_sensor_dis)

print("从粉尘传感器读取数据")
grovepi.dust_sensor_en()
while True:
    try:
        [new_val, lowpulseoccupancy] = grovepi.dustSensorRead()
        if new_val:
            print(lowpulseoccupancy)
        time.sleep(5)

    except IOError:
        print("错误")
```

- **步骤 4.** 我们将看到如下的粉尘状态。

```python
pi@raspberrypi:~/GrovePi/Software/Python $ python grove_dust_sensor.py 
从粉尘传感器读取数据
14029
2621
1725
1978
2533
1619
```

## 相关项目

如果您想使用 Grove-粉尘传感器制作一些很棒的项目，这里有一个参考项目。

**空气质量盒**

![](https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/image/600px-Overview0.png)

这是一个由 Seeeduino 和 [Grove](https://www.seeedstudio.com/wiki/Grove_System) 制作的物联网演示。

如今，人们越来越关注环境空气质量，因为空气中的微小颗粒可能严重危害人们的健康。我们通常从政府部门获取环境信息，但这些信息是整个城市或区域的平均值，无法准确反映您周围的环境。

[![](https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/image/200px-Wiki_makeitnow_logo.png)](https://www.instructables.com/id/Air-Quality-Test-Box/?ALLSTEPS)

## 常见问题

**问题 1：如何将 Grove-粉尘传感器（5V逻辑）与 Seeeduino Stalker（3.3V逻辑）一起使用？**

**回答 1：** 粉尘传感器的输出信号需要降压到 3.3V 逻辑才能与 Seeeduino Stalker（或任何类似的板子）兼容。粉尘传感器的输出为 0.7V（逻辑低）和大于 4.0V（逻辑高）。您可以使用电压分压器将输出信号降压到与 3.3V 逻辑兼容，或者使用 TTL 逻辑电平转换器。

## 资源

- **[数据手册]** [Grove-Dust_sensor 数据手册](https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/resource/Grove_-_Dust_sensor.pdf)
- **[数据手册]** [Shinyei PPD42NS 粉尘传感器拆解 - Tracy Allen 制作](https://files.seeedstudio.com/wiki/Grove_Dust_Sensor/resource/ShinyeiPPD42NS_Deconstruction_TracyAllen.pdf)
- **[演示]** [构建低成本网络化 PM2.5 监测器](https://indiaairquality.com/2014/12/14/building-pickle-jr-the-low-cost-networked-pm2-5-monitor-part-2/) -- A.J. 制作
- **[演示]** [测量 Pickle Jr. – 一个带风扇的改装 PPD42](https://indiaairquality.com/2014/12/14/measuring-the-pickle-jr-a-modified-ppd42-with-an-attached-fan/) -- A.J. 制作
- **[演示]** [测试 Shinyei PPD42NS](http://irq5.io/2013/07/24/testing-the-shinyei-ppd42ns/) -- darell tan 制作
- **[演示]** [空气质量监测](http://www.howmuchsnow.com/arduino/airquality/grovedust/) -- Chris Nafis 制作

## 项目

**空气质量盒子**：监测您周围的空气质量

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ye-xiaobo/air-quality-box-d7658a/embed' width='350'></iframe>

**智能农作物：在传统农业中实施物联网！**：我们的使命是保护自然，通过 Helium 设计和实施技术及监测方法。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/gabogiraldo/smart-crops-implementing-iot-in-conventional-agriculture-3674a6/embed' width='350'></iframe>

**LoRa IoTea**：一个应用于茶园的自动信息采集系统。它是智能农业信息采集的一部分。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/seeed-lora-iotea-solution-b5ee95/embed' width='350'></iframe>

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

通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) 和 [S2100 数据记录器](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 转变为 LoRaWAN® 传感器。Seeed 不仅帮助您进行原型设计，还为您提供使用 SenseCAP 系列坚固的[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

IP66 外壳、蓝牙配置、全球 LoRaWAN® 网络兼容性、内置 19 Ah 电池以及强大的 APP 支持，使 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) 成为工业应用的最佳选择。该系列包括土壤湿度、空气温湿度、光照强度、CO2、EC 传感器以及一个 8 合 1 气象站。尝试最新的 SenseCAP S210x，为您的下一个工业项目取得成功。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>