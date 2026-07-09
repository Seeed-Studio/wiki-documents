---
description: ReSpeaker 4-Mic Linear Array Kit
title: reSpeaker 4-Mic Linear Array Kit
keywords:
  - reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ReSpeaker_4-Mic_Linear_Array_Kit_for_Raspberry_Pi
sku: 107990056
last_update:
  date: 1/11/2023
  author: jianjing Huang
createdAt: '2025-05-27'
updatedAt: '2026-02-27'
url: https://wiki.seeedstudio.com/ja/ReSpeaker_4-Mic_Linear_Array_Kit_for_Raspberry_Pi/
---

![enter image description here](https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/main_wiki.jpg)

Seeed の ReSpeaker 4-Mic Linear Array Kit は、Raspberry Pi 用に設計された拡張ボード（HAT）です。これは 4 つのマイクを備えたリニアマイクアレイキットで、AI や音声アプリケーション向けに設計されています。つまり、Amazon Alexa Voice Service や Google Assistant などを統合できる Raspberry Pi を使って、より強力で柔軟な音声プロダクトを構築できます。

ReSpeaker 4-Mic Linear Array Kit for Raspberry Pi は 2 枚のボードで構成されており、1 枚は Voice Accessory HAT、もう 1 枚は 4 マイクのリニアアレイです。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/NxZx9nz67Bc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

ReSpeaker 4-Mic Linear Array Kit for Raspberry Pi は、Raspberry Pi OS で 8 チャンネル入力と 8 チャンネル出力をサポートします。最初の 6 つの入力チャンネルはマイク録音用です（最初の 4 つの入力チャンネルのみが有効なキャプチャデータです）。残り 2 つの入力チャンネルは再生のエコーチャンネルです。最初の 2 つの出力チャンネルはサウンド出力用で、残りの 6 つの出力チャンネルはダミーです。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/ReSpeaker-4-Mic-Linear-Array-Kit-p-3066.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特徴

- 2 つの ADC チップと 1 つの DAC チップ
- 8 チャンネル入力および 8 チャンネル出力
- 4 マイクアレイ
- Grove 対応
- Raspberry Pi 互換（Raspberry Pi Zero および Zero W、Raspberry Pi B+、Raspberry Pi 2 B、Raspberry Pi 3 B、Raspberry Pi 3 B+、Raspberry Pi 3 A+、Raspberry Pi 4 をサポート）
- ヘッドセットおよびスピーカー音声出力

## 仕様

- 2 x X-Power AC108 ADC
- 4 x 高性能アナログマイク
- 1 x X-Power AC101 DAC
- 音声出力:
  - 3.5mm ヘッドセットオーディオジャック
  - スピーカージャック
- Raspberry Pi 40 ピンヘッダ互換
- マイク: MSM321A3729H9BP
- 感度: -22 dBFS（無指向性）
- SNR: 59 dB
- 最大サンプリングレート: 48Khz

## 応用アイデア

- スマートスピーカー
- インテリジェント音声アシスタントシステム
- ボイスレコーダー
- 音声会議システム
- 会議通話機器
- 音声対話ロボット
- 車載音声アシスタント
- 音声コマンドが必要なその他のシナリオ

## ハードウェア概要

**システム図**

<a href="https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/voice_hat_acc-correct.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/voice_hat_acc-correct.png"/></a>

**インターフェース**

![](https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/Hardware.jpg)

:::note
接続後、必ずマルチメータを使用して、回路の導通が上図のようになっているかどうかを確認してください。
:::

## 組立図  

![](https://files.seeedstudio.com/wiki/Bazaar_file/107990055/img/ab.png)

## はじめに

**ReSpeaker 4-Mic Array を Raspberry Pi に接続する**

**ステップ 1.**  *ReSpeaker Voice Accessory HAT* と *ReSpeaker 4-Mic linear Array* をリボンケーブルで接続します

**ステップ 2.**  *ReSpeaker Voice Accessory HAT* を 40 ピン GPIO を介して *Raspberry Pi* に挿し込みます

**ステップ 3.**  *earphone* を *3.5mm headset audio jack* に挿し込むか、*speaker* を *JST 2.0 speaker jack* に挿し込みます

**ステップ 4.**  micro-USB ケーブルで *Raspberry Pi* を *PC* に接続します

![Pics here](https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/4-mic.jpg)

### ソフトウェア

**ステップ 1. seeed-voicecard をインストールする**

seeed voice card のソースコードを取得し、すべての Linux カーネルドライバをインストールします。

```
sudo apt-get update
git clone https://github.com/HinTak/seeed-voicecard.git
cd seeed-voicecard
sudo ./install.sh  
sudo reboot

```

**ステップ 2. サウンドカードを確認する**

以下のコマンドを入力して録音デバイスを確認します。

```
pi@raspberrypi:~ $ arecord -L
```

次のように表示されるはずです:

```
pi@raspberrypi:~ $ arecord -L
null
    Discard all samples (playback) or generate zero samples (capture)
default
    Playback/recording through the PulseAudio sound server
ac108
dmixer
ac101
sysdefault:CARD=seeed8micvoicec
    seeed-8mic-voicecard, 
    Default Audio Device
dmix:CARD=seeed8micvoicec,DEV=0
    seeed-8mic-voicecard, 
    Direct sample mixing device
dsnoop:CARD=seeed8micvoicec,DEV=0
    seeed-8mic-voicecard, 
    Direct sample snooping device
hw:CARD=seeed8micvoicec,DEV=0
    seeed-8mic-voicecard, 
    Direct hardware device without any conversions
plughw:CARD=seeed8micvoicec,DEV=0
    seeed-8mic-voicecard, 
    Hardware device with all software conversions
```

次のコマンドを使用して再生デバイスを確認します。

```
pi@raspberrypi:~ $ aplay -L
```

次のように表示されるはずです:

```
pi@raspberrypi:~ $ aplay -L
null
    Discard all samples (playback) or generate zero samples (capture)
default
    Playback/recording through the PulseAudio sound server
ac108
dmixer
ac101
sysdefault:CARD=ALSA
    bcm2835 ALSA, bcm2835 ALSA
    Default Audio Device
dmix:CARD=ALSA,DEV=0
    bcm2835 ALSA, bcm2835 ALSA
    Direct sample mixing device
dmix:CARD=ALSA,DEV=1
    bcm2835 ALSA, bcm2835 IEC958/HDMI
    Direct sample mixing device
dsnoop:CARD=ALSA,DEV=0
    bcm2835 ALSA, bcm2835 ALSA
    Direct sample snooping device
dsnoop:CARD=ALSA,DEV=1
    bcm2835 ALSA, bcm2835 IEC958/HDMI
    Direct sample snooping device
hw:CARD=ALSA,DEV=0
    bcm2835 ALSA, bcm2835 ALSA
    Direct hardware device without any conversions
hw:CARD=ALSA,DEV=1
    bcm2835 ALSA, bcm2835 IEC958/HDMI
    Direct hardware device without any conversions
plughw:CARD=ALSA,DEV=0
    bcm2835 ALSA, bcm2835 ALSA
    Hardware device with all software conversions
plughw:CARD=ALSA,DEV=1
    bcm2835 ALSA, bcm2835 IEC958/HDMI
    Hardware device with all software conversions
sysdefault:CARD=seeed8micvoicec
    seeed-8mic-voicecard, 
    Default Audio Device
dmix:CARD=seeed8micvoicec,DEV=0
    seeed-8mic-voicecard, 
    Direct sample mixing device
dsnoop:CARD=seeed8micvoicec,DEV=0
    seeed-8mic-voicecard, 
    Direct sample snooping device
hw:CARD=seeed8micvoicec,DEV=0
    seeed-8mic-voicecard, 
    Direct hardware device without any conversions
plughw:CARD=seeed8micvoicec,DEV=0
    seeed-8mic-voicecard, 
    Hardware device with all software conversions

```

**ステップ 3. 録音と再生**

録音してから再生することも、録音と再生を同時に行うこともできます。

```
#It will capture sound on AC108 and save as a.wav
arecord -Dac108 -f S32_LE -r 16000 -c 8 a.wav
#Take care of that the captured mic audio is on the first 6 channels

#It will play sound file a.wav on AC101
aplay -D ac101 a.wav
#Do not use -D plughw:1,0 directly except your wave file is single channel only.

```

:::note
4-Mic Linear Array Kit を使用してキャプチャと再生を同時に行う開発者向けの制限事項:

-1. キャプチャを必ず先に開始してください。そうしないと、キャプチャチャンネルが乱れる可能性があります。

-2. 再生出力チャンネルには、8 チャンネルすべて同じデータ、または 4 つの同一ステレオチャンネルデータを入力する必要があります。そうしないと、スピーカーやヘッドホンから音が出ない可能性があります。

-3. 再生と録音を同時に行いたい場合、aplay する音楽ファイルはモノラルでなければなりません。そうでない場合、このコマンドを使って再生することはできません。
:::

また、Audacity を使って再生および録音することもできます。

:::tip
        Audacity は VNC 経由で開くか、モニタを接続して開いてください
:::

```
sudo apt update
sudo apt install audacity
audacity                      // run audacity

```

![](https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/audacity.png)

## 使用概要

以下のサンプルを実行するには、[4mics_hat repository](https://github.com/respeaker/4mics_hat.git) リポジトリを Raspberry Pi にクローンします

```
git clone https://github.com/respeaker/4mics_hat.git
```

以下のサンプルで言及されているすべての Python スクリプトは、このリポジトリ内にあります。必要な依存関係をインストールするには、mic_hat リポジトリフォルダから次を実行します

```
sudo apt-get install portaudio19-dev libatlas-base-dev
pip3 install -r requirements.txt
```

### Python で音声を録音する

Python で音声を録音するために、[PyAudio python library](https://people.csail.mit.edu/hubert/pyaudio/) を使用します。

まず、次のスクリプトを実行して 2 Mic pi hat のデバイスインデックス番号を取得します:

```
python3 recording_examples/get_device_index.py
```

次のようにデバイス ID が表示されます。

```
Input Device id  2  -  seeed-8mic-voicecard: - (hw:1,0)
```

音声を録音するには、```recording_examples/record.py``` ファイルを nano などのテキストエディタで開き、`RESPEAKER_INDEX = 2` をお使いのシステム上の ReSpeaker のインデックス番号に変更します。その後、Python スクリプト record.py を実行して録音します:

```
python3 recording_examples/record.py
```

- ステップ 6. 8 チャンネルからチャンネル 0 のデータを抽出したい場合は、```record_one_channel.py``` の内容を確認してください。その他のチャンネル X の場合は、[0::8] を [X::8] に変更してください。

```
python3 recording_examples/record_one_channel.py
```

録音したサンプルを再生するには、例えば aplay システムユーティリティを使用できます

```bash
aplay -f cd -Dhw:0 output.wav #for Stereo sound
aplay -D plughw:0,0 output_one_channel.wav #for Mono sound from one channel
```

## FAQ

**Q1: Mic Array には 4 つのマイクしかないのに、なぜ 8 チャンネルなのですか？**

A1: このアレイには 2 つの AC108 があり、各 AC108 チップは 4 チャンネル出力を持っています。そのため合計 8 チャンネルとなり、そのうち 4 チャンネルがマイク用、2 チャンネルが再生用で、残り 2 チャンネルは使用されていません。

**Q2: Raspberry が ReSpeaker 2-mics hat は検出できるのに、ReSpeaker 4-mics linear array を検出できない場合は？**

A2: raspberry -> Preferences -> Raspberry Pi Configuration をクリックし、Interfaces タブを選択して、1-Wire が Disabled になっていることを確認してください。

## リソース

- **[PDF]** [AC101 データシート](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/reg/AC101_User_Manual_v1.1.pdf)
- **[PDF]** [AC108 データシート](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/reg/AC108_Datasheet_V1.2.pdf)
- **[Driver]** [Seeed-Voice ドライバ](https://github.com/respeaker/seeed-voicecard)
- **[Algorithms]** [DOA、VAD、NS を含むアルゴリズム](https://github.com/respeaker/mic_array)
- **[Voice Engine]** [音声対応オブジェクトを作成するためのビルディングブロックを提供する Voice Engine プロジェクト](https://github.com/voice-engine/voice-engine)
- **[Algorithms]** [AEC](https://github.com/voice-engine/ec)
- **[Mechanical Drawing]** [2D 図面](https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/res/2d.zip)

## プロジェクト

[Mojing Mojing - A Smart Mirror with ReSpeaker!](https://www.hackster.io/SeeedStudio/mojing-mojing-a-smart-mirror-with-respeaker-e1ae20)：ReSpeaker を介した音声インターフェース制御を備えたスマートミラーです。さらに Wio Link と接続して、他のオブジェクトも制御します！Raspberry Pi をベースにしています。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
