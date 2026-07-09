---
description: このWikiでは、デバイス上のスピーカーを使用してオーディオを再生する方法について簡単に紹介します。
title: reCamera Pro スピーカーの使用方法
keywords:
  - reCamera
  - reCamera Pro
  - スピーカー
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_speaker_usage
sku: 10003420
sidebar_position: 3
last_update:
  date: 07/09/2026
  author: Sizhao zhou
createdAt: '2026-06-01'
updatedAt: '2026-07-9'
url: https://wiki.seeedstudio.com/ja/recamera_pro_speaker_usage/
---

# スピーカーの使用方法
- スピーカーはオンボードの NS4150B クラスDオーディオパワーアンプで駆動される 8Ω / 1W モデルです。
- デバイスにはスピーカー出力インターフェースが用意されています。ユーザーはパワーアンプを個別に設定する必要はなく、Linux ALSA ツールを使用してオーディオ再生チャネルを直接設定できます。
## オーディオデバイスの確認
まず、システムがオーディオデバイスを認識していることを確認します：
``` bash
aplay -l
```
出力例：
```
**** List of PLAYBACK Hardware Devices ****
card 0: rockchiprv1126b [rockchip,rv1126b-acodec], device 0: dailink-multicodecs multicodec-0 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```
## 音量の調整
1. 現在のミキサーを確認します：
``` bash
amixer
```
2. サポートされている制御項目を表示します：
``` bash
amixer scontrols
```
出力例：
```
Simple mixer control 'Headphone',0
Simple mixer control 'Speaker',0
Simple mixer control 'ACodec ADC',0
Simple mixer control 'ACodec Digital Gain',0
```
3. 音量を設定します：
``` bash
amixer set 'DAC Digital' 50%
```
::: Note
- 音量を80％以上に設定すると、ポップノイズが発生します。
- 実際の状況に応じて音量を調整し、過負荷を避けてください。
:::
## オーディオの再生
まず、再生したいオーディオファイルをデバイスにコピーします。オーディオファイルのパスが `/sdcard/audio.wav3` であると仮定し、次のコマンドを使用してオーディオを再生します：
``` bash
aplay /sdcard/audio.wav3
```
オーディオファイルが MP3 形式の場合は、以下のコマンドで先に WAV 形式に変換し、その後上記と同様に再生してください：
```bash
ffmpeg -i test.mp3 test.wav
```


## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>