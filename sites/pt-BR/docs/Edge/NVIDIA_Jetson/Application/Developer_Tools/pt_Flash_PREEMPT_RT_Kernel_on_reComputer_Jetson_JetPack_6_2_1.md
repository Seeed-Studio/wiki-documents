---
description: Este wiki explica como compilar e gravar um kernel Linux em tempo real PREEMPT_RT para dispositivos Seeed reComputer Jetson executando JetPack 6.2.1.
title: Gravar um kernel Linux em tempo real PREEMPT_RT em um Seeed reComputer Jetson com JetPack 6.2.1
keywords:
  - Jetson
  - reComputer
  - JetPack 6.2.1
  - PREEMPT_RT
  - Real-Time Kernel
  - Linux
image: https://files.seeedstudio.com/wiki/RT_for_jetson/5.png
slug: /flash_preempt_rt_kernel_on_recomputer_jetson_jetpack_6_2_1
sku: E2025032601,100088050,114993489,114993488,100026552,102111001,100020039,100094378
last_update:
  date: 07/02/2026
  author: Dongxu Jin
createdAt: '2026-07-02'
updatedAt: '2026-07-02'
url: https://wiki.seeedstudio.com/pt-br/flash_preempt_rt_kernel_on_recomputer_jetson_jetpack_6_2_1/
---

# Gravar um kernel Linux em tempo real PREEMPT_RT em um Seeed reComputer Jetson com JetPack 6.2.1

Um kernel em tempo real, também conhecido como kernel PREEMPT_RT, é uma variante do kernel Linux com capacidades aprimoradas de escalonamento em tempo real. Seu principal objetivo é reduzir a latência de escalonamento e melhorar o determinismo da execução das tarefas, em vez de aumentar o desempenho bruto de computação.

Comparado a um kernel Linux padrão, um kernel em tempo real permite que tarefas de alta prioridade preemptem os recursos de CPU mais rapidamente e reduz o jitter de temporização causado por interrupções e escalonamento de threads. Isso ajuda tarefas de controle a serem executadas de forma estável em ciclos fixos. Em cenários de robótica, automação industrial, controle de movimento, direção autônoma e computação de borda, um kernel em tempo real pode melhorar significativamente a estabilidade e a confiabilidade de cargas de trabalho em tempo real, como controle de motores, aquisição de dados de sensores e comunicação em barramentos industriais, incluindo CAN e EtherCAT.

Este guia é baseado no BSP oficial NVIDIA Jetson Linux R36.4.4. Ele mescla o BSP Seeed R36.4.4, faz a compilação cruzada do kernel PREEMPT_RT e grava o sistema no SSD NVMe de um dispositivo Seeed Jetson.

## Referências

- [NVIDIA Jetson Linux R36.4.4 Quick Start](https://docs.nvidia.com/jetson/archives/r36.4.4/DeveloperGuide/IN/QuickStart.html#to-determine-whether-the-developer-kit-is-in-force-recovery-mode)
- [NVIDIA Jetson Linux R36.4.4 Kernel Customization](https://docs.nvidia.com/jetson/archives/r36.4.4/DeveloperGuide/SD/Kernel/KernelCustomization.html)
- [Artigo de referência no CSDN](https://blog.csdn.net/Cruelbuildingdog/article/details/145872768)

## Requisitos de hardware

- Um PC host Ubuntu x86
- Um dispositivo Seeed reComputer ou reServer a ser gravado

## Criar um workspace e baixar os arquivos do sistema

Crie um workspace no PC host:

```bash
mkdir ~/RT_ws
cd ~/RT_ws
```

Acesse [NVIDIA Jetson Linux R36.4.4](https://developer.nvidia.com/embedded/jetson-linux-r3644), baixe os quatro arquivos destacados na imagem abaixo e coloque-os no workspace `~/RT_ws`.

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/RT_for_jetson/1.png"/></div>

Baixe o pacote ZIP do código-fonte em [Seeed-Studio/Linux_for_Tegra](https://github.com/Seeed-Studio/Linux_for_Tegra), ou clone o repositório:

```bash
git clone https://github.com/Seeed-Studio/Linux_for_Tegra.git
```

Como esse nome de diretório pode entrar em conflito com o nome de diretório oficial da NVIDIA, é recomendável baixar o pacote ZIP e extraí-lo de acordo com as etapas deste guia.

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/RT_for_jetson/2.png"/></div>

Verifique se os seguintes arquivos existem em `~/RT_ws`:

```bash
ls -lh \
  Jetson_Linux_R36.4.4_aarch64.tbz2 \
  Tegra_Linux_Sample-Root-Filesystem_R36.4.4_aarch64.tbz2 \
  public_sources.tbz2 \
  aarch64--glibc--stable-2022.08-1.tar.bz2 \
  Linux_for_Tegra-r36.4.4.zip
```

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/RT_for_jetson/3.png"/></div>

## Instalar dependências no host

```bash
cd ~/RT_ws

sudo apt-get update

sudo apt-get install -y \
  qemu-user-static \
  python3-pip \
  device-tree-compiler \
  flex \
  bison \
  libncurses-dev \
  libssl-dev \
  build-essential \
  sshpass \
  abootimg \
  nfs-kernel-server \
  libxml2-utils
```

## Extrair o BSP oficial, Rootfs, fontes, toolchain e overlay da Seeed

```bash
cd ~/RT_ws

mkdir -p l4t-gcc

tar xf aarch64--glibc--stable-2022.08-1.tar.bz2 -C l4t-gcc

tar xf Jetson_Linux_R36.4.4_aarch64.tbz2

tar xf public_sources.tbz2 -C .

unzip -q Linux_for_Tegra-r36.4.4.zip -d seeed_overlay

sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R36.4.4_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
```

O rootfs deve ser extraído com `sudo tar xpf`. Não use o `tar` comum, caso contrário a propriedade e as permissões dos arquivos ficarão incorretas. Se você já o extraiu, pode continuar usando o diretório existente. Limpe o diretório antigo somente quando quiser recomeçar completamente.

## Extrair as fontes da NVIDIA

```bash
cd ~/RT_ws/Linux_for_Tegra/source

tar xf kernel_src.tbz2

tar xf kernel_oot_modules_src.tbz2

tar xf nvidia_kernel_display_driver_source.tbz2
```

## Mesclar o overlay BSP da Seeed

```bash
cd ~/RT_ws

cp -a seeed_overlay/Linux_for_Tegra-r36.4.4/. Linux_for_Tegra/
```

Esta etapa deve ser concluída antes da compilação. O overlay da Seeed modifica o kernel, módulos OOT, arquivos DTS e Makefile em `hardware/nvidia/t23x/nv-public`, e `bootloader/generic/BCT`. Se esta etapa for ignorada, somente a configuração oficial do kit de desenvolvimento NVIDIA estará disponível durante a gravação, e as informações da placa de suporte da Seeed não serão incluídas.

## Aplicar binários da NVIDIA ao rootfs e instalar pré-requisitos de gravação

```bash
cd ~/RT_ws/Linux_for_Tegra

sudo ./apply_binaries.sh

sudo ./tools/l4t_flash_prerequisites.sh
```

## Compilar o kernel PREEMPT_RT, módulos OOT e DTB

```bash
cd ~/RT_ws/Linux_for_Tegra/source

export ARCH=arm64

export CROSS_COMPILE=~/RT_ws/l4t-gcc/aarch64--glibc--stable-2022.08-1/bin/aarch64-buildroot-linux-gnu-

./nvbuild.sh -r
```

A opção `-r` habilita a configuração oficial NVIDIA PREEMPT_RT. O diretório de saída da compilação é `~/RT_ws/Linux_for_Tegra/source/kernel_out`. Após uma compilação bem-sucedida, o sufixo da versão do kernel deve incluir `-rt-tegra`.

## Implantar Image, DTB e DTBO com o `do_copy.sh` da Seeed

```bash
cd ~/RT_ws/Linux_for_Tegra/source

./do_copy.sh

# Additional checks:
ls -lh ../kernel/Image

ls ../kernel/dtb/tegra234-j401-p3768-0000+p3767-0000-recomputer.dtb

ls ../kernel/dtb/tegra234-j201-p3768-0000+p3767-0000-recomputer-indu.dtb
```

`do_copy.sh` é o ponto de entrada de implantação no BSP da Seeed. Ele copia os DTBs de reComputer e reServer compilados, os DTBOs de câmera e GMSL, e o novo `kernel/Image`.

Se o `do_copy.sh` informar que um DTB da Seeed não pode ser encontrado, isso geralmente significa que o overlay da Seeed não foi mesclado completamente ou que a compilação não usou o `source/Makefile` com overlay da Seeed.

## Instalar módulos do kernel no rootfs

```bash
cd ~/RT_ws/Linux_for_Tegra/source

export ARCH=arm64

export CROSS_COMPILE=~/RT_ws/l4t-gcc/aarch64--glibc--stable-2022.08-1/bin/aarch64-buildroot-linux-gnu-

export INSTALL_MOD_PATH=~/RT_ws/Linux_for_Tegra/rootfs/

sudo -E ./nvbuild.sh -i
```

## Copiar DTBOs comuns da Seeed para `rootfs/boot` e atualizar o initrd

```bash
cd ~/RT_ws/Linux_for_Tegra

sudo cp -a kernel/dtb/tegra234-p3767-camera-p3768-imx219-dual-seeed.dtbo rootfs/boot/ 2>/dev/null || true

sudo cp -a kernel/dtb/tegra234-p3767-camera-p3768-imx219-quad-seeed.dtbo rootfs/boot/ 2>/dev/null || true

sudo cp -a kernel/dtb/tegra234-p3767-camera-p3768-imx477-dual-seeed.dtbo rootfs/boot/ 2>/dev/null || true

sudo cp -a kernel/dtb/tegra234-p3767-camera-p3768-imx219-imx477-seeed.dtbo rootfs/boot/ 2>/dev/null || true

sudo cp -a kernel/dtb/tegra234-p3767-camera-p3768-imx477-imx219-seeed.dtbo rootfs/boot/ 2>/dev/null || true

sudo cp -a kernel/dtb/tegra234-seeed-gmsl*.dtbo rootfs/boot/ 2>/dev/null || true

sudo cp -a kernel/dtb/tegra234-seeed-orbbec-335lg-overlay.dtbo rootfs/boot/ 2>/dev/null || true

sudo ./tools/l4t_update_initrd.sh
```

Copiar arquivos DTBO para `rootfs/boot` permite que o sistema continue usando os overlays de câmera e GMSL da Seeed após a inicialização. `l4t_update_initrd.sh` grava as novas dependências de módulos no initrd. Não pule esta etapa para boot via NVMe.

## Verificar a saída da compilação

```bash
cd ~/RT_ws/Linux_for_Tegra

ls -lh kernel/Image

ls kernel/dtb/tegra234-j*.dtb

find rootfs/lib/modules -maxdepth 1 -type d -name '*-rt-tegra' -print
```

Se você estiver gravando um reComputer J401, pelo menos os seguintes arquivos devem existir:

```text
kernel/dtb/tegra234-j401-p3768-0000+p3767-0000-recomputer.dtb
kernel/dtb/tegra234-j401-p3768-0000+p3767-0001-recomputer.dtb
kernel/dtb/tegra234-j401-p3768-0000+p3767-0003-recomputer.dtb
kernel/dtb/tegra234-j401-p3768-0000+p3767-0004-recomputer.dtb
```

## Entrar em modo Force Recovery e verificar a conexão USB

Coloque a chave `REC` do dispositivo em `ON` e conecte o PC host x86 à porta `Debug/Device` ao lado dela com um cabo USB.

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/RT_for_jetson/4.jpg"/></div>

No PC host, execute:

```bash
cd ~/RT_ws/Linux_for_Tegra

lsusb
```

Você deverá ver uma saída semelhante a:

```text
Bus <bbb> Device <ddd>: ID 0955:<nnnn> NVIDIA Corp.
```

Se `0955` não for exibido, verifique o jumper REC/GND ou o fluxo do botão de modo de recuperação, confirme se o cabo Type-C suporta transmissão de dados e certifique-se de que o dispositivo USB NVIDIA foi passado para o Ubuntu se você estiver usando uma máquina virtual.

## Selecionar o nome de configuração da placa Seeed

```bash
cd ~/RT_ws/Linux_for_Tegra

export SEEED_BOARD_CONF=recomputer-orin-j401

test -f "${SEEED_BOARD_CONF}.conf"
```

Nomes de configuração disponíveis:

```text
recomputer-orin-j401
recomputer-industrial-orin-j201
reserver-industrial-orin-j401
recomputer-orin-j40mini
recomputer-orin-super-j401
recomputer-orin-robotics-j401
recomputer-orin-robotics-j401-gmsl
reserver-agx-orin-j501x
reserver-agx-orin-j501x-gmsl
```

A tabela a seguir mapeia modelos de produto para nomes de configuração:

| Modelo de produto | Nome de configuração |
| --- | --- |
| reComputer classic J3010/J3011/J4011/J4012 | `recomputer-orin-j401` |
| reComputer Industrial J3010/J3011/J4011/J4012 | `recomputer-industrial-orin-j201` |
| reServer Industrial J3010/J3011/J4011/J4012 | `reserver-industrial-orin-j401` |
| reComputer Mini J40 Series | `recomputer-orin-j40mini` |
| reComputer Super J401 Series | `recomputer-orin-super-j401` |
| reComputer Robotics J401 Series | `recomputer-orin-robotics-j401` or `recomputer-orin-robotics-j401-gmsl` |
| reServer AGX Orin J501x | `reserver-agx-orin-j501x` or `reserver-agx-orin-j501x-gmsl` |

## Preencher variáveis de EEPROM do módulo e informações da placa

Ao gravar diretamente online e quando a leitura da EEPROM via USB funciona normalmente, as ferramentas da NVIDIA geralmente conseguem ler essas informações automaticamente.

Se você encontrar um erro sobre informações ausentes do módulo ou da placa, preencha as variáveis abaixo de acordo com o modelo real do módulo antes da gravação.

Valores comuns do Orin NX / Orin Nano:

| Módulo | BOARDID | BOARDSKU | FAB | BOARDREV | CHIP_SKU |
| --- | --- | --- | --- | --- | --- |
| Orin Nano 4GB | 3767 | 0004 | 300 | N.2 | 00:00:00:D6 |
| Orin Nano 8GB | 3767 | 0003 | 300 | N.2 | 00:00:00:D6 |
| Orin NX 16GB | 3767 | 0000 | 300 | G.3 | 00:00:00:D3 |
| Orin NX 8GB | 3767 | 0001 | 300 | M.3 | 00:00:00:D4 |

Valores comuns do AGX Orin J501x:

| Módulo | BOARDID | BOARDSKU | FAB | BOARDREV | CHIP_SKU |
| --- | --- | --- | --- | --- | --- |
| AGX Orin 32GB | 3701 | 0004 | 500 | J.0 | 00:00:00:D2 |
| AGX Orin 64GB | 3701 | 0005 | 500 | M.0 | 00:00:00:D0 |

Exemplo para `reComputer J4012 / Orin NX 16GB`:

```bash
export BOARDID=3767
export BOARDSKU=0000
export FAB=300
export BOARDREV=G.3
export CHIP_SKU=00:00:00:D3
```

Exemplo para `reComputer J3011 / Orin Nano 8GB`:

```bash
export BOARDID=3767
export BOARDSKU=0003
export FAB=300
export BOARDREV=N.2
export CHIP_SKU=00:00:00:D6
```

Verifique as variáveis:

```bash
echo "CONF=${SEEED_BOARD_CONF} BOARDID=${BOARDID} BOARDSKU=${BOARDSKU} FAB=${FAB} BOARDREV=${BOARDREV} CHIP_SKU=${CHIP_SKU}"
```

O arquivo de configuração da Seeed seleciona `DTB_FILE` de acordo com o `board_sku` que mapeia para `BOARDSKU`. Se `BOARDSKU` estiver incorreto, a gravação pode ser concluída com sucesso, mas o dispositivo pode inicializar com o DTB errado. Nesse caso, periféricos, Ethernet, M.2, câmeras ou GPIO podem não funcionar corretamente.

## Gravar em NVMe

```bash
cd ~/RT_ws/Linux_for_Tegra

sudo -E BOARDID="${BOARDID}" BOARDSKU="${BOARDSKU}" FAB="${FAB}" BOARDREV="${BOARDREV}" CHIP_SKU="${CHIP_SKU}" \
  ./tools/kernel_flash/l4t_initrd_flash.sh \
  --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_t234_nvme.xml \
  -p "-c bootloader/generic/cfg/flash_t234_qspi.xml --no-systemimg" \
  --showlogs \
  --network usb0 \
  "${SEEED_BOARD_CONF}" \
  external
```

Este comando grava o SSD NVMe e gerencia a configuração de boot QSPI para Orin NX e Orin Nano. O argumento final `external` significa que o rootfs do sistema inicializa a partir do NVMe externo. Se o dispositivo tiver dois SSDs NVMe, ainda é recomendado usar `external` para que o rootfs use `PARTUUID`.

## Após a Gravação

Depois que a gravação for concluída com sucesso, desligue o dispositivo, remova o jumper REC/GND ou solte o botão de modo de recuperação e ligue novamente o dispositivo Jetson.

## Verificar o Kernel em Tempo Real e o DTB

Verifique a versão do kernel:

```bash
uname -a
```

A saída deve incluir o sufixo `-rt`.

Verifique a configuração do kernel:

```bash
zcat /proc/config.gz | grep PREEMPT
```

A saída deve incluir:

```text
CONFIG_PREEMPT_RT=y
```

Use `cyclictest` para testar o jitter de escalonamento:

```bash
sudo apt install -y rt-tests
sudo cyclictest -Sp90-i1000-l100000
```

Após aguardar por um período de tempo, verifique se o valor `Avg` é menor que 20 microssegundos. Exemplo de saída:

```text
T: 0 (  1290) P:99 I:1000 C:100000 Min: 5  Act:10 Avg: 7  Max: 18
T: 1 (  1291) P:99 I:1000 C:100000 Min: 4  Act: 9 Avg: 7  Max: 20
```

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/RT_for_jetson/5.png"/></div>

Se as verificações acima forem aprovadas, o kernel em tempo real PREEMPT_RT foi instalado com sucesso.

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
