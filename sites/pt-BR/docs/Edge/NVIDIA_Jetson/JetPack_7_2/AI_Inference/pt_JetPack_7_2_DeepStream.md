---
description: Instale e use o NVIDIA DeepStream 9.1 no JetPack 7.2, incluindo habilidades agentic, desenvolvimento de pipelines em linguagem natural, análise de vídeo, planejamento de memória e orientação de migração.
title: DeepStream no JetPack 7.2
keywords:
  - JetPack 7.2
  - DeepStream
  - GStreamer
  - TensorRT
  - análise de vídeo
image: https://files.seeedstudio.com/wiki/reComputer/Application/YOLOv8-DeepStream-TRT-Jetson/1.jpg
slug: /jetpack_7_2_deepstream
last_update:
  date: 07/31/2026
  author: Dayu
createdAt: '2026-07-31'
updatedAt: '2026-07-31'
---

# DeepStream no JetPack 7.2

NVIDIA DeepStream é o framework acelerado de análise de streams no ecossistema Jetson. Ele combina decodificação de vídeo por hardware, GStreamer, inferência TensorRT, rastreamento, metadados, transporte de mensagens e APIs de aplicação em pipelines de IA de borda com múltiplos streams.

Em **31 de julho de 2026**, o **DeepStream 9.1** é a versão atual e a primeira versão do DeepStream cuja tabela de plataformas Jetson aponta explicitamente para **JetPack 7.2 GA / Jetson Linux 39.2**. Ele oferece suporte tanto ao **Jetson Orin** quanto ao **Jetson Thor**.

<div align="center">
  <img width={1000} src="https://files.seeedstudio.com/wiki/DeepStream/demo-optimized.gif" />
</div>

:::info
A animação acima é reutilizada de uma aplicação DeepStream existente da Seeed para ilustrar um pipeline de análise de múltiplos objetos. Reconstrua a aplicação, os engines TensorRT, plugins e configuração para o DeepStream 9.1 antes de usar o fluxo de trabalho no JetPack 7.2.
:::

## DeepStream 9.1 e baseline do JetPack 7.2

| Componente | Baseline DeepStream no JetPack 7.2 |
| --- | --- |
| DeepStream | 9.1 |
| Jetson Linux | 39.2 GA |
| JetPack | 7.2 GA |
| CUDA | 13.2 |
| TensorRT | 10.16.1.7 |
| cuDNN | 9.20.0.46 |
| GStreamer | 1.24.2 |
| OpenCV | 4.8.0 |
| Plataformas Jetson compatíveis | Jetson Orin e Jetson Thor |
| Pacote nativo Jetson | `deepstream-9.1_9.1.0-1_arm64.deb` |

:::warning
Os pacotes Jetson do DeepStream 9.0 foram baseados no JetPack 7.1 / Jetson Linux 38.4. Use o DeepStream 9.1 para um alvo JetPack 7.2. Não instale um pacote Jetson mais antigo apenas porque a versão principal parece próxima.
:::

## Por que o DeepStream 9.1 é importante

DeepStream 9.1 é mais do que uma atualização de compatibilidade. A versão direciona o desenvolvimento de aplicações para um fluxo de trabalho assistido por agente, ao mesmo tempo em que continua a mudança do DeepStream 9.x em direção ao Service Maker, análises avançadas com múltiplas câmeras, integração com modelos de base e serviços de produção observáveis.

### Agente de codificação em linguagem natural

O repositório oficial do DeepStream inclui um **DeepStream Coding Agent**. Um desenvolvedor pode descrever um pipeline em linguagem natural, e o agente pode gerar uma aplicação DeepStream, montar arquivos de configuração e código-fonte, compilar o projeto, executá-lo em um contêiner e ajudar a diagnosticar erros.

Exemplo de solicitação:

```text
Create a DeepStream 9.1 application for JetPack 7.2 that reads four RTSP streams,
runs a PeopleNet-compatible detector, tracks people, publishes entry events,
and saves a short clip when a person enters the restricted zone.
```

O Coding Agent muda a forma como as aplicações são criadas; ele não elimina a necessidade de validar compatibilidade de modelos, capacidade de streams, uso de memória e comportamento da aplicação no Jetson de destino.

### Habilidades agentic

DeepStream 9.1 fornece acesso a **13 habilidades agentic** por meio do repositório DeepStream. As habilidades oficiais cobrem tarefas como:

- criar e executar aplicações DeepStream Service Maker;
- inspecionar e depurar pipelines;
- configurar rastreamento 3D multi-view;
- realizar calibração automática de múltiplas câmeras;
- criar configurações de inferência a partir de modelos ONNX ou TAO compatíveis;
- gerar código de aplicação e executar exemplos conteinerizados.

Dois novos fluxos de trabalho importantes são:

- **habilidade MV3DT**: ajuda a configurar rastreamento 3D multi-view entre câmeras calibradas;
- **habilidade AutoMagicCalib**: auxilia na calibração de câmeras para implantações de análise com múltiplas câmeras.

### Inference Builder MCP

O servidor Inference Builder MCP pode inspecionar um modelo compatível e gerar artefatos de inferência DeepStream. A NVIDIA documenta suporte para caminhos de modelos ONNX e TAO, incluindo fluxos de trabalho com PeopleNet, YOLOv8, YOLOv11, YOLOE e Grounding DINO.

Trate a configuração de inferência gerada como um ponto de partida. Confirme pré-processamento, nomes e dimensões de tensores, arquivos de rótulos, comportamento do parser, precisão e saída do engine TensorRT antes do uso em produção.

### Recursos do DeepStream 9.x disponíveis para aplicações 9.1

DeepStream 9.1 também mantém os principais recursos do DeepStream 9.x:

- APIs Flow e Graph do Service Maker;
- desenvolvimento Service Maker em Python;
- MaskTracker para rastreamento com reconhecimento de segmentação;
- MediaExtractor para clipes orientados a eventos e captura de mídia;
- rastreamento 3D multi-view MV3DT;
- estimativa de pose 3D e exemplos Sparse4D;
- gerenciamento dinâmico de streams por meio de APIs REST;
- observabilidade orientada a OpenTelemetry e Prometheus;
- integração de inferência Triton e TensorRT;
- caminhos de aplicação em C/C++, Python, GStreamer e contêineres.

Para novas aplicações em Python, a NVIDIA recomenda `pyservicemaker`; os bindings Python `pyds` mais antigos estão obsoletos. O Graph Composer também está obsoleto, e o suporte a OpenCV é desativado por padrão, a menos que os componentes relevantes sejam recompilados com OpenCV habilitado.

## Dois tipos de integração com linguagem natural

Ao discutir DeepStream e linguagem natural, diferencie **criação de pipelines** de **compreensão de vídeo**.

### 1. Linguagem natural para construir pipelines

O DeepStream Coding Agent e as habilidades traduzem a intenção de desenvolvimento em código de aplicação e configuração. Esse caminho é diretamente relevante para o JetPack 7.2 porque a aplicação gerada pode ter como alvo um contêiner ou pacote DeepStream 9.1 para Jetson.

Boas solicitações especificam:

- que o alvo é JetPack 7.2 e DeepStream 9.1;
- Jetson Orin ou Jetson Thor;
- tipos de entrada e quantidade de streams;
- o modelo e a precisão;
- requisitos de rastreador, saída, eventos e mensagens;
- restrições de memória, latência e energia.

### 2. Linguagem natural para entender vídeo

DeepStream 9.1 documenta um plugin `nvvllmvlm` que conecta streams de vídeo a modelos de linguagem ou visão-linguagem de grande porte. O plugin oferece suporte a:

- famílias de modelos Cosmos Reason 2 e Cosmos Nemotron 12B;
- prompts em linguagem natural por stream;
- raciocínio sobre vídeo baseado em segmentos de tempo;
- inferência assíncrona;
- processamento multi-stream;
- respostas em texto anexadas aos metadados do DeepStream.

Exemplos de perguntas incluem:

```text
Is there smoke or fire in this stream?
Is anyone entering the restricted area without protective equipment?
Summarize the activity around the loading bay during the last segment.
```

:::warning Limitação atual do Jetson
A documentação do `nvvllmvlm` no DeepStream 9.1 atualmente lista o plugin apenas para **GPUs discretas x86**, com aproximadamente **40 GB de memória de GPU** exigidos para os exemplos Cosmos documentados. Não apresente esse plugin como um caminho nativo para Jetson Orin ou Jetson Thor até que a NVIDIA documente suporte ao Jetson e o modelo-alvo caiba na memória unificada disponível.
:::

### Arquitetura híbrida recomendada para JetPack 7.2

O JetPack 7.2 ainda pode participar de um sistema de vídeo em linguagem natural ao separar o processamento em tempo real na borda do raciocínio com modelos grandes:

```text
Camera / RTSP streams
        |
        v
Jetson + JetPack 7.2 + DeepStream 9.1
decode -> detection -> tracking -> event filtering -> clip selection
        |
        +---- structured metadata ----+
        |                             |
        +---- selected video clips ---+--> x86 DeepStream nvvllmvlm
                                      or remote VLM service
                                                |
                                                v
                               natural-language answer / alert / summary
```

Esse design mantém a decodificação contínua, filtragem e análises de baixa latência no Jetson, enquanto envia apenas clipes ou eventos relevantes para o serviço VLM maior. Ele também reduz a largura de banda e evita carregar um modelo de linguagem muito grande ao lado de cada pipeline de borda.

## Opções de instalação

DeepStream 9.1 fornece três caminhos práticos de desenvolvimento no JetPack 7.2.

### Opção A: Pacote nativo Jetson

Verifique primeiro o JetPack 7.2:

```bash
cat /etc/nv_tegra_release
```

A saída deve identificar o Jetson Linux release 39.2. Instale os pré-requisitos do DeepStream documentados pela NVIDIA:

```bash
sudo apt update
sudo apt install -y \
  libssl3 \
  libssl-dev \
  libcurl4-openssl-dev \
  libgstreamer1.0-0 \
  gstreamer1.0-tools \
  gstreamer1.0-plugins-good \
  gstreamer1.0-plugins-bad \
  gstreamer1.0-plugins-ugly \
  gstreamer1.0-libav \
  libgstreamer-plugins-base1.0-dev \
  libgstrtspserver-1.0-0 \
  libjansson4 \
  libyaml-cpp-dev \
  libmosquitto1
```

Baixe `deepstream-9.1_9.1.0-1_arm64.deb` nos assets oficiais de release do NVIDIA DeepStream no GitHub e, em seguida, instale-o:

```bash
cd ~/Downloads
sudo apt install ./deepstream-9.1_9.1.0-1_arm64.deb
sudo ldconfig
```

Verifique a instalação:

```bash
deepstream-app --version-all
```

### Opção B: Contêiner NVIDIA

Os contêineres DeepStream são publicados no repositório unificado `deepstream`. O repositório antigo `deepstream-l4t` não é mais o caminho de contêiner atual.

Para um contêiner de amostra gráfico:

```bash
xhost +local:docker

sudo docker run --rm -it \
  --runtime nvidia \
  --network host \
  -e DISPLAY="$DISPLAY" \
  -v /tmp/.X11-unix:/tmp/.X11-unix \
  nvcr.io/nvidia/deepstream:9.1-triton-multiarch
```

Para uma implantação headless, omita o mount de display e use uma configuração que grave metadados, arquivos, RTSP ou mensagens em vez de abrir uma janela.

### Opção C: Monorepo DeepStream e fluxo de trabalho agentic

Clone o repositório oficial quando você precisar do código-fonte do Service Maker, habilidades, exemplos, integração com o coding agent ou plugins reutilizáveis:

```bash
git clone https://github.com/NVIDIA/DeepStream.git
cd DeepStream
```

Em um ambiente de coding agent compatível, siga o fluxo de trabalho `/install-coding-agent` do repositório. Mantenha o trabalho gerado sob controle de versão e revise cada comando antes que ele modifique o Jetson ou inicie um contêiner privilegiado.

## Validar o primeiro pipeline

Após instalar o DeepStream, liste as configurações de exemplo fornecidas com o pacote:

```bash
find /opt/nvidia/deepstream/deepstream-9.1/samples/configs \
  -maxdepth 3 -type f -name '*.txt' | sort | head -30
```

Comece com um arquivo local ou uma câmera antes de habilitar múltiplos streams RTSP. Uma validação básica deve confirmar:

1. a decodificação por hardware é bem-sucedida;
2. o TensorRT carrega ou reconstrói o engine correto;
3. os metadados de inferência aparecem;
4. o rastreador produz IDs estáveis;
5. o coletor de saída é executado sem acumular latência;
6. a memória permanece estável por pelo menos 30 minutos.

## Regras de migração para JetPack 7.2

### Reconstruir mecanismos TensorRT

Não copie um mecanismo TensorRT serializado do JetPack 6.x para o DeepStream 9.1. Reconstrua-o com o runtime TensorRT 10.16.1.7 do JetPack 7.2 e a arquitetura de GPU de destino.

### Reconstruir analisadores e plugins personalizados

Recompile analisadores personalizados `nvdsinfer`, plugins GStreamer, extensões CUDA e componentes Service Maker com os cabeçalhos do DeepStream 9.1 e as bibliotecas do JetPack 7.2.

### Revisar chaves de configuração

Compare cada configuração de aplicação com o guia de migração do DeepStream 9.1. Preste atenção especial a:

- comportamento do `nvstreammux` e dimensões de lote;
- metadados de tensores de inferência e configuração do analisador;
- bibliotecas de rastreador e configuração do rastreador;
- tratamento dinâmico de streams controlado por REST;
- esquemas de message-converter e message-broker;
- alterações na API de binding em Python ou Service Maker.

### Revalidar caminhos de câmera e codec

O JetPack 7.2 migra para o kernel Linux 6.8 e uma pilha multimídia mais recente. Revalide caminhos CSI, GMSL, USB, RTSP, decodificador, codificador e zero-copy em vez de presumir que um pipeline GStreamer do JetPack 6.x permanece inalterado.

## Design DeepStream eficiente em memória

Pipelines DeepStream podem se tornar limitados por memória quando combinam muitos decodificadores, grandes lotes, múltiplos mecanismos TensorRT, quadros de alta resolução, rastreadores, gravação de clipes e um serviço LLM ou VLM.

Use o [guia de Otimização de Memória do JetPack 7.2](/pt-br/jetpack_7_2_memory_optimization/) junto com estes controles em nível de pipeline:

- comece com um stream e aumente a contagem de streams gradualmente;
- combine o tamanho de lote do `nvstreammux` com as fontes realmente ativas;
- use a menor precisão de modelo que atenda aos requisitos de acurácia;
- evite carregar mecanismos duplicados em processos de aplicação separados;
- reduza a resolução de entrada antes da inferência quando o caso de uso permitir;
- use intervalos de inferência para cargas de trabalho que não exigem inferência em cada quadro;
- selecione um rastreador que corresponda ao orçamento de acurácia e memória;
- mantenha apenas clipes de eventos em vez de gravar cada quadro decodificado;
- envie metadados filtrados ou clipes para um VLM remoto em vez de carregar em conjunto um VLM muito grande no dispositivo de borda.

Meça memória ociosa, memória de carregamento de mecanismo, memória de pico de lote e memória em estado estacionário com `tegrastats`. Não otimize apenas para quadros por segundo; monitore latência, quadros descartados, crescimento de filas, temperatura e potência da placa.

O DeepStream 9.1 documenta uma solução alternativa para picos de memória no Ubuntu 24.04 para aplicações que adicionam e removem streams repetidamente por meio da API REST:

```bash
export MALLOC_ARENA_MAX=1
export MALLOC_MMAP_MAX_=0
export MALLOC_MMAP_THRESHOLD_=131072
export MALLOC_TRIM_THRESHOLD_=131072
```

Aplique essas variáveis apenas ao processo de aplicação afetado e valide o comportamento de longa duração antes de torná-las parte de um ambiente de sistema inteiro.

## Projetos sugeridos para JetPack 7.2

### Gerador de pipeline em linguagem natural

Use o Coding Agent para gerar uma aplicação Service Maker a partir de um requisito escrito, depois valide e versiona o código gerado.

### Rastreamento 3D com múltiplas câmeras

Combine as skills AutoMagicCalib e MV3DT para rastreamento calibrado com múltiplas câmeras. Comece com arquivos gravados sincronizados antes de passar para câmeras ao vivo.

### Raciocínio de vídeo da borda para a nuvem

Execute decodificação, detecção, rastreamento e seleção de clipes no Jetson. Envie eventos selecionados para um serviço DeepStream `nvvllmvlm` em x86 para respostas e resumos em linguagem natural.

### Monitoramento industrial ciente de memória

Estenda o fluxo de trabalho [Monitoramento de Visão Industrial no JetPack 7.2](/pt-br/industrial_vision_monitoring_on_industrial_bk/) com batching, rastreamento, clipes de eventos e metadados estruturados do DeepStream enquanto monitora a memória unificada.

## Lista de verificação para produção

- [ ] O Jetson reporta JetPack 7.2 / Jetson Linux 39.2.
- [ ] O DeepStream reporta a versão 9.1.
- [ ] Todos os mecanismos TensorRT foram reconstruídos na versão de destino.
- [ ] Analisadores e plugins personalizados compilam com o DeepStream 9.1.
- [ ] Caminhos de câmera, RTSP, decodificador, codificador e zero-copy são validados.
- [ ] O comportamento de adicionar/remover streams e reconectar é testado.
- [ ] A memória permanece estável durante a carga máxima de streams e eventos.
- [ ] Latência, FPS, quadros descartados, potência e térmicas são registrados.
- [ ] O raciocínio de vídeo em linguagem natural é executado em um backend compatível.
- [ ] O código gerado por agentes é revisado e commitado antes da implantação.

## Referências oficiais da NVIDIA

- [Notas de Lançamento do DeepStream 9.1](https://docs.nvidia.com/metropolis/deepstream/9.1/text/DS_Release_notes.html)
- [Introdução ao DeepStream](https://developer.nvidia.com/deepstream-getting-started)
- [Instalação do DeepStream 9.1 no Jetson](https://docs.nvidia.com/metropolis/deepstream/9.1/text/DS_Installation.html)
- [Contêineres Docker do DeepStream](https://docs.nvidia.com/metropolis/deepstream/9.1/text/DS_docker_containers.html)
- [Repositório GitHub do DeepStream](https://github.com/NVIDIA/DeepStream)
- [Referência de Agentic Skills do DeepStream](https://docs.nvidia.com/metropolis/deepstream/9.1/text/AgenticSkillsReference.html)
- [Inference Builder MCP Server](https://docs.nvidia.com/metropolis/deepstream/9.1/text/InferenceBuilder_MCP_Server.html)
- [Plugin de Inferência LLM/VLM](https://docs.nvidia.com/metropolis/deepstream/9.1/text/DS_plugin_gst-nvvllmvlm.html)

## Suporte técnico e discussão de produtos

Obrigado por escolher produtos Seeed Studio! Para suporte técnico e discussão de produtos, use os seguintes canais:

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>