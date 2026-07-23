---
description: Clonar um ambiente completo do Jetson Orin Nano Developer Kit e construir um BSP Híbrido para Seeed reComputer Classic ou Super
title: Criar BSP DIY do Orin Nano DevKit para reComputer Classic / Super
keywords:
  - reComputer
  - reComputer Classic
  - reComputer Super
  - J4011
  - J4012
  - Orin Nano Developer Kit
  - BSP
  - Hybrid
  - Hybrid BSP
  - Jetson
  - JetPack
  - custom image
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /make_diy_bsp_from_orin_nano_devkit_to_recomputer_classic_and_super
sku: 110110144, 110110145
last_update:
  date: 07/22/2026
  author: Zuhao
createdAt: '2026-07-22'
updatedAt: '2026-07-22'
url: https://wiki.seeedstudio.com/pt-br/make_diy_bsp_from_orin_nano_devkit_to_recomputer_classic_and_super/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Este guia mostra como clonar um ambiente de desenvolvimento completo de um **NVIDIA Jetson Orin Nano Developer Kit**, substituir o firmware da placa pelo da **Seeed reComputer**, construir um BSP Híbrido e concluir o flash.

São suportadas duas placas de destino:

- **reComputer Classic** (J4011/J4012, configuração de placa `recomputer-orin-j401`)
- **reComputer Super** (configuração de placa `recomputer-orin-super-j401`)

Ambas compartilham a mesma ideia central — **manter o APP completo do DevKit, regenerar o QSPI da placa de destino** — mas diferem em detalhes de pinmux, overlay de câmera e layout de disco. As diferenças são apresentadas nas abas abaixo; as etapas comuns são escritas uma vez só.

Este fluxo foi validado com JetPack 6.2 / L4T 36.4.3, Orin Nano 8GB (SKU 0005).

Documentos relacionados:

- [Criar um pacote BSP personalizado a partir do ambiente de desenvolvimento Jetson](/pt-br/make_diy_bsp_for_jetson/)
- [Migrar dados de /home do Jetson Orin Nano Developer Kit para reComputer](/pt-br/migrate_home_data_from_jetson_orin_nano_developer_kit_to_recomputer/)
- [Gravar o JetPack em um produto selecionado](/pt-br/flash/jetpack_to_selected_product/)

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
      <td>A. Clone no mesmo carrier</td>
      <td><code>mfi_jetson-orin-nano-devkit-nvme.tar.gz</code></td>
      <td>Regravar o <strong>DevKit</strong> com um clone completo do ambiente</td>
    </tr>
    <tr>
      <td>B. Pacote de destino</td>
      <td><code>mfi_recomputer-orin-j401.tar.gz</code> (Classic)<br/><code>mfi_recomputer-orin-super-j401.tar.gz</code> (Super)</td>
      <td>Gravar a <strong>placa de destino</strong>: QSPI em nível de placa de destino + APP completo do DevKit (incluindo <code>/home</code>)</td>
    </tr>
    <tr>
      <td>C. Retorno seguro</td>
      <td>BSP oficial + migrar apenas <code>/home</code></td>
      <td>Usar quando os resultados do Híbrido forem anormais</td>
    </tr>
  </tbody>
</table>
</div>

:::danger
**Não** grave o pacote do DevKit `mfi_jetson-orin-nano-devkit-nvme` diretamente na placa de destino.

**Não** considere editar um único `.dtb` dentro do diretório mfi como adaptação de placa.

**Não** grave um pacote Híbrido Classic em uma Super, ou vice-versa — seus pinmux e overlays de câmera são diferentes.
:::

## Pré-requisitos

### Hardware

- Origem: Orin Nano **Developer Kit** (este exemplo usa o módulo **SKU 0005** = Orin Nano 8GB, boot por NVMe)
- Destino: Seeed **reComputer Classic J4011/J4012** ou **reComputer Super** (idealmente o módulo também deve ser 0005)
- Host: Ubuntu 22.04 x86_64, cabo USB Type-C (porta de flash)
- Disco: reservar **≥ 100GB** de espaço livre (backup + mfi duplo + snapshots)

:::danger
A série reComputer Classic não possui refrigeração suficiente para suportar o modo MAXN Super. Se você gravar o JetPack 6.2 em um dispositivo Classic, **não ative o MAXN**.
:::

### Dependências no host

```bash
sudo apt-get update -y
sudo apt-get install -y \
  build-essential flex bison libssl-dev \
  sshpass abootimg nfs-kernel-server \
  libxml2-utils qemu-user-static
```

Antes do backup/flash:

```bash
sudo systemctl stop udisks2.service
sudo service nfs-kernel-server start
lsusb | grep 0955:7523   # must show NVIDIA Corp. APX
```

### Comparação das placas

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Item</th>
      <th>DevKit</th>
      <th>reComputer Classic</th>
      <th>reComputer Super</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>board-name</td>
      <td><code>jetson-orin-nano-devkit-nvme</code></td>
      <td><code>recomputer-orin-j401</code></td>
      <td><code>recomputer-orin-super-j401</code></td>
    </tr>
    <tr>
      <td>Arquivo de configuração</td>
      <td><code>p3768-0000-p3767-0000-a0-nvme.conf</code></td>
      <td><code>recomputer-orin-j401.conf</code></td>
      <td><code>recomputer-orin-super-j401.conf</code></td>
    </tr>
    <tr>
      <td>Pinmux</td>
      <td>NVIDIA DevKit (DP)</td>
      <td>Classic HDMI</td>
      <td>Super HDMI</td>
    </tr>
    <tr>
      <td>Overlay de câmera</td>
      <td>NVIDIA dinâmico</td>
      <td>Seeed IMX219 duplo</td>
      <td>Seeed IMX219 quádruplo</td>
    </tr>
    <tr>
      <td>DTB principal do SKU0005</td>
      <td><code>...-0005-nv(-super).dtb</code></td>
      <td colspan="2"><strong>Ainda usa</strong> <code>tegra234-p3768-0000+p3767-0005-nv-super.dtb</code></td>
    </tr>
    <tr>
      <td>mfi final</td>
      <td>Apenas DevKit</td>
      <td>Apenas Classic</td>
      <td>Apenas Super</td>
    </tr>
  </tbody>
</table>
</div>

Exemplo de `board_spec` de backup:

```text
3767-300-0005-V.2-1-1-jetson-orin-nano-devkit-nvme-
```

## 1. Preparar o workspace Linux_for_Tegra

Baixe o pacote de trabalho L4T da Seeed a partir da tabela em [Criar um pacote BSP personalizado a partir do ambiente de desenvolvimento Jetson](/pt-br/make_diy_bsp_for_jetson/#1-prepare-working-directory-on-pc) (JetPack 6.2 / L4T 36.4.3 plus neste exemplo).

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

<Tabs>
  <TabItem value="classic" label="reComputer Classic" default>

```bash
test -f Linux_for_Tegra/recomputer-orin-j401.conf
test -f Linux_for_Tegra/jetson-orin-nano-devkit-nvme.conf
ls Linux_for_Tegra/kernel/dtb/tegra234-j401-*-recomputer.dtb
ls Linux_for_Tegra/kernel/dtb/tegra234-dcb-p3767-0000-hdmi.dtbo
```

  </TabItem>
  <TabItem value="super" label="reComputer Super">

```bash
cd Linux_for_Tegra
test -f recomputer-orin-super-j401.conf
test -f jetson-orin-nano-devkit-nvme.conf
test -f kernel/dtb/tegra234-dcb-p3767-0000-hdmi.dtbo
test -f kernel/dtb/tegra234-p3767-camera-p3768-imx219-quad-seeed.dtbo
```

  </TabItem>
</Tabs>

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/dk-to-classic/section-2-verify.png"/></div>

## 2. Fazer backup do ambiente completo do DevKit

### 2.1 Colocar o dispositivo de origem em modo Recovery

Conecte a porta de flash do DevKit ao host com um cabo de dados USB Type-C e entre no modo Recovery. No host, `lsusb` deve mostrar `0955:7523` **APX**.

Para as etapas do modo Recovery, consulte: [Gravar o JetPack em um produto selecionado](/pt-br/flash/jetpack_to_selected_product/)

Durante o backup o dispositivo pode alternar brevemente para `0955:7035` (Linux for Tegra / initrd). Isso é normal.

### 2.2 Comando de backup

```bash
cd Linux_for_Tegra
sudo ./tools/backup_restore/l4t_backup_restore.sh \
  -e nvme0n1 -b -c jetson-orin-nano-devkit-nvme
```

:::warning
**Não** use o nome da placa de destino para o primeiro backup quando a origem for um DevKit. Isso irá corromper o `board_spec` e as bases posteriores.
:::

### 2.3 Verificação

```bash
ls -lah tools/backup_restore/images/
head -5 tools/backup_restore/images/nvpartitionmap.txt
```

Você deve ver:

- `board_spec` contém `jetson-orin-nano-devkit-nvme`
- `nvme0n1p1.tar.zst` (ou o APP grande convertido posteriormente) tem **escala de GB**
- `QSPI0.img` existe (este é o QSPI do **DevKit**; o Híbrido não deve reutilizá-lo como QSPI da placa de destino)

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/dk-to-classic/section-3.3-verify.png"/></div>

Recomendado: criar snapshot imediatamente:

```bash
sudo cp -a tools/backup_restore/images ~/backup_images_dk_sku0005
```

## 3. Construir o BSP DIY de mesmo carrier do DevKit (Opcional)

Coloque o dispositivo novamente em **APX**. No host, `lsusb` deve mostrar `0955:7523 APX`:

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
**Apenas para regravação do DevKit. Não grave a placa de destino com este pacote.**

Seu APP pode ser usado como fonte de dados para o pacote Híbrido, mas seu QSPI não pode ser reutilizado.
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
| Backup do DevKit, depois trocar diretamente o nome da placa de destino + `--use-backup-image` | **Ainda grava o QSPI do DevKit (pinmux DP)**; HDMI/USB podem ficar incorretos |
| Alterar o conf, depois `--flash-only` | `--flash-only` **não** reconstrói as imagens a partir do conf |

O que realmente difere na placa de destino é o **pinmux do HDMI + overlay DCB/câmera** no conf da placa:

<Tabs>
  <TabItem value="classic" label="reComputer Classic" default>

Conteúdos principais de `recomputer-orin-j401.conf`:

```bash
PINMUX_CONFIG="tegra234-mb1-bct-pinmux-p3767-hdmi-a03.dtsi"
PMC_CONFIG="tegra234-mb1-bct-padvoltage-p3767-hdmi-a03.dtsi"
OVERLAY_DTB_FILE+=",tegra234-dcb-p3767-0000-hdmi.dtbo,tegra234-p3767-camera-p3768-imx219-dual-seeed.dtbo"
DCE_OVERLAY_DTB_FILE="tegra234-dcb-p3767-0000-hdmi.dtbo"
```

  </TabItem>
  <TabItem value="super" label="reComputer Super">

Conteúdos principais de `recomputer-orin-super-j401.conf`:

```bash
PINMUX_CONFIG="recomputer-super-orin-j401-pinmux-p3767-hdmi-a03.dtsi";
PMC_CONFIG="recomputer-super-orin-j401-padvoltage-p3767-hdmi-a03.dtsi";
OVERLAY_DTB_FILE+=",tegra234-dcb-p3767-0000-hdmi.dtbo,tegra234-p3767-camera-p3768-imx219-quad-seeed.dtbo";
DCE_OVERLAY_DTB_FILE="tegra234-dcb-p3767-0000-hdmi.dtbo";
```

  </TabItem>
</Tabs>

Para o SKU **0005**, o nome principal do DTB ainda é o `*-0005-nv-super.dtb` da NVIDIA. **Não** force a troca para `*-0000-recomputer.dtb` (esse caminho é para o NX 16GB).

## 5. BSP Híbrido: Construir o Pacote de Destino

Ideia principal:

1. **APP**: continuar usando o backup do DevKit (ambiente completo do usuário)
2. **QSPI**: regenerar com a configuração da placa de destino (**sem** `--use-backup-image`)
3. Montar no mfi da placa de destino

```text
DevKit backup APP  ──►  external/ (nvme0n1p1_bak.img, etc.)
Target conf new QSPI ──►  internal/ (QSPI shards, not DevKit monolithic QSPI0.img)
                     └──► mfi_recomputer-orin-<target>(.tar.gz)
```

### 5.1 Preparar somente APP (Remover QSPI do DevKit)

```bash
cd Linux_for_Tegra
sudo cp -a ~/backup_images_dk_sku0005 \
  tools/backup_restore/images_app_only
sudo rm -f tools/backup_restore/images_app_only/QSPI0.img
sudo sed -i '/qspi/Id' tools/backup_restore/images_app_only/nvpartitionmap.txt
```

Converter somente APP em imagens `external` de flash initrd (use a etapa de conversão da ferramenta de backup ou reutilize o grande APP já em `tools/kernel_flash/images/external/` da etapa de empacotamento do mfi do DevKit).

### 5.2 Gerar QSPI da Placa de Destino

O dispositivo deve estar em APX. Os parâmetros do módulo devem corresponder ao backup (neste exemplo: 3767 / 0005 / 300 / V.2):

<Tabs>
  <TabItem value="classic" label="reComputer Classic" default>

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

  </TabItem>
  <TabItem value="super" label="reComputer Super">

Primeiro crie um alias que herde a configuração da placa Super, mas use explicitamente um root NVMe:

```bash
cd Linux_for_Tegra
cat > recomputer-orin-super-j401-nvme.conf <<'EOF'
source "${LDK_DIR}/recomputer-orin-super-j401.conf";
EOF
```

```bash
cd Linux_for_Tegra
sudo BOARDID=3767 BOARDSKU=0005 FAB=300 BOARDREV=V.2 \
  CHIP_SKU=00:00:00:D5 \
  ./tools/kernel_flash/l4t_initrd_flash.sh \
  --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_t234_nvme.xml \
  -p "-c bootloader/generic/cfg/flash_t234_qspi.xml --no-systemimg" \
  --no-flash --massflash 5 --showlogs --network usb0 \
  recomputer-orin-super-j401-nvme external
```

:::danger
Não use `internal` como rootdev final neste cenário NVMe. Na configuração validada, isso gerou uma configuração MB2 com `SDCARD instance: 0`, e a inicialização parou em `Busy Spin` quando não havia cartão SD.
:::

O log deve conter:

```text
recomputer-super-orin-j401-pinmux-p3767-hdmi-a03.dtsi
tegra234-p3767-camera-p3768-imx219-quad-seeed.dtbo
```

  </TabItem>
</Tabs>

Recomendado: salvar o novo QSPI internal:

<Tabs>
  <TabItem value="classic" label="reComputer Classic" default>

```bash
sudo cp -a tools/kernel_flash/images/internal ~/j401_qspi_internal_save
```

:::info
O QSPI internal (SKU 0005 / L4T 36.4.3) gerado neste guia está disponível para download direto:

```bash
wget -O j401_qspi_internal_save.tar.gz \
  https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/dk-to-classic/j401_qspi_internal_save.tar.gz
mkdir -p Linux_for_Tegra/tools/kernel_flash/images/internal
tar xpf j401_qspi_internal_save.tar.gz -C Linux_for_Tegra/tools/kernel_flash/images/internal/
```

Coloque os arquivos baixados em `Linux_for_Tegra/tools/kernel_flash/images/internal/` para pular a etapa de geração do QSPI acima.

**Pré-requisitos de reutilização**: a placa de destino é reComputer Classic J4011/J4012, módulo SKU 0005, L4T 36.4.3. Se qualquer condição não corresponder, regenere o QSPI conforme esta seção.
:::

  </TabItem>
  <TabItem value="super" label="reComputer Super">

```bash
sudo cp -a tools/kernel_flash/images/internal ~/super_j401_qspi_internal_save
```

Verifique se o `internal/flash.idx` da Super existe e se o `QSPI0.img` monolítico do DevKit está ausente:

```bash
test -f mfi_recomputer-orin-super-j401/tools/kernel_flash/images/internal/flash.idx
test ! -f mfi_recomputer-orin-super-j401/tools/kernel_flash/images/internal/QSPI0.img
```

:::info
O QSPI internal da Super (SKU 0005 / L4T 36.4.3) gerado neste guia está disponível para download direto:

```bash
wget -O super_j401_qspi_internal_save.tar.gz \
  https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/dk-to-super/super_j401_qspi_internal_save.tar.gz
mkdir -p Linux_for_Tegra/tools/kernel_flash/images/internal
tar xpf super_j401_qspi_internal_save.tar.gz -C Linux_for_Tegra/tools/kernel_flash/images/internal/
```

Coloque os arquivos baixados em `Linux_for_Tegra/tools/kernel_flash/images/internal/` para pular a etapa de geração do QSPI acima.

**Pré-requisitos de reutilização**: a placa de destino é reComputer Super, módulo SKU 0005, L4T 36.4.3. Se qualquer condição não corresponder, regenere o QSPI conforme esta seção.
:::

  </TabItem>
</Tabs>

### 5.3 Montar o mfi

<Tabs>
  <TabItem value="classic" label="reComputer Classic" default>

O diretório final deve satisfazer:

| Caminho | Conteúdo |
| --- | --- |
| `mfi_recomputer-orin-j401/recomputer-orin-j401.conf` | Presente |
| `.../tools/kernel_flash/images/internal/` | **Novo QSPI J401** (sem `QSPI0.img` monolítico do DevKit, ou hash diferente do DevKit; `flash.idx` costuma ser fragmentado em várias linhas) |
| `.../tools/kernel_flash/images/external/nvme0n1p1_bak.img` | APP em **escala de GB** |

Arquivo opcional:

```bash
cd Linux_for_Tegra
sudo tar czf mfi_recomputer-orin-j401.tar.gz mfi_recomputer-orin-j401
```

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/dk-to-classic/section-6.3-artifacts.png"/></div>

  </TabItem>
  <TabItem value="super" label="reComputer Super">

:::danger
Não copie incondicionalmente todo o diretório `external/` do mfi do DevKit.

Se o DevKit de origem usar uma unidade de 256GB e a Super de destino usar 128GB, o GPT de origem falha em `partprobe` com "GPT is larger than device storage".
:::

A unidade de destino validada tinha `128035676160` bytes. Usamos o layout externo padrão `flash_l4t_t234_nvme.xml` de `102400000000` bytes e substituímos apenas o payload APP:

```bash
cd Linux_for_Tegra

# Use the standard external images generated for the current Super workspace:
sudo cp -a tools/kernel_flash/images/external/. \
  mfi_recomputer-orin-super-j401/tools/kernel_flash/images/external/

# Reuse only the DevKit APP content:
sudo cp -a \
  mfi_jetson-orin-nano-devkit-nvme/tools/kernel_flash/images/external/nvme0n1p1_bak.img* \
  mfi_recomputer-orin-super-j401/tools/kernel_flash/images/external/

sudo tee \
  mfi_recomputer-orin-super-j401/tools/kernel_flash/images/external/flash.cfg \
  >/dev/null <<'EOF'
APP_ext=nvme0n1p1_bak.img
external_device=nvme0n1p1
EOF
```

Verificar:

```bash
test -f mfi_recomputer-orin-super-j401/recomputer-orin-super-j401.conf
test -f mfi_recomputer-orin-super-j401/tools/kernel_flash/images/external/nvme0n1p1_bak.img
test ! -f mfi_recomputer-orin-super-j401/tools/kernel_flash/images/internal/QSPI0.img
```

Todas as três condições devem ser verdadeiras:

- `internal/` contém o novo QSPI da Super;
- o GPT externo é menor que o disco físico de destino;
- `APP_ext` aponta para o `nvme0n1p1_bak.img` do DevKit.

Antes de arquivar, verifique também três requisitos de consistência — veja a [Nota Técnica A](#nota-técnica-a-super-first-boot-consistency).

Arquivar:

```bash
cd Linux_for_Tegra
sudo tar czf mfi_recomputer-orin-super-j401.tar.gz \
  mfi_recomputer-orin-super-j401
sudo gzip -t mfi_recomputer-orin-super-j401.tar.gz
sha256sum mfi_recomputer-orin-super-j401.tar.gz \
  > mfi_recomputer-orin-super-j401.tar.gz.sha256
```

O arquivo final coerente construído nesta validação tem `12,822,619,478` bytes, passa em `gzip -t` e possui este SHA-256:

```text
fb1d502d9e869d67226eaf71bbe2462fab4e2f1dacf8a6e7fa59057c66a2e845
```

  </TabItem>
</Tabs>

## 6. Gravar na Placa de Destino

### 6.1 Colocar a Placa de Destino em APX

`lsusb` → `0955:7523 NVIDIA Corp. APX`

### 6.2 Comando de Gravação

**Se o diretório extraído já existir localmente, não execute** `tar xpf` **novamente:**

<Tabs>
  <TabItem value="classic" label="reComputer Classic" default>

```bash
cd Linux_for_Tegra/mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh \
  --flash-only --massflash 1 --network usb0 --showlogs
```

  </TabItem>
  <TabItem value="super" label="reComputer Super">

```bash
cd Linux_for_Tegra/mfi_recomputer-orin-super-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh \
  --flash-only --massflash 1 --network usb0 --showlogs
```

  </TabItem>
</Tabs>

Somente quando outro PC tiver **apenas** o `.tar.gz`:

<Tabs>
  <TabItem value="classic" label="reComputer Classic" default>

```bash
sudo tar xpf mfi_recomputer-orin-j401.tar.gz
cd mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh \
  --flash-only --massflash 1 --network usb0 --showlogs
```

  </TabItem>
  <TabItem value="super" label="reComputer Super">

```bash
sudo tar xpf mfi_recomputer-orin-super-j401.tar.gz
cd mfi_recomputer-orin-super-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh \
  --flash-only --massflash 1 --network usb0 --showlogs
```

  </TabItem>
</Tabs>

:::warning
Se `/mnt/external/...: Permission denied` aparecer ao gravar recovery ou APP, isso é um problema de permissão NFS — veja a [Nota Técnica B](#nota-técnica-b-nfs-permission-denied).
:::

### 6.3 Mensagens Normais Durante a Gravação

| Log | Significado |
| --- | --- |
| `p3768-0000-p3767-0000-a0.conf: No such file or directory` | Comum com `--flash-only`; as imagens já estão pré-compiladas, continue |
| `rpcbind already running` | Seguro ignorar |
| `blockdev: cannot open /dev/mmcblk0boot0` | O Orin Nano não possui essa partição; geralmente inofensivo |
| RCM-boot + `SSH ready` | Entrada normal de gravação |
| DTB `...-0005-nv-super.dtb` | Correto para SKU0005 |
| Várias linhas `internal` + `Starting to flash to qspi` | Gravando o QSPI da placa de destino |
| `tar ... zstd ... nvme0n1p1_bak.img` | Restaurando APP (etapa mais longa; pode levar dezenas de minutos) |
| `Successfully flash the qspi` | Gravação do QSPI concluída |
| `Successfully flash the external device` | Gravação do dispositivo externo concluída |
| `Flashing success` / `Flash is successful` | Gravação bem-sucedida |

:::warning
**Não desligue a alimentação nem desconecte até ver uma mensagem de conclusão bem-sucedida.**
:::

## 7. Verificações pós-gravação

Solte o botão ou jumper de Recovery e faça um power cycle após uma gravação bem-sucedida. Se `lsusb` ainda relatar `0955:7523 APX`, o dispositivo permanece em Recovery e não inicializou o Linux.

Após uma inicialização normal, execute:

```bash
cat /proc/device-tree/model
ls /boot/kernel_tegra234*.dtb
ls /boot/*.dtbo | grep -E 'hdmi|imx219' || true

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
Sem sudo, `dmesg` pode relatar `Operation not permitted`. Isso é um problema de permissões; use `sudo`.
:::

### Como interpretar os resultados (SKU 0005)

**1) `/proc/device-tree/model` ainda mostra DevKit — normal para SKU 0005**

Exemplo:

```text
NVIDIA Jetson Orin Nano Engineering Reference Developer Kit Super
```

Motivo: a configuração de placa de destino para **SKU 0005** seleciona o `tegra234-p3768-0000+p3767-0005-nv-super.dtb` da NVIDIA. Ela **não** alterna para `tegra234-j401-*-recomputer.dtb`, então a string de modelo ainda parece o DevKit oficial. **Não** conclua “gravei o bundle de DevKit errado” apenas com base nesta linha.

**2) Nomes de arquivo DTB em `/boot`**

Comumente visíveis:

```text
/boot/kernel_tegra234-p3768-0000+p3767-0000-nv.dtb
/boot/kernel_tegra234-p3768-0000+p3767-0005-nv.dtb
```

Você pode não ver um nome de arquivo `*-0005-nv-super.dtb`; o DTB real de boot é frequentemente escolhido por **UEFI/QSPI**. A listagem de `/boot` é apenas de referência.

**3) `grep hdmi|imx219` vazio — não é falha por si só**

Após a gravação Hybrid, `/boot/*.dtbo` frequentemente ainda contém a lista genérica de overlays do backup do DevKit. Você **pode não** ver `tegra234-dcb-p3767-0000-hdmi.dtbo` ou overlays de câmera da Seeed. As configurações de HDMI/câmera da Seeed em sua maioria entram em vigor através do caminho de **novo overlay de QSPI / UEFI da placa de destino**.

**4) Julgue por “está funcionando?”**

| Verificação | Exemplo saudável |
| --- | --- |
| USB | Hubs, mouse, Bluetooth, Ethernet USB enumerados (`lsusb` mostra vários dispositivos) |
| Ethernet com fio | Classic: `enP8p1s0` etc. estão `UP`; Super: veja [Tech Note C](#Tech-Note-C-Limitação-do-Ethernet-com-fio-Super-lan743x) |
| Wi‑Fi | `wlP1p1s0` está `UP` |
| Display | Desktop funciona; ou `xrandr` tem saída |
| Ambiente do usuário | Usuários, software e dados originais do DevKit permanecem |
| CUDA | `nvcc --version` funciona (neste exemplo **12.6**), indicando que o clone do APP está intacto |

<Tabs>
  <TabItem value="classic" label="reComputer Classic" default>

Classic deve focar em validar a configuração de câmera dupla (`imx219-dual-seeed`).

**No dispositivo: modelo / DTB**

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/dk-to-classic/section-7.4.1-model-dtb.png"/></div>

**No dispositivo: CUDA instalada no DevKit original ainda funciona**

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/dk-to-classic/section-7.4.1-cuda-nvcc.png"/></div>

  </TabItem>
  <TabItem value="super" label="reComputer Super">

Super deve focar em validar a configuração de câmera quádrupla exigida por Super (`imx219-quad-seeed`). A ausência de um nome de arquivo `imx219-quad-seeed.dtbo` em `/boot` não é falha por si só porque o overlay pode ser aplicado via QSPI/UEFI.

Resultados validados:

- O sistema alcançou a tela de login do Ubuntu com `display-manager` ativo;
- HDMI, teclado/mouse USB, Bluetooth e Wi‑Fi funcionaram;
- O APP clonado do DevKit e o CUDA 12.6 foram mantidos;
- O overlay de câmera quádrupla e quatro nós de configuração IMX219/I2C estavam presentes.

<div></div>
</TabItem>
</Tabs>

### Quando editar `extlinux.conf`

Somente se **HDMI / USB / boot estiver anormal**, tente adicionar sob `LABEL primary` em `/boot/extlinux/extlinux.conf`:

```text
FDT /boot/kernel_tegra234-p3768-0000+p3767-0005-nv-super.dtb
```

(Se esse arquivo estiver ausente em `/boot`, tente `...-0005-nv.dtb`, ou copie primeiro de `kernel/dtb/` do BSP.)

```bash
sudo reboot
```

Se ainda estiver anormal, use o fallback da Seção 8.

## 8. Fallback (caminho oficial)

Se a gravação Hybrid deixar partições/UEFI/periféricos anormais:

1. Grave o BSP de placa de destino **oficial** conforme o fluxo da Seeed (não grave o mfi do DevKit).
2. Extraia `/home` do backup (`nvme0n1p1.tar.zst`) ou siga [Migrar dados de /home do Jetson Orin Nano Developer Kit para reComputer](/pt-br/migrate_home_data_from_jetson_orin_nano_developer_kit_to_recomputer/).
3. Restaure `/home` na placa de destino e reinstale o software em nível de sistema conforme necessário (`/usr`, `/etc`, Docker, etc. precisam de tratamento separado).

Prós: firmware de placa mais limpo. Contras: não é um clone completo do disco `/`.

## 9. Referência rápida de caminhos principais

| Tipo | Caminho (sob `Linux_for_Tegra/`) |
| --- | --- |
| DK mfi | `mfi_jetson-orin-nano-devkit-nvme.tar.gz` |
| Classic Bundle mfi | `mfi_recomputer-orin-j401.tar.gz` |
| Super Bundle mfi | `mfi_recomputer-orin-super-j401.tar.gz` |
| Classic conf | `recomputer-orin-j401.conf` |
| Super conf | `recomputer-orin-super-j401.conf` |
| HDMI DCB | `kernel/dtb/tegra234-dcb-p3767-0000-hdmi.dtbo` |
| Classic dual IMX219 | `kernel/dtb/tegra234-p3767-camera-p3768-imx219-dual-seeed.dtbo` |
| Super quad IMX219 | `kernel/dtb/tegra234-p3767-camera-p3768-imx219-quad-seeed.dtbo` |
| J401 DTB | `kernel/dtb/tegra234-j401-p3768-0000+p3767-*-recomputer.dtb` |
| SKU0005 DTB | `kernel/dtb/tegra234-p3768-0000+p3767-0005-nv-super.dtb` |

## 10. Visão geral do fluxo

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
          └─► [APX] target board conf → generate QSPI
                    │           │
                    │           ├─ Classic: recomputer-orin-j401 internal
                    │           └─ Super:   recomputer-orin-super-j401-nvme external
                    │
                    ▼
              assemble mfi_recomputer-orin-<target>
                    │
                    ▼
              [target APX] --flash-only
                    │
                    ▼
              check display/USB/NVMe/user environment
```

## 11. FAQ

**P: Tanto o diretório quanto o `.tar.gz` existem — ainda preciso extrair?**  
R: Não. Se o diretório `mfi_recomputer-orin-*` existir, faça `cd` nele e execute `--flash-only`.

**P: O módulo da placa de destino não é 0005?**  
R: Altere `BOARDSKU`, escolha o DTB correspondente conforme `p3767_super_overlay` na configuração da placa de destino e então regenere o QSPI.

**P: Quero manter apenas `/home`, não clonar o disco inteiro?**  
R: Use o fallback da Seção 8. É mais simples e mais confiável.

**P: Posso renomear e gravar o bundle Classic Hybrid em Super?**  
R: Não. Seus pinmux e overlays de câmera são diferentes. Regenere o QSPI correspondente.

**P: Por que não usar `--use-backup-image` diretamente?**  
R: Ele também pode reutilizar o `QSPI0.img` do DevKit. Hybrid deve reutilizar apenas o APP.

**P: E se as capacidades das unidades de origem e destino forem diferentes? (Super)**  
R: Gere a GPT para a unidade de destino e substitua apenas o payload do APP. O APP expandido deve caber na nova partição APP.

**P: Por que o exemplo de wiki do BSP DIY usa `recomputer-orin-j401`?**  
R: Esse exemplo assume que **origem e destino são ambas placas Seeed**. Quando a origem é um DevKit oficial, o backup deve primeiro usar `jetson-orin-nano-devkit-nvme`, depois seguir este tutorial Hybrid para se adaptar à placa de destino.

## Notas técnicas

### Tech Note A. Consistência do primeiro boot em Super

Verifique três requisitos de consistência antes de arquivar:

1. `root=PARTUUID=...` em `boot.img` deve corresponder ao GUID exclusivo da partição APP na GPT externa;
2. o UUID de `/boot/efi` no `/etc/fstab` do APP do DevKit deve corresponder ao UUID FAT do novo `esp.img`;
3. se o kernel RT clonado do DevKit travar em `lan743x` na LAN7430 do Super, pré-instale:

```text
/etc/modprobe.d/blacklist-lan743x-super-hybrid.conf
```

```conf
blacklist lan743x
install lan743x /bin/false
```

Os dois primeiros desencontros impedem a montagem de root ou levam ao modo de manutenção. Alterar o PARTUUID ativo com `sgdisk` em um initrd de reparo é uma medida de recuperação, não uma etapa de build reprodutível. Regenere GPT e `boot.img` juntos e então faça o patch do APP antes de criar o arquivo final.

### Tech Note B. NFS Permission Denied

Se `/mnt/external/...: Permission denied` aparecer ao gravar recovery ou APP, certifique-se de que o cliente NFS possa atravessar todos os diretórios pai no caminho do mfi.

Por exemplo, se o modo do diretório home do usuário for `750`, use temporariamente `751` durante a gravação e restaure-o imediatamente depois:

```bash
sudo chmod 751 /home/$USER
# Re-enter APX and flash
sudo chmod 750 /home/$USER
```

O modo `751` adiciona apenas permissão de travessia; ele não permite que outros usuários listem o diretório. Não use `777`.

### Tech Note C. Limitação do Ethernet com fio Super lan743x

O kernel RT clonado do DevKit usado neste teste acionou um Oops de kernel ao carregar `lan743x` para a LAN7430 do Super. O BSP Hybrid final coloca `lan743x` na blacklist (veja o item 3 da [Tech Note A](#Tech-Note-A-Consistência-do-primeiro-boot-em-Super)), portanto o Ethernet com fio onboard fica temporariamente indisponível; o Wi‑Fi não é afetado.

Esta é uma limitação de compatibilidade entre driver de kernel/APP de origem, não uma falha de QSPI ou pinmux do Super. Faça port ou upgrade de um driver compatível e execute testes de estresse antes de depender de Ethernet com fio em produção.

## Suporte técnico e discussão de produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
