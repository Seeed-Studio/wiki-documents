---
description: Grove - 振动传感器(SW-420)
title: Grove - 振动传感器(SW-420)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Vibration_Sensor_SW-420
last_update:
  date: 1/7/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Vibration_Sensor-SW-420/img/main.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Vibration_Sensor-SW-420/img/main.jpg" alt="pir" width={600} height="auto" /></p>

Grove - 振动传感器 (SW-420) 是一个高灵敏度的无方向性振动传感器。当模块处于稳定状态时，电路导通，输出为高电平。当发生移动或振动时，电路会短暂断开并输出低电平。同时，您还可以根据自己的需要调节灵敏度。

总而言之，这是一个完美的振动或倾斜传感器模块。


<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Vibration-Sensor-%28SW-420%29-p-3158.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Vibration-Sensor-%28SW-420%29-p-3158.html)

## 版本

| 产品版本  | 变更                                                                                               | 发布日期 |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - 振动传感器 (SW-420) | 初始版本                                                                                               | 2018年9月      |

## 特性

- 无方向性
- 高灵敏度
- 响应振动、倾斜
- 防水 
- 抗压


## 规格参数

|项目|数值|
|---|---|
|工作电压|3.3V / 5V|
|接口|数字|
|尺寸|长: 40mm 宽: 20mm 高: 10mm| 
|重量|4.3g|
|包装尺寸|长: 140mm 宽: 85mm 高: 10mm|
|毛重|10g|


## 应用

- 汽车、自行车、摩托车防盗报警器
- 游戏控制
- 振动检测

## 硬件概述

### 引脚图

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Vibration_Sensor-SW-420/img/pin_map.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Vibration_Sensor-SW-420/img/pin_map.jpg" alt="pir" width={600} height="auto" /></p>


### 原理图

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Vibration_Sensor-SW-420/img/Schematic.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Vibration_Sensor-SW-420/img/Schematic.jpg" alt="pir" width={600} height="auto" /></p>


首先，让我们从左下角的 **SW1** 开始。实际上，**SW1** 就是振动模块 **SW-420**。当模块处于稳定状态时，模块导通。**U1A** 的 **Pin2** 通过 **SW1** 连接到 **GND**。

**VR1** 是电位器，电位器的 **Pin2** 连接到 **U1A** 的 **Pin3**

**U1A** 是一个[比较器](https://en.wikipedia.org/wiki/Comparator)。对于比较器，输出行为遵循以下逻辑：

<div style={{textAlign: 'center', padding: '15px', backgroundColor: 'var(--ifm-color-emphasis-100)', border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '5px', margin: '20px 0'}}>
<strong>V<sub>out</sub> = 高电平 当 V<sub>+</sub> > V<sub>-</sub></strong><br/>
<strong>V<sub>out</sub> = 低电平 当 V<sub>+</sub> < V<sub>-</sub></strong>
</div>

**V+** 连接到 **Pin3**，**V-** 连接到 **Pin2**，**V<sub>out</sub>** 连接到 **Pin1**。

对于 **V+**，您可以通过旋转电位器来调节它，例如，我们可以将其设置为 VCC/2。

对于 **V-**，它取决于 **SW1(SW-420)**：

- 如果此模块处于稳定状态，**SW1** 导通，**U1A** 的 Pin2 通过 **SW1** 连接到 **GND**。此时：

<div style={{textAlign: 'center', padding: '15px', backgroundColor: 'var(--ifm-color-emphasis-100)', border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '5px', margin: '15px 0'}}>
<strong>V<sub>-</sub> = 0V</strong><br/>
<strong>V<sub>+</sub> = VCC/2</strong><br/>
<strong>因此: V<sub>out</sub> = 高电平</strong>
</div>

- 如果模块振动或倾斜，**SW1** 将断开，**V-** 的电压将通过 R1 被 **VCC** 拉高。一旦 **V-** 高于 VCC/2，那么：

<div style={{textAlign: 'center', padding: '15px', backgroundColor: 'var(--ifm-color-emphasis-100)', border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '5px', margin: '15px 0'}}>
<strong>V<sub>-</sub> > VCC/2</strong><br/>
<strong>V<sub>+</sub> = VCC/2</strong><br/>
<strong>因此: V<sub>out</sub> = 低电平</strong>
</div>

现在您可以设置 **V+** 来调节灵敏度，只需记住：**V+** 的电压越低，灵敏度越高😆

## 支持的平台


<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg)  | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|
:::caution
    上面提到的支持平台表示该模块的软件或理论兼容性。我们在大多数情况下只为Arduino平台提供软件库或代码示例。不可能为所有可能的MCU平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::


## 入门指南


### 与Arduino一起使用


#### 硬件

**所需材料**

| Seeeduino V4.2 | Base Shield | Grove - 振动传感器|Grove - 蜂鸣器|
|--------------|-------------|-----------------|----|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Vibration_Sensor-SW-420/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Buzzer/img/buzzer_s.jpg" alt="pir" width={600} height="auto" /></p>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Grove-Vibration-Sensor-%28SW-420%29-p-3158.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Grove-Buzzer-p-768.html" target="_blank">立即购买</a>|


:::note
    **1** 请轻轻插入USB线，否则可能会损坏端口。请使用内部有4根线的USB线，2根线的线缆无法传输数据。如果您不确定您的线缆，可以点击[这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)购买
    
    **2** 每个Grove模块在购买时都会附带一根Grove线缆。如果您丢失了Grove线缆，可以点击[这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)购买。
:::


- **步骤1.** 将Grove - 振动传感器 (SW-420) 连接到Base Shield的**D2**端口。

- **步骤2.** 将Grove - 蜂鸣器连接到Base Shield的**D3**端口。

- **步骤3.** 将Grove - Base Shield插入Seeeduino。

- **步骤4.** 通过USB线将Seeeduino连接到PC。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Vibration_Sensor-SW-420/img/connect.JPG) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Vibration_Sensor-SW-420/img/connect.JPG" alt="pir" width={600} height="auto" /></p>

:::note
        如果我们没有Grove Base Shield，我们也可以直接将此模块连接到Seeeduino，如下所示。
:::


| Seeeduino     |  Grove - 振动传感器         |
|---------------|-------------------------|
| 5V            | 红色                     |
| GND           | 黑色                   |
| NC           | 白色                    |
| D2           | 黄色                   |



| Seeeduino     |  Grove - 蜂鸣器         |
|---------------|-------------------------|
| 5V            | 红色                     |
| GND           | 黑色                   |
| NC           | 白色                    |
| D3           | 黄色                   |


#### 软件

:::note
        如果这是您第一次使用Arduino，我们强烈建议您在开始之前先查看[Arduino入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤1.** 打开您的Arduino IDE，开始一个新的草图。

- **步骤2.** 复制下面的所有代码，或者您可以点击代码块右上角的图标 ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) 将以下代码复制到新草图中。

```cpp
// constants won't change. They're used here to set pin numbers:
const int buttonPin = 2;     // the number of the pushbutton pin
const int buzzer =  3;      // the number of the buzzer pin

// variables will change:
int buttonState = 0;         // variable for reading the pushbutton status

void setup() {
  // initialize the LED pin as an output:
  pinMode(buzzer, OUTPUT);
  // initialize the pushbutton pin as an input:
  pinMode(buttonPin, INPUT);
}

void loop() {
  // read the state of the pushbutton value:
  buttonState = digitalRead(buttonPin);

  // check if the pushbutton is pressed. If it is, the buttonState is HIGH:
  if (buttonState == HIGH) {
    // turn LED on:
    digitalWrite(buzzer, LOW);
  } else {
    // turn LED off:
    digitalWrite(buzzer, HIGH);
  }
}
```

- **步骤 3.** 上传演示程序。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

:::success
    如果一切顺利，每次您移动、摇晃或倾斜Grove - 振动传感器时，Grove - 蜂鸣器都会响起。
:::
### 使用 Codecraft

#### 硬件

**步骤 1.** 将Grove - 振动传感器连接到底板的 D2 端口，将Grove - 蜂鸣器连接到底板的 D3 端口。

**步骤 2.** 将底板插入您的 Seeeduino/Arduino。

**步骤 3.** 通过 USB 线将 Seeeduino/Arduino 连接到您的电脑。

#### 软件

**步骤 1.** 打开[Codecraft](https://ide.chmakered.com/)，添加 Arduino 支持，并将主程序拖到工作区域。

:::note
    如果这是您第一次使用 Codecraft，请参阅[使用 Arduino 的 Codecraft 指南](https://wiki.seeedstudio.com/cn/Guide_for_Codecraft_using_Arduino/)。
:::
**步骤 2.** 按照下图拖拽代码块，或打开可在本页面末尾下载的 cdc 文件。

<!-- ![cc](https://files.seeedstudio.com/wiki/Grove-Vibration_Sensor-SW-420/img/cc_Vibration_Sensor.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Vibration_Sensor-SW-420/img/cc_Vibration_Sensor.png" alt="pir" width={600} height="auto" /></p>

将程序上传到您的 Arduino/Seeeduino。

:::success
    代码上传完成后，当振动传感器检测到振动时，蜂鸣器会发出蜂鸣声。
:::

## 原理图在线查看器


<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Vibration_Sensor-SW-420/res/Grove%20-%20Vibration%20Sensor%20(SW-420)%20v1.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>




## 资源

- **[Zip]** [Grove - 振动传感器 (SW-420) eagle 文件](https://files.seeedstudio.com/wiki/Grove-Vibration_Sensor-SW-420/res/Grove%20-%20Vibration%20Sensor%20(SW-420)%20v1.1.zip)
- **[Codecraft]** [CDC 文件](https://files.seeedstudio.com/wiki/Grove-Vibration_Sensor-SW-420/res/Grove_Vibration_Sensor_CDC_File.zip)

## 项目

这是本产品的介绍视频，包含简单的演示，您可以尝试一下。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/oFmvKxoZIuw?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>



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