---
description: Deploy a Streaming Vision Agent on NVIDIA Jetson with dual Qwen3-VL-2B rolling multimodal memory and live Ask UI
title: Streaming Vision Agent on Jetson
tags:
  - AI model deploy
  - VLM
  - Computer Vision
  - reComputer
  - Jetson
  - Multimodal Memory
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/computer_vision.webp
slug: /streaming_vision_agent_on_jetson
last_update:
  date: 08/03/2026
  author: Seeed
updatedAt: '2026-08-03'
---

# Streaming Vision Agent on Jetson

## Introduction

Most Jetson vision demos stop at **single-frame** detection (each frame is independent) or **short offline clip** understanding (run a VLM once over a few seconds of recorded video). Neither keeps state across a continuous live stream, so after an object leaves the view — or after the clip ends — you usually cannot ask “what just happened a moment ago?” with evidence. A **Streaming Vision Agent** keeps a short **online rolling** multimodal memory on the edge — visual embeddings, episodic events, and semantic facts — and answers questions with evidence frames and clips while the camera is still running.

This wiki deploys a real-time demo on Seeed Jetson devices (verified on **reComputer Mini · Jetson AGX Orin 64GB · JetPack 7.2**). A USB camera feeds a browser UI; two independent **Qwen3-VL-2B** instances handle recognition and Ask so answering does not block background memory writes.

:::tip
The design is **inspired by** [WorldMM](https://worldmm.github.io) (CVPR 2026) multimodal memory ideas. This demo targets an **online rolling window** on Jetson — it is **not** a reproduction of the paper’s offline EgoLife benchmarks. See [Inspiration & acknowledgments](#inspiration--acknowledgments).
:::

<div align="center">
    <img width={700}
     src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/5/-/5-100020039-recomputer-mini-j501---carrier-board-for-jetson-agx-orin.jpg" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-J501-Carrier-Board-for-Jetson-AGX-Orin-p-6606.html" target="_blank" rel="noopener noreferrer">
<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
</a></div>

Verified on **reComputer Mini (Jetson AGX Orin 64GB)** with **JetPack 7.2** (L4T R39.2.0).

## Overview

| Layer | Role |
| --- | --- |
| Visual memory | VLM2Vec frame embeddings + JPEG evidence (~every 5 s) |
| Episodic memory | Qwen3-VL-2B **#1** — appear / move / disappear events (~every 45 s) |
| Semantic facts | Entity state (`is_at` / `absent_from` / `usually_at`) + timeline |
| Ask | Retrieve memory → Qwen3-VL-2B **#2** answers with trajectory + evidence |

Open `http://<jetson-ip>:8790` for live video, rolling memory, and Ask.

```text
Camera ──► visual @ ~5s (VLM2Vec)
       └──► episodic @ ~45s (Qwen3-VL-2B recognition)
Ask   ──► retrieve memory ──► Qwen3-VL-2B answer
```

## Supported Hardware

| Item | Configuration |
| --- | --- |
| **Devices** | [reComputer J501 Mini](https://www.seeedstudio.com/reComputer-Mini-J501-Carrier-Board-for-Jetson-AGX-Orin-p-6606.html) |
| **Verified** | reComputer J501 Mini · **JetPack 7.2** (L4T 39.2.0) |
| **RAM / Disk** | 64 GB RAM recommended · ≥50 GB free disk for models + venv |
| **Camera** | USB UVC / V4L2 (`/dev/video0`) |

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/xbs0325/Streaming-Vision-Agent-Orin.git
cd Streaming-Vision-Agent-Orin
```

### 2. Create the Jetson Python environment

```bash
bash script/jetson_setup.sh
```

Default venv path: `~/leucus/.venv-worldmm` (override with `WORLDMM_VENV`).

Activate and set environment variables:

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
Do **not** set `HF_ENDPOINT=https://hf-mirror.com` on this stack — it can break `huggingface_hub` downloads.
:::

### 3. Download models

```bash
bash script/jetson_download_models.sh
```

| Model | Required for default dual-2B live |
| --- | --- |
| Qwen3-VL-2B-Instruct | Yes (loaded **twice**: recognition + Ask) |
| Qwen3-Embedding-4B | Yes |
| Qwen2-VL-2B-Instruct + VLM2Vec-V2.0 | Yes (visual memory) |
| Qwen3-VL-8B-Instruct | Optional (`WORLDMM_DOWNLOAD_8B=1` or `--episodic-model 8b`) |

Qwen weights download via ModelScope; VLM2Vec via Hugging Face (`huggingface.co`). First download may take a while depending on network.

## Run the Live Demo

Connect a USB camera, then:

```bash
bash run.sh
# or:
python script/orin_live.py --ui-port 8790 --window-min 8 \
  --visual-interval 5 --episodic-interval 45
```

Open in a browser:

```text
http://<jetson-ip>:8790/
```

Default runtime is **dual 2B** (separate model instances, locks, and CUDA streams). Optional flags:

| Flag | Meaning |
| --- | --- |
| `--episodic-model 8b` | Stronger recognition with Qwen3-VL-8B |
| `--shared-2b` | One 2B for both roles (lower VRAM; Ask waits on recognition) |
| `--window-min 10` | Longer rolling memory window |

### Smoke test (optional)

Short capture + pipeline check:

```bash
python script/orin_smoke.py --vlm qwen3vl-2b --seconds 20 \
  --vlm2vec-base "$WORLDMM_MODELS/Qwen2-VL-2B-Instruct"
```

## Demo Results

Short clips on Seeed files CDN showing rolling memory and Ask answers in the live UI.

<video src="https://files.seeedstudio.com/wiki/Jetson_AGX_Orin/streaming_vision_agent_demo_01.mp4" controls width="800"></video>

<video src="https://files.seeedstudio.com/wiki/Jetson_AGX_Orin/streaming_vision_agent_demo_02.mp4" controls width="800"></video>

<video src="https://files.seeedstudio.com/wiki/Jetson_AGX_Orin/streaming_vision_agent_demo_03.mp4" controls width="800"></video>

:::note
In some Ask turns (see the clips and evidence thumbnails above), the text answer may name one object while the retrieved evidence JPEG / clip shows a **different** object from an earlier moment in the rolling window. That is expected with a short dual-2B memory demo: retrieval can attach the nearest visual evidence rather than a perfect identity match. Prefer center-framed, one-object-at-a-time interactions for cleaner results.
:::

## What You Should See

| Scene | Expected behavior |
| --- | --- |
| Steady desk view | Live frame + status pills; episodic / visual counters increase over time |
| Place / remove an object (e.g. earphone case) in center view | Episodic event after confirmation; Ask can answer “what was just put down?” |
| Ask “What was just put down?” | Answer cites timeline / facts; optional evidence JPEG or clip |

Recognition uses center-biased triggers and FULL + CENTER crop panels to reduce distraction from hands / mouse at the image edge.

## Models Used in This Demo

| Role | Default model |
| --- | --- |
| Episodic recognition | Qwen3-VL-2B-Instruct (instance #1) |
| Ask / answer | Qwen3-VL-2B-Instruct (instance #2) |
| Text embedding | Qwen3-Embedding-4B |
| Visual embedding | Qwen2-VL-2B-Instruct + VLM2Vec-V2.0 LoRA |

## Troubleshooting

| Issue | Fix |
| --- | --- |
| Cannot open `/dev/video0` | Check `ls /dev/video*`; try `--device /dev/video1` |
| `huggingface_hub` FileMetadataError | `unset HF_ENDPOINT`; avoid hf-mirror |
| Hub / transformers conflict | Keep `huggingface_hub>=0.34,<1` (pinned in `jetson_setup.sh`) |
| OOM / very slow | Do not run other heavy GPU demos in parallel; try `--shared-2b` or longer `--episodic-interval` |
| Ask feels blocked | Confirm you are **not** using `--shared-2b`; default dual-2B should answer on a separate stream |
| Port in use | `fuser -k 8790/tcp` then relaunch |

## Resources

- Project: https://github.com/xbs0325/Streaming-Vision-Agent-Orin

## Inspiration & Acknowledgments

This edge demo is inspired by **WorldMM** — a dynamic multimodal memory agent for long video reasoning (CVPR 2026 Highlight). We adapt the three-memory idea (visual / episodic / semantic) to a real-time rolling window on Jetson.

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

Also thanks to [HippoRAG](https://github.com/OSU-NLP-Group/HippoRAG), [VLM2Vec](https://github.com/TIGER-AI-Lab/VLM2Vec), and the upstream [WorldMM](https://github.com/wgcyeo/WorldMM) implementation (Apache-2.0).


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
