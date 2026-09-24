---
description: Set up event-triggered recording on reCamera Pro using AI detection, scheduled timers, GPIO, serial port, HTTPS, loop, or sound event triggers.
title: Configure Event Recording
keywords:
  - reCamera
  - reCamera Pro
  - recording
  - event trigger
  - GPIO
  - AI trigger
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_record_settings
sku: 10003420
sidebar_position: 6
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/recamera_pro_record_settings/
---

# Configure Event Recording

reCamera Pro supports rule-triggered video recording. In the Web UI, click **Recording Settings** in the left menu, then **Recording Configuration**.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_gejZVIuI5B.png" />

The page has four modules:

- **Recording Configuration** — trigger rules, video format, recording schedule
- **Storage Management** — device storage space
- **File Preview** — recorded video files
- **Schedule Management** — effective time periods for recording rules

## Recording format

| Parameter | Description |
|---|---|
| Recording Format | MP4 (video), JPG image data, or RAW original image data |

When MP4 is selected, each recording has a fixed duration of 1 minute.

## Trigger methods

On the recording configuration page, each trigger method has **Configure** and **Apply** buttons. Click **Configure** to set parameters, then **Apply** to enable it. The status at the top shows the currently active trigger method, e.g. "Current: Sound Event Trigger".

### AI Inference Trigger

Automatically triggers recording when AI model recognition results match your conditions.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_TmHQB024iW.png" />

| Configuration Item | Description |
|---|---|
| Inference Task | Select the AI inference task to trigger recording |
| Confidence Range | Confidence threshold range for AI recognition results |
| Category Filter | Target categories to trigger recording (e.g. Person, Vehicle, Hardhat) |
| Trigger Area | Polygonal screen region for triggering; defaults to the entire frame |

{/* TODO(verify): confirm whether multiple trigger methods can be active simultaneously or are mutually exclusive */}

### Scheduled Trigger

Triggers recording at fixed time intervals.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_uzhd2b91Fx.png" />

| Configuration Item | Description |
|---|---|
| Trigger Interval | Time interval in seconds |

:::note
**Scheduled Trigger** fires recording at a fixed interval. **Schedule Management** (below) controls *when* any trigger is allowed to fire. They are independent features.
:::

### GPIO Trigger

Triggers recording via external hardware signals.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_tLth7eTsfP.png" />

| Configuration Item | Description |
|---|---|
| GPIO Pin Name | Select the GPIO pin |
| Pin State | Default pin state, e.g. floating |
| Trigger Signal | Trigger level, e.g. high level |
| Debounce Duration | Debounce time in milliseconds |

Suitable for integration with external sensors, buttons, door magnets, PIR sensors, or relays.

### Serial Trigger

Triggers recording via serial commands.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_RS8p10rmUL.png" />

| Configuration Item | Description |
|---|---|
| Serial Port Name | Serial port to listen on, e.g. ttyS4 |
| Trigger Command | Serial command to trigger recording |

Suitable for integration with external controllers, MCUs, or industrial equipment.

### HTTPS Trigger

Triggers recording via network requests. The page displays the HTTPS trigger address that external systems can call.

Suitable for integration with third-party platforms, alarm systems, or automation scripts.

{/* TODO(verify): document the exact HTTPS trigger URL format, authentication method, and request body schema */}

### Loop Trigger

Continuous or cyclical recording for all-day monitoring or continuous data acquisition.

### Sound Event Trigger

Triggers recording based on audio events recognized by the sound model.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_7a3c7kZ2np.png" />

| Configuration Item | Description |
|---|---|
| Sound Category Filter | Sound categories to trigger recording |
| Continuous Activity Window | Duration of continuous activity required (ms) |
| Confidence Range | Confidence threshold for sound recognition |

To train custom sound models, see [Train a Sound Model](/recamera_pro_acoustic_lab_usage/).

## Schedule Management

Set the effective time periods for recording rules using a weekly timetable (day × hour grid). Click or drag cells to select periods.

| Shortcut | Description |
|---|---|
| Weekdays (9 AM – 6 PM) | Daytime working hours |
| Night (6 PM – 6 AM) | Nighttime recording |
| All Day (24 Hours) | All-day recording |
| Clear | Clear selected periods |

## Related pages

- [Find Recordings and Storage](/recamera_pro_storage/)
- [Train a Sound Model](/recamera_pro_acoustic_lab_usage/)
- [Trigger Capture by Sound](/recamera_pro_sound_trigger/)
- [Trigger Capture from External Devices](/recamera_pro_uart_usage/)

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
