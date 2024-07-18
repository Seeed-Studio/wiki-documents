---
description: Introduction of how to develop mmWave Sensor on XIAO.
title: XIAO与Arduino上的24GHz毫米波传感器开发
keywords:
- mmwave
- radar
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/mmwave_for_xiao_arduino
last_update:
  date: 03/21/2024
  author: AnXiaodie
---

# XIAO与Arduino上的24GHz毫米波传感器开发

本节介绍了如何在XIAO上使用毫米波库及其二次开发。

:::caution注意：
本Wiki的所有内容仅适用于适用于 XIAO 的 24GHz 毫米波，可能不适用于其他毫米波传感器。
:::

## 入门指南

### 硬件准备

在开始本文的教程内容之前，我们建议您购买我们目前出售的任何一款XIAO，以便使用毫米波传感器。

<table align="center">
	<tr>
		<th>Seeed Studio XIAO SAMD21</th>
		<th>Seeed Studio XIAO RP2040</th>
		<th>Seeed Studio XIAO nRF52840 (Sense)</th>
		<th>Seeed Studio XIAO ESP32C3</th>
        <th>Seeed Studio XIAO ESP32S3</th>
	</tr>
	<tr>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg" style={{width:400, height:'auto'}}/></div></td>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg" style={{width:500, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoblesense.jpg" style={{width:500, height:'auto'}}/></div></td>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoesp32c3.jpg" style={{width:450, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
        </div></td>
	</tr>
</table>


在本文的教程中，我们将以XIAO ESP32C3和毫米波传感器为例，指导您如何使用传感器的Arduino库和相关功能。

<table align="center">
	<tr>
		<th>Seeed Studio XIAO ESP32C3</th>
        <th>24GHz mmWave for XIAO</th>
	</tr>
	<tr>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoesp32c3.jpg" style={{width:200, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/1.png" style={{width:150, height:'auto'}}/></div></td>
	</tr>
    <tr>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-24GHz-mmWave-for-XIAO-p-5830.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
        </div></td>
	</tr>
</table>


该传感器是为XIAO设计的兼容型产品，因此，一般来说，如果您想使用这款传感器，您需要准备一款XIAO，并为传感器安装一排母针脚。在连接到XIAO时，请特别注意传感器的安装方向，请勿反向插入，否则可能会烧毁传感器或XIAO。

:::caution注意：
正确的安装方向是传感器的天线应朝向外侧。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/5.png" style={{width:800, height:'auto'}}/></div>

确认连接方向正确后，您可以将USB-C型电缆连接到电脑或电源，传感器将开始工作。

### 软件准备

  由于传感器使用的默认波特率为256000，而XIAO设计的软串口波特率可能无法满足如此高速的数据传输，因此在使用传感器之前，我们需要使用软件来调整传感器的波特率。然后，请根据您使用的手机系统下载相应的APP。

- [从Google Play下载HLKRadarTool](https://play.google.com/store/apps/details?id=com.hlk.hlkradartool).

- [从App Store下载HLKRadarTool](https://apps.apple.com/us/app/hlkradartool/id1638651152).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/3.png" style={{width:500, height:'auto'}}/></div>

## Arduino库概述

:::tip提示
如果您是第一次使用Arduino，我们强烈建议您参考[Arduino入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。
:::

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/mmwave_for_XIAO/tree/mydev">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 功能

在开始编写草图之前，让我们先了解一下这个库中的可用功能。

- `Seeed_HSP24(Stream &serial)`—— 用于传入传感器连接的串口，并开始初始化传感器。
    - **输入参数**：
      - **serial**：传感器连接的串口。

- `Seeed_HSP24(Stream &serial, Stream &debugSerial)`—— 用于传入传感器连接的串口，添加调试串口，并开始初始化传感器。
    - **输入参数**：
      - **serial**：传感器连接的串口。
      - **debugSerial**：启用串口调试，并在接收的串口上输出。

- `String getVersion()`—— 获取传感器的软件版本号。
    - **返回值**：传感器的软件版本号。

- `RadarStatus getStatus()` —— 获取传感器的状态信息，该函数将解析传感器报告的所有信息。
    - 返回值
      - **radarStatus.radarMode**：工程模式或基础模式。1 对应工程模式，2 对应基础模式。
      - **radarStatus.targetStatus**：指示监测对象的当前情况。总共有四种情况（NoTarget），第一种是未检测到人（MovingTarget），第二种是检测到有人静止不动（StaticTarget），第三种是同时检测到（BothTargets），第四种是异常情况（ErrorFrame）。其中 BothTarget 指有人移动。因为传感器监测当前环境，运动能量和静止能量都超过了设定的阈值，所以我们命名为“BothTarget”，如果只有运动能量超过阈值，则会输出“MovingTarget”。
      - **radarStatus.distance**：这个值指的是传感器检测到的与被检测物体之间的距离。
      - **radarStatus.radarMovePower.moveGate**（在工程模式下有效）：这个数组存储了不同距离门限的移动能量值。
      - **radarStatus.radarStaticPower.staticGate**（在工程模式下有效）：这个数组存储了不同距离门限的静止能量值。
      - **radarStatus.photosensitive**（在工程模式下有效）：这个值指的是传感器的光敏度值，范围是 0-255。

- `DataResult sendCommand(const byte* sendData, int sendDataLength)`—— 通过此函数向传感器发送命令。
    - 输入参数
      - **sendData**：发送的命令帧数组。
      - **sendDataLength**：发送的命令帧长度。
    - 返回值
      - **resultBuffer**：指向动态分配的数组。
      - **length**：数组的长度。

- `AskStatus setDetectionDistance(int distance, int times)`—— 使用此函数配置最大距离门限和未占用时长。
    - 输入参数
      - **distance**：配置最大距离门限。
      - **times**：未占用时长。
    - 返回值
      - 成功返回 0x00 或错误返回 0x01。

- `AskStatus setGatePower(int gate, int movePower, int staticPower)`—— 使用此函数配置不同距离门限及其灵敏度。
    - 输入参数
      - **gate**：距离门限，范围 0-8 米。
      - **movePower**：触发运动阈值的能量值。
      - **staticPower**：触发静止阈值的能量值。
    - 返回值
      - 成功返回 0x00 或错误返回 0x01。

- `RadarStatus getConfig()`—— 读取设置传感器的参数值。
    - 返回值
      - **radarStatus.detectionDistance**：雷达的运动检测距离门限数量。
      - **radarStatus.moveSetDistance**：雷达的静止检测距离门限数量。
      - **radarStatus.staticSetDistance**：雷达的最长检测范围门限。
      - **radarStatus.noTargrtduration**：无人值守时长。

- `AskStatus setResolution(int resolution)`—— 设置距离门限的分辨率，1 表示 0.25M，0 表示 0.75M。默认值为 0.75M。
    - 输入参数
      - **resolution**：1 表示 0.25M，0 表示 0.75M。默认值为 0.75M。
    - 返回值
      - 成功返回 0x00 或错误返回 0x01。

- `RadarStatus getResolution()`—— 获取距离门限的分辨率，1 表示 0.25M，0 表示 0.75M。默认值为 0.75M。
    - 返回值
      - **radarStatus.resolution**：1 表示 0.25M，0 表示 0.75M。默认值为 0.75M。

- `AskStatus rebootRadar()`—— 重启雷达命令。
    - 返回值
      - 成功返回 0x00 或错误返回 0x01。

- `AskStatus refactoryRadar()`—— 将雷达恢复为出厂设置。
    - 返回值
      - 成功返回 0x00 或错误返回 0x01。

- `AskStatus enableEngineeringModel()`—— 启用传感器工程模式输出。
    - 返回值
      - 成功返回 0x00 或错误返回 0x01。

- `AskStatus disableEngineeringModel()`—— 退出工程模式输出。
    - 返回值
      - 成功返回 0x00 或错误返回 0x01。


### 默认变量

```cpp
#define BUFFER_SIZE 256     // 串行缓冲区大小

class Seeed_HSP24
{
    public:
        static const int FRAME_START_SIZE = 4;
        static const int FRAME_END_SIZE = 4;

        static const byte frameStart[FRAME_START_SIZE];
        static const byte frameEnd[FRAME_END_SIZE];
        static const byte frameAskStart[FRAME_START_SIZE];
        static const byte frameAskEnd[FRAME_END_SIZE];

        struct RadarMovePower // 每个运动距离门限的能量值
        {
            int moveGate[9] = {-1, -1, -1, -1, -1, -1, -1, -1, -1};
        };

        struct RadarStaticPower // 每个静止距离门限的能量值
        {
            int staticGate[9] = {-1, -1, -1, -1, -1, -1, -1, -1, -1};
        };

        //  定义 TargetStatus 枚举类
        enum class AskStatus : byte
        {
            Success = 0x00, // 成功
            Error = 0x01,   // 失败
        };

        //  定义TargetStatus枚举类
        enum class TargetStatus : byte
        {
            NoTarget = 0x00,     // 无目标
            MovingTarget = 0x01, // 移动目标
            StaticTarget = 0x02, // 稳定目标
            BothTargets = 0x03,  // 这可以被解释为运动，意味着设定的运动阈值和静止阈值都超过了设定值。
            ErrorFrame = 0x04    // 获取目标失败
        };

        // 定义 RadarStatus 结构体
        struct RadarStatus
        {
            TargetStatus targetStatus = TargetStatus::ErrorFrame; // 雷达的目标状态
            int distance = -1;                                    // 雷达的目标距离（以毫米为单位）
            int moveSetDistance = -1;                             // 雷达的运动检测距离门限数量，通常无需配置
            int staticSetDistance = -1;                           // 雷达的静止检测距离门限数量，通常无需配置
            int detectionDistance = -1;                           // 雷达的最远探测距离门限
            int resolution = -1;                                  // 雷达的距离门限分辨率
            int noTargrtduration = -1;                            // 无人值守时长”或“无人持续时间
            int radarMode = -1;                                   // 用于区分模块是处于基本报告模式（2）还是工程报告模式（1）
            RadarMovePower radarMovePower;                        // 运动能量值
            RadarStaticPower radarStaticPower;                    // 静止能量值
            int photosensitive = -1;                              // 光敏范围 0-255
        };

        // 用于返回已发出命令的结果
        struct DataResult
        {
            byte *resultBuffer; // 指向一个动态分配的数组
            int length;         // 数组的长度
        };
};
```

### 安装

既然您已经下载了zip格式的库文件，请打开您的Arduino IDE，点击**Sketch（草图）> Include Library（包含库）> Add .ZIP Library（添加.ZIP库）**。选择您刚刚下载的zip文件，如果库文件安装正确，您会在通知窗口中看到**Library added to your libraries（库已添加到您的库中）**。这表示库文件已成功安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

<br></br>

## XIAO 示例

既然我们已经安装了库文件，并且了解了基本功能，接下来让我们运行一些针对我们的24GHz毫米波传感器的示例，看看它的表现如何。

**步骤 1.** 启动Arduino应用程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>下载Arduino IDE</font></span></strong>
    </a>
</div>

**步骤 2.** 选择您的开发板型号并将其添加到Arduino IDE中。
  - 如果您想在后续的步骤中使用**Seeed Studio XIAO SAMD21**，请参考**[这个教程](https://wiki.seeedstudio.com/Seeeduino-XIAO/#software)**来完成添加。
  - 如果您想在后续的步骤中使用**Seeed Studio XIAO RP2040**，请参考**[这个教程](https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino/#software-setup)**来完成添加。
  - 如果您想在后续的步骤中使用**Seeed Studio XIAO nRF52840**，请参考**[这个教程](https://wiki.seeedstudio.com/XIAO_BLE/#software-setup)**来完成添加。
  - 如果您想在后续的步骤中使用**Seeed Studio XIAO ESP32C3**，请参考**[这个教程](https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started#software-setup)**来完成添加。
  - 如果您想在后续的步骤中使用**Seeed Studio XIAO ESP32S3**，请参考**[这个教程](http://wiki.seeedstudio.com/xiao_esp32s3_getting_started#software-preparation)**来完成添加。

:::tip提示
本教程将以XIAO ESP32C3为例进行说明。
:::

**步骤 3.** 将传感器连接到XIAO，并使用USB-C型电缆将XIAO连接到电脑。

**步骤 4.** 打开已下载的**HLKRadarTool**应用程序，并为传感器配置适当的波特率。

打开应用程序后，应用程序会搜索附近的雷达设备。设备的广播名称为**HLK-LD2410_xxxx**（xxxx是MAC地址的最后四位）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/6.png" style={{width:500, height:'auto'}}/></div>

在软件右上角的“更多”选项中，您可以访问设置菜单，为传感器设置自定义参数和功能。请将传感器的波特率设置为**9600**并保存。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/15.png" style={{width:400, height:'auto'}}/></div>

等待传感器重启后。

**步骤 5.** 添加必要的库。

除了需要添加到Arduino环境中的传感器库之外，如果您使用的是**ESP32系列的XIAO**，则可能需要单独安装软串行端口库，以便能够使用提供的示例。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/plerup/espsoftwareserial">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 示例 1. 基本模式输出

在第一个程序示例中，我们将解析传感器报告的一般信息。这将代表该产品的主要功能信息输出。例如，关于人体存在、运动、距离等的数据。

```cpp
#if defined(ARDUINO_SEEED_XIAO_NRF52840_SENSE) || defined(ARDUINO_SEEED_XIAO_NRF52840)
#error "XIAO nRF52840 please use the non-mbed-enable version."
#endif

#include <SoftwareSerial.h>
#include <mmwave_for_xiao.h>

// 定义SoftwareSerial对象，将D2作为RX（接收），D3作为TX（发送），连接到毫米波传感器的串行端口
SoftwareSerial COMSerial(D2, D3);

// 创建一个全局的Serial对象用于打印调试信息
#define ShowSerial Serial

// 初始化雷达配置
// 使用COMSerial作为通信串行端口，ShowSerial作为显示串行端口，初始化Seeed_HSP24雷达配置。
Seeed_HSP24 xiao_config(COMSerial);

Seeed_HSP24::RadarStatus radarStatus;

void setup() {
  COMSerial.begin(9600);
  ShowSerial.begin(9600);
  delay(500);

  ShowSerial.println("Programme Starting!");

  xiao_config.disableEngineeringModel();
}

void loop() {
  int retryCount = 0;
  const int MAX_RETRIES = 10;  // 防止无限循环时的最大重试次数

  //获取雷达状态
  do {
    radarStatus = xiao_config.getStatus();
    retryCount++;
  } while (radarStatus.targetStatus == Seeed_HSP24::TargetStatus::ErrorFrame && retryCount < MAX_RETRIES);

  //解析雷达状态并从调试串行端口打印结果
  if (radarStatus.targetStatus != Seeed_HSP24::TargetStatus::ErrorFrame) {
    ShowSerial.print("Status: " + String(targetStatusToString(radarStatus.targetStatus)) + " ---- ");
    ShowSerial.println("Distance: " + String(radarStatus.distance) + "  Mode: " + String(radarStatus.radarMode));
  }
  delay(200);
}

// 解析获取的雷达状态
const char* targetStatusToString(Seeed_HSP24::TargetStatus status) {
  switch (status) {
    case Seeed_HSP24::TargetStatus::NoTarget:
      return "NoTarget";
    case Seeed_HSP24::TargetStatus::MovingTarget:
      return "MovingTarget";
    case Seeed_HSP24::TargetStatus::StaticTarget:
      return "StaticTarget";
    case Seeed_HSP24::TargetStatus::BothTargets:
      return "BothTargets";
    default:
      return "Unknown";
  }
}
```

编译并上传程序后，打开串行监视器并将波特率设置为9600。如果一切顺利，您应该看到以下结果输出。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/16.png" style={{width:700, height:'auto'}}/></div>

### 示例 2. 工程模式输出
在第二个示例程序中，我们将打开传感器的工程数据上传功能，并解析这些工程信息。与基础模式相比，工程信息包含更多不同距离门限的运动能量值和静态能量值。这些值的显示允许您可视化当前环境中的动态和静态能量变化，使您更容易根据实际情况调整传感器的触发条件，以确定是否有人存在、静止或处于运动中。

```cpp
#if defined(ARDUINO_SEEED_XIAO_NRF52840_SENSE) || defined(ARDUINO_SEEED_XIAO_NRF52840)
#error "XIAO nRF52840 please use the non-mbed-enable version."
#endif
#include <SoftwareSerial.h>
#include <mmwave_for_xiao.h>
// 定义SoftwareSerial对象，将D2作为RX（接收），D3作为TX（发送），连接到毫米波传感器的串行端口。
SoftwareSerial COMSerial(D2, D3);
// 创建一个全局的Serial对象，用于打印调试信息。
#define ShowSerial Serial
// 初始化雷达配置。
// 为 Seeed_HSP24 雷达进行 xiao_config 配置，使用 COMSerial 作为通信串行端口，ShowSerial 用于显示串行端口。
Seeed_HSP24 xiao_config(COMSerial);
Seeed_HSP24::RadarStatus radarStatus;
void setup() {
  COMSerial.begin(9600);
  ShowSerial.begin(9600);
  delay(500);
  ShowSerial.println("Programme Starting!");
  xiao_config.enableEngineeringModel();
}
void loop() {
  int retryCount = 0;
  const int MAX_RETRIES = 10;  // 为防止无限循环而设置的最大重试次数
  //获取雷达状态
  do {
    radarStatus = xiao_config.getStatus();
    retryCount++;
  } while (radarStatus.targetStatus == Seeed_HSP24::TargetStatus::ErrorFrame && retryCount < MAX_RETRIES);
  //解析雷达的状态，并将解析得到的结果通过调试串行端口打印输出。
  if (radarStatus.targetStatus != Seeed_HSP24::TargetStatus::ErrorFrame) {
    ShowSerial.print("Status: " + String(targetStatusToString(radarStatus.targetStatus)) + "  ----   ");
    ShowSerial.println("Distance: " + String(radarStatus.distance) + "  Mode: " + String(radarStatus.radarMode));
    
    if (radarStatus.radarMode == 1) {
      ShowSerial.print("Move:");
      for (int i = 0; i < 9; i++) {
        ShowSerial.print(" " + String(radarStatus.radarMovePower.moveGate[i]) + ",");
      }
      ShowSerial.println("");
      ShowSerial.print("Static:");
      for (int i = 0; i < 9; i++) {
        ShowSerial.print(" " + String(radarStatus.radarStaticPower.staticGate[i]) + ",");
      }
      ShowSerial.println("");
      ShowSerial.println("Photosensitive: " + String(radarStatus.photosensitive));
    }
  }
  delay(100);
}
// 解析获取的雷达状态
const char* targetStatusToString(Seeed_HSP24::TargetStatus status) {
  switch (status) {
    case Seeed_HSP24::TargetStatus::NoTarget:
      return "NoTarget";
    case Seeed_HSP24::TargetStatus::MovingTarget:
      return "MovingTarget";
    case Seeed_HSP24::TargetStatus::StaticTarget:
      return "StaticTarget";
    case Seeed_HSP24::TargetStatus::BothTargets:
      return "BothTargets";
    default:
      return "Unknown";
  }
}
```

编译并上传程序后，打开串行监视器并将波特率设置为9600。如果一切顺利，您应该看到以下结果输出。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/17.png" style={{width:800, height:'auto'}}/></div>

### 示例 3. 其他配置查询和恢复出厂设置

在第三个示例中，我们提供了一种恢复传感器设置的方法以及使用参数查询功能的其他示例。

:::caution警告

特别需要注意的是，当传感器恢复到出厂设置时，这也意味着传感器的波特率将被恢复为**256000**。在使用其他XIAO程序之前，您需要按照之前的步骤在您的手机APP上将波特率重新设置为**9600**。
:::

```cpp
#if defined(ARDUINO_SEEED_XIAO_NRF52840_SENSE) || defined(ARDUINO_SEEED_XIAO_NRF52840)
#error "XIAO nRF52840 please use the non-mbed-enable version."
#endif

#include <SoftwareSerial.h>
#include <mmwave_for_xiao.h>

// 定义SoftwareSerial对象，将D2作为RX（接收），D3作为TX（发送），连接到毫米波传感器的串行端口。
SoftwareSerial COMSerial(D2, D3);

// 创建一个全局的Serial对象，用于打印调试信息
#define ShowSerial Serial

// 初始化雷达配置
// Seeed_HSP24 的 xiao_config 函数使用 COMSerial 作为通信串行端口，ShowSerial 用于显示串行端口。
Seeed_HSP24 xiao_config(COMSerial);

Seeed_HSP24::RadarStatus radarStatus;

void setup() {
  COMSerial.begin(9600);
  ShowSerial.begin(9600);
  while(!ShowSerial);                   // 打开串行监视器并开始执行
  delay(500);

  ShowSerial.println("Programme Starting!");

  ShowSerial.print("Sensor Software Version: ");
  ShowSerial.println(xiao_config.getVersion());

  radarStatus = xiao_config.getConfig();
  if (radarStatus.detectionDistance != -1) {
    ShowSerial.println("Detection Distance: " + String(radarStatus.detectionDistance) + " m ");
    ShowSerial.println("Moveing Set Distance: " + String(radarStatus.moveSetDistance) + " m ");
    ShowSerial.println("Static Set Distance: " + String(radarStatus.staticSetDistance) + " m ");
    ShowSerial.println("No Target Duration Time: " + String(radarStatus.noTargrtduration) + " seconds ");
  }
  else ShowSerial.println("Failed to get configuration information, please retry.");

  /*** 在恢复或重置为出厂设置后，请在使用XIAO之前重新将波特率修改为9600！
   * */
  xiao_config.refactoryRadar();
//   xiao_config 对象的 rebootRadar 方法（或函数）。                // 重启传感器
}

void loop() {}
```
这个程序将在您打开串行监视器后执行重置操作。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/18.png" style={{width:600, height:'auto'}}/></div>

## 故障排除
### 问题1：我正在使用XIAO nRF52840（Sense），我应该选择哪个开发板版本？
您应该使用XIAO nRF52840开发板包的非mbed版本，因为它包含了程序所需的软件串行端口库。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/19.png" style={{width:800, height:'auto'}}/></div>

### 问题2：为什么我会遇到丢帧和传感器数据流乱码的情况？
这最有可能是因为你没有修改传感器的波特率。这款产品的出厂固件默认波特率是256000。XIAO的软件串行端口可能无法处理这么高的数据流速度，导致程序可能异常卡住，无法正确解析数据帧。因此，请降低波特率后再使用程序。我们推荐使用**9600**的波特率。
### 问题3：为什么在使用Demo2时数据流会有1~2秒的延迟？
这可能是正常现象，工程模式下的数据流较大，软件串行端口占用CPU处理数据的能力有限，因此会不时地暂停一下。
## 技术支持与产品讨论
感谢您选择我们的产品！我们在这里为您提供各种支持，以确保您使用我们的产品时能够拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。
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