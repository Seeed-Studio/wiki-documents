---
description: 在 NVIDIA Jetson 上部署具备双 Qwen3-VL-2B 滚动多模态记忆和实时 Ask 界面的 Streaming Vision Agent
title: Jetson 上的 Streaming Vision Agent
tags:
  - AI 模型部署
  - VLM
  - 计算机视觉
  - reComputer
  - Jetson
  - 多模态记忆
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/computer_vision.webp
sku: 100020039, 100094378
slug: /streaming_vision_agent_on_jetson
last_update:
  date: 08/03/2026
  author: HaoChen
updatedAt: '2026-08-03'
---

# Jetson 上的 Streaming Vision Agent

## 介绍

大多数 Jetson 视觉演示都停留在**单帧**检测（每一帧彼此独立）或**短离线片段**理解（在几秒钟的录制视频上运行一次 VLM）。这两种方式都不会在连续实时流上保持状态，因此在一个物体离开视野之后——或者在片段结束之后——你通常无法带着证据去问“刚才发生了什么？”。一个 **Streaming Vision Agent** 会在边缘侧维护一个短的**在线滚动**多模态记忆——视觉嵌入、情节事件和语义事实——并在摄像头仍在运行时，用带证据帧和片段的回答来响应问题。

本教程在 Seeed Jetson 设备上部署一个实时演示（已在 **reComputer Mini J5012 · JetPack 7.2** 上验证）。USB 摄像头向浏览器 UI 提供画面；两个独立的 **Qwen3-VL-2B** 实例分别负责识别和 Ask，从而在回答问题时不会阻塞后台记忆写入。

:::tip
该设计**受启发于** [WorldMM](https://worldmm.github.io)（CVPR 2026）的多模态记忆理念。此演示面向 Jetson 上的**在线滚动窗口**——它**不是**对论文中离线 EgoLife 基准的复现。参见 [灵感与致谢](#inspiration--acknowledgments)。
:::

<div align="center">
    <img width={700}
     src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/5/-/5-100020039-recomputer-mini-j501---carrier-board-for-jetson-agx-orin.jpg" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-J501-Carrier-Board-for-Jetson-AGX-Orin-p-6606.html" target="_blank" rel="noopener noreferrer">
<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
</a></div>

已在 **reComputer Mini（Jetson AGX Orin 64GB）** 上通过验证，系统为 **JetPack 7.2**（L4T R39.2.0）。

## 概览

| 层级 | 角色 |
| --- | --- |
| 视觉记忆 | VLM2Vec 帧嵌入 + JPEG 证据（约每 5 秒） |
| 情节记忆 | Qwen3-VL-2B **#1** —— 出现 / 移动 / 消失事件（约每 45 秒） |
| 语义事实 | 实体状态（`is_at` / `absent_from` / `usually_at`）+ 时间线 |
| Ask | 检索记忆 → Qwen3-VL-2B **#2** 用轨迹 + 证据进行回答 |

打开 `http://<jetson-ip>:8790` 以查看实时视频、滚动记忆和 Ask。

```text
Camera ──► visual @ ~5s (VLM2Vec)
       └──► episodic @ ~45s (Qwen3-VL-2B recognition)
Ask   ──► retrieve memory ──► Qwen3-VL-2B answer
```

## 支持的硬件

| 项目 | 配置 |
| --- | --- |
| **设备** | [reComputer J501 Mini](https://www.seeedstudio.com/reComputer-Mini-J501-Carrier-Board-for-Jetson-AGX-Orin-p-6606.html) |
| **已验证** | reComputer J501 Mini · **JetPack 7.2**（L4T 39.2.0） |
| **内存 / 磁盘** | 建议 64 GB 内存 · ≥50 GB 可用磁盘空间用于模型和虚拟环境 |
| **摄像头** | USB UVC / V4L2（`/dev/video0`） |

## 安装

### 1. 克隆仓库

```bash
git clone https://github.com/xbs0325/Streaming-Vision-Agent-Orin.git
cd Streaming-Vision-Agent-Orin
```

### 2. 创建 Jetson Python 环境

```bash
bash script/jetson_setup.sh
```

默认虚拟环境路径：`~/leucus/.venv-worldmm`（可通过 `WORLDMM_VENV` 覆盖）。

激活并设置环境变量：

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
在此环境中**不要**设置 `HF_ENDPOINT=https://hf-mirror.com` —— 这可能会破坏 `huggingface_hub` 的下载。
:::

### 3. 下载模型

```bash
bash script/jetson_download_models.sh
```

| 模型 | 默认双 2B 实时模式是否必需 |
| --- | --- |
| Qwen3-VL-2B-Instruct | 是（加载**两次**：识别 + Ask） |
| Qwen3-Embedding-4B | 是 |
| Qwen2-VL-2B-Instruct + VLM2Vec-V2.0 | 是（视觉记忆） |
| Qwen3-VL-8B-Instruct | 可选（`WORLDMM_DOWNLOAD_8B=1` 或 `--episodic-model 8b`） |

Qwen 权重通过 ModelScope 下载；VLM2Vec 通过 Hugging Face（`huggingface.co`）下载。首次下载所需时间取决于网络状况，可能会较长。

## 运行实时演示

连接一个 USB 摄像头，然后执行：

```bash
bash run.sh
# or:
python script/orin_live.py --ui-port 8790 --window-min 8 \
  --visual-interval 5 --episodic-interval 45
```

在浏览器中打开：

```text
http://<jetson-ip>:8790/
```

默认运行时为**双 2B**（独立的模型实例、锁和 CUDA 流）。可选参数：

| 参数 | 含义 |
| --- | --- |
| `--episodic-model 8b` | 使用 Qwen3-VL-8B 进行更强的识别 |
| `--shared-2b` | 一个 2B 同时承担两种角色（更低显存占用；Ask 会等待识别完成） |
| `--window-min 10` | 更长的滚动记忆窗口 |

### 冒烟测试（可选）

短时采集 + 流水线检查：

```bash
python script/orin_smoke.py --vlm qwen3vl-2b --seconds 20 \
  --vlm2vec-base "$WORLDMM_MODELS/Qwen2-VL-2B-Instruct"
```

## 演示结果

Seeed 文件 CDN 上的短视频片段，展示了实时 UI 中的滚动记忆和 Ask 回答。

<video src="https://files.seeedstudio.com/wiki/Jetson_AGX_Orin/streaming_vision_agent_demo_01.mp4" controls width="800"></video>

<video src="https://files.seeedstudio.com/wiki/Jetson_AGX_Orin/streaming_vision_agent_demo_02.mp4" controls width="800"></video>

<video src="https://files.seeedstudio.com/wiki/Jetson_AGX_Orin/streaming_vision_agent_demo_03.mp4" controls width="800"></video>

:::note
在某些 Ask 轮次中（参见上方片段和证据缩略图），文本回答中提到的物体名称，可能与检索到的证据 JPEG / 片段中显示的物体**不同**，后者来自滚动窗口中更早的时刻。对于一个短窗口的双 2B 记忆演示来说，这是预期行为：检索可能会附上最近的视觉证据，而不是完美的身份匹配。为了获得更干净的结果，建议使用居中构图、一次只包含一个物体的交互方式。
:::

## 你应该看到什么

| 场景 | 预期行为 |
| --- | --- |
| 稳定的桌面视角 | 实时画面 + 状态标签；情节 / 视觉计数器随时间增加 |
| 在中心视野中放置 / 移除一个物体（例如耳机盒） | 确认后产生情节事件；Ask 可以回答“刚刚放下的是什么？” |
| 询问 “What was just put down?” | 回答引用时间线 / 事实；可选附带证据 JPEG 或片段 |

识别使用中心偏置触发器以及 FULL + CENTER 裁剪面板，以减少来自图像边缘的手 / 鼠标干扰。

## 本演示中使用的模型

| 角色 | 默认模型 |
| --- | --- |
| 情节识别 | Qwen3-VL-2B-Instruct（实例 #1） |
| Ask / 回答 | Qwen3-VL-2B-Instruct（实例 #2） |
| 文本嵌入 | Qwen3-Embedding-4B |
| 视觉嵌入 | Qwen2-VL-2B-Instruct + VLM2Vec-V2.0 LoRA |

## 故障排查

| 问题 | 解决方法 |
| --- | --- |
| 无法打开 `/dev/video0` | 检查 `ls /dev/video*`；尝试使用 `--device /dev/video1` |
| `huggingface_hub` FileMetadataError | 执行 `unset HF_ENDPOINT`；避免使用 hf-mirror |
| Hub / transformers 冲突 | 保持 `huggingface_hub>=0.34,<1`（已在 `jetson_setup.sh` 中固定） |
| OOM / 非常慢 | 不要并行运行其他重负载 GPU 演示；尝试 `--shared-2b` 或更长的 `--episodic-interval` |
| Ask 感觉被阻塞 | 确认你**没有**使用 `--shared-2b`；默认双 2B 应该在独立流上回答 |
| 端口被占用 | 运行 `fuser -k 8790/tcp` 然后重新启动 |

## 资源

- 项目： https://github.com/xbs0325/Streaming-Vision-Agent-Orin

## 灵感与致谢

这个边缘侧演示受 **WorldMM** 启发——一个用于长视频推理的动态多模态记忆 Agent（CVPR 2026 Highlight）。我们将其三层记忆理念（视觉 / 情节 / 语义）改造为 Jetson 上的实时滚动窗口。

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

同时感谢 [HippoRAG](https://github.com/OSU-NLP-Group/HippoRAG)、[VLM2Vec](https://github.com/TIGER-AI-Lab/VLM2Vec) 以及上游的 [WorldMM](https://github.com/wgcyeo/WorldMM) 实现（Apache-2.0）。


## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
