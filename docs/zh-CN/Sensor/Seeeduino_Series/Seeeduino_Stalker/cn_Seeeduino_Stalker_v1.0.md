---
description: Seeeduino Stalker v1.0
title: Seeeduino Stalker v1.0
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Seeeduino_Stalker_v1.0
last_update:
  date: 1/31/2023
  author: shuxu hu
---
![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v1.0/img/Seeeduino-stalker-168.jpg)

**这不是 Seeeduino Stalker 的最新版本，已经停产。
最新版本可以在这里找到：[Seeeduino Stalker v2.1](https://seeeddoc.github.io/Seeeduino_Stalker_v2.1/)
查看 <a href="/cn/Seeeduino_Stalker#Comparison_between_various_versions_of_Seeeduino_Stalker" ><span><font size={"3"}> Arduino </font></span></a> 了解 v1.0、v2.0 和 v2.1 之间的比较。**

此设备产品页面链接（点击此链接购买）：
**Seeeduino Stalker Atmega 168P v1.0 型号：[ARD125B5P](https://www.seeedstudio.com/depot/seeeduino-stalker-atmega-168-p-639.html?cPath=79_80)**

Seeeduino Stalker 是一个功能丰富的 Arduino 兼容无线传感器网络节点。其模块化结构和板载外设使其能够方便地定期记录带时间戳的传感器数据。Seeeduino Stalker 是您所有跟踪、监控和控制项目的理想选择。

## 特性 ##

- **Arduino** 兼容，基于 [Seeeduino](https://seeeddoc.github.io/Seeeduino_V2.2/)
- 板载微控制器：ATmega168P 或 ATmega328P（两种变体均可购买）

- 双重工作模式：作为独立的 Arduino 或作为堆叠在 Arduino 顶部的扩展板。（引脚头位置与 Arduino Duemilanove 兼容）

- 板载实时时钟芯片，使用 CR2032 纽扣电池作为备用电源

- 串行接口带 DTR，在独立模式下编程时自动复位。（编程时，[UartSBee](https://seeeddoc.github.io/UartSBee/) 需要单独购买）

- microSD 卡插槽

- I2C 引脚头（工作电压可选：5.0V 或 3.3V）

- 用户自定义开关和 LED

- **Bee 系列插座** - 2*10 引脚 2.0mm 间距（可以与以下任一无线模块匹配 - 一次一个：**XBee**、[BluetoothBee](https://seeeddoc.github.io/Bluetooth_Bee/)、**GPSBee** 或 [RFBee](https://seeeddoc.github.io/RFbee_V1.1-Wireless_Arduino_compatible_node/)。请注意 [UartSBee](https://seeeddoc.github.io/UartSBee/) 与此插座不兼容 - 为 [UartSBee](https://seeeddoc.github.io/UartSBee/) 提供了单独的串行接口连接器（如上所述）

## 应用 ##

- 无线传感器网络（使用 **XBee** - 需单独购买）

- GPS 记录（使用 **GPSBee** - 需单独购买）

- 能够与运行在 iPhone/Android 手机/诺基亚手机上的应用程序通信的数据采集系统（使用 [BluetoothBee](https://seeeddoc.github.io/Bluetooth_Bee/) - 需单独购买）

- RF 遥控（使用 [RFBee](https://seeeddoc.github.io/RFbee_V1.1-Wireless_Arduino_compatible_node/) - 需单独购买）

- 作为简单的独立 Arduino 兼容物理计算平台（编程时必须单独购买 [UartSBee](https://seeeddoc.github.io/UartSBee/)）

## 注意事项 ##

- 产品按现状提供。请特别在干燥（低湿度）天气中注意静电防护。

- 在使用基于Windows的开发机器时，请禁用蓝牙串口以防止Arduino IDE冻结。

## 框图 ##

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v1.0/img/Stalker-V1-Block.jpg)

## 原理图 ##

[Seeeduino Stalker v1.0原理图 (PDF)](https://www.seeedstudio.com/depot/datasheet/Seeedstalker_V1.0.pdf)

## 规格参数 ##

### 主要技术规格 ###

|微处理器:|ATMega168P 或 ATmega328P|
|---|---|
|PCB尺寸:|6.8cm x 5.5cm x 0.16cm|
|指示灯:|复位、电源、PB5上的LED（Arduino引脚13）|
|电源供应:|5V 或 7-12V|
|电源连接器:|2针JST/ USB|
|I/O数量:|20|
|ADC输入:|专用2通道（10位分辨率）|
|连接性:|I2C、UART、SPI|
|RoHS:|是|

### 电气特性 ###

|规格参数|最小值|标称值|最大值|单位|
|---|---|---|---|---|
|输入电压|5|9|12|伏特 (DC)|
|全局电流消耗|-|300|1000|mA|
|3.3V I2C电压|3.2|3.3|3.5|伏特 (DC)|
|5.0V I2C电压|4.6|4.7|5|伏特 (DC)|
|UART波特率（编程时）|-|-|115200|bps|

## 使用方法 ##

### 应用说明 ###

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v1.0/img/Stalker-V1-applications.jpg)

### 连接说明 ###

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v1.0/img/Stalker-V1-hardware.jpg)

- **Bee系列**插座 - 2*10针2.0mm间距（可与任何一个**无线模块**配合使用 - 一次一个：**XBee**、[BluetoothBee](https://seeeddoc.github.io/Bluetooth_Bee/)、**GPSBee**或[RFBee](https://seeeddoc.github.io/RFbee_V1.1-Wireless_Arduino_compatible_node/)。）与这些模块的通信通过UART完成。

- 串行接口 – 为了节省空间和降低成本，默认情况下不提供USB&lt;-&gt;串行连接。您可以使用基于FT232的UartSBee或其他USB转串行适配器进行编程或与PC通信。

- 用户LED和开关 – 板载提供了一个LED和一个开关，可根据需要在您的应用中使用。

- 主开关 – 切断Seeeduino Stalker板的电源。如果安装了CR2032电池，RTC将继续工作。

- 中断跳线 – 如果您希望允许插入Bee系列插座的模块在任何数据接收事件时中断微控制器，请安装此跳线。这在传感器网络应用中很有用，可以将微控制器从睡眠模式唤醒。

- I2C接口：板载I2C电平转换IC在3.3V和5V设备之间提供电压转换。这允许您在微控制器工作在3.3伏特时连接5.0伏特的I2C IC。

## 组件数据手册 ##

- [ATmega168](http://www.atmel.com/dyn/resources/prod_documents/doc2545.pdf) - Seeeduino Stalker板载的8位AVR微控制器。

- [PCA9306](http://www.nxp.com/documents/data_sheet/PCA9306.pdf) - 双向双路I2C总线和SMBus电压电平转换器。

- [DS1307](http://pdfserv.maxim-ic.com/en/ds/DS1307.pdf) - I2C实时时钟芯片。

- [LM1117](http://www.national.com/ds/LM/LM1117.pdf) - 电源部分使用的低压差线性稳压器。

## 源代码示例 ##

通过使用 Arduino 及其库，可以轻松地对 Seeeduino Stalker 进行编程。下面提供的一些代码片段将帮助您快速开始项目编码。包含以下所有示例的 RAR 压缩包可在**这里**获取。

请注意，下面展示的所有演示示例都使用了 FileLogger 库。请参考 Arduino 论坛上的[这个](https://arduino.cc/cgi-bin/yabb2/YaBB.pl?num=1240704747/all)帖子，并从其在 Google Code 上的[项目页面](http://code.google.com/p/arduino-filelogger/)下载该库。

此外，一些 Seeeduino Stalker 用户在 Arduino 论坛的[帖子](https://arduino.cc/cgi-bin/yabb2/YaBB.pl?num=1273413449%20)中分享了他们开发的一些代码。

### 演示 1 - SD 卡使用 ###

使用 FileLogger 库将 GPSBee 的所有数据存储到 SD 卡上。

```
#include <SD.h>constint chipSelect =10;
String buffer ="";unsignedchar ptr;
File myFile;
byte val;voidsetup(){Serial.begin(19200);pinMode(chipSelect,OUTPUT);if(!SD.begin(chipSelect)){return;}
  File myFile = SD.open("data.log",FILE_WRITE);
   myFile.close();}voidloop(){if(Serial.available()>0){
    val =Serial.read();
    buffer = String(val);
    myFile = SD.open("data.log",FILE_WRITE);
    myFile.print(buffer);
    myFile.close();}}
```

### 演示 2 – 记录带时间戳的传感器数据 ###

板载实时时钟模块可用于为定期读取的传感器数据添加时间戳。

下面展示的 Arduino 代码说明了如何从模拟引脚 0 读取传感器数据，并将其与时间戳一起保存到 SD 卡中。

```
#include "FileLogger.h"#include "DS1307.h"#include <WProgram.h>#include <Wire.h>#define Timing 0#define Accept 1#define Record 2
 
byte start[7]={'B','e','g','i','n',0x0D,0x0A};
byte buffer[20];int temp;
byte ASCII[10]={'0','1','2','3','4','5','6','7','8','9'};unsignedchar result;unsignedchar state;inttime=0;int oldtime=0;voidsetup(void){
    result = FileLogger::append("data.log", start, 7);//初始化SD卡while(result) result = FileLogger::append("data.log", start, 7);
    RTC.stop();
    RTC.set(DS1307_MIN,30);//设置分钟
    RTC.set(DS1307_HR,10);//设置小时
    RTC.set(DS1307_DATE,22);//设置日期
    RTC.set(DS1307_MTH,12);//设置月份
    RTC.set(DS1307_YR,9);//设置年份
    RTC.start();}voidloop(void){switch(state){case Timing:time=RTC.get(DS1307_SEC,true);delay(200);if(time!=oldtime){
            oldtime=time;
            temp=RTC.get(DS1307_MTH,false);
            buffer[0]=ASCII[(temp/10)];
            buffer[1]=ASCII[(temp%10)];
            buffer[2]='-';
            temp=RTC.get(DS1307_DATE,false);
            buffer[3]=ASCII[(temp/10)];
            buffer[4]=ASCII[(temp%10)];
            buffer[5]='-';
            temp=RTC.get(DS1307_HR,false);
            buffer[6]=ASCII[(temp/10)];
            buffer[7]=ASCII[(temp%10)];
            buffer[8]='-';
            temp=RTC.get(DS1307_MIN,false);
            buffer[9]=ASCII[(temp/10)];
            buffer[10]=ASCII[(temp%10)];
            buffer[11]='-';//temp=RTC.get(DS1307_SEC,false);
            buffer[12]=ASCII[(time/10)];
            buffer[13]=ASCII[(time%10)];
            buffer[14]=':';
            state=Accept;}break;case Accept:
        temp=analogRead(0);
        buffer[15]=ASCII[(temp/100)];
        buffer[16]=ASCII[((temp%100)/10)];
        buffer[17]=ASCII[(temp%10)];
        buffer[18]=0x0D;
        buffer[19]=0x0A;
        state=Record;break;case Record:
        result = FileLogger::append("data.log", buffer, 20);if(result==0){
            state=Timing;}break;default:
        state=Timing;break;}}
```

### 演示 3 将 Seeeduino Stalker 作为扩展板操作 ###

Seeeduino Stalker 可以作为扩展板安装在另一个 Arduino Duemilanove/UNO 兼容板上。

以下代码演示了如何通过 I2C 从下方的微控制器接收数据并将其保存到 SD 卡上。

```
#include "FileLogger.h"#include <Wire.h>
 
byte start[7]={'B','e','g','i','n',0x0D,0x0A};unsignedchar buffer[10];unsignedchar result;unsignedchar state;voidsetup(){
    result = FileLogger::append("data.log", start, 7);//初始化 SD 卡while(result) result = FileLogger::append("data.log", start, 7);Wire.begin(4);// 以地址 #4 加入 i2c 总线Wire.onReceive(receiveEvent);// 注册事件}voidloop(){}void receiveEvent(int howMany){unsignedchar i=0;while(Wire.available()>0){
        buffer[i]=Wire.receive();// 以字符形式接收字节
        i++;}
    result = FileLogger::append("data.log", buffer, i);while(result) result = FileLogger::append("data.log", start, 7);}
```

## 支持 ##

如果您有疑问或其他更好的设计想法，可以访问我们的[论坛](https://www.seeedstudio.com/forum)或**希望**进行讨论。

## 修订历史 ##

|修订版本|描述|发布日期|
|---|---|---|
|Seeeduino Stalker v1.0 |首次公开发布|2009年12月23日|
|Seeeduino Stalker v2.0 | 具有更多功能的新改进版本|2010年12月17日|

## 错误跟踪器 ##

错误跟踪器是您可以发布在使用过程中认为可能发现的任何错误的地方。请写下您要说的内容，您的回答将帮助我们改进产品。

## 其他想法 ##

其他想法是写下您关于此产品的项目想法或您发现的其他用途的地方。或者您可以在项目页面上写下它们。

## 资源 ##

[Stalker Eagle 设计文件](https://www.seeedstudio.com/wiki/images/4/40/Stalker.zip)

## 如何购买 ##

Seeeduino Stalker v1.0 已经缺货（产品页面[在此](https://www.seeedstudio.com/depot/seeeduino-stalker-atmega-328-p-600.html?cPath=80)），请查看 Seeeduino Stalker v2.0：[Wiki 页面](https://seeeddoc.github.io/Seeeduino_Stalker_v2.0/) | [产品页面](https://www.seeedstudio.com/depot/seeeduino-stalker-v2b-p-727.html?cPath=80)

## 另请参阅 ##

- [Seeeduino Stalker v2.0](https://seeeddoc.github.io/Seeeduino_Stalker_v2.0/)
- [Seeeduino Stalker 各版本之间的比较](https://seeeddoc.github.io/Seeeduino_Stalker/#Comparison_between_various_versions_of_Seeeduino_Stalker)

## 许可证 ##

本文档采用知识共享[署名-相同方式共享许可证 3.0](http://creativecommons.org/licenses/by-sa/3.0/) 授权。源代码和库采用 [GPL/LGPL](http://www.gnu.org/licenses/gpl.html) 授权，详情请参阅源代码文件。

## 技术支持与产品讨论

   <br />
感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>