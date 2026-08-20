---
title: Build a reCamera and NVIDIA Jetson VLM Event Gateway
description: Deploy a two-stage vision application in which reCamera detects people with YOLOv8 and NVIDIA Jetson uses Qwen3-VL to identify red clothing and publish WebSocket events.
keywords:
  - reCamera
  - NVIDIA Jetson
  - Qwen3-VL
  - llama.cpp
  - YOLOv8
  - WebSocket
  - Edge AI
slug: /recamera_jetson_vlm_gateway
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
sku: 102991897, 100029708, 108990120
sidebar_position: 20
last_update:
  date: 08/20/2026
  author: yylin
createdAt: '2026-08-20'
updatedAt: '2026-08-20'
url: https://wiki.seeedstudio.com/recamera_jetson_vlm_gateway/
---

# Build a reCamera and NVIDIA Jetson VLM Event Gateway

## Introduction

This guide deploys a complete two-stage vision demo:

1. A reCamera Basic runs YOLOv8 continuously.
2. Only after it detects a person, it sends that frame to an NVIDIA Jetson.
3. Qwen3-VL on the Jetson decides whether the frame contains a person wearing clearly red clothing.
4. The Jetson broadcasts either a red-person alert or a scene description over WebSocket.
5. The reCamera also provides a 1920×1080 H.264 RTSP stream with person boxes.

```text
reCamera Basic                     NVIDIA Jetson                         Client
YOLOv8 person detector             :8080 llama-server + Qwen3-VL
  |                                :8000 Vision Gateway
  +-- HTTP Base64 JPEG -----------> analyze -> structured VLM result
  +-- RTSP :8554/live0             +---------------- WebSocket /ws ----> app
```

This architecture keeps continuous object detection on the low-power reCamera and invokes the larger vision-language model only when a person is present. It reduces Jetson inference requests while still providing natural-language scene understanding to downstream applications.

:::note
The prebuilt application in this project targets **reCamera Basic with the SG2002 RISC-V SoC**. It does not run on the aarch64-based reCamera Pro.
:::

## Hardware Preparation

| Item | Purpose |
|---|---|
| [reCamera 2002 Series](https://www.seeedstudio.com/reCamera-2002-8GB-p-6251.html) | Runs YOLOv8 person detection and the RTSP stream |
| NVIDIA Jetson Orin device | Runs llama.cpp, Qwen3-VL, and Vision Gateway |
| Development computer | Copies the application to reCamera and subscribes to RTSP/WebSocket output |
| LAN or USB/Ethernet network | Connects reCamera, Jetson, and the client |

## Software Requirements

- reCamera Basic (SG2002/RISC-V), not reCamera Pro.
- NVIDIA Jetson Orin with JetPack, CUDA, and at least 8 GB unified memory recommended.
- Both devices on the same trusted LAN, with mutually reachable IP addresses.
- Git and Python 3.10+ on the Jetson.
- A compatible Qwen3-VL GGUF language model and its matching `mmproj` file.

Download the demo repository on the Jetson or development computer:

```bash
git clone https://github.com/yyling0101-a11y/reCamera-VLM-Gateway.git
```

This guide uses `/home/nvidia/recamera_vl` and these placeholders:

```text
JETSON_IP    Jetson LAN address, for example 192.168.4.33
RECAMERA_IP  reCamera LAN address
```

:::caution
The llama.cpp multimodal subsystem changes quickly and its own documentation warns that breaking changes are expected. Pin a tested llama.cpp commit for a reproducible deployment. A multimodal model normally requires both the language GGUF and a matching projector. See the official [multimodal documentation](https://github.com/ggml-org/llama.cpp/tree/master/tools/mtmd) and [server documentation](https://github.com/ggml-org/llama.cpp/blob/master/tools/server/README.md).
:::

## Set Up NVIDIA Jetson

### Step 1: Check JetPack and CUDA

On the Jetson:

```bash
uname -m
cat /etc/nv_tegra_release
nvcc --version
```

Expected architecture is `aarch64`. If `nvcc` is missing, install a JetPack release that includes the CUDA development toolkit before continuing. You can monitor the device with:

```bash
sudo tegrastats
```

Optional UI monitor:

```bash
sudo python3 -m pip install jetson-stats
jtop
```

### Step 2: Install Build Dependencies

```bash
sudo apt update
sudo apt install -y git cmake build-essential ninja-build pkg-config \
  libssl-dev python3-venv curl
mkdir -p /home/nvidia/recamera_vl
cd /home/nvidia/recamera_vl
```

OpenSSL is useful when llama-server itself must fetch HTTPS images. This demo sends Base64 data URIs, so it does not rely on remote image fetching.

### Step 3: Build llama.cpp with CUDA

```bash
git clone https://github.com/ggml-org/llama.cpp.git
cd llama.cpp

# Recommended: replace this with a commit you have tested and record it.
git rev-parse HEAD

cmake -S . -B build \
  -DGGML_CUDA=ON \
  -DCMAKE_CUDA_ARCHITECTURES=87 \
  -DLLAMA_OPENSSL=ON \
  -DCMAKE_BUILD_TYPE=Release
cmake --build build --config Release -j2 --target llama-server llama-cli
```

Jetson Orin uses compute capability 8.7. If a different Jetson is used, select the appropriate CUDA architecture. Low-memory devices may need `-j1`.

Verify the output and CUDA backend:

```bash
file build/bin/llama-server
build/bin/llama-server --list-devices
```

The list should contain a CUDA device rather than CPU only.

### Step 4: Prepare the Qwen3-VL Model

Obtain the language GGUF and corresponding multimodal projector from the same trusted model release. Do not mix projectors between model variants or revisions. Review its license and checksum before deployment.

Example layout matching the filenames used below:

```text
/home/nvidia/recamera_vl/models/Qwen3-VL-4B-Instruct-GGUF/
├── Qwen3VL-4B-Instruct-Q8_0.gguf
└── mmproj-Qwen3VL-4B-Instruct-Q8_0.gguf
```

:::caution
Q8 may be tight on an 8 GB Jetson once CUDA, KV cache, the projector, and the OS are included. A publisher-provided Q4 variant can reduce memory use. Never rename an unrelated file to match this example.
:::

### Step 5: Start llama-server

Create `/home/nvidia/recamera_vl/start_qwen3_vl.sh`:

```bash
#!/usr/bin/env bash
set -euo pipefail

BASE=/home/nvidia/recamera_vl
MODEL="$BASE/models/Qwen3-VL-4B-Instruct-GGUF/Qwen3VL-4B-Instruct-Q8_0.gguf"
MMPROJ="$BASE/models/Qwen3-VL-4B-Instruct-GGUF/mmproj-Qwen3VL-4B-Instruct-Q8_0.gguf"

exec "$BASE/llama.cpp/build/bin/llama-server" \
  --model "$MODEL" \
  --mmproj "$MMPROJ" \
  --alias qwen3-vl \
  --host 0.0.0.0 \
  --port 8080 \
  --n-gpu-layers all \
  --ctx-size 4096 \
  --parallel 1 \
  --flash-attn auto
```

Then run:

```bash
chmod +x /home/nvidia/recamera_vl/start_qwen3_vl.sh
/home/nvidia/recamera_vl/start_qwen3_vl.sh
```

Flags can change between llama.cpp revisions. If a flag is rejected, use `build/bin/llama-server --help` from the same build rather than copying flags from another release.

In another terminal:

```bash
curl http://127.0.0.1:8080/health
curl http://127.0.0.1:8080/v1/models
```

If memory is insufficient, try `--ctx-size 2048`, a smaller official quantization, or `--no-mmproj-offload` (slower). Quantized KV-cache flags may also be available; confirm their names with `--help`.

### Step 6: Install and Start Vision Gateway

Clone this repository to `/home/nvidia/reCamera-VLM-Gateway`, then:

```bash
cd /home/nvidia
git clone https://github.com/yyling0101-a11y/reCamera-VLM-Gateway.git
cd reCamera-VLM-Gateway
python3 -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
python -m pip install -r vision_gateway/requirements.txt
chmod +x vision_gateway/start.sh
./vision_gateway/start.sh
```

The bundled script expects llama-server at `127.0.0.1:8080`, model alias `qwen3-vl`, and starts a single worker at `0.0.0.0:8000`. Keep one worker because inference serialization and WebSocket connections are in process memory.

Verify:

```bash
curl http://127.0.0.1:8000/health
curl http://127.0.0.1:8000/api/v1/status
```

The health response should show `status: ok`, `busy: false`, and the llama-server URL.

### Step 7: Test Image Analysis and WebSocket

From the repository root:

```bash
base64 -w 0 vision_gateway/image.jpg > /tmp/vision-image.b64
curl http://127.0.0.1:8000/api/v1/analyze \
  -H 'Content-Type: application/json' \
  --data-binary "{\"image_base64\":\"$(</tmp/vision-image.b64)\"}"
```

A successful response contains `red_person_detected`, `message`, and `processing_ms`.

Subscribe from a browser or application before sending another image:

```js
const ws = new WebSocket("ws://JETSON_IP:8000/ws");
ws.onmessage = e => console.log(JSON.parse(e.data));
setInterval(() => ws.readyState === WebSocket.OPEN && ws.send("ping"), 30000);
```

Events are either:

```json
{"type":"red_person_detected","message":"发现了红色衣服的人","request_id":"...","timestamp":0}
```

or:

```json
{"type":"scene_description","message":"...","request_id":"...","timestamp":0}
```

## Set Up reCamera

### Step 1: Connect to reCamera

Complete the [reCamera Getting Started](https://wiki.seeedstudio.com/recamera_getting_started/) guide first. Connect reCamera and Jetson to the same LAN, then confirm their IP addresses. The default USB network address of reCamera is commonly `192.168.42.1`, but use the address assigned by your actual network when communicating with Jetson.

:::note
Camera resources are exclusive. The default `sscma-node` service must be stopped before the standalone C++ application can access the camera.
:::

### Step 2: Deploy and Start the Application

From your computer:

```bash
git clone https://github.com/yyling0101-a11y/reCamera-VLM-Gateway.git
cd reCamera-VLM-Gateway
scp -r recamera root@RECAMERA_IP:/home/recamera/person-vl
ssh root@RECAMERA_IP
```

On reCamera:

```bash
cd /home/recamera/person-vl
chmod +x run.sh bin/person_vl
killall sscma-node 2>/dev/null || true
JETSON_VL_URL=http://JETSON_IP:8000/api/v1/analyze ./run.sh
```

The bundled binary targets reCamera Basic (SG2002/RISC-V) and the video SDK requires root. A person detection queues one JPEG upload; the default cooldown is 10 seconds.

View the annotated stream using RTSP-over-TCP:

```bash
ffplay -rtsp_transport tcp rtsp://RECAMERA_IP:8554/live0
```

## Verify the Complete Demo

Walk into view wearing red primary clothing, then repeat the test without red clothing. Confirm all three outputs:

- reCamera prints `[vl] response ... http=200`.
- the WebSocket receives `red_person_detected` or `scene_description`.
- RTSP shows the person box.

:::tip
The Gateway intentionally allows only one VLM inference at a time. If multiple cameras are used, increase `VL_COOLDOWN_SECONDS` or add an external request queue.
:::

## Resources

- [reCamera Getting Started](https://wiki.seeedstudio.com/recamera_getting_started/)
- [Develop with C/C++ on reCamera](https://wiki.seeedstudio.com/recamera_develop_with_c_cpp/)
- [llama.cpp CUDA Build Documentation](https://github.com/ggml-org/llama.cpp/blob/master/docs/build.md)
- [llama.cpp Multimodal Documentation](https://github.com/ggml-org/llama.cpp/tree/master/tools/mtmd)
- [llama.cpp Server Documentation](https://github.com/ggml-org/llama.cpp/blob/master/tools/server/README.md)

## Technical Support and Product Discussion  

Thank you for choosing our products! We provide different levels of support to ensure your experience with our products is as smooth as possible. We offer multiple communication channels to meet different preferences and needs.  

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>  

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
