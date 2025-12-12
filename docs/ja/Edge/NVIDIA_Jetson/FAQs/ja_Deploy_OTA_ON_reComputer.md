---
description: このガイドでは、reComputer mini J4012をJetPack 5.1.3からJetPack 6.2にアップグレードするためのエンドツーエンドOTAパッケージの作成について、BSP準備、パッケージ生成、デバイス上でのデプロイメントを含めて説明します。
title: reComputerでOTAをデプロイ
keywords:
- jetson
- OTA
- JetPack
- reComputer
- BSP
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/jtop2.webp
slug: /ja/deploy_ota_on_recomputer
last_update:
  date: 12/05/2025
  author: Zibo
---

# reComputerでOTAをデプロイ

## はじめに

NVIDIA Jetson Over-the-Air（OTA）アップデートにより、開発者はネットワーク接続を介してエッジデバイスを古いJetPackバージョンから新しいリリースにリモートでアップグレードでき、ホストPCや物理的なUSB再フラッシュの必要がありません。
このwikiでは、reComputerでOTA（Over-the-Air）アップデートを実行する方法を説明します。

:::note
デモンストレーションプラットフォーム：JetPack 5.1.3からJetPack 6.2へのOTAを行うreComputer mini J4012。他のOrinベースのreComputerも同じロジックに従うことができますが、キャリアボードに合致する`<target_board>`名を適応させてください。
:::

## 前提条件
- Ubuntu x86_64 PC
- [reComputer mini J4012](https://www.seeedstudio.com/reComputer-Mini-J4012-with-Extension-p-6353.html)

## OTAを迅速に実行

ここでは、Seeed開発ボード用のプリコンパイル済みアップグレードパッケージを提供しており、
Jetpack 5.1.3からJetpack 6.2にアップグレードします。Jetpack 5.1.3からJetpack 6.2にOTA経由で直接アップグレードを計画している場合は、
単純にダウンロードして迅速にアップグレードを進めることができます。


import OtaProductSelect from '@site/src/components/jetson/OtaProductSelect';

export const productOptions = [
  {
    value: 'j4012mini',
    label: 'reComputer mini',
    img: 'https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg',
    otaDescription: 'reComputer mini シリーズ用のすぐに使えるJP5.1.3 → JP6.2 OTAペイロード',
    otaPayload: {
      mainlink: 'https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBkQzbsk18YRpFT6j1BK8VnAaH18J6nKGimI0xa4DTLsFg?e=PKhf7u',
      filename: 'ota_payload_package.tar.gz',
      sha256: '3da8fd97c450f4f7bd83390ab50f951dffd5ec1d43c39a1e6156b4806f7df7c6',
    },
  },
  {
    value: 'j4012classic',
    label: 'reComputer J30/40/401B',
    img: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/r/e/recomputer_classic_optional_accessories_nvidia_jetson_orin_powered_edge_ai_box.jpeg',
    otaDescription: 'reComputer classic J30/40/401B用のすぐに使えるJP5.1.3 → JP6.2 OTAペイロード',
    otaPayload: {
      mainlink: 'https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDRxYlSWuWvRbELB8tyGQ88AUa3cDYrNoj0kAyyzU3YTFA?e=P60b7N',
      filename: 'ota_payload_package.tar.gz',
      sha256: 'b0dde3e8fb5ac3838d8d569def1a373949ca30f59f52e30197f872c95aa7a777',
    },
  },
  {
    value: 'j4012industrial',
    label: 'reComputer industrial シリーズ',
    img: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1--recomputer-industrial-bundle.jpg',
    otaDescription: 'reComputer Industrial シリーズ用のすぐに使えるJP5.1.3 → JP6.2 OTAペイロード',
    otaPayload: {
      mainlink: 'https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQC1cwAhknjjRLGyVc_Ze7QOAUAQ7KSi3IkzUSZ3XD45gL4?e=Q68dEF',
      filename: 'ota_payload_package.tar.gz',
      sha256: '31f17fe8606b19730c3d5a29b8cf96db99dff587de93136dbd74f39c71aeb4e9',
    },
  },
  {
    value: 'j4012reserver',
    label: 'reServer industrial シリーズ',
    img: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114110247-reserver-industrial-j4012-first.jpg',
    otaDescription: 'reServer industrial シリーズ用のすぐに使えるJP5.1.3 → JP6.2 OTAペイロード。',
    otaPayload: {
      mainlink: 'https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBGOUJ8bXdYQbfRVpP9y_QHAdO-UoETL5AlRco6eTWg_Kg?e=loYpgD',
      filename: 'ota_payload_package.tar.gz',
      sha256: '879c2ab65019955ee798479d5303d91df22d496215657ea132dcfd3a11e46d24',
    },
  },
  {
    value: 'j501-carrier A GX-Orin',
    label: 'reServer industrial J501 AGX-Orin with GMSL',
    img: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991854-reserver-industrial-j501-carrier-board-for-jetson-agx-orin-45font_1.jpg',
    otaDescription: 'GMSL付きreServer industrial J501用のすぐに使えるJP5.1.3 → JP6.2 OTAペイロード。',
    otaPayload: {
      mainlink: 'https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBhfhZjS7orSLpp2ZS_CmhcAeGMpeh9xFsOJV7op2b0VIY?e=AgpgCt',
      filename: 'ota_payload_package.tar.gz',
      sha256: '83deb4d1a5f5a999c4cfb08581baf4fb4754cab5f867ae2809e0d03f1d817b60',
    },
  },
  {
    value: 'j501-carrier AGX-Orin',
    label: 'reServer industrial J501 AGX-Orin without GMSL',
    img: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991854-reserver-industrial-j501-carrier-board-for-jetson-agx-orin-45font_1.jpg',
    otaDescription: 'GMSLなしreServer industrial J501用のすぐに使えるJP5.1.3 → JP6.2 OTAペイロード。',
    otaPayload: {
      mainlink: 'https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQC6wipGORa_SqinT6KB6eEXAZfD80o1uAo2jpZMVo7M5aU?e=eqbjZY',
      filename: 'ota_payload_package.tar.gz',
      sha256: '9d015fdcbabb77a9669fb8f0f6762c9a69260cd47ec4710d79de7cbdc19e9f23',
    },
  },
]

<OtaProductSelect options={productOptions} lang="es" />



### デバイス上でのOTA手順

:::note
以下の操作はJetson上で実行されます（リモート接続経由）
:::

**ステップ1.** 依存ソフトウェアをインストール
```bash
sudo apt-get update
sudo apt-get install efibootmgr nvme-cli -y
```

**ステップ2.** OTAツールをダウンロード
```bash
#Create a workspace directory
mkdir ~/ota_ws && cd ota_ws
#Download the OTA tools from Nvidia
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.3/release/ota_tools_r36.4.3_aarch64.tbz2
# Uncompress
tar xvf ota_tools_r36.4.3_aarch64.tbz2
```
上記のファイルを解凍すると、「Linux_for_Tegra」という名前のフォルダが得られます。

**ステップ3.** otaファイルをJetsonに転送（このステップはPCで実行してください！）

:::info
`<Jetson IP>`をJetsonの実際のIPアドレスに置き換えてください。例：192..168.137.xx
`ota_payload_package.tar.gz`ファイルのパスと`ota_ws`パスを実際のパスに置き換えてください
:::

```bash
#example:Use scp to transfer files
scp /path/to/your downloaded/ota_payload_package.tar.gz seeed@<Jetson IP>:/home/user/ota_ws
```
**ステップ4.** 元のシステムのファイルをバックアップ
```bash
cd /path/ota_ws/Linux_for_Tegra/tools/ota_tools/version_upgrade/
#The editor needs to keep a backup of the file directory that needs to be preserved.
vim ota_backup_files_list.txt
```
:::note
保持したいファイルやフォルダをリストアップしてください。
絶対パスを使用してください！
<div align="center"><img width ="1000" 
    src="https://files.seeedstudio.com/wiki/reComputer/OTA/backup_list.png"/>
</div>
:::

```bash
./nv_ota_preserve_data.sh
```
**ステップ5.** OTAを開始

```bash
cd Linux_for_Tegra/tools/ota_tools/version_upgrade
#Specify the directory of the OTA file
sudo ./nv_ota_start.sh ~/ota_ws/ota_payload_package.tar.gz
```
<div align="center"><img width ="1000" 
    src="https://files.seeedstudio.com/wiki/reComputer/OTA/ota_sh.png"/>
</div>

<div align="center"><img width ="1000" 
    src="https://files.seeedstudio.com/wiki/reComputer/OTA/ota_sh_finish.png"/>
</div>

スクリプトが実行された後、JetsonをリスタートしてOTAプロセスを開始できます。
デバイスがモニターに接続されている場合、リスタート時にモニターにNvidiaロゴが表示され、その後カーネルオーバーレイに入ります。画面はしばらく黒いまま（正常な現象）になり、その後OTAプロセスに入ります。
<div align="center"><img width ="1000" 
    src="https://files.seeedstudio.com/wiki/reComputer/OTA/ota_process.jpg"/>
</div>

全プロセスが完了した後、システムに入ってユーザー名とパスワードを設定する必要があります。

<div align="center"><img width ="1000" 
    src="https://files.seeedstudio.com/wiki/reComputer/OTA/update_finish.jpg"/>
</div>
**ステップ6.** アップグレード後の検証

デバイスがJetPack 6.2で起動したら：

```bash
nvbootctrl -t
sudo nvme list
cat /etc/nv_tegra_release
```
<div align="center"><img width ="1000" 
    src="https://files.seeedstudio.com/wiki/reComputer/OTA/ota_sucess.png"/>
</div>
報告されたリリースが`R36 (release), REVISION: 4.3`と一致することを確認し、アプリケーションが期待通りに起動することを確認してください。
おめでとうございます！OTAプロセスが成功しました。システムファイルも以前に保存されました！
## その他のバージョンのOTA（オプション）
上記では、OTAパッケージの一般的なバージョンのみを提供しました。現在のバージョンのOTAから別のバージョンにアップグレードする必要がある場合は、以下の手順を参照して対応するOTAパッケージを生成してください。
現在デモンストレーションしているのは、Jetpack 5.1.3からターゲットバージョンのJetpack 6.2へのアップグレードです。

### ターゲットBSP（JetPack 6.2）の準備
以下のすべてのコマンドはUbuntu PCで実行します。

**ステップ1. NVIDIA JetPack 6.2パッケージをダウンロード。**

```bash
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.3/release/Jetson_Linux_r36.4.3_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.3/release/Tegra_Linux_Sample-Root-Filesystem_r36.4.3_aarch64.tbz2
```

**ステップ2. BSPを`Linux_for_Tegra`に展開。**

```bash
tar xf Jetson_Linux_r36.4.3_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_r36.4.3_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
```

**ステップ3. JP6.2用のNVIDIAソースを同期。**

```bash
cd Linux_for_Tegra/source/
./source_sync.sh -t jetson_36.4.3
cd ../..
```

**ステップ4. Seedカスタマイゼーションをオーバーレイ。**

```bash
mkdir -p github/Linux_for_Tegra
git clone https://github.com/Seeed-Studio/Linux_for_Tegra.git -b r36.4.3 --depth=1 github/Linux_for_Tegra
cp -r github/Linux_for_Tegra/* Linux_for_Tegra/
```

**ステップ5. NVIDIAバイナリとホスト依存関係を適用。**

```bash
cd Linux_for_Tegra
sudo ./apply_binaries.sh
sudo apt-get update
sudo apt-get install -y build-essential flex bison libssl-dev sshpass \
  abootimg nfs-kernel-server libxml2-utils qemu-user-static
```

**ステップ 6. カーネルコンパイル用の Jetson ツールチェーンをインストールします。**

```bash
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v3.0/toolchain/aarch64--glibc--stable-2022.08-1.tar.bz2
mkdir -p l4t-gcc
tar xf aarch64--glibc--stable-2022.08-1.tar.bz2 -C ./l4t-gcc
export ARCH=arm64
export CROSS_COMPILE=$(realpath .)/l4t-gcc/aarch64--glibc--stable-2022.08-1/bin/aarch64-buildroot-linux-gnu-
```

**ステップ 7. カーネル、DTB、およびモジュールをビルドします。**

```bash
cd source
./nvbuild.sh
./do_copy.sh
export INSTALL_MOD_PATH=$(realpath ../rootfs/)
./nvbuild.sh -i
cd ..
```

この時点で、`~/JP6.2/Linux_for_Tegra`（または選択したパス）の下にある JP6.2 BSP は、OTA 生成スクリプトの TARGET BSP として使用する準備が整いました。

### ベース BSP の準備（JetPack 5.1.3）

クリーンなワークスペース（例：`~/JP5.1.3/`）を使用します。

**ステップ 1. JetPack 5.1.3 パッケージをダウンロードします。**

```bash
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v5.0/release/Jetson_Linux_R35.5.0_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v5.0/release/Tegra_Linux_Sample-Root-Filesystem_r35.5.0_aarch64.tbz2
```

**ステップ 2. Seeed BSP オーバーレイを展開してコピーします。**

```bash
tar xf Jetson_Linux_R35.5.0_aarch64.tbz2 -C JP5.1.3
cd JP5.1.3
git clone -b r35.5.0 https://github.com/Seeed-Studio/Linux_for_Tegra.git
cp -rf Linux_for_Tegra/* ./Linux_for_Tegra/
```

**ステップ 3. ルートファイルシステムを設定し、バイナリを適用します。**

```bash
cd Linux_for_Tegra
sudo tar xpf ../Tegra_Linux_Sample-Root-Filesystem_r35.5.0_aarch64.tbz2 -C rootfs
sudo ./apply_binaries.sh
```

**ステップ 4. JP5 カーネルビルド用の Bootlin GCC ツールチェーンをインストールします。**

```bash
wget https://developer.nvidia.com/embedded/jetson-linux/bootlin-toolchain-gcc-93 -O bootlin-toolchain-gcc-93.tar.bz2
mkdir -p l4t-gcc
tar xf bootlin-toolchain-gcc-93.tar.bz2 -C ./l4t-gcc
export ARCH=arm64
export CROSS_COMPILE_AARCH64_PATH=$(realpath .)/l4t-gcc
```

**ステップ 5. モジュール、デバイスツリー、およびカスタムドライバーをビルドしてインストールします。**

```bash
cd source
export INSTALL_MOD_PATH=$(realpath ../rootfs/)
./nvbuild.sh -i -r ${INSTALL_MOD_PATH}
./do_copy.sh
```

JP5.1.3 BSP パス（例：`/home/seeed/test/5.1.3/Linux_for_Tegra`）は、OTA パッケージ生成時にベース BSP として機能します。

### ホストでの OTA パッケージ生成

JP6.2 ワークスペースに移動し、NVIDIA の OTA ヘルパースクリプトを実行します：

```bash
cd ~/JP6.2/Linux_for_Tegra/tools/ota_tools/
./start_generate_ota_pkg.sh
```

スクリプトは以下の情報の入力を求めます：

- **BASE_BSP パス**: `/home/seeed/test/5.1.3/Linux_for_Tegra`
- **TARGET_BSP パス**: `/home/seeed/test/6.2/Linux_for_Tegra`
- **target_board 名**: `recomputer-orin-j40mini`（デバイスに一致する `.conf` 名を使用）
- **bsp_version (Rmm-n)**: JetPack 5.1.3 の場合は `R35-5`

すべてが正しく設定されている場合、ツールは以下で終了します：

<div align="center"><img width ="1000" 
    src="https://files.seeedstudio.com/wiki/reComputer/OTA/ota_pkg_generate.png"/>
</div>

### Jetson デバイスでの OTA 実行
詳細な手順については、[デバイス上での OTA 手順](#デバイス上でのOTA手順)を参照してください。


## リソース

- [reComputer でのバックアップと復元の作成](https://wiki.seeedstudio.com/ja/create_backup_and_restore_on_recomputer/)
- [Seeed Jetson シリーズカタログ](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Seeed-Linux_for_Tegra](https://github.com/Seeed-Studio/Linux_for_Tegra/tree/r36.4.3)

## 技術サポートと製品ディスカッション

Seeed Studio をお選びいただきありがとうございます！さらなるサポートが必要な場合は、以下のチャンネルからお問い合わせください：

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
