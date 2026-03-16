---
description: Criar um BSP personalizado a partir de um ambiente de desenvolvimento Jetson existente
title: Criando um pacote BSP personalizado a partir do ambiente de desenvolvimento Jetson
keywords:
  - reComputer
  - BSP
  - backup
  - Jetson
  - JetPack
  - imagem personalizada
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /make_diy_bsp_for_jetson
last_update:
  date: 01/04/2026
  author: Dayu
createdAt: '2026-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/make_diy_bsp_for_jetson/
---

Este guia wiki demonstra como clonar um ambiente de desenvolvimento completo a partir de um dispositivo Jetson existente e criar um BSP (Board Support Package) gravável que pode ser usado para replicar o mesmo ambiente em outros dispositivos Jetson. O BSP criado usando este método permite a clonagem completa do ambiente quando gravado em outros dispositivos Jetson.

Este guia usa o JetPack 6.2 como exemplo.

## Pré-requisitos

- Dispositivo Jetson de origem (com ambiente de desenvolvimento configurado)
- Computador host Ubuntu 22.04
- Cabo USB Tipo-C para transmissão de dados

:::danger
A série reComputer Classic possui refrigeração insuficiente para suportar o modo super MAXN. Se você gravou o JetPack 6.2 em um dispositivo da série reComputer Classic, não ative o modo MAXN.
:::

## 1. Preparar o diretório de trabalho no PC

Baixe o pacote de diretório de trabalho necessário na tabela abaixo:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Versão do JetPack</th>
      <th>Link para download ⬇️</th>
    </tr>
  </thead>
  <tbody>
      <tr>
      <td>6.0</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDNJYXWuLpRTL-8U39aMd4UAcrfcWTjtkSjCsJ3ZisTFck?e=s7PNxX">Download</a></td>
    </tr>
    <tr>
      <td>6.2</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQA9G3wk_0LMQ65sJpp7_HQYAf1ShPRNi0WRSFGWNU3_XN8?e=uQFpeH">Download</a></td>
    </tr>
    <tr>
      <td>6.2.1</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBqETUyZgfSSrL0w7OEp3q-AbTyZVWbh9l5utvtQPsfpZ0?e=T3TiLg">Download</a></td>
    </tr>
  </tbody>
</table>
</div>

Instale as dependências necessárias no seu PC:

```bash
sudo apt-get update -y
sudo apt-get install -y \
  build-essential flex bison libssl-dev \
  sshpass abootimg nfs-kernel-server \
  libxml2-utils qemu-user-static
```

Extraia o pacote baixado e gere o conteúdo necessário usando os seguintes comandos no terminal do seu PC:

```bash
sudo tar xpf xxx.tar.gz
# For example: sudo tar xpf L4T36-4-3_plus.tar

cd Linux_for_Tegra/
sudo ./apply_binaries.sh
cd ..
```

Defina as variáveis de ambiente no diretório extraído (onde o pacote tar.gz está localizado):

```bash
export ARCH=arm64 
export CROSS_COMPILE="$PWD/aarch64--glibc--stable-2022.08-1/bin/aarch64-buildroot-linux-gnu-"
export PATH="$PWD/aarch64--glibc--stable-2022.08-1/bin:$PATH"
export INSTALL_MOD_PATH="$PWD/Linux_for_Tegra/rootfs/"
```

Navegue até o diretório de origem e compile o código-fonte (este processo levará algum tempo):

```bash
cd Linux_for_Tegra/source
./nvbuild.sh
```

Após a conclusão da compilação, copie e instale os componentes compilados:

```bash
./do_copy.sh
./nvbuild.sh -i
```

O diretório de trabalho agora está preparado. As etapas subsequentes serão executadas no diretório `Linux_for_Tegra/` para clonar o ambiente de desenvolvimento completo do dispositivo Jetson e criar o BSP.

## 2. Gerar BSP personalizado

Conecte o seu dispositivo Jetson de origem ao PC usando um cabo de dados USB Tipo-C pela porta de gravação e certifique-se de que o seu Jetson de origem esteja em modo Recovery.

Para instruções sobre como entrar no modo Recovery, consulte:
[https://wiki.seeedstudio.com/pt-br/flash/jetpack_to_selected_product/](https://wiki.seeedstudio.com/flash/jetpack_to_selected_product/)

Selecione o seu dispositivo e expanda a seção `3. Enter Recovery mode`. Você também pode encontrar informações sobre a porta de gravação do seu dispositivo no mesmo link.

:::info
Certifique-se de que o seu PC tenha espaço em disco suficiente. O tamanho do BSP normalmente requer aproximadamente o dobro do espaço de armazenamento usado pelo seu ambiente de desenvolvimento Jetson.
:::

Navegue de volta para o diretório `Linux_for_Tegra/` no seu PC e execute o seguinte comando para copiar o ambiente de desenvolvimento completo do dispositivo Jetson:

```bash
sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -b -c <board-name>

# For example:
sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -b -c recomputer-orin-j401
```

Substitua `<board-name>` pelo nome do seu dispositivo. Você precisa fornecer um `nome de dispositivo` válido como parâmetro, que pode ser encontrado verificando os nomes de arquivos .conf no diretório raiz de `Linux_for_Tegra`. O prefixo desses nomes de arquivos corresponde aos parâmetros válidos de `nome de dispositivo`.

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/device_name.png"/></div>

Os parâmetros de nome de dispositivo disponíveis para **L4T 36.4.3** são os seguintes. Observe que as séries **j40** e **j30** usam o mesmo arquivo de configuração:

- recomputer-industrial-orin-j201 (recomputer-industrial-orin-j40/j30 também usa este `nome de dispositivo` como parâmetro)
- recomputer-orin-j401
- reserver-agx-orin-j501x
- reserver-agx-orin-j501x-gmsl
- reserver-industrial-orin-j401
- recomputer-orin-j40mini
- recomputer-orin-robotics-j401
- recomputer-orin-super-j401

Empacote o conteúdo clonado em um BSP gravável (o dispositivo de backup deve permanecer em modo Recovery durante este processo):

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --use-backup-image --no-flash --network usb0 --massflash 5 <board-name> internal

# For example:
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --use-backup-image --no-flash --network usb0 --massflash 5 recomputer-orin-j401 internal
```

Substitua `<board-name>` pelo nome do seu dispositivo, da mesma forma que na etapa anterior.

Este processo leva bastante tempo. Após a conclusão, arquivos com o prefixo `mfi_` e um pacote compactado `tar.gz` serão gerados no diretório `Linux_for_Tegra/`.

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/generate-bsp.png"/></div>

O arquivo `mfi_xxxxx.tar.gz` é o BSP gravável. Quando extraído, ele cria o diretório `mfi_xxxxx`.

**(Opcional)** Se você precisar gerar um BSP em formato de flash QSPI adequado para produção em fábrica, modifique os parâmetros de criação do BSP como a seguir (o dispositivo de backup deve permanecer em modo Recovery durante este processo):

```bash
sudo BOARDID=$BOARDID BOARDSKU=$BOARDSKU FAB=$FAB BOARDREV=$BOARDREV CHIP_SKU=$CHIP_SKU ./tools/kernel_flash/l4t_initrd_flash.sh \
--external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml \
-p "-c bootloader/generic/cfg/flash_t234_qspi.xml --no-systemimg" --no-flash --massflash 5 --showlogs \
--network usb0 <board-name> internal

# For example:
sudo BOARDID=$BOARDID BOARDSKU=$BOARDSKU FAB=$FAB BOARDREV=$BOARDREV CHIP_SKU=$CHIP_SKU ./tools/kernel_flash/l4t_initrd_flash.sh \
--external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml \
-p "-c bootloader/generic/cfg/flash_t234_qspi.xml --no-systemimg" --no-flash --massflash 5 --showlogs \
--network usb0 recomputer-orin-super-j401 internal
```

## 3. Gravar e verificar

Após obter o pacote BSP tar.gz nas etapas anteriores, você pode extraí-lo e gravá-lo em outros dispositivos Jetson de destino com um único comando, alcançando a clonagem completa do ambiente de desenvolvimento. **Este BSP é independente de ambiente e pode ser copiado para outros PCs para uso.**

Extraia o pacote usando estritamente o seguinte formato de comando:

```bash
sudo tar xpf mfi_xxxx.tar.gz
```

Navegue até o diretório extraído e execute o processo de gravação:

```bash
cd mfi_xxxx
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

A gravação também requer que o Jetson de destino esteja em modo Recovery. Para etapas detalhadas de gravação, consulte o mesmo link (**não é necessário baixar um novo BSP**):
[https://wiki.seeedstudio.com/pt-br/flash/jetpack_to_selected_product/](https://wiki.seeedstudio.com/flash/jetpack_to_selected_product/)

## Suporte técnico e discussão de produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>