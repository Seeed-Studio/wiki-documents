---
description: Grove - 数字红外温度传感器
title: Grove - 数字红外温度传感器
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Digital_Infrared_Temperature_Sensor
last_update:
  date: 1/4/2023
  author: jianjing Huang
---


<table>
  <tbody><tr>
      <td><img src="https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/img/Grove－Digital_Infrared_Temperature_Sensor_1.jpg" /></td>
      <td><img src="https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/img/Grove－Digital_Infrared_Temperature_Sensor_2.jpg" /></td>
    </tr>
  </tbody></table>

数字红外温度传感器是一个基于MLX90615的非接触式温度测量模块。红外敏感热电堆检测器芯片和信号调理芯片都集成在同一个封装中。该模块使用SMBus与Arduino通信，通过通用的2根线可以读取多达127个传感器。得益于该模块的低噪声放大器、16位ADC和强大的DSP单元，它可以在宽温度范围内实现1℃的高精度和0.02℃的高测量分辨率。

<p style={{textAlign: 'center' }}><a href="https://www.seeedstudio.com/Grove-Digital-Infrared-Temperature-Sensor-p-2385.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" /></a></p>

规格参数
-------------

<table border="1" cellspacing="0" width="70%">
<tr>
<th>
项目
</th>
<th>
最小值
</th>
<th>
典型值
</th>
<th>
最大值
</th>
<th>
单位
</th>
</tr>
<tr align="center">
<th scope="row">
电压
</th>
<td>
2.6
</td>
<td>
3
</td>
<td>
5
</td>
<td>
V
</td>
</tr>
<tr align="center">
<th scope="row">
电流
</th>
<td>
</td>
<td>
1.4
</td>
<td>
1.5
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<th scope="row">
环境温度范围
</th>
<td colspan="3">
-40 - 85
</td>
<td>
℃
</td>
</tr>
<tr align="center">
<th scope="row">
物体温度范围
</th>
<td colspan="3">
-40 - 115
</td>
<td>
℃
</td>
</tr>
<tr align="center">
<th scope="row">
尺寸
</th>
<td colspan="3">
 20x40x9.6
</td>
<td>
mm
</td>
</tr>
</table>

支持的平台
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
    上述提到的支持平台是/是该模块软件或理论兼容性的指示。在大多数情况下，我们只为Arduino平台提供软件库或代码示例。不可能为所有可能的MCU平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

硬件概述
------------------

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/img/Grove－Digital_Infrared_Temperature_Sensor_4.jpg" /></div>

| 引脚编号 | 名称 | 类型   | 功能描述                             |
|------------|------|--------|--------------------------------------------------|
| 1          | GND  | -      | 信号地                                    |
| 2          | VCC  | in     | 正电源输入端(3.3V或5V) |
| 3          | SDA  | in/out | I2C数据输入/输出                            |
| 4          | SCL  | in     | I2C时钟                                          |

## 入门指南

### 使用 Arduino

我们在这里提供一个示例，向您展示如何使用此传感器测量传感器前方目标物体的温度，并在串口监视器上打印结果。

:::note
    如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

#### 硬件

**硬件组件：**

| Seeeduino V4.2 | Base Shield|  Grove - 数字红外温度传感器 |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/img/thumbnail.jpg" /></div>|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-Digital-Infrared-Temperature-Sensor-p-2385.html)|

- **步骤 1.** 将 Grove - 数字红外温度传感器插入 Grove-Base Shield 的 D2 端口。
- **步骤 2.** 将 Grove - Base Shield 插入 Seeeduino。
- **步骤 3.** 通过 USB 线将 Seeeduino 连接到 PC。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/img/connection.JPG" /></div>

:::note
 如果我们没有 Grove Base Shield，我们也可以直接将 Grove - 数字红外温度传感器连接到 Arduino，如下所示。
:::

| Seeeduino       | Grove - 数字红外温度传感器 |
|---------------|-------------------------|
| 5V           | 红色                     |
| GND           | 黑色                   |
| D3           | NA                   |
| D2            | 黄色                  |

#### 软件

- **步骤 1.** 下载库文件和示例代码 [Digital_Infrared_Temperature_Sensor_MLX90615](https://github.com/Seeed-Studio/Digital_Infrared_Temperature_Sensor_MLX90615)。
- **步骤 2.** 参考 [如何安装库文件](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库文件。
- **步骤 3.** 通过路径直接打开示例代码：

  **文件 -> 示例 -> Digital_Infrared_Temperature_Sensor_MLX90615 -> MLX90615Soft**。如下图所示：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/img/example.png" /></div>

由于传感器在出厂时已经校准并启用了数字 SMBus 兼容接口，但库文件基于软件 i2c 库，因此您可以使用任何 AVR 芯片上的任何数字引脚来驱动 **SDA** 和 **SCL** 线。在此示例代码中，我们使用 **D2** 作为 **SCL** 引脚，**D3** 作为 **SDA** 引脚。只要您修改代码以匹配相应的引脚，您可以使用其他端口。

- **步骤 4.** 将代码上传到 Arduino。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。
- **步骤 5.** 点击 **工具 -> 串口监视器** 启动串口监视器。您将看到结果。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/img/Digital_Infrared_Temperature_Sensor_Serial_Monitor.jpg" /></div>

现在，您可以使用此传感器测量温度。环境温度是 MLX90615 封装温度，物体温度是目标物体温度。根据我们的实验，当您将传感器放置在正常的室内温度下，并确保传感器前方 1M 范围内没有任何热源时，物体温度将大约等于环境温度。测量物体温度时，您应该确保物体尽可能靠近传感器，但不要接触传感器表面，我们建议距离小于 3cm。祝您使用愉快。

:::tip
有关 Grove 模块的更多详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/res/Grove_Digital_Infrared_Temperature_Sensor_v1.0_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

资源
--------

- **[Zip]** [Grove 数字红外温度传感器 v1.0 eagle 文件.zip](https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/res/Grove_Digital_Infrared_Temperature_Sensor_v1.0_eagle_file.zip)
- **[PDF]** [MLX90615.pdf](https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/res/MLX90615.pdf "File:MLX90615.pdf")
- **[Code]** [示例代码](https://github.com/Seeed-Studio/Digital_Infrared_Temperature_Sensor_MLX90615)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Digital_Infrared_Temperature_Sensor -->

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

通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)和 [S2100 数据记录器](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 转换为 LoRaWAN® 传感器。Seeed 不仅帮助您进行原型设计，还为您提供了使用 SenseCAP 系列坚固[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

IP66 外壳、蓝牙配置、与全球 LoRaWAN® 网络的兼容性、内置 19 Ah 电池以及来自 APP 的强大支持使 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) 成为工业应用的最佳选择。该系列包括土壤湿度、空气温湿度、光照强度、CO2、EC 传感器以及 8 合 1 气象站。为您下一个成功的工业项目尝试最新的 SenseCAP S210x。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>