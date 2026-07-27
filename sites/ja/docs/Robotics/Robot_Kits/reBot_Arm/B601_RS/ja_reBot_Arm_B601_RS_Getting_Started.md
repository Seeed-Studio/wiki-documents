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
  skip: [zh-CN]
last_update:
  date: 2026-05-26
  author: LiuJunjie
createdAt: '2026-05-26'
updatedAt: '2026-07-20'
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

reBot Arm プロジェクトは [GitHub](https://github.com/Seeed-Projects/reBot-DevArm) 上でオープンソース公開されています。本ガイドでは、B601-RS の組み立てから操作まで、クイックスタート手順を順を追って説明します。
本ガイドの内容は光の速さで鋭意執筆中です — 続報をお待ちください。


## 電源について

1. ロボットアームには電源は同梱されておらず、標準では付属しません。ご自身でバッテリーを接続するか、当社のオープンソース [48V 12.5A MeanWell 電源](https://www.seeedstudio.com/Power-Adapter-Kit-for-reBot-Arm-B601-RS-p-6873.html) または [Amazon](https://www.amazon.com/LRS-600-48-Switching-Upgrade-Version-SE-600-48/dp/B0BV5XFYNS/ref=sr_1_1?crid=2MK5Y1UI66CW9&dib=eyJ2IjoiMSJ9.FAt8rrpVeLIbeU2px5Bpe3WU2xsHpE3Kw1Fc6ZdPBFrIpRsaASOwU1dL9jPUNnpXO5u67hvlSXTsKCXH7jehZ8VWfiSFbcHmsVhJY_ua86iPUltJFeWlT9LIXphFER27jHWGnaJb2NdRIpPBMVdae8qgIllUI1J-Q8pZranpyjkkiJP2RmiEdhUBXTvvH3-vhk8z2uhf7BJrGW7hjRbjyCO7WHwwBQ3tMcnEKwto2doy9qus35djHRzODSFPbMuiA66PdgPuib4VL1aQghehDEiceMIpTUiCHHeRHfpB71M._yrosm8mVfpUq-5PjNTLSaYPgv8Dot6YbQTaGULjlLQ&dib_tag=se&keywords=LRS-600-48&qid=1781762081&s=electronics&sprefix=lrs-600-48%2Celectronics%2C351&sr=1-1) をご購入ください。無名メーカーや安全性の確認できないルートからの電源購入はお控えください。これに起因して発生したいかなるリスクや結果についても、当社は責任を負わず、自己責任となります。

ご家庭の電圧が 220V の場合は、電源側面の電圧切替スイッチを 230V に設定してください。ご家庭の電圧が 110V の場合は、115V に切り替えてください。

| **220V** | **110V** |
|:---:|:---:|
| <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/230V.jpg" width="300" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/115V.jpg" width="300" /> |


   <div align="center">
     <img width={800}
     src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100054289-gallery-6.jpg" />
   </div>

2. あるいは、当社のオープンソース 24V 14.6A MeanWell 電源エンクロージャを選択し、ご自身で組み立てることもできます。テキストによる説明書と BOM は [GitHub リポジトリ](https://github.com/LAN-GER/reBot-DevArm/tree/main/hardware/reBot_B601_RS) で公開されています（関連する電源組み立て経験を持つ開発者の方にのみ推奨します）。

   組み立て参考動画：

   <div class="video-container">
     <iframe width="900" height="600" src="https://www.youtube.com/embed/5GitUWT9gx0?si=I_dnd2bSNHbB95BW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
   </div>

## ステップ 1: 組み立てガイド

- 組み立て前に、以下の注意事項をよくお読みください。スムーズな組み立て作業と充実したハンズオン体験のために、落ち着いて作業し、集中力を保ち、常に次の重要ポイントを守ってください。
  1. 本キットには多数のネジや構造部品が含まれており、中には見た目がよく似たものもあります。ネジの規格や部品の型番をよく確認し、固定する前に必ず取り付け方向を確認してください。
  2. 動画は 4 月上旬に撮影されたものです。その後、部品に軽微な調整が入る場合がありますが、動画に従って組み立てる際の品質には影響しません。最終的な部品は、実際に出荷されたものを基準としてください。
  3. ネジの取り付け・取り外しを容易にするため、オープンソースの BOM では標準ネジを指定していますが、キットに同梱されているネジにはねじロック剤が塗布されています。お好みの工具や電動ドライバーを使用しても構いません（1 本用意しておくことを強く推奨します）。電動工具を使用する場合は、トルクを必ず低〜中程度（3〜6 kgf·cm）に設定し、過大なトルクによってネジをなめてしまい、部品が取り外せなくなるような取り返しのつかない損傷を防いでください。なめかけの兆候があれば、すぐにネジを交換するか、位置を調整して再度お試しください。ねじロック剤付きでなめてしまったネジは、ネジ抜き工具でも外せず、その部品全体が廃棄となる可能性があります。そのため、十分に注意して作業してください。
  4. 組み立て作業中は安全を最優先し、指を挟んだり、潰したりするケガを避けてください。お子様が本プロジェクトを行う場合は、必ず保護者の方が同伴してください。




## ステップ 2: ロボットアームのキャリブレーションと起動

1. **MotorBridge** プラットフォームを活用しましょう。このプラットフォームは、モーターの種類を継続的に拡張可能なワンストップ総合ソリューションであり、[Damiao モーター](https://www.seeedstudio.com/DIP-Servo-Motor-24V-120RPM-Brushless-98-9mm-4P-L56-W56-H46mm-p-6660.html)、[Robstride モーター](https://www.seeedstudio.com/Robostride-00-Actuator-p-6664.html)、[Hightorque モーター](https://www.seeedstudio.com/Hightorque-HTDW-4438-30-NE-Gear-Motor-p-6482.html)、[Myactuator モーター](https://www.seeedstudio.com/Myactuator-X4-P36-Planetary-Actuator-p-6469.html)、Hexfellow などをカバーしています。また、reBot のような継続的にアップデートされるロボットアーム製品にも対応しています。プラットフォームは初心者にも扱いやすく、開発者向けには同等機能を備えた Python SDK も提供しています。

2. reBot ロボットアーム向けに特別に最適化された MotorBridge の新機能と詳細を体験してください。ワンクリックのゼロ点キャリブレーション、パラメータ書き込み、UI を介したドラッグ＆ドロップによるモーター制御、組み込みのモデル可視化インターフェースなどが含まれます。

3. このツールは **Windows、Ubuntu、macOS** オペレーティングシステムに完全対応しています。

:::tip
1. 仮想マシンではデモを実行するための性能が不足しており、設定上の問題も確認されています。ロボットアームの制御には、Ubuntu の物理マシンを使用することを推奨します。

2.（ベータ版）エージェントにロボットアームの初期化を手伝ってもらいましょう。以下の内容をコピーして、エージェントに送信してください。

```text
Please follow the process in AGENTS.md (https://github.com/Welt-liu/reBot-B601-Agent-Guide/blob/main/en/AGENTS.md) to help the user complete the initialization of a new robotic arm.
```

  注意：完成品キットをご購入の場合は、モーター ID 書き込みのステップでエージェントに次のように伝えてください。「完成品キットを購入しました。モーター 1〜7 がすべてオンラインであることを確認するためにスキャンしてください。モーター ID は書き換えないでください。」

3. エージェントは CLI コマンドを使用してモーター ID の書き込みを行いますが、Wiki では Web UI による操作方法を説明しています。どちらの方法でも問題ありません。

:::

ここまでの動画に従って、ロボットアーム組み立ての事前準備が完了しているはずです。次に、モーター ID の書き込みとロボットアームのキャリブレーション手順を紹介します。


ロボットアームを制御する前に、動画およびテキストチュートリアルを参照し、ゼロ点を再度リセットする必要があります。

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/llSa6qn3yrY?si=hMuZKVDY9yqx3qHx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>



### 1. Miniforge のインストール（推奨）（Windows\Ubuntu\macOS\Jetson\Raspberry Pi 対応）

1. Miniforge をインストールし、仮想環境を作成して、他の環境パッケージとの競合によるデモ失敗を防ぎます。

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
  **Git Bash ユーザーの方へ**：`conda` コマンドが見つからない場合は、Git Bash が conda 環境を読み込んでいないことを意味します。まず初期化を行う必要があります。

  ```bash
  # Temporary (current terminal only), replace <install_path> with the actual path
  source <install_path>/etc/profile.d/conda.sh

  # Permanent (write to bashrc, run once)
  echo 'source <install_path>/etc/profile.d/conda.sh' >> ~/.bashrc
  source ~/.bashrc
  ```

  PowerShell で conda 環境を自動的に有効化するには：

  ```bash
  conda init powershell
  ```

:::

```bash
conda create -y -n rebot python=3.12
```

3. 仮想環境を有効化します。**reBot 関連の機能を使用するたびに、ターミナルを開いた後、この有効化コマンドを毎回実行する必要があります。**

```bash
conda activate rebot
```

### 2. Motorbridge のインストール

reBot 用の仮想環境を有効化したら、次のコマンドを実行して motorbridge をインストールします。

:::tip Note for macOS users
macOS でテレオペレーション中にフレームレートが低い場合は、古い WCH CH34x ドライバが原因の可能性があります。**macOS 10.14 以降** では、システムに `AppleUSBCHC0M` ドライバが標準で含まれています。古いドライバをアンインストールし、macOS 標準のドライバに切り替えることで、フレームレートが大幅に改善されるはずです。
:::


```bash
pip install motorbridge
```

### 3. PCAN-USB

PCAN-USB デバイスを 1Mbps の CAN バス上で動作させ、ロボットアームとの通信を行います。

Ubuntu\Jetson\Raspberry Pi：

```bash
# The kit includes PCAN-USB, which should normally show up as can0 or can1
sudo modprobe peak_usb
ip -br link

# If can0 appears, set the bitrate
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up
```

または macOS：

libPCBUSB.dylib を読み込めない場合は、まず PCBUSB をインストールしてください：
```zsh
curl -L -o macOS_Library_for_PCANUSB_v0.13.tar.gz \
  https://raw.githubusercontent.com/tianrking/motorbridge/main/third_party/pcan/macos/macOS_Library_for_PCANUSB_v0.13.tar.gz
tar -xzf macOS_Library_for_PCANUSB_v0.13.tar.gz
cd PCBUSB
sudo ./install.sh
```

`DYLD_LIBRARY_PATH` を設定して、motorbridge-gateway が実行時に PCBUSB ライブラリを見つけられるようにします。`conda activate rebot` を実行するたびに自動的に有効になるよう、conda 環境内にアクティベーションスクリプトを作成します：

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

または Windows：

PCAN-USB ドライバをインストールするには、[pcan-usb](https://www.peak-system.com/products/hardware/external-pc-interfaces/pcan-usb/) にアクセスしてください。

:::tip 注意
ドライバをインストールしてもデバイスマネージャーで **PCAN-USB** が検出されない場合は、以下のセクションを展開し、PCAN ファームウェアをダウンロードして、リカバリ手順に従ってください。
:::

<details>

<summary>PCAN ファームウェアのダウンロードとドライバ復旧手順</summary>

ドライバをインストールしても PCAN-USB が動作せず、デバイスマネージャーに下図のような **PCAN-USB** デバイスが表示されない場合は、PCAN ファームウェアパッケージをダウンロードし、次の手順に従って DFU ドライバをインストールし、ファームウェアを書き換えてください。

![デバイスマネージャーで検出された PCAN-USB](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/01-pcan-usb-device.png)

> 📦 [USB2CAN.zipをダウンロード](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/USB2CAN.zip)

### DFU ドライバをインストールする

1. ダウンロードしたパッケージを解凍します。中には `Dfu tool` フォルダと `pcan` フォルダが含まれています。

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

5. 先ほど記録した DfuSeDemo ドライバパスを場所の欄に貼り付け、**サブフォルダーも検索する** を選択して **次へ** をクリックします。

![DfuSeDemo ドライバパスを入力し「サブフォルダーも検索する」を選択](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/07-driver-path.png)

6. USB2CAN モジュールをいったん取り外してから再接続します。**STM Device in DFU Mode** として認識されれば、ドライバの更新は成功です。

7. **DfuSeDemo** を開き、USB2CAN モジュールが正しく検出されていることを確認します。

![DfuSeDemo が USB2CAN モジュールを正しく検出](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/08-dfuse-detects-usb2can.png)

### PCAN ファームウェアを書き込む

1. DfuSeDemo で **Upgrade or Verify Action → Choose...** をクリックし、解凍した `pcan` フォルダからファームウェアを選択します。
2. **Upgrade** をクリックし、確認ダイアログで **Yes** をクリックして、ファームウェア書き込み処理が完了するまで待ちます。その後、DfuSeDemo を閉じてかまいません。

![DfuSeDemo で PCAN ファームウェアを選択して Upgrade をクリック](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/09-select-pcan-firmware.png)

![ファームウェアのアップグレード完了](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/10-firmware-upgrade-complete.png)

### デバイスを復元して確認する

USB2CAN モジュールを取り外し、DIP スイッチを **120R** に設定してから、再度コンピュータに接続します。デバイスマネージャーを開きます。デバイスが **PCAN-USB** として認識されていれば、問題は解決しており、このガイドを続行できます。

![デバイスマネージャーで正常に検出された PCAN-USB](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/11-pcan-usb-recognized.png)

</details>

<details>
<summary>PCAN ファームウェアダウンロードとドライバ修復手順 - Ubuntu</summary>

Ubuntu ユーザーはこちらのガイドを参照してください

1.> 📦 [クリックして USB2CAN.zip をダウンロード](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/USB2CAN.zip)

2.USB2CAN を BOOT に切り替えてください

3.手順1の USB2CAN.zip を解凍し、flash_pcan_ubuntu.sh と USB2CAN.zip 内の pcan_canable_hw.bin を同じディレクトリに配置してください

[クリックして flash_pcan_ubuntu.sh をダウンロード](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/flash_pcan_ubuntu.sh)

別のパソコンから転送する場合（例：scp）：

```text
scp flash_pcan_ubuntu.sh pcan_canable_hw.bin seeed@あなたのUbuntuのIP:~/Downloads/
```
または USB メモリにコピーして Ubuntu マシンに挿してコピーしても構いません — ファイルが ~/Downloads、カレントディレクトリ、または /tmp のいずれかにあれば、スクリプトが自動的に見つけます。

4.実行：

```text
bash flash_pcan_ubuntu.sh
```

パスワードを入力してください；完了までお待ちください

完了後、「120R」に戻してください

USB を挿し直してください。

</details>

<details>
<summary>PCAN ファームウェアダウンロードとドライバ修復手順 - MAC</summary>

MAC ユーザーはこちらのガイドを参照してください

1.> 📦 [クリックして USB2CAN.zip をダウンロード](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/USB2CAN.zip)

2.USB2CAN を BOOT に切り替えてください

3.手順1の USB2CAN.zip を解凍し、flash_pcan_mac.sh と USB2CAN.zip 内の pcan_canable_hw.bin を同じディレクトリに配置してください

[クリックして flash_pcan_mac.sh をダウンロード](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/flash_pcan_mac.sh)

別のパソコンから転送する場合（例：scp）：

```text
scp flash_pcan_mac.sh pcan_canable_hw.bin seeed@あなたのMACのIP:~/Downloads/
```

または USB メモリにコピーして MAC に挿してコピーしても構いません — ファイルが ~/Downloads、カレントディレクトリ、または /tmp のいずれかにあれば、スクリプトが自動的に見つけます。

4.実行：

```text
bash /Users/"あなたのユーザー名"/Downloads/flash_pcan_mac.sh "/Users/"あなたのユーザー名"/Downloads/pcan_canable_hw.bin"
```

上記のコマンドはファイルが Mac のダウンロードパスに配置されていることを前提としています。実際のパスに合わせて変更してください

パスワードを入力してください；完了までお待ちください

完了後、「120R」に戻してください

USB を挿し直してください。

</details>

<!-- ### 3. モーター ID の書き込み

:::tip 組立済みキットのユーザーは、この手順をスキップしてください
:::

ドライバーを使ってすべてのモーターケーブルを外し、1 つのモーターだけを USB-to-CAN モジュールに接続します。

次のコマンドを実行して、モーターが検出されているかスキャンします。工場出荷時の ID は 127 の場合があります。

```bash
motorbridge-cli scan --vendor robstride --channel can0 --start-id 126 --end-id 127 --timeout-ms 300
```

モーターの現在の ID を確認したら、変更コマンドを実行します（注意：複数のモーターを同時に接続しないでください。すべてのモーターが上書きされてしまいます）。

```bash
# Example: Change ID 127 to 5
motorbridge-cli id-set --vendor robstride --channel can0 --motor-id 127 --new-motor-id 5
```

上記の手順を、すべてのモーター ID が正常に書き込まれるまで繰り返します。その後、すべてのモーターケーブルを接続し、最終確認のために次のコマンドを実行します。7 台のモーターが検出されれば完了です。

```bash
motorbridge-cli scan --vendor robstride --channel can0 --start-id 1 --end-id 7 --timeout-ms 300
``` -->


### 4. MotorBridge-gateway を起動してゼロ点書き込みとデバッグを行う

#### モーターリセット前

モーターのパラメータ設定を行う前に、次の準備と安全ルールに注意してください：

- 2 個の治具クランプ（サイズ 3 インチ以上）と 48V XT30 出力のスイッチング電源を用意します（信頼できるブランドを選択し、粗悪な電源は使用しないでください）。
- デバッグおよび動作中は、少なくとも 1 メートル以上の安全距離を保ってください。
- モーターのホットプラグは行わないでください。XT30 2+2 コネクタの抜き差しは、必ず電源を切ってから行ってください。
- モーターを過負荷・過回転させないでください。起動前に配線や締結部を確認し、湿気の多い環境、高温環境、粉じんの多い環境では使用しないでください。
- 装置の暴走を防ぐため、適切なプログラムパラメータと非常停止機能を設定してください。
- **上記のルールを厳守してください。規定に反する操作や人的ミスによって生じたあらゆるリスクおよび損失について、販売者は一切の責任を負いません。**


#### Web UI によるゼロ点書き込みとデバッグ

ブラウザで [motorbridge-studio](https://motorbridge.github.io/motorbridge-studio/) にアクセスし、Help オプションをクリックして、使用しているオペレーティングシステムとドライバボードに応じたコマンドをコピーします。IP アドレスとポート番号を確認し、ターミナルで Enter キーを押して実行します。


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


