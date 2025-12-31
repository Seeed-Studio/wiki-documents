---
title: Quectel L76K
description: L76K GNSS 模块 XIAO 入门指南
keywords:
  - XIAO
  - Quectel L76K
  - GNSS
image: https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/1-L76K-GNSS-Module-for-Seeed-Studio-XIAO-45font.jpg
slug: /cn/get_start_l76k_gnss
sidebar_position: 0
last_update:
  date: 2024-10-14
  author: Spencer
---

# SeeedStudio XIAO L76K GNSS 模块入门指南

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/1-L76K-GNSS-Module-for-Seeed-Studio-XIAO-45font.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

<!-- TODO Add bazaar link -->

## 介绍

SeeedStudio XIAO L76K GNSS 模块是一款与所有 XIAO 开发板兼容的多 GNSS（全球导航卫星系统）模块，支持 GPS、北斗（BDS）、GLONASS 和 QZSS 系统，允许多系统组合或单系统独立定位。它还支持 AGNSS 功能，内置低噪声放大器和声表面滤波器，提供快速、准确、高性能的良好定位体验。

该模块配备高性能有源 GNSS 天线，旨在覆盖 GPS L1 C/A、北斗 B1 和 GLONASS L1 频段。设计还包含一个微小的亮绿色 LED，用于指示定位时的 1PPS 输出。

### 特性

- **增强接收：** 内置低噪声放大器和声表面波滤波器，提高灵敏度并降低噪声
- **高精度：** 32/72 通道，-162dBm 跟踪，-160dBm 重新捕获灵敏度
- **节能高效：** 41mA 跟踪/捕获，360µA 待机
- **多 GNSS 系统：** 采用 Quectel L76K，支持 GPS、北斗、GLONASS 和 QZSS
- **陶瓷天线：** 增强信号接收，优于传统天线。

### 规格参数

<div class="table-center">
<table align="center">
 <tr>
     <th>项目</th>
     <th>详细信息</th>
 </tr>
 <tr>
     <th>GNSS 频段</th>
     <td>GPS L1 C/A: 1575.42MHz<br></br> GLONASS L1: 1602MHz<br></br> 北斗 B1: 1561.098MHz</td>
 </tr>
 <tr>
     <th>通道</th>
     <td>32 跟踪通道/72 捕获通道</td>
 </tr>
  <tr>
     <th>TTFF（首次定位时间）</th>
     <td>冷启动：30s（无 AGNSS），5.5s（有 GNSS）<br></br> 热启动：5.5s（无 AGNSS），2s（有 AGNSS）</td>
 </tr>
  <tr>
     <th>灵敏度</th>
     <td>自动捕获：-148dBm<br></br> 跟踪：-162dBm<br></br> 重新捕获：-160dBm</td>
 </tr>
  <tr>
     <th>精度</th>
     <td>位置：2.0m CEP<br></br> 速度：0.1m/s<br></br> 加速度：0.1m/s²<br></br> 时间：30ns</td>
 </tr>
  <tr>
     <th>UART 接口</th>
     <td>波特率：9600~115200bps（默认 9600bps）<br></br> 更新频率：1Hz（默认），5Hz（最大）<br></br> 协议：NMEA 0183，CASIC 专有协议</td>
 </tr>
  <tr>
     <th>天线</th>
     <td>类型：有源天线<br></br> 工作频率：1559–1606MHz<br></br> 同轴电缆：RF1.13 长度=10cm<br></br> 电缆连接器：U.FL 插头 RA</td>
 </tr>
  <tr>
     <th>电流消耗（含有源天线）</th>
     <td>自动捕获：41mA<br></br> 跟踪：41mA<br></br> 待机：360uA</td>
 </tr>
  <tr>
     <th>尺寸</th>
     <td>18mm x 21mm</td>
 </tr>
</table>
</div>

## 硬件概述

在开始之前，我们可以参考以下图片来了解 SeeedStudio XIAO L76K GNSS 模块的引脚设计，以便于我们理解该模块的功能。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/gnss-xiao-pinout.png" style={{width:800, height:'auto'}}/></div>

## 入门指南

### 硬件准备

为了充分体验 L76K GNSS 模块的功能，我们建议将其与我们 XIAO 系列的主板配对使用。*以下任何一款 XIAO 型号*都与 L76K GNSS 模块兼容。

<table align="center">
 <tr>
  <th>Seeed Studio XIAO SAMD21</th>
  <th>Seeed Studio XIAO RP2040</th>
  <th>Seeed Studio XIAO nRF52840 (Sense)</th>
  <th>Seeed Studio XIAO ESP32C3</th>
     <th>Seeed Studio XIAO ESP32S3 (Sense)</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg" style={{width:400, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoblesense.jpg" style={{width:500, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoesp32c3.jpg" style={{width:450, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

在XIAO主板上使用此模块之前，您需要在模块上安装排针插座，并将有源GNSS天线插入模块。连接到XIAO时，请特别注意模块的安装方向，请不要反向插入，否则很可能烧毁模块或XIAO。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/gnss-xiao-assembled.png" style={{width:500, height:'auto'}}/></div>

:::caution
请特别注意模块的安装方向，请不要反向插入，否则很可能烧毁模块或XIAO。
:::

### 软件准备

要使用SeeedStudio XIAO的L76K GNSS模块，我们需要对XIAO系列进行编程。推荐的编程工具是Arduino IDE，您需要为XIAO配置Arduino环境并添加板载包。

:::tip
如果这是您第一次使用Arduino，我们强烈建议您参考[Arduino入门指南](/cn/Getting_Started_with_Arduino/)。
:::

#### 步骤1. 根据您的操作系统下载并安装稳定版本的Arduino IDE

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>下载Arduino IDE</font></span></strong></a>
</div>

#### 步骤2. 启动Arduino应用程序

#### 步骤3. 为您使用的XIAO配置Arduino IDE

- 如果您想在后续例程中使用**Seeed Studio XIAO SAMD21**，请参考**[此教程](/cn/Seeeduino-XIAO/#software)**完成添加。

- 如果您想在后续例程中使用**Seeed Studio XIAO RP2040**，请参考**[此教程](/cn/XIAO-RP2040-with-Arduino/#software-setup)**完成添加。

- 如果您想在后续例程中使用**Seeed Studio XIAO nRF52840**，请参考**[此教程](/cn/XIAO_BLE/#software-setup)**完成添加。

- 如果您想在后续例程中使用**Seeed Studio XIAO ESP32C3**，请参考**[此教程](/cn/XIAO_ESP32C3_Getting_Started#software-setup)**完成添加。

- 如果您想在后续例程中使用**Seeed Studio XIAO ESP32S3**，请参考**[此教程](/cn/xiao_esp32s3_getting_started#software-preparation)**完成添加。

#### 步骤4. 将TinyGPSPlus库添加到Arduino

首先，您需要在Arduino IDE中搜索并下载最新版本的**TinyGPSPlus**库。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/installing-tinygpsplus.png" style={{width:800, height:'auto'}}/></div>

## 应用演示

### 示例1：读取和显示GNSS数据

硬件和软件准备就绪后，我们开始上传第一个示例程序。L76K GNSS模块在上电后每1秒通过串口打印GNSS信息。在此示例中，我们将使用**TinyGPSPlus**库来解析从模块接收的NMEA语句，并将包括纬度、经度和时间在内的结果打印到Arduino IDE的串口监视器。

以下是源代码：

```cpp
#include <TinyGPSPlus.h>
#include <SoftwareSerial.h>
/*
   This sample sketch demonstrates how to use L76K GNSS Module on SeeedStudio XIAO.
*/
static const int RXPin = D7, TXPin = D6;
static const uint32_t GPSBaud = 9600;

// The TinyGPSPlus object
TinyGPSPlus gps;

// The serial connection to the GNSS module
SoftwareSerial ss(RXPin, TXPin);

void setup() {
  Serial.begin(115200);
#ifdef ARDUINO_SEEED_XIAO_RP2040
  pinMode(D2,OUTPUT);
  digitalWrite(D2,1);
  pinMode(D0,OUTPUT);
  digitalWrite(D0,1);
#endif
  ss.begin(GPSBaud);

  Serial.println(F("DeviceExample.ino"));
  Serial.println(F("A simple demonstration of TinyGPSPlus with L76K GNSS Module"));
  Serial.print(F("Testing TinyGPSPlus library v. "));
  Serial.println(TinyGPSPlus::libraryVersion());
  Serial.println(F("by Mikal Hart"));
  Serial.println();
}

void loop() {
  // This sketch displays information every time a new sentence is correctly encoded.
  while (ss.available() > 0)
    if (gps.encode(ss.read()))
      displayInfo();

  if (millis() > 5000 && gps.charsProcessed() < 10) {
    Serial.println(F("No GPS detected: check wiring."));
    while (true);
  }
}

void displayInfo() {
  Serial.print(F("Location: "));
  if (gps.location.isValid()) {
    Serial.print(gps.location.lat(), 6);
    Serial.print(F(","));
    Serial.print(gps.location.lng(), 6);
  } else {
    Serial.print(F("INVALID"));
  }

  Serial.print(F("  Date/Time: "));
  if (gps.date.isValid()) {
    Serial.print(gps.date.month());
    Serial.print(F("/"));
    Serial.print(gps.date.day());
    Serial.print(F("/"));
    Serial.print(gps.date.year());
  } else {
    Serial.print(F("INVALID"));
  }

  Serial.print(F(" "));
  if (gps.time.isValid()) {
    if (gps.time.hour() < 10) Serial.print(F("0"));
    Serial.print(gps.time.hour());
    Serial.print(F(":"));
    if (gps.time.minute() < 10) Serial.print(F("0"));
    Serial.print(gps.time.minute());
    Serial.print(F(":"));
    if (gps.time.second() < 10) Serial.print(F("0"));
    Serial.print(gps.time.second());
    Serial.print(F("."));
    if (gps.time.centisecond() < 10) Serial.print(F("0"));
    Serial.print(gps.time.centisecond());
  } else {
    Serial.print(F("INVALID"));
  }

  Serial.println();
}
```

只需选择您正在使用的 XIAO 和 XIAO 所在的端口号，编译并上传即可。

确保 L76K GNSS 模块放置在室外能够接收到良好 GNSS 信号的地方。将代码上传到您的 XIAO 并等待几分钟，您应该能在串口监视器上看到显示的信息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/gnss-output.png" style={{width:800, height:'auto'}}/></div>

此代码使用 TinyGPSPlus 库通过串行连接从 L76K GNSS 模块读取数据，并在串口监视器上显示有效的位置信息和日期/时间。

<!-- PCN（2025年5月25日）：基于节能考量，我们移除了固定状态指示灯。因此，隐藏以下LED演示。

## 配置

### 示例 1：改变 LED 的行为

本节演示如何通过串行通信发送特定的十六进制命令来使用 Arduino 控制绿色 LED。下面提供的示例展示了如何关闭 LED，然后将其恢复到正常的闪烁状态。

```cpp
static const int RXPin = D7, TXPin = D6;
static const uint32_t GPSBaud = 9600;
SoftwareSerial SerialGNSS(RXPin, TXPin);

void setup() {
  SerialGNSS.begin(GPSBaud);

  // Define the byte array to turn the LED off
  byte OffState[] = {0xBA, 0xCE, 0x10, 0x00, 0x06, 0x03, 0x40, 
                     0x42, 0x0F, 0x00, 0xA0, 0x86, 0x01, 0x00, 
                     // highlight-start
                     0x00, 
                     // highlight-end
                     0x00, 0x01, 0x05, 0x00, 0x00, 0x00, 0x00, 
                     // highlight-start
                     0xF0, 
                    // highlight-end
                     0xC8, 0x17, 0x08};

  // Define the byte array to recover the LED blinking state
  byte RecoverState[] = {0xBA, 0xCE, 0x10, 0x00, 0x06, 0x03, 0x40, 
                         0x42, 0x0F, 0x00, 0xA0, 0x86, 0x01, 0x00, 
                         // highlight-start
                         0x03, 
                         // highlight-end
                         0x00, 0x01, 0x05, 0x00, 0x00, 0x00, 0x00,
                         // highlight-start
                         0xF3, 
                         // highlight-end
                         0xC8, 0x17, 0x08};

  // Send the command to turn off the LED.
  SerialGNSS.write(OffState, sizeof(OffState));
  // Wait for 5 seconds.
  delay(5000);
  // Send the command to return the LED to blinking.
  SerialGNSS.write(RecoverState, sizeof(RecoverState));
}

void loop() {}
```

:::info
有关详细信息请参阅 Quectel_L76K_GNSS 的 CASIC 协议消息。

```c
struct CASIC_Messages {  
  uint16_t header; // 0xBA, 0xCE
  uint16_t len;    // 0x10, 0x00
  uint8_t class;   // 0x06
  uint8_t id;      // 0x03
  uint8_t* payload; // 0x40, 0x42, 0x0F, 0x00, 0xA0, 0x86, 0x01, 0x00, ->8
                   // 0x00, 0x00, 0x01, 0x05, 0x00, 0x00, 0x00, 0x00, ->8
  uint8_t checksum; // 0xF0,0xC8, 0x17, 0x08
} L76KStruct;
```

::: -->

## 资源

- **PDF**: [L76K GNSS Module for Seeed Studio XIAO Schematic](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/109100021-L76K-GNSS-Module-for-Seeed-Studio-XIAO-Schematic.pdf)
- **PDF**: [Quectel_L76K_GNSS_协议规范_V1.0](https://raw.githubusercontent.com/Seeed-Projects/Seeed_L76K-GNSS_for_XIAO/fb74b715224e0ac153c3884e578ee8e024ed8946/docs/Quectel_L76K_GNSS_协议规范_V1.0.pdf)
- **PDF**: [Quectel_L76K_GNSS_Protocol_Specification_V1.1](https://raw.githubusercontent.com/Seeed-Projects/Seeed_L76K-GNSS_for_XIAO/fb74b715224e0ac153c3884e578ee8e024ed8946/docs/Quectel_L76K_GNSS_Protocol_Specification_V1.1.pdf)
- **GitHub**: [Seeed_L76K-GNSS_for_XIAO](https://github.com/Seeed-Projects/Seeed_L76K-GNSS_for_XIAO)

## 故障排除

<details>
<summary>可充电电池能为 XIAO 供电吗？</summary>
不能，在这种情况下，可充电电池仅用于实时时钟（RTC）和维持 L76K GNSS 模块的热启动状态。它不能用作 XIAO 或 GNSS 模块一般操作的主要电源。
</details>

<details>
<summary>为什么 GNSS 信息不在串口监视器上显示？</summary>

确保 L76K GNSS 模块放置在室外，能够接收到良好的 GNSS 信号。
</details>

<details>
<summary>为什么设备插入 XIAO RP2040 时绿灯持续亮着？</summary>
要解决这个问题，您需要将 D0 和 D2 拉高。定位绿灯的持续亮起表明设备已进入异常工作状态。

```cpp
pinMode(D2,OUTPUT);
digitalWrite(D2,1);
pinMode(D0,OUTPUT);
digitalWrite(D0,1);
```

</details>

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
