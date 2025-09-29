---
title: Wio Extension RTC (实时时钟)
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Wio-Extension-RTC/
slug: /cn/Wio-Extension-RTC
last_update:
  date: 01/11/2022
  author: gunengyu
---

![](https://www.seeedstudio.site/media/catalog/product/cache/ef3164306500b1080e8560b2e8b5cc0f/p/r/preview_4_2.png)

Wio Extension - RTC 是 Wio LTE 的扩展板，它可以通过 I2C 端口提供实时时钟功能。该板基于 NXP PCF8523 芯片，可以提供年、月、日、星期、小时、分钟和秒信息。
  
该板通过 Micro-USB 端口供电，通过 I2C 端口与 Wio LTE 通信，我们还提供了一个 USB 电源输出，可以通过板载开关关闭/打开，这样您就可以使用 Wio Extension - RTC 板为 Wio LTE 供电。当为 Wio 板供电时（如下图所示），整个系统的待机电流小于 1 uA。

<p style={{}}><a href="https://www.seeedstudio.com/Wio-Extension-RTC-p-4002.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特性  

- 可扩展性
- 能够为 Wio 板提供 3.3V 电压

## 硬件概述

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Wio_Extension-RTC/img/pinout.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wio_Extension-RTC/img/pinout.jpg" /></a></p>
  </figure></div>

![](https://files.seeedstudio.com/wiki/Wio_Extension-RTC/img/rtc_diagram.png)

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## 开始使用

### 与 Arduino 一起使用

**所需材料**

| Wio LTE 开发板 |   Wio-Extension-RTC  |  Grove - 蜂鸣器 |Grove - 红色 LED |
|--------------|-------------|-----------------|---------|
|![enter image description here](https://www.seeedstudio.site/media/catalog/product/cache/ef3164306500b1080e8560b2e8b5cc0f/h/t/httpsstatics3.seeedstudio.comseeedfile2018-06bazaar837387_img_0005a.jpg)|![enter image description here](https://www.seeedstudio.site/media/catalog/product/cache/ef3164306500b1080e8560b2e8b5cc0f/p/r/preview_4_2.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Buzzer/images/Grove%20Buzzer.jpg)|![enter image description here](https://www.seeedstudio.site/media/catalog/product/cache/ef3164306500b1080e8560b2e8b5cc0f/h/t/httpsstatics3.seeedstudio.comseeedfile2018-09bazaar939479_1040300054.jpg)|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Wio-Extension-RTC-p-4002.html)|[立即购买](https://www.seeedstudio.com/Grove-Buzzer.html)|[立即购买](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html)|

>由于 Wio Extension - RTC 只是通过 I2C 控制 USB 电源供应设置，您可以使用此开发板来管理几乎所有通过 USB 供电的 MCU 开发板的电源供应。

:::note
        **1** 请轻柔地插入 USB 线缆，否则可能会损坏端口。请使用内部有 4 根线的 USB 线缆，2 根线的线缆无法传输数据。如果您不确定手头的线缆是否合适，可以点击[这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)购买
    
        **2** 每个 Grove 模块在购买时都会附带一根 Grove 线缆。如果您丢失了 Grove 线缆，可以点击[这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)购买。                   
:::

#### 硬件

- **步骤 1.** 将 Wio-Extension-RTC 连接到 Wio LTE 开发板的 **I2C** 端口。

- **步骤 2.**  通过 USB 线缆将 Wio LTE 开发板连接到 PC。

- **步骤 3.** 将 [Grove - 蜂鸣器](https://www.seeedstudio.com/Grove-Buzzer-p-768.html) 或 [Grove - 红色 LED](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html) 连接到 Wio LTE 的 D38 端口。

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Wio_Extension-RTC/img/connection.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wio_Extension-RTC/img/connection.png" /></a></p></figure></div>

#### 软件

:::caution
    如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看[Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。此开发板的驱动程序依赖于 `Seeed STM32F4 Board(JP mirror) by Seeed K.K.` 的头文件，所以无论您是否已经按照[Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)的教程安装了 wio 开发板，您都需要执行以下步骤。
:::
**步骤 1** 安装库
打开您的 Arduino IDE，点击 File > Preferences，并将下面的 URL 复制到 Additional Boards Manager URLs。  
`http://www.seeed.co.jp/package_SeeedJP_index.json`  
![](https://github.com/Seeed-Studio/Wio_Extension_RTC/raw/master/Preferences.png)  

点击 Tools > Board > Board Manager，并在文本框中输入 `Wio`。

![](https://github.com/Seeed-Studio/Wio_Extension_RTC/raw/master/Boards_Manager.png)

点击 `Seeed STM32F4 Board(JP mirror) by Seeed K.K.`，然后会出现一个 Install 按钮，点击它来完成此步骤，这个过程需要大约 5 分钟到半小时，具体取决于您的网络速度。
点击 Tools > Manage Libraries，并在文本框中输入 `Wio`。

![](https://github.com/Seeed-Studio/Wio_Extension_RTC/raw/master/Library_Manager.png)
点击 `Wio LTE for Arduino by Seeed K.K.`，然后会出现一个 Install 按钮，点击它来完成此步骤。

解压[示例代码](https://github.com/Seeed-Studio/Wio_Extension_RTC/raw/master/wiortc-sample.zip)，并用 Arduino IDE 打开 `wiortc-sample.ino`。

**步骤 2** 下载代码

1. 按住 Wio LTE 背面的 BOOT 按钮并将 USB 插入 PC。
2. 我们将在设备管理器中看到 STM BOOTLARDER。
3. 选择 Tools→Boards→Wio_Tracker_LTE。
![Alt text](https://files.seeedstudio.com/wiki/Wio_Extension-RTC/img/Snipaste_2019-04-10_15-15-20.jpg)

4. 选择 Sketch→Upload 将代码上传到 Wio_LTE。
5. 按 RST 按钮启用 COM 端口。
**提示**

>当您下载大多数 Arduino 开发板时，您需要选择正确的 COM 端口，但对于此开发板，您必须保持 COM 配置为空白。

>![Alt text](https://files.seeedstudio.com/wiki/Wio_Extension-RTC/img/port.jpg)

6. 使用串口监视器打印串口消息。

```cpp
#include <WioLTEforArduino.h>
#include "WioRTC.h"

////////////////////////////////////////////////////////////////////////////////
// Defines

#define BOOT_INTERVAL   (30)  // [sec.]

////////////////////////////////////////////////////////////////////////////////
// Global variables

WioLTE Wio;
WioRTC Rtc;

////////////////////////////////////////////////////////////////////////////////
// setup and loop

void setup()
{
  delay(200);

  SerialUSB.begin(115200);
  SerialUSB.println("");
  SerialUSB.println("--- START ---------------------------------------------------");

  ////////////////////////////////////////
  // Low-level initialize

  SerialUSB.println("### I/O Initialize.");
  Wio.Init();

  SerialUSB.println("### Power supply ON.");
  Wio.PowerSupplyGrove(true);
  delay(500);
  
  ////////////////////////////////////////
  // Device initialize
  
  SerialUSB.println("### Device initialize.");
  Wire.begin();
  Rtc.begin();

  ////////////////////////////////////////
  // Completed

  SerialUSB.println("### Completed.");
}

void loop()
{
  uint8_t val;
  Rtc.EepromRead(0, &val, sizeof(val));
  SerialUSB.print("EEPROM value is ");
  SerialUSB.println(val);
  
  val++;
  Rtc.EepromWrite(0, &val, sizeof(val));
  
  SerialUSB.println("Beep.");
  pinMode(WIO_D38, OUTPUT);
  digitalWrite(WIO_D38, HIGH);
  delay(200);
  digitalWrite(WIO_D38, LOW);
  
  SerialUSB.println("Shutdown.");
  Rtc.SetWakeupPeriod(BOOT_INTERVAL);
  Rtc.Shutdown();
  while (1) {}
}
```

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wio_Extension-RTC/res/Wio%20Extension%20%E2%80%93%20RTC%20v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[ZIP]** [Wio-Extension-RTC](https://files.seeedstudio.com/wiki/Wio_Extension-RTC/res/Wio%20Extension%20%E2%80%93%20RTC%20v1.0.zip)
- **[示例]** [Wio-Extension-RTC 示例代码](https://github.com/Seeed-Studio/Wio_Extension_RTC/blob/master/wiortc-sample.zip)

## 技术支持与产品讨论

如果您有任何技术问题，请将问题提交到我们的[论坛](http://forum.seeedstudio.com/)。
感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
