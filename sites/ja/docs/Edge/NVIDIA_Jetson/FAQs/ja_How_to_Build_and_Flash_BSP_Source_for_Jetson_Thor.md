---
description: NVIDIA Jetson AGX Thor Developer Kit 向けの BSP ソースパッケージをビルドおよびフラッシュする方法。
title: Jetson Thor 向け BSP ソースのビルドとフラッシュ方法
keywords:
  - Jetson Thor
  - BSP
  - ソースビルド
  - フラッシュ
  - JetPack 7.1
image: https://files.seeedstudio.com/wiki/other/thor-post.png
slug: /how_to_build_and_flash_bsp_source_for_jetson_thor
sku: 100060965
last_update:
  date: 04/14/2026
  author: Dayu
createdAt: '2026-04-14'
updatedAt: '2026-04-14'
url: https://wiki.seeedstudio.com/ja/how_to_build_and_flash_bsp_source_for_jetson_thor/
---

# Jetson Thor 向け BSP ソースのビルドとフラッシュ方法

<div align="center">
  <img width ="700" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image-kit-3.png"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-Developer-Kit-p-9965.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
  </a>
</div>

この Wiki では、Ubuntu ホストから **NVIDIA Jetson AGX Thor Developer Kit** をビルドおよびフラッシュするために BSP ソースパッケージを使用する方法を説明します。

この記事のワークフローでは、以下で提供される **JetPack 7.1** BSP パッケージを使用し、以下をカバーします：

- BSP パッケージのダウンロードと展開
- Thor での USB リカバリモードへの移行
- `thor_build_flash.sh` の実行
- `thor_cleanup.sh` によるワークスペースのクリーンアップ
- オプションのフラッシュ後パッケージのインストール

## 前提条件

- NVIDIA Jetson AGX Thor Developer Kit
- Ubuntu ホスト PC
- USB Type-C データケーブル
- Thor 用の安定した電源供給
- Thor 用 BSP パッケージ

:::info
Thor をホスト PC に接続する際は、**HDMI コネクタに最も近い USB Type-C フラッシュポート**を使用してください。
:::

## 1. BSP パッケージのダウンロードと展開

まず BSP パッケージをダウンロードします：

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>JetPack バージョン</th>
      <th>ダウンロードリンク</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>7.1</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAnZOQBV-uhTbnY0Zp3-HEqAQzFPrkH5LKgCsJ4KHRYCMg?e=rjGn93">ダウンロード</a></td>
    </tr>
  </tbody>
</table>
</div>

パッケージをダウンロードした後、展開して作業ディレクトリに入ります：

```bash
cd /other_data
sudo tar xpf <downloaded_package>.tar.gz
cd thor-dev/linux_for_tegra
```

:::tip
パッケージを展開する際は `sudo tar xpf` を使用し、ファイルの所有権とパーミッションが正しく保持されるようにしてください。
:::

## 2. Thor で USB リカバリモードに入る

まず、ホスト PC を **HDMI コネクタ近くの USB Type-C フラッシュポート**に接続します：

<div align="center">
  <img width ="700" src="https://files.seeedstudio.com/wiki/Thor-dev/flash-Thor-dev.png"/>
</div>

サイドボタンは以下の通りです：

<div align="center">
  <img width ="700" src="https://files.seeedstudio.com/wiki/Thor-dev/JAT-Button-Side_white.png"/>
</div>

画像内のボタン定義：

- `11`: 電源ボタン
- `12`: 強制リカバリボタン
- `13`: リセットボタン
- `14`: 白色 LED

リカバリモードに入るには：

1. Thor の電源を切ります。
2. ホスト PC と Thor のフラッシュポートの間に USB Type-C ケーブルを接続します。
3. **強制リカバリボタン** (`12`) を押し続けます。
4. **強制リカバリボタン** (`12`) を押し続けながら、**電源ボタン** (`11`) を押してボードの電源を入れます。
5. ボードがリカバリモードに入ったらボタンを離します。

ホスト PC で、リカバリモードを確認します：

```bash
lsusb
```

USB リカバリモードの Thor は通常、以下のように列挙されます：

```text
0955:7045
```

参考画像：

<div align="center">
  <img width ="700" src="https://files.seeedstudio.com/wiki/Thor-dev/recovery-mode.png"/>
</div>

## 3. ビルドとフラッシュ

まずヘルプコマンドを実行します：

```bash
cd /other_data/thor-dev/linux_for_tegra
./thor_build_flash.sh help
```

デフォルトのボード設定は **Thor J601** 向けに既に構成されています：

- `CONFIG=jetson-agx-thor-devkit`
- `BOARDID=3834`
- `BOARDSKU=0008`
- `FAB=400`
- `BOARDREV=G.5`
- `CHIP_SKU=00:00:00:A0`

### 典型的なフロー

```bash
cd /other_data/thor-dev/linux_for_tegra

./thor_build_flash.sh prepare
./thor_build_flash.sh build
sudo -E ./thor_build_flash.sh flash
```

また、全プロセスを一括で実行することもできます：

```bash
./thor_build_flash.sh all
```

:::tip
初回フラッシュでは、`prepare -> build -> flash` という分割フローが推奨されます。これは、失敗を特定しやすくするためです。
:::

### ステージの意味

- `prepare`
  - rootfs の tarball をダウンロード
  - `rootfs/` を展開
  - `apply_binaries.sh` を実行
  - クロスツールチェーンをダウンロードおよび展開

- `build`
  - カーネルとツリー外モジュールをコンパイル
  - カーネルイメージを `rootfs/boot/` にコピー
  - `rootfs_magic.sh` を実行
  - initrd を更新
  - デフォルトユーザーを作成

- `flash`
  - `l4t_initrd_flash.sh` を呼び出し
  - ターゲットボードが USB リカバリモードである必要があります

### 重要な注意点

- `build` は `root` ではなく通常ユーザーとして実行してください。
- `flash` は `sudo -E` で実行してください。
- Thor の USB リカバリモードは、ホスト上で通常 `0955:7045` として認識されます。
- スクリプトはビルド前に不足している `nvethernetrm` シンボリックリンクを自動修正します。

### 一般的なオーバーライド

デフォルトをオーバーライドする必要がある場合は、環境変数を使用します：

```bash
CONFIG=jetson-agx-thor-devkit \
DOWNLOAD_BASE_URL=http://192.168.1.77/jetson \
DEFAULT_USER=seeed \
DEFAULT_PASSWORD=seeed \
DEFAULT_HOSTNAME=jetson-test \
./thor_build_flash.sh build
```

便利な変数：

- `DOWNLOAD_BASE_URL`
- `ROOTFS_NAME`
- `TOOLCHAIN_NAME`
- `DEFAULT_USER`
- `DEFAULT_PASSWORD`
- `DEFAULT_HOSTNAME`
- `FLASH_TARGET`
- `RUN_ROOTFS_MAGIC`

## 4. クリーンアップ

ヘルプを表示：

```bash
./thor_cleanup.sh help
```

### 推奨される日常的なクリーンアップ

```bash
./thor_cleanup.sh incremental
```

これにより `source/kernel_out` が保持され、次のコンパイルが高速に保たれながら、以下が削除されます：

- `output/`
- `bootloader/system.img*`
- `bootloader/esp.img*`
- `bootloader/recovery.img*`
- `bootloader/boot*.img`
- フラッシュの一時ファイルとログ

### クリーンアップモード

- `incremental`
  - `source/kernel_out` を保持
  - 通常の開発には最適な選択肢

- `rebuild`
  - `source/kernel_out` も削除
  - 次のビルドは完全なリビルドになります

- `distclean`
  - `rootfs/` と `l4t-gcc/` も削除
  - 環境をアーカイブまたは完全にリセットする場合にのみ使用

### ドライラン

```bash
./thor_cleanup.sh incremental --dry-run
```

## 5. オプションのフラッシュ後パッケージ

Thor が正常に起動した後、オプションでパッケージメタデータを更新し、`nvidia-jetpack` メタパッケージをインストールできます：

```bash
sudo apt update
sudo apt install nvidia-jetpack
```

## トラブルシューティング

### 起動時に `mmap` エラーが表示される

Thor が正常に起動せず、以下の画像のような `mmap` エラーが画面に表示される場合は、USB リカバリモードに再入し、ボードを再フラッシュしてください：

<div align="center">
  <img width ="700" src="https://files.seeedstudio.com/wiki/Thor-dev/mmap-error-thor.png"/>
</div>

フラッシュワークスペースから以下のコマンドを実行します：

```bash
cd /other_data/thor-dev/linux_for_tegra
sudo BOARDID=$BOARDID FAB=$FAB BOARDSKU=$BOARDSKU BOARDREV=$BOARDREV CHIP_SKU=$CHIP_SKU \
./l4t_initrd_flash.sh --erase-all jetson-agx-thor-devkit internal
```

:::note
上記の消去・再フラッシュコマンドを実行しても `mmap` エラーが解消しない場合は、完全な起動ログを収集し、サポートに連絡してください。
:::

## リソース

- [NVIDIA Jetson AGX Thor Developer Kit](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-Developer-Kit-p-9965.html)
- [JetPack 7.1 向け Thor BSP パッケージ](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAnZOQBV-uhTbnY0Zp3-HEqAQzFPrkH5LKgCsJ4KHRYCMg?e=rjGn93)

## テクニカルサポートと製品ディスカッション

当社製品をお選びいただき、ありがとうございます。当社は、お客様の製品体験を可能な限りスムーズにするために、さまざまなサポートを提供しています。異なる好みやニーズに対応するために、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
