---
description: ReSpeaker 4-Mic Linear Array Kit
title: ReSpeaker 4-Mic Linear Array Kit
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ReSpeaker_4-Mic_Linear_Array_Kit_for_Raspberry_Pi
last_update:
  date: 1/11/2023
  author: jianjing Huang
---

![enter image description here](https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/main_wiki.jpg)

SeeedのReSpeaker 4-Mic Linear Array Kitは、Raspberry Pi用に設計された拡張ボード（HAT）です。これは4つのマイクロフォンを搭載したリニアマイクロフォンアレイキットで、AIと音声アプリケーション向けに設計されています。つまり、Amazon Alexa Voice Service、Google Assistantなどを統合できる、より強力で柔軟な音声製品をRaspberry Piで構築できます。

Raspberry Pi用ReSpeaker 4-Mic Linear Array Kitは2つのボードで構成されています。1つは音声アクセサリHAT、もう1つは4つのマイクロフォンのリニアアレイです。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/NxZx9nz67Bc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Raspberry Pi用ReSpeaker 4-Mic Linear Array Kitは、Raspberry Pi OSで8入力・8出力チャンネルをサポートします。最初の6つの入力チャンネルはマイクロフォン録音用（最初の4つの入力チャンネルのみが有効なキャプチャデータ）で、残りの2つの入力チャンネルは再生のエコーチャンネルです。最初の2つの出力チャンネルは音声出力用で、残りの6つの出力チャンネルはダミーです。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/ReSpeaker-4-Mic-Linear-Array-Kit-p-3066.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特徴

- 2つのADCチップと1つのDACチップ
- 8入力・8出力チャンネル
- 4つのマイクロフォンアレイ
- Groveサポート
- Raspberry Pi互換（Raspberry Pi ZeroとZero W、Raspberry Pi B+、Raspberry Pi 2 B、Raspberry Pi 3 B、Raspberry Pi 3 B+、Raspberry Pi 3 A+、Raspberry Pi 4をサポート）
- ヘッドセットとスピーカー音声出力

## 仕様

- 2 x X-Power AC108 ADC
- 4 x 高性能アナログマイクロフォン
- 1 x X-Power AC101 DAC
- 音声出力：
  - 3.5mmヘッドセットオーディオジャック
  - スピーカージャック
- Raspberry Pi 40ピンヘッダー互換
- マイクロフォン：MSM321A3729H9BP
- 感度：-22 dBFS（無指向性）
- SNR：59 dB
- 最大サンプルレート：48Khz

## アプリケーションアイデア

- スマートスピーカー
- インテリジェント音声アシスタントシステム
- ボイスレコーダー
- 音声会議システム
- 会議通信機器
- 音声対話ロボット
- 車載音声アシスタント
- その他音声コマンドが必要なシナリオ

## ハードウェア概要

**システム図**

<a href="https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/voice_hat_acc-correct.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/voice_hat_acc-correct.png"/></a>

**インターフェース**

![](https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/Hardware.jpg)

:::note
接続後は、必ずマルチメーターを使用して、回路の導通が上図に示されている通りかどうかを確認してください。
:::

## 組み立て図

![](https://files.seeedstudio.com/wiki/Bazaar_file/107990055/img/ab.png)

## はじめに

**ReSpeaker 4-Mic Array を Raspberry Pi に接続する**

**ステップ 1.**  *ReSpeaker Voice Accessory HAT* と *ReSpeaker 4-Mic linear Array* をリボンケーブルで接続します

**ステップ 2.**  *ReSpeaker Voice Accessory HAT* を 40 ピン GPIO 経由で *Raspberry Pi* に接続します

**ステップ 3.**  *イヤホン* を *3.5mm ヘッドセットオーディオジャック* に接続するか、*スピーカー* を *JST 2.0 スピーカージャック* に接続します

**ステップ 4.**  *Raspberry Pi* を micro-USB ケーブルで *PC* に接続します

![Pics here](https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/4-mic.jpg)

### ソフトウェア

**ステップ 1. seeed-voicecard をインストールする**

seeed voice card のソースコードを取得し、すべての linux カーネルドライバーをインストールします。

```
sudo apt-get update
git clone https://github.com/HinTak/seeed-voicecard.git
cd seeed-voicecard
sudo ./install.sh  
sudo reboot

```

**ステップ2. サウンドカードの確認**

以下のコマンドを実行して録音デバイスを確認します。

```
pi@raspberrypi:~ $ arecord -L
```

以下のようになるはずです：

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

以下のコマンドを使用して再生デバイスを確認してください。

```
pi@raspberrypi:~ $ aplay -L
```

以下のようになるはずです：

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

**ステップ3. 録音と再生**

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
4-Mic Linear Array Kitを使用して同時にキャプチャと再生を行う開発者向けの制限事項：

-1. キャプチャを最初に開始する必要があります。そうしないと、キャプチャチャンネルが乱れる可能性があります。

-2. 再生出力チャンネルは8つの同じチャンネルデータまたは4つの同じステレオチャンネルデータで満たす必要があります。そうしないと、スピーカーまたはヘッドフォンから何も出力されない可能性があります。

-3. 同時に再生と録音を行いたい場合、aplayの音楽ファイルはモノラルである必要があります。そうでなければ、このコマンドを使用して再生することはできません。
:::

また、Audacityを使用して再生と録音を行うこともできます。

:::tip
        VNC経由でAudacityを開くか、モニターを使用して開く必要があります
:::

```
sudo apt update
sudo apt install audacity
audacity                      // run audacity

```

![](https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/audacity.png)

## 使用概要

以下の例を実行するには、[4mics_hat repository](https://github.com/respeaker/4mics_hat.git) リポジトリをRaspberry Piにクローンしてください

```
git clone https://github.com/respeaker/4mics_hat.git
```

以下の例で言及されているすべてのPythonスクリプトは、このリポジトリ内で見つけることができます。必要な依存関係をインストールするには、mic_hatリポジトリフォルダから以下を実行してください

```
sudo apt-get install portaudio19-dev libatlas-base-dev
pip3 install -r requirements.txt
```

### Pythonで音声を録音する

[PyAudio pythonライブラリ](https://people.csail.mit.edu/hubert/pyaudio/)を使用してPythonで音声を録音します。

まず、以下のスクリプトを実行して2 Mic pi hatのデバイスインデックス番号を取得します：

```
python3 recording_examples/get_device_index.py
```

以下のようにデバイスIDが表示されます。

```
Input Device id  2  -  seeed-8mic-voicecard: - (hw:1,0)
```

音声を録音するには、```recording_examples/record.py``` ファイルをnanoまたは他のテキストエディタで開き、`RESPEAKER_INDEX = 2` をお使いのシステムのReSpeakerのインデックス番号に変更してください。その後、Pythonスクリプトrecord.pyを実行して録音を行います：

```
python3 recording_examples/record.py
```

- ステップ 6. 8チャンネルからチャンネル0のデータを抽出したい場合は、```record_one_channel.py```の内容を確認してください。他のチャンネルXについては、[0::8]を[X::8]に変更してください。

```
python3 recording_examples/record_one_channel.py
```

録音されたサンプルを再生するには、aplayシステムユーティリティを使用できます。例えば

```bash
aplay -f cd -Dhw:0 output.wav #for Stereo sound
aplay -D plughw:0,0 output_one_channel.wav #for Mono sound from one channel
```

## FAQ

**Q1: Mic Arrayには4つのMicしかないのに、なぜ8チャンネルになるのですか？**

A1: このアレイには2つのAC108があり、各AC108チップは4チャンネル出力を持っています。そのため合計8チャンネルになり、そのうち4チャンネルがマイクロフォン用、2チャンネルが再生用、残りの2チャンネルは使用されていません。

**Q2: RaspberryがReSpeaker 2-mics hatを検出できるのに、ReSpeaker 4-mics linear arrayを検出できない場合は？**

A2: raspberry -> Preferences -> Raspberry Pi Configurationをクリックし、Interfacesタブを選択して、1-WireがDisabledになっていることを確認してください。

## Resources

- **[PDF]** [AC101 Datasheet](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/reg/AC101_User_Manual_v1.1.pdf)
- **[PDF]** [AC108 Datesheet](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/reg/AC108_Datasheet_V1.2.pdf)
- **[Driver]** [Seeed-Voice Driver](https://github.com/respeaker/seeed-voicecard)
- **[Algorithms]** [DOA、VAD、NSを含むアルゴリズム](https://github.com/respeaker/mic_array)
- **[Voice Engine]** [Voice Engineプロジェクト、音声対応オブジェクトを作成するためのビルディングブロックを提供](https://github.com/voice-engine/voice-engine)
- **[Algorithms]** [AEC](https://github.com/voice-engine/ec)
- **[Mechanical Drawing]** [2D Drawing](https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/res/2d.zip)

## Projects

[Mojing Mojing - A Smart Mirror with ReSpeaker!](https://www.hackster.io/SeeedStudio/mojing-mojing-a-smart-mirror-with-respeaker-e1ae20): ReSpeakerによる音声インターフェース制御を備えたスマートミラー。Wio Linkと接続して他のオブジェクトも制御できます！Raspberry Piベース。

## 技術サポート・製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
