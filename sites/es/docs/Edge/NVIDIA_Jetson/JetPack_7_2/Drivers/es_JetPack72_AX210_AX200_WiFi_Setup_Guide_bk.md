---
description: Este FAQ explica cómo restaurar los módulos Wi‑Fi compatibles después de actualizar los dispositivos Seeed Jetson a JetPack 7.2, incluyendo la instalación de controladores Intel AX210/AX200 y Realtek RTL8852BE, la descompresión del firmware y los pasos de validación.
title: Guía de configuración de módulos inalámbricos en JetPack 7.2
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
updatedAt: '2026-07-15'
url: https://wiki.seeedstudio.com/es/jetpack72_ax210_ax200_wifi_setup_guide_bk/
---

# Guía de configuración de módulos inalámbricos en JetPack 7.2

Después de actualizar un dispositivo Seeed Jetson a JetPack 7.2, algunos usuarios pueden encontrar que el módulo Wi‑Fi M.2 Key E se detecta en PCIe pero no aparece ninguna interfaz de red inalámbrica.

Esta guía cubre el flujo de reparación de JetPack 7.2 para los siguientes módulos:

- Intel AX210 / AX200, usando `iwlwifi` e `iwlmvm`.
- Realtek RTL8852BE / 8852BE, usando la pila de controladores `rtw89`.

La solución normalmente requiere dos partes: instalar los módulos del kernel que coincidan con el kernel de JetPack 7.2 `6.8.12-1021-tegra`, y descomprimir los archivos de firmware correspondientes en `/lib/firmware`.

:::note
Esta guía está pensada para sistemas JetPack 7.2 que usan el kernel `6.8.12-1021-tegra`. Los módulos de controladores de reparación están compilados para este kernel. Si `uname -r` muestra un kernel diferente, usa el paquete de controladores para esa versión exacta de kernel.
:::

## Síntomas

Después de actualizar a JetPack 7.2, puedes ver uno o más de los siguientes síntomas:

- `lspci` puede detectar el módulo Wi‑Fi, pero `ip link` no muestra `wlan0`.
- `dmesg` informa errores de carga de firmware de `iwlwifi` o `rtw89`.
- `modprobe` informa que no se puede encontrar el módulo esperado.
- Cargar el controlador manualmente funciona temporalmente, pero el Wi‑Fi desaparece de nuevo después de reiniciar.

## Requisitos previos

- Un dispositivo Seeed Jetson flasheado con JetPack 7.2.
- Versión de kernel `6.8.12-1021-tegra`.
- Un módulo Wi‑Fi M.2 Key E compatible instalado correctamente: Intel AX210, Intel AX200 o Realtek RTL8852BE.
- Acceso temporal a Internet mediante Ethernet, red USB u otro adaptador de red.
- Permiso de `sudo` en el dispositivo Jetson.

Comprueba primero la versión del kernel y el dispositivo PCIe:

```bash
uname -r
lspci -nnk | grep -A3 -i network
```

Los ID de PCI más comunes incluyen:

| Módulo | ID de PCI de ejemplo |
| --- | --- |
| Intel AX210 | `8086:2725` |
| Intel AX200 | `8086:2723` |
| Realtek RTL8852BE | `10ec:b852` |

## Opción 1: Script de reparación con un clic

Usa esta opción si el Jetson puede acceder a Internet mediante Ethernet u otro adaptador de red.

El script descarga los módulos de controladores reparados de JetPack 7.2 desde las carpetas públicas de OneDrive, los almacena en `/tmp/jp72_wifi_fix/driver/`, instala el conjunto de módulos seleccionado en el directorio de módulos del kernel actual, descomprime los archivos de firmware necesarios y habilita la carga automática al arrancar.

:::tip
El enlace web de OneDrive no se usa directamente como URL de descarga de `curl`. El script primero abre la página compartida de OneDrive para obtener una cookie anónima de SharePoint y luego descarga cada archivo a través del endpoint REST `%24value` de SharePoint.
:::

Crea el script:

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

Ejecuta el script:

```bash
# Auto-detect the Wi-Fi module and repair the driver
bash fix_jp72_wifi.sh

# If auto-detection fails, specify the module manually
bash fix_jp72_wifi.sh --ax210
bash fix_jp72_wifi.sh --ax200
bash fix_jp72_wifi.sh --8852be
```

Para verificar solo las rutas de descarga de OneDrive sin cambiar archivos del sistema, ejecuta:

```bash
# Download all supported driver packages and print their local tree
bash fix_jp72_wifi.sh --download-only

# Or download only one package
bash fix_jp72_wifi.sh --8852be --download-only
```

Estructura de descarga esperada:

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

## Opción 2: Configuración manual

Utiliza esta opción si prefieres descargar e instalar los archivos manualmente.

### Intel AX210 / AX200

Descarga el paquete de controladores Intel para JetPack 7.2 desde la carpeta de OneDrive a continuación:

- [Módulos de controlador AX210/AX200 para JetPack 7.2](https://seeedstudio88-my.sharepoint.com/:f:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IgC5g_yzXQ26Sb-yYWtaWU8qATu9387mvrXAvPLhJNuBtxw?e=PvK037)

La carpeta contiene:

- `iwlwifi.ko`
- `iwlmvm.ko`

Copia ambos archivos al Jetson, por ejemplo en `~/Downloads/`, y luego reemplaza los módulos del kernel actuales:

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

Instala `zstd` si es necesario:

```bash
sudo apt update
sudo apt install -y zstd
```

Para AX210, descomprime el firmware `ty-a0-gf-a0` y los archivos PNVM:

```bash
cd /lib/firmware
sudo unzstd -f -k iwlwifi-ty-a0-gf-a0-86.ucode.zst
sudo unzstd -f -k iwlwifi-ty-a0-gf-a0.pnvm.zst
```

Para AX200, descomprime los archivos de firmware `cc-a0`:

```bash
cd /lib/firmware
sudo unzstd -f -k iwlwifi-cc-a0-*.ucode.zst
```

Habilita la carga automática al arrancar:

```bash
printf "iwlwifi\ncfg80211\nmac80211\n" | sudo tee /etc/modules-load.d/iwlwifi.conf
sudo depmod -a
sudo modprobe iwlwifi
```

### Realtek RTL8852BE / 8852BE

Descarga el paquete de controladores Realtek 8852BE para JetPack 7.2 desde la carpeta de OneDrive a continuación:

- [Módulos de controlador Realtek 8852BE para JetPack 7.2](https://seeedstudio88-my.sharepoint.com/:f:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IgAxZzXdPP_STosySy14oTGgAZMFt4qQ0IFsKt0oXeAi5KE?e=W84g0E)

La ruta de carpeta verificada es `8852be/jp7.2/8852be-6.8.12-1021-tegra/`, y contiene:

- `rtw89_core.ko`
- `rtw89_pci.ko`
- `rtw89_8852b.ko`
- `rtw89_8852be.ko`
- `SHA256SUMS`
- `modinfo.txt`

Copia la carpeta al Jetson, por ejemplo en `~/Downloads/8852be-6.8.12-1021-tegra/`, y luego instala los módulos:

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

Instala `zstd` si es necesario y luego descomprime los archivos de firmware de Realtek:

```bash
sudo apt update
sudo apt install -y zstd

cd /lib/firmware/rtw89
sudo unzstd -f -k rtw885*.zst
```

Actualiza las dependencias de los módulos y carga el controlador:

```bash
printf "rtw89_8852be\n" | sudo tee /etc/modules-load.d/rtw89_8852be.conf
sudo depmod -a
sudo modprobe rtw89_8852be
```

:::note
El nombre del módulo es `rtw89_8852be`. Ejecutar `sudo modprobe 8852be` fallará porque `8852be` no es el nombre del módulo del kernel.
:::

Reinicia el Jetson si la interfaz inalámbrica no aparece inmediatamente:

```bash
sudo reboot
```

## Verificar Wi-Fi

Después de reiniciar, utiliza los siguientes comandos:

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

Una configuración correcta debería mostrar el dispositivo Wi-Fi, los módulos del kernel esperados y una interfaz inalámbrica como `wlan0`.

El siguiente resultado de AX210 muestra el estado final con Wi-Fi habilitado después de la reparación:

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/AX210Wi-Fi/jp72-ax210.png" />
</div>

## Solución de problemas

| Síntoma | Comprobación |
| --- | --- |
| `lspci` no puede detectar el módulo Wi-Fi | Comprueba la instalación en la ranura M.2 Key E y confirma que la línea PCIe está habilitada por el device tree de la placa portadora. |
| `dmesg` de Intel informa errores al cargar el firmware | Confirma que los archivos `.ucode` correspondientes y, para AX210, los archivos `.pnvm` se descomprimieron en `/lib/firmware/`. |
| `dmesg` de Realtek informa errores al cargar el firmware | Confirma que los archivos `rtw885*.zst` se descomprimieron en `/lib/firmware/rtw89/`, especialmente los archivos de firmware `rtw8852b`. |
| `modprobe iwlwifi` informa `Invalid argument` | Comprueba si `rfkill.ko` existe con `find /lib/modules/$(uname -r) -name "rfkill.ko"`. Si falta, utiliza la imagen BSP correcta o recompila los módulos del kernel. |
| `modprobe rtw89_8852be` informa que no se encuentra el módulo | Confirma que los cuatro archivos `rtw89*.ko` se copiaron a `/lib/modules/$(uname -r)/kernel/drivers/net/wireless/realtek/rtw89/`, luego ejecuta `sudo depmod -a`. |
| `modprobe 8852be` falla | Utiliza `sudo modprobe rtw89_8852be`; `8852be` no es el nombre del módulo. |
| El Wi-Fi desaparece después de reiniciar | Confirma que existen `/etc/modules-load.d/iwlwifi.conf` o `/etc/modules-load.d/rtw89_8852be.conf` y ejecuta `sudo depmod -a` de nuevo. |
| AX210 se carga pero no puede escanear redes de 6 GHz | Confirma que `iwlwifi-ty-a0-gf-a0.pnvm` existe y comprueba si el dominio regulatorio configurado admite 6 GHz con `iw reg get`. |

## Notas

- Los archivos de firmware de AX210 y AX200 no son intercambiables. AX210 usa `ty-a0-gf-a0`; AX200 usa `cc-a0`.
- Realtek RTL8852BE utiliza la pila de controladores `rtw89` y el firmware bajo `/lib/firmware/rtw89/`.
- Estos paquetes de reparación están construidos para el kernel `6.8.12-1021-tegra` de JetPack 7.2.
- Evita usar `apt upgrade` como solución alternativa en placas portadoras Jetson personalizadas. En su lugar, utiliza una imagen BSP o un paquete de controladores validado para el kernel de destino.

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
