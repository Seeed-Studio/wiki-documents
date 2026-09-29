---
description: 在视频上叠加通道名称、日期/时间和序列号（OSD），并在 reCamera Pro 上使用隐私遮罩隐藏敏感区域。
title: OSD 叠加与隐私遮罩
keywords:
  - reCamera
  - reCamera Pro
  - OSD
  - privacy mask
  - image masking
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_osd_masks
sku: 10003420
sidebar_position: 4
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/cn/recamera_pro_osd_masks/
---

# OSD 叠加与隐私遮罩

这两个功能都在 Web UI 的实时预览页面中进行配置：**OSD Settings** 用于在视频上添加文字叠加，**Image Masking** 用于隐藏敏感区域。

## OSD 设置

**OSD（On-Screen Display）** 会在视频流上叠加通道名称、日期和时间以及设备序列号等信息——这对于监控、回放查看和设备识别非常有用。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_bdTuIGi3cp.jpg" />

| 配置项 | 说明 |
|---|---|
| Font Size | OSD 文本大小 |
| Font Color | OSD 文本颜色 |
| Color Mode | OSD 颜色模式，支持自定义颜色选项 |
| Channel Name Overlay | 在画面上显示通道名称 |
| Channel Name | 自定义通道名称，例如 Camera 01 |
| Channel Name Coordinates | 通道名称在画面上的显示位置 |
| Date and Time Overlay | 在画面上显示日期和时间 |
| Date Format | 日期显示格式 |
| Time Format | 时间显示格式，例如 24 小时制 |
| Show Weekday | 是否显示星期 |
| Date and Time Coordinates | 日期/时间在画面上的显示位置 |
| Serial Number Overlay | 是否显示设备序列号 |

OSD 位置使用相对坐标，因此你可以在布局允许的任意位置放置文本——也可以直接在预览中**拖动文本**到你喜欢的位置。

配置完成后，点击 **Save Settings** 以应用 OSD 参数。

## 图像遮罩（隐私遮罩）

**Image Masking** 用于配置隐私遮罩区域，以遮挡画面中敏感的部分，从而确保隐私信息不会出现在实时预览、录像或视频流中。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_wj02u6saTl.jpg" />

你可以手动添加遮罩，也可以让 Web UI 自动绘制。添加完成后保存设置——效果会立即在预览中显示。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_NtmxY1TDqE.png" />

典型场景：

- 遮挡办公区域中的敏感信息
- 遮挡住宅、门牌号、屏幕等私人区域
- 满足公共或共享空间中的视频隐私保护要求

## 验证效果

保存后，从图像可能出现的两个位置进行检查：

1. **实时预览**——确认在当前分辨率下，OSD 文本清晰可读，遮罩能完全覆盖目标区域。
2. **录像和视频流**——拍一张照片、录一段短视频，并在启用时观看 RTSP 视频流，确认叠加/遮罩是写入输出中的，而不仅仅是在浏览器中显示。

{/* TODO(verify): confirm whether privacy masks and OSD apply identically to snapshots, event recordings, and RTSP output on production firmware, and whether masks affect AI detection in masked areas */}

## 相关页面

- [预览、抓拍和手动录像](/cn/recamera_pro_live_preview/)
- [图像质量与低照度](/cn/recamera_pro_image_quality/)
- [配置检测：类别、阈值和频率](/cn/recamera_pro_ai_inference/)

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
