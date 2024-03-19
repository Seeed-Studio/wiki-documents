---
description: Develop SenseCAP Indicator both chips with Arduino
title: Develop both chips with Arduino
keywords:
- SenseCAP Indicator
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_Indicator_ESP32_Arduino
last_update:
  date: 3/3/2024
  author: DuKaiyin
---

# 使用Arduino开发SenseCAP Indicator的双芯片

SenseCAP Indicator是一款由ESP32和RP2040双MCU提供动力的4英寸触摸屏设备。ESP32和RP2040都是功能强大的微控制器，提供了一系列的功能和功能。

本教程将指导您使用Arduino框架的简单性和灵活性为Sensecap Indicator开发自己的自定义项目/固件。

## 硬件准备

我在这里使用SenseCAP Indicator作为硬件，并且上面有四种类型的传感器（CO2、温度、湿度、TVOC）。这里的内容应该包括：

<div class="table-center">
  <table align="center">
    <tr>
        <th>SenseCAP Indicator D1S</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_1.png" style={{width:'auto', height:200}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1S-p-5645.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### 硬件概述和开发知识

该指示器采用了两个MCU的设计，其中RP2040和ESP32S3同时工作。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_6.png"/></div>

根据上面的图表，我们知道：

1. 所有传感器都通过I2C协议连接到RP2040微控制器。
2. 有一个使用PCA9535 IC的I2C IO扩展模块。
3. 屏幕连接到ESP32S3微控制器，使用2个引脚（CS，RESET）连接到PCA9535 I2C扩展器。
4. RP2040通过ESP32S3上的UART接口的引脚20和引脚19连接。

因此，如果将Sensecap Indicator插入计算机，您将看到2个串口，一个用于RP2040，一个用于ESP32S3。带有信息“**USB-SERIAL CH340**“ 的串口是连接到ESP32S3的串口，这是本教程的其余部分将使用的串口。


<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/1.jpg"/></div>

## 软件准备


我们在这里使用Arduino。

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong>
    </a>
</div>

:::注意
在继续教程之前，在Arduino IDE中需要完成一些准备工作。

1. 确保ESP32的板定义已经安装并处于最新版本。如果Arduino IDE中尚未包含ESP32板，请按照 [此指南](https://docs.espressif.com/projects/arduino-esp32/en/latest/installing.html)进行安装 
2. 选择ESP32S3 Dev模块作为板定义。
3. 对于本教程的内容，您需要在Arduino IDE中启用PSRAM功能，以确保屏幕正常工作

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/2.jpg"/></div>

:::


在本教程中，这里还提供了相关和所需的库：

<div class="table-center">
  <table align="center">
    <tr>
        <th>Develop with Screen</th>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/Arduino_GFX-master.zip">
              <strong><span><font color={'FFFFFF'} size={"4"}> Download ⏬</font></span></strong>
          </a>
          </div>
        </td>
      </tr>
  </table>
</div>

## 入门指南

现在，我们可以使用连接到ESP32S3芯片的屏幕进行开发，并读取连接到RP2040芯片的传感器。最后，将它们组合在一起。

### 使用连接到ESP32S3芯片的屏幕进行开发

Sensecap Indicator使用ST7701模块作为屏幕，它使用并行接口并已连接到ESP32S3 MCU上的引脚。

为了能够驱动屏幕，需要一些Arduino库。这些库已在“软件准备”中提到，您也可以从 [这里](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/Arduino_GFX-master.zip)下载

下载库后，打开Arduino，在“文件”菜单中选择“管理库”，然后点击“添加.ZIP库”，选择下载的ZIP文件进行安装。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/3.jpg"/></div>

将下载的库添加到Arduino IDE中。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/4.jpg"/></div>

同时，您还需要检查相同的“Sketch”菜单，选择“管理库”，然后搜索“PCA9535”，选择由hidea kitai制作的库并安装它。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/5.jpg"/></div>

:::注意
需要PCA9535库，因为ST7701的CS引脚连接到PCA9535 i2c扩展模块，具体是i2c模块的引脚4。
:::

安装了所有必要的库后，上传下面的代码以测试屏幕是否在Arduino环境中正常工作。您可以上传以下代码：

```cpp
#include <Arduino_GFX_Library.h>
#include <PCA95x5.h>
#define GFX_BL DF_GFX_BL // default backlight pin, you may replace DF_GFX_BL to actual backlight pin

/* More dev device declaration: https://github.com/moononournation/Arduino_GFX/wiki/Dev-Device-Declaration */
#if defined(DISPLAY_DEV_KIT)
Arduino_GFX *gfx = create_default_Arduino_GFX();
#else /* !defined(DISPLAY_DEV_KIT) */

#define GFX_DEV_DEVICE ESP32_S3_RGB
#define GFX_BL 45
Arduino_DataBus *bus = new Arduino_SWSPI(
    GFX_NOT_DEFINED /* DC */, PCA95x5::Port::P04 /* CS */,
    41 /* SCK */, 48 /* MOSI */, GFX_NOT_DEFINED /* MISO */);

// option 1:
// Uncomment for 4" rect display
Arduino_ESP32RGBPanel *rgbpanel = new Arduino_ESP32RGBPanel(
    18 /* DE */, 17 /* VSYNC */, 16 /* HSYNC */, 21 /* PCLK */,
    4 /* R0 */, 3 /* R1 */, 2 /* R2 */, 1 /* R3 */, 0 /* R4 */,
    10 /* G0 */, 9 /* G1 */, 8 /* G2 */, 7 /* G3 */, 6 /* G4 */, 5 /* G5 */,
    15 /* B0 */, 14 /* B1 */, 13 /* B2 */, 12 /* B3 */, 11 /* B4 */,
    1 /* hsync_polarity */, 10 /* hsync_front_porch */, 8 /* hsync_pulse_width */, 50 /* hsync_back_porch */,
    1 /* vsync_polarity */, 10 /* vsync_front_porch */, 8 /* vsync_pulse_width */, 20 /* vsync_back_porch */);
Arduino_RGB_Display *gfx = new Arduino_RGB_Display(
    480 /* width */, 480 /* height */, rgbpanel, 2 /* rotation */, true /* auto_flush */,
    bus, GFX_NOT_DEFINED /* RST */, st7701_type1_init_operations, sizeof(st7701_type1_init_operations));

#endif /* !defined(DISPLAY_DEV_KIT) */
/*******************************************************************************
 * End of Arduino_GFX setting
 ******************************************************************************/

void setup(void)
{
  Serial.begin(115200);
  // Serial.setDebugOutput(true);
  // while(!Serial);
  Serial.println("Arduino_GFX Hello World example");

#ifdef GFX_EXTRA_PRE_INIT
  GFX_EXTRA_PRE_INIT();
#endif

  // Init Display
  if (!gfx->begin())
  {
    Serial.println("gfx->begin() failed!");
  }
  gfx->fillScreen(BLACK);

#ifdef GFX_BL
  pinMode(GFX_BL, OUTPUT);
  digitalWrite(GFX_BL, HIGH);
#endif

  gfx->setCursor(10, 10);
  gfx->setTextColor(RED);
  gfx->println("Sensecap Indicator");

  delay(5000); // 5 seconds
}

void loop()
{
  gfx->setCursor(random(gfx->width()), random(gfx->height()));
  gfx->setTextColor(random(0xffff), random(0xffff));
  gfx->setTextSize(random(6) /* x scale */, random(6) /* y scale */, random(2) /* pixel_margin */);
  gfx->println("Sensecap Indicator");

  delay(1000); // 1 second
}
```

如果一切顺利，屏幕上将随机打印“Sensecap Indicator”文本。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/6.jpg"/></div>

### 读取连接到RP2040芯片的传感器

如上所述，在准备阶段，所有传感器都连接到RP2040。假设您仍然在RP2040上使用默认固件，则传感器数据通过UART接口发送到ESP32S3。

为了使ESP32S3能够读取数据，需要安装一个名为 **PacketSerial**的库.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/7.jpg"/></div>

安装库后，您可以上传以下代码以在ESP32S3上获取传感器数据：

```cpp
//
// Copyright (c) 2012 Christopher Baker <https://christopherbaker.net>
//
// SPDX-License-Identifier: MIT
//


#include <PacketSerial.h>

PacketSerial myPacketSerial;

#define RXD2 20
#define TXD2 19

#define PKT_TYPE_SENSOR_SCD41_CO2 0XB2
#define PKT_TYPE_SENSOR_SHT41_TEMP 0XB3
#define PKT_TYPE_SENSOR_SHT41_HUMIDITY 0XB4
#define PKT_TYPE_SENSOR_TVOC_INDEX 0XB5
#define DEBUG   0

void setup()
{
  // We begin communication with our PacketSerial object by setting the
  // communication speed in bits / second (baud).
  myPacketSerial.begin(115200);

  // If we want to receive packets, we must specify a packet handler function.
  // The packet handler is a custom function with a signature like the
  // onPacketReceived function below.
 
  Serial1.begin(115200, SERIAL_8N1, RXD2, TXD2);
  myPacketSerial.setStream(&Serial1);
  myPacketSerial.setPacketHandler(&onPacketReceived);
}


void loop()
{
  // Do your program-specific loop() work here as usual.

  // The PacketSerial::update() method attempts to read in any incoming serial
  // data and emits received and decoded packets via the packet handler
  // function specified by the user in the void setup() function.
  //
  // The PacketSerial::update() method should be called once per loop(). Failure
  // to call the PacketSerial::update() frequently enough may result in buffer
  // serial overflows.
  myPacketSerial.update();

  // Check for a receive buffer overflow (optional).
  if (myPacketSerial.overflow())
  {
    // Send an alert via a pin (e.g. make an overflow LED) or return a
    // user-defined packet to the sender.
    //
    // Ultimately you may need to just increase your recieve buffer via the
    // template parameters (see the README.md).
  }
}



void onPacketReceived(const uint8_t *buffer, size_t size) {

  
  Serial.printf("<--- recv len:%d, data: ", size);


  if (size < 1) {
    return;
  }
  //byte serbytes[] = buffer[i];
  float dataval;
  switch (buffer[0]) {
    case PKT_TYPE_SENSOR_SCD41_CO2:
      {
        memcpy(&dataval, &buffer[1], sizeof(float));
        Serial.print("CO2 Level:  ");
        Serial.println(dataval);
        break;
      }
    default:
      break;
  }
   switch (buffer[0]) {
    case PKT_TYPE_SENSOR_SHT41_TEMP:
      {
        memcpy(&dataval, &buffer[1], sizeof(float));
        Serial.print("sht temp:  ");
        Serial.println(dataval, 2);
        break;
      }
    default:
      break;
  }
   switch (buffer[0]) {
    case PKT_TYPE_SENSOR_SHT41_HUMIDITY:
      {
        memcpy(&dataval, &buffer[1], sizeof(float));
        Serial.print("sht humidity:  ");
        Serial.println(dataval, 2);
        break;
      }
    default:
      break;
  }
   switch (buffer[0]) {
    case PKT_TYPE_SENSOR_TVOC_INDEX:
      {
        memcpy(&dataval, &buffer[1], sizeof(float));
        Serial.print("TVOC INDEX:  ");
        Serial.println(dataval);
        break;
      }
    default:
      break;
  }
}
```

点击打开串口监视器，并将波特率设置为115200，然后您将看到来自RP2040的传感器数据。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/8.jpg"/></div>

### 将两个示例组合并在屏幕上显示传感器数据

在Arduino IDE上打开示例菜单，然后导航到**GFX library for Arduino** 选择**SI_displaysensordata** 示例并上传。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/9.jpg"/></div>

如果成功上传，您将在屏幕上看到传感器数据显示。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Indicator-Arduino/10.jpg"/></div>

恭喜，现在您可以使用Arduino IDE开发Sensecap Indicator了！

## 更多信息

1. 开发仍处于第一阶段，本教程未配置的部分是触摸屏部分。我已经尝试了一些FT6336模块的Arduino库，但没有成功的结果。
2. 这是因为FT6366模块的INT引脚和RESET引脚连接到了PCA9535 I2C扩展器，需要在库中手动配置。我可能会在将来尝试这个。

- 
顺便说一下，为了更好地理解使用Arduino GFX库，您可以访问[Arduino_GFX github页面](https://github.com/moononournation/Arduino_GFX)

## 特别感谢

感谢GitHub用户 [u4mzu4](https://github.com/u4mzu4) 提供的支持Sensecap Indicator的SWSPI配置文件。

## ✨  贡献者项目

- 本项目由Seeed Studio [Contributor Project](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)支持.
- 感谢 [Hendra](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=35925769) 和u4mzu4的努力，您的工作将被展示

## 技术支持和产品讨论

感谢您选择我们的产品！我们在这里提供不同的支持，以确保您与我们的产品的体验尽可能顺畅。我们提供多种交流渠道，以满足不同的喜好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
