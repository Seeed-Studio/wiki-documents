---
description: 60GHz mmWave Fall Detection Pro
title: 60GHz毫米波传感器 - 跌倒检测模块专业版
keywords:
- mmWave_radar_sensor
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Radar_MR60FDA1
last_update:
  date: 03/24/2024
  author: AnXiaodie
---
# 60GHz毫米波传感器 - 跌倒检测模块专业版（MR60FDA1）

<div align="center"><img src="https://files.seeedstudio.com/wiki/60GHzradar/newpic.png"  style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Fall-Detection-Module-Pro-p-5375.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 引言

60GHz毫米波雷达传感器 - 跌倒检测模块专业版应用调频连续波（FMCW）检测理论，实现高精度地同时检测人体活动，包括移动、跌倒和静止状态，从而提供一个完全私密且安全的环境，独立于其他噪声干扰。它是私人财产监控、跌倒预警、老年人健康护理中的标准生物雷达系统，在家庭、酒店以及医院等场所表现良好。在本指南中，我们将向您介绍如何使用它。

### 应用领域

- 智能家居
- 健康护理
- 跌倒检测
- 智能酒店
- 医疗助手

### 特点

- 启用理论：基于60GHz调频连续波信号实现雷达检测
- 先进的检测算法：在自适应环境中同时感应和输出人体活动，包括移动、跌倒和静止状态
- 完美的隐私保护：采用FMCW监控技术，提供无需识别的监控能力
- 健康友好的工作状态：输出功率低，对人体无害
- 高稳定性：独立于温度、湿度、噪声、气流、灰尘、光线等环境因素的影响
- 高测量精度：实现高达90%的跌倒检测精度和高达90%的存在感知功能精度
- 高灵活性硬件设计雷达：支持二次开发，适应各种场景应用

### **规格说明**

| 检测角度和距离                               | 最小值 | 典型值 | 最大值 | 单位 |
|-----------------------------------|----------|----------|----------|-------|
| **内容 最小值 典型值 最大值 单位**           |        |        |        |      |
| 人员检测的运动半径[1]                        |        | 6      |        | 米   |
| 跌倒监测半径[2]                              |        | 3      |        | 米   |
| 雷达检测角度（水平）                         |        | 60     |        | 度   |
| 雷达检测角度（俯仰）                         |        | 60     |        | 度   |
| 注：[1][2] 雷达悬挂高度2.8米，雷达投影半径。 |        |        |        |      |
| **电气特性**                                 |        |        |        |      |
| 工作电压（VCC）                              | 4.5    | 5      | 6      | 伏   |
| 工作电流（ICC）                              | 90     | 93     | 100    | 毫安 |
| 工作温度（TOP）                              | -20    |        | 60     | ℃    |
| 存储温度（TST）                              | -40    |        | 80     | ℃    |
| **射频性能**                                 |        |        |        |      |
| 工作频率（fTX）                              | 58     |        | 63.5   | GHz  |
| 发射功率（Pout）                             |        |        | 6      | dBm  |

## 硬件概述

在开始之前，了解产品的一些基本参数是非常必要的。以下表格提供了关于60GHz毫米波雷达传感器 - 跌倒检测专业版模块特性的信息。

<div align="center"><img width ="300" src="https://files.seeedstudio.com/wiki/60GHzradar/pinout3.png"/></div>

- 接口1：
  - 5V引脚是传感器的电源供应接口。
  - RX和TX是传感器的数据传输接口。RX代表串行接收，TX代表串行发送。
  - 人体存在状态输出接口。您可以通过这两个引脚的电平来判断当前环境中的人体运动情况。
    - GP2输出：高电平 - 有人，低电平 - 无人。
    - GP1输出：高电平 - 活动状态，低电平 - 静止状态。
- 接口2：
  - 固件烧录引脚：GND/3.3V/SWD/SWC。
  - 预留输入输出引脚：GP3~GP6。

## 入门指南

### 固件版本更新

毫米波雷达传感器经过长期的技术沉淀和用户提供的宝贵建议，我们一直在对原始产品进行迭代，以提供更准确、可靠的监测结果和更好的用户体验。

新出厂的传感器默认会搭载最新的固件，以确保用户能够体验到最新的产品功能。但是，为了照顾老用户的体验，我们在此提供最新的固件及更新方法，以确保您能够使用我们最新的技术。

#### 通用方法 - 使用J-link烧录固件

如果您遇到固件错误、雷达异常、固件故障等问题，使用此方法重新烧录固件是最有效的方法。

**下载最新固件**

|         固件版本         |                           下载地址                           |
|:----------------:|:----------------:|
| Jlink_MR60FDA1-V0821.bin | [下载](https://files.seeedstudio.com/wiki/60GHzradar/Jlink_MR60FDA1-230821.bin) |
| Jlink_MR60FDA1-V114.bin  | [下载](https://files.seeedstudio.com/wiki/60GHzradar/Jlink_MR60FDA1-V114.bin) |
| Jlink_MR60FDA1-V0728.bin | [下载](https://files.seeedstudio.com/wiki/60GHzradar/Jlink_MR60FDA1-V0728.bin) |

:::caution警告

1. 请仔细检查您的产品功能，请勿与其他毫米波雷达传感器混用刷写此固件，否则可能导致产品功能异常，后果需自行承担！
2. 请注意，不同的固件更新方式使用不同的固件内容，您所下载的是通过**J-link**烧录的固件。
:::

**将您的雷达更新到最新版本**

**第一步.** 您需要准备一个**Jlink**和**MR60FDA1** 60GHz毫米波雷达传感器。

通过杜邦线将雷达和Jlink连接在一起，连接方式如下图所示。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/57.jpg"/></div>

**第二步.** 下载必要的软件和固件。

| 文件 | 下载地址 |
|:----------------:|:----------------:|
| JlinkV644e.rar | [下载](https://files.seeedstudio.com/wiki/60GHzradar/JlinkV644e.rar) |
| Pack_Segger_AT32F4xx_v1.3.3.zip | [下载](https://files.seeedstudio.com/wiki/60GHzradar/Pack_Segger_AT32F4xx_v1.3.3.zip) |

**第三步.** 解压**JlinkV644e.rar**文件，并打开其中的**JLink_Windows_V644e.exe**文件。

按照默认选项进行安装。安装完成后，启动**J-Flash V6.44e**软件。

**第四步.** 安装芯片包。

解压**Pack_Segger_AT32F4xx_v1.3.3.zip**文件，并打开其中的**Segger_AT32F4xx_AddOn.exe**文件。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/47.png"/></div>

**Step5.** Create a new project.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/48.png"/></div>

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/49.png"/></div>

**第五步.** 创建一个新项目。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/50.png"/></div>

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/51.png"/></div>

**第六步.** 将雷达固件（.bin文件）拖放到此软件中，将弹出一个窗口，我们只需使用默认的起始地址0x8000000。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/52.png"/></div>

**第七步.** 点击**Target** -> **Connect**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/53.png"/></div>

当连接成功时，会显示“Connected successfully”。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/60GHzradar/54.png"/></div>

擦除固件：**Target** -> **manual Programming** -> **Erase Chip**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/55.png"/></div>

升级固件：**Target** -> **manual Programming** -> **Program & Verify**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/56.png"/></div>

此时，固件更新已完成。

#### 通过UART更新固件

考虑到J-link的价格昂贵，对于大多数只需要更新雷达固件的用户来说，购买J-link太过奢侈，因此我们提供了一种通过UART更新的方法。

**下载最新固件**

| 固件版本 | 下载地址 |
|:----------------:|:----------------:|
| UART_MR60FDA1-230821.bin | [下载](https://files.seeedstudio.com/wiki/60GHzradar/UART_MR60FDA1-230821.bin) |
| UART_MR60FDA1-230728.bin | [下载](https://files.seeedstudio.com/wiki/60GHzradar/UART_MR60FDA1-230728.bin) |
| UART_MR60FDA1-230227.bin | [下载](https://files.seeedstudio.com/wiki/60GHzradar/new_res/UART_MR60FDA1-230227.bin) |
| UART_MR60FDA1-230915.bin | [下载](https://files.seeedstudio.com/wiki/60GHzradar/new_res/UART_MR60FDA1-230915.bin) |

:::caution警告

1. 请仔细检查您的产品功能，请勿与其他毫米波雷达传感器混用刷写此固件，否则可能导致产品功能异常，后果需自行承担！
2. 请注意，不同的固件更新方式使用不同的固件内容，您所下载的是通过**UART**烧录的固件。
3. 在使用UART升级固件之前，请确保您的雷达固件版本**至少为G60FD1SYv010102**，否则可能会使雷达失效，届时您将不得不使用J-link烧录固件才能使用！

您可以通过向雷达发送命令`0x53 0x59 0x02 0xA4 0x00 0x01 0x0F 0x62 0x54 0x43`来查询固件版本号信息。雷达报告的数据将以字符串形式显示，您会看到类似于下面所示的效果。

`G60FD1SYv010104`是雷达报告的型号编号，其中`010104`是版本号。这意味着此传感器支持UART升级。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/19.png"/></div>
:::

**将您的雷达更新到最新版本**

**第一步**. 您需要准备一个**UART转USB转换器**和**MR60FDA1** 60GHz毫米波雷达传感器。

通过杜邦线将雷达和UART转USB转换器连接在一起，连接方式如下图所示。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/uart.png"/></div>

**第二步**. 下载必要的软件和固件。

| 文件 | 下载地址 |
|:----------------:|:----------------:|
| PackageMake-v1.1.1.zip | [下载](https://files.seeedstudio.com/wiki/60GHzradar/new_res/PackageMake-v1.1.1.zip) |

**第三步**. 解压PackageMake-v1.1.1.zip包，并打开其中的PackageMake-v1.1.1.exe文件。

将UART转USB转换器与连接到电脑的传感器相连，点击软件界面左上角的齿轮图案，选择端口号，将波特率设置为115200，然后点击右下角进行确认。（如果找不到端口号，请检查连接，然后点击左下角的刷新按钮重试）

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/11.png"/></div>

**第四步**. 连接传感器

按照上述说明设置完串口后，点击界面右上角的第二个图标，如果端口选择正确，您将看到雷达的原始数据被打印出来。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/12.png"/></div>

**第五步**. 更新固件

鼠标左键点击界面右上角的最后一个图标，这将弹出一个窗口来选择固件。请选择您已下载的固件版本。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/13.png"/></div>

选择完成后，所选文件的路径将出现在软件下方，请再次检查所选的固件版本和型号是否与您使用的传感器一致。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/14.png"/></div>

要升级固件，请在软件左上角最后一个图像上双击鼠标左键，然后固件将开始下载到传感器。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/15.png"/></div>

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/16.png"/></div>

等待进度条完成，固件更新即完成。

### 上位机的使用

通过**UART转USB**设备将传感器直接连接到电脑的USB端口。接线方式如下表所示。

<table align="center">
 <tr>
     <td colspan="4"><div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/60GHzradar/uart.png"/></div></td>
 </tr>
 <tr>
     <td align="center">UART 到 USB</td>
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

除了上述串口软件外，您还可以使用专门为雷达设计的[上位机软件](https://files.seeedstudio.com/wiki/60GHzradar/Fall_detection_radar.zip)。

以下两节将解释软件中各部分的作用。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/10.png"/></div>

- **工作区**

    上位机的所有功能仅在工作区显示。显示的主要内容集中在工作区的顶部。

    **状态**：显示是否有人在场，是移动还是静止。

    **跌倒状态**：跌倒状态将以人物动画的形式呈现。图片中的状态为未跌倒，如果有人跌倒，则会显示一个人跌倒的动画图片。

    **设置**：用于设置传感器连接到电脑的端口号。通常，当传感器通过UART转USB连接到电脑时，需要点击**刷新**按钮刷新端口，然后选择新出现的端口号，然后点击**打开**按钮，最后点击**开始**按钮启用监控功能。

    **安装高度/cm**：指安装高度。为确保跌倒检测的准确性，请按照以下方式准确安装传感器。请将其安装在顶部！雷达应垂直安装，水平偏差角≤5°，以确保雷达主波束覆盖检测区域；建议雷达的安装高度为2m≤H≤3m。雷达前方无明显遮挡物。受雷达安装高度和雷达波束范围的影响，此安装模式下移动人体的最大检测半径为R3≈3米；静止人体的最大检测半径为R2≈2.25米；跌倒检测半径为R1≤2米。

    例如，如果我的安装高度是2.6米，那么我应该填入260并点击**发送**按钮。

- **无效区域**

      该区域目前不起作用，仅作为预留界面。

:::caution警告
请注意，这款雷达目前不支持测距、测速或点云功能！
:::

## 使用Arduino进行传感器开发

### Arduino库概述

:::tip提示
如果您是第一次使用Arduino，我们强烈建议您参考[Arduino入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。
:::

您可以通过点击下面的图标来下载本示例中使用的库代码。


<p style={{textAlign: 'center'}}><a href="https://github.com/limengdu/Seeed-Studio-MR60FDA1-Sersor" target="_blank"><div align="center"><img width ="300" src="https://files.seeedstudio.com/wiki/seeed_logo/DOWNLOAD.png" /></div></a></p>

功能

  在我们开始开发草图之前，让我们先了解一下库中可用的功能。

  - `void recvRadarBytes()` —— 这个函数根据传感器数据协议中的帧头和帧尾，通过UART收集传感器报告的数据帧。与`showData()`函数一起使用，可以将收集到的数据信息通过串口打印出来。
    - **输入参数：** 无
    - **返回值：** 无
  - `void showData()` —— 这个函数的作用是一次性地将传感器报告的完整数据帧通过串口打印出来，需要配合`recvRadarBytes()`函数一起使用。
    - **输入参数：** 无
    - **返回值：** 无
  - `void HumanExis_Func()` —— 这个函数负责解析传感器的数据帧，并输出关于人体存在状态的相关数据。
    - **输入参数：** 无
    - **返回值：**
      - `unsigned int sensor_report` —— 返回的值表示解析后的数据帧所属的状态类别。具体的类别可以在**默认变量**部分找到。只有当发生变化时，才会报告人体移动信息。
      - `int bodysign_val` —— 返回的值代表人体运动参数的值。该值每秒报告一次。
  - `void Fall_Detection()` —— 这个函数用于解析并返回跌倒检测的结果。检测结果存储在变量sensor_report中。

    - **输入参数：** 无
    - **返回值：** - `unsigned int sensor_report` —— 返回的值表示解析后的数据帧所属的状态类别。具体的类别可以在**默认变量**部分找到。只有当跌倒状态发生变化时，才会报告跌倒信息。
  - `void send_func(const unsigned char* buff, int len, bool cyclic /*=false*/)` —— 该函数用于发送查询帧和命令帧。
    - **输入参数：**
      - `buff` —— 你想要发送给传感器的数据帧。
      - `len` —— 你想要发送给传感器的数据帧的长度。
      - `cyclic` —— 循环发送开关。默认值为false，如果你希望循环发送这个数据帧，可以设置为**true**。
    - **返回值：** 无
  - `void reset_func()` —— 该函数用于重置传感器。
    - **输入参数：** 无
    - **返回值：** 无

  ### 默认变量


```c
#define MESSAGE_HEAD1 0x53      //数据表头1
#define MESSAGE_HEAD2 0x59      //数据表头2

#define MESSAGE_END1  0x54      //数据框末端1
#define MESSAGE_END2  0x43      //数据框末端2

#define HUMAN_PSE_RADAR 0x80    //人类在场数据

#define PRESENCE_INF 0x01       //在场信息
#define SOMEONE_HERE 0x01       //这里有人
#define NOONE_HERE 0x00         //这里没人

#define MOVE_INF 0x02           //活动信息
#define PSE_NONE 0x00           //无人
#define STATIONARY 0x01         //一个人是静止的
#define MOVEMENT 0x02           //一个人是运动的

#define BODY_SIG 0x03           //身体运动信息

#define MOVE_DIS 0x0E           //确定运动发生的距离

#define FALL_DETECTION 0x83     //跌倒数据标记

#define FALL_STATE 0x01         //跌倒状态标记
#define NO_FALL 0x00            //未检测到跌倒
#define FALLING 0x01            //检测到跌倒

#define RESIDENT_STATE 0x05     //居民身份
#define NO_RESIDENT 0x00        //无固定居所
#define RESIDENT 0x01           //有一个固定居所

#define reset_frame_len 10      //重置数据帧长度”
//重置数据帧
const unsigned char fall_reset_frame[10] = {0x53, 0x59, 0x01, 0x02, 0x00, 0x01, 0x0F, 0xBF, 0x54, 0x43};

//返回状态，在Arduino中使用
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

**第一步**。 你需要安装Arduino软件。

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></div></a></p>

**第二步**。 启动Arduino应用程序。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"/></div>

**第三步**。 选择你的开发板型号并将其添加到Arduino IDE中。

- 如果你打算在后续例程中使用**Seeeduino V4.2**，请参考[这个教程](https://wiki.seeedstudio.com/Seeed_Arduino_Boards/)来完成添加。
- 如果你打算在后续例程中使用**Seeeduino XIAO**，请参考[这个教程](https://wiki.seeedstudio.com/Seeeduino-XIAO/#software)来完成添加。
- 如果你打算在后续例程中使用**XIAO RP2040**，请参考[这个教程](https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino/#software-setup)来完成添加。
- 如果你打算在后续例程中使用**XIAO BLE**，请参考[这个教程](https://wiki.seeedstudio.com/XIAO_BLE/#software-setup)来完成添加。
- 如果你打算在后续例程中使用**XIAO ESP32C3**，请参考[这个教程](https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started/#software-setup)来完成添加。

:::caution 注意
对于**XIAO nRF52840**，请选择**Seeed nRF52 mbed-enabled Boards**，否则在运行程序时可能会报错。
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/XIAO-BLE/SeeednRFmbed.png"/></div>
:::

**第四步**。 安装Arduino代码库。

首先，从[GitHub](https://github.com/limengdu/Seeed-Studio-MR60FDA1-Sersor)获取代码库，并将其下载到你的本地计算机上。
既然你已经下载了zip格式的库文件，接下来打开你的Arduino IDE，点击**文件（Sketch）> 包含库（Include Library）> 添加.ZIP库（Add .ZIP Library）**。选择你刚才下载的zip文件，如果库安装正确，你会在通知窗口中看到**库已添加到你的库中**。这意味着库已成功安装。

现在，你可以在Arduino IDE中编写代码并调用这个库提供的函数和变量了。请确保按照库的文档或示例代码来正确使用库中的功能。如果你遇到任何问题或需要进一步的帮助，可以查阅库的文档、社区论坛或相关教程。
<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png"/></div>

## Arduino 示例

既然我们已经安装了库并理解了基本功能，那么让我们运行一些针对XIAO BLE的示例，看看它的表现如何。

### 所需材料

在完成以下示例之前，你需要准备以下材料。

|              |              |              |
|:--------------:|:--------------:|:--------------:|
|<div align="center"><img width ="210" src="https://files.seeedstudio.com/wiki/60GHzradar/newpic.png"/></div>| <div align="center"><img width ="210" src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg"/></div>| <div align="center"><img width ="150" src="https://files.seeedstudio.com/wiki/60GHzradar/dupont.jpg"/></div>|
|[**60GHz毫米波雷达传感器**](https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Fall-Detection-Module-Pro-p-5375.html)|[**Seeed XIAO BLE nRF52840 感知开发板**](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html?queryID=4bbd8c09f20216aa26f6b5a9040504d0&objectID=5253&indexName=bazaar_retailer_products)|**2mm to 2.54mm Pitch Ribbon Cable**|

**第一步**。通过主板将设备连接到计算机。接线图如下表所示。
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

**第二步**。在Arduino IDE左上角菜单栏中，选择**工具**，然后选择你正在使用的开发板类型，并选择对应的串口。

:::tip提示
如果你使用的是**MacOS**，设备的串口名称通常以**/dev/cu.usbmodem xxx**开始，以设备名称结尾。如果你使用的是**Windows**，设备的串口名称通常以**COM**开始，同样以设备名称结尾。
:::
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/60GHzradar/3.png"/></div>

在这个示例中，我们将演示雷达如何与我们热门产品XIAO BLE配合使用。

### 示例1：原始数据导出

本示例将指导你通过串口打印出传感器报告的原始数据的过程。

库中的示例文件夹中包含一个名为**MR60FDA1_print_rawdata**的示例程序，以下就是这个程序的内容。

```c
#include "Arduino.h"
#include <60ghzfalldetection.h>
//#include <SoftwareSerial.h>
// 选择任意两个可以与SoftwareSerial一起使用的引脚作为RX（接收）和TX（发送）
//#define RX_Pin A2
//#define TX_Pin A3
//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);
// 我们将使用软件串行通信
//FallDetection_60GHz radar = FallDetection_60GHz(&mySerial);
// 也可以尝试使用硬件串行通信与..
FallDetection_60GHz radar = FallDetection_60GHz(&Serial1);
void setup() {
  // 请在这里放置您的设置代码，它将运行一次：
  Serial.begin(115200);
  Serial1.begin(115200);
  //  mySerial.begin(115200);
  while(!Serial);   //当串行端口打开时，程序开始执行。
  Serial.println("Readly");
}
void loop()
{
  // 请在这里放置您的主代码，它将反复运行：
  radar.recvRadarBytes();           //接收雷达数据并开始处理
  radar.showData();                 //串行端口打印一组接收到的数据帧
  delay(200);                       //添加时间延迟以避免程序卡顿
}
```

在此程序中，我们使用XIAO nRF52840的硬件**Serial1**端口连接传感器，并使用硬件**Serial**端口（即Serial）输出数据，因此我们需要在初始化函数`Setup()`中单独初始化这个串口。

在主要的`loop()`函数中，我们使用`recvRadarBytes()`函数从传感器接收数据帧，然后使用`showData()`函数通过串口打印出接收到的数据帧。

在此程序中，需要注意的是，每两个数据帧的接收和输出之间有一个间隔，以避免主板发生拥堵。这个时间间隔应不少于**150毫秒**。

这意味着主板无法接收传感器报告的所有数据帧，但由于传感器报告的数据帧数量很大且频繁，这并不影响使用传感器确定环境的准确性。

上传程序后，打开你的串口监视器，并将波特率设置为115200，应该可以看到结果。输出应该类似于下面的图像。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/7.png"/></div>

### 示例2：人体存在检测功能的使用

在本示例中，我们将解释如何使用人体存在检测功能，并通过串口监视器在函数中打印出此功能的所有值。

库中的示例文件夹中包含一个名为**MR60FDA1_human_existence_inf_output**的示例程序，以下就是这个程序的内容。

```c
#include "Arduino.h"
#include <60ghzfalldetection.h>

//#include <SoftwareSerial.h>
// 选择任意两个可以与SoftwareSerial一起使用的引脚作为RX（接收）和TX（发送）
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// 我们将使用软件串行通信
//FallDetection_60GHz radar = FallDetection_60GHz(&mySerial);

// 也可以尝试使用硬件串行通信与...
FallDetection_60GHz radar = FallDetection_60GHz(&Serial1);

void setup() {
  // 请在这里放置您的设置代码，它将运行一次：
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   //当串行端口打开时，程序开始执行。

  Serial.println("Readly");
}

void loop()
{
  // 请在这里放置您的主代码，它将反复运行。
  radar.HumanExis_Func();           //人类存在信息输出
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
  delay(200);                       //添加时间延迟以避免程序卡顿或阻塞
}
```

在这个示例中，人体存在检测功能是通过`HumanExis_Func()`函数实现的。程序实现的基本逻辑是，`HumanExis_Func()`函数将传感器报告的状态信息赋值给`sensor_report`变量。然后，根据`sensor_report`的值，我们通过串口打印出该状态下的所有值。

请注意，`sensor_report`对应的是缩进下的串口数据输出。例如，代表信号参数的`bodysign_val`变量仅在`sensor_report`为`BODYVAL`时有效，而在传感器报告的其他`sensor_reports`中则不存在。

上传程序后，打开你的串口监视器，并将波特率设置为115200，应该可以看到结果。输出应该类似于下面的图像。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/8.png"/></div>

### 示例3：人体跌倒检测

在本示例中，我们将使用`Fall_Detection()`函数来检测人体跌倒。

:::tip提示
跌倒状态输出的原理是，只有当传感器检测到跌倒状态发生变化时，才会有内容输出。
:::

库中的示例文件夹中包含一个名为**MR60FDA1_Fall_detection**的示例程序，以下就是这个程序的内容。

```c
#include "Arduino.h"
#include <60ghzfalldetection.h>

//#include <SoftwareSerial.h>
// 选择任意两个可以与SoftwareSerial一起使用的引脚作为接收（RX）和发送（TX）引脚
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// “我们将使用软件串行通信”
//FallDetection_60GHz radar = FallDetection_60GHz(&mySerial);

// 也可以尝试使用硬件串行通信
FallDetection_60GHz radar = FallDetection_60GHz(&Serial1);

void setup() {
  // 请在这里放置您的设置代码，它将运行一次：
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   //当串行端口打开时，程序开始执行。

  Serial.println("Readly");
}

void loop()
{
  // 请在这里放置您的主代码，它将反复运行：
  radar.Fall_Detection();           //接收雷达数据并开始处理
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
  delay(200); //添加时间延迟以避免程序卡顿
}
```

在跌倒检测功能中，还包括一个停留检测功能。这个功能的主要作用是辅助用户或传感器确定人体是否跌倒。当垂直方向的加速度发生剧烈变化后，一段时间内没有人体活动时（即停留在原地），传感器有很大可能性会判定有人跌倒且失去意识。

### 示例4：向传感器发送数据

根据用户手册中提供的详细信息，用户可以根据实际需求向传感器发送命令帧，以查询或设置传感器的某些状态或模式。

在传感器库的示例文件夹中，名为**MR60FDA1_Send_frame**的.ino文件向我们展示了如何向传感器发送一个查询设备ID的程序。

```c
#include "Arduino.h"
#include <60ghzfalldetection.h>

//#include <SoftwareSerial.h>
// 选择任意两个可以与SoftwareSerial一起使用的引脚作为RX（接收）和TX（发送）
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// 我们将使用软件串行通信
//FallDetection_60GHz radar = FallDetection_60GHz(&mySerial);

// 也可以尝试使用硬件串行通信
FallDetection_60GHz radar = FallDetection_60GHz(&Serial1);

const unsigned char DevID_buff[10] = {0x53, 0x59, 0x02, 0xA1, 0x00, 0x01, 0x0F, 0x5F, 0x54, 0x43};

void setup() {
  // 请在这里放置您的设置代码，它将运行一次：
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   //当串行端口打开时，程序开始执行。

  Serial.println("Readly");
}

void loop()
{
  // 请在这里放置您的主代码，它将反复运行：
  radar.send_func(DevID_buff, 10, false);
  delay(50);                       //不要将延迟时间设置得太长，因为这可能会影响雷达返回数据帧的接收。
}
```

在这个示例程序中，你可以看到一个名为`DevID_buff[10]`的数组被定义，它用于存储查询设备ID的十六进制数，每个字节占一个位置。

发送操作是通过`send_func()`函数完成的。传入的参数包括要发送的帧数组、数组的长度以及是否循环发送。

如果你需要发送自己的命令帧，那么你需要根据用户手册中提供的帧格式来定义正确的数组。

:::tip提示
**关于校验位“sum”的计算**。

所有数据帧都有一个校验位，以确保数据能够准确发送或接收。校验位通常位于数据帧的倒数第二个位。它是通过将校验位之前的所有位相加，并取十六进制数的低两位来计算的。
以查询设备ID的数据帧为例，我们可以这样计算：

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/6.png"/></div>

可以看出，校验位位于整个数据帧的倒数第二个位。然后，我们从加总所有前面的十六进制数开始。

```
0x53 + 0x59 + 0x02 + 0xA2 + 0x00 + 0x01 + 0x0F = 0x0160
```

然后我们需要取它的低两位，即**60**，所以这个数据帧的校验码就是**60**。如果我们想要查询传感器的ID，那么可以定义以下数组。

```
const unsigned char DevID_buff[10] = {0x53, 0x59, 0x02, 0xA1, 0x00, 0x01, 0x0F, 0x60, 0x54, 0x43};
```

:::

上传程序后，打开你的串口监视器，并将波特率设置为115200，应该可以看到结果。输出应该类似于下面的图像。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/9.png"/></div>

此时，请检查返回的数据帧，并确认它们是否与用户手册中描述的数据帧匹配。

  通常，我们不需要重复向传感器发送命令，但由于传感器回复消息的速度非常快，我们无法确保能够接收到传感器返回的准确数据消息。针对这个问题，有两种解决方案。

  - 多次重复上传上述程序。
  - 将`send_func()`函数的第三个参数（循环发送）设置为`true`。但请注意，反复发送设置类型的数据帧**可能会导致传感器卡死**，因此请谨慎使用此功能。如果传感器卡住，请断开传感器的5V供电引脚，并等待片刻，以便传感器功能恢复。

### 示例5：重置传感器

有时你可能会遇到传感器检测异常的问题，或者你想要清除传感器上的所有设置，这时你可以根据这个示例来重置你的传感器。

以下示例程序位于库中的示例文件夹内，名为**MR60FDA1_Reset_sensor**。

```c
#include "Arduino.h"
#include <60ghzfalldetection.h>

//#include <SoftwareSerial.h>
// 选择任意两个可以与SoftwareSerial一起使用的引脚作为RX（接收）和TX（发送）
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// 我们将使用软件串行通信
//FallDetection_60GHz radar = FallDetection_60GHz(&mySerial);

// 也可以尝试使用硬件串行通信
FallDetection_60GHz radar = FallDetection_60GHz(&Serial1);

void setup() {
  // 请在这里放置您的设置代码，它将运行一次：
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   //当串行端口打开时，程序开始执行

  Serial.println("Readly");

  radar.reset_func();
}

void loop()
{
  // 请在这里放置您的主代码，它将反复运行：
}
```

重置传感器非常简单，你只需要调用`reset_func()`函数。重置操作**只需执行一次**，因此我们将其用在`Setup()`函数中。

### 示例6：使用Arduino/Seeeduino

我们的库与Arduino兼容，你也可以选择你手头已有的Arduino来开发你的传感器项目。

MR60FDA1传感器通过UART串口进行通信，你只需要按照下面的接线方式将传感器连接到Arduino上即可。

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
        <td align="center">soft serial port TX</td>
 </tr>
    <tr>
     <td align="center">TX</td>
     <td align="center">--></td>
        <td align="center">soft serial port RX</td>
 </tr>
</table>

所有函数的使用方式与上面示例1到示例5中的方式相同，因此在这个示例中我们不再重复。在这个示例中，我们将向你概述如何使用Arduino的软串口从传感器获取数据信息。

:::tip提示
关于Arduino软串口的说明，请参考[Arduino官方文档](https://docs.arduino.cc/learn/built-in-libraries/software-serial)。
:::

为了避免使用Serial进行输出和数据传输时造成的数据混乱，在Arduino端我们通常使用软串口。

软串口库的导入以及RX和TX引脚的定义需要在程序的早期进行。以下程序将**A2**和**A3**引脚定义为软串口的**RX**和**TX**引脚。

```c
#include <SoftwareSerial.h>
//选择任意两个可以与SoftwareSerial一起使用的引脚作为RX（接收）和TX（发送）
#define RX_Pin A2
#define TX_Pin A3

SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

//我们将使用软件串行通信
FallDetection_60GHz radar = FallDetection_60GHz(&mySerial);
```

同时，不要忘了在`Setup()`函数中设置软串口的波特率。

```c
void setup() {
  // 请在这里放置您的设置代码，它将运行一次：
  Serial.begin(115200);

  mySerial.begin(115200);

  while(!Serial);   //当串行端口打开时，程序开始执行。

  Serial.println("Readly");
}
```

以**示例1**为例，如果你想使用Arduino打印传感器报告的数据帧，那么完整的程序如下。

```c
#include "Arduino.h"
#include <60ghzfalldetection.h>

#include <SoftwareSerial.h>
// 选择任意两个可以与SoftwareSerial一起使用的引脚作为RX（接收）和TX（发送）
#define RX_Pin A2
#define TX_Pin A3

SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// 我们将使用软件串行通信
FallDetection_60GHz radar = FallDetection_60GHz(&mySerial);

void setup() {
  // 请在这里放置您的设置代码，它将运行一次：
  Serial.begin(115200);

  mySerial.begin(115200);

  while(!Serial);   //当串行端口打开时，程序开始执行

  Serial.println("Readly");
}

void loop()
{
  // 请在这里放置您的主代码，它将反复运行：
  radar.recvRadarBytes();           //接收雷达数据并开始处理
  radar.showData();                 //串行端口打印出一组接收到的数据帧
  delay(200);                       //添加时间延迟以避免程序卡顿
}
```

### 示例7：直接与电脑连接获取数据

如果你想使用为传感器设计的上位机，或者想通过串口软件获取完整的数据帧，你可以参考这个例程。

通过**UART转USB**设备将传感器直接连接到电脑的USB端口上。接线方式如下表所示。

<table align="center">
 <tr>
     <td colspan="4"><div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/60GHzradar/uart.png"/></div></td>
 </tr >
 <tr >
     <td align="center">UART 到 USB</td>
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


使用诸如串口调试助手这样的软件来选择传感器所在的串口。

<div align="center"><img width ="200" src="https://files.seeedstudio.com/wiki/60GHzradar/37.png"/></div>

:::caution警告
MR60FDA1传感器需要5V电源供电，否则传感器可能无法正常工作。
:::

连接成功后，你将看到传感器持续发送一系列的消息。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/39.png"/></div>

同时，你也可以通过软件的发送功能向传感器发送数据帧。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/40.png"/></div>

:::caution警告
如果选择**ASCII**作为发送数据的格式，每个数据集前需要加上**0x**前缀。如果选择**HEX**，则每组数据前不需要加上**0x**前缀。
:::

## 故障排除

### 常见问题1：这个传感器能否在同一环境中同时检测到多个人？

> 答：不可以。这个传感器只能用于单个生命体。如果监测范围内有多个人或动物，这将影响监测结果。

### FAQ2：为什么我在XIAO ESP32C3的串口监视器中看不到任何内容？

> XIAO ESP32C3的串口功能与一般的Arduino硬件并不完全一致，直接使用Serial1可能会导致USB串口无法工作。对于相关应用案例，请前往[XIAO ESP32C3的串口章节](https://wiki.seeedstudio.com/XIAO_ESP32C3_Pin_Multiplexing/#serial)查看详细信息。

## 资源

- **[PDF]** [通用协议](https://files.seeedstudio.com/wiki/60GHzradar/60GHz_mmWave_Sensor_Fall_Detection_Module_Pro-Universal_Protocol.pdf)
- **[PDF]** [用户手册V1.3](https://files.seeedstudio.com/wiki/60GHzradar/new_res/MR60FDA1_user_manual-V1.3.pdf)
- **[PDF]** [Seeed Studio毫米波传感器外壳设计](https://files.seeedstudio.com/wiki/60GHzradar/Seeed_Studio_MMWave_Sensor-Case_Design.pdf)
- **[EXE]** [上位机软件](https://files.seeedstudio.com/wiki/60GHzradar/Fall_detection_radar.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您在使用我们的产品时能够尽可能顺畅。我们提供多种沟通渠道，以满足不同偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>