---
description: Start here — find the right guide for what you want to do with reCamera Pro.
title: reCamera Pro
keywords:
  - reCamera
  - reCamera Pro
  - Edge AI
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro
sku: 10003420
last_update:
  date: 09/21/2026
  author: Seeed Studio
url: https://wiki.seeedstudio.com/recamera_pro/
createdAt: '2026-09-21'
updatedAt: '2026-09-21'
---

# Start Here

reCamera Pro is an AI camera built on the Rockchip RV1126B SoC (quad-core Cortex-A53 @ 1.2 GHz, 3 TOPS NPU), with a 4K camera (SC850SL, 4K@30FPS), a 6-axis IMU, microphone input, a 1 W speaker, 16 GB eMMC plus an SD card slot, and rich expansion interfaces (GPIO, UART, CAN, MIPI-DSI). Everything on the device — live preview, AI detection, event recording, sound model training — can be operated from the built-in Web UI, and deeper integration is available through the HTTP API and native SDK.

This page is your task navigator: pick what you want to do below, or follow the default getting-started route if this is your first time.

<!-- TODO(O1, per migration map): add real preview screenshot as the capability entry image (from Live Preview page assets); verify all statements in this intro against the shipping firmware before release. -->

## Default getting-started route

New to reCamera Pro? Follow these three steps in order:

1. [Quick start: see your first AI detection](/recamera_pro_getting_started/) — power the device, log in to the Web UI, and watch a live detection.
2. [First task: detect and record](/recamera_pro_first_recording/) — turn a detection into an event recording and play it back.
3. [Access the device over Wi-Fi](/recamera_pro_wifi_access/) — move from the direct connection to your local network.

## What do you want to do?

### 1. Getting Started

- [See your first AI detection](/recamera_pro_getting_started/)
- [Detect and record your first event](/recamera_pro_first_recording/)
- [Access the device over Wi-Fi](/recamera_pro_wifi_access/)

### 2. Build Your App

- [Preview, capture photos and record manually](/recamera_pro_live_preview/)
- [Adjust image quality and low-light performance](/recamera_pro_image_quality/) — includes the 0.3 lux low-light sample <!-- TODO(O1/B2): link the actual 0.3 lux sample once captured and verified on the image quality page; do not fabricate sample images. -->
- [Watch the stream in an external player (RTSP)](/recamera_pro_rtsp/)
- [Set up OSD and privacy masks](/recamera_pro_osd_masks/)
- [Configure detection: classes, thresholds, schedule](/recamera_pro_ai_inference/)
- [Configure event recording](/recamera_pro_record_settings/) and [find your recordings & manage storage](/recamera_pro_storage/)
- [Train your own sound model](/recamera_pro_acoustic_lab_usage/) and [trigger capture by sound](/recamera_pro_sound_trigger/)
- [Send detection results out: MQTT](/recamera_pro_mqtt/) · [HTTP / UART](/recamera_pro_http_uart/)
- [Trigger capture from an external device](/recamera_pro_uart_usage/)
- [Sound-triggered alerts in Home Assistant](/recamera_pro_ha_sound_alert/)
- [Make your first API call](/recamera_pro_api_quick_start/)

### 3. Use Your Own Model

- [Choose a model deployment path](/recamera_pro_model_path/)
- [Upload and configure an RKNN model](/recamera_pro_rknn_upload/)
- [Convert ONNX models with SenseCraft](/recamera_pro_sensecraft/)
- [Convert models with RKNN-Toolkit2](/recamera_pro_rknn_model_conversion/)
- [Validate model performance on device](/recamera_pro_model_validate/)

### 4. Develop Your Own App

- [Choose a development path](/recamera_pro_dev_path/)
- [Build a minimal SDK application](/recamera_pro_sdk_setup/)
- [Terminal, SSH and debug UART](/recamera_pro_terminal/)
- [Develop with AI coding agents](/recamera_pro_development_cpp_skill/)
- [Camera / audio / inference pipelines](/recamera_pro_media_dev/)
- Peripherals: [IMU data](/recamera_pro_imu_usage/) · [MIPI-DSI display](/recamera_pro_mipi_dsi_screen_usage/) · [speaker & volume](/recamera_pro_speaker_usage/) · [GPIO pins](/recamera_pro_gpio_guide/)
- Examples: [tilt & shake detection](/recamera_pro_imu_tilt_shake_detection/) · [visual wake + speech recognition](/recamera_pro_visual_wake_stt/)
- [Experimental Debian 13 image](/recamera_pro_debian/)

### 5. Deploy & Maintain

- [Pre-deployment checklist](/recamera_pro_deploy_checklist/)
- [Network, time and access control](/recamera_pro_device_info/)
- [Back up and restore configuration](/recamera_pro_backup_restore/)
- [Firmware update and recovery](/recamera_pro_firmware_update/)

### 6. Reference

- [Hardware specifications and interface diagrams](/recamera_pro_hardware_specifications/)
- [Web UI field & button index](/recamera_pro_webui_reference/)
- [Model compatibility and output formats](/recamera_pro_model_compatibility/)
- [Downloads and release notes](/recamera_pro_downloads/)
- [API reference](/recamera_pro_api_introduction/)

### 7. Troubleshooting

- [Troubleshoot by symptom](/recamera_pro_faqs/)
- [Collect logs for support](/recamera_pro_collect_logs/)
- [API call troubleshooting](/recamera_pro_api_faq/)

## Capabilities at a glance

<!-- TODO(O1, per migration map "capability status"): build the capability status matrix from the shipping firmware — for each capability (AI detection, event recording, sound training/Acoustic Lab, RTSP streaming, MQTT/HTTP/UART output, external trigger, API), state availability and any known limitations. Sources: Ai_Inference §Feature Overview, Acoustic Lab §Introduction, Live Preview real preview image. Do not invent firmware facts; verify version by version. -->

- **AI vision** — on-device object/person detection with configurable classes, thresholds and schedules.
- **Sound sensing** — Acoustic Lab for training custom sound models; sound can trigger capture and alerts.
- **Recording** — manual recording plus event-based recording with storage management.
- **Streaming** — live preview in the Web UI and RTSP output to external players.
- **Integration** — HTTP API, MQTT/HTTP/UART result output, GPIO/UART external triggers, Home Assistant example.
- **Development** — native SDK, AI-coding-agent workflow, experimental Debian 13.

## Where to go next

- First time here? Start with the [default getting-started route](#default-getting-started-route) above.
- Bringing your own model? Go to [Use Your Own Model](/recamera_pro_model_path/).
- Writing code? Go to [Develop Your Own App](/recamera_pro_dev_path/).
- Something not working? See [Troubleshooting](/recamera_pro_faqs/).
