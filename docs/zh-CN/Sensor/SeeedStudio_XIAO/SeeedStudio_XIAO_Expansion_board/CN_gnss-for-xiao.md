---
description: XIAO L76-L GNSS模块入门指南
title: L76-L GNSS for XIAO
keywords:
- gps
- gnss
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/gnss_for_xiao
last_update:
  date: 10/26/2023
  author: 金 菊
---

# L76-L GNSS for XIAO

:::danger
This product is on hold.
:::

<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/Longan-Labs/XIAO_GPS/main/IMG/back.png" alt="pir" width={250} height="auto" /></p>

欢迎使用L76-L GNSS for XIAO - Seeed Studio XIAO产品系列的最新成员。这款GNSS模块不仅为您的项目提供精确定位能力，而且与XIAO主控制器的无缝集成使其成为一种强大的工具。无论您是设计移动应用程序、跟踪设备，还是希望为项目添加地理定位功能，这款模块都是您的首选。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买 🖱️</font></span></strong>
    </a>
</div>

## 介绍

### 特点

- 多星座支持：支持GPS、GLONASS、Galileo和QZSS。

- 高性能：配备33个跟踪通道、99个获取通道和210个PRN通道。
- XIAO兼容性：专为与XIAO主控制器无缝集成而设计。
- 灵活连接：除了与XIAO的连接外，还提供VCC、GND等引脚，以适用于更广泛的应用。

### 规格

- GNSS类型：L76-L
- 支持的卫星系统：GPS、GLONASS、Galileo和QZSS。
- 连接端口：专为XIAO定制。
- XIAO连接端口：D2/D3(TX/RX)
- 附加引脚：VCC、GND、TX、RX

### 应用领域

- 移动应用程序：为您的移动应用程序提供精确的地理定位功能。
- 跟踪设备：设计和构建位置和追踪设备。
- 地理定位功能：为您的项目添加地理定位能力。

## 入门指南

欢迎使用L76-L GNSS for XIAO快速入门指南。本指南旨在帮助您设置和开始使用与XIAO nRF52840主控制器配合使用的新GPS扩展板。


### 硬件准备

#### 焊接引脚头部

在收到产品后，需要进行焊接操作。我们已在包装中提供了两个引脚头。您需要将这些引脚头焊接到扩展板上。

#### 连接XIAO主控制器与扩展板
焊接完成后，您可以继续将扩展板连接到XIAO主控制器。

### 软件准备

#### EspSoftwareSerial（仅适用于XIAO ESP32系列）
如果您将XIAO ESP32系列作为主设备使用，那么您可能需要单独下载软串口端口的库文件。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://www.arduino.cc/reference/en/libraries/espsoftwareserial/">
    <strong><span><font color={'FFFFFF'} size={"4"}>下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

您可以直接在Arduino IDE的库管理器中搜索并安装EspSoftwareSerial库。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/gnss-xiao/1.png" style={{width:400, height:'auto'}}/></div>

:::请注意：如果您使用的是XIAO的其他系列，那么您无需单独下载软串口端口的库文件。
:::

#### 微型GPS+

我们还需要一个库来解析扩展板报告的GPS数据消息。您可以通过点击下面的按钮下载这个 TinyGPSPlus 库。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://www.arduino.cc/reference/en/libraries/tinygpsplus/">
    <strong><span><font color={'FFFFFF'} size={"4"}>下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

您可以直接在Arduino IDE的库管理器中搜索并安装TinyGPSPlus库。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/gnss-xiao/2.png" style={{width:400, height:'auto'}}/></div>

## XIAO nRF52840示例

L76-L模块每秒通过串口输出GPS信息。在这个示例中，我们打印从串口接收到的内容。您将能够看到很多信息，包括时间、卫星数量，以及纬度和经度。以下是代码示例

```cpp
#include <TinyGPSPlus.h>
#include <SoftwareSerial.h>

static const int RXPin = D3, TXPin = D2;
static const uint32_t GPSBaud = 9600;

// The TinyGPSPlus object
TinyGPSPlus gps;

// The serial connection to the GPS device
SoftwareSerial ss(RXPin, TXPin);

void setup()
{
    Serial.begin(115200);
    ss.begin(GPSBaud);

    Serial.println(F("DeviceExample.ino"));
    Serial.println(F("A simple demonstration of TinyGPSPlus with an attached GPS module"));
    Serial.print(F("Testing TinyGPSPlus library v. ")); Serial.println(TinyGPSPlus::libraryVersion());
    Serial.println(F("by Mikal Hart"));
    Serial.println();
}

void loop()
{
    // This sketch displays information every time a new sentence is correctly encoded.
    while (ss.available() > 0)
    if (gps.encode(ss.read()))
    displayInfo();

    if (millis() > 5000 && gps.charsProcessed() < 10)
    {
        Serial.println(F("No GPS detected: check wiring."));
        while(true);
    }
}

void displayInfo()
{
    Serial.print(F("Location: "));
    if (gps.location.isValid())
    {
        Serial.print(gps.location.lat(), 6);
        Serial.print(F(","));
        Serial.print(gps.location.lng(), 6);
    }
    else
    {
        Serial.print(F("INVALID"));
    }

    Serial.print(F("  Date/Time: "));
    if (gps.date.isValid())
    {
        Serial.print(gps.date.month());
        Serial.print(F("/"));
        Serial.print(gps.date.day());
        Serial.print(F("/"));
        Serial.print(gps.date.year());
    }
    else
    {
        Serial.print(F("INVALID"));
    }

    Serial.print(F(" "));
    if (gps.time.isValid())
    {
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
    }
    else
    {
        Serial.print(F("INVALID"));
    }

    Serial.println();
}
```

请确保将GPS模块放置在更加开放的位置，以便获得良好的GPS信号。通过良好的GPS信号，在五分钟内，串口将会看到GPS模块返回的纬度、经度和时间信息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/gnss-xiao/3.png" style={{width:700, height:'auto'}}/></div>


## 无需使用XIAO开发板

如果您希望将GPS模块与其他微控制器一起使用，它们可以利用电路板上提供的四个焊接接点：3V、GND、TX和RX。

通过将这些焊接接点连接到所需微控制器上的相应引脚，可以将L76-L模块集成并在没有XIAO的情况下进行操作。请确保参考特定微控制器的文档以获取正确的引脚配置和连接方式。

|L76-L模块|其他MCU（微控制器单元）|
|------------|----------|
|3V|3.3V|
|GND|GND|
|TX|RX|
|RX|TX|

## 资源


- **[Zip]** [Eagle文件](https://files.seeedstudio.com/wiki/gnss-xiao/XIAO_GPS_SCH&PCB.zip)
- **[PDF]** [数据手册 - L76-L](https://files.seeedstudio.com/wiki/gnss-xiao/L76-L_doc.zip)


## 技术支持和产品讨论
感谢您选择我们的产品！我们将为您提供不同的支持，以确保您对我们的产品的使用体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>








