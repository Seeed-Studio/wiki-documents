---
description: 我应该选择哪个 LoRaWAN 网络
title: 我应该选择哪个 LoRaWAN 网络
keywords:
- LoRaWAN
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/select_lorawan_network
last_update:
  date: 1/9/2023
  author: Jessie
---


在快速扩张的物联网（IoT）领域中，LoRaWAN 网络因其为各种物联网应用提供的远距离和低功耗通信能力而大受欢迎。最近，我们收到了大量询问："**我应该为我的特定项目选择哪个 LoRaWAN 网络？**"

在本文中，我们将带您了解 LoRaWAN 网络的组成部分，探讨公共和私有 LoRaWAN 网络之间的差异，并提供参考资料帮助您做出明智的决定。

### 什么是 LoRaWAN 网络？

**LoRaWAN**（长距离广域网）是一种专为低功耗、长距离通信设计的无线协议，使物联网（IoT）设备能够连接并与服务器或应用程序交换数据。
它为在智慧城市、农业、资产跟踪、环境监测等广泛应用中部署物联网设备提供了经济高效且安全的解决方案。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/lorawan-server.png" alt="pir" width={800} height="auto" /></p>

### LoRaWAN 网络是如何工作的？

典型的 LoRaWAN 网络由以下基本元素组成：终端设备、网关、网络服务器和应用服务器。

终端设备与附近的网关通信，网关连接到网络服务器。网络服务器将数据转发到应用服务器。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/lorawan-server2.png" alt="pir" width={800} height="auto" /></p>

### 公共 LNS 和私有 LNS 之间的差异

LoRaWAN 网络可以大致分为公共或私有网络。公共 LoRaWAN 网络依赖于网络提供商如 TTN、Helium 等，而私有网络将网关和服务器等网络元素置于用户控制之下。您可以选择公共 LNS，或构建自己的私有网络。

|因素|公共 LoRaWAN 网络|私有 LoRaWAN 网络|
|--|--|--|
|所有权| 由网络提供商管理|在用户控制之下|
|覆盖范围|在特定区域可用|自由覆盖您关心的区域|
|安全性|共享基础设施 |增强的控制和安全性|
|设置成本|相对较低的入门成本|启动时需要大量基础设施成本|
|数据传输成本|终端设备数据传输的高订阅费用|无订阅费用|

公共和私有 LoRaWAN 网络之间的选择很大程度上取决于您项目的性质和要求。以下是简要概述：

**私有 LoRaWAN 网络适用于：**

- 需要安全端到端数据完整性的工业自动化网络。
- 需要设备间超安全通信的医疗应用。
- 涉及敏感信息的智能建筑安全系统。

**公共 LoRaWAN 网络适用于：**

- 农业场景，如作物监测。
- 智慧城市应用，如交通监控、智能照明和智能停车系统。

### 如果我选择公共 LoRaWAN 网络，我应该怎么做？

如果您正在考虑公共 LoRaWAN 网络，有几个全球提供商可供选择，包括 TTN、Helium、Loriot 和 Chirp Stack 等。为了做出最终决定，您可以考虑以下因素：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/lorawan-map.png" alt="pir" width={800} height="auto" /></p>

#### 我所在的地区是否有公共 LoRaWAN 网络？

通过访问 Semtech 的 LoRa 生态系统[网络提供商](https://www.semtech.com/lora/ecosystem/networks)页面，或查阅 LoRa 联盟的[全球覆盖地图](https://lora-alliance.org/#tabs-1)，确定您所在地区是否有公共 LoRaWAN 网络。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/lorawan-map2.png" alt="pir" width={800} height="auto" /></p>

为了帮助您选择最合适的提供商和开发区域，我们建议进行现场测试，[Wio Terminal LoRaWAN 现场测试仪](https://www.seeedstudio.com/WioField-Tester-Kit-p-5282.html)将特别帮助您了解在给定位置周围可以接触到多少个网关，丰富网络映射器以便彼此了解并共享真实的网络覆盖情况。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/server-helium.png" alt="pir" width={700} height="auto" /></p>

### 如果我选择私有 LoRaWAN 网络，我应该怎么做？

构建私有 LoRaWAN 网络可能是一个可行的选择，特别是对于工厂或校园等常规区域部署。典型的私有 LoRaWAN 网络涉及三个主要组件——LoRaWAN 设备、网关和服务器，以下是您可能需要考虑的事项：

#### 我应该选择什么网关？

要构建自己的 LoRaWAN 网络，首先要选择合适的网关，它在连接终端设备和网络服务器方面发挥重要作用。网关有很多类型，在做选择时，要考虑成本、功能和部署选项等因素。为了快速简便的设置，只需查看 [SenseCAP 多平台 LoRaWAN 室内网关](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html) - 它就像设置 Wi-Fi 路由器一样简单，并配有内置的 ChirpStack LNS。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/server-gateway.png" alt="pir" width={800} height="auto" /></p>

#### 开始部署您的终端设备

一旦您的网关设置完成，就该部署您的第一个设备了！试试 [SenseCAP T1000 LoRaWAN 追踪器](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html)，这是真正可靠追踪解决方案的理想选择。

在部署终端设备时，您可能想知道有多少设备可以连接到一个网关。答案取决于几个变量，特别是终端设备传输的数据载荷大小及其指定的传输间隔，环境条件也在这一评估中发挥作用。要确定在不冒数据包丢失风险的情况下支持的最大设备数量，在部署现场进行实际实验通常是最可靠的方法。

通常，一个网关可以处理来自数百个设备的消息，对于 [SenseCAP 多平台 LoRaWAN 室内网关](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html)，它允许连接大约 600 个 [SenseCAP T1000 LoRaWAN 追踪器](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html)（5 分钟上传间隔）。

现在您对 LoRaWAN 网络的可用选项有了更好的了解，在部署基于 LoRa 的应用时可以做出自信的决定。让我们通过设置您的第一个网关来开始 LoRaWAN 之旅！
