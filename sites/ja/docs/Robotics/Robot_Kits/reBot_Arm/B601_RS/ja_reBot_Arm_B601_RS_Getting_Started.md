---
description: このガイドでは、reBot Arm B601-RS の購入オプション、組み立て、キャリブレーション、ソフトウェア設定を含む、入門手順を説明します。
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
  <strong>6-DOF ロボットアーム · マルチモーター対応 · 運動学ソルバ · 軌道計画 · 完全オープンソース</strong>
</p>

reBot Arm プロジェクトは [GitHub](https://github.com/Seeed-Projects/reBot-DevArm) 上でオープンソース公開されています。本ガイドでは、B601-RS の組み立てから操作まで、クイックスタートの手順を説明します。
本ガイドの内容は光の速さであなたのもとへ向かっています — 続報をお待ちください。

## ステップ 1: 組み立てガイド

- 組み立て前に、必ず以下の説明をよくお読みください。スムーズな組み立てと十分なハンズオン体験のために、落ち着いて作業し、集中力を保ち、常に次のポイントを守ってください。
  1. 本キットには多数のネジや構造部品が含まれており、中には外観がよく似ているものもあります。締め付ける前に、ネジの規格や部品の型番をよく確認し、取り付け方向が正しいか必ず確認してください。
  2. 動画は 4 月上旬に撮影されたものです。その後、部品に軽微な調整が入る場合がありますが、動画に従って組み立てる際の品質には影響しません。最終的な部品は出荷されたものを基準としてください。
  3. ネジの取り付け・取り外しを容易にするため、オープンソースの BOM では標準ネジを指定していますが、キットに同梱されているネジにはねじロック剤が塗布されています。お好みの工具や電動ドライバーを使用しても構いません（1 本用意しておくことを強く推奨します）。電動工具を使用する場合は、トルクを必ず低〜中程度（3–6 kgf·cm）に設定し、過大トルクによるネジなめを防いでください。ネジがなめそうな兆候があれば、すぐにネジを交換するか、位置を調整して再度試してください。ねじロック剤付きのネジがなめてしまうと、ネジ外し工具でも取り外せず、その部品全体が使用不能になります。十分に注意して作業してください。
  4. 組み立て中は安全を最優先し、指を挟んだり、潰したりするケガを防いでください。お子様が本プロジェクトを行う場合は、必ず保護者が同伴してください。




## ステップ 2: ロボットアームのキャリブレーションと起動

1. **MotorBridge** プラットフォームを活用しましょう。このプラットフォームは、モーターの種類を継続的に拡張できるワンストップの総合ソリューションであり、[Damiao モーター](https://www.seeedstudio.com/DIP-Servo-Motor-24V-120RPM-Brushless-98-9mm-4P-L56-W56-H46mm-p-6660.html)、[Robstride モーター](https://www.seeedstudio.com/Robostride-00-Actuator-p-6664.html)、[Hightorque モーター](https://www.seeedstudio.com/Hightorque-HTDW-4438-30-NE-Gear-Motor-p-6482.html)、[Myactuator モーター](https://www.seeedstudio.com/Myactuator-X4-P36-Planetary-Actuator-p-6469.html)、Hexfellow などをカバーしています。また、reBot のような継続的にアップデートされるロボットアーム製品にも対応しています。プラットフォームは初心者にも使いやすく、開発者向けには同等機能を備えた Python SDK も提供しています。

2. reBot ロボットアーム向けに特別に最適化された MotorBridge の新機能と詳細を体験してください。ワンクリックのゼロ点キャリブレーション、パラメータ書き込み、UI を介したドラッグ＆ドロップによるモーター制御、組み込みのモデル可視化インターフェースなどが含まれます。

3. このツールは **Windows、Ubuntu、macOS** オペレーティングシステムに完全対応しています。

:::tip
1. 仮想マシンの使用は強く非推奨です。仮想マシンでは環境起因の問題が発生しやすくなります。

2.（ベータ版）エージェントにロボットアームの初期化を手伝ってもらいましょう。以下の内容をコピーしてエージェントに送信してください。

```text
Please follow the process in AGENTS.md (https://github.com/Welt-liu/reBot-B601-Agent-Guide/blob/main/en/AGENTS.md) to help the user complete the initialization of a new robotic arm.
```

  注意: もし事前組み立て済みキットを購入した場合は、モーター ID 書き込みのステップでエージェントに次のように伝えてください。「事前組み立て済みキットを購入しました。モーター 1〜7 がすべてオンラインであることを確認するためにスキャンしてください。モーター ID は書き換えないでください。」

3. エージェントは CLI コマンドを使用してモーター ID の書き込みを行いますが、wiki では Web UI による操作方法を採用しています。どちらの方法でも問題ありません。

:::

ここまでの動画に従って、ロボットアーム組み立ての事前準備が完了しているはずです。次に、モーター ID の書き込み方法とロボットアームのキャリブレーション方法を紹介します。



### 1. Miniforge のインストール（推奨）（Windows\Ubuntu\macOS\Jetson\Raspberry Pi 対応）

1. Miniforge をインストールし、仮想環境を作成して、他の環境パッケージとの競合によるデモ失敗を避けます。

Ubuntu\Jetson\Raspberry Pi:

```bash
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh
```

または macOS:
```bash
curl -L -O "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-MacOSX-$(uname -m).sh"
bash Miniforge3-MacOSX-$(uname -m).sh
```

または Windows:

ブラウザで Miniforge の Release ページを開き、最新バージョンの `Miniforge3-Windows-x86_64.exe` を探してクリックし、ダウンロードします。

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

  PowerShell で conda 環境を自動的にアクティブ化するには:

  ```bash
  conda init powershell
  ```

:::

```bash
conda create -y -n rebot python=3.12
```

3. 仮想環境をアクティブ化します。**reBot 関連の機能を使用するためには、ターミナルを開くたびにこのアクティベーションコマンドを再度実行する必要があります。**

```bash
conda activate rebot
```

### 2. Motorbridge のインストール

reBot 用の仮想環境をアクティブ化したら、次のコマンドを実行して motorbridge をインストールします。

:::tip macOS ユーザーへの注意
macOS でテレオペレーション中にフレームレートが低い場合、古い WCH CH34x ドライバが原因の可能性があります。**macOS 10.14 以降** では、システムに `AppleUSBCHC0M` ドライバが標準で含まれています。古いドライバをアンインストールし、macOS 標準ドライバに切り替えることで、フレームレートが効果的に改善されるはずです。
:::


```bash
pip install motorbridge
```

### 3. PCAN-USB

PCAN-USB デバイスを CAN バス上で 1Mbps で動作させ、ロボットアームとの通信を行います。

Ubuntu\Jetson\Raspberry Pi:

```bash
# The kit includes PCAN-USB, which should normally show up as can0 or can1
sudo modprobe peak_usb
ip -br link

# If can0 appears, set the bitrate
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up
```

または macOS:

libPCBUSB.dylib を読み込めない場合は、先に PCBUSB をインストールしてください。
```zsh
curl -L -o macOS_Library_for_PCANUSB_v0.13.tar.gz \
  https://raw.githubusercontent.com/tianrking/motorbridge/main/third_party/pcan/macos/macOS_Library_for_PCANUSB_v0.13.tar.gz
tar -xzf macOS_Library_for_PCANUSB_v0.13.tar.gz
cd PCBUSB
sudo ./install.sh
```

`DYLD_LIBRARY_PATH` を設定して、motorbridge-gateway が実行時に PCBUSB ライブラリを見つけられるようにします。`conda activate rebot` を実行するたびに自動的に有効になるよう、conda 環境内にアクティベーションスクリプトを作成します。

```bash
mkdir -p "$CONDA_PREFIX/etc/conda/activate.d"
cat > "$CONDA_PREFIX/etc/conda/activate.d/env_vars.sh" << 'EOF'
export DYLD_LIBRARY_PATH="/usr/local/lib${DYLD_LIBRARY_PATH:+:$DYLD_LIBRARY_PATH}"
EOF

echo $DYLD_LIBRARY_PATH
```

準備ができているか確認します。
```zsh
# Check Python package and CLI are ready
python3 -c "import motorbridge; print('motorbridge OK')"
motorbridge-cli --help

# Optional: Check if PCBUSB runtime is loadable
python3 -c "import ctypes; ctypes.CDLL('libPCBUSB.dylib'); print('PCBUSB load OK')"
```

または Windows:

[pcan-usb](https://www.peak-system.com/products/hardware/external-pc-interfaces/pcan-usb/) にアクセスして、PCAN-USB ドライバをインストールしてください。

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

#### モーターリセット前に

モーターのパラメータ設定を行う前に、次の準備と安全ルールを必ず守ってください。

- 工作用クランプを 2 個（サイズ 3 インチ以上）と、48V XT30 出力のスイッチング電源を用意してください（信頼できるブランドを選び、粗悪な電源は使用しないでください）。
- デバッグおよび動作中は、少なくとも 1 メートル以上の安全距離を保ってください。
- モーターのホットプラグは行わないでください。XT30 2+2 コネクタの抜き差しは、必ず電源を切った状態で行ってください。
- モーターを過負荷・過回転させないでください。起動前に配線や固定部を確認し、湿気の多い場所、高温環境、粉じんの多い環境では使用しないでください。
- 機器の暴走を防ぐため、適切なプログラムパラメータと非常停止機能を設定してください。
- **上記のルールを必ず厳守してください。規定に反する操作や人的ミスによって生じたあらゆるリスクや損失について、販売者は一切の責任を負いません。**


#### Web UI ゼロ点書き込みとデバッグ

ブラウザで [motorbridge-studio](https://motorbridge.github.io/motorbridge-studio/) のアドレスを開き、Help オプションをクリックし、使用しているオペレーティングシステムとドライバボードに応じたコマンドをコピーし、IP アドレスとポート番号を確認してから、ターミナルで Enter キーを押して実行します。


```bash
motorbridge-gateway --bind 127.0.0.1:9002  
```

macOS:

```bash
motorbridge-gateway --bind 127.0.0.1:9002 
```

または

```bash
DYLD_LIBRARY_PATH=/usr/local/lib motorbridge-gateway --bind 127.0.0.1:9002 
```


使用方法については動画を参照してください。ロボットアームを操作する前に、もう一度ゼロ点をリセットする必要があります。

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/llSa6qn3yrY?si=hMuZKVDY9yqx3qHx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 電源について

1. ロボットアームには電源は同梱されておらず / 既定では電源は含まれていません。ご自身でバッテリーを接続するか、当社のオープンソース [48V 12.5A MeanWell 電源](https://www.seeedstudio.com/Power-Adapter-Kit-for-reBot-Arm-B601-RS-p-6873.html)を購入することができます。

   <div align="center">
     <img width={800}
     src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100054289-gallery-6.jpg" />
   </div>

2. あるいは、当社のオープンソース 24V 14.6A MeanWell 電源エンクロージャを選択し、自分で組み立てることもできます。テキストによる説明と BOM は [GitHub リポジトリ](https://github.com/LAN-GER/reBot-DevArm/tree/main/hardware/reBot_B601_RS) でオープンソース化されています（関連する電源組立経験を持つ開発者にのみ推奨）。

   組立参考動画：

   <div class="video-container">
     <iframe width="900" height="600" src="https://www.youtube.com/embed/5GitUWT9gx0?si=I_dnd2bSNHbB95BW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
   </div>