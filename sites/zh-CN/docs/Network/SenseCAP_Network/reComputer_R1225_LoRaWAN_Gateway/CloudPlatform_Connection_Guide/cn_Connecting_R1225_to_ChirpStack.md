---
description: 将 R1225 连接到 ChirpStack
title: 连接到 ChirpStack
keywords:
  - 网关
  - SenseCAP
  - 边缘控制器
  - reComputer R1225
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /connecting_r1225_to_chirpstack
sku: 100021896,100030154,100006298,100079154
last_update:
  date: 03/30/2026
  author: Kian
createdAt: '2026-03-30'
url: https://wiki.seeedstudio.com/cn/connecting_r1225_to_chirpstack/
updatedAt: '2026-03-30'
---
## ChirpStack 配置

ChirpStack 为 LoRaWAN 网络提供开源组件。它们一起构成了一套开箱即用的解决方案，包括用于设备管理的用户友好型 Web 界面以及用于集成的 API。

### 添加网关

在开始之前，请先[登录](https://www.chirpstack.io/application-server/use/login/)到 [ChirpStack Application Server](https://www.chirpstack.io/application-server/)。

默认凭据为：用户名：admin；密码：admin

:::tip Note
如果你尚未将你的 [ChirpStack Application Server](https://www.chirpstack.io/project/application-server/) 实例与 [ChirpStack Network Server](https://www.chirpstack.io/project/network-server/) 实例连接起来，你需要先完成该操作。请参阅 [Network servers](https://www.chirpstack.io/application-server/use/network-servers/)。此外，你还需要通过创建一个 [Service profile](https://www.chirpstack.io/application-server/use/service-profiles/) 将组织与 network-server 连接起来。
:::

导航到 `Gateway` > `Add gateway`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Chirpstack4.png" alt="pir" width={800} height="auto" /></p>

输入 `Gateway Name` 和 `Gateway ID (EUI: 64)`

**Gateway name**：你的网关名称

**Gateway EUI**：网关 EUI 可在设备标签或本地控制台上找到

**Stats interval(secs)**：网关发送统计信息的预期时间间隔（秒）

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Chirpstack5.png" alt="pir" width={800} height="auto" /></p>

然后点击 `Submit`

### 添加设备配置文件

在你将设备添加到 ChirpStack 之前，如果你还没有创建 [Device-profile](https://www.chirpstack.io/application-server/use/device-profiles/)，则必须先创建一个。

导航到 **`Device profile` > `Add device profile`**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_3.png" alt="pir" width={800} height="auto" /></p>

**Name**：你的设备配置文件名称

**Region**：根据你的网关选择对应的区域计划。

**MAC version**：LoRaWAN 1.0.3

**Regional parameters revision**：A

**ADR algorithm**：默认 ADR 算法（仅 LoRa）

:::note
请根据你的设备选择 MAC version/Regional parameters revision/ADR algorithm。详情请参考：https://lora-alliance.org/resource_hub/
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_4.png" alt="pir" width={800} height="auto" /></p>

### 添加设备

导航到 **`Application` > `Add Application`**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_5.png" alt="pir" width={800} height="auto" /></p>

点击你想要添加设备的应用。在 **Devices** 选项卡下，点击 **Add device**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_6.png" alt="pir" width={800} height="auto" /></p>

**Name**：你的设备名称

**Device EUI**：设备 EUI 可在设备标签或 SenseCAP Mate APP 中找到

**Device profile**：选择我们在 1.2 第 1 步中创建的设备配置文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_7.png" alt="pir" width={800} height="auto" /></p>

## 网关配置

通过 Web UI 配置网关，请先查阅 [Quick Start](https://files.seeedstudio.com/products/SenseCAP/M2_Multi-Platform_Gateway/Quick_Start_for_SenseCAP_Gateway_&_Sensors.pdf) 登录本地控制台。

### LoRa 网络设置

导航到 **LoRa > LoRa Network**

**Mode:** Packet Forward

Packet Forwarder 设置：

**Gateway EUI**：会自动获取已连接网关的 EUI

**Server Address**：你的 ChirpStack 服务器地址

**Server Port(Up/Down)**：1700

其他设置可以保持默认，或者根据你的需求进行更改。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/chirpstack_packet_forwarder.png" alt="pir" width={800} height="auto" /></p>

### 信道计划设置

导航到 **`LoRa` > `Channel Plan`**


根据实际选择，选择区域和频率计划。

设置完成后，点击 **Save&Apply**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/chirpstack_channel_plan.png" alt="pir" width={800} height="auto" /></p>

## 数据查看

### 网关数据

导航到 **`Gateways`**，选择你想要查看的网关。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_12.png" alt="pir" width={800} height="auto" /></p>

### 设备数据

在将 LoRaWAN 设备添加到 ChirpStack 之后，确认你的设备能够激活（如果是 OTAA）并发送数据。

导航到 **Applications** > **Devices**，选择你想要查看的设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_13.png" alt="pir" width={800} height="auto" /></p>