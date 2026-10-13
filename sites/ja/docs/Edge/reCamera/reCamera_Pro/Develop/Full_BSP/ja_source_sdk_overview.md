---
description: フル BSP ソースパッケージの概要、コンポーネントの境界、およびアプリケーション開発とシステム開発の違いについて説明します。
title: フルソースパッケージ概要
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - BSP
  - Linux
  - Firmware
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_bsp_source_overview
sku: 10003420
sidebar_position: 1
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/ja/recamera_pro_bsp_source_overview/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# フルソースパッケージ概要

## 受け取るもの

`recamera-pro-sdk-v1.0.10` は、Rockchip RV1126B Linux IPC SDK をベースにした**フル BSP ソースリリース**です。Seeed の Recamera2 ボード設定および製品アプリケーションが含まれています。また、アプリケーション開発に使用されるいくつかのツールやコンポーネントも含まれますが、展開後すぐにすべての API ライブラリがビルド済みで利用可能なアプリケーション SDK として扱うべきではありません。

アプリケーション開発用 SDK は通常、すぐに使えるクロスコンパイラ、ターゲット sysroot、ヘッダ、事前ビルド済みライブラリ、API ドキュメント、およびサンプルに重点を置きます。このソースパッケージにはクロスツールチェーンとメディアライブラリのソースが含まれています。クリーンな展開状態では `output/` 配下にビルド成果物は含まれないため、メディアや Buildroot ライブラリを必要とするアプリケーションでは、まず関連コンポーネントをビルドして sysroot を用意する必要がある場合があります。**これは、すべてのアプリケーションで U-Boot、カーネル、rootfs のフルビルドが必須という意味ではありません。**

このソースパッケージは、次の 3 種類の作業をサポートします。

- **ファームウェアのビルドまたは変更：** 統一されたビルドエントリポイントを使用して U-Boot、Linux、Buildroot、メディアライブラリ、アプリケーションをコンパイルし、フラッシュ可能なイメージを生成します。
- **デバイス側アプリケーションの開発：** 同梱のクロスツールチェーンを使用し、必要に応じてターゲット sysroot、メディアライブラリ、AI ライブラリを取得します。単純な C プログラムであれば、最初にシステム全体を再ビルドする必要はありません。
- **製品ソフトウェアのカスタマイズ：** `recamera_ipc`、`recamera_web`、`recamera_services` などのアプリケーションやシステム設定を変更します。

これは、事前ビルド済みファームウェアパッケージでも、Buildroot のみのパッケージでもありません。展開後のサイズは約 12 GB です。

## ハードウェアおよびソフトウェア仕様

| 項目 | 値 | 出典 |
| --- | --- | --- |
| SoC | Rockchip RV1126B (`RK_CHIP=rv1126b`, `RK_ARCH=arm64`) | ボード設定 |
| PMIC | RK801 | ボード設定ファイル名 |
| ブートメディア | eMMC (`RK_BOOT_MEDIUM=emmc`) | ボード設定 |
| カーネル | Linux 6.1.157 ("Curry Ramen") | `sysdrv/source/kernel/Makefile` |
| カーネル defconfig | `rv1126b_ipc_defconfig` + 4 フラグメント | ボード設定 |
| デバイスツリー | `rv1126b-recamera2-v1.dts` | ボード設定 |
| U-Boot defconfig | `rv1126b_recamera2_defconfig` (`CONFIG_BAUDRATE=1500000`) | `sysdrv/source/uboot/u-boot/configs/` |
| ルートファイルシステム | Buildroot 2023.02.6、defconfig `recamera2_buildroot_aarch64_defconfig` | ボード設定 |
| ビルドツール | ボード設定で指定された Rockchip BSP ビルドツール | `tools/`, `project/build.sh` |
| カメラセンサ | SC450AI / SC850SL（IQ ファイルを同梱。カーネルは GC2053、IMX415、SC200AI など他のセンサ用モジュールもビルド） | `RK_CAMERA_SENSOR_IQFILES`, `rv1126b-recamera2.config` |
| Wi-Fi / Bluetooth | `RK_ENABLE_WIFI_CHIP=AP6XXX`; Bluetooth 有効 | ボード設定 |
| リファレンスアプリケーション種別 | `RK_APP_TYPE=RKIPC_RV1126B_RECAMERA2` | ボード設定 |
| デバイスモデル文字列 | `Rockchip RV1126B RECAMERA PRO Board` | `rv1126b-recamera2-v1.dts` |

## ディレクトリマップ

```text
recamera-pro-sdk-v1.0.10/
├── build.sh -> project/build.sh         # unified build entry point
├── setup_build_env.sh                   # one-shot build environment installer
├── rkflash.sh -> project/rkflash.sh     # USB flashing helper
├── quick_start_cn.md / quick_start_en.md# Seeed quick-start guides (upstream material for this Wiki)
├── readme_cn.txt / readme_en.txt        # original Rockchip readme files
├── docs/                                # 90 Rockchip PDF manuals and copyright notices
├── media/          (1.7 G)              # multimedia and AI runtime sources
├── project/        (637 M)              # build scripts, board configuration, and applications
├── sysdrv/         (6.9 G)              # U-Boot / Kernel / MCU / prebuilt drivers
└── tools/          (1.3 G)              # cross-toolchains, flashing, and packaging tools
```

### `sysdrv/` — システムレイヤ

- `source/uboot/`: rkbin DDR 初期化ファームウェアを含む U-Boot ソース。
- `source/kernel/`: Linux 6.1.157 のソース。
- `source/mcu/`: MCU 側コプロセッサ用の RT-Thread ファームウェア。必要な場合のみビルドします。
- `drv_ko/` (246 M): 事前ビルド済みカーネルモジュール。
- `tools/board/buildroot/`: **Buildroot は `buildroot-2023.02.6.tar.gz` として提供され**、最初の rootfs ビルド時に `sysdrv/source/buildroot/buildroot-2023.02.6/` に展開されます。このディレクトリには `recamera2_buildroot_aarch64_defconfig`、`busybox.config`、各種パッチも含まれます。

> アーカイブが展開される前に `sysdrv/source/` 配下に Buildroot ディレクトリが存在しないのは正常です。

### `media/` — マルチメディアとアルゴリズム

| ディレクトリ | 目的 |
| --- | --- |
| `mpp/` | Rockchip Media Process Platform。H.264/H.265/JPEG のエンコードおよびデコード |
| `rockit/` | 統一された VI/VPSS/VENC/AI/AO/RGN インターフェースを持つ MPI ランタイム。ビデオパイプラインのメインエントリポイント |
| `isp/` | `camera_engine_rkaiq`、3A および IQ チューニング（`iqfiles/isp35/` を含む） |
| `rga/` | スケーリング、フォーマット変換、回転用の 2D アクセラレータ |
| `iva/` | ROCKIVA ビジョンアルゴリズムライブラリ（`librockiva-rv1126b-Linux` および `models/rockiva_data_rv1126b` を含む） |
| `avs/` | アラウンドビュー合成 |
| `alsa-lib/` | ALSA ユーザ空間ライブラリ |
| `rknn-llm-mk/` | RKLLM SDK：rkllm-runtime、サンプル、RKNN Runtime と `rknn_api.h`、さらに NPU ドライバパッケージ |
| `common_algorithm/` | 共通アルゴリズム |
| `libdrm/`, `libv4l/` | ユーザ空間ディスプレイおよび V4L2 ライブラリ |
| `prerecord/`, `rockauto/`, `sysutils/`, `third_libs/` | プリレコード、自動車向けコンポーネント、システムユーティリティ、freetype/libjpeg/libpng/zlib などのサードパーティライブラリ |
| `samples/` | `example/` にはデモとストレステスト、`simple_test/` には最小限の単一ファイルサンプルが含まれます |

### `project/` — ビルドフレームワークとアプリケーション

- `build.sh`: sysdrv → media → app → ファームウェアパッケージングを駆動する統一エントリポイント。
- `cfg/`: 5 つの製品シリーズディレクトリにまたがる 50 個の `BoardConfig-*.mk` ファイル。**`cfg/BoardConfig_Recamera2/` 内の 2 つのファイルのみが reCamera Pro に適用されます：** 32-bit の `...-IPC.mk` と 64-bit の `...-IPC_64BIT.mk` 設定です。
- `cfg-all-items-introduction.txt`: すべての `RK_*` 設定オプションの説明。
- `app/`: すべてのアプリケーション。詳細は [reCamera 上位レイヤサービスアーキテクチャ](/ja/recamera_pro_bsp_services/) を参照してください。
- `scripts/`, `make_meta/`: パッケージングおよびメタヘッダ生成スクリプト。

### `tools/` — ホスト PC 用ツール

- `linux/toolchain/`: BSP ビルドに使用される同梱ツールチェーン。通常のアプリケーション開発には、Seeed の [アプリケーションクロスコンパイル SDK](https://github.com/Seeed-Projects/recamera_pro_toolchain) を使用してください。フルソースパッケージから手動でツールチェーンを選択する必要はありません。
- `linux/Linux_Upgrade_Tool/`: `upgrade_tool` v2.26、`88-rockusb.rules`、`config.ini`、およびコマンドラインユーザーガイド PDF。
- `linux/Linux_Pack_Firmware/`: ファームウェアパッケージングツール。
- `linux/SocToolKit/`, `linux/programmer_image_tool/`: GUI フラッシュおよびファクトリーイメージツール。

## コンポーネント同士の連携

`sysdrv`、`media`、`project/app` にはそれぞれ独自のビルドエントリポイントがありますが、3 つの独立した製品というわけではありません。フルビルドは依存関係の順序で `./build.sh` によって駆動されます。

```text
sysdrv(uboot + kernel + rootfs) → media → app → firmware(packaging) → output/image/
```

アプリケーションビルドは、ボード設定、Buildroot の出力、およびアプリケーション固有の依存関係を使用します。Rockchip メディアインターフェースを使用するアプリケーションは、media によって生成されるヘッダとライブラリ（`output/out/media_out/{include,lib}`）にも依存します。最初のフルビルドについては、[フルファームウェアビルドワークフロー](/ja/recamera_pro_bsp_full_build/) に従ってください。単純なアプリケーションを開発する場合、最初に完全なファームウェアイメージを書き込む必要はありません。そのアプリケーションの依存関係に必要なビルド成果物だけを用意してください。

この依存関係の順序を覚えておいてください。

1. `sysdrv` はカーネル、ルートファイルシステム、およびベースとなるターゲット環境を提供します。
2. `media` はメディア、ISP、画像処理、および一部の AI ライブラリをビルドします。
3. `project/app` はターゲットシステム上で動作する製品アプリケーションをビルドします。
4. `firmware` は関連する成果物をイメージにパッケージングします。

新しいユーザーは、自分の目的に応じて Wiki ホームページから読み進めるパスを選択してください。すべてのトピックを最初から最後まで読む必要はありません。

## ビルド成果物の配置場所

| パス | 内容 |
| --- | --- |
| `output/image/` | フラッシュ可能なイメージ：`download.bin`、`idblock.img`、`uboot.img`、`env.img`、`boot.img`、`rootfs.img`、`recovery.img`、`misc.img`、`userdata.img`、`update.img` |
| `output/out/media_out/` | アプリケーションビルドで使用される media の `include/` および `lib/` ディレクトリ |
| `output/out/app_out/` | アプリケーション成果物。パッケージング時に `bin/lib/share/etc/root` 配下の rootfs に統合されます |
| `output/out/rootfs_glibc_rv1126b/` | rootfs パッケージングディレクトリ。その内容から `rootfs.img` が作成されます |
| `output/out/sysdrv_out/` | sysdrv の成果物 |
| `IMAGE/` | `./build.sh save` / `allsave` によって作成されるアーカイブ（イメージ、パッチ、ビルド情報） |

> クリーンな SDK 展開状態では `output/` は存在せず、ビルド中に生成されます。

## ドキュメント索引（`docs/`）

`docs/` ディレクトリには、言語とトピックごとに分類された 90 個の PDF ファイルが含まれています。

| トピック | 代表的なドキュメント | 読むタイミング |
| --- | --- | --- |
| `ipc/` | `Rockchip_RV1126B_Quick_Start_Linux_IPC_SDK_CN.pdf`, `Rockchip_Developer_Guide_Linux_RKAI_CN.pdf` | 最初のステップと RKAI インターフェース |
| `media/` | `Rockchip_Developer_Guide_Linux_Rockit_Runtime_CN.pdf`, `Rockchip_Developer_Guide_MPI_C_CN.pdf`, `..._Linux_AOV_CN.pdf`, `..._Linux_DVR_CN.pdf`, `..._EIS_CN.pdf` | ビデオパイプラインの開発 |
| `isp/` | `Rockchip_Tuning_Guide_ISP35_CN.pdf`, `Rockchip_Developer_Guide_Camera_Driver_CN.pdf`, `Rockchip_Driver_Guide_VI_CN.pdf` | 画像チューニングとセンサ変更 |
| `audio/` | `Rockchip_Developer_Guide_Linux_RV_Series_ACodec_CN.pdf`, `..._VQE_Introduction_CN.pdf`, `..._Microphone_Array_TEST_CN.pdf` | オーディオ開発 |
| `bsp/` | GPIO/I2C/SPI/PWM/USB/SDMMC/Thermal/Suspend/CAN_FD など | 周辺ドライバ |
| `npu_iva/` | `Rockchip_Developer_Guide_ROCKIVA_SDK_CN.pdf` | ビジョンアルゴリズム |
| `security/` | OTP、TEE、Crypto/HWRNG | セキュアブートと暗号 |
| `en/` ルートディレクトリ | `Rockchip_User_Guide_SDK_Application_And_Synchronization_EN.pdf`, `Rockchip_User_Guide_Bug_System_EN.pdf` | Rockchip への不具合報告 |

SDK のルートには、`Rockchip_RV1126B_Quick_Start_Linux_IPC_SDK_CN.pdf` や `Rockchip_RV1126B_Quick_Start_RT-Thread_MCU_CN.pdf` など、よく使用されるドキュメントへのシンボリックリンクも含まれています。

アプリケーションレベルのドキュメントは Markdown 形式でも提供されています：`project/app/recamera_ipc/docs/Rockchip_Developer_Guide_Linux_RKIPC_CN.md`（RKIPC 開発ガイド V1.7.6）および `project/app/rkai/rkai/doc/Rockchip_Developer_Guide_Linux_RKAI_CN.md`。

完全な一覧については、[用語集、ドキュメントマップ、および著作権](/ja/recamera_pro_sdk_reference/)を参照してください。

## アプリケーション SDK と BSP ソースの違い

| 作業内容 | 通常必要なもの | このパッケージ内での場所 |
| --- | --- | --- |
| 通常の C/C++ または RKNN デバイス側アプリケーションをコンパイルする | クロスコンパイラ、すぐに使えるターゲット sysroot、一般的な開発ライブラリ、およびサンプル | アプリケーション開発向けに厳選されたツールチェーンと sysroot を提供する [reCamera Pro Cross-Compilation SDK](https://github.com/Seeed-Projects/recamera_pro_toolchain) の使用を推奨します |
| フルソースパッケージ内でアプリケーションをビルドする | 必要に応じて生成されるツールチェーンに加え、メディアライブラリまたは Buildroot ステージング | [最初のアプリ](/ja/recamera_pro_bsp_app_integration/)から始めてください。このパッケージは、アプリケーションビルドフレームワークの変更や製品統合の調査にも有用です |
| Rockchip のビデオ、ISP、オーディオ、または NPU インターフェースを使用する | API ヘッダ、対応するライブラリ、ランタイムファームウェア／ドライバ、およびサンプル | SDK はソースコード、一部のビルド済みライブラリ、およびサンプルを提供します。クリーンな展開には `output/out/media_out/` は含まれません。必要に応じてメディアをビルドしてください |
| Buildroot によって提供されるサードパーティライブラリを使用する | ターゲット rootfs に対応する sysroot とライブラリ | これはフル BSP アプリケーション統合の一部です。Buildroot ステージング領域は通常、rootfs をビルドした後に利用可能になります |
| カーネル、ドライバ、DTS、または rootfs を変更する | BSP ソース、設定、および完全なビルドワークフロー | `sysdrv/`、`project/`、および `./build.sh` によって提供されます。[完全なファームウェアビルド](/ja/recamera_pro_bsp_full_build/)を参照してください |

アプリケーション開発者は、基本的にアプリケーションに特化したクロスコンパイル SDK を使用するべきです。フルソースパッケージは、ソースレベルでの製品および BSP 作業向けです。その中でアプリケーションを開発する場合でも、依存関係に必要なコンポーネントのみをビルドしてください。完全なファームウェアを生成または変更する必要がある場合にのみ、完全な BSP ワークフローを使用してください。

## 含まれていないもの

- `.repo/` ディレクトリはありません：これはソーススナップショットであるため、`readme_en.txt` に記載されている `repo sync` 手順は適用されません。
- `output/` や `IMAGE/` はありません：イメージは自分でビルドする必要があります。
- RKNN-Toolkit2 は含まれていません：PC 側の ONNX から RKNN への変換ツールには、ホスト上に別途 Python 環境が必要です。
- Windows 用書き込みユーティリティ RKDevTool は含まれていません：`tools/` には Linux 用ツールのみが含まれます。

## 次のステップ

- このパッケージが初めてですか？[ダウンロードと展開](/ja/recamera_pro_bsp_download/)から始めてください。
- ビルドの準備はできましたか？[ビルド環境のセットアップ](/ja/recamera_pro_bsp_build_environment/)に進んでください。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択できる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>