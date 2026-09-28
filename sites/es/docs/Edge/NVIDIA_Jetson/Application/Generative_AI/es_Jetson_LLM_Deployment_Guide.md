---
description: Cómo desplegar modelos de IA en dispositivos reComputer Jetson — LLM, VLM, generativos, incorporados (VLA), voz y visión por computadora. Comienza con la plataforma en línea o el despliegue con un solo comando mediante jetson-examples, o usa motores alternativos como Ollama, llama.cpp, MLC, TensorRT Edge-LLM y TensorRT-Model-Connect.
title: Desplegar modelos de IA en Jetson - Qué puede ejecutarse y cómo
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
---

# Desplegar modelos de IA en Jetson: qué puede ejecutarse y cómo

Esta página cubre las preguntas que surgen con más frecuencia al ejecutar modelos de IA en NVIDIA Jetson — LLM, modelos visión-lenguaje, modelos generativos, modelos incorporados/VLA, voz y visión por computadora:

1. **¿Qué tamaño de modelo (en B, mil millones de parámetros) puede ejecutar mi dispositivo?**
2. **¿Qué modelos puedo desplegar?**
3. **¿Cómo los despliego?**

Tres formas de desplegar:

- **Plataforma en línea (recomendado):** explora y despliega desde el [reComputer AI Lab](https://sensecraft.seeed.cc/ai-lab/en/models?device=jetson-orin-nano): más de 100 modelos optimizados de CV / LLM / VLM para reComputer Jetson con despliegue Docker con un solo comando y benchmarks. Elige un modelo en la página, copia el comando y ejecútalo.
- **CLI de un solo comando:** [jetson-examples](https://github.com/Seeed-Projects/jetson-examples) — `reComputer run <model>`.
- **Manual:** tú eliges el motor (Ollama, llama.cpp, MLC, TensorRT Edge-LLM, TensorRT-Model-Connect) y sigues los tutoriales listados abajo.

---

## 1. ¿Qué tamaño de modelo puede ejecutar mi dispositivo?

El "tamaño del modelo" se expresa en **B (mil millones de parámetros)**: un modelo de 7B tiene 7 mil millones de parámetros, y los números B más grandes necesitan más memoria. Lo que importa es la **memoria unificada** de tu módulo Jetson (el módulo, no la placa portadora). Para un modelo **cuantizado (Q4_K_M)**:

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
    <p style={{margin:0,fontWeight:600}}>hasta 27B (cuantizado)</p>
    <p style={{margin:'6px 0 0',fontSize:'0.9em',color:'var(--ifm-color-emphasis-700)'}}>Qwen3.5-27B Q4_K_M (ver benchmark de JetPack 6.2 vs 7.2 abajo)</p>
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
    <p style={{margin:0,fontWeight:600}}>35B+ y mayores</p>
    <p style={{margin:'6px 0 0',fontSize:'0.9em',color:'var(--ifm-color-emphasis-700)'}}>Nemotron3 33B, pila JoyAI VLM / ASR / TTS</p>
  </div>
</div>
</div>

</div>

El uso de memoria incluye la caché KV y la sobrecarga del sistema, por lo que un modelo cuyos pesos casi llenan la RAM no se ejecutará de forma estable. Medido en AGX Orin 32 GB, un modelo Qwen3.5-27B Q4_K_M usó alrededor de 24.6 GB de los 30 GB disponibles después de la carga: ese es un límite realista para dispositivos de 32 GB.

## 2. ¿Qué modelos puedo desplegar?

### 2.1 Despliegue con un solo comando (jetson-examples)

Instala una vez y luego ejecuta cualquier modelo compatible con un solo comando:

```bash
sudo apt install python3-pip
pip3 install jetson-examples
```

<div className="row">

<div className="col col--6 margin-bottom--lg">
<div className="card">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>Serie Qwen</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <div style={{padding:'7px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}>
      <strong>Qwen3.5-4B</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>~2.5 GB (Q4_K_M) · Orin Nano 8 GB · JP 6.1/6.2/6.2.1</span><br/>
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
    <h3 style={{margin:0,fontSize:'1.05rem'}}>Familia Llama</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <div style={{padding:'7px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}>
      <strong>Llama3 8B</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>~4.9 GB (Ollama Q4) · Orin NX 16 GB · JP 5.1.1-6.0</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run llama3</code>
    </div>
    <div style={{padding:'7px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}>
      <strong>Llama 3.2 1B/3B</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>~1.3 / 2.0 GB (Ollama Q4) · Orin Nano 8 GB · JP 5.1.1-6.x</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run llama3.2</code>
    </div>
    <div style={{padding:'7px 0'}}>
      <strong>LLaVA 7B</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>(VLM) ~15 GB en total (FP16) · Orin NX 16 GB · JP 5.1.1-6.0</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run llava</code>
    </div>
  </div>
</div>
</div>

<div className="col col--6 margin-bottom--lg">
<div className="card">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>Familia Gemma</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <div style={{padding:'7px 0'}}>
      <strong>Gemma4 E4B</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>~2.5 GB (Q4_K_M) · Orin Nano 8 GB · JP 6.1/6.2/6.2.1</span><br/>
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
      <strong>Nemotron-3-Nano-30B</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>~24.5 GB (Q4_K_M) · <strong>AGX Orin 64 GB</strong> · JP 6.1/6.2/6.2.1</span><br/>
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
    <h3 style={{margin:0,fontSize:'1.05rem'}}>VLM (visión-lenguaje)</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <div style={{padding:'7px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}>
      <strong>Live VLM WebUI</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>7 VLM (Ollama Q4) · 8 GB mín. · JP 6.0-7.1</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run live-vlm-webui</code>
    </div>
    <div style={{padding:'7px 0'}}>
      <strong>LocateAnything</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>~7.3 GB de pesos (BF16) · Orin NX 16 GB · JP 6.x</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run locateanything</code>
    </div>
  </div>
</div>
</div>

<div className="col col--6 margin-bottom--lg">
<div className="card">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>YOLO y detección</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <div style={{padding:'7px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}>
      <strong>Ultralytics YOLO</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>detección / segmentación / pose / clasificación · 8 GB + · JP 4.6-6.2</span><br/>
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
      <strong>YOLO26 TensorRT C++</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>nativo, sin Docker · JP 6.0-7.2</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run yolo26-tensorrt</code>
    </div>
    <div style={{padding:'7px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}>
      <strong>YOLOv10</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>· 8 GB + · JP 5.1.1-6.0</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run yolov10</code>
    </div>
    <div style={{padding:'7px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}>
      <strong>Depth Anything V2</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>profundidad monocular · 16 GB · JP 5.1.1-5.1.3</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run depth-anything-v2</code>
    </div>
    <div style={{padding:'7px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}>
      <strong>Depth Anything V3</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>· 16 GB · JP 6.1-6.2.1</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run depth-anything-v3</code>
    </div>
    <div style={{padding:'7px 0'}}>
      <strong>NanoOWL</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>detección de vocabulario abierto · 8 GB + · JP 5.1.1-6.x</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run nanoowl</code>
    </div>
  </div>
</div>
</div>

<div className="col col--6 margin-bottom--lg">
<div className="card">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>Herramientas</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <div style={{padding:'7px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}>
      <strong>Ollama</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>(cualquier modelo) el tamaño depende del modelo + cuantización (normalmente Q4) · 8 GB + · JP 5.1.1-6.x</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run ollama</code>
    </div>
    <div style={{padding:'7px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}>
      <strong>Whisper</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>(STT) el tamaño depende de la variante de Whisper (small/base/large) · 8 GB + · JP 5.1.1-6.x</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run whisper</code>
    </div>
    <div style={{padding:'7px 0'}}>
      <strong>Llama-Factory</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>(fine-tune) la huella de entrenamiento depende del modelo + LoRA/QLoRA · 16 GB + · JP 5.1.1-5.1.3</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run llama-factory</code>
    </div>
  </div>
</div>
</div>

</div>

> **Nota:** los tamaños anteriores corresponden a la cuantización mostrada. Una mayor precisión (Q8 / FP16) aproximadamente duplica o más el tamaño de los pesos. Cada ejemplo también necesita suficiente espacio libre en disco (imagen + modelo): LLaVA FP16 necesita alrededor de 27.4 GB en total. Consulta la lista de ejemplos en el [README de jetson-examples](https://github.com/Seeed-Projects/jetson-examples) para conocer los tamaños exactos de las imágenes.

### 2.2 Despliegue manual: índice completo del tutorial

Cada categoría a continuación enlaza a un tutorial completo en este wiki. Elige el que coincida con tu tarea y síguelo en el dispositivo.

**Motor de un vistazo**

<div className="row">
  <div className="col col--2 margin-bottom--sm"><div className="card" style={{borderTop:'4px solid #8dc21f'}}><div className="card__body" style={{padding:'12px 16px'}}><strong>Ollama</strong><br/><span style={{fontSize:'0.88em',color:'var(--ifm-color-emphasis-700)'}}>Configuración sencilla</span></div></div></div>
  <div className="col col--2 margin-bottom--sm"><div className="card" style={{borderTop:'4px solid #8dc21f'}}><div className="card__body" style={{padding:'12px 16px'}}><strong>MLC LLM</strong><br/><span style={{fontSize:'0.88em',color:'var(--ifm-color-emphasis-700)'}}>Cuantizado Q4</span></div></div></div>
  <div className="col col--2 margin-bottom--sm"><div className="card" style={{borderTop:'4px solid #8dc21f'}}><div className="card__body" style={{padding:'12px 16px'}}><strong>llama.cpp</strong><br/><span style={{fontSize:'0.88em',color:'var(--ifm-color-emphasis-700)'}}>GGUF, control total</span></div></div></div>
  <div className="col col--3 margin-bottom--sm"><div className="card" style={{borderTop:'4px solid #8dc21f'}}><div className="card__body" style={{padding:'12px 16px'}}><strong>TensorRT Edge-LLM</strong><br/><span style={{fontSize:'0.88em',color:'var(--ifm-color-emphasis-700)'}}>Producción · JP 6.2</span></div></div></div>
  <div className="col col--3 margin-bottom--sm"><div className="card" style={{borderTop:'4px solid #8dc21f'}}><div className="card__body" style={{padding:'12px 16px'}}><strong>TensorRT-Model-Connect</strong><br/><span style={{fontSize:'0.88em',color:'var(--ifm-color-emphasis-700)'}}>Compilación en el dispositivo · JP 7.2</span></div></div></div>
</div>

<div className="row">

<div className="col col--6">
<div className="card margin-bottom--lg">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>1. LLM general</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:'6px 0 10px',fontSize:'0.88em',color:'var(--ifm-color-emphasis-700)'}}><strong>Estimación de VRAM:</strong> fiable — `params × bits/8 + KV cache + system`. Q4: 7B ≈ 4-5 GB, 27B ≈ 15-18 GB.</p>
    <ul style={{listStyle:'none',paddingLeft:0,margin:0}}>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/es/deploy_deepseek_on_jetson">DeepSeek-R1 7B con Ollama</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/es/deploy_deepseek_on_jetson_with_mlc">DeepSeek 1.5B con MLC</a> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>~60 tok/s</span></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/es/Quantized_Llama2_7B_with_MLC_LLM_on_Jetson">Llama2-7B Q4 con MLC</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/es/deploy_gptoss_on_jetson">GPT-OSS 20B con llama.cpp</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/es/How_to_Format_the_Output_of_LLM_Using_Langchain_on_Jetson">Salida estructurada de LLM con Langchain</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/es/Local_RAG_based_on_Jetson_with_LlamaIndex">RAG con LlamaIndex + ChromaDB</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/es/local_ai_ssistant">Asistente de IA local (AnythingLLM)</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/es/local_openclaw_on_recomputer_jetson">OpenClaw local (Clawdbot)</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/es/Finetune_LLM_on_Jetson">Ajuste fino con Llama-Factory</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/es/develop_recomputer_jetson_using_clawdbot">Desarrollar reComputer con Clawdbot</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/es/llm_interface_control_jetson">Control de interfaz de hardware con LLM</a></li>
      <li style={{padding:'5px 0'}}><a href="/es/control_motor_by_voice_llm_on_jetson">Controlar motor por voz con LLM</a></li>
    </ul>
  </div>
</div>
</div>

<div className="col col--6">
<div className="card margin-bottom--lg">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>2. VLM (Visión-Lenguaje)</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:'6px 0 10px',fontSize:'0.88em',color:'var(--ifm-color-emphasis-700)'}}><strong>Estimación de VRAM:</strong> aproximada — parte LLM + codificador de visión (0.3-4B) + resolución/baldosas de entrada. Una mayor resolución escala la VRAM de forma no lineal.</p>
    <ul style={{listStyle:'none',paddingLeft:0,margin:0}}>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/es/run_vlm_on_recomputer">Ejecutar VLM en reComputer</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/es/deploy_live_vlm_webui_on_jetson">WebUI VLM en vivo</a> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>7 VLMs · en tiempo real</span></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/es/deploy_joyai_vl_interaction_on_jetson_thor">JoyAI-VL-Interaction</a> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>Thor · voz/vídeo</span></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/es/speech_vlm">VLM con interacción por voz</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/es/vlm">Guardia de almacén LLaVA</a> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>Ollama llava-llama3 8B</span></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/es/run_zero_shot_detection_on_recomputer">Detección Zero-Shot</a></li>
    </ul>
  </div>
</div>
</div>

<div className="col col--6">
<div className="card margin-bottom--lg">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>3. Modelos generativos y del mundo</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:'6px 0 10px',fontSize:'0.88em',color:'var(--ifm-color-emphasis-700)'}}><strong>Estimación de VRAM:</strong> no solo por parámetros: el recuento de parches/cuadros de DiT, la atención temporal y U-Net vs DiT vs MoE cambian la VRAM real 3-5x con el mismo tamaño. Mide en el dispositivo.</p>
    <ul style={{listStyle:'none',paddingLeft:0,margin:0}}>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/es/How_to_run_local_llm_text_to_image_on_reComputer">Stable Diffusion (texto a imagen)</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="https://github.com/Seeed-Projects/jetson-examples">ComfyUI</a> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}><code>reComputer run comfyui</code></span></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="https://github.com/Seeed-Projects/jetson-examples">AudioCraft (generación de música)</a> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}><code>reComputer run audiocraft</code></span></li>
      <li style={{padding:'5px 0'}}><span style={{color:'var(--ifm-color-emphasis-500)'}}>Wan / generación de vídeo, modelos del mundo — aún sin despliegue verificado en Jetson; la VRAM debe medirse por modelo</span></li>
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
    <p style={{margin:'6px 0 10px',fontSize:'0.88em',color:'var(--ifm-color-emphasis-700)'}}><strong>Estimación de VRAM:</strong> no por parámetros: codificador de visión + número de cámaras + frecuencia de control + segmentación de acciones. Mide en el dispositivo.</p>
    <ul style={{listStyle:'none',paddingLeft:0,margin:0}}>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/es/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor">GR00T N1.5 + LeRobot SO-101 (Thor)</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/es/fine_tune_gr00t_n1.6_for_lerobot_so_arm_and_deploy_on_agx_orin">GR00T N1.6 + LeRobot SO-101 (AGX Orin)</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/es/fine_tune_gr00t_n1.7_for_rebot_arm_and_deploy_on_robotics_j601">GR00T N1.7 + reBot Arm (J601)</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/es/rebot_arm_b601_dm_graspnet_visual_grasping">Agarre visual GraspNet (reBot-DM)</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/es/ai_robotics_control_soarm_by_openclaw_on_jetson_thor">Controlar SO-Arm con OpenClaw (Thor)</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/es/control_rebot_arm_with_nemoclaw_on_nvidia_jetson_thor">Controlar reBot con NemoClaw (Thor)</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/es/getting_started_with_jetson_claw_on_orin_nano_nx_8gb">Inicio con Jetson-Claw (8 GB)</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/es/deploy_full_weight_gr00t_n1.7_tensorrt_jetpack7.2_agx_orin">GR00T N1.7 TensorRT de peso completo (JP 7.2)</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/es/voice_control_rebot_arm">Control por voz del brazo reBot B601</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/es/ai_robotics_microduck_rl_on_jetson">Microduck RL en Jetson</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/es/ai_robotics_microduck_rl_jetson_environment">Entorno Microduck RL</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/es/ai_robotics_microduck_rl_official_policies">Políticas oficiales de Microduck RL</a></li>
      <li style={{padding:'5px 0'}}><a href="/es/ai_robotics_microduck_rl_custom_motion_training">Movimiento personalizado de Microduck RL</a></li>
    </ul>
  </div>
</div>
</div>

<div className="col col--6">
<div className="card margin-bottom--lg">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>5. Voz (ASR / TTS)</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:'6px 0 10px',fontSize:'0.88em',color:'var(--ifm-color-emphasis-700)'}}><strong>Estimación de VRAM:</strong> modelos pequeños: normalmente bien en 8 GB. Whisper/Riva se ejecutan junto con un LLM en una canalización.</p>
    <ul style={{listStyle:'none',paddingLeft:0,margin:0}}>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/es/Whisper_on_Jetson_for_Real_Time_Speech_to_Text">Whisper de voz a texto</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/es/Real_Time_Subtitle_Recoder_on_Nvidia_Jetson">Grabador de subtítulos en tiempo real</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/es/deploy_dia_on_jetson">Dia de texto a voz</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/es/Local_Voice_Chatbot">Chatbot de voz (Riva + Llama2)</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/es/local_voice_llm_on_recomputer_jetson_for_reachy_mini">LLM de voz para Reachy Mini</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/es/local_chatbot_recomputer">Chatbot de voz local</a></li>
      <li style={{padding:'5px 0'}}><a href="https://github.com/Seeed-Projects/jetson-examples">Parler-TTS / AudioCraft</a> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}><code>reComputer run parler-tts</code></span></li>
    </ul>
  </div>
</div>
</div>

<div className="col col--6">
<div className="card margin-bottom--lg">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>6. Visión por computador (YOLO y detección)</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:'6px 0 10px',fontSize:'0.88em',color:'var(--ifm-color-emphasis-700)'}}><strong>Estimación de VRAM:</strong> pequeña: los modelos YOLO normalmente se ejecutan en 8 GB con TensorRT y escalan con la resolución de entrada. Consulta la lista de un solo comando en la sección 2.1.</p>
    <ul style={{listStyle:'none',paddingLeft:0,margin:0}}>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/es/YOLOv8-TRT-Jetson">YOLOv8 con TensorRT</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/es/YOLOv8-DeepStream-TRT-Jetson">YOLOv8 con DeepStream + TensorRT</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/es/How_to_Train_and_Deploy_YOLOv8_on_reComputer">Entrenar y desplegar YOLOv8</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/es/train_and_deploy_a_custom_classification_model_with_yolov8">Clasificación personalizada con YOLOv8</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/es/YOLOv5-Object-Detection-Jetson">Detección de objetos con YOLOv5</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/es/yolov11_with_depth_camera">YOLOv11 + cámara de profundidad</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/es/ai_roboticsyolov26_dual_camera_system">Sistema de doble cámara YOLOv26</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/es/deploy_depth_anything_v3_jetson_agx_orin">Depth Anything V3</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/es/Jetson-Nano-MaskCam">MaskCam</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/es/Traffic-Management-DeepStream-SDK">Gestión de tráfico (DeepStream)</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/es/DashCamNet-with-Jetson-Xavier-NX-Multicamera">DashCamNet multicámara</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/es/multiple_cameras_with_jetson">Cámaras Multi-GMSL</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/es/jetson_fisheye_surround_view_demo">Vista envolvente de ojo de pez con cuatro cámaras</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/es/deploy_visual_perception_engine_recomputer">Motor de inferencia de visión multitarea</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/es/streaming_vision_agent_on_jetson">Agente de visión en streaming (Qwen3-VL)</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/es/deploy_frigate_on_jetson">Frigate NVR</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/es/Security_Scan">Escaneo de rayos X de seguridad</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/es/industrial_vision_monitoring_on_industrial">Supervisión de visión industrial</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/es/deploy_nvblox_jetson_agx_orin">Mapeo 3D con NVBlox</a></li>
      <li style={{padding:'5px 0'}}><a href="/es/ai_nvr_with_jetson">NVR de IA</a></li>
    </ul>
  </div>
</div>
</div>

<div className="col col--12">
<div className="card margin-bottom--lg">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>Rendimiento y Distribuido</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <ul style={{listStyle:'none',paddingLeft:0,margin:0,display:'flex',flexWrap:'wrap',gap:'4px 28px'}}>
      <li style={{padding:'7px 0'}}><a href="/es/deploy_tensorrt_edge_llm_on_jetpack6.2">TensorRT Edge-LLM (JP 6.2)</a></li>
      <li style={{padding:'7px 0'}}><a href="/es/deploy_tensorrt_edge_llm_on_jetpack7.2">TensorRT Edge-LLM (JP 7.2)</a></li>
      <li style={{padding:'7px 0'}}><a href="/es/ai_robotics_deploy_tensorrt_model_connect_on_jetson">TensorRT-Model-Connect (JP 7.2)</a></li>
      <li style={{padding:'7px 0'}}><a href="/es/ai_robotics_distributed_llama_cpp_rpc_jetson">llama.cpp RPC distribuido</a></li>
    </ul>
  </div>
</div>
</div>

</div>

## 3. ¿Cómo hago el despliegue?

<div className="row">

<div className="col col--4 margin-bottom--lg">
<div className="card" style={{borderTop:'4px solid #8dc21f'}}>
  <div className="card__header" style={{padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>AI Lab (plataforma en línea)</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <ol style={{margin:'6px 0 10px',paddingLeft:18}}>
      <li style={{padding:'3px 0'}}>Abre <a href="https://sensecraft.seeed.cc/ai-lab/en/models?device=jetson-orin-nano">reComputer AI Lab Models</a> (Jetson prefiltrado)</li>
      <li style={{padding:'3px 0'}}>Filtra por dispositivo (p. ej. Jetson Orin Nano) y explora modelos de CV / LLM / VLM con benchmarks</li>
      <li style={{padding:'3px 0'}}>Copia el comando Docker de una sola orden y ejecútalo en tu dispositivo</li>
    </ol>
    <p style={{margin:'10px 0 0',fontSize:'0.9em',color:'var(--ifm-color-emphasis-700)'}}>Más de 100 modelos optimizados, sin configuración, incluye cifras de benchmark.</p>
  </div>
</div>
</div>

<div className="col col--4 margin-bottom--lg">
<div className="card" style={{borderTop:'4px solid #0ea5e9'}}>
  <div className="card__header" style={{padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>CLI de un solo comando</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:'6px 0 10px'}}>Instala jetson-examples y luego despliega cualquier modelo de la sección 2.1:</p>
    <pre style={{margin:'0 0 10px'}}><code>{`sudo apt install python3-pip
pip3 install jetson-examples

# Deploy a model (example)
reComputer run qwen3.5-4b`}</code></pre>
    <p style={{margin:0,fontSize:'0.9em',color:'var(--ifm-color-emphasis-700)'}}>Expone un endpoint de API compatible con OpenAI, utilizable directamente con curl o cualquier SDK de OpenAI.</p>
  </div>
</div>
</div>

<div className="col col--4 margin-bottom--lg">
<div className="card" style={{borderTop:'4px solid #f59e0b'}}>
  <div className="card__header" style={{padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>Despliegue manual</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:'6px 0 10px'}}>Elige un motor de la sección 2.2 y sigue su tutorial en tu dispositivo:</p>
    <ul style={{margin:'0 0 0 18px',padding:0}}>
      <li style={{padding:'3px 0'}}>Ollama — inicio más sencillo, gran biblioteca de modelos</li>
      <li style={{padding:'3px 0'}}>MLC LLM — modelos cuantizados (Q4) compilados</li>
      <li style={{padding:'3px 0'}}>llama.cpp — ligero, GGUF, control total</li>
      <li style={{padding:'3px 0'}}>TensorRT Edge-LLM / Model-Connect — velocidad de producción</li>
    </ul>
    <p style={{margin:'10px 0 0',fontSize:'0.9em',color:'var(--ifm-color-emphasis-700)'}}>Todos los tutoriales están verificados en dispositivos reComputer Jetson.</p>
  </div>
</div>
</div>

</div>

## 4. Benchmark de rendimiento: JetPack 6.2 vs 7.2

<div className="card margin-bottom--lg">
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:'8px 0 12px'}}>Mismo modelo <strong>Qwen3.5-27B Q4_K_M</strong> (llama.cpp) en hardware de clase AGX Orin, JetPack 6.2 vs 7.2:</p>
    <table>
      <thead>
        <tr><th>Métrica</th><th>JetPack 6.2</th><th>JetPack 7.2</th><th>Cambio</th></tr>
      </thead>
      <tbody>
        <tr><td>Memoria después de cargar el modelo</td><td>24.6 GB / 30 GB</td><td>14.7 GB / 30 GB</td><td>~40% menos</td></tr>
        <tr><td>Frecuencia de la GPU durante la inferencia</td><td>930 MHz</td><td>1.36 GHz</td><td>mayor boost</td></tr>
        <tr><td>Procesamiento del prompt</td><td>18.2 tok/s</td><td>25.8 tok/s</td><td>~41.8% más rápido</td></tr>
        <tr><td>Generación de tokens</td><td>4.3 tok/s</td><td>5.5 tok/s</td><td>~27.9% más rápido</td></tr>
      </tbody>
    </table>
    <p style={{margin:'10px 0 4px'}}>Detalles: <a href="/es/jetpack72_deep_dive">JetPack 7.2 Deep Dive</a>.</p>
  </div>
</div>

## 5. Preguntas frecuentes (FAQ)

<div className="row">

<div className="col col--12 margin-bottom--lg">
<div className="card">
  <div className="card__header" style={{padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>¿Puedo ejecutar DeepSeek en Jetson?</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:0}}>Sí. DeepSeek-R1 7B funciona bien en dispositivos Orin NX de 16 GB mediante Ollama (<a href="/es/deploy_deepseek_on_jetson">tutorial</a>); la variante cuantizada con MLC de 1.5B alcanza alrededor de 60 tok/s en Orin NX (<a href="/es/deploy_deepseek_on_jetson_with_mlc">tutorial</a>).</p>
  </div>
</div>
</div>

<div className="col col--12 margin-bottom--lg">
<div className="card">
  <div className="card__header" style={{padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>Mi modelo es demasiado grande para un solo dispositivo, ¿qué puedo hacer?</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <ul style={{margin:0,paddingLeft:18}}>
      <li style={{padding:'3px 0'}}>Usa una cuantización más pequeña (Q4_K_M en lugar de Q8/FP16).</li>
      <li style={{padding:'3px 0'}}>Limita la longitud de contexto (<code>--max-sequence-length</code>) para reducir la caché KV.</li>
      <li style={{padding:'3px 0'}}>Distribuye la inferencia entre varios dispositivos reComputer con llama.cpp RPC (<a href="/es/ai_robotics_distributed_llama_cpp_rpc_jetson">tutorial</a>).</li>
    </ul>
  </div>
</div>
</div>

<div className="col col--12 margin-bottom--lg">
<div className="card">
  <div className="card__header" style={{padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>¿Necesito una GPU en la nube?</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:0}}>No. Todo lo anterior se ejecuta completamente en el dispositivo. Los datos permanecen en el edge y no hay tarifas recurrentes de API.</p>
  </div>
</div>
</div>

</div>

## Más recursos

<div className="row">

<div className="col col--3 margin-bottom--lg">
<div className="card">
  <div className="card__body" style={{padding:'14px 16px'}}>
    <a href="/es/Generative_AI_Intro" style={{fontWeight:600}}>Introducción a la IA generativa</a>
    <p style={{margin:'6px 0 0',fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>Resumen del tema GenAI para reComputer-Jetson</p>
  </div>
</div>
</div>

<div className="col col--3 margin-bottom--lg">
<div className="card">
  <div className="card__body" style={{padding:'14px 16px'}}>
    <a href="/es/Finetune_LLM_on_Jetson" style={{fontWeight:600}}>Ajuste fino con Llama-Factory</a>
    <p style={{margin:'6px 0 0',fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>Dataset → entrenamiento → exportación → despliegue</p>
  </div>
</div>
</div>

<div className="col col--3 margin-bottom--lg">
<div className="card">
  <div className="card__body" style={{padding:'14px 16px'}}>
    <a href="/es/Jetson_FAQ" style={{fontWeight:600}}>Jetson FAQ</a>
    <p style={{margin:'6px 0 0',fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>Preguntas de solución de problemas y uso</p>
  </div>
</div>
</div>

<div className="col col--3 margin-bottom--lg">
<div className="card">
  <div className="card__body" style={{padding:'14px 16px'}}>
    <a href="https://github.com/Seeed-Projects/jetson-examples" style={{fontWeight:600}}>jetson-examples</a>
    <p style={{margin:'6px 0 0',fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>Repositorio de despliegue con un solo comando</p>
  </div>
</div>
</div>

</div>

## Soporte técnico y debate sobre productos

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>