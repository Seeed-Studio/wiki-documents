---
description: 既存の Jetson 開発環境からカスタム BSP を作成する
title: Jetson 開発環境からカスタム BSP パッケージを作成する
keywords:
- reComputer
- BSP
- backup
- Jetson
- JetPack
- custom image
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/make_diy_bsp_for_jetson
last_update:
  date: 01/04/2026
  author: Dayu
---

この Wiki ガイドでは、既存の Jetson デバイスから完全な開発環境をクローンし、他の Jetson デバイスで同じ環境を複製するために使用できるフラッシュ可能な BSP（Board Support Package）を作成する方法を説明します。この方法で作成された BSP は、他の Jetson デバイスにフラッシュした際に完全な環境クローンを可能にします。

このガイドでは JetPack 6.2 を例として使用します。

## 前提条件

- ソース Jetson デバイス（設定済みの開発環境）
- Ubuntu 22.04 ホストコンピュータ
- USB Type-C データ転送ケーブル

:::danger
reComputer Classic シリーズは MAXN スーパーモードをサポートするのに十分な冷却機能がありません。reComputer Classic シリーズデバイスに JetPack 6.2 をフラッシュした場合は、MAXN モードを有効にしないでください。
:::

## 1. PC での作業ディレクトリの準備

以下の表から必要な作業ディレクトリパッケージをダウンロードしてください：

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>JetPack バージョン</th>
      <th>ダウンロードリンク ⬇️</th>
    </tr>
  </thead>
  <tbody>
      <tr>
      <td>6.0</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDNJYXWuLpRTL-8U39aMd4UAcrfcWTjtkSjCsJ3ZisTFck?e=s7PNxX">ダウンロード</a></td>
    </tr>
    <tr>
      <td>6.2</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQA9G3wk_0LMQ65sJpp7_HQYAf1ShPRNi0WRSFGWNU3_XN8?e=uQFpeH">ダウンロード</a></td>
    </tr>
    <tr>
      <td>6.2.1</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBqETUyZgfSSrL0w7OEp3q-AbTyZVWbh9l5utvtQPsfpZ0?e=T3TiLg">ダウンロード</a></td>
    </tr>
  </tbody>
</table>
</div>

PC に必要な依存関係をインストールします：

```bash
sudo apt-get update -y
sudo apt-get install -y \
  build-essential flex bison libssl-dev \
  sshpass abootimg nfs-kernel-server \
  libxml2-utils qemu-user-static
```

ダウンロードしたパッケージを展開し、PC のターミナルで以下のコマンドを使用して必要なコンテンツを生成します：

```bash
sudo tar xpf xxx.tar.gz
# For example: sudo tar xpf L4T36-4-3_plus.tar

cd Linux_for_Tegra/
sudo ./apply_binaries.sh
cd ..
```

展開したディレクトリ（tar.gz パッケージが配置されている場所）で環境変数を設定します：

```bash
export ARCH=arm64 
export CROSS_COMPILE="$PWD/aarch64--glibc--stable-2022.08-1/bin/aarch64-buildroot-linux-gnu-"
export PATH="$PWD/aarch64--glibc--stable-2022.08-1/bin:$PATH"
export INSTALL_MOD_PATH="$PWD/Linux_for_Tegra/rootfs/"
```

ソースディレクトリに移動してソースコードをコンパイルします（この処理には時間がかかります）：

```bash
cd Linux_for_Tegra/source
./nvbuild.sh
```

コンパイルが完了したら、コンパイルされたコンポーネントをコピーしてインストールします：

```bash
./do_copy.sh
./nvbuild.sh -i
```

作業ディレクトリの準備が完了しました。以降の手順は `Linux_for_Tegra/` ディレクトリで実行し、Jetson デバイスから完全な開発環境をクローンして BSP を作成します。

## 2. カスタム BSP の生成

ソース Jetson デバイスを USB Type-C データケーブルでフラッシュポート経由で PC に接続し、ソース Jetson がリカバリモードになっていることを確認してください。

リカバリモードに入る手順については、以下を参照してください：
[https://wiki.seeedstudio.com/ja/flash/jetpack_to_selected_product/](https://wiki.seeedstudio.com/flash/jetpack_to_selected_product/)

デバイスを選択し、`3. Enter Recovery mode` セクションを展開してください。同じリンクでデバイスのフラッシュポートに関する情報も確認できます。

:::info
PC に十分なディスク容量があることを確認してください。BSP のサイズは通常、Jetson 開発環境で使用されているストレージ容量の約 2 倍が必要です。
:::

PC の `Linux_for_Tegra/` ディレクトリに戻り、以下のコマンドを実行して Jetson デバイスから完全な開発環境をコピーします：

```bash
sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -b -c <board-name>

# For example:
sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -b -c recomputer-orin-j401
```

`<board-name>` をデバイス名に置き換えてください。パラメータとして有効な `device name` を提供する必要があります。これは `Linux_for_Tegra` のルートディレクトリにある .conf ファイル名を確認することで見つけることができます。これらのファイル名のプレフィックスが有効な `device name` パラメータに対応します。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/device_name.png"/></div>

**L4T 36.4.3** で利用可能なデバイス名パラメータは以下の通りです。**j40** と **j30** シリーズは同じ設定ファイルを使用することに注意してください：

- recomputer-industrial-orin-j201（recomputer-industrial-orin-j40/j30 もこの `device name` をパラメータとして使用）
- recomputer-orin-j401
- reserver-agx-orin-j501x
- reserver-agx-orin-j501x-gmsl
- reserver-industrial-orin-j401
- recomputer-orin-j40mini
- recomputer-orin-robotics-j401
- recomputer-orin-super-j401

クローンしたコンテンツをフラッシュ可能な BSP にパッケージ化します（この処理中、バックアップデバイスはリカバリモードのままである必要があります）：

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --use-backup-image --no-flash --network usb0 --massflash 5 <board-name> internal

# For example:
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --use-backup-image --no-flash --network usb0 --massflash 5 recomputer-orin-j401 internal
```

`<board-name>` を前の手順と同様にデバイス名に置き換えてください。

この処理にはかなりの時間がかかります。完了後、`Linux_for_Tegra/` ディレクトリに `mfi_` プレフィックスを持つファイルと `tar.gz` 圧縮パッケージが生成されます。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/generate-bsp.png"/></div>

`mfi_xxxxx.tar.gz` ファイルがフラッシュ可能な BSP です。展開すると `mfi_xxxxx` ディレクトリが作成されます。

**（オプション）** 工場生産に適した QSPI フラッシュ形式の BSP を生成する必要がある場合は、BSP 作成パラメータを以下のように変更してください（この処理中、バックアップデバイスはリカバリモードのままである必要があります）：

```bash
sudo BOARDID=$BOARDID BOARDSKU=$BOARDSKU FAB=$FAB BOARDREV=$BOARDREV CHIP_SKU=$CHIP_SKU ./tools/kernel_flash/l4t_initrd_flash.sh \
--external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml \
-p "-c bootloader/generic/cfg/flash_t234_qspi.xml --no-systemimg" --no-flash --massflash 5 --showlogs \
--network usb0 <board-name> internal

# For example:
sudo BOARDID=$BOARDID BOARDSKU=$BOARDSKU FAB=$FAB BOARDREV=$BOARDREV CHIP_SKU=$CHIP_SKU ./tools/kernel_flash/l4t_initrd_flash.sh \
--external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml \
-p "-c bootloader/generic/cfg/flash_t234_qspi.xml --no-systemimg" --no-flash --massflash 5 --showlogs \
--network usb0 recomputer-orin-super-j401 internal
```

## 3. フラッシュと検証

前の手順で tar.gz BSP パッケージを取得した後、単一のコマンドで他のターゲット Jetson デバイスに展開してフラッシュし、完全な開発環境クローンを実現できます。**この BSP は環境に依存せず、他の PC にコピーして使用できます。**

以下のコマンド形式を厳密に使用してパッケージを展開してください：

```bash
sudo tar xpf mfi_xxxx.tar.gz
```

展開したディレクトリに移動してフラッシュ処理を実行します：

```bash
cd mfi_xxxx
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

フラッシュにはターゲット Jetson がリカバリモードである必要があります。詳細なフラッシュ手順については、同じリンクを参照してください（**新しい BSP をダウンロードする必要はありません**）：
[https://wiki.seeedstudio.com/ja/flash/jetpack_to_selected_product/](https://wiki.seeedstudio.com/flash/jetpack_to_selected_product/)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>