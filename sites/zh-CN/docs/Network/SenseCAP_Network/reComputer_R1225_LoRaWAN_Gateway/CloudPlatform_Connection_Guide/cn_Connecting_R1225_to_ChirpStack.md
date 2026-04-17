---
description: 将 R1225 连接到 ChirpStack
title: 连接到 ChirpStack
keywords:
  - Gateway
  - SenseCAP
  - Edge Controller
  - reComputer R1225
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /connecting_r1225_to_chirpstack
sku: 100021896,100030154,100006298,100079154
last_update:
  date: 03/30/2026
  author: Kian
createdAt: '2026-03-30'
url: https://wiki.seeedstudio.com/cn/connecting_r1225_to_chirpstack/
updatedAt: '2026-04-08'
---
## ChirpStack 配置

ChirpStack 为 LoRaWAN 网络提供开源组件。它们共同构成了一个即用型解决方案，包括用于设备管理的用户友好型 Web 界面以及用于集成的 API。

### 添加网关

开始之前，请先[登录](https://www.chirpstack.io/application-server/use/login/)到 [ChirpStack 应用服务器](https://www.chirpstack.io/application-server/)。

默认凭据为：用户名：admin；密码：admin

:::tip 注意
如果您尚未将您的 [ChirpStack 应用服务器](https://www.chirpstack.io/project/application-server/) 实例与 [ChirpStack 网络服务器](https://www.chirpstack.io/project/network-server/) 实例连接，您需要先完成此操作。请参阅 [网络服务器](https://www.chirpstack.io/application-server/use/network-servers/)。同时，您需要通过创建 [服务配置文件](https://www.chirpstack.io/application-server/use/service-profiles/) 将组织与网络服务器连接。
:::

导航至 `Gateway` > `Add gateway`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Chirpstack4.png" alt="pir" width={800} height="auto" /></p>

输入 `Gateway Name` 和 `Gateway ID (EUI: 64)`

**网关名称**：您的网关名称

**网关 EUI**：网关 EUI 可在设备标签或本地控制台找到

**统计间隔（秒）**：网关发送其统计信息的预期间隔（秒）

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Chirpstack5.png" alt="pir" width={800} height="auto" /></p>

然后点击 `Submit`

### 添加设备配置文件

在将设备添加到 ChirpStack 之前，如果您尚未创建 [设备配置文件](https://www.chirpstack.io/application-server/use/device-profiles/)，则需要先创建一个。

导航至 **`Device profile` > `Add device profile`**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_3.png" alt="pir" width={800} height="auto" /></p>

**名称**：您的设备配置文件的名称

**区域**：根据您的网关选择区域计划。

**MAC 版本**：LoRaWAN 1.0.3

**区域参数修订版**：A

**ADR 算法**：默认 ADR 算法（仅限 LoRa）

:::note
请根据您的设备选择 MAC 版本/区域参数修订版/ADR 算法。详情请参考：https://lora-alliance.org/resource_hub/
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_4.png" alt="pir" width={800} height="auto" /></p>

### 添加设备

导航至 **`Application` > `Add Application`**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_5.png" alt="pir" width={800} height="auto" /></p>

点击您要添加设备的应用程序。在 **Devices** 选项卡下，点击 **Add device**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_6.png" alt="pir" width={800} height="auto" /></p>

**名称**：您的设备名称

**设备 EUI**：设备 EUI 可在设备标签或 SenseCAP Mate APP 中找到

**设备配置文件**：选择我们创建的设备配置文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_7.png" alt="pir" width={800} height="auto" /></p>

## 网关配置

通过 Web UI 配置网关，请先查看 [快速入门](https://files.seeedstudio.com/products/SenseCAP/M2_Multi-Platform_Gateway/Quick_Start_for_SenseCAP_Gateway_&_Sensors.pdf) 以登录本地控制台。

### LoRa 网络设置

导航至 **LoRa > LoRa Network**

**模式：** 数据包转发

数据包转发器设置：

**网关 EUI**：它将自动获取所连接网关的 EUI

**服务器地址**：您的 ChirpStack 服务器地址

**服务器端口（上行/下行）：** 1700

其他设置可以保持默认，或根据您的需求进行更改。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/chirpstack_packet_forwarder.png" alt="pir" width={800} height="auto" /></p>

### 信道计划设置

导航至 **`LoRa` > `Channel Plan`**

根据实际选择选择区域和频率计划。

设置完成后，点击 **Save&Apply**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/chirpstack_channel_plan.png" alt="pir" width={800} height="auto" /></p>

## 数据查看

### 网关数据

导航至 **`Gateways`**，选择您要查看的网关。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_12.png" alt="pir" width={800} height="auto" /></p>

### 设备数据

将您的 LoRaWAN 设备添加到 ChirpStack 后，验证您的设备是否能够激活（在 OTAA 情况下）并发送数据。

导航至 **Applications** > **Devices**，选择您要查看的设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_13.png" alt="pir" width={800} height="auto" /></p>
