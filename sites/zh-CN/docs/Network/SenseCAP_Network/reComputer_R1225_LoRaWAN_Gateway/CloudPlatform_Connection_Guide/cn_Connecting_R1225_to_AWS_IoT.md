---
description: 将 R1225 连接到 AWS IoT
title: 连接到 AWS IoT
keywords:
  - Gateway
  - SenseCAP
  - Edge Controller
  - reComputer R1225
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /connecting_r1225_to_aws_iot
sku: 100021896,100030154,100006298,100079154
last_update:
  date: 04/07/2026
  author: Kian
createdAt: '2026-05-25'
url: https://wiki.seeedstudio.com/cn/connecting_r1225_to_aws_iot/
updatedAt: '2026-04-15'
---

## AWS IoT 网关配置

登录 [AWS](https://signin.aws.amazon.com)。
如果您没有 AWS 账户，请先创建一个新账户。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS2.PNG" alt="pir" width={800} height="auto" /></p>

### 添加网关

导航至 **物联网** > **IoT Core**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_aws/aws1.png" alt="pir" width={800} height="auto" /></p>

选择 **LPWAN 设备** > **网关** 以添加网关

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_aws/aws2.png" alt="pir" width={800} height="auto" /></p>

**网关 EUI：** 网关 EUI 可在设备标签或 [本地控制台](https://files.seeedstudio.com/products/SenseCAP/M2_Multi-Platform_Gateway/Quick_Start_for_SenseCAP_Gateway_&_Sensors.pdf) 上找到

**频段：** 根据实际选择选择频率计划。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_aws/aws3.png" alt="pir" width={800} height="auto" /></p>

#### 创建证书

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_aws/aws4.png" alt="pir" width={800} height="auto" /></p>

下载证书文件和服务器信任证书。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_aws/aws5.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_aws/aws6.png" alt="pir" width={800} height="auto" /></p>

#### 选择角色

选择 **IoT Wireless Gateway Cert Manager Role**，然后提交配置。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_aws/aws7.png" alt="pir" width={800} height="auto" /></p>

## R1225 网关配置

登录本地控制台。查看设备的 [快速入门](https://wiki.seeedstudio.com/cn/r1225_quick_start/) 以登录。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_aws/aws9.webp" alt="pir" width={800} height="auto" /></p>

### LoRaWAN 网络设置

导航至 **LoRa** > **LoRa 网络**

**模式**： Basics Station

**网关 EUI**： 它将自动获取所连接网关的 EUI

**服务器**： 选择 CUPS 服务器或 LNS 服务器（对于 CUPS，端口为 443；对于 LNS，端口为 8887）

了解更多关于 [CUPS 和 LNS 服务器](https://lora-developers.semtech.com/build/software/lora-basics/lora-basics-for-gateways/)

**认证模式**： TLS 服务器和客户端认证

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_aws/aws10.png" alt="pir" width={800} height="auto" /></p>

完成设置后，点击保存并应用。

## 检查网关连接状态

导航到网关页面，选择您已添加的网关。

在网关详情页面的 LoRaWAN 特定详细信息部分，您将看到连接状态以及上次接收上行链路数据的日期和时间。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_aws/aws8.png" alt="pir" width={800} height="auto" /></p>

## AWS IoT 设备配置

### 添加配置文件

可以定义设备和服务配置文件来描述常见的设备配置。这些配置文件描述了设备共享的配置参数，以便更轻松地添加这些设备。适用于 LoRaWAN 的 AWS IoT Core 支持设备配置文件和服务配置文件。

#### 添加设备配置文件

导航至 **设备** > **配置文件**，点击添加设备配置文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS11.PNG" alt="pir" width={800} height="auto" /></p>

提供一个设备配置文件名称，选择您用于设备和网关的频段（RfRegion），并保持其他设置为默认值。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS10.PNG" alt="pir" width={800} height="auto" /></p>

#### 添加服务配置文件

导航至 **设备** > **配置文件**，点击添加服务配置文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS13.PNG" alt="pir" width={800} height="auto" /></p>

建议您保持启用 AddGWMetaData 设置，以便为每个有效载荷接收额外的网关元数据，例如数据传输的 RSSI 和 SNR。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS12.PNG" alt="pir" width={800} height="auto" /></p>

### 添加目的地

导航至 **设备** > **目的地**，点击添加目的地

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS15.PNG" alt="pir" width={800} height="auto" /></p>

发布到 AWS IoT Core 消息代理

**权限**： 选择现有服务角色 > IoT Wireless Gateway Cert Manager Role

:::tip 注意
目的地名称只能包含字母数字、-（连字符）和 _（下划线）字符，不能有任何空格。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS14.PNG" alt="pir" width={800} height="auto" /></p>

### 添加 LoRaWAN 设备

#### 添加无线设备

导航至 **LPWAN 设备** > **设备**，点击添加无线设备

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS18.PNG" alt="pir" width={800} height="auto" /></p>

#### 配置设备

**无线设备规范**： OTAAv1.0x

**DevEUI：** `device EUI/APP EUI/APP` 密钥可在设备标签上找到。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS17.PNG" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS20.PNG" alt="pir" width={800} height="auto" /></p>

#### 检查设备连接状态

导航到 **设备** 页面，选择您已添加的设备。

在无线设备详情页面的详细信息部分，您将看到上次接收上行链路数据的日期和时间。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS19.PNG" alt="pir" width={800} height="auto" /></p>
