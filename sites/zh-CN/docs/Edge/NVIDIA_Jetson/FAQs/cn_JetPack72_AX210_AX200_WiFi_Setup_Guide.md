---
description: 本常见问题解答说明在将 Seeed Jetson 设备升级到 JetPack 7.2 后，如何恢复受支持的 Wi-Fi 模块，包括 Intel AX210/AX200 和 Realtek RTL8852BE 的驱动安装、固件解压以及验证步骤。
title: JetPack 7.2 无线模块设置指南
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
slug: /jetpack72_ax210_ax200_wifi_setup_guide
last_update:
  date: 07/15/2026
  author: Dayu
createdAt: '2026-07-14'
updatedAt: '2026-07-16'
url: https://wiki.seeedstudio.com/cn/jetpack72_ax210_ax200_wifi_setup_guide/
---

# JetPack 7.2 无线模块设置指南

在将 Seeed Jetson 设备升级到 JetPack 7.2 后，一些用户可能会发现 M.2 Key E Wi-Fi 模块可以在 PCIe 上被检测到，但没有出现任何无线网络接口。

本指南涵盖以下模块在 JetPack 7.2 下的修复流程：

- Intel AX210 / AX200，使用 `iwlwifi` 和 `iwlmvm`。
- Realtek RTL8852BE / 8852BE，使用 `rtw89` 驱动栈。

修复通常需要两个部分：安装与 JetPack 7.2 内核 `6.8.12-1021-tegra` 匹配的内核模块，以及在 `/lib/firmware` 下解压相应的固件文件。

:::note
本指南适用于使用内核 `6.8.12-1021-tegra` 的 JetPack 7.2 系统。修复用驱动模块是为该内核构建的。如果 `uname -r` 显示的是其他内核，请使用与该内核版本完全匹配的驱动包。
:::

## 症状

升级到 JetPack 7.2 后，你可能会看到以下一种或多种症状：

- `lspci` 可以检测到 Wi-Fi 模块，但 `ip link` 中没有显示 `wlan0`。
- `dmesg` 报告 `iwlwifi` 或 `rtw89` 固件加载错误。
- `modprobe` 报告找不到预期的模块。
- 手动加载驱动可以暂时生效，但重启后 Wi-Fi 再次消失。

## 前提条件

- 已刷写 JetPack 7.2 的 Seeed Jetson 设备。
- 内核版本为 `6.8.12-1021-tegra`。
- 正确安装的受支持 M.2 Key E Wi-Fi 模块：Intel AX210、Intel AX200 或 Realtek RTL8852BE。
- 通过以太网、USB 网络或其他网络适配器提供的临时互联网访问。
- 在 Jetson 设备上拥有 `sudo` 权限。

首先检查内核版本和 PCIe 设备：

```bash
uname -r
lspci -nnk | grep -A3 -i network
```

常见的 PCI ID 包括：

| 模块 | 示例 PCI ID |
| --- | --- |
| Intel AX210 | `8086:2725` |
| Intel AX200 | `8086:2723` |
| Realtek RTL8852BE | `10ec:b852` |

## 选项 1：一键修复脚本

如果 Jetson 可以通过以太网或其他网络适配器访问互联网，请使用此选项。

该脚本会从公共 OneDrive 文件夹下载修复后的 JetPack 7.2 驱动模块，存放到 `/tmp/jp72_wifi_fix/driver/` 下，将所选模块集安装到当前内核模块目录，解压所需固件文件，并启用开机自动加载。

:::tip
OneDrive 网页链接不会被直接用作 `curl` 下载 URL。脚本会先打开共享的 OneDrive 页面以获取匿名 SharePoint cookie，然后通过 SharePoint REST `%24value` 端点下载每个文件。
:::

创建脚本：

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

运行脚本：

```bash
# Auto-detect the Wi-Fi module and repair the driver
bash fix_jp72_wifi.sh

# If auto-detection fails, specify the module manually
bash fix_jp72_wifi.sh --ax210
bash fix_jp72_wifi.sh --ax200
bash fix_jp72_wifi.sh --8852be
```

若只想验证 OneDrive 下载路径而不修改系统文件，请运行：

```bash
# Download all supported driver packages and print their local tree
bash fix_jp72_wifi.sh --download-only

# Or download only one package
bash fix_jp72_wifi.sh --8852be --download-only
```

预期的下载目录结构：

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

## 选项 2：手动设置

如果你更倾向于手动下载并安装文件，请使用此选项。

### Intel AX210 / AX200

从下面的 OneDrive 文件夹下载 JetPack 7.2 Intel 驱动包：

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

### Realtek RTL8852BE / 8852BE

从下面的 OneDrive 文件夹下载 JetPack 7.2 Realtek 8852BE 驱动包：

- [JetPack 7.2 Realtek 8852BE driver modules](https://seeedstudio88-my.sharepoint.com/:f:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IgAxZzXdPP_STosySy14oTGgAZMFt4qQ0IFsKt0oXeAi5KE?e=W84g0E)

已验证的文件夹路径为 `8852be/jp7.2/8852be-6.8.12-1021-tegra/`，其中包含：

- `rtw89_core.ko`
- `rtw89_pci.ko`
- `rtw89_8852b.ko`
- `rtw89_8852be.ko`
- `SHA256SUMS`
- `modinfo.txt`

将该文件夹复制到 Jetson 上，例如放在 `~/Downloads/8852be-6.8.12-1021-tegra/` 下，然后安装这些模块：

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

如有需要，安装 `zstd`，然后解压 Realtek 固件文件：

```bash
sudo apt update
sudo apt install -y zstd

cd /lib/firmware/rtw89
sudo unzstd -f -k rtw885*.zst
```

更新模块依赖并加载驱动：

```bash
printf "rtw89_8852be\n" | sudo tee /etc/modules-load.d/rtw89_8852be.conf
sudo depmod -a
sudo modprobe rtw89_8852be
```

:::note
模块名称是 `rtw89_8852be`。运行 `sudo modprobe 8852be` 会失败，因为 `8852be` 不是内核模块名。
:::

如果无线网卡接口没有立即出现，请重启 Jetson：

```bash
sudo reboot
```

## 验证 Wi-Fi

重启后，使用以下命令：

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

成功的设置应显示 Wi-Fi 设备、预期的内核模块以及诸如 `wlan0` 之类的无线接口。

下面的 AX210 结果展示了修复后最终启用 Wi-Fi 的状态：

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/AX210Wi-Fi/jp72-ax210.png" />
</div>

## 故障排查

| 现象 | 检查项 |
| --- | --- |
| `lspci` 无法检测到 Wi-Fi 模块 | 检查 M.2 Key E 安装情况，并确认载板设备树已启用 PCIe 通道。 |
| Intel `dmesg` 报告固件加载失败 | 确认匹配的 `.ucode` 文件以及（对于 AX210）`.pnvm` 文件已解压到 `/lib/firmware/` 下。 |
| Realtek `dmesg` 报告固件加载失败 | 确认 `rtw885*.zst` 文件已解压到 `/lib/firmware/rtw89/` 下，尤其是 `rtw8852b` 固件文件。 |
| `modprobe iwlwifi` 报告 `Invalid argument` | 使用 `find /lib/modules/$(uname -r) -name "rfkill.ko"` 检查 `rfkill.ko` 是否存在。如果缺失，请使用正确的 BSP 镜像或重新编译内核模块。 |
| `modprobe rtw89_8852be` 报告找不到模块 | 确认四个 `rtw89*.ko` 文件已复制到 `/lib/modules/$(uname -r)/kernel/drivers/net/wireless/realtek/rtw89/`，然后运行 `sudo depmod -a`。 |
| `modprobe 8852be` 失败 | 使用 `sudo modprobe rtw89_8852be`；`8852be` 不是模块名。 |
| 重启后 Wi-Fi 消失 | 确认 `/etc/modules-load.d/iwlwifi.conf` 或 `/etc/modules-load.d/rtw89_8852be.conf` 存在，并再次运行 `sudo depmod -a`。 |
| AX210 已加载但无法扫描 6 GHz 网络 | 确认 `iwlwifi-ty-a0-gf-a0.pnvm` 存在，并使用 `iw reg get` 检查当前配置的监管域是否支持 6 GHz。 |

## 说明

- AX210 和 AX200 固件文件不能互换。AX210 使用 `ty-a0-gf-a0`；AX200 使用 `cc-a0`。
- Realtek RTL8852BE 使用 `rtw89` 驱动栈以及 `/lib/firmware/rtw89/` 下的固件。
- 这些修复包是为 JetPack 7.2 内核 `6.8.12-1021-tegra` 构建的。
- 避免在自定义 Jetson 载板上使用 `apt upgrade` 作为权宜之计。请改用针对目标内核验证过的 BSP 镜像或驱动包。

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
