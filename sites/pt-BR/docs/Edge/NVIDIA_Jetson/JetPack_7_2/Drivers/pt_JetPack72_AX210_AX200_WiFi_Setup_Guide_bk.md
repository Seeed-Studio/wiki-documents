---
description: Esta FAQ explica como restaurar módulos Wi‑Fi compatíveis após atualizar dispositivos Seeed Jetson para o JetPack 7.2, incluindo instalação dos drivers Intel AX210/AX200 e Realtek RTL8852BE, descompressão de firmware e etapas de validação.
title: Guia de Configuração de Módulo Sem Fio no JetPack 7.2
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
url: https://wiki.seeedstudio.com/pt-br/jetpack72_ax210_ax200_wifi_setup_guide_bk/
---

# Guia de Configuração de Módulo Sem Fio no JetPack 7.2

Após atualizar um dispositivo Seeed Jetson para o JetPack 7.2, alguns usuários podem perceber que o módulo Wi‑Fi M.2 Key E é detectado no PCIe, mas nenhuma interface de rede sem fio aparece.

Este guia cobre o fluxo de reparo do JetPack 7.2 para os seguintes módulos:

- Intel AX210 / AX200, usando `iwlwifi` e `iwlmvm`.
- Realtek RTL8852BE / 8852BE, usando a pilha de driver `rtw89`.

A correção geralmente exige duas partes: instalar os módulos de kernel que correspondem ao kernel `6.8.12-1021-tegra` do JetPack 7.2 e descompactar os arquivos de firmware correspondentes em `/lib/firmware`.

:::note
Este guia se destina a sistemas JetPack 7.2 usando o kernel `6.8.12-1021-tegra`. Os módulos de driver de reparo são compilados para esse kernel. Se `uname -r` mostrar um kernel diferente, use o pacote de driver para essa versão exata de kernel.
:::

## Sintomas

Após atualizar para o JetPack 7.2, você pode ver um ou mais dos seguintes sintomas:

- `lspci` consegue detectar o módulo Wi‑Fi, mas `ip link` não mostra `wlan0`.
- `dmesg` relata erros de carregamento de firmware de `iwlwifi` ou `rtw89`.
- `modprobe` relata que o módulo esperado não pode ser encontrado.
- Carregar o driver manualmente funciona temporariamente, mas o Wi‑Fi desaparece novamente após a reinicialização.

## Pré-requisitos

- Um dispositivo Seeed Jetson gravado com o JetPack 7.2.
- Versão de kernel `6.8.12-1021-tegra`.
- Um módulo Wi‑Fi M.2 Key E compatível instalado corretamente: Intel AX210, Intel AX200 ou Realtek RTL8852BE.
- Acesso temporário à Internet por Ethernet, rede USB ou outro adaptador de rede.
- Permissão de `sudo` no dispositivo Jetson.

Verifique primeiro a versão do kernel e o dispositivo PCIe:

```bash
uname -r
lspci -nnk | grep -A3 -i network
```

IDs PCI comuns incluem:

| Módulo | Exemplo de ID PCI |
| --- | --- |
| Intel AX210 | `8086:2725` |
| Intel AX200 | `8086:2723` |
| Realtek RTL8852BE | `10ec:b852` |

## Opção 1: Script de Reparo com Um Clique

Use esta opção se o Jetson puder acessar a Internet por Ethernet ou outro adaptador de rede.

O script baixa os módulos de driver corrigidos do JetPack 7.2 a partir das pastas públicas do OneDrive, armazena-os em `/tmp/jp72_wifi_fix/driver/`, instala o conjunto de módulos selecionado no diretório de módulos do kernel atual, descompacta os arquivos de firmware necessários e habilita o carregamento automático na inicialização.

:::tip
O link web do OneDrive não é usado diretamente como URL de download do `curl`. O script primeiro abre a página compartilhada do OneDrive para obter um cookie anônimo do SharePoint e, em seguida, baixa cada arquivo por meio do endpoint REST `%24value` do SharePoint.
:::

Crie o script:

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

Execute o script:

```bash
# Auto-detect the Wi-Fi module and repair the driver
bash fix_jp72_wifi.sh

# If auto-detection fails, specify the module manually
bash fix_jp72_wifi.sh --ax210
bash fix_jp72_wifi.sh --ax200
bash fix_jp72_wifi.sh --8852be
```

Para verificar apenas os caminhos de download do OneDrive sem alterar arquivos do sistema, execute:

```bash
# Download all supported driver packages and print their local tree
bash fix_jp72_wifi.sh --download-only

# Or download only one package
bash fix_jp72_wifi.sh --8852be --download-only
```

Estrutura de download esperada:

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

## Opção 2: Configuração manual

Use esta opção se você preferir baixar e instalar os arquivos manualmente.

### Intel AX210 / AX200

Baixe o pacote de driver Intel para JetPack 7.2 na pasta OneDrive abaixo:

- [Módulos de driver AX210/AX200 para JetPack 7.2](https://seeedstudio88-my.sharepoint.com/:f:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IgC5g_yzXQ26Sb-yYWtaWU8qATu9387mvrXAvPLhJNuBtxw?e=PvK037)

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

Para AX210, descompacte o firmware e os arquivos PNVM `ty-a0-gf-a0`:

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

### Realtek RTL8852BE / 8852BE

Baixe o pacote de driver Realtek 8852BE para JetPack 7.2 na pasta OneDrive abaixo:

- [Módulos de driver Realtek 8852BE para JetPack 7.2](https://seeedstudio88-my.sharepoint.com/:f:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IgAxZzXdPP_STosySy14oTGgAZMFt4qQ0IFsKt0oXeAi5KE?e=W84g0E)

O caminho de pasta verificado é `8852be/jp7.2/8852be-6.8.12-1021-tegra/`, e ele contém:

- `rtw89_core.ko`
- `rtw89_pci.ko`
- `rtw89_8852b.ko`
- `rtw89_8852be.ko`
- `SHA256SUMS`
- `modinfo.txt`

Copie a pasta para o Jetson, por exemplo em `~/Downloads/8852be-6.8.12-1021-tegra/`, e então instale os módulos:

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

Instale `zstd` se necessário e, em seguida, descompacte os arquivos de firmware Realtek:

```bash
sudo apt update
sudo apt install -y zstd

cd /lib/firmware/rtw89
sudo unzstd -f -k rtw885*.zst
```

Atualize as dependências dos módulos e carregue o driver:

```bash
printf "rtw89_8852be\n" | sudo tee /etc/modules-load.d/rtw89_8852be.conf
sudo depmod -a
sudo modprobe rtw89_8852be
```

:::note
O nome do módulo é `rtw89_8852be`. Executar `sudo modprobe 8852be` falhará porque `8852be` não é o nome do módulo de kernel.
:::

Reinicie o Jetson se a interface sem fio não aparecer imediatamente:

```bash
sudo reboot
```

## Verificar o Wi-Fi

Após reiniciar, use os seguintes comandos:

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

Uma configuração bem-sucedida deve mostrar o dispositivo Wi-Fi, os módulos de kernel esperados e uma interface sem fio como `wlan0`.

O seguinte resultado do AX210 mostra o estado final com Wi-Fi habilitado após o reparo:

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/AX210Wi-Fi/jp72-ax210.png" />
</div>

## Solução de problemas

| Sintoma | Verificação |
| --- | --- |
| `lspci` não consegue detectar o módulo Wi-Fi | Verifique a instalação do M.2 Key E e confirme se a faixa PCIe está habilitada pela device tree da placa carrier. |
| `dmesg` da Intel relata falhas ao carregar o firmware | Confirme se os arquivos correspondentes `.ucode` e, para AX210, `.pnvm` foram descompactados em `/lib/firmware/`. |
| `dmesg` da Realtek relata falhas ao carregar o firmware | Confirme se os arquivos `rtw885*.zst` foram descompactados em `/lib/firmware/rtw89/`, especialmente os arquivos de firmware `rtw8852b`. |
| `modprobe iwlwifi` relata `Invalid argument` | Verifique se `rfkill.ko` existe com `find /lib/modules/$(uname -r) -name "rfkill.ko"`. Se estiver ausente, use a imagem BSP correta ou recompile os módulos do kernel. |
| `modprobe rtw89_8852be` relata módulo não encontrado | Confirme se os quatro arquivos `rtw89*.ko` foram copiados para `/lib/modules/$(uname -r)/kernel/drivers/net/wireless/realtek/rtw89/` e, em seguida, execute `sudo depmod -a`. |
| `modprobe 8852be` falha | Use `sudo modprobe rtw89_8852be`; `8852be` não é o nome do módulo. |
| O Wi-Fi desaparece após a reinicialização | Confirme se `/etc/modules-load.d/iwlwifi.conf` ou `/etc/modules-load.d/rtw89_8852be.conf` existe e execute `sudo depmod -a` novamente. |
| AX210 carrega mas não consegue escanear redes de 6 GHz | Confirme se `iwlwifi-ty-a0-gf-a0.pnvm` existe e verifique se o domínio regulatório configurado suporta 6 GHz com `iw reg get`. |

## Notas

- Os arquivos de firmware AX210 e AX200 não são intercambiáveis. AX210 usa `ty-a0-gf-a0`; AX200 usa `cc-a0`.
- O Realtek RTL8852BE usa a pilha de driver `rtw89` e firmware em `/lib/firmware/rtw89/`.
- Esses pacotes de reparo são compilados para o kernel `6.8.12-1021-tegra` do JetPack 7.2.
- Evite usar `apt upgrade` como solução alternativa em placas carrier Jetson personalizadas. Em vez disso, use uma imagem BSP ou pacote de driver validado para o kernel de destino.

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
