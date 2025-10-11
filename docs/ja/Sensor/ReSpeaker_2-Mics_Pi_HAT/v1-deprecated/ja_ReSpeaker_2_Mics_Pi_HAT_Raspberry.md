---
description: Raspberry Pi の使い方
title: Raspberry Pi の使い方
keywords:
- ReSpeaker_2-Mics_Pi_HAT
image: https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/social-image.webp
slug: /ja/ReSpeaker_2_Mics_Pi_HAT_Raspberry
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


:::caution
この Wiki は ReSpeaker 2-Mics Pi HAT **v1** 用に書かれています。v1 と v2 のデバイスを区別するには、[ReSpeaker 2-Mics Pi HAT ハードウェアリビジョンの区別方法](/ja/how-to-distinguish-respeaker_2-mics_pi_hat-hardware-revisions)を参照してください。
:::

### ドライバーのインストールと設定

**1. ReSpeaker 2-Mics Pi HAT を Raspberry Pi に接続する**

ReSpeaker 2-Mics Pi HAT を Raspberry Pi に取り付けます。ReSpeaker 2-Mics Pi HAT を積み重ねる際にピンが正しく整列していることを確認してください。

Raspberry Pi の接続

![connection picture1](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/pi.png)

Raspberry Pi Zero の接続

![connection picture2](https://files.seeedstudio.com/products/107100001/01.png)

**2. Raspberry Pi にドライバーをセットアップする**

Raspberry Pi に[最新の Raspberry Pi OS](https://www.raspberrypi.org/downloads/raspbian/)を実行していることを確認してください。 *(2021.05.01 更新)*

- ステップ 1. Seeed voice card のソースコードを取得し、インストールして再起動します。

```bash
git clone https://github.com/HinTak/seeed-voicecard.git
cd seeed-voicecard
sudo ./install.sh
sudo reboot now
```

<!--
:::note
もし Raspberry Pi の Linux カーネルバージョンが [rpi-6.6.y](https://github.com/raspberrypi/linux/tree/rpi-6.6.y)（例: Raspberry Pi 5）の場合、simple_card_utils.h の変更によりビルドエラーが発生する可能性があります。[simple_card_utils.h](https://github.com/raspberrypi/linux/blob/rpi-6.6.y/include/sound/simple_card_utils.h) を修正するには、以下の変更を seeed-voicecard.c に加えてください。

- ファイル seeed-voicecard/seeed-voicecard.c を開く
- "simple_util_" プレフィックスをすべて "asoc_simple_" に置き換える
- "rtd->id" をすべて "rtd->num" に置き換える
- 保存して終了
- 再度インストールして再起動

```bash
sudo ./install.sh
sudo reboot now
```
:::
-->

- ステップ 2. ```aplay -l``` と ```arecord -l``` コマンドを使用して、サウンドカード名が seeed-voicecard ソースコードと一致していることを確認します。

```shell
pi@raspberrypi:~/Desktop/mic_hat $ aplay -l
**** List of PLAYBACK Hardware Devices ****
card 0: Headphones [bcm2835 Headphones], device 0: bcm2835 Headphones [bcm2835 Headphones]
  Subdevices: 8/8
  Subdevice #0: subdevice #0
  Subdevice #1: subdevice #1
  Subdevice #2: subdevice #2
  Subdevice #3: subdevice #3
  Subdevice #4: subdevice #4
  Subdevice #5: subdevice #5
  Subdevice #6: subdevice #6
  Subdevice #7: subdevice #7
card 1: vc4hdmi0 [vc4-hdmi-0], device 0: MAI PCM i2s-hifi-0 [MAI PCM i2s-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 2: vc4hdmi1 [vc4-hdmi-1], device 0: MAI PCM i2s-hifi-0 [MAI PCM i2s-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 3: seeed2micvoicec [seeed-2mic-voicecard], device 0: bcm2835-i2s-wm8960-hifi wm8960-hifi-0 [bcm2835-i2s-wm8960-hifi wm8960-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0

pi@raspberrypi:~/Desktop/mic_hat $ arecord -l
**** List of CAPTURE Hardware Devices ****
card 3: seeed2micvoicec [seeed-2mic-voicecard], device 0: bcm2835-i2s-wm8960-hifi wm8960-hifi-0 [bcm2835-i2s-wm8960-hifi wm8960-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

- ステップ 3. テストを行います。マイクに話しかけると、その音声が聞こえるはずです（イヤホンまたはスピーカーを忘れずに接続してください）。

```bash
arecord -D "plughw:3,0" -f S16_LE -r 16000 -d 5 -t wav test.wav
aplay -D "plughw:3,0" test.wav
```

**注意:** "plughw:3,0" は録音（または再生デバイス番号）です。システムによってこの番号は異なる場合があります（例えば Raspberry Pi 0 ではオーディオジャックがないため 0 になります）。"arecord -l" と "aplay -l" を使用して確認できます。

**3. サウンド設定を構成し、alsamixer で音量を調整する**

**alsamixer** は Advanced Linux Sound Architecture (ALSA) 用のグラフィカルミキサープログラムで、サウンド設定を構成し音量を調整するために使用されます。

```bash
pi@raspberrypi:~ $ alsamixer
```

![](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/alsamixer.png)

左右の矢印キーでチャンネルまたはデバイスを選択し、上下の矢印キーで現在選択されているデバイスの音量を調整します。ALT+Q または Esc キーを押してプログラムを終了します。[詳細情報](https://en.wikipedia.org/wiki/Alsamixer)

:::caution
    最初に F6 を使用して seeed-2mic-voicecard デバイスを選択してください。
:::

## 使用概要

以下の例を実行するには、[https://github.com/respeaker/mic_hat.git](https://github.com/respeaker/mic_hat.git) リポジトリを Raspberry Pi にクローンしてください。

```bash
git clone https://github.com/respeaker/mic_hat.git
cd mic_hat
```

以下の例で言及されているすべての Python スクリプトは、このリポジトリ内にあります。必要な依存関係をインストールするには、mic_hat リポジトリフォルダ内で以下を実行してください。

```bash
sudo apt-get install portaudio19-dev libatlas-base-dev
pip3 install -r requirements.txt
```

**APA102 LED**

各オンボード APA102 LED には追加のドライバーチップがあります。このドライバーチップは、入力ラインを介して希望する色を受信し、その後新しいコマンドが受信されるまでその色を保持します。

```bash
python3 interfaces/pixels.py
```

<video width={512} height={384} controls preload>
  <source src="https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/led.mp4" />
  <source src="https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/led.webmhd.webm" />
</video>

**ユーザーボタン**

オンボードのユーザーボタンがあり、GPIO17 に接続されています。これを Python と RPi.GPIO を使用して検出してみましょう。

ステップ 4 でクローンした mic_hat フォルダリポジトリから以下のコードを実行してください。

```bash
python3 interfaces/button.py
```

ボタンを押すと「on」と表示されるはずです。

```bash
python3 button.py
```

以下のような出力が表示されます。

```txt
pi@raspberrypi:~ $ python3 button.py
off
off
on
on
off
```

### Python で音声を録音する

Python で音声を録音するために [PyAudio Python ライブラリ](https://people.csail.mit.edu/hubert/pyaudio/) を使用します。

まず、以下のスクリプトを実行して 2 Mic Pi Hat のデバイスインデックス番号を取得します。

```bash
python3 recording_examples/get_device_index.py
```

以下のようにデバイス ID が表示されます。

```bash
Input Device id  2  -  seeed-2mic-voicecard: - (hw:1,0)
```

音声を録音するには、```recording_examples/record.py``` ファイルを nano または他のテキストエディタで開き、`RESPEAKER_INDEX = 2` をシステム上の ReSpeaker のインデックス番号に変更します。その後、Python スクリプト record.py を実行して録音を行います。

```bash
python3 recording_examples/record.py
```

2 チャンネルからチャンネル 0 のデータを抽出したい場合は、```record_one_channel.py``` の内容を確認してください。他のチャンネル X の場合は [0::2] を [X::2] に変更してください。

```bash
python3 recording_examples/record_one_channel.py
```

録音したサンプルを再生するには、aplay システムユーティリティを使用することができます。例えば：

```bash
aplay -f cd -Dhw:1 output.wav # ステレオ音声の場合
aplay -D plughw:1,0 output_one_channel.wav # 1 チャンネルのモノラル音声の場合
```

または、recording_examples/play.py スクリプトを使用して PyAudio で .wav ファイルを再生することもできます。

```bash
python3 recording_examples/play.py path-to-wav-file
```

play.py 内で正しい出力デバイスインデックスを指定してください。そうしないと PyAudio がフリーズします！

### ReSpeaker 2-Mic Pi HAT と Raspberry Pi で Picovoice を使用する

**ステップ 1.** 以下の **ReSpeaker 2-Mic Pi HAT と Raspberry Pi のステップバイステップチュートリアル** に従ってください。

**注意:** ReSpeaker 2-Mic Pi HAT の APA102 LED が Raspberry Pi 上で正常に動作していることを確認してください。

**ステップ 2.** ターミナルで以下のコマンドを入力して **ReSpeaker 2-Mic Pi HAT 用 Picovoice デモをインストール** してください。

```bash
pip3 install pvrespeakerdemo
```

**注意:** 新しい Raspberry Pi OS インストールでは、このデモをインストールする際に以下の警告が表示される場合があります：
  The script picovoice_respeaker_demo is installed in '/home/pi/.local/bin' which is not on PATH.

この場合、デモを実行するには /home/pi/.local/bin をシステム PATH に追加する必要があります。

```bash
echo 'export PATH="$HOME/bin:$HOME/.local/bin:$PATH"' >> ~/.bashrc
```

#### デモの使用方法

このデモは、Raspberry Pi 上の ReSpeaker 2-Mic Pi HAT を利用して Picovoice 技術で LED を制御します。**このデモはウェイクワード "`Picovoice`" によってトリガーされ、LED のオン/オフや色の変更などの後続のアクションを実行する準備が整います。**

インストールが完了したら、ターミナルで以下のコマンドを入力してデモを実行してください。

```sh
picovoice_respeaker_demo
```

#### 音声コマンド

このデモの音声コマンドは以下の通りです：

- **Picovoice**

デモは以下を出力します：

```txt
wake word
```

- **Turn on the lights**

ライトが点灯し、ターミナルに以下のメッセージが表示されるはずです：

```json
{
    is_understood : 'true',
    intent : 'turnLights',
    slots : {
        'state' : 'on',
    }
}
```

ターミナルにコマンド一覧が表示されます：

```yaml
context:
  expressions:
    turnLights:
      - "[switch, turn] $state:state (all) (the) [light, lights]"
      - "[switch, turn] (all) (the) [light, lights] $state:state"
    changeColor:
      - "[change, set, switch] (all) (the) (light, lights) (color) (to) $color:color"
  slots:
    state:
      - "off"
      - "on"
    color:
      - "blue"
      - "green"
      - "orange"
      - "pink"
      - "purple"
      - "red"
      - "white"
      - "yellow"
```

また、以下のコマンドで色を変更することができます：

- **Picovoice、ライトをオレンジに設定して**

ライトを消すには以下のコマンドを使用します：

- **Picovoice、すべてのライトを消して**

**デモ動画の実演**

<p style={{textAlign: 'center'}}><iframe width={720} height={480} src="https://www.youtube.com/embed/mPfZZQXjWMI" frameBorder={0} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></p>

#### デモのソースコード

このデモは **[Picovoice SDK](https://github.com/Picovoice/picovoice)** を使用して構築されています。デモのソースコードは GitHub の [https://github.com/Picovoice/picovoice/tree/master/demo/respeaker](https://github.com/Picovoice/picovoice/tree/master/demo/respeaker) にあります。

#### 異なるウェイクワード

[**Picovoice SDK**](https://github.com/Picovoice/picovoice) には、Apache 2.0 ライセンスの無料サンプルウェイクワードが含まれています。これには、主要な音声アシスタント（例： "**`Hey Google`**", "**`Alexa`**"）や "**`Computer`**", "**`Jarvis`**" のような楽しいものが含まれています。

#### カスタム音声コマンド

照明コマンドは、Picovoiceの*Speech-to-Intent context*によって定義されています。Picovoice Consoleを使用して、許可される文法を入力することでコンテキストを設計およびトレーニングできます。編集中にマイクボタンを使用してブラウザ内で変更をテストすることができます。Picovoice Console ([https://picovoice.ai/console/](https://picovoice.ai/console/)) にアクセスしてアカウントを作成してください。**Rhino Speech-to-Intent editor**を使用してコンテキストを作成し、それをRaspberry Pi用にトレーニングします。

<div align="center"><img width ="{700}" src="https://files.seeedstudio.com/wiki/ReSpeaker_4_Mic_Array_for_Raspberry_Pi/respeaker_demo_console_edit.gif"/></div>

### 複数のウェイクワード例

<p style={{textAlign: 'center'}}><iframe width={720} height={480} src="https://www.youtube.com/embed/GqxWHoQ560g" frameBorder={0} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></p>

### Porcupine

**Porcupine**は非常に高精度で軽量なウェイクワードエンジンです。これにより、常時リスニングの音声対応アプリケーションを構築することが可能です。Porcupineの特徴は以下の通りです：

- 実環境でトレーニングされた深層ニューラルネットワークを使用。
- コンパクトで計算効率が高く、IoTに最適。
- クロスプラットフォーム対応。Raspberry Pi、BeagleBone、Android、iOS、Linux (x86_64)、macOS (x86_64)、Windows (x86_64)、およびウェブブラウザをサポート。さらに、企業顧客にはARM Cortex-M SDKへのアクセスが提供されます。
- スケーラブル。複数の常時リスニング音声コマンドを追加のランタイム負荷なしで検出可能。
- セルフサービス。開発者は[Picovoice Console](https://picovoice.ai/console/)を使用してカスタムウェイクワードモデルをトレーニング可能。

Picovoiceの能力を示すために、Raspberry PiとReSpeaker 2-Mic Pi HATを使用した複数のウェイクワード例も準備しました！異なるウェイクワードを設定して特定のタスクを実行できます。

*このパッケージには、Porcupineを使用してReSpeaker 2-Mic Pi HATのLEDを制御するコマンドラインデモが含まれています。*

#### 複数ウェイクワードの開始方法

以下のコマンドをターミナルで実行してデモドライバーをインストールしてください：

```sh
pip3 install ppnrespeakerdemo
```

#### 複数ウェイクワードの使用方法

ドライバーをインストールした後、以下をターミナルで実行してください：

```sh
porcupine_respeaker_demo
```

デモが初期化され、ターミナルに`[Listening]`と表示されるのを待ちます。その後、以下を話してください：

> Picovoice

デモは以下を出力します：

```text
detected 'Picovoice'
```

ライトが`緑`に設定されます。次に以下を話してください：

> Alexa

ライトが`黄色`に設定されます。以下を話してください：

> Terminator

ライトを消灯します。

#### ウェイクワードと色の対応

以下は、このデモでサポートされるウェイクワードに対応する色です：

- ![#ffff33](https://via.placeholder.com/15/ffff33/000000?text=+) `Alexa`
- ![#ff8000](https://via.placeholder.com/15/ff8000/000000?text=+) `Bumblebee`
- ![#ffffff](https://via.placeholder.com/15/ffffff/000000?text=+) `Computer`
- ![#ff0000](https://via.placeholder.com/15/ff0000/000000?text=+) `Hey Google`
- ![#800080](https://via.placeholder.com/15/800080/000000?text=+) `Hey Siri`
- ![#ff3399](https://via.placeholder.com/15/ff3399/000000?text=+) `Jarvis`
- ![#00ff00](https://via.placeholder.com/15/00ff00/000000?text=+) `Picovoice`
- ![#0000ff](https://via.placeholder.com/15/0000ff/000000?text=+) `Porcupine`
- ![#000000](https://via.placeholder.com/15/000000/000000?text=+) `Terminator`

#### 複数ウェイクワード例のソースコード

この例の完全なソースコードはこちらをご覧ください：[https://github.com/Picovoice/porcupine/tree/master/demo/respeaker](https://github.com/Picovoice/porcupine/tree/master/demo/respeaker).

## ReSpeaker 2-Mic Pi HAT と Mycroft Precise を使用したキーワード検出

Mycroft Precise は完全にオープンソースのキーワード検出エンジンです。Picovoice と比較すると機能は限定されていますが、より許容的なライセンス（Apache 2.0）を持ち、ライセンスを保持する限り、改変や再配布（クローズドソースや商業利用を含む）が可能です。

Mycroft Precise を始めるには、Seeed の Mycroft Precise フォークの最新安定版をインストールしてください：

```bash
sudo apt-get install libatlas-base-dev
pip3 install git+https://github.com/respeaker/mycroft_runner_simple.git
```

**注意:** 新しい Raspberry Pi OS のインストールでは、このデモをインストールする際に以下の警告が表示される場合があります：
  スクリプト picovoice_respeaker_demo は '/home/pi/.local/bin' にインストールされていますが、PATH に含まれていません。

この場合、デモを実行するには、/home/pi/.local/bin をシステム PATH に追加する必要があります：

```bash
echo 'export PATH="$HOME/bin:$HOME/.local/bin:$PATH"' >> ~/.bashrc
```

その後、以下のコマンドを実行して Mycroft Precise のインストールをテストできます：

```bash
mycroft-precise --model hey-mycroft
```

Mycroft Precise を独自のプロジェクトに統合したい場合は、GitHub リポジトリの README ファイルを参照して API に関する詳細情報を確認してください。

## ReSpeaker 2-Mic Pi HAT と Mycroft Core を使用したインテリジェントアシスタント

Mycroft はハッカブルなオープンソースの音声アシスタントです。Amazon Alexa や Google Assistant に似た機能を持っていますが、より許容的なライセンス（Apache 2.0）を持ち、ライセンスを保持する限り、改変や再配布（クローズドソースや商業利用を含む）が可能です。

**このセクションは現在開発中です。ReSpeaker と Mycroft Core の使用に関する詳細を追加予定です。**

## ReSpeaker 2-Mic Pi HAT と Raspberry Pi Zero を使用した Picovoice の始め方

**ステップ 1.** **ドライバーのインストールと設定**で説明されているように、ドライバーをインストールしてデバイスを設定します。

次に、Picovoice の GitHub リポジトリをクローンします：

```bash
git clone --recurse-submodules https://github.com/Picovoice/picovoice.git
cd picovoice
```

**注意:** ReSpeaker 2-Mic Pi HAT の `APA102` LED が Raspberry Pi Zero 上で正常に動作していることを確認してください。

**ステップ 2.** ターミナルで以下のコマンドを入力して `wiringpi` ライブラリをインストールします。

```sh
sudo apt-get install wiringpi
```

**ステップ 3.** リポジトリのルートから、以下のコマンドをターミナルで入力して **ReSpeaker 2-Mic Pi HAT 用 Picovoice デモをインストール**します。

```sh
gcc -std=c99 -O3 -o demo/respeaker-rpi0/picovoice_demo_mic \
-I sdk/c/include/ demo/respeaker-rpi0/picovoice_demo_mic.c \
-ldl -lasound -lwiringPi
```

### デモの使用方法

このデモは、Raspberry Pi Zero 上の ReSpeaker 2-Mic Pi HAT を使用して Picovoice 技術で LED を制御します。**このデモはウェイクワード "`Picovoice`" によってトリガーされ、LED のオン/オフや色の変更などの後続のアクションを実行する準備が整います。**

インストールが完了したら、リポジトリのルートから以下のコマンドを入力してターミナルでデモを実行します：

```sh
./demo/respeaker-rpi0/picovoice_demo_mic \
sdk/c/lib/raspberry-pi/arm11/libpicovoice.so \
resources/porcupine/lib/common/porcupine_params.pv \
resources/porcupine/resources/keyword_files/raspberry-pi/picovoice_raspberry-pi.ppn \
0.65 \
resources/rhino/lib/common/rhino_params.pv \
demo/respeaker/pvrespeakerdemo/respeaker_raspberry-pi.rhn \
0.5 \
plughw:CARD=seeed2micvoicec,DEV=0
```

### 音声コマンド

このデモで使用できる音声コマンドは以下の通りです：

- **Picovoice**

デモは以下を出力します：

```txt
wake word
```

- **Turn on the lights**

ライトが点灯し、ターミナルに以下のメッセージが表示されます：

```json
{
    is_understood : 'true',
    intent : 'turnLights',
    slots : {
        'state' : 'on',
    }
}
```

コマンドのリストはターミナルに以下のように表示されます：

```yaml
context:
  expressions:
    turnLights:
      - "[switch, turn] $state:state (all) (the) [light, lights]"
      - "[switch, turn] (all) (the) [light, lights] $state:state"
    changeColor:
      - "[change, set, switch] (all) (the) (light, lights) (color) (to) $color:color"
  slots:
    state:
      - "off"
      - "on"
    color:
      - "blue"
      - "green"
      - "orange"
      - "pink"
      - "purple"
      - "red"
      - "white"
      - "yellow"
```

また、以下のコマンドを試して色を変更できます：

- **Picovoice、ライトをオレンジに設定して**

ライトを消すには以下のコマンドを使用します：

- **Picovoice、すべてのライトを消して**

**デモ動画の紹介**

<p style={{textAlign: 'center'}}><iframe width={720} height={480} src="https://www.youtube.com/embed/X12N2Rn-q5o" frameBorder={0} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></p>

### デモのソースコード

このデモは **[Picovoice SDK](https://github.com/Picovoice/picovoice)** を使用して構築されています。デモのソースコードは GitHub で以下のリンクから入手できます：[https://github.com/Picovoice/picovoice/tree/master/demo/respeaker-rpi0](https://github.com/Picovoice/picovoice/tree/master/demo/respeaker-rpi0)

### 異なるウェイクワード

[**Picovoice SDK**](https://github.com/Picovoice/picovoice) には、Apache 2.0 ライセンスの下で提供される無料のサンプルウェイクワードが含まれています。これには、主要な音声アシスタント（例： "**`Hey Google`**", "**`Alexa`**"）や "**`Computer`**", "**`Jarvis`**" のような楽しいものが含まれます。

### カスタム音声コマンド

照明コマンドは Picovoice の *Speech-to-Intent context* によって定義されています。Picovoice Console を使用して許可される文法を入力することで、コンテキストを設計およびトレーニングできます。編集中にマイクボタンを使用してブラウザ内で変更をテストできます。Picovoice Console ([https://picovoice.ai/console/](https://picovoice.ai/console/)) にアクセスしてアカウントを作成してください。**Rhino Speech-to-Intent editor** を使用してコンテキストを作成し、それを Raspberry Pi Zero 用にトレーニングしてください。

<div align="center"><img width ="{700}" src="https://files.seeedstudio.com/wiki/ReSpeaker_4_Mic_Array_for_Raspberry_Pi/respeaker_demo_console_edit.gif"/></div>

### 複数のウェイクワード例

<p style={{textAlign: 'center'}}><iframe width={720} height={480} src="https://www.youtube.com/embed/Fi_IJEcNr3I" frameBorder={0} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></p>

Picovoiceの機能を実証するために、Raspberry Pi ZeroとReSpeaker 2-Mic Pi HATを使用した複数のウェイクワードの例も準備しました！異なるウェイクワードを設定して特定のタスクを実行することができます。

*このパッケージには、Porcupineを使用してReSpeaker 2-Mic Pi HATのLEDを制御するコマンドラインデモが含まれています。*

### Porcupine

**Porcupine**は非常に高精度で軽量なウェイクワードエンジンです。常時リスニングの音声対応アプリケーションを構築することを可能にします。Porcupineの特徴は以下の通りです：

- 実環境でトレーニングされた深層ニューラルネットワークを使用。
- コンパクトで計算効率が高く、IoTに最適。
- クロスプラットフォーム対応。Raspberry Pi、BeagleBone、Android、iOS、Linux (x86_64)、macOS (x86_64)、Windows (x86_64)、およびウェブブラウザをサポート。さらに、企業顧客にはARM Cortex-M SDKへのアクセスが提供されます。
- スケーラブル。複数の常時リスニング音声コマンドを追加のランタイム負荷なしで検出可能。
- セルフサービス。開発者は[Picovoice Console](https://picovoice.ai/console/)を使用してカスタムウェイクワードモデルをトレーニング可能。

#### 複数ウェイクワードの開始方法

**ステップ1** まず、以下のコマンドをターミナルで入力して`wiringpi`ライブラリをインストールします（まだインストールしていない場合）。

```sh
sudo apt-get install wiringpi
```

次に、PicovoiceのGitHubリポジトリをクローンします：

```bash
git clone --recurse-submodules https://github.com/Picovoice/porcupine.git
cd picovoice
```

**ステップ2.** リポジトリのルートから、以下のコマンドをターミナルで入力して**ReSpeaker 2-Mic Pi HAT用のPorcupineデモをインストール**します。

```sh
gcc -std=c99 -O3 -o demo/respeaker-rpi0/porcupine_demo_mic \
-I include/ demo/respeaker-rpi0/porcupine_demo_mic.c \
-ldl -lasound -lwiringPi
```

#### 複数ウェイクワードの使用方法

リポジトリのルートから以下をターミナルで実行します：

```sh
./demo/respeaker-rpi0/porcupine_demo_mic \
lib/raspberry-pi/arm11/libpv_porcupine.so \
lib/common/porcupine_params.pv \
0.65 \
plughw:CARD=seeed2micvoicec,DEV=0 \
resources/keyword_files/raspberry-pi/alexa_raspberry-pi.ppn \
resources/keyword_files/raspberry-pi/computer_raspberry-pi.ppn \
resources/keyword_files/raspberry-pi/hey\ google_raspberry-pi.ppn \
resources/keyword_files/raspberry-pi/hey\ siri_raspberry-pi.ppn \
resources/keyword_files/raspberry-pi/jarvis_raspberry-pi.ppn \
resources/keyword_files/raspberry-pi/picovoice_raspberry-pi.ppn \
resources/keyword_files/raspberry-pi/porcupine_raspberry-pi.ppn \
resources/keyword_files/raspberry-pi/bumblebee_raspberry-pi.ppn \
resources/keyword_files/raspberry-pi/terminator_raspberry-pi.ppn
```

デモが初期化され、ターミナルに`[Listening]`と表示されるのを待ちます。そして以下を発話してください：

> Picovoice

デモは以下を出力します：

```text
detected 'Picovoice'
```

ライトが`緑`に設定されます。次に以下を発話してください：

> Alexa

ライトが`黄色`に設定されます。以下を発話してください：

> Terminator

ライトを消灯します。

#### ウェイクワードと色の対応

このデモでサポートされているウェイクワードに対応する色は以下の通りです：

- ![#ffff33](https://via.placeholder.com/15/ffff33/000000?text=+) `Alexa`
- ![#ff8000](https://via.placeholder.com/15/ff8000/000000?text=+) `Bumblebee`
- ![#ffffff](https://via.placeholder.com/15/ffffff/000000?text=+) `Computer`
- ![#ff0000](https://via.placeholder.com/15/ff0000/000000?text=+) `Hey Google`
- ![#800080](https://via.placeholder.com/15/800080/000000?text=+) `Hey Siri`
- ![#ff3399](https://via.placeholder.com/15/ff3399/000000?text=+) `Jarvis`
- ![#00ff00](https://via.placeholder.com/15/00ff00/000000?text=+) `Picovoice`
- ![#0000ff](https://via.placeholder.com/15/0000ff/000000?text=+) `Porcupine`
- ![#000000](https://via.placeholder.com/15/000000/000000?text=+) `Terminator`

#### 複数ウェイクワードの例のソースコード

この例の完全なソースコードは以下で確認できます：[https://github.com/Picovoice/porcupine/tree/master/demo/respeaker-rpi0](https://github.com/Picovoice/porcupine/tree/master/demo/respeaker-rpi0)。

### Picovoice技術サポート

Picovoiceの使用中に技術的な問題が発生した場合は、**[Picovoice](https://github.com/Picovoice)**を訪問してディスカッションをご覧ください。

## FAQ

**Q1: "sudo pip install pyaudio" を実行した際に #include "portaudio.h" エラーが発生します。**

A1: 以下のコマンドを実行して問題を解決してください。

```bash
sudo apt-get install portaudio19-dev
```

**Q2: Raspbian のミラーソースを変更する方法は？**

A2: [Raspbian Mirrors](http://www.raspbian.org/RaspbianMirrors) を参照し、以下の手順に従って最初にソースを変更してください。

```bash
pi@raspberrypi ~ $ sudo nano /etc/apt/sources.list
```

例えば、中国のユーザーには Tsinghua のソースを使用することをお勧めします。そのため、sources.list を以下のように変更してください。

```d
deb http://mirrors.tuna.tsinghua.edu.cn/raspbian/raspbian/ stretch main non-free contrib
deb-src http://mirrors.tuna.tsinghua.edu.cn/raspbian/raspbian/ stretch main non-free contrib
```
