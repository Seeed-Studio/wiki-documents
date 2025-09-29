---
description: Grove - Arduino V1.0 浊度传感器仪表
title: Grove - Arduino V1.0 浊度传感器仪表
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Turbidity-Sensor-Meter-for-Arduino-V1.0
last_update:
  date: 1/6/2023
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/img/Grove-Turbidity-Sensor-wiki.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/img/Grove-Turbidity-Sensor-wiki.jpg" alt="pir" width={600} height="auto" /></p>

Grove 浊度传感器可以测量水的浊度（悬浮颗粒的数量）。

 
该模块的光学传感器可以通过光电晶体管和二极管之间波长的折射来测量浑浊水的密度和外来物质的浓度。通过使用光电晶体管和光电二极管，光学传感器测量从光源到光接收器的光量，以计算水的浊度。

 
输出模式可以通过调节板上的开关来选择。支持模拟和数字输出。灵敏度可以通过板载旋钮进行调节。


<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Turbidity-Sensor-p-4399.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Turbidity-Sensor-p-4399.html)

## 特性

 - 低功耗
 - 小尺寸：2.0cm x 4.0cm Grove 模块
 - 仅需3个引脚，节省I/O资源
 - 易于使用：Grove 连接器，即插即用
 - 输出模式可选，支持模拟输出和数字输出


:::tip

    有关 Grove 模块的更多详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::



## 规格参数

|参数|值/范围|
|---|---|
| 工作电压 |	3.3V/5V DC |
| 输出接口  | 模拟 / 数字 |
| 连接器 | 1个 Grove / 1个电源接口 |
| 尺寸   | 20*40mm |


## 典型应用

- 测量洗碗机等洗涤设备的水污染程度，以确定最佳洗涤时间和漂洗次数。
- 工业现场控制。
- 环境废水处理。


## 硬件概述


<!-- ![](https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/img/Grove-Turbidity-Sensor-pin.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/img/Grove-Turbidity-Sensor-pin.jpg" alt="pir" width={600} height="auto" /></p>
- **数字到模拟开关**

  - "D" 是数字输出，高低电平的阈值可以通过板载旋钮调节。
  - "A" 是模拟输出，输出值会随着液体浊度的增加而减少。




## 支持的平台


| Arduino| Raspberry Pi| BeagleBone| Wio| LinkIt ONE|
|--------|-------------|-----------|----|-----------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" alt="pir" width={200} height="auto" /></p> |


:::caution  

    上述提到的支持平台是/是该模块软件或理论兼容性的指示。在大多数情况下，我们只为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

## 开始使用


### 与 Arduino 一起使用


:::note

    如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::



**所需材料**


| Seeeduino V4.2 | Grove - 浊度传感器 | Base Shield |
|--------------|----------------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/img/Grove-Turbidity-Sensor.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Grove-Turbidity-Sensor-p-4399.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|


:::note


	**1** 请轻柔地插入 USB 线缆，否则可能会损坏端口。请使用内部有 4 根线的 USB 线缆，2 根线的线缆无法传输数据。如果您不确定您的线缆规格，可以点击 [这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) 购买。
    
	**2** 每个 Grove 模块在购买时都会附带一根 Grove 线缆。如果您丢失了 Grove 线缆，可以点击 [这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) 购买。
:::

#### 模拟输出


##### 硬件连接


- **步骤 1.** 传感器上的开关选择 **A**。

- **步骤 1.** 将 Grove - 浊度传感器连接到 Grove-Base Shield 的 **A0** 端口。

- **步骤 2.** 将 Grove - Base Shield 插入 Seeeduino。

- **步骤 3.** 通过 USB 线缆将 Seeeduino 连接到 PC。


<!-- ![](https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/img/connect.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/img/connect.jpg" alt="pir" width={600} height="auto" /></p>

:::note   
     
    如果我们没有 Grove Base Shield，我们也可以按照下面的方式直接将 Grove - 浊度传感器连接到 Seeeduino。
:::




| Seeeduino     | Grove - 浊度传感器|
|---------------|-------------------------|
| 5V            | 红色                     |
| GND           | 黑色                   |
| 不连接 | 白色                   |
| A0            | 黄色                  |



##### 软件


- **步骤 1.** 将下面的代码复制到 Arduino IDE 中并上传。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。


```c
void setup() {

  Serial.begin(9600); //Baud rate: 9600
}

void loop() {
  int sensorValue = analogRead(A0);// read the input on analog pin 0:
  float voltage = sensorValue * (5.0 / 1024.0); // Convert the analog reading (which goes from 0 - 1023) to a voltage (0 - 5V):
  Serial.println(voltage); // print out the value you read:
  delay(500);
}

```


- **步骤 2.** 通过点击 **工具-> 串口监视器** 或同时按下 **Ctrl+Shift+M** 键打开 Arduino IDE 的 **串口监视器**。将波特率设置为 **9600**。


<!-- ![](https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/img/result.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/img/result.png" alt="pir" width={600} height="auto" /></p>

- **步骤 3.**  现在您可以使用这个传感器了，输出将如下所示：


<!-- ![](https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/img/serial-port.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/img/serial-port.png" alt="pir" width={600} height="auto" /></p>

#### 数字输出


##### 硬件连接


- **步骤 1.** 传感器上的开关选择 **D**。

- **步骤 1.** 将 Grove - 浊度传感器连接到 Grove-Base Shield 的 **D2** 端口。

- **步骤 2.** 将 Grove - Base Shield 插入 Seeeduino。

- **步骤 3.** 通过 USB 线缆将 Seeeduino 连接到 PC。




:::note   
     
    如果我们没有 Grove Base Shield，我们也可以按照下面的方式直接将 Grove - 浊度传感器连接到 Seeeduino。
:::




| Seeeduino     | Grove - 浊度传感器|
|---------------|-------------------------|
| 5V            | 红色                     |
| GND           | 黑色                   |
| 不连接 | 白色                   |
| D2            | 黄色                  |



##### 软件


- **步骤 1.** 将下面的代码复制到 Arduino IDE 中并上传。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。


```c
int ledPin = 3;               
int sensor_in = 2;                 // Turbidity sensor on Digital Pin 2

void setup(){
  Serial.begin(9600);
  pinMode(ledPin, OUTPUT);      // Set ledPin as output mode
  pinMode(sensor_in, INPUT);       //Set Turbidity sensor pin to input mode
}

void loop(){
   int sensorValue = digitalRead(sensor_in);
   Serial.println(sensorValue);
   if(sensorValue==HIGH){       //Read sensor signal 
        digitalWrite(ledPin, HIGH);   // if sensor is LOW, then turn on
     }else{
        digitalWrite(ledPin, LOW);    // if sensor is HIGH, then turn off the led
     }
    delay(500);
}
```


- **步骤 2.** 我们使用数字输出，通过调节电位器来提高或降低触发阈值，使 LED 开启和关闭。

## 原理图在线查看器


<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/res/Grove-Turbidity-Sensor-v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241,241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}} />



## 资源


- **[ZIP]** [原理图](https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/res/Grove-Turbidity-Sensor-v1.0.zip)

- **[PDF]** [LMV358 数据手册](https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/res/LMV358-Datasheet.pdf)

- **[PDF]** [MPX5700AP 数据手册](https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/res/Turbidity-Sensor-Datasheet.pdf)





## 技术支持与产品讨论





## 可升级为工业级传感器
通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)和 [S2100 数据记录器](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 转换为 LoRaWAN® 传感器。Seeed 不仅帮助您进行原型设计，还为您提供了使用 SenseCAP 系列坚固的[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

IP66 外壳、蓝牙配置、与全球 LoRaWAN® 网络的兼容性、内置 19 Ah 电池以及 APP 的强大支持，使 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) 成为工业应用的最佳选择。该系列包括土壤湿度、空气温湿度、光照强度、CO2、EC 传感器以及 8 合 1 气象站。为您下一个成功的工业项目尝试最新的 SenseCAP S210x。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>