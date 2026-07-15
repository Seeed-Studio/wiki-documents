---
description: This page is a quick start guide. It only takes three steps to get it working log in, obtain the Token, and call the first API. Just follow the instructions and you'll be up and running.
title: Quick Start
keywords:
  - Edge AI
  - reCamera Pro
  - API
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_api_quick_start
sku: 10003420
sidebar_position: 2
last_update:
  date: 07/15/2026
  author: Sizhao zhou
createdAt: '2026-07-15'
updatedAt: '2026-07-15'
url: https://wiki.seeedstudio.com/recamera_pro_api_quick_start/
---

# Quick Start

This page guides you from zero to completing a login and calling your first API.

## Prerequisites

* The device is powered on and connected to your network
* You know the device IP address (this guide uses `192.168.7.200` as an example)
* You know the login username and password (default username is `admin`)

## Step 1: Verify Device Accessibility

Open this URL in a web browser:

```text
https://192.168.7.200
```

If the device has HTTPS enabled with a self-signed certificate, the browser will warn that the certificate is not trusted. For local testing, you can proceed past the warning.

## Step 2: Log In to Get a Token

The login endpoint does not require authentication. Send a login request to the device:

```text
POST https://192.168.7.200/cgi-bin/entry.cgi/system/login
Content-Type: application/json
```

Request body:

```json
{
  "sUserName": "admin",
  "sPassword": "your_password"
}
```

:::note
The login password is transmitted in plaintext. If HTTPS is enabled, the password is protected by TLS during transmission.
:::

On success, the response is:

```json
{
  "iStatus": 0,
  "iAuth": 1,
  "sWaittime": 0
}
```

| Field | Description |
|---|---|
| `iStatus` | `0` = correct password, `-1` = wrong password, `-3` = temporarily locked after repeated failures |
| `iAuth` | `1` = login successful, `0` = login failed, `2` = password change required |
| `sWaittime` | Wait time in seconds when locked |

The response headers will also contain:

```text
Set-Cookie: token=<JWT_TOKEN>; Max-Age=86400; Path=/
```

This `token` is the authentication credential for all subsequent API requests.

## Step 3: Call an API with the Token

Retrieve device information:

```text
GET https://192.168.7.200/cgi-bin/entry.cgi/system/device-info
Cookie: token=<JWT_TOKEN>
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

If the request does not carry a Token or the Token has expired, the device returns:

```json
{
  "code": 401,
  "message": "Unauthorized: Invalid token or NO token provided"
}
```

## Token Lifetime

The Token is valid for 24 hours by default (`Max-Age=86400`). After it expires, log in again to obtain a new Token.

## Next Steps

* See [Authentication](Authentication.md) for the full login and password change reference
* See [Common Conventions](Common-Conventions.md) for response formats and field naming rules
* See [API Reference](API-Reference/) for endpoint descriptions organized by function

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
