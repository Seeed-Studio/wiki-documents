---
description: このガイドでは、reBot Arm B601-RS の購入オプション、組み立て、キャリブレーション、ソフトウェア設定を含む入門手順を説明します。
title: reBot Arm B601-RS クイックスタート
keywords:
  - reBot
  - B601-DM
  - B601-RS
  - ロボットアーム
  - ロボット
  - Lerobot
  - Pinocchio
  - 6 DOF
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png
slug: /rebot_b601_rs_getting_started
translation:
  skip:
    - zh-CN
last_update:
  date: 2026-05-26T00:00:00.000Z
  author: LiuJunjie
createdAt: '2026-05-26'
updatedAt: '2026-06-01'
url: https://wiki.seeedstudio.com/ja/rebot_b601_rs_getting_started/
---

# reBot Arm B601-RS をはじめよう

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png" />
</div>

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Platform-Linux%20%7C%20Ubuntu-orange.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Framework-Pinocchio-yellow.svg" alt="Pinocchio" />
</p>

<p align="center">
  <strong>6 自由度ロボットアーム · マルチモーター対応 · 運動学ソルバ · 軌道計画 · 完全オープンソース</strong>
</p>

reBot Arm プロジェクトは [GitHub](https://github.com/Seeed-Projects/reBot-DevArm) 上でオープンソース公開されています。本ガイドでは、B601-RS の組み立てから操作までのクイックスタート手順を説明します。

このガイドの内容は光の速さであなたのもとへ向かっています — 続報をお待ちください！

:::

## 購入オプション


## ステップ 1: 組み立てガイド

組み立て前に：

- スムーズに組み立てを行うため、以下の注意事項をよくお読みください。
  1. 本キットには、外観がよく似たさまざまなネジや部品が含まれています。締め付ける前に、仕様と向きを必ず確認してください。
  2. 動画は 4 月上旬に撮影されたものです。細かな更新がある場合がありますが、組み立て手順は同じです。最終的には、同梱されている部品を基準としてください。
  3. 同梱のネジにはねじロック剤が塗布されています。適切な工具、または電動ドライバー（推奨）を使用してください。トルクは (3–6 kgf·cm) に設定し、なめないようにしてください。もしネジがなめてしまった場合は、すぐに作業を中止し、ネジを交換するか位置を調整してください。ねじロック剤付きでなめたネジは外しにくく、部品を破損するおそれがあります。
  4. 組み立て作業中の安全を確保してください。指を挟むなどのけがに注意してください。子どもが作業する場合は必ず保護者が付き添ってください。

## ステップ 2: モーター ID のリセット

### モーターをリセットする前に：

モーターのパラメータ設定を行う前に、以下の準備と安全ルールを確認してください：

- 工作用クランプを 2 個（3 インチ以上）と、48V XT30 出力のスイッチング電源を用意してください（一般的なブランド品を使用し、粗悪品は使用しないでください）。
- デバッグ／動作中は 1m 以上の距離を保ってください。
- モーターのホットプラグは禁止です。XT30 2+2 インターフェースの抜き差しは、必ず電源を切ってから行ってください。
- 過負荷／過速度での動作は避けてください。起動前に配線やネジの緩みを確認し、湿度が高い／高温／粉じんの多い環境は避けてください。
- 暴走を防ぐため、プログラムパラメータと非常停止を適切に設定してください。
- **これらのルールを厳守してください。違反操作や個人的なミスに起因するリスクや責任について、販売者は一切の責任を負いません。**

### 準備リスト

#### ハードウェア

#### コンピュータ要件

- デュアルブート構成のパーソナルコンピュータ（Windows + Ubuntu / macOS）

#### ソフトウェア

## ステップ 3: reBot Arm のキャリブレーションと入門

ここまでの動画に従って、ロボットアームの組み立て、ゼロ点初期化、モーター ID 設定などのセットアップ手順を完了していることを前提とします。これで、私たちが公開している一連のチュートリアルやツールを本格的に活用する準備が整いました。

1. まずは **MotorBridge** プラットフォームをお試しください。これは、[Damiao](https://www.seeedstudio.com/DIP-Servo-Motor-24V-120RPM-Brushless-98-9mm-4P-L56-W56-H46mm-p-6660.html)、[Robstride](https://www.seeedstudio.com/Robostride-00-Actuator-p-6664.html)、[Hightorque](https://www.seeedstudio.com/Hightorque-HTDW-4438-30-NE-Gear-Motor-p-6482.html)、[Myactuator](https://www.seeedstudio.com/Myactuator-X4-P36-Planetary-Actuator-p-6469.html)、Hexfellow など、対応モーターが拡大し続けているオールインワンソリューションです。reBot をはじめとする、継続的にアップデートされるロボットアームにも対応しています。初心者向けに設計されているだけでなく、同等の機能を実装した Python SDK も提供しており、開発者も利用できます。

2. reBot ロボットアーム向け MotorBridge の新機能や詳細を体験してください。ワンクリックでのゼロ点キャリブレーション、パラメータ書き込み、UI のドラッグ＆ドロップによるモーター制御、モデル可視化インターフェースの内蔵などが含まれます。

3. このツールは **Windows、Ubuntu、macOS** の各オペレーティングシステムに完全対応しています。

### ステップ 1: miniforge をインストールする（Windows\Ubuntu\macOS\Jetson\Pi）

このチュートリアルでは、例として Ubuntu を使用します。

```bash
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh
```

### ステップ 2: 環境構築

Python 3.12 で仮想環境を作成します：

```bash
conda create -y -n rebot python=3.12
```

次に仮想環境を有効化します。**reBot 関連の機能を使用するには、ターミナルを開くたびにこの有効化コマンドを実行する必要があります。**

```bash
conda activate rebot
```

### ステップ 3: Motorbridge をインストール

:::tip macOS ユーザーへの注意
macOS でテレオペレーション中にフレームレートが低い場合、古い WCH CH34x ドライバーが原因の可能性があります。**macOS 10.14 以降** では、システムに `AppleUSBCHC0M` ドライバーが標準で含まれています。古いドライバーをアンインストールし、macOS 標準ドライバーに切り替えることで、フレームレートが効果的に改善されるはずです。
:::

reBot 用の仮想環境を有効化したら、次のコマンドを実行して motorbridge をインストールします：

```bash
pip install motorbridge
```

### ステップ 4: ロボットアームを接続

ロボットアームとの通信のため、CAN バス上で 1Mbps で動作する PCAN-USB デバイスを準備します。

```bash
# The kit includes PCAN-USB, which should normally show up as can0 or can1
sudo modprobe peak_usb
ip -br link

# If can0 appears, set the bitrate
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up
```

### ステップ 5: MotorBridge-gateway を起動

任意（Web 上でロボットアームを接続し、通信をテストできます）

ブラウザで `https://rebot-devarm.w0x7ce.eu/` を開き、ヘルプオプションをクリックして、使用しているオペレーティングシステムとドライバボードに対応するコマンドをコピーします。IP アドレスとポート番号を確認し、その後ターミナルで Enter キーを押して実行します。

```bash
motorbridge-gateway -- --bind 127.0.0.1:9002 --transport socketcan --channel can0
```

使用方法については動画を参照してください。
