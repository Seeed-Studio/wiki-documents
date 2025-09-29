---
description: Grove - 温湿度传感器（高精度迷你版）v1.0
title: Grove - 温湿度传感器（高精度迷你版）v1.0
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0
last_update:
  date: 1/3/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/img/main.jpg" /></div>

这是一个多功能传感器，可以同时为您提供温度和相对湿度信息。它采用TH02传感器，能够满足一般用途的测量需求。当环境湿度条件在0-80% RH之间，温度条件在0-70°C之间时，它能提供可靠的读数，涵盖了大多数家庭和日常应用中不包含极端条件的需求。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-(High-Accuracy-%26-Mini)-p-1921.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border="0" /></a></p>

## 可升级为工业传感器

通过SenseCAP [S2110控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)和[S2100数据记录器](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将Grove转换为LoRaWAN®传感器。Seeed不仅帮助您进行原型设计，还为您提供了通过SenseCAP系列坚固的[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

SenseCAP S210x系列工业传感器为环境感知提供开箱即用的体验。请参考具有更高性能和稳定性的S2101无线温湿度传感器，用于空气质量监测。该系列包括土壤湿度、空气温湿度、光照强度、CO2、EC传感器以及8合1气象站。请尝试最新的[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device)，助力您下一个成功的工业项目。

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td align="center"><font size={4}><strong>SenseCAP工业传感器</strong></font></td>
    </tr>
    <tr>
      <td>
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank">
            <img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S21012103.png" />
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101空气温湿度传感器</strong></a></td>
    </tr>
  </tbody></table>

规格参数
--------------

- 宽工作电压范围
  - (3.3V ~ 5V)
- 低功耗
  - RH转换期间350 µA
- 0到100% RH工作范围
- 测量范围：
  - 湿度：0% - 80% RH
  - 温度：0 ~ 70 °C
- 精度：
  - 湿度：±4.5% RH
  - 温度：±0.5°C
- I2C主机接口
- 出色的长期稳定性

:::tip
更多关于Grove模块的详细信息，请参考[Grove系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上述支持的平台表示该模块的软件或理论兼容性。在大多数情况下，我们只为Arduino平台提供软件库或代码示例。我们无法为所有可能的MCU平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

## 应用

- 工业暖通空调/制冷
- 恒温器/恒湿器
- 微环境/数据中心

## 入门指南

:::note
如果这是您第一次使用Arduino，我们强烈建议您在开始之前先查看[Arduino入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

### 与Arduino一起使用

#### 硬件

- **步骤1.** 准备以下物品：

| Seeeduino V4.2 | Base Shield| 温湿度传感器 |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/img/Thumbnail.jpg" /></div>|
|[立即获取](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即获取](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即获取](https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-(High-Accuracy-%26-Mini)-p-1921.html)|

- **步骤2.** 将Grove - 温湿度传感器（高精度&迷你）v1.0连接到Grove-Base Shield的**I2C**端口。

- **步骤3.** 将Grove - Base Shield插入Seeeduino。

- **步骤4.** 通过USB线将Seeeduino连接到PC。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/img/arduino_connect.jpg" /></div>

:::note
 如果我们没有Grove Base Shield，我们也可以直接将Grove - 温湿度传感器Pro连接到Seeeduino，如下所示。
:::

| Seeeduino       | 温湿度传感器 |
|---------------|-------------------------|
| 5V           | 红色                     |
| GND           | 黑色                   |
| SDA           | 白色                   |
| SCL            | 黄色                  |

#### 软件

- **步骤1.** 从Github下载[Grove 温湿度TH02库](https://github.com/Seeed-Studio/Grove_Temper_Humidity_TH02)。

- **步骤2.** 参考[如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library)来为Arduino安装库。

- **步骤3.** 重启Arduino IDE。通过路径打开"TH02_demo"示例：**文件 --> 示例 --> Grove Temper Humidity_TH02 --> TH02_demo**。通过这个演示，我们可以读取环境的温度和相对湿度信息。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/img/path.png" /></div>

这个演示将向您展示如何从这个Grove - 温湿度传感器（高精度&迷你）传感器读取温度和湿度信息。

- **步骤4.** 上传演示代码。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

- **步骤5.** 通过点击**工具-> 串口监视器**打开Arduino IDE的**串口监视器**。或者同时按下++ctrl+shift+m++键。如果一切正常，您将获得温度数据。

结果应该如下所示：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/img/result_arduino.png" /></div>

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/res/Grove-TemperatureAndHumidity_Sensor-High-Accuracy_And_Mini-V1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]** [Grove - 温湿度传感器（高精度迷你版）V1.0 原理图 PCB](https://files.seeedstudio.com/wiki/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/res/Grove-TemperatureAndHumidity_Sensor-High-Accuracy_And_Mini-V1.0_sch_pcb.zip)
- **[PDF]** [TH02_SENSOR.pdf](https://files.seeedstudio.com/wiki/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/res/TH02_SENSOR.pdf)
- **[库文件]** [Grove_Temper_Humidity_TH02 库](https://github.com/Seeed-Studio/Grove_Temper_Humidity_TH02)

## 项目

**Smart Mali**：室内园艺智能花盆！*（想知道Mali是什么意思吗？）*

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/alpha007/smartmali-1fbdda/embed' width='350'></iframe>

**冷链运输监控与追踪**：基于物联网的解决方案，使温度敏感易腐产品的配送更加高效，减少浪费。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/musketeers/cold-transport-chain-monitoring-and-tracking-48b2c5/embed' width='350'></iframe>

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