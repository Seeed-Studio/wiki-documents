---
description: This FAQ explains how to restore Intel AX210/AX200 Wi-Fi after upgrading Seeed Jetson devices to JetPack 7.2, including manual steps and a one-click repair script.
title: JetPack 7.2 AX210/AX200 Wi-Fi Setup Guide
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
url: https://wiki.seeedstudio.com/jetpack72_ax210_ax200_wifi_setup_guide/
---

# JetPack 7.2 AX210/AX200 Wi-Fi Setup Guide

After upgrading a Seeed Jetson device to JetPack 7.2, some users may find that Intel AX210 or AX200 M.2 Key E Wi-Fi modules are detected on PCIe but no wireless network interface appears.

This guide describes how to replace the compatible `iwlwifi` and `iwlmvm` kernel modules, decompress the required Intel firmware files, and enable the Wi-Fi driver to load automatically at boot.

:::note
This guide is intended for JetPack 7.2 systems using kernel `6.8.12-1021-tegra`. The repair driver modules are built for this kernel. If `uname -r` shows a different kernel, use the driver package for that exact kernel version.
:::

## Symptoms

After upgrading to JetPack 7.2, you may see one or more of the following symptoms:

- `lspci` can detect the Intel AX210 or AX200 module, but `ip link` does not show `wlan0`.
- `dmesg | grep -i iwl` reports firmware loading errors or driver loading failures.
- `sudo modprobe iwlwifi` can make Wi-Fi appear temporarily, but Wi-Fi disappears again after reboot.

## Prerequisites

- A Seeed Jetson device flashed with JetPack 7.2.
- Kernel version `6.8.12-1021-tegra`.
- An Intel AX210 or AX200 M.2 Key E Wi-Fi module installed correctly.
- Temporary Internet access through Ethernet, USB networking, or another network adapter.
- `sudo` permission on the Jetson device.

Check the kernel version and PCIe device first:

```bash
uname -r
lspci -nnk | grep -A3 -i network
```

Expected PCI IDs include `8086:2725` for AX210 or `8086:2723` for AX200.

## Option 1: One-click Repair Script

Use this option if the Jetson can access the Internet through Ethernet or another network adapter.

The script downloads the repaired JetPack 7.2 driver modules from the public OneDrive folder, stores them under `/tmp/jp72_ax_wifi_fix/driver/iwlwifi/jp7.2/`, installs them to the current kernel module directory, decompresses the required firmware files, and enables automatic loading at boot.

:::tip
The OneDrive web link is not used directly as a `curl` download URL. The script first opens the shared OneDrive page to obtain an anonymous SharePoint cookie, then downloads each `.ko` file through the SharePoint REST `%24value` endpoint.
:::

Create the script:

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

Run the script:

```bash
# Auto-detect AX210 or AX200 and repair the driver
bash fix_jp72_ax_wifi.sh

# If auto-detection fails, specify the module manually
bash fix_jp72_ax_wifi.sh --ax210
bash fix_jp72_ax_wifi.sh --ax200
```

To verify only the OneDrive download path without changing system files, run:

```bash
bash fix_jp72_ax_wifi.sh --download-only
```

Expected download structure:

```text
/tmp/jp72_ax_wifi_fix/driver/iwlwifi/jp7.2/iwlmvm.ko
/tmp/jp72_ax_wifi_fix/driver/iwlwifi/jp7.2/iwlwifi.ko
```

## Option 2: Manual Setup

If you prefer to install the files manually, download the JetPack 7.2 driver package from the OneDrive folder below:

- [JetPack 7.2 AX210/AX200 driver modules](https://seeedstudio88-my.sharepoint.com/:f:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IgC5g_yzXQ26Sb-yYWtaWU8qATu9387mvrXAvPLhJNuBtxw?e=PvK037)

The folder contains:

- `iwlwifi.ko`
- `iwlmvm.ko`

Copy both files to the Jetson, for example under `~/Downloads/`, then replace the current kernel modules:

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

Install `zstd` if needed:

```bash
sudo apt update
sudo apt install -y zstd
```

For AX210, decompress the `ty-a0-gf-a0` firmware and PNVM files:

```bash
cd /lib/firmware
sudo unzstd -f -k iwlwifi-ty-a0-gf-a0-86.ucode.zst
sudo unzstd -f -k iwlwifi-ty-a0-gf-a0.pnvm.zst
```

For AX200, decompress the `cc-a0` firmware files:

```bash
cd /lib/firmware
sudo unzstd -f -k iwlwifi-cc-a0-*.ucode.zst
```

Enable automatic loading at boot:

```bash
printf "iwlwifi\ncfg80211\nmac80211\n" | sudo tee /etc/modules-load.d/iwlwifi.conf
sudo depmod -a
sudo modprobe iwlwifi
```

Reboot the Jetson if the wireless interface does not appear immediately:

```bash
sudo reboot
```

## Verify Wi-Fi

After rebooting, use the following commands:

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

A successful setup should show the Intel Wi-Fi device, loaded `iwlwifi` and `iwlmvm` modules, and a wireless interface such as `wlan0`.

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/AX210Wi-Fi/jp72-ax210.png" />
</div>

## Troubleshooting

| Symptom | Check |
| --- | --- |
| `lspci` cannot detect the Wi-Fi module | Check M.2 Key E installation and confirm the PCIe lane is enabled by the carrier board device tree. |
| `dmesg` reports firmware loading failures | Confirm the matching `.ucode` and, for AX210, `.pnvm` files were decompressed under `/lib/firmware/`. |
| `modprobe iwlwifi` reports `Invalid argument` | Check whether `rfkill.ko` exists with `find /lib/modules/$(uname -r) -name "rfkill.ko"`. If it is missing, use the correct BSP image or rebuild the kernel modules. |
| Wi-Fi disappears after reboot | Confirm `/etc/modules-load.d/iwlwifi.conf` exists and run `sudo depmod -a` again. |
| AX210 loads but cannot scan 6 GHz networks | Confirm `iwlwifi-ty-a0-gf-a0.pnvm` exists and check whether the configured regulatory domain supports 6 GHz with `iw reg get`. |

## Notes

- AX210 and AX200 firmware files are not interchangeable. AX210 uses `ty-a0-gf-a0`; AX200 uses `cc-a0`.
- This repair package is built for JetPack 7.2 kernel `6.8.12-1021-tegra`.
- Avoid using `apt upgrade` as a workaround on custom Jetson carrier boards. Use a validated BSP image or driver package for the target kernel instead.

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
