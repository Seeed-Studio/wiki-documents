---
description: Clonar um ambiente completo do Jetson Orin Nano Developer Kit e construir um BSP Híbrido para o Seeed reComputer Classic J4011/J4012
title: Criar BSP DIY do Orin Nano DevKit para o reComputer Classic
keywords:
  - reComputer
  - reComputer Classic
  - J4011
  - J4012
  - Orin Nano Developer Kit
  - BSP
  - Hybrid
  - Jetson
  - JetPack
  - custom image
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /make_diy_bsp_from_orin_nano_devkit_to_recomputer_classic
sku: 110110144, 110110145
last_update:
  date: 07/13/2026
  author: Zuhao
createdAt: '2026-07-10'
updatedAt: '2026-07-13'
url: https://wiki.seeedstudio.com/pt-br/make_diy_bsp_from_orin_nano_devkit_to_recomputer_classic/
---

Este wiki mostra como clonar um ambiente completo de desenvolvimento a partir de um **NVIDIA Jetson Orin Nano Developer Kit**, construir um BSP Híbrido que pode ser gravado em um **Seeed reComputer Classic (J4011/J4012, configuração de placa `recomputer-orin-j401`)** e concluir a gravação.

Ele estende o fluxo de BSP DIY de mesmo carrier. Se sua origem e destino forem ambas placas Seeed, use em vez disso [Creating a Custom BSP Package from Jetson Development Environment](/pt-br/make_diy_bsp_for_jetson/).

Documentos relacionados:

- [Creating a Custom BSP Package from Jetson Development Environment](/pt-br/make_diy_bsp_for_jetson/)
- [Migrate /home Data from Jetson Orin Nano Developer Kit to reComputer](/pt-br/migrate_home_data_from_jetson_orin_nano_developer_kit_to_recomputer/)
- [Flash JetPack to a Selected Product](/pt-br/flash/jetpack_to_selected_product/)

Este guia usa JetPack 6.2 / L4T 36.4.3 como exemplo (módulo **SKU 0005** = Orin Nano 8GB).

## O que você está construindo

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Objetivo</th>
      <th>Artefato</th>
      <th>Finalidade</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>A. Clone de mesmo carrier</td>
      <td><code>mfi_jetson-orin-nano-devkit-nvme.tar.gz</code></td>
      <td>Regravar o <strong>DevKit</strong> com um clone completo de ambiente</td>
    </tr>
    <tr>
      <td>B. Pacote Classic</td>
      <td><code>mfi_recomputer-orin-j401.tar.gz</code></td>
      <td>Gravar o <strong>Classic J4011</strong>: QSPI em nível de placa J401 + APP completo do DevKit (incluindo <code>/home</code>)</td>
    </tr>
    <tr>
      <td>C. Retorno seguro</td>
      <td>BSP J401 oficial + migrar apenas <code>/home</code></td>
      <td>Usar quando os resultados do Híbrido estiverem anormais</td>
    </tr>
  </tbody>
</table>
</div>

:::danger
**Não** grave o pacote `mfi_jetson-orin-nano-devkit-nvme` do DevKit diretamente no Classic.  
**Não** considere editar um único `.dtb` dentro do diretório mfi como adaptação de placa.
:::

## Pré-requisitos

### Hardware

- Origem: Orin Nano **Developer Kit** (este exemplo usa o módulo **SKU 0005** = Orin Nano 8GB, boot por NVMe)
- Destino: Seeed **reComputer Classic J4011/J4012** (carrier J401; idealmente o módulo também deve ser 0005)
- Host: Ubuntu 22.04 x86_64, cabo USB Type-C (porta de gravação)
- Disco: reservar **≥ 100GB** de espaço livre (backup + mfi duplo + snapshots)

### Dependências no host

```bash
sudo apt-get update -y
sudo apt-get install -y \
  build-essential flex bison libssl-dev \
  sshpass abootimg nfs-kernel-server \
  libxml2-utils qemu-user-static
```

Antes do backup/gravação:

```bash
sudo systemctl stop udisks2.service
sudo service nfs-kernel-server start
lsusb | grep 0955:7523   # must show NVIDIA Corp. APX
```

### Comparação de placas (este exemplo)

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Item</th>
      <th>DevKit</th>
      <th>Classic J4011</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>board-name</td>
      <td><code>jetson-orin-nano-devkit-nvme</code></td>
      <td><code>recomputer-orin-j401</code></td>
    </tr>
    <tr>
      <td>Arquivo de configuração</td>
      <td><code>p3768-0000-p3767-0000-a0-nvme.conf</code></td>
      <td><code>recomputer-orin-j401.conf</code></td>
    </tr>
    <tr>
      <td>Pinmux</td>
      <td><code>...-dp-a03</code> (DP)</td>
      <td><code>...-hdmi-a03</code> (HDMI)</td>
    </tr>
    <tr>
      <td>Overlay</td>
      <td>Dinâmico do DevKit, etc.</td>
      <td><code>tegra234-dcb-p3767-0000-hdmi.dtbo</code> + <code>tegra234-p3767-camera-p3768-imx219-dual-seeed.dtbo</code></td>
    </tr>
    <tr>
      <td>DTB principal do SKU0005</td>
      <td><code>...-0005-nv(-super).dtb</code></td>
      <td><strong>Ainda usa</strong> <code>tegra234-p3768-0000+p3767-0005-nv-super.dtb</code></td>
    </tr>
  </tbody>
</table>
</div>

Exemplo de `board_spec` de backup:

```text
3767-300-0005-V.2-1-1-jetson-orin-nano-devkit-nvme-
```

:::danger
A série reComputer Classic tem refrigeração insuficiente para suportar o modo MAXN Super. Se você gravar o JetPack 6.2 em um dispositivo Classic, **não ative o MAXN**.
:::

## 1. Preparar o workspace Linux_for_Tegra

Baixe o pacote de trabalho L4T da Seeed a partir da tabela em [Creating a Custom BSP Package from Jetson Development Environment](/pt-br/make_diy_bsp_for_jetson/#1-prepare-working-directory-on-pc) (JetPack 6.2 / L4T 36.4.3 plus neste exemplo).

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

Verificação:

```bash
test -f Linux_for_Tegra/recomputer-orin-j401.conf
test -f Linux_for_Tegra/jetson-orin-nano-devkit-nvme.conf
ls Linux_for_Tegra/kernel/dtb/tegra234-j401-*-recomputer.dtb
ls Linux_for_Tegra/kernel/dtb/tegra234-dcb-p3767-0000-hdmi.dtbo
```

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/dk-to-classic/section-2-verify.png"/></div>

## 2. Fazer backup do ambiente completo do DevKit

### 2.1 Colocar o dispositivo de origem em modo Recovery

Conecte a porta de gravação do DevKit ao host com um cabo de dados USB Type-C e entre no modo Recovery. No host, `lsusb` deve mostrar `0955:7523` **APX**.

Para etapas do modo Recovery, consulte: [Flash JetPack to a Selected Product](/pt-br/flash/jetpack_to_selected_product/)

Durante o backup o dispositivo pode alternar brevemente para `0955:7035` (Linux for Tegra / initrd). Isso é normal.

### 2.2 Comando de backup

```bash
cd Linux_for_Tegra
sudo ./tools/backup_restore/l4t_backup_restore.sh \
  -e nvme0n1 -b -c jetson-orin-nano-devkit-nvme
```

:::warning
**Não** use `recomputer-orin-j401` para o primeiro backup quando a origem for um DevKit. Isso irá corromper o `board_spec` e os baselines posteriores.
:::

### 2.3 Verificação

```bash
ls -lah tools/backup_restore/images/
head -5 tools/backup_restore/images/nvpartitionmap.txt
```

Você deve ver:

- `board_spec` contém `jetson-orin-nano-devkit-nvme`
- `nvme0n1p1.tar.zst` (ou o APP grande convertido posteriormente) tem **escala de GB**
- `QSPI0.img` existe (este é o QSPI do **DevKit**; o Híbrido não deve reutilizá-lo como QSPI do Classic)

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/dk-to-classic/section-3.3-verify.png"/></div>

Recomendado: criar snapshot imediatamente:

```bash
sudo cp -a tools/backup_restore/images ~/backup_images_dk_sku0005
```

## 3. Construir BSP DIY de mesmo carrier para o DevKit (Opcional)

Coloque o dispositivo de volta em **APX**. No host, `lsusb` deve mostrar `0955:7523 APX`:

```bash
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh \
  --use-backup-image --no-flash --network usb0 --massflash 5 \
  jetson-orin-nano-devkit-nvme internal
```

Artefatos:

- `mfi_jetson-orin-nano-devkit-nvme/`
- `mfi_jetson-orin-nano-devkit-nvme.tar.gz`

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/dk-to-classic/section-4-artifacts.png"/></div>

:::danger
**Apenas para regravação do DevKit. Não grave o Classic com este pacote.**
:::

## 4. Leitura obrigatória: a armadilha do QSPI

Com `--use-backup-image`, `convert_backup_image_to_initrd_flash` coloca:

| Conteúdo do backup | Destino |
| --- | --- |
| NVMe / APP | `tools/kernel_flash/images/external/` |
| `QSPI0.img` da **origem** | `tools/kernel_flash/images/internal/` |

Portanto:

| Abordagem incorreta | Resultado |
| --- | --- |
| Editar apenas `mfi/.../rootfs` ou um `.dtb` | Ineficaz (o que realmente é gravado é o bak / QSPI) |
| Backup do DevKit, depois diretamente `recomputer-orin-j401` + `--use-backup-image` | **Ainda grava o QSPI do DevKit (pinmux DP)**; HDMI/USB podem ficar incorretos |
| Alterar o conf, depois `--flash-only` | `--flash-only` **não** reconstrói imagens a partir do conf |

O que realmente difere no Classic J4011 é o **pinmux HDMI + overlay DCB/câmera** em `recomputer-orin-j401.conf`:

```bash
PINMUX_CONFIG="tegra234-mb1-bct-pinmux-p3767-hdmi-a03.dtsi"
PMC_CONFIG="tegra234-mb1-bct-padvoltage-p3767-hdmi-a03.dtsi"
OVERLAY_DTB_FILE+=",tegra234-dcb-p3767-0000-hdmi.dtbo,tegra234-p3767-camera-p3768-imx219-dual-seeed.dtbo"
DCE_OVERLAY_DTB_FILE="tegra234-dcb-p3767-0000-hdmi.dtbo"
```

Para o SKU **0005**, o nome de arquivo DTB principal ainda é o `*-0005-nv-super.dtb` da NVIDIA. **Não** force a troca para `*-0000-recomputer.dtb` (esse caminho é para o NX 16GB).

## 5. Híbrido B': construir o pacote Classic J4011

Ideia central:

1. **APP**: continuar usando o backup do DevKit (ambiente completo do usuário)
2. **QSPI**: regenerar com `recomputer-orin-j401` (**sem** `--use-backup-image`)
3. Montar em `mfi_recomputer-orin-j401`

```text
DevKit backup APP  ──►  external/ (nvme0n1p1_bak.img, etc.)
J401 conf new QSPI  ──►  internal/ (QSPI shards, not DevKit monolithic QSPI0.img)
                     └──► mfi_recomputer-orin-j401(.tar.gz)
```

### 5.1 Preparar apenas o APP (remover QSPI do DevKit)

```bash
cd Linux_for_Tegra
sudo cp -a ~/backup_images_dk_sku0005 \
  tools/backup_restore/images_app_only
sudo rm -f tools/backup_restore/images_app_only/QSPI0.img
sudo sed -i '/qspi/Id' tools/backup_restore/images_app_only/nvpartitionmap.txt
```

Converter apenas o APP em imagens `external` de initrd flash (use a etapa de conversão da ferramenta de backup ou reutilize o APP grande que já está em `tools/kernel_flash/images/external/` a partir da etapa de pacote mfi do DevKit).

### 5.2 Regenerar o QSPI com o conf J401

O dispositivo deve estar em APX. Os parâmetros do módulo devem corresponder ao backup (este exemplo: 3767 / 0005 / 300 / V.2):

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

Os logs devem mostrar o pinmux HDMI, por exemplo `tegra234-mb1-bct-pinmux-p3767-hdmi-a03`.

Recomendado: salve o novo QSPI internamente:

```bash
sudo cp -a tools/kernel_flash/images/internal ~/j401_qspi_internal_save
```

### 5.3 Montar o mfi

O diretório final deve satisfazer:

| Caminho | Conteúdo |
| --- | --- |
| `mfi_recomputer-orin-j401/recomputer-orin-j401.conf` | Presente |
| `.../tools/kernel_flash/images/internal/` | **Novo J401 QSPI** (sem `QSPI0.img` monolítico do DevKit, ou hash diferente do DevKit; `flash.idx` costuma ser fragmentado em várias linhas) |
| `.../tools/kernel_flash/images/external/nvme0n1p1_bak.img` | APP em **escala de GB** |

Arquivo opcional:

```bash
cd Linux_for_Tegra
sudo tar czf mfi_recomputer-orin-j401.tar.gz mfi_recomputer-orin-j401
```

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/dk-to-classic/section-6.3-artifacts.png"/></div>

## 6. Gravar no Classic J4011

### 6.1 Colocar o alvo em APX

`lsusb` → `0955:7523 NVIDIA Corp. APX`

### 6.2 Comando de gravação

**Se o diretório extraído já existir localmente, não execute** `tar xpf` **novamente:**

```bash
cd Linux_for_Tegra/mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh \
  --flash-only --massflash 1 --network usb0 --showlogs
```

Somente quando outro PC tiver **apenas** o `.tar.gz`:

```bash
sudo tar xpf mfi_recomputer-orin-j401.tar.gz
cd mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh \
  --flash-only --massflash 1 --network usb0 --showlogs
```

### 6.3 Mensagens normais durante a gravação

| Log | Significado |
| --- | --- |
| `p3768-0000-p3767-0000-a0.conf: No such file or directory` | Comum com `--flash-only`; as imagens já estão pré‑compiladas, continue |
| `rpcbind already running` | Seguro ignorar |
| `blockdev: cannot open /dev/mmcblk0boot0` | Orin Nano não possui essa partição; geralmente inofensivo |
| RCM-boot + `SSH ready` | Entrada normal de gravação |
| DTB `...-0005-nv-super.dtb` | Correto para SKU0005 |
| Várias linhas `internal` + `Starting to flash to qspi` | Gravando o QSPI do J401 |
| `tar ... zstd ... nvme0n1p1_bak.img` | Restaurando APP (etapa mais longa; pode levar dezenas de minutos) |

:::warning
**Não desligue nem desconecte até ver uma mensagem de conclusão bem‑sucedida.**
:::

### 6.4 Verificações pós‑gravação (no Classic)

```bash
cat /proc/device-tree/model
ls /boot/kernel_tegra234*.dtb
ls /boot/*.dtbo | grep -E 'hdmi|imx219-dual-seeed' || true

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
Sem sudo, `dmesg` pode informar `Operation not permitted`. Isso é um problema de permissões; use `sudo`.
:::

**No dispositivo: modelo / DTB**

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/dk-to-classic/section-7.4.1-model-dtb.png"/></div>

**No dispositivo: CUDA instalada no DevKit original ainda funciona**

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/dk-to-classic/section-7.4.1-cuda-nvcc.png"/></div>

#### Como interpretar os resultados (SKU 0005)

**1) `/proc/device-tree/model` ainda mostra DevKit — normal para SKU 0005**

Exemplo:

```text
NVIDIA Jetson Orin Nano Engineering Reference Developer Kit Super
```

Motivo: para **SKU 0005**, `recomputer-orin-j401.conf` seleciona o `tegra234-p3768-0000+p3767-0005-nv-super.dtb` da NVIDIA. Ele **não** alterna para `tegra234-j401-*-recomputer.dtb`, então a string de modelo ainda parece o DevKit oficial. **Não** conclua “gravei o bundle errado de DevKit” apenas com base nessa linha.

**2) Nomes de arquivos DTB em `/boot`**

Comumente visíveis:

```text
/boot/kernel_tegra234-p3768-0000+p3767-0000-nv.dtb
/boot/kernel_tegra234-p3768-0000+p3767-0005-nv.dtb
```

Você pode não ver um nome de arquivo `*-0005-nv-super.dtb`; o DTB real de boot costuma ser escolhido pelo **UEFI/QSPI**. A listagem de `/boot` é apenas para referência.

**3) `grep hdmi|imx219-dual-seeed` vazio — não é falha por si só**

Após a gravação híbrida, `/boot/*.dtbo` frequentemente ainda contém a lista genérica de overlays do backup do DevKit. Você **pode não** ver `tegra234-dcb-p3767-0000-hdmi.dtbo` ou `...-imx219-dual-seeed.dtbo`. As configurações de HDMI/câmera da Seeed atuam principalmente por meio do caminho de **novo overlay J401 QSPI / UEFI**.

**4) Julgue por “funciona?”**

| Verificação | Exemplo saudável |
| --- | --- |
| USB | Hubs, mouse, Bluetooth, Ethernet USB enumerados (`lsusb` mostra vários dispositivos) |
| Ethernet com fio | `enP8p1s0` etc. estão `UP` |
| Wi‑Fi | `wlP1p1s0` está `UP` |
| Display | Desktop funciona; ou `xrandr` tem saída |
| Ambiente do usuário | Usuários, softwares e dados originais do DevKit permanecem |
| CUDA | `nvcc --version` funciona (neste exemplo **12.6**), indicando que o clone da APP está intacto |

#### Quando editar `extlinux.conf`

Somente se **HDMI / USB / boot estiverem anormais**, tente adicionar sob `LABEL primary` em `/boot/extlinux/extlinux.conf`:

```text
FDT /boot/kernel_tegra234-p3768-0000+p3767-0005-nv-super.dtb
```

(Se esse arquivo estiver ausente em `/boot`, tente `...-0005-nv.dtb`, ou copie primeiro de `kernel/dtb/` do BSP.)

```bash
sudo reboot
```

Se ainda estiver anormal, use a Seção 7 Plano A (BSP oficial do J401 + migrar `/home`).

## 7. Plano A de fallback (caminho oficial)

Se a gravação híbrida deixar partições/UEFI/periféricos anormais:

1. Grave o BSP **oficial** `recomputer-orin-j401` conforme o fluxo da Seeed (não grave o mfi do DevKit).
2. Extraia `/home` do backup (`nvme0n1p1.tar.zst`) ou siga [Migrate /home Data from Jetson Orin Nano Developer Kit to reComputer](/pt-br/migrate_home_data_from_jetson_orin_nano_developer_kit_to_recomputer/).
3. Restaure `/home` no Classic e reinstale o software em nível de sistema conforme necessário (`/usr`, `/etc`, Docker, etc. precisam de tratamento separado).

Prós: firmware de placa mais limpo. Contras: não é um clone completo do disco `/`.

## 8. Referência rápida de caminhos principais

| Tipo | Caminho (sob `Linux_for_Tegra/`) |
| --- | --- |
| DK mfi | `mfi_jetson-orin-nano-devkit-nvme.tar.gz` |
| Classic Bundle mfi | `mfi_recomputer-orin-j401.tar.gz` |
| J401 conf | `recomputer-orin-j401.conf` |
| HDMI DCB | `kernel/dtb/tegra234-dcb-p3767-0000-hdmi.dtbo` |
| Seeed dual IMX219 | `kernel/dtb/tegra234-p3767-camera-p3768-imx219-dual-seeed.dtbo` |
| J401 DTB | `kernel/dtb/tegra234-j401-p3768-0000+p3767-*-recomputer.dtb` |
| SKU0005 DTB | `kernel/dtb/tegra234-p3768-0000+p3767-0005-nv-super.dtb` |

## 9. Visão geral do fluxo

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
          └─► [APX] J401 without --use-backup-image → generate QSPI
                    │
                    ▼
              assemble mfi_recomputer-orin-j401
                    │
                    ▼
              [Classic APX] --flash-only
                    │
                    ▼
              check display/USB/NVMe/user environment
```

## 10. FAQ

**P: Tanto o diretório quanto o `.tar.gz` existem — ainda preciso extrair?**  
R: Não. Se `mfi_recomputer-orin-j401/` existir, faça `cd` nele e execute `--flash-only`.

**P: O módulo Classic de destino não é 0005?**  
R: Altere `BOARDSKU`, escolha o DTB correspondente conforme `p3767_super_overlay` em `recomputer-orin-j401.conf` e então regenere o QSPI.

**P: Quero manter apenas `/home`, não clonar o disco inteiro?**  
R: Use o Plano A (Seção 7). É mais simples e mais confiável.

**P: Por que o exemplo de wiki do BSP DIY usa `recomputer-orin-j401`?**  
R: Esse exemplo assume que **origem e destino são ambas placas Seeed**. Quando a origem é um DevKit oficial, o backup deve primeiro usar `jetson-orin-nano-devkit-nvme` e então seguir este tutorial de adaptação Hybrid Classic.

## Suporte técnico e discussão de produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
