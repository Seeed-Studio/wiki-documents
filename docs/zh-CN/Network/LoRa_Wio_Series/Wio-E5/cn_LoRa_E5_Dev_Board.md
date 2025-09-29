---
description: Wio-E5 开发板入门指南。
title: Wio-E5 开发套件
keywords:
  - wio 
image: https://wiki.seeedstudio.com/wio_gps_board/
slug: /cn/LoRa_E5_Dev_Board
last_update:
  date: 01/30/2023
  author: hushuxu
---

<!-- ![](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/202003261_preview-07.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/202003261_preview-07.png" alt="pir" width={600} height="auto" /></p>

<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/LoRa-E5-Dev-Kit-p-4868.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p>  -->

<div style={{textAlign: 'center'}}>
    <a href="https://www.seeedstudio.com/LoRa-E5-Dev-Kit-p-4868.html"><strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong></a>
</div>

> LoRaWAN® 是 LoRa Alliance® 授权使用的商标。
LoRa® 商标是 Semtech Corporation 或其子公司的商标。

Wio-E5 开发套件是一个紧凑的开发工具集，帮助您释放 [Wio-E5 STM32WLE5JC](https://www.seeedstudio.com/LoRa-E5-Wireless-Module-p-4745.html) 的强大性能。它包含一个 Wio-E5 开发板、一个天线（EU868/US915）、一根 USB Type C 数据线和一个 2*AA 3V 电池盒。

Wio-E5 开发板内嵌 Wio-E5 STM32WLE5JC 模块，支持全球频段的 LoRaWAN® 协议。它引出了 Wio-E5 的全部 GPIO，支持各种数据协议和接口，包括 RS-485、Grove、公/母排针等。它是快速测试和快速原型开发您的 LoRa® 物联网项目的完美选择。

Wio-E5 开发板内嵌 [Wio-E5 STM32WLE5JC 模块](https://www.seeedstudio.com/LoRa-E5-Wireless-Module-p-4745.html)，这是世界上首个将 LoRa RF 和 MCU 芯片集成到单个微型芯片中的产品，并通过了 FCC 和 CE 认证。它由 ARM Cortex-M4 内核和 Semtech SX126X LoRa® 芯片驱动，支持全球频段的 LoRaWAN® 和 LoRa® 协议以及 (G)FSK、BPSK、(G)MSK 和 LoRa® 调制方式。

在此了解更多关于 [Wio-E5](https://wiki.seeedstudio.com/cn/LoRa-E5_STM32WLE5JC_Module/) 的信息。

Wio-E5 开发板具有 Wio-E5 的长距离传输能力，在开阔区域传输距离可达 10 公里。板载 Wio-E5 模块的睡眠电流低至 2.1 uA（WOR 模式）。它采用工业标准设计，工作温度范围宽（-40 ℃ ~ 85℃），灵敏度高（-116.5 dBm ~ -136 dBm），在 3.3V 电压下功率输出可达 +20.8dBm。

Wio-E5 开发板还具有丰富的接口。为了充分发挥 Wio-E5 模块的功能，Wio-E5 开发板引出了 Wio-E5 的全部 28 个引脚，并提供了丰富的接口，包括 Grove 连接器、RS-485 端子、公/母排针，让您可以连接不同连接器和数据协议的传感器和模块，节省您的焊接时间。您还可以通过连接装有 2 节 AA 电池的电池盒轻松为开发板供电，在缺乏外部电源时实现临时使用。这是一个用户友好的开发板，便于测试和快速原型开发。

由于 Wio-E5 是一个带有 MCU 的 LoRaWAN® 芯片，使用 Wio-E5 开发板主要有三种方式：

**1：通过 USB 将 Wio-E5 开发板连接到 PC 并通过 AT 命令控制**

开发板内置 USB 转 UART 功能，您只需用 USB Type C 数据线将 Wio-E5 开发板连接到 PC，然后使用串口通信软件发送 AT 命令并从开发板读取数据。

**2：通过 UART 将 Wio-E5 开发板连接到另一个主板并通过 AT 命令控制**

例如，通过 UART 将 Wio-E5 开发板连接到 Seeeduino XIAO 和扩展板，然后通过 Arduino IDE 串口监视器从 Seeeduino XIAO 发送 AT 命令并读取数据。

**3：使用 SDK 开发用户应用程序**

使用 STMicroelectronics 官方提供的 SDK——STM32Cube Programmer，开发您自己的具有 MCU 功能的 LoRa® 开发板。要下载此 SDK 资源，请在下方的学习和文档部分查找资源。

凭借上述所有出色特性，Wio-E5 开发板将是物联网设备开发、测试、原型制作以及智能农业、智能办公和智能工业等长距离、超低功耗物联网场景应用的优秀选择。

如果您对 LoRa® 和 LoRaWAN® 技术不熟悉，请详细查看这篇博客 [LoRapedia](https://www.seeedstudio.com/blog/2020/08/03/lorapedia-an-introduction-of-lora-and-lorawan-technology/)。

## 特性

- 超低功耗和高性能

- 易于测试和快速原型开发

- 全GPIO引出到丰富的接口，包括RS-485、Grove等

- 支持全球LoRaWAN®和LoRa®频率计划

- 长距离传输范围达10公里（开阔区域理想值）

## 硬件概述

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/hardware%20overview/4071615359366_.pic_hd.jpg" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/3011615286741_.pic_hd.jpg" alt="pir" width={600} height="auto" /></p>

## 规格参数

<table class="tg">
<thead>
<tr><th class="tg-6cwf">参数</th><th class="tg-6cwf">规格</th></tr>
</thead>
<tbody>
<tr>
<td class="tg-g9rn">尺寸</td>
<td class="tg-g9rn">Wio-E5开发板：85.6*54mm  包装：200*130*50mm</td>
</tr>
<tr>
<td class="tg-g9rn">供电电压</td>
<td class="tg-g9rn">3-5V（电池）/ 5V（USB Type C）</td>
</tr>
<tr>
<td class="tg-g9rn">输出电压</td>
<td class="tg-g9rn">EN 3V3 / 5V</td>
</tr>
<tr>
<td class="tg-g9rn">输出功率</td>
<td class="tg-g9rn">在3.3V时高达+20.8dBm</td>
</tr>
<tr>
<td class="tg-g9rn">频率</td>
<td class="tg-g9rn">EU868 / US915 / AU915 / AS923 / KR920 / IN865</td>
</tr>
<tr>
<td class="tg-g9rn">协议</td>
<td class="tg-g9rn">LoRaWAN®</td>
</tr>
<tr>
<td class="tg-g9rn">灵敏度</td>
<td class="tg-g9rn">-116.5dBm ~ -136dBm</td>
</tr>
<tr>
<td class="tg-g9rn">接口</td>
<td class="tg-g9rn">USB Type C / JST2.0 / Grove*3（IIC*2/UART*1）/ RS485 / SMA-K / IPEX</td>
</tr>
<tr>
<td class="tg-g9rn">调制方式</td>
<td class="tg-g9rn">LoRa®、(G)FSK、(G)MSK、BPSK</td>
</tr>
<tr>
<td class="tg-g9rn">工作温度</td>
<td class="tg-g9rn">-40℃ ~ 85℃</td>
</tr>
<tr>
<td class="tg-g9rn">电流</td>
<td class="tg-g9rn">LoRa-E5模块睡眠电流低至2.1uA（WOR模式）</td>
</tr>
</tbody>
</table>

<table class="tg">
<thead>
<tr><th class="tg-f2tp" colspan="2">零件清单：</th></tr>
</thead>
<tbody>
<tr>
<td class="tg-uu1j" colspan="2">Wio-E5开发板 *1</td>
</tr>
<tr>
<td class="tg-uu1j" colspan="2">天线（EU868/US915）*1</td>
</tr>
<tr>
<td class="tg-uu1j" colspan="2">USB TypeC（20cm）*1</td>
</tr>
<tr>
<td class="tg-uu1j" colspan="2">2*AA 3V电池盒 *1</td>
</tr>
</tbody>
</table>

## 应用

- Wio-E5 模块简易测试
- 使用 Wio-E5 快速制作 LoRa® 设备原型
- 任何长距离无线通信应用开发
- LoRa® 和 LoRaWAN® 应用学习和研究

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/317990687/image/application.png" alt="pir" width={600} height="auto" /></p>

## 应用说明

**1. 出厂 AT 固件**

Wio-E5 系列内置 AT 命令固件，支持 LoRaWAN® Class A/B/C 协议和广泛的频率计划：EU868/US915/AU915/AS923/KR920/IN865。使用此 AT 命令固件，开发者可以轻松快速地构建原型或应用。

AT 命令固件包含用于 DFU 的引导加载程序和 AT 应用程序。"PB13/SPI_SCK/BOOT" 引脚用于控制 Wio-E5 停留在引导加载程序中或跳转到 AT 应用程序。当 PB13 为高电平时，模块将在复位后跳转到 AT 应用程序，默认波特率为 9600。当 PB13 为低电平时（按下 Wio-E5 开发套件上的"Boot"按钮），模块将停留在引导加载程序中，并以 115200 波特率每秒持续发送"C"字符。

:::note

- 出厂 AT 固件使用 RDP（读保护）级别 1 进行编程，开发者需要首先使用 STM32Cube Programmer 移除 RDP。请注意，将 RDP 回退到级别 0 将导致闪存大容量擦除，出厂 AT 固件无法再次恢复。
- Wio-E5 模块上的"PB13/SPI_SCK/BOOT"引脚只是一个普通的 GPIO，不是 MCU 的"BOOT0"引脚。这个"PB13/SPI_SCK/BOOT"引脚在出厂 AT 固件的引导加载程序中使用，用于决定跳转到 APP 还是停留在引导加载程序中（用于 DFU）。真正的"BOOT0"引脚没有引出到模块，因此用户在开发低功耗应用时需要小心。

:::

**2. 时钟配置**

2.1 HSE

- 32MHz TCXO

- TCXO 电源：PB0-VDD_TCXO

2.2 LSE

- 32.768KHz 晶体振荡器

**3. RF 开关**

**Wio-E5 模块仅通过 RFO_HP 发送：**

- 接收：PA4=1，PA5=0

- 发送（高输出功率，SMPS 模式）：PA4=0，PA5=1

## 入门指南

### AT 命令快速入门

#### 准备工作

- **步骤 1.** 通过 Type-C 线缆将 Wio-E5 开发套件连接到 PC

- **步骤 2.** 打开串口工具（如 Arduino 串口监视器），选择正确的 COM 端口，将波特率设置为 9600，并选择 Both NL & CR

- **步骤 3.** 尝试发送"AT"，您将看到响应。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/4.png" alt="pir" width={600} height="auto" /></p>

#### 基本 AT 命令

- AT+ID // 读取全部，DevAddr（ABP），DevEui（OTAA），AppEui（OTAA）

- AT+ID=DevAddr // 读取 DevAddr

- AT+ID=DevEui // 读取 DevEui

- AT+ID=AppEui // 读取 AppEui

- AT+ID=DevAddr,"devaddr" // 设置新的 DevAddr

- AT+ID=DevEui,"deveui" // 设置新的 DevEui

- AT+ID=AppEui,"appeui" // 设置新的 AppEui

- AT+KEY=APPKEY,"16 bytes length key" // 更改应用会话密钥

- AT+DR=band // 更改频段计划

- AT+DR=SCHEME // 检查当前频段

- AT+CH=NUM, 0-7 // 启用通道 0~7

- AT+MODE="mode" // 选择工作模式：LWOTAA、LWABP 或 TEST

- AT+JOIN // 发送 JOIN 请求

- AT+MSG="Data to send" // 用于发送字符串格式帧，无需服务器确认

- AT+CMSG="Data to send" // 用于发送字符串格式帧，必须由服务器确认

- AT+MSGHEX="xx xx xx xx" // 用于发送十六进制格式帧，无需服务器确认

- AT+CMSGHEX="xx xx xx xx" // 用于发送十六进制格式帧，必须由服务器确认

#### 连接并发送数据到 The Things Network

- **步骤 1.** 访问 [The Things Network](https://www.thethingsnetwork.org) 网站并注册新账户

- **步骤 2.** 登录后，点击您的个人资料并选择 **Console**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/1.png" alt="pir" width={600} height="auto" /></p>

- **步骤 3.** 选择一个集群开始添加设备和网关

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/2.png" alt="pir" width={600} height="auto" /></p>

- **步骤 4.** 点击 **Go to applications**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/4.png" alt="pir" width={600} height="auto" /></p>

- **步骤 5.** 点击 **+ Add application**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/5.png" alt="pir" width={600} height="auto" /></p>

- **步骤 6.** 填写 **Application ID** 并点击 **Create application**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/6.png" alt="pir" width={600} height="auto" /></p>

**注意：** 这里 **Application name** 和 **Description** 不是必填字段。如果 **Application name** 留空，默认将使用与 **Application ID** 相同的名称

以下是新创建的应用程序

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/7.png" alt="pir" width={600} height="auto" /></p>

- **步骤 7.** 点击 **+ Add end device**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/8.png" alt="pir" width={600} height="auto" /></p>

- **步骤 8.** 点击 **Manually**，手动输入注册凭据

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/9.png" alt="pir" width={600} height="auto" /></p>

- **步骤 9.** 根据您的地区选择 **Frequency plan**。同时确保您使用与要连接此设备的网关相同的频率。选择 **MAC V1.0.2** 作为 **LoRaWAN® version**，选择 **PHY V1.0.2 REV B** 作为 **Regional Parameters version**。这些设置是根据 Wio-E5 的 LoraWAN® 协议栈配置的。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/10.png" alt="pir" width={600} height="auto" /></p>

- **步骤 10.** 当 Wio-E5 模块仍可通过串口控制台访问时，在串口监视器上发送以下 AT 命令：

  - `AT+ID=DevEui` 获取您的设备 EUI
  - `AT+ID=AppEui` 获取您的应用 EUI
  - `AT+KEY=APPKEY,"2B7E151628AED2A6ABF7158809CF4F3C"` 设置应用密钥

输出将如下所示：

```
Tx: AT+ID=DevEui
Rx: +ID: DevEui, 2C:F7:F1:20:24:90:03:63
Tx: AT+ID=AppEui
Rx: +ID: AppEui, 80:00:00:00:00:00:00:07
Tx: AT+KEY=APPKEY,"2B7E151628AED2A6ABF7158809CF4F3C"
Rx: +KEY: APPKEY 2B7E151628AED2A6ABF7158809CF4F3C
```

- **步骤 11.** 复制并粘贴上述信息到 **DevEUI**、**AppEUI** 和 **AppKey** 字段中。当我们填写 **DevEUI** 时，**End device ID** 字段将自动填充。最后点击 **Register end device**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/12.png" alt="pir" width={600} height="auto" /></p>

- **步骤 12.** 在 TTN 控制台注册您的 LoRaWAN® 网关。请参考[此处](https://wiki.seeedstudio.com/cn/The-Things-Indoor-Gateway/#step-2-gateway-registration-on-ttn-console)显示的说明

- **步骤 13.** 输入以下 AT 命令连接到 TTN

```
// If you are using US915
AT+DR=US915
AT+CH=NUM,8-15

// If you are using EU868
AT+DR=EU868
AT+CH=NUM,0-2

AT+MODE=LWOTAA
AT+JOIN
```
串行监视器上的输出将如下所示：

```
Tx: AT+DR=US915
Rx: +DR: US915
Tx: AT+CH=NUM,8-15
Rx: +CH: NUM, 8-15

Tx: AT+MODE=LWOTAA
Rx: +MODE: LWOTAA

Tx: AT+JOIN
Rx: +JOIN: Start
+JOIN: NORMAL
+JOIN: Network joined
+JOIN: NetID 000013 DevAddr 26:01:5F:66
+JOIN: Done
```

如果您在串口控制台看到 **+JOIN: Network joined**，这意味着您的设备已成功连接到 TTN！

您也可以在 **End devices** 页面检查您的设备状态

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/13.png" alt="pir" width={600} height="auto" /></p>

- **步骤 14.** 输入以下 AT 命令向 TTN 发送数据

```
// send string "HELLO" to TTN 
Tx: AT+MSG=HELLO
Rx: +MSG: Start
+MSG: FPENDING
+MSG: RXWIN2, RSSI -112, SNR -1.0
+MSG: Done
// send hex "00 11 22 33 44" 
Tx: AT+MSGHEX="00 11 22 33 44"
Rx: +MSGHEX: Start
+MSGHEX: Done
```

有关 AT 命令的更多信息，请参考 [Wio-E5 AT 命令规范](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf)

### 使用 STM32Cube MCU 包进行开发

本节适用于 Wio-E5 开发套件，旨在使用 STM32WL 系列的 STM32Cube MCU 包（SDK）构建多个应用程序。

**注意：** 我们现在已经更新了库以支持 v1.1.0，这是 STM32WL 系列 STM32Cube MCU 包的最新版本。

:::note
请先阅读[擦除出厂 AT 固件](https://wiki.seeedstudio.com/cn/LoRa_E5_Dev_Board/#application-notes)部分，因为我们需要在使用 SDK 编程之前擦除出厂 AT 固件。擦除出厂 AT 固件后，它无法恢复。
:::

#### 准备工作

软件：

- [STM32CubeIDE](https://my.st.com/content/my_st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-ides/stm32cubeide.html)：用于编译和调试

- [STM32CubeProgrammer](https://my.st.com/content/my_st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-programmers/stm32cubeprog.license=1614563305396.product=STM32CubePrg-W64.version=2.6.0.html)：用于对 STM32 设备进行编程

硬件：

- 连接到 LoRaWAN® 网络服务器的 LoRaWAN® 网关（例如 TTN）

- 一根 USB Type-C 数据线和一个 ST-LINK。将 Type-C 数据线连接到板子的 Type-C 端口以供电和串行通信。将 ST-LINK 连接到 SWD 引脚，如下所示

![connection](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/connection.png)

#### GPIO 配置概述

- 由于 Wio-E5 系列的硬件设计与 NUCLEO-WL55JC（ST 官方的 STM32WL55JC 开发板）略有不同，开发者需要重新配置一些 GPIO，以使 SDK 示例适配 Wio-E5 系列。我们已经重新配置了 GPIO，但我们认为有必要指出差异。

|SDK 示例标签|NUCLEO-WL55JC 的 GPIO|Wio-E5 开发套件的 GPIO|
|---------|---------------------|------------------------------------------|
|RF_CTRL1|PC4|PA4|
|RF_CTRL2|PC5|PA5|
|RF_CTRL3|PC3|None|
|BUT1|PA0|PB13 (Boot Button)|
|BUT2|PA1|None|
|BUT3|PC6|None|
|LED1|PB15|None|
|LED2|PB9|PB5|
|LED3|PB11|None|
|DBG1|PB12|PA0 (D0 Button)|
|DBG2|PB13|PB10|
|DBG3|PB14|PB3|
|DBG4|PB10|PB4|
|Usart|Usart2(PA2/PA3)|Usart1(PB6/PB7)|

### 应用

现在我们将探索 Wio-E5 开发套件与 STM32WL 系列 STM32Cube MCU 包（SDK）的几个应用。

#### LoRaWAN® 终端节点

此应用将 Wio-E5 开发套件连接到 TTN（The Things Network），并在与 LoRaWAN® 网关连接后发送数据。

- **步骤 1.** 点击[这里](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian)访问 **Seeed-Studio/LoRaWan-E5-Node** 仓库并将其下载为 ZIP 文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **步骤 2.** 解压 ZIP 文件并导航到 `LoRaWan-E5-Node > Projects > Applications > LoRaWAN > LoRaWAN_End_Node > STM32CubeIDE`

- **步骤 3.** 双击 **.project** 文件

  **注意：** 对于 MAC，应采用以下选项之一来打开项目：

  - **1.** 导航到 `Wio-E5-Node > Projects > Applications > LoRaWAN > LoRaWAN_End_Node`。双击文件 "LoRaWAN_End_Node.ioc"。

  - **2.** 使用"从文件系统或存档导入项目"，如下图所示。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/MAC.png" alt="pir" width={600} height="auto" /></p>

- **步骤 4.** 右键单击项目并点击 **Properties**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/properties-open-2.jpg" alt="pir" width={600} height="auto" /></p>

- **步骤 5.** 导航到 `C/C++ Build > Settings > MCU Post build outputs`，勾选 **Convert to Intel Hex file (-O ihex)** 并点击 **Apply and Close**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/set-hex.png" alt="pir" width={600} height="auto" /></p>

- **步骤 6.** 点击 **Build 'Debug'**，应该能够无错误编译

![build](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/build.png)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/lorawan-debug-2.png" alt="pir" width={600} height="auto" /></p>

现在我们将修改我们的 **Device EUI**、**Application EUI**、**Application KEY** 和 **LoRawan Region**

- **步骤 7.** 请按照[这里](https://wiki.seeedstudio.com/cn/LoRa_E5_mini/#13-connect-and-send-data-to-the-things-network)的指南设置您的 TTN 应用程序，获取您的 **Application EUI** 并将其复制到 `LoRaWAN/App/se-identity.h` 中的宏定义 `LORAWAN_JOIN_EUI`，例如，这里的 Application EUI 是 `80 00 00 00 00 00 00 0x07`：

```cpp
// LoRaWAN/App/se-identity.h

/*!
 * App/Join server IEEE EUI (big endian)
 */
#define LORAWAN_JOIN_EUI                                   { 0x80, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x07 }
```

- **步骤 8.** 此外，您可以通过在 `LoRaWAN/App/se-identity.h` 中设置宏定义 `LORAWAN_DEVICE_EUI` 和 `LORAWAN_NWK_KEY` 来修改您的 **Device EUI** 和 **Application Key**。确保 `LORAWAN_DEVICE_EUI` 和 `LORAWAN_NWK_KEY` 与 TTN 控制台中的 `Device EUI` 和 `App Key` 相同。

```cpp
// LoRaWAN/App/se-identity.h

/*!
 * end-device IEEE EUI (big endian)
 */
#define LORAWAN_DEVICE_EUI                                 { 0x2C, 0xF7, 0xF1, 0x20, 0x24, 0x90, 0x03, 0x63 }

/*!
 * Network root key
 */
#define LORAWAN_NWK_KEY                                    2B,7E,15,16,28,AE,D2,A6,AB,F7,15,88,09,CF,4F,3C
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/se-identity.png" alt="pir" width={600} height="auto" /></p>

- **步骤 9.** 默认的 LoRaWAN® 区域是 `EU868`，您可以通过在 `LoRaWAN/App/lora_app.h` 中设置宏定义 `ACTIVE_REGION` 来修改它

```c
// LoRaWAN/App/lora_app.h

/* LoraWAN application configuration (Mw is configured by lorawan_conf.h) */
/* Available: LORAMAC_REGION_AS923, LORAMAC_REGION_AU915, LORAMAC_REGION_EU868, LORAMAC_REGION_KR920, LORAMAC_REGION_IN865, LORAMAC_REGION_US915, LORAMAC_REGION_RU864 */
#define ACTIVE_REGION                               LORAMAC_REGION_US915
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/lora-app-h.png" alt="pir" width={600} height="auto" /></p>

- **步骤 10.** 完成上述修改后，**重新构建**示例并烧录到您的 Wio-E5。打开 `STM32CubeProgrammer`，将 ST-LINK 连接到您的 PC，按住设备的 `RESET 按钮`，然后点击 `Connect` 并释放 `RESET 按钮`：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program1.png" alt="pir" width={600} height="auto" /></p>

- **步骤 11.** 确保读出保护为 `AA`，如果显示为 `BB`，请选择 `AA` 并点击 `Apply`：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program2.png" alt="pir" width={600} height="auto" /></p>

- **步骤 12.** 现在，转到 `Erasing & Programming` 页面，选择您的 hex 文件路径（例如：`C:\Users\user\Downloads\LoRaWan-E5-Node\Projects\Applications\LoRaWAN\LoRaWAN_End_Node\STM32CubeIDE\Debug\LoRaWAN_End_Node.hex`），按照下图选择编程选项，然后点击 `Start Programming`！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program3.png" alt="pir" width={600} height="auto" /></p>
编程完成后，您将看到 **Download verified successfully** 消息。

- **步骤 13.** 如果您的 LoRaWAN® 网关和 TTN 已设置完成，Wio-E5 将在重置后成功加入！每 30 秒会向 TTN 发送一个确认 LoRaWAN® 数据包。如果加入成功，串口监视器（这里使用 Arduino 串口监视器）将打印以下日志：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/TTN-joined.png" alt="pir" width={600} height="auto" /></p>
- 恭喜！现在您已经将 Wio-E5 连接到 LoRaWAN® 网络！您现在可以继续开发更多令人兴奋的 LoRaWAN® 终端节点应用程序！

**注意：** Wio-E5 仅支持高功率输出模式，因此您不能在 `radio_board_if.h` 中使用这些宏定义：

```
#define RBI_CONF_RFO     RBI_CONF_RFO_LP_HP
// or
#define RBI_CONF_RFO     RBI_CONF_RFO_LP
```

尽管 **RBI_CONF_RFO** 在 `radio_board_if.h` 中被定义为 **RBI_CONF_RFO_LP_HP**，但它不会被使用，因为定义了 **USE_BSP_DRIVER** 并且 **BSP_RADIO_GetTxConfig()** 函数返回 **RADIO_CONF_RFO_HP**

#### FreeRTOS LoRaWAN®

此应用程序还将 Wio-E5 开发套件与 TTN（The Things Network）连接，并在与 LoRaWAN® 网关连接后发送数据。之前的 LoRaWAN® 终端节点应用程序与此 FreeRTOS LoRaWAN® 应用程序之间的区别在于，前者运行在裸机上，而后者运行在 FreeRTOS 下。

- **步骤 1.** 点击[这里](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian)访问 **Seeed-Studio/LoRaWan-E5-Node** 仓库并将其下载为 ZIP 文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **步骤 2.** 解压 ZIP 文件并导航到 `LoRaWan-E5-Node > Projects > Applications > FreeRTOS > FreeRTOS_LoRaWAN`

- **步骤 3.** 双击 **.project** 文件

- **步骤 4.** 参考之前 **LoRaWAN® 终端节点**应用程序的**步骤 4 - 步骤 13**来将 Wio-E5 开发套件与 TTN 连接！

#### FreeRTOS LoRaWAN® AT

此应用程序还将 Wio-E5 开发套件与 TTN（The Things Network）连接，并在与 LoRaWAN® 网关连接后发送数据。之前的 FreeRTOS LoRaWAN® 应用程序与此应用程序之间的区别在于，您可以使用 AT 命令。

- **步骤 1.** 点击[这里](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian)访问 **Seeed-Studio/LoRaWan-E5-Node** 仓库并将其下载为 ZIP 文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **步骤 2.** 解压 ZIP 文件并导航到 `LoRaWan-E5-Node > Projects > Applications > FreeRTOS > FreeRTOS_LoRaWAN_AT`

- **步骤 3.** 双击 **.project** 文件

- **步骤 4.** 参考之前 **LoRaWAN® 终端节点**应用程序的**步骤 4 - 步骤 12**

- **步骤 5.** 打开串口监视器，如 **Arduino Serial Monitor**，您将看到以下输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-at-serial-open-2.png" alt="pir" width={600} height="auto" /></p>

- **步骤 6.** 输入 **AT?** 并按 **ENTER** 查看所有可用的 AT 命令

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/at-commands.png" alt="pir" width={600} height="auto" /></p>

- **步骤 7.** 如果您仍想更改 **Device EUI**、**Application EUI**、**Application KEY** 和 **LoRawan Region**，您可以使用 AT 命令进行更改。但是，这些参数已经在此示例的 **se-identity.h** 和 **lora_app.h** 中设置

- **步骤 8.** 输入 **AT+JOIN=1**，一旦加入成功，您将看到以下输出！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-at-join.png" alt="pir" width={600} height="auto" /></p>

**注意：** 这里应该使用 **AT+JOIN=(Mode)** 格式。**Mode** 对应 **0 表示 ABP** 或 **1 表示 OTAA**

#### FreeRTOS LowPower

此应用程序将在 Wio-E5 开发套件上启用低功耗模式。一旦刷入应用程序，开发板将正常消耗功率 2 秒，然后进入低功耗模式 2 秒，如此循环。

- **步骤 1.** 点击[这里](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian)访问 **Seeed-Studio/LoRaWan-E5-Node** 仓库并将其下载为 ZIP 文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **步骤 2.** 解压 ZIP 文件并导航到 `LoRaWan-E5-Node > Projects > Applications > FreeRTOS > FreeRTOS_LowPower`

- **步骤 3.** 双击 **.project** 文件

- **步骤 4.** 右键点击项目并点击 **Properties**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-properties.jpg" alt="pir" width={600} height="auto" /></p>

- **步骤 5.** 导航到 `C/C++ Build > Settings > MCU Post build outputs`，勾选 **Convert to Intel Hex file (-O ihex)** 并点击 **Apply and Close**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-hex.jpg" alt="pir" width={600} height="auto" /></p>

- **步骤 6.** 点击 **Build 'Debug'**，应该能够无错误编译

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-build.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-success.png" alt="pir" width={600} height="auto" /></p>

- **步骤 7.** 打开 `STM32CubeProgrammer`，将 ST-LINK 连接到您的 PC，按住设备的 `RESET Button`，然后点击 `Connect` 并释放 `RESET Button`：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program1.png" alt="pir" width={600} height="auto" /></p>

- **步骤 8.** 确保读出保护为 `AA`，如果显示为 `BB`，选择 `AA` 并点击 `Apply`：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program2.png" alt="pir" width={600} height="auto" /></p>

- **步骤 9.** 现在，转到 `Erasing & Programming` 页面，选择您的 hex 文件路径（例如：`C:\Users\user\Downloads\LoRaWan-E5-Node\Projects\Applications\FreeRTOS\FreeRTOS_LowPower\Debug\FreeRTOS_LowPower.hex`），按照下图选择编程选项，然后点击 `Start Programming`！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program3.png" alt="pir" width={600} height="auto" /></p>

您将看到消息 **Download verified successfully**，一旦编程完成。

- **步骤 10.** 通过连接功率计将 Wio-E5 开发套件连接到 PC。您会注意到板上的红色 LED 每秒闪烁一次，板子在正常和低功耗状态之间切换（功率计上的电流在低功耗状态下降低 1 秒，然后在正常工作状态下回升 1 秒）

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/low-power-demo-2.gif" alt="pir" width={600} height="auto" /></p>

#### 低功耗

此应用程序还将在 Wio-E5 开发套件上启用低功耗模式。之前的 FreeRTOS 低功耗应用程序与此低功耗应用程序之间的区别在于，前者在 FreeRTOS 下运行，而后者在裸机上运行。

- **步骤 1.** 点击[这里](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian)访问 **Seeed-Studio/LoRaWan-E5-Node** 仓库的 **qian** 分支并将其下载为 ZIP 文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/lora-e5-qian-github.png" alt="pir" width={600} height="auto" /></p>

- **步骤 2.** 解压 ZIP 文件并导航到 `LoRaWan-E5-Node > Projects > Applications > LowPower`

- **步骤 3.** 双击 **.project** 文件

- **步骤 4.** 参考之前 **FreeRTOS 低功耗** 应用程序的 **步骤 4 - 步骤 10**，最终您将在功率计上看到相同的输出！

## 资源

Wio-E5 开发板数据手册：

- <p><a href="http://files.seeedstudio.com/products/113990934/LoRa-E5%20Dev%20Board%20v1.0.brd">Wio-E5 开发板 v1.0.brd</a></p>

- <p><a href="https://files.seeedstudio.com/products/113990934/LoRa-E5%20Dev%20Board%20v1.0.pdf">Wio-E5 开发板 v1.0.pdf</a></p>

- <p><a href="http://files.seeedstudio.com/products/113990934/LoRa-E5%20Dev%20Board%20v1.0.sch">Wio-E5 开发板 v1.0.sch</a></p>

Wio-E5 数据手册：

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20module%20datasheet_V1.1.pdf">Wio-E5 数据手册和规格</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf">Wio-E5 AT 命令规范</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/STM32WLE5JC%20Datasheet.pdf">STM32WLE5JC 数据手册</a></p>

Wio-E5 认证：

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20Certification%20CE-VOC-RED.pdf">Wio-E5-HF 认证 CE-VOC-RED</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DSS.pdf">Wio-E5-HF FCC 认证 -DSS</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DTS.pdf">Wio-E5-HF FCC 认证 -DTS</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/Telec.zip">Wio-E5-HF TELEC 认证</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20IC%20ID.pdf">Wio-E5-HF IC 认证</a></p>

相关 SDK：

- <p><a href="https://my.st.com/content/my_st_com/en/products/embedded-software/mcu-mpu-embedded-software/stm32-embedded-software/stm32cube-mcu-mpu-packages/stm32cubewl.license=1608693595598.product=STM32CubeWL.version=1.0.0.html#overview" target="_blank">STM32WL 系列 STM32Cube MCU 包</a></p>

## 技术支持与产品讨论

请将任何技术问题提交到我们的[论坛](http://forum.seeedstudio.com/)。

感谢您选择我们的产品！我们在这里为您提供不同的支持，确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
