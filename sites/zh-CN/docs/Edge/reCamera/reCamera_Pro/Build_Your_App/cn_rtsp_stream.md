---
description: 在 reCamera Pro 上启用 RTSP 输出，并在 VLC 等外部播放器中观看视频流，或将其集成到 NVR 和视频管理系统中。
title: 在外部播放器中观看视频流（RTSP）
keywords:
  - reCamera
  - reCamera Pro
  - RTSP
  - 流媒体
  - VLC
  - NVR
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_rtsp
sku: 10003420
sidebar_position: 3
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/cn/recamera_pro_rtsp/
---

# 在外部播放器中观看视频流（RTSP）

Web UI 的 **Streaming Settings** 页面用于配置 reCamera Pro 如何输出视频流，这样你就可以在第三方播放器（VLC、ffplay 等）中观看视频，或将摄像头集成到 NVR、视频管理系统或你自己的应用中。

## 1. 在设备上启用流媒体输出

1. 登录 Web UI 并打开实时预览页面。
2. 在右侧进入 **Streaming Settings**。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_ZrIYeGVxqa.png" />

3. 配置以下项目：

| 参数 | 描述 |
|---|---|
| Stream Setting Switch | 为当前码流启用或禁用流媒体输出 |
| Main Stream / Sub-Stream | 选择要配置的码流 |
| Streaming Protocol | 流媒体协议，例如 RTSP |
| Authentication Type | 访问码流时需要的认证方式，例如无认证 |

4. 点击 **Apply Settings** 保存。

主码流和子码流是分别配置的，因此你可以例如将高清主码流发送到录像机，将低码率子码流发送给远程观看者。

## 2. 获取码流地址

{/* TODO(verify): document exactly where the RTSP URL (including port and stream path) is shown in the Web UI, and the default port/path for main stream and sub-stream */}

码流地址基于设备 IP —— `rtsp://<reCamera_IP>:<port>/<stream path>`。在应用配置后，查看 Streaming Settings 页面以获取每路码流的准确地址。

## 3. 在外部播放器中播放

**VLC**：Media → Open Network Stream → 粘贴 RTSP 地址 → Play。

**ffplay**（来自 FFmpeg）：

```bash
ffplay rtsp://<reCamera_IP>:<port>/<stream path>
```

如果你启用了除 "no authentication" 之外的认证类型，请在播放器提示时提供凭据。
{/* TODO(verify): confirm how credentials are passed in the RTSP URL / player dialog for each supported authentication type */}

**NVR / VMS**：将摄像头作为 RTSP 设备添加，使用相同的地址；如果 NVR 管理很多通道，请选择子码流。

## 故障排查

- **播放器中没有画面** — 确认你正在播放的码流已打开 Stream Setting Switch，并且播放器与设备在同一网络中。
- **Wi-Fi 播放卡顿** — 切换到子码流，或在 [Basic Settings](/cn/recamera_pro_image_quality/) 中降低主码流码率。
- **在浏览器预览中可以播放，但外部无法播放** — 检查 Authentication Type 以及任何网络访问控制（参见 [Network, Time and Access Control](/cn/recamera_pro_device_info/)）。

## 相关页面

- [图像质量与低照度](/cn/recamera_pro_image_quality/)（每路码流的编码参数）
- [配置事件录像](/cn/recamera_pro_record_settings/)

## 技术支持与产品讨论

感谢你选择我们的产品！我们为你提供多种支持方式，以确保你在使用我们产品时的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
