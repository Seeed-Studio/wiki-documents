---
description: Check the firmware version, update reCamera Pro firmware, restart the system, and recover a device with factory reset (button or Web UI).
title: Firmware Update and Recovery
keywords:
  - reCamera
  - reCamera Pro
  - firmware update
  - factory reset
  - recovery
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_firmware_update
sku: 10003420
sidebar_position: 4
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/recamera_pro_firmware_update/
createdAt: '2026-09-21'
updatedAt: '2026-09-21'
---

# Firmware Update and Recovery

This page covers the lifecycle operations in **Device Info → System Settings**: checking the firmware version, updating firmware, restarting the system — and the recovery path when the device misbehaves: factory reset.

:::caution Before you start
Export a [configuration backup](/recamera_pro_backup_restore/) and record the current firmware version before any update or reset. Keep the device on stable power throughout — an interrupted update can leave the device unbootable.
:::

## Check the current firmware version

Open **Device Info → System Settings**: the page shows the device's current firmware version (basic hardware/software versions also appear under [Basic Information](/recamera_pro_device_info/#basic-information)). Record this version in your asset list — support and bug reports always need it.

{/* TODO(verify): add a screenshot of System Settings highlighting the firmware version field, and document where official firmware packages are published (download page / release notes) and how version numbers map to releases. */}

## Update the firmware

In **Device Info → System Settings**, choose whether to update to new firmware and follow the on-screen flow. During an over-the-air update the green status LED **blinks at ~100 ms** — do not power off the device in this state. When the update completes and the device reboots, the LED returns to solid green.

After updating:

1. Re-check the firmware version in System Settings to confirm the new version is running.
2. Verify the device still detects and records as expected ([pre-deployment checklist](/recamera_pro_deploy_checklist/) items 5–6 are a good quick test).
3. If you imported a configuration from an older version, re-run the [restore verification steps](/recamera_pro_backup_restore/#verify-a-restore).

{/* TODO(verify): document the exact update flow on current firmware — whether updates are pulled OTA from the Internet, uploaded as a package, or both; what data is preserved across an update (settings, uploaded models, recordings); and the failure-recovery path if an update is interrupted. */}

## Restart the system

System Settings also offers a remote **restart**. Use it after configuration imports, network changes, or to clear a stuck service. The device reboots and should come back to a solid green LED within its normal boot time.

## Recovery: factory reset

If the device is stuck, unreachable with the configured password, or misbehaving after an update, restore factory settings. There are two methods:

### Method 1: hardware button

Press and **hold the side button for about 15 seconds** until you hear a prompt sound — the device has entered reset mode. Wait for the green status LED to stay on continuously, then log in again (first-login flow with the initial password applies, as on a new device).

### Method 2: Web UI

Click **Device Info → System Settings → Factory Reset**.

![Factory reset diagram](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera-Pro_reset_Device.jpg)

:::warning A factory reset returns the device to its out-of-box state
Settings are wiped — plan to re-import your [configuration backup](/recamera_pro_backup_restore/) afterwards, then re-verify network access, time, and detection.

{/* TODO(verify): state exactly what a factory reset preserves vs wipes on current firmware (recorded media on SD/eMMC, uploaded model files, Wi-Fi credentials, admin password), and whether the button-reset prompt sound/15 s timing is unchanged. */}
:::

## If the device will not boot at all

- Check power first: green LED off means the core process is not running; a short green blink means a dirty-filesystem SD card was detected — reseat or reformat the SD card.
- A breathing LED that never turns solid means boot is stuck — power-cycle the device, then try the button factory reset.
- LED state reference: [quick start, status indicator](/recamera_pro_getting_started/#status-indicator-reference). Further symptoms: [Troubleshoot by symptom](/recamera_pro_faqs/).

{/* TODO(verify): confirm the last-resort recovery path (e.g. re-flashing factory system image over USB/SD) for a device that does not respond to button reset, and link the official recovery material once identified. */}

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
