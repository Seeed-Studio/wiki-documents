---
description: Grove - 酒精传感器
title: Grove - 酒精传感器
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Alcohol_Sensor
last_update:
  date: 1/5/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/img/Alcohol_sensor_01.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/img/Alcohol_sensor_01.jpg" alt="pir" width={600} height="auto" /></p>


Grove - 酒精传感器是一个适用于 Arduino 或 Seeeduino 的完整酒精传感器模块。它采用 [MQ303A](https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/res/MQ303A.pdf) 半导体酒精传感器构建。它对酒精具有良好的敏感性和快速响应。适合制作酒精检测仪。这个 Grove 模块实现了 MQ303A 所需的所有必要电路，如电源调节和加热器电源供应。该传感器输出与空气中酒精浓度成反比的电压。

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Alcohol-Sensor-p-764.html)

<div class="admonition danger">
<p class="admonition-title">注意</p>
传感器数值仅反映在允许误差范围内气体浓度的近似趋势，它不代表确切的气体浓度。检测空气中某些成分通常需要更精确和昂贵的仪器，这无法通过单个气体传感器实现。如果您的项目旨在获得非常精确水平的气体浓度，那么我们不推荐使用这个气体传感器。
</div>

:::tip
    我们已经发布了 [Seeed 气体传感器选择指南](https://wiki.seeedstudio.com/cn/Seeed_Gas_Sensor_Selection_Guide/)，它将帮助您选择最适合您需求的气体传感器。
:::
特性
--------

-   输入电压：5V
-   工作电流：120mA
-   可检测浓度：20-1000ppm
-   Grove 兼容连接器
-   对酒精高度敏感。
-   快速响应，酒精暴露后快速恢复。
-   使用寿命长。
-   紧凑的外形尺寸。

:::tip
    有关 Grove 模块的更多详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

支持的平台
-------------------

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    上面提到的支持平台是/是该模块软件或理论兼容性的指示。在大多数情况下，我们只为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::


使用方法
-----

### 硬件安装

Grove 产品有一个生态系统，所有产品都有相同的连接器，可以插入 Grove Base Shield。将此模块连接到 Base Shield 的 A0 端口，但是，您也可以通过跳线将气体传感器连接到 Arduino，而无需 Base Shield。

| Arduino UNO | 酒精传感器 |
|-------------|----------------|
| 5V          | VCC            |
| GND         | GND            |
| Analog A1   | SCL            |
| Analog A0   | DAT            |

您可以通过传感器的 DAT 引脚获得当前电压。<font color="Red">请注意传感器的最佳预热时间超过 48 小时</font>。有关酒精传感器的详细信息，请参考数据表。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/img/Twig_Alcohol_Sensor_Connected_To_Seeeduino_via_BaseStem.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/img/Twig_Alcohol_Sensor_Connected_To_Seeeduino_via_BaseStem.jpg" alt="pir" width={600} height="auto" /></p>


### 下载代码并上传

在获得气体浓度之前，您需要执行两个步骤。

首先，使用 A0 将模块与 Grove Shield 连接，如上图所示。将传感器放在清洁空气中，并使用下面的程序。

```
#define heaterSelPin 15

void setup() {
    Serial.begin(9600);
    pinMode(heaterSelPin,OUTPUT);   // set the heaterSelPin as digital output.
    digitalWrite(heaterSelPin,LOW); // Start to heat the sensor
}

void loop() {
    float sensor_volt;
    float RS_air; //  Get the value of RS via in a clear air
    float sensorValue = 0;

/*--- Get a average data by testing 100 times ---*/
    for(int x = 0 ; x < 100 ; x++)
    {
        sensorValue = sensorValue + analogRead(A0);
    }
    sensorValue = sensorValue/100.0;
/*-----------------------------------------------*/

    sensor_volt = sensorValue/1024*5.0;
    RS_air = sensor_volt/(5.0-sensor_volt); // omit *R16
    Serial.print("sensor_volt = ");
    Serial.print(sensor_volt);
    Serial.println("V");
    Serial.print("RS_air = ");
    Serial.println(RS_air);
    delay(1000);
}
```

然后，打开Arduino IDE的监视器，你可以看到一些数据被打印出来，记下RS_air的值，你需要在接下来的程序中使用它。在这一步中，你可能需要花一些时间来测试RS_air的值。

```
#define heaterSelPin 15

void setup() {
    Serial.begin(9600);
    pinMode(heaterSelPin,OUTPUT);   // set the heaterSelPin as digital output.
    digitalWrite(heaterSelPin,LOW); // Start to heat the sensor
}

void loop() {

    float sensor_volt;
    float RS_gas; // Get value of RS in a GAS
    float ratio; // Get ratio RS_GAS/RS_air
    int sensorValue = analogRead(A0);
    sensor_volt=(float)sensorValue/1024*5.0;
    RS_gas = sensor_volt/(5.0-sensor_volt); // omit *R16

  /*-Replace the name "R0" with the value of R0 in the demo of First Test -*/
    ratio = RS_gas/RS_air;  // ratio = RS/R0
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

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/img/Gas_Sensor_5.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/img/Gas_Sensor_5.png" alt="pir" width={600} height="auto" /></p>


根据图表，我们可以看到我们能测试的最小浓度是20ppm，最大是10000ppm，换句话说，我们可以获得0.002%到1%之间的气体浓度。然而，我们无法提供公式，因为比率和浓度之间的关系是非线性的。

<div class="admonition note">
<p class="admonition-title">注意</p>
<p> a. 数值在500 - 905之间变化。因此任何超过650的值都表示附近有酒精蒸汽。</p>
<p> b. 一旦暴露在酒精蒸汽中，传感器值需要一些时间才能完全下降。</p>
<p> c. 然而，任何新的暴露都会显示传感器值的即时增加。</p>
</div>


<div class="admonition danger">
<p class="admonition-title">注意</p>
<p> a. 酒精传感器是非常敏感的半导体器件。请小心处理。</p>
<p> b. 不要暴露在有机硅蒸汽、碱性或腐蚀性气体中。</p>
<p> c. 不要冷冻或溅水。</p>
<p> d. 保持适当的工作电压。</p>
</div>

# Grove-Alcohol Sensor
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/res/Twig_-_Alcohol_Sensor_Eagle_Files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


# Grove-Alcohol Sensor v1.2
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/res/Grove-Alcohol_Sensor_sch_pcbv1.2.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# 资源
---------

- [Grove-酒精传感器 Eagle 文件](https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/res/Twig_-_Alcohol_Sensor_Eagle_Files.zip)
- [Grove-酒精传感器 v1.2 Eagle 文件](https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/res/Grove-Alcohol_Sensor_sch_pcbv1.2.zip)
- [PDF 格式原理图](https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/res/Grove%20-%20Alcohol%20Sensor%20v1.2.pdf)
- [如何选择气体传感器](#/How_to_Chose_A_Gas_Sensor)
- [MQ303A](https://files.seeedstudio.com/wiki/Grove-Alcohol_Sensor/res/MQ303A.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Alcohol_Sensor -->

## 技术支持与产品讨论

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 可升级为工业级传感器
通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)和 [S2100 数据记录器](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 转换为 LoRaWAN® 传感器。Seeed 不仅帮助您进行原型设计，还为您提供了通过 SenseCAP 系列坚固的[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

IP66 外壳、蓝牙配置、与全球 LoRaWAN® 网络的兼容性、内置 19 Ah 电池以及来自 APP 的强大支持，使 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) 成为工业应用的最佳选择。该系列包括土壤湿度、空气温湿度、光照强度、CO2、EC 传感器以及 8 合 1 气象站。为您下一个成功的工业项目尝试最新的 SenseCAP S210x。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>