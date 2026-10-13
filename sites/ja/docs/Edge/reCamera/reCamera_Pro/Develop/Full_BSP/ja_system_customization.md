---
description: DTS、カーネル、Buildroot、オーバーレイ、パーティション、および MCU 設定を通じてシステムをカスタマイズします。
title: システムカスタマイズ
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - BSP
  - Linux
  - Firmware
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_bsp_system_customization
sku: 10003420
sidebar_position: 9
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/ja/recamera_pro_bsp_system_customization/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# システムカスタマイズ

このページでは、デバイスツリー、カーネル設定、Buildroot パッケージ、オーバーレイファイルの上書きという、4 つの一般的なシステムカスタマイズ手順を扱います。設定オプションの完全な一覧については、`project/cfg-all-items-introduction.txt` を参照してください。

## ボード設定ファイル

reCamera Pro の設定は次の場所にあります：

```text
project/cfg/BoardConfig_Recamera2/
├── BoardConfig-EMMC-RK801-RV1126B_V1-IPC.mk        # 32-bit
├── BoardConfig-EMMC-RK801-RV1126B_V1-IPC_64BIT.mk  # 64-bit (recommended)
├── RECAMERA2-IPC-RELEASE-NOTES.md
└── overlay/                                        # 15 overlay directories
```

`./build.sh lunch` 実行後、SDK ルートの `.BoardConfig.mk` は選択されたファイルへのシンボリックリンクになります。**実際の設定ファイルを編集**してください。変更はシンボリックリンクを通じて反映されます。

64 ビット設定における主な項目：

```bash
export RK_ARCH=arm64
export RK_CHIP=rv1126b
export RK_TOOLCHAIN_CROSS=aarch64-rockchip1240-linux-gnu
export RK_BOOT_MEDIUM=emmc
export RK_UBOOT_DEFCONFIG=rv1126b_recamera2_defconfig
export RK_UBOOT_DEFCONFIG_FRAGMENT="rk-emmc.config rv1126b-ipc.config"
export RK_UBOOT_RKBIN_MINIALL_INI_FILE=RV1126BMINIALL_IPC.ini
export RK_KERNEL_DEFCONFIG=rv1126b_ipc_defconfig
export RK_KERNEL_DEFCONFIG_FRAGMENT="rv1126b-display.config rv1126b-sdiowifi.config rv1126b-bt.config rv1126b-recamera2.config"
export RK_KERNEL_DTS=rv1126b-recamera2-v1.dts
export RK_KERNEL_RC_DTO=y
export RK_BUILDROOT_DEFCONFIG=recamera2_buildroot_aarch64_defconfig
export RK_APP_TYPE=RKIPC_RV1126B_RECAMERA2
export RK_PARTITION_CMD_IN_ENV="32K(env),512K@32K(idblock),4M@1M(uboot),64K(misc),10M(recovery),11M(boot),3G(rootfs),-(userdata),"
export RK_PARTITION_FS_TYPE_CFG=rootfs@IGNORE@ext4,userdata@/userdata@ext4
export RK_ENABLE_RECOVERY=y
export RK_MISC=recovery-misc.img
export RK_OTA_RESOURCE="boot.img rootfs.img"
export RK_OTA_VERSION=V1.0.10
export RK_BOOTARGS_CMA_SIZE="8M"
export RK_AIISP_MODEL=NONE
export RK_ENABLE_WIFI=y
export RK_ENABLE_WIFI_CHIP=AP6XXX
export RK_ENABLE_BLUETOOTH=y
export RK_APP_RECAMERA_WEB=y
export RK_APP_RECAMERA_NOTIFY=y
export RK_APP_RECAMERA_ONVIF=y
export RK_APP_RECAMERA_SERVICES=y
export RK_APP_RKLLM_INFERENCE=y
export RK_BUILD_APP_TO_OEM_PARTITION=n
export RK_FREETYPE_USE_BUILDROOT=y
export RK_CAMERA_SENSOR_IQFILES="ainr/sc450ai_default_default.json ainr/sc450ai ainr/sc850sl ainr/sc850sl_default_default.json"
```

> ボード設定を変更した後は、異なる設定の出力が混在するのを避けるために、再ビルド前に `./build.sh clean` で影響を受けるコンポーネントをクリーンしてください。

## 1. デバイスツリーのカスタマイズ

### ファイル構成

カーネル DTS ファイルは `sysdrv/source/kernel/arch/arm64/boot/dts/rockchip/` にあります：

| ファイル | 目的 |
| --- | --- |
| `rv1126b-recamera2-v1.dts` | **トップレベルのエントリポイント**（`RK_KERNEL_DTS` により選択）；`model = "Rockchip RV1126B RECAMERA PRO Board"` |
| `rv1126b-recamera2-cam-csi0.dtsi` | CSI0 カメラパス |
| `rv1126b-recamera2-cam-csi1.dtsi` | CSI1 カメラパス |
| `rv1126b-recamera2-disp.dtsi` | ディスプレイパス |
| `rv1126b-recamera2-ext-cam-csi1.dts` | **拡張ボード用カメラ**、`.dtbo` としてコンパイル |
| `rv1126b-recamera2-baseboard-0.dts` / `-baseboard-1.dts` | ベースボードのバリエーション |
| `rv1126b-recamera2-extboard-0.dts` / `-extboard-1.dts` | 拡張ボードのバリエーション |

`rv1126b-recamera2-v1.dts` 内でコメントアウトされているインクルード（`rv1126b-aoa.dtsi`、`rv1126b-recamera2.dtsi`、`rv1126b-recamera2-v1.dtsi`）は、この DTS が**自己完結している**ことを示しています。電源ツリー（`vcc12v_dcin` → `vcc5v0_sys` → `vdd_npu` など）は、`regulator-fixed` を用いてトップレベルファイル内に直接定義されています。

### カーネルコマンドラインの変更

トップレベルの `chosen` ノードは次のとおりです：

```dts
chosen {
    bootargs = "earlycon=uart8250,mmio32,0x20810000 console=ttyFIQ0 rw root=PARTUUID=614e0000-0000 rootfstype=ext4 rootwait snd_soc_core.prealloc_buffer_size_kbytes=16 coherent_pool=32K";
};
```

ここでは CMA サイズを変更しないでください。代わりにボード設定で `RK_BOOTARGS_CMA_SIZE` を設定します。`build.sh` がそれをコマンドラインフラグメント（`__PREPARE_BOARD_CFG` → `RK_KERNEL_CMDLINE_FRAGMENT`）に追加します。

### DTBO（ランタイムデバイスツリーオーバーレイ）

`RK_KERNEL_RC_DTO=y` かつ カーネル `CONFIG_OF_OVERLAY=y` の場合、reCamera Pro は DTBO を使用して、**1 つのファームウェアイメージで複数のベースボードおよび拡張ボードをサポート**します：

1. ビルド時に、各 `rv1126b-recamera2-ext-*.dts` は対応する `.dtbo` にコンパイルされます。
2. `build.sh` 内の `__PACKAGE_OEM()` が、`sysdrv/source/objs_kernel/arch/arm64/boot/dts/rockchip/rv1126b-recamera2-ext-*.dtbo` を `/oem/usr/share/` にコピーします。
3. 起動時に、`S00board-id` オーバーレイが ADC を読み取ってボードを識別し、その結果を `/run/board_id.env` に書き込みます。
4. 起動スクリプトが検出された ID を使用して、適用する `.dtbo` を選択します。

**ボード識別メカニズム**（`overlay-buildroot-board-id/etc/init.d/S00board-id`）：

```text
ADC device       : /sys/bus/iio/devices/iio:device0
Output file      : /run/board_id.env
Samples          : Average of 3 readings
Tolerance        : 440
ADC levels       : 0 1365 2730 4094 5460 6824 8191
Corresponding V  : 0.0 0.3 0.6 0.9 1.2 1.5 1.8 V
Baseboard revs   : V0.9 V1.0 V1.1 V1.2 V1.3 V1.4 V1.5 (BASEBOARD_VERSIONS)
Baseboard models : TYPE0 ... TYPE6 (BASEBOARD_MODELS)
Expansion revs   : V0.9 ... V1.5 (EXPBOARD_VERSIONS)
Expansion models : TYPE0 ... TYPE6 (EXPBOARD_MODELS)
```

ハードウェアバリエーションを追加するには：**抵抗分圧レベルを追加 → `S00board-id` 内の `LEVELS` / `VERSIONS` / `MODELS` 配列を更新 → 対応する `.dts` を追加 → 起動スクリプトに分岐を追加**します。これら 3 つの部分の整合性を保ってください。そうしないと、新しいボードが既存モデルとして識別される可能性があります。

### カメラセンサーの変更

1. 対応するドライバがカーネルフラグメントで `m` または `y` に設定されていることを確認します（`rv1126b-recamera2.config` には、すでに SC450AI、SC850SL、GC2053、IMX415 など多くのドライバが含まれています）。ドライバがない場合は、該当する `CONFIG_VIDEO_xxx` オプションを有効にしてください。
2. DTS 内でカメラノードの `compatible`、I2C アドレス、クロック、および電源レギュレータを更新します。
3. IQ ファイルを `media/isp/camera_engine_rkaiq/rkaiq/iqfiles/isp35/` 配下に配置し、ボード設定の `RK_CAMERA_SENSOR_IQFILES` を更新します。
4. `kernel` + `media` + `firmware` を再ビルドします。

## 2. カーネル設定

```bash
./build.sh kernelconfig      # Open menuconfig; savedefconfig runs on exit
./build.sh kernel            # Rebuild the kernel
./build.sh clean kernel      # Clean the kernel outputs
```

`kernelconfig` は最初に `defconfig.before` スナップショットを保存します。終了時に設定を比較し、**実際に変更がある場合のみ defconfig に書き込み**、無関係な差分が出ないようにします。

設定は、`RK_KERNEL_DEFCONFIG=rv1126b_ipc_defconfig` に、次の 4 つのフラグメントを順に適用して構成されます：

| フラグメント | 内容 |
| --- | --- |
| `rv1126b-display.config` | ディスプレイ設定 |
| `rv1126b-sdiowifi.config` | SDIO Wi-Fi |
| `rv1126b-bt.config` | Bluetooth |
| **`rv1126b-recamera2.config`** | **Seeed によるカスタマイズ**。このファイルを編集します |

`rv1126b-recamera2.config` は `sysdrv/source/kernel/arch/arm64/configs/` にあります（32 ビット版は `arch/arm/configs/` 配下の同名ファイルです。64 ビットボードでは arm64 側を編集してください）。ファイル末尾には `#### recamera2 defconfig ####` マーカーがあります。Seeed による追加はこのマーカー以降にあり、次のような内容が含まれます：

```text
CONFIG_CAN=y / CONFIG_CAN_RK3576=y            # CAN bus
CONFIG_STMMAC_ETHTOOL=y / CONFIG_DWMAC_ROCKCHIP_TOOL=y / CONFIG_REALTEK_PHY=y / CONFIG_MAXIO_PHY=y
CONFIG_GENERIC_ADC_BATTERY=y / CONFIG_CHARGER_GPIO=y / CONFIG_POWER_SUPPLY_DEBUG=y
CONFIG_SND_SOC_ES7202=y                        # Microphone-array ADC
CONFIG_TYPEC_AW35615=y / CONFIG_TYPEC_TCPM=y   # USB Type-C
CONFIG_NEW_LEDS=y / CONFIG_LEDS_CLASS=y / CONFIG_LEDS_PWM=y / CONFIG_LEDS_TRIGGERS=y
CONFIG_LEDS_TRIGGER_TIMER=y / _HEARTBEAT=y / _PATTERN=y
CONFIG_RTC_DRV_PCF8563=y                       # RTC
CONFIG_INV_ICM42670_I2C=y                     # IMU (used by recamera_utils/hw_test/imu_test.py)
CONFIG_FANOTIFY=y
CONFIG_CRYPTO*=m / CONFIG_CRYPTO_DEV_ROCKCHIP=m
CONFIG_OF_OVERLAY=y                            # DTBO support
CONFIG_DRM_PANEL_ILITEK_ILI9881C=y / CONFIG_REGULATOR_RASPBERRYPI_TOUCHSCREEN_V2=y
CONFIG_INPUT_TOUCHSCREEN=y / CONFIG_TOUCHSCREEN_GOODIX=y
CONFIG_USB_CONFIGFS_NCM=y
CONFIG_NETFILTER=y / CONFIG_IP_NF_IPTABLES=y / CONFIG_IP_NF_FILTER=y / CONFIG_BPFILTER=y
```

カーネルオプションを追加する推奨方法は、`rv1126b_ipc_defconfig` を直接編集するのではなく、**`rv1126b-recamera2.config` の Recamera2 セクションの後ろに追記すること**です。後者は Rockchip のアップストリームファイルであり、SDK アップグレード時に競合しやすいためです。

既存の主な選択肢：

- `CONFIG_PANIC_ON_OOPS=y` + `CONFIG_BOOTPARAM_SOFTLOCKUP_PANIC=y` + `CONFIG_BOOTPARAM_HARDLOCKUP_PANIC=y`：oops、ソフトロックアップ、ハードロックアップのすべてが panic を引き起こします。**開発中は一時的にこれらを無効化することを検討してください**。そうしないと、障害発生時にシステムが即座に再起動し、デバッグに必要なライブ状態が失われます。
- `CONFIG_ROCKCHIP_DEBUG=y`、`CONFIG_DEBUG_FS=y`、`CONFIG_RK_CMA_PROCFS=y`、`CONFIG_RK_DMABUF_PROCFS=y`、`CONFIG_RK_MEMBLOCK_PROCFS=y`、`CONFIG_ROCKCHIP_RGA_PROC_FS=y`：デバッグノードが有効になっています。`/proc/rk*` および `/sys/kernel/debug/` 配下のメモリおよび RGA 統計は、メモリリークの調査に有用です。
- `CONFIG_ELF_CORE=y` + `CONFIG_CORE_DUMP_DEFAULT_ELF_HEADERS=y`：コアダンプを有効にします。`build.sh` 内の `__BUILD_ENABLE_COREDUMP_SCRIPT()` により、それらを有効化するスクリプトを生成できます。
- `CONFIG_VIDEO_RK_IRCUT` は**有効になっていません**。IRCUT 制御が必要な場合は自分で有効にしてください。

## 3. Buildroot のカスタマイズ

### 位置と展開

Buildroot のソースはアーカイブとして提供されています：

```text
sysdrv/tools/board/buildroot/buildroot-2023.02.6.tar.gz
sysdrv/tools/board/buildroot/recamera2_buildroot_aarch64_defconfig   # 64-bit (this board)
sysdrv/tools/board/buildroot/recamera2_buildroot_defconfig           # 32-bit
sysdrv/tools/board/buildroot/busybox.config
sysdrv/tools/board/buildroot/{busybox_patch,mpv_patch,qemu_patch,hcitool_patch,prelink-cross_patch}
sysdrv/tools/board/buildroot/font
```

最初の `./build.sh rootfs` はこれを `sysdrv/source/buildroot/buildroot-2023.02.6/` に展開します。ビルド成果物は次のディレクトリ以下に生成されます：

```text
sysdrv/source/buildroot/buildroot-2023.02.6/output/
├── staging/    # Buildroot development sysroot (headers + libraries)
├── target/     # Target rootfs contents
├── host/       # Host-side tools
└── build/      # Package build directories
```

`staging/` は、Buildroot パッケージにリンクするフル BSP 内のアプリケーション向けです。通常のアプリケーション開発には、[`recamera_pro_toolchain`](https://github.com/Seeed-Projects/recamera_pro_toolchain) を使用してください。

### よく使うコマンド

```bash
./build.sh buildrootconfig   # Open Buildroot menuconfig; savedefconfig runs on exit
./build.sh rootfs            # Rebuild rootfs
./build.sh clean rootfs      # Clean rootfs outputs
```

### パッケージを追加する

1. `./build.sh buildrootconfig` でパッケージを選択し、終了して保存します。defconfig は自動的に更新されます。
2. defconfig が自動的に更新されない場合（依存関係経由でパッケージが選択される場合など）、`BR2_PACKAGE_XXX=y` を `sysdrv/tools/board/buildroot/recamera2_buildroot_aarch64_defconfig` に手動で追加します。
3. `./build.sh rootfs` で再ビルドします。
4. 例えば `ls sysdrv/source/buildroot/buildroot-2023.02.6/output/target/usr/bin/` でパッケージを確認します。

`i2cdetect` や `nc` のような小さな BusyBox ユーティリティを追加するには、`busybox.config` を編集します。ボード設定にはすでに `RK_ENABLE_SYSSTAT=y`、`RK_ENABLE_FIO=y`、`RK_ENABLE_I2C_TOOLS=y` などのオプションが含まれており、一般的なツールは `RK_ENABLE_*` スイッチで有効化できることを示しています。**defconfig を直接編集する前に、既存のスイッチがないか探してください。**

### `/oem` について

`RK_BUILD_APP_TO_OEM_PARTITION=n` なので、**`/oem` は別パーティションではなく、rootfs 内の通常のディレクトリです**。パッケージング時に、`build.sh` は `output/out/oem/` を rootfs ステージング領域の `oem/` サブディレクトリにコピーし、その後、別個の OEM ディレクトリを削除します。したがって：

- オーバーレイ内の `oem/` 以下のファイル（例：`overlay-buildroot-go2rtc/oem/usr/bin/go2rtc`）は、デバイス上では `/oem/usr/bin/go2rtc` になります。
- `/oem` は rootfs と一緒に更新されます。これを変更するには `rootfs.img` を再フラッシュする必要があり、OEM パーティションとして個別にフラッシュすることはできません。

## 4. オーバーレイによるファイル上書き

オーバーレイは Seeed の rootfs カスタマイズの主な仕組みであり、入門するうえで最も簡単な方法であることが多いです。

### 仕組み

`build.sh` 内での実装（約 2971 行目付近）：

```bash
for overlay_dir in $RK_POST_OVERLAY; do
    if [ -d "$tmp_path/overlay/$overlay_dir" ]; then
        rsync -a --ignore-times --keep-dirlinks --chmod=u=rwX,go=rX --exclude .empty \
            $tmp_path/overlay/$overlay_dir/* $RK_PROJECT_PACKAGE_ROOTFS_DIR/
    fi
done
```

言い換えると、`project/cfg/BoardConfig_Recamera2/overlay/<name>/` 以下のファイルは、相対パスを保持したまま rootfs ステージングディレクトリに rsync されます。

`cfg-all-items-introduction.txt` では `RK_POST_OVERLAY` を次のように説明しています：

> オーバーレイのリソースファイルはファイルシステムにコピーされます。例えば、対応する `BoardConfig.mk` ディレクトリの下に `overlay/user_overlay_files` を作成し、`RK_POST_OVERLAY=user_overlay_files` を設定します。

### 現在有効なオーバーレイ

`RK_POST_OVERLAY` には 14 個のエントリがあり、15 個のディレクトリに対応します（go2rtc には 3 つのディレクトリがありますが、有効なのは 2 つだけです）：

| オーバーレイディレクトリ | インストールされる内容 | 目的 |
| --- | --- | --- |
| `overlay-buildroot-banner` | `/etc/motd`, `/etc/profile.d/banner.sh` | reCamera の ASCII ロゴ。対話的な非 SSH セッションでのみ表示 |
| `overlay-buildroot-hwclock` | `/etc/init.d/S20hwclock` | RTC とシステム時刻の同期 |
| `overlay-buildroot-sshd` | `/etc/ssh/sshd_config`, `/etc/pam.d/sshd`, `/etc/init.d/S50sshd`, `/usr/libexec/ssh-login-lock.py` | SSH サービスとログイン失敗時のロックアウト（5 回 / 300 秒） |
| `overlay-buildroot-syslog-ng` | `/etc/syslog-ng.conf` | ログをファイルおよび UDP にルーティング |
| `overlay-buildroot-vsftpd` | `/etc/vsftpd.conf`, `/etc/pam.d/vsftpd`, `/etc/shells`, `/etc/vsftpd.{chroot_,user_}list`, `/etc/init.d/S70vsftpd` | FTP。設定ディレクトリを非表示 |
| `overlay-buildroot-log` | `/oem/usr/bin/websocket_log.py`, `/oem/usr/etc/init.d/S10log` | UDP 5140 → WebSocket 8765 |
| `overlay-buildroot-ttyd` | `/oem/usr/etc/init.d/S50ttyd`, `/oem/usr/bin/ssh-login-whitelist.sh` | ブラウザターミナル（7681）、`root` / `admin` のみ許可 |
| `overlay-buildroot-udhcpc` | `/usr/share/udhcpc/default.script` | DHCP スクリプト。eth0 の DNS を優先 |
| `overlay-buildroot-go2rtc` | `/oem/usr/etc/go2rtc/go2rtc.yaml`, `/oem/usr/etc/init.d/S50go2rtc` | ストリーム設定と起動スクリプト |
| `overlay-buildroot-go2rtc-arm64` | `/oem/usr/bin/go2rtc` | 64 ビット go2rtc バイナリ |
| `overlay-buildroot-board-id` | `/etc/init.d/S00board-id` | ADC からボード ID を読み取り → `/run/board_id.env` |
| `overlay-buildroot-asound` | `/etc/asound.conf` | 6 チャンネルキャプチャ → 2 つのマイク + 2 つのリファレンスチャンネル用の仮想デバイス |
| `overlay-buildroot-watchdog` | `/etc/init.d/S15watchdog` | ハードウェアウォッチドッグ（`-T 30 -t 15`） |
| `overlay-buildroot-rkenv` | `/etc/profile.d/RkEnv.sh` | `OEM_HOME`, `PATH`, `LD_LIBRARY_PATH`, `HOME=/userdata` |

**存在するが有効化されていないもの：** `overlay-buildroot-go2rtc-arm`（32 ビット go2rtc バイナリ）。64 ビットボードでは使用しません。

### 独自のオーバーレイを追加する

```bash
# 1. Create a directory and arrange files by their target absolute paths
mkdir -p project/cfg/BoardConfig_Recamera2/overlay/my_overlay/etc/init.d
cp my_script.sh project/cfg/BoardConfig_Recamera2/overlay/my_overlay/etc/init.d/S60myservice

# 2. Append it to RK_POST_OVERLAY in the board configuration (keep the line-continuation backslash)
#    export RK_POST_OVERLAY="... overlay-buildroot-rkenv \
#    my_overlay"

# 3. Rebuild rootfs and package the firmware
./build.sh rootfs && ./build.sh firmware
```

### オーバーレイでよくある 3 つの落とし穴

- **rsync がパーミッションを書き換える：** `--chmod=u=rwX,go=rX` により、グループおよびその他のユーザーには書き込み権限が一切付与されません。大文字の `X` は、ディレクトリまたはすでに実行可能なファイルに対してのみ実行権限を保持します。ビルド前に、ソースオーバーレイ内でスクリプトに実行権限を付与してください。
- **`.empty` ファイルは除外される：** 空ディレクトリを作成するためのプレースホルダファイルはイメージには含まれません。これは意図的なものであり、ディレクトリ構造を維持します。
- **オーバーレイは上書きはするが削除はしない：** rsync には `--delete` が渡されていないため、オーバーレイからファイルを削除しても rootfs からは削除**されません**。ファイルを削除するには、Buildroot の rootfs post-build スクリプトか、`RK_POST_CLEAN_FILES`（`build.sh` 内の `__RUN_POST_CLEAN_FILES`）を使用してください。

## 5. U-Boot のカスタマイズ

```bash
./build.sh uboot
./build.sh clean uboot
```

設定：`RK_UBOOT_DEFCONFIG=rv1126b_recamera2_defconfig`（`sysdrv/source/uboot/u-boot/configs/` 以下）に加え、`rk-emmc.config` と `rv1126b-ipc.config` のフラグメントがあります。

重要な設定の 1 つは `CONFIG_BAUDRATE=1500000` です。ブートディレイ、デフォルトのブートターゲット、fastboot サポート、および関連オプションはこの defconfig で変更します。

DDR 初期化ファームウェアは `RK_UBOOT_RKBIN_MINIALL_INI_FILE=RV1126BMINIALL_IPC.ini` によって選択されます。出力には `idblock.img` / `download.bin` が含まれます。**DDR パラメータの変更は高リスク**なので、必要な場合を除き避けてください。

`build.sh` には `__modify_file()` と `__modify_file_ddr_bin()` が含まれており、U-Boot ビルド中にボード設定から rkbin DDR ファームウェアのパラメータを変更します。DDR の問題を調査する際は、まずこれらの関数を確認してください。

## 6. パーティションテーブルのカスタマイズ

`RK_PARTITION_CMD_IN_ENV` を編集します。エントリは `size(name)` または `size@offset(name)` を使用し、`-` は残りのすべての領域を使用することを意味します：

```text
32K(env),512K@32K(idblock),4M@1M(uboot),64K(misc),10M(recovery),11M(boot),3G(rootfs),-(userdata),
```

また、`RK_PARTITION_FS_TYPE_CFG` も更新します。形式は `partition@mount-point@filesystem` で、`IGNORE` はそのパーティションが fstab によってマウントされないことを意味します：

```text
rootfs@IGNORE@ext4,userdata@/userdata@ext4
```

これらの値を変更した後、次を実行します：

```bash
./build.sh env          # Regenerate env.img
./build.sh firmware     # Repackage the firmware
```

**フラッシュ時にパーティションテーブルを書き換えること：** `sudo ./rkflash.sh all`、少なくとも `upgrade_tool di -p output/image/parameter.txt` を実行します。パーティションテーブルを更新せずに rootfs のみをフラッシュすると、パーティションの位置ずれが発生する可能性があります。

`build.sh` 内の `parse_partition_env()`、`parse_partition_file()`、`get_partition_dev_node()`、`get_partition_num()` がパース処理を担当します。パーティション関連の問題をデバッグする際は、これらの関数を確認してください。

重要な注意点：

- `boot` は 11 M しかありません。カーネル + DTB がこのサイズを超えるとパッケージングに失敗します。多くのカーネル機能を有効にした後は、`ls -lh output/image/boot.img` で確認してください。
- `rootfs` は 3 G に固定されており、`userdata` は残りの領域を使用します。rootfs を増やすと userdata の容量が減少します。
- カーネルコマンドラインは `root=PARTUUID=614e0000-0000` を使用します。パーティション順序を変更すると PARTUUID に影響する可能性があります。パーティションを変更した後は必ず DTS の bootargs が正しいままであることを確認してください。

## 7. MCU 側（RT-Thread）

`sysdrv/source/mcu/` には、RV1126B に内蔵された MCU 用の RT-Thread ファームウェアが含まれています。これは Linux とは独立しています：

```text
sysdrv/source/mcu/
├── build.sh
├── docs/          # Rockchip_RV1126B_Quick_Start_RT-Thread_MCU_CN.pdf
├── prebuilts/
├── project/
├── readme.txt
└── rt-thread/
```

ビルド方法：

```bash
./build.sh mcu              # From the SDK root
# Or enter sysdrv/source/mcu/ and use its own build.sh
```

`mcu` 引数は `build.sh` の通常の引数パース**より前に**個別に処理されます（`if [ "$1" = "mcu" ]; then shift; build_mcu $@; fi`）。MCU ビルドは、設定に応じて `build_mcu amp` や `build_mcu $RK_UBOOT_RKBIN_MCU_CFG` によって、U-Boot / カーネルビルド中に自動的にトリガされる場合もあります。

現在のボード設定では MCU は明示的には有効化されていません。ビルドに含まれているかどうかは `./build.sh info` で確認してください。

## カスタマイズ後の検証

```bash
./build.sh info                      # Confirm that the configuration took effect
./build.sh kernel && ./build.sh rootfs && ./build.sh firmware
ls -lh output/image/                 # Check that image sizes are reasonable (boot < 11M, rootfs < 3G)
sudo ./rkflash.sh all                # A partition-table change requires flashing everything
```

デバイス上で:

```bash
# /bin/sdkinfo                       # Print Build Time / SDK Version / BoardConfig name
# cat /etc/ota_version               # Should be V1.0.10 (or your updated value)
# cat /proc/cmdline                  # Check that the command line matches expectations
# cat /run/board_id.env              # Check the detected board ID
# ls /oem/usr/share/*.dtbo           # Confirm the DTBO files are present
# zcat /proc/config.gz | grep XXX    # Check a kernel option (if IKCFG is enabled)
```

`/bin/sdkinfo` はパッケージング中に `build.sh` によって生成されます。これは SDK バージョンと BoardConfig ファイル名を報告し、**デバイス上でどのファームウェアビルドが動作しているかを特定する最も手早い方法**です。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。お客様が弊社製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>