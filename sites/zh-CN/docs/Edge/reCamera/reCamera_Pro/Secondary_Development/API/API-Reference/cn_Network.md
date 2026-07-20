---
description: 介绍 Network 的基础 API。
title: 网络
keywords:
  - Edge AI
  - reCamera Pro
  - API
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_api_network
sku: 10003420
sidebar_position: 2
last_update:
  date: 07/15/2026
  author: Sizhao zhou
createdAt: '2026-07-15'
updatedAt: '2026-07-15'
url: https://wiki.seeedstudio.com/cn/recamera_pro_api_network/
---

# 网络

## 端点概览

| Method | Path | Purpose |
|---|---|---|
| GET | `/network/lan` | 获取有线网络配置 |
| PUT | `/network/lan` | 设置有线网络配置 |
| GET | `/network/wlan` | 获取无线 IPv4 配置 |
| PUT | `/network/wlan` | 设置无线 IPv4 配置 |
| GET | `/network/wifi` | 获取当前 Wi-Fi 连接信息 |
| GET | `/network/wifi-status` | 查询 Wi-Fi 电源状态 |
| POST | `/network/wifi-status?power=on/off` | 切换 Wi-Fi 电源 |
| GET | `/network/wifi-list` | 扫描附近的 Wi-Fi 网络 |
| POST | `/network/wifi` | 连接到 Wi-Fi |
| DELETE | `/network/wifi` | 断开或忽略 Wi-Fi |
| GET | `/web/setting` | 查询 HTTP API 设置 |
| POST | `/web/setting` | 设置 HTTP API |
| GET | `/ftp/setting` | 查询 FTP 服务设置 |
| POST | `/ftp/setting` | 设置 FTP 服务 |

## LAN 和 WLAN 配置

### 获取配置

```text
GET /network/lan
GET /network/wlan
```

响应：

```json
{
  "dIpv4": {
    "sV4Address": "192.168.7.200",
    "sV4Gateway": "192.168.6.2",
    "sV4Method": "static",
    "sV4Netmask": "255.255.254.0"
  },
  "dLink": {
    "bEnableMethod": true,
    "iPower": 1,
    "sAddress": "40:FD:F3:25:1A:8E",
    "sDNS1": "202.96.134.133",
    "sDNS2": "223.5.5.5",
    "sInterface": "wlan0"
  }
}
```

| Field | Description |
|---|---|
| `dIpv4.sV4Address` | IPv4 地址 |
| `dIpv4.sV4Gateway` | IPv4 网关 |
| `dIpv4.sV4Method` | IP 分配方式，`dhcp` 或 `static` |
| `dIpv4.sV4Netmask` | IPv4 子网掩码 |
| `dLink.sDNS1` / `dLink.sDNS2` | DNS 服务器 |
| `dLink.sAddress` | MAC 地址 |
| `dLink.sInterface` | 网络接口名称，例如 `eth0` 或 `wlan0` |
| `dLink.iPower` | 接口电源状态 |
| `dLink.bEnableMethod` | 是否启用手动配置 |

### 设置配置

```text
PUT /network/lan
PUT /network/wlan
```

请求体：

```json
{
  "dIpv4": {
    "sV4Address": "192.168.1.123",
    "sV4Gateway": "192.168.1.1",
    "sV4Method": "dhcp",
    "sV4Netmask": "255.255.255.0"
  },
  "dLink": {
    "sDNS1": "8.8.8.8",
    "sDNS2": "8.8.4.4",
    "bEnableMethod": true
  }
}
```

响应：

```json
{
  "code": 0,
  "message": "SUCCESS TO SET IP"
}
```

## 当前 Wi-Fi 信息

```text
GET /network/wifi
```

响应结构与 LAN/WLAN 配置相同。

## Wi-Fi 电源

### 查询 Wi-Fi 电源状态

```text
GET /network/wifi-status
```

响应：

```json
{
  "iPower": 1,
  "id": 1,
  "sType": "wifi"
}
```

| Field | Description |
|---|---|
| `iPower` | Wi-Fi 电源状态，`1` 开，`0` 关 |
| `id` | 接口 ID |
| `sType` | 接口类型 |

### 切换 Wi-Fi 电源

```text
POST /network/wifi-status?power=on
POST /network/wifi-status?power=off
```

| Parameter | Value | Description |
|---|---|---|
| `power` | `on`, `off` | 打开或关闭 Wi-Fi |

## Wi-Fi 扫描与连接

### 扫描 Wi-Fi 列表

```text
GET /network/wifi-list
```

响应：

```json
[
  {
    "sBssid": "58:b4:bb:93:b8:e3",
    "sSsid": "SEEED-MKT",
    "iFrequency": 5180,
    "iRssi": -44,
    "sFlags": "[WPA-PSK-CCMP][WPA2-PSK-CCMP][ESS]",
    "sConnected": true,
    "sReserved": true
  }
]
```

| Field | Description |
|---|---|
| `sBssid` | Wi-Fi BSSID，用作连接的唯一标识符 |
| `sSsid` | Wi-Fi 网络名称 |
| `iFrequency` | 频段信道 |
| `iRssi` | 信号强度 |
| `sFlags` | 安全类型 |
| `sConnected` | 是否当前已连接 |
| `sReserved` | 是否已保存密码 |

### 连接到 Wi-Fi

```text
POST /network/wifi
```

请求体：

```json
{
  "sSsid": "58:b4:bb:93:b8:e3",
  "sPassword": "your_wifi_password"
}
```

| Field | Description |
|---|---|
| `sSsid` | Wi-Fi 唯一标识符；使用 `/network/wifi-list` 中的 `sBssid` 值 |
| `sPassword` | Wi-Fi 密码 |

响应：

```json
{
  "code": 0,
  "message": ""
}
```

### 断开或忽略 Wi-Fi

```text
DELETE /network/wifi?disconnect=<ssid>
DELETE /network/wifi?Ignore=<ssid>
```

| Parameter | Description |
|---|---|
| `disconnect` | 从指定 Wi-Fi 断开连接 |
| `Ignore` | 忘记指定 Wi-Fi |

响应：

```json
{
  "code": 0,
  "message": "",
  "status": 0
}
```

| `status` | Description |
|---:|---|
| `0` | 成功 |
| `-1` | 超时 |
| `-2` | 密码错误 |

## HTTP API 设置

### 查询设置

```text
GET /web/setting
```

响应：

```json
{
  "sEnable": true,
  "sApiKey": "M8RZVF3hXrVDk*%2%LlN*^7nuCRHPiIT"
}
```

| Field | Description |
|---|---|
| `sEnable` | 是否启用 HTTP API |
| `sApiKey` | API 密钥 |

### 设置

```text
POST /web/setting
```

请求体：

```json
{
  "sEnable": true,
  "sApiKey": "your_api_key"
}
```

## FTP 服务设置

### 查询设置

```text
GET /ftp/setting
```

响应：

```json
{
  "sEnable": false,
  "sFtpPassword": "Seeed123.",
  "sFtpPort": "21",
  "sFtpUser": "ftpuser"
}
```

| Field | Description |
|---|---|
| `sEnable` | 是否启用 FTP 服务 |
| `sFtpPort` | FTP 端口 |
| `sFtpUser` | FTP 用户名 |
| `sFtpPassword` | FTP 密码 |

### 设置

```text
POST /ftp/setting
```

请求体：

```json
{
  "sEnable": true,
  "sFtpPort": "21",
  "sFtpUser": "ftpuser",
  "sFtpPassword": "StrongPassword123!"
}
```


## 组播

```text
GET /network/muticast
```

:::note
此端点已在设备 API 表中列出。如果当前固件不支持，它可能会返回 404 或 API Not Found 响应。
:::

错误码：

| Code | Description |
|---:|---|
| `10001` | FTP 密码强度太弱 |
| `10004` | FTP 端口超出范围 |
| `10005` | FTP 端口已被占用 |


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