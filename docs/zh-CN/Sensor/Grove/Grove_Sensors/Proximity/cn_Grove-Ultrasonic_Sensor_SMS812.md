---
description: 开始使用 Grove 超声波传感器 (SMS812)
title: Grove 超声波传感器 (SMS812)
keywords:
- ultrasonic
- sms812
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/grove_ultrasonic_sensor_sms812
last_update:
  date: 08/16/2023
  author: ZouXiong.Xiao
---

# Grove 超声波传感器 (SMS812)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ultrasonic-sms812/1.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/cn/grove_ultrasonic_sensor_sms812" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 介绍

Grove 超声波传感器 (SMS812) 是一款小型化、超低功耗的测距传感器。Grove 超声波传感器 (SMS812) 基于超声波飞行时间 (ToF) 原理，并结合相关的声学、电学和算法设计。通过不同材料表面超声波回波信号的能量差异实现高精度距离测量，输出毫米级距离信息及其回波能量强度值，还可以输出标志位来区分软硬材料。此外，它可用于清洁机器人识别地面材料并在一定范围内测量距离。它体积小巧，易于安装。

### 应用

- 清洁机器人识别地面软硬材料
- 家庭服务机器人或扫地机器人获取地面信息
- 3D打印机调平检测

### 特性

- 毫米级测距精度，出色的测距稳定性
- 识别软硬材料并输出I/O信息
- 检测距离可达20-50mm，盲区小
- 支持Arduino

### 硬件概述

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ultrasonic-sms812/2.png" style={{width:600, height:'auto'}}/></div>

1. 该传感器的结构为圆柱形，采用塑料注塑成型。
2. 上图中的尺寸单位为毫米。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ultrasonic-sms812/3.png" style={{width:600, height:'auto'}}/></div>

该接口为PH1.0-4P插头连接器。引脚定义如下：

<div class="table-center">
    <table align="center">
        <tbody>
            <tr>
                <td align="center">引脚</td>
                <td align="center">类型</td>
                <td align="center">描述</td>
                <td align="center">默认值</td>
                <td align="center">数据流</td>
            </tr>
            <tr>
                <td align="center">GND</td>
                <td align="center">电源</td>
                <td align="center">负极</td>
                <td align="center">0V</td>
                <td align="center"/>
            </tr>
            <tr>
                <td align="center">Tx</td>
                <td align="center">输出</td>
                <td align="center">系统串口输出</td>
                <td align="center"/>
                <td align="center">激光雷达到外设</td>
            </tr>
            <tr>
                <td align="center">Rx</td>
                <td align="center">输入</td>
                <td align="center">系统串口输入</td>
                <td align="center"/>
                <td align="center">外设到激光雷达</td>
            </tr>
            <tr>
                <td align="center">VCC</td>
                <td align="center">电源</td>
                <td align="center">正极</td>
                <td align="center">3.3V</td>
                <td align="center"/>
            </tr>
        </tbody></table>
</div>

## 开始使用

### 硬件准备

本教程将介绍使用 XIAO SAMD21 作为主控来使用这个超声波雷达。为了方便接线，我们还将使用 Grove 扩展板。您可以根据实际需要选择其中一种。

<div class="table-center">
	<table align="center">
		<tr>
			<th>XIAO SAMD21</th>
			<th>Grove Base for XIAO</th>
            <th>Grove 超声波传感器 (SMS812)</th>
		</tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ultrasonic-sms812/4.jpg" style={{width:250, height:'auto'}}/></div></td>
        </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
				</a>
			</div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="/cn/grove_ultrasonic_sensor_sms812" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

然后，将超声波雷达连接到 XIAO 的 UART 接口。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ultrasonic-sms812/5.jpg" style={{width:700, height:'auto'}}/></div>

## Arduino 库概述

:::tip
如果这是您第一次使用 Arduino，我们强烈建议您参考 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/) 或查看下面的简单教程：
:::

下面的按钮将直接带您到我们为 Grove 超声波传感器 (SMS812) 提供的 Arduino 程序库。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/SeeedStudio_SMS812_Sensor/tree/main" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 功能

在我们开始开发程序之前，让我们先了解一下库的可用功能。

- `void setIOMode()` —— 此函数用于将雷达设置为 IO 模式，主要用于检测目标材料。

- `void setUARTMode()` —— 此函数用于将雷达设置为 UART 模式，UART 模式下雷达将主动报告距离和材料信息。

- `void setUARTREQMode()` —— 此函数用于将雷达设置为 UART REQ 模式，在此模式下只能通过发送查询命令来查询距离和材料信息。

- `void checkUARTREQ(int delaytime = 0, bool showSwitch = true)` —— 此函数在 UART REQ 模式下使用，用于查询检测到的材料和距离。

    **输入参数**

    - `delaytime`：默认值为 0。此参数控制发出查询命令的时间间隔（毫秒）。
    - `showSwitch`：默认为开启。此参数控制是否打印出原始数据帧。

- `bool getFrame(bool showSwitch = true)` —— 此函数用于获取原始数据帧。

    **输入参数**

    - `showSwitch`：默认为开启。此参数控制是否打印出原始数据帧。

- `bool parseDatagram(bool showSwitch = false)` —— 此函数用于解析原始数据帧。

    **输入参数**

    - `showSwitch`：默认为关闭。此参数控制是否打印出原始数据帧。

### 安装

由于您已经下载了 zip 库文件，请打开您的 Arduino IDE，点击 **Sketch > Include Library > Add .ZIP Library**。选择您刚刚下载的 zip 文件，如果库安装正确，您将在通知窗口中看到 **Library added to your libraries**。这意味着库已成功安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

## XIAO 示例

**步骤 1.** 您需要安装 Arduino 软件。

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></div></a></p>

**步骤 2.** 启动 Arduino 应用程序。

<div align="center"><img width ="{700}" src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"/></div>

**步骤 3.** 选择您的开发板型号并将其添加到 Arduino IDE 中。

- 如果您想在后续例程中使用 **Seeeduino V4.2**，请参考 **[此教程](https://wiki.seeedstudio.com/cn/Seeed_Arduino_Boards/)** 完成添加。

- 如果您想在后续例程中使用 **XIAO SAMD21(Seeeduino XIAO)**，请参考 **[此教程](https://wiki.seeedstudio.com/cn/Seeeduino-XIAO/#software)** 完成添加。

- 如果您想在后续例程中使用 **XIAO RP2040**，请参考 **[此教程](https://wiki.seeedstudio.com/cn/XIAO-RP2040-with-Arduino/#software-setup)** 完成添加。

- 如果您想在后续例程中使用 **XIAO nRF52840**，请参考 **[此教程](https://wiki.seeedstudio.com/cn/XIAO_BLE/#software-setup)** 完成添加。

- 如果您想在后续例程中使用 **XIAO ESP32C3**，请参考 **[此教程](https://wiki.seeedstudio.com/cn/XIAO_ESP32C3_Getting_Started/#software-setup)** 完成添加。

- 如果您想在后续例程中使用 **XIAO ESP32S3**，请参考 **[此教程](https://wiki.seeedstudio.com/cn/xiao_esp32s3_getting_started#software-preparation)** 完成添加。

:::caution
对于 **XIAO nRF52840**，请选择 **Seeed nRF52 mbed-enabled Boards**，否则运行程序时可能会报错。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/SeeednRFmbed.png" style={{width:600, height:'auto'}}/></div>

:::

**步骤 4.** 安装 Arduino 代码库。


### 演示 1：IO 模式使用

此示例将指导您完成打印标志位以区分软硬材料的过程。以下是 arduino 的参考代码：

```c
#include "sms812.h"

const int radarPin = A7;

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A6
//#define TX_Pin A7

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//SMS812_Sensor radar = SMS812_Sensor(&mySerial);

// can also try hardware serial with
SMS812_Sensor radar = SMS812_Sensor(&Serial1);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  
  Serial1.begin(115200);
  //  mySerial.begin(115200);

  pinMode(radarPin, INPUT);

  while(!Serial);   //When the serial port is opened, the program starts to execute.
  Serial.println("Ready");

  radar.setIOMode();
}

void loop() {
  // put your main code here, to run repeatedly:
  int value = analogRead(radarPin); // Read level status of D7 pin
  Serial.println(value);
  delay(500);
}

```

激活 IO 模式后，您应该知道如果 US5 传感器识别到软材料，其 TX 引脚将向开发板发送标志位 `0x01`，否则，硬材料是 `0x00`，因此您应该将 `radarPin` 设置为 **A0**（连接传感器的 TX 引脚）或支持模拟输入的引脚。

高于 1000 的高值表示识别到硬材料，低于 20 的值表示识别到软材料或空气。

因此，当您在墙前移动传感器时，您将看到如下串口输出：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ultrasonic-sms812/6.png" style={{width:700, height:'auto'}}/></div>


### 演示 2：UART 模式使用

对于 UART 模式，雷达以 100Hz 的速率输出测量值。数据报文的格式如下表所示。

<div class="table-center">
	<table align="center">
		<tr>
			<th>帧头</th>
			<th>命令帧</th>
            <th>数据长度帧</th>
            <th>数据帧</th>
            <th>校验帧</th>
		</tr>
		<tr>
			<td align="center">0xAA 0xAA</td>
			<td align="center">0xFD</td>
            <td align="center">0x04</td>
            <td align="center">--</td>
            <td align="center">CS</td>
		</tr>
	</table>
</div>

数据位占用 4 字节。第 1 字节是材料标志位，0 表示硬材料，1 表示软材料。对于软材料，将无法测量距离。然后是距离值，占用 2 字节，单位为毫米。最后 1 字节是强度值，表示接收到的超声波信号的强度。

<div class="table-center">
	<table align="center">
		<tr>
			<th>材料标志位</th>
			<th>距离值</th>
            <th>强度</th>
		</tr>
		<tr>
			<td align="center">1 字节</td>
			<td align="center">2 字节</td>
            <td align="center">1 字节</td>
		</tr>
	</table>
</div>

在此示例中，我们将使用库中的函数来解析接收到的数据帧，并通过串口打印出传感器主动报告的所有特征数据。

XIAO SAMD21 开发板上的**硬件串口**是 UART 接口引脚 **A6** 和 **A7**。您也可以使用任意两个引脚作为软件串口。

```c
#include "sms812.h"

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//SMS812_Sensor radar = SMS812_Sensor(&mySerial);

// can also try hardware serial with
SMS812_Sensor radar = SMS812_Sensor(&Serial1);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  
  Serial1.begin(115200);
  //  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.
  Serial.println("Ready");

  radar.setUARTMode();
}

void loop() {
  // put your main code here, to run repeatedly:
  
  // Prints only the acquired raw data frames
//   radar.getFrame();
//   delay(1);                //Add time delay to avoid program jam

  // Parses the contents of the data frame. If the function parseDatagram is given a true argument, the raw data frame display is enabled.
  if(radar.parseDatagram(true)){
    if(radar.material == 0x00){
      Serial.println("No blankets detected.");
      Serial.print("The measured distance is: ");
      Serial.print(radar.distance);
      Serial.println(" mm");
      Serial.print("The ultrasonic signal strength is: ");
      Serial.println(radar.strength);
    }
  }
  delay(1);                //Add time delay to avoid program jam
}
```

将代码上传到开发板后，你将传感器移动到**硬质材料**前面（软质材料不会输出解析数据），你可以看到下面的解析数据：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ultrasonic-sms812/7.png" style={{width:1000, height:'auto'}}/></div>

### 示例 3：UART REQ 模式使用

在这个示例中，我们将延迟时间参数设置为 1000，意味着我们每 1 秒轮询一次发送命令查询。传感器将通过原始消息反馈测距结果，消息长度为 9 字节。

```c
#include "sms812.h"

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//SMS812_Sensor radar = SMS812_Sensor(&mySerial);

// can also try hardware serial with
SMS812_Sensor radar = SMS812_Sensor(&Serial1);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial1.begin(115200);
  pinMode(A7, INPUT);

  //  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Ready");

  radar.setUARTREQMode();
}

void loop() {
  // put your main code here, to run repeatedly:
  radar.checkUARTREQ(1000, true);      // Check radar information every second. And turn on raw data frame display.

  // Parses the contents of the data frame. If the function parseDatagram is given a true argument, the raw data frame display is enabled.
  if(radar.material == 0x00){
    Serial.println("No blankets detected.");
    Serial.print("The measured distance is: ");
    Serial.print(radar.distance);
    Serial.println(" mm");
    Serial.print("The ultrasonic signal strength is: ");
    Serial.println(radar.strength);
  }
}
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ultrasonic-sms812/7.png" style={{width:1000, height:'auto'}}/></div>


## 资源

- **[PDF]** [开发手册 Alpha V0.2.0](https://files.seeedstudio.com/wiki/ultrasonic-sms812/sms812_Development_Manual_Alpha_V0.2.0.pdf)
- **[PDF]** [数据手册 Alpha V0.1.3](https://files.seeedstudio.com/wiki/ultrasonic-sms812/sms812_DataSheet_Alpha_V0.1.3.pdf)


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