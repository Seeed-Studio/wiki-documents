---
description: この FAQ では、Seeed Jetson デバイスを JetPack 7.2 にアップグレードした後に Intel AX210/AX200 Wi‑Fi を復旧する方法について、手動手順とワンクリック修復スクリプトの両方を説明します。
title: JetPack 7.2 AX210/AX200 Wi‑Fi セットアップガイド
keywords:
  - Jetson
  - JetPack 7.2
  - AX210
  - AX200
  - Wi-Fi
  - iwlwifi
image: https://files.seeedstudio.com/wiki/AX210Wi-Fi/jp72-ax210.png
slug: /jetpack72_ax210_ax200_wifi_setup_guide
last_update:
  date: 07/14/2026
  author: Dayu
createdAt: '2026-07-14'
updatedAt: '2026-07-14'
url: https://wiki.seeedstudio.com/ja/jetpack72_ax210_ax200_wifi_setup_guide/
---

# JetPack 7.2 AX210/AX200 Wi‑Fi セットアップガイド

Seeed Jetson デバイスを JetPack 7.2 にアップグレードした後、Intel AX210 または AX200 M.2 Key E Wi‑Fi モジュールが PCIe 上では検出されるものの、無線ネットワークインターフェースが表示されない場合があります。

このガイドでは、互換性のある `iwlwifi` および `iwlmvm` カーネルモジュールを置き換え、必要な Intel ファームウェアファイルを展開し、起動時に Wi‑Fi ドライバが自動的に読み込まれるようにする方法を説明します。

:::note
このガイドは、カーネル `6.8.12-1021-tegra` を使用する JetPack 7.2 システムを対象としています。修復用ドライバモジュールはこのカーネル向けにビルドされています。`uname -r` に別のカーネルが表示される場合は、そのカーネルバージョン専用のドライバパッケージを使用してください。
:::

## 症状

JetPack 7.2 にアップグレードした後、次のいずれか、またはいくつかの症状が見られる場合があります：

- `lspci` では Intel AX210 または AX200 モジュールが検出されるが、`ip link` に `wlan0` が表示されない。
- `dmesg | grep -i iwl` で、ファームウェア読み込みエラーまたはドライバ読み込み失敗が報告される。
- `sudo modprobe iwlwifi` を実行すると一時的に Wi‑Fi が現れるが、再起動後に再び消えてしまう。

## 前提条件

- JetPack 7.2 が書き込まれた Seeed Jetson デバイス。
- カーネルバージョン `6.8.12-1021-tegra`。
- 正しく取り付けられた Intel AX210 または AX200 M.2 Key E Wi‑Fi モジュール。
- Ethernet、USB ネットワーク、または別のネットワークアダプタによる一時的なインターネット接続。
- Jetson デバイス上での `sudo` 権限。

まずカーネルバージョンと PCIe デバイスを確認します：

```bash
uname -r
lspci -nnk | grep -A3 -i network
```

想定される PCI ID は、AX210 の場合は `8086:2725`、AX200 の場合は `8086:2723` です。

## オプション 1: ワンクリック修復スクリプト

Jetson が Ethernet または別のネットワークアダプタ経由でインターネットにアクセスできる場合は、このオプションを使用してください。

このスクリプトは、公開 OneDrive フォルダから修正版 JetPack 7.2 ドライバモジュールをダウンロードし、それらを `/tmp/jp72_ax_wifi_fix/driver/iwlwifi/jp7.2/` 配下に保存し、現在のカーネルモジュールディレクトリにインストールし、必要なファームウェアファイルを展開し、起動時の自動読み込みを有効にします。

:::tip
OneDrive の Web リンクは `curl` のダウンロード URL として直接は使用しません。スクリプトはまず共有 OneDrive ページを開いて匿名の SharePoint クッキーを取得し、その後 SharePoint REST の `%24value` エンドポイント経由で各 `.ko` ファイルをダウンロードします。
:::

スクリプトを作成します：

```bash
cat <<'EOF' > fix_jp72_ax_wifi.sh
#!/usr/bin/env bash
set -euo pipefail

usage() {
  cat <<'USAGE'
Usage:
  bash fix_jp72_ax_wifi.sh [--ax210|--ax200|--download-only]

Options:
  --ax210          Force AX210 firmware handling.
  --ax200          Force AX200 firmware handling.
  --download-only  Only download the repaired kernel modules and print the local file tree.
  -h, --help       Show this help text.
USAGE
}

MODEL="auto"
DOWNLOAD_ONLY="0"

while [[ $# -gt 0 ]]; do
  case "$1" in
    --ax210) MODEL="ax210" ;;
    --ax200) MODEL="ax200" ;;
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
  fi
fi

if [[ "$MODEL" == "auto" && "$DOWNLOAD_ONLY" != "1" ]]; then
  echo "Could not auto-detect AX210 or AX200. Re-run with --ax210 or --ax200." >&2
  exit 1
fi

WORKDIR="${TMPDIR:-/tmp}/jp72_ax_wifi_fix"
COOKIE_JAR="$WORKDIR/sharepoint.cookies"
DRIVER_DIR="$WORKDIR/driver/iwlwifi/jp7.2"
SHARE_LINK="https://seeedstudio88-my.sharepoint.com/:f:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IgC5g_yzXQ26Sb-yYWtaWU8qATu9387mvrXAvPLhJNuBtxw?e=PvK037"
SITE_URL="https://seeedstudio88-my.sharepoint.com"
API_ROOT="$SITE_URL/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/_api/web"
FOLDER_REL="/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Documents/ko%E9%A9%B1%E5%8A%A8%26%E8%AE%BE%E5%A4%87%E6%A0%91/iwlwifi/jp7.2"

mkdir -p "$DRIVER_DIR"

echo "Preparing anonymous OneDrive session..."
curl -fsSL -c "$COOKIE_JAR" -b "$COOKIE_JAR" -o "$WORKDIR/sharepoint.html" "$SHARE_LINK"

download_driver() {
  local name="$1"
  local url="$API_ROOT/GetFileByServerRelativeUrl('$FOLDER_REL/$name')/%24value"
  local output="$DRIVER_DIR/$name"

  echo "Downloading $name..."
  curl -fL -b "$COOKIE_JAR" -o "$output" "$url"

  local size
  size=$(wc -c < "$output")
  if (( size < 100000 )); then
    echo "Downloaded file is unexpectedly small: $output" >&2
    echo "Check the OneDrive sharing link or network connection." >&2
    exit 1
  fi
}

download_driver "iwlwifi.ko"
download_driver "iwlmvm.ko"

echo "Downloaded files:"
find "$WORKDIR/driver" -type f | sort

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

MODULE_DIR="/lib/modules/$KVER/kernel/drivers/net"
if [[ ! -d "$MODULE_DIR" ]]; then
  echo "Kernel module directory not found: $MODULE_DIR" >&2
  exit 1
fi

if [[ "$(id -u)" -eq 0 ]]; then
  SUDO=()
else
  SUDO=(sudo)
fi

STAMP="$(date +%Y%m%d%H%M%S)"
for name in iwlwifi.ko iwlmvm.ko; do
  if [[ -f "$MODULE_DIR/$name" ]]; then
    "${SUDO[@]}" cp -a "$MODULE_DIR/$name" "$MODULE_DIR/$name.bak.$STAMP"
  fi
  "${SUDO[@]}" install -m 0644 "$DRIVER_DIR/$name" "$MODULE_DIR/$name"
done

if ! command -v unzstd >/dev/null 2>&1; then
  echo "Installing zstd..."
  "${SUDO[@]}" apt update
  "${SUDO[@]}" apt install -y zstd
fi

extract_one() {
  local path="$1"
  if [[ -f "$path" ]]; then
    "${SUDO[@]}" unzstd -f -k "$path"
  else
    echo "Missing firmware archive: $path" >&2
    return 1
  fi
}

case "$MODEL" in
  ax210)
    extract_one "/lib/firmware/iwlwifi-ty-a0-gf-a0-86.ucode.zst"
    extract_one "/lib/firmware/iwlwifi-ty-a0-gf-a0.pnvm.zst"
    ;;
  ax200)
    shopt -s nullglob
    ax200_fw=(/lib/firmware/iwlwifi-cc-a0-*.ucode.zst)
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

echo "Repair completed. Reboot the Jetson if wlan0 does not appear immediately."
EOF

chmod +x fix_jp72_ax_wifi.sh
```

スクリプトを実行します：

```bash
# Auto-detect AX210 or AX200 and repair the driver
bash fix_jp72_ax_wifi.sh

# If auto-detection fails, specify the module manually
bash fix_jp72_ax_wifi.sh --ax210
bash fix_jp72_ax_wifi.sh --ax200
```

システムファイルを変更せずに OneDrive のダウンロード経路だけを検証したい場合は、次を実行します：

```bash
bash fix_jp72_ax_wifi.sh --download-only
```

想定されるダウンロード構造：

```text
/tmp/jp72_ax_wifi_fix/driver/iwlwifi/jp7.2/iwlmvm.ko
/tmp/jp72_ax_wifi_fix/driver/iwlwifi/jp7.2/iwlwifi.ko
```

## オプション 2: 手動セットアップ

ファイルを手動でインストールしたい場合は、以下の OneDrive フォルダから JetPack 7.2 ドライバパッケージをダウンロードしてください：

- [JetPack 7.2 AX210/AX200 ドライバモジュール](https://seeedstudio88-my.sharepoint.com/:f:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IgC5g_yzXQ26Sb-yYWtaWU8qATu9387mvrXAvPLhJNuBtxw?e=PvK037)

このフォルダには次のファイルが含まれます：

- `iwlwifi.ko`
- `iwlmvm.ko`

両方のファイルを Jetson にコピーし、たとえば `~/Downloads/` 配下に置いてから、現在のカーネルモジュールを置き換えます：

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

起動時の自動読み込みを有効にします：

```bash
printf "iwlwifi\ncfg80211\nmac80211\n" | sudo tee /etc/modules-load.d/iwlwifi.conf
sudo depmod -a
sudo modprobe iwlwifi
```

無線インターフェースがすぐに表示されない場合は、Jetson を再起動します：

```bash
sudo reboot
```

## Wi‑Fi の確認

再起動後、次のコマンドを使用します：

```bash
# Check PCI device detection
lspci -nnk | grep -A3 -i network

# Check iwlwifi logs
sudo dmesg | grep -i iwl

# Check wireless interface
ip link show

# Check loaded modules
lsmod | grep iwl
```

セットアップが成功していれば、Intel Wi‑Fi デバイス、読み込まれた `iwlwifi` および `iwlmvm` モジュール、そして `wlan0` などの無線インターフェースが表示されるはずです。

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/AX210Wi-Fi/jp72-ax210.png" />
</div>

## トラブルシューティング

| 症状 | 確認事項 |
| --- | --- |
| `lspci` で Wi‑Fi モジュールが検出されない | M.2 Key E の取り付けを確認し、キャリアボードのデバイスツリーで PCIe レーンが有効になっているか確認します。 |
| `dmesg` でファームウェア読み込み失敗が報告される | 対応する `.ucode` と、AX210 の場合は `.pnvm` ファイルが `/lib/firmware/` 配下に展開されていることを確認します。 |
| `modprobe iwlwifi` が `Invalid argument` を報告する | `find /lib/modules/$(uname -r) -name "rfkill.ko"` で `rfkill.ko` が存在するか確認します。存在しない場合は、正しい BSP イメージを使用するか、カーネルモジュールを再ビルドしてください。 |
| 再起動後に Wi‑Fi が消えてしまう | `/etc/modules-load.d/iwlwifi.conf` が存在することを確認し、`sudo depmod -a` を再度実行します。 |
| AX210 は読み込まれるが 6 GHz ネットワークをスキャンできない | `iwlwifi-ty-a0-gf-a0.pnvm` が存在することを確認し、`iw reg get` を使って設定されているリージョンコードが 6 GHz をサポートしているか確認します。 |

## 注意事項

- AX210 と AX200 のファームウェアファイルには互換性がありません。AX210 は `ty-a0-gf-a0` を使用し、AX200 は `cc-a0` を使用します。
- この修復パッケージは JetPack 7.2 のカーネル `6.8.12-1021-tegra` 向けにビルドされています。
- カスタム Jetson キャリアボードで回避策として `apt upgrade` を使用するのは避けてください。代わりに、対象カーネル用に検証済みの BSP イメージまたはドライバパッケージを使用してください。

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
