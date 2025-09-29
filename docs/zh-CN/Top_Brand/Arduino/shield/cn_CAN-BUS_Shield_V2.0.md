---
description: CAN-BUS_Shield_V2.0
title: CAN-BUS Shield V2.0
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/CAN-BUS_Shield_V2.0
last_update:
  date: 01/10/2023  
  author: Eico 

no_comments: false # for Disqus

---

<div align="center"><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/shiyitu1.png" /></div>

**CAN-BUS** 是一种常见的工业总线，因其传输距离长、通信速度适中和高可靠性而广泛应用。它通常出现在现代机床上，例如汽车诊断总线。

这款 CAN-BUS Shield 采用带有 SPI 接口的 **MCP2515** CAN 总线控制器和 **MCP2551** CAN 收发器，为您的 Arduino/Seeeduino 提供 CAN-BUS 功能。添加 **OBD-II** 转换线缆并导入 OBD-II 库后，您就可以构建车载诊断设备或数据记录器了。

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/vehicle-hacking-tools" target="_blank"><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/CAN_Car_Hacking.png" /></a></p>
</div>

**版本**

本文档适用于以下版本的产品：

<table align="center">
  <tbody>
  <tr>
    <td><h3>版本</h3></td>
    <td><h3>发布日期</h3></td>
    <td><h3>如何购买</h3></td>
  </tr>
  <tr>
    <td><h4>CAN BUS Shield V1.0</h4></td>
    <td><h4>2012年10月14日</h4></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png" alt="pir" width={200} height="auto" /></p></td>
  </tr>
  <tr>
    <td><h4>CAN BUS Shield V1.1</h4></td>
    <td><h4>2013年8月10日</h4></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png" alt="pir" width={200} height="auto" /></p></td>
  </tr>  
  <tr>
    <td><h4>CAN BUS Shield V1.2</h4></td>
    <td><h4>2015年1月5日</h4></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png" alt="pir" width={200} height="auto" /></p></td>
  </tr>
  <tr>
    <td><h4>CAN BUS Shield V2.0</h4></td>
    <td><h4>2017年8月1日</h4></td>
    <td><div class="document"><a href="https://www.seeedstudio.com/CAN-BUS-Shield-V2-p-2921.html" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" alt="" width={200} height="auto"/></a>
</div></td>
  </tr>
  </tbody></table>

**替代选择**

如果您的项目空间有限，并且除了 CAN-BUS 之外不需要其他功能，这里有一个与 Arduino 兼容的 Grove CAN-BUS 模块，更加紧凑且成本效益更高，请点击[这里](https://www.seeedstudio.com/Serial-CAN-BUS-Module-based-on-MCP2551-and-MCP2515-p-2924.html)访问其页面。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Serial-CAN-BUS-Module-based-on-MCP2551-and-MCP2515-p-2924.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/CAN-BUS-Shield-V2.0/img/canbus_arduino.png" /></a></p>

**如果我想将此扩展板连接到我的汽车怎么办**

如果您想读取数据或控制您的汽车，我们为您提供了一根 OBD>DB9 线缆，[这根线缆](https://www.seeedstudio.com/DB9-to-OBD2-Cable-With-Switch-p-2872.html)使连接 OBD 接口和 DB9 接口变得更加容易。这根线缆也适用于任何具有 OBD 接口的设备。添加电源开关会发出令人满意的咔嗒声。

 <p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/DB9-to-OBD2-Cable-With-Switch-p-2872.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/obd_cable.jpg" /></a></p>

**USB-CAN 分析仪**

如果您想要一个 CAN 总线分析仪来调试您的 CAN 总线，推荐使用这款 [USB-CAN 分析仪](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html)。

 <p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/usb_can.jpg" /></a></p>

## 特性

- 实现 CAN V2.0B 速度高达 **1 Mb/s**
- SPI 接口速度高达 **10 MHz**
- 标准（**11 位**）和扩展（**29 位**）数据和远程帧
- 两个接收缓冲区，具有优先级消息存储
- 工业标准 DB-9 连接器
- LED 指示灯

:::note
CAN BUS Shield 与 Arduino UNO (ATmega328)、Arduino Mega (ATmega1280/2560) 以及 Arduino Leonardo (ATmega32U4) 兼容良好。
:::

## 硬件概述

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/hardware_overview_1.png" alt="pir" width={600} height="auto" /></p>

1. **DB9 接口** - 通过 DBG-OBD 电缆连接到 OBDII 接口。
2. **V_OBD** - 从 OBDII 接口（从 DB9）获取电源
3. **LED 指示灯**：
    - **PWR**：电源
    - **TX**：数据发送时闪烁
    - **RX**：有数据接收时闪烁
    - **INT**：数据中断
4. **端子** - CAN_H 和 CAN_L
5. **Arduino UNO 引脚输出**
6. **串行 Grove 连接器**
7. **I2C Grove 连接器**
8. **ICSP 引脚**
9. **IC** - MCP2551，高速 CAN 收发器（[数据手册](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/Mcp2551.pdf)）
10. **IC** - MCP2515，带 SPI 接口的独立 CAN 控制器（[数据手册](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/MCP2515.pdf)）

:::warning
当您在一个网络中使用超过两个 CAN Bus Shield 时，您应该考虑阻抗问题。
您应该用刀切断 PCB 上的 P1，或者直接移除 PCB 上的 R3。
:::

**引脚映射**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/PINMAP.png" alt="pir" width={600} height="auto" /></p>

:::note
FREE 引脚可用于其他用途。
:::

**DB9&OBDii 接口**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/OBD.png" alt="pir" width={600} height="auto" /></p>

**CS 引脚**

:::caution
当我们生产新批次的 CAN-BUS Shield V2 时，背面焊盘的导线被嵌入到 PCB 内部，虽然焊盘之间的导线现在在外部不可见，但内部仍然连接，如果您想更改焊盘的接线，您仍然需要先切断 PCB 中的接线。
:::

V1.2 的 SPI_CS 引脚默认连接到 **D9**。如果您想更改为 **D10**，请按照以下说明操作。

- 步骤1：查看 PCBA 的背面，您会发现一个名为 CS 的焊盘。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/zhanshitu1.png" alt="pir" width={600} height="auto" /></p>

- 步骤2：切断焊盘9和中间焊盘之间的导线。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/zhanshitu2.png" alt="pir" width={600} height="auto" /></p>

- 步骤3：焊接中间焊盘和焊盘10。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/zhanshitu3.png" alt="pir" width={600} height="auto" /></p>

:::warning
使用美工刀时要小心，很容易伤到自己或 PCBA。
:::

**SPI 引脚**

SPI 引脚（SCK、MISO、MOSI）默认路由到 ICSP 引脚。但对于某些板子，SPI 引脚位于 D11~D13。如果发生这种情况，您需要对 PCBA 进行一些更改。查看 PCBA 的背面，有三个焊盘，MOSI、MISO 和 SCK，它们默认连接到 A。如果需要，您可以将它们更改为 B。

:::note
对于 Arduino UNO、Arduino Mega、Arduino Leonardo 和任何其他基于 AVR 的 Arduino 板，默认设置工作良好。
:::

:::warning
当您要更改 SPI 引脚时要小心，很容易伤到自己或 PCBA。
:::

## 开始使用

这里有一个简单的示例来展示 CAN-BUS Shield 是如何工作的。在这个示例中，我们需要 2 块 CAN-BUS Shield 以及 Arduino 或 Seeeduino。

:::note
此示例是在 [Arduino IDE 版本 1.6.9](https://www.arduino.cc/download_handler.php?f=/arduino-1.6.9-windows.zip) 下构建的。
:::

**步骤1：我们需要什么**

<table align="center">
  <tbody>
  <tr>
    <td><h3>名称</h3></td>
    <td><h3>功能</h3></td>
    <td><h3>数量</h3></td>
    <td><h3>链接</h3></td>
  </tr>
  <tr>
    <td><h4>CAN-BUS Shield</h4></td>
    <td><h4>CAN 总线通信</h4></td>
    <td><h4>2</h4></td>
    <td><a href="https://www.seeedstudio.com/CAN-BUS-Shield-V2-p-2921.html" target="_blank"><span>链接</span></a></td>
  </tr>
  <tr>
    <td><h4>Seeeduino V4.2</h4></td>
    <td><h4>控制器</h4></td>
    <td><h4>2</h4></td>
    <td><a href="https://www.seeedstudio.com/item_detail.html?p_id=2517" target="_blank"><span>链接</span></a></td>
  </tr>  
  </tbody></table>

**步骤2：硬件连接**

将每个 CAN-BUS Shield 插入 Seeeduino V4.2，并通过 2 根跳线将 2 个 CAN-BUS Shield 连接在一起。如下图所示。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/connection.png" alt="pir" width={600} height="auto" /></p>

:::note
CAN_H 连接到 CAN_H，CAN_L 连接到 CAN_L
:::

**步骤3：软件**

请按照[如何安装 arduino 库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library/)的步骤来安装 CAN BUS shield 库。

- 在这里下载 [**Seeed_Arduino_CAN**](https://github.com/Seeed-Studio/Seeed_Arduino_CAN) Arduino 库。

下载完成后将库安装到您的 Arduino IDE 中。

其中一个节点（一个节点指 Seeeduino + CAN_BUS Shield）作为主机，另一个作为从机。主机将不断向从机发送数据。

:::note
在代码上传之前，每个节点都可以作为主机。
:::

打开 **send** 示例（**File > Examples > Seeed_Arduino_CAN > send**）并上传到**主机**。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN-BUS-Shield-V2.0/img/example.png" alt="pir" width={600} height="auto" /></p>

或者将以下代码复制到 Arduino IDE 并上传：

```cpp
#include <SPI.h>
#include "mcp2515_can.h"

/*SAMD core*/
#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
    #define SERIAL SerialUSB
#else
    #define SERIAL Serial
#endif

const int SPI_CS_PIN = 9;
mcp2515_can CAN(SPI_CS_PIN); // Set CS pin

void setup() {
    SERIAL.begin(115200);
    while(!Serial){};

    while (CAN_OK != CAN.begin(CAN_500KBPS)) {             // init can bus : baudrate = 500k
        SERIAL.println("CAN BUS Shield init fail");
        SERIAL.println(" Init CAN BUS Shield again");
        delay(100);
    }
    SERIAL.println("CAN BUS Shield init ok!");
}

unsigned char stmp[8] = {0, 0, 0, 0, 0, 0, 0, 0};
void loop() {
    // send data:  id = 0x00, standrad frame, data len = 8, stmp: data buf
    stmp[7] = stmp[7] + 1;
    if (stmp[7] == 100) {
        stmp[7] = 0;
        stmp[6] = stmp[6] + 1;

        if (stmp[6] == 100) {
            stmp[6] = 0;
            stmp[5] = stmp[6] + 1;
        }
    }

    CAN.sendMsgBuf(0x00, 0, 8, stmp);
    delay(100);                       // send data per 100ms
    SERIAL.println("CAN BUS sendMsgBuf ok!");
}
```

**步骤4：查看结果**

打开 Arduino IDE 的串口监视器（**从机**），您将获得从主机发送的数据。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/serial_monitor.png" alt="pir" width={600} height="auto" /></p>

## APIs

### 1.设置波特率

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

### 2.设置接收掩码和过滤器

控制器芯片上有 **2** 个接收掩码寄存器和 **5** 个过滤器寄存器，确保您能从目标设备获取数据。它们在由众多节点组成的大型网络中特别有用。

我们为您提供了两个函数来使用这些掩码和过滤器寄存器。它们是：

**掩码：**

```cpp
init_Mask(unsigned char num, unsigned char ext, unsigned char ulData);
```

**过滤器：**

```cpp
init_Filt(unsigned char num, unsigned char ext, unsigned char ulData);
```

- **num** 表示使用哪个寄存器。掩码可以填 0 或 1，过滤器可以填 0 到 5。
- **ext** 表示帧的状态。0 表示这是标准帧的掩码或过滤器。1 表示这是扩展帧的掩码或过滤器。
- **ulData** 表示掩码或过滤器的内容。

### 3.检查接收

MCP2515 可以在轮询模式下运行，软件检查是否接收到帧，或使用额外的引脚来信号表示已接收到帧或传输完成。

使用以下函数轮询接收到的帧。

```cpp
INT8U MCP_CAN::checkReceive(void);
```

如果有帧到达，函数将返回 1，如果没有任何到达，则返回 0。

### 4.获取 CAN ID

当有数据到达时，您可以使用以下函数获取"发送"节点的 CAN ID。

```cpp
INT32U MCP_CAN::getCanId(void)
```

### 5.发送数据

```cpp
CAN.sendMsgBuf(INT8U id, INT8U ext, INT8U len, data_buf);
```

这是一个向总线发送数据的函数。其中：

- **id** 表示数据来自哪里。
- **ext** 表示帧的状态。'0' 表示标准帧。'1' 表示扩展帧。
- **len** 表示此帧的长度。
- **data_buf** 是此消息的内容。

例如，在 'send' 示例中，我们有：

```cpp
unsigned char stmp[8] = {0, 1, 2, 3, 4, 5, 6, 7};
CAN.sendMsgBuf(0x00, 0, 8, stmp); //向总线发送消息 'stmp' 并告诉其他设备这是来自 0x00 的标准帧。
```

### 6.接收数据

以下函数用于在 'receive' 节点上接收数据：

```cpp
CAN.readMsgBuf(unsigned char len, unsigned char buf);
```

在已设置掩码和过滤器的条件下。此函数只能获取满足掩码和过滤器要求的帧。

- **len** 表示数据长度。
- **buf** 是您存储数据的地方。

### 7.init_CS

对于您在一个 Arduino 上使用两个 CAN-BUS 扩展板非常有用。我们提供 CS_CAN 引脚供您选择。如果您不知道如何使用 CS_CAN 引脚，您可以转到 [CS_CAN pin](https://wiki.seeedstudio.com/cn/CAN-BUS_Shield_V2.0/#cs_can-pin) 学习。

```cpp
void MCP_CAN::init_CS(byte _CS)
```

- **_CS** 表示您选择的引脚。(9 或 10)

## 生成新的波特率

我们已经提供了许多常用的波特率，如下所示：

```cpp
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
```

但您可能仍然找不到您想要的速率。这里我们提供一个软件来帮助您计算所需的波特率。

点击[这里](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/CAN_Baudrate_CalcV1.3.zip)下载软件，它是中文版的，但没关系，使用起来很简单。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/CAN_BUS_Shield_SetBaud.jpg" alt="pir" width={200} height="auto" /></p>

打开软件，您需要做的就是设置您想要的波特率，然后进行一些简单的设置，然后点击**计算**。

然后您将获得一些数据：cfg1、cfg2 和 cfg3。

您需要向库中添加一些代码。

打开 **mcp_can_dfs.h**，您需要在大约第272行添加以下代码：

```cpp
#define MCP_16MHz_xxxkBPS_CFG1 (cfg1)    // xxx 是您需要的波特率
#define MCP_16MHz_xxxkBPS_CFG2 (cfg2)
#define MCP_16MHz_xxxkBPS_CFG3 (cfg2)
```

然后让我们转到大约第390行，添加以下代码：

```cpp
#define CAN_xxxKBPS NUM       // xxx 是您需要的波特率，NUM 是一个数字，您需要获得一个与其他速率不同的数字。
```

打开 **mcp_can.cpp**，转到函数 **mcp2515_configRate**（大约在第190行），然后添加以下代码：

```cpp
case (CAN_xxxKBPS):
    cfg1 = MCP_16MHz_xxxkBPS_CFG1;
    cfg2 = MCP_16MHz_xxxkBPS_CFG2;
    cfg3 = MCP_16MHz_xxxkBPS_CFG3;
    break;
```

然后您就可以使用您需要的波特率了。当您使用新的速率时，请在github上给我一个拉取请求，这样我就可以将其添加到库中来帮助其他人。

## 项目

如果您想用CAN-BUS扩展板制作一些很棒的项目，这里有一些项目供参考。

### 大众CAN BUS游戏

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/project1.JPG" alt="pir" width={600} height="auto" /></p>
曾经想过在PC上用真实的仪表板玩汽车/卡车模拟器吗？我也是！我正在尝试通过Arduino Uno和Seeed CAN Bus扩展板通过CAN总线控制大众Polo 6R仪表板。受到Silas Parker的启发。感谢Sepp和Is0-Mick的大力支持！

<p style={{textAlign: 'center'}}><a href="https://community.seeedstudio.com/project_detail.html?id=291" target="_blank"><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/Wiki_makeitnow_logo.png" /></a></p>

### 破解您的车辆CAN-BUS

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/project2.jpg" alt="pir" width={600} height="auto" /></p>
现代车辆都配备了CAN-BUS控制器区域网络，而不是从汽车中的各种设备到电池之间运行数百万根电线，它使用了一个更聪明的系统。

所有电子功能都连接到TIPM（完全集成电源模块），例如锁门的电磁阀/继电器或摇窗的小电机等。

从每个节点（即控制您的车窗或电动门锁的开关面板）它在CAN上广播消息。当TIPM检测到有效消息时，它会相应地做出反应，如锁门、开灯等。

<p style={{textAlign: 'center'}}><a href="https://www.instructables.com/id/Hack-your-vehicle-CAN-BUS-with-Arduino-and-Seeed-C/" target="_blank"><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/Wiki_makeitnow_logo.png" /></a></p>

## 常见问题

------
**问题1：我无法从其他CAN设备获取数据。**

- 检查连接是否正确
- 检查波特率设置是否正确

**问题2：串口监视器打印Init Fail。**

- 检查CS引脚设置是否与代码匹配。对于CAN Bus Shield V1.1/1.2，CS引脚连接到D9，其他版本连接到D10。

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/CAN-BUS-Shield-V2.0/res/CAN-BUS%20Shield%20%20v2.0.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

-----

- **[PDF]**[CAN-BUS Shield V2.0 原理图](https://files.seeedstudio.com/wiki/CAN-BUS-Shield-V2.0/res/CAN-BUS%20Shield%20%20v2.0.pdf)
- **[Eagle]**[CAN-BUS Shield V2.0 原理图和PCB](https://files.seeedstudio.com/wiki/CAN-BUS-Shield-V2.0/res/CAN-BUS%20Shield%20%20v2.0.rar)
- **[库文件]**[CAN-BUS Shield Arduino库](https://github.com/Seeed-Studio/CAN_BUS_Shield)
- **[数据手册]**[MCP2515 数据手册](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/MCP2515.pdf)
- **[数据手册]**[MCP2551 数据手册](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/Mcp2551.pdf)
- **[演示]**[OBD演示程序](https://github.com/Seeed-Studio/CANBUS_SHIELD_OBD_RECIPLE)
- **[工具]**[MCP2515 波特率工具](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/CAN_Baudrate_CalcV1.3.zip)
- **[工具]**[USB-CAN 分析仪](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html)
- **[线缆]**[DB9 转 OBD2 线缆](https://www.seeedstudio.com/DB9-to-OBD2-Cable-With-Switch-p-2872.html)
- **[图纸]**[CAN BUS Shield v2.0 PDF图纸](https://files.seeedstudio.com/wiki/CAN-BUS-Shield-V2.0/res/CAN-BUS%C2%A0SHIELD%C2%A0V2.0.pdf)
- **[图纸]**[CAN BUS Shield v2.0 DXF图纸](https://files.seeedstudio.com/wiki/CAN-BUS-Shield-V2.0/res/CAN-BUS%C2%A0SHIELD%C2%A0V2.0.dxf.zip)

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