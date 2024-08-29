---
title: Grove - 双通道单刀双掷继电器
nointro: Grove - 双通道单刀双掷继电器
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-2-Channel_SPDT_Relay/
slug: /cn/Grove-2-Channel_SPDT_Relay
last_update:
  date: 03/19/2024
  author: WuFeifei
---

![](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/img/mian.jpg)

Grove - 2通道单刀双掷（SPDT）继电器具有两个单刀双掷开关。它只需要低电压和低电流信号来控制这些开关。具体来说，您可以使用5V直流电来控制最大250V交流电或110V直流电。

最好的事情是，您可以分别控制这两个通道。例如，通过SIG1进行控制，您可以根据需要将COM1连接到NC1或NO1。
它非常便捷可靠，可以应用于需要切换高电压/高电流设备的众多产品或项目中。

<p style={{}}><a href="https://www.seeedstudio.com/Grove-2-Channel-SPDT-Relay-p-3118.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特点

- 高温耐用的塑料外壳
- 高电压负载
- 低功耗
- 长寿命

## 规格

|项目|值|
|---|---|
|工作电压|5V|
|额定线圈电流|89.3mA|
|TUV认证负载 |10A 250VAC/  10A 30VDC|
|UL认证负载|10A 125VAC/ 10A 28VDC|
|最大允许电压|250VAC/110VDC|
|功耗| 约0.45W                |
|接触电阻|最大100mΩ|
|绝缘电阻|最小100MΩ (500VDC)|
|最大开关频率|30 次/分钟|
|环境温度|-40°C 至 +85°C|
|工作湿度|45% 至 85%RH|
|触点材料|AgCdO|
|输入接口|数字 SIG1/SIG2|
|输出端口|3针DIP母螺丝端子-绿色|

## 应用领域

- 家用电器
- 办公设备
- 遥控电视接收器
- 显示器
- 音频设备高冲击电流使用应用

## 硬件概述

### **引脚映射**

![](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/img/pin_map.jpg)

### 原理图

![](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/img/schematic.jpg)

**K1** 是继电器模块，在K1的**pin1**和**pin3**之间有一个线圈。默认情况下**，COM1**会连接到**NC1**。如果K1的pin3连接到正极，那么这个线圈就会“闭合”，所以**COM1**会连接到**NO1**。

要使这个线圈闭合，大约需要90mA的电流，然而，通常Arduino的GPIO引脚只能提供20mA的电流（最大40mA）。因此，我们使用了NPN晶体管[S9013](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/res/Transistors_NPN_25V-500mA.pdf)，它可以提供500mA的电流。

**SIG1**通过10k的R2电阻下拉，如果没有信号**，Q1**的“栅极”将为0v，Q1将关闭，这样K1就会“断开”。如果**SIG1**变为5v，那么Q1将开启。K1的**pin3**将连接到系统的GND，对于K1来说**，pin3**和**pin1**之间将有5V的电压，因此线圈将“闭合”，并且**COM1**将连接到**NO1**。

:::提示
    **D3**是一个[续流二极管（回扫二极管）](https://en.wikipedia.org/wiki/Flyback_diode)。续流二极管是连接在电感器两端的二极管，用于消除回扫现象，即当电感负载的供电电流突然减少或中断时，在电感负载两端出现的突然电压尖峰。它在开关控制电感负载的电路以及开关电源和逆变器中得到了应用。
:::

## 支持的平台

| Arduino                                                      | 树莓派                                                       |                                                              |                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::注意
    上述提到的支持平台是模块的软件或理论兼容性的一个标志。在大多数情况下，我们只为Arduino平台提供软件库或代码示例。由于不可能为所有可能的MCU平台提供软件库/演示代码，因此用户需要编写自己的软件库。
:::

## 入门指南

### 玩转 Arduino

#### 硬件

所需材料

| Seeeduino V4.2 | 基础底板 | Grove - 2通道单刀双掷继电器 |Grove-LED x2|
|--------------|-------------|-----------------|--------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/img/thumbnail.jpg)|![](https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/img/Red%20LED.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即获取</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即获取</a>|<a href="https://www.seeedstudio.com/Grove-2-Channel-SPDT-Relay-p-3118.html" target="_blank">立即获取</a>|<a href="https://www.seeedstudio.com/Grove---Red-LED-p-1142.html" target="_blank">立即获取</a>|

:::注意
    **1** 请轻轻地插入USB线，否则可能会损坏端口。请使用内部有4根线的USB线，2根线的USB线无法传输数据。如果您不确定自己手中的线是否合适，可以点击[这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)进行购买。

    **2** 每个Grove模块在购买时都会附带一根Grove电缆。如果您丢失了Grove电缆，可以点击[这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) 进行购买。
:::

- **步骤 1.** 将Grove-LED的**SIG**引脚连接到Grove - 2通道单刀双掷继电器的**COM**端口。将Grove-LED的**GND**引脚连接到基础底板的**GND**。

- **步骤 2.** 将Grove - 2通道单刀双掷继电器的**NO**端口连接到基础底板的**5V**。将Grove - 2通道单刀双掷继电器的**NC**端口连接到基础底板的**GND**。

:::提示
        步骤1和步骤2. 将Grove LED的GND连接到系统的GND，并将SIG连接到继电器的COM端口。如果COM连接到NO(5v)，LED将会亮起；如果COM连接到NC(0V)，LED将会熄灭。在这个教程中，我们使用了两个LED，请确保 LED<sub>1</sub> 对应 Switch<sub>1</sub>,  LED<sub>2</sub> 对应 Switch<sub>2</sub>。
:::

- **步骤 3.** 将 Grove -  2通道单刀双掷继电器连接到基础底板的**D7**端口。

- **步骤 4.** 将 Grove - 基础底板插入Seeeduino。

- **步骤 5.** 通过 USB 线将Seeeduino连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/img/connect.jpg)

#### 软件

:::注意
        如果您是第一次使用Arduino，我们强烈建议您在开始之前查看[Arduino入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 打开Arduino IDE并创建一个新文件，然后将以下代码复制到新文件中。

```cpp
#include <Arduino.h>
uint8_t channel1 = 7;
uint8_t channel2 = 8;
void setup() {
  pinMode(channel1, OUTPUT);
  pinMode(channel2, OUTPUT);
}
void loop() {
  digitalWrite(channel1, HIGH);
  digitalWrite(channel2, LOW);
  delay(2000);
  digitalWrite(channel1, LOW);
  digitalWrite(channel2, HIGH);
  delay(2000);
}
```

- **步骤 2.** 上传示例代码。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/Upload_Code/)。

:::提示
    您会看到板载LED交替亮起和熄灭，与两个Grove LED的状态相同。
:::

![](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/img/test20180821_142634.gif)

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/res/Grove-2-Channel_SPDT_Relay.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]** [Grove-2通道单刀双掷继电器 eagle 文件](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/res/Grove-2-Channel_SPDT_Relay.zip)
- **[PDF]** [SRD 05VDC-SL-C 继电器数据手册](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/res/SRD_05VDC-SL-C.pdf)
- **[PDF]** [ S9013 数据手册](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/res/Transistors_NPN_25V-500mA.pdf)

## 项目

以下是该产品的介绍视频和简单演示，您可以尝试一下。

<iframe width="560" height="315" src="https://www.youtube.com/embed/_8au__eavKk?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## 技术支持与产品讨论

感谢您选择我们的产品！我们在此提供多种支持服务，确保您在使用我们的产品时获得尽可能顺畅的体验。我们提供多个沟通渠道，以满足不同的需求和偏好。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
