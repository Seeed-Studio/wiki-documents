---
description: Grove - 数字PIR传感器
title: Grove - 数字PIR传感器
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Digital-PIR-Sensor
last_update:
  date: 1/6/2023
  author: shuxu hu
---

<!-- 
![](https://files.seeedstudio.com/products/101020793/img/101020793wiki.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/101020793/img/101020793wiki.png" alt="pir" width={600} height="auto" /></p>


PIR传感器是一种用于检测人体运动的红外传感器。这款Grove数字PIR传感器是PIR传感器系列中最便宜的，但是它能够快速响应并从"sig"引脚产生高电平信号。

通过Grove接口，Grove数字PIR传感器易于即插即用。而且它不需要任何Arduino库。

<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/Grove-Digital-PIR-Motion-Sensor-p-4524.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border=0 /></a></p>  -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Digital-PIR-Motion-Sensor-p-4524.html)

## 特性

- 经济实惠：不到3美元
- 直观：检测运动并仅输出"高"和"低"数字信号
- 简单：无需外部arduino库
- 接口：Grove

## 规格参数

|项目|值|
|---|---|
|电压范围|3V–5V|
|检测角度|100度|
|检测距离|3.2m-12m|
|响应时间|< 1s|
|工作温度|-20-85 C|
|接口|Grove|
|尺寸|20mm * 20mm * 11.5mm|
|重量|3g|
|电池|不包含|

## 支持的平台

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

## 开始使用

### Arduino 入门

#### 所需材料

|Seeeduino XIAO|Grove 面包板|Grove 数字 PIR 运动传感器|
|--------|-----------------------|-------------------------------------------------------------|
|<p><img src="https://files.seeedstudio.com/products/102010328/img/seeeduino-XIAO-thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/products/103020232/img/103020232-thumbnail.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/products/101020793/img/101020793wiki210x157.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即购买](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[立即购买](https://www.seeedstudio.com/Grove-Breadboard-p-4034.html)|[立即购买](https://www.seeedstudio.com/Grove-Digital-PIR-Motion-Sensor-p-4524.html)|

#### 硬件连接

<!-- ![](https://files.seeedstudio.com/products/101020793/img/Hardware_Connection.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/101020793/img/Hardware_Connection.jpg" alt="pir" width={600} height="auto" /></p>


面包板上的 Grove 接口和 Grove 数字 PIR 传感器通过 Grove 线缆连接。

#### 软件
- **步骤1** 将下面的代码复制到 Arduino IDE 并上传。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。
```cpp
#define digital_pir_sensor 5 // 连接到引脚 5

void setup()
{
  Serial.begin(9600);  // 设置波特率为 9600
  pinMode(digital_pir_sensor,INPUT); // 设置引脚模式为输入
}

void loop()
{
  bool state = digitalRead(digital_pir_sensor); // 从 PIR 传感器读取
  if (state == 1)
  Serial.println("A Motion has occured");  // 当有响应时
  else
  Serial.println("Nothing Happened");  // 远离 PIR 传感器
}
```
- **步骤2** 打开串口，当您在 PIR 传感器周围运动时，您将看到数值发生变化。

### Raspberry Pi 入门

#### 所需材料

|Raspberry Pi 4B(4GB)|Grove Base Hat for Raspberry Pi|Grove 数字 PIR 运动传感器|
|--------|-----------------------|-------------------------------------------------------------|
|<p><img src="https://files.seeedstudio.com/products/102110301/img/raspberry-pi-thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/products/103030275/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/products/101020793/img/101020793wiki210x157.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-4GB-p-4077.html)|[立即购买](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[立即购买](https://www.seeedstudio.com/Grove-Digital-PIR-Motion-Sensor-p-4524.html)|

#### 硬件连接

<!-- ![](https://files.seeedstudio.com/products/101020793/img/pi_PIR_demo.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/101020793/img/pi_PIR_demo.jpg" alt="pir" width={600} height="auto" /></p>

将 PIR 传感器连接到 Grove Base Hat 上的"D5"。

#### 代码
- **步骤 1** 更新 Raspberry Pi 的系统版本。
```
sudo apt-get update
```
- **步骤 2** 安装 wiringPi。
```
sudo pip install wiringPi
```
如果您使用 Pi 4，请选择 wiringPi 的版本
```
sudo pip install wiringPi==2.52.0
```
- **步骤 3** 获取您连接的正确引脚。
```
gpio readall
```
这里会出现一个表格，在 wiring 定义中找到引脚 5 的引脚定义，在这个演示中，引脚定义是 21。
```
gpio read 21
```
您可以从 PIR 传感器读取数值，当有运动时，数值为"1"，否则数值为"0"。

 

## 原理图在线查看器
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/products/101020793/document/Grove_Digital_PIR_Motion_Sensor_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>




## 资源

- **[PDF]** [BS312 规格书](https://files.seeedstudio.com/products/101020793/document/BS312规格书.pdf)
- **[PDF]** [硬件原理图](https://files.seeedstudio.com/products/101020793/document/Hardware_Schematic_SCH.pdf)

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