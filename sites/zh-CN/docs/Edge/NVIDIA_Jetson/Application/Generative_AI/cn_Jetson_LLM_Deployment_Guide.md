---
description: 如何在 reComputer Jetson 设备上部署 AI 模型——LLM、VLM、生成式、具身（VLA）、语音和计算机视觉。可以从在线平台开始，或通过 jetson-examples 一键部署，也可以使用 Ollama、llama.cpp、MLC、TensorRT Edge-LLM 和 TensorRT-Model-Connect 等其他引擎。
title: 在 Jetson 上部署 AI 模型 - 能运行什么以及如何运行
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
url: https://wiki.seeedstudio.com/cn/ai_robotics_deploy_ai_models_on_jetson/
updatedAt: '2026-09-28'
---

# 在 Jetson 上部署 AI 模型：能运行什么以及如何运行

本页回答在 NVIDIA Jetson 上运行 AI 模型时最常见的问题——LLM、视觉语言模型、生成式模型、具身/VLA 模型、语音和计算机视觉：

1. **我的设备可以运行多大（以 B、十亿参数计）的模型？**
2. **我可以部署哪些模型？**
3. **我该如何部署它们？**

三种部署方式：

- **在线平台（推荐）：** 从 [reComputer AI Lab](https://sensecraft.seeed.cc/ai-lab/en/models?device=jetson-orin-nano) 浏览并部署——为 reComputer Jetson 优化的 100+ CV / LLM / VLM 模型，支持一键 Docker 部署和基准测试。在页面上选择一个模型，复制命令并运行即可。
- **一键命令行：** [jetson-examples](https://github.com/Seeed-Projects/jetson-examples) — `reComputer run <model>`。
- **手动：** 你自行选择引擎（Ollama、llama.cpp、MLC、TensorRT Edge-LLM、TensorRT-Model-Connect），并按照下方列出的教程操作。

---

## 1. 我的设备可以运行多大模型？

“模型大小”用 **B（十亿参数）** 表示——一个 7B 模型有 70 亿参数，B 数越大，需要的内存越多。关键是你的 Jetson 模块的**统一内存**（是模块，而不是载板）。对于一个**量化（Q4_K_M）**模型：

<div className="row">

<div className="col col--4 margin-bottom--lg">
<div className="card" style={{borderTop:'4px solid #10b981'}}>
  <div className="card__header" style={{padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>8 GB · Orin Nano</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:0,fontWeight:600}}>1B – 4B 模型</p>
    <p style={{margin:'6px 0 0',fontSize:'0.9em',color:'var(--ifm-color-emphasis-700)'}}>Llama 3.2 1B/3B、Qwen3.5-4B、Gemma4 E4B、Live VLM WebUI</p>
  </div>
</div>
</div>

<div className="col col--4 margin-bottom--lg">
<div className="card" style={{borderTop:'4px solid #0ea5e9'}}>
  <div className="card__header" style={{padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>16 GB · Orin NX</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:0,fontWeight:600}}>7B – 8B 模型</p>
    <p style={{margin:'6px 0 0',fontSize:'0.9em',color:'var(--ifm-color-emphasis-700)'}}>Llama3 8B、DeepSeek-R1 7B、Llama2-7B（MLC）、LLaVA 7B、LocateAnything</p>
  </div>
</div>
</div>

<div className="col col--4 margin-bottom--lg">
<div className="card" style={{borderTop:'4px solid #8b5cf6'}}>
  <div className="card__header" style={{padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>32 GB · AGX Orin</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:0,fontWeight:600}}>最高可达 27B（量化）</p>
    <p style={{margin:'6px 0 0',fontSize:'0.9em',color:'var(--ifm-color-emphasis-700)'}}>Qwen3.5-27B Q4_K_M（见下方 JetPack 6.2 与 7.2 的基准对比）</p>
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
    <p style={{margin:'6px 0 0',fontSize:'0.9em',color:'var(--ifm-color-emphasis-700)'}}>Nemotron-3-Nano-30B（Q4_K_M）、Qwen3.6-35B（UD-Q6_K）、GPT-OSS</p>
  </div>
</div>
</div>

<div className="col col--4 margin-bottom--lg">
<div className="card" style={{borderTop:'4px solid #ef4444'}}>
  <div className="card__header" style={{padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>128 GB · Jetson Thor</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:0,fontWeight:600}}>35B+ 及更大</p>
    <p style={{margin:'6px 0 0',fontSize:'0.9em',color:'var(--ifm-color-emphasis-700)'}}>Nemotron3 33B、JoyAI VLM / ASR / TTS 栈</p>
  </div>
</div>
</div>

</div>

内存使用包括 KV 缓存和系统开销，因此权重几乎占满 RAM 的模型无法稳定运行。在 AGX Orin 32 GB 上实测，一个 Qwen3.5-27B Q4_K_M 模型在加载后使用了约 24.6 GB、而可用内存为 30 GB——这就是 32 GB 设备的现实上限。

## 2. 我可以部署哪些模型？

### 2.1 一键部署（jetson-examples）

安装一次，然后用一条命令运行任意受支持的模型：

```bash
sudo apt install python3-pip
pip3 install jetson-examples
```

<div className="row">

<div className="col col--6 margin-bottom--lg">
<div className="card">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>Qwen 系列</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <div style={{padding:'7px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}>
      <strong>Qwen3.5-4B</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>约 2.5 GB（Q4_K_M）· Orin Nano 8 GB · JP 6.1/6.2/6.2.1</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run qwen3.5-4b</code>
    </div>
    <div style={{padding:'7px 0'}}>
      <strong>Qwen3.6-35B</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>约 24 GB+（UD-Q6_K）· <strong>AGX Orin 64 GB</strong> · JP 6.1/6.2/6.2.1</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run qwen3.6-35b</code>
    </div>
  </div>
</div>
</div>

<div className="col col--6 margin-bottom--lg">
<div className="card">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>Llama 家族</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <div style={{padding:'7px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}>
      <strong>Llama3 8B</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>约 4.9 GB（Ollama Q4）· Orin NX 16 GB · JP 5.1.1-6.0</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run llama3</code>
    </div>
    <div style={{padding:'7px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}>
      <strong>Llama 3.2 1B/3B</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>约 1.3 / 2.0 GB（Ollama Q4）· Orin Nano 8 GB · JP 5.1.1-6.x</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run llama3.2</code>
    </div>
    <div style={{padding:'7px 0'}}>
      <strong>LLaVA 7B</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>(VLM) 总计约 15 GB（FP16）· Orin NX 16 GB · JP 5.1.1-6.0</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run llava</code>
    </div>
  </div>
</div>
</div>

<div className="col col--6 margin-bottom--lg">
<div className="card">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>Gemma 家族</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <div style={{padding:'7px 0'}}>
      <strong>Gemma4 E4B</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>约 2.5 GB（Q4_K_M）· Orin Nano 8 GB · JP 6.1/6.2/6.2.1</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run gemma4</code>
    </div>
  </div>
</div>
</div>

<div className="col col--6 margin-bottom--lg">
<div className="card" style={{borderTop:'4px solid #f59e0b'}}>
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>NVIDIA 模型（64 GB）</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <div style={{padding:'7px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}>
      <strong>Nemotron-3-Nano-30B</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>约 24.5 GB（Q4_K_M）· <strong>AGX Orin 64 GB</strong> · JP 6.1/6.2/6.2.1</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run nemotron-3-nano</code>
    </div>
    <div style={{padding:'7px 0'}}>
      <strong>GPT-OSS</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>约 39 GB（Q4_K）· <strong>AGX Orin 64 GB</strong> · JP 6.1/6.2/6.2.1</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run gpt-oss</code>
    </div>
  </div>
</div>
</div>

<div className="col col--6 margin-bottom--lg">
<div className="card">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>VLM（视觉-语言）</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <div style={{padding:'7px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}>
      <strong>Live VLM WebUI</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>7 个 VLM（Ollama Q4）· 最低 8 GB · JP 6.0-7.1</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run live-vlm-webui</code>
    </div>
    <div style={{padding:'7px 0'}}>
      <strong>LocateAnything</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>约 7.3 GB 权重（BF16）· Orin NX 16 GB · JP 6.x</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run locateanything</code>
    </div>
  </div>
</div>
</div>

<div className="col col--6 margin-bottom--lg">
<div className="card">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>YOLO 与检测</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <div style={{padding:'7px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}>
      <strong>Ultralytics YOLO</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>检测 / 分割 / 姿态 / 分类 · 8 GB + · JP 4.6-6.2</span><br/>
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
      <strong>YOLO26 TensorRT C++</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>原生，无 Docker · JP 6.0-7.2</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run yolo26-tensorrt</code>
    </div>
    <div style={{padding:'7px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}>
      <strong>YOLOv10</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>· 8 GB + · JP 5.1.1-6.0</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run yolov10</code>
    </div>
    <div style={{padding:'7px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}>
      <strong>Depth Anything V2</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>单目深度 · 16 GB · JP 5.1.1-5.1.3</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run depth-anything-v2</code>
    </div>
    <div style={{padding:'7px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}>
      <strong>Depth Anything V3</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>· 16 GB · JP 6.1-6.2.1</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run depth-anything-v3</code>
    </div>
    <div style={{padding:'7px 0'}}>
      <strong>NanoOWL</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>开放词汇检测 · 8 GB + · JP 5.1.1-6.x</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run nanoowl</code>
    </div>
  </div>
</div>
</div>

<div className="col col--6 margin-bottom--lg">
<div className="card">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>工具链</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <div style={{padding:'7px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}>
      <strong>Ollama</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>(任意模型) 大小取决于模型和量化（通常为 Q4）· 8 GB + · JP 5.1.1-6.x</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run ollama</code>
    </div>
    <div style={{padding:'7px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}>
      <strong>Whisper</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>(STT) 大小取决于 Whisper 变体（small/base/large）· 8 GB + · JP 5.1.1-6.x</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run whisper</code>
    </div>
    <div style={{padding:'7px 0'}}>
      <strong>Llama-Factory</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>(微调) 训练占用取决于模型和 LoRA/QLoRA · 16 GB + · JP 5.1.1-5.1.3</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run llama-factory</code>
    </div>
  </div>
</div>
</div>

</div>

> **注意：** 上述大小针对所示量化配置。更高精度（Q8 / FP16）会使权重大小大约翻倍或更多。每个示例还需要足够的可用磁盘空间（镜像 + 模型）——LLaVA FP16 总共大约需要 27.4 GB。请在 [jetson-examples README](https://github.com/Seeed-Projects/jetson-examples) 中查看示例列表以获取精确的镜像大小。

### 2.2 手动部署：完整教程索引

下面每个类别都链接到本 wiki 上的完整教程。选择与你任务匹配的教程，并在设备上按步骤操作。

**引擎一览**

<div className="row">
  <div className="col col--2 margin-bottom--sm"><div className="card" style={{borderTop:'4px solid #8dc21f'}}><div className="card__body" style={{padding:'12px 16px'}}><strong>Ollama</strong><br/><span style={{fontSize:'0.88em',color:'var(--ifm-color-emphasis-700)'}}>简单易用的部署</span></div></div></div>
  <div className="col col--2 margin-bottom--sm"><div className="card" style={{borderTop:'4px solid #8dc21f'}}><div className="card__body" style={{padding:'12px 16px'}}><strong>MLC LLM</strong><br/><span style={{fontSize:'0.88em',color:'var(--ifm-color-emphasis-700)'}}>Q4 量化</span></div></div></div>
  <div className="col col--2 margin-bottom--sm"><div className="card" style={{borderTop:'4px solid #8dc21f'}}><div className="card__body" style={{padding:'12px 16px'}}><strong>llama.cpp</strong><br/><span style={{fontSize:'0.88em',color:'var(--ifm-color-emphasis-700)'}}>GGUF，完全可控</span></div></div></div>
  <div className="col col--3 margin-bottom--sm"><div className="card" style={{borderTop:'4px solid #8dc21f'}}><div className="card__body" style={{padding:'12px 16px'}}><strong>TensorRT Edge-LLM</strong><br/><span style={{fontSize:'0.88em',color:'var(--ifm-color-emphasis-700)'}}>生产环境 · JP 6.2</span></div></div></div>
  <div className="col col--3 margin-bottom--sm"><div className="card" style={{borderTop:'4px solid #8dc21f'}}><div className="card__body" style={{padding:'12px 16px'}}><strong>TensorRT-Model-Connect</strong><br/><span style={{fontSize:'0.88em',color:'var(--ifm-color-emphasis-700)'}}>设备端构建 · JP 7.2</span></div></div></div>
</div>

<div className="row">

<div className="col col--6">
<div className="card margin-bottom--lg">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>1. 通用 LLM</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:'6px 0 10px',fontSize:'0.88em',color:'var(--ifm-color-emphasis-700)'}}><strong>显存估算：</strong> 可靠 — `params × bits/8 + KV cache + system`。Q4：7B ≈ 4-5 GB，27B ≈ 15-18 GB。</p>
    <ul style={{listStyle:'none',paddingLeft:0,margin:0}}>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/cn/deploy_deepseek_on_jetson">使用 Ollama 部署 DeepSeek-R1 7B</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/cn/deploy_deepseek_on_jetson_with_mlc">使用 MLC 部署 DeepSeek 1.5B</a> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>~60 tok/s</span></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/cn/Quantized_Llama2_7B_with_MLC_LLM_on_Jetson">使用 MLC 部署 Llama2-7B Q4</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/cn/deploy_gptoss_on_jetson">使用 llama.cpp 部署 GPT-OSS 20B</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/cn/How_to_Format_the_Output_of_LLM_Using_Langchain_on_Jetson">使用 Langchain 格式化 LLM 输出</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/cn/Local_RAG_based_on_Jetson_with_LlamaIndex">使用 LlamaIndex + ChromaDB 构建 RAG</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/cn/local_ai_ssistant">本地 AI 助手（AnythingLLM）</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/cn/local_openclaw_on_recomputer_jetson">本地 OpenClaw（Clawdbot）</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/cn/Finetune_LLM_on_Jetson">使用 Llama-Factory 进行微调</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/cn/develop_recomputer_jetson_using_clawdbot">使用 Clawdbot 开发 reComputer</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/cn/llm_interface_control_jetson">LLM 硬件接口控制</a></li>
      <li style={{padding:'5px 0'}}><a href="/cn/control_motor_by_voice_llm_on_jetson">通过 LLM 语音控制电机</a></li>
    </ul>
  </div>
</div>
</div>

<div className="col col--6">
<div className="card margin-bottom--lg">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>2. VLM（视觉-语言）</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:'6px 0 10px',fontSize:'0.88em',color:'var(--ifm-color-emphasis-700)'}}><strong>显存估算：</strong> 粗略 — LLM 部分 + 视觉编码器（0.3-4B）+ 输入分辨率/切片。更高分辨率会以非线性方式增加显存占用。</p>
    <ul style={{listStyle:'none',paddingLeft:0,margin:0}}>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/cn/run_vlm_on_recomputer">在 reComputer 上运行 VLM</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/cn/deploy_live_vlm_webui_on_jetson">实时 VLM WebUI</a> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>7 个 VLM · 实时</span></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/cn/deploy_joyai_vl_interaction_on_jetson_thor">JoyAI-VL-Interaction</a> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>Thor · 语音/视频</span></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/cn/speech_vlm">带语音交互的 VLM</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/cn/vlm">LLaVA 仓库守卫</a> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>Ollama llava-llama3 8B</span></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/cn/run_zero_shot_detection_on_recomputer">零样本检测</a></li>
    </ul>
  </div>
</div>
</div>

<div className="col col--6">
<div className="card margin-bottom--lg">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>3. 生成式与世界模型</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:'6px 0 10px',fontSize:'0.88em',color:'var(--ifm-color-emphasis-700)'}}><strong>显存预估：</strong>不能只看参数数量——DiT 的 patch/帧数、时序注意力、U-Net 与 DiT 以及 MoE 的差异，会在相同规模下让实际显存变化 3-5 倍。请在设备上实测。</p>
    <ul style={{listStyle:'none',paddingLeft:0,margin:0}}>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/cn/How_to_run_local_llm_text_to_image_on_reComputer">Stable Diffusion（文生图）</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="https://github.com/Seeed-Projects/jetson-examples">ComfyUI</a> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}><code>reComputer run comfyui</code></span></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="https://github.com/Seeed-Projects/jetson-examples">AudioCraft（音乐生成）</a> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}><code>reComputer run audiocraft</code></span></li>
      <li style={{padding:'5px 0'}}><span style={{color:'var(--ifm-color-emphasis-500)'}}>Wan / 视频生成、世界模型——目前尚无经过验证的 Jetson 部署；显存必须按模型逐一实测</span></li>
    </ul>
  </div>
</div>
</div>

<div className="col col--6">
<div className="card margin-bottom--lg">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>4. 具身智能 / VLA</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:'6px 0 10px',fontSize:'0.88em',color:'var(--ifm-color-emphasis-700)'}}><strong>显存预估：</strong>不能只看参数——视觉编码器 + 相机数量 + 控制频率 + 动作分块。请在设备上实测。</p>
    <ul style={{listStyle:'none',paddingLeft:0,margin:0}}>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/cn/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor">GR00T N1.5 + LeRobot SO-101（Thor）</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/cn/fine_tune_gr00t_n1.6_for_lerobot_so_arm_and_deploy_on_agx_orin">GR00T N1.6 + LeRobot SO-101（AGX Orin）</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/cn/fine_tune_gr00t_n1.7_for_rebot_arm_and_deploy_on_robotics_j601">GR00T N1.7 + reBot 机械臂（J601）</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/cn/rebot_arm_b601_dm_graspnet_visual_grasping">GraspNet 视觉抓取（reBot-DM）</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/cn/ai_robotics_control_soarm_by_openclaw_on_jetson_thor">通过 OpenClaw 控制 SO-Arm（Thor）</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/cn/control_rebot_arm_with_nemoclaw_on_nvidia_jetson_thor">通过 NemoClaw 控制 reBot（Thor）</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/cn/getting_started_with_jetson_claw_on_orin_nano_nx_8gb">Jetson-Claw 入门（8 GB）</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/cn/deploy_full_weight_gr00t_n1.7_tensorrt_jetpack7.2_agx_orin">GR00T N1.7 全量 TensorRT（JP 7.2）</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/cn/voice_control_rebot_arm">语音控制 reBot 机械臂 B601</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/cn/ai_robotics_microduck_rl_on_jetson">Microduck 强化学习（Jetson 上）</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/cn/ai_robotics_microduck_rl_jetson_environment">Microduck 强化学习环境</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/cn/ai_robotics_microduck_rl_official_policies">Microduck 强化学习官方策略</a></li>
      <li style={{padding:'5px 0'}}><a href="/cn/ai_robotics_microduck_rl_custom_motion_training">Microduck 强化学习自定义动作</a></li>
    </ul>
  </div>
</div>
</div>

<div className="col col--6">
<div className="card margin-bottom--lg">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>5. 语音（ASR / TTS）</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:'6px 0 10px',fontSize:'0.88em',color:'var(--ifm-color-emphasis-700)'}}><strong>显存预估：</strong>小模型——通常在 8 GB 上就没问题。Whisper/Riva 通常与 LLM 组成流水线一起运行。</p>
    <ul style={{listStyle:'none',paddingLeft:0,margin:0}}>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/cn/Whisper_on_Jetson_for_Real_Time_Speech_to_Text">Whisper 语音转文本</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/cn/Real_Time_Subtitle_Recoder_on_Nvidia_Jetson">实时字幕记录器</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/cn/deploy_dia_on_jetson">Dia 文本转语音</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/cn/Local_Voice_Chatbot">语音聊天机器人（Riva + Llama2）</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/cn/local_voice_llm_on_recomputer_jetson_for_reachy_mini">面向 Reachy Mini 的语音 LLM</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/cn/local_chatbot_recomputer">本地语音聊天机器人</a></li>
      <li style={{padding:'5px 0'}}><a href="https://github.com/Seeed-Projects/jetson-examples">Parler-TTS / AudioCraft</a> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}><code>reComputer run parler-tts</code></span></li>
    </ul>
  </div>
</div>
</div>

<div className="col col--6">
<div className="card margin-bottom--lg">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>6. 计算机视觉（YOLO 与检测）</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:'6px 0 10px',fontSize:'0.88em',color:'var(--ifm-color-emphasis-700)'}}><strong>显存预估：</strong>较小——YOLO 模型通常可以在 8 GB 上配合 TensorRT 运行，并随输入分辨率扩展。请参见 2.1 小节中的一键命令列表。</p>
    <ul style={{listStyle:'none',paddingLeft:0,margin:0}}>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/cn/YOLOv8-TRT-Jetson">YOLOv8 + TensorRT</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/cn/YOLOv8-DeepStream-TRT-Jetson">YOLOv8 + DeepStream + TensorRT</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/cn/How_to_Train_and_Deploy_YOLOv8_on_reComputer">训练并部署 YOLOv8</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/cn/train_and_deploy_a_custom_classification_model_with_yolov8">YOLOv8 自定义分类</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/cn/YOLOv5-Object-Detection-Jetson">YOLOv5 目标检测</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/cn/yolov11_with_depth_camera">YOLOv11 + 深度相机</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/cn/ai_roboticsyolov26_dual_camera_system">YOLOv26 双相机系统</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/cn/deploy_depth_anything_v3_jetson_agx_orin">Depth Anything V3</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/cn/Jetson-Nano-MaskCam">MaskCam</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/cn/Traffic-Management-DeepStream-SDK">交通管理（DeepStream）</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/cn/DashCamNet-with-Jetson-Xavier-NX-Multicamera">DashCamNet 多相机</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/cn/multiple_cameras_with_jetson">多 GMSL 相机</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/cn/jetson_fisheye_surround_view_demo">四相机鱼眼环视</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/cn/deploy_visual_perception_engine_recomputer">多任务视觉推理引擎</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/cn/streaming_vision_agent_on_jetson">流式视觉 Agent（Qwen3-VL）</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/cn/deploy_frigate_on_jetson">Frigate NVR</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/cn/Security_Scan">安检 X 光扫描</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/cn/industrial_vision_monitoring_on_industrial">工业视觉监控</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/cn/deploy_nvblox_jetson_agx_orin">NVBlox 三维建图</a></li>
      <li style={{padding:'5px 0'}}><a href="/cn/ai_nvr_with_jetson">AI NVR</a></li>
    </ul>
  </div>
</div>
</div>

<div className="col col--12">
<div className="card margin-bottom--lg">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>性能与分布式</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <ul style={{listStyle:'none',paddingLeft:0,margin:0,display:'flex',flexWrap:'wrap',gap:'4px 28px'}}>
      <li style={{padding:'7px 0'}}><a href="/cn/deploy_tensorrt_edge_llm_on_jetpack6.2">TensorRT Edge-LLM (JP 6.2)</a></li>
      <li style={{padding:'7px 0'}}><a href="/cn/deploy_tensorrt_edge_llm_on_jetpack7.2">TensorRT Edge-LLM (JP 7.2)</a></li>
      <li style={{padding:'7px 0'}}><a href="/cn/ai_robotics_deploy_tensorrt_model_connect_on_jetson">TensorRT-Model-Connect (JP 7.2)</a></li>
      <li style={{padding:'7px 0'}}><a href="/cn/ai_robotics_distributed_llama_cpp_rpc_jetson">分布式 llama.cpp RPC</a></li>
    </ul>
  </div>
</div>
</div>

</div>

## 3. 我该如何部署？

<div className="row">

<div className="col col--4 margin-bottom--lg">
<div className="card" style={{borderTop:'4px solid #8dc21f'}}>
  <div className="card__header" style={{padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>AI Lab（在线平台）</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <ol style={{margin:'6px 0 10px',paddingLeft:18}}>
      <li style={{padding:'3px 0'}}>打开 <a href="https://sensecraft.seeed.cc/ai-lab/en/models?device=jetson-orin-nano">reComputer AI Lab Models</a>（已预先筛选 Jetson）</li>
      <li style={{padding:'3px 0'}}>按设备筛选（例如 Jetson Orin Nano），并浏览带有基准测试的 CV / LLM / VLM 模型</li>
      <li style={{padding:'3px 0'}}>复制一键 Docker 命令并在你的设备上运行</li>
    </ol>
    <p style={{margin:'10px 0 0',fontSize:'0.9em',color:'var(--ifm-color-emphasis-700)'}}>100+ 已优化模型，无需配置，包含基准测试数据。</p>
  </div>
</div>
</div>

<div className="col col--4 margin-bottom--lg">
<div className="card" style={{borderTop:'4px solid #0ea5e9'}}>
  <div className="card__header" style={{padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>一键命令行工具（CLI）</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:'6px 0 10px'}}>安装 jetson-examples，然后从 2.1 小节部署任意模型：</p>
    <pre style={{margin:'0 0 10px'}}><code>{`sudo apt install python3-pip
pip3 install jetson-examples

# Deploy a model (example)
reComputer run qwen3.5-4b`}</code></pre>
    <p style={{margin:0,fontSize:'0.9em',color:'var(--ifm-color-emphasis-700)'}}>暴露一个兼容 OpenAI 的 API 端点，可直接通过 curl 或任意 OpenAI SDK 使用。</p>
  </div>
</div>
</div>

<div className="col col--4 margin-bottom--lg">
<div className="card" style={{borderTop:'4px solid #f59e0b'}}>
  <div className="card__header" style={{padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>手动部署</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:'6px 0 10px'}}>从 2.2 小节选择一个引擎，并在你的设备上按照其教程操作：</p>
    <ul style={{margin:'0 0 0 18px',padding:0}}>
      <li style={{padding:'3px 0'}}>Ollama — 最简单的入门方式，拥有大型模型库</li>
      <li style={{padding:'3px 0'}}>MLC LLM — 量化（Q4）编译模型</li>
      <li style={{padding:'3px 0'}}>llama.cpp — 轻量级、GGUF、完全可控</li>
      <li style={{padding:'3px 0'}}>TensorRT Edge-LLM / Model-Connect — 生产级速度</li>
    </ul>
    <p style={{margin:'10px 0 0',fontSize:'0.9em',color:'var(--ifm-color-emphasis-700)'}}>所有教程都已在 reComputer Jetson 设备上验证。</p>
  </div>
</div>
</div>

</div>

## 4. 性能基准：JetPack 6.2 vs 7.2

<div className="card margin-bottom--lg">
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:'8px 0 12px'}}>相同的 <strong>Qwen3.5-27B Q4_K_M</strong> 模型（llama.cpp），在 AGX Orin 级别硬件上，JetPack 6.2 与 7.2 对比：</p>
    <table>
      <thead>
        <tr><th>指标</th><th>JetPack 6.2</th><th>JetPack 7.2</th><th>变化</th></tr>
      </thead>
      <tbody>
        <tr><td>模型加载后内存占用</td><td>24.6 GB / 30 GB</td><td>14.7 GB / 30 GB</td><td>约降低 40%</td></tr>
        <tr><td>推理时 GPU 频率</td><td>930 MHz</td><td>1.36 GHz</td><td>更高的加速频率</td></tr>
        <tr><td>Prompt 处理速度</td><td>18.2 tok/s</td><td>25.8 tok/s</td><td>约快 41.8%</td></tr>
        <tr><td>Token 生成速度</td><td>4.3 tok/s</td><td>5.5 tok/s</td><td>约快 27.9%</td></tr>
      </tbody>
    </table>
    <p style={{margin:'10px 0 4px'}}>详情：<a href="/cn/jetpack72_deep_dive">JetPack 7.2 深度解析</a>。</p>
  </div>
</div>

## 5. 常见问题（FAQ）

<div className="row">

<div className="col col--12 margin-bottom--lg">
<div className="card">
  <div className="card__header" style={{padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>我可以在 Jetson 上运行 DeepSeek 吗？</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:0}}>可以。DeepSeek-R1 7B 可以通过 Ollama 在 Orin NX 16 GB 设备上良好运行（<a href="/cn/deploy_deepseek_on_jetson">教程</a>）；MLC 量化的 1.5B 变体在 Orin NX 上可达到约 60 tok/s（<a href="/cn/deploy_deepseek_on_jetson_with_mlc">教程</a>）。</p>
  </div>
</div>
</div>

<div className="col col--12 margin-bottom--lg">
<div className="card">
  <div className="card__header" style={{padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>我的模型对单个设备来说太大了——我该怎么办？</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <ul style={{margin:0,paddingLeft:18}}>
      <li style={{padding:'3px 0'}}>使用更小的量化等级（用 Q4_K_M 替代 Q8/FP16）。</li>
      <li style={{padding:'3px 0'}}>限制上下文长度（<code>--max-sequence-length</code>）以缩小 KV 缓存。</li>
      <li style={{padding:'3px 0'}}>通过 llama.cpp RPC 在多个 reComputer 设备之间分布式推理（<a href="/cn/ai_robotics_distributed_llama_cpp_rpc_jetson">教程</a>）。</li>
    </ul>
  </div>
</div>
</div>

<div className="col col--12 margin-bottom--lg">
<div className="card">
  <div className="card__header" style={{padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>我需要云端 GPU 吗？</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:0}}>不需要。上述所有内容都完全在本地设备上运行。数据保留在边缘侧，也没有持续的 API 费用。</p>
  </div>
</div>
</div>

</div>

## 更多资源

<div className="row">

<div className="col col--3 margin-bottom--lg">
<div className="card">
  <div className="card__body" style={{padding:'14px 16px'}}>
    <a href="/cn/Generative_AI_Intro" style={{fontWeight:600}}>生成式 AI 入门</a>
    <p style={{margin:'6px 0 0',fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>面向 reComputer-Jetson 的 GenAI 主题概览</p>
  </div>
</div>
</div>

<div className="col col--3 margin-bottom--lg">
<div className="card">
  <div className="card__body" style={{padding:'14px 16px'}}>
    <a href="/cn/Finetune_LLM_on_Jetson" style={{fontWeight:600}}>使用 Llama-Factory 进行微调</a>
    <p style={{margin:'6px 0 0',fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>数据集 → 训练 → 导出 → 部署</p>
  </div>
</div>
</div>

<div className="col col--3 margin-bottom--lg">
<div className="card">
  <div className="card__body" style={{padding:'14px 16px'}}>
    <a href="/cn/Jetson_FAQ" style={{fontWeight:600}}>Jetson 常见问题</a>
    <p style={{margin:'6px 0 0',fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>故障排查与使用相关问题</p>
  </div>
</div>
</div>

<div className="col col--3 margin-bottom--lg">
<div className="card">
  <div className="card__body" style={{padding:'14px 16px'}}>
    <a href="https://github.com/Seeed-Projects/jetson-examples" style={{fontWeight:600}}>jetson-examples</a>
    <p style={{margin:'6px 0 0',fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>一键部署示例仓库</p>
  </div>
</div>
</div>

</div>

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>