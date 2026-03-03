---
description: reTerminal用のStream-pi & OBS studio
title: reTerminal用のStream-pi & OBS studio
keywords:
  - Edge
  - reTerminal OS_Installation
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Streampi_OBS_On_reTerminal
last_update:
  date: 2/1/2023
  author: jianjing Huang
---


# Seeed reTerminalとstreampiを使用したOBS Studioの制御と便利な操作

## はじめに

### reTerminalとは 🤔

[reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html)は、Raspberry Pi Compute Module 4（CM4）モジュールを搭載したRaspberry Pi一体型ボードです。IPSパネル型マルチタッチスクリーンを統合し、デュアルバンド2.4GHz/5GHz Wi-Fi & Bluetooth 5.0を搭載し、Raspberry PiベースのLinuxシステムがプリインストールされ、4GB RAMと32GB eMMCストレージを提供します。モジュール化設計により、ボードには複数のアクセス可能なコンポーネントと高速コネクタが装備されています。ホームアシスタンスや個人AI開発アプリケーションに適用でき、産業レベルの機能も実行して産業設備として適しています。

特徴

- Raspberry Pi一体型ボード：RPi CM4 32GBを搭載し、IPSマルチタッチスクリーン、デュアルバンドWi-Fi & Bluetooth、互換性のあるLinuxシステムがプリインストール

- モジュラー設計：産業用高速拡張インターフェースと40ピンRaspberry Pi互換ヘッダーを搭載

- 豊富なインターフェースとコンポーネント：USB Type-Aポート、ギガビットイーサネット、micro-HDMI、micro-SDカードスロット、MIPIカメラインターフェース、光センサー、加速度計、ブザー、RTC、プログラマブルボタンを装備

- 便利な個人アシスタント：内蔵センサーとコンポーネントを活用しながら、Seeedとコミュニティによる複数の興味深いダッシュボードやAIプロジェクトをお楽しみください

- 優れた産業設備：安定したRaspberry Piベースのオペレーティングシステム、複数の拡張産業レベルコネクタ、暗号化コプロセッサー、および公式Seeed拡張ボードreTerminal E10-1の恩恵を受けます

### streampiとは 🤔

Stream-Piは、アーティスト、クリエイター、ゲーマー、ギークのための堅牢なマクロキーボードソフトウェアです。

Stream-Piは、ユーザーがCSSでUIシステムの隅々まで個人化できる豊富なテーマシステムを提供する、適切なオープンソース代替品として存在します。

Stream-Piは豊富なAPIも提供しており、開発者はこれを使用して独自のカスタムプラグインを作成できます - 現在利用可能な有料で独占的なオプションと同様です。ここでの大きな違いは、Stream-Piが完全に無料でオープンソースであることです！

### OBS Studioとは 🤔

OBS Studioは、スクリーンキャストとライブストリーミング用の無料でオープンソースのアプリです。C/C++で書かれ、Qtで構築されたOBS Studioは、リアルタイムキャプチャ、シーン構成、録画、エンコード、およびReal Time Messaging Protocol（RTMP）を介したブロードキャストを提供します。YouTube、Twitch、Instagram、FacebookなどのRTMPをサポートする任意の宛先にビデオをストリーミングできます。

### なぜこれを行うのか 🤨

reterminalの内蔵ディスプレイ、優れた性能、Raspberry Pi関連エコシステムのサポートにより、生産性ツールとしてインテリジェントで便利な制御を簡単に実装できることがわかりました。

それでは、私たちと一緒に試してみましょう！😊

## インストール 🐱‍🚀

- ハードウェアの準備
  - reTerminal
  - PC

チュートリアルを安定させるため、ubuntu 18.04をベースにしていますが、windows、mac、その他のlinuxディストリビューションなど他のシステムでも利用可能です。

### OBS studioのインストール ⌛

これを行う方法は2つあります。事前にビルドされたパッケージを使用するか、自分でコンパイルするかです。**推奨される方法は事前にビルドされたパッケージを使用すること**で、これはテスト済みで常に利用可能です。最新機能を試したい場合は、公式のobsコンパイルプロセスに従うことができますが、多数のパッケージへの依存関係により予期しない問題が発生する可能性があります。

#### 事前コンパイル済みパッケージの使用

```bash
sudo apt update 
sudo apt install wget git 
```

```bash
wget https://github.com/obsproject/obs-studio/releases/download/27.2.4/obs-studio_27.2.4-0obsproject1.bionic_amd64.deb
sudo apt install ./obs-studio_27.2.4-0obsproject1.bionic_amd64.deb
sudo apt install -f
```

#### カスタムOBS

```bash
sudo apt install build-essential checkinstall cmake git libmbedtls-dev libasound2-dev libavcodec-dev libavdevice-dev libavfilter-dev libavformat-dev libavutil-dev libcurl4-openssl-dev libfontconfig1-dev libfreetype6-dev libgl1-mesa-dev libjack-jackd2-dev libjansson-dev libluajit-5.1-dev libpulse-dev libqt5x11extras5-dev libspeexdsp-dev libswresample-dev libswscale-dev libudev-dev libv4l-dev libvlc-dev libx11-dev libx11-xcb1 libx11-xcb-dev libxcb-xinput0 libxcb-xinput-dev libxcb-randr0 libxcb-randr0-dev libxcb-xfixes0 libxcb-xfixes0-dev libx264-dev libxcb-shm0-dev libxcb-xinerama0-dev libxcomposite-dev libxinerama-dev pkg-config python3-dev qtbase5-dev libqt5svg5-dev swig libwayland-dev qtbase5-private-dev libpci-dev
```

```bash
git clone https://github.com/obsproject/obs-studio.git -b release/27.2 obs_27.2
cd obs-studio
git submodule update --init --recursive
```

```bash
mkdir build
cd build
cmake -DBUILD_BROWSER=OFF ..
```

### OBS studio用websocketプラグインのインストール

```bash
wget https://github.com/obsproject/obs-websocket/releases/download/4.9.0/obs-websocket_4.9.0-1_amd64.deb
```

```bash
sudo apt update 
sudo apt install ./obs-websocket_4.9.0-1_amd64.deb
sudo apt install -f
```

### Stream Pi サーバーのインストール（ここではPC上で）

[推奨バージョン](https://github.com/stream-pi/server/releases/tag/2.0.0-SNAPSHOT)

```bash
wget https://github.com/stream-pi/server/releases/download/2.0.0-SNAPSHOT/stream-pi-server-linux-x64-2.0.0-SNAPSHOT.deb
```

```bash
sudo apt install ./stream-pi-server-linux-x64-2.0.0-SNAPSHOT.deb
```

### stream pi クライアントのインストール（reTerminal での例）

[推奨バージョン](https://github.com/stream-pi/client/releases/tag/2.0.0-SNAPSHOT)

```bash
wget https://github.com/stream-pi/server/releases/download/2.0.0-SNAPSHOT/stream-pi-server-linux-aarch64-2.0.0-SNAPSHOT-executable.zip
```

```bash
mkdir Stream_pi_client 
unzip stream-pi-server-linux-aarch64-2.0.0-SNAPSHOT-executable.zip -d Stream_pi_client
```

## streampiクライアント-サーバー間の相互作用

### サービスの起動

reTerminal上で

```bash
cd Stream_pi_client
./run_desktop
```

PC（Ubuntu）上で

アイコンをクリックするだけです

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/01.jpg"/></div>

### 機能を定義する 😏

1. streampi serverを開く

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/02.jpg"/></div>

2. file -> setting -> generalをクリック

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/03.jpg"/></div>

3. streampi serverアドレス、ボックスサイズを設定し、saveをクリック

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/04.jpg"/></div>

4. obsサービスに接続

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/06.jpg"/></div>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/05.jpg"/></div>

5. reterminalクライアントで、サーバーアドレスをPCのIPアドレスとして設定し、saveとconnectをクリック。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/09.jpg"/></div>

6. streampi serverに戻り、対応するタブを対応するボックスにドラッグして、対応する機能を実現

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/07.jpg"/></div>

7. コマンドを直接記述してプログラム呼び出しを実装し、表示アイコンの変更、表示名の変更、ボックスサイズの変更などを行い、より多くの機能を実現することもできます

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/11.jpg"/></div>

8. obs studioソフトウェアにスクリーンビューと対応する画像ソースを追加

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/08.jpg"/></div>

9. 最後に、reterminalをクリックして対応する制御を完了できます 👍👍👍

    - これはReTerminalで表示されるインターフェースです

    <div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/10.jpg"/></div>

    - これはPCで表示されるインターフェースです

    <div align="center"><video width={500} controls><source src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/demo.mkv"/></video></div>

    - reTerminalの外観

    <div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/12.jpg"/></div>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
