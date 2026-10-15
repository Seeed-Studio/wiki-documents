---
description: OTA およびファクトリーイメージをビルドし、リリースアーカイブを準備し、リリースバージョン記録を検証します。
title: OTA とファームウェアリリース
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - BSP
  - Linux
  - Firmware
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_bsp_ota_release
sku: 10003420
sidebar_position: 11
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/ja/recamera_pro_bsp_ota_release/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# OTA とファームウェアリリース

## バージョンの確認場所

| 場所 | 値 | 説明 |
| --- | --- | --- |
| ボード設定 `RK_OTA_VERSION` | `V1.0.10` | パッケージング時に rootfs 内の `/etc/ota_version` に書き込まれます |
| アーカイブ名 | `recamera-pro-sdk-v1.0.10` | 配布パッケージ名 |
| デバイス `/etc/ota_version` | 上記と同じ | 実行時に報告されるバージョン |
| デバイス `/bin/sdkinfo` | Build Time / SDK Version / BoardConfig | パッケージング時に `build.sh` によって生成されます |
| `project/cfg/BoardConfig_Recamera2/RECAMERA2-IPC-RELEASE-NOTES.md` | 変更履歴 | 現在は `v0.0.1 - init` のみを含みます。**常に最新に保ってください** |

デバイス上でバージョンを確認します：

```bash
# cat /etc/ota_version
# /bin/sdkinfo
```

`/bin/sdkinfo` の出力は次のようになります：

```sh
#!/bin/sh
echo Build Time:  2026-08-28-09:28:00
echo SDK Version: NONE
echo SDK BoardConfig: BoardConfig-EMMC-RK801-RV1126B_V1-IPC_64BIT.mk
```

> 現在のソーススナップショットには `.repo/` が含まれていないため、`sdkinfo` の SDK Version は `NONE` と表示される場合があります。ソースに基づく説明については、[Source Review and Known Issues](/ja/recamera_pro_sdk_source_notes/) を参照してください。デバイスバージョンは `/etc/ota_version` とビルド記録の両方で検証してください。

各リリースごとに、ボード設定内の `RK_OTA_VERSION` と `RECAMERA2-IPC-RELEASE-NOTES.md` の **両方を更新** してください。

## OTA メカニズム

### 関連する設定

```bash
export RK_ENABLE_RECOVERY=y
export RK_MISC=recovery-misc.img
export RK_OTA_RESOURCE="boot.img rootfs.img"
export RK_ENABLE_OTA=y          # Comment: Used for set/get factory reset flag
```

したがって OTA は **`boot` と `rootfs` パーティションのみを更新** します。U-Boot、idblock、env、userdata は更新しません。これは意図的なもので、ブートローダーとパーティションテーブルの更新はリスクが高く、ユーザーデータは保持する必要があるためです。

### OTA パッケージの作成

```bash
./build.sh all        # First create boot.img and rootfs.img under output/image/
./build.sh ota
ls -lh output/image/update_ota.tar
```

### パッケージ内容とアップデートスクリプト

`build_ota()` は `RK_OTA_update.sh` を生成し、イメージとともに `tar -cvhf`（`-h` はシンボリックリンクをたどることに注意）を使って `update_ota.tar` にパックします。スクリプトの eMMC ブランチは次のとおりです：

```sh
#!/bin/sh
set -e
COMMON_DIR=`dirname $(realpath $0)`
TOP_DIR=$(realpath $COMMON_DIR/../..)
cd $TOP_DIR
echo "Start to write partitions"
for image in $(ls /dev/block/by-name)
do
    if [ -f $COMMON_DIR/${image}.img ]; then
        echo "Writing $image..."
        dd if=$COMMON_DIR/${image}.img of=/dev/block/by-name/$image || exit 1
    fi
done
echo "Erase misc partition"
dd if=/dev/zero of=/dev/block/by-name/misc bs=32 count=1 seek=512 || exit 2
```

重要なポイント：

- スクリプトは `/dev/block/by-name/` 配下のすべてのパーティションを反復し、**アーカイブ内に同じ名前のイメージが存在するパーティションに書き込みます**。OTA パッケージにイメージを含めるには、それを `RK_OTA_RESOURCE` に追加します。スクリプト自体を変更する必要はありません。
- 最後に misc パーティション内のフラグ（32 バイトのブロックが 512 オフセット）をクリアし、次回の起動で再度リカバリに入らないようにします。
- `RK_ENABLE_RECOVERY=y` の場合、スクリプトは `-C $OTA_SCRIPT_PATH RK_OTA_update.sh` を使ってパッケージングされます。
- NAND メディアは `flash_eraseall` + `nandwrite -p` を用いる別ブランチを使用します。このボードは eMMC を使用しているため、そのブランチは適用されません。

### OTA フロー（概念）

```text
Application downloads update_ota.tar → extracts it to a directory
        ↓
Write the recovery flag to the misc partition (RK_ENABLE_OTA provides set/get factory-reset flag interfaces)
        ↓
Reboot → U-Boot reads misc → enters recovery
        ↓
Recovery runs RK_OTA_update.sh → writes boot/rootfs with dd → clears the misc flag
        ↓
Reboot into the new system → verify with cat /etc/ota_version
```

リカバリイメージは `./build.sh recovery`（`RK_KERNEL_RECOVERY_DEFCONFIG=rv1126b_ipc_defconfig` と `rv1126b-recovery.config` フラグメント）で個別にビルドします。ramdisk の内容は `output/out/ramdisk/` 配下にあります。

> リカバリと OTA をトリガーする **上位レイヤーのアプリケーションコード** は `recamera_ipc` / `recamera_services`（Web UI の「Firmware Update」と「Factory Reset」アクション）にあります。このページでは SDK 側のパッケージングのみを扱います。具体的な API 呼び出しは、デバイス上でまだ検証する必要があります。

### ファクトリーリセット

`RK_ENABLE_OTA=y` のコメントには、ファクトリーリセットフラグの set/get 関数を提供すると記載されています。実際には、ファクトリーリセットは misc にフラグを書き込み、`userdata` をクリアまたは再作成します。ユーザーデータは `/userdata` 配下にあり、`/userdata/config/rkipc.ini`、`/userdata/config/system/login_lock.json`、`eth0_dns_mode` などが含まれます。ファクトリーリセットにより、これらの設定がリセットされます。

## フルファームウェアイメージ

```bash
./build.sh updateimg     # Package all partition images as output/image/update.img
./build.sh unpackimg     # Extract update.img
```

`update.img` は次のように使用します：

```bash
sudo tools/linux/Linux_Upgrade_Tool/upgrade_tool uf output/image/update.img
```

> `./rkflash.sh update` は、そのブランチがスクリプト内でコメントアウトされているため **動作しません**。代わりに `upgrade_tool uf` を直接使用してください。

## ファクトリーイメージ

```bash
./build.sh factory
ls output/image/factory/
```

これは内部的に `tools/linux/SocToolKit/bin/linux/programmer_image_tool -i output/image/update.img -o output/image/factory/ -t emmc` を呼び出します。イメージタイプは `RK_BOOT_MEDIUM` によって決定されます。NAND メディアでは `-b <blockKB> -p <pageKB> [-s <oobB>]` を使用します。デフォルト値（0x20000 / 2048 / 128）は、`RK_NAND_BLOCK_SIZE`、`RK_NAND_PAGE_SIZE`、`RK_NAND_OOB_SIZE` で上書きします。

## リリースアーカイブ：`save` / `allsave`

```bash
./build.sh save          # Create an archive
./build.sh save xml      # Generate only the repo manifest XML, then exit
./build.sh allsave       # all + save; default when ./build.sh is run without arguments
```

`build_save()` はアーカイブパスを構築し、それを **大文字** に変換します：

```text
IMAGE/<application-scenario>_<boot-medium>_<power-scheme>_<hardware-version>_<YYYYMMDD.HHMM>_RELEASE_TEST/
```

このボード設定では、パスは次のようになります：

```text
IMAGE/IPC_64BIT_EMMC_RK801_RV1126B_V1_20260828.0928_RELEASE_TEST/
├── IMAGES/                        # All contents of output/image/
├── PATCHES/                       # Patches and repo information (__GET_REPO_INFO)
├── DEBUG_FILES/
│   ├── kernel/vmlinux.tar.bz2     # Unstripped kernel for crash analysis
│   ├── media_out.tar.bz2          # Complete media outputs
│   ├── app_out.tar                # Complete application outputs
│   └── uboot/uboot.debug.tar.bz2
└── build_info.txt                 # BUILD-ID: <hostname>:<user> + build_info output
```

> `build_save()` はアーカイブパスを大文字に変換するため、ディレクトリ名は SDK クイックスタートガイドに示されているとおり **`IMAGE/`** になります。
>
> サフィックスは、実際の本番リリースであっても常に `_RELEASE_TEST` です。本番ビルドとテストビルドを区別するには、アーカイブ名を変更するか、その状態を `build_info.txt` に記録してください。

`DEBUG_FILES` はフィールドでの問題調査に不可欠です。**すべての外部リリースについてアーカイブを保持** してください。特に `vmlinux` は、カーネルパニックのコールスタックをデコードするために必要です。

## ビルド情報と設定の記録

`./build.sh info` は次を出力します：

- 現在の `BOARD_CONFIG` の実パス
- 空でないすべての `RK_*` 環境変数（ソート済み）
- sysdrv、media、app コンポーネント SDK からの `make info` 出力
- 電源ドメインチェック結果（`build_check_power_domain`）

後からファームウェアのビルド方法を推測する手間を避けるため、この出力をリリース記録に添付してください。

```bash
./build.sh info > release_info_$(date +%Y%m%d).txt 2>&1
```

`build_info()` はまた、`project/cfg/BoardConfig_Recamera2/RK-RELEASE-NOTES-Recamera2.txt` が存在する場合、それを SDK ルートにリンクまたはコピーしようとします。現在のファイル名は `RECAMERA2-IPC-RELEASE-NOTES.md` であり、スクリプトが検索する `RK-RELEASE-NOTES-<board-name>.txt` パターンと **一致しない** ため、自動的には昇格されません。ルートレベルの `RECAMERA2-IPC-RELEASE-NOTES.md` はそれへのシンボリックリンクです。

## リリースチェックリスト

### ビルド前

- [ ] `git` / 社内リポジトリを対象タグに同期し、作業ツリーがクリーンであることを確認します。
- [ ] ボード設定内の `RK_OTA_VERSION` を更新します。
- [ ] このリリースの変更内容で `RECAMERA2-IPC-RELEASE-NOTES.md` を更新します（現在は `v0.0.1 - init` のみを含みます。継続的にメンテナンスしてください）。
- [ ] `./build.sh lunch` を実行し、`BoardConfig_Recamera2/BoardConfig-EMMC-RK801-RV1126B_V1-IPC_64BIT.mk` を選択します。
- [ ] `./setup_build_env.sh --check` を実行し、ツールが不足していないことを確認します。

### ビルド

- [ ] バージョンまたはボード設定を切り替える際は `./build.sh clean` を実行します。
- [ ] `./build.sh allsave` を実行し、ビルドログを保存します。
- [ ] `output/image/` 配下で、`boot.img` が 11 M 未満、`rootfs.img` が 3 G 未満であることを確認します。
- [ ] `IMAGE/.../build_info.txt` が生成されていることを確認します。

### 検証

- [ ] `sudo ./rkflash.sh all` でクリーンなボードにフラッシュし、バナーまで起動することを確認します。
- [ ] `/bin/sdkinfo` 内の BoardConfig 名を確認し、`cat /etc/ota_version` が新しいバージョンと一致することを検証します。
- [ ] ビデオ：Web UI にビデオが表示され、go2rtc WebRTC が `:8555` でストリームを受信できることを確認します。
- [ ] AI 推論：NPU モデルがロードされ、`recamera_notify` がイベントを受信して転送することを確認します。
- [ ] オーディオ：`ai_debug` で 4 チャンネルの録音ができ、スピーカーから音声が出力されることを確認します。
- [ ] OTA：前のリリースから `update_ota.tar` を使用してアップグレードし、`/userdata` の設定が保持されることを確認します。
- [ ] ファクトリーリセット：デバイスがデフォルト設定に戻ることを確認します。
- [ ] 安定性：`media/samples/example/test/` および `recamera_utils/stress_test/` 配下の関連ストレステストを実行します。
- [ ] ウォッチドッグ：長時間実行テストでリセットが発生しないことを確認します（`S15watchdog`、タイムアウト 30 秒）。

### アーカイブ

- [ ] `DEBUG_FILES/` を含む `IMAGE/` ディレクトリ全体を社内アーティファクトリポジトリにアップロードします。
- [ ] `update.img`、`update_ota.tar`、バージョン、および SHA-256 をまとめて記録します。
- [ ] `./build.sh info` の出力をリリース記録に添付します。

## コマンド クイックリファレンス

| コマンド | 出力 |
| --- | --- |
| `./build.sh firmware` | `output/image/` 配下のパーティションイメージ |
| `./build.sh updateimg` | `output/image/update.img` |
| `./build.sh ota` | `output/image/update_ota.tar` |
| `./build.sh factory` | `output/image/factory/` |
| `./build.sh recovery` | `output/image/recovery.img` |
| `./build.sh save` | `IMAGE/<...>_RELEASE_TEST/` |
| `./build.sh info` | 現在の設定を表示（ファイルは書き込まない） |
| `./build.sh unpackimg` | `update.img` を展開 |

## 関連ドキュメント

- `docs/en/Rockchip_User_Guide_SDK_Application_And_Synchronization_EN.pdf`: SDK の適用と同期（Rockchip に SDK 更新をリクエスト）
- `docs/en/Rockchip_User_Guide_Bug_System_EN.pdf`: Rockchip への不具合報告
- `docs/zh/ipc/Rockchip_RV1126B_Linux_IPC_SDK_Release_V1.0.0_20250620_CN.pdf`: アップストリーム SDK リリースノート
- `project/cfg/BoardConfig_IPC/RK-RELEASE-NOTES-IPC.txt`: Rockchip IPC リファレンスボード向けのリリースノート形式；`RECAMERA2-IPC-RELEASE-NOTES.md` を管理する際のテンプレートとして使用

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