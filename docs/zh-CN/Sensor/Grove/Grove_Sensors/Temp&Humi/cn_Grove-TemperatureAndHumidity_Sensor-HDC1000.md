---
description: Grove - 温湿度传感器 (HDC1000)
title: Grove - 温湿度传感器 (HDC1000)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-TemperatureAndHumidity_Sensor-HDC1000
last_update:
  date: 1/3/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/img/main.jpg" /></div>

Grove - 温湿度传感器 (HDC1000) 采用了 HDC1000 传感器。HDC1000 是由德州仪器设计的。它是一款集成温度传感器的数字湿度传感器，在极低功耗下提供出色的测量精度。该器件基于新颖的电容式传感器来测量湿度。湿度和温度传感器均经过工厂校准。创新的 WLCSP（晶圆级芯片尺寸封装）通过使用超紧凑封装简化了电路板设计。HDC1000 的传感元件位于器件底部，这使得 HDC1000 对污垢、灰尘和其他环境污染物更加坚固耐用。HDC1000 在 -40°C 至 +125°C 的完整温度范围和 0-100% RH 范围内均可正常工作。

<p style={{textAlign: 'center' }}><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-HDC100-p-2535.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特性

- Grove 连接器兼容
- IIC 接口
- 低功耗
- 宽工作电压范围
- I2C 串行总线地址配置

:::tip
有关 Grove 模块的更多详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

## 规格参数

<table border="1" cellspacing="0" width="800">
<tr>
<th scope="col">
项目
</th>
<th scope="col">
最小值
</th>
<th scope="col">
典型值
</th>
<th scope="col">
最大值
</th>
<th scope="col">
单位
</th>
</tr>
<tr align="center">
<th scope="row">
供电电压
</th>
<td>
3
</td>
<td>
/
</td>
<td>
5
</td>
<td>
VDC
</td>
</tr>
<tr align="center">
<th scope="row">
工作电流
</th>
<td>
0.12
</td>
<td>
/
</td>
<td>
90
</td>
<td>
uA
</td>
</tr>
<tr align="center">
<th scope="row">
相对湿度精度（典型值）
</th>
<td>
/
</td>
<td>
±3
</td>
<td>
</td>
<td>
 %RH
</td>
</tr>
<tr align="center">
<th scope="row">
相对湿度工作范围（典型值）
</th>
<td>
0
</td>
<td>
/
</td>
<td>
100
</td>
<td>
 %RH
</td>
</tr>
<tr align="center">
<th scope="row">
温度精度
</th>
<td>
/
</td>
<td>
±0.2
</td>
<td>
/
</td>
<td>
℃
</td>
</tr>
<tr align="center">
<th scope="row">
温度范围
</th>
<td>
-40
</td>
<td>
/
</td>
<td>
125
</td>
<td>
℃
</td>
</tr>
<tr align="center">
<th scope="row">
工作温度范围
</th>
<td>
-20
</td>
<td>
/
</td>
<td>
85
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
40*20
</td>
<td>
mm
</td>
</tr>
</table>

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上述提到的支持平台是/是该模块软件或理论兼容性的指示。在大多数情况下，我们只为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

## 硬件概述

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/img/Grove-TemperatureAndHumidity_Sensor-HDC1000-p3.jpg" /></div>

1. Grove 连接器。
2. Ready：准备转换。
3. 默认地址：0x40。
4. ADDR0, ADDR1：I2C 串行总线地址配置（0x40,0x41,0x42,0x43）

## 入门指南

### 与 Arduino 一起使用

以下是如何将 Grove - 温湿度传感器（HDC1000）与 Seeeduino v4.2 一起使用。

#### 所需材料

| Seeeduino V4.2 | Base Shield| Grove - 温湿度传感器（HDC1000） |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/img/thumbnail.jpg" /></div>|
|[立即获取](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即获取](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即获取](https://www.seeedstudio.com/Grove-TemperatureHumidity-Sensor-HDC1000-p-2535.html?cPath=25_125)|

:::note
**1** 请轻轻插入 USB 线缆，否则可能会损坏端口。请使用内部有 4 根线的 USB 线缆，2 根线的线缆无法传输数据。如果您不确定您的线缆，可以点击[这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)购买

**2** 每个 Grove 模块在购买时都会附带一根 Grove 线缆。如果您丢失了 Grove 线缆，可以点击[这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)购买
:::

#### 硬件

- **步骤 1.** 将 Grove - 温湿度传感器（HDC1000）连接到 Grove-Base Shield 的 **I2C** 端口。

- **步骤 2.** 将 Grove - Base Shield 插入 Seeeduino。

- **步骤 3.** 通过 USB 线缆将 Seeeduino 连接到 PC。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/img/connect_arduino.jpg" /></div>

:::note
 如果我们没有 Grove Base Shield，我们也可以直接将 Grove - 温湿度传感器（HDC1000）连接到 Seeeduino，如下所示。
:::

| Seeeduino       | Grove - 温湿度传感器（HDC1000） |
|---------------|-------------------------|
| 5V            | 红色                     |
| GND           | 黑色                   |
| SDA           | 白色                   |
| SCL           | 黄色                  |

#### 软件

- **步骤 1.** 从 Github 下载 [Seeed DHT 库](https://github.com/Seeed-Studio/HDC1000)。

- **步骤 2.** 参考[如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library)为 Arduino 安装库。

- **步骤 3.** 重启 Arduino IDE。打开一个新的草图，并将以下代码复制到新草图中。

```cpp
/*
 * HDC1000.h
 * A library for HDC1000 1.0
 *
 * Copyright (c) 2015 seeed technology inc.
 * Author     : Pillar Zuo (baozhu.zuo@seeed.cc)
 * Create Time: April 2015
 * Change Log :
 *
 * The MIT License (MIT)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

#include <Wire.h>
#include <HDC1000.h>
 
HDC1000 mySensor;
//HDC1000 mySensor(0x41, 2) <-- DRDYn 启用并连接到 Arduino 引脚 2（允许更快的测量）。
 
void setup(){
 Serial.begin(9600);
 mySensor.begin();
}
 
void loop(){
 Serial.print("Temperature: ");
 Serial.print(mySensor.getTemp()); 
 Serial.print("C, Humidity: ");     
 Serial.print(mySensor.getHumi());
 Serial.println("%");
 delay(1000);
}


```

- **步骤 4.** 上传演示程序。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

- **步骤 5.** 通过点击 **Tool-> Serial Monitor** 打开 Arduino IDE 的**串口监视器**。或者同时按下 ++ctrl+shift+m++ 键。将波特率设置为 **9600**。如果一切正常，您将得到结果。

结果应该如下所示：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/img/result.png" /></div>

:::tip
        结果可能需要一段时间才能变得稳定。
:::

### 与 Raspberry Pi 一起使用

#### 硬件

**所需材料**

| Raspberry pi | GrovePi_Plus | 温湿度传感器 Pro |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/img/thumbnail.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html" target="_blank">立即获取</a>|<a href="https://www.seeedstudio.com/GrovePi%2B-p-2241.html" target="_blank">立即获取</a>|<a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-HDC100-p-2535.html" target="_blank">立即获取</a>|

- **步骤 1.** 将 GrovePi_Plus 插入树莓派。

- **步骤 2.** 将此传感器连接到 GrovePi_Plus 的 **I2C** 端口。

- **步骤 3.** 通过 USB 线缆将树莓派连接到 PC。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/img/pi_connect.jpg" /></div>

#### 软件

- **步骤 1.** 按照 [设置软件](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) 配置开发环境。

- **步骤 2.** 按照 [更新固件](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/) 更新 GrovePi 的最新固件。

:::tip
在本教程中，我们使用路径 **~/GrovePi/** 而不是 **/home/pi/Desktop/GrovePi**，您需要确保步骤 2 和步骤 3 使用相同的路径。
:::

:::note
我们强烈建议您更新固件，否则某些传感器可能会出现错误。
:::

:::caution
如果您使用的是 **Raspberry Pi with Raspberrypi OS >= Bullseye**，您必须**仅使用 Python3** 运行此命令行。
:::

- **步骤 3.** Git 克隆 Github 仓库。

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **步骤 4.** 执行以下命令获取数值。

```
cd ~/GrovePi/Software/Python/grove_i2c_temp_hum_hdc1000
sudo python3 grove_hdc_1000_example.py
```

结果应该如下所示：

```python

pi@raspberrypi:~/GrovePi/Software/Python/grove_i2c_temp_hum_hdc1000$ sudo python3 grove_hdc_1000_example.py 
Temp    : 27.94 C
Humidity: 79.61 %
-----------------
Temp    : 29.23 C
Humidity: 79.61 %
-----------------
Temp    : 29.23 C
Humidity: 79.61 %
-----------------
Temp    : 29.23 C
Humidity: 79.21 %
-----------------
Temp    : 29.23 C
Humidity: 78.82 %
-----------------
Temp    : 29.23 C
Humidity: 78.82 %
-----------------
Temp    : 29.23 C
Humidity: 78.43 %
-----------------
Temp    : 29.23 C
Humidity: 78.04 %
-----------------
Temp    : 29.23 C
Humidity: 77.65 %
-----------------
Temp    : 29.23 C
Humidity: 77.65 %
-----------------

```

如果您想查看代码，可以使用以下命令：

```
sudo nano grove_hdc_1000_example.py

```

### 与 Launchpad 配合使用

#### 所需材料

- TI MSP430FR4133 LaunchPad\] × 1
- USB 线缆（A 型转 mini B 型）× 1
- [Grove - 4 针母头跳线转 Grove 4 针转换线缆](https://www.seeedstudio.com/depot/Grove-4-pin-Female-Jumper-to-Grove-4-pin-Conversion-Cable-5-PCs-per-PAck-p-1020.html) × 1
- [Grove - 温湿度传感器 (HDC1000)](https://www.seeedstudio.com/depot/Grove-TemperatureHumidity-Sensor-HDC1000-p-2535.html?cPath=25_125) × 1

#### 硬件连接

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/img/Grove-TemperatureAndHumidity_Sensor-HDC1000-demo_connections-with_launchpad-2400_s.JPG" /></div>

#### 下载代码并烧录到 Launchpad

1. 下载 [演示代码](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/res/HDC1000-HDC1000_energia.zip)。

  <div className="admonition note">
  <p className="admonition-title">注意</p>
  您必须将文件 <span style={{fontStyle: 'italic'}}>readTempHumi.ino</span>（位于 <span style={{fontStyle: 'italic'}}>examples</span> 文件夹中）复制到与 <span style={{fontStyle: 'italic'}}>HDC1000.h</span> 相同的文件夹中。
</div>

2. 将代码烧录到 Launchpad。

3. 打开*串口监视器*（**工具**->**串口监视器**）查看检测到的数据。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/img/Grove-TemperatureAndHumidity_Sensor-HDC1000-demo_result-with_launchpad-600.png" /></div>

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/res/Grove-TemperatureAndHumidity_Sensor-HDC1000-v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]** [Grove - Temperature&Humidity Sensor(HDC1000) v1.0 sch pcb.zip](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/res/Grove-TemperatureAndHumidity_Sensor-HDC1000-v1.0_sch_pcb.zip)
- **[Pdf]** [Grove - Temperature&Humidity Sensor(HDC1000) v1.0 sch.pdf](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/res/Grove-TemperatureAndHumidity_Sensor-HDC1000-v1.0_sch.pdf)
- **[Library]** [演示代码](https://github.com/Seeed-Studio/HDC1000)
- **[Datasheet]** [HDC1000_DataSheet.pdf](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/res/HDC1000.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Temperature&Humidity_Sensor_(HDC1000) -->

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