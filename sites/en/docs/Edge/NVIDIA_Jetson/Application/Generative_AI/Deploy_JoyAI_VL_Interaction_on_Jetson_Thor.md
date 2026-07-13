---
description: This wiki shows how to deploy JoyAI-VL-Interaction on NVIDIA Jetson AGX Thor, focusing on the minimal real-time video-language interaction stack for single-GPU edge deployment.
title: Deploy JoyAI-VL-Interaction on Jetson Thor
keywords:
  - Jetson Thor
  - JoyAI
  - VLM
  - Streaming
  - Generative AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /deploy_joyai_vl_interaction_on_jetson_thor
sku: 100060965
last_update:
  date: 07/07/2026
  author: Youjiang
createdAt: '2026-07-07'
updatedAt: '2026-07-07'
url: https://wiki.seeedstudio.com/deploy_joyai_vl_interaction_on_jetson_thor/
---

# Deploy JoyAI-VL-Interaction on Jetson Thor

## Introduction

[JoyAI-VL-Interaction](https://github.com/jd-opensource/JoyAI-VL-Interaction) is an open real-time video-language interaction system. It combines a streaming VLM backend, a browser-based WebUI, optional ASR/TTS services, and a long-context memory pipeline so the model can watch a live scene and respond at the right moment.

As of **July 7, 2026**, the upstream JoyAI-VL-Interaction repository states that it is tested on **NVIDIA Hopper-series GPUs**. This wiki focuses on a practical **Jetson AGX Thor** adaptation path: deploy the **minimal stack first** (`webinfer + webui`) on Thor's single GPU, then extend to audio services only after the core pipeline is stable.

<div align="center">
    <img width={900}
     src="https://raw.githubusercontent.com/jd-opensource/JoyAI-VL-Interaction/main/img/joyvl-system-architecture.png" />
</div>

## Prerequisites

- 1 x NVIDIA Jetson AGX Thor Developer Kit
- 1 x USB camera, or an RTSP stream source
- Keyboard, mouse, monitor, and network connection
- At least 30 GB free storage for Python environments, model weights, and logs

:::note
This guide assumes that your Jetson Thor system is already flashed, boots normally, and has Internet access.
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
                    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now </font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/X10-USB-wired-camera-p-6506.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now </font></span></strong>
                </a>
            </div>
        </td>
    </tr>
</table>
</div>

## Getting Started

### Step 1. Prepare the Jetson Thor system

Open a terminal on Jetson Thor and install the required system packages:

```bash
sudo apt update
sudo apt install -y git git-lfs curl ffmpeg python3-pip python3.12-venv
git lfs install
```

For better inference performance on Jetson, switch the device to a high-performance power mode:

```bash
sudo nvpmodel -m 0
sudo jetson_clocks
```

:::info
JoyAI-VL-Interaction standardizes on Python `3.12`, so this guide keeps the same version on Thor.
:::

### Step 2. Install `uv` and the Hugging Face CLI

The upstream install scripts use [`uv`](https://docs.astral.sh/uv/) and the model download script expects the `hf` command.

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
source $HOME/.local/bin/env

uv tool install "huggingface_hub[cli]"
hf --version
```

If `hf` is still not found, reopen the terminal or run:

```bash
export PATH="$HOME/.local/bin:$PATH"
```

### Step 3. Clone the JoyAI-VL-Interaction repository

```bash
git clone https://github.com/jd-opensource/JoyAI-VL-Interaction.git
cd JoyAI-VL-Interaction
```

### Step 4. Install the runtime

Install only the core WebUI and streaming inference environment first:

```bash
./install/install.sh --with-all
```

This script creates the shared virtual environment under `services/.venv` and installs the pinned `vllm==0.22.0` runtime required by the project.

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/joyai_vl_interaction/install_runtime_env.jpg" />
</div>

:::note
If `vllm==0.22.0` fails to install on Jetson ARM64, do not continue with the default wheel-based flow. In that case, switch to the official vLLM ARM64/source-build path first, then return to this guide.
:::

### Step 5. Download the model weights

Here we follow the Github README to download all model weights:

```bash
./install/download-models.sh --all
```

By default, the models are downloaded to:

- `/tmp/models/JoyAI-VL-Interaction-Preview`
- `/tmp/models/Qwen3-VL-4B-Instruct`
- `/tmp/models/Qwen3-ASR-1.7B`
- `/tmp/models/Qwen3-TTS-12Hz-1.7B-CustomVoice`

### Step 6. Start the minimal JoyAI stack on Thor

The upstream default GPU layout assumes multiple GPUs:

- main model on GPU `0`
- summary model on GPU `1`
- optional ASR/TTS on GPU `2`

Jetson Thor is a **single-GPU** platform, so we need to place both the main model and summary model on `GPU 0` and start with conservative memory settings.

Here, we need to open four terminals on the Jetson and run the following commands separately.

- Terminal1:
    ```bash
    source /home/seeed/JoyAI-VL-Interaction/services/.venv/bin/activate
    cd services/webinfer
    MAIN_GPU=0 MAIN_GPU_MEMORY_UTILIZATION=0.6 bash scripts/run.sh models
    ```
- Terminal2:
    ```bash
    source /home/seeed/JoyAI-VL-Interaction/services/.venv/bin/activate
    cd services/webinfer
    SUMMARY_GPU=0 SUMMARY_GPU_MEMORY_UTILIZATION=0.3 bash scripts/run.sh summary
    ```

:::danger
Please note that you should wait until Terminal 2 has fully started before continuing to run the commands in Terminal 3.

You can check the runtime logs in Terminal 2 using the following command:

`tail -f /home/seeed/JoyAI-VL-Interaction/services/webinfer/summary_vllm_logs/vllm_8065.log`
:::

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/joyai_vl_interaction/lunch.jpg" />
</div>

- Terminal3:
    ```bash
    source /home/seeed/JoyAI-VL-Interaction/services/.venv/bin/activate
    cd services/webinfer
    bash scripts/run.sh adapter
    ```
- Terminal4:
    ```bash
    source /home/seeed/JoyAI-VL-Interaction/services/.venv/bin/activate
    cd services/webui 
    bash scripts/start_server.sh
    ```

:::info
These values are a Thor-oriented starting point for single-GPU deployment. If the service starts reliably, you can gradually increase GPU memory utilization. If vLLM reports OOM errors, lower these values further.
:::

When startup succeeds, the script launches:

- the main VLM OpenAI-compatible API on port `7060`
- the summary model on port `8065`
- the streaming adapter on port `8070`
- the WebUI on port `8099`

### Step 7. Open the WebUI

Open a browser on Jetson Thor and visit:

```text
https://<jetson-thor-ip>:8099
```

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/joyai_vl_interaction/webui.png" />
</div>

The WebUI uses a self-signed certificate by default, so your browser may show a certificate warning on the first visit. Accept the warning and continue.

You can then:

- select a USB webcam in the browser
- enter an RTSP stream URL
- start real-time video interaction with JoyAI-VL-Interaction

## Verify the Deployment

Open another terminal and run the following health checks:

```bash
curl http://127.0.0.1:7060/v1/models
curl http://127.0.0.1:8065/v1/models
curl http://127.0.0.1:8070/health
```

If all services are working correctly, the WebUI frontend should be able to connect to the streaming adapter at:

```text
http://127.0.0.1:8070/v1
```

## Demonstration

<div class="video-container">
    <iframe width="800" height="450" src="https://www.youtube.com/embed/iyxkqZrzvHs" title="deploy joyai vl interaction on jetson thor" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


## Troubleshooting

### 1. `hf: command not found`

Make sure the local binary path is loaded:

```bash
source $HOME/.local/bin/env
export PATH="$HOME/.local/bin:$PATH"
```

### 2. `vllm==0.22.0` or `vllm-omni==0.22.0` fails on ARM64

The upstream project is designed around vLLM-based services. If the default pip or `uv` install fails on Jetson ARM64, build `vllm` or `vllm-omni` from source, or switch to an ARM64 CUDA container that already includes the matching runtime.

### 3. WebUI opens, but inference returns `502`

This usually means the browser frontend is up, but the backend model services are not ready yet. Re-check:

```bash
curl http://127.0.0.1:7060/v1/models
curl http://127.0.0.1:8065/v1/models
curl http://127.0.0.1:8070/health
```

## References

- [JoyAI-VL-Interaction GitHub Repository](https://github.com/jd-opensource/JoyAI-VL-Interaction)
- [JoyAI-VL-Interaction Getting Started](https://github.com/jd-opensource/JoyAI-VL-Interaction/blob/main/doc/getting_started.md)
- [JoyAI-VL-Interaction WebInfer README](https://github.com/jd-opensource/JoyAI-VL-Interaction/blob/main/services/webinfer/README.md)
- [vLLM Installation Guide](https://docs.vllm.ai/en/stable/getting_started/installation/gpu.html)
- [vLLM Omni Repository](https://github.com/vllm-project/vllm-omni)

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
