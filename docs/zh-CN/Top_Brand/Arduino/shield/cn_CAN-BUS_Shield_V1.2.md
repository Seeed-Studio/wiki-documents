---
description: CAN-BUS Shield V1.2
title: CAN-BUS Shield V1.2
keywords:
- Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/CAN-BUS_Shield_V1.2
last_update:
  date: 2/16/2023
  author: jianjing Huang
---

<!-- ---
name: CAN-BUS Shield V1.2
category: Shield
bzurl: https://www.seeedstudio.com/CAN-BUS-Shield-V1.2-p-2256.html
oldwikiname: CAN-BUS_Shield_V1.2
prodimagename: Can_bus_shield_all.jpg
surveyurl: https://www.research.net/r/can_bus_shield
sku: 113030021
--- -->

![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/Can_bus_shield_all.jpg)

**CAN-BUS** 是一种常见的工业总线，因其传输距离长、通信速度中等和高可靠性而广泛应用。它通常出现在现代机床上，例如汽车诊断总线。

这款 CAN-BUS Shield 采用带有 SPI 接口的 **MCP2515** CAN 总线控制器和 **MCP2551** CAN 收发器，为您的 Arduino/Seeeduino 提供 CAN-BUS 功能。添加 **OBD-II** 转换线缆并导入 OBD-II 库后，您就可以构建车载诊断设备或数据记录器了。

**版本**

本文档适用于以下版本的产品：

|版本|发布日期|购买方式|
|--------|-----------|-----------|
|CAN BUS Shield V1.0 |2012年10月14日|![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png)|
|CAN BUS Shield V1.1 |2013年8月10日|![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png)|
|CAN BUS Shield V1.2|2015年1月5日|![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png)|
| CAN BUS Shield V2.0 | 2017年8月1日    |<a href="https://www.seeedstudio.com/CAN-BUS-Shield-V2-p-2921.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width={200} height={38} border={0} /></a>|

**CAN BUS Shield V1.2 的新特性**

- PCBA 背面的焊盘
- 将终端电阻更改为 120 欧姆

**替代选择**

如果您的项目空间有限，并且除了 CAN-BUS 之外不需要其他功能，这里有一个与 Arduino 兼容的 Grove CAN-BUS 模块，更加紧凑且成本效益更高，请点击[这里](https://www.seeedstudio.com/Serial-CAN-BUS-Module-based-on-MCP2551-and-MCP2515-p-2924.html)访问其页面。

[![](https://files.seeedstudio.com/wiki/CAN-BUS-Shield-V2.0/img/canbus_arduino.png)](https://www.seeedstudio.com/Serial-CAN-BUS-Module-based-on-MCP2551-and-MCP2515-p-2924.html)

**如果我想将此扩展板连接到我的汽车怎么办**

如果您想读取数据或控制您的汽车，我们为您提供了 OBD>DB9 线缆，[这根线缆](https://www.seeedstudio.com/DB9-to-OBD2-Cable-With-Switch-p-2872.html)使连接 OBD 连接器和 DB9 连接器变得更容易。这根线缆也适用于任何具有 OBD 连接器的设备。添加电源开关会发出令人满意的咔嗒声。

[![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/obd_cable.jpg)](https://www.seeedstudio.com/DB9-to-OBD2-Cable-With-Switch-p-2872.html)

**USB-CAN 分析仪**

如果您需要一个 CAN 总线分析仪来调试您的 CAN 总线，推荐使用这款 [USB-CAN 分析仪](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html)。

[![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/usb_can.jpg)](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html)

## 功能特性

-----

- 实现 CAN V2.0B 速度高达 **1 Mb/s**
- SPI 接口速度高达 **10 MHz**
- 标准（**11 位**）和扩展（**29 位**）数据和远程帧
- 两个接收缓冲区，具有优先级消息存储
- 工业标准 DB-9 连接器
- LED 指示灯

:::note
CAN BUS Shield 可与 Arduino UNO (ATmega328)、Arduino Mega (ATmega1280/2560) 以及 Arduino Leonardo (ATmega32U4) 良好配合使用。
:::

## 硬件概述

-----

![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/hardware_overview_1.png)

1. **DB9 接口** - 通过 DBG-OBD 电缆连接到 OBDII 接口。
2. **V_OBD** - 从 OBDII 接口（从 DB9）获取电源
3. **LED 指示灯**：
    - **PWR**：电源
    - **TX**：数据发送时闪烁
    - **RX**：接收数据时闪烁
    - **INT**：数据中断
4. **端子** - CAN_H 和 CAN_L
5. **Arduino UNO 引脚输出**
6. **串行 Grove 连接器**
7. **I2C Grove 连接器**
8. **ICSP 引脚**
9. **IC** - MCP2551，高速 CAN 收发器（[数据手册](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/Mcp2551.pdf)）
10. **IC** - MCP2515，带 SPI 接口的独立 CAN 控制器（[数据手册](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/MCP2515.pdf)）

:::caution
当您在一个网络中使用超过两个 CAN Bus Shield 时，您应该考虑阻抗问题。
您应该用刀切断 PCB 上的 P1，或者直接移除 PCB 上的 R3。
:::

**引脚映射**

![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/PINMAP.png)

:::note
    FREE 引脚可用于其他用途。
:::

**DB9 和 OBDii 接口**

![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/OBD.png)

**CS 引脚**

V1.2 的 SPI_CS 引脚默认连接到 **D9**。如果您想更改为 **D10**，请按照以下说明操作。

- 步骤1：查看 PCBA 的背面，您会发现一个名为 CS 的焊盘。

![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/hardware_overview_pins_setting.png)

- 步骤2：切断焊盘9和中间焊盘之间的导线。

![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/cut%20this%20wire%20with%20box%20cutter.png)

- 步骤3：焊接中间焊盘和焊盘10。

![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/sodder%20the%20middle%20pad%20and%20pad%2010.png)

:::caution
使用美工刀时要小心，很容易伤到自己或 PCBA。
:::

**SPI 引脚**

SPI 引脚（SCK、MISO、MOSI）默认路由到 ICSP 引脚。但对于某些开发板，SPI 引脚位于 D11~D13。如果出现这种情况，您需要对 PCBA 进行一些更改。查看 PCBA 的背面，有三个焊盘，MOSI、MISO 和 SCK，它们默认连接到 A。如果需要，您可以将它们更改为 B。

:::note
对于 Arduino UNO、Arduino Mega、Arduino Leonardo 和任何其他基于 AVR 的 Arduino 开发板，默认设置工作良好。
:::

:::caution
当您要更改 SPI 引脚时要小心，很容易伤到自己或 PCBA。
:::

## 入门指南

-----
这里有一个简单的示例来展示 CAN-BUS Shield 的工作原理。在这个示例中，我们需要 2 块 CAN-BUS Shield 以及 Arduino 或 Seeeduino。

:::note
此示例是在 [Arduino IDE 版本 1.6.9](https://www.arduino.cc/download_handler.php?f=/arduino-1.6.9-windows.zip) 下构建的。
:::

**步骤1：我们需要什么**

|名称|功能|数量|链接|
|----|--------|---|----|
|CAN-BUS Shield|CAN 总线通信 | 2 | [链接](https://www.seeedstudio.com/depot/CANBUS-Shield-V12-p-2256.html) |
|Seeeduino V4.2|控制器|2|[链接](https://www.seeedstudio.com/item_detail.html?p_id=2517)|
|跳线|连接|2|[链接](https://www.seeedstudio.com/item_detail.html?p_id=234)|

**步骤2：硬件连接**

将每个 CAN-BUS Shield 插入 Seeeduino V4.2，并通过 2 根跳线将 2 个 CAN-BUS Shield 连接在一起。如下图所示。

![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/connection.png)

:::note
    CAN_H 连接到 CAN_H，CAN_L 连接到 CAN_L
:::

**步骤3：软件**

请按照[如何安装 Arduino 库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library/)的步骤来安装 CAN BUS shield 库。

点击下面的按钮下载库。

[![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/download_library.png)](https://github.com/Seeed-Studio/CAN_BUS_Shield)

下载完成后将库安装到您的 Arduino IDE。

其中一个节点（一个节点指 Seeeduino + CAN_BUS Shield）作为主机，另一个作为从机。主机将不断向从机发送数据。

:::note
在代码上传之前，每个节点都可以作为主机。
:::

打开 **send** 示例（**File > Examples > CAN_BUS_Shield-master > send**）并上传到**主机**。
![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/send%20example.png)
打开 **receive_check** 示例（**File > Examples > CAN_BUS_Shield-master > receive_check**）并上传到**从机**。
![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/receive%20check%20example.png)

**步骤4：查看结果**

打开 Arduino IDE 的串行监视器（**从机**），您将获得从主机发送的数据。

![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/serial_monitor.png)

## APIs

-----

### 1. 设置波特率

此函数用于初始化 CAN 总线系统的波特率。

可用的波特率列表如下：

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

### 2. 设置接收掩码和过滤器

控制器芯片上有 **2** 个接收掩码寄存器和 **5** 个过滤器寄存器，确保您能从目标设备获取数据。它们在由众多节点组成的大型网络中特别有用。

我们为您提供了两个函数来使用这些掩码和过滤器寄存器。它们是：

**掩码：**

 init_Mask(unsigned char num, unsigned char ext, unsigned char ulData);

**过滤器：**

 init_Filt(unsigned char num, unsigned char ext, unsigned char ulData);

- **num** 表示使用哪个寄存器。掩码可以填写 0 或 1，过滤器可以填写 0 到 5。
- **ext** 表示帧的状态。0 表示这是标准帧的掩码或过滤器。1 表示这是扩展帧的掩码或过滤器。
- **ulData** 表示掩码或过滤器的内容。

### 3. 检查接收
MCP2515 可以在轮询模式下运行，软件检查是否接收到帧，或使用额外的引脚来信号表示已接收到帧或传输完成。

使用以下函数轮询接收到的帧。

    INT8U MCP_CAN::checkReceive(void);

如果有帧到达，该函数将返回 1，如果没有任何内容到达，则返回 0。

### 4. 获取 CAN ID
当有数据到达时，您可以使用以下函数获取"发送"节点的 CAN ID。

    INT32U MCP_CAN::getCanId(void)

### 5. 发送数据

    CAN.sendMsgBuf(INT8U id, INT8U ext, INT8U len, data_buf);

这是一个向总线发送数据的函数。其中：

- **id** 表示数据来自哪里。
- **ext** 表示帧的状态。'0' 表示标准帧。'1' 表示扩展帧。
- **len** 表示此帧的长度。
- **data_buf** 是此消息的内容。

例如，在 'send' 示例中，我们有：

    unsigned char stmp[8] = {0, 1, 2, 3, 4, 5, 6, 7};
    CAN.sendMsgBuf(0x00, 0, 8, stmp); //向总线发送消息 'stmp' 并告诉其他设备这是来自 0x00 的标准帧。

### 6. 接收数据

以下函数用于在 'receive' 节点上接收数据：

    CAN.readMsgBuf(unsigned char len, unsigned char buf);
在已设置掩码和过滤器的条件下。此函数只能获取满足掩码和过滤器要求的帧。

- **len** 表示数据长度。
- **buf** 是您存储数据的位置。

## 生成新的波特率

我们已经提供了许多常用的波特率，如下所示：

 #define CAN_5KBPS    1
 #define CAN_10KBPS   2
 #define CAN_20KBPS   3
 #define CAN_25KBPS   4

#define CAN_31KBPS   5
 #define CAN_33KBPS   6
 #define CAN_40KBPS   7
 #define CAN_50KBPS   8
 #define CAN_80KBPS   9
 #define CAN_83KBPS   10
 #define CAN_95KBPS   11
 #define CAN_100KBPS  12
 #define CAN_125KBPS  13
 #define CAN_200KBPS  14
 #define CAN_250KBPS  15
 #define CAN_500KBPS  16
 #define CAN_666KBPS  17
 #define CAN_1000KBPS 18

但是您可能仍然找不到您想要的速率。这里我们提供一个软件来帮助您计算您需要的波特率。

点击[这里](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/CAN_Baudrate_CalcV1.3.zip)下载软件，它是中文的，但没关系，很容易使用。

![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/CAN_BUS_Shield_SetBaud.jpg)

:::note
此软件仅支持Windows系统。如果您无法打开它，请随时联系loovee@seeed.cc获取支持。
:::

打开软件，您需要做的是设置您想要的波特率，然后进行一些简单的设置，然后点击**计算**。

然后您将获得一些数据，cfg1、cfg2和cfg3。

您需要向库中添加一些代码。

打开**mcp_can_dfs.h**，您需要在大约第272行添加以下代码：

 #define MCP_16MHz_xxxkBPS_CFG1 (cfg1)    // xxx是您需要的波特率
 #define MCP_16MHz_xxxkBPS_CFG2 (cfg2)
 #define MCP_16MHz_xxxkBPS_CFG3 (cfg2)

然后让我们转到大约第390行，添加以下代码：

 #define CAN_xxxKBPS NUM       // xxx是您需要的波特率，NUM是一个数字，您需要获得与其他速率不同的数字。

打开**mcp_can.cpp**，转到函数**mcp2515_configRate**（大约在第190行），然后添加以下代码：

 case (CAN_xxxKBPS):
     cfg1 = MCP_16MHz_xxxkBPS_CFG1;
     cfg2 = MCP_16MHz_xxxkBPS_CFG2;
     cfg3 = MCP_16MHz_xxxkBPS_CFG3;
     break;

然后您就可以使用您需要的波特率了。当您使用新的速率时，请在github上给我一个pull request，这样我就可以将其添加到库中来帮助其他人。

## 项目

-----

如果您想用CAN-BUS扩展板制作一些很棒的项目，这里有一些项目供参考。

### 大众CAN BUS游戏

![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/project1.JPG)

曾经想在PC上用真实的仪表板玩汽车/卡车模拟器吗？我也是！我正在尝试通过Arduino Uno和Seeed CAN Bus扩展板通过CAN Bus控制VW Polo 6R仪表板。受到Silas Parker的启发。感谢Sepp和Is0-Mick的大力支持！

[![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/Wiki_makeitnow_logo.png)](https://community.seeedstudio.com/project_detail.html?id=291)

### 破解您的车辆CAN-BUS

![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/project2.jpg)

现代车辆都配备了CAN-BUS控制器区域网络，而不是从汽车中的各种设备到电池之间有数百万根电线来回运行，它使用了一个更聪明的系统。

所有电子功能都连接到TIPM（完全集成电源模块），例如用于锁门的电磁阀/继电器或用于摇窗的小电机等。

从每个节点（即控制您的车窗或电动门锁的开关面板）它在CAN上广播消息。当TIPM检测到有效消息时，它将相应地做出反应，如锁门、开灯等。

[![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/Wiki_makeitnow_logo.png)](https://www.instructables.com/id/Hack-your-vehicle-CAN-BUS-with-Arduino-and-Seeed-C/)

## 常见问题

------
**问题1：我无法从其他CAN设备获取数据。**

- 检查连接是否正确
- 检查波特率设置是否正确

**问题2：串口监视器打印Init Fail。**

- 检查CS引脚设置是否与代码匹配。对于CAN Bus Shield V1.1/1.2，CS引脚连接到D9，其他版本连接到D10。

**问题3：如果我有其他问题，在哪里可以找到技术支持。**

- 您可以在[Seeed论坛](https://forum.seeedstudio.com/)发布问题。

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/CAN-BUS_Shield_v1.2_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

-----

- **【PDF】**[CAN-BUS Shield V1.2 原理图](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/CAN-BUS_Shield_v1.2.pdf)
- **【Eagle】**[CAN-BUS Shield V1.2 原理图](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/CAN-BUS_Shield_v1.2_sch_pcb.zip)
- **【库文件】**[CAN-BUS Shield Arduino库](https://github.com/Seeed-Studio/CAN_BUS_Shield)
- **【数据手册】**[MCP2515 数据手册](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/MCP2515.pdf)
- **【数据手册】**[MCP2551 数据手册](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/Mcp2551.pdf)
- **【演示】**[OBD演示](https://github.com/Seeed-Studio/CANBUS_SHIELD_OBD_RECIPLE)
- **【工具】**[MCP2515 波特率工具](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/CAN_Baudrate_CalcV1.3.zip)
- **【工具】**[USB-CAN 分析仪](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html)
- **【线缆】**[DB9 到 OBD2 线缆](https://www.seeedstudio.com/DB9-to-OBD2-Cable-With-Switch-p-2872.html)

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