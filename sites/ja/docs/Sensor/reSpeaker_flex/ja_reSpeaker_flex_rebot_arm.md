---
description: このドキュメントでは、ゼロから手取り足取り、「聞いて動く」インテリジェントロボットアームシステムを構築する方法を解説します。ロボットアームやハードウェア開発に触れたことがなくても、手順どおりに進めれば、このプロジェクトを問題なく再現できます。
title: reSpeaker で音声を使って reBot Arm を制御する 
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


# reSpeaker で音声を使って reBot Arm を制御する 

>

> このドキュメントでは、ゼロから手取り足取り、「聞いて動く」インテリジェントロボットアームシステムを構築する方法を解説します。ロボットアームやハードウェア開発に触れたことがなくても、手順どおりに進めれば、このプロジェクトを問題なく再現できます。

## 必要なハードウェア

<div style={{ display: 'flex', justifyContent: 'center' }}>

<table>
  <tr>
    <th>reBot Arm B601-DM</th>
  </tr>

  <tr>
    <td>
      <div style={{ textAlign: 'center' }}>
        <img
          src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/img_v3_0210p_67d75fe6-a1fe-40a9-b025-ac92efb1bbbg_1.jpg"
          style={{ width: 500, height: 'auto' }}
        />
      </div>
    </td>
  </tr>

  <tr>
    <td>
      <div className="get_one_now_container" style={{ textAlign: 'center' }}>
        <a
          className="get_one_now_item"
          href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html"
          target="_blank"
        >
          <strong>
            <span>
              <font color={'FFFFFF'} size={'4'}>
                今すぐ入手 🖱️
              </font>
            </span>
          </strong>
        </a>
      </div>
    </td>
  </tr>
</table>

</div>


<div style={{ display: 'flex', justifyContent: 'center' }}>

<table>
  <tr>
    <th>reSpeaker Flex XVF3800 Circular</th>
    <th></th>
    <th>reSpeaker XVF3800</th>
  </tr>

  <tr>
    <td>
      <div style={{ textAlign: 'center' }}>
        <img
          src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Circular-4withXIAOESP32S3.jpg"
          style={{ width: 500, height: 'auto' }}
        />
      </div>
    </td>

    <td
      style={{
        textAlign: 'center',
        verticalAlign: 'middle',
        fontSize: '24px',
        fontWeight: 'bold',
        padding: '0 20px'
      }}
    >
      または
    </td>

    <td>
      <div style={{ textAlign: 'center' }}>
        <img
          src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg"
          style={{ width: 500, height: 'auto' }}
        />
      </div>
    </td>
  </tr>

  <tr>
    <td>
      <div className="get_one_now_container" style={{ textAlign: 'center' }}>
        <a
          className="get_one_now_item"
          href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Circular-4-p-6737.html"
          target="_blank"
        >
          <strong>
            <span>
              <font color={'FFFFFF'} size={'4'}>
                今すぐ入手 🖱️
              </font>
            </span>
          </strong>
        </a>
      </div>
    </td>

    <td></td>

    <td>
      <div className="get_one_now_container" style={{ textAlign: 'center' }}>
        <a
          className="get_one_now_item"
          href="https://www.seeedstudio.com/ReSpeaker-XVF3800-USB-Mic-Array-p-6488.html"
          target="_blank"
        >
          <strong>
            <span>
              <font color={'FFFFFF'} size={'4'}>
                今すぐ入手 🖱️
              </font>
            </span>
          </strong>
        </a>
      </div>
    </td>
  </tr>
</table>

</div>


## 1. プロジェクト概要

### 1.1 このプロジェクトとは？

このプロジェクトは、**音声駆動型インテリジェントロボットアーム制御システム**です。次のようなシーンを想像してください：

>🎬**シナリオデモ**

> テーブルの上のロボットアームに「ハロー」と話しかけると、ロボットアームはすぐにあなたの方向を向き、人間のようにうなずきます。「ダンス」と言うと、楽しそうに体を揺らします。部屋の反対側に移動して手を叩くと、その音の方向をすぐに「聞き取り」、こちらを向く——これが、今回一緒に作るインテリジェントロボットです！

まとめると、このシステムは次の3つのことを行います：

1. **聞く** - マイクアレイであなたの声を収音し、音がどの方向から来ているかも判定します

2. **理解する** - AI によってあなたの発話を認識し、意図を理解します

3. **動く** - ロボットアームを制御して、対応する動作（回転、うなずき、ダンス、手を振る など）を行います

### **1.2 2つのインタラクションモード**

本システムには、用途に応じて選べる2つのコア動作モードがあります：

| モード | 名称 | インタラクション | 想定シーン |
|-----|-----|-----|-----|
| モード1 | **DOA 音源追跡** | 自動で音の方向を検出して向きを変える | 展示会デモ、インタラクティブ装置 |
| モード2 | **音声コマンド制御** | Enter を長押しして操作 | 音声アシスタント、授業デモ |

### 1.3 システムはどのように動作する？

システム全体のアーキテクチャを、できるだけ平易な言葉で説明します：

```
You speak / make a sound
      ↓
[ reSpeaker ] —— An array composed of 4 "ears" can hear and determine the direction of sound.
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

**ハードウェア層**（実際に触れられるデバイス）：

- reSpeaker（4マイクアレイ XIAO ESP32S3 コントローラ）  

- reBot Arm B601-DM（6自由度マニピュレータ）  

- Ubuntu 22.04 コンピュータ（メインプログラムを実行）  

**ドライバ層**（ハードウェア同士を通信可能にする部分）：

- USB オーディオ通信（pyusb/libusb）- マイクアレイと接続  

- シリアル通信（MotorBridge）- ロボットアームと接続  

- Web API（Groq Cloud）- クラウド AI サービスと接続  

**アルゴリズム層**（データを処理する「頭脳」）：

- DOA 音源定位（ローカルでリアルタイム計算）

- Whisper 音声認識（Groq Cloud）

- Llama-3.3 意図理解（Groq Cloud）

- モーション補間プランニング（ローカルでのスムーズな制御）

**アプリケーション層**（実際に目に見える効果）：

- DOA 追跡モード 音声制御モード ブリージング待機アニメーション 音声アナウンス

---

## 2. ハードウェアの準備

### 2.1 何を用意する必要があるか？

始める前に、以下のハードウェアがすべて揃っていることを確認してください。この種のプロジェクトに初めて触れる場合は、互換性の問題を避けるため、完成キットをまとめて購入することをおすすめします。

| コンポーネント | 型番 | 数量 | おおよその役割 | 購入のおすすめ |
|-----|-----|-----|-----|-----|
| ロボットアーム | reBot Arm B601-DM | 1 セット | 動作を行う「本体」 | Seeed Studio 公式 |
| マイクアレイ | reSpeaker  XVF3800 | 1 | 音を聞き、方向を判定 | Seeed Studio 公式 |
| マスタ PC | Ubuntu 22.04 PC | 1 | プログラムを実行する「頭脳」 | x86_64 アーキテクチャ |
| USB ケーブル | USB-A to USB-C | 2 | デバイス同士の接続 | 一般的にデバイスに同梱 |
| 木工用クランプ | 3インチ以上 | 2 | ロボットアームのベース固定 | 金物店 または セットに同梱 |
| 電源 | 24V 15A（XT30 インターフェース） | 1 | ロボットアームへの電源供給 | 一般的にキットに同梱 |

### 2.2 各ハードウェアの簡単な紹介

#### 2.2.1 reBot Arm B601-DM アーム

これはデスクトップ向けのロボットアームで、**7つの「関節」**（専門的には 7 自由度）を持ち、人間の腕のようにさまざまな柔軟な動きを行うことができます。

**関節の説明**（上から順）：

| 関節 | イメージ | 何ができるか | 可動範囲 |
|-----|-----|-----|-----|
| J1 | 腰（ベース回転） | 体全体を左右に回転 | ±149° |
| J2 | 上腕の持ち上げ | 上腕を持ち上げたり下げたりする | 0° ~ -206° |
| J3 | 前腕の伸展 | 前腕を伸ばしたり曲げたりする | 0° ~ -206° |
| J4 | 手首の回転 | 手首を左右に回転 | ±85.9° |
| J5 | 手首のピッチ | 手首を上下にスイング | ±85.9° |
| J6 | 手首のヨー | 手首の向きを微調整 | ±85.9° |
| J7 | グリッパ | 物体をつかむ | 開閉を制御 |

💡**こう理解すると分かりやすいです**：J1 は人の腰の回転、J2 は肩の上下、J3 は肘の曲げ伸ばし、J4/J5/J6 は手首のさまざまな回転、そして J7 は指のような役割です。これらの関節が組み合わさることで、ロボットアームは非常に多彩な動きを実現できます。

⚠**組み立て時の注意**：パーツから自分で組み立てるタイプを購入した場合は、次の点に特に注意してください：

- キットには多数のネジや構造部品が含まれており、外観がよく似た部品もあります

- **電動ドライバーの使用を強く推奨**します。トルクは中〜低レンジ（3〜6kgf.cm）に設定してください

- トルクが強すぎると、**ネジ穴をなめる（ねじ山つぶれ）**原因になります

- 組み立て時は手を挟んだり潰したりしないよう、安全に十分注意してください

#### 2.2.2 reSpeaker  マイクアレイ

これは **4つのマイク**を備えたインテリジェント音声処理モジュールで、主な特徴は次のとおりです：

- **分離設計**：コアボードとマイクアレイボードを分離でき、さまざまな機器に柔軟に配置できます

- **360°集音**：4つのマイクがリング状に配置され、あらゆる方向からの音を受信できます

- **インテリジェント処理を内蔵**：XMOS XVF3800 チップを搭載し、エコーキャンセル、ノイズ抑制、音源定位（DOA）などの機能を備えています

- **デュアル USB インターフェース**：USB-C インターフェースと PH2.0 ロックインターフェースの2種類の接続方式があります

- **パワーアンプ内蔵**：10W スピーカーを直接駆動可能です（JST コネクタ経由）

**主要コンポーネント**：

| コンポーネント | 役割 |
|-----|-----|
| XMOS XVF3800 チップ | すべてのオーディオ処理を担当する「頭脳」 |
| TLV320AIC3104 コーデック | アナログ音声信号をデジタル信号に変換 |
| 24ピン FPC インターフェース | マイクアレイボードとコアボードを接続 |
| USB-C インターフェース | コンピュータと接続し、音声と電源を伝送 |
| 3.5mm ヘッドホンジャック | ヘッドホンを接続してモニタリング可能 |
| JST スピーカーコネクタ | 外部スピーカーを接続可能 |

💡**類推的な理解**：これは「風下の耳」のようなものだと考えることができます——あらゆる方向からの音を聞くための4つの耳を持つだけでなく、音がどの方向から来ているかを解析し、ノイズをフィルタリングして、あなたが聞きたい音だけに集中することができます。

#### 2.2.3 Ubuntu 22.04 コンピュータ

Ubuntu は無料でオープンソースのオペレーティングシステムです（Windows に似ていますが、開発者により人気があります）。本プロジェクトの要件は次のとおりです：

- **オペレーティングシステム**：Ubuntu 22.04 LTS（64ビット版）

- **アーキテクチャ**：x86_64（つまり、一般的な Intel/AMD プロセッサのコンピュータ）

- **最小構成の推奨**：

- CPU：4コア以上

- メモリ：8GB 以上

- ハードディスク：50GB の空き容量

- ネットワーク：インターネットにアクセスできること（クラウド AI を呼び出すために使用）

💡**パソコンが Windows システムの場合はどうすればよいですか？**

次の2つの選択肢があります：

1. **デュアルブートをインストールする**：1台のコンピュータに Windows と Ubuntu を同時に入れておく（推奨）

2. **仮想マシンを使用する**：Windows 上で（VMware などの）ソフトウェアを使って仮想的に Ubuntu を実行する（パフォーマンスが多少低下するため、本プロジェクトでは非推奨）

Ubuntu 22.04 インストールチュートリアル：[https://ubuntu.com/download/desktop](https://ubuntu.com/download/desktop)

### 2.3 ハードウェア接続図

始める前に、すべてのデバイスをどのように接続するべきかを把握しておきましょう。全体の接続はとてもシンプルで、必要なのは USB ケーブル2本だけです：

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
          │         │  │ B601-DM    │
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

1. reSpeaker を USB-C ケーブルでコンピュータに接続します

2. reBot Arm を USB-C ケーブルでコンピュータに接続します

3. （任意）reSpeaker のオーディオ出力コネクタにスピーカーまたはヘッドホンを接続します

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

💡**Ubuntu 22.04 と表示されない場合は？**

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

心配はいりません。後で Miniforge を使って専用の Python 3.10 環境を作成します。これによりシステムデフォルトの Python には影響しません。

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

音声モードでは Groq API を呼び出すためにネットワーク接続が必要です。ネットワークが安定していることを確認してください。キャンパス／企業ネットワークの場合、追加のプロキシ設定が必要になることがあります（後ほど説明します）。

---

## 4. ソフトウェアのインストール

⚠️ **重要な注意**：以下のコマンドはすべてターミナルで実行する必要があります。各ステップの後にエラーがないことを確認してから、次のステップに進むことを推奨します。

### 4.1 ステップ1：Miniforge（Python 環境管理ツール）のインストール

**Miniforge とは？**

Miniforge は Python 環境管理ツールで、Python の「App Store 版バージョンマネージャー」のようなものです。次のことに役立ちます：

- システムデフォルトの Python に影響を与えずに、独立した Python 3.10 環境を作成する

- プロジェクトの依存関係をワンクリックでインストールする

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

3. 'Enter' を押してインストールパスを確認（デフォルト）

4. 'yes' と入力して conda を初期化（推奨）

インストール完了後、**現在のターミナルウィンドウを閉じて新しいターミナルを開き**、環境変数を有効にします。

✅**インストール確認**：

```bash
# Enter in the new terminal
conda --version
```

期待される出力：'conda 24.x.x'（バージョン番号は異なる場合がありますが、バージョンが表示されればインストール成功です）

### 4.2 ステップ2：プロジェクトコードベースのクローン

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

### 4.3 ステップ3：Conda 環境の作成

このプロジェクトには、必要な依存パッケージがすべて記載された 'environment.yml' ファイルが用意されています。1つのコマンドだけで、すべての依存関係を自動的にインストールできます：

```bash
# Make sure you are in the reBot-Arm-reSpeaker-Flex directory.
# One-click to create an environment and install all dependencies
conda env create -f environment.yml
```

この処理にはネットワーク速度にもよりますが、**10〜30分**かかる場合があります。自動的に次のことを行います：

- 'flex' という名前の Python 3.10.2 環境を作成

- conda-forge チャンネルから pinocchio、numpy などの科学計算ライブラリをインストール

- USB 通信用に pyusb をインストール

✅**インストール成功のサイン**（最後の数行は次のような表示になります）：

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

### 4.4 ステップ4：Conda 環境の有効化

```bash
# Activate the newly created flex environment
conda activate flex
```

✅**有効化成功のサイン**：ターミナルのプロンプトの前に '(flex)' が表示されます：

```bash
(flex) user@computer:~/reBot-Arm-reSpeaker-Flex$
```

💡**重要なリマインダー**：新しいターミナルを開くたびに、環境を有効化するために 'conda activate flex' を再度実行する必要があります。

### 4.5 ステップ5：システム依存パッケージのインストール

```bash
# Update the system package list and install ffmpeg
sudo apt-get update && sudo apt-get install -y ffmpeg
```

**ffmpeg とは？**

ffmpeg は音声・動画処理ツールで、本プロジェクトでは音声合成後の音声ファイルを処理するために使用します。簡単に言えば、「コンピュータに音を再生・処理させるためのもの」です。

✅**インストール成功のサイン**：

```
ffmpeg is already the newest version (x.x.x).
```

### 4.6 ステップ6：uv（Python パッケージ管理ツール）のインストール

```bash
# Install uv (a fast Python package management tool)
curl -LsSf https://astral.sh/uv/install.sh | sh
```

**なぜ UV が必要なのですか？**

uv は非常に高速な Python パッケージ管理ツールで、pip 形式のパッケージをインストールするために使用できます。本プロジェクトで使用する `motorbridge` ライブラリは uv を通してインストールする必要があります。

✅**インストールが正常に完了したら**、ターミナルを閉じて再度開きます。

### 4.7 ステップ 7: ロボットアーム制御ライブラリのクローン

```bash
# Cloning robotic arm control library
git clone https://github.com/vectorBH6/reBotArm_control_py.git

# Enter the robotic arm control library directory
cd reBotArm_control_py

# Use uv to install dependencies
uv sync
```

✅**期待される出力**: エラーを出さずにインストールの進行状況が表示されます。

### 4.8 ステップ 8: PYTHONPATH 環境変数の設定

```bash
# Add the robotic arm control library to the Python search path
export PYTHONPATH="$PWD:$PYTHONPATH"
```

**これはどういう意味ですか？**

Python がライブラリをインポートする際、PYTHONPATH で指定されたディレクトリを参照します。このコマンドは Python に対して「デフォルトの検索パスに加えて、このディレクトリも参照しなさい」と指示しています。

⚠️ **重要な注意**: `export PYTHONPATH` の設定は、**ターミナルを閉じるたびに無効になります**！ 次のいずれかを行う必要があります：

**方式 A（一時的・毎回実行）**: 新しいターミナルを開くたびに、上記の export コマンドを手動で実行する

**方式 B（推奨・永続的）**: この設定を `~/.bashrc` ファイルに書き込みます：

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

✅**実行後にエラーが出てはいけません**。

💡**なぜこれが必要なのですか？**

Linux システムはハードウェアデバイスに対して厳格な権限管理を行っています。デフォルトでは、一般ユーザーはシリアルデバイスへ直接アクセスできません。このコマンドにより、すべてのユーザーがこれらのデバイスを読み書きできるようになります。

⚠️ **この設定は再起動後に無効になります**。永続化したい場合は、ユーザーを `dialout` グループに追加できます：

```bash
# Add the current user to the dialout group (permanently resolve the permission issue)
sudo usermod -a -G dialout $USER
```

この変更を有効にするには、**一度ログアウトして再ログイン**する必要があります。

### 4.10 ステップ 10: Groq API Key の設定

本プロジェクトでは、音声認識と意図理解のために Groq のクラウド AI サービスを使用します。Groq アカウントを登録し、API Key を取得する必要があります。

**API Key を取得する手順**:

1. ブラウザを開き、https://console.groq.com/keys にアクセスします

2. アカウントを登録します（メールアドレスまたは GitHub アカウントが利用可能）

3. ログイン後、"Create API Key" をクリックします

4. 生成された Key をコピーします（形式は `gsk_xxxxxxxxxxxx` のようなもの）

**コード内で API Key を設定する**:

```bash
# First return to the main project directory
cd ~/reBot-Arm-reSpeaker-Flex

# Edit the main program file
nano sound_tracking_arm.py
```

ファイル内で次の部分を探します（おおよそ 60 行目前後）:

```python
VOICE_CFG = {
    "api_key": "12345678",   # ← Replace this line with your actual API Key
    ...
}
```

`"12345678"` を先ほどコピーした API Key に置き換えます。例：

```python
    "api_key": "gsk_aBcDeFgHiJkLmNoPqRsTuVwXyZ",
```

ファイルを保存します：`Ctrl O` を押し、次に `Enter`、その後 `Ctrl X` を押して終了します。

⚠️ **セキュリティ上の注意**:

- **公開**コードリポジトリやフォーラムに API Key を共有しないでください

- API Key のスクリーンショットをソーシャルメディアに投稿しないでください

- API Key が漏えいした場合は、Groq コンソールで削除し、新しいものを生成してください。

### 4.11 ステップ 11: ネットワークプロキシ設定（必要な場合）

中国本土や一部のネットワーク環境では、Groq のサービスに直接アクセスできない場合があります。まずテストしてみましょう：

```bash
# Test whether Groq can be accessed
ping console.groq.com -c 3
```

応答（時間が表示される）が返ってくれば、ネットワークは正常であり、このステップはスキップできます。

`unknown host` や `Request Timeout` が表示される場合は、プロキシを設定する必要があります。

**プロキシを設定する方法**:

再度 `sound_tracking_arm.py` を編集し、`VOICE_CFG` 内の `proxy` 項目を探します：

```python
VOICE_CFG = {
    ...
    "proxy": None,   # ← Change it to your proxy address
}
```

例えば、プロキシアドレスが `http://192.168.4.7:7897` の場合：

```python
    "proxy": "http://192.168.4.7:7897",
```

💡**自分のプロキシアドレスを知るには？**

- Clash を使用している場合：通常は `http://127.0.0.1:7890`

- v2rayN を使用している場合：通常は `http://127.0.0.1:10809`

- LAN 内のプロキシサーバーの場合：ネットワーク管理者に確認してください

- プロキシの形式は通常：`http://IPアドレス:ポート番号`

---

## 5. ハードウェア接続と組み立て

### 5.1 ハードウェア接続手順

すべてのソフトウェアのインストールが完了したので、次はハードウェアを接続しましょう。

**ステップ 1: reSpeaker を接続**

1. reSpeaker を USB-A to USB-C ケーブルでコンピュータに接続します

2. 接続後、reSpeaker 上のインジケーターが点灯しているはずです

3. ターミナルで `lsusb` を入力すると、Seeed Studio のデバイスが表示されるはずです。

**ステップ 2: reBot Arm を接続**

1. ロボットアームのベースが木工用クランプでしっかりとデスクに固定されていることを確認します

2. ロボットアームを USB-A to USB-C ケーブルでコンピュータに接続します

3. 24V 電源（XT30 コネクタ）を接続しますが、**まだ電源は入れないでください**

⚠️ **通電前の安全チェックリスト**:

- [ ] ロボットアームのベースがしっかり固定されている（木工用クランプで固定）

- [ ] ロボットアームの可動範囲内に障害物がない

- [ ] ロボットアームの可動範囲の近くに人がいない

- [ ] USB ケーブルが接続されている

- [ ] 電源配線が正しい

**ステップ 3: 電源オン**

1. チェック完了後、24V 電源スイッチをオンにします

2. ロボットアームから、モーター通電時の小さな音が聞こえます

3. ターミナルで `ls /dev/ttyUSB*` を入力すると、`/dev/ttyUSB0` のようなデバイスが表示されるはずです

### 5.2 ハードウェア接続の確認

```bash
# View USB audio device (reSpeaker)
arecord -l
```

✅**期待される出力**（一例）:

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

✅**期待される出力**:

```
crw-rw-rw- 1 root dialout 188, 0 ... /dev/ttyUSB0
```

💡**デバイスが見つからない場合？**

- USB ケーブルがしっかり挿さっているか確認する

- 別の USB ポートに差し替えてみる

- ケーブルがデータ通信対応か確認する（充電専用ケーブルはデータを送れません）

- [9. トラブルシューティングガイド](#9-トラブルシューティングガイド-faq) を参照

---

## 6. 初回起動

### 6.1 動作前の確認

本格的に動かし始める前に、すべてのコンポーネントが正常に動作していることを確認するため、いくつか簡単な検証を行います。

#### 検証 1: Python 依存関係の確認

`flex` 環境かつメインプロジェクトディレクトリ内にいることを確認します：

```bash
# Activate the environment
conda activate flex

# Enter the project directory
cd ~/reBot-Arm-reSpeaker-Flex

# Verify pyusb and numpy
python -c "import usb.core; import numpy; print('pyusb + numpy OK')"
```

✅**期待される出力**:

```
pyusb + numpy OK
```

#### 検証 2: ロボットアームライブラリの確認

```bash
# Ensure that PYTHONPATH is set
export PYTHONPATH="$HOME/reBotArm_control_py:$PYTHONPATH"

# Verify the robotic arm library
python -c "from reBotArm_control_py.actuator import RobotArm; print('Robot Arm Library OK')"
```

✅**期待される出力**:

```
Robot Arm Library OK
```

💡**`ModuleNotFoundError` エラーが出る場合？**

PYTHONPATH が正しく設定されていないことを意味します。次の点を確認してください：

1. `reBotArm_control_py` ディレクトリが実際に存在する。

2. `export PYTHONPATH` コマンドを実行した。

3. それでもだめな場合は、フルパスを使用してみてください：

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

録音した音声が聞こえれば、マイクアレイは正常に動作しています。

### 6.2 起動手順

すべての検証が通ったら、いよいよプログラムを正式に起動できます！

```bash
# Ensure in the flex environment
cd ~/reBot-Arm-reSpeaker-Flex

# Start the program (a mode selection menu will pop up)
python sound_tracking_arm.py
```

✅**期待される出力**:

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

この時点で、`1` を入力すると DOA 音源追跡モードに、`2` を入力すると音声制御モードに入ります。

#### 起動時にモードを直接指定する

起動コマンドで直接モードを指定し、選択メニューをスキップすることもできます：

```bash
# DOA Sound Source Tracking Mode
python sound_tracking_arm.py --mode doa

# Voice command control mode
python sound_tracking_arm.py --mode voice
```

### 6.3 初回動作テスト

#### DOA モードテスト

モード 1 を選択すると、プログラムは次の処理を行います：

1. USB デバイスの初期化

2. ロボットアームへの接続

3. 待機状態に入る

**テスト方法**: ロボットアームの横に立ち、話しかけるか手を叩いて、ロボットアームが次のように動作するか観察します：

- 向いている方向に回転する

- うなずく動作を行う

- その後スタンバイ状態に戻る

#### ボイスモードテスト

モード 2 が選択されると、プログラムは次の処理を行います：

1. すべてのコンポーネントを初期化する

2. Enter キーが押されるのを待つ

**テスト方法**:

1. 'Enter' キーを押す

2. 「recording」というプロンプトが表示されたら、「hello」または「say hello」と話しかける

3. 約 5 秒待つ

4. 次の点を確認する：

- 音声が認識されるか

- ロボットアームがあいさつ動作を行うか

- 音声での応答が聞こえるか

---

## 7. 機能の詳細説明

### 7.1 モード 1: DOA 音源追跡モード

#### DOA とは？

DOA の正式名称は **Direction of Arrival**（音波の到来方向）で、簡単に言うと **音がどの方向から来ているかを判断する** ことです。あなたが両耳を使って、音が左からか右からか大まかに判断できるのと同じように、reSpeaker は 4 つのマイクを使って、より正確に音の方向を計算します。

#### ワークフロー

```
Start the system
    ↓
Initialize USB device
    ↓
Connect reSpeaker  ←──→ Connect reBot Arm
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

動いている人の話を聞いているところを想像してください。もし各フレーム（約 50 ミリ秒）ごとの角度変化で直接ロボットアームを動かすと、ガタガタと震えてしまいます。そこでシステムでは「リングバッファ」を使って直近 4 フレーム分の DOA 角度データを保存し、その平均を取ることで動きを滑らかにしています。

**コサイン類似度スムージングフィルタ**

マイクが方向を誤判定することがあります（突然のノイズなど）。このフィルタは、直近数フレームの角度が「一貫しているか」をチェックし、差が大きすぎる場合は誤判定の可能性があるとみなして反応しません。ちょうど、人間も音を聞いたときに、首を向ける前に方向を確認するのと同じです。

**トリガーしきい値**

角度変化が設定されたしきい値（デフォルト 15°）を超えたときにのみ、アームの動きがトリガーされます。これにより、わずかな角度の揺らぎで頻繁に動いてしまうことを防ぎます。

**クールダウン**

各アクションの後、システムはクールダウン期間（デフォルト 3 秒）に入り、その間は新しい音源に反応しません。これにより、連続トリガーによるロボットアームのガタつきを防ぎます。

**呼吸スタンバイアニメーション**

誰も話していないときでも、ロボットアームは完全に静止するのではなく、わずかに動く「呼吸」状態に入ります。これは見た目にもよく、ユーザーにシステムが動作中であることを知らせる役割もあります。

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
| 左に向く | "turn left"/"look left"/"turn left" | ロボットアームのベースを左に 45 度回転 | 角度はパラメータで調整可能 |
| 右に向く | "turn right"/"look right"/"turn right" | ロボットアームのベースを右に 45 度回転 | 上と同じ |
| あいさつ | "say hello"/"hello"/"hi" | うなずいてあいさつする | 連続で 2 回うなずく |
| 手を振る | "Wave"/"Say Goodbye"/"Bye" | 手を振る動作を行う | 左右に 2 回手を振る |
| 原点復帰 | "return to initial position"/"reset"/"return to zero" | すべての関節をゼロ位置に戻す | 初期姿勢に戻る |
| 停止 | "Stop"/"Don't move"/"Stop" | 現在の動作を即座に停止 | 緊急停止コマンド |

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

このプロジェクトでは、よく設計された Prompt を使用し、大規模言語モデル（Llama-3.3-70B）がさまざまな自然言語の発話を理解し、それを構造化された命令に変換できるようにしています。

例えば、「頭を左に向けるのを手伝って」と言うと、AI は次のように理解します：

```json
{"action": "turn_left", "params": {"angle": 45}, "reply": "Okay, turning left."}
```

この設計の利点は、決まったコマンドワードを言う必要がなく、チャットのように自然に話すだけでよいという点です！

---

## 8. コマンドラインパラメータ

### 8.1 完全なパラメータ一覧

プログラムを起動するときに、さまざまなパラメータを追加して動作をカスタマイズできます：

```bash
python sound_tracking_arm.py [Parameter]
```

| パラメータ | 省略形 | デフォルト | 説明 |
|-----|-----|-----|-----|
| '-- mode' | '-m' | 'doa' | 動作モード：'doa'（音源追跡）または 'voice'（音声制御） |
| '-- device' | '-d' | '0' | reSpeaker USB デバイス ID |
| '-- port' | '-p' | '/dev/ttyUSB0' | ロボットアームのシリアルポートデバイスのパス |
| '-- threshold' | '-t' | '15' | DOA 角度トリガーしきい値（度） |
| '-- cooldown' | '-c' | '3' | アクションのクールダウン時間（秒） |
| '-- buffer-size' | '-B ' | '4' | DOA 角度バッファフレーム数 |
| '-- groq-key' | '-k' | 'None' | Groq API Key（コードから設定することも可能） |
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

Edge-TTS でサポートされている音声の完全な一覧はこちら：[https://github.com/rany2/edge-tts#changing-the-voice](https://github.com/rany2/edge-tts#changing-the-voice)

#### デバッグモードを有効にする

```bash
# Enable detailed log output (helpful for troubleshooting)
python sound_tracking_arm.py --debug
```

---

## 9. トラブルシューティングガイド FAQ

このセクションでは、初心者のユーザーがよく遭遇する問題とその解決策をまとめています。ここに自分の問題が見つからない場合は、まずハードウェア接続が正しいかを確認し、その後ターミナルに出力されるエラーメッセージを確認してください。

### 9.1 インストール段階の問題

#### Q1: 'conda command not found'

**問題**: Miniforge をインストールした後、'conda' と入力してもコマンドが見つからないと表示される。

**原因**: 環境変数が正しく設定されていない。

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

**問題**: `conda env create -f environment.yml` を実行するとエラーが報告されます。

**考えられる原因と解決策**:

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

**問題**: uv をインストールした後、プロンプトでコマンドが見つかりません。

**解決策**:

```bash
# Check if uv is installed
ls ~/.cargo/bin/uv

# If it exists, add it to PATH
echo 'export PATH="$HOME/.cargo/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

#### Q4: 'uv sync' がエラーを報告する

**問題**: `reBotArm_control_py` ディレクトリで `uv sync` の実行に失敗します。

**考えられる原因**:

1. 正しいディレクトリにいない

2. Python のバージョンが一致していない。

**解決策**:

```bash
# Confirm that the directory is correct
ls -la pyproject.toml

# If it doesn't exist, it means you're not in the correct directory.
cd ~/reBotArm_control_py

# Confirm the Python version
python --version  # 应该是 3.10.x
```

### 9.2 USB デバイス認識の問題

#### Q5: 'lsusb' で reSpeaker が見えない

**トラブルシューティング手順**:

1. **USB ケーブルがしっかり挿さっているか確認**: USB-C ケーブルを抜き差ししてみてください

2. **USB ポートを変更**: PC の他の USB ポート（特に USB 3.0 の青いポート）を試してください

3. **ケーブルを確認**: データ通信が可能なケーブルを使用していることを確認してください（一部のケーブルは充電専用です）

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

#### Q6: 'lsusb' でアームが見えない

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

**解決策**:

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

**解決策**:

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

**解決策**:

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

**解決策**:

```bash
# Install the libusb development library
sudo apt-get update
sudo apt-get install -y libusb-1.0-0-dev

# If it still doesn't work, try
conda install -c conda-forge libusb
```

### 9.4 ネットワーク / API の問題

#### Q11: 'Groq API Key not set'

**問題**: プログラムが API Key が設定されていないと警告します。

**解決策**:

1. "sound_tracking_arm.py" の VOICE_CFG["api_key"] が変更されているか確認する

2. API Key の形式が正しいことを確認する（`gsk_` で始まる必要があります）

3. 環境変数として設定することもできます:

```bash
export GROQ_API_KEY="gsk_xxxxxxxxxxxx"
```

#### Q12: Groq API 呼び出し時の 'Connection error' または 'Timeout'

**問題**: Groq サーバーに接続できません。

**トラブルシューティング手順**:

1. **ネットワーク接続をテスト**:

```bash
ping console.groq.com -c 3
```

2. **ping に失敗する場合は、プロキシを設定する必要があります**:

'sound_tracking_arm.py' の VOICE_CFG を編集します:

```python
proxy": "http://your proxy IP:port",  # e.g., "http://127.0.0.1:7890
```

3. **プロキシが機能しない場合は、プロキシ自体が正常に動作しているか確認します**:

```bash
# Test via proxy
curl -x http://your_proxy_IP:port https://console.groq.com
```

#### Q13: 'Rate limit exceeded' / 'Quota exceeded'

**問題**: API 呼び出し頻度が制限を超えている、またはクォータを使い切っています。

**解決策**:

1. https://console.groq.com/settings/limits にアクセスして制限を確認する

2. Groq の無料アカウントには 1 分あたりのリクエスト数に制限があるため、使用頻度を下げてください。

3. クォータの問題である場合は、有料アカウントへのアップグレードが必要になることがあります。

#### Q14: 'TTS broadcast failure' / 'aplay not found'

**問題**: 音声読み上げ機能が正常に動作しません。

**解決策**:

```bash
# Install alsa-utils (including aplay)
sudo apt-get install -y alsa-utils

# Check audio output device
aplay -l

# If the device is not visible, you may need to configure the default audio output.
```

### 9.5 マニピュレータ（ロボットアーム）の問題

#### Q15: マニピュレータが反応しない / 動かない

**トラブルシューティング手順**:

1. **シリアルデバイスを確認**:

```bash
ls -la /dev/ttyUSB*
# or
ls -la /dev/ttyACM*
```

2. **権限を確認**:

```bash
# Ensure read and write permissions
ls -la /dev/ttyUSB0  # should show crw-rw-rw-
```

3. **電源を確認**: 24V 電源がオンになっていることを確認する

4. プログラムログを確認: プログラム実行時に 'ArmCtrl' に関するエラーメッセージがないか確認しますか？

5. **正しいシリアルポートを指定してみる**:

```bash
python sound_tracking_arm.py --port /dev/ttyACM0
# or
python sound_tracking_arm.py --port /dev/ttyUSB1
```

#### Q16: マニピュレータの動作異常 / ジッタ

**考えられる原因**:

1. マニピュレータが適切に固定されていない - ベースがしっかり固定されているか確認する

2. 可動範囲内に障害物がある - 動作空間を片付ける

3. 関節角度の異常 - 「初期位置に戻る」と話すか、プログラムを再起動してリセットを試す

#### Q17: モーターの異常な発熱

⚠️**警告**: モーターが異常に発熱している場合は、直ちに電源を切ってください！

**考えられる原因**:

- マニピュレータが外力で拘束され、モーターが力を出し続けている

- 動作速度が速すぎる

- 長時間の連続運転

**解決策**:

1. 電源を切り、モーターが冷えるまで待つ

2. 機械的な干渉がないか確認する

3. 動作頻度を下げる

### 9.6 オーディオ関連の問題

#### Q18: マイク録音に音が入らない

**トラブルシューティング手順**:

1. **デバイスが認識されているか確認**:

```bash
arecord -l  # Should see reSpeaker XVF3800
```

2. **デバイス番号を確認**:

```bash
# View detailed device information
cat /proc/asound/cards
```

3. **手動で録音テスト**:

```bash
# Record with a specified device number (adjust the card and device numbers according to the actual situation)
arecord -D plughw:2,0 -c 6 -r 16000 -f S16_LE -d 3 /tmp/test.wav
```

4. **マイクアレイが正しく接続されているか確認**: FPC ケーブルがしっかり挿し込まれていることを確認する

#### Q19: DOA 角度が安定しない / ジャンプする

**考えられる原因と解決策**:

1. **周囲が騒がしすぎる**: 静かな環境でテストする

2. **マイクアレイが水平でない**: reSpeaker が水平に設置されていることを確認する

3. **近くに強い音源の干渉がある**: ファン、スピーカーなどの機器から離す

4. トリガーしきい値を調整する: `--threshold` パラメータを上げる。

### 9.7 その他の質問

#### Q20: Ctrl C で終了できない

**解決策**:

```bash
# Try pressing Ctrl+C multiple times
# Or open another terminal
killall python
```

#### Q21: プログラム実行中にクラッシュする

**トラブルシューティング手順**:

1. クラッシュ前の最後の数行のエラーメッセージを確認する。

2. `--debug` モードを使用して、より多くのログを取得する

3. メモリ不足がないか確認する: `free -h`

4. USB 接続が不安定でないか確認する

#### Q22: 完全に最初からやり直すには

最初から再設定したい場合:

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

⚠️ **本製品を使用する際は、必ず以下の安全上の注意をすべてよくお読みください。不適切な操作は、機器の損傷や人身事故につながるおそれがあります。**

### 10.1 マニピュレータ（ロボットアーム）の安全

#### 基本的な安全ルール

| ルール | 説明 | 結果 |
|-----|-----|-----|
| マニピュレータを無理に動かさない | マニピュレータの関節は高精度モーターで駆動されており、無理に手で回転させるとギアが破損する可能性があります | モーターの損傷、高額な修理費用 |
| 可動範囲に障害物がないことを確認する | 動作前に、ロボットアームの可動範囲内に人や壁、その他の物体がないことを確認する | 衝突によりロボットアームや周囲の物体が損傷する |
| 緊急時は USB ケーブルを抜く | 緊急時には、マニピュレータの USB ケーブルをすぐに抜いて制御信号を遮断する | マニピュレータの動作が停止する |
| 積載重量は 1500g を超えない | 1.5kg を超える物体を爪で把持しない | モーターの過負荷による損傷 |
| 1.5m の安全距離を保つ | ロボットアームが動作しているときは、少なくとも 1.5m の距離を保つ | 衝突によるけがを防止する |

#### 関節角度制限

本システムには関節リミット保護が内蔵されており、以下の表はその参考値です。コード内ではラジアン（rad）単位が使用されている点に注意してください。

| Joint | 名称 | 最小（角度） | 最大（角度） | 説明 |
|-----|-----|-----|-----|-----|
| J1 | ベース回転 | -149.0 ° | 149.0 ° | 水平方向の回転、最大可動範囲 |
| J2 | ショルダーピッチ | -206.3 ° | 0 ° | ブームの上げ動作、上方向のみ |
| J3 | エルボーピッチ | -206.3 ° | 0 ° | 前腕の伸展、前方向のみ |
| J4 | リスト回転 | -85.9 ° | 85.9 ° | 先端の左右回転 |
| J5 | リストピッチ | -85.9 ° | 85.9 ° | 先端の上下スイング |
| J6 | リストヨー | -85.9 ° | 85.9 ° | 先端の向きの微調整 |
| J7 | ジョー開閉 | -320.9 | 0 | ジョー制御、負の値で開く |

### 10.2 電気的安全

- **通電中の抜き差し禁止**：XT30 2 2 電源インターフェースを抜き差しする前に、必ず電源をオフにしてください

- **モーターのホットプラグ禁止**：通電中にモーターケーブルを抜き差ししないでください

- **正しい電源を使用する**：24V 15A の電源のみ使用可能です。その他の電源を使用すると機器が破損する恐れがあります

- **多湿環境を避ける**：湿気が多い、ほこりっぽい、高温の環境では使用しないでください

- **ケーブルを確認する**：使用前に電源コードおよび信号線が健全で、損傷がないか確認してください

### 10.3 使用環境の安全

- **未成年は大人の監督下で使用**：ロボットアームには一定の力があり、不適切な操作はけがの原因となる可能性があります

- **安定した作業台**：ロボットアームが安定した水平なテーブルに固定されていることを確認してください

- **十分なスペース**：ロボットアームの周囲に少なくとも 1 m の安全スペースを確保してください

- **良好な照明**：ロボットアームの動作状態を観察しやすくします

- **水源から離す**：電子機器と水を接触させないでください

### 10.4 モーターリセットの安全上の注意

モーターをリセットする前に：

- 治具 2 個（サイズ ≥ 3 インチ）

- 調整および動作中は少なくとも 1 m の安全距離を保つ

- モーターのホットプラグを禁止します。XT30 2 2 インターフェースを抜き差しする前に必ず電源を切ってください

- モーターの過負荷・過速度運転を禁止

- 起動前に配線および締結部を点検する

- 湿気が多い・高温・多粉じん環境では使用しない

---

## 11. 技術原理の紹介

本章では、本プロジェクトに関わる中核的な技術原理を簡単に紹介し、「その裏側の魔法」を理解したいユーザーの助けとします。本アイテムを使用するために完全な理解は必須ではありません。

### 11.1 DOA 音源定位の原理

#### 質問：音がどの方向から来ているか、どうやって判断するの？

reSpeaker  にはリング状に配置された 4 つのマイクがあります。ある方向から音が来ると、各マイクに到達する時間にわずかな差（「時間差」または TDOA と呼ばれる）が生じます。

**わかりやすい説明**：目を閉じているとき、もし誰かが左側で手をたたくと、左耳の方が先に聞こえ、右耳は少し遅れて聞こえます。この時間差に基づいて、脳は音が左側にあると判断できます。

reSpeaker  に内蔵された XVF3800 チップは、まさにこれを行っています：

1. 4 つのマイクで同時に収音

2. チップが 4 つの信号の位相差／時間差を解析

3. 音が最も来ていそうな方向（0 ° ～ 360 °）を計算

4. DOA 角度データを USB 経由でコンピュータに送信

### 11.2 音声認識の処理フロー

#### 質問：話した内容を、どうやって文字に変えるの？

本プロジェクトでは OpenAI の Whisper モデルを使用し、Groq の高速化された API 呼び出しを利用しています。全体の流れは次のとおりです：

1. **録音**：マイクアレイから 6 チャンネル・16kHz の音声を `arecord` で収集

2. **前処理**：NumPy を使って第 1 チャンネル（ビームフォーミング後の信号）を抽出し、正規化とゲイン増幅を行う

3. **アップロード**：処理済み音声ファイルを Groq サーバーにアップロード

4. 認識：Whisper モデルが音声波形をテキストに書き起こす

5. **返却**：認識結果を取得（例：「左を向いて」）

Whisper モデルは、最先端の音声認識モデルの 1 つであり、多言語に対応し、高い認識精度を備えています。

### 11.3 意図理解の原理

#### 質問：AI は、あなたがロボットアームにしてほしいことをどう理解するの？

本プロジェクトでは Meta の Llama-3.3-70B 大規模言語モデルを使用し、Groq API を通じて呼び出しています。

**コア技術**：プロンプトエンジニアリング

コード内では、AI に詳細な「指示テンプレート」を与え、次のことを伝えます：

- 実行可能なアクション（左を向く、右を向く、あいさつする など）

- 各アクションの意味

- 出力フォーマットの要件（JSON）

例えば、ユーザーが「左に頭を向けて」と言ったとき：

1. テキストが Llama-3.3-70B に送信される

2. AI がシステムプロンプトと組み合わせて意図を理解する

3. 構造化された JSON を出力：

   ```json
   {"action": "turn_left", "params": {"angle": 45}, "reply": "Okay, turning left."}
   ```

4. プログラムが JSON を解析し、対応するアクションを実行する

### 11.4 マニピュレータ制御の原理

#### 質問：コンピュータはどうやってロボットアームを制御するの？

**運動学（Kinematics）**：

ロボットアーム制御の中核は運動学です。与えられた目標関節角度からロボットアーム先端の空間位置を計算するのが順運動学、逆に先端の目標位置が与えられたときに各関節をどれだけ回転させるべきかを計算するのが逆運動学です。

本プロジェクトでは、運動学計算と軌道計画に **Pinocchio** ライブラリを使用しています。

**動作補間**：

マニピュレータは、点 A から点 B に「瞬間移動」するのではなく、補間アルゴリズムによって滑らかに遷移します。コードではコサインイージング関数（cosine easing）が使用されています：

```python
# Easing formula: makes motion smoother and more natural
ease = -(math.cos(math.pi * t) - 1) / 2.0
```

これにより、ロボットアームは動き始めはゆっくり加速し、停止前にはゆっくり減速し、人間の自然な動きのようになります。

**関節リミット保護**：

すべての目標関節角度は、安全な範囲内にクリップされます：

```python
np.clip(target_angle, JOINT_LIMITS_MIN, JOINT_LIMITS_MAX)
```

これにより、ロボットアームが物理的な限界を超えないようにし、損傷を防ぎます。

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
| ReBot Arm 組立ガイド | Seeed Studio 公式 Wiki を参照 |
| Pinocchio 運動学ライブラリ | https://github.com/stack-of-tasks/pinocchio |

### 12.4 API とツールドキュメント

| リソース | リンク | 説明 |
|-----|-----|-----|
| Groq コンソール | https://console.groq.com/keys | API Key の管理 |
| Groq API ドキュメント | https://console.groq.com/docs | API 説明書 |
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
| ロボティクス入門 | Modern Robotics (Kevin Lynch) |
| 音声認識入門 | Andrew Ng Deep Learning Course-Sequence Model |

### 12.6 コミュニティとサポート

- **GitHub Issues**：本ドキュメントで扱っていない問題に遭遇した場合は、プロジェクトの GitHub リポジトリで Issue を提出できます。

- **Seeed Studio Forum**：https://forum.seeedstudio.com/（reSpeaker 関連の技術ディスカッション）

- **Groq Discord**：https://discord.gg/groq（API 関連の質問）

---

## おわりに

ここまでドキュメントを読み進めていただき、おめでとうございます！この Wiki をステップバイステップで進めていれば、すでに自分だけのインテリジェント音声ロボットアームシステムを構築できているはずです。

本プロジェクトは、音声処理、AI 音声インタラクション、ロボット動作制御などの分野の技術を含んでおり、初心者にとって良い総合的な実践プロジェクトです。ぜひ、次のような形でさらに探求を続けてください：

- 音声コマンドを変更して、より多くのカスタムアクションを追加してみる

- DOA パラメータを調整して、音源追跡をより敏感にする

- Raspberry Pi などの組み込みデバイスへのプロジェクトのデプロイを検討する

- ビジョンモジュールを追加して、ロボットアームに「見る」能力を持たせる

質問や提案があれば、GitHub Issue を通じてフィードバックをお寄せください。楽しんでください！🤖

---

> **免責事項**: 本書類はプロジェクトのオープンソースコードに基づいており、参考情報としてのみ提供されます。ロボットアームの操作は危険を伴うため、操作前に安全上の注意事項を十分に理解してください。本書類の使用に起因する機器の損傷または人身事故について、著者は一切の責任を負いません。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
