---
description: 介绍使用 API 时可能出现的潜在问题。
title: 常见问题
keywords:
  - Edge AI
  - reCamera Pro
  - API
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_api_faq
sku: 10003420
sidebar_position: 6
last_update:
  date: 07/15/2026
  author: Sizhao zhou
createdAt: '2026-07-15'
updatedAt: '2026-07-15'
url: https://wiki.seeedstudio.com/cn/recamera_pro_api_faq/
---

# 常见问题

## 登录

### 登录返回 iStatus=-1，我该怎么办？

密码不正确。请确认用户名和密码是否正确。默认用户名为 `admin`。

### 登录返回 iStatus=-3，我该怎么办？

多次登录失败触发了基于 IP 的锁定。请等待 `sWaittime` 秒，待锁定解除后再重试。

### 登录成功但后续 API 返回 401，我该怎么办？

Token 缺失或已过期。请确保请求头中包含 `Cookie: token=<JWT_TOKEN>`，并确认 Token 未超过 24 小时的有效期。如果已过期，请重新登录。

### Token 的有效期是多长？

Token 默认有效期为 24 小时（`Max-Age=86400`）。过期后需要重新登录以获取新的 Token。

## 网络

### 修改网络设置后设备无法访问，我该怎么办？

修改 IP 地址、网关或 Wi-Fi 参数可能会导致设备地址发生变化。请通过新地址访问设备，或通过直连网络恢复访问。

### /network/wlan 和 /network/wifi 有什么区别？

`/network/wlan` 用于无线 IPv4 配置（地址、网关、掩码、DNS）。`/network/wifi` 用于当前 Wi-Fi 连接信息、连接和断开连接。

### 连接 Wi-Fi 时，sSsid 应该填什么？

`sSsid` 是 Wi-Fi 网络的唯一标识符。请先调用 `/network/wifi-list`，然后使用列表中的 `sBssid` 值进行连接。

## HTTPS

### 通过 HTTPS 访问时浏览器提示证书不受信任，我该怎么办？

设备使用的是自签名证书。对于本地测试，可以忽略警告继续访问。对于生产环境部署，请安装受信任的证书。

### 启用 HTTPS 后无法通过 HTTP 访问设备，我该怎么办？

启用 HTTPS 后，后续访问请全部使用 `https://<DEVICE_IP>`。

## API 路径

### 为什么有些路径以 /api/v1/ 开头，而有些以 /cgi-bin/ 开头？

大多数端点需要使用 CGI 基础路径 `/cgi-bin/entry.cgi`。串口和文件相关端点是绕过 CGI 层的直接路径，通过 `/api/v1/...` 访问。

### 为什么某个端点会返回 404？

当前固件版本可能尚未实现该端点，或者路径构造不正确。请确认该路径是否需要 `/cgi-bin/entry.cgi`，并检查固件版本。

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
