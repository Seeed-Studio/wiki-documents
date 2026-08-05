---
title: reCamera Pro FAQ
description: This article summarizes common reCamera Pro issues and their solutions, helping you quickly locate and fix problems such as WebUI failing to preview video streams and system freezes caused by uploading models.
keywords:
  - reCamera Pro
  - FAQ
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /reCamera_Pro_faqs
sku: 
sidebar_position: 1
last_update:
  date: 2026-08-05T00:00:00.000Z
  author: Sizhaozhou
createdAt: "2026-08-05"
updatedAt: "2026-08-05"
url: https://wiki.seeedstudio.com/reCamera_Pro_faqs/
---

# reCamera Pro FAQ


## 1. WebUI Repeatedly Displays Wi-Fi Connection Errors and Cannot Preview Video Streams

**Symptom**: The WebUI interface repeatedly prompts Wi-Fi connection errors and cannot preview video streams properly.

**Solution**:

- First, check whether the device is powered properly.
- If using a Type-C interface for power, be sure to use a power adapter that supports the PD protocol.
- It is recommended to use the factory-provided DC power cable for power supply to ensure stable power delivery.

## 2. Uploading FB16 Precision Models Causes WebUI to Freeze

**Symptom**: In versions V1.1.1 and earlier, uploading FB16 precision models causes the system main process to freeze.

**Solution**: You can fix this using one of the following two methods:

1. **Restore Factory Settings**: Press and hold the button on the side of the device for 15 seconds to restore factory settings.
2. **Modify System Configuration File**:
   - Connect the device via USB cable and log in to the device using SSH.
   - Modify the `/userdata/config/rkipc.ini` file.
   - Change the `model` field in the `[rc_model.0]` configuration section to `yolox_s.rknn`.

## Technical Support and Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure your experience with our products is as smooth as possible. We offer multiple communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>