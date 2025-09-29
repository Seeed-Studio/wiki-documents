---
description: 60GHz 毫米波静态呼吸和心跳检测
title: 60GHz 毫米波静态呼吸和心跳检测
keywords:
- mmWave_radar_sensor
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Radar_MR60BHA1
last_update:
  date: 03/03/2023
  author: Citric
---

# 60GHz 毫米波传感器 - 人体静态睡眠呼吸监测 (MR60BHA1)

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/60GHzradar/newpic.png"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Breathing-and-Heartbeat-Module-p-5305.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 介绍

MR60BHA1 60GHz 雷达模块采用 FMCW 检测理论，实现高精度的个人呼吸频率和心率同步检测，提供完全私密和安全的环境，不受其他噪声干扰的影响。它是消费电子、医疗保健以及工业应用中的标准生物雷达系统。在本 wiki 中，我们将向您介绍如何使用它。

### 应用

- 智能家居
- 医疗保健
- 呼吸频率检测
- 心跳频率检测
- 智能酒店
- 医疗助手

### 特性

- 使能理论：基于 FMCW FM 连续波信号实现雷达检测
- 标准算法：在自适应环境中感知并同时输出人体呼吸频率和心律
- 完美的隐私保护：应用 FMCW 监测技术提供无需身份识别的监控能力
- 健康友好的工作状态：输出功率低至对人体无害
- 高稳定性：不受温度、湿度、噪声、气流、灰尘、光线和其他环境因素影响
- 高测量精度：心跳精度达到 85%，呼吸精度达到 90%
- 高灵活性硬件设计雷达：支持二次开发，适应各种场景应用

### 规格参数

| 参数内容                 |  最小值 |  典型值 |  最大值 |  单位 |
|-----------------------------------|----------|----------|----------|-------|
|  **性能**                      |          |          |          |       |
|  检测距离（胸部）    |  0.4     |          |  1.5       |  m    |
|  呼吸测量精度 |          |  90      |          |  %    |
|  心跳测量精度   |          |  95      |          |  %    |
|  刷新时间                     |  1       |          |  30      |  S    |
|  观测建立时间          |          |  20      |          |  S    |
|  **工作参数**             |          |          |          |       |
|  工作电压 (VCC)          |  4.6     |  5       |  6       |  V    |
|  工作电流 (ICC)          |          |  150     |          |  mA   |
|  工作温度 (TOP)      |  -20     |          |  60      |  ℃    |
|  存储温度 (TST)        |  -40     |          |  80      |  ℃    |
|  **发射参数**                |          |          |          |       |
|  工作频率 (fTX)        |  58      |  60      |  63.5    |  GHz  |
|  发射功率 (Pout)         |          |  6       |          |  dBm  |
|  **天线参数**               |          |          |          |       |
|  天线增益 (GANT)              |          |  4       |          |  dBi  |
|  水平波束 (-3dB)           |  -20     |          |  20      |  o    |
|  垂直波束 (-3dB)             |  -20     |          |  20      |  o    |

## 硬件概述

在开始之前，了解产品的一些基本参数是非常重要的。下表提供了60GHz毫米波呼吸心跳模块特性的信息。

<div align="center"><img width ="300" src="https://files.seeedstudio.com/wiki/60GHzradar/pinout3.png"/></div>

- 接口1：
  - 5V引脚是传感器的电源接口。
  - RX和TX是传感器的数据传输接口。RX表示串行接收，TX表示串行发送。
  - 人体存在状态输出接口。您可以使用这两个引脚的电平来判断环境中当前的人体运动状态。
    - GP2输出：高电平 - 有人，低电平 - 无人。
    - GP1输出：高电平 - 活动，低电平 - 静止。
- 接口2：
  - 烧录固件引脚：GND/3.3V/SWD/SWC。
  - 预留输入/输出引脚：GP3~GP6。

## 入门指南

### 固件版本更新

毫米波传感器经过了长期的技术沉淀和用户提供的宝贵建议，我们一直在对原有产品进行迭代，以提供更准确可靠的监测结果和更好的用户体验。

新出货的传感器默认搭载最新固件，以确保最新的产品体验。但是，为了老用户的体验，我们在此提供最新固件和更新方法，确保您能够使用我们的最新技术。

#### 通用方法 - 使用J-link烧录固件

如果您遇到固件错误或雷达异常、固件故障等问题，使用此方法重新烧录固件是最有效的方式。

**最新固件下载**

| 固件版本 | 下载地址 |
|:----------------:|:----------------:|
| Jlink_MR60BHA1-V230104.bin | [下载](https://files.seeedstudio.com/wiki/60GHzradar/new_res/Jlink_MR60BHA1-V230104.bin) |
| Jlink_MR60BHA1-V230904.bin | [下载](https://files.seeedstudio.com/wiki/60GHzradar/new_res/Jlink_MR60BHA1-V230904.bin) |

:::caution

1. 请仔细检查您产品的功能，请不要与其他毫米波传感器混用来烧录此固件，否则可能导致产品功能异常，后果需要您自行承担！

2. 还请注意，不同的固件更新方式使用不同的固件内容，您下载的是通过**J-link**烧录的固件。

:::

**将您的雷达更新到最新版本**

**步骤1.** 您需要准备一个**Jlink**和**MR60BHA1** 60GHz毫米波传感器。

通过杜邦线将雷达和Jlink连接，如下图所示。

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
| UART_MR60BHA1-230104.bin | [下载](https://files.seeedstudio.com/wiki/60GHzradar/new_res/UART_MR60BHA1-230104.bin) |
| UART_MR60BHA1-230904.bin | [下载](https://files.seeedstudio.com/wiki/60GHzradar/new_res/UART_MR60BHA1-230904.bin) |

:::caution

1. 请仔细检查您产品的功能，请不要与其他毫米波传感器混用来烧录此固件，否则可能导致产品功能异常，后果需要您自行承担！

2. 还请注意，不同的固件更新方式使用不同的固件内容，您下载的是通过**UART**烧录的固件。

3. 在使用 UART 升级固件之前，请确保您的雷达固件版本**至少为 G60SM1SYv010003 版本**，否则可能会导致雷达失效，此时您必须使用 J-link 烧录固件才能使用！

您可以通过向雷达发送命令 `0x53 0x59 0x02 0xA4 0x00 0x01 0x0F 0x62 0x54 0x43` 来查询固件版本号信息。雷达上报的数据会以字符串形式显示，您将看到类似下图所示的效果。

`G60SM1SYv010009` 是雷达上报的型号，其中 `10009` 是版本号。这意味着该传感器支持 UART 升级。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/20.png"/></div>
:::

**将您的雷达更新到最新版本**

**步骤 1**. 您需要准备一个 **UART 转 USB** 设备和 **MR60BHA1** 60GHz 毫米波传感器。

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

按照上述说明完成串口设置后，点击右上角的第二个图标，如果端口选择正确，您将看到雷达的原始数据被打印出来。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/12.png"/></div>

**步骤 5**. 更新固件

左键点击右上角的最后一个图标，这将弹出一个选择固件的窗口。请选择您已下载的固件版本。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/13.png"/></div>

选择完成后，所选文件路径将出现在软件下方，请仔细检查所选固件版本和型号是否与您使用的传感器一致。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/17.png"/></div>

要升级固件，请左键双击软件左上角的最后一个图标，然后固件将开始下载到传感器。

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

除了上述提到的串口软件，您还可以直接使用专为雷达设计的[上位机软件](https://files.seeedstudio.com/wiki/60GHzradar/MR60BHA1_new.exe)。

:::tip
如果您使用的是较旧版本的上位机和固件，请尽快[升级到最新版本](#firmware-version-updates)，以确保您能够享受软件协议和Wiki内容。
:::

以下五个部分解释了软件各部分的作用。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/1.png"/></div>

1. 连接设置

    选择传感器连接到计算机的端口。通常需要在选择之前点击**刷新串口按钮**来刷新端口。一旦正确选择串口，数据会在圆圈4中自动更新（如果有可用数据）。

2. 功能设置

    - **调试**：当此功能开启时，可以在软件中输出实时原始数据。这是图中圆圈3的窗口。
    - **保存原始数据**：当您点击它时，可以选择将原始数据保存到本地计算机。但是请注意，此选项不会在点击按钮后保存新数据，只保存最近的历史数据。
    - **保存睡眠数据**：当您点击它时，可以选择保存与睡眠相关的原始数据信息的路径，而其他数据不会被保存。但是请注意，此选项不会在点击按钮后保存新数据，只保存最近的历史数据。

3. 串口监视器

    当圆圈2中的**调试**选项被选中时，此窗口会出现，此时该区域显示实时传感器数据帧。在底部您可以向传感器发送命令帧。可以发送或查询的命令可以在传感器的用户手册中找到。

4. 图形显示

    这实时显示折线图。显示的数据内容分别是呼吸频率、心率和身体参数。横坐标是时间，纵坐标是相应的数据。

5. 状态和方向

    此区域允许您观察人体存在状态和人体方向。人体方向数据仅供参考。

## 使用Arduino进行传感器开发

### Arduino库概述

:::tip
如果这是您第一次使用Arduino，我们强烈建议您参考[Arduino入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

本示例中使用的库代码可以通过点击下面的图标下载。

<p style={{textAlign: 'center'}}><a href="https://github.com/limengdu/Seeed-Studio-MR60BHA1-Sensor" target="_blank"><div align="center"><img width ="300" src="https://files.seeedstudio.com/wiki/seeed_logo/DOWNLOAD.png" /></div></a></p>

#### 功能

在我们开始开发草图之前，让我们看看库的可用功能。

- `void recvRadarBytes()` —— 此函数根据传感器数据协议中的帧头和帧尾，通过UART收集传感器报告的数据帧。与`showData()`函数结合使用，可以通过串口打印出收集的数据信息。

  - **输入参数：** 无

  - **返回值：** 无

- `void showData()` —— 此函数用于通过串口一次性打印出传感器报告的完整数据帧，需要与`recvRadarBytes()`函数结合使用。

  - **输入参数：** 无

  - **返回值：** 无

- `void HumanExis_Func()` —— 此函数负责解析传感器的数据帧，并输出有关人体存在状态的相关数据。

  - **输入参数：** 无

  - **返回值：**

    - `unsigned int sensor_report` —— 返回的值表示解析的数据帧属于哪个状态类别。具体类别可以在**默认变量**部分找到。人体运动信息仅在发生变化时报告。

    - `int bodysign_val` —— 返回的值表示人体运动参数的值。此值每秒报告一次。

    - `float distance` —— 传感器确定当前到人体的距离，值以米为单位。此值每2秒报告一次。

    - `float Dir_x, Dir_y, Dir_z` —— 表示传感器检测到的身体位置信息。人体位置信息有正负值，单位为米。此值每2秒报告一次。

- `void Breath_Heart()` —— 此函数负责解析传感器的呼吸和心跳数据，并返回相关值。

  - **输入参数：** 无

  - **返回值：**

    - `unsigned int sensor_report` —— 返回的值表示解析的数据帧属于哪个状态类别。具体类别可以在**默认变量**部分找到。

    - `unsigned int heart_rate` —— 心率值。每3秒报告一次。值范围0~100。

    - `unsigned int heart_point_1, heart_point_2, heart_point_3, heart_point_4, heart_point_5` —— 心率波形数据。5个字节实时表示1秒内的5个值，波形是正弦波数据，中心轴是128，这意味着当心率强度为0时，将显示为128。此值每秒报告一次。

    - `unsigned int breath_rate` —— 呼吸值。每3秒报告一次。值范围0~20。

    - `unsigned int breath_point_1, breath_point_2, breath_point_3, breath_point_4, breath_point_5` —— 呼吸频率波形数据。5个字节实时表示1秒内的5个值，波形是正弦波数据，中心轴是128，这意味着当心率强度为0时，将显示为128。此值每秒报告一次。

- `void SleepInf_Decode()` —— 此函数负责解析传感器报告的睡眠数据信息。仅在被监测人员已进入床上并已睡眠超过五分钟时有效。使用此函数时请确保已启用睡眠状态传输模式。

  - **输入参数：** 无

  - **返回值：**

    - `unsigned int sensor_report` —— 返回值表示解析的数据帧属于哪个状态类别。具体类别可在**默认变量**部分找到。

    - `unsigned int awake_time` —— 此值表示被监测人员在已上床情况下的清醒时间。此值将每十分钟与其他睡眠状态数据一起报告。

    - `unsigned int light_time` —— 此值表示被监测人员在已上床情况下的浅睡时间。此值将每十分钟与其他睡眠状态数据一起报告。

    - `unsigned int deep_time` —— 此值表示被监测人员在已上床情况下的深睡时间。此值将每十分钟与其他睡眠状态数据一起报告。

    - `unsigned int sleep_score` —— 此值表示睡眠质量评分。此信息在睡眠过程结束时报告。

    - `boolean existence` —— 此值表示人体存在信息。返回结果为True表示有人存在，返回结果为False表示无人存在。此值将每十分钟与其他睡眠状态数据一起报告。

    - `unsigned int sleep_status` —— 此值表示睡眠状态。有四种睡眠状态，即离床、清醒、浅睡和深睡。此值将每十分钟与其他睡眠状态数据一起报告。

    - `unsigned int breath_rate` —— 10分钟内的平均心跳。此值将每十分钟与其他睡眠状态数据一起报告。

    - `unsigned int heart_rate` —— 十分钟内的平均呼吸。此值将每十分钟与其他睡眠状态数据一起报告。

    - `unsigned int turn_num` —— 十分钟内的翻身次数。此值将每十分钟与其他睡眠状态数据一起报告。

    - `unsigned int substantial_move_ratio` —— 人员十分钟内大幅运动所占比例。此值将每十分钟与其他睡眠状态数据一起报告。

    - `unsigned int samll_move_ratio` —— 人员十分钟内小幅运动的百分比。此值将每十分钟与其他睡眠状态数据一起报告。

    - `unsigned int apnea_num` —— 十分钟内的呼吸暂停次数。此值将每十分钟与其他睡眠状态数据一起报告。

    - `unsigned int sleep_time` —— 总睡眠小时数。当传感器确定睡眠过程结束时报告。

    - `unsigned int awake_time_radio` —— 人员清醒时间的百分比。当传感器确定睡眠过程结束时报告。

    - `unsigned int light_time_radio` —— 浅睡时间的百分比。当传感器确定睡眠过程结束时报告。

    - `unsigned int deep_time_radio` —— 深睡时间的百分比。当传感器确定睡眠过程结束时报告。

    - `unsigned int outbed_time` —— 人员离床的时间量。当传感器确定睡眠过程结束时报告。

    - `unsigned int outbed_num` —— 人员离床的次数。当传感器确定睡眠过程结束时报告。

- `void send_func(const unsigned char* buff, int len, bool cyclic /*=false*/)` —— 此函数用于发送查询帧和命令帧。

  - **输入参数：**

    - `buff` —— 您想要发送给传感器的数据帧。

    - `len` —— 您想要发送给传感器的数据帧长度。

    - `cyclic` —— 循环发送开关。默认为false，如果您希望循环发送此数据帧，可以设置为**true**。

  - **返回值：** 无

- `void ModeSelect_fuc(int mode)` —— 此函数用于选择传感器的工作模式。有两种工作模式，睡眠状态传输模式和实时数据传输模式。在睡眠状态传输模式下，睡眠监测功能开启（`SleepInf_Decode()`有效）。在实时数据传输模式下，睡眠监测功能关闭（`SleepInf_Decode()`无效），但会报告波形数据。

  - **输入参数：**

    - `mode` —— 选择的模式编号。1表示实时数据传输模式，2表示睡眠状态传输模式。

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

#define DISTANCE 0x04           //Distance from the person being detected

#define DIRECTIONS 0x05         //Body orientation

#define HEART_INF 0x85          //Heart rate information

#define HEART_RATE 0x02         //Heart rate

#define HEART_RATE_WAVE 0x05    //Heart rate waveform (No analysis for now)

#define BREATH_RATE_RADAR 0x81  //Respiratory heart rate data

#define BREATH_INF 0x01         //Breathing data
#define BREATH_NORMAL 0x01      //Normal breathing
#define BREATH_RAPID 0x02       //Acute respiratory abnormalities
#define BREATH_SLOW 0x03        //Slow heartbeat
#define BREATH_NONE 0x04        //Radar detection nothing

#define BREATH_VAL 0x02         //Breathing values

#define BREATH_WAVE 0x05        //Respiratory waveform (No analysis for now)

#define SLEEP_INF 0x84          //Sleep information

#define INOUT_BED 0x01          //In bed or out of bed
#define OUT_BED 0x00            //Out of bed
#define IN_BED 0x01             //In bed
#define INOUT_NONE 0x02         //None (Display in real-time detection mode)

#define SLEEP_STATE 0x02        //Sleep state
#define DEEP_SLEEP 0x00         //Deep sleep
#define LIGHT_SLEEP 0x01        //Light sleep
#define AWAKE 0x02              //Awake
#define SLEEP_NONE 0x03         //None (Display in real-time detection mode)

#define AWAKE_TIME 0x03         //Awake time

#define LIGHTSLEEP_TIME 0x04    //Light sleep time

#define DEEPSLEEP_TIME 0x05     //Deep sleep time

#define SLEEP_SCORE 0x06        //Sleep quality score

#define SLEEP_STATUE 0x0C       //Sleep integrated status reporte

#define SLEEP_QUALITY 0x0D      //Comprehensive information reporting on sleep quality

#define SLEEP_ERROR 0x0E        //Abnormal sleep reporte

#define SLEEP_LESS4H 0x00        //Sleep less than 4 hours
#define SLEEP_OVER12H 0x01       //Sleep over 12 hours
#define SLEEP_LONGTIMENOONE 0x02 //Unusual situation, no one for a long time
#define SLEEP_ERRORNONE 0x03     //None

#define reset_frame_len 10      //Reset data frame length
//Reset data frame
const unsigned char breath_reset_frame[10] = {0x53, 0x59, 0x01, 0x02, 0x00, 0x01, 0x0F, 0xBF, 0x54, 0x43};

#define mode_frame_len 10       //Mode selection command frame length
//Mode selection command frame
const unsigned char realtime_mode_frame[10] = {0x53, 0x59, 0x84, 0x0F, 0x00, 0x01, 0x00, 0x40, 0x54, 0x43};
const unsigned char sleepstatus_mode_frame[10] = {0x53, 0x59, 0x84, 0x0F, 0x00, 0x01, 0x01, 0x41, 0x54, 0x43};

//Return status, Use in arduino
//Possible values for sensor_report
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

首先从 [GitHub](https://github.com/limengdu/Seeed-Studio-MR60BHA1-Sensor) 获取代码库并下载到您的本地计算机。

由于您已经下载了 zip 库文件，请打开您的 Arduino IDE，点击 **Sketch > Include Library > Add .ZIP Library**。选择您刚刚下载的 zip 文件，如果库安装正确，您将在通知窗口中看到 **Library added to your libraries**。这意味着库已成功安装。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png"/></div>

## Arduino 示例

现在我们已经安装了库并了解了基本功能，让我们为 XIAO BLE 运行一些示例，看看它的表现如何。

### 所需材料

在完成以下示例之前，您需要准备以下材料。

|              |              |              |
|:--------------:|:--------------:|:--------------:|
|<div align="center"><img width ="210" src="https://files.seeedstudio.com/wiki/60GHzradar/newpic.png"/></div>| <div align="center"><img width ="210" src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg"/></div>| <div align="center"><img width ="150" src="https://files.seeedstudio.com/wiki/60GHzradar/dupont.jpg"/></div>|
|[**60GHz MR60BHA1 传感器**](https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Breathing-and-Heartbeat-Module-p-5305.html)|[**Seeed XIAO BLE nRF52840 Sense**](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html?queryID=4bbd8c09f20216aa26f6b5a9040504d0&objectID=5253&indexName=bazaar_retailer_products)|**2mm 到 2.54mm 间距排线**|

**步骤 1.** 通过主板将设备连接到计算机。接线图如下表所示。

<table align="center">
  <tbody><tr>
      <td colSpan={4}><div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/60GHzradar/30.png" /></div></td>
    </tr>
    <tr>
      <td align="center">Seeed Studio XIAO nRF52840</td>
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

**步骤 2.** 在 Arduino IDE 左上角的菜单栏中，选择**工具**，选择您正在使用的开发板类型，并选择相应的串口。

:::tip
如果您使用的是 **MacOS**，设备的串口名称通常以 **/dev/cu.usbmodem xxx** 开头，以设备名称结尾。如果您使用的是 **Windows**，设备的串口名称通常以 **COM** 开头，同样以设备名称结尾。
:::

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/60GHzradar/3.png"/></div>

在这个示例中，我们将演示雷达如何与我们的热门产品 XIAO BLE 配合工作。

### 演示1 原始数据导出

这个示例将指导您完成通过串口打印传感器报告的原始数据的过程。

以下示例程序位于库的示例文件夹中，名为 **MR60BHA1_print_rawdata**。

```c
#include "Arduino.h"
#include <60ghzbreathheart.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//BreathHeart_60GHz radar = BreathHeart_60GHz(&mySerial);

// can also try hardware serial with
BreathHeart_60GHz radar = BreathHeart_60GHz(&Serial1);

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

在这个程序中，需要注意的是，每两个数据帧的接收和输出之间都有一个间隔，以避免主板出现阻塞。这个时间应该不少于 **150ms**。

这意味着主板无法接收传感器报告的所有数据帧，但由于传感器报告的帧数非常大且频繁，这不会影响使用传感器判断环境的准确性。

上传程序。将串口监视器的波特率设置为 115200 应该会显示结果。输出应该类似于下图所示。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/2.png"/></div>

### Demo2: 人体存在检测功能的使用

在这个示例中，我们将解释如何使用人体存在检测功能，并通过串口监视器打印出该功能中所有值的信息。

以下示例程序位于库的 examples 文件夹中，名为 **MR60BHA1_human_existence_inf_output**。

```c
#include "Arduino.h"
#include <60ghzbreathheart.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//BreathHeart_60GHz radar = BreathHeart_60GHz(&mySerial);

// can also try hardware serial with
BreathHeart_60GHz radar = BreathHeart_60GHz(&Serial1);

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
  delay(200);                       //Add time delay to avoid program jam
}
```

:::tip
如果您使用的是 XIAO ESP32 系列，并且毫米波雷达没有数据反馈。您可以尝试将上面的代码从 ```Serial1.begin(115200);``` 更改为 ```Serial1.begin(115200, SERIAL_8N1, D7, D6);```。
:::

在这个示例中，检测人体存在的功能由 `HumanExis_Func()` 函数实现。程序实现的基本逻辑是 `HumanExis_Func()` 函数将传感器报告的状态信息分配给 `sensor_report` 变量。基于 `sensor_report` 的值，我们然后通过串口打印出该状态下的所有值。

请注意，`sensor_report` 对应于缩进下串口的数据输出。例如，代表符号参数的 `bodysign_val` 变量仅在 `sensor_report` 为 `BODYVAL` 时有效，在传感器报告的其他 `sensor_reports` 中不存在。

上传程序。将串口监视器的波特率设置为 115200 应该会显示结果。输出应该类似于下图。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/3.png"/></div>

### 演示3：静止人员呼吸和心跳功能的使用

在这个示例中，我们将使用 `Breath_Heart()` 函数来检测静止人体的呼吸和心率。

:::tip
我们的重点是检测静止人体的呼吸和心率。请不要在人体运动时使用该产品，因为我们对传感器的心率和呼吸进行了限制。最大心率**不会超过 100**，最大呼吸频率**不会超过 25**。
:::

以下示例程序位于库的示例文件夹中，名为 **MR60BHA1_Breath_heartbeat_inf_output**。

```c
#include "Arduino.h"
#include <60ghzbreathheart.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//BreathHeart_60GHz radar = BreathHeart_60GHz(&mySerial);

// can also try hardware serial with
BreathHeart_60GHz radar = BreathHeart_60GHz(&Serial1);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Readly");

  // radar.ModeSelect_fuc(1);  //1: indicates real-time transmission mode, 2: indicates sleep state mode.
  //After setting the mode, if you do not see data returned, you may need to re-power the sensor.
}

void loop()
{
  // put your main code here, to run repeatedly:
  radar.Breath_Heart();           //Breath and heartbeat information output
  if(radar.sensor_report != 0x00){
    switch(radar.sensor_report){
      case HEARTRATEVAL:
        Serial.print("Sensor monitored the current heart rate value is: ");
        Serial.println(radar.heart_rate, DEC);
        Serial.println("----------------------------");
        break;
      case HEARTRATEWAVE:  //Valid only when real-time data transfer mode is on
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
      case BREATHWAVE:  //Valid only when real-time data transfer mode is on
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
  delay(200);                       //Add time delay to avoid program jam
}
```

:::tip
如果您使用的是 XIAO ESP32 系列，并且毫米波雷达没有数据反馈。您可以尝试将上面的代码从 ```Serial1.begin(115200);``` 更改为 ```Serial1.begin(115200, SERIAL_8N1, D7, D6);```。
:::

上传程序。打开串口监视器并将波特率设置为 115200，应该会显示结果。输出应该类似于下图。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/4.png"/></div>

:::caution
如果您想查看波形数据，请将传感器切换到实时数据传输模式。切换模式后，传感器可能需要重新上电才能生效。
:::

### Demo4: 睡眠功能的使用

在这个示例中，我们将指导您如何使用 `SleepInf_Decode()` 函数获取睡眠信息。在使用此示例之前，请确保您或测试人员已准备好睡觉。

:::note
默认情况下，传感器处于睡眠状态传输模式。在此模式下，睡眠监测功能已开启。如果您切换到实时数据传输模式，则可能无法获得睡眠数据。如果您想更改传输模式，可以使用 `ModeSelect_fuc()` 函数来实现。使用示例也可以在示例文件夹中的 **MR60BHA1_Transfer_mode_selection** 中找到。切换模式后，传感器可能需要重新上电才能生效。
与睡眠相关的数据需要在有人在床上时才会报告，当前固件默认在人员状态持续 5 分钟后判断有人在床上。
:::

以下示例程序位于库的示例文件夹中，名为 **MR60BHA1_Sleep_inf_output**。

```c
#include "Arduino.h"
#include <60ghzbreathheart.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//BreathHeart_60GHz radar = BreathHeart_60GHz(&mySerial);

// can also try hardware serial with
BreathHeart_60GHz radar = BreathHeart_60GHz(&Serial1);

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
  radar.SleepInf_Decode();           //Sleep-related information output. Data output begins when the monitoring figure is in bed for five minutes.
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
  delay(200);                       //Add time delay to avoid program jam
}
```

:::tip
如果您使用的是 XIAO ESP32 系列，并且毫米波雷达没有数据反馈。您可以尝试将上面的代码从 ```Serial1.begin(115200);``` 更改为 ```Serial1.begin(115200, SERIAL_8N1, D7, D6);```。
:::

上传程序。打开串口监视器并将波特率设置为 115200，应该会显示结果。输出应该类似于下图所示。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/6.png"/></div>

### 示例5：向传感器发送数据

根据用户手册中提供的详细信息，用户可以根据实际需要向传感器发送命令帧，以查询或设置传感器的某些状态或模式。

传感器库示例文件夹中名为 **MR60BHA1_Send_frame** 的 .ino 文件向我们展示了如何发送查询设备 ID 的程序到传感器。

```c
#include "Arduino.h"
#include <60ghzbreathheart.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//BreathHeart_60GHz radar = BreathHeart_60GHz(&mySerial);

// can also try hardware serial with
BreathHeart_60GHz radar = BreathHeart_60GHz(&Serial1);

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

所有数据帧都有一个校验位，以确保数据准确发送或接收。校验位通常在数据帧的倒数第二位。它是通过将校验位之前的所有位相加并取十六进制的低两位来计算的。
让我们以查询设备 ID 的数据帧为例。
<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/6.png"/></div>

可以看到校验位在整个数据帧的倒数第二位。然后我们开始将之前所有的十六进制数字相加。

`0x53 + 0x59 + 0x02 + 0xA2 + 0x00 + 0x01 + 0x0F = 0x0160`

然后我们需要取它的低两位，即 **60**，所以这个数据帧的校验和是 **60**。如果我们想查询传感器的 ID，那么您可以定义以下数组。

`const unsigned char DevID_buff[10] = {0x53, 0x59, 0x02, 0xA1, 0x00, 0x01, 0x0F, 0x60, 0x54, 0x43};`

:::

上传程序。将串口监视器的波特率设置为 115200 应该会显示结果。输出应该类似于下面的图像。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/5.png"/></div>

此时请检查返回的数据帧，看它们是否与用户手册中描述的返回数据帧匹配。

通常，我们的命令不需要重复发送给传感器，但由于传感器回复消息的速度非常快，我们无法确保能够接收到传感器返回的确切数据消息。这个问题有两种解决方案。

- 多次重新上传上述程序。
- 将 `send_func()` 函数的第三个参数（循环发送）设置为 `true`。但是请注意，重复发送设置类型的数据帧**可能会导致传感器卡死**，所以请谨慎使用此功能。如果传感器卡死，请断开传感器的 5V 供电引脚，等待片刻后功能即可恢复。

### Demo6: 重置传感器

有时您的传感器可能会出现检测异常的问题，或者当您想清除传感器上的所有设置时，您可以根据此示例重置传感器。

以下示例程序位于库的示例文件夹中，名为 **MR60BHA1_Reset_sensor**。

```c
#include "Arduino.h"
#include <60ghzbreathheart.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//BreathHeart_60GHz radar = BreathHeart_60GHz(&mySerial);

// can also try hardware serial with
BreathHeart_60GHz radar = BreathHeart_60GHz(&Serial1);

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

### Demo7: 使用 Arduino/Seeeduino

我们的库兼容 Arduino，您也可以选择手头的 Arduino 来开发您的传感器项目。

MR60BHA1 传感器使用 UART 串行端口进行通信，您只需要按照下面的接线将传感器连接到您的 Arduino。

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
        <td align="center">软串口 TX</td>
 </tr>
    <tr>
     <td align="center">TX</td>
     <td align="center">--></td>
        <td align="center">软串口 RX</td>
 </tr>
</table>

所有功能的应用方式与上述 Demo1 到 Demo6 相同，因此我们不会在此示例中重复说明。在此示例中，我们将为您概述如何使用 Arduino 的软串口从传感器获取数据信息。

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
BreathHeart_60GHz radar = BreathHeart_60GHz(&mySerial);
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
#include <60ghzbreathheart.h>

#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
#define RX_Pin A2
#define TX_Pin A3

SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
BreathHeart_60GHz radar = BreathHeart_60GHz(&mySerial);

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

### Demo8: 直接连接到PC获取数据

如果您想使用为传感器设计的上位机，或者想使用串口软件获取完整的数据帧，可以参考这个例程。

通过 **UART转USB** 设备将传感器直接连接到计算机的USB端口。接线如下表所示。

<table align="center">
 <tr>
     <td colspan="4"><div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/60GHzradar/uart.png"/></div></td>
 </tr >
 <tr >
     <td align="center">UART转USB</td>
     <td align="center"></td>
        <td align="center">MR60BHA1传感器</td>
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
MR60BHA1 传感器需要 5V 电源供电，否则传感器可能无法正常工作。
:::

连接成功后，您将看到传感器发送稳定的消息流。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/39.png"/></div>

同时，您也可以通过软件的发送功能向传感器发送数据帧。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/40.png"/></div>

:::caution
如果您选择 **ASCII** 作为发送数据的格式，每组数据都需要加上 **0x** 前缀。如果您选择 **HEX**，则每组数据不需要加上 **0x** 前缀。
:::

## 故障排除

### 常见问题1：这个传感器能否在同一环境中同时检测多个人？

> 答：不可以。这个传感器只能用于单个生物体。如果监测范围内有多个人或动物，这将对监测结果产生影响。

### 常见问题2：为什么我在 XIAO ESP32C3 的串口监视器中看不到任何内容？

> XIAO ESP32C3 串口功能与一般 Arduino 硬件不太一致，直接使用 Serial1 可能会导致 USB 串口无法工作。相关应用案例请参考 [XIAO ESP32C3 的串口章节](https://wiki.seeedstudio.com/cn/XIAO_ESP32C3_Pin_Multiplexing/#serial) 了解详情。

## 资源

- **[PDF]** [呼吸心跳雷达传感器数据手册](https://files.seeedstudio.com/wiki/mmWave-radar/MR60BHA1_Datasheet.pdf)
- **[PDF]** [呼吸心跳雷达传感器用户手册-V1.9](https://files.seeedstudio.com/wiki/60GHzradar/new_res/MR60BHA1_user_manual-V1.9.pdf)
- **[PDF]** [呼吸心跳雷达传感器用户手册-V2.3](https://files.seeedstudio.com/wiki/60GHzradar/new_res/MR60BHA1_userManual_V2.3.pdf)
- **[EXE]** [上位机软件_旧版本](https://files.seeedstudio.com/wiki/60GHzradar/Human-Vital-Sign-Radar.exe)
- **[EXE]** [上位机软件_新版本](https://files.seeedstudio.com/wiki/60GHzradar/MR60BHA1_new.exe)
- **[PPTX]** [Seeed 毫米波传感器系列 V2.0](https://files.seeedstudio.com/wiki/mmWave-radar/Seeed-mmWave-sensor-series-V2.0.pptx)
- **[ZIP]** [60G-雷达-心跳-3D](https://files.seeedstudio.com/wiki/mmWave-radar/60G-Radar-heartbeat-3D.zip)

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
