---
title: Grove - 长距离 868MHz
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove_LoRa_Radio/
slug: /cn/Grove_LoRa_Radio
last_update:
  date: 01/06/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/img/cover.jpg)

Grove 是由 Seeed Studio 开发的一个非常强大的平台，用于简化您的物联网项目。我们已经将 grove 连接器集成到 Seeed 生产的大多数板子中，使它们成为一个系统。这次，我们将 Grove 与 LoRa 结合，为您提供一个超长距离无线模块。

Grove - LoRa Radio 433MHz 中的主要功能模块是 RFM98，这是一个收发器，具有 LoRa 长距离调制解调器，提供超长距离扩频通信和高抗干扰性，同时最小化电流消耗。Grove - LoRa Radio 433MHz 的核心是 ATmega168，这是一个广泛使用的芯片，具有非常高的性能和低功耗，特别适合这个 grove 模块。

我们已经集成了一个简单的线天线来接收信号，如果信号太弱无法接收，不用担心，天线旁边的 MHF 连接器用于添加第二个具有 MHF 接口的天线以获得更多信号。

这是 433MHz 版本，可用于 433MHz 通信。您也可以在 Grove - LoRa Radio 868MHz 找到 868MHz 版本。

|版本|发布日期|购买链接|
|--------|-----------|-----------|
|Grove - LoRa Radio 433 MHz |2016年12月10日|[![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Grove-LoRa-Radio-433MHz-p-2777.html)|
|Grove - LoRa Radio 868 MHz |2016年12月10日|[![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Grove-LoRa-Radio-868MHz-p-2776.html)|

## 特性

---

- 使用基于 SX1276 LoRa® 的 RFM95 模块
- 工作电压：5V/3.3V
- ~28mA（平均）@+20dBm 连续发射
- ~8.4mA（平均）@待机模式
- ~20mA（平均）@接收模式，BW-500kHz
- 工作温度：-20 – 70℃
- 接口：Grove - UART（RX，TX，VCC，GND）
- 简单线天线或用于外部高增益天线的 MHF 连接器
- 工作频率：868MHz/433MHz
- +20dBm 100 mW 功率输出能力
- 尺寸：20*40mm
- 速率：0.3kps~50kps
- 即用型 Arduino 库
- 预留 MHF 天线连接器

:::tip
    有关 Grove 模块的更多详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    上述提到的支持平台是/是模块软件或理论兼容性的指示。在大多数情况下，我们只为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

## 硬件概述

---

![](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/img/hardware.png)

1. ATMega168 MCU ([数据手册](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/res/Atmel-2545-8-bit-AVR-Microcontroller-ATmega48-88-168_Datasheet.pdf))
2. MHF 连接器
3. 线缆天线
4. RFM95 模块 ([数据手册](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/res/RFM95_96_97_98_DataSheet.pdf))
5. Grove 接口

|引脚|名称|功能|
|-------|--------|--------|
|1      |TX |UART的TX|
|2      |RX |UART的RX|
|3      |VCC|电源供应，3.3V或5V|
|4      |GND|连接地线|

## 应用场景

---

- 物联网
- 智能家居
- 传感器集线器
- 长距离无线通信

## 入门指南

在本节之后，您只需几个步骤就可以让**Grove - LoRa Radio**运行起来。

### 准备工作

现在我们正在制作一个使用Grove - Lora Radio 433MHz进行P2P（点对点）通信的演示，Grove - LoRa Radio 868MHz的使用方法相同。

:::tip
    Grove - LoRa Radio 433MHz无法与Grove - LoRa Radio 868MHz通信。
:::

|物品|数量|链接|
|----|---|----|
|Seeeduino Lotus|2|[立即购买！](https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html)|
|Grove - LoRa Radio 433MHz|2|[立即购买！](https://www.seeedstudio.com/Grove-LoRa-Radio-433MHz-p-2777.html)|
|Micro USB 线缆|2|[立即购买！](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)|

如果这是您第一次使用[Seeeduino Lotus](https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html)，请参考[Seeeduino Lotus的wiki](https://wiki.seeedstudio.com/cn/Seeeduino_Lotus/)。

Seeeduino Lotus完全兼容Arduino，使用起来就像Arduino一样简单。

如果这是您第一次使用Arduino，请访问[这里](https://arduino.cc)开始您的Arduino之旅。

### 连接硬件

[Seeeduino Lotus](https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html)是Seeeduino和Base Shield的组合。我们可以直接将LoRa Radio模块连接到D5插座，如下图所示。

![enter image description here](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/img/demo.jpg)

### 下载库文件

点击下载库文件并安装（[如何安装Arduino库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library/)）

[![](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/img/library.png)](https://github.com/Seeed-Studio/Grove_LoRa_433MHz_and_915MHz_RF/archive/master.zip)

:::tip
    该库支持AVR/SAMD/STM32F4设备，同时支持硬件和软件串口。
:::
有2种串口。一种是COMSerial，代表通信端口（连接Grove-LoRa Radio）。另一种是ShowSerial，代表串口信息显示端口（连接PC）。

大多数arduino板至少有一个Serial，有些有多个串口（Arduino Mega有4个Serial）。它通过数字引脚0（RX）和1（TX）进行通信，同时通过USB与计算机通信。所以如果您在引脚D0和引脚D1上连接UART设备，您必须在通过USB下载程序之前移除它们。否则会导致上传失败。有时您需要的串口数量超过了可用硬件串口的数量。如果是这种情况，您可以使用软件串口，它使用软件来模拟串口硬件。软件串口需要Arduino控制器的大量帮助来发送和接收数据，所以它不如硬件串口快速或高效。有关串口的更多信息，请参考[Seeed Arduino Serial](https://wiki.seeedstudio.com/cn/Seeed_Arduino_Serial/)。

- **AVR：** 对于下面的示例，我们定义软件串口为SSCOM（连接PC），您需要USB转TTL适配器来连接PC。并非所有数字引脚都可以用于软件串口。您可以参考[Software Serial](https://www.arduino.cc/en/Reference/SoftwareSerial)了解详细引脚。我们定义硬件串口为COMSerial（连接Grove-LoRa Radio）。如果您想使用硬件串口作为COMSerial，软件串口作为ShowSerial，您可以定义为**#define ShowSerial Serial**和**#define COMSerial SSerial**。如果您使用Arduino Mega，您可以将硬件Serial连接到ShowSerial，将其他Serial1/Serial2/Serial3连接到COMSerial。所以您可以参考AVR Mega设置。

- **SAMD：** 对于下面的示例，SAMD不支持软件串口。我们使用硬件串口**Serial1**与Grove-LoRa Radio通信，使用**SerialUSB**在PC上打印消息。

- **STM32F4：** 对于下面的示例，我们使用硬件串口**Serial**与Grove-LoRa Radio通信，使用**SerialUSB**在PC上打印消息。

:::note
    有关串口的更多信息，请参考[Seeed Arduino Serial](https://wiki.seeedstudio.com/cn/Seeed_Arduino_Serial/)。
:::

```
#include <RH_RF95.h>

#################### AVR #######################

#ifdef __AVR__

#include <SoftwareSerial.h>
SoftwareSerial  SSerial(10, 11); // RX, TX

#define COMSerial Serial
#define ShowSerial SSerial 

RH_RF95<HardwareSerial> rf95(COMSerial);

#endif

#################### AVR Mega ###################

#ifdef __AVR__

#define COMSerial Serial1
#define ShowSerial Serial 

RH_RF95<HardwareSerial> rf95(COMSerial);

#endif

#################### SAMD ######################

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE

#define COMSerial Serial1
#define ShowSerial SerialUSB 

RH_RF95<Uart> rf95(COMSerial);

#endif

#################### STM32F4 ###################

#ifdef ARDUINO_ARCH_STM32F4

#define COMSerial Serial
#define ShowSerial SerialUSB 

RH_RF95<HardwareSerial> rf95(COMSerial);

#endif
```

### 打开示例

打开您的Arduino IDE，点击**File > Examples>Grove_LoRa_433MHz_and_915MHz_RF-master**，您将获得该模块的许多示例。

![](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/img/library_2.png)

|节点|示例名称|功能|
|----|------------|--------|
|发送端|rf95_client|每1秒发送"Hello World"|
|接收端|rf95_server|接收数据并打印|

点击 **Tools>Board** 选择 "Seeeduino Lotus" 并选择相应的串口，然后点击上传按钮完成步骤。

:::tip
    如果您使用的是 Grove - LoRa Radio 868MHz 模块，请更改以下代码。
:::

```c
//rf95.setFrequency(434.0);
rf95.setFrequency(868.0);
```

### 查看结果

上传完成后，您可以打开串口监视器查看结果。

![enter image description here](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/img/result.jpg)

### 数据速率

下图显示了波特率、信号带宽、扩频因子和灵敏度之间的关系。

![enter image description here](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/img/DateRate.png)

# 433MHz

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/res/433_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# 868MHz

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/res/868_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

---

- ***原理图***
  - [Grove - LoRa Radio 433MHz v1.0 原理图 (Eagle 文件)](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/res/433_eagle.zip)
  - [Grove - LoRa Radio 433MHz v1.0 原理图 (PDF 文件)](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/res/433_sch.pdf)
  - [Grove - LoRa Radio 868MHz v1.0 原理图 (Eagle 文件)](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/res/868_eagle.zip)
  - [Grove - LoRa Radio 868MHz v1.0 原理图 (PDF 文件)](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/res/868_sch.pdf)

- ***数据手册***
  - [RFM95/96/97 数据手册](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/res/RFM95_96_97_98_DataSheet.pdf)
  - [Atmega168 数据手册](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/res/Atmel-2545-8-bit-AVR-Microcontroller-ATmega48-88-168_Datasheet.pdf)

- ***参考资料***
  - [LoRa Alliance](https://www.lora-alliance.org/)

- ***库文件***
  - [Grove - LoRa Radio 库文件和示例](https://github.com/Seeed-Studio/Grove_LoRa_433MHz_and_915MHz_RF/)
  - [LMIC 库](https://github.com/matthijskooijman/arduino-lmic)

- [***下载以上所有文件***](https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/res/res.zip)

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