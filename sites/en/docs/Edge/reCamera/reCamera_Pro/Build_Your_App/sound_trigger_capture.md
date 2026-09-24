---
description: Deploy a trained sound model and configure sound event triggers on reCamera Pro to automatically capture photos or recordings.
title: Trigger Capture by Sound
keywords:
  - reCamera
  - reCamera Pro
  - sound trigger
  - acoustic lab
  - recording
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_sound_trigger
sku: 10003420
sidebar_position: 9
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/recamera_pro_sound_trigger/
createdAt: '2026-09-21'
updatedAt: '2026-09-21'
---

# Trigger Capture by Sound

After training a sound model (see [Train a Sound Model](/recamera_pro_acoustic_lab_usage/)), deploy it and configure sound event triggers to automatically capture photos or recordings when specific sounds are detected.

## Deploy the model

1. In Acoustic Lab, find the **Deploy** option at the bottom of the interface.
2. In the **MODELS** list, select your trained model and deploy it.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_Model_Deploy.png" /></div>

## Configure sound event trigger

1. Return to the Web UI main interface → **Record Settings** → **Recording Configuration**.
2. Find the **Sound Event Trigger** option and click **Configure**.
3. Select the sound categories you want to trigger recording.
4. Click **Confirm** to apply.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_Choice_Trigger.png" /></div>

### Configuration items

| Configuration Item | Description |
|---|---|
| Sound Category Filter | Sound categories to trigger recording |
| Continuous Activity Window | Duration of continuous activity required (ms) |
| Confidence Range | Confidence threshold for sound recognition |

{/* TODO(verify): confirm default confidence threshold and whether continuous activity window is required or optional */}

## Typical use cases

- Abnormal sound detection (glass breaking, alarm, machinery fault)
- Voice command triggering (e.g. "help", "stop")
- Equipment status sound recognition
- Environmental monitoring

## Related pages

- [Train a Sound Model](/recamera_pro_acoustic_lab_usage/)
- [Configure Event Recording](/recamera_pro_record_settings/)
- [Find Recordings and Storage](/recamera_pro_storage/)

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
