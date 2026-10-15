---
description: この FAQ では、Seeed Jetson デバイスを JetPack 7.2 にアップグレードした後に、Intel AX210/AX200 および Realtek RTL8852BE のドライバインストール、ファームウェアの解凍、検証手順を含め、サポートされる Wi-Fi モジュールを復旧する方法を説明します。
title: JetPack 7.2 無線モジュールセットアップガイド
keywords:
  - Jetson
  - JetPack 7.2
  - AX210
  - AX200
  - RTL8852BE
  - Wi-Fi
  - iwlwifi
  - rtw89
image: https://files.seeedstudio.com/wiki/AX210Wi-Fi/jp72-ax210.png
slug: /jetpack72_ax210_ax200_wifi_setup_guide_bk
last_update:
  date: 07/15/2026
  author: Dayu
createdAt: '2026-07-14'
updatedAt: '2026-07-31'
url: https://wiki.seeedstudio.com/ja/jetpack72_ax210_ax200_wifi_setup_guide_bk/
---

# JetPack 7.2 無線モジュールセットアップガイド

Seeed Jetson デバイスを JetPack 7.2 にアップグレードした後、M.2 Key E Wi-Fi モジュールは PCIe 上では検出されるものの、無線ネットワークインターフェースが表示されない場合があります。

本ガイドでは、以下のモジュールに対する JetPack 7.2 用の修復フローを説明します。

- Intel AX210 / AX200（`iwlwifi` および `iwlmvm` を使用）
- Realtek RTL8852BE / 8852BE（`rtw89` ドライバスタックを使用）

修復には通常 2 つの作業が必要です。JetPack 7.2 のカーネル `6.8.12-1021-tegra` に対応したカーネルモジュールをインストールすることと、対応するファームウェアファイルを `/lib/firmware` 配下に解凍することです。

:::note
本ガイドは、カーネル `6.8.12-1021-tegra` を使用する JetPack 7.2 システムを対象としています。修復用ドライバモジュールはこのカーネル向けにビルドされています。`uname -r` の出力が別のカーネルである場合は、そのカーネルバージョン専用のドライバパッケージを使用してください。
:::

## 症状

JetPack 7.2 にアップグレードした後、次のいずれか、または複数の症状が見られる場合があります。

- `lspci` では Wi-Fi モジュールが検出されるが、`ip link` に `wlan0` が表示されない。
- `dmesg` に `iwlwifi` または `rtw89` のファームウェア読み込みエラーが報告される。
- `modprobe` が、期待されるモジュールが見つからないと報告する。
- ドライバを手動で読み込むと一時的には動作するが、再起動後に再び Wi-Fi が消えてしまう。

## 前提条件

- JetPack 7.2 がフラッシュされている Seeed Jetson デバイス。
- カーネルバージョン `6.8.12-1021-tegra`。
- 正しく取り付けられたサポート対象の M.2 Key E Wi-Fi モジュール：Intel AX210、Intel AX200、または Realtek RTL8852BE。
- Ethernet、USB ネットワーク、または別のネットワークアダプタによる一時的なインターネット接続。
- Jetson デバイス上での `sudo` 権限。

まずカーネルバージョンと PCIe デバイスを確認します。

```bash
uname -r
lspci -nnk | grep -A3 -i network
```

一般的な PCI ID は次のとおりです。

| モジュール | 代表的な PCI ID |
| --- | --- |
| Intel AX210 | `8086:2725` |
| Intel AX200 | `8086:2723` |
| Realtek RTL8852BE | `10ec:b852` |

## オプション 1：ワンクリック修復スクリプト

Jetson が Ethernet または別のネットワークアダプタ経由でインターネットにアクセスできる場合は、このオプションを使用してください。

このスクリプトは、公開 OneDrive フォルダから修正版 JetPack 7.2 ドライバモジュールをダウンロードし、`/tmp/jp72_wifi_fix/driver/` に保存し、選択したモジュールセットを現在のカーネルモジュールディレクトリにインストールし、必要なファームウェアファイルを解凍して、起動時に自動ロードされるように設定します。

:::tip
OneDrive の Web リンクは `curl` のダウンロード URL として直接は使用しません。スクリプトはまず共有 OneDrive ページを開いて匿名の SharePoint クッキーを取得し、その後 SharePoint REST の `%24value` エンドポイント経由で各ファイルをダウンロードします。
:::

スクリプトを作成します。

```bash
cat <<'EOF' > fix_jp72_wifi.sh
#!/usr/bin/env bash
set -euo pipefail

usage() {
  cat <<'USAGE'
Usage:
  bash fix_jp72_wifi.sh [--ax210|--ax200|--8852be|--download-only]

Options:
  --ax210          Install Intel AX210 iwlwifi modules and firmware.
  --ax200          Install Intel AX200 iwlwifi modules and firmware.
  --8852be         Install Realtek RTL8852BE rtw89 modules and firmware.
  --download-only  Only download selected driver modules and print the local file tree.
  -h, --help       Show this help text.
USAGE
}

MODEL="auto"
DOWNLOAD_ONLY="0"

while [[ $# -gt 0 ]]; do
  case "$1" in
    --ax210) MODEL="ax210" ;;
    --ax200) MODEL="ax200" ;;
    --8852be) MODEL="8852be" ;;
    --download-only) DOWNLOAD_ONLY="1" ;;
    -h|--help) usage; exit 0 ;;
    *) echo "Unknown option: $1" >&2; usage; exit 1 ;;
  esac
  shift
done

if [[ "$MODEL" == "auto" ]] && command -v lspci >/dev/null 2>&1; then
  if lspci -nn | grep -qiE 'AX210|8086:2725'; then
    MODEL="ax210"
  elif lspci -nn | grep -qiE 'AX200|8086:2723'; then
    MODEL="ax200"
  elif lspci -nn | grep -qiE 'RTL8852BE|8852BE|10ec:b852'; then
    MODEL="8852be"
  fi
fi

if [[ "$MODEL" == "auto" && "$DOWNLOAD_ONLY" == "1" ]]; then
  MODEL="all"
fi

if [[ "$MODEL" == "auto" ]]; then
  echo "Could not auto-detect a supported module. Re-run with --ax210, --ax200, or --8852be." >&2
  exit 1
fi

WORKDIR="${TMPDIR:-/tmp}/jp72_wifi_fix"
SITE_URL="https://seeedstudio88-my.sharepoint.com"
API_ROOT="$SITE_URL/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/_api/web"

INTEL_SHARE_LINK="https://seeedstudio88-my.sharepoint.com/:f:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IgC5g_yzXQ26Sb-yYWtaWU8qATu9387mvrXAvPLhJNuBtxw?e=PvK037"
INTEL_FOLDER_REL="/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Documents/ko%E9%A9%B1%E5%8A%A8%26%E8%AE%BE%E5%A4%87%E6%A0%91/iwlwifi/jp7.2"
INTEL_DIR="$WORKDIR/driver/iwlwifi/jp7.2"

RTW89_SHARE_LINK="https://seeedstudio88-my.sharepoint.com/:f:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IgAxZzXdPP_STosySy14oTGgAZMFt4qQ0IFsKt0oXeAi5KE?e=W84g0E"
RTW89_FOLDER_REL="/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Documents/ko%E9%A9%B1%E5%8A%A8%26%E8%AE%BE%E5%A4%87%E6%A0%91/8852be/jp7.2/8852be-6.8.12-1021-tegra"
RTW89_DIR="$WORKDIR/driver/8852be/jp7.2/8852be-6.8.12-1021-tegra"

if [[ "$(id -u)" -eq 0 ]]; then
  SUDO=()
else
  SUDO=(sudo)
fi

prepare_share_cookie() {
  local share_link="$1"
  local cookie_jar="$2"
  local html_out="$3"

  mkdir -p "$(dirname "$cookie_jar")"
  curl -fsSL -c "$cookie_jar" -b "$cookie_jar" -o "$html_out" "$share_link"
}

download_file() {
  local cookie_jar="$1"
  local folder_rel="$2"
  local out_dir="$3"
  local name="$4"
  local min_size="${5:-100000}"
  local url="$API_ROOT/GetFileByServerRelativeUrl('$folder_rel/$name')/%24value"
  local output="$out_dir/$name"

  mkdir -p "$out_dir"
  echo "Downloading $name..."
  curl -fL -b "$cookie_jar" -o "$output" "$url"

  local size
  size=$(wc -c < "$output")
  if (( size < min_size )); then
    echo "Downloaded file is unexpectedly small: $output" >&2
    echo "Check the OneDrive sharing link or network connection." >&2
    exit 1
  fi
}

download_intel() {
  local cookie="$WORKDIR/iwlwifi.sharepoint.cookies"
  prepare_share_cookie "$INTEL_SHARE_LINK" "$cookie" "$WORKDIR/iwlwifi.sharepoint.html"
  download_file "$cookie" "$INTEL_FOLDER_REL" "$INTEL_DIR" "iwlwifi.ko" 100000
  download_file "$cookie" "$INTEL_FOLDER_REL" "$INTEL_DIR" "iwlmvm.ko" 100000
}

download_rtw89() {
  local cookie="$WORKDIR/rtw89.sharepoint.cookies"
  prepare_share_cookie "$RTW89_SHARE_LINK" "$cookie" "$WORKDIR/rtw89.sharepoint.html"
  download_file "$cookie" "$RTW89_FOLDER_REL" "$RTW89_DIR" "rtw89_8852b.ko" 100000
  download_file "$cookie" "$RTW89_FOLDER_REL" "$RTW89_DIR" "rtw89_core.ko" 100000
  download_file "$cookie" "$RTW89_FOLDER_REL" "$RTW89_DIR" "rtw89_8852be.ko" 50000
  download_file "$cookie" "$RTW89_FOLDER_REL" "$RTW89_DIR" "rtw89_pci.ko" 100000
  download_file "$cookie" "$RTW89_FOLDER_REL" "$RTW89_DIR" "SHA256SUMS" 1
  download_file "$cookie" "$RTW89_FOLDER_REL" "$RTW89_DIR" "modinfo.txt" 1

  if command -v sha256sum >/dev/null 2>&1; then
    (cd "$RTW89_DIR" && awk '{n=$2; sub(".*/", "", n); print $1 "  " n}' SHA256SUMS | sha256sum -c -)
  fi
}

case "$MODEL" in
  ax210|ax200)
    rm -rf "$INTEL_DIR"
    download_intel
    ;;
  8852be)
    rm -rf "$RTW89_DIR"
    download_rtw89
    ;;
  all)
    rm -rf "$WORKDIR/driver"
    download_intel
    download_rtw89
    ;;
esac

echo "Downloaded files:"
case "$MODEL" in
  ax210|ax200) find "$INTEL_DIR" -type f | sort ;;
  8852be) find "$RTW89_DIR" -type f | sort ;;
  all) find "$WORKDIR/driver" -type f | sort ;;
esac

if [[ "$DOWNLOAD_ONLY" == "1" ]]; then
  echo "Download-only mode completed. No system files were changed."
  exit 0
fi

KVER="$(uname -r)"
EXPECTED_KVER="6.8.12-1021-tegra"
if [[ "$KVER" != "$EXPECTED_KVER" ]]; then
  echo "WARNING: current kernel is $KVER, expected $EXPECTED_KVER." >&2
  echo "Only continue if these modules match your kernel." >&2
fi

ensure_zstd() {
  if ! command -v unzstd >/dev/null 2>&1; then
    echo "Installing zstd..."
    "${SUDO[@]}" apt update
    "${SUDO[@]}" apt install -y zstd
  fi
}

install_intel() {
  local module_dir="/lib/modules/$KVER/kernel/drivers/net"
  local stamp
  stamp="$(date +%Y%m%d%H%M%S)"

  if [[ ! -d "$module_dir" ]]; then
    echo "Kernel module directory not found: $module_dir" >&2
    exit 1
  fi

  for name in iwlwifi.ko iwlmvm.ko; do
    if [[ -f "$module_dir/$name" ]]; then
      "${SUDO[@]}" cp -a "$module_dir/$name" "$module_dir/$name.bak.$stamp"
    fi
    "${SUDO[@]}" install -m 0644 "$INTEL_DIR/$name" "$module_dir/$name"
  done

  ensure_zstd

  case "$MODEL" in
    ax210)
      "${SUDO[@]}" unzstd -f -k /lib/firmware/iwlwifi-ty-a0-gf-a0-86.ucode.zst
      "${SUDO[@]}" unzstd -f -k /lib/firmware/iwlwifi-ty-a0-gf-a0.pnvm.zst
      ;;
    ax200)
      shopt -s nullglob
      local ax200_fw=(/lib/firmware/iwlwifi-cc-a0-*.ucode.zst)
      if [[ "${#ax200_fw[@]}" -eq 0 ]]; then
        echo "No AX200 firmware archive found: /lib/firmware/iwlwifi-cc-a0-*.ucode.zst" >&2
        exit 1
      fi
      "${SUDO[@]}" unzstd -f -k "${ax200_fw[@]}"
      ;;
  esac

  printf "iwlwifi\ncfg80211\nmac80211\n" | "${SUDO[@]}" tee /etc/modules-load.d/iwlwifi.conf >/dev/null
  "${SUDO[@]}" depmod -a
  "${SUDO[@]}" modprobe -r iwlmvm iwlwifi 2>/dev/null || true
  "${SUDO[@]}" modprobe iwlwifi
}

install_rtw89() {
  local module_dir="/lib/modules/$KVER/kernel/drivers/net/wireless/realtek/rtw89"
  local stamp
  stamp="$(date +%Y%m%d%H%M%S)"

  "${SUDO[@]}" mkdir -p "$module_dir"
  for name in rtw89_core.ko rtw89_pci.ko rtw89_8852b.ko rtw89_8852be.ko; do
    if [[ -f "$module_dir/$name" ]]; then
      "${SUDO[@]}" cp -a "$module_dir/$name" "$module_dir/$name.bak.$stamp"
    fi
    "${SUDO[@]}" install -m 0644 "$RTW89_DIR/$name" "$module_dir/$name"
  done

  ensure_zstd

  if [[ ! -d /lib/firmware/rtw89 ]]; then
    echo "Firmware directory not found: /lib/firmware/rtw89" >&2
    exit 1
  fi

  shopt -s nullglob
  local rtw_fw=(/lib/firmware/rtw89/rtw885*.zst)
  if [[ "${#rtw_fw[@]}" -eq 0 ]]; then
    echo "No Realtek rtw885*.zst firmware archives found under /lib/firmware/rtw89" >&2
    exit 1
  fi
  "${SUDO[@]}" unzstd -f -k "${rtw_fw[@]}"

  printf "rtw89_8852be\n" | "${SUDO[@]}" tee /etc/modules-load.d/rtw89_8852be.conf >/dev/null
  "${SUDO[@]}" depmod -a
  "${SUDO[@]}" modprobe -r rtw89_8852be rtw89_8852b rtw89_pci rtw89_core 2>/dev/null || true
  "${SUDO[@]}" modprobe rtw89_8852be
}

case "$MODEL" in
  ax210|ax200) install_intel ;;
  8852be) install_rtw89 ;;
  all)
    echo "Install mode cannot use MODEL=all. Re-run with --ax210, --ax200, or --8852be." >&2
    exit 1
    ;;
esac

echo "Repair completed. Reboot the Jetson if wlan0 does not appear immediately."
EOF

chmod +x fix_jp72_wifi.sh
```

スクリプトを実行します：

```bash
# Auto-detect the Wi-Fi module and repair the driver
bash fix_jp72_wifi.sh

# If auto-detection fails, specify the module manually
bash fix_jp72_wifi.sh --ax210
bash fix_jp72_wifi.sh --ax200
bash fix_jp72_wifi.sh --8852be
```

システムファイルを変更せずに OneDrive のダウンロードパスのみを検証するには、次を実行します：

```bash
# Download all supported driver packages and print their local tree
bash fix_jp72_wifi.sh --download-only

# Or download only one package
bash fix_jp72_wifi.sh --8852be --download-only
```

想定されるダウンロード構造：

```text
/tmp/jp72_wifi_fix/driver/iwlwifi/jp7.2/iwlmvm.ko
/tmp/jp72_wifi_fix/driver/iwlwifi/jp7.2/iwlwifi.ko
/tmp/jp72_wifi_fix/driver/8852be/jp7.2/8852be-6.8.12-1021-tegra/SHA256SUMS
/tmp/jp72_wifi_fix/driver/8852be/jp7.2/8852be-6.8.12-1021-tegra/modinfo.txt
/tmp/jp72_wifi_fix/driver/8852be/jp7.2/8852be-6.8.12-1021-tegra/rtw89_8852b.ko
/tmp/jp72_wifi_fix/driver/8852be/jp7.2/8852be-6.8.12-1021-tegra/rtw89_8852be.ko
/tmp/jp72_wifi_fix/driver/8852be/jp7.2/8852be-6.8.12-1021-tegra/rtw89_core.ko
/tmp/jp72_wifi_fix/driver/8852be/jp7.2/8852be-6.8.12-1021-tegra/rtw89_pci.ko
```

## オプション 2: 手動セットアップ

ファイルを手動でダウンロードしてインストールしたい場合は、このオプションを使用します。

### Intel AX210 / AX200

以下の OneDrive フォルダから JetPack 7.2 Intel ドライバパッケージをダウンロードします：

- [JetPack 7.2 AX210/AX200 driver modules](https://seeedstudio88-my.sharepoint.com/:f:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IgC5g_yzXQ26Sb-yYWtaWU8qATu9387mvrXAvPLhJNuBtxw?e=PvK037)

このフォルダには次が含まれます：

- `iwlwifi.ko`
- `iwlmvm.ko`

両方のファイルを Jetson にコピーし、例えば `~/Downloads/` 配下に置いてから、現在のカーネルモジュールを置き換えます：

```bash
KVER=$(uname -r)
MODULE_DIR=/lib/modules/${KVER}/kernel/drivers/net

# Back up the original modules
sudo cp ${MODULE_DIR}/iwlwifi.ko ${MODULE_DIR}/iwlwifi.ko.bak
sudo cp ${MODULE_DIR}/iwlmvm.ko ${MODULE_DIR}/iwlmvm.ko.bak

# Install the JetPack 7.2 compatible modules
sudo cp ~/Downloads/iwlwifi.ko ${MODULE_DIR}/
sudo cp ~/Downloads/iwlmvm.ko ${MODULE_DIR}/

sudo depmod -a
```

必要に応じて `zstd` をインストールします：

```bash
sudo apt update
sudo apt install -y zstd
```

AX210 の場合、`ty-a0-gf-a0` ファームウェアおよび PNVM ファイルを展開します：

```bash
cd /lib/firmware
sudo unzstd -f -k iwlwifi-ty-a0-gf-a0-86.ucode.zst
sudo unzstd -f -k iwlwifi-ty-a0-gf-a0.pnvm.zst
```

AX200 の場合、`cc-a0` ファームウェアファイルを展開します：

```bash
cd /lib/firmware
sudo unzstd -f -k iwlwifi-cc-a0-*.ucode.zst
```

起動時に自動ロードされるように有効化します：

```bash
printf "iwlwifi\ncfg80211\nmac80211\n" | sudo tee /etc/modules-load.d/iwlwifi.conf
sudo depmod -a
sudo modprobe iwlwifi
```

### Realtek RTL8852BE / 8852BE

以下の OneDrive フォルダから JetPack 7.2 Realtek 8852BE ドライバパッケージをダウンロードします：

- [JetPack 7.2 Realtek 8852BE driver modules](https://seeedstudio88-my.sharepoint.com/:f:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IgAxZzXdPP_STosySy14oTGgAZMFt4qQ0IFsKt0oXeAi5KE?e=W84g0E)

検証済みのフォルダパスは `8852be/jp7.2/8852be-6.8.12-1021-tegra/` で、次が含まれます：

- `rtw89_core.ko`
- `rtw89_pci.ko`
- `rtw89_8852b.ko`
- `rtw89_8852be.ko`
- `SHA256SUMS`
- `modinfo.txt`

このフォルダを Jetson にコピーし、例えば `~/Downloads/8852be-6.8.12-1021-tegra/` 配下に置いてから、モジュールをインストールします：

```bash
KVER=$(uname -r)
RTW89_DIR=/lib/modules/${KVER}/kernel/drivers/net/wireless/realtek/rtw89
DRIVER_DIR=~/Downloads/8852be-6.8.12-1021-tegra

sudo mkdir -p ${RTW89_DIR}
sudo cp ${DRIVER_DIR}/rtw89_core.ko ${RTW89_DIR}/
sudo cp ${DRIVER_DIR}/rtw89_pci.ko ${RTW89_DIR}/
sudo cp ${DRIVER_DIR}/rtw89_8852b.ko ${RTW89_DIR}/
sudo cp ${DRIVER_DIR}/rtw89_8852be.ko ${RTW89_DIR}/
```

必要に応じて `zstd` をインストールし、その後 Realtek ファームウェアファイルを展開します：

```bash
sudo apt update
sudo apt install -y zstd

cd /lib/firmware/rtw89
sudo unzstd -f -k rtw885*.zst
```

モジュール依存関係を更新し、ドライバをロードします：

```bash
printf "rtw89_8852be\n" | sudo tee /etc/modules-load.d/rtw89_8852be.conf
sudo depmod -a
sudo modprobe rtw89_8852be
```

:::note
モジュール名は `rtw89_8852be` です。`sudo modprobe 8852be` を実行すると、`8852be` はカーネルモジュール名ではないため失敗します。
:::

ワイヤレスインターフェースがすぐに表示されない場合は、Jetson を再起動します：

```bash
sudo reboot
```

## Wi-Fi の確認

再起動後、次のコマンドを使用します：

```bash
# Check PCI device detection
lspci -nnk | grep -A3 -i network

# Check Intel or Realtek Wi-Fi logs
sudo dmesg | grep -Ei 'iwl|rtw89'

# Check wireless interface
ip link show

# Check loaded modules
lsmod | grep -E 'iwl|rtw89'
```

セットアップが成功していれば、Wi-Fi デバイス、想定されるカーネルモジュール、および `wlan0` のようなワイヤレスインターフェースが表示されます。

次の AX210 の結果は、修復後の最終的に Wi-Fi が有効になった状態を示しています：

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/AX210Wi-Fi/jp72-ax210.png" />
</div>

## トラブルシューティング

| 症状 | 確認事項 |
| --- | --- |
| `lspci` が Wi-Fi モジュールを検出できない | M.2 Key E の取り付けを確認し、キャリアボードのデバイスツリーで PCIe レーンが有効になっていることを確認します。 |
| Intel の `dmesg` がファームウェア読み込み失敗を報告する | 対応する `.ucode` と、AX210 の場合は `.pnvm` ファイルが `/lib/firmware/` 配下に展開されていることを確認します。 |
| Realtek の `dmesg` がファームウェア読み込み失敗を報告する | 特に `rtw8852b` ファームウェアファイルについて、`rtw885*.zst` ファイルが `/lib/firmware/rtw89/` 配下に展開されていることを確認します。 |
| `modprobe iwlwifi` が `Invalid argument` を報告する | `find /lib/modules/$(uname -r) -name "rfkill.ko"` で `rfkill.ko` が存在するか確認します。存在しない場合は、正しい BSP イメージを使用するか、カーネルモジュールを再ビルドします。 |
| `modprobe rtw89_8852be` がモジュールが見つからないと報告する | 4 つの `rtw89*.ko` ファイルが `/lib/modules/$(uname -r)/kernel/drivers/net/wireless/realtek/rtw89/` にコピーされていることを確認し、その後 `sudo depmod -a` を実行します。 |
| `modprobe 8852be` が失敗する | `sudo modprobe rtw89_8852be` を使用します。`8852be` はモジュール名ではありません。 |
| 再起動後に Wi-Fi が消える | `/etc/modules-load.d/iwlwifi.conf` または `/etc/modules-load.d/rtw89_8852be.conf` が存在することを確認し、再度 `sudo depmod -a` を実行します。 |
| AX210 はロードされるが 6 GHz ネットワークをスキャンできない | `iwlwifi-ty-a0-gf-a0.pnvm` が存在することを確認し、`iw reg get` で設定されているリージョンコードが 6 GHz をサポートしているか確認します。 |

## 補足

- AX210 と AX200 のファームウェアファイルには互換性がありません。AX210 は `ty-a0-gf-a0` を使用し、AX200 は `cc-a0` を使用します。
- Realtek RTL8852BE は `/lib/firmware/rtw89/` 配下の `rtw89` ドライバスタックとファームウェアを使用します。
- これらの修復パッケージは、JetPack 7.2 カーネル `6.8.12-1021-tegra` 向けにビルドされています。
- カスタム Jetson キャリアボードでの回避策として `apt upgrade` を使用するのは避けてください。代わりに、対象カーネル用に検証済みの BSP イメージまたはドライバパッケージを使用してください。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
