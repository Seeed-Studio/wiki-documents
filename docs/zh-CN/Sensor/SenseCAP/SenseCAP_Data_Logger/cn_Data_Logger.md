---
description: SenseCAP S2100 LoRaWAN 数据记录器
title: SenseCAP S2100 LoRaWAN 数据记录器
keywords:
- SenseCAP data logger
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Sensor/SenseCAP/SenseCAP_Data_Logger/Data_Logger
last_update:
  date: 4/12/2023
  author: Yvonne
---


# SenseCAP S2100 LoRaWAN 数据记录器

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/SenseCAP/Data_Logger/1.png"/></div>

SenseCAP S2100 数据记录器是一款多功能设备，可连接 MODBUS-RTU RS485/模拟/GPIO 传感器，轻松将数据传输到 LoRaWAN 网络。凭借其 LoRa 和 IP66 设计，该设备具有令人印象深刻的稳定性和可靠性，能够覆盖长距离传输范围，同时保持超低功耗。它非常适合户外使用，可由电池供电或连接到 12V 外部电源以获得更大的灵活性。当连接到 12V 电源时，可更换的内置电池充当备用电源。此外，S2100 数据记录器针对 OTA 进行了优化，内置蓝牙，使设置和更新快速简单。最重要的是，S2110 转换器使 S2100 数据记录器能够连接到 Grove 传感器，使其成为 DIY 工业级 LoRaWAN 传感器和小规模部署的绝佳选择。
<p style={{textAlign: 'center' }}><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>

# 特性

- 与不同传感器的强兼容性：支持所有 MODBUS-RTU RS485/模拟(4 ~ 20mA/0~10V) / GPIO(电平/脉冲) 传感器。
- 兼容全球 LoRaWAN® 网络：兼容 LoRaWAN® V1.0.3 协议，可与 LoRaWAN® 网关配合工作。（支持 863MHz ~928MHz 通用频率计划）。
- 长距离和可更换电池供电：采用 LoRaWAN® 无线传输，S2100 支持 19Ah 内置电池和外部 12V DC 供电设备，在城市场景中具有 2km 的超宽传输范围，在视距场景中具有 10km 的传输范围。
- 专为恶劣环境使用而设计：-40℃ ~ 85℃ 工作温度和 IP66 防护等级外壳，适用于户外使用、高紫外线照射、大雨、多尘条件等。
- 远程配置和管理：Seeed 提供 SenseCAP Mate APP 和 SenseCAP Portal，允许用户远程管理数据和配置。

# 规格

## 接口

|项目|值|
|---|---|
|电流输入|4 到 20 mA（2 通道）|
|电压输入|0 到 10V（2 通道）|
|RS485|RS485 Modbus-RTU 协议|

## 通用参数

|项目|值|
|---|---|
|产品型号|SenseCAP S2100|
|微控制器|Wio-E5|
|支持协议|LoRaWAN v1.0.3 Class A|
|内置蓝牙|应用工具更改参数并设置数据转换算法|
|长距离信道计划|IN865/EU868/US915/AU915/ AS923|
|最大发射功率|19dBm|
|灵敏度|-136dBm@SF12 BW=125KHz|
|通信距离|2 到 10km（取决于环境）|
|IP 等级|IP66|
|工作温度|-40 到 +85 °C|
|工作湿度|0 到 100 %RH（非冷凝）|
|设备重量|280g|
|认证|CE / FCC / RoHS|

## 电池（设备内含）

|项目|值|
|---|---|
|电池寿命|长达 10 年|
|电池容量|19Ah（不可充电）|
|电池类型|标准 D 型 SOCl2 电池|

# 架构

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/Data_Logger/2.png"/></div>

# 电源选项

- 选项 1：数据记录器可在周期模式下工作。由内置的 19Ah 标准 D 型 Li-SOCl2 电池供电，该电池易于在线购买，可在户外环境中安装和部署，无需额外电源。

- 选项 2：数据记录器可在恒定电源模式下工作，使用外部 12V DC 电源。我们提供匹配的接线盒套件，以便数据记录器可以快速组装。

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/SenseCAP/Data_Logger/3.png"/></div>

# 支持不同接口的工业传感器

S2100 LoRaWAN 数据记录器是单通道采集器，一次只支持以下协议之一：

RS485：支持标准 RS485 Modbus-RTU 协议
模拟：2 x 0 ~ 10V 或 2 x 4 ~ 20mA。
GPIO：1 x GPIO，采集电平或脉冲信号

:::tip
Modbus-RTU：该协议主要使用 RS-232 或 RS-485 串行接口进行通信，并受到市场上每个商业 SCADA、HMI、OPC 服务器和数据采集软件程序的支持。这使得将 Modbus 兼容设备集成到新的或现有的监控和控制应用程序中变得非常容易。

GPIO：代表通用输入/输出。这是用于将微控制器连接到其他电子设备的标准接口。例如，它可以与传感器、二极管、显示器和片上系统模块一起使用。
:::

# 应用

<div align="center"><img width="{800}" src="https://wdcdn.qpic.cn/MTY4ODg1NTA2NTM1OTkxNw_136830_-0LyGczsW0uya6Pi_1670038120?w=1280&h=696.6093366093365"/></div>
