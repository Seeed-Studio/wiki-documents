---
description: Configure o ambiente de cross-compilação do SDK da reCamera Pro e veja, passo a passo, como compilar e implantar um aplicativo nativo mínimo, usando o projeto Visual Wake + STT como exemplo prático.
title: SDK e Aplicativo Mínimo
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - cross-compilation
  - RKNN
  - GStreamer
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_sdk_setup
sku: 10003420
sidebar_position: 2
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_sdk_setup/
---

# SDK e Aplicativo Mínimo

Esta página explica como preparar um ambiente host para compilar aplicativos nativos da reCamera Pro e como funciona um ciclo completo de compilação e implantação. As etapas são demonstradas com o projeto [Visual Wake and Offline Speech Recognition](/pt-br/recamera_pro_visual_wake_stt/), um aplicativo real de RKNN + GStreamer que roda inteiramente no dispositivo.

Para o contrato geral de desenvolvimento (versões de toolchain, formatos de modelo, linguagens), consulte [Choose a Development Path](/pt-br/recamera_pro_dev_path/). Se você preferir que um agente de codificação com IA conduza esse fluxo de trabalho, consulte [Develop with AI Coding Agents](/pt-br/recamera_pro_development_cpp_skill/).

## Pré-requisitos

- Uma reCamera Pro (RV1126B, aarch64) acessível via Ethernet virtual USB (padrão `192.168.42.1`) ou LAN
- Um computador Linux, ou um computador Windows com WSL, para conversão de modelos e cross-compilação
- Um SDK da reCamera Pro funcional no host
- RKNN-Toolkit2 2.3.2 e RKNN Runtime 2.3.2 — não misture versões arbitrárias de RKNN Runtime

{/* TODO(verify): documentar onde baixar o SDK da reCamera Pro, seu layout de diretórios esperado e como verificar a versão do SDK; o projeto de origem apenas faz referência a um caminho local de SDK */}

## Configurar o Caminho do SDK

Scripts de compilação em projetos da reCamera Pro normalmente localizam o SDK por meio de uma variável de ambiente. Para o projeto Visual Wake, `scripts/build_recamera.sh` procura o SDK em um caminho local padrão; aponte-o para o seu próprio checkout do SDK em vez disso:

```bash
export RECAMERA_PRO_SDK=/absolute/path/to/recamera-pro-sdk
```

O script de compilação também valida `librknnrt.so`. Se o seu SDK ou runtime o armazenar em outro lugar, atualize o caminho `qualified_rknnrt` no script para um runtime RKNN 2.3.2 verificado, mantendo a etapa de validação de checksum.

## Obter um Projeto e Fazer a Cross-Compilação

Clone o repositório do projeto e execute seu script de cross-build a partir da raiz do projeto:

```bash
git clone https://github.com/yyling0101-a11y/recamera_pro_face_stt.git
cd recamera_pro_face_stt
bash scripts/build_recamera.sh
```

O script valida o SDK, carrega seu ambiente de compilação e produz um pacote de implantação:

```text
build-recamera/deploy/
├── visual_wake_app
├── models/
│   ├── scrfd_500m_640_fp16.rknn
│   ├── pfld_98_112_fp16.rknn
│   └── stt/                         # encoder, decoder, joiner, and vocabulary
└── web/dashboard.html
```

Um aplicativo mínimo próprio segue o mesmo formato: um executável aarch64, seus arquivos de modelo RKNN e quaisquer recursos web ou de configuração, todos organizados em um único diretório.

## Implantar no Dispositivo

Copie o **conteúdo** do diretório de implantação para um único diretório no dispositivo, depois conecte via SSH e torne o binário executável:

```bash
scp -r build-recamera/deploy/* root@192.168.42.1:/userdata/visual-wake/
ssh root@192.168.42.1
cd /userdata/visual-wake
chmod +x visual_wake_app
```

:::tip
Mantenha os diretórios `models/` e `web/` em seus caminhos relativos. O aplicativo carrega seus recursos usando esses caminhos relativos padrão.
:::

## Executar e Verificar

Execute o aplicativo a partir de seu diretório de implantação:

```bash
./visual_wake_app
```

Durante a operação normal, eventos acionáveis aparecem no terminal:

```text
VISUAL_WAKE track=1
STT_RESULT 打开灯
```

Use `--help` para listar todas as opções de runtime. Por exemplo, este comando verifica apenas o pipeline visual e desativa os serviços de rede:

```bash
./visual_wake_app --no-stt --no-rtsp --no-web --debug
```

Uma implantação bem-sucedida significa: o binário inicia no dispositivo, carrega seus modelos RKNN, abre a câmera e imprime eventos reconhecíveis ou saída de inferência.

## Problemas Comuns de Ambiente

| Problema | Possível causa | Solução |
| --- | --- | --- |
| A compilação não encontra OpenCV ou RKNN | O ambiente do SDK está ausente ou o runtime é incompatível | Verifique `RECAMERA_PRO_SDK`, carregue o `env.sh` do SDK e use RKNN 2.3.2 |
| Os arquivos de modelo não podem ser encontrados em tempo de execução | O layout de implantação não foi preservado | Confirme que `models/` e `web/` existem no diretório de execução |
| O executável é x86-64 | O compilador do host foi usado em vez do compilador cruzado aarch64 | Recompile com um compilador compatível com o alvo e o sysroot da reCamera Pro |
| O binário não consegue carregar uma biblioteca | Sysroot, ABI ou caminho de busca do runtime não correspondem à placa | Inspecione as dependências ELF e compare cada biblioteca de destino com o dispositivo |

{/* TODO(verify): adicionar saída esperada de um comando de verificação de versão (versão do SDK, versão de librknnrt.so no dispositivo) para que os usuários possam confirmar a compatibilidade entre host e dispositivo antes da implantação */}

## Próximas Etapas

- [Camera, Audio, and Inference Development](/pt-br/recamera_pro_media_dev/) — detalhes de captura de câmera com GStreamer, áudio ALSA e saída RTSP
- [Develop with AI Coding Agents](/pt-br/recamera_pro_development_cpp_skill/) — automatize a conversão de modelos e compilações nativas com um agente de IA
- [Visual Wake and Offline Speech Recognition](/pt-br/recamera_pro_visual_wake_stt/) — o exemplo completo utilizado nesta página

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diversos tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
