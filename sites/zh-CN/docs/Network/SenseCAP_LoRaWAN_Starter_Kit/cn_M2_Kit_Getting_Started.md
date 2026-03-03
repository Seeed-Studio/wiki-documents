---
description: 使用 SenseCAP LoRaWAN 入门套件快速上手
title: 使用 SenseCAP LoRaWAN 入门套件快速上手
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/M2_Kit_Getting_Started
sidebar_position: 0
last_update:
  date: 2023/1/26
  author: Specner
---
# **概述**

## **LoRaWAN 基础知识**

LoRaWAN（Long Range Wide Area Network，长距离广域网）是一种专为物联网（IoT）应用设计的低功耗、长距离无线通信协议。它为物联网设备提供了远距离和低功耗的通信能力。LoRaWAN 的主要特点包括：

- 长距离通信
- 低功耗
- 可公有或私有部署
- 支持大规模设备连接

由于这些特性，LoRaWAN 被广泛应用于智慧农业、智慧城市、环境监测以及其他无线传感应用中。

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/1.png
"/></div>

想了解更多关于 LoRaWAN 的信息，请点击这里。

## **SenseCAP LoRaWAN 入门套件**

SenseCAP LoRaWAN 入门套件旨在帮助用户快速掌握并应用 LoRaWAN 的实际知识。该套件包括 NM2 多平台网关、XIAO S3、Grove Wio-E5、温湿度传感器、土壤湿度传感器以及其他可扩展的 Grove 模块，使用户能够通过实践学习 LoRaWAN 架构，并进一步开发自己的项目。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/2.jpg" /></div>

作为一款 LoRaWAN 入门套件，它包含了 LoRaWAN 架构的所有组件，包括节点、网关，甚至 SenseCAP 云平台。该套件提供了一整套功能，允许您全面体验 LoRaWAN 技术。通过该套件，您可以参与各种实践活动，例如距离测试、网络测试和项目开发。它提供了一个完整的解决方案，使您能够深入了解 LoRaWAN 的各个方面，并通过实际应用验证其性能和功能。无论您是初学者还是经验丰富的开发者，该套件都能满足您在 LoRaWAN 领域的学习和实践需求。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/3.png" /></div>

相关产品：

|名称|描述|
| :- | :- |
|[S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S210x)|一系列无线 LoRaWAN® 工业传感器。|
|[S2100 数据记录仪](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)|可连接 MODBUS-RTU RS485/模拟/GPIO 传感器，并将传感器数据传输到 LoRaWAN 网络。|
|[M2 多平台 LoRaWAN 室内网关](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html)|一款标准 LoRaWAN® 网关，支持连接到不同的网络服务器。|
|[Wio-E5 开发套件](https://www.seeedstudio.com/LoRa-E5-Dev-Kit-p-4868.html)|一款易于使用的紧凑型开发工具套件，可帮助您解锁 Wio-E5 STM32WLE5JC LoRa 模块的强大性能。|

# **快速入门**

## **准备工作**

### **硬件**

**电子元件**

套件应包含以下电子元件。请检查是否齐全。    
**
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/4.jpg" /></div>

在开始项目之前，您需要将针脚焊接到 XIAO 板上并安装天线。

**焊接针脚**

XIAO ESP32S3 默认情况下不附带针脚，您需要准备自己的针脚并将其焊接到 XIAO 的对应针脚上，以便连接扩展板或传感器。

由于 XIAO ESP32S3 的尺寸非常小，在焊接针脚时请小心，不要将不同的针脚焊接在一起，也不要将焊锡粘到屏蔽罩或其他元件上。否则可能导致 XIAO 短路或无法正常工作，由此造成的后果将由用户自行承担。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/5.png" /></div>

**天线安装**

在 XIAO ESP32S3 正面左下角，有一个独立的“WiFi/BT 天线连接器”。为了获得更好的 WiFi/蓝牙信号，您需要取出包装内的天线并将其安装到连接器上。

安装天线有一个小技巧，如果直接用力按压，您会发现很难按下并且手指会疼！正确的安装方法是先将天线连接器的一侧插入连接块，然后稍微按压另一侧，天线即可安装。

拆卸天线时也是如此，不要用蛮力直接拉扯天线，而是从一侧用力抬起，天线就很容易取下。
<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/6.png" /></div>

### **软件**
您可以选择使用我们内置的 SenseCAP 云平台，或者使用第三方 LoRaWAN 网络服务器（如 The Things Network）。我们推荐使用 SenseCAP 云平台以获得最佳用户体验。以下是相关链接。

1. 点击打开 [SenseCAP Portal](https://sensecap.seeed.cc/portal/#/login) 网页

扫描下载 SenseCAP Mate APP
<div align="center"><img width={200} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/7.png" /></div>


# **使用 LoRaWAN 入门套件快速无代码启动**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/8.png" /></div>


## **步骤 1：通电并连接到互联网**

套件包含 [SenseCAP 多平台 LoRaWAN 室内网关 (SX1302) - EU868 - Seeed Studio](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html)，这是一个支持连接到不同网络服务器的标准 LoRaWAN® 网关。它不仅可用于个人 LoRa 开发，还可与工业传感器配合使用。在本教程中，数据流将通过 SenseCAP 云。此网关默认运行 SenseCAP 模式，因此您无需额外设置，只需通电并通过以太网或 WiFi 连接到互联网。

### **连接以太网线**

最快的方法 - 将以太网线连接到以太网端口，如果网关成功连接到互联网，顶部指示灯将显示绿色常亮。

### **通过 Luci 连接到 WiFi**

用户可以通过以下两种方式登录 Luci 配置页面：

**通过路由器访问**

1. 将网关连接到以太网线，并将您的电脑连接到同一路由器。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/9.png" /></div>
 

**注意**：您的电脑和设备应连接到同一路由器/网络。

2. 在路由器管理页面检查设备的 IP 地址。
3. 获取设备的用户名和密码：您可以在设备标签上找到用户名和密码。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/10.png" /></div>

4. 在浏览器中输入设备的 IP 地址以进入 Luci 页面。然后输入设备的用户名和密码以登录。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/11.png" /></div>


**通过设备 AP 热点访问**

1. 按住按钮 5 秒，直到蓝色指示灯慢闪，进入配置模式。
2. AP 热点名称为 SenseCAP_XXXXXX（6 位 MAC 地址），默认密码为 12345678；将您的电脑连接到此 AP 热点。

<div align="center"><img width={200} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/12.png" /></div>

3. 获取设备的用户名和密码：您可以在设备标签上找到用户名和密码。

4. 在浏览器中输入 IP 地址（192.168.168.1）以进入本地控制台。然后输入设备的用户名和密码，并点击登录按钮。

**连接到 WiFi**

点击 Network - Wireless

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/13.png" /></div>

点击 Scan 按钮扫描 WiFi。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/14.png" /></div>

选择您的 WiFi 加入网络。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/15.png" /></div>

提交 WiFi 密码，然后点击 Submit 和 Save。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/16.png" /></div>

然后点击“保存并应用”以应用您的设置。

如果网关成功连接到 WIFI，顶部的指示灯将显示为绿色常亮。

## **步骤2 连接节点**
将 Grove-电容式土壤湿度传感器、温湿度传感器和 Grove-Wio-E5 无线模块插入 XIAO 扩展板。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/17.png" /></div>

## **步骤3 扫描 Grove-Wio-E5 的二维码**

下载并打开 SenseCAP Mate APP，根据您使用的手机系统下载相应版本的 APP。如果您是首次使用 SenseCAP 平台，请先注册一个账户。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/18.png" /></div>
<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/19.png" /></div>

点击右上角的 + 号，选择“添加设备”以绑定 Grove-Wio-E5。

<div align="center"><img width={100} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/20.png" /></div>

将摄像头中心的框对准 Grove-Wio-E5 背面的二维码进行扫描以绑定您的设备。请注意，不要扫描 Wio-E5 正面的二维码。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/21.png" /></div>

## **步骤4 查看数据**
通过 SenseCAP Mate APP 成功绑定后，您将在 APP 上看到传感器数据。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/22.jpg" /></div>

:::tip

SenseCAP Mate APP 不会自动刷新数据，您需要在传感器页面手动下拉刷新数据。如果超过 10 分钟未看到新数据，您可以尝试通过将侧边按钮向下拨动一次来重启 Wio Terminal。
:::

## 附录

- [原生固件代码](https://github.com/Seeed-Solution/lorawan-kit)