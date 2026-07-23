---
description: 本维基将简要介绍如何使用设备上的扬声器播放音频。
title: 扬声器使用
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
updatedAt: '2026-07-15'
url: https://wiki.seeedstudio.com/cn/recamera_pro_speaker_usage/
---

# reCamera Pro 扬声器使用

- 扬声器为 8Ω / 1W 规格，由板载 NS4150B D 类音频功率放大器驱动。
- 设备提供扬声器输出接口，用户无需单独配置功放，可直接通过 Linux ALSA 工具配置音频播放通道。

## 查询音频设备

首先确认系统已经识别到音频设备：

``` bash
aplay -l
```

示例输出：

```
**** List of PLAYBACK Hardware Devices ****
card 0: rockchiprv1126b [rockchip,rv1126b-acodec], device 0: dailink-multicodecs multicodec-0 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

## 调节音量

1. 查看当前 Mixer：

``` bash
amixer
```

2. 查看支持的控制项：

``` bash
amixer scontrols
```

示例输出：

```
Simple mixer control 'Headphone',0
Simple mixer control 'Speaker',0
Simple mixer control 'ACodec ADC',0
Simple mixer control 'ACodec Digital Gain',0
```

3. 设置音量：

``` bash
amixer set 'DAC Digital' 50%
```

:::note

- 将音量设置在 80% 以上会产生爆音。
- 请根据实际情况调节音量，以避免过载。

:::

## 播放音频

首先将需要播放的音频文件拷贝到设备上。假设音频文件路径为 `/sdcard/audio.wav3`，使用以下命令播放音频：

``` bash
aplay /sdcard/audio.wav3
```

如果你的音频文件为 MP3 格式，请先使用下面的命令将其转换为 WAV 格式，然后按上述方式进行播放：

```bash
ffmpeg -i test.mp3 test.wav
```

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用产品的过程中体验顺畅。我们提供多种交流渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
