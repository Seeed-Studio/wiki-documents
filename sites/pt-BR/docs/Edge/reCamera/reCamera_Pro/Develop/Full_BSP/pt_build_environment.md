---
description: Prepare e verifique as dependências do host para compilar o pacote completo de código-fonte.
title: Ambiente de Build do BSP
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - BSP
  - Linux
  - Firmware
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_bsp_build_environment
sku: 10003420
sidebar_position: 3
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_bsp_build_environment/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# Ambiente de Build do BSP

## Script de Instalação em Uma Etapa

A raiz do SDK contém `setup_build_env.sh` (o script real é `project/setup_build_env.sh`, com um link simbólico na raiz). Ele é **idempotente**: não reinstala nem atualiza ferramentas que já estejam instaladas em uma versão aceitável, então você pode executá-lo repetidamente.

```bash
cd recamera-pro-sdk-v1.0.10
./setup_build_env.sh             # Install all missing tools
./setup_build_env.sh --check     # Dry run: report missing tools without changing anything
./setup_build_env.sh --help      # Show script help
```

Na primeira execução, use `--check` para ver o que está faltando antes de decidir se deve instalar pacotes ou acessar a rede.

## Instalar Ferramentas para o Seu Alvo de Build

Os requisitos de ferramentas dependem do que você planeja compilar. Para um primeiro build completo do SDK, usar o script para instalar e verificar todas as dependências é a abordagem mais fácil. Se você estiver compilando apenas um aplicativo em C/C++, primeiro verifique o que o Makefile dele, as bibliotecas vinculadas e o sysroot exigem e instale apenas essas ferramentas. Rust, Go, Node.js e Docker são usados por aplicativos específicos de nível superior no SDK; eles não são pré-requisitos universais para compilar o kernel ou todos os programas em C.

O script resume e verifica as ferramentas necessárias. Suas etapas de instalação são:

| Etapa | Conteúdo | Usado por |
| --- | --- | --- |
| Etapa 1 | Verificações de hardware: CPU de 64 bits e espaço livre na partição do SDK (≥20 GB; ≥100 GB recomendados) | Todos os builds |
| Etapa 2 | Pacotes básicos de build via `apt`: `repo git make gcc g++ cmake bison flex libssl-dev autoconf pkg-config python3 device-tree-compiler`, etc. | U-Boot / kernel / Buildroot / dependências comuns de aplicativos |
| Etapa 3 | Rust (`rustup` / `cargo`), Docker (≥27.0.0, e adicionar o usuário ao grupo `docker`), `cross` (auxiliar de compilação cruzada Rust), nvm / Node.js (≥18) | `recamera_services`, `recamera_web` |
| Etapa 4 | CMake ≥3.21, `libblkid-dev`, `libprotobuf-dev`, `protobuf-compiler` | `recamera_ipc`, `common/vigil` |
| Etapa 5 | Go ≥1.24.0, UPX | `recamera_go2rtc` e aplicativos relacionados |
| Etapa 6 | Imprimir um resumo de versões para todas as ferramentas | Todos os builds |

> Por que um “SDK em C” verifica Rust, Go e Node.js? Este é um pacote completo de código-fonte do produto, não apenas código em C. `recamera_services` usa Rust, programas relacionados a go2rtc usam Go, o frontend Web usa ferramentas Node.js e o serviço de notificações usa Python. Essas ferramentas são necessárias apenas ao compilar os componentes correspondentes. Se um build completo falhar porque uma ferramenta está ausente, primeiro identifique qual aplicativo falhou. Veja a [Arquitetura de Serviços de Camada Superior da reCamera](/pt-br/recamera_pro_bsp_services/) para a lista de aplicativos.

## Usuários e Permissões

- Execute o script como um **usuário comum com acesso sudo**, ou como root.
- Quando invocado como `sudo ./setup_build_env.sh`, ferramentas em nível de usuário como rustup, nvm e configuração do Go são instaladas para o usuário real identificado por `$SUDO_USER`, não para root. Isso é intencional e evita problemas de permissão durante builds posteriores.

## Etapas Necessárias Após a Instalação

1. Se o script adicionou o usuário atual ao grupo `docker`, **faça logoff e entre novamente**, ou execute `newgrp docker` temporariamente, para que a alteração tenha efeito.
2. Abra um novo terminal ou execute `source ~/.bashrc` para que as alterações de PATH do Go, cargo e nvm entrem em vigor.
3. Confirme que nenhuma ferramenta necessária está marcada como `NOT INSTALLED` no resumo de versões da Etapa 6.

Verifique o ambiente com:

```bash
./setup_build_env.sh --check
```

## Redes Restritas: Espelhos e Pacotes Offline

O script oferece suporte a variáveis de ambiente para substituir fontes de download:

| Variável de ambiente | Substitui |
| --- | --- |
| `GO_MIRROR_BASE` | URL base de download do Go |
| `DOCKER_REPO_BASE` | URL base do repositório apt do Docker |
| `CMAKE_BASE_URL` | URL base de download do CMake |
| `RUSTUP_DIST_SERVER` | Servidor de distribuição do rustup |

Por exemplo:

```bash
export GO_MIRROR_BASE=https://golang.google.cn/dl
export RUSTUP_DIST_SERVER=https://rsproxy.cn
./setup_build_env.sh
```

Se você colocar o arquivo offline `go1.24.0.linux-*.tar.gz` na **raiz do SDK**, o script irá usá-lo para instalar o Go antes de tentar um download pela rede.

## Instalação Manual (Sem o Script)

Se a política da empresa não permitir executar o instalador, instale pelo menos:

```bash
sudo apt install -y build-essential git make cmake bison flex libssl-dev \
    autoconf pkg-config python3 device-tree-compiler libblkid-dev \
    libprotobuf-dev protobuf-compiler
```

Requisitos mínimos de versão:

- CMake ≥ 3.21 (`recamera_ipc` o exige em seu CMakeLists)
- Docker ≥ 27.0.0 (exigido pelo compilador cruzado Rust `cross`)
- Node.js ≥ 18 (build do frontend)
- Go ≥ 1.24.0 (go2rtc)

**Você não precisa instalar a toolchain cruzada manualmente.** O SDK a inclui em `tools/linux/toolchain/`:

- `aarch64-rockchip1240-linux-gnu` (GCC 12.4.0, 64 bits; usado pela reCamera Pro)
- `arm-rockchip1240-linux-gnueabihf` (32 bits)

`project/app/Makefile.param` adiciona automaticamente `tools/linux/toolchain/<RK_TOOLCHAIN_CROSS>/bin` ao `PATH`, então você não precisa modificar o PATH do sistema.

## Verificar se o Ambiente de Build Está Pronto

O SDK fornece este comando de verificação:

```bash
./build.sh check
```

Ele verifica dependências para os SDKs de componentes. Após executar `lunch`, `./build.sh info` também imprime a configuração atual da placa e todas as variáveis `RK_*` para ajudar a verificar se o ambiente foi carregado corretamente.

> Observação: `./build.sh --help` **não** é o comando de ajuda. Um argumento não reconhecido faz com que `build.sh` mostre o menu de seleção de placa. As informações de uso estão na função `usage()` em `project/build.sh`; elas também são resumidas na tabela de comandos em [Primeiro Build Completo](/pt-br/recamera_pro_bsp_full_build/).

## Problemas Comuns de Instalação

| Sintoma | Causa | Solução |
| --- | --- | --- |
| `docker: permission denied` | A alteração de grupo ainda não teve efeito | Faça logoff e login novamente, ou execute `newgrp docker` |
| `go: command not found` após a instalação | PATH não foi atualizado | Abra um novo terminal ou execute `source ~/.bashrc` |
| download do rustup expira | Rede restrita | Defina `RUSTUP_DIST_SERVER` e execute o instalador novamente |
| verificação de espaço em disco falha | Menos de 20 GB livres na partição | Use outra partição ou libere espaço e tente novamente; os artefatos de build podem exigir dezenas de GB a mais |
| build com `cross` falha | Docker não está em execução | Execute `sudo systemctl start docker` |

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>