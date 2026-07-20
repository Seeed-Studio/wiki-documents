---
description: 介绍 API 返回的错误码。
title: 错误码
keywords:
  - Edge AI
  - reCamera Pro
  - API
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_api_error_codes
sku: 10003420
sidebar_position: 5
last_update:
  date: 07/15/2026
  author: Sizhao zhou
createdAt: '2026-07-15'
updatedAt: '2026-07-15'
url: https://wiki.seeedstudio.com/cn/recamera_pro_api_error_codes/
---

# 错误码

## 错误码分段

错误码按功能模块进行分段：

| 前缀 | 模块 |
|---|---|
| `100xx` | 设备与系统 |
| `200xx` | 实时预览 |
| `300xx` | 录像 |
| `400xx` | AI 推理 |
| `500xx` | 终端与日志 |

## 设备与系统 (100xx)

| 错误码 | 描述 |
|---:|---|
| `10001` | 密码强度过低 |
| `10002` | Token 已过期 |
| `10003` | 固件下载已在进行中 |
| `10004` | 端口号超出范围 |
| `10005` | 端口号已被占用 |

## HTTP 状态码

| HTTP 状态码 | 描述 |
|---:|---|
| `200` | 请求成功 |
| `401` | 未认证或 Token 无效 |
| `404` | 接口未找到 |
| `405` | 方法不被允许 |
| `500` | 服务器内部错误 |

## 认证错误

当请求未携带 Token 或 Token 已过期时，设备会返回：

```json
{
  "code": 401,
  "message": "Unauthorized: Invalid token or NO token provided"
}
```

解决方法：重新登录以获取新的 Token，并在后续请求中加入 `Cookie: token=<JWT_TOKEN>`。

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用产品的过程中体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
