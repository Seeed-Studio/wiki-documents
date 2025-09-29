---
description: ... 
title: イメージベースのOTA（Over-the-Air）アップデートによるJetson Linuxの更新
keywords:
- reComputer
- OTA
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/updating_jetpack_with_ota
last_update:
  date: 3/19/2025
  author: Youjiang
---

このwikiでは、[reComputer J3010](https://www.seeedstudio.com/reComputer-J3010-p-5589.html)を例として、イメージベースのOTA（Over-the-Air）アップデートを使用してJetson LinuxをJetPack5.1.3からJetPack6.0に更新する方法を説明します。

## 前提条件

- reComputer J4012/ J4011/ J3010 または J3011
- Ubuntu 20.04 ホストコンピュータ
- USB Type-C データ転送ケーブル

:::info
ここでは、デモンストレーションとしてreComputer classicシリーズを使用します。他のシリーズのreComputerでも、このチュートリアルに従ってOTAファームウェアアップグレードを実現できます。
:::

## 1 JP5.1.3のシステムイメージを生成する

### 1.1 JP5.1.3 BSPの準備

まず、**ホストPC**でターミナルウィンドウを開き、以下のコマンドを実行してNVIDIA JetPack 5.1.3バージョンのBSPをダウンロードする必要があります。

```bash
cd <root_dir>
mkdir jp5 && cd jp5
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v5.0/release/jetson_linux_r35.5.0_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v5.0/release/tegra_linux_sample-root-filesystem_r35.5.0_aarch64.tbz2
```

:::note
`<root_dir>` はプロジェクトのルートディレクトリです。
:::

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ota/bsp_jp5.png"/>
</div>

### 1.2 JP5.1.3のシステムイメージをビルドする

ホストPCのターミナルウィンドウで以下のコマンドを実行して、5.1.3システムイメージをビルドします。

```bash
tar xf jetson_linux_r35.5.0_aarch64.tbz2
sudo tar xpf tegra_linux_sample-root-filesystem_r35.5.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra
sudo ./apply_binaries.sh
sudo  BOARDID=<BOARDID> BOARDSKU=<BOARDSKU> FAB=<FAB>  BOARDREV=<BOARDREV> CHIP_SKU=<CHIP_SKU> ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_nvme.xml  -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml --no-systemimg" --no-flash  --massflash 5  --network usb0  jetson-orin-nano-devkit  external
```

:::info
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <td> Jetson </td>
      <td> BOARDID </td>
      <td> BOARDSKU </td>
      <td> FAB </td>
      <td> BOARDREV </td>
      <td> CHIP_SKU </td>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td > Orin Nano 4G </td>
        <td > 3767 </td>
        <td > 0004 </td>
        <td > 300 </td>
        <td > N.2 </td>
        <td > 00:00:00:D6 </td>
    </tr>
    <tr>
        <td > Orin Nano 8G </td>
        <td > 3767 </td>
        <td > 0003 </td>
        <td > 300 </td>
        <td > N.2 </td>
        <td > 00:00:00:D6 </td>
    </tr>
    <tr>
        <td > Orin Nx 8G </td>
        <td > 3767 </td>
        <td > 0001 </td>
        <td > 300 </td>
        <td > M.3 </td>
        <td > 00:00:00:D4 </td>
    </tr>
    <tr>
        <td > Orin Nx 16G </td>
        <td > 3767 </td>
        <td > 0000 </td>
        <td > 300 </td>
        <td > G.3 </td>
        <td > 00:00:00:D3 </td>
    </tr>
  </tbody>
</table>
:::

使用している特定のJetsonモジュールに基づいて、対応する変数を置き換えてください。reComputer J3010の場合：
`sudo  BOARDID=3767 BOARDSKU=0004 FAB=300  BOARDREV=N.2 CHIP_SKU=00:00:00:D6 ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_nvme.xml  -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml --no-systemimg" --no-flash  --massflash 5  --network usb0  jetson-orin-nano-devkit  external`
:::

コンパイルが正常に完了すると、`Linux_for_Tegra`ディレクトリにシステムイメージパッケージが生成されます。

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ota/build_jp5.png"/>
</div>

### 1.3 JP5.1.3をデバイスにフラッシュする（オプション）

このファームウェアをJetsonデバイスでテストしたい場合は、[このwiki](https://wiki.seeedstudio.com/ja/reComputer_J4012_Flash_Jetpack/)を参照して、ファームウェアをJetsonデバイスにフラッシュできます。

```bash
sudo tar xpf mfi_jetson-orin-nano-devkit.tar.gz
cd mfi_jetson-orin-nano-devkit
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

## 2 JP6.0のOTAパッケージを生成する

### 2.1 BSPを準備する

**ホストPC**でターミナルウィンドウを開き、以下のコマンドを実行してNVIDIA Jetpack 6.0バージョンのBSPをダウンロードする必要があります。

```bash
cd <root_dir>
mkdir jp6 && cd jp6
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v3.0/release/jetson_linux_r36.3.0_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v3.0/release/tegra_linux_sample-root-filesystem_r36.3.0_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v3.0/release/ota_tools_R36.3.0_aarch64.tbz2
```

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ota/bsp_jp6.png"/>
</div>

### 2.2 JP6のシステムイメージをビルドする

実行については[1.2](./#12-build-system-image-of-jp513)の手順を参照し、その中の変数を修正することに注意してください。

```bash
tar xf jetson_linux_r36.3.0_aarch64.tbz2
sudo tar xpf tegra_linux_sample-root-filesystem_r36.3.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs
cd Linux_for_Tegra
sudo ./apply_binaries.sh
sudo BOARDID=<BOARDID> BOARDSKU=<BOARDSKU> FAB=<FAB> BOARDREV=<BOARDREV> CHIP_SKU=<CHIP_SKU> ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml --no-systemimg" --no-flash --massflash 5 --network usb0 jetson-orin-nano-devkit external
```

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ota/build_jp6.png"/>
</div>

### 2.3 OTAペイロードパッケージの生成

ホストPCのターミナルウィンドウで以下のコマンドを実行します。

```bash
cd <root_dir>/jp6
tar xf ota_tools_R36.3.0_aarch64.tbz2
cd Linux_for_Tegra
sudo BASE_BSP=<root_dir>/jp5/Linux_for_Tegra ./tools/ota_tools/version_upgrade/l4t_generate_ota_package.sh --external-device nvme0n1 -S 80GiB jetson-orin-nano-devkit R35-5
```

コマンドが完了すると、Linux_for_Tegra/bootloader/jetson-orin-nano-devkit に `ota_payload_package.tar.gz` が生成されます。

## 3 デバイスでのOTAパッケージの適用

### 3.1 準備作業

生成されたOTAパッケージ（`ota_payload_package.tar.gz`）をJetsonデバイスにコピーし、Jetsonデバイスのターミナルウィンドウで以下のコマンドを実行します。

```bash
scp <...>/jp6/Linux_for_Tegra/bootloader/jetson-orin-nano-devkit/ota_payload_package.tar.gz ~
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v3.0/release/ota_tools_R36.3.0_aarch64.tbz2
sudo mkdir /ota
sudo mv ~/ota_payload_package.tar.gz /ota
tar xf ota_tools_R36.3.0_aarch64.tbz2
```

### 3.2 OTAの適用

```bash
cd ~/Linux_for_Tegra/tools/ota_tools/version_upgrade
sudo ./nv_ota_start.sh /ota/ota_payload_package.tar.gz
```

このコマンドが正常に完了した後、デバイスを再起動してください。

最終的に、デバイスは5.1.3から6.0へのアップグレードが正常に完了しました。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
