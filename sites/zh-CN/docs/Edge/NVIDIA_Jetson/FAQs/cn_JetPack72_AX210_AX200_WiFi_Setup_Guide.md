---
description: 本常见问题解答说明在将 Seeed Jetson 设备升级到 JetPack 7.2 后，如何恢复 Intel AX210/AX200 Wi-Fi，包括手动步骤和一键修复脚本。
title: JetPack 7.2 AX210/AX200 Wi-Fi 设置指南
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
url: https://wiki.seeedstudio.com/cn/jetpack72_ax210_ax200_wifi_setup_guide/
---

# JetPack 7.2 AX210/AX200 Wi-Fi 设置指南

在将 Seeed Jetson 设备升级到 JetPack 7.2 后，一些用户可能会发现 Intel AX210 或 AX200 M.2 Key E Wi-Fi 模块可以在 PCIe 上被检测到，但没有出现任何无线网络接口。

本指南介绍如何替换兼容的 `iwlwifi` 和 `iwlmvm` 内核模块、解压所需的 Intel 固件文件，并启用在启动时自动加载 Wi-Fi 驱动。

:::note
本指南适用于使用内核 `6.8.12-1021-tegra` 的 JetPack 7.2 系统。修复用驱动模块是为该内核构建的。如果 `uname -r` 显示的是其他内核，请使用该内核版本对应的驱动包。
:::

## 症状

升级到 JetPack 7.2 后，你可能会看到以下一个或多个症状：

- `lspci` 可以检测到 Intel AX210 或 AX200 模块，但 `ip link` 中没有显示 `wlan0`。
- `dmesg | grep -i iwl` 报告固件加载错误或驱动加载失败。
- `sudo modprobe iwlwifi` 可以让 Wi-Fi 暂时出现，但重启后 Wi-Fi 又会消失。

## 前提条件

- 已刷写 JetPack 7.2 的 Seeed Jetson 设备。
- 内核版本为 `6.8.12-1021-tegra`。
- 正确安装的 Intel AX210 或 AX200 M.2 Key E Wi-Fi 模块。
- 通过以太网、USB 网络或其他网卡提供的临时互联网访问。
- 在 Jetson 设备上拥有 `sudo` 权限。

首先检查内核版本和 PCIe 设备：

```bash
uname -r
lspci -nnk | grep -A3 -i network
```

预期的 PCI ID 包括 AX210 的 `8086:2725` 或 AX200 的 `8086:2723`。

## 选项 1：一键修复脚本

如果 Jetson 可以通过以太网或其他网卡访问互联网，请使用此选项。

该脚本会从公共 OneDrive 文件夹下载修复后的 JetPack 7.2 驱动模块，存放到 `/tmp/jp72_ax_wifi_fix/driver/iwlwifi/jp7.2/` 下，将它们安装到当前内核模块目录，解压所需的固件文件，并启用开机自动加载。

:::tip
OneDrive 网页链接不会被直接用作 `curl` 下载 URL。脚本会先打开共享的 OneDrive 页面以获取匿名 SharePoint cookie，然后通过 SharePoint REST `%24value` 端点下载每个 `.ko` 文件。
:::

创建脚本：

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

运行脚本：

```bash
# Auto-detect AX210 or AX200 and repair the driver
bash fix_jp72_ax_wifi.sh

# If auto-detection fails, specify the module manually
bash fix_jp72_ax_wifi.sh --ax210
bash fix_jp72_ax_wifi.sh --ax200
```

若只想验证 OneDrive 下载路径而不修改系统文件，请运行：

```bash
bash fix_jp72_ax_wifi.sh --download-only
```

预期的下载目录结构：

```text
/tmp/jp72_ax_wifi_fix/driver/iwlwifi/jp7.2/iwlmvm.ko
/tmp/jp72_ax_wifi_fix/driver/iwlwifi/jp7.2/iwlwifi.ko
```

## 选项 2：手动设置

如果你更倾向于手动安装文件，请从下面的 OneDrive 文件夹下载 JetPack 7.2 驱动包：

- [JetPack 7.2 AX210/AX200 driver modules](https://seeedstudio88-my.sharepoint.com/:f:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IgC5g_yzXQ26Sb-yYWtaWU8qATu9387mvrXAvPLhJNuBtxw?e=PvK037)

该文件夹包含：

- `iwlwifi.ko`
- `iwlmvm.ko`

将这两个文件复制到 Jetson 上，例如放在 `~/Downloads/` 下，然后替换当前内核模块：

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

如有需要，安装 `zstd`：

```bash
sudo apt update
sudo apt install -y zstd
```

对于 AX210，解压 `ty-a0-gf-a0` 固件和 PNVM 文件：

```bash
cd /lib/firmware
sudo unzstd -f -k iwlwifi-ty-a0-gf-a0-86.ucode.zst
sudo unzstd -f -k iwlwifi-ty-a0-gf-a0.pnvm.zst
```

对于 AX200，解压 `cc-a0` 固件文件：

```bash
cd /lib/firmware
sudo unzstd -f -k iwlwifi-cc-a0-*.ucode.zst
```

启用开机自动加载：

```bash
printf "iwlwifi\ncfg80211\nmac80211\n" | sudo tee /etc/modules-load.d/iwlwifi.conf
sudo depmod -a
sudo modprobe iwlwifi
```

如果无线接口没有立即出现，请重启 Jetson：

```bash
sudo reboot
```

## 验证 Wi-Fi

重启后，使用以下命令：

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

成功的设置应能看到 Intel Wi-Fi 设备、已加载的 `iwlwifi` 和 `iwlmvm` 模块，以及诸如 `wlan0` 之类的无线接口。

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/AX210Wi-Fi/jp72-ax210.png" />
</div>

## 故障排查

| 症状 | 检查项 |
| --- | --- |
| `lspci` 无法检测到 Wi-Fi 模块 | 检查 M.2 Key E 安装情况，并确认载板设备树已启用该 PCIe 通道。 |
| `dmesg` 报告固件加载失败 | 确认对应的 `.ucode` 文件以及（对于 AX210）`.pnvm` 文件已在 `/lib/firmware/` 下解压。 |
| `modprobe iwlwifi` 报告 `Invalid argument` | 使用 `find /lib/modules/$(uname -r) -name "rfkill.ko"` 检查 `rfkill.ko` 是否存在。如果缺失，请使用正确的 BSP 镜像或重新构建内核模块。 |
| 重启后 Wi-Fi 消失 | 确认 `/etc/modules-load.d/iwlwifi.conf` 存在，并再次运行 `sudo depmod -a`。 |
| AX210 能加载但无法扫描 6 GHz 网络 | 确认 `iwlwifi-ty-a0-gf-a0.pnvm` 存在，并使用 `iw reg get` 检查当前配置的监管域是否支持 6 GHz。 |

## 注意事项

- AX210 和 AX200 的固件文件不能互换。AX210 使用 `ty-a0-gf-a0`；AX200 使用 `cc-a0`。
- 此修复包是为 JetPack 7.2 内核 `6.8.12-1021-tegra` 构建的。
- 避免在自定义 Jetson 载板上使用 `apt upgrade` 作为变通方案。请改用针对目标内核已验证的 BSP 镜像或驱动包。

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，以确保您在使用我们产品时的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
