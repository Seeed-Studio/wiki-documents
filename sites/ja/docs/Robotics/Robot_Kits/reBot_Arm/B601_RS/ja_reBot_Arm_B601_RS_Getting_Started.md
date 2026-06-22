---
description: このガイドでは、reBot Arm B601-RS の購入方法、組み立て、キャリブレーション、ソフトウェア設定を含む、入門手順を説明します。
title: reBot Arm B601-RS クイックスタート
keywords:
  - reBot
  - B601-DM
  - B601-RS
  - Robotic Arm
  - Robot
  - Lerobot
  - Pinocchio
  - 6 DOF
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png
slug: /rebot_b601_rs_getting_started
translation:
  skip:
    - zh-CN
last_update:
  date: 2026-05-26
  author: LiuJunjie
createdAt: '2026-05-26'
updatedAt: '2026-06-16'
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
  <strong>6 自由度ロボットアーム · 複数モータ対応 · 運動学ソルバ · 軌道計画 · 完全オープンソース</strong>
</p>

reBot Arm プロジェクトは [GitHub](https://github.com/Seeed-Projects/reBot-DevArm) 上でオープンソース公開されています。本ガイドでは、B601-RS の組み立てから操作まで、クイックスタート手順を順を追って説明します。
本ガイドの内容は光の速さで鋭意執筆中です — 続報をお待ちください。

## ステップ 1: 組み立てガイド

- 組み立て前に、必ず以下の注意事項をよくお読みください。スムーズな組み立てと充実したハンズオン体験のために、焦らず、集中して、常に次のポイントを守って作業してください。
  1. 本キットには多数のネジや構造部品が含まれており、中には外観がよく似たものもあります。締結する前に、ネジの規格や部品の型番をよく確認し、取り付け方向が正しいか必ず確認してください。
  2. 動画は 4 月上旬時点の内容で収録されています。その後、部品に軽微な変更が入る場合がありますが、動画に従って組み立てれば品質には影響しません。最終的には、出荷された部品構成を正としてください。
  3. ネジの着脱を容易にするため、オープンソースの BOM では標準ネジを指定していますが、キットに同梱されているネジにはねじロック剤が塗布されています。お好みの工具や電動ドライバーを使用しても構いません（1 本用意しておくことを強く推奨します）。電動工具を使用する場合は、トルクを必ず低〜中程度（3〜6 kgf·cm）に設定し、過大トルクによるネジなめを防いでください。ネジがなめそうになったら、すぐに別のネジに交換するか、位置を調整して再度お試しください。ねじロック剤付きのネジがなめてしまうと、ネジ外し工具でも取り外せず、その部品全体が使用不能になります。十分ご注意ください。
  4. 組み立て作業中は安全を最優先し、指を挟んだり、潰したりしないよう注意してください。お子様が作業する場合は、必ず保護者の方が同伴してください。




## ステップ 2: ロボットアームのキャリブレーションと起動

1. **MotorBridge** プラットフォームを活用しましょう。このプラットフォームは、モータ種類の継続的な拡張に対応したワンストップの総合ソリューションであり、[Damiao モータ](https://www.seeedstudio.com/DIP-Servo-Motor-24V-120RPM-Brushless-98-9mm-4P-L56-W56-H46mm-p-6660.html)、[Robstride モータ](https://www.seeedstudio.com/Robostride-00-Actuator-p-6664.html)、[Hightorque モータ](https://www.seeedstudio.com/Hightorque-HTDW-4438-30-NE-Gear-Motor-p-6482.html)、[Myactuator モータ](https://www.seeedstudio.com/Myactuator-X4-P36-Planetary-Actuator-p-6469.html)、Hexfellow などをカバーしています。また、reBot のような継続的にアップデートされるロボットアーム製品にも対応しています。初心者にも扱いやすく、開発者向けには同等機能を備えた Python SDK も提供されています。

2. reBot ロボットアーム向けに特別に最適化された MotorBridge の新機能と詳細を体験してください。ワンクリックのゼロ点キャリブレーション、パラメータ書き込み、UI を使ったドラッグ＆ドロップによるモータ制御、内蔵のモデル可視化インターフェースなどが含まれます。

3. このツールは **Windows、Ubuntu、macOS** の各オペレーティングシステムに完全対応しています。

:::tip
1. 仮想マシンの使用は強く非推奨です。仮想マシン環境では問題が発生しやすくなります。

2.（ベータ版）エージェントにロボットアームの初期化を手伝ってもらいましょう。以下の内容をコピーしてエージェントに送信してください。

```text
Please follow the process in AGENTS.md (https://github.com/Welt-liu/reBot-B601-Agent-Guide/blob/main/en/AGENTS.md) to help the user complete the initialization of a new robotic arm.
```

  注意: もし事前組み立て済みキットを購入した場合は、モータ ID 書き込みのステップでエージェントに次のように伝えてください。「事前組み立て済みキットを購入しました。モータ 1〜7 がすべてオンラインであることだけ確認し、モータ ID は書き換えないでください。」

3. エージェントは CLI コマンドを使ってモータ ID の書き込みを行いますが、Wiki では Web UI を用いた操作方法を説明しています。どちらの方法でも問題ありません。

:::

ここまでの動画に従って、ロボットアーム組み立ての事前準備は完了しているはずです。次に、モータ ID の書き込み方法とロボットアームのキャリブレーション方法を紹介します。



### 1. Miniforge のインストール（推奨）（Windows\Ubuntu\macOS\Jetson\Raspberry Pi 対応）

1. Miniforge をインストールし、仮想環境を作成しておきましょう。これにより、他の環境パッケージとの競合によるデモ実行失敗を防ぐことができます。

Ubuntu\macOS\Jetson\Raspberry Pi:

```bash
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh
```

または Windows:

ブラウザで Miniforge の Release ページを開き、最新版の `Miniforge3-Windows-x86_64.exe` を探してクリックし、ダウンロードします。

```text
https://github.com/conda-forge/miniforge/releases
```

2. Python 3.12 の仮想環境を作成します。

:::tip
  **Git Bash ユーザーの方へ**: `conda` コマンドが見つからない場合は、Git Bash が conda 環境を読み込んでいないことを意味します。まず初期化を行う必要があります。

  ```bash
  # Temporary (current terminal only), replace <install_path> with the actual path
  source <install_path>/etc/profile.d/conda.sh

  # Permanent (write to bashrc, run once)
  echo 'source <install_path>/etc/profile.d/conda.sh' >> ~/.bashrc
  source ~/.bashrc
  ```

  PowerShell で conda 環境を自動的に有効化するには、次のようにします。

  ```bash
  conda init powershell
  ```

:::

```bash
conda create -y -n rebot python=3.12
```

3. 仮想環境を有効化します。**reBot 関連の機能を使用するたびに、ターミナルを開いたら毎回この有効化コマンドを再実行する必要があります。**

```bash
conda activate rebot
```

### 2. Motorbridge のインストール

reBot 用の仮想環境を有効化したら、次のコマンドを実行して motorbridge をインストールします。

:::tip macOS ユーザーへの注意
macOS でテレオペレーション中にフレームレートが低い場合、古い WCH CH34x ドライバが原因の可能性があります。**macOS 10.14 以降** では、システムに `AppleUSBCHC0M` ドライバが標準で含まれています。古いドライバをアンインストールし、macOS 標準ドライバに切り替えることで、フレームレートが大幅に改善されるはずです。
:::


```bash
pip install motorbridge
```

### 3. PCAN-USB

PCAN-USB デバイスを CAN バス上で 1Mbps で動作させ、ロボットアームとの通信を行えるようにします。

Ubuntu\macOS\Jetson\Raspberry Pi:

```bash
# The kit includes PCAN-USB, which should normally show up as can0 or can1
sudo modprobe peak_usb
ip -br link

# If can0 appears, set the bitrate
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up
```

Windows ユーザーは、[pcan-usb](https://www.peak-system.com/products/hardware/external-pc-interfaces/pcan-usb/) にアクセスして PCAN-USB ドライバをインストールしてください。

<!-- ### 3. Write Motor IDs

:::tip Pre-assembled kit users, please skip this step
:::

Use a screwdriver to disconnect all motor cables, then connect a single motor to the USB-to-CAN module.

Run the following command to scan whether the motor is detected. The factory ID may be 127.

```bash
motorbridge-cli scan --vendor robstride --channel can0 --start-id 126 --end-id 127 --timeout-ms 300
```

After confirming the motor's current ID, run the modification command (note: do not connect multiple motors at the same time, as this will cause all of them to be overwritten):

```bash
# Example: Change ID 127 to 5
motorbridge-cli id-set --vendor robstride --channel can0 --motor-id 127 --new-motor-id 5
```

Repeat the above steps until all motor IDs have been successfully written. Then connect all motor cables and run the following command to make a final confirmation. If 7 motors are detected, you are done.

```bash
motorbridge-cli scan --vendor robstride --channel can0 --start-id 1 --end-id 7 --timeout-ms 300
``` -->


### 4. MotorBridge-gateway を起動してゼロ点書き込みとデバッグを行う

#### モータリセット前の準備

モータパラメータを設定する前に、次の準備と安全ルールを必ず確認してください。

- 工作用クランプを 2 個（サイズ 3 インチ以上）と、48V XT30 出力のスイッチング電源（信頼できるメーカー品を選び、粗悪な電源は使用しないでください）を用意します。
- デバッグおよび動作中は、少なくとも 1 メートル以上の安全距離を保ってください。
- モータのホットプラグは行わないでください。XT30 2+2 コネクタの抜き差しは、必ず電源を切った状態で行ってください。
- モータを過負荷・過回転させないでください。起動前に配線やネジの緩みを確認し、多湿・高温・粉塵の多い環境では使用しないでください。
- 機器の暴走を防ぐため、適切なプログラムパラメータと非常停止機能を設定してください。
- **上記のルールを必ず厳守してください。規定に反する操作や人的ミスに起因するいかなるリスクや損失についても、販売者は責任を負いかねます。**


#### Web UI によるゼロ点書き込みとデバッグ

ブラウザで [motorbridge-studio](https://motorbridge.github.io/motorbridge-studio/) にアクセスし、Help オプションをクリックして、使用している OS とドライバボードに対応するコマンドをコピーします。IP アドレスとポート番号を確認したら、ターミナルで Enter キーを押して実行します。


```bash
motorbridge-gateway --bind 127.0.0.1:9002  
```


使い方については動画を参照してください。ロボットアームを操作する前に、必ずもう一度ゼロ点リセットを行う必要があります。

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/llSa6qn3yrY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
