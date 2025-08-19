---
description: Raspberry Pi 用 ReSpeaker 4-Mic Array
title: Raspberry Pi 用 ReSpeaker 4-Mic Array
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ReSpeaker_4_Mic_Array_for_Raspberry_Pi
last_update:
  date: 05/15/2025
  author: jianjing Huang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/overview.jpg)

Raspberry Pi 用 ReSpeaker 4-Mic Array は、AIおよび音声アプリケーション向けに設計された Raspberry Pi 用の4マイク拡張ボードです。これにより、Amazon Alexa Voice Service、Google Assistant などを統合した、より強力で柔軟な音声製品を構築することが可能になります。

[ReSpeaker 2-Mics Pi HAT](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT-p-2874.html)とは異なり、このボードは AC108 をベースに開発されています。AC108 は、I2S/TDM 出力変換を備えた高集積の4チャンネル ADC で、高精度な音声キャプチャを実現します。このデバイスは半径3メートル以内の音を拾うことができます。さらに、この4マイクバージョンには、12個の APA102 プログラム可能 LED を備えた LED リングが搭載されています。この4つのマイクと LED リングを使用することで、Raspberry Pi は VAD（音声活動検出）、DOA（到来方向推定）、KWS（キーワード検索）を実行し、LED リングを通じて方向を表示することが可能になります。これは、Amazon Echo や Google Home のような機能を実現します。

<iframe width="800" height="450" src="https://www.youtube.com/embed/IkSfBSf1IRo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-4-Mic-Array-for-Raspberry-Pi-p-2941.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong></a>
</div>

## 特徴

* Raspberry Pi 互換（Raspberry Pi Zero および Zero W、Raspberry PiB+、Raspberry Pi 2B、Raspberry Pi 3B、Raspberry Pi 3B+、Raspberry Pi3 A+、Raspberry Pi 4B をサポート）
* 4つのマイク
* 半径3メートルの音声キャプチャ
* 2つの Grove インターフェース
* 12個の APA102 ユーザー LED
* ソフトウェアアルゴリズム：VAD（音声活動検出）、DOA（到来方向推定）、KWS（キーワード検索）

注意: Raspberry Pi 用 ReSpeaker 4-Mic Array には音声出力インターフェースがありません。これは音声キャプチャ専用です。音声出力には [Raspberry Pi のヘッドフォンジャック](https://www.raspberrypi.org/documentation/configuration/audio-config.md) を使用できます。

## アプリケーションアイデア

* 音声インタラクションアプリケーション
* AIアシスタント

## ハードウェア概要

![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/features.png)

* MIC: 4つのアナログマイク
* LED: 12個の APA102 プログラム可能 RGB LED、SPI インターフェースに接続
* Raspberry Pi 40ピンヘッダー: Raspberry Pi Zero および Zero W、Raspberry PiB+、Raspberry Pi 2B、Raspberry Pi 3B、Raspberry Pi 3B+、Raspberry Pi3 A+、Raspberry Pi 4 に対応
* AC108: I2S/TDM 出力変換を備えた高集積の4チャンネル ADC
* I2C: Grove I2C ポート、I2C-1 に接続
* GPIO12: Grove デジタルポート、GPIO12 & GPIO13 に接続

注意: APA102 RGB LED を使用する場合は、LED の VCC を有効にするために最初に `GPIO5` に HIGH を書き込む必要があります。

## はじめに

**ReSpeaker 4-Mic Array を Raspberry Pi に接続する**

ReSpeaker 4-Mic Array を Raspberry Pi に取り付けます。ReSpeaker 4-Mic Array を Raspberry Pi に積み重ねる際、ピンが正しく整列していることを確認してください。

注意: ReSpeaker 4-Mic Array のホットプラグは許可されていません。これにより ReSpeaker が損傷する可能性があります。

![接続画像1](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/connect1.jpg)
![接続画像2](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/connect2.jpg)

**ドライバーのインストール**

Raspberry Pi で [最新の Raspberry Pi OS](https://www.raspberrypi.org/downloads/raspbian/) を実行していることを確認してください。 *(2021.06.30 更新)*

* ステップ 1. Seeed voice card のソースコードを取得し、インストールして再起動します。

```
sudo apt-get update
git clone https://github.com/HinTak/seeed-voicecard.git
cd seeed-voicecard
sudo ./install.sh
sudo reboot now
```

* ステップ 2. 次に Raspberry Pi でオーディオ出力を選択します:

```sh
sudo raspi-config
# 1 System options を選択
# S2 Audio を選択
# 希望するオーディオ出力デバイスを選択
# Finish を選択
```

* ステップ 3. サウンドカード名が以下のように表示されることを確認します:

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

`alsa` の設定を変更したい場合は、`sudo alsactl --file=ac108_asound.state store` を使用して保存できます。そして、再度設定を使用する必要がある場合は、以下のコマンドでコピーします: `sudo cp ~/seeed-voicecard/ac108_asound.state /var/lib/alsa/asound.state`

* ステップ 4. Audacity を開き、入力として **AC108 & 4 channels** を選択し、出力として **bcm2835 alsa: - (hw:0:0)** を選択してテストします:

```sh
sudo apt update
sudo apt install audacity
audacity                      // Audacity を実行
```

![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/audacity.png)

* 代替として、Lite Raspbian Pi OS イメージを使用していて GUI がない場合は、`arecord` を使用して録音し、`aplay` を使用して再生できます:

```
sudo apt-get install sox                             // オーディオ変換用
arecord -Dac108 -f S32_LE -r 16000 -c 4 hello.wav    // 4 チャンネルのみ対応
sox hello.wav -c 2 stereo.wav                        // ステレオに変換
aplay stereo.wav                                      // デフォルトデバイスを確認
                                                     // オーディオは Raspberry Pi のオーディオジャックから出力されます
```

## 使用概要

以下の例を実行するには、[https://github.com/respeaker/4mics_hat.git](https://github.com/respeaker/4mics_hat.git) リポジトリを Raspberry Pi にクローンしてください。

```
git clone https://github.com/respeaker/4mics_hat.git
```

以下の例で言及されているすべての Python スクリプトは、このリポジトリ内にあります。必要な依存関係をインストールするには、mic_hat リポジトリフォルダ内で以下を実行してください。

```
sudo apt-get install portaudio19-dev libatlas-base-dev
pip3 install -r requirements.txt
```

**APA102 LED**

各オンボード APA102 LED には追加のドライバーチップが搭載されています。このドライバーチップは、入力ラインを介して希望する色を受信し、新しいコマンドが受信されるまでその色を保持します。

![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/rainbow.jpg)

* ステップ 1. SPI を有効化:

```bash
sudo raspi-config
```

1. 「インターフェイスオプション」を選択
2. 「SPI」を選択
3. SPI を有効化
4. 最後にツールを終了

* ステップ 2. 次に、以下のサンプルコードを実行します。これで、LED が Alexa Assistant のように点滅するのが確認できます。

```bash
python3 interfaces/pixels.py
```

### Python で音声を録音する

Python で音声を録音するために [PyAudio python library](https://people.csail.mit.edu/hubert/pyaudio/) を使用します。

まず、以下のスクリプトを実行して 2 Mic pi hat のデバイスインデックス番号を取得します。

```bash
python3 recording_examples/get_device_index.py
```

以下のようにデバイス ID が表示されます。

```txt
Input Device id  2  -  seeed-4mic-voicecard: - (hw:1,0)
```

音声を録音するには、```recording_examples/record.py``` ファイルを nano または他のテキストエディタで開き、`RESPEAKER_INDEX = 2` をシステム上の ReSpeaker のインデックス番号に変更します。その後、Python スクリプト record.py を実行して録音を行います。

```bash
python3 recording_examples/record.py
```

* ステップ 6. 4 チャンネルからチャンネル 0 のデータを抽出したい場合は、```record_one_channel.py``` の内容を確認してください。他のチャンネル X の場合は、[0::4] を [X::4] に変更してください。

```bash
python3 recording_examples/record_one_channel.py
```

録音したサンプルを再生するには、aplay システムユーティリティを使用できます。例えば以下のようにします。

```bash
aplay -f cd -Dhw:0 output.wav # ステレオ音声の場合
aplay -D plughw:0,0 output_one_channel.wav # 1 チャンネルのモノラル音声の場合
```

## リアルタイム音源定位と追跡

[ODAS](https://github.com/introlab/odas) は Open embeddeD Audition System の略で、音源定位、追跡、分離、ポストフィルタリングを実行するためのライブラリです。

* ステップ 1. [ODAS](https://github.com/introlab/odas.git) を取得してビルドします。

実行可能ファイルは bin ディレクトリに生成されます。

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

* ステップ 2. [ODAS Studio](https://github.com/introlab/odas_web) を取得して実行します。

nodejs v12.22 と npm 6.14 をインストールします。

```bash
sudo apt update
sudo apt -y install curl dirmngr apt-transport-https lsb-release ca-certificates
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
```

関連するコンパイルツールがインストールされていることを確認します。

```bash
sudo apt -y install gcc g++ make
sudo apt -y install nodejs
```

npm を使用して odas_web の依存関係をインストールします。

```bash
cd ~/Desktop
git clone https://github.com/introlab/odas_web
cd odas_web
npm install
```

再ビルドを避けるために関連する依存モジュールをインストールすることが目的なので、再ビルド中のエラーは無視できます。その後、npm start を実行します。

```bash
npm start
```

または、古い election-rebuild モジュールをビルドするために Python を 2.7 にダウングレードすることもできます。（このステップは必須ではありません）

```bash
sudo apt remove python3 -y
sudo apt install python2 -y
```

* ステップ 3. odascore は **~/Desktop/odas/build/bin/odaslive** にあり、設定ファイルは **~/Desktop/odas/config/odaslive/respeaker_4_mic_array.cfg** にあります。

設定を変更してサウンドカードをデバイスに指定する必要があります。

```bash
arecord -l  # このコマンドを入力して、arecord がインストールされていることを確認
```

以下のような出力が表示されます。

```bash
pi@raspberrypi:~/Desktop/odas/config/odaslive $ arecord -l
**** List of CAPTURE Hardware Devices ****
card 3: seeed4micvoicec [seeed-4mic-voicecard], device 0: bcm2835-i2s-ac10x-codec0 ac10x-codec0-0 [bcm2835-i2s-ac10x-codec0 ac10x-codec0-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

cfg 設定ファイルの 18 行目でサウンドカードの指定を変更します。

```bash
vim ~/Desktop/odas/config/odaslive/respeaker_4_mic_array.cfg
# 次に :18 を入力
# Enter を押す
# i を押す
# card = YOUR CARD ; を変更 # "arecord -l" で見つけたカード番号を入力
# 私の場合は
# card = 3 ;
# 次に :wq を入力 # 設定ファイルを保存
```

その後、odas の Web インターフェースを開き、**Local System Monitor** インターフェースでシステムモニタリングデータを確認し、**ODAS Control** インターフェースで制御カーネルと設定ファイルを選択して読み込みます。

odas Web GUI を開始するには以下を実行します。

```bash
cd ~/Desktop/odas_web
npm start
```

**ODAS Core** の空白部分をクリックしてファイルブラウザを開き、コアパスを "~/Desktop/odas/build/bin/odaslive" に設定します。

**ODAS Config** の空白部分をクリックしてファイルブラウザを開き、設定パスを "~/Desktop/odas/config/odaslive/respeaker_4_mic_array.cfg" に設定します。

正しく設定されると以下のようになります。

![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/odas.png)

## エッジでの音声認識を Picovoice で実現

<div align="center"><img width ="{700}" src="https://files.seeedstudio.com/wiki/ReSpeaker_4_Mic_Array_for_Raspberry_Pi/banner.gif"/></div>

[**Picovoice**](https://picovoice.ai/) は、**プライベート音声 AI を使用して企業が迅速に革新し、差別化を図ることを可能にします**。音声認識および[**自然言語理解 (NLU) 技術**](https://searchenterpriseai.techtarget.com/definition/natural-language-understanding-NLU)を活用して、ブランドや製品に基づいた統一的な AI 戦略を構築できます。

**Seeed は Picovoice と提携し、開発者向けに [ReSpeaker 4 Mic](https://www.seeedstudio.com/ReSpeaker-4-Mic-Array-for-Raspberry-Pi.html) を使用したエッジでの音声認識ソリューションを提供します。**

Picovoice は、ユーザーの条件に基づいて音声製品を構築するためのエンドツーエンドプラットフォームです。Alexa や Google に似た音声体験を作成できますが、完全にデバイス上で 100% 実行されます。Picovoice の利点は以下の通りです：

* **プライバシー保護**: すべてがオフラインで処理されます。HIPAA および GDPR に本質的に準拠しています。
* **信頼性**: 常時接続を必要とせずに動作します。
* **ゼロレイテンシー**: エッジ優先のアーキテクチャにより、予測不可能なネットワーク遅延を排除します。
* **高精度**: ノイズや反響に強く、クラウドベースの代替手段を大幅に上回る性能を発揮します。
* **クロスプラットフォーム**: 一度設計すれば、どこにでも展開可能です。馴染みのある言語やフレームワークを使用して構築できます。

### ReSpeaker 4-Mic Array と Picovoice の導入手順

**ステップ 1.** **Raspberry Pi と ReSpeaker 4-Mic Array の上記チュートリアル**を完了してください。

**注意:** ReSpeaker 4-Mic Array が Raspberry Pi 上で `Audacity` と `APA102` LED が正常に動作していることを確認してください。

**ステップ 2.** ターミナルを開き、以下のコマンドを入力して `pyaudio` ドライバーをインストールします。

```sh
pip3 install pyaudio
```

**注意:** Raspberry Pi に `pip3` がインストールされていることを確認してください。

**ステップ 3.** ターミナルで以下のコマンドを入力して、**ReSpeaker 4-Mic Array 用 Picovoice デモ**をインストールします。

```sh
pip3 install pvrespeakerdemo
```

### デモの使用方法

このデモは、Raspberry Pi 上の ReSpeaker 4-Mic Array を使用し、Picovoice 技術を活用して LED を制御します。**このデモはウェイクワード "`Picovoice`" によってトリガーされ、その後、LED のオン/オフや色の変更などのアクションを実行します。**

インストールが完了したら、以下のコマンドをターミナルで実行してデモを開始します：

```sh
picovoice_respeaker_demo
```

### 音声コマンド

このデモで使用できる音声コマンドは以下の通りです：

* **Picovoice**

デモの出力：

```txt
wake word
```

* **Turn on the lights**

ライトが点灯し、ターミナルに以下のメッセージが表示されます：

```config
{
    is_understood : 'true',
    intent : 'turnLights',
    slots : {
        'state' : 'on',
    }
}
```

ターミナルにはコマンドリストが表示されます：

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

また、以下のコマンドで色を変更できます：

* **Picovoice, set the lights to orange**

ライトを消灯するには：

* **Picovoice, turn off all lights**

**デモ動画の紹介**

<p style={{textAlign: 'center'}}><iframe width={720} height={480} src="https://www.youtube.com/embed/icTZeMIJAxw" frameBorder={0} allow="accelerometer; encrypted-media;gyroscope; picture-in-picture" allowFullScreen /></p>

### デモのソースコード

このデモは **[Picovoice SDK](https://github.com/Picovoice/picovoice)** を使用して構築されています。デモのソースコードは GitHub で公開されています：[https://github.com/Picovoice/picovoice/tree/master/demo/respeaker](https://github.com/Picovoice/picovoice/tree/master/demo/respeaker)

### 異なるウェイクワード

[**Picovoice SDK**](https://github.com/Picovoice/picovoice) には、Apache 2.0 ライセンスの下で提供される無料のサンプルウェイクワードが含まれています。これには、主要な音声アシスタント（例： "**`Hey Google`**", "**`Alexa`**"）や "**`Computer`**", "**`Jarvis`**" のような楽しいものも含まれます。

### カスタム音声コマンド

照明コマンドは Picovoice の *Speech-to-Intent context* によって定義されています。Picovoice Console を使用して許可される文法を入力することで、コンテキストを設計およびトレーニングできます。編集中にマイクボタンを使用してブラウザ内で変更をテストできます。Picovoice Console ([https://picovoice.ai/console/](https://picovoice.ai/console/)) にアクセスしてアカウントを作成してください。**Rhino Speech-to-Intent エディタ**を使用してコンテキストを作成し、それを Raspberry Pi 用にトレーニングします。

<div align="center"><img width ="{700}" src="https://files.seeedstudio.com/wiki/ReSpeaker_4_Mic_Array_for_Raspberry_Pi/respeaker_demo_console_edit.gif"/></div>

### 複数のウェイクワード例

<p style={{textAlign: 'center'}}><iframe width={720} height={480} src="https://www.youtube.com/embed/Dfn3wBE2pwY" frameBorder={0} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></p>

Picovoice の能力を示すために、Raspberry Pi と ReSpeaker 4-Mic Array を使用した複数のウェイクワード例も用意しています！異なるウェイクワードを設定して特定のタスクを実行できます。

*このパッケージには、Porcupine を使用して ReSpeaker 4-Mic マイクアレイの LED を制御するコマンドラインデモが含まれています。*

### Porcupine

**Porcupine** は非常に高精度で軽量なウェイクワードエンジンです。常時リスニングの音声対応アプリケーションを構築することが可能です。以下の特徴があります：

* 実環境でトレーニングされた深層ニューラルネットワークを使用。
* コンパクトで計算効率が高く、IoT に最適。
* クロスプラットフォーム対応。Raspberry Pi、BeagleBone、Android、iOS、Linux (x86_64)、macOS (x86_64)、Windows (x86_64)、およびウェブブラウザをサポート。さらに、企業顧客には ARM Cortex-M SDK へのアクセスも提供。
* スケーラブル。複数の常時リスニング音声コマンドを追加のランタイム負荷なしで検出可能。
* セルフサービス。開発者は [Picovoice Console](https://picovoice.ai/console/) を使用してカスタムウェイクワードモデルをトレーニング可能。

#### マルチウェイクワードの開始方法

以下のコマンドをターミナルで実行してデモドライバをインストールします：

```sh
pip3 install ppnrespeakerdemo
```

#### マルチウェイクワードの使用方法

ドライバをインストールした後、以下をターミナルで実行します：

```sh
porcupine_respeaker_demo
```

デモが初期化され、ターミナルに `[Listening]` と表示されるのを待ちます。その後、以下を発話してください：

> Picovoice

デモは以下を出力します：

```text
detected 'Picovoice'
```

ライトが `緑` に設定されます。その後、以下を発話してください：

> Alexa

ライトが `黄色` に設定されます。その後、以下を発話してください：

> Terminator

これでライトが消灯します。

#### ウェイクワードと色の対応

このデモでサポートされているウェイクワードに対応する色は以下の通りです：

* ![#ffff33](https://via.placeholder.com/15/ffff33/000000?text=+) `Alexa`
* ![#ff8000](https://via.placeholder.com/15/ff8000/000000?text=+) `Bumblebee`
* ![#ffffff](https://via.placeholder.com/15/ffffff/000000?text=+) `Computer`
* ![#ff0000](https://via.placeholder.com/15/ff0000/000000?text=+) `Hey Google`
* ![#800080](https://via.placeholder.com/15/800080/000000?text=+) `Hey Siri`
* ![#ff3399](https://via.placeholder.com/15/ff3399/000000?text=+) `Jarvis`
* ![#00ff00](https://via.placeholder.com/15/00ff00/000000?text=+) `Picovoice`
* ![#0000ff](https://via.placeholder.com/15/0000ff/000000?text=+) `Porcupine`
* ![#000000](https://via.placeholder.com/15/000000/000000?text=+) `Terminator`

#### マルチウェイクワードの例のソースコード

この例の完全なソースコードは以下をご覧ください：[https://github.com/Picovoice/porcupine/tree/master/demo/respeaker](https://github.com/Picovoice/porcupine/tree/master/demo/respeaker)。

### Picovoice テクニカルサポート

Picovoice の使用中に技術的な問題が発生した場合は、**[Picovoice](https://github.com/Picovoice)** のディスカッションをご覧ください。

## FAQ

**Q1: `kws_doa.py` を実行して "snow boy" と言っても反応がありません**

A2: Audacity を実行して、4 チャンネルが正常であることを確認してください。1 つのチャンネルにデータがない場合、"snow boy" と言っても反応がありません。

**Q2: `#include "portaudio.h"` エラーが "sudo pip install pyaudio" 実行時に発生します。**

A3: 以下のコマンドを実行して問題を解決してください：

```sh
sudo apt-get install portaudio19-dev
```

**Q3: `...WARNING: memory leak will occur if overlay removed...` というメッセージが `journalctl` に表示されます**

A4: ドライバが初めてロードされた際（起動後）に、実際に小さなメモリリークが発生します。ただし、これは起動ごとまたはロードごとの一度限りのものであり、通常のユーザーは起動ごとにドライバを一度だけロードするため、数バイトのメモリ損失は問題になりません。このため、実際の使用においてユーザーに影響を与えることはほとんどなく、起動ごとにメモリ損失に関する警告メッセージが表示されるだけです。

## リソース

* **[PDF]** [ReSpeaker 4-Mic Array for Raspberry Pi(PDF)](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/src/ReSpeaker%204-Mic%20Array%20for%20Raspberry%20Pi%20%20v1.0.pdf)
* **[DXF]** [ReSpeaker 4-Mic Array for Raspberry Pi v1.0](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/src/ReSpeaker%204-Mic%20Array%20for%20Raspberry%20Pi%20v1.0.dxf.zip)
* **[3D]** [ReSpeaker 4-Mic Array for Raspberry Pi v1.0 3D Model](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/src/ReSpeaker%204-Mics%20Pi%20HAT%20v1.0.skp.zip)
* **[AC108]** [AC108 DataSheet](http://www.x-powers.com/en.php/Info/product_detail/article_id/41)
* **[Driver]** [Seeed-Voice Driver](https://github.com/respeaker/seeed-voicecard)
* **[Algorithms]** [DOA、VAD、NS を含むアルゴリズム](https://github.com/respeaker/mic_array)
* **[Voice Engine]** [音声対応オブジェクトを作成するためのビルディングブロックを提供する Voice Engine プロジェクト](https://github.com/voice-engine/voice-engine)
* **[Algorithms]** [AEC](https://github.com/voice-engine/ec)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、できる限りスムーズな体験を提供するため、さまざまなサポートを提供しております。お客様の好みやニーズに合わせた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>