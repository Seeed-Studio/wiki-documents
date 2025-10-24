---
description: Grove - 气体传感器(O₂)
title: Grove - 气体传感器(O₂) 
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Gas_Sensor-O2
last_update:
  date: 1/3/2023
  author: shuxu hu
---
<!-- tags: io_3v3, io_5v, grove_i2c, grove_analog, grove_digital, grove_uart, plat_duino, plat_bbg, plat_pi, plat_wio, plat_linkit -->

<!-- ![enter image description here](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/cover.jpg) -->

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/cover.jpg" alt="pir" width={600} height="auto" /></p>


Grove - 氧气传感器(ME2-O2-Ф20)是一种用于测试空气中氧气浓度的传感器，基于电化学电池的原理进行工作。当您输出与氧气浓度成正比的电压值并参考氧气浓度线性特性图时，您可以清楚地了解当前的氧气浓度。它非常适合在环境保护中检测氧气浓度。Grove - 气体传感器(O2)是一个有机反应模块，当将其置于空气中时可以提供少量电流，我们不需要为其提供外部电源，输出电压会随着时间电流的变化而变化。


<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/4df5kaaKa6I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

[<p><img src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Wireless/images/get_one_now.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/grove-gas-sensoro2-p-1541.html)

:::tip
    我们已经发布了[Seeed气体传感器选择指南](https://wiki.seeedstudio.com/cn/Seeed_Gas_Sensor_Selection_Guide/)，它将帮助您选择最适合您需求的气体传感器。
:::
##特性

* 高精度
* 高灵敏度
* 宽线性范围
* 强抗干扰能力
* 卓越的可靠性

:::tip
    有关Grove模块的更多详细信息，请参考[Grove系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::
##规格

|项目	| 参数 |
|-------|---------------|
|测量范围	| 0-25% |
| 检测寿命	| 两年 |
|灵敏度	| 0.05~0.15 mA(在空气中) |
|温度范围 |	-20 oC~50 oC |
|预热时间	| 20分钟|
|输入电压|3.3V / 5V|


## 硬件

**电压转换器**

<!-- ![](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/Converter.png) -->

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/Converter.png" alt="pir" width={600} height="auto" /></p>

XC6206332MR将3.3v/5v输入转换为3.3v。

**ME2-O2电流源**

<!-- ![](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/ME2-O2.png) -->

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/ME2-O2.png" alt="pir" width={600} height="auto" /></p>

ME2-O2是电流源。标签#3点的电压是R7 * 电流(ME2-O2)。


**放大器**

<!-- ![](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/Amplifer.png) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/Amplifer.png" alt="pir" width={600} height="auto" /></p>

放大器的增益是121，SIGA电压是标签#3点电压的121倍。

<!-- ![](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/concentration_current.png) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/concentration_current.png" alt="pir" width={600} height="auto" /></p>


这里是ME2-O2输出电流与O2浓度之间的相关性。20%浓度O2的电流约为120uA。因此Grove SIGA电压 @ 20%浓度 = R7 * 电流(ME2-O2) * 121 = 100 * 120uA * 121 = 1.452V。

:::warning
    由于个体差异，ME2-O2的电流范围是80uA~160uA。因此传感器输出电压也会有所不同。请在开始时将传感器暴露在新鲜空气中并获取输出电压的读数作为参考。您可以参考[此示例](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/resources/Read_O2_value.zip)在开始时进行校准，然后读取传感器值。
:::

## 支持的平台

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    上面提到的支持平台表示该模块的软件或理论兼容性。在大多数情况下，我们只为Arduino平台提供软件库或代码示例。不可能为所有可能的MCU平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::


##入门指南

:::note
    本章基于Win10和Arduino IDE 1.6.9
:::
这是一个易于使用的模块，您需要做的就是将信号引脚（Grove线缆的黄色引脚）连接到控制器的ADC输入。如果您的控制器中没有内部ADC，建议使用[Grove - I2C ADC](https://www.seeedstudio.com/Grove-I2C-ADC-p-1580.html)。

在这里，我们将通过一个简单的演示向您展示这个Grove - 气体传感器(O2)是如何工作的。首先，您需要准备以下物品：

| Seeeduino V4 | Grove - 氧气传感器(ME2-O2-Ф20) | Base Shield |
|--------------|----------------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/gas_sensor_210.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/grove-gas-sensoro2-p-1541.html)|[立即购买](https://www.seeedstudio.com/Grove-Universal-4-Pin-20cm-Unbuckled-Cable-%285-PCs-Pack%29-p-749.html)|



###连接 

得益于Grove系列模块的优势，您不需要进行焊接或使用面包板，您需要做的就是将模块连接到Base Shield的正确端口。对于这个演示，我们只有一个Grove模块。

* Grove - 氧气传感器(ME2-O2-Ф20)是一个模拟输入模块，在这个演示中我们将它连接到**A0**

<!-- ![enter image description here](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/connection.jpeg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/connection.jpeg" alt="pir" width={600} height="auto" /></p>



###将代码上传到Arduino

将以下代码复制到Arduino IDE中。


```
// Grove - 气体传感器(O2)测试代码
// 注意：
// 1. 传感器需要大约5-10分钟的预热时间
// 2. 如果需要，请修改VRefer

const float VRefer = 3.3;       // adc参考电压

const int pinAdc   = A0;

void setup() 
{
    // 在这里放置您的设置代码，只运行一次：
    Serial.begin(9600);
    Serial.println("Grove - 气体传感器测试代码...");
}

void loop() 
{
    // 在这里放置您的主要代码，重复运行：
    float Vout =0;
    Serial.print("Vout =");

    Vout = readO2Vout();
    Serial.print(Vout);
    Serial.print(" V, O2浓度为 ");
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
    // Vout采样参考3.3V
    float MeasuredVout = readO2Vout();
    
    //float Concentration = FmultiMap(MeasuredVout, VoutArray,O2ConArray, 6);
    //当其输出电压为2.0V时，
    float Concentration = MeasuredVout * 0.21 / 2.0;
    float Concentration_Percentage=Concentration*100;
    return Concentration_Percentage;
}

```

然后选择正确的开发板和COM端口，然后点击上传按钮，这个过程需要几秒钟。

###获取数据

打开Arduino IDE的串口监视器，您现在就可以获取数据了。

:::warning
    传感器需要大约20~30分钟的预热时间，否则您会得到一个较大的值。
:::   
<!-- ![enter image description here](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/data.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/data.png" alt="pir" width={600} height="auto" /></p>

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/resources/Schematics_O2.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>




## 资源

* [ME2-O2 数据手册](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/resources/ME2-O2-D20%200-25%25%20Manual%20%28ver1.2%29.pdf)
* [Eagle 文件格式的原理图](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/resources/Schematics_O2.zip)
* [本文档的 Github 仓库](https://github.com/SeeedDocument/Grove_Gas_Sensor_O2)


## 项目

**LoRa IoTea**：应用于茶园的自动信息收集系统。它是智能农业信息收集的一部分。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/seeed-lora-iotea-solution-b5ee95/embed' width='350'></iframe>

**带照明和降雨功能的植物盒** 您从未见过这样的植物浇水方式。

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
通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)和 [S2100 数据记录器](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 传感器转换为 LoRaWAN® 传感器。Seeed 不仅帮助您进行原型设计，还为您提供了通过 SenseCAP 系列坚固的[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

IP66 外壳、蓝牙配置、与全球 LoRaWAN® 网络的兼容性、内置 19 Ah 电池以及来自 APP 的强大支持，使 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) 成为工业应用的最佳选择。该系列包括土壤湿度、空气温湿度、光照强度、CO2、EC 传感器以及 8 合 1 气象站。为您下一个成功的工业项目尝试最新的 SenseCAP S210x。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>