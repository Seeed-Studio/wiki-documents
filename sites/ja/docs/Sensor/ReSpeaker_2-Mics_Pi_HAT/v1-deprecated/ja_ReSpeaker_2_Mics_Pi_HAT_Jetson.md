---
description: Nvidia Jetson の使い方を始める
title: Nvidia Jetson の使い方を始める
keywords:
- ReSpeaker_2-Mics_Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ReSpeaker_2_Mics_Pi_HAT_Jetson
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


:::caution
この Wiki は ReSpeaker 2-Mics Pi HAT **v1** 用に書かれています。v1 と v2 デバイスを区別するには、[ReSpeaker 2-Mics Pi HAT ハードウェアリビジョンの区別方法](/ja/how-to-distinguish-respeaker_2-mics_pi_hat-hardware-revisions)を参照してください。
:::

### ドライバーのインストールと設定

**1. ReSpeaker 2-Mics Pi HAT を Jetson Nano に接続する**

ReSpeaker 2-Mics Pi HAT を Jetson Nano に取り付けます。ReSpeaker 2-Mics Pi HAT を積み重ねる際にピンが正しく整列していることを確認してください。

Jetson Nano 接続

<div align="center"><img src="https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/JetsonNano-2MICS.png"/></div>

**2. Jetson Nano 上でドライバーをセットアップする**

デバイスで[最新の Jetson Nano OS イメージ](https://developer.nvidia.com/embedded/downloads)を実行していることを確認してください。 *(2021.07.03 更新)*

:::note
これは JetPack 4.5.1 でテストされています。他のバージョンの場合、```ls /usr/src/linux-headers-*``` コマンドでカーネルヘッダーのバージョン番号を確認する必要があります。
:::

**ステップ 1.** リポジトリをクローンする

```sh
cd ~
git clone https://github.com/Seeed-Studio/seeed-linux-dtoverlays
cd ~/seeed-linux-dtoverlays
```

**ステップ 2.** dtbo とドライバーをビルドする

```sh
export CUSTOM_MOD_FILTER_OUT="lis3lv02d mcp25xxfd gt9xx seeed-voicecard"
KBUILD=/usr/src/linux-headers-4.9.201-tegra-ubuntu18.04_aarch64/kernel-4.9 make all_jetsonnano
```

**ステップ 3.** ドライバーをインストールする

```sh
sudo -E KBUILD=/usr/src/linux-headers-4.9.201-tegra-ubuntu18.04_aarch64/kernel-4.9 make install_jetsonnano
```

**ステップ 4.** dtbo をインストールする

```sh
sudo /opt/nvidia/jetson-io/config-by-hardware.py -n "Seeed Voice Card 2MIC"
```

**ステップ 5.** 再起動する

```sh
sudo reboot
```

**ステップ 6.** Alsa ウィジェット設定を復元する

:::note
ログイン後、サウンドカードがビジー状態になるまで少し待つ必要があります。
:::

```sh
cd ~/seeed-linux-dtoverlays
alsactl -f extras/wm8960_asound.state-jetson-nano restore 1
```

**ステップ 7.** ```aplay -l``` と ```arecord -l``` コマンドを使用して、サウンドカード名がソースコード seeed-voicecard と一致していることを確認します。

```
jetson@jetson:~$ aplay -l
**** 再生用ハードウェアデバイスのリスト ****
card 0: tegrahda [tegra-hda], device 3: HDMI 0 [HDMI 0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 0: ADMAIF1 CIF ADMAIF1-0 []
  Subdevices: 0/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 1: ADMAIF2 CIF ADMAIF2-1 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 2: ADMAIF3 CIF ADMAIF3-2 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 3: ADMAIF4 CIF ADMAIF4-3 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 4: ADMAIF5 CIF ADMAIF5-4 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 5: ADMAIF6 CIF ADMAIF6-5 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 6: ADMAIF7 CIF ADMAIF7-6 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 7: ADMAIF8 CIF ADMAIF8-7 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 8: ADMAIF9 CIF ADMAIF9-8 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 9: ADMAIF10 CIF ADMAIF10-9 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0


jetson@jetson:~$ arecord -l
**** 録音用ハードウェアデバイスのリスト ****
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 0: ADMAIF1 CIF ADMAIF1-0 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 1: ADMAIF2 CIF ADMAIF2-1 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 2: ADMAIF3 CIF ADMAIF3-2 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 3: ADMAIF4 CIF ADMAIF4-3 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 4: ADMAIF5 CIF ADMAIF5-4 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 5: ADMAIF6 CIF ADMAIF6-5 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 6: ADMAIF7 CIF ADMAIF7-6 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 7: ADMAIF8 CIF ADMAIF8-7 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 8: ADMAIF9 CIF ADMAIF9-8 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 9: ADMAIF10 CIF ADMAIF10-9 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0

```

- ステップ 3. テストを行い、マイクに話しかけた内容が聞こえることを確認します（イヤホンまたはスピーカーを接続するのを忘れないでください）。

```
arecord -f cd -Dhw:1 test.wav
aplay -Dhw:1 test.wav
```

または（マイクの音を即座にスピーカーやヘッドホンに再生する場合）:

```sh
arecord -D hw:1,0 -f S32_LE -r 48000 -c 2 | aplay -D hw:1,0 -f S32_LE -r 48000 -c 2
```

**注意:** -Dhw:1 は録音（または再生）デバイス番号であり、システムによってこの番号は異なる場合があります。

## 使用概要

以下の例を実行するには、[https://github.com/respeaker/mic_hat.git](https://github.com/respeaker/mic_hat.git) リポジトリを Jetson Nano にクローンしてください。

```
git clone https://github.com/respeaker/mic_hat.git
```

以下の例で言及されているすべての Python スクリプトは、このリポジトリ内にあります。必要な依存関係をインストールするには、mic_hat リポジトリフォルダ内で以下を実行してください。

```
sudo apt-get install portaudio19-dev libatlas-base-dev
pip3 install Jetson.GPIO spidev pyaudio
```

**APA102 LED**

各オンボード APA102 LED には追加のドライバーチップが搭載されています。このドライバーチップは、入力ラインを介して希望する色を受信し、新しいコマンドが受信されるまでその色を保持します。

```
python3 interfaces/pixels.py
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/ReSpeaker/img/IMG_20210703_125819.jpg"/></div>

### Pythonで音声を録音する

Pythonで音声を録音するために、[PyAudio Pythonライブラリ](https://people.csail.mit.edu/hubert/pyaudio/)を使用します。

まず、以下のスクリプトを実行して、2 Mic pi hatのデバイスインデックス番号を取得します。

```
python3 recording_examples/get_device_index.py
```

以下のようにデバイスIDが表示されます。

```
Input Device id  1  -  tegra-snd-t210ref-mobile-rt565x: - (hw:1,1)
```

音声を録音するには、```recording_examples/record.py``` ファイルを nano または他のテキストエディタで開き、`RESPEAKER_INDEX = 1` をシステム上の ReSpeaker のインデックス番号に変更します。その後、Pythonスクリプト record.py を実行して録音を行います。

```
python3 recording_examples/record.py
```

2チャンネルからチャンネル0のデータを抽出したい場合は、```record_one_channel.py``` の内容を確認してください。他のチャンネルXの場合は、[0::2] を [X::2] に変更してください。

```
python3 recording_examples/record_one_channel.py
```

録音したサンプルを再生するには、aplayシステムユーティリティを使用することができます。例えば以下のように実行します。

```bash
aplay -f cd -Dhw:1 output.wav # ステレオ音声の場合
```