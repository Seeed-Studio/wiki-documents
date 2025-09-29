---
title: Grove - NFC
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove_NFC/
slug: /cn/Grove_NFC
last_update:
  date: 01/06/2022
  author: gunengyu
---

<table>
  <tbody><tr>
      <td>
        <img src="https://files.seeedstudio.com/wiki/Grove-NFC/img/Grove-NFC_01.jpg" />
      </td>
      <td>
        <img src="https://files.seeedstudio.com/wiki/Grove-NFC/img/Grove-NFC_02.jpg" />
      </td>
    </tr>
  </tbody></table>

近场通信（NFC）是一套短距离无线技术。它是门禁系统和移动支付系统等日常应用的基础技术。
Grove NFC 采用高度集成的收发器模块 PN532，可处理 13.56MHz 的非接触式通信。您可以使用此模块读写 13.56MHz 标签，或实现两个 NFC 之间的点对点数据交换。Grove NFC 设计为使用 I2C 或 UART 通信协议，UART 是默认模式。此外，我们配备了独立的 PCB 天线，可以轻松延伸到您使用的任何外壳之外，为您设计项目外观留出更多空间。

<p style={{}}><a href="https://www.seeedstudio.com/Grove-NFC-p-1804.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 版本

|版本|日期|变更|
|--|--|--|
|Grove NFC V1.0|2015年12月11日|初始版本|
|Grove NFC V1.1|2016年8月31日|在 PCB 背面添加 TP2/TP3 焊盘，用于切换 I2C 和 UART|

## 规格参数

- 工作电压：3.3V
- 工作电流：
  - 静态模式：73mA
  - 写入/读取模式：83mA
- 支持主机接口：I2C、UART（默认）
- 用于 13.56MHz 非接触式通信
- 支持 ISO14443 Type A 和 Type B 协议
- 检测 NFC 标签的最大操作距离为 28mm（取决于当前天线尺寸）
- 尺寸：25.43mm x 20.35mm

:::tip
有关 Grove 模块的更多详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
上述提到的支持平台表示该模块的软件或理论兼容性。在大多数情况下，我们只为 Arduino 平台提供软件库或代码示例。我们无法为所有可能的 MCU 平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

## 硬件概述

### Grove NFC v1.0

![](https://files.seeedstudio.com/wiki/Grove-NFC/img/NFC_cutAndsolder.jpg)  

默认设置是UART，如果您需要将其更改为I2C，那么您应该首先进行一些焊接。

切断以下连接：

- TP1 到 UART
- TP2 到 RX
- TP3 到 TX

焊接以下连接：

- TP1 到 I2C
- TP2 到 SCL
- TP3 到 SDA

### Grove NFC v1.1

默认设置是UART，如果您需要将其更改为I2C，那么您应该切断UART连接，然后按如下所示焊接I2C引脚。

![](https://files.seeedstudio.com/wiki/Grove-NFC/img/v1.1%20hardware%20connection.png)

## 入门指南

:::note
如果这是您第一次使用Arduino，我们强烈建议您在开始之前查看[Arduino入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

Grove - NFC支持I2C和UART，[Seeed Arduino NFC库](https://github.com/Seeed-Studio/Seeed_Arduino_NFC)支持Arduino Uno/Seeeduino v4.2、Arduino Mega/Seeeduino Mega、Arduino Zero/Seeeduino Lorawan和Arduino Leonardo/Seeeduino Lite。

### 与Seeeduino Lite一起使用

#### 硬件

**所需材料**

| Seeeduino Lite | Base Shield| Grove - NFC |  NFC标签|
|--------------|-------------|-----------------|---|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/lite.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-NFC/img/thumbnail.jpg)|![](https://files.seeedstudio.com/wiki/Grove-NFC/img/NFC-for-Marketing-Header.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-Lite-p-1487.html" target="_blank">立即获取</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即获取</a>|<a href="https://www.seeedstudio.com/Grove-NFC-p-1804.html" target="_blank">立即获取</a>|请自行准备|

- **步骤1.** 将Grove - NFC连接到Grove-Base Shield的**UART**端口。

- **步骤2.** 将Grove - Base Shield插入Seeeduino Lite。

- **步骤3.** 通过USB线将Seeeduino Lite连接到PC

#### 软件

- **步骤1.**  下载[Seeed Arduino NFC库](https://github.com/Seeed-Studio/Seeed_Arduino_NFC)。

- **步骤2.**  参考[如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library)为Arduino安装**Seeed Arduino NFC**库。

- **步骤3.**  通过路径打开"WriteTag"代码：**文件 --> 示例 --> WriteTag**。

- **步骤4.**  修改代码如下以启用SPI通信。

:::tip
xiao可能存在引脚兼容性问题。
:::

```cpp
#if 0
    #include <SPI.h>
    #include <PN532/PN532_SPI/PN532_SPI.h>


    PN532_SPI pn532spi(SPI, 10);
    NfcAdapter nfc = NfcAdapter(pn532spi);
#else

    #include <Wire.h>
    #include <PN532/PN532_I2C/PN532_I2C.h>


    PN532_I2C pn532_i2c(Wire);
    NfcAdapter nfc = NfcAdapter(pn532_i2c);
#endif
```

- **步骤5.** 上传代码。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

- **步骤6.** 通过点击**工具-> 串口监视器**打开Arduino IDE的**串口监视器**。或者同时按下ctrl+shift+m键。设置波特率为**9600**。

- **步骤7.** 使用Grove - NFC靠近NFC标签。如果一切正常，您将在串口监视器中获得NFC标签信息。

:::warning
如果您想连接到Arduino Mega UART端口，您可以将PN532_HSU pn532hsu(Serial1)更改为PN532_HSU pn532hsu(SerialX)。X代表您使用的arduino mega串口端口。如果您想将Grove-NFC传感器连接到Arduino Uno，您可以使用软件串口。请按照以下方式配置[软件串口](https://www.arduino.cc/en/Reference/softwareSerial)。
:::

```cpp
#if 0 // use SPI
#include <SPI.h>
#include <PN532/PN532_SPI/PN532_SPI.h>
PN532_SPI pn532spi(SPI, 9);
NfcAdapter nfc = NfcAdapter(pn532spi);
#elif 0 // use hardware serial

#include <PN532/PN532_HSU/PN532_HSU.h>
PN532_HSU pn532hsu(Serial1);
NfcAdapter nfc(pn532hsu);
#elif 1  // use software serial

#include <PN532/PN532_SWHSU/PN532_SWHSU.h>
#include "SoftwareSerial.h"
SoftwareSerial SWSerial(2, 3);
PN532_SWHSU pn532swhsu(SWSerial);
NfcAdapter nfc(pn532swhsu);
#else //use I2C

#include <Wire.h>
#include <PN532/PN532_I2C/PN532_I2C.h>

PN532_I2C pn532_i2c(Wire);
NfcAdapter nfc = NfcAdapter(pn532_i2c);
#endif
``` 
 
### 与Seeedunio V4.2一起使用

### 硬件

**所需材料**

| Seeeduino V4.2 | Base Shield| Grove - NFC |  NFC标签|
|--------------|-------------|-----------------|---|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-NFC/img/thumbnail.jpg)|![](https://files.seeedstudio.com/wiki/Grove-NFC/img/NFC-for-Marketing-Header.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即获取</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即获取</a>|<a href="https://www.seeedstudio.com/Grove-NFC-p-1804.html" target="_blank">立即获取</a>|请自行准备|

:::note
**1.** 请选择13.5MHZ、ISO14443 NFC标签，否则Grove - NFC模块可能无法读取标签。

**2.** 请轻轻插入USB线，否则可能会损坏端口。请使用内部有4根线的USB线，2根线的线缆无法传输数据。如果您不确定您拥有的线缆，可以点击[这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)购买

**3.** 每个Grove模块在购买时都配有一根Grove线缆。如果您丢失了Grove线缆，可以点击[这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)购买。

**4.** 对于此演示，您可以在没有底板的情况下工作，因为Seeeduino V4.2有一个板载Grove I2C连接器。
:::

- **步骤 1.** 将 Grove - NFC 连接到 Grove-Base Shield 的 **I2C** 端口。请确保您按照硬件概述将默认的 UART 设置更改为 I2C。

- **步骤 2.** 将 Grove - Base Shield 插入 Seeeduino V4.2。

- **步骤 3.** 通过 USB 线将 Seeeduino V4.2 连接到 PC


#### 软件

- **步骤 1.**  下载 [Seeed Arduino NFC Library](https://github.com/Seeed-Studio/Seeed_Arduino_NFC)。

- **步骤 2.**  参考 [如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装 **Seeed Arduino NFC** 库。

- **步骤 3.**  通过路径打开 "WriteTag" 代码：**File --> Examples --> WriteTag**。

- **步骤 4.**  修改代码如下以启用 I2C 通信。

```cpp
#if 0
    #include <SPI.h>
    #include <PN532/PN532_SPI/PN532_SPI.h>


    PN532_SPI pn532spi(SPI, 10);
    NfcAdapter nfc = NfcAdapter(pn532spi);
#else

    #include <Wire.h>
    #include <PN532/PN532_I2C/PN532_I2C.h>


    PN532_I2C pn532_i2c(Wire);
    NfcAdapter nfc = NfcAdapter(pn532_i2c);
#endif
```

- **步骤 5.** 上传代码。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

- **步骤 6.** 通过点击 **Tool-> Serial Monitor** 打开 Arduino IDE 的 **串口监视器**。或者同时按下 ++ctrl+shift+m++ 键。设置波特率为 **9600**

- **步骤 7.** 使用 Grove - NFC 靠近 NFC 标签。如果一切正常，您将在串口监视器中获得 NFC 标签信息。

# Grove - NFC v1.0

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-NFC/res/Grove-NFC.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Grove - NFC v1.1

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-NFC/res/Grove-NFC_v1.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]** [Grove - NFC v1.0 EAGLE（原理图和板文件）文件](https://files.seeedstudio.com/wiki/Grove-NFC/res/Grove-NFC.zip)
- **[Zip]** [Grove - NFC v1.1 EAGLE（原理图和板文件）文件](https://files.seeedstudio.com/wiki/Grove-NFC/res/Grove-NFC_v1.1.zip)
- **[PDF]** [PN532 数据手册 PDF](https://files.seeedstudio.com/wiki/Grove-NFC/res/PN532.pdf)
- **[Library]** [Seeed Arduino NFC Library](https://github.com/Seeed-Studio/Seeed_Arduino_NFC)

## 项目

**Particle Photon + Grove NFC + Grove LCD 通过 I2C** 使用 Particle Photon 读取 NFC 卡的 UID 并在 LCD 上显示，全部通过 I2C。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/peacemoon/particle-photon-grove-nfc-grove-lcd-via-i2c-7e7d36/embed' width='350'></iframe>

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_NFC -->

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