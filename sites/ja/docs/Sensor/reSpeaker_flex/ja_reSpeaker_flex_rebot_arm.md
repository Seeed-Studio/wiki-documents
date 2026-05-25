---
description: このドキュメントでは、ゼロから手取り足取り、「聞いて動く」インテリジェントロボットアームシステムを構築する方法を解説します。ロボットアームやハードウェア開発に触れたことがなくても、手順どおりに進めれば、このプロジェクトを問題なく再現できます！
title: reSpeaker Flex を使って音声で reBot Arm を制御する
keywords:
  - reSpeaker
  - python
  - reBot Arm
  - DOA
  - groq
image: https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Circular-4.jpg
slug: /control_rebot_arm_using_voice_with_respeaker_flex
sku: 114993700
last_update:
  date: 5/22/2026
  author: wuxinrui
createdAt: '2026-05-22'
updatedAt: '2026-05-22'
url: https://wiki.seeedstudio.com/ja/control_rebot_arm_using_voice_with_respeaker_flex/
---


# reSpeaker Flex を使って音声で reBot Arm を制御する

>

> このドキュメントでは、ゼロから手取り足取り、「聞いて動く」インテリジェントロボットアームシステムを構築する方法を解説します。ロボットアームやハードウェア開発に触れたことがなくても、手順どおりに進めれば、このプロジェクトを問題なく再現できます！

## 必要なハードウェア

<table align="center">
  <tr>
    <th>reSpeaker Flex XVF3800 Circular</th>
    <th>reBot Arm B601-DM</th>

  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Circular-4withXIAOESP32S3.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/img_v3_0210p_67d75fe6-a1fe-40a9-b025-ac92efb1bbbg_1.jpg" style={{width:500, height:'auto'}}/></div></td>

  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Circular-4-p-6737.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
</table>

## 1. プロジェクト概要

### 1.1 このプロジェクトとは？

このプロジェクトは、**音声駆動型インテリジェントロボットアーム制御システム**です。次のようなシーンを想像してみてください：

>🎬**シナリオデモ**

> テーブルの上のロボットアームに「hello」と話しかけると、ロボットアームはすぐにあなたの方向へ向きを変え、人のようにうなずきます。「dance」と言うと、楽しそうに体を揺らします。部屋の反対側に移動して手を叩くと、その音の方向をすぐに「聞き取り」、あなたの方へ向きを変えます——これが、これから一緒に作るインテリジェントロボットです！

まとめると、このシステムは次の3つのことを行います：

1. **聞く** - マイクアレイであなたの声を収音し、音がどの方向から来ているかも判定する

2. **理解する** - AI によってあなたの発話を認識し、意図を理解する

3. **動く** - ロボットアームを制御して、対応する動作（回転、うなずき、ダンス、手を振る など）を行う

### **1.2 2つのインタラクションモード**

本システムには、用途に応じて選べる2つのコア動作モードがあります：

| モード | 名称 | インタラクション | 想定シーン |
|-----|-----|-----|-----|
| モード1 | **DOA 音源追跡** | 自動的に音の方向を検出して向きを変える | 展示会デモ、インタラクティブ装置 |
| モード2 | **音声コマンド制御** | Enter を長押しして制御 | 音声アシスタント、授業デモ |

### 1.3 システムはどのように動作する？

システム全体のアーキテクチャを、できるだけ平易な言葉で説明すると次のようになります：

```
You speak / make a sound
      ↓
[ reSpeaker Flex ] —— An array composed of 4 "ears" can hear and determine the direction of sound.
      ↓
[ Ubuntu ] —— 
      ↓
   There are two paths:
   ├─→ DOA Mode: Locally directly calculate the sound direction → Control the robotic arm to turn
   └─→ Voice mode: Upload to cloud AI for recognition → Understand your intention → Control the movement of the robotic arm
      ↓
[ reBot Arm ] —— An arm composed of 7 "joints" performs various actions.
```

より専門的なアーキテクチャ図は、次のように説明できます：

**ハードウェア層**（実際に手で触れられるデバイス）：

- reSpeaker Flex（4 マイクアレイ + XIAO ESP32S3 コントローラ）  

- reBot Arm B601-DM（6 自由度マニピュレータ）  

- Ubuntu 22.04 コンピュータ（メインプログラムを実行）  

**ドライバ層**（ハードウェア同士の通信を可能にする部分）：

- USB オーディオ通信（pyusb/libusb）- マイクアレイを接続  

- シリアル通信（MotorBridge）- ロボットアームを接続  

- Web API（Groq Cloud）- クラウド AI サービスに接続  

**アルゴリズム層**（データを処理する「頭脳」）：

- DOA 音源定位（ローカルでリアルタイム計算）

- Whisper 音声認識（Groq Cloud）

- Llama-3.3 意図理解（Groq Cloud）

- モーション補間プランニング（ローカルでのスムーズな制御）

**アプリケーション層**（実際に目に見える効果）：

- DOA 追跡モード、音声制御モード、ブリージング待機アニメーション、音声読み上げ

---

## 2. ハードウェアの準備

### 2.1 何を用意する必要がありますか？

始める前に、以下のハードウェアがすべてそろっていることを確認してください。こうした種類のプロジェクトに初めて触れる場合は、互換性の問題を避けるため、完成キットをまとめて購入することをおすすめします。

| コンポーネント | 型番 | 数量 | おおよその役割 | 購入のおすすめ |
|-----|-----|-----|-----|-----|
| ロボットアーム | reBot Arm B601-DM | 1 セット | 動作を行う「本体」 | Seeed Studio 公式 |
| マイクアレイ | reSpeaker Flex XVF3800 | 1 | 音を聞き取り、方向を判定 | Seeed Studio 公式 |
| マスタ PC | Ubuntu 22.04 PC | 1 | プログラムの「頭脳」を実行 | x86_64 アーキテクチャ |
| USB ケーブル | USB-A to USB-C | 2 | デバイス同士の接続 | 一般的にデバイスに同梱 |
| 木工用クランプ | 3 インチ以上 | 2 | ロボットアームのベース固定 | 金物店 または セットに同梱 |
| 電源 | 24V 15A（XT30 インターフェース） | 1 | ロボットアームへの電源供給 | 一般的にキットに同梱 |

### 2.2 各ハードウェアの簡単な紹介

#### 2.2.1 reBot Arm B601-DM アーム

これはデスクトップ向けのロボットアームで、**7 つの「関節」**（専門的には 7 自由度）を持ち、人間の腕のようにさまざまな柔軟な動きを行うことができます。

**関節の説明**（上から下へ）：

| 関節 | わかりやすい呼び方 | 何ができるか | 可動範囲 |
|-----|-----|-----|-----|
| J1 | 腰（ベース回転） | 体全体を左右に回転 | ±149° |
| J2 | 上腕リフト | 上腕を持ち上げる／下げる | 0° ～ -206° |
| J3 | 前腕の伸展 | 前腕を伸ばす／曲げる | 0° ～ -206° |
| J4 | 手首の回転 | 手首を左右に回転 | ±85.9° |
| J5 | 手首のピッチ | 手首を上下にスイング | ±85.9° |
| J6 | 手首のヨー | 手首の向きを微調整 | ±85.9° |
| J7 | グリッパ | 物体をつかむ | 開閉を制御 |

💡**こう理解するとわかりやすいです**：J1 は人の腰の回転、J2 は肩の上下、J3 は肘の曲げ伸ばし、J4/J5/J6 は手首のさまざまな回転、そして J7 は指のような役割です。これらの関節を組み合わせることで、ロボットアームは非常に多彩な動きを行えます。

⚠**組み立て時の注意**：自分で組み立てが必要なパーツを購入した場合は、次の点に特に注意してください：

- キットには多数のネジや構造部品が含まれており、外観がよく似た部品もあります

- **電動ドライバーの使用を強く推奨**します。トルクは中〜低レンジ（3 ～ 6kgf.cm）に調整してください

- トルクが強すぎると、**ネジ穴をなめる・ロックして外れなくなる**原因になります

- 組み立て時は手を挟んだり潰したりしないよう、安全に十分注意してください

#### 2.2.2 reSpeaker Flex XVF3800 マイクアレイ

これは **4 マイク**搭載のインテリジェント音声処理モジュールで、主な特徴は次のとおりです：

- **分離設計**：コアボードとマイクアレイボードを分離でき、さまざまな機器に柔軟にレイアウトできます

- **360° 集音**：4 つのマイクがリング状に配置され、あらゆる方向からの音を受信できます

- **インテリジェント処理を内蔵**：XMOS XVF3800 チップを搭載し、エコーキャンセル、ノイズ抑制、音源定位（DOA）などの機能を備えています

- **デュアル USB インターフェース**：USB-C インターフェースと PH2.0 ロックインターフェースの 2 種類の接続方式があります

- **パワーアンプ内蔵**：10W スピーカーを直接駆動可能です（JST コネクタ経由）

**主要コンポーネント**：

| コンポーネント | 役割 |
|-----|-----|
| XMOS XVF3800 チップ | すべてのオーディオ処理を担当する「頭脳」 |
| TLV320AIC3104 コーデック | アナログ音声信号をデジタル信号に変換 |
| 24 ピン FPC インターフェース | マイクアレイボードとコアボードを接続 |
| USB-C インターフェース | コンピュータと接続し、音声と電源を伝送 |
| 3.5mm ヘッドホンジャック | ヘッドホンを挿してモニタリング可能 |
| JST スピーカーコネクタ | 外部スピーカーを接続可能 |

💡**たとえ話で理解すると**：これは「地獄耳」のような存在だと考えられます——4 つの耳で全方向からの音を聞き取れるだけでなく、音がどの方向から来たのかを分析し、不要なノイズを取り除いて、聞きたい音だけに集中できます。

#### 2.2.3 Ubuntu 22.04 コンピュータ

Ubuntu は無料でオープンソースのオペレーティングシステムです（Windows に似ていますが、開発者により好まれています）。本プロジェクトでの要件は次のとおりです：

- **オペレーティングシステム**：Ubuntu 22.04 LTS（64 ビット版）

- **アーキテクチャ**：x86_64（一般的な Intel / AMD プロセッサ搭載 PC）

- **推奨される最小構成**：

- CPU：4 コア以上

- メモリ：8GB 以上

- ストレージ：50GB の空き容量

- ネットワーク：インターネットに接続可能（クラウド AI を呼び出すため）

💡**PC が Windows の場合はどうすればいいですか？**

次の 2 つの選択肢があります：

1. **デュアルブートをインストール**：1 台の PC に Windows と Ubuntu を共存させる（推奨）

2. **仮想マシンを使用**：Windows 上で VMware などのソフトを使って Ubuntu を仮想的に動かす（性能が少し低下するため、本プロジェクトにはあまり推奨しません）

Ubuntu 22.04 インストールチュートリアル：[https://ubuntu.com/download/desktop](https://ubuntu.com/download/desktop)

### 2.3 ハードウェア接続図

作業を始める前に、すべてのデバイスをどのように接続するかを把握しておきましょう。全体の接続はとてもシンプルで、必要な USB ケーブルは 2 本だけです：

```
          ┌─────────────────────────────────────┐
          │          Ubuntu 22.04            │
          │   ┌──────────┐                      │
          │   │  Python  │  ←── Run the main program       │
          │   │  3.10    │                      │
          │   └──────────┘                      │
          │          │                          │
          │   ┌──────┴──────┐                  │
          │   │  Groq API   │  ←── Cloud AI Service    │
          │   │  (Internet)   │                  │
          │   └─────────────┘                  │
          └─────┬────────┬────────────────────┘
                │        │
            USB-C Cable   USB-C Cable
                │        │
          ┌─────┴──┐  ┌─┴──────────┐
          │reSpeaker│  │ reBot Arm  │
          │ Flex   │  │ B601-DM    │
       │(Microphone) │  │ (Robot Arm)   │
          │        │  │            │
    │ 4-Microphone Array │  │ 7DOF    │
          └────────┘  └────────────┘
                │
          ┌─────┴──────┐
       │  Speaker/Headphone  │  (Optional, used for voice broadcast)
          └─────────────┘
```

**接続手順**：

1. reSpeaker Flex を USB-C ケーブルでコンピュータに接続します

2. reBot Arm を USB-C ケーブルでコンピュータに接続します

3. （任意）reSpeaker Flex のオーディオ出力コネクタにスピーカーまたはヘッドホンを接続します

4. コンピュータがインターネットに接続されていることを確認します

---

## 3. 環境準備

ソフトウェアをインストールする前に、システム環境が要件を満たしているか確認する必要があります。Ubuntu のターミナル（Terminal、Windows の「コマンドプロンプト」に相当）を開き、以下の手順に従って一つずつ確認してください。

### 3.1 Ubuntu バージョンの確認

```bash
# Enter the following command in the terminal to view the system version
lsb_release -a
```

✅**期待される出力**（次のような表示）：

```
No LSB modules are available.
Distributor ID: Ubuntu
Description:    Ubuntu 22.04 LTS
Release:        22.04
Codename:       jammy
```

💡**表示が Ubuntu 22.04 ではない場合は？**

- Ubuntu 20.04 など他のバージョンの場合、本プロジェクトはこのバージョンでテストされているため、22.04 へのアップグレードを推奨します

- Ubuntu でない場合は、Ubuntu 22.04 をインストールする必要があります

### 3.2 Python バージョンの確認

```bash
# Check the default Python version in the system
python3 --version
```

✅**期待される出力**：

```
Python 3.10.12
```

バージョンが **3.10.x**（x は任意の数字）であれば問題ありません。

💡**Python 3.10 ではない場合は？**

心配はいりません。後で Miniforge を使って専用の Python 3.10 環境を作成します。これはシステムデフォルトの Python には影響しません。

### 3.3 USB ポートの確認

ハードウェアを接続する前に、コンピュータが USB デバイスを正常に認識できることを確認します：

```bash
# View the list of currently connected USB devices
lsusb
```

✅**期待される出力**（このように、USB デバイスが表示されます）：

```
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 002 Device 003: ID 2886:0018 Seeed Studio reSpeaker Flex  ← Microphone Array
Bus 002 Device 005: ID 1234:5678 STMicroelectronics Virtual COM Port  ← Robot Arm
```

💡**デバイスが表示されない場合は？**

慌てないでください。まだデバイスが接続されていないだけかもしれません。次のステップに進み、ソフトウェアをインストールした後にもう一度確認してください。

### 3.4 ネットワーク接続の確認

```bash
# Test whether the Internet can be accessed
ping -c 3 baidu.com
```

✅**期待される出力**：

```
PING baidu.com (xxx.xxx.xxx.xxx) 56(84) bytes of data.
64 bytes from ...: icmp_seq=1 ttl=54 time=25.3 ms
64 bytes from ...: icmp_seq=2 ttl=54 time=24.8 ms
64 bytes from ...: icmp_seq=3 ttl=54 time=25.1 ms
```

💡**インターネットにアクセスできない場合は？**

音声モードでは Groq API を呼び出すためにネットワーク接続が必要です。ネットワークが安定していることを確認してください。キャンパスネットワークや企業ネットワークの場合、追加のプロキシ設定が必要になることがあります（後述）。

---

## 4. ソフトウェアのインストール

⚠️ **重要な注意**：以下のコマンドはすべてターミナルで実行する必要があります。各ステップごとにエラーがないことを確認してから、次のステップに進むことを推奨します。

### 4.1 ステップ 1: Miniforge（Python 環境管理ツール）のインストール

**Miniforge とは？**

Miniforge は Python の環境管理ツールで、Python の「App Store 版バージョンマネージャー」のようなものです。次のことに役立ちます：

- システムデフォルトの Python に影響を与えずに、独立した Python 3.10 環境を作成する

- プロジェクトの依存関係をワンクリックでまとめてインストールする

- プロジェクトごとに異なる Python バージョンを切り替える

**インストールコマンド**：

```bash
# Download the Miniforge installation script
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"

# Perform the installation (follow the prompts)
bash Miniforge3-$(uname)-$(uname -m).sh
```

実行後、インストールウィザードが表示されます：

1. 'Enter' を押してライセンス契約を表示

2. 'yes' と入力して契約に同意

3. 'Enter' を押してインストールパス（デフォルト）を確認

4. 'yes' と入力して conda を初期化（推奨）

インストール完了後、**現在のターミナルウィンドウを閉じて新しいターミナルを開き**、環境変数を有効にします。

✅**インストールの確認**：

```bash
# Enter in the new terminal
conda --version
```

期待される出力：'conda 24.x.x'（バージョン番号は異なる場合がありますが、バージョンが表示されればインストール成功です）

### 4.2 ステップ 2: プロジェクトコードベースのクローン

```bash
# Download the main codebase of the project (voice control part)
git clone https://github.com/xr686/reBot-Arm-reSpeaker-Flex.git

# Enter the project directory
cd reBot-Arm-reSpeaker-Flex
```

✅**期待される出力**：

```
Cloning into 'reBot-Arm-reSpeaker-Flex'...
remote: Enumerating objects: ...
...
Resolving deltas: 100% (...)
```

💡**git clone が遅い、または失敗する場合は？**

ネットワークの問題である可能性があります。次のように試すことができます：

```bash
# Use domestic mirroring for acceleration (if available)
git clone https://ghproxy.com/https://github.com/xr686/reBot-Arm-reSpeaker-Flex.git
```

### 4.3 ステップ 3: Conda 環境の作成

このプロジェクトには、必要な依存パッケージがすべて記載された 'environment.yml' ファイルが用意されています。1 つのコマンドだけで、すべての依存関係を自動的にインストールできます：

```bash
# Make sure you are in the reBot-Arm-reSpeaker-Flex directory.
# One-click to create an environment and install all dependencies
conda env create -f environment.yml
```

この処理にはネットワーク速度にもよりますが、**10〜30 分**かかる場合があります。自動的に次のことを行います：

- 'flex' という名前の Python 3.10.2 環境を作成

- conda-forge チャンネルから pinocchio、numpy などの科学計算ライブラリをインストール

- USB 通信用に pyusb をインストール

✅**インストール成功のサイン**（最後の数行が次のように表示されます）：

```
Executing transaction: ... done
#
# To activate this environment, use
#
#     $ conda activate flex
#
# To deactivate an active environment, use
#
#     $ conda deactivate
#
```

### 4.4 ステップ 4: Conda 環境の有効化

```bash
# Activate the newly created flex environment
conda activate flex
```

✅**有効化成功のサイン**：ターミナルのプロンプトの前に '(flex)' が表示されます：

```bash
(flex) user@computer:~/reBot-Arm-reSpeaker-Flex$
```

💡**重要なリマインダー**：新しいターミナルを開くたびに、環境を有効化するために 'conda activate flex' を再実行する必要があります。

### 4.5 ステップ 5: システム依存パッケージのインストール

```bash
# Update the system package list and install ffmpeg
sudo apt-get update && sudo apt-get install -y ffmpeg
```

**ffmpeg とは？**

ffmpeg は音声・動画処理ツールで、本プロジェクトでは音声合成後の音声ファイルを処理するために使用します。簡単に言うと、「コンピュータが音を再生・処理できるようにする」ためのものです。

✅**インストール成功のサイン**：

```
ffmpeg is already the newest version (x.x.x).
```

### 4.6 ステップ 6: uv（Python パッケージ管理ツール）のインストール

```bash
# Install uv (a fast Python package management tool)
curl -LsSf https://astral.sh/uv/install.sh | sh
```

**なぜ uv が必要なのですか？**

uv は非常に高速な Python パッケージ管理ツールで、pip 形式のパッケージをインストールするために使用できます。プロジェクトで使用する 'motorbridge' ライブラリは uv を通じてインストールする必要があります。

✅**インストールが成功したら**、ターミナルを閉じて再度開いてください。

### 4.7 ステップ 7: ロボットアーム制御ライブラリのクローン

```bash
# Cloning robotic arm control library
git clone https://github.com/vectorBH6/reBotArm_control_py.git

# Enter the robotic arm control library directory
cd reBotArm_control_py

# Use uv to install dependencies
uv sync
```

✅**期待される出力**：インストールの進行状況が表示され、エラーが報告されないこと。

### 4.8 ステップ 8: PYTHONPATH 環境変数の設定

```bash
# Add the robotic arm control library to the Python search path
export PYTHONPATH="$PWD:$PYTHONPATH"
```

**これはどういう意味ですか？**

Python がライブラリをインポートする際、PYTHONPATH で指定されたディレクトリを検索します。このコマンドは、Python に「デフォルトの検索パスに加えて、このディレクトリも探しなさい」と指示するものです。

⚠️ **重要なリマインダー**：'export PYTHONPATH' の設定は、**ターミナルを閉じるたびに無効になります**！次のいずれかが必要です：

**方式 A（暫定・毎回実行）**：新しいターミナルを開くたびに、上記の export コマンドを手動で実行する

**方式 B（推奨・永続化）**：この設定を '~/.bashrc' ファイルに書き込みます：

```bash
# Write environment variables to the configuration file so that they will be automatically set every time the terminal is opened.
echo 'export PYTHONPATH="'$PWD':$PYTHONPATH"' >> ~/.bashrc

# Make the configuration take effect immediately
source ~/.bashrc
```

### 4.9 ステップ 9: シリアルポート権限の設定

現在のユーザーが USB シリアルデバイス（ロボットアームとの通信に使用）へアクセスできるようにするため、権限を設定する必要があります：

```bash
# Set USB serial device permissions (to allow the current user to access without sudo)
sudo chmod 666 /dev/ttyACM*
```

✅**実行後にエラーが出ないこと**。

💡**なぜこれが必要なのですか？**

Linux システムはハードウェアデバイスに対して厳格な権限管理を行っています。デフォルトでは、一般ユーザーはシリアルデバイスに直接アクセスできません。このコマンドにより、すべてのユーザーがこれらのデバイスを読み書きできるようになります。

⚠️ **この設定は再起動後に無効になります**。恒久的にしたい場合は、ユーザーを 'dialout' グループに追加できます：

```bash
# Add the current user to the dialout group (permanently resolve the permission issue)
sudo usermod -a -G dialout $USER
```

変更を有効にするには、**ログアウトして再ログイン**する必要があります。

### 4.10 ステップ 10: Groq API Key の設定

このプロジェクトは、音声認識とインテント理解のために Groq のクラウド AI サービスを使用します。Groq アカウントを登録し、API Key を取得する必要があります。

**API Key を取得するには**：

1. ブラウザを開き、https://console.groq.com/keys にアクセスします

2. アカウントを登録します（メールアドレスまたは GitHub アカウントが使用できます）

3. ログイン後、"Create API Key" をクリックします

4. 生成されたキー（形式は 'gsk_xxxxxxxxxxxx' のようなもの）をコピーします

**コード内で API Key を設定します**：

```bash
# First return to the main project directory
cd ~/reBot-Arm-reSpeaker-Flex

# Edit the main program file
nano sound_tracking_arm.py
```

ファイル内で次のセクションを探します（おおよそ 60 行目前後）：

```python
VOICE_CFG = {
    "api_key": "12345678",   # ← Replace this line with your actual API Key
    ...
}
```

'"12345678"' を先ほどコピーした API Key に置き換えます。例：

```python
    "api_key": "gsk_aBcDeFgHiJkLmNoPqRsTuVwXyZ",
```

ファイルを保存します：'Ctrl O' を押し、次に 'Enter'、その後 'Ctrl X' で終了します。

⚠️ **安全に関する注意**：

- API Key を公開コードリポジトリやフォーラムに共有しないでください

- API Key のスクリーンショットをソーシャルメディアに送信しないでください

- API Key が漏えいした場合は、Groq コンソールで削除し、新しいものを生成してください。

### 4.11 ステップ 11: ネットワークプロキシ設定（必要な場合）

中国本土や一部のネットワーク環境では、Groq のサービスに直接アクセスできない場合があります。まずテストしてみましょう：

```bash
# Test whether Groq can be accessed
ping console.groq.com -c 3
```

返信（時間表示）が受信できれば、ネットワークは正常であり、このステップはスキップできます。

'unknown host' や 'Request Timeout' が表示される場合は、プロキシを設定する必要があります。

**プロキシの設定方法**：

'sound_tracking_arm.py' を再度編集し、'VOICE_CFG' 内の 'proxy' エントリを探します：

```python
VOICE_CFG = {
    ...
    "proxy": None,   # ← Change it to your proxy address
}
```

例えば、プロキシアドレスが 'http:// 192.168.4.7:7897' の場合：

```python
    "proxy": "http://192.168.4.7:7897",
```

💡**自分のプロキシアドレスを知るには？**

- Clash を使用している場合：通常は 'http:// 127.0.0.1:7890'

- v2rayN を使用している場合：通常は 'http:// 127.0.0.1:10809'

- LAN プロキシサーバーの場合：ネットワーク管理者に確認してください

- プロキシ形式は通常：'http:// IP アドレス: ポート番号'

---

## 5. ハードウェアの接続と組み立て

### 5.1 ハードウェア接続手順

すべてのソフトウェアのインストールが完了したので、次はハードウェアを接続しましょう。

**ステップ 1: reSpeaker Flex を接続**

1. reSpeaker Flex を USB-A to USB-C ケーブルでコンピュータに接続します

2. 接続後、reSpeaker Flex 上のインジケータライトが点灯するはずです

3. ターミナルで 'lsusb' を入力すると、Seeed Studio のデバイスが表示されるはずです。

**ステップ 2: reBot Arm を接続**

1. ロボットアームのベースが木工用クランプでデスクトップにしっかり固定されていることを確認します

2. ロボットアームを USB-A to USB-C ケーブルでコンピュータに接続します

3. 24V 電源（XT30 インターフェース）を接続しますが、**まだ電源は入れないでください**

⚠️ **通電前の安全チェックリスト**：

- [ ] ロボットアームのベースがしっかり固定されている（木工用クランプで固定）

- [ ] ロボットアームの可動範囲内に障害物がない

- [ ] ロボットアームの可動範囲の近くに人がいない

- [ ] USB ケーブルが接続されている

- [ ] 電源配線が正しい

**ステップ 3: 電源オン開始**

1. チェック後、24V 電源スイッチをオンにします

2. ロボットアームがわずかなモーターの通電音を発します

3. ターミナルで 'ls /dev/ttyUSB *' を入力すると、'/dev/ttyUSB0' のようなデバイスが表示されるはずです

### 5.2 ハードウェア接続の確認

```bash
# View USB audio device (reSpeaker)
arecord -l
```

✅**期待される出力**（類似）：

```
**** List of CAPTURE Hardware Devices ****
card 2: XVF3800 [reSpeaker XVF3800], device 0: USB Audio [USB Audio]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

```bash
# View USB serial device (robotic arm)
ls -la /dev/ttyUSB0
```

または：

```bash
ls -la /dev/ttyACM0
```

✅**期待される出力**：

```
crw-rw-rw- 1 root dialout 188, 0 ... /dev/ttyUSB0
```

💡**デバイスが見えない場合？**

- USB ケーブルがしっかり差し込まれているか確認してください

- 別の USB ポートに変更してみてください

- ケーブルがデータ通信対応か確認してください（一部のケーブルは充電専用でデータ転送ができません）

- [9. トラブルシューティングガイド](#9-トラブルシューティングガイド-faq) を参照してください

---

## 6. 初回起動

### 6.1 動作前の確認

本格的に起動する前に、いくつか簡単な確認を行い、すべてのコンポーネントが正常に動作していることを確認します。

#### 検証 1: Python 依存関係の確認

'flex' 環境かつメインプロジェクトディレクトリ内にいることを確認します：

```bash
# Activate the environment
conda activate flex

# Enter the project directory
cd ~/reBot-Arm-reSpeaker-Flex

# Verify pyusb and numpy
python -c "import usb.core; import numpy; print('pyusb + numpy OK')"
```

✅**期待される出力**：

```
pyusb + numpy OK
```

#### 検証 2: ロボットアームライブラリの検証

```bash
# Ensure that PYTHONPATH is set
export PYTHONPATH="$HOME/reBotArm_control_py:$PYTHONPATH"

# Verify the robotic arm library
python -c "from reBotArm_control_py.actuator import RobotArm; print('Robot Arm Library OK')"
```

✅**期待される出力**：

```
Robot Arm Library OK
```

💡**'ModuleNotFoundError' エラーが出る場合？**

PYTHONPATH が正しく設定されていないことを意味します。次を確認してください：

1. reBotArm_control_py ディレクトリが実在する。

2. 'export PYTHONPATH' コマンドを実行した

3. そうでない場合は、フルパスを使用してみてください：

   ```bash
   export PYTHONPATH="/home/Your username/reBotArm_control_py:$PYTHONPATH"
   ```

#### 検証 3: マイクのテスト

```bash
# Record a 3-second test audio
arecord -D plughw:2,0 -c 6 -r 16000 -f S16_LE -d 3 /tmp/test.wav

# Play the recorded audio (if a speaker/headphone is connected)
aplay -D plughw:2,0 /tmp/test.wav
```

録音された音が聞こえれば、マイクアレイは正常に動作しています。

### 6.2 起動手順

すべての検証が通過したら、プログラムを正式に起動できます！

```bash
# Ensure in the flex environment
cd ~/reBot-Arm-reSpeaker-Flex

# Start the program (a mode selection menu will pop up)
python sound_tracking_arm.py
```

✅**期待される出力**：

```
==================================================
  reBot Arm B601-DM + reSpeaker Flex
  Please select the operating mode:
==================================================
  [1] DOA Interaction Mode (Sound Source Tracking + Standby Animation)
  [2] Voice control mode (button trigger + AI LLM control)
==================================================
Please enter the mode number (1 or 2):
```

このとき、'1' を入力すると DOA 音源追跡モードに入り、'2' を入力すると音声制御モードに入ります。

#### モードを直接指定して起動する

起動コマンドで直接モードを指定し、選択メニューをスキップすることもできます：

```bash
# DOA Sound Source Tracking Mode
python sound_tracking_arm.py --mode doa

# Voice command control mode
python sound_tracking_arm.py --mode voice
```

### 6.3 初回実行テスト

#### DOA モードテスト

モード 1 を選択すると、プログラムは：

1. USB デバイスを初期化します

2. ロボットアームに接続します

3. 待機状態に入ります

**テスト方法**：ロボットアームの横に立ち、話しかけるか手を叩いて、ロボットアームが次のように動作するか観察します：

- あなたのいる方向に回転する

- うなずき動作を行う

- その後、待機状態に戻る

#### 音声モードテスト

モード 2 を選択すると、プログラムは：

1. すべてのコンポーネントを初期化します

2. あなたが Enter を押すのを待ちます

**テスト方法**：

1. 'Enter' キーを押します

2. 「recording」のプロンプトが表示されたら、「hello」または「say hello」と話します

3. 約 5 秒待ちます

4. 次のことを確認します：

- あなたの音声を認識する

- ロボットアームがあいさつ動作を行う

- 音声での応答が聞こえる

---

## 7. 機能の詳細説明

### 7.1 モード 1: DOA 音源追跡モード

#### DOA とは？

DOA のフルネームは **Direction of Arrival**（音波到来方向）で、簡単に言うと：**音がどの方向から来ているかを判断する** ことです。あなたが両耳を使って、音が左か右かを大まかに判断できるのと同じように、reSpeaker Flex は 4 つのマイクを使って、より正確に音の方向を計算します。

#### ワークフロー

```
Start the system
    ↓
Initialize USB device
    ↓
Connect reSpeaker Flex ←──→ Connect reBot Arm
    ↓
Loop Execution:
    ├─ Read DOA angle data (0°~360°)
    ├─ Is a valid sound source detected?
    │   ├─ No → Breathing Standby Animation → Continue Reading
    │   └─ Yes → 4-frame Angle Buffer Queue → Calculate Weighted Average Angle
    │           → Cosine Similarity Smoothing Filtering
    │           → Angle change > Trigger Threshold?
    │               ├─ No → Continue Reading
    │               └─ Yes → The robotic arm turns towards the target direction
    │                       → Perform a nodding motion
    │                       → Enter Cool Down
    │                       → Continue Reading
    ↓
Exit (Press Ctrl+C)
```

#### コア技術ポイントの詳細説明

**4 フレーム角度バッファキュー**

動きながら話す人の声を聞いているところを想像してください。もし各フレーム（約 50 ミリ秒）ごとの角度変化で直接ロボットアームを駆動すると、ガタガタと揺れてしまいます。そこでシステムは「リングバッファ」を使って直近 4 フレーム分の DOA 角度データを保存し、その平均を取ることで、動きをよりスムーズにしています。

**コサイン類似度によるスムージングフィルタ**

マイクが方向を誤判定することがあります（突然のノイズなど）。このフィルタは、直近数フレームの角度が「一貫しているか」をチェックし、差が大きすぎる場合は誤判定の可能性があるとして反応しません。ちょうど、あなたも音を聞いたとき、首を向ける前に方向を確認するのと同じです。

**トリガーしきい値**

角度変化が設定されたしきい値（デフォルト 15°）を超えた場合にのみ、アームの動きがトリガーされます。これにより、わずかな角度変動による頻繁な動作を防ぎます。

**クールダウン**

各動作の後、システムはクールダウン期間（デフォルト 3 秒）に入り、その間は新しい音源に反応しません。これにより、連続トリガーによるロボットアームのガタつきを防ぎます。

**呼吸待機アニメーション**

誰も話していないとき、ロボットアームは完全に静止するのではなく、人間のようにわずかに動く「呼吸」状態に入ります。これは見た目にも美しく、システムが動作していることをユーザーに知らせます。

### 7.2 モード 2: 音声コマンド制御モード

#### 完全なインタラクションのクローズドループ

音声制御モードは、**録音 → 認識 → 理解 → 実行 → 音声出力** という完全なクローズドループをサポートします。

#### ワークフロー

```
The user presses the Enter key.
    ↓
arecord starts recording (6 channels, 16kHz, 5 seconds)
    ↓
User releases Enter → Stop recording
    ↓
NumPy Audio Normalization Processing (Extract First Channel + Gain Amplification)
    ↓
Upload to Groq API
    ↓
Whisper model performs speech-to-text (STT) recognition
    ↓
Obtain text commands (e.g., "turn left")
    ↓
Send to Llama-3.3-70B large language model
    ↓
LLM understands intent + outputs JSON structured results
    ↓
Analysis results
    ├─ Invalid → Broadcast "Sorry, I didn't catch that. Could you please repeat?"
    └─ Valid → Execute the corresponding robotic arm action
              ↓
         Edge-TTS Voice Announcement Execution Result
              ↓
         Return to standby state
```

#### 対応している音声コマンド

| 命令タイプ | 発話例 | 実行アクション | 説明 |
|-----|-----|-----|-----|
| 左を向く | 「左を向いて」「左を見て」「左に回って」 | ロボットアームのベースが左に 45 度回転 | 角度はパラメータで調整可能 |
| 右を向く | 「右を向いて」「右を見て」「右に回って」 | ロボットアームのベースが右に 45 度回転 | 上記と同様 |
| あいさつ | 「あいさつして」「こんにちは」「やあ」 | うなずいてあいさつをする | 連続で 2 回うなずく |
| 手を振る | 「手を振って」「さようならと言って」「バイバイ」 | 手を振る動作を行う | 左右に 2 回手を振る |
| 原点復帰 | 「初期位置に戻って」「リセット」「原点に戻って」 | すべての関節がゼロ位置に戻る | 初期姿勢に戻る |
| 停止 | 「止まって」「動かないで」「ストップ」 | 現在の動作を即座に停止 | 緊急停止コマンド |

#### インタラクション例

```bash
$ python sound_tracking_arm.py --mode voice

========================================
  🤖 reBot Arm Voice Control System has been activated
  Press Enter to start recording, release to stop.
  Press Ctrl+C to exit
========================================

[Interaction] >>> 🟢 System is idle, please press Enter to start recording... <<< [User presses Enter]
🔴 Recording... Please speak (5 seconds)
[User says: "Turn to the left a bit"]
[User releases Enter]
🟢 Recording completed, processing...

   --- Speech Recognition ---
   📝 Recognition result: "turn left"

   --- Intent Understanding ---
   🤖 Parsed action: turn_left, parameters: {"angle": 45}

   --- Execute Action ---
   => Start executing action: turn_left

   --- Voice Announcement ---
=======================================================
 🤖 [Voice Output] Okay, turning left.
=======================================================

[Interaction] >>> 🟢 System is idle, press Enter to start recording... <<< [Waiting for next input]
```

#### AI はどのようにあなたの言葉を理解するのか？

このプロジェクトでは、よく設計された Prompt を使用して、大規模言語モデル（Llama-3.3-70B）がさまざまな自然言語の発話を理解し、それを構造化された命令に変換できるようにしています。

例えば、「頭を左に向けて」と話しかけると、AI は次のように理解します：

```json
{"action": "turn_left", "params": {"angle": 45}, "reply": "Okay, turning left."}
```

この設計の利点は、決まったコマンド語を言う必要がなく、雑談するように自然に話すだけでよいことです！

---

## 8. コマンドラインパラメータ

### 8.1 完全なパラメータ一覧

プログラムを起動するとき、さまざまなパラメータを追加して動作をカスタマイズできます：

```bash
python sound_tracking_arm.py [Parameter]
```

| パラメータ | 省略形 | デフォルト | 説明 |
|-----|-----|-----|-----|
| '-- mode' | '-m' | 'doa' | 動作モード: 'doa'（音源追跡）または 'voice'（音声制御） |
| '-- device' | '-d' | '0' | reSpeaker Flex USB デバイス ID |
| '-- port' | '-p' | '/dev/ttyUSB0' | ロボットアームのシリアルポートデバイスのパス |
| '-- threshold' | '-t' | '15' | DOA 角度トリガーしきい値（度） |
| '-- cooldown' | '-c' | '3' | アクションのクールダウン時間（秒） |
| '-- buffer-size' | '-B ' | '4' | DOA 角度バッファフレーム数 |
| '-- groq-key' | '-k' | 'None' | Groq API キー（コードから設定することも可能） |
| '-- tts-voice' | '-v' | 'zh-CN-XiaoxiaoNeural | Edge-TTS の音声 |
| '-- debug' | - | 'False' | デバッグログ出力を有効化 |

### 8.2 使用例

#### 基本的な使い方

```bash
# DOA Tracking Mode (Default)
python sound_tracking_arm.py

# Voice control mode
python sound_tracking_arm.py --mode voice
```

#### DOA の感度を調整する

```bash
# Increase the trigger threshold (requires a larger change in sound direction to respond, reducing false triggers)
python sound_tracking_arm.py --threshold 25

# Lower the trigger threshold (more sensitive, but also more prone to false triggering)
python sound_tracking_arm.py --threshold 10

# Extend Cool Down (longer "rest time" after action)
python sound_tracking_arm.py --cooldown 5

# Adjust multiple parameters simultaneously
python sound_tracking_arm.py --threshold 20 --cooldown 5
```

#### ハードウェアデバイスを指定する

```bash
# The robotic arm is connected to different serial ports.
python sound_tracking_arm.py --port /dev/ttyACM0

# Specify Groq API Key (command-line input will override the configuration in the code)
python sound_tracking_arm.py --mode voice --groq-key gsk_xxxxxxxxxxx
```

#### 音声の声質を切り替える

```bash
# Use Chinese male voice (Yun Jian)
python sound_tracking_arm.py --mode voice --tts-voice zh-CN-YunjianNeural

# Use Chinese female voice (Xiaoxiao, default)
python sound_tracking_arm.py --mode voice --tts-voice zh-CN-XiaoxiaoNeural

# Use Chinese female voice (Xiaoxiao, multi-emotional)
python sound_tracking_arm.py --mode voice --tts-voice zh-CN-XiaoxiaoMultilingualNeural
```

Edge-TTS がサポートしている音声の完全な一覧はこちら：[https://github.com/rany2/edge-tts#changing-the-voice](https://github.com/rany2/edge-tts#changing-the-voice)

#### デバッグモードを有効にする

```bash
# Enable detailed log output (helpful for troubleshooting)
python sound_tracking_arm.py --debug
```

---

## 9. トラブルシューティングガイド FAQ

このセクションでは、初心者ユーザーがよく遭遇する問題とその解決策をまとめています。ここに自分の問題が見つからない場合は、まずハードウェア接続が正しいか確認し、その後ターミナルに出力されるエラーメッセージを確認してください。

### 9.1 インストール段階の問題

#### Q1: 'conda command not found'

**問題**: Miniforge をインストールした後、プロンプトで 'conda' と入力してもコマンドが見つかりません。

**原因**: 環境変数が正しく設定されていません。

**解決方法**:

```bash
# Option 1: Reinitialize the shell
~/miniforge3/bin/conda init bash
# Then close the terminal and reopen it.

# Option 2: Manual Activation
source ~/miniforge3/etc/profile.d/conda.sh
conda activate base
```

#### Q2: 'environment.yml' 用の環境作成に失敗する

**問題**: 'conda env create -f environment.yml を実行するとエラーが報告されます。

**考えられる原因と対処法**:

1. **ネットワークの問題**（最も一般的）:

```bash
# Switch to domestic mirroring source
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/
conda config --set show_channel_urls yes
# Then try again
conda env create -f environment.yml
```

2. **ディスク容量不足**:

```bash
# Check disk space
df -h
# Ensure there is at least 5GB of available space.
```

3. **conda のバージョンが古すぎる**:

```bash
conda update conda
```

#### Q3: 'uv: command not found'

**問題**: uv をインストールした後、コマンドが見つからないと表示されます。

**解決方法**:

```bash
# Check if uv is installed
ls ~/.cargo/bin/uv

# If it exists, add it to PATH
echo 'export PATH="$HOME/.cargo/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

#### Q4: 'uv sync' がエラーを報告する

**問題**: 'reBotArm_control_py ディレクトリで 'uv sync' の実行に失敗します。

**考えられる原因**:

1. 正しいディレクトリにいない

2. Python のバージョンが一致していない

**解決方法**:

```bash
# Confirm that the directory is correct
ls -la pyproject.toml

# If it doesn't exist, it means you're not in the correct directory.
cd ~/reBotArm_control_py

# Confirm the Python version
python --version  # 应该是 3.10.x
```

### 9.2 USB デバイス認識の問題

#### Q5: 'lsusb' に reSpeaker Flex が表示されない

**トラブルシューティング手順**:

1. **USB ケーブルがしっかり挿さっているか確認**: USB-C ケーブルを抜き差ししてみる

2. **USB ポートを変更**: パソコンの他の USB ポート（特に USB 3.0 の青いポート）を試す

3. **ケーブルを確認**: データ通信対応ケーブルを使用していることを確認する（一部のケーブルは充電専用）

4. **システムログを確認**:

```bash
# View USB connection logs
dmesg | tail -20
```

5. **ドライバが必要か確認**:

```bash
# View detailed information of USB devices
lsusb -v -d 2886:
```

#### Q6: 'lsusb' にアームが表示されない

**トラブルシューティング手順**:

1. USB ケーブルが正しく接続されていることを確認する

2. ロボットアームの電源が入っていることを確認する（24V 電源スイッチ）

3. 電源インジケータが点灯しているか確認する

4. システムログを確認する:

```bash
dmesg | grep -i "ttyUSB\|ttyACM\|usb"
```

#### Q7: 'Permission denied: /dev/ttyUSB0'

**問題**: シリアルデバイスへアクセスする権限がありません。

**解決方法**:

```bash
# Temporary solution
sudo chmod 666 /dev/ttyUSB0

# Permanently resolve (recommended)
sudo usermod -a -G dialout $USER
# Then log out and log back in.
```

### 9.3 Python 実行時の問題

#### Q8: 'ModuleNotFoundError: No module named 'usb.core''

**問題**: Pyusb モジュールが見つかりません。

**解決方法**:

```bash
# Confirm in the flex environment
conda activate flex

# Manually install pyusb
conda install -c conda-forge pyusb

# If it still doesn't work, check the Python path.
which python  # Confirm that the output contains miniforge3/envs/flex
```

#### Q9: 'ImportError: cannot import name 'RobotArm''

**問題**: ロボットアーム制御ライブラリが見つかりません。

**解決方法**:

```bash
# Confirm that reBotArm_control_py has been correctly cloned
ls ~/reBotArm_control_py

# Confirm that PYTHONPATH has been set
echo $PYTHONPATH  # should include the path to reBotArm_control_py

# If not, set it manually
export PYTHONPATH="/home/your_username/reBotArm_control_py:$PYTHONPATH"

# Or directly verify the path using Python
python -c "import sys; print(sys.path)"
```

#### Q10: 'libusb-1.0.so. 0: cannot open shared object file'

**問題**: libusb システムライブラリが不足しています。

**解決方法**:

```bash
# Install the libusb development library
sudo apt-get update
sudo apt-get install -y libusb-1.0-0-dev

# If it still doesn't work, try
conda install -c conda-forge libusb
```

### 9.4 ネットワーク/API 関連の問題

#### Q11: 'Groq API Key not set'

**問題**: プログラムが API Key が設定されていないと警告します。

**解決方法**:

1. "sound_tracking_arm.py" の VOICE_CFG["api_key"] が変更されているか確認します

2. API Key の形式が正しいことを確認します（`gsk_` で始まる必要があります）

3. 環境変数として設定することもできます:

```bash
export GROQ_API_KEY="gsk_xxxxxxxxxxxx"
```

#### Q12: 'Connection error' や 'Timeout' が発生して Groq API を呼び出せない

**問題**: Groq サーバーに接続できません。

**トラブルシューティング手順**:

1. **ネットワーク接続をテストする**:

```bash
ping console.groq.com -c 3
```

2. - - ping に失敗する場合は、エージェントを設定する必要があります **:

'sound_tracking_arm.py ' の 'VOICE_CFG を編集します:

```python
proxy": "http://your proxy IP:port",  # e.g., "http://127.0.0.1:7890
```

3. **エージェントが機能しない場合は、エージェントが正常に動作しているか確認します**:

```bash
# Test via proxy
curl -x http://your_proxy_IP:port https://console.groq.com
```

#### Q13: 'Rate limit exceeded' / 'Quota exceeded'

**問題**: API 呼び出し頻度が制限を超えている、またはクォータを使い切っています。

**解決方法**:

1. https://console.groq.com/settings/limits にアクセスして制限を確認します

2. Groq の無料アカウントには 1 分あたりのリクエスト数に制限があるため、使用頻度を下げてください。

3. クォータの問題である場合は、有料アカウントへのアップグレードが必要になることがあります。

#### Q14: 'TTS broadcast failure'/'aplay not found'

**問題**: 音声読み上げ機能が正常に動作しません。

**解決方法**:

```bash
# Install alsa-utils (including aplay)
sudo apt-get install -y alsa-utils

# Check audio output device
aplay -l

# If the device is not visible, you may need to configure the default audio output.
```

### 9.5 ロボットアームに関する問題

#### Q15: ロボットアームが反応しない／動かない

**トラブルシューティング手順**:

1. **シリアルデバイスを確認する**:

```bash
ls -la /dev/ttyUSB*
# or
ls -la /dev/ttyACM*
```

2. **権限を確認する**:

```bash
# Ensure read and write permissions
ls -la /dev/ttyUSB0  # should show crw-rw-rw-
```

3. **電源を確認する**: 24V 電源がオンになっていることを確認します

4. プログラムログを確認: プログラム実行時に 'ArmCtrl' に関するエラーメッセージがありますか？

5. **正しいシリアルポートを指定してみる**:

```bash
python sound_tracking_arm.py --port /dev/ttyACM0
# or
python sound_tracking_arm.py --port /dev/ttyUSB1
```

#### Q16: ロボットアームの動きが異常／ガタつく

**考えられる原因**:

1. ロボットアームがしっかり固定されていない - ベースが安定しているか確認します

2. 可動範囲内に障害物がある - 動作空間を片付けます

3. 関節角度が異常 - リセットを試す: 「初期位置に戻って」と話しかけるか、プログラムを再起動します

#### Q17: モーターの異常な発熱

⚠️**警告**: モーターが異常に発熱している場合は、直ちに電源を切ってください！

**考えられる原因**:

- ロボットアームが外力で拘束され、モーターが力を出し続けている

- 動かす速度が速すぎる

- 長時間の連続運転

**解決方法**:

1. 電源を切り、モーターが冷えるのを待ちます

2. 機械的な干渉がないか確認します

3. 動作頻度を下げます

### 9.6 オーディオ関連の問題

#### Q18: マイク録音に音が入らない

**トラブルシューティング手順**:

1. **デバイスが認識されているか確認する**:

```bash
arecord -l  # Should see reSpeaker XVF3800
```

2. **デバイス番号を確認する**:

```bash
# View detailed device information
cat /proc/asound/cards
```

3. **手動で録音テストを行う**:

```bash
# Record with a specified device number (adjust the card and device numbers according to the actual situation)
arecord -D plughw:2,0 -c 6 -r 16000 -f S16_LE -d 3 /tmp/test.wav
```

4. **マイクアレイが正しく接続されているか確認する**: FPC ケーブルがしっかり差し込まれていることを確認します

#### Q19: DOA 角度が安定しない／飛ぶ

**考えられる原因と対処法**:

1. **周囲が騒がしすぎる**: 静かな環境でテストします

2. **マイクアレイが水平でない**: reSpeaker が水平に設置されていることを確認します

3. **近くに強い音源の干渉がある**: ファンやスピーカーなどの機器から離します

4. トリガーしきい値を調整する: `-- threshold` パラメータを上げます。

### 9.7 その他の質問

#### Q20: Ctrl C で終了できない

**解決方法**:

```bash
# Try pressing Ctrl+C multiple times
# Or open another terminal
killall python
```

#### Q21: プログラム実行中にクラッシュする

**トラブルシューティング手順**:

1. クラッシュ前の直近のエラーメッセージを確認します。

2. `-- debug` モードを使用して、より多くのログを取得します

3. メモリ不足がないか確認します: `free -h`

4. USB 接続が不安定でないか確認します

#### Q22: 完全に最初からやり直すには

最初から再設定したい場合は:

```bash
# 1. Delete Conda Environment
conda activate base
conda env remove -n flex

# 2. Delete the code directory
rm -rf ~/reBot-Arm-reSpeaker-Flex
rm -rf ~/reBotArm_control_py

# 3. Re-execute the installation steps according to this Wiki.
```

---

## 10. 安全上の注意

⚠️ **本製品を使用する際は、必ず以下の安全上の注意をよくお読みください。不適切な操作は、機器の破損や人身事故につながるおそれがあります。**

### 10.1 ロボットアームの安全

#### 基本的な安全ルール

| ルール | 説明 | 結果 |
|-----|-----|-----|
| ロボットアームを無理に動かさない | ロボットアームの関節は精密モーターで駆動されており、無理に手で回すとギアが破損する可能性があります | モーター損傷、高額な修理費用 |
| 可動範囲に障害物がないことを確認する | 動作前に、ロボットアームの可動範囲内に人や壁、その他の物体がないか確認します | 衝突によりロボットアームや周囲の物体が損傷 |
| 緊急時は USB ケーブルを抜く | 緊急時には、ロボットアームの USB ケーブルをすぐに抜いて制御信号を遮断します | ロボットアームの動作が停止 |
| 積載重量は 1500g を超えない | 1.5kg を超える物体を爪で保持しないでください | モーターの過負荷による損傷 |
| 1.5m の安全距離を保つ | ロボットアームが動作しているときは、少なくとも 1.5m の距離を保ちます | 衝突によるけがを防止 |

#### 関節角度の制限

システムには関節リミット保護が内蔵されており、以下の表はその参考値です。コード内ではラジアン（rad）単位が使用されている点に注意してください。

| 関節 | 名称 | 最小 (角度) | 最大 (角度) | 説明 |
|-----|-----|-----|-----|-----|
| J1 | ベース回転 | -149.0 ° | 149.0 ° | 水平回転、最大範囲 |
| J2 | ショルダーピッチ | -206.3 ° | 0 ° | ブームの持ち上げ、上方向のみ |
| J3 | エルボーピッチ | -206.3 ° | 0 ° | 前腕の伸展、前方向のみ |
| J4 | リスト回転 | -85.9 ° | 85.9 ° | 先端の左右回転 |
| J5 | リストピッチ | -85.9 ° | 85.9 ° | 先端の上下スイング |
| J6 | リストヨー | -85.9 ° | 85.9 ° | 先端の向きの微調整 |
| J7 | 爪の開閉 | -320.9 | 0 | 爪の制御、負の値で開く |

### 10.2 電気的安全

- **通電中の抜き差し禁止**: XT30 2 2 電源インターフェースを抜き差しする前に、必ず電源をオフにしてください

- **モーターのホットプラグ禁止**: 通電中にモーターケーブルを抜き差ししないでください

- **正しい電源を使用する**: 24V 15A の電源のみ使用可能であり、その他の電源を使用すると機器が損傷する可能性があります

- **湿気の多い環境を避ける**: 湿気が多く、ほこりっぽく、高温な環境では使用しないでください

- **ケーブルを確認する**: 使用前に、電源コードおよび信号線に断線や損傷がないか確認します

### 10.3 使用環境の安全

- **未成年者は大人の監督のもとで使用すること**: ロボットアームには一定の力があり、不適切な操作はけがの原因となる可能性があります

- **安定した作業台**: ロボットアームが安定した水平なテーブルに固定されていることを確認します

- **十分なスペース**: ロボットアームの周囲に少なくとも 1m の安全スペースを確保します

- **十分な照明**: ロボットアームの動作状態を観察しやすくします

- **水源から離す**: 電子機器と水を接触させないでください

### 10.4 モーターリセット時の安全上の注意

モーターをリセットする前に:

- 2 個の治具（サイズ ≥ 3 インチ）

- 調整および動作中は少なくとも 1m の安全距離を保つ

- モーターのホットプラグを禁止し、XT30 2 2 インターフェースを抜き差しする前に必ず電源を切る

- モーターの過負荷・過回転を禁止

- 起動前に配線および締結部を点検する

- 湿気が多く、高温で、ほこりの多い環境では使用しない

---

## 11. 技術原理の紹介

本章では、本プロジェクトで用いられている中核的な技術原理を簡単に紹介し、「その裏側の魔法」を理解したいユーザーの助けとします。本製品を使用するために、これらを完全に理解する必要はありません。

### 11.1 DOA 音源定位の原理

#### 質問: 音がどの方向から来ているか、どのように判断するのですか？

reSpeaker Flex には、リング状に配置された 4 つのマイクが搭載されています。ある方向から音が来ると、各マイクに到達する時間にわずかな差（「時間差」または TDOA と呼ばれる）が生じます。

**わかりやすい説明**: 目を閉じていても、もし誰かが左側で手を叩けば、左耳のほうが先に聞こえ、右耳は少し遅れて聞こえます。この時間差に基づいて、脳は音が左側にあると判断できます。

reSpeaker Flex に内蔵されている XVF3800 チップは、次のことを行います：

1. 4 つのマイクを同時に動作させる

2. チップが 4 つの信号の位相差／時間差を解析する

3. 音が最も来る可能性が高い方向（0 ° ～ 360 °）を計算する

4. DOA 角度データを USB 経由でコンピュータに送信する

### 11.2 音声認識のプロセス

#### 質問：話した内容をどのように文字に変換するのですか？

このプロジェクトでは OpenAI の Whisper モデルを使用し、Groq の高速化された API 呼び出しを利用しています。全体の流れは次のとおりです：

1. **録音**：マイクアレイから 6 チャンネルの 16kHz オーディオを `arecord` で収集する

2. **前処理**：NumPy を使用して 1 チャンネル目（ビームフォーミング後の信号）を抽出し、正規化とゲイン増幅を行う

3. **アップロード**：処理済みの音声ファイルを Groq サーバーにアップロードする

4. 認識：Whisper モデルが音声波形をテキストに書き起こす

5. **返却**：認識結果（例：「左に向いて」）を取得する

Whisper モデルは最先端の音声認識モデルの 1 つであり、多言語に対応し、高い認識精度を備えています。

### 11.3 意図理解の原理

#### 質問：AI は、あなたがロボットアームに何をさせたいのか、どのように理解するのですか？

このプロジェクトでは Meta の Llama-3.3-70B 大規模言語モデルを使用し、Groq API を通じて呼び出しています。

**コア技術**：プロンプトエンジニアリング

コードの中で、AI に詳細な「指示テンプレート」を与え、次のことを伝えます：

- 実行できるアクション（左を向く、右を向く、あいさつする など）

- 各アクションの意味

- 出力フォーマットの要件（JSON）

例えば、ユーザーが「頭を左に向けるのを手伝って」と言ったとき：

1. テキストが Llama-3.3-70B に送信される

2. AI がシステムプロンプトと組み合わせて意図を理解する

3. 構造化された JSON を出力する：

   ```json
   {"action": "turn_left", "params": {"angle": 45}, "reply": "Okay, turning left."}
   ```

4. プログラムが JSON を解析し、対応するアクションを実行する

### 11.4 マニピュレータ制御の原理

#### 質問：コンピュータはどのようにロボットアームを制御するのですか？

**運動学（Kinematics）**：

ロボットアーム制御の中核は運動学です。与えられた目標関節角度から、ロボットアームの先端位置を空間内で計算する（順運動学）；あるいは逆に、先端の目標位置が与えられたときに、各関節をどれだけ回転させるべきかを計算します（逆運動学）。

このプロジェクトでは、運動学計算と軌道計画に **Pinocchio** ライブラリを使用しています。

**動作補間**：

マニピュレータは、点 A から点 B に直接「ジャンプ」するのではなく、補間アルゴリズムを通じて滑らかに遷移します。コードではコサインイージング関数（cosine easing）が使用されています：

```python
# Easing formula: makes motion smoother and more natural
ease = -(math.cos(math.pi * t) - 1) / 2.0
```

これにより、ロボットアームはゆっくり加速して動き始め、停止前にゆっくり減速し、人間の自然な動きのようになります。

**関節リミット保護**：

すべての目標関節角度は、安全な範囲内にクリップされます：

```python
np.clip(target_angle, JOINT_LIMITS_MIN, JOINT_LIMITS_MAX)
```

これにより、ロボットアームが物理的な限界を超えず、損傷を防ぐことができます。

---

## 12. 参考資料

### 12.1 プロジェクト関連リンク

| リソース | リンク | 説明 |
|-----|-----|-----|
| プロジェクトのメインリポジトリ | https://github.com/xr686/reBot-Arm-reSpeaker-Flex | 音声制御メインプログラム |
| ロボットアーム制御ライブラリ | https://github.com/vectorBH6/reBotArm_control_py | ロボットアーム Python 制御ライブラリ |
| reBot Arm 公式 | https://www.rebotix.com/ | ロボットアーム公式サイト |
| Seeed Studio | https://www.seeedstudio.com/ | reSpeaker Flex の購入および技術サポート |

### 12.2 reSpeaker Flex 関連 Wiki

| リソース | リンク |
|-----|-----|
| reSpeaker Flex 公式 Wiki | https://wiki.seeedstudio.com/ja/reSpeaker_USB_Mic_Array/ |
| XMOS XVF3800 技術ドキュメント | https://www.xmos.com/xvf3800 |
| XVF3800 ユーザーガイド | https://www.xmos.com/download/XVF3800-User-Guide (1).pdf |
| マイクアレイ DOA アルゴリズムの説明 | reSpeaker Flex 公式ドキュメントを参照 |

### 12.3 ロボットアーム関連 Wiki

| リソース | リンク |
|-----|-----|
| reBot-DevArm GitHub | https://github.com/Seeed-Projects/reBot-DevArm |
| ReBot Arm 組み立てガイド | Seeed Studio 公式 Wiki を参照 |
| Pinocchio 運動学ライブラリ | https://github.com/stack-of-tasks/pinocchio |

### 12.4 API とツールドキュメント

| リソース | リンク | 説明 |
|-----|-----|-----|
| Groq コンソール | https://console.groq.com/keys | API Key の管理 |
| Groq API ドキュメント | https://console.groq.com/docs | API 説明 |
| Groq 開発者コミュニティ | https://discord.gg/groq | 技術サポートコミュニティ |
| Edge-TTS プロジェクト | https://github.com/rany2/edge-tts | 音声合成ツール |
| Whisper 論文 | https://arxiv.org/abs/2212.04356 | 音声認識技術論文 |
| Llama モデル | https://ai.meta.com/llama/ | 大規模言語モデル公式サイト |

### 12.5 技術学習リソース

| トピック | 推奨リソース |
|-----|-----|
| Python 基礎 | https://docs.python.org/zh-cn/3/tutorial/ |
| Conda の使い方 | https://docs.conda.io/projects/conda/en/latest/user-guide/getting-started.html |
| Ubuntu 基礎 | https://ubuntu.com/tutorials/command-line-for-beginners |
| Git 基礎 | https://www.progit.cc/ |
| ロボット工学入門 | Modern Robotics (Kevin Lynch) |
| 音声認識入門 | Andrew Ng Deep Learning Course-Sequence Model |

### 12.6 コミュニティとサポート

- **GitHub Issues**：本ドキュメントで扱われていない問題に遭遇した場合は、プロジェクトの GitHub リポジトリで Issue を提出できます。

- **Seeed Studio Forum**：https://forum.seeedstudio.com/（reSpeaker 関連の技術ディスカッション）

- **Groq Discord**：https://discord.gg/groq（API 関連の問題）

---

## おわりに

ここまでドキュメントを読み進めていただき、おめでとうございます！この Wiki に沿って一歩ずつ進めていれば、すでに自分だけの知能音声ロボットアームシステムを構築できているはずです。

このプロジェクトは、音声処理、AI 音声インタラクション、ロボットの動作制御などの技術分野を含んでおり、初心者にとって良い総合的な実践プロジェクトです。ぜひ、次のような形でさらに探求を続けてください：

- 音声コマンドを変更して、より多くのカスタムアクションを追加してみる

- DOA パラメータを調整して、音源追跡をより高感度にする

- Raspberry Pi などの組み込みデバイスへのプロジェクトのデプロイを検討する

- ビジョンモジュールを追加して、ロボットアームに「見る」能力を持たせる

質問や提案があれば、GitHub Issue を通じてフィードバックをお寄せください。楽しんでください！🤖

---

> **免責事項**：本ドキュメントはプロジェクトのオープンソースコードに基づいており、参考情報としてのみ提供されます。ロボットアームの操作は危険を伴うため、操作前に安全上の注意事項を十分に理解してください。本ドキュメントの使用により生じたいかなる機器の損傷または人身事故についても、著者は責任を負いません。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
