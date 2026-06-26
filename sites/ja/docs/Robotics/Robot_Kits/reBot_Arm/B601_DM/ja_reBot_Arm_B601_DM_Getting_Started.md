---
description: このガイドでは、reBot Arm B601-DM の購入オプション、組み立て、キャリブレーション、ソフトウェア設定を含む入門手順を説明します。
title: reBot Arm B601-DM クイックスタート
keywords:
  - reBot
  - B601-DM
  - ロボットアーム
  - ロボット
  - Lerobot
  - Pinocchio
  - 6 DOF
slug: /rebot_b601_dm_getting_started
translation:
  skip:
    - zh-CN
last_update:
  date: 2026-04-13T00:00:00.000Z
  author: LiuJunjie
createdAt: '2026-04-13'
updatedAt: '2026-06-10'
url: https://wiki.seeedstudio.com/ja/rebot_b601_dm_getting_started/
---

# reBot Arm B601-DM 入門ガイド

![traj_sim_geodesic](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/dm_pinocchio_mashcat/v2.0.png)

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

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
</a></div>

このガイドの内容は光の速さであなたのもとへ向かっています — 続報をお待ちください！

reBot Arm プロジェクトは [GitHub](https://github.com/Seeed-Projects/reBot-DevArm) 上でオープンソース公開されています。本ガイドでは、B601-DM の組み立てから操作までのクイックスタート手順を説明します。

:::tip
完成品キットをご購入の場合は、本記事の最後にある **ステップ 3** のチュートリアル動画に直接進み、動画に沿って作業してください。モーター ID の書き込みやゼロ位置のキャリブレーションを行う必要はありません。
:::

## 購入オプション

reBot Arm B601-DM には、さまざまなユーザーのニーズに対応する複数の構成が用意されています。

### オプション比較

| 構成 | 本体 | グリッパー | モーター | 構造部品 | 購入リンク |
|:---|:---:|:---:|:---:|:---:|:---|
| **コンプリートキット** | ✅ | ✅ | ✅ | ✅ | [Coming Soon](https://www.seeedstudio.com/) |
| **グリッパーのみ** | ❌ | ✅ | ❌ | ❌ | [Coming Soon](https://www.seeedstudio.com/) |
| **本体のみ（構造部品）** | ✅ | ❌ | ❌ | ✅ | [Coming Soon](https://www.seeedstudio.com/) |
| **本体のみ（モーター）** | ✅ | ❌ | ✅ | ❌ | [Coming Soon](https://www.seeedstudio.com/) |

## ステップ 1: [組み立てガイド](https://youtu.be/rfTQoFCfnMc)

組み立て前に：

- スムーズに組み立てを行うため、以下の注意事項をよくお読みください。
  1. 本キットには、外観がよく似たさまざまなネジや部品が含まれています。締結する前に、仕様と向きを必ず確認してください。
  2. 動画は 4 月上旬に撮影されたものです。細かな更新が行われている場合がありますが、組み立て手順は同一です。最終的には、同梱されている部品を正としてください。
  3. 同梱のネジにはねじロック剤が塗布されています。適切な工具、または電動ドライバー（推奨）を使用してください。トルクは (3–6 kgf·cm) に設定し、なめないように注意してください。もしネジがなめてしまった場合は、直ちに作業を中止し、ネジの交換または位置調整を行ってください。ねじロック剤付きでなめたネジは取り外しが困難で、部品を破損させるおそれがあります。
  4. 組み立て作業中の安全を確保してください。指を挟むなどのけがに注意し、子どもが作業する場合は必ず保護者が付き添ってください。

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/rfTQoFCfnMc?si=KkEfY0NePxC96Xdu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## ステップ 2: モーター ID のリセット

### AI AGENT

:::tip
このセクションはベータ版です。使用時は安全上の注意を守ってください。AI の提案内容が本ドキュメントと異なる場合は、本ガイドを優先し、必要に応じて当社エンジニアにお問い合わせください。
:::

AI AGENT にこのプロセスをサポートさせましょう。以下のプロンプトを AI アシスタントにコピーしてください：

```text

Please follow the workflow in AGENTS.md (https://github.com/Welt-liu/reBot-B601-RS-Skills/blob/main/en/AGENTS.md) to help me initialize the robotic arm.

```

### モーター ID リセット前の準備：

  モーターのパラメータ設定を行う前に、次の準備と安全ルールを確認してください：

- 工作用クランプ 2 個（3 インチ以上）と、24V 15A XT30 出力のスイッチング電源を用意してください（一般的なブランド品を使用し、粗悪品は使用しないでください）。
- デバッグ／動作中は 1m 以上の距離を保ってください。
- モーターのホットプラグは禁止です。XT30 2+2 インターフェースの抜き差しは、必ず電源を切ってから行ってください。
- 過負荷／過速度での動作は行わないでください。起動前に配線や締結状態を確認し、湿気の多い／高温／粉じんの多い環境は避けてください。
- 暴走を防ぐため、プログラムパラメータと非常停止を適切に設定してください。
- **これらのルールを厳守してください。違反操作や個人的なミスに起因するリスクや責任について、販売者は一切の責任を負いません。**

### 準備リスト

#### ハードウェア

- [reBot Arm B601 DM ロボットアーム × 1](https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html)
- [USB-CAN アダプタボード × 1](https://www.seeedstudio.com/DM-CAN-USB-Driver-Borad-p-6706.html)
- [信号・電源分離ボード × 1](https://www.seeedstudio.com/XT30-2-2-Power-Separation-Board-p-6707.html)
- 木工用クランプ × 2
- USB-C ケーブル × 1
- [24V 15A 電源（XT30 出力）× 1](https://www.seeedstudio.com/AC-DC-Power-Adapter-IEC-60320-C14-XT30-Female-24V-4-5A-1200mm-L190-W92-5-H36mm-p-6764.html)
- [電源コード-US](https://www.seeedstudio.com/reServer-AC-US-p-5052.html) \  [電源コード-EU](https://www.seeedstudio.com/reServer-AC-EU-p-5051.html)

#### コンピュータ要件

- デュアルブート構成のパーソナルコンピュータ（Windows + Ubuntu / macOS）

#### ソフトウェア

- [DM_Tools_v.2.1.6.8.exe（Windows のみ対応）](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/DMTool_v2.1.6.8.zip)

<!-- - [DM_Tools_v.1.8.0.1.exe (Supports Windows Only)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/DM_Tools_v1.8.0.1.exe) -->

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/uXuzs1qmj6A?si=lfgXXlF1awhtnvaA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## ステップ 3: reBot Arm のキャリブレーションと入門

ここまでの動画に従って、ロボットアームの組み立て、ゼロ点初期化、モーター ID 設定などのセットアップが完了していることを前提とします。これで、公開している一連のチュートリアルやツールを本格的に活用する準備が整いました。

1. まずは **MotorBridge** プラットフォームをお試しください。これは、[Damiao](https://www.seeedstudio.com/DIP-Servo-Motor-24V-120RPM-Brushless-98-9mm-4P-L56-W56-H46mm-p-6660.html)、[Robstride](https://www.seeedstudio.com/Robostride-00-Actuator-p-6664.html)、[Hightorque](https://www.seeedstudio.com/Hightorque-HTDW-4438-30-NE-Gear-Motor-p-6482.html)、[Myactuator](https://www.seeedstudio.com/Myactuator-X4-P36-Planetary-Actuator-p-6469.html)、Hexfellow など、対応モーターが拡大し続けているオールインワンソリューションです。継続的にアップデートされる reBot などのロボットアームにも対応しています。初心者向けに設計されているほか、開発者向けには同等の機能を実装した Python SDK も提供しています。

2. reBot ロボットアーム向け MotorBridge の新機能や詳細を体験してください。ワンクリックでのゼロ点設定、パラメータ書き込み、UI のドラッグ＆ドロップによるモーター制御、モデル可視化インターフェースの内蔵などが含まれます。

3. このツールは **Windows、Ubuntu、Mac** の各オペレーティングシステムに完全対応しています。

### ステップ 1: miniforge のインストール（Windows\Ubuntu\Mac\Jetson\Pi）

```bash
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh
```

### ステップ 2: 環境構築

Python 3.12 で仮想環境を作成します：

```
conda create -y -n rebot python=3.12
```

次に仮想環境を有効化します。reBot を使用するためには、シェルを開くたびにこの操作を行う必要があります：

```bash
conda activate rebot
```

### ステップ 3: motorbridge のインストール

:::tip

**macOS ユーザーへの注意：**
macOS でテレオペレーション中にフレームレートが低い場合、古い WCH CH34x ドライバーが原因の可能性があります。**macOS 10.14 以降** では、システムに `AppleUSBCHC0M` ドライバーが標準で含まれています。古いドライバーをアンインストールし、macOS 標準ドライバーに切り替えることで、フレームレートが大幅に改善されるはずです。

:::

reBot 用の仮想環境を有効化したら、次のコマンドを実行して motorbridge をインストールします：

```bash
pip install motorbridge
```

### ステップ 4: reBot を接続する

ロボットアームを USB ケーブルでコンピュータに接続し、電源をオンにしたら、シリアルポートに対して 666 のアクセス権限を設定する必要があります。

```bash
sudo chmod 666 /dev/ttyACM*
```

### ステップ 5: motorbridge を開く

ブラウザで `https://motorbridge.github.io/motorbridge-studio/` を開き、ヘルプをクリックします。お使いのシステムとドライバボードに適したコマンドをコピーし、IP とポートを確認してから、ターミナルで Enter キーを押してください。

Windows の例：

```bash
motorbridge-gateway -- --bind 127.0.0.1:9002 --vendor damiao --transport dm-serial --serial-port COM3 --serial-baud 921600 --model 4340P --motor-id 0x01 --feedback-id 0x11 --dt-ms 20
```

  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/motorbridge_help.png" />
  </div>

## 電源について

1. ロボットアームには電源は同梱されておらず、標準では電源は含まれていません。ご自身でバッテリーを接続するか、当社のオープンソース [24V 14.6A MeanWell 電源](https://www.seeedstudio.com/Power-Adapter-Kit-for-reBot-Arm-B601-DM-p-6874.html)を購入することができます。

   <div align="center">
     <img width={800}
     src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100029903-gallery-6_1.jpg" />
   </div>

2. あるいは、セルフアセンブリ用のオープンソース 24V 14.6A MeanWell 電源エンクロージャを選択することもできます。テキストによる手順書と BOM は [GitHub リポジトリ](https://github.com/LAN-GER/reBot-DevArm/tree/main/hardware/reBot_B601_DM) で公開されています（関連する電源組み立て経験を持つ開発者にのみ推奨）。

   組み立て参考動画：

   <div class="video-container">
     <iframe width="900" height="600" src="https://www.youtube.com/embed/DHFA2UfQzUo?si=GYy-Z38qTUW6KPqq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
   </div>

## FAQ
### 1. モーター起動直後に大きな異常音が発生する
- この問題は通常、ID 設定中に誤ってパラメータキャリブレーションがトリガーされ、モーター慣性などの工場出荷時プリセットパラメータが上書きされることで発生します。以下から入手可能な **DM_Tools_v.1.8.0.1.exe (Windows-only)** を使用してください：
https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/DM_Tools_v1.8.0.1.exe
ホストソフトウェアを使用して、同一モデルの正常なモーターから完全なパラメータをエクスポートし、それらのパラメータを不具合のあるユニットにインポートして、対応する CAN ID を更新し、書き込んだパラメータを保存してから、ゼロ点キャリブレーションを実行します。

<div align="center">
    <img width={400}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/csbd_en.png" />
</div>

<div align="center">
    <img width={400}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/fix_param_en.png" />
</div>

[DM4310 デフォルトパラメータ](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/DM4310_Default_Parameters.txt)
[DM4340P デフォルトパラメータ](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/DM4340P_Default_Parameters.txt)

### 2. すべてのモーターの CAN ID が同一になる
- **DM_Tools_v.1.8.0.1.exe (Windows-only)** を使用してゼロ点キャリブレーションを行う際は、CAN ID フィールド横の Read または Set ボタンをクリックしないでください。デバッグインターフェースは CAN バス経由で通信しており、Set をクリックすると CANBUS に接続されているすべてのモーターの CAN ID が同一に設定されてしまいます。


#### その後の操作手順については、チュートリアル動画を参照してください。

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/SI1PRQYkhdg?si=E0m7uTF4IhCVZYl_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
