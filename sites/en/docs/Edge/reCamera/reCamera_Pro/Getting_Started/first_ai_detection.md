---
description: Power up reCamera Pro, log in to the Web UI, start the live preview, and confirm your first AI detection result — the fastest path from unboxing to a working AI camera.
title: 'Quick Start: See Your First AI Detection'
keywords:
  - reCamera
  - reCamera Pro
  - Edge AI
  - quick start
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_getting_started
sku: 10003420
sidebar_position: 1
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/recamera_pro_getting_started/
createdAt: '2026-09-21'
updatedAt: '2026-09-21'
---

# Quick Start: See Your First AI Detection

This guide takes you from an unboxed reCamera Pro to a live video preview with AI detection results, in about 10 minutes:

1. [Connect the hardware](#1-connect-the-hardware)
2. [Log in to the Web UI](#2-log-in-to-the-web-ui)
3. [Start the live preview](#3-start-the-live-preview)
4. [Confirm AI detection is working](#4-confirm-ai-detection-is-working)

{/* TODO(verify): add a "detection success" screenshot showing the live preview with a bounding box overlaid on a person, and confirm which model ships preloaded on current firmware and which firmware versions this first-login flow applies to. */}

## 1. Connect the hardware

Before you start, make sure you have:

- **Power supply**: the DC power cable (specification: **12 V, 1 A** minimum; the factory power supply is 12 V, 3 A).
- **Data cable**: a USB Type-C cable that supports **data transfer** (not a charge-only cable), for the initial direct connection to your computer.

Connection steps:

1. Plug the 12 V DC power cable into the device's power interface. Connect one end of the USB Type-C cable to reCamera Pro and the other end to your computer (Windows host shown below).
2. Watch the status indicator: when the **green LED is solid**, the device has finished booting.

![System status light and cable connection diagram](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/en_hardware_line.png)

### Status indicator reference

The green LED shows system status; the red LED is the power indicator.

| Green LED state | Meaning |
| --- | --- |
| Breathing | Device is powering on |
| Solid on | Device is running normally |
| Off | Abnormal state — the core process is not running |
| 100 ms blink | OTA update in progress |
| Short blink | An SD card with a dirty filesystem was detected |

## 2. Log in to the Web UI

reCamera Pro has a built-in Web UI — no client software to install. With the USB cable connected, your computer reaches the device directly at its default address.

:::note
Make sure the USB Type-C cable is properly connected and the green LED is solid before logging in.
:::

1. Open a browser on your computer (Chrome or Edge recommended).
2. Go to the default IP address: `http://192.168.42.1`.
3. **First login**: the initial password is `recamera`. You will be asked to set a new password — enter it, then log in with username `admin` and your new password.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/img_v3_0213c_17e852c5-c73f-4a05-8ede-e02e2c7be6dg.png" />

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_a6gnjmMqnt.png" />

4. After login you land on the main interface (the **Real-time Preview** page by default).

![Web login and main interface diagram](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/web_login.png)

:::tip Cannot reach 192.168.42.1 on Windows?
If the page fails to load, the Windows virtual network adapter usually did not obtain an IP address automatically. See [Troubleshoot by symptom](/recamera_pro_faqs/) for the step-by-step adapter fix.
:::

:::info Want to go wireless?
The USB connection is only needed for the first setup. To manage the device over your local network instead, follow [Access the device over Wi-Fi](/recamera_pro_wifi_access/).
:::

## 3. Start the live preview

On the **Real-time Preview** page, click **Start** to begin playback. You should see the camera's live video feed in your browser — use this to aim the camera, adjust the lens, and confirm image quality.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/2026-07-08 181849.png" />

The preview page also supports taking photos, manual recording, and switching between the main stream and sub-stream. Details: [Preview, capture and manual recording](/recamera_pro_live_preview/).

## 4. Confirm AI detection is working

The live preview alone only proves the video path works. To confirm the **AI detection** path, run the inference task and watch its output:

1. Open **AI Inference** in the left navigation bar.
2. In **Inference Configuration**, make sure **Inference Enable** is on, select the running model (a detection model is preloaded on the device), and click **Save Configuration**.
3. Check **Inference Status** shows **Running** and the real-time FPS is non-zero.
4. Look at the **Real-time Inference Monitoring** area: when a target appears in view, detection results stream in as logs with `class_name`, `score`, `bbox`, and `detection_count` fields.

**How to verify**: stand in front of the camera (or hold up a phone/person image). Within a second or two you should see entries such as `class_name: person` with a confidence `score` — and a bounding box drawn on the preview. If results appear, your first AI detection is confirmed.

The full inference configuration reference (model selection, detection categories, confidence/IOU thresholds, inference frequency, monitoring controls) is on the [AI Inference configuration page](/recamera_pro_ai_inference/).

{/* TODO(verify): confirm the exact preloaded model name shown in Running Model on current shipping firmware, and capture a screenshot of Real-time Inference Monitoring with a person detection. */}

## Next steps

- [First task: detect and record](/recamera_pro_first_recording/) — turn a detection into an event recording and play it back.
- [Access the device over Wi-Fi](/recamera_pro_wifi_access/) — unplug the USB cable and manage the device wirelessly.
- [Pre-deployment checklist](/recamera_pro_deploy_checklist/) — before installing the device in the field.

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
