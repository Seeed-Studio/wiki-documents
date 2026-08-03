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
  skip: [zh-CN]
last_update:
  date: 2026-07-28
  author: LiuJunjie
createdAt: '2026-05-26'
updatedAt: '2026-07-28'
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

reBot Arm プロジェクトは [GitHub](https://github.com/Seeed-Projects/reBot-DevArm) 上でオープンソース公開されています。このガイドでは、B601-RS の組み立てから操作まで、クイックスタートの手順を説明します。
このガイドの内容は光の速さであなたのもとへ向かっています — 続報をお待ちください。

## 安全に関する免責事項およびリスク通知

<div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", gap: "16px" }}>
    <img style={{ width: "calc(50% - 8px)", maxWidth: "420px", height: "auto" }}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/Chinese%20version%20statement.png" />
    <img style={{ width: "calc(50% - 8px)", maxWidth: "420px", height: "auto" }}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/English%20Version%20Statement.png" />
</div>

## 電源について

1. ロボットアームには電源は同梱されておらず、標準では電源は含まれていません。ご自身でバッテリーを接続するか、当社のオープンソース [48V 12.5A MeanWell 電源](https://www.seeedstudio.com/Power-Adapter-Kit-for-reBot-Arm-B601-RS-p-6873.html) または [Amazon](https://www.amazon.com/LRS-600-48-Switching-Upgrade-Version-SE-600-48/dp/B0BV5XFYNS/ref=sr_1_1?crid=2MK5Y1UI66CW9&dib=eyJ2IjoiMSJ9.FAt8rrpVeLIbeU2px5Bpe3WU2xsHpE3Kw1Fc6ZdPBFrIpRsaASOwU1dL9jPUNnpXO5u67hvlSXTsKCXH7jehZ8VWfiSFbcHmsVhJY_ua86iPUltJFeWlT9LIXphFER27jHWGnaJb2NdRIpPBMVdae8qgIllUI1J-Q8pZranpyjkkiJP2RmiEdhUBXTvvH3-vhk8z2uhf7BJrGW7hjRbjyCO7WHwwBQ3tMcnEKwto2doy9qus35djHRzODSFPbMuiA66PdgPuib4VL1aQghehDEiceMIpTUiCHHeRHfpB71M._yrosm8mVfpUq-5PjNTLSaYPgv8Dot6YbQTaGULjlLQ&dib_tag=se&keywords=LRS-600-48&qid=1781762081&s=electronics&sprefix=lrs-600-48%2Celectronics%2C351&sr=1-1) からご購入ください。無名メーカーや安全でないチャネルからの電源は購入しないでください。これに起因して発生したいかなるリスクや結果も、すべてご自身の責任となります。

ご家庭の電圧が 220V の場合は、電源側面の電圧切替スイッチを 230V に設定してください。ご家庭の電圧が 110V の場合は、115V に切り替えてください。

| **220V** | **110V** |
|:---:|:---:|
| <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/230V.jpg" width="300" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/115V.jpg" width="300" /> |


   <div align="center">
     <img width={800}
     src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100054289-gallery-6.jpg" />
   </div>

2. あるいは、当社のオープンソース 24V 14.6A MeanWell 電源エンクロージャを選択し、自分で組み立てることもできます。テキストによる説明書と BOM は [GitHub リポジトリ](https://github.com/LAN-GER/reBot-DevArm/tree/main/hardware/reBot_B601_RS) でオープンソース公開されています（関連する電源組み立て経験を持つ開発者にのみ推奨）。

   組み立て参考動画：

   <div class="video-container">
     <iframe width="900" height="600" src="https://www.youtube.com/embed/5GitUWT9gx0?si=I_dnd2bSNHbB95BW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
   </div>

## ステップ 1: 組み立てガイド

- 組み立て前に、以下の説明をよくお読みください。スムーズな組み立て作業と充実したハンズオン体験のために、落ち着いて、集中して、常に次の重要なポイントに従ってください。
  1. このキットには多数のネジと構造部品が含まれており、中には見た目がよく似ているものもあります。ネジの規格や部品の型番をよく確認し、締め付ける前に取り付け方向を必ず確認してください。
  2. 動画は 4 月上旬に撮影されたものです。その後、部品に軽微な調整が入る場合がありますが、動画に従って組み立てる際の品質には影響しません。最終的な部品は出荷されたものを基準としてください。
  3. ネジの取り付け・取り外しを容易にするため、オープンソースの BOM では標準ネジを指定しています。しかし、キットに同梱されているネジにはねじロック剤が塗布されています。お好みの工具や電動ドライバーを使用しても構いません（1 本用意しておくことを強く推奨します）。電動工具を使用する場合は、トルクを必ず低〜中レベル（3〜6 kgf·cm）に設定し、過大なトルクによってネジをなめてしまい、部品が取り外せなくなるような取り返しのつかない損傷を避けてください。なめかけの兆候があれば、すぐにネジを交換するか、位置を調整して再度お試しください。ねじロック剤付きでなめてしまったネジは、ネジ抜き工具でも外せず、その部品全体が廃棄となります。そのため、十分に注意して作業してください。
  4. 組み立て作業中は安全を最優先し、指を挟んだり押しつぶしたりするケガを避けてください。お子様が本プロジェクトを行う場合は、必ず保護者が同伴してください。




## ステップ 2: ロボットアームのキャリブレーションと起動

1. **MotorBridge** プラットフォームを活用しましょう。このプラットフォームは、モーターの種類を継続的に拡張可能なワンストップ総合ソリューションであり、[Damiao モーター](https://www.seeedstudio.com/DIP-Servo-Motor-24V-120RPM-Brushless-98-9mm-4P-L56-W56-H46mm-p-6660.html)、[Robstride モーター](https://www.seeedstudio.com/Robostride-00-Actuator-p-6664.html)、[Hightorque モーター](https://www.seeedstudio.com/Hightorque-HTDW-4438-30-NE-Gear-Motor-p-6482.html)、[Myactuator モーター](https://www.seeedstudio.com/Myactuator-X4-P36-Planetary-Actuator-p-6469.html)、Hexfellow などをカバーしています。また、reBot のような継続的にアップデートされるロボットアーム製品にも対応しています。プラットフォームは初心者にも扱いやすく、開発者向けには同等機能を備えた Python SDK も提供しています。

2. reBot ロボットアーム向けに特別に最適化された MotorBridge の新機能と詳細を体験してください。ワンクリックのゼロ点キャリブレーション、パラメータ書き込み、UI を介したドラッグ＆ドロップによるモーター制御、組み込みのモデル可視化インターフェースなどが含まれます。

3. このツールは **Windows、Ubuntu、macOS** の各オペレーティングシステムに完全対応しています。

:::tip
1. 仮想マシンの性能ではデモを実行するのに不十分であり、設定上の問題も確認されています。ロボットアームの制御には Ubuntu の物理マシンを使用することを推奨します。

2.（ベータ版）エージェントにロボットアームの初期化を手伝ってもらいましょう。以下の内容をコピーしてエージェントに送信してください。

```text
Please follow the process in AGENTS.md (https://github.com/Welt-liu/reBot-B601-Agent-Guide/blob/main/en/AGENTS.md) to help the user complete the initialization of a new robotic arm.
```

  注意：完成品キットを購入した場合は、モーター ID 書き込みのステップでエージェントに次のように伝えてください。「完成品キットを購入しました。モーター 1〜7 がすべてオンラインであることを確認するためにスキャンしてください。モーター ID は書き換えないでください。」

3. エージェントは CLI コマンドを使用してモーター ID の書き込みを行いますが、Wiki では Web UI による操作方法を説明しています。どちらの方法でも問題ありません。

:::

動画に従って、ロボットアーム組み立ての事前準備は完了しているはずです。次に、モーター ID の書き込みとロボットアームのキャリブレーション手順を紹介します。


動画およびテキストチュートリアルを参照してください。ロボットアームを制御する前に、もう一度ゼロ点をリセットする必要があります。

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/llSa6qn3yrY?si=hMuZKVDY9yqx3qHx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>



### 1. Miniforge をインストールする（推奨）（Windows\Ubuntu\macOS\Jetson\Raspberry Pi 対応）

1. Miniforge をインストールし、仮想環境を作成して、他の環境パッケージとの競合によるデモ失敗を防ぎます。

Ubuntu\Jetson\Raspberry Pi:

```bash
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh
```

or macOS:
```bash
curl -L -O "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-MacOSX-$(uname -m).sh"
bash Miniforge3-MacOSX-$(uname -m).sh
```

or Windows:

ブラウザで Miniforge の Release ページを開き、最新版の `Miniforge3-Windows-x86_64.exe` を探してクリックし、ダウンロードします。

```text
https://github.com/conda-forge/miniforge/releases
```

2. Python 3.12 の仮想環境を作成します。

:::tip
  **Git Bash ユーザー**：`conda` コマンドが見つからない場合は、Git Bash が conda 環境を読み込んでいないことを意味します。まず初期化する必要があります。

  ```bash
  # Temporary (current terminal only), replace <install_path> with the actual path
  source <install_path>/etc/profile.d/conda.sh

  # Permanent (write to bashrc, run once)
  echo 'source <install_path>/etc/profile.d/conda.sh' >> ~/.bashrc
  source ~/.bashrc
  ```

  PowerShell で conda 環境を自動的にアクティブ化するには：

  ```bash
  conda init powershell
  ```

:::

```bash
conda create -y -n rebot python=3.12
```

3. 仮想環境を有効化します。**reBot 関連の機能を使用するためには、ターミナルを開くたびにこの有効化コマンドを再度実行する必要があります。**

```bash
conda activate rebot
```

### 2. Motorbridge をインストールする

reBot の仮想環境を有効化したら、次のコマンドを実行して motorbridge をインストールします：

:::tip macOS ユーザーへの注意
macOS でテレオペレーション中にフレームレートが低い場合、古い WCH CH34x ドライバーバージョンが原因の可能性があります。**macOS 10.14 以降**では、システムに組み込みの `AppleUSBCHC0M` ドライバーが含まれています。古いドライバーをアンインストールして macOS の組み込みドライバーに切り替えることで、フレームレートを効果的に改善できます。
:::


```bash
pip install motorbridge
```

### 3. PCAN-USB

ロボットアームとの通信のため、CAN バス上で 1Mbps で動作するように PCAN-USB デバイスを設定します。

#### Ubuntu:

```bash
# The kit includes PCAN-USB, which should normally show up as can0 or can1
sudo modprobe peak_usb
ip -br link

# If can0 appears, set the bitrate
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

#### macOS:

libPCBUSB.dylib を読み込めない場合は、先に PCBUSB をインストールしてください：
```zsh
curl -L -o macOS_Library_for_PCANUSB_v0.13.tar.gz \
  https://raw.githubusercontent.com/tianrking/motorbridge/main/third_party/pcan/macos/macOS_Library_for_PCANUSB_v0.13.tar.gz
tar -xzf macOS_Library_for_PCANUSB_v0.13.tar.gz
cd PCBUSB
sudo ./install.sh
```

`DYLD_LIBRARY_PATH` を設定して、実行時に motorbridge-gateway が PCBUSB ライブラリを見つけられるようにします。`conda activate rebot` を実行するたびに自動的に有効になるよう、conda 環境内にアクティベーションスクリプトを作成します：

```bash
mkdir -p "$CONDA_PREFIX/etc/conda/activate.d"
cat > "$CONDA_PREFIX/etc/conda/activate.d/env_vars.sh" << 'EOF'
export DYLD_LIBRARY_PATH="/usr/local/lib${DYLD_LIBRARY_PATH:+:$DYLD_LIBRARY_PATH}"
EOF

echo $DYLD_LIBRARY_PATH
```

準備ができているか確認します：
```zsh
# Check Python package and CLI are ready
python3 -c "import motorbridge; print('motorbridge OK')"
motorbridge-cli --help

# Optional: Check if PCBUSB runtime is loadable
python3 -c "import ctypes; ctypes.CDLL('libPCBUSB.dylib'); print('PCBUSB load OK')"
```

#### Windows:

PCAN-USB ドライバーをインストールするには、[pcan-usb](https://www.peak-system.com/products/hardware/external-pc-interfaces/pcan-usb/) を参照してください。

#### Jetson:
  [peak-linux-driver-9.2.0.tar.gz](https://www.peak-system.com/quick/PCAN-Linux-Driver?_gl=1*1shem7p*_up*MQ..*_gs*MQ..&gclid=CjwKCAjwj7HTBhBiEiwA8s35OkNgKcwSr95URUncy5ADLlO-AjdZSFxtqTgof7UY2-LgkXWyoHMX3RoC0i4QAvD_BwE&gbraid=0AAAAAD_YjBa3gnuD4t8dG6dxnFEdZOcTz)

- brltty を削除
Jetson では、brltty がリーダーが使用する USB シリアルポートを占有している場合があります。まずこれを削除します：
```bash
sudo apt remove -y brltty
```

- 依存関係をインストール
```bash
sudo apt update
sudo apt install -y \
    build-essential \
    gcc \
    g++ \
    make \
    libpopt-dev \
    can-utils \
    ethtool \
    nvidia-l4t-kernel-headers
```
現在のカーネルヘッダーディレクトリが存在することを確認します：
```bash
ls -l /lib/modules/$(uname -r)/build
```

- PEAK SocketCAN ドライバーをコンパイル
PEAK Linux Driver 9.2.0 をダウンロードして展開し、ソースディレクトリに入ります：
```bash
tar -xvf peak-linux-driver-9.2.0.tar.gz
cd ~/peak-linux-driver-9.2.0
```
以前のビルド成果物をクリーンアップします：
```bash
make clean
```
netdev モードでコンパイルします：
```bash
make netdev
```
netdev モードでは、PCAN-USB が Linux SocketCAN ネットワークインターフェースとして登録されます。
プレーンな `make` は使用しないでください。プレーンな `make` は chardev モードをビルドしますが、LeRobot と motorbridge-cli は SocketCAN インターフェースに依存しています。

- ドライバーのインストールと読み込み
ドライバーをインストールします：
```bash
sudo make install
sudo depmod -a
```
pcan カーネルモジュールを読み込みます：
```bash
sudo modprobe pcan
```
起動時に自動で読み込まれるようにします：
```bash
echo pcan | sudo tee /etc/modules-load.d/pcan.conf
```
ドライバーが読み込まれていることを確認します：
```bash
ip -br link | grep can
```
想定される出力：
```
can0             DOWN           <NOARP,ECHO>
can1             DOWN           <NOARP,ECHO>
.....
```

- ロボットアームに対応する PCAN インターフェースを特定
```bash
for i in /sys/class/net/can*; do [ "$(basename "$(readlink -f "$i/device/driver" 2>/dev/null)")" = "pcan" ] && basename "$i"; done
```
ここに表示されるインターフェースは PEAK PCAN-USB デバイスです。例：
```
can2
```

- `pcan_refresh` コマンドを永続化
Linux の環境変数は再起動後に保持されず、PCAN インターフェースの番号も変わる可能性があります。より確実な方法は、リフレッシュ関数を永続的に定義し、ターミナルを開いた後に実行することです。

関数を `~/.bashrc` に追記します：
```bash
grep -q '^pcan_refresh()' ~/.bashrc || cat >> ~/.bashrc <<'EOF'

pcan_refresh() {
    local iface
    iface=$(sudo setup-pcan-if) || return 1
    export PCAN_IF="$iface"
    echo "PCAN_IF=$PCAN_IF"
}
EOF
```
```bash
source ~/.bashrc
```
再起動後、または PCAN-USB を再接続した後に、次を実行します：
```bash
pcan_refresh
```
成功すると、次のように出力されます：
```
PCAN_IF=can1
```
以降のすべてのコマンドでは、`can1` や `can2` をハードコードする代わりに `$PCAN_IF` を使用してください。

---

または Jetson：
  [peak-linux-driver-9.2.0.tar.gz](https://www.peak-system.com/quick/PCAN-Linux-Driver?_gl=1*1shem7p*_up*MQ..*_gs*MQ..&gclid=CjwKCAjwj7HTBhBiEiwA8s35OkNgKcwSr95URUncy5ADLlO-AjdZSFxtqTgof7UY2-LgkXWyoHMX3RoC0i4QAvD_BwE&gbraid=0AAAAAD_YjBa3gnuD4t8dG6dxnFEdZOcTz)

- brltty を削除
Jetson では、brltty がリーダーが使用する USB シリアルポートを占有している場合があります。まずこれを削除します：
```bash
sudo apt remove -y brltty
```

- 依存関係をインストール
```bash
sudo apt update
sudo apt install -y \
    build-essential \
    gcc \
    g++ \
    make \
    libpopt-dev \
    can-utils \
    ethtool \
    nvidia-l4t-kernel-headers
```
現在のカーネルヘッダディレクトリが存在することを確認します：
```bash
ls -l /lib/modules/$(uname -r)/build
```

- PEAK SocketCAN ドライバをコンパイル
PEAK Linux Driver 9.2.0 をダウンロードして展開し、ソースディレクトリに入ります：
```bash
tar -xvf peak-linux-driver-9.2.0.tar.gz
cd ~/peak-linux-driver-9.2.0
```
以前のビルド成果物をクリーンアップします：
```bash
make clean
```
netdev モードでコンパイルします：
```bash
make netdev
```
netdev モードでは、PCAN-USB が Linux SocketCAN ネットワークインターフェースとして登録されます。
プレーンな `make` は使用しないでください。プレーンな `make` は chardev モードをビルドしますが、LeRobot と motorbridge-cli は SocketCAN インターフェースに依存しています。

- ドライバのインストールと読み込み
ドライバをインストールします：
```bash
sudo make install
sudo depmod -a
```
pcan カーネルモジュールを読み込みます：
```bash
sudo modprobe pcan
```
起動時に自動で読み込まれるように有効化します：
```bash
echo pcan | sudo tee /etc/modules-load.d/pcan.conf
```
ドライバが読み込まれていることを確認します：
```bash
ip -br link | grep can
```
期待される出力：
```
can0             DOWN           <NOARP,ECHO>
can1             DOWN           <NOARP,ECHO>
.....
```

- ロボットアームに対応する PCAN インターフェースを特定
```bash
for i in /sys/class/net/can*; do [ "$(basename "$(readlink -f "$i/device/driver" 2>/dev/null)")" = "pcan" ] && basename "$i"; done
```
ここに表示されるインターフェースは PEAK PCAN-USB デバイスです。例：
```
can2
```

- `pcan_refresh` コマンドを永続化
Linux の環境変数は再起動後に保持されず、PCAN インターフェース番号も変わる可能性があります。より信頼性の高い方法として、リフレッシュ関数を永続的に定義し、ターミナルを開いた後に実行します。

関数を `~/.bashrc` に追記します：
```bash
grep -q '^pcan_refresh()' ~/.bashrc || cat >> ~/.bashrc <<'EOF'

pcan_refresh() {
    local iface
    iface=$(sudo setup-pcan-if) || return 1
    export PCAN_IF="$iface"
    echo "PCAN_IF=$PCAN_IF"
}
EOF
```
```bash
source ~/.bashrc
```
再起動後、または PCAN-USB を再接続した後に、次を実行します：
```bash
pcan_refresh
```
成功すると、次のように出力されます：
```
PCAN_IF=can1
```
以降のすべてのコマンドでは、`can1` や `can2` をハードコードする代わりに `$PCAN_IF` を使用してください。

---

:::tip 注意
ドライバーをインストールしても **PCAN-USB** がデバイスマネージャーで検出されない場合は、以下のセクションを展開し、PCAN ファームウェアをダウンロードして、復旧手順に従ってください。
:::



<details>

<summary>PCAN ファームウェアのダウンロードとドライバー復旧手順</summary>

ドライバーをインストールしても PCAN-USB が依然として動作せず、デバイスマネージャーに下図のような **PCAN-USB** デバイスが表示されない場合は、PCAN ファームウェアパッケージをダウンロードし、次の手順に従って DFU ドライバーをインストールし、ファームウェアを書き換えてください。

![デバイスマネージャーで検出された PCAN-USB](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/01-pcan-usb-device.png)

> 📦 [USB2CAN.zip をダウンロード](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/USB2CAN.zip)

### DFU ドライバーをインストール

1. ダウンロードしたパッケージを展開します。`Dfu tool` フォルダーと `pcan` フォルダーが含まれています。

![パッケージから展開された Dfu tool と pcan フォルダー](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/02-extracted-folders.png)

2. `Dfu tool` フォルダーを開き、`.exe` インストーラーを実行します。インストール後、ドライバーのインストールパスを記録しておきます。例：

```text
C:\Program Files (x86)\STMicroelectronics\Software\DfuSe v3.0.6\Bin\Driver
```

![DfuSe インストーラーとドライバーのインストールパス](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/03-dfuse-install-location.png)

3. USB2CAN モジュールの DIP スイッチを **BOOT** に設定し、モジュールをコンピューターに接続します。

![USB2CAN の DIP スイッチを BOOT に設定](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/04-usb2can-boot-switch.jpg)

4. **デバイスマネージャー** を開き、**その他のデバイス → STM32 BOOTLOADER** を見つけて右クリックし、**ドライバーの更新** を選択してから、**コンピューターを参照してドライバーを検索** を選択します。

![デバイスマネージャー内の STM32 BOOTLOADER](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/05-stm32-bootloader.png)

![Browse my computer for drivers を選択](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/06-update-driver.png)

5. 先ほど記録した DfuSeDemo ドライバーのパスを場所のフィールドに貼り付け、**サブフォルダーも検索する** を選択してから **次へ** をクリックします。

![DfuSeDemo ドライバーのパスを入力し、Include subfolders を選択](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/07-driver-path.png)

6. USB2CAN モジュールをいったん取り外してから再接続します。**STM Device in DFU Mode** として認識されれば、ドライバーの更新は成功です。

7. **DfuSeDemo** を開き、USB2CAN モジュールが正しく検出されていることを確認します。

![DfuSeDemo が USB2CAN モジュールを正しく検出](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/08-dfuse-detects-usb2can.png)

### PCAN ファームウェアを書き込み

1. DfuSeDemo で **Upgrade or Verify Action → Choose...** をクリックし、展開した `pcan` フォルダー内のファームウェアを選択します。
2. **Upgrade** をクリックし、確認ダイアログで **Yes** をクリックして、ファームウェアの書き込み処理が完了するまで待ちます。その後、DfuSeDemo を閉じてかまいません。

![DfuSeDemo で PCAN ファームウェアを選択し Upgrade をクリック](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/09-select-pcan-firmware.png)

![ファームウェアのアップグレード完了](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/10-firmware-upgrade-complete.png)

### デバイスの復元と確認

USB2CAN モジュールを取り外し、DIP スイッチを **120R** に戻してから、再度コンピューターに接続します。デバイスマネージャーを開きます。デバイスが **PCAN-USB** として認識されていれば、問題は解決しており、このガイドを続行できます。

![デバイスマネージャーで正常に検出された PCAN-USB](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/11-pcan-usb-recognized.png)

</details>

<details>
<summary>PCAN ファームウェアのダウンロードとドライバー修復手順 - Ubuntu</summary>

Ubuntu ユーザーはこのガイドを参照してください

1.> 📦 [USB2CAN.zip をダウンロードするにはここをクリック](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/USB2CAN.zip)

2. USB2CAN を BOOT に切り替えます

3. 手順 1 でダウンロードした USB2CAN.zip を展開し、flash_pcan_ubuntu.sh と pcan_canable_hw.bin（USB2CAN.zip 内にあります）を同じディレクトリに配置します

[flash_pcan_ubuntu.sh をダウンロードするにはここをクリック](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/flash_pcan_ubuntu.sh)

別のコンピューターから転送する場合（例：scp）：

```text
scp flash_pcan_ubuntu.sh pcan_canable_hw.bin seeed@your_Ubuntu_IP:~/Downloads/
```
あるいは単に USB フラッシュドライブにコピーして Ubuntu マシンに挿してもかまいません。ファイルが最終的に ~/Downloads、カレントディレクトリ、または /tmp のいずれかにあれば、スクリプトが自動的に見つけてくれます。

4. 次を実行します：

```text
bash flash_pcan_ubuntu.sh
```

パスワードを入力し、完了するまで待ちます

完了したら、「120R」に戻します

USB を再接続します。

</details>

<details>
<summary>PCAN ファームウェアのダウンロードとドライバー修復手順 - MAC</summary>

MAC ユーザーはこのガイドを参照してください

1.> 📦 [USB2CAN.zip をダウンロードするにはここをクリック](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/USB2CAN.zip)

2. USB2CAN を BOOT に切り替えます

3.手順1で取得したUSB2CAN.zipを展開し、その中にあるflash_pcan_mac.shとpcan_canable_hw.binを同じディレクトリに配置します

[flash_pcan_mac.sh をダウンロードするにはここをクリック](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/flash_pcan_mac.sh)

別のコンピュータから転送する場合（例：scp）：

```text
scp flash_pcan_mac.sh pcan_canable_hw.bin seeed@your_MAC_IP:~/Downloads/
```

または、USBフラッシュドライブにコピーしてMACに挿すだけでも構いません。ファイルが~/Downloads、カレントディレクトリ、または/tmpのいずれかにあれば、スクリプトが自動的に見つけてくれます。

4.次を実行します：

```text
bash /Users/"your_username"/Downloads/flash_pcan_mac.sh "/Users/"your_username"/Downloads/pcan_canable_hw.bin"
```

上記のコマンドは、ファイルがMacのDownloadsパスに配置されていることを前提としています。実際のパスに応じて調整してください。

パスワードを入力し、完了するまで待ちます

完了したら、「120R」に戻します

USBを挿し直します。

</details>

<!-- ### 3. モーターIDの書き込み

:::tip 組立済みキットのユーザーは、この手順をスキップしてください
:::

ドライバーを使ってすべてのモーターケーブルを外し、1つのモーターだけをUSB-to-CANモジュールに接続します。

次のコマンドを実行して、モーターが検出されているかをスキャンします。工場出荷時のIDは127の場合があります。

```bash
motorbridge-cli scan --vendor robstride --channel can0 --start-id 126 --end-id 127 --timeout-ms 300
```

モーターの現在のIDを確認したら、変更コマンドを実行します（注意：複数のモーターを同時に接続しないでください。すべて上書きされてしまいます）：

```bash
# Example: Change ID 127 to 5
motorbridge-cli id-set --vendor robstride --channel can0 --motor-id 127 --new-motor-id 5
```

上記の手順を、すべてのモーターIDを書き込み終えるまで繰り返します。その後、すべてのモーターケーブルを接続し、最終確認のために次のコマンドを実行します。7つのモーターが検出されれば完了です。

```bash
motorbridge-cli scan --vendor robstride --channel can0 --start-id 1 --end-id 7 --timeout-ms 300
``` -->


### 4. MotorBridge-gateway を起動してゼロ点書き込みとデバッグを行う

#### モーターリセット前

モーターのパラメータ設定を行う前に、次の準備と安全ルールに注意してください：

- 工作用クランプを2個（サイズ3インチ以上）と、48V XT30出力のスイッチング電源を用意してください（信頼できるブランドを選び、粗悪な電源は使用しないでください）。
- デバッグおよび動作中は、少なくとも1メートル以上の安全距離を保ってください。
- モーターをホットプラグしないでください。XT30 2+2コネクタの抜き差しは、必ず電源を切ってから行ってください。
- モーターを過負荷・過回転させないでください。起動前に配線や固定具を確認し、湿気の多い、高温、多粉塵の環境では使用しないでください。
- 装置の暴走を防ぐため、適切なプログラムパラメータと非常停止機能を設定してください。
- **上記のルールを厳守してください。規定に反する操作や人的ミスによって生じたあらゆるリスクや損失について、販売者は一切の責任を負いません。**


#### Web UI によるゼロ点書き込みとデバッグ

ブラウザで[motorbridge-studio](https://motorbridge.github.io/motorbridge-studio/)のアドレスを開き、Helpオプションをクリックし、使用しているオペレーティングシステムとドライバボードに応じたコマンドをコピーし、IPアドレスとポート番号を確認してから、ターミナルでEnterキーを押して実行します。


```bash
motorbridge-gateway --bind 127.0.0.1:9002  
```

macOS：

```bash
motorbridge-gateway --bind 127.0.0.1:9002 
```

または

```bash
DYLD_LIBRARY_PATH=/usr/local/lib motorbridge-gateway --bind 127.0.0.1:9002 
```

#### RSモーター制御パラメータの初期化

:::warning 初回使用前にパラメータ初期化を完了してください

多くのreBot Arm B601-RSのサンプルはMITモードで動作します。ネイティブPosition（`pos_vel`）モードは、位置ループゲイン`loc_kp`と最大速度`vel_max`を直接使用します。その動作挙動は、速度ループゲイン`spd_kp`と加速度パラメータ`acc_rad`の影響も受けます。推奨されるB601-RSパラメータが初期化されていない場合や、各関節に保存されているパラメータが一致していない場合、Positionモードでは応答、速度、加減速挙動に異常が生じる可能性があります。

まず[MotorBridge Studio](https://motorbridge.github.io/motorbridge-studio/)の**Robot Model**で`rebot-arm-robstride`を選択し、Joint 1〜7がすべてオンラインであることをスキャンして確認し、前述のロボットアームのゼロ点キャリブレーションを完了します。その後、次の手順を実行します：

1. **Read Parameters**をクリックして、現在すべてのオンライン関節に保存されているパラメータを読み出します。この操作はデータを読み取るだけで、モーターを変更しません。ページに制御パラメータの読み取り成功が表示されるまで待ち、現在の値を記録として保持してください。
2. **Apply Default Template**をクリックし、ページにreBot Arm RobStrideのデフォルトパラメータテンプレートがJoint 1〜7に適用されたと表示されることを確認します。この操作は推奨値をページに読み込むだけで、まだモーターには書き込まれません。

<div align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/en_b601_rs_motorbridge_read_params.png" alt="B601-RSモーターのパラメータを読み取り、デフォルトテンプレートを適用する" />
</div>

3. **Write Parameters**をクリックします。ロボットアームが安全に支持されており、周囲に人や障害物がないことを確認してから、ダイアログで書き込み操作を確定します。パラメータ書き込み中は、電源を切ったり、モーターケーブルを抜き差ししたりしないでください。

<div align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/en_b601_rs_motorbridge_write_params.png" alt="B601-RSモーターのパラメータ書き込みを確認する" />
</div>

4. 書き込み完了後、MotorBridge Studioは自動的にパラメータを再読み取りします。ページに、書き込み後の再読み取り検証が一致したと表示されれば、初期化は成功です。

:::
