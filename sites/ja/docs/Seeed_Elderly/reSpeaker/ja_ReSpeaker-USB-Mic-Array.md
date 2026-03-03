---
description: ReSpeaker USB Mic Array
title: reSpeaker USB Mic Array
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ReSpeaker-USB-Mic-Array
sku: 107990193
last_update:
  date: 1/12/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/ReSpeaker-USB-Mics/img/Bazaar/ReSpeaker-USB-Mics-box-preview.jpg)

:::important 
この製品は現在、販売終了（EOL）となっています。
新規に購入またはプロジェクトを開始する場合は、新しくサポートされている代替製品である [**XVF3000**](https://wiki.seeedstudio.com/ja/respeaker_mic_array_v3.0/) の使用を強く推奨します。
本製品はすでに製造および積極的な保守が行われていません。
:::

箱から出してすぐに使える音声ピックアップデバイスは、まさにお客様の声です。

過去 1 年間で、[Respeaker Mic Array V2.0](https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2-0.html) は開発ボードの形態で 1 万台以上販売されました。お客様からは、音響の原理を考慮すると自分たちで設計するのが難しいため、筐体付きの完成品デバイスを求める声が絶えませんでした。

そこで Seeed は、その答えとして ReSpeaker USB Mic Array を提供します。

- よく設計された音響構造を備えた、箱から出してすぐに使えるデバイスであり、お客様のソリューションへ組み込む柔軟性をもたらします。
- 金型成形された筐体が利用可能で、市場投入までの時間と金型コストを削減できます。

ReSpeaker USB Mic Array 内部の PCBA と Respeaker Mic Array V2.0 の違い：

- 電源回路の最適化
- オーディオジャックと micro USB ポートを背面に移動

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/ReSpeaker-USB-Mic-Array-p-4247.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特長

- ファーフィールド音声キャプチャ
- USB Audio Class 1.0 (UAC 1.0) をサポート
- 4 マイクアレイ
- 12 個のプログラマブル RGB LED インジケータ
- 音声アルゴリズムと機能
  - Voice Activity Detection
  - Direction of Arrival
  - ビームフォーミング
  - ノイズ抑圧
  - 残響除去
  - アコースティックエコーキャンセレーション

## 仕様

- XMOS 製 XVF-3000
- 高性能デジタルマイク 4 個
- ファーフィールド音声キャプチャ対応
- 音声アルゴリズムをオンチップ実装
- 12 個のプログラマブル RGB LED インジケータ  
- マイク：ST MP34DT01TR-M  
- 感度：-26 dBFS（無指向性）  
- 音響過負荷点：120 dBSPL  
- SNR：61 dB  
- 電源：Micro USB からの 5V DC
- 寸法：70mm（直径）  
- 3.5mm オーディオジャック出力ソケット
- 消費電力：5V、LED オン時 180mA、LED オフ時 170mA
- 最大サンプリングレート：16Khz

## ハードウェア概要

![](https://files.seeedstudio.com/wiki/ReSpeaker-Mic-Array-v2.1/img/hardware_overview.jpg)

- **<font face="" size="3" font color="ff0000">①</font> XMOS XVF-3000：**
Acoustic Echo Cancellation (AEC)、ビームフォーミング、残響除去、ノイズ抑圧、ゲイン制御などの高度な DSP アルゴリズムを統合しています。

- **<font face="" size="3" font color="ff0000">②</font> デジタルマイク：**
MP34DT01-M は、容量検知素子と IC インターフェースで構成された、超小型・低消費電力・無指向性のデジタル MEMS マイクです。

- **<font face="" size="3" font color="ff0000">③</font> RGB LED：**
3 色 RGB LED。

- **<font face="" size="3" font color="ff0000">④</font> USB ポート：**
マイクアレイに電源を供給し、制御を行います。

- **<font face="" size="3" font color="ff0000">⑤</font> 3.5mm ヘッドホンジャック：**
オーディオを出力します。このポートにアクティブスピーカーまたはヘッドホンを接続できます。

- **<font face="" size="3" font color="ff0000">⑥</font> WM8960：**
WM8960 は、クラス D スピーカードライバを備えた低消費電力ステレオコーデックで、8 Ω 負荷に対して 1 チャンネルあたり 1 W を提供します。

**システムダイアグラム**
![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/system_diag.png)

## 応用例

- USB 音声キャプチャ
- スマートスピーカー
- インテリジェント音声アシスタントシステム
- ボイスレコーダー
- 音声会議システム
- 会議用コミュニケーション機器
- 音声対話ロボット
- 車載音声アシスタント
- その他の音声インターフェースシナリオ

## はじめに

:::note
ReSpeaker USB Mic Array は Windows、Mac、Linux システムおよび andriod と互換性があります。以下のスクリプトは Python2.7 でテストされています。
:::

### ファームウェアの更新

違いを示す表は次のとおりです。

| ファームウェア                        | チャンネル数 | 備考                                                                                          |
|------------------------------------|----------|-----------------------------------------------------------------------------------------------|
| 1_channel_firmware.bin             | 1        | ASR 用に処理されたオーディオ                                                                  |
| 6_channels_firmware.bin            | 6        | チャンネル 0：ASR 用に処理されたオーディオ、チャンネル 1-4：4 つのマイクの生データ、チャンネル 5：再生（工場出荷時ファームウェア） |

**Linux の場合：** Mic array は USB DFU をサポートします。USB 経由でファームウェアを更新するために、python スクリプト dfu.py を開発しました。

```python
sudo apt-get update
sudo pip install pyusb click
git clone https://github.com/respeaker/usb_4_mic_array.git
cd usb_4_mic_array
sudo python dfu.py --download 6_channels_firmware.bin  # The 6 channels version 

# if you want to use 1 channel,then the command should be like:

sudo python dfu.py --download 1_channel_firmware.bin

```

これはファームウェアのダウンロード結果です。
![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/Download_firmware.png)

**Windows/Mac の場合：** Windows/Mac と Linux 仮想マシンを使用してファームウェアを更新することは推奨しません。

### Out of Box デモ

これは 6 チャンネルファームウェアを用いた Acoustic Echo Cancellation の例です。

- ステップ 1. USB ケーブルを PC に接続し、オーディオジャックをスピーカーに接続します。

![](https://files.seeedstudio.com/wiki/ReSpeaker-USB-Mics/img/Bazaar/_DAS5930.jpg)

- ステップ 2. PC 側で出力デバイスとして mic array v2.1 を選択します。
- ステップ 3. audacity を起動して録音を開始します。
- ステップ 4. まず PC 側で音楽を再生し、その後に話します。
- ステップ 5. 下図のような audacity の画面が表示されます。各チャンネルのオーディオを聞くには **Solo** をクリックしてください。

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/Audacity.png)

チャンネル 0 のオーディオ（アルゴリズムで処理済み）：

<audio controls="controls">
  <source type="audio/wav" src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/channel0_asr.wav"></source>
  <source type="audio/ogg" src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/channel0_asr.ogg"></source>
</audio>

チャンネル 1 のオーディオ（Mic1 生データ）：

<audio controls="controls">
  <source type="audio/wav" src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/channel1_raw.wav"></source>
  <source type="audio/ogg" src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/channel1_raw.ogg"></source>
</audio>

チャンネル 5 のオーディオ（再生データ）：

<audio controls="controls">
  <source type="audio/wav" src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/channel5_playback.wav"></source>
  <source type="audio/ogg" src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/channel5_playback.ogg"></source>
</audio>

DOA と AEC に関するビデオはこちらです。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/gGVQ-9f7azs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### DFU と LED 制御ドライバのインストール  

- **Windows：** オーディオの録音と再生はデフォルトで問題なく動作します。Windows 上で LED と DSP パラメータを制御するには、libusb-win32 ドライバのみが必要です。[便利なツール - Zadig](http://zadig.akeo.ie/) を使用して、`SEEED DFU` と `SEEED Control` の両方に libusb-win32 ドライバをインストールします（ReSpeaker Mic Array は Windows デバイスマネージャ上で 2 つのデバイスとして認識されます）。

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/usb_4mic_array_driver.png)

:::caution
    WinUSB や libusbK ではなく、必ず libusb-win32 が選択されていることを確認してください。
:::

- **MAC：** ドライバは不要です。
- **Linux：** ドライバは不要です。

### チューニング

**Linux/Mac/Windows の場合：** 内蔵アルゴリズムのいくつかのパラメータを設定できます。

- すべてのパラメータ一覧を取得します。詳細については FAQ を参照してください。

```
git clone https://github.com/respeaker/usb_4_mic_array.git
cd usb_4_mic_array
python tuning.py -p
```

- 例 1：Automatic Gain Control (AGC) をオフにできます。

```
sudo python tuning.py AGCONOFF 0
```

- 例 2：DOA 角度を確認できます。

```
pi@raspberrypi:~/usb_4_mic_array $ sudo python tuning.py DOAANGLE
DOAANGLE: 180
```

### LED の制御

USB を介して ReSpeaker USB Mic Array の LED を制御できます。USB デバイスには Vendor Specific Class Interface があり、USB Control Transfer を使用してデータを送信できます。[pyusb python library](https://github.com/pyusb/pyusb) を参考にし、[usb_pixel_ring python library](https://github.com/respeaker/pixel_ring/blob/master/pixel_ring/usb_pixel_ring_v2.py) を作成しました。

LED 制御コマンドは pyusb の usb.core.Device.ctrl_transfer() によって送信され、そのパラメータは次のとおりです：

```
ctrl_transfer(usb.util.CTRL_OUT | usb.util.CTRL_TYPE_VENDOR | usb.util.CTRL_RECIPIENT_DEVICE, 0, command, 0x1C, data, TIMEOUT)

```

以下は usb_pixel_ring の API です。

| コマンド | データ                         | API                            | 備考                                                                                                              |
|---------|--------------------------------|--------------------------------|-------------------------------------------------------------------------------------------------------------------|
| 0       | [0]                            | pixel_ring.trace()             | trace モード、LED は VAD* と DOA* に応じて変化                                                                    |
| 1       | [red, green, blue, 0]          | pixel_ring.mono()              | mono モード、すべての RGB LED を単一色に設定、例：Red(0xFF0000)、Green(0x00FF00)，Blue(0x0000FF)                |
| 2       | [0]                            | pixel_ring.listen()            | listen モード、trace モードに似ていますが、LED をオフにしません                                                   |
| 3       | [0]                            | pixel_ring.speak()             | wait モード                                                                                                       |
| 4       | [0]                            | pixel_ring.think()             | speak モード                                                                                                      |
| 5       | [0]                            | pixel_ring.spin()              | spin モード                                                                                                       |
| 6       | [r, g, b, 0] * 12              | pixel_ring.customize()         | custom モード、各 LED を個別の色に設定                                                                           |
| 0x20    | [brightness]                   | pixel_ring.set_brightness()    | 輝度を設定、範囲：0x00~0x1F                                                                                      |
| 0x21    | [r1, g1, b1, 0, r2, g2, b2, 0] | pixel_ring.set_color_palette() | カラーパレットを設定、例：pixel_ring.set_color_palette(0xff0000, 0x00ff00) を pixel_ring.think() と併用          |
| 0x22    | [vad_led]                      | pixel_ring.set_vad_led()       | 中央 LED を設定：0 - オフ、1 - オン、それ以外 - VAD に依存                                                       |
| 0x23    | [volume]                       | pixel_ring.set_volume()        | 音量を表示、範囲：0 ~ 12                                                                                          |
| 0x24    | [pattern]                      | pixel_ring.change_pattern()    | パターンを設定、0 - Google Home パターン、その他 - Echo パターン                                                 |

**Linux の場合：** ここでは LED を制御するための例を示します。以下のコマンドに従ってデモを実行してください。

```python
git clone https://github.com/respeaker/pixel_ring.git
cd pixel_ring
sudo python setup.py install
sudo python examples/usb_mic_array.py
```

これは usb_mic_array.py のコードです。

```python
import time
from pixel_ring import pixel_ring


if __name__ == '__main__':
    while True:

        try:
            pixel_ring.wakeup()
            time.sleep(3)
            pixel_ring.think()
            time.sleep(3)
            pixel_ring.speak()
            time.sleep(6)
            pixel_ring.off()
            time.sleep(3)
        except KeyboardInterrupt:
            break


    pixel_ring.off()
    time.sleep(1)

```

**Windows/Mac の場合：** ここでは LED を制御するための例を示します。

- ステップ 1. pixel_ring をダウンロードします。

```python
git clone https://github.com/respeaker/pixel_ring.git
cd pixel_ring/pixel_ring
```

- ステップ 2. 以下のコードで [led_control.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/led_control.py) を作成し、'python led_control.py' を実行します。

```python
from usb_pixel_ring_v2 import PixelRing
import usb.core
import usb.util
import time

dev = usb.core.find(idVendor=0x2886, idProduct=0x0018)
print dev
if dev:
    pixel_ring = PixelRing(dev)

    while True:
        try:
            pixel_ring.wakeup(180)
            time.sleep(3)
            pixel_ring.listen()
            time.sleep(3)
            pixel_ring.think()
            time.sleep(3)
            pixel_ring.set_volume(8)
            time.sleep(3)
            pixel_ring.off()
            time.sleep(3)
        except KeyboardInterrupt:
            break

    pixel_ring.off()
```

:::note
    もし画面に "None" と表示された場合は、libusb-win32 ドライバを再インストールしてください。
:::

### DOA (Direction of Arrival)

**Windows/Mac/Linux の場合：** ここでは DOA を表示するための例を示します。緑色の LED が音声方向のインジケータです。角度についてはハードウェア概要を参照してください。  

- ステップ 1. usb_4_mic_array をダウンロードします。

```python
git clone https://github.com/respeaker/usb_4_mic_array.git
cd usb_4_mic_array
```

- ステップ 2. usb_4_mic_array フォルダ内に以下のコードで [DOA.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/DOA.py) を作成し、'sudo python DOA.py' を実行します。

```
from tuning import Tuning
import usb.core
import usb.util
import time

dev = usb.core.find(idVendor=0x2886, idProduct=0x0018)

if dev:
    Mic_tuning = Tuning(dev)
    print Mic_tuning.direction
    while True:
        try:
            print Mic_tuning.direction
            time.sleep(1)
        except KeyboardInterrupt:
            break
```

- ステップ 3. 以下のように DOA が表示されます。

```
pi@raspberrypi:~/usb_4_mic_array $ sudo python doa.py 
184
183
175
105
104
104
103
```

### VAD (Voice Activity Detection)

**Windows/Mac/Linux の場合：** ここでは VAD を表示するための例を示します。赤色の LED が VAD のインジケータです。

- ステップ 1. usb_4_mic_array をダウンロードします。

```python
git clone https://github.com/respeaker/usb_4_mic_array.git
cd usb_4_mic_array
```

- ステップ 2. usb_4_mic_array フォルダ内に以下のコードで [VAD.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/VAD.py) を作成し、'sudo python VAD.py' を実行します。

```
from tuning import Tuning
import usb.core
import usb.util
import time

dev = usb.core.find(idVendor=0x2886, idProduct=0x0018)
#print dev
if dev:
    Mic_tuning = Tuning(dev)
    print Mic_tuning.is_voice()
    while True:
        try:
            print Mic_tuning.is_voice()
            time.sleep(1)
        except KeyboardInterrupt:
            break
```

- ステップ 3. 以下のように DOA が表示されます。

```
pi@raspberrypi:~/usb_4_mic_array $ sudo python VAD.py 
0
0
0
1
0
1
0
```

:::note
VAD のしきい値については、GAMMAVAD_SR を使用して設定することもできます。詳細は [Tuning](https://wiki.seeedstudio.com/ja/ReSpeaker_Mic_Array_v2.0/#チューニング) を参照してください。
:::

### 音声の抽出

[PyAudio python library](https://people.csail.mit.edu/hubert/pyaudio/) を使用して、USB 経由で音声を抽出します。

**Linux の場合：**  以下のコマンドを使用して音声を録音または再生できます。

```python
arecord -D plughw:1,0 -f cd test.wav # record, please use the arecord -l to check the card and hardware first
aplay -D plughw:1,0 -f cd test.wav # play, please use the aplay -l to check the card and hardware first
arecord -D plughw:1,0 -f cd |aplay -D plughw:1,0 -f cd # record and play at the same time
```

また、python スクリプトを使用して音声を抽出することもできます。

- ステップ 1. Mic Array のデバイスインデックス番号を取得するために、次のスクリプトを実行する必要があります。

```python
sudo pip install pyaudio
cd ~
nano get_index.py
```

- ステップ 2. 以下のコードをコピーして [get_index.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/get_index.py) に貼り付けます。

```python
import pyaudio

p = pyaudio.PyAudio()
info = p.get_host_api_info_by_index(0)
numdevices = info.get('deviceCount')

for i in range(0, numdevices):
        if (p.get_device_info_by_host_api_device_index(0, i).get('maxInputChannels')) > 0:
            print "Input Device id ", i, " - ", p.get_device_info_by_host_api_device_index(0, i).get('name')
```

- ステップ 3. Ctrl + X を押して終了し、Y を押して保存します。

- ステップ 4. 'sudo python get_index.py' を実行すると、以下のようにデバイス ID が表示されます。

```
Input Device id  2  -  ReSpeaker 4 Mic Array (UAC1.0): USB Audio (hw:1,0)
```

- ステップ 5. `RESPEAKER_INDEX = 2` をインデックス番号に変更します。python スクリプト [record.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/record.py) を実行して音声を録音します。

```python
import pyaudio
import wave

RESPEAKER_RATE = 16000
RESPEAKER_CHANNELS = 6 # change base on firmwares, 1_channel_firmware.bin as 1 or 6_channels_firmware.bin as 6
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

- ステップ 6. 6 チャンネルからチャンネル 0 のデータを抽出したい場合は、以下のコードに従ってください。他のチャンネル X の場合は、[0::6] を [X::6] に変更してください。

```
import pyaudio
import wave
import numpy as np

RESPEAKER_RATE = 16000
RESPEAKER_CHANNELS = 6 # change base on firmwares, 1_channel_firmware.bin as 1 or 6_channels_firmware.bin as 6
RESPEAKER_WIDTH = 2
# run getDeviceInfo.py to get index
RESPEAKER_INDEX = 3  # refer to input device id
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
    # extract channel 0 data from 6 channels, if you want to extract channel 1, please change to [1::6]
    a = np.fromstring(data,dtype=np.int16)[0::6]
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

**Windows の場合：**

- ステップ 1. 以下のコマンドを実行して pyaudio をインストールします。

```
 pip install pyaudio
```

- ステップ 2. [get_index.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/get_index.py) を使用してデバイスインデックスを取得します。

```
C:\Users\XXX\Desktop>python get_index.py
Input Device id  0  -  Microsoft Sound Mapper - Input
Input Device id  1  -  ReSpeaker 4 Mic Array (UAC1.0)
Input Device id  2  -  Internal Microphone (Conexant I)
```

- ステップ 3. [record.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/record.py) のデバイスインデックスとチャンネルを変更し、その後音声を抽出します。

```
C:\Users\XXX\Desktop>python record.py
* recording
* done recording
```

:::caution
    "Error: %1 is not a valid Win32 application." と表示された場合は、Python の Win32 バージョンをインストールしてください。
:::

**MAC の場合：**

- ステップ 1. 以下のコマンドを実行して pyaudio をインストールします。

```
 pip install pyaudio
```

- ステップ 2. [get_index.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/get_index.py) を使用してデバイスインデックスを取得します。

```
MacBook-Air:Desktop XXX$ python get_index.py 
Input Device id  0  -  Built-in Microphone
Input Device id  2  -  ReSpeaker 4 Mic Array (UAC1.0)
```

- ステップ 3. [record.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/record.py) のデバイスインデックスとチャンネルを変更し、その後音声を抽出します。

```
MacBook-Air:Desktop XXX$ python record.py 
2018-03-24 14:53:02.400 Python[2360:16629] 14:53:02.399 WARNING:  140: This application, or a library it uses, is using the deprecated Carbon Component Manager for hosting Audio Units. Support for this will be removed in a future release. Also, this makes the host incompatible with version 3 audio units. Please transition to the API's in AudioComponent.h.
* recording
* done recording
```

### リアルタイム音源定位およびトラッキング

[ODAS](https://github.com/introlab/odas) は Open embeddeD Audition System の略です。これは、音源の定位、トラッキング、分離、およびポストフィルタリングを実行するためのライブラリです。これを使って楽しんでみましょう。

**Linux の場合：**

- ステップ 1. ODAS を取得してビルドします。

```
sudo apt-get install libfftw3-dev libconfig-dev libasound2-dev libgconf-2-4
git clone https://github.com/introlab/odas.git
mkdir odas/build
cd odas/build
cmake ..
make
```

- ステップ 2. [ODAS Studio](https://github.com/introlab/odas_web/releases) を入手して開きます。

- ステップ 3. odascore は **odas/bin/odaslive** にあり、**config file** は [odas.cfg](https://raw.githubusercontent.com/respeaker/usb_4_mic_array/master/odas.cfg) です。

- ステップ 4. 4 チャンネルの生オーディオデータを含む 6_channels_firmware.bin で mic array をアップグレードします。

<div class="video-container">
<iframe width="800" height="500" src="https://www.youtube.com/embed/K5gZabfaaPI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## FAQ

**Q1: 内蔵アルゴリズムのパラメータ**

```
pi@raspberrypi:~/usb_4_mic_array $ python tuning.py -p
name   type max min r/w info
-------------------------------
AECFREEZEONOFF   int 1 0 rw Adaptive Echo Canceler updates inhibit.
                                                            0 = Adaptation enabled
                                                            1 = Freeze adaptation, filter only
AECNORM          float 16 0.25 rw Limit on norm of AEC filter coefficients
AECPATHCHANGE    int 1 0 ro AEC Path Change Detection.
                                                            0 = false (no path change detected)
                                                            1 = true (path change detected)
AECSILENCELEVEL  float 1 1e-09 rw Threshold for signal detection in AEC [-inf .. 0] dBov (Default: -80dBov = 10log10(1x10-8))
AECSILENCEMODE   int 1 0 ro AEC far-end silence detection status. 
                                                            0 = false (signal detected) 
                                                            1 = true (silence detected)
AGCDESIREDLEVEL  float 0.99 1e-08 rw Target power level of the output signal. 
                                                            [−inf .. 0] dBov (default: −23dBov = 10log10(0.005))
AGCGAIN          float 1000 1 rw Current AGC gain factor. 
                                                            [0 .. 60] dB (default: 0.0dB = 20log10(1.0))
AGCMAXGAIN       float 1000 1 rw Maximum AGC gain factor. 
                                                            [0 .. 60] dB (default 30dB = 20log10(31.6))
AGCONOFF         int 1 0 rw Automatic Gain Control. 
                                                            0 = OFF 
                                                            1 = ON
AGCTIME          float 1 0.1 rw Ramps-up / down time-constant in seconds.
CNIONOFF         int 1 0 rw Comfort Noise Insertion.
                                                            0 = OFF
                                                            1 = ON
DOAANGLE         int 359 0 ro DOA angle. Current value. Orientation depends on build configuration.
ECHOONOFF        int 1 0 rw Echo suppression.
                                                            0 = OFF
                                                            1 = ON
FREEZEONOFF      int 1 0 rw Adaptive beamformer updates.
                                                            0 = Adaptation enabled
                                                            1 = Freeze adaptation, filter only
FSBPATHCHANGE    int 1 0 ro FSB Path Change Detection.
                                                            0 = false (no path change detected)
                                                            1 = true (path change detected)
FSBUPDATED       int 1 0 ro FSB Update Decision.
                                                            0 = false (FSB was not updated)
                                                            1 = true (FSB was updated)
GAMMAVAD_SR      float 1000 0 rw Set the threshold for voice activity detection.
                                                            [−inf .. 60] dB (default: 3.5dB 20log10(1.5))
GAMMA_E          float 3 0 rw Over-subtraction factor of echo (direct and early components). min .. max attenuation
GAMMA_ENL        float 5 0 rw Over-subtraction factor of non-linear echo. min .. max attenuation
GAMMA_ETAIL      float 3 0 rw Over-subtraction factor of echo (tail components). min .. max attenuation
GAMMA_NN         float 3 0 rw Over-subtraction factor of non- stationary noise. min .. max attenuation
GAMMA_NN_SR      float 3 0 rw Over-subtraction factor of non-stationary noise for ASR. 
                                                            [0.0 .. 3.0] (default: 1.1)
GAMMA_NS         float 3 0 rw Over-subtraction factor of stationary noise. min .. max attenuation
GAMMA_NS_SR      float 3 0 rw Over-subtraction factor of stationary noise for ASR. 
                                                            [0.0 .. 3.0] (default: 1.0)
HPFONOFF         int 3 0 rw High-pass Filter on microphone signals.
                                                            0 = OFF
                                                            1 = ON - 70 Hz cut-off
                                                            2 = ON - 125 Hz cut-off
                                                            3 = ON - 180 Hz cut-off
MIN_NN           float 1 0 rw Gain-floor for non-stationary noise suppression.
                                                            [−inf .. 0] dB (default: −10dB = 20log10(0.3))
MIN_NN_SR        float 1 0 rw Gain-floor for non-stationary noise suppression for ASR.
                                                            [−inf .. 0] dB (default: −10dB = 20log10(0.3))
MIN_NS           float 1 0 rw Gain-floor for stationary noise suppression.
                                                            [−inf .. 0] dB (default: −16dB = 20log10(0.15))
MIN_NS_SR        float 1 0 rw Gain-floor for stationary noise suppression for ASR.
                                                            [−inf .. 0] dB (default: −16dB = 20log10(0.15))
NLAEC_MODE       int 2 0 rw Non-Linear AEC training mode.
                                                            0 = OFF
                                                            1 = ON - phase 1
                                                            2 = ON - phase 2
NLATTENONOFF     int 1 0 rw Non-Linear echo attenuation.
                                                            0 = OFF
                                                            1 = ON
NONSTATNOISEONOFF int 1 0 rw Non-stationary noise suppression.
                                                            0 = OFF
                                                            1 = ON
NONSTATNOISEONOFF_SR int 1 0 rw Non-stationary noise suppression for ASR.
                                                            0 = OFF
                                                            1 = ON
RT60             float 0.9 0.25 ro Current RT60 estimate in seconds
RT60ONOFF        int 1 0 rw RT60 Estimation for AES. 0 = OFF 1 = ON
SPEECHDETECTED   int 1 0 ro Speech detection status.
                                                            0 = false (no speech detected)
                                                            1 = true (speech detected)
STATNOISEONOFF   int 1 0 rw Stationary noise suppression.
                                                            0 = OFF
                                                            1 = ON
STATNOISEONOFF_SR int 1 0 rw Stationary noise suppression for ASR.
                                                            0 = OFF
                                                            1 = ON
TRANSIENTONOFF   int 1 0 rw Transient echo suppression.
                                                            0 = OFF
                                                            1 = ON
VOICEACTIVITY    int 1 0 ro VAD voice activity status.
                                                            0 = false (no voice activity)
                                                            1 = true (voice activity)
```

**Q2: ImportError: No module named usb.core**

A2: `sudo pip install pyusb` を実行して pyusb をインストールします。

```
pi@raspberrypi:~/usb_4_mic_array $ sudo python tuning.py DOAANGLE
Traceback (most recent call last):
  File "tuning.py", line 5, in <module>
    import usb.core
ImportError: No module named usb.core
pi@raspberrypi:~/usb_4_mic_array $ sudo pip install pyusb
Collecting pyusb
  Downloading pyusb-1.0.2.tar.gz (54kB)
    100% |████████████████████████████████| 61kB 101kB/s 
Building wheels for collected packages: pyusb
  Running setup.py bdist_wheel for pyusb ... done
  Stored in directory: /root/.cache/pip/wheels/8b/7f/fe/baf08bc0dac02ba17f3c9120f5dd1cf74aec4c54463bc85cf9
Successfully built pyusb
Installing collected packages: pyusb
Successfully installed pyusb-1.0.2
pi@raspberrypi:~/usb_4_mic_array $ sudo python tuning.py DOAANGLE
DOAANGLE: 180
```

**Q3: Raspberry alexa アプリケーションのサンプルはありますか？**

A3: はい、mic array v2.0 を Raspberry の USB ポートに接続し、[Raspberry Pi Quick Start Guide with Script](https://github.com/alexa/avs-device-sdk/wiki/Raspberry-Pi-Quick-Start-Guide-with-Script) に従って alexa との音声対話を行うことができます。

**Q4: Mic array v2.1 を ROS システムで使うサンプルはありますか？**

A4: はい、[ReSpeaker USB Mic Array with ROS (Robot Operating System) Middleware](https://github.com/furushchev/respeaker_ros) を統合するためのパッケージを共有してくれた Yuki に感謝します。

**Q5: 3.5mm オーディオポートを有効にして、USB ポートと同時に信号を受信するにはどうすればよいですか？**

A5: [new firmware](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/i2s_i1o2.bin) をダウンロードし、[How to update firmware](https://wiki.seeedstudio.com/ja/ReSpeaker_Mic_Array_v2.0/#update-firmware) に従って XMOS を書き込みしてください。

**Q6: "sudo pip install pyaudio" を実行するときに #include "portaudio.h" エラーが出ます。**

A6: 以下のコマンドを実行して問題を解決してください。

```
sudo apt-get install portaudio19-dev
```

## リソース

- **[PDF]** [ReSpeaker USB Mic Array 寸法](https://files.seeedstudio.com/wiki/ReSpeaker-USB-Mics/res/dimension.pdf)
- **[DWG]** [ReSpeaker USB Mic Array ケース 3D モデル](https://files.seeedstudio.com/wiki/ReSpeaker-USB-Mics/res/case.dwg)
- **[PDF]** [XVF3000 製品概要](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/XVF3000-3100-product-brief_1.4.pdf)
- **[PDF]** [XVF3000 データシート](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/XVF3000-3100-TQ128-Datasheet_1.0.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
