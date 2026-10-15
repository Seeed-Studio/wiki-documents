---
description: reComputer Jetson デバイス上で AI モデル（LLM、VLM、生成系、エンボディド（VLA）、音声、コンピュータビジョン）をデプロイする方法。オンラインプラットフォームまたは jetson-examples によるワンコマンドデプロイから始めるか、Ollama、llama.cpp、MLC、TensorRT Edge-LLM、TensorRT-Model-Connect などの別エンジンを使用します。
title: Jetson で AI モデルをデプロイする - 何が動き、どう動かすか
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
url: https://wiki.seeedstudio.com/ja/ai_robotics_deploy_ai_models_on_jetson/
updatedAt: '2026-09-28'
---

# Jetson で AI モデルをデプロイする：何が動き、どう動かすか

このページでは、NVIDIA Jetson 上で AI モデル（LLM、ビジョン・ランゲージモデル、生成モデル、エンボディド/VLA モデル、音声、コンピュータビジョン）を実行する際によく出てくる疑問を扱います：

1. **自分のデバイスではどのモデルサイズ（B、十億パラメータ）が動くのか？**
2. **どのモデルをデプロイできるのか？**
3. **どうやってデプロイするのか？**

デプロイ方法は 3 通りあります：

- **オンラインプラットフォーム（推奨）：** [reComputer AI Lab](https://sensecraft.seeed.cc/ai-lab/en/models?device=jetson-orin-nano) からブラウズしてデプロイ — reComputer Jetson 向けに最適化された 100 以上の CV / LLM / VLM モデルを、ワンコマンドの Docker デプロイとベンチマーク付きで提供。ページでモデルを選び、コマンドをコピーして実行するだけです。
- **ワンコマンド CLI：** [jetson-examples](https://github.com/Seeed-Projects/jetson-examples) — `reComputer run <model>`。
- **手動：** エンジン（Ollama、llama.cpp、MLC、TensorRT Edge-LLM、TensorRT-Model-Connect）を自分で選び、以下に挙げるチュートリアルに従います。

---

## 1. 自分のデバイスではどのモデルサイズが動く？

「モデルサイズ」は **B（十億パラメータ）** で表されます — 7B モデルは 70 億パラメータを持ち、B の数値が大きいほど多くのメモリを必要とします。重要なのは Jetson モジュールの **ユニファイドメモリ**（キャリアボードではなくモジュール側）です。**量子化（Q4_K_M）** モデルの場合：

<div className="row">

<div className="col col--4 margin-bottom--lg">
<div className="card" style={{borderTop:'4px solid #10b981'}}>
  <div className="card__header" style={{padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>8 GB · Orin Nano</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:0,fontWeight:600}}>1B – 4B モデル</p>
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
    <p style={{margin:0,fontWeight:600}}>7B – 8B モデル</p>
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
    <p style={{margin:0,fontWeight:600}}>最大 27B（量子化）</p>
    <p style={{margin:'6px 0 0',fontSize:'0.9em',color:'var(--ifm-color-emphasis-700)'}}>Qwen3.5-27B Q4_K_M（下記の JetPack 6.2 と 7.2 のベンチマークを参照）</p>
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
    <p style={{margin:0,fontWeight:600}}>35B 以上の大規模モデル</p>
    <p style={{margin:'6px 0 0',fontSize:'0.9em',color:'var(--ifm-color-emphasis-700)'}}>Nemotron3 33B、JoyAI VLM / ASR / TTS スタック</p>
  </div>
</div>
</div>

</div>

メモリ使用量には KV キャッシュとシステムオーバーヘッドも含まれるため、重みが RAM をほぼ埋め尽くすモデルは安定して動作しません。AGX Orin 32 GB で計測したところ、Qwen3.5-27B Q4_K_M モデルは、ロード後に利用可能な 30 GB のうち約 24.6 GB を使用しました — これは 32 GB デバイスにとって現実的な上限値です。

## 2. どのモデルをデプロイできる？

### 2.1 ワンコマンドデプロイ（jetson-examples）

一度インストールすれば、サポートされている任意のモデルを 1 つのコマンドで実行できます：

```bash
sudo apt install python3-pip
pip3 install jetson-examples
```

<div className="row">

<div className="col col--6 margin-bottom--lg">
<div className="card">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>Qwen シリーズ</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <div style={{padding:'7px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}>
      <strong>Qwen3.5-4B</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>約 2.5 GB（Q4_K_M）· Orin Nano 8 GB · JP 6.1/6.2/6.2.1</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run qwen3.5-4b</code>
    </div>
    <div style={{padding:'7px 0'}}>
      <strong>Qwen3.6-35B</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>約 24 GB+（UD-Q6_K）· <strong>AGX Orin 64 GB</strong> · JP 6.1/6.2/6.2.1</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run qwen3.6-35b</code>
    </div>
  </div>
</div>
</div>

<div className="col col--6 margin-bottom--lg">
<div className="card">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>Llama ファミリー</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <div style={{padding:'7px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}>
      <strong>Llama3 8B</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>約 4.9 GB（Ollama Q4）· Orin NX 16 GB · JP 5.1.1-6.0</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run llama3</code>
    </div>
    <div style={{padding:'7px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}>
      <strong>Llama 3.2 1B/3B</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>約 1.3 / 2.0 GB（Ollama Q4）· Orin Nano 8 GB · JP 5.1.1-6.x</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run llama3.2</code>
    </div>
    <div style={{padding:'7px 0'}}>
      <strong>LLaVA 7B</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>(VLM) 合計約 15 GB（FP16）· Orin NX 16 GB · JP 5.1.1-6.0</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run llava</code>
    </div>
  </div>
</div>
</div>

<div className="col col--6 margin-bottom--lg">
<div className="card">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>Gemma ファミリー</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <div style={{padding:'7px 0'}}>
      <strong>Gemma4 E4B</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>約 2.5 GB（Q4_K_M）· Orin Nano 8 GB · JP 6.1/6.2/6.2.1</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run gemma4</code>
    </div>
  </div>
</div>
</div>

<div className="col col--6 margin-bottom--lg">
<div className="card" style={{borderTop:'4px solid #f59e0b'}}>
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>NVIDIA モデル（64 GB）</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <div style={{padding:'7px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}>
      <strong>Nemotron-3-Nano-30B</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>約 24.5 GB（Q4_K_M）· <strong>AGX Orin 64 GB</strong> · JP 6.1/6.2/6.2.1</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run nemotron-3-nano</code>
    </div>
    <div style={{padding:'7px 0'}}>
      <strong>GPT-OSS</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>約 39 GB（Q4_K）· <strong>AGX Orin 64 GB</strong> · JP 6.1/6.2/6.2.1</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run gpt-oss</code>
    </div>
  </div>
</div>
</div>

<div className="col col--6 margin-bottom--lg">
<div className="card">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>VLM（ビジョン・ランゲージ）</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <div style={{padding:'7px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}>
      <strong>Live VLM WebUI</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>7 つの VLM（Ollama Q4）· 最低 8 GB · JP 6.0-7.1</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run live-vlm-webui</code>
    </div>
    <div style={{padding:'7px 0'}}>
      <strong>LocateAnything</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>約 7.3 GB の重み（BF16）· Orin NX 16 GB · JP 6.x</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run locateanything</code>
    </div>
  </div>
</div>
</div>

<div className="col col--6 margin-bottom--lg">
<div className="card">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>YOLO & 検出</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <div style={{padding:'7px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}>
      <strong>Ultralytics YOLO</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>検出 / セグメンテーション / ポーズ / 分類 · 8 GB 以上 · JP 4.6-6.2</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run ultralytics-yolo</code>
    </div>
    <div style={{padding:'7px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}>
      <strong>YOLO11</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>· 8 GB 以上 · JP 5.1.1-6.x</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run yolo11</code>
    </div>
    <div style={{padding:'7px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}>
      <strong>YOLO26</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>· 8 GB 以上 · JP 5.1.1-7.1</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run yolo26</code>
    </div>
    <div style={{padding:'7px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}>
      <strong>YOLO26 TensorRT C++</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>ネイティブ、Docker 不要 · JP 6.0-7.2</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run yolo26-tensorrt</code>
    </div>
    <div style={{padding:'7px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}>
      <strong>YOLOv10</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>· 8 GB 以上 · JP 5.1.1-6.0</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run yolov10</code>
    </div>
    <div style={{padding:'7px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}>
      <strong>Depth Anything V2</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>単眼深度 · 16 GB · JP 5.1.1-5.1.3</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run depth-anything-v2</code>
    </div>
    <div style={{padding:'7px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}>
      <strong>Depth Anything V3</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>· 16 GB · JP 6.1-6.2.1</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run depth-anything-v3</code>
    </div>
    <div style={{padding:'7px 0'}}>
      <strong>NanoOWL</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>オープンボキャブラリ検出 · 8 GB 以上 · JP 5.1.1-6.x</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run nanoowl</code>
    </div>
  </div>
</div>
</div>

<div className="col col--6 margin-bottom--lg">
<div className="card">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>ツール群</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <div style={{padding:'7px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}>
      <strong>Ollama</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>(任意のモデル) サイズはモデル + 量子化（通常 Q4）に依存 · 8 GB 以上 · JP 5.1.1-6.x</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run ollama</code>
    </div>
    <div style={{padding:'7px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}>
      <strong>Whisper</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>(STT) サイズは Whisper バリアント（small/base/large）に依存 · 8 GB 以上 · JP 5.1.1-6.x</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run whisper</code>
    </div>
    <div style={{padding:'7px 0'}}>
      <strong>Llama-Factory</strong> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>(ファインチューニング) 学習時のフットプリントはモデル + LoRA/QLoRA に依存 · 16 GB 以上 · JP 5.1.1-5.1.3</span><br/>
      <code style={{fontSize:'0.82em'}}>reComputer run llama-factory</code>
    </div>
  </div>
</div>
</div>

</div>

> **Note:** 上記のサイズは表示されている量子化設定に対するものです。より高い精度（Q8 / FP16）では、重みのサイズがおおよそ 2 倍以上になります。各サンプルには、十分な空きディスク容量（イメージ + モデル）も必要です — LLaVA FP16 では合計約 27.4 GB が必要です。正確なイメージサイズについては、[jetson-examples README](https://github.com/Seeed-Projects/jetson-examples) のサンプル一覧を確認してください。

### 2.2 手動デプロイ：チュートリアル完全インデックス

以下の各カテゴリは、この wiki 上の完全なチュートリアルへのリンクです。自分のタスクに合うものを選び、デバイス上で手順に従ってください。

**エンジンの概要**

<div className="row">
  <div className="col col--2 margin-bottom--sm"><div className="card" style={{borderTop:'4px solid #8dc21f'}}><div className="card__body" style={{padding:'12px 16px'}}><strong>Ollama</strong><br/><span style={{fontSize:'0.88em',color:'var(--ifm-color-emphasis-700)'}}>簡単セットアップ</span></div></div></div>
  <div className="col col--2 margin-bottom--sm"><div className="card" style={{borderTop:'4px solid #8dc21f'}}><div className="card__body" style={{padding:'12px 16px'}}><strong>MLC LLM</strong><br/><span style={{fontSize:'0.88em',color:'var(--ifm-color-emphasis-700)'}}>Q4 量子化</span></div></div></div>
  <div className="col col--2 margin-bottom--sm"><div className="card" style={{borderTop:'4px solid #8dc21f'}}><div className="card__body" style={{padding:'12px 16px'}}><strong>llama.cpp</strong><br/><span style={{fontSize:'0.88em',color:'var(--ifm-color-emphasis-700)'}}>GGUF、完全な制御</span></div></div></div>
  <div className="col col--3 margin-bottom--sm"><div className="card" style={{borderTop:'4px solid #8dc21f'}}><div className="card__body" style={{padding:'12px 16px'}}><strong>TensorRT Edge-LLM</strong><br/><span style={{fontSize:'0.88em',color:'var(--ifm-color-emphasis-700)'}}>プロダクション · JP 6.2</span></div></div></div>
  <div className="col col--3 margin-bottom--sm"><div className="card" style={{borderTop:'4px solid #8dc21f'}}><div className="card__body" style={{padding:'12px 16px'}}><strong>TensorRT-Model-Connect</strong><br/><span style={{fontSize:'0.88em',color:'var(--ifm-color-emphasis-700)'}}>オンデバイスビルド · JP 7.2</span></div></div></div>
</div>

<div className="row">

<div className="col col--6">
<div className="card margin-bottom--lg">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>1. 一般的な LLM</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:'6px 0 10px',fontSize:'0.88em',color:'var(--ifm-color-emphasis-700)'}}><strong>VRAM の目安:</strong> 信頼できる計算式 — `params × bits/8 + KV cache + system`。Q4: 7B ≈ 4-5 GB、27B ≈ 15-18 GB。</p>
    <ul style={{listStyle:'none',paddingLeft:0,margin:0}}>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ja/deploy_deepseek_on_jetson">DeepSeek-R1 7B を Ollama で動かす</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ja/deploy_deepseek_on_jetson_with_mlc">DeepSeek 1.5B を MLC で動かす</a> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>~60 tok/s</span></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ja/Quantized_Llama2_7B_with_MLC_LLM_on_Jetson">Llama2-7B Q4 を MLC で動かす</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ja/deploy_gptoss_on_jetson">GPT-OSS 20B を llama.cpp で動かす</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ja/How_to_Format_the_Output_of_LLM_Using_Langchain_on_Jetson">Langchain を使った構造化 LLM 出力</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ja/Local_RAG_based_on_Jetson_with_LlamaIndex">LlamaIndex + ChromaDB による RAG</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ja/local_ai_ssistant">ローカル AI アシスタント（AnythingLLM）</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ja/local_openclaw_on_recomputer_jetson">ローカル OpenClaw（Clawdbot）</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ja/Finetune_LLM_on_Jetson">Llama-Factory によるファインチューニング</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ja/develop_recomputer_jetson_using_clawdbot">Clawdbot で reComputer を開発</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ja/llm_interface_control_jetson">LLM によるハードウェアインターフェース制御</a></li>
      <li style={{padding:'5px 0'}}><a href="/ja/control_motor_by_voice_llm_on_jetson">LLM による音声モーター制御</a></li>
    </ul>
  </div>
</div>
</div>

<div className="col col--6">
<div className="card margin-bottom--lg">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>2. VLM（Vision-Language）</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:'6px 0 10px',fontSize:'0.88em',color:'var(--ifm-color-emphasis-700)'}}><strong>VRAM の目安:</strong> おおよそ — LLM 部分 + ビジョンエンコーダ（0.3-4B）+ 入力解像度/タイル数。解像度が高くなると、VRAM は非線形に増加します。</p>
    <ul style={{listStyle:'none',paddingLeft:0,margin:0}}>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ja/run_vlm_on_recomputer">reComputer で VLM を実行</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ja/deploy_live_vlm_webui_on_jetson">Live VLM WebUI</a> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>7 個のVLM · リアルタイム</span></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ja/deploy_joyai_vl_interaction_on_jetson_thor">JoyAI-VL-Interaction</a> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>Thor · 音声/ビデオ</span></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ja/speech_vlm">音声インタラクション対応 VLM</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ja/vlm">LLaVA 倉庫ガード</a> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>Ollama llava-llama3 8B</span></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ja/run_zero_shot_detection_on_recomputer">ゼロショット検出</a></li>
    </ul>
  </div>
</div>
</div>

<div className="col col--6">
<div className="card margin-bottom--lg">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>3. 生成系 & World モデル</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:'6px 0 10px',fontSize:'0.88em',color:'var(--ifm-color-emphasis-700)'}}><strong>VRAM の目安:</strong> パラメータ数だけでは決まりません — DiT のパッチ数/フレーム数、時間方向アテンション、U-Net と DiT と MoE の違いにより、同じサイズでも実際の VRAM 使用量は 3〜5 倍変わります。必ずデバイス上で計測してください。</p>
    <ul style={{listStyle:'none',paddingLeft:0,margin:0}}>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ja/How_to_run_local_llm_text_to_image_on_reComputer">Stable Diffusion（テキストから画像）</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="https://github.com/Seeed-Projects/jetson-examples">ComfyUI</a> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}><code>reComputer run comfyui</code></span></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="https://github.com/Seeed-Projects/jetson-examples">AudioCraft（音楽生成）</a> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}><code>reComputer run audiocraft</code></span></li>
      <li style={{padding:'5px 0'}}><span style={{color:'var(--ifm-color-emphasis-500)'}}>Wan / 動画生成、World モデル — まだ Jetson での検証済みデプロイはありません。VRAM はモデルごとに計測する必要があります。</span></li>
    </ul>
  </div>
</div>
</div>

<div className="col col--6">
<div className="card margin-bottom--lg">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>4. エンボディド / VLA</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:'6px 0 10px',fontSize:'0.88em',color:'var(--ifm-color-emphasis-700)'}}><strong>VRAM の目安:</strong> パラメータ数ではなく、ビジョンエンコーダ + カメラ台数 + 制御レート + アクションのチャンク化で決まります。必ずデバイス上で計測してください。</p>
    <ul style={{listStyle:'none',paddingLeft:0,margin:0}}>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ja/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor">GR00T N1.5 + LeRobot SO-101（Thor）</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ja/fine_tune_gr00t_n1.6_for_lerobot_so_arm_and_deploy_on_agx_orin">GR00T N1.6 + LeRobot SO-101（AGX Orin）</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ja/fine_tune_gr00t_n1.7_for_rebot_arm_and_deploy_on_robotics_j601">GR00T N1.7 + reBot Arm（J601）</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ja/rebot_arm_b601_dm_graspnet_visual_grasping">GraspNet ビジュアル把持（reBot-DM）</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ja/ai_robotics_control_soarm_by_openclaw_on_jetson_thor">OpenClaw による SO-Arm 制御（Thor）</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ja/control_rebot_arm_with_nemoclaw_on_nvidia_jetson_thor">NemoClaw による reBot 制御（Thor）</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ja/getting_started_with_jetson_claw_on_orin_nano_nx_8gb">Jetson-Claw スターター（8 GB）</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ja/deploy_full_weight_gr00t_n1.7_tensorrt_jetpack7.2_agx_orin">GR00T N1.7 フルウェイト TensorRT（JP 7.2）</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ja/voice_control_rebot_arm">音声制御 reBot Arm B601</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ja/ai_robotics_microduck_rl_on_jetson">Jetson 上の Microduck RL</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ja/ai_robotics_microduck_rl_jetson_environment">Microduck RL 環境</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ja/ai_robotics_microduck_rl_official_policies">Microduck RL 公式ポリシー</a></li>
      <li style={{padding:'5px 0'}}><a href="/ja/ai_robotics_microduck_rl_custom_motion_training">Microduck RL カスタムモーション</a></li>
    </ul>
  </div>
</div>
</div>

<div className="col col--6">
<div className="card margin-bottom--lg">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>5. 音声（ASR / TTS）</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:'6px 0 10px',fontSize:'0.88em',color:'var(--ifm-color-emphasis-700)'}}><strong>VRAM の目安:</strong> 小規模モデル — 通常は 8 GB で問題ありません。Whisper/Riva はパイプライン内で LLM と並行して動作します。</p>
    <ul style={{listStyle:'none',paddingLeft:0,margin:0}}>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ja/Whisper_on_Jetson_for_Real_Time_Speech_to_Text">Whisper 音声認識（Speech-to-Text）</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ja/Real_Time_Subtitle_Recoder_on_Nvidia_Jetson">リアルタイム字幕レコーダー</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ja/deploy_dia_on_jetson">Dia 音声合成（Text-to-Speech）</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ja/Local_Voice_Chatbot">音声チャットボット（Riva + Llama2）</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ja/local_voice_llm_on_recomputer_jetson_for_reachy_mini">Reachy Mini 向け音声 LLM</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ja/local_chatbot_recomputer">ローカル音声チャットボット</a></li>
      <li style={{padding:'5px 0'}}><a href="https://github.com/Seeed-Projects/jetson-examples">Parler-TTS / AudioCraft</a> <span style={{fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}><code>reComputer run parler-tts</code></span></li>
    </ul>
  </div>
</div>
</div>

<div className="col col--6">
<div className="card margin-bottom--lg">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>6. コンピュータビジョン（YOLO & 検出）</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:'6px 0 10px',fontSize:'0.88em',color:'var(--ifm-color-emphasis-700)'}}><strong>VRAM の目安:</strong> 小規模 — YOLO モデルは通常 TensorRT 使用時に 8 GB で動作し、入力解像度に応じてスケールします。2.1 節のワンコマンド一覧を参照してください。</p>
    <ul style={{listStyle:'none',paddingLeft:0,margin:0}}>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ja/YOLOv8-TRT-Jetson">TensorRT 対応 YOLOv8</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ja/YOLOv8-DeepStream-TRT-Jetson">DeepStream + TensorRT 対応 YOLOv8</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ja/How_to_Train_and_Deploy_YOLOv8_on_reComputer">YOLOv8 の学習とデプロイ</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ja/train_and_deploy_a_custom_classification_model_with_yolov8">YOLOv8 カスタム分類</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ja/YOLOv5-Object-Detection-Jetson">YOLOv5 物体検出</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ja/yolov11_with_depth_camera">YOLOv11 + 深度カメラ</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ja/ai_roboticsyolov26_dual_camera_system">YOLOv26 デュアルカメラシステム</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ja/deploy_depth_anything_v3_jetson_agx_orin">Depth Anything V3</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ja/Jetson-Nano-MaskCam">MaskCam</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ja/Traffic-Management-DeepStream-SDK">交通管理（DeepStream）</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ja/DashCamNet-with-Jetson-Xavier-NX-Multicamera">DashCamNet マルチカメラ</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ja/multiple_cameras_with_jetson">マルチ GMSL カメラ</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ja/jetson_fisheye_surround_view_demo">4 カメラ魚眼サラウンドビュー</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ja/deploy_visual_perception_engine_recomputer">マルチタスクビジョン推論エンジン</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ja/streaming_vision_agent_on_jetson">ストリーミング Vision エージェント（Qwen3-VL）</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ja/deploy_frigate_on_jetson">Frigate NVR</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ja/Security_Scan">セキュリティ X 線スキャン</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ja/industrial_vision_monitoring_on_industrial">産業用ビジョン監視</a></li>
      <li style={{padding:'5px 0',borderBottom:'1px solid var(--ifm-color-emphasis-100)'}}><a href="/ja/deploy_nvblox_jetson_agx_orin">NVBlox 3D マッピング</a></li>
      <li style={{padding:'5px 0'}}><a href="/ja/ai_nvr_with_jetson">AI NVR</a></li>
    </ul>
  </div>
</div>
</div>

<div className="col col--12">
<div className="card margin-bottom--lg">
  <div className="card__header" style={{borderBottom:'1px solid var(--ifm-color-emphasis-200)',padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>パフォーマンス & 分散処理</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <ul style={{listStyle:'none',paddingLeft:0,margin:0,display:'flex',flexWrap:'wrap',gap:'4px 28px'}}>
      <li style={{padding:'7px 0'}}><a href="/ja/deploy_tensorrt_edge_llm_on_jetpack6.2">TensorRT Edge-LLM (JP 6.2)</a></li>
      <li style={{padding:'7px 0'}}><a href="/ja/deploy_tensorrt_edge_llm_on_jetpack7.2">TensorRT Edge-LLM (JP 7.2)</a></li>
      <li style={{padding:'7px 0'}}><a href="/ja/ai_robotics_deploy_tensorrt_model_connect_on_jetson">TensorRT-Model-Connect (JP 7.2)</a></li>
      <li style={{padding:'7px 0'}}><a href="/ja/ai_robotics_distributed_llama_cpp_rpc_jetson">分散 llama.cpp RPC</a></li>
    </ul>
  </div>
</div>
</div>

</div>

## 3. どのようにデプロイすればよいですか？

<div className="row">

<div className="col col--4 margin-bottom--lg">
<div className="card" style={{borderTop:'4px solid #8dc21f'}}>
  <div className="card__header" style={{padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>AI Lab（オンラインプラットフォーム）</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <ol style={{margin:'6px 0 10px',paddingLeft:18}}>
      <li style={{padding:'3px 0'}}><a href="https://sensecraft.seeed.cc/ai-lab/en/models?device=jetson-orin-nano">reComputer AI Lab Models</a>（Jetson で事前フィルタ済み）を開きます</li>
      <li style={{padding:'3px 0'}}>デバイス（例：Jetson Orin Nano）でフィルタし、ベンチマーク付きの CV / LLM / VLM モデルを閲覧します</li>
      <li style={{padding:'3px 0'}}>ワンコマンドの Docker コマンドをコピーして、デバイス上で実行します</li>
    </ol>
    <p style={{margin:'10px 0 0',fontSize:'0.9em',color:'var(--ifm-color-emphasis-700)'}}>最適化済みモデル 100 以上、セットアップ不要、ベンチマーク値付き。</p>
  </div>
</div>
</div>

<div className="col col--4 margin-bottom--lg">
<div className="card" style={{borderTop:'4px solid #0ea5e9'}}>
  <div className="card__header" style={{padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>ワンコマンド CLI</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:'6px 0 10px'}}>jetson-examples をインストールし、その後セクション 2.1 の任意のモデルをデプロイします：</p>
    <pre style={{margin:'0 0 10px'}}><code>{`sudo apt install python3-pip
pip3 install jetson-examples

# Deploy a model (example)
reComputer run qwen3.5-4b`}</code></pre>
    <p style={{margin:0,fontSize:'0.9em',color:'var(--ifm-color-emphasis-700)'}}>OpenAI 互換の API エンドポイントを公開し、curl や任意の OpenAI SDK から直接利用できます。</p>
  </div>
</div>
</div>

<div className="col col--4 margin-bottom--lg">
<div className="card" style={{borderTop:'4px solid #f59e0b'}}>
  <div className="card__header" style={{padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>手動デプロイ</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:'6px 0 10px'}}>セクション 2.2 からエンジンを選び、デバイス上でそのチュートリアルに従います：</p>
    <ul style={{margin:'0 0 0 18px',padding:0}}>
      <li style={{padding:'3px 0'}}>Ollama — 最も簡単なスタート、大規模なモデルライブラリ</li>
      <li style={{padding:'3px 0'}}>MLC LLM — 量子化（Q4）済みコンパイルモデル</li>
      <li style={{padding:'3px 0'}}>llama.cpp — 軽量、GGUF、完全な制御</li>
      <li style={{padding:'3px 0'}}>TensorRT Edge-LLM / Model-Connect — 本番レベルの速度</li>
    </ul>
    <p style={{margin:'10px 0 0',fontSize:'0.9em',color:'var(--ifm-color-emphasis-700)'}}>すべてのチュートリアルは reComputer Jetson デバイスで検証済みです。</p>
  </div>
</div>
</div>

</div>

## 4. パフォーマンスベンチマーク：JetPack 6.2 と 7.2 の比較

<div className="card margin-bottom--lg">
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:'8px 0 12px'}}>同じ <strong>Qwen3.5-27B Q4_K_M</strong> モデル（llama.cpp）を AGX Orin クラスのハードウェア上で実行し、JetPack 6.2 と 7.2 を比較：</p>
    <table>
      <thead>
        <tr><th>指標</th><th>JetPack 6.2</th><th>JetPack 7.2</th><th>変化</th></tr>
      </thead>
      <tbody>
        <tr><td>モデル読み込み後のメモリ</td><td>24.6 GB / 30 GB</td><td>14.7 GB / 30 GB</td><td>約 40% 減少</td></tr>
        <tr><td>推論中の GPU 周波数</td><td>930 MHz</td><td>1.36 GHz</td><td>より高いブースト</td></tr>
        <tr><td>プロンプト処理</td><td>18.2 tok/s</td><td>25.8 tok/s</td><td>約 41.8% 高速</td></tr>
        <tr><td>トークン生成</td><td>4.3 tok/s</td><td>5.5 tok/s</td><td>約 27.9% 高速</td></tr>
      </tbody>
    </table>
    <p style={{margin:'10px 0 4px'}}>詳細：<a href="/ja/jetpack72_deep_dive">JetPack 7.2 Deep Dive</a>。</p>
  </div>
</div>

## 5. FAQ

<div className="row">

<div className="col col--12 margin-bottom--lg">
<div className="card">
  <div className="card__header" style={{padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>Jetson 上で DeepSeek を実行できますか？</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:0}}>はい。DeepSeek-R1 7B は Ollama（<a href="/ja/deploy_deepseek_on_jetson">チュートリアル</a>）経由で Orin NX 16 GB デバイス上で良好に動作します。MLC で量子化された 1.5B バリアントは Orin NX 上で約 60 tok/s に達します（<a href="/ja/deploy_deepseek_on_jetson_with_mlc">チュートリアル</a>）。</p>
  </div>
</div>
</div>

<div className="col col--12 margin-bottom--lg">
<div className="card">
  <div className="card__header" style={{padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>モデルが 1 台のデバイスには大きすぎます — どうすればよいですか？</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <ul style={{margin:0,paddingLeft:18}}>
      <li style={{padding:'3px 0'}}>より小さい量子化（Q8/FP16 の代わりに Q4_K_M）を使用します。</li>
      <li style={{padding:'3px 0'}}>コンテキスト長（<code>--max-sequence-length</code>）を制限して KV キャッシュを小さくします。</li>
      <li style={{padding:'3px 0'}}>llama.cpp RPC（<a href="/ja/ai_robotics_distributed_llama_cpp_rpc_jetson">チュートリアル</a>）で複数の reComputer デバイスに推論を分散します。</li>
    </ul>
  </div>
</div>
</div>

<div className="col col--12 margin-bottom--lg">
<div className="card">
  <div className="card__header" style={{padding:'12px 16px'}}>
    <h3 style={{margin:0,fontSize:'1.05rem'}}>クラウド GPU は必要ですか？</h3>
  </div>
  <div className="card__body" style={{padding:'8px 16px'}}>
    <p style={{margin:0}}>いいえ。上記の内容はすべて完全にオンデバイスで動作します。データはエッジに留まり、継続的な API 利用料金も発生しません。</p>
  </div>
</div>
</div>

</div>

## その他のリソース

<div className="row">

<div className="col col--3 margin-bottom--lg">
<div className="card">
  <div className="card__body" style={{padding:'14px 16px'}}>
    <a href="/ja/Generative_AI_Intro" style={{fontWeight:600}}>Generative AI 入門</a>
    <p style={{margin:'6px 0 0',fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>reComputer-Jetson 向け GenAI トピックの概要</p>
  </div>
</div>
</div>

<div className="col col--3 margin-bottom--lg">
<div className="card">
  <div className="card__body" style={{padding:'14px 16px'}}>
    <a href="/ja/Finetune_LLM_on_Jetson" style={{fontWeight:600}}>Llama-Factory でファインチューニング</a>
    <p style={{margin:'6px 0 0',fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>データセット → 学習 → エクスポート → デプロイ</p>
  </div>
</div>
</div>

<div className="col col--3 margin-bottom--lg">
<div className="card">
  <div className="card__body" style={{padding:'14px 16px'}}>
    <a href="/ja/Jetson_FAQ" style={{fontWeight:600}}>Jetson FAQ</a>
    <p style={{margin:'6px 0 0',fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>トラブルシューティングと使用に関する質問</p>
  </div>
</div>
</div>

<div className="col col--3 margin-bottom--lg">
<div className="card">
  <div className="card__body" style={{padding:'14px 16px'}}>
    <a href="https://github.com/Seeed-Projects/jetson-examples" style={{fontWeight:600}}>jetson-examples</a>
    <p style={{margin:'6px 0 0',fontSize:'0.85em',color:'var(--ifm-color-emphasis-600)'}}>ワンコマンドデプロイ用リポジトリ</p>
  </div>
</div>
</div>

</div>

## 技術サポート & 製品ディスカッション

当社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>