---
# Document type: project
description: "Use reSpeaker Clip with DeepSeek Harness (DSH) for voice input. Connect the device and prepare local SenseVoice recognition to turn RTC live audio or SD recordings into editable chat drafts."
title: "Use reSpeaker Clip for Voice Input in DSH"
keywords:
  - reSpeaker Clip
  - DeepSeek Harness
  - DSH
  - SenseVoice
  - speech-to-text
  - RTC
  - BLE
image: https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-for-dsh-1.jpg
slug: /respeaker_clip_for_agent
sku: 100020126
last_update:
  date: 11/20/2026
  author: Wang Kunpeng
createdAt: '2026-11-20'
updatedAt: '2026-11-20'
url: https://wiki.seeedstudio.com/respeaker_clip_for_agent/
---

# Use reSpeaker Clip for Voice Input in DSH

Use reSpeaker Clip with DeepSeek Harness (DSH) for voice input. Connect the device and prepare local SenseVoice recognition to turn RTC live audio or SD recordings into editable chat drafts.


## 1. Prepare the Clip Device

In this guide, RTC refers to Clip's real-time audio transmission over BLE. SD mode saves the recording on Clip and synchronizes it over Bluetooth after recording stops.

To use the device button for RTC input, flash the firmware from the `clip_agent` branch by following the [firmware flashing guide](/respeaker_clip_firmware_quick_start). Non-RTC (SD) mode does not require this additional firmware update for the workflow described here.

[Firmware repository, clip_agent branch](https://github.com/Ant-wkp/reSpeaker_Clip/tree/clip_agent)



## 2. Install the Plugin and Connect the Device

1. **Install the plugin**

   Open **Plugins → Add plugin** in DSH, enter `dsh-clip-for-agent`, and install and enable the plugin. Restart DSH if prompted before continuing.

   [npm package](https://www.npmjs.com/package/dsh-clip-for-agent) · [GitHub repository](https://github.com/Ant-wkp/dsh-clip-for-agent)

   <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-for-dsh-1.jpg" alt="pir" width={1080} height="auto" /></p>

   <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-for-dsh-2.jpg" alt="pir" width={1080} height="auto" /></p>

   <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-for-dsh-3.jpg" alt="pir" width={1080} height="auto" /></p>
2. **Connect the device**

   Turn on your computer's Bluetooth and Clip. Open **Clip** in the left sidebar and click **Scan for devices**. Find your device and click **Pair and connect**. Complete any Bluetooth pairing prompts shown by your operating system.
   <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-for-dsh-4.jpg" alt="pir" width={1080} height="auto" /></p>

3. **Prepare speech recognition**

   Under **Clip → Speech recognition**, follow the prompts to install the official speech recognition components and the SenseVoice model. If **Install official speech recognition** appears, click it directly in the Clip panel. If DSH prompts you to restart, restart it and return to this panel to finish preparing the model.

   <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-for-dsh-5.jpg" alt="pir" width={1080} height="auto" /></p>

## 3. Enter Text by Voice

Under **Clip → Recording results → Recording mode**, select **RTC live audio** or **SD recording (sync on stop)**. Then open the chat where you want to enter text.

1. **RTC mode**

   This mode offers lower input latency and requires the `clip_agent` firmware described above. Double-press the device button to start voice input, then double-press it again to stop. The plugin receives audio during recording and decodes and transcribes it after recording stops.

2. **Non-RTC (SD) mode**

   Long-press the device button to start recording, then long-press it again to stop. Audio is saved on Clip before being transferred over Bluetooth and transcribed, so the wait after stopping is longer.

You can also start recording with the Clip microphone button in the chat input or the recording button in the Clip panel. Use the on-screen stop button to end recording.


## Troubleshooting

- **The device does not appear in the scan.** Confirm that Bluetooth and Clip are turned on, move Clip closer to the computer, and scan again.
- **The model is not ready.** Open **Clip → Speech recognition** to check the download progress or retry as prompted. Wait until the model is ready before recording.
- **SD synchronization or transcription fails.** Retry under **Clip → Recording results**. After reconnecting the device, you can also select **Sync latest SD recording**.

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
