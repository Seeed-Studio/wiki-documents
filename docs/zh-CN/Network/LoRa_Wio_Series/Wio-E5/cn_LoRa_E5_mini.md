---
description: Wio-E5 mini 入门指南。
title: Wio-E5 mini
nointro:
keywords:
  - wio 
  - docusaurus
image: https://wiki.seeedstudio.com/cn/wio_gps_board/
slug: /cn/LoRa_E5_mini
last_update:
  date: 01/30/2023
  author: hushuxu
---
<!-- ![](https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/1/1/113990939_preview-07.png) -->
<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/1/1/113990939_preview-07.png" alt="pir" width={600} height="auto" /></p>

<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/LoRa-E5-mini-STM32WLE5JC-p-4869.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p> -->

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LoRa-E5-mini-STM32WLE5JC-p-4869.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

> LoRaWAN® 是 LoRa Alliance® 授权使用的标志。  
LoRa® 标志是 Semtech Corporation 或其子公司的商标。

Wio-E5 mini 是一款紧凑型开发板，适用于快速测试和构建小型原型，帮助您设计理想的 LoRaWAN® 无线物联网设备，具有远距离传输范围。

Wio-E5 mini 内嵌 [Wio-E5 STM32WLE5JC 模块](https://www.seeedstudio.com/LoRa-E5-Wireless-Module-p-4745.html)，这是全球首款将 LoRa® RF 和 MCU 芯片结合在一个小型芯片中的模块，并通过了 FCC 和 CE 认证。它由 ARM Cortex-M4 内核和 Semtech SX126X LoRa® 芯片驱动，支持全球频段的 LoRaWAN® 协议以及 (G)FSK、BPSK、(G)MSK 和 LoRa® 调制。

了解更多关于 [Wio-E5](https://wiki.seeedstudio.com/cn/LoRa-E5_STM32WLE5JC_Module/) 的信息。

以下是 Wio-E5 和 LoRa® RFM95 芯片的更多对比：

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Wio-E5/2.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Wio-E5/2.png" alt="pir" width={600} height="auto" /></p>

Wio-E5 mini 引出了 Wio-E5 的所有 GPIO，包括 UART、ADC、SPI、IIC 等。它包含 RESET 和 BOOT 按钮，使用方便。支持 LoRaWAN® 协议的 Wio-E5 mini 具有超远距离传输和超低功耗的特点：传输范围可达 10 公里，板载 Wio-E5 模块的休眠电流低至 2.1 uA（WOR 模式）。它采用工业标准设计，工作温度范围为 -40 ℃ ~ 85 ℃，高灵敏度在 -116.5dBm ~ -136 dBm 之间，RF 输出功率在 3.3V 时高达 +20.8 dBm。

除了 Wio-E5 mini，我们还提供其他选择，包括功能更复杂的 Wio-E5 开发板，解锁 Wio-E5 模块的更强性能。它提供更广泛的访问协议和丰富的接口类型。因此，您可以通过 RS-485、Grove 接口和丰富的 GPIO 快速测试和原型化模块。（了解更多关于 Wio-E5 开发板的信息）

由于 Wio-E5 是一款带有 MCU 的 LoRaWAN® 芯片，使用 Wio-E5 mini 有三种主要方式：

**1. 将 Wio-E5 mini 连接到 PC 并通过 AT 指令控制**

板载内置 USB 转 UART 功能，您可以使用 USB Type-C 数据线将 Wio-E5 mini 连接到 PC，并使用串行通信软件发送 AT 指令并读取板上的数据。

**2. 通过 UART 将 Wio-E5 mini 连接到其他主板并通过 AT 指令控制**

例如，将 Wio-E5 mini 通过 UART 连接到 Seeeduino XIAO 和扩展板，并通过 Arduino IDE 串口监视器发送 AT 指令并读取 Seeeduino XIAO 的数据。

**3. 使用 SDK 进行用户应用开发**

通过使用 STM32Cube Programmer（由 STMicroelectronics 官方提供的 SDK），开发具有 MCU 功能的自定义 LoRa® 开发板。要下载此 SDK 资源，请在下方的学习和文档资源中查找。

凭借上述所有卓越功能，Wio-E5 mini 将成为物联网设备开发、测试、原型设计以及在远距离、超低功耗物联网场景（如智能农业、智能办公和智能工业）中的应用的优越选择。

如果您对 LoRa® 和 LoRaWAN® 技术不熟悉，请详细查看这篇博客 [LoRa®pedia](https://www.seeedstudio.com/blog/2020/08/03/lorapedia-an-introduction-of-lora-and-lorawan-technology/)。

## 特性

- Wio-E5 STM32WLE5JC 的所有 GPIO 引脚均引出

- 支持全球 LoRaWAN® 和 LoRa® 频率计划

- 最远传输距离可达 10 公里（理想情况下的开阔区域）

- 小巧紧凑的尺寸，适合快速测试和构建小型原型

- 板载便捷的 RESET 和 BOOT 按钮

## 硬件概览

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/hardware%20overview/4041615358935_.pic_hd.jpg" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/317990687/image/3001615286723_.pic_hd.jpg" alt="pir" width={600} height="auto" /></p>

## 规格参数

<table class="tg">
<thead>
<tr><th class="tg-6cwf">参数</th><th class="tg-6cwf">规格</th></tr>
</thead>
<tbody>
<tr>
<td class="tg-g9rn">尺寸</td>
<td class="tg-g9rn">50*23mm</td>
</tr>
<tr>
<td class="tg-g9rn">电压 - 供电</td>
<td class="tg-g9rn">3.7V - 5V</td>
</tr>
<tr>
<td class="tg-g9rn">功率 - 输出</td>
<td class="tg-g9rn">最高 +20.8 dBm（3.3V）</td>
</tr>
<tr>
<td class="tg-g9rn">工作频率</td>
<td class="tg-g9rn">868/915MHz</td>
</tr>
<tr>
<td class="tg-g9rn">协议</td>
<td class="tg-g9rn">LoRaWAN®</td>
</tr>
<tr>
<td class="tg-g9rn">灵敏度</td>
<td class="tg-g9rn">-116.5 dBm ~ -136 dBm</td>
</tr>
<tr>
<td class="tg-g9rn">接口</td>
<td class="tg-g9rn">USB Type C / 2P-2.54mm 孔 / 1*12P-2.54mm 排针*2 / SMA-K / IPEX</td>
</tr>
<tr>
<td class="tg-g9rn">调制方式</td>
<td class="tg-g9rn">LoRa®, (G)FSK, (G)MSK, BPSK</td>
</tr>
<tr>
<td class="tg-g9rn">工作温度</td>
<td class="tg-g9rn">-40℃ ~ 85℃</td>
</tr>
<tr>
<td class="tg-g9rn">电流</td>
<td class="tg-g9rn">Wio-E5 模块睡眠电流最低可达 2.1uA（WOR 模式）</td>
</tr>
</tbody>
</table>
<div></div>
<div></div>
<div></div>

<table class="tg">
<thead>
<tr><th class="tg-f2tp" colspan="2">部件清单：</th></tr>
</thead>
<tbody>
<tr>
<td class="tg-uu1j" colspan="2">Wio-E5 mini *1</td>
</tr>
<tr>
<td class="tg-uu1j" colspan="2">天线（EU868/US915）*1</td>
</tr>
<tr>
<td class="tg-uu1j" colspan="2">USB TypeC（20cm）*1</td>
</tr>
<tr>
<td class="tg-uu1j" colspan="2">贴纸*1</td>
</tr>
<tr>
<td class="tg-uu1j" colspan="2">1X12pin 公头排针 *2</td>
</tr>
</tbody>
</table>

## 应用场景

- Wio-E5 模块的便捷测试
- 使用 Wio-E5 快速构建小尺寸 LoRa® 设备原型
- 任何长距离无线通信应用开发
- LoRa® 和 LoRaWAN® 应用学习与研究

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/317990687/image/application.png" alt="pir" width={600} height="auto" /></p>

## 应用说明

**1. 出厂 AT 固件**

Wio-E5 系列内置 AT 命令固件，支持 LoRaWAN® Class A/B/C 协议和广泛的频率计划：EU868/US915/AU915/AS923/KR920/IN865。通过此 AT 命令固件，开发者可以轻松快速地构建原型或应用。

AT 命令固件包含用于 DFU 的引导加载程序和 AT 应用程序。"PB13/SPI_SCK/BOOT" 引脚用于控制 Wio-E5 是停留在引导加载程序还是跳转到 AT 应用程序。当 PB13 为高电平时，模块在复位后会跳转到 AT 应用程序，默认波特率为 9600。当 PB13 为低电平时（按下 Wio-E5 mini 上的 "Boot" 按钮），模块将停留在引导加载程序中，并以 115200 波特率每秒发送一次 "C" 字符。

:::tip

- 出厂 AT 固件已设置为 RDP（读保护）等级 1，开发者需要使用 STM32Cube Programmer 先移除 RDP。注意，将 RDP 恢复到等级 0 会导致闪存数据被全部擦除，且出厂 AT 固件无法恢复。
- Wio-E5 模块上的 "PB13/SPI_SCK/BOOT" 引脚只是一个普通的 GPIO，而不是 MCU 的 "BOOT0" 引脚。此 "PB13/SPI_SCK/BOOT" 引脚用于出厂 AT 固件的引导加载程序中，以决定跳转到应用程序还是停留在引导加载程序（用于 DFU）。真正的 "BOOT0" 引脚未引出到模块，因此用户在开发低功耗应用时需特别注意。

:::

**2. 时钟配置**

2.1 HSE

- 32MHz TCXO

- TCXO 电源：PB0-VDD_TCXO

2.2 LSE

- 32.768KHz 晶体振荡器

**3. 射频开关**

**Wio-E5 模块仅通过 RFO_HP 进行传输：**

- 接收：PA4=1, PA5=0

- 发送（高输出功率，SMPS 模式）：PA4=0, PA5=1

## 入门指南

### 快速开始使用 AT 指令

#### 准备工作

- **步骤 1.** 使用 Type-C 数据线将 Wio-E5 mini 连接到电脑

- **步骤 2.** 打开串口工具（例如 Arduino 串口监视器），选择正确的 COM 端口，将波特率设置为 9600，并选择 Both NL & CR

- **步骤 3.** 尝试发送 "AT"，您将看到响应。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/4.png" alt="pir" width={600} height="auto" /></p>

#### 基本 AT 指令

| 指令格式 | 返回值 | 描述 |
| --- | --- | --- |
| AT | +AT: OK | 测试指令 |
| AT+VER | +VER: \$MAJOR.\$MINOR.\$PATCH <br></br> +VER: 4.0.11 | 检查固件版本 |
| AT+ID // 读取所有 ID，包括 DevAddr（ABP）、DevEui（OTAA）、AppEui（OTAA）<br></br>AT+ID = DevAddr // 读取设备地址<br></br>AT+ID = DevEui // 读取 DevEui<br></br>AT+ID = AppEui // 读取 AppEui | +ID: DevAddr, xx: xx: xx:xx<br></br>+ID: DevEui, xx:xx:xx:xx:xx:xx:xx:xx<br></br>+ID: AppEui13, xx:xx:xx:xx:xx:xx:xx | 用于检查 LoRaWAN 模块的 ID。ID 被视为大端序数字。 |
| AT+ID = DevAddr, “01234567” // 设置新的 DevAddr<br></br>AT+ID = DevEui, “0123456789ABCDEF” // 设置新的 DevEui<br></br>AT+ID = AppEui, “0123456789ABCDEF” // 设置新的 AppEui | +ID: DevAddr, 01:23:45:67<br></br>+ID: DevEui, 01:23:45:67:89:AB:CD:EF<br></br>+ID: AppEui, 01:23:45:67:89:AB:CD:EF | 更改 ID |
| AT+RESET | +RESET: OK | 重置模块 |
| AT+MSG=”Data to send” | +MSG: Start<br></br>+MSG: FPENDING // 下行帧 FPENDING 标志已设置<br></br>+MSG: Link 20, 1<br></br>+MSG: ACK Received // 收到 LinkCheckAns<br></br>+ MSG: MULTICAST // 下行帧是多播消息<br></br>+MSG: PORT: 8; RX: "12345678" // 收到下行消息<br></br>+MSG: RXWIN2, RSSI -106, SNR 4 // 下行帧信号强度<br></br>+MSG: Done | 发送无需服务器确认的字符串格式帧 |
| AT+PORT = “port”<br></br>例如：AT+PORT = 8 // 设置端口为 8 | + PORT: 8 | 设置用于 MSG/CMSG/MSGHEX/CMSGHEX 指令发送消息的端口号，端口号范围为 1 到 255。 |
| AT+ADR=" state"<br></br>例如：AT+ADR=ON // 启用 ADR 功能<br></br>AT+ ADR= OFF // 禁用 ADR 功能<br></br>AT+ADR=? // 检查当前 ADR 配置 | +ADR: ON  // ADR 查询/设置返回值 | 设置 LoRaWAN 模块的 ADR 功能 |
| AT+DR // 检查当前选择的数据速率<br></br>AT+DR=drx // "drx" 范围为 0~15 | +DR: DR0<br></br>+DR: US915 DR0 SF10 BW12 | 使用 LoRaWAN 定义的 DRx 设置 LoRaWAN AT 调制解调器的数据速率。 |
| AT+ DR= band //" band" 可以是第 3 章频段计划中定义的频段名称<br></br>AT+ DR= SCHEME // 检查当前频段 | (EU868) +DR: EU868<br></br>+DR: EU868 DR0 SF12 BW125K<br></br>+DR: EU868 DR1 SF11 BW125K<br></br>+DR: EU868 DR2 SF10 BW125K<br></br>+DR: EU868 DR3 SF9 BW125K<br></br>+DR: EU868 DR4 SF8 BW125K<br></br>+DR: EU868 DR5 SF7 BW125K<br></br>+DR: EU868 DR6 SF7 BW125K<br></br>+DR: EU868 DR7 FSK<br></br>+DR: EU868 DR8 RFU<br></br>+DR: EU868 DR9 RFU<br></br>+DR: EU868 DR10 RFU<br></br>+DR: EU868 DR11 RFU<br></br>+DR: EU868 DR12 RFU<br></br>+DR: EU868 DR13 RFU<br></br>+DR: EU868 DR14 RFU<br></br>+DR: EU868 DR15 RFU | 数据速率方案 |
| AT + CH // 查询所有通道<br></br>AT + CH = ch // 检查单个通道频率 |  | 查询通道配置 |
| AT+CH="chn", ["freq"], ["drmin"], ["drmax"]<br></br>// 将 chn 通道频率更改为 "Freq"<br></br>// "freq" 单位为 MHz。<br></br>// 可用的 "drmin"/"drmax" 范围为 DR0 ~ DR15 | +CH: 3,433700000,DR0:DR5<br></br>+CH: 3,433700000,DR | 设置 LoRaWAN 调制解调器的通道参数，将频率设置为零以删除一个通道。 |
| AT+CH=chn,ON<br></br>AT+CH=chn, OFF |  | 启用或禁用通道 |
| AT+ KEY= NWKSKEY, “ 16 bytes length key”<br></br>例如：AT+KEY=NWKSKEY, "2B7E151628AED2A6ABF7158809CF4F3C"<br></br>例如：AT+KEY=NWKSKEY, "2B 7E 15 16 28 AE D2 A6 AB F7 15 88 09 CF 4F 3C” | + KEY: NWKSKEY 2B7E151628AED2A6ABF7158809CF4F3C | 更改网络会话密钥（NWKSKEY） |
| AT+ KEY= APPSKEY, “ 16 bytes length key”<br></br>例如：AT+KEY=APPSKEY, "2B7E151628AED2A6ABF7158809CF4F3C"<br></br>例如：AT+KEY= APPSKEY, "2B 7E 15 16 28 AE D2 A6 AB F7 15 88 09 | + KEY: APPSKEY 2B7E151628AED2A6ABF7158809CF4F3C | 更改应用会话密钥（APPSKEY） |
| AT+ FDEFAULT<br></br>AT+ FDEFAULT= Seeed | +FDEFAULT: OK | 将 LoRaWAN AT 调制解调器重置为出厂默认配置 |
| T+ DFU=" New state"<br></br>例如：AT+DFU=ON // 启用 DFU 功能<br></br>例如：AT+DFU=OFF // 禁用 DFU 功能<br></br>AT+DFU=? // 检查是否启用了 DFU 配置 | +DFU: ON<br></br>+DFU: OFF | 用于进入 DFU 模式 |
| T+MODE="mode"<br></br>例如：AT+MODE=TEST // 进入 TEST 模式<br></br>例如：AT+MODE= LWOTAA // 进入 LWOTAA 模式<br></br>例如：AT+MODE= LWABP // 进入 LWABP 模式 | +MODE: LWABP // 成功进入 TEST 模式<br></br>+MODE: LWOTAA // 成功进入 LWOTAA 模式<br></br>+MODE: TEST // 成功进入 TEST 模式 | 用于选择工作模式 |
| AT + JOIN<br></br>AT + JOIN = FORCE | a) 加入成功 +JOIN: Starting<br></br>+ JOIN: NORMAL<br></br>+JOIN: NetID 000024 DevAddr 48:00:00:01<br></br>+JOIN: Done<br></br>b) 加入失败<br></br>+JOIN: Join failed<br></br>c) 加入过程正在进行中<br></br>+ JOIN: LoRaWAN 调制解调器正忙 | 当启用 OTAA 模式时，JOIN 指令可用于加入已知网络 |

有关更多信息，请参考 [指令规范](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf)。

#### 连接并向 The Things Network 发送数据

- **步骤 1.** 访问 [The Things Network](https://www.thethingsnetwork.org) 网站并注册新账户

- **步骤 2.** 登录后，点击您的个人资料并选择 **Console**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/1.png" alt="pir" width={600} height="auto" /></p>

- **步骤 3.** 选择一个集群以开始添加设备和网关

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/2.png" alt="pir" width={600} height="auto" /></p>

- **步骤 4.** 点击 **Go to applications**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/4.png" alt="pir" width={600} height="auto" /></p>

- **步骤 5.** 点击 **+ Add application**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/5.png" alt="pir" width={600} height="auto" /></p>

- **步骤 6.** 填写 **Application ID** 并点击 **Create application**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/6.png" alt="pir" width={600} height="auto" /></p>

**注意：** 此处 **Application name** 和 **Description** 不是必填字段。如果 **Application name** 留空，默认会使用与 **Application ID** 相同的名称。

以下是新创建的应用程序：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/7.png" alt="pir" width={600} height="auto" /></p>

- **步骤 7.** 点击 **+ Add end device**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/8.png" alt="pir" width={600} height="auto" /></p>

- **步骤 8.** 点击 **Manually**，手动输入注册凭据

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/9.png" alt="pir" width={600} height="auto" /></p>

- **步骤 9.** 根据您的地区选择 **Frequency plan**。同时确保使用与将连接此设备的网关相同的频率。选择 **MAC V1.0.2** 作为 **LoRaWAN® version**，选择 **PHY V1.0.2 REV B** 作为 **Regional Parameters version**。这些设置是根据 Wio-E5 的 LoRaWAN® 协议栈配置的。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/10.png" alt="pir" width={600} height="auto" /></p>

- **步骤 10.** 在 Wio-E5 模块仍可通过串口控制台访问时，在串口监视器上发送以下 AT 命令：

  - `AT+ID=DevEui` 获取设备 EUI
  - `AT+ID=AppEui` 获取应用 EUI
  - `AT+KEY=APPKEY,"2B7E151628AED2A6ABF7158809CF4F3C"` 设置应用密钥

输出如下：

```
Tx: AT+ID=DevEui
Rx: +ID: DevEui, 2C:F7:F1:20:24:90:03:63
Tx: AT+ID=AppEui
Rx: +ID: AppEui, 80:00:00:00:00:00:00:07
Tx: AT+KEY=APPKEY,"2B7E151628AED2A6ABF7158809CF4F3C"
Rx: +KEY: APPKEY 2B7E151628AED2A6ABF7158809CF4F3C
```

- **步骤 11.** 将上述信息复制并粘贴到 **DevEUI**、**AppEUI** 和 **AppKey** 字段中。当填写 **DevEUI** 时，**End device ID** 字段会自动填充。最后点击 **Register end device**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/12.png" alt="pir" width={600} height="auto" /></p>

- **步骤 12.** 在 TTN 控制台中注册您的 LoRaWAN® 网关。请参考[此处](https://wiki.seeedstudio.com/cn/The-Things-Indoor-Gateway/#step-2-gateway-registration-on-ttn-console)的说明。

- **步骤 13.** 输入以下 AT 命令以连接到 TTN：

```
// 如果您使用的是 US915
AT+DR=US915
AT+CH=NUM,8-15

// 如果您使用的是 EU868
AT+DR=EU868
AT+CH=NUM,0-2

AT+MODE=LWOTAA
AT+JOIN
```

串口监视器上的输出如下：

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

如果您在串口控制台上看到 **+JOIN: Network joined**，这表示您的设备已成功连接到 TTN！

您还可以在 **End devices** 页面上检查设备状态。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/13.png" alt="pir" width={600} height="auto" /></p>

- **步骤 14.** 输入以下 AT 命令将数据发送到 TTN：

```
// 发送字符串 "HELLO" 到 TTN
Tx: AT+MSG=HELLO
Rx: +MSG: Start
+MSG: FPENDING
+MSG: RXWIN2, RSSI -112, SNR -1.0
+MSG: Done
// 发送十六进制 "00 11 22 33 44"
Tx: AT+MSGHEX="00 11 22 33 44"
Rx: +MSGHEX: Start
+MSGHEX: Done
```

有关 AT 命令的更多信息，请参考 [Wio-E5 AT Command Specification](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf)。

### 使用 STM32Cube MCU Package 开发

本节适用于 Wio-E5 mini，旨在使用 STM32WL 系列（SDK）的 STM32Cube MCU Package 构建多个应用程序。

**注意：** 我们现已更新库以支持最新版本 v1.1.0 的 STM32WL 系列 STM32Cube MCU Package。

:::note
请先阅读 [Erase Factory AT Firmware](https://wiki.seeedstudio.com/cn/LoRa_E5_mini/#21-erase-factory-at-firmware) 部分，因为在使用 SDK 编程之前需要擦除出厂 AT 固件。擦除出厂 AT 固件后将无法恢复。
:::

#### 准备工作

软件：

- [STM32CubeIDE](https://my.st.com/content/my_st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-ides/stm32cubeide.html)：用于编译和调试

- [STM32CubeProgrammer](https://my.st.com/content/my_st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-programmers/stm32cubeprog.license=1614563305396.product=STM32CubePrg-W64.version=2.6.0.html)：用于编程 STM32 设备

硬件：

- 连接到 LoRaWAN® 网络服务器（例如 TTN）的 LoRaWAN® 网关

- 一根 USB Type-C 数据线和一个 ST-LINK。将 Type-C 数据线连接到开发板的 Type-C 接口，用于供电和串口通信。将 ST-LINK 连接到 SWD 引脚，连接方式如下：

![connection](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/connection.png)

#### GPIO 配置概览

- 由于 Wio-E5 系列的硬件设计与 ST 官方的 STM32WL55JC 开发板 NUCLEO-WL55JC 略有不同，开发者需要重新配置一些 GPIO，以使 SDK 示例适配 Wio-E5 系列。我们已经重新配置了 GPIO，但我们认为有必要指出其中的差异。

| SDK 示例标签 | NUCLEO-WL55JC 的 GPIO | Wio-E5 mini 的 GPIO |
|-------------|---------------------------|--------------------------|
| RF_CTRL1    | PC4                       | PA4                      |
| RF_CTRL2    | PC5                       | PA5                      |
| RF_CTRL3    | PC3                       | 无                       |
| BUT1        | PA0                       | PB13 (Boot 按钮)         |
| BUT2        | PA1                       | 无                       |
| BUT3        | PC6                       | 无                       |
| LED1        | PB15                      | 无                       |
| LED2        | PB9                       | PB5                      |
| LED3        | PB11                      | 无                       |
| DBG1        | PB12                      | PA0 (D0 按钮)            |
| DBG2        | PB13                      | PB10                     |
| DBG3        | PB14                      | PB3                      |
| DBG4        | PB10                      | PB4                      |
| Usart       | Usart2(PA2/PA3)           | Usart1(PB6/PB7)          |

### 应用

现在我们将探索使用 STM32WL 系列的 STM32Cube MCU Package (SDK) 在 Wio-E5 mini 上的几个应用。

#### LoRaWAN® 终端节点

此应用将连接 Wio-E5 mini 到 TTN（The Things Network），并在连接到 LoRaWAN® 网关后发送数据。

- **步骤 1.** 点击[这里](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian)访问 **Seeed-Studio/LoRaWan-E5-Node** 仓库，并将其下载为 ZIP 文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **步骤 2.** 解压 ZIP 文件并导航到 `LoRaWan-E5-Node > Projects > Applications > LoRaWAN > LoRaWAN_End_Node > STM32CubeIDE`。

- **步骤 3.** 双击 **.project** 文件。

  **注意：** 对于 MAC 系统，可以通过以下选项之一打开项目：

  - **1.** 导航到 `Wio-E5-Node > Projects > Applications > LoRaWAN > LoRaWAN_End_Node`，双击文件 "LoRaWAN_End_Node.ioc"。

  - **2.** 使用 "从文件系统或存档导入项目" 功能，如下图所示。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/MAC.png" alt="pir" width={600} height="auto" /></p>

- **步骤 4.** 右键点击项目并选择 **Properties**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/properties-open-2.jpg" alt="pir" width={600} height="auto" /></p>

- **步骤 5.** 导航到 `C/C++ Build > Settings > MCU Post build outputs`，勾选 **Convert to Intel Hex file (-O ihex)**，然后点击 **Apply and Close**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/set-hex.png" alt="pir" width={600} height="auto" /></p>

- **步骤 6.** 点击 **Build 'Debug'**，项目应能无错误编译。

![build](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/build.png)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/lorawan-debug-2.png" alt="pir" width={600} height="auto" /></p>

现在我们将修改 **Device EUI**、**Application EUI**、**Application KEY** 和 **LoRaWAN® Region**。

- **步骤 7.** 请按照[此处的指南](https://wiki.seeedstudio.com/cn/LoRa_E5_mini/#13-connect-and-send-data-to-the-things-network)设置您的 TTN 应用，获取您的 **Application EUI** 并将其复制到 `LoRaWAN/App/se-identity.h` 中的宏定义 `LORAWAN_JOIN_EUI`，例如，此处的 Application EUI 为 `80 00 00 00 00 00 00 0x07`：

```cpp
// LoRaWAN/App/se-identity.h

/*!
 * App/Join server IEEE EUI (big endian)
 */
#define LORAWAN_JOIN_EUI                                   { 0x80, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x07 }
```

- **步骤 8.** 同样，您可以通过设置 `LoRaWAN/App/se-identity.h` 中的宏定义 `LORAWAN_DEVICE_EUI` 和 `LORAWAN_NWK_KEY` 来修改您的 **Device EUI** 和 **Application Key**。确保 `LORAWAN_DEVICE_EUI` 和 `LORAWAN_NWK_KEY` 与 TTN 控制台中的 `Device EUI` 和 `App Key` 一致。

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

- **步骤 9.** 默认的 LoRaWAN 区域是 `EU868`，您可以通过设置 `LoRaWAN/App/lora_app.h` 中的宏定义 `ACTIVE_REGION` 来修改它。

```c
// LoRaWAN/App/lora_app.h

/* LoraWAN application configuration (Mw is configured by lorawan_conf.h) */
/* Available: LORAMAC_REGION_AS923, LORAMAC_REGION_AU915, LORAMAC_REGION_EU868, LORAMAC_REGION_KR920, LORAMAC_REGION_IN865, LORAMAC_REGION_US915, LORAMAC_REGION_RU864 */
#define ACTIVE_REGION                               LORAMAC_REGION_US915
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/lora-app-h.png" alt="pir" width={600} height="auto" /></p>

- **步骤 10.** 完成上述修改后，**重新构建**示例并将其烧录到您的 Wio-E5。打开 `STM32CubeProgrammer`，将 ST-LINK 连接到您的 PC，按住设备的 `RESET 按钮`，然后点击 `Connect` 并释放 `RESET 按钮`：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program1.png" alt="pir" width={600} height="auto" /></p>

- **步骤 11.** 确保 Read Out Protection 为 `AA`，如果显示为 `BB`，请选择 `AA` 并点击 `Apply`：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program2.png" alt="pir" width={600} height="auto" /></p>

- **步骤 12.** 现在，转到 `Erasing & Programming` 页面，选择您的 hex 文件路径（例如：`C:\Users\user\Downloads\LoRaWan-E5-Node\Projects\Applications\LoRaWAN\LoRaWAN_End_Node\STM32CubeIDE\Debug\LoRaWAN_End_Node.hex`），按照下图选择编程选项，然后点击 `Start Programming`！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program3.png" alt="pir" width={600} height="auto" /></p>

编程完成后，您将看到消息 **Download verified successfully**。

- **步骤 13.** 如果您的 LoRaWAN® 网关和 TTN 已设置完成，Wio-E5 在复位后将成功加入网络！每隔 30 秒会向 TTN 发送一个确认 LoRaWAN® 数据包。如果加入成功，串口监视器（此处使用 Arduino 串口监视器）将打印以下日志：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/TTN-joined.png" alt="pir" width={600} height="auto" /></p>

- 恭喜！现在您已经将 Wio-E5 连接到 LoRaWAN® 网络！您可以继续开发更多令人兴奋的 LoRaWAN® 终端节点应用程序！

**注意：** Wio-E5 仅支持高功率输出模式，因此您不能在 `radio_board_if.h` 中使用以下宏定义：

```
#define RBI_CONF_RFO     RBI_CONF_RFO_LP_HP
// 或
#define RBI_CONF_RFO     RBI_CONF_RFO_LP
```

尽管 **RBI_CONF_RFO** 在 `radio_board_if.h` 中定义为 **RBI_CONF_RFO_LP_HP**，但它不会被使用，因为 **USE_BSP_DRIVER** 已定义，并且 **BSP_RADIO_GetTxConfig()** 函数返回 **RADIO_CONF_RFO_HP**。

#### FreeRTOS LoRaWAN®

此应用程序也将 Wio-E5 mini 连接到 TTN（The Things Network），并在连接到 LoRaWAN® 网关后发送数据。与之前的 LoRaWAN® 终端节点应用程序的区别在于，前者运行在裸机上，而此应用程序运行在 FreeRTOS 下。

- **步骤 1.** 点击 [这里](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) 访问 **Seeed-Studio/LoRaWan-E5-Node** 仓库并下载为 ZIP 文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **步骤 2.** 解压 ZIP 文件并导航到 `LoRaWan-E5-Node > Projects > Applications > FreeRTOS > FreeRTOS_LoRaWAN`

- **步骤 3.** 双击 **.project** 文件

- **步骤 4.** 参考之前 **LoRaWAN® 终端节点** 应用程序的 **步骤 4 - 步骤 13**，将 Wio-E5 mini 连接到 TTN！

#### FreeRTOS LoRaWAN® AT

此应用程序也将 Wio-E5 mini 连接到 TTN（The Things Network），并在连接到 LoRaWAN® 网关后发送数据。与之前的 FreeRTOS LoRaWAN 应用程序的区别在于，您可以使用 AT 命令。

- **步骤 1.** 点击 [这里](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) 访问 **Seeed-Studio/LoRaWan-E5-Node** 仓库并下载为 ZIP 文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **步骤 2.** 解压 ZIP 文件并导航到 `LoRaWan-E5-Node > Projects > Applications > FreeRTOS > FreeRTOS_LoRaWAN_AT`

- **步骤 3.** 双击 **.project** 文件

- **步骤 4.** 参考之前 **LoRaWAN 终端节点** 应用程序的 **步骤 4 - 步骤 12**

- **步骤 5.** 打开一个串口监视器，例如 **Arduino 串口监视器**，您将看到以下输出：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-at-serial-open-2.png" alt="pir" width={600} height="auto" /></p>

- **步骤 6.** 输入 **AT?** 并按 **ENTER** 查看所有可用的 AT 命令

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/at-commands.png" alt="pir" width={600} height="auto" /></p>

- **步骤 7.** 如果您仍希望更改 **Device EUI**、**Application EUI**、**Application KEY** 和 **LoRawan® Region**，可以使用 AT 命令进行更改。然而，这些参数在此示例中已在 **se-identity.h** 和 **lora_app.h** 中设置。

- **步骤 8.** 输入 **AT+JOIN=1**，一旦加入成功，您将看到以下输出：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-at-join.png" alt="pir" width={600} height="auto" /></p>

**注意：** 此处应使用 **AT+JOIN=(Mode)** 格式。**Mode** 对应于 **0 表示 ABP** 或 **1 表示 OTAA**。

#### FreeRTOS LowPower

此应用程序将在 Wio-E5 mini 上启用低功耗模式。应用程序烧录后，开发板将正常消耗功率 2 秒，然后进入低功耗模式 2 秒，如此循环。

- **步骤 1.** 点击 [这里](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) 访问 **Seeed-Studio/LoRaWan-E5-Node** 仓库并下载为 ZIP 文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **步骤 2.** 解压 ZIP 文件并导航到 `LoRaWan-E5-Node > Projects > Applications > FreeRTOS > FreeRTOS_LowPower`

- **步骤 3.** 双击 **.project** 文件

- **步骤 4.** 右键点击项目并选择 **Properties**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-properties.jpg" alt="pir" width={600} height="auto" /></p>

- **步骤 5.** 导航到 `C/C++ Build > Settings > MCU Post build outputs`，勾选 **Convert to Intel Hex file (-O ihex)** 并点击 **Apply and Close**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-hex.jpg" alt="pir" width={600} height="auto" /></p>

- **步骤 6.** 点击 **Build 'Debug'**，编译应无错误完成

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-build.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-success.png" alt="pir" width={600} height="auto" /></p>

- **步骤 7.** 打开 `STM32CubeProgrammer`，将 ST-LINK 连接到您的电脑，按住设备的 `RESET 按钮`，然后点击 `Connect` 并释放 `RESET 按钮`：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program1.png" alt="pir" width={600} height="auto" /></p>

- **步骤 8.** 确保读取保护（Read Out Protection）为 `AA`，如果显示为 `BB`，请选择 `AA` 并点击 `Apply`：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program2.png" alt="pir" width={600} height="auto" /></p>

- **步骤 9.** 现在，进入 `Erasing & Programming` 页面，选择您的 hex 文件路径（例如：`C:\Users\user\Downloads\LoRaWan-E5-Node\Projects\Applications\FreeRTOS\FreeRTOS_LowPower\Debug\FreeRTOS_LowPower.hex`），按照下图选择编程选项，然后点击 `Start Programming`！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program3.png" alt="pir" width={600} height="auto" /></p>

编程完成后，您将看到消息 **Download verified successfully**。

- **步骤 10.** 通过连接电源计将 Wio-E5 mini 连接到电脑。您会注意到板上的红色 LED 每秒闪烁一次，且板子在正常和低功耗状态之间切换（电源计上的电流会在低功耗状态下下降 1 秒，然后在正常工作状态下恢复 1 秒）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/low-power-demo-2.gif" alt="pir" width={600} height="auto" /></p>

#### 低功耗

此应用程序还将在 Wio-E5 mini 上启用低功耗模式。与之前的 FreeRTOS 低功耗应用程序的区别在于，前者运行在 FreeRTOS 上，而此应用程序运行在裸机环境下。

- **步骤 1.** 点击[这里](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian)访问 **Seeed-Studio/LoRaWan-E5-Node** 仓库并将其下载为 ZIP 文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **步骤 2.** 解压 ZIP 文件并导航到 `LoRaWan-E5-Node > Projects > Applications > LowPower`

- **步骤 3.** 双击 **.project** 文件

- **步骤 4.** 参考之前 **FreeRTOS 低功耗** 应用程序的 **步骤 4 - 步骤 10**，您将在电源计上看到相同的输出！

## 资源

Wio-E5 mini 数据表：

- <p><a href="http://files.seeedstudio.com/products/113990939/LoRa-E5%20mini%20v1.0.brd">Wio-E5 mini v1.0.brd</a></p>

- <p><a href="https://files.seeedstudio.com/products/113990939/LoRa-E5%20mini%20v1.0.pdf">Wio-E5 mini v1.0.pdf</a></p>

- <p><a href="http://files.seeedstudio.com/products/113990939/LoRa-E5%20mini%20v1.0.sch">Wio-E5 mini v1.0.sch</a></p>

Wio-E5 数据表：

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20module%20datasheet_V1.1.pdf">Wio-E5 数据表和规格</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf">Wio-E5 AT 命令规范</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/STM32WLE5JC%20Datasheet.pdf">STM32WLE5JC 数据表</a></p>

Wio-E5 认证：

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20Certification%20CE-VOC-RED.pdf">Wio-E5-HF 认证 CE-VOC-RED</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DSS.pdf">Wio-E5-HF FCC 认证 -DSS</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DTS.pdf">Wio-E5-HF FCC 认证 -DTS</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/Telec.zip">Wio-E5-HF TELEC 认证</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20IC%20ID.pdf">Wio-E5-HF IC 认证</a></p>

相关 SDK：

- <p><a href="https://my.st.com/content/my_st_com/en/products/embedded-software/mcu-mpu-embedded-software/stm32-embedded-software/stm32cube-mcu-mpu-packages/stm32cubewl.license=1608693595598.product=STM32CubeWL.version=1.0.0.html#overview" target="_blank">STM32WL 系列的 STM32Cube MCU 软件包</a></p>

## 技术支持与产品讨论

请将任何技术问题提交到我们的 [论坛](http://forum.seeedstudio.com/)。

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时能够获得顺畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>