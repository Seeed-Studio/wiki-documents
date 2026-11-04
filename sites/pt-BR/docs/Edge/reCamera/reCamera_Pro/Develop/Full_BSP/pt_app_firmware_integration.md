---
description: Adicione um aplicativo ao código-fonte completo do BSP, inclua-o na compilação e empacote-o no rootfs do produto.
title: Integrar um aplicativo ao firmware do produto
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - BSP
  - Linux
  - Firmware
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_bsp_app_integration
sku: 10003420
sidebar_position: 5
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_bsp_app_integration/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# Integrar um aplicativo ao firmware do produto

Este guia é para desenvolvedores que precisam incluir um aplicativo na compilação do produto reCamera Pro e na imagem de firmware. Selecione primeiro a configuração da placa de destino. Compile o módulo de mídia antecipadamente apenas se o seu aplicativo fizer link com bibliotecas de mídia.

## Como funciona o framework de compilação de aplicativos

Se você só precisa compilar um aplicativo C/C++ ou RKNN independente e não precisa alterar a compilação do produto ou a integração ao firmware, use o [SDK de cross-compilação](https://github.com/Seeed-Projects/recamera_pro_toolchain) da Seeed.

`project/app/Makefile` descobre subdiretórios com um curinga:

```make
app_src := $(wildcard ./*/Makefile ./component/fastboot_server/Makefile ./component/ao_record_service/Makefile)
```

**Qualquer diretório em `project/app/<your-app>/` com um `Makefile` é incluído automaticamente na compilação**; não é necessário registro separado.

As saídas são coletadas em duas etapas:

```text
project/app/<your-app>/out/          ← PKG_BIN for the individual application
        ↓ MAROC_COPY_PKG_TO_APP_OUTPUT
project/app/out/                    ← RK_APP_OUTPUT, aggregate of all applications
        ↓ copied again by the top-level Makefile
output/out/app_out/                 ← RK_PROJECT_PATH_APP, used to package the rootfs
```

Variáveis principais de `project/app/Makefile.param`:

| Variável | Valor / significado |
| --- | --- |
| `RK_APP_CROSS` | Prefixo do compilador cruzado; `aarch64-rockchip1240-linux-gnu` para esta placa |
| `RK_APP_CFLAGS` | `-march=armv8-a -mtune=cortex-a53` (derivado do nome da toolchain) |
| `RK_APP_OPTS` | `-D_LARGEFILE_SOURCE -D_LARGEFILE64_SOURCE -D_FILE_OFFSET_BITS=64` mais flags de otimização |
| `RK_APP_MEDIA_INCLUDE_PATH` | `output/out/media_out/include` |
| `RK_APP_MEDIA_LIBS_PATH` | `output/out/media_out/lib` |
| `RK_APP_OUTPUT` | `project/app/out` |
| `RK_APP_CHIP` | `rv1126b` |
| `RK_APP_BUILDROOT_STAGING` | `sysdrv/source/buildroot/buildroot-2023.02.6/output/staging` |
| `RK_APP_BUILDROOT_TARGET` | `sysdrv/source/buildroot/buildroot-2023.02.6/output/target` |
| `RK_APP_JOBS` | Número de tarefas paralelas |

A otimização é controlada por `RK_BUILD_VERSION_TYPE`: o modo RELEASE padrão usa `-Os`, `DEBUG` usa `-O0 -g -ggdb -pg`, e `ASAN` adiciona `-fsanitize=address -fno-stack-protector -fno-omit-frame-pointer -fsanitize-recover=all`.

`Makefile.param` também adiciona `tools/linux/toolchain/<cross-compiler>/bin` ao `PATH` automaticamente, então você não precisa executar `env_install_toolchain.sh`.

## Exemplo mínimo: `hello_world`

### Criar o diretório

```bash
mkdir -p project/app/hello_world && cd project/app/hello_world
```

### `hello.c`

```c
#include <stdio.h>

int main(int argc, char *argv[])
{
    printf("Hello World from RV1126B IPC SDK!\n");
    return 0;
}
```

### `Makefile`

```make
ifeq ($(APP_PARAM), )
    APP_PARAM := ../Makefile.param
    include $(APP_PARAM)
endif

export LC_ALL=C
SHELL := /bin/bash

CURRENT_DIR := $(shell pwd)

PKG_NAME := hello_world
PKG_BIN  ?= out

ifeq ($(RK_APP_HELLO_WORLD),y)
PKG_TARGET := hello_world-build
endif

all: $(PKG_TARGET)
	@echo "build $(PKG_NAME) done"

hello_world-build:
	rm -rf $(PKG_BIN); \
	mkdir -p $(PKG_BIN)/bin;
	$(RK_APP_CROSS)-gcc $(RK_APP_OPTS) $(RK_APP_CFLAGS) hello.c -o $(PKG_BIN)/bin/hello_world
	$(call MAROC_COPY_PKG_TO_APP_OUTPUT, $(RK_APP_OUTPUT), $(PKG_BIN))

clean:
	rm -rf $(PKG_BIN)

distclean: clean

info:
	@echo "$(PKG_NAME): RK_APP_HELLO_WORLD=$(RK_APP_HELLO_WORLD)"
```

> Linhas de receita em um Makefile devem ser indentadas com um **Tab**, não com espaços. Verifique a indentação depois de copiar o código acima.

### Adicionar uma chave de compilação

Edite o arquivo selecionado por `.BoardConfig.mk` (`project/cfg/BoardConfig_Recamera2/BoardConfig-EMMC-RK801-RV1126B_V1-IPC_64BIT.mk`) e adicione isto na seção de configuração de aplicativos:

```bash
export RK_APP_HELLO_WORLD=y
```

A chave é opcional (você pode remover a condição `ifeq` do Makefile para compilar incondicionalmente), mas **é recomendável mantê-la** para que você possa ativar ou desativar o aplicativo para diferentes placas. Aplicativos existentes como `recamera_notify`, `recamera_onvif`, `recamera_services`, `recamera_web` e `rkllm-inference` usam chaves `RK_APP_xxx`.

### Compilar e verificar

```bash
./build.sh app                          # Build enabled applications through the aggregate entry point
ls output/out/app_out/bin/hello_world   # Confirm the output exists

make -C project/app/hello_world         # Build only this application (run lunch first)
make -C project/app/hello_world distclean
```

Para testar o aplicativo no dispositivo sem regravar a imagem:

```bash
scp output/out/app_out/bin/hello_world root@<device-IP>:/userdata/
ssh root@<device-IP> '/userdata/hello_world'
```

Para incluir o aplicativo em uma imagem de firmware:

```bash
./build.sh firmware
sudo ./rkflash.sh rootfs
```

## Como os diretórios de saída são mapeados para o rootfs

Quando `build.sh` empacota o rootfs, ele mescla as saídas dos aplicativos por nome de diretório:

| Diretório em `app_out` | Localização no dispositivo |
| --- | --- |
| `bin/` | `/bin` ou `/usr/bin` |
| `lib/` | `/usr/lib`, `/lib` |
| `etc/` | `/etc` |
| `share/` | `/usr/share` |
| `root/` | **Raiz do rootfs, `/`** (copiado como está; veja `__COPY_FILES $RK_PROJECT_PATH_APP/root` em `__PACKAGE_ROOTFS`) |
| `install_to_userdata/` | Partição `/userdata` |

O diretório `root/` é a opção mais flexível: para instalar um arquivo em `/usr/bin/foo`, coloque-o em `<PKG_BIN>/root/usr/bin/foo`. O aplicativo `project/app/wifi_app` faz isso com `install_out/root/usr/bin`.

Use `install_to_userdata/` para dados que pertencem a uma partição gravável, como modelos, configurações ou gravações.

> O SDK atual tem um problema de código-fonte no caminho de empacotamento `install_to_userdata/` do aplicativo que pode impedir que arquivos sejam incluídos na imagem de userdata. Veja [Revisão de código-fonte e problemas conhecidos](/pt-br/recamera_pro_sdk_source_notes/) para o impacto e a solução alternativa.

O empacotamento também processa símbolos automaticamente (`__RELEASE_FILESYSTEM_FILES()` em `build.sh`): remove `lib*.la`, `lib*.a` e todos os diretórios `pkgconfig`. O modo RELEASE executa `strip` em executáveis e `*.so*`, exceto `libpthread*.so*` e `ld-*.so*`; arquivos `.ko` recebem `--strip-debug`. O modo DEBUG não faz strip e também instala símbolos de depuração da libc.

## Exemplo real: fazendo link com bibliotecas de mídia

`project/app/ao_record_demo/Makefile` é um modelo prático que mostra como fazer link com rockit:

```make
RK_APP_CFLAGS = -I $(RK_APP_MEDIA_INCLUDE_PATH) \
                -I $(RK_APP_MEDIA_INCLUDE_PATH)/libdrm \
                -I $(RK_APP_MEDIA_INCLUDE_PATH)/rkaiq \
                -I $(RK_APP_MEDIA_INCLUDE_PATH)/rkaiq/uAPI \
                -I $(RK_APP_MEDIA_INCLUDE_PATH)/rkaiq/uAPI2 \
                -I $(RK_APP_MEDIA_INCLUDE_PATH)/rkaiq/algos \
                -I $(RK_APP_MEDIA_INCLUDE_PATH)/rkaiq/common \
                -I $(RK_APP_MEDIA_INCLUDE_PATH)/rkaiq/xcore \
                -I $(RK_APP_MEDIA_INCLUDE_PATH)/rkaiq/iq_parser \
                -I $(RK_APP_MEDIA_INCLUDE_PATH)/rkaiq/iq_parser_v2 \
                -I $(RK_APP_MEDIA_INCLUDE_PATH)/rkaiq/smartIr \
                -I $(RK_APP_OUTPUT)/include \
                -I $(RK_APP_OUTPUT)/include/freetype2

RK_APP_LDFLAGS = -L $(RK_APP_MEDIA_LIBS_PATH) -L $(RK_APP_OUTPUT)/lib

RK_APP_OPTS += -Wl,-rpath-link,$(RK_APP_MEDIA_LIBS_PATH):$(RK_APP_PATH_LIB_INCLUDE)/root/usr/lib:$(RK_APP_OUTPUT)/lib

LD_FLAGS += $(RK_APP_OPTS) $(RK_APP_LDFLAGS) $(RK_APP_CFLAGS) \
            -Wl,-Bstatic -pthread -lrockit -lrtsp \
            -lrockchip_mpp -lrksysutils -lrga -Wl,-Bdynamic \
            -Wl,--gc-sections -Wl,--as-needed \
            -lrkaiq -lstdc++ -lm
```

Pontos principais:

- A raiz de include é `$(RK_APP_MEDIA_INCLUDE_PATH)`. Os headers de rkaiq estão espalhados por vários subdiretórios, então cada um precisa de uma opção `-I`.
- `-Wl,-rpath-link,...` resolve dependências indiretas em tempo de link; sem isso, o linker pode relatar `warning: libxxx.so not found`.
- `-Wl,-Bstatic ... -Wl,-Bdynamic` faz link estático de rockit/rtsp/mpp/rga mantendo rkaiq dinâmico. Isso segue as convenções de aplicativos de referência da Rockchip e reduz dependências em tempo de execução sob `/oem/usr/lib`.
- `-Wl,--gc-sections -Wl,--as-needed` reduzem o tamanho do binário.

## Iniciar o aplicativo na inicialização

O ponto de entrada de inicialização de aplicativos do reCamera Pro é `/oem/usr/bin/RkLunch.sh` (o script de parada é `RkLunch-stop.sh`). `__PACKAGE_OEM()` em `build.sh` gera um script de init em `/etc/init.d/` com este conteúdo:

```sh
#!/bin/sh
[ -f /etc/profile.d/RkEnv.sh ] && source /etc/profile.d/RkEnv.sh
case $1 in
    start) sh /oem/usr/bin/RkLunch.sh ;;
    stop)  sh /oem/usr/bin/RkLunch-stop.sh ;;
    *)     exit 1 ;;
esac
```

**Abordagem recomendada:** acrescente o comando de inicialização do seu aplicativo a `RkLunch.sh`. O arquivo-fonte é `project/app/recamera_ipc/src/rv1126b_ipc/RkLunch.sh`. Isso permite que seu aplicativo compartilhe o `PATH` e o `LD_LIBRARY_PATH` definidos por `RkEnv.sh` (incluindo `/oem/usr/lib`) e use o fluxo comum de parada.

Se você precisar de um script de init separado, siga o padrão de overlay (`start-stop-daemon -S -b -m -p <pidfile> -x <executable> -- <arguments>`) e nomeie o arquivo como `S<priority><name>` em `<PKG_BIN>/root/etc/init.d/`. As prioridades existentes são `S00board-id`, `S10log`, `S15watchdog`, `S20hwclock`, `S40gmgr`, `S40skt2ws`, `S40tmir`, `S49rcisd`, `S50sshd`, `S50ttyd`, `S50go2rtc`, `S70vsftpd`, `S99factorykey`, `S99inotify_passwd` e `S99led`.

## Usar CMake em vez de um Makefile

`recamera_ipc` e `recamera_web_backend` usam CMake. Mantenha um Makefile externo fino para que o curinga do framework de aplicativos encontre o aplicativo e, em seguida, invoque o CMake dentro dele:

```make
ifeq ($(APP_PARAM), )
    APP_PARAM := ../Makefile.param
    include $(APP_PARAM)
endif
PKG_BIN ?= out

all:
	rm -rf build && mkdir -p build
	cd build && cmake .. \
	    -DCMAKE_TOOLCHAIN_FILE=../cmake/toolchain.cmake \
	    -DCMAKE_INSTALL_PREFIX=$(CURDIR)/$(PKG_BIN)
	make -C build -j$(RK_APP_JOBS) install
	$(call MAROC_COPY_PKG_TO_APP_OUTPUT, $(RK_APP_OUTPUT), $(PKG_BIN))

distclean:
	rm -rf build $(PKG_BIN)
clean: distclean
```

Consulte [Choose a Development Path](/pt-br/recamera_pro_dev_path/) para a abordagem baseada em toolchain-file.

## Aplicações em Rust / Go / Node.js / Python

O diretório `project/app/` inclui exemplos escritos em linguagens além de C; use a abordagem de compilação deles como referência:

| Aplicação | Linguagem | Abordagem de compilação |
| --- | --- | --- |
| `recamera_services/gmgr` | Rust | `Cargo.toml` + `Cross.toml`; use `cross` para compilação cruzada baseada em Docker. `setup-libgpiod.sh` prepara as dependências |
| `recamera_web/recamera_web_react` | Node.js / React | `package.json` + `nginx.conf`; gera assets estáticos |
| `recamera_web/recamera_web_backend` | C/C++ | CMake + `thirdparty` |
| `recamera_notify/notify-server` | Python | Execute o script de instalação e instale `requirements.txt`; sem compilação |
| aplicativos relacionados a go2rtc | Go | Binários pré-compilados são colocados no overlay em `oem/usr/bin/go2rtc` (`go2rtc-arm` e `go2rtc-arm64`) |

Aplicações Go são fornecidas como binários pré-compilados no overlay (`overlay-buildroot-go2rtc-arm64/oem/usr/bin/go2rtc`). Isso significa que o fluxo de compilação atual copia binários Go pré-compilados para o overlay em vez de compilá-los dentro do SDK.

## Lista de verificação

- A aplicação está em `project/app/` e possui um `Makefile`.
- O Makefile inclui `../Makefile.param` próximo ao início.
- Ele fornece os targets `all`, `clean` e `distclean` (o `clean` de nível superior chama `distclean` em cada subdiretório e falha se o target estiver ausente).
- As saídas são copiadas para `$(PKG_BIN)`, seguidas por uma chamada a `MAROC_COPY_PKG_TO_APP_OUTPUT`.
- Adicione a opção `RK_APP_<NAME>=y` à configuração da placa.
- Após a compilação, verifique se seus arquivos aparecem em `output/out/app_out/`.

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>