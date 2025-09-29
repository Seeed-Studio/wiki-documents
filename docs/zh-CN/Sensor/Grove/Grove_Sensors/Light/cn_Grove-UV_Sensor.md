---
description: Grove - 紫外线传感器
title: Grove - 紫外线传感器
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-UV_Sensor
last_update:
  date: 1/5/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-UV_Sensor/img/UV_Sensor_01.jpg" /></div>

Grove – 紫外线传感器用于检测入射紫外线(UV)辐射的强度。这种形式的电磁辐射的波长比可见光辐射更短。Grove - 紫外线传感器基于 GUVA-S12D 传感器，具有 200nm-400nm 的宽光谱范围。该模块输出随紫外线强度变化的电信号，为您提供今天是否适合去海滩的建议。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-UV-Sensor-p-1540.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" /></a></p>

特性
--------

- 高稳定性
- 良好的灵敏度
- 低功耗
- 肖特基型光电二极管传感器
- 宽响应范围
- Grove 接口

:::tip
有关 Grove 模块的更多详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

规格参数
--------------

| 项目                | 最小值 | 典型值     | 最大值 | 单位 |
|---------------------|-----|---------|-----|------|
| 工作电压   | 3.0 | 5.0     | 5.1 | VDC  |
| 电流             |     | 0.31    |     | mA   |
| 输出电压      |     |         |     | mV   |
| 响应波长 | 240 | ~       | 370 | nm   |
| 工作温度 | -30 | ~       | 85  | ℃    |

支持的平台
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上述提到的支持平台是/是该模块软件或理论兼容性的指示。在大多数情况下，我们只为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

应用想法
-----

- 紫外线传感器用于许多不同的应用，包括制药、汽车和机器人技术。
- 紫外线传感器也用于印刷行业的溶剂处理和染色工艺。
- 此外，紫外线传感器还用于化学工业的化学品生产、储存和运输。

紫外线传感器的原理是：在阳光下，紫外线指数和光电流呈线性关系。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-UV_Sensor/img/The%20theory%20of%20UV%20sensor.png" /></div>

关于我们的 Grove - 紫外线传感器，我们已经将光电流转换为 Arduino/Seeeduino 采集的相应电压值。输出电压和紫外线指数呈线性关系：

**照射强度 = 307 * Vsig**

Vsig 是从 Grove 接口的 SIG 引脚测量的电压值，单位 V。
照射强度单位：mW/m<sup>2</sup>，适用于波长范围 240nm~370nm 的紫外线组合强度

:::note
要计算紫外线指数值，请参考 <a href="http://www2.epa.gov/sunwise/uv-index">美国环保署</a>。很难说这个传感器的测量值可以转换为 EPA 标准紫外线指数，但可以粗略估计。
:::

紫外线指数 = 照射强度 / 200

入门指南
--------------

:::note
    本章基于 Win10 和 Arduino IDE 1.6.9
:::

我们将通过一个简单的演示向您展示这个 Grove - 紫外线传感器是如何工作的。首先，您需要准备以下物品：

| Seeeduino V4 | Grove - 紫外线传感器 | Base Shield |
|--------------|----------------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-UV_Sensor/img/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|
|[立即获取](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即获取](https://www.seeedstudio.com/Grove-UV-Sensor-p-1540.html)|[立即获取](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|

  **连接**

得益于Grove系列模块的优势，您无需进行焊接或使用面包板，只需将模块连接到底板扩展板的正确端口即可。对于此演示，我们只需要一个Grove模块。

- 将Grove UV传感器连接到Grove - 底板扩展板的A0端口。
- 将Grove - 底板扩展板插入Arduino/Seeeduino，并使用USB线将它们连接到PC。
- 演示代码如下所示。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-UV_Sensor/img/connection.jpg" /></div>

  **将代码上传到Arduino并打开串口监视器查看数据**

```
// modified by Victor
// to calculate UV index directly
void setup(){

    Serial.begin(9600);
}

void loop()
{
    int sensorValue;
    long  sum=0;
    for(int i=0;i<1024;i++)// accumulate readings for 1024 times
    {
        sensorValue=analogRead(A0);
        sum=sensorValue+sum;
        delay(2);
    }
    long meanVal = sum/1024;  // get mean value
    Serial.print("The current UV index is:");
    Serial.print((meanVal*1000/4.3-83)/21);// get a detailed calculating expression for UV index in schematic files.
    Serial.print("\n");
    delay(20);

}
```

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-UV_Sensor/res/Grove%20-%20UV%20Sensor%20v1.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

资源
---------

- [Grove - UV传感器 v1.1 PCB和原理图(当前版本) Eagle格式](https://files.seeedstudio.com/wiki/Grove-UV_Sensor/res/Grove%20-%20UV%20Sensor%20v1.1.zip)
- [Grove - UV传感器 v1.1 PCB(当前版本) PDF格式](https://files.seeedstudio.com/wiki/Grove-UV_Sensor/res/Grove%20-%20UV%20Sensor%20v1.1%20brd.pdf)
- [Grove - UV传感器 v1.1 原理图(当前版本) PDF格式](https://files.seeedstudio.com/wiki/Grove-UV_Sensor/res/Grove%20-%20UV%20Sensor%20v1.1sch.pdf)
- [Grove - UV传感器 v1.1 传感器数据手册(当前版本)](https://files.seeedstudio.com/wiki/Grove-UV_Sensor/res/Grove-UV_Sensor_v1.1_Datasheets.zip)
- [美国EPA关于紫外线辐射的建议](https://www.epa.gov/sunsafety/uv-index-scale-1)
- [Grove - UV传感器 v1.0 原理图和数据手册(旧版本)](https://files.seeedstudio.com/wiki/Grove-UV_Sensor/res/Grove-UV_Sensor_v1.0_Datasheets.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_UV_Sensor -->

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

通过SenseCAP [S2110控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)和[S2100数据记录器](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将Grove转换为LoRaWAN®传感器。Seeed不仅帮助您进行原型设计，还为您提供了通过SenseCAP系列坚固的[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

IP66外壳、蓝牙配置、与全球LoRaWAN®网络的兼容性、内置19 Ah电池以及APP的强大支持，使[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device)成为工业应用的最佳选择。该系列包括土壤湿度、空气温湿度、光照强度、CO2、EC传感器以及8合1气象站。为您下一个成功的工业项目尝试最新的SenseCAP S210x。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>