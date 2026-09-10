---
description: このガイドでは、reBot Arm B601-RS の購入オプション、組み立て、キャリブレーション、ソフトウェア設定を含む、入門方法を説明します。
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
  date: 2026-08-17
  author: LiuJunjie
createdAt: '2026-05-26'
updatedAt: '2026-08-27'
url: https://wiki.seeedstudio.com/ja/rebot_b601_rs_getting_started/
---

import '/src/css/rebot-wiki-style.css';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RebotRsDocNav from '@site/src/components/robotics/RebotRsDocNav';

# reBot Arm B601-RS を使い始める

<RebotRsDocNav />

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-RS-Disassembly-Kit-Version-with-Power-Supply-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
</a></div>

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Platform-Linux%20%7C%20Ubuntu-orange.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Framework-Pinocchio-yellow.svg" alt="Pinocchio" />
</p>

<p align="center">
  <strong>6 自由度ロボットアーム · 複数モーター対応 · 運動学ソルバー · 軌道計画 · 完全オープンソース</strong>
</p>

reBot Arm プロジェクトは [GitHub](https://github.com/Seeed-Projects/reBot-DevArm) 上でオープンソース公開されています。本ガイドでは、B601-RS の組み立てから操作まで、クイックスタートの手順を説明します。
本ガイドの内容は光の速さで鋭意執筆中です — 続報をお待ちください。

## 安全に関する免責事項およびリスク通知

<div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", gap: "16px" }}>
    <img style={{ width: "calc(50% - 8px)", maxWidth: "420px", height: "auto" }}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/Chinese%20version%20statement.png" />
    <img style={{ width: "calc(50% - 8px)", maxWidth: "420px", height: "auto" }}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/English%20Version%20Statement.png" />
</div>

## 電源について

1. ロボットアームには電源は同梱されておらず、標準では電源は含まれていません。ご自身でバッテリーを接続するか、当社がオープンソース公開している [48V 12.5A MeanWell 電源](https://www.seeedstudio.com/Power-Adapter-Kit-for-reBot-Arm-B601-RS-p-6873.html) または [Amazon](https://www.amazon.com/LRS-600-48-Switching-Upgrade-Version-SE-600-48/dp/B0BV5XFYNS/ref=sr_1_1?crid=2MK5Y1UI66CW9&dib=eyJ2IjoiMSJ9.FAt8rrpVeLIbeU2px5Bpe3WU2xsHpE3Kw1Fc6ZdPBFrIpRsaASOwU1dL9jPUNnpXO5u67hvlSXTsKCXH7jehZ8VWfiSFbcHmsVhJY_ua86iPUltJFeWlT9LIXphFER27jHWGnaJb2NdRIpPBMVdae8qgIllUI1J-Q8pZranpyjkkiJP2RmiEdhUBXTvvH3-vhk8z2uhf7BJrGW7hjRbjyCO7WHwwBQ3tMcnEKwto2doy9qus35djHRzODSFPbMuiA66PdgPuib4VL1aQghehDEiceMIpTUiCHHeRHfpB71M._yrosm8mVfpUq-5PjNTLSaYPgv8Dot6YbQTaGULjlLQ&dib_tag=se&keywords=LRS-600-48&qid=1781762081&s=electronics&sprefix=lrs-600-48%2Celectronics%2C351&sr=1-1) からご購入ください。無名メーカーや安全でない販売チャネルから電源を購入しないでください。これに起因して発生したいかなるリスクや結果についても、当社は責任を負わず、すべてご本人の自己責任となります。

ご家庭の電圧が 220V の場合は、電源側面の電圧切替スイッチを 230V に設定してください。ご家庭の電圧が 110V の場合は、115V に切り替えてください。

<div className="rebot-power-gallery">
  <figure className="rebot-power-gallery-item">
    <figcaption>220V</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/230V.jpg" alt="Power supply voltage selector set to 230V" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>110V</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/115V.jpg" alt="Power supply voltage selector set to 115V" />
  </figure>
  <figure className="rebot-power-gallery-item rebot-power-gallery-item--wide">
    <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100054289-gallery-6.jpg" alt="MeanWell power adapter for reBot Arm B601-RS" />
  </figure>
</div>

### 電源を組み立てる

または、当社がオープンソース公開している 24V 14.6A MeanWell 電源用エンクロージャを選択し、ご自身で組み立てることもできます。テキストによる手順と BOM は [GitHub リポジトリ](https://github.com/LAN-GER/reBot-DevArm/tree/main/hardware/reBot_B601_RS) で公開されています（関連する電源組み立て経験を持つ開発者にのみ推奨されます）。

組み立て参考動画：

   <div class="video-container">
     <iframe width="900" height="600" src="https://www.youtube.com/embed/5GitUWT9gx0?si=I_dnd2bSNHbB95BW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
   </div>

## 組み立てガイド

<div className="rebot-step-flow">
<section className="rebot-step-item">
    <span className="rebot-step-number">1</span>
<div className="rebot-step-content">
      <h4>reBot Arm を組み立てる</h4>
      <p className="rebot-step-label">ステップ 1</p>

<Tabs>
<TabItem value="unassembled" label="未組み立て版">

<div class="video-container">
  <iframe width="900" height="600" src="https://www.youtube.com/embed/Bv60NPO0TRo?list=PLpH_4mf13-A38iXew5DxqswGLjPQ0BflR&amp;index=6" title="reBot Arm B601-RS assembly video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

- 組み立て前に、必ず以下の注意事項をよくお読みください。スムーズな組み立て作業と充実したハンズオン体験のために、焦らず、集中して、常に次の重要なポイントを守ってください。
  1. 本キットには多数のネジや構造部品が含まれており、中には見た目がよく似ているものもあります。ネジの規格や部品の型番をよく確認し、締め付ける前に必ず取り付け方向を確認してください。
  2. 動画は 4 月上旬に撮影されたものです。その後、一部の部品に軽微な調整が入る場合がありますが、動画に従って組み立てる際の品質には影響しません。最終的な部品は実際に出荷されたものを基準としてください。
  3. ネジの取り付け・取り外しを容易にするため、オープンソースの BOM では標準ネジを指定していますが、キットに同梱されているネジにはねじロック剤が塗布されています。お好みの工具や電動ドライバーを使用しても構いません（1 本用意しておくことを強く推奨します）。電動工具を使用する場合は、トルクを必ず低〜中程度（3〜6 kgf·cm）に設定し、過大なトルクによってネジをなめてしまい、部品が取り外せなくなるような取り返しのつかない損傷を防いでください。なめかけの兆候があれば、すぐにネジを交換するか、位置を調整して再度お試しください。ねじロック剤付きでなめてしまったネジは、ネジ外し工具でも取り外せず、その部品全体が廃棄となります。そのため、十分に注意して作業してください。
  4. 組み立て作業中は安全を最優先し、指を挟んだり、押しつぶしによるけがをしないようご注意ください。お子様が本プロジェクトを行う場合は、必ず保護者の方が付き添ってください。

</TabItem>
<TabItem value="assembled" label="完成品版">

ロボットアームのケーブルを接続し、MotorBridge Studio を使用してモーターのパラメータを書き込み、ゼロ位置を設定します。

このステップについては、以下の reBot Arm B601-RS の開封および入門動画を参照してください。

次の図のように、モーター 1 とモーター 2 を接続します。

<div align="center">
  <img width={400} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS_m1m2_c.jpg" alt="Connect Motor 1 and Motor 2 on the reBot Arm B601-RS" />
</div>

次に、USB-to-CAN モジュール、電源・信号分岐基板、XT30 電源ケーブル、XT30 2+2 ケーブルを下図のように接続します。XT30 2+2 ケーブルのもう一方の端をモーター 1 に接続し、電源ケーブルを 48 V 電源に接続します。

<div align="center">
  <img width={400} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rs_connecting_cable.jpg" alt="Connect the USB-to-CAN module and power cables to the reBot Arm B601-RS" />
</div>

</TabItem>
</Tabs>

</div>
</section>
</div>

動画に従って、ロボットアーム組み立ての事前準備が完了しているはずです。次に、モーター ID の書き込みとロボットアームのキャリブレーション手順を紹介します。


動画およびテキストチュートリアルを参照してください。ロボットアームを制御する前に、ゼロ点を再度リセットする必要があります。

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/llSa6qn3yrY?si=hMuZKVDY9yqx3qHx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## MotorBridge を使ってアームをキャリブレーションし、初回動作を完了する

:::tip
1. **MotorBridge** プラットフォームをぜひお試しください。このワンストップソリューションは、[Damiao](https://www.seeedstudio.com/DIP-Servo-Motor-24V-120RPM-Brushless-98-9mm-4P-L56-W56-H46mm-p-6660.html)、[RobStride](https://www.seeedstudio.com/Robostride-00-Actuator-p-6664.html)、[HighTorque](https://www.seeedstudio.com/Hightorque-HTDW-4438-30-NE-Gear-Motor-p-6482.html)、[MyActuator](https://www.seeedstudio.com/Myactuator-X4-P36-Planetary-Actuator-p-6469.html)、Hexfellow など、対応モーターのラインナップを拡大し続けており、reBot のようなロボットアームも継続的に追加されています。初心者にも扱いやすく、Web UI の機能に対応した Python SDK も開発者向けに提供しています。

2. reBot 向けに最適化された MotorBridge の機能として、ワンクリックゼロ点キャリブレーション、パラメータ書き込み、ドラッグ＆ドロップによるモーター制御、組み込みモデルの可視化などがあります。

3. MotorBridge は **Windows、Ubuntu、macOS** をサポートしています。
:::

:::tip
1. 仮想マシンでは、信頼性の高いデモ動作に十分な性能が得られず、設定上の問題を引き起こす可能性があります。可能な限り物理的な Ubuntu マシンを使用してください。

2.（ベータ）エージェントにロボットアームの初期化を依頼することができます。次のプロンプトを送信してください：

```text
Please follow the process in AGENTS.md (https://github.com/Welt-liu/reBot-B601-Agent-Guide/blob/main/en/AGENTS.md) to help the user complete the initialization of a new robotic arm.
```

組み立て済みキットを購入した場合は、モーター ID のステップでエージェントに次のように伝えてください：「組み立て済みキットを購入しました。モーター 1〜7 をスキャンしてオンラインであることを確認してください。モーター ID は書き換えないでください。」

3. エージェントは CLI コマンドを通じてモーター ID を書き込みますが、この Wiki では Web UI を使用します。どちらの方法も動作します。
:::

### ソフトウェアセットアップとキャリブレーションのワークフロー

以下の手順に従って Miniforge をインストールし、reBot 開発用の分離された Python 環境を作成します。

<div className="rebot-step-flow">
<section className="rebot-step-item">
    <span className="rebot-step-number">1</span>
<div className="rebot-step-content">
      <h4>Miniforge をインストールする</h4>
      <p className="rebot-step-label">Step 1</p>

お使いのオペレーティングシステム用の Miniforge をダウンロードしてインストールします：

<Tabs>
<TabItem value="Ubuntu" label="Ubuntu\Jetson\Raspberry Pi">

```bash
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh
```

インストール中、<kbd>Enter</kbd> を押して続行し、利用規約に同意するために `yes` を入力し、Conda を初期化するかどうか尋ねられたら `yes` を入力します。

ターミナルを再起動し、`conda --version` でインストールを確認します。

:::tip `conda` が見つからない場合
Miniforge を読み込み、Bash を初期化します：

```bash
source ~/miniforge3/etc/profile.d/conda.sh
conda init bash
```
:::

</TabItem>
<TabItem value="macOS" label="macOS">

```bash
curl -L -O "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-MacOSX-$(uname -m).sh"
bash Miniforge3-MacOSX-$(uname -m).sh
```

インストール中、<kbd>Enter</kbd> を押して続行し、利用規約に同意するために `yes` を入力し、Conda を初期化するかどうか尋ねられたら `yes` を入力します。

ターミナルを再起動し、`conda --version` でインストールを確認します。

:::tip `conda` が見つからない場合
Miniforge を読み込み、現在の macOS バージョンでデフォルトシェルである Zsh を初期化します：

```bash
source ~/miniforge3/etc/profile.d/conda.sh
conda init zsh
```
:::

</TabItem>
<TabItem value="windows" label="Windows">

[Miniforge Releases ページ](https://github.com/conda-forge/miniforge/releases)を開き、最新の `Miniforge3-Windows-x86_64.exe` を探してダウンロードします。

:::tip 端末用に Conda を初期化する
**Git Bash ユーザー：** `conda` が見つからない場合は、まず Conda を読み込みます：

```bash
# Temporary: replace <install_path> with the actual path
source <install_path>/etc/profile.d/conda.sh

# Permanent: add it to bashrc once
echo 'source <install_path>/etc/profile.d/conda.sh' >> ~/.bashrc
source ~/.bashrc
```

PowerShell の場合は、次のコマンドで Conda を初期化します：

```bash
conda init powershell
```
:::

</TabItem>
</Tabs>

</div>
</section>

<section className="rebot-step-item">
    <span className="rebot-step-number">2</span>
<div className="rebot-step-content">
      <h4>自動ベースアクティベーションを無効化する（任意）</h4>
      <p className="rebot-step-label">Step 2</p>

Miniforge が Conda を初期化すると、新しいターミナルごとに自動的に `(base)` 環境がアクティブになります。システム環境で開始したい場合は、自動ベースアクティベーションを無効化します：

```bash
conda config --set auto_activate_base false
```

**確認：** 現在のターミナルを閉じて新しいターミナルを開きます。`(base)` プレフィックスは表示されないはずです。必要なときに `conda activate rebot` で reBot 環境を手動でアクティブにしてください。

**デフォルトに戻す：** `conda config --set auto_activate_base true` を実行すると、自動ベースアクティベーションが再び有効になります。

</div>
</section>

<section className="rebot-step-item">
    <span className="rebot-step-number">3</span>
<div className="rebot-step-content">
      <h4>Python 環境を作成する</h4>
      <p className="rebot-step-label">Step 3</p>

Python 3.12 環境を作成します：

```bash
conda create -y -n rebot python=3.12
```

</div>
</section>

<section className="rebot-step-item">
    <span className="rebot-step-number">4</span>
<div className="rebot-step-content">
      <h4>環境をアクティブにする</h4>
      <p className="rebot-step-label">Step 4</p>

reBot 用に新しいターミナルを開くたびに、このコマンドを実行します：

```bash
conda activate rebot
```

</div>
</section>

<section className="rebot-step-item">
    <span className="rebot-step-number">5</span>
<div className="rebot-step-content">
      <h4>Motorbridge をインストールする</h4>
      <p className="rebot-step-label">Step 5</p>

reBot 仮想環境をアクティブにした後、次のコマンドを実行して motorbridge をインストールします：

:::tip macOS ユーザーへの注意
macOS でテレオペレーション中にフレームレートが低い場合、古い WCH CH34x ドライバーバージョンが原因の可能性があります。**macOS 10.14 以降**では、システムに組み込みの `AppleUSBCHC0M` ドライバーが含まれています。古いドライバーをアンインストールして macOS 組み込みドライバーに切り替えることで、フレームレートが効果的に改善されるはずです。
:::


```bash
pip install motorbridge
```

</div>
</section>

<section className="rebot-step-item">
    <span className="rebot-step-number">6</span>
<div className="rebot-step-content">
      <h4>PCAN-USB を設定する</h4>
      <p className="rebot-step-label">Step 6</p>

ロボットアームとの通信のために、PCAN-USB デバイスを CAN バス上で 1Mbps で動作させます。

<Tabs>
<TabItem value="Ubuntu" label="Ubuntu\Raspberry Pi">

```bash
# The kit includes PCAN-USB, which should normally show up as can0 or can1
sudo modprobe peak_usb
ip -br link

# If can0 appears, set the bitrate
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```


:::tip 注意
ドライバーインストール後に PCAN デバイスのファームウェアが正しくない場合は、以下のセクションを展開し、PCAN ファームウェアをダウンロードして、復旧手順に従ってください。
:::

<details>
<summary>PCAN ファームウェアのダウンロード &amp; ドライバー修復手順 - Ubuntu</summary>

Ubuntu ユーザーはこのガイドを参照してください

1.> 📦 [USB2CAN.zip をダウンロードするにはここをクリック](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/USB2CAN.zip)

2. USB2CAN を BOOT に切り替えます

3. ステップ 1 で取得した USB2CAN.zip を解凍し、その中の flash_pcan_ubuntu.sh と pcan_canable_hw.bin を同じディレクトリに配置してください

[flash_pcan_ubuntu.sh をダウンロードするにはここをクリック](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/flash_pcan_ubuntu.sh)

別のコンピュータから転送する場合（例：scp）：

```text
scp flash_pcan_ubuntu.sh pcan_canable_hw.bin seeed@your_Ubuntu_IP:~/Downloads/
```
または、単に USB フラッシュドライブにコピーして Ubuntu マシンに接続します。ファイルが ~/Downloads、カレントディレクトリ、または /tmp のいずれかにあれば、スクリプトが自動的に見つけます。

4. 実行します：

```text
bash flash_pcan_ubuntu.sh
```

パスワードを入力し、完了するまで待ちます

完了したら、「120R」に戻します

USB を挿し直します。

</details>

</TabItem>

<TabItem value="Jetson" label="Jetson">

ファイルをダウンロードします：[peak-linux-driver-9.2.0.tar.gz](https://www.peak-system.com/quick/PCAN-Linux-Driver?_gl=1*1shem7p*_up*MQ..*_gs*MQ..&gclid=CjwKCAjwj7HTBhBiEiwA8s35OkNgKcwSr95URUncy5ADLlO-AjdZSFxtqTgof7UY2-LgkXWyoHMX3RoC0i4QAvD_BwE&gbraid=0AAAAAD_YjBa3gnuD4t8dG6dxnFEdZOcTz)

- brltty を削除する
Jetson では、brltty がリーダーが使用する USB シリアルポートを占有している場合があります。まずこれを削除します：
```bash
sudo apt remove -y brltty
```

- 依存関係をインストールする
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

- PEAK SocketCAN ドライバーをコンパイルする
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

- ドライバーをインストールして読み込む
ドライバーをインストールします：
```bash
sudo make install
sudo depmod -a
```
pcan カーネルモジュールを読み込みます：
```bash
sudo modprobe pcan
```
起動時に自動読み込みを有効にします：
```bash
echo pcan | sudo tee /etc/modules-load.d/pcan.conf
```
ドライバーが読み込まれていることを確認します：
```bash
ip -br link | grep can
```
期待される出力：
```
can0             DOWN           <NOARP,ECHO>
can1             DOWN           <NOARP,ECHO>
.....
```

- ロボットアームに対応する PCAN インターフェースを特定する
```bash
for i in /sys/class/net/can*; do [ "$(basename "$(readlink -f "$i/device/driver" 2>/dev/null)")" = "pcan" ] && basename "$i"; done
```
ここに表示されるインターフェースは PEAK PCAN-USB デバイスです。例：
```
can2
```

- `pcan_refresh` コマンドを永続化する
Linux の環境変数は再起動後に保持されず、PCAN インターフェース番号は変わる可能性があります。より信頼性の高い方法は、リフレッシュ関数を永続的に定義し、ターミナルを開いた後に実行することです。

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
PCAN-USB を再起動または再接続した後に、次を実行します：
```bash
pcan_refresh
```
成功すると、次のように出力されます：
```
PCAN_IF=can1
```
以降のすべてのコマンドでは、`can1` や `can2` をハードコードする代わりに `$PCAN_IF` を使用してください。

```bash
sudo modprobe peak_usb
ip -br link

# If $PCAN_IF appears, set the bitrate
sudo ip link set $PCAN_IF down 2>/dev/null
sudo ip link set $PCAN_IF type can bitrate 1000000 restart-ms 100
sudo ip link set $PCAN_IF up
```

</TabItem>
<TabItem value="macos" label="macOS">

もし `libPCBUSB.dylib` を読み込めない場合は、まず PCBUSB をインストールしてください：
```zsh
curl -L -o macOS_Library_for_PCANUSB_v0.13.tar.gz \
  https://raw.githubusercontent.com/tianrking/motorbridge/main/third_party/pcan/macos/macOS_Library_for_PCANUSB_v0.13.tar.gz
tar -xzf macOS_Library_for_PCANUSB_v0.13.tar.gz
cd PCBUSB
sudo ./install.sh
```

`install.sh` は `libPCBUSB.dylib` だけを作成します。motorbridge のネイティブローダーは `PCBUSB` という素の名前を `dlopen` するため、このシンボリックリンクを追加します。これがないと、`libPCBUSB.dylib` に対する ctypes チェックは通る場合でも、アームへの接続は `load PCBUSB failed` というエラーで失敗します：

```zsh
sudo ln -sf /usr/local/lib/libPCBUSB.dylib /usr/local/lib/PCBUSB
```

motorbridge-gateway が実行時に PCBUSB を見つけられるように `DYLD_FALLBACK_LIBRARY_PATH` を設定します。`DYLD_LIBRARY_PATH` よりも FALLBACK を優先してください。後者はプロセス全体に対して dyld のデフォルト検索順序を上書きし、無関係なソフトウェアを壊す可能性があります。`conda activate rebot` を実行するたびに自動的に有効になるよう、conda 環境内にアクティベーションスクリプトを作成します：

```bash
mkdir -p "$CONDA_PREFIX/etc/conda/activate.d"
cat > "$CONDA_PREFIX/etc/conda/activate.d/env_vars.sh" << 'EOF'
export DYLD_FALLBACK_LIBRARY_PATH="/usr/local/lib${DYLD_FALLBACK_LIBRARY_PATH:+:$DYLD_FALLBACK_LIBRARY_PATH}"
EOF

echo $DYLD_FALLBACK_LIBRARY_PATH
```

任意、sudo 不要（共有マシン向け）：`~/.local/lib` にインストールします。motorbridge のソースツリーがある場合：

```bash
./scripts/setup_pcbusb_macos.sh --user-local
ln -sf "$HOME/.local/lib/libPCBUSB.dylib" "$HOME/.local/lib/PCBUSB"
```

conda の activate スクリプトで、`/usr/local/lib` の代わりに `$HOME/.local/lib` を指すようにします。

準備ができているか確認します。まず PCAN アダプタを接続してください。`ctypes.CDLL('libPCBUSB.dylib')` は有効な実行時チェックではありません — motorbridge はその名前を読み込みません。

```zsh
# Check Python package and CLI are ready
python3 -c "import motorbridge; print('motorbridge OK')"
motorbridge-cli --help

# Native loader dlopens the bare name PCBUSB
python3 -c "import ctypes; ctypes.CDLL('PCBUSB'); print('PCBUSB load OK')"

# Real runtime check (can0 maps to PCAN_USBBUS1 on macOS)
motorbridge-cli scan --vendor robstride --channel can0 --start-id 1 --end-id 7 --timeout-ms 300
```


:::tip Attention
ドライバをインストールした後に PCAN デバイスのファームウェアが正しくない場合は、以下のセクションを展開し、PCAN ファームウェアをダウンロードして、復旧手順に従ってください。
:::

<details>
<summary>PCAN ファームウェアのダウンロード &amp; ドライバ修復手順 - macOS</summary>

Mac ユーザーはこのガイドを参照してください

1.> 📦 [USB2CAN.zip をダウンロードするにはクリック](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/USB2CAN.zip)

2. USB2CAN を BOOT に切り替えます

3. 手順 1 でダウンロードした USB2CAN.zip を解凍し、その中にある flash_pcan_mac.sh と pcan_canable_hw.bin を同じディレクトリに配置してください

[flash_pcan_mac.sh をダウンロードするにはクリック](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/flash_pcan_mac.sh)

別のコンピュータから転送する場合（例：scp）：

```text
scp flash_pcan_mac.sh pcan_canable_hw.bin seeed@your_MAC_IP:~/Downloads/
```

または、単に USB フラッシュドライブにコピーして Mac に挿入してもかまいません。ファイルが最終的に ~/Downloads、カレントディレクトリ、または /tmp のいずれかにあれば、スクリプトが自動的に見つけてくれます。

4. 次を実行します：

```text
bash /Users/"your_username"/Downloads/flash_pcan_mac.sh "/Users/"your_username"/Downloads/pcan_canable_hw.bin"
```

上記のコマンドは、ファイルが Mac の Downloads パスに配置されていることを前提としています。実際のパスに応じて調整してください

パスワードを入力し、完了するまで待ちます

完了したら、「120R」に戻します

USB を挿し直します。

</details>

</TabItem>
<TabItem value="windows" label="Windows">

PCAN-USB ドライバをインストールするには、[pcan-usb](https://www.peak-system.com/products/hardware/external-pc-interfaces/pcan-usb/) にアクセスしてください。


:::tip Attention
ドライバをインストールしてもデバイスマネージャーで **PCAN-USB** が検出されない場合は、以下のセクションを展開し、PCAN ファームウェアをダウンロードして、復旧手順に従ってください。
:::

<details>

<summary>PCAN ファームウェアのダウンロード &amp; ドライバ修復手順 - Windows</summary>

ドライバをインストールしても PCAN-USB が動作せず、デバイスマネージャーに下図の **PCAN-USB** デバイスが表示されない場合は、PCAN ファームウェアパッケージをダウンロードし、次の手順に従って DFU ドライバをインストールしてファームウェアを書き換えてください。

![デバイスマネージャーで検出された PCAN-USB](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/01-pcan-usb-device.png)

> 📦 [USB2CAN.zip をダウンロード](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/USB2CAN.zip)

### DFU ドライバをインストールする

1. ダウンロードしたパッケージを解凍します。その中には `Dfu tool` フォルダと `pcan` フォルダが含まれています。

![パッケージから展開された Dfu tool と pcan フォルダ](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/02-extracted-folders.png)

2. `Dfu tool` フォルダを開き、`.exe` インストーラを実行します。インストール後、ドライバのインストールパスを記録しておきます。例：

```text
C:\Program Files (x86)\STMicroelectronics\Software\DfuSe v3.0.6\Bin\Driver
```

![DfuSe インストーラとドライバのインストールパス](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/03-dfuse-install-location.png)

3. USB2CAN モジュールの DIP スイッチを **BOOT** に設定し、モジュールをコンピュータに接続します。

![USB2CAN の DIP スイッチを BOOT に設定](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/04-usb2can-boot-switch.jpg)

4. **デバイスマネージャー** を開き、**ほかのデバイス → STM32 BOOTLOADER** を見つけて右クリックし、**ドライバーの更新** を選択してから **コンピューターを参照してドライバーを検索** を選択します。

![デバイスマネージャーの STM32 BOOTLOADER](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/05-stm32-bootloader.png)

![「コンピューターを参照してドライバーを検索」を選択](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/06-update-driver.png)

5. 先ほど記録した DfuSeDemo ドライバパスを場所のフィールドに貼り付け、**サブフォルダーも検索する** を選択して **次へ** をクリックします。

![DfuSeDemo ドライバパスを入力し「サブフォルダーも検索する」を選択](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/07-driver-path.png)

6. USB2CAN モジュールをいったん取り外してから再接続します。**STM Device in DFU Mode** として認識されれば、ドライバの更新は成功です。

7. **DfuSeDemo** を開き、USB2CAN モジュールが正しく検出されていることを確認します。

![USB2CAN モジュールを正しく検出した DfuSeDemo](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/08-dfuse-detects-usb2can.png)

### PCAN ファームウェアを書き込む

1. DfuSeDemo で **Upgrade or Verify Action → Choose...** をクリックし、解凍した `pcan` フォルダ内のファームウェアを選択します。
2. **Upgrade** をクリックし、確認ダイアログで **Yes** をクリックして、ファームウェアの書き込み処理が完了するまで待ちます。その後、DfuSeDemo を閉じることができます。

![DfuSeDemo で PCAN ファームウェアを選択して Upgrade をクリック](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/09-select-pcan-firmware.png)

![ファームウェアのアップグレード完了](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/10-firmware-upgrade-complete.png)

### デバイスを復元して確認する

USB2CAN モジュールを取り外し、DIP スイッチを **120R** に設定してから、再度コンピュータに接続します。デバイスマネージャーを開きます。デバイスが **PCAN-USB** として認識されていれば、問題は解決しており、このガイドを続行できます。

![デバイスマネージャーで正常に検出された PCAN-USB](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/11-pcan-usb-recognized.png)

</details>

</TabItem>



</Tabs>
<!-- ### 3. モーター ID の書き込み

:::tip 組み立て済みキットのユーザーは、この手順をスキップしてください
:::

ドライバーを使ってすべてのモーターケーブルを外し、1 つのモーターだけを USB-to-CAN モジュールに接続します。

次のコマンドを実行して、モーターが検出されているかスキャンします。工場出荷時の ID は 127 の場合があります。

```bash
motorbridge-cli scan --vendor robstride --channel can0 --start-id 126 --end-id 127 --timeout-ms 300
```

モーターの現在の ID を確認したら、変更コマンドを実行します（注意：複数のモーターを同時に接続しないでください。すべてが上書きされてしまいます）：

```bash
# Example: Change ID 127 to 5
motorbridge-cli id-set --vendor robstride --channel can0 --motor-id 127 --new-motor-id 5
```

上記の手順を、すべてのモーター ID が正常に書き込まれるまで繰り返します。その後、すべてのモーターケーブルを接続し、最終確認のために次のコマンドを実行します。7 台のモーターが検出されれば完了です。

```bash
motorbridge-cli scan --vendor robstride --channel can0 --start-id 1 --end-id 7 --timeout-ms 300
``` -->


</div>
</section>

<section className="rebot-step-item">
    <span className="rebot-step-number">7</span>
<div className="rebot-step-content">
      <h4>ゼロポイントを書き込み、MotorBridge Gateway でデバッグする</h4>
      <p className="rebot-step-label">Step 7</p>

#### モーターリセット前

モーターのパラメータを設定する前に、次の準備と安全ルールに注意してください：

- 2 個の治具クランプ（サイズ 3 インチ以上）と 48V XT30 出力のスイッチング電源を用意します（信頼できるブランドを選択し、粗悪な電源は使用しないでください）。
- デバッグおよび動作中は、少なくとも 1 メートルの安全距離を保ってください。
- モーターをホットプラグしないでください。XT30 2+2 コネクタの抜き差しは、必ず電源を切ってから行ってください。
- モーターを過負荷・過回転させないでください。起動前に配線と固定具を確認し、湿気の多い・高温・多粉塵の環境では使用しないでください。
- 機器の暴走を防ぐため、適切なプログラムパラメータと非常停止機能を設定してください。
- **上記のルールを厳守してください。規定に反する操作や人的ミスによって生じたあらゆるリスクや損失について、販売者は一切の責任を負いません。**


#### Web UI でのゼロポイント書き込みとデバッグ

ブラウザで [motorbridge-studio](https://motorbridge.github.io/motorbridge-studio/) のアドレスを開き、Help オプションをクリックして、使用しているオペレーティングシステムとドライバボードに応じたコマンドをコピーし、IP アドレスとポート番号を確認してから、ターミナルで Enter キーを押して実行します。


```bash
motorbridge-gateway --bind 127.0.0.1:9002  
```

macOS：

```bash
motorbridge-gateway --bind 127.0.0.1:9002 
```

または

```bash
DYLD_FALLBACK_LIBRARY_PATH=/usr/local/lib motorbridge-gateway --bind 127.0.0.1:9002 
```

#### RS モーター制御パラメータの初期化

:::warning 初回使用前にパラメータ初期化を完了してください

ほとんどの reBot Arm B601-RS のサンプルは MIT モードで動作します。ネイティブ Position（`pos_vel`）モードでは、位置ループゲイン `loc_kp` と最大速度 `vel_max` を直接使用します。その動作挙動は、速度ループゲイン `spd_kp` と加速度パラメータ `acc_rad` の影響も受けます。推奨される B601-RS パラメータが初期化されていない場合、または各関節に保存されているパラメータが不一致な場合、Position モードで応答、速度、加減速挙動が異常になる可能性があります。

まず [MotorBridge Studio](https://motorbridge.github.io/motorbridge-studio/) の **Robot Model** で `rebot-arm-robstride` を選択し、関節 1〜7 がすべてオンラインであることをスキャンして確認し、前述のロボットアームのゼロ点キャリブレーションを完了します。その後、次の手順を実行します：

1. **Read Parameters** をクリックして、現在すべてのオンライン関節に保存されているパラメータを読み出します。この操作はデータを読み取るだけで、モーターを変更しません。ページに制御パラメータが正常に読み取られたと表示されるまで待ち、現在の値を記録として保持します。
2. **Apply Default Template** をクリックし、ページに reBot Arm RobStride のデフォルトパラメータテンプレートが関節 1〜7 に適用されたと表示されることを確認します。この操作は推奨値をページに読み込むだけで、まだモーターには書き込みません。

<div align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/en_b601_rs_motorbridge_read_params.png" alt="B601-RS モーターのパラメータを読み取り、デフォルトテンプレートを適用する" />
</div>

3. **Write Parameters** をクリックします。ロボットアームが安全に支持されており、周囲に人や障害物がないことを確認してから、ダイアログで書き込み操作を確定します。パラメータ書き込み中は、電源を切ったり、モーターケーブルを抜き差ししたりしないでください。

<div align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/en_b601_rs_motorbridge_write_params.png" alt="B601-RS モーターのパラメータ書き込みを確認する" />
</div>

4. 書き込み完了後、MotorBridge Studio は自動的にパラメータを再読み取りします。ページに、書き込み後の再読み取り検証が一致したと表示されれば、初期化は成功です。

:::

</div>
</section>
</div>
