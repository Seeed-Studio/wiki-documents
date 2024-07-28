---
description: 24GHz mmWave Human Static Presence Lite
title: 24GHz毫米波传感器 - 人体静态存在模块精简版
keywords:
- mmWave_radar_sensor
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Radar_MR24HPC1
last_update:
  date: 03/23/2024
  author: AnXiaodie
---


# 24GHz毫米波传感器 - 人体静态存在模块精简版（MR24HPC1）

<div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/0.jpg" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/24GHz-mmWave-Sensor-Human-Static-Presence-Module-Lite-p-5524.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>



## 简介

24GHz毫米波传感器 - 人体静态存在模块精简版是一款集成了天线的、对人体健康友好的毫米波雷达传感器。它采用FMCW测距技术，在24GHz频段工作，用于实现人体存在的检测，且不受环境因素的影响。这也是一款个性化雷达，用户可以配置其底层参数，以确定检测功能。

### 应用场景
- 自动户外照明
- 自动门开启
- 全屋监控
- 智能家电（电视、浴室助手、安防等）
- 办公室节能（空调、照明）
- 睡眠监测曲线
- 家庭安防
- IPC触发

### 特点

- 人体存在毫米波雷达：采用FMCW测距技术，在24GHz频段工作，探测距离达5米，用于检测感应区域内的人体行为
- 个性化雷达检测：提供可配置的检测范围、运动触发、状态改变时间，以及可视化调试软件，以满足各种场景的需求
- 健康友好的工作状态：输出功率低至对人体无害
- 高抗干扰性：输出数据不受温度、湿度、噪声、气流、灰尘、光线等环境因素的影响
- 支持Arduino

### 硬件概述

<div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/13.jpg" style={{width:500, height:'auto'}}/></div>

1. 5V引脚是雷达的电源接口，而RX和TX则是雷达的数据传输接口。RX代表串行接收，TX代表串行发送。
2. 人体存在状态输出接口。您可以使用这两个引脚的电平来确定当前环境中的人体移动情况。
    S1输出：高电平 - 有人，低电平 - 无人。
    S2输出：高电平 - 活动，低电平 - 静止。
3. 固件闪存引脚。
4. 其他输入输出引脚。

## 入门指南

### 固件版本更新

毫米波传感器经过了长时间的技术沉淀和用户提供的宝贵建议，我们一直在原始产品的基础上进行迭代，以提供更准确、可靠的监测结果和更好的用户体验。

新出厂的传感器默认搭载最新固件，以确保用户获得最新的产品体验。然而，为了照顾老用户的使用体验，我们在此提供最新的固件和更新方法，以确保您能够使用我们最新的技术。

#### 通用方法——使用J-link烧录固件

如果遇到固件错误或雷达异常、固件故障等问题，使用此方法重新烧录固件是最有效的方法。

**最新固件下载**

|          固件版本           |                           下载地址                           |
| :-------------------------: | :----------------------------------------------------------: |
| Jlink_MR24HPC1-20230302.bin | [下载](https://files.seeedstudio.com/wiki/60GHzradar/new_res/Jlink_MR24HPC1-20230302.bin) |

:::caution警告

1. 请仔细检查您的产品功能，请勿与其他毫米波传感器混淆以刷写此固件，否则可能会导致产品功能异常，后果需自负！
2. 请注意，更新固件的不同方式使用不同的固件内容，您正在下载的是通过**J-link**烧录的固件。
:::

**将您的雷达更新到最新版本**

**步骤1.** 您需要有一个**Jlink**和**MR24HPC1** 24GHz毫米波传感器。

通过杜邦线将雷达和Jlink连接在一起，连接方式如以下图示所示。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/57.jpg"/></div>

**步骤2.** 下载必要的软件和固件。

|              文件               |                           下载地址                           |
|:----------------:|:----------------:|
|         JlinkV644e.rar          | [下载](https://files.seeedstudio.com/wiki/60GHzradar/JlinkV644e.rar) |
| Pack_Segger_AT32F4xx_v1.3.3.zip | [下载](https://files.seeedstudio.com/wiki/60GHzradar/Pack_Segger_AT32F4xx_v1.3.3.zip) |

**步骤3.** 解压**JlinkV644e.rar**文件，并打开其中的**JLink_Windows_V644e.exe**文件。

只需按照默认选项进行安装。安装完成后，启动**J-Flash V6.44e**软件。

**步骤4.** 安装芯片包。

解压**Pack_Segger_AT32F4xx_v1.3.3.zip**文件，并打开其中的**Segger_AT32F4xx_AddOn.exe**文件。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/47.png"/></div>

:::tip提示
如果在向JFlash添加内容时遇到如下图片所示的错误，您可以按照以下说明解决问题。
:::

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/arteryMcu.png"/></div>

解决方案：

1. 从https://www.arterychip.com/en/product/AT32F403A.jsp下载此文件。
2. 解压文件并打开。
3. 将C:\Program Files\SEGGER\JLink_V794中的JLinkDevices.xml文件复制到C:\Users[用户名]\AppData\Roaming\SEGGER。

这样就可以解决问题，我们可以使用JFlash或JFlash Lite软件进行烧录。

**步骤5.** 创建一个新项目。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/48.png"/></div>

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/49.png"/></div>

找到并选择**AT32F403ARGT7**。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/50.png"/></div>

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/51.png"/></div>

**步骤6.** 将雷达固件（.bin文件）拖放到此软件中，会弹出一个窗口，我们只需使用其默认的起始地址0x8000000。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/52.png"/></div>

**步骤7.** 点击 **Target** -> **Connect***

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/53.png"/></div>

当连接成功时，它会显示“Connected successfully”。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/60GHzradar/54.png"/></div>

擦除固件：**Target** -> **manual Programming** -> **Erase Chip**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/55.png"/></div>

升级固件：**Target** -> **manual Programming** -> **Program & Verify**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/56.png"/></div>

此时，固件更新已完成。

#### 通过UART更新固件

考虑到J-link价格昂贵，对于绝大多数仅需要更新雷达固件的用户来说，购买J-link太过奢侈，因此我们提供了通过UART进行更新的方法。

**最新固件下载**

|          固件版本          |                           下载地址                           |
|:----------------:|:----------------:|
| UART_MR24HPC1-20230302.bin | [下载](https://files.seeedstudio.com/wiki/60GHzradar/new_res/UART_MR24HPC1-20230302.bin) |

:::caution警告

1. 请仔细检查您的产品功能，请勿与其他毫米波传感器混淆以刷写此固件，否则可能会导致产品功能异常，后果需自负！
2. 请注意，更新固件的不同方式使用不同的固件内容，您正在下载的是通过**UART**烧录的固件。
3. 在使用UART升级固件之前，请确保您的雷达固件版本**至少是G24VD1SYV001006**，否则可能会导致雷达无法使用，届时您将需要使用J-link烧录固件才能使用！

您可以通过向雷达发送命令`0x53 0x59 0x02 0xA4 0x00 0x01 0x0F 0x62 0x54 0x43`来查询固件版本号信息。雷达报告的数据将以字符串形式显示，您将看到类似于以下所示的效果。

`G24VD1SYV000009`是雷达报告的型号号，其中`000009`是版本号。这意味着这个传感器**不支持**UART升级。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/21.png"/></div>
:::

**更新您的雷达至最新版本**

**步骤1**. 您需要准备一个**UART转USB**转换器和**MR24HPC1** 24GHz毫米波传感器。

通过杜邦线将雷达和UART转USB转换器连接在一起，如以下示意图所示。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/60GHzradar/uart.png"/></div>

**步骤2**. 下载必要的软件和固件。

|          文件          |                           下载地址                           |
|:----------------:|:----------------:|
| PackageMake-v1.1.1.zip | [下载](https://files.seeedstudio.com/wiki/60GHzradar/new_res/PackageMake-v1.1.1.zip) |

**步骤3**. 解压PackageMake-v1.1.1.zip包，并打开其中的PackageMake-v1.1.1.exe文件。

将UART转USB转换器与连接到电脑的传感器连接，点击软件界面左上角的齿轮图案，选择端口号，将波特率设置为115200，然后点击右下角的确认按钮。（如果找不到端口号，请检查连接，然后点击左下角的刷新按钮重试）

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/11.png"/></div>

**步骤4**. 连接传感器

按照上述步骤设置好串口后，点击右上角的第二个图标，如果端口选择正确，您将看到雷达的原始数据被打印出来。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/12.png"/></div>

**步骤5**. 更新固件

鼠标左键点击右上角的最后一个图标，这将弹出一个窗口用于选择固件。请选择您已下载的固件版本。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/13.png"/></div>

选择完成后，所选文件路径将出现在软件下方，请再次确认所选固件版本和型号是否与您使用的传感器一致。

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/18.png"/></div>

要升级固件，请在软件左上角最后一张图片的位置双击鼠标左键，然后固件将开始下载到传感器中。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/15.png"/></div>

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/60GHzradar/new_img/16.png"/></div>

等待进度条完成，固件更新即告结束。

### 上位机使用说明

通过**UART转USB**设备将雷达直接连接到电脑的USB端口。接线方式如下表所示。

<table align="center">
  <tbody><tr>
      <td colSpan={4}><div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/10.jpg" /></div></td>
    </tr>
    <tr>
      <td align="center">雷达传感器</td>
      <td align="center" />
      <td align="center">UART转USB</td>
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

除了上述串口软件外，您还可以使用专为雷达设计的[上位机软件](https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/Human-Radar-Open-Protocol_2.0.exe)。

以下十个部分解释了软件中每个部分的作用。

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/7.png"/></div>

1. 端口

    选择雷达连接到电脑的端口。在选择之前，通常需要点击刷新按钮来**刷新**端口。选择完毕后，请点击**打开**按钮。

2. 波特率

    MR24HPC1雷达需要设置为115200的波特率。

3. 运动能量

    这个值相当于**动态值**。这个值的变化代表了环境中持续的运动噪声。当空间内无人时，运动能量较低；随着运动幅度和距离的增加，整体运动能量会升高。

4. 退出能量

    这个值相当于**静态值**。这个值的变化代表了环境中持续的静态噪声。当空间内无人时，退出能量较低；当空间内有静止的人（如胸部呼吸的轻微运动）时，整体退出能量会在较高的值之间波动。

5. 距离

    **静止距离**：环境中存在轻微移动区域时，环境与雷达之间的直线距离。当空间中的某个位置有人静止时，会实时输出该位置与雷达之间的直线距离。
    **运动距离**：环境中移动位置与雷达之间的直线距离。当空间中的某个位置有人运动时，会实时输出该位置与雷达之间的直线距离。

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/9.png"/></div>

6. 图形设置

    用于明确确定实时波形与阈值之间的关系。根据实时曲线的变化，可以观察空间在不同状态下的底噪变化，并根据底噪的变化来设置人体存在的阈值，从而对静止状态的存在/不存在/活动进行简单判断。

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/8.png"/></div>

7. 查询

    搜索当前的参数设置。由于篇幅原因，各参数值的详细含义请参考用户手册。

8. 设置

    设置各参数的阈值。

9. 状态显示

    此窗口实时显示当前的距离、速度和运动状态等数值。

10. 发送与回复

    发送和接收的数据帧。Sensor development with Arduino

### Arduino Library Overview

:::tip提示
如果你是第一次使用Arduino，我们强烈建议你参考[Arduino入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。
:::

本示例中使用的库代码可以通过点击下面的图标进行下载。

<p style={{textAlign: 'center'}}><a href="https://github.com/limengdu/Seeed_24GHz_Human_Static_Presence_Module_Lite" target="_blank"><div align="center"><img width ="{300}" src="https://files.seeedstudio.com/wiki/seeed_logo/DOWNLOAD.png" /></div></a></p>

#### 功能

在开始开发草图之前，让我们先看一下库中可用的功能。

- `void recvRadarBytes()` —— 此函数根据传感器数据协议中的帧头和帧尾，通过UART收集传感器报告的数据帧。与`showData()`函数一起使用，可以将收集的数据信息通过串口打印出来。
  - **输入参数：** 无
  - **返回值：** 无
- `void showData()` —— 此函数用于通过串口一次性打印出传感器报告的完整数据帧，需要与`recvRadarBytes()`函数一起使用。
  - **输入参数：** 无
  - **返回值：** 无
- `void HumanStatic_func(bool bodysign /*=false*/)` —— 此函数负责解析传感器的数据帧，并输出关于人体存在状态的相关数据。
  - **输入参数：** `bodysign` —— 这是一个开关，用于控制是否输出人体运动参数。如果为**true**，输出将包含大量人体信号参数数据，这可能会影响您查看数据的体验。默认情况下，此参数为**false**，不显示身体信号参数信息。
  - **返回值：**
    - `int radarStatus` —— 返回的值表示解析的数据帧所属的状态类别。具体类别可以在**默认变量**部分找到。

    - `int bodysign_val` —— 返回的值表示人体运动参数的值。这个值仅在参数`bodysign=true`时有效。

    - `int static_val` —— 这个值相当于**静态值**。该值的变化代表了环境中恒定的静态噪声。当空间无人时，退出能量较低，而当空间内有人静止不动时（如胸部呼吸的轻微运动），整体退出能量会在较高的值上波动。这个值仅在开启底层消息时有效。

    - `int dynamic_val` —— 这个值的变化代表了环境中恒定的运动噪声。当空间内无人时，运动能量较低，而随着运动幅度和距离的增加，整体运动能量会上升。这个值仅在开启底层消息时有效。

    - `int dis_static` —— 在存在轻微运动区域的情况下，环境与传感器之间的直线距离。当空间内某位置有人静止不动时，该位置到传感器的直线距离会实时输出。这个值仅在开启底层消息时有效。

    - `int dis_move` —— 环境中运动位置与传感器之间的直线距离。当空间内某位置有人运动时，该位置到传感器的直线距离会实时输出。这个值仅在开启底层消息时有效。

    - `int speed` —— 这个值表示运动物体的移动速度。该值仅供参考。这个值仅在开启底层消息时有效。

- `void checkSetMode_func(const unsigned char* buff, int len, bool cyclic /*= false*/)` —— 此函数可用于向传感器发送数据帧。发送的数据帧和返回的数据帧会通过串口打印出来。

  - **输入参数：**
    - `buff` —— 您想要发送给传感器的数据帧。
    - `len` —— 您想要发送给传感器的数据帧的长度。
    - `cyclic` —— 循环发送开关。默认为false，如果您希望循环发送此数据帧，可以设置为**true**。
  - **返回值：** 无

- `void reset_func()` —— 这个函数用于重置传感器。

  - **输入参数：** 无
  - **返回值：** 无


#### 默认变量

```c
#define MESSAGE_HEAD1 0x53       //数据框标题1
#define MESSAGE_HEAD2 0x59       //数据框标题2”。在这个上下文中

#define MESSAGE_END1  0x54       //数据框的结束位置1
#define MESSAGE_END2  0x43       //数据框的结束位置2

#define HUMANSTATUS   0x80       //人类存在信息
#define HUMANEXIST    0x01       //人体的存在
#define HUMANMOVE     0x02       //人体运动信息
#define HUMANSIGN     0x03       //体征参数
#define HUMANDIRECT   0x0B       //人体运动趋势

#define SOMEBODY      0x01       //有人移动
#define NOBODY        0x00       //没有人

#define NONE          0x00
#define SOMEBODY_STOP 0x01       //有人停下来
#define SOMEBODY_MOVE 0x02       //Somebody move

#define CA_CLOSE      0x01       //有人移动
#define CA_AWAY       0x02       //有些人保持距离”或“有些人远离


#define DETAILSTATUS  0x08       //人类状态的底层参数
#define DETAILINFO    0x01       //关于人体运动状态的详细数据
#define DETAILDIRECT  0x06       //人体运动趋势
#define DETAILSIGN    0x07       //体征参数

//返回状态，在Arduino中使用
#define SOMEONE       0x01       //有人
#define NOONE         0x02       //没人
#define NOTHING       0x03       //没有信息
#define SOMEONE_STOP  0x04       //有人停止
#define SOMEONE_MOVE  0x05       //有人移动
#define HUMANPARA     0x06       //体征参数
#define SOMEONE_CLOSE 0x07       //有人靠近
#define SOMEONE_AWAY  0x08       //有些人保持距离
#define DETAILMESSAGE 0x09       //人类状态的底层参数

#define reset_frame_len 10       //重置数据帧长度

//重置数据帧
const unsigned char reset_frame[10] = {0x53, 0x59, 0x01, 0x02, 0x00, 0x01, 0x0F, 0xBF, 0x54, 0x43};
```
### 安装步骤
**第一步**。 您需要安装Arduino软件。
<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></div></a></p>

**第二步**。 启动Arduino应用程序。
<div align="center"><img width ="{700}" src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"/></div>

**第三步**。 选择您的开发板型号并将其添加到Arduino IDE中。
- 如果您打算在后续步骤中使用**Seeeduino V4.2**，请参考[这个教程](https://wiki.seeedstudio.com/Seeed_Arduino_Boards/)以完成添加。
- 如果您打算在后续步骤中使用**Seeeduino XIAO**，请参考[这个教程](https://wiki.seeedstudio.com/Seeeduino-XIAO/#software)以完成添加。
- 如果您打算在后续步骤中使用**XIAO RP2040**，请参考[这个教程](https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino/#software-setup)以完成添加。
- 如果您打算在后续步骤中使用**XIAO nRF52840**，请参考[这个教程](https://wiki.seeedstudio.com/XIAO_BLE/#software-setup)以完成添加。
- 如果您打算在后续步骤中使用**XIAO ESP32C3**，请参考[这个教程](https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started/#software-setup)以完成添加。

:::caution警告
对于**XIAO nRF52840**，请选择**Seeed nRF52 mbed-enabled Boards**，否则在运行程序时可能会出现错误。
<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/SeeednRFmbed.png" style={{width:600, height:'auto'}}/></div>
:::

**第四步**。 安装Arduino代码库。

首先，从[GitHub](https://github.com/limengdu/Seeed_24GHz_Human_Static_Presence_Module_Lite)获取代码库，并将其下载到您的本地计算机。

既然您已经下载了zip格式的库文件，打开您的Arduino IDE，点击**Sketch（草图）> Include Library（包含库）> Add .ZIP Library（添加.ZIP库）**。选择您刚刚下载的zip文件，如果库安装正确，您会在通知窗口中看到**Library added to your libraries（库已添加到您的库中）**。这意味着库已成功安装。
<div align="center"><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:600, height:'auto'}}/></div>

## Arduino 示例
既然我们已经安装了库并理解了基本功能，现在让我们运行一些XIAO nRF52840 Sense的示例，看看它的表现如何。
### 所需材料

在完成以下示例之前，您需要准备以下材料。

|              |              |              |
|:--------------:|:--------------:|:--------------:|
|<div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/0.jpg" style={{width:240, height:'auto'}}/></div>| <div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg" style={{width:210, height:'auto'}}/></div>| <div align="center"><img src="https://files.seeedstudio.com/wiki/60GHzradar/dupont.jpg" style={{width:150, height:'auto'}}/></div>|
|[**MR24HPC1**](https://www.seeedstudio.com/24GHz-mmWave-Sensor-Human-Static-Presence-Module-Lite-p-5524.html)|[**Seeed XIAO BLE 基于nRF52840的传感器板**](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html?queryID=4bbd8c09f20216aa26f6b5a9040504d0&objectID=5253&indexName=bazaar_retailer_products)|**2mm to 2.54mm Pitch Ribbon Cable**|
**第一步**。通过主板将设备连接到计算机。接线图如下表所示。
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

**第二步**。在Arduino IDE左上角菜单栏中，选择**工具**，选择您正在使用的开发板类型，并选择相应的串行端口。

:::tip提示
如果您使用的是**MacOS**，设备的串行端口名称通常以**/dev/cu.usbmodem xxx**开头，并以设备名称结尾。如果您使用的是**Windows**，设备的串行端口名称通常以**COM**开头，同样以设备名称结尾。
<div align="center"><img src="https://files.seeedstudio.com/wiki/60GHzradar/3.png" style={{width:600, height:'auto'}}/></div>
:::

在这个示例中，我们将演示传感器如何与我们广受欢迎的产品 XIAO nRF52840 Sense 配合使用。

### 示例1：通过串行端口打印传感器输出的原始数据帧
本示例将指导您通过串行端口打印出传感器报告的原始数据。

在库的示例文件夹中，有一个名为 **MR24HPCB1_rawdata_print** 的示例程序。

```c
#include "Arduino.h"
#include <humanstaticLite.h>
//#include <SoftwareSerial.h>
// 选择任何两个可以使用 SoftwareSerial 进行 RX（接收）和 TX（发送）的引脚
//#define RX_Pin A2
//#define TX_Pin A3
//创建一个名为mySerial的SoftwareSerial对象，并指定接收引脚（RX_Pin）和发送引脚（TX_Pin）。
// 我们将使用软件串行通信
//“创建一个名为radar的HumanStaticLite雷达对象，并将mySerial对象的地址传递给它。”
// 也可以尝试使用硬件串行端口进行（通信）
HumanStaticLite radar = HumanStaticLite(&Serial1);
void setup() {
  // 将您的设置代码放在这里，仅运行一次：
  Serial.begin(115200);
  Serial1.begin(115200);
  //  mySerial 开始以 115200 波特率运行。
  while(!Serial);   //当串行端口打开时，程序开始执行。
  Serial.println("Ready");
}
void loop() {
  // 将您的主要代码放在这里，以便反复运行：
  radar.recvRadarBytes();           //接收雷达数据并开始处理
  radar.showData();                 //串行端口打印出一组接收到的数据帧
  delay(200);                       //添加时间延迟以避免程序卡死
}
```
:::tip提示
如果您使用的是 XIAO ESP32 系列，并且毫米波雷达没有数据反馈。您可以尝试将上面的代码从 更改为`Serial1.begin(115200)`;`Serial1.begin(115200, SERIAL_8N1, D7, D6)`;
:::

在这个程序中，我们使用XIAO nRF52840的硬件**Serial1**端口连接到传感器，并使用硬件**Serial**端口Serial输出数据，因此我们需要在初始化函数`Setup()`中单独初始化这个串行端口。

在主要的`loop()`函数中，我们使用`recvRadarBytes()`函数从传感器接收数据帧，然后使用`showData()`函数通过串行端口打印出接收到的数据帧。

在这个程序中，需要注意的是，每接收并输出两个数据帧之间有一个间隔，以避免主板卡死。这个时间间隔不应小于**150毫秒**。

这意味着主板无法接收传感器报告的所有数据帧，但由于传感器报告的数据帧数量非常大且频繁，这并不影响使用传感器来确定环境的准确性。

上传程序。将您的串行监视器设置为115200波特率，应该可以看到结果。输出应该看起来类似于下面的图像。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/1.png" style={{width:600, height:'auto'}}/></div>

### 示例2：串行端口打印解析后的人体存在信息

在这个示例中，我们将使用库中的函数来解析接收到的数据帧，并通过串行端口打印出传感器主动报告的所有特征数据。

以下示例程序位于名为**MR24HPCB1_parsed_rawdata**的库的示例文件夹中。

```c
#include "Arduino.h"
#include <humanstaticLite.h>

//#include <SoftwareSerial.h>
// 选择任何两个可以使用 SoftwareSerial 进行接收（RX）和发送（TX）的引脚
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// 我们将使用软件串行通信。
//HumanStaticLite radar = HumanStaticLite(&mySerial);

// 也可以尝试使用硬件串行端口进行（通信）
HumanStaticLite radar = HumanStaticLite(&Serial1);

void setup() {
  // 将您的设置代码放在这里，仅运行一次：
  Serial.begin(115200);
  Serial1.begin(115200);

  //  设置软件串行通信mySerial的波特率为115200

  while(!Serial);   //当串行端口打开时，程序开始执行

  Serial.println("Ready");
}

void loop() {
  // 将您的主要代码放在这里，以便反复运行：
  radar.HumanStatic_func(true);    //开启人体运动信号参数的打印功能
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
:::tip提示
如果您使用的是 XIAO ESP32 系列，并且毫米波雷达没有数据反馈。您可以尝试将上面的代码从 更改为`Serial1.begin(115200)`;`Serial1.begin(115200, SERIAL_8N1, D7, D6)`;
:::

要实现数据解析功能，我们首先需要调用`HumanStatic_func()`函数。传入的参数可以是`true`或`false`，用于控制是否启用人体运动参数的显示。

如果你选择开启它，即传入参数`true`，那么你可能会在串行端口得到以下消息。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/2.png" style={{width:600, height:'auto'}}/></div>

:::note注意 

人体运动参数：人体运动幅度值。当空间内无人时，人体运动参数为**0**；当有人在场且静止不动时，参数为**1-5**；当人体处于运动状态时，参数为**2-100**（运动幅度越大，人体运动参数越接近该范围）。
这意味着，如果你感觉传感器识别的结果不符合你的预期，你可以通过自定义人体运动参数的判断来输出人体存在的信息。
:::

如果你希望停止在串行端口上疯狂输出人体运动参数，可以传入参数`false`，这样你就可以在串行端口上看到清晰的人体状态信息了。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/3.png" style={{width:600, height:'auto'}}/></div>

:::tip提示 

你可能会在串行监视器上长时间看不到打印的内容，这可能是正常的。传感器内置的算法是这样的，只有当被监控物体的运动状态发生变化时，才会输出信息。如果你在上传程序后一直保持静止，你可能需要起身走动并观察效果。
:::

你收到的数据也可能与上面两张图片中显示的数据信息不同。那么，你可能已经打开了底层消息输出开关。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/4.png"  style={{width:600, height:'auto'}}/></div>

有关如何打开和关闭“Open Underlying Message”的更多信息，请参考[**示例3**](https://yiyan.baidu.com/#jump1)的相关部分。简而言之，打开“Open Underlying Message”意味着将导出更详细的数据。

由于篇幅限制，关于“Open Underlying Message”数据的含义，请查阅此传感器的[**功能**](https://yiyan.baidu.com/#jump2)部分或用户手册。

### <span id="jump1">示例3：向传感器发送数据</span>

MR24HPC1提供了丰富的模式设置功能。本示例将解释如何实现开关“Open Underlying Message”作为发送数据帧的示例。

以下示例程序位于名为**MR24HPCB1_open_underlyingMes**的库的示例文件夹中。

（注意：根据原文中的描述，库名称应为**MR24HPCB1_open_underlyingMes**，但通常库名和示例程序名应保持一致，可能原文中存在笔误。正确的库名或示例程序名应与实际的库或示例文件相匹配。）

```c
#include "Arduino.h"
#include <humanstaticLite.h>

//#include <SoftwareSerial.h>
// 选择任何两个可用于 SoftwareSerial 进行接收（RX）和发送（TX）的引脚。
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// 我们将使用软件串行通信。
//HumanStaticLite radar = HumanStaticLite(&mySerial);

// 也可以尝试使用硬件串行端口
HumanStaticLite radar = HumanStaticLite(&Serial1);

const unsigned char close_buff[10] = {0x53, 0x59, 0x08, 0x00, 0x00, 0x01, 0x00, 0xB5, 0x54, 0x43};  //关闭底层消息输出
const unsigned char open_buff[10] = {0x53, 0x59, 0x08, 0x00, 0x00, 0x01, 0x01, 0xB6, 0x54, 0x43};   //开启底层消息输出

void setup() {
  // 将您的设置代码放在这里，仅运行一次：
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial（一个 SoftwareSerial 对象）的波特率为 115200

  while(!Serial);   //当串行端口打开时，程序开始执行。

  Serial.println("Ready");
}

void loop() {
  // 把你的主代码放在这里，以便反复运行：
  radar.checkSetMode_func(open_buff, 10, false);
  delay(50);   //不要将延时时间设置得太长，因为这可能会影响雷达返回的数据帧的接收。
}
```
:::tip提示
如果您使用的是 XIAO ESP32 系列，并且毫米波雷达没有数据反馈。您可以尝试将上面的代码从 更改为`Serial1.begin(115200)`;`Serial1.begin(115200, SERIAL_8N1, D7, D6)`;
:::

在向传感器发送数据之前，我们需要参考用户手册，根据我们的需求获取要发送的完整数据帧，并在程序中定义一个数组来存储待发送的数据帧。

在这个示例中，我们根据用户手册创建了两个数据帧数组。它们的功能是开启或关闭底层消息输出功能。

```c
const unsigned char close_buff[10] = {0x53, 0x59, 0x08, 0x00, 0x00, 0x01, 0x00, 0xB5, 0x54, 0x43};  //switch off Open Underlying Message
const unsigned char open_buff[10] = {0x53, 0x59, 0x08, 0x00, 0x00, 0x01, 0x01, 0xB6, 0x54, 0x43};   //switch on Open Underlying Message
```
:::tip提示
**关于校验位“sum”的计算**。
所有的数据帧都有一个校验位，以确保数据的发送或接收准确无误。校验位通常位于数据帧的倒数第二位。它是通过将校验位之前的所有位相加，并取十六进制下的最低两位来计算的。
以查询设备ID的数据帧为例，我们来进行说明。
<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/6.png"/></div>
可以看到，校验位位于整个数据帧的倒数第二位。然后，我们开始将前面所有的十六进制数相加。
```
0x53 + 0x59 + 0x02 + 0xA2 + 0x00 + 0x01 + 0x0F = 0x0160
```
然后我们需要取它的最低两位，也就是 **60**，所以这个数据帧的校验位是 **60**。如果我们想要查询传感器的ID，那么可以定义以下数组。
`const unsigned char DevID_buff[10] = {0x53, 0x59, 0x02, 0xA1, 0x00, 0x01, 0x0F, 0x60, 0x54, 0x43};`
:::
接着，我们通过调用 `checkSetMode_func()` 函数来发送数据帧。传入的参数包括数据帧的数组、数组的长度以及一个布尔值，表示是否循环发送。
```c
radar.checkSetMode_func(open_buff, 10, false);
```

接着，我们通过调用 `checkSetMode_func()` 函数来发送数据帧。传入的参数包括数据帧的数组、数组的长度以及一个布尔值，表示是否循环发送。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/5.png" style={{width:600, height:'auto'}}/></div>

此时，请检查返回的数据帧，如果它们与用户手册中描述的数据帧匹配，那么设置就成功了。

通常情况下，我们不需要重复向传感器发送命令，但是由于传感器回复消息的速度非常快，我们无法确保能够接收到传感器返回的精确数据消息。解决这个问题有两个方案。

- 多次重新上传上述过程。
- 将 `checkSetMode_func()` 函数的第三个参数（循环发送）设置为 `true`。但是请注意，反复发送设置类型的数据帧**可能会导致传感器卡住**，因此请小心使用此功能。如果传感器卡住了，请断开传感器的 5V 供电引脚，等待片刻，使其功能恢复。

### 示例4：重置传感器

有时，您的传感器在检测异常时可能会遇到问题，或者您想清除传感器上的所有设置，这时您可以按照此示例来重置您的传感器。

以下示例程序位于库的示例文件夹中，名为 **MR24HPCB1_reset_radar**。

```c
#include "Arduino.h"
#include <humanstaticLite.h>

//#include <SoftwareSerial.h>
// 选择任何两个可以与 SoftwareSerial 一起使用的引脚作为 RX（接收）和 TX（发送）
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// 我们将使用软件串行（通信）
//HumanStaticLite radar = HumanStaticLite(&mySerial);

// 也可以尝试使用硬件串行端口进行（通信）
HumanStaticLite radar = HumanStaticLite(&Serial1);

void setup() {
  // 把你的初始化代码放在这里，只需运行一次：
  Serial.begin(115200);
  Serial1.begin(115200);

  //  mySerial.begin(115200);

  while(!Serial);   //当串行端口打开时，程序开始执行。

  Serial.println("Ready");

  radar.reset_func();
}

void loop() {
  // 把你的主代码放在这里，以便反复运行：

}
```
:::tip提示
如果您使用的是 XIAO ESP32 系列，并且毫米波雷达没有数据反馈。您可以尝试将上面的代码从 更改为`Serial1.begin(115200)`;`Serial1.begin(115200, SERIAL_8N1, D7, D6)`;
:::

重置传感器非常简单，您只需要调用 `reset_func()` 函数。重置只需要**执行一次**，因此我们在 `Setup()` 函数中使用它。

### 示例5：使用 Arduino/Seeeduino

我们的库与 Arduino 兼容，您还可以选择您手头的 Arduino 来开发您的传感器项目。

MR24HPC1 传感器使用 UART 串行端口进行通信，您只需要按照下面的接线方式将传感器连接到您的 Arduino 即可。

<table align="center">
  <tbody><tr>
      <td align="center">MR24HPC1</td>
      <td align="center" />
      <td align="center">MCU</td>
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
      <td align="center">软件串行端口 TX（发送）</td>
    </tr>
    <tr>
      <td align="center">TX</td>
      <td align="center">--&gt;</td>
      <td align="center">软件串行端口 RX（接收）</td>
    </tr>
  </tbody></table>

所有功能的应用方式与上述 Demo1 到 Demo4 中的相同，因此在这个示例中我们不会重复它们。在本示例中，我们将向您概述如何使用 Arduino 的软件串行端口从传感器获取数据信息。

:::tip提示
关于 Arduino 软件串行端口的说明，请参考 [Arduino 官方文档](https://docs.arduino.cc/learn/built-in-libraries/software-serial)。
:::

为了避免使用 Serial 同时进行输出和数据传输时造成的数据混淆，在 Arduino 端我们通常使用软件串行端口。

需要在程序较早的部分导入软件串行端口库并定义 RX 和 TX 引脚。以下程序将 **A2** 和 **A3** 引脚定义为软件串行端口的 **RX** 和 **TX** 引脚。

```c
#include <SoftwareSerial.h>
//选择任何两个可以与 SoftwareSerial 一起使用的引脚作为 RX（接收）和 TX（发送）
#define RX_Pin A2
#define TX_Pin A3

SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

//我们将使用软件串行通信
HumanStaticLite radar = HumanStaticLite(&mySerial);
```

此外，不要忘记在 `Setup()` 函数中设置软件串行端口的波特率。

```c
void setup() {
  // 把你的初始化代码放在这里，只需运行一次：
  Serial.begin(115200);

  mySerial.begin(115200);

  while(!Serial);   //当串行端口打开时，程序开始执行。

  Serial.println("Ready");
}
```

```c
void setup() {
  // 这句话的意思是：把你的初始化代码放在这里，它只需要运行一次。
  Serial.begin(115200);

  mySerial.begin(115200);

  while(!Serial);   //这句话的翻译为：当串行端口被打开时，程序开始执行。

  Serial.println("Ready");
}
```

以 **Demo1** 为例，如果你想要使用 Arduino 来打印传感器报告的数据帧，那么完整的程序如下。

```c
#include "Arduino.h"
#include <humanstaticLite.h>

#include <SoftwareSerial.h>
// 选择任何两个可以作为 SoftwareSerial 的 RX（接收）和 TX（发送）的引脚
#define RX_Pin A2
#define TX_Pin A3

SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// 我们将使用软件串行通信
HumanStaticLite radar = HumanStaticLite(&mySerial);

void setup() {
  // 在这里放置你的初始化代码，只需运行一次：
  Serial.begin(115200);

  mySerial.begin(115200);

  while(!Serial);   //当串行端口被打开时，程序开始执行。

  Serial.println("Ready");
}

void loop() {
  // 在这里放置你的主代码，它将反复运行：
  radar.recvRadarBytes();           //接收雷达数据并开始处理
  radar.showData();                 //串行端口打印出一组接收到的数据帧
  delay(200);                       //添加时间延迟以避免程序卡顿
}
```

### 示例6：直接与电脑连接获取数据

如果你想要使用专门为传感器设计的上位机，或者想要使用串行软件来获取完整的数据帧，你可以参考这个例程。

通过 **UART 到 USB** 设备将传感器直接连接到电脑的 USB 端口。接线方式如下表所示。

<table align="center">
  <tbody><tr>
      <td colSpan={4}><div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/10.jpg" /></div></td>
    </tr>
    <tr>
      <td align="center">雷达传感器</td>
      <td align="center" />
      <td align="center">UART 到 USB</td>
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


使用如串口调试助手这样的软件来选择传感器所在的串口。

<div align="center"><img src="https://files.seeedstudio.com/wiki/60GHzradar/37.png" style={{width:200, height:'auto'}}/></div>

:::caution警告
MR24HPC1 传感器需要 5V 电源供电，否则传感器可能无法正常工作。
:::

连接成功后，你将看到传感器持续发送消息流。

<div align="center"><img src="https://files.seeedstudio.com/wiki/60GHzradar/39.png" style={{width:600, height:'auto'}}/></div>

同时，你也可以通过软件的发送功能向传感器发送数据帧。

<div align="center"><img src="https://files.seeedstudio.com/wiki/60GHzradar/40.png" style={{width:600, height:'auto'}}/></div>

### 示例7：MR24HPBC1 & XIAO ESP32C3 & ESPHome & Home Assistant

我们已经为这个雷达和 XIAO ESP32C3 创建了一个连接到 ESPHome 和 Home Assistant 的教程，如果你感兴趣，可以在这里参考教程。

- [XIAO ESP32C3 通过 ESPHome 服务访问 Home Assistant](https://wiki.seeedstudio.com/xiao-esp32c3-esphome)

### 示例8：在 XIAO ESP32C3 中使用传感器

由于 XIAO ESP32C3 的硬件串行端口具有[特殊设计](https://wiki.seeedstudio.com/XIAO_ESP32C3_Pin_Multiplexing/#special-way---use-usb-serial-and-uart0uart1-at-the-same-time)，因此，为了使用 UART 发送和接收与传感器之间的数据消息，你需要使用以下代码。

```cpp
#include "Arduino.h"
#include <humanstaticLite.h>
#include <HardwareSerial.h>

//HardwareSerial MySerial(0); // 如果你想使用D6和D7作为串行引脚，取消注释这行代码，并注释掉下面的那行代码。
HardwareSerial MySerial(1);   // 创建一个新的 HardwareSerial 类

// 也可以尝试使用硬件串行通信
HumanStaticLite radar = HumanStaticLite(&MySerial);

void setup() {
  // 在这里放置你的初始化代码，只需运行一次：
  Serial.begin(115200);

  /*

4和5分别代表GPIO4和GPIO5，对应到D2和D3引脚。
如果你想要直接使用XIAO ESP32C3的硬件UART引脚，你可以将4和5改为-1和-1。
MySerial.begin(115200, SERIAL_8N1, -1, -1);
除此之外，你还可以使用D9（GPIO9）和D10（GPIO10）引脚作为串行端口。
MySerial1.begin(115200, SERIAL_8N1, 9, 10);
*/
  MySerial.begin(115200, SERIAL_8N1, 4, 5);

  while(!Serial);   //当串行端口被打开时，程序开始执行。

  delay(500);

  Serial.println("Ready");
}

void loop() {
  // 在这里放置你的主代码，它将反复运行：
  radar.recvRadarBytes();           //接收雷达数据并开始处理
  radar.showData();                 //串行端口打印出一组接收到的数据帧
  delay(200);                       //添加时间延迟以避免程序卡顿
}
```
## 故障排除
### 常见问题1：这个传感器能在同一环境中同时检测到多个人吗？
> 答：不可以。这个传感器只能用于单个活动物体。如果监控范围内有多于一个人或动物，这将会对监控结果产生影响。

### 常见问题2：为什么我在XIAO ESP32C3的串行监视器中看不到任何内容？
> 答：XIAO ESP32C3的串行端口功能与一般的Arduino硬件不完全一致，直接使用Serial1可能会导致USB串行端口无法工作。有关相关应用案例，请访问[XIAO ESP32C3的串行章节](https://wiki.seeedstudio.com/XIAO_ESP32C3_Pin_Multiplexing/#serial)以获取详细信息。

### 常见问题3：是否可以使用其他芯片代替 XIAO ESP32-C3 来使用该库？
> 答：是的，确实可以使用其他芯片代替 XIAO ESP32-C3 与库一起使用。只需确保连接正确的 RX/TX 引脚或两个 GPIO 引脚，并将波特率设置为 。 确认使用哪种方法，软件或硬件，例如，如果您有一个只有一个串口，则可以实现如下：`115200` `Arduino Uno R3`

## 资源
- **[PDF]** [快速设置模板](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_Quick_Setup_Template-V1.0.pdf)
- **[PDF]** [数据手册](https://files.seeedstudio.com/wiki/mmWave-radar/24GHz_mmWave_Sensor-Human_Static_Presence_Module_Lite_Datasheet.pdf)
- **[PDF]** [用户手册](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_User_Manual-V2.0.pdf)
- **[EXE]** [上位机软件](https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/Human-Radar-Open-Protocol_2.0.exe)
- **[ZIP]** [CE认证文件](https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/101991030_CE.zip)

## 技术支持与产品讨论
感谢您选择我们的产品！我们在这里为您提供各种支持，以确保您在使用我们的产品时获得尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的需求和偏好。
<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>
<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>