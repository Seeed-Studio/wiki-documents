---
description: Como compilar o projeto de código-fonte para o BSP Jetson da Seeed
title: Como compilar o projeto de código-fonte para o BSP Jetson da Seeed
keywords:
  - jetson
  - jetpack
  - L4T
image: https://files.seeedstudio.com/wiki/reComputer/nvidia-jetpack-6-0-stack.webp
slug: /how_to_build_the_source_code_project_for_seeed_jetson_bsp
last_update:
  date: 08/04/2025
  author: Dayu
createdAt: '2025-08-06'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/how_to_build_the_source_code_project_for_seeed_jetson_bsp/
---

**Este wiki demonstra como obter o código-fonte do BSP para os produtos Jetson da Seeed, organizá‑lo em um pacote completo de código-fonte de BSP e compilá‑lo/gravar em dispositivos Jetson.**

## 1. Preparar o ambiente de trabalho

Este guia usa **L4T 36.4.3** como exemplo para demonstrar como construir o projeto de código-fonte, compilá‑lo e gravá‑lo no dispositivo Jetson. O mesmo processo se aplica a outras versões — basta **substituir o número da versão nos comandos de exemplo a seguir pela versão que você deseja compilar**.

Antes de começar, você precisa preparar um **PC host com Ubuntu 20.04/22.04**.

Se você não tem certeza sobre a relação entre versões L4T e versões JetPack, pode consultar este link:
https://developer.nvidia.com/embedded/jetpack-archive.
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/L4T-jetpack.png
"/></div>

Pesquise pela versão específica do **L4T (Linux for Tegra)** que você deseja compilar, por exemplo:
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/google_L4T.jpg"/></div>

<!-- After clicking on the web, download and prepare the sample root file system, NVIDIA's official BSP and the toolchain used for cross-compilation, as shown below.
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/download-BSP-rootfs-toolchain.png"/></div> -->

Extraia o BSP oficial da NVIDIA e você obterá um diretório chamado `Linux_for_Tegra`. Em seguida, extraia o arquivo do sistema de arquivos raiz dentro do diretório oficial `Linux_for_Tegra`:

```bash
tar xf Jetson_Linux_r36.4.3_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_r36.4.3_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
```

Sincronize o código-fonte para compilação. Substitua o argumento após `-t` pela **versão de L4T desejada**:

```bash
cd Linux_for_Tegra/source/
./source_sync.sh -t jetson_36.4.3
```

Saia para o diretório raiz do seu espaço de trabalho. Faça o git clone do código-fonte do branch desejado para a sua máquina local usando o seguinte comando
(substitua `-b <branch name>` pelo branch de destino):

```bash
sudo apt update
sudo apt install git-lfs
cd ../..
mkdir -p github/Linux_for_Tegra
git clone https://github.com/Seeed-Studio/Linux_for_Tegra.git -b r36.4.3 --depth=1 github/Linux_for_Tegra
```

O código-fonte do BSP para Jetson da Seeed está disponível neste **[repositório GitHub](https://github.com/Seeed-Studio/Linux_for_Tegra/tree/main).**
Você pode verificar os diferentes branches para encontrar a versão de L4T desejada, pois cada branch corresponde a uma versão diferente de L4T.
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/github_L4T.jpg"/></div>

Em seguida, sobrescreva o código-fonte original:

```bash
cp -r github/Linux_for_Tegra/* Linux_for_Tegra/
```

Aplique as alterações necessárias ao rootfs:

```bash
cd Linux_for_Tegra
sudo ./apply_binaries.sh
```

Instale as dependências no seu PC:

```bash
sudo apt-get update
sudo apt-get install build-essential flex bison libssl-dev
sudo apt-get install sshpass
sudo apt-get install abootimg
sudo apt-get install nfs-kernel-server
sudo apt-get install libxml2-utils
sudo apt-get install qemu-user-static
```

Prepare o trabalho para compilar o kernel:

```bash
mkdir -p l4t-gcc
tar xf aarch64--glibc--stable-2022.08-1.tar.bz2 -C ./l4t-gcc
export ARCH=arm64
export CROSS_COMPILE=/your_path/l4t-gcc/aarch64--glibc--stable-2022.08-1/bin/aarch64-buildroot-linux-gnu-
```

Compile e construa o kernel:

```bash
cd source
./nvbuild.sh
```

Instale o novo kernel, dtbs e drivers:

```bash
./do_copy.sh
export INSTALL_MOD_PATH=/your_path/Linux_for_Tegra/rootfs/
./nvbuild.sh -i
```

:::tip
Para o JetPack 5, como os caminhos de arquivos são diferentes, você precisa modificar o parâmetro `-p` para:
`-p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml"`
:::

Para o **Jetpack 6**, gravar o dispositivo (tomando o **recomputer-orin-j401** como exemplo):

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh \
--external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml \
-p "-c bootloader/generic/cfg/flash_t234_qspi.xml"  --showlogs \
--network usb0 recomputer-orin-j401 internal
```

Substitua `recomputer-orin-j401` pelo nome do dispositivo que você está usando. Você precisa fornecer um `device name` válido como parâmetro, que pode ser encontrado verificando os nomes de arquivos .conf no diretório raiz de `Linux_for_Tegra`. O prefixo desses nomes de arquivos corresponde aos parâmetros válidos de `device name`.
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/device_name.png
"/></div>

Portanto, os parâmetros de `device name` disponíveis para **L4T 36.4.3** são os seguintes. As séries **j40** e **j30** usam o mesmo arquivo de configuração:

- recomputer-industrial-orin-j201 (recomputer-industrial-orin-j40/j30 também usa este `device name` como parâmetro.)
- recomputer-orin-j401
- reserver-agx-orin-j501x
- reserver-agx-orin-j501x-gmsl
- reserver-industrial-orin-j401
- recomputer-orin-j40mini
- recomputer-orin-robotics-j401
- recomputer-orin-super-j401

## Recursos

- [Código-fonte do L4T da Seeed](https://github.com/Seeed-Studio/Linux_for_Tegra)

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
