---
description: Introduce the basic APIs of the equipment and systems.
title: Device and System
keywords:
  - Edge AI
  - reCamera Pro
  - API
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_api_device-and-system
sku: 10003420
sidebar_position: 1
last_update:
  date: 07/15/2026
  author: Sizhao zhou
createdAt: '2026-07-15'
updatedAt: '2026-07-15'
url: https://wiki.seeedstudio.com/recamera_pro_api_device-and-system/
---

# Device & System

## Endpoint Overview

| Method | Path | Purpose |
|---|---|---|
| GET | `/system/device-info` | Get device serial number, firmware version, sensor and base board model |
| GET | `/system/resource-info` | Get CPU, NPU, memory, and storage usage |
| GET | `/system/time` | Get system time, timezone, and NTP configuration |
| PUT | `/system/time` | Set system time |
| GET | `/system/battery` | Get battery status |
| GET | `/system/check` | Check if first-time login |
| GET | `/system/ssh` | Query SSH running status |
| POST | `/system/ssh` | Start or stop SSH |
| GET | `/system/secure` | Query HTTPS status |
| POST | `/system/secure` | Enable or disable HTTPS |
| GET | `/config/export` | Export device configuration |
| POST | `/config/upload` | Import device configuration |
| POST | `/system/reboot` | Reboot the device |
| POST | `/system/factory-reset` | Restore factory settings |

## Get Device Information

```text
GET /system/device-info
```

Response:

```json
{
  "sSerialNumber": "RC1126B-20240101-001",
  "sFirmwareVersion": "V1.0.10",
  "sSensorModel": "SC850SL",
  "sBasePlateModel": "Base Board-V1.0,Expand Board-V1.0"
}
```

| Field | Description |
|---|---|
| `sSerialNumber` | Device serial number |
| `sFirmwareVersion` | Firmware version |
| `sSensorModel` | Sensor board model |
| `sBasePlateModel` | Base board model |

## Get System Resource Status

```text
GET /system/resource-info
```

Response:

```json
{
  "iCpuUsage": 12,
  "iNpuUsage": 69,
  "sMem": {
    "iMemTotal": 1.94,
    "iMemUsage": 33,
    "iMemUsed": 0.65
  },
  "sStorage": {
    "iStorageTotal": 11.29,
    "iStorageUsage": 37,
    "iStorageUsed": 4.22
  }
}
```

| Field | Description |
|---|---|
| `iCpuUsage` | CPU usage percentage |
| `iNpuUsage` | NPU usage percentage |
| `sMem.iMemTotal` | Total memory |
| `sMem.iMemUsed` | Used memory |
| `sMem.iMemUsage` | Memory usage percentage |
| `sStorage.iStorageTotal` | Total storage |
| `sStorage.iStorageUsed` | Used storage |
| `sStorage.iStorageUsage` | Storage usage percentage |

## System Time

### Get System Time

```text
GET /system/time
```

Response:

```json
{
  "sMethod": "ntp",
  "dNtpConfig": {
    "sAddress": "pool.ntp.org",
    "sPort": "123",
    "status": 0
  },
  "iTimestamp": 1784083074,
  "sTimezone": "Asia/Shanghai",
  "sTz": "UTC+8"
}
```

| Field | Description |
|---|---|
| `sMethod` | Time source, `ntp` or `manual` |
| `dNtpConfig.sAddress` | NTP server address |
| `dNtpConfig.sPort` | NTP port |
| `dNtpConfig.status` | NTP status, `0` means success |
| `iTimestamp` | Unix timestamp in seconds |
| `sTimezone` | Timezone city |
| `sTz` | Timezone, e.g. `UTC+8` |

### Set System Time

```text
PUT /system/time
```

NTP mode request body:

```json
{
  "sMethod": "ntp",
  "dNtpConfig": {
    "sAddress": "pool.ntp.org",
    "sPort": "123"
  },
  "sTimezone": "Asia/Shanghai",
  "sTz": "UTC+8"
}
```

Manual mode request body:

```json
{
  "sMethod": "manual",
  "iTimestamp": 1784083074,
  "sTimezone": "Asia/Shanghai",
  "sTz": "UTC+8"
}
```

Response:

```json
{
  "iTimestamp": 1784083074,
  "sTimezone": "Asia/Shanghai",
  "sTz": "UTC+8"
}
```

## Battery Status

```text
GET /system/battery
```

Response:

```json
{
  "isAttached": true,
  "displaySteps": 0,
  "totalSteps": 5,
  "isCharging": false
}
```

| Field | Description |
|---|---|
| `isAttached` | Whether a battery is attached |
| `displaySteps` | Current battery level steps |
| `totalSteps` | Total battery level steps |
| `isCharging` | Whether the battery is charging |

## Check First-Time Login

```text
GET /system/check
```

Response:

```json
{
  "bFirst": false
}
```

`bFirst=true` indicates the device is in the first-time login flow and the default password should be changed.

## SSH

### Query SSH Status

```text
GET /system/ssh
```

Response:

```json
{
  "bRunning": true
}
```

### Start or Stop SSH

```text
POST /system/ssh
```

Request body:

```json
{
  "bRunning": true
}
```

| Field | Description |
|---|---|
| `bRunning` | `true` to start SSH, `false` to stop |

## HTTPS

### Query HTTPS Status

```text
GET /system/secure
```

Response:

```json
{
  "sEnable": true
}
```

### Enable or Disable HTTPS

```text
POST /system/secure
```

Request body:

```json
{
  "sEnable": true
}
```

Response:

```json
{
  "code": 0,
  "message": "Settings applied successfully"
}
```

After enabling HTTPS, use `https://<DEVICE_IP>` for subsequent access.

## Configuration Management

### Export Configuration

```text
GET /config/export
```

Response:

```json
{
  "size": 35116544,
  "url": "/download/config.tar"
}
```

| Field | Description |
|---|---|
| `size` | Configuration file size |
| `url` | Download path; prepend the device IP for a full URL |

Download URL:

```text
http://<DEVICE_IP>/download/config.tar
```

### Import Configuration

```text
POST /config/upload
```

Importing configuration overwrites the current device settings. Export the current configuration first as a backup.

## Reboot

```text
POST /system/reboot
```

Response:

```json
{
  "code": 0,
  "message": "success"
}
```

The device will reboot and the current connection will be lost. Wait for the device to come back online before continuing.

## Factory Reset

Factory reset requires two-stage confirmation.

Stage 1:

```text
POST /system/factory-reset
```

Response:

```json
{
  "code": 0,
  "sConfirmToken": "adfagghvshf"
}
```

Stage 2, submit the confirmation token within its validity period:

```text
POST /system/factory-reset
```

Request body:

```json
{
  "sConfirmToken": "adfagghvshf"
}
```

Response:

```json
{
  "code": 0,
  "message": "success"
}
```

Factory reset erases all device configuration. Ensure you have a backup before proceeding.


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