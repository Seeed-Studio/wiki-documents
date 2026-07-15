---
description: Introduce the error codes returned by the API.
title: Error Codes
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
url: https://wiki.seeedstudio.com/recamera_pro_api_error_codes/
---

# Error Codes

## Error Code Segments

Error codes are segmented by functional module:

| Prefix | Module |
|---|---|
| `100xx` | Device & System |
| `200xx` | Live View |
| `300xx` | Recording |
| `400xx` | AI Inference |
| `500xx` | Terminal & Logs |

## Device & System (100xx)

| Code | Description |
|---:|---|
| `10001` | Password too weak |
| `10002` | Token expired |
| `10003` | A firmware download is already in progress |
| `10004` | Port number out of range |
| `10005` | Port number already in use |

## HTTP Status Codes

| HTTP Status | Description |
|---:|---|
| `200` | Request successful |
| `401` | Not authenticated or Token invalid |
| `404` | Endpoint not found |
| `405` | Method not allowed |
| `500` | Internal server error |

## Authentication Errors

When a request does not carry a Token or the Token has expired, the device returns:

```json
{
  "code": 401,
  "message": "Unauthorized: Invalid token or NO token provided"
}
```

Resolution: Log in again to obtain a new Token, and include `Cookie: token=<JWT_TOKEN>` in subsequent requests.

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
