---
description: 将 SenseCAP M2 多平台网关连接到 AWS
title: 连接到 AWS IoT
keywords:
  - SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-AWS-IoT
last_update:
  date: 08/29/2023
  author: Jessie
createdAt: '2023-02-24'
updatedAt: '2025-09-10'
url: https://wiki.seeedstudio.com/cn/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-AWS-IoT/
---


## AWS IoT 配置

登录 [AWS](https://signin.aws.amazon.com)。
如果您没有 AWS 账户，请先创建一个新账户。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS2.PNG" alt="pir" width={800} height="auto" /></p>

### 添加网关

导航至 **Internet of Things** > **IoT Core**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS1.PNG" alt="pir" width={800} height="auto" /></p>

选择 **LPWAN devices** > **Gateway** 以添加网关

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS4.PNG" alt="pir" width={800} height="auto" /></p>

**网关 EUI：** 网关 EUI 可在设备标签或 [本地控制台](https://files.seeedstudio.com/products/SenseCAP/M2_Multi-Platform_Gateway/Quick_Start_for_SenseCAP_Gateway_&_Sensors.pdf) 上找到

**频段：** 根据实际选择选择频率计划。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS3.PNG" alt="pir" width={800} height="auto" /></p>

#### 创建证书

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS7.PNG" alt="pir" width={800} height="auto" /></p>

下载证书文件和服务器信任证书。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS6.PNG" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS5.PNG" alt="pir" width={800} height="auto" /></p>

选择角色：**IoT Wireless Gateway Cert Manager Role**，然后提交配置。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS9.PNG" alt="pir" width={800} height="auto" /></p>

#### 检查网关连接状态

导航到 Gateways 页面并选择您已添加的网关。

在 Gateway details 页面的 LoRaWAN specific details 部分，您将看到连接状态以及上次接收上行链路数据的日期和时间。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS8.PNG" alt="pir" width={800} height="auto" /></p>

### 添加配置文件

可以定义设备和服务配置文件来描述常见的设备配置。这些配置文件描述了设备共享的配置参数，以便更轻松地添加这些设备。AWS IoT Core for LoRaWAN 支持设备配置文件和服务配置文件。

#### 添加设备配置文件

导航至 **Devices** > **Profiles**，点击 Add device profile

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS11.PNG" alt="pir" width={800} height="auto" /></p>

提供一个 Device profile name，选择您为设备和网关使用的频段 (RfRegion)，并保持其他设置为默认值。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS10.PNG" alt="pir" width={800} height="auto" /></p>

#### 添加服务配置文件

导航至 **Devices** > **Profiles**，点击 Add service profile

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS13.PNG" alt="pir" width={800} height="auto" /></p>

建议您保持启用 AddGWMetaData 设置，以便为每个有效载荷接收额外的网关元数据，例如数据传输的 RSSI 和 SNR。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS12.PNG" alt="pir" width={800} height="auto" /></p>

### 添加目的地

导航至 **Devices** > **Destination**，点击 Add destination

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS15.PNG" alt="pir" width={800} height="auto" /></p>

发布到 AWS IoT Core 消息代理

**权限：** 选择现有服务角色 > IoT Wireless Gateway Cert Manager Role

:::tip 注意
目的地名称只能包含字母数字、-（连字符）和 _（下划线）字符，不能包含任何空格。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS14.PNG" alt="pir" width={800} height="auto" /></p>

### 添加 LoRaWAN 设备

#### 添加无线设备

导航至 **LPWAN devices** > **Devices**，点击 Add wireless device

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS18.PNG" alt="pir" width={800} height="auto" /></p>

#### 配置设备

**无线设备规范：** OTAAv1.0x

**DevEUI：** `device EUI/APP EUI/APP` 密钥可在设备标签上找到。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS17.PNG" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS20.PNG" alt="pir" width={800} height="auto" /></p>

#### 检查设备连接状态

导航到 **Devices** 页面并选择您已添加的设备。

在 Wireless devices details 页面的 Details 部分，您将看到上次接收上行链路数据的日期和时间。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS19.PNG" alt="pir" width={800} height="auto" /></p>

## 网关配置

登录本地控制台 查看设备的 [快速入门指南](https://files.seeedstudio.com/products/SenseCAP/M2_Multi-Platform_Gateway/Quick_Start_for_SenseCAP_Gateway_&_Sensors.pdf) 以登录。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS22.PNG" alt="pir" width={800} height="auto" /></p>

### LoRaWAN 网络设置

导航至 **LoRa** > **LoRa Network**

**模式：** Basics Station

**网关 EUI：** 它将自动获取已连接网关的 EUI

**服务器：** 选择 CUPS Server 或 LNS Server（对于 CUPS，端口为 443；对于 LNS，端口为 8887）

了解更多关于 [CUPS 和 LNS 服务器](https://lora-developers.semtech.com/build/software/lora-basics/lora-basics-for-gateways/)

**认证模式：** TLS Server and Client Authentication

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS21.PNG" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS23.PNG" alt="pir" width={800} height="auto" /></p>

完成设置后点击 Save&Apply。
