---
title: Wio Tracker - GPS、BT3.0、GSM、Arduino兼容
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/wio_gps_board/
slug: /cn/wio_gps_board
last_update:
  date: 01/11/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Wio_GPS_Board/images/Wio_GPS_Antanna.jpg)

什么是Wio Tracker？Wio Tracker是一款Arduino兼容的开发板，可以帮助您追踪地球上任何移动的物体。通过在一块板上集成GSM&GPRS以及GPS&北斗，它为您的户外物联网项目提供了一体化解决方案。

如果您关注低功耗广域网络(LPWAN)的最新消息，您可能知道2016年是特殊的一年，因为出现了LoRa和Sigfox等新技术，显著推动了WAN的发展。Wio Tracker与LoRa和Sigfox有相似之处，但也有很大不同。它更适合户外移动追踪和具有高频客户交互和中等数据量的场景，例如共享单车、物流定位、宠物追踪。

与传统的GPS追踪解决方案相比，Seeed的Wio Tracker在快速变化的物联网市场中更易于使用和定制。作为一款用户友好的Grove开发板，Wio Tracker的外观可能会让您想起Wio Link，这是Seeed的另一款明星产品。因此您也可以在板上找到6个grove连接器。作为Arduino兼容板，用户可以直接在Arduino IDE中使用Wio Tracker。

为什么我们称Wio Tracker为解决方案，因为它真的不仅仅是一块板。在SeeedStudio，我们有能力帮助客户为他们自己的项目定制Wio Tracker，并完成从项目到批量生产的全过程。由于Wio Tracker使用的是批量生产的标准模块，即使客户还在原型阶段，我们也已经准备好批量生产。

我们已经准备好了一切，最后需要的就是您的创意项目，所以如果您正在制作户外物联网追踪项目，请不要犹豫使用Wio Tracker！

:::caution
    请始终插入3.7V锂电池，以防USB电源供应不足。
:::
[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Wio-Tracker-GPS%2C-BT3.0%2C-GSM%2C-Arduino-Compatible-p-2831.html)

## 特性

* 多GNSS引擎，结合GPS和北斗，更高精度定位
* EPO™技术，提供预测的扩展预测轨道，无需额外服务器即可加速TTFF
* 基于EPO™数据，QuecFastFix™在线功能进一步减少冷启动TTFF，使冷启动TTFF与热启动相当
* GLP(GNSS低功耗)模式，正常模式40%功耗，精度略低
* 周期模式，通过控制睡眠时间也可降低功耗
* Always Locate™技术，节能智能算法
* Easy™(嵌入式辅助系统)技术，自生成轨道预测用于即时定位修复，减少首次定位时间(TTFF)
* LOCUS™技术，无需主机和外部闪存的内置导航数据记录器解决方案
* AT命令：GSM 07.07、07.05和增强AT命令
* 蓝牙3.0，支持SPP和HFP-AG
* 6个Grove连接器
* Nano SIM和TF卡二合一插槽
* Arduino IDE兼容
* 低功耗和小尺寸


### Quectel MC20模块

* 超紧凑尺寸：18.7 × 16.0 × 2.1mm
* 多导航星座：GPS/北斗/QZSS
* GNSS接收器通道：99个捕获/33个跟踪通道
* 强大的AGPS功能：自主AGPS EASY™/离线AGPS EPO™/在线AGPS QuecFastFix
* 内置LNA，提供更好的GNSS灵敏度(-167dBm@跟踪)：能够使用无源GNSS天线，无需任何额外LNA
* 增强的GNSS功能：SDK命令/AIC/LOCUS/GLP
* GSM四频：850/900/1800/1900MHz
* 多种互联网协议：TCP/UDP/PPP/HTTP/FTP/SSL
* 支持语音、短信、QuecFOTATM、DSSS、OpenCPU
* 支持蓝牙V3.0：SPP和HFP-AG配置文件

:::caution
    与大多数Arduino和Genuino板不同，Wio Tracker运行在3.3V。I/O引脚能承受的最大电压是3.3V。对任何I/O引脚施加高于3.3V的电压可能会损坏板子。
:::

## 规格参数

| 项目|功能|数值|
|--------------|-------------------------------------|-------|
|微控制器 |处理器|ATSAMD21G18A-MU, ARM Cortex-M0+, 48MHz|
||闪存|256KB|
||SRAM|32KB|
||工作电压|3.3V|
||每个I/O引脚直流电流|7 mA|
||时钟速度	|48 MHz|
|GSM/GPRS|GSM|850／900／1800／1900MHz, Class 4 (2W @850／900MHz), Class 1 (1W @1800／1900MHz)|
|||AT命令: GSM 07.07, 07.05 和增强AT命令|
|||低功耗: 1.2mA@DRX=5|
||GPRS|GPRS多时隙Class 12: 下行85.6kbps, 上行85.6kbps|
|||协议: TCP／UDP／FTP／HTTP／PPP／SSL|
||SMS|点对点消息, SMS广播, 文本和PDU模式|
||音频|回声消除, 噪声消除|
||蓝牙|蓝牙 3.0: SPP, HFP-AG|
|GNSS|系统|GPS L1 1575.42MHz, 北斗 B1 1561.10MHz|
||精度|&lt;2.5 m CEP|
||技术|EASY/LOCUS/AlwaysLocate/EPO/GLP/AIC|
|外设|Grove|2 x Grove 数字端口|
|||2 x 模拟端口|
|||1 x UART|
|||1 x I2C|
||天线|GSM天线|
|||蓝牙天线|
|||GNSS天线|
||其他|USB: 电源供应和程序上传|
|||JST 1.0连接器用于电池|
|||3.5mm音频插孔|
|||GSM电源按钮, 复位按钮|
|||1 x 用户RGB LED SK6812|
|||扬声器接口|
|||Nano SIM和TF卡二合一插槽|
|尺寸|长度|54.7mm|
||宽度|48.2mm|
||重量||


## 应用场景

* 智能交通
* 宠物追踪器
* 户外运动设备
* 行车记录仪
* 可穿戴设备
* 财产安全


:::tip
    使用Grove模块扩展您的应用
:::
板载有6个Grove连接器。如果这是您第一次听说Grove，请查看[Grove系统](https://wiki.seeedstudio.com/cn/Grove_System/)了解更多详情。
简而言之，Grove是数百种标准化传感器，包括传感器、执行器、显示器以及通信模块。

## 硬件概览

![](https://files.seeedstudio.com/wiki/GPS_Tracker/images/GPS_Tracker_v1.2_top.png)

![](https://files.seeedstudio.com/wiki/GPS_Tracker/images/GPS_Tracker_v1.2_bottom.png)


:::tip
    如果您想使用板载Grove连接器，请使用digitalWrite(12, HIGH)来开启3V3_B。否则您无法为Grove模块供电。
:::
## 引脚映射

|引脚名称|外部中断|PWM|模拟输入|模拟输出|功能|
|--------|-----------|---|---------|----------|--------|
|RX      |YES        |YES|         |          |Grove UART|
|TX      |YES        |YES|         |          |Grove UART|
|D2      |YES        |YES|         |          |Grove 数字|
|D3      |YES        |YES|         |          |Grove 数字|
|D4      |YES        |   |         |          |Grove 数字|
|D5      |YES        |YES|         |          |Grove 数字|
|D6      |YES        |   |         |          |用户LED控制|
|D7      |YES        |   |         |          |MC20电源|
|D10     |YES        |YES|         |          |用户LED|
|D11     |YES        |YES|         |          |检测耳机|
|D12     |YES        |YES|         |          |Grove电源控制|
|D13     |YES        |YES|         |          |GSM电源按钮|
|SDA     |YES        |   |         |          |Grove I2C|
|SCL     |YES        |   |         |          |Grove I2C|
|A0      |YES        |   | YES     |  YES     |Grove 模拟|
|A1      |YES        |   | YES     |  YES     |Grove 模拟|
|A2      |YES        |   | YES     |  YES     |Grove 模拟|
|A3      |YES        |   | YES     |  YES     |Grove 模拟|
|A4      |YES        |   | YES     |          |检测电池|

:::note
    所有引脚都可以作为数字输入和输出
:::

## 开始使用 - Arduino IDE

:::note
    本章基于 Win10 和 Arduino IDE v1.6.0
:::
首先您需要安装最新的 Arduino IDE，并[将 Seeeduino SAMD 添加到您的 Arduino IDE](https://wiki.seeedstudio.com/cn/Seeed_Arduino_Boards/)。

### 安装驱动程序（适用于 Windows）

第一次插入开发板时，您应该会看到一个名为 Wio Tracker 的 USB COM 设备，需要安装驱动程序。点击[这里](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/driver.zip)下载开发板的驱动程序。


为了确保驱动程序安装成功，请打开设备管理器查看是否存在 **Wio Tracker**。

### 安装 Wio Tracker 库（适用于 Windows、Linux 和 Mac）

点击[这里](https://github.com/Seeed-Studio/Seeed_Wio_GPS_Board/archive/master.zip)下载 Wio Tracker 的库文件（zip 文件），并将 zip 库导入到您的 Arduino IDE 中。如果您是新手，请点击[这里](https://www.arduino.cc/en/Guide/Libraries#toc4)获取更多信息。


### 闪烁

与其他开发板不同，Wio Tracker 上有一个用户 LED SK6812，这是一个智能控制 LED 光源，类似于 ws2812b。现在我们将上传第一个演示程序 - Blink 到 Wio Tracker，这将介绍如何使用用户 LED。

首先，我们必须安装 [Adafruit NeoPixel Library](https://github.com/adafruit/Adafruit_NeoPixel/archive/master.zip)（用于 ws2812b LED）并将其导入到 Arduino IDE 中。

然后打开您的 Arduino IDE，点击 **File > Examples > MC20_GPS_Traker > Blink** 打开示例程序，或复制以下代码：

```c
#include "MC20_Arduino_Interface.h"
#include <Adafruit_NeoPixel.h>

#define RGBPOWER     6          //To use User LED, D6 should be HIGH.
#define RGBPIN       10
#define LED_NUM      1

Adafruit_NeoPixel pixels = Adafruit_NeoPixel(LED_NUM, RGBPIN, NEO_GRB + NEO_KHZ800);

void setup() {
  pinMode(RGBPOWER, OUTPUT);
  digitalWrite(RGBPOWER, HIGH);
  pixels.begin(); // This initializes the NeoPixel library.
}

void loop() {

  // For a set of NeoPixels the first NeoPixel is 0, second is 1, all the way up to the count of pixels minus one.
  // pixels.Color takes RGB values, from 0,0,0 up to 255,255,255
  pixels.setPixelColor(0, pixels.Color(0,0,100)); // Moderately bright blue color.
  pixels.show(); // This sends the updated pixel color to the hardware.
  delay(1000);   // Wait for 1 second
  pixels.setPixelColor(0, pixels.Color(0,0,0));   // Turn off the led.
  pixels.show();
  delay(1000);
}
```

然后，

* 点击 **Tools > Board > Wio Tracker**
* 点击 **Tools > Port** 选择正确的端口号。（*不要选择 COM1*）


然后点击 Arduino IDE 左上角的 **Upload** 按钮，几秒钟后示例程序就会上传成功。


如果上传成功，您应该会看到一些红色信息，并且您会看到用户 LED 以蓝色闪烁。


### 检查电池

Wio Tracker 专为户外移动物体跟踪而设计。因此您可以通过带有 JST1.0 连接器的 3.7V 锂电池为开发板供电，并轻松检查电池电压。

:::caution
    确保电池的正负极连接正确，否则开发板可能会损坏。
:::
电池状态引脚已连接到 A4，这允许您通过编程测量电池电压。

打开您的 Arduino IDE，点击 **File > Examples > MC20_GPS_Traker > Check_Battery** 打开示例程序，或复制以下代码：

```c
#include "MC20_Arduino_Interface.h"

const int pin_battery_voltage = A4;

void setup() {
    SerialUSB.begin(115200);
}

void loop() {

    int a = analogRead(pin_battery_voltage);
    float v = a/1023.0*3.3*2.0;        // there's an 10M and 10M resistor divider
    SerialUSB.print("The voltage of battery is ");
    SerialUSB.print(v, 2);
    SerialUSB.println(" V");
    delay(1000);
}
```

### 使用 Grove 模块扩展您的应用

要使用 Wio Tracker 上的 6 个 Grove 连接器，我们必须使用 `digitalWrite(12, HIGH)` 打开 3V3_B 为 Grove 模块供电（D12 默认为 LOW 以减少功耗）。

* 以下代码显示如何使用模拟和数字 Grove 模块：

打开您的 Arduino IDE，点击 **File > Examples > MC20_GPS_Traker > Button_LightSensor** 打开示例程序，或复制以下代码：

```c
#include "MC20_Arduino_Interface.h"

#define GrovePowerPin   12
#define LightSensorPin  A0
#define ButtonPin       2


void setup() {
  SerialUSB.begin(115200);
  pinMode(ButtonPin, INPUT);
  pinMode(GrovePowerPin, OUTPUT);
  // write high to grove power pin to enable all the Grove ports,
  // or only Grove D2 port is usable.
  digitalWrite(GrovePowerPin, HIGH);   
}

void loop() {
    // print analog data when the button is pressed
    if (digitalRead(ButtonPin)) {
        SerialUSB.print("The value of light sensor:");
        SerialUSB.println(analogRead(LightSensorPin));
    }
    delay(500);
}   
```

* 以下代码显示如何使用 Grove UART 端口：

```c
#define GrovePowerPin   12

void setup() {
  pinMode(GrovePowerPin, OUTPUT);
  digitalWrite(GrovePowerPin, HIGH);    //power Grove
  //SerialUSB.begin(115200);
  SerialDBG.begin(115200);    //set Grove UART baud rate 115200
}

void loop() {  
  //SerialUSB.println("Grove UART is sending message");
  SerialDBG.println("This is Grove UART");
  delay(1000);
}
```

请使用 [USB To Uart](https://www.seeedstudio.com/USB-To-Uart-5V%263V3-p-1832.html) 读取 Grove UART 端口数据。

:::caution
    如果代码中同时使用了 SerialUSB 和 SerialDBG，请在使用时打开 SerialUSB 的 com 端口，否则 SerialDBG 将无法工作。
:::
### GNSS

MC20 模块为 MCU 提供 AT 命令集，用于与其 GSM/GPRS、GNSS 和蓝牙模块通信。

我们已经为 Wio GPS 安装了一个编写良好的库，对于简单的应用，您甚至不需要了解太多关于如何使用 AT 命令的知识，因为 AT 命令复杂且难以阅读。

以下示例展示了如何读取经度和纬度并在串口监视器中打印出来。请注意，Wio Tracker 应该放置在室外以获取 GPS 信号。此示例需要在 Wio Tracker 中插入 SIM 卡，以下图片展示了如何安装/卸载 SIM 卡：

![](https://files.seeedstudio.com/wiki/Wio_GPS_Board/images/insertsim.jpg)

![](https://files.seeedstudio.com/wiki/Wio_GPS_Board/images/pullsim.jpg)

打开您的 Arduino IDE，点击 **File > Examples > MC20_GPS_Traker > MC20_GNSS > GNSS_Show_Coordinate** 打开示例代码，或复制以下代码：

```c
#include "MC20_Common.h"
#include "MC20_Arduino_Interface.h"
#include "MC20_GNSS.h"


GNSS gnss = GNSS();

void setup() {
  SerialUSB.begin(115200);
  // while(!SerialUSB);

  gnss.Power_On();
  SerialUSB.println("\n\rPower On!");

  while(!gnss.open_GNSS()){
    delay(1000);
  }

  SerialUSB.println("Open GNSS OK.");
}

void loop() {
  // gnss.dataFlowMode();

  if(gnss.getCoordinate()){
    SerialUSB.print("GNSS: ");
    SerialUSB.print(gnss.longitude, 6);
    SerialUSB.print(",");
    SerialUSB.println(gnss.latitude, 6);  
  } else{
    SerialUSB.println("Error!");
  }

  delay(1000);
}
```


### 短信读取

以下示例展示了如何在 Wio Tracker 上读取短信。此示例需要 Nano SIM 卡。

打开您的 Arduino IDE，点击 **File > Examples > MC20_GPS_Traker > MC20_SMSRead** 打开示例代码，或复制以下代码：

```c
#include "MC20_Common.h"
#include "MC20_Arduino_Interface.h"

#define RGBPIN 10

char phone[32];
char dateTime[32];
char buffer[64];
int i = 0;
char *s = NULL;
int inComing = 0;

GPSTracker gpsTracker = GPSTracker();

void setup() {
  // MC20_init();
  pinMode(RGBPIN, OUTPUT);
  digitalWrite(RGBPIN, LOW);
  SerialUSB.begin(115200);
  // while(!SerialUSB);

  gpsTracker.Power_On();
  SerialUSB.println("Power On!");

  // gpsTracker.deleteSMS(1);

}

void loop() {

  if(MC20_check_readable()){
    inComing = 1;
  }else{
    delay(1000);
  }

  if(1 == inComing){
    MC20_read_buffer(buffer, 64);
    SerialUSB.println(buffer);

    if(NULL != (s = strstr(buffer,"+CMTI: \"SM\""))) { //SMS: $$+CMTI: "SM",24$$
        char message[128];
        int messageIndex = atoi(s+12);
        gpsTracker.readSMS(messageIndex, message,128);
        SerialUSB.print("Recv SMS: ");
        SerialUSB.println(message);
     }
     MC20_clean_buffer(buffer,64);  
     inComing = 0;
  }

}
```

### 蓝牙连接

在 Wio Tracker 上连接蓝牙设备也非常简单。打开您的 Arduino IDE，点击 **File > Examples > MC20_GPS_Traker > MC20_BlueTooth > BT_FastConnect** 打开示例代码，或复制以下代码。

然后更改您蓝牙设备的 deviceName，Wio Tracker 将自动连接它。

```c
#include "MC20_Common.h"
#include "MC20_BT.h"

// GPSTracker gpsTracker = GPSTracker();
BlueTooth bt = BlueTooth();
int bt_state = -1;
char *deviceName = "N-612";


void setup() {
  SerialUSB.begin(115200);
  while(!SerialUSB);

  bt.Power_On();
  SerialUSB.println("\n\rMC20 power On!");
  bt.BTPowerOn();
  SerialUSB.println("\n\rBT power On!");

  while(IDLE != (bt_state = bt.getBTState())){
    SerialUSB.print("State: ");
    SerialUSB.println(bt_state);
    delay(1000);
  }

  bt.BTFastConnect(deviceName, HFG_PROFILE);
}

void loop() {
  /* Debug */
  if(SerialUSB.available()){
    serialMC20.write(SerialUSB.read());
  }
  if(serialMC20.available()){     
    SerialUSB.write(serialMC20.read());
  }
}
```

### SD 卡

- **步骤 1.** 将 SD 卡插入 Wio GPS 板。
- **步骤 2.** 使用 USB 线将 Wio GPS 板连接到 PC。
- **步骤 3.** 打开您的 Arduino IDE，选择 **Tools** -> **Board** -> **Wio GPS board**。
- **步骤 4.** 点击 **File > Examples > Seeed_Wio_GPS_Board\SD_Card_Test_DumpFile** 打开示例代码，或复制以下代码。
- **步骤 5.** 将代码上传到 Wio GPS 板，它展示了如何使用 SD 库从 SD 卡读取文件并通过串口发送。


```cpp
/*
  SD card file dump

 This example shows how to read a file from the SD card using the
 SD library and send it over the serial port.

 The circuit:
 * SD card attached to SPI bus as follows:
 ** MOSI - pin 11
 ** MISO - pin 12
 ** CLK - pin 13
 ** CS - pin 4 (for MKRZero SD: SDCARD_SS_PIN)

 created  22 December 2010
 by Limor Fried
 modified 9 Apr 2012
 by Tom Igoe

 This example code is in the public domain.

 */

#include <SPI.h>
#include <SD.h>

const int chipSelect = 4;
char* fileName = "gps.txt";

void setup() {
  // Open serial communications and wait for port to open:
  SerialUSB.begin(115200);
  while (!SerialUSB) {
    ; // wait for serialUSB port to connect. Needed for native USB port only
  }


  SerialUSB.print("Initializing SD card...");

  // see if the card is present and can be initialized:
  if (!SD.begin(chipSelect)) {
    SerialUSB.println("Card failed, or not present");
    // don't do anything more:
    return;
  }
  SerialUSB.println("card initialized.");

  // open the file. note that only one file can be open at a time,
  // so you have to close this one before opening another.
  File dataFile = SD.open(fileName);

  // if the file is available, write to it:
  if (dataFile) {
    while (dataFile.available()) {
      SerialUSB.write(dataFile.read());
    }
    dataFile.close();
  }
  // if the file isn't open, pop up an error:
  else {
    SerialUSB.println("error opening datalog.txt");
  }
}

void loop() {
}
```

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/GPS_Tracker/resources/GPS_Tracker_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## 资源

* [Eagle原理图](https://files.seeedstudio.com/wiki/GPS_Tracker/resources/GPS_Tracker_Eagle.zip)
* [Sketchup文件(3D)](https://files.seeedstudio.com/wiki/GPS_Tracker/resources/GPS_Tracker.skp)
* [GSM蓝牙应用说明](https://files.seeedstudio.com/wiki/GPS_Tracker/resources/Quectel_GSM_BT_Application_Note_V1.2(C).pdf)
* [GSM文件AT命令手册](https://files.seeedstudio.com/wiki/GPS_Tracker/resources/Quectel_GSM_FILE_AT_Commands_Manual_V1.5.pdf)
* [MC20 AT命令手册](https://files.seeedstudio.com/wiki/GPS_Tracker/resources/Quectel_MC20_AT_Commands_Manual_V1.1.pdf)
* [MC20 GNSS AGPS应用指南](https://files.seeedstudio.com/wiki/GPS_Tracker/resources/Quectel_MC20_GNSS_AGPS_ApplicationGuide_V1.1.pdf)
* [MC20 GNSS AT命令手册](https://files.seeedstudio.com/wiki/GPS_Tracker/resources/Quectel_MC20_GNSS_AT_Commands_Manual_V1.1.pdf)
* [MC20 GNSS协议规范](https://files.seeedstudio.com/wiki/GPS_Tracker/resources/Quectel_MC20_GNSS_Protocol_Specification_V1.0.pdf)

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