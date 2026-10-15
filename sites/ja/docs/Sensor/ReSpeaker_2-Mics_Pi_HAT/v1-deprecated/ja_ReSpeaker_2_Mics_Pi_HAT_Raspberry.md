---
description: Raspberry Pi を使った入門ガイド
title: Raspberry Pi を使った入門ガイド
keywords:
  - ReSpeaker_2-Mics_Pi_HAT
image: https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/social-image.webp
slug: /ReSpeaker_2_Mics_Pi_HAT_Raspberry
sku: 102110358
last_update:
  date: 1/29/2026
  author: Mingxi
createdAt: '2025-05-27'
updatedAt: '2026-01-29'
url: https://wiki.seeedstudio.com/ja/ReSpeaker_2_Mics_Pi_HAT_Raspberry/
---

:::caution
このwikiはReSpeaker 2-Mics Pi HAT **v1**用に書かれています。v1とv2デバイスを区別するには、[ReSpeaker 2-Mics Pi HATハードウェアリビジョンの見分け方](/ja/how-to-distinguish-respeaker_2-mics_pi_hat-hardware-revisions)を参照してください。
:::

### ドライバーのインストールと設定

**1. ReSpeaker 2-Mics Pi HATをRaspberry Piに接続**

ReSpeaker 2-Mics Pi HATをRaspberry Piに取り付けます。ReSpeaker 2-Mics Pi HATを重ねる際は、ピンが正しく配置されていることを確認してください。

Raspberry Pi接続

![connection picture1](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/pi.png)

Raspberry Pi Zero接続

![connection picture2](https://files.seeedstudio.com/products/107100001/01.png)

**2. Raspberry Piでドライバーをセットアップ**

Piで[最新のRaspberry Pi OS](https://www.raspberrypi.org/downloads/raspbian/)を実行していることを確認してください。*(2021.05.01時点で更新)*

- ステップ1：ReSpeaker 2-Mics Pi HAT（V1.0）用のDevice Tree Source（DTS）を取得し、コンパイルしてデバイスツリーオーバーレイをインストールします。

```bash
git clone https://github.com/Seeed-Studio/seeed-linux-dtoverlays.git  
cd seeed-linux-dtoverlays/  
make overlays/rpi/respeaker-2mic-v1_0-overlay.dtbo  
sudo cp overlays/rpi/respeaker-2mic-v1_0-overlay.dtbo /boot/firmware/overlays/respeaker-2mic-v1_0.dtbo  
echo "dtoverlay=respeaker-2mic-v1_0" | sudo tee -a /boot/firmware/config.txt  
```


- ステップ2：Piを再起動します。

```bash
sudo reboot
```


<!--
:::note
Raspberry PiのLinuxカーネルバージョンが[rpi-6.6.y](https://github.com/raspberrypi/linux/tree/rpi-6.6.y)（Raspberry Pi 5など）の場合、simple_card_utils.h[simple_card_utils.h](https://github.com/raspberrypi/linux/blob/rpi-6.6.y/include/sound/simple_card_utils.h)の変更によりビルドエラーが発生する可能性があります。これを修正するには、seeed-voicecard.cに以下の変更を加えてください。

- ファイルseeed-voicecard/seeed-voicecard.cを開く
- "simple_util_"プレフィックスのすべてのインスタンスを"asoc_simple_"に置き換える
- "rtd->id"のすべてのインスタンスを"rtd->num"に置き換える
- 保存して終了
- 再度インストールして再起動

```bash
sudo ./install.sh
sudo reboot now
```
:::
-->

- ステップ3. ```aplay -l```と```arecord -l```コマンドでサウンドカード名がソースコードseeed-voicecardと一致することを確認します。

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

- ステップ4. テストします。マイクに話しかけた内容が聞こえるはずです（イヤホンまたはスピーカーを接続することを忘れずに）：

```bash
arecord -D "plughw:3,0" -f S16_LE -r 16000 -d 5 -t wav test.wav
aplay -D "plughw:3,0" test.wav
```

**注意：** "plughw:3,0"は録音（または再生デバイス番号）です。システムによってこの番号は異なる場合があります（例えば、Raspberry Pi 0では音声ジャックがないため0になります）。"arecord -l"と"aplay -l"で確認できます。

**3. alsamixerでサウンド設定を構成し音量を調整**

**alsamixer**は、サウンド設定の構成と音量調整に使用されるAdvanced Linux Sound Architecture（ALSA）用のグラフィカルミキサープログラムです。

```bash
pi@raspberrypi:~ $ alsamixer
```

![](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/alsamixer.png)

左右の矢印キーはチャンネルまたはデバイスの選択に使用され、上下の矢印は現在選択されているデバイスの音量を制御します。ALT+QまたはEscキーでプログラムを終了します。[詳細情報](https://en.wikipedia.org/wiki/Alsamixer)

:::caution
    最初にF6を使用してseeed-2mic-voicecardデバイスを選択してください。
:::

## 使用方法の概要

以下の例を実行するには、[https://github.com/respeaker/mic_hat.git](https://github.com/respeaker/mic_hat.git)リポジトリをRaspberry Piにクローンしてください

```bash
git clone https://github.com/respeaker/mic_hat.git
cd mic_hat
```

以下の例で言及されているすべてのPythonスクリプトは、このリポジトリ内にあります。必要な依存関係をインストールするには、mic_hatリポジトリフォルダから以下を実行してください

```bash
sudo apt-get install portaudio19-dev libatlas-base-dev
pip3 install -r requirements.txt
```

**APA102 LED**

各オンボードAPA102 LEDには追加のドライバーチップがあります。ドライバーチップは入力ラインを介して希望の色を受信し、新しいコマンドを受信するまでその色を保持します。

```bash
python3 interfaces/pixels.py
```

<video width={512} height={384} controls preload>
  <source src="https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/led.mp4" />
  <source src="https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/led.webmhd.webm" />
</video>

**ユーザーボタン**

GPIO17に接続されたオンボードユーザーボタンがあります。PythonとRPi.GPIOでそれを検出してみましょう。

ステップ4でクローンしたmic_hatフォルダリポジトリから以下のコードを実行してください。

```bash
python3 interfaces/button.py
```

ボタンを押すと"on"と表示されるはずです：

```bash
python3 button.py
```

次のような出力

```txt
pi@raspberrypi:~ $ python3 button.py
off
off
on
on
off
```

### Pythonで音声を録音

Pythonで音声を録音するために[PyAudio pythonライブラリ](https://people.csail.mit.edu/hubert/pyaudio/)を使用します。

まず、以下のスクリプトを実行して2 Mic pi hatのデバイスインデックス番号を取得します：

```bash
python3 recording_examples/get_device_index.py
```

以下のようにデバイスIDが表示されます。

```bash
Input Device id  2  -  seeed-2mic-voicecard: - (hw:1,0)
```

音声を録音するには、```recording_examples/record.py```ファイルをnanoまたは他のテキストエディタで開き、`RESPEAKER_INDEX = 2`をシステム上のReSpeakerのインデックス番号に変更します。その後、pythonスクリプトrecord.pyを実行して録音を行います：

```bash
python3 recording_examples/record.py
```

2チャンネルからチャンネル0のデータを抽出したい場合は、```record_one_channel.py```の内容を確認してください。他のチャンネルXについては、[0::2]を[X::2]に変更してください。

```bash
python3 recording_examples/record_one_channel.py
```

録音したサンプルを再生するには、aplayシステムユーティリティを使用できます。例えば

```bash
aplay -f cd -Dhw:1 output.wav #for Stereo sound
aplay -D plughw:1,0 output_one_channel.wav #for Mono sound from one channel
```

または、recording_examples/play.pyスクリプトを使用してPyAudioで.wavファイルを再生できます。

```bash
python3 recording_examples/play.py path-to-wav-file
```

play.pyで正しい出力デバイスインデックスを指定してください - そうしないとPyAudioがフリーズします！

### ReSpeaker 2-Mic Pi HATとRaspberry PiでのPicovoice

**ステップ1.** 以下の前に**上記のReSpeaker 2-Mic Pi HATとRaspberry Piのステップバイステップチュートリアル**に従ってください。

**注意：** ReSpeaker 2-Mic Pi HATとRaspberry Piで`APA102` LEDが正常に動作していることを確認してください。

**ステップ2.** ターミナルで以下のコマンドを入力して**ReSpeaker 2-Mic Pi HAT用のPicovoiceデモをインストール**します。

```bash
pip3 install pvrespeakerdemo
```

**注意：** 新しいRaspberry Pi OSインストールでは、このデモをインストールする際に以下の警告が表示される場合があります：
  The script picovoice_respeaker_demo is installed in '/home/pi/.local/bin' which is not on PATH.

これは、デモを実行するために/home/pi/.local/binをシステムPATHに追加する必要があることを意味します：

```bash
echo 'export PATH="$HOME/bin:$HOME/.local/bin:$PATH"' >> ~/.bashrc
```

#### デモの使用方法

このデモは、Raspberry Pi上のReSpeaker 2-Mic Pi HATとPicovoice技術を利用してLEDを制御します。**このデモはウェイクワード"`Picovoice`"によってトリガーされ、LEDのオン/オフや色の変更などのフォローアップアクションを実行する準備が整います。**

インストールが完了したら、ターミナルでこのコマンドを入力してデモを実行します：

```sh
picovoice_respeaker_demo
```

#### 音声コマンド

このデモの音声コマンドは以下の通りです：

- **Picovoice**

デモの出力：

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

コマンドのリストがターミナルに表示されます：

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

また、以下のコマンドで色を変更することもできます：

- **Picovoice, set the lights to orange**

ライトを消すには：

- **Picovoice, turn off all lights**

**デモビデオデモンストレーション**

<p style={{textAlign: 'center'}}><iframe width={720} height={480} src="https://www.youtube.com/embed/mPfZZQXjWMI" frameBorder={0} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></p>

#### デモソースコード

このデモは**[Picovoice SDK](https://github.com/Picovoice/picovoice)**で構築されています。デモのソースコードはGitHubの[https://github.com/Picovoice/picovoice/tree/master/demo/respeaker](https://github.com/Picovoice/picovoice/tree/master/demo/respeaker)で入手できます。

#### 異なるウェイクワード

[**Picovoice SDK**](https://github.com/Picovoice/picovoice)には、Apache 2.0でライセンスされた無料のサンプルウェイクワードが含まれており、主要な音声アシスタント（例："**`Hey Google`**"、"**`Alexa`**"）や"**`Computer`**"や"**`Jarvis`**"などの楽しいものも含まれています。

#### カスタム音声コマンド

照明コマンドは、Picovoiceの*Speech-to-Intentコンテキスト*によって定義されます。Picovoice Consoleを使用して許可された文法を入力することで、コンテキストを設計および訓練できます。編集中にマイクボタンでブラウザ内で変更をテストできます。Picovoice Console（[https://picovoice.ai/console/](https://picovoice.ai/console/)）にアクセスしてアカウントにサインアップしてください。**Rhino Speech-to-Intentエディタ**を使用してコンテキストを作成し、Raspberry Pi用に訓練してください。

<div align="center"><img width ="{700}" src="https://files.seeedstudio.com/wiki/ReSpeaker_4_Mic_Array_for_Raspberry_Pi/respeaker_demo_console_edit.gif"/></div>

### 複数ウェイクワードの例

<p style={{textAlign: 'center'}}><iframe width={720} height={480} src="https://www.youtube.com/embed/GqxWHoQ560g" frameBorder={0} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></p>

### Porcupine

**Porcupine**は、高精度で軽量なウェイクワードエンジンです。常時リスニング対応の音声アプリケーションの構築を可能にします。特徴は以下の通りです：


- 実環境で訓練された深層ニューラルネットワークを使用。
- コンパクトで計算効率が良い。IoTに最適。
- クロスプラットフォーム。Raspberry Pi、BeagleBone、Android、iOS、Linux（x86_64）、macOS（x86_64）、Windows（x86_64）、および
  Webブラウザがサポートされています。さらに、エンタープライズ顧客はARM Cortex-M SDKにアクセスできます。
- スケーラブル。実行時フットプリントを追加することなく、複数の常時リスニング音声コマンドを検出できます。
- セルフサービス。開発者は[Picovoice Console](https://picovoice.ai/console/)を使用してカスタムウェイクワードモデルを訓練できます。

Picovoiceの機能を実証するため、ReSpeaker 2-Mic Pi HATとRaspberry Piを使用した複数ウェイクワードの例も準備しました！異なるウェイクワードで特定のタスクを実行するように設定できます。

*このパッケージには、Porcupineを使用してReSpeaker 2-Mic Pi HAT LEDを制御するためのコマンドラインデモが含まれています。*

#### 複数ウェイクワード入門ガイド

ターミナルで以下のコマンドを実行してデモドライバをインストールします：

```sh
pip3 install ppnrespeakerdemo
```

#### 複数ウェイクワードの使用方法

ドライバのインストール後、ターミナルで以下を実行します：

```sh
porcupine_respeaker_demo
```

デモが初期化され、ターミナルに`[Listening]`と表示されるまで待ちます。次のように言ってください：

> Picovoice

デモの出力：

```text
detected 'Picovoice'
```

ライトが`green`に設定されました。次のように言ってください：

> Alexa

ライトが`yellow`に設定されました。次のように言ってください：

> Terminator

ライトを消すことができます。

#### ウェイクワードと色の対応

このデモでサポートされているウェイクワードに関連付けられた色は以下の通りです：

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

この例の完全なソースコードはこちらをご覧ください：[https://github.com/Picovoice/porcupine/tree/master/demo/respeaker](https://github.com/Picovoice/porcupine/tree/master/demo/respeaker)。

## ReSpeaker 2-Mic Pi HATとMycroft Preciseを使用したキーワードスポッティング

Mycroft Preciseは完全にオープンソースのキーワード検出エンジンです。Picovoiceと比較して機能は限定的ですが、より寛容なライセンス（Apache 2.0）を持ち、ライセンスが保持される限り、クローズドソースや商用を含む変更と再配布が許可されています。

Mycroft Preciseを開始するには、SeeedのMycroft Preciseフォークの最新安定版をインストールします：

```bash
sudo apt-get install libatlas-base-dev
pip3 install git+https://github.com/respeaker/mycroft_runner_simple.git
```

**注意：** 新しいRaspberry Pi OSインストールでは、このデモをインストールする際に以下の警告が表示される場合があります：
  The script picovoice_respeaker_demo is installed in '/home/pi/.local/bin' which is not on PATH.

これは、デモを実行するために/home/pi/.local/binをシステムPATHに追加する必要があることを意味します：

```bash
echo 'export PATH="$HOME/bin:$HOME/.local/bin:$PATH"' >> ~/.bashrc
```

その後、以下を実行するだけでMycroft Preciseのインストールをテストできます：

```bash
mycroft-precise --model hey-mycroft
```

Mycroft Preciseを独自のプロジェクトに統合したい場合は、APIの詳細についてGithubリポジトリのREADMEファイルを確認してください。

## ReSpeaker 2-Mic Pi HATとMycroft Coreを使用したインテリジェントアシスタント

Mycroftはハッカブルなオープンソース音声アシスタントです。Amazon AlexaやGoogle Assistantと同様の機能を持ちますが、より寛容なライセンス（Apache 2.0）を持ち、ライセンスが保持される限り、クローズドソースや商用を含む変更と再配布が許可されています。

**このセクションは現在開発中です。RespeakerでMycroft Coreを使用することについて、より詳細な情報を追加予定です**

## ReSpeaker 2-Mic Pi HATとRaspberry Pi ZeroでのPicovoice入門ガイド

**ステップ1.** **ドライバのインストールと設定**で説明されているように、ドライバをインストールしてデバイスを設定します。

次に、PicovoiceのGitHubリポジトリをクローンします：

```bash
git clone --recurse-submodules https://github.com/Picovoice/picovoice.git
cd picovoice
```

**注意：** ReSpeaker 2-Mic Pi HATとRaspberry Pi Zeroで`APA102` LEDが正常に動作していることを確認してください。

**ステップ2.** ターミナルで以下を入力して`wiringpi`ライブラリをインストールします。

```sh
sudo apt-get install wiringpi
```

**ステップ3.** リポジトリのルートから、ターミナルで以下のコマンドを入力して**ReSpeaker 2-Mic Pi HAT用のPicovoiceデモをインストール**します。

```sh
gcc -std=c99 -O3 -o demo/respeaker-rpi0/picovoice_demo_mic \
-I sdk/c/include/ demo/respeaker-rpi0/picovoice_demo_mic.c \
-ldl -lasound -lwiringPi
```

### デモの使用方法

このデモは、Raspberry Pi ZeroのReSpeaker 2-Mic Pi HATとPicovoice技術を利用してLEDを制御します。**このデモはウェイクワード"`Picovoice`"によってトリガーされ、LEDのオン/オフや色の変更などの後続アクションを実行する準備が整います。**

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

このデモの音声コマンドは以下の通りです：

- **Picovoice**

デモの出力：

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

コマンドのリストがターミナルに表示されます：

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

また、以下のコマンドで色を変更することもできます：

- **Picovoice, set the lights to orange**

ライトを消すには：

- **Picovoice, turn off all lights**

**デモビデオ実演**

<p style={{textAlign: 'center'}}><iframe width={720} height={480} src="https://www.youtube.com/embed/X12N2Rn-q5o" frameBorder={0} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></p>

### デモソースコード

このデモは**[Picovoice SDK](https://github.com/Picovoice/picovoice)**で構築されています。デモのソースコードはGitHubの[https://github.com/Picovoice/picovoice/tree/master/demo/respeaker-rpi0](https://github.com/Picovoice/picovoice/tree/master/demo/respeaker-rpi0)で入手できます。

### 異なるウェイクワード

[**Picovoice SDK**](https://github.com/Picovoice/picovoice)には、Apache 2.0でライセンスされた無料のサンプルウェイクワードが含まれており、主要な音声アシスタント（例："**`Hey Google`**"、"**`Alexa`**"）や"**`Computer`**"や"**`Jarvis`**"などの楽しいものも含まれています。

### カスタム音声コマンド

照明コマンドは、Picovoiceの*Speech-to-Intentコンテキスト*によって定義されます。Picovoice Consoleを使用して許可された文法を入力することで、コンテキストを設計および訓練できます。編集中にマイクボタンでブラウザ内で変更をテストできます。Picovoice Console（[https://picovoice.ai/console/](https://picovoice.ai/console/)）にアクセスしてアカウントにサインアップしてください。**Rhino Speech-to-Intentエディタ**を使用してコンテキストを作成し、Raspberry Pi Zero用に訓練してください。

<div align="center"><img width ="{700}" src="https://files.seeedstudio.com/wiki/ReSpeaker_4_Mic_Array_for_Raspberry_Pi/respeaker_demo_console_edit.gif"/></div>

### 複数ウェイクワードの例

<p style={{textAlign: 'center'}}><iframe width={720} height={480} src="https://www.youtube.com/embed/Fi_IJEcNr3I" frameBorder={0} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></p>

Picovoiceの機能を実証するため、ReSpeaker 2-Mic Pi HATとRaspberry Pi Zeroを使用した複数ウェイクワードの例も準備しました！異なるウェイクワードで特定のタスクを実行するように設定できます。

*このパッケージには、Porcupine を使用して ReSpeaker 2-Mic Pi HAT LED を制御するためのコマンドラインデモが含まれています。*

### Porcupine

**Porcupine** は、高精度で軽量なウェイクワードエンジンです。常時リスニング対応の音声対応
アプリケーションの構築を可能にします。特徴は以下の通りです：

- 実環境で訓練されたディープニューラルネットワークを使用。
- コンパクトで計算効率が高い。IoT に最適。
- クロスプラットフォーム対応。Raspberry Pi、BeagleBone、Android、iOS、Linux (x86_64)、macOS (x86_64)、Windows (x86_64)、および Web
  ブラウザをサポート。さらに、エンタープライズ顧客は ARM Cortex-M SDK にアクセス可能。
- スケーラブル。実行時フットプリントを追加することなく、複数の常時リスニング音声コマンドを検出可能。
- セルフサービス。開発者は [Picovoice Console](https://picovoice.ai/console/) を使用してカスタムウェイクワードモデルを訓練可能。

#### マルチウェイクワード入門ガイド

**ステップ 1** `wiringpi` ライブラリをインストール（まだインストールしていない場合）するため、ターミナルで以下を入力します。

```sh
sudo apt-get install wiringpi
```

次に、Picovoice の GitHub リポジトリを git clone します：

```bash
git clone --recurse-submodules https://github.com/Picovoice/porcupine.git
cd picovoice
```

**ステップ 2.** リポジトリのルートから、ターミナルで以下のコマンドを入力して **ReSpeaker 2-Mic Pi HAT 用の Porcupine デモをインストール** します。

```sh
gcc -std=c99 -O3 -o demo/respeaker-rpi0/porcupine_demo_mic \
-I include/ demo/respeaker-rpi0/porcupine_demo_mic.c \
-ldl -lasound -lwiringPi
```

#### マルチウェイクワードの使用方法

リポジトリのルートから、ターミナルで以下を実行します：

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

デモが初期化され、ターミナルに `[Listening]` と表示されるまで待ちます。次のように言います：

> Picovoice

デモの出力：

```text
detected 'Picovoice'
```

ライトが `green` に設定されました。次のように言います：

> Alexa

ライトが `yellow` に設定されました。次のように言います：

> Terminator

ライトを消灯します。

#### ウェイクワードと色の対応

このデモでサポートされているウェイクワードに関連付けられた色は以下の通りです：

- ![#ffff33](https://via.placeholder.com/15/ffff33/000000?text=+) `Alexa`
- ![#ff8000](https://via.placeholder.com/15/ff8000/000000?text=+) `Bumblebee`
- ![#ffffff](https://via.placeholder.com/15/ffffff/000000?text=+) `Computer`
- ![#ff0000](https://via.placeholder.com/15/ff0000/000000?text=+) `Hey Google`
- ![#800080](https://via.placeholder.com/15/800080/000000?text=+) `Hey Siri`
- ![#ff3399](https://via.placeholder.com/15/ff3399/000000?text=+) `Jarvis`
- ![#00ff00](https://via.placeholder.com/15/00ff00/000000?text=+) `Picovoice`
- ![#0000ff](https://via.placeholder.com/15/0000ff/000000?text=+) `Porcupine`
- ![#000000](https://via.placeholder.com/15/000000/000000?text=+) `Terminator`

#### マルチウェイクワードサンプルソースコード

この例の完全なソースコードはこちらをご覧ください：[https://github.com/Picovoice/porcupine/tree/master/demo/respeaker-rpi0](https://github.com/Picovoice/porcupine/tree/master/demo/respeaker-rpi0)。

### Picovoice 技術サポート

Picovoice の使用中に技術的な問題が発生した場合は、**[Picovoice](https://github.com/Picovoice)** にアクセスしてディスカッションをご覧ください。

## FAQ

**Q1: "sudo pip install pyaudio" 実行時に #include "portaudio.h" エラーが発生します。**

A1: この問題を解決するには、以下のコマンドを実行してください。

```bash
sudo apt-get install portaudio19-dev
```

**Q2: Raspbian Mirrors ソースを変更するにはどうすればよいですか？**

A2: [Raspbian Mirrors](http://www.raspbian.org/RaspbianMirrors) を参照し、以下の手順に従って最初にソースを変更してください。

```bash
pi@raspberrypi ~ $ sudo nano /etc/apt/sources.list
```

例えば、中国のユーザーには清華大学のソースを使用することをお勧めします。そのため、sources.list を以下のように変更してください。

```d
deb http://mirrors.tuna.tsinghua.edu.cn/raspbian/raspbian/ stretch main non-free contrib
deb-src http://mirrors.tuna.tsinghua.edu.cn/raspbian/raspbian/ stretch main non-free contrib
```
