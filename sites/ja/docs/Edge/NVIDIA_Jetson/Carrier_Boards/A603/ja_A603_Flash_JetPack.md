---
description: A603 キャリアボード
title: A603 キャリアボード
keywords:
  - エッジ
  - Jetson Orin
  - reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reComputer_A603_Flash_System
sku: 102110840
last_update:
  date: 04/19/2023
  author: Lakshantha
createdAt: '2023-04-17'
updatedAt: '2026-06-30'
url: https://wiki.seeedstudio.com/ja/reComputer_A603_Flash_System/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# JetPack OS を A603 キャリアボードにフラッシュする

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/A603_Carrier_Board.png" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/A603-Carrier-Board-for-Jetson-Orin-NX-Nano-p-5635.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong></a>
</div>

A603 Carrier Board は、Jetson Orin™ NX/Nano モジュールをサポートする高性能な拡張ボードです。1 GbE ポート、SSD 用の M.2 Key M、WiFi/BlueTooth 用の M.2 Key E、CSI、そして高品質なビデオキャプチャと表示のための HDMI を備えています。また、4 つの USB ポート、ファン、RTC、柔軟な 9〜20V 電源も搭載しています。コンパクトな設計により、さまざまなエッジコンピューティングアプリケーションへ柔軟かつ容易に統合できます。本 Wiki では、A603 Carrier Board に接続された NVMe SSD と USB フラッシュドライブに [Jetpack](https://developer.nvidia.com/embedded/jetpack) をフラッシュする方法を紹介します。

## 対応モジュール

- [NVIDIA® Jetson Orin™ Nano Module 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5553.html)
- [NVIDIA® Jetson Orin™ Nano Module 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5551.html?___store=retailer)
- [NVIDIA® Jetson Orin™ NX Module 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5522.html)
- [NVIDIA® Jetson Orin™ NX Module 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5523.html)

## 事前準備

- Ubuntu 20.04/22.04/24.04 ホスト PC
- Jetson Orin NX または Jetson Orin Nano モジュールを搭載した A603 Carrier Board
- Micro-USB または Type-C データ転送ケーブル
- 電源アダプタ

## 強制リカバリモードに入る

:::note
インストール手順に進む前に、ボードが強制リカバリモードになっていることを確認する必要があります。
:::

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/recovery.gif" /></div>

<details>

<summary> ステップバイステップの詳細チュートリアル </summary>

**Step 1.** ボード上の micro-USB コネクタと Linux ホスト PC の間を USB ケーブルで接続します

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/A603/2.jpg" /></div>

**Step 2.** ジャンパワイヤを 14 ピンヘッダの pin3 と pin4 の間に接続します

<div align="center"><img width={250} src="https://files.seeedstudio.com/wiki/A603/3.jpg" /></div>

**Step 3.** 電源アダプタをボード上の DC ジャックに接続して、ボードの電源を入れます

<div align="center"><img width={250} src="https://files.seeedstudio.com/wiki/A603/4.jpg" /></div>

**Step 4.** Linux ホスト PC でターミナルウィンドウを開き、コマンド `lsusb` を入力します。使用している Jetson SoM に応じて、返された内容に次のいずれかの出力が含まれていれば、ボードは強制リカバリモードになっています。

- Orin NX 16GB の場合: **0955:7323 NVidia Corp**
- Orin NX 8GB の場合: **0955:7423 NVidia Corp**
- Orin Nano 8GB の場合: **0955:7523 NVidia Corp**
- Orin Nano 4GB の場合: **0955:7623 NVidia Corp**

以下の画像は Orin NX 16GB の例です。

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/A607/4.png" /></div>

**Step 5.** ジャンパワイヤを取り外します。

</details>

## 周辺機器ドライバをダウンロードする

まず最初に、このボード用の周辺機器ドライバをインストールする必要があります。これらは、ボード上の一部のハードウェア周辺機器を動作させるために必要です。以下のリンクをクリックして、使用する Jetson モジュールに応じたドライバをダウンロードしてください。

<div class="table-center">
<table style={{textAlign:'center'}}>
  <thead>
    <tr>
      <th>Jetson モジュール</th>
      <th>JetPack バージョン</th>
      <th>L4T バージョン</th>
      <th>ダウンロードリンク</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={2}>Jetson Orin NX 8GB/ 16GB</td>
      <td>5.1</td>
      <td>35.2.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/A603-Carrier-Board/Orin-NX/A603-Orin-NX-JP5.1.zip/download">Download</a></td>
    </tr>
    <tr>
      <td>5.1.1</td>
      <td>35.3.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/A603-Carrier-Board/Orin-NX/A603-Orin-NX-JP5.1.1.zip/download" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
      <td>Jetson Orin Nano 4GB/ 8GB</td>
      <td>5.1.1</td>
      <td>35.3.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/A603-Carrier-Board/Orin-Nano/A603-Orin-Nano-JP5.1.1.zip/download">Download</a></td>
    </tr>
    <tr>
      <td>Jetson Orin NX 8GB/ 16GB,<br />Jetson Orin Nano 4GB/ 8GB</td>
      <td>5.1.2</td>
      <td>35.4.1</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EZC4-Ci8o0dNkc0wWWlphf0BEQHp2nV-TM2Qpn7WwmpB1g?e=heBSc2">Download</a></td>
    </tr>
        <tr>
      <td>Jetson Orin NX 8GB/ 16GB,<br />Jetson Orin Nano 4GB/ 8GB</td>
      <td>5.1.4</td>
      <td>35.6.0</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EShnCiOVY3ZPqptpnJZ0tlABemb3chgmuUZyuvsqJpHpcA?e=hXxCRr">Download</a></td>
    </tr>
    <tr>
      <td>Jetson Orin NX 8GB/ 16GB,<br />Jetson Orin Nano 4GB/ 8GB</td>
      <td>6.0</td>
      <td>36.3</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EY0H4iNmfUxPjCfiwfi59NEB8KQ9HuYEiu_0VLnsJVPjVw?e=oR4LYr">Download</a></td>
    </tr>
    <tr>
      <td>Jetson Orin NX 8GB/ 16GB,<br />Jetson Orin Nano 4GB/ 8GB</td>
      <td>6.1</td>
      <td>36.4</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EdmS2OfqVg5IpQt9MeiBoT0BdS3Uft6DlJ1GPTJqZHoVNQ?e=ocmcHG">Download</a></td>
    </tr>
    <tr>
      <td>Jetson Orin NX 8GB/ 16GB,<br />Jetson Orin Nano 4GB/ 8GB</td>
      <td>6.2</td>
      <td>36.4.3</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EQLFs4vd8N5Lp0nhbP_KU-gB6kYGlXu3_N3KLiL25ze52Q?e=CWhIaE">Download</a></td>
    </tr>
    <tr>
      <td>Jetson Orin NX 8GB/ 16GB,<br />Jetson Orin Nano 4GB/ 8GB</td>
      <td>7.2</td>
      <td>39.2.0</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDFKQLWsQBBTrenUxxvj-qJAU4s62oPXWg6RxcdSg-uJnY?e=y3buDr" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
  </tbody>
</table>
</div>

:::info
ダウンロードしたファームウェアの完全性を検証するには、SHA256 ハッシュ値を比較します。

Ubuntu ホストマシンでターミナルを開き、コマンド `sha256sum <File>` を実行して、ダウンロードしたファイルの SHA256 ハッシュ値を取得します。結果のハッシュが [こちら](https://seeedstudio88-my.sharepoint.com/:x:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EXljqlpW3ZNNplIPBwJuyvsBdkW92geUmV7_7VN4SDlggA?e=Xea32u) に記載されている SHA256 ハッシュと一致すれば、ダウンロードしたファームウェアが完全であり改ざんされていないことが確認できます。
:::

**Note:** 現在、上記のドライバを提供しています。今後、新しい JetPack バージョンのリリースに合わせてドライバを継続的に更新していきます。

## Jetson へのフラッシュ

ここでは、JetPack 6.1 を A603 キャリアボード + Orin Nx 16GB モジュールにフラッシュするための動画を用意しています。この動画および以下の詳細な手順を参考にして、お使いのデバイスにフラッシュしてください。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/qN4GxscUGW0" title="A603 JetPack6.1 Installation Walkthrough" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

:::note
フラッシュ作業に進む前に注意すべき点として、Jetson Orin NX モジュールは JetPack 5.1 以降のみをサポートし、Jetson Orin Nano モジュールは JetPack 5.1.1 以降のみをサポートしていることがあります。
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="JP5.1.1 for Jetson Orin NX" label="JP5.1.1 for Jetson Orin NX">

ここでは、Jetson Orin NX モジュールを搭載した A603 Carrier Board に **Jetpack 5.1.1** をインストールします。

**Step 1:** ホスト PC 上で [Download](https://developer.nvidia.com/embedded/jetson-linux-r3531) から NVIDIA ドライバをダウンロードします。必要なドライバは以下の通りです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg" /></div>

**Step 2:** 先ほどダウンロードした周辺機器ドライバを NVIDIA ドライバと同じフォルダに移動します。これで同じフォルダ内に 3 つの圧縮ファイルが表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A603/6.png" /></div>

**Step 3:** これらのファイルが含まれているフォルダに移動し、**Jetson_Linux_R35.3.1_aarch64.tbz2** と **Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2** を展開し、変更を適用して必要な前提パッケージをインストールします

```sh
tar xf Jetson_Linux_R35.3.1_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**Step 4:** **A603-Orin-NX-JP5.1.1.zip** を展開します。ここでは、.zip ファイルを解凍するために必要な **unzip** パッケージを追加でインストールします

```sh
cd ..
sudo apt install unzip 
unzip A603-Orin-NX-JP5.1.1.zip
```

ここでファイルを置き換えるかどうかを尋ねられます。必要なファイルを置き換えるために **A** と入力して **ENTER** を押します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A603/7.jpg" /></div>

**Step 5:** デバイスの起動完了後に Ubuntu インストールウィザードを実行する必要がないように、ユーザー名、パスワード、およびホスト名を設定します。

最初に `cd Linux_for_Tegra` を使用して、正しいディレクトリにいることを確認します。

```sh
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

例えば (username:"nvidia", password:"nvidia", device-name:"nvidia-desktop") のようにします：

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```

**ステップ 6:** システムを NVMe SSD または USB フラッシュドライブに書き込みます

```sh
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 p3509-a02+p3767-0000 internal
```

フラッシュ処理が正常に完了すると、次のような出力が表示されます

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A603/10.jpg" /></div>

</TabItem>
<TabItem value="JP5.1.1 for Jetson Orin Nano" label="JP5.1.1 for Jetson Orin Nano">

ここでは NVIDIA L4T **35.3.1** を使用して、Jetson Orin Nano モジュールを搭載した A603 キャリアボードに **Jetpack 5.1.1** をインストールします

**ステップ 1:** ホスト PC 上で [NVIDIA ドライバ](https://developer.nvidia.com/embedded/jetson-linux-r3531) をダウンロードします。必要なドライバは以下の通りです：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg" /></div>

**ステップ 2:** 先ほどダウンロードした周辺機器ドライバを NVIDIA ドライバと同じフォルダに移動します。これで同じフォルダ内に 3 つの圧縮ファイルが表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A603/8.png" /></div>

**ステップ 3:** これらのファイルが含まれるフォルダに移動し、**Jetson_Linux_R35.3.1_aarch64.tbz2** と **Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2** を展開し、変更を適用して必要な前提パッケージをインストールします

```sh
tar xf Jetson_Linux_R35.3.1_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**ステップ 4:** **A603-Orin-NX-JP5.1.1.zip** を展開します。ここでは、.zip ファイルを解凍するために必要な **unzip** パッケージも追加でインストールします

```sh
cd ..
sudo apt install unzip 
unzip A603-Orin-NX-JP5.1.1.zip
```

ここでファイルを置き換えるかどうかを尋ねられます。必要なファイルを置き換えるために **A** と入力し、**ENTER** を押します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A603/9.png" /></div>

**ステップ 5:** デバイスの起動完了後に Ubuntu インストールウィザードに入る必要がないように、ユーザー名、パスワード、およびホスト名を設定します

```sh
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

例えば (username:"nvidia", password:"nvidia", device-name:"nvidia-desktop") のようにします：

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```

**ステップ 6:** システムを NVMe SSD または USB フラッシュドライブに書き込みます

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 jetson-orin-nano-devkit internal
```

フラッシュ処理が正常に完了すると、次のような出力が表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A603/10.jpg" /></div>

</TabItem>

<TabItem value="JP5.1.2" label="JP5.1.2">

ここでは Jetson Orin モジュールを搭載した A603 キャリアボードに **Jetpack 5.1.2** をインストールします。

**ステップ 1:** ホスト PC 上で [NVIDIA ドライバ](https://developer.nvidia.com/embedded/jetson-linux-r3541) をダウンロードします。必要なドライバは以下の通りです：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg" /></div>

**ステップ 2:** 先ほどダウンロードした周辺機器ドライバを NVIDIA ドライバと同じフォルダに移動します。これで同じフォルダ内に 3 つの圧縮ファイルが表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/jp512_files.png" /></div>

**ステップ 3:** これらのファイルが含まれるフォルダに移動し、**Jetson_Linux_R35.4.1_aarch64.tbz2** と **Tegra_Linux_Sample-Root-Filesystem_R35.4.1_aarch64.tbz2** を展開し、変更を適用して必要な前提パッケージをインストールします。

```sh
tar xf Jetson_Linux_R35.4.1_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.4.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**ステップ 4:** **A603-JP5.1.2.zip** を展開します。ここでは、.zip ファイルを解凍するために必要な **unzip** パッケージも追加でインストールします。

```sh
cd ..
sudo apt install unzip 
unzip A603-JP5.1.2.zip
```

**ステップ 5:** デバイスの起動完了後に Ubuntu インストールウィザードに入る必要がないように、ユーザー名、パスワード、およびホスト名を設定します。

```sh
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

例えば (username:"nvidia", password:"nvidia", device-name:"nvidia-desktop") のようにします：

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```

**ステップ 6:** システムを NVMe SSD に書き込みます。

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
```

フラッシュ処理が正常に完了すると、次のような出力が表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/flash_successful.png" /></div>

</TabItem>

<TabItem value="JP5.1.4" label="JP5.1.4">

ここでは Jetson Orin モジュールを搭載した A603 キャリアボードに **Jetpack 5.1.4** をインストールします。

**ステップ 1:** ホスト PC 上で NVIDIA ドライバをダウンロードします：

```bash
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v6.0/release/jetson_linux_r35.6.0_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v6.0/release/tegra_linux_sample-root-filesystem_r35.6.0_aarch64.tbz2
```

**ステップ 2:** フラッシュ用パッケージを構成します
次のコマンドを順番に実行します：

```bash
tar xf jetson_linux_r35.6.0_aarch64.tbz2
sudo tar xpf tegra_linux_sample-root-filesystem_r35.6.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
tar zxpf 603_jp514.tar.gz # Unzip the driver package
sudo cp -r 603_jp514/Linux_for_Tegra/* Linux_for_Tegra/ # Replace all files in the Linux_for_Tegra directory with the files from the driver package
cd Linux_for_Tegra/ # Navigate to the Linux_for_Tegra path to run the flashing commands
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**ステップ 3:** デバイスをリカバリモードにします。フラッシュにはデバイスをリカバリモードにする必要があります。次の手順に従ってリカバリモードに入ります：

1. キャリアボード上の REC ピンと GND ピンを短絡させます。
2. キャリアボードを Micro USB データケーブルで PC に接続します。
3. デバイスの電源を入れます。
4. PC 上で `lsusb` を実行し、プロダクト ID が 7323、7423、7523、7623 のいずれかであるか確認します。これが表示されれば、デバイスがリカバリモードになっていることを示します：
   - 7323: Orin NX 16G
   - 7423: Orin NX 8G
   - 7523: Orin Nano 8G
   - 7623: Orin Nano 4G

**ステップ 4:** デバイスをフラッシュします。

   ```bash
   sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
   ```

**ヒント:** システムをバックアップし、バックアップイメージを使ってフラッシュする

1. システムを SSD にフラッシュした場合は、次のコマンドを実行します：
   - イメージをバックアップする（リカバリモードが必要）：

     ```bash
     sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -b jetson-orin-nano-devkit
     ```

   - バックアップイメージを使ってフラッシュする（リカバリモードが必要）：

     ```bash
     sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -r jetson-orin-nano-devkit
     ```

   完了すると、デバイスはシステムを起動できるようになります。

</TabItem>

<TabItem value="JP6.0" label="JP6.0">

ここでは Jetson Orin モジュールを搭載した A603 キャリアボードに **Jetpack 6.0** をインストールします。

**ステップ 1:** ホスト PC 上で [NVIDIA ドライバ](https://developer.nvidia.com/embedded/jetson-linux-r363) をダウンロードします。必要なドライバは以下の通りです：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg" /></div>

**ステップ 2:** 先ほどダウンロードした周辺機器ドライバを NVIDIA ドライバと同じフォルダに移動します。これで同じフォルダ内に 3 つの圧縮ファイルが表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/jp6.0_files.png" /></div>

**ステップ 3:** これらのファイルが含まれるフォルダに移動し、**Jetson_Linux_R36.3.0_aarch64.tbz2** と **Tegra_Linux_Sample-Root-Filesystem_R36.3.0_aarch64.tbz2** を展開します。

```sh
sudo tar xf Jetson_Linux_R36.3.0_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R36.3.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
```

**ステップ 4:** **A603-JP6.0.zip** を展開します。ここでは、.zip ファイルを解凍するために必要な **unzip** パッケージも追加でインストールします。

```sh
cd ..
sudo apt install unzip 
sudo unzip A603-JP6.0.zip
```

次に、3 つのフォルダ `(bootloader, kernel, rootfs in A603-JP6.0.zip)` を Linux_for_Tegra フォルダにコピーします。

**ステップ 5:** 変更を適用し、必要な前提パッケージをインストールします

```sh
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**ステップ 6:** デバイスの起動完了後に Ubuntu インストールウィザードに入る必要がないように、ユーザー名、パスワード、およびホスト名を設定します。

```sh
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

例えば (username:"nvidia", password:"nvidia", device-name:"nvidia-desktop") のようにします：

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```

**ステップ 7：** システムを NVMe SSD にフラッシュします。

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
```

フラッシュ処理が正常に完了すると、次のような出力が表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/flash_successful.png" /></div>

</TabItem>

<TabItem value="JP6.1" label="JP6.1">

ここでは、Jetson Orin モジュールを搭載した A603 キャリアボードに **Jetpack 6.1** をインストールします。

**ステップ 1：** ホスト PC に NVIDIA ドライバをダウンロードします：

```bash
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.0/release/Jetson_Linux_R36.4.0_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.0/release/Tegra_Linux_Sample-Root-Filesystem_R36.4.0_aarch64.tbz2
```

**ステップ 2：** フラッシュパッケージを作成します
次のコマンドを順番に実行します：

```bash
tar xf Jetson_Linux_R36.4.0_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R36.4.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
tar xpf 603_jetpack6.1.tar.gz # Unzip the driver package
sudo cp -r 603_jetpack6.1/Linux_for_Tegra/* Linux_for_Tegra/ # Replace all files in the Linux_for_Tegra directory with the files from the driver package
cd Linux_for_Tegra/ # Navigate to the Linux_for_Tegra path to run the flashing commands
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**ステップ 3：** デバイスをリカバリーモードにします。フラッシュするには、デバイスをリカバリーモードにする必要があります。次の手順に従ってリカバリーモードに入ります：

1. キャリアボード上の REC ピンと GND ピンをショートさせます。
2. Micro USB データケーブルでキャリアボードを PC に接続します。
3. デバイスの電源を入れます。
4. PC 上で `lsusb` を実行し、プロダクト ID が 7323、7423、7523、7623 のいずれかであることを確認します。これが表示されれば、デバイスはリカバリーモードになっています：
   - 7323: Orin NX 16G
   - 7423: Orin NX 8G
   - 7523: Orin Nano 8G
   - 7623: Orin Nano 4G

**ステップ 4：** デバイスをフラッシュします。

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml"   --showlogs --network usb0 jetson-orin-nano-devkit internal
```

:::info
システムをバックアップし、バックアップイメージを使ってフラッシュする

システムを SSD にフラッシュした場合は、次のコマンドを実行します：

- イメージをバックアップする（リカバリーモードが必要）：

     ```bash
     sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -b jetson-orin-nano-devkit
     ```

- バックアップイメージを使ってフラッシュする（リカバリーモードが必要）：

     ```bash
     sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -r jetson-orin-nano-devkit
     ```

   完了すると、デバイスはシステムを起動できるようになります。
:::

</TabItem>

<TabItem value="JP6.2" label="JP6.2">

ここでは、Jetson Orin モジュールを搭載した A603 キャリアボードに **Jetpack 6.2** をインストールします。

**ステップ 1：** ホスト PC に NVIDIA ドライバをダウンロードします：

```bash
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.3/release/Jetson_Linux_r36.4.3_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.3/release/Tegra_Linux_Sample-Root-Filesystem_r36.4.3_aarch64.tbz2
```

**ステップ 2：** フラッシュパッケージを作成します

Nvidia ドライバと周辺機器ドライバを同じディレクトリに配置し、そのディレクトリでターミナルを開いて、次のコードを実行する必要があることに注意してください：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/driver_files_directory_layout.png" /></div>

```bash
tar xf Jetson_Linux_r36.4.3_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_r36.4.3_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
sudo tar zxpf 603_jp62.tar.gz
sudo cp -r 603_jp62/Linux_for_Tegra/* Linux_for_Tegra/
cd Linux_for_Tegra/
sudo ./tools/l4t_flash_prerequisites.sh
sudo ./apply_binaries.sh
```

**ステップ 3：** デバイスをリカバリーモードにします。フラッシュするには、デバイスをリカバリーモードにする必要があります。次の手順に従ってリカバリーモードに入ります：

1. キャリアボード上の REC ピンと GND ピンをショートさせます。
2. Micro USB データケーブルでキャリアボードを PC に接続します。
3. デバイスの電源を入れます。
4. PC 上で `lsusb` を実行し、プロダクト ID が 7323、7423、7523、7623 のいずれかであることを確認します。これが表示されれば、デバイスはリカバリーモードになっています：
   - 7323: Orin NX 16G
   - 7423: Orin NX 8G
   - 7523: Orin Nano 8G
   - 7623: Orin Nano 4G

**ステップ 4：** デバイスをフラッシュします。

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_t234_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 jetson-orin-nano-devkit-super internal
```

:::info
ヒント：システムをバックアップし、バックアップイメージを使ってフラッシュする

システムを SSD にフラッシュした場合は、次のコマンドを実行します：

- イメージをバックアップする（リカバリーモードが必要）：

     ```bash
     sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -b jetson-orin-nano-devkit-super
     ```

- バックアップイメージを使ってフラッシュする（リカバリーモードが必要）：

     ```bash
     sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -r jetson-orin-nano-devkit-super
     ```

   完了すると、デバイスはシステムを起動できるようになります。
:::

</TabItem>

<TabItem value="JP7.2" label="JP7.2">

ここでは、Jetson Orin NX または Jetson Orin Nano モジュールを搭載した A603 キャリアボードに **JetPack 7.2** をインストールします。

### ハードウェア要件

- Ubuntu 20.04/22.04/24.04 ホスト PC
- Type-C データケーブル
- Jetson Orin NX または Jetson Orin Nano モジュールを搭載した A603 キャリアボード
- 電源アダプタ

**ステップ 1：** Ubuntu ホスト PC に NVIDIA システムイメージパッケージをダウンロードします。

```bash
wget https://developer.nvidia.com/downloads/embedded/L4T/r39_Release_v2.0/release/Jetson_Linux_R39.2.0_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/L4T/r39_Release_v2.0/release/Tegra_Linux_Sample-Root-Filesystem_R39.2.0_aarch64.tbz2
```

**ステップ 2：** A603 JetPack 7.2 周辺機器ドライバパッケージ [603_jp72.tbz2](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDFKQLWsQBBTrenUxxvj-qJAU4s62oPXWg6RxcdSg-uJnY?e=y3buDr) をダウンロードし、NVIDIA システムイメージパッケージと同じディレクトリに配置して、フラッシュパッケージを作成します。

```bash
# Extract the official flashing package files.
tar xf Jetson_Linux_R39.2.0_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R39.2.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs/

# Create the A603 driver package directory and extract the package.
mkdir 603_jp72/
cp 603_jp72.tbz2 603_jp72/
cd 603_jp72
sudo tar xf 603_jp72.tbz2

# Enter the Linux_for_Tegra directory and run the setup scripts.
cd ../Linux_for_Tegra/
sudo ./tools/l4t_flash_prerequisites.sh
sudo ./apply_binaries.sh

# Replace the driver package files and directories in Linux_for_Tegra.
cp -r ../603_jp72/bootloader/ ./
cp -r ../603_jp72/kernel/ ./
cp ../603_jp72/p3768-0000-p3767-0000-a0.conf ./
sudo cp -r ../603_jp72/rootfs/ ./
```

**ステップ 3：** デバイスをリカバリーモードにします。フラッシュするには、デバイスをリカバリーモードにする必要があります。

1. キャリアボード上の RECOVERY ピンと GND ピンをショートさせます。
2. Type-C データケーブルでキャリアボードをホスト PC に接続します。
3. デバイスの電源を入れます。
4. ホスト PC 上で `lsusb` を実行します。プロダクト ID が `7323`、`7423`、`7523`、`7623` のいずれかであれば、デバイスはリカバリーモードになっています。
   - 7323: Orin NX 16GB
   - 7423: Orin NX 8GB
   - 7523: Orin Nano 8GB
   - 7623: Orin Nano 4GB

**ステップ 4：** システムを SSD にフラッシュします。

```bash
sudo ./l4t_initrd_flash.sh --erase-all jetson-orin-nano-devkit-super internal
```

フラッシュが完了すると、デバイスは自動的に起動します。

:::info
ヒント：システムイメージのバックアップと復元

- イメージをバックアップするには、デバイスをリカバリーモードにして次を実行します：

  ```bash
  sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -b jetson-orin-nano-devkit-super
  ```

- バックアップイメージを使ってフラッシュするには、デバイスをリカバリーモードにして次を実行します：

  ```bash
  sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -r jetson-orin-nano-devkit-super
  ```
:::

</TabItem>

</Tabs>

## CAN インターフェース

A603 キャリアボードには CAN トランシーバが搭載されているため、開発キットのような追加のトランシーバは不要です。

**ステップ 1.** レジスタに値を書き込むために `devmem2` をインストールします：

```sh
sudo apt-get install devmem2
```

**ステップ 2.** [こちら](https://docs.nvidia.com/jetson/archives/r36.4/DeveloperGuide/HR/ControllerAreaNetworkCan.html#jetson-platform-details) に従って値を書き込みます。

```sh
sudo devmem2 0x0c303010 w 0xc400
sudo devmem2 0x0c303018 w 0xc458
```

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/send1.png"/>
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/send2.png"/>
</div>

**ステップ 3.** カーネルモジュールをロードします：

```bash
sudo modprobe can
sudo modprobe can_raw
sudo modprobe mttcan
```

これらのモジュールをロードした後、`sudo dmesg` で次のようなログが表示されるはずです：
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/check_can.png"/>
</div>

**ステップ 4.** can0 インターフェースを有効化します：

```sh
sudo ip link set can0 type can bitrate 500000
```

必要に応じて、ビットレートを 1000000 に変更できます。その後、can0 を有効化します：

```sh
sudo ip link set can0 up
```

`ifconfig` でインターフェースを確認します：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/ifconfig.png"/>
</div>

**ステップ 5.** データ送信（can-utils のインストールが必要）。反対側では、CAN 拡張ボード付き MCU を使用してデータを受信しました。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/hardware.png"/>
</div>

Jetson のターミナルで `cansend can0 123#11.22.33.50` を実行します：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/cansend.png"/>
</div>

**Step6.** データの受信。反対側では、CAN 拡張ボード付き MCU を使用してデータを送信しました。

Jetson のターミナルで `candump can0` を実行します：
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/candump.png"/>
</div>



## リソース

<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/NVIDIA_Jetson.jpg"
  imageAlt="Request Quote for Jetson"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、お客様が弊社製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
