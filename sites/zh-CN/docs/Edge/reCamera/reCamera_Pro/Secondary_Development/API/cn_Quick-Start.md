---
description: 本页是快速入门指南。只需三个步骤即可开始使用：登录、获取 Token，并调用第一个 API。按照说明操作即可快速上手。
title: 快速入门
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
url: https://wiki.seeedstudio.com/cn/recamera_pro_api_quick_start/
---

# 快速入门

本页将引导你从零开始完成登录并调用你的第一个 API。

## 前置条件

* 设备已上电并连接到你的网络
* 你已知道设备的 IP 地址（本指南以 `192.168.7.200` 为示例）
* 你已知道登录用户名和密码（默认用户名为 `admin`）

## 步骤 1：验证设备可访问性

在网页浏览器中打开以下 URL：

```text
https://192.168.7.200
```

如果设备启用了带自签名证书的 HTTPS，浏览器会警告证书不受信任。对于本地测试，你可以忽略警告继续访问。

## 步骤 2：登录以获取 Token

登录接口不需要认证。向设备发送登录请求：

```text
POST https://192.168.7.200/cgi-bin/entry.cgi/system/login
Content-Type: application/json
```

请求体：

```json
{
  "sUserName": "admin",
  "sPassword": "your_password"
}
```

:::note
登录密码以明文传输。如果启用了 HTTPS，密码在传输过程中会由 TLS 进行保护。
:::

成功后，响应为：

```json
{
  "iStatus": 0,
  "iAuth": 1,
  "sWaittime": 0
}
```

| 字段 | 说明 |
|---|---|
| `iStatus` | `0` = 密码正确，`-1` = 密码错误，`-3` = 多次失败后暂时锁定 |
| `iAuth` | `1` = 登录成功，`0` = 登录失败，`2` = 需要修改密码 |
| `sWaittime` | 被锁定时需要等待的秒数 |

响应头中还会包含：

```text
Set-Cookie: token=<JWT_TOKEN>; Max-Age=86400; Path=/
```

这个 `token` 是后续所有 API 请求的认证凭证。

## 步骤 3：使用 Token 调用 API

获取设备信息：

```text
GET https://192.168.7.200/cgi-bin/entry.cgi/system/device-info
Cookie: token=<JWT_TOKEN>
```

响应：

```json
{
  "sSerialNumber": "RC1126B-20240101-001",
  "sFirmwareVersion": "V1.0.10",
  "sSensorModel": "SC850SL",
  "sBasePlateModel": "Base Board-V1.0,Expand Board-V1.0"
}
```

如果请求未携带 Token 或 Token 已过期，设备会返回：

```json
{
  "code": 401,
  "message": "Unauthorized: Invalid token or NO token provided"
}
```

## Token 有效期

Token 默认有效期为 24 小时（`Max-Age=86400`）。过期后需要重新登录以获取新的 Token。

## 后续步骤

* 参见 [Authentication](https://wiki.seeedstudio.com/cn/recamera_pro_api_authentication) 获取完整的登录与修改密码参考
* 参见 [Common Conventions](https://wiki.seeedstudio.com/cn/recamera_pro_api_common_conventions) 了解响应格式和字段命名规则
* 参见 [API Reference](https://wiki.seeedstudio.com/cn/recamera_pro_api_reference) 按功能查看各接口说明

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
