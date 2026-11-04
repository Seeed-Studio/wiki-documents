---
description: Visão geral do pacote completo de código-fonte do BSP, limites dos componentes e diferença entre desenvolvimento de aplicação e desenvolvimento de sistema.
title: Visão Geral do Pacote Completo de Código-Fonte
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - BSP
  - Linux
  - Firmware
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_bsp_source_overview
sku: 10003420
sidebar_position: 1
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_bsp_source_overview/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# Visão Geral do Pacote Completo de Código-Fonte

## O que você recebe

`recamera-pro-sdk-v1.0.10` é uma **versão completa de código-fonte de BSP** baseada no Rockchip RV1126B Linux IPC SDK. Ela inclui a configuração da placa Recamera2 da Seeed e aplicações de produto. Também contém algumas ferramentas e componentes usados para desenvolvimento de aplicações, mas não deve ser tratada como um SDK de aplicação com todas as bibliotecas de API já compiladas e prontas para uso após a extração.

Um SDK de desenvolvimento de aplicações normalmente se concentra em um compilador cruzado pronto para uso, sysroot de destino, cabeçalhos, bibliotecas pré-compiladas, documentação de API e exemplos. Este pacote de código-fonte inclui uma toolchain cruzada e código-fonte de bibliotecas de mídia. Uma extração limpa não contém artefatos de compilação em `output/`, portanto, uma aplicação que precise de bibliotecas de mídia ou Buildroot pode exigir que você compile os componentes relevantes e prepare primeiro um sysroot. **Isso não significa que toda aplicação exija uma compilação completa de U-Boot, kernel e rootfs.**

Este pacote de código-fonte suporta três tipos de trabalho:

- **Compilar ou modificar firmware:** use o ponto de entrada de compilação unificado para compilar U-Boot, Linux, Buildroot, bibliotecas de mídia e aplicações, depois gerar imagens graváveis.
- **Desenvolver uma aplicação no dispositivo:** use a toolchain cruzada incluída e obtenha o sysroot de destino, bibliotecas de mídia ou bibliotecas de IA conforme necessário. Um programa C simples não exige recompilar todo o sistema antes.
- **Personalizar o software do produto:** modifique aplicações como `recamera_ipc`, `recamera_web` e `recamera_services`, bem como a configuração do sistema.

Este não é um pacote de firmware pré-compilado nem um pacote apenas de Buildroot. Ele ocupa cerca de 12 GB após a extração.

## Especificações de Hardware e Software

| Item | Valor | Fonte |
| --- | --- | --- |
| SoC | Rockchip RV1126B (`RK_CHIP=rv1126b`, `RK_ARCH=arm64`) | Configuração da placa |
| PMIC | RK801 | Nome de arquivo de configuração da placa |
| Meio de boot | eMMC (`RK_BOOT_MEDIUM=emmc`) | Configuração da placa |
| Kernel | Linux 6.1.157 ("Curry Ramen") | `sysdrv/source/kernel/Makefile` |
| Defconfig do kernel | `rv1126b_ipc_defconfig` + 4 fragmentos | Configuração da placa |
| Device tree | `rv1126b-recamera2-v1.dts` | Configuração da placa |
| Defconfig do U-Boot | `rv1126b_recamera2_defconfig` (`CONFIG_BAUDRATE=1500000`) | `sysdrv/source/uboot/u-boot/configs/` |
| Sistema de arquivos raiz | Buildroot 2023.02.6, defconfig `recamera2_buildroot_aarch64_defconfig` | Configuração da placa |
| Ferramentas de compilação | Ferramentas de compilação do BSP da Rockchip especificadas pela configuração da placa | `tools/`, `project/build.sh` |
| Sensores de câmera | SC450AI / SC850SL (arquivos de IQ incluídos; o kernel também compila módulos para GC2053, IMX415, SC200AI e outros sensores) | `RK_CAMERA_SENSOR_IQFILES`, `rv1126b-recamera2.config` |
| Wi-Fi / Bluetooth | `RK_ENABLE_WIFI_CHIP=AP6XXX`; Bluetooth habilitado | Configuração da placa |
| Tipo de aplicação de referência | `RK_APP_TYPE=RKIPC_RV1126B_RECAMERA2` | Configuração da placa |
| String de modelo do dispositivo | `Rockchip RV1126B RECAMERA PRO Board` | `rv1126b-recamera2-v1.dts` |

## Mapa de Diretórios

```text
recamera-pro-sdk-v1.0.10/
├── build.sh -> project/build.sh         # unified build entry point
├── setup_build_env.sh                   # one-shot build environment installer
├── rkflash.sh -> project/rkflash.sh     # USB flashing helper
├── quick_start_cn.md / quick_start_en.md# Seeed quick-start guides (upstream material for this Wiki)
├── readme_cn.txt / readme_en.txt        # original Rockchip readme files
├── docs/                                # 90 Rockchip PDF manuals and copyright notices
├── media/          (1.7 G)              # multimedia and AI runtime sources
├── project/        (637 M)              # build scripts, board configuration, and applications
├── sysdrv/         (6.9 G)              # U-Boot / Kernel / MCU / prebuilt drivers
└── tools/          (1.3 G)              # cross-toolchains, flashing, and packaging tools
```

### `sysdrv/` — Camada de Sistema

- `source/uboot/`: código-fonte do U-Boot, incluindo firmware de inicialização de DDR rkbin.
- `source/kernel/`: código-fonte do Linux 6.1.157.
- `source/mcu/`: firmware RT-Thread para o coprocessador do lado do MCU; compile-o apenas quando necessário.
- `drv_ko/` (246 M): módulos de kernel pré-compilados.
- `tools/board/buildroot/`: **Buildroot é fornecido como `buildroot-2023.02.6.tar.gz`** e é extraído para `sysdrv/source/buildroot/buildroot-2023.02.6/` durante a primeira compilação do rootfs. Este diretório também contém `recamera2_buildroot_aarch64_defconfig`, `busybox.config` e vários patches.

> É normal não encontrar um diretório Buildroot em `sysdrv/source/` antes que o arquivo compactado tenha sido extraído.

### `media/` — Multimídia e Algoritmos

| Diretório | Finalidade |
| --- | --- |
| `mpp/` | Rockchip Media Process Platform; codificação e decodificação H.264/H.265/JPEG |
| `rockit/` | Runtime MPI com interfaces unificadas VI/VPSS/VENC/AI/AO/RGN; o principal ponto de entrada para pipelines de vídeo |
| `isp/` | `camera_engine_rkaiq`, 3A e ajuste de IQ, incluindo `iqfiles/isp35/` |
| `rga/` | Acelerador 2D para escala, conversão de formato e rotação |
| `iva/` | Bibliotecas de algoritmos de visão ROCKIVA, incluindo `librockiva-rv1126b-Linux` e `models/rockiva_data_rv1126b` |
| `avs/` | Costura de visão 360° (around-view) |
| `alsa-lib/` | Biblioteca de espaço de usuário ALSA |
| `rknn-llm-mk/` | RKLLM SDK: rkllm-runtime, exemplos, RKNN Runtime e `rknn_api.h`, além de pacotes de driver de NPU |
| `common_algorithm/` | Algoritmos comuns |
| `libdrm/`, `libv4l/` | Bibliotecas de espaço de usuário para display e V4L2 |
| `prerecord/`, `rockauto/`, `sysutils/`, `third_libs/` | Pré-gravação, componentes automotivos, utilitários de sistema e bibliotecas de terceiros como freetype/libjpeg/libpng/zlib |
| `samples/` | `example/` contém demos e testes de estresse; `simple_test/` contém exemplos mínimos de arquivo único |

### `project/` — Framework de Compilação e Aplicações

- `build.sh`: ponto de entrada unificado que aciona sysdrv → media → app → empacotamento de firmware.
- `cfg/`: 50 arquivos `BoardConfig-*.mk` em cinco diretórios de séries de produtos. **Apenas dois arquivos em `cfg/BoardConfig_Recamera2/` se aplicam ao reCamera Pro:** as configurações de 32 bits `...-IPC.mk` e de 64 bits `...-IPC_64BIT.mk`.
- `cfg-all-items-introduction.txt`: descrições de todas as opções de configuração `RK_*`.
- `app/`: todas as aplicações; consulte [Arquitetura de Serviços de Camada Superior da reCamera](/pt-br/recamera_pro_bsp_services/).
- `scripts/`, `make_meta/`: scripts de empacotamento e geração de metacabeçalhos.

### `tools/` — Ferramentas para o PC Host

- `linux/toolchain/`: toolchains incluídas usadas para compilações do BSP. Para desenvolvimento comum de aplicações, use o [SDK de compilação cruzada de aplicações](https://github.com/Seeed-Projects/recamera_pro_toolchain) da Seeed; não há necessidade de selecionar manualmente uma toolchain a partir do pacote completo de código-fonte.
- `linux/Linux_Upgrade_Tool/`: `upgrade_tool` v2.26, `88-rockusb.rules`, `config.ini` e um PDF de guia de usuário em linha de comando.
- `linux/Linux_Pack_Firmware/`: ferramentas de empacotamento de firmware.
- `linux/SocToolKit/`, `linux/programmer_image_tool/`: ferramentas GUI de gravação e de imagem de fábrica.

## Como os Componentes Funcionam em Conjunto

`sysdrv`, `media` e `project/app` têm cada um seus próprios pontos de entrada de compilação, mas não são três produtos independentes. A compilação completa é acionada por `./build.sh` em ordem de dependência:

```text
sysdrv(uboot + kernel + rootfs) → media → app → firmware(packaging) → output/image/
```

Compilações de aplicações usam a configuração da placa, artefatos do Buildroot e dependências específicas da aplicação. Aplicações que usam interfaces de mídia da Rockchip também dependem de cabeçalhos e bibliotecas gerados por media (`output/out/media_out/{include,lib}`). Para uma primeira compilação completa, siga o [Fluxo de Trabalho de Compilação Completa de Firmware](/pt-br/recamera_pro_bsp_full_build/). Para desenvolver uma aplicação simples, você não precisa gravar primeiro uma imagem completa de firmware; prepare apenas os artefatos de compilação exigidos pelas dependências dessa aplicação.

Mantenha esta ordem de dependência em mente:

1. `sysdrv` fornece o kernel, sistema de arquivos raiz e ambiente base de destino.
2. `media` compila bibliotecas de mídia, ISP, processamento de imagem e algumas bibliotecas de IA.
3. `project/app` compila aplicações de produto que são executadas no sistema de destino.
4. `firmware` empacota os artefatos relevantes em imagens.

Novos usuários devem escolher um caminho de leitura a partir da página inicial da Wiki com base em seu objetivo. Você não precisa ler todos os tópicos do começo ao fim.

## Locais dos Artefatos de Compilação

| Caminho | Conteúdo |
| --- | --- |
| `output/image/` | Imagens graváveis: `download.bin`, `idblock.img`, `uboot.img`, `env.img`, `boot.img`, `rootfs.img`, `recovery.img`, `misc.img`, `userdata.img` e `update.img` |
| `output/out/media_out/` | diretórios `include/` e `lib/` de mídia, usados por compilações de aplicações |
| `output/out/app_out/` | artefatos de aplicações, mesclados ao rootfs em `bin/lib/share/etc/root` durante o empacotamento |
| `output/out/rootfs_glibc_rv1126b/` | diretório de empacotamento do rootfs; seu conteúdo é usado para criar `rootfs.img` |
| `output/out/sysdrv_out/` | artefatos do sysdrv |
| `IMAGE/` | arquivo criado por `./build.sh save` / `allsave` (imagens, patches e informações de compilação) |

> Uma extração limpa do SDK não contém `output/`; ele é gerado durante a compilação.

## Índice de Documentação (`docs/`)

O diretório `docs/` contém 90 arquivos PDF agrupados por idioma e tópico:

| Tópico | Documentos representativos | Quando lê-los |
| --- | --- | --- |
| `ipc/` | `Rockchip_RV1126B_Quick_Start_Linux_IPC_SDK_CN.pdf`, `Rockchip_Developer_Guide_Linux_RKAI_CN.pdf` | Primeiros passos e interfaces RKAI |
| `media/` | `Rockchip_Developer_Guide_Linux_Rockit_Runtime_CN.pdf`, `Rockchip_Developer_Guide_MPI_C_CN.pdf`, `..._Linux_AOV_CN.pdf`, `..._Linux_DVR_CN.pdf`, `..._EIS_CN.pdf` | Desenvolvimento de pipelines de vídeo |
| `isp/` | `Rockchip_Tuning_Guide_ISP35_CN.pdf`, `Rockchip_Developer_Guide_Camera_Driver_CN.pdf`, `Rockchip_Driver_Guide_VI_CN.pdf` | Ajuste de imagem e mudanças de sensor |
| `audio/` | `Rockchip_Developer_Guide_Linux_RV_Series_ACodec_CN.pdf`, `..._VQE_Introduction_CN.pdf`, `..._Microphone_Array_TEST_CN.pdf` | Desenvolvimento de áudio |
| `bsp/` | GPIO/I2C/SPI/PWM/USB/SDMMC/Thermal/Suspend/CAN_FD, etc. | Drivers de periféricos |
| `npu_iva/` | `Rockchip_Developer_Guide_ROCKIVA_SDK_CN.pdf` | Algoritmos de visão |
| `security/` | OTP, TEE, Crypto/HWRNG | Boot seguro e criptografia |
| `en/` root directory | `Rockchip_User_Guide_SDK_Application_And_Synchronization_EN.pdf`, `Rockchip_User_Guide_Bug_System_EN.pdf` | Abrir issues com a Rockchip |

A raiz do SDK também possui links simbólicos para documentos usados com frequência, como `Rockchip_RV1126B_Quick_Start_Linux_IPC_SDK_CN.pdf` e `Rockchip_RV1126B_Quick_Start_RT-Thread_MCU_CN.pdf`.

A documentação em nível de aplicação também está disponível em Markdown: `project/app/recamera_ipc/docs/Rockchip_Developer_Guide_Linux_RKIPC_CN.md` (Guia de Desenvolvimento RKIPC V1.7.6) e `project/app/rkai/rkai/doc/Rockchip_Developer_Guide_Linux_RKAI_CN.md`.

Consulte o [Glossário, Mapa da Documentação e Direitos Autorais](/pt-br/recamera_pro_sdk_reference/) para a lista completa.

## SDK de Aplicação vs. Código-Fonte do BSP

| Sua tarefa | O que você normalmente precisa | Onde encontrar neste pacote |
| --- | --- | --- |
| Compilar um aplicativo comum em C/C++ ou RKNN no dispositivo | Compilador cruzado, sysroot de destino pronto para uso, bibliotecas de desenvolvimento comuns e exemplos | Recomendamos o [reCamera Pro Cross-Compilation SDK](https://github.com/Seeed-Projects/recamera_pro_toolchain), que fornece uma toolchain e um sysroot selecionados para desenvolvimento de aplicações |
| Criar um aplicativo dentro do pacote de código-fonte completo | Toolchain, além de bibliotecas de mídia ou staging do Buildroot gerados conforme necessário | Comece com [Seu Primeiro App](/pt-br/recamera_pro_bsp_app_integration/); este pacote também é útil ao modificar o framework de build da aplicação ou investigar a integração do produto |
| Usar interfaces de vídeo, ISP, áudio ou NPU da Rockchip | Cabeçalhos de API, bibliotecas correspondentes, firmware/drivers de runtime e exemplos | O SDK fornece código-fonte, algumas bibliotecas pré-compiladas e exemplos. Uma extração limpa não possui `output/out/media_out/`; gere a mídia conforme necessário |
| Usar bibliotecas de terceiros fornecidas pelo Buildroot | Um sysroot e bibliotecas correspondentes ao rootfs de destino | Isto faz parte da integração completa de aplicação BSP; a área de staging do Buildroot geralmente fica disponível após compilar o rootfs |
| Modificar o kernel, drivers, DTS ou rootfs | Fontes do BSP, configuração e o fluxo de build completo | Fornecido por `sysdrv/`, `project/` e `./build.sh`; consulte [Build Completo de Firmware](/pt-br/recamera_pro_bsp_full_build/) |

Desenvolvedores de aplicações devem usar por padrão o SDK de compilação cruzada focado em aplicações. O pacote de código-fonte completo é para trabalho de produto e BSP em nível de código-fonte. Mesmo ao desenvolver uma aplicação dentro dele, compile apenas os componentes exigidos por suas dependências. Use o fluxo completo de BSP somente quando precisar produzir ou modificar o firmware completo.

## O Que Não Está Incluído

- Sem diretório `.repo/`: isto é um snapshot de código-fonte, portanto as instruções de `repo sync` em `readme_en.txt` não se aplicam.
- Sem `output/` ou `IMAGE/`: você deve gerar as imagens por conta própria.
- Sem RKNN-Toolkit2: a ferramenta de conversão ONNX-para-RKNN no PC requer um ambiente Python separado no host.
- Sem utilitário de gravação para Windows RKDevTool: `tools/` contém apenas ferramentas para Linux.

## Próximas Etapas

- Novo neste pacote? Comece por [Download e Extração](/pt-br/recamera_pro_bsp_download/).
- Pronto para compilar? Vá para [Configurar o Ambiente de Build](/pt-br/recamera_pro_bsp_build_environment/).

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>