---
description: How to deploy AI models on reComputer Jetson devices — LLM, VLM, generative, embodied (VLA), speech, and computer vision. Start with the online platform or one-command deployment through jetson-examples, or use alternative engines such as Ollama, llama.cpp, MLC, TensorRT Edge-LLM, and TensorRT-Model-Connect.
title: Deploy AI Models on Jetson - What Can Run and How
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

# Deploy AI Models on Jetson: What Can Run and How

This page covers the questions that come up most often when running AI models on NVIDIA Jetson — LLMs, vision-language models, generative models, embodied/VLA models, speech, and computer vision:

1. **What model size (in B, billion parameters) can my device run?**
2. **Which models can I deploy?**
3. **How do I deploy them?**

Three ways to deploy:

- **Online platform (recommended):** browse and deploy from the [reComputer AI Lab](https://sensecraft.seeed.cc/ai-lab/en/models?device=jetson-orin-nano) — 100+ optimized CV / LLM / VLM models for reComputer Jetson with one-command Docker deployment and benchmarks. Pick a model on the page, copy the command, run it.
- **One-command CLI:** [jetson-examples](https://github.com/Seeed-Projects/jetson-examples) — `reComputer run <model>`.
- **Manual:** you pick the engine (Ollama, llama.cpp, MLC, TensorRT Edge-LLM, TensorRT-Model-Connect) and follow the tutorials listed below.

---

## 1. What model size can my device run?

"Model size" is expressed in **B (billion parameters)** — a 7B model has 7 billion parameters, and larger B numbers need more memory. What matters is your Jetson module's **unified memory** (the module, not the carrier board). For a **quantized (Q4_K_M)** model:

<div className="row">

<div className="col col--4 margin-bottom--lg">
<div className="card" style={{borderTop:'4px solid #10b981'}}>
  <div className="card__header" style={{padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>8 GB · Orin Nano</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:0,fontWeight:600}}>1B – 4B models</p>
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
    <p style={{margin:0,fontWeight:600}}>7B – 8B models</p>
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
    <p style={{margin:0,fontWeight:600}}>up to 27B (quantized)</p>
    <p style={{margin:'6px 0 0',fontSize:'0.9em',color:'var(--ifm-color-emphasis-700)'}}>Qwen3.5-27B Q4_K_M (see JetPack 6.2 vs 7.2 benchmark below)</p>
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
    <p style={{margin:0,fontWeight:600}}>35B+ and larger</p>
    <p style={{margin:'6px 0 0',fontSize:'0.9em',color:'var(--ifm-color-emphasis-700)'}}>Nemotron3 33B, JoyAI VLM / ASR / TTS stack</p>
  </div>
</div>
</div>

</div>

Memory use includes the KV cache and system overhead, so a model whose weights nearly fill the RAM will not run stably. Measured on AGX Orin 32 GB, a Qwen3.5-27B Q4_K_M model used about 24.6 GB of the 30 GB available after load — that is a realistic ceiling for 32 GB devices.

## 2. Which models can I deploy?

### 2.1 One-command deployment (jetson-examples)

Install once, then run any supported model with one command:

```bash
sudo apt install python3-pip
pip3 install jetson-examples
```

<div className="row">

<div className="col col--6 margin-bottom--lg">
<div className="card">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>Qwen Series</h3>
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
    <h3 style={{margin:0,fontSize:'1.05rem'}}>Llama Family</h3>
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
      <strong>LLaVA 7B</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>(VLM) ~15 GB total (FP16) · Orin NX 16 GB · JP 5.1.1-6.0</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run llava</code>
    </div>
  </div>
</div>
</div>

<div className="col col--6 margin-bottom--lg">
<div className="card">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>Gemma Family</h3>
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
    <h3 style={{margin:0,fontSize:'1.05rem'}}>NVIDIA Models (64 GB)</h3>
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
    <h3 style={{margin:0,fontSize:'1.05rem'}}>VLM (Vision-Language)</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <div style={{padding:'7px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}>
      <strong>Live VLM WebUI</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>7 VLMs (Ollama Q4) · 8 GB min · JP 6.0-7.1</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run live-vlm-webui</code>
    </div>
    <div style={{padding:'7px 0'}}>
      <strong>LocateAnything</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>~7.3 GB weights (BF16) · Orin NX 16 GB · JP 6.x</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run locateanything</code>
    </div>
  </div>
</div>
</div>

<div className="col col--6 margin-bottom--lg">
<div className="card">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>YOLO & Detection</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <div style={{padding:'7px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}>
      <strong>Ultralytics YOLO</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>detection / segmentation / pose / classification · 8 GB + · JP 4.6-6.2</span><br/>
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
      <strong>YOLO26 TensorRT C++</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>native, no Docker · JP 6.0-7.2</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run yolo26-tensorrt</code>
    </div>
    <div style={{padding:'7px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}>
      <strong>YOLOv10</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>· 8 GB + · JP 5.1.1-6.0</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run yolov10</code>
    </div>
    <div style={{padding:'7px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}>
      <strong>Depth Anything V2</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>monocular depth · 16 GB · JP 5.1.1-5.1.3</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run depth-anything-v2</code>
    </div>
    <div style={{padding:'7px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}>
      <strong>Depth Anything V3</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>· 16 GB · JP 6.1-6.2.1</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run depth-anything-v3</code>
    </div>
    <div style={{padding:'7px 0'}}>
      <strong>NanoOWL</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>open-vocabulary detection · 8 GB + · JP 5.1.1-6.x</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run nanoowl</code>
    </div>
  </div>
</div>
</div>

<div className="col col--6 margin-bottom--lg">
<div className="card">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>Tooling</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <div style={{padding:'7px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}>
      <strong>Ollama</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>(any model) size depends on model + quant (usually Q4) · 8 GB + · JP 5.1.1-6.x</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run ollama</code>
    </div>
    <div style={{padding:'7px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}>
      <strong>Whisper</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>(STT) size depends on Whisper variant (small/base/large) · 8 GB + · JP 5.1.1-6.x</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run whisper</code>
    </div>
    <div style={{padding:'7px 0'}}>
      <strong>Llama-Factory</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>(fine-tune) training footprint depends on model + LoRA/QLoRA · 16 GB + · JP 5.1.1-5.1.3</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run llama-factory</code>
    </div>
  </div>
</div>
</div>

</div>

> **Note:** sizes above are for the shown quantization. Higher precision (Q8 / FP16) roughly doubles or more the weight size. Each example also needs enough free disk (image + model) — LLaVA FP16 needs about 27.4 GB total. Check the example list in the [jetson-examples README](https://github.com/Seeed-Projects/jetson-examples) for exact image sizes.

### 2.2 Manual deployment: full tutorial index

Each category below links to a complete tutorial on this wiki. Pick the one that matches your task and follow it on the device.

**Engine at a glance**

<div className="row">
  <div className="col col--2 margin-bottom--sm"><div className="card" style={{borderTop:'4px solid #8dc21f'}}><div className="card__body" style={{padding:'12px 16px'}}><strong>Ollama</strong><br/><span style={{fontSize:'0.88em',color:'var(--ifm-color-emphasis-700)'}}>Easy setup</span></div></div></div>
  <div className="col col--2 margin-bottom--sm"><div className="card" style={{borderTop:'4px solid #8dc21f'}}><div className="card__body" style={{padding:'12px 16px'}}><strong>MLC LLM</strong><br/><span style={{fontSize:'0.88em',color:'var(--ifm-color-emphasis-700)'}}>Q4 quantized</span></div></div></div>
  <div className="col col--2 margin-bottom--sm"><div className="card" style={{borderTop:'4px solid #8dc21f'}}><div className="card__body" style={{padding:'12px 16px'}}><strong>llama.cpp</strong><br/><span style={{fontSize:'0.88em',color:'var(--ifm-color-emphasis-700)'}}>GGUF, full control</span></div></div></div>
  <div className="col col--3 margin-bottom--sm"><div className="card" style={{borderTop:'4px solid #8dc21f'}}><div className="card__body" style={{padding:'12px 16px'}}><strong>TensorRT Edge-LLM</strong><br/><span style={{fontSize:'0.88em',color:'var(--ifm-color-emphasis-700)'}}>Production · JP 6.2</span></div></div></div>
  <div className="col col--3 margin-bottom--sm"><div className="card" style={{borderTop:'4px solid #8dc21f'}}><div className="card__body" style={{padding:'12px 16px'}}><strong>TensorRT-Model-Connect</strong><br/><span style={{fontSize:'0.88em',color:'var(--ifm-color-emphasis-700)'}}>On-device build · JP 7.2</span></div></div></div>
</div>

<div className="row">

<div className="col col--6">
<div className="card margin-bottom--lg">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>1. General LLM</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:'6px 0 10px',fontSize:'0.88em',color:'var(--ifm-color-emphasis-700)'}}><strong>VRAM estimate:</strong> reliable — `params × bits/8 + KV cache + system`. Q4: 7B ≈ 4-5 GB, 27B ≈ 15-18 GB.</p>
    <ul style={{listStyle:'none',paddingLeft:0,margin:0}}>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/deploy_deepseek_on_jetson">DeepSeek-R1 7B with Ollama</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/deploy_deepseek_on_jetson_with_mlc">DeepSeek 1.5B with MLC</a> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>~60 tok/s</span></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/Quantized_Llama2_7B_with_MLC_LLM_on_Jetson">Llama2-7B Q4 with MLC</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/deploy_gptoss_on_jetson">GPT-OSS 20B with llama.cpp</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/How_to_Format_the_Output_of_LLM_Using_Langchain_on_Jetson">Structured LLM output with Langchain</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/Local_RAG_based_on_Jetson_with_LlamaIndex">RAG with LlamaIndex + ChromaDB</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/local_ai_ssistant">Local AI Assistant (AnythingLLM)</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/local_openclaw_on_recomputer_jetson">Local OpenClaw (Clawdbot)</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/Finetune_LLM_on_Jetson">Fine-tune with Llama-Factory</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/develop_recomputer_jetson_using_clawdbot">Develop reComputer with Clawdbot</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/llm_interface_control_jetson">LLM hardware interface control</a></li>
      <li style={{padding:'5px 0'}}><a href="/control_motor_by_voice_llm_on_jetson">Voice control motor by LLM</a></li>
    </ul>
  </div>
</div>
</div>

<div className="col col--6">
<div className="card margin-bottom--lg">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>2. VLM (Vision-Language)</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:'6px 0 10px',fontSize:'0.88em',color:'var(--ifm-color-emphasis-700)'}}><strong>VRAM estimate:</strong> roughly — LLM part + vision encoder (0.3-4B) + input resolution/tiles. Higher resolution scales VRAM non-linearly.</p>
    <ul style={{listStyle:'none',paddingLeft:0,margin:0}}>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/run_vlm_on_recomputer">Run VLM on reComputer</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/deploy_live_vlm_webui_on_jetson">Live VLM WebUI</a> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>7 VLMs · real-time</span></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/deploy_joyai_vl_interaction_on_jetson_thor">JoyAI-VL-Interaction</a> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>Thor · voice/video</span></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/speech_vlm">VLM with speech interaction</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/vlm">LLaVA warehouse guard</a> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>Ollama llava-llama3 8B</span></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/run_zero_shot_detection_on_recomputer">Zero-Shot Detection</a></li>
    </ul>
  </div>
</div>
</div>

<div className="col col--6">
<div className="card margin-bottom--lg">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>3. Generative & World models</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:'6px 0 10px',fontSize:'0.88em',color:'var(--ifm-color-emphasis-700)'}}><strong>VRAM estimate:</strong> not by parameters alone — DiT patch/frame count, temporal attention, U-Net vs DiT vs MoE change actual VRAM 3-5x at the same size. Measure on device.</p>
    <ul style={{listStyle:'none',paddingLeft:0,margin:0}}>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/How_to_run_local_llm_text_to_image_on_reComputer">Stable Diffusion (text-to-image)</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="https://github.com/Seeed-Projects/jetson-examples">ComfyUI</a> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}><code>reComputer run comfyui</code></span></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="https://github.com/Seeed-Projects/jetson-examples">AudioCraft (music gen)</a> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}><code>reComputer run audiocraft</code></span></li>
      <li style={{padding:'5px 0'}}><span style={{color:'var(--ifm-color-emphasis-500)'}}>Wan / video generation, world models — no verified Jetson deployment yet; VRAM must be measured per model</span></li>
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
    <p style={{margin:'6px 0 10px',fontSize:'0.88em',color:'var(--ifm-color-emphasis-700)'}}><strong>VRAM estimate:</strong> not by parameters — vision encoder + camera count + control rate + action chunking. Measure on device.</p>
    <ul style={{listStyle:'none',paddingLeft:0,margin:0}}>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor">GR00T N1.5 + LeRobot SO-101 (Thor)</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/fine_tune_gr00t_n1.6_for_lerobot_so_arm_and_deploy_on_agx_orin">GR00T N1.6 + LeRobot SO-101 (AGX Orin)</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/fine_tune_gr00t_n1.7_for_rebot_arm_and_deploy_on_robotics_j601">GR00T N1.7 + reBot Arm (J601)</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/rebot_arm_b601_dm_graspnet_visual_grasping">GraspNet visual grasping (reBot-DM)</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ai_robotics_control_soarm_by_openclaw_on_jetson_thor">Control SO-Arm by OpenClaw (Thor)</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/control_rebot_arm_with_nemoclaw_on_nvidia_jetson_thor">Control reBot by NemoClaw (Thor)</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/getting_started_with_jetson_claw_on_orin_nano_nx_8gb">Jetson-Claw starter (8 GB)</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/deploy_full_weight_gr00t_n1.7_tensorrt_jetpack7.2_agx_orin">GR00T N1.7 full-weight TensorRT (JP 7.2)</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/voice_control_rebot_arm">Voice-control reBot Arm B601</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ai_robotics_microduck_rl_on_jetson">Microduck RL on Jetson</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ai_robotics_microduck_rl_jetson_environment">Microduck RL environment</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ai_robotics_microduck_rl_official_policies">Microduck RL official policies</a></li>
      <li style={{padding:'5px 0'}}><a href="/ai_robotics_microduck_rl_custom_motion_training">Microduck RL custom motion</a></li>
    </ul>
  </div>
</div>
</div>

<div className="col col--6">
<div className="card margin-bottom--lg">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>5. Speech (ASR / TTS)</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:'6px 0 10px',fontSize:'0.88em',color:'var(--ifm-color-emphasis-700)'}}><strong>VRAM estimate:</strong> small models — usually fine on 8 GB. Whisper/Riva run alongside an LLM in a pipeline.</p>
    <ul style={{listStyle:'none',paddingLeft:0,margin:0}}>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/Whisper_on_Jetson_for_Real_Time_Speech_to_Text">Whisper Speech-to-Text</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/Real_Time_Subtitle_Recoder_on_Nvidia_Jetson">Real-time Subtitle Recorder</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/deploy_dia_on_jetson">Dia Text-to-Speech</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/Local_Voice_Chatbot">Voice Chatbot (Riva + Llama2)</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/local_voice_llm_on_recomputer_jetson_for_reachy_mini">Voice LLM for Reachy Mini</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/local_chatbot_recomputer">Local voice chatbot</a></li>
      <li style={{padding:'5px 0'}}><a href="https://github.com/Seeed-Projects/jetson-examples">Parler-TTS / AudioCraft</a> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}><code>reComputer run parler-tts</code></span></li>
    </ul>
  </div>
</div>
</div>

<div className="col col--6">
<div className="card margin-bottom--lg">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>6. Computer Vision (YOLO & detection)</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:'6px 0 10px',fontSize:'0.88em',color:'var(--ifm-color-emphasis-700)'}}><strong>VRAM estimate:</strong> small — YOLO models typically run on 8 GB with TensorRT, and scale with input resolution. See the one-command list in section 2.1.</p>
    <ul style={{listStyle:'none',paddingLeft:0,margin:0}}>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/YOLOv8-TRT-Jetson">YOLOv8 with TensorRT</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/YOLOv8-DeepStream-TRT-Jetson">YOLOv8 with DeepStream + TensorRT</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/How_to_Train_and_Deploy_YOLOv8_on_reComputer">Train and deploy YOLOv8</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/train_and_deploy_a_custom_classification_model_with_yolov8">YOLOv8 custom classification</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/YOLOv5-Object-Detection-Jetson">YOLOv5 object detection</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/yolov11_with_depth_camera">YOLOv11 + Depth Camera</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ai_roboticsyolov26_dual_camera_system">YOLOv26 dual camera system</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/deploy_depth_anything_v3_jetson_agx_orin">Depth Anything V3</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/Jetson-Nano-MaskCam">MaskCam</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/Traffic-Management-DeepStream-SDK">Traffic Management (DeepStream)</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/DashCamNet-with-Jetson-Xavier-NX-Multicamera">DashCamNet multicamera</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/multiple_cameras_with_jetson">Multi-GMSL cameras</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/jetson_fisheye_surround_view_demo">Four-camera fisheye surround view</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/deploy_visual_perception_engine_recomputer">Multi-task vision inference engine</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/streaming_vision_agent_on_jetson">Streaming Vision Agent (Qwen3-VL)</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/deploy_frigate_on_jetson">Frigate NVR</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/Security_Scan">Security X-ray scan</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/industrial_vision_monitoring_on_industrial">Industrial vision monitoring</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/deploy_nvblox_jetson_agx_orin">NVBlox 3D mapping</a></li>
      <li style={{padding:'5px 0'}}><a href="/ai_nvr_with_jetson">AI NVR</a></li>
    </ul>
  </div>
</div>
</div>

<div className="col col--12">
<div className="card margin-bottom--lg">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>Performance & Distributed</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <ul style={{listStyle:'none',paddingLeft:0,margin:0,display:'flex',flexWrap:'wrap',gap:'4px 28px'}}>
      <li style={{padding:'7px 0'}}><a href="/deploy_tensorrt_edge_llm_on_jetpack6.2">TensorRT Edge-LLM (JP 6.2)</a></li>
      <li style={{padding:'7px 0'}}><a href="/deploy_tensorrt_edge_llm_on_jetpack7.2">TensorRT Edge-LLM (JP 7.2)</a></li>
      <li style={{padding:'7px 0'}}><a href="/ai_robotics_deploy_tensorrt_model_connect_on_jetson">TensorRT-Model-Connect (JP 7.2)</a></li>
      <li style={{padding:'7px 0'}}><a href="/ai_robotics_distributed_llama_cpp_rpc_jetson">Distributed llama.cpp RPC</a></li>
    </ul>
  </div>
</div>
</div>

</div>

## 3. How do I deploy?

<div className="row">

<div className="col col--4 margin-bottom--lg">
<div className="card" style={{borderTop:'4px solid #8dc21f'}}>
  <div className="card__header" style={{padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>AI Lab (online platform)</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <ol style={{margin:'6px 0 10px',paddingLeft:18}}>
      <li style={{padding:'3px 0'}}>Open <a href="https://sensecraft.seeed.cc/ai-lab/en/models?device=jetson-orin-nano">reComputer AI Lab Models</a> (Jetson pre-filtered)</li>
      <li style={{padding:'3px 0'}}>Filter by device (e.g. Jetson Orin Nano) and browse CV / LLM / VLM models with benchmarks</li>
      <li style={{padding:'3px 0'}}>Copy the one-command Docker command and run it on your device</li>
    </ol>
    <p style={{margin:'10px 0 0',fontSize:'0.9em',color:'var(--ifm-color-emphasis-700)'}}>100+ optimized models, no setup, includes benchmark numbers.</p>
  </div>
</div>
</div>

<div className="col col--4 margin-bottom--lg">
<div className="card" style={{borderTop:'4px solid #0ea5e9'}}>
  <div className="card__header" style={{padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>One-command CLI</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:'6px 0 10px'}}>Install jetson-examples, then deploy any model from section 2.1:</p>
    <pre style={{margin:'0 0 10px'}}><code>{`sudo apt install python3-pip
pip3 install jetson-examples

# Deploy a model (example)
reComputer run qwen3.5-4b`}</code></pre>
    <p style={{margin:0,fontSize:'0.9em',color:'var(--ifm-color-emphasis-700)'}}>Exposes an OpenAI-compatible API endpoint, usable directly with curl or any OpenAI SDK.</p>
  </div>
</div>
</div>

<div className="col col--4 margin-bottom--lg">
<div className="card" style={{borderTop:'4px solid #f59e0b'}}>
  <div className="card__header" style={{padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>Manual deployment</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:'6px 0 10px'}}>Pick an engine from section 2.2 and follow its tutorial on your device:</p>
    <ul style={{margin:'0 0 0 18px',padding:0}}>
      <li style={{padding:'3px 0'}}>Ollama — easiest start, large model library</li>
      <li style={{padding:'3px 0'}}>MLC LLM — quantized (Q4) compiled models</li>
      <li style={{padding:'3px 0'}}>llama.cpp — lightweight, GGUF, full control</li>
      <li style={{padding:'3px 0'}}>TensorRT Edge-LLM / Model-Connect — production speed</li>
    </ul>
    <p style={{margin:'10px 0 0',fontSize:'0.9em',color:'var(--ifm-color-emphasis-700)'}}>All tutorials are verified on reComputer Jetson devices.</p>
  </div>
</div>
</div>

</div>

## 4. Performance benchmark: JetPack 6.2 vs 7.2

<div className="card margin-bottom--lg">
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:'8px 0 12px'}}>Same <strong>Qwen3.5-27B Q4_K_M</strong> model (llama.cpp) on AGX Orin-class hardware, JetPack 6.2 vs 7.2:</p>
    <table>
      <thead>
        <tr><th>Metric</th><th>JetPack 6.2</th><th>JetPack 7.2</th><th>Change</th></tr>
      </thead>
      <tbody>
        <tr><td>Memory after model load</td><td>24.6 GB / 30 GB</td><td>14.7 GB / 30 GB</td><td>~40% lower</td></tr>
        <tr><td>GPU frequency during inference</td><td>930 MHz</td><td>1.36 GHz</td><td>higher boost</td></tr>
        <tr><td>Prompt processing</td><td>18.2 tok/s</td><td>25.8 tok/s</td><td>~41.8% faster</td></tr>
        <tr><td>Token generation</td><td>4.3 tok/s</td><td>5.5 tok/s</td><td>~27.9% faster</td></tr>
      </tbody>
    </table>
    <p style={{margin:'10px 0 4px'}}>Details: <a href="/jetpack72_deep_dive">JetPack 7.2 Deep Dive</a>.</p>
  </div>
</div>

## 5. FAQ

<div className="row">

<div className="col col--12 margin-bottom--lg">
<div className="card">
  <div className="card__header" style={{padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>Can I run DeepSeek on Jetson?</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:0}}>Yes. DeepSeek-R1 7B runs well on Orin NX 16 GB devices via Ollama (<a href="/deploy_deepseek_on_jetson">tutorial</a>); the MLC-quantized 1.5B variant reaches about 60 tok/s on Orin NX (<a href="/deploy_deepseek_on_jetson_with_mlc">tutorial</a>).</p>
  </div>
</div>
</div>

<div className="col col--12 margin-bottom--lg">
<div className="card">
  <div className="card__header" style={{padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>My model is too big for one device — what can I do?</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <ul style={{margin:0,paddingLeft:18}}>
      <li style={{padding:'3px 0'}}>Use a smaller quantization (Q4_K_M instead of Q8/FP16).</li>
      <li style={{padding:'3px 0'}}>Limit the context length (<code>--max-sequence-length</code>) to shrink the KV cache.</li>
      <li style={{padding:'3px 0'}}>Distribute inference across multiple reComputer devices with llama.cpp RPC (<a href="/ai_robotics_distributed_llama_cpp_rpc_jetson">tutorial</a>).</li>
    </ul>
  </div>
</div>
</div>

<div className="col col--12 margin-bottom--lg">
<div className="card">
  <div className="card__header" style={{padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>Do I need a cloud GPU?</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:0}}>No. Everything above runs fully on-device. Data stays on the edge and there are no recurring API fees.</p>
  </div>
</div>
</div>

</div>

## More resources

<div className="row">

<div className="col col--3 margin-bottom--lg">
<div className="card">
  <div className="card__body" style={{padding:'14px 16px'}}>
    <a href="/Generative_AI_Intro" style={{fontWeight:600}}>Generative AI Intro</a>
    <p style={{margin:'6px 0 0',fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>GenAI topic overview for reComputer-Jetson</p>
  </div>
</div>
</div>

<div className="col col--3 margin-bottom--lg">
<div className="card">
  <div className="card__body" style={{padding:'14px 16px'}}>
    <a href="/Finetune_LLM_on_Jetson" style={{fontWeight:600}}>Fine-tune with Llama-Factory</a>
    <p style={{margin:'6px 0 0',fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>Dataset → train → export → deploy</p>
  </div>
</div>
</div>

<div className="col col--3 margin-bottom--lg">
<div className="card">
  <div className="card__body" style={{padding:'14px 16px'}}>
    <a href="/Jetson_FAQ" style={{fontWeight:600}}>Jetson FAQ</a>
    <p style={{margin:'6px 0 0',fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>Troubleshooting and usage questions</p>
  </div>
</div>
</div>

<div className="col col--3 margin-bottom--lg">
<div className="card">
  <div className="card__body" style={{padding:'14px 16px'}}>
    <a href="https://github.com/Seeed-Projects/jetson-examples" style={{fontWeight:600}}>jetson-examples</a>
    <p style={{margin:'6px 0 0',fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>One-command deployment repo</p>
  </div>
</div>
</div>

</div>