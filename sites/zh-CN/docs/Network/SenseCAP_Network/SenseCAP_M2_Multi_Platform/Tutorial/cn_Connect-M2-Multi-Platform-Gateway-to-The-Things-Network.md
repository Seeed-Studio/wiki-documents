---
description: 将 SenseCAP M2 多平台网关连接到 TTN
title: 连接到 TTN
keywords:
  - SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-The-Things-Network
last_update:
  date: 07/14/2023
  author: Jessie
createdAt: '2023-02-24'
updatedAt: '2026-04-03'
url: https://wiki.seeedstudio.com/cn/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-The-Things-Network/
---
连接到 The Things Network 有两种方式：Packet forward 和 Basics™ Station。请选择一种方式来连接你的网关。

Semtech UDP Packet Forwarder 是最初的 LoRaWAN® 数据包转发器，通过 Semtech UDP 协议连接到服务器。

LoRa Basics™ Station 是将网关连接到 The Things Stack 的首选方式。

## **通过 Packet Forwarder 连接**

Semtech UDP Packet Forwarder 是最初的 LoRaWAN® 数据包转发器，通过 Semtech UDP 协议连接到服务器。

### TTN 配置

- **步骤 1**：登录 [The Things Stack](https://eu1.cloud.thethings.network/console)。如果你还没有 TTN 账号，请先注册。

- **步骤 2**：注册网关

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/register2.png" alt="pir" width={600} height="auto" /></p>

**Gateway EUI**：Gateway EUI 可以在设备标签或本地控制台中找到

**Gateway ID**：网关的唯一标识符（ID 只能包含小写字母、数字和短横线）

**Gateway name**：你的网关名称

**Frequency plan**：根据你的网关版本选择对应的频率计划

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/set1.png" alt="pir" width={600} height="auto" /></p>

成功注册后，你可以在总览页面查看该网关。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/set2.png" alt="pir" width={600} height="auto" /></p>

### 网关配置

通过 Web UI 配置网关，请先查看 [Quick Start](https://files.seeedstudio.com/products/SenseCAP/M2_Multi-Platform_Gateway/Quick_Start_for_SenseCAP_Gateway_&_Sensors.pdf) 以登录本地控制台。

- **步骤 1**：LoRa 网络设置

导航到 **LoRa** > **LoRa** **Network**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/lora_network.png" alt="pir" width={600} height="auto" /></p>

- **步骤 2：**将 Mode 设置为 Packet Forward

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/packet.png" alt="pir" width={600} height="auto" /></p>

- **步骤 3：**Packet Forwarder 设置：

1. **Gateway EUI**：会自动获取已连接网关的 EUI

2. **Server Address**：
对于 Semtech UDP Packet Forwarder 使用 'server-address'
'server-address' 是你的 The Things Stack 部署地址。
更多信息请参阅 [Server Addresses](https://www.thethingsindustries.com/docs/the-things-stack/concepts/server-addresses/)。

3. **Server Port(Up/Down)**：上行端口和下行端口通常为 1700。

其他设置可以保留默认值，或者根据你的需求进行更改。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/server_address.png" alt="pir" width={600} height="auto" /></p>

点击 **Save&Apply** 以应用你的设置。

- **步骤 4**：信道计划设置

导航到 **LoRa** > **LoRa Network**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/lora_network.png" alt="pir" width={600} height="auto" /></p>

根据实际选择的区域，选择对应的 Region 和 Frequency plan。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/setting3.png" alt="pir" width={600} height="auto" /></p>

设置完成后，点击 **Save&Apply**

## **通过 Basic Station 连接**

LoRa Basics™ Station 是将网关连接到 The Things Stack 的首选方式。

### TTN 配置

- **步骤 1**：注册网关

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/register2.png" alt="pir" width={600} height="auto" /></p>

- **步骤 2**：启用 Require authenticated connection

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/enable_setting.png" alt="pir" width={600} height="auto" /></p>

这将只允许使用启用 TLS 的 Basic Station 或 MQTT 连接的网关接入。

- **步骤 3：**创建 API key

选择一个选项，为 CUPS 或 LNS 服务自动生成一个 API key，然后你就可以立即授权网关。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/APIkey.png" alt="pir" width={600} height="auto" /></p>

根据你的需要选择一个 Server，然后点击 "Register gateway"

**LoRaWAN Network Server (LNS)**

LNS 在 LoRa Basics™ Station 网关与网络服务器（在本例中为 The Things Stack）之间建立数据连接。LoRa® 上行和下行数据帧通过该数据连接进行交换。发送和接收 LoRaWAN 数据需要使用 LNS 协议。

**Configuration and Update Server (CUPS)**

CUPS 允许网络服务器远程配置网关并更新网关固件。发送和接收 LoRaWAN 数据不需要 CUPS，但它可以极大简化网关管理。配置 CUPS 还会自动获取 LNS 凭据，并在你的网关上配置 LNS。

关于 LoRa Basics™ Station 的更多信息，请访问 [Semtech 的开发者门户](https://lora-developers.semtech.com/resources/tools/lora-basics/lora-basics-for-gateways/)。

### 网关配置

- **步骤 1**：LoRa 网络设置
导航到 **LoRa** > **LoRa Network**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/lora_network.png" alt="pir" width={600} height="auto" /></p>

- **步骤 2**：将 Mode 设置为 Basics Station

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/basic.png" alt="pir" width={600} height="auto" /></p>

- **步骤 3**：Basic Station 设置：

1. **Gateway EUI**：会自动获取已连接网关的 EUI

2. **Server**：选择 LNS 或 CUPS
更多关于这些 Server 的细节，请查看前面的步骤。

3. **URL：**
CUPS 使用 URI：https://server-address:443，LNS 使用 URI：wss://server-address:8887

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/url.png" alt="pir" width={600} height="auto" /></p>

4. **Authentication Mode：**TLS server authentication 和 Client token
The Things Stack 支持 TLS server authentication 和 client token。这需要一个 *.trust* 文件和一个 *.key* 文件。

5. **trust：**这是用于保护你域名安全的 [CA 证书](https://en.wikipedia.org/wiki/Certificate_authority)。
一个包含常用证书的 .pem 文件可在 [Root Certificates Reference](https://www.thethingsindustries.com/docs/reference/root-certificates/) 中获取。
下载 **minimal certificate list**，然后复制证书文件中的数据内容（证书可以以文本形式打开）。

6. **token：**Authorization:Bearer `<Your_API_Key>`

其他设置可以保留默认值，或者根据你的需求进行更改。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/token.png" alt="pir" width={600} height="auto" /></p>

## 检查网关状态

完成所有设置后，我们可以查看你的网关的实时数据。

你可以看到你的网关现在已经连接到 TTN。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/status.png" alt="pir" width={600} height="auto" /></p>
