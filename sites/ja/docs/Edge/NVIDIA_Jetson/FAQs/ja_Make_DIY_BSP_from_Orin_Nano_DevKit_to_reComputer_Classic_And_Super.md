---
description: Jetson Orin Nano Developer Kit の完全な環境をクローンし、Seeed reComputer Classic または Super 向けにハイブリッド BSP を構築します
title: Orin Nano DevKit から reComputer Classic / Super へ DIY BSP を作成する
keywords:
  - reComputer
  - reComputer Classic
  - reComputer Super
  - J4011
  - J4012
  - Orin Nano Developer Kit
  - BSP
  - Hybrid
  - Hybrid BSP
  - Jetson
  - JetPack
  - custom image
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /make_diy_bsp_from_orin_nano_devkit_to_recomputer_classic_and_super
sku: 110110144, 110110145
last_update:
  date: 07/22/2026
  author: Zuhao
createdAt: '2026-07-22'
updatedAt: '2026-07-23'
url: https://wiki.seeedstudio.com/ja/make_diy_bsp_from_orin_nano_devkit_to_recomputer_classic_and_super/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

このガイドでは、**NVIDIA Jetson Orin Nano Developer Kit** から完全な開発環境をクローンし、**Seeed reComputer** ボードのファームウェアに入れ替え、ハイブリッド BSP をビルドしてフラッシュを完了する方法を説明します。

サポートされるターゲットボードは次の 2 種類です：

- **reComputer Classic**（J4011/J4012、ボード設定 `recomputer-orin-j401`）
- **reComputer Super**（ボード設定 `recomputer-orin-super-j401`）

両者は同じ中核となる考え方、つまり **DevKit の完全な APP を保持し、ターゲットボードの QSPI を再生成する** 点は共通ですが、pinmux、カメラオーバーレイ、ディスクレイアウトの詳細が異なります。相違点は以下のタブで示し、共通の手順は 1 回だけ記述します。

このフローは JetPack 6.2 / L4T 36.4.3、Orin Nano 8GB（SKU 0005）で検証済みです。

関連ドキュメント：

- [Jetson 開発環境からカスタム BSP パッケージを作成する](/ja/make_diy_bsp_for_jetson/)
- [Jetson Orin Nano Developer Kit から reComputer へ /home データを移行する](/ja/migrate_home_data_from_jetson_orin_nano_developer_kit_to_recomputer/)
- [選択した製品に JetPack をフラッシュする](/ja/flash/jetpack_to_selected_product/)

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
      <td>B. ターゲットバンドル</td>
      <td><code>mfi_recomputer-orin-j401.tar.gz</code>（Classic）<br/><code>mfi_recomputer-orin-super-j401.tar.gz</code>（Super）</td>
      <td><strong>ターゲットボード</strong>をフラッシュ：ターゲットボードレベルの QSPI + DevKit の完全な APP（<code>/home</code> を含む）</td>
    </tr>
    <tr>
      <td>C. 安全なフォールバック</td>
      <td>公式 BSP + <code>/home</code> のみ移行</td>
      <td>ハイブリッドの結果が異常な場合に使用</td>
    </tr>
  </tbody>
</table>
</div>

:::danger
DevKit 用パッケージ `mfi_jetson-orin-nano-devkit-nvme` をターゲットボードに直接フラッシュしないでください。

mfi ディレクトリ内の単一の `.dtb` を編集するだけでボード適合ができたとみなさないでください。

Classic 用ハイブリッドバンドルを Super に、またはその逆にフラッシュしないでください。両者は pinmux とカメラオーバーレイが異なります。
:::

## 前提条件

### ハードウェア

- ソース：Orin Nano **Developer Kit**（この例ではモジュール **SKU 0005** = Orin Nano 8GB、NVMe ブートを使用）
- ターゲット：Seeed **reComputer Classic J4011/J4012** または **reComputer Super**（モジュールも理想的には 0005）
- ホスト：Ubuntu 22.04 x86_64、USB Type-C ケーブル（フラッシュポート）
- ディスク：**100GB 以上** の空き容量を確保（バックアップ + 2 つの mfi + スナップショット）

:::danger
reComputer Classic シリーズは、MAXN Super モードをサポートするには冷却性能が不十分です。Classic デバイスに JetPack 6.2 をフラッシュした場合、**MAXN を有効にしないでください**。
:::

### ホスト側の依存パッケージ

```bash
sudo apt-get update -y
sudo apt-get install -y \
  build-essential flex bison libssl-dev \
  sshpass abootimg nfs-kernel-server \
  libxml2-utils qemu-user-static
```

バックアップ／フラッシュの前に：

```bash
sudo systemctl stop udisks2.service
sudo service nfs-kernel-server start
lsusb | grep 0955:7523   # must show NVIDIA Corp. APX
```

### ボード比較

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>項目</th>
      <th>DevKit</th>
      <th>reComputer Classic</th>
      <th>reComputer Super</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>board-name</td>
      <td><code>jetson-orin-nano-devkit-nvme</code></td>
      <td><code>recomputer-orin-j401</code></td>
      <td><code>recomputer-orin-super-j401</code></td>
    </tr>
    <tr>
      <td>設定ファイル</td>
      <td><code>p3768-0000-p3767-0000-a0-nvme.conf</code></td>
      <td><code>recomputer-orin-j401.conf</code></td>
      <td><code>recomputer-orin-super-j401.conf</code></td>
    </tr>
    <tr>
      <td>Pinmux</td>
      <td>NVIDIA DevKit（DP）</td>
      <td>Classic HDMI</td>
      <td>Super HDMI</td>
    </tr>
    <tr>
      <td>カメラオーバーレイ</td>
      <td>NVIDIA ダイナミック</td>
      <td>Seeed デュアル IMX219</td>
      <td>Seeed クアッド IMX219</td>
    </tr>
    <tr>
      <td>SKU0005 メイン DTB</td>
      <td><code>...-0005-nv(-super).dtb</code></td>
      <td colspan="2"><strong>引き続き使用</strong> <code>tegra234-p3768-0000+p3767-0005-nv-super.dtb</code></td>
    </tr>
    <tr>
      <td>最終的な mfi</td>
      <td>DevKit のみ</td>
      <td>Classic のみ</td>
      <td>Super のみ</td>
    </tr>
  </tbody>
</table>
</div>

バックアップ例の `board_spec`：

```text
3767-300-0005-V.2-1-1-jetson-orin-nano-devkit-nvme-
```

## 1. Linux_for_Tegra ワークスペースを準備する

[Jetson 開発環境からカスタム BSP パッケージを作成する](/ja/make_diy_bsp_for_jetson/#1-prepare-working-directory-on-pc) の表から Seeed L4T 作業パッケージをダウンロードします（この例では JetPack 6.2 / L4T 36.4.3 以降）。

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

<Tabs>
  <TabItem value="classic" label="reComputer Classic" default>

```bash
test -f Linux_for_Tegra/recomputer-orin-j401.conf
test -f Linux_for_Tegra/jetson-orin-nano-devkit-nvme.conf
ls Linux_for_Tegra/kernel/dtb/tegra234-j401-*-recomputer.dtb
ls Linux_for_Tegra/kernel/dtb/tegra234-dcb-p3767-0000-hdmi.dtbo
```

  </TabItem>
  <TabItem value="super" label="reComputer Super">

```bash
cd Linux_for_Tegra
test -f recomputer-orin-super-j401.conf
test -f jetson-orin-nano-devkit-nvme.conf
test -f kernel/dtb/tegra234-dcb-p3767-0000-hdmi.dtbo
test -f kernel/dtb/tegra234-p3767-camera-p3768-imx219-quad-seeed.dtbo
```

  </TabItem>
</Tabs>

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/dk-to-classic/section-2-verify.png"/></div>

## 2. DevKit の完全な環境をバックアップする

### 2.1 ソースデバイスをリカバリモードにする

DevKit のフラッシュポートを USB Type-C データケーブルでホストに接続し、リカバリモードに入れます。ホスト側で `lsusb` を実行すると、`0955:7523` **APX** が表示されるはずです。

リカバリモードへの手順については、[選択した製品に JetPack をフラッシュする](/ja/flash/jetpack_to_selected_product/) を参照してください。

バックアップ中、デバイスが一時的に `0955:7035`（Linux for Tegra / initrd）に切り替わることがあります。これは正常です。

### 2.2 バックアップコマンド

```bash
cd Linux_for_Tegra
sudo ./tools/backup_restore/l4t_backup_restore.sh \
  -e nvme0n1 -b -c jetson-orin-nano-devkit-nvme
```

:::warning
ソースが DevKit の場合、最初のバックアップでターゲットボード名を使用しないでください。`board_spec` と後続のベースラインが破損します。
:::

### 2.3 検証

```bash
ls -lah tools/backup_restore/images/
head -5 tools/backup_restore/images/nvpartitionmap.txt
```

次の点を確認します：

- `board_spec` に `jetson-orin-nano-devkit-nvme` が含まれている
- `nvme0n1p1.tar.zst`（または後で変換された大きな APP）が **GB 単位のサイズ** である
- `QSPI0.img` が存在する（これは **DevKit** の QSPI であり、ハイブリッドではターゲットボードの QSPI として再利用してはいけません）

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/dk-to-classic/section-3.3-verify.png"/></div>

推奨：すぐにスナップショットを作成します：

```bash
sudo cp -a tools/backup_restore/images ~/backup_images_dk_sku0005
```

## 3. DevKit 同一キャリア DIY BSP を構築する（任意）

デバイスを再度 **APX** 状態にします。ホスト側で `lsusb` を実行すると、`0955:7523 APX` が表示されるはずです：

```bash
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh \
  --use-backup-image --no-flash --network usb0 --massflash 5 \
  jetson-orin-nano-devkit-nvme internal
```

成果物：

- `mfi_jetson-orin-nano-devkit-nvme/`
- `mfi_jetson-orin-nano-devkit-nvme.tar.gz`

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/dk-to-classic/section-4-artifacts.png"/></div>

:::danger
これは DevKit の再フラッシュ専用です。このパッケージでターゲットボードをフラッシュしないでください。

その APP はハイブリッドバンドルのデータソースとして使用できますが、その QSPI は再利用できません。
:::

## 4. 必読：QSPI トラップ

`--use-backup-image` を指定すると、`convert_backup_image_to_initrd_flash` は次の場所に配置します：

| バックアップ内容 | 配置先 |
| --- | --- |
| NVMe / APP | `tools/kernel_flash/images/external/` |
| **ソース** `QSPI0.img` | `tools/kernel_flash/images/internal/` |

したがって：

| 誤ったアプローチ | 結果 |
| --- | --- |
| `mfi/.../rootfs` または 1 つの `.dtb` だけを編集する | 効果なし（実際にフラッシュされるのは bak / QSPI） |
| DevKit をバックアップし、その後ターゲットボード名に直接入れ替えて `--use-backup-image` | **依然として DevKit の QSPI（DP pinmux）をフラッシュ** するため、HDMI/USB が正しくない可能性あり |
| conf を変更してから `--flash-only` を実行 | `--flash-only` は conf からイメージを再生成 **しません** |

ターゲットボードで本当に異なるのは、ボード conf 内の **HDMI pinmux + DCB/カメラオーバーレイ** です：

<Tabs>
  <TabItem value="classic" label="reComputer Classic" default>

`recomputer-orin-j401.conf` の主な内容：

```bash
PINMUX_CONFIG="tegra234-mb1-bct-pinmux-p3767-hdmi-a03.dtsi"
PMC_CONFIG="tegra234-mb1-bct-padvoltage-p3767-hdmi-a03.dtsi"
OVERLAY_DTB_FILE+=",tegra234-dcb-p3767-0000-hdmi.dtbo,tegra234-p3767-camera-p3768-imx219-dual-seeed.dtbo"
DCE_OVERLAY_DTB_FILE="tegra234-dcb-p3767-0000-hdmi.dtbo"
```

  </TabItem>
  <TabItem value="super" label="reComputer Super">

`recomputer-orin-super-j401.conf` の主な内容：

```bash
PINMUX_CONFIG="recomputer-super-orin-j401-pinmux-p3767-hdmi-a03.dtsi";
PMC_CONFIG="recomputer-super-orin-j401-padvoltage-p3767-hdmi-a03.dtsi";
OVERLAY_DTB_FILE+=",tegra234-dcb-p3767-0000-hdmi.dtbo,tegra234-p3767-camera-p3768-imx219-quad-seeed.dtbo";
DCE_OVERLAY_DTB_FILE="tegra234-dcb-p3767-0000-hdmi.dtbo";
```

  </TabItem>
</Tabs>

SKU **0005** の場合、メイン DTB ファイル名は依然として NVIDIA の `*-0005-nv-super.dtb` です。NX 16GB 向けのパスである `*-0000-recomputer.dtb` へ**強制的に切り替えないでください**。

## 5. ハイブリッド BSP：ターゲットバンドルを構築する

コアとなる考え方：

1. **APP**：DevKit バックアップをそのまま使用する（完全なユーザー環境）
2. **QSPI**：ターゲットボードの conf で再生成する（`--use-backup-image` **なし**）
3. ターゲットボード用 mfi に組み立てる

```text
DevKit backup APP  ──►  external/ (nvme0n1p1_bak.img, etc.)
Target conf new QSPI ──►  internal/ (QSPI shards, not DevKit monolithic QSPI0.img)
                     └──► mfi_recomputer-orin-<target>(.tar.gz)
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

### 5.2 ターゲットボード QSPI を生成する

デバイスは APX モードである必要があります。モジュールパラメータはバックアップと一致させます（この例：3767 / 0005 / 300 / V.2）：

<Tabs>
  <TabItem value="classic" label="reComputer Classic" default>

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

ログには HDMI pinmux が表示されるはずです。例：`tegra234-mb1-bct-pinmux-p3767-hdmi-a03`。

  </TabItem>
  <TabItem value="super" label="reComputer Super">

まず、Super ボード設定を継承しつつ、明示的に NVMe root を使用するエイリアスを作成します：

```bash
cd Linux_for_Tegra
cat > recomputer-orin-super-j401-nvme.conf <<'EOF'
source "${LDK_DIR}/recomputer-orin-super-j401.conf";
EOF
```

```bash
cd Linux_for_Tegra
sudo BOARDID=3767 BOARDSKU=0005 FAB=300 BOARDREV=V.2 \
  CHIP_SKU=00:00:00:D5 \
  ./tools/kernel_flash/l4t_initrd_flash.sh \
  --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_t234_nvme.xml \
  -p "-c bootloader/generic/cfg/flash_t234_qspi.xml --no-systemimg" \
  --no-flash --massflash 5 --showlogs --network usb0 \
  recomputer-orin-super-j401-nvme external
```

:::danger
この NVMe シナリオでは、最終的な rootdev として `internal` を使用しないでください。検証済みセットアップでは、これにより `SDCARD instance: 0` を持つ MB2 設定が生成され、SD カードが存在しない場合にブートが `Busy Spin` で停止しました。
:::

ログには次の内容が含まれている必要があります：

```text
recomputer-super-orin-j401-pinmux-p3767-hdmi-a03.dtsi
tegra234-p3767-camera-p3768-imx219-quad-seeed.dtbo
```

  </TabItem>
</Tabs>

推奨：新しい QSPI internal を保存します：

<Tabs>
  <TabItem value="classic" label="reComputer Classic" default>

```bash
sudo cp -a tools/kernel_flash/images/internal ~/j401_qspi_internal_save
```

:::info
このガイドで生成した QSPI internal（SKU 0005 / L4T 36.4.3）は、直接ダウンロード可能です：

```bash
wget -O j401_qspi_internal_save.tar.gz \
  https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/dk-to-classic/j401_qspi_internal_save.tar.gz
mkdir -p Linux_for_Tegra/tools/kernel_flash/images/internal
tar xpf j401_qspi_internal_save.tar.gz -C Linux_for_Tegra/tools/kernel_flash/images/internal/
```

ダウンロードしたファイルを `Linux_for_Tegra/tools/kernel_flash/images/internal/` に配置すると、上記の QSPI 生成ステップをスキップできます。

**再利用の前提条件**：ターゲットボードが reComputer Classic J4011/J4012、モジュール SKU 0005、L4T 36.4.3 であること。いずれかの条件が一致しない場合は、このセクションに従って QSPI を再生成してください。
:::

  </TabItem>
  <TabItem value="super" label="reComputer Super">

```bash
sudo cp -a tools/kernel_flash/images/internal ~/super_j401_qspi_internal_save
```

Super の `internal/flash.idx` が存在し、モノリシックな DevKit `QSPI0.img` が存在しないことを確認します：

```bash
test -f mfi_recomputer-orin-super-j401/tools/kernel_flash/images/internal/flash.idx
test ! -f mfi_recomputer-orin-super-j401/tools/kernel_flash/images/internal/QSPI0.img
```

:::info
このガイドで生成した Super QSPI internal（SKU 0005 / L4T 36.4.3）は、直接ダウンロード可能です：

```bash
wget -O super_j401_qspi_internal_save.tar.gz \
  https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/dk-to-super/super_j401_qspi_internal_save.tar.gz
mkdir -p Linux_for_Tegra/tools/kernel_flash/images/internal
tar xpf super_j401_qspi_internal_save.tar.gz -C Linux_for_Tegra/tools/kernel_flash/images/internal/
```

ダウンロードしたファイルを `Linux_for_Tegra/tools/kernel_flash/images/internal/` に配置すると、上記の QSPI 生成ステップをスキップできます。

**再利用の前提条件**：ターゲットボードが reComputer Super、モジュール SKU 0005、L4T 36.4.3 であること。いずれかの条件が一致しない場合は、このセクションに従って QSPI を再生成してください。
:::

  </TabItem>
</Tabs>

### 5.3 mfi を組み立てる

<Tabs>
  <TabItem value="classic" label="reComputer Classic" default>

最終的なディレクトリは次を満たしている必要があります：

| パス | 内容 |
| --- | --- |
| `mfi_recomputer-orin-j401/recomputer-orin-j401.conf` | 存在する |
| `.../tools/kernel_flash/images/internal/` | **新しい J401 QSPI**（DevKit モノリシック `QSPI0.img` がない、または DevKit とハッシュが異なる；`flash.idx` は複数行のシャードであることが多い） |
| `.../tools/kernel_flash/images/external/nvme0n1p1_bak.img` | **GB 単位の大きさの** APP |

任意のアーカイブ：

```bash
cd Linux_for_Tegra
sudo tar czf mfi_recomputer-orin-j401.tar.gz mfi_recomputer-orin-j401
```

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/dk-to-classic/section-6.3-artifacts.png"/></div>

  </TabItem>
  <TabItem value="super" label="reComputer Super">

:::danger
DevKit mfi の `external/` ディレクトリ全体を無条件にコピーしないでください。

ソースの DevKit が 256GB ドライブを使用し、ターゲットの Super が 128GB を使用している場合、ソース GPT は `GPT is larger than device storage` というメッセージとともに `partprobe` で失敗します。
:::

検証済みターゲットドライブは `128035676160` バイトでした。標準の `flash_l4t_t234_nvme.xml` external レイアウト `102400000000` バイトを使用し、APP ペイロードのみを置き換えました：

```bash
cd Linux_for_Tegra

# Use the standard external images generated for the current Super workspace:
sudo cp -a tools/kernel_flash/images/external/. \
  mfi_recomputer-orin-super-j401/tools/kernel_flash/images/external/

# Reuse only the DevKit APP content:
sudo cp -a \
  mfi_jetson-orin-nano-devkit-nvme/tools/kernel_flash/images/external/nvme0n1p1_bak.img* \
  mfi_recomputer-orin-super-j401/tools/kernel_flash/images/external/

sudo tee \
  mfi_recomputer-orin-super-j401/tools/kernel_flash/images/external/flash.cfg \
  >/dev/null <<'EOF'
APP_ext=nvme0n1p1_bak.img
external_device=nvme0n1p1
EOF
```

検証：

```bash
test -f mfi_recomputer-orin-super-j401/recomputer-orin-super-j401.conf
test -f mfi_recomputer-orin-super-j401/tools/kernel_flash/images/external/nvme0n1p1_bak.img
test ! -f mfi_recomputer-orin-super-j401/tools/kernel_flash/images/internal/QSPI0.img
```

次の 3 つの条件がすべて満たされている必要があります：

- `internal/` に新しく生成された Super QSPI が含まれていること；
- external GPT が物理ターゲットディスクより小さいこと；
- `APP_ext` が DevKit の `nvme0n1p1_bak.img` を指していること。

アーカイブする前に、3 つの一貫性要件も確認してください—[Tech Note A](#Tech-Note-A-Super-First-Boot-Consistency) を参照。

アーカイブ：

```bash
cd Linux_for_Tegra
sudo tar czf mfi_recomputer-orin-super-j401.tar.gz \
  mfi_recomputer-orin-super-j401
sudo gzip -t mfi_recomputer-orin-super-j401.tar.gz
sha256sum mfi_recomputer-orin-super-j401.tar.gz \
  > mfi_recomputer-orin-super-j401.tar.gz.sha256
```

この検証で構築された最終的な一貫性のあるアーカイブは `12,822,619,478` バイトで、`gzip -t` を通過し、次の SHA-256 を持ちます：

```text
fb1d502d9e869d67226eaf71bbe2462fab4e2f1dacf8a6e7fa59057c66a2e845
```

  </TabItem>
</Tabs>

## 6. ターゲットボードへのフラッシュ

### 6.1 ターゲットを APX モードにする

`lsusb` → `0955:7523 NVIDIA Corp. APX`

### 6.2 フラッシュコマンド

**展開済みディレクトリがすでにローカルに存在する場合は、** `tar xpf` **を再度実行しないでください：**

<Tabs>
  <TabItem value="classic" label="reComputer Classic" default>

```bash
cd Linux_for_Tegra/mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh \
  --flash-only --massflash 1 --network usb0 --showlogs
```

  </TabItem>
  <TabItem value="super" label="reComputer Super">

```bash
cd Linux_for_Tegra/mfi_recomputer-orin-super-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh \
  --flash-only --massflash 1 --network usb0 --showlogs
```

  </TabItem>
</Tabs>

別の PC に `.tar.gz` のみがある場合のみ：

<Tabs>
  <TabItem value="classic" label="reComputer Classic" default>

```bash
sudo tar xpf mfi_recomputer-orin-j401.tar.gz
cd mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh \
  --flash-only --massflash 1 --network usb0 --showlogs
```

  </TabItem>
  <TabItem value="super" label="reComputer Super">

```bash
sudo tar xpf mfi_recomputer-orin-super-j401.tar.gz
cd mfi_recomputer-orin-super-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh \
  --flash-only --massflash 1 --network usb0 --showlogs
```

  </TabItem>
</Tabs>

:::warning
リカバリまたは APP の書き込み中に `/mnt/external/...: Permission denied` が表示される場合、これは NFS パーミッションの問題です—[Tech Note B](#Tech-Note-B-NFS-Permission-Denied) を参照してください。
:::

### 6.3 フラッシュ中の正常なメッセージ

| ログ | 意味 |
| --- | --- |
| `p3768-0000-p3767-0000-a0.conf: No such file or directory` | `--flash-only` でよく見られる；イメージは事前にビルド済みなので続行 |
| `rpcbind already running` | 無視して問題ありません |
| `blockdev: cannot open /dev/mmcblk0boot0` | Orin Nano にはそのようなパーティションがないため、通常は無害 |
| RCM-boot + `SSH ready` | 通常のフラッシュ開始 |
| DTB `...-0005-nv-super.dtb` | SKU0005 に対して正しい |
| 複数の `internal` 行 + `Starting to flash to qspi` | ターゲットボード QSPI をフラッシュ中 |
| `tar ... zstd ... nvme0n1p1_bak.img` | APP を復元中（最も時間のかかるステップ；数十分かかる場合があります） |
| `Successfully flash the qspi` | QSPI フラッシュ完了 |
| `Successfully flash the external device` | 外部デバイスのフラッシュ完了 |
| `Flashing success` / `Flash is successful` | フラッシュ成功 |

:::warning
**成功の完了メッセージが表示されるまで、電源を切ったりケーブルを抜いたりしないでください。**
:::

## 7. フラッシュ後の確認

フラッシュが成功したら、Recovery ボタンまたはジャンパを離し、電源を入れ直してください。`lsusb` が依然として `0955:7523 APX` を報告する場合、デバイスは Recovery モードのままで、Linux が起動していません。

通常起動後、次を実行します：

```bash
cat /proc/device-tree/model
ls /boot/kernel_tegra234*.dtb
ls /boot/*.dtbo | grep -E 'hdmi|imx219' || true

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
sudo なしで実行すると、`dmesg` が `Operation not permitted` を報告する場合があります。これは権限の問題なので、`sudo` を使用してください。
:::

### 結果の見方（SKU 0005）

**1) `/proc/device-tree/model` が DevKit のまま表示される — SKU 0005 では正常**

例：

```text
NVIDIA Jetson Orin Nano Engineering Reference Developer Kit Super
```

理由：**SKU 0005** のターゲットボード conf は、NVIDIA の `tegra234-p3768-0000+p3767-0005-nv-super.dtb` を選択します。`tegra234-j401-*-recomputer.dtb` には切り替え**ません**。そのため model 文字列は公式 DevKit のように見えたままです。この行だけを見て「間違った DevKit バンドルを書き込んだ」と**判断しないでください**。

**2) `/boot` 配下の DTB ファイル名**

よく見られる例：

```text
/boot/kernel_tegra234-p3768-0000+p3767-0000-nv.dtb
/boot/kernel_tegra234-p3768-0000+p3767-0005-nv.dtb
```

`*-0005-nv-super.dtb` というファイル名が表示されない場合があります。実際にブートに使われる DTB は、多くの場合 **UEFI/QSPI** によって選択されます。`/boot` の一覧はあくまで参考情報です。

**3) `grep hdmi|imx219` が空 — それ自体は失敗ではない**

Hybrid フラッシュ後、`/boot/*.dtbo` には DevKit バックアップ由来の汎用オーバーレイ一覧が残っていることがよくあります。`tegra234-dcb-p3767-0000-hdmi.dtbo` や Seeed カメラのオーバーレイが**表示されない場合があります**。Seeed HDMI/カメラの設定の多くは、**新しいターゲットボードの QSPI / UEFI オーバーレイ**経路を通じて有効になります。

**4) 「動くかどうか」で判断する**

| チェック項目 | 正常な例 |
| --- | --- |
| USB | ハブ、マウス、Bluetooth、USB Ethernet が列挙される（`lsusb` に複数のデバイスが表示される） |
| 有線 Ethernet | Classic：`enP8p1s0` などが `UP`；Super： [Tech Note C](#tech-note-c-super-lan743x-wired-ethernet-limitation) を参照 |
| Wi‑Fi | `wlP1p1s0` が `UP` |
| ディスプレイ | デスクトップが動作する、または `xrandr` に出力がある |
| ユーザー環境 | 元の DevKit のユーザー、ソフトウェア、データが残っている |
| CUDA | `nvcc --version` が動作する（この例では **12.6**）。APP クローンが正常であることを示す |

<Tabs>
  <TabItem value="classic" label="reComputer Classic" default>

Classic では、デュアルカメラ構成（`imx219-dual-seeed`）の検証に重点を置いてください。

**デバイス上：model / DTB**

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/dk-to-classic/section-7.4.1-model-dtb.png"/></div>

**デバイス上：元の DevKit にインストールされていた CUDA が引き続き動作する**

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/dk-to-classic/section-7.4.1-cuda-nvcc.png"/></div>

  </TabItem>
  <TabItem value="super" label="reComputer Super">

Super では、Super に必要なクアッドカメラ構成（`imx219-quad-seeed`）の検証に重点を置いてください。`/boot` 配下に `imx219-quad-seeed.dtbo` というファイル名が存在しなくても、それ自体は失敗ではありません。オーバーレイは QSPI/UEFI を通じて適用されている可能性があります。

検証済みの結果：

- システムは `display-manager` が有効な状態で Ubuntu のログイン画面まで到達した；
- HDMI、USB キーボード/マウス、Bluetooth、Wi‑Fi が動作した；
- クローンされた DevKit APP と CUDA 12.6 が保持されていた；
- クアッドカメラオーバーレイと 4 つの IMX219/I2C 設定ノードが存在した。

<div></div>
</TabItem>
</Tabs>

### `extlinux.conf` を編集するタイミング

**HDMI / USB / ブートに異常がある場合に限り**、`/boot/extlinux/extlinux.conf` の `LABEL primary` の下に次を追加してみてください：

```text
FDT /boot/kernel_tegra234-p3768-0000+p3767-0005-nv-super.dtb
```

（そのファイルが `/boot` に存在しない場合は、`...-0005-nv.dtb` を試すか、先に BSP の `kernel/dtb/` からコピーしてください。）

```bash
sudo reboot
```

それでも異常が続く場合は、セクション 8 のフォールバックを使用してください。

## 8. フォールバック（公式パス）

Hybrid フラッシュ後にパーティション / UEFI / 周辺機器に異常が残る場合：

1. Seeed の手順に従って、ターゲットボードの**公式** BSP をフラッシュします（DevKit mfi はフラッシュしないでください）。
2. バックアップ（`nvme0n1p1.tar.zst`）から `/home` を抽出するか、[Migrate /home Data from Jetson Orin Nano Developer Kit to reComputer](/ja/migrate_home_data_from_jetson_orin_nano_developer_kit_to_recomputer/) に従います。
3. ターゲットボード上に `/home` を復元し、その後必要に応じてシステムレベルのソフトウェアを再インストールします（`/usr`、`/etc`、Docker などは別途対応が必要です）。

長所：ボードファームウェアが最もクリーンな状態になる。短所：`/` ディスク全体のクローンではない。

## 9. 主要パス クイックリファレンス

| 種類 | パス（`Linux_for_Tegra/` 配下） |
| --- | --- |
| DK mfi | `mfi_jetson-orin-nano-devkit-nvme.tar.gz` |
| Classic バンドル mfi | `mfi_recomputer-orin-j401.tar.gz` |
| Super バンドル mfi | `mfi_recomputer-orin-super-j401.tar.gz` |
| Classic conf | `recomputer-orin-j401.conf` |
| Super conf | `recomputer-orin-super-j401.conf` |
| HDMI DCB | `kernel/dtb/tegra234-dcb-p3767-0000-hdmi.dtbo` |
| Classic デュアル IMX219 | `kernel/dtb/tegra234-p3767-camera-p3768-imx219-dual-seeed.dtbo` |
| Super クアッド IMX219 | `kernel/dtb/tegra234-p3767-camera-p3768-imx219-quad-seeed.dtbo` |
| J401 DTB | `kernel/dtb/tegra234-j401-p3768-0000+p3767-*-recomputer.dtb` |
| SKU0005 DTB | `kernel/dtb/tegra234-p3768-0000+p3767-0005-nv-super.dtb` |

## 10. フロー概要

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
          └─► [APX] target board conf → generate QSPI
                    │           │
                    │           ├─ Classic: recomputer-orin-j401 internal
                    │           └─ Super:   recomputer-orin-super-j401-nvme external
                    │
                    ▼
              assemble mfi_recomputer-orin-<target>
                    │
                    ▼
              [target APX] --flash-only
                    │
                    ▼
              check display/USB/NVMe/user environment
```

## 11. FAQ

**Q: ディレクトリと `.tar.gz` の両方が存在します。まだ展開する必要がありますか？**  
A: いいえ。`mfi_recomputer-orin-*` ディレクトリが存在する場合は、その中に `cd` して `--flash-only` を実行してください。

**Q: ターゲットボードモジュールが 0005 ではありません。どうすればよいですか？**  
A: `BOARDSKU` を変更し、ターゲットボードの conf 内の `p3767_super_overlay` に従って一致する DTB を選択し、QSPI を再生成してください。

**Q: ディスク全体をクローンせずに、`/home` だけを保持したいのですが？**  
A: セクション 8 のフォールバックを使用してください。その方が簡単で信頼性があります。

**Q: Classic Hybrid バンドルの名前を変えて Super にフラッシュできますか？**  
A: できません。ピンマックスとカメラオーバーレイが異なります。対応する QSPI を再生成してください。

**Q: なぜ直接 `--use-backup-image` を使わないのですか？**  
A: DevKit の `QSPI0.img` も再利用してしまう可能性があるためです。Hybrid では APP のみを再利用すべきです。

**Q: ソースとターゲットのドライブ容量が異なる場合はどうなりますか？（Super）**  
A: ターゲットドライブ用の GPT を生成し、APP ペイロードのみを置き換えてください。拡張された APP は新しい APP パーティションに収まる必要があります。

**Q: なぜ DIY BSP wiki の例では `recomputer-orin-j401` を使っているのですか？**  
A: その例では、**ソースとターゲットの両方が Seeed ボードである**ことを前提としています。ソースが公式 DevKit の場合、バックアップはまず `jetson-orin-nano-devkit-nvme` を使用し、その後この Hybrid チュートリアルに従ってターゲットボードに合わせる必要があります。

## 技術メモ

### Tech Note A. Super 初回起動の一貫性

アーカイブ前に、次の 3 つの一貫性要件を確認してください：

1. `boot.img` 内の `root=PARTUUID=...` が、外部 GPT における APP パーティションの一意 GUID と一致していること；
2. DevKit APP の `/etc/fstab` にある `/boot/efi` の UUID が、新しい `esp.img` の FAT UUID と一致していること；
3. クローンした DevKit カーネルが Super LAN7430 用の `lan743x` ロード中にクラッシュする場合は、事前に次をインストールしておくこと：

```text
/etc/modprobe.d/blacklist-lan743x-super-hybrid.conf
```

```conf
blacklist lan743x
install lan743x /bin/false
```

最初の 2 つが一致しないと、root マウントに失敗するか、メンテナンスモードに入ります。修復用 initrd で `sgdisk` を使ってライブな PARTUUID を変更するのは、再現性のあるビルド手順ではなく、あくまでリカバリ手段です。GPT と `boot.img` をまとめて再生成し、最終アーカイブを作成する前に APP をパッチしてください。

### Tech Note B. NFS Permission denied

リカバリまたは APP の書き込み中に `/mnt/external/...: Permission denied` が表示される場合は、NFS クライアントが mfi パス内のすべての親ディレクトリをトラバースできることを確認してください。

たとえば、ユーザーホームディレクトリのモードが `750` の場合、フラッシュ中だけ一時的に `751` を使用し、その直後に元に戻します：

```bash
sudo chmod 751 /home/$USER
# Re-enter APX and flash
sudo chmod 750 /home/$USER
```

モード `751` はトラバース権限のみを追加し、他のユーザーがディレクトリを一覧表示できるようにはしません。`777` は使用しないでください。

### Tech Note C. Super lan743x 有線 Ethernet の制限

このテストで使用したクローン済み DevKit RT カーネルは、Super LAN7430 用に `lan743x` をロードする際にカーネル Oops を引き起こしました。最終的な Hybrid BSP では `lan743x` をブラックリスト化しています（[Tech Note A](#tech-note-a-super-first-boot-consistency) の項目 3 を参照）。そのため、オンボード有線 Ethernet は一時的に利用できませんが、Wi‑Fi には影響しません。

これは Super の QSPI やピンマックスの不具合ではなく、ソース APP/カーネルドライバの互換性による制限です。有線 Ethernet を本番環境で使用する前に、互換性のあるドライバへ移植またはアップグレードし、ストレステストを実施してください。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
