---
description: このガイドでは、reBot Arm B601-DM の購入オプション、組み立て、キャリブレーション、ソフトウェア設定を含む入門手順を説明します。
title: reBot Arm B601-DM クイックスタート
keywords:
  - reBot
  - B601-DM
  - Robotic Arm
  - Robot
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
updatedAt: '2026-06-02'
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
完成品キットをご購入の場合は、本記事の最後にある **ステップ 3** のチュートリアル動画に直接進み、その内容に従ってください。モーター ID の書き込みやゼロ点キャリブレーションを行う必要はありません。
:::

## 購入オプション

reBot Arm B601-DM には、さまざまなユーザーのニーズに対応する複数の構成が用意されています。

### オプション比較

| 構成 | 本体 | グリッパ | モーター | 構造部品 | 購入リンク |
|:---|:---:|:---:|:---:|:---:|:---|
| **コンプリートキット** | ✅ | ✅ | ✅ | ✅ | [Coming Soon](https://www.seeedstudio.com/) |
| **グリッパのみ** | ❌ | ✅ | ❌ | ❌ | [Coming Soon](https://www.seeedstudio.com/) |
| **本体のみ（構造部品）** | ✅ | ❌ | ❌ | ✅ | [Coming Soon](https://www.seeedstudio.com/) |
| **本体のみ（モーター）** | ✅ | ❌ | ✅ | ❌ | [Coming Soon](https://www.seeedstudio.com/) |

## ステップ 1: [組み立てガイド](https://youtu.be/rfTQoFCfnMc)

組み立て前に：

- スムーズに組み立てを行うため、以下の注意事項をよくお読みください。
  1. 本キットには、外観がよく似たさまざまなネジや部品が含まれています。締結する前に、仕様と向きを必ず確認してください。
  2. 動画は 4 月上旬に撮影されたものです。細かな更新がある場合がありますが、組み立て手順は同じです。最終的には、同梱されている部品を正としてください。
  3. 同梱のネジにはねじロック剤が塗布されています。適切な工具、または電動ドライバー（推奨）を使用してください。トルクは (3–6 kgf·cm) に設定し、なめないようにしてください。もしネジがなめてしまった場合は、すぐに作業を中止し、ネジの交換または位置調整を行ってください。ねじロック剤付きでなめたネジは外しにくく、部品を破損するおそれがあります。
  4. 組み立て作業中の安全に十分注意してください。指を挟んだりケガをしないようにしてください。お子様が作業する場合は、必ず保護者が付き添ってください。

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/rfTQoFCfnMc?si=KkEfY0NePxC96Xdu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## ステップ 2: モーター ID のリセット

### モーター ID リセット前の注意：

  モーターのパラメータ設定を行う前に、以下の準備と安全ルールを確認してください：

- 工作用クランプ 2 個（3 インチ以上）と、24V 15A XT30 出力のスイッチング電源を用意してください（一般的なブランド品を使用し、粗悪品は使用しないでください）。
- デバッグ／動作中は 1m 以上の距離を保ってください。
- モーターのホットプラグは禁止です。XT30 2+2 インターフェースの抜き差しは、必ず電源を切ってから行ってください。
- 過負荷／過速度での動作は避けてください。起動前に配線やネジの緩みを確認し、湿気の多い／高温／粉じんの多い環境での使用は避けてください。
- 暴走を防ぐため、プログラムのパラメータや非常停止機能を適切に設定してください。
- **これらのルールは必ず厳守してください。違反操作や個人的なミスに起因するリスクや責任について、販売者は一切の責任を負いません。**

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

- デュアルブート環境のパーソナルコンピュータ（Windows + Ubuntu / macOS）

#### ソフトウェア

- [DM_Tools_v.1.8.0.1.exe（Windows のみ対応）](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/DM_Tools_v1.8.0.1.exe)

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/uXuzs1qmj6A?si=lfgXXlF1awhtnvaA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## ステップ 3: reBot Arm のキャリブレーションと入門

ここまでの動画に従って、ロボットアームの組み立て、ゼロ点初期化、モーター ID 設定などの準備が完了していることを前提とします。これで、公開している一連のチュートリアルやツールを本格的に活用する準備が整いました。

1. まずは **MotorBridge** プラットフォームをお試しください。これは、[Damiao](https://www.seeedstudio.com/DIP-Servo-Motor-24V-120RPM-Brushless-98-9mm-4P-L56-W56-H46mm-p-6660.html)、[Robstride](https://www.seeedstudio.com/Robostride-00-Actuator-p-6664.html)、[Hightorque](https://www.seeedstudio.com/Hightorque-HTDW-4438-30-NE-Gear-Motor-p-6482.html)、[Myactuator](https://www.seeedstudio.com/Myactuator-X4-P36-Planetary-Actuator-p-6469.html)、Hexfellow など、対応モーターを拡張し続けているオールインワンソリューションです。継続的にアップデートされる reBot などのロボットアームにも対応しています。初心者向けに設計されている一方で、開発者向けには同等の機能を実装した Python SDK も提供しています。

2. reBot ロボットアーム向け MotorBridge の新機能や詳細を体験してください。ワンクリックでのゼロ点設定、パラメータ書き込み、UI のドラッグ＆ドロップによるモーター制御、内蔵モデル可視化インターフェースなどを備えています。

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
スキャンされたすべてのモーターがオフライン表示になる場合は、motorbridge v0.2.9 をインストールしてください。
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

ブラウザで `https://rebot-devarm.w0x7ce.eu/` を開き、ヘルプをクリックします。お使いのシステムとドライバボードに適したコマンドをコピーし、IP とポートを確認してから、ターミナルで Enter キーを押します。

Windows の例：

```bash
motorbridge-gateway -- --bind 127.0.0.1:9002 --vendor damiao --transport dm-serial --serial-port COM3 --serial-baud 921600 --model 4340P --motor-id 0x01 --feedback-id 0x11 --dt-ms 20
```

  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/motorbridge_help.png" />
  </div>

## FAQ
### 1. モーター起動直後に大きな異常音が発生する
- この問題は通常、ID 設定中に誤ってパラメータキャリブレーションを実行してしまい、モーター慣性などの工場出荷時プリセットパラメータが上書きされることで発生します。以下から入手できる **DM_Tools_v.1.8.0.1.exe（Windows のみ）** を使用してください：
https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/DM_Tools_v1.8.0.1.exe
ホストソフトウェアを使って、同一モデルの正常なモーターからすべてのパラメータをエクスポートし、それらのパラメータを不具合のあるモーターにインポートして、対応する CAN ID を更新し、書き込んだパラメータを保存してから、ゼロ点キャリブレーションを実行してください。

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

### 2. すべてのモーターの CAN ID が同一になってしまった
- **DM_Tools_v.1.8.0.1.exe（Windows のみ）** でゼロ点キャリブレーションを行う際は、CAN ID フィールド横の Read や Set ボタンをクリックしないでください。デバッグインターフェースは CAN バス経由で通信しており、Set をクリックすると、CANBUS 上に接続されているすべてのモーターの CAN ID が同一に書き換えられてしまいます。


#### その後の操作手順については、チュートリアル動画をご参照ください。

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/SI1PRQYkhdg?si=E0m7uTF4IhCVZYl_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
