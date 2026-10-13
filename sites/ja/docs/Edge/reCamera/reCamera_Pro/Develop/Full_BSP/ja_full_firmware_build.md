---
description: Recamera2 ボード構成を選択し、システム全体のファームウェアをビルドしてパッケージ化します。
title: 完全なファームウェアをビルドする
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - BSP
  - Linux
  - Firmware
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_bsp_full_build
sku: 10003420
sidebar_position: 4
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/ja/recamera_pro_bsp_full_build/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# 完全なファームウェアをビルドする

## 3 ステップのワークフロー

```bash
cd recamera-pro-sdk-v1.0.10
./build.sh lunch     # 1. Select a board configuration
./build.sh all       # 2. Build and package the images
ls output/image/     # 3. Inspect the outputs
```

`./build.sh all` は、次のステージをこの順番で実行します：`sysdrv`（U-Boot + カーネル + rootfs）→ `media` → `app` → `recovery` → `firmware`（イメージのパッケージング）。

> **引数なしで `./build.sh` を実行すると、デフォルトで `allsave`（`all` + `save`）が実行されます。** これにより、`IMAGE/` 配下にイメージ、パッチ、ビルド情報もアーカイブされます。CI では、アーカイブを作成したくない場合は `./build.sh all` を明示的に実行してください。

## ボード構成を選択する

```bash
./build.sh lunch
```

このスクリプトは、`project/cfg/` 配下にある **50** 個すべての `BoardConfig-*.mk` ファイルを一覧表示し、番号を振ります。ファイル名は次のパターンに従います：

```text
BoardConfig-"boot-medium"-"power-scheme"-"hardware-version"-"application-scenario".mk
```

reCamera Pro の場合、`BoardConfig_Recamera2/` 配下の 2 つの構成のいずれかを選択します：

| Configuration file | 説明 |
| --- | --- |
| `BoardConfig_Recamera2/BoardConfig-EMMC-RK801-RV1126B_V1-IPC_64BIT.mk` | **64 ビット（推奨）**。`aarch64-rockchip1240-linux-gnu` を使用 |
| `BoardConfig_Recamera2/BoardConfig-EMMC-RK801-RV1126B_V1-IPC.mk` | 32 ビット版 |

> メニュー番号は、エントリがファイル名でソートされるため、SDK バージョン間で変わる可能性があります。**ドキュメント、スクリプト、CI 設定に番号をハードコードしないでください。代わりに完全なファイル名を使用してください。**

### 非対話式の選択（CI に推奨）

`lunch` は構成ファイル名を直接受け取り、対話式メニューを回避できます：

```bash
./build.sh lunch BoardConfig-EMMC-RK801-RV1126B_V1-IPC_64BIT.mk
```

選択後、SDK ルートには、選択したファイルを指す `.BoardConfig.mk` という名前のシンボリックリンクが作成されます：

```bash
ls -l .BoardConfig.mk
./build.sh info      # Check the current configuration, defconfig, DTS, partition table, and all RK_* variables
```

## `build.sh` コマンドリファレンス（完全版）

### コンポーネントビルド

| Command | 説明 |
| --- | --- |
| `env` | env パーティションイメージ（パーティションテーブルとブート引数）を生成 |
| `meta` | マルチメディア meta ヘッダをビルド／エクスポート。任意指定であり、アプリケーションビルド時に自動的に処理されます |
| `uboot` | U-Boot をビルド |
| `kernel` | カーネルをビルド |
| `rootfs` | Buildroot を用いて root ファイルシステムをビルド |
| `driver` | カーネルドライバモジュール（`.ko`）をビルド |
| `sysdrv` | U-Boot + カーネル + rootfs をビルド |
| `media` | mpp / rockit / rkaiq / rga / iva などのマルチメディアライブラリをビルド |
| `app` | リファレンスアプリケーションをビルド（**media に依存。先に media をビルドする必要があります**） |
| `recovery` | リカバリシステムをビルド |
| `tool` | ホスト PC 用ツールをビルド |
| `mcu` | MCU 側の RT-Thread ファームウェアをビルド。このコマンドは通常の引数解析より前に処理されます。`./build.sh mcu [configuration]` を使用してください |

### パッケージングおよびシステム全体のコマンド

| Command | 説明 |
| --- | --- |
| `all` | システムの起動に必要なすべてのイメージをビルドしてパッケージング |
| `allsave` | `all` + `save` を実行。**引数が指定されていない場合のデフォルト** |
| `firmware` | システムの起動に必要なすべてのイメージをパッケージング |
| `updateimg` | すべてのパーティションイメージを `update.img` にパッケージング |
| `unpackimg` | `update.img` パッケージを展開 |
| `ota` | OTA アップデートアーカイブ `update_ota.tar` をパッケージング |
| `factory` | `tools/linux/SocToolKit` を使用して工場出荷用フラッシュイメージを作成 |
| `sdcard_upgrade` | SD カードアップグレード用イメージを作成 |
| `save` | イメージ、パッチ、デバッグ情報を `IMAGE/` にアーカイブ。`save xml` はリポジトリのマニフェストも保存 |

### クリーン

| Command | 説明 |
| --- | --- |
| `clean` | すべてのビルド成果物をクリーン |
| `clean uboot` / `clean kernel` / `clean driver` / `clean rootfs` / `clean sysdrv` | 指定したコンポーネントをクリーン |
| `clean media` / `clean app` / `clean recovery` | media、アプリケーション、または recovery をクリーン |

### 設定メニュー

| Command | 説明 |
| --- | --- |
| `kernelconfig` | カーネルの `menuconfig` を開きます。終了時に `savedefconfig` を使って設定を defconfig に自動保存します |
| `buildrootconfig` | Buildroot の `menuconfig` を開き、終了時に defconfig を保存 |

`kernelconfig` は最初に `defconfig.before` スナップショットを保存します。設定に変更がない場合は、`savedefconfig` をスキップします。

### セキュアブートおよび高度なコマンド

| Command | 説明 |
| --- | --- |
| `dm` | 暗号化または verity パーティション用の device-mapper イメージを作成 |
| `dm-key-gen` | device-mapper キーを生成 |
| `secure-boot-key-gen` | セキュアブートキーを生成 |

### ヘルプの取得（注意点）

```bash
./build.sh help          # Print usage
./build.sh help media    # Show the actual make command used for media
./build.sh help kernel   # Likewise for kernel; also works with uboot/rootfs/sysdrv
```

**落とし穴：** `lunch` の前に `./build.sh --help` を実行すると、ヘルプを表示する代わりに、先にボード選択メニューが開く場合があります。スクリプトは引数を解析する前に `.BoardConfig.mk` をチェックし、リンクが存在しない場合はボード選択を強制します。まず `./build.sh lunch` を実行し、ボードを選択した後で `--help` / `help` によって使用方法の情報を表示できるようにしてください。

`help <component>` は特に有用です。`build.sh` が内部で使用している `make` コマンドと引数が分かるため、手動でビルドを再現したり、問題を診断したりしやすくなります。

## ビルドモード修飾子

コマンドの前に `DEBUG` または `ASAN` を付けて、ビルドモードを変更できます：

```bash
./build.sh DEBUG app     # -O0 -g -ggdb -pg
./build.sh ASAN app      # -O0 -g -ggdb -fsanitize=address -fno-stack-protector -fno-omit-frame-pointer -fsanitize-recover=all
./build.sh app           # Default RELEASE: -Os; strip binaries during packaging
```

RELEASE モードでは、パッケージング時に `strip` が実行されますが、`libpthread*.so*` と `ld-*.so*` については除外されます（gdb の pthread デバッグや valgrind ではシンボルが削除されていない必要があります）。カーネルモジュール（`.ko`）には `--strip-debug` のみが適用されます。DEBUG モードでは strip をスキップし、さらに libc デバッグシンボル（`runtime_lib/libc`、`lib.tar.bz2`）もインストールします。

## インクリメンタルビルド

```bash
./build.sh app                             # Rebuild applications only; fastest when changing application code
./build.sh app && ./build.sh firmware      # Rebuild applications and repackage the images
./build.sh kernel                          # Rebuild the kernel only
./build.sh clean app && ./build.sh app     # Clean and rebuild applications when needed
```

1 つのアプリケーションだけを直接ビルドします（事前に `lunch` を実行）：

```bash
make -C project/app/recamera_notify        # Build one application
make -C project/app/recamera_notify distclean
```

media を個別にビルドします（事前に `lunch` を実行。media は SDK の他の部分とは独立してビルド可能です）：

```bash
make -C media
```

## ビルド成果物

### `output/image/` — フラッシュ可能なイメージ

| File | 説明 |
| --- | --- |
| `download.bin` | フラッシュ通信に使用されるデバイス側プログラム。ボードメモリにのみロードされます |
| `idblock.img` | DDR 初期化を含むローダー |
| `uboot.img` | U-Boot |
| `env.img` | パーティションテーブルとブート引数 |
| `boot.img` | DTB を含むカーネルイメージ |
| `rootfs.img` | root ファイルシステム（ext4） |
| `recovery.img` | リカバリシステム（このボード構成では `RK_ENABLE_RECOVERY=y`） |
| `misc.img` | リカバリブートフラグに使用される misc パーティション。このボード構成では `recovery-misc.img` を使用 |
| `userdata.img` | userdata パーティション（ext4、`/userdata` にマウント） |
| `update.img` | すべてのパーティションを含む完全なパッケージ。アップデートに使用可能 |
| `parameter.txt` | `rkflash.sh` が使用するパーティションテーブルテキスト |

### `output/out/` — 中間成果物

| Directory | 説明 |
| --- | --- |
| `media_out/` | アプリケーションの依存関係として使用される media の `include/` および `lib/` |
| `app_out/` | パッケージング時に rootfs の `bin/lib/share/etc/root` 配下にマージされるアプリケーション成果物 |
| `rootfs_glibc_rv1126b/` | rootfs パッケージング用ディレクトリ |
| `sysdrv_out/` | sysdrv の成果物 |
| `oem/`, `userdata/`, `ramdisk/` | OEM パーティション、userdata、およびリカバリ ramdisk の内容 |
| `S20linkmount`, `S21appinit` | 生成されたパーティションマウントスクリプトおよび OEM アプリケーション起動スクリプト |

## 初回ビルドにかかる想定時間

フルの `./build.sh all` には完全な Buildroot ビルドが含まれるため、CPU コア数やストレージによっては数十分から数時間かかる場合があります。初回実行時には、Buildroot が `sysdrv/tools/board/buildroot/buildroot-2023.02.6.tar.gz` を展開し、多数のパッケージをダウンロード／ビルドするため、**インターネット接続が必須です**。インクリメンタルビルドでは変更されたコンポーネントのみを再ビルドするため、はるかに高速です。

初回ビルドでは、`screen` や `tmux` を使用し、ログを保存することを検討してください：

```bash
./build.sh all 2>&1 | tee build_$(date +%Y%m%d_%H%M).log
```

## ビルド前チェックリスト

- `./setup_build_env.sh` が完了しており、バージョンサマリに必須ツールが `NOT INSTALLED` と表示されていない。
- `./build.sh lunch` で `BoardConfig_Recamera2/...IPC_64BIT.mk` を選択済みであり、`.BoardConfig.mk` シンボリックリンクが存在する。
- `./build.sh info` が `RK_KERNEL_DTS` として `rv1126b-recamera2-v1.dts` を報告している。
- SDK が置かれているパーティションに少なくとも 20 GB の空きディスク容量がある（100 GB 以上を推奨）。
- ボード構成を変更した場合は、先に `./build.sh clean` を実行している。

次に、イメージをボードにフラッシュします： [Flashing and Boot](/ja/recamera_pro_bsp_flash_boot/)。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>