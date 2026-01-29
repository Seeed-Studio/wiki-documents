---
description: ReSpeaker 4-Mic Array for Raspberry Pi
title: ReSpeaker 4-Mic Array for Raspberry Pi
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ReSpeaker_4_Mic_Array_for_Raspberry_Pi
sku: 103030216
last_update:
  date: 1/11/2023
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/overview.jpg)

ReSpeaker 4-Mic Array for Raspberry Pi は、AI と音声アプリケーション向けに設計された Raspberry Pi 用のクアッドマイクロフォン拡張ボードです。これにより、Amazon Alexa Voice Service、Google Assistant などを統合した、より強力で柔軟な音声製品を構築することができます。

[ReSpeaker 2-Mics Pi HAT](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT-p-2874.html) とは異なり、このボードは AC108 をベースに開発されています。AC108 は、高精細音声キャプチャ用の I2S/TDM 出力変換機能を備えた高度に統合されたクアッドチャンネル ADC で、デバイスが 3 メートル半径内の音を拾うことを可能にします。さらに、この 4-Mics バージョンには、12 個の APA102 プログラマブル LED を備えた LED リングが搭載されています。この 4 つのマイクロフォンと LED リングにより、Raspberry Pi は VAD（音声活動検出）、DOA（到来方向推定）、KWS（キーワード検索）を実行し、Amazon Echo や Google Home のように LED リングを介して方向を表示する能力を持つことができます。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/IkSfBSf1IRo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-4-Mic-Array-for-Raspberry-Pi-p-2941.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong></a>
</div>

## 特徴

- Raspberry Pi 互換（Raspberry Pi Zero および Zero W、Raspberry PiB+、Raspberry Pi 2B、Raspberry Pi 3B、Raspberry Pi 3B+、Raspberry Pi3 A+、Raspberry Pi 4B をサポート）
- 4 つのマイクロフォン
- 3 メートル半径の音声キャプチャ
- 2 つの Grove インターフェース
- 12 個の APA102 ユーザー LED
- ソフトウェアアルゴリズム：VAD（音声活動検出）、DOA（到来方向推定）、KWS（キーワード検索）

注意：ReSpeaker 4-Mic Array for Raspberry Pi には音声出力インターフェースがありません。音声キャプチャ専用です。音声出力には Raspberry Pi の[ヘッドフォンジャック](https://www.raspberrypi.org/documentation/configuration/audio-config.md)を使用できます。

## アプリケーションアイデア

- 音声インタラクションアプリケーション
- AI アシスタント

## ハードウェア概要

![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/features.png)

- MIC：4 つのアナログマイクロフォン
- LED：12 個の APA102 プログラマブル RGB LED、SPI インターフェースに接続
- Raspberry Pi 40-Pin ヘッダー：Raspberry Pi Zero および Zero W、Raspberry PiB+、Raspberry Pi 2B、Raspberry Pi 3B、Raspberry Pi 3B+、Raspberry Pi3 A+、Raspberry Pi 4 と互換
- AC108：I2S/TDM 出力変換機能を備えた高度に統合されたクアッドチャンネル ADC
- I2C：Grove I2C ポート、I2C-1 に接続
- GPIO12：Grove デジタルポート、GPIO12 & GPIO13 に接続

注意：APA102 RGB LED を使用する場合は、LED の VCC を有効にするために最初に `GPIO5` を HIGH に書き込むようにしてください。

## はじめに

**ReSpeaker 4-Mic Array を Raspberry Pi に接続する**

ReSpeaker 4-Mic Array を Raspberry Pi にマウントします。Raspberry Pi 用 ReSpeaker 4-Mic Array を重ねる際は、ピンが適切に整列していることを確認してください。

注意：ReSpeaker 4-Mic Array のホットプラグは許可されていません。respeaker を損傷する可能性があります。

![connection pic1](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/connect1.jpg)
![connection pic2](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/connect2.jpg)

**ドライバーのインストール**

Pi で[最新の Raspberry Pi OS](https://www.raspberrypi.org/downloads/raspbian/)を実行していることを確認してください。*(2021.06.30 更新)*

- ステップ 1. Seeed voice card のソースコードを取得し、インストールして再起動します。

```
sudo apt-get update
git clone https://github.com/HinTak/seeed-voicecard.git
cd seeed-voicecard
sudo ./install.sh
sudo reboot now
```

- ステップ2. 次に、Raspberry Piでオーディオ出力を選択します：

```sh
sudo raspi-config
# Select 1 System options
# Select S2 Audio
# Select your preferred Audio output device
# Select Finish
```

- ステップ3. サウンドカード名が以下のように表示されることを確認してください：

```sh
pi@raspberrypi:~ $ arecord -L
null
    Discard all samples (playback) or generate zero samples (capture)
jack
    JACK Audio Connection Kit
pulse
    PulseAudio Sound Server
default
playback
ac108
sysdefault:CARD=seeed4micvoicec
    seeed-4mic-voicecard,
    Default Audio Device
dmix:CARD=seeed4micvoicec,DEV=0
    seeed-4mic-voicecard,
    Direct sample mixing device
dsnoop:CARD=seeed4micvoicec,DEV=0
    seeed-4mic-voicecard,
    Direct sample snooping device
hw:CARD=seeed4micvoicec,DEV=0
    seeed-4mic-voicecard,
    Direct hardware device without any conversions
plughw:CARD=seeed4micvoicec,DEV=0
    seeed-4mic-voicecard,
    Hardware device with all software conversions
usbstream:CARD=seeed4micvoicec
    seeed-4mic-voicecard
    USB Stream Output
usbstream:CARD=ALSA
    bcm2835 ALSA
    USB Stream Output
```

`alsa`設定を変更したい場合は、`sudo alsactl --file=ac108_asound.state store`を使用して保存できます。そして、その設定を再度使用する必要がある場合は、次の場所にコピーします：`sudo cp ~/seeed-voicecard/ac108_asound.state /var/lib/alsa/asound.state`

- ステップ 4. Audacityを開き、入力として**AC108 & 4 channels**を選択し、出力として**bcm2835 alsa: - (hw:0:0)**を選択してテストします：

```sh
sudo apt update
sudo apt install audacity
audacity                      // run audacity
```

![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/audacity.png)

- または、Lite Raspbian Pi OS イメージを使用していてGUIがない場合は、`arecord` で録音し、`aplay` で再生できます：

```
sudo apt-get install sox                             //for audio conversion
arecord -Dac108 -f S32_LE -r 16000 -c 4 hello.wav    // only support 4 channels
sox hello.wav -c 2 stereo.wav                        // convert to stereo
aplay stereo.wav                                      // make sure default device
                                                     // Audio will come out via audio jack of Raspberry Pi
```

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

**APA102 LED**

各オンボードAPA102 LEDには追加のドライバーチップが搭載されています。ドライバーチップは、入力ラインを介して希望する色を受信し、新しいコマンドを受信するまでその色を保持する役割を担います。

![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/rainbow.jpg)

- ステップ1. SPIを有効化：

```bash
sudo raspi-config
```

1. "Interfacing Options"を選択
2. "SPI"を選択
3. Enable SPIを選択
4. 最後に、ツールを終了

- ステップ 2. 次にサンプルコードを実行すると、LEDがAlexa AssistantのようにBlinkするのを確認できます。

```bash
python3 interfaces/pixels.py
```

### Pythonで音声を録音する

[PyAudio pythonライブラリ](https://people.csail.mit.edu/hubert/pyaudio/)を使用してPythonで音声を録音します。

まず、以下のスクリプトを実行して2 Mic pi hatのデバイスインデックス番号を取得します：

```bash
python3 recording_examples/get_device_index.py
```

以下のようにデバイスIDが表示されます。

```txt
Input Device id  2  -  seeed-4mic-voicecard: - (hw:1,0)
```

音声を録音するには、```recording_examples/record.py``` ファイルをnanoまたは他のテキストエディタで開き、`RESPEAKER_INDEX = 2` をお使いのシステムのReSpeakerのインデックス番号に変更してください。その後、Pythonスクリプトrecord.pyを実行して録音を行います：

```bash
python3 recording_examples/record.py
```

- ステップ 6. 4チャンネルからチャンネル0のデータを抽出したい場合は、```record_one_channel.py```の内容を確認してください。他のチャンネルXについては、[0::4]を[X::4]に変更してください。

```bash
python3 recording_examples/record_one_channel.py
```

録音されたサンプルを再生するには、aplayシステムユーティリティを使用できます。例えば

```bash
aplay -f cd -Dhw:0 output.wav #for Stereo sound
aplay -D plughw:0,0 output_one_channel.wav #for Mono sound from one channel
```

## リアルタイム音源定位と追跡

[ODAS](https://github.com/introlab/odas) は Open embeddeD Audition System の略です。これは音源定位、追跡、分離、およびポストフィルタリングを実行することに特化したライブラリです。

- ステップ 1. [ODAS](https://github.com/introlab/odas.git) を取得してビルドします。

呼び出す実行ファイルは bin ディレクトリに生成されます

```bash
sudo apt-get install libfftw3-dev libconfig-dev libasound2-dev libgconf-2-4
sudo apt-get install cmake
cd ~/Desktop
git clone https://github.com/introlab/odas.git
mkdir odas/build
cd odas/build
cmake ..
make
```

- ステップ2. [ODAS Studio](https://github.com/introlab/odas_web) を取得して実行します。

nodejs v12.22 と npm 6.14 をインストールします。

```bash
sudo apt update
sudo apt -y install curl dirmngr apt-transport-https lsb-release ca-certificates
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
```

関連するコンパイルツールがインストールされていることを確認してください

```bash
sudo apt -y install gcc g++ make
sudo apt -y install nodejs
```

npmでodas_webの依存関係をインストール

```bash
cd ~/Desktop
git clone https://github.com/introlab/odas_web
cd odas_web
npm install
```

私たちの目的は、再ビルドを行わずに関連する依存モジュールをインストールすることなので、再ビルド中のエラーは無視できます。その後、npm start を実行します。

```bash
npm start
```

または、古いelection-rebuildモジュールをビルドするためにPythonを2.7にダウングレードすることもできます。（この手順は必須ではありません）

```bash
sudo apt remove python3 -y
sudo apt install python2 -y
```

- ステップ3. odascore は **~/Desktop/odas/build/bin/odaslive** にあり、設定ファイルは **~/Desktop/odas/config/odaslive/respeaker_4_mic_array.cfg** にあります。

サウンドカードを私たちのデバイスに指定するために設定を変更する必要があります

```bash
arecord -l  #type this commond  make sure u have arecord installed
```

以下のような出力が表示されます

```bash
pi@raspberrypi:~/Desktop/odas/config/odaslive $ arecord -l
**** List of CAPTURE Hardware Devices ****
card 3: seeed4micvoicec [seeed-4mic-voicecard], device 0: bcm2835-i2s-ac10x-codec0 ac10x-codec0-0 [bcm2835-i2s-ac10x-codec0 ac10x-codec0-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

cfg設定ファイルの18行目でサウンドカードの指定を変更します

```bash
vim ~/Desktop/odas/config/odaslive/respeaker_4_mic_array.cfg
# Then type :18
# Then press Enter
# Then press i
# Change card = YOUR CARD ;  # We found in "arecord -l"
# For mine is
# card = 3 ;
# Then type  :wq  # To save the configuration file
```

その後、odas webインターフェースを開きます。ここで**Local System Monitor**インターフェースでシステム監視データを確認し、**ODAS Control**インターフェースで制御カーネルと読み込む設定ファイルを選択できます。

odas web GUIを開始するには

```bash
cd ~/Desktop/odas_web
npm start
```

**ODAS Core** の下の空白セクションをクリックしてファイルブラウザを表示し、"~/Desktop/odas/build/bin/odaslive" のコアパスを選択します

**ODAS Config** の下の空白セクションをクリックしてファイルブラウザを表示し、"~/Desktop/odas/config/odaslive/respeaker_4_mic_array.cfg" の設定パスを選択します

正しく設定されると次のようになります

![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/odas.png)

## Picovoiceを使用したエッジでの音声認識の有効化

<div align="center"><img width ="{700}" src="https://files.seeedstudio.com/wiki/ReSpeaker_4_Mic_Array_for_Raspberry_Pi/banner.gif"/></div>

[**Picovoice**](https://picovoice.ai/) **は、企業がプライベート音声AIで迅速にイノベーションと差別化を実現することを可能にします**。音声認識と[**自然言語理解（NLU）技術**](https://searchenterpriseai.techtarget.com/definition/natural-language-understanding-NLU)を使用して、ブランドと製品を中心とした統一されたAI戦略を構築します。

**SeeedはPicoviceと提携し、開発者向けに[ReSpeaker 4 Mic](https://www.seeedstudio.com/ReSpeaker-4-Mic-Array-for-Raspberry-Pi.html)を使用したエッジでの音声認識ソリューションを提供しています。**

Picovoiceは、あなたの条件で音声製品を構築するためのエンドツーエンドプラットフォームです。AlexaやGoogleに似た音声体験の作成を可能にします。しかし、100%デバイス上で動作します。Picovoiceの利点があります：

- **プライベート**: すべてがオフラインで処理されます。本質的にHIPAAとGDPRに準拠しています。
- **信頼性**: 常時接続を必要とせずに動作します。
- **ゼロレイテンシ**: エッジファーストアーキテクチャが予測不可能なネットワーク遅延を排除します。
- **正確**: ノイズと残響に対して耐性があります。クラウドベースの代替手段を大幅に上回る性能を発揮します。
- **クロスプラットフォーム**: 一度設計すれば、どこでもデプロイできます。馴染みのある言語とフレームワークを使用して構築します。

### ReSpeaker 4-Mic ArrayでのPicovocie入門

**ステップ 1.** 以下の手順を実行する前に、**上記のRaspberry PiでのReSpeaker 4-Mic Arrayのステップバイステップチュートリアル**に従ってください。

**注意:** ReSpeaker 4-Mic Array with Raspberry Piで`Audacity`と`APA102` LEDが正常に動作していることを確認してください。

**ステップ 2.** ターミナルを開き、以下のコマンドを入力して`pyaudio`ドライバをインストールします。

```sh
pip3 install pyaudio
```

**注意**: Raspberry Pi に `pip3` がインストールされていることを確認してください

**ステップ 3.** ターミナルで以下のコマンドを入力して、**ReSpeaker 4-Mic Array 用の Picovoice デモをインストール**します。

```sh
pip3 install pvrespeakerdemo
```

### デモの使用方法

このデモは、Raspberry Pi上のReSpeaker 4-Micアレイを使用し、Picovoice技術でLEDを制御します。**このデモはウェイクワード「`Picovoice`」によってトリガーされ、LEDのオン・オフやLEDの色の変更などの後続アクションを実行する準備が整います。**

インストールが完了したら、ターミナルで次のコマンドを入力してデモを実行します：

```sh
picovoice_respeaker_demo
```

### 音声コマンド

このデモの音声コマンドは以下の通りです：

- **Picovoice**

デモの出力：

```txt
wake word
```

- **ライトをつける**

ライトが点灯し、ターミナルに以下のメッセージが表示されるはずです：

```config
{
    is_understood : 'true',
    intent : 'turnLights',
    slots : {
        'state' : 'on',
    }
}
```

コマンドのリストがターミナルに表示されます：

```config
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

また、次のコマンドで色を変更することもできます：

- **Picovoice、ライトをオレンジに設定して**

ライトを消すには：

- **Picovoice、すべてのライトを消して**

**デモビデオデモンストレーション**

<p style={{textAlign: 'center'}}><iframe width={720} height={480} src="https://www.youtube.com/embed/icTZeMIJAxw" frameBorder={0} allow="accelerometer; encrypted-media;gyroscope; picture-in-picture" allowFullScreen /></p>

### デモソースコード

このデモは **[Picovoice SDK](https://github.com/Picovoice/picovoice)** で構築されています。デモのソースコードは GitHub の [Picovoice Respeaker Demo](https://github.com/Picovoice/picovoice/tree/master/demo/respeaker) で入手できます。

### 異なるウェイクワード

[**Picovoice SDK**](https://github.com/Picovoice/picovoice) には、Apache 2.0 でライセンスされた無料のサンプルウェイクワードが含まれており、主要な音声アシスタント（例：「**`Hey Google`**」、「**`Alexa`**」）や「**`Computer`**」や「**`Jarvis`**」などの楽しいものも含まれています。

### カスタム音声コマンド

照明コマンドは Picovoice の *Speech-to-Intent コンテキスト* によって定義されます。Picovoice Console を使用して許可された文法を入力することで、コンテキストを設計および訓練できます。マイクボタンを使用して編集中にブラウザ内で変更をテストできます。[Picovoice Console](https://picovoice.ai/console/) にアクセスしてアカウントにサインアップしてください。**Rhino Speech-to-Intent エディター** を使用してコンテキストを作成し、Raspberry Pi 用に訓練してください。

<div align="center"><img width ="{700}" src="https://files.seeedstudio.com/wiki/ReSpeaker_4_Mic_Array_for_Raspberry_Pi/respeaker_demo_console_edit.gif"/></div>

### 複数ウェイクワードの例

<p style={{textAlign: 'center'}}><iframe width={720} height={480} src="https://www.youtube.com/embed/Dfn3wBE2pwY" frameBorder={0} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></p>

Picovoice の機能を実証するために、ReSpeaker 4-Mic Array と Raspberry Pi を使用した複数ウェイクワードの例も準備しました！異なるウェイクワードを設定して特定のタスクを実行できます。

*このパッケージには、Porcupine を使用して ReSpeaker 4-mic マイクロフォンアレイ LED を制御するためのコマンドラインデモが含まれています。*

### Porcupine

**Porcupine** は高精度で軽量なウェイクワードエンジンです。常時リスニング音声対応アプリケーションの構築を可能にします。特徴は以下の通りです：

- 実世界環境で訓練された深層ニューラルネットワークを使用。
- コンパクトで計算効率的。IoT に最適。
- クロスプラットフォーム。Raspberry Pi、BeagleBone、Android、iOS、Linux（x86_64）、macOS（x86_64）、Windows（x86_64）、およびウェブブラウザがサポートされています。さらに、エンタープライズ顧客は ARM Cortex-M SDK にアクセスできます。
- スケーラブル。実行時フットプリントを追加することなく、複数の常時リスニング音声コマンドを検出できます。
- セルフサービス。開発者は [Picovoice Console](https://picovoice.ai/console/) を使用してカスタムウェイクワードモデルを訓練できます。

#### 複数ウェイクワード入門

ターミナルで次のコマンドを実行してデモドライバーをインストールします：

```sh
pip3 install ppnrespeakerdemo
```

#### 複数ウェイクワードの使用方法

ドライバーのインストール後、ターミナルで以下を実行してください：

```sh
porcupine_respeaker_demo
```

デモが初期化され、ターミナルに `[Listening]` が表示されるまで待ちます。次のように言ってください：

> Picovoice

デモは以下を出力します：

```text
detected 'Picovoice'
```

ライトが `green` に設定されました。以下のように言ってください：

> Alexa

ライトが `yellow` に設定されました。以下のように言ってください：

> Terminator

ライトを消すには。

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

この例の完全なソースコードはこちらをご覧ください：[Porcupine Respeaker Demo](https://github.com/Picovoice/porcupine/tree/master/demo/respeaker)

### Picovoice技術サポート

Picovoiceの使用中に技術的な問題が発生した場合は、**[Picovoice](https://github.com/Picovoice)**にアクセスしてディスカッションをご覧ください。

## FAQ

**Q1: kws_doa.pyを実行してsnow boyと言っても応答がありません**

A2: Audacityを実行して4つのチャンネルが正常に動作していることを確認してください。データのないチャンネルがある場合、snow boyと言っても応答がありません。

**Q2: "sudo pip install pyaudio"を実行すると#include "portaudio.h"エラーが発生します。**

A3: この問題を解決するには、以下のコマンドを実行してください。

```sh
sudo apt-get install portaudio19-dev
```

**Q3: ...WARNING: memory leak will occur if overlay removed... message in journalctl**

A4: ドライバーが最初にロードされた時（起動後）に、実際に一回限りの小さなメモリ損失が発生します。しかし、これは起動ごとまたはロードごとに発生するものであり、一般的なユーザーは起動ごとに一度だけドライバーをロードする必要があるため、起動ごとに数バイトを失うことは問題になりません。そのため、これは小さな問題であり、起動ごとにメモリ損失に関する心配なメッセージが表示される以外は、実際にユーザーに影響を与える可能性は低いです。

## Resources

- **[PDF]** [ReSpeaker 4-Mic Array for Raspberry Pi(PDF)](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/src/ReSpeaker%204-Mic%20Array%20for%20Raspberry%20Pi%20%20v1.0.pdf)
- **[DXF]** [ReSpeaker 4-Mic Array for Raspberry Pi v1.0](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/src/ReSpeaker%204-Mic%20Array%20for%20Raspberry%20Pi%20v1.0.dxf.zip)
- **[3D]** [ReSpeaker 4-Mic Array for Raspberry Pi v1.0 3D Model](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/src/ReSpeaker%204-Mics%20Pi%20HAT%20v1.0.skp.zip)
- **[AC108]** [AC108 DataSheet](http://www.x-powers.com/en.php/Info/product_detail/article_id/41)
- **[Driver]** [Seeed-Voice Driver](https://github.com/respeaker/seeed-voicecard)
- **[Algorithms]** [DOA、VAD、NSを含むアルゴリズム](https://github.com/respeaker/mic_array)
- **[Voice Engine]** [Voice Engineプロジェクト、音声対応オブジェクトを作成するためのビルディングブロックを提供](https://github.com/voice-engine/voice-engine)
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
