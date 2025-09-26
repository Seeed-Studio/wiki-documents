---
description: Wio Terminal LoRaWan 底盘，内置天线的 LoRa-E5 和 GNSS，EU868/US915
title: Wio Terminal LoRaWan 底盘，内置天线的 LoRa-E5 和 GNSS，EU868/US915
keywords:
- Wio_terminal Extension_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio_Terminal_LoRaWan_Chassis_with_Antenna-built-in_LoRa-E5_and_GNSS_EU868_US915
last_update:
  date: 1/30/2023
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/LoRa_WioTerminal/img/114992728_Feature-02.png)

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Wio-Terminal-Chassis-LoRa-E5-and-GNSS-p-5053.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>

Wio Terminal LoRaWan 底盘，内置天线的 LoRa-E5 和 GNSS，EU868/US915 嵌入了 LoRa-E5 STM32WLE5JC，由 ARM Cortex M4 超低功耗 MCU 内核和 LoRa SX126x 驱动，是一个支持 EU868 和 US915 频率上的 LoRa 和 LoRaWAN 协议以及 (G)FSK、BPSK、(G)MSK、LoRa 调制的无线射频模块。Wio Terminal LoRaWan 底盘，内置天线的 LoRa-E5 和 GNSS，EU868/US915 可以通过板载的 Grove 连接器轻松即插即用，为您的开发板赋予超长传输距离的强大功能。

作为我们旧版本 - [Grove - LoRa Radio](https://www.seeedstudio.com/Grove-LoRa-Radio-868MHz.html) - 的升级版，该产品由 [RFM95 超长距离收发器模块](https://www.seeedstudio.com/RFM95-Ultra-long-Range-Transceiver-Module-LoRa-Module-support-868M-frequency-p-2807.html) 驱动，Grove LoRa-E5 嵌入了 [LoRa-E5 STM32WLE5JC 模块](https://www.seeedstudio.com/LoRa-E5-Wireless-Module-p-4745.html)，是一个支持 LoRaWAN 协议的高性能且易于使用的无线射频 LoRa 模块。

LoRa-E5 LoRaWAN STM32WLE5JC 模块是集成到 Wio Terminal LoRaWan 底盘，内置天线的 LoRa-E5 和 GNSS，EU868/US915 中的主要功能部件。它是一个嵌入了 ARM Cortex M4 超低功耗 MCU 内核和 LoRa SX126x 的 LoRaWAN 模块，作为世界首个将 LoRa RF 和 MCU 芯片组合到单个微型模块中的产品，它支持 (G)FSK、BPSK、(G)MSK 和 LoRa 调制，并通过了 FCC、CE 认证。（从 [LoRa-E5 wiki](https://wiki.seeedstudio.com/cn/LoRa-E5_STM32WLE5JC_Module/) 了解更多关于 LoRa-E5 的信息）

LoRa-E5 和 RFM95 芯片的更多比较：
![](https://files.seeedstudio.com/products/113990934/%E8%8A%AF%E7%89%87%E5%AF%B9%E6%AF%94_2021.3.4.png)

通过将 Wio Terminal LoRaWan 底盘，内置天线的 LoRa-E5 和 GNSS，EU868/US915 连接到您的开发板，您的设备能够通过 UART 连接使用 AT 命令方便地与 LoRa-E5 通信和控制。Grove LoRa-E5 将是物联网设备开发、测试以及智能农业、智能办公和智能工业等长距离、超低功耗物联网场景的优选。它采用工业标准设计，工作温度范围宽达 -40℃ ~ 85℃，灵敏度在 -136 dBm 和 -137 dBm 之间，功率输出在 10 dBm 和 22 dBm 之间。

## 特性

- 内置 LoRa-E5 (STM32WLE5JC)
- 支持 EU868/US915 频段的 LoRaWAN 协议
- 超长传输距离可达 10km（开放空间理想值）
- 通过 UART 连接使用 AT 命令轻松控制
- 即插即用的 Grove 接口快速原型开发
- 超低功耗和高性能

## 硬件概览

![](https://files.seeedstudio.com/wiki/LoRa_WioTerminal/img/114992728_Size-08.png)

1. LoRa-E5 STM32WLE5JC ([数据手册](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20module%20datasheet_V1.0.pdf))
2. MHF IPEX 连接器
3. 线缆天线
4. Grove 连接器
5. LED 指示灯

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## 规格参数

|                    | 通用参数    |
|--------------------|-----------------------|
| 电压供应:    | 3.3V/5V               |
| 功率输出:      | 3.3V 时最高 +20 dBm |
| 工作频率  | 868/915MHz            |
| 协议           | LoRaWAN               |
| 灵敏度        | -116.5dBm ~ -136dBm   |
| 调制方式         | LoRa, (G)FSK, (G)MSK 和 BPSK |
| 电流            | 睡眠模式下仅 60uA |
| 尺寸               | 20*40mm               |
| 工作温度 | -40℃ ~ 85℃ |

## 零件清单

|        产品         |        数量         |
|-----------------------|----------------------|
| Wio Terminal LoRaWan 底盘，内置天线、LoRa-E5 和 GNSS，EU868/US915  | *1 |
| 天线 | *1  |

## 应用场景

- LoRaWAN GPS 追踪器
- LoRaWAN 现场测试仪
- 智慧农业
- 智慧城市
- 智能工厂
- 使用 Wio Terminal 快速原型开发 LoRa 设备
- 任何长距离无线通信应用开发
- LoRa 和 LoRaWAN 应用学习和研究

# 开始使用

**所需材料**

| Wio Terminal | LoRaWan 底座 | 电池底座 |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/LoRa_WioTerminal/img/Wio-Terminal-Wiki.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/LoRa_WioTerminal/img/114992728_Feature-14.png)|![enter image description here](https://files.seeedstudio.com/wiki/LoRa_WioTerminal/img/45.png)
|[立即购买](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[立即购买](https://www.seeedstudio.com/Wio-Terminal-Chassis-LoRa-E5-and-GNSS-p-5053.html)|[立即购买](https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-650mAh-p-4756.html)|

# 项目 1：WioTerminal LoRaWAN 网关测试仪

## 介绍

LoRaWAN 网关测试仪是一个多功能便携式工具，可以检测您的 LoRaWAN 网关的覆盖范围。它会告知您信号是否在正常范围内。LoRaWAN 网关测试仪旨在使 LoRaWAN 网络的部署更加容易，将帮助您确定 LoRaWAN 网关部署的最佳位置。

在开发这个项目之前，我们调研了 LoRa 测试仪市场；价格通常在 200 美元到 500 美元之间，然而，其中一些缺乏后端应用程序来报告网络信号、当前时间、状态和其他几个关键信息。因此，我们决定推出一个能够做更多事情的低成本版本！这个项目基于 [**Paul Pinault**](https://github.com/disk91/WioLoRaWANFieldTester) 的 [**WioLoRaWANFieldTester**](https://www.disk91.com/2021/technology/lora/low-cost-lorawan-field-tester/) 报告。我们很荣幸能够访问他的链接，并感谢他的贡献。我们将 Paul Pinault 为 Wio terminal 设计的精美 UI 与 LoRa-E5 和 GNSS 模块相结合，实现了 LoRaWAN 网关测试仪的功能。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/%E5%9C%BA%E6%99%AF%E5%9B%BE2.jpg" /></div>

## 特性

- 菜单选择不同的操作模式；电源控制、SF、测试数量输入等。
- 支持各种网络频段（EU868、US915、US915HYBRID、AS923、KR920、IN865）
- 显示 LoRa 设备连接和上行链路-下行链路状态
- 备份之前的测试结果
- RSSI 和 SNR 的图形显示
- 显示上行链路和下行链路次数，以及数据包丢失的可能性
- GPS 位置报告，以及当前时间和卫星数量。
- 显示 LoRa 设备信息，即 DevEui、APPEui、Appkey、固件版本等
- 定义 DevEui、APPEui 和 Appkey

## 硬件

这个项目中使用的硬件比市场上大多数产品更实惠，总成本不到一百美元。

- [**WioTerminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
- [**Wio Terminal 底座 - 电池 (650mAh)**](https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-650mAh-p-4756.html)
- [**Wio Terminal 底座 - LoRa-E5 和 GNSS**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

## 使用方法

### Wio Terminal 说明

LoRaWAN 网关测试器基本上定期按需向网关发送帧，然后传输到服务器（上行链路）。然后它等待 ACK 状态。如果 LoRa 测试器没有收到响应，它将继续发送相同的帧，直到达到预设的数量。另一方面，ACK 返回响应（下行链路）给 LoRa 测试器，表明消息被转发到后端服务，信息最终显示在 Wio terminal 屏幕上。
此项目基于 Arduino 平台，这意味着我们将使用 Arduino IDE 和各种 Arduino 库。如果这是您第一次使用 Wio terminal，这里有一个快速[**开始使用 Wio Terminal**](https://wiki.seeedstudio.com/cn/Wio-Terminal-Getting-Started/) 的指南。

所需库：

- [**Seeed_Arduino_SFUD**](https://github.com/Seeed-Studio/Seeed_Arduino_SFUD)
- [**TinyGPS**](https://github.com/mikalhart/TinyGPSPlus)
- [**LovyanGFX**](https://github.com/lovyan03/LovyanGFX)

### 注意

当您上传代码时，请选择从机模式。
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/ROLA.png" /></div>

### TheThingsNetwork 控制台配置设置

在这个项目中，我在 [**TheThingsNetwork**](https://www.thethingsnetwork.org) 平台上测试 LoRa 测试器，说明如下：

步骤 1：登录 [**TTN 网站**](https://www.thethingsnetwork.org) 并创建您的账户，然后转到网关开始设置您的设备。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_gataway1.png" /></div>

步骤 2：添加网关设备：

- 所有者
- 网关 ID
- 网关 EUI
- 网关名称

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_gateway2.png" /></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_gateway3.png" /></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_gateway4.png" /></div>

步骤 3：添加应用程序：

- 所有者
- 应用程序 ID
- 应用程序名称

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_applications.png" /></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/application2.png" /></div>

步骤 4：添加 LoRa 节点：

- 品牌（选择 Sense CAP）
- 型号（选择 LoRa-E5）
- 硬件版本（默认）
- 固件版本（默认）
- 配置文件（区域根据您的位置）
- 频率计划
- AppEUI
- DEVEUI
- AppKey
- 终端设备 ID

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_device1.png" /></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_device4.png" /></div>

步骤 5：添加解码数据的代码：

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_decode1.png" /></div>

```cpp
function Decoder(bytes, port) {
 
  var decoded = {};
  if (port === 8) {
    decoded.latitude   = (bytes[3] | (bytes[2]<<8) | (bytes[1]<<16)  | (bytes[0]<<24)) /1000000;
    decoded.longitude  = (bytes[7] | (bytes[6]<<8) | (bytes[5]<<16)  | (bytes[4]<<24)) /1000000;
    decoded.altitude   = (bytes[9] | (bytes[8]<<8));
    decoded.satellites = bytes[9];
  }
 
  return decoded;
}
```

步骤 5：在 TheThingsNetwork 上检查结果

转到网关，然后点击"实时数据"。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_data.png" /></div>

### Wio terminal 说明

每个 LoRa 设备都有一个唯一的序列号，当您将 LoRa 设备连接到 Wio terminal 后，第一页将显示 deveui、appeui 和 appkey，您需要在服务器中填写 LoRa ID 和网关 ID。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/rola_tester_ID.png" /></div>

有 Rssi 和 Snr 数据，在获得 ACK 响应后，它将显示信号和 Snr 条以及丢包率。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/RSSI.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/SNR.png" /></div>

该设备也有 GPS 功能，但不建议在封闭空间中使用，以免影响卫星收集。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/GPS.png" /></div>

## 原理图

查看 board 目录了解 PCB 和元件的详细信息。
这里是用于 DIY 实现的简化版原理图。
如果您需要更多详细信息，请查看文件列表。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/LORA_PCB.png" /></div>

## 外壳

3D 打印外壳可以在文件列表中找到，即 PCBA WioTerminal Chassis H 和 PCB 文件。您将在其中找到所有设计。您还会找到 FreeCad 源文件，以防您想要修改/改进它。

3D 打印效果如下：

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/feature.png"/></div>

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/preview.png"/></div>

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/back.png"/></div>

# 项目 2：使用 WioTerminal 的 LoRa 节点 - 物联网智能花园监控器

## 介绍

物联网智能花园监控器使用 Wio Terminal Chassis-LoRa-E5 和 GNSS 作为物联网设备，它基本上向网关发送帧，然后传输到服务器（上行链路），在这种情况下，我可以将其他数据与帧一起上传，例如 GPS、温度和湿度，您也可以根据需要添加其他传感器数据。在 ACK 获得响应（下行链路）返回到 LoRa 设备后，连接状态将切换到已连接并显示在 Wio terminal 上，这意味着消息已传递到后端服务，然后您可以在 TheThingsNetwork 平台上查看数据，您也可以使用其他平台，但前提是该平台能够支持 Wio Terminal Chassis-LoRa-E5 和 GNSS。

  <div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/%E5%B8%A6%E4%BC%A0%E6%84%9F%E5%99%A8%E5%9C%BA%E6%99%AF%E5%9B%BE.jpg"/></div>

## 特性

- LoRa 设备可以在第一页显示 DevEui、APPEui 和 Appkey。
- 它可以显示当前温度、湿度和当前时间。
- 显示经度、纬度和卫星数量。
- 显示设备和 TTN 连接状态。

## 硬件

此演示您需要以下设备列表：

- [**WioTerminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- [**Wio Terminal 底座 - 电池（650mAh）**](https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-650mAh-p-4756.html)

- [**Grove - 温湿度传感器 (DHT11)**](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT1-p-745.html)

- [**Wio 终端机外壳 - LoRa-E5 和 GNSS**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

## 使用方法

此项目基于 Arduino 平台，这意味着我们将使用 Arduino IDE 和各种 Arduino 库。如果这是您第一次使用 Wio terminal，这里有一个快速[**开始使用 Wio Terminal**](https://wiki.seeedstudio.com/cn/Wio-Terminal-Getting-Started/) 的指南。

所需库：

- [**Seeed_Arduino_SFUD**](https://github.com/Seeed-Studio/Seeed_Arduino_SFUD)
- [**TinyGPS**](https://github.com/mikalhart/TinyGPSPlus)
- [**Grove_温度和湿度传感器**](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor)

### TheThingsNetwork 控制台配置设置

在此项目中，我在 [**TheThingsNetwork**](https://www.thethingsnetwork.org) 平台上测试 LoRa 测试器，说明如下：

步骤 1：进入 [**TTN 网站**](https://www.thethingsnetwork.org) 并创建您的账户，然后转到网关开始设置您的设备。

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_gataway1.png"/></div>

步骤 2：添加网关设备：

- 所有者
- 网关 ID
- 网关 EUI
- 网关名称

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_gateway2.png"/></div>

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_gateway3.png"/></div>

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_gateway4.png"/></div>

步骤 3：添加应用程序：

- 所有者
- 应用程序 ID
- 应用程序名称

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_applications.png"/></div>

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/application2.png"/></div>

步骤 4：添加 LoRa 节点：

- 品牌（选择 Sense CAP）
- 型号（选择 LoRa-E5）
- 硬件版本（默认）
- 固件版本（默认）
- 配置文件（区域根据您的位置）
- 频率计划
- AppEUI
- DEVEUI
- AppKey
- 终端设备 ID

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_device1.png"/></div>

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_device4.png"/></div>

步骤 5：添加解码数据的代码：

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_decode1.png"/></div>

```cpp
function Decoder(bytes, port) {
 
  var decoded = {};
  if (port === 8) {
    decoded.temp = bytes[0] <<8 | bytes[1];
    decoded.humi = bytes[2] <<8 | bytes[3];
    decoded.latitude   = (bytes[7] | (bytes[6]<<8) | (bytes[5]<<16)  | (bytes[4]<<24)) /1000000;
    decoded.longitude  = (bytes[11] | (bytes[10]<<8) | (bytes[9]<<16)  | (bytes[8]<<24)) /1000000;
    decoded.altitude   = (bytes[15] | (bytes[14]<<8) | (bytes[13]<<16) | (bytes[12]<<24))/100;
    decoded.satellites = bytes[16];
  }
 
  return decoded;
}
 
```

步骤 5：在 TheThingsNetwork 上检查结果

转到网关，然后点击"实时数据"。

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_dataTEMP1.png"/></div>

### 注意

当您上传代码时，请选择从机模式。
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/ROLA.png" /></div>

每个LoRa设备都有一个唯一的序列号，当您将LoRa设备连接到Wio terminal后，第一页将显示deveui、appeui和appkey，您需要在服务器中填写LoRa ID和网关ID。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/temp_ID.png" /></div>

在第二页，将显示温度、湿度、当前时间、经度、纬度和卫星数量。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TEMP_GPS_DATA.png" /></div>

## PlatformIO

我们还提供PlatformIO代码。

[IcingTomato/LoRaNode-with-WioTerminal-IoT-Smart-Garden-Monitor](https://github.com/IcingTomato/LoRaNode-with-WioTerminal-IoT-Smart-Garden-Monitor)

[IcingTomato/WioTerminal-LoRaWAN-Gateway-Tester](https://github.com/IcingTomato/WioTerminal-LoRaWAN-Gateway-Tester)

## 资源

数据手册：

- [Wio Terminal Chassis - LoRa-E5 and GNSS v1.2.zip](http://files.seeedstudio.com/wiki/LoRa_WioTerminal/res/WioTerminalChassis-LoRa-E5andGNSSv1.2SCH&PCB.zip)
- [LoRa-E5数据手册和规格](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20module%20datasheet_V1.0.pdf)
- [LoRa-E5 AT命令规范](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf)
- <p><a href="https://files.seeedstudio.com/products/317990687/res/STM32WLE5JC%20Datasheet.pdf">STM32WLE5JC数据手册</a></p>

认证：

- [LoRa-E5-HF认证CE-VOC-RED](https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20Certification%20CE-VOC-RED.pdf)
- [LoRa-E5-HF FCC认证-DSS](https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DSS.pdf)
- [LoRa-E5-HF FCC认证-DTS](https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DTS.pdf)

相关SDK：

- [STM32WL系列STM32Cube MCU包](https://my.st.com/content/my_st_com/en/products/embedded-software/mcu-mpu-embedded-software/stm32-embedded-software/stm32cube-mcu-mpu-packages/stm32cubewl.license=1608693595598.product=STM32CubeWL.version=1.0.0.html#overview)

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