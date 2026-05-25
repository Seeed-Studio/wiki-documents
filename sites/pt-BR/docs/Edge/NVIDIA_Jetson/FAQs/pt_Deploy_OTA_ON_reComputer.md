---
description: Este guia apresenta a criação de um pacote OTA ponta a ponta para atualizar um reComputer mini J4012 de JetPack 5.1.3 para JetPack 6.2, incluindo preparação do BSP, geração do pacote e implantação no dispositivo.
title: Implantar OTA no reComputer
keywords:
  - jetson
  - OTA
  - JetPack
  - reComputer
  - BSP
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.webp
slug: /deploy_ota_on_recomputer
last_update:
  date: 12/05/2025
  author: Zibo
createdAt: '2025-12-05'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/deploy_ota_on_recomputer/
---

# Implantar OTA no reComputer

## Introdução

As atualizações Over-the-Air (OTA) do NVIDIA Jetson permitem que desenvolvedores atualizem dispositivos de borda de uma versão JetPack mais antiga para uma versão mais recente remotamente por meio de uma conexão de rede, eliminando a necessidade de um PC host ou de regravação física via USB. 
Este wiki demonstrará como executar atualizações OTA (Over-the-Air) no reComputer.

:::note
Plataforma de demonstração: reComputer mini J4012 com JetPack 5.1.3 → JetPack 6.2 via OTA. Outros reComputers baseados em Orin podem seguir a mesma lógica, mas adapte o nome `<target_board>` que corresponde à sua placa carrier.
:::

## Pré-requisitos
- PC Ubuntu x86_64
- [reComputer mini J4012](https://www.seeedstudio.com/reComputer-Mini-J4012-with-Extension-p-6353.html)

## Executar OTA rapidamente

Aqui fornecemos um pacote de atualização pré-compilado para a placa de desenvolvimento da Seeed, 
que atualiza de Jetpack 5.1.3 para Jetpack 6.2. Se você pretende atualizar diretamente de Jetpack 5.1.3 para Jetpack 6.2 via OTA, 
basta fazer o download e prosseguir com a atualização rapidamente.


import OtaProductSelect from '@site/src/components/jetson/OtaProductSelect';

export const productOptions = [
  {
    value: 'j4012mini',
    label: 'reComputer mini',
    img: 'https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg',
    otaDescription: 'Payload OTA pronto para uso JP5.1.3 → JP6.2 para a série reComputer mini',
    otaPayload: {
      mainlink: 'https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBkQzbsk18YRpFT6j1BK8VnAaH18J6nKGimI0xa4DTLsFg?e=PKhf7u',
      filename: 'ota_payload_package.tar.gz',
      sha256: '3da8fd97c450f4f7bd83390ab50f951dffd5ec1d43c39a1e6156b4806f7df7c6',
    },
  },
  {
    value: 'j4012classic',
    label: 'reComputer J30/40/401B',
    img: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/r/e/recomputer_classic_optional_accessories_nvidia_jetson_orin_powered_edge_ai_box.jpeg',
    otaDescription: 'Payload OTA pronto para uso JP5.1.3 → JP6.2 para reComputer classic J30/40/401B',
    otaPayload: {
      mainlink: 'https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDRxYlSWuWvRbELB8tyGQ88AUa3cDYrNoj0kAyyzU3YTFA?e=P60b7N',
      filename: 'ota_payload_package.tar.gz',
      sha256: 'b0dde3e8fb5ac3838d8d569def1a373949ca30f59f52e30197f872c95aa7a777',
    },
  },
  {
    value: 'j4012industrial',
    label: 'reComputer industrial Serials',
    img: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1--recomputer-industrial-bundle.jpg',
    otaDescription: 'Payload OTA pronto para uso JP5.1.3 → JP6.2 para a série reComputer Industrial',
    otaPayload: {
      mainlink: 'https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQC1cwAhknjjRLGyVc_Ze7QOAUAQ7KSi3IkzUSZ3XD45gL4?e=Q68dEF',
      filename: 'ota_payload_package.tar.gz',
      sha256: '31f17fe8606b19730c3d5a29b8cf96db99dff587de93136dbd74f39c71aeb4e9',
    },
  },
  {
    value: 'j4012reserver',
    label: 'reServer industrial Serials',
    img: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114110247-reserver-industrial-j4012-first.jpg',
    otaDescription: 'Payload OTA pronto para uso JP5.1.3 → JP6.2 para a série reServer industrial.',
    otaPayload: {
      mainlink: 'https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBGOUJ8bXdYQbfRVpP9y_QHAdO-UoETL5AlRco6eTWg_Kg?e=loYpgD',
      filename: 'ota_payload_package.tar.gz',
      sha256: '879c2ab65019955ee798479d5303d91df22d496215657ea132dcfd3a11e46d24',
    },
  },
  {
    value: 'j501-carrier A GX-Orin',
    label: 'reServer industrial J501 AGX-Orin with GMSL',
    img: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991854-reserver-industrial-j501-carrier-board-for-jetson-agx-orin-45font_1.jpg',
    otaDescription: 'Payload OTA pronto para uso JP5.1.3 → JP6.2 para reServer industrial J501 com GMSL.',
    otaPayload: {
      mainlink: 'https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBhfhZjS7orSLpp2ZS_CmhcAeGMpeh9xFsOJV7op2b0VIY?e=AgpgCt',
      filename: 'ota_payload_package.tar.gz',
      sha256: '83deb4d1a5f5a999c4cfb08581baf4fb4754cab5f867ae2809e0d03f1d817b60',
    },
  },
  {
    value: 'j501-carrier AGX-Orin',
    label: 'reServer industrial J501 AGX-Orin without GMSL',
    img: 'https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991854-reserver-industrial-j501-carrier-board-for-jetson-agx-orin-45font_1.jpg',
    otaDescription: 'Payload OTA pronto para uso JP5.1.3 → JP6.2 para reServer industrial J501 sem GMSL.',
    otaPayload: {
      mainlink: 'https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQC6wipGORa_SqinT6KB6eEXAZfD80o1uAo2jpZMVo7M5aU?e=eqbjZY',
      filename: 'ota_payload_package.tar.gz',
      sha256: '9d015fdcbabb77a9669fb8f0f6762c9a69260cd47ec4710d79de7cbdc19e9f23',
    },
  },
]

<OtaProductSelect options={productOptions} />



### Procedimento de OTA no dispositivo

:::note
As operações a seguir são executadas no Jetson (via conexão remota)
:::

**Etapa 1.** Instalar softwares dependentes
```bash
sudo apt-get update
sudo apt-get install efibootmgr nvme-cli -y
```

**Etapa 2.** Baixar a ferramenta OTA 
```bash
#Create a workspace directory
mkdir ~/ota_ws && cd ota_ws
#Download the OTA tools from Nvidia
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.3/release/ota_tools_r36.4.3_aarch64.tbz2
# Uncompress
tar xvf ota_tools_r36.4.3_aarch64.tbz2
```
Após descompactar os arquivos acima, você obterá uma pasta chamada "Linux_for_Tegra".

**Etapa 3.** Transferir o arquivo ota para o Jetson (esta etapa deve ser executada no seu PC!)

:::info
Substitua `<Jetson IP>` pelo endereço IP real do seu Jetson. Por exemplo: 192..168.137.xx
Substitua o caminho do arquivo `ota_payload_package.tar.gz` e o caminho `ota_ws` pelo seu caminho real
:::

```bash
#example:Use scp to transfer files
scp /path/to/your downloaded/ota_payload_package.tar.gz seeed@<Jetson IP>:/home/user/ota_ws
```
**Etapa 4.** Fazer backup dos arquivos do sistema original
```bash
cd /path/ota_ws/Linux_for_Tegra/tools/ota_tools/version_upgrade/
#The editor needs to keep a backup of the file directory that needs to be preserved.
vim ota_backup_files_list.txt
```
:::note
Liste os arquivos ou pastas que você deseja manter.
Use caminho absoluto!
<div align="center"><img width ="1000" 
    src="https://files.seeedstudio.com/wiki/reComputer/OTA/backup_list.png"/>
</div>
:::

```bash
./nv_ota_preserve_data.sh
```
**Etapa 5.** Iniciar OTA

```bash
cd Linux_for_Tegra/tools/ota_tools/version_upgrade
#Specify the directory of the OTA file
sudo ./nv_ota_start.sh ~/ota_ws/ota_payload_package.tar.gz
```
<div align="center"><img width ="1000" 
    src="https://files.seeedstudio.com/wiki/reComputer/OTA/ota_sh.png"/>
</div>

<div align="center"><img width ="1000" 
    src="https://files.seeedstudio.com/wiki/reComputer/OTA/ota_sh_finish.png"/>
</div>

Após a execução do script, você pode reiniciar o Jetson para iniciar o processo OTA.
Se o seu dispositivo estiver conectado a um monitor, ao reiniciar você verá que o monitor exibirá o logotipo da Nvidia e, em seguida, entrará no overlay do kernel. A tela permanecerá preta (um fenômeno normal) por um tempo e, em seguida, entrará no processo OTA.
<div align="center"><img width ="1000" 
    src="https://files.seeedstudio.com/wiki/reComputer/OTA/ota_process.jpg"/>
</div>

Após a conclusão de todo o processo, você precisará entrar no sistema para configurar o nome de usuário e a senha.

<div align="center"><img width ="1000" 
    src="https://files.seeedstudio.com/wiki/reComputer/OTA/update_finish.jpg"/>
</div>
**Etapa 6.** Validação pós-atualização

Assim que o dispositivo iniciar no JetPack 6.2:

```bash
nvbootctrl -t
sudo nvme list
cat /etc/nv_tegra_release
```
<div align="center"><img width ="1000" 
    src="https://files.seeedstudio.com/wiki/reComputer/OTA/ota_sucess.png"/>
</div>
Certifique-se de que a versão relatada corresponda a `R36 (release), REVISION: 4.3` e confirme que seus aplicativos iniciam conforme o esperado.
Parabéns! O processo OTA foi bem-sucedido. Os arquivos do sistema também foram salvos anteriormente!
## Outras versões de OTA (opcional)
Acima, fornecemos apenas a versão comum do pacote OTA. Se você precisar atualizar da versão atual via OTA para outra versão, consulte as etapas a seguir para gerar o pacote OTA correspondente.
O que estamos demonstrando agora é a atualização de Jetpack 5.1.3 para a versão alvo, Jetpack 6.2.

### Preparar o BSP de destino (JetPack 6.2)
Todos os comandos abaixo são executados no PC Ubuntu.

**Etapa 1. Baixar os pacotes NVIDIA JetPack 6.2.**

```bash
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.3/release/Jetson_Linux_r36.4.3_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.3/release/Tegra_Linux_Sample-Root-Filesystem_r36.4.3_aarch64.tbz2
```

**Etapa 2. Extrair o BSP em `Linux_for_Tegra`.**

```bash
tar xf Jetson_Linux_r36.4.3_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_r36.4.3_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
```

**Etapa 3. Sincronizar as fontes da NVIDIA para JP6.2.**

```bash
cd Linux_for_Tegra/source/
./source_sync.sh -t jetson_36.4.3
cd ../..
```

**Etapa 4. Sobrepor as customizações da Seeed.**

```bash
mkdir -p github/Linux_for_Tegra
git clone https://github.com/Seeed-Studio/Linux_for_Tegra.git -b r36.4.3 --depth=1 github/Linux_for_Tegra
cp -r github/Linux_for_Tegra/* Linux_for_Tegra/
```

**Etapa 5. Aplicar os binários da NVIDIA e dependências do host.**

```bash
cd Linux_for_Tegra
sudo ./apply_binaries.sh
sudo apt-get update
sudo apt-get install -y build-essential flex bison libssl-dev sshpass \
  abootimg nfs-kernel-server libxml2-utils qemu-user-static
```

**Passo 6. Instale a toolchain do Jetson para compilação do kernel.**

```bash
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v3.0/toolchain/aarch64--glibc--stable-2022.08-1.tar.bz2
mkdir -p l4t-gcc
tar xf aarch64--glibc--stable-2022.08-1.tar.bz2 -C ./l4t-gcc
export ARCH=arm64
export CROSS_COMPILE=$(realpath .)/l4t-gcc/aarch64--glibc--stable-2022.08-1/bin/aarch64-buildroot-linux-gnu-
```

**Passo 7. Compile o kernel, os DTBs e os módulos.**

```bash
cd source
./nvbuild.sh
./do_copy.sh
export INSTALL_MOD_PATH=$(realpath ../rootfs/)
./nvbuild.sh -i
cd ..
```

Neste ponto, o BSP JP6.2 em `~/JP6.2/Linux_for_Tegra` (ou o caminho escolhido) está pronto para ser usado como o BSP ALVO para o script de geração de OTA.

### Prepare o BSP Base (JetPack 5.1.3)

Use um workspace limpo (por exemplo, `~/JP5.1.3/`).

**Passo 1. Baixe os pacotes do JetPack 5.1.3.**

```bash
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v5.0/release/Jetson_Linux_R35.5.0_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v5.0/release/Tegra_Linux_Sample-Root-Filesystem_r35.5.0_aarch64.tbz2
```

**Passo 2. Extraia e copie os overlays do BSP da Seeed.**

```bash
tar xf Jetson_Linux_R35.5.0_aarch64.tbz2 -C JP5.1.3
cd JP5.1.3
git clone -b r35.5.0 https://github.com/Seeed-Studio/Linux_for_Tegra.git
cp -rf Linux_for_Tegra/* ./Linux_for_Tegra/
```

**Passo 3. Popule o sistema de arquivos raiz e aplique os binários.**

```bash
cd Linux_for_Tegra
sudo tar xpf ../Tegra_Linux_Sample-Root-Filesystem_r35.5.0_aarch64.tbz2 -C rootfs
sudo ./apply_binaries.sh
```

**Passo 4. Instale a toolchain Bootlin GCC para compilações de kernel JP5.**

```bash
wget https://developer.nvidia.com/embedded/jetson-linux/bootlin-toolchain-gcc-93 -O bootlin-toolchain-gcc-93.tar.bz2
mkdir -p l4t-gcc
tar xf bootlin-toolchain-gcc-93.tar.bz2 -C ./l4t-gcc
export ARCH=arm64
export CROSS_COMPILE_AARCH64_PATH=$(realpath .)/l4t-gcc
```

**Passo 5. Compile e instale módulos, device trees e drivers personalizados.**

```bash
cd source
export INSTALL_MOD_PATH=$(realpath ../rootfs/)
./nvbuild.sh -i -r ${INSTALL_MOD_PATH}
./do_copy.sh
```

Seu caminho de BSP JP5.1.3 (por exemplo, `/home/seeed/test/5.1.3/Linux_for_Tegra`) atuará como o BSP BASE durante a geração do pacote OTA.

### Gere o Pacote OTA no Host

Navegue até o workspace JP6.2 e execute o script auxiliar de OTA da NVIDIA:

```bash
cd ~/JP6.2/Linux_for_Tegra/tools/ota_tools/
./start_generate_ota_pkg.sh
```

O script solicitará as seguintes informações:

- **Caminho do BASE_BSP**: `/home/seeed/test/5.1.3/Linux_for_Tegra`
- **Caminho do TARGET_BSP**: `/home/seeed/test/6.2/Linux_for_Tegra`
- **Nome do target_board**: `recomputer-orin-j40mini` (use o nome `.conf` que corresponda ao seu dispositivo)
- **bsp_version (Rmm-n)**: `R35-5` para JetPack 5.1.3

Se tudo estiver configurado corretamente, a ferramenta termina com:

<div align="center"><img width ="1000" 
    src="https://files.seeedstudio.com/wiki/reComputer/OTA/ota_pkg_generate.png"/>
</div>

### Execute o OTA no Dispositivo Jetson
Consulte novamente o [procedimento de OTA no dispositivo](#procedimento-de-ota-no-dispositivo) para as etapas detalhadas.


## Recursos

- [Criar Backup e Restauração no reComputer](https://wiki.seeedstudio.com/pt-br/create_backup_and_restore_on_recomputer/)
- [Catálogo da Série Seeed Jetson](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Seeed-Linux_for_Tegra](https://github.com/Seeed-Studio/Linux_for_Tegra/tree/r36.4.3)

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher a Seeed Studio! Se precisar de mais assistência, entre em contato pelos seguintes canais:

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
