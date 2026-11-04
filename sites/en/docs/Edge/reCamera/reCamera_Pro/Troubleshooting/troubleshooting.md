---
description: Common reCamera Pro problems and their solutions — organized by symptom. Covers Wi-Fi errors, video preview failures, FP16 model freezes, USB networking, and factory reset.
title: Troubleshoot by Symptom
keywords:
  - reCamera
  - reCamera Pro
  - FAQ
  - troubleshooting
  - FP16
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_faqs
sku: 10003420
sidebar_position: 1
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/recamera_pro_faqs/
createdAt: '2026-09-21'
updatedAt: '2026-09-21'
---

# Troubleshoot by Symptom

This page groups common reCamera Pro issues by **what you see**, so you can jump straight to the fix. If none of these match, [collect logs](/recamera_pro_collect_logs/) and share them with support.

| Symptom | Section |
| --- | --- |
| WebUI repeatedly shows Wi-Fi errors / cannot preview | [1. Wi-Fi errors and no preview](#1-wi-fi-errors-and-no-preview) |
| Uploading an FP16 model freezes the WebUI | [2. FP16 model upload freezes the WebUI](#2-fp16-model-upload-freezes-the-webui) |
| Windows cannot reach `192.168.42.1` over USB | [3. Windows USB connection fails](#3-windows-usb-connection-fails) |
| Internet access lost after plugging in USB | [4. Host computer loses Internet over USB](#4-host-computer-loses-internet-over-usb) |
| Device needs a full reset | [5. Factory reset](#5-factory-reset) |

---

## 1. Wi-Fi errors and no preview

**Symptom**: the WebUI repeatedly prompts Wi-Fi connection errors and cannot show the live preview.

**Solution**:

- Check whether the device is powered properly — unstable power is the most common cause.
- If powering over the Type-C interface, make sure the adapter supports the **PD protocol**.
- For reliable operation, use the factory-supplied DC power cable (12 V, 3 A).
- After fixing power, verify the Wi-Fi connection in **Device Info → Network Settings** and confirm the green LED is solid before re-opening the preview.

## 2. FP16 model upload freezes the WebUI

**Symptom**: on firmware **V1.1.1 and earlier**, uploading an FP16 precision model causes the main system process to freeze and the WebUI becomes unresponsive.

:::note Terminology
This issue applies to **FP16** (16-bit floating point) model quantization. Some older documentation used the abbreviation "FB16" — both refer to the same quantization format.
:::

**Solution** — use whichever method is available:

### Option A: Factory reset

Press and **hold the button on the side of the device for 15 seconds** to restore factory settings. The device will reboot with a clean configuration and the offending model removed. See [Firmware update and recovery](/recamera_pro_firmware_update/) for the full reset flow.

### Option B: Edit the configuration file over SSH

1. Connect to the device via USB and log in over SSH.
2. Open `/userdata/config/rkipc.ini` for editing.
3. In the `[rc_model.0]` section, change the `model` field to `yolox_s.rknn`.
4. Save and restart the device.

{/* TODO(verify): confirm whether this freeze is fixed on firmware versions after V1.1.1, and state the first firmware version where FP16 models can be uploaded without freezing. */}

## 3. Windows USB connection fails

**Symptom**: after connecting the Type-C cable, `http://192.168.42.1` does not load in the browser on Windows.

**Solution**: the Windows virtual network adapter usually did not obtain an IP address automatically.

1. Open **Control Panel → Network and Internet → Network and Sharing Center → Change adapter settings**.
2. Find the adapter named something like `Remote NDIS based Internet Sharing Device` or related to reCamera (unplug/replug to see which adapter disappears and reappears — that is the reCamera Pro interface).
3. Right-click → **Properties**.
4. Double-click **Internet Protocol Version 4 (TCP/IPv4)**.
5. Select **Obtain an IP address automatically** and **Obtain DNS server address automatically**.
6. Click OK and try `http://192.168.42.1` again.

<video
  src="https://raw.githubusercontent.com/6zsz6/seeed_wiki_video/main/reCamera-Pro-network_config.mp4"
  controls
  width="100%"
  preload="metadata">
  Your browser does not support playing this video.
</video>

{/* TODO(verify): add equivalent steps for macOS and Linux if the USB connection exposes a network interface on those platforms too. */}

## 4. Host computer loses Internet over USB

**Symptom**: after connecting the reCamera to the computer via USB, the host computer cannot reach the Internet.

This happens because the USB network adapter takes priority in the OS routing table. See the [network connection troubleshooting diagram](https://wiki.seeedstudio.com/recamera_network_connection/#computer-network-error) for the fix.

## 5. Factory reset

If none of the above apply and the device is still misbehaving, restore factory settings:

- **Hardware**: press and hold the side button for **~15 seconds** until a prompt sound is heard. Wait for the green LED to stay on continuously.
- **WebUI**: **Device Info → System Settings → Factory Reset**.

See [Firmware update and recovery](/recamera_pro_firmware_update/) for what is preserved and what is wiped.

## Other issues

- RTSP, recording, or storage problems → [Event recording configuration](/recamera_pro_record_settings/) and [Find recordings and storage](/recamera_pro_storage/).
- Model conversion or inference problems → [AI Inference configuration](/recamera_pro_ai_inference/); for custom models see [Choose a model deployment path](/recamera_pro_model_path/).
- API call failures → [API troubleshooting](/recamera_pro_api_faq/) (B4 / T3 placeholder).

{/* TODO(verify): cross-reference RTSP/recording/storage and API troubleshooting issues from real support tickets once T3 (api_troubleshooting.md) lands. */}

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
