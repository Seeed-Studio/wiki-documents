---
description: Implante um Streaming Vision Agent no NVIDIA Jetson com memória multimodal contínua dupla Qwen3-VL-2B e interface Ask ao vivo
title: Streaming Vision Agent no Jetson
tags:
  - Implantação de modelo de IA
  - VLM
  - Visão Computacional
  - reComputer
  - Jetson
  - Memória Multimodal
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/computer_vision.webp
sku: 100020039, 100094378
slug: /streaming_vision_agent_on_jetson
last_update:
  date: 08/03/2026
  author: HaoChen
updatedAt: '2026-08-03'
---

# Streaming Vision Agent no Jetson

## Introdução

A maioria dos demos de visão no Jetson param em detecção de **quadro único** (cada quadro é independente) ou entendimento de **clipe curto offline** (executar um VLM uma vez em alguns segundos de vídeo gravado). Nenhum deles mantém estado ao longo de um stream contínuo ao vivo, então depois que um objeto sai de cena — ou depois que o clipe termina — normalmente você não consegue perguntar “o que acabou de acontecer há pouco?” com evidências. Um **Streaming Vision Agent** mantém uma curta memória multimodal **contínua online** na borda — embeddings visuais, eventos episódicos e fatos semânticos — e responde perguntas com quadros e clipes de evidência enquanto a câmera ainda está rodando.

Este wiki implanta um demo em tempo real em dispositivos Jetson da Seeed (verificado em **reComputer Mini J5012 · JetPack 7.2**). Uma câmera USB alimenta uma interface no navegador; duas instâncias independentes de **Qwen3-VL-2B** lidam com reconhecimento e Ask para que as respostas não bloqueiem as gravações de memória em segundo plano.

:::tip
O design é **inspirado por** as ideias de memória multimodal do [WorldMM](https://worldmm.github.io) (CVPR 2026). Este demo tem como alvo uma **janela contínua online** no Jetson — **não** é uma reprodução dos benchmarks offline EgoLife do artigo. Veja [Inspiration & acknowledgments](#inspiration--acknowledgments).
:::

<div align="center">
    <img width={700}
     src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/5/-/5-100020039-recomputer-mini-j501---carrier-board-for-jetson-agx-orin.jpg" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-J501-Carrier-Board-for-Jetson-AGX-Orin-p-6606.html" target="_blank" rel="noopener noreferrer">
<strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
</a></div>

Verificado em **reComputer Mini (Jetson AGX Orin 64GB)** com **JetPack 7.2** (L4T R39.2.0).

## Visão geral

| Camada | Função |
| --- | --- |
| Memória visual | Embeddings de quadro VLM2Vec + evidência JPEG (~a cada 5 s) |
| Memória episódica | Qwen3-VL-2B **#1** — eventos de aparecer / mover / desaparecer (~a cada 45 s) |
| Fatos semânticos | Estado de entidade (`is_at` / `absent_from` / `usually_at`) + linha do tempo |
| Ask | Recupera memória → Qwen3-VL-2B **#2** responde com trajetória + evidência |

Abra `http://<jetson-ip>:8790` para vídeo ao vivo, memória contínua e Ask.

```text
Camera ──► visual @ ~5s (VLM2Vec)
       └──► episodic @ ~45s (Qwen3-VL-2B recognition)
Ask   ──► retrieve memory ──► Qwen3-VL-2B answer
```

## Hardware compatível

| Item | Configuração |
| --- | --- |
| **Dispositivos** | [reComputer J501 Mini](https://www.seeedstudio.com/reComputer-Mini-J501-Carrier-Board-for-Jetson-AGX-Orin-p-6606.html) |
| **Verificado** | reComputer J501 Mini · **JetPack 7.2** (L4T 39.2.0) |
| **RAM / Disco** | 64 GB de RAM recomendados · ≥50 GB de disco livre para modelos + venv |
| **Câmera** | USB UVC / V4L2 (`/dev/video0`) |

## Instalação

### 1. Clonar o repositório

```bash
git clone https://github.com/xbs0325/Streaming-Vision-Agent-Orin.git
cd Streaming-Vision-Agent-Orin
```

### 2. Criar o ambiente Python no Jetson

```bash
bash script/jetson_setup.sh
```

Caminho padrão do venv: `~/leucus/.venv-worldmm` (substitua com `WORLDMM_VENV`).

Ative e defina as variáveis de ambiente:

```bash
source "${WORLDMM_VENV:-$HOME/leucus/.venv-worldmm}/bin/activate"
export PYTHONPATH="$PWD/src:$PWD:$PYTHONPATH"
export WORLDMM_ATTN_IMPL=sdpa
export WORLDMM_QWEN_DEVICE_MAP=cuda:0
export WORLDMM_DTYPE=bfloat16
export WORLDMM_MODELS="${WORLDMM_MODELS:-$HOME/leucus/models/worldmm}"
export HF_HOME="$WORLDMM_MODELS/hf_home"
unset HF_ENDPOINT
```

:::caution
**Não** defina `HF_ENDPOINT=https://hf-mirror.com` neste stack — isso pode quebrar os downloads do `huggingface_hub`.
:::

### 3. Baixar modelos

```bash
bash script/jetson_download_models.sh
```

| Modelo | Necessário para live padrão dual-2B |
| --- | --- |
| Qwen3-VL-2B-Instruct | Sim (carregado **duas vezes**: reconhecimento + Ask) |
| Qwen3-Embedding-4B | Sim |
| Qwen2-VL-2B-Instruct + VLM2Vec-V2.0 | Sim (memória visual) |
| Qwen3-VL-8B-Instruct | Opcional (`WORLDMM_DOWNLOAD_8B=1` ou `--episodic-model 8b`) |

Os pesos do Qwen são baixados via ModelScope; VLM2Vec via Hugging Face (`huggingface.co`). O primeiro download pode levar algum tempo dependendo da rede.

## Executar o Demo ao Vivo

Conecte uma câmera USB e então:

```bash
bash run.sh
# or:
python script/orin_live.py --ui-port 8790 --window-min 8 \
  --visual-interval 5 --episodic-interval 45
```

Abra em um navegador:

```text
http://<jetson-ip>:8790/
```

O runtime padrão é **dual 2B** (instâncias de modelo, locks e streams CUDA separados). Flags opcionais:

| Flag | Significado |
| --- | --- |
| `--episodic-model 8b` | Reconhecimento mais forte com Qwen3-VL-8B |
| `--shared-2b` | Um 2B para ambos os papéis (menos VRAM; Ask espera pelo reconhecimento) |
| `--window-min 10` | Janela de memória contínua mais longa |

### Smoke test (opcional)

Captura curta + verificação do pipeline:

```bash
python script/orin_smoke.py --vlm qwen3vl-2b --seconds 20 \
  --vlm2vec-base "$WORLDMM_MODELS/Qwen2-VL-2B-Instruct"
```

## Resultados do Demo

Clipes curtos no CDN de arquivos da Seeed mostrando memória contínua e respostas Ask na interface ao vivo.

<video src="https://files.seeedstudio.com/wiki/Jetson_AGX_Orin/streaming_vision_agent_demo_01.mp4" controls width="800"></video>

<video src="https://files.seeedstudio.com/wiki/Jetson_AGX_Orin/streaming_vision_agent_demo_02.mp4" controls width="800"></video>

<video src="https://files.seeedstudio.com/wiki/Jetson_AGX_Orin/streaming_vision_agent_demo_03.mp4" controls width="800"></video>

:::note
Em alguns turnos de Ask (veja os clipes e miniaturas de evidência acima), a resposta em texto pode nomear um objeto enquanto o JPEG / clipe de evidência recuperado mostra um objeto **diferente** de um momento anterior na janela contínua. Isso é esperado em um demo de memória curto dual-2B: a recuperação pode anexar a evidência visual mais próxima em vez de uma correspondência perfeita de identidade. Prefira interações com um objeto de cada vez, centralizado no quadro, para resultados mais limpos.
:::

## O que você deve ver

| Cena | Comportamento esperado |
| --- | --- |
| Visão estável da mesa | Quadro ao vivo + indicadores de status; contadores episódicos / visuais aumentam com o tempo |
| Colocar / remover um objeto (por exemplo, estojo de fones) no centro da visão | Evento episódico após confirmação; Ask pode responder “o que acabou de ser colocado?” |
| Perguntar “What was just put down?” | A resposta cita linha do tempo / fatos; JPEG ou clipe de evidência opcional |

O reconhecimento usa gatilhos enviesados para o centro e painéis de recorte FULL + CENTER para reduzir distração de mãos / mouse na borda da imagem.

## Modelos usados neste Demo

| Função | Modelo padrão |
| --- | --- |
| Reconhecimento episódico | Qwen3-VL-2B-Instruct (instância #1) |
| Ask / resposta | Qwen3-VL-2B-Instruct (instância #2) |
| Embedding de texto | Qwen3-Embedding-4B |
| Embedding visual | Qwen2-VL-2B-Instruct + VLM2Vec-V2.0 LoRA |

## Solução de problemas

| Problema | Solução |
| --- | --- |
| Não é possível abrir `/dev/video0` | Verifique `ls /dev/video*`; tente `--device /dev/video1` |
| `huggingface_hub` FileMetadataError | `unset HF_ENDPOINT`; evite hf-mirror |
| Conflito entre Hub / transformers | Mantenha `huggingface_hub>=0.34,<1` (fixado em `jetson_setup.sh`) |
| OOM / muito lento | Não execute outros demos pesados de GPU em paralelo; tente `--shared-2b` ou `--episodic-interval` mais longo |
| Ask parece bloqueado | Confirme que você **não** está usando `--shared-2b`; o dual-2B padrão deve responder em um stream separado |
| Porta em uso | `fuser -k 8790/tcp` e depois reinicie |

## Recursos

- Projeto: https://github.com/xbs0325/Streaming-Vision-Agent-Orin

## Inspiração e Agradecimentos

Este demo de borda é inspirado pelo **WorldMM** — um agente de memória multimodal dinâmica para raciocínio em vídeos longos (CVPR 2026 Highlight). Adaptamos a ideia das três memórias (visual / episódica / semântica) para uma janela contínua em tempo real no Jetson.

```bibtex
@inproceedings{yeo2026worldmm,
  title     = {WorldMM: Dynamic Multimodal Memory Agent for Long Video Reasoning},
  author    = {Yeo, Woongyeong and Kim, Kangsan and Yoon, Jaehong and Hwang, Sung Ju},
  booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},
  month     = {June},
  year      = {2026},
  pages     = {25599-25609}
}
```

Também agradecemos ao [HippoRAG](https://github.com/OSU-NLP-Group/HippoRAG), [VLM2Vec](https://github.com/TIGER-AI-Lab/VLM2Vec) e à implementação original do [WorldMM](https://github.com/wgcyeo/WorldMM) (Apache-2.0).


## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
