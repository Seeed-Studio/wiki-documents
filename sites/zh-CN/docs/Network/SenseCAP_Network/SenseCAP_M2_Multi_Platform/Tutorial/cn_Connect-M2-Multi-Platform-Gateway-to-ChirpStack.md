---
description: 将 SenseCAP M2 多平台网关连接到 ChirpStack
title: 连接到 ChirpStack
keywords:
  - SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-ChirpStack
last_update:
  date: 08/29/2023
  author: Jessie
createdAt: '2023-02-24'
updatedAt: '2026-04-03'
url: https://wiki.seeedstudio.com/cn/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-ChirpStack/
---
### ChirpStack 配置

ChirpStack 为 LoRaWAN 网络提供开源组件。它们组合在一起，形成一个开箱即用的解决方案，包括用于设备管理的用户友好型 Web 界面和用于集成的 API。

#### 添加网关

在开始之前，请先[登录](https://www.chirpstack.io/application-server/use/login/)到 [ChirpStack Application Server](https://www.chirpstack.io/application-server/)。

默认登录凭据为：用户名：admin；密码：admin

:::tip 注意
如果你还没有将你的 [ChirpStack Application Server](https://www.chirpstack.io/project/application-server/) 实例与 [ChirpStack Network Server](https://www.chirpstack.io/project/network-server/) 实例连接起来，你需要先完成这一步。请参阅 [Network servers](https://www.chirpstack.io/application-server/use/network-servers/)。此外，你还需要通过创建一个 [Service profile](https://www.chirpstack.io/application-server/use/service-profiles/) 将组织与 network-server 连接起来。
:::

导航到 **Gateways > Add gateway**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/add-gateway.png" alt="pir" width={800} height="auto" /></p>

**Gateway name**：你的网关名称

**Gateway EUI**：网关 EUI 可以在设备标签或本地控制台（Local Console）中找到

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_2.png" alt="pir" width={800} height="auto" /></p>

#### 添加设备配置文件

在你可以将设备添加到 ChirpStack 之前，如果你还没有创建 [Device-profile](https://www.chirpstack.io/application-server/use/device-profiles/)，则必须先创建一个。

导航到 **Device profile > Add device profile**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_3.png" alt="pir" width={800} height="auto" /></p>

**Name**：你的设备配置文件名称

**Region**：根据你的网关选择 Region 方案。

**MAC version**：LoRaWAN 1.0.3

**Regional parameters revision**：A

**ADR algorithm**：默认 ADR 算法（仅 LoRa）

:::note
请根据你的设备选择 MAC version/Regional parameters revision/ADR algorithm。详情请参考：https://lora-alliance.org/resource_hub/
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_4.png" alt="pir" width={800} height="auto" /></p>

#### 添加设备

导航到 **Application > Add Application**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_5.png" alt="pir" width={800} height="auto" /></p>

点击你想要添加设备的应用。在 **Devices** 选项卡下，点击 **Add device**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_6.png" alt="pir" width={800} height="auto" /></p>

**Name**：你的设备名称

**Device EUI**：Device EUI 可以在设备标签或 SenseCAP Mate APP 中找到

**Device profile**：选择我们在 1.2 第 1 步中创建的设备配置文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_7.png" alt="pir" width={800} height="auto" /></p>

### 网关配置

通过 Web UI 配置网关，请先查看 [Quick Start](https://files.seeedstudio.com/products/SenseCAP/M2_Multi-Platform_Gateway/Quick_Start_for_SenseCAP_Gateway_&_Sensors.pdf) 以登录本地控制台（Local Console）。

#### LoRa 网络设置

导航到 **LoRa > LoRa Network**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_8.png" alt="pir" width={800} height="auto" /></p>

**Mode:** Packet Forward

Packet Forwarder 设置：

**Gateway EUI**：会自动获取已连接网关的 EUI

**Server Address**：你的 ChirpStack 服务器地址

**Server Port(Up/Down)**：1700

其他设置可以保持默认，或者根据你的需求进行更改。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_9.png" alt="pir" width={800} height="auto" /></p>

#### 信道计划设置

导航到 **LoRa > Channel Plan**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_10.png" alt="pir" width={800} height="auto" /></p>

根据实际选择，选择 Region 和频率计划。

设置完成后，点击 **Save&Apply**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_11.png" alt="pir" width={800} height="auto" /></p>

### 数据查看

#### 网关数据

导航到 **Gateways**，选择你要查看的网关。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_12.png" alt="pir" width={800} height="auto" /></p>

#### 设备数据

将 LoRaWAN 设备添加到 ChirpStack 后，请验证你的设备是否能够激活（若为 OTAA）并发送数据。

导航到 **Applications** > **Devices**，选择你要查看的设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_13.png" alt="pir" width={800} height="auto" /></p>
