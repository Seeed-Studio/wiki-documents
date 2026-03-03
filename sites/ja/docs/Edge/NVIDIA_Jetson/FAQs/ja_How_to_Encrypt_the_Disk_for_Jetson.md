---
description: Jetson のディスク暗号化方法
title: Jetson のディスク暗号化方法
keywords:
- jetson
- encrypt
- L4T
image: https://files.seeedstudio.com/wiki/reComputer/nvidia-jetpack-6-0-stack.webp
slug: /ja/how_to_encrypt_the_disk_for_jetson
last_update:
  date: 10/11/2025
  author: Dayu
---

**この Wiki では L4T 36.4.3 と reComputer J401 を例に、Jetson ディスク暗号化の参考手順を提供します。
ディスク暗号化プロセスはフラッシュ中に実行する必要があります。ディスクを暗号化する必要がある場合は、システムを再設定して再フラッシュする必要があります。**

**フラッシュする前に、以下の手順で詳述されているように、適切にビルドされたイメージソースがあることを確認してください。**

## 1. ワークスペースの準備

このセクションでは **L4T 36.4.3** を例に、ソースコードプロジェクトをビルドしてコンパイルする方法を説明します。他のバージョンでも同じプロセスが適用されます—**後続の例のコマンドでバージョン番号を希望するビルドバージョンに置き換えるだけです**。

開始する前に、**Ubuntu 20.04/22.04 PC ホスト**を準備する必要があります。

L4T バージョンと JetPack バージョンの関係がわからない場合は、このリンクを参照してください：
https://developer.nvidia.com/embedded/jetpack-archive.
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

コンパイル用のソースコードを同期します。`-t` の後の引数を**希望する L4T バージョン**に置き換えてください：

```bash
cd Linux_for_Tegra/source/
./source_sync.sh -t jetson_36.4.3
```

ワークスペースのルートディレクトリに戻ります。以下のコマンドを使用して、希望するブランチのソースコードをローカルマシンに Git クローンします
（`-b <branch name>` をターゲットブランチに置き換えてください）：

```bash
sudo apt update
sudo apt install git-lfs
cd ../..
mkdir -p github/Linux_for_Tegra
git clone https://github.com/Seeed-Studio/Linux_for_Tegra.git -b r36.4.3 --depth=1 github/Linux_for_Tegra
```

Seeed の Jetson 用 BSP ソースコードは **この [GitHub リポジトリ](https://github.com/Seeed-Studio/Linux_for_Tegra/tree/main)** で利用できます。
異なるブランチをチェックして希望する L4T バージョンを見つけることができます。各ブランチは異なる L4T リリースに対応しています。
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/github_L4T.jpg"/></div>

次に、元のソースコードを上書きします：

```bash
cp -r github/Linux_for_Tegra/* Linux_for_Tegra/
```

rootfs に必要な変更を適用します：

```bash
cd Linux_for_Tegra
sudo ./apply_binaries.sh
```

PC に依存関係をインストールします：

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

カーネルをコンパイルしてビルドします：

```bash
cd source
./nvbuild.sh
```

新しいカーネル dtbs とドライバーをインストールします：

```bash
./do_copy.sh
export INSTALL_MOD_PATH=/your_path/Linux_for_Tegra/rootfs/
./nvbuild.sh -i
```




## 2. 暗号化ファイル生成とフラッシュガイド

事前に準備してコンパイルしたソースディレクトリに入ります：
```bash
cd Linux_for_Tegra
```


依存関係をインストールします：
```python
sudo apt-get install python3-cryptography python3-cffi-backend libxml2-utils 
sudo apt-get install python3-pycryptodome python3-crypto
sudo apt-get install cryptsetup


pip install cryptography
pip install pycrypto
pip install --user --upgrade pycryptodome
```

`OPTEE` に基づいて暗号化ファイルを生成します。以下のコマンドを実行して暗号化ファイル `eks_t234.img` と `sym2_t234.key` を生成します：

```python
cd source/tegra/optee-src/nv-optee/optee/samples/hwkey-agent/host/tool/gen_ekb

openssl rand -hex 32 > sym_t234.key
openssl rand -hex 16 > sym2_t234.key
openssl rand -hex 16 > auth_t234.key
openssl rand -hex 32 > oem_k1.key

./example.sh
```
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/optee-output.png
"/></div>

`eks_t234.img` と `sym2_t234.key` をソースフォルダ内の指定されたディレクトリにコピーします：
```python
cp eks_t234.img /your_path/cd Linux_for_Tegra/bootloader/
sudo cp sym2_t234.key /your_path/Linux_for_Tegra
```

以下の例では、`reComputer J401` を例にしてイメージを生成する方法を示します：
```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh \
  --network usb0 \
  --no-flash \
  --showlogs \
  -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" \
  recomputer-orin-j401 \
  internal
```
`recomputer-orin-j401` を使用しているデバイスの名前に置き換えてください。パラメータとして有効な `device name` を提供する必要があります。これは `Linux_for_Tegra` のルートディレクトリにある .conf ファイル名をチェックすることで見つけることができます。これらのファイル名のプレフィックスが有効な `device name` パラメータに対応しています。
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/device_name.png
"/></div>

:::tip
JetPack 5 では、ファイルパスが異なるため、`-p` パラメータを以下のように変更する必要があります：
`-p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml"`
:::

したがって、**L4T 36.4.3** で利用可能なデバイス名パラメータは以下の通りです。**j40** と **j30** シリーズは同じ設定ファイルを使用します：

- recomputer-industrial-orin-j201 (recomputer-industrial-orin-j40/j30 もこの `device name` をパラメータとして使用します。)
- recomputer-orin-j401
- reserver-agx-orin-j501x
- reserver-agx-orin-j501x-gmsl
- reserver-industrial-orin-j401
- recomputer-orin-j40mini
- recomputer-orin-robotics-j401
- recomputer-orin-super-j401


`eks_t234_sigheader.img.encrypt` をターゲットディレクトリにコピーします：

```python
sudo cp bootloader/eks_t234_sigheader.img.encrypt ./tools/kernel_flash/images/internal/
```

Linux_for_Tegra ディレクトリで、以下のコマンドを実行して暗号化されたルートファイルシステムをフラッシュします。
再度、`recomputer-orin-j401` をお使いのボードに対応するデバイス名に置き換えてください。

```python
sudo ROOTFS_ENC=1 \
./tools/kernel_flash/l4t_initrd_flash.sh \
  --external-device nvme0n1p1 \                  
  -i ./sym2_t234.key \                            
  -c tools/kernel_flash/flash_l4t_t234_nvme_rootfs_enc.xml \  
  -S 80GiB \                                      
  -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" \  
  --showlogs \                                    
  --network usb0 \                                
  recomputer-orin-j401 internal                    
```

このフラッシュプロセス中に、Jetson デバイスのストレージが暗号化されます。

:::warning
`OPTEE` によって生成された暗号化ファイルは、後で復号化に必要になるため、安全に保管してください。
:::

## 3. 復号化パスワードの取得

以前にビルドしたソースディレクトリ `Linux_for_Tegra` で、`sym2_t234.key` ファイルを以下の場所にコピーします：

```python
cp source/tegra/optee-src/nv-optee/optee/samples/hwkey-agent/host/tool/gen_ekb/sym2_t234.key source/tegra/optee-src/nv-optee/optee/samples/luks-srv/host/tool/gen_luks_passphrase
```

次に、フラッシュプロセス中に取得した `UUID` と `BR_CID` に基づいて復号化パスワードを生成します：

```python
cd source/tegra/optee-src/nv-optee/optee/samples/luks-srv/host/tool/gen_luks_passphrase


python3 gen_luks_passphrase.py -k sym2_t234.key -c "UUID of the disk" -u -e "BR_CID"
# For example
python gen_luks_passphrase.py -k sym2_t234.key -c "551df6eb-fa80-431c-bb54-121481e53bae" -u -e '0x80012344705E01D15C00000015020180'
```

`UUID` と `BR_CID` の値は、Linux_for_Tegra/initrdlog 下のログファイルで見つけることができます。
フラッシュ操作のタイムスタンプに基づいて対応するログファイルを見つけて、これらの値を取得してください。

| BR CID | UUID |
|:--:|:--:|
| <img width="400" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/BR CID.png"/> | <img width="340" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/UUID.png"/> |

`gen_luks_passphrase.py` はターミナルに復号化パスワードを短時間表示します—消える前にすぐに記録してください。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/password.png
"/></div>

## リソース

- [Seeed の L4T ソースコード](https://github.com/Seeed-Studio/Linux_for_Tegra)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
