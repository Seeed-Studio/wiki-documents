---
description: A607 キャリアボード
title: A607 キャリアボード
keywords:
  - Edge
  - reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reComputer_A607_Flash_System
last_update:
  date: 05/15/2025
  author: Lakshantha
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# A607 キャリアボードに JetPack OS をフラッシュする (NVIDIA Jetson Orin NX/Nano 対応)

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/A607/1.png" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/A607-Carrier-Board-for-Jetson-Orin-NX-Nano-p-5634.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong></a>
</div>

この Wiki では、NVIDIA Jetson Orin NX モジュールおよび NVIDIA Jetson Orin Nano モジュールの両方をサポートする A607 キャリアボードに接続された NVMe SSD に [Jetpack](https://developer.nvidia.com/embedded/jetpack) をフラッシュする方法を説明します。

## 必要条件

- Ubuntu ホスト PC (ネイティブまたは VMware Workstation Player を使用した VM)
- Jetson Orin NX または Jetson Orin Nano モジュールを搭載した A607 キャリアボード
- USB Type-C データ転送ケーブル

## 強制リカバリモードに入る

インストール手順に進む前に、ボードが強制リカバリモードになっていることを確認する必要があります。

**ステップ 1.** ボードの Type-C コネクタと Linux ホスト PC の間に USB ケーブルを接続します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/A607/3.png" /></div>

**ステップ 2.** RECOVERY ボタンを押しながら、そのボタンを押したまま、DC JACK に電源アダプタを接続してボードに電源を入れます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/A607/2.png" /></div>

**ステップ 3.** Linux ホスト PC でターミナルウィンドウを開き、コマンド `lsusb` を入力します。使用している Jetson SoM に応じて、以下のいずれかの出力が返される場合、ボードは強制リカバリモードになっています。

- Orin NX 16GB の場合: **0955:7323 NVidia Corp**
- Orin NX 8GB の場合: **0955:7423 NVidia Corp**
- Orin Nano 8GB の場合: **0955:7523 NVidia Corp**
- Orin Nano 4GB の場合: **0955:7623 NVidia Corp**

以下の画像は Orin NX 16GB の例です。

<div align="center"><img width="{700}" src="https://files.seeedstudio.com/wiki/A607/4.png" /></div>

**ステップ 4.** ジャンパーワイヤーを取り外します。

## 周辺機器ドライバをダウンロードする

まず、このボード用の周辺機器ドライバをインストールする必要があります。これらのドライバは、ボード上の一部のハードウェア周辺機器を動作させるために必要です。以下のリンクをクリックして、Jetson モジュールに応じたドライバをダウンロードしてください。

<div class="table-center">
<table style={{textAlign: 'center'}}>
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
      <td rowSpan={4}>Jetson Orin NX 8GB/ 16GB</td>
      <td>5.1</td>
      <td>35.2.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/A607-Carrier-Board/Orin-NX/A607-Orin-NX-JP5.1.zip/download" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
    </tr>
    <tr>
      <td>5.1.1</td>
      <td>35.3.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/A607-Carrier-Board/Orin-NX/A607-Orin-NX-JP5.1.1.zip/download" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
    </tr>
    <tr>
      <td>6.0</td>
      <td>36.3</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EQS4f032w2VIsYE-4Bs80K8BIRD7YGXgBdDq6umW3zCIlw?e=l0LWr0" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
    </tr>
    <tr>
      <td>6.1</td>
      <td>36.4</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Ecv3iI8SWcNJs7f_6_bOcyIB9xr9o9x7Ghs98Hj07Im1Ew?e=fkwe6b" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
    </tr>
    <tr>
      <td rowSpan={3}>Jetson Orin Nano 4GB</td>
      <td>5.1.1</td>
      <td>35.3.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/A607-Carrier-Board/Orin-NX/A607-Orin-Nano-4GB-JP5.1.1.zip/download" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
    </tr>
    <tr>
      <td>6.0</td>
      <td>36.3</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EQS4f032w2VIsYE-4Bs80K8BIRD7YGXgBdDq6umW3zCIlw?e=l0LWr0" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
    </tr>  
    <tr>
      <td>6.1</td>
      <td>36.4</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Ecv3iI8SWcNJs7f_6_bOcyIB9xr9o9x7Ghs98Hj07Im1Ew?e=fkwe6b" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
    </tr>
    <tr>
      <td rowSpan={3}>Jetson Orin Nano 8GB</td>
      <td>5.1.1</td>
      <td>35.3.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/A607-Carrier-Board/Orin-NX/A607-Orin-Nano-8GB-JP5.1.1.zip/download" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
    </tr>
    <tr>
      <td>6.0</td>
      <td>36.3</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EQS4f032w2VIsYE-4Bs80K8BIRD7YGXgBdDq6umW3zCIlw?e=l0LWr0" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
    </tr>
    <tr>
      <td>6.1</td>
      <td>36.4</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Ecv3iI8SWcNJs7f_6_bOcyIB9xr9o9x7Ghs98Hj07Im1Ew?e=fkwe6b" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
    </tr>
  </tbody>
</table>
</div>

**注意:** 現在、上記のドライバを提供しています。新しい JetPack バージョンがリリースされるたびに、ドライバを更新していく予定です。

## Jetson へのフラッシュ

:::note
フラッシュを行う前に、Jetson Orin NX モジュールは JetPack 5.1 以上のみをサポートし、Jetson Orin Nano モジュールは JetPack 5.1.1 以上のみをサポートすることに注意してください。
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="JP5.1/JP5.1.1" label="JP5.1/JP5.1.1">

### Jetson Orin NX

ここでは、NVIDIA L4T **35.3.1** を使用して、Jetson Orin NX モジュールを搭載した A607 キャリアボードに **Jetpack 5.1.1** をインストールします。

**ステップ 1:** ホスト PC に NVIDIA ドライバーを [ダウンロード](https://developer.nvidia.com/embedded/jetson-linux-r3531) します。必要なドライバーは以下の通りです：

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg" /></div>

**ステップ 2:** ダウンロードした周辺機器ドライバーを NVIDIA ドライバーと同じフォルダーに移動します。これで、同じフォルダーに 3 つの圧縮ファイルが表示されます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/A607/5.png" /></div>

**ステップ 3:** **Jetson_Linux_R35.3.1_aarch64.tbz2** と **Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2** を解凍し、これらのファイルが含まれるフォルダーに移動して変更を適用し、必要な前提条件をインストールします。

```sh
tar xf Jetson_Linux_R35.3.1_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**ステップ 4:** **A607-Orin-NX-JP5.1.1.zip** を解凍します。ここでは、.zip ファイルを解凍するために必要な **unzip** パッケージを追加でインストールします。

```sh
cd ..
sudo apt install unzip 
unzip A607-Orin-NX-JP5.1.1.zip
```

ここでファイルを置き換えるかどうかを尋ねられます。**A** を入力して **ENTER** を押し、必要なファイルを置き換えます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/A607/7.jpg" /></div>

**ステップ 5:** ユーザー名、パスワード、ホスト名を設定して、デバイスの起動後に Ubuntu インストールウィザードを入力する必要がないようにします。

```sh
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

例 (ユーザー名:"nvidia", パスワード:"nvidia", デバイス名:"nvidia-desktop"):

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```

**ステップ 6:** システムを NVMe SSD または USB フラッシュドライブにフラッシュします。

#### NVMe SSD

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 p3509-a02+p3767-0000 internal
```

#### USB フラッシュドライブ

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device sda1 \
  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 p3509-a02+p3767-0000 internal
```

フラッシュプロセスが成功すると、以下の出力が表示されます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/A603/10.jpg" /></div>

### Jetson Orin Nano

ここでは、NVIDIA L4T **35.3.1** を使用して、Jetson Orin Nano モジュールを搭載した A607 キャリアボードに **Jetpack 5.1.1** をインストールします。なお、4GB と 8GB の Orin Nano モジュールでは異なるドライバーファイルを使用し、手順が少し異なります。

**ステップ 1:** ホスト PC に NVIDIA ドライバーを [ダウンロード](https://developer.nvidia.com/embedded/jetson-linux-r3531) します。必要なドライバーは以下の通りです：

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg" /></div>

**ステップ 2:** ダウンロードした周辺機器ドライバーを NVIDIA ドライバーと同じフォルダーに移動します。これで、同じフォルダーに 3 つの圧縮ファイルが表示されます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/A607/8.png" /></div>

**ステップ 3:** **Jetson_Linux_R35.3.1_aarch64.tbz2** と **Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2** を解凍し、これらのファイルが含まれるフォルダーに移動して変更を適用し、必要な前提条件をインストールします。

```sh
tar xf Jetson_Linux_R35.3.1_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**ステップ 4:** 8GB バージョンの場合は **A607-Orin-Nano-8GB-JP5.1.1.zip** を、4GB バージョンの場合は **A607-Orin-Nano-4GB-JP5.1.1.zip** を解凍します。ここでは、.zip ファイルを解凍するために必要な **unzip** パッケージを追加でインストールします。

```sh
cd ..
sudo apt install unzip 
# 8GB バージョンの場合
unzip A607-Orin-Nano-8GB-JP5.1.1.zip
# 4GB バージョンの場合
unzip A607-Orin-Nano-4GB-JP5.1.1.zip
```

ここでファイルを置き換えるかどうかを尋ねられます。**A** を入力して **ENTER** を押し、必要なファイルを置き換えます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/A607/10.jpg" /></div>

**ステップ 5:** ユーザー名、パスワード、ホスト名を設定して、デバイスの起動後に Ubuntu インストールウィザードを入力する必要がないようにします。

```sh
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

例 (ユーザー名:"nvidia", パスワード:"nvidia", デバイス名:"nvidia-desktop"):

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```

**ステップ 6:** システムを NVMe SSD または USB フラッシュドライブにフラッシュします。

#### NVMe SSD

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 jetson-orin-nano-devkit internal
```

#### USB フラッシュドライブ

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device sda1 \
  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 jetson-orin-nano-devkit internal
```

フラッシュプロセスが成功した場合、以下の出力が表示されます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/A603/10.jpg" /></div>
</TabItem>

<TabItem value="JP6.0" label="JP6.0">

ここでは、NVIDIA L4T **36.3** を使用して、Jetson Orin NX モジュールを搭載した A607 キャリアボードに **Jetpack 6.0** をインストールします。

**ステップ 1:** [こちら](https://developer.nvidia.com/embedded/jetson-linux-r363)からホストPCにNVIDIAドライバをダウンロードしてください。必要なドライバは以下の通りです：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg" /></div>

**ステップ 2:** ダウンロードした周辺機器ドライバを、NVIDIAドライバと同じフォルダに移動します。これで、同じフォルダ内に3つの圧縮ファイルが表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A607/compressed_files.png" /></div>

**ステップ 3:** **Jetson_Linux_R36.3.0_aarch64.tbz2** と **Tegra_Linux_Sample-Root-Filesystem_R36.3.0_aarch64.tbz2** を解凍し、これらのファイルが含まれるフォルダに移動して変更を適用し、必要な前提条件をインストールします。

```sh
tar xf Jetson_Linux_R36.3.0_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R36.3.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**ステップ 4:** **A607-JP6.0.zip** を解凍します。ここでは、.zipファイルを解凍するために必要な **unzip** パッケージを追加でインストールします。

```sh
cd ..
sudo apt install unzip 
sudo unzip A607-JP6.0.zip
```

ここで、ファイルを置き換えるかどうか尋ねられます。**A** を入力して **ENTER** を押し、必要なファイルを置き換えてください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A607/replace_files.png" /></div>

**ステップ 5:** NVMe SSD にシステムをフラッシュします。

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
```

フラッシュプロセスが成功した場合、以下の出力が表示されます：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A603/10.jpg" /></div>

</TabItem>

<TabItem value="JP6.1" label="JP6.1">

ここでは、NVIDIA L4T **36.4** を使用して、Jetson Orin NX モジュールを搭載した A607 キャリアボードに **Jetpack 6.1** をインストールします。

**ステップ 1:** [こちら](https://developer.nvidia.com/embedded/jetson-linux-r3640)からホストPCにNVIDIAドライバをダウンロードしてください。必要なドライバは以下の通りです：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg" /></div>

**ステップ 2:** ダウンロードした周辺機器ドライバを、NVIDIAドライバと同じフォルダに移動します。これで、同じフォルダ内に3つの圧縮ファイルが表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A607/a607_jp6.1.png" /></div>

:::note
以下のコマンドを使用して、ダウンロードしたファイルが完全であることを確認できます。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A607/verify_download_file.webp"/>
</div>
:::

**ステップ 3:** **Jetson_Linux_R36.4.0_aarch64.tbz2** と **Tegra_Linux_Sample-Root-Filesystem_R36.4.0_aarch64.tbz2** を解凍し、これらのファイルが含まれるフォルダに移動して変更を適用します。

```bash
cd <path_to_files>
tar xf Jetson_Linux_R36.4.0_aarch64.tbz2
sudo tar xfp Tegra_Linux_Sample-Root-Filesystem_R36.4.0_aarch64.tbz2 -C Linux_for_tegra/rootfs
cd Linux_for_tegra
sudo ./tools/l4t_flash_prerequisites.sh
sudo ./apply_binaries.sh
```

**ステップ 4:** **A607_Jetpack_6.1.tar.gz** を解凍します。

```sh
cd ..
tar xf A607_Jetpack_6.1.tar.gz
sudo cp -r 607_jetpack6.1/Linux_for_Tegra/* Linux_for_Tegra/
```

**ステップ 5:** NVMe SSD にシステムをフラッシュします。

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
```

フラッシュプロセスが成功した場合、以下の出力が表示されます：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A603/10.jpg" /></div>

</TabItem>

</Tabs>

## WiFiとBluetoothの設定

フラッシュが成功した後、JetsonはOSに起動します。次に、WiFiとBluetoothを追加で設定する必要があります。

**ステップ1:** [このページ](https://sourceforge.net/projects/nvidia-jetson/files/A607-Carrier-Board/WiFi-BT-Driver)にアクセスし、**8723du.ko**をクリックして必要なWiFi/Bluetoothドライバファイルをダウンロードし、デバイスにコピーします。

**ステップ2:** ドライバ用の新しいディレクトリを作成します。

```sh
cd /lib/modules/5.10.104-tegra/kernel/drivers/net/wireless/realtek/
sudo mkdir rtl8723du
```

**ステップ3:** 先ほどダウンロードした**8723du.ko**ファイルを新しく作成したディレクトリにコピーします。

```sh
cd ~
sudo cp 8723du.ko /lib/modules/5.10.104-tegra/kernel/drivers/net/wireless/realtek/rtl8723du
```

**ステップ4:** ドライバを有効化します。

```sh
sudo modprobe cfg80211
sudo insmod /lib/modules/5.10.104-tegra/kernel/drivers/net/wireless/realtek/rtl8723du/8723du.ko
sudo depmod -a
sudo modprobe 8723du
sudo echo 8723du >> /etc/modules
```

**ステップ5:** デバイスを再起動します。

```sh
sudo reboot
```

## 技術サポートと製品に関するディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>