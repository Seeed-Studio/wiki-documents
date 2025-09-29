---
description: この記事では、NVIDIA Jetson Orin NX/NanoモジュールをサポートするA608キャリアボードにJetPackオペレーティングシステムをフラッシュする方法について詳細なガイドを提供します。前提条件と強制リカバリモードへの入り方から、システムイメージとドライバーのダウンロード、そして最終的にNVMe SSD、USBフラッシュドライブ、またはSDカードにオペレーティングシステムをフラッシュするまで、ユーザーがシステムのインストールと起動を正常に完了できるようにすべてをカバーしています。
title: A608キャリアボード
keywords:
  - Edge
  - reComputer
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/A608CB.webp
slug: /ja/reComputer_A608_Flash_System
last_update:
  date: 12/4/2024
  author: Youjiang
---

# A608キャリアボードにJetPack OSをフラッシュする（NVIDIA Jetson Orin NX/Nanoサポート）

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/A608CB.jpg" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Jetson-A608-Carrier-Board-for-Orin-NX-Orin-Nano-Series-p-5853.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong></a>
</div>

このwikiでは、NVIDIA Jetson Orin NXモジュールとNVIDIA Jetson Orin Nanoモジュールの両方をサポートするA608キャリアボードに接続されたNVMe SSDとUSBフラッシュドライブにJetpackをフラッシュする方法を説明します。

## 前提条件

- Ubuntu ホストPC
- Jetson Orin NXまたはJetson Orin Nanoモジュールを搭載したA608キャリアボード
- USB Type-Cデータ転送ケーブル

:::info
仮想マシンではなく、物理的なubuntuホストデバイスを使用することをお勧めします。
ホストマシンを準備するには、以下の表を参照してください。

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td  rowspan="2"> JetPack バージョン </td>
        <td class="dbon" colspan="3"> Ubuntu バージョン（ホストコンピュータ） </td>
    </tr>
    <tr>
        <td > 18.04 </td>
        <td > 20.04 </td>
        <td > 22.04 </td>
    </tr>
    <tr>
        <td >JetPack 5.x</td>
        <td > ✅ </td>
        <td > ✅ </td>
        <td > </td>
    </tr>
    <tr>
        <td >JetPack 6.x</td>
        <td > </td>
        <td > ✅ </td>
        <td > ✅ </td>
    </tr>
  </tbody>
</table>

:::

## フォースリカバリモードに入る

インストール手順に進む前に、ボードがフォースリカバリモードになっていることを確認する必要があります。

**ステップ 1.** システムの電源を切ります。スタンバイモードではなく、電源が完全に切れていることを確認してください。

**ステップ 2.** Type C to USB Type A ケーブルを使用してキャリアとホストを接続します。

**ステップ 3.** GH1.25MM ロック端子線を使用して、Recovery の pin1 と pin2 をショートさせ、リカバリモードに入らせます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/hardware_connection.png" /></div>

**ステップ 4.** デバイスの電源を入れます。

**ステップ 5.** Linux ホスト PC でターミナルウィンドウを開き、コマンド `lsusb` を入力します。使用している Jetson SoM に応じて、返される内容に以下の出力のいずれかがあれば、ボードはフォースリカバリモードになっています。

- Orin NX 16GB の場合: **0955:7323 NVidia Corp**
- Orin NX 8GB の場合: **0955:7423 NVidia Corp**
- Orin Nano 8GB の場合: **0955:7523 NVidia Corp**
- Orin Nano 4GB の場合: **0955:7623 NVidia Corp**

以下の画像は Orin NX 8GB の場合です

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/lsusb.png" /></div>

**ステップ 6.** ショート線を取り外します

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="JP5.1.1" label="JP5.1.1">

ここでは、NVIDIA L4T 35.3.1 を使用して、Jetson Orin NX モジュール搭載の A608 キャリアボードに Jetpack 5.1.1 をインストールします。

**ステップ 1.** ホスト PC に NVIDIA ドライバを[ダウンロード](https://developer.nvidia.com/embedded/jetson-linux-r3531)します。必要なドライバは以下の通りです：

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/nvidia_driver.png" /></div>

**ステップ 2.** 周辺機器ドライバを[ダウンロード](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EZ5nv2iWBQlIvPq7_aTQiucBp_HUwDmFNgkBMR04SI_teg?e=wseTuy)し、すべてのドライバを同じフォルダに配置します。

これで、同じフォルダに 3 つの圧縮ファイルが表示されます：

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/drivers.png" /></div>

**ステップ 3.** システムイメージを準備します。

ホスト PC でターミナルウィンドウを開き、以下のコマンドを実行します：

```bash
cd <path to drivers>
sudo apt install unzip 
tar xf Jetson_Linux_R35.3.1_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
cd ..
unzip 608_jp511.zip
cp -r ./608_jp511/Linux_for_Tegra/* ./Linux_for_Tegra/

```

**ステップ 4.** システムをA608にフラッシュします。

- NVMeにフラッシュ

  ```bash
  cd Linux_for_Tegra
  sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
  ```

- Flash to USB

  ```bash
  cd Linux_for_Tegra
  sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device sda1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
  ```

- Flash to SD

  ```bash
  cd Linux_for_Tegra
  sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device mmcblk1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
  ```

フラッシュプロセスが成功すると、以下の出力が表示されます。

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/flash.png" /></div>

フラッシュ後、Jetsonデバイスを再度電源オンし、システムにログインします。
</TabItem>
<TabItem value="JP5.1.2" label="JP5.1.2">

ここでは、NVIDIA L4T 35.4.1を使用してJetson Orin NXモジュール搭載のA608キャリアボードにJetpack 5.1.2をインストールします。

**ステップ1.** ホストPCに[NVIDIAドライバーをダウンロード](https://developer.nvidia.com/embedded/jetson-linux-r3541)します。必要なドライバーは以下の通りです：
<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P1.png" /></div>

**ステップ2.** [周辺機器ドライバーをダウンロード](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EZcvwwGTgLBBq_M_pAa2tmEB-pZmFQraF9v9JcdiqcRbLA?e=Px98MO)し、すべてのドライバーを同じフォルダに配置します。

これで、同じフォルダに3つの圧縮ファイルが表示されます：

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P2.png" /></div>

**ステップ3.** システムイメージを準備します。

ホストPCでターミナルウィンドウを開き、以下のコマンドを実行します：

```bash
cd <path to drivers>
sudo apt install unzip 
tar xf Jetson_Linux_R35.4.1_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.4.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
cd ..
unzip a608_jp512.zip
cp -r ./608_jp512/Linux_for_Tegra/* ./Linux_for_Tegra/
```

**ステップ 4.** A608にシステムをフラッシュします。

- NVMeにフラッシュ

  ```bash
  cd Linux_for_Tegra
  sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
  ```

- Flash to USB

  ```bash
  cd Linux_for_Tegra
  sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device sda1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
  ```

- Flash to SD

  ```bash
  cd Linux_for_Tegra
  sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device mmcblk1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
  ```

フラッシュプロセスが成功すると、以下の出力が表示されます。

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P3.png" /></div>

フラッシュ後、Jetsonデバイスを再度電源を入れ、システムにログインします。

</TabItem>

<TabItem value="JP6.0" label="JP6.0">

ここでは、NVIDIA L4T 36.3を使用してJetson Orin NXモジュール搭載のA608キャリアボードにJetpack 6.0をインストールします。

**ステップ1.** ホストPCに[NVIDIAドライバーをダウンロード](https://developer.nvidia.com/embedded/jetson-linux-r363)します。必要なドライバーは以下の通りです：
<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P1.png" /></div>

**ステップ2.** [周辺機器ドライバーをダウンロード](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EZdUUKln2yBKhPS8yegaLzMBWZm2MtIaFnHbFYkwazArzA?e=blzKtI)し、すべてのドライバーを同じフォルダに配置します。

これで、同じフォルダに3つの圧縮ファイルが表示されます：

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/6.0.png" /></div>

**ステップ3.** システムイメージを準備します。

ホストPCでターミナルウィンドウを開き、以下のコマンドを実行します：

```sh
cd <path to drivers>
sudo apt install unzip 
tar xf Jetson_Linux_R36.3.0_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R36.3.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
cd ..
unzip 608_jp60.zip
sudo cp -r ./608_jp60/Linux_for_Tegra/* ./Linux_for_Tegra/
```

**ステップ 4.** A608のNvmeにシステムをフラッシュします。

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
```

フラッシュプロセスが成功すると、以下の出力が表示されます。

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P3.png" /></div>

フラッシュ後、Jetson デバイスの電源を再度入れ、システムにログインします。

</TabItem>

<TabItem value="JP6.1" label="JP6.1">

ここでは、NVIDIA L4T 36.4 を使用して、Jetson Orin NX モジュール搭載の A608 キャリアボードに Jetpack 6.1 をインストールします。

**ステップ 1.** ホスト PC に [NVIDIA ドライバーをダウンロード](https://developer.nvidia.com/embedded/jetson-linux-r3640)します。必要なドライバーは以下の通りです：
<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P1.png" /></div>

**ステップ 2.** [周辺機器ドライバーをダウンロード](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EVrGntfS1wxHhrgnwGeHQmQBtQ0gvHj4udkREIDIACvFDw?e=5B07Za)し、すべてのドライバーを同じフォルダに配置します。

これで、同じフォルダに 3 つの圧縮ファイルが表示されます：

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/a608_jp6.1.png" /></div>

**ステップ 3.** システムイメージを準備します。

ホスト PC でターミナルウィンドウを開き、以下のコマンドを実行します：

```bash
cd <path to drivers>
tar xf Jetson_Linux_R36.3.0_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R36.3.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
cd ..
tar xf A608_Jetpack_6.1.tar.gz
sudo cp -r 608_jetpack6.1/Linux_for_Tegra/* Linux_for_Tegra/
```

**ステップ 4.** A608のNvmeにシステムをフラッシュする。

```bash
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
```

フラッシュプロセスが成功すると、以下の出力が表示されます。

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P3.png" /></div>

フラッシュ後、Jetsonデバイスを再度電源オンし、システムにログインします。

</TabItem>

<TabItem value="JP6.2" label="JP6.2">

ここでは、NVIDIA L4T 36.4.3を使用して、Jetson Orin NXモジュール搭載のA608キャリアボードにJetpack 6.2をインストールします。

**ステップ 1.** ホストPCにNVIDIAドライバーを[ダウンロード](https://developer.nvidia.com/embedded/jetson-linux-r3643)します。必要なドライバーは以下の通りです：
<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/jp6.2.png" /></div>

**ステップ 2.** 周辺機器ドライバーを[ダウンロード](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EYGdRLSx_oxDjagkG2J6GTYBB9TDLvTKagnRfQcbz6gplA?e=sswKna)し、すべてのドライバーを同じフォルダに配置します。

これで、同じフォルダに3つの圧縮ファイルが表示されます：

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/jp62_files.png" /></div>

**ステップ 3.** システムイメージを準備します。

ホストPCでターミナルウィンドウを開き、以下のコマンドを実行します：

```bash
cd <path to drivers>
tar xf Jetson_Linux_R36.4.3_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R36.4.3_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
sudo tar zxpf 608_jp62.tar.gz
sudo cp -r 608_jp62/Linux_for_Tegra/* Linux_for_Tegra/ 
cd Linux_for_Tegra/
sudo ./tools/l4t_flash_prerequisites.sh
sudo ./apply_binaries.sh
```

**ステップ 4.** A608のNvmeにシステムをフラッシュする。

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit-super internal
```

フラッシュプロセスが成功すると、以下の出力が表示されます。

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P3.png" /></div>

フラッシュ後、Jetson Deviceを再度電源オンし、システムにログインしてください。

</TabItem>

</Tabs>

## リソース

- [A608 CADファイル](https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/A608_V1.2.zip)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
