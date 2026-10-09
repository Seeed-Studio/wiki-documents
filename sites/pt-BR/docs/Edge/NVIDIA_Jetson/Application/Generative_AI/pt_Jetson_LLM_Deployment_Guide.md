---
description: Como implantar modelos de IA em dispositivos reComputer Jetson — LLM, VLM, generativos, incorporados (VLA), fala e visão computacional. Comece com a plataforma online ou implantação com um comando através do jetson-examples, ou use mecanismos alternativos como Ollama, llama.cpp, MLC, TensorRT Edge-LLM e TensorRT-Model-Connect.
title: Implantar modelos de IA no Jetson - O que pode rodar e como
keywords:
  - reComputer
  - Jetson
  - LLM
  - Ollama
  - llama.cpp
  - TensorRT
  - jetson-examples
  - DeepSeek
  - Qwen
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/MLC_LLM.gif
slug: /ai_robotics_deploy_ai_models_on_jetson
last_update:
  date: 09/25/2026
  author: Seeed Wiki Team
createdAt: '2026-09-28'
url: https://wiki.seeedstudio.com/pt-br/ai_robotics_deploy_ai_models_on_jetson/
updatedAt: '2026-09-28'
---

# Implantar modelos de IA no Jetson: o que pode rodar e como

Esta página aborda as perguntas que surgem com mais frequência ao executar modelos de IA no NVIDIA Jetson — LLMs, modelos visão-linguagem, modelos generativos, modelos incorporados/VLA, fala e visão computacional:

1. **Que tamanho de modelo (em B, bilhões de parâmetros) meu dispositivo pode rodar?**
2. **Quais modelos posso implantar?**
3. **Como faço para implantá-los?**

Três maneiras de implantar:

- **Plataforma online (recomendado):** navegue e implante a partir do [reComputer AI Lab](https://sensecraft.seeed.cc/ai-lab/en/models?device=jetson-orin-nano) — mais de 100 modelos otimizados de CV / LLM / VLM para reComputer Jetson com implantação via Docker em um comando e benchmarks. Escolha um modelo na página, copie o comando e execute.
- **CLI com um comando:** [jetson-examples](https://github.com/Seeed-Projects/jetson-examples) — `reComputer run <model>`.
- **Manual:** você escolhe o mecanismo (Ollama, llama.cpp, MLC, TensorRT Edge-LLM, TensorRT-Model-Connect) e segue os tutoriais listados abaixo.

---

## 1. Que tamanho de modelo meu dispositivo pode rodar?

"Tamanho de modelo" é expresso em **B (bilhões de parâmetros)** — um modelo 7B tem 7 bilhões de parâmetros, e números B maiores precisam de mais memória. O que importa é a **memória unificada** do seu módulo Jetson (o módulo, não a placa carrier). Para um modelo **quantizado (Q4_K_M)**:

<div className="row">

<div className="col col--4 margin-bottom--lg">
<div className="card" style={{borderTop:'4px solid #10b981'}}>
  <div className="card__header" style={{padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>8 GB · Orin Nano</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:0,fontWeight:600}}>Modelos de 1B – 4B</p>
    <p style={{margin:'6px 0 0',fontSize:'0.9em',color:'var(--ifm-color-emphasis-700)'}}>Llama 3.2 1B/3B, Qwen3.5-4B, Gemma4 E4B, Live VLM WebUI</p>
  </div>
</div>
</div>

<div className="col col--4 margin-bottom--lg">
<div className="card" style={{borderTop:'4px solid #0ea5e9'}}>
  <div className="card__header" style={{padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>16 GB · Orin NX</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:0,fontWeight:600}}>Modelos de 7B – 8B</p>
    <p style={{margin:'6px 0 0',fontSize:'0.9em',color:'var(--ifm-color-emphasis-700)'}}>Llama3 8B, DeepSeek-R1 7B, Llama2-7B (MLC), LLaVA 7B, LocateAnything</p>
  </div>
</div>
</div>

<div className="col col--4 margin-bottom--lg">
<div className="card" style={{borderTop:'4px solid #8b5cf6'}}>
  <div className="card__header" style={{padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>32 GB · AGX Orin</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:0,fontWeight:600}}>até 27B (quantizado)</p>
    <p style={{margin:'6px 0 0',fontSize:'0.9em',color:'var(--ifm-color-emphasis-700)'}}>Qwen3.5-27B Q4_K_M (veja o benchmark JetPack 6.2 vs 7.2 abaixo)</p>
  </div>
</div>
</div>

<div className="col col--4 margin-bottom--lg">
<div className="card" style={{borderTop:'4px solid #f59e0b'}}>
  <div className="card__header" style={{padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>64 GB · AGX Orin</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:0,fontWeight:600}}>30B – 35B+</p>
    <p style={{margin:'6px 0 0',fontSize:'0.9em',color:'var(--ifm-color-emphasis-700)'}}>Nemotron-3-Nano-30B (Q4_K_M), Qwen3.6-35B (UD-Q6_K), GPT-OSS</p>
  </div>
</div>
</div>

<div className="col col--4 margin-bottom--lg">
<div className="card" style={{borderTop:'4px solid #ef4444'}}>
  <div className="card__header" style={{padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>128 GB · Jetson Thor</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:0,fontWeight:600}}>35B+ e maiores</p>
    <p style={{margin:'6px 0 0',fontSize:'0.9em',color:'var(--ifm-color-emphasis-700)'}}>Nemotron3 33B, pilha JoyAI VLM / ASR / TTS</p>
  </div>
</div>
</div>

</div>

O uso de memória inclui o cache KV e a sobrecarga do sistema, então um modelo cujos pesos quase preenchem a RAM não rodará de forma estável. Medido em um AGX Orin 32 GB, um modelo Qwen3.5-27B Q4_K_M usou cerca de 24,6 GB dos 30 GB disponíveis após o carregamento — esse é um limite realista para dispositivos de 32 GB.

## 2. Quais modelos posso implantar?

### 2.1 Implantação com um comando (jetson-examples)

Instale uma vez e depois execute qualquer modelo compatível com um comando:

```bash
sudo apt install python3-pip
pip3 install jetson-examples
```

<div className="row">

<div className="col col--6 margin-bottom--lg">
<div className="card">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>Série Qwen</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <div style={{padding:'7px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}>
      <strong>Qwen3.5-4B</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>~2,5 GB (Q4_K_M) · Orin Nano 8 GB · JP 6.1/6.2/6.2.1</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run qwen3.5-4b</code>
    </div>
    <div style={{padding:'7px 0'}}>
      <strong>Qwen3.6-35B</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>~24 GB+ (UD-Q6_K) · <strong>AGX Orin 64 GB</strong> · JP 6.1/6.2/6.2.1</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run qwen3.6-35b</code>
    </div>
  </div>
</div>
</div>

<div className="col col--6 margin-bottom--lg">
<div className="card">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>Família Llama</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <div style={{padding:'7px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}>
      <strong>Llama3 8B</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>~4,9 GB (Ollama Q4) · Orin NX 16 GB · JP 5.1.1-6.0</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run llama3</code>
    </div>
    <div style={{padding:'7px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}>
      <strong>Llama 3.2 1B/3B</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>~1,3 / 2,0 GB (Ollama Q4) · Orin Nano 8 GB · JP 5.1.1-6.x</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run llama3.2</code>
    </div>
    <div style={{padding:'7px 0'}}>
      <strong>LLaVA 7B</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>(VLM) ~15 GB no total (FP16) · Orin NX 16 GB · JP 5.1.1-6.0</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run llava</code>
    </div>
  </div>
</div>
</div>

<div className="col col--6 margin-bottom--lg">
<div className="card">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>Família Gemma</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <div style={{padding:'7px 0'}}>
      <strong>Gemma4 E4B</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>~2,5 GB (Q4_K_M) · Orin Nano 8 GB · JP 6.1/6.2/6.2.1</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run gemma4</code>
    </div>
  </div>
</div>
</div>

<div className="col col--6 margin-bottom--lg">
<div className="card" style={{borderTop:'4px solid #f59e0b'}}>
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>Modelos NVIDIA (64 GB)</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <div style={{padding:'7px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}>
      <strong>Nemotron-3-Nano-30B</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>~24,5 GB (Q4_K_M) · <strong>AGX Orin 64 GB</strong> · JP 6.1/6.2/6.2.1</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run nemotron-3-nano</code>
    </div>
    <div style={{padding:'7px 0'}}>
      <strong>GPT-OSS</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>~39 GB (Q4_K) · <strong>AGX Orin 64 GB</strong> · JP 6.1/6.2/6.2.1</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run gpt-oss</code>
    </div>
  </div>
</div>
</div>

<div className="col col--6 margin-bottom--lg">
<div className="card">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>VLM (Visão-Linguagem)</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <div style={{padding:'7px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}>
      <strong>Live VLM WebUI</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>7 VLMs (Ollama Q4) · 8 GB mín · JP 6.0-7.1</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run live-vlm-webui</code>
    </div>
    <div style={{padding:'7px 0'}}>
      <strong>LocateAnything</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>~7,3 GB de pesos (BF16) · Orin NX 16 GB · JP 6.x</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run locateanything</code>
    </div>
  </div>
</div>
</div>

<div className="col col--6 margin-bottom--lg">
<div className="card">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>YOLO & Detecção</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <div style={{padding:'7px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}>
      <strong>Ultralytics YOLO</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>detecção / segmentação / pose / classificação · 8 GB + · JP 4.6-6.2</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run ultralytics-yolo</code>
    </div>
    <div style={{padding:'7px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}>
      <strong>YOLO11</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>· 8 GB + · JP 5.1.1-6.x</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run yolo11</code>
    </div>
    <div style={{padding:'7px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}>
      <strong>YOLO26</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>· 8 GB + · JP 5.1.1-7.1</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run yolo26</code>
    </div>
    <div style={{padding:'7px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}>
      <strong>YOLO26 TensorRT C++</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>nativo, sem Docker · JP 6.0-7.2</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run yolo26-tensorrt</code>
    </div>
    <div style={{padding:'7px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}>
      <strong>YOLOv10</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>· 8 GB + · JP 5.1.1-6.0</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run yolov10</code>
    </div>
    <div style={{padding:'7px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}>
      <strong>Depth Anything V2</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>profundidade monocular · 16 GB · JP 5.1.1-5.1.3</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run depth-anything-v2</code>
    </div>
    <div style={{padding:'7px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}>
      <strong>Depth Anything V3</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>· 16 GB · JP 6.1-6.2.1</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run depth-anything-v3</code>
    </div>
    <div style={{padding:'7px 0'}}>
      <strong>NanoOWL</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>detecção de vocabulário aberto · 8 GB + · JP 5.1.1-6.x</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run nanoowl</code>
    </div>
  </div>
</div>
</div>

<div className="col col--6 margin-bottom--lg">
<div className="card">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>Ferramentas</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <div style={{padding:'7px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}>
      <strong>Ollama</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>(qualquer modelo) o tamanho depende do modelo + quantização (geralmente Q4) · 8 GB + · JP 5.1.1-6.x</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run ollama</code>
    </div>
    <div style={{padding:'7px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}>
      <strong>Whisper</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>(STT) o tamanho depende da variante do Whisper (small/base/large) · 8 GB + · JP 5.1.1-6.x</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run whisper</code>
    </div>
    <div style={{padding:'7px 0'}}>
      <strong>Llama-Factory</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>(fine-tune) a pegada de treinamento depende do modelo + LoRA/QLoRA · 16 GB + · JP 5.1.1-5.1.3</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run llama-factory</code>
    </div>
  </div>
</div>
</div>

</div>

> **Nota:** os tamanhos acima são para a quantização mostrada. Maior precisão (Q8 / FP16) aproximadamente dobra ou mais o tamanho dos pesos. Cada exemplo também precisa de espaço livre suficiente em disco (imagem + modelo) — LLaVA FP16 precisa de cerca de 27,4 GB no total. Verifique a lista de exemplos no [README do jetson-examples](https://github.com/Seeed-Projects/jetson-examples) para tamanhos exatos das imagens.

### 2.2 Implantação manual: índice completo de tutoriais

Cada categoria abaixo aponta para um tutorial completo neste wiki. Escolha aquele que corresponde à sua tarefa e siga-o no dispositivo.

**Visão geral do mecanismo**

<div className="row">
  <div className="col col--2 margin-bottom--sm"><div className="card" style={{borderTop:'4px solid #8dc21f'}}><div className="card__body" style={{padding:'12px 16px'}}><strong>Ollama</strong><br/><span style={{fontSize:'0.88em',color:'var(--ifm-color-emphasis-700)'}}>Configuração fácil</span></div></div></div>
  <div className="col col--2 margin-bottom--sm"><div className="card" style={{borderTop:'4px solid #8dc21f'}}><div className="card__body" style={{padding:'12px 16px'}}><strong>MLC LLM</strong><br/><span style={{fontSize:'0.88em',color:'var(--ifm-color-emphasis-700)'}}>Quantizado em Q4</span></div></div></div>
  <div className="col col--2 margin-bottom--sm"><div className="card" style={{borderTop:'4px solid #8dc21f'}}><div className="card__body" style={{padding:'12px 16px'}}><strong>llama.cpp</strong><br/><span style={{fontSize:'0.88em',color:'var(--ifm-color-emphasis-700)'}}>GGUF, controle total</span></div></div></div>
  <div className="col col--3 margin-bottom--sm"><div className="card" style={{borderTop:'4px solid #8dc21f'}}><div className="card__body" style={{padding:'12px 16px'}}><strong>TensorRT Edge-LLM</strong><br/><span style={{fontSize:'0.88em',color:'var(--ifm-color-emphasis-700)'}}>Produção · JP 6.2</span></div></div></div>
  <div className="col col--3 margin-bottom--sm"><div className="card" style={{borderTop:'4px solid #8dc21f'}}><div className="card__body" style={{padding:'12px 16px'}}><strong>TensorRT-Model-Connect</strong><br/><span style={{fontSize:'0.88em',color:'var(--ifm-color-emphasis-700)'}}>Build no dispositivo · JP 7.2</span></div></div></div>
</div>

<div className="row">

<div className="col col--6">
<div className="card margin-bottom--lg">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>1. LLM geral</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:'6px 0 10px',fontSize:'0.88em',color:'var(--ifm-color-emphasis-700)'}}><strong>Estimativa de VRAM:</strong> confiável — `params × bits/8 + KV cache + system`. Q4: 7B ≈ 4-5 GB, 27B ≈ 15-18 GB.</p>
    <ul style={{listStyle:'none',paddingLeft:0,margin:0}}>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/pt-br/deploy_deepseek_on_jetson">DeepSeek-R1 7B com Ollama</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/pt-br/deploy_deepseek_on_jetson_with_mlc">DeepSeek 1.5B com MLC</a> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>~60 tok/s</span></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/pt-br/Quantized_Llama2_7B_with_MLC_LLM_on_Jetson">Llama2-7B Q4 com MLC</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/pt-br/deploy_gptoss_on_jetson">GPT-OSS 20B com llama.cpp</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/pt-br/How_to_Format_the_Output_of_LLM_Using_Langchain_on_Jetson">Saída estruturada de LLM com Langchain</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/pt-br/Local_RAG_based_on_Jetson_with_LlamaIndex">RAG com LlamaIndex + ChromaDB</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/pt-br/local_ai_ssistant">Assistente de IA local (AnythingLLM)</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/pt-br/local_openclaw_on_recomputer_jetson">OpenClaw local (Clawdbot)</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/pt-br/Finetune_LLM_on_Jetson">Fine-tune com Llama-Factory</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/pt-br/develop_recomputer_jetson_using_clawdbot">Desenvolver reComputer com Clawdbot</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/pt-br/llm_interface_control_jetson">Controle de interface de hardware com LLM</a></li>
      <li style={{padding:'5px 0'}}><a href="/pt-br/control_motor_by_voice_llm_on_jetson">Controlar motor por voz com LLM</a></li>
    </ul>
  </div>
</div>
</div>

<div className="col col--6">
<div className="card margin-bottom--lg">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>2. VLM (Visão-Linguagem)</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:'6px 0 10px',fontSize:'0.88em',color:'var(--ifm-color-emphasis-700)'}}><strong>Estimativa de VRAM:</strong> aproximada — parte de LLM + codificador de visão (0.3-4B) + resolução/blocos de entrada. Resoluções mais altas escalam a VRAM de forma não linear.</p>
    <ul style={{listStyle:'none',paddingLeft:0,margin:0}}>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/pt-br/run_vlm_on_recomputer">Executar VLM no reComputer</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/pt-br/deploy_live_vlm_webui_on_jetson">WebUI VLM em tempo real</a> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>7 VLMs · em tempo real</span></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/pt-br/deploy_joyai_vl_interaction_on_jetson_thor">JoyAI-VL-Interaction</a> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>Thor · voz/vídeo</span></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/pt-br/speech_vlm">VLM com interação por voz</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/pt-br/vlm">Guarda de armazém LLaVA</a> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>Ollama llava-llama3 8B</span></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/pt-br/run_zero_shot_detection_on_recomputer">Detecção Zero-Shot</a></li>
    </ul>
  </div>
</div>
</div>

<div className="col col--6">
<div className="card margin-bottom--lg">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>3. Modelos generativos e de mundo</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:'6px 0 10px',fontSize:'0.88em',color:'var(--ifm-color-emphasis-700)'}}><strong>Estimativa de VRAM:</strong> não apenas pelos parâmetros — contagem de patches/quadros DiT, atenção temporal, U-Net vs DiT vs MoE mudam a VRAM real em 3–5x no mesmo tamanho. Meça no dispositivo.</p>
    <ul style={{listStyle:'none',paddingLeft:0,margin:0}}>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/pt-br/How_to_run_local_llm_text_to_image_on_reComputer">Stable Diffusion (texto para imagem)</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="https://github.com/Seeed-Projects/jetson-examples">ComfyUI</a> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}><code>reComputer run comfyui</code></span></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="https://github.com/Seeed-Projects/jetson-examples">AudioCraft (geração de música)</a> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}><code>reComputer run audiocraft</code></span></li>
      <li style={{padding:'5px 0'}}><span style={{color:'var(--ifm-color-emphasis-500)'}}>Wan / geração de vídeo, modelos de mundo — ainda sem implantação verificada em Jetson; a VRAM deve ser medida por modelo</span></li>
    </ul>
  </div>
</div>
</div>

<div className="col col--6">
<div className="card margin-bottom--lg">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>4. Embodied / VLA</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:'6px 0 10px',fontSize:'0.88em',color:'var(--ifm-color-emphasis-700)'}}><strong>Estimativa de VRAM:</strong> não pelos parâmetros — codificador de visão + quantidade de câmeras + taxa de controle + divisão de ações. Meça no dispositivo.</p>
    <ul style={{listStyle:'none',paddingLeft:0,margin:0}}>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/pt-br/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor">GR00T N1.5 + LeRobot SO-101 (Thor)</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/pt-br/fine_tune_gr00t_n1.6_for_lerobot_so_arm_and_deploy_on_agx_orin">GR00T N1.6 + LeRobot SO-101 (AGX Orin)</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/pt-br/fine_tune_gr00t_n1.7_for_rebot_arm_and_deploy_on_robotics_j601">GR00T N1.7 + reBot Arm (J601)</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/pt-br/rebot_arm_b601_dm_graspnet_visual_grasping">Apreensão visual GraspNet (reBot-DM)</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/pt-br/ai_robotics_control_soarm_by_openclaw_on_jetson_thor">Controlar SO-Arm com OpenClaw (Thor)</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/pt-br/control_rebot_arm_with_nemoclaw_on_nvidia_jetson_thor">Controlar reBot com NemoClaw (Thor)</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/pt-br/getting_started_with_jetson_claw_on_orin_nano_nx_8gb">Introdução ao Jetson-Claw (8 GB)</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/pt-br/deploy_full_weight_gr00t_n1.7_tensorrt_jetpack7.2_agx_orin">GR00T N1.7 TensorRT de peso completo (JP 7.2)</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/pt-br/voice_control_rebot_arm">Controle por voz do reBot Arm B601</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/pt-br/ai_robotics_microduck_rl_on_jetson">Microduck RL no Jetson</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/pt-br/ai_robotics_microduck_rl_jetson_environment">Ambiente Microduck RL</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/pt-br/ai_robotics_microduck_rl_official_policies">Políticas oficiais Microduck RL</a></li>
      <li style={{padding:'5px 0'}}><a href="/pt-br/ai_robotics_microduck_rl_custom_motion_training">Movimento personalizado Microduck RL</a></li>
    </ul>
  </div>
</div>
</div>

<div className="col col--6">
<div className="card margin-bottom--lg">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>5. Fala (ASR / TTS)</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:'6px 0 10px',fontSize:'0.88em',color:'var(--ifm-color-emphasis-700)'}}><strong>Estimativa de VRAM:</strong> modelos pequenos — geralmente funcionam bem em 8 GB. Whisper/Riva rodam junto com um LLM em um pipeline.</p>
    <ul style={{listStyle:'none',paddingLeft:0,margin:0}}>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/pt-br/Whisper_on_Jetson_for_Real_Time_Speech_to_Text">Whisper Fala para Texto</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/pt-br/Real_Time_Subtitle_Recoder_on_Nvidia_Jetson">Gravador de legendas em tempo real</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/pt-br/deploy_dia_on_jetson">Dia Texto para Fala</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/pt-br/Local_Voice_Chatbot">Chatbot de voz (Riva + Llama2)</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/pt-br/local_voice_llm_on_recomputer_jetson_for_reachy_mini">LLM de voz para Reachy Mini</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/pt-br/local_chatbot_recomputer">Chatbot de voz local</a></li>
      <li style={{padding:'5px 0'}}><a href="https://github.com/Seeed-Projects/jetson-examples">Parler-TTS / AudioCraft</a> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}><code>reComputer run parler-tts</code></span></li>
    </ul>
  </div>
</div>
</div>

<div className="col col--6">
<div className="card margin-bottom--lg">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>6. Visão computacional (YOLO e detecção)</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:'6px 0 10px',fontSize:'0.88em',color:'var(--ifm-color-emphasis-700)'}}><strong>Estimativa de VRAM:</strong> pequena — modelos YOLO normalmente rodam em 8 GB com TensorRT e escalam com a resolução de entrada. Veja a lista de um comando na seção 2.1.</p>
    <ul style={{listStyle:'none',paddingLeft:0,margin:0}}>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/pt-br/YOLOv8-TRT-Jetson">YOLOv8 com TensorRT</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/pt-br/YOLOv8-DeepStream-TRT-Jetson">YOLOv8 com DeepStream + TensorRT</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/pt-br/How_to_Train_and_Deploy_YOLOv8_on_reComputer">Treinar e implantar YOLOv8</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/pt-br/train_and_deploy_a_custom_classification_model_with_yolov8">Classificação personalizada com YOLOv8</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/pt-br/YOLOv5-Object-Detection-Jetson">Detecção de objetos YOLOv5</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/pt-br/yolov11_with_depth_camera">YOLOv11 + câmera de profundidade</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/pt-br/ai_roboticsyolov26_dual_camera_system">Sistema de câmera dupla YOLOv26</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/pt-br/deploy_depth_anything_v3_jetson_agx_orin">Depth Anything V3</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/pt-br/Jetson-Nano-MaskCam">MaskCam</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/pt-br/Traffic-Management-DeepStream-SDK">Gerenciamento de tráfego (DeepStream)</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/pt-br/DashCamNet-with-Jetson-Xavier-NX-Multicamera">DashCamNet multicâmera</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/pt-br/multiple_cameras_with_jetson">Câmeras Multi-GMSL</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/pt-br/jetson_fisheye_surround_view_demo">Visão surround olho de peixe com quatro câmeras</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/pt-br/deploy_visual_perception_engine_recomputer">Motor de inferência de visão multitarefa</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/pt-br/streaming_vision_agent_on_jetson">Agente de visão em streaming (Qwen3-VL)</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/pt-br/deploy_frigate_on_jetson">Frigate NVR</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/pt-br/Security_Scan">Escaneamento de raio X de segurança</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/pt-br/industrial_vision_monitoring_on_industrial">Monitoramento de visão industrial</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/pt-br/deploy_nvblox_jetson_agx_orin">Mapeamento 3D NVBlox</a></li>
      <li style={{padding:'5px 0'}}><a href="/pt-br/ai_nvr_with_jetson">NVR com IA</a></li>
    </ul>
  </div>
</div>
</div>

<div className="col col--12">
<div className="card margin-bottom--lg">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>Desempenho e Distribuído</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <ul style={{listStyle:'none',paddingLeft:0,margin:0,display:'flex',flexWrap:'wrap',gap:'4px 28px'}}>
      <li style={{padding:'7px 0'}}><a href="/pt-br/deploy_tensorrt_edge_llm_on_jetpack6.2">TensorRT Edge-LLM (JP 6.2)</a></li>
      <li style={{padding:'7px 0'}}><a href="/pt-br/deploy_tensorrt_edge_llm_on_jetpack7.2">TensorRT Edge-LLM (JP 7.2)</a></li>
      <li style={{padding:'7px 0'}}><a href="/pt-br/ai_robotics_deploy_tensorrt_model_connect_on_jetson">TensorRT-Model-Connect (JP 7.2)</a></li>
      <li style={{padding:'7px 0'}}><a href="/pt-br/ai_robotics_distributed_llama_cpp_rpc_jetson">llama.cpp RPC distribuído</a></li>
    </ul>
  </div>
</div>
</div>

</div>

## 3. Como faço o deploy?

<div className="row">

<div className="col col--4 margin-bottom--lg">
<div className="card" style={{borderTop:'4px solid #8dc21f'}}>
  <div className="card__header" style={{padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>AI Lab (plataforma online)</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <ol style={{margin:'6px 0 10px',paddingLeft:18}}>
      <li style={{padding:'3px 0'}}>Abra <a href="https://sensecraft.seeed.cc/ai-lab/en/models?device=jetson-orin-nano">reComputer AI Lab Models</a> (Jetson pré-filtrado)</li>
      <li style={{padding:'3px 0'}}>Filtre por dispositivo (por exemplo, Jetson Orin Nano) e navegue por modelos de CV / LLM / VLM com benchmarks</li>
      <li style={{padding:'3px 0'}}>Copie o comando Docker de uma linha e execute-o no seu dispositivo</li>
    </ol>
    <p style={{margin:'10px 0 0',fontSize:'0.9em',color:'var(--ifm-color-emphasis-700)'}}>Mais de 100 modelos otimizados, sem configuração, inclui números de benchmark.</p>
  </div>
</div>
</div>

<div className="col col--4 margin-bottom--lg">
<div className="card" style={{borderTop:'4px solid #0ea5e9'}}>
  <div className="card__header" style={{padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>CLI de um comando</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:'6px 0 10px'}}>Instale jetson-examples e então faça o deploy de qualquer modelo da seção 2.1:</p>
    <pre style={{margin:'0 0 10px'}}><code>{`sudo apt install python3-pip
pip3 install jetson-examples

# Deploy a model (example)
reComputer run qwen3.5-4b`}</code></pre>
    <p style={{margin:0,fontSize:'0.9em',color:'var(--ifm-color-emphasis-700)'}}>Expõe um endpoint de API compatível com OpenAI, utilizável diretamente com curl ou qualquer SDK OpenAI.</p>
  </div>
</div>
</div>

<div className="col col--4 margin-bottom--lg">
<div className="card" style={{borderTop:'4px solid #f59e0b'}}>
  <div className="card__header" style={{padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>Deploy manual</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:'6px 0 10px'}}>Escolha um engine da seção 2.2 e siga o tutorial correspondente no seu dispositivo:</p>
    <ul style={{margin:'0 0 0 18px',padding:0}}>
      <li style={{padding:'3px 0'}}>Ollama — início mais fácil, grande biblioteca de modelos</li>
      <li style={{padding:'3px 0'}}>MLC LLM — modelos quantizados (Q4) compilados</li>
      <li style={{padding:'3px 0'}}>llama.cpp — leve, GGUF, controle total</li>
      <li style={{padding:'3px 0'}}>TensorRT Edge-LLM / Model-Connect — velocidade de produção</li>
    </ul>
    <p style={{margin:'10px 0 0',fontSize:'0.9em',color:'var(--ifm-color-emphasis-700)'}}>Todos os tutoriais são verificados em dispositivos reComputer Jetson.</p>
  </div>
</div>
</div>

</div>

## 4. Benchmark de desempenho: JetPack 6.2 vs 7.2

<div className="card margin-bottom--lg">
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:'8px 0 12px'}}>Mesmo modelo <strong>Qwen3.5-27B Q4_K_M</strong> (llama.cpp) em hardware classe AGX Orin, JetPack 6.2 vs 7.2:</p>
    <table>
      <thead>
        <tr><th>Métrica</th><th>JetPack 6.2</th><th>JetPack 7.2</th><th>Mudança</th></tr>
      </thead>
      <tbody>
        <tr><td>Memória após carregamento do modelo</td><td>24.6 GB / 30 GB</td><td>14.7 GB / 30 GB</td><td>~40% menor</td></tr>
        <tr><td>Frequência da GPU durante inferência</td><td>930 MHz</td><td>1.36 GHz</td><td>boost maior</td></tr>
        <tr><td>Processamento do prompt</td><td>18.2 tok/s</td><td>25.8 tok/s</td><td>~41.8% mais rápido</td></tr>
        <tr><td>Geração de tokens</td><td>4.3 tok/s</td><td>5.5 tok/s</td><td>~27.9% mais rápido</td></tr>
      </tbody>
    </table>
    <p style={{margin:'10px 0 4px'}}>Detalhes: <a href="/pt-br/jetpack72_deep_dive">JetPack 7.2 Deep Dive</a>.</p>
  </div>
</div>

## 5. FAQ

<div className="row">

<div className="col col--12 margin-bottom--lg">
<div className="card">
  <div className="card__header" style={{padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>Posso rodar DeepSeek no Jetson?</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:0}}>Sim. DeepSeek-R1 7B roda bem em dispositivos Orin NX 16 GB via Ollama (<a href="/pt-br/deploy_deepseek_on_jetson">tutorial</a>); a variante MLC quantizada de 1.5B atinge cerca de 60 tok/s no Orin NX (<a href="/pt-br/deploy_deepseek_on_jetson_with_mlc">tutorial</a>).</p>
  </div>
</div>
</div>

<div className="col col--12 margin-bottom--lg">
<div className="card">
  <div className="card__header" style={{padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>Meu modelo é grande demais para um dispositivo — o que posso fazer?</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <ul style={{margin:0,paddingLeft:18}}>
      <li style={{padding:'3px 0'}}>Use uma quantização menor (Q4_K_M em vez de Q8/FP16).</li>
      <li style={{padding:'3px 0'}}>Limite o tamanho do contexto (<code>--max-sequence-length</code>) para reduzir o cache KV.</li>
      <li style={{padding:'3px 0'}}>Distribua a inferência entre vários dispositivos reComputer com llama.cpp RPC (<a href="/pt-br/ai_robotics_distributed_llama_cpp_rpc_jetson">tutorial</a>).</li>
    </ul>
  </div>
</div>
</div>

<div className="col col--12 margin-bottom--lg">
<div className="card">
  <div className="card__header" style={{padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>Eu preciso de uma GPU na nuvem?</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:0}}>Não. Tudo acima roda totalmente no dispositivo. Os dados permanecem na borda e não há taxas recorrentes de API.</p>
  </div>
</div>
</div>

</div>

## Mais recursos

<div className="row">

<div className="col col--3 margin-bottom--lg">
<div className="card">
  <div className="card__body" style={{padding:'14px 16px'}}>
    <a href="/pt-br/Generative_AI_Intro" style={{fontWeight:600}}>Introdução à IA Generativa</a>
    <p style={{margin:'6px 0 0',fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>Visão geral de GenAI para reComputer-Jetson</p>
  </div>
</div>
</div>

<div className="col col--3 margin-bottom--lg">
<div className="card">
  <div className="card__body" style={{padding:'14px 16px'}}>
    <a href="/pt-br/Finetune_LLM_on_Jetson" style={{fontWeight:600}}>Fine-tuning com Llama-Factory</a>
    <p style={{margin:'6px 0 0',fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>Dataset → treino → exportação → deploy</p>
  </div>
</div>
</div>

<div className="col col--3 margin-bottom--lg">
<div className="card">
  <div className="card__body" style={{padding:'14px 16px'}}>
    <a href="/pt-br/Jetson_FAQ" style={{fontWeight:600}}>Jetson FAQ</a>
    <p style={{margin:'6px 0 0',fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>Perguntas de solução de problemas e uso</p>
  </div>
</div>
</div>

<div className="col col--3 margin-bottom--lg">
<div className="card">
  <div className="card__body" style={{padding:'14px 16px'}}>
    <a href="https://github.com/Seeed-Projects/jetson-examples" style={{fontWeight:600}}>jetson-examples</a>
    <p style={{margin:'6px 0 0',fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>Repositório de deploy com um comando</p>
  </div>
</div>
</div>

</div>

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