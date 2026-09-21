---
description: Configure main stream and sub-stream encoding, adjust brightness, exposure and day/night switching to get a usable image in low light on reCamera Pro.
title: Image Quality and Low Light
keywords:
  - reCamera
  - reCamera Pro
  - image quality
  - low light
  - exposure
  - day night
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_image_quality
sku: 10003420
sidebar_position: 2
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/recamera_pro_image_quality/
---

# Image Quality and Low Light

Use the Web UI to tune how reCamera Pro encodes video and how the image looks — including low-light and day/night behavior. All settings are on the live view page: the preview window is on the left, the configuration area on the right.

## Basic Settings: video encoding

In **Basic Settings** you configure the encoding parameters of the main stream and the sub-stream separately.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_5SsPulbjjc.jpg" />

| Parameter | Description |
|---|---|
| Resolution | Video output resolution, e.g. 1920×1080 (1080P) |
| Encoding Format | Video codec, e.g. H.264 |
| Frame Rate (FPS) | Video frame rate, e.g. 30 FPS |
| GOP | Keyframe interval — how often keyframes are generated |
| Bitrate Control Mode | Bitrate control method, e.g. VBR (variable bitrate) |
| Max Bitrate | Maximum bitrate of the video stream, in Kbps |
| Bitrate Quality | Encoding quality level |

Choose which stream to configure based on your scenario:

- **Main stream** — high-definition preview, video storage, and AI analysis.
- **Sub-stream** — low-bandwidth preview, remote viewing, or multi-channel access.

After changing anything, click **Save Video Settings** to apply. Click **Reset** to restore or re-enter parameters.

The page also provides **Audio Settings** and **Audio Storage Settings** switches, so you can enable or disable audio capture and audio storage as needed.

## Display Settings: orientation and day/night

**Display Settings** adjusts how the camera renders the image.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_B1NHc7CXGa.jpg" />

| Parameter | Description |
|---|---|
| Flip | Mirror/flip the image to match the installation orientation |
| Rotate | Rotation angle, e.g. 0° |
| Video Standard | Video standard, e.g. PAL (50HZ) |

Day/night switching is configured on the same page:

| Parameter | Description |
|---|---|
| Switch Mode | How day/night mode switches, e.g. automatic |
| Switch Threshold Sensitivity | Light-level sensitivity that triggers the switch |
| Switch Hysteresis Time | Delay before switching back, to avoid frequent toggling |

## Image adjustment for low light

In the basic image adjustment area you can select a profile and tune:

- Brightness
- Contrast
- Saturation
- Sharpness
- Hue
- Exposure Mode
- Gain Mode

Practical low-light tips:

1. Set **Exposure Mode** so the camera can lengthen exposure time in dim scenes; watch motion blur on moving subjects.
2. Raise **Gain** only as much as needed — high gain adds noise, which also hurts AI detection accuracy.
3. Use **automatic** day/night switching with a moderate threshold and enough hysteresis time for 24/7 installations.
4. Re-check the image with your real scene lighting (indoor, outdoor, backlight, night) instead of judging on the default test scene.

{/* TODO(verify): add a 0.3 lux sample frame (no fill light) captured on production firmware, and confirm recommended exposure/gain values and minimum firmware version for low-light scenes */}

After changing anything, click **Save Display Settings** / **Save Configuration** to apply.

## Related pages

- [Preview, Capture and Manual Recording](/recamera_pro_live_preview/)
- [Configure Detection: Classes, Thresholds and Rate](/recamera_pro_ai_inference/)
- [Watch the Stream in an External Player (RTSP)](/recamera_pro_rtsp/)

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
