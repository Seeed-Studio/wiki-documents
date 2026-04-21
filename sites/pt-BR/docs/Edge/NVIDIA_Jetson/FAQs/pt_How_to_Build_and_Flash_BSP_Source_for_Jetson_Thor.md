---
description: Construa e grave o pacote de fonte BSP para o NVIDIA Jetson AGX Thor Developer Kit.
title: Como Construir e Gravar a Fonte BSP para o Jetson Thor
keywords:
  - Jetson Thor
  - BSP
  - construção de fonte
  - gravação
  - JetPack 7.1
image: https://files.seeedstudio.com/wiki/other/thor-post.png
slug: /how_to_build_and_flash_bsp_source_for_jetson_thor
sku: 100060965
last_update:
  date: 04/14/2026
  author: Dayu
createdAt: '2026-04-14'
updatedAt: '2026-04-14'
url: https://wiki.seeedstudio.com/pt-br/how_to_build_and_flash_bsp_source_for_jetson_thor/
---

# Como Construir e Gravar a Fonte BSP para o Jetson Thor

<div align="center">
  <img width ="700" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image-kit-3.png"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-Developer-Kit-p-9965.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
  </a>
</div>

Este wiki explica como usar o pacote de fonte BSP para construir e gravar o **NVIDIA Jetson AGX Thor Developer Kit** a partir de um host Ubuntu.

O fluxo de trabalho neste artigo usa o pacote BSP **JetPack 7.1** fornecido abaixo e cobre:

- Baixar e extrair o pacote BSP
- Entrar no modo de recuperação USB no Thor
- Executar `thor_build_flash.sh`
- Limpar o espaço de trabalho com `thor_cleanup.sh`
- Instalação opcional de pacotes pós-gravação

## Pré-requisitos

- NVIDIA Jetson AGX Thor Developer Kit
- PC host Ubuntu
- Cabo de dados USB Type-C
- Fonte de alimentação estável para o Thor
- Pacote BSP para o Thor

:::info
Use a **porta de gravação USB Type-C mais próxima do conector HDMI** ao conectar o Thor ao PC host.
:::

## 1. Baixar e Extrair o Pacote BSP

Baixe o pacote BSP primeiro:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Versão do JetPack</th>
      <th>Link de Download</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>7.1</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAnZOQBV-uhTbnY0Zp3-HEqAQzFPrkH5LKgCsJ4KHRYCMg?e=rjGn93">Download</a></td>
    </tr>
  </tbody>
</table>
</div>

Após baixar o pacote, extraia-o e entre no diretório de trabalho:

```bash
cd /other_data
sudo tar xpf <downloaded_package>.tar.gz
cd thor-dev/linux_for_tegra
```

:::tip
Use `sudo tar xpf` ao extrair o pacote para que a propriedade e as permissões dos arquivos sejam preservadas corretamente.
:::

## 2. Entrar no Modo de Recuperação USB no Thor

Primeiro, conecte o PC host à **porta de gravação USB Type-C próxima ao conector HDMI**:

<div align="center">
  <img width ="700" src="https://files.seeedstudio.com/wiki/Thor-dev/flash-Thor-dev.png"/>
</div>

Os botões laterais são mostrados abaixo:

<div align="center">
  <img width ="700" src="https://files.seeedstudio.com/wiki/Thor-dev/JAT-Button-Side_white.png"/>
</div>

Definições dos botões na imagem:

- `11`: Botão de energia
- `12`: Botão de recuperação forçada
- `13`: Botão de reset
- `14`: LED branco

Para entrar no modo de recuperação:

1. Desligue o Thor.
2. Conecte o cabo USB Type-C entre o PC host e a porta de gravação do Thor.
3. Pressione e segure o **botão de recuperação forçada** (`12`).
4. Enquanto segura o **botão de recuperação forçada** (`12`), pressione o **botão de energia** (`11`) para ligar a placa.
5. Solte o botão após a placa entrar no modo de recuperação.

No PC host, verifique o modo de recuperação com:

```bash
lsusb
```

O Thor no modo de recuperação USB normalmente é enumerado como:

```text
0955:7045
```

Imagem de referência:

<div align="center">
  <img width ="700" src="https://files.seeedstudio.com/wiki/Thor-dev/recovery-mode.png"/>
</div>

## 3. Construir e Gravar

Execute o comando de ajuda primeiro:

```bash
cd /other_data/thor-dev/linux_for_tegra
./thor_build_flash.sh help
```

As configurações padrão da placa já estão definidas para **Thor J601**:

- `CONFIG=recomputer-thor-carrier-j601`
- `BOARDID=3834`
- `BOARDSKU=0008`
- `FAB=400`
- `BOARDREV=G.5`
- `CHIP_SKU=00:00:00:A0`

### Fluxo Típico

```bash
cd /other_data/thor-dev/linux_for_tegra

./thor_build_flash.sh prepare
./thor_build_flash.sh build
sudo -E ./thor_build_flash.sh flash
```

Você também pode executar o processo completo de uma vez:

```bash
./thor_build_flash.sh all
```

:::tip
Para a primeira gravação, o fluxo dividido `prepare -> build -> flash` é recomendado porque facilita a identificação de falhas.
:::

### Significado dos Estágios

- `prepare`
  - Baixar o tarball do rootfs
  - Extrair `rootfs/`
  - Executar `apply_binaries.sh`
  - Baixar e extrair a toolchain cruzada

- `build`
  - Compilar o kernel e os módulos fora da árvore
  - Copiar a imagem do kernel para `rootfs/boot/`
  - Executar `rootfs_magic.sh`
  - Atualizar o initrd
  - Criar o usuário padrão

- `flash`
  - Chamar `l4t_initrd_flash.sh`
  - Requer que a placa alvo esteja no modo de recuperação USB

### Notas Importantes

- Execute `build` como um usuário normal, não como `root`.
- Execute `flash` com `sudo -E`.
- O modo de recuperação USB do Thor normalmente é visível no host como `0955:7045`.
- O script corrige automaticamente um link simbólico `nvethernetrm` ausente antes da construção.

### Substituições Comuns

Use variáveis de ambiente quando precisar substituir os padrões:

```bash
CONFIG=recomputer-thor-carrier-j601 \
DOWNLOAD_BASE_URL=http://192.168.1.77/jetson \
DEFAULT_USER=seeed \
DEFAULT_PASSWORD=seeed \
DEFAULT_HOSTNAME=jetson-test \
./thor_build_flash.sh build
```

Variáveis úteis:

- `DOWNLOAD_BASE_URL`
- `ROOTFS_NAME`
- `TOOLCHAIN_NAME`
- `DEFAULT_USER`
- `DEFAULT_PASSWORD`
- `DEFAULT_HOSTNAME`
- `FLASH_TARGET`
- `RUN_ROOTFS_MAGIC`

## 4. Limpeza

Mostrar ajuda:

```bash
./thor_cleanup.sh help
```

### Limpeza Diária Recomendada

```bash
./thor_cleanup.sh incremental
```

Isso mantém `source/kernel_out` para que a próxima compilação permaneça rápida, enquanto remove:

- `output/`
- `bootloader/system.img*`
- `bootloader/esp.img*`
- `bootloader/recovery.img*`
- `bootloader/boot*.img`
- Artefatos temporários e logs de gravação

### Modos de Limpeza

- `incremental`
  - Manter `source/kernel_out`
  - Melhor escolha para desenvolvimento normal

- `rebuild`
  - Também remove `source/kernel_out`
  - A próxima construção se torna uma reconstrução completa

- `distclean`
  - Também remove `rootfs/` e `l4t-gcc/`
  - Use apenas ao arquivar ou redefinir completamente o ambiente

### Simulação

```bash
./thor_cleanup.sh incremental --dry-run
```

## 5. Pacotes Opcionais Pós-Gravação

Após o Thor inicializar com sucesso, você pode opcionalmente atualizar os metadados do pacote e instalar o meta-pacote `nvidia-jetpack`:

```bash
sudo apt update
sudo apt install nvidia-jetpack
```

## Solução de Problemas

### A inicialização mostra um erro `mmap`

Se o Thor não inicializar normalmente e a tela mostrar um erro `mmap` como na imagem abaixo, entre novamente no modo de recuperação USB e regrave a placa:

<div align="center">
  <img width ="700" src="https://files.seeedstudio.com/wiki/Thor-dev/mmap-error-thor.png"/>
</div>

Execute o seguinte comando a partir do espaço de trabalho de gravação:

```bash
cd /other_data/thor-dev/linux_for_tegra
sudo BOARDID=$BOARDID FAB=$FAB BOARDSKU=$BOARDSKU BOARDREV=$BOARDREV CHIP_SKU=$CHIP_SKU \
./l4t_initrd_flash.sh --erase-all jetson-agx-thor-devkit internal
```

:::note
Se o erro `mmap` persistir após executar o comando de apagar e regravar acima, colete o log completo da inicialização e entre em contato com o suporte.
:::

## Recursos

- [NVIDIA Jetson AGX Thor Developer Kit](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-Developer-Kit-p-9965.html)
- [Pacote BSP do Thor para JetPack 7.1](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAnZOQBV-uhTbnY0Zp3-HEqAQzFPrkH5LKgCsJ4KHRYCMg?e=rjGn93)

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
