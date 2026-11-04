---
description: 自作したファームウェアイメージを reCamera Pro に書き込み、ブートプロセスを検証します。
title: フラッシュとブート
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - BSP
  - Linux
  - Firmware
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_bsp_flash_boot
sku: 10003420
sidebar_position: 6
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/ja/recamera_pro_bsp_flash_boot/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# フラッシュとブート

## パーティションテーブル

reCamera Pro のパーティションは、ボード設定内の `RK_PARTITION_CMD_IN_ENV` によって定義されています：

```text
32K(env),512K@32K(idblock),4M@1M(uboot),64K(misc),10M(recovery),11M(boot),3G(rootfs),-(userdata),
```

| パーティション | サイズ | オフセット | 内容 | イメージファイル |
| --- | --- | --- | --- | --- |
| `env` | 32 K | 0 | パーティションテーブル + ブート引数 | `env.img` |
| `idblock` | 512 K | 32 K | ローダー（DDR 初期化を含む） | `idblock.img` |
| `uboot` | 4 M | 1 M | U-Boot | `uboot.img` |
| `misc` | 64 K | — | リカバリーブートフラグなど | `misc.img`（このボードでは `recovery-misc.img` を使用） |
| `recovery` | 10 M | — | リカバリーシステム | `recovery.img` |
| `boot` | 11 M | — | カーネル + DTB | `boot.img` |
| `rootfs` | 3 G | — | ルートファイルシステム、ext4 | `rootfs.img` |
| `userdata` | 残りの領域 | — | ext4、`/userdata` にマウント | `userdata.img` |

ファイルシステムタイプは `RK_PARTITION_FS_TYPE_CFG=rootfs@IGNORE@ext4,userdata@/userdata@ext4` によって指定されます：`rootfs` は fstab で明示的にマウントされておらず（カーネルが `root=PARTUUID=` でマウント）、`userdata` は `/userdata` にマウントされます。

カーネルコマンドラインは、`rv1126b-recamera2-v1.dts` の `chosen/bootargs` で定義されています：

```text
earlycon=uart8250,mmio32,0x20810000 console=ttyFIQ0 rw root=PARTUUID=614e0000-0000 rootfstype=ext4 rootwait snd_soc_core.prealloc_buffer_size_kbytes=16 coherent_pool=32K
```

CMA サイズは `RK_BOOTARGS_CMA_SIZE="8M"` によって制御されます。

## ホストにデバイスを認識させる（初回のみのセットアップ）

フラッシュツールは USB Rockusb 経由で通信するため、udev ルールが必要です（VID `2207` は Rockchip）：

```bash
sudo cp tools/linux/Linux_Upgrade_Tool/88-rockusb.rules /etc/udev/rules.d/
sudo udevadm control --reload-rules
sudo udevadm trigger
```

`tools/linux/SocToolKit/` には `88-rockusb.rules` と `38-disk.rules` も含まれています。GUI ツールを使用する場合は両方インストールしてください。

## フラッシュモードへ入る

`upgrade_tool` がデバイスを検出するには、デバイスを **Maskrom** または **Loader** モードにする必要があります：

- **Maskrom:** デバイスの電源を完全に切り、電源を入れ直す際に Maskrom/Recovery ボタンを押し続けます（または eMMC CLK を GND にショートさせます）。ホスト側では `lsusb` に `2207:xxxx` のような Rockchip デバイスが表示されるはずです。
- **Loader:** 動作する U-Boot がインストールされている場合は、`upgrade_tool db <loader>` を実行するか、U-Boot のカウントダウンを割り込んで Loader モードに入ります。

> reCamera Pro 上の正確なボタン位置とシルク印刷については、ハードウェアマニュアルまたは回路図を確認してください。ここに詳細を追記する前に、実機で必ず確認してください。

デバイスが検出されているか確認します：

```bash
sudo tools/linux/Linux_Upgrade_Tool/upgrade_tool ld
```

`ListDevice` にフラッシュモードのデバイスが表示されるはずです。

## `rkflash.sh` でフラッシュする（推奨）

SDK ルートにある `./rkflash.sh` スクリプトは `upgrade_tool` をラップしており、イメージパスは `output/image/` 以下に固定されています。

```bash
sudo ./rkflash.sh              # Same as all: flash every partition
sudo ./rkflash.sh all
sudo ./rkflash.sh loader
sudo ./rkflash.sh uboot
sudo ./rkflash.sh boot         # Flash the kernel only
sudo ./rkflash.sh rootfs       # Flash the root filesystem only
sudo ./rkflash.sh userdata
sudo ./rkflash.sh recovery
sudo ./rkflash.sh misc
sudo ./rkflash.sh trust
sudo ./rkflash.sh rd           # Reboot the device only
sudo ./rkflash.sh erase        # Erase the entire flash
```

2 番目の引数でカスタムイメージパスを指定できます：

```bash
sudo ./rkflash.sh boot /path/to/my_boot.img
```

`all` モードの実際のコマンドシーケンス（`project/rkflash.sh` を参照）は次のとおりです：

```text
upgrade_tool ul -noreset download.bin     # Download loader without resetting
upgrade_tool di -p parameter.txt          # Write partition table
upgrade_tool di -uboot uboot.img
upgrade_tool di -m misc.img
upgrade_tool di -r recovery.img
upgrade_tool di -b boot.img
upgrade_tool di -rootfs rootfs.img
upgrade_tool di -userdata userdata.img
upgrade_tool rd                           # Reset and reboot
```

**重要な落とし穴が 2 つあります：**

- `rkflash.sh` 内の `update.img` をフラッシュする分岐は**コメントアウトされている**ため、`./rkflash.sh update` は何もしません。フルパッケージをフラッシュするには、`upgrade_tool uf` を直接実行してください。
- `all` モードは `env.img` をフラッシュしません。`parameter.txt` のみを書き込みます。`RK_PARTITION_CMD_IN_ENV` を変更した場合は、`upgrade_tool di -p env.img` を手動で実行するか、`uf` で `update.img` をフラッシュしてください。

## `upgrade_tool` を直接使う

ツールバージョン v2.26（`tools/linux/Linux_Upgrade_Tool/revision.txt`）。主なコマンドは次のとおりです：

| コマンド | 用途 |
| --- | --- |
| `ld` | ListDevice：フラッシュモードのデバイスを一覧表示 |
| `cd <n>` | ChooseDevice：複数接続されている場合にデバイスを選択 |
| `ul <loader> [-noreset] [EMMC]` | UpgradeLoader：ローダーをメモリにダウンロード |
| `db <loader>` | DownloadBoot |
| `uf <update.img> [-noreset]` | UpgradeFirmware：フルパッケージをフラッシュ |
| `di -p [parameter.txt]` | パーティションテーブルを書き込み |
| `di -b [boot.img]` | boot パーティションを書き込み |
| `di -rootfs [rootfs.img]` | rootfs パーティションを書き込み |
| `di -u [userdata.img]` | userdata パーティションを書き込み |
| `di -r [recovery.img]` | recovery を書き込み |
| `di -m [misc.img]` | misc を書き込み |
| `pl` | PartitionList：デバイスのパーティションテーブルを読み出し |
| `ef [loader|firmware]` | EraseFlash：フラッシュを消去 |
| `rd` | ResetDevice：再起動 |
| `sn [serial-number]` / `rsn` | シリアル番号の書き込み / 読み出し（`project/app/recamera_utils/sn_tool` を使用） |
| `sfi [firmware]` | ShowFirmwareInfo：ファームウェア情報を表示 |
| `exf [firmware|loader] [dir]` | ExtractFirmware：イメージまたはローダーを展開 |
| `gpt [parameter] [out.gpt]` | パーティションテーブルから GPT を生成 |
| `rl [startSec] [len] [file]` / `wl [startSec] [sizeSec] [file]` | LBA データの読み出し / 書き込み |

例：

```bash
cd tools/linux/Linux_Upgrade_Tool
sudo ./upgrade_tool ld
sudo ./upgrade_tool ul ../../../output/image/download.bin
sudo ./upgrade_tool uf ../../../output/image/update.img
sudo ./upgrade_tool rd
```

コマンドの詳細については、同じディレクトリ内の `命令行开发工具使用文档.pdf` と `readme.txt` を参照してください。

## GUI でのフラッシュ

- **Linux:** `tools/linux/SocToolKit/SocToolKit`（Qt GUI。事前に `38-disk.rules` と `88-rockusb.rules` をインストールしてください）。
- **Windows:** Rockchip RKDevTool を別途ダウンロードしてください。SDK には Windows 用ツールは**含まれていません**。

## ファクトリーイメージを作成する

```bash
./build.sh factory
```

これは `tools/linux/SocToolKit/bin/linux/programmer_image_tool` を使用して、`output/image/update.img` を `output/image/factory/` に展開します。イメージタイプは `RK_BOOT_MEDIUM` から選択され（このボードでは `emmc` に設定）、NAND メディアの場合はブロック / ページ / OOB パラメータも渡されます。これらは `RK_NAND_BLOCK_SIZE` などの変数で上書きできます。

## SD カードアップグレードイメージ

```bash
./build.sh sdcard_upgrade
```

出力ディレクトリは `output/image/sdcard_upgrade/` です。

> **このボード設定では利用できません：** `sdcard_upgrade` には `RK_SDCARD_UPGRADE_UBOOT_DEFCONFIG` と `..._FRAGMENT` が必要ですが、どちらの変数も `BoardConfig_Recamera2/BoardConfig-EMMC-RK801-RV1126B_V1-IPC_64BIT.mk` では定義されていません。`build.sh` 内の `check_config` は `return 0` でこのコマンドを黙ってスキップします。SD カードアップグレードを有効にするには、ボード設定に両方の変数（通常は `RK_SDCARD_UPGRADE_SCREEN_ENABLE` も）を追加してください。

## ブートフローとリカバリー

- `RK_ENABLE_RECOVERY=y`, `RK_MISC=recovery-misc.img`: misc パーティションにはリカバリーブートフラグが含まれます。
- リカバリーは、フラグを misc に書き込んで再起動するか、上位アプリケーション（OTA フロー）からトリガーすることで入ります。
- `RK_OTA_RESOURCE="boot.img rootfs.img"`: OTA は boot と rootfs パーティションのみを更新します。
- ファクトリーリセットは、`RK_ENABLE_OTA=y` によって提供されるフラグメカニズムを使用します（ボード設定のコメントには「Used for set/get factory reset flag」とあります）。

詳細は [OTA とファームウェアリリース](/ja/recamera_pro_bsp_ota_release/) を参照してください。

## フラッシュ後の検証

電源投入後にシリアルコンソールへ接続します（1500000 8N1。[デバイスアクセスとデバッグ](/ja/recamera_pro_bsp_device_debug/) を参照）。U-Boot → カーネル → rootfs のブートログに続いて、`overlay-buildroot-banner/etc/motd` からの reCamera の ASCII バナーが表示されるはずです。

シェルを開いたら、次を確認します：

```bash
# cat /proc/version              # Kernel 6.1.157
# uname -m                       # aarch64
# cat /proc/cmdline              # Should match bootargs in the DTS
# cat /etc/os-release            # Buildroot version information
# ls /oem /userdata              # Confirm partitions are mounted
# cat /run/board_id.env          # Baseboard / expansion-board detection result
```

## よくある問題

| 症状 | 原因 | 解決策 |
| --- | --- | --- |
| `upgrade_tool ld` にデバイスが表示されない | udev ルールがない / フラッシュモードになっていない / root で実行していない | ルールをインストールして `udevadm trigger` を実行し、Maskrom モードを確認し、`sudo` で実行します |
| `upgrade_tool` 実行時に `Permission denied` が出る | 展開時に実行権限が失われた | `chmod +x tools/linux/Linux_Upgrade_Tool/upgrade_tool` を実行します |
| フラッシュ後にシリアル出力がなく、システムが起動しない | ローダー / idblock がフラッシュされていない、またはバージョンが一致していない | `rkflash.sh all` を再度実行し、`download.bin` と `idblock.img` が同じビルドから生成されたことを確認します |
| rootfs マウント中にカーネルパニックが発生する | `boot.img` と `rootfs.img` が別々のビルドから来ている | すべてを再ビルドして再フラッシュするか、少なくとも boot と rootfs を一緒にフラッシュします |
| パーティションサイズ変更後に問題が発生する | env / parameter が更新されていない | `env.img`（`di -p`）を個別にフラッシュするか、`uf` で `update.img` をフラッシュします |
| `./rkflash.sh update` が何もしない | 分岐がコメントアウトされている | `upgrade_tool uf output/image/update.img` を使用します |

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>