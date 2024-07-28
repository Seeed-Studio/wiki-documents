---
description: 具有内置LoRa-E5和GNSS天线的Wio Terminal LoRaWan底座, EU868/US915
title: 具有内置LoRa-E5和GNSS天线的Wio Terminal LoRaWan底座, EU868/US915
keywords:
- Wio_terminal Extension_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio_Terminal_LoRaWan_Chassis_with_Antenna-built-in_LoRa-E5_and_GNSS_EU868_US915
last_update:
  date: 3/05/2024
  author: 金菊
---



![](https://files.seeedstudio.com/wiki/LoRa_WioTerminal/img/114992728_Feature-02.png)

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Wio-Terminal-Chassis-LoRa-E5-and-GNSS-p-5053.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>

具有内置LoRa-E5和GNSS天线的Wio Terminal LoRaWan底座，使用了内置LoRa-E5 STM32WLE5JC的LoRaWan底座，由ARM Cortex M4超低功耗MCU核心和LoRa SX126x供电，支持EU868 / US915频率上的LoRa和LoRaWAN协议，以及(G)FSK、BPSK、(G)MSK、LoRa调制。Wio Terminal LoRaWan底座内置天线的LoRa-E5和GNSS，EU868 / US915可以通过在板上轻松插入和使用Grove连接器，赋予您的开发板超长传输范围的强大功能。

作为我们旧版本的升级  - [Grove - LoRa Radio](https://www.seeedstudio.com/Grove-LoRa-Radio-868MHz.html) - 由 [RFM95 超长距离收发器模块](https://www.seeedstudio.com/RFM95-Ultra-long-Range-Transceiver-Module-LoRa-Module-support-868M-frequency-p-2807.html)供电, Grove LoRa-E5 嵌入了 [LoRa-E5 STM32WLE5JC 模块](https://www.seeedstudio.com/LoRa-E5-Wireless-Module-p-4745.html) 是一款高性能且易于使用的支持LoRaWAN协议的无线电LoRa模块。

LoRa-E5 LoRaWAN STM32WLE5JC模块是内置于Wio Terminal LoRaWan底座内的主要功能部分，它是一款内置了ARM Cortex M4超低功耗MCU核心和LoRa SX126x的LoRaWAN模块，作为世界上首个将LoRa RF和MCU芯片组合到一个微小模块中的组合，它支持(G)FSK、BPSK、(G)MSK和LoRa调制，并且已通过FCC、CE认证。(了解更多关于LoRa-E5的信息，请访问[LoRa-E5 wiki](https://wiki.seeedstudio.com/LoRa-E5_STM32WLE5JC_Module/))

LoRa-E5与RFM95芯片之间的更多比较：
![](https://files.seeedstudio.com/products/113990934/%E8%8A%AF%E7%89%87%E5%AF%B9%E6%AF%94_2021.3.4.png)

通过连接Wio Terminal LoRaWan底座内置LoRa-E5和GNSS，EU868 / US915到您的开发板，您的设备可以通过UART连接方便地使用AT命令与LoRa-E5通信和控制。Grove LoRa-E5将是物联网设备开发、测试和远距离、超低功耗物联网场景（如智能农业、智能办公和智能工业）的卓越选择。它采用工业标准设计，工作温度范围广，为-40℃至85℃，灵敏度高，在-136 dBm至-137 dBm之间，功率输出在10 dBm至22 dBm之间。

## 特点

- LoRa-E5（STM32WLE5JC）嵌入式
- 支持EU868 / US915频段上的LoRaWAN协议
- 超长传输范围，最高可达10公里（理想值在开放空间中）
- 通过UART连接的AT命令轻松控制
- 使用即插即用的Grove接口进行快速原型设计
- 超低功耗和高性能

## 硬件概述

![](https://files.seeedstudio.com/wiki/LoRa_WioTerminal/img/114992728_Size-08.png)

1. LoRa-E5 STM32WLE5JC ([数据手册](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20module%20datasheet_V1.0.pdf))
2. MHF IPEX连接器
3. 无线电天线
4. Grove连接器
5. LED指示灯

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## 规格

|                    | 通用参数    |
|--------------------|-----------------------|
| 电压供应:    | 3.3V/5V               |
| 功率输出:      | 3.3V时最高达到+20 dBm |
| 工作频率：  | 868/915MHz            |
| 协议：           | LoRaWAN               |
| 灵敏度         | -116.5dBm ~ -136dBm   |
| 调制方式         | LoRa, (G)FSK, (G)MSK 和 BPSK |
| 电流            | 仅60uA的待机电流 |
| 尺寸               | 20*40mm               |
| 工作温度 | -40℃ ~ 85℃ |

## 部件清单

|        产品         |        数量         |
|-----------------------|----------------------|
| Wio Terminal LoRaWan底座，内置带天线的LoRa-E5和GNSS，EU868/US915  | *1 |
| 天线 | *1  |

## 应用领域

- LoRaWAN GPS追踪器
- LoRaWAN现场测试仪
- 智能农业
- 智能城市
- 智能工厂
- 使用Wio Terminal进行LoRa设备的快速原型设计
- 任何远距离无线通信应用开发
- LoRa和LoRaWAN应用学习和研究

# 入门指南

**所需材料**

| Wio Terminal | LoRaWan 底座 | 电池底座 |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/LoRa_WioTerminal/img/Wio-Terminal-Wiki.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/LoRa_WioTerminal/img/114992728_Feature-14.png)|![enter image description here](https://files.seeedstudio.com/wiki/LoRa_WioTerminal/img/45.png)
|[点击购买](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[点击购买](https://www.seeedstudio.com/Wio-Terminal-Chassis-LoRa-E5-and-GNSS-p-5053.html)|[点击购买](https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-650mAh-p-4756.html)|

# 项目 1: WioTerminal LoRaWAN 网关测试

## 简介

LoRaWAN网关测试仪是一款多功能便携工具，可检测您的LoRaWAN网关的覆盖范围。它会告知您信号是否在正常范围内。LoRaWAN网关测试仪旨在使LoRaWAN网络的部署更加简单，它将帮助您确定LoRaWAN网关部署的最佳位置。

在开发此项目之前，我们调查了LoRa测试仪市场，价格通常在200美元到500美元之间，然而，其中一些缺乏后端应用程序来报告网络信号、当前时间、状态和其他几个关键信息。因此，我们决定自己带来一个低成本的版本，能够做更多事情！该项目基于 [**Paul Pinault**](https://github.com/disk91/WioLoRaWANFieldTester) 的 [**WioLoRaWANFieldTester**](https://www.disk91.com/2021/technology/lora/low-cost-lorawan-field-tester/) 报告。我们很荣幸能够访问他的链接，并感谢他的贡献。我们将Paul Pinault的精美界面与LoRa-E5和GNSS模块结合起来，以实现LoRaWAN网关测试仪的功能。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/%E5%9C%BA%E6%99%AF%E5%9B%BE2.jpg" /></div>

## 特点

- 菜单选择不同的操作模式；电源控制，扩频因子，测试编号输入等。
- 支持各种网络段（EU868、US915、US915HYBRID、AS923、KR920、IN865）
- 显示LoRa设备的连接和上行-下行状态
- 备份上次的测试结果
- 备份上次的测试结果
- 显示上行和下行次数，以及丢包的可能性
- GPS位置报告，以及当前时间和卫星数量。
- 显示LoRa设备信息，如DevEui、APPEui、Appkey、固件版本等
- 定义DevEui、APPEui和Appkey

## 硬件

该项目使用的硬件比市场上大多数产品更实惠，总成本不到一百美元。

- [**WioTerminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
- [**Wio Terminal Chassis - Battery (650mAh)**](https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-650mAh-p-4756.html)
- [**Wio Terminal Chassis - LoRa-E5 and GNSS**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

## 使用方法

### Wio Terminal 说明

LoRaWAN网关测试仪基本上会定期向网关发送帧数据，然后传输到服务器（上行）。然后等待ACK状态。如果LoRa测试仪没有收到响应，它将继续发送相同的帧数据，直到达到预设的次数。另一方面，ACK会将响应（下行）返回给LoRa测试仪，表示消息已转发到后端服务，从而最终在Wio终端屏幕上显示信息。
该项目基于Arduino平台，这意味着我们将使用Arduino IDE和各种Arduino库。如果这是您第一次使用Wio终端，可以参考以下指南快速开始： [**Wio Terminal使用指南**](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/)。

所需库:

- [**Seeed_Arduino_SFUD**](https://github.com/Seeed-Studio/Seeed_Arduino_SFUD)
- [**TinyGPS**](https://github.com/mikalhart/TinyGPSPlus)
- [**LovyanGFX**](https://github.com/lovyan03/LovyanGFX)

### 注

上传代码时，请选择从机模式。
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/ROLA.png" /></div>

### TheThingsNetwork控制台配置设置

在此项目中，我在 [**TheThingsNetwork**](https://www.thethingsnetwork.org) 平台上测试了LoRa测试仪，以下是设置说明：

步骤 1: 登录 [**TTN 网站**](https://www.thethingsnetwork.org) 并创建您的帐户，然后进入网关开始设置您的设备。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_gataway1.png" /></div>

步骤 2: 添加网关设备：

- 所有者
- 网关ID
- 网关EUI
- 网关名称

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_gateway2.png" /></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_gateway3.png" /></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_gateway4.png" /></div>

步骤 3: 添加应用程序:

- 所有者
- 应用程序ID
- 应用程序名称

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_applications.png" /></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/application2.png" /></div>

步骤 4：添加LoRa节点:

- 品牌（选择Sense CAP）
- 型号（选择LoRa-E5）
- 硬件版本（默认）
- 固件版本（默认）
- 配置文件（区域根据您的位置选择）
- 频率计划
- AppEUI
- DEVEUI
- AppKey
- 终端设备ID

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_device1.png" /></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_device4.png" /></div>

步骤 5:  添加解码数据的代码:

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_decode1.png" /></div>

```CPP
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

步骤 6: 在TheThingsNetwork上检查结果

进入网关，然后点击 "Live data"。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_data.png" /></div>

### Wio terminal 说明

每个LoRa设备都有一个唯一的序列号，在将LoRa设备连接到Wio终端后，第一页上将显示deveui、appeui和appkey，您需要在服务器中填写LoRa ID和网关ID。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/rola_tester_ID.png" /></div>

这里有Rssi和Snr数据，获取ACK响应后，它会显示信号和Snr条以及数据包丢失情况。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/RSSI.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/SNR.png" /></div>

该设备还具有GPS功能，但不建议在封闭的空间中使用，以免影响卫星信号接收。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/GPS.png" /></div>

## 电路图

请查看board目录，了解PCB和组件的详细信息。这是用于DiY实现的简化版本电路图。如果您需要更详细的信息，只需查看文件列表。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/LORA_PCB.png" /></div>

## 外壳

3D打印的外壳可以在文件列表中找到，其中包括PCBA WioTerminal底座 H和PCB文件。您将在其中找到所有的设计。如果您想修改/改进它，还可以找到FreeCad源文件。

3D打印的工作如下:

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/feature.png"/></div>

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/preview.png"/></div>

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/back.png"/></div>

# Project 2: 带WioTerminal-IoT智能园艺监控的LoRa节点

## 简介

IoT智能园艺监控使用Wio Terminal底座-LoRa-E5和GNSS作为物联网设备，它基本上是将一个帧发送到网关，然后传输到服务器（上行）。在这种情况下，我可以将其他数据与帧一起上传，例如GPS、温度和湿度，您还可以根据需要带上其他传感器数据。在ACK获得响应（下行）返回给LoRa设备后，连接状态将切换为已连接，并显示在Wio终端上，这意味着消息已传递到后端服务，然后您可以在TheThingsNetwork平台上查看数据，您还可以使用其他平台，但前提是该平台支持Wio Terminal底座-LoRa-E5和GNSS。

  <div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/%E5%B8%A6%E4%BC%A0%E6%84%9F%E5%99%A8%E5%9C%BA%E6%99%AF%E5%9B%BE.jpg"/></div>

## 特点

- 该LoRa设备可以在第一页上显示DevEui、APPEui和Appkey
- 它可以显示当前的温度、湿度和当前时间。
- 显示经度、纬度和卫星数量。
- 显示设备和TTN连接状态。  

## 硬件

在此演示中，您将需要以下设备:

- [**WioTerminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- [**Wio Terminal 底座 - Battery (650mAh)**](https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-650mAh-p-4756.html)

- [**Grove - 温湿度传感器 (DHT11)**](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT1-p-745.html)

- [**Wio Terminal 底座 - LoRa-E5 and GNSS**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

## 用法

该项目基于Arduino平台，因此我们将使用Arduino IDE和各种Arduino库。如果您是第一次使用Wio Terminal，这是一个 [**快速入门 Wio Terminal 指南**](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/).

所需库:

- [**Seeed_Arduino_SFUD**](https://github.com/Seeed-Studio/Seeed_Arduino_SFUD)
- [**TinyGPS**](https://github.com/mikalhart/TinyGPSPlus)
- [**Grove_温湿度传感器**](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor)

### TheThingsNetwork控制台配置设置

在这个项目中，我在 [**TheThingsNetwork**](https://www.thethingsnetwork.org) 平台上测试LoRa测试工具，以下是指导步骤：

步骤 1: 登录 [**TTN 网站**](https://www.thethingsnetwork.org) 创建您的账户，然后转到网关开始设置您的设备。

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_gataway1.png"/></div>

步骤 2: 添加网关设备:

- 所有者
- 网关ID
- 网关EUI
- 网关名称

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_gateway2.png"/></div>

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_gateway3.png"/></div>

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_gateway4.png"/></div>

步骤 3: 添加应用程序:

- 所有者
- 应用程序ID
- 应用程序名称

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_applications.png"/></div>

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/application2.png"/></div>

步骤 4：添加LoRa节点:

- Brand (Select Sense CAP)
- Model (Select LoRa-E5)
- Hardware Ver (Defult)
- Firmware Ver (Defult)
- Profile (The Region is according to your location)
- Frequency plan
- AppEUI
- DEVEUI
- AppKey
- End Device ID

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_device1.png"/></div>

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_device4.png"/></div>

步骤 5: 添加解码数据的代码:

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_decode1.png"/></div>

```CPP
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

步骤 6: 在TheThingsNetwork上检查结果

转到网关，然后点击 "Live data"。

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_dataTEMP1.png"/></div>

### 注

当您上传代码时，请选择从机模式。
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/ROLA.png" /></div>

每个LoRa设备都有一个唯一的序列号，在将LoRa设备连接到Wio Terminal后，第一页上将显示DevEui、APPEui和Appkey，您需要在服务器中填写LoRa ID和网关ID。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/temp_ID.png" /></div>

在第二页上，将显示温度、湿度、当前时间、经度、纬度和卫星数量。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TEMP_GPS_DATA.png" /></div>

## PlatformIO

我们还提供PlatformIO代码。

[IcingTomato/LoRaNode-with-WioTerminal-IoT-Smart-Garden-Monitor](https://github.com/IcingTomato/LoRaNode-with-WioTerminal-IoT-Smart-Garden-Monitor)

[IcingTomato/WioTerminal-LoRaWAN-Gateway-Tester](https://github.com/IcingTomato/WioTerminal-LoRaWAN-Gateway-Tester)

## 资源

数据手册:

- [Wio Terminal 底座 - LoRa-E5 and GNSS v1.2.zip](http://files.seeedstudio.com/wiki/LoRa_WioTerminal/res/WioTerminalChassis-LoRa-E5andGNSSv1.2SCH&PCB.zip)
- [LoRa-E5 数据手册和规格说明](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20module%20datasheet_V1.0.pdf)
- [LoRa-E5 AT 指令规范](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf)
- <p><a href="https://files.seeedstudio.com/products/317990687/res/STM32WLE5JC%20Datasheet.pdf">STM32WLE5JC 数据手册</a></p>

认证:

- [LoRa-E5-HF 认证 CE-VOC-RED](https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20Certification%20CE-VOC-RED.pdf)
- [LoRa-E5-HF FCC 认证 -DSS](https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DSS.pdf)
- [LoRa-E5-HF FCC 认证 -DTS](https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DTS.pdf)

相关 SDK:

- [STM32WL系列的STM32Cube MCU软件包](https://my.st.com/content/my_st_com/en/products/embedded-software/mcu-mpu-embedded-software/stm32-embedded-software/stm32cube-mcu-mpu-packages/stm32cubewl.license=1608693595598.product=STM32CubeWL.version=1.0.0.html#overview)

## 技术支持 & 产品讨论

感谢您选择我们的产品！我们将提供不同的支持渠道，以确保您对我们的产品有最顺畅的体验。如果您有任何问题，请随时与我们联系。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
