---
description: 24GHz mmWave Human Static Presence
title: 24GHz 毫米波传感器 - 人体静态存在模块
keywords:
- mmWave_radar_sensor
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Radar_MR24HPB1
last_update:
  date: 03/23/2024
  author: AnXiaodie
---

# 24GHz 毫米波传感器 - 人体静态存在模块（MR24HPB1）

![](https://files.seeedstudio.com/wiki/mmWave-radar/radar.jpg)

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/24GHz-mmWave-Radar-Sensor-Human-Static-Presence-Module-p-5267.html"><strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 简介

  人体静态存在雷达传感器是一个自包含的、保护隐私的、安全的毫米波模块，工作频率为24GHz。借助增强的英飞凌多普勒雷达和标准算法，该模块是智能家居、智能酒店和危险警报等个人应用的理想解决方案。

  ### 应用

  - 智能家居

### **特性**

- 可靠技术：采用英飞凌毫米波调频连续波（FMCW）工业雷达
- 成熟理论：运用多普勒雷达技术与24GHz近距离传感器（NDS）
- 标准算法：在自适应环境中区分占用/未占用状态，并识别人体活动
- 完美的隐私保护：提供监控能力，无需身份识别
- 灵活的安装位置：无论遮挡物如何，都能正常工作
- 无害工作状态：输出10 dBm无害能量功率
- 高精确度：减少非生物物体的干扰，输出结果达到95%以上的准确度
- 高鲁棒性：在包含不同温度、湿度、噪声、气流、灰尘、光线等复杂环境中保持正常工作
- 高性能天线：在扇形波束模式（水平90°/垂直60°）中感知细微动作
- 测量距离：
  - 运动感知最大距离：可达12米
  - 微动感知最大距离：可达5米
  - 人体感知最大距离：可达3米
- 探测时间：
  - 未占用状态到占用状态：0.5秒内
  - 有人状态到无人状态：超过1分钟
- 可定制雷达：支持雷达参数、协议、天线、功能的二次开发

### **硬件概览**

![](https://files.seeedstudio.com/wiki/mmWave-radar/yinjiaotu.png)

1. S1输出：高电平 - 占用状态，低电平 - 未占用状态。
2. S2输出：高电平 - 活动状态，低电平 - 静止状态
3. GP1到GP4是参数选择控制，可以根据用户需求重新定义。
4. 该接口的输出信号均为3.3V电平。

:::caution警告
该产品的功耗为500mW，不适合长期供电。
:::

### **特性**

![](https://files.seeedstudio.com/wiki/mmWave-radar/radar1.png)

## 开始使用

### Arduino库概述

:::tip提示
如果您是第一次使用Arduino，我们强烈建议您参考[Arduino入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。
:::

本示例中使用的库代码可以通过点击下面的图标进行下载。

<p style={{textAlign: 'center'}}><a href="https://github.com/limengdu/Seeed_24GHz_mmWave_Radar_Sensor" target="_blank"><div align="center"><img width ="{300}" src="https://files.seeedstudio.com/wiki/seeed_logo/DOWNLOAD.png" /></div></a></p>

在开始编写草图之前，我们先来了解一下这个库的可用函数。

  - `void recvRadarBytes()` —— 这个函数用于获取雷达返回的当前帧的长度。帧会根据这个长度存储在一个数组中。
    **输入参数：** 无
    **返回值：** 无
  - `void Bodysign_judgment(byte inf[], float Move_min, float Move_max)` —— 雷达返回的数据包含大量的物理数据。用户可以根据函数提供的信号数据和解码算法，灵活地调整检测到的运动信息。判断的内容将通过串口输出。
    **输入参数：**
    - `byte inf[]` —— 雷达发送的数据帧。
    - `float Move_min` —— 确定用户处于静止或未占用状态的阈值。
    - `float Move_max` —— 确定用户处于静止状态或有人处于运动状态的阈值。

      **返回值：** 无
    关于信号参数的描述：理论上，信号参数的计算值范围从**0到100**。当计算值为**0**时，表示周围环境中**没有人**被检测到。当计算值为**1**时，表示环境被检测为有人且处于**静止状态**。计算值为**2到100**表示周围环境被检测为有人且处于**活动状态**。

  - `void Situation_judgment(byte inf[])` —— 这个函数根据雷达内部的算法，检测人体是否正在靠近或远离雷达所在位置，并判断人体的移动情况。这些信息将通过串口输出。
    **输入参数：**

    - `byte inf[]` —— 雷达发送的数据帧。

      **返回值：** 无

- `void Fall_inf(byte inf[])` —— 这个函数完成了雷达返回的跌倒检测信息的解码，并通过串口打印出雷达检测的结果。
  **输入参数：**

  - `byte inf[]` —— 雷达发送的数据帧。

    **返回值：** 无

- `unsigned short int us_CalculateCrc16(unsigned char *lpuc_Frame, unsigned short int lus_Len)` —— 这个函数用于生成CRC16校验和。
  **输入参数：**

  - `unsigned char *lpuc_Frame` —— 您想要发送给雷达的数据帧（不包括最后的2字节校验和帧）。

  - `unsigned short int lus_Len` —— 您想要发送给雷达的数据帧的长度。

    **返回值：** 2字节整数类型的校验和。


- `void SerialInit()` —— 将雷达串口波特率设置为9600。如果是Seeeduino板，将软串口设置为RX: 2, TX: 3。
**输入参数：** 无
**返回值：** 无

### 安装

**第一步**。 你需要安装Arduino软件。

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></div></a></p>

**第二步**。 启动Arduino应用程序。

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"/></div>

**第三步**。 选择你的开发板型号并将其添加到Arduino IDE中。
  - 如果你想在后续的例程中使用**Seeeduino V4.2**，请参考[这个教程](https://wiki.seeedstudio.com/Seeed_Arduino_Boards/)来完成添加。
  - 如果你想在后续的例程中使用**Seeeduino XIAO**，请参考[这个教程](https://wiki.seeedstudio.com/Seeeduino-XIAO/#software)来完成添加。
  - 如果你想在后续的例程中使用**XIAO RP2040**，请参考[这个教程](https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino/#software-setup)来完成添加。
  - 如果你想在后续的例程中使用**XIAO BLE**，请参考[这个教程](https://wiki.seeedstudio.com/XIAO_BLE/#software-setup)来完成添加。

**第四步**。 安装Arduino代码库。

首先，从[GitHub](https://github.com/limengdu/Seeed_24GHz_mmWave_Radar_Sensor)获取代码库，并将其下载到你的本地计算机上。

既然你已经下载了zip格式的库文件，打开你的Arduino IDE，点击**Sketch（草图）> Include Library（包含库）> Add .ZIP Library（添加.ZIP库）**。选择你刚刚下载的zip文件，如果库安装正确，你会在通知窗口中看到**Library added to your libraries（库已添加到你的库中）**。这意味着库已成功安装。

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png"/></div>

### 所需材料

在完成以下示例之前，你需要准备以下材料。

|              |              |              |
|:--------------:|:--------------:|:--------------:|
|<div align="center"><img width ="{210}" src="https://files.seeedstudio.com/wiki/mmWave-radar/radar.jpg"/></div>| <div align="center"><img width ="{210}" src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg"/></div>| <div align="center"><img width ="{150}" src="https://files.seeedstudio.com/wiki/60GHzradar/dupont.jpg"/></div>|
|[**24GHz毫米波雷达传感器**](https://www.seeedstudio.com/24GHz-mmWave-Radar-Sensor-Human-Static-Presence-Module-p-5267.html)|[**Seeed XIAO BLE nRF52840 传感器**](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)|**2mm to 2.54mm Pitch Ribbon Cable**|

**第一步**。 通过主板将设备连接到计算机。接线图如下表所示。

<table align="center">
  <tbody><tr>
      <td colSpan={4}><div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/mmWave-radar/radarconnect.png" /></div></td>
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

**第二步**。 在Arduino IDE左上角的菜单栏中，选择**工具**，选择你正在使用的开发板类型，并选择相应的串口。

:::tip提示
如果你使用的是**MacOS**，设备的串口名称通常以**/dev/cu.usbmodem xxx**开始，后面跟着设备的名称。如果你使用的是**Windows**，设备的串口名称通常以**COM**开始，后面也跟着设备的名称。
:::

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/3.png"/></div>

在本示例中，我们将展示雷达如何与我们热门产品XIAO BLE配合使用。

### 示例1 使用特征参数分析获取人体运动

雷达返回的大量数据中，物理数据信息占据了大部分。有时，过度依赖雷达自身的算法在某些场景下可能无法获得满意的结果。因此，我们可以选择使用雷达返回的信息，并根据实际应用场景进行适当的调整。

本示例中的代码如下。

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/1.png"/></div>

```c++
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
 radar.recvRadarBytes();                       //接收雷达数据并开始处理
 if (radar.newData == true) {                  //数据已被接收并传输到新的列表dataMsg[]中
    byte dataMsg[radar.dataLen+1] = {0x00};
    dataMsg[0] = 0x55;                         //将帧头作为数组的第一个元素添加
    for (byte n = 0; n < radar.dataLen; n++)dataMsg[n+1] = radar.Msg[n];  //逐帧传输
    radar.newData = false;                     //保存完整的数据帧集

    //radar.ShowData(dataMsg);                 //串口打印出接收到的一组数据帧
    radar.Bodysign_judgment(dataMsg, 1, 15); //使用符号参数输出人体运动信息
  }
}
```

```c
radar.Bodysign_judgment(dataMsg, 1, 15);
```

一旦获取了dataMsg数组，我们可以将该数组的数据作为第一个参数传递给`Bodysign_judgment()`函数，该函数用于解析符号参数。

`Bodysign_judgment()`函数的第二个和第三个参数分别是判断无人和人体静止状态的临界值，以及人体静止和运动状态的临界值。

(1, 15)表示当计算出的身体符号值小于1时，输出环境中无人。当体值大于等于1且小于15时，输出当前环境有人处于静止状态。当身体符号值大于等于35时，输出环境中有人正在移动。

上传程序。将你的串口监视器波特率设置为9600，应该可以看到结果。输出应该类似于下面的图像。

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/2.png"/></div>

:::tip提示
输出数据帧后面的值表示计算出的符号值。
:::

### 示例2 向雷达发送数据

雷达为我们打开了非常多的接口，用于获取信息以及设置雷达的灵敏度或场景。本例程将指导用户如何使用用户手册向雷达发送数据消息，以调整雷达的参数或获取所需的数据信息。

**第一步**。 根据所需的查询获取数据帧。

在资源区域下载[用户手册](https://files.seeedstudio.com/wiki/60GHzradar/24GHz-Sleep-monitorng-user-manual.pdf)，并在**第8.2章**中找到你需要查询或设置的帧的内容，并整理它们。

在本示例中，假设你想查询雷达设备的ID，你应该能够获得所需的功能码、地址码1和地址码2。

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/60GHzradar/11.png"/></div>

**第二步**。 在Arduino IDE中打开示例代码。

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/9.png"/></div>

本示例中的代码如下。

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
  //请根据数据手册填写你想要设置的数据帧（不包括2字节的校验和帧）
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

**第三步**。 修改数据帧的内容以生成发送给雷达的完整数据帧。

我们需要修改的是循环中的`data[]`数组。

```c
//请根据数据手册填写你想要设置的数据帧（不包括2字节的校验和帧）。
unsigned char data[] = {0x55, 0x08, 0x00, 0x05, 0x01, 0x04, 0x03};
```
我们需要修改的地方是第二个元素，以及从第四个到最后一个元素。帧头0x55是固定的，不需要修改。第二个帧是长度帧，请根据你发送的数据长度进行修改。第三个帧固定为0x00。第四个帧是功能码，第五个帧是地址码1，以此类推。

:::tip提示
关于长度帧的计算方法：<br />
长度 = 数据长度 + 功能码 + 地址码1 + 地址码2 + 数据 + 校验和。（帧头不计入）

有关帧格式和规则的更多信息，请参阅[用户手册](https://files.seeedstudio.com/wiki/60GHzradar/24GHz-Sleep-monitorng-user-manual.pdf)的第8章。
:::

上传程序。将你的串口监视器波特率设置为9600，应该可以看到结果。输出应该类似于下面的图像。
<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/10.png"/></div>

需要发送给雷达的完整数据将在串口监视器中显示。

**其他方法**

如果你不想使用任何主设备来生成完整的数据帧，你也可以将下面的代码粘贴到可以运行C程序的编辑器中。按照上述步骤，用你帧的内容填充数组数据。

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
    //请根据数据手册填写你想要设置的数据帧（不包括2字节的校验和帧）。
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

编辑器执行后，同样可以输出需要发送给雷达的完整数据帧。

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/8.png"/></div>

**第四步**。 向雷达发送数据帧。

通过一个[**UART转USB**设备](https://www.seeedstudio.com/USB-To-Uart-5V-p-1833.html?queryID=588a892811a774ad3005ea0d31427532&objectID=1111&indexName=bazaar_retailer_products)将雷达直接连接到电脑的USB端口。接线方式如下表所示。

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


使用类似串口调试助手的软件，选择雷达所在的串口。

<div align="center"><img width ="{300}" src="https://files.seeedstudio.com/wiki/60GHzradar/17.png"/></div>

:::caution警告
24GHz雷达需要5V电源供电，否则雷达可能无法正常工作。
:::

连接成功后，你会看到雷达发送连续不断的信息流。

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/60GHzradar/16.png"/></div>

将在**第三步**中获得的完整数据帧粘贴到软件的发送区域。然后点击发送。

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/60GHzradar/18.png"/></div>

你可以查找第三个元素为0x03的返回数据集。这组数据是查询后获得的信息。如果你发送调整雷达参数的数据，它也会返回这样的信息。

:::caution警告
如果你选择**ASCII**作为发送数据的格式，每个数据集前都需要加上**0x**。如果你选择**HEX**，那么每组数据前不需要加上**0x**。
:::

## 故障排除

**常见问题1：如何将代码应用到Seeeduino（或Arduino）上？**

> 由于硬件设计的不同，XIAO系列或Wio Terminal的串口被命名为Serial1，而Seeeduino或Arduino需要使用软串口。如果你想在Seeeduino上使用雷达，你可以更改软串口设置，或者使用引脚2（RX）和引脚3（TX）。
> <div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/19.png"/></div>

**常见问题2：如果XIAO BLE和雷达长时间收集数据，无法上传代码，我应该怎么做？**

> 此时，你可以用手指轻轻按下XIAO BLE顶部的复位按钮，以重新上传程序运行。

## 资源

- **[PDF]** [人体存在用户手册](https://files.seeedstudio.com/wiki/mmWave-radar/Human_Presence_User_Manual.pdf)
- **[ZIP]** [24GHz呼吸探测示意图/方案图/电路图](https://files.seeedstudio.com/wiki/60GHzradar/24GHz-respiratory-schematic.zip)
- **[PPTX]** [矽力特毫米波传感器系列V2.0](https://files.seeedstudio.com/wiki/mmWave-radar/Seeed-mmWave-sensor-series-V2.0.pptx)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供各种支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>