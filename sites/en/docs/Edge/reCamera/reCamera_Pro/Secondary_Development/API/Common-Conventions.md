---
description: This page covers the common rules applicable to all interfaces, including response formats, field naming conventions, and URL concatenation methods. It is recommended that you read this page first. Then, when looking at specific interfaces later, you won't need to frequently return to this page for reference.
title: Common Conventions
keywords:
  - Edge AI
  - reCamera Pro
  - API
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_api_common_conventions
sku: 10003420
sidebar_position: 2
last_update:
  date: 07/15/2026
  author: Sizhao zhou
createdAt: '2026-07-15'
updatedAt: '2026-07-15'
url: https://wiki.seeedstudio.com/recamera_pro_api_common_conventions/
---

# Common Conventions

## Response Format

### Read Endpoints

Read endpoints (GET) typically return the business data object directly, without a `code` field. For example:

```json
{
  "sSerialNumber": "RC1126B-20240101-001",
  "sFirmwareVersion": "V1.0.10"
}
```

### Operation Endpoints

Operation endpoints (POST, PUT, DELETE) return an object containing `code` and `message`:

```json
{
  "code": 0,
  "message": "success"
}
```

`code=0` means success. A non-zero `code` indicates an error, and `message` provides a description.

### Error Response

When a request fails, the device returns:

```json
{
  "code": 401,
  "message": "Unauthorized: Invalid token or NO token provided"
}
```

## Field Naming

JSON field names use camelCase. The first letter indicates the data type:

| Prefix | Type | Example |
|---|---|---|
| `i` | Integer | `iCpuUsage` |
| `f` | Float | `fTemperature` |
| `s` | String | `sSerialNumber` |
| `b` | Boolean | `bRunning` |
| `l` | List | `lDetection` |
| `d` | Object | `dIpv4` |

## URL Construction

### CGI Endpoints

Most endpoints require the CGI base path:

```text
http://<DEVICE_IP>/cgi-bin/entry.cgi/<API_PATH>
```

### Direct Path Endpoints

Some endpoints bypass the CGI layer and are accessed directly:

```text
http://<DEVICE_IP>/api/v1/device/serial-port
http://<DEVICE_IP>/api/v1/file?path=/mnt/sdcard/test.mp4
```

## Authentication

With few exceptions (`/system/key`, `/system/login`, `/system/check`), all endpoints require the Token in the request header:

```text
Cookie: token=<JWT_TOKEN>
```

See [Authentication](Authentication.md) for how to obtain a Token.

## Error Codes

Error codes are segmented by functional module:

| Prefix | Module |
|---|---|
| `100xx` | Device & System |
| `200xx` | Live View |
| `300xx` | Recording |
| `400xx` | AI Inference |
| `500xx` | Terminal & Logs |

Common error codes:

| Code | Description |
|---:|---|
| `10001` | Password too weak |
| `10002` | Token expired |
| `10003` | A firmware download is already in progress |
| `10004` | Port number out of range |
| `10005` | Port number already in use |

See [Error Codes](Error-Codes.md) for the full list.

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
