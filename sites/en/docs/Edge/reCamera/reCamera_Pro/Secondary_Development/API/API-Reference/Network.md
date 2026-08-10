---
description: Introduce the basic APIs of Network.
title: Network
keywords:
  - Edge AI
  - reCamera Pro
  - API
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_api_network
sku: 10003420
sidebar_position: 2
last_update:
  date: 07/15/2026
  author: Sizhao zhou
createdAt: '2026-07-15'
updatedAt: '2026-07-15'
url: https://wiki.seeedstudio.com/recamera_pro_api_network/
---

# Network

## Endpoint Overview

| Method | Path | Purpose |
|---|---|---|
| GET | `/network/lan` | Get wired network configuration |
| PUT | `/network/lan` | Set wired network configuration |
| GET | `/network/wlan` | Get wireless IPv4 configuration |
| PUT | `/network/wlan` | Set wireless IPv4 configuration |
| GET | `/network/wifi` | Get current Wi-Fi connection info |
| GET | `/network/wifi-status` | Query Wi-Fi power status |
| POST | `/network/wifi-status?power=on/off` | Toggle Wi-Fi power |
| GET | `/network/wifi-list` | Scan nearby Wi-Fi networks |
| POST | `/network/wifi` | Connect to Wi-Fi |
| DELETE | `/network/wifi` | Disconnect or forget Wi-Fi |
| GET | `/web/setting` | Query HTTP API settings |
| POST | `/web/setting` | Set HTTP API settings |
| GET | `/ftp/setting` | Query FTP service settings |
| POST | `/ftp/setting` | Set FTP service settings |

## LAN and WLAN Configuration

### Get Configuration

```text
GET /network/lan
GET /network/wlan
```

Response:

```json
{
  "dIpv4": {
    "sV4Address": "192.168.7.200",
    "sV4Gateway": "192.168.6.2",
    "sV4Method": "static",
    "sV4Netmask": "255.255.254.0"
  },
  "dLink": {
    "bEnableMethod": true,
    "iPower": 1,
    "sAddress": "40:FD:F3:25:1A:8E",
    "sDNS1": "202.96.134.133",
    "sDNS2": "223.5.5.5",
    "sInterface": "wlan0"
  }
}
```

| Field | Description |
|---|---|
| `dIpv4.sV4Address` | IPv4 address |
| `dIpv4.sV4Gateway` | IPv4 gateway |
| `dIpv4.sV4Method` | IP assignment method, `dhcp` or `static` |
| `dIpv4.sV4Netmask` | IPv4 subnet mask |
| `dLink.sDNS1` / `dLink.sDNS2` | DNS servers |
| `dLink.sAddress` | MAC address |
| `dLink.sInterface` | Network interface name, e.g. `eth0` or `wlan0` |
| `dLink.iPower` | Interface power state |
| `dLink.bEnableMethod` | Whether manual configuration is enabled |

### Set Configuration

```text
PUT /network/lan
PUT /network/wlan
```

Request body:

```json
{
  "dIpv4": {
    "sV4Address": "192.168.1.123",
    "sV4Gateway": "192.168.1.1",
    "sV4Method": "dhcp",
    "sV4Netmask": "255.255.255.0"
  },
  "dLink": {
    "sDNS1": "8.8.8.8",
    "sDNS2": "8.8.4.4",
    "bEnableMethod": true
  }
}
```

Response:

```json
{
  "code": 0,
  "message": "SUCCESS TO SET IP"
}
```

## Current Wi-Fi Info

```text
GET /network/wifi
```

The response structure is the same as LAN/WLAN configuration.

## Wi-Fi Power

### Query Wi-Fi Power Status

```text
GET /network/wifi-status
```

Response:

```json
{
  "iPower": 1,
  "id": 1,
  "sType": "wifi"
}
```

| Field | Description |
|---|---|
| `iPower` | Wi-Fi power state, `1` on, `0` off |
| `id` | Interface ID |
| `sType` | Interface type |

### Toggle Wi-Fi Power

```text
POST /network/wifi-status?power=on
POST /network/wifi-status?power=off
```

| Parameter | Value | Description |
|---|---|---|
| `power` | `on`, `off` | Turn Wi-Fi on or off |

## Wi-Fi Scan and Connect

### Scan Wi-Fi List

```text
GET /network/wifi-list
```

Response:

```json
[
  {
    "sBssid": "58:b4:bb:93:b8:e3",
    "sSsid": "SEEED-MKT",
    "iFrequency": 5180,
    "iRssi": -44,
    "sFlags": "[WPA-PSK-CCMP][WPA2-PSK-CCMP][ESS]",
    "sConnected": true,
    "sReserved": true
  }
]
```

| Field | Description |
|---|---|
| `sBssid` | Wi-Fi BSSID, used as the unique identifier for connection |
| `sSsid` | Wi-Fi network name |
| `iFrequency` | Frequency channel |
| `iRssi` | Signal strength |
| `sFlags` | Security type |
| `sConnected` | Whether currently connected |
| `sReserved` | Whether the password is saved |

### Connect to Wi-Fi

```text
POST /network/wifi
```

Request body:

```json
{
  "sSsid": "58:b4:bb:93:b8:e3",
  "sPassword": "your_wifi_password"
}
```

| Field | Description |
|---|---|
| `sSsid` | Wi-Fi unique identifier; use the `sBssid` value from `/network/wifi-list` |
| `sPassword` | Wi-Fi password |

Response:

```json
{
  "code": 0,
  "message": ""
}
```

### Disconnect or Forget Wi-Fi

```text
DELETE /network/wifi?disconnect=<ssid>
DELETE /network/wifi?Ignore=<ssid>
```

| Parameter | Description |
|---|---|
| `disconnect` | Disconnect from the specified Wi-Fi |
| `Ignore` | Forget the specified Wi-Fi |

Response:

```json
{
  "code": 0,
  "message": "",
  "status": 0
}
```

| `status` | Description |
|---:|---|
| `0` | Success |
| `-1` | Timeout |
| `-2` | Wrong password |

## HTTP API Settings

### Query Settings

```text
GET /web/setting
```

Response:

```json
{
  "sEnable": true,
  "sApiKey": "M8RZVF3hXrVDk*%2%LlN*^7nuCRHPiIT"
}
```

| Field | Description |
|---|---|
| `sEnable` | Whether HTTP API is enabled |
| `sApiKey` | API key |

### Set Settings

```text
POST /web/setting
```

Request body:

```json
{
  "sEnable": true,
  "sApiKey": "your_api_key"
}
```

## FTP Service Settings

### Query Settings

```text
GET /ftp/setting
```

Response:

```json
{
  "sEnable": false,
  "sFtpPassword": "Seeed123.",
  "sFtpPort": "21",
  "sFtpUser": "ftpuser"
}
```

| Field | Description |
|---|---|
| `sEnable` | Whether FTP service is enabled |
| `sFtpPort` | FTP port |
| `sFtpUser` | FTP username |
| `sFtpPassword` | FTP password |

### Set Settings

```text
POST /ftp/setting
```

Request body:

```json
{
  "sEnable": true,
  "sFtpPort": "21",
  "sFtpUser": "ftpuser",
  "sFtpPassword": "StrongPassword123!"
}
```


## Multicast

```text
GET /network/muticast
```

:::note
This endpoint is listed in the device API table. If the current firmware does not support it, the device may return a 404 or API Not Found response.
:::

Error codes:

| Code | Description |
|---:|---|
| `10001` | FTP password too weak |
| `10004` | FTP port out of range |
| `10005` | FTP port already in use |


## Technical Support and Product Discussion

Thank you for choosing our products! We are here to provide you with various support to ensure your experience with our products is as smooth as possible. We offer multiple communication channels to meet different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>