---
description: 本页概述了 API，向你介绍基础地址、协议和认证方式。请先阅读本页以获得全面了解。
title: 介绍
keywords:
  - Edge AI
  - reCamera Pro
  - API
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_api_introduction
sku: 10003420
sidebar_position: 1
last_update:
  date: 07/15/2026
  author: Sizhao zhou
createdAt: '2026-07-15'
updatedAt: '2026-07-15'
url: https://wiki.seeedstudio.com/cn/recamera_pro_api_introduction/
---

# 介绍

reCamera RV1126B 提供了一组基于 HTTP 的 Web API，允许你获取设备信息、配置系统参数、管理网络、控制音视频、运行 AI 推理、管理文件以及执行固件更新。

## 基本信息

| 项目 | 描述 |
|---|---|
| 设备 IP | 默认 `192.168.42.1`；实际地址取决于你的网络 |
| 协议 | HTTP 或 HTTPS |
| 基础路径 | `/cgi-bin/entry.cgi` |
| 内容类型 | `application/json` |
| 认证方式 | 通过 Cookie 的 JWT Token |

## URL 结构

所有 CGI API 端点都遵循以下结构：

```text
http://<DEVICE_IP>/cgi-bin/entry.cgi/<api_category>/<resource>/<sub_resource>
```

例如，要获取设备信息：

```text
http://192.168.42.1/cgi-bin/entry.cgi/system/device-info
```

有些端点不经过 CGI 基础路径，而是直接访问，例如串口和文件 API：

```text
http://<DEVICE_IP>/api/v1/device/serial-port
http://<DEVICE_IP>/api/v1/file?path=/mnt/sdcard/test.mp4
```

## 文档概览

| 文档 | 内容 |
|---|---|
| 快速开始 | 从零开始登录并调用你的第一个 API |
| 认证 | 登录流程、Token 使用方式和密码修改 |
| 通用约定 | 响应格式、字段命名、错误码 |
| API 参考 | 按功能组织的详细端点说明 |
| 错误码 | 错误码参考 |
| 常见问题 | 常见问题解答 |


## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
