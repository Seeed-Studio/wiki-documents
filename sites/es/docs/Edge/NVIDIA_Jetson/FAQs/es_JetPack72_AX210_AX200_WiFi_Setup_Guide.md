---
description: Este FAQ explica cómo restaurar el Wi‑Fi Intel AX210/AX200 después de actualizar los dispositivos Jetson de Seeed a JetPack 7.2, incluyendo pasos manuales y un script de reparación de un solo clic.
title: Guía de configuración de Wi‑Fi AX210/AX200 en JetPack 7.2
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
url: https://wiki.seeedstudio.com/es/jetpack72_ax210_ax200_wifi_setup_guide/
---

# Guía de configuración de Wi‑Fi AX210/AX200 en JetPack 7.2

Después de actualizar un dispositivo Jetson de Seeed a JetPack 7.2, algunos usuarios pueden encontrar que los módulos Wi‑Fi Intel AX210 o AX200 M.2 Key E se detectan en PCIe pero no aparece ninguna interfaz de red inalámbrica.

Esta guía describe cómo reemplazar los módulos de kernel compatibles `iwlwifi` e `iwlmvm`, descomprimir los archivos de firmware de Intel necesarios y habilitar que el controlador Wi‑Fi se cargue automáticamente al arrancar.

:::note
Esta guía está pensada para sistemas JetPack 7.2 que usan el kernel `6.8.12-1021-tegra`. Los módulos de controlador de reparación están compilados para este kernel. Si `uname -r` muestra un kernel diferente, usa el paquete de controlador para esa versión exacta de kernel.
:::

## Síntomas

Después de actualizar a JetPack 7.2, puedes ver uno o más de los siguientes síntomas:

- `lspci` puede detectar el módulo Intel AX210 o AX200, pero `ip link` no muestra `wlan0`.
- `dmesg | grep -i iwl` informa errores al cargar el firmware o fallos al cargar el controlador.
- `sudo modprobe iwlwifi` puede hacer que el Wi‑Fi aparezca temporalmente, pero el Wi‑Fi desaparece de nuevo después de reiniciar.

## Requisitos previos

- Un dispositivo Jetson de Seeed flasheado con JetPack 7.2.
- Versión de kernel `6.8.12-1021-tegra`.
- Un módulo Wi‑Fi Intel AX210 o AX200 M.2 Key E instalado correctamente.
- Acceso temporal a Internet mediante Ethernet, red USB u otro adaptador de red.
- Permiso de `sudo` en el dispositivo Jetson.

Primero comprueba la versión del kernel y el dispositivo PCIe:

```bash
uname -r
lspci -nnk | grep -A3 -i network
```

Los ID de PCI esperados incluyen `8086:2725` para AX210 o `8086:2723` para AX200.

## Opción 1: Script de reparación de un solo clic

Usa esta opción si el Jetson puede acceder a Internet mediante Ethernet u otro adaptador de red.

El script descarga los módulos de controlador reparados de JetPack 7.2 desde la carpeta pública de OneDrive, los almacena en `/tmp/jp72_ax_wifi_fix/driver/iwlwifi/jp7.2/`, los instala en el directorio de módulos del kernel actual, descomprime los archivos de firmware necesarios y habilita la carga automática al arrancar.

:::tip
El enlace web de OneDrive no se usa directamente como URL de descarga de `curl`. El script primero abre la página compartida de OneDrive para obtener una cookie anónima de SharePoint y luego descarga cada archivo `.ko` a través del endpoint REST `%24value` de SharePoint.
:::

Crea el script:

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

Ejecuta el script:

```bash
# Auto-detect AX210 or AX200 and repair the driver
bash fix_jp72_ax_wifi.sh

# If auto-detection fails, specify the module manually
bash fix_jp72_ax_wifi.sh --ax210
bash fix_jp72_ax_wifi.sh --ax200
```

Para verificar solo la ruta de descarga de OneDrive sin cambiar archivos del sistema, ejecuta:

```bash
bash fix_jp72_ax_wifi.sh --download-only
```

Estructura de descarga esperada:

```text
/tmp/jp72_ax_wifi_fix/driver/iwlwifi/jp7.2/iwlmvm.ko
/tmp/jp72_ax_wifi_fix/driver/iwlwifi/jp7.2/iwlwifi.ko
```

## Opción 2: Configuración manual

Si prefieres instalar los archivos manualmente, descarga el paquete de controladores de JetPack 7.2 desde la carpeta de OneDrive siguiente:

- [Módulos de controlador AX210/AX200 para JetPack 7.2](https://seeedstudio88-my.sharepoint.com/:f:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IgC5g_yzXQ26Sb-yYWtaWU8qATu9387mvrXAvPLhJNuBtxw?e=PvK037)

La carpeta contiene:

- `iwlwifi.ko`
- `iwlmvm.ko`

Copia ambos archivos al Jetson, por ejemplo en `~/Downloads/`, y luego reemplaza los módulos de kernel actuales:

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

Para AX210, descomprime el firmware y los archivos PNVM `ty-a0-gf-a0`:

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

Reinicia el Jetson si la interfaz inalámbrica no aparece inmediatamente:

```bash
sudo reboot
```

## Verificar Wi‑Fi

Después de reiniciar, usa los siguientes comandos:

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

Una configuración correcta debería mostrar el dispositivo Wi‑Fi de Intel, los módulos `iwlwifi` e `iwlmvm` cargados y una interfaz inalámbrica como `wlan0`.

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/AX210Wi-Fi/jp72-ax210.png" />
</div>

## Solución de problemas

| Síntoma | Comprobación |
| --- | --- |
| `lspci` no puede detectar el módulo Wi‑Fi | Comprueba la instalación M.2 Key E y confirma que la línea PCIe esté habilitada por el device tree de la carrier board. |
| `dmesg` informa fallos al cargar el firmware | Confirma que los archivos `.ucode` correspondientes y, para AX210, los archivos `.pnvm` se descomprimieron en `/lib/firmware/`. |
| `modprobe iwlwifi` informa `Invalid argument` | Comprueba si `rfkill.ko` existe con `find /lib/modules/$(uname -r) -name "rfkill.ko"`. Si falta, usa la imagen BSP correcta o recompila los módulos del kernel. |
| El Wi‑Fi desaparece después de reiniciar | Confirma que `/etc/modules-load.d/iwlwifi.conf` existe y ejecuta `sudo depmod -a` de nuevo. |
| AX210 se carga pero no puede escanear redes de 6 GHz | Confirma que `iwlwifi-ty-a0-gf-a0.pnvm` existe y comprueba si el dominio regulatorio configurado admite 6 GHz con `iw reg get`. |

## Notas

- Los archivos de firmware AX210 y AX200 no son intercambiables. AX210 usa `ty-a0-gf-a0`; AX200 usa `cc-a0`.
- Este paquete de reparación está creado para el kernel `6.8.12-1021-tegra` de JetPack 7.2.
- Evita usar `apt upgrade` como solución alternativa en carrier boards Jetson personalizadas. En su lugar, utiliza una imagen BSP validada o un paquete de controladores para el kernel de destino.

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
