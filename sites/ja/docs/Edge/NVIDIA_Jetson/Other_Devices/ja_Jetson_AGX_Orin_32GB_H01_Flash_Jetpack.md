---
description: NVIDIA® Jetson AGX Orin 32GB H01 Kit に JetPack をフラッシュする
title: NVIDIA® Jetson AGX Orin 32GB H01 Kit
tags:
  - NVIDIA Jetson H01
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Jetson_AGX_Orin_32GB_H01_Flash_Jetpack
sku: 114110207
last_update:
  date: 07/02/2026
  author: Lakshantha/Youjiang
createdAt: '2023-03-02'
updatedAt: '2026-07-03'
url: https://wiki.seeedstudio.com/ja/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack/
---

<!-- # Flash JetPack to NVIDIA® Jetson AGX Orin 32GB H01 Kit  -->

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/6.png"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/AGX-Orin-32GB-H01-Kit-p-5569.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong></a>
</div>

:::info
以下の更新が 2024 年 11 月 25 日に本製品へ適用されましたのでご注意ください：

1. 5V 電源供給方式が変更されました（電源 IC を ONNCP3020ADR2G から TI TPS53015DGS に置き換え、それに応じて周辺部品も調整しました）。これにより、高い動的電流を必要とする一部の USB デバイス使用時に発生していたデバイスの再起動問題が解消されました。
2. ファンケーブル用スロットを拡大してファン配線に対応できるよう、基板レイアウトを最適化しました。
3. アクセサリ供給の安定化のため、WiFi モジュールの型番を 8265.NGW から BL-M8822CP1 に変更し、それに合わせてソフトウェアドライバも更新しました。

:::

この wiki では、Jetson AGX Orin 32GB H01 Kit に JetPack をインストールする方法を説明します。

## 事前準備

- [Ubuntu ホスト PC](https://developer.nvidia.com/sdk-manager)（ネイティブ環境、または VMware Workstation Player を使用した VM）。
- Jetson AGX Orin H01 Kit。
- USB Type-C データ転送ケーブル

## 強制リカバリモードへ入る

- **ステップ 1:** ボード上にはリカバリボタンがあり、下図のように 3 つのボタンの中央にあります。リカバリボタンを押し続けたままボードを電源に接続すると、強制リカバリモードに入ります。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/4.jpg"/></div>

- **ステップ 2:** Jetson AGX Orin 32GB H01 Kit を USB Type-C データ転送ケーブルで Ubuntu ホスト PC に接続します。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/5.jpg"/></div>

- **ステップ 3:** Ubuntu ホストマシン上で `lsusb` コマンドを使用し、デバイスがリカバリモードに入っていることを確認します。
<div align="center"><img width ="900" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/h01/check_rec.png"/></div>

:::info
ログ内に `0955:7223 NVIDIA Corp.` が表示されていれば、デバイスがリカバリモードに入っていることを示します。
:::

## 周辺機器ドライバのダウンロード

まず最初に、このボード用の周辺機器ドライバをインストールする必要があります。これらは、ボード上の一部ハードウェア周辺機器を動作させるために必要です。JetPack のバージョンに応じて、以下のリンクをクリックしてドライバをダウンロードしてください。

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>JetPack バージョン</th>
      <th>L4T バージョン</th>
      <th>ドライバダウンロードリンク</th>
      <th>L4T ダウンロードリンク </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>5.0.2</td>
      <td>35.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/Jetson-AGX-Orin-32GB-H01-Kit/Driver-for-JP-5.0.2/AGX-Orin-32GB-H01-JP5.0.2.zip/download" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r351" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
      <td>5.1.1</td>
      <td>35.3.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/Jetson-AGX-Orin-32GB-H01-Kit/Driver-for-JP-5.1.1/AGX-Orin-32GB-H01-JP5.1.1.zip/download" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3531" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
      <td>5.1.4</td>
      <td>35.6.0</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EaRL0XDaYCdFhkBiwvO3b8UBk4HmzRBQgfhYCKlN_ANVpA?e=5ndnMu" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3560" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
      <td>6.0</td>
      <td>36.3</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EfdaZCD6wMZPrW_LtMm3eQgBXnPq_8ri8WmKw3nsxXVf1Q?e=uvKRhE" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r363" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
      <td>6.1</td>
      <td>36.4</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EbYu41kk-LNNmsssNIuM5AoBLYjTFZo_mEUTUtIJlCCnyw?e=dvCgKk" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3640" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
    <td>6.2</td>
      <td>36.4.3</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ES6058EFNl1LkrJGAvTYR6IBFTldWYyxJ4ZxQP3EM00BbQ?e=rjshwu" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3643" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
      <td>7.2</td>
      <td>39.2.0</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAOW5tcK2vPTagiGOFw9oMcAYITLgRqj_dXQJMchlUeGOk?e=8ar0lu" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetpack/downloads/archive-7.2#:~:text=Jetson%20Linux%2039.2%20%286%2F02%2F2026%29" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
  </tbody>
</table>
</div>

## Jetson へのフラッシュ

:::danger
NVIDIA® Jetson AGX Orin 32GB H01 Kit には、あらかじめ `JetPack 5.1.4` オペレーティングシステムがプリインストールされています。デフォルトのユーザー名とパスワードは user: nvidia / password: nvidia です。デバイスを受け取ったら、システムを再フラッシュすることなく、そのままログインして使用を開始できます。

システムが破損した場合は、以下の手順を参照してシステムを再フラッシュしてください。
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="JP5.0.2/JP5.1.1" label="JP5.0.2/JP5.1.1">

ここでは、Jetson AGX Orin 32GB H01 Kit に **Jetpack 5.0.2** をインストールするために **NVIDIA L4T 35.1** を、または **Jetpack 5.1.1** をインストールするために **NVIDIA L4T 35.3.1** を使用します。

- **ステップ 1:** ホスト PC に適切な NVIDIA ドライバをダウンロードします。必要なドライバは以下のとおりです。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"/></div>

- **ステップ 2:** 先ほどダウンロードした周辺機器ドライバを NVIDIA ドライバと同じフォルダに移動します。これで同じフォルダ内に 3 つの圧縮ファイルが表示されます。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/7.png"/></div>

- **ステップ 3:** これらのファイルが含まれるフォルダに移動し、**Jetson_Linux_R35.1.0_aarch64.tbz2** と **Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2** を展開して変更を適用します

```sh
cd <directory_where_the_files_are_located>
tar xf Jetson_Linux_R35.1.0_aarch64.tbz2
cd Linux_for_tegra/rootfs
sudo tar xfp ../../Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2
cd ..
sudo ./apply_binaries.sh
```

- **ステップ 4:** **AGX-Orin-32GB-H01-JP5.0.2.zip** を展開します。ここでは、.zip ファイルを解凍するために必要な **unzip** パッケージを追加でインストールします。

```sh
cd ..
sudo apt install unzip 
unzip AGX-Orin-32GB-H01-JP5.0.2.zip
```

ここでファイルを置き換えるかどうかを尋ねられます。必要なファイルを置き換えるために **A** と入力し、**ENTER** を押します。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/3.jpg"/></div>

- **ステップ 5:** システムを eMMC にフラッシュします

```sh
cd Linux_for_Tegra
sudo ./flash.sh jetson‐agx‐orin‐devkit mmcblk0p1
```

フラッシュ処理が正常に完了すると、次のような出力が表示されます。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/9.jpg"/></div>

### 発生したエラー

- *Jetpack 5.1.1* 用の **AGX Orin** および **NX Orin** で **ERROR: failed to read rcm_state** が発生する
  - Jetson AGX Orin には NVidia による PCN 変更がありますが、これは Seeed による PCN 変更ではありません。
  - Wiki に記載されているマテリアルに加えて、Jetson Linux 35.3.1 のページ下部から [Overlay_PCN210361_PCN210100_r35.3.1.tbz2](https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v3.1/overlay_pcn210361_pcn210100_r35.3.1.tbz2) をダウンロードしてください。
  - *Jetson_Linux* を展開し、バイナリを適用する前に、*Overlay_PCN210361_PCN210100_r35.3.1.tbz2* を展開してください。その後、すべてのファイルとフォルダを *Linux_For_Tegra* にコピーします（スキップではなくマージ）。
  - その後、ガイダンス内の残りの手順を続行します。

</TabItem>

<TabItem value="JP5.1.4" label="JP5.1.4">

ここでは、Jetson AGX Orin 32GB H01 Kit に **Jetpack 5.1.4** をインストールするために **NVIDIA L4T 35.6.0** を使用します。

Ubuntu ホストマシンのターミナルウィンドウに次のコマンドを入力します。

```bash
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v6.0/release/jetson_linux_r35.6.0_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v6.0/release/tegra_linux_sample-root-filesystem_r35.6.0_aarch64.tbz2

tar xf jetson_linux_r35.6.0_aarch64.tbz2
sudo tar xpf tegra_linux_sample-root-filesystem_r35.6.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./tools/l4t_flash_prerequisites.sh
sudo ./apply_binaries.sh
sudo tar xf 605_jp514.tbz2  # Please copy 605_jp514.tbz2 to the Linux_for_Tegra/ directory before execution.

```

以下のいずれかのコマンドを選択して、フラッシュ操作を実行します：

(1). システムを eMMC にフラッシュする：

```bash
sudo ./flash.sh jetson-agx-orin-devkit internal
```

(2). システムを SSD にフラッシュする：

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_t234_nvme.xml \
  --showlogs --network usb0 jetson-agx-orin-devkit external
```

<div align="center"><img width ="900" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/h01/flash_successful.png"/></div>

フラッシュが完了すると、デバイスは自動的に再起動します。

</TabItem>


<TabItem value="JP6.0" label="JP6.0">

ここでは **NVIDIA L4T 36.3** を使用して、Jetson AGX Orin 32GB H01 Kit に **Jetpack 6.0** をインストールします。

- **Step 1:** ホスト PC 上で [Download](https://developer.nvidia.com/embedded/jetson-linux-r363) から NVIDIA ドライバをダウンロードします。必要なドライバは以下のとおりです：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"/>
</div>

- **Step 2:** 先ほどダウンロードした周辺機器ドライバを NVIDIA ドライバと同じフォルダに移動します。これで同じフォルダ内に 3 つの圧縮ファイルが表示されます。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/files.png"/>
</div>

- **Step 3:** これらのファイルが含まれるフォルダに移動し、**Jetson_Linux_R36.3.0_aarch64.tbz2** と **Tegra_Linux_Sample-Root-Filesystem_R36.3.0_aarch64.tbz2** を展開して、変更を適用します：

```bash
cd < directory_where_the_files_are_located >
tar xf Jetson_Linux_R36.3.0_aarch64.tbz2
sudo tar xfp Tegra_Linux_Sample-Root-Filesystem_R36.3.0_aarch64.tbz2 -C Linux_for_tegra/rootfs
cd Linux_for_tegra
sudo ./tools/l4t_flash_prerequisites.sh
sudo ./apply_binaries.sh
```

- **Step 4:** **AGX-Orin-H01-JP6.0.zip** を展開します。ここでは、.zip ファイルを解凍するために必要な **unzip** パッケージを追加でインストールします。

```sh
cd ..
sudo apt install unzip 
sudo unzip AGX-Orin-H01-JP6.0.zip
```

ここでファイルを置き換えるかどうかを尋ねられます。必要なファイルを置き換えるために **A** と入力して **ENTER** を押します。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/extract_drivers.png"/>
</div>

- **Step 5:** システムを eMMC にフラッシュします

```sh
cd Linux_for_Tegra
sudo ./flash.sh jetson-agx-orin-devkit internal
```

フラッシュ処理が正常に完了すると、次のような出力が表示されます：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/flash_successful.png"/>
</div>

</TabItem>

<TabItem value="JP6.1" label="JP6.1">

ここでは **NVIDIA L4T 36.4** を使用して、Jetson AGX Orin 32GB H01 Kit に **Jetpack 6.1** をインストールします。

- **Step 1:** Ubuntu ホスト PC 上で [Download](https://developer.nvidia.com/embedded/jetson-linux-r3640) から NVIDIA ドライバをダウンロードします。必要なドライバは以下のとおりです：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"/>
</div>

- **Step 2:** 先ほどダウンロードした周辺機器ドライバを NVIDIA ドライバと同じフォルダに移動します。これで同じフォルダ内に 3 つの圧縮ファイルが表示されます。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/a605_jp6.1.png"/>
</div>

:::note
次のコマンドを使用して、ダウンロードしたファイルが完全であるかどうかを確認できます。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/verify_download_file.webp"/>
</div>
:::

- **Step 3:** これらのファイルが含まれるフォルダに移動し、**Jetson_Linux_R36.4.0_aarch64.tbz2** と **Tegra_Linux_Sample-Root-Filesystem_R36.4.0_aarch64.tbz2** を展開して、変更を適用します：

```bash
cd <path_to_files>
tar xf Jetson_Linux_R36.4.0_aarch64.tbz2
sudo tar xfp Tegra_Linux_Sample-Root-Filesystem_R36.4.0_aarch64.tbz2 -C Linux_for_tegra/rootfs
cd Linux_for_tegra
sudo ./tools/l4t_flash_prerequisites.sh
sudo ./apply_binaries.sh
```

- **Step 4:** **A605_Jetpack_6.1.tar.gz** を展開します：

```bash
cd ..
tar xf A605_Jetpack_6.1.tar.gz
sudo cp -r 605_jetpack6.1/Linux_for_Tegra/* Linux_for_Tegra/
```

- **Step 5:** システムを eMMC にフラッシュします：

```bash
cd Linux_for_Tegra
sudo ./flash.sh jetson-agx-orin-devkit internal
```

フラッシュ処理が正常に完了すると、次のような出力が表示されます：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/flash_successful.png"/>
</div>

:::info
次のコマンドを実行して、システムを SSD にインストールすることもできます：

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml --showlogs --network usb0 jetson-agx-orin-devkit external
```

:::

</TabItem>

<TabItem value="JP6.2" label="JP6.2">

ここでは **NVIDIA L4T 36.4** を使用して、Jetson AGX Orin 32GB H01 Kit に **Jetpack 6.2** をインストールします。

- **Step 1:** Ubuntu ホスト PC 上で [Download](https://developer.nvidia.com/embedded/jetson-linux-r3643) から NVIDIA ドライバをダウンロードします。必要なドライバは以下のとおりです：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"/>
</div>

- **Step 2:** 先ほどダウンロードした周辺機器ドライバを NVIDIA ドライバと同じフォルダに移動します。これで同じフォルダ内に 3 つの圧縮ファイルが表示されます。

:::info
Jetpack 6.1 のフラッシュ手順と同様です！
:::

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/a605_jp6.1.png"/>
</div>

:::note
次のコマンドを使用して、ダウンロードしたファイルが完全であるかどうかを確認できます。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/verify_download_file.webp"/>
</div>
:::

- **Step 3:** これらのファイルが含まれるフォルダに移動し、**Jetson_Linux_R36.4.3_aarch64.tbz2** と **Tegra_Linux_Sample-Root-Filesystem_R36.4.3_aarch64.tbz2** を展開して、変更を適用します：

```bash
cd <path_to_files>
tar xf Jetson_Linux_R36.4.3_aarch64.tbz2
sudo tar xfp Tegra_Linux_Sample-Root-Filesystem_R36.4.0_aarch64.tbz2 -C Linux_for_tegra/rootfs
cd Linux_for_tegra
sudo ./tools/l4t_flash_prerequisites.sh
sudo ./apply_binaries.sh
```

- **Step 4:** **605_jp62.tar.gz** を展開します：

```bash
cd ..
tar xf 605_jp62.tar.gz
sudo cp -r 605_jp62/Linux_for_Tegra/* Linux_for_Tegra/
```

- **Step 5:** システムを eMMC にフラッシュします：

```bash
cd Linux_for_Tegra
sudo ./flash.sh jetson-agx-orin-devkit internal
```

フラッシュ処理が正常に完了すると、次のような出力が表示されます：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/flash_successful.png"/>
</div>

:::info
次のコマンドを実行して、システムを SSD にインストールすることもできます：

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml --showlogs --network usb0 jetson-agx-orin-devkit external
```

:::

</TabItem>

<TabItem value="JP7.2" label="JP7.2">

ここでは **NVIDIA L4T 39.2.0** を使用して、Jetson AGX Orin 32GB H01 Kit に **JetPack 7.2** をインストールします。

- **Step 1:** Ubuntu ホスト PC 上で [Download](https://developer.nvidia.com/embedded/jetpack/downloads/archive-7.2#:~:text=Jetson%20Linux%2039.2%20%286%2F02%2F2026%29) から NVIDIA BSP と RootFS パッケージをダウンロードします。必要な Jetson Linux 39.2.0 のファイルは以下のとおりです：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/other/7.2-H01.png"/>
</div>

次のコマンドを使用してファイルをダウンロードすることもできます：

```bash
wget https://developer.nvidia.com/downloads/embedded/L4T/r39_Release_v2.0/release/Jetson_Linux_R39.2.0_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/L4T/r39_Release_v2.0/release/Tegra_Linux_Sample-Root-Filesystem_R39.2.0_aarch64.tbz2
```

- **Step 2:** Jetson AGX Orin 32GB H01 Kit 用 JetPack 7.2 周辺機器ドライバパッケージ [605_jp72.tbz2](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAOW5tcK2vPTagiGOFw9oMcAYITLgRqj_dXQJMchlUeGOk?e=8ar0lu) をダウンロードし、NVIDIA BSP と RootFS パッケージと同じフォルダに配置します。これで同じフォルダ内に 3 つの圧縮ファイルが表示されます。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/other/Seeed_AGX_Orin_Dev_Kit_JP72_downloaded_files.png"/>
</div>

- **Step 3:** **Jetson_Linux_R39.2.0_aarch64.tbz2** と **Tegra_Linux_Sample-Root-Filesystem_R39.2.0_aarch64.tbz2** を展開し、その後 NVIDIA バイナリを適用します：

```bash
cd <path_to_files>
tar xf Jetson_Linux_R39.2.0_aarch64.tbz2
sudo tar xfp Tegra_Linux_Sample-Root-Filesystem_R39.2.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra
sudo ./tools/l4t_flash_prerequisites.sh
sudo ./apply_binaries.sh
```

- **Step 4:** **605_jp72.tbz2** を展開します：

```bash
cd ..
tar xf 605_jp72.tbz2
sudo cp -r 605_jp72/Linux_for_Tegra/* Linux_for_Tegra/
```

- **Step 5:** システムを eMMC にフラッシュします：

```bash
cd Linux_for_Tegra
sudo ./flash.sh jetson-agx-orin-devkit internal
```

フラッシュ処理が正常に完了すると、次のような出力が表示されます：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/flash_successful.png"/>
</div>

:::info
次のコマンドを実行して、システムを SSD にインストールすることもできます：

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml --showlogs --network usb0 jetson-agx-orin-devkit external
```

:::

</TabItem>

</Tabs>

## 開発者向けツール

### 高速な開発とエッジ AI 統合のための Jetpack 事前インストール

[Jetson Software](https://developer.nvidia.com/embedded/develop/software) は NVIDIA JetPack™ SDK から始まり、これは完全な開発環境を提供し、開発をすぐに開始できるように CUDA-X アクセラレーテッドライブラリやその他の NVIDIA テクノロジーを含んでいます。JetPack には Jetson Linux Driver パッケージが含まれており、Linux カーネル、ブートローダー、NVIDIA ドライバ、フラッシュユーティリティ、サンプルファイルシステム、および Jetson プラットフォーム向けツールチェーンを提供します。また、セキュリティ機能、OTA（Over-the-Air）アップデート機能など、さらに多くの機能も含まれています。

### コンピュータビジョンと組み込み機械学習

- [Deepstream](https://developer.nvidia.com/deepstream-sdk) は、Jetson 上で AI ベースのマルチセンサー処理およびビデオ／画像認識のための、完全なストリーミング分析ツールキットを提供します。
- [TAO](https://developer.nvidia.com/tao-toolkit) は TensorFlow と PyTorch 上に構築された、NVIDIA TAO フレームワークのローコード版であり、モデル学習を高速化します
- [alwaysAI](https://alwaysai.co/blog/getting-started-with-the-jetson-nano-using-alwaysai)：reComputer のエッジ上で、コンピュータビジョンアプリケーションを構築・学習・デプロイできます。100 以上の事前学習済みコンピュータビジョンモデルに無料でアクセスでき、エンタープライズサブスクリプションを通じて、数回のクリックでクラウド上でカスタム AI モデルを学習できます。alwaysAI を始めるには、[wiki](https://wiki.seeedstudio.com/ja/alwaysAI-Jetson-Getting-Started/#object-detection-on-pre-loaded-video-file) ガイドをご覧ください。
- [edge impulse](https://www.edgeimpulse.com/)：クラウドへの依存ゼロで、エッジにおけるオーディオ、分類、物体検出アプリケーションをデプロイするための、最も簡単な組み込み機械学習パイプラインです。
- [Roboflow](https://blog.roboflow.com/deploy-to-nvidia-jetson/) は、生の画像を物体検出および分類用のカスタム学習済みコンピュータビジョンモデルに変換し、そのモデルをアプリケーションで使用できるようにデプロイするためのツールを提供します。Roboflow を用いて NVIDIA Jetson にデプロイする方法については、https://docs.roboflow.com/inference/nvidia-jetson を参照してください。
- [ultralytics yolo](https://github.com/ultralytics/yolov5)：転移学習を利用して、少数ショットの物体検出を YOLOv5 で実現します。ごく少数の学習サンプルだけで済みます。ステップバイステップの [wiki](https://wiki.seeedstudio.com/ja/YOLOv5-Object-Detection-Jetson/) チュートリアルをご覧ください。
- [Deep Learning](https://deci.ai/blog/jetson-machine-learning-inference/)：NVIDIA Jetson Nano 上のモデルを最適化します。NVIDIA Jetson Nano および Xavier NX デバイス上でランタイム性能を自動ベンチマークおよび最適化する Deci の機能については、[こちら](https://info.deci.ai/benchmark-optimize-runtime-performance-nvidia-jetson) をご覧ください。

### 音声 AI

- [Riva](https://developer.nvidia.com/riva) は、ユースケースに合わせてカスタマイズされ、リアルタイム性能を発揮する音声 AI アプリケーションを構築するための、GPU アクセラレートされた SDK です。

### リモートフリート管理

[allxon](https://www.allxon.com/) により、安全な OTA とリモートデバイス管理を有効にします。コード H4U-NMW-CPK を使用して、90 日間の無料トライアルを利用できます。

### ロボットおよび ROS 開発

- NVIDIA Isaac ROS GEMs は、ROS 開発者が NVIDIA ハードウェア上で高性能なソリューションをより簡単に構築できるようにする、ハードウェアアクセラレートされたパッケージです。[NVIDIA Isaac](https://developer.nvidia.com/embedded/develop/software) について詳しく学びましょう。
- [Cogniteam Nimbus](https://www.cogniteam.com/nimbus) は、開発者が自律ロボットをより効果的に管理できるようにするクラウドベースのソリューションです。Nimbus プラットフォームは、NVIDIA® Jetson™ と ISAAC SDK および GEMs を標準でサポートしています。Nimbus を使って ROS プロジェクトをクラウドに接続する方法については、[webinar](https://www.seeedstudio.com/blog/2022/04/21/webinar-connect-your-ros-project-to-the-cloud-with-nimbus/) をご覧ください。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
