---
description: Selecione uma configuração de placa Recamera2 e então compile e empacote o firmware completo do sistema.
title: Compilar o Firmware Completo
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - BSP
  - Linux
  - Firmware
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_bsp_full_build
sku: 10003420
sidebar_position: 4
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_bsp_full_build/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# Compilar o Firmware Completo

## O Fluxo de Trabalho em Três Etapas

```bash
cd recamera-pro-sdk-v1.0.10
./build.sh lunch     # 1. Select a board configuration
./build.sh all       # 2. Build and package the images
ls output/image/     # 3. Inspect the outputs
```

`./build.sh all` executa estas etapas em ordem: `sysdrv` (U-Boot + kernel + rootfs) → `media` → `app` → `recovery` → `firmware` (empacotamento da imagem).

> **Executar `./build.sh` sem argumentos executa `allsave` por padrão** (`all` + `save`). Isso também arquiva imagens, patches e informações de compilação em `IMAGE/`. Em CI, execute `./build.sh all` explicitamente se você não quiser o arquivo de arquivamento.

## Selecionar uma Configuração de Placa

```bash
./build.sh lunch
```

O script lista e numera todos os **50** arquivos `BoardConfig-*.mk` em `project/cfg/`. Seus nomes seguem este padrão:

```text
BoardConfig-"boot-medium"-"power-scheme"-"hardware-version"-"application-scenario".mk
```

Para reCamera Pro, escolha uma das duas configurações em `BoardConfig_Recamera2/`:

| Arquivo de configuração | Descrição |
| --- | --- |
| `BoardConfig_Recamera2/BoardConfig-EMMC-RK801-RV1126B_V1-IPC_64BIT.mk` | **64 bits, recomendado**; usa `aarch64-rockchip1240-linux-gnu` |
| `BoardConfig_Recamera2/BoardConfig-EMMC-RK801-RV1126B_V1-IPC.mk` | Versão de 32 bits |

> O número do menu pode mudar entre versões do SDK porque as entradas são ordenadas por nome de arquivo. **Não codifique esse número de forma fixa em documentação, scripts ou configuração de CI; use o nome de arquivo completo em vez disso.**

### Seleção Não Interativa (Recomendado para CI)

`lunch` aceita diretamente um nome de arquivo de configuração, evitando o menu interativo:

```bash
./build.sh lunch BoardConfig-EMMC-RK801-RV1126B_V1-IPC_64BIT.mk
```

Após a seleção, a raiz do SDK contém um link simbólico chamado `.BoardConfig.mk` apontando para o arquivo selecionado:

```bash
ls -l .BoardConfig.mk
./build.sh info      # Check the current configuration, defconfig, DTS, partition table, and all RK_* variables
```

## Referência Completa do Comando `build.sh`

### Compilações de Componentes

| Comando | Descrição |
| --- | --- |
| `env` | Gerar a imagem da partição env (tabela de partições e argumentos de boot) |
| `meta` | Compilar/exportar cabeçalhos meta de multimídia; opcional, tratado automaticamente ao compilar aplicativos |
| `uboot` | Compilar o U-Boot |
| `kernel` | Compilar o kernel |
| `rootfs` | Compilar o sistema de arquivos raiz com Buildroot |
| `driver` | Compilar módulos de driver do kernel (`.ko`) |
| `sysdrv` | Compilar U-Boot + kernel + rootfs |
| `media` | Compilar bibliotecas multimídia como mpp / rockit / rkaiq / rga / iva |
| `app` | Compilar aplicativos de referência (**depende de media; media deve ser compilado primeiro**) |
| `recovery` | Compilar o sistema de recuperação |
| `tool` | Compilar ferramentas para o PC host |
| `mcu` | Compilar o firmware RT-Thread do lado da MCU. Este comando é tratado antes da análise normal de argumentos; use `./build.sh mcu [configuration]` |

### Empacotamento e Comandos de Sistema Completo

| Comando | Descrição |
| --- | --- |
| `all` | Compilar e empacotar todas as imagens necessárias para inicializar o sistema |
| `allsave` | Executar `all` + `save`; o **padrão quando nenhum argumento é fornecido** |
| `firmware` | Empacotar todas as imagens necessárias para inicializar o sistema |
| `updateimg` | Empacotar todas as imagens de partição em `update.img` |
| `unpackimg` | Extrair um pacote `update.img` |
| `ota` | Empacotar o arquivo de atualização OTA `update_ota.tar` |
| `factory` | Criar uma imagem de gravação de fábrica usando `tools/linux/SocToolKit` |
| `sdcard_upgrade` | Criar uma imagem de atualização via cartão SD |
| `save` | Arquivar imagens, patches e informações de depuração em `IMAGE/`; `save xml` também salva o manifesto do repositório |

### Limpeza

| Comando | Descrição |
| --- | --- |
| `clean` | Limpar todas as saídas de compilação |
| `clean uboot` / `clean kernel` / `clean driver` / `clean rootfs` / `clean sysdrv` | Limpar o componente selecionado |
| `clean media` / `clean app` / `clean recovery` | Limpar media, aplicativos ou recovery |

### Menus de Configuração

| Comando | Descrição |
| --- | --- |
| `kernelconfig` | Abrir o `menuconfig` do kernel; ao sair, salvar automaticamente a configuração de volta para o defconfig com `savedefconfig` |
| `buildrootconfig` | Abrir o `menuconfig` do Buildroot e salvar o defconfig ao sair |

`kernelconfig` primeiro salva um snapshot `defconfig.before`. Se a configuração não tiver mudado, ele pula o `savedefconfig`.

### Secure Boot e Comandos Avançados

| Comando | Descrição |
| --- | --- |
| `dm` | Criar imagens device-mapper para partições criptografadas ou com verity |
| `dm-key-gen` | Gerar uma chave device-mapper |
| `secure-boot-key-gen` | Gerar chaves de secure boot |

### Obter Ajuda (Atenção a Isto)

```bash
./build.sh help          # Print usage
./build.sh help media    # Show the actual make command used for media
./build.sh help kernel   # Likewise for kernel; also works with uboot/rootfs/sysdrv
```

**Armadilha:** antes de `lunch`, `./build.sh --help` pode primeiro abrir o menu de seleção de placa em vez de mostrar a ajuda. O script verifica `.BoardConfig.mk` antes de analisar os argumentos e força a seleção da placa se o link estiver ausente. Execute `./build.sh lunch` primeiro; depois de selecionar uma placa, `--help` / `help` podem mostrar as informações de uso.

`help <component>` é especialmente útil porque revela o comando `make` subjacente e os argumentos usados por `build.sh`, facilitando reproduzir uma compilação manualmente ou diagnosticar um problema.

## Modificadores de Modo de Compilação

Prefixe um comando com `DEBUG` ou `ASAN` para alterar o modo de compilação:

```bash
./build.sh DEBUG app     # -O0 -g -ggdb -pg
./build.sh ASAN app      # -O0 -g -ggdb -fsanitize=address -fno-stack-protector -fno-omit-frame-pointer -fsanitize-recover=all
./build.sh app           # Default RELEASE: -Os; strip binaries during packaging
```

No modo RELEASE, o empacotamento executa `strip`, exceto em `libpthread*.so*` e `ld-*.so*` (a depuração de pthread do gdb e o valgrind exigem símbolos não removidos). Módulos de kernel (`.ko`) recebem apenas `--strip-debug`. O modo DEBUG pula o stripping e também instala símbolos de depuração da libc (`runtime_lib/libc`, `lib.tar.bz2`).

## Compilações Incrementais

```bash
./build.sh app                             # Rebuild applications only; fastest when changing application code
./build.sh app && ./build.sh firmware      # Rebuild applications and repackage the images
./build.sh kernel                          # Rebuild the kernel only
./build.sh clean app && ./build.sh app     # Clean and rebuild applications when needed
```

Compile um aplicativo diretamente (execute `lunch` primeiro):

```bash
make -C project/app/recamera_notify        # Build one application
make -C project/app/recamera_notify distclean
```

Compile media separadamente (execute `lunch` primeiro; media pode ser compilado independentemente do restante do SDK):

```bash
make -C media
```

## Saídas de Compilação

### `output/image/` — Imagens Graváveis

| Arquivo | Descrição |
| --- | --- |
| `download.bin` | Programa do lado do dispositivo usado para comunicação de gravação; carregado apenas na memória da placa |
| `idblock.img` | Loader, incluindo inicialização da DDR |
| `uboot.img` | U-Boot |
| `env.img` | Tabela de partições e argumentos de boot |
| `boot.img` | Imagem do kernel incluindo o DTB |
| `rootfs.img` | Sistema de arquivos raiz (ext4) |
| `recovery.img` | Sistema de recuperação (`RK_ENABLE_RECOVERY=y` nesta configuração de placa) |
| `misc.img` | Partição misc usada para o flag de boot de recuperação; esta configuração de placa usa `recovery-misc.img` |
| `userdata.img` | Partição userdata (ext4, montada em `/userdata`) |
| `update.img` | Pacote completo para todas as partições; pode ser usado para uma atualização |
| `parameter.txt` | Texto da tabela de partições usado por `rkflash.sh` |

### `output/out/` — Saídas Intermediárias

| Diretório | Descrição |
| --- | --- |
| `media_out/` | `include/` e `lib/` de media, usados como dependências de aplicativos |
| `app_out/` | Saídas de aplicativos mescladas no rootfs em `bin/lib/share/etc/root` durante o empacotamento |
| `rootfs_glibc_rv1126b/` | Diretório de empacotamento do rootfs |
| `sysdrv_out/` | Saídas de sysdrv |
| `oem/`, `userdata/`, `ramdisk/` | Conteúdos da partição OEM, userdata e ramdisk de recuperação |
| `S20linkmount`, `S21appinit` | Scripts gerados de montagem de partições e inicialização de aplicativos OEM |

## Tempo Esperado para a Primeira Compilação

Um `./build.sh all` completo inclui uma compilação Buildroot completa e pode levar dezenas de minutos a várias horas, dependendo dos núcleos de CPU e do armazenamento. Na primeira execução, o Buildroot extrai `sysdrv/tools/board/buildroot/buildroot-2023.02.6.tar.gz` e baixa/compila muitos pacotes, portanto **é necessária uma conexão com a internet**. Compilações incrementais são muito mais rápidas porque recompilam apenas componentes alterados.

Para a primeira compilação, considere usar `screen` ou `tmux` e salvar o log:

```bash
./build.sh all 2>&1 | tee build_$(date +%Y%m%d_%H%M).log
```

## Checklist Pré-Compilação

- `./setup_build_env.sh` foi concluído, e o resumo de versão não mostra nenhuma ferramenta necessária como `NOT INSTALLED`.
- `./build.sh lunch` selecionou `BoardConfig_Recamera2/...IPC_64BIT.mk`, e o link simbólico `.BoardConfig.mk` existe.
- `./build.sh info` informa `rv1126b-recamera2-v1.dts` para `RK_KERNEL_DTS`.
- Restam pelo menos 20 GB de espaço livre em disco na partição do SDK (100 GB ou mais recomendados).
- Se você alterou a configuração da placa, execute primeiro `./build.sh clean`.

Em seguida, grave as imagens na placa: [Gravação e Boot](/pt-br/recamera_pro_bsp_flash_boot/).

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>