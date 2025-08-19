---
description: 24GHz 毫米波人体静态存在检测传感器 Lite
title: 24GHz 毫米波人体静态存在检测传感器 Lite
keywords:
- mmWave_radar_sensor
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Radar_MR24HPC1
last_update:
  date: 03/03/2023
  author: Citric
---


# 24GHz 毫米波传感器 - 人体静态存在检测模块 Lite (MR24HPC1)

<div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/0.jpg" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/24GHz-mmWave-Sensor-Human-Static-Presence-Module-Lite-p-5524.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>


## 介绍

24GHz 毫米波传感器 - 人体静态存在检测模块 Lite 是一款集成天线、对健康友好的毫米波雷达传感器，采用 FMCW 测距技术，工作频率为 24GHz，用于实现人体静态存在检测，不受环境影响。这也是一款个性化雷达，用户可以配置其底层参数来确定检测功能。

### 应用

- 自动户外照明
- 自动开门
- 全屋监控
- 智能家电（电视、浴霸、安防等）
- 办公节能（空调、照明）
- 睡眠监测曲线
- 家庭安防
- IPC 触发

### 特性

- 人体存在毫米波雷达：采用 FMCW 测距技术，工作频率为 24GHz，检测范围 5 米，用于检测感应区域内的人体行为
- 个性化雷达检测：提供可配置的检测范围、运动触发、状态变化时间，以及可视化调试软件，满足各种场景需求
- 对健康友好的工作状态：输出功率低至对人体无害
- 高抗干扰能力：输出数据不受温度、湿度、噪音、气流、灰尘、光线等环境影响
- 支持 Arduino

### 硬件概述

<div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/13.jpg" style={{width:500, height:'auto'}}/></div>

1. 5V 引脚是雷达的电源接口，RX 和 TX 是雷达的数据传输接口。RX 表示串行接收，TX 表示串行发送。
2. 人体存在状态输出接口。您可以使用这两个引脚的电平来判断当前环境中的人体运动状态。
  S1 输出：高电平 - 有人，低电平 - 无人。
  S2 输出：高电平 - 活动，低电平 - 静止。
3. 刷写固件引脚。
4. 顶部输入/输出引脚。

## 入门指南

### 固件版本更新

毫米波传感器经过了长期的技术沉淀和用户提供的宝贵建议，我们一直在对原产品进行迭代，以提供更准确可靠的监测结果和更好的用户体验。

新出货的传感器默认搭载最新固件，以确保最新的产品体验。但是，为了老用户的体验，我们在此提供最新固件和更新方法，确保您能够使用我们的最新技术。

#### 通用方法 - 使用 J-link 烧录固件

如果您遇到固件错误或雷达异常、固件故障等问题，使用此方法重新刷写固件是最有效的方法。

**最新固件下载**

| 固件版本 | 下载地址 |
|:----------------:|:----------------:|
| Jlink_MR24HPC1-20230302.bin | [下载](https://files.seeedstudio.com/wiki/60GHzradar/new_res/Jlink_MR24HPC1-20230302.bin) |

:::caution
1. 请仔细检查您产品的功能，请不要与其他毫米波传感器混用刷写此固件，否则可能导致产品功能异常，后果需要您自行承担！

2. 还请注意，不同的固件更新方式使用不同的固件内容，您下载的是通过 **J-link** 烧录的固件。
:::

**将您的雷达更新到最新版本**

**步骤 1.** 您需要准备一个 **Jlink** 和 **MR24HPC1** 24GHz 毫米波传感器。

通过杜邦线将雷达和 Jlink 连接，如下图所示。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/57.jpg"/></div>

**步骤 2.** 下载必要的软件和固件。

| 文件 | 下载地址 |
|:----------------:|:----------------:|
| JlinkV644e.rar | [下载](https://files.seeedstudio.com/wiki/60GHzradar/JlinkV644e.rar) |
| Pack_Segger_AT32F4xx_v1.3.3.zip | [下载](https://files.seeedstudio.com/wiki/60GHzradar/Pack_Segger_AT32F4xx_v1.3.3.zip)

**步骤 3.** 解压 **JlinkV644e.rar** 并打开其中的 **JLink_Windows_V644e.exe** 文件。

按照默认选项安装即可。安装完成后，启动 **J-Flash V6.44e** 软件。

**步骤 4.** 安装芯片包。

解压 **Pack_Segger_AT32F4xx_v1.3.3.zip** 并打开其中的 **Segger_AT32F4xx_AddOn.exe**。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/47.png"/></div>

:::tip
如果在向 JFlash 添加内容时遇到如下图所示的错误，您可以按照以下说明解决问题。
:::

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/arteryMcu.png"/></div>

解决方案：

1. 从 https://www.arterychip.com/en/product/AT32F403A.jsp 下载此文件

2. 解压文件并打开

3. 将 JLinkDevices.xml 从 C:\Program Files\SEGGER\JLink_V794 复制到 C:\Users[用户]\AppData\Roaming\SEGGER

这样就解决了问题，我们可以使用 JFlash 或 JFlash Lite 软件进行刷写。

**步骤 5.** 创建新项目。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/48.png"/></div>

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/49.png"/></div>

找到并选择 **AT32F403ARGT7**。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/50.png"/></div>

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/51.png"/></div>

**步骤 6.** 将雷达固件（.bin 文件）拖放到此软件中，会弹出一个窗口，我们将使用其默认的起始地址 0x8000000。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/52.png"/></div>

**步骤 7.** 点击 **Target** -> **Connect**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/53.png"/></div>

连接成功时会显示 Connected successfully。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/60GHzradar/54.png"/></div>

擦除固件：**Target** -> **manual Programming** -> **Erase Chip**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/55.png"/></div>

升级固件：**Target** -> **manual Programming** -> **Program & Verify**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/56.png"/></div>

此时，固件更新完成。

#### 通过 UART 更新固件

考虑到 J-link 价格昂贵，对于绝大多数只需要更新雷达固件的用户来说，购买 J-link 过于奢侈，因此我们提供了通过 UART 的更新方法。

**最新固件下载**

| 固件版本 | 下载地址 |
|:----------------:|:----------------:|
| UART_MR24HPC1-20230302.bin | [下载](https://files.seeedstudio.com/wiki/60GHzradar/new_res/UART_MR24HPC1-20230302.bin) |

:::caution
1. 请仔细检查您产品的功能，请不要与其他毫米波传感器混用来刷写此固件，否则可能导致产品功能异常，后果需要您自行承担！

2. 还请注意，不同的固件更新方式使用不同的固件内容，您下载的是通过 **UART** 烧录的固件。

3. 在使用 UART 升级固件之前，请确保您的雷达固件版本**至少是 G24VD1SYV001006 版本**，否则可能会导致雷达失效，此时您必须使用 J-link 烧录固件才能使用！

您可以通过向雷达发送命令 `0x53 0x59 0x02 0xA4 0x00 0x01 0x0F 0x62 0x54 0x43` 来查询固件版本号信息。然后雷达报告的数据以字符串形式显示，您将看到类似下图所示的效果。

`G24VD1SYV000009` 是雷达报告的型号，其中 `000009` 是版本号。这意味着此传感器**不**支持 UART 升级。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/21.png"/></div>
:::

**将您的雷达更新到最新版本**

**步骤 1**. 您需要准备一个 **UART 转 USB** 和 **MR24HPC1** 24GHz 毫米波传感器。

通过杜邦线将雷达和 UART 转 USB 连接，如下图所示。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/uart.png"/></div>

**步骤 2**. 下载必要的软件和固件。

| 文件 | 下载地址 |
|:----------------:|:----------------:|
| PackageMake-v1.1.1.zip | [下载](https://files.seeedstudio.com/wiki/60GHzradar/new_res/PackageMake-v1.1.1.zip) |

**步骤 3**. 解压 PackageMake-v1.1.1.zip 包并打开其中的 PackageMake-v1.1.1.exe 文件。

将连接传感器的 UART 转 USB 连接到计算机，点击软件左上角的齿轮图案，选择端口号，将波特率设置为 115200，然后点击右下角确认。（如果找不到端口号，请检查连接，然后点击左下角的刷新按钮重试）

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/11.png"/></div>

**步骤 4**. 连接传感器

按照上述方式完成串口设置后，点击右上角的第二个图标，如果端口选择正确，您将看到雷达的原始数据被打印出来。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/12.png"/></div>

**步骤 5**. 更新固件

左键点击右上角的最后一个图标，这将弹出一个选择固件的窗口。请选择您已下载的固件版本。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/13.png"/></div>

选择完成后，所选文件路径将出现在软件下方，请仔细检查所选固件版本和型号是否与您使用的传感器一致。

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/18.png"/></div>

要升级固件，请双击软件左上角的最后一个图像，然后固件将开始下载到传感器。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/15.png"/></div>

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/16.png"/></div>

等待进度条完成，固件更新即完成。

### 上位机的使用

通过 **UART 转 USB** 设备将雷达直接连接到计算机的 USB 端口。接线如下表所示。

<table align="center">
  <tbody><tr>
      <td colSpan={4}><div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/10.jpg" /></div></td>
    </tr>
    <tr>
      <td align="center">雷达传感器</td>
      <td align="center" />
      <td align="center">UART 转 USB</td>
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

除了上述提到的串口软件，您还可以直接使用专为雷达设计的[上位机软件](https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/Human-Radar-Open-Protocol_2.0.exe)。

以下十个部分解释了软件各个部分的作用。

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/7.png"/></div>

1. 端口

    选择雷达连接到计算机的端口。通常需要在选择之前点击刷新按钮**刷新**端口。选择后请点击**打开**按钮。

2. 波特率

    MR24HPC1雷达需要设置为115200的波特率。

3. 运动能量

    该值等同于**动态值**。该值的变化代表环境中的恒定运动噪声。当空间中没有人时运动能量较低，随着运动幅度和距离的增加，整体运动能量会变得更高。

4. 退出能量

    该值等同于**静态值**。该值的变化代表环境中的恒定静态噪声。当空间无人时退出能量较低，当空间中有静止的人时（胸部呼吸的轻微运动），整体退出能量会在较高值处波动。

5. 距离

    **静止距离**：存在轻微运动区域时环境与雷达之间的直线距离。当空间中某个位置有人静止时，实时输出与雷达的直线距离。
    **运动距离**：环境中运动位置与雷达之间的直线距离。当空间中某个位置有人在运动时，实时输出该位置与雷达的直线距离。

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/9.png"/></div>

6. 图形设置

    用于清楚地确定实时波形与阈值之间的关系。基于实时曲线变化，可以观察空间不同状态下底噪的变化，并基于底噪的变化可以设置人体存在的阈值，对静止状态的存在/不存在/活动进行简单判断。

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/8.png"/></div>

7. 查询

    搜索当前参数设置。关于各个参数值的含义，由于篇幅原因请参考用户手册了解详情。

8. 设置

    设置各个参数的阈值。

9. 状态显示

    该窗口实时显示当前距离、速度和运动状态等值。

10. 发送和回复

    发送和接收的数据帧。

## 使用Arduino进行传感器开发

### Arduino库概述

:::tip
如果这是您第一次使用Arduino，我们强烈建议您参考[Arduino入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

本示例中使用的库代码可以通过点击下面的图标下载。

<p style={{textAlign: 'center'}}><a href="https://github.com/limengdu/Seeed_24GHz_Human_Static_Presence_Module_Lite" target="_blank"><div align="center"><img width ="{300}" src="https://files.seeedstudio.com/wiki/seeed_logo/DOWNLOAD.png" /></div></a></p>

#### 函数 {#function}

在开始开发草图之前，让我们看看库的可用函数。

- `void recvRadarBytes()` —— 该函数根据传感器数据协议中的帧头和帧尾，通过UART收集传感器报告的数据帧。与`showData()`函数配合使用，可以通过串口打印出收集的数据信息。

  - **输入参数：** 无

  - **返回值：** 无

- `void showData()` —— 该函数用于通过串口一次性打印出传感器报告的完整数据帧，需要与`recvRadarBytes()`函数配合使用。

  - **输入参数：** 无

  - **返回值：** 无

- `void HumanStatic_func(bool bodysign /*=false*/)` —— 该函数负责解析传感器的数据帧，并输出人体存在状态的相关数据。

  - **输入参数：** `bodysign` —— 该参数是控制是否输出人体运动参数的开关。如果为**true**，输出将包含大量人体征象参数数据，这可能会影响您查看数据的体验。默认情况下该参数为**false**，不显示身体征象参数信息。

  - <span id="function"><strong>返回值：</strong></span>

    - `int radarStatus` —— 返回的值表示解析的数据帧属于哪个状态类别。具体类别可以在**默认变量**部分找到。

    - `int bodysign_val` —— 返回的值表示人体运动参数的值。该值仅在参数`bodysign=true`时有效。

    - `int static_val` —— 该值等同于**静态值**。该值的变化代表环境中的恒定静态噪声。当空间无人时退出能量较低，当空间中有静止的人时（胸部呼吸的轻微运动），整体退出能量会在较高值处波动。该值仅在打开底层消息时有效。

- `int dynamic_val` —— 该值的变化代表环境中的恒定运动噪声。当空间中无人时运动能量较低，随着运动幅度和距离的增加，整体运动能量会变高。此值仅在开启底层消息时有效。

    - `int dis_static` —— 存在轻微移动区域时环境与传感器之间的直线距离。当空间中某个位置有人静止时，会实时输出与传感器的直线距离。此值仅在开启底层消息时有效。

    - `int dis_move` —— 环境中移动位置与传感器之间的直线距离。当空间中某个位置有人在运动时，会实时输出该位置与传感器的直线距离。此值仅在开启底层消息时有效。

    - `int speed` —— 该值表示移动物体的运动速度。该值仅供参考。此值仅在开启底层消息时有效。

- `void checkSetMode_func(const unsigned char* buff, int len, bool cyclic /*= false*/)` —— 该函数可用于向传感器发送数据帧。发送的数据帧和返回的数据帧都会通过串口打印出来。

  - **输入参数：**

    - `buff` —— 您想要发送给传感器的数据帧。

    - `len` —— 您想要发送给传感器的数据帧长度。

    - `cyclic` —— 循环发送开关。默认为 false，如果您希望循环发送此数据帧，可以设置为 **true**。

  - **返回值：** 无

- `void reset_func()` —— 该函数用于重置传感器。

  - **输入参数：** 无

  - **返回值：** 无

#### 默认变量

```c
#define MESSAGE_HEAD1 0x53       //数据帧头1
#define MESSAGE_HEAD2 0x59       //数据帧头2

#define MESSAGE_END1  0x54       //数据帧结束1
#define MESSAGE_END2  0x43       //数据帧结束2

#define HUMANSTATUS   0x80       //人体存在信息
#define HUMANEXIST    0x01       //人体存在
#define HUMANMOVE     0x02       //人体运动信息
#define HUMANSIGN     0x03       //人体体征参数
#define HUMANDIRECT   0x0B       //人体运动趋势

#define SOMEBODY      0x01       //有人移动
#define NOBODY        0x00       //无人

#define NONE          0x00
#define SOMEBODY_STOP 0x01       //有人静止
#define SOMEBODY_MOVE 0x02       //有人移动

#define CA_CLOSE      0x01       //有人接近
#define CA_AWAY       0x02       //有人远离


#define DETAILSTATUS  0x08       //人体状态底层参数
#define DETAILINFO    0x01       //人体运动状态详细数据
#define DETAILDIRECT  0x06       //人体运动趋势
#define DETAILSIGN    0x07       //人体体征参数

//返回状态，在arduino中使用
#define SOMEONE       0x01       //有人
#define NOONE         0x02       //无人
#define NOTHING       0x03       //无消息
#define SOMEONE_STOP  0x04       //有人静止
#define SOMEONE_MOVE  0x05       //有人移动
#define HUMANPARA     0x06       //人体体征参数
#define SOMEONE_CLOSE 0x07       //有人接近
#define SOMEONE_AWAY  0x08       //有人远离
#define DETAILMESSAGE 0x09       //人体状态底层参数

#define reset_frame_len 10       //重置数据帧长度

//重置数据帧
const unsigned char reset_frame[10] = {0x53, 0x59, 0x01, 0x02, 0x00, 0x01, 0x0F, 0xBF, 0x54, 0x43};
```

### 安装

**步骤 1.** 您需要安装 Arduino 软件。

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></div></a></p>

**步骤 2.** 启动 Arduino 应用程序。

<div align="center"><img width ="{700}" src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"/></div>

**步骤 3.** 选择您的开发板型号并将其添加到 Arduino IDE 中。

- 如果您想在后续教程中使用 **Seeeduino V4.2**，请参考[此教程](https://wiki.seeedstudio.com/cn/Seeed_Arduino_Boards/)完成添加。

- 如果您想在后续教程中使用 **Seeeduino XIAO**，请参考[此教程](https://wiki.seeedstudio.com/cn/Seeeduino-XIAO/#software)完成添加。

- 如果您想在后续教程中使用 **XIAO RP2040**，请参考[此教程](https://wiki.seeedstudio.com/cn/XIAO-RP2040-with-Arduino/#software-setup)完成添加。

- 如果您想在后续教程中使用 **XIAO nRF52840**，请参考[此教程](https://wiki.seeedstudio.com/cn/XIAO_BLE/#software-setup)完成添加。

- 如果您想在后续教程中使用 **XIAO ESP32C3**，请参考[此教程](https://wiki.seeedstudio.com/cn/XIAO_ESP32C3_Getting_Started/#software-setup)完成添加。

:::caution
对于 **XIAO nRF52840**，请选择 **Seeed nRF52 mbed-enabled Boards**，否则运行程序时可能会报错。
<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/SeeednRFmbed.png" style={{width:600, height:'auto'}}/></div>
:::

**步骤 4.** 安装 Arduino 代码库。

首先从 [GitHub](https://github.com/limengdu/Seeed_24GHz_Human_Static_Presence_Module_Lite) 获取代码库并下载到您的本地计算机。

由于您已经下载了 zip 库文件，请打开您的 Arduino IDE，点击 **Sketch > Include Library > Add .ZIP Library**。选择您刚刚下载的 zip 文件，如果库安装正确，您将在通知窗口中看到 **Library added to your libraries**。这意味着库已成功安装。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:600, height:'auto'}}/></div>

## Arduino 示例

现在我们已经安装了库并了解了基本功能，让我们为 XIAO nRF52840 Sense 运行一些示例，看看它的表现如何。

### 所需材料

在完成以下示例之前，您需要准备以下材料。

|              |              |              |
|:--------------:|:--------------:|:--------------:|
|<div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/0.jpg" style={{width:240, height:'auto'}}/></div>| <div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg" style={{width:210, height:'auto'}}/></div>| <div align="center"><img src="https://files.seeedstudio.com/wiki/60GHzradar/dupont.jpg" style={{width:150, height:'auto'}}/></div>|
|[**MR24HPC1**](https://www.seeedstudio.com/24GHz-mmWave-Sensor-Human-Static-Presence-Module-Lite-p-5524.html)|[**Seeed XIAO BLE nRF52840 Sense**](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html?queryID=4bbd8c09f20216aa26f6b5a9040504d0&objectID=5253&indexName=bazaar_retailer_products)|**2mm 到 2.54mm 间距排线**|

**步骤 1.** 通过主板将设备连接到计算机。接线图如下表所示。

<table align="center">
  <tbody><tr>
      <td colSpan={4}><div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/11.jpg" /></div></td>
    </tr>
    <tr>
      <td align="center">MR24HPC1</td>
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

**步骤 2.** 在 Arduino IDE 左上角的菜单栏中，选择 **tool**，选择您正在使用的开发板类型，并选择相应的串口。

:::tip
如果您使用的是 **MacOS**，设备的串口名称通常以 **/dev/cu.usbmodem xxx** 开头，以设备名称结尾。如果您使用的是 **Windows**，设备的串口名称通常以 **COM** 开头，同样以设备名称结尾。

<div align="center"><img src="https://files.seeedstudio.com/wiki/60GHzradar/3.png" style={{width:600, height:'auto'}}/></div>
:::

在此示例中，我们将演示传感器如何与我们的热门产品 XIAO nRF52840 Sense 配合工作。

### 演示 1：串口打印传感器输出的原始数据帧 {#demo1}

此示例将指导您完成通过串口打印传感器报告的原始数据的过程。

以下示例程序位于库的 examples 文件夹中，名为 **MR24HPCB1_rawdata_print**。

```c
#include "Arduino.h"
#include <humanstaticLite.h>

//#include <SoftwareSerial.h>
// 选择任意两个可以与SoftwareSerial一起用于RX和TX的引脚
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// 我们将使用软件串口
//HumanStaticLite radar = HumanStaticLite(&mySerial);

// 也可以尝试硬件串口
HumanStaticLite radar = HumanStaticLite(&Serial1);

void setup() {
  // 将您的设置代码放在这里，运行一次：
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   //当串口打开时，程序开始执行。

  Serial.println("Ready");
}

void loop() {
  // 将您的主要代码放在这里，重复运行：
  radar.recvRadarBytes();           //接收雷达数据并开始处理
  radar.showData();                 //串口打印一组接收到的数据帧
  delay(200);                       //添加时间延迟以避免程序卡死
}
```

:::tip
如果您使用的是 XIAO ESP32 系列，并且毫米波雷达没有数据反馈。您可以尝试将上面的代码从

```Serial1.begin(115200);``` 改为 ```Serial1.begin(115200, SERIAL_8N1, D7, D6);```。
:::

在这个程序中，我们使用 XIAO nRF52840 的硬件 **Serial1** 端口连接到传感器，并使用硬件 **Serial** 端口来输出数据，因此我们需要在初始化函数 `Setup()` 中单独初始化这个串口。

在主 `loop()` 函数中，我们使用 `recvRadarBytes()` 函数从传感器接收数据帧，然后使用 `showData()` 函数通过串口打印出接收到的数据帧。

在这个程序中，需要注意的是，每两个数据帧的接收和输出之间都有一个间隔，以避免主板出现阻塞。这个时间不应少于 **150ms**。

这意味着主板无法接收传感器报告的所有数据帧，但由于传感器报告的帧数非常大且频繁，这不会影响使用传感器判断环境的准确性。

上传程序。将串口监视器的波特率设置为 115200 应该会显示结果。输出应该类似于下图。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/1.png" style={{width:600, height:'auto'}}/></div>

### 演示 2：解析人体存在信息的串口打印 {#demo2}

在这个示例中，我们将使用库中的函数来解析接收到的数据帧，并通过串口打印出传感器主动报告的所有特征数据。

以下示例程序位于库的 examples 文件夹中，名为 **MR24HPCB1_parsed_rawdata**。

```c
#include "Arduino.h"
#include <humanstaticLite.h>

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//HumanStaticLite radar = HumanStaticLite(&mySerial);

// can also try hardware serial with
HumanStaticLite radar = HumanStaticLite(&Serial1);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Ready");
}

void loop() {
  // put your main code here, to run repeatedly:
  radar.HumanStatic_func(true);    //Turn on printing of human movement sign parameters
  if(radar.radarStatus != 0x00){
    switch(radar.radarStatus){
      Serial.println(radar.radarStatus);
      case SOMEONE:
        Serial.println("Someone is here.");
        Serial.println("---------------------------------");
        break;
      case NOONE:
        Serial.println("Nobody here.");
        Serial.println("---------------------------------");
        break;
      case NOTHING:
        Serial.println("No human activity messages.");
        Serial.println("---------------------------------");
        break;
      case SOMEONE_STOP:
        Serial.println("Someone stop");
        Serial.println("---------------------------------");
        break;
      case SOMEONE_MOVE:
        Serial.println("Someone moving");
        Serial.println("---------------------------------");
        break;
      case HUMANPARA:
        Serial.print("The parameters of human body signs are: ");
        Serial.println(radar.bodysign_val, DEC);
        Serial.println("---------------------------------");
        break;
      case SOMEONE_CLOSE:
        Serial.println("Someone is closing");
        Serial.println("---------------------------------");
        break;
      case SOMEONE_AWAY:
        Serial.println("Someone is staying away");
        Serial.println("---------------------------------");
        break;
      case DETAILMESSAGE:
        Serial.print("Spatial static values: ");
        Serial.println(radar.static_val);
        Serial.print("Distance to stationary object: ");
        Serial.print(radar.dis_static);
        Serial.println(" m");

        Serial.print("Spatial dynamic values: ");
        Serial.println(radar.dynamic_val);

        Serial.print("Distance from the movement object: ");
        Serial.print(radar.dis_move);
        Serial.println(" m");
        
        Serial.print("Speed of moving object: ");
        Serial.print(radar.speed);
        Serial.println(" m/s");
        Serial.println("---------------------------------");
        break;
    }
  }
  delay(200);
}
```

:::tip
如果您使用的是 XIAO ESP32 系列，并且毫米波雷达没有数据反馈。您可以尝试将上面的代码从 ```Serial1.begin(115200);``` 改为 ```Serial1.begin(115200, SERIAL_8N1, D7, D6);```。
:::

要实现数据解析功能，我们首先需要调用 `HumanStatic_func()` 函数。传入的参数可以是 `true` 或 `false`，用于控制是否启用人体运动参数的显示。

如果您选择开启，即传入参数 `true`，您可能会在串口获得以下消息。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/2.png" style={{width:600, height:'auto'}}/></div>

:::note
人体运动参数：人体运动幅度值。当空间内无人时，人体运动参数为 **0**，当有人存在且静止时为 **1-5**，当身体运动时为 **2-100**（运动幅度越大，身体运动参数越接近）。
这意味着如果您觉得传感器识别的结果不符合您的预期，您可以通过自定义判断人体运动参数来输出人体存在的信息。
:::

如果您想停止串口上人体运动参数的疯狂输出，请输入参数 `false`，然后您就能在串口上看到干净的身体状态信息。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/3.png" style={{width:600, height:'auto'}}/></div>

:::tip
您可能在较长时间内看不到串口监视器上打印的内容，这可能是正常的。传感器内置的算法是这样的，只有当被监控对象的运动状态发生变化时才会输出信息。如果您在上传程序后一直保持静止，您可能希望起身走动并观察效果。
:::

还有一种可能是您接收到的数据与上面两张图片中显示的信息不同。那么您可能已经打开了底层消息输出开关。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/4.png"  style={{width:600, height:'auto'}}/></div>

有关如何开启和关闭底层消息的更多信息，请参考 [Demo 3](#demo3) 的相关部分。简而言之，打开底层消息意味着导出更详细的数据。

关于底层消息数据的含义，由于篇幅原因，请查阅本传感器的 [**功能**](#function) 部分或用户手册。

### Demo 3: 向传感器发送数据 {#demo3}

MR24HPC1 提供了丰富的模式设置功能。本示例将以开关底层消息为例，说明如何发送数据帧的实现。

以下示例程序位于库的示例文件夹中，名为 **MR24HPCB1_open_underlyingMes**。

```c
#include "Arduino.h"
#include <humanstaticLite.h>

//#include <SoftwareSerial.h>
// 选择任意两个可以与SoftwareSerial一起用于RX和TX的引脚
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// 我们将使用软件串口
//HumanStaticLite radar = HumanStaticLite(&mySerial);

// 也可以尝试硬件串口
HumanStaticLite radar = HumanStaticLite(&Serial1);

const unsigned char close_buff[10] = {0x53, 0x59, 0x08, 0x00, 0x00, 0x01, 0x00, 0xB5, 0x54, 0x43};  //关闭开放底层消息
const unsigned char open_buff[10] = {0x53, 0x59, 0x08, 0x00, 0x00, 0x01, 0x01, 0xB6, 0x54, 0x43};   //开启开放底层消息

void setup() {
  // 将您的设置代码放在这里，只运行一次：
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   //当串口打开时，程序开始执行。

  Serial.println("Ready");
}

void loop() {
  // 将您的主要代码放在这里，重复运行：
  radar.checkSetMode_func(open_buff, 10, false);
  delay(50);   //不要将延迟时间设置得太长，因为这可能会影响雷达返回的数据帧的接收。
}

```

:::tip
如果您使用的是XIAO ESP32系列，并且毫米波雷达没有数据反馈。您可以尝试将上面的代码从```Serial1.begin(115200);```更改为```Serial1.begin(115200, SERIAL_8N1, D7, D6);```。
:::

在向传感器发送数据之前，我们需要查阅用户手册，根据我们的需求获取要发送的完整数据帧，并在程序中定义一个数组来保存要发送的数据帧。

在这个示例中，我们根据用户手册创建了两个数据帧数组。它们的功能是开启或关闭开放底层消息功能。

```

c
const unsigned char close_buff[10] = {0x53, 0x59, 0x08, 0x00, 0x00, 0x01, 0x00, 0xB5, 0x54, 0x43};  //关闭开放底层消息
const unsigned char open_buff[10] = {0x53, 0x59, 0x08, 0x00, 0x00, 0x01, 0x01, 0xB6, 0x54, 0x43};   //开启开放底层消息

```

:::tip
**关于校验位"sum"的计算。**

所有数据帧都有一个校验位，以确保数据的发送或接收准确无误。校验位通常位于数据帧的倒数第二位。它通过将校验位之前的所有位相加并取十六进制的低两位来计算。
让我们以查询设备ID的数据帧为例。
<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/6.png"/></div>

可以看到校验位位于整个数据帧的倒数第二位。然后我们开始将之前的所有十六进制数相加。

`0x53 + 0x59 + 0x02 + 0xA2 + 0x00 + 0x01 + 0x0F = 0x0160`

然后我们需要取它的低两位，即**60**，所以这个数据帧的校验和是**60**。如果我们想查询传感器的ID，那么你可以定义以下数组。

`const unsigned char DevID_buff[10] = {0x53, 0x59, 0x02, 0xA1, 0x00, 0x01, 0x0F, 0x60, 0x54, 0x43};`

:::

然后我们通过调用`checkSetMode_func()`函数来发送数据帧。传入的参数是数据帧数组、数组长度和一个表示是否循环发送的布尔值。

```c
radar.checkSetMode_func(open_buff, 10, false);
```

上传程序。将串口监视器的波特率设置为 115200 应该会显示结果。输出应该类似于下面的图像。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/5.png" style={{width:600, height:'auto'}}/></div>

此时请检查返回的数据帧，如果它们与用户手册中描述的返回数据帧匹配，则设置成功。

通常，我们的命令不需要重复发送给传感器，但由于传感器回复消息的速度非常快，我们无法确保能够接收到传感器返回的确切数据消息。这个问题有两种解决方案。

- 多次重新上传上述程序。
- 将 `checkSetMode_func()` 函数的第三个参数（循环发送）设置为 `true`。但是请注意，重复发送设置类型的数据帧**可能会导致传感器卡死**，因此请谨慎使用此功能。如果传感器卡死，请断开传感器的 5V 供电引脚，等待片刻后功能即可恢复。

### 演示 4：重置传感器 {#demo4}

有时您可能遇到传感器检测异常的问题，或者想要清除传感器上的所有设置，那么您可以根据此示例重置传感器。

以下示例程序位于库的示例文件夹中，名为 **MR24HPCB1_reset_radar**。

```c
#include "Arduino.h"
#include <humanstaticLite.h>

//#include <SoftwareSerial.h>
// 选择任意两个可以与SoftwareSerial一起用于RX和TX的引脚
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// 我们将使用软件串口
//HumanStaticLite radar = HumanStaticLite(&mySerial);

// 也可以尝试硬件串口
HumanStaticLite radar = HumanStaticLite(&Serial1);

void setup() {
  // 将您的设置代码放在这里，运行一次：
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   //当串口打开时，程序开始执行。

  Serial.println("Ready");

  radar.reset_func();
}

void loop() {
  // 将您的主要代码放在这里，重复运行：

}
```

:::tip
如果您使用的是 XIAO ESP32 系列，并且毫米波雷达没有数据反馈。您可以尝试将上面的代码从 ```Serial1.begin(115200);``` 改为 ```Serial1.begin(115200, SERIAL_8N1, D7, D6);```。
:::

重置传感器非常简单，您只需要调用 `reset_func()`。重置只需要**执行一次**，所以我们在 `Setup()` 函数中使用它。

### 演示 5：使用 Arduino/Seeeduino {#demo5}

我们的库兼容 Arduino，您也可以选择手头的 Arduino 来开发您的传感器项目。

MR24HPC1 传感器使用 UART 串口通信，您只需要按照下面的接线将传感器连接到您的 Arduino。

<table align="center">
  <tbody><tr>
      <td align="center">MR24HPC1</td>
      <td align="center" />
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
  </tbody></table>

所有功能的应用方式与上面的 `演示 1` 到 `演示 4` 相同，所以我们不会在这个例子中重复它们。在这个例子中，我们将为您概述如何使用 Arduino 的软串口从传感器获取数据信息。

:::tip
有关 Arduino 软串口的说明，请参考 [Arduino 官方文档](https://docs.arduino.cc/learn/built-in-libraries/software-serial)。
:::

为了避免使用 Serial 同时进行输出和数据传输造成的数据混乱，在 Arduino 端我们通常使用软串口。

软串口库的导入和 RX、TX 引脚的定义需要在程序的早期完成。以下程序将 **A2** 和 **A3** 引脚定义为软串口的 **RX** 和 **TX** 引脚。

```c
#include <SoftwareSerial.h>
//选择任意两个可以与SoftwareSerial一起使用的引脚作为RX和TX
#define RX_Pin A2
#define TX_Pin A3

SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

//我们将使用软件串口
HumanStaticLite radar = HumanStaticLite(&mySerial);

```

另外，不要忘记在 `Setup()` 函数中设置软件串口的波特率。

```c
void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);

  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Ready");
}

```

以**演示1**为例，如果您想使用Arduino打印来自传感器的上报数据帧，那么完整的程序如下所示。

```c
#include "Arduino.h"
#include <humanstaticLite.h>

#include <SoftwareSerial.h>
// 选择任意两个可以与SoftwareSerial一起用于RX和TX的引脚
#define RX_Pin A2
#define TX_Pin A3

SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// 我们将使用软件串口
HumanStaticLite radar = HumanStaticLite(&mySerial);

void setup() {
  // 将您的设置代码放在这里，只运行一次：
  Serial.begin(115200);

  mySerial.begin(115200);

  while(!Serial);   //当串口打开时，程序开始执行。

  Serial.println("Ready");
}

void loop() {
  // 将您的主要代码放在这里，重复运行：
  radar.recvRadarBytes();           //接收雷达数据并开始处理
  radar.showData();                 //串口打印一组接收到的数据帧
  delay(200);                       //添加时间延迟以避免程序卡死
}
```

### 演示 6: 直接连接到 PC 获取数据 {#demo6}

如果您想使用专为传感器设计的上位机，或者想使用串口软件获取完整的数据帧，可以参考此例程。

通过 **UART 转 USB** 设备将传感器直接连接到计算机的 USB 端口。接线如下表所示。

<table align="center">
  <tbody><tr>
      <td colSpan={4}><div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/10.jpg" /></div></td>
    </tr>
    <tr>
      <td align="center">雷达传感器</td>
      <td align="center" />
      <td align="center">UART 转 USB</td>
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
  </tbody></table>

使用串口调试助手等软件选择传感器所在的串口。

<div align="center"><img src="https://files.seeedstudio.com/wiki/60GHzradar/37.png" style={{width:200, height:'auto'}}/></div>

:::caution
MR24HPC1 传感器需要 5V 电源供电，否则传感器可能无法正常工作。
:::

连接成功后，您将看到传感器发送稳定的消息流。

<div align="center"><img src="https://files.seeedstudio.com/wiki/60GHzradar/39.png" style={{width:600, height:'auto'}}/></div>

同时，您也可以通过软件的发送功能向传感器发送数据帧。

<div align="center"><img src="https://files.seeedstudio.com/wiki/60GHzradar/40.png" style={{width:600, height:'auto'}}/></div>

### 演示 7: MR24HPBC1 & XIAO ESP32C3 & ESPHome & Home Assistant {#demo7}

我们为这款雷达和 XIAO ESP32C3 创建了连接到 ESPHome 和 Home Assistant 的教程，如果您感兴趣，可以参考这里的教程。

- [XIAO ESP32C3 通过 ESPHome 服务访问 Home Assistant](https://wiki.seeedstudio.com/cn/xiao-esp32c3-esphome)

### 演示 8: 在 XIAO ESP32C3 中使用传感器 {#demo8}

由于 XIAO ESP32C3 硬件串口的[特殊设计](https://wiki.seeedstudio.com/cn/XIAO_ESP32C3_Pin_Multiplexing/#special-way---use-usb-serial-and-uart0uart1-at-the-same-time)，为了使用 UART 与传感器发送和接收数据消息，您需要使用以下代码。

```cpp
#include "Arduino.h"
#include <humanstaticLite.h>
#include <HardwareSerial.h>

//HardwareSerial MySerial(0); // 如果您想使用 D6 和 D7 作为串口引脚，请取消注释此行并注释下面的行。
HardwareSerial MySerial(1);   // 创建一个新的 HardwareSerial 类

// 也可以尝试硬件串口
HumanStaticLite radar = HumanStaticLite(&MySerial);

void setup() {
  // 将您的设置代码放在这里，只运行一次：
  Serial.begin(115200);

  /*
   * 4, 5 表示 GPIO4 和 GPIO5，对应引脚 D2 和 D3。
   * 如果您想直接使用 XIAO ESP32C3 的硬件 UART 引脚，可以将 4, 5 更改为 -1, -1。
   * MySerial.begin(115200, SERIAL_8N1, -1, -1);
   * 
   * 除此之外，您还可以使用 D9 (GPIO9) 和 D10 (GPIO10) 引脚作为串口。
   * MySerial1.begin(115200, SERIAL_8N1, 9, 10);
   */
  MySerial.begin(115200, SERIAL_8N1, 4, 5);

  while(!Serial);   //当串口打开时，程序开始执行。

  delay(500);

  Serial.println("Ready");
}

void loop() {
  // 将您的主要代码放在这里，重复运行：
  radar.recvRadarBytes();           //接收雷达数据并开始处理
  radar.showData();                 //串口打印一组接收到的数据帧
  delay(200);                       //添加时间延迟以避免程序卡死
}

```

## 故障排除

### 常见问题 1：此传感器能否在同一环境中同时检测多个人？ {#faq1}

> 答：不可以。此传感器只能用于单个生物体。如果监测范围内有多个人或动物，这将对监测结果产生影响。

### 常见问题 2：为什么我在 XIAO ESP32C3 的串口监视器中看不到任何内容？ {#faq2}

> XIAO ESP32C3 串口功能与一般 Arduino 硬件不太一致，直接使用 Serial1 可能会导致 USB 串口无法工作。相关应用案例，请前往 [XIAO ESP32C3 的串口章节](https://wiki.seeedstudio.com/cn/XIAO_ESP32C3_Pin_Multiplexing/#serial) 了解详情。

### 常见问题 3：是否可以使用其他芯片代替 XIAO ESP32-C3 来使用该库？ {#faq3}

是的，确实可以使用其他芯片代替 XIAO ESP32-C3 来使用该库。只需确保连接正确的 RX/TX 引脚或两个 GPIO 引脚，并将波特率设置为 `115200`。
确认使用哪种方法，软件或硬件，例如如果您有一个只有一个串口的 `Arduino Uno R3`，您可以按如下方式实现：

```cpp
#include "Arduino.h"
#include <humanstaticLite.h>

#include <SoftwareSerial.h>
// 选择任意两个可以与 SoftwareSerial 一起用于 RX 和 TX 的引脚
#define RX_Pin A2
#define TX_Pin A3

SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// 我们将使用软件串口
HumanStaticLite radar = HumanStaticLite(&mySerial);

void setup() {
  // 将您的设置代码放在这里，只运行一次：
  Serial.begin(115200);
  mySerial.begin(115200);
}
void loop() {
  // 您的代码在这里
}
```


## 资源

- **[PDF]** [快速设置模板](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_Quick_Setup_Template-V1.0.pdf)
- **[PDF]** [数据手册](https://files.seeedstudio.com/wiki/mmWave-radar/24GHz_mmWave_Sensor-Human_Static_Presence_Module_Lite_Datasheet.pdf)
- **[PDF]** [用户手册](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_User_Manual-V2.0.pdf)
- **[EXE]** [上位机软件](https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/Human-Radar-Open-Protocol_2.0.exe)
- **[ZIP]** [CE 认证文件](https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/101991030_CE.zip)

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