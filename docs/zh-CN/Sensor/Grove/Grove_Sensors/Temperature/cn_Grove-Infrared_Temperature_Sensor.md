---
description: Grove - 红外温度传感器
title: Grove - 红外温度传感器
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Infrared_Temperature_Sensor
last_update:
  date: 1/4/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/img/main.jpg" /></div>

红外温度传感器是一种非接触式温度测量模块。它由116个串联的热电偶元件组成，位于一个浮动微膜上，传感器的黑色表面能够很好地吸收入射的热红外辐射，从而在输出端产生电压响应。该传感器根据目标温度输出模拟电压（0~1.1V）。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Infrared-Temperature-Sensor-p-1058.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border="0" /></a></p>

## 版本

产品版本 | 变更 | 发布日期
--|--|--
Grove - 红外温度传感器 v1.0 | 初始版本 | 2015年12月11日
Grove - 红外温度传感器 v1.1 | 优化布局  | 2016年7月24日
Grove - 红外温度传感器 v1.2 | 更换电源芯片以使电源更稳定  | 2018年2月10日

## 规格参数

- 电压：3-5V
- 测量电流消耗：160-200 uA
- 测量范围：-10~100°C
- 保持时间：2S
- 工作温度：-10~80 °C
- 存储温度：-35-80 °C

:::tip
    有关Grove模块的更多详细信息，请参考[Grove系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上述提到的支持平台是/是该模块软件或理论兼容性的指示。在大多数情况下，我们只为Arduino平台提供软件库或代码示例。不可能为所有可能的MCU平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

## 入门指南

### 使用 Arduino

以下示例演示了一个简单的应用，用于测量传感器周围的环境温度和传感器前方目标物体的温度。并在串口监视器上打印结果。

:::note
如果这是您第一次使用 Arduino，我们强烈建议您在开始之前先查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 准备以下材料：

| Seeeduino V4.2 | Base Shield| Grove - 红外温度传感器 |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/img/JUH4jM8D85pxTHah3QXYxhe7.jpg" /></div>|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-Infrared-Temperature-Sensor-p-1058.html)|

- **步骤 2.** 将 Grove - 红外温度传感器连接到 Grove-Base Shield 的 **A0** 端口。

- **步骤 3.** 将 Grove - Base Shield 插入 Seeeduino。

- **步骤 4.** 通过 USB 线将 Seeeduino 连接到 PC。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/img/connect.jpg" /></div>

:::note
 如果我们没有 Grove Base Shield，我们也可以直接将 Grove - 温湿度传感器 Pro 连接到 Seeeduino，如下所示。
:::

| Seeeduino       | Grove - 红外温度传感器 |
|---------------|-------------------------|
| 5V           | 红色                     |
| GND           | 黑色                   |
| A1            | 白色                   |
| A0            | 黄色                  |

#### 软件

- **步骤 1.** 下载 [示例代码](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/res/MeasureTemperature.zip)，然后双击打开示例。

在测量温度之前，您需要进行简单的设置。在测试前按照以下说明操作，您将获得准确的结果。

- **步骤 2.** 调节传感器电压

上传示例程序后，让传感器在正常环境中放置超过 5 分钟，使传感器温度与周围温度相同。然后打开串口监视器检查传感器输出的电压。理想情况下，当环境温度等于传感器温度时，红外传感器 (TP-538U) 输出为 0V。我们应该通过硬件调节参考电压，偏移量为 0.5V。如下所示，传感器电压为 0.014V，我们只需要在程序中将 offset_vol 值更改为您从串口监视器获得的 0.014。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/img/Infrared_Temperature_Sensor_code2.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/img/Serialmonitor.jpg" /></div>

- **步骤 3.** 调节传感器检测距离

根据我们的实验，传感器的标称测量距离是 9CM，但我们不能确保所有传感器都具有相同的特性。因此，如果您想要准确的结果，您需要使用冰水混合物来调节测量 0℃，并使用沸水来调节 100℃。之后，您可以获得传感器的有效距离。

具体的测量方法是在一个具有平坦表面的深色容器中装满冰和水。等待容器降到 0℃，保持传感器与物体之间 9CM 的距离，前后移动传感器并检查结果，如果输出为 0℃，记下距离值。用同样的方法检查沸水。当您获得一对数值时，进行平均计算。您现在可以在刚刚获得的额定距离内开始测量。

现在我们可以测量传感器周围的环境温度。传感器应用在标称距离内，您可以在其他距离尝试，但距离-温度图表无论是传感器制造商还是我们都没有获得，您可以按照上述两个说明绘制它。我们在示例代码中保留了变量 **"temperature_range"**。我们假设目标距离是 3 cm，您测量的系数可能是 5 左右。希望您尝试愉快。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/img/Infrared_Temperature_Sensor_Code_1.jpg" /></div>

:::note
**1**. 示例代码不支持 Atmega168。

**2**. 为了获得准确的测量，距离(D)和目标直径(S)的比率 D:S 必须小于 0.5。
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/img/Dsdiagram.jpg" /></div>

- **步骤 4.** 上传示例。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

- **步骤 5.** 通过点击 **工具-> 串口监视器** 打开 Arduino IDE 的 **串口监视器**。或者同时按 ++ctrl+shift+m++ 键。如果一切正常，您将获得温度。

结果应该如下所示：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/img/result_arduino.png" /></div>

# Grove-红外温度传感器 V1.0

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/res/Infrared_Temperature_Sensor_V1.0_egale_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Grove-红外温度传感器 V1.2

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/res/Grove-Infrared_Temperature_Sensor_v1.2.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]** [Grove-红外温度传感器 V1.2 Eagle 文件](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/res/Grove-Infrared_Temperature_Sensor_v1.2.zip)
- **[Zip]** [Grove-红外温度传感器 V1.0 Eagle 文件](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/res/Infrared_Temperature_Sensor_V1.0_egale_file.zip)
- **[Zip]** [OTP-538U 数据手册](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/res/OTP-538Udatasheet.zip)
- **[Zip]** [演示代码](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/res/MeasureTemperature.zip)
- **[Zip]** [红外温度演示代码（带串行LCD）](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/res/Infrared_temperature_demo_code_with_serialLCD.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Infrared_Temperature_Sensor -->

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

通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)和 [S2100 数据记录器](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 转换为 LoRaWAN® 传感器。Seeed 不仅帮助您进行原型设计，还为您提供了通过 SenseCAP 系列坚固的[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

IP66 外壳、蓝牙配置、与全球 LoRaWAN® 网络的兼容性、内置 19 Ah 电池以及来自 APP 的强大支持，使 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) 成为工业应用的最佳选择。该系列包括土壤湿度、空气温湿度、光照强度、CO2、EC 传感器以及 8 合 1 气象站。为您下一个成功的工业项目尝试最新的 SenseCAP S210x。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>