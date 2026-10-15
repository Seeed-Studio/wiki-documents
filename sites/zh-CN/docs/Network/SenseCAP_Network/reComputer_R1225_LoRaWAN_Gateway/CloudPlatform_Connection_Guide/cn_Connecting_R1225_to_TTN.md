---
description: 将 R1225 连接到 TTN
title: 连接到 TTN
keywords:
  - 网关
  - SenseCAP
  - 边缘控制器
  - reComputer R1225
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /connecting_r1225_to_ttn
sku: 100021896,100030154,100006298,100079154
last_update:
  date: 03/30/2026
  author: Kian
createdAt: '2026-03-30'
url: https://wiki.seeedstudio.com/cn/connecting_r1225_to_ttn/
updatedAt: '2026-04-07'
---
# 连接到 TTN

有两种方式连接到 The Things Network：Packet forward 和 Basics™ Station。选择一种方式来连接你的网关。

Semtech UDP Packet Forwarder 是最初的 LoRaWAN® 数据包转发器，通过 Semtech UDP 协议连接到服务器。

LoRa Basics™ Station 是将网关连接到 The Things Stack 的首选方式。

## **通过 Packet Forwarder 连接**

Semtech UDP Packet Forwarder 是最初的 LoRaWAN® 数据包转发器，通过 Semtech UDP 协议连接到服务器。

### TTN 配置

- **步骤 1**：登录 [The Things Stack](https://eu1.cloud.thethings.network/console)。如果你还没有 TTN 账户，请先注册。

- **步骤 2**：注册网关

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_ttn/TTN1.png" alt="pir" width={800} height="auto" /></p>

**Gateway EUI**：Gateway EUI 可以在设备标签或本地控制台上找到

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_ttn/TTN2.png" alt="pir" width={800} height="auto" /></p>

**Gateway ID**：网关的唯一标识符（ID 只能包含小写字母、数字和短横线）

**Gateway name**：你的网关名称

**Frequency plan**：根据你的网关版本选择对应的频段计划

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_ttn/TTN3.png" alt="pir" width={800} height="auto" /></p>

### 网关配置

通过 Web UI 配置网关，请先查看 [Quick Start](https://wiki.seeedstudio.com/cn/r1225_quick_start/) 以登录本地控制台。

- **步骤 1**：LoRa 网络设置

进入 `LoRa` > `LoRa Network`

- **步骤 2：** 将 Mode 设置为 Packet Forwarder

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_ttn/TTN4.png" alt="pir" width={800} height="auto" /></p>

- **步骤 3：**Packet Forwarder 设置：

1. **Gateway EUI**：会自动获取已连接网关的 EUI

2. **Server Address**：
对于 Semtech UDP Packet Forwarder，使用“server-address”
“server-address”是你 The Things Stack 部署的地址。
更多信息请参阅 [Server Addresses](https://www.thethingsindustries.com/docs/the-things-stack/concepts/server-addresses/)。

3. **Server Port(Up/Down)**：Up 端口和 Down 端口通常为 1700。

其他设置可以保持默认，或根据你的需求进行更改。

点击 **`Save&Apply`** 以应用你的设置。

- **步骤 4**：信道计划设置

进入  `LoRa` >  `Channel Plan`

根据实际选择的地区和频段计划进行设置。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_ttn/TTN5.png" alt="pir" width={800} height="auto" /></p>

设置完成后，点击 **`Save&Apply`**

## **通过 Basic Station 连接**

LoRa Basics™ Station 是将网关连接到 The Things Stack 的首选方式。

### TTN 配置

- **步骤 1**：登录 [The Things Stack](https://eu1.cloud.thethings.network/console)。如果你还没有 TTN 账户，请先注册。

- **步骤 2**：注册网关

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_ttn/TTN1.png" alt="pir" width={800} height="auto" /></p>

**Gateway EUI**：Gateway EUI 可以在设备标签或本地控制台上找到

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_ttn/TTN2.png" alt="pir" width={800} height="auto" /></p>

**Gateway ID**：网关的唯一标识符（ID 只能包含小写字母、数字和短横线）

**Gateway name**：你的网关名称

**Frequency plan**：根据你的网关版本选择对应的频段计划

- **步骤 3**：启用 Require authenticated connection

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_ttn/TTN6.png" alt="pir" width={800} height="auto" /></p>

这样只允许使用启用 TLS 的 Basic Station 或 MQTT 连接的网关进行连接。

- **步骤 4：** 创建 API 密钥

选择一个选项，为 CUPS 或 LNS 服务自动生成 API 密钥，然后你可以立即授权网关。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_ttn/TTN7.png" alt="pir" width={800} height="auto" /></p>

根据你的需要选择一个 Server，然后点击“Register gateway”

#### (LNS)LoRaWAN Network Server

LNS 在 LoRa Basics™ Station 网关与网络服务器（本例中为 The Things Stack）之间建立数据连接。LoRa® 上行链路和下行链路帧通过此数据连接进行交换。LNS 协议是发送和接收 LoRaWAN 数据所必需的。

#### (CUPS)Configuration and Update Server 

CUPS 允许网络服务器远程配置网关，并更新网关固件。CUPS 对于发送和接收 LoRaWAN 数据不是必需的，但它可以极大地简化网关的管理。配置 CUPS 也会自动获取 LNS 凭据并在你的网关上配置 LNS。

关于 LoRa Basics™ Station 的更多信息可在 [Semtech's Developer Portal](https://lora-developers.semtech.com/resources/tools/lora-basics/lora-basics-for-gateways/) 中获取。

### 网关配置

- **步骤 1**：LoRa 网络设置
进入 **`LoRa`** > **`LoRa Network`**

- **步骤 2**：将 Mode 设置为 Basics Station

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_ttn/TTN8.png" alt="pir" width={800} height="auto" /></p>

凭据与在 TTN 平台上选择的 API 密钥相匹配。

- **步骤 3**：Basic Station 设置：

1. **Gateway EUI**：会自动获取已连接网关的 EUI

2. **Server**：选择 LNS 或 CUPS
有关服务器的更多详细信息，请参阅前面的步骤。

3. **URL：**
CUPS 使用 URI：https://server-address:443 ，LNS 使用 URI：wss://server-address:8887

4. **Authentication Mode：** TLS 服务器认证和客户端令牌
The Things Stack 支持 TLS 服务器认证和客户端令牌。这需要一个 *.trust* 文件和一个 *.key* 文件。

5. **trust：** 这是用于保护你的域的[CA 证书](https://en.wikipedia.org/wiki/Certificate_authority)。
包含常用证书的 .pem 文件可在 [Root Certificates Reference](https://www.thethingsindustries.com/docs/reference/root-certificates/) 中获取。
下载**最小证书列表**，然后复制证书文件的数据内容（证书可以以文本形式打开）。

6. **token：** Authorization:Bearer `<Your_API_Key>`

其他设置可以保持默认，或根据你的需求进行更改。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_ttn/TTN9.png" alt="pir" width={800} height="auto" /></p>

## 检查网关状态

设置完成后，我们可以查看网关的实时数据。

你可以看到你的网关现在已经连接到 TTN。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_ttn/TTN.png" alt="pir" width={800} height="auto" /></p>