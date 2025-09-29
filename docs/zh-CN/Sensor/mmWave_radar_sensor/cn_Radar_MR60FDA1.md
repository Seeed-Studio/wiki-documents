---
description: 60GHz 毫米波跌倒检测专业版
title: 60GHz 毫米波跌倒检测专业版
keywords:
- mmWave_radar_sensor
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Radar_MR60FDA1
last_update:
  date: 03/03/2023
  author: Citric
---
# 60GHz 毫米波传感器 - 跌倒检测模块专业版 (MR60FDA1)

<div align="center"><img src="https://files.seeedstudio.com/wiki/60GHzradar/newpic.png"  style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Fall-Detection-Module-Pro-p-5375.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 介绍

60GHz 毫米波雷达传感器 - 跌倒检测模块专业版采用 FMCW 检测理论，实现高精度同时检测人体活动，包括移动、跌倒和静止状态，提供完全私密和安全的环境，不受其他噪声干扰的影响。它是私人财产监控、跌倒预警、老年人健康护理的标准生物雷达系统，在家庭、酒店以及医院中表现出色。在本 wiki 中，我们将向您介绍如何使用它。

### 应用

- 智能家居
- 健康护理
- 跌倒检测
- 智能酒店
- 医疗助手

### 特性

- 启用理论：基于 60GHz FM 连续波信号实现雷达检测
- 增强检测算法：在自适应环境中感知并同时输出人体活动，包括移动、跌倒和静止状态
- 完美隐私保护：应用 FMCW 监控技术提供无需身份识别的监控能力
- 健康友好的工作状态：输出功率低至对人体无害
- 高稳定性：不受温度、湿度、噪声、气流、灰尘、光线和其他环境因素影响
- 高测量精度：跌倒检测精度达到 90%，存在感知功能精度达到 90%
- 高灵活性硬件设计雷达：支持二次开发，适应各种场景应用

### 规格

| 检测角度和距离      |  最小值 |  典型值 |  最大值 |  单位 |
|-----------------------------------|----------|----------|----------|-------|
| **内容 最小值 典型值 最大值 单位**  |          |          |          |       |
| 人员移动检测半径 [1] |       |     6     |         |  米    |
|  跌倒监控半径 [2] |          |   3    |          |  米   |
|  雷达检测角度（水平）   |          |  60      |          |  度    |
|  雷达检测角度（俯仰）                     |         |    60      |        |  度    |
|  注：[1][2] 雷达悬挂高度 2.8 米，雷达投影半径。             |          |          |
|  **电气特性**             |          |          |          |       |
|  工作电压 (VCC)          |  4.5     |  5       |  6       |  V    |
|  工作电流 (ICC)          |   90       |  93     |  100        |  mA   |
|  工作温度 (TOP)      |  -20     |          |  60      |  ℃    |
|  存储温度 (TST)        |  -40     |          |  80      |  ℃    |
|  **RF 性能**                |          |          |          |       |
|  工作频率 (fTX)        |  58      |        |  63.5    |  GHz  |
|  发射功率 (Pout)         |          |         |     6     |  dBm  |

## 硬件概述

在一切开始之前，了解产品的一些基本参数是非常重要的。下表提供了60GHz毫米波传感器 - 跌倒检测专业版模块特性的信息。

<div align="center"><img width ="300" src="https://files.seeedstudio.com/wiki/60GHzradar/pinout3.png"/></div>

- 接口1：
  - 5V引脚是传感器的电源接口。
  - RX和TX是传感器的数据传输接口。RX表示串行接收，TX表示串行发送。
  - 人体存在状态输出接口。您可以使用这两个引脚的电平来判断环境中当前的人体运动状态。
    - GP2输出：高电平 - 有人，低电平 - 无人。
    - GP1输出：高电平 - 活动，低电平 - 静止。
- 接口2：
  - 刷写固件引脚：GND/3.3V/SWD/SWC。
  - 预留输入/输出引脚：GP3~GP6。

## 入门指南

### 固件版本更新

毫米波传感器经过了长期的技术沉淀和用户提供的宝贵建议，我们一直在对原有产品进行迭代，以提供更准确可靠的监测结果和更好的用户体验。

新出货的传感器默认搭载最新固件，以确保最新的产品体验。但是，为了老用户的体验，我们在此提供最新固件和更新方法，确保您能够使用我们的最新技术。

#### 通用方法 - 使用J-link烧录固件

如果您遇到固件错误或雷达异常、固件故障等问题，使用此方法重新刷写固件是最有效的方式。

**最新固件下载**

| 固件版本 | 下载地址 |
|:----------------:|:----------------:|
| Jlink_MR60FDA1-V0821.bin | [下载](https://files.seeedstudio.com/wiki/60GHzradar/Jlink_MR60FDA1-230821.bin) |
| Jlink_MR60FDA1-V0728.bin | [下载](https://files.seeedstudio.com/wiki/60GHzradar/Jlink_MR60FDA1-V0728.bin) |
| Jlink_MR60FDA1-V114.bin | [下载](https://files.seeedstudio.com/wiki/60GHzradar/Jlink_MR60FDA1-V114.bin) |

:::caution

1. 请仔细检查您产品的功能，请不要与其他毫米波传感器混用来刷写此固件，否则可能导致产品功能异常，后果需要您自行承担！

2. 还请注意，不同的固件更新方式使用不同的固件内容，您正在下载的是通过**J-link**烧录的固件。

:::

**将您的雷达更新到最新版本**

**步骤1.** 您需要准备一个**Jlink**和**MR60FDA1** 60GHz毫米波传感器。

通过杜邦线将雷达和Jlink连接在一起，如下图所示。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/57.jpg"/></div>

**步骤2.** 下载必要的软件和固件。

| 文件 | 下载地址 |
|:----------------:|:----------------:|
| JlinkV644e.rar | [下载](https://files.seeedstudio.com/wiki/60GHzradar/JlinkV644e.rar) |
| Pack_Segger_AT32F4xx_v1.3.3.zip | [下载](https://files.seeedstudio.com/wiki/60GHzradar/Pack_Segger_AT32F4xx_v1.3.3.zip)

**步骤3.** 解压**JlinkV644e.rar**并打开其中的**JLink_Windows_V644e.exe**文件。

按照默认选项安装即可。安装完成后，启动**J-Flash V6.44e**软件。

**步骤4.** 安装芯片包。

解压**Pack_Segger_AT32F4xx_v1.3.3.zip**并打开其中的**Segger_AT32F4xx_AddOn.exe**。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/47.png"/></div>

**步骤5.** 创建新项目。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/48.png"/></div>

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/49.png"/></div>

找到并选择**AT32F403ARGT7**。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/50.png"/></div>

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/51.png"/></div>

**步骤6.** 将雷达固件（.bin文件）拖拽到此软件中，会弹出一个窗口，我们使用其默认起始地址0x8000000即可。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/52.png"/></div>

**步骤7.** 点击**Target** -> **Connect**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/53.png"/></div>

连接成功时会显示Connected successfully。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/60GHzradar/54.png"/></div>

擦除固件：**Target** -> **manual Programming** -> **Erase Chip**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/55.png"/></div>

升级固件：**Target** -> **manual Programming** -> **Program & Verify**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/56.png"/></div>

至此，固件更新完成。

#### 通过UART更新固件

考虑到J-link价格昂贵，对于绝大多数只需要更新雷达固件的用户来说，购买J-link过于奢侈，因此我们提供通过UART的更新方法。

**最新固件下载**

| 固件版本 | 下载地址 |
|:----------------:|:----------------:|
| UART_MR60FDA1-230821.bin | [下载](https://files.seeedstudio.com/wiki/60GHzradar/UART_MR60FDA1-230821.bin) |
| UART_MR60FDA1-230728.bin | [下载](https://files.seeedstudio.com/wiki/60GHzradar/UART_MR60FDA1-230728.bin) |
| UART_MR60FDA1-230227.bin | [下载](https://files.seeedstudio.com/wiki/60GHzradar/new_res/UART_MR60FDA1-230227.bin) |
| UART_MR60FDA1-230915.bin | [下载](https://files.seeedstudio.com/wiki/60GHzradar/new_res/UART_MR60FDA1-230915.bin) |

:::caution

1. 请仔细检查您产品的功能，请不要与其他毫米波传感器混用来刷写此固件，否则可能导致产品功能异常，后果需要您自行承担！

2. 还请注意，不同的固件更新方式使用不同的固件内容，您下载的是通过 **UART** 烧录的固件。

3. 在使用 UART 升级固件之前，请确保您的雷达固件版本**至少为 G60FD1SYv010102 版本**，否则可能会导致雷达失效，此时您必须使用 J-link 烧录固件才能使用！

您可以通过向雷达发送命令 `0x53 0x59 0x02 0xA4 0x00 0x01 0x0F 0x62 0x54 0x43` 来查询固件版本号信息。然后雷达上报的数据以字符串形式显示，您将看到类似下图所示的效果。

`G60FD1SYv010104` 是雷达上报的型号，其中 `010104` 是版本号。这意味着该传感器支持 UART 升级。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/19.png"/></div>
:::

**将您的雷达更新到最新版本**

**步骤 1**. 您需要准备一个 **UART 转 USB** 和 **MR60FDA1** 60GHz 毫米波传感器。

通过杜邦线将雷达和 UART 转 USB 连接在一起，如下图所示。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/uart.png"/></div>

**步骤 2**. 下载必要的软件和固件。

| 文件 | 下载地址 |
|:----------------:|:----------------:|
| PackageMake-v1.1.1.zip | [下载](https://files.seeedstudio.com/wiki/60GHzradar/new_res/PackageMake-v1.1.1.zip) |

**步骤 3**. 解压 PackageMake-v1.1.1.zip 包并打开其中的 PackageMake-v1.1.1.exe 文件。

将连接传感器的 UART 转 USB 连接到计算机，点击软件左上角的齿轮图案，选择端口号，将波特率设置为 115200，然后点击右下角确认。（如果找不到端口号，请检查连接，然后点击左下角的刷新按钮重试）

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/11.png"/></div>

**步骤 4**. 连接传感器

按照上述方法完成串口设置后，点击右上角第二个图标，如果端口选择正确，您将看到雷达的原始数据被打印出来。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/12.png"/></div>

**步骤 5**. 更新固件

用鼠标左键点击右上角最后一个图标，这将弹出一个选择固件的窗口。请选择您已下载的固件版本。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/13.png"/></div>

选择完成后，所选文件路径将出现在软件下方，请仔细检查所选固件版本和型号是否与您使用的传感器一致。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/14.png"/></div>

要升级固件，请用鼠标左键双击软件左上角的最后一个图标，然后固件将开始下载到传感器。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/15.png"/></div>

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/16.png"/></div>

等待进度条完成，固件更新即完成。

### 上位机的使用

通过 **UART 转 USB** 设备将传感器直接连接到计算机的 USB 端口。接线如下表所示。

<table align="center">
 <tr>
     <td colspan="4"><div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/60GHzradar/uart.png"/></div></td>
 </tr>
 <tr>
     <td align="center">UART 转 USB</td>
     <td align="center"></td>
        <td align="center">MR60FDA1 传感器</td>
 </tr>
 <tr>
     <td align="center">5V</td>
     <td align="center">--></td>
        <td align="center">5V</td>
 </tr>
 <tr>
     <td align="center">GND</td>
     <td align="center">--></td>
        <td align="center">GND</td>
 </tr>
  <tr>
     <td align="center">RX</td>
     <td align="center">--></td>
        <td align="center">TX</td>
 </tr>
  <tr>
     <td align="center">TX</td>
     <td align="center">--></td>
        <td align="center">RX</td>
 </tr>
</table>

除了上述提到的串口软件，您还可以直接使用为雷达设计的[上位机软件](https://files.seeedstudio.com/wiki/60GHzradar/Fall_detection_radar.zip)。

以下两个部分解释了软件各部分的作用。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/10.png"/></div>

- **工作区域**

    上位机的所有功能仅在工作区域中显示。显示的主要内容集中在工作区的顶部。

    **Station：** 显示是否有人存在、移动或静止。

    **Fall state：** 跌倒状态将以人物动画的形式呈现。图中的状态为无跌倒，如果有人跌倒，将显示人物跌倒的动画图片。

    **Settings：** 用于设置传感器连接到PC的端口号。通常，当传感器通过UART转USB连接到计算机时，您需要点击**Refresh**按钮刷新端口，然后选择新出现的端口号，接着点击**Open**按钮，最后点击**Start**按钮启用监控功能。

    **Installing height/cm：** 指安装高度。为确保跌倒检测的准确性，请按以下要求准确安装传感器。请安装在顶部！雷达应垂直安装，水平偏差角度≤5°，以确保雷达主波束覆盖检测区域；雷达安装高度建议为2m≤H≤3m。雷达前方无明显障碍物和遮挡物。受雷达安装高度和雷达波束范围影响，此安装模式下移动人体检测的最大半径为R3≈3米；静止人体检测的最大半径为R2≈2.25米；跌倒检测半径为R1≤2米。

    例如，如果我的安装高度是2.6米，那么我应该填入260并点击**Send**按钮。

- **无效区域**

    此区域目前不会工作，仅作为预留接口。

:::caution
此雷达目前不支持距离、速度或点云！
:::

## 使用Arduino进行传感器开发

### Arduino库概述

:::tip
如果这是您第一次使用Arduino，我们强烈建议您参考[Arduino入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

本示例中使用的库代码可以通过点击下面的图标下载。

<p style={{textAlign: 'center'}}><a href="https://github.com/limengdu/Seeed-Studio-MR60FDA1-Sersor" target="_blank"><div align="center"><img width ="300" src="https://files.seeedstudio.com/wiki/seeed_logo/DOWNLOAD.png" /></div></a></p>

### 功能

在我们开始开发草图之前，让我们看看库的可用功能。

- `void recvRadarBytes()` —— 此函数根据传感器数据协议中的帧头和帧尾，通过UART收集传感器报告的数据帧。与`showData()`函数配合使用，可以通过串口打印出收集的数据信息。

  - **输入参数：** 无

  - **返回值：** 无

- `void showData()` —— 此函数用于通过串口一次性打印出传感器报告的完整数据帧，需要与`recvRadarBytes()`函数配合使用。

  - **输入参数：** 无

  - **返回值：** 无

- `void HumanExis_Func()` —— 此函数负责解析传感器的数据帧，并输出人体存在状态的相关数据。

  - **输入参数：** 无

  - **返回值：**

    - `unsigned int sensor_report` —— 返回值表示解析的数据帧属于哪个状态类别。具体类别可在**默认变量**部分找到。人体运动信息仅在发生变化时报告。

    - `int bodysign_val` —— 返回值表示人体运动参数的值。此值每秒报告一次。

- `void Fall_Detection()` —— 此函数用于解析和返回跌倒检测。检测结果存储在变量sensor_report中。

  - **输入参数：** 无

  - **返回值：** - `unsigned int sensor_report` —— 返回值表示解析的数据帧属于哪个状态类别。具体类别可在**默认变量**部分找到。跌倒信息仅在发生变化时报告。

- `void send_func(const unsigned char* buff, int len, bool cyclic /*=false*/)` —— 此函数用于发送查询帧和命令帧。

  - **输入参数：**

    - `buff` —— 您想要发送给传感器的数据帧。

    - `len` —— 您想要发送给传感器的数据帧长度。

    - `cyclic` —— 循环发送开关。默认为false，如果您希望循环发送此数据帧，可以设置为**true**。

  - **返回值：** 无

- `void reset_func()` —— 此函数用于重置传感器。

  - **输入参数：** 无

  - **返回值：** 无

### 默认变量

```c
#define MESSAGE_HEAD1 0x53      //Data frame header1
#define MESSAGE_HEAD2 0x59      //Data frame header2

#define MESSAGE_END1  0x54      //End1 of data frame
#define MESSAGE_END2  0x43      //End2 of data frame

#define HUMAN_PSE_RADAR 0x80    //Human presence data

#define PRESENCE_INF 0x01       //Presence Information
#define SOMEONE_HERE 0x01       //Someone here
#define NOONE_HERE 0x00         //Noone here

#define MOVE_INF 0x02           //Campaign Information
#define PSE_NONE 0x00           //None
#define STATIONARY 0x01         //A person is stationary
#define MOVEMENT 0x02           //A person in motion

#define BODY_SIG 0x03           //Body movement information

#define MOVE_DIS 0x0E           //Determine the distance at which the movement occurs

#define FALL_DETECTION 0x83     //Fall data markers

#define FALL_STATE 0x01         //Fall status marker
#define NO_FALL 0x00            //No falls detected
#define FALLING 0x01            //Fall detected

#define RESIDENT_STATE 0x05     //Resident status
#define NO_RESIDENT 0x00        //No stationary residency
#define RESIDENT 0x01           //There is a stationary residency

#define reset_frame_len 10      //Reset data frame length
//Reset data frame
const unsigned char fall_reset_frame[10] = {0x53, 0x59, 0x01, 0x02, 0x00, 0x01, 0x0F, 0xBF, 0x54, 0x43};

//Return status, Use in arduino
#define NOONE 0x01
#define SOMEONE 0x02
#define NONEPSE 0x03
#define STATION 0x04
#define MOVE 0x05
#define BODYVAL 0x06
#define MOVEDIS 0x07

#define NOFALL 0x08
#define FALL 0x09
#define NORESIDENT 0x10
#define RESIDENCY 0x11

unsigned int sensor_report = 0, bodysign_val = 0, total_detect = 0, height_0005 = 0, height_0510 = 0, height_1015 = 0, height_1520 = 0;
```

### 安装

**步骤 1.** 您需要安装 Arduino 软件。

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></div></a></p>

**步骤 2.** 启动 Arduino 应用程序。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"/></div>

**步骤 3.** 选择您的开发板型号并将其添加到 Arduino IDE 中。

- 如果您想在后续教程中使用 **Seeeduino V4.2**，请参考[此教程](https://wiki.seeedstudio.com/cn/Seeed_Arduino_Boards/)完成添加。

- 如果您想在后续教程中使用 **Seeeduino XIAO**，请参考[此教程](https://wiki.seeedstudio.com/cn/Seeeduino-XIAO/#software)完成添加。

- 如果您想在后续教程中使用 **XIAO RP2040**，请参考[此教程](https://wiki.seeedstudio.com/cn/XIAO-RP2040-with-Arduino/#software-setup)完成添加。

- 如果您想在后续教程中使用 **XIAO BLE**，请参考[此教程](https://wiki.seeedstudio.com/cn/XIAO_BLE/#software-setup)完成添加。

- 如果您想在后续教程中使用 **XIAO ESP32C3**，请参考[此教程](https://wiki.seeedstudio.com/cn/XIAO_ESP32C3_Getting_Started/#software-setup)完成添加。

:::caution
对于 **XIAO nRF52840**，请选择 **Seeed nRF52 mbed-enabled Boards**，否则运行程序时可能会报错。
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/XIAO-BLE/SeeednRFmbed.png"/></div>
:::

**步骤 4.** 安装 Arduino 代码库。

首先从 [GitHub](https://github.com/limengdu/Seeed-Studio-MR60FDA1-Sersor) 获取代码库并下载到您的本地计算机。

由于您已经下载了 zip 库文件，请打开您的 Arduino IDE，点击 **Sketch > Include Library > Add .ZIP Library**。选择您刚刚下载的 zip 文件，如果库安装正确，您将在通知窗口中看到 **Library added to your libraries**。这意味着库已成功安装。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png"/></div>

## Arduino 示例

现在我们已经安装了库并了解了基本功能，让我们为 XIAO BLE 运行一些示例，看看它的表现如何。

### 所需材料

在完成以下示例之前，您需要准备以下材料。

|              |              |              |
|:--------------:|:--------------:|:--------------:|
|<div align="center"><img width ="210" src="https://files.seeedstudio.com/wiki/60GHzradar/newpic.png"/></div>| <div align="center"><img width ="210" src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg"/></div>| <div align="center"><img width ="150" src="https://files.seeedstudio.com/wiki/60GHzradar/dupont.jpg"/></div>|
|[**60GHz 毫米波雷达传感器**](https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Fall-Detection-Module-Pro-p-5375.html)|[**Seeed XIAO BLE nRF52840 Sense**](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html?queryID=4bbd8c09f20216aa26f6b5a9040504d0&objectID=5253&indexName=bazaar_retailer_products)|**2mm 到 2.54mm 间距排线**|

**步骤 1.** 通过主板将设备连接到计算机。接线图如下表所示。

<table align="center">
 <tr>
     <td colspan="4"><div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/60GHzradar/30.png"/></div></td>
 </tr >
 <tr >
     <td align="center">Seeed Studio XIAO nRF52840</td>
     <td align="center"></td>
        <td align="center">MR60FDA1 传感器</td>
 </tr>
 <tr>
     <td align="center">5V</td>
     <td align="center">--></td>
        <td align="center">5V</td>
 </tr>
 <tr>
     <td align="center">GND</td>
     <td align="center">--></td>
        <td align="center">GND</td>
 </tr>
  <tr>
     <td align="center">RX</td>
     <td align="center">--></td>
        <td align="center">D6</td>
 </tr>
  <tr>
     <td align="center">TX</td>
     <td align="center">--></td>
        <td align="center">D7</td>
 </tr>
</table>

**步骤 2.** 在 Arduino IDE 左上角的菜单栏中，选择**工具**，选择您正在使用的开发板类型，并选择相应的串口。

:::tip
如果您使用的是 **MacOS**，设备的串口名称通常以 **/dev/cu.usbmodem xxx** 开头，以设备名称结尾。如果您使用的是 **Windows**，设备的串口名称通常以 **COM** 开头，同样以设备名称结尾。
:::

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/60GHzradar/3.png"/></div>

在这个示例中，我们将演示雷达如何与我们的热门产品 XIAO BLE 配合工作。

### 演示1 原始数据导出

这个示例将指导您完成通过串口打印传感器报告的原始数据的过程。

以下示例程序位于库的示例文件夹中，名为 **MR60FDA1_print_rawdata**。

```c
#include "Arduino.h"
#include <60ghzfalldetection.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//FallDetection_60GHz radar = FallDetection_60GHz(&mySerial);

// can also try hardware serial with
FallDetection_60GHz radar = FallDetection_60GHz(&Serial1);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Readly");
}

void loop()
{
  // put your main code here, to run repeatedly:
  radar.recvRadarBytes();           //Receive radar data and start processing
  radar.showData();                 //Serial port prints a set of received data frames
  delay(200);                       //Add time delay to avoid program jam
}
```

:::tip
如果您使用的是 XIAO ESP32 系列，并且毫米波雷达没有数据反馈。您可以尝试将上面的代码从 ```Serial1.begin(115200);``` 改为 ```Serial1.begin(115200, SERIAL_8N1, D7, D6);```。
:::

在这个程序中，我们使用 XIAO nRF52840 的硬件 **Serial1** 端口连接到传感器，并使用硬件 **Serial** 端口 Serial 输出数据，因此我们需要在初始化函数 `Setup()` 中单独初始化这个串口。

在主 `loop()` 函数中，我们使用函数 `recvRadarBytes()` 从传感器接收数据帧，然后使用 `showData()` 函数通过串口打印出接收到的数据帧。

在这个程序中，需要注意的是，每两个数据帧的接收和输出之间都有一个间隔，以避免主板出现阻塞。这个时间不应少于 **150ms**。

这意味着主板无法接收传感器报告的所有数据帧，但由于传感器报告的帧数非常大且频繁，这不会影响使用传感器判断环境的准确性。

上传程序。将串口监视器的波特率设置为 115200 应该会显示结果。输出应该类似于下图所示。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/7.png"/></div>

### 演示2：人体存在检测功能的使用

在这个示例中，我们将解释如何使用人体存在检测功能，并通过串口监视器打印出该功能中所有值的信息。

以下示例程序位于库的 examples 文件夹中，名为 **MR60FDA1_human_existence_inf_output**。

```c
#include "Arduino.h"
#include <60ghzfalldetection.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//FallDetection_60GHz radar = FallDetection_60GHz(&mySerial);

// can also try hardware serial with
FallDetection_60GHz radar = FallDetection_60GHz(&Serial1);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Readly");
}

void loop()
{
  // put your main code here, to run repeatedly:
  radar.HumanExis_Func();           //Human existence information output
  if(radar.sensor_report != 0x00){
    switch(radar.sensor_report){
      case NOONE:
        Serial.println("Nobody here.");
        Serial.println("----------------------------");
        break;
      case SOMEONE:
        Serial.println("Someone is here.");
        Serial.println("----------------------------");
        break;
      case NONEPSE:
        Serial.println("No human activity messages.");
        Serial.println("----------------------------");
        break;
      case STATION:
        Serial.println("Someone stop");
        Serial.println("----------------------------");
        break;
      case MOVE:
        Serial.println("Someone moving");
        Serial.println("----------------------------");
        break;
      case BODYVAL:
        Serial.print("The parameters of human body signs are: ");
        Serial.println(radar.bodysign_val, DEC);
        Serial.println("----------------------------");
        break;
    }
  }
  delay(200);                       //Add time delay to avoid program jam
}
```

:::tip
如果您使用的是 XIAO ESP32 系列，并且毫米波雷达没有数据反馈。您可以尝试将上面的代码从 ```Serial1.begin(115200);``` 更改为 ```Serial1.begin(115200, SERIAL_8N1, D7, D6);```。
:::

在这个示例中，检测人体存在的功能由 `HumanExis_Func()` 函数实现。程序实现的基本逻辑是 `HumanExis_Func()` 函数将传感器报告的状态信息分配给 `sensor_report` 变量。基于 `sensor_report` 的值，我们然后通过串口打印出该状态下的所有值。

请注意，`sensor_report` 对应于缩进下串口的数据输出。例如，代表符号参数的 `bodysign_val` 变量仅在 `sensor_report` 为 `BODYVAL` 时有效，在传感器报告的其他 `sensor_reports` 中不存在。

上传程序。将串口监视器的波特率设置为 115200 应该会显示结果。输出应该类似于下面的图像。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/8.png"/></div>

### 示例3：人体跌倒检测

在这个示例中，我们将使用 `Fall_Detection()` 函数来检测人体跌倒。

:::tip
跌倒状态输出的原理是只有当传感器检测到跌倒状态发生变化时才有内容输出。
:::

以下示例程序位于库的示例文件夹中，名为 **MR60FDA1_Fall_detection**。

```c
#include "Arduino.h"
#include <60ghzfalldetection.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//FallDetection_60GHz radar = FallDetection_60GHz(&mySerial);

// can also try hardware serial with
FallDetection_60GHz radar = FallDetection_60GHz(&Serial1);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Readly");
}

void loop()
{
  // put your main code here, to run repeatedly:
  radar.Fall_Detection();           //Receive radar data and start processing
  if(radar.sensor_report != 0x00){
    switch(radar.sensor_report){
        case NOFALL:
            Serial.println("The sensor detects this movement is not a fall.");
            Serial.println("----------------------------");
            break;
        case FALL:
            Serial.println("The sensor detects a fall.");
            Serial.println("----------------------------");
            break;
        case NORESIDENT:
            Serial.println("The sensors did not detect anyone staying in place.");
            Serial.println("----------------------------");
            break;
        case RESIDENCY:
            Serial.println("The sensor detects someone staying in place.");
            Serial.println("----------------------------");
            break;
    }
  }
  delay(200); //Add time delay to avoid program jam
}
```

:::tip
如果您使用的是 XIAO ESP32 系列，并且毫米波雷达没有数据反馈。您可以尝试将上面的代码从 ```Serial1.begin(115200);``` 改为 ```Serial1.begin(115200, SERIAL_8N1, D7, D6);```。
:::

在跌倒检测功能中，还有一个驻留检测功能。该功能的主要作用是辅助用户或传感器判断人体是否跌倒。当垂直方向加速度发生剧烈变化后，一段时间内没有人体活动（即停留在原地），传感器很有可能判断有人跌倒并失去意识。

### Demo4: 向传感器发送数据

根据用户手册中提供的详细信息，用户可以根据实际需要向传感器发送命令帧，以查询或设置传感器的某些状态或模式。

传感器库示例文件夹中名为 **MR60FDA1_Send_frame** 的 .ino 文件向我们展示了如何发送查询设备 ID 的程序到传感器。

```c
#include "Arduino.h"
#include <60ghzfalldetection.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//FallDetection_60GHz radar = FallDetection_60GHz(&mySerial);

// can also try hardware serial with
FallDetection_60GHz radar = FallDetection_60GHz(&Serial1);

const unsigned char DevID_buff[10] = {0x53, 0x59, 0x02, 0xA1, 0x00, 0x01, 0x0F, 0x5F, 0x54, 0x43};

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Readly");
}

void loop()
{
  // put your main code here, to run repeatedly:
  radar.send_func(DevID_buff, 10, false);
  delay(50);                       //Do not set the delay time too long, as this may affect the reception of the data frames returned by the radar.
}
```

:::tip
如果您使用的是 XIAO ESP32 系列，并且毫米波雷达没有数据反馈。您可以尝试将上面的代码从 ```Serial1.begin(115200);``` 改为 ```Serial1.begin(115200, SERIAL_8N1, D7, D6);```。
:::

在这个示例的程序中，您可以看到定义了一个数组 `DevID_buff[10]`，它存储了您查询设备 ID 的十六进制数字，每个位置一个字节。

发送是通过 `send_func()` 完成的。传入的参数是要发送的帧数组、数组的长度，以及是否循环发送。

如果您需要发送自己的命令帧，那么您需要根据用户手册中提供的帧格式定义正确的数组。

:::tip
**关于校验位"sum"的计算。**

所有数据帧都有一个校验位，以确保数据准确发送或接收。校验位通常在数据帧的倒数第二位。它是通过将校验位之前的所有位相加，然后取十六进制的低两位来计算的。
让我们以查询设备 ID 的数据帧为例。
<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/6.png"/></div>

可以看到校验位在整个数据帧的倒数第二位。然后我们开始将之前所有的十六进制数字相加。

`0x53 + 0x59 + 0x02 + 0xA2 + 0x00 + 0x01 + 0x0F = 0x0160`

然后我们需要取它的低两位，即 **60**，所以这个数据帧的校验和是 **60**。如果我们想查询传感器的 ID，那么您可以定义以下数组。

`const unsigned char DevID_buff[10] = {0x53, 0x59, 0x02, 0xA1, 0x00, 0x01, 0x0F, 0x60, 0x54, 0x43};`

:::

上传程序。将串行监视器的波特率设置为 115200 应该会显示结果。输出应该类似于下面的图像。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/9.png"/></div>

此时请检查返回的数据帧，看它们是否与用户手册中描述的返回数据帧匹配。

通常，我们的命令不需要重复发送给传感器，但由于传感器回复消息的速度非常快，我们无法确保能够接收到传感器返回的确切数据消息。这个问题有两种解决方案。

- 多次重新上传上述程序。
- 将 `send_func()` 函数的第三个参数（循环发送）设置为 `true`。但是请注意，重复发送设置类型的数据帧**可能会导致传感器卡死**，所以请谨慎使用此功能。如果传感器卡死，请断开传感器的 5V 供电引脚，等待片刻后功能即可恢复。

### Demo5: 重置传感器

有时您的传感器可能会出现检测异常的问题，或者当您想清除传感器上的所有设置时，您可以根据此示例重置传感器。

以下示例程序位于库的示例文件夹中，名为 **MR60FDA1_Reset_sensor**。

```c
#include "Arduino.h"
#include <60ghzfalldetection.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//FallDetection_60GHz radar = FallDetection_60GHz(&mySerial);

// can also try hardware serial with
FallDetection_60GHz radar = FallDetection_60GHz(&Serial1);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Readly");

  radar.reset_func();
}

void loop()
{
  // put your main code here, to run repeatedly:
}
```

:::tip
如果您使用的是 XIAO ESP32 系列，并且毫米波雷达没有数据反馈。您可以尝试将上面的代码从 ```Serial1.begin(115200);``` 更改为 ```Serial1.begin(115200, SERIAL_8N1, D7, D6);```。
:::

重置传感器非常简单，您只需要调用 `reset_func()`。重置只需要**执行一次**，所以我们在 `Setup()` 函数中使用它。

### Demo6: 使用 Arduino/Seeeduino

我们的库兼容 Arduino，您也可以选择手头的 Arduino 来开发您的传感器项目。

MR60FDA1 传感器使用 UART 串行端口进行通信，您只需要按照下面的接线将传感器连接到您的 Arduino。

<table align="center">
 <tr>
     <td align="center">MR60FDA1 传感器</td>
     <td align="center"></td>
        <td align="center">MCU</td>
 </tr>
 <tr>
     <td align="center">5V</td>
     <td align="center">--></td>
        <td align="center">5V</td>
 </tr>
 <tr>
     <td align="center">GND</td>
     <td align="center">--></td>
        <td align="center">GND</td>
 </tr>
    <tr>
     <td align="center">RX</td>
     <td align="center">--></td>
        <td align="center">软串口 TX</td>
 </tr>
    <tr>
     <td align="center">TX</td>
     <td align="center">--></td>
        <td align="center">软串口 RX</td>
 </tr>
</table>

所有功能的应用方式与上述 Demo1 到 Demo5 相同，因此我们不会在此示例中重复说明。在此示例中，我们将为您概述如何使用 Arduino 的软串口从传感器获取数据信息。

:::tip
有关 Arduino 软串口的说明，请参考 [Arduino 官方文档](https://docs.arduino.cc/learn/built-in-libraries/software-serial)。
:::

为了避免同时使用 Serial 进行输出和数据传输而导致的数据混乱，在 Arduino 端我们通常使用软串口。

软串口库的导入和 RX、TX 引脚的定义需要在程序的早期完成。以下程序将 **A2** 和 **A3** 引脚定义为软串口的 **RX** 和 **TX** 引脚。

```c
#include <SoftwareSerial.h>
//Choose any two pins that can be used with SoftwareSerial to RX & TX
#define RX_Pin A2
#define TX_Pin A3

SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

//we'll be using software serial
FallDetection_60GHz radar = FallDetection_60GHz(&mySerial);
```

另外，不要忘记在 `Setup()` 函数中设置软串口的波特率。

```c
void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);

  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Readly");
}
```

以 **Demo1** 为例，如果您想使用 Arduino 打印来自传感器的上报数据帧，那么完整的程序如下。

```c
#include "Arduino.h"
#include <60ghzfalldetection.h>

#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
#define RX_Pin A2
#define TX_Pin A3

SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
FallDetection_60GHz radar = FallDetection_60GHz(&mySerial);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);

  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Readly");
}

void loop()
{
  // put your main code here, to run repeatedly:
  radar.recvRadarBytes();           //Receive radar data and start processing
  radar.showData();                 //Serial port prints a set of received data frames
  delay(200);                       //Add time delay to avoid program jam
}
```

### Demo7: 直接连接到PC获取数据

如果您想使用专为传感器设计的上位机，或者想使用串口软件获取完整的数据帧，可以参考这个例程。

通过**UART转USB**设备将传感器直接连接到计算机的USB端口。接线如下表所示。

<table align="center">
 <tr>
     <td colspan="4"><div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/60GHzradar/uart.png"/></div></td>
 </tr >
 <tr >
     <td align="center">UART转USB</td>
     <td align="center"></td>
        <td align="center">MR60FDA1传感器</td>
 </tr>
 <tr>
     <td align="center">5V</td>
     <td align="center">--></td>
        <td align="center">5V</td>
 </tr>
 <tr>
     <td align="center">GND</td>
     <td align="center">--></td>
        <td align="center">GND</td>
 </tr>
    <tr>
     <td align="center">RX</td>
     <td align="center">--></td>
        <td align="center">TX</td>
 </tr>
    <tr>
     <td align="center">TX</td>
     <td align="center">--></td>
        <td align="center">RX</td>
 </tr>
</table>

使用串口调试助手等软件选择传感器所在的串口。

<div align="center"><img width ="200" src="https://files.seeedstudio.com/wiki/60GHzradar/37.png"/></div>

:::caution
MR60FDA1 传感器需要 5V 电源供电，否则传感器可能无法正常工作。
:::

连接成功后，您将看到传感器发送稳定的消息流。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/39.png"/></div>

同时，您也可以通过软件的发送功能向传感器发送数据帧。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/40.png"/></div>

:::caution
如果您选择 **ASCII** 作为发送数据的格式，每个数据集都需要加上 **0x** 前缀。如果您选择 **HEX**，那么每组数据都不需要加上 **0x** 前缀。
:::

## 故障排除

### 常见问题1：这个传感器能否在同一环境中同时检测多个人？

> 答：不可以。这个传感器只能用于单个生物体。如果监测范围内有多个人或动物，这将对监测结果产生影响。

### 常见问题2：为什么我在 XIAO ESP32C3 的串口监视器中看不到任何内容？

> XIAO ESP32C3 串口功能与一般的 Arduino 硬件不太一致，直接使用 Serial1 可能会导致 USB 串口无法工作。相关应用案例请参考 [XIAO ESP32C3 的串口章节](https://wiki.seeedstudio.com/cn/XIAO_ESP32C3_Pin_Multiplexing/#serial) 了解详情。

## 资源

- **[PDF]** [通用协议](https://files.seeedstudio.com/wiki/60GHzradar/60GHz_mmWave_Sensor_Fall_Detection_Module_Pro-Universal_Protocol.pdf)
- **[PDF]** [用户手册 V1.3](https://files.seeedstudio.com/wiki/60GHzradar/new_res/MR60FDA1_user_manual-V1.3.pdf)
- **[PDF]** [Seeed Studio 毫米波传感器外壳设计](https://files.seeedstudio.com/wiki/60GHzradar/Seeed_Studio_MMWave_Sensor-Case_Design.pdf)
- **[EXE]** [上位机软件](https://files.seeedstudio.com/wiki/60GHzradar/Fall_detection_radar.zip)

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
