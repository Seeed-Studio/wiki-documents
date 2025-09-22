---
description: XIAO CAN总线扩展板入门指南
title: XIAO CAN总线扩展板
keywords:
- Grove
- can bus
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/xiao-can-bus-expansion
last_update:
  date: 6/6/2023
  author: Stephen Lo
---

# XIAO CAN总线扩展板

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_can_bus_board/main.jpg" alt="pir" width={500} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-CAN-Bus-Breakout-Board-for-XIAO-and-QT-Py-p-5702.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

<br />

XIAO CAN总线扩展板专为与Seeed Studio XIAO开发板配合使用而设计，为您的项目提供了一种简单便捷的方式来添加CAN总线通信功能。CAN总线（控制器局域网）是一种在汽车、工业和其他嵌入式系统中广泛使用的通信协议，允许不同节点之间进行可靠和稳健的数据交换。

扩展板上集成的MCP2515控制器和SN65HVD230收发器芯片确保了通过CAN总线进行无缝高效的通信。MCP2515控制器处理协议管理、消息过滤和错误处理，而SN65HVD230收发器将控制器的数字信号转换为CAN总线通信所需的差分信号。

通过XIAO CAN总线扩展板，您可以利用Seeed Studio XIAO开发板的强大功能及其广泛的生态系统来创建需要CAN总线通信的项目。无论您是在开发汽车应用、工业控制系统、机器人项目还是物联网设备，这款扩展板都为将CAN总线功能集成到您的设计中提供了可靠而紧凑的解决方案。

扩展板采用用户友好的端子连接，让您可以轻松地将CANH和CANL线路连接到CAN总线网络。板子的紧凑设计确保了与各种项目外壳的兼容性，并便于无缝集成到您现有的设置中。

通过使用XIAO CAN总线扩展板，您可以利用CAN总线协议的稳健性、可靠性和可扩展性，在您的项目中实现高效的数据交换、系统控制和互连性。

## 介绍

### 特性

- 兼容性：设计为与Seeed Studio XIAO开发板无缝配合使用。
- MCP2515控制器：板载MCP2515芯片提供可靠的CAN总线通信控制和处理。
- SN65HVD230收发器：集成的SN65HVD230芯片确保准确的信号转换和通过CAN总线的稳健通信。
- 端子连接：CANH和CANL线路通过3针端子方便地访问，允许轻松连接到CAN总线。
- 紧凑设计：扩展板采用紧凑的外形设计，适用于各种应用。

### 规格

- 兼容性：Seeed Studio XIAO开发板。
- 通信接口：CAN总线（控制器局域网）。
- CAN收发器：SN65HVD230。
- CAN控制器：MCP2515。
- 端子连接：用于CANH和CANL线路的2针端子。

### 应用

XIAO CAN总线扩展板可用于需要CAN总线通信的各种项目。以下是一些应用想法来启发您：

- 汽车项目：将扩展板连接到XIAO并构建需要CAN总线通信的汽车应用，如车辆诊断或数据记录。
- 工业控制系统：利用CAN总线功能与工业设备和系统接口，实现高效的数据交换和控制。
- 机器人技术：将扩展板集成到您的机器人项目中，以实现不同机器人模块和组件之间的通信。
- 物联网应用：将扩展板与物联网设备集成，以便通过CAN总线协议进行通信和数据交换。

请参考XIAO CAN总线扩展板数据手册和示例以获取详细的使用说明和代码示例。

## 硬件概述

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_can_bus_board/hw.jpg" alt="pir" width={500} height="auto" /></p>

1. GND
2. CAN-H
3. CAN-L
4. RX/TX LED 指示灯
5. SN65NVD230
6. MCP2515

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_can_bus_board/3.png" alt="pir" width={500} height="auto" /></p>

XIAO CAN BUS 扩展板在板子背面有一个焊盘 P1，短接后会为设备添加一个终端电阻。考虑到一些用户的通信设备可能已经有终端电阻，XIAO CAN-BUS 默认不短接 P1，如果您发现 CAN 通信无法发送或接收消息，可以尝试短接 P1 焊盘来获得 120 欧姆的终端电阻。

## Arduino 库概述

我们提供了一个 [MCP2515 板的 Arduino 库](https://github.com/limengdu/Arduino_CAN_BUS_MCP2515)。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Arduino_CAN_BUS_MCP2515" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

该库包含几个示例，包括：

- ***OBDII-PIDs*** - 从 OBD-II 接口检索数据
- ***send*** - 向 CAN 总线发送帧
- ***recv*** - 从 CAN 总线接收帧
- ***set_mask_filter_recv*** - 使用掩码和过滤器设置从 CAN 总线接收帧

### 1. 设置波特率

此函数用于初始化 CAN 总线系统的波特率。

可用的波特率列表如下：

```cpp
#define CAN_5KBPS    1
#define CAN_10KBPS   2
#define CAN_20KBPS   3
#define CAN_25KBPS   4
#define CAN_31K25BPS 5
#define CAN_33KBPS   6
#define CAN_40KBPS   7
#define CAN_50KBPS   8
#define CAN_80KBPS   9
#define CAN_83K3BPS  10
#define CAN_95KBPS   11
#define CAN_100KBPS  12
#define CAN_125KBPS  13
#define CAN_200KBPS  14
#define CAN_250KBPS  15
#define CAN_500KBPS  16
#define CAN_666kbps  17
#define CAN_1000KBPS 18
```

### 2. 设置接收掩码和过滤器

控制器芯片有2个接收掩码寄存器和5个过滤器寄存器，可用于确保从目标设备接收数据。这些寄存器在具有许多节点的大型网络中特别有用。我们提供了两个函数，允许您使用这些掩码和过滤器寄存器。

**掩码：**

```c
init_Mask(unsigned char num, unsigned char ext, unsigned char ulData);
```

**Filter:**

```c
init_Filt(unsigned char num, unsigned char ext, unsigned char ulData);
```

- **num** 表示要使用的寄存器。对于掩码可以填写 0 或 1，对于过滤器可以填写 0 到 5。
- **ext** 表示帧的状态。0 表示这是标准帧的掩码或过滤器。1 表示这是扩展帧的掩码或过滤器。
- **ulData** 表示掩码或过滤器的内容。

### 3. 检查接收

MCP2515 控制器芯片能够在轮询模式或中断模式下工作。在轮询模式下，软件定期检查是否有接收到的帧。在中断模式下，可以使用额外的引脚来发出信号，表示已接收到帧或传输已完成。这样可以更有效地使用资源，因为处理器不需要持续检查传入的数据。

此函数用于检查接收缓冲区中是否有等待的接收帧。如果有，函数将返回 true，否则返回 false。您可以在循环中使用此函数来持续检查接收到的帧。

```c
INT8U MCP_CAN::checkReceive(void);
```

### 4. 获取 CAN ID

您可以使用以下函数来获取从"发送"节点接收到的数据长度。

```c
INT32U MCP_CAN::getCanId(void)
```

### 5. Send a frame

```c
CAN.sendMsgBuf(INT8U id, INT8U ext, INT8U len, data_buf);
```

此函数用于向 CAN 总线发送数据。参数如下：

- **id** - CAN 帧的 ID。
- **ext** - 表示帧状态的布尔值。'0' 表示标准帧。'1' 表示扩展帧。
- **len** - 帧的长度。
- **data_buf** - 消息的内容。

例如，在 'send' 示例中，我们有：

```c
unsigned char stmp[8] = {0, 1, 2, 3, 4, 5, 6, 7};
CAN.sendMsgBuf(0x00, 0, 8, stmp); //send out the message 'stmp' to the bus and tell other devices this is a standard frame from 0x00.
```

### 6. Receive a frame

以下函数用于在"receive"节点上接收数据：

```c
CAN.readMsgBuf(unsigned char len, unsigned char buf);
```

在设置了掩码和过滤器的条件下，此函数只能获取满足掩码和过滤器要求的帧。

- **len** 表示数据长度。
- **buf** 是存储数据的位置。

## 入门指南

#### 硬件

本产品不包含 XIAO 模块，因此您需要单独购买 XIAO 模块。在本示例中，我们使用 XIAO ESP32C3 进行演示，但其他版本的 XIAO 模块也可以类似工作。硬件连接很简单 - 只需将 XIAO 模块插入扩展板即可。

请参考下图了解与 XIAO 的连接方式。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_can_bus_board/connect.jpg" alt="pir" width={500} height="auto" /></p>

#### 软件

- **步骤 1.** 从 Github 下载 [CAN Bus Library](https://github.com/limengdu/Arduino_CAN_BUS_MCP2515)。

- **步骤 2.** 参考 [如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库。

- **步骤 3.** 正确下载并安装库后，您可以在 examples 文件夹中找到一个名为 send.ino 的示例程序。该程序是为 D7S 模块设计的。

```cpp
#include <mcp_can.h>
#include <SPI.h>

/* Please modify SPI_CS_PIN to adapt to different baords.

   CANBed V1        - 17
   CANBed M0        - 3
   CAN Bus Shield   - 9
   CANBed 2040      - 9
   CANBed Dual      - 9
   OBD-2G Dev Kit   - 9
   OBD-II GPS Kit   - 9
   Hud Dev Kit      - 9
*/

#define SPI_CS_PIN  D7

MCP_CAN CAN(SPI_CS_PIN);                                    // Set CS pin

void setup()
{
    Serial.begin(115200);
    while(!Serial);
    
    // below code need for OBD-II GPS Dev Kit Atemga32U4 version
    // pinMode(A3, OUTPUT);
    // digitalWrite(A3, HIGH);
    
    // below code need for OBD-II GPS Dev Kit RP2040 version
    // pinMode(12, OUTPUT);
    // digitalWrite(12, HIGH);
    
    while (CAN_OK != CAN.begin(CAN_500KBPS))    // init can bus : baudrate = 500k
    {
        Serial.println("CAN BUS FAIL!");
        delay(100);
    }
    Serial.println("CAN BUS OK!");
}

unsigned char stmp[8] = {0, 1, 2, 3, 4, 5, 6, 7};
void loop()
{
    CAN.sendMsgBuf(0x00, 0, 8, stmp);
    delay(100);                       // send data per 100ms
}

// END FILE
```

- **步骤 4.** 上传演示代码。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

- **步骤 5.** 代码上传成功后，您会注意到 RX 和 TX LED 灯亮起，表示 CAN 总线正在主动传输数据。如果您的 CAN 总线连接到其他设备，这些 LED 将闪烁而不是保持常亮状态。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/xiao_can_bus_board/CAN_DEV_XIAO.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 故障排除

### Q1: XIAO CAN 总线扩展板支持的最大波特率是多少？

扩展板上的 MCP2515 控制器支持的最大波特率是 1 Mbps。请确保您的 CAN 总线网络的波特率设置与此限制兼容。

### Q2: 我可以在同一个 CAN 总线网络中使用多个 XIAO CAN 总线扩展板吗？

是的，您可以在同一个 CAN 总线网络中使用多个扩展板。每个扩展板都应该分配一个唯一的节点 ID，以确保正确通信并避免总线上的冲突。

### Q3: 我可以将 XIAO CAN 总线扩展板与其他微控制器或开发板一起使用吗？

XIAO CAN 总线扩展板专门设计用于与 Seeed Studio XIAO 开发板配合使用。但是，通过适当的引脚映射和配置，可能可以将其与支持必要 CAN 总线通信协议的其他微控制器或开发板一起使用。

### Q4: CAN 总线连接的最大电缆长度有什么限制吗？

CAN 总线连接的最大电缆长度取决于波特率、电缆质量和电磁干扰等因素。一般来说，对于较低的波特率，可以支持更长的电缆长度（最多几百米）。但是，对于较高的波特率，建议保持较短的电缆长度（几米内）以维持可靠的通信。

### Q5: 如何排除 CAN 总线通信问题？

如果您遇到 CAN 总线通信问题，可以按照以下步骤进行故障排除：

- 验证 CAN 总线网络的物理连接，确保正确的接线和终端匹配。
- 检查波特率设置，确保连接到 CAN 总线的所有设备上的设置匹配。
- 使用 CAN 总线分析仪或终端软件监控 CAN 总线流量，以识别传输消息中的任何错误或问题。
- 仔细检查程序代码，确保 MCP2515 控制器的正确初始化和配置。
- 确保 XIAO 开发板和 CAN 总线网络的电源供应稳定且在指定电压范围内。
- 如果您有任何其他问题或本常见问题解答部分未涵盖的问题，请随时联系我们的技术支持团队以获得进一步帮助。

## 资源

- **[ZIP]** [XIAO CAN Bus 扩展板 SCH&PCB](https://files.seeedstudio.com/wiki/xiao_can_bus_board/CAN_DEV_XIAO.zip)
- **[PDF]** [数据手册 - MCP2515](https://files.seeedstudio.com/wiki/xiao_can_bus_board/MCP2515-Stand-Alone-CAN-Controller-with-SPI-200018-708845.pdf)
- **[PDF]** [数据手册 - SN65HVD230](https://files.seeedstudio.com/wiki/xiao_can_bus_board/20001667G-1115479.pdf)

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
