---
description: SenseCAP M2 多平台网关 LNS 配置
title: LNS 配置
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_m2_LNS_config
last_update:
  date: 08/29/2023
  author: Jessie
---


SenseCAP M2 多平台网关内置了 LoRaWAN 网络服务器，基于 Chirpstack，为启动 LoRaWAN 网络提供快速可靠的解决方案。

## 网关配置

通过 Web UI 配置网关，请查看[快速入门](https://files.seeedstudio.com/products/SenseCAP%20M2/Quick%20Start%20for%20SenseCAP%20M2%20Multi-Platfrom%20Gateway%20&%20Sensors.pdf)以登录 Luci。

### 信道计划设置

导航到 `LoRa` > `Channel Plan`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP3.png" alt="pir" width={800} height="auto" /></p>

选择区域和频率计划。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP4.png" alt="pir" width={800} height="auto" /></p>

设置完成后，点击 `Save&Apply`

### 本地网络服务器配置

导航到 `LoRa` > `LoRa Network`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP1.png" alt="pir" width={800} height="auto" /></p>

将模式设置为 `Local Network Server`，添加您的 MQTT 信息（代理主机/端口/用户/密码），其他参数可以保持默认值。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP2.png" alt="pir" width={800} height="auto" /></p>

点击 `Save&Apply` 应用您的设置。

:::tip 注意
启动过程大约需要 1 分钟，然后您可以访问 GUI 配置。
:::

## ChirpStack GUI 配置

通过 `http://localhost:8080` 登录 ChirpStack GUI。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP.png" alt="pir" width={800} height="auto" /></p>

默认账户和密码：`admin`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP5.png" alt="pir" width={800} height="auto" /></p>

然后您将看到仪表板页面。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP6.png" alt="pir" width={800} height="auto" /></p>

### 检查区域

导航到 `Network Server` > `Regions`。

应该有一个区域 ID，点击它并确认信息，它应该与您在前面步骤中的设置相同。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP7.png" alt="pir" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP8.png" alt="pir" width={800} height="auto" /></p>

### 添加设备配置文件

导航到 `Tenant` > `Device Profiles`，然后点击 `Add Profile`。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP9.png" alt="pir" width={800} height="auto" /></p>

**MAC version**: LoRaWAN 1.0.3

**Regional parameters reversion**: A

**ADR algorithm**: Default ADR algorithm(LoRa only)

**Expected uplink interval**: 自定义，默认 3600s

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP10.png" alt="pir" width={800} height="auto" /></p>

导航到 `Codec`，选择 `JavaScript functions`，复制 [SenseCAP Decoder for TTN](https://github.com/Seeed-Solution/SenseCAP-Decoder) 并提交。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/decode.png" alt="pir" width={800} height="auto" /></p>

### 添加网关

导航到 `Gateway`，然后点击 `Add Gateway`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP11.png" alt="pir" width={800} height="auto" /></p>

定义名称和网关 ID（您可以点击随机生成 ID），然后提交。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP13.png" alt="pir" width={800} height="auto" /></p>

### 添加设备

导航到 `Tenant` > `Application`，然后点击 `Add Application`。

为您的应用程序命名并提交。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/add-applications.png" alt="pir" width={800} height="auto" /></p>

导航到您的应用程序，然后点击 `Add device`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP14.png" alt="pir" width={800} height="auto" /></p>

粘贴您的设备 EUI 并选择我们之前添加的设备配置文件，然后提交。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP15.png" alt="pir" width={800} height="auto" /></p>

粘贴应用程序密钥并点击提交。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP16.png" alt="pir" width={800} height="auto" /></p>

:::tip
请查看用户指南以正确设置设备，选择平台为 `Other Platform`。
:::

### 检查设备状态

检查您设备的 `Events`，当设备加入网络时，您将获得加入数据包。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP17.png" alt="pir" width={800} height="auto" /></p>

您还可以查看数据包详细信息。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP18.png" alt="pir" width={800} height="auto" /></p>

## 集成

本章节用于云服务开发，以下指南仅供参考。

### MQTT

#### 主题

MQTT 集成公开了事件类型文档中记录的所有事件。

默认事件主题是：

```cpp
application/APPLICATION_ID/device/DEV_EUI/event/EVENT
```

查看 [事件类型](https://www.chirpstack.io/docs/chirpstack/integrations/events.html) 了解更多详情。

您可以在应用程序选项卡中找到应用程序 ID：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP19.png" alt="pir" width={800} height="auto" /></p>

- **事件类型**

|up|上行链路事件|
| - | - |
|status|边际和电池状态|
|join|设备加入事件|
|ack|确认下行链路 (n)ack|
|txack|下行链路传输确认|
|log|日志（或错误）事件|
|location|位置事件|
|integration|集成事件|

:::info Note
`+` 表示接收所有消息
:::

**示例**：

- 接收特定网关下所有设备的上行链路消息：

```cpp
gateway/<GATEWAY_EUI>/device/+/event/up
```

- 接收来自应用程序下所有设备的所有消息:

```cpp
application/+/device/+/event/+
```
- 接收来自所有网关的所有设备消息：

```cpp
gateway/+/device/+/event/+
```

您可以通过检查 `gatewayid` 来区分网关。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/gateway-id.png" alt="pir" width={800} height="auto" /></p>

#### 载荷

当 object.valid 为 true 时，表示数据解析成功，然后您可以遍历 object.messages，并提取您需要的数据类型。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP20.png" alt="pir" width={800} height="auto" /></p>

1) SenseCAP LoRaWAN S210X 传感器载荷示例描述的上行事件：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP21.png" alt="pir" width={800} height="auto" /></p>

- `upload_battery`：电池
- `upload_interval`：上传间隔，单位：秒
- `upload_version`：硬件/固件版本
- `report_telemetry`：测量值

'report_telemetry' 消息中的 `measurementId` 请查看 [SenseCAP 测量 ID](https://sensecap-statics.seeed.cn/hardware/lorapp/httpserver/src/constants/sensor-name-lang-dictionary.json) 了解更多详情。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP22.png" alt="pir" width={800} height="auto" /></p>

1) SenseCAP 数据记录器载荷示例描述的上行事件：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP23.png" alt="pir" width={600} height="auto" /></p>

'report_telemetry' 消息中的 `measurementId` 请查看 [SenseCAP 测量 ID](https://sensecap-statics.seeed.cn/hardware/lorapp/httpserver/src/constants/sensor-name-lang-dictionary.json) 了解更多详情。

### HTTP

在 HTTP 选项卡中点击 `+` 添加新的 HTTP 集成。

LNS 将以 POST 方式向配置的 URL 发送消息。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP24.png" alt="pir" width={800} height="auto" /></p>

提交您的 URL 信息。

:::info 注意
仅支持 http，不支持 https。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP25.png" alt="pir" width={800} height="auto" /></p>

HTTP 集成将向配置的事件端点发送 POST 请求（可以配置多个 URL，用逗号分隔）。事件 URL 查询参数指示事件的类型。

HTTP 集成公开所有事件，如 [事件类型](https://www.chirpstack.io/docs/chirpstack/integrations/events.html) 文档所述。

**示例**：

(main.py)

```cpp
from http.server import HTTPServer, BaseHTTPRequestHandler 

from urllib.parse import urlparse, parse_qs 

from chirpstack_api import integration 

from google.protobuf.json_format import Parse 

class Handler(BaseHTTPRequestHandler): 

\# True - JSON marshaler 

\# False - Protobuf marshaler (binary) 

json = False 

def do_POST(self): 

self.send_response(200) 

self.end_headers() 

query_args = parse_qs(urlparse(self.path).query) 

content_len = int(self.headers.get('Content-Length', 0)) 

body = self.rfile.read(content_len) 

if query_args["event"][0] == "up": 

self.up(body) 

elif query_args["event"][0] == "join": 

self.join(body) 

else:

print("handler for event %s is not implemented" % query_args["event"][0]) 

def up(self, body): 

up = self.unmarshal(body, integration.UplinkEvent()) 

print("Uplink received from: %s with payload: %s" % (up.device_info.dev_eui, up.data.hex())) 

def join(self, body): 

join = self.unmarshal(body, integration.JoinEvent()) 

print("Device: %s joined with DevAddr: %s" % (join.device_info.dev_eui, join.dev_addr)) 

def unmarshal(self, body, pl): 

if self.json: 

return Parse(body, pl) 

pl.ParseFromString(body) 

return pl 

httpd = HTTPServer(('', 8090), Handler) 

httpd.serve_forever() 
```

### 下行链路

下行链路消息：

:::info
建议将下行链路标记为保留，这样命令就不会重复执行。
:::

默认主题是：`application/APPLICATION_ID/device/DEV_EUI/command/down`

`command`：请查看**设备用户手册**中的下行链路命令以获取更多详细信息。

|主题|application/APPLICATION_ID/device/DEV_EUI/command/down|
| - | :- |
|devEUI|设备 EUI|
|confirmed|true/false（载荷是否必须作为确认数据下行发送）|
|fPort|要使用的 FPort（必须 > 0）|
|data|base64 编码数据（明文，将由 ChirpStack 加密）|

**示例**：

1) 重启 SenseCAP S210x LoRaWAN 传感器：

**主题**：

`application/dbf6\*\*\*\*6c92/device/2CF7F1C2\*\*\*/command/down`
**Json：**

```cpp
{

"devEui":"2CF7F1C2\*\*\*", 

"confirmed":true, 

"fPort":2, 

"data":"AMgAAAAAACsm" 

} 
```

1) 将 SenseCAP S210x LoRaWAN 传感器的上传间隔设置为 1 分钟：

**主题**：

`application/dbf6\*\*\*\*6c92/device/2CF7F1C2\*\*\*/command/down`

**Json**：

```cpp
{

"devEui":"2CF7F1C2\*\*\*", 

"confirmed":true, 

"fPort":2, 

"data":"AIkAESIBAJBQ

" 
} 
```
