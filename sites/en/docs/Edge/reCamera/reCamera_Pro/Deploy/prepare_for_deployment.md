---
description: A pre-deployment checklist for reCamera Pro — verify power, network, time, storage, AI model, and reboot behavior before the device goes into the field.
title: Pre-Deployment Checklist
keywords:
  - reCamera
  - reCamera Pro
  - deployment
  - checklist
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_deploy_checklist
sku: 10003420
sidebar_position: 1
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/recamera_pro_deploy_checklist/
---

# Pre-Deployment Checklist

Run this checklist **on the bench, before mounting reCamera Pro in its final location**. Every item has a concrete pass criterion — if an item fails, fix it first (linked guides) or collect logs and contact support. A device that passes all six checks can be deployed unattended.

| # | Check | Pass criterion |
| --- | --- | --- |
| 1 | Power | Device boots to a solid green LED on the final power source |
| 2 | Network | Web UI reachable at the LAN address from your monitoring computer |
| 3 | Time | Device clock matches real time and survives a reboot |
| 4 | Storage | Recording storage sized for the retention you need; full-disk policy set |
| 5 | AI model | The right model runs and detects your real-world target |
| 6 | Reboot | Device comes back automatically, with settings and detection intact |

{/* TODO(verify): validate each check below on a real device in the field-installation orientation, and add measured pass/fail thresholds (e.g. minimum supply voltage, Wi-Fi signal level, retention days per GB) once tested. */}

## 1. Power

- Use the factory 12 V DC power supply (12 V, 1 A minimum; factory supply is 12 V, 3 A) or an equally stable source on the **final** wiring — not the bench USB cable.
- If powering over Type-C, the adapter must support the PD protocol; unstable power shows up as repeated Wi-Fi errors and preview failures.
- **Pass**: green LED solid after boot, and the device stays up through a full preview + inference session. See the [quick start](/recamera_pro_getting_started/) hardware section.

## 2. Network

- Connect the device to the production Wi-Fi/network, reserve a fixed address for its MAC on the router (or record the assigned address), and confirm the Web UI opens from the computer that will monitor it.
- Set access deliberately: enable SSH only if you need it, review HTTP settings, and change the default password.
- **Pass**: Web UI reachable at the LAN address after the USB cable is unplugged. See [Access the device over Wi-Fi](/recamera_pro_wifi_access/) and [Network, time and access control](/recamera_pro_device_info/).

## 3. Time

- Recording schedules and file timestamps depend on a correct clock. Set the system time (and time source) in **Device Info → Time Settings**.
- **Pass**: displayed time matches real time, and recorded file timestamps land in the right date directory — including after a reboot.

## 4. Storage

- Insert/verify the storage you will actually record to, then in **Recording Settings → Storage Management**: check disk usage, set the available storage size/quota, and decide the full-disk policy (overwrite oldest vs stop).
- **Pass**: quota + policy set, and a test recording appears under **File Preview**. See [Find recordings and storage](/recamera_pro_storage/).

## 5. AI model

- Load the model you will run in production (preloaded or your own), configure its detection categories and thresholds, enable inference, and verify it detects **your actual target in the actual mounting position** — lighting, angle and distance included.
- **Pass**: real-time inference monitoring shows correct `class_name`/`score` for your target, at an acceptable FPS. See [AI Inference configuration](/recamera_pro_ai_inference/); for custom models see [Choose a model deployment path](/recamera_pro_model_path/).

## 6. Reboot

- Restart the device from **Device Info → System Settings** (or power-cycle it) as the final test.
- **Pass**: the device boots by itself to a solid green LED, keeps its time, network, password, recording rules and running model — and starts detecting again without any manual step.

## Before you close the box

- [Back up the configuration](/recamera_pro_backup_restore/) and store the exported file safely — it is your fastest recovery path.
- Record the firmware version shown in **Device Info → System Settings** in your asset list; keep the [firmware update and recovery](/recamera_pro_firmware_update/) guide handy.
- Note the device's LAN address, admin account policy, and mounting location in your own operations documentation.

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
