---
description: 本页介绍适用于所有接口的通用规则，包括响应格式、字段命名约定以及 URL 拼接方式。建议您先阅读本页内容，这样在后续查看具体接口时，就无需频繁返回本页查阅。
title: 通用约定
keywords:
  - Edge AI
  - reCamera Pro
  - API
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_api_common_conventions
sku: 10003420
sidebar_position: 4
last_update:
  date: 07/15/2026
  author: Sizhao zhou
createdAt: '2026-07-15'
updatedAt: '2026-07-15'
url: https://wiki.seeedstudio.com/cn/recamera_pro_api_common_conventions/
---

# 通用约定

## 响应格式

### 读取类接口

读取类接口（GET）通常直接返回业务数据对象，不包含 `code` 字段。例如：

```json
{
  "sSerialNumber": "RC1126B-20240101-001",
  "sFirmwareVersion": "V1.0.10"
}
```

### 操作类接口

操作类接口（POST、PUT、DELETE）返回包含 `code` 和 `message` 的对象：

```json
{
  "code": 0,
  "message": "success"
}
```

`code=0` 表示成功，非零 `code` 表示出错，`message` 提供错误描述。

### 错误响应

当请求失败时，设备会返回：

```json
{
  "code": 401,
  "message": "Unauthorized: Invalid token or NO token provided"
}
```

## 字段命名

JSON 字段名使用小驼峰命名法。首字母前缀表示数据类型：

| 前缀 | 类型 | 示例 |
|---|---|---|
| `i` | 整型 | `iCpuUsage` |
| `f` | 浮点型 | `fTemperature` |
| `s` | 字符串 | `sSerialNumber` |
| `b` | 布尔型 | `bRunning` |
| `l` | 列表 | `lDetection` |
| `d` | 对象 | `dIpv4` |

## URL 构造

### CGI 接口

大多数接口需要在前面加上 CGI 基础路径：

```text
http://<DEVICE_IP>/cgi-bin/entry.cgi/<API_PATH>
```

### 直连路径接口

部分接口会绕过 CGI 层，直接通过路径访问：

```text
http://<DEVICE_IP>/api/v1/device/serial-port
http://<DEVICE_IP>/api/v1/file?path=/mnt/sdcard/test.mp4
```

## 鉴权

除少数接口（`/system/key`、`/system/login`、`/system/check`）外，所有接口都需要在请求头中携带 Token：

```text
Cookie: token=<JWT_TOKEN>
```

关于如何获取 Token，请参见 [Authentication](https://wiki.seeedstudio.com/cn/recamera_pro_api_authentication)。

## 错误码

错误码按功能模块进行分段：

| 前缀 | 模块 |
|---|---|
| `100xx` | 设备与系统 |
| `200xx` | 实时预览 |
| `300xx` | 录像 |
| `400xx` | AI 推理 |
| `500xx` | 终端与日志 |

常见错误码：

| 错误码 | 描述 |
|---:|---|
| `10001` | 密码强度过低 |
| `10002` | Token 已过期 |
| `10003` | 固件下载已在进行中 |
| `10004` | 端口号超出范围 |
| `10005` | 端口号已被占用 |

完整列表请参见 [Error Codes](https://wiki.seeedstudio.com/cn/recamera_pro_api_error_codes)。

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用产品的过程中尽可能顺畅。我们提供多种交流渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
