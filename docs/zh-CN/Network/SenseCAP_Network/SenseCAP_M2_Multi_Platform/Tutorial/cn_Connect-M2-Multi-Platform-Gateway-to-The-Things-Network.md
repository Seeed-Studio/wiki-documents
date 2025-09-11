---
description: 将 SenseCAP M2 多平台网关连接到 TTN
title: 连接到 TTN
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-The-Things-Network
last_update:
  date: 07/14/2023
  author: Jessie
---


有两种方式连接到 Things Network：数据包转发和 Basics™ Station。选择一种方式连接您的网关。

Semtech UDP 数据包转发器是原始的 LoRaWAN® 数据包转发器，通过 Semtech UDP 协议连接到服务器。

LoRa Basics™ Station 是将网关连接到 The Things Stack 的首选方式。

## **通过数据包转发器连接**

Semtech UDP 数据包转发器是原始的 LoRaWAN® 数据包转发器，通过 Semtech UDP 协议连接到服务器。

### TTN 配置

- **步骤 1**：登录 [The Things Stack](https://eu1.cloud.thethings.network/console)。如果您没有 TTN 账户，请先注册。

- **步骤 2**：注册网关

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/register2.png" alt="pir" width={600} height="auto" /></p>

**Gateway EUI**：网关 EUI 可以在设备标签或本地控制台上找到

**Gateway ID**：您网关的唯一标识符（ID 必须只包含小写字母、数字和破折号）

**Gateway name**：您网关的名称

**Frequency plan**：根据您的网关版本选择相应的频率

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/set1.png" alt="pir" width={600} height="auto" /></p>

成功注册后，您可以在概览中查看网关。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/set2.png" alt="pir" width={600} height="auto" /></p>

### 网关配置

通过 Web UI 配置网关，请查看[快速开始](https://files.seeedstudio.com/products/SenseCAP/M2_Multi-Platform_Gateway/Quick_Start_for_SenseCAP_Gateway_&_Sensors.pdf)以首先登录本地控制台。

- **步骤 1**：LoRa 网络设置

导航到 **LoRa** > **LoRa** **Network**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/lora_network.png" alt="pir" width={600} height="auto" /></p>

- **步骤 2**：将模式设置为数据包转发

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/packet.png" alt="pir" width={600} height="auto" /></p>

- **步骤 3**：数据包转发器设置：

1. **Gateway EUI**：它将自动获取已连接网关的 EUI

2. **Server Address**：
对于 Semtech UDP 数据包转发器，使用 'server-address'
'server-address' 是您的 The Things Stack 部署的地址。
更多信息请参见[服务器地址](https://www.thethingsindustries.com/docs/the-things-stack/concepts/server-addresses/)。

3. **Server Port(Up/Down)**：上行端口和下行端口通常为 1700。

其他设置可以保持默认值，或者可以根据您的要求进行更改。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/server_address.png" alt="pir" width={600} height="auto" /></p>

点击 **Save&Apply** 应用您的设置。

- **步骤 4**：信道计划设置

导航到 **LoRa** > **LoRa Network**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/lora_network.png" alt="pir" width={600} height="auto" /></p>

根据实际选择选择区域和频率计划。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/setting3.png" alt="pir" width={600} height="auto" /></p>

设置完成后，点击 **Save&Apply**

## **通过 Basic Station 连接**

LoRa Basics™ Station 是将网关连接到 The Things Stack 的首选方式。

### TTN 配置

- **步骤 1**：注册网关

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/register2.png" alt="pir" width={600} height="auto" /></p>

- **步骤 2**：启用需要认证连接

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/enable_setting.png" alt="pir" width={600} height="auto" /></p>

这将只允许使用启用 TLS 的 Basic Station 或 MQTT 连接的网关进行连接。

- **步骤 3**：创建 API 密钥

选择一个选项为 CUPS 或 LNS 服务自动生成 API 密钥，然后您可以立即授权网关。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/APIkey.png" alt="pir" width={600} height="auto" /></p>

根据您的需要选择一个服务器，然后点击"注册网关"

**LoRaWAN 网络服务器 (LNS)**

LNS 在 LoRa Basics™ Station 网关和网络服务器（在这种情况下是 The Things Stack）之间建立数据连接。LoRa® 上行链路和下行链路帧通过此数据连接进行交换。LNS 协议是发送和接收 LoRaWAN 数据所必需的。

**配置和更新服务器 (CUPS)**

CUPS 允许网络服务器远程配置网关，并更新网关固件。CUPS 不是发送和接收 LoRaWAN 数据所必需的，但它可以大大简化网关的管理。配置 CUPS 还将自动检索 LNS 凭据并在您的网关上配置 LNS。

有关 LoRa Basics™ Station 的更多信息，请访问 [Semtech 开发者门户](https://lora-developers.semtech.com/resources/tools/lora-basics/lora-basics-for-gateways/)。

### 网关配置

- **步骤 1**：LoRa 网络设置
导航到 **LoRa** > **LoRa Network**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/lora_network.png" alt="pir" width={600} height="auto" /></p>

- **步骤 2**：将模式设置为 Basics Station

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/basic.png" alt="pir" width={600} height="auto" /></p>

- **步骤 3**：Basic Station 设置：

1. **Gateway EUI**：它将自动获取已连接网关的 EUI

2. **服务器**：选择 LNS 或 CUPS
查看前面的步骤以了解有关服务器的更多详细信息。

3. **URL：**
CUPS 使用 URI：https://server-address:443, LNS 使用 URI：wss://server-address:8887

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/url.png" alt="pir" width={600} height="auto" /></p>

4. **认证模式：** TLS 服务器认证和客户端令牌
The Things Stack 支持 TLS 服务器认证和客户端令牌。这需要一个 *.trust* 文件和一个 *.key* 文件。

5. **trust：** 这是保护您域名的 [CA 证书](https://en.wikipedia.org/wiki/Certificate_authority)。
包含常用证书的 .pem 文件可在 [根证书参考](https://www.thethingsindustries.com/docs/reference/root-certificates/) 中获得。
下载**最小证书列表**，然后复制证书文件的数据内容（证书可以以文本形式打开）。

6. **token：** Authorization:Bearer `<Your_API_Key>`

其他设置可以保持默认值，或者可以根据您的要求进行更改。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/token.png" alt="pir" width={600} height="auto" /></p>

## 检查网关状态

设置完成后，我们可以查看您网关的实时数据。

您可以看到您的网关现在已连接到 TTN。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/status.png" alt="pir" width={600} height="auto" /></p>
