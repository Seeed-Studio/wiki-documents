---
description: SeeedStudio BeagleBone® Green Eco 入门指南
title: Seeed Studio BeagleBone® Green Eco
keywords:
- Beagle_Bone_Green_Eco
image: https://files.seeedstudio.com/wiki/BeagleBone_Green_Eco/img/Seeed-Studio-BeagleBoneR-Green-Eco.webp
slug: /cn/getting_started_with_seeedstudio_beaglebone_green_eco
last_update:
  date: 9/18/2025
  author: Atom Yang
---

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Eco/img/1-102111198-Seeed-Studio-BeagleBoneR-Green-Eco.jpg" /></div>

**Seeed Studio BeagleBone® Green Eco** 是一款工业级开源单板计算机，与 BeagleBoard.org® 基金会共同开发，采用强大的 **TI AM3358 SoC** 供电。这款"Eco"版本专为高效率而设计，集成了先进的 TI 电源管理芯片（TPS6521403），确保优化的能耗。它配备了丰富的 16GB 板载 eMMC 存储和千兆以太网端口，可满足高速网络连接的苛刻应用需求。为了实现无缝硬件原型设计，它集成了两个标志性的 Grove 连接器，提供对 Seeed 广泛的 Grove 传感器和模块生态系统的直接、免焊接访问。

在 10 秒内启动 Linux，仅需一根 USB 线缆即可在 5 分钟内开始开发。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SeeedStudio-BeagleBone-Green-Eco-p-6540.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 特性

**特性 1：强大的核心与实时处理**

- 集成 TI AM3358 1GHz ARM® Cortex-A8 处理器，配备 NEON™ SIMD 协处理器以实现加速处理。它还包括双核可编程实时单元（PRU-ICSS），用于确定性、低延迟控制，这对工业自动化和机器人技术至关重要。

**特性 2：环保电源管理**

- 采用先进的 TI TPS6521403 PMIC，具有 PFM 模式和动态电压调节等功能。这显著优化了功耗，使其非常适合对能耗敏感和电池供电的应用。

**特性 3：4 倍存储容量与 10 倍网络速度**

- 配备 16GB 板载 eMMC 存储（增加四倍）并升级连接性，采用千兆以太网端口，提供比前代产品高达 10 倍的带宽，实现高速、稳定的网络通信。

**特性 4：丰富的现代连接性**

- 配备升级的高速接口，包括千兆以太网端口和现代 USB Type-C 端口，用于电源和数据传输。为了快速原型设计，它还包括两个内置的 Grove 连接器（I2C 和 UART）Grove - Seeed Studio，可轻松、免焊接地连接到 Seeed Studio 广泛的传感器和执行器生态系统。

**特性 5：开发就绪**

- 预装了 BeagleBoard.org® 基金会指定的 Debian 软件镜像，提供强大且熟悉的 Linux 环境，配备完善的工具和库，简化您的开发过程。

## 规格参数

| 类别   | 项目                  | Seeed Studio BeagleBone® Green Eco                                                                                     | Seeed Studio BeagleBone® Green                                                                 |
|------------|-----------------------|------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| 处理器  | 核心                  | TI AM3358 1GHz ARM® Cortex-A8                                                                                          | TI AM3358 1GHz ARM® Cortex-A8                                                                 |
|            | 加速器          | NEON 浮点单元和 3D 图形加速器                                                                     | NEON 浮点单元和 3D 图形加速器                                            |
| 内存     | RAM                   | 512MB DDR3L, 800MHz                                                                                                    | 512MB DDR3L, 800MHz                                                                           |
|            | 闪存存储         | **16GB eMMC (Kingston EMMC16G-WW28)**                                                                                  | 4GB 8-bit eMMC                                                                                |
|            | EEPROM                | 4KB                                                                                                                    | 4KB                                                                                    |
|            | 外部存储      | microSD 卡槽，支持最大 32GB                                                                                 | microSD 卡槽，支持最大 32GB                                                        |
| 电源      | 电源管理      | **TI TPS6521403 PMIC**                                                                                                     | TI TPS65217C PMIC                                                                             |
|            | 电压调节器     | TI TPS62A01DRL (3.3V Buck 转换器);TI TPS74501PDRV (1.8V Always-On LDO);TI TPS2117DRL (Power Mux)            | TI TL5209DR (3.3V LDO 调节器)                                                              |
|            | 输入电压         | 5V DC (通过 USB Type-C)                                                                                                 | 5V DC (通过 micro USB)                                                                         |
| 接口 | USB                   | 1x USB 2.0 Host Type-A;1x USB 2.0 Type-C (电源和设备通信)                                            | 1x USB client (电源和通信);1x USB host                                                 |
|            | 网络               | **千兆以太网 (10/100/1000Mbps)**                                                                                 | 以太网 (10/100Mbit)                                                                         |
|            | 扩展接头     | 2x 46 针接头                                                                                                      | 2x 46 针接头                                                                             |
|            | Grove                 | 1x I2C, 1x UART2                                                                                                       | 1x I2C, 1x UART2                                                                              |
|            | 按钮               | 1x 复位按钮;1x 用户(启动)按钮                                                                               | 1x 复位按钮;1x 用户(启动)按钮;1x 电源按钮                                  |
|            | 指示灯            | 1x 电源 LED，4x 用户可编程 LED                                                                                | 4x LED (心跳、microSD、CPU、eMMC)                                                       |
| 物理   | 尺寸            | 86.4mm x 53.3mm x 18mm                                                                                                 | 86.4mm x 53.3mm x 18mm                                                                        |
|            | 重量                | 40g                                                                                                                    | 45g                                                                                           |
|            | 工作温度 | **-40 ~ 85℃**                                                                                                              | 0 ~ 75℃                                                                                       |

## 应用场景

- 物联网
- 智能家居
- 工业
- 自动化与过程控制
- 人机界面
- 传感器集线器
- 机器人

## 硬件概述

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Eco/img/Hardware-Overview.png" /></div>

**BeagleBone® Green Eco 功能框图**
BeagleBone® Green Eco 基于德州仪器的 AM335x ARM Cortex-A8 处理器构建，为各种嵌入式应用提供强大的基础。下面是功能框图，展示了构成板卡硬件架构的主要组件和互连。该图显示了 AM335x SoC 如何与内存、存储、外设和各种 I/O 选项进行接口。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Eco/img/Functional-Block-Diagram.png" /></div>

**处理器**
BeagleBone® Green Eco 集成了德州仪器 AM335x 1GHz ARM® Cortex-A8 处理器，在单个 SoC 内结合了计算处理、图形加速和实时控制功能。该架构实现了带有 NEON™ SIMD 引擎和 VFPv3 浮点单元的 ARMv7-A，可高效执行复杂的计算任务，同时保持嵌入式应用的功耗效率。
一个独特的特性是可编程实时单元子系统和工业通信子系统（PRU-ICSS），包含独立于主 ARM 处理器运行的双 32 位 RISC 核心。这些 PRU 能够实现亚微秒响应时间的确定性实时控制和专用工业通信协议的实现。AM335x 通过 TI 的 Processor SDK 和开发环境支持包括 Linux 在内的高级操作系统和实时操作系统。

- AM335x 1GHz ARM® Cortex-A8 处理器，15.0mm x 15.0mm，NFBGA (324)
- NEON™ SIMD 协处理器和 VFPv3 浮点单元，用于加速媒体和信号处理
- PowerVR SGX™ 图形加速器，支持 OpenGL ES 2.0
- 双 32 位 PRU-ICSS，用于实时工业通信和控制
- 支持工业接口，包括 EtherCAT、PROFINET 和 PROFIBUS

**内存和存储**
BeagleBone® Green Eco 包括：

- 1x 512MB (4Gb) DDR3L RAM (Kingston D2516ECMDXGJDI-U)，16 位接口
- 1x 16GB eMMC 板载闪存存储 (Kingston EMMC16G-WW28)，MMC1 8 位接口
- 1x 32Kbit EEPROM (FMD FT24C32A-ELRT)，通过 I2C0 连接
- MicroSD 卡槽，MMC0 4 位接口，用于可扩展存储

**接口和外设**
BeagleBone® Green Eco 支持：

- 千兆以太网连接
- 1x USB 2.0 Type-C 端口，用于供电和通信
- 1x USB 2.0 主机接口，Type-A

**扩展连接器/排针，支持应用专用扩展板**

- 2x 46 针排针
- 1x 6 针 UART0 排针
- 两个 Grove 连接器（一个 I2C 和一个 UART），便于连接到 Grove 传感器和执行器生态系统

**排针定义**

每个数字 I/O 引脚有 8 种不同的模式可供选择，包括 GPIO。
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Eco/img/1.png" /></div>

**65 个可用数字 I/O**

:::note
    在 GPIO 模式下，每个数字 I/O 都可以产生中断。
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Eco/img/2.png" /></div>

**PWM 和定时器**

:::note
最多 8 个数字 I/O 引脚可以配置为脉宽调制器 (PWM)，用于产生控制电机的信号或创建伪模拟电压电平，而不占用额外的 CPU 周期。
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Eco/img/3.png" /></div>

**模拟输入**

:::note
确保不要向模拟输入引脚输入超过 1.8V 的电压。这是一个单 12 位模数转换器，有 8 个通道，其中 7 个在排针上可用。
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Eco/img/4.png" /></div>

**UART**

:::note
有一个专用排针用于访问 UART0 引脚和连接调试线缆。另外五个串行端口引出到扩展排针，但其中一个只有单向引出到排针。
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Eco/img/5.png" /></div>

**I2C**

:::note
第一个 I2C 总线用于读取扩展板上的 EEPROM，不能用于其他数字 I/O 操作而不干扰该功能，但您仍然可以使用它在可用地址上添加其他 I2C 设备。第二个 I2C 总线可供您配置和使用。
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Eco/img/6.png" /></div>

**SPI**

:::note
    为了快速移出数据，您可以考虑使用其中一个 SPI 端口。
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Eco/img/7.png" /></div>

## 入门指南

:::note
本章节在 Win10 下编写。其他操作系统的步骤类似。
:::

**步骤 1. 通过 USB 连接您的 Seeed Studio BeagleBone® Green**

使用提供的 micro USB 线缆将您的 Seeed Studio BeagleBone® Green 连接到计算机。这将为开发板供电并提供开发接口。Seeed Studio BeagleBone® Green 将从板载 2GB 或 4GB eMMC 启动 Linux。

Seeed Studio BeagleBone® Green 将作为闪存驱动器运行，为您提供文档和驱动程序的本地副本。请注意，此接口不能用于使用新镜像重新配置 microSD 卡，但可以用于使用 uEnv.txt 文件更新启动参数。

您将看到 PWR LED 稳定点亮。在 10 秒内，您应该看到其他 LED 以其默认配置闪烁。

- D2 在启动时配置为以心跳模式闪烁
- D3 在启动时配置为在 microSD 卡访问期间点亮
- D4 在启动时配置为在 CPU 活动期间点亮
- D5 在启动时配置为在 eMMC 访问期间点亮

**步骤 2. 安装驱动程序**

为您的操作系统安装驱动程序，以便通过 USB 网络访问您的 Beagle。其他驱动程序为您提供对开发板的串行访问。

|操作系统 | USB 驱动程序 | 备注 |
|---------------------|---------|------------|
|Windows (64-bit) | [64-bit installer](https://beagleboard.org/static/Drivers/Windows/BONE_D64.exe)  | |
|Windows (32-bit) | [32-bit installer](https://beagleboard.org/static/Drivers/Windows/BONE_DRV.exe)||
|Mac OS X|[Network](https://beagleboard.org/static/Drivers/MacOSX/RNDIS/HoRNDIS.pkg) [Serial](https://beagleboard.org/static/Drivers/MacOSX/FTDI/EnergiaFTDIDrivers2.2.18.pkg) | 安装两套驱动程序。|
|Linux|[mkudevrule.sh](https://beagleboard.org/static/Drivers/Linux/FTDI/mkudevrule.sh)|不需要安装驱动程序，但您可能会发现一些 udev 规则很有用。|

:::note
    对于 Windows 系统，请注意：

- Windows 驱动程序认证警告可能会弹出两到三次。点击 "Ignore"、"Install" 或 "Run"
- 要检查您运行的是 32 位还是 64 位 Windows，请参见[此处](https://support.microsoft.com/kb/827218)。
- 在没有最新服务版本的系统上，您可能会遇到错误 (0xc000007b)。在这种情况下，请[安装](https://www.microsoft.com/en-us/download/confirmation.aspx?id=13523)并重试：
- 您可能需要重启 Windows。
- 这些驱动程序已测试可在 Windows 10 及以下版本上工作

:::

:::note
更多 FTDI USB 转串行/JTAG 信息和驱动程序可从 [https://www.ftdichip.com/Drivers/VCP.htm](https://www.ftdichip.com/Drivers/VCP.htm) 获取。
:::

:::note
更多 USB 转虚拟以太网信息和驱动程序可从 [https://www.linux-usb.org/gadget/](https://www.linux-usb.org/gadget/) 和 [https://joshuawise.com/horndis](https://joshuawise.com/horndis) 获取。
:::

**步骤 3. 浏览到您的 Beagle**

使用 Chrome 或 Firefox（Internet Explorer 不支持），浏览到运行在您开发板上的 Web 服务器。它将加载一个演示文稿，向您展示开发板的功能。使用键盘上的箭头键导航演示文稿。

点击 [http://192.168.7.2](http://192.168.7.2) 启动到您的 Seeed Studio BeagleBone® Green。
较旧的软件镜像需要您弹出 BeagleBone® 驱动器以启动网络。使用最新的软件镜像，不再需要该步骤。

[![Click to view larger image](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/launch.png)](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/launch.png)

**步骤 4. Cloud9 IDE**

要开始编辑运行在您开发板上的程序，您可以通过点击使用 Cloud9 IDE

[![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/cloud9.png)](http://192.168.7.2:3000/ide.html)

## 更新到最新软件

您需要将开发板更新到最新软件以保持更好的性能，这里我们将逐步向您展示如何操作。

**步骤 1. 下载最新软件镜像**

首先，您必须在此处下载合适的镜像。

[![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/down_latest_image.png)](https://www.beagleboard.org/distros/beaglebone-black-debian-12-11-2025-08-07-iot-vscode-v6-12-x)

:::note
由于大小需要，此下载可能需要约 30 分钟或更长时间。
:::

您下载的文件将具有 **.img.xz** 扩展名。这是 SD 卡的压缩扇区镜像。

**步骤 2. 安装压缩工具并解压镜像**

下载并安装 [7-zip.](http://www.7-zip.org/download.html)

:::note
    选择适合您系统的版本。
:::

使用 7-zip 解压 SD 卡 **.img 文件**

**步骤 3. 安装 SD 卡编程工具**

下载并安装 [Image Writer for Windows](https://sourceforge.net/projects/win32diskimager/files/latest/download)。确保下载二进制发行版。

**步骤 4. 将镜像写入您的 SD 卡**

您首先需要一个 SD 适配器将您的 microSD 卡连接到计算机。然后使用 Image Write for Windows 软件将解压的镜像写入您的 SD 卡。

![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/win32_disk_image.png)

点击 **Write** 按钮，然后过程开始。

![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/win32_disk_image_process.png)

:::note

- 您可能会看到关于损坏设备的警告。只要您指向您的 SD 卡进行写入，接受此警告是可以的。
- 此时您不应该将 BeagleBone® 连接到计算机。
- 此过程可能需要长达 10 分钟。

:::

**步骤 5. 从 SD 卡启动您的开发板**

将 SD 卡插入您的开发板（首先断电）。然后开发板将从 SD 卡启动。

:::note
如果您不需要将镜像写入板载 eMMC，则不需要阅读本章的最后部分。否则请继续。
:::

如果您希望将镜像写入板载 eMMC，您需要启动到开发板并修改一个文件。

在 **/boot/uEnv.txt** 中：

    ##enable BeagleBone® Black: eMMC Flasher:
    #cmdline=init=/opt/scripts/tools/eMMC/init-eMMC-flasher-v3.sh
更改为：

    ##enable BeagleBone® Black: eMMC Flasher:
    cmdline=init=/opt/scripts/tools/eMMC/init-eMMC-flasher-v3.sh

然后您将发现 4 个用户 LED 如下所示点亮

![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/flashing.gif)

:::note
如果您没有发现上述跟踪灯，请按 RESET 按钮重置开发板。
:::

当刷写完成时，所有 4 个 USRx LED 将会**熄灭**。最新的 Debian 刷写镜像会在完成后自动关闭开发板。这可能需要**10 分钟**。关闭开发板电源，取出 SD 卡并重新上电即可完成。

## Grove for Seeed Studio BeagleBone® Green

Grove 是一个模块化、标准化的连接器原型系统。Grove 采用积木式方法来组装电子设备。与基于跳线或焊接的系统相比，它更容易连接、实验和构建，并简化了学习系统，但不会简化到变得愚蠢的程度。其他一些原型系统将水平降低到积木块。这样学习很有用，但 Grove 系统允许您构建真正的系统。它需要一些学习和专业知识来连接东西。

下面列出了与 Seeed Studio BeagleBone® Green 兼容良好的 Grove 模块。

|SKU        |名称|接口|链接|
|-----------|-----|-----|----------|
|101020054  |Grove - 3 轴数字加速度计(+16g)     | I2C| [链接](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer%28%C2%B116g%29-p-1156.html)|
|101020071  |Grove - 3 轴数字加速度计(+400g)    | I2C| [链接](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer%28%C2%B1400g%29-p-1897.html)|
|101020034  |Grove - 3 轴数字指南针                 | I2C| [链接](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-p-759.html)|
|101020050  |Grove - 3 轴数字陀螺仪                    | Analog| [链接](https://www.seeedstudio.com/Grove-3-Axis-Digital-Gyro-p-750.html)|
|101020081 |Grove - 6 轴加速度计&指南针 v2.0      | I2C| [链接](https://www.seeedstudio.com/Grove-6-Axis-Accelerometer&Compass-v2.0-p-2476.html)|
|101020072 |Grove - 气压传感器(BMP180)              | I2C| [链接](https://www.seeedstudio.com/Grove-Barometer-Sensor-%28BMP180%29-p-1840.html)|
|104030010 |Grove - 蓝色 LED                               | I/O| [链接](https://www.seeedstudio.com/Grove-Blue-LED-p-1139.html)|
|101020003 |Grove - 按钮                                 |I/O| [链接](https://www.seeedstudio.com/Grove-Button-p-766.html)|
|111020000 |Grove - 按钮(P)                             |I/O| [链接](https://www.seeedstudio.com/Grove-Button%28P%29-p-1243.html)|
|107020000 |Grove - 蜂鸣器                                 |I/O| [链接](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)|
|104030006 |Grove - 可链接 RGB LED                     |I2C| [链接](https://www.seeedstudio.com/Grove-Chainable-RGB-LED-p-850.html)|
|101020030 |Grove - 数字光传感器                 |I2C| [链接](https://www.seeedstudio.com/Grove-Digital-Light-Sensor-p-1281.html)|
|103020024 |Grove - 指夹式心率传感器         |I2C| [链接](https://www.seeedstudio.com/Grove-Finger-clip-Heart-Rate-Sensor-p-2425.html)|
|101020082 |Grove - 带外壳指夹式心率传感器 |I2C|[链接](https://www.seeedstudio.com/Grove-Finger-clip-Heart-Rate-Sensor-with-shell-p-2420.html)|
|113020003 |Grove - GPS                         |UART| [链接](https://www.seeedstudio.com/Grove-GPS-p-959.html)|
|104030007 |Grove - 绿色 LED |I/O| [链接](https://www.seeedstudio.com/Grove-Green-LED-p-1144.html)|
|103020013 |Grove - I2C ADC |I2C| [链接](https://wiki.seeedstudio.com/cn/Grove-I2C_ADC/)|
|103020006 |Grove - I2C 集线器 |I2C| [链接](https://www.seeedstudio.com/Grove-I2C-Hub-p-851.html)|
|101020079 |Grove - IMU 10DOF |I2C| [链接](https://www.seeedstudio.com/Grove-IMU-10DOF-p-2386.html)|
|101020080 |Grove - IMU 9DOF v2.0 |I2C| [链接](https://www.seeedstudio.com/Grove-IMU-9DOF-v2.0-p-2400.html)|
|101020040 |Grove - 红外距离中断器 |I/O| [链接](https://www.seeedstudio.com/Grove-IR-Distance-Interrupter-p-1278.html)|
|104030011 |Grove - OLED 显示屏 0.96'' |I2C| [链接](https://www.seeedstudio.com/Grove-OLED-Display-1.12%22-p-824.html)|
|104030008 |Grove - OLED 显示屏 1.12'' |I2C| [链接](https://www.seeedstudio.com/Grove-OLED-Display-0.96%22-p-781.html)|
|104030005 |Grove - 红色 LED |I/O| [链接](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html)|
|103020005 |Grove - 继电器 |I/O| [链接](https://www.seeedstudio.com/Grove-Relay-p-769.html)|
|316010005 |Grove - 舵机 |I/O| [链接](https://www.seeedstudio.com/Grove-Servo-p-1241.html)|
|101020023 |Grove - 声音传感器 |Analog| [链接](https://www.seeedstudio.com/Grove-Sound-Sensor-p-752.html)|
|101020004 |Grove - 开关(P) |I/O| [链接](https://www.seeedstudio.com/Grove-Switch%28P%29-p-1252.html)|
|101020015 |Grove - 温度传感器 |Analog| [链接](https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html)|
|101020019 |Grove - 温湿度传感器 Pro |Analog| [链接](https://www.seeedstudio.com/Grove-Temperature&Humidity-Sensor-Pro-p-838.html)|

## Cape for Seeed Studio BeagleBone® Green

当您开始一个项目时，您将需要一些扩展板。已经有许多适用于 Seeed Studio BeagleBone® Green 的 cape，它们包括 LCD 显示屏、电机驱动器以及 HDMI 扩展等。以下是一些推荐的产品。

|Grove Cape| 电机桥接 Cape|HDMI Cape|
|------------|----------------|----------|
|![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/product1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/product2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/product3.jpg)|
|[立即购买！](https://www.seeedstudio.com/Grove-Cape-for-BeagleBone-Series-p-1718.html)|[立即购买！](https://www.seeedstudio.com/Motor-Bridge-Cape-p-2569.html)|[立即购买！](https://www.seeedstudio.com/SeeedStudio-BeagleBone-Green-HDMI-Cape-p-2570.html)|

|Grove Cape| 5 英寸 LCD|7 英寸 LCD|
|------------|----------------|----------|
|![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/product4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/product5.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/product6.jpg)|
|[立即购买！](https://www.seeedstudio.com/Grove-Base-Cape-for-Beaglebone-v2.0-p-2644.html)|[立即购买！](https://www.seeedstudio.com/5-Inch-BeagleBone-Green-LCD-Cape-with-Resistive-Touch-p-2642.html)|[立即购买！](https://www.seeedstudio.com/7-Inch-BeagleBone-Green-LCD-Cape-with-Resistive-Touch-p-2643.html)|

## 参考资料

有许多参考资料可以帮助您获取有关该开发板的更多信息。

- [BeagleBoard 主页](https://beagleboard.org/)
- [BeagleBoard 入门指南](https://beagleboard.org/getting-started)
- [故障排除](https://beagleboard.org/getting-started#troubleshooting)
- [硬件文档](https://beagleboard.org/getting-started#hardware)
- [BeagleBoard 项目](https://beagleboard.org/project)
- [Seeed Studio BeagleBone® Green Eco CE 认证](https://files.seeedstudio.com/Seeed_Certificate/documents_certificate/102111198-CE.pdf)
- [Seeed Studio BeagleBone® Green Eco FCC 认证](https://files.seeedstudio.com/Seeed_Certificate/documents_certificate/102111198-FCC.pdf)

## 资源

- **[PDF]** [AM335X 数据手册](https://files.seeedstudio.com/wiki/Bazaar_file/102010027/AM335x.pdf)
- **[PDF]** [Seeed Studio BeagleBone Green Eco 原理图](https://files.seeedstudio.com/products/102111198/res/BeagleBone%20Green%20Eco_V1.0_SCH_250814.pdf)
- **[PDF]** [Seeed Studio BeagleBone Green Eco 结构参考](https://files.seeedstudio.com/products/102111198/res/BBG_Eco_Structure_Reference_20251219.pdf)
- **[DXF]** [Seeed Studio BeagleBone Green Eco 结构参考](https://files.seeedstudio.com/products/102111198/res/BBG_Eco_Structure_Reference_20251219.dxf)


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
