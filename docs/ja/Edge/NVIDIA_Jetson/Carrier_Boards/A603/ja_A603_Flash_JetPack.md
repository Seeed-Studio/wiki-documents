---
description: A603 キャリアボード
title: A603 キャリアボード
keywords:
  - Edge
  - Jetson Orin
  - reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reComputer_A603_Flash_System
last_update:
  date: 04/19/2023
  author: Lakshantha
---

# A603 キャリアボードに JetPack OS をフラッシュする

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/A603_Carrier_Board.png" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/A603-Carrier-Board-for-Jetson-Orin-NX-Nano-p-5635.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong></a>
</div>

A603 キャリアボードは、Jetson Orin™ NX/Nano モジュールをサポートする強力な拡張ボードです。1 GbE ポート、SSD 用 M.2 Key M、WiFi/BlueTooth 用 M.2 Key E、CSI、高品質ビデオキャプチャとディスプレイ用 HDMI を搭載しています。また、4x USB ポート、ファン、RTC、柔軟な 9-20V 電源供給も含まれています。コンパクトな設計により、様々なエッジコンピューティングアプリケーションに柔軟かつ簡単に統合できます。この wiki では、A603 キャリアボードに接続された NVMe SSD と USB フラッシュドライブに [Jetpack](https://developer.nvidia.com/embedded/jetpack) をフラッシュする方法を説明します。

## サポートされるモジュール

- [NVIDIA® Jetson Orin™ Nano Module 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5553.html)
- [NVIDIA® Jetson Orin™ Nano Module 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5551.html?___store=retailer)
- [NVIDIA® Jetson Orin™ NX Module 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5522.html)
- [NVIDIA® Jetson Orin™ NX Module 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5523.html)

## 前提条件

- Ubuntu ホスト PC
- Jetson Orin モジュール付き A603 キャリアボード
- Micro-USB データ転送ケーブル

## フォースリカバリモードに入る

:::note
インストール手順に進む前に、ボードがフォースリカバリモードになっていることを確認する必要があります。
:::

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/recovery.gif" /></div>

<details>

<summary> ステップバイステップの詳細チュートリアル </summary>

**ステップ 1.** ボードの micro-USB コネクタと Linux ホスト PC の間に USB ケーブルを接続します

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/A603/2.jpg" /></div>

**ステップ 2.** 14 ピンヘッダーのピン 3 とピン 4 の間にジャンパーワイヤーを接続します

<div align="center"><img width={250} src="https://files.seeedstudio.com/wiki/A603/3.jpg" /></div>

**ステップ 3.** ボードの DC JACK に電源アダプターを接続してボードの電源を入れます

<div align="center"><img width={250} src="https://files.seeedstudio.com/wiki/A603/4.jpg" /></div>

**ステップ 4.** Linux ホスト PC でターミナルウィンドウを開き、コマンド `lsusb` を入力します。使用している Jetson SoM に応じて、返される内容に以下の出力のいずれかが含まれている場合、ボードはフォースリカバリモードになっています。

- Orin NX 16GB の場合: **0955:7323 NVidia Corp**
- Orin NX 8GB の場合: **0955:7423 NVidia Corp**
- Orin Nano 8GB の場合: **0955:7523 NVidia Corp**
- Orin Nano 4GB の場合: **0955:7623 NVidia Corp**

以下の画像は Orin NX 16GB の場合です。

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/A607/4.png" /></div>

**ステップ 5.** ジャンパーワイヤーを取り外します。

</details>

## 周辺機器ドライバーのダウンロード

まず最初に、このボード用の周辺機器ドライバーをインストールする必要があります。これらはボード上の一部のハードウェア周辺機器が機能するために必要です。Jetsonモジュールに応じて、以下のリンクをクリックしてドライバーをダウンロードしてください

<div class="table-center">
<table style={{textAlign:'center'}}>
  <thead>
    <tr>
      <th>Jetsonモジュール</th>
      <th>JetPack バージョン</th>
      <th>L4Tバージョン</th>
      <th>ダウンロードリンク</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={2}>Jetson Orin NX 8GB/ 16GB</td>
      <td>5.1</td>
      <td>35.2.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/A603-Carrier-Board/Orin-NX/A603-Orin-NX-JP5.1.zip/download">ダウンロード</a></td>
    </tr>
    <tr>
      <td>5.1.1</td>
      <td>35.3.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/A603-Carrier-Board/Orin-NX/A603-Orin-NX-JP5.1.1.zip/download" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
    </tr>
    <tr>
      <td>Jetson Orin Nano 4GB/ 8GB</td>
      <td>5.1.1</td>
      <td>35.3.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/A603-Carrier-Board/Orin-Nano/A603-Orin-Nano-JP5.1.1.zip/download">ダウンロード</a></td>
    </tr>
    <tr>
      <td>Jetson Orin NX 8GB/ 16GB,<br />Jetson Orin Nano 4GB/ 8GB</td>
      <td>5.1.2</td>
      <td>35.4.1</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EZC4-Ci8o0dNkc0wWWlphf0BEQHp2nV-TM2Qpn7WwmpB1g?e=heBSc2">ダウンロード</a></td>
    </tr>
        <tr>
      <td>Jetson Orin NX 8GB/ 16GB,<br />Jetson Orin Nano 4GB/ 8GB</td>
      <td>5.1.4</td>
      <td>35.6.0</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EShnCiOVY3ZPqptpnJZ0tlABemb3chgmuUZyuvsqJpHpcA?e=hXxCRr">ダウンロード</a></td>
    </tr>
    <tr>
      <td>Jetson Orin NX 8GB/ 16GB,<br />Jetson Orin Nano 4GB/ 8GB</td>
      <td>6.0</td>
      <td>36.3</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EY0H4iNmfUxPjCfiwfi59NEB8KQ9HuYEiu_0VLnsJVPjVw?e=oR4LYr">ダウンロード</a></td>
    </tr>
    <tr>
      <td>Jetson Orin NX 8GB/ 16GB,<br />Jetson Orin Nano 4GB/ 8GB</td>
      <td>6.1</td>
      <td>36.4</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EdmS2OfqVg5IpQt9MeiBoT0BdS3Uft6DlJ1GPTJqZHoVNQ?e=ocmcHG">ダウンロード</a></td>
    </tr>
    <tr>
      <td>Jetson Orin NX 8GB/ 16GB,<br />Jetson Orin Nano 4GB/ 8GB</td>
      <td>6.2</td>
      <td>36.4.3</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EQLFs4vd8N5Lp0nhbP_KU-gB6kYGlXu3_N3KLiL25ze52Q?e=CWhIaE">ダウンロード</a></td>
    </tr>
  </tbody>
</table>
</div>

:::info
ダウンロードしたファームウェアの整合性を確認するために、SHA256ハッシュ値を比較することができます。

Ubuntuホストマシンで、ターミナルを開き、コマンド `sha256sum <File>` を実行して、ダウンロードしたファイルのSHA256ハッシュ値を取得します。結果のハッシュが[こちら](https://seeedstudio88-my.sharepoint.com/:x:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EXljqlpW3ZNNplIPBwJuyvsBdkW92geUmV7_7VN4SDlggA?e=Xea32u)で提供されているSHA256ハッシュと一致する場合、ダウンロードしたファームウェアが完全で破損していないことが確認されます。
:::

**注意:** 現在、上記のドライバーを提供しています。新しいJetPackバージョンのリリースに伴い、今後もドライバーを更新し続けます。

## Jetsonへのフラッシュ

こちらは、A603キャリアボード + Orin Nx 16GBモジュールにJetPack 6.1をフラッシュする動画です。動画と以下の詳細な手順を参考にして、デバイスをフラッシュできます。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/qN4GxscUGW0" title="A603 JetPack6.1 Installation Walkthrough" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

:::note
フラッシュに進む前に、Jetson Orin NXモジュールはJetPack 5.1以上のみをサポートし、Jetson Orin NanoモジュールはJetPack 5.1.1以上のみをサポートすることに注意してください。
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="JP5.1.1 for Jetson Orin NX" label="JP5.1.1 for Jetson Orin NX">

ここでは、Jetson Orin NXモジュール搭載のA603キャリアボードに**Jetpack 5.1.1**をインストールします。

**ステップ1:** ホストPCに[NVIDIAドライバーをダウンロード](https://developer.nvidia.com/embedded/jetson-linux-r3531)します。必要なドライバーは以下の通りです：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg" /></div>

**ステップ2:** 前にダウンロードした周辺機器ドライバーを、NVIDIAドライバーと同じフォルダに移動します。これで、同じフォルダに3つの圧縮ファイルが表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A603/6.png" /></div>

**ステップ3:** **Jetson_Linux_R35.3.1_aarch64.tbz2**と**Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2**を、これらのファイルを含むフォルダに移動して展開し、変更を適用して必要な前提条件をインストールします

```sh
tar xf Jetson_Linux_R35.3.1_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**ステップ4:** **A603-Orin-NX-JP5.1.1.zip**を展開します。ここでは、.zipファイルを解凍するために必要な**unzip**パッケージを追加でインストールします

```sh
cd ..
sudo apt install unzip 
unzip A603-Orin-NX-JP5.1.1.zip
```

ここで、ファイルを置き換えるかどうかを尋ねられます。**A** を入力して **ENTER** を押し、必要なファイルを置き換えてください

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A603/7.jpg" /></div>

**ステップ 5:** ユーザー名、パスワード、ホスト名を設定して、デバイスの起動完了後にUbuntuインストールウィザードを入力する必要がないようにします。

まず `cd Linux_for_Tegra` を使用して、正しいディレクトリにいることを確認してください。

```sh
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

例えば（ユーザー名："nvidia"、パスワード："nvidia"、デバイス名："nvidia-desktop"）：

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```

**ステップ 6:** システムをNVMe SSDまたはUSBフラッシュドライブにフラッシュする

```sh
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 p3509-a02+p3767-0000 internal
```

フラッシュプロセスが成功した場合、以下の出力が表示されます

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A603/10.jpg" /></div>

</TabItem>
<TabItem value="JP5.1.1 for Jetson Orin Nano" label="JP5.1.1 for Jetson Orin Nano">

ここでは、NVIDIA L4T **35.3.1** を使用して、Jetson Orin Nano モジュール搭載の A603 キャリアボードに **Jetpack 5.1.1** をインストールします

**ステップ 1:** ホスト PC に NVIDIA ドライバーを[ダウンロード](https://developer.nvidia.com/embedded/jetson-linux-r3531)します。必要なドライバーは以下の通りです：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg" /></div>

**ステップ 2:** 前にダウンロードした周辺機器ドライバーを NVIDIA ドライバーと同じフォルダに移動します。これで同じフォルダに 3 つの圧縮ファイルが表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A603/8.png" /></div>

**ステップ 3:** これらのファイルが含まれているフォルダに移動して **Jetson_Linux_R35.3.1_aarch64.tbz2** と **Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2** を展開し、変更を適用して必要な前提条件をインストールします

```sh
tar xf Jetson_Linux_R35.3.1_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**ステップ4:** **A603-Orin-NX-JP5.1.1.zip**を展開します。ここでは、.zipファイルを解凍するために必要な**unzip**パッケージを追加でインストールします

```sh
cd ..
sudo apt install unzip 
unzip A603-Orin-NX-JP5.1.1.zip
```

ここで、ファイルを置き換えるかどうかを尋ねられます。**A** を入力して **ENTER** を押し、必要なファイルを置き換えてください

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A603/9.png" /></div>

**ステップ 5:** ユーザー名、パスワード、ホスト名を設定して、デバイスの起動完了後にUbuntuインストールウィザードを入力する必要がないようにします

```sh
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

例えば（ユーザー名："nvidia"、パスワード："nvidia"、デバイス名："nvidia-desktop"）：

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```

**ステップ 6:** システムをNVMe SSDまたはUSBフラッシュドライブにフラッシュする

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 jetson-orin-nano-devkit internal
```

フラッシュプロセスが成功すると、以下の出力が表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A603/10.jpg" /></div>

</TabItem>

<TabItem value="JP5.1.2" label="JP5.1.2">

ここでは、Jetson Orinモジュール搭載のA603キャリアボードに**Jetpack 5.1.2**をインストールします。

**ステップ1:** ホストPCに[NVIDIAドライバーをダウンロード](https://developer.nvidia.com/embedded/jetson-linux-r3541)します。必要なドライバーは以下の通りです：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg" /></div>

**ステップ2:** 前にダウンロードした周辺機器ドライバーを、NVIDIAドライバーと同じフォルダに移動します。これで同じフォルダに3つの圧縮ファイルが表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/jp512_files.png" /></div>

**ステップ3:** **Jetson_Linux_R35.4.1_aarch64.tbz2**と**Tegra_Linux_Sample-Root-Filesystem_R35.4.1_aarch64.tbz2**を、これらのファイルが含まれているフォルダに移動して展開し、変更を適用して必要な前提条件をインストールします。

```sh
tar xf Jetson_Linux_R35.4.1_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.4.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**ステップ4:** **A603-JP5.1.2.zip**を展開します。ここでは、.zipファイルを解凍するために必要な**unzip**パッケージを追加でインストールします。

```sh
cd ..
sudo apt install unzip 
unzip A603-JP5.1.2.zip
```

**ステップ5:** デバイスの起動完了後にUbuntuインストールウィザードを入力する必要がないよう、ユーザー名、パスワード、ホスト名を設定します。

```sh
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

例えば（ユーザー名："nvidia"、パスワード："nvidia"、デバイス名："nvidia-desktop"）：

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```

**ステップ 6:** システムをNVMe SSDにフラッシュします。

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
```

フラッシュプロセスが成功すると、以下の出力が表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/flash_successful.png" /></div>

</TabItem>

<TabItem value="JP5.1.4" label="JP5.1.4">

ここでは、Jetson Orinモジュール搭載のA603キャリアボードに**Jetpack 5.1.4**をインストールします。

**ステップ1:** ホストPCにNVIDIAドライバーをダウンロードします：

```bash
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v6.0/release/jetson_linux_r35.6.0_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v6.0/release/tegra_linux_sample-root-filesystem_r35.6.0_aarch64.tbz2
```

**ステップ2:** フラッシュパッケージの組み立て
以下のコマンドを順番に実行してください：

```bash
tar xf jetson_linux_r35.6.0_aarch64.tbz2
sudo tar xpf tegra_linux_sample-root-filesystem_r35.6.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
tar zxpf 603_jp514.tar.gz # Unzip the driver package
sudo cp -r 603_jp514/Linux_for_Tegra/* Linux_for_Tegra/ # Replace all files in the Linux_for_Tegra directory with the files from the driver package
cd Linux_for_Tegra/ # Navigate to the Linux_for_Tegra path to run the flashing commands
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**ステップ 3:** デバイスをリカバリモードにする。フラッシュを行うためには、デバイスをリカバリモードにする必要があります。以下の手順でリカバリモードに入ります：

1. キャリアボード上のRECピンとGNDピンをショートさせます。
2. Micro USBデータケーブルを使用してキャリアボードをPCに接続します。
3. デバイスの電源を入れます。
4. PC上で`lsusb`を実行し、プロダクトIDが以下のいずれかであることを確認します：7323、7423、7523、または7623。これはデバイスがリカバリモードにあることを示します：
   - 7323: Orin NX 16G
   - 7423: Orin NX 8G
   - 7523: Orin Nano 8G
   - 7623: Orin Nano 4G

**ステップ 4:** デバイスをフラッシュする。

   ```bash
   sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
   ```

**ヒント:** システムのバックアップとバックアップイメージを使用したフラッシュ

1. システムをSSDにフラッシュした場合は、以下のコマンドを実行してください：
   - イメージをバックアップするには（リカバリモードが必要）：

     ```bash
     sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -b jetson-orin-nano-devkit
     ```

   - バックアップイメージを使用してフラッシュするには（リカバリモードが必要）：

     ```bash
     sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -r jetson-orin-nano-devkit
     ```

   完了すると、デバイスはシステムに起動できます。

</TabItem>

<TabItem value="JP6.0" label="JP6.0">

ここでは、Jetson Orinモジュール搭載のA603キャリアボードに**Jetpack 6.0**をインストールします。

**ステップ1:** ホストPCに[NVIDIA ドライバーをダウンロード](https://developer.nvidia.com/embedded/jetson-linux-r363)します。必要なドライバーは以下の通りです：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg" /></div>

**ステップ2:** 以前にダウンロードした周辺機器ドライバーを、NVIDIAドライバーと同じフォルダに移動します。これで、同じフォルダに3つの圧縮ファイルが表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/jp6.0_files.png" /></div>

**ステップ3:** これらのファイルが含まれているフォルダに移動して、**Jetson_Linux_R36.3.0_aarch64.tbz2**と**Tegra_Linux_Sample-Root-Filesystem_R36.3.0_aarch64.tbz2**を展開します。

```sh
sudo tar xf Jetson_Linux_R36.3.0_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R36.3.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
```

**ステップ4:** **A603-JP6.0.zip**を展開します。ここでは、.zipファイルを解凍するために必要な**unzip**パッケージを追加でインストールします。

```sh
cd ..
sudo apt install unzip 
sudo unzip A603-JP6.0.zip
```

次に、3つのフォルダ `(A603-JP6.0.zip内のbootloader、kernel、rootfs)` をLinux_for_Tegraフォルダにコピーします。

**ステップ5:** 変更を適用し、必要な前提条件をインストールする

```sh
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**ステップ 6:** デバイスの起動完了後にUbuntuインストールウィザードを入力する必要がないよう、ユーザー名、パスワード、ホスト名を設定します。

```sh
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

例えば（ユーザー名："nvidia"、パスワード："nvidia"、デバイス名："nvidia-desktop"）：

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```

**ステップ 7:** システムをNVMe SSDにフラッシュします。

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
```

フラッシュプロセスが成功すると、以下の出力が表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/flash_successful.png" /></div>

</TabItem>

<TabItem value="JP6.1" label="JP6.1">

ここでは、Jetson Orinモジュールを搭載したA603キャリアボードに**Jetpack 6.1**をインストールします。

**ステップ1:** ホストPCにNVIDIAドライバーをダウンロードします：

```bash
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.0/release/Jetson_Linux_R36.4.0_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.0/release/Tegra_Linux_Sample-Root-Filesystem_R36.4.0_aarch64.tbz2
```

**ステップ2:** フラッシュパッケージの組み立て
以下のコマンドを順番に実行します：

```bash
tar xf Jetson_Linux_R36.4.0_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R36.4.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
tar xpf 603_jetpack6.1.tar.gz # Unzip the driver package
sudo cp -r 603_jetpack6.1/Linux_for_Tegra/* Linux_for_Tegra/ # Replace all files in the Linux_for_Tegra directory with the files from the driver package
cd Linux_for_Tegra/ # Navigate to the Linux_for_Tegra path to run the flashing commands
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**ステップ3:** デバイスをリカバリモードにする。フラッシュを行うには、デバイスがリカバリモードである必要があります。以下の手順でリカバリモードに入ります：

1. キャリアボード上のRECピンとGNDピンをショートさせます。
2. Micro USBデータケーブルを使用してキャリアボードをPCに接続します。
3. デバイスの電源を入れます。
4. PCで`lsusb`を実行し、プロダクトIDが以下のいずれかであることを確認します：7323、7423、7523、または7623。これはデバイスがリカバリモードにあることを示します：
   - 7323: Orin NX 16G
   - 7423: Orin NX 8G
   - 7523: Orin Nano 8G
   - 7623: Orin Nano 4G

**ステップ4:** デバイスをフラッシュする。

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml"   --showlogs --network usb0 jetson-orin-nano-devkit internal
```

:::info
システムのバックアップとバックアップイメージを使用したフラッシュ

システムをSSDにフラッシュした場合は、以下のコマンドを実行してください：

- イメージをバックアップするには（リカバリモードが必要）：

     ```bash
     sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -b jetson-orin-nano-devkit
     ```

- バックアップイメージを使用してフラッシュするには（リカバリモードが必要）：

     ```bash
     sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -r jetson-orin-nano-devkit
     ```

   完了すると、デバイスはシステムに起動できます。

:::

</TabItem>

<TabItem value="JP6.2" label="JP6.2">

ここでは、Jetson OrinモジュールとA603キャリアボードに**Jetpack 6.2**をインストールします。

**ステップ1：** ホストPCにNVIDIAドライバーをダウンロードします：

```bash
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.3/release/Jetson_Linux_r36.4.3_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.3/release/Tegra_Linux_Sample-Root-Filesystem_r36.4.3_aarch64.tbz2
```

**ステップ 2:** フラッシュパッケージの組み立て

Nvidiaドライバーと周辺機器ドライバーを同じディレクトリに配置し、そのディレクトリでターミナルを開いて以下のコードを実行する必要があることに注意してください：

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

**ステップ 3:** デバイスをリカバリモードにする。フラッシュを行うためには、デバイスをリカバリモードにする必要があります。以下の手順でリカバリモードに入ります：

1. キャリアボード上のRECピンとGNDピンをショートさせます。
2. Micro USBデータケーブルを使用してキャリアボードをPCに接続します。
3. デバイスの電源を入れます。
4. PC上で`lsusb`を実行し、プロダクトIDが以下のいずれかであることを確認します：7323、7423、7523、または7623。これはデバイスがリカバリモードにあることを示します：
   - 7323: Orin NX 16G
   - 7423: Orin NX 8G
   - 7523: Orin Nano 8G
   - 7623: Orin Nano 4G

**ステップ 4:** デバイスをフラッシュする。

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_t234_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 jetson-orin-nano-devkit-super internal
```

:::info
ヒント: システムのバックアップとバックアップイメージを使用したフラッシュ

システムをSSDにフラッシュした場合は、以下のコマンドを実行してください：

- イメージをバックアップするには（リカバリモードが必要）：

     ```bash
     sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -b jetson-orin-nano-devkit-super
     ```

- バックアップイメージを使用してフラッシュするには（リカバリモードが必要）：

     ```bash
     sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -r jetson-orin-nano-devkit-super
     ```

   完了すると、デバイスはシステムに起動できるようになります。

:::

</TabItem>

</Tabs>

## CANインターフェース

A603キャリアボードにはCANトランシーバーが搭載されているため、開発キットのような追加のトランシーバーは必要ありません。

**ステップ1.** レジスタに値を書き込むために`devmem2`をインストールします：

```sh
sudo apt-get install devmem2
```

**ステップ2.** [こちら](https://docs.nvidia.com/jetson/archives/r36.4/DeveloperGuide/HR/ControllerAreaNetworkCan.html#jetson-platform-details)に従って値を記述します。

```sh
sudo devmem2 0x0c303010 w 0xc400
sudo devmem2 0x0c303018 w 0xc458
```

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/send1.png"/>
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/send2.png"/>
</div>

**ステップ3.** カーネルモジュールをロードする：

```bash
sudo modprobe can
sudo modprobe can_raw
sudo modprobe mttcan
```

これらのモジュールを読み込んだ後、`sudo dmesg` でこれらのログを確認できるはずです：
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/check_can.png"/>
</div>

**ステップ4.** can0インターフェースを起動します：

```sh
sudo ip link set can0 type can bitrate 500000
```

オプションで、ビットレートを1000000に変更することもできます。その後、can0を起動します：

```sh
sudo ip link set can0 up
```

`ifconfig`でインターフェースを確認します：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/ifconfig.png"/>
</div>

**ステップ5.** データの送信（can-utilsのインストールが必要）。反対側では、CAN拡張ボード付きのMCUを使用してデータを受信しました。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/hardware.png"/>
</div>

jetsonターミナルで`cansend can0 123#11.22.33.50`を実行します：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/cansend.png"/>
</div>

**ステップ6.** データの受信。反対側では、CAN拡張ボード付きのMCUを使用してデータを送信しました。

jetsonターミナルで`candump can0`を実行します：
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/candump.png"/>
</div>

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
