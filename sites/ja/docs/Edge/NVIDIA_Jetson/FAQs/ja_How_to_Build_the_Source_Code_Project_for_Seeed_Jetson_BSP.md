---
description: Seeed の Jetson BSP のソースコードプロジェクトをビルドする方法
title: Seeed の Jetson BSP のソースコードプロジェクトをビルドする方法
keywords:
- jetson
- jetpack
- L4T
image: https://files.seeedstudio.com/wiki/reComputer/nvidia-jetpack-6-0-stack.webp
slug: /ja/how_to_build_the_source_code_project_for_seeed_jetson_bsp
last_update:
  date: 08/04/2025
  author: Dayu
---

**この wiki では、Seeed の Jetson 製品用の BSP ソースコードを取得し、完全な BSP ソースパッケージに整理し、Jetson デバイスにコンパイル/フラッシュする方法を説明します。**

## 1. ワークスペースの準備

このガイドでは **L4T 36.4.3** を例に、ソースコードプロジェクトをビルドし、コンパイルして Jetson デバイスにフラッシュする方法を説明します。同じプロセスが他のバージョンにも適用されます—**後続の例のコマンドでバージョン番号を希望するビルドバージョンに置き換えるだけです**。

開始する前に、**Ubuntu 20.04/22.04 PC ホスト**を準備する必要があります。

L4T バージョンと JetPack バージョンの関係がわからない場合は、このリンクを参照してください：
https://developer.nvidia.com/embedded/jetpack-archive
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/L4T-jetpack.png
"/></div>

コンパイルしたい特定の **L4T (Linux for Tegra)** リリースを検索します。例：
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/google_L4T.jpg"/></div>

<!-- After clicking on the web, download and prepare the sample root file system, NVIDIA's official BSP and the toolchain used for cross-compilation, as shown below.
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/download-BSP-rootfs-toolchain.png"/></div> -->

NVIDIA の公式 BSP を展開すると、`Linux_for_Tegra` という名前のディレクトリが得られます。次に、ルートファイルシステムアーカイブを公式の `Linux_for_Tegra` ディレクトリに展開します：

```bash
tar xf Jetson_Linux_r36.4.3_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_r36.4.3_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
```

コンパイル用のソースコードを同期します。`-t` の後の引数を**必要なL4Tバージョン**に置き換えてください：

```bash
cd Linux_for_Tegra/source/
./source_sync.sh -t jetson_36.4.3
```

ワークスペースのルートディレクトリに移動します。以下のコマンドを使用して、目的のブランチのソースコードをローカルマシンにgit cloneします
（`-b <branch name>`をターゲットブランチに置き換えてください）：

```bash
sudo apt update
sudo apt install git-lfs
cd ../..
mkdir -p github/Linux_for_Tegra
git clone https://github.com/Seeed-Studio/Linux_for_Tegra.git -b r36.4.3 --depth=1 github/Linux_for_Tegra
```

Seeed の Jetson 用 BSP ソースコードは **この [GitHub リポジトリ](https://github.com/Seeed-Studio/Linux_for_Tegra/tree/main)** で入手できます。
各ブランチが異なる L4T リリースに対応しているため、異なるブランチをチェックして希望する L4T バージョンを見つけることができます。
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/github_L4T.jpg"/></div>

次に、元のソースコードを上書きします：

```bash
cp -r github/Linux_for_Tegra/* Linux_for_Tegra/
```

rootfsに必要な変更を適用します：

```bash
cd Linux_for_Tegra
sudo ./apply_binaries.sh
```

PCに依存関係をインストールします：

```bash
sudo apt-get update
sudo apt-get install build-essential flex bison libssl-dev
sudo apt-get install sshpass
sudo apt-get install abootimg
sudo apt-get install nfs-kernel-server
sudo apt-get install libxml2-utils
sudo apt-get install qemu-user-static
```

カーネルビルドの準備作業：

```bash
mkdir -p l4t-gcc
tar xf aarch64--glibc--stable-2022.08-1.tar.bz2 -C ./l4t-gcc
export ARCH=arm64
export CROSS_COMPILE=/your_path/l4t-gcc/aarch64--glibc--stable-2022.08-1/bin/aarch64-buildroot-linux-gnu-
```

カーネルをコンパイルしてビルドする：

```bash
cd source
./nvbuild.sh
```

新しいカーネルdtbsとドライバーをインストールします：

```bash
./do_copy.sh
export INSTALL_MOD_PATH=/your_path/Linux_for_Tegra/rootfs/
./nvbuild.sh -i
```

:::tip
JetPack 5の場合、ファイルパスが異なるため、`-p`パラメータを以下のように変更する必要があります：
`-p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml"`
:::

**Jetpack 6**の場合、デバイスをフラッシュする（**recomputer-orin-j401**を例とする）：

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh \
--external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml \
-p "-c bootloader/generic/cfg/flash_t234_qspi.xml"  --showlogs \
--network usb0 recomputer-orin-j401 internal
```

`recomputer-orin-j401` を、使用しているデバイスの名前に置き換えてください。パラメータとして有効な `device name` を提供する必要があります。これは `Linux_for_Tegra` のルートディレクトリにある .conf ファイル名を確認することで見つけることができます。これらのファイル名のプレフィックスが、有効な `device name` パラメータに対応しています。
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/device_name.png
"/></div>

したがって、**L4T 36.4.3** で利用可能なデバイス名パラメータは以下の通りです。**j40** と **j30** シリーズは同じ設定ファイルを使用します：

- recomputer-industrial-orin-j201 (recomputer-industrial-orin-j40/j30 もこの `device name` をパラメータとして使用します。)
- recomputer-orin-j401
- reserver-agx-orin-j501x
- reserver-agx-orin-j501x-gmsl
- reserver-industrial-orin-j401
- recomputer-orin-j40mini
- recomputer-orin-robotics-j401
- recomputer-orin-super-j401

## リソース

- [Seeed の L4T のソースコード](https://github.com/Seeed-Studio/Linux_for_Tegra)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
