---
description: Grove - 电容式湿度传感器（防腐蚀）
title: Grove - 电容式湿度传感器（防腐蚀）
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Capacitive_Moisture_Sensor-Corrosion-Resistant
last_update:
  date: 1/9/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Capacitive_Moisture_Sensor_Corrosion_Resistant/img/main.jpg" /></div>

Grove - 电容式湿度传感器（防腐蚀）是一款基于电容变化的土壤湿度传感器。与电阻式传感器相比，电容式传感器不需要直接暴露金属电极，这可以显著减少电极的腐蚀。因此，我们称其为**防腐蚀**。

需要注意的是，该传感器只能定性测试土壤的湿度，无法进行定量测量。这意味着当土壤湿度上升时，输出值会下降；相反，当湿度下降时，输出值会变高。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Capacitive-Moisture-Sensor-Corrosion-Resistant-p-2580.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 可升级为工业传感器

通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)和 [S2100 数据记录器](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 转换为 LoRaWAN® 传感器。Seeed 不仅帮助您进行原型设计，还为您提供了通过 SenseCAP 系列坚固的[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

SenseCAP S210x 系列工业传感器为环境感知提供开箱即用的体验。请参考性能更高、鲁棒性更强的 S2105 无线土壤湿度、温度和 EC 传感器，用于土壤状况监测。该系列包括土壤湿度、空气温度和湿度、光照强度、CO2、EC 和 8 合 1 气象站传感器。试试最新的 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device)，助力您下一个成功的工业项目。

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td align="center"><font size={4}><strong>SenseCAP 工业传感器</strong></font></td>
    </tr>
    <tr>
      <td>
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank">
            <img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S2105-.png" />
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank">
          <strong>S2105 土壤湿度 &amp; 温度 &amp; EC</strong>
        </a>
      </td>
    </tr>
  </tbody>
</table>

## 版本

| 产品版本  | 变更                                                                                               | 发布日期 |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - 电容式湿度传感器（防腐蚀）  | 初始版本                                                                                               | 2018年9月      |

## 特性

- 电容式
- 防腐蚀
- 内置放大器

## 规格参数

|项目|数值|
|---|---|
|工作电压|3.3V / 5V|
|输出接口|模拟|
|长度|92.1mm|
|宽度|23.5mm|
|高度|6.5mm|
|尺寸|长: 40mm 宽: 20mm 高: 13mm|
|重量|10.6g|
|包装尺寸|长: 150mm 宽: 100mm 高: 15mm|
|毛重|19g|

## 典型应用

- 土壤湿度检测
- 植物自动浇水

## 硬件概述

### 引脚定义

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Capacitive_Moisture_Sensor_Corrosion_Resistant/img/pin_out.jpg" /></div>

:::caution
插入土壤的传感器部分不能超过最高位置线。
:::

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上述提到的支持平台表示该模块的硬件或理论兼容性。在大多数情况下，我们只为Arduino平台提供软件库或代码示例。我们无法为所有可能的MCU平台提供软件库/演示代码。因此，用户必须编写自己的软件库。不支持意味着现在不被支持，将来可能支持也可能不支持。
:::

## 开始使用

### 与Arduino一起使用

#### 硬件

**所需材料**

| Seeeduino V4.2 | Base Shield | Grove - 电容式土壤湿度传感器  |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Capacitive_Moisture_Sensor_Corrosion_Resistant/img/thumbnail.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Grove-Capacitive-Moisture-Sensor-Corrosion-Resistant-p-2850.html" target="_blank">立即购买</a>|

:::note
**1** 请轻柔地插入USB线缆，否则可能会损坏端口。请使用内部有4根线的USB线缆，2根线的线缆无法传输数据。如果您不确定您的线缆规格，可以点击[这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)购买

**2** 每个Grove模块在购买时都会附带一根Grove线缆。如果您丢失了Grove线缆，可以点击[这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)购买。
:::

:::note
**1**. 如果您使用Arduino UNO作为主板，建议使用直流电源供电。否则，VCC的最大纹波可能超过100mV。如果您使用Seeeduino V4.2作为主板，则无需连接直流电源。

**2**. 不支持热插拔。
:::

- **步骤1.** 将Grove - 电容式土壤湿度传感器连接到Grove-Base Shield的**A0**端口。

- **步骤2.** 将Grove - Base Shield插入Seeeduino。

- **步骤3.** 将Grove - 电容式土壤湿度传感器插入待测试的土壤中。

:::caution
插入土壤的传感器部分不能超过这条白线。
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Capacitive_Moisture_Sensor_Corrosion_Resistant/img/line.jpg" /></div>

- **步骤4.** 通过USB线缆将Seeeduino连接到PC。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Capacitive_Moisture_Sensor_Corrosion_Resistant/img/connect.jpg" /></div>

:::note
    如果我们没有Grove Base Shield，我们也可以按照以下方式直接将此模块连接到Seeeduino。
:::

| Seeeduino      |  Grove线缆       | Grove - 电容式土壤湿度传感器 |
|--------------- |--------------------|-----|
| GND            | 黑色              | GND |
| 5V或3.3V     | 红色                | VCC |
|无连接           | 白色              |NC |
|A0           | 黄色             | SIG|

#### 软件

:::caution
如果这是您第一次使用Arduino，我们强烈建议您在开始之前查看[Arduino入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

**步骤1.** 复制下面的代码，并将其下载到您的arduino中。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

```cpp
/*
  AnalogReadSerial

  Reads an analog input on pin 0, prints the result to the Serial Monitor.
  Graphical representation is available using Serial Plotter (Tools > Serial Plotter menu).
  Attach the center pin of a potentiometer to pin A0, and the outside pins to +5V and ground.

  This example code is in the public domain.

  https://arduino.cc/en/Tutorial/AnalogReadSerial
*/

// the setup routine runs once when you press reset:
void setup() {
  // initialize serial communication at 9600 bits per second:
  Serial.begin(9600);
}

// the loop routine runs over and over again forever:
void loop() {
  // read the input on analog pin 0:
  int sensorValue = analogRead(A0);
  // print out the value you read:
  Serial.println(sensorValue);
  delay(100);        // delay in between reads for stability
}
```

- **步骤2.** 通过点击**工具-> 串口监视器**打开Arduino IDE的**串口监视器**。或者同时按下++ctrl+shift+m++键。将波特率设置为**9600**。

:::tip
如果一切正常，当您打开串口监视器时，可能会显示如下内容：
:::

```cpp
678
663
631
615
615
624
616
618
620
616
614
614
610
614
614
616
615
612
605
```

:::caution
由于元件的个体差异，不同模块在相同环境下的测量值可能会有所不同。
:::

## 与树莓派一起使用

如果您想将此模块与树莓派一起使用，您可能需要使用以下任一扩展板：

- [4通道16位ADC，适用于树莓派(ADS1115)](https://www.seeedstudio.com/4-Channel-16-Bit-ADC-for-Raspberry-Pi-ADS1115.html)
- [8通道12位ADC，适用于树莓派(STM32F030)](https://www.seeedstudio.com/8-Channel-12-Bit-ADC-for-Raspberry-Pi(STM32F030).html)
- [Grove基础扩展板，适用于树莓派](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)
- [Grove基础扩展板，适用于树莓派Zero](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-Zero-p-3187.html)

您可以在这些扩展板的wiki中找到演示代码。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Capacitive_Moisture_Sensor_Corrosion_Resistant/res/Grove-Capacitive%20Moisture%20Sensor%20(Corrosion%20Resistant).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]** [Grove - 电容式土壤湿度传感器（防腐蚀）Eagle文件](https://files.seeedstudio.com/wiki/Grove-Capacitive_Moisture_Sensor_Corrosion_Resistant/res/Grove-Capacitive%20Moisture%20Sensor%20(Corrosion%20Resistant).zip)

- **[PDF]** [NE555DR Datasheet](https://files.seeedstudio.com/wiki/Grove-Capacitive_Moisture_Sensor_Corrosion_Resistant/res/NE555DR.pdf)

- **[PDF]** [PDF Format Wiki](https://files.seeedstudio.com/wiki/Grove-Capacitive_Moisture_Sensor_Corrosion_Resistant/res/soil_sensor.pdf)

## 技术支持与产品讨论


感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>