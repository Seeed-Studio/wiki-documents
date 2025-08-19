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
  date: 05/15/2025
  author: Lakshantha
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# JetPack OS を A603 キャリアボードにフラッシュする

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/A603_Carrier_Board.png" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/A603-Carrier-Board-for-Jetson-Orin-NX-Nano-p-5635.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong></a>
</div>

A603 キャリアボードは、Jetson Orin™ NX/Nano モジュールをサポートする強力な拡張ボードです。1 GbE ポート、SSD 用の M.2 Key M、WiFi/BlueTooth 用の M.2 Key E、CSI、HDMI を備え、高品質なビデオキャプチャと表示が可能です。また、4 つの USB ポート、ファン、RTC、柔軟な 9-20V 電源供給を備えています。コンパクトな設計により、さまざまなエッジコンピューティングアプリケーションに柔軟かつ簡単に統合できます。この Wiki では、A603 キャリアボードに接続された NVMe SSD および USB フラッシュドライブに [Jetpack](https://developer.nvidia.com/embedded/jetpack) をフラッシュする方法を説明します。

## 対応モジュール
- [NVIDIA® Jetson Orin™ Nano Module 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5553.html) 
- [NVIDIA® Jetson Orin™ Nano Module 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5551.html?___store=retailer) 
- [NVIDIA® Jetson Orin™ NX Module 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5522.html) 
- [NVIDIA® Jetson Orin™ NX Module 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5523.html) 

## 必要条件

- Ubuntu ホスト PC
- Jetson Orin モジュールを搭載した A603 キャリアボード
- Micro-USB データ転送ケーブル

## 強制リカバリモードに入る

:::note
インストール手順に進む前に、ボードが強制リカバリモードになっていることを確認する必要があります。
:::

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/recovery.gif" /></div>

<details>

<summary> ステップバイステップの詳細チュートリアル </summary>

**ステップ 1.** ボードの micro-USB コネクタと Linux ホスト PC の間に USB ケーブルを接続します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/A603/2.jpg" /></div>

**ステップ 2.** 14 ピンヘッダーのピン 3 とピン 4 の間にジャンパーワイヤーを接続します。

<div align="center"><img width={250} src="https://files.seeedstudio.com/wiki/A603/3.jpg" /></div>

**ステップ 3.** ボードの DC ジャックに電源アダプタを接続して、ボードに電源を供給します。

<div align="center"><img width={250} src="https://files.seeedstudio.com/wiki/A603/4.jpg" /></div>

**ステップ 4.** Linux ホスト PC でターミナルウィンドウを開き、コマンド `lsusb` を入力します。使用している Jetson SoM に応じて、以下のいずれかの出力が返される場合、ボードは強制リカバリモードになっています。

- Orin NX 16GB の場合: **0955:7323 NVidia Corp**
- Orin NX 8GB の場合: **0955:7423 NVidia Corp**
- Orin Nano 8GB の場合: **0955:7523 NVidia Corp**
- Orin Nano 4GB の場合: **0955:7623 NVidia Corp**

以下の画像は Orin NX 16GB の例です。

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/A607/4.png" /></div>

**ステップ 5.** ジャンパーワイヤーを取り外します。

</details>

## 周辺機器ドライバのダウンロード

まず、このボード用の周辺機器ドライバをインストールする必要があります。これらのドライバは、ボード上の一部のハードウェア周辺機器を動作させるために必要です。以下のリンクをクリックして、Jetson モジュールに応じたドライバをダウンロードしてください。

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
ダウンロードしたファームウェアの整合性を確認するには、SHA256ハッシュ値を比較することができます。

Ubuntuホストマシンでターミナルを開き、`sha256sum <File>` コマンドを実行して、ダウンロードしたファイルのSHA256ハッシュ値を取得してください。結果のハッシュ値が [こちら](https://seeedstudio88-my.sharepoint.com/:x:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EXljqlpW3ZNNplIPBwJuyvsBdkW92geUmV7_7VN4SDlggA?e=Xea32u) に提供されているSHA256ハッシュと一致する場合、ダウンロードしたファームウェアが完全であることが確認できます。
:::

**注意:** 現在、上記のドライバを提供しています。新しいJetPackバージョンのリリースに伴い、ドライバを随時更新していきます。

## Jetson へのフラッシュ

以下は、A603キャリアボード + Orin Nx 16GBモジュールにJetPack 6.1をフラッシュするためのビデオです。デバイスをフラッシュする際には、このビデオと以下の詳細な手順を参照してください。

<div align="center">
<iframe width="800" height="450" src="https://www.youtube.com/embed/qN4GxscUGW0" title="A603 JetPack6.1 Installation Walkthrough" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

:::note
フラッシュを進める前に、Jetson Orin NXモジュールはJetPack 5.1以上のみをサポートし、Jetson Orin NanoモジュールはJetPack 5.1.1以上のみをサポートしていることに注意してください。
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="JP5.1.1 for Jetson Orin NX" label="JP5.1.1 for Jetson Orin NX">

ここでは、A603キャリアボードにJetson Orin NXモジュールを使用して**Jetpack 5.1.1**をインストールします。

**ステップ 1:** [NVIDIAドライバ](https://developer.nvidia.com/embedded/jetson-linux-r3531)をホストPCにダウンロードします。必要なドライバは以下の通りです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg" /></div>

**ステップ 2:** ダウンロードした周辺機器ドライバをNVIDIAドライバと同じフォルダに移動します。これで、同じフォルダに3つの圧縮ファイルが表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A603/6.png" /></div>

**ステップ 3:** **Jetson_Linux_R35.3.1_aarch64.tbz2**と**Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2**を解凍し、これらのファイルが含まれるフォルダに移動して変更を適用し、必要な前提条件をインストールします。

```sh
tar xf Jetson_Linux_R35.3.1_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**ステップ 4:** **A603-Orin-NX-JP5.1.1.zip**を解凍します。この際、.zipファイルを解凍するために**unzip**パッケージを追加でインストールします。

```sh
cd ..
sudo apt install unzip 
unzip A603-Orin-NX-JP5.1.1.zip
```

ここで、ファイルを置き換えるかどうかを尋ねられます。**A**を入力して**ENTER**を押し、必要なファイルを置き換えます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A603/7.jpg" /></div>

**ステップ 5:** ユーザー名、パスワード、ホスト名を設定して、デバイスの起動後にUbuntuインストールウィザードを入力する必要がないようにします。

まず、`cd Linux_for_Tegra`を使用して正しいディレクトリにいることを確認します。

```sh
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

例 (ユーザー名:"nvidia", パスワード:"nvidia", デバイス名:"nvidia-desktop"):

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```

**ステップ 6:** システムをNVMe SSDまたはUSBフラッシュドライブにフラッシュします。

```sh
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 p3509-a02+p3767-0000 internal
```

フラッシュプロセスが成功すると、以下の出力が表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A603/10.jpg" /></div>

</TabItem>
<TabItem value="JP5.1.1 for Jetson Orin Nano" label="JP5.1.1 for Jetson Orin Nano">

ここでは、A603キャリアボードにJetson Orin Nanoモジュールを使用して、NVIDIA L4T **35.3.1**を使用して**Jetpack 5.1.1**をインストールします。

**ステップ 1:** [NVIDIAドライバ](https://developer.nvidia.com/embedded/jetson-linux-r3531)をホストPCにダウンロードします。必要なドライバは以下の通りです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg" /></div>

**ステップ 2:** ダウンロードした周辺機器ドライバをNVIDIAドライバと同じフォルダに移動します。これで、同じフォルダに3つの圧縮ファイルが表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A603/8.png" /></div>

**ステップ 3:** **Jetson_Linux_R35.3.1_aarch64.tbz2**と**Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2**を解凍し、これらのファイルが含まれるフォルダに移動して変更を適用し、必要な前提条件をインストールします。

```sh
tar xf Jetson_Linux_R35.3.1_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**ステップ 4:** **A603-Orin-NX-JP5.1.1.zip**を解凍します。この際、.zipファイルを解凍するために**unzip**パッケージを追加でインストールします。

```sh
cd ..
sudo apt install unzip 
unzip A603-Orin-NX-JP5.1.1.zip
```

ここで、ファイルを置き換えるかどうかを尋ねられます。**A**を入力して**ENTER**を押し、必要なファイルを置き換えます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A603/9.png" /></div>

**ステップ 5:** ユーザー名、パスワード、ホスト名を設定して、デバイスの起動後にUbuntuインストールウィザードを入力する必要がないようにします。

```sh
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

例 (ユーザー名:"nvidia", パスワード:"nvidia", デバイス名:"nvidia-desktop"):

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```

**ステップ 6:** システムをNVMe SSDまたはUSBフラッシュドライブにフラッシュします。

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

ここでは、A603キャリアボードにJetson Orinモジュールを使用して**Jetpack 5.1.2**をインストールします。

**ステップ 1:** ホストPCにNVIDIAドライバを[ダウンロード](https://developer.nvidia.com/embedded/jetson-linux-r3541)します。必要なドライバは以下の通りです：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg" /></div>

**ステップ 2:** 先ほどダウンロードした周辺機器ドライバをNVIDIAドライバと同じフォルダに移動します。これで、同じフォルダ内に3つの圧縮ファイルが表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/jp512_files.png" /></div>

**ステップ 3:** **Jetson_Linux_R35.4.1_aarch64.tbz2**と**Tegra_Linux_Sample-Root-Filesystem_R35.4.1_aarch64.tbz2**を解凍し、変更を適用して必要な前提条件をインストールします。

```sh
tar xf Jetson_Linux_R35.4.1_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.4.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**ステップ 4:** **A603-JP5.1.2.zip**を解凍します。この際、.zipファイルを解凍するために必要な**unzip**パッケージを追加でインストールします。

```sh
cd ..
sudo apt install unzip 
unzip A603-JP5.1.2.zip
```

**ステップ 5:** ユーザー名、パスワード、ホスト名を設定して、デバイスの起動後にUbuntuインストールウィザードをスキップできるようにします。

```sh
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

例 (ユーザー名:"nvidia", パスワード:"nvidia", デバイス名:"nvidia-desktop"):

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

ここでは、A603キャリアボードにJetson Orinモジュールを使用して**Jetpack 5.1.4**をインストールします。

**ステップ 1:** ホストPCにNVIDIAドライバをダウンロードします：

```bash
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v6.0/release/jetson_linux_r35.6.0_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v6.0/release/tegra_linux_sample-root-filesystem_r35.6.0_aarch64.tbz2
```

**ステップ 2:** フラッシュパッケージを組み立てます。以下のコマンドを順に実行します：

```bash
tar xf jetson_linux_r35.6.0_aarch64.tbz2
sudo tar xpf tegra_linux_sample-root-filesystem_r35.6.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
tar zxpf 603_jp514.tar.gz # ドライバパッケージを解凍
sudo cp -r 603_jp514/Linux_for_Tegra/* Linux_for_Tegra/ # ドライバパッケージのファイルでLinux_for_Tegraディレクトリ内のすべてのファイルを置き換え
cd Linux_for_Tegra/ # フラッシュコマンドを実行するためにLinux_for_Tegraパスに移動
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**ステップ 3:** デバイスをリカバリモードにします。フラッシュにはデバイスがリカバリモードである必要があります。以下の手順でリカバリモードに入ります：

1. キャリアボードのRECピンとGNDピンを短絡します。
2. キャリアボードをMicro USBデータケーブルでPCに接続します。
3. デバイスの電源を入れます。
4. PCで`lsusb`を実行し、製品IDが以下のいずれかであることを確認します：7323, 7423, 7523, または7623。これによりデバイスがリカバリモードにあることが示されます：
   - 7323: Orin NX 16G
   - 7423: Orin NX 8G
   - 7523: Orin Nano 8G
   - 7623: Orin Nano 4G

**ステップ 4:** デバイスをフラッシュします。

   ```bash
   sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
   ```

**ヒント:** システムをバックアップし、バックアップイメージを使用してフラッシュする

1. システムをSSDにフラッシュした場合、以下のコマンドを実行します：
   - イメージをバックアップする（リカバリモードが必要）：
     ```bash
     sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -b jetson-orin-nano-devkit
     ```
   - バックアップイメージを使用してフラッシュする（リカバリモードが必要）：
     ```bash
     sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -r jetson-orin-nano-devkit
     ```
   完了後、デバイスはシステムにブートできます。

</TabItem>

<TabItem value="JP6.0" label="JP6.0">

ここでは、A603キャリアボードにJetson Orinモジュールを使用して**Jetpack 6.0**をインストールします。

**ステップ 1:** ホストPCにNVIDIAドライバを[ダウンロード](https://developer.nvidia.com/embedded/jetson-linux-r363)します。必要なドライバは以下の通りです：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg" /></div>

**ステップ 2:** 先ほどダウンロードした周辺機器ドライバをNVIDIAドライバと同じフォルダに移動します。これで、同じフォルダ内に3つの圧縮ファイルが表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/jp6.0_files.png" /></div>

**ステップ 3:** **Jetson_Linux_R36.3.0_aarch64.tbz2**と**Tegra_Linux_Sample-Root-Filesystem_R36.3.0_aarch64.tbz2**を解凍します。

```sh
sudo tar xf Jetson_Linux_R36.3.0_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R36.3.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
```

**ステップ 4:** **A603-JP6.0.zip**を解凍します。この際、.zipファイルを解凍するために必要な**unzip**パッケージを追加でインストールします。

```sh
cd ..
sudo apt install unzip 
sudo unzip A603-JP6.0.zip
```
その後、3つのフォルダ `(bootloader, kernel, rootfs in A603-JP6.0.zip)` をLinux_for_Tegraフォルダにコピーします。

**ステップ 5:** 変更を適用し、必要な前提条件をインストールします。

```sh
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**ステップ 6:** ユーザー名、パスワード、ホスト名を設定して、デバイスが起動した後にUbuntuインストールウィザードを入力する必要がないようにします。

```sh
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

例 (ユーザー名: "nvidia", パスワード: "nvidia", デバイス名: "nvidia-desktop"):

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```

**ステップ 7:** NVMe SSDにシステムをフラッシュします。

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
```

フラッシュプロセスが成功すると、以下の出力が表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/flash_successful.png" /></div>

</TabItem>

<TabItem value="JP6.1" label="JP6.1">

ここでは、A603キャリアボードとJetson Orinモジュールに**Jetpack 6.1**をインストールします。

**ステップ 1:** ホストPCにNVIDIAドライバーをダウンロードします:

```bash
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.0/release/Jetson_Linux_R36.4.0_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.0/release/Tegra_Linux_Sample-Root-Filesystem_R36.4.0_aarch64.tbz2
```

**ステップ 2:** フラッシュパッケージを組み立てます
以下のコマンドを順番に実行してください:

```bash
tar xf Jetson_Linux_R36.4.0_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R36.4.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
tar xpf 603_jetpack6.1.tar.gz # ドライバーパッケージを解凍
sudo cp -r 603_jetpack6.1/Linux_for_Tegra/* Linux_for_Tegra/ # Linux_for_Tegraディレクトリ内のすべてのファイルをドライバーパッケージのファイルで置き換え
cd Linux_for_Tegra/ # フラッシュコマンドを実行するためにLinux_for_Tegraパスに移動
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**ステップ 3:** デバイスをリカバリモードにします。フラッシュするにはデバイスがリカバリモードである必要があります。以下の手順でリカバリモードに入ります:

1. キャリアボードのRECピンとGNDピンを短絡します。
2. キャリアボードをMicro USBデータケーブルでPCに接続します。
3. デバイスの電源を入れます。
4. PCで`lsusb`を実行し、製品IDが以下のいずれかであることを確認します: 7323, 7423, 7523, または7623。これによりデバイスがリカバリモードであることが確認できます:
   - 7323: Orin NX 16G
   - 7423: Orin NX 8G
   - 7523: Orin Nano 8G
   - 7623: Orin Nano 4G

**ステップ 4:** デバイスをフラッシュします。

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml"   --showlogs --network usb0 jetson-orin-nano-devkit internal
```

:::info
システムをバックアップし、バックアップイメージを使用してフラッシュする

SSDにシステムをフラッシュした場合、以下のコマンドを実行してください:
   - イメージをバックアップするには (リカバリモードが必要):
     ```bash
     sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -b jetson-orin-nano-devkit
     ```
   - バックアップイメージを使用してフラッシュするには (リカバリモードが必要):
     ```bash
     sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -r jetson-orin-nano-devkit
     ```
   完了すると、デバイスはシステムにブートできます。
:::

</TabItem>

<TabItem value="JP6.2" label="JP6.2">

ここでは、A603キャリアボードとJetson Orinモジュールに**Jetpack 6.2**をインストールします。

**ステップ 1:** ホストPCにNVIDIAドライバーをダウンロードします:

```bash
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.3/release/Jetson_Linux_r36.4.3_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.3/release/Tegra_Linux_Sample-Root-Filesystem_r36.4.3_aarch64.tbz2
```

**ステップ 2:** フラッシュパッケージを組み立てます

Nvidiaドライバーと周辺機器ドライバーを同じディレクトリに配置し、そのディレクトリでターミナルを開いて以下のコードを実行してください:

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

**ステップ 3:** デバイスをリカバリモードにします。フラッシュするにはデバイスがリカバリモードである必要があります。以下の手順でリカバリモードに入ります:

1. キャリアボードのRECピンとGNDピンを短絡します。
2. キャリアボードをMicro USBデータケーブルでPCに接続します。
3. デバイスの電源を入れます。
4. PCで`lsusb`を実行し、製品IDが以下のいずれかであることを確認します: 7323, 7423, 7523, または7623。これによりデバイスがリカバリモードであることが確認できます:
   - 7323: Orin NX 16G
   - 7423: Orin NX 8G
   - 7523: Orin Nano 8G
   - 7623: Orin Nano 4G

**ステップ 4:** デバイスをフラッシュします。

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_t234_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 jetson-orin-nano-devkit-super internal
```

:::info
ヒント: システムをバックアップし、バックアップイメージを使用してフラッシュする

SSDにシステムをフラッシュした場合、以下のコマンドを実行してください:
   - イメージをバックアップするには (リカバリモードが必要):
     ```bash
     sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -b jetson-orin-nano-devkit-super
     ```
   - バックアップイメージを使用してフラッシュするには (リカバリモードが必要):
     ```bash
     sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -r jetson-orin-nano-devkit-super
     ```
   完了すると、デバイスはシステムにブートできます。
:::

</TabItem>

</Tabs>

## CANインターフェース

A603キャリアボードにはCANトランシーバーが搭載されているため、開発キットのように追加のトランシーバーは必要ありません。

**ステップ1.** レジスタに値を書き込むために`devmem2`をインストールします：
```sh
sudo apt-get install devmem2
```

**ステップ2.** [こちら](https://docs.nvidia.com/jetson/archives/r36.4/DeveloperGuide/HR/ControllerAreaNetworkCan.html#jetson-platform-details)に従って値を書き込みます：
```sh
sudo devmem2 0x0c303010 w 0xc400
sudo devmem2 0x0c303018 w 0xc458
```
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/send1.png"/>
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/send2.png"/>
</div>

**ステップ3.** カーネルモジュールをロードします：
```bash
sudo modprobe can
sudo modprobe can_raw
sudo modprobe mttcan
```
これらのモジュールをロードした後、`sudo dmesg`で以下のログが確認できるはずです：
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/check_can.png"/>
</div>

**ステップ4.** can0インターフェースを起動します：
```sh
sudo ip link set can0 type can bitrate 500000
```
オプションとして、ビットレートを1000000に変更することもできます。その後、can0を起動します：
```sh
sudo ip link set can0 up
```
`ifconfig`でインターフェースを確認します：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/ifconfig.png"/>
</div>

**ステップ5.** データ送信（can-utilsがインストールされている必要があります）。反対側では、CAN拡張ボードを搭載したMCUを使用してデータを受信しました。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/hardware.png"/>
</div>

Jetsonのターミナルで以下を実行します：
```sh
cansend can0 123#11.22.33.50
```

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/cansend.png"/>
</div>

**ステップ6.** データ受信。反対側では、CAN拡張ボードを搭載したMCUを使用してデータを送信しました。

Jetsonのターミナルで以下を実行します：
```sh
candump can0
```
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/candump.png"/>
</div>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>