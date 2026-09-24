---
description: How to collect system logs, firmware version, and device information from reCamera Pro for troubleshooting or technical support requests.
title: Collect Logs for Support
keywords:
  - reCamera
  - reCamera Pro
  - logs
  - troubleshooting
  - support
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_collect_logs
sku: 10003420
sidebar_position: 2
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/recamera_pro_collect_logs/
createdAt: '2026-09-21'
updatedAt: '2026-09-21'
---

# Collect Logs for Support

When [Troubleshoot by symptom](/recamera_pro_faqs/) does not resolve an issue, the next step is to collect logs and device information. Support will ask for:

1. **Firmware version and basic device info** — what the device is running.
2. **System logs** — what the device was doing when the problem occurred.
3. **Steps to reproduce** — how to trigger the problem reliably.

{/* TODO(verify): confirm whether the device or WebUI offers a one-click "export support bundle" feature on current firmware, and document it here if available. */}

## 1. Firmware version and basic device info

Open **Device Info** in the left navigation bar:

- **Basic Information** — hardware/software version information and system resource usage.
- **System Settings** — current firmware version.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_aWZqM1cZvA.png" />

Record the following and include them in your support request:

| Item | Where to find it |
| --- | --- |
| Firmware version | Device Info → System Settings |
| Hardware model / SKU | Basic Information |
| Software versions | Basic Information |
| System resource usage (CPU, memory, storage) | Basic Information |

## 2. System logs

Open **Terminal** in the left navigation bar, then switch to the **System Log** area.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/20260708190224_6_2.png" />

From here you can:

- View system log output in real time.
- Filter logs by log level or keywords.
- Clear the current display.
- **Download the log files** — this is what support needs.

### What to capture in the logs

- Reproduce the problem while the system log is streaming.
- Download the log **immediately after** the problem occurs, so the relevant entries are still in the buffer.
- If the problem is intermittent, download logs after each occurrence and note the timestamp of each event.

## 3. Terminal console (optional, for advanced users)

The **Terminal console** within Terminal lets you log in to the reCamera Pro system shell directly from the Web UI, without a separate SSH tool.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_2dvKqObUbo.png" />

Default credentials for the terminal console:

```
Username: root
Password: recamera
```

:::caution
The terminal console gives full system access. Only run commands you understand, and do not modify system files unless instructed by support.

{/* TODO(verify): confirm whether the default terminal password is still `recamera` on current firmware, and whether changing the WebUI admin password also changes the terminal root password. */}
:::

If you have [enabled SSH](/recamera_pro_device_info/) in Connection Settings, you can also connect over SSH to collect logs — useful if the WebUI itself is unresponsive.

## 4. Steps to reproduce

Support will ask how to trigger the problem. Write down:

- What you were doing when the problem appeared (e.g. uploading a model, starting recording, connecting to Wi-Fi).
- What you expected to happen vs what actually happened.
- Whether the problem is reproducible, intermittent, or one-time.
- The firmware version and any recent changes (model upload, configuration import, firmware update).

## Submitting to support

A complete support request includes:

| Item | Source |
| --- | --- |
| Firmware version | Step 1 |
| Basic device info screenshot | Step 1 |
| Downloaded system log file | Step 2 |
| Steps to reproduce | Step 4 |

Attach these when opening a ticket. The more complete the initial information, the faster the resolution.

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
