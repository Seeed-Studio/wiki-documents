---
description: Your first end-to-end reCamera Pro task — configure an AI-triggered recording rule, let a detected target start a recording automatically, then find and play back the video file.
title: 'First Task: Detect and Record'
keywords:
  - reCamera
  - reCamera Pro
  - Edge AI
  - event recording
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_first_recording
sku: 10003420
sidebar_position: 2
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/recamera_pro_first_recording/
createdAt: '2026-09-21'
updatedAt: '2026-09-21'
---

# First Task: Detect and Record

In the [quick start](/recamera_pro_getting_started/) you confirmed AI detection works in the live preview. This tutorial turns that detection into something the device does on its own: **when a target appears, reCamera Pro records it automatically** — and you play the clip back from the Web UI.

The workflow:

1. [Prepare: pick a model and a target](#1-prepare-pick-a-model-and-a-target)
2. [Set the recording format](#2-set-the-recording-format)
3. [Configure the AI inference trigger](#3-configure-the-ai-inference-trigger)
4. [Apply the rule and trigger a recording](#4-apply-the-rule-and-trigger-a-recording)
5. [Find and play back the recording](#5-find-and-play-back-the-recording)

{/* TODO(verify): run this tutorial end-to-end on a real device — record the exact model and target used, the configuration values (confidence range, category filter), the trigger action, and attach screenshots of the resulting recording and playback. */}

## 1. Prepare: pick a model and a target

- Make sure AI inference is running: **AI Inference → Inference Configuration → Inference Enable** on, a detection model selected as the **Running Model**, status **Running**. If you have not done this yet, follow [step 4 of the quick start](/recamera_pro_getting_started/#4-confirm-ai-detection-is-working).
- Decide what should trigger the recording. The simplest first task: record when a **person** walks into view. The available categories come from the running model's output (e.g. Person, Vehicle, Hardhat, Mask, Safety Vest, Machinery).

The detection parameters themselves (categories, confidence/IOU thresholds, inference frequency) are configured on the [AI Inference configuration page](/recamera_pro_ai_inference/) — this tutorial only references them.

## 2. Set the recording format

Open **Recording Settings** in the left navigation bar. At the top of the page, select the recording file format:

| Parameter | Description |
| --- | --- |
| Recording Format | Format for saved files: MP4 (video), JPG (images), or RAW (original image data) |

For this tutorial, choose **MP4**. Note: when MP4 is selected, each recording has a fixed duration of **1 minute**.

All recording options on this page — trigger methods, schedules, storage quotas — are documented in detail on the [event recording configuration page](/recamera_pro_record_settings/).

## 3. Configure the AI inference trigger

In the trigger method list, choose **AI Inference Trigger** and click **Configure**:

| Configuration item | What to set for this tutorial |
| --- | --- |
| Inference Task | Select the running AI inference task |
| Confidence Range | Keep the default range for your first recording |
| Category Filter | Select **Person** (or the category you want to detect) |
| Trigger Area | Leave empty — with no region drawn, the whole frame triggers |

{/* TODO(verify): capture the default confidence range shown in the UI and confirm whether the trigger area default is "entire frame" on current firmware. */}

Optionally, use **Schedule Management** to limit when the rule is active (e.g. night hours only). For a first test, leave the schedule covering the current time.

## 4. Apply the rule and trigger a recording

1. Click **Apply** next to AI Inference Trigger. The status at the top of the page shows the active trigger method, e.g. *Current: AI Inference Trigger*.
2. Walk into the camera's view (or hold up your chosen target).
3. The system detects the target and automatically starts recording. With MP4 format, the clip is 1 minute long.

## 5. Find and play back the recording

Still in **Recording Settings**:

1. Open **File Preview** — recorded files are listed in directories by date.
2. Open the file for today: the Web UI plays it inline, so you can review the event without downloading anything.
3. Check **Storage Management** to see disk usage and where files are saved. You can set a storage quota and enable overwriting old files so the latest recordings are always kept.

Storage behavior in depth (quotas, full-disk policy, download): see [Find recordings and storage](/recamera_pro_storage/).

{/* TODO(verify): confirm playback and download behavior of File Preview on current firmware and attach a screenshot of a recorded clip playing back. */}

## Result

You now have a standalone AI recording rule: no computer involved, the device detects and records on its own. Typical next steps:

- Narrow the trigger to a zone (entrance, hazardous area) with **Trigger Area**.
- Switch or combine trigger sources — scheduled, GPIO, serial, HTTPS, loop, or sound events — on the [event recording configuration page](/recamera_pro_record_settings/).
- Send detection results out to your own system via [MQTT](/recamera_pro_mqtt/) or [HTTP/UART](/recamera_pro_http_uart/).
- Before mounting the device permanently, run the [pre-deployment checklist](/recamera_pro_deploy_checklist/).

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
