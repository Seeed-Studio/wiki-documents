---
description: IoT快速原型开发套件S5D9
title: IoT快速原型开发套件S5D9
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/IoT_Fast_Prototyping_Kit S5D9
last_update:
  date: 1/13/2023
  author: shuxu hu
---

## **重要通知与免责声明**

1. 本文档中关于电路、软件及其他相关信息的描述仅用于说明半导体产品的运行及应用示例。您需自行负责将这些电路、软件及信息整合到您的设备设计中。Renesas Electronics对因使用这些电路、软件或信息而导致您或第三方遭受的任何损失不承担任何责任。

2. Renesas Electronics在准备本文档信息时已尽合理的注意义务，但不保证这些信息没有错误。Renesas Electronics对因本文档中信息的错误或遗漏导致您遭受的任何损害不承担任何责任。

3. Renesas Electronics对因使用Renesas Electronics产品或本文档中描述的技术信息而导致的第三方专利、版权或其他知识产权的侵权行为不承担任何责任。本文档未授予任何专利、版权或其他知识产权的明示、默示或其他形式的许可。

4. 您不得对Renesas Electronics的产品进行任何形式的修改、复制或其他不当使用，无论是全部还是部分。Renesas Electronics对因产品的修改、复制或其他不当使用导致您或第三方遭受的任何损失不承担任何责任。

5. Renesas Electronics的产品根据以下两种质量等级进行分类：“标准”和“高质量”。每种产品的推荐应用取决于其质量等级，具体如下：

    - “标准”：计算机、办公设备、通信设备、测试和测量设备、音频和视频设备、家用电子设备、机床、个人电子设备以及工业机器人等。

    - “高质量”：交通设备（汽车、火车、船舶等）、交通控制系统、防灾系统、防犯罪系统以及安全设备等。

    - Renesas Electronics的产品既不适用于也未授权用于可能直接威胁人类生命或身体伤害的产品或系统（如人工生命支持设备或系统、外科植入物等），或可能导致严重财产损失的产品或系统（如核反应堆控制系统、军事设备等）。在将Renesas Electronics产品用于特定应用之前，您必须检查每种产品的质量等级。您不得将任何Renesas Electronics产品用于其未设计用途的应用。Renesas Electronics对因将其产品用于非设计用途而导致您或第三方遭受的任何损害或损失不承担任何责任。

6. 您应在Renesas Electronics规定的范围内使用本文档中描述的产品，特别是关于最大额定值、工作电源电压范围、运动电源电压范围、散热特性、安装及其他产品特性。Renesas Electronics对因超出规定范围使用其产品而导致的故障或损害不承担任何责任。

7. 尽管Renesas Electronics致力于提高其产品的质量和可靠性，但半导体产品具有特定的特性，例如在某些使用条件下可能发生故障或故障率。进一步来说，Renesas Electronics的产品未设计为抗辐射。请务必实施安全措施以防止因Renesas Electronics产品故障而可能导致的身体伤害、火灾引起的伤害或损害，例如硬件和软件的安全设计，包括但不限于冗余设计、火灾控制和故障预防、老化退化的适当处理或其他适当措施。由于单独评估微计算机软件的安全性非常困难，请评估您制造的最终产品或系统的安全性。

8. 请联系Renesas Electronics销售办公室以了解有关环境问题的详细信息，例如每种产品的环境兼容性。请在遵守所有适用法律法规的情况下使用Renesas Electronics产品，这些法律法规包括但不限于欧盟RoHS指令中关于受控物质的使用或包含的规定。Renesas Electronics对因您未遵守适用法律法规而导致的损害或损失不承担任何责任。

9. Renesas Electronics的产品和技术不得用于或整合到任何制造、使用或销售被任何适用国内或国外法律法规禁止的产品或系统中。您不得将本文档中描述的Renesas Electronics产品或技术用于任何与军事应用或军事使用相关的目的，包括但不限于大规模杀伤性武器的开发。在出口本文档中描述的Renesas Electronics产品或技术时，您应遵守适用的出口管制法律法规，并按照这些法律法规要求的程序操作。

10. 购买或分销瑞萨电子产品的买方或分销商，在将产品分销、处理或以其他方式交付给第三方时，有责任提前通知该第三方本文件中规定的内容和条件。瑞萨电子对因未经授权使用瑞萨电子产品而导致您或第三方遭受的任何损失不承担任何责任。

如果您对本文件中包含的信息或瑞萨电子产品有任何疑问，或有其他咨询，请联系瑞萨电子销售办公室。

## 快速入门指南

![](https://files.seeedstudio.com/wiki/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/img/Quick%20Start%20Guide.jpeg)

- 第四步链接：[www.renesas.com/iotsandbox/S5D9/tutorial](http://www.renesas.com/iotsandbox/S5D9/tutorial)

- 第五步链接：[www.renesas.com/iotsandbox/S5D9/getstarted](http://www.renesas.com/iotsandbox/S5D9/getstarted)

## 1. 概述

S5D9 IoT快速原型开发套件的功能包括以下接口选项：

- RJ45 10/100Mbps以太网 x1
- USB全速 x1
- PMOD x1
- Grove连接器（UART、I2C、GPIO）x2
- 保护型数字输入 x2
- 缓冲数字输出 x2
- RS232收发器 x2
- JTAG连接器 x1

该套件还包括以下板载传感器：

- Bosch BMC 150 六轴传感器
- AMS ENS210环境传感器
- TE Connectivity MS5637-02BA03气压传感器
- Knowles SPU0414HR5H-SB放大SiSonic麦克风

### 1.1 S5D9 MCU板

S5D9 MCU板是IoT快速原型开发套件的核心。它支持快速开发需要有线以太网和USB连接以及PMOD和Grove扩展选项的应用。

该板包括具有过压保护的24V容忍数字输入，适用于嘈杂的工业环境。该板还可以控制两个数字负载，例如由24V供电并消耗最多1A电流的电磁阀。所包含的MOSFET驱动器具有内置的过流和过温保护，确保了可靠的操作。

![](https://files.seeedstudio.com/wiki/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/img/S5D9_MCU_Board.png)

S5D9板集成了瑞萨Synergy微控制器，具有640K KB RAM和2 MB闪存。此外，该板还通过QSPI接口连接了16 MB外部闪存。

该板可以通过工业Molex连接器或USB设备连接器供电。

该板提供多种扩展选项，包括一个PMOD和两个Grove连接器。PMOD接口具有指定跳线，可与3.3V或5V供电模块接口。

Grove连接包括一个UART接口和一个I2C接口。Grove连接器仅支持3.3V模块供电。

该板还包括一个JTAG接口，用于编程和调试。

## 2. S5D9 IoT快速原型开发套件规格

### 2.2.1 电气规格

S5D9快速原型开发套件的规格列于表2.1。

表2.1 电气规格

![](https://files.seeedstudio.com/wiki/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/img/Table%202.1%20Electrical%20Specifications.png)

### 2.2.2 连接图

IoT快速原型开发套件旨在实现各种应用的快速原型开发。图2.1展示了套件中组件的连接，用于运行板上预安装固件的实验室操作或设计新应用并通过JTAG接口下载固件。

图2.1 连接图

![](https://files.seeedstudio.com/wiki/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/img/Connection%20Diagram.png)

## 3. S5D9 MCU 板描述

### 3.1 模块图

S5D9 板的主要功能模块如图 3.1 所示。

![](https://files.seeedstudio.com/wiki/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/img/Figure%203.1.png)

图 3.1 S5D9 板主要功能模块

各个模块如下：

- Synergy MCU，被指定为套件核心的 S5D9 模块。
- 电源管理模块，包括微控制器运行所需的 3V3 LDO 电压调节器。
- SPI 闪存 – S5D9 的闪存通过高速 QSPI 接口连接的外部 32 MB 内存模块进行了扩展。外部闪存可用于存储图形和其他数字资产，或用于就地执行代码（XIP）。
- 用户定义的 LED – 用户定义的 LED 可用于指示固件的当前状态。3 个 LED 具有不同的颜色以便于识别。
- USB 设备接口 – S5D9 MCU 包括一个以全速运行的 USB 接口模块。USB 设备连接器可用于为板供电。
- PMOD 接口 – 板包括一个 12 针 PMOD 接口，可通过跳线配置为在其电源引脚上提供 3.3V 或 5V。此功能扩展了外围模块的范围，无需外部电平转换器或电源。
- Grove 接口 – Grove 连接器与 Seeed Studio 的外围模块系列兼容，这些模块具有非常广泛的传感器和执行器选择。其中一个 Grove 连接器可配置为通过 UART 通信，另一个专用于 I2C 接口。
- JTAG 接口 – 可通过与 Segger 调试探针兼容的 10 针连接器 J20 使用。或者，可以使用 14 针 Tag-Connect 接口探针对设备进行编程和调试。

### 3.2 组件布局

下图标注了 S5D9 MCU 板的主要组件。

![](https://files.seeedstudio.com/wiki/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/img/Block%20Diagram.png)

**图 3.2 S5D9 MCU 板主要组件**

板的核心 MCU 是 Renesas Synergy S5D9 设备。它基于 ARM Cortex-M4F 内核，运行频率为 120 MHz。CPU 具有浮点单元和矢量中断控制单元。MCU 增加了高性能、零等待状态闪存和丰富的外围设备集，使其适用于广泛的应用。

32 MB QSPI 闪存是 Micron N25Q256A13EF840E。它可用于存储 GUI 设计所需的数字资产，甚至可存储可执行代码。

## 4. 电源供应

IoT 快速原型套件需要单一 5V 电源供应源。它可以通过 USB 设备连接器 J9 或 Molex MicroBlade 系列连接器 J8 提供。

Pin# 显示了电源连接器的针脚信息，Function 显示了 USB 连接器的针脚信息。

表 4.1 USB 设备连接器 (J9)

| 针脚 #        | 功能 |
| --- | --- |
| 1 | +5VDC |
| 2 | 数据 - |
| 3 | 数据 + |
| 4 | USB ID |
| 5 | 地线 |

图 4.1 MCU 板中使用的 LDO 调节器。

![](https://files.seeedstudio.com/wiki/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/img/LDO%20regulators%20and%20boost%20converter%20in%20MCU%20board.jpeg)

图 4.1 MCU 板中的 LDO 调节器和升压转换器

## 5. PMOD 和 Grove 接口

S5D9 MCU 板提供一个 PMOD 接口。它可以与需要 UART、I2C 或 SPI 接口的模块进行通信。PMOD 的功能取决于 MCU 的初始化和引脚复用。PMOD 接口的引脚映射如表 5.1 所示。

表 5.1 PMOD 接口

| 引脚编号 | PMOD D |
| --- | --- |
| 1 | SSLB0/CTS9 – P2_5 |
| 2 | MOSI/TXD9 – P2_3 |
| 3 | MISO/RXD9 – P2_2 |
| 4 | RSPCK/SCK9 – P2_4 |
| 5 | GND |
| 6 | J6 定义 3.3/5V |
| 7 | GPIO – P7_8/IRQ11 |
| 8 | GPIO – P2_6/SSLB1_A |
| 9 | GPIO – P2_7/SSLB2_A |
| 10 | GPIO – P8_1 |
| 11 | GND |
| 12 | VCC (3.3V 或 5V) |

PMOD 接口的电源电压可通过 J6 接头选择。每种电压选项的跳线位置如表 5.2 所示。

**表 5.2** **PMOD 电压选择 (J6)**

| 引脚 | 选择的电压 |
| --- | --- |
| 1 - 2 | 3.3V |
| 2 - 3 | 5V |

Grove 接口提供以下通信接口：

- UART 接口 (Grove A)
- I2C 接口 (Grove B)

接口的引脚映射如表 5.3 所示。

**表 5.3** **Grove 接口**

| 引脚 | Grove AUART | Grove BI2C |
| --- | --- | --- |
| 1 | P4_10/RXD0 | P1_0/SCL1 |
| 2 | P4_11/TXD0 | P1_1/SDA1 |
| 3 | 3.3V | 3.3V |
| 4 | GND | GND |

图 5.1 和图 5.2 分别展示了 PMOD 和 Grove 接口的原理图。

![](https://files.seeedstudio.com/wiki/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/img/PMOD%20schematic.jpeg)

图 5.1 PMOD 原理图

![](https://files.seeedstudio.com/wiki/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/img/Grove%20connector%20schematic.jpeg)

图 5.2 Grove 接口原理图

## 6. USB 接口

S5D9 IoT 快速原型套件仅提供 USB 设备接口。连接器引脚到芯片的连接如表 6.1 所示。

表 6.1 USB Micro B 型插座 - 设备模式 (J9)

![](https://files.seeedstudio.com/wiki/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/img/Table%206.1%20USB%20Micro%20B%20Type%20Receptacle%20-%20Device%20Mode.png)

图 6.1 描述了 USB 接口的实现：

![](https://files.seeedstudio.com/wiki/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/img/USB%20interface%20implementation.jpeg)

图 6.1 USB 接口实现

## 7. 数字输入和输出

### 7.1 24V 耐压数字输入和输出

S5D9 板包括 24V 耐压数字输入接口，并配备额定电流为 1A 的 MOSFET，适用于驱动电感负载（如电磁阀）。下图展示了与这些接口相关的电路。

图 7.1 数字输入和输出

下表展示了数字输入、输出与用于接口的 MCU 引脚之间的映射关系。

![](https://files.seeedstudio.com/wiki/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/img/Digital%20Inputs%20and%20Outputs.jpeg)

表 7.1 24V 耐压数字输入和输出映射

| Molex MicroBlade **接口 J7** | 引脚类型 | MCU 端口 |
| --- | --- | --- |
| 0 | 电源 +5V |   |
| 1 | 地 |   |
| 2 | 红色 |   |
| 3 | 输入 – INP1 | P1_11 |
| 4 | 地 |   |
| 5 | 输入 – INP2 | P4_9 |
| 6 | 地 |   |
| 7 | 电源 +24V |   |
| 8 | 输出 – OUT1 | P0_8 |
| 9 | 电源 +24V |   |
| 10 | 输出 – OUT2 | P0_9 |
| 11 | 电源 +24V |   |
| 12 | 地 |   |

PMOD 和 Grove 接口也提供与 MCU 端口的接口，这些端口可以配置为数字输入或输出。它们支持 5V 耐压，因此在与 5V 供电的外设通信时无需电平转换器。

### 7.2 板载 LED

S5D9 板提供 3 个板载 LED，用于用户定义功能。它们通过单个电阻连接到通用输出引脚。输出的活动状态为 1。当设置时，LED 会点亮。表 7.2 描述了 LED 与驱动它们的端口之间的映射关系。

表 7.2 用户定义 LED 映射

| LED编号 | 颜色 | 标识符 | 设备端口/引脚 |
| --- | --- | --- | --- |
| 0 | 绿色 | LED1 | P1_2 |
| 1 | 黄色 | LED2 | P1_3 |
| 2 | 红色 | LED3 | P1_13 |

![](https://files.seeedstudio.com/wiki/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/img/Mapping%20between%20LEDs%2C%20ports.png)

图 7.2 LED 与端口映射关系

## 8. 双 RS232 接口

S5D9 开发板提供双 RS232 接口收发器。串行接口可通过连接器 J8 使用。连接器到 MCU 端口的引脚映射如下表所示：

表 8.1 双 RS232 接口

| Molex MicroBlade **连接器 J7** | 引脚类型 | MCU 端口 |
| --- | --- | --- |
| 1 | 电源 +5V |   |
| 2 | 地 |   |
| 3 | TX1 | P3_2/TXD2 |
| 4 | RX1 | P3_1/RXD2 |
| 5 | 地 |   |
| 6 | TX2 | P6_13/TXD7 |
| 7 | RX2 | P6_14/RXD7 |
| 8 | 地 |   |

![](https://files.seeedstudio.com/wiki/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/img/Dual%20RS232%20Ports.png)

图 8.1 双 RS232 端口

## 9. JTAG 探针接口

JTAG 探针接口位于连接器 J2 上。连接器型号为 Samtec FTSH-105-01-L-DV-007-K。

表 9.1 JTAG 探针接口 - 连接器 J2

| 引脚# | 方向 | 描述 | 引脚# | 方向 | 描述 |
| --- | --- | --- | --- | --- | --- |
| 1 |   | 电源 3V3 | 2 | 输入 | TMS |
| 3 |   | 地 | 4 | 输入 | TCK |
| 5 |   | 地 | 6 | 输出 | TDO |
| 7 |   | N.C | 8 | 输入 | TDI |
| 9 |   | 地 | 10 | 输入 | RESET |

![](https://files.seeedstudio.com/wiki/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/img/JTAG%20probe%20interface%20connections.png)

图 9.1 JTAG 探针接口连接

另外，JTAG 接口也可通过连接器 J1 使用，该接口设计用于 Tag Connect 14 针探针。探针型号为 Tag Connect XXXXXXX。

表 9.2 JTAG 探针接口 - 连接器 J1

| 引脚# | 类型 | 描述 | 引脚# | 类型 | 描述 |
| --- | --- | --- | --- | --- | --- |
| 1 | 输入 | TCK | 14 | 电源 | 地 |
| 2 | 电源 | 地 | 13 | 输入 | RESET |
| 3 | N.C. |   | 12 | 电源 | 地 |
| 4 | N.C. |   | 11 | 输入 | TDI |
| 5 | 输出 | TDO | 10 | N.C. |   |
| 6 | N.C. |   | 9 | 输入 | TMS |
| 7 | N.C. |   | 8 | 电源 | +3V3 |

图 9.2 JTAG 探针接口连接

**修订**历史

| 修订版 | 日期 | 描述 |
| --- | --- | --- |
| 1.00 | 2017年3月3日 | 初始版本 |

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>