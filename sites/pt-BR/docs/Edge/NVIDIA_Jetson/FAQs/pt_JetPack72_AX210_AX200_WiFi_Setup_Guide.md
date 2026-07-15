---
description: Este FAQ explica como restaurar o Wi-Fi Intel AX210/AX200 após atualizar dispositivos Seeed Jetson para o JetPack 7.2, incluindo etapas manuais e um script de reparo com um clique.
title: Guia de Configuração de Wi-Fi JetPack 7.2 AX210/AX200
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
url: https://wiki.seeedstudio.com/pt-br/jetpack72_ax210_ax200_wifi_setup_guide/
---

# Guia de Configuração de Wi-Fi JetPack 7.2 AX210/AX200

Após atualizar um dispositivo Seeed Jetson para o JetPack 7.2, alguns usuários podem perceber que os módulos Wi-Fi Intel AX210 ou AX200 M.2 Key E são detectados no PCIe, mas nenhuma interface de rede sem fio aparece.

Este guia descreve como substituir os módulos de kernel compatíveis `iwlwifi` e `iwlmvm`, descompactar os arquivos de firmware Intel necessários e habilitar o carregamento automático do driver Wi-Fi na inicialização.

:::note
Este guia se destina a sistemas JetPack 7.2 usando o kernel `6.8.12-1021-tegra`. Os módulos de driver de reparo são compilados para este kernel. Se `uname -r` mostrar um kernel diferente, use o pacote de driver para essa versão exata de kernel.
:::

## Sintomas

Após atualizar para o JetPack 7.2, você pode ver um ou mais dos seguintes sintomas:

- `lspci` consegue detectar o módulo Intel AX210 ou AX200, mas `ip link` não mostra `wlan0`.
- `dmesg | grep -i iwl` relata erros de carregamento de firmware ou falhas de carregamento do driver.
- `sudo modprobe iwlwifi` pode fazer o Wi-Fi aparecer temporariamente, mas o Wi-Fi desaparece novamente após reiniciar.

## Pré-requisitos

- Um dispositivo Seeed Jetson gravado com JetPack 7.2.
- Versão de kernel `6.8.12-1021-tegra`.
- Um módulo Wi-Fi Intel AX210 ou AX200 M.2 Key E instalado corretamente.
- Acesso temporário à Internet por Ethernet, rede USB ou outro adaptador de rede.
- Permissão de `sudo` no dispositivo Jetson.

Verifique primeiro a versão do kernel e o dispositivo PCIe:

```bash
uname -r
lspci -nnk | grep -A3 -i network
```

Os IDs PCI esperados incluem `8086:2725` para AX210 ou `8086:2723` para AX200.

## Opção 1: Script de Reparo com um Clique

Use esta opção se o Jetson puder acessar a Internet por Ethernet ou outro adaptador de rede.

O script faz o download dos módulos de driver corrigidos do JetPack 7.2 a partir da pasta pública do OneDrive, armazena-os em `/tmp/jp72_ax_wifi_fix/driver/iwlwifi/jp7.2/`, instala-os no diretório de módulos do kernel atual, descompacta os arquivos de firmware necessários e habilita o carregamento automático na inicialização.

:::tip
O link web do OneDrive não é usado diretamente como URL de download do `curl`. O script primeiro abre a página compartilhada do OneDrive para obter um cookie anônimo do SharePoint e, em seguida, baixa cada arquivo `.ko` por meio do endpoint REST `%24value` do SharePoint.
:::

Crie o script:

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

Execute o script:

```bash
# Auto-detect AX210 or AX200 and repair the driver
bash fix_jp72_ax_wifi.sh

# If auto-detection fails, specify the module manually
bash fix_jp72_ax_wifi.sh --ax210
bash fix_jp72_ax_wifi.sh --ax200
```

Para verificar apenas o caminho de download do OneDrive sem alterar arquivos do sistema, execute:

```bash
bash fix_jp72_ax_wifi.sh --download-only
```

Estrutura de download esperada:

```text
/tmp/jp72_ax_wifi_fix/driver/iwlwifi/jp7.2/iwlmvm.ko
/tmp/jp72_ax_wifi_fix/driver/iwlwifi/jp7.2/iwlwifi.ko
```

## Opção 2: Configuração Manual

Se você preferir instalar os arquivos manualmente, faça o download do pacote de driver do JetPack 7.2 a partir da pasta do OneDrive abaixo:

- [Módulos de driver JetPack 7.2 AX210/AX200](https://seeedstudio88-my.sharepoint.com/:f:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IgC5g_yzXQ26Sb-yYWtaWU8qATu9387mvrXAvPLhJNuBtxw?e=PvK037)

A pasta contém:

- `iwlwifi.ko`
- `iwlmvm.ko`

Copie ambos os arquivos para o Jetson, por exemplo em `~/Downloads/`, e então substitua os módulos de kernel atuais:

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

Instale `zstd` se necessário:

```bash
sudo apt update
sudo apt install -y zstd
```

Para AX210, descompacte o firmware `ty-a0-gf-a0` e os arquivos PNVM:

```bash
cd /lib/firmware
sudo unzstd -f -k iwlwifi-ty-a0-gf-a0-86.ucode.zst
sudo unzstd -f -k iwlwifi-ty-a0-gf-a0.pnvm.zst
```

Para AX200, descompacte os arquivos de firmware `cc-a0`:

```bash
cd /lib/firmware
sudo unzstd -f -k iwlwifi-cc-a0-*.ucode.zst
```

Habilite o carregamento automático na inicialização:

```bash
printf "iwlwifi\ncfg80211\nmac80211\n" | sudo tee /etc/modules-load.d/iwlwifi.conf
sudo depmod -a
sudo modprobe iwlwifi
```

Reinicie o Jetson se a interface sem fio não aparecer imediatamente:

```bash
sudo reboot
```

## Verificar o Wi-Fi

Após reiniciar, use os seguintes comandos:

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

Uma configuração bem-sucedida deve mostrar o dispositivo Wi-Fi Intel, os módulos `iwlwifi` e `iwlmvm` carregados e uma interface sem fio como `wlan0`.

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/AX210Wi-Fi/jp72-ax210.png" />
</div>

## Solução de Problemas

| Sintoma | Verificação |
| --- | --- |
| `lspci` não consegue detectar o módulo Wi-Fi | Verifique a instalação do M.2 Key E e confirme se a faixa PCIe está habilitada pela device tree da placa carrier. |
| `dmesg` relata falhas de carregamento de firmware | Confirme se os arquivos `.ucode` correspondentes e, para AX210, os arquivos `.pnvm` foram descompactados em `/lib/firmware/`. |
| `modprobe iwlwifi` relata `Invalid argument` | Verifique se `rfkill.ko` existe com `find /lib/modules/$(uname -r) -name "rfkill.ko"`. Se estiver ausente, use a imagem BSP correta ou recompile os módulos do kernel. |
| O Wi-Fi desaparece após reiniciar | Confirme se `/etc/modules-load.d/iwlwifi.conf` existe e execute `sudo depmod -a` novamente. |
| AX210 carrega mas não consegue escanear redes de 6 GHz | Confirme se `iwlwifi-ty-a0-gf-a0.pnvm` existe e verifique se o domínio regulatório configurado oferece suporte a 6 GHz com `iw reg get`. |

## Notas

- Os arquivos de firmware AX210 e AX200 não são intercambiáveis. AX210 usa `ty-a0-gf-a0`; AX200 usa `cc-a0`.
- Este pacote de reparo é criado para o kernel JetPack 7.2 `6.8.12-1021-tegra`.
- Evite usar `apt upgrade` como solução alternativa em carrier boards Jetson personalizadas. Em vez disso, use uma imagem BSP validada ou um pacote de driver para o kernel de destino.

## Suporte Técnico e Discussão de Produto

Agradecemos por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
