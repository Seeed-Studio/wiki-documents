---
description: このWikiでは、JetPack 6.2.1 を実行する Seeed reComputer Jetson デバイス向けに、PREEMPT_RT Linux リアルタイムカーネルをビルドしてフラッシュする方法を説明します。
title: JetPack 6.2.1 を搭載した Seeed reComputer Jetson に PREEMPT_RT Linux リアルタイムカーネルをフラッシュする
keywords:
  - Jetson
  - reComputer
  - JetPack 6.2.1
  - PREEMPT_RT
  - Real-Time Kernel
  - Linux
image: https://files.seeedstudio.com/wiki/RT_for_jetson/5.png
slug: /flash_preempt_rt_kernel_on_recomputer_jetson_jetpack_6_2_1
sku: E2025032601,100088050,114993489,114993488,100026552,102111001,100020039,100094378
last_update:
  date: 07/02/2026
  author: Dongxu Jin
createdAt: '2026-07-02'
updatedAt: '2026-07-02'
url: https://wiki.seeedstudio.com/ja/flash_preempt_rt_kernel_on_recomputer_jetson_jetpack_6_2_1/
---

# JetPack 6.2.1 を搭載した Seeed reComputer Jetson に PREEMPT_RT Linux リアルタイムカーネルをフラッシュする

リアルタイムカーネル（PREEMPT_RT カーネルとも呼ばれます）は、リアルタイムスケジューリング機能を強化した Linux カーネルの一種です。その主な目的は、生の計算性能を向上させることではなく、スケジューリングレイテンシを低減し、タスク実行の決定性を高めることです。

標準的な Linux カーネルと比較して、リアルタイムカーネルは高優先度タスクがより迅速に CPU リソースをプリエンプトできるようにし、割り込みやスレッドスケジューリングによるタイミングジッタを低減します。これにより、制御タスクを一定周期で安定して実行できます。ロボティクス、産業オートメーション、モーションコントロール、自動運転、エッジコンピューティングといったシナリオでは、リアルタイムカーネルにより、モータ制御、センサーデータ取得、CAN や EtherCAT を含む産業用バス通信などのリアルタイムワークロードの安定性と信頼性を大幅に向上させることができます。

本ガイドは、公式の NVIDIA Jetson Linux R36.4.4 BSP をベースにしています。Seeed R36.4.4 BSP をマージし、PREEMPT_RT カーネルをクロスコンパイルし、Seeed Jetson デバイスの NVMe SSD にシステムを書き込みます。

## 参考資料

- [NVIDIA Jetson Linux R36.4.4 クイックスタート](https://docs.nvidia.com/jetson/archives/r36.4.4/DeveloperGuide/IN/QuickStart.html#to-determine-whether-the-developer-kit-is-in-force-recovery-mode)
- [NVIDIA Jetson Linux R36.4.4 カーネルカスタマイズ](https://docs.nvidia.com/jetson/archives/r36.4.4/DeveloperGuide/SD/Kernel/KernelCustomization.html)
- [CSDN 参考記事](https://blog.csdn.net/Cruelbuildingdog/article/details/145872768)

## ハードウェア要件

- x86 Ubuntu ホスト PC
- フラッシュ対象の Seeed reComputer または reServer デバイス

## ワークスペースを作成しシステムファイルをダウンロードする

ホスト PC 上にワークスペースを作成します：

```bash
mkdir ~/RT_ws
cd ~/RT_ws
```

[NVIDIA Jetson Linux R36.4.4](https://developer.nvidia.com/embedded/jetson-linux-r3644) にアクセスし、下図でハイライトされている 4 つのファイルをダウンロードして、`~/RT_ws` ワークスペースに配置します。

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/RT_for_jetson/1.png"/></div>

[Seeed-Studio/Linux_for_Tegra](https://github.com/Seeed-Studio/Linux_for_Tegra) からソースコードの ZIP パッケージをダウンロードするか、リポジトリをクローンします：

```bash
git clone https://github.com/Seeed-Studio/Linux_for_Tegra.git
```

このディレクトリ名は公式 NVIDIA ディレクトリ名と競合する可能性があるため、本ガイドの手順に従って ZIP パッケージをダウンロードし、展開することを推奨します。

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/RT_for_jetson/2.png"/></div>

`~/RT_ws` 配下に次のファイルが存在することを確認します：

```bash
ls -lh \
  Jetson_Linux_R36.4.4_aarch64.tbz2 \
  Tegra_Linux_Sample-Root-Filesystem_R36.4.4_aarch64.tbz2 \
  public_sources.tbz2 \
  aarch64--glibc--stable-2022.08-1.tar.bz2 \
  Linux_for_Tegra-r36.4.4.zip
```

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/RT_for_jetson/3.png"/></div>

## ホスト依存パッケージをインストールする

```bash
cd ~/RT_ws

sudo apt-get update

sudo apt-get install -y \
  qemu-user-static \
  python3-pip \
  device-tree-compiler \
  flex \
  bison \
  libncurses-dev \
  libssl-dev \
  build-essential \
  sshpass \
  abootimg \
  nfs-kernel-server \
  libxml2-utils
```

## 公式 BSP、Rootfs、ソース、ツールチェーン、Seeed オーバーレイを展開する

```bash
cd ~/RT_ws

mkdir -p l4t-gcc

tar xf aarch64--glibc--stable-2022.08-1.tar.bz2 -C l4t-gcc

tar xf Jetson_Linux_R36.4.4_aarch64.tbz2

tar xf public_sources.tbz2 -C .

unzip -q Linux_for_Tegra-r36.4.4.zip -d seeed_overlay

sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R36.4.4_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
```

rootfs は必ず `sudo tar xpf` で展開する必要があります。通常の `tar` を使用しないでください。そうしないと、ファイルの所有権とパーミッションが正しくなくなります。すでに展開済みの場合は、そのディレクトリをそのまま使用できます。完全にやり直したい場合のみ、古いディレクトリを削除してください。

## NVIDIA ソースを展開する

```bash
cd ~/RT_ws/Linux_for_Tegra/source

tar xf kernel_src.tbz2

tar xf kernel_oot_modules_src.tbz2

tar xf nvidia_kernel_display_driver_source.tbz2
```

## Seeed BSP オーバーレイをマージする

```bash
cd ~/RT_ws

cp -a seeed_overlay/Linux_for_Tegra-r36.4.4/. Linux_for_Tegra/
```

このステップはビルド前に必ず完了させる必要があります。Seeed オーバーレイは、カーネル、OOT モジュール、`hardware/nvidia/t23x/nv-public` の DTS および Makefile ファイル、`bootloader/generic/BCT` を変更します。このステップをスキップすると、フラッシュ時に利用できるのは公式 NVIDIA 開発キット構成のみとなり、Seeed キャリアボード情報は含まれません。

## NVIDIA バイナリを Rootfs に適用し、フラッシュ前提条件をインストールする

```bash
cd ~/RT_ws/Linux_for_Tegra

sudo ./apply_binaries.sh

sudo ./tools/l4t_flash_prerequisites.sh
```

## PREEMPT_RT カーネル、OOT モジュール、DTB をビルドする

```bash
cd ~/RT_ws/Linux_for_Tegra/source

export ARCH=arm64

export CROSS_COMPILE=~/RT_ws/l4t-gcc/aarch64--glibc--stable-2022.08-1/bin/aarch64-buildroot-linux-gnu-

./nvbuild.sh -r
```

`-r` オプションは、公式 NVIDIA の PREEMPT_RT 設定を有効にします。ビルド出力ディレクトリは `~/RT_ws/Linux_for_Tegra/source/kernel_out` です。ビルドが成功すると、カーネルバージョンのサフィックスに `-rt-tegra` が含まれているはずです。

## Seeed の `do_copy.sh` で Image、DTB、DTBO をデプロイする

```bash
cd ~/RT_ws/Linux_for_Tegra/source

./do_copy.sh

# Additional checks:
ls -lh ../kernel/Image

ls ../kernel/dtb/tegra234-j401-p3768-0000+p3767-0000-recomputer.dtb

ls ../kernel/dtb/tegra234-j201-p3768-0000+p3767-0000-recomputer-indu.dtb
```

`do_copy.sh` は Seeed BSP におけるデプロイのエントリポイントです。ビルド済みの reComputer および reServer の DTB、カメラおよび GMSL の DTBO、新しい `kernel/Image` をコピーします。

`do_copy.sh` が Seeed DTB を見つけられないと報告する場合、多くは Seeed オーバーレイが完全にマージされていないか、ビルドで Seeed オーバーレイ済みの `source/Makefile` が使用されていないことを意味します。

## カーネルモジュールを Rootfs にインストールする

```bash
cd ~/RT_ws/Linux_for_Tegra/source

export ARCH=arm64

export CROSS_COMPILE=~/RT_ws/l4t-gcc/aarch64--glibc--stable-2022.08-1/bin/aarch64-buildroot-linux-gnu-

export INSTALL_MOD_PATH=~/RT_ws/Linux_for_Tegra/rootfs/

sudo -E ./nvbuild.sh -i
```

## 共通の Seeed DTBO を `rootfs/boot` にコピーし、Initrd を更新する

```bash
cd ~/RT_ws/Linux_for_Tegra

sudo cp -a kernel/dtb/tegra234-p3767-camera-p3768-imx219-dual-seeed.dtbo rootfs/boot/ 2>/dev/null || true

sudo cp -a kernel/dtb/tegra234-p3767-camera-p3768-imx219-quad-seeed.dtbo rootfs/boot/ 2>/dev/null || true

sudo cp -a kernel/dtb/tegra234-p3767-camera-p3768-imx477-dual-seeed.dtbo rootfs/boot/ 2>/dev/null || true

sudo cp -a kernel/dtb/tegra234-p3767-camera-p3768-imx219-imx477-seeed.dtbo rootfs/boot/ 2>/dev/null || true

sudo cp -a kernel/dtb/tegra234-p3767-camera-p3768-imx477-imx219-seeed.dtbo rootfs/boot/ 2>/dev/null || true

sudo cp -a kernel/dtb/tegra234-seeed-gmsl*.dtbo rootfs/boot/ 2>/dev/null || true

sudo cp -a kernel/dtb/tegra234-seeed-orbbec-335lg-overlay.dtbo rootfs/boot/ 2>/dev/null || true

sudo ./tools/l4t_update_initrd.sh
```

DTBO ファイルを `rootfs/boot` にコピーすることで、ブート後も Seeed のカメラおよび GMSL オーバーレイを引き続き使用できるようにします。`l4t_update_initrd.sh` は新しいモジュール依存関係を initrd に書き込みます。NVMe ブートではこのステップをスキップしないでください。

## ビルド出力を確認する

```bash
cd ~/RT_ws/Linux_for_Tegra

ls -lh kernel/Image

ls kernel/dtb/tegra234-j*.dtb

find rootfs/lib/modules -maxdepth 1 -type d -name '*-rt-tegra' -print
```

reComputer J401 をフラッシュする場合、少なくとも次のファイルが存在している必要があります：

```text
kernel/dtb/tegra234-j401-p3768-0000+p3767-0000-recomputer.dtb
kernel/dtb/tegra234-j401-p3768-0000+p3767-0001-recomputer.dtb
kernel/dtb/tegra234-j401-p3768-0000+p3767-0003-recomputer.dtb
kernel/dtb/tegra234-j401-p3768-0000+p3767-0004-recomputer.dtb
```

## 強制リカバリモードに入り USB 接続を確認する

デバイス上の `REC` スイッチを `ON` に設定し、その隣の `Debug/Device` ポートと x86 ホスト PC を USB ケーブルで接続します。

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/RT_for_jetson/4.jpg"/></div>

ホスト PC で次を実行します：

```bash
cd ~/RT_ws/Linux_for_Tegra

lsusb
```

次のような出力が表示されるはずです：

```text
Bus <bbb> Device <ddd>: ID 0955:<nnnn> NVIDIA Corp.
```

`0955` が表示されない場合は、REC/GND ジャンパまたはリカバリモードへの移行手順を確認し、Type-C ケーブルがデータ通信に対応していることを確認し、仮想マシンを使用している場合は NVIDIA USB デバイスが Ubuntu にパススルーされていることを確認してください。

## Seeed ボード構成名を選択する

```bash
cd ~/RT_ws/Linux_for_Tegra

export SEEED_BOARD_CONF=recomputer-orin-j401

test -f "${SEEED_BOARD_CONF}.conf"
```

利用可能な構成名：

```text
recomputer-orin-j401
recomputer-industrial-orin-j201
reserver-industrial-orin-j401
recomputer-orin-j40mini
recomputer-orin-super-j401
recomputer-orin-robotics-j401
recomputer-orin-robotics-j401-gmsl
reserver-agx-orin-j501x
reserver-agx-orin-j501x-gmsl
```

次の表は、製品モデルと構成名の対応関係を示します：

| 製品モデル | 構成名 |
| --- | --- |
| reComputer classic J3010/J3011/J4011/J4012 | `recomputer-orin-j401` |
| reComputer Industrial J3010/J3011/J4011/J4012 | `recomputer-industrial-orin-j201` |
| reServer Industrial J3010/J3011/J4011/J4012 | `reserver-industrial-orin-j401` |
| reComputer Mini J40 シリーズ | `recomputer-orin-j40mini` |
| reComputer Super J401 シリーズ | `recomputer-orin-super-j401` |
| reComputer Robotics J401 シリーズ | `recomputer-orin-robotics-j401` または `recomputer-orin-robotics-j401-gmsl` |
| reServer AGX Orin J501x | `reserver-agx-orin-j501x` または `reserver-agx-orin-j501x-gmsl` |

## モジュール EEPROM とボード情報の変数を入力する

オンラインで直接フラッシュし、USB EEPROM の読み取りが正常に動作している場合、NVIDIA ツールは通常この情報を自動的に読み取ります。

モジュールまたはボード情報が不足しているというエラーが発生した場合は、フラッシュ前に実際のモジュールモデルに応じて、以下の変数を入力してください。

Orin NX / Orin Nano 共通値：

| モジュール | BOARDID | BOARDSKU | FAB | BOARDREV | CHIP_SKU |
| --- | --- | --- | --- | --- | --- |
| Orin Nano 4GB | 3767 | 0004 | 300 | N.2 | 00:00:00:D6 |
| Orin Nano 8GB | 3767 | 0003 | 300 | N.2 | 00:00:00:D6 |
| Orin NX 16GB | 3767 | 0000 | 300 | G.3 | 00:00:00:D3 |
| Orin NX 8GB | 3767 | 0001 | 300 | M.3 | 00:00:00:D4 |

AGX Orin J501x 共通値：

| モジュール | BOARDID | BOARDSKU | FAB | BOARDREV | CHIP_SKU |
| --- | --- | --- | --- | --- | --- |
| AGX Orin 32GB | 3701 | 0004 | 500 | J.0 | 00:00:00:D2 |
| AGX Orin 64GB | 3701 | 0005 | 500 | M.0 | 00:00:00:D0 |

`reComputer J4012 / Orin NX 16GB` の例：

```bash
export BOARDID=3767
export BOARDSKU=0000
export FAB=300
export BOARDREV=G.3
export CHIP_SKU=00:00:00:D3
```

`reComputer J3011 / Orin Nano 8GB` の例：

```bash
export BOARDID=3767
export BOARDSKU=0003
export FAB=300
export BOARDREV=N.2
export CHIP_SKU=00:00:00:D6
```

変数を確認します：

```bash
echo "CONF=${SEEED_BOARD_CONF} BOARDID=${BOARDID} BOARDSKU=${BOARDSKU} FAB=${FAB} BOARDREV=${BOARDREV} CHIP_SKU=${CHIP_SKU}"
```

Seeed の設定ファイルは、`BOARDSKU` にマッピングされる `board_sku` に応じて `DTB_FILE` を選択します。`BOARDSKU` が正しくない場合、書き込み自体は成功しても、デバイスが誤った DTB で起動する可能性があります。その場合、周辺機器、Ethernet、M.2、カメラ、GPIO が正しく動作しないことがあります。

## NVMe へのフラッシュ

```bash
cd ~/RT_ws/Linux_for_Tegra

sudo -E BOARDID="${BOARDID}" BOARDSKU="${BOARDSKU}" FAB="${FAB}" BOARDREV="${BOARDREV}" CHIP_SKU="${CHIP_SKU}" \
  ./tools/kernel_flash/l4t_initrd_flash.sh \
  --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_t234_nvme.xml \
  -p "-c bootloader/generic/cfg/flash_t234_qspi.xml --no-systemimg" \
  --showlogs \
  --network usb0 \
  "${SEEED_BOARD_CONF}" \
  external
```

このコマンドは NVMe SSD にフラッシュし、Orin NX および Orin Nano 向けに QSPI ブート構成を処理します。最後の `external` 引数は、システムの rootfs が外部 NVMe から起動することを意味します。デバイスに 2 台の NVMe SSD が搭載されている場合でも、rootfs が `PARTUUID` を使用するように `external` を使用することを推奨します。

## フラッシュ後

フラッシュが成功したら、デバイスの電源を切り、REC/GND ジャンパを取り外すかリカバリーモードボタンを離し、Jetson デバイスの電源を再投入します。

## リアルタイムカーネルと DTB の確認

カーネルバージョンを確認します：

```bash
uname -a
```

出力には `-rt` サフィックスが含まれている必要があります。

カーネル設定を確認します：

```bash
zcat /proc/config.gz | grep PREEMPT
```

出力には次が含まれている必要があります：

```text
CONFIG_PREEMPT_RT=y
```

スケジューリングジッタをテストするために `cyclictest` を使用します：

```bash
sudo apt install -y rt-tests
sudo cyclictest -Sp90-i1000-l100000
```

しばらく待った後、`Avg` 値が 20 マイクロ秒未満であるかどうかを確認します。出力例：

```text
T: 0 (  1290) P:99 I:1000 C:100000 Min: 5  Act:10 Avg: 7  Max: 18
T: 1 (  1291) P:99 I:1000 C:100000 Min: 4  Act: 9 Avg: 7  Max: 20
```

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/RT_for_jetson/5.png"/></div>

上記のチェックをすべてパスした場合、PREEMPT_RT リアルタイムカーネルは正常にインストールされています。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、お客様が製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただけるよう、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
