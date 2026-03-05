---
description: ReSpeaker Mic Array v2.0
title: reSpeaker USB 4-Mic Array XVF3000 v2.0
keywords:
  - reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ReSpeaker_Mic_Array_v2.0
sku: 107990053
last_update:
  date: 1/12/2023
  author: jianjing Huang
createdAt: '2025-05-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/ja/ReSpeaker_Mic_Array_v2.0/
---


![](https://files.seeedstudio.com/products/107990053/01.png)

私たちは、**reSpeaker XVF3800** を正式にご紹介できることを嬉しく思います。これは reSpeaker XVF 3000 の包括的なアップグレード版です。4 マイクアレイ構成、ユニバーサル互換性（Windows / macOS / Linux）、デュアルファームウェア（I2S / USB）によるプラグアンドプレイの利便性といった前世代の基盤の上に構築されており、XVF3800 は **オーディオ忠実度とアルゴリズム性能** の両面で大きな飛躍を実現しています。

**主なアップグレードのハイライト**
- **AI 駆動オーディオアルゴリズム**：AEC（Acoustic Echo Cancellation）、AGC（Automatic Gain Control）、DoA（Direction of Arrival）検出、ビームフォーミング、VAD（Voice Activity Detection）、ノイズ抑制、残響除去を備えた統合スイートにより、高度な音声アプリケーションのための堅牢な基盤を提供します。  
- **360° 遠距離音声キャプチャ**：半径 5 メートル以内の音声を高精度にピックアップし、会議システム、インテリジェントインタラクション、音声制御シナリオに容易に対応します。  
- **デュアル動作モード**：多様な開発および展開要件を満たすため、柔軟な USB/I2S ファームウェア切り替えに対応します。
- **製品詳細と仕様**： [ReSpeaker XVF3800 4-Mic Array Store Page](https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html)
- **クイックスタート & Wiki ガイド**： [reSpeaker XVF3800 Getting Started Guide | Seeed Studio Wiki](https://wiki.seeedstudio.com/ja/respeaker_xvf3800_introduction/)

ReSpeaker Mic Array v2.0 は、オリジナルの [ReSpeaker Mic Array v1.0](https://www.seeedstudio.com/ReSpeaker-Mic-Array-Far-field-w%2F-7-PDM-Microphones--p-2719.html) のアップグレード版です。このアップグレード版は XMOS の XVF-3000 をベースとしており、以前使用されていた XVSM-2000 よりも大幅に高性能なチップセットです。この新しいチップセットには、多くの音声認識アルゴリズムが組み込まれており、性能向上に寄与します。このアレイは、オリジナルの ReSpeaker Core の上にそのまま積み重ねて（接続して）使用でき、音声インタラクション性能を大幅に向上させます。また、このバージョンではマイクも改良されており、わずか 4 つのマイクでありながら、初代マイクアレイを大きく上回る性能を実現しています。

ReSpeaker Mic Array v2.0 は USB Audio Class 1.0（UAC 1.0）を直接サポートします。Windows、macOS、Linux を含む主要なオペレーティングシステムはすべて UAC 1.0 に対応しており、ReSpeaker Core を使用せずともサウンドカードとして動作させることができます。その一方で、これらのシステム上でも DoA、BF、AEC などの音声アルゴリズムを利用できます。

ReSpeaker Mic Array v2.0 は、既存製品や今後の製品に音声インターフェースを追加したいと考えている方にとって、優れたソリューションです。また、より高度な音声インターフェース評価への入り口としても有用です。このボードは、要望に応じてある程度のカスタマイズにも対応可能です。

ReSpeaker Mic Array v2.0 には 2 種類のファームウェアが用意されており、1 つは音声アルゴリズムを含むもの、もう 1 つは生の音声データ用のものです。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2.0-p-3053.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

<p style={{textAlign: 'center'}}><a href="https://www.amazon.com/dp/B07D29L3Q1" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/amaon.png"  width="300" height="48"  border="0"/></a></p>

## バージョン

| 製品バージョン               | 変更点                                                                  | リリース日      |
|--------------------------|--------------------------------------------------------------------------|---------------|
| ReSpeaker Mic Array v1.0 | 初回リリース                                                             | 2016 年 8 月 15 日 |
| ReSpeaker Mic Array v2.0 | XVSM-2000 が EOL のため、MCU を XVF-3000 に変更し、マイク数を 7 から 4 に削減。 | 2018 年 1 月 25 日 |

## 特長

- 遠距離音声キャプチャ
- USB Audio Class 1.0（UAC 1.0）対応
- 4 マイクアレイ
- 12 個のプログラマブル RGB LED インジケータ
- 音声アルゴリズムと機能
  - Voice Activity Detection（音声活動検出）
  - Direction of Arrival（到来方向検出）
  - ビームフォーミング
  - ノイズ抑制
  - 残響除去
  - Acoustic Echo Cancellation（音響エコーキャンセル）

## 仕様

- XMOS 製 XVF-3000
- 高性能デジタルマイク 4 個
- 遠距離音声キャプチャ対応
- 音声アルゴリズムをオンチップ実装
- 12 個のプログラマブル RGB LED インジケータ  
- マイク：ST MP34DT01TR-M  
- 感度：-26 dBFS（無指向性）  
- 音響過負荷点：120 dBSPL  
- SNR：61 dB  
- 電源：Micro USB または拡張ヘッダからの 5V DC  
- 寸法：直径 70 mm  
- 3.5mm オーディオジャック出力ソケット
- 消費電力：5V、LED オン時 180mA、LED オフ時 170mA
- 最大サンプリングレート：16kHz

## ハードウェア概要

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/Hardware%20Overview.png)

- **<font face="" size="3" font color="ff0000">①</font> XMOS XVF-3000：**
Acoustic Echo Cancellation（AEC）、ビームフォーミング、残響除去、ノイズ抑制、ゲイン制御などの高度な DSP アルゴリズムを統合しています。

- **<font face="" size="3" font color="ff0000">②</font> デジタルマイク：**
MP34DT01-M は、容量検知素子と IC インターフェースを備えた、超小型・低消費電力・無指向性のデジタル MEMS マイクです。

- **<font face="" size="3" font color="ff0000">③</font> RGB LED：**
3 色 RGB LED。

- **<font face="" size="3" font color="ff0000">④</font> USB ポート：**
マイクアレイへの電源供給と制御を行います。

- **<font face="" size="3" font color="ff0000">⑤</font> 3.5mm ヘッドホンジャック：**
オーディオを出力します。このポートにアクティブスピーカーまたはヘッドホンを接続できます。

- **<font face="" size="3" font color="ff0000">⑥</font> WM8960：**
WM8960 は低消費電力のステレオコーデックで、Class D スピーカードライバを備え、8 Ω 負荷に対して 1 チャンネルあたり 1 W を出力できます。

**システムブロック図**
![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/system_diag.png)

**ピンマップ**
![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/Pin_Map.png)

**寸法**
![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/Dimension.png)

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/Dimension1.png)

<iframe src="https://3dwarehouse.sketchup.com/embed.html?mid=759d56d7-c97c-4aa7-ad96-3ca1e0d5a13e" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="800" height="450" allowfullscreen></iframe>

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
ReSpeaker Mic Array v2.0 は Windows、Mac、Linux システムおよび andriod に対応しています。以下のスクリプトは Python2.7 でテストされています。
:::

andriod については、Raspberry 上で [emteria.OS](https://help.emteria.com/kb/emteria-os-installation)（andriod 7.1）を用いてテストしました。Raspberry Pi の USB ポートに mic array v2.0 を接続し、オーディオデバイスとして ReSpeaker mic array v2.0 を選択します。以下は音声録音画面です。

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/andriod7.1_record.png)

以下は音声再生画面です。ReSpeaker mic array v2.0 の 3.5mm オーディオジャックにスピーカーを接続し、録音した音声を再生して聞きます。

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/andriod7.1_play.png)

### ファームウェアの更新

ファームウェアは 2 種類あります。1 つは 1 チャンネルデータを含むもの、もう 1 つは 6 チャンネルデータを含むもの（工場出荷時ファームウェア）です。違いは次の表のとおりです。

| ファームウェア                | チャンネル数 | 備考                                                                                                                                                                    |
|----------------------|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1_channel_firmware.bin  | 1              | ASR 用に処理されたオーディオ |
| 6_channels_firmware.bin | 6  |Channel 0: processed audio for ASR <br /> Channel 1: mic1 raw data <br />Channel 2: mic2 raw data <br />Channel 3: mic3 raw data <br />Channel 4: mic4 raw data <br />Channel 5: merged playback|

**Linux の場合：** Mic array は USB DFU をサポートしています。USB 経由でファームウェアを更新するために、python スクリプト `dfu.py` を用意しています。

```python
sudo apt-get update
sudo pip install pyusb click
git clone https://github.com/respeaker/usb_4_mic_array.git
cd usb_4_mic_array
sudo python dfu.py --download 6_channels_firmware.bin  # The 6 channels version 

# if you want to use 1 channel,then the command should be like:

sudo python dfu.py --download 1_channel_firmware.bin

```

以下はファームウェアダウンロード結果です。
![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/Download_firmware.png)

**Windows/Mac の場合：** Windows/Mac と Linux の仮想マシンを使用してファームウェアを更新することは推奨しません。

### Out of Box デモ

以下は 6 チャンネルファームウェアを用いた Acoustic Echo Cancellation の例です。

- ステップ 1. USB ケーブルを PC に接続し、オーディオジャックをスピーカーに接続します。

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/playback.jpg)

- ステップ 2. PC 側で出力デバイスとして mic array v2.0 を選択します。
- ステップ 3. Audacity を起動して録音を開始します。
- ステップ 4. まず PC 側で音楽を再生し、その後に話します。
- ステップ 5. 下図のような Audacity 画面が表示されます。各チャンネルの音声を聞くには **Solo** をクリックしてください。

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/Audacity.png)

Channel0 Audio（アルゴリズムで処理された音声）：

<audio controls="controls">
  <source type="audio/wav" src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/channel0_asr.wav" />
  <source type="audio/ogg" src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/channel0_asr.ogg" />
</audio>

Channel1 Audio（Mic1 生データ）：

<audio controls="controls">
  <source type="audio/wav" src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/channel1_raw.wav" />
  <source type="audio/ogg" src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/channel1_raw.ogg" />
</audio>

Channel5 Audio(Playback data):

<audio controls="controls">
  <source type="audio/wav" src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/channel5_playback.wav" />
  <source type="audio/ogg" src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/channel5_playback.ogg" />
</audio>

ここでは DOA と AEC についてのビデオを紹介します。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/XivM-6PRgX8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

### DFU と LED 制御ドライバのインストール  

- **Windows:** オーディオの録音と再生はデフォルトで問題なく動作します。Windows 上で LED と DSP パラメータを制御するには、libusb-win32 ドライバのみが必要です。[便利なツール - Zadig](http://zadig.akeo.ie/) を使用して、`SEEED DFU` と `SEEED Control` の両方に対して libusb-win32 ドライバをインストールします（ReSpeaker Mic Array は Windows デバイスマネージャ上で 2 つのデバイスとして認識されます）。

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/usb_4mic_array_driver.png)

:::caution
    libusb-win32 が選択されていることを確認してください。WinUSB や libusbK を選択しないでください。
:::

- **MAC:** ドライバは不要です。
- **Linux:** ドライバは不要です。

### チューニング

**Linux/Mac/Windows 向け:** 組み込みアルゴリズムのいくつかのパラメータを設定できます。

- すべてのパラメータ一覧を取得します。詳細については FAQ を参照してください。

```
git clone https://github.com/respeaker/usb_4_mic_array.git
cd usb_4_mic_array
python tuning.py -p
```

- 例 #1 として、自動利得制御（AGC）をオフにできます：

```
python tuning.py AGCONOFF 0
```

- 例 #2 として、DOA 角度を確認できます。

```
pi@raspberrypi:~/usb_4_mic_array $ sudo python tuning.py DOAANGLE
DOAANGLE: 180
```

### LED を制御する

USB を介して ReSpeaker Mic Array V2 の LED を制御できます。USB デバイスには Vendor Specific Class Interface があり、USB Control Transfer を通じてデータを送信するために使用できます。[pyusb python library](https://github.com/pyusb/pyusb) を参考にして、[usb_pixel_ring python library](https://github.com/respeaker/pixel_ring/blob/master/pixel_ring/usb_pixel_ring_v2.py) を作成しました。

LED 制御コマンドは pyusb の usb.core.Device.ctrl_transfer() によって送信され、そのパラメータは以下のとおりです：

```
ctrl_transfer(usb.util.CTRL_OUT | usb.util.CTRL_TYPE_VENDOR | usb.util.CTRL_RECIPIENT_DEVICE, 0, command, 0x1C, data, TIMEOUT)

```

以下は usb_pixel_ring の API です。

| Command | Data                           | API                            | Note                                                                                                              |
|---------|--------------------------------|--------------------------------|-------------------------------------------------------------------------------------------------------------------|
| 0       | [0]                            | pixel_ring.trace()             | トレースモード、LED の変化は VAD* と DOA* に依存します                                                              |
| 1       | [red, green, blue, 0]          | pixel_ring.mono()              | モノモード、すべての RGB LED を単一の色に設定します。例：Red(0xFF0000)、Green(0x00FF00)、Blue(0x0000FF)          |
| 2       | [0]                            | pixel_ring.listen()            | リッスンモード、トレースモードに似ていますが、LED を消灯しません                                                   |
| 3       | [0]                            | pixel_ring.speak()             | ウェイトモード                                                                                                     |
| 4       | [0]                            | pixel_ring.think()             | スピークモード                                                                                                     |
| 5       | [0]                            | pixel_ring.spin()              | スピンモード                                                                                                       |
| 6       | [r, g, b, 0] * 12              | pixel_ring.custimize()         | カスタムモード、各 LED をそれぞれの色に設定します                                                                  |
| 0x20    | [brightness]                   | pixel_ring.set_brightness()    | 輝度を設定、範囲：0x00~0x1F                                                                                       |
| 0x21    | [r1, g1, b1, 0, r2, g2, b2, 0] | pixel_ring.set_color_palette() | カラーパレットを設定。例：pixel_ring.set_color_palette(0xff0000, 0x00ff00) を pixel_ring.think() と併用           |
| 0x22    | [vad_led]                      | pixel_ring.set_vad_led()       | 中央 LED を設定：0 - off、1 - on、それ以外 - VAD に依存                                                            |
| 0x23    | [volume]                       | pixel_ring.set_volume()        | 音量を表示、範囲：0 ~ 12                                                                                          |
| 0x24    | [pattern]                      | pixel_ring.change_pattern()    | パターンを設定、0 - Google Home パターン、その他 - Echo パターン                                                  |

**Linux 向け:** ここでは LED を制御する例を示します。以下のコマンドに従ってデモを実行してください。

```python
git clone https://github.com/respeaker/pixel_ring.git
cd pixel_ring
sudo python setup.py install
sudo python examples/usb_mic_array.py
```

usb_mic_array.py のコードは以下のとおりです。

```python
import time
from pixel_ring import pixel_ring


if __name__ == '__main__':
    pixel_ring.change_pattern('echo')
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

**Windows/Mac 向け:** ここでは LED を制御する例を示します。

- ステップ 1. pixel_ring をダウンロードします。

```python
git clone https://github.com/respeaker/pixel_ring.git
cd pixel_ring/pixel_ring
```

- ステップ 2. 以下のコードで [led_control.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/led_control.py) を作成し、'python led_control.py' を実行します

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
画面に "None" が表示される場合は、libusb-win32 ドライバを再インストールしてください。
:::

### DOA (Direction of Arrival)

**Windows/Mac/Linux 向け:** ここでは DOA を表示する例を示します。緑色の LED が音声方向のインジケータです。角度についてはハードウェア概要を参照してください。  

- ステップ 1. usb_4_mic_array をダウンロードします。

```python
git clone https://github.com/respeaker/usb_4_mic_array.git
cd usb_4_mic_array
```

- ステップ 2. usb_4_mic_array フォルダ内に以下のコードで [DOA.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/DOA.py) を作成し、'python DOA.py' を実行します

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

**Windows/Mac/Linux 向け:** ここでは VAD を表示する例を示します。赤色の LED が VAD のインジケータです。

- ステップ 1. usb_4_mic_array をダウンロードします。

```python
git clone https://github.com/respeaker/usb_4_mic_array.git
cd usb_4_mic_array
```

- ステップ 2. usb_4_mic_array フォルダ内に以下のコードで [VAD.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/VAD.py) を作成し、'python VAD.py' を実行します

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

USB を介して音声を抽出するために、[PyAudio python library](https://people.csail.mit.edu/hubert/pyaudio/) を使用します。

**Linux 向け:**  以下のコマンドを使用して音声を録音または再生できます。

```python
arecord -D plughw:1,0 -f cd test.wav # record, please use the arecord -l to check the card and hardware first
aplay -D plughw:1,0 -f cd test.wav # play, please use the aplay -l to check the card and hardware first
arecord -D plughw:1,0 -f cd |aplay -D plughw:1,0 -f cd # record and play at the same time
```

また、python スクリプトを使用して音声を抽出することもできます。

- ステップ 1, Mic Array のデバイスインデックス番号を取得するために、次のスクリプトを実行する必要があります：

```python
sudo pip install pyaudio
cd ~
nano get_index.py
```

- ステップ 2、以下のコードをコピーして、[get_index.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/get_index.py) に貼り付けます。

```python
import pyaudio

p = pyaudio.PyAudio()
info = p.get_host_api_info_by_index(0)
numdevices = info.get('deviceCount')

for i in range(0, numdevices):
        if (p.get_device_info_by_host_api_device_index(0, i).get('maxInputChannels')) > 0:
            print "Input Device id ", i, " - ", p.get_device_info_by_host_api_device_index(0, i).get('name')
```

- ステップ 3、`Ctrl` + `X` を押して終了し、Y を押して保存します。

- ステップ 4、'sudo python get_index.py' を実行すると、以下のようにデバイス ID が表示されます。

```
Input Device id  2  -  ReSpeaker 4 Mic Array (UAC1.0): USB Audio (hw:1,0)
```

- ステップ 5、`RESPEAKER_INDEX = 2` をインデックス番号に変更します。Python スクリプト [record.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/record.py) を実行して音声を録音します。

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

- ステップ 6、6 チャンネルからチャンネル 0 のデータを抽出したい場合は、以下のコードに従ってください。その他のチャンネル X の場合は、[0::6] を [X::6] に変更してください。

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

- ステップ 1、以下のコマンドを実行して pyaudio をインストールします。

```
 pip install pyaudio
```

- ステップ 2、[get_index.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/get_index.py) を使用してデバイスインデックスを取得します。

```
C:\Users\XXX\Desktop>python get_index.py
Input Device id  0  -  Microsoft Sound Mapper - Input
Input Device id  1  -  ReSpeaker 4 Mic Array (UAC1.0)
Input Device id  2  -  Internal Microphone (Conexant I)
```

- ステップ 3、[record.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/record.py) のデバイスインデックスとチャンネルを変更し、その後音声を抽出します。

```
C:\Users\XXX\Desktop>python record.py
* recording
* done recording
```

:::caution
"Error: %1 is not a valid Win32 application." と表示される場合は、Python の Win32 バージョンをインストールしてください。
:::

**MAC の場合：**

- ステップ 1、以下のコマンドを実行して pyaudio をインストールします。

```
 pip install pyaudio
```

- ステップ 2、[get_index.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/get_index.py) を使用してデバイスインデックスを取得します。

```
MacBook-Air:Desktop XXX$ python get_index.py 
Input Device id  0  -  Built-in Microphone
Input Device id  2  -  ReSpeaker 4 Mic Array (UAC1.0)
```

- ステップ 3、[record.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/record.py) のデバイスインデックスとチャンネルを変更し、その後音声を抽出します。

```
MacBook-Air:Desktop XXX$ python record.py 
2018-03-24 14:53:02.400 Python[2360:16629] 14:53:02.399 WARNING:  140: This application, or a library it uses, is using the deprecated Carbon Component Manager for hosting Audio Units. Support for this will be removed in a future release. Also, this makes the host incompatible with version 3 audio units. Please transition to the API's in AudioComponent.h.
* recording
* done recording
```

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

A2: `sudo pip install pyusb` を実行して、pyusb をインストールしてください。

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

**Q4: ROS システムでの Mic array v2.0 のサンプルはありますか？**

A4: はい、[ReSpeaker Mic Array v2 with ROS (Robot Operating System) Middleware](https://github.com/furushchev/respeaker_ros) を統合するためのパッケージを共有してくれた Yuki に感謝します。

**Q5: 3.5mm オーディオポートを、USB ポートと同様に信号を受信できるように有効化するにはどうすればよいですか？**

A5: [new firmware](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/i2s_i1o2.bin) をダウンロードし、[How to update firmware](https://wiki.seeedstudio.com/ja/ReSpeaker_Mic_Array_v2.0/#ファームウェアを更新する) に従って XMOS を書き込んでください。

## リソース

- **[PDF]** [ReSpeaker MicArray v2.0 回路図](https://files.seeedstudio.com/products/107990053/ReSpeakerMicArrayv2.0.1Schematic.zip)
- **[PDF]** [ReSpeaker MicArray v2.0 製品概要](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/ReSpeaker%20MicArray%20v2.0%20Product%20Brief.pdf)
- **[PDF]** [ReSpeaker MicArray v2.0 3D モデル](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/RESPEAKER%20MIC%20v2.0.pdf)
- **[SKP]** [ReSpeaker MicArray v2.0 3D モデル](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/Respeaker%20Microphone%20Array%20v2.0_20180316.skp.zip)
- **[STP]** [ReSpeaker MicArray v2.0 3D モデル](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/RESPEAKER%20MIC-3D%20v2.0.stp.zip)
- **[PDF]** [XVF3000 製品概要](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/XVF3000-3100-product-brief_1.4.pdf)
- **[PDF]** [XVF3000 データシート](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/XVF3000-3100-TQ128-Datasheet_1.0.pdf)
- **[Github]** [ReSpeaker Mic Array v2 を ROS (Robot Operating System) ミドルウェアと統合](https://github.com/furushchev/respeaker_ros)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
