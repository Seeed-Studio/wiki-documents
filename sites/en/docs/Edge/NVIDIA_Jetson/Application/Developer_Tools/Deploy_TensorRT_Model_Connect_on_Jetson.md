---
description: Deploy NVIDIA TensorRT-Model-Connect on Jetson AGX Orin, build Qwen3-4B directly on the device without an x86 ONNX export step, and compare conversion memory and inference performance.
title: Deploy TensorRT-Model-Connect on Jetson
keywords:
  - Jetson
  - TensorRT
  - TensorRT-Model-Connect
  - TRTMC
  - Qwen3
  - LLM
  - JetPack 7.2
  - reComputer Classic J501
  - Edge AI
image: https://files.seeedstudio.com/wiki/TRTMC/trtmc_wiki_cover.png
slug: /ai_robotics_deploy_tensorrt_model_connect_on_jetson
sku: 100003716,100006184
last_update:
  date: 09/20/2026
  author: Dayu
---

# Deploy TensorRT-Model-Connect on Jetson AGX Orin

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/TRTMC/trtmc_wiki_cover.png" alt="Deploy TensorRT-Model-Connect on Jetson AGX Orin" />
</div>

This wiki shows how to run [NVIDIA TensorRT-Model-Connect](https://github.com/NVIDIA/TensorRT-Model-Connect) (TRTMC) on a Seeed reComputer powered by **Jetson AGX Orin**. After the native runtime is built, the path is short: start from a Hugging Face checkpoint, produce a TensorRT `.bundle` on the device, and run text generation. There is no separate x86 host and no ONNX export step.

The walkthrough uses **Qwen3-4B-Instruct-2507** in FP16. That model is a dense transformer, so TensorRT can use a batched prefill engine. The same page also records conversion memory on AGX Orin 64GB and a like-for-like prefill/decode comparison against llama.cpp CUDA.

:::note
TensorRT-Model-Connect is a public preview. APIs, model coverage, and the build flow can still change. NVIDIA’s own guidance is to use TRTMC when you want to try supported models quickly, and to start with [TensorRT Edge-LLM](/deploy_tensorrt_edge_llm_on_jetpack6.2/) when you need a production-oriented LLM/VLM runtime on Jetson.
:::

## What is TensorRT-Model-Connect?

TensorRT-Model-Connect is a collection of model-family reference implementations on top of NVIDIA TensorRT. A family-owned builder reads a Hugging Face snapshot, constructs TensorRT engines, and writes a versioned `.bundle`. The same bundle can be executed from the `trtmc` CLI or from native C++ task APIs such as text generation.

The practical difference on Jetson is the conversion path. TensorRT Edge-LLM still expects you to quantize and export ONNX on an x86 Linux machine with a discrete GPU, then copy those ONNX files to the device for engine generation. TRTMC builds the engine bundle on the Jetson itself.

```mermaid
flowchart LR
  subgraph EdgeLLM["TensorRT Edge-LLM"]
    A1["Hugging Face checkpoint"] --> A2["Quantize + ONNX export on x86 GPU"]
    A2 --> A3["Copy ONNX to Jetson"]
    A3 --> A4["Build engine on Jetson"]
    A4 --> A5["llm_inference"]
  end
  subgraph TRTMC["TensorRT-Model-Connect"]
    B1["Hugging Face checkpoint"] --> B2["python -m tensorrt_model_connect build"]
    B2 --> B3[".bundle on Jetson"]
    B3 --> B4["trtmc run"]
  end
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/TRTMC/trt-diff.png" alt="TensorRT-Model-Connect on-device conversion compared with an x86 ONNX export path" />
</div>

## Why this path is easier on Jetson

| Topic | TensorRT Edge-LLM | TensorRT-Model-Connect |
| --- | --- | --- |
| Where conversion runs | ONNX export on an x86 Linux host with an NVIDIA GPU, then engine build on Jetson | Hugging Face snapshot to `.bundle` on Jetson |
| Intermediate files | ONNX graphs, often tens of gigabytes, copied to the device | None. The `.bundle` is the artifact |
| Commands after setup | Export, copy, build engine, then run `llm_inference` | `python -m tensorrt_model_connect build` and `trtmc run` |
| Host memory during conversion | Vendor docs: FP8 ONNX export can need about 18–20× model size in CPU RAM on the x86 machine | Measured on AGX Orin 64GB for Qwen3-4B FP16: about 30.6 GB host used, 41 GB container peak |
| Best fit | Production LLM/VLM deployment on Jetson | Trying a supported model quickly on the same box that will run it |

The memory row is not a same-model bake-off. Edge-LLM’s published ONNX-export numbers explain why that pipeline usually leaves Jetson and occupies a high-RAM workstation. TRTMC’s numbers below are what we actually observed while building Qwen3-4B FP16 on AGX Orin 64GB.

## Hardware

This tutorial was reproduced on **reComputer Classic J5012** with Jetson AGX Orin 64GB. The Qwen3-4B FP16 conversion peaked around 41 GB inside the container, so 64 GB unified memory is the practical target. J5011 (32GB) is the same product family, but this conversion is likely to thrash or fail there.

<div style={{display:'grid', gridTemplateColumns:'repeat(2, minmax(0, 1fr))', gap:'24px', margin:'28px 0 42px'}}>
  <div style={{display:'flex', flexDirection:'column', overflow:'hidden', borderRadius:'16px', border:'2px solid #00a86b', background:'linear-gradient(145deg, #dce6ee, #cbd8e3)', color:'#172b4d', boxShadow:'0 14px 34px rgba(0,168,107,.18)'}}>
    <div style={{height:'290px', padding:'26px', display:'flex', alignItems:'center', justifyContent:'center', background:'linear-gradient(145deg, #d3dfe9, #bccbd8)'}}>
      <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100003716-gallery_img_1_1.jpg" alt="reComputer Classic J5012 with Jetson AGX Orin 64GB" style={{width:'100%', height:'100%', objectFit:'contain', mixBlendMode:'multiply', filter:'contrast(1.06)'}} />
    </div>
    <div style={{display:'flex', flexDirection:'column', flex:'1', padding:'24px'}}>
      <div style={{fontSize:'23px', lineHeight:'1.35', fontWeight:'900', color:'#172b4d'}}>reComputer Classic J5012</div>
      <div style={{marginTop:'9px', color:'#526581', fontWeight:'600'}}>NVIDIA Jetson AGX Orin 64GB · verified in this wiki</div>
      <div class="get_one_now_container" style={{textAlign:'center', marginTop:'auto', paddingTop:'24px'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Classic-J5012-p-6881.html" target="_blank" rel="noopener noreferrer">
          <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div>
    </div>
  </div>

  <div style={{display:'flex', flexDirection:'column', overflow:'hidden', borderRadius:'16px', border:'2px solid #3182ce', background:'linear-gradient(145deg, #dce6ee, #cbd8e3)', color:'#172b4d', boxShadow:'0 14px 34px rgba(49,130,206,.18)'}}>
    <div style={{height:'290px', padding:'26px', display:'flex', alignItems:'center', justifyContent:'center', background:'linear-gradient(145deg, #d3dfe9, #bccbd8)'}}>
      <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-100006184-recomputer-classic-j5011_1.jpg" alt="reComputer Classic J5011 with Jetson AGX Orin 32GB" style={{width:'100%', height:'100%', objectFit:'contain', mixBlendMode:'multiply', filter:'contrast(1.06)'}} />
    </div>
    <div style={{display:'flex', flexDirection:'column', flex:'1', padding:'24px'}}>
      <div style={{fontSize:'23px', lineHeight:'1.35', fontWeight:'900', color:'#172b4d'}}>reComputer Classic J5011</div>
      <div style={{marginTop:'9px', color:'#526581', fontWeight:'600'}}>NVIDIA Jetson AGX Orin 32GB · same board family</div>
      <div class="get_one_now_container" style={{textAlign:'center', marginTop:'auto', paddingTop:'24px'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Classic-J5011-p-6880.html" target="_blank" rel="noopener noreferrer">
          <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div>
    </div>
  </div>
</div>

## Prerequisites

Prepare the following on the Jetson:

- reComputer Classic J5012, or another Jetson AGX Orin 64GB system
- JetPack 7.2 / Ubuntu 24.04 / L4T R39.2
- Docker with the NVIDIA runtime (`docker info` should list `nvidia` under Runtimes)
- About 40 GB free disk for the development image, Hugging Face snapshot, and `.bundle`
- Network access to GitHub, Hugging Face, and `nvcr.io`
- Optional for the benchmark section: `nvpmodel` MAXN and `jetson_clocks`

The verified software stack was:

| Item | Version |
| --- | --- |
| Device | Jetson AGX Orin 64GB |
| OS | Ubuntu 24.04.4 LTS, kernel 6.8.12-tegra |
| L4T | R39.2 |
| CUDA in the TRTMC image | 13.3.1 |
| TensorRT in the TRTMC image | 11.1.0.106 (TensorRT 26.07) |
| GPU SM | 87 (Orin) |
| Power mode | MAXN, GPU 1300 MHz |

:::tip
If `docker ps` returns `permission denied`, add your user to the `docker` group and log in again:

```bash
sudo usermod -aG docker $USER
```
:::

## 1. Clone TensorRT-Model-Connect

```bash
git clone https://github.com/NVIDIA/TensorRT-Model-Connect.git
cd TensorRT-Model-Connect
```

The official getting-started path is [Build from Source](https://nvidia.github.io/TensorRT-Model-Connect/getting-started/source-build) plus [Quick Start](https://nvidia.github.io/TensorRT-Model-Connect/getting-started/quick-start). The commands below are that path, with Jetson-specific flags filled in.

## 2. Build the development container

On AGX Orin the compute capability is 8.7, so `TRTMC_SM=87`. Jetson Docker images also need `--runtime nvidia`.

```bash
GPU=0
SM="$(
  nvidia-smi -i "$GPU" \
    --query-gpu=compute_cap \
    --format=csv,noheader,nounits |
  tr -d '.[:space:]'
)"
IMAGE="trtmc-quickstart"

docker build \
  -f Dockerfile.dev.aarch64 \
  -t "$IMAGE" \
  requirements

SOURCE_DIR="$(git rev-parse --show-toplevel)"

docker run --rm -it \
  --runtime nvidia \
  --gpus "device=${GPU}" \
  --ipc=host \
  --network host \
  --mount "type=bind,source=${SOURCE_DIR},target=/src" \
  --workdir /src \
  --env TRTMC_SM="$SM" \
  "$IMAGE" \
  bash
```

:::caution
Keep the remaining commands inside this container. The image already pins TensorRT 11.1, a Python 3.12 venv, and the native headers used by the Qwen family build. If `nvidia-smi` is missing on your Jetson, set `SM=87` by hand.
:::

If the Hugging Face snapshot and bundle will live on an external SSD, bind-mount that disk as well, for example `-v /path/to/data:/out`.

## 3. Build the native runtime

Run these commands in the container:

```bash
python -m pip install --no-deps -e . -C py-only=true

TRTMC_BUILD_DIR="build-sm${TRTMC_SM}"

cmake -S . -B "$TRTMC_BUILD_DIR" -G Ninja \
  -DCMAKE_BUILD_TYPE=Release \
  -DCMAKE_CUDA_ARCHITECTURES="${TRTMC_SM}-real" \
  -DTRTMC_BUILD_BACKEND_RTX=OFF \
  -DTRTMC_BUILD_TESTS=OFF \
  -DTRTMC_BUILD_EXAMPLES=OFF

cmake --build "$TRTMC_BUILD_DIR" --parallel "$(nproc)" --target \
  trtmc \
  trtmc_backend_trt \
  trtmc_model_qwen

export PATH="$PWD/$TRTMC_BUILD_DIR:$PATH"
```

`trtmc` looks up native libraries from `--runtime-root`. Point that argument at the CMake build directory, which must contain `libtrtmc_core.so`, `libtrtmc_runtime.so`, `libtrtmc_backend_trt.so`, and `libtrtmc_model_qwen.so`.

## 4. Build the Qwen3-4B bundle on Jetson

This is the conversion step that used to require an x86 GPU box. Pin `--max-sequence-length`. The Hugging Face config for this checkpoint advertises a 262,144-token context, and leaving that default in place will exhaust memory during engine generation.

```bash
python -m tensorrt_model_connect build Qwen/Qwen3-4B-Instruct-2507 \
  --precision fp16 \
  --backend trt \
  --max-sequence-length 2048 \
  --max-batch-size 1 \
  --tensor-parallel-size 1 \
  --output qwen3-4b-instruct-2507.bundle \
  --verbose
```

A local snapshot directory can replace the model ID. The builder downloads the checkpoint, lets the Qwen family claim it, and writes one `.bundle` that already contains the TensorRT engines.

On the verified J5012 unit, Qwen3-4B FP16 with `max_sequence_length=2048` produced the following conversion footprint. The public Qwen single-device FP16 path writes split engines (`engine.plan` + `prefill.plan`); the numbers below were taken from a dual-profile build, where prefill and decode share one plan with two optimization profiles.

| Metric | Measured value |
| --- | --- |
| Precision / layout | FP16, dual-profile |
| Max sequence length | 2048 |
| Engine generation | 128.1 s |
| TensorRT weights | 7.49 GiB |
| Prefill activation memory | 633 MiB |
| Decode activation memory | 12 MiB |
| TensorRT allocator peak GPU | 7,674 MiB |
| Host used, peak | 30,640 MB |
| Container memory, peak | 41.09 GiB |
| Python RSS, peak | 24.7 GB |
| Final `.bundle` | 7.6 GiB |

:::tip
Those host/container peaks are why this wiki recommends AGX Orin 64GB. You are converting on the edge device, but you still need enough unified memory for TensorRT to build the engines.
:::

Inspect the bundle before running it:

```bash
trtmc inspect ./qwen3-4b-instruct-2507.bundle
```

`trtmc inspect` prints JSON. Look for `family: qwen`, `task: text_generation`, and a sections list that includes `engine.plan` plus tokenizer files. A split FP16 build also lists `prefill.plan`. There is still no ONNX graph in the bundle.

## 5. Run inference

```bash
trtmc run ./qwen3-4b-instruct-2507.bundle \
  --runtime-root "$PWD/build-sm${TRTMC_SM}" \
  --prompt "What is the capital of France? Answer in one word." \
  --use-chat-template true \
  --enable-thinking false \
  --max-new-tokens 32
```

A successful run prints a short completion such as `Paris`. The same bundle can be loaded from C++ with `trtmc::load_task(bundle, runtime_root)` and the `ITextGeneration` interface; see the [C++ Task API](https://nvidia.github.io/TensorRT-Model-Connect/api/cpp-api).

## Inference performance vs llama.cpp

Conversion convenience is only half of the story. On the same J5012, we compared TRTMC FP16 with llama.cpp CUDA + flash-attention FP16, both at context 2048. The TRTMC side of this table used the dual-profile engine described above.

Test setup:

- Model: `Qwen/Qwen3-4B-Instruct-2507`, FP16
- Prompt: about 6,000 background characters plus a 70-word Paris question (1,190–1,194 tokens after the chat template)
- Decode: 64 new tokens, greedy (`temperature=0`, `top-k=1`)
- Clocks: `nvpmodel MAXN`, `jetson_clocks`, GPU 1300 MHz
- Warmup 1 + measured 3; table below uses the median of the three measured runs
- llama.cpp: `GGML_CUDA=ON`, `GGML_CUDA_FA=ON`, `-ngl 99 -c 2048 -b 512 -ub 512`

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/TRTMC/trtmc_vs_llamacpp_comparison.png" alt="Qwen3-4B prefill and decode comparison between TensorRT-Model-Connect and llama.cpp on Jetson AGX Orin 64GB" />
</div>

| Backend | Prefill | Decode | Generate (prefill + decode) |
| --- | --- | --- | --- |
| TensorRT-Model-Connect, dual-profile FP16 | 1,967 tok/s · 606.9 ms / 1,194 tok | 18.8 tok/s · 53.3 ms/tok | 4,019 ms |
| llama.cpp CUDA + flash-attn FP16 | 1,601 tok/s · 743.2 ms / 1,190 tok | 19.6 tok/s · 51.1 ms/tok | 3,998 ms |

TRTMC wins the long prefill, which is the workload where a batched TensorRT engine helps. Decode is effectively tied; llama.cpp was slightly ahead in this measurement. End-to-end generate time for 64 new tokens is also close, because decode dominates once the prompt is already long.

:::note
This comparison is for a dense Qwen3-4B transformer. Hybrid Mamba models such as NVIDIA Nano-9B currently prefill token-by-token in TRTMC, so they are a poor way to judge TensorRT throughput.
:::

## What the numbers mean

- **Fewer machines.** You do not need an x86 GPU workstation just to export ONNX. The Jetson that will serve the model can also build it.
- **Lower conversion host RAM than the Edge-LLM FP8 ONNX path.** Edge-LLM documents CPU RAM up to about 20× model size for FP8 ONNX export. The Qwen3-4B FP16 TRTMC build stayed around 31 GB host used / 41 GB container on Orin 64GB.
- **Faster prefill than llama.cpp FP16** in this long-context test, with decode staying in the same band.
- **A reusable artifact.** The `.bundle` is what you copy, inspect, and run. There is no parallel ONNX tree to keep in sync.

## Troubleshooting

| Issue | What to check |
| --- | --- |
| Container cannot see the GPU | Use `--runtime nvidia` and confirm `docker info` lists the `nvidia` runtime |
| Engine build runs out of memory | Pin `--max-sequence-length 2048`, use AGX Orin 64GB, and close other GPU users |
| `trtmc run` cannot load libraries | Pass `--runtime-root` to the CMake build directory; the CLI does not search `PATH` or the current directory for DSOs |
| Hugging Face download fails | Place a local snapshot on disk and pass that directory to `build` instead of the model ID |
| Decode looks fine but prefill is slow | Confirm you are on a dense transformer with a dual-profile / batched prefill engine, not a hybrid Mamba graph |
| `nvidia-smi` is missing on Jetson | Set `SM=87` for AGX Orin |

## Resources

- [TensorRT-Model-Connect repository](https://github.com/NVIDIA/TensorRT-Model-Connect)
- [TensorRT-Model-Connect documentation](https://nvidia.github.io/TensorRT-Model-Connect/)
- [Deploy TensorRT Edge-LLM on JetPack 6.2](/deploy_tensorrt_edge_llm_on_jetpack6.2/)
- [reComputer Classic J501 Getting Started](/ai_robotics_seeed_agx_orin_dev_kit_getting_started/)
- [Qwen3-4B-Instruct-2507](https://huggingface.co/Qwen/Qwen3-4B-Instruct-2507)

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
