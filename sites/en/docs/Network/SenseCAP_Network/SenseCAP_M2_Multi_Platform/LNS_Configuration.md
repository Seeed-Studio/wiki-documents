---
description: SenseCAP M2 Multi-Platform Gateway LNS Configuration
title: LNS Configuration
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_m2_LNS_config
last_update:
  date: 08/29/2023
  author: Jessie
---


SenseCAP M2 Multi Platform Gateway has a built-in LoRaWAN Network Server, it's based on Chirpstack, provides a fast and reliable solution for launching a LoRaWAN network.

## Gateway Configuration

Configure the gateway via the Web UI, please check the [Quick Start](https://files.seeedstudio.com/products/SenseCAP%20M2/Quick%20Start%20for%20SenseCAP%20M2%20Multi-Platfrom%20Gateway%20&%20Sensors.pdf) to log into Luci.

### Channel Plan Settings

Navigate to `LoRa` > `Channel Plan`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP3.png" alt="pir" width={800} height="auto" /></p>

Select the Region and Frequency plan.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP4.png" alt="pir" width={800} height="auto" /></p>

After setting, click `Save&Apply`

### Local Network Server Configuration

Navigate to `LoRa` > `LoRa Network`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP1.png" alt="pir" width={800} height="auto" /></p>

Set Mode to `Local Network Server`, add your MQTT info (Broker Host/Port/User/Password), other parameters can keep the default value.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP2.png" alt="pir" width={800} height="auto" /></p>

Click `Save&Apply` to apply your settings.

:::tip Note
It will take about 1 min to start the process , then you can access the GUI configuration.
:::

## ChirpStack GUI Configuration

Login to the ChirpStack GUI via `http://localhost:8080`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP.png" alt="pir" width={800} height="auto" /></p>

The default account and password: `admin`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP5.png" alt="pir" width={800} height="auto" /></p>

Then you will see the dashboard page.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP6.png" alt="pir" width={800} height="auto" /></p>

### Check the Regions

Navigate to `Network Server` > `Regions`.

There should be a Region ID, click it and confirm the info, it should be same as your settings in the previous step.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP7.png" alt="pir" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP8.png" alt="pir" width={800} height="auto" /></p>

### Add Device Profile

Navigate to `Tenant` > `Device Profiles`, and click `Add Profile`.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP9.png" alt="pir" width={800} height="auto" /></p>

**MAC version**: LoRaWAN 1.0.3

**Regional parameters reversion**: A

**ADR algorithm**: Default ADR algorithm(LoRa only)

**Expected uplink interval**: Customize, default 3600s

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP10.png" alt="pir" width={800} height="auto" /></p>

Navigate to `Codec`, and select `JavaScript functions`, copy the [SenseCAP Decoder for TTN](https://github.com/Seeed-Solution/SenseCAP-Decoder) and submit it.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/decode.png" alt="pir" width={800} height="auto" /></p>

### Add Gateway

Navigate to `Gateway`, and click `Add Gateway`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP11.png" alt="pir" width={800} height="auto" /></p>

Define the Name and Gateway ID(you can click  to randomly generate the ID), then submit it.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP13.png" alt="pir" width={800} height="auto" /></p>

### Add Device

Navigate to `Tenant` > `Application`, and click Add `Application`.

Name your application and submit it.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/add-applications.png" alt="pir" width={800} height="auto" /></p>

Navigate to your application, and click `Add device`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP14.png" alt="pir" width={800} height="auto" /></p>

Paste your device EUI and select the device profile we added before, then submit it.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP15.png" alt="pir" width={800} height="auto" /></p>

Paste the Application key and click submit.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP16.png" alt="pir" width={800} height="auto" /></p>

:::tip
Please check the user guide to set up the device correctly, select the platform to `Other Platform`.
:::

### Check the device status

Check the `Events` of your device, you will get the join packet when the device joins the network.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP17.png" alt="pir" width={800} height="auto" /></p>

You can also check the packet details.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP18.png" alt="pir" width={800} height="auto" /></p>

## Integrations

This chapter is for cloud service development, the following guideline is for reference.

### MQTT

#### Topic

The MQTT integration exposes all events as documented by Event types.

The default event topic is:

```cpp
application/APPLICATION_ID/device/DEV_EUI/event/EVENT
```

Check [Event Types](https://www.chirpstack.io/docs/chirpstack/integrations/events.html) for more details.

You can find the Application id on your application tab:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP19.png" alt="pir" width={800} height="auto" /></p>

- **Event types**

|up|Uplink event|
| - | - |
|status|Margin and battery status|
|join|Device join event|
|ack|Confirmed downlink (n)ack|
|txack|Downlink transmission ack|
|log|Log (or error) event|
|location|Location event|
|integration|Integration event|

:::info Note
`+` means to receive all messages
:::

**Example**:

- To receive uplink messages from all devices under a certain gateway:

```cpp
gateway/<GATEWAY_EUI>/device/+/event/up
```

- To receive all messages from all devices under the application:

```cpp
application/+/device/+/event/+
```

- To receive all device messages from all gateways:

```cpp
gateway/+/device/+/event/+
```

You can check the `gatewayid` to distinguish the gateways.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/gateway-id.png" alt="pir" width={800} height="auto" /></p>

#### Payload

When the object.valid is true, means the data analysis is successful, then you can traverse the object.messages, and extract the data type you need.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP20.png" alt="pir" width={800} height="auto" /></p>

1) Up event for SenseCAP LoRaWAN S210X Sensors payload example description:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP21.png" alt="pir" width={800} height="auto" /></p>

- `upload_battery`: Battery
- `upload_interval`: upload interval, unit: Second
- `upload_version`: Hardware/Firmware Version
- `report_telemetry`: Measurement value

The `measurementId` in the ‘report_telemetry’ message please check [SenseCAP Measurement ID](https://sensecap-statics.seeed.cn/hardware/lorapp/httpserver/src/constants/sensor-name-lang-dictionary.json) for more details.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP22.png" alt="pir" width={800} height="auto" /></p>

1) Up event for SenseCAP Data logger payload example description:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP23.png" alt="pir" width={600} height="auto" /></p>

The `measurementId` in the ‘report_telemetry’ message please check [SenseCAP Measurement ID](https://sensecap-statics.seeed.cn/hardware/lorapp/httpserver/src/constants/sensor-name-lang-dictionary.json) for more details.

### HTTP

Click `+` in the HTTP tab to add a new HTTP integration.

LNS will send messages as POST to the configured URL.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP24.png" alt="pir" width={800} height="auto" /></p>

Submit your URL info.

:::info Note
Support http only, not https.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP25.png" alt="pir" width={800} height="auto" /></p>

The HTTP integration will make POST requests to the configured event endpoint or endpoints (multiple URLs can be configured, comma separated). The event URL query parameter indicates the type of the event.

The HTTP integration exposes all events as documented by [Event Type](https://www.chirpstack.io/docs/chirpstack/integrations/events.html).

**Example**:

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

### Downlink

Downlink message:

:::info
It’s recommended to mark the downlink as retained, Then the command will not be executed repeatedly.
:::

The default Topic is：`application/APPLICATION_ID/device/DEV_EUI/command/down`

`command`: Please check the downlink command in **Device User Manual** for more details.

|Topic|application/APPLICATION_ID/device/DEV_EUI/command/down|
| - | :- |
|devEUI|Device EUI|
|confirmed|true/false(whether the payload must be sent as confirmed data down or not)|
|fPort|FPort to use (must be > 0)|
|data|base64 encoded data (plaintext, will be encrypted by ChirpStack)|

**Example**:

1) Reboot SenseCAP S210x LoRaWAN Sensors:

**Topic**:

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

1) Set the upload interval of the SenseCAP S210x LoRaWAN Sensors to 1min :

**Topic**：

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
