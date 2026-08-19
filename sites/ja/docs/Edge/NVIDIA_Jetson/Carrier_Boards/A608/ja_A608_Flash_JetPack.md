---
description: この記事では、NVIDIA Jetson Orin NX/Nano モジュールをサポートする A608 キャリアボードに JetPack オペレーティングシステムを書き込む方法について、詳細なガイドを提供します。前提条件や強制リカバリモードへの移行から、システムイメージとドライバのダウンロード、最終的に NVMe SSD、USB フラッシュドライブ、または SD カードへ OS をフラッシュする手順までを網羅し、ユーザーがシステムのインストールと起動を問題なく完了できるようにします。
title: A608 キャリアボード
keywords:
  - Edge
  - reComputer
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/A608CB.webp
slug: /reComputer_A608_Flash_System
sku: 105110001
last_update:
  date: 12/4/2024
  author: Youjiang
createdAt: '2024-01-19'
updatedAt: '2026-03-24'
url: https://wiki.seeedstudio.com/ja/reComputer_A608_Flash_System/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# JetPack OS を A608 キャリアボードにフラッシュする (NVIDIA Jetson Orin NX/Nano 対応)

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/A608CB.jpg" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Jetson-A608-Carrier-Board-for-Orin-NX-Orin-Nano-Series-p-5853.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong></a>
</div>

この wiki では、NVIDIA Jetson Orin NX モジュールおよび NVIDIA Jetson Orin Nano モジュールの両方をサポートする A608 キャリアボードに接続された NVMe SSD と USB フラッシュドライブへ Jetpack をフラッシュする方法を説明します。

## 前提条件

- Ubuntu ホスト PC
- Jetson Orin NX または Jetson Orin Nano モジュールを搭載した A608 キャリアボード
- USB Type-C データ転送ケーブル

:::info
仮想マシンではなく、物理的な Ubuntu ホストデバイスを使用することを推奨します。
ホストマシンの準備については、以下の表を参照してください。

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td  rowspan="2"> JetPack バージョン </td>
        <td class="dbon" colspan="3"> Ubuntu バージョン (ホストコンピュータ) </td>
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

## 強制リカバリモードに入る

インストール手順に進む前に、ボードが強制リカバリモードになっていることを確認する必要があります。

**ステップ 1.** システムの電源をオフにします。スタンバイモードではなく、必ず電源がオフになっていることを確認してください。

**ステップ 2.** Type C から USB Type A ケーブルを使用して、キャリアボードとホストを接続します。

**ステップ 3.** GH1.25MM ロッキング端子線を使用して Recovery の pin1 と pin2 を短絡させ、リカバリモードに入るようにします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/hardware_connection.png" /></div>

**ステップ 4.** デバイスの電源をオンにします。

**ステップ 5.** Linux ホスト PC でターミナルウィンドウを開き、`lsusb` コマンドを入力します。使用している Jetson SoM に応じて、返された内容に以下のいずれかの出力が含まれていれば、ボードは強制リカバリモードになっています。

- Orin NX 16GB の場合: **0955:7323 NVidia Corp**
- Orin NX 8GB の場合: **0955:7423 NVidia Corp**
- Orin Nano 8GB の場合: **0955:7523 NVidia Corp**
- Orin Nano 4GB の場合: **0955:7623 NVidia Corp**

以下の画像は Orin NX 8GB の例です

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/lsusb.png" /></div>

**ステップ 6.** 短絡用のワイヤを取り外します

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="JP5.1.1" label="JP5.1.1">

ここでは NVIDIA L4T 35.3.1 を使用して、Jetson Orin NX モジュールを搭載した A608 キャリアボードに Jetpack 5.1.1 をインストールします。

**ステップ 1.** ホスト PC 上で [Download](https://developer.nvidia.com/embedded/jetson-linux-r3531) から NVIDIA ドライバをダウンロードします。必要なドライバは以下のとおりです。

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/nvidia_driver.png" /></div>

**ステップ 2.** [Download](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EZ5nv2iWBQlIvPq7_aTQiucBp_HUwDmFNgkBMR04SI_teg?e=wseTuy) から周辺機器ドライバをダウンロードし、すべてのドライバを同じフォルダに入れます。

同じフォルダ内に 3 つの圧縮ファイルが表示されます。

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/drivers.png" /></div>

**ステップ 3.** システムイメージを準備します。

ホスト PC でターミナルウィンドウを開き、次のコマンドを実行します：

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

**ステップ 4.** システムを A608 にフラッシュします。

- NVMe にフラッシュ

  ```bash
  cd Linux_for_Tegra
  sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
  ```

- USB にフラッシュ

  ```bash
  cd Linux_for_Tegra
  sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device sda1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
  ```

- SD にフラッシュ

  ```bash
  cd Linux_for_Tegra
  sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device mmcblk1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
  ```

フラッシュ処理が正常に完了すると、次のような出力が表示されます。

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/flash.png" /></div>

フラッシュ後、Jetson デバイスの電源を再投入し、システムにログインします。
</TabItem>
<TabItem value="JP5.1.2" label="JP5.1.2">

ここでは NVIDIA L4T 35.4.1 を使用して、Jetson Orin NX モジュールを搭載した A608 キャリアボードに Jetpack 5.1.2 をインストールします。

**ステップ 1.** ホスト PC 上で [Download](https://developer.nvidia.com/embedded/jetson-linux-r3541) から NVIDIA ドライバをダウンロードします。必要なドライバは以下のとおりです。
<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P1.png" /></div>

**ステップ 2.** [Download](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EZcvwwGTgLBBq_M_pAa2tmEB-pZmFQraF9v9JcdiqcRbLA?e=Px98MO) から周辺機器ドライバをダウンロードし、すべてのドライバを同じフォルダに入れます。

同じフォルダ内に 3 つの圧縮ファイルが表示されます。

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P2.png" /></div>

**ステップ 3.** システムイメージを準備します。

ホスト PC でターミナルウィンドウを開き、次のコマンドを実行します：

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

**ステップ 4.** システムを A608 にフラッシュします。

- NVMe にフラッシュ

  ```bash
  cd Linux_for_Tegra
  sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
  ```

- USB にフラッシュ

  ```bash
  cd Linux_for_Tegra
  sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device sda1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
  ```

- SD にフラッシュ

  ```bash
  cd Linux_for_Tegra
  sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device mmcblk1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
  ```

フラッシュ処理が正常に完了すると、次のような出力が表示されます。

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P3.png" /></div>

フラッシュ後、Jetson デバイスの電源を再投入し、システムにログインします。

</TabItem>

<TabItem value="JP6.0" label="JP6.0">

ここでは NVIDIA L4T 36.3 を使用して、Jetson Orin NX モジュールを搭載した A608 キャリアボードに Jetpack 6.0 をインストールします。

**ステップ 1.** ホスト PC 上で [Download](https://developer.nvidia.com/embedded/jetson-linux-r363) から NVIDIA ドライバをダウンロードします。必要なドライバは以下のとおりです。
<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P1.png" /></div>

**ステップ 2.** [Download](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EZdUUKln2yBKhPS8yegaLzMBWZm2MtIaFnHbFYkwazArzA?e=blzKtI) から周辺機器ドライバをダウンロードし、すべてのドライバを同じフォルダに入れます。

同じフォルダ内に 3 つの圧縮ファイルが表示されます。

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/6.0.png" /></div>

**ステップ 3.** システムイメージを準備します。

ホスト PC でターミナルウィンドウを開き、次のコマンドを実行します：

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

**ステップ 4.** A608 の Nvme にシステムをフラッシュします。

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
```

フラッシュ処理が正常に完了すると、次のような出力が表示されます。

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P3.png" /></div>

フラッシュ後、Jetson デバイスの電源を再投入し、システムにログインします。

</TabItem>

<TabItem value="JP6.1" label="JP6.1">

ここでは、NVIDIA L4T 36.4 を使用して、Jetson Orin NX モジュールを搭載した A608 キャリアボードに Jetpack 6.1 をインストールします。

**Step 1.** ホスト PC 上で [NVIDIA ドライバ](https://developer.nvidia.com/embedded/jetson-linux-r3640) をダウンロードします。必要なドライバは以下のとおりです。
<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P1.png" /></div>

**Step 2.** [周辺機器ドライバ](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EVrGntfS1wxHhrgnwGeHQmQBtQ0gvHj4udkREIDIACvFDw?e=5B07Za) をダウンロードし、すべて同じフォルダに入れます。

同じフォルダ内に 3 つの圧縮ファイルが表示されます。

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/a608_jp6.1.png" /></div>

**Step 3.** システムイメージを準備します。

ホスト PC でターミナルウィンドウを開き、次のコマンドを実行します：

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

**Step 4.** システムを A608 の Nvme にフラッシュします。

```bash
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
```

フラッシュ処理が成功すると、次のような出力が表示されます。

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P3.png" /></div>

フラッシュ後、Jetson デバイスの電源を再投入し、システムにログインします。

</TabItem>

<TabItem value="JP6.2" label="JP6.2">

ここでは、NVIDIA L4T 36.4.3 を使用して、Jetson Orin NX モジュールを搭載した A608 キャリアボードに Jetpack 6.2 をインストールします。

**Step 1.** ホスト PC 上で [NVIDIA ドライバ](https://developer.nvidia.com/embedded/jetson-linux-r3643) をダウンロードします。必要なドライバは以下のとおりです。
<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/jp6.2.png" /></div>

**Step 2.** [周辺機器ドライバ](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EYGdRLSx_oxDjagkG2J6GTYBB9TDLvTKagnRfQcbz6gplA?e=sswKna) をダウンロードし、すべて同じフォルダに入れます。

同じフォルダ内に 3 つの圧縮ファイルが表示されます。

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/jp62_files.png" /></div>

**Step 3.** システムイメージを準備します。

ホスト PC でターミナルウィンドウを開き、次のコマンドを実行します：

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

**Step 4.** システムを A608 の Nvme にフラッシュします。

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit-super internal
```

フラッシュ処理が成功すると、次のような出力が表示されます。

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P3.png" /></div>

フラッシュ後、Jetson デバイスの電源を再投入し、システムにログインします。

</TabItem>

<TabItem value="JP7.2" label="JP7.2">

ここでは、NVIDIA L4T R39.2.0 を使用して、Jetson Orin NX モジュールを搭載した A608 キャリアボードに Jetpack 7.2 をインストールします。

**Step 1.** ホスト PC 上で [NVIDIA ドライバ](https://developer.nvidia.com/downloads/embedded/L4T/r39_Release_v2.0/release/Jetson_Linux_R39.2.0_aarch64.tbz2) と [root filesystem](https://developer.nvidia.com/downloads/embedded/L4T/r39_Release_v2.0/release/Tegra_Linux_Sample-Root-Filesystem_R39.2.0_aarch64.tbz2) をダウンロードします。

- `Jetson_Linux_R39.2.0_aarch64.tbz2`
- `Tegra_Linux_Sample-Root-Filesystem_R39.2.0_aarch64.tbz2`

**Step 2.** [A608 Jetpack 7.2 周辺機器ドライバ](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBsOH7dA-WtQafi5M86XzZGATQW5JJObMxPNJvT_n_ESj0?e=AfZVk4) をダウンロードし、すべて同じフォルダに入れます。

**Step 3.** システムイメージを準備します。

ホスト PC でターミナルウィンドウを開き、次のコマンドを実行します：

```bash
cd <path to drivers>
tar xf Jetson_Linux_R39.2.0_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R39.2.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
unzip 608_jp72.zip
sudo tar xpf 608_jp72.tbz2
sudo cp -r 608_jp72/Linux_for_Tegra/* Linux_for_Tegra/
cd Linux_for_Tegra/
sudo ./tools/l4t_flash_prerequisites.sh
sudo ./apply_binaries.sh
```

**Step 4.** システムを A608 の NVMe SSD にフラッシュします。

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --erase-all jetson-orin-nano-devkit-super internal
```

フラッシュ後、デバイスは自動的に起動します。

**Step 5.** システムのバックアップと復元（まず Force Recovery Mode に入ります）。

- システムイメージをバックアップします。

  ```bash
  sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -b jetson-orin-nano-devkit-super
  ```

- バックアップイメージからシステムを復元します。

  ```bash
  sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -r jetson-orin-nano-devkit-super
  ```

</TabItem>
</Tabs>

## リソース

- [A608 CAD ファイル](https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/A608_V1.2.zip)

<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/NVIDIA_Jetson.jpg"
  imageAlt="Request Quote for Jetson"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただけるよう、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
