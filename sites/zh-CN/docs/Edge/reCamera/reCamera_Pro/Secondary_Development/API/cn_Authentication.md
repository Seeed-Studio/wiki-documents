---
description: 介绍如何通过 API 登录设备。
title: 身份验证
keywords:
  - Edge AI
  - reCamera Pro
  - API
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_api_authentication
sku: 10003420
sidebar_position: 3
last_update:
  date: 07/15/2026
  author: Sizhao zhou
createdAt: '2026-07-15'
updatedAt: '2026-07-15'
url: https://wiki.seeedstudio.com/cn/recamera_pro_api_authentication/
---

# 身份验证

reCamera 使用 JWT Token 身份验证。登录成功后，设备会通过 `Set-Cookie` 响应头返回一个 Token。后续请求必须携带该 Token。

## 接口概览

| 方法 | 路径 | 目的 | 是否需要登录 |
|---|---|---|---|
| GET | `/system/key` | 获取 RSA 公钥（用于修改密码） | 否 |
| POST | `/system/login` | 登录并获取 Token | 否 |
| GET | `/system/check` | 检查是否为首次登录 | 否 |
| PUT | `/system/password` | 修改管理员密码 | 是 |

## 登录

### 请求

```text
POST /cgi-bin/entry.cgi/system/login
Content-Type: application/json
```

请求体：

```json
{
  "sUserName": "admin",
  "sPassword": "your_password"
}
```

| 字段 | 描述 |
|---|---|
| `sUserName` | 登录用户名，默认是 `admin` |
| `sPassword` | 登录密码，以明文传输 |

### 响应

```json
{
  "iStatus": 0,
  "iAuth": 1,
  "sWaittime": 0
}
```

| 字段 | 描述 |
|---|---|
| `iStatus` | `0` = 密码正确，`-1` = 密码错误，`-3` = 暂时锁定 |
| `iAuth` | `1` = 登录成功，`0` = 登录失败，`2` = 需要修改密码 |
| `sWaittime` | 被锁定时的等待时间（秒） |

### 获取 Token

登录成功后，响应头中包含 `Set-Cookie`：

```text
Set-Cookie: token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXUyJ9...; Max-Age=86400; Path=/
```

Token 的有效期由 `Max-Age` 决定，默认是 86400 秒（24 小时）。

### 使用 Token

所有需要身份验证的请求必须在 Cookie 头中携带 Token：

```text
Cookie: token=<JWT_TOKEN>
```

例如，获取设备信息：

```text
GET /cgi-bin/entry.cgi/system/device-info
Cookie: token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXUyJ9...
```

如果 Token 缺失或已过期，设备会返回：

```json
{
  "code": 401,
  "message": "Unauthorized: Invalid token or NO token provided"
}
```

### 登录锁定

设备基于 IP 实施失败尝试次数限制。当多次输入错误密码后，`iLoginAttempts` 会递增。当达到限制时，设备返回 `iStatus=-3`，并带有 `sWaittime` 值。你必须等待锁定时间结束后才能再次尝试。

## 检查是否首次登录

```text
GET /cgi-bin/entry.cgi/system/check
```

响应：

```json
{
  "bFirst": false
}
```

`bFirst=true` 表示设备处于首次登录流程中，应修改默认密码。

## 修改密码

修改密码前需要先获取 RSA 公钥，然后使用该公钥加密旧密码和新密码后再提交。

### 获取公钥

```text
GET /cgi-bin/entry.cgi/system/key
```

响应：

```json
{
  "sPublicKey": "-----BEGIN RSA PUBLIC KEY-----\nMIIBCgKCAQEA...\n-----END RSA PUBLIC KEY-----"
}
```

| 字段 | 描述 |
|---|---|
| `sPublicKey` | RSA 公钥，用于修改密码时的密码加密 |

### 密码加密

先计算密码的 SHA256 哈希值并转为十六进制字符串，然后使用公钥按 RSA PKCS1v15 填充方式加密，最后对结果进行 Base64 编码。

### 提交修改

```text
PUT /cgi-bin/entry.cgi/system/password
Content-Type: application/json
```

请求体：

```json
{
  "sUserName": "admin",
  "sOldPassword": "<encrypted_old_password>",
  "sNewPassword": "<encrypted_new_password>"
}
```

| 字段 | 描述 |
|---|---|
| `sUserName` | 用户名 |
| `sOldPassword` | 加密后的旧密码 |
| `sNewPassword` | 加密后的新密码 |

成功响应：

```json
{
  "code": 0,
  "message": "success"
}
```

错误码：

| 错误码 | 描述 |
|---:|---|
| `10001` | 新密码太弱 |
| `10002` | Token 已过期，请重新登录 |

修改密码后，当前 Token 可能会失效。请重新登录以获取新的 Token。

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>