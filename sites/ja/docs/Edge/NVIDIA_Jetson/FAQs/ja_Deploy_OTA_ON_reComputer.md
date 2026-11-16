---
description: "ネットワーク経由で Orin reComputer に OTA アップデートをプッシュします。ホスト上でパッケージをビルドし、USB を使わずに JetPack 5.1.3 から 6.2 へ移行します。"
title: reComputer に OTA をデプロイする
keywords:
  - jetson
  - OTA
  - JetPack
  - reComputer
  - BSP
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.webp
slug: /deploy_ota_on_recomputer
last_update:
  date: 12/05/2025
  author: Zibo
createdAt: '2025-12-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/ja/deploy_ota_on_recomputer/
---

# reComputer に OTA をデプロイする

## はじめに

NVIDIA Jetson の Over-the-Air (OTA) アップデートを使用すると、開発者はエッジデバイスを古い JetPack バージョンから新しいリリースへ、ネットワーク接続を介してリモートでアップグレードでき、ホスト PC や物理的な USB リフラッシュが不要になります。
以下のフローでは、Ubuntu ホスト上で OTA パッケージをビルドし、それをデバイスに渡し、オンデバイスのアップデータに rootfs を入れ替えさせることで、reComputer mini J4012 を JetPack 5.1.3 から JetPack 6.2 へネットワーク経由で移行します。USB ケーブルもリカバリーモードも不要です。

:::note
デモ環境：JetPack 5.1.3 → JetPack 6.2 の OTA を行う reComputer mini J4012。他の Orin ベースの reComputer も同じロジックに従えますが、使用しているキャリアボードに一致する `<target_board>` 名に合わせて調整してください。
:::

## 前提条件
- Ubuntu x86_64 PC
- [reComputer mini J4012](https://www.seeedstudio.com/reComputer-Mini-J4012-with-Extension-p-6353.html)

## すばやく OTA を実行する

ここでは Seeed 開発ボード向けに事前コンパイル済みのアップグレードパッケージを提供します。
これは Jetpack 5.1.3 から Jetpack 6.2 へのアップグレードを行うものです。もし Jetpack 5.1.3 から Jetpack 6.2 へ OTA で直接アップグレードする予定であれば、
単にダウンロードして、そのまま素早くアップグレードを進めることができます。


import OtaProductSelect from '@site/src/components/jetson/OtaProductSelect';

export const productOptions = [
  {
    value: 'j4012mini',
    label: 'reComputer mini',
    img: 'https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg',
    otaDescription: 'reComputer mini シリーズ向けの、すぐに使える JP5.1.3 → JP6.2 OTA ペイロード',
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
    otaDescription: 'reComputer classic J30/40/401B 向けの、すぐに使える JP5.1.3 → JP6.2 OTA ペイロード',
    otaPayload: {
      mainlink: 'https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDRxYlSWuWvRbELB8tyGQ88AUa3cDYrNoj0kAyyzU3YTFA?e=P60b7N',
      filename: 'ota_payload_package.tar.gz',
      sha256: 'b0dde3e8fb5ac3838d8d569def1a373949ca30f59f52e30197f872c95aa7a777',
    },
  },
  {
    value: 'j4012industrial',
    label: 'reComputer industrial Serials',
    img: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1--recomputer-industrial-bundle.jpg',
    otaDescription: 'reComputer Industrial シリーズ向けの、すぐに使える JP5.1.3 → JP6.2 OTA ペイロード',
    otaPayload: {
      mainlink: 'https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQC1cwAhknjjRLGyVc_Ze7QOAUAQ7KSi3IkzUSZ3XD45gL4?e=Q68dEF',
      filename: 'ota_payload_package.tar.gz',
      sha256: '31f17fe8606b19730c3d5a29b8cf96db99dff587de93136dbd74f39c71aeb4e9',
    },
  },
  {
    value: 'j4012reserver',
    label: 'reServer industrial Serials',
    img: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114110247-reserver-industrial-j4012-first.jpg',
    otaDescription: 'reServer industrial シリーズ向けの、すぐに使える JP5.1.3 → JP6.2 OTA ペイロード。',
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
    otaDescription: 'reServer industrial J501（GMSL 搭載）向けの、すぐに使える JP5.1.3 → JP6.2 OTA ペイロード。',
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
    otaDescription: 'reServer industrial J501（GMSL 非搭載）向けの、すぐに使える JP5.1.3 → JP6.2 OTA ペイロード。',
    otaPayload: {
      mainlink: 'https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQC6wipGORa_SqinT6KB6eEXAZfD80o1uAo2jpZMVo7M5aU?e=eqbjZY',
      filename: 'ota_payload_package.tar.gz',
      sha256: '9d015fdcbabb77a9669fb8f0f6762c9a69260cd47ec4710d79de7cbdc19e9f23',
    },
  },
]

<OtaProductSelect options={productOptions} />



### デバイス上での OTA 手順

:::note
以下の操作は Jetson 上（リモート接続経由）で実行します
:::

**ステップ 1.** 依存ソフトウェアをインストールする
```bash
sudo apt-get update
sudo apt-get install efibootmgr nvme-cli -y
```

**ステップ 2.** OTA ツールをダウンロードする
```bash
#Create a workspace directory
mkdir ~/ota_ws && cd ota_ws
#Download the OTA tools from Nvidia
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.3/release/ota_tools_r36.4.3_aarch64.tbz2
# Uncompress
tar xvf ota_tools_r36.4.3_aarch64.tbz2
```
上記のファイルを解凍すると、"Linux_for_Tegra" という名前のフォルダが得られます。

**ステップ 3.** ota ファイルを Jetson に転送する（このステップは PC 上で実行します！）

:::info
`<Jetson IP>` を Jetson の実際の IP アドレスに置き換えてください。例：192..168.137.xx
`ota_payload_package.tar.gz` ファイルのパスと `ota_ws` のパスを、実際のパスに置き換えてください
:::

```bash
#example:Use scp to transfer files
scp /path/to/your downloaded/ota_payload_package.tar.gz seeed@<Jetson IP>:/home/user/ota_ws
```
**ステップ 4.** 元のシステムのファイルをバックアップする
```bash
cd /path/ota_ws/Linux_for_Tegra/tools/ota_tools/version_upgrade/
#The editor needs to keep a backup of the file directory that needs to be preserved.
vim ota_backup_files_list.txt
```
:::note
保持したいファイルやフォルダを列挙します。
絶対パスを使用してください！
<div align="center"><img alt="OTA 中に保持される絶対パスの例 /home/seed/file_backup を示す nv_ota_preserve_data.sh のヘッダー" width ="1000" 
    src="https://files.seeedstudio.com/wiki/reComputer/OTA/backup_list.png"/>
</div>
:::

```bash
./nv_ota_preserve_data.sh
```
**ステップ 5.** OTA を開始する

```bash
cd Linux_for_Tegra/tools/ota_tools/version_upgrade
#Specify the directory of the OTA file
sudo ./nv_ota_start.sh ~/ota_ws/ota_payload_package.tar.gz
```
<div align="center"><img alt="ota_update_slot が、リカバリカーネル内で更新された MTS パーティションとステージングされたブートファイルを報告している様子" width ="1000" 
    src="https://files.seeedstudio.com/wiki/reComputer/OTA/ota_sh.png"/>
</div>

<div align="center"><img alt="nv_ota_start.sh が完了し、適用されたペイロードを報告している様子" width ="1000" 
    src="https://files.seeedstudio.com/wiki/reComputer/OTA/ota_sh_finish.png"/>
</div>

スクリプトの実行が完了したら、Jetson を再起動して OTA プロセスを開始できます。
デバイスがモニターに接続されている場合、再起動時にモニターに Nvidia ロゴが表示され、その後カーネルオーバーレイに入ります。画面はしばらくの間黒いまま（正常な現象）になり、その後 OTA プロセスに入ります。
<div align="center"><img alt="OTA 中のブート画面。NVIDIA ロゴと、上に重ねて表示されたパッケージアップグレードの進行状況" width ="1000" 
    src="https://files.seeedstudio.com/wiki/reComputer/OTA/ota_process.jpg"/>
</div>

一連のプロセスが完了したら、システムに入り、ユーザー名とパスワードを設定する必要があります。

<div align="center"><img alt="OTA 後の初回起動時の System Configuration ページ。Tegra Linux ライセンスに同意する画面" width ="1000" 
    src="https://files.seeedstudio.com/wiki/reComputer/OTA/update_finish.jpg"/>
</div>
**ステップ 6.** アップグレード後の検証

デバイスが JetPack 6.2 で起動したら：

```bash
nvbootctrl -t
sudo nvme list
cat /etc/nv_tegra_release
```
<div align="center"><img alt="nvbootctrl、nvme list、/etc/nv_tegra_release により、OTA 後に JetPack 6.2 であることを確認している様子" width ="1000" 
    src="https://files.seeedstudio.com/wiki/reComputer/OTA/ota_sucess.png"/>
</div>
報告されるリリースが `R36 (release), REVISION: 4.3` と一致していることを確認し、アプリケーションが期待どおりに起動することを確認してください。
おめでとうございます！OTA プロセスは成功しました。システムファイルも事前に保存されています！
## その他バージョンの OTA（オプション）
上では、一般的なバージョンの OTA パッケージのみを提供しました。現在の OTA バージョンから別のバージョンへアップグレードする必要がある場合は、以下の手順を参照して、対応する OTA パッケージを生成してください。
ここでデモするのは、Jetpack 5.1.3 からターゲットバージョンである Jetpack 6.2 へのアップグレードです。

### ターゲット BSP（JetPack 6.2）の準備
以下のコマンドはすべて Ubuntu PC 上で実行します。

**ステップ 1. NVIDIA JetPack 6.2 パッケージをダウンロードする。**

```bash
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.3/release/Jetson_Linux_r36.4.3_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.3/release/Tegra_Linux_Sample-Root-Filesystem_r36.4.3_aarch64.tbz2
```

**ステップ 2. BSP を `Linux_for_Tegra` に展開する。**

```bash
tar xf Jetson_Linux_r36.4.3_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_r36.4.3_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
```

**ステップ 3. JP6.2 用の NVIDIA ソースを同期します。**

```bash
cd Linux_for_Tegra/source/
./source_sync.sh -t jetson_36.4.3
cd ../..
```

**ステップ 4. Seeed のカスタマイズをオーバーレイします。**

```bash
mkdir -p github/Linux_for_Tegra
git clone https://github.com/Seeed-Studio/Linux_for_Tegra.git -b r36.4.3 --depth=1 github/Linux_for_Tegra
cp -r github/Linux_for_Tegra/* Linux_for_Tegra/
```

**ステップ 5. NVIDIA バイナリとホスト依存関係を適用します。**

```bash
cd Linux_for_Tegra
sudo ./apply_binaries.sh
sudo apt-get update
sudo apt-get install -y build-essential flex bison libssl-dev sshpass \
  abootimg nfs-kernel-server libxml2-utils qemu-user-static
```

**ステップ 6. カーネルコンパイル用に Jetson ツールチェーンをインストールします。**

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

この時点で、`~/JP6.2/Linux_for_Tegra`（または任意のパス）以下の JP6.2 BSP は、OTA 生成スクリプト用の TARGET BSP として使用する準備が整っています。

### ベース BSP の準備（JetPack 5.1.3）

クリーンな作業ディレクトリを使用します（例：`~/JP5.1.3/`）。

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

**ステップ 3. ルートファイルシステムを展開し、バイナリを適用します。**

```bash
cd Linux_for_Tegra
sudo tar xpf ../Tegra_Linux_Sample-Root-Filesystem_r35.5.0_aarch64.tbz2 -C rootfs
sudo ./apply_binaries.sh
```

**ステップ 4. JP5 カーネルビルド用に Bootlin GCC ツールチェーンをインストールします。**

```bash
wget https://developer.nvidia.com/embedded/jetson-linux/bootlin-toolchain-gcc-93 -O bootlin-toolchain-gcc-93.tar.bz2
mkdir -p l4t-gcc
tar xf bootlin-toolchain-gcc-93.tar.bz2 -C ./l4t-gcc
export ARCH=arm64
export CROSS_COMPILE_AARCH64_PATH=$(realpath .)/l4t-gcc
```

**ステップ 5. モジュール、デバイスツリー、およびカスタムドライバをビルドしてインストールします。**

```bash
cd source
export INSTALL_MOD_PATH=$(realpath ../rootfs/)
./nvbuild.sh -i -r ${INSTALL_MOD_PATH}
./do_copy.sh
```

JP5.1.3 BSP のパス（例：`/home/seeed/test/5.1.3/Linux_for_Tegra`）は、OTA パッケージ生成時の BASE BSP として機能します。

### ホスト上で OTA パッケージを生成する

JP6.2 の作業ディレクトリに移動し、NVIDIA の OTA ヘルパースクリプトを実行します：

```bash
cd ~/JP6.2/Linux_for_Tegra/tools/ota_tools/
./start_generate_ota_pkg.sh
```

スクリプトは次の情報を尋ねてきます：

- **BASE_BSP path**: `/home/seeed/test/5.1.3/Linux_for_Tegra`
- **TARGET_BSP path**: `/home/seeed/test/6.2/Linux_for_Tegra`
- **target_board name**: `recomputer-orin-j40mini`（お使いのデバイスに対応する `.conf` 名を使用）
- **bsp_version (Rmm-n)**: JetPack 5.1.3 の場合は `R35-5`

すべて正しく設定されていれば、ツールは次のように終了します：

<div align="center"><img alt="OTASet tool finishing with SUCCESS and the generated ota_payload_package.tar.gz path" width ="1000" 
    src="https://files.seeedstudio.com/wiki/reComputer/OTA/ota_pkg_generate.png"/>
</div>

### Jetson デバイス上で OTA を実行する
詳細な手順については、[デバイス上での OTA 手順](#デバイス上での-OTA-手順)に戻って参照してください。


## リソース

- [reComputer でバックアップとリストアを作成する](https://wiki.seeedstudio.com/ja/create_backup_and_restore_on_recomputer/)
- [Seeed Jetson シリーズ カタログ](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Seeed-Linux_for_Tegra](https://github.com/Seeed-Studio/Linux_for_Tegra/tree/r36.4.3)

## 関連リソース

- [reComputer でバックアップとリストアを作成する](/ja/create_backup_and_restore_on_recomputer/)
- [reComputer J4012 に JetPack をフラッシュする](/ja/reComputer_J4012_Flash_Jetpack/)
- [reComputer J4012 製品ページ](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)

## 技術サポート & 製品ディスカッション

Seeed Studio をお選びいただきありがとうございます。さらなるサポートが必要な場合は、以下のチャネルからお問い合わせください：

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
