---
description: Este wiki mostra como implantar JoyAI-VL-Interaction no NVIDIA Jetson AGX Thor, com foco na pilha mínima de interação vídeo-linguagem em tempo real para implantação de borda com GPU única.
title: Implantar JoyAI-VL-Interaction no Jetson Thor
keywords:
  - Jetson Thor
  - JoyAI
  - VLM
  - Streaming
  - Generative AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /deploy_joyai_vl_interaction_on_jetson_thor
sku: 100060965
last_update:
  date: 07/07/2026
  author: Youjiang
createdAt: '2026-07-07'
updatedAt: '2026-07-07'
url: https://wiki.seeedstudio.com/pt-br/deploy_joyai_vl_interaction_on_jetson_thor/
---

# Implantar JoyAI-VL-Interaction no Jetson Thor

## Introdução

[JoyAI-VL-Interaction](https://github.com/jd-opensource/JoyAI-VL-Interaction) é um sistema aberto de interação vídeo-linguagem em tempo real. Ele combina um backend de VLM em streaming, uma WebUI baseada em navegador, serviços opcionais de ASR/TTS e um pipeline de memória de longo contexto para que o modelo possa observar uma cena ao vivo e responder no momento certo.

Em **7 de julho de 2026**, o repositório upstream JoyAI-VL-Interaction declara que foi testado em **GPUs NVIDIA da série Hopper**. Este wiki foca em um caminho prático de adaptação para o **Jetson AGX Thor**: implantar primeiro a **pilha mínima** (`webinfer + webui`) na única GPU do Thor e, em seguida, estender para serviços de áudio somente depois que o pipeline principal estiver estável.

<div align="center">
    <img width={900}
     src="https://raw.githubusercontent.com/jd-opensource/JoyAI-VL-Interaction/main/img/joyvl-system-architecture.png" />
</div>

## Pré-requisitos

- 1 x Kit de Desenvolvimento NVIDIA Jetson AGX Thor
- 1 x câmera USB ou uma fonte de stream RTSP
- Teclado, mouse, monitor e conexão de rede
- Pelo menos 30 GB de armazenamento livre para ambientes Python, pesos de modelos e logs

:::note
Este guia assume que seu sistema Jetson Thor já está gravado, inicializa normalmente e tem acesso à Internet.
:::

<div class="table-center">
<table style={{ textAlign: 'center' }}>
    <tr>
        <th> Kit de Desenvolvimento NVIDIA Jetson AGX Thor </th>
        <th> Câmera USB </th>
    </tr>
    <tr>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image-kit-3.png" style={{width:400, height:'auto'}}/>
            </div>
        </td>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-114090066--x10-usb-camera.jpg" style={{width:400, height:'auto'}}/>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-Developer-Kit-p-9965.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora </font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/X10-USB-wired-camera-p-6506.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora </font></span></strong>
                </a>
            </div>
        </td>
    </tr>
</table>
</div>

## Primeiros Passos

### Etapa 1. Preparar o sistema Jetson Thor

Abra um terminal no Jetson Thor e instale os pacotes de sistema necessários:

```bash
sudo apt update
sudo apt install -y git git-lfs curl ffmpeg python3-pip python3.12-venv
git lfs install
```

Para melhor desempenho de inferência no Jetson, altere o dispositivo para um modo de energia de alto desempenho:

```bash
sudo nvpmodel -m 0
sudo jetson_clocks
```

:::info
JoyAI-VL-Interaction é padronizado em Python `3.12`, portanto este guia mantém a mesma versão no Thor.
:::

### Etapa 2. Instalar `uv` e o CLI do Hugging Face

Os scripts de instalação upstream usam [`uv`](https://docs.astral.sh/uv/) e o script de download de modelos espera o comando `hf`.

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
source $HOME/.local/bin/env

uv tool install "huggingface_hub[cli]"
hf --version
```

Se `hf` ainda não for encontrado, reabra o terminal ou execute:

```bash
export PATH="$HOME/.local/bin:$PATH"
```

### Etapa 3. Clonar o repositório JoyAI-VL-Interaction

```bash
git clone https://github.com/jd-opensource/JoyAI-VL-Interaction.git
cd JoyAI-VL-Interaction
```

### Etapa 4. Instalar o runtime

Instale primeiro apenas o ambiente principal de WebUI e inferência em streaming:

```bash
./install/install.sh --with-all
```

Este script cria o ambiente virtual compartilhado em `services/.venv` e instala o runtime fixado `vllm==0.22.0` exigido pelo projeto.

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/joyai_vl_interaction/install_runtime_env.jpg" />
</div>

:::note
Se `vllm==0.22.0` falhar ao instalar no Jetson ARM64, não continue com o fluxo padrão baseado em wheel. Nesse caso, mude primeiro para o caminho oficial de build ARM64/origem do vLLM e depois retorne a este guia.
:::

### Etapa 5. Baixar os pesos do modelo

Aqui seguimos o README do Github para baixar todos os pesos de modelos:

```bash
./install/download-models.sh --all
```

Por padrão, os modelos são baixados para:

- `/tmp/models/JoyAI-VL-Interaction-Preview`
- `/tmp/models/Qwen3-VL-4B-Instruct`
- `/tmp/models/Qwen3-ASR-1.7B`
- `/tmp/models/Qwen3-TTS-12Hz-1.7B-CustomVoice`

### Etapa 6. Iniciar a pilha mínima JoyAI no Thor

O layout padrão de GPU upstream assume múltiplas GPUs:

- modelo principal na GPU `0`
- modelo de resumo na GPU `1`
- ASR/TTS opcionais na GPU `2`

Jetson Thor é uma plataforma de **GPU única**, então precisamos colocar tanto o modelo principal quanto o modelo de resumo na `GPU 0` e começar com configurações conservadoras de memória.

Aqui, precisamos abrir quatro terminais no Jetson e executar os seguintes comandos separadamente.

- Terminal1:
    ```bash
    source /home/seeed/JoyAI-VL-Interaction/services/.venv/bin/activate
    cd services/webinfer
    MAIN_GPU=0 MAIN_GPU_MEMORY_UTILIZATION=0.6 bash scripts/run.sh models
    ```
- Terminal2:
    ```bash
    source /home/seeed/JoyAI-VL-Interaction/services/.venv/bin/activate
    cd services/webinfer
    SUMMARY_GPU=0 SUMMARY_GPU_MEMORY_UTILIZATION=0.3 bash scripts/run.sh summary
    ```

:::danger
Observe que você deve esperar até que o Terminal 2 tenha iniciado completamente antes de continuar a executar os comandos no Terminal 3.

Você pode verificar os logs de runtime no Terminal 2 usando o seguinte comando:

`tail -f /home/seeed/JoyAI-VL-Interaction/services/webinfer/summary_vllm_logs/vllm_8065.log`
:::

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/joyai_vl_interaction/lunch.jpg" />
</div>

- Terminal3:
    ```bash
    source /home/seeed/JoyAI-VL-Interaction/services/.venv/bin/activate
    cd services/webinfer
    bash scripts/run.sh adapter
    ```
- Terminal4:
    ```bash
    source /home/seeed/JoyAI-VL-Interaction/services/.venv/bin/activate
    cd services/webui 
    bash scripts/start_server.sh
    ```

:::info
Esses valores são um ponto de partida orientado ao Thor para implantação com GPU única. Se o serviço iniciar de forma confiável, você pode aumentar gradualmente a utilização de memória da GPU. Se o vLLM relatar erros de OOM, reduza ainda mais esses valores.
:::

Quando a inicialização for bem-sucedida, o script inicia:

- a API principal VLM compatível com OpenAI na porta `7060`
- o modelo de resumo na porta `8065`
- o adaptador de streaming na porta `8070`
- a WebUI na porta `8099`

### Etapa 7. Abrir a WebUI

Abra um navegador no Jetson Thor e acesse:

```text
https://<jetson-thor-ip>:8099
```

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/joyai_vl_interaction/webui.png" />
</div>

A WebUI usa um certificado autoassinado por padrão, portanto seu navegador pode mostrar um aviso de certificado na primeira visita. Aceite o aviso e continue.

Você pode então:

- selecionar uma webcam USB no navegador
- inserir uma URL de stream RTSP
- iniciar a interação de vídeo em tempo real com JoyAI-VL-Interaction

## Verificar a Implantação

Abra outro terminal e execute as seguintes verificações de integridade:

```bash
curl http://127.0.0.1:7060/v1/models
curl http://127.0.0.1:8065/v1/models
curl http://127.0.0.1:8070/health
```

Se todos os serviços estiverem funcionando corretamente, o frontend da WebUI deverá conseguir se conectar ao adaptador de streaming em:

```text
http://127.0.0.1:8070/v1
```

## Demonstração

<div class="video-container">
    <iframe width="800" height="450" src="https://www.youtube.com/embed/iyxkqZrzvHs" title="deploy joyai vl interaction on jetson thor" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


## Solução de Problemas

### 1. `hf: command not found`

Certifique-se de que o caminho local do binário está carregado:

```bash
source $HOME/.local/bin/env
export PATH="$HOME/.local/bin:$PATH"
```

### 2. `vllm==0.22.0` ou `vllm-omni==0.22.0` falha em ARM64

O projeto upstream é projetado em torno de serviços baseados em vLLM. Se a instalação padrão via pip ou `uv` falhar no Jetson ARM64, compile `vllm` ou `vllm-omni` a partir do código-fonte ou mude para um contêiner CUDA ARM64 que já inclua o runtime correspondente.

### 3. A WebUI abre, mas a inferência retorna `502`

Isso geralmente significa que o frontend do navegador está ativo, mas os serviços de modelo de backend ainda não estão prontos. Verifique novamente:

```bash
curl http://127.0.0.1:7060/v1/models
curl http://127.0.0.1:8065/v1/models
curl http://127.0.0.1:8070/health
```

## Referências

- [Repositório GitHub JoyAI-VL-Interaction](https://github.com/jd-opensource/JoyAI-VL-Interaction)
- [JoyAI-VL-Interaction Primeiros Passos](https://github.com/jd-opensource/JoyAI-VL-Interaction/blob/main/doc/getting_started.md)
- [JoyAI-VL-Interaction WebInfer README](https://github.com/jd-opensource/JoyAI-VL-Interaction/blob/main/services/webinfer/README.md)
- [Guia de Instalação do vLLM](https://docs.vllm.ai/en/stable/getting_started/installation/gpu.html)
- [Repositório vLLM Omni](https://github.com/vllm-project/vllm-omni)

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
