---
description: 本维基展示如何在 NVIDIA Jetson AGX Thor 上部署 JoyAI-VL-Interaction，重点介绍用于单 GPU 边缘部署的最小实时视频-语言交互栈。
title: 在 Jetson Thor 上部署 JoyAI-VL-Interaction
keywords:
  - Jetson Thor
  - JoyAI
  - VLM
  - 流式传输
  - 生成式 AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /deploy_joyai_vl_interaction_on_jetson_thor
sku: 100060965
last_update:
  date: 07/07/2026
  author: Youjiang
createdAt: '2026-07-07'
updatedAt: '2026-07-08'
url: https://wiki.seeedstudio.com/cn/deploy_joyai_vl_interaction_on_jetson_thor/
---

# 在 Jetson Thor 上部署 JoyAI-VL-Interaction

## 介绍

[JoyAI-VL-Interaction](https://github.com/jd-opensource/JoyAI-VL-Interaction) 是一个开源的实时视频-语言交互系统。它结合了流式 VLM 后端、基于浏览器的 WebUI、可选的 ASR/TTS 服务以及长上下文记忆流水线，使模型能够观看实时场景并在合适的时机做出响应。

截至 **2026 年 7 月 7 日**，上游 JoyAI-VL-Interaction 仓库声明其已在 **NVIDIA Hopper 系列 GPU** 上完成测试。本维基聚焦于一个实用的 **Jetson AGX Thor** 适配路径：先在 Thor 的单 GPU 上部署 **最小栈**（`webinfer + webui`），在核心流水线稳定后再扩展到音频服务。

<div align="center">
    <img width={900}
     src="https://raw.githubusercontent.com/jd-opensource/JoyAI-VL-Interaction/main/img/joyvl-system-architecture.png" />
</div>

## 前置条件

- 1 x NVIDIA Jetson AGX Thor 开发套件
- 1 x USB 摄像头，或一个 RTSP 流源
- 键盘、鼠标、显示器和网络连接
- 至少 30 GB 可用存储空间，用于 Python 环境、模型权重和日志

:::note
本指南假设你的 Jetson Thor 系统已经刷机完成、可以正常启动并且可以访问互联网。
:::

<div class="table-center">
<table style={{ textAlign: 'center' }}>
    <tr>
        <th> NVIDIA Jetson AGX Thor Developer Kit </th>
        <th> USB Camera </th>
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
                    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 </font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/X10-USB-wired-camera-p-6506.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 </font></span></strong>
                </a>
            </div>
        </td>
    </tr>
</table>
</div>

## 入门指南

### 步骤 1. 准备 Jetson Thor 系统

在 Jetson Thor 上打开终端并安装所需的系统软件包：

```bash
sudo apt update
sudo apt install -y git git-lfs curl ffmpeg python3-pip python3.12-venv
git lfs install
```

为了在 Jetson 上获得更好的推理性能，将设备切换到高性能电源模式：

```bash
sudo nvpmodel -m 0
sudo jetson_clocks
```

:::info
JoyAI-VL-Interaction 统一使用 Python `3.12`，因此本指南在 Thor 上也保持相同版本。
:::

### 步骤 2. 安装 `uv` 和 Hugging Face CLI

上游安装脚本使用 [`uv`](https://docs.astral.sh/uv/)，并且模型下载脚本需要 `hf` 命令。

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
source $HOME/.local/bin/env

uv tool install "huggingface_hub[cli]"
hf --version
```

如果仍然找不到 `hf`，请重新打开终端或运行：

```bash
export PATH="$HOME/.local/bin:$PATH"
```

### 步骤 3. 克隆 JoyAI-VL-Interaction 仓库

```bash
git clone https://github.com/jd-opensource/JoyAI-VL-Interaction.git
cd JoyAI-VL-Interaction
```

### 步骤 4. 安装运行环境

首先仅安装核心 WebUI 和流式推理环境：

```bash
./install/install.sh --with-all
```

该脚本会在 `services/.venv` 下创建共享虚拟环境，并安装项目所需的固定版本运行时 `vllm==0.22.0`。

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/joyai_vl_interaction/install_runtime_env.jpg" />
</div>

:::note
如果 `vllm==0.22.0` 在 Jetson ARM64 上安装失败，请不要继续使用默认的基于 wheel 的流程。在这种情况下，请先切换到官方 vLLM ARM64/源码构建路径，然后再回到本指南。
:::

### 步骤 5. 下载模型权重

这里我们按照 Github README 下载所有模型权重：

```bash
./install/download-models.sh --all
```

默认情况下，模型会下载到：

- `/tmp/models/JoyAI-VL-Interaction-Preview`
- `/tmp/models/Qwen3-VL-4B-Instruct`
- `/tmp/models/Qwen3-ASR-1.7B`
- `/tmp/models/Qwen3-TTS-12Hz-1.7B-CustomVoice`

### 步骤 6. 在 Thor 上启动最小 JoyAI 栈

上游默认的 GPU 布局假设存在多块 GPU：

- 主模型在 GPU `0`
- 总结模型在 GPU `1`
- 可选 ASR/TTS 在 GPU `2`

Jetson Thor 是一个 **单 GPU** 平台，因此我们需要将主模型和总结模型都放在 `GPU 0` 上，并以保守的显存设置启动。

在这里，我们需要在 Jetson 上打开四个终端，并分别运行以下命令。

- 终端 1：
    ```bash
    source /home/seeed/JoyAI-VL-Interaction/services/.venv/bin/activate
    cd services/webinfer
    MAIN_GPU=0 MAIN_GPU_MEMORY_UTILIZATION=0.6 bash scripts/run.sh models
    ```
- 终端 2：
    ```bash
    source /home/seeed/JoyAI-VL-Interaction/services/.venv/bin/activate
    cd services/webinfer
    SUMMARY_GPU=0 SUMMARY_GPU_MEMORY_UTILIZATION=0.3 bash scripts/run.sh summary
    ```

:::danger
请注意，你需要等待终端 2 完全启动后，再继续运行终端 3 中的命令。

你可以使用以下命令在终端 2 中查看运行时日志：

`tail -f /home/seeed/JoyAI-VL-Interaction/services/webinfer/summary_vllm_logs/vllm_8065.log`
:::

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/joyai_vl_interaction/lunch.jpg" />
</div>

- 终端 3：
    ```bash
    source /home/seeed/JoyAI-VL-Interaction/services/.venv/bin/activate
    cd services/webinfer
    bash scripts/run.sh adapter
    ```
- 终端 4：
    ```bash
    source /home/seeed/JoyAI-VL-Interaction/services/.venv/bin/activate
    cd services/webui 
    bash scripts/start_server.sh
    ```

:::info
这些数值是面向 Thor 的单 GPU 部署起始配置。如果服务能够稳定启动，你可以逐步提高 GPU 显存利用率。如果 vLLM 报告 OOM 错误，请进一步降低这些数值。
:::

当启动成功时，脚本会启动：

- 端口 `7060` 上的主 VLM OpenAI 兼容 API
- 端口 `8065` 上的总结模型
- 端口 `8070` 上的流式适配器
- 端口 `8099` 上的 WebUI

### 步骤 7. 打开 WebUI

在 Jetson Thor 上打开浏览器并访问：

```text
https://<jetson-thor-ip>:8099
```

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/joyai_vl_interaction/webui.png" />
</div>

WebUI 默认使用自签名证书，因此浏览器在首次访问时可能会显示证书警告。接受该警告并继续访问即可。

然后你可以：

- 在浏览器中选择一个 USB 摄像头
- 输入一个 RTSP 流 URL
- 与 JoyAI-VL-Interaction 开始实时视频交互

## 验证部署

打开另一个终端并运行以下健康检查命令：

```bash
curl http://127.0.0.1:7060/v1/models
curl http://127.0.0.1:8065/v1/models
curl http://127.0.0.1:8070/health
```

如果所有服务都正常工作，WebUI 前端应该能够连接到以下地址的流式适配器：

```text
http://127.0.0.1:8070/v1
```

## 演示

<div class="video-container">
    <iframe width="800" height="450" src="https://www.youtube.com/embed/iyxkqZrzvHs" title="deploy joyai vl interaction on jetson thor" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


## 故障排查

### 1. `hf: command not found`

确保本地二进制路径已被加载：

```bash
source $HOME/.local/bin/env
export PATH="$HOME/.local/bin:$PATH"
```

### 2. `vllm==0.22.0` 或 `vllm-omni==0.22.0` 在 ARM64 上失败

上游项目是围绕基于 vLLM 的服务设计的。如果默认的 pip 或 `uv` 安装在 Jetson ARM64 上失败，请从源码构建 `vllm` 或 `vllm-omni`，或者切换到已包含匹配运行时的 ARM64 CUDA 容器。

### 3. WebUI 能打开，但推理返回 `502`

这通常意味着浏览器前端已启动，但后端模型服务尚未就绪。请重新检查：

```bash
curl http://127.0.0.1:7060/v1/models
curl http://127.0.0.1:8065/v1/models
curl http://127.0.0.1:8070/health
```

## 参考资料

- [JoyAI-VL-Interaction GitHub Repository](https://github.com/jd-opensource/JoyAI-VL-Interaction)
- [JoyAI-VL-Interaction Getting Started](https://github.com/jd-opensource/JoyAI-VL-Interaction/blob/main/doc/getting_started.md)
- [JoyAI-VL-Interaction WebInfer README](https://github.com/jd-opensource/JoyAI-VL-Interaction/blob/main/services/webinfer/README.md)
- [vLLM Installation Guide](https://docs.vllm.ai/en/stable/getting_started/installation/gpu.html)
- [vLLM Omni Repository](https://github.com/vllm-project/vllm-omni)

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
