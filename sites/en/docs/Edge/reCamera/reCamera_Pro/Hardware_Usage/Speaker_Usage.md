---
description: This wiki will provide a brief introduction on how to use the speaker on the device to play audio.
title: Speaker Usage
keywords:
  - reCamera
  - reCamera Pro
  - Speaker
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_speaker_usage
sku: 10003420
sidebar_position: 3
last_update:
  date: 07/09/2026
  author: Sizhao zhou
createdAt: '2026-06-01'
updatedAt: '2026-07-09'
url: https://wiki.seeedstudio.com/recamera_pro_speaker_usage/
---

# Speaker Usage
- The speaker is an 8Ω / 1W model driven by the on-board NS4150B Class D audio power amplifier.
- The device provides a speaker output interface. Users do not need to configure the power amplifier separately and can directly configure the audio playback channel via Linux ALSA tools.
## Query Audio Devices
First confirm that the system has recognized the audio device:
``` bash
aplay -l
```
Sample output:
```
**** List of PLAYBACK Hardware Devices ****
card 0: rockchiprv1126b [rockchip,rv1126b-acodec], device 0: dailink-multicodecs multicodec-0 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```
## Adjust Volume
1. Check current Mixer:
``` bash
amixer
```
2. View supported control items:
``` bash
amixer scontrols
```
Sample output:
```
Simple mixer control 'Headphone',0
Simple mixer control 'Speaker',0
Simple mixer control 'ACodec ADC',0
Simple mixer control 'ACodec Digital Gain',0
```
3. Set volume:
``` bash
amixer set 'DAC Digital' 50%
```

:::note
- Volume set above 80% will cause popping noise.
- Adjust the volume according to actual conditions to avoid overload.
:::

## Play Audio
First copy the audio file you need to play to the device. Assume the audio file path is `/sdcard/audio.wav3`, use the following command to play audio:
``` bash
aplay /sdcard/audio.wav3
```
If your audio file is in MP3 format, convert it to WAV format first using the command below, then play it as described above:
```bash
ffmpeg -i test.mp3 test.wav
```


## Technical Support and Product Discussion

Thank you for choosing our products! We are here to provide you with various support to ensure your experience with our products is as smooth as possible. We offer multiple communication channels to meet different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>