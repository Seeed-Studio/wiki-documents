---
title: Grove - 2通道 SPDT 继电器
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-2-Channel_SPDT_Relay/
slug: /cn/Grove-2-Channel_SPDT_Relay
last_update:
  date: 01/09/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/img/mian.jpg)

Grove - 2通道 SPDT 继电器具有两个单刀双掷（SPDT）开关。它仅需要低电压和低电流信号即可控制这些开关。具体来说，您可以使用5V DC来控制最高250V AC或110V DC。

最棒的是，您可以分别控制两个通道。例如，通过SIG1控制，您可以根据需要将COM1连接到NC1或NO1。它非常方便且可靠，可以应用于需要切换高电压/高电流设备的大量产品或项目中。

<p style={{}}><a href="https://www.seeedstudio.com/Grove-2-Channel-SPDT-Relay-p-3118.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特性

- 耐高温塑料外壳
- 高电压负载
- 低功耗
- 持久耐用

## 规格

|项目|值|
|---|---|
|工作电压|5V|
|额定线圈电流|89.3mA|
|TUV认证负载|10A 250VAC/ 10A 30VDC|
|UL认证负载|10A 125VAC/ 10A 28VDC|
|最大允许电压|250VAC/110VDC|
|功耗|约0.45W|
|接触电阻|最大100mΩ|
|绝缘电阻|最小100MΩ (500VDC)|
|最大开关次数|30次操作/分钟|
|环境温度|-40°C 至 +85°C|
|工作湿度|45% 至 85%RH|
|接触材料|AgCdO|
|输入接口|数字 SIG1/SIG2|
|输出端口|3针DIP母头螺丝端子-绿色|

## 应用

- 家用电器
- 办公设备
- 遥控电视接收器
- 显示器
- 音频设备高冲击电流应用

## 硬件概述

### 引脚图

![](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/img/pin_map.jpg)

### 原理图

![](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/img/schematic.jpg)

**K1** 是继电器模块，K1的**引脚1**和**引脚3**之间有一个线圈。默认情况下，**COM1** 将连接到 **NC1**。如果K1的引脚3连接到地，则该线圈将“闭合”，因此**COM1**将连接到**NO1**。

要打开该线圈，需要约90mA。然而，通常Arduino的GPIO引脚只能提供20mA（最大40mA）。因此，我们使用了一个NPN晶体管 [S9013](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/res/Transistors_NPN_25V-500mA.pdf)，它可以提供500mA。

**SIG1** 通过10k电阻R2下拉，如果没有信号，**Q1** 的“栅极”将为0V，Q1将关闭，因此K1将“打开”。如果**SIG1**变为5V，则Q1将打开。
K1的**引脚3**将连接到系统的地，对于K1来说，**引脚3**和**引脚1**之间将有5V，因此线圈将“闭合”，**COM1**将连接到**NO1**。

:::tip
**D3** 是一个[续流二极管（回馈二极管）](https://en.wikipedia.org/wiki/Flyback_diode)。续流二极管是连接在电感器两端的二极管，用于消除回馈电压，即当电感负载的供电电流突然减少或中断时出现的电压尖峰。它用于控制电感负载的开关电路，以及开关电源和逆变器中。
:::

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg)  |

:::caution
    上述提到的支持平台仅表示模块的软件或理论兼容性。我们通常仅为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库或演示代码。因此，用户需要自行编写软件库。
:::

## 入门指南

### 使用 Arduino

#### 硬件

**所需材料**

| Seeeduino V4.2 | Base Shield| Grove - 2-Channel SPDT Relay |Grove-LED x2|
|--------------|-------------|-----------------|--------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/img/thumbnail.jpg)|![](https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/img/Red%20LED.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Grove-2-Channel-SPDT-Relay-p-3118.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Grove---Red-LED-p-1142.html" target="_blank">立即购买</a>|

:::note
    **1** 请轻轻插入 USB 数据线，否则可能会损坏接口。请使用内部有 4 根线的 USB 数据线，只有 2 根线的 USB 数据线无法传输数据。如果您不确定手头的数据线是否符合要求，可以点击 [这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) 购买。

    **2** 每个 Grove 模块在购买时都会附带一根 Grove 数据线。如果您丢失了 Grove 数据线，可以点击 [这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) 购买。
:::

- **步骤 1.** 将 Grove-LED 的 **SIG** 引脚连接到 Grove - 2-Channel SPDT Relay 的 **COM** 端口。将 Grove-LED 的 **GND** 引脚连接到 Base Shield 的 **GND**。

- **步骤 2.** 将 Grove - 2-Channel SPDT Relay 的 **NO** 端口连接到 Base Shield 的 **5V**，将 **NC** 端口连接到 Base Shield 的 **GND**。

:::tip
        步骤 1 和步骤 2：将 Grove LED 的 GND 连接到系统 GND，将 SIG 连接到继电器的 COM 端口。如果 COM 连接到 NO（5V），LED 将点亮；如果 COM 连接到 NC（0V），LED 将熄灭。在本教程中我们使用了两个 LED，请确保 LED<sub>1</sub> 对应 Switch<sub>1</sub>，LED<sub>2</sub> 对应 Switch<sub>2</sub>。
:::

- **步骤 3.** 将 Grove - 2-Channel SPDT Relay 连接到 Base Shield 的 **D7** 端口。

- **步骤 4.** 将 Grove - Base Shield 插入 Seeeduino。

- **步骤 5.** 使用 USB 数据线将 Seeeduino 连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/img/connect.jpg)

#### 软件

:::note
        如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 打开 Arduino IDE 并创建一个新文件，然后将以下代码复制到新文件中。

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

- **步骤 2.** 上传示例代码。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

:::tip
    您将看到板载 LED 交替点亮和熄灭，与两个 Grove - LED 的状态相同。
:::

![](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/img/test20180821_142634.gif)

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/res/Grove-2-Channel_SPDT_Relay.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]** [Grove-2-Channel SPDT Relay Eagle 文件](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/res/Grove-2-Channel_SPDT_Relay.zip)
- **[PDF]** [SRD 05VDC-SL-C 继电器数据手册](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/res/SRD_05VDC-SL-C.pdf)
- **[PDF]** [S9013 数据手册](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/res/Transistors_NPN_25V-500mA.pdf)

## 项目

这是该产品的介绍视频，包含简单的演示，您可以尝试观看。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/_8au__eavKk?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>