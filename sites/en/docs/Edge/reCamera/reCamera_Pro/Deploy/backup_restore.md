---
description: Export the reCamera Pro configuration to a file and import it on another device — what the backup contains, how to restore, and how to verify.
title: Back Up and Restore Configuration
keywords:
  - reCamera
  - reCamera Pro
  - backup
  - restore
  - configuration
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_backup_restore
sku: 10003420
sidebar_position: 3
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/recamera_pro_backup_restore/
createdAt: '2026-09-21'
updatedAt: '2026-09-21'
---

# Back Up and Restore Configuration

reCamera Pro can export its current settings to a file (a `tar` archive) that your browser downloads, and import that file on the same or another device. This is the fastest way to:

- replicate a proven configuration across a fleet of devices,
- recover quickly after a [factory reset or firmware recovery](/recamera_pro_firmware_update/),
- keep a known-good snapshot before changing detection, recording, or network settings.

## Export a configuration backup

1. Log in to the Web UI and open **Device Info → System Settings**.
2. Click **Export Configuration**.
3. The browser automatically downloads a `tar` file containing the current settings. Store it somewhere safe, named with the device and date (e.g. `recamera-frontdoor-2026-09-21.tar`).

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_eBayhpwddh.png" />

:::info What the backup contains
The exported file contains the device's current settings. Before relying on it, verify on your own device which items are included (network, time, connection, password, recording rules, AI model configuration, sound models) — and note that uploaded model files and recorded video are large data, not settings.

{/* TODO(verify): enumerate exactly what Export Configuration includes and excludes on current firmware — network/Wi-Fi credentials, admin password, recording trigger rules and schedules, AI model configuration, uploaded .rknn model files, Sound Lab trained models, and recorded media. */}
:::

## Restore (import) a configuration

1. Open **Device Info → System Settings** on the target device.
2. Choose the import option and select a previously exported `tar` file (same file extension as the export).
3. After importing, the configuration loads automatically and the device **restarts**. Wait for the reboot to finish — the imported settings are active afterwards.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_4h4p6raYPF.png" />

:::caution Import overwrites current settings
Importing replaces the device's existing configuration with the contents of the file. If the target device has settings worth keeping, export them first.

{/* TODO(verify): confirm whether import merges or fully replaces settings, and whether importing a backup from a different firmware version is supported or rejected. */}
:::

## Verify a restore

After the device reboots, confirm the restore actually took effect:

- [ ] Web UI login works with the expected password.
- [ ] Network/Wi-Fi state matches the backup (the device may reconnect to the Wi-Fi recorded in the file — make sure that network is reachable at the new location).
- [ ] Time settings are correct (see [Network, time and access control](/recamera_pro_device_info/)).
- [ ] Recording rules and schedules are present under **Recording Settings**.
- [ ] AI inference runs the expected model and detects a real target.

## Fleet and lifecycle tips

- Export a backup **after every configuration change you want to keep**, and after passing the [pre-deployment checklist](/recamera_pro_deploy_checklist/).
- To clone one device to many: configure a golden device, export once, then import on each unit — afterwards adjust per-device items (e.g. Wi-Fi, time) as needed.
- Keep backups off the device (computer or file server); a backup stored only on the device is lost when the device is reset or replaced.

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
