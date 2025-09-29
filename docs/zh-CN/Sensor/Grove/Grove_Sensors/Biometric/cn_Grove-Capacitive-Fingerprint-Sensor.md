---
description: Grove - 电容式指纹扫描仪/传感器
title: Grove - 电容式指纹扫描仪/传感器
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Capacitive-Fingerprint-Sensor
last_update:
  date: 1/6/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Capacitive-Fingerprint-Scanner/img/Grove-Capacitive-Fingerprint-connect.jpg" /></div>

Grove - 电容式指纹扫描仪/传感器基于 KCT203 半导体指纹识别模块，包含一个高性能 MCU、一个垂直射频按压式指纹传感器和一个触摸感应设备。该模块具有许多优点，如体积小、指纹模板小、功耗低、可靠性高、指纹识别速度快等。此外，值得一提的是，该模块周围有一个可爱的 RGB 灯来指示指纹识别是否成功。

该系统配备了高性能指纹算法，自学习功能显著。每次成功进行指纹识别后，最新的挑战特征值都可以集成到指纹数据库中，以持续改进指纹特征，使体验更好。

我们在 Grove 驱动板上添加了电源电平转换电路，使该模块可以与 3.3V 和 5V 系统一起工作。借助我们提供的 Grove UART 连接器和 Arduino 库，您可以轻松构建自己的 Arduino 指纹传感器/扫描仪。

我们已经发布了 Grove 光学指纹传感器，这次我们为您带来 Grove - 电容式指纹扫描仪/传感器。那么有什么区别呢？好吧，让我们向您展示两种传感器的优缺点，以便您可以选择最适合您需求的传感器。

产品|优点|缺点
-----|-----|----
[Grove - 电容式指纹扫描仪/传感器](https://www.seeedstudio.com/Grove-Capacitive-Fingerprint-Scanner-p-4363.html)|可识别生物特征，仅识别活体，安全性高，体积小，功耗低，精度高|耐磨性差，容易受汗水、污渍、手指磨损等影响
[Grove - 光学指纹传感器](https://www.seeedstudio.com/Grove-Fingerprint-Sensor.html)|耐磨性强，环境适应性好，稳定性好|体积大，功耗高，精度相对较低，无法识别活体，安全性低

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Capacitive-Fingerprint-Scanner-p-4363.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特性

- 内置 2KByte 存储：支持多达 100 个指纹
- 强大的自学习功能：使用越多，识别越准确
- 可选择的安全级别
- 体积小，功耗低，待机模式下仅 10uA

新传感器已更新内部算法以提高识别精度，但使用的库和代码没有改变。

## 应用

- 指纹锁设备：门锁、保险箱、方向盘锁、挂锁、枪锁等。
- 指纹签到、门禁系统

## 规格参数

|参数|值|
|---|---|
|CPU|GD32|
|指纹模板存储|最大 100 个|
|连接器|Grove UART|
|传感器分辨率|508 DPI|
|传感器像素|160*160|
|拒真率|&lt;1%|
|认假率|&lt;0.005%|
|匹配响应时间(1:N 模式)|&lt;350ms|
|匹配响应时间(1:1 模式)|&lt;7ms|
|传感器尺寸|Φ14.9mm|
|框架尺寸|Φ19mm|
|功耗|全速：≤40 mA；休眠：≤12uA|
|工作电压|3.3V/5V|
|工作温度|-20~70℃|
|ESD 保护|非接触 15KV，接触 8KV|

## 引脚定义

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Capacitive-Fingerprint-Scanner/img/Grove-Capacitive-Fingerprint-pin.jpg" /></div>

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上述提到的支持平台是/是该模块软件或理论兼容性的指示。在大多数情况下，我们只为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

## 入门指南

### 与 Arduino 一起使用

#### 硬件

| Seeeduino V4.2 | Base Shield | Grove - 电容式指纹扫描器/传感器 |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Capacitive-Fingerprint-Scanner/img/Grove-Capacitive-Fingerprint-thumbnail.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Grove-Capacitive-Fingerprint-Scanner-p-4363.html" target="_blank">立即购买</a>|

:::note
**1** 请轻轻插入 USB 线缆，否则可能会损坏端口。请使用内部有 4 根线的 USB 线缆，2 根线的线缆无法传输数据。如果您不确定您拥有的线缆，可以点击[这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)购买

**2** 每个 Grove 模块在购买时都会附带一根 Grove 线缆。如果您丢失了 Grove 线缆，可以点击[这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)购买。
:::

- **步骤 1.** 将 Grove - 电容式指纹扫描器/传感器连接到 Grove-Base Shield 的 **D2** 端口。

- **步骤 2.** 将 Grove - Base Shield 插入 Seeeduino。

- **步骤 3.** 通过 USB 线缆将 Seeeduino 连接到 PC。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Capacitive-Fingerprint-Scanner/img/connect.jpg" /></div>

:::note
如果我们没有 Grove Base Shield，我们也可以直接将此模块连接到 Seeeduino，如下所示。
:::

| Seeeduino      |  Grove 线缆       | Grove - 电容式指纹扫描器/传感器 |
|--------------- |--------------------|-----|
| GND            | 黑色              | GND |
| 5V 或 3.3V     | 红色                | VCC |
| D3             | 白色              | RX  |
| D2             | 黄色             | TX  |

#### 软件

:::caution
如果这是您第一次使用 Arduino，我们强烈建议您在开始之前先查看[Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 从 Github 下载 [Seeed_Arduino_KCT202](https://github.com/Seeed-Studio/Seeed_Arduino_KCT202) 库。

- **步骤 2.** 参考[如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library)为 Arduino 安装库。

- **步骤 3.** 重启 Arduino IDE。打开示例，您可以通过以下三种方式打开：
    1. 在 Arduino IDE 中通过路径直接打开：**文件 --> 示例 --> Seeed_Arduino_KCT202 --> full_process**。
    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Capacitive-Fingerprint-Scanner/img/path.jpg" /></div>

2. 或者，您可以直接点击代码块右上角的图标 ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) 将以下代码复制到 Arduino IDE 的新草图中。

```cpp

/*

    Copyright (c) 2019 Seeed Technology Co., Ltd.
    Website    : www.seeed.cc
    Author     : downey
    Create Time: Jun 2019
    Change Log :

    The MIT License (MIT)

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
*/
#include "ATSerial.h"
#include "Protocol.h"
#include "KCT202.h"


#if defined(ARDUINO_ARCH_AVR)
    #define debug  Serial
    SoftwareSerial uart(2, 3);
    FingerPrint_KCT202<SoftwareSerial, HardwareSerial> kct202;
#elif defined(ARDUINO_ARCH_SAM)
    #define debug  SerialUSB
    #define uart Serial
    FingerPrint_KCT202<Uart, Serial_> kct202;
#elif defined(ARDUINO_ARCH_SAMD)
    #define debug  SerialUSB
    #define uart Serial1
    FingerPrint_KCT202<Uart, Serial_> kct202;
#else
    #define debug  Serial
    SoftwareSerial uart(2, 3);
    FingerPrint_KCT202<SoftwareSerial, HardwareSerial> kct202;
#endif





Protocol_oprt oprt;
uint8_t err_code = 0;
uint8_t param[10];
uint32_t param_len;

void setup(void) {
    debug.begin(115200);
    kct202.begin(uart, debug);
}

uint16_t finger_num;
void loop() {
    //The first param is the finger-print ID to check.
    //if set 0xffff,indicates that search for all the finger-print templates and try to match.
    kct202.autoVerifyFingerPrint(CHECK_ALL_FINGER_TEMP,
                                 LED_OFF_AFTER_GET_GRAGH | PRETREATMENT_GRAGH | NOT_RET_FOR_EVERY_STEP);
    debug.println(" ");
    debug.println("Please put your finger on the touchpad.");
    debug.println("To verify your finger print.");
    debug.println(" ");
    debug.println(" ");
    debug.println(" ");

    if (0 == kct202.getVerifyResponAndparse(finger_num)) {
        debug.println("Verify ok!");
        debug.print("Your finger temp id = ");
        debug.println(finger_num, HEX);
    }
    delay(2000);
}
```

:::caution
库文件可能会更新。此代码可能不适用于更新后的库文件，因此我们建议您使用第一种方法。
:::

- **步骤 4.** 上传演示程序。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

- **步骤 5.** 通过点击 **工具-> 串口监视器** 打开 Arduino IDE 的**串口监视器**。或者同时按下 ++ctrl+shift+m++ 键。将波特率设置为 **115200**。

- **步骤 6.** 请将您的手指放在触摸板上。

:::tip
如果一切正常，当您打开串口监视器时，可能会显示如下内容：
:::

```cpp
Usage:
    Please put your finger on the touchpad
    Repeat for 4 times or pressed continuously
 
 
 
Uart<=== : EF.1.FF.FF.FF.FF.7.0.5.0.0.0.0.C. 
 
***********************************************************
Please put your finger on the touchpad
***********************************************************
Uart<=== : EF.1.FF.FF.FF.FF.7.0.5.0.1.1.0.E. 
 
***********************************************************
Please put your finger on the touchpad
***********************************************************
Uart<=== : EF.1.FF.FF.FF.FF.7.0.5.0.2.1.0.F. 
 
***********************************************************
Please put your finger on the touchpad
***********************************************************
Uart<=== : EF.1.FF.FF.FF.FF.7.0.5.0.1.2.0.F. 
 
***********************************************************
Please put your finger on the touchpad
***********************************************************
Uart<=== : EF.1.FF.FF.FF.FF.7.0.5.0.2.2.0.10. 
 
***********************************************************
Please put your finger on the touchpad
***********************************************************
Uart<=== : EF.1.FF.FF.FF.FF.7.0.5.0.1.3.0.10. 
 
***********************************************************
Please put your finger on the touchpad
***********************************************************
Uart<=== : EF.1.FF.FF.FF.FF.7.0.5.0.2.3.0.11. 
 
***********************************************************
Please put your finger on the touchpad
***********************************************************
Uart<=== : EF.1.FF.FF.FF.FF.7.0.5.0.1.4.0.11. 
 
***********************************************************
Please put your finger on the touchpad
***********************************************************
Uart<=== : EF.1.FF.FF.FF.FF.7.0.5.0.2.4.0.12.EF.1.FF.FF.FF.FF.7.0.5.0.4.F0.1.0.EF.1.FF.FF.FF.FF.7.0.5.0.5.F1.1.2.EF.1.FF.FF.FF.FF.7.0.5.0.6.F2.1.4. 
 
Register ok!
Uart===> : EF.1.FF.FF.FF.FF.1.0.8.32.0.FF.FF.0.7.2.40. 
 
 
Please put your finger on the touchpad.
To verify your finger print.
 
 
 
Uart<=== : EF.1.FF.FF.FF.FF.7.0.8.0.0.0.0.0.0.0.F. 
 
Uart<=== : EF.1.FF.FF.FF.FF.7.0.8.0.1.0.0.0.0.0.10. 
 
Uart<=== : EF.1.FF.FF.FF.FF.7.0.8.0.5.0.1.0.64.0.79. 
 
Verify ok!
Your finger temp id = 1
Uart===> : EF.1.FF.FF.FF.FF.1.0.3.D.0.11. 
 
Uart<=== : EF.1.FF.FF.FF.FF.7.0.3.0.0.A. 
 
Operation succed.
Delete ok!
```

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Capacitive-Fingerprint-Scanner/reg/Grove-Capacitive-Fingerprint-Scanner_SCH%26PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]** [Grove - 电容式指纹扫描器/传感器 eagle 文件](https://files.seeedstudio.com/wiki/Grove-Capacitive-Fingerprint-Scanner/res/Grove-Capacitive-Fingerprint-Scanner_SCH&PCB.zip)

- **[Zip]** [Grove - 电容式指纹扫描器/传感器代码](https://github.com/Seeed-Studio/Seeed_Arduino_KCT202/archive/master.zip)

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