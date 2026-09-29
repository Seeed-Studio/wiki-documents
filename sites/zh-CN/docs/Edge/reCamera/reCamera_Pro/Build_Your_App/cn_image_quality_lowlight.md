---
description: 配置主码流和子码流编码，调节亮度、曝光和昼夜切换，以在 reCamera Pro 的低照度环境下获得可用图像。
title: 图像质量与低照度
keywords:
  - reCamera
  - reCamera Pro
  - 图像质量
  - 低照度
  - 曝光
  - 昼夜
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_image_quality
sku: 10003420
sidebar_position: 2
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/cn/recamera_pro_image_quality/
---

# 图像质量与低照度

使用 Web UI 调整 reCamera Pro 的视频编码方式和图像效果——包括低照度和昼/夜行为。所有设置都在实时预览页面：左侧是预览窗口，右侧是配置区域。

## 基本设置：视频编码

在 **Basic Settings** 中，你可以分别配置主码流和子码流的编码参数。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_5SsPulbjjc.jpg" />

| 参数 | 说明 |
|---|---|
| Resolution | 视频输出分辨率，例如 1920×1080（1080P） |
| Encoding Format | 视频编码格式，例如 H.264 |
| Frame Rate (FPS) | 视频帧率，例如 30 FPS |
| GOP | 关键帧间隔——关键帧生成的频率 |
| Bitrate Control Mode | 码率控制方式，例如 VBR（可变码率） |
| Max Bitrate | 视频码流的最大码率，单位 Kbps |
| Bitrate Quality | 编码质量等级 |

根据你的使用场景选择要配置的码流：

- **Main stream** —— 高清预览、视频存储和 AI 分析。
- **Sub-stream** —— 低带宽预览、远程查看或多通道接入。

修改任意参数后，点击 **Save Video Settings** 以生效。点击 **Reset** 可恢复或重新输入参数。

本页面还提供 **Audio Settings** 和 **Audio Storage Settings** 开关，你可以按需启用或禁用音频采集和音频存储。

## 显示设置：方向与昼/夜

**Display Settings** 用于调整摄像头如何呈现图像。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_B1NHc7CXGa.jpg" />

| 参数 | 说明 |
|---|---|
| Flip | 镜像/翻转图像以匹配安装方向 |
| Rotate | 旋转角度，例如 0° |
| Video Standard | 视频制式，例如 PAL（50HZ） |

昼/夜切换也在同一页面配置：

| 参数 | 说明 |
|---|---|
| Switch Mode | 昼/夜模式的切换方式，例如自动 |
| Switch Threshold Sensitivity | 触发切换的光照强度灵敏度 |
| Switch Hysteresis Time | 切回前的延迟时间，用于避免频繁切换 |

## 低照度图像调节

在基础图像调节区域，你可以选择一个配置档并调节：

- 亮度
- 对比度
- 饱和度
- 锐度
- 色调
- 曝光模式
- 增益模式

低照度实用建议：

1. 设置 **Exposure Mode**，让摄像头在昏暗场景中可以延长曝光时间；同时注意运动物体的拖影。
2. 仅在必要范围内提高 **Gain**——过高的增益会带来噪点，也会降低 AI 检测的准确率。
3. 对于 24/7 场景，使用 **automatic** 昼/夜切换，并设置适中的阈值和足够的滞回时间。
4. 使用你的真实场景光照（室内、室外、逆光、夜间）重新检查图像，而不是只根据默认测试场景来判断。

{/* TODO(verify): add a 0.3 lux sample frame (no fill light) captured on production firmware, and confirm recommended exposure/gain values and minimum firmware version for low-light scenes */}

修改任意参数后，点击 **Save Display Settings** / **Save Configuration** 以生效。

## 相关页面

- [预览、抓拍和手动录像](/cn/recamera_pro_live_preview/)
- [配置检测：类别、阈值和频率](/cn/recamera_pro_ai_inference/)
- [在外部播放器中观看视频流（RTSP）](/cn/recamera_pro_rtsp/)

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
