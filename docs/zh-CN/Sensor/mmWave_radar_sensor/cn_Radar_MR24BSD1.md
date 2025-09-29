---
description: 24GHz 毫米波睡眠呼吸监测
title: 24GHz 毫米波睡眠呼吸监测
keywords:
- mmWave_radar_sensor
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Radar_MR24BSD1
last_update:
  date: 1/12/2023
  author: jianjing Huang
---

# 24GHz 毫米波传感器 - 睡眠呼吸监测 (MR24BSD1)

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/60GHzradar/1.jpeg"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/24GHz-mmWave-Radar-Sensor-Sleep-Breathing-Monitoring-Module-p-5304.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong></a>
</div>

## 介绍

MR24BSD1 24GHz 雷达模块应用多普勒检测原理实现人体睡眠质量监测，提供完全私密和安全的感知环境，不受其他噪声干扰的影响。它是智能家居应用中有用的隐私保护、安全传感器雷达系统，如睡眠安全报警、睡眠呼吸检测。

### 应用

- 智能家居
- 智能酒店
- 人体睡眠质量监测

### 特性

- 使能原理：基于 24GHz 毫米波多普勒雷达技术实现检测
- 生命体征检测：同时感知运动和静止人员，检测呼吸睡眠以监测人体睡眠质量
- 完美隐私保护：应用毫米波监测技术提供无需身份识别的监控能力
- 健康友好的工作状态：输出功率低至对人体无害
- 高稳定性：不受温度、湿度、噪声、气流、灰尘、光线和其他环境影响
- 高灵活性雷达：支持二次开发，适应各种场景应用

### 规格参数

| 工作参数                       |  最小值 |  典型值 |  最大值 |  单位 |
|--------------------------------------------|----------------|-----------------|----------------|-------|
|  工作电压 (VCC)                   |  4.5           |  5.0            |  6             |  V    |
|  工作电流 (ICC)                   |  90            |  93             |  100           |  mA   |
|  工作 I/O 输入/输出电流 (IIO) |  -             |  8              |  20            |  mA   |
|  工作温度 (TOP)               |  -20           |  -              |  +60           |  ℃    |
|  存储温度 (TST)                 |  -40           |  -              |  +80           |  ℃    |

## 硬件概述

在一切开始之前，了解产品的一些基本参数是非常重要的。下表提供了睡眠呼吸监测雷达特性的信息。

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/60GHzradar/pihnout.png"/></div>

:::note
    我们对硬件进行了一些更新。
:::

1. 有一个用于滤波RC的电阻。由于我们测试时模块中没有使用它，所以已经被移除了。

<div align="center"><img width ="{300}" src="https://files.seeedstudio.com/wiki/mmWave-radar/radarpd.png"/></div>

2.由于我们从模块中移除了LED，这里限流电路的电阻也被取消了。

<div align="center"><img width ="{300}" src="https://files.seeedstudio.com/wiki/mmWave-radar/radarpd2.png"/></div>

## 入门指南

## Arduino库概述

:::tip
如果这是您第一次使用Arduino，我们强烈建议您参考[Arduino入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

本示例中使用的库代码可以通过点击下面的图标下载。

<p style={{textAlign: 'center'}}><a href="https://github.com/limengdu/Seeed_24GHz_SleepBreathingRadar" target="_blank"><div align="center"><img width ="{300}" src="https://files.seeedstudio.com/wiki/seeed_logo/DOWNLOAD.png" /></div></a></p>

### 函数

在我们开始开发代码之前，让我们先了解一下库的可用函数。

- `void recvRadarBytes()` —— 此函数获取雷达返回的当前帧的长度。帧根据该长度存储在数组中。
**输入参数：** 无
**返回值：** 无

- `void Bodysign_judgment(byte inf[], float Move_min, float Move_max)` —— 雷达返回的数据包含大量的物理数据。用户可以根据符号数据和函数提供的解码算法灵活调整检测到的运动信息。判断的内容将通过串口输出。
**输入参数：**
  - `byte inf[]` —— 雷达发送的数据帧。
  - `float Move_min` —— 确定用户处于静止或无人状态的阈值。
  - `float Move_max` —— 确定用户处于静止状态或有人运动状态的阈值。

    **返回值：** 无
    关于符号参数的描述：理论上，符号参数的计算值范围从**0到100**。当计算值为**0**时，表示周围环境中**没有检测到人**。当计算值为**1**时，表示检测到环境被占用且处于**静止状态**。计算值为**2到100**表示检测到周围被占用且**活跃**。

- `void Situation_judgment(byte inf[])` —— 此函数根据雷达内部的算法检测人体是否正在接近或远离雷达所在位置，并判断人体的运动。此信息将通过串口输出。
**输入参数：**
  - `byte inf[]` —— 雷达发送的数据帧。

    **返回值：** 无

- `void Sleep_inf(byte inf[])` —— 此函数完成对雷达返回的睡眠信息的解码，并通过串口打印雷达检测的结果。睡眠信息包括：呼吸频率、呼吸状况、场景判断、睡眠状况和质量以及睡眠持续时间等。
**输入参数：**
  - `byte inf[]` —— 雷达发送的数据帧。

    **返回值：** 无

- `unsigned short int us_CalculateCrc16(unsigned char *lpuc_Frame, unsigned short int lus_Len)` —— 此函数用于生成CRC16校验和。
**输入参数：**
  - `unsigned char *lpuc_Frame` —— 您要发送给雷达的数据帧（不包括最后的2字节校验和帧）。
  - `unsigned short int lus_Len` —— 您要发送给雷达的数据帧的长度。

    **返回值：** 2字节整数类型校验位。

- `void SleepTimeCalculate(unsigned char sleeptime[])` —— 此函数用于将雷达返回的数据帧解析为睡眠时间。睡眠时间通过串口打印出来。
**输入参数：**
  - `unsigned char sleeptime[]` —— 雷达返回的4字节睡眠持续时间数据。

    **返回值：** 无

- `void SerialInit()` —— 将雷达串口波特率设置为9600。如果是Seeeduino板，将软串口设置为RX: 2, TX: 3。
**输入参数：** 无
**返回值：** 无

### 默认变量

```c
#define MESSAGE_HEAD 0x55       //Data frame header
#define ACTIVE_REPORT 0x04      //Proactive reporting

#define REPORT_RADAR 0x03       //Report radar information
#define REPORT_OTHER 0x05       //Report other information

#define HEARTBEAT 0x01          //Heartbeat Pack
#define ABNOEMAL 0x02           //Abnormal Reset
#define ENVIRONMENT 0x05        //Environment
#define BODYSIGN 0x06           //Physical parameters
#define CLOSE_AWAY 0x07         //Approach away

#define CA_BE 0x01              //Approach away head frame
#define CA_CLOSE 0x02           //Someone approaches
#define CA_AWAY 0x03            //Some people stay away
#define SOMEBODY_BE 0x01        //Motion state header frame
#define SOMEBODY_MOVE 0x01      //Somebody move
#define SOMEBODY_STOP 0x00      //Somebody stop
#define NOBODY 0x00             //No one here

#define SLEEP_INF 0x05          //Sleep radar data header frames
#define BREATH 0x01             //Breathing parameters
#define SCENARIO 0x03           //Scenario evaluation
#define SLEEP_TIME 0x04         //Duration parameters
#define SLEEP_QUALITY 0x05      //Sleep quality

#define BREATH_RATE 0x01        //Breathing rate
#define CHECK_SIGN 0x04         //Detection signal

#define BREATH_HOLD 0x01        //Breath-holding abnormalities
#define BREATH_NULL 0x02        //None
#define BREATH_NORMAL 0x03      //Normal breathing
#define BREATH_MOVE 0x04        //Movement abnormalities
#define BREATH_RAPID 0x05       //Acute respiratory abnormalities

#define CLOSE_AWAY_BED 0x07     //Getting in and out of bed judgment
#define SLEEP_STATE 0x08        //Sleep state judgment

#define AWAY_BED 0x00           //Leaving the bed
#define CLOSE_BED 0x01          //Get into bed

#define AWAKE 0x00              //sleep state:Awake
#define LIGHT_SLEEP 0x01        //sleep state:Light sleep
#define DEEP_SLEEP 0x02         //sleep state:deep sleep
#define SLEEP_NULL 0x03         //no sleep state

#define AWAKE_TIME 0x01         //Awake time
#define LIGHT_SLEEP_TIME 0x02   //Light sleep time
#define DEEP_SLEEP_TIME 0x03    //Deep sleep time

#define SLEEP_SCORE 0x01        //Sleep quality score

const byte MsgLen = 12;         //Data frame maximum length value
byte dataLen = 12;              //Real data frame length
byte Msg[12];                   //Set a fixed array to receive the first data
boolean newData = false;        //Controlling the reception of a new set of data
```

### 安装

**步骤 1.** 您需要安装 Arduino 软件。

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></div></a></p>

**步骤 2.** 启动 Arduino 应用程序。

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"/></div>

**步骤 3.** 选择您的开发板型号并将其添加到 Arduino IDE 中。

- 如果您想在后续教程中使用 **Seeeduino V4.2**，请参考[此教程](https://wiki.seeedstudio.com/cn/Seeed_Arduino_Boards/)完成添加。

- 如果您想在后续教程中使用 **Seeeduino XIAO**，请参考[此教程](https://wiki.seeedstudio.com/cn/Seeeduino-XIAO/#software)完成添加。

- 如果您想在后续教程中使用 **XIAO RP2040**，请参考[此教程](https://wiki.seeedstudio.com/cn/XIAO-RP2040-with-Arduino/#software-setup)完成添加。

- 如果您想在后续教程中使用 **XIAO BLE**，请参考[此教程](https://wiki.seeedstudio.com/cn/XIAO_BLE/#software-setup)完成添加。

**步骤 4.** 安装 Arduino 代码库。

首先从 [GitHub](https://github.com/limengdu/Seeed_24GHz_SleepBreathingRadar) 获取代码库并下载到您的本地计算机。

由于您已经下载了 zip 库文件，请打开您的 Arduino IDE，点击 **Sketch > Include Library > Add .ZIP Library**。选择您刚刚下载的 zip 文件，如果库安装正确，您将在通知窗口中看到 **Library added to your libraries**。这意味着库已成功安装。

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png"/></div>

## Arduino 示例

现在我们已经安装了库并了解了基本功能，让我们为 XIAO BLE 运行一些示例，看看它的表现如何。

### 所需材料

在完成以下示例之前，您需要准备以下材料。

|              |              |              |
|:--------------:|:--------------:|:--------------:|
|<div align="center"><img width ="{210}" src="https://files.seeedstudio.com/wiki/60GHzradar/1.jpeg"/></div>| <div align="center"><img width ="{210}" src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg"/></div>| <div align="center"><img width ="{150}" src="https://files.seeedstudio.com/wiki/60GHzradar/dupont.jpg"/></div>|
|[**24GHz 毫米波雷达传感器**](https://www.seeedstudio.com/24GHz-mmWave-Radar-Sensor-Sleep-Breathing-Monitoring-Module-p-5304.html?queryID=c2e8ac7c8c6fb3833f49a1a3b5083a04&objectID=5304&indexName=bazaar_retailer_products)|[**Seeed XIAO BLE nRF52840 Sense**](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html?queryID=4bbd8c09f20216aa26f6b5a9040504d0&objectID=5253&indexName=bazaar_retailer_products)|**2mm 到 2.54mm 间距排线**|

**步骤 1.** 通过主板将设备连接到计算机。接线图如下表所示。

<table align="center">
  <tbody><tr>
      <td colSpan={4}><div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/60GHzradar/20.png" /></div></td>
    </tr>
    <tr>
      <td align="center">雷达传感器</td>
      <td align="center" />
      <td align="center">主板</td>
    </tr>
    <tr>
      <td align="center">5V</td>
      <td align="center">--&gt;</td>
      <td align="center">5V</td>
    </tr>
    <tr>
      <td align="center">GND</td>
      <td align="center">--&gt;</td>
      <td align="center">GND</td>
    </tr>
    <tr>
      <td align="center">RX</td>
      <td align="center">--&gt;</td>
      <td align="center">D6</td>
    </tr>
    <tr>
      <td align="center">TX</td>
      <td align="center">--&gt;</td>
      <td align="center">D7</td>
    </tr>
  </tbody></table>

<br />

**步骤 2.** 在 Arduino IDE 左上角的菜单栏中，选择**工具**，选择您正在使用的开发板类型，并选择相应的串口。

:::tip
如果您使用的是 **MacOS**，设备的串口名称通常以 **/dev/cu.usbmodem xxx** 开头，以设备名称结尾。如果您使用的是 **Windows**，设备的串口名称通常以 **COM** 开头，同样以设备名称结尾。
:::

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/3.png"/></div>

在这个示例中，我们将演示雷达如何与我们的热门产品 XIAO BLE 配合工作。

### 演示1 解码内置雷达算法数据输出环境状态

雷达具有一套完整的内置算法，可以直接输出雷达判断获得的环境条件。本例程将描述如何通过代码直接通过串口打印出雷达检测到的环境条件。

本示例中的代码如下所示。

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/4.png"/></div>

```cpp
//Human_State_Data_Decoding_Example.ino

#include <sleepbreathingradar.h>

SleepBreathingRadar radar;

void setup()
{
  radar.SerialInit();
  Serial.begin(9600);
  delay(1500);
  Serial.println("Readly");
}

void loop()
{
 radar.recvRadarBytes();                       //Receive radar data and start processing
 if (radar.newData == true) {                  //The data is received and transferred to the new list dataMsg[]
    byte dataMsg[radar.dataLen+1] = {0x00};
    dataMsg[0] = 0x55;                         //Add the header frame as the first element of the array
    for (byte n = 0; n < radar.dataLen; n++)dataMsg[n+1] = radar.Msg[n];  //Frame-by-frame transfer
    radar.newData = false;                     //A complete set of data frames is saved
    
    //radar.ShowData(dataMsg);                 //Serial port prints a set of received data frames
    radar.Situation_judgment(dataMsg);         //Use radar built-in algorithm to output human motion status
  }
}
```

在 `setup()` 代码中，我们打开 XIAO BLE 上的 **Serial 端口** 和 **Serial1 端口**。Serial 用于数据打印，Serial1 用于 XIAO BLE 和雷达之间的通信。根据雷达的波特率，我们将两个串口的波特率都设置为 9600。准备就绪后，串口监视器将打印 **Ready**。

```c
radar.recvRadarBytes();
if (radar.newData == true) {
    byte dataMsg[radar.dataLen+1] = {0x00};
    dataMsg[0] = 0x55;
    frame as the first element of the array
    for (byte n = 0; n < radar.dataLen; n++)dataMsg[n+1] = radar.Msg[n];
    radar.newData = false;
}
```

在循环中，我们首先使用 `recvRadarBytes()` 函数将雷达发送的数据存储在固定长度数组 `Msg[12]` 中。由于雷达数据的复杂性，单个固定长度数组不足以完成我们的数据处理任务，因此我们需要一个可以调整大小的数组来根据当前数据帧长度存储数据集。这就是数组 `dataMsg[dataLen]` 发挥作用的地方，可以看到 `dataLen` 是当前数据帧的实际长度。

```c
radar.Situation_judgment(dataMsg);
```

当完全获取到 dataMsg 列表后，它将作为 `Situation_judgment()` 函数的参数来完成环境监测数据的输出，输出结果将直接打印在串口监视器上。

上传程序。将串口监视器的波特率设置为 9600 并打开，应该会显示结果。输出应该类似于下图所示。

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/5.png"/></div>

:::tip
如果打开串口监视器后没有看到数据，这可能是正常的。雷达数据的获取取决于雷达监测范围内人体运动的变化。只有当范围内人员的运动发生变化时，雷达才会发送数据，只有这时数据才会被打印出来。
:::

    如果您想查看雷达返回的数据，可以取消注释 `radar.ShowData(dataMsg);`，这将通过串口监视器输出接收到的完整数据帧集。

### Demo2 使用特征参数分析获取人体运动

在雷达返回的大量数据中，物理数据信息占据了信息的大部分。有时，在某些场景中过度依赖雷达自身的算法可能会产生不太令人满意的结果。这时，我们可以选择使用雷达返回的信息，根据实际应用场景进行适当的调整。

本示例中的代码如下所示。

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/1.png"/></div>

```cpp
//Physical_Parameters_Example.ino

#include <sleepbreathingradar.h>

SleepBreathingRadar radar;

void setup()
{
  radar.SerialInit();
  Serial.begin(9600);
  delay(1500);
  Serial.println("Readly");
}

void loop()
{
 radar.recvRadarBytes();                       //Receive radar data and start processing
 if (radar.newData == true) {                  //The data is received and transferred to the new list dataMsg[]
    byte dataMsg[radar.dataLen+1] = {0x00};
    dataMsg[0] = 0x55;                         //Add the header frame as the first element of the array
    for (byte n = 0; n < radar.dataLen; n++)dataMsg[n+1] = radar.Msg[n];  //Frame-by-frame transfer
    radar.newData = false;                     //A complete set of data frames is saved
    
    //radar.ShowData(dataMsg);                 //Serial port prints a set of received data frames
    radar.Bodysign_judgment(dataMsg, 1, 15); //Output of human movement using sign parameters
  }
}
```

```c
radar.Bodysign_judgment(dataMsg, 1, 15);
```

一旦获得了 dataMsg 数组，我们可以将该数组的数据作为第一个参数传递给 `Bodysign_judgment()` 函数，该函数解析体征参数。

函数 `Bodysign_judgment()` 的第二个和第三个参数分别是判断无人和静止人体的临界值，以及静止人体和运动人体的临界值。

(1, 15) 意味着当计算出的体征值小于 1 时，输出环境中无人。当体征值大于或等于 1 且小于 15 时，输出当前环境中有人处于静止状态。当体征值大于或等于 35 时，输出环境中有人在移动。

上传程序。将串口监视器的波特率设置为 9600 并打开，应该会显示结果。输出应该类似于下图。

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/2.png"/></div>

:::tip
输出数据帧后面的数值代表计算出的体征值。
:::

### 演示 3 获取睡眠检测数据

睡眠检测作为 24GHz 呼吸睡眠雷达的特殊功能，我们可以通过以下代码示例完成检测数据的输出。

本示例中的代码如下。

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/6.png"/></div>

```cpp
//Sleep_Breathing_Data_Decoding.ino

#include <sleepbreathingradar.h>

SleepBreathingRadar radar;

void setup()
{
  radar.SerialInit();
  Serial.begin(9600);
  delay(1500);
  Serial.println("Readly");
}

void loop()
{
 radar.recvRadarBytes();                       //Receive radar data and start processing
 if (radar.newData == true) {                  //The data is received and transferred to the new list dataMsg[]
    byte dataMsg[radar.dataLen+1] = {0x00};
    dataMsg[0] = 0x55;                         //Add the header frame as the first element of the array
    for (byte n = 0; n < radar.dataLen; n++)dataMsg[n+1] = radar.Msg[n];  //Frame-by-frame transfer
    radar.newData = false;                     //A complete set of data frames is saved
    
    //radar.ShowData(dataMsg);                 //Serial port prints a set of received data frames
    radar.Sleep_inf(dataMsg);                  //Sleep information output
  }
}
```

```c
radar.Sleep_inf(dataMsg);
```

当完全获取到 dataMsg 列表时，它将作为 `Sleep_inf()` 函数的参数来完成睡眠监测数据的输出，输出结果将直接打印在串口监视器上。

上传程序。将串口监视器的波特率设置为 9600 应该会显示结果。输出应该类似于下图所示。

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/7.png"/></div>

### 示例 4 向雷达发送数据

雷达为我们开放了大量的接口来获取信息以及设置雷达灵敏度或场景。本例程将指导用户如何使用用户手册向雷达发送数据消息来调整雷达参数或获取所需的数据信息。

**步骤 1.** 根据所需查询获取数据帧。

在资源区域下载[用户手册](https://files.seeedstudio.com/wiki/60GHzradar/24GHz-Sleep-monitorng-user-manual.pdf)，在**第 8.2 章**中，找到您需要查询或设置的帧内容，并整理它们。

在此示例中，假设您想要查询雷达设备的 ID，您应该能够获得所需的功能码、地址码 1 和地址码 2。

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/60GHzradar/11.png"/></div>

**步骤 2.** 在 Arduino IDE 中打开示例代码。

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/9.png"/></div>

此示例中的代码如下。

```c
//CRC_Checksum_Generation.ino

#include <sleepbreathingradar.h>

SleepBreathingRadar radar;
char buff[30];

void setup()
{
  radar.SerialInit();
  Serial.begin(9600);
  delay(1500);
  Serial.println("Readly");
}

void loop()
{
  //Please fill in the data frame you want to set according to the datasheet(Excluding 2 Byte checksum frames)
  unsigned char data[] = {0x55, 0x08, 0x00, 0x05, 0x01, 0x04, 0x03};
  
  unsigned int length = sizeof(data)/sizeof(unsigned char);
  unsigned char datas[length + 2];
  for (int n = 0; n < length; n++)datas[n] = data[n];
  unsigned short int crc_data = radar.us_CalculateCrc16(data, length);
  sprintf(buff, "The CRC16 values is: %04x", crc_data);
  Serial.println(buff);
  datas[length] = (crc_data & 0xff00) >> 8;
  datas[length+1] = crc_data & 0xff;
  Serial.print("The datas send to the radar: ");
  for (int n = 0; n < length + 2; n++){
    char buffsend[1];
    sprintf(buffsend, "0x%02x ", datas[n]);
    Serial.print(buffsend);
  }
  Serial.println();
  delay(6000);
}
```

**步骤 3.** 修改数据帧的内容以生成发送到雷达的完整数据帧。

我们需要修改的是循环中的 `data[]` 数组。

```c
//Please fill in the data frame you want to set according to the datasheet(Excluding 2 Byte checksum frames)
unsigned char data[] = {0x55, 0x08, 0x00, 0x05, 0x01, 0x04, 0x03};
```

我们需要修改的地方是第二个元素、第四个到最后一个元素。帧头 0x55 是固定的，不需要修改。第二帧是长度帧，请根据您发送的数据长度进行修改。第三帧固定为 0x00。第四帧是功能码，第五帧是地址码 1，以此类推。

:::tip
关于长度帧计算方法：<br />
长度 = 数据长度 + 功能码 + 地址码 1 + 地址码 2 + 数据 + 校验和。（不计算帧头）

有关帧格式和规则的更多信息，请参阅[用户手册](https://files.seeedstudio.com/wiki/60GHzradar/24GHz-Sleep-monitorng-user-manual.pdf)第 8 章。
:::

上传程序。将串口监视器的波特率设置为 9600 应该会显示结果。输出应该类似于下图。

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/10.png"/></div>

需要发送到雷达的完整数据将显示在串口监视器中。

**其他方法**

如果您不想使用任何主控来生成完整的数据帧，您也可以将下面的代码粘贴到可以运行 C 程序的编辑器中。按照上述步骤，将数组数据填入您的帧内容。

```c
#include <stdio.h>

const unsigned char cuc_CRCHi[256]= {
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40,
  0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41,
  0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40
};

const unsigned char  cuc_CRCLo[256]= {
  0x00, 0xC0, 0xC1, 0x01, 0xC3, 0x03, 0x02, 0xC2, 0xC6, 0x06, 0x07, 0xC7,
  0x05, 0xC5, 0xC4, 0x04, 0xCC, 0x0C, 0x0D, 0xCD, 0x0F, 0xCF, 0xCE, 0x0E,
  0x0A, 0xCA, 0xCB, 0x0B, 0xC9, 0x09, 0x08, 0xC8, 0xD8, 0x18, 0x19, 0xD9,
  0x1B, 0xDB, 0xDA, 0x1A, 0x1E, 0xDE, 0xDF, 0x1F, 0xDD, 0x1D, 0x1C, 0xDC,
  0x14, 0xD4, 0xD5, 0x15, 0xD7, 0x17, 0x16, 0xD6, 0xD2, 0x12, 0x13, 0xD3,
  0x11, 0xD1, 0xD0, 0x10, 0xF0, 0x30, 0x31, 0xF1, 0x33, 0xF3, 0xF2, 0x32,
  0x36, 0xF6, 0xF7, 0x37, 0xF5, 0x35, 0x34, 0xF4, 0x3C, 0xFC, 0xFD, 0x3D,
  0xFF, 0x3F, 0x3E, 0xFE, 0xFA, 0x3A, 0x3B, 0xFB, 0x39, 0xF9, 0xF8, 0x38,
  0x28, 0xE8, 0xE9, 0x29, 0xEB, 0x2B, 0x2A, 0xEA, 0xEE, 0x2E, 0x2F, 0xEF,
  0x2D, 0xED, 0xEC, 0x2C, 0xE4, 0x24, 0x25, 0xE5, 0x27, 0xE7, 0xE6, 0x26,
  0x22, 0xE2, 0xE3, 0x23, 0xE1, 0x21, 0x20, 0xE0, 0xA0, 0x60, 0x61, 0xA1,
  0x63, 0xA3, 0xA2, 0x62, 0x66, 0xA6, 0xA7, 0x67, 0xA5, 0x65, 0x64, 0xA4,
  0x6C, 0xAC, 0xAD, 0x6D, 0xAF, 0x6F, 0x6E, 0xAE, 0xAA, 0x6A, 0x6B, 0xAB,
  0x69, 0xA9, 0xA8, 0x68, 0x78, 0xB8, 0xB9, 0x79, 0xBB, 0x7B, 0x7A, 0xBA,
  0xBE, 0x7E, 0x7F, 0xBF, 0x7D, 0xBD, 0xBC, 0x7C, 0xB4, 0x74, 0x75, 0xB5,
  0x77, 0xB7, 0xB6, 0x76, 0x72, 0xB2, 0xB3, 0x73, 0xB1, 0x71, 0x70, 0xB0,
  0x50, 0x90, 0x91, 0x51, 0x93, 0x53, 0x52, 0x92, 0x96, 0x56, 0x57, 0x97,
  0x55, 0x95, 0x94, 0x54, 0x9C, 0x5C, 0x5D, 0x9D, 0x5F, 0x9F, 0x9E, 0x5E,
  0x5A, 0x9A, 0x9B, 0x5B, 0x99, 0x59, 0x58, 0x98, 0x88, 0x48, 0x49, 0x89,
  0x4B, 0x8B, 0x8A, 0x4A, 0x4E, 0x8E, 0x8F, 0x4F, 0x8D, 0x4D, 0x4C, 0x8C,
  0x44, 0x84, 0x85, 0x45, 0x87, 0x47, 0x46, 0x86, 0x82, 0x42, 0x43, 0x83,
  0x41, 0x81, 0x80, 0x40
};

static unsigned short int us_CalculateCrc16(unsigned char *lpuc_Frame, unsigned short int lus_Len){
  unsigned char luc_CRCHi = 0xFF;
  unsigned char luc_CRCLo = 0xFF;
  int li_Index=0;
  while(lus_Len--){
    li_Index = luc_CRCLo ^ *( lpuc_Frame++);
    luc_CRCLo = (unsigned char)( luc_CRCHi ^ cuc_CRCHi[li_Index]);
    luc_CRCHi = cuc_CRCLo[li_Index];
  }
  return (unsigned short int )(luc_CRCLo << 8 | luc_CRCHi);
}

int main() {
    //Please fill in the data frame you want to set according to the datasheet(Excluding 2 Byte checksum frames)
    unsigned char data[] = {0x55, 0x07, 0x00, 0x01, 0x01, 0x01};

    unsigned short int crc_data = 0x0000;
    unsigned int length = sizeof(data)/sizeof(unsigned char);
    unsigned char datas[length + 2];
    for (int n = 0; n < length; n++)datas[n] = data[n];
    printf("The data frame length is: %d\n", length);
    crc_data = us_CalculateCrc16(data, length);
    datas[length] = (crc_data & 0xff00) >> 8;
    datas[length+1] = crc_data & 0xff;
    printf("The last two CRC check digits are: %04x\n", crc_data);
    printf("The datas send to the radar: ");
    for (int n = 0; n < length + 2; n++){
        printf("0x%02x ", datas[n]);
    }
    printf("\n");
    return 0;
}
```

编辑器执行后，还可以输出需要发送到雷达的完整数据帧。

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/8.png"/></div>

**步骤 4.** 向雷达发送数据帧。

通过 [**UART 转 USB** 设备](https://www.seeedstudio.com/USB-To-Uart-5V-p-1833.html?queryID=588a892811a774ad3005ea0d31427532&objectID=1111&indexName=bazaar_retailer_products) 将雷达直接连接到计算机的 USB 端口。接线如下表所示。

<table align="center">
  <tbody><tr>
      <td colSpan={4}><div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/60GHzradar/22.png" /></div></td>
    </tr>
    <tr>
      <td align="center">雷达传感器</td>
      <td align="center" />
      <td align="center">主板</td>
    </tr>
    <tr>
      <td align="center">5V</td>
      <td align="center">--&gt;</td>
      <td align="center">5V</td>
    </tr>
    <tr>
      <td align="center">GND</td>
      <td align="center">--&gt;</td>
      <td align="center">GND</td>
    </tr>
    <tr>
      <td align="center">RX</td>
      <td align="center">--&gt;</td>
      <td align="center">TX</td>
    </tr>
    <tr>
      <td align="center">TX</td>
      <td align="center">--&gt;</td>
      <td align="center">RX</td>
    </tr>
  </tbody></table>

使用串口调试助手等软件选择雷达所在的串口。

<div align="center"><img width ="{300}" src="https://files.seeedstudio.com/wiki/60GHzradar/17.png"/></div>

:::caution
24GHz雷达需要5V电源供电，否则雷达可能无法正常工作。
:::

连接成功后，您将看到雷达发送稳定的消息流。

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/60GHzradar/16.png"/></div>

将我们在**步骤3**中获得的完整数据帧粘贴到软件的发送区域。然后点击发送。

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/60GHzradar/18.png"/></div>

您可以查找第三个元素为0x03的返回数据集。这组数据是查询后获得的信息。如果您发送调整雷达参数的数据，它也会返回此类信息。

:::caution
如果您选择**ASCII**作为发送数据的格式，每个数据集都需要以**0x**为前缀。如果您选择**HEX**，则每组数据不需要以**0x**为前缀。
:::

## 故障排除

**常见问题1：如何将代码应用到Seeeduino（或Arduino）？**

> 由于硬件设计不同，XIAO系列或Wio Terminal的串口命名为Serial1，而Seeeduino或Arduino需要使用软串口。如果您想在Seeeduino上使用雷达，可以更改软串口或使用引脚2（RX）和3（TX）。
> <div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/19.png"/></div>

**常见问题2：如果XIAO BLE和雷达长时间收集数据后无法上传代码该怎么办？**

> 此时，您可以用手指轻按XIAO BLE顶部的复位按钮来重新上传程序运行。

## 资源

- **[PDF]** [睡眠呼吸雷达传感器数据手册](https://files.seeedstudio.com/wiki/mmWave-radar/MR24BSD1_Datasheet.pdf)
- **[PDF]**    [24GHz睡眠呼吸雷达传感器用户手册](https://files.seeedstudio.com/wiki/mmWave-radar/MR24BSD1_User_Manual.pdf)
- **[ZIP]** [24GHz呼吸原理图](https://files.seeedstudio.com/wiki/60GHzradar/24GHz-respiratory-schematic.zip)
- **[PPTX]** [Seeed毫米波传感器系列V2.0](https://files.seeedstudio.com/wiki/mmWave-radar/Seeed-mmWave-sensor-series-V2.0.pptx)

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
