---
description: A field-level index of the reCamera Pro built-in Web UI — every page, its key settings, and where to find the full guide.
title: Web UI Reference
keywords:
  - reCamera
  - reCamera Pro
  - Web UI
  - live preview
  - AI inference
  - record settings
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_webui_reference
sku: 10003420
sidebar_position: 3
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/recamera_pro_webui_reference/
createdAt: '2026-09-21'
updatedAt: '2026-09-21'
---

# Web UI Reference

reCamera Pro ships with a built-in Web UI. Connect the device to your network, open its IP address in a browser, and log in (default credentials: `root` / `recamera` — change them before deployment, see [Network, Time and Access](/recamera_pro_device_info/)).

This page is a field-level index: for each Web UI module it lists the key settings you can configure and links to the task guide that explains when and how to use them.

## Module map

| Web UI module | What it does | Full guide |
| --- | --- | --- |
| Live Preview | Real-time video, take photo, record video, main/sub stream switching | [Preview, Capture and Record](/recamera_pro_live_preview/) |
| Basic / Display Settings | Resolution, encoding, FPS, GOP, bitrate; flip/rotate, day-night switching, image tuning | [Image Quality and Low Light](/recamera_pro_image_quality/) |
| OSD Settings | Channel name, date/time, serial number overlays | [OSD and Privacy Masks](/recamera_pro_osd_masks/) |
| Image Masking | Privacy masking of sensitive areas | [OSD and Privacy Masks](/recamera_pro_osd_masks/) |
| Streaming Settings | RTSP streaming for third-party platforms and NVRs | [Stream Video over RTSP](/recamera_pro_rtsp/) |
| AI Inference | Model management, upload, configuration, inference control, monitoring, output | [Configure Detection](/recamera_pro_ai_inference/) |
| Record Settings | Trigger rules (AI / scheduled / GPIO / serial / HTTPS / loop / sound), storage, file preview | [Configure Event Recording](/recamera_pro_record_settings/) |
| Device Info | System info, time, network (WiFi), connection settings (SSH/HTTP/baud), firmware, config export/import | [Network, Time and Access](/recamera_pro_device_info/) |
| Terminal | Live system logs and a browser terminal console | [Terminal, SSH and Debug UART](/recamera_pro_terminal/) |

## Live Preview

The left side of the page shows the real-time video preview; the right side shows configuration panels.

- **Start/Stop Playback** — play the current camera feed in the browser
- **Main Stream / Sub-Stream** — main stream for high-definition preview, storage and AI analysis; sub-stream for low-bandwidth or multi-channel viewing
- **Take Photo / Record Video** — capture a still or a video clip from the current feed
- **Volume / Connection status** — playback volume and live connection state; a failure prompt appears when the device is disconnected or the stream is abnormal

## Basic Settings (video encoding)

Configured separately for main stream and sub-stream; click **Save Video Settings** to apply, **Reset** to restore.

| Parameter | Description |
| --- | --- |
| Resolution | Video output resolution, e.g., 1920×1080 (1080P) |
| Encoding Format | Video codec, e.g., H.264 |
| Frame Rate (FPS) | Video frame rate, e.g., 30 FPS |
| GOP | Keyframe interval |
| Bitrate Control Mode | e.g., VBR (Variable Bitrate) |
| Max Bitrate | Maximum bitrate in Kbps |
| Bitrate Quality | Encoding quality level |

Audio capture and audio storage can be enabled or disabled here (**Audio Settings** / **Audio Storage Settings**).

## Display Settings

| Group | Parameters |
| --- | --- |
| Orientation | Flip, Rotate (e.g., 0°), Video Standard (e.g., PAL 50Hz) |
| Day/Night | Switch Mode (e.g., automatic), Switch Threshold Sensitivity, Switch Hysteresis Time |
| Image tuning | Brightness, Contrast, Saturation, Sharpness, Hue, Exposure Mode, Gain Mode (profile-based) |

## OSD Settings

Overlays rendered on the video feed. Coordinates are relative positions and can also be dragged directly.

| Configuration item | Description |
| --- | --- |
| Font Size / Font Color / Color Mode | OSD text appearance, with custom color option |
| Channel Name Overlay / Name / Coordinates | e.g., "Camera 01", positioned on screen |
| Date and Time Overlay / Date Format / Time Format / Show Weekday / Coordinates | Time overlay options |
| Serial Number Overlay | Show or hide the device serial number |

## Image Masking

Draw privacy masks manually or automatically to obscure sensitive areas (offices, residences, door numbers, screens) in preview, recording and streams. Masks take effect immediately after saving.

## Streaming Settings

Configured per stream (main/sub):

| Parameter | Description |
| --- | --- |
| Stream Setting Switch | Enable or disable streaming for the current stream |
| Streaming Protocol | e.g., RTSP |
| Authentication Type | e.g., no authentication |
| Apply Settings | Save and apply the configuration |

After configuration, third-party clients, platforms or NVRs can pull the video feed from the stream address.

## AI Inference

| Sub-module | Key fields |
| --- | --- |
| Model Management | Model File, Model Name, Framework (e.g., RKNN), Algorithm (e.g., YOLO, nanodet), Type (e.g., Detection), Version, Size, Operations (Configure / Delete) |
| Upload Model | Drag-and-drop or file picker; RKNN model files |
| SenseCraft Model Conversion | Entry point **View SenseCraft Models**; converts ONNX to RKNN (quantization dataset optional) |
| Model Configuration | Model Name, Framework, Version, Type, Algorithm, Author, Description, Detection Categories (manual or TXT import), Post-processing (IOU, Confidence, max_obj) |
| Inference Configuration | Inference Enable, Running Model, Inference Frequency (FPS), Inference Status, Real-time Inference FPS |
| Real-time Monitoring | Log fields: timestamp, task_type, class_id, class_name, score, bbox, detection_count; controls to disable, pause or clear |
| Inference Output | Output template, task type, and method: HTTP, MQTT, or UART |

Field details and workflow: [Configure Detection](/recamera_pro_ai_inference/). Output integration: [HTTP/UART](/recamera_pro_http_uart/), [MQTT](/recamera_pro_mqtt/).

## Record Settings

| Sub-module | Key fields |
| --- | --- |
| Recording Configuration | Recording format, trigger rules, schedules |
| Trigger Methods | AI Inference Trigger (categories, confidence range, trigger areas), Scheduled Trigger (interval), GPIO Trigger (pin, state, signal, debounce), Serial Trigger (port, command), HTTPS Trigger (trigger URL), Loop Trigger (continuous), Sound Event Trigger (Sound Lab models and sound categories) |
| Schedule Management | Effective time periods for recording rules |
| Storage Management | View and manage device storage space |
| File Preview | Browse recorded video files |

Step-by-step: [Configure Event Recording](/recamera_pro_record_settings/) and [Find Recordings and Storage](/recamera_pro_storage/).

## Device Info

| Sub-module | Key fields |
| --- | --- |
| Basic Information | Hardware/software versions, system resource usage |
| Time Settings | System time |
| Network Settings | WiFi status; detailed network info per connected network |
| Connection Settings | SSH remote connection enable, HTTP settings, serial port baud rate |
| System Settings | Firmware version and update, restart, change password, factory reset |
| Export/Import Configuration | Export downloads a settings file (tar); import loads it and applies after restart |

Details: [Network, Time and Access](/recamera_pro_device_info/), [Firmware Update and Recovery](/recamera_pro_firmware_update/), [Backup and Restore](/recamera_pro_backup_restore/).

## Terminal

- **System Log** — real-time operation logs; filter by level or keywords, clear, or download log files for analysis and support
- **Terminal console** — log in to the device shell from the browser without an SSH tool (default `root` / `recamera`)

Details: [Terminal, SSH and Debug UART](/recamera_pro_terminal/); log collection for support: [Collect Logs](/recamera_pro_collect_logs/).

<!-- TODO(verify): confirm default Web UI login credentials and firmware-shipped defaults against the current release; confirm exact module labels in the shipping firmware UI. -->


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
