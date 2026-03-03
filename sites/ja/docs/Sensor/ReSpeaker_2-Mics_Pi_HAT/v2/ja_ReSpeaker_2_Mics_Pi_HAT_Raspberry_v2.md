---
description: Raspberry Pi の使用開始
title: Raspberry Pi の使用開始
keywords:
- ReSpeaker_2-Mics_Pi_HAT
image: https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/social-image.webp
slug: /respeaker_2_mics_pi_hat_raspberry_v2
last_update:
  date: 01/29/2026
  author: Mingxi
---

:::caution
このwikiはReSpeaker 2-Mics Pi HAT **v2**用に書かれています。v1とv2デバイスを区別するには、[ReSpeaker 2-Mics Pi HATハードウェアリビジョンの区別方法](/ja/how-to-distinguish-respeaker_2-mics_pi_hat-hardware-revisions)を参照してください。
:::

最新のRaspberry Pi OSでは、従来のドライバーインストール方法（v1デバイス用）は利用できなくなり、以下の既知の問題が発生する可能性があります：

- インストール後にデスクトップ環境が破損する可能性があります。
- ReSpeakerデバイスが`aplay` / `arecord`で検出されない可能性があります。

そのため、この問題に関する新しいwikiを再リリースしました。以前のリリースではなく、より現代的なRaspberry Pi OSを使用している場合は、これらの手順に従ってReSpeakerを動作させてください。

## ドライバーのインストールと設定

### 1. ReSpeaker 2-Mics Pi HATをRaspberry Piに接続

ReSpeaker 2-Mics Pi HATをRaspberry Piに取り付けます。ReSpeaker 2-Mics Pi HATを重ねる際は、ピンが適切に配置されていることを確認してください。

Raspberry Pi接続

![connection picture1](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/pi.png)

Raspberry Pi Zero接続

![connection picture2](https://files.seeedstudio.com/products/107100001/01.png)

### 2. Raspberry Piでドライバーをセットアップ

Piで[最新のRaspberry Pi OS](https://www.raspberrypi.com/software/operating-systems/)を実行していることを確認してください。*（2024.11.19更新）*
<details>
<summary style={{ color: 'red' }}>Raspberry Pi Zero Wの準備</summary>

```sh
## Install kernel 
sudo apt install flex bison libssl-dev bc build-essential libncurses5-dev libncursesw5-dev linux-headers-6.6.51+rpt-rpi-v6
git clone --depth=1 --branch rpi-6.6.y https://github.com/raspberrypi/linux.git

## Make target directory
mkdir ~/tlv320aic3x_i2c_driver
cd ~/tlv320aic3x_i2c_driver
## Copy code
cp ~/linux/sound/soc/codecs/tlv320aic3x.c ~/tlv320aic3x_i2c_driver/
cp ~/linux/sound/soc/codecs/tlv320aic3x.h ~/tlv320aic3x_i2c_driver/
cp ~/linux/sound/soc/codecs/tlv320aic3x-i2c.c ~/tlv320aic3x_i2c_driver/
## Modify Makefile
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

## Compile the driver 
make
sudo make install
sudo modprobe snd-soc-tlv320aic3x-i2c

## Check logs
lsmod | grep tlv320
dmesg | grep tlv320

```

</details>

- ステップ1：ReSpeaker 2-Mics Pi HAT（V2.0）用のDevice Tree Source（DTS）を取得し、コンパイルしてデバイスツリーオーバーレイをインストールします。

```bash
git clone https://github.com/Seeed-Studio/seeed-linux-dtoverlays.git  
cd seeed-linux-dtoverlays/  
make overlays/rpi/respeaker-2mic-v2_0-overlay.dtbo  
sudo cp overlays/rpi/respeaker-2mic-v2_0-overlay.dtbo /boot/firmware/overlays/respeaker-2mic-v2_0.dtbo  
echo "dtoverlay=respeaker-2mic-v2_0" | sudo tee -a /boot/firmware/config.txt 
```


> **注意：** カーネルバージョンが4.0より大きい場合、`dtoverlay=i2s-mmap`を追加する必要はありません。

![config example](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/dtoverlays.png)

- ステップ2：Piを再起動します。

```bash
sudo reboot
```

- ステップ3：デバイスが`aplay` / `arecord`で検出されるかを確認します。

`aplay`の期待される出力は以下のようになります：

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

`arecord`の期待される出力は以下のようになります：

```
$ arecord -l
**** List of CAPTURE Hardware Devices ****
card 2: seeed2micvoicec [seeed2micvoicec], device 0: 1f000a4000.i2s-tlv320aic3x-hifi tlv320aic3x-hifi-0 [1f000a4000.i2s-tlv320aic3x-hifi tlv320aic3x-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

**ここで`card 2`はReSpeaker 2-Mics Pi HATのインデックスです。システムによってこの番号は異なる場合があります。この例でReSpeakerにアクセスするには、`arecord -D plughw:2,0`または`aplay -D plughw:2,0`を使用できます。**

### 3. alsamixerでサウンド設定を構成し音量を調整

`alsamixer`は、サウンド設定の構成と音量調整に使用されるAdvanced Linux Sound Architecture（ALSA）用のターミナルユーザーインターフェースミキサープログラムです。

```bash
alsamixer
```

![](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/alsamixer.png)

左右の矢印キーはチャンネルまたはデバイスの選択に使用され、上下の矢印は現在選択されているデバイスの音量を制御します。ALT+Qまたはエスケープキーでプログラムを終了します。[詳細情報](https://en.wikipedia.org/wiki/Alsamixer)

:::caution
    最初にF6を使用してseeed-2mic-voicecardデバイスを選択してください。
:::

## 使用概要

開始するには、[https://github.com/respeaker/mic_hat.git](https://github.com/respeaker/mic_hat.git)リポジトリをRaspberry Piにクローンします。

```bash
git clone https://github.com/respeaker/mic_hat.git
cd mic_hat
```

以下の例で言及されているすべてのPythonスクリプトは、このリポジトリ内にあります。必要な依存関係をインストールするには、mic_hatリポジトリフォルダから以下を実行します：

```bash
sudo apt-get install portaudio19-dev libatlas-base-dev
pip3 install -r requirements.txt
```

### APA102 LED

LEDを使用するには、最初にSPIインターフェースを有効にする必要があります。SPIインターフェースを有効にするには、Raspberry Piソフトウェア設定ツールを開きます：

```bash
sudo raspi-config
```

"3 Interface Options" -> "I4 SPI"を選択してSPIインターフェースを有効にします。その後、Raspberry Piを再起動します。

```bash
sudo reboot
```

各オンボードAPA102 LEDには追加のドライバーチップがあります。ドライバーチップは、入力ラインを介して希望の色を受信し、新しいコマンドを受信するまでこの色を保持します。

```bash
cd mic_hat
python3 interfaces/pixels.py
```

<video width={512} height={384} controls preload>
  <source src="https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/led.webmhd.webm" />
  <source src="https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/led.mp4" />
</video>

### ユーザーボタン

GPIO_17に接続されたオンボードユーザーボタンがあります。

:::caution
    リポジトリのデモコードは`RPI.GPIO`の非互換性のため、Raspberry Pi 5では利用できません。しかし、`gpiozero`ライブラリを使用したRaspberry Pi 5用の代替デモコードを提供しています。
:::

#### Raspberry Pi 5以外のデバイス

ステップ4でクローンしたリポジトリからサンプルスクリプトを実行すると、ボタンを押したときに「on」と表示されるはずです：

```txt
$ python3 button.py
off
off
on
on
off
```

#### Raspberry Pi 5デバイス

以下のコードをコピーして`~/button.py`に保存します：

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

ボタンを押したときに「on」と表示されるはずです：

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
仮想環境では動作しません。最初に終了する必要があります：

```bash
deactivate
python3 ~/button.py
```

:::

### Pythonで音声を録音

Pythonで音声を録音するために[PyAudio pythonライブラリ](https://people.csail.mit.edu/hubert/pyaudio/)を使用します。

まず、以下のスクリプトを実行してReSpeakerのデバイスインデックス番号を取得します：

```bash
cd mic_hit
python3 recording_examples/get_device_index.py
```

以下のようにデバイスIDが表示されます。

```bash
Input Device id  1  -  seeed2micvoicec: 1f000a4000.i2s-tlv320aic3x-hifi tlv320aic3x-hifi-0 (hw:2,0)
```

音声を録音するには、```recording_examples/record.py```ファイルを`nano`、`vim`または他のテキストエディタで開き、`RESPEAKER_INDEX = 2`をシステム上のReSpeakerのインデックス番号に変更します。その後、pythonスクリプト`record.py`を実行して録音を行います：

```bash
python3 recording_examples/record.py
```

2チャンネルからチャンネル0のデータを抽出したい場合は、```record_one_channel.py```の内容を確認してください。他のチャンネルXについては、[0::2]を[X::2]に変更してください。

```bash
python3 recording_examples/record_one_channel.py
```

録音したサンプルを再生するには、aplayシステムユーティリティを使用できます。例えば：

```bash
aplay -f cd -D hw:2,0 output.wav # for Stereo sound
aplay -D plughw:2,0 output_one_channel.wav #for Mono sound from one channel
```

または、recording_examples/play.pyスクリプトを使用してPyAudioで.wavファイルを再生できます。

```bash
python3 recording_examples/play.py path-to-wav-file
```

play.pyで正しい出力デバイスインデックスを指定してください - そうしないとPyAudioがフリーズします！

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
