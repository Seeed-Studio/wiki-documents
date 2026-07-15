---
description: Jetson Orin Nano Developer Kit の完全な開発環境をクローンし、Seeed reComputer Classic J4011/J4012 向けのハイブリッド BSP を構築する
title: Orin Nano DevKit から reComputer Classic へ DIY BSP を作成する
keywords:
  - reComputer
  - reComputer Classic
  - J4011
  - J4012
  - Orin Nano Developer Kit
  - BSP
  - Hybrid
  - Jetson
  - JetPack
  - custom image
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /make_diy_bsp_from_orin_nano_devkit_to_recomputer_classic
sku: 110110144, 110110145
last_update:
  date: 07/13/2026
  author: Zuhao
createdAt: '2026-07-10'
updatedAt: '2026-07-13'
url: https://wiki.seeedstudio.com/ja/make_diy_bsp_from_orin_nano_devkit_to_recomputer_classic/
---

この wiki では、**NVIDIA Jetson Orin Nano Developer Kit** から完全な開発環境をクローンし、**Seeed reComputer Classic（J4011/J4012、ボード設定 `recomputer-orin-j401`）** に書き込めるハイブリッド BSP を構築し、フラッシュを完了する方法を説明します。

これは同一キャリア向け DIY BSP フローを拡張したものです。ソースとターゲットの両方が Seeed ボードの場合は、代わりに [Creating a Custom BSP Package from Jetson Development Environment](/ja/make_diy_bsp_for_jetson/) を使用してください。

関連ドキュメント：

- [Creating a Custom BSP Package from Jetson Development Environment](/ja/make_diy_bsp_for_jetson/)
- [Migrate /home Data from Jetson Orin Nano Developer Kit to reComputer](/ja/migrate_home_data_from_jetson_orin_nano_developer_kit_to_recomputer/)
- [Flash JetPack to a Selected Product](/ja/flash/jetpack_to_selected_product/)

このガイドでは JetPack 6.2 / L4T 36.4.3 を例として使用します（モジュール **SKU 0005** = Orin Nano 8GB）。

## 何を構築しているか

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>目的</th>
      <th>成果物</th>
      <th>用途</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>A. 同一キャリアクローン</td>
      <td><code>mfi_jetson-orin-nano-devkit-nvme.tar.gz</code></td>
      <td><strong>DevKit</strong> を完全な環境クローンで再フラッシュする</td>
    </tr>
    <tr>
      <td>B. Classic バンドル</td>
      <td><code>mfi_recomputer-orin-j401.tar.gz</code></td>
      <td><strong>Classic J4011</strong> をフラッシュ：J401 ボードレベル QSPI + DevKit の完全な APP（<code>/home</code> を含む）</td>
    </tr>
    <tr>
      <td>C. 安全なフォールバック</td>
      <td>公式 J401 BSP + <code>/home</code> のみ移行</td>
      <td>ハイブリッドの結果が異常な場合に使用</td>
    </tr>
  </tbody>
</table>
</div>

:::danger
ソースが Classic の場合でも、DevKit 用パッケージ `mfi_jetson-orin-nano-devkit-nvme` を Classic に直接フラッシュしないでください。  
mfi ディレクトリ内の単一の `.dtb` を編集するだけでボード適合が完了したとみなさないでください。
:::

## 前提条件

### ハードウェア

- ソース：Orin Nano **Developer Kit**（この例ではモジュール **SKU 0005** = Orin Nano 8GB、NVMe ブートを使用）
- ターゲット：Seeed **reComputer Classic J4011/J4012**（J401 キャリア；モジュールも可能であれば 0005 が望ましい）
- ホスト：Ubuntu 22.04 x86_64、USB Type-C ケーブル（フラッシュポート）
- ディスク：**100GB 以上**の空き容量を確保（バックアップ + 2 つの mfi + スナップショット）

### ホスト側の依存パッケージ

```bash
sudo apt-get update -y
sudo apt-get install -y \
  build-essential flex bison libssl-dev \
  sshpass abootimg nfs-kernel-server \
  libxml2-utils qemu-user-static
```

バックアップ / フラッシュの前に：

```bash
sudo systemctl stop udisks2.service
sudo service nfs-kernel-server start
lsusb | grep 0955:7523   # must show NVIDIA Corp. APX
```

### ボード比較（この例）

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>項目</th>
      <th>DevKit</th>
      <th>Classic J4011</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>board-name</td>
      <td><code>jetson-orin-nano-devkit-nvme</code></td>
      <td><code>recomputer-orin-j401</code></td>
    </tr>
    <tr>
      <td>設定ファイル</td>
      <td><code>p3768-0000-p3767-0000-a0-nvme.conf</code></td>
      <td><code>recomputer-orin-j401.conf</code></td>
    </tr>
    <tr>
      <td>Pinmux</td>
      <td><code>...-dp-a03</code>（DP）</td>
      <td><code>...-hdmi-a03</code>（HDMI）</td>
    </tr>
    <tr>
      <td>オーバーレイ</td>
      <td>DevKit 動的オーバーレイなど</td>
      <td><code>tegra234-dcb-p3767-0000-hdmi.dtbo</code> + <code>tegra234-p3767-camera-p3768-imx219-dual-seeed.dtbo</code></td>
    </tr>
    <tr>
      <td>SKU0005 メイン DTB</td>
      <td><code>...-0005-nv(-super).dtb</code></td>
      <td><strong>引き続き使用</strong> <code>tegra234-p3768-0000+p3767-0005-nv-super.dtb</code></td>
    </tr>
  </tbody>
</table>
</div>

バックアップされた `board_spec` の例：

```text
3767-300-0005-V.2-1-1-jetson-orin-nano-devkit-nvme-
```

:::danger
reComputer Classic シリーズは、MAXN Super モードをサポートするには冷却性能が不十分です。Classic デバイスに JetPack 6.2 をフラッシュした場合、**MAXN を有効にしないでください**。
:::

## 1. Linux_for_Tegra ワークスペースの準備

[Creating a Custom BSP Package from Jetson Development Environment](/ja/make_diy_bsp_for_jetson/#1-prepare-working-directory-on-pc) の表から Seeed L4T 作業パッケージをダウンロードします（この例では JetPack 6.2 / L4T 36.4.3 plus）。

```bash
sudo tar xpf L4T_36.4.3_plus.tar.gz
# Adjust the archive name to match your download

cd Linux_for_Tegra/
sudo ./apply_binaries.sh
cd ..

export ARCH=arm64
export CROSS_COMPILE="$PWD/aarch64--glibc--stable-2022.08-1/bin/aarch64-buildroot-linux-gnu-"
export PATH="$PWD/aarch64--glibc--stable-2022.08-1/bin:$PATH"
export INSTALL_MOD_PATH="$PWD/Linux_for_Tegra/rootfs/"

cd Linux_for_Tegra/source
./nvbuild.sh
./do_copy.sh
./nvbuild.sh -i
```

検証：

```bash
test -f Linux_for_Tegra/recomputer-orin-j401.conf
test -f Linux_for_Tegra/jetson-orin-nano-devkit-nvme.conf
ls Linux_for_Tegra/kernel/dtb/tegra234-j401-*-recomputer.dtb
ls Linux_for_Tegra/kernel/dtb/tegra234-dcb-p3767-0000-hdmi.dtbo
```

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/dk-to-classic/section-2-verify.png"/></div>

## 2. DevKit の完全な環境をバックアップする

### 2.1 ソースデバイスをリカバリモードにする

DevKit のフラッシュポートを USB Type-C データケーブルでホストに接続し、リカバリモードに入れます。ホスト側で `lsusb` を実行すると、`0955:7523` **APX** が表示されるはずです。

リカバリモードへの手順については、[Flash JetPack to a Selected Product](/ja/flash/jetpack_to_selected_product/) を参照してください。

バックアップ中、デバイスは一時的に `0955:7035`（Linux for Tegra / initrd）に切り替わる場合があります。これは正常です。

### 2.2 バックアップコマンド

```bash
cd Linux_for_Tegra
sudo ./tools/backup_restore/l4t_backup_restore.sh \
  -e nvme0n1 -b -c jetson-orin-nano-devkit-nvme
```

:::warning
ソースが DevKit の場合、最初のバックアップに `recomputer-orin-j401` を使用しないでください。`board_spec` と後続のベースラインが破損します。
:::

### 2.3 検証

```bash
ls -lah tools/backup_restore/images/
head -5 tools/backup_restore/images/nvpartitionmap.txt
```

次の点を確認します：

- `board_spec` に `jetson-orin-nano-devkit-nvme` が含まれている
- `nvme0n1p1.tar.zst`（または後で変換された大きな APP）が **GB 単位のサイズ** である
- `QSPI0.img` が存在する（これは **DevKit** の QSPI であり、ハイブリッドでは Classic の QSPI として再利用してはいけません）

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/dk-to-classic/section-3.3-verify.png"/></div>

推奨：すぐにスナップショットを作成します：

```bash
sudo cp -a tools/backup_restore/images ~/backup_images_dk_sku0005
```

## 3. DevKit 同一キャリア DIY BSP の構築（任意）

デバイスを再度 **APX** 状態にします。ホスト側で `lsusb` を実行すると `0955:7523 APX` が表示されるはずです：

```bash
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh \
  --use-backup-image --no-flash --network usb0 --massflash 5 \
  jetson-orin-nano-devkit-nvme internal
```

生成物：

- `mfi_jetson-orin-nano-devkit-nvme/`
- `mfi_jetson-orin-nano-devkit-nvme.tar.gz`

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/dk-to-classic/section-4-artifacts.png"/></div>

:::danger
これは DevKit の再フラッシュ専用です。このパッケージで Classic をフラッシュしないでください。
:::

## 4. 必読：QSPI トラップ

`--use-backup-image` を指定すると、`convert_backup_image_to_initrd_flash` は次のように配置します：

| バックアップ内容 | 配置先 |
| --- | --- |
| NVMe / APP | `tools/kernel_flash/images/external/` |
| **ソース** `QSPI0.img` | `tools/kernel_flash/images/internal/` |

したがって：

| 誤ったアプローチ | 結果 |
| --- | --- |
| `mfi/.../rootfs` または 1 つの `.dtb` だけを編集する | 効果なし（実際にフラッシュされるのは bak / QSPI） |
| DevKit をバックアップし、そのまま `recomputer-orin-j401` + `--use-backup-image` を実行 | **依然として DevKit の QSPI（DP pinmux）をフラッシュ**；HDMI/USB が正しくない可能性 |
| conf を変更してから `--flash-only` を実行 | `--flash-only` は conf からイメージを再生成 **しません** |

Classic J4011 で本当に異なるのは、`recomputer-orin-j401.conf` 内の **HDMI pinmux + DCB/カメラオーバーレイ** です：

```bash
PINMUX_CONFIG="tegra234-mb1-bct-pinmux-p3767-hdmi-a03.dtsi"
PMC_CONFIG="tegra234-mb1-bct-padvoltage-p3767-hdmi-a03.dtsi"
OVERLAY_DTB_FILE+=",tegra234-dcb-p3767-0000-hdmi.dtbo,tegra234-p3767-camera-p3768-imx219-dual-seeed.dtbo"
DCE_OVERLAY_DTB_FILE="tegra234-dcb-p3767-0000-hdmi.dtbo"
```

SKU **0005** の場合、メイン DTB ファイル名は依然として NVIDIA の `*-0005-nv-super.dtb` です。`*-0000-recomputer.dtb` へ強制的に切り替えないでください（このパスは NX 16GB 用です）。

## 5. ハイブリッド B'：Classic J4011 バンドルを構築する

コアとなる考え方：

1. **APP**：DevKit バックアップ（完全なユーザー環境）をそのまま使用する
2. **QSPI**：`recomputer-orin-j401` で再生成する（`--use-backup-image` **なし**）
3. `mfi_recomputer-orin-j401` に組み立てる

```text
DevKit backup APP  ──►  external/ (nvme0n1p1_bak.img, etc.)
J401 conf new QSPI  ──►  internal/ (QSPI shards, not DevKit monolithic QSPI0.img)
                     └──► mfi_recomputer-orin-j401(.tar.gz)
```

### 5.1 APP のみを準備する（DevKit QSPI を削除）

```bash
cd Linux_for_Tegra
sudo cp -a ~/backup_images_dk_sku0005 \
  tools/backup_restore/images_app_only
sudo rm -f tools/backup_restore/images_app_only/QSPI0.img
sudo sed -i '/qspi/Id' tools/backup_restore/images_app_only/nvpartitionmap.txt
```

APP のみを initrd フラッシュ用の `external` イメージに変換します（バックアップツールの convert ステップを使用するか、DevKit mfi パックステップですでに `tools/kernel_flash/images/external/` 配下にある大きな APP を再利用します）。

### 5.2 J401 conf で QSPI を再生成する

デバイスは APX 状態である必要があります。モジュールパラメータはバックアップと一致させてください（この例：3767 / 0005 / 300 / V.2）：

```bash
cd Linux_for_Tegra
sudo BOARDID=3767 BOARDSKU=0005 FAB=300 BOARDREV=V.2 CHIP_SKU=00:00:00:D5 \
  ./tools/kernel_flash/l4t_initrd_flash.sh \
  --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_t234_nvme.xml \
  -p "-c bootloader/generic/cfg/flash_t234_qspi.xml --no-systemimg" \
  --no-flash --massflash 5 --showlogs --network usb0 \
  recomputer-orin-j401 internal
```

ログには HDMI pinmux が表示されている必要があります。例：`tegra234-mb1-bct-pinmux-p3767-hdmi-a03`。

推奨：新しい QSPI を internal に保存します：

```bash
sudo cp -a tools/kernel_flash/images/internal ~/j401_qspi_internal_save
```

### 5.3 mfi を構成する

最終的なディレクトリ構成は次を満たす必要があります：

| パス | 内容 |
| --- | --- |
| `mfi_recomputer-orin-j401/recomputer-orin-j401.conf` | 存在する |
| `.../tools/kernel_flash/images/internal/` | **新しい J401 QSPI**（DevKit のモノリシックな `QSPI0.img` がない、または DevKit とハッシュが異なる；`flash.idx` は複数行の分割片であることが多い） |
| `.../tools/kernel_flash/images/external/nvme0n1p1_bak.img` | **GB 単位のサイズ**の APP |

任意のアーカイブ：

```bash
cd Linux_for_Tegra
sudo tar czf mfi_recomputer-orin-j401.tar.gz mfi_recomputer-orin-j401
```

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/dk-to-classic/section-6.3-artifacts.png"/></div>

## 6. Classic J4011 へのフラッシュ

### 6.1 ターゲットを APX モードにする

`lsusb` → `0955:7523 NVIDIA Corp. APX`

### 6.2 フラッシュコマンド

**展開済みディレクトリがすでにローカルに存在する場合は、再度** `tar xpf` **を実行しないでください：**

```bash
cd Linux_for_Tegra/mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh \
  --flash-only --massflash 1 --network usb0 --showlogs
```

別の PC に `.tar.gz` **だけ** がある場合のみ：

```bash
sudo tar xpf mfi_recomputer-orin-j401.tar.gz
cd mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh \
  --flash-only --massflash 1 --network usb0 --showlogs
```

### 6.3 フラッシュ中に表示される正常なメッセージ

| ログ | 意味 |
| --- | --- |
| `p3768-0000-p3767-0000-a0.conf: No such file or directory` | `--flash-only` でよく見られる；イメージは事前にビルド済みなので続行 |
| `rpcbind already running` | 無視して問題なし |
| `blockdev: cannot open /dev/mmcblk0boot0` | Orin Nano にはそのパーティションがない；通常は無害 |
| RCM-boot + `SSH ready` | 通常のフラッシュ開始 |
| DTB `...-0005-nv-super.dtb` | SKU0005 に対して正しい |
| 複数の `internal` 行 + `Starting to flash to qspi` | J401 QSPI をフラッシュ中 |
| `tar ... zstd ... nvme0n1p1_bak.img` | APP を復元中（最も時間のかかるステップ；数十分かかる場合があります） |

:::warning
成功完了メッセージが表示されるまで、電源を切ったりケーブルを抜いたりしないでください。
:::

### 6.4 フラッシュ後の確認（Classic 上）

```bash
cat /proc/device-tree/model
ls /boot/kernel_tegra234*.dtb
ls /boot/*.dtbo | grep -E 'hdmi|imx219-dual-seeed' || true

# Whether peripherals actually work (more important than model / dtbo filenames)
xrandr 2>/dev/null | head -20
lsusb | head
ip -br link
ls /boot/*.dtbo 2>/dev/null | head -40
sudo dmesg | grep -iE 'dtb|overlay|hdmi|tegra234' | tail -30

# Whether the original DevKit user environment survived (CUDA example)
nvcc --version
```

:::info
sudo なしでは、`dmesg` が `Operation not permitted` を報告する場合があります。これは権限の問題なので、`sudo` を使用してください。
:::

**デバイス上：model / DTB**

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/dk-to-classic/section-7.4.1-model-dtb.png"/></div>

**デバイス上：元の DevKit にインストールされていた CUDA は引き続き動作**

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/dk-to-classic/section-7.4.1-cuda-nvcc.png"/></div>

#### 結果の読み取り方（SKU 0005）

**1) `/proc/device-tree/model` が依然として DevKit を示す — SKU 0005 では正常**

例：

```text
NVIDIA Jetson Orin Nano Engineering Reference Developer Kit Super
```

理由：**SKU 0005** の場合、`recomputer-orin-j401.conf` は NVIDIA の `tegra234-p3768-0000+p3767-0005-nv-super.dtb` を選択します。`tegra234-j401-*-recomputer.dtb` には**切り替わらない**ため、model 文字列は依然として公式 DevKit のように見えます。この行だけを見て「誤った DevKit バンドルを書き込んだ」と**判断しないでください**。

**2) `/boot` 配下の DTB ファイル名**

よく見られるもの：

```text
/boot/kernel_tegra234-p3768-0000+p3767-0000-nv.dtb
/boot/kernel_tegra234-p3768-0000+p3767-0005-nv.dtb
```

`*-0005-nv-super.dtb` というファイル名が見えない場合があります。実際にブートに使われる DTB は、多くの場合 **UEFI/QSPI** によって選択されます。`/boot` の一覧はあくまで参考情報です。

**3) `grep hdmi|imx219-dual-seeed` が空 — それ自体は失敗ではない**

Hybrid フラッシュ後、`/boot/*.dtbo` には DevKit バックアップ由来の汎用オーバーレイリストが残っていることがよくあります。`tegra234-dcb-p3767-0000-hdmi.dtbo` や `...-imx219-dual-seeed.dtbo` が**見えない場合があります**。Seeed の HDMI / カメラ設定の多くは、**新しい J401 QSPI / UEFI オーバーレイ**経路を通じて有効になります。

**4) 「動作しているかどうか」で判断する**

| チェック項目 | 正常な例 |
| --- | --- |
| USB | ハブ、マウス、Bluetooth、USB Ethernet が列挙される（`lsusb` に複数のデバイスが表示される） |
| 有線 Ethernet | `enP8p1s0` などが `UP` |
| Wi‑Fi | `wlP1p1s0` が `UP` |
| ディスプレイ | デスクトップが動作する、または `xrandr` に出力がある |
| ユーザー環境 | 元の DevKit のユーザー、ソフトウェア、データが残っている |
| CUDA | `nvcc --version` が動作する（この例では **12.6**）。APP クローンが無事であることを示す |

#### `extlinux.conf` を編集すべきタイミング

**HDMI / USB / ブートに異常がある場合にのみ**、`/boot/extlinux/extlinux.conf` の `LABEL primary` の下に次を追加してみてください：

```text
FDT /boot/kernel_tegra234-p3768-0000+p3767-0005-nv-super.dtb
```

（そのファイルが `/boot` 配下にない場合は、`...-0005-nv.dtb` を試すか、まず BSP の `kernel/dtb/` からコピーしてください。）

```bash
sudo reboot
```

それでも異常が続く場合は、セクション 7 のプラン A（公式 J401 BSP + `/home` の移行）を使用してください。

## 7. プラン A フォールバック（公式ルート）

Hybrid フラッシュ後にパーティション / UEFI / 周辺機器に異常が残る場合：

1. Seeed の手順に従って **公式** `recomputer-orin-j401` BSP をフラッシュします（DevKit の mfi はフラッシュしないでください）。
2. バックアップ（`nvme0n1p1.tar.zst`）から `/home` を展開するか、[Migrate /home Data from Jetson Orin Nano Developer Kit to reComputer](/ja/migrate_home_data_from_jetson_orin_nano_developer_kit_to_recomputer/) に従います。
3. Classic 上で `/home` を復元し、その後必要に応じてシステムレベルのソフトウェアを再インストールします（`/usr`、`/etc`、Docker などは別途対応が必要です）。

長所：ボードファームウェアが最もクリーン。短所：`/` ディスク全体のクローンではない。

## 8. 主要パス クイックリファレンス

| 種類 | パス（`Linux_for_Tegra/` 配下） |
| --- | --- |
| DK mfi | `mfi_jetson-orin-nano-devkit-nvme.tar.gz` |
| Classic バンドル mfi | `mfi_recomputer-orin-j401.tar.gz` |
| J401 conf | `recomputer-orin-j401.conf` |
| HDMI DCB | `kernel/dtb/tegra234-dcb-p3767-0000-hdmi.dtbo` |
| Seeed デュアル IMX219 | `kernel/dtb/tegra234-p3767-camera-p3768-imx219-dual-seeed.dtbo` |
| J401 DTB | `kernel/dtb/tegra234-j401-p3768-0000+p3767-*-recomputer.dtb` |
| SKU0005 DTB | `kernel/dtb/tegra234-p3768-0000+p3767-0005-nv-super.dtb` |

## 9. フロー概要

```text
[Host] Extract L4T + apply_binaries + nvbuild
          │
          ▼
[DevKit APX] backup -c jetson-orin-nano-devkit-nvme
          │
          ├─► (optional) --use-backup-image → mfi_jetson-orin-nano-devkit-nvme
          │
          ├─► snapshot backup_images_dk_sku0005
          │         │
          │         ├─ APP-only (remove QSPI)
          │         └─► external APP
          │
          └─► [APX] J401 without --use-backup-image → generate QSPI
                    │
                    ▼
              assemble mfi_recomputer-orin-j401
                    │
                    ▼
              [Classic APX] --flash-only
                    │
                    ▼
              check display/USB/NVMe/user environment
```

## 10. FAQ

**Q: ディレクトリと `.tar.gz` の両方が存在します。まだ展開する必要がありますか？**  
A: いいえ。`mfi_recomputer-orin-j401/` が存在する場合は、その中に `cd` して `--flash-only` を実行してください。

**Q: ターゲット Classic モジュールが 0005 ではありません。どうすればよいですか？**  
A: `BOARDSKU` を変更し、`recomputer-orin-j401.conf` 内の `p3767_super_overlay` に従って一致する DTB を選択し、その後 QSPI を再生成します。

**Q: ディスク全体をクローンするのではなく、`/home` だけを保持したいのですが？**  
A: プラン A（セクション 7）を使用してください。その方が簡単で信頼性があります。

**Q: なぜ DIY BSP wiki の例では `recomputer-orin-j401` を使用しているのですか？**  
A: その例では、**ソースとターゲットの両方が Seeed ボードである**ことを前提としています。ソースが公式 DevKit の場合、バックアップはまず `jetson-orin-nano-devkit-nvme` を使用し、その後この Hybrid Classic 適応チュートリアルに従う必要があります。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
