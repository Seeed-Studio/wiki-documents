---
description: ReSpeaker 6-Mic Circular Array Kit for Raspberry Pi
title: ReSpeaker 6-Mic Circular Array Kit for Raspberry Pi
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ReSpeaker_6-Mic_Circular_Array_kit_for_Raspberry_Pi
last_update:
  date: 1/11/2023
  author: jianjing Huang
---

![enter image description here](https://files.seeedstudio.com/products/107990055/01.png)

SeeedのReSpeaker 6-Mic Circular Array Kitは、Raspberry Pi用に設計された拡張ボード（HAT）です。これは円形マイクロフォンアレイキットで、6つのマイクロフォンを搭載し、AIと音声アプリケーション用に設計されています。つまり、Amazon Alexa Voice Service、Google Assistantなどを統合できる、より強力で柔軟な音声製品をRaspberry Piで構築できます。

ReSpeaker 6-Mic Circular Array Kit for Raspberry Piは2つのボードで構成されており、1つは音声アクセサリHAT、もう1つは6つのマイクロフォン円形アレイです。

ReSpeaker 6-Mic Circular Array Kit for Raspberry PiはRaspbianシステムで8入力・8出力チャンネルをサポートします。最初の6つの入力チャンネルはマイクロフォン録音用、残りの2つの入力チャンネルは再生のエコーチャンネルです。最初の2つの出力チャンネルは再生用、残りの6つの出力チャンネルはダミーです。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/NxZx9nz67Bc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/ReSpeaker-6-Mic-Circular-Array-Kit-for-Raspberry-Pi-p-3067.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特徴

- 2つのADCチップと1つのDACチップ
- 8入力・8出力チャンネル
- 6つのマイクロフォンアレイ
- Groveサポート
- Raspberry Pi互換（Raspberry Pi ZeroとZero W、Raspberry Pi B+、Raspberry Pi 2 B、Raspberry Pi 3 B、Raspberry Pi 3 B+、Raspberry Pi 3 A+、Raspberry Pi 4をサポート）
- ヘッドセットとスピーカー音声出力

## 仕様

- 2 x X-Power AC108 ADC
- 6 x 高性能マイクロフォン
- 1 x X-Power AC101 DAC
- 音声出力：
  - 3.5mmヘッドセットオーディオジャック
  - スピーカージャック
- Raspberry Pi 40ピンヘッダー互換
- マイクロフォン：MSM321A3729H9CP
- 感度：-22 dBFS（無指向性）
- SNR：59 dB
- 最大サンプルレート：48Khz

## アプリケーション

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

<a href="https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/voice_hat_acc.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/voice_hat_acc.png"/></a>

**インターフェース**

![](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/img/hardware.jpg)

:::note
接続後は、必ずマルチメーターを使用して、回路の導通が上図に示されている通りかどうかを確認してください。
:::

## 組み立て図

![](https://files.seeedstudio.com/wiki/Bazaar_file/107990055/img/ab.png)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bazaar_file/107990055/img/6-mic_array_assemble.gif" /></p>

## はじめに

### ハードウェア

**前提条件**

ReSpeaker 6-Mic Circular Array    x1

[Raspberry Pi 3B or 3B+](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B%2B-p-3037.html?utm_source=homepage&utm_medium=homepagebanner&utm_campaign=hp_0605)              x1

[Micro-USB Cable](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)                     x1

PC                                  x1

イヤホンまたはスピーカー                 x1

:::tip
実際にはReSpeaker 6-Mic Circular ArrayはRaspberry Pi Zero、Raspberry Pi 1 B+、Raspberry Pi 2 B、Raspberry Pi 3 B、Raspberry Pi 3 model B+、Raspberry Pi 3 A+、Raspberry Pi 4をサポートしています。このwikiではRaspberry Pi 3を使用しています。
:::

**接続**

**ステップ 1.**  *ReSpeaker Voice Accessory HAT*と*ReSpeaker 6-Mic circular Array*をリボンケーブルで接続します

**ステップ 2.**  *ReSpeaker Voice Accessory HAT*を40ピンGPIO経由で*Raspberry Pi*に接続します

**ステップ 3.**  *イヤホン*を*3.5mmヘッドセットオーディオジャック*に接続するか、*スピーカー*を*JST 2.0スピーカージャック*に接続します

**ステップ 4.**  *Raspberry Pi*をmicro-USBケーブルで*PC*に接続します

![Pics here](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/img/6-mic.jpg)

### ソフトウェア

**前提条件**

*プランA*

[PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

Raspberry Piに接続するために*Putty*または他の*ssh*ツールを使用する必要があります。開始前に以下を確認してください：

1- puttyが接続できるようにRaspberry Piの*ssh*機能を有効にしてください。*ssh*の有効化方法がわからない場合は、`how to setup ssh raspberry pi`でGoogle検索してください

2- Raspberry PiとPCが同じWiFiネットワークで動作していることを確認してください。WiFiの設定方法がわからない場合は、`how to setup wifi raspberry pi`でGoogle検索してください

3- Raspberry PiのIPアドレスを取得してください。IPアドレスの取得方法がわからない場合は、[raspberry公式ドキュメント](https://www.raspberrypi.org/documentation/remote-access/ip-address.md)を参照してください

4- IPアドレスを使用してputty sshサービス経由でRaspberry PiとPCを接続してください。

![pic](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/img/putty.png)

次にホスト名とパスワードを入力してください。デフォルトのIDは`pi`、パスワードは`raspberry`です。

```
login as: pi
pi@192.168.43.210's password:raspberry

```

今、あなたはRaspberryにアクセスでき、puttyでコマンドを入力して操作できます。

[VNC Viewer](https://www.realvnc.com/en/connect/download/viewer/)

このキットをalexaやduerosと連携させるには、認証を取得するためにWebサイトを開く必要があります。そのため、*VNC Viewer*を使用してamazonまたはbaiduアカウントにログインする必要があります。Raspberryの*VNC*サービスが有効になっていることを確認してください。

または、プランBを検討することもできます。

*プランB*

上記の手順が面倒な場合は、HDMIモニターを使用し、USBキーボードとUSBマウスをRaspberryに接続するだけでも動作します。シンプルで簡単です。

**ステップ1. seeed-voicecardをインストール**

seeed voice cardのソースコードを取得し、すべてのlinuxカーネルドライバーをインストールします。

```
sudo apt-get update
sudo apt-get upgrade
git clone https://github.com/respeaker/seeed-voicecard.git
cd seeed-voicecard
sudo ./install.sh   
sudo reboot

```

**ステップ2. サウンドカードの確認**

以下のコマンドを実行して録音デバイスを確認してください。

```
pi@raspberrypi:~ $ arecord -L
```

次のようになるはずです：

```
pi@raspberrypi:~ $ arecord -L
null
    Discard all samples (playback) or generate zero samples (capture)
default
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

再生デバイスを確認するには、次のコマンドを使用してください。

```
pi@raspberrypi:~ $ aplay -L
```

以下のようになるはずです：

```
pi@raspberrypi:~ $ aplay -L
null
    Discard all samples (playback) or generate zero samples (capture)
default
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

#Doing capture && playback the same time
arecord -D hw:1,0 -f S32_LE -r 16000 -c 8 to_be_record.wav &
#mono_to_play.wav is a mono channel wave file to play
aplay -D plughw:1,0 -r 16000 mono_to_play.wav

```

:::note
6-Mic Circular Array Kit（または4-Mics Linear Array Kit）を使用する開発者が同時にキャプチャと再生を行う際の制限：

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

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/audacity.png)

### LEDで遊ぶ

6マイク円形アレイには12個のGRB LEDがあり、LEDを自分で設定できます。それでは、LEDを点灯させる方法を見てみましょう。

```
git clone --depth 1 https://github.com/respeaker/pixel_ring.git
cd pixel_ring
pip install -U -e .
python examples/respeaker_4mic_array.py

```

LEDが点灯して動作するのが確認できます。`python examples/respeaker_4mic_array.py` ファイルを参考にして、独自のエフェクトを作成することができます。

## リアルタイム音源定位と追跡

[ODAS](https://github.com/introlab/odas) は Open embeddeD Audition System の略です。これは音源定位、追跡、分離、後処理フィルタリングを実行するための専用ライブラリです。それでは楽しんでみましょう。

- ステップ 1. ODAS を取得してビルドします。

```
sudo apt-get install libfftw3-dev libconfig-dev libasound2-dev libgconf-2-4
sudo apt-get install cmake
git clone https://github.com/introlab/odas.git
mkdir odas/build
cd odas/build
cmake ..
make
```

- ステップ 2. [ODAS Studio](https://github.com/introlab/odas_web/releases) を取得して開きます。

- ステップ 3. odascore は **odas/bin/odaslive** にあり、**設定ファイル** は [こちら](https://raw.githubusercontent.com/xiongyihui/odas/master/config/odaslive/respeaker_6_mic_array.cfg) にあります。

![](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/img/odas.png)

## 音声抽出

音声抽出には [PyAudio python ライブラリ](https://people.csail.mit.edu/hubert/pyaudio/) を使用します。

- ステップ 1, 6 Mic pi hat のデバイスインデックス番号を取得するために、以下のスクリプトを実行する必要があります：

```python
sudo pip install pyaudio
cd ~
nano get_index.py
```

- ステップ 2, 以下のコードをコピーしてget_index.pyに貼り付けてください。

```python
import pyaudio

p = pyaudio.PyAudio()
info = p.get_host_api_info_by_index(0)
numdevices = info.get('deviceCount')

for i in range(0, numdevices):
        if (p.get_device_info_by_host_api_device_index(0, i).get('maxInputChannels')) > 0:
            print "Input Device id ", i, " - ", p.get_device_info_by_host_api_device_index(0, i).get('name')
```

- ステップ3、Ctrl + Xを押して終了し、Yを押して保存します。

- ステップ4、'sudo python get_index.py'を実行すると、以下のようにデバイスIDが表示されます。

```
Input Device id  2  -  seeed-8mic-voicecard: - (hw:1,0)
```

- ステップ5、`RESPEAKER_INDEX = 2` をインデックス番号に変更します。Pythonスクリプト record.py を実行して音声を録音します。

```python
import pyaudio
import wave

RESPEAKER_RATE = 16000
RESPEAKER_CHANNELS = 8 
RESPEAKER_WIDTH = 2
# run getDeviceInfo.py to get index
RESPEAKER_INDEX = 2  # refer to input device id
CHUNK = 1024
RECORD_SECONDS = 5
WAVE_OUTPUT_FILENAME = "output.wav"

p = pyaudio.PyAudio()

stream = p.open(
            rate=RESPEAKER_RATE,
            format=p.get_format_from_width(RESPEAKER_WIDTH),
            channels=RESPEAKER_CHANNELS,
            input=True,
            input_device_index=RESPEAKER_INDEX,)

print("* recording")

frames = []

for i in range(0, int(RESPEAKER_RATE / CHUNK * RECORD_SECONDS)):
    data = stream.read(CHUNK)
    frames.append(data)

print("* done recording")

stream.stop_stream()
stream.close()
p.terminate()

wf = wave.open(WAVE_OUTPUT_FILENAME, 'wb')
wf.setnchannels(RESPEAKER_CHANNELS)
wf.setsampwidth(p.get_sample_size(p.get_format_from_width(RESPEAKER_WIDTH)))
wf.setframerate(RESPEAKER_RATE)
wf.writeframes(b''.join(frames))
wf.close()
```

- ステップ6. 8チャンネルからチャンネル0のデータを抽出したい場合は、以下のコードに従ってください。他のチャンネルXについては、[0::8]を[X::8]に変更してください。

```python
import pyaudio
import wave
import numpy as np

RESPEAKER_RATE = 16000
RESPEAKER_CHANNELS = 8
RESPEAKER_WIDTH = 2
# run getDeviceInfo.py to get index
RESPEAKER_INDEX = 2  # refer to input device id
CHUNK = 1024
RECORD_SECONDS = 3
WAVE_OUTPUT_FILENAME = "output.wav"

p = pyaudio.PyAudio()

stream = p.open(
            rate=RESPEAKER_RATE,
            format=p.get_format_from_width(RESPEAKER_WIDTH),
            channels=RESPEAKER_CHANNELS,
            input=True,
            input_device_index=RESPEAKER_INDEX,)

print("* recording")

frames = [] 

for i in range(0, int(RESPEAKER_RATE / CHUNK * RECORD_SECONDS)):
    data = stream.read(CHUNK)
    # extract channel 0 data from 8 channels, if you want to extract channel 1, please change to [1::8]
    a = np.fromstring(data,dtype=np.int16)[0::8]
    frames.append(a.tostring())

print("* done recording")

stream.stop_stream()
stream.close()
p.terminate()

wf = wave.open(WAVE_OUTPUT_FILENAME, 'wb')
wf.setnchannels(1)
wf.setsampwidth(p.get_sample_size(p.get_format_from_width(RESPEAKER_WIDTH)))
wf.setframerate(RESPEAKER_RATE)
wf.writeframes(b''.join(frames))
wf.close()
```

## DOA

### キーワードを使用したDOA

**要件**

- pyaudio
- numpy
- snowboy

**インストール**

pyaudio、numpy、snowboyをインストールし、virtualenvを使用して仮想Python環境を作成してください。

```shell
sudo apt install python-pyaudio python-numpy python-virtualenv
sudo apt-get install swig python-dev libatlas-base-dev build-essential make
git clone --depth 1 https://github.com/Kitt-AI/snowboy.git
cd snowboy
virtualenv --system-site-packages env
source env/bin/activate
python setup.py build
python setup.py bdist_wheel
pip install dist/snowboy*.whl
git clone https://github.com/voice-engine/voice-engine.git
cd voice-engine
python setup.py bdist_wheel
pip install dist/*.whl
```

**snowboyを試してみましょう**

- ステップ1. kws_doa.pyを実行する

```shell
cd ~/voice-engine/examples/respeaker_6mic_array_for_pi/
python kws_doa.py
```

以下は kws_doa.py のコードです

```python
"""
Search the keyword "snowboy".
After finding the keyword, Direction Of Arrival (DOA) is estimated.

Hardware: ReSpeaker 6 Mic Array for Raspberry Pi
"""

import sys
import time
from voice_engine.source import Source
from voice_engine.channel_picker import ChannelPicker
from voice_engine.kws import KWS
from voice_engine.doa_respeaker_6mic_array import DOA


def main():
    src = Source(rate=16000, channels=8)
    ch0 = ChannelPicker(channels=src.channels, pick=0)
    kws = KWS(model='snowboy', sensitivity=0.6, verbose=True)
    doa = DOA(rate=16000)

    src.link(ch0)
    ch0.link(kws)
    src.link(doa)

    def on_detected(keyword):
        print('detected {} at direction {}'.format(keyword, doa.get_direction()))

    kws.set_callback(on_detected)

    src.recursive_start()
    while True:
        try:
            time.sleep(1)
        except KeyboardInterrupt:
            break

    src.recursive_stop()

    # wait a second to allow other threads to exit
    time.sleep(1)


if __name__ == '__main__':
    main()
```

- ステップ 2. snowboyと言って、ここにDOAの出力があります。

```shell
(env) pi@raspberrypi:~/voice-engine/examples/respeaker_6mic_array_for_pi $ python kws_doa.py 
['arecord', '-t', 'raw', '-f', 'S16_LE', '-c', '8', '-r', '16000', '-D', 'default', '-q']
0000000000000000000000000000000000000000000000000000000000000000000000000000000002222222222222222222222222222222222222222222222/usr/local/lib/python2.7/dist-packages/voice_engine-0.1.3-py2.7.egg/voice_engine/gcc_phat.py:22: RuntimeWarning: invalid value encountered in divide
  cc = np.fft.irfft(R / np.abs(R), n=(interp * n))
detected 1 at direction 283.32811392
3000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002222222222222222222222222222222222222222222222detected 1 at direction 210.0
30000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002222222222222222222222222222222222222222222222detected 1 at direction 62.5448292531
30000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002222222222222222222222222222222222222222222222222detected 1 at direction 62.5448292531
300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002222222222222222222222222222222222222222222detected 1 at direction 223.32811392
300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000022222222222222222222222222222222222222222222222222detected 1 at direction 223.32811392
30000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000222222222222222222222222222222222222222detected 1 at direction 283.32811392
300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002222222222222222222222222222222222222222222detected 1 at direction 237.455170747
```

## ボタン

respeaker_6-Micがraspberryに正しくインストールされているかを確認したい場合、ボタンは良いアイデアです。以下のコードを使用して確認できます。

```python

import RPi.GPIO as GPIO
import time

BUTTON = 26

GPIO.setmode(GPIO.BCM)
GPIO.setup(BUTTON, GPIO.IN)

while True:
    state = GPIO.input(BUTTON)
    if state:
        print("off")
    else:
        print("on")
    time.sleep(1)
```

## FAQ

**Q1: マイクアレイには6つのマイクしかないのに、なぜ8チャンネルになるのですか？**

A1: このアレイには2つのAC108があり、各AC108チップは4チャンネル出力を持っています。そのため合計8チャンネルとなり、そのうち6チャンネルがマイク用で、残りの2チャンネルが再生チャンネルです。

**Q2: RaspberryがReSpeaker 2-mics hatを検出できるのに、ReSpeaker 6-mics Circular arrayを検出できない場合は？**

A2: raspberry -> Preferences -> Raspberry Pi Configurationをクリックし、Interfacesタブを選択して、1-Wireが無効になっていることを確認してください。

## Resources

- **[PDF]** [AC101 Datasheet](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/reg/AC101_User_Manual_v1.1.pdf)
- **[PDF]** [AC108 Datesheet](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/reg/AC108_Datasheet_V1.2.pdf)
- **[Dxf]** [ReSpeaker Circular Array for Voice Accessory HAT with 6 Microphones case file](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/reg/ReSpeaker%20Circular%20Array%20for%20Voice%20Accessory%20HAT%20with%206%20Microphones.dxf)
- **[Dxf]** [ReSpeaker Circular Array for Voice Accessory HAT with 6 Microphone 2D File](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/reg/2d.zip)
- **[Driver]** [Seeed-Voice Driver](https://github.com/respeaker/seeed-voicecard)
- **[Algorithms]** [DOA、VAD、NSを含むアルゴリズム](https://github.com/respeaker/mic_array)
- **[Voice Engine]** [音声対応オブジェクトを作成するためのビルディングブロックを提供するVoice Engineプロジェクト](https://github.com/voice-engine/voice-engine)
- **[Algorithms]** [AEC](https://github.com/voice-engine/ec)

## 技術サポート・製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
