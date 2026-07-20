---
description: 介绍设备和系统的基础 API。
title: 设备与系统
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
url: https://wiki.seeedstudio.com/cn/recamera_pro_api_device-and-system/
---

# 设备与系统

## 接口概览

| Method | Path | Purpose |
|---|---|---|
| GET | `/system/device-info` | 获取设备序列号、固件版本、传感器和底板型号 |
| GET | `/system/resource-info` | 获取 CPU、NPU、内存和存储使用情况 |
| GET | `/system/time` | 获取系统时间、时区和 NTP 配置 |
| PUT | `/system/time` | 设置系统时间 |
| GET | `/system/battery` | 获取电池状态 |
| GET | `/system/check` | 检查是否为首次登录 |
| GET | `/system/ssh` | 查询 SSH 运行状态 |
| POST | `/system/ssh` | 启动或停止 SSH |
| GET | `/system/secure` | 查询 HTTPS 状态 |
| POST | `/system/secure` | 启用或禁用 HTTPS |
| GET | `/config/export` | 导出设备配置 |
| POST | `/config/upload` | 导入设备配置 |
| POST | `/system/reboot` | 重启设备 |
| POST | `/system/factory-reset` | 恢复出厂设置 |

## 获取设备信息

```text
GET /system/device-info
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

| Field | Description |
|---|---|
| `sSerialNumber` | 设备序列号 |
| `sFirmwareVersion` | 固件版本 |
| `sSensorModel` | 传感器板型号 |
| `sBasePlateModel` | 底板型号 |

## 获取系统资源状态

```text
GET /system/resource-info
```

响应：

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
| `iCpuUsage` | CPU 使用率百分比 |
| `iNpuUsage` | NPU 使用率百分比 |
| `sMem.iMemTotal` | 内存总量 |
| `sMem.iMemUsed` | 已用内存 |
| `sMem.iMemUsage` | 内存使用率百分比 |
| `sStorage.iStorageTotal` | 存储总量 |
| `sStorage.iStorageUsed` | 已用存储 |
| `sStorage.iStorageUsage` | 存储使用率百分比 |

## 系统时间

### 获取系统时间

```text
GET /system/time
```

响应：

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
| `sMethod` | 时间来源，`ntp` 或 `manual` |
| `dNtpConfig.sAddress` | NTP 服务器地址 |
| `dNtpConfig.sPort` | NTP 端口 |
| `dNtpConfig.status` | NTP 状态，`0` 表示成功 |
| `iTimestamp` | 以秒为单位的 Unix 时间戳 |
| `sTimezone` | 时区城市 |
| `sTz` | 时区，例如 `UTC+8` |

### 设置系统时间

```text
PUT /system/time
```

NTP 模式请求体：

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

手动模式请求体：

```json
{
  "sMethod": "manual",
  "iTimestamp": 1784083074,
  "sTimezone": "Asia/Shanghai",
  "sTz": "UTC+8"
}
```

响应：

```json
{
  "iTimestamp": 1784083074,
  "sTimezone": "Asia/Shanghai",
  "sTz": "UTC+8"
}
```

## 电池状态

```text
GET /system/battery
```

响应：

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
| `isAttached` | 是否连接了电池 |
| `displaySteps` | 当前电量阶梯数 |
| `totalSteps` | 总电量阶梯数 |
| `isCharging` | 电池是否正在充电 |

## 检查是否首次登录

```text
GET /system/check
```

响应：

```json
{
  "bFirst": false
}
```

`bFirst=true` 表示设备处于首次登录流程中，应修改默认密码。

## SSH

### 查询 SSH 状态

```text
GET /system/ssh
```

响应：

```json
{
  "bRunning": true
}
```

### 启动或停止 SSH

```text
POST /system/ssh
```

请求体：

```json
{
  "bRunning": true
}
```

| Field | Description |
|---|---|
| `bRunning` | `true` 启动 SSH，`false` 停止 SSH |

## HTTPS

### 查询 HTTPS 状态

```text
GET /system/secure
```

响应：

```json
{
  "sEnable": true
}
```

### 启用或禁用 HTTPS

```text
POST /system/secure
```

请求体：

```json
{
  "sEnable": true
}
```

响应：

```json
{
  "code": 0,
  "message": "Settings applied successfully"
}
```

启用 HTTPS 后，后续访问请使用 `https://<DEVICE_IP>`。

## 配置管理

### 导出配置

```text
GET /config/export
```

响应：

```json
{
  "size": 35116544,
  "url": "/download/config.tar"
}
```

| Field | Description |
|---|---|
| `size` | 配置文件大小 |
| `url` | 下载路径；在前面加上设备 IP 组成完整 URL |

下载 URL：

```text
http://<DEVICE_IP>/download/config.tar
```

### 导入配置

```text
POST /config/upload
```

导入配置会覆盖当前设备设置。请先导出当前配置作为备份。

## 重启

```text
POST /system/reboot
```

响应：

```json
{
  "code": 0,
  "message": "success"
}
```

设备将重启，当前连接会中断。请等待设备重新上线后再继续操作。

## 恢复出厂设置

恢复出厂设置需要两阶段确认。

阶段 1：

```text
POST /system/factory-reset
```

响应：

```json
{
  "code": 0,
  "sConfirmToken": "adfagghvshf"
}
```

阶段 2，在确认令牌有效期内提交令牌：

```text
POST /system/factory-reset
```

请求体：

```json
{
  "sConfirmToken": "adfagghvshf"
}
```

响应：

```json
{
  "code": 0,
  "message": "success"
}
```

恢复出厂设置会清除设备的所有配置。请确保已做好备份后再执行此操作。


## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>