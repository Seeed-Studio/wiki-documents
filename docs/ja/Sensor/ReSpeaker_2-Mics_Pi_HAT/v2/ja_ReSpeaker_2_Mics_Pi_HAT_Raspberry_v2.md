---
description: Raspberry Pi の使い方
title: Raspberry Pi の使い方
keywords:
- ReSpeaker_2-Mics_Pi_HAT
image: https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/social-image.webp
slug: /ja/respeaker_2_mics_pi_hat_raspberry_v2
last_update:
  date: 05/15/2025
  author: Jiahao
---


:::caution
この Wiki は ReSpeaker 2-Mics Pi HAT **v2** 用に書かれています。v1 と v2 デバイスを区別するには、[ReSpeaker 2-Mics Pi HAT ハードウェアリビジョンの区別方法](/ja/how-to-distinguish-respeaker_2-mics_pi_hat-hardware-revisions)を参照してください。
:::

最新の Raspberry Pi OS では、従来のドライバインストール方法（v1 デバイス用）が利用できなくなり、以下の既知の問題が発生する可能性があります：

- インストール後にデスクトップ環境が破損する可能性があります。
- ReSpeaker デバイスが `aplay` / `arecord` によって検出されない可能性があります。

そのため、これらの問題に関する新しい Wiki を再リリースしました。最新の Raspberry Pi OS を使用している場合は、以下の手順に従って ReSpeaker を動作させてください。

## ドライバのインストールと設定

### 1. ReSpeaker 2-Mics Pi HAT を Raspberry Pi に接続する

ReSpeaker 2-Mics Pi HAT を Raspberry Pi に取り付けます。ReSpeaker 2-Mics Pi HAT を積み重ねる際にピンが正しく整列していることを確認してください。

Raspberry Pi 接続

![connection picture1](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/pi.png)

Raspberry Pi Zero 接続

![connection picture2](https://files.seeedstudio.com/products/107100001/01.png)

### 2. Raspberry Pi にドライバをセットアップする

[Raspberry Pi OS の最新バージョン](https://www.raspberrypi.com/software/operating-systems/)を Pi 上で実行していることを確認してください。 *(2024.11.19 更新)*

<details>
<summary style={{ color: 'red' }}>Raspberry Pi Zero W の準備</summary>

```sh
## カーネルをインストール
sudo apt install flex bison libssl-dev bc build-essential libncurses5-dev libncursesw5-dev linux-headers-6.6.51+rpt-rpi-v6
git clone --depth=1 --branch rpi-6.6.y https://github.com/raspberrypi/linux.git

## ターゲットディレクトリを作成
mkdir ~/tlv320aic3x_i2c_driver
cd ~/tlv320aic3x_i2c_driver
## コードをコピー
cp ~/linux/sound/soc/codecs/tlv320aic3x.c ~/tlv320aic3x_i2c_driver/
cp ~/linux/sound/soc/codecs/tlv320aic3x.h ~/tlv320aic3x_i2c_driver/
cp ~/linux/sound/soc/codecs/tlv320aic3x-i2c.c ~/tlv320aic3x_i2c_driver/
## Makefile を修正
nano Makefile
-------------------
obj-m += snd-soc-tlv320aic3x-i2c.o
snd-soc-tlv320aic3x-i2c-objs := tlv320aic3x.o tlv320aic3x-i2c.o

KDIR := /lib/modules/$(shell uname -r)/build
PWD := $(shell pwd)

all:
        $(MAKE) -C $(KDIR) M=$(PWD) modules

clean:
        $(MAKE) -C $(KDIR) M=$(PWD) clean

install:
        sudo cp snd-soc-tlv320aic3x-i2c.ko /lib/modules/$(shell uname -r)/kernel/sound/soc/codecs/
        sudo depmod -a

-------------------

## ドライバをコンパイル
make
sudo make install
sudo modprobe snd-soc-tlv320aic3x-i2c

## ログを確認
lsmod | grep tlv320
dmesg | grep tlv320

```
</details>

- ステップ 1: ReSpeaker 2-Mics Pi HAT (V2.0) 用のデバイスツリーソース (DTS) を取得し、コンパイルしてデバイスツリーオーバーレイをインストールします。

```bash
curl https://raw.githubusercontent.com/Seeed-Studio/seeed-linux-dtoverlays/refs/heads/master/overlays/rpi/respeaker-2mic-v2_0-overlay.dts -o respeaker-2mic-v2_0-overlay.dts
dtc -I dts respeaker-2mic-v2_0-overlay.dts -o respeaker-2mic-v2_0-overlay.dtbo
sudo dtoverlay respeaker-2mic-v2_0-overlay.dtbo
sudo cp respeaker-2mic-v2_0-overlay.dtbo /boot/firmware/overlays
```

- ステップ 2: `/boot/firmware/config.txt` を編集し、以下の行を追加します：

```
dtoverlay=respeaker-2mic-v2_0-overlay
dtoverlay=i2s-mmap
```

> **注意:** カーネルバージョンが 4.0 より大きい場合、`dtoverlay=i2s-mmap` を追加する必要はありません。

![config example](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/dtoverlays.png)

- ステップ 3: Pi を再起動します。

```bash
sudo reboot
```

- ステップ 4: `aplay` / `arecord` によってデバイスが検出されるか確認します。

`aplay` の期待される出力は以下の通りです：

```
$ aplay -l
**** List of PLAYBACK Hardware Devices ****
card 0: vc4hdmi0 [vc4-hdmi-0], device 0: MAI PCM i2s-hifi-0 [MAI PCM i2s-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: vc4hdmi1 [vc4-hdmi-1], device 0: MAI PCM i2s-hifi-0 [MAI PCM i2s-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 2: seeed2micvoicec [seeed2micvoicec], device 0: 1f000a4000.i2s-tlv320aic3x-hifi tlv320aic3x-hifi-0 [1f000a4000.i2s-tlv320aic3x-hifi tlv320aic3x-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

`arecord` の期待される出力は以下の通りです：

```
$ arecord -l
**** List of CAPTURE Hardware Devices ****
card 2: seeed2micvoicec [seeed2micvoicec], device 0: 1f000a4000.i2s-tlv320aic3x-hifi tlv320aic3x-hifi-0 [1f000a4000.i2s-tlv320aic3x-hifi tlv320aic3x-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

**ここで `card 2` は ReSpeaker 2-Mics Pi HAT のインデックスです。システムによってこの番号は異なる場合があります。この例では、ReSpeaker にアクセスするには `arecord -D plughw:2,0` または `aplay -D plughw:2,0` を使用できます。**

### 3. サウンド設定を構成し、alsamixer で音量を調整する

`alsamixer` は Advanced Linux Sound Architecture (ALSA) 用のターミナルユーザーインターフェイスミキサープログラムで、サウンド設定を構成し音量を調整するために使用されます。

```bash
alsamixer
```

![](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/alsamixer.png)

左右の矢印キーはチャンネルまたはデバイスを選択するために使用され、上下の矢印キーは現在選択されているデバイスの音量を制御します。ALT+Q または Esc キーを押してプログラムを終了します。[詳細情報](https://en.wikipedia.org/wiki/Alsamixer)

:::caution
    最初に F6 を使用して seeed-2mic-voicecard デバイスを選択してください。
:::

## 使用概要

まず、[https://github.com/respeaker/mic_hat.git](https://github.com/respeaker/mic_hat.git) リポジトリを Raspberry Pi にクローンしてください。

```bash
git clone https://github.com/respeaker/mic_hat.git
cd mic_hat
```

以下の例で言及されているすべての Python スクリプトは、このリポジトリ内にあります。必要な依存関係をインストールするには、mic_hat リポジトリフォルダ内で以下を実行してください。

```bash
sudo apt-get install portaudio19-dev libatlas-base-dev
pip3 install -r requirements.txt
```

### APA102 LED

LEDを使用するには、まずSPIインターフェースを有効にする必要があります。SPIインターフェースを有効にするには、Raspberry Piのソフトウェア設定ツールを開きます。

```bash
sudo raspi-config
```

「3 Interface Options」 -> 「I4 SPI」を選択してSPIインターフェースを有効にします。その後、Raspberry Piを再起動してください。

```bash
sudo reboot
```

各オンボードAPA102 LEDには追加のドライバーチップがあります。このドライバーチップは、入力ラインを介して希望する色を受信し、新しいコマンドが受信されるまでその色を保持します。

```bash
cd mic_hat
python3 interfaces/pixels.py
```

<video width={512} height={384} controls preload> 
  <source src="https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/led.webmhd.webm" />
  <source src="https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/led.mp4" />
</video>

### ユーザーボタン

オンボードのユーザーボタンがあり、GPIO_17に接続されています。

:::caution
    リポジトリのデモコードは、`RPI.GPIO`の非互換性のため、Raspberry Pi 5では利用できません。ただし、`gpiozero`ライブラリを使用したRaspberry Pi 5向けの代替デモコードを提供しています。
:::

#### Raspberry Pi 5以外のデバイス

クローンしたリポジトリから例のスクリプトを実行すると、ボタンを押した際に「on」と表示されるはずです。

```txt
$ python3 button.py
off
off
on
on
off
```

#### Raspberry Pi 5デバイス

以下のコードをコピーして`~/button.py`に保存してください。

```python
from gpiozero import DigitalInputDevice
from time import sleep

def main():
    pin = DigitalInputDevice(pin=17, pull_up=True)
    try:
        while True:
            print("on" if pin.value == 1 else "off")
            sleep(1)
    finally:
        pin.close()

if __name__ == '__main__':
    main()
```

ボタンを押した際に「on」と表示されるはずです。

```bash
$ python3 ~/button.py
off
on
on
off
on
off
```

:::note
仮想環境では動作しません。まず仮想環境を終了してください。
```bash
deactivate
python3 ~/button.py
```
:::

### Pythonで音声を録音する

Pythonで音声を録音するために、[PyAudio python library](https://people.csail.mit.edu/hubert/pyaudio/)を使用します。

まず、以下のスクリプトを実行してReSpeakerのデバイスインデックス番号を取得してください。

```bash
cd mic_hit
python3 recording_examples/get_device_index.py
```

以下のようにデバイスIDが表示されます。

```bash
Input Device id  1  -  seeed2micvoicec: 1f000a4000.i2s-tlv320aic3x-hifi tlv320aic3x-hifi-0 (hw:2,0)
```

音声を録音するには、```recording_examples/record.py```ファイルを`nano`や`vim`などのテキストエディタで開き、`RESPEAKER_INDEX = 2`をシステム上のReSpeakerのインデックス番号に変更してください。その後、Pythonスクリプト`record.py`を実行して録音を行います。

```bash
python3 recording_examples/record.py
```

2チャンネルからチャンネル0のデータを抽出したい場合は、```record_one_channel.py```の内容を確認してください。他のチャンネルXの場合は、[0::2]を[X::2]に変更してください。

```bash
python3 recording_examples/record_one_channel.py
```

録音したサンプルを再生するには、aplayシステムユーティリティを使用することができます。例えば：

```bash
aplay -f cd -D hw:2,0 output.wav # ステレオ音声の場合
aplay -D plughw:2,0 output_one_channel.wav # 1チャンネルのモノラル音声の場合
```

または、recording_examples/play.pyスクリプトを使用してPyAudioで.wavファイルを再生することもできます。

```bash
python3 recording_examples/play.py path-to-wav-file
```

play.pyで正しい出力デバイスインデックスを指定してください。そうしないとPyAudioがフリーズします！

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、できる限りスムーズな体験を提供するため、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>