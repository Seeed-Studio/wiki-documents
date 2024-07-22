---
description: 60GHz mmWave Static Breathing and Heartbeat
title: 60GHz毫米波传感器 - 人体静态睡眠呼吸监测
keywords:
- mmWave_radar_sensor
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Radar_MR60BHA1
last_update:
  date: 03/23/2024
  author: AnXiaodie
---

# 60GHz毫米波传感器 - 人体静态睡眠呼吸监测（MR60BHA1）

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/60GHzradar/newpic.png"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Breathing-and-Heartbeat-Module-p-5305.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>



## 介绍

MR60BHA1 60GHz雷达模块采用调频连续波（FMCW）检测理论，实现高精度的人体呼吸率和心率的同时监测，提供了完全私密和安全的环境，不受其他噪音干扰的影响。它是消费电子、医疗保健以及工业应用中的标准生物雷达系统。在本指南中，我们将向您介绍如何使用它。

### 应用

- 智能家居
- 医疗保健
- 呼吸率检测
- 心率检测
- 智能酒店
- 医疗助手

### 特点

- 启用理论：基于FMCW（调频连续波信号）实现雷达检测
- 标准算法：在自适应环境中同时感应和输出人体呼吸率和心率
- 完美的隐私保护：应用FMCW监测技术，提供无识别能力的监控能力
- 健康友好的工作状态：输出功率低至对人体无害
- 高稳定性：独立于温度、湿度、噪音、气流、灰尘、光线和其他环境影响
- 高测量精度：实现高达85%的心率精度和高达90%的呼吸精度
- 高度灵活的硬件设计雷达：支持二次开发，适应各种应用场景

### 规格参数

| 参数内容           | 最小值 | 典型值 | 最大值 | 单位     |
|-----------------------------------|----------|----------|----------|-------|
| **性能**           |        |        |        |          |
| 探测距离（胸部）   | 0.4    |        | 1.5    | 米       |
| 呼吸测量精度       |        | 90     |        | %        |
| 心率测量精度       |        | 95     |        | %        |
| 刷新时间           | 1      |        | 30     | 秒       |
| 观察设置时间       |        | 20     |        | 秒       |
| **操作参数**       |        |        |        |          |
| 操作电压（VCC）    | 4.6    | 5      | 6      | 伏       |
| 操作电流（ICC）    |        | 150    |        | 毫安     |
| 操作温度（TOP）    | -20    |        | 60     | 摄氏度   |
| 存储温度（TST）    | -40    |        | 80     | 摄氏度   |
| **发射参数**       |        |        |        |          |
| 操作频率（fTX）    | 58     | 60     | 63.5   | 吉赫兹   |
| 发射功率（Pout）   |        | 6      |        | 分贝毫瓦 |
| **天线参数**       |        |        |        |          |
| 天线增益（GANT）   |        | 4      |        | 分贝i    |
| 水平波束角（-3dB） | -20    |        | 20     | 度       |
| 垂直波束角（-3dB） | -20    |        | 20     | 度       |

## 硬件概述

在开始之前，了解产品的一些基本参数是非常必要的。下表提供了60GHz毫米波呼吸和心率模块的特性信息。

<div align="center"><img width ="300" src="https://files.seeedstudio.com/wiki/60GHzradar/pinout3.png"/></div>

- 接口1：
  - 5V引脚是传感器的电源供应接口。
  - RX和TX是传感器的数据传输接口。RX表示串行接收，TX表示串行发送。
  - 人体存在状态输出接口。您可以使用这两个引脚的电平来确定环境中当前的人体活动情况。
    - GP2输出：高电平 - 有人，低电平 - 无人。
    - GP1输出：高电平 - 活动状态，低电平 - 静止状态。
- 接口2：
  - 闪存固件引脚：GND/3.3V/SWD/SWC。
  - 顶部输入/输出引脚：GP3~GP6。

## 开始使用

### 固件版本更新

毫米波传感器经过长期的技术沉淀和用户的宝贵建议，我们一直在对原始产品进行迭代，以提供更准确、可靠的监测结果，并为我们的用户带来更好的体验。

新出厂的传感器默认搭载最新的固件，以确保用户能够享受到最新的产品体验。然而，为了照顾老用户的体验，我们在此提供最新的固件和更新方法，以确保您能够使用我们的最新技术。

#### 通用方法——使用J-link烧录固件

如果您遇到固件错误、雷达异常、固件故障等问题，使用此方法重新烧录固件是最有效的方法。

**下载最新固件**

| 固件版本 | 下载地址 |
|:----------------:|:----------------:|
| Jlink_MR60BHA1-V230104.bin | [下载](https://files.seeedstudio.com/wiki/60GHzradar/new_res/Jlink_MR60BHA1-V230104.bin) |
| Jlink_MR60BHA1-V230904.bin | [下载](https://files.seeedstudio.com/wiki/60GHzradar/new_res/Jlink_MR60BHA1-V230904.bin) |

:::caution警告
  1. 请仔细核对您的产品功能，请勿与其他毫米波传感器混淆并刷入此固件，否则可能导致产品功能异常，后果需自负！
  2. 还请注意，更新固件的不同方式使用的固件内容也不同，您正在下载的是通过**J-link**烧录的固件。
:::

**将您的雷达更新到最新版本**

**步骤1.** 您需要准备一个**Jlink**和**MR60BHA1** 60GHz毫米波传感器。

按照下面的示意图，使用杜邦线将雷达和Jlink连接起来。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/57.jpg"/></div>

**步骤2.** 下载必要的软件和固件。

|              文件               |                           下载地址                           |
|:----------------:|:----------------:|
|         JlinkV644e.rar          | [下载](https://files.seeedstudio.com/wiki/60GHzradar/JlinkV644e.rar) |
| Pack_Segger_AT32F4xx_v1.3.3.zip | [下载](https://files.seeedstudio.com/wiki/60GHzradar/Pack_Segger_AT32F4xx_v1.3.3.zip) |

**步骤3.** 解压**JlinkV644e.rar**，并打开其中的**JLink_Windows_V644e.exe**文件。

只需按照默认选项进行安装。安装完成后，启动**J-Flash V6.44e**软件。

**步骤4.** 安装芯片包。

解压**Pack_Segger_AT32F4xx_v1.3.3.zip**，并打开其中的**Segger_AT32F4xx_AddOn.exe**文件。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/47.png"/></div>

**步骤5.** 创建一个新项目。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/48.png"/></div>

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/49.png"/></div>

找到并选择**AT32F403ARGT7**。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/50.png"/></div>

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/51.png"/></div>

**步骤6.** 将雷达固件（.bin文件）拖入此软件，将弹出一个窗口，我们将直接使用其默认的起始地址0x8000000。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/52.png"/></div>

**步骤7.** 点击**Target** -> **Connect**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/53.png"/></div>

当连接成功时，将显示“Connected successfully”。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/60GHzradar/54.png"/></div>

擦除固件：**Target** -> **manual Programming** -> **Erase Chip**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/55.png"/></div>

升级固件：**Target** -> **manual Programming** -> **Program & Verify**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/56.png"/></div>

此时，固件更新已完成。

#### 通过UART更新固件

考虑到J-link价格昂贵，对于大多数只需要更新雷达固件的用户来说，购买J-link太奢侈了，因此我们提供了一种通过UART更新的方法。

**下载最新固件**

| 固件版本 | 下载地址 |
|:----------------:|:----------------:|
| UART_MR60BHA1-230104.bin | [下载](https://files.seeedstudio.com/wiki/60GHzradar/new_res/UART_MR60BHA1-230104.bin) |
| UART_MR60BHA1-230904.bin | [下载](https://files.seeedstudio.com/wiki/60GHzradar/new_res/UART_MR60BHA1-230904.bin) |

:::caution警告

1. 请仔细核对您的产品功能，请勿与其他毫米波传感器混淆并刷入此固件，否则可能导致产品功能异常，后果需自负！
2. 还请注意，更新固件的不同方式使用的固件内容也不同，您正在下载的是通过**UART**烧录的固件。
3. 在使用UART升级固件之前，请确保您的雷达固件版本**至少为G60SM1SYv010003**，否则可能会导致雷达无法使用，届时您将需要使用J-link烧录固件才能使用！

您可以通过向雷达发送命令`0x53 0x59 0x02 0xA4 0x00 0x01 0x0F 0x62 0x54 0x43`来查询固件版本号信息。雷达报告的数据将以字符串形式显示，您会看到类似以下效果。

`G60SM1SYv010009`是雷达报告的型号编号，其中`10009`是版本号。这意味着这款传感器支持UART升级。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/20.png"/></div>
:::

**将您的雷达更新到最新版本**

**步骤1**. 您需要准备一个**UART转USB转换器**和**MR60BHA1** 60GHz毫米波传感器。

按照下面的示意图，使用杜邦线将雷达和UART转USB转换器连接起来。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/uart.png"/></div>

**步骤2**. 下载必要的软件和固件。

| 文件 | 下载地址 |
|:----------------:|:----------------:|
| PackageMake-v1.1.1.zip | [下载](https://files.seeedstudio.com/wiki/60GHzradar/new_res/PackageMake-v1.1.1.zip) |

**步骤3**. 解压PackageMake-v1.1.1.zip包，并打开其中的PackageMake-v1.1.1.exe文件。

将UART转USB转换器与连接到电脑的传感器相连，点击软件左上角齿轮图案，选择端口号，将波特率设置为115200，然后点击右下角确认。（如果找不到端口号，请检查连接，然后点击左下角的刷新按钮重新尝试）

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/11.png"/></div>

**步骤4**. 连接传感器

按照上述描述设置好串口后，点击右上角的第二个图标，如果端口选择正确，您将看到雷达的原始数据打印出来。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/12.png"/></div>

**步骤5**. 更新固件

点击鼠标左键右上角的最后一个图标，这将弹出一个窗口来选择固件。请选择您已下载的固件版本。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/13.png"/></div>

选择完成后，软件下方会显示所选文件的路径，请再次确认所选固件版本和型号是否与您使用的传感器一致。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/17.png"/></div>

要升级固件，请双击鼠标左键到软件顶部左侧的最后一个图标，然后固件将开始下载到传感器。

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
        <td align="center">MR60BHA1 传感器</td>
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

除了上述提到的串口软件外，您还可以直接使用为雷达设计的[上位机软件](https://files.seeedstudio.com/wiki/60GHzradar/MR60BHA1_new.exe)。

:::tip提示
如果您使用的是较旧版本的OP和固件，请尽快[升级到最新版本](https://yiyan.baidu.com/#firmware-version-updates)，以确保您能享受到软件协议和Wiki内容。
:::

以下五个部分解释了软件中各个部分的作用。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/1.png"/></div>

1. 连接设置

    选择传感器连接到电脑的端口。在选择端口之前，通常需要点击**刷新串口按钮**来刷新端口。一旦串口选择正确，数据将自动在圆圈4中更新（如果有数据可用）。

2. 功能设置

    - **调试**：当此功能打开时，软件中可以输出实时原始数据。这是图中圆圈3的窗口。
    - **保存原始数据**：点击后，您可以选择将原始数据保存到本地电脑。但是请注意，点击此按钮后不会保存新数据，只会保存最新的历史数据。
    - **保存休眠数据**：点击后，您可以选择保存与休眠相关的原始数据信息，而其他数据则不会保存。但是请注意，点击此按钮后不会保存新数据，只会保存最新的历史数据。

3. 串口监视器

    当在圆圈2中的**调试**选项被选中时，此窗口将出现，此时该区域将显示传感器的实时数据帧。在底部，您可以向传感器发送命令帧。可以发送或查询的命令可以在传感器的用户手册中找到。

4. 图形显示

    这部分实时显示线图。显示的数据内容包括呼吸率、心率和身体参数。横坐标为时间，纵坐标为对应的数据。

5. 状态与方向

    这个区域用于观察人体存在状态以及人体的方向。请注意，人体方向数据仅供参考。

## 使用Arduino开发传感器

### Arduino库概述

:::tip提示
如果您是首次使用Arduino，我们强烈建议您参考[Arduino入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。
:::

本示例中使用的库代码可以通过点击下面的图标进行下载。

<p style={{textAlign: 'center'}}><a href="https://github.com/limengdu/Seeed-Studio-MR60BHA1-Sensor" target="_blank"><div align="center"><img width ="300" src="https://files.seeedstudio.com/wiki/seeed_logo/DOWNLOAD.png" /></div></a></p>

#### 功能

在我们开始开发草图之前，让我们来看看这个库可用的功能。

- `void recvRadarBytes()` —— 此函数根据传感器数据协议中的帧头和帧尾，通过UART收集传感器报告的数据帧。与`showData()`函数一起使用，收集的数据信息可以通过串口打印出来。
  - **输入参数：** 无
  - **返回值：** 无
- `void showData()` —— 此函数用于通过串口一次性打印出传感器报告的完整数据帧，需要与`recvRadarBytes()`函数一起使用。
  - **输入参数：** 无
  - **返回值：** 无
- `void HumanExis_Func()` —— 此函数负责解析传感器的数据帧，并输出关于人体存在状态的相关数据。
  - **输入参数：** 无
  - **返回值：**
    - `unsigned int sensor_report` —— 返回的值表示解析的数据帧属于哪个状态类别。具体的类别可以在**默认变量**部分找到。只有当发生变化时，才会报告人体移动信息。
    - `int bodysign_val` —— 返回的值代表人体运动参数的值。该值每秒报告一次。
    - `float distance` —— 传感器确定当前到人体的距离，值以米为单位。该值每两秒报告一次。
    - `float Dir_x, Dir_y, Dir_z` —— 表示传感器检测到的人体位置信息。人体位置信息有正负单位，以米为单位。该值每两秒报告一次。

- `void Breath_Heart()` —— 此函数负责解析传感器中的呼吸和心跳数据，并返回相关值。
  - **输入参数：** 无
  - **返回值：**
      - `unsigned int sensor_report` —— 返回的值表示解析的数据帧属于哪个状态类别。具体的类别可以在**默认变量**部分找到。
      - `unsigned int heart_rate` —— 心跳数值。每3秒报告一次。数值范围0~100。
      - `unsigned int heart_point_1, heart_point_2, heart_point_3, heart_point_4, heart_point_5` —— 心跳波形数据。5个字节代表1秒内的5个实时值，波形是正弦波数据，中心轴为128，表示当心跳强度为0时，将显示为128。该值每秒报告一次。
      - `unsigned int breath_rate` —— 呼吸数值。每3秒报告一次。数值范围0~20。
      - `unsigned int breath_point_1, breath_point_2, breath_point_3, breath_point_4, breath_point_5` —— 呼吸波形数据。5个字节代表1秒内的5个实时值，波形是正弦波数据，中心轴为128，表示当呼吸强度为0时，将显示为128。该值每秒报告一次。

- `void SleepInf_Decode()` —— 此函数负责解析传感器报告的睡眠数据信息。只有当被监测的人已上床且入睡超过五分钟后，此函数才有效。在使用此函数时，请确保启用了睡眠状态转移模式。

  - **输入参数：** 无
  - **返回值：**
    - `unsigned int sensor_report` —— 返回的值表示解析的数据帧属于哪个状态类别。具体的类别可以在**默认变量**部分找到。
    - `unsigned int awake_time` —— 如果被监测的人已上床，此值表示其清醒时间。此值将与其他睡眠状态数据一起每十分钟报告一次。
    - `unsigned int light_time` —— 如果被监测的人已上床，此值表示其浅睡时间。此值将与其他睡眠状态数据一起每十分钟报告一次。
    - `unsigned int deep_time` —— 如果被监测的人已上床，此值表示其深睡时间。此值将与其他睡眠状态数据一起每十分钟报告一次。
    - `unsigned int sleep_score` —— 此值表示睡眠质量评分。此信息将在睡眠过程结束时报告。
    - `boolean existence` —— 该值表示人体存在信息。返回结果为True表示有人存在，返回结果为False表示无人存在。此值将与其他睡眠状态数据一起每十分钟报告一次。

    - `unsigned int sleep_status` —— 此值表示睡眠状态。有四种睡眠状态，分别是：离床、清醒、浅睡和深睡。此值将与其他睡眠状态数据一起每十分钟报告一次。

    - `unsigned int breath_rate` —— 十分钟内的平均呼吸率。此值将与其他睡眠状态数据一起每十分钟报告一次。

    - `unsigned int heart_rate` —— 十分钟内的平均心率。此值将与其他睡眠状态数据一起每十分钟报告一次。

    - `unsigned int turn_num` —— 十分钟内的翻身次数。此值将与其他睡眠状态数据一起每十分钟报告一次。

    - `unsigned int substantial_move_ratio` —— 人物十分钟内大幅度运动所占的比例。此值将与其他睡眠状态数据一起每十分钟报告一次。

    - `unsigned int small_move_ratio` —— 人物十分钟内小幅度运动的百分比。此值将与其他睡眠状态数据一起每十分钟报告一次。

    - `unsigned int apnea_num` —— 十分钟内的呼吸暂停次数。此值将与其他睡眠状态数据一起每十分钟报告一次。

    - `unsigned int sleep_time` —— 总睡眠时长（小时）。当传感器确定睡眠过程结束时报告。

    - `unsigned int awake_time_ratio` —— 清醒时间所占的百分比。当传感器确定睡眠过程结束时报告。

    - `unsigned int light_time_ratio` —— 浅睡时间所占的百分比。当传感器确定睡眠过程结束时报告。

    - `unsigned int deep_time_ratio` —— 深睡时间所占的百分比。当传感器确定睡眠过程结束时报告。

    - `unsigned int outbed_time` —— 离床时间。当传感器确定睡眠过程结束时报告。

    - `unsigned int outbed_num` —— 离床次数。当传感器确定睡眠过程结束时报告。
    
- `void send_func(const unsigned char* buff, int len, bool cyclic /*=false*/)` —— 该函数用于发送查询帧和命令帧。
  - **输入参数：**
    - `buff` —— 你想发送给传感器的数据帧。
    - `len` —— 你想发送给传感器的数据帧的长度。
    - `cyclic` —— 循环发送开关。默认值为false，如果你希望循环发送这个数据帧，可以设置为**true**。
  - **返回值：** 无
- `void ModeSelect_func(int mode)` —— 该函数用于选择传感器的操作模式。有两种操作模式，即睡眠状态传输模式和实时数据传输模式。在睡眠状态传输模式下，睡眠监测功能开启（`SleepInf_Decode()`有效）。在实时数据传输模式下，睡眠监测功能关闭（`SleepInf_Decode()`无效），但会报告波形数据。
  - **输入参数：**
    - `mode` —— 所选模式编号。1表示实时数据传输模式，2表示睡眠状态传输模式。
  - **返回值：** 无
- `void reset_func()` —— 该函数用于重置传感器。
  - **输入参数：** 无
  - **返回值：** 无


### 默认变量

```c
#define MESSAGE_HEAD1 0x53      //数据帧头1
#define MESSAGE_HEAD2 0x59      //数据帧头2

#define MESSAGE_END1  0x54      //数据帧尾部1
#define MESSAGE_END2  0x43      //数据帧尾部2

#define HUMAN_PSE_RADAR 0x80    //人类存在数据

#define PRESENCE_INF 0x01       //存在信息
#define SOMEONE_HERE 0x01       //有人
#define NOONE_HERE 0x00         //无人

#define MOVE_INF 0x02           //活动信息
#define PSE_NONE 0x00           //无
#define STATIONARY 0x01         //一个人是静止的
#define MOVEMENT 0x02           //一个人是运动的

#define BODY_SIG 0x03           //人移动信息

#define DISTANCE 0x04           //与被检测人的距离

#define DIRECTIONS 0x05         //身体朝向

#define HEART_INF 0x85          //心率信息

#define HEART_RATE 0x02         //心率

#define HEART_RATE_WAVE 0x05    //心率波形（目前不进行分析）

#define BREATH_RATE_RADAR 0x81  //呼吸心率数据

#define BREATH_INF 0x01         //呼吸数据
#define BREATH_NORMAL 0x01      //正常呼吸
#define BREATH_RAPID 0x02       //急性呼吸异常
#define BREATH_SLOW 0x03        //心跳缓慢
#define BREATH_NONE 0x04        //雷达未检测到任何物体

#define BREATH_VAL 0x02         //呼吸价值

#define BREATH_WAVE 0x05        //呼吸波形（目前不进行分析）

#define SLEEP_INF 0x84          //睡眠信息

#define INOUT_BED 0x01          //在床上和不在床上
#define OUT_BED 0x00            //离开床
#define IN_BED 0x01             //上床
#define INOUT_NONE 0x02         //无（实时检测模式下显示）

#define SLEEP_STATE 0x02        //睡眠状态
#define DEEP_SLEEP 0x00         //深度睡眠
#define LIGHT_SLEEP 0x01        //浅睡
#define AWAKE 0x02              //清醒
#define SLEEP_NONE 0x03         //无（在实时检测模式下显示）

#define AWAKE_TIME 0x03         //清醒时间

#define LIGHTSLEEP_TIME 0x04    //浅睡时间

#define DEEPSLEEP_TIME 0x05     //深度睡眠时间

#define SLEEP_SCORE 0x06        //睡眠质量分数

#define SLEEP_STATUE 0x0C       //睡眠综合状态报告

#define SLEEP_QUALITY 0x0D      //睡眠质量综合信息报告

#define SLEEP_ERROR 0x0E        //异常睡眠报告

#define SLEEP_LESS4H 0x00        //睡眠时间少于4小时
#define SLEEP_OVER12H 0x01       //睡眠时间超过4小时
#define SLEEP_LONGTIMENOONE 0x02 //异常情况，长时间无人
#define SLEEP_ERRORNONE 0x03     //无

#define reset_frame_len 10      //重置数据帧长度
const unsigned char breath_reset_frame[10] = {0x53, 0x59, 0x01, 0x02, 0x00, 0x01, 0x0F, 0xBF, 0x54, 0x43};

#define mode_frame_len 10       //模式选择命令帧长度
//模式选择命令帧
const unsigned char realtime_mode_frame[10] = {0x53, 0x59, 0x84, 0x0F, 0x00, 0x01, 0x00, 0x40, 0x54, 0x43};
const unsigned char sleepstatus_mode_frame[10] = {0x53, 0x59, 0x84, 0x0F, 0x00, 0x01, 0x01, 0x41, 0x54, 0x43};

//返回状态，用于Arduino
//sensor_report的可能值
#define NOONE 0x01
#define SOMEONE 0x02
#define NONEPSE 0x03
#define STATION 0x04
#define MOVE 0x05
#define BODYVAL 0x06
#define DISVAL 0x07
#define DIREVAL 0x08

#define HEARTRATEVAL 0x09
#define HEARTRATEWAVE 0x10
#define BREATHNOR 0x11
#define BREATHRAPID 0x12
#define BREATHSLOW 0x13
#define BREATHNONE 0x14
#define BREATHVAL 0x15
#define BREATHWAVE 0x16

#define OUTBED 0x17
#define INBED 0x18
#define NOINOUT 0x19
#define SLEEPAWAKE 0x20
#define SLEEPLIGHT 0x21
#define SLEEPDEEP 0x22
#define SLEEPNONE 0x23
#define AWAKETIME 0x24
#define LIGHTTIME 0x25
#define DEEPTIME 0x26
#define SLEEPSCORE 0x27
#define SLEEPSTATUE 0x28
#define SLEEPQUALITY 0x29
#define SLEEPLESS4H 0x30
#define SLEEPOVER12H 0x31
#define LONGTIMENOONE 0x32
#define ERRORNONE 0x33


unsigned int sensor_report = 0, bodysign_val = 0, awake_time = 0, light_time = 0, deep_time = 0, sleep_score = 0, turn_num = 0;
unsigned int heart_rate = 0, heart_point_1 = 0, heart_point_2 = 0, heart_point_3 = 0, heart_point_4 = 0, heart_point_5 = 0;
unsigned int breath_rate = 0, breath_point_1 = 0, breath_point_2 = 0, breath_point_3 = 0, breath_point_4 = 0, breath_point_5 = 0;
unsigned int substantial_move_ratio = 0, samll_move_ratio = 0, apnea_num = 0, sleep_status = 0, sleep_time = 0;
unsigned int awake_time_radio = 0, light_time_radio = 0, deep_time_radio = 0;
unsigned int outbed_time = 0, outbed_num = 0;
float distance = 0;
float Dir_x = 0, Dir_y = 0, Dir_z = 0;
boolean existence;
```
### 安装步骤
**第一步**。 你需要安装Arduino软件。
<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></div></a></p>

**第二步**。 启动Arduino应用程序。
<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"/></div>

**第三步**。 选择你的开发板型号，并将其添加到Arduino IDE中。
- 如果你想在后续流程中使用**Seeeduino V4.2**，请参考[这个教程](https://wiki.seeedstudio.com/Seeed_Arduino_Boards/)以完成添加。
- 如果你想在后续流程中使用**Seeeduino XIAO**，请参考[这个教程](https://wiki.seeedstudio.com/Seeeduino-XIAO/#software)以完成添加。
- 如果你想在后续流程中使用**XIAO RP2040**，请参考[这个教程](https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino/#software-setup)以完成添加。
- 如果你想在后续流程中使用**XIAO BLE**，请参考[这个教程](https://wiki.seeedstudio.com/XIAO_BLE/#software-setup)以完成添加。
- 如果你想在后续流程中使用**XIAO ESP32C3**，请参考[这个教程](https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started/#software-setup)以完成添加。

:::caution 注意
对于**XIAO nRF52840**，请选择**Seeed nRF52 mbed-enabled Boards**，否则在运行程序时可能会报错。
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/XIAO-BLE/SeeednRFmbed.png"/></div>
:::

**第四步**。 安装Arduino代码库。

首先，从[GitHub](https://github.com/limengdu/Seeed-Studio-MR60BHA1-Sensor)获取代码库，并将其下载到本地计算机。

既然你已经下载了ZIP格式的库文件，打开你的Arduino IDE，点击**Sketch（草图）> Include Library（包含库）> Add .ZIP Library（添加.ZIP库）**。选择你刚刚下载的ZIP文件，如果库安装正确，你将在通知窗口中看到**Library added to your libraries（库已添加到你的库中）**，这意味着库已成功安装。
<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png"/></div>

## Arduino 示例
既然我们已经安装了库并了解了基本功能，那么让我们运行一些XIAO BLE的示例来看看它的表现。
### 所需材料
在完成以下示例之前，你需要准备以下材料。

|              |              |              |
|:--------------:|:--------------:|:--------------:|
|<div align="center"><img width ="210" src="https://files.seeedstudio.com/wiki/60GHzradar/newpic.png"/></div>| <div align="center"><img width ="210" src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg"/></div>| <div align="center"><img width ="150" src="https://files.seeedstudio.com/wiki/60GHzradar/dupont.jpg"/></div>|
|[**60GHz MR60BHA1 传感器**](https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Breathing-and-Heartbeat-Module-p-5305.html)|[**Seeed XIAO BLE nRF52840 感知板**](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html?queryID=4bbd8c09f20216aa26f6b5a9040504d0&objectID=5253&indexName=bazaar_retailer_products)|**2mm to 2.54mm Pitch Ribbon Cable**|

**第一步**。通过主板将设备连接到计算机。接线图如下表所示。
<table align="center">
  <tbody><tr>
      <td colSpan={4}><div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/60GHzradar/30.png" /></div></td>
    </tr>
    <tr>
      <td align="center">矽力特（Seeed Studio）XIAO nRF52840 开发板</td>
      <td align="center" />
      <td align="center">MR60BHA1 传感器</td>
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

**第二步**。在Arduino IDE左上角的菜单栏中，选择**工具**，选择你正在使用的开发板类型，并选择相应的串行端口。

:::tip提示
如果你使用的是**MacOS**，设备的串行端口名称通常以**/dev/cu.usbmodem xxx**开头，以设备名称结尾。如果你使用的是**Windows**，设备的串行端口名称通常以**COM**开头，同样以设备名称结尾。
:::
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/60GHzradar/3.png"/></div>
在本示例中，我们将展示雷达如何与我们的热门产品XIAO BLE配合使用。

### 示例1：原始数据导出
本示例将指导你通过串口打印出传感器报告的原始数据。
以下示例程序位于库的examples文件夹中，名为**MR60BHA1_print_rawdata**。

```c
#include "Arduino.h"
#include <60ghzbreathheart.h>
//#include <SoftwareSerial.h>
// 选择任意两个可以通过SoftwareSerial用于接收（RX）和发送（TX）的引脚
//#define RX_Pin A2
//#define TX_Pin A3
//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);
// 我们将使用软件串行通信
//BreathHeart_60GHz radar = BreathHeart_60GHz(&mySerial);
// 也可以尝试使用硬件串行通信进行
BreathHeart_60GHz radar = BreathHeart_60GHz(&Serial1);
void setup() {
  // 将你的初始化代码放在这里，只运行一次：
  Serial.begin(115200);
  Serial1.begin(115200);
  //  mySerial.begin(115200);
  while(!Serial);   //当串行端口打开时，程序开始执行。
  Serial.println("Readly");
}
void loop()
{
  // 将你的主代码放在这里，它将反复运行：
  radar.recvRadarBytes();           //接收雷达数据并开始处理
  radar.showData();                 //串行端口打印出接收到的一系列数据帧
  delay(200);                       //添加时间延迟以避免程序堵塞
}
```
:::tip提示
如果您使用的是 XIAO ESP32 系列，并且毫米波雷达没有数据反馈。您可以尝试将上面的代码从 更改为`Serial1.begin(115200)`;`Serial1.begin(115200, SERIAL_8N1, D7, D6)`;
:::


在这个程序中，我们使用了XIAO nRF52840的硬件**Serial1**端口来连接传感器，并使用硬件**Serial**端口（Serial）来输出数据，因此我们需要在初始化函数`Setup()`中单独初始化这个串行端口。

在主要的`loop()`函数中，我们使用`recvRadarBytes()`函数从传感器接收数据帧，然后使用`showData()`函数通过串行端口打印出接收到的数据帧。

在这个程序中，需要注意的是每两个数据帧的接收和输出之间有一个间隔，以避免主板发生堵塞。这个时间间隔不应少于**150毫秒**。

这意味着主板无法接收传感器报告的所有数据帧，但由于传感器报告的数据帧数量非常大且频繁，这并不影响使用传感器确定环境的准确性。

上传程序。将您的串行监视器打开到115200波特率，应该能看到结果。输出应该类似于下面的图片。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/2.png"/></div>

### 示例2：人体存在检测功能的使用

在这个示例中，我们将解释如何使用人体存在检测功能，并通过串行监视器在函数中打印出该功能的所有值。

以下示例程序位于库的examples文件夹中，名为**MR60BHA1_human_existence_inf_output**。

```c
#include "Arduino.h"
#include <60ghzbreathheart.h>

//#include <SoftwareSerial.h>
// 选择任意两个可以与SoftwareSerial一起使用的引脚作为接收（RX）和发送（TX）。
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// 我们将使用软件串口。
//BreathHeart_60GHz radar = BreathHeart_60GHz(&mySerial);

// 也可以尝试使用硬件串口与……进行通信
BreathHeart_60GHz radar = BreathHeart_60GHz(&Serial1);

void setup() {
  // 将您的初始化代码放在这里，确保它只运行一次：
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   //当串口被打开时，程序开始执行。

  Serial.println("Readly");
}

void loop()
{
  //将你的主要代码放在这里，以便反复运行：
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
      case DISVAL:
        Serial.print("The sensor judges the distance to the human body to be: ");
        Serial.print(radar.distance, DEC);
        Serial.println(" m");
        Serial.println("----------------------------");
        break;
      case DIREVAL:
        Serial.print("The sensor judges the orientation data with the human body as -- x: ");
        Serial.print(radar.Dir_x);
        Serial.print(" m, y: ");
        Serial.print(radar.Dir_y);
        Serial.print(" m, z: ");
        Serial.print(radar.Dir_z);
        Serial.println(" m");
        Serial.println("----------------------------");
        break;
    }
  }
  delay(200);                       //添加时间延迟以防止程序卡死
}
```
:::tip提示
如果您使用的是 XIAO ESP32 系列，并且毫米波雷达没有数据反馈。您可以尝试将上面的代码从 更改为`Serial1.begin(115200)`;`Serial1.begin(115200, SERIAL_8N1, D7, D6)`;
:::

在这个示例中，人体存在检测功能是通过`HumanExis_Func()`函数实现的。程序实现的基本逻辑是，`HumanExis_Func()`函数将传感器报告的状态信息赋值给`sensor_report`变量。然后，基于`sensor_report`的值，我们通过串行端口打印出该状态下的所有值。

请注意，`sensor_report`对应于缩进下的串行端口数据输出。例如，代表信号参数的`bodysign_val`变量仅在`sensor_report`为`BODYVAL`时有效，而在传感器报告的其他`sensor_reports`中则不存在。

上传程序。将您的串行监视器打开到115200波特率，应该能看到结果。输出应该类似于下面的图片。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/3.png"/></div>

### 示例3：静止人体呼吸和心跳功能的使用

在这个示例中，我们将使用`Breath_Heart()`函数来检测静止人体的呼吸和心率。

:::tip
我们强调的是对静止人体的呼吸和心率的检测。当人体处于运动状态时，请不要使用本产品，因为我们已经限制了传感器的心率和呼吸率。最大心率将**不会超过100**，最大呼吸率将**不会超过25**。
:::

以下示例程序位于库的examples文件夹中，名为**MR60BHA1_Breath_heartbeat_inf_output**。

```c
#include "Arduino.h"
#include <60ghzbreathheart.h>

//#include <SoftwareSerial.h>
// 选择任意两个可以与SoftwareSerial一起使用的引脚作为接收（RX）和发送（TX）。
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// 我们将使用软件串口。
//BreathHeart_60GHz radar = BreathHeart_60GHz(&mySerial);

// 也可以尝试使用硬件串口与……进行通信
BreathHeart_60GHz radar = BreathHeart_60GHz(&Serial1);

void setup() {
  // 将您的初始化代码放在这里，确保它只运行一次：
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   //当串口被打开时，程序开始执行

  Serial.println("Readly");

  // radar.ModeSelect_fuc(1);  //1：表示实时传输模式，2：表示睡眠状态模式。
  //在设置模式后，如果没有看到返回的数据，您可能需要重新为传感器供电。
}

void loop()
{
  // 将你的主要代码放在这里，以便反复运行：
  radar.Breath_Heart();           //呼吸和心跳信息输出
  if(radar.sensor_report != 0x00){
    switch(radar.sensor_report){
      case HEARTRATEVAL:
        Serial.print("Sensor monitored the current heart rate value is: ");
        Serial.println(radar.heart_rate, DEC);
        Serial.println("----------------------------");
        break;
      case HEARTRATEWAVE:  //仅在实时数据传输模式开启时有效
        Serial.print("The heart rate waveform(Sine wave) -- point 1: ");
        Serial.print(radar.heart_point_1);
        Serial.print(", point 2 : ");
        Serial.print(radar.heart_point_2);
        Serial.print(", point 3 : ");
        Serial.print(radar.heart_point_3);
        Serial.print(", point 4 : ");
        Serial.print(radar.heart_point_4);
        Serial.print(", point 5 : ");
        Serial.println(radar.heart_point_5);
        Serial.println("----------------------------");
        break;
      case BREATHNOR:
        Serial.println("Sensor detects current breath rate is normal.");
        Serial.println("----------------------------");
        break;
      case BREATHRAPID:
        Serial.println("Sensor detects current breath rate is too fast.");
        Serial.println("----------------------------");
        break;
      case BREATHSLOW:
        Serial.println("Sensor detects current breath rate is too slow.");
        Serial.println("----------------------------");
        break;
      case BREATHNONE:
        Serial.println("There is no breathing information yet, please wait...");
        Serial.println("----------------------------");
        break;
      case BREATHVAL:
        Serial.print("Sensor monitored the current breath rate value is: ");
        Serial.println(radar.breath_rate, DEC);
        Serial.println("----------------------------");
        break;
      case BREATHWAVE:  //仅在实时数据传输模式开启时有效
        Serial.print("The breath rate waveform(Sine wave) -- point 1: ");
        Serial.print(radar.breath_point_1);
        Serial.print(", point 2 : ");
        Serial.print(radar.breath_point_2);
        Serial.print(", point 3 : ");
        Serial.print(radar.breath_point_3);
        Serial.print(", point 4 : ");
        Serial.print(radar.breath_point_4);
        Serial.print(", point 5 : ");
        Serial.println(radar.breath_point_5);
        Serial.println("----------------------------");
        break;
    }
  }
  delay(200);                       //添加时间延迟以防止程序卡死
}
```

上传程序。将您的串行监视器打开到115200波特率，应该能看到结果。输出应该类似于下面的图片。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/4.png"/></div>

:::caution警告
如果您想查看波形数据，请将传感器切换到实时数据传输模式。切换模式后，传感器可能需要重新上电才能生效。
:::

### 示例4：睡眠功能的使用

在这个示例中，我们将指导您如何使用`SleepInf_Decode()`函数获取睡眠相关信息。请确保您或测试人员在使用此示例前已准备好入睡。

:::tip提示
默认情况下，传感器处于睡眠状态传输模式。在此模式下，睡眠监控功能已开启。如果您切换到实时数据传输模式，那么可能无法获取睡眠数据。如果您想更改传输模式，可以使用`ModeSelect_fuc()`函数进行操作。示例文件夹中的**MR60BHA1_Transfer_mode_selection**也提供了使用示例。切换模式后，传感器可能需要重新上电才能生效。
与睡眠相关的数据需要在人员上床时报告，当前固件默认在人员状态持续5分钟后判断有人上床。
:::

以下示例程序位于库的examples文件夹中，名为**MR60BHA1_Sleep_inf_output**。

```c
#include "Arduino.h"
#include <60ghzbreathheart.h>

//#include <SoftwareSerial.h>
// 选择任意两个可以与SoftwareSerial库一起使用的引脚作为接收（RX）和发送（TX）
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// 我们将使用软件串口
//BreathHeart_60GHz radar = BreathHeart_60GHz(&mySerial);

// 也可以尝试使用硬件串口与……进行通信
BreathHeart_60GHz radar = BreathHeart_60GHz(&Serial1);

void setup() {
  // 将您的初始化代码放在这里，确保它只运行一次：


  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   //当串口被打开时，程序开始执行。

  Serial.println("Readly");
}

void loop()
{
  // 将你的主要代码放在这里，以便反复运行：
  radar.SleepInf_Decode();           //与睡眠相关的信息输出。当监测对象躺在床上五分钟时，数据输出开始。
  if(radar.sensor_report != 0x00){
    switch(radar.sensor_report){
      case OUTBED:
        Serial.println("Sensor detects someone currently leaving the bed.");
        Serial.println("----------------------------");
        break;
      case INBED:
        Serial.println("Sensor detects that someone is currently in bed.");
        Serial.println("----------------------------");
        break;
      case NOINOUT:
        Serial.println("No subject is detected leaving or going to bed.");
        Serial.println("----------------------------");
        break;
      case SLEEPAWAKE:
        Serial.println("Sensor detects that the monitoring people is awake.");
        Serial.println("----------------------------");
        break;
      case SLEEPLIGHT:
        Serial.println("Sensor detects that the monitoring people is in light sleeping.");
        Serial.println("----------------------------");
        break;
      case SLEEPDEEP:
        Serial.println("Sensor detects that the monitoring people is in deep sleeping.");
        Serial.println("----------------------------");
        break;
      case SLEEPNONE:
        Serial.println("Sleep state of the object is not detected.");
        Serial.println("----------------------------");
        break;
      case AWAKETIME:
        Serial.print("Sensor monitored the awake sleep time is: ");
        Serial.print(radar.awake_time);
        Serial.println(" min");
        Serial.println("----------------------------");
        break;
      case LIGHTTIME:
        Serial.print("Sensor monitored the light sleep time is: ");
        Serial.print(radar.light_time);
        Serial.println(" min");
        Serial.println("----------------------------");
        break;
      case DEEPTIME:
        Serial.print("Sensor monitored the deep sleep time is: ");
        Serial.print(radar.deep_time);
        Serial.println(" min");
        Serial.println("----------------------------");
        break;
      case SLEEPSCORE:
        Serial.print("Sensor judgment sleep score is: ");
        Serial.println(radar.sleep_score);
        Serial.println("----------------------------");
        break;
      case SLEEPSTATUE:
        Serial.println("Sleep integrated state information -- ");
        Serial.print("Human existence: ");
        if(radar.existence)Serial.println("human exis");
        else Serial.println("human non-existent");
        Serial.print("Sleep state: ");
        if(radar.sleep_status == SLEEPDEEP)Serial.println("sleeping soundly");
        else if(radar.sleep_status == SLEEPLIGHT)Serial.println("light sleep");
        else if(radar.sleep_status == SLEEPAWAKE)Serial.println("awake");
        else if(radar.sleep_status == SLEEPNONE)Serial.println("off the bed");
        Serial.print("Average breathing: ");
        Serial.println(radar.breath_rate);
        Serial.print("Average heart rate: ");
        Serial.println(radar.heart_rate);
        Serial.print("Number of turning over during sleep: ");
        Serial.println(radar.turn_num);
        Serial.print("Percentage of substantial exercise during sleep: ");
        Serial.println(radar.substantial_move_ratio);
        Serial.print("Percentage of small-amplitude movements during sleep: ");
        Serial.println(radar.samll_move_ratio);
        Serial.print("Number of apnea: ");
        Serial.println(radar.apnea_num);
        Serial.println("----------------------------");
        break;
      case SLEEPQUALITY:
        Serial.println("Quality of sleep information -- ");
        Serial.print("Sleep score: ");
        Serial.println(radar.sleep_score);
        Serial.print("Total time of sleep: ");
        Serial.print(radar.sleep_time);
        Serial.println(" min");
        Serial.print("Percentage of waking time: ");
        Serial.println(radar.awake_time_radio);
        Serial.print("Percentage of light sleep time: ");
        Serial.println(radar.light_time_radio);
        Serial.print("Percentage of deep sleep time: ");
        Serial.println(radar.deep_time_radio);
        Serial.print("Total time away from bed: ");
        Serial.print(radar.outbed_time);
        Serial.println(" min");
        Serial.print("Total number of times out of bed: ");
        Serial.println(radar.outbed_num);
        Serial.print("The number of turning over during sleep: ");
        Serial.println(radar.turn_num);
        Serial.print("Average breathing: ");
        Serial.println(radar.breath_rate);
        Serial.print("Average heart rate: ");
        Serial.println(radar.heart_rate);
        Serial.print("Number of apnea: ");
        Serial.println(radar.apnea_num);
        Serial.println("----------------------------");
        break;
      case SLEEPLESS4H:
        Serial.print("The monitored subjects slept for less than 4 hours.");
        Serial.println("----------------------------");
        break;
      case SLEEPOVER12H:
        Serial.print("The length of sleep of the monitored subjects exceeded 12 hours.");
        Serial.println("----------------------------");
        break;
      case LONGTIMENOONE:
        Serial.print("Abnormally unoccupied for long periods of time.");
        Serial.println("----------------------------");
        break;
      case ERRORNONE:
        Serial.print("No abnormal information.");
        Serial.println("----------------------------");
        break;
    }
  }
  delay(200);                       //添加时间延迟以防止程序卡死
}
```

上传程序。将您的串行监视器打开到115200波特率，应该能看到结果。输出应该类似于下面的图片。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/6.png"/></div>

### 示例5：向传感器发送数据

根据用户手册中提供的详细信息，用户可以根据实际需求向传感器发送命令帧，以查询或设置传感器的某些状态或模式。

传感器库中的examples文件夹下名为**MR60BHA1_Send_frame**的.ino文件向我们展示了如何向传感器发送一个查询设备ID的程序。

```c
#include "Arduino.h"
#include <60ghzbreathheart.h>

//#include <SoftwareSerial.h>
// 选择任意两个可以与SoftwareSerial库一起使用的引脚作为接收（RX）和发送（TX）
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// 我们将使用软件串口。
//BreathHeart_60GHz radar = BreathHeart_60GHz(&mySerial);

// 也可以尝试使用硬件串口与……进行通信
BreathHeart_60GHz radar = BreathHeart_60GHz(&Serial1);

const unsigned char DevID_buff[10] = {0x53, 0x59, 0x02, 0xA1, 0x00, 0x01, 0x0F, 0x5F, 0x54, 0x43};

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   //当串口被打开时，程序开始执行。

  Serial.println("Readly");
}

void loop()
{
  // 将你的主要代码放在这里，以便反复运行：
  radar.send_func(DevID_buff, 10, false);
  delay(50);                       //不要将延迟时间设置得太长，因为这可能会影响雷达返回的数据帧的接收。
}
```

在这个示例程序中，你可以看到一个名为`DevID_buff[10]`的数组被定义，它用于存储查询设备ID的十六进制数，每个字节占用一个位置。

发送操作是通过`send_func()`函数完成的。传入的参数包括要发送的帧数组、数组的长度以及是否循环发送。

如果你需要发送自己的命令帧，那么你需要根据用户手册中提供的帧格式来定义正确的数组。

:::tip提示
**关于校验位“sum”的计算**。

所有的数据帧都包含一个校验位，以确保数据发送或接收的准确性。校验位通常位于数据帧的倒数第二位。它是通过将校验位之前的所有位相加，并取十六进制下的低两位来计算的。
以查询设备ID的数据帧为例：

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/6.png"/></div>

可以看到，校验位位于整个数据帧的倒数第二位。然后，我们从加总所有前面的十六进制数开始。

```
0x53 + 0x59 + 0x02 + 0xA2 + 0x00 + 0x01 + 0x0F = 0x0160
```

接着，我们需要取它的低两位，即**60**，所以这个数据帧的校验位就是**60**。如果我们想要查询传感器的ID，那么可以定义以下数组。

```
const unsigned char DevID_buff[10] = {0x53, 0x59, 0x02, 0xA1, 0x00, 0x01, 0x0F, 0x60, 0x54, 0x43};
```

:::

上传程序。将您的串行监视器打开到115200波特率，应该能看到结果。输出应该类似于下面的图片。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/5.png"/></div>

此时，请检查返回的数据帧，并确认它们是否与用户手册中描述的数据帧匹配。

通常，我们不需要重复向传感器发送命令，但由于传感器回复消息的速度非常快，我们无法确保能够接收到传感器返回的精确数据消息。针对这个问题，有两种解决方案。

- 多次重新上传上述程序。
- 将`send_func()`函数的第三个参数（循环发送）设置为`true`。但请注意，反复发送设置类型的数据帧**可能会导致传感器堵塞**，因此请谨慎使用此功能。如果传感器卡住，请断开传感器的5V供电引脚，等待片刻以恢复功能。

### 示例6：重置传感器

有时，您的传感器在检测异常时可能出现问题，或者您想清除传感器上的所有设置，那么您可以根据此示例重置您的传感器。

以下示例程序位于库的examples文件夹中，名为**MR60BHA1_Reset_sensor**。

```c
#include "Arduino.h"
#include <60ghzbreathheart.h>

//#include <SoftwareSerial.h>
// 选择任意两个可以与SoftwareSerial库一起使用的引脚作为接收（RX）和发送（TX）。
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// 我们将使用软件串口。
//BreathHeart_60GHz radar = BreathHeart_60GHz(&mySerial);

// 也可以尝试使用硬件串口与……进行通信。
BreathHeart_60GHz radar = BreathHeart_60GHz(&Serial1);

void setup() {
  // 将您的设置代码放在这里，确保它只运行一次：
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   //当串口被打开时，程序开始执行。

  Serial.println("Readly");

  radar.reset_func();
}

void loop()
{
  // 将你的主要代码放在这里，以便它可以反复运行：
}
```

重置传感器非常简单，您只需要调用`reset_func()`函数。重置只需要**执行一次**，因此我们在`Setup()`函数中使用它。

### 示例7：使用Arduino/Seeeduino

我们的库与Arduino兼容，您还可以选择手头上的Arduino来开发您的传感器项目。

MR60BHA1传感器使用UART串行端口进行通信，您只需要按照下面的接线方式将传感器连接到Arduino上。

<table align="center">
 <tr>
     <td align="center">MR60BHA1 传感器</td>
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
        <td align="center">软件串行端口接收（TR）</td>
 </tr>
    <tr>
     <td align="center">TX</td>
     <td align="center">--></td>
        <td align="center">软件串行端口发送（TX）</td>
 </tr>
</table>

所有函数的应用方式与上面Demo1到Demo6中的相同，因此我们在本示例中不再重复它们。在本示例中，我们将为您概述如何使用Arduino的软件串行端口从传感器获取数据信息。

:::tip提示
关于Arduino软件串行端口的说明，请参阅[Arduino官方文档](https://docs.arduino.cc/learn/built-in-libraries/software-serial)。
:::

为了避免使用Serial同时进行输出和数据传输时造成的数据混淆，在Arduino端我们通常使用软件串行端口。

软件串行端口库的导入以及RX和TX引脚的定义需要在程序开始时完成。以下程序将**A2**和**A3**引脚定义为软件串行端口的**RX**和**TX**引脚。

```c
#include <SoftwareSerial.h>
//选择任何两个可以与SoftwareSerial库一起使用的引脚作为接收（RX）和发送（TX）。
#define RX_Pin A2
#define TX_Pin A3

SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

//我们将使用软件串口
BreathHeart_60GHz radar = BreathHeart_60GHz(&mySerial);
```

Also, don't forget to set the baud rate for the soft serial port in the `Setup()` function.

```c
void setup() {
  // 请将你的初始化代码放在这里，以确保只运行一次。
  Serial.begin(115200);

  mySerial.begin(115200);

  while(!Serial);   //当串口被打开时，程序开始执行。

  Serial.println("Readly");
}
```

以**Demo1**为例，如果您想使用Arduino打印传感器报告的数据帧，那么完整的程序如下。

```c
#include "Arduino.h"
#include <60ghzbreathheart.h>

#include <SoftwareSerial.h>
// 选择任何两个可以与SoftwareSerial一起使用的引脚作为RX和TX
#define RX_Pin A2
#define TX_Pin A3

SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// 我们将使用软件串口
BreathHeart_60GHz radar = BreathHeart_60GHz(&mySerial);

void setup() {
  // 在这里放置你的设置代码，使其只运行一次：
  Serial.begin(115200);

  mySerial.begin(115200);

  while(!Serial);   //当串口被打开时，程序开始执行。

  Serial.println("Readly");
}

void loop()
{
  // 在这里放置你的主要代码，使其反复运行：
  radar.recvRadarBytes();           //接收雷达数据并开始处理
  radar.showData();                 //串口打印出一组接收到的数据帧
  delay(200);                       //添加时间延迟以避免程序卡死
}
```

### 示例8：直接与电脑连接获取数据

如果您想使用专为传感器设计的上位机，或者想使用串口软件来获取完整的数据帧，可以参考这个流程。

通过**UART转USB**设备将传感器直接连接到电脑的USB端口。接线方式如下表所示。

<table align="center">
 <tr>
     <td colspan="4"><div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/60GHzradar/uart.png"/></div></td>
 </tr >
 <tr >
     <td align="center">UART 到 USB</td>
     <td align="center"></td>
        <td align="center">MR60BHA1 传感器</td>
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


使用像串口调试助手这样的软件来选择传感器所在的串口。

<div align="center"><img width ="200" src="https://files.seeedstudio.com/wiki/60GHzradar/37.png"/></div>

:::caution警告
MR60BHA1传感器需要5V的电源供应，否则传感器可能无法正常工作。
:::

连接成功后，您将看到传感器发送稳定的数据流。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/39.png"/></div>

同时，您也可以通过软件的发送功能向传感器发送数据帧。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/40.png"/></div>

:::caution警告
如果您选择**ASCII**作为发送数据的格式，则每个数据集需要以**0x**为前缀。如果您选择**HEX**，那么每套数据不需要以**0x**为前缀。
:::

## 故障排除

### 常见问题1：这个传感器能在同一环境中同时检测到多个人吗？

> 答：不可以。这个传感器只能用于单个生命体。如果监测范围内有多于一个人或动物，这将对监测结果产生影响。

### 常见问题2：为什么我在XIAO ESP32C3的串口监视器中看不到任何内容？

> XIAO ESP32C3的串口功能与一般的Arduino硬件不完全一致，直接使用Serial1可能会导致USB串口无法工作。对于相关的应用案例，请查阅[XIAO ESP32C3的串口章节](https://wiki.seeedstudio.com/XIAO_ESP32C3_Pin_Multiplexing/#serial)以获取详细信息。

## 资源

  - **[PDF]** [呼吸和心跳雷达传感器数据手册](https://files.seeedstudio.com/wiki/mmWave-radar/MR60BHA1_Datasheet.pdf)
  - **[PDF]** [呼吸和心跳雷达传感器用户手册-V1.9](https://files.seeedstudio.com/wiki/60GHzradar/new_res/MR60BHA1_user_manual-V1.9.pdf)
  - **[PDF]** [呼吸和心跳雷达传感器用户手册-V2.3](https://files.seeedstudio.com/wiki/60GHzradar/new_res/MR60BHA1_userManual_V2.3.pdf)
  - **[EXE]** [上位机软件_旧版本](https://files.seeedstudio.com/wiki/60GHzradar/Human-Vital-Sign-Radar.exe)
  - **[EXE]** [上位机软件_新版本](https://files.seeedstudio.com/wiki/60GHzradar/MR60BHA1_new.exe)
  - **[PPTX]** [Seeed毫米波雷达传感器系列V2.0](https://files.seeedstudio.com/wiki/mmWave-radar/Seeed-mmWave-sensor-series-V2.0.pptx)
  - **[ZIP]** [60G雷达心跳3D模型](https://files.seeedstudio.com/wiki/mmWave-radar/60G-Radar-heartbeat-3D.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您在使用我们的产品时能够尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>