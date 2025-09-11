---
description: 将 SenseCAP M2 多平台网关连接到 ChirpStack
title: 连接到 ChirpStack
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-ChirpStack
last_update:
  date: 08/29/2023
  author: Jessie
---


### ChirpStack 配置

ChirpStack 为 LoRaWAN 网络提供开源组件。它们共同构成了一个即用型解决方案，包括用于设备管理的用户友好 Web 界面和用于集成的 API。

#### 添加网关

开始之前，请先[登录](https://www.chirpstack.io/application-server/use/login/)到 [ChirpStack 应用服务器](https://www.chirpstack.io/application-server/)。

默认凭据为：用户名：admin；密码：admin

:::tip 注意
如果您尚未将 [ChirpStack 应用服务器](https://www.chirpstack.io/project/application-server/)实例与 [ChirpStack 网络服务器](https://www.chirpstack.io/project/network-server/)实例连接，您需要首先执行此操作。请参阅[网络服务器](https://www.chirpstack.io/application-server/use/network-servers/)。您还需要通过创建[服务配置文件](https://www.chirpstack.io/application-server/use/service-profiles/)将组织与网络服务器连接。
:::

导航到 **网关 > 添加网关**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/add-gateway.png" alt="pir" width={800} height="auto" /></p>

**网关名称**：您的网关名称

**网关 EUI**：网关 EUI 可以在设备标签或本地控制台上找到

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_2.png" alt="pir" width={800} height="auto" /></p>

#### 添加设备配置文件

在将设备添加到 ChirpStack 之前，如果您尚未创建[设备配置文件](https://www.chirpstack.io/application-server/use/device-profiles/)，则必须先创建一个。

导航到 **设备配置文件 > 添加设备配置文件**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_3.png" alt="pir" width={800} height="auto" /></p>

**名称**：您的设备配置文件名称

**区域**：根据您的网关选择区域计划。

**MAC 版本**：LoRaWAN 1.0.3

**区域参数修订版**：A

**ADR 算法**：默认 ADR 算法（仅限 LoRa）

:::note
根据您的设备选择 MAC 版本/区域参数修订版/ADR 算法。详情请参考：https://lora-alliance.org/resource_hub/
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_4.png" alt="pir" width={800} height="auto" /></p>

#### 添加设备

导航到 **应用程序 > 添加应用程序**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_5.png" alt="pir" width={800} height="auto" /></p>

点击您要添加设备的应用程序。在 **设备** 选项卡下，点击 **添加设备**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_6.png" alt="pir" width={800} height="auto" /></p>

**名称**：您的设备名称

**设备 EUI**：设备 EUI 可以在设备标签或 SenseCAP Mate APP 上找到

**设备配置文件**：选择我们在 1.2 步骤 1 中创建的设备配置文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_7.png" alt="pir" width={800} height="auto" /></p>

### 网关配置

通过 Web UI 配置网关，请查看[快速入门](https://files.seeedstudio.com/products/SenseCAP/M2_Multi-Platform_Gateway/Quick_Start_for_SenseCAP_Gateway_&_Sensors.pdf)以首先登录本地控制台。

#### LoRa 网络设置

导航到 **LoRa > LoRa 网络**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_8.png" alt="pir" width={800} height="auto" /></p>

**模式：** 数据包转发

数据包转发器设置：

**网关 EUI**：它将自动获取连接网关的 EUI

**服务器地址**：您的 ChirpStack 服务器地址

**服务器端口（上行/下行）**：1700

其他设置可以保持默认值，或者可以根据您的要求进行更改。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_9.png" alt="pir" width={800} height="auto" /></p>

#### 信道计划设置

导航到 **LoRa > 信道计划**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_10.png" alt="pir" width={800} height="auto" /></p>

根据实际选择选择区域和频率计划。

设置完成后，点击 **保存并应用**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_11.png" alt="pir" width={800} height="auto" /></p>

### 数据查看

#### 网关数据

导航到 **网关**，选择您要检查的网关。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_12.png" alt="pir" width={800} height="auto" /></p>

#### 设备数据

将 LoRaWAN 设备添加到 ChirpStack 后，验证您的设备能够激活（在 OTAA 情况下）并发送数据。

导航到 **应用程序** > **设备**，选择您要检查的设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_13.png" alt="pir" width={800} height="auto" /></p>
