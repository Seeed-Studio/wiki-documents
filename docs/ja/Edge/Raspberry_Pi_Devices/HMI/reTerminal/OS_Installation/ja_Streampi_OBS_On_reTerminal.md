---
description: Stream-pi & OBS studio を reTerminal で使用する方法
title: Stream-pi & OBS studio を reTerminal で使用する方法
keywords:
  - Edge
  - reTerminal OS_インストール
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Streampi_OBS_On_reTerminal
last_update:
  date: 05/15/2025
  author: jianjing Huang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Seeed reTerminal を使用した OBS Studio 制御と便利なコントロールのための streampi

## はじめに

### reTerminal とは 🤔

[reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) は、Raspberry Pi Compute Module 4 (CM4) モジュールを搭載したオールインワンボードで、IPSパネルタイプのマルチタッチスクリーンを統合し、デュアルバンド2.4GHz/5GHz Wi-Fi & Bluetooth 5.0を備えています。Raspberry PiベースのLinuxシステムがプリインストールされており、4GB RAMと32GB eMMCのストレージを提供します。モジュール化設計により、複数のアクセス可能なコンポーネントと高速コネクタを備えています。家庭用アシスタントや個人のAI開発アプリケーションに適しており、産業レベルの機能を備えた工業施設としても利用できます。

特徴

- Raspberry Pi オールインワンボード: RPi CM4 32GB 搭載、IPSマルチタッチスクリーン、デュアルバンドWi-Fi & Bluetooth、互換性のあるLinuxシステムがプリインストール

- モジュール設計: 産業用高速拡張インターフェースと40ピン Raspberry Pi 互換ヘッダーを備える

- 豊富なインターフェースとコンポーネント: USB Type-Aポート、ギガビットイーサネット、micro-HDMI、micro-SDカードスロット、MIPIカメラインターフェース、光センサー、加速度計、ブザー、RTC、プログラム可能なボタンを装備

- 個人アシスタントとしての活用: 内蔵センサーとコンポーネントを活用し、Seeedやコミュニティによる複数の興味深いDashboardやAIプロジェクトを楽しむ

- 優れた産業施設: 安定したRaspberry Piベースのオペレーティングシステム、複数の拡張産業レベルコネクタ、暗号化コプロセッサ、公式Seeed拡張ボード reTerminal E10-1 を活用

### streampi とは 🤔

Stream-Pi は、アーティスト、クリエイター、ゲーマー、そして技術愛好家のための堅牢なマクロキーボードソフトウェアです。

Stream-Pi は適切なオープンソースの代替手段として存在し、CSSを使用してUIシステムの隅々まで個別にカスタマイズできる豊富なテーマシステムを提供します。

さらに、Stream-Pi は豊富なAPIを提供しており、開発者が独自のカスタムプラグインを作成することができます。これは現在利用可能な有料および独占的なオプションと同様です。大きな違いは、Stream-Pi が完全に無料でオープンソースであることです！

### OBS Studio とは 🤔

OBS Studio は、スクリーンキャストとライブストリーミングのための無料かつオープンソースのアプリです。C/C++で記述され、Qtで構築されたOBS Studioは、リアルタイムキャプチャ、シーン構成、録画、エンコード、そしてリアルタイムメッセージングプロトコル（RTMP）を介した放送を提供します。YouTube、Twitch、Instagram、Facebookなど、RTMPをサポートする任意の宛先に動画をストリームすることができます。

### なぜこれを行うのか 🤨

reTerminal の内蔵ディスプレイ、優れた性能、そしてRaspberry Pi関連エコシステムのサポートにより、生産性ツールとしてのインテリジェントで便利なコントロールを簡単に実現できることが分かりました。

それでは、一緒に試してみましょう！ 😊

## インストール 🐱‍🚀

- ハードウェア準備
  - reTerminal
  - PC

本チュートリアルは安定性を考慮し、Ubuntu 18.04 を基準としていますが、Windows、Mac、その他のLinuxディストリビューションでも利用可能です。

### OBS Studio のインストール ⌛

これには2つの方法があります。事前にビルドされたパッケージを使用する方法と、自分でコンパイルする方法です。**推奨される方法は、テスト済みで常に利用可能な事前ビルドパッケージを使用することです**。最新機能を試したい場合は、公式のOBSコンパイルプロセスに従うことができますが、多数のパッケージに依存するため、予期しない問題が発生する可能性があります。

#### 事前ビルドパッケージを使用する場合

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

### OBS Studio 用 WebSocket プラグインのインストール

```bash
wget https://github.com/obsproject/obs-websocket/releases/download/4.9.0/obs-websocket_4.9.0-1_amd64.deb
```

```bash
sudo apt update 
sudo apt install ./obs-websocket_4.9.0-1_amd64.deb
sudo apt install -f
```

### Stream Pi サーバーのインストール（PC上で）

[推奨バージョン](https://github.com/stream-pi/server/releases/tag/2.0.0-SNAPSHOT)

```bash
wget https://github.com/stream-pi/server/releases/download/2.0.0-SNAPSHOT/stream-pi-server-linux-x64-2.0.0-SNAPSHOT.deb
```

```bash
sudo apt install ./stream-pi-server-linux-x64-2.0.0-SNAPSHOT.deb
```

### Stream Pi クライアントのインストール（reTerminal上で）

[推奨バージョン](https://github.com/stream-pi/client/releases/tag/2.0.0-SNAPSHOT)

```bash
wget https://github.com/stream-pi/server/releases/download/2.0.0-SNAPSHOT/stream-pi-server-linux-aarch64-2.0.0-SNAPSHOT-executable.zip
```

```bash
mkdir Stream_pi_client 
unzip stream-pi-server-linux-aarch64-2.0.0-SNAPSHOT-executable.zip -d Stream_pi_client
```

## Stream Pi クライアント-サーバー間の相互作用

### サービスの起動

reTerminal上で

```bash
cd Stream_pi_client
./run_desktop
```

PC上（Ubuntu）

アイコンをクリックするだけです。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/01.jpg"/></div>

### 機能の定義 😏

1. Stream Pi サーバーを開く

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/02.jpg"/></div>

2. ファイル -> 設定 -> 一般 をクリック

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/03.jpg"/></div>

3. Stream Pi サーバーアドレス、ボックスサイズを設定し、保存をクリック

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/04.jpg"/></div>

4. OBS サービスへの接続

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/06.jpg"/></div>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/05.jpg"/></div>

5. ReTerminal クライアントでサーバーアドレスをPCのIPアドレスとして設定し、保存と接続をクリック

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/09.jpg"/></div>

6. Stream Pi サーバーに戻り、対応するタブを対応するボックスにドラッグして、対応する機能を実現

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/07.jpg"/></div>

7. コマンドを直接記述してプログラム呼び出しを実装したり、表示アイコンを変更したり、表示名やボックスサイズを変更して、さらに多くの機能を実現可能

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/11.jpg"/></div>

8. OBS Studio ソフトウェアに画面ビューと対応する画像ソースを追加

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/08.jpg"/></div>

9. 最後に ReTerminal をクリックして対応する制御を完了 👍👍👍

    - ReTerminal 上のインターフェース

    <div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/10.jpg"/></div>

    - PC 上のインターフェース

    <div align="center"><video width={500} controls><source src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/demo.mkv"/></video></div>

    - reTerminal の外観

    <div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/12.jpg"/></div>

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただきありがとうございます！製品をご利用いただく際に、できる限りスムーズな体験を提供するために、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>