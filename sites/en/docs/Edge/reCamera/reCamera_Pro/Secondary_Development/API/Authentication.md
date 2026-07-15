---
description: Introduce how to log in to the device via API.
title: Authentication
keywords:
  - Edge AI
  - reCamera Pro
  - API
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_api_authentication
sku: 10003420
sidebar_position: 1
last_update:
  date: 07/15/2026
  author: Sizhao zhou
createdAt: '2026-07-15'
updatedAt: '2026-07-15'
url: https://wiki.seeedstudio.com/recamera_pro_api_authentication/
---

# Authentication

reCamera uses JWT Token authentication. After a successful login, the device returns a Token via the `Set-Cookie` response header. Subsequent requests must carry this Token.

## Endpoint Overview

| Method | Path | Purpose | Requires Login |
|---|---|---|---|
| GET | `/system/key` | Get RSA public key (for password change) | No |
| POST | `/system/login` | Log in and obtain a Token | No |
| GET | `/system/check` | Check if first-time login | No |
| PUT | `/system/password` | Change admin password | Yes |

## Login

### Request

```text
POST /cgi-bin/entry.cgi/system/login
Content-Type: application/json
```

Request body:

```json
{
  "sUserName": "admin",
  "sPassword": "your_password"
}
```

| Field | Description |
|---|---|
| `sUserName` | Login username, default is `admin` |
| `sPassword` | Login password, transmitted in plaintext |

### Response

```json
{
  "iStatus": 0,
  "iAuth": 1,
  "sWaittime": 0
}
```

| Field | Description |
|---|---|
| `iStatus` | `0` = correct password, `-1` = wrong password, `-3` = temporarily locked |
| `iAuth` | `1` = login successful, `0` = login failed, `2` = password change required |
| `sWaittime` | Wait time in seconds when locked |

### Obtaining the Token

On successful login, the response headers contain `Set-Cookie`:

```text
Set-Cookie: token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXUyJ9...; Max-Age=86400; Path=/
```

The Token lifetime is determined by `Max-Age`, defaulting to 86400 seconds (24 hours).

### Using the Token

All authenticated requests must include the Token in the Cookie header:

```text
Cookie: token=<JWT_TOKEN>
```

For example, to get device information:

```text
GET /cgi-bin/entry.cgi/system/device-info
Cookie: token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXUyJ9...
```

If the Token is missing or expired, the device returns:

```json
{
  "code": 401,
  "message": "Unauthorized: Invalid token or NO token provided"
}
```

### Login Lockout

The device enforces an IP-based failed attempt limit. After repeated wrong passwords, `iLoginAttempts` increments. When the limit is reached, the device returns `iStatus=-3` with a `sWaittime` value. You must wait for the lockout to expire before trying again.

## Check First-Time Login

```text
GET /cgi-bin/entry.cgi/system/check
```

Response:

```json
{
  "bFirst": false
}
```

`bFirst=true` indicates the device is in the first-time login flow and the default password should be changed.

## Change Password

Changing the password requires obtaining an RSA public key first, then encrypting the old and new passwords before submitting.

### Get Public Key

```text
GET /cgi-bin/entry.cgi/system/key
```

Response:

```json
{
  "sPublicKey": "-----BEGIN RSA PUBLIC KEY-----\nMIIBCgKCAQEA...\n-----END RSA PUBLIC KEY-----"
}
```

| Field | Description |
|---|---|
| `sPublicKey` | RSA public key, used for password encryption during password change |

### Password Encryption

Compute the SHA256 hash of the password as a hexadecimal string, then encrypt it with the public key using RSA PKCS1v15 padding, and finally Base64-encode the result.

### Submit Change

```text
PUT /cgi-bin/entry.cgi/system/password
Content-Type: application/json
```

Request body:

```json
{
  "sUserName": "admin",
  "sOldPassword": "<encrypted_old_password>",
  "sNewPassword": "<encrypted_new_password>"
}
```

| Field | Description |
|---|---|
| `sUserName` | Username |
| `sOldPassword` | Encrypted old password |
| `sNewPassword` | Encrypted new password |

Success response:

```json
{
  "code": 0,
  "message": "success"
}
```

Error codes:

| Code | Description |
|---:|---|
| `10001` | New password is too weak |
| `10002` | Token expired, log in again |

After changing the password, the current Token may become invalid. Log in again to obtain a new Token.

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